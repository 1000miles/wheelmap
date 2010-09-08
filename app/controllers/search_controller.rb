class SearchController < ApplicationController
  
  def index
    respond_to do |wants|
      wants.js  {
        @result = JSON.parse(Net::HTTP.get_response(URI.parse(osm_url('json'))).body)
        render :format => 'js'}
      wants.xml {render :xml   => Net::HTTP.get_response(URI.parse(osm_url('xml'))).body }
      wants.json{render :json => Net::HTTP.get_response(URI.parse(osm_url('json'))).body }
      wants.html{
        @result = JSON.parse(Net::HTTP.get_response(URI.parse(osm_url('json'))).body)
      }
    end
  end
  
private
  
  def osm_url(format)
    q = URI.escape(params[:q])
    "http://nominatim.openstreetmap.org/search?q=#{q}&format=#{format}&accept-language=#{I18n.locale}&osm_type=N"
  end
  
end
