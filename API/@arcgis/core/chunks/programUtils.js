/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
function e(e){let n="";for(const o in e){const t=e[o];if("boolean"==typeof t)t&&(n+=`#define ${o}\n`);else if("number"==typeof t)n+=`#define ${o} ${t.toFixed()}\n`;else if("object"==typeof t){const e=t.options;let f=0;for(const o in e)n+=`#define ${e[o]} ${(f++).toFixed()}\n`;n+=`#define ${o} ${e[t.value]}\n`}}return n}export{e as g};
