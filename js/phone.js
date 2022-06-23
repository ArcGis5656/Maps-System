require([
  "esri/rest/query",
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
], function (query, Map, MapView, FeatureLayer) {
  // url to the layer of interest to query
  let queryUrl =
    "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/0";
  let displayAttribute = "UnionID";
  // let phones = "";
  const phones = [];
  query
    .executeQueryJSON(queryUrl, {
      // autocasts as new Query()
      outFields: ["*"],
      where: "1=1",
    })
    .then(
      function (query) {
        // console.log(JSON.stringify(query));
        /*****************************************************************
         *! another way
        // for (let index = 0; index < count.features.length; index++) {
        //   console.log(
          //     eval("count.features[" + index + "].attributes." + queryAttribute)
        //   );
        // }
        *****************************************************************/
        // query.features.forEach((element) => {
        //   console.log(element.attributes[displayAttribute]);
        //   return(element.attributes[displayAttribute]);
        // });
        return query.features[0].attributes[displayAttribute];
        // layer.queryObjectIds(query).then(function(ids){
        //   console.log(ids);  // an array of object IDs
        // });
      },
      function (error) {
        console.log(error); // will print error in console if unsupported layers are used
      }
    )
    .then(function (UnionID) {
      let queryUrl =
        "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/37";
      let displayAttribute = "Phone";
      query
        .executeQueryJSON(queryUrl, {
          // autocasts as new Query()
          where: "UnionID = " + UnionID,
        })
        .then(
          function (count) {
            console.log("The union phones are : \n");
            // for (let index = 0; index < count.features.length; index++) {
            //   phones += count.features[index].attributes[displayAttribute];
            //   if (index < count.features.length - 1) {
            //     phones += ", ";
            //   }
            // }
            count.features.forEach((element) => {
              console.log(element.attributes[displayAttribute]);
              // phones+= element.attributes[displayAttribute]+" , ";
              phones.push(element.attributes[displayAttribute]);
            });
            return phones;
          },
          function (error) {
            console.log(error); // will print error in console if unsupported layers are used
          }
        )
        .then(function (resulte) {
          console.log( resulte);
          function show()
          {
             for (let index = 0; index < resulte.length; index++) {
                  const element ="{ name: 'Phone"+index+"', title: 'التلفون', expression: resulte["+index+"]} ,";
                console.log( element );
                return element;
                
          }
        }
          const layer = new FeatureLayer({
            url: "https://192.168.56.56:6443/arcgis/rest/services/MapsDB/MapServer/0",
            id: "Unions",
            visible: true,
            outFields: ["*"],
            popupTemplate: {
              title: "{Union_Name}",
              expressionInfos: [
                 
                
                  //  show()
                
              
                {
                  name: "Phone1",
                  title: "التلفون",
                  expression: resulte[0],
                }, {
                  name: "Phone2",
                  title: " ",
                  expression: resulte[1],
                },
              ],
              content: [
                {
                  // Pass in the fields to display
                  type: "fields",
                  fieldInfos: [
                    { label: "اسم الجمعية", fieldName: "Union_Name" },
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
                    {
                      label: "التلفون",
                      fieldName: "expression/Phone1", // The field whose values you want to format
                    },
                    {
                      label: "",
                      fieldName: "expression/Phone2", // The field whose values you want to format
                    }
                  ],
                },
              ],
            },
          });
          const map = new Map({
            layers: [layer],
          });
          var view = new MapView({
            container: "viewDiv", // References the ID of a DOM element
            map: map, // References a Map instance
          });
        });
    });
});
