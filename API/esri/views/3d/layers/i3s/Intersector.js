// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../webgl-engine/lib/IntersectorInterfaces","../../webgl-engine/lib/intersectorUtils"],function(b,c,d){b.isI3sIntersectorResult=function(a){return d.isValidIntersectorResult(a)&&a.intersector===c.IntersectorType.I3S&&!!a.target};b.isPclIntersectorResult=function(a){return d.isValidIntersectorResult(a)&&a.intersector===c.IntersectorType.PCL&&!!a.target};Object.defineProperty(b,"__esModule",{value:!0})});