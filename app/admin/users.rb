ActiveAdmin.register User do

  scope :wants_newsletter

  controller do
    def update
      region = resource
      region.update_attributes!(params[:user])
      super
    end
  end

  index do
    column :first_name
    column :last_name
    column :email
    column 'OSM ID', :osm_id
    column 'API key', :authentication_token
    column 'POIs created', :create_counter
    column 'POIs edited', :edit_counter
    default_actions
  end

  form do |f|
    f.inputs do
      f.input :first_name
      f.input :last_name
      f.input :email, :input_html => { :readonly=>true }
      f.input :wants_newsletter
    end
    f.inputs "OSM" do
      f.input :osm_id, :label => 'OSM ID'
    end
    f.buttons
  end
end
