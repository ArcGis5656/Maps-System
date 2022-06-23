// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../Graphic ../../../core/Accessor ../../../core/HandleOwner ../../../core/watchUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../support/featureUtils".split(" "),function(g,d,n,b,p,q,e,t,u,v,r,l){b=function(m){function h(f){var a=m.call(this,f)||this;a._loadingPromise=null;a.created=
null;a.creator=null;a.destroyer=null;a.graphic=null;a.handles.add(q.init(g._assertThisInitialized(a),"creator",c=>{a._destroyContent();a._createContent(c)}));return a}g._inheritsLoose(h,m);var k=h.prototype;k.destroy=function(){this._destroyContent()};k._destroyContent=function(){const {created:f,graphic:a,destroyer:c}=this;f&&(l.graphicCallback(c,{graphic:a}).catch(()=>null),this._set("created",null))};k._createContent=function(){var f=g._asyncToGenerator(function*(a){var {graphic:c}=this;this._loadingPromise=
a=l.graphicCallback(a,{graphic:c}).catch(()=>null);this.notifyChange("state");c=yield a;a===this._loadingPromise&&(this._loadingPromise=null,this.notifyChange("state"),this._set("created",c))});return function(a){return f.apply(this,arguments)}}();g._createClass(h,[{key:"state",get:function(){return this._loadingPromise?"loading":"ready"}}]);return h}(p.HandleOwnerMixin(b));d.__decorate([e.property({readOnly:!0})],b.prototype,"created",void 0);d.__decorate([e.property()],b.prototype,"creator",void 0);
d.__decorate([e.property()],b.prototype,"destroyer",void 0);d.__decorate([e.property({type:n})],b.prototype,"graphic",void 0);d.__decorate([e.property({readOnly:!0})],b.prototype,"state",null);return b=d.__decorate([r.subclass("esri.widgets.Feature.FeatureContent.FeatureContentViewModel")],b)});