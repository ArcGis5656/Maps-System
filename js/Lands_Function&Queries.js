function modelProduct() {
  require([
    "esri/rest/query",
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/widgets/Legend",
    "esri/widgets/Expand",
    "esri/Graphic",
    "esri/layers/GraphicsLayer",
  ], function (
    query,
    Map,
    MapView,
    FeatureLayer,
    Legend,
    Expand,
    Graphic,
    GraphicsLayer
  ) {
    /**
     *!  ********************************************************************************************************************************
     *! start the map filter
     *!  ********************************************************************************************************************************
     **/
    //variables
    let Directorates = new Object(),
      Products = new Object(),
      Lands = new Object(),
      Products_lands = [],
      Directorates_Lands = [],
      Goverment_id,
      point;

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
            returnGeometry: true,
          }
        )
        .then(function (result) {
          //first is null for the zoom
          // SelectGov.empty();
          var optionSelectGov = document.createElement("option");
          optionSelectGov.dataset.value = "default";
          optionSelectGov.text = "";
          optionSelectGov.selected = true;
          selectedGov.appendChild(optionSelectGov);
          // the rest
          result.features.forEach((element) => {
            var optionSelectGov = document.createElement("option");
            optionSelectGov.dataset.value = JSON.stringify(element);
            optionSelectGov.text = element.attributes.Government_Name_Arabic;
            selectedGov.appendChild(optionSelectGov);
          });
        });
    }

    //? directorates
    async function displayDirectorates(DirectorateObject) {
      Directorates = new Object();

      await query
        .executeQueryJSON(
          "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/11",
          {
            outFields: ["DrectorateID"],
            where: "1=1",
          }
        )
        .then((results) => {
          Directorates_Lands = [];
          results.features.forEach((element) => {
            Directorates_Lands.push(element);
          });
        });

      for (let i = 0; i < DirectorateObject.length; i++) {
        for (let j = 0; j < Directorates_Lands.length; j++) {
          if (
            DirectorateObject[i].attributes.DirectorateID ===
            Directorates_Lands[j].attributes.DrectorateID
          ) {
            if (Object.keys(Directorates).length) {
              point = 0;
              for (const key in Directorates) {
                if (DirectorateObject[i].attributes.DrectorateID == key) {
                  point++;
                }
              }
              if (point == 0) {
                Directorates[DirectorateObject[i].attributes.DirectorateID] =
                  DirectorateObject[i];
              }
            } else {
              Directorates[DirectorateObject[i].attributes.DirectorateID] =
                DirectorateObject[i];
            }
          }
        }
      }
      //first is null for the zoom
      // selectedDir.empty();
      let optionSelectDir = document.createElement("option");
      optionSelectDir.dataset.value = "default";
      optionSelectDir.text = "";
      optionSelectDir.selected = true;
      selectedDir.appendChild(optionSelectDir);
      // the rest
      for (let element in Directorates) {
        element = Directorates[element];
        let optionSelectDir = document.createElement("option");
        optionSelectDir.dataset.value = JSON.stringify(element);
        optionSelectDir.text = element.attributes.Directorate_Name_Arabic;
        selectedDir.appendChild(optionSelectDir);
      }
    }

    //? Lands types
    async function displayLands(LandObject) {
      TypeLand = new Object();
      await query
        .executeQueryJSON(
          "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/11",
          {
            outFields: ["*"],
            where: "1=1",
            returnGeometry: true,
          }
        )
        .then(function (result) {
          result.features.forEach((element) => {
            Lands[element.attributes.Type_Land] = element.attributes.Type_Land;
          });
        });
      for (let i = 0; i < LandObject.length; i++) {
        for (let j = 0; j < Lands.length; j++) {
          if (LandObject[i].attributes.Type_Land === Lands[j]) {
            if (Object.keys(TypeLand).length) {
              for (let z = 0; z < Object.keys(TypeLand).length; z++) {
                if (Lands[j] !== TypeLand[z]) {
                  TypeLand[LandObject[i].attributes.Type_Land] =
                    LandObject[i].attributes.Type_Land;
                } else {
                  // console.log("found it in directorates");
                }
              }
            } else {
              TypeLand[LandObject[i].attributes.Type_Land] =
                LandObject[i].attributes.Type_Land;
            }
          }
        }
      }
      // console.log(Lands);
      //first is null for the zoom
      // selectedLand.empty();
      let optionSelectLand = document.createElement("option");
      optionSelectLand.value = "default";
      optionSelectLand.text = "";
      optionSelectLand.selected = true;
      selectedLand.appendChild(optionSelectLand);
      // the rest
      for (let key in Lands) {
        switch (Lands[key]) {
          case 0:
            Lands[key] = "صالحة للزراعة ومستزرعة";
            break;
          case 1:
            Lands[key] = "صالحة للزراعة وغير مستزرعة";
            break;
          case 2:
            Lands[key] = "غير صالحة للزراعة";
            break;
        }
        let optionSelectLand = document.createElement("option");
        optionSelectLand.value = key;
        optionSelectLand.text = Lands[key];
        selectedLand.appendChild(optionSelectLand);
      }
    }

    //? products
    async function displayProducts(ProductObject) {
      Products = new Object();
      await query
        .executeQueryJSON(
          "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/30",
          {
            outFields: ["Product_VegetarianID", "Product_Vegetarian_Name"],
            where: "1=1",
          }
        )
        .then(function (result) {
          result.features.forEach((element) => {
            Products_lands[element.attributes.Product_VegetarianID] =
              element.attributes.Product_Vegetarian_Name;
          });
        });

      for (let i = 0; i < ProductObject.length; i++) {
        for (const key in Products_lands) {
          const value = Products_lands[key];
          if (ProductObject[i] == key) {
            Products[key] = value;
          }
        }
      }

      //first is null for the zoom
      // selectedDir.empty();
      var optionSelectProduct = document.createElement("option");
      optionSelectProduct.value = "default";
      optionSelectProduct.text = "";
      optionSelectProduct.selected = true;
      selectedProduct.appendChild(optionSelectProduct);
      // the rest
      for (let key in Products) {
        var optionSelectProduct = document.createElement("option");
        optionSelectProduct.value = key;
        optionSelectProduct.text = Products[key];
        selectedProduct.appendChild(optionSelectProduct);
      }
    }

    //Highlight the selected polygon
    const highlightSelection = (feature, flag) => {
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
        if (flag != 0) {
          view.graphics.add(polygonGraphic);
        }
        return polygonGraphic;
      } else view.goTo(this.mapExtent);
    };
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
    let h5Content = document.createTextNode("تحديد خريطة الإنتاج الزراعي ");
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
      var length = selectedLand.options.length;
      for (i = length - 1; i >= 0; i--) {
        selectedLand.options[i] = null;
      }
      var length = selectedDir.options.length;
      for (i = length - 1; i >= 0; i--) {
        selectedDir.options[i] = null;
      }

      Goverment_id = JSON.parse(
        selectedGov.options[selectedGov.selectedIndex].dataset.value
      ).attributes["GovernmentID"];
      if (event) {
        query
          .executeQueryJSON(
            "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/10",
            {
              // autocasts as new Query()
              outFields: ["*"],
              where: "GovernmentID =" + Goverment_id,
              returnGeometry: true,
            }
          )
          .then(function (results) {
            displayDirectorates(results.features);
          });
      }
    });
    //ending of building label Dirctorate with list

    //begining of building label Land type with list
    let labelTypeLand = document.createElement("label");
    labelTypeLand.style.color = "black";
    labelTypeLand.style.float = "right";
    labelTypeLandContent = document.createTextNode("نوع الأرض");
    let selectedLand = document.createElement("select");
    selectedLand.setAttribute("id", "type");
    selectedLand.style.direction = "rtl";
    selectedLand.classList.add("form-control");
    selectedDir.addEventListener("change", function (e) {
      var length = selectedLand.options.length;
      for (i = length - 1; i >= 0; i--) {
        selectedLand.options[i] = null;
      }

      Drectorate_id = JSON.parse(
        selectedDir.options[selectedDir.selectedIndex].dataset.value
      ).attributes.OBJECTID_1;
      if (e) {
        query
          .executeQueryJSON(
            "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/11",
            {
              // autocasts as new Query()
              outFields: ["*"],
              where: "DrectorateID =" + Drectorate_id,
            }
          )
          .then(function (results) {
            displayLands(results.features);
          });
      }
    });
    //ending of building label Land type with list

    //begining of building label Product  with list
    let labelProduct = document.createElement("label");
    labelProduct.hidden = true;
    labelProduct.style.color = "black";
    labelProduct.style.float = "right";
    let labelProductContent = document.createTextNode("المنتج");
    let selectedProduct = document.createElement("select");
    selectedProduct.setAttribute("id", "product");
    let divProduct = document.createElement("div");
    divProduct.appendChild(labelProduct);
    divProduct.appendChild(selectedProduct);
    selectedProduct.hidden = true;
    selectedProduct.style.direction = "rtl";
    selectedProduct.classList.add("form-control");
    selectedLand.addEventListener("change", async function (e) {
      type = selectedLand.options[selectedLand.selectedIndex].value;
      if (type == 0) {
        labelProduct.hidden = false;
        selectedProduct.hidden = false;
        var length = selectedProduct.options.length;
        for (i = length - 1; i >= 0; i--) {
          selectedProduct.options[i] = null;
        }
        Type_Land = selectedLand.options[selectedLand.selectedIndex].value;
        if (e) {
          productofselected = [];
          x = await query
            .executeQueryJSON(
              "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/11",
              {
                outFields: ["LandID"],
                where: "Type_Land  =" + Type_Land,
              }
            )
            .then(function (results) {
              results.features.forEach(async function (feature) {
                x = await query
                  .executeQueryJSON(
                    "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/33",
                    {
                      outFields: ["Product_VegetarianID"],
                      where: "LandID  =" + feature.attributes.LandID,
                    }
                  )
                  .then(function (results) {
                    results.features.forEach(function (feature) {
                      if (productofselected.length) {
                        point = 0;
                        for (
                          let index = 0;
                          index < productofselected.length;
                          index++
                        ) {
                          const element = productofselected[index];
                          if (
                            feature.attributes.Product_VegetarianID == element
                          ) {
                            point++;
                          }
                        }
                        if (point == 0) {
                          productofselected.push(
                            feature.attributes.Product_VegetarianID
                          );
                        }
                      } else {
                        productofselected.push(
                          feature.attributes.Product_VegetarianID
                        );
                      }
                    });
                  });
              });
            });
          displayProducts(productofselected);
        }
      }
    });
    //ending of building label Product  with list

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
      view.graphics.removeAll();
      var select1 = document.getElementById("Goverment");
      var Goverment = select1.options[select1.selectedIndex].dataset.value;
      if (Goverment != "default") {
        var select2 = document.getElementById("Dirctorate");
        var Dirctorate = select2.options[select2.selectedIndex].dataset.value;
        if (Dirctorate != "default") {
          var select3 = document.getElementById("type");
          var type = select3.options[select3.selectedIndex].value;
          if (type != "default") {
            if (type == 0) {
              let select4 = document.getElementById("product");
              var product = select4.options[select4.selectedIndex].value;
              if (product != "default") {
                // console.log("Product: " + product);
                query
                  .executeQueryJSON(
                    "https://192.168.56.56:6443/arcgis/rest/services/DBofMaps/MapServer/33",
                    {
                      outFields: ["*"],
                      where: "Product_VegetarianID = " + product,
                    }
                  )
                  .then((lands) => {
                    // console.log(lands);
                    lands.features.forEach((feature) => {
                      landID = feature.attributes.LandID;
                      // console.log(landID);  
                      query
                        .executeQueryJSON(
                          "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/11",
                          {
                            outFields: ["LandID"],
                            where: "OBJECTID =" + landID,
                            returnGeometry: true,
                          }
                        )
                        .then(function (results) {
                          results.features.forEach(function (feature) {
                            highlightSelection(feature);
                          });
                        });
                    });
                  });
              } else {
                query
                  .executeQueryJSON(
                    "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/11",
                    {
                      outFields: ["LandID"],
                      where:
                        "Type_Land  =" +
                        type +
                        "and DrectorateID =" +
                        JSON.parse(Dirctorate).attributes["OBJECTID_1"],
                      returnGeometry: true,
                    }
                  )
                  .then(function (results) {
                    results.features.forEach(function (feature) {
                      highlightSelection(feature);
                    });
                  });
              }
            } else {
              query
                .executeQueryJSON(
                  "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/11",
                  {
                    outFields: ["LandID"],
                    where:
                      "Type_Land  =" +
                      type +
                      "and DrectorateID =" +
                      JSON.parse(Dirctorate).attributes["OBJECTID_1"],
                    returnGeometry: true,
                  }
                )
                .then(function (results) {
                  results.features.forEach(function (feature) {
                    highlightSelection(feature);
                  });
                });
            }
            view.goTo(
              highlightSelection(JSON.parse(Dirctorate), 0).geometry.extent
            );
          } else {
            view.goTo(
              highlightSelection(JSON.parse(Dirctorate)).geometry.extent
            );
          }
        } else {
          view.goTo(highlightSelection(JSON.parse(Goverment)).geometry.extent);
        }
      } else {
        console.log("No government selected");
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

    // adding the content of labelTypeLand
    labelTypeLand.appendChild(labelTypeLandContent);

    // adding labelTypeLand  and selectLand to the card
    contener.appendChild(labelTypeLand);
    contener.appendChild(selectedLand);

    // adding the content of labelProduct
    labelProduct.appendChild(labelProductContent);

    // adding labelProduct and selectProduct to the card
    contener.appendChild(labelProduct);
    contener.appendChild(selectedProduct);
    contener.appendChild(divProduct);

    //adding the content divButton to the card
    contener.appendChild(divBitton);

    /**
     *!  ********************************************************************************************************************************
     *! start the map filter
     *!  ********************************************************************************************************************************
     **/
    /**
     *!  ********************************************************************************************************************************
     *! start the map design
     *!  ********************************************************************************************************************************
     **/
    //variables
    ///////////////////////////////////////////////////////////////////////////////////
    let government;

    // renderer the LnadsLayer
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
    var landsLayer = new FeatureLayer({
      url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/11",
      id: "Lands",
      visible: true,
      renderer: LandsRenderer,
      // labelingInfo: [Lable("$feature.LandID")],
      outFields: ["*"],
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
    // view.goTo(landsLayer.fullExtent).catch((errorLand) => {
    //   console.error(errorLand);
    // });
    view.on("layerview-create", (event) => {
      // if (event.layer.id === "Yemen") {
      //   // Explore the properties of the population layer's layer view here
      //   // console.log("LayerView for Yemen created!", event.layerView);
      // }
      // if (event.layer.id === "Governments") {
      //   // console.log("LayerView for Governments created!", event.layerView);
      // }
      // if (event.layer.id === "Directorates") {
      //   // console.log("LayerView for Directorate created!", event.layerView);
      // }
      // if (event.layer.id === "Lands") {
      //   // goTo(landsLayer)
      //   // console.log("LayerView for WorkshopsLayer created!", event.layerView);
      // }
      view.goTo(landsLayer.fullExtent).catch((errorLand) => {
        console.error(errorLand);
      });
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
    // view.onload(() => {
    // });

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
                              console.log(
                                element.attributes["ClassVegetarian"]
                              );
                              Class.push(element.attributes["ClassVegetarian"]);

                              //Pandemic of product
                              query
                                .executeQueryJSON(
                                  "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/31",
                                  {
                                    outFields: ["*"],
                                    where:
                                      "OBJECTID  = " +
                                      element.attributes[
                                        "Product_VegetarianID"
                                      ],
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
  });
}
