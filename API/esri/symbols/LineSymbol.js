// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/screenUtils ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ./Symbol".split(" "),function(f,c,g,h,a,n,p,k,l,m){a=function(e){function d(b){b=e.call(this,b)||this;b.type="simple-line";b.width=.75;return b}f._inheritsLoose(d,e);d.prototype.hash=function(){return`${this.type}.${this.width}`};
return d}(m);c.__decorate([k.enumeration({esriSLS:"simple-line"},{readOnly:!0})],a.prototype,"type",void 0);c.__decorate([h.property({type:Number,cast:g.toPt,json:{write:!0}})],a.prototype,"width",void 0);return a=c.__decorate([l.subclass("esri.symbols.LineSymbol")],a)});