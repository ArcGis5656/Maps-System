function Government_Data(){
require(["esri/rest/query"], function (query) {
  // url to the layer of interest to query
  let queryUrl =
    "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/9";
  let displayAttribute = "Government_Name_Arabic";
  query
    .executeQueryJSON(queryUrl, {
      // autocasts as new Query()
      outFields: ['Government_Name_Arabic', 'GovernmentID'],
      where: "1=1",
    })
    .then(
      function (count) {
        // console.log(JSON.stringify(count));
        /*****************************************************************
         *! another way
        // for (let index = 0; index < count.features.length; index++) {
        //   console.log(
        //     eval("count.features[" + index + "].attributes." + queryAttribute)
        //   );
        // }
        *****************************************************************/
        // count.features.forEach((element) => {
        //   console.log(element.attributes[queryAttribute]);
        // });
        console.log("The government name is : \n"+count.features[0].attributes[displayAttribute]);
       return(count.features[0].attributes["GovernmentID"]);
      },
      function (error) {
        console.log(error); // will print error in console if unsupported layers are used
      }
    ).then(
      function (GovernmentID) {
        let queryUrl =
          "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/10";
        let displayAttribute = "Directorate_Name_Arabic";
         query
          .executeQueryJSON(queryUrl, {
            // autocasts as new Query()
            where: "GovernmentID = "+GovernmentID,
          })
          .then(
            function (count) { console.log("The directions name of it is : \n");
              count.features.forEach((element) => {
                console.log(element.attributes[displayAttribute]);
                });
            },
            function (error) {
              console.log(error); // will print error in console if unsupported layers are used
            }
          );
      }
    )
});
}

export {Government_Data};