require(["esri/rest/query"], function (query) {
  // url to the layer of interest to query
  let queryUrl =
    "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/10";
  let Name_Arabic = "Directorate_Name_Arabic";
  let GovernmentID = 3;
  query
    .executeQueryJSON(queryUrl, {
      // autocasts as new Query()
      where: "GovernmentID = "+GovernmentID,
    })
    .then(
      function (count) { 
        count.features.forEach((element) => {
          console.log(element.attributes[Name_Arabic]);
          });
      },
      function (error) {
        console.log(error); // will print error in console if unsupported layers are used
      }
    );
});
