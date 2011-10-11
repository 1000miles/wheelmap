class AddGeoIndexToQueuedNodes < ActiveRecord::Migration
  def self.up
    execute 'ALTER TABLE queued_nodes ENGINE=MyISAM'
    add_column :queued_nodes, :geom, :point, :null => false rescue nil

    OpenStreetMap::QueuedNode.all.each do |node|
      attribs = ActiveSupport::JSON.decode(node.node_attributes)
      node.geom = Point.from_x_y(attribs['lon'], attribs['lat'])
      node.save!
    end

    add_index :queued_nodes, :geom, :spatial => true
  end

  def self.down
    remove_column :queued_nodes, :geom
  end
end
