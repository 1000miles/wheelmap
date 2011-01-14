require 'oauth'
require 'oauth/consumer'
require 'oauth/request_proxy/action_controller_request'
require 'oauth/signature/rsa/sha1'
require 'oauth/signature/hmac/sha1'

class OauthController < ApplicationController
  before_filter :authenticate_user!
  
  rescue_from OAuth::Unauthorized, :with => :unauthorized

  def new
    @consumer = OAuth::Consumer.new(OpenStreetMapConfig.oauth_key, OpenStreetMapConfig.oauth_secret, :site => OpenStreetMapConfig.oauth_site)
    current_user.update_attribute(:oauth_request_token, @consumer.get_request_token)
    redirect_to request_token.authorize_url
  end
  
  def osm_register
    @consumer = OAuth::Consumer.new(OpenStreetMapConfig.oauth_key, OpenStreetMapConfig.oauth_secret, :site => OpenStreetMapConfig.oauth_site)
    request_token = @consumer.get_request_token
    current_user.update_attribute(:oauth_request_token, request_token)
    host = URI.parse(OpenStreetMapConfig.oauth_site).host
    redirect_url = url_for(:host => host, :controller => 'user', :action => 'new', :referer => "/oauth/authorize?oauth_token=#{request_token.token}")
    redirect_to redirect_url
  end

  def revoke
    token = current_user.oauth_token
    current_user.revoke_oauth_credentials
    redirect_to "#{OpenStreetMapConfig.oauth_site}/oauth/revoke?token=#{token}"
  end

  def callback
    current_user.set_oauth_credentials(params[:oauth_verifier])
    flash[:notice] = t('oauth.callback.notice', :user => current_user.email)
    redirect_to root_url
  end
  
  protected
  def unauthorized
    @message = I18n.t('nodes.errors.not_authorized')
    render :template => 'shared/error', :status => 400
  end
end
