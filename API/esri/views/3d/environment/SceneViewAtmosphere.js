// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass".split(" "),function(a,d,e,h,k,m,n,p,l){var c;a.SceneViewAtmosphere=c=function(f){function b(){return f.apply(this,arguments)||this}d._inheritsLoose(b,f);b.prototype.clone=function(){return new c({quality:this.quality})};
d._createClass(b,[{key:"quality",set:function(g){-1!==["low","high"].indexOf(g)&&this._set("quality",g)}}]);return b}(h);e.__decorate([k.property({type:["low","high"],value:"low"})],a.SceneViewAtmosphere.prototype,"quality",null);a.SceneViewAtmosphere=c=e.__decorate([l.subclass("esri.views.3d.environment.SceneViewAtmosphere")],a.SceneViewAtmosphere);a.default=a.SceneViewAtmosphere;Object.defineProperty(a,"__esModule",{value:!0})});