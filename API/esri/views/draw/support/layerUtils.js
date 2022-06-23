// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/maybe"],function(e,f){e.addUniqueLayer=function(b,c,a){if(c&&b&&b.map){({map:b}=b);var d=b.layers.find(g=>g===c);d||b.add(c,a);void 0!==a&&null!==a&&b.layers.reorder(d,a)}};e.findLayerView=function(b,c){return b.allLayerViews.find(a=>{a=a.layer;return"sublayers"in a&&f.isSome(a.sublayers)&&!!a.sublayers.find(d=>d===c)||a===c})};Object.defineProperty(e,"__esModule",{value:!0})});