// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Color ../../core/Accessor ../../core/Collection ../../core/collectionUtils ../../core/timeUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "),function(g,d,h,a,k,m,c,e,p,q,r,n){a=function(l){function f(){var b=l.call(this,{})||this;b.color=new h([50,50,50,.7]);b.intervalOptions=new k([c.convertTime(15,
"minutes","milliseconds"),c.convertTime(30,"minutes","milliseconds"),c.convertTime(1,"hours","milliseconds"),c.convertTime(2,"hours","milliseconds"),c.convertTime(3,"hours","milliseconds")]);b.interval=b.intervalOptions.getItemAt(0);return b}g._inheritsLoose(f,l);g._createClass(f,[{key:"intervalOptions",set:function(b){this._set("intervalOptions",m.referenceSetter(b,this._get("intervalOptions")))}}]);return f}(a);d.__decorate([e.property({type:h})],a.prototype,"color",void 0);d.__decorate([e.property()],
a.prototype,"interval",void 0);d.__decorate([e.property({type:k})],a.prototype,"intervalOptions",null);return a=d.__decorate([n.subclass("esri.widgets.ShadowCast.DiscreteOptions")],a)});