// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./OutStatistic".split(" "),function(h,b,a,e,m,n,p,k,l){var c;a=c=function(f){function d(){var g=f.apply(this,arguments)||this;g.name=null;return g}h._inheritsLoose(d,f);d.prototype.clone=function(){return new c({name:this.name,outStatistic:this.outStatistic.clone()})};
return d}(a.JSONSupport);b.__decorate([e.property({type:String,json:{write:!0}})],a.prototype,"name",void 0);b.__decorate([e.property({type:l,json:{write:!0}})],a.prototype,"outStatistic",void 0);return a=c=b.__decorate([k.subclass("esri.layers.support.AggregateField")],a)});