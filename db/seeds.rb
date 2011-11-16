# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ :name => 'Chicago' }, { :name => 'Copenhagen' }])
#   Mayor.create(:name => 'Daley', :city => cities.first)

Category.delete_all
Category.connection.execute('ALTER TABLE categories AUTO_INCREMENT=1')

categories = Category.create([
  {:id => 1,  :identifier => :public_transfer},
  {:id => 2,  :identifier => :food},
  {:id => 3,  :identifier => :leisure},
  {:id => 4,  :identifier => :money_post},
  {:id => 5,  :identifier => :education},
  {:id => 6,  :identifier => :shopping},
  {:id => 7,  :identifier => :sport},
  {:id => 8,  :identifier => :tourism},
  {:id => 9,  :identifier => :accommodation},
  {:id => 10, :identifier => :misc},
  {:id => 11, :identifier => :government}
])

NodeType.delete_all
NodeType.connection.execute('ALTER TABLE node_types AUTO_INCREMENT=1')

public_transfer = Category.find_by_identifier('public_transfer')
node_types = NodeType.create([
  {:category => public_transfer, :identifier => :bicycle_rental,  :osm_key => 'amenity',  :osm_value => 'bicycle_rental', :icon => 'cycling.png'},
  {:category => public_transfer, :identifier => :boatyard,        :osm_key => 'waterway', :osm_value => 'boatyard',       :icon => 'boat.png'},
  {:category => public_transfer, :identifier => :bus_station,     :osm_key => 'amenity',  :osm_value => 'bus_station',    :icon => 'busstop.png'},
  {:category => public_transfer, :identifier => :bus_stop,        :osm_key => 'highway',  :osm_value => 'bus_stop',       :icon => 'busstop.png'},
  {:category => public_transfer, :identifier => :car_rental,      :osm_key => 'amenity',  :osm_value => 'car_rental',     :icon => 'carrental.png'},
  {:category => public_transfer, :identifier => :car_sharing,     :osm_key => 'amenity',  :osm_value => 'car_sharing',    :icon => 'carrental.png'},
  {:category => public_transfer, :identifier => :ferry_terminal,  :osm_key => 'amenity',  :osm_value => 'ferry_terminal', :icon => 'ferry.png'},
  {:category => public_transfer, :identifier => :fuel,            :osm_key => 'amenity',  :osm_value => 'fuel',           :icon => 'fillingstation.png'},
  {:category => public_transfer, :identifier => :halt,            :osm_key => 'railway',  :osm_value => 'halt',           :icon => 'train.png'},
  {:category => public_transfer, :identifier => :parking,         :osm_key => 'amenity',  :osm_value => 'parking',        :icon => 'parking.png'},
  {:category => public_transfer, :identifier => :platform,        :osm_key => 'railway',  :osm_value => 'platform',       :icon => 'train.png'},
  {:category => public_transfer, :identifier => :station,         :osm_key => 'railway',  :osm_value => 'station',        :icon => 'train.png'},
  {:category => public_transfer, :identifier => :subway_entrance, :osm_key => 'railway',  :osm_value => 'subway_entrance',:icon => 'underground.png'},
  {:category => public_transfer, :identifier => :terminal,        :osm_key => 'aeroway',  :osm_value => 'terminal',       :icon => 'airport_terminal.png'},
  {:category => public_transfer, :identifier => :tram_stop,       :osm_key => 'railway',  :osm_value => 'tram_stop',      :icon => 'tramway.png'}
])

food = Category.find_by_identifier('food')
node_types = NodeType.create([
  {:category => food, :identifier => :cafe,          :osm_key => 'amenity', :osm_value => 'cafe',           :icon => 'coffee.png'},
  {:category => food, :identifier => :bar,           :osm_key => 'amenity', :osm_value => 'bar',            :icon => 'bar_coktail.png'},
  {:category => food, :identifier => :drinking_water,:osm_key => 'amenity', :osm_value => 'drinking_water', :icon => 'drinkingwater.png'},
  {:category => food, :identifier => :fast_food,     :osm_key => 'amenity', :osm_value => 'fast_food',      :icon => 'fastfood.png'},
  {:category => food, :identifier => :pub,           :osm_key => 'amenity', :osm_value => 'pub',            :icon => 'bar.png'},
  {:category => food, :identifier => :restaurant,    :osm_key => 'amenity', :osm_value => 'restaurant',     :icon => 'restaurant.png'}
])

leisure = Category.find_by_identifier('leisure')
node_types = NodeType.create([
  {:category => leisure,  :identifier => :arena,       :osm_key => 'leisure',  :osm_value => 'arena',       :icon => 'stadium.png'},
  {:category => leisure,  :identifier => :cinema,      :osm_key => 'amenity',  :osm_value => 'cinema',      :icon => 'cinema.png'},
  {:category => leisure,  :identifier => :gallery,     :osm_key => 'amenity',  :osm_value => 'gallery',     :icon => 'museum_art.png'},
  {:category => leisure,  :identifier => :nightclub,   :osm_key => 'amenity',  :osm_value => 'nightclub',   :icon => 'dancinghall.png'},
  {:category => leisure,  :identifier => :theatre,     :osm_key => 'amenity',  :osm_value => 'theatre',     :icon => 'theater.png'},
  {:category => leisure,  :identifier => :zoo,         :osm_key => 'tourism',  :osm_value => 'zoo',         :icon => 'zoo.png'}
])

money_post = Category.find_by_identifier('money_post')
node_types = NodeType.create([
  {:category => money_post, :identifier => :atm,              :osm_key => 'amenity',  :osm_value => 'atm',              :icon => 'atm.png'},
  {:category => money_post, :identifier => :bureau_de_change, :osm_key => 'amenity',  :osm_value => 'bureau_de_change', :icon => 'currencyexchange.png'},
  {:category => money_post, :identifier => :bank,             :osm_key => 'amenity',  :osm_value => 'bank',             :icon => 'bank.png'},
  {:category => money_post, :identifier => :post_office,      :osm_key => 'amenity',  :osm_value => 'post_office',      :icon => 'postal.png'}
])

education = Category.find_by_identifier('education')
node_types = NodeType.create([
  {:category => education,  :identifier => :college,      :osm_key => 'amenity',  :osm_value => 'college',      :icon => 'university.png'},
  {:category => education,  :identifier => :kindergarten, :osm_key => 'amenity',  :osm_value => 'kindergarten', :icon => 'daycare.png'},
  {:category => education,  :identifier => :library,      :osm_key => 'amenity',  :osm_value => 'library',      :icon => 'library.png'},
  {:category => education,  :identifier => :museum,       :osm_key => 'tourism',  :osm_value => 'museum',       :icon => 'museum_archeological.png'},
  {:category => education,  :identifier => :school,       :osm_key => 'amenity',  :osm_value => 'school',       :icon => 'school.png'},
  {:category => education,  :identifier => :university,   :osm_key => 'amenity',  :osm_value => 'university',   :icon => 'university.png'}
])

shopping = Category.find_by_identifier('shopping')
node_types = NodeType.create([
  {:category => shopping,  :identifier => :alcohol,           :osm_key => 'shop', :osm_value => 'alcohol',          :icon => 'liquor.png'},
  {:category => shopping,  :identifier => :bakery,            :osm_key => 'shop', :osm_value => 'bakery',           :icon => 'bread.png'},
  {:category => shopping,  :identifier => :beverages,         :osm_key => 'shop', :osm_value => 'beverages',        :icon => 'liquor.png'},
  {:category => shopping,  :identifier => :bicycle,           :osm_key => 'shop', :osm_value => 'bicycle',          :icon => 'cycling.png'},
  {:category => shopping,  :identifier => :books,             :osm_key => 'shop', :osm_value => 'books',            :icon => 'library.png'},
  {:category => shopping,  :identifier => :butcher,           :osm_key => 'shop', :osm_value => 'butcher',          :icon => 'butcher.png'},
  {:category => shopping,  :identifier => :clothes,           :osm_key => 'shop', :osm_value => 'clothes',          :icon => 'clothers_male.png'},
  {:category => shopping,  :identifier => :computer,          :osm_key => 'shop', :osm_value => 'computer',         :icon => 'computers.png'},
  {:category => shopping,  :identifier => :convenience,       :osm_key => 'shop', :osm_value => 'convenience',      :icon => 'conveniencestore.png'},
  {:category => shopping,  :identifier => :department_store,  :osm_key => 'shop', :osm_value => 'department_store', :icon => 'departmentstore.png'},
  {:category => shopping,  :identifier => :doityourself,      :osm_key => 'shop', :osm_value => 'doityourself',     :icon => 'tools.png'},
  {:category => shopping,  :identifier => :dry_cleaning,      :osm_key => 'shop', :osm_value => 'dry_cleaning',     :icon => 'laundromat.png'},
  {:category => shopping,  :identifier => :electronics,       :osm_key => 'shop', :osm_value => 'electronics',      :icon => 'phones.png'},
  {:category => shopping,  :identifier => :florist,           :osm_key => 'shop', :osm_value => 'florist',          :icon => 'flowers.png'},
  {:category => shopping,  :identifier => :furniture,         :osm_key => 'shop', :osm_value => 'furniture',        :icon => 'homecenter.png'},
  {:category => shopping,  :identifier => :garden_centre,     :osm_key => 'shop', :osm_value => 'garden_centre',    :icon => 'flowers.png'},
  {:category => shopping,  :identifier => :hairdresser,       :osm_key => 'shop', :osm_value => 'hairdresser',      :icon => 'barber.png'},
  {:category => shopping,  :identifier => :hardware,          :osm_key => 'shop', :osm_value => 'hardware',         :icon => 'tools.png'},
  {:category => shopping,  :identifier => :laundry,           :osm_key => 'shop', :osm_value => 'laundry',          :icon => 'laundromat.png'},
  {:category => shopping,  :identifier => :mall,              :osm_key => 'shop', :osm_value => 'mall',             :icon => 'mall.png'},
  {:category => shopping,  :identifier => :kiosk,             :osm_key => 'shop', :osm_value => 'kiosk',            :icon => 'kiosk.png'},
  {:category => shopping,  :identifier => :optician,          :osm_key => 'shop', :osm_value => 'optician',         :icon => 'ophthalmologist.png'},
  {:category => shopping,  :identifier => :shoes,             :osm_key => 'shop', :osm_value => 'shoes',            :icon => 'shoes.png'},
  {:category => shopping,  :identifier => :supermarket,       :osm_key => 'shop', :osm_value => 'supermarket',      :icon => 'supermarket.png'},
])


sport = Category.find_by_identifier('sport')
node_types = NodeType.create([
  {:category => sport,  :identifier => :sports_centre,  :osm_key => 'leisure', :osm_value => 'sports_centre', :icon => 'fitness.png' },
  {:category => sport,  :identifier => :stadium,        :osm_key => 'leisure', :osm_value => 'stadium',       :icon => 'stadium.png' }
])

tourism = Category.find_by_identifier('tourism')
node_types = NodeType.create([
  {:category => tourism,  :identifier => :archaeological_site,  :osm_key => 'historic', :osm_value => 'archaeological_site',  :icon => 'fossils.png' },
  {:category => tourism,  :identifier => :arts_centre,          :osm_key => 'amenity',  :osm_value => 'arts_centre',          :icon => 'artgallery.png'},
  {:category => tourism,  :identifier => :artwork,              :osm_key => 'amenity',  :osm_value => 'artwork',              :icon => 'publicart.png'},
  {:category => tourism,  :identifier => :attraction,           :osm_key => 'tourism',  :osm_value => 'attraction',           :icon => 'artgallery.png'},
  {:category => tourism,  :identifier => :battlefield,          :osm_key => 'historic', :osm_value => 'battlefield',          :icon => 'battlefield.png'},
  {:category => tourism,  :identifier => :beach,                :osm_key => 'natural',  :osm_value => 'beach',                :icon => 'beach.png'},
  {:category => tourism,  :identifier => :castle,               :osm_key => 'historic', :osm_value => 'castle',               :icon => 'castle.png'},
  {:category => tourism,  :identifier => :cave_entrance,        :osm_key => 'natural',  :osm_value => 'cave_entrance',        :icon => 'cave.png'},
  {:category => tourism,  :identifier => :memorial,             :osm_key => 'historic', :osm_value => 'memorial',             :icon => 'memorial.png'},
  {:category => tourism,  :identifier => :theme_park,           :osm_key => 'tourism',  :osm_value => 'theme_park',           :icon => 'themepark.png'},
  {:category => tourism,  :identifier => :viewpoint,            :osm_key => 'tourism',  :osm_value => 'viewpoint',            :icon => 'beautifulview.png'},
])

accommodation = Category.find_by_identifier('accommodation')
node_types = NodeType.create([
  {:category => accommodation,  :identifier => :beach_resort,         :osm_key => 'leisure',  :osm_value => 'beach_resort',       :icon => 'beach.png'},
  {:category => accommodation,  :identifier => :bed_and_breakfast,    :osm_key => 'tourism',  :osm_value => 'bed_and_breakfast',  :icon => 'motel.png'},
  {:category => accommodation,  :identifier => :camp_site,            :osm_key => 'tourism',  :osm_value => 'camp_site',          :icon => 'camping.png'},
  {:category => accommodation,  :identifier => :caravan_site,         :osm_key => 'tourism',  :osm_value => 'caravan_site',       :icon => 'camping.png'},
  {:category => accommodation,  :identifier => :chalet,               :osm_key => 'tourism',  :osm_value => 'chalet',             :icon => 'motel.png'},
  {:category => accommodation,  :identifier => :guest_house,          :osm_key => 'tourism',  :osm_value => 'guest_house',        :icon => 'motel.png'},
  {:category => accommodation,  :identifier => :hostel,               :osm_key => 'tourism',  :osm_value => 'hostel',             :icon => 'motel.png'},
  {:category => accommodation,  :identifier => :hotel,                :osm_key => 'tourism',  :osm_value => 'hotel',              :icon => 'motel.png'},
  {:category => accommodation,  :identifier => :motel,                :osm_key => 'tourism',  :osm_value => 'motel',              :icon => 'motel.png'},
])

misc = Category.find_by_identifier('misc')
node_types = NodeType.create([
  {:category => misc,  :identifier => :doctors,           :osm_key => 'amenity',  :osm_value => 'doctors',          :icon => 'medicine.png'},
  {:category => misc,  :identifier => :hospital,          :osm_key => 'amenity',  :osm_value => 'hospital',         :icon => 'firstaid.png'},
  {:category => misc,  :identifier => :pharmacy,          :osm_key => 'amenity',  :osm_value => 'pharmacy',         :icon => 'firstaid.png'},
  {:category => misc,  :identifier => :place_of_worship,  :osm_key => 'amenity',  :osm_value => 'place_of_worship', :icon => 'prayer.png'},
  {:category => misc,  :identifier => :toilets,           :osm_key => 'amenity',  :osm_value => 'toilets',          :icon => 'toilets.png'},
  {:category => misc,  :identifier => :veterinary,        :osm_key => 'amenity',  :osm_value => 'veterinary',       :icon => 'veterinary.png'}
])

government = Category.find_by_identifier('government')
node_types = NodeType.create([
  {:category => government,  :identifier => :courthouse,      :osm_key => 'amenity',  :osm_value => 'courthouse',       :icon => 'court.png'},
  {:category => government,  :identifier => :townhall,        :osm_key => 'amenity',  :osm_value => 'townhall',         :icon => 'bigcity.png'}
])

Region.delete_all
Region.connection.execute('ALTER TABLE regions AUTO_INCREMENT=1')
f = File.new "#{Rails.root}/db/data/polygons.sql"
while statements = f.gets("\n") do
  ActiveRecord::Base.connection.execute(statements)
end
