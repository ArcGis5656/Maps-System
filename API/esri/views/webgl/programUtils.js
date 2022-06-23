// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports"],function(e){e.glslifyDefineMap=function(f){let b="";for(const c in f){const a=f[c];if("boolean"===typeof a)a&&(b+=`#define ${c}\n`);else if("number"===typeof a)b+=`#define ${c} ${a.toFixed()}\n`;else if("object"===typeof a){const d=a.options;let g=0;for(const h in d)b+=`#define ${d[h]} ${(g++).toFixed()}\n`;b+=`#define ${c} ${d[a.value]}\n`}}return b};Object.defineProperty(e,"__esModule",{value:!0})});