var wms_layers = [];

var format_BOUNDARY_1_0 = new ol.format.GeoJSON();
var features_BOUNDARY_1_0 = format_BOUNDARY_1_0.readFeatures(json_BOUNDARY_1_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BOUNDARY_1_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOUNDARY_1_0.addFeatures(features_BOUNDARY_1_0);
var lyr_BOUNDARY_1_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BOUNDARY_1_0, 
                style: style_BOUNDARY_1_0,
                interactive: true,
                title: '<img src="styles/legend/BOUNDARY_1_0.png" /> BOUNDARY_1'
            });
var format_BANK_1 = new ol.format.GeoJSON();
var features_BANK_1 = format_BANK_1.readFeatures(json_BANK_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANK_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANK_1.addFeatures(features_BANK_1);
var lyr_BANK_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BANK_1, 
                style: style_BANK_1,
                interactive: true,
                title: '<img src="styles/legend/BANK_1.png" /> BANK'
            });
var format_FILLING_STATION_2 = new ol.format.GeoJSON();
var features_FILLING_STATION_2 = format_FILLING_STATION_2.readFeatures(json_FILLING_STATION_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FILLING_STATION_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FILLING_STATION_2.addFeatures(features_FILLING_STATION_2);
var lyr_FILLING_STATION_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FILLING_STATION_2, 
                style: style_FILLING_STATION_2,
                interactive: true,
                title: '<img src="styles/legend/FILLING_STATION_2.png" /> FILLING_STATION'
            });
var format_HOSPITAL_3 = new ol.format.GeoJSON();
var features_HOSPITAL_3 = format_HOSPITAL_3.readFeatures(json_HOSPITAL_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HOSPITAL_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOSPITAL_3.addFeatures(features_HOSPITAL_3);
var lyr_HOSPITAL_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HOSPITAL_3, 
                style: style_HOSPITAL_3,
                interactive: true,
                title: '<img src="styles/legend/HOSPITAL_3.png" /> HOSPITAL'
            });
var format_HOTEL_4 = new ol.format.GeoJSON();
var features_HOTEL_4 = format_HOTEL_4.readFeatures(json_HOTEL_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HOTEL_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOTEL_4.addFeatures(features_HOTEL_4);
var lyr_HOTEL_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HOTEL_4, 
                style: style_HOTEL_4,
                interactive: true,
                title: '<img src="styles/legend/HOTEL_4.png" /> HOTEL'
            });
var format_MAJOR_ROAD_5 = new ol.format.GeoJSON();
var features_MAJOR_ROAD_5 = format_MAJOR_ROAD_5.readFeatures(json_MAJOR_ROAD_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAJOR_ROAD_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAJOR_ROAD_5.addFeatures(features_MAJOR_ROAD_5);
var lyr_MAJOR_ROAD_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MAJOR_ROAD_5, 
                style: style_MAJOR_ROAD_5,
                interactive: true,
                title: '<img src="styles/legend/MAJOR_ROAD_5.png" /> MAJOR_ROAD'
            });
var format_MINORROAD_6 = new ol.format.GeoJSON();
var features_MINORROAD_6 = format_MINORROAD_6.readFeatures(json_MINORROAD_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MINORROAD_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MINORROAD_6.addFeatures(features_MINORROAD_6);
var lyr_MINORROAD_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MINORROAD_6, 
                style: style_MINORROAD_6,
                interactive: true,
                title: '<img src="styles/legend/MINORROAD_6.png" /> MINORROAD'
            });
var format_RESTURANT_7 = new ol.format.GeoJSON();
var features_RESTURANT_7 = format_RESTURANT_7.readFeatures(json_RESTURANT_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RESTURANT_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESTURANT_7.addFeatures(features_RESTURANT_7);
var lyr_RESTURANT_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RESTURANT_7, 
                style: style_RESTURANT_7,
                interactive: true,
                title: '<img src="styles/legend/RESTURANT_7.png" /> RESTURANT'
            });
var format_SCHO_8 = new ol.format.GeoJSON();
var features_SCHO_8 = format_SCHO_8.readFeatures(json_SCHO_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCHO_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCHO_8.addFeatures(features_SCHO_8);
var lyr_SCHO_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCHO_8, 
                style: style_SCHO_8,
                interactive: true,
                title: '<img src="styles/legend/SCHO_8.png" /> SCHO'
            });
var format_STREET_9 = new ol.format.GeoJSON();
var features_STREET_9 = format_STREET_9.readFeatures(json_STREET_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STREET_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STREET_9.addFeatures(features_STREET_9);
var lyr_STREET_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_STREET_9, 
                style: style_STREET_9,
                interactive: true,
                title: '<img src="styles/legend/STREET_9.png" /> STREET'
            });

lyr_BOUNDARY_1_0.setVisible(true);lyr_BANK_1.setVisible(true);lyr_FILLING_STATION_2.setVisible(true);lyr_HOSPITAL_3.setVisible(true);lyr_HOTEL_4.setVisible(true);lyr_MAJOR_ROAD_5.setVisible(true);lyr_MINORROAD_6.setVisible(true);lyr_RESTURANT_7.setVisible(true);lyr_SCHO_8.setVisible(true);lyr_STREET_9.setVisible(true);
var layersList = [lyr_BOUNDARY_1_0,lyr_BANK_1,lyr_FILLING_STATION_2,lyr_HOSPITAL_3,lyr_HOTEL_4,lyr_MAJOR_ROAD_5,lyr_MINORROAD_6,lyr_RESTURANT_7,lyr_SCHO_8,lyr_STREET_9];
lyr_BOUNDARY_1_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BANK_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Bank': 'Bank', });
lyr_FILLING_STATION_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'filling_st': 'filling_st', });
lyr_HOSPITAL_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Names_': 'Names_', });
lyr_HOTEL_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Hotel': 'Hotel', });
lyr_MAJOR_ROAD_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'Majorroad': 'Majorroad', });
lyr_MINORROAD_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'Street': 'Street', });
lyr_RESTURANT_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Resturant': 'Resturant', });
lyr_SCHO_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'School': 'School', 'school1': 'school1', });
lyr_STREET_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_BOUNDARY_1_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_BANK_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Bank': 'TextEdit', });
lyr_FILLING_STATION_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'filling_st': 'TextEdit', });
lyr_HOSPITAL_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Names_': 'TextEdit', });
lyr_HOTEL_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Hotel': 'TextEdit', });
lyr_MAJOR_ROAD_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Majorroad': 'TextEdit', });
lyr_MINORROAD_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Street': 'TextEdit', });
lyr_RESTURANT_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Resturant': 'TextEdit', });
lyr_SCHO_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'School': 'TextEdit', 'school1': 'TextEdit', });
lyr_STREET_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_BOUNDARY_1_0.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_BANK_1.set('fieldLabels', {'OBJECTID': 'no label', 'Bank': 'no label', });
lyr_FILLING_STATION_2.set('fieldLabels', {'OBJECTID': 'no label', 'filling_st': 'no label', });
lyr_HOSPITAL_3.set('fieldLabels', {'OBJECTID': 'no label', 'Names_': 'header label', });
lyr_HOTEL_4.set('fieldLabels', {'OBJECTID': 'no label', 'Hotel': 'header label', });
lyr_MAJOR_ROAD_5.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Leng': 'no label', 'Majorroad': 'header label', });
lyr_MINORROAD_6.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Leng': 'no label', 'Street': 'header label', });
lyr_RESTURANT_7.set('fieldLabels', {'OBJECTID': 'no label', 'Resturant': 'header label', });
lyr_SCHO_8.set('fieldLabels', {'OBJECTID': 'no label', 'School': 'header label', 'school1': 'no label', });
lyr_STREET_9.set('fieldLabels', {'OBJECTID': 'header label', 'SHAPE_Leng': 'header label', });
lyr_STREET_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});