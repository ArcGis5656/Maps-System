// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports"],function(k){function m(b){const a=document.createElement("canvas");[a.width,a.height]=b;return a}k.createBlankImage=m;k.resampleImage=function(b,a,d,c){if(d.level===c.level)return a;const f=b.tileInfo.size;var g=b.getTileResolution(d.level),h=b.getTileResolution(c.level),e=b.getLODInfoAt(c.level),l=e.getXForColumn(c.col);c=e.getYForRow(c.row);e=b.getLODInfoAt(d.level);b=e.getXForColumn(d.col);const n=e.getYForRow(d.row);e=(a instanceof HTMLImageElement?a.naturalWidth:a.width)/f[0];
d=(a instanceof HTMLImageElement?a.naturalHeight:a.height)/f[1];l=Math.round((l-b)/g*e);c=Math.round(-(c-n)/g*d);b=Math.round(h/g*f[0]*e);g=Math.round(h/g*f[1]*d);h=m(f);h.getContext("2d").drawImage(a,l,c,b,g,0,0,f[0],f[1]);return h};Object.defineProperty(k,"__esModule",{value:!0})});