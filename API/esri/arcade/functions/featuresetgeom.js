// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../kernel ../../chunks/languageUtils ../featureset/actions/SpatialFilter ../featureset/sources/Empty ../../core/promiseUtils ../../geometry/Geometry ../../geometry/geometryEngineAsync".split(" "),function(p,q,f,r,n,h,g,k){function l(c,e,d,m,t){return t(c,e,function(a,u,b){if(2>b.length)return m(Error("Missing Parameters"));b=f.autoCastFeatureToGeometry(b);if(null===b[0]&&null===b[1])return h.resolve(!1);if(f.isFeatureSet(b[0]))return b[1]instanceof g?h.resolve(new r({parentfeatureset:b[0],
relation:d,relationGeom:b[1]})):null===b[1]?h.resolve(new n({parentfeatureset:b[0]})):m("Spatial Relation cannot accept this parameter type");if(b[0]instanceof g){if(b[1]instanceof g){a=null;switch(d){case "esriSpatialRelEnvelopeIntersects":a=k.intersects(q.shapeExtent(b[0]),q.shapeExtent(b[1]));break;case "esriSpatialRelIntersects":a=k.intersects(b[0],b[1]);break;case "esriSpatialRelContains":a=k.contains(b[0],b[1]);break;case "esriSpatialRelOverlaps":a=k.overlaps(b[0],b[1]);break;case "esriSpatialRelWithin":a=
k.within(b[0],b[1]);break;case "esriSpatialRelTouches":a=k.touches(b[0],b[1]);break;case "esriSpatialRelCrosses":a=k.crosses(b[0],b[1])}return null!==a?a:h.reject(Error("Unrecognised Relationship"))}return f.isFeatureSet(b[1])?h.resolve(new r({parentfeatureset:b[1],relation:d,relationGeom:b[0]})):null===b[1]?h.resolve(!1):m("Spatial Relation cannot accept this parameter type")}if(null===b[0]){if(f.isFeatureSet(b[1]))return h.resolve(new n({parentfeatureset:b[1]}));if(b[1]instanceof g||null===b[1])return h.resolve(!1)}else return m("Spatial Relation cannot accept this parameter type")})}
p.registerFunctions=function(c){"async"===c.mode&&(c.functions.intersects=function(e,d){return l(e,d,"esriSpatialRelIntersects",c.failDefferred,c.standardFunctionAsync)},c.functions.envelopeintersects=function(e,d){return l(e,d,"esriSpatialRelEnvelopeIntersects",c.failDefferred,c.standardFunctionAsync)},c.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),c.functions.contains=function(e,d){return l(e,d,"esriSpatialRelContains",c.failDefferred,c.standardFunctionAsync)},c.functions.overlaps=
function(e,d){return l(e,d,"esriSpatialRelOverlaps",c.failDefferred,c.standardFunctionAsync)},c.functions.within=function(e,d){return l(e,d,"esriSpatialRelWithin",c.failDefferred,c.standardFunctionAsync)},c.functions.touches=function(e,d){return l(e,d,"esriSpatialRelTouches",c.failDefferred,c.standardFunctionAsync)},c.functions.crosses=function(e,d){return l(e,d,"esriSpatialRelCrosses",c.failDefferred,c.standardFunctionAsync)},c.functions.relate=function(e,d){return c.standardFunctionAsync(e,d,function(m,
t,a){a=f.autoCastFeatureToGeometry(a);f.pcCheck(a,3,3);if(a[0]instanceof g&&a[1]instanceof g)return k.relate(a[0],a[1],f.toString(a[2]));if(a[0]instanceof g&&null===a[1]||a[1]instanceof g&&null===a[0])return!1;if(f.isFeatureSet(a[0])&&null===a[1])return new n({parentfeatureset:a[0]});if(f.isFeatureSet(a[1])&&null===a[0])return new n({parentfeatureset:a[1]});if(f.isFeatureSet(a[0])&&a[1]instanceof g)return a[0].relate(a[1],f.toString(a[2]));if(f.isFeatureSet(a[1])&&a[0]instanceof g)return a[1].relate(a[0],
f.toString(a[2]));if(null===a[0]&&null===a[1])return!1;throw Error("Illegal Argument");})})};Object.defineProperty(p,"__esModule",{value:!0})});