attr = DS.attr

Wheelmap.Node = DS.Model.extend
  lat: attr()
  lon: attr()
  name: attr()
  icon: attr()
  sponsor: attr()
  wheelchair: attr()
  category: attr()
  addr: attr()
  region: attr()
  type: attr()
  oldWheelchair: null

  wheelchairWillChange: (()->
    oldWheelchair = @get('oldWheelchair')

    unless oldWheelchair?
      @set('oldWheelchair', @get('wheelchair'))
  ).observesBefore('wheelchair')

  location: (()->
    new L.LatLng(@get('lat'), @get('lon'))
  ).property('lat', 'lon')

  statusText: (()->
    I18n.t('wheelchairstatus.' + @get('wheelchair'));
  ).property('wheelchair')

  headline: (()->
    @get('name') || I18n.t("poi.name." + @get('category') + "." + @get('type'))
  ).property('name', 'type', 'category')

  breadcrumbs: (()->
    category = @get('category')

    [
      @get('region'),
      I18n.t("poi.category." + category),
      I18n.t("poi.name." + category + "." + @get('type'))
    ]
  ).property('type','category')

  showPath: (()->
    '/nodes/' + @get('id')
  ).property('id')

  editPath: (()->
    '/nodes/' + @get('id') + '/edit'
  ).property('id')

  updatePath: (()->
    '/nodes/' + @get('id') + '/update_wheelchair.js'
  ).property('id')

  address: (()->
    address = ''
    addr = @get('addr')

    if addr.street? and addr.housenumber?
      address += I18n.t('node.address.street', street: addr.street, housenumber: addr.housenumber)

    if addr.city? and addr.postcode?
      address += ' ' + I18n.t('node.address.city', postcode: addr.postcode, city: addr.city)

    address
  ).property('addr.street', 'addr.housenumber', 'addr.postcode', 'addr.city')

Wheelmap.NodeAdapter = DS.RESTAdapter.extend()

Wheelmap.Node.reopenClass
  WHEELCHAIR_STATUSES: ['yes', 'limited', 'no']