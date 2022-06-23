// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../geometry/support/jsonUtils".split(" "),function(k,d,b,e,p,q,r,l,m){b=function(h){function f(a){a=h.call(this,a)||this;a.geometries=null;a.outSpatialReference=null;a.transformation=null;a.transformForward=null;return a}k._inheritsLoose(f,
h);f.prototype.toJSON=function(){const a=this.geometries.map(function(n){return n.toJSON()}),g=this.geometries[0],c={};c.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON());c.inSR=g.spatialReference.wkid||JSON.stringify(g.spatialReference.toJSON());c.geometries=JSON.stringify({geometryType:m.getJsonType(g),geometries:a});this.transformation&&(c.transformation=this.transformation.wkid||JSON.stringify(this.transformation));null!=this.transformForward&&(c.transformForward=
this.transformForward);return c};return f}(b.JSONSupport);d.__decorate([e.property()],b.prototype,"geometries",void 0);d.__decorate([e.property({json:{read:{source:"outSR"}}})],b.prototype,"outSpatialReference",void 0);d.__decorate([e.property()],b.prototype,"transformation",void 0);d.__decorate([e.property()],b.prototype,"transformForward",void 0);return b=d.__decorate([l.subclass("esri.rest.support.ProjectParameters")],b)});