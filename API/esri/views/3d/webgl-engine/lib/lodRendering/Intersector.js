// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../IntersectorInterfaces","../intersectorUtils"],function(b,c,d){b.isLodIntersectorResult=function(a){return d.isValidIntersectorResult(a)&&a.intersector===c.IntersectorType.LOD&&!!a.target};Object.defineProperty(b,"__esModule",{value:!0})});