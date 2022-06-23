require([
  "esri/rest/query",
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/widgets/Legend",
  "esri/widgets/Expand",
  "esri/widgets/FeatureTable/Grid/Grid",
], function (query, Map, MapView, FeatureLayer, Legend, Expand, Grid) {
  var AssociationsRenderer = {
    type: "unique-value", // autocasts as new UniqueValueRenderer()
    field: "Performance",
    defaultSymbol: { type: "simple-marker" }, // autocasts as new SimpleFillSymbol()
    uniqueValueInfos: [
      {
        // All features with value of "North" will be blue
        value: "0",
        symbol: {
          type: "simple-marker", // autocasts as new SimpleFillSymbol()
          color: "blue",
          size: 9,
        },
      },
      {
        // All features with value of "East" will be green
        value: "1",
        symbol: {
          type: "simple-marker", // autocasts as new SimpleFillSymbol()
          color: "green",
          size: 10,
        },
      },
      {
        // All features with value of "South" will be red
        value: "3",
        symbol: {
          type: "simple-marker", // autocasts as new SimpleFillSymbol()
          color: "red",
        },
      },
      {
        // All features with value of "West" will be yellow
        value: "2",
        symbol: {
          type: "simple-marker", // autocasts as new SimpleFillSymbol()
          color: "yellow",
          size: 11,
        },
      },
    ],
  };
  var AssociationLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/1",
    id: "Associations",
    visible: true,
    renderer: AssociationsRenderer,
    outFields: ["*"],

    // content: "The Association Performance is {Performance}.",
    // },
  });
  var DirectorateLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/10",
    visible: false,
    id: "Directorates",
  });
  var landsLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/11",
    visible: false,
    id: "Lands",
  });
  var YemenLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/8",
    id: "Yemen",
    opacity: 0.6,
  });

  const map = new Map({
    layers: [YemenLayer],
  });

  map.add(AssociationLayer);
  map.add(DirectorateLayer);
  map.add(landsLayer);

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
    Union,
    Directorate,
    phones = [],
    Member_Association,
    arable_landID,
    production_capacity = new Object(),
    Quantity_Production;

  // call clearMap method when clear is clicked
  const clearbutton = document.getElementById("clearButton");
  clearbutton.addEventListener("click", clearMap);

  AssociationLayer.load().then(function () {
    return (g = new Grid());
  });

    view.on("click", (event) => {
      // only include graphics from hurricanesLayer in the hitTest
      const opts = {
        include: AssociationLayer,
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
          return AssociationLayer.queryRelatedFeatures({
            outFields: ["*"],
            relationshipId: AssociationLayer.relationships[1].id,
            objectIds: objectId,
          })
            .then((results) => {
              phones = [];
              results[objectId].features.forEach((element) => {
                console.log(element.attributes["Phone"]);
                phones.push(element.attributes["Phone"]);
              });
            })
          .then(UnionFunction(objectId))
          .then(DirectorateFunction(objectId))
          .then(GovernmentFunction(objectId))
          .then(AssociationMemebers(objectId))
          .then(function () {
            console.log("****************************************************");
            console.log(objectId);
            //directorate
            return AssociationLayer.queryRelatedFeatures({
              outFields: ["*"],
              relationshipId: AssociationLayer.relationships[2].id,
              objectIds: objectId,
            })
              .then((results) => {
                return results[objectId].features[0].attributes["OBJECTID_1"];
              })
              .then(function (objectId) {
                console.log(objectId);
                //arable_land
                return DirectorateLayer.queryRelatedFeatures({
                  outFields: ["*"],
                  relationshipId: DirectorateLayer.relationships[7].id,
                  objectIds: objectId,
                  where: "Type_Land = 0",
                }).then((results) => {
                  console.log(results[objectId].features.length);
                  length = results[objectId].features.length;
                  if (length) {
                    results[objectId].features.forEach((element) => {
                      // Result_Product_Vegetarian
                      return landsLayer
                        .queryRelatedFeatures({
                          outFields: ["*"],
                          relationshipId: landsLayer.relationships[0].id,
                          objectIds: element.attributes["OBJECTID"],
                        })
                        .then((results) => {
                          if (results[element.attributes["OBJECTID"]]) {
                            // console.log(results[element.attributes["OBJECTID"]]);
                            results[
                              element.attributes["OBJECTID"]
                            ].features.forEach((element) => {
                              console.log(
                                element.attributes["Quantity_Production_Actual"]
                              );
                              return element.attributes[
                                "Quantity_Production_Actual"
                              ];
                            });
                          } else {
                            console.log(
                              "failed to find Result_Product_Vegetarian results"
                            );
                          }
                        })
                        .then((results) => {
                          console.log(results);
                        });
                    });

                    //   .then(function (count) {
                    //     console.log(count.features.length);
                    //     count.features.forEach((element) => {
                    //       console.log(element.attributes["Type_Land"]);
                    //       arable_landID = element.attributes["OBJECTID"];
                    //     });
                    //   });
                    // console.log(s);
                    // let objectIds =
                    //   results[oid].features[0].attributes["OBJECTID"];
                    // landsLayer
                    //   .queryRelatedFeatures({
                    //     outFields: ["*"],
                    //     relationshipId: landsLayer.relationships[0].id,
                    //     objectIds: objectIds,
                    //   })
                    //   .then((results) => {
                    //     if (results[objectIds]) {
                    //       results[objectIds].features.forEach((element) => {
                    //         Quantity_Production =
                    //           element.attributes[
                    //             "Quantity_Production_Actual"
                    //           ];
                    //         console.log(
                    //           element.attributes["Quantity_Production_Actual"]
                    //         );
                    //       });
                    //     }
                    //     return query
                    //       .executeQueryJSON(
                    //         "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/30",
                    //         {
                    //           outFields: ["*"],

                    //           // autocasts as new Query()
                    //           where: "OBJECTID  = " + objectIds,
                    //         }
                    //       )
                    //       .then((oid) => {
                    //         console.log(oid);
                    //   console.log(
                    //   oid.features[0].attributes[
                    //     "Product_Vegetarian_Name"
                    //   ]
                    // );
                    // console.log(oid.features[0].attributes["Type"]); //2
                    // Product =
                    //   oid.features[0].attributes[
                    //     "Product_Vegetarian_Name"
                    //   ];
                    // });
                    // });
                    // });
                  } else {
                    console.log("isplayPoppupsInformation failed");
                  }
                  console.log(
                    "###################################################"
                  );
                });
                // .then((results) => {
                //   console.log(results);
                // });
              });
          });
      })
      .then(displayPoppupsInformation);
  });

  // queries in the functions
  function PhoneFunction(objectId) {
    return AssociationLayer.queryRelatedFeatures({
      outFields: ["*"],
      relationshipId: AssociationLayer.relationships[1].id,
      objectIds: objectId,
    }).then((results) => {
      // console.log(results);
      phones = [];
      results[objectId].features.forEach((element) => {
        console.log(element.attributes["Phone"]);
        phones.push(element.attributes["Phone"]);
      });
    });
  }
  function UnionFunction(objectId) {
    return AssociationLayer.queryRelatedFeatures({
      outFields: ["*"],
      relationshipId: AssociationLayer.relationships[3].id,
      objectIds: objectId,
    }).then((results) => {
      results[objectId].features.forEach((element) => {
        console.log(element.attributes["Union_Name"]);
        Union = element.attributes["Union_Name"];
      });
    });
  }
  function DirectorateFunction(objectId) {
    return AssociationLayer.queryRelatedFeatures({
      outFields: ["*"],
      relationshipId: AssociationLayer.relationships[2].id,
      objectIds: objectId,
    }).then((results) => {
      results[objectId].features.forEach((element) => {
        console.log(element.attributes["Directorate_Name_Arabic"]);
        Directorate = element.attributes["Directorate_Name_Arabic"];
      });
    });
  }
  function GovernmentFunction(objectId) {
    return AssociationLayer.queryRelatedFeatures({
      outFields: ["*"],
      relationshipId: AssociationLayer.relationships[2].id,
      objectIds: objectId,
    })
      .then((results) => {
        return results[objectId].features[0].attributes["OBJECTID_1"];
      })
      .then(function (id) {
        return DirectorateLayer.queryRelatedFeatures({
          outFields: ["*"],
          relationshipId: DirectorateLayer.relationships[9].id,
          objectIds: id,
        }).then((results) => {
          results[id].features.forEach((element) => {
            console.log(element.attributes["Government_Name_Arabic"]);
            government = element.attributes["Government_Name_Arabic"];
          });
        });
      });
  }
  function AssociationMemebers(objectId) {
    return AssociationLayer.queryRelatedFeatures({
      outFields: ["*"],
      relationshipId: AssociationLayer.relationships[0].id,
      objectIds: objectId,
    }).then((results) => {
      console.log(results[objectId].features.length);
      Member_Association = results[objectId].features.length;
    });
  }
  function displayPoppupsInformation() {
    AssociationLayer.popupTemplate = {
      title: "{Association_Name}",
      content: [
        {
          // Pass in the fields to display
          type: "fields",
          fieldInfos: [
            { label: "اسم الجمعية", fieldName: "Association_Name" },
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
              label: "الأداء",
              fieldName: "Performance",
            },
          ],
        },
        {
          // Pass in the fields to display
          type: "custom",
          creator: function () {
            return (
              '<div class="esri-feature-fields" style="margin-top:-24px; "><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody>الطاقة الإنتاجية</tbody></table></div>' +
              '<div class="esri-feature-fields"><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody><tr><th class="esri-feature-fields__field-header">الطاقة الإنتاجية</th><td class="esri-feature-fields__field-data"> ' +
              Member_Association +
              "</td></tr></tbody></table></div>"
            );
          },
        },
        {
          // Pass in the fields to display
          type: "custom",
          creator: function () {
            return (
              '<div class="esri-feature-fields" style="margin-top:-24px; margin-bottom:-24px;"><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody><tr><th class="esri-feature-fields__field-header">عدد الأعضاء</th><td class="esri-feature-fields__field-data"> ' +
              Member_Association +
              "</td></tr></tbody></table></div>"
            );
          },
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
          // Pass in the fields to display
          type: "custom",
          creator: function () {
            return (
              '<div class="esri-feature-fields" style="margin-top:-24px; margin-bottom:-24px;"><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody><tr><th class="esri-feature-fields__field-header">المديرية</th><td class="esri-feature-fields__field-data"> ' +
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
              '<div class="esri-feature-fields" style="margin-top:-24px; margin-bottom:-24px;"><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody><tr style="background-color:rgba(76,76,76,.02);"><th class="esri-feature-fields__field-header">الإتحاد</th><td class="esri-feature-fields__field-data"> ' +
              Union +
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
