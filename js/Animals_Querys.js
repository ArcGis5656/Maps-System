require([
  "esri/rest/query",
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/widgets/Legend",
  "esri/widgets/Expand",
  "esri/widgets/FeatureTable/Grid/Grid",
], function (query, Map, MapView, FeatureLayer, Legend, Expand, Grid) {
  const AnimalsRenderer = {
    type: "unique-value", // autocasts as new UniqueValueRenderer()
    field: "Quantity_Production",
    defaultSymbol: { type: "simple-marker" }, // autocasts as new SimpleFillSymbol()
    visualVariables: [
      {
        type: "color",
        field: "Quantity_Production",
        normalizationField: "Count",
        legendOptions: {
          title: "% كمية الإنتاج",
        },
        stops: [
          {
            value: 0,
            color: "yellow",
            label: "=0%",
          },
          {
            value: 0.99,
            color: [19, 235, 0],
            label: "<= 99% & >0%",
          },
          {
            value: 1,
            color: "green",
            label: "=100%",
          },
        ],
      },
      {
        type: "size",
        field: "Quantity_Production",
        normalizationField: "Capacity",
        stops: [
          {
            value: 0,
            size: 18,
            label: "=0%",
          },
          {
            value: 0.99,
            size: 12,
            label: "<= 99% & >0%",
          },
          {
            value: 1,
            size: 8,
            label: "=100%",
          },
        ],
      },
    ],
  };
  function Lable($field) {
    return {
      // autocasts as new Lable()
      symbol: {
        type: "text", // autocasts as new TextSymbol()
        color: "black",
        haloColor: "white",
        haloSize: 1,
        font: {
          // autocast as new Font()
          // family: "Ubuntu Mono",
          size: 14,
          weight: "bold",
        },
      },
      labelExpressionInfo: {
        expression: $field,
      },
      maxScale: 0,
      minScale: 25000000,
    };
  }

  var featureLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/7",
    id: "Animals",
    visible: true,
    renderer: AnimalsRenderer,
    outFields: ["*"],
    // labelingInfo: [Lable("$feature.AnimalID")],
  });

  var featureLayer2 = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/10",
    visible: false,
  });
  // var Pandemic = new FeatureLayer({
  //   url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/27",
  //   visible: false,
  // });
  var YemenLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/8",
    id: "Yemen",
    opacity: 0.6,
  });

  const map = new Map({
    layers: [YemenLayer],
  });

  map.add(featureLayer);
  map.add(featureLayer2);
  // map.add(Pandemic);

  var view = new MapView({
    container: "viewDiv",
    map: map,
  });

  const legend = new Legend({ view: view });
  // Expand widget to expand and contract the legend widget
  const legendExpand = new Expand({
    expandTooltip: "Show Legend",
    expanded: false,
    view: view,
    content: legend,
  });

  // Add widgets to the view
  view.ui.add(document.getElementById("gridDiv"), "bottom-left");
  view.ui.add(legendExpand, "top-right");

  // Initialize variables
  let highlight, grid, government, Pandemic;

  // call clearMap method when clear is clicked
  const clearbutton = document.getElementById("clearButton");
  clearbutton.addEventListener("click", clearMap);

  featureLayer.load().then(function () {
    return (g = new Grid());
  });

  view.on("click", (event) => {
    // only include graphics from hurricanesLayer in the hitTest
    const opts = {
      include: featureLayer,
    };

    view
      .hitTest(event, opts)
      .then((response) => {
        // check if a feature is returned from the hurricanesLayer
        if (response.results.length) {
          const graphic = response.results[0].graphic;
          // do something with the graphic
          return graphic.attributes["OBJECTID"];
        }
      })
      .then((objectId) => {
        // console.log(objectId);
        Pandemic="";
        //Pandemic
        return featureLayer
          .queryRelatedFeatures({
            outFields: ["*"],
            relationshipId: featureLayer.relationships[1].id,
            objectIds: objectId,
          })
          .then((results) => {
            if (results[objectId]) {
              console.log(results);
              // results[objectId].features.forEach((element) => {
              console.log(
                results[objectId].features[0].attributes["PandemicID"]
              );
              return results[objectId].features[0].attributes["PandemicID"];
              // });
            }
          })
          .then((oid) => {
            console.log(oid);
            if (oid) {
              return query
                .executeQueryJSON(
                  "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/27",
                  {
                    outFields: ["*"],
                    where: "OBJECTID  = " + oid,
                  }
                )
                .then((results) => {
                  console.log(results.features[0].attributes["Name"]);
                  Pandemic = results.features[0].attributes["Name"];
                });
            }
          })
          .then(function () {
            return featureLayer
              .queryRelatedFeatures({
                outFields: ["*"],
                relationshipId: featureLayer.relationships[2].id,
                objectIds: objectId,
              })
              .then((results) => {
                results[objectId].features.forEach((element) => {
                  console.log(element.attributes["OBJECTID_1"]);
                });
                console.log(
                  results[objectId].features[0].attributes["OBJECTID_1"]
                );
                return results[objectId].features[0].attributes["OBJECTID_1"];
              })
              .then(function (oid) {
                // console.log(GovernmentID);
                // console.log(featureLayer2);
                return featureLayer2
                  .queryRelatedFeatures({
                    outFields: ["*"],
                    relationshipId: featureLayer2.relationships[9].id,
                    objectIds: oid,
                  })
                  .then((results) => {
                    console.log(results[oid]);
                    results[oid].features.forEach((element) => {
                      console.log(element.attributes["Government_Name_Arabic"]);
                      government = element.attributes["Government_Name_Arabic"];
                    });
                  });
              });
          });
      })

      .then(() => {
        featureLayer.popupTemplate = {
          title: "{AnimalID}",
          content: [
            {
              // Pass in the fields to display
              type: "custom",
              creator: function () {
                return (
                  '<div class="esri-feature-fields" style=" margin-bottom:-24px;"><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody><tr  style="background-color:rgba(76,76,76,.02);"><th class="esri-feature-fields__field-header">الوباء</th><td class="esri-feature-fields__field-data"> ' +
                  Pandemic +
                  "</td></tr></tbody></table></div>"
                );
              },
            },
            {
              // Pass in the fields to display
              type: "fields",
              fieldInfos: [
                {
                  label: "المالك",
                  fieldName: "relationships/26/Owner_Name",
                },
                {
                  label: "نوع الحيوان",
                  fieldName: "Type",
                },
                {
                  label: "عدد الحيوانات",
                  fieldName: "Count",
                },
                {
                  label: "كمية الإنتاج",
                  fieldName: "Quantity_Production",
                },
                {
                  label: "المديرية",
                  fieldName: "relationships/28/Directorate_Name_Arabic",
                },
              ],
            },
            {
              // Pass in the fields to display
              type: "custom",
              creator: function () {
                return (
                  '<div class="esri-feature-fields" style="margin-top:-24px; margin-bottom:-24px;"><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody><tr  style="background-color:rgba(76,76,76,.02);"><th class="esri-feature-fields__field-header">المحافظة</th><td class="esri-feature-fields__field-data"> ' +
                  government +
                  "</td></tr></tbody></table></div>"
                );
              },
            },
          ],
        };
      });
  });

  function clearMap() {
    if (highlight) {
      highlight.remove();
    }
    if (grid) {
      grid.destroy();
    }
    clearbutton.style.display = "none";
  }
});
