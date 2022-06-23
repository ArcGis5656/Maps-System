// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../core/maybe"],function(d,e){d.getPrefixedProperties=function(a,b){if(e.isNone(a))return null;const f={},g=new RegExp(`^${b}`,"i");for(const c in a)a.hasOwnProperty(c)&&g.test(c)&&(f[c.substring(b.length)]=a[c]);return f};d.getTimezoneOffset=function(a,b){return e.isNone(a)||e.isNone(b)?null:Math.round((a-b)/6E4)};Object.defineProperty(d,"__esModule",{value:!0})});