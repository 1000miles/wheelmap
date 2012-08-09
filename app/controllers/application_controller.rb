class ApplicationController < ActionController::Base
  protect_from_forgery

  helper :all

  before_filter :redirect_to_default_locale

  before_filter :set_last_location

  before_filter :set_ab_tester

  before_filter :set_abingo_identity

  before_filter :store_iphone_stats, :if => [:get_request?, :mobile_app?]

  rescue_from Errno::ETIMEDOUT, :with => :timeout
  rescue_from Timeout::Error,   :with => :timeout

  protected

  def set_abingo_identity
    if user_is_a_bot?
        Abingo.identity = "robot"
    elsif (user_signed_in? rescue false)
      Abingo.identity = current_user.id
    else
      session[:abingo_identity] ||= rand(10 ** 10)
      Abingo.identity = session[:abingo_identity]
    end
  end

  def user_is_a_bot?
    @bot ||= !(request.user_agent =~ /\b(Baidu|Gigabot|Googlebot|libwww-perl|lwp-trivial|msnbot|SiteUptime|Slurp|WordPress|Yodao|ZIBB|ZyBorg)\b/i).nil?
  end

  def redirect_to_default_locale
    match = /^\/#{I18n.default_locale}\b/
    redirect_to request.fullpath.gsub(match, '') if request.fullpath =~ match
  end

  def default_url_options(options = nil)
    {:locale => I18n.locale}
  end

  def authenticate_application!
    unless current_user.app_authorized?
      if mobile_app?
        render :json => {:id => current_user.id, :message => 'Application needs to be authorized', :url => edit_user_url(current_user)}.to_json, :status => 403
      else
        respond_to do |format|
          format.html{
            flash[:alert] = I18n.t('nodes.flash.authorize_wheelmap')
            redirect_to edit_user_path(current_user)
          }
          format.json{render_exception(Exception.new(I18n.t('nodes.flash.authorize_wheelmap')), 403)}
          format.xml{render_exception(Exception.new(I18n.t('nodes.flash.authorize_wheelmap')), 403)}
        end
      end
    end
  end

  def after_sign_in_path_for(resource)
    if params[:controller] =~ /registration/
      edit_profile_path(current_user.id)
    else
      super
    end
  end

  helper_method :after_sign_in_path_for

  def stored_location_for(resource_or_scope)
    location = super
    return location unless location =~ /geojson/
  end

  def wheelmap_visitor
    User.find_by_email('visitor@wheelmap.org')
  end

  def mobile_app?
    request.user_agent.start_with?('Wheelmap') rescue false
  end

  def default_user
    current_user || wheelmap_visitor
  end

  def timeout(exception)
    HoptoadNotifier.notify(exception,:component => self.class.name, :parameters => params)

    @message = I18n.t('nodes.errors.not_available')
    render :template => 'shared/error', :status => 503
  end

  def error(exception)
    HoptoadNotifier.notify(exception,:component => self.class.name, :parameters => params)

    @message = I18n.t('nodes.errors.default')
    render :template => 'shared/error', :status => 400
  end

  def set_ab_tester
    # Tester dont't participate, if they already saw the splash screen
    session['_ab_tester'] = cookies['_wheelmap_splash_seen'].blank? if session['_ab_tester'].blank?
  end

  def set_last_location
    cookies['last_lat'] = params[:lat] if params[:lat]
    cookies['last_lon'] = params[:lon] if params[:lon]
  end

  def authenticate_mobile_user
    unless @user = User.authenticate(params[:email], params[:password])
      render :text => 'Authorization failed', :status => 400
    end
  end

  def authenticate_mobile_app
    unless @user.app_authorized?
      render :json => {:id => @user.id, :message => 'Application needs to be authorized', :url => edit_user_url(@user)}.to_json, :status => 403
    end
  end

  def not_found(exception)
    # HoptoadNotifier.notify(exception,:component => self.class.name, :parameters => params)
    @message = I18n.t('nodes.errors.not_found')
    render :template => 'shared/error', :status => 404
  end

  def check_update_wheelchair_params
    render( :text => 'Params missing', :status => 406 ) if params[:wheelchair].blank?
  end

  def get_request?
    request.method == 'GET'
  end

  def store_iphone_stats
    @iphone_headers ||= request.env.inject({}) do |h, (k, v)|
      if k =~ /^(HTTP|CONTENT)_/
        h[k.sub(/^HTTP_/, '').dasherize.gsub(/([^\-]+)/) { $1.capitalize }] = v
      end
      h
    end

    unless @iphone_headers.empty?
      if iphone_counter = IphoneCounter.find_by_install_id(@iphone_headers['Install-Id'])
        iphone_counter.app_version    = @iphone_headers['User-Agent'].gsub(/^Wheelmap\/(\S+)\s.+/, '\1')
        iphone_counter.os_version     = @iphone_headers['Os-Version']
        iphone_counter.device_version = @iphone_headers['Device-Model'].gsub(/,/, '_') if @iphone_headers['Device-Model']
        iphone_counter.save if iphone_counter.changed?
      else
        iphone_counter = IphoneCounter.create!({
          :install_id     => @iphone_headers['Install-Id'],
          :app_version    => @iphone_headers['User-Agent'].gsub(/^Wheelmap\/(\S+)\s.+/, '\1'),
          :os_version     => @iphone_headers['Os-Version'],
          :device_version => @iphone_headers['Device-Model'].gsub(/,/, '_')
        })
      end
    end
  end

  def track_page_view(url)
    flash[:view] = url
  end

  def track_event(params)
    flash[:track] = params
  end


end
