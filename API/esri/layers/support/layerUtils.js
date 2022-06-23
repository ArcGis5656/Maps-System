// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports"],function(f){f.areLabelsVisible=function(a){return!0===a.labelsVisible&&null!=a.labelingInfo&&0<a.labelingInfo.length};f.getLayersForScale=function(a,b){const g=[];if(0<a&&b)for(let c=0;c<b.length;c++)if(!(0<=b[c].parentLayerId&&-1===g.indexOf(b[c].parentLayerId)&&b.some(function(d){return d.id===b[c].parentLayerId}))&&0<=b[c].id){let d=!0;const e=b[c].maxScale,h=b[c].minScale;if(0<e||0<h)0<e&&0<h?d=e<=a&&a<=h:0<e?d=e<=a:0<h&&(d=a<=h);d&&g.push(b[c].id)}return g};f.getTileMaxtrixSetFromActiveLayer=
function(a){if(a.activeLayer){const b=a.activeLayer.tileMatrixSet;if(b)return b;if(a=a.activeLayer.tileMatrixSets)return a}return null};f.isBaseLayer=function(a){return a.parent&&"esri.Basemap"===a.parent.declaredClass&&-1<a.parent.baseLayers.indexOf(a)};f.isReprojectableTiledLayer=function(a){return a&&"imagery-tile"===a.type};f.isTiledLayer=function(a){return a&&"base-tile"===a.type||"tile"===a.type||"elevation"===a.type||"imagery-tile"===a.type||"base-elevation"===a.type||"open-street-map"===a.type||
"wcs"===a.type||"web-tile"===a.type||"wmts"===a.type||"vector-tile"===a.type};f.isVoxelLayer=function(a){return a&&"voxel"===a.type};f.isWMTSLayer=function(a){return a&&"wmts"===a.type};f.serializeLayerDefinitions=function(a){const b=/[:;]/,g=[];let c=!1;if(a&&(a.forEach(function(d,e){g.push([e,d]);!c&&b.test(d)&&(c=!0)}),0<g.length)){if(c){const d={};g.forEach(e=>{d[e[0]]=e[1]});a=JSON.stringify(d)}else{const d=[];g.forEach(e=>{d.push(e[0]+":"+e[1])});a=d.join(";")}return a}return null};f.serializeTimeOptions=
function(a){if(a){var b=[];a.forEach(function(g,c){b.push('"'+c+'":'+JSON.stringify(g))});if(b.length)return"{"+b.join(",")+"}"}};Object.defineProperty(f,"__esModule",{value:!0})});