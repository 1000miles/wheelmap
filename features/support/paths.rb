module NavigationHelpers
  # Maps a name to a path. Used by the
  #
  #   When /^I go to (.+)$/ do |page_name|
  #
  # step definition in web_steps.rb
  #
  def path_to(page_name)
    case page_name

    when /the home\s?page/
      '/'

    when /the spanish home page/
      '/es'

    when /the german home page/
      '/'

    when /the english home page/
      '/en'

    when /the sign_in page/
      '/users/sign_in'

    when /the sign_up page/
      '/users/sign_up'

    when /the oauth page/
      '/oauth'

    when /the registration page/
      arguments = CGI.escape("/oauth/authorize?oauth_token=#{session[:request_token].token}")
      "http://api06.dev.openstreetmap.org/user/new?referer=#{arguments}"

    when /the search result page/
      '/search'

    when /the last poi's page/
      poi = Poi.last
      "/nodes/#{poi.to_param}.html"
    # the following are examples using path_to_pickle
    
    when /the last user's edit page/
      user = User.last
      "/profile/#{user.to_param}/edit"

    when /^#{capture_model}(?:'s)? page$/                           # eg. the forum's page
      path_to_pickle $1

    when /^#{capture_model}(?:'s)? #{capture_model}(?:'s)? page$/   # eg. the forum's post's page
      path_to_pickle $1, $2

    when /^#{capture_model}(?:'s)? #{capture_model}'s (.+?) page$/  # eg. the forum's post's comments page
      path_to_pickle $1, $2, :extra => $3                           #  or the forum's post's edit page

    when /^#{capture_model}(?:'s)? (.+?) page$/                     # eg. the forum's posts page
      path_to_pickle $1, :extra => $2                               #  or the forum's edit page
      raise path_to_pickle.inspect

    else
      begin
        page_name =~ /the (.*) page/
        path_components = $1.split(/\s+/)
        self.send(path_components.push('path').join('_').to_sym)
      rescue Object => e
        raise "Can't find mapping from \"#{page_name}\" to a path.\n" +
          "Now, go and add a mapping in #{__FILE__}"
      end
    end
  end
end

World(NavigationHelpers)
