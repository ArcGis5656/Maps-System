// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../Graphic ../../../core/Collection ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ./LayerView2D ./graphics/GraphicContainer ./graphics/GraphicsView2D ../../layers/LayerView".split(" "),function(g,k,m,n,p,f,x,y,q,r,t,u,v){const w={remove(){},pause(){},resume(){}};f=function(l){function h(){var a=
l.apply(this,arguments)||this;a._highlightIds=new Map;return a}g._inheritsLoose(h,l);var c=h.prototype;c.attach=function(){this.graphicsView=new u({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new t(this.view.featuresTilingScheme)});this._updateHighlight();this.container.addChild(this.graphicsView.container);this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")};c.detach=function(){this.container.removeAllChildren();
this.graphicsView.destroy();this.graphicsView=null;this.handles.remove("graphicslayerview2d")};c.hitTest=function(){var a=g._asyncToGenerator(function*(b){return this.graphicsView?this.graphicsView.hitTest(b):null});return function(b){return a.apply(this,arguments)}}();c.fetchPopupFeatures=function(){var a=g._asyncToGenerator(function*(b){if(this.graphicsView)return this.graphicsView.hitTest(b).filter(d=>!!d.popupTemplate)});return function(b){return a.apply(this,arguments)}}();c.queryGraphics=function(){return Promise.resolve(this.graphicsView.graphics)};
c.update=function(a){this.graphicsView.processUpdate(a)};c.moveStart=function(){};c.viewChange=function(){this.graphicsView.viewChange()};c.moveEnd=function(){};c.isUpdating=function(){return!this.graphicsView||this.graphicsView.updating};c.highlight=function(a){var b;let d;"number"===typeof a?d=[a]:a instanceof m?d=[a.uid]:Array.isArray(a)&&0<a.length?d="number"===typeof a[0]?a:a.map(e=>e&&e.uid):n.isCollection(a)&&0<a.length&&(d=a.map(e=>e&&e.uid).toArray());d=null==(b=d)?void 0:b.filter(e=>null!=
e);if(!d.length)return w;this._addHighlight(d);return{remove:()=>this._removeHighlight(d)}};c._addHighlight=function(a){for(const b of a)this._highlightIds.has(b)?(a=this._highlightIds.get(b),this._highlightIds.set(b,a+1)):this._highlightIds.set(b,1);this._updateHighlight()};c._removeHighlight=function(a){for(const b of a)this._highlightIds.has(b)&&(a=this._highlightIds.get(b)-1,0===a?this._highlightIds.delete(b):this._highlightIds.set(b,a));this._updateHighlight()};c._updateHighlight=function(){var a;
null==(a=this.graphicsView)?void 0:a.setHighlight(Array.from(this._highlightIds.keys()))};return h}(r.LayerView2DMixin(v));k.__decorate([p.property()],f.prototype,"graphicsView",void 0);return f=k.__decorate([q.subclass("esri.views.2d.layers.GraphicsLayerView2D")],f)});