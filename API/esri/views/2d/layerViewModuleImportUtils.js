// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/Error","../../core/maybe"],function(d,k,n,l){function e(){return Promise.all([new Promise((a,b)=>d(["./webglDeps"],a,b)),new Promise((a,b)=>d(["./mapViewDeps"],a,b))])}const f=a=>Object.freeze({__proto__:null,default:a}),g=()=>e().then(()=>new Promise((a,b)=>d(["./layers/TileLayerView2D"],c=>a(f(c)),b))),h=()=>e().then(()=>new Promise((a,b)=>d(["./layers/FeatureLayerView2D"],c=>a(f(c)),b))),m={"base-dynamic":()=>e().then(()=>new Promise((a,b)=>d(["./layers/BaseDynamicLayerView2D"],
c=>a(f(c)),b))),"base-tile":g,"bing-maps":g,csv:h,"geo-rss":()=>e().then(()=>new Promise((a,b)=>d(["./layers/GeoRSSLayerView2D"],c=>a(f(c)),b))),feature:h,geojson:h,graphics:()=>e().then(()=>new Promise((a,b)=>d(["./layers/GraphicsLayerView2D"],c=>a(f(c)),b))),group:()=>e().then(()=>new Promise((a,b)=>d(["./layers/GroupLayerView2D"],c=>a(f(c)),b))),imagery:()=>e().then(()=>new Promise((a,b)=>d(["./layers/ImageryLayerView2D"],c=>a(f(c)),b))),"imagery-tile":()=>e().then(()=>new Promise((a,b)=>d(["./layers/ImageryTileLayerView2D"],
c=>a(f(c)),b))),kml:()=>e().then(()=>new Promise((a,b)=>d(["./layers/KMLLayerView2D"],c=>a(f(c)),b))),"map-image":()=>e().then(()=>new Promise((a,b)=>d(["./layers/MapImageLayerView2D"],c=>a(f(c)),b))),"map-notes":()=>e().then(()=>new Promise((a,b)=>d(["./layers/MapNotesLayerView2D"],c=>a(f(c)),b))),"ogc-feature":()=>e().then(()=>new Promise((a,b)=>d(["./layers/OGCFeatureLayerView2D"],c=>a(f(c)),b))),"open-street-map":g,route:()=>e().then(()=>new Promise((a,b)=>d(["./layers/RouteLayerView2D"],c=>a(f(c)),
b))),stream:()=>e().then(()=>new Promise((a,b)=>d(["./layers/StreamLayerView2D"],c=>a(f(c)),b))),"subtype-group":()=>e().then(()=>new Promise((a,b)=>d(["./layers/SubtypeGroupLayerView2D"],c=>a(f(c)),b))),tile:g,"vector-tile":()=>e().then(()=>new Promise((a,b)=>d(["./layers/VectorTileLayerView2D"],c=>a(f(c)),b))),wcs:()=>e().then(()=>new Promise((a,b)=>d(["./layers/ImageryTileLayerView2D"],c=>a(f(c)),b))),"web-tile":g,wfs:h,wms:()=>e().then(()=>new Promise((a,b)=>d(["./layers/WMSLayerView2D"],c=>a(f(c)),
b))),wmts:()=>e().then(()=>new Promise((a,b)=>d(["./layers/WMTSLayerView2D"],c=>a(f(c)),b))),analysis:null,"base-elevation":null,"building-scene":null,elevation:null,"integrated-mesh":null,"point-cloud":null,voxel:null,scene:null,unknown:null,unsupported:null};k.layerView2DImporter={hasLayerViewModule:a=>l.isSome(m[a.type]),importLayerView:a=>{var b=m[a.type];if(!l.isSome(b))throw a=a.declaredClass?a.declaredClass.slice(a.declaredClass.lastIndexOf(".")+1):"Unknown",b=a.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),
a=new n(`${b}:view-not-supported`,`${a} is not supported in 2D`),a;return b(a)}};Object.defineProperty(k,"__esModule",{value:!0})});