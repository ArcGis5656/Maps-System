// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../chunks/_rollupPluginBabelHelpers"],function(f,h){let k=function(){function e(){this._outer=new Map}var d=e.prototype;d.clear=function(){this._outer.clear()};d.get=function(b,c){var a;return null==(a=this._outer.get(b))?void 0:a.get(c)};d.set=function(b,c,a){const g=this._outer.get(b);g?g.set(c,a):this._outer.set(b,new Map([[c,a]]))};d.delete=function(b,c){const a=this._outer.get(b);a&&(a.delete(c),0===a.size&&this._outer.delete(b))};d.forEach=function(b){this._outer.forEach((c,
a)=>b(c,a))};h._createClass(e,[{key:"empty",get:function(){return 0===this._outer.size}}]);return e}();f.NestedMap=k;Object.defineProperty(f,"__esModule",{value:!0})});