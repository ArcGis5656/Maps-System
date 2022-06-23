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
  var PointsSalesLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/6",
    id: "PointsSales",
    visible: true,
    // renderer: PointsSalesRenderer,
    // labelingInfo: [Lable("$feature.Ponit_Sale_Name")],

    outFields: ["*"],
  });
  var DirectorateLayer = new FeatureLayer({
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

  map.add(PointsSalesLayer);
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
    Product_Manufacturer = new Object(),
    Product_Vegetarian = new Object(),
    DirectorateID,
    government,
    phones = [];

  // call clearMap method when clear is clicked
  const clearbutton = document.getElementById("clearButton");
  clearbutton.addEventListener("click", clearMap);

  PointsSalesLayer.load().then(function () {
    return (g = new Grid());
  });

  view.on("click", (event) => {
    // only include graphics from hurricanesLayer in the hitTest
    const opts = {
      include: PointsSalesLayer,
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
        // phones
        // console.log(objectId);
        return PointsSalesLayer.queryRelatedFeatures({
          outFields: ["*"],
          relationshipId: PointsSalesLayer.relationships[2].id,
          objectIds: objectId,
        })
          .then((results) => {
            phones = [];
            results[objectId].features.forEach((element) => {
              // console.log(element.attributes["Phone"]);
              phones.push(element.attributes["Phone"]);
            });
          })
          .then(() => {
            // Directorate
            // console.log(objectId);
            return PointsSalesLayer.queryRelatedFeatures({
              outFields: ["*"],
              relationshipId: PointsSalesLayer.relationships[3].id,
              objectIds: objectId,
            }).then((results) => {
              Directorate =
                results[objectId].features[0].attributes[
                  "Directorate_Name_Arabic"
                ];
              // console.log(Directorate);
              DirectorateID =
                results[objectId].features[0].attributes["OBJECTID_1"];
            });
          })
          .then(() => {
            // government
            // console.log(DirectorateID);
            return DirectorateLayer.queryRelatedFeatures({
              outFields: ["*"],
              relationshipId: DirectorateLayer.relationships[9].id,
              objectIds: DirectorateID,
            }).then((results) => {
              results[DirectorateID].features[0].attributes[
                "Government_Name_Arabic"
              ];
              government =
                results[DirectorateID].features[0].attributes[
                  "Government_Name_Arabic"
                ];
              // console.log(government);
            });
          })
          .then(() => {
            Product_Manufacturer = [];
            //Sell_Product_Manufacturer
            return PointsSalesLayer.queryRelatedFeatures({
              outFields: ["*"],
              relationshipId: PointsSalesLayer.relationships[0].id,
              objectIds: objectId,
            }).then((results) => {
              results[objectId].features.forEach((element) => {
                // console.log(
                //   element.attributes["Product_ManufacturerID"],
                //   element.attributes["Quantity_Total"],
                //   element.attributes["Quantity_Sold"]
                // );
                //Product_Manufacturer
                query
                  .executeQueryJSON(
                    "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/29",
                    {
                      outFields: ["*"],

                      // autocasts as new Query()
                      where:
                        "OBJECTID  = " +
                        element.attributes["Product_ManufacturerID"],
                    }
                  )
                  .then((Product) => {
                    // console.log(
                    //   Product.features[0].attributes[
                    //     "Product_Manufacturer_Name"
                    //   ]
                    // ); //2
                    Product_Manufacturer[
                      element.attributes["Product_ManufacturerID"]
                    ] = Array(
                      element.attributes["Quantity_Total"],
                      element.attributes["Quantity_Sold"],
                      Product.features[0].attributes[
                        "Product_Manufacturer_Name"
                      ]
                    );
                    // for (let key in Product_Manufacturer) {
                    //   let value = Product_Manufacturer[key];
                    //   value.forEach((element) => {
                    //     console.log(element);
                    //   });
                    //   console.log(key + " = " + value + "");
                    // }
                  });
              });
            });
          })
          .then(() => {
            Product_Vegetarian = [];
            //Sell_Product_Vegetarian
            return PointsSalesLayer.queryRelatedFeatures({
              outFields: ["*"],
              relationshipId: PointsSalesLayer.relationships[1].id,
              objectIds: objectId,
            }).then((results) => {
              results[objectId].features.forEach((element) => {
                // console.log(
                //   element.attributes["Product_VegetarianID"],
                //   element.attributes["Quantity_Total"],
                //   element.attributes["Quantity_Sold"]
                // );
                //Product_Vegetarian
                query
                  .executeQueryJSON(
                    "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/30",
                    {
                      outFields: ["*"],

                      // autocasts as new Query()
                      where:
                        "OBJECTID  = " +
                        element.attributes["Product_VegetarianID"],
                    }
                  )
                  .then((Product) => {
                    // console.log(
                    //   Product.features[0].attributes["Product_Vegetarian_Name"]
                    // ); //2
                    Product_Vegetarian[
                      element.attributes["Product_VegetarianID"]
                    ] = Array(
                      element.attributes["Quantity_Total"],
                      element.attributes["Quantity_Sold"],
                      Product.features[0].attributes["Product_Vegetarian_Name"]
                    );
                    // console.log(Product_Vegetarian);
     
                    // for (let key in Product_Vegetarian) {
                    //   let value = Product_Vegetarian[key];
                    //   value.forEach((element) => {
                    //     console.log(element);
                    //   });
                    //   console.log(key + " = " + value + "");
                    // }
                    // console.log(Product_Vegetarian);
     
                  });
              });
            });
          });
      })
      .then(() => {
        console.log(Product_Vegetarian);
     
        PointsSalesLayer.popupTemplate = {
          title: "{Workshop_Name}",
          // expressionInfos: [
          //   {
          //     name: "Unused Energy",
          //     title: "الطاقة الغير مستغلة",
          //     expression: "$feature.Maximum_Power - $feature.Actual_Power",
          //   },
          // ],
          content: [
            {
              type: "fields",
              fieldInfos: [
                {
                  label: "اسم نقطة البيع",
                  fieldName: "Ponit_Sale_Name",
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
                // {
                //   label: "المنتجات",
                //   fieldName:
                //     "relationships/22/relationships/45/Product_Manufacturer_Name",
                //   // fieldName: "relationships/23/relationships/47/Product_Vegetarian_Name",
                // },
                // {
                //   label: "متوسط كميةالبيع",
                //   fieldName: "expression/average sales quantity",
                //   format: {
                //     digitSeparator: true,
                //   },
                // },
              ],
            },
            {
              // Pass in the fields to display
              type: "custom",
              creator: function () {
                return (
                  '<div class="esri-feature-fields" style="margin-top:-24px; margin-bottom:-24px;"><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody><tr><th class="esri-feature-fields__field-header">التلفون</th><td class="esri-feature-fields__field-data"> ' +
                  phones.toString() +
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
                  fieldName: "relationships/25/Directorate_Name_Arabic",
                },
              ],
            },
          ], // "The lands type number is {Type_LandID}.", // Display text in pop-up
        };
        PointsSalesLayer.popupTemplate.content.push({
          // Pass in the fields to display
          type: "custom",
          creator: function () {
            return (
              '<div class="esri-feature-fields" style="margin-top:-24px; "><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody>الطاقة الإنتاجية</tbody></table></div>' +
              "</td></tr></tbody></table></div>"
            );
          },
        });
        console.log(Product_Manufacturer);
        for (let Key in Product_Vegetarian) {
          let value = Product_Vegetarian[Key];
          value.forEach((element) => {
            console.log(element);
            PointsSalesLayer.popupTemplate.content.push({
              // Pass in the fields to display
              type: "custom",
              creator: function () {
                return (
                  '<div class="esri-feature-fields" style="margin-top:-24px; margin-bottom:-24px;"><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody>' +
                  style(Key) +
                  '<th class="esri-feature-fields__field-header"> المنتج</th><td class="esri-feature-fields__field-data"> ' +
                  element +
                  "</td></tr></tbody></table></div>"
                );
              },
            });
          });
          // console.log(key + " = " + value + "");
        }

        for (let key in Product_Manufacturer) {
          let value = Product_Manufacturer[key];
          value.forEach((element) => {
            console.log(element);
            PointsSalesLayer.popupTemplate.content.push({
              // Pass in the fields to display
              type: "custom",
              creator: function () {
                return (
                  '<div class="esri-feature-fields" style="margin-top:-24px; margin-bottom:-24px;"><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody>' +
                  style(key) +
                  '<th class="esri-feature-fields__field-header"> المنتج</th><td class="esri-feature-fields__field-data"> ' +
                  element +
                  "</td></tr></tbody></table></div>"
                );
              },
            });
          });
          // console.log(key + " = " + value + "");
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
