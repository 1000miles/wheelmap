var map;

var showPopupOnHover = false;
text = new Array("Informationen zur Karte anzeigen","Informationen zur Karte verstecken");

function drawmap() {
    OpenLayers.Lang.setCode('de');
    
    map = new OpenLayers.Map('map', {
        projection: new OpenLayers.Projection("EPSG:900913"),
        displayProjection: new OpenLayers.Projection("EPSG:4326"),
        controls: [
		new OpenLayers.Control.MouseDefaults(),
		new OpenLayers.Control.Attribution()],
        maxExtent:
            new OpenLayers.Bounds(-20037508.34,-20037508.34,
                                    20037508.34, 20037508.34),
        numZoomLevels: 18,
        maxResolution: 156543,
        units: 'meters'
    });



// Noch mehr Kontrollelemente hinzufügen..
map.addControl(new OpenLayers.Control.PanZoomBar());



// Position und Zoomstufe der Karte
lon = 13.393833875481;
lat = 52.514131754649;
zoom = 12; 

checkForPermalink();




// Layer hinzufügen

layer_markers = new OpenLayers.Layer.Markers("Marker", { projection: new OpenLayers.Projection("EPSG:4326"),visibility: true, displayInLayerSwitcher: false });
layer_vectors = new OpenLayers.Layer.Vector("Zeichnungen", { displayInLayerSwitcher: false } );map.addLayer(layer_vectors);map.addLayer(layer_markers)
layers = new Array();
layer_layerMapnik = new OpenLayers.Layer.OSM.Mapnik("Mapnik");
map.addLayer(layer_layerMapnik)
layers.push(new Array(layer_layerMapnik,'layer_layerMapnik'));
setLayer(0);


// An die richtige Stelle springen..
jumpTo(lon,lat,zoom);

// Benutzte Marker Icons hinzufügen..
icons = new Array();


// Marker hinzufügen


geometries = new Array();


// Nochmal was..
jumpTo(lon, lat, zoom);
toggleInfo();
checkUtilVersion(4);
}

drawmap();
