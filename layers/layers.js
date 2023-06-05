var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Fire_Burn_Severity_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Fire_Burn_Severity",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Fire_Burn_Severity_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8506530.095934, 1302826.230091, 8540010.545985, 1319605.422754]
                            })
                        });

lyr_GoogleSatellite_0.setVisible(true);lyr_Fire_Burn_Severity_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Fire_Burn_Severity_1];
