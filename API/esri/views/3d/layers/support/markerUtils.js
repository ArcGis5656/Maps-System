// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/maybe","../graphics/sdfPrimitives"],function(a,e,f){function g(b,c){return b.fromData(c,()=>f.createTexture(c,64,32,6.4))}function d(b){return"diamond"===b?"kite":b}a.MARKER_SYMBOL_SIZE=32;a.MARKER_TEXTURE_SIZE=64;a.MARKER_THICKNESS=6.4;a.parseLineMarkerStyle=d;a.prepareMarkerResources=function(b,c){return e.isSome(c)?g(b,d(c.style)):null};Object.defineProperty(a,"__esModule",{value:!0})});