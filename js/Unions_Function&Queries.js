function modelUnion() {
  require([
    "esri/rest/query",
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/widgets/Legend",
    "esri/widgets/Expand",
    "esri/Graphic",
  ], function (query, Map, MapView, FeatureLayer, Legend, Expand, Graphic) {
    /**
     *!  ********************************************************************************************************************************
     *! start the map filter
     *!  ********************************************************************************************************************************
     **/
    //variables
    let Governments = new Object();

    // wedgits
    let contener = document.createElement("div");
    let selectedGov = document.createElement("select");
    let labelGov;
    /*****************************************************************
     *!   queries
     *****************************************************************/
    //? governments
    async function displayGovernments() {
      await query
        .executeQueryJSON(
          "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/9",
          {
            outFields: ["Government_Name_Arabic", "GovernmentID"],
            where: "1=1",
          }
        )
        .then(function (result) {
          result.features.forEach((element) => {
            Governments[element.attributes.GovernmentID] =
              element.attributes.Government_Name_Arabic;
          });
        });

      for (let key in Governments) {
        var optionSelectGov = document.createElement("option");
        optionSelectGov.value = key;
        optionSelectGov.text = Governments[key];
        selectedGov.appendChild(optionSelectGov);
      }
    }

    /*****************************************************************
     *! function building
     *****************************************************************/
    //begining of building the  card for model
    document.body.appendChild(contener);
    contener.classList.add("form-group");
    contener.classList.add("card_selection");
    contener.style.display = "none";
    contener.setAttribute("id", "Centers");
    contener.style.float = "right";
    contener.style.top = "5%";
    contener.style.float = "right";
    contener.style.right = "4%";
    contener.style.height = "auto";
    contener.style.position = "absolute";
    //ending of building the  card for model

    //begining of building h5 for title of model
    let divH5 = document.createElement("div");
    let h5 = document.createElement("h5");
    let h5Content = document.createTextNode("تحديد خريطة المركز ");
    h5.style.textAlign = "right";
    h5.appendChild(h5Content);
    //ending of building h5 for title of model

    //begining of building label Goverment with list
    labelGov = document.createElement("label");
    labelGov.style.color = "black";
    labelGov.style.float = "right";
    labelGovContent = document.createTextNode("المحافظة");

    selectedGov.setAttribute("id", "Goverment");
    selectedGov.style.direction = "rtl";
    selectedGov.classList.add("form-control");
    displayGovernments();
    //ending of building label Goverment with list

    //begining of building display button
    let divBitton = document.createElement("div");
    divBitton.classList.add("mt-4");
    divBitton.style.textAlign = "center";
    let display = document.createElement("input");
    display.type = "button";
    display.setAttribute("id", "display");
    display.style.color = "#fff";
    display.style.backgroundColor = "#007bff";
    display.style.borderColor = "#007bff";
    display.value = "عرض";
    display.style.margin = "10px";
    // begining building function that fetch values

    display.onclick = function () {
      var select1 = document.getElementById("Goverment");
      var Goverment = select1.options[select1.selectedIndex].value;
      query
        .executeQueryJSON(
          "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/9",
          {
            outFields: ["Government_Name_Arabic", "GovernmentID"],
            where: "GovernmentID =" + Goverment,
            returnGeometry: true,
          }
        )
        .then(function (result) {
          highlightSelection(result.features[0]);
        });
    };
    // ending building function that fetch values

    //ending of building display button

    //begining of building cansel button
    let cansel = document.createElement("input");
    cansel.type = "button";
    cansel.style.color = "#fff";
    cansel.style.backgroundColor = "#6c757d";
    cansel.style.borderColor = "#6c757d";
    cansel.value = "إلغاء";
    cansel.onclick = function () {
      contener.style.display = "none";
    };
    //ending of building cansel button

    // adding the content model's title
    divH5.appendChild(h5);
    contener.appendChild(divH5);

    // adding buttons to divbuttons
    divBitton.appendChild(display);
    divBitton.appendChild(cansel);

    // adding the content of labelGoverment
    labelGov.appendChild(labelGovContent);

    // adding labelGoverment  and selectGovrment to the card
    contener.appendChild(labelGov);
    contener.appendChild(selectedGov);

    //adding the content divButton to the card
    contener.appendChild(divBitton);

    /**
     *!  ********************************************************************************************************************************
     *! end the map filter
     *!  ********************************************************************************************************************************
     **/
    /**
     *!  ********************************************************************************************************************************
     *! start the map design
     *!  ********************************************************************************************************************************
     **/
    //variables
    let government,
      flag,
      phones = [];
    product = new Object();

    //? style the  popupTemplate
    function style(x) {
      if (x % 2 != 0) {
        return "<tr>";
      } else {
        return '<tr style="background-color:rgba(76,76,76,.02);">';
      }
    }
    // renderer the workshopsLayer
    const administrativeCenterRenderer = {
      type: "unique-value", // autocasts as new UniqueValueRenderer()
      field: "Performance",
      defaultSymbol: { type: "simple-marker" }, // autocasts as new SimpleFillSymbol()
      uniqueValueInfos: [
        {
          // All features with value of "متميز" will be blue
          value: "0",
          symbol: {
            type: "simple-marker", // autocasts as new SimpleFillSymbol()
            color: "green",
            size: 9,
          },
        },
        {
          // All features with value of "جيد" will be green
          value: "1",
          symbol: {
            type: "simple-marker", // autocasts as new SimpleFillSymbol()
            color: "yellow",
            size: 10,
          },
        },
        {
          // All features with value of "متعثر" will be red
          value: "3",
          symbol: {
            type: "simple-marker", // autocasts as new SimpleFillSymbol()
            color: "red",
          },
        },
        {
          // All features with value of "ضعيف" will be yellow
          value: "2",
          symbol: {
            type: "simple-marker", // autocasts as new SimpleFillSymbol()
            color: "orange",
            size: 11,
          },
        },
      ],
    };
    //Highlight the selected feature
    const highlightSelection = (feature) => {
      view.graphics.removeAll();
      if (feature.key != 0) {
        var polygon = {
          type: "polygon",
          rings: feature.geometry.rings,
        };
        var simpleFillSymbol = {
          type: "simple-fill",
          color: [152, 239, 249, 0.7], // orange, opacity 80%
          outline: {
            color: [11, 255, 255],
            width: 2,
          },
        };
        var attributes = {
          name: feature.title,
          id: feature.key,
        };

        var polygonGraphic = new Graphic({
          geometry: polygon,
          symbol: simpleFillSymbol,
          attributes: attributes,
        });
        view.graphics.add(polygonGraphic);
        view.goTo(polygonGraphic.geometry.extent);
      } else view.goTo(this.mapExtent);
    };
    var GovernmentLayer = new FeatureLayer({
      url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/9",
      id: "Governments",
      visible: true,
      outFields: ["Government_Name_Arabic", "GovernmentID"],
      popupTemplate: {
        title: "محافظة {Government_Name_Arabic} ",
      },
    });
    var DirectorateLayer = new FeatureLayer({
      url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/10",
      id: "Directorates",
      visible: true,
      outFields: ["Directorate_Name_Arabic", "DirectorateID"],
      popupTemplate: {
        title: " مديرية {Directorate_Name_Arabic}",
      },
    });
    var UnionsLayer = new FeatureLayer({
      url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/0",
      id: " Unions",
      visible: true,
      outFields: ["*"],
      renderer: administrativeCenterRenderer,
    });
    var landsLayer = new FeatureLayer({
      url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/11",
      visible: false,
    });
    /*****************************************************************
     *! Layers may be added to the map in the map's constructor
     *****************************************************************/
    const map = new Map();

    /*****************************************************************
     *! Or they may be added to the map using map.add()
     *****************************************************************/
    map.add(GovernmentLayer); // adds the layer to the map
    map.add(DirectorateLayer); // adds the layer to the map
    map.add(UnionsLayer); // adds the layer to the map
    map.add(landsLayer); // adds the layer to the map
    /*****************************************************************/

    var view = new MapView({
      container: "viewDiv", // References the ID of a DOM element
      map: map, // References a Map instance
    });
    /*****************************************************************
     *! Create FeatureLayers instances.
     *****************************************************************/

    /*****************************************************************
     * The map handles the layers' data while the view and layer views
     * take care of renderering the layers
     *****************************************************************/
    view.on("layerview-create", (event) => {
      if (event.layer.id === "Yemen") {
        // Explore the properties of the population layer's layer view here
        // console.log("LayerView for Yemen created!", event.layerView);
      }
      if (event.layer.id === "Governments") {
        // console.log("LayerView for Governments created!", event.layerView);
      }
      if (event.layer.id === "Directorates") {
        // console.log("LayerView for Directorate created!", event.layerView);
      }
      if (event.layer.id === "Unions") {
        // console.log("LayerView for WorkshopsLayer created!", event.layerView);
      }
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
    view.ui.add(legendExpand, "bottom-right");
    /*****************************************************************
     *! the point queries
     *****************************************************************/

    view.on("click", (event) => {
      view.graphics.removeAll();

      // only include graphics from hurricanesLayer in the hitTest
      const opts = {
        include: UnionsLayer,
      };

      view
        .hitTest(event, opts)
        .then((response) => {
          // check if a feature is returned from the hurricanesLayer
          if (response.results.length) {
            const graphic = response.results[0].graphic;
            product = new Object();
            flag = 0;
            // do something with the graphic
            return graphic.attributes["OBJECTID"];
          }
        })
        .then((objectId) => {
          console.log(objectId);
          return UnionsLayer.queryRelatedFeatures({
            outFields: ["*"],
            relationshipId: UnionsLayer.relationships[0].id,
            objectIds: objectId,
          })
            .then((results) => {
              phones = [];
              results[objectId].features.forEach((element) => {
                console.log(element.attributes["Phone"]);
                phones.push(element.attributes["Phone"]);
              });
            })
            .then(function () {
              //directorate
              // console.log(objectId);
              return UnionsLayer.queryRelatedFeatures({
                outFields: ["*"],
                relationshipId: UnionsLayer.relationships[2].id,
                objectIds: objectId,
              }).then((results) => {
                results[objectId].features.forEach((element) => {
                  // console.log(element.attributes["Directorate_Name_Arabic"]);
                  Directorate = element.attributes["Directorate_Name_Arabic"];
                  DirectorateID = element.attributes["OBJECTID_1"];
                });
              });
            })
            .then(function () {
              //government
              return UnionsLayer.queryRelatedFeatures({
                outFields: ["*"],
                relationshipId: UnionsLayer.relationships[2].id,
                objectIds: objectId,
              }).then((results) => {
                let DirectorateID =
                  results[objectId].features[0].attributes["OBJECTID_1"];
                return DirectorateLayer.queryRelatedFeatures({
                  outFields: ["*"],
                  relationshipId: DirectorateLayer.relationships[9].id,
                  objectIds: DirectorateID,
                }).then((results) => {
                  // console.log(results[DirectorateID]);
                  results[DirectorateID].features.forEach((element) => {
                    // console.log(element.attributes["Government_Name_Arabic"]);
                    government = element.attributes["Government_Name_Arabic"];
                  });
                });
              });
            })
            .then(function () {
              //! products
              // console.log(objectId);
              //? directorates
              // console.log(DirectorateID);
              //? lands in directorate
              return DirectorateLayer.queryRelatedFeatures({
                outFields: ["*"],
                relationshipId: DirectorateLayer.relationships[7].id,
                objectIds: DirectorateID,
              }).then((results) => {
                if (results[DirectorateID]) {
                  for (const land of results[DirectorateID].features) {
                    if (land.attributes["Type_Land"] == 0) {
                      //Result_Product_Vegetarian
                      landsLayer
                        .queryRelatedFeatures({
                          outFields: ["*"],
                          relationshipId: landsLayer.relationships[0].id,
                          objectIds: land.attributes["OBJECTID"],
                        })
                        .then((results) => {
                          if (results[land.attributes["OBJECTID"]]) {
                            results[
                              land.attributes["OBJECTID"]
                            ].features.forEach((element) => {
                              // Product_Vegetarian
                              query
                                .executeQueryJSON(
                                  "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/30",
                                  {
                                    outFields: ["*"],
                                    where:
                                      "OBJECTID  = " +
                                      element.attributes[
                                        "Product_VegetarianID"
                                      ],
                                  }
                                )
                                .then((Product_Vegetarian) => {
                                  if (Product_Vegetarian.features.length) {
                                    let r,
                                      point = 0;
                                    r =
                                      Product_Vegetarian.features[0].attributes[
                                        "Product_Vegetarian_Name"
                                      ];
                                    if (!Object.keys(product).length) {
                                      product[r] =
                                        element.attributes[
                                          "Quantity_Production_Actual"
                                        ];
                                    } else {
                                      for (let key in product) {
                                        if (key == r) {
                                          product[key] +=
                                            element.attributes[
                                              "Quantity_Production_Actual"
                                            ];
                                          point++;
                                        }
                                      }
                                      if (point == 0) {
                                        product[r] =
                                          element.attributes[
                                            "Quantity_Production_Actual"
                                          ];
                                      }
                                    }
                                  } else {
                                    // console.log(
                                    //   "the product is not availableFields"
                                    // );
                                  }
                                });
                            });
                          } else {
                            // console.log("the land is not has product");
                          }
                        });
                    } else {
                      // console.log("the land is not farmed");
                    }
                  }
                } else {
                  flag++;
                  console.log("the directorate has no lands");
                }
              });
              // console.log(product);
            });
        })
        .then(() => {
          UnionsLayer.popupTemplate = {
            title: "{Union_Name}",

            content: [
              {
                // Pass in the fields to display
                type: "fields",
                fieldInfos: [
                  {
                    label: "اسم الاتحاد",
                    fieldName: "Union_Name",
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
                    '<div class="esri-feature-fields" style="margin-top:-24px; margin-bottom:-24px;"><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody><tr  style="background-color:rgba(76,76,76,.02);"><th class="esri-feature-fields__field-header">التلفون</th><td class="esri-feature-fields__field-data"> ' +
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
                    '<div class="esri-feature-fields" style="margin-top:-24px; margin-bottom:-24px;"><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody><tr><th class="esri-feature-fields__field-header">المحافظة</th><td class="esri-feature-fields__field-data"> ' +
                    government +
                    "</td></tr></tbody></table></div>"
                  );
                },
              },
            ],
          };
          if (flag == 0) {
            UnionsLayer.popupTemplate.content.push({
              type: "custom",
              creator: function () {
                return '<div class="esri-feature-fields" style="margin-top:-24px; "><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody>الطاقة الإنتاجية</tbody></table></div>';
              },
            });
          }
          for (let key in product) {
            console.log(product[key]);
            UnionsLayer.popupTemplate.content.push({
              // Pass in the fields to display
              type: "custom",
              creator: function () {
                return (
                  '<div class="esri-feature-fields" style="margin-top:-24px; margin-bottom:-24px;"><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody>' +
                  style(key) +
                  '<th class="esri-feature-fields__field-header"> ' +
                  key +
                  '</th><td class="esri-feature-fields__field-data"> ' +
                  product[key] +
                  " %</td></tr></tbody></table></div>"
                );
              },
            });
          }
        });
    });
  });
}
