import {
  administrativeCenterRenderer,
  LandsRenderer,
  AnimalsRenderer,
  serviceCenterRenderer,
  Labs_Workshops_Renderer,
} from "/js/Renderer.js";
import {
  Lable,
  Associationscontent,
  Unionscontent,
  Landscontent,
  Animalscontent,
  Repositoriescontent,
  Fridgescontent,
  Labscontent,
  Workshopscontent,
  PointsSalescontent,
} from "/js/content.js";

require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/widgets/Legend",
  "esri/widgets/Expand",
  "esri/config",
], function (Map, MapView, FeatureLayer, Legend, Expand, esriConfig) {
  // esriConfig.fontsUrl = "/fonts";
  /*****************************************************************
   *! Set a basic symbol on a layer to visualize all features the same way.
   *****************************************************************/

  /*****************************************************************
   *! Create FeatureLayers instances.
   *****************************************************************/
  //data needs to be public to access them without authorization
  var YemenLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/8",
    id: "Yemen",
    opacity: 0.9,
    popupTemplate: {
      title: "اليمن", // Show attribute value
    },
  });
  var GovernmentLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/9",
    id: "Governments",
    visible: false,
    labelingInfo: [Lable("$feature.Government_Name_Arabic")],
    outFields: ["Government_Name_Arabic", "GovernmentID"],
    popupTemplate: {
      title: "{GovernmentID}", // Show attribute value
      content: "اسم المحافظة {Government_Name_Arabic}", // Display text in pop-up
    },
  });
  var DirectorateLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/10",
    id: "Directorates",
    visible: false,
    labelingInfo: [Lable("$feature.Directorate_Name_Arabic")],
    outFields: ["Directorate_Name_Arabic", "DirectorateID"],
    popupTemplate: {
      title: "{DirectorateID}", // Show attribute value
      content: "اسم المديرية {Directorate_Name_Arabic}", // Display text in pop-up
    },
  });
  var AssociationLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/1",
    /*****************************************************************
     *! Set properties on a feature layer
     * Additional properties can be set on a feature layer to change how it draws and behaves.
     * Set the definitionExpression to only draw some feature by the condiction,
     * a renderer to draw the features, and
     * a popupTemplate to show the fields in the pop-up.
     *****************************************************************/
    /*****************************************************************
     *  definition expression
     * *** ADD ***
     * is useful when the dataset is large and you
     *  don't want to bring all features to the client for analysis
     *****************************************************************/
    // definitionExpression: "AssociationID = 1",

    // This property can be used to uniquely identify the layer
    id: "Associations",
    visible: false,
    renderer: administrativeCenterRenderer,
    labelingInfo: [Lable("$feature.Association_Name")],

    // popup
    // *********************************************************
    //*** ADD ***//

    outFields: ["Association_Name"],

    //*** ADD ***//
    popupTemplate: {
      // Enable a popup
      title: "{Association_Name}",
      content: Associationscontent,
    },
  });
  var UnionLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/0",
    id: "Unions",
    visible: false,
    renderer: administrativeCenterRenderer,
    labelingInfo: [Lable("$feature.Union_Name")],
    outFields: ["Union_Name"],
    popupTemplate: {
      title: "{Union_Name}",
      content: Unionscontent,
    },
  });
  var RepositoryLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/2",
    id: "Repository",
    visible: false,
    renderer: serviceCenterRenderer,
    labelingInfo: [Lable("$feature.Repositories_Name")],

    outFields: ["Repositories_Name"],
    popupTemplate: {
      title: "{Repositories_Name}",
      expressionInfos: [
        {
          name: "Vacant Energy",
          title: "الطاقة الشاغرة",
          expression: "$feature.Capacity - $feature.Energy_Used",
        },
      ],
      content: Repositoriescontent,
    },
  });
  var FridgeLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/3",
    id: "Fridges",
    visible: false,
    renderer: serviceCenterRenderer,
    labelingInfo: [Lable("$feature.Fridge_Name")],

    outFields: ["Fridge_Name"],
    popupTemplate: {
      title: "{Fridge_Name}",
      expressionInfos: [
        {
          name: "Vacant Energy",
          title: "الطاقة الشاغرة",
          expression: "$feature.Capacity - $feature.Energy_Used",
        },
      ],
      content: Fridgescontent,
    },
  });
  var LabLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/4",
    id: "Labs",
    visible: false,
    renderer: Labs_Workshops_Renderer,
    labelingInfo: [Lable("$feature.Lab_Name")],

    outFields: ["Lab_Name"],
    popupTemplate: {
      title: "{Lab_Name}",
      expressionInfos: [
        {
          name: "Unused Energy",
          title: "الطاقة الغير مستغلة",
          expression: "$feature.Maximum_Power - $feature.Actual_Power",
        },
      ],
      content: Labscontent,
    },
  });
  var WorkshopsLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/5",
    id: "Workshops",
    visible: false,
    renderer: Labs_Workshops_Renderer,
    labelingInfo: [Lable("$feature.Workshop_Name")],

    outFields: ["Workshop_Name"],
    popupTemplate: {
      title: "{Workshop_Name}",
      expressionInfos: [
        {
          name: "Unused Energy",
          title: "الطاقة الغير مستغلة",
          expression: "$feature.Maximum_Power - $feature.Actual_Power",
        },
      ],
      content: Workshopscontent,
    },
  });
  var PointsSalesLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/6",
    id: "PointsSales",
    visible: false,
    // renderer: PointsSalesRenderer,
    labelingInfo: [Lable("$feature.Ponit_Sale_Name")],

    outFields: ["Ponit_Sale_Name"],
    popupTemplate: {
      title: "{Ponit_Sale_Name}",
      expressionInfos: [
        {
          name: "average sales quantity",
          title: "متوسط كميةالبيع",
          // expression:$feature.relationship.relationship.field
          // "($feature.relationship.field/$feature.relationship.field)+($feature.relationship.field/$feature.relationship.field)",
        },
      ],
      content: PointsSalescontent,
    },
  });
  var AnimalsLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/7",
    id: "Animals",
    visible: false,
    renderer: AnimalsRenderer,
    labelingInfo: [Lable("$feature.AnimalID")],
    outFields: ["AnimalID"],
    popupTemplate: {
      title: "{AnimalID}",
      content: Animalscontent,
    },
  });
  var LandsLayer = new FeatureLayer({
    url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/11",
    id: "Lands",
    visible: false,
    renderer: LandsRenderer,
    labelingInfo: [Lable("$feature.LandID")],
    outFields: ["LandID"],
    popupTemplate: {
      title: "{LandID}",
      content: Landscontent,
    },
  });

  /*****************************************************************
   *! Layers may be added to the map in the map's constructor
   *****************************************************************/
  const map = new Map({
    layers: [YemenLayer],
  });

  /*****************************************************************
   *! Or they may be added to the map using map.add()
   *****************************************************************/
  map.add(GovernmentLayer); // adds the layer to the map
  map.add(DirectorateLayer); // adds the layer to the map
  map.add(AssociationLayer); // adds the layer to the map
  map.add(UnionLayer); // adds the layer to the map
  map.add(RepositoryLayer); // adds the layer to the map
  map.add(FridgeLayer); // adds the layer to the map
  map.add(LabLayer); // adds the layer to the map
  map.add(WorkshopsLayer); // adds the layer to the map
  map.add(PointsSalesLayer); // adds the layer to the map
  map.add(AnimalsLayer); // adds the layer to the map
  map.add(LandsLayer); // adds the layer to the map

  /*****************************************************************/

  var view = new MapView({
    container: "viewDiv", // References the ID of a DOM element
    map: map, // References a Map instance
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

  /*****************************************************************
   * The map handles the layers' data while the view and layer views
   * take care of renderering the layers
   *****************************************************************/
  view.on("layerview-create", (event) => {
    if (event.layer.id === "Yemen") {
      // Explore the properties of the population layer's layer view here
      console.log("LayerView for Yemen created!", event.layerView);
    }
    if (event.layer.id === "Governments") {
      console.log("LayerView for Governments created!", event.layerView);
    }
    if (event.layer.id === "Associations") {
      console.log("LayerView for Associations created!", event.layerView);
    }
    if (event.layer.id === "Lands") {
      console.log("LayerView for lands created!", event.layerView);
    }
  });

  /*****************************************************************
   * Layers are promises that resolve when loaded, or when all their
   * properties may be accessed. Once the population layer has loaded,
   * the view will animate to it's initial extent.
   *****************************************************************/
  // view.when(() => {
  //   YemenLayer.when(() => {
  //     view.goTo(YemenLayer.fullExtent).catch((YemenError) => {
  //       console.error(YemenError);
  //     });
  //   });
  // });
  // view.when(() => {
  //   GovernmentLayer.when(() => {
  //     view.goTo(GovernmentLayer.fullExtent).catch((errorGovernment) => {
  //       console.error(errorGovernment);
  //     });
  //   });
  // });
  // view.when(() => {
  //   AssociationLayer.when(() => {
  //     view.goTo(AssociationLayer.fullExtent).catch((errorFeature) => {
  //       console.error(errorFeature);
  //     });
  //   });
  // });
  view.when(() => {
    LandsLayer.when(() => {
      view.goTo(YemenLayer.fullExtent).catch((errorLand) => {
        console.error(errorLand);
      });
    });
  });

  /*****************************************************************
   * The visible property on the layer can be used to toggle the
   * layer's visibility in the view. When the visibility is turned off
   * the layer is still part of the map, which means you can access
   * its properties and perform analysis even though it isn't visible.
   *******************************************************************/
  const DirectorateLayerToggle = document.getElementById("DirectoratesLayer");
  const AssociationsLayerToggle = document.getElementById("AssociationsLayer");
  const GovernmentsLayerToggle = document.getElementById("GovernmentsLayer");
  const LandsLayerToggle = document.getElementById("LandsLayer");

  GovernmentsLayerToggle.addEventListener("change", () => {
    GovernmentLayer.visible = GovernmentsLayerToggle.checked;
  });
  DirectorateLayerToggle.addEventListener("change", () => {
    DirectorateLayer.visible = DirectorateLayerToggle.checked;
  });
  AssociationsLayerToggle.addEventListener("change", () => {
    AssociationLayer.visible = AssociationsLayerToggle.checked;
  });
  LandsLayerToggle.addEventListener("change", () => {
    LandsLayer.visible = LandsLayerToggle.checked;
  });

  /*****************************************************************
   * ! Resources
   * https://developers.arcgis.com/javascript/latest/sample-code/intro-layers/
   * https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-labelClass.html
   *******************************************************************/
});
