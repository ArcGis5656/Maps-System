// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ./Accessor ./Handles ./accessorSupport/decorators/property ./accessorSupport/decorators/subclass ../views/support/WatchUpdatingTracking".split(" "),function(b,f,d,n,p,g,h,q){const m=a=>{a=function(c){function e(){return c.apply(this,arguments)||this}f._inheritsLoose(e,c);e.prototype.destroy=function(){var k,l;this.destroyed||(null==(k=this._get("handles"))?void 0:k.destroy(),null==(l=this._get("updatingHandles"))?void 0:l.destroy())};
f._createClass(e,[{key:"handles",get:function(){return this._get("handles")||new p}},{key:"updatingHandles",get:function(){return this._get("updatingHandles")||new q.WatchUpdatingTracking}}]);return e}(a);d.__decorate([g.property({readOnly:!0})],a.prototype,"handles",null);d.__decorate([g.property({readOnly:!0})],a.prototype,"updatingHandles",null);return a=d.__decorate([h.subclass("esri.core.HandleOwner")],a)};b.HandleOwner=function(a){function c(){return a.apply(this,arguments)||this}f._inheritsLoose(c,
a);return c}(m(n));b.HandleOwner=d.__decorate([h.subclass("esri.core.HandleOwner")],b.HandleOwner);b.HandleOwnerMixin=m;Object.defineProperty(b,"__esModule",{value:!0})});