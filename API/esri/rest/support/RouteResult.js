// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Graphic ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./DirectionsFeatureSet ./FeatureSet".split(" "),function(k,c,e,a,d,n,p,q,l,m,f){a=function(g){function h(b){b=g.call(this,b)||this;b.directionLines=null;b.directionPoints=null;b.directions=null;b.route=null;b.routeName=null;b.stops=
null;return b}k._inheritsLoose(h,g);return h}(a.JSONSupport);c.__decorate([d.property({type:f,json:{write:!0}})],a.prototype,"directionLines",void 0);c.__decorate([d.property({type:f,json:{write:!0}})],a.prototype,"directionPoints",void 0);c.__decorate([d.property({type:m,json:{write:!0}})],a.prototype,"directions",void 0);c.__decorate([d.property({type:e,json:{write:!0}})],a.prototype,"route",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"routeName",void 0);c.__decorate([d.property({type:[e],
json:{write:!0}})],a.prototype,"stops",void 0);return a=c.__decorate([l.subclass("esri.rest.support.RouteResult")],a)});