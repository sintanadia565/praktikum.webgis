ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([683905.655045, 9187483.189959, 702358.185425, 9198856.791031]);
var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_AksesibilitasPTN_1 = new ol.format.GeoJSON();
var features_AksesibilitasPTN_1 = format_AksesibilitasPTN_1.readFeatures(json_AksesibilitasPTN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_AksesibilitasPTN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AksesibilitasPTN_1.addFeatures(features_AksesibilitasPTN_1);
var lyr_AksesibilitasPTN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AksesibilitasPTN_1, 
                style: style_AksesibilitasPTN_1,
                popuplayertitle: 'Aksesibilitas PTN',
                interactive: true,
    title: 'Aksesibilitas PTN<br />\
    <img src="styles/legend/AksesibilitasPTN_1_0.png" /> 1,2km (15 menit)<br />\
    <img src="styles/legend/AksesibilitasPTN_1_1.png" /> 2,4km (30 menit)<br />\
    <img src="styles/legend/AksesibilitasPTN_1_2.png" /> <br />' });
var format_PTNSurabaya_2 = new ol.format.GeoJSON();
var features_PTNSurabaya_2 = format_PTNSurabaya_2.readFeatures(json_PTNSurabaya_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_PTNSurabaya_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTNSurabaya_2.addFeatures(features_PTNSurabaya_2);
var lyr_PTNSurabaya_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PTNSurabaya_2, 
                style: style_PTNSurabaya_2,
                popuplayertitle: 'PTN Surabaya',
                interactive: true,
    title: 'PTN Surabaya<br />\
    <img src="styles/legend/PTNSurabaya_2_0.png" /> ITS Manyar<br />\
    <img src="styles/legend/PTNSurabaya_2_1.png" /> ITS Sukolilo<br />\
    <img src="styles/legend/PTNSurabaya_2_2.png" /> UIN Sunan Ampel<br />\
    <img src="styles/legend/PTNSurabaya_2_3.png" /> UNAIR A<br />\
    <img src="styles/legend/PTNSurabaya_2_4.png" /> UNAIR B<br />\
    <img src="styles/legend/PTNSurabaya_2_5.png" /> UNAIR C<br />\
    <img src="styles/legend/PTNSurabaya_2_6.png" /> UNESA Ketintang<br />\
    <img src="styles/legend/PTNSurabaya_2_7.png" /> UNESA Lidah Wetan<br />\
    <img src="styles/legend/PTNSurabaya_2_8.png" /> UPNV Jatim<br />' });

lyr_ESRISatellite_0.setVisible(true);lyr_AksesibilitasPTN_1.setVisible(true);lyr_PTNSurabaya_2.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_AksesibilitasPTN_1,lyr_PTNSurabaya_2];
lyr_AksesibilitasPTN_1.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_PTNSurabaya_2.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'Deskripsi Univ_QS WUR': 'Deskripsi Univ_QS WUR', 'Deskripsi Univ_Didirikan': 'Deskripsi Univ_Didirikan', 'Deskripsi Univ_Fakultas': 'Deskripsi Univ_Fakultas', 'Foto': 'Foto', });
lyr_AksesibilitasPTN_1.set('fieldImages', {'fid': 'TextEdit', 'Access': 'TextEdit', });
lyr_PTNSurabaya_2.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'Deskripsi Univ_QS WUR': 'TextEdit', 'Deskripsi Univ_Didirikan': 'Range', 'Deskripsi Univ_Fakultas': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_AksesibilitasPTN_1.set('fieldLabels', {'fid': 'hidden field', 'Access': 'inline label - always visible', });
lyr_PTNSurabaya_2.set('fieldLabels', {'fid': 'no label', 'Nama': 'no label', 'Kampus': 'no label', 'Deskripsi Univ_QS WUR': 'no label', 'Deskripsi Univ_Didirikan': 'no label', 'Deskripsi Univ_Fakultas': 'no label', 'Foto': 'no label', });
lyr_PTNSurabaya_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});