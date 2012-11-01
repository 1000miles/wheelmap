ActiveAdmin.register Category do

  controller do
    def update
      region = resource
      region.update_attributes!(params[:category])
      super
    end
  end

  index do
    column :id
    column :identifier
    column 'name', :localized_name
    default_actions
  end


end