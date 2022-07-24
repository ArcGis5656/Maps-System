function modelCenter() {
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
    {
      //variables
      let Governments = new Object(),
        Directorates = new Object(),
        Directorates_Points_Sales = [],
        Goverment_id;

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
            "https://192.168.56.56:6443/arcgis/rest/services/DBofMaps/MapServer/9",
            {
              outFields: ["Government_Name_Arabic", "GovernmentID"],
              where: "1=1",
            }
          )
          .then(async function (result) {
            for await (const element of result.features) {
              // result.features.forEach((element) => {
              Governments[element.attributes.GovernmentID] =
                element.attributes.Government_Name_Arabic;
            }
          });

        for (let key in Governments) {
          var optionSelectGov = document.createElement("option");
          optionSelectGov.value = key;
          optionSelectGov.text = Governments[key];
          selectedGov.appendChild(optionSelectGov);
        }
      }

      //? directorates
      async function displayDirectorates(DirectorateObject) {
        Directorates = new Object();

        await query
          .executeQueryJSON(
            "https://192.168.56.56:6443/arcgis/rest/services/DBofMaps/MapServer/6",
            {
              outFields: ["DirectorateID"],
              where: "1=1",
            }
          )
          .then((results) => {
            results.features.forEach((element) => {
              Directorates_Points_Sales.push(element.attributes.DirectorateID);
            });
          });
        for (let i = 0; i < DirectorateObject.length; i++) {
          for (let j = 0; j < Directorates_Points_Sales.length; j++) {
            if (
              DirectorateObject[i].attributes.DirectorateID ===
              Directorates_Points_Sales[j]
            ) {
              if (Object.keys(Directorates).length) {
                for (let z = 0; z < Object.keys(Directorates).length; z++) {
                  if (Directorates_Points_Sales[j] !== Directorates[z]) {
                    Directorates[
                      DirectorateObject[i].attributes.DirectorateID
                    ] = DirectorateObject[i].attributes.Directorate_Name_Arabic;
                  } else {
                    // console.log("found it in directorates");
                  }
                }
              } else {
                Directorates[DirectorateObject[i].attributes.DirectorateID] =
                  DirectorateObject[i].attributes.Directorate_Name_Arabic;
              }
            }
          }
        }
        //first is null for the zoom
        // selectedDir.empty();
        let optionSelectDir = document.createElement("option");
        optionSelectDir.value = "default";
        optionSelectDir.text = "";
        selectedDir.appendChild(optionSelectDir);
        // the rest
        for (let key in Directorates) {
          let optionSelectDir = document.createElement("option");
          optionSelectDir.value = key;
          optionSelectDir.text = Directorates[key];
          selectedDir.appendChild(optionSelectDir);
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

      //begining of building label Dirctorate with list
      let selectedDir = document.createElement("select");
      let labelDir = document.createElement("label");
      labelDir.style.color = "black";
      labelDir.style.float = "right";
      labelDirContent = document.createTextNode("المديرية");
      selectedDir.setAttribute("id", "Dirctorate");
      selectedDir.style.direction = "rtl";
      selectedDir.classList.add("form-control");

      selectedGov.addEventListener("change", function (event) {
        var length = selectedDir.options.length;
        for (i = length - 1; i >= 0; i--) {
          selectedDir.options[i] = null;
        }
        Goverment_id = selectedGov.options[selectedGov.selectedIndex].value;
        if (event) {
          query
            .executeQueryJSON(
              "https://192.168.56.56:6443/arcgis/rest/services/DBofMaps/MapServer/10",
              {
                // autocasts as new Query()
                outFields: ["*"],
                where: "GovernmentID =" + Goverment_id,
              }
            )
            .then(async function (results) {
              await displayDirectorates(results.features);
            });
        }
      });
      //ending of building label Dirctorate with list

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
        var select2 = document.getElementById("Dirctorate");
        var Dirctorate = select2.options[select2.selectedIndex].value;
        if (Dirctorate == "default") {
          query
            .executeQueryJSON(
              "https://192.168.56.56:6443/arcgis/rest/services/DBofMaps/MapServer/9",
              {
                outFields: ["Government_Name_Arabic", "GovernmentID"],
                where: "GovernmentID =" + Goverment,
                returnGeometry: true,
              }
            )
            .then(async function (result) {
              await highlightSelection(result.features[0]);
            });
        } else {
          query
            .executeQueryJSON(
              "https://192.168.56.56:6443/arcgis/rest/services/DBofMaps/MapServer/10",
              {
                outFields: ["Directorate_Name_Arabic", "DirectorateID"],
                where: "DirectorateID  =" + Dirctorate,
                returnGeometry: true,
              }
            )
            .then(async function (result) {
              await highlightSelection(result.features[0]);
            });
        }
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

      // adding the content of labelDirectorate
      labelDir.appendChild(labelDirContent);

      // adding labelGoverment  and selectDirectorate to the card
      contener.appendChild(labelDir);
      contener.appendChild(selectedDir);

      //adding the content divButton to the card
      contener.appendChild(divBitton);
    }
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
      DirectorateID,
      phones = [];

    //functions
    //? renderering
    async function Renderer() {
      try {
        averageOfSelling = new Object();
        await query
          .executeQueryJSON(
            "https://192.168.56.56:6443/arcgis/rest/services/DBofMaps/MapServer/6",
            {
              outFields: ["OBJECTID"],
              where: "1=1",
            }
          )
          .then(async function (query) {
            // query.features.forEach((element) => {
            // console.log(Object.keys(query.features).length);
            for await (const element of query.features) {
              objectId = element.attributes.OBJECTID;
              await displayProduct_Vegetarian(objectId, ProductV);
              await displayProduct_Manufacturer(objectId, ProductM);
            }
          });
        console.log(averageOfSelling);
        console.log(Object.keys(averageOfSelling));
        // let i = 0;
        // async function printArrayOfSelling(i, averageOfSelling) {
        for (const element of averageOfSelling) {
          console.log(element);
          i++;
        }
          console.log(Array.from(averageOfSelling));
        // };
        // printArrayOfSelling(i, averageOfSelling)
      } catch (e) {
        console.log(e);
      }
    }
    Renderer();
    //? style the  popupTemplate
    function style(x) {
      if (x % 2 != 0) {
        return "<tr>";
      } else {
        return '<tr style="background-color:rgba(76,76,76,.02);">';
      }
    }

    //? Product_Manufacturer
    async function displayProduct_Manufacturer(objectId, callback) {
      try {
        Product_Manufacturer = new Object();
        //Sell_Product_Manufacturer
        await PointsSalesLayer.queryRelatedFeatures({
          outFields: ["*"],
          relationshipId: PointsSalesLayer.relationships[0].id,
          objectIds: objectId,
        }).then(async (results) => {
          if (results[objectId]) {
            for await (const element of results[objectId].features) {
              // results[objectId].features.forEach((element) => {
              await callback(element, objectId);
            }
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
    //?Product_M
    async function displayProductM(element) {
      await query
        .executeQueryJSON(
          "https://192.168.56.56:6443/arcgis/rest/services/DBofMaps/MapServer/29",
          {
            outFields: ["*"],
            where:
              "OBJECTID  = " + element.attributes["Product_ManufacturerID"],
          }
        )
        .then((Product) => {
          if (Product) {
            Product_Manufacturer[element.attributes["Product_ManufacturerID"]] =
              Array(
                element.attributes["Quantity_Total"],
                element.attributes["Quantity_Sold"],
                Product.features[0].attributes["Product_Manufacturer_Name"]
              );
          }
        });
      for (let key in Product_Manufacturer) {
        let value = Product_Manufacturer[key];
        let Number = (value[1] * 100) / value[0] / 100;
        PointsSalesLayer.popupTemplate.content.push({
          type: "custom",
          creator: function () {
            return (
              '<div class="esri-feature-fields" style="margin-top:-24px; margin-bottom:-24px;"><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody>' +
              style(key) +
              '<th class="esri-feature-fields__field-header"> ' +
              value[2] +
              '</th><td class="esri-feature-fields__field-data"> ' +
              Number.toFixed(2) +
              " %</td></tr></tbody></table></div>"
            );
          },
        });
      }
    }
    //?Product_M of renderering
    async function ProductM(element, objectId) {
      try {
        await query
          .executeQueryJSON(
            "https://192.168.56.56:6443/arcgis/rest/services/DBofMaps/MapServer/29",
            {
              outFields: ["*"],
              where:
                "OBJECTID  = " + element.attributes["Product_ManufacturerID"],
            }
          )
          .then((Product) => {
            if (Product) {
              let point = 0;
              let Number =
                (element.attributes["Quantity_Sold"] * 100) /
                element.attributes["Quantity_Total"] /
                100;

              if (Object.keys(averageOfSelling).length) {
                for (let key in averageOfSelling) {
                  if (objectId == key) {
                    averageOfSelling[objectId].push(
                      Array(
                        Product.features[0].attributes[
                          "Product_Manufacturer_Name"
                        ],
                        Number.toFixed(2)
                      )
                    );
                    point++;
                  }
                }
                if (point == 0) {
                  averageOfSelling[objectId] = [
                    [
                      Product.features[0].attributes[
                        "Product_Manufacturer_Name"
                      ],
                      Number.toFixed(2),
                    ],
                  ];
                }
              } else {
                averageOfSelling[objectId] = [
                  [
                    Product.features[0].attributes["Product_Manufacturer_Name"],
                    Number.toFixed(2),
                  ],
                ];
              }
            }
          });
      } catch (e) {
        console.log(e);
      }
    }
    //? Product_Vegetarian
    async function displayProduct_Vegetarian(objectId, callback) {
      try {
        Product_Vegetarian = new Object();
        //Sell_Product_Vegetarian
        PointsSalesLayer.queryRelatedFeatures({
          outFields: ["*"],
          relationshipId: PointsSalesLayer.relationships[1].id,
          objectIds: objectId,
        }).then(async (results) => {
          if (results[objectId]) {
            for await (const element of results[objectId].features) {
              // results[objectId].features.forEach((element) => {
              callback(element, objectId);
            }
          }
        });
      } catch (e) {
        console.log(e);
      }
    }
    //?Product_V
    async function displayProductV(element) {
      await query
        .executeQueryJSON(
          "https://192.168.56.56:6443/arcgis/rest/services/DBofMaps/MapServer/30",
          {
            outFields: ["*"],
            where: "OBJECTID  = " + element.attributes["Product_VegetarianID"],
          }
        )
        .then((Product) => {
          if (Product) {
            Product_Vegetarian[element.attributes["Product_VegetarianID"]] =
              Array(
                element.attributes["Quantity_Total"],
                element.attributes["Quantity_Sold"],
                Product.features[0].attributes["Product_Vegetarian_Name"]
              );
          }
        });
      for (let key in Product_Vegetarian) {
        let value = Product_Vegetarian[key];
        let Number = (value[1] * 100) / value[0] / 100;
        console.log(value[0]);
        console.log(value[1]);
        console.log(value[2]);
        console.log(Number.toFixed(2));
        PointsSalesLayer.popupTemplate.content.push({
          type: "custom",
          creator: function () {
            return (
              '<div class="esri-feature-fields" style="margin-top:-24px; margin-bottom:-24px;"><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody>' +
              style(key) +
              '<th class="esri-feature-fields__field-header"> ' +
              value[2] +
              '</th><td class="esri-feature-fields__field-data"> ' +
              Number.toFixed(2) +
              " %</td></tr></tbody></table></div>"
            );
          },
        });
      }
    }
    //?Product_V of renderering
    async function ProductV(element, objectId) {
      try {
        await query
          .executeQueryJSON(
            "https://192.168.56.56:6443/arcgis/rest/services/DBofMaps/MapServer/30",
            {
              outFields: ["*"],
              where:
                "OBJECTID  = " + element.attributes["Product_VegetarianID"],
            }
          )
          .then((Product) => {
            if (Product) {
              let point = 0;
              let Number =
                (element.attributes["Quantity_Sold"] * 100) /
                element.attributes["Quantity_Total"] /
                100;

              if (Object.keys(averageOfSelling).length) {
                for (let key in averageOfSelling) {
                  if (objectId == key) {
                    averageOfSelling[objectId].push(
                      Array(
                        Product.features[0].attributes[
                          "Product_Vegetarian_Name"
                        ],
                        Number.toFixed(2)
                      )
                    );
                    point++;
                  }
                }
                if (point == 0) {
                  averageOfSelling[objectId] = [
                    [
                      Product.features[0].attributes["Product_Vegetarian_Name"],
                      Number.toFixed(2),
                    ],
                  ];
                }
              } else {
                averageOfSelling[objectId] = [
                  [
                    Product.features[0].attributes["Product_Vegetarian_Name"],
                    Number.toFixed(2),
                  ],
                ];
              }
            }
          });
      } catch (e) {
        console.log(e);
      }
    }

    // renderer the workshopsLayer
    // const Labs_Workshops_Renderer = {
    //   type: "unique-value", // autocasts as new UniqueValueRenderer()
    //   field: "Actual_Power",
    //   defaultSymbol: { type: "simple-marker" }, // autocasts as new SimpleFillSymbol()
    //   visualVariables: [
    //     {
    //       type: "color",
    //       field: "Actual_Power",
    //       normalizationField: "Maximum_Power",
    //       legendOptions: {
    //         title: "% الطاقة الغير مستغلة",
    //       },
    //       stops: [
    //         {
    //           value: 0,
    //           color: "yellow",

    //           label: "=0%",
    //         },
    //         {
    //           value: 0.99,
    //           color: "orange",
    //           label: "<= 99% & >0%",
    //         },
    //         {
    //           value: 1,
    //           color: "red",
    //           label: "=100%",
    //         },
    //       ],
    //     },
    //     {
    //       type: "size",
    //       field: "Actual_Power",
    //       normalizationField: "Maximum_Power",
    //       stops: [
    //         {
    //           value: 0,
    //           size: 12,
    //           label: "=0%",
    //         },
    //         {
    //           value: 0.99,
    //           size: 9,
    //           label: "<= 99% & >0%",
    //         },
    //         {
    //           value: 1,
    //           size: 7,
    //           label: "=100%",
    //         },
    //       ],
    //     },
    //   ],
    // };
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
      url: "https://192.168.56.56:6443/arcgis/rest/services/DBofMaps/MapServer/9",
      id: "Governments",
      visible: true,
      outFields: ["Government_Name_Arabic", "GovernmentID"],
      popupTemplate: {
        title: "محافظة {Government_Name_Arabic} ",
      },
    });
    var DirectorateLayer = new FeatureLayer({
      url: "https://192.168.56.56:6443/arcgis/rest/services/DBofMaps/MapServer/10",
      id: "Directorates",
      visible: true,
      outFields: ["Directorate_Name_Arabic", "DirectorateID"],
      popupTemplate: {
        title: " مديرية {Directorate_Name_Arabic}",
      },
    });
    var PointsSalesLayer = new FeatureLayer({
      url: "https://192.168.56.56:6443/arcgis/rest/services/DBofMaps/MapServer/6",
      id: "Points_Sales",
      visible: true,
      outFields: ["*"],
      // renderer: Labs_Workshops_Renderer,
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
    map.add(PointsSalesLayer); // adds the layer to the map
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
      if (event.layer.id === "Points_Sales") {
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

    const home = document.getElementById("home");
    const list = document.getElementById("list");

    // Add widgets to the view
    view.ui.add(legendExpand, "bottom-right");
    view.ui.add(home, "top-right");
    view.ui.add(list, "top-right");
    /*****************************************************************
     *! the point queries
     *****************************************************************/

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
          return PointsSalesLayer.queryRelatedFeatures({
            outFields: ["*"],
            relationshipId: PointsSalesLayer.relationships[2].id,
            objectIds: objectId,
          })
            .then((results) => {
              if (results[objectId].features.length) {
                phones = [];
                results[objectId].features.forEach((element) => {
                  phones.push(element.attributes["Phone"]);
                });
              } else {
                console.log("Couldn't find any phones in the collection");
              }
            })
            .then(() => {
              // Directorate
              return PointsSalesLayer.queryRelatedFeatures({
                outFields: ["*"],
                relationshipId: PointsSalesLayer.relationships[3].id,
                objectIds: objectId,
              }).then((results) => {
                if (results[objectId].features.length) {
                  Directorate =
                    results[objectId].features[0].attributes[
                      "Directorate_Name_Arabic"
                    ];
                  DirectorateID =
                    results[objectId].features[0].attributes["OBJECTID_1"];
                } else {
                  console.log("Couldn't find directorate.");
                }
              });
            })
            .then(() => {
              // government
              return DirectorateLayer.queryRelatedFeatures({
                outFields: ["*"],
                relationshipId: DirectorateLayer.relationships[9].id,
                objectIds: DirectorateID,
              }).then((results) => {
                if (results[DirectorateID].features.length) {
                  results[DirectorateID].features[0].attributes[
                    "Government_Name_Arabic"
                  ];
                  government =
                    results[DirectorateID].features[0].attributes[
                      "Government_Name_Arabic"
                    ];
                }
              });
            })
            .then(() => {
              async function popupTemplate() {
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
                  ],
                };
                PointsSalesLayer.popupTemplate.content.push({
                  // Pass in the fields to display
                  type: "custom",
                  creator: function () {
                    return (
                      '<div class="esri-feature-fields" style="margin-top:-24px; "><div class="esri-feature-element-info"></div><table class="esri-widget__table" summary="قائمة البيانات الجدولية والقيم"><tbody>متوسط البيع من كل منتج</tbody></table></div>' +
                      "</td></tr></tbody></table></div>"
                    );
                  },
                });
                // console.log(objectId);
                await displayProduct_Manufacturer(objectId, displayProductM);

                await displayProduct_Vegetarian(objectId, displayProductV);
              }
              popupTemplate();
            });
        });
    });

    /**
     *!  ********************************************************************************************************************************
     *! end the map design
     *!  ********************************************************************************************************************************
     **/
  });
}
