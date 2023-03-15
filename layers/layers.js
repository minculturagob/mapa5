var wms_layers = [];

var format_Barriopopular_0 = new ol.format.GeoJSON();
var features_Barriopopular_0 = format_Barriopopular_0.readFeatures(json_Barriopopular_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Barriopopular_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Barriopopular_0.addFeatures(features_Barriopopular_0);
var lyr_Barriopopular_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Barriopopular_0, 
                style: style_Barriopopular_0,
                interactive: true,
                title: '<img src="styles/legend/Barriopopular_0.png" /> Barrio popular'
            });
var format_Barrio_1 = new ol.format.GeoJSON();
var features_Barrio_1 = format_Barrio_1.readFeatures(json_Barrio_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Barrio_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Barrio_1.addFeatures(features_Barrio_1);
var lyr_Barrio_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Barrio_1, 
                style: style_Barrio_1,
                interactive: true,
                title: '<img src="styles/legend/Barrio_1.png" /> Barrio'
            });
var format_Saladeteatro_2 = new ol.format.GeoJSON();
var features_Saladeteatro_2 = format_Saladeteatro_2.readFeatures(json_Saladeteatro_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Saladeteatro_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Saladeteatro_2.addFeatures(features_Saladeteatro_2);
var lyr_Saladeteatro_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Saladeteatro_2, 
                style: style_Saladeteatro_2,
                interactive: true,
                title: '<img src="styles/legend/Saladeteatro_2.png" /> Sala de teatro'
            });
var format_Saladecine_3 = new ol.format.GeoJSON();
var features_Saladecine_3 = format_Saladecine_3.readFeatures(json_Saladecine_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Saladecine_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Saladecine_3.addFeatures(features_Saladecine_3);
var lyr_Saladecine_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Saladecine_3, 
                style: style_Saladecine_3,
                interactive: true,
                title: '<img src="styles/legend/Saladecine_3.png" /> Sala de cine'
            });
var format_Museo_4 = new ol.format.GeoJSON();
var features_Museo_4 = format_Museo_4.readFeatures(json_Museo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Museo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Museo_4.addFeatures(features_Museo_4);
var lyr_Museo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Museo_4, 
                style: style_Museo_4,
                interactive: true,
                title: '<img src="styles/legend/Museo_4.png" /> Museo'
            });
var format_Librera_5 = new ol.format.GeoJSON();
var features_Librera_5 = format_Librera_5.readFeatures(json_Librera_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Librera_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Librera_5.addFeatures(features_Librera_5);
var lyr_Librera_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Librera_5, 
                style: style_Librera_5,
                interactive: true,
                title: '<img src="styles/legend/Librera_5.png" /> Librería'
            });
var format_Galeradearte_6 = new ol.format.GeoJSON();
var features_Galeradearte_6 = format_Galeradearte_6.readFeatures(json_Galeradearte_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Galeradearte_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Galeradearte_6.addFeatures(features_Galeradearte_6);
var lyr_Galeradearte_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Galeradearte_6, 
                style: style_Galeradearte_6,
                interactive: true,
                title: '<img src="styles/legend/Galeradearte_6.png" /> Galería de arte'
            });
var format_Espacioferial_7 = new ol.format.GeoJSON();
var features_Espacioferial_7 = format_Espacioferial_7.readFeatures(json_Espacioferial_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Espacioferial_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espacioferial_7.addFeatures(features_Espacioferial_7);
var lyr_Espacioferial_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Espacioferial_7, 
                style: style_Espacioferial_7,
                interactive: true,
                title: '<img src="styles/legend/Espacioferial_7.png" /> Espacio ferial'
            });
var format_Espaciodeformacin_8 = new ol.format.GeoJSON();
var features_Espaciodeformacin_8 = format_Espaciodeformacin_8.readFeatures(json_Espaciodeformacin_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Espaciodeformacin_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espaciodeformacin_8.addFeatures(features_Espaciodeformacin_8);
var lyr_Espaciodeformacin_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Espaciodeformacin_8, 
                style: style_Espaciodeformacin_8,
                interactive: true,
                title: '<img src="styles/legend/Espaciodeformacin_8.png" /> Espacio de formación'
            });
var format_Disquera_9 = new ol.format.GeoJSON();
var features_Disquera_9 = format_Disquera_9.readFeatures(json_Disquera_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Disquera_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Disquera_9.addFeatures(features_Disquera_9);
var lyr_Disquera_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Disquera_9, 
                style: style_Disquera_9,
                interactive: true,
                title: '<img src="styles/legend/Disquera_9.png" /> Disquería'
            });
var format_Clubdemsicaenvivo_10 = new ol.format.GeoJSON();
var features_Clubdemsicaenvivo_10 = format_Clubdemsicaenvivo_10.readFeatures(json_Clubdemsicaenvivo_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clubdemsicaenvivo_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clubdemsicaenvivo_10.addFeatures(features_Clubdemsicaenvivo_10);
var lyr_Clubdemsicaenvivo_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clubdemsicaenvivo_10, 
                style: style_Clubdemsicaenvivo_10,
                interactive: true,
                title: '<img src="styles/legend/Clubdemsicaenvivo_10.png" /> Club de música en vivo'
            });
var format_Centrocultural_11 = new ol.format.GeoJSON();
var features_Centrocultural_11 = format_Centrocultural_11.readFeatures(json_Centrocultural_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centrocultural_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centrocultural_11.addFeatures(features_Centrocultural_11);
var lyr_Centrocultural_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Centrocultural_11, 
                style: style_Centrocultural_11,
                interactive: true,
                title: '<img src="styles/legend/Centrocultural_11.png" /> Centro cultural'
            });
var format_Biblioteca_12 = new ol.format.GeoJSON();
var features_Biblioteca_12 = format_Biblioteca_12.readFeatures(json_Biblioteca_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Biblioteca_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Biblioteca_12.addFeatures(features_Biblioteca_12);
var lyr_Biblioteca_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Biblioteca_12, 
                style: style_Biblioteca_12,
                interactive: true,
                title: '<img src="styles/legend/Biblioteca_12.png" /> Biblioteca'
            });
var format_Bar_13 = new ol.format.GeoJSON();
var features_Bar_13 = format_Bar_13.readFeatures(json_Bar_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bar_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bar_13.addFeatures(features_Bar_13);
var lyr_Bar_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bar_13, 
                style: style_Bar_13,
                interactive: true,
                title: '<img src="styles/legend/Bar_13.png" /> Bar'
            });
var format_Anfiteatro_14 = new ol.format.GeoJSON();
var features_Anfiteatro_14 = format_Anfiteatro_14.readFeatures(json_Anfiteatro_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Anfiteatro_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anfiteatro_14.addFeatures(features_Anfiteatro_14);
var lyr_Anfiteatro_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anfiteatro_14, 
                style: style_Anfiteatro_14,
                interactive: true,
                title: '<img src="styles/legend/Anfiteatro_14.png" /> Anfiteatro'
            });

        var lyr_Mapabase_15 = new ol.layer.Tile({
            'title': 'Mapa base',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_PorcentajehogaresconNBIporradiocensal_16 = new ol.format.GeoJSON();
var features_PorcentajehogaresconNBIporradiocensal_16 = format_PorcentajehogaresconNBIporradiocensal_16.readFeatures(json_PorcentajehogaresconNBIporradiocensal_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PorcentajehogaresconNBIporradiocensal_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PorcentajehogaresconNBIporradiocensal_16.addFeatures(features_PorcentajehogaresconNBIporradiocensal_16);
var lyr_PorcentajehogaresconNBIporradiocensal_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PorcentajehogaresconNBIporradiocensal_16, 
                style: style_PorcentajehogaresconNBIporradiocensal_16,
                interactive: true,
    title: 'Porcentaje hogares con NBI por radio censal<br />\
    <img src="styles/legend/PorcentajehogaresconNBIporradiocensal_16_0.png" /> Bajo<br />\
    <img src="styles/legend/PorcentajehogaresconNBIporradiocensal_16_1.png" /> Medio<br />\
    <img src="styles/legend/PorcentajehogaresconNBIporradiocensal_16_2.png" /> Alto<br />\
    <img src="styles/legend/PorcentajehogaresconNBIporradiocensal_16_3.png" /> Muy alto<br />'
        });
var format_Niveleducativoporradiocensal_17 = new ol.format.GeoJSON();
var features_Niveleducativoporradiocensal_17 = format_Niveleducativoporradiocensal_17.readFeatures(json_Niveleducativoporradiocensal_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveleducativoporradiocensal_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveleducativoporradiocensal_17.addFeatures(features_Niveleducativoporradiocensal_17);
var lyr_Niveleducativoporradiocensal_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveleducativoporradiocensal_17, 
                style: style_Niveleducativoporradiocensal_17,
                interactive: true,
    title: 'Nivel educativo por radio censal<br />\
    <img src="styles/legend/Niveleducativoporradiocensal_17_0.png" /> Bajo<br />\
    <img src="styles/legend/Niveleducativoporradiocensal_17_1.png" /> Medio<br />\
    <img src="styles/legend/Niveleducativoporradiocensal_17_2.png" /> Alto<br />\
    <img src="styles/legend/Niveleducativoporradiocensal_17_3.png" /> Muy alto<br />'
        });
var group_Espaciosculturalessegntipo = new ol.layer.Group({
                                layers: [lyr_Saladeteatro_2,lyr_Saladecine_3,lyr_Museo_4,lyr_Librera_5,lyr_Galeradearte_6,lyr_Espacioferial_7,lyr_Espaciodeformacin_8,lyr_Disquera_9,lyr_Clubdemsicaenvivo_10,lyr_Centrocultural_11,lyr_Biblioteca_12,lyr_Bar_13,lyr_Anfiteatro_14,],
                                title: "Espacios culturales según tipo"});
var group_Barrios = new ol.layer.Group({
                                layers: [lyr_Barriopopular_0,lyr_Barrio_1,],
                                title: "Barrios"});

lyr_Barriopopular_0.setVisible(true);lyr_Barrio_1.setVisible(true);lyr_Saladeteatro_2.setVisible(true);lyr_Saladecine_3.setVisible(true);lyr_Museo_4.setVisible(true);lyr_Librera_5.setVisible(true);lyr_Galeradearte_6.setVisible(true);lyr_Espacioferial_7.setVisible(true);lyr_Espaciodeformacin_8.setVisible(true);lyr_Disquera_9.setVisible(true);lyr_Clubdemsicaenvivo_10.setVisible(true);lyr_Centrocultural_11.setVisible(true);lyr_Biblioteca_12.setVisible(true);lyr_Bar_13.setVisible(true);lyr_Anfiteatro_14.setVisible(true);lyr_Mapabase_15.setVisible(true);lyr_PorcentajehogaresconNBIporradiocensal_16.setVisible(false);lyr_Niveleducativoporradiocensal_17.setVisible(false);
var layersList = [lyr_Mapabase_15,group_Barrios,lyr_PorcentajehogaresconNBIporradiocensal_16,lyr_Niveleducativoporradiocensal_17,group_Espaciosculturalessegntipo];
lyr_Barriopopular_0.set('fieldAliases', {'fid': 'fid', 'nom_map': 'Barrio popular', 'tipo_asent': 'Tipo de asentamiento', });
lyr_Barrio_1.set('fieldAliases', {'fid': 'fid', 'barrio': 'Barrio', });
lyr_Saladeteatro_2.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Saladecine_3.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Museo_4.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Librera_5.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Galeradearte_6.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Espacioferial_7.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Espaciodeformacin_8.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Disquera_9.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Clubdemsicaenvivo_10.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Centrocultural_11.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Biblioteca_12.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Bar_13.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_Anfiteatro_14.set('fieldAliases', {'fid': 'fid', 'Nombre del espacio': 'Nombre del espacio', 'Función principal': 'Función principal', 'Dirección': 'Dirección', });
lyr_PorcentajehogaresconNBIporradiocensal_16.set('fieldAliases', {'fid': 'fid', 'nbi_porcen': 'Porcentaje NBI', 'nivel_nbi': 'Nivel NBI', });
lyr_Niveleducativoporradiocensal_17.set('fieldAliases', {'fid': 'fid', 'estudian_1': 'Porcentaje nivel educativo', 'popUp': 'Nivel educativo', });
lyr_Barriopopular_0.set('fieldImages', {'fid': 'Hidden', 'nom_map': 'TextEdit', 'tipo_asent': 'Hidden', });
lyr_Barrio_1.set('fieldImages', {'fid': 'Hidden', 'barrio': 'TextEdit', });
lyr_Saladeteatro_2.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Saladecine_3.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Museo_4.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Librera_5.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Galeradearte_6.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Espacioferial_7.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Espaciodeformacin_8.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Disquera_9.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Clubdemsicaenvivo_10.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Centrocultural_11.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Biblioteca_12.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Bar_13.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_Anfiteatro_14.set('fieldImages', {'fid': 'Hidden', 'Nombre del espacio': 'TextEdit', 'Función principal': 'TextEdit', 'Dirección': 'TextEdit', });
lyr_PorcentajehogaresconNBIporradiocensal_16.set('fieldImages', {'fid': 'Hidden', 'nbi_porcen': 'TextEdit', 'nivel_nbi': 'TextEdit', });
lyr_Niveleducativoporradiocensal_17.set('fieldImages', {'fid': 'Hidden', 'estudian_1': 'Hidden', 'popUp': 'TextEdit', });
lyr_Barriopopular_0.set('fieldLabels', {'nom_map': 'inline label',});
lyr_Barrio_1.set('fieldLabels', {'barrio': 'inline label', });
lyr_Saladeteatro_2.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Saladecine_3.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Museo_4.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Librera_5.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Galeradearte_6.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Espacioferial_7.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Espaciodeformacin_8.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Disquera_9.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Clubdemsicaenvivo_10.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Centrocultural_11.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Biblioteca_12.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Bar_13.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_Anfiteatro_14.set('fieldLabels', {'Nombre del espacio': 'inline label', 'Función principal': 'inline label', 'Dirección': 'inline label', });
lyr_PorcentajehogaresconNBIporradiocensal_16.set('fieldLabels', {'nbi_porcen': 'inline label', 'nivel_nbi': 'inline label', });
lyr_Niveleducativoporradiocensal_17.set('fieldLabels', {'popUp': 'inline label', });
lyr_Niveleducativoporradiocensal_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});