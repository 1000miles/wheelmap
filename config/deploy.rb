set :application, "wheelmap"
set :repository,  "git@github.com:sozialhelden/wheelmap.git"

set :branch, ENV['BRANCH'] || ((rails_env.to_sym == :production) ? "production" : "master")


set :use_sudo, false

set :scm, :git
# Or: `accurev`, `bzr`, `cvs`, `darcs`, `git`, `mercurial`, `perforce`, `subversion` or `none`

set :deploy_via, :remote_cache
set :git_shallow_clone, 1

set :default_run_options, :pty => true # or else you'll get "sorry, you must have a tty to run sudo"

set :ssh_options, :keys => [ File.expand_path("~/.ssh/wheelmap_rsa") ], :forward_agent => true

set :user, 'rails'

# If you are using Passenger mod_rails uncomment this:
# if you're still using the script/reapear helper you will need
# these http://github.com/rails/irs_process_scripts

before 'deploy',              'safety_check'

after  'deploy:setup',        'deploy:create_shared_config'
after  'deploy:update_code',  'deploy:generate_assets'
after  'deploy:update_code',  'deploy:remove_all_unfinished_locales'
after  'deploy:update_code',  'deploy:symlink_configs'

after  'deploy',              'deploy:cache:clear'


task :safety_check do
  if rails_env.to_sym == :production
    c = CLI.ui.ask "This will deploy branch '#{branch}' to production. Ok Y/N?"
    exit unless c.downcase == 'y'
  end
end

namespace :delayed_job do
  desc 'Start monitoring the delayed job process'
  task :monitor do
    sudo "/usr/sbin/monit monitor delayed_job"
  end

  desc 'Stop monitoring the delayed job process'
  task :unmonitor do
    sudo "/usr/sbin/monit unmonitor delayed_job"
  end

end

namespace :unicorn do
  desc "Zero-downtime restart of Unicorn"
  task :restart, :except => { :no_release => true } do
    sudo "/etc/init.d/unicorn_#{rails_env} restart"
  end

  desc "Start unicorn"
  task :start, :except => { :no_release => true } do
    sudo "/etc/init.d/unicorn_#{rails_env} start"
  end

  desc "Stop unicorn"
  task :stop, :except => { :no_release => true } do
    sudo "/etc/init.d/unicorn_#{rails_env} stop"
  end
  after "deploy:restart", "unicorn:restart"
  after "deploy:start", "unicorn:start"
  after "deploy:stop", "unicorn:stop"
  after "deploy:symlink", "deploy:create_release_info"
end

namespace :deploy do
  after  "deploy:symlink", "deploy:git:push_deploy_tag"
  after  "deploy:symlink", "deploy:newrelic:notify_deployment"
  before "deploy:cleanup", "deploy:git:cleanup_deploy_tag"

  namespace :git do

    desc "Place release tag into Git and push it to server."
    task :push_deploy_tag do
      user = `git config --get user.name`
      email = `git config --get user.email`

      puts `git tag #{rails_env}_#{release_name} #{revision} -m "Deployed by #{user} <#{email}>"`
      puts `git push --tags`
    end
  end

  namespace :newrelic do
    task :notify_deployment do
      if rails_env.to_sym == :production
        system 'curl -H "x-api-key:4b26d9adb684ffd9794d030a79d3103ef5d2dd98" -d "deployment[app_name]=Wheelmap" https://api.newrelic.com/deployments.xml'
      end
    end
  end

  task :start do ; end
  task :stop do ; end
  task :restart do; end

  task :create_shared_config do
    run "mkdir -p #{shared_path}/config/"
    run "mkdir -p #{shared_path}/tmp/var"
    run "mkdir -p #{shared_path}/tmp/osmosis-working-dir"
    run "mkdir -p #{shared_path}/tmp/cache"

    run "touch #{shared_path}/config/database.yml"
  end

  task :symlink_configs do
    run "ln -nfs #{shared_path}/tmp/osmosis-working-dir #{release_path}/tmp/osmosis-working-dir"
    run "ln -nfs #{shared_path}/tmp/var #{release_path}/tmp/var"
    run "ln -nfs #{shared_path}/tmp/cache #{release_path}/tmp/cache"

    %w(database.yml open_street_map.yml metrics.yml).each do |file|
      run "ln -nfs #{shared_path}/config/#{file} #{release_path}/config/#{file}"
    end
  end

  task :create_release_info do
    run "gitrev=`cat #{current_path}/REVISION`; echo \"release_name: #{release_name}\\nbranch: #{branch}\\ngit_sha: $gitrev\" > #{current_path}/RELEASE_INFO"
  end

  task :remove_all_unfinished_locales do
    if rails_env.to_sym == :production
      run "cd #{release_path} && RAILS_ENV=#{rails_env} bundle exec rake housekeeping:remove_all_unfinished_locales"
    else
      puts "This task only runs in production env."
    end
  end

  namespace :cache do
    task :clear do
      run "cd #{current_path} && RAILS_ENV=#{rails_env} bundle exec rake cache:clear"
    end
  end

  task :generate_assets, :roles => :web do
    send(:run, "cd #{release_path} && RAILS_ENV=#{rails_env} bundle exec jammit config/assets.yml")
  end


end

task :log do
  run "tail -f #{deploy_to}/current/log/#{stage}.log"
end

task :sh do
  user = ENV['USER_NAME'] if ENV['USER_NAME']
  user_option = user ? "-l #{user}" : ""
  cmd = "ssh #{user_option} -t #{roles[:app].servers.first} -p 22022 'cd #{deploy_to}/current; bash -l'"
  puts cmd
  system(cmd)
end

task :console do
  cmd = "ssh -l #{user} -t #{roles[:app].servers.first} -p 22022 'cd #{deploy_to}/current; bash -l -c \"bundle exec rails c #{stage}\"'"
  puts cmd
  system(cmd)
end

task :c do
  console
end

set :stages,        %w(staging production)
set :default_stage, "staging"
require 'capistrano/ext/multistage'

# have builder check and install gems after each update_code
require 'bundler/capistrano'
set :bundle_without, [:development, :test, :metrics, :deployment]

require 'config/boot'
require 'hoptoad_notifier/capistrano'
