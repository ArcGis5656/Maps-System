// the layer is so slowly
// the popup does not apear when first clicked in the layer
// and the query does not work well
require([
  "esri/rest/query",
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/widgets/Legend",
  "esri/widgets/Expand",
  "esri/widgets/FeatureTable/Grid/Grid",
], function (query, Map, MapView, FeatureLayer, Legend, Expand, Grid) {
  const LandsRenderer = {
    type: "unique-value", // autocasts as new UniqueValueRenderer()
    field: "Type_Land",
    uniqueValueInfos: [
      {
        // All features with value of "صالحة للزراعة ومستزرعة" will be green
        value: "0",
        symbol: {
          type: "simple-fill",
          color: "green",
        },
      },
      {
        // All features with value of "صالحة للزراعة وغير مستزرعة" will be blue
        value: "1",
        symbol: {
          type: "simple-fill",
          color: [19, 235, 0],
        },
      },
      {
        // All features with value of "غير صالحة للزراعة" will be yellow
        value: "2",
        symbol: {
          type: "simple-fill",
          color: "yellow",
        },
      },
    ],
  };

  var landsLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/11",
    id: "Lands",
    visible: true,
    renderer: LandsRenderer,
    // labelingInfo: [Lable("$feature.LandID")],
    outFields: ["*"],
  });

  var DirectorateLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/10",
    visible: false,
    id: "Directorates",
  });
  var YemenLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/8",
    id: "Yemen",
    opacity: 0.6,
  });

  const map = new Map({
    layers: [YemenLayer],
  });

  map.add(landsLayer);
  map.add(DirectorateLayer);
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
    Directorate,
    Pandemic,
    Seasons = [],
    Season,
    Types = [],
    Type,
    Expected_quantity = [],
    Actual_quantity = [],
    Product = [],
    Class = [],
    flag,
    Pandemic_product = [],
    production_capacity = new Object(),
    Quantity_Production;

  // call clearMap method when clear is clicked
  const clearbutton = document.getElementById("clearButton");
  clearbutton.addEventListener("click", clearMap);

  landsLayer.load().then(function () {
    return (g = new Grid());
  });
  view.when(() => {
    landsLayer.when(() => {
      view.goTo(landsLayer.fullExtent).catch((errorLand) => {
        console.error(errorLand);
      });
    });
  });
  view.on("click", (event) => {
    // only include graphics from hurricanesLayer in the hitTest
    const opts = {
      include: landsLayer,
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
        //Directorate
        Directorate = "";

        landsLayer
          .queryRelatedFeatures({
            outFields: ["*"],
            relationshipId: landsLayer.relationships[3].id,
            objectIds: objectId,
          })
          .then((results) => {
            // console.log(results);
            Directorate =
              results[objectId].features[0].attributes[
                "Directorate_Name_Arabic"
              ];
            // console.log(Directorate);

            return results[objectId].features[0].attributes["OBJECTID_1"];
          })
          .then(function (id) {
            // Government
            government = "";
            DirectorateLayer.queryRelatedFeatures({
              outFields: ["*"],
              relationshipId: DirectorateLayer.relationships[9].id,
              objectIds: id,
            }).then((results) => {
              government =
                results[id].features[0].attributes["Government_Name_Arabic"];
              // console.log(government);
            });
          })
          .then(() => {
            // Result_Product_Vegetarian
            flag = 0;
            Seasons = [];
            Season = "";
            Expected_quantity = [];
            Actual_quantity = [];
            // console.log(objectId);

            landsLayer
              .queryRelatedFeatures({
                outFields: ["*"],
                relationshipId: landsLayer.relationships[0].id,
                objectIds: objectId,
              })
              .then((results) => {
                console.log(results);
                if (results[objectId]) {
                  Seasons = [];
                  // console.log(results[objectId]);
                  results[objectId].features.forEach((element) => {
                    switch (element.attributes["Seasons"]) {
                      case 0:
                        Season = "الخريف";
                        break;
                      case 1:
                        Season = "الصيف";
                        break;
                      case 2:
                        Season = "الربيع";
                        break;
                      case 3:
                        Season = "الشتاء";
                        break;
                    }
                    console.log(Season);
                    Seasons.push(Season);
                    Expected_quantity.push(
                      element.attributes["Quantity_Production_Expected"]
                    );
                    console.log(
                      element.attributes["Quantity_Production_Expected"]
                    );
                    Actual_quantity.push(
                      element.attributes["Quantity_Production_Actual"]
                    );
                    query
                      .executeQueryJSON(
                        "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/30",
                        {
                          outFields: ["*"],
                          where:
                            "OBJECTID  = " +
                            element.attributes["Product_VegetarianID"],
                        }
                      )
                      .then((results) => {
                        Types = [];
                        Type = "";
                        Class = [];
                        Product = [];

                        if (results.features) {
                          results.features.forEach((element) => {
                            console.log(
                              element.attributes["Product_Vegetarian_Name"]
                            );
                            Product.push(
                              element.attributes["Product_Vegetarian_Name"]
                            );
                            // console.log(element.attributes["Type"]);
                            switch (element.attributes["Type"]) {
                              case 0:
                                Type = "الحبوب";
                                break;
                              case 1:
                                Type = "الخضروات";
                                break;
                              case 2:
                                Type = "الفواكة";
                                break;
                              case 3:
                                Type = "البقوليات";
                                break;
                              case 4:
                                Type = "المحاصيل النقدية";
                                break;
                            }
                            console.log(Type);
                            Types.push(Type);
                            console.log(element.attributes["ClassVegetarian"]);
                            Class.push(element.attributes["ClassVegetarian"]);

                            //Pandemic of product
                            query
                              .executeQueryJSON(
                                "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/31",
                                {
                                  outFields: ["*"],
                                  where:
                                    "OBJECTID  = " +
                                    element.attributes["Product_VegetarianID"],
                                }
                              )
                              .then((results) => {
                                Pandemic_product = [];
                                if (results.features) {
                                  results.features.forEach((element) => {
                                    // console.log(
                                    //   element.attributes["PandemicID"]
                                    // );
                                    query
                                      .executeQueryJSON(
                                        "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/27",
                                        {
                                          outFields: ["*"],
                                          where:
                                            "OBJECTID  = " +
                                            element.attributes["PandemicID"],
                                        }
                                      )
                                      .then((results) => {
                                        if (results.features) {
                                          results.features.forEach(
                                            (element) => {
                                              console.log(
                                                element.attributes["Name"]
                                              );
                                              Pandemic_product.push(
                                                element.attributes["Name"]
                                              );
                                            }
                                          );
                                        }
                                      });
                                  });
                                } else {
                                  Pandemic_product.push(" ");
                                }
                              });
                          });
                        } else {
                          console.log("out the range of features");
                        }
                      });
                  });
                } else {
                  console.log("the land is not has product");
                  flag++;
                }
              });
          })
          .then(() => {
            console.log(objectId);
            Pandemic = "";
            //Pandemic of the land
            landsLayer
              .queryRelatedFeatures({
                outFields: ["*"],
                relationshipId: landsLayer.relationships[2].id,
                objectIds: objectId,
              })
              .then((results) => {
                if (results[objectId]) {
                  //console.log(results);
                  // results[objectId].features.forEach((element) => {
                  console.log(
                    results[objectId].features[0].attributes["PandemicID"]
                  );
                  results[objectId].features[0].attributes["PandemicID"];
                  query
                    .executeQueryJSON(
                      "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/27",
                      {
                        outFields: ["*"],
                        where:
                          "OBJECTID  = " +
                          results[objectId].features[0].attributes[
                            "PandemicID"
                          ],
                      }
                    )
                    .then((results) => {
                      console.log(results.features[0].attributes["Name"]);
                      Pandemic = results.features[0].attributes["Name"];
                    });
                } else {
                  console.log("there no pandemic in this land");
                }
              });
          });
      })
      .then(() => {
        landsLayer.popupTemplate = {
          title: "{LandID}",
          content: [
            {
              type: "custom",
              creator: function () {
                return (
                  '<div class="esri-feature-fields" style=" margin-bottom:-24px;"><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody><tr style="background-color:rgba(76,76,76,.02);"><th class="esri-feature-fields__field-header">وباء الأرض</th><td class="esri-feature-fields__field-data"> ' +
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
                  fieldName: "relationships/32/Owner_Name",
                },
                {
                  label: "نوع الأرض",
                  fieldName: "Type_Land",
                },
                {
                  label: "المساحة",
                  fieldName: "Area",
                },
              ],
            },
            {
              // Pass in the fields to display
              type: "custom",
              creator: function () {
                return (
                  '<div class="esri-feature-fields" style="margin-top:-24px; margin-bottom:-24px;"><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody><tr style="background-color:rgba(76,76,76,.02);"><th class="esri-feature-fields__field-header">المديرية</th><td class="esri-feature-fields__field-data"> ' +
                  Directorate +
                  "</td></tr></tbody></table></div>"
                );
              },
            },
            {
              // Pass in the fields to display
              type: "custom",
              creator: function () {
                return (
                  '<div class="esri-feature-fields" style="margin-top:-24px; margin-bottom:-24px;"><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody><tr><th class="esri-feature-fields__field-header">المحافظة</th><td class="esri-feature-fields__field-data"> ' +
                  government +
                  "</td></tr></tbody></table></div>"
                );
              },
            },
          ], // "The lands type number is {Type_LandID}.", // Display text in pop-up
        };
        if (flag == 0) {
          for (let key in Seasons) {
            if (!Pandemic_product[key]) {
              Pandemic_product[key] = " ";
            }
            landsLayer.popupTemplate.content.push(
              {
                // Pass in the fields to display
                type: "custom",
                creator: function () {
                  return (
                    '<div class="esri-feature-fields" style="margin-top:-24px; margin-bottom:-24px;"><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody>' +
                    style(key) +
                    '<th class="esri-feature-fields__field-header">وباء المنتج</th><td class="esri-feature-fields__field-data"> ' +
                    Pandemic_product[key] +
                    "</td></tr></tbody></table></div>"
                  );
                },
              },
              {
                // Pass in the fields to display
                type: "custom",
                creator: function () {
                  return (
                    '<div class="esri-feature-fields" style="margin-top:-24px; margin-bottom:-24px;"><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody>' +
                    style(key) +
                    '<th class="esri-feature-fields__field-header">المنتج</th><td class="esri-feature-fields__field-data"> ' +
                    Product[key] +
                    "</td></tr></tbody></table></div>"
                  );
                },
              },
              {
                // Pass in the fields to display
                type: "custom",
                creator: function () {
                  return (
                    '<div class="esri-feature-fields" style="margin-top:-24px; margin-bottom:-24px;"><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody>' +
                    style(key) +
                    '<th class="esri-feature-fields__field-header">نوع المنتج</th><td class="esri-feature-fields__field-data"> ' +
                    Types[key] +
                    "</td></tr></tbody></table></div>"
                  );
                },
              },
              {
                // Pass in the fields to display
                type: "custom",
                creator: function () {
                  return (
                    '<div class="esri-feature-fields" style="margin-top:-24px; margin-bottom:-24px;"><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody>' +
                    style(key) +
                    '<th class="esri-feature-fields__field-header">صنف المنتج</th><td class="esri-feature-fields__field-data"> ' +
                    Class[key] +
                    "</td></tr></tbody></table></div>"
                  );
                },
              },
              {
                // Pass in the fields to display
                type: "custom",
                creator: function () {
                  return (
                    '<div class="esri-feature-fields" style="margin-top:-24px; margin-bottom:-24px;"><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody>' +
                    style(key) +
                    '<th class="esri-feature-fields__field-header">الموسم</th><td class="esri-feature-fields__field-data"> ' +
                    Seasons[key] +
                    "</td></tr></tbody></table></div>"
                  );
                },
              },
              {
                // Pass in the fields to display
                type: "custom",
                creator: function () {
                  return (
                    '<div class="esri-feature-fields" style="margin-top:-24px; margin-bottom:-24px;"><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody>' +
                    style(key) +
                    '<th class="esri-feature-fields__field-header">كمية الإنتاج المتوقعة</th><td class="esri-feature-fields__field-data"> ' +
                    Expected_quantity[key] +
                    "</td></tr></tbody></table></div>"
                  );
                },
              },
              {
                // Pass in the fields to display
                type: "custom",
                creator: function () {
                  return (
                    '<div class="esri-feature-fields" style="margin-top:-24px; margin-bottom:-24px;"><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody>' +
                    style(key) +
                    '<th class="esri-feature-fields__field-header">كمية الإنتاج الفعلية</th><td class="esri-feature-fields__field-data"> ' +
                    Actual_quantity[key] +
                    "</td></tr></tbody></table></div>"
                  );
                },
              },
              {
                // Pass in the fields to display
                type: "custom",
                creator: function () {
                  return (
                    '<div class="esri-feature-fields" style="margin-top:-24px; margin-bottom:-24px;"><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody>' +
                    style(key) +
                    '<th class="esri-feature-fields__field-header">كمية الإنتاج الغير محققة</th><td class="esri-feature-fields__field-data"> ' +
                    (Expected_quantity[key] - Actual_quantity[key]) +
                    "</td></tr></tbody></table></div>"
                  );
                },
              }
            );
          }
        } else {
          console.log("this is not a valid feature for queries");
        }
      });
  });

  function style(x) {
    if (x % 2 != 0) {
      return "<tr>";
    } else {
      return '<tr style="background-color:rgba(76,76,76,.02);">';
    }
  }
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
