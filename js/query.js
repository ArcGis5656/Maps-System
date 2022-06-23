require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/layers/GraphicsLayer",
  "esri/Graphic",
], function (Map, MapView, FeatureLayer, GraphicsLayer, Graphic) {
  var featureLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/Map/MapServer/5",
  });
  var YemenLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/Map/MapServer/10",
    id: "Yemen",
    opacity: 0.6,
  });

  const map = new Map({
    layers: [YemenLayer],
  });
  map.add(featureLayer);
  var graphicsLayer = new GraphicsLayer();
  map.add(graphicsLayer);
  function addGraphics(result) {
    graphicsLayer.removeAll();
    result.features.forEach(function (feature) {
      var g = new Graphic({
        geometry: feature.geometry,
        attributes: feature.attributes,
        symbol: {
          type: "simple-marker",
          color: [0, 0, 0],
          outline: {
            width: 2,
            color: [0, 255, 255],
          },
          size: "20px",
        },
        popupTemplate: {
          title: "{Association_Name}",
          content: "The Association Performance is {Performance}.",
        },
      });
      graphicsLayer.add(g);
    });
  }
  function queryFeatureLayerView(
    point,
    distance,
    spatialRelationship,
    sqlExpression
  ) {
    if (!map.findLayerById(featureLayer.id)) {
      featureLayer.outFields = ["*"];
      map.add(featureLayer, 0);
    }

    var query = {
      geometry: point,
      distance: distance,
      spatialRelationship: spatialRelationship,
      outFields: ["*"],
      returnGeometry: true,
      where: sqlExpression,
    };

    view.whenLayerView(featureLayer).then(function (featureLayerView) {
      if (featureLayerView.updating) {''
        var handle = featureLayerView.watch("updating", function (isUpdating) {
          if (!isUpdating) {
            // Execute the query
            featureLayerView.queryFeatures(query).then(function (result) {
              addGraphics(result);
              console.log(JSON.stringify(result.features[0]['attributes']['OBJECTID']));
            });
            handle.remove();
          }
        });
      } else {
        // Execute the query
        featureLayerView.queryFeatures(query).then(function (result) {
          addGraphics(result);
        });
      }
    });
  }

  var view = new MapView({
    container: "viewDiv",
    map: map,
  });

  view.when(function () {
    queryFeatureLayerView(view.center, 190000, "intersects");
  });

  view.on("click", function (event) {
    queryFeatureLayerView(event.mapPoint, 1500, "intersects");
  });
});
