function modelAnimal() {
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
    let Governments = new Object(),
      Directorates = new Object(),
      Animals = new Object(),
      Directorates_Associations = [],
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

    //? directorates
    async function displayDirectorates(DirectorateObject) {
      Directorates = new Object();

      await query
        .executeQueryJSON(
          "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/7",
          {
            outFields: ["DirectorateID"],
            where: "1=1",
          }
        )
        .then((results) => {
          results.features.forEach((element) => {
            Directorates_Associations.push(element.attributes.DirectorateID);
          });
        });
      for (let i = 0; i < DirectorateObject.length; i++) {
        for (let j = 0; j < Directorates_Associations.length; j++) {
          if (
            DirectorateObject[i].attributes.DirectorateID ===
            Directorates_Associations[j]
          ) {
            if (Object.keys(Directorates).length) {
              for (let z = 0; z < Object.keys(Directorates).length; z++) {
                if (Directorates_Associations[j] !== Directorates[z]) {
                  Directorates[DirectorateObject[i].attributes.DirectorateID] =
                    DirectorateObject[i].attributes.Directorate_Name_Arabic;
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

    //? Animal types
    async function displayAnimals() {
      await query
        .executeQueryJSON(
          "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/7",
          {
            outFields: ["*"],
            where: "1=1",
          }
        )
        .then(function (result) {
          result.features.forEach((element) => {
            Animals[element.attributes.Type] = element.attributes.Type;
          });
        });
      //first is null for the zoom
      // selectedAnimal.empty();
      let optionSelectAnimal = document.createElement("option");
      optionSelectAnimal.value = "default";
      optionSelectAnimal.text = "";
      selectedAnimal.appendChild(optionSelectAnimal);
      // the rest
      for (let key in Animals) {
        switch (Animals[key]) {
          case 0:
            Animals[key] = "الاغنام";
            break;
          case 1:
            Animals[key] = "الماعز";
            break;
          case 2:
            Animals[key] = "الابقار";
            break;
          case 3:
            Animals[key] = "الجمال";
            break;
        }

        let optionSelectAnimal = document.createElement("option");
        optionSelectAnimal.value = key;
        optionSelectAnimal.text = Animals[key];
        selectedAnimal.appendChild(optionSelectAnimal);
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
    let h5Content = document.createTextNode("تحديد خريطة الإنتاج الحيواني ");
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
            "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/10",
            {
              // autocasts as new Query()
              outFields: ["*"],
              where: "GovernmentID =" + Goverment_id,
            }
          )
          .then(function (results) {
            displayDirectorates(results.features);
          });
      }
    });
    //ending of building label Dirctorate with list

    //begining of building label Animal with list
    let labelAnimal = document.createElement("label");
    labelAnimal.style.color = "black";
    labelAnimal.style.float = "right";
    labelAnimalContent = document.createTextNode("الحيوان");
    let selectedAnimal = document.createElement("select");
    selectedAnimal.setAttribute("id", "type");
    selectedAnimal.style.direction = "rtl";
    selectedAnimal.classList.add("form-control");
    displayAnimals();
    //ending of building label Animal with list

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
      var Goverment = select1.options[select1.selectedIndex].value;
      var select2 = document.getElementById("Dirctorate");
      var Dirctorate = select2.options[select2.selectedIndex].value;
      var select3 = document.getElementById("type");
      var type = select3.options[select3.selectedIndex].value;
      if (Dirctorate == "default") {
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
            if (type != "default") {
              query
                .executeQueryJSON(
                  "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/10",
                  {
                    outFields: ["DirectorateID"],
                    where:
                      "GovernmentID =" +
                      result.features[0].attributes.GovernmentID,
                  }
                )
                .then((results) => {
                  results.features.forEach((element) => {
                    Dirctorate = element.attributes.DirectorateID;
                    query
                      .executeQueryJSON(
                        "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/7",
                        {
                          outFields: ["*"],
                          where:
                            "Type =" +
                            type +
                            " and DirectorateID =" +
                            Dirctorate,
                          returnGeometry: true,
                        }
                      )
                      .then(
                        function (points) {
                          if (points.features.length) {
                            view.goTo(result.features[0].geometry.extent);
                            points.features.forEach(function (feature) {
                              highlightSelectionpoint(feature);
                            });
                          } else {
                            highlightSelection(result.features[0]);
                            console.log("No features selected");
                          }
                        },
                        () => {
                          highlightSelection(result.features[0]);
                          console.log("No features selected");
                        }
                      );
                  });
                });
            } else highlightSelection(result.features[0]);
          });
      } else {
        query
          .executeQueryJSON(
            "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/10",
            {
              outFields: ["Directorate_Name_Arabic", "DirectorateID"],
              where: "DirectorateID  =" + Dirctorate,
              returnGeometry: true,
            }
          )
          .then(function (result) {
            if (type != "default") {
              query
                .executeQueryJSON(
                  "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/7",
                  {
                    outFields: ["*"],
                    where:
                      "Type =" + type + " and DirectorateID =" + Dirctorate,
                    returnGeometry: true,
                  }
                )
                .then(
                  function (points) {
                    view.goTo(result.features[0].geometry.extent);
                    points.features.forEach(function (feature) {
                      highlightSelectionpoint(feature);
                    });
                  },
                  () => {
                    highlightSelection(result.features[0]);
                    console.log("No features selected");
                  }
                );
            } else highlightSelection(result.features[0]);
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
    // adding the content of labelAnimal
    labelAnimal.appendChild(labelAnimalContent);

    // adding labelAnimal  and selectAnimal to the card
    contener.appendChild(labelAnimal);
    contener.appendChild(selectedAnimal);

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

    // renderer the workshopsLayer
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
    //Highlight the selected polygon
    const highlightSelection = (feature) => {
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
    //Highlight the selected ponit
    const highlightSelectionpoint = (feature) => {
      var point = {
        type: "point",
        longitude: feature.geometry.longitude,
        latitude: feature.geometry.latitude,
      };
      var simpleMarkerSymbol = {
        type: "simple-marker",
        color: [152, 239, 249, 0.7], // orange, opacity 80%
        outline: {
          color: [11, 255, 255],
          width: 2,
        },
      };

      const pointGraphic = new Graphic({
        geometry: point,
        symbol: simpleMarkerSymbol,
      });
      console.log(pointGraphic);
      view.graphics.add(pointGraphic);
    };
    var GovernmentLayer = new FeatureLayer({
      url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/9",
      id: "Governments",
      visible: false,
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
    var AnimalsLayer = new FeatureLayer({
      url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/7",
      id: "Animals",
      visible: true,
      renderer: AnimalsRenderer,
      outFields: ["*"],
      // labelingInfo: [Lable("$feature.AnimalID")],
    });
    /*****************************************************************
     *! Layers may be added to the map in the map's constructor
     *****************************************************************/
    const map = new Map();
    // const graphicsLayer = new GraphicsLayer();
    // map.add(graphicsLayer);
    /*****************************************************************
     *! Or they may be added to the map using map.add()
     *****************************************************************/
    map.add(GovernmentLayer); // adds the layer to the map
    map.add(DirectorateLayer); // adds the layer to the map
    map.add(AnimalsLayer); // adds the layer to the map
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
      if (event.layer.id === "Animals") {
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
      view.graphics.removeAll();
      // only include graphics from hurricanesLayer in the hitTest
      const opts = {
        include: AnimalsLayer,
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
          Pandemic = "لايوجد";
          //Pandemic
          return AnimalsLayer.queryRelatedFeatures({
            outFields: ["*"],
            relationshipId: AnimalsLayer.relationships[1].id,
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
              return AnimalsLayer.queryRelatedFeatures({
                outFields: ["*"],
                relationshipId: AnimalsLayer.relationships[2].id,
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
                  // console.log(DirectorateLayer);
                  return DirectorateLayer.queryRelatedFeatures({
                    outFields: ["*"],
                    relationshipId: DirectorateLayer.relationships[9].id,
                    objectIds: oid,
                  }).then((results) => {
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
          AnimalsLayer.popupTemplate = {
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
  });
}
