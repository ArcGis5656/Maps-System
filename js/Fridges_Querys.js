// *?still the popup window display the data that was display in the console window
// *?how to get the zoom level from query
require([
  "esri/rest/query",
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/widgets/Legend",
  "esri/widgets/Expand",
  "esri/widgets/FeatureTable/Grid/Grid",
], function (query, Map, MapView, FeatureLayer, Legend, Expand, Grid) {
  const serviceCenterRenderer = {
    type: "unique-value", // autocasts as new UniqueValueRenderer()
    field: "Energy_Used",
    defaultSymbol: { type: "simple-marker" }, // autocasts as new SimpleFillSymbol()
    visualVariables: [
      {
        type: "color",
        field: "Energy_Used",
        normalizationField: "Capacity",
        legendOptions: {
          title: "% الطاقة الشاغرة",
        },
        stops: [
          {
            value: 0,
            color: "yellow",

            label: "=0%",
          },
          {
            value: 0.99,
            color: "orange",
            label: "<= 99% & >0%",
          },
          {
            value: 1,
            color: "red",
            label: "=100%",
          },
        ],
      },
      {
        type: "size",
        field: "Energy_Used",
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

  const Fridgescontent = [
    {
      // content: "Repository's Vacant Energy {Energy_Used / Capacity}",
      // Pass in the fields to display

      type: "fields",
      fieldInfos: [
        {
          label: "اسم الثلاجة",
          fieldName: "Fridge_Name",
        },
        {
          label: "المسؤول",
          fieldName: "Administrator",
        },
        {
          label: "الكود",
          fieldName: "Code",
        },
        {
          label: "التصريح",
          fieldName: "Declaration",
        },
        {
          label: "السعر (م3/ساعة)",
          fieldName: "Price",
          format: {
            digitSeparator: true,
          },
        },
        {
          label: "الطاقة الاستيعابية",
          fieldName: "Capacity",
          format: {
            digitSeparator: true,
          },
        },
        {
          label: "الطاقة المستخدمة",
          fieldName: "Energy_Used",
          format: {
            digitSeparator: true,
          },
        },
        {
          label: "الطاقة الشاغرة",
          fieldName: "expression/Vacant Energy",
          format: {
            digitSeparator: true,
          },
        },
        {
          label: "التلفون",
          fieldName: "relationships/12/Phone",
          format: {
            digitSeparator: true,
          },
        },
        {
          label: "المنتج",
          fieldName: "relationships/1/relationships/29/Government_Name_Arabic",
        },
        {
          label: "المديرية",
          fieldName: "relationships/14/Directorate_Name_Arabic",
        },
        {
          label: "المحافظة",
          fieldName: "relationships/1/relationships/29/Government_Name_Arabic",
        },
      ],
    },
  ];
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
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/3",
    id: "Fridges",
    visible: true,
    renderer: serviceCenterRenderer,
    // labelingInfo: [Lable("$feature.Repositories_Name")],

    outFields: ["*"],
  });
  var featureLayer2 = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/10",
    visible: false,
  });
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
  let highlight,
    grid,
    Product,
    government,
    phones = [];

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
        // console.log(objectId);//2
        return featureLayer
          .queryRelatedFeatures({
            outFields: ["*"],
            relationshipId: featureLayer.relationships[1].id,
            objectIds: objectId,
          })
          .then((results) => {
            // console.log(results);
            phones = [];
            results[objectId].features.forEach((element) => {
              console.log(element.attributes["Phone"]);
              phones.push(element.attributes["Phone"]);
            });
          })
          .then(function () {
            return featureLayer
              .queryRelatedFeatures({
                outFields: ["*"],
                relationshipId: featureLayer.relationships[3].id,
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
                // console.log(oid);
                // console.log(featureLayer2);
                return featureLayer2
                  .queryRelatedFeatures({
                    outFields: ["*"],
                    relationshipId: featureLayer2.relationships[9].id,
                    objectIds: oid,
                  })
                  .then((results) => {
                    // console.log(results[oid]);
                    results[oid].features.forEach((element) => {
                      console.log(element.attributes["Government_Name_Arabic"]);
                      government = element.attributes["Government_Name_Arabic"];
                    });
                  });
              });
          })
          .then(() => {
            return featureLayer
              .queryRelatedFeatures({
                outFields: ["*"],
                relationshipId: featureLayer.relationships[1].id,
                objectIds: objectId,
              })
              .then((results) => {
                results[objectId].features.forEach((element) => {
                  console.log(element.attributes["OBJECTID"]);
                });
                console.log(
                  results[objectId].features[0].attributes["OBJECTID"]
                );
                return results[objectId].features[0].attributes["OBJECTID"];
              })
              .then(function (oid) {
                // console.log(GovernmentID);
                console.log(oid); //2
                // console.log(featureLayer2);
                return query
                  .executeQueryJSON(
                    "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/38",
                    {
                      outFields: ["*"],
                      // autocasts as new Query()
                      where: "OBJECTID  = " + oid,
                    }
                  )
                  .then((oid) => {
                    // console.log(oid.features[0].attributes["OBJECTID"]);
                    oid = oid.features[0].attributes["OBJECTID"];
                    return query
                      .executeQueryJSON(
                        "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/18",
                        {
                          outFields: ["*"],

                          // autocasts as new Query()
                          where: "OBJECTID  = " + oid,
                        }
                      )
                      .then(function (oid) {
                        console.log(oid);
                        console.log(oid.features[0].attributes["OBJECTID"]); //2
                        oid = oid.features[0].attributes["OBJECTID"];
                        // console.log(featureLayer2);
                        return query
                          .executeQueryJSON(
                            "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/33",
                            {
                              outFields: ["*"],

                              // autocasts as new Query()
                              where: "OBJECTID  = " + oid,
                            }
                          )
                          .then((oid) => {
                            console.log(oid.features[0].attributes["OBJECTID"]); //2
                            oid = oid.features[0].attributes["OBJECTID"];
                            return query
                              .executeQueryJSON(
                                "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/30",
                                {
                                  outFields: ["*"],

                                  // autocasts as new Query()
                                  where: "OBJECTID  = " + oid,
                                }
                              )
                              .then((oid) => {
                                console.log(
                                  oid.features[0].attributes[
                                    "Product_Vegetarian_Name"
                                  ]
                                ); //2
                                Product =
                                  oid.features[0].attributes[
                                    "Product_Vegetarian_Name"
                                  ];
                              });
                          });
                      });
                  });
              });
          });
      })
      .then(() => {
        featureLayer.popupTemplate = {
          title: "{Fridge_Name}",
          expressionInfos: [
            {
              name: "Vacant Energy",
              title: "الطاقة الشاغرة",
              expression: "$feature.Capacity - $feature.Energy_Used",
            },
          ],
          content: [
            {
              // content: "Repository's Vacant Energy {Energy_Used / Capacity}",
              // Pass in the fields to display

              type: "fields",
              fieldInfos: [
                {
                  label: "اسم المستودع",
                  fieldName: "Repositories_Name",
                },
                {
                  label: "المسؤول",
                  fieldName: "Administrator",
                },
                {
                  label: "الكود",
                  fieldName: "Code",
                },
                {
                  label: "التصريح",
                  fieldName: "Declaration",
                },
                {
                  label: "السعر (م3/ساعة)",
                  fieldName: "Price",
                  format: {
                    digitSeparator: true,
                  },
                },
                {
                  label: "الطاقة الاستيعابية",
                  fieldName: "Capacity",
                  format: {
                    digitSeparator: true,
                  },
                },
                {
                  label: "الطاقة المستخدمة",
                  fieldName: "Energy_Used",
                  format: {
                    digitSeparator: true,
                  },
                },
                {
                  label: "الطاقة الشاغرة",
                  fieldName: "expression/Vacant Energy",
                  format: {
                    digitSeparator: true,
                  },
                },
              ],
            },
            {
              // Pass in the fields to display
              type: "custom",
              creator: function () {
                return (
                  '<div class="esri-feature-fields" style="margin-top:-24px; margin-bottom:-24px;"><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody><tr style="background-color:rgba(76,76,76,.02);"><th class="esri-feature-fields__field-header">التلفون</th><td class="esri-feature-fields__field-data"> ' +
                  phones.toString() +
                  "</td></tr></tbody></table></div>"
                );
              },
            },
            {
              type: "custom",
              creator: function () {
                return (
                  '<div class="esri-feature-fields" style="margin-top:-24px; margin-bottom:-24px;"><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody><tr ><th class="esri-feature-fields__field-header">المنتج</th><td class="esri-feature-fields__field-data"> ' +
                  Product +
                  "</td></tr></tbody></table></div>"
                );
              },
            },
            {
              // Pass in the fields to display
              type: "custom",
              creator: function () {
                return (
                  '<div class="esri-feature-fields" style="margin-top:-24px; margin-bottom:-24px;"><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody><tr style="background-color:rgba(76,76,76,.02);"><th class="esri-feature-fields__field-header">المحافظة</th><td class="esri-feature-fields__field-data"> ' +
                  government +
                  "</td></tr></tbody></table></div>"
                );
              },
            },
            {
              type: "fields",
              fieldInfos: [
                {
                  label: "المديرية",
                  fieldName: "relationships/14/Directorate_Name_Arabic",
                },
              ],
            },
          ], // "The lands type number is {Type_LandID}.", // Display text in pop-up
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
