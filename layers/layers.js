var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenTopoMap_1 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_area_potencial_basalto_2 = new ol.format.GeoJSON();
var features_area_potencial_basalto_2 = format_area_potencial_basalto_2.readFeatures(json_area_potencial_basalto_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_area_potencial_basalto_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_area_potencial_basalto_2.addFeatures(features_area_potencial_basalto_2);
var lyr_area_potencial_basalto_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_area_potencial_basalto_2, 
                style: style_area_potencial_basalto_2,
                popuplayertitle: 'area_potencial_basalto',
                interactive: true,
                title: '<img src="styles/legend/area_potencial_basalto_2.png" /> area_potencial_basalto'
            });
var format_Regiones_3 = new ol.format.GeoJSON();
var features_Regiones_3 = format_Regiones_3.readFeatures(json_Regiones_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regiones_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regiones_3.addFeatures(features_Regiones_3);
var lyr_Regiones_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regiones_3, 
                style: style_Regiones_3,
                popuplayertitle: 'Regiones',
                interactive: true,
                title: '<img src="styles/legend/Regiones_3.png" /> Regiones'
            });
var format_potencial_basalto_4 = new ol.format.GeoJSON();
var features_potencial_basalto_4 = format_potencial_basalto_4.readFeatures(json_potencial_basalto_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_potencial_basalto_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_potencial_basalto_4.addFeatures(features_potencial_basalto_4);
var lyr_potencial_basalto_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_potencial_basalto_4, 
                style: style_potencial_basalto_4,
                popuplayertitle: 'potencial_basalto',
                interactive: true,
                title: '<img src="styles/legend/potencial_basalto_4.png" /> potencial_basalto'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenTopoMap_1.setVisible(true);lyr_area_potencial_basalto_2.setVisible(true);lyr_Regiones_3.setVisible(true);lyr_potencial_basalto_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenTopoMap_1,lyr_area_potencial_basalto_2,lyr_Regiones_3,lyr_potencial_basalto_4];
lyr_area_potencial_basalto_2.set('fieldAliases', {'id': 'id', });
lyr_Regiones_3.set('fieldAliases', {'area': 'area', 'layer': 'layer', 'path': 'path', });
lyr_potencial_basalto_4.set('fieldAliases', {'id': 'id', });
lyr_area_potencial_basalto_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Regiones_3.set('fieldImages', {'area': 'ExternalResource', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_potencial_basalto_4.set('fieldImages', {'id': 'TextEdit', });
lyr_area_potencial_basalto_2.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_Regiones_3.set('fieldLabels', {'area': 'no label', 'layer': 'no label', 'path': 'inline label - visible with data', });
lyr_potencial_basalto_4.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_potencial_basalto_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});