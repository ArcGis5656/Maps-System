// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/maybe","../centroid","../OptimizedFeature","../OptimizedGeometry"],function(c,e,f,g,h){const d={getObjectId(a){return a.objectId},getAttributes(a){return a.attributes},getAttribute(a,b){return a.attributes[b]},cloneWithGeometry(a,b){return new g.OptimizedFeature(b,a.attributes,null,a.objectId)},getGeometry(a){return a.geometry},getCentroid(a,b){e.isNone(a.centroid)&&(a.centroid=f.getCentroidOptimizedGeometry(new h,a.geometry,b.hasZ,b.hasM));return a.centroid}};c.default=
d;c.optimizedFeatureQueryEngineAdapter=d;Object.defineProperty(c,"__esModule",{value:!0})});