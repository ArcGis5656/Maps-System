// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
require({cache:{"esri/views/2d/layers/BitmapTileLayerView2D":function(){define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/set ../../../core/accessorSupport/decorators/subclass ../engine/BitmapTileContainer".split(" "),function(l,n,c,g,a,d,e,h,k,q){l.BitmapTileLayerView2D=f=>{f=function(r){function t(){return r.apply(this,arguments)||
this}n._inheritsLoose(t,r);var u=t.prototype;u.attach=function(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`);this._bitmapView=new q.BitmapTileContainer(this._tileInfoView);this.container.addChild(this._bitmapView)};u.detach=function(){var x;this.container.removeChild(this._bitmapView);null==(x=this._bitmapView)?void 0:x.removeAllChildren()};return t}(f);return f=c.__decorate([k.subclass("esri.views.2d.layers.BitmapTileLayerView2D")],f)};Object.defineProperty(l,"__esModule",
{value:!0})})},"esri/views/2d/layers/LayerView2D":function(){define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Collection ../../../core/collectionUtils ../../../core/Error ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../engine/Container ../../layers/support/ClipArea ../../layers/support/ClipRect ../../layers/support/Geometry ../../layers/support/Path".split(" "),
function(l,n,c,g,a,d,e,h,k,q,f,r,t,u,x,D,E){const F=g.ofType({key:"type",base:u,typeMap:{rect:x,path:E,geometry:D}});l.LayerView2DMixin=A=>{A=function(B){function G(){var p=B.apply(this,arguments)||this;p.attached=!1;p.clips=new F;p.lastUpdateId=-1;p.moving=!1;p.updateRequested=!1;return p}n._inheritsLoose(G,B);var v=G.prototype;v.initialize=function(){var p,w,C,z;const m=null!=(p=null==(w=this.view)?void 0:w.spatialReferenceLocked)?p:!0;(null==(C=this.view)?0:C.spatialReference)&&m&&!this.spatialReferenceSupported?
this.addResolvingPromise(Promise.reject(new d("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new t.Container),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([e.watch(()=>this.suspended,b=>{this.container&&(this.container.visible=!b);this.view&&!b&&this.updateRequested&&this.view.requestUpdate()},e.syncAndInitial),
e.watch(()=>{var b,y;return null!=(b=null==(y=this.layer)?void 0:y.opacity)?b:1},b=>{this.container&&(this.container.opacity=b)},e.syncAndInitial),e.watch(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",b=>{this.container&&(this.container.blendMode=b)},e.syncAndInitial),e.watch(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,b=>{this.container&&(this.container.effect=b)},e.syncAndInitial),e.on(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)})]),
null!=(z=this.view)&&z.whenLayerView?this.view.whenLayerView(this.layer).then(b=>{b===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))};v.destroy=function(){this.processDetach();this.updateRequested=!1};v.processAttach=function(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())};v.processDetach=function(){this.attached&&(this.attached=!1,this.detach(),this.updateRequested=
!1)};v.isVisibleAtScale=function(p){const w=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!w)return!0;const {minScale:C,maxScale:z}=w;return(0===C||p<=C)&&(0===z||p>=z)};v.requestUpdate=function(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())};v.processUpdate=function(p){this.isFulfilled()&&!this.isResolved()?this.updateRequested=!1:(this._set("updateParameters",p),this.updateRequested&&!this.suspended&&
(this.updateRequested=!1,this.update(p)))};v.hitTest=function(p,w){return Promise.resolve(null)};v.supportsSpatialReference=function(p){return!0};v.canResume=function(){return this.spatialReferenceSupported?B.prototype.canResume.call(this)?this.visibleAtCurrentScale:!1:!1};v.getSuspendInfo=function(){const p=B.prototype.getSuspendInfo.call(this),w=!this.spatialReferenceSupported,C=this.visibleAtCurrentScale;w&&(p.spatialReferenceNotSupported=w);C&&(p.outsideScaleRange=C);return p};n._createClass(G,
[{key:"spatialReferenceSupported",get:function(){var p;const w=null==(p=this.view)?void 0:p.spatialReference;return null==w||this.supportsSpatialReference(w)}},{key:"updating",get:function(){var p;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null==(p=this.updatingHandles)||!p.updating))}},{key:"visibleAtCurrentScale",get:function(){return this.isVisibleAtScale(this.view.scale)}}]);return G}(A);c.__decorate([h.property()],A.prototype,
"attached",void 0);c.__decorate([h.property({type:F,set(B){B=a.referenceSetter(B,this._get("clips"),F);this._set("clips",B)}})],A.prototype,"clips",void 0);c.__decorate([h.property()],A.prototype,"container",void 0);c.__decorate([h.property()],A.prototype,"moving",void 0);c.__decorate([h.property({readOnly:!0})],A.prototype,"spatialReferenceSupported",null);c.__decorate([h.property({readOnly:!0})],A.prototype,"updateParameters",void 0);c.__decorate([h.property()],A.prototype,"updateRequested",void 0);
c.__decorate([h.property()],A.prototype,"updating",null);c.__decorate([h.property()],A.prototype,"view",void 0);c.__decorate([h.property({readOnly:!0})],A.prototype,"visibleAtCurrentScale",null);return A=c.__decorate([r.subclass("esri.views.2d.layers.LayerView2D")],A)};Object.defineProperty(l,"__esModule",{value:!0})})},"esri/views/layers/support/ClipArea":function(){define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/JSONSupport ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/set ../../../core/accessorSupport/decorators/subclass".split(" "),
function(l,n,c,g,a,d,e,h,k){c=function(q){function f(){return q.apply(this,arguments)||this}l._inheritsLoose(f,q);return f}(c.JSONSupport);return c=n.__decorate([k.subclass("esri.views.layers.support.ClipArea")],c)})},"esri/views/layers/support/ClipRect":function(){define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ./ClipArea".split(" "),
function(l,n,c,g,a,d,e,h){var k;g=k=function(q){function f(){var r=q.apply(this,arguments)||this;r.type="rect";r.left=null;r.right=null;r.top=null;r.bottom=null;return r}l._inheritsLoose(f,q);f.prototype.clone=function(){return new k({left:this.left,right:this.right,top:this.top,bottom:this.bottom})};l._createClass(f,[{key:"version",get:function(){return(this._get("version")||0)+1}}]);return f}(h);n.__decorate([c.property({type:[Number,String],json:{write:!0}})],g.prototype,"left",void 0);n.__decorate([c.property({type:[Number,
String],json:{write:!0}})],g.prototype,"right",void 0);n.__decorate([c.property({type:[Number,String],json:{write:!0}})],g.prototype,"top",void 0);n.__decorate([c.property({type:[Number,String],json:{write:!0}})],g.prototype,"bottom",void 0);n.__decorate([c.property({readOnly:!0})],g.prototype,"version",null);return g=k=n.__decorate([e.subclass("esri.views.layers.support.ClipRect")],g)})},"esri/views/layers/support/Geometry":function(){define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../geometry ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../geometry/Geometry ../../../geometry/support/jsonUtils ./ClipArea ../../../geometry/Extent ../../../geometry/Polygon".split(" "),
function(l,n,c,g,a,d,e,h,k,q,f,r,t){var u;c={base:k,key:"type",typeMap:{extent:r,polygon:t}};f=u=function(x){function D(){var E=x.apply(this,arguments)||this;E.type="geometry";E.geometry=null;return E}l._inheritsLoose(D,x);D.prototype.clone=function(){return new u({geometry:this.geometry.clone()})};l._createClass(D,[{key:"version",get:function(){return(this._get("version")||0)+1}}]);return D}(f);n.__decorate([g.property({types:c,json:{read:q.fromJSON,write:!0}})],f.prototype,"geometry",void 0);n.__decorate([g.property({readOnly:!0})],
f.prototype,"version",null);return f=u=n.__decorate([h.subclass("esri.views.layers.support.Geometry")],f)})},"esri/views/layers/support/Path":function(){define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ./ClipArea".split(" "),function(l,n,c,g,a,d,e,h){g=function(k){function q(){var f=k.apply(this,
arguments)||this;f.type="path";f.path=[];return f}l._inheritsLoose(q,k);l._createClass(q,[{key:"version",get:function(){return(this._get("version")||0)+1}}]);return q}(h);n.__decorate([c.property({type:[[[Number]]],json:{write:!0}})],g.prototype,"path",void 0);n.__decorate([c.property({readOnly:!0})],g.prototype,"version",null);return g=n.__decorate([e.subclass("esri.views.layers.support.Path")],g)})},"esri/views/2d/layers/support/imageUtils":function(){define(["exports"],function(l){function n(c){const g=
document.createElement("canvas");[g.width,g.height]=c;return g}l.createBlankImage=n;l.resampleImage=function(c,g,a,d){if(a.level===d.level)return g;const e=c.tileInfo.size;var h=c.getTileResolution(a.level),k=c.getTileResolution(d.level),q=c.getLODInfoAt(d.level),f=q.getXForColumn(d.col);d=q.getYForRow(d.row);q=c.getLODInfoAt(a.level);c=q.getXForColumn(a.col);const r=q.getYForRow(a.row);q=(g instanceof HTMLImageElement?g.naturalWidth:g.width)/e[0];a=(g instanceof HTMLImageElement?g.naturalHeight:
g.height)/e[1];f=Math.round((f-c)/h*q);d=Math.round(-(d-r)/h*a);c=Math.round(k/h*e[0]*q);h=Math.round(k/h*e[1]*a);k=n(e);k.getContext("2d").drawImage(g,f,d,c,h,0,0,e[0],e[1]);return k};Object.defineProperty(l,"__esModule",{value:!0})})},"esri/views/layers/RefreshableLayerView":function(){define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Logger ../../core/promiseUtils ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass".split(" "),
function(l,n,c,g,a,d,e,h,k,q,f){h=r=>{r=function(t){function u(){return t.apply(this,arguments)||this}n._inheritsLoose(u,t);u.prototype.initialize=function(){this.handles.add(d.on(()=>this.layer,"refresh",x=>{this.doRefresh(x.dataChanged).catch(D=>{a.isAbortError(D)||g.getLogger(this.declaredClass).error(D)})}),"RefreshableLayerView")};return u}(r);c.__decorate([e.property()],r.prototype,"layer",void 0);return r=c.__decorate([f.subclass("esri.layers.mixins.RefreshableLayerView")],r)};l.RefreshableLayerView=
h;l.default=h;Object.defineProperty(l,"__esModule",{value:!0})})},"esri/views/layers/TileLayerView":function(){define("exports ../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Error ../../core/maybe ../../core/promiseUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../renderers/support/clickToleranceUtils".split(" "),function(l,n,c,g,a,d,e,h,k,q,
f,r){h=t=>{t=function(u){function x(){return u.apply(this,arguments)||this}n._inheritsLoose(x,u);x.prototype.fetchPopupFeatures=function(){var D=n._asyncToGenerator(function*(E,F){var A=this,{layer:B}=this;if(!E)return Promise.reject(new g("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:B}));if("tile"!==B.type)return Promise.reject(new g("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:B.type}));const G=this.get("view.scale");B=B.allSublayers.toArray().filter(v=>
{const p=0===v.minScale||G<=v.minScale,w=0===v.maxScale||G>=v.maxScale;return v.popupTemplate&&v.popupEnabled&&v.visible&&p&&w});return d.eachAlways(B.map(function(){var v=n._asyncToGenerator(function*(p){const w=p.createQuery();var C=a.isSome(F)?F.event:null;C=r.calculateTolerance({renderer:p.renderer,event:C});w.geometry=A.createFetchPopupFeaturesQueryGeometry(E,C);w.outFields=yield p.popupTemplate.getRequiredFields();return(yield p.queryFeatures(w)).features});return function(p){return v.apply(this,
arguments)}}())).then(v=>[].concat(...v.map(p=>p.value).filter(Boolean)))});return function(E,F){return D.apply(this,arguments)}}();return x}(t);c.__decorate([e.property()],t.prototype,"layer",void 0);return t=c.__decorate([f.subclass("esri.layers.mixins.TileLayerView")],t)};l.TileLayerView=h;l.default=h;Object.defineProperty(l,"__esModule",{value:!0})})},"esri/renderers/support/clickToleranceUtils":function(){define(["exports"],function(l){function n(a,d){return d?"xoffset"in d&&d.xoffset?Math.max(a,
Math.abs(d.xoffset)):"yoffset"in d&&d.yoffset?Math.max(a,Math.abs(d.yoffset||0)):a:a}function c(a,d){if("number"===typeof a)return a;if(a&&a.stops&&a.stops.length){{a=a.stops;let e=d=0;for(let h=0;h<a.length;h++){const k=a[h].size;"number"===typeof k&&(d+=k,e++)}a=d/e}return a}return d}function g(a,d){if(!d)return a;d=d.filter(k=>"size"===k.type).map(k=>{const {maxSize:q,minSize:f}=k;return(c(q,a)+c(f,a))/2});let e=0;const h=d.length;if(0===h)return a;for(let k=0;k<h;k++)e+=d[k];return Math.max(Math.floor(e/
h),a)}l.calculateTolerance=function(a){const d=a&&a.renderer;a="touch"===(a&&a.event&&a.event.pointerType)?9:6;if(!d)return a;a="visualVariables"in d?g(a,d.visualVariables):a;if("simple"===d.type)return n(a,d.symbol);if("unique-value"===d.type){let e=a;d.uniqueValueInfos.forEach(h=>{e=n(e,h.symbol)});return e}if("class-breaks"===d.type){let e=a;d.classBreakInfos.forEach(h=>{e=n(e,h.symbol)});return e}return a};Object.defineProperty(l,"__esModule",{value:!0})})},"esri/views/support/drapedUtils":function(){define("exports ../../geometry ../../core/maybe ../../core/unitUtils ../../renderers/support/clickToleranceUtils ../../geometry/Extent".split(" "),
function(l,n,c,g,a,d){function e(k,q,f,r=new d){let t;if("2d"===f.type)t=q*f.resolution;else if("3d"===f.type){var u=f.overlayPixelSizeInMapUnits(k),x=f.basemapSpatialReference;t=c.isSome(x)&&!x.equals(f.spatialReference)?g.getMetersPerUnitForSR(x)/g.getMetersPerUnitForSR(f.spatialReference):q*u}q=k.x-t;u=k.y-t;x=k.x+t;k=k.y+t;({spatialReference:f}=f);r.xmin=Math.min(q,x);r.ymin=Math.min(u,k);r.xmax=Math.max(q,x);r.ymax=Math.max(u,k);r.spatialReference=f;return r}const h=new d;l.createQueryGeometry=
e;l.intersectsDrapedGeometry=function(k,q,f){k=f.toMap(k);if(c.isNone(k))return!1;const r=a.calculateTolerance();return e(k,r,f,h).intersects(q)};Object.defineProperty(l,"__esModule",{value:!0})})},"*noref":1}});
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Logger ../../../core/promiseUtils ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../geometry/support/spatialReferenceUtils ./BitmapTileLayerView2D ./LayerView2D ./support/imageUtils ../tiling/TileInfoView ../tiling/TileKey ../tiling/TileQueue ../tiling/TileStrategy ../../layers/LayerView ../../layers/RefreshableLayerView ../../layers/TileLayerView ../../support/drapedUtils".split(" "),function(l,
n,c,g,a,d,e,h,k,q,f,r,t,u,x,D,E,F,A,B,G,v){const p=[0,0];e=function(w){function C(){var m=w.apply(this,arguments)||this;m._tileStrategy=null;m._fetchQueue=null;m.layer=null;return m}l._inheritsLoose(C,w);var z=C.prototype;z.update=function(m){this._fetchQueue.pause();this._fetchQueue.state=m.state;this._tileStrategy.update(m);this._fetchQueue.resume()};z.attach=function(){const m="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new x(this.layer.tileInfo,this.layer.fullExtent);
this._fetchQueue=new E({tileInfoView:this._tileInfoView,concurrency:m&&10*m.length||10,process:(b,y)=>this.fetchTile(b,y)});this._tileStrategy=new F({cachePolicy:"keep",resampling:this.resampling,acquireTile:b=>this.acquireTile(b),releaseTile:b=>this.releaseTile(b),tileInfoView:this._tileInfoView});this.requestUpdate();this.handles.add(a.watch(()=>this.resampling,()=>{this.doRefresh()}));w.prototype.attach.call(this)};z.detach=function(){w.prototype.detach.call(this);this._tileStrategy.destroy();
this._fetchQueue.clear();this.container.removeAllChildren();this._fetchQueue=this._tileStrategy=this._tileInfoView=null};z.moveStart=function(){this.requestUpdate()};z.viewChange=function(){this.requestUpdate()};z.moveEnd=function(){this.requestUpdate()};z.supportsSpatialReference=function(m){var b;return f.equals(null==(b=this.layer.tileInfo)?void 0:b.spatialReference,m)};z.createFetchPopupFeaturesQueryGeometry=function(m,b){return v.createQueryGeometry(m,b,this.view)};z.doRefresh=function(){var m=
l._asyncToGenerator(function*(){this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(b=>this._enqueueTileFetch(b)))});return function(){return m.apply(this,arguments)}}();z.isUpdating=function(){var m,b;return null!=(m=null==(b=this._fetchQueue)?void 0:b.updating)?m:!1};z.acquireTile=function(m){m=this._bitmapView.createTile(m);const b=m.bitmap;[b.x,b.y]=this._tileInfoView.getTileCoords(p,m.key);b.resolution=this._tileInfoView.getTileResolution(m.key);[b.width,
b.height]=this._tileInfoView.tileInfo.size;this._enqueueTileFetch(m);this._bitmapView.addChild(m);this.requestUpdate();return m};z.releaseTile=function(m){this._fetchQueue.abort(m.key.id);this._bitmapView.removeChild(m);m.once("detach",()=>m.destroy());this.requestUpdate()};z.fetchTile=function(){var m=l._asyncToGenerator(function*(b,y={}){var H="tilemapCache"in this.layer?this.layer.tilemapCache:null;const {signal:J,resamplingLevel:L=0}=y;if(!H)try{return yield this._fetchImage(b,J)}catch(I){if(!g.isAbortError(I)&&
!this.resampling)return u.createBlankImage(this._tileInfoView.tileInfo.size);if(3>L&&(H=this._tileInfoView.getTileParentId(b.id)))return H=new D(H),y=yield this.fetchTile(H,{...y,resamplingLevel:L+1}),u.resampleImage(this._tileInfoView,y,H,b);throw I;}y=new D(0,0,0,0);let K;try{yield H.fetchAvailabilityUpsample(b.level,b.row,b.col,y,{signal:J});if(y.level!==b.level&&!this.resampling)return u.createBlankImage(this._tileInfoView.tileInfo.size);K=yield this._fetchImage(y,J)}catch(I){if(g.isAbortError(I))throw I;
K=yield this._fetchImage(b,J)}return this.resampling?u.resampleImage(this._tileInfoView,K,y,b):K});return function(b){return m.apply(this,arguments)}}();z._enqueueTileFetch=function(){var m=l._asyncToGenerator(function*(b){if(!this._fetchQueue.has(b.key.id)){try{const y=yield this._fetchQueue.push(b.key);b.bitmap.source=y;b.bitmap.width=this._tileInfoView.tileInfo.size[0];b.bitmap.height=this._tileInfoView.tileInfo.size[1];b.once("attach",()=>this.requestUpdate())}catch(y){g.isAbortError(y)||c.getLogger(this.declaredClass).error(y)}this.requestUpdate()}});
return function(b){return m.apply(this,arguments)}}();z._fetchImage=function(){var m=l._asyncToGenerator(function*(b,y){return this.layer.fetchTile(b.level,b.row,b.col,{signal:y})});return function(b,y){return m.apply(this,arguments)}}();l._createClass(C,[{key:"resampling",get:function(){return!("resampling"in this.layer)||!1!==this.layer.resampling}}]);return C}(G.TileLayerView(B.RefreshableLayerView(r.BitmapTileLayerView2D(t.LayerView2DMixin(A)))));n.__decorate([d.property()],e.prototype,"_fetchQueue",
void 0);n.__decorate([d.property()],e.prototype,"resampling",null);return e=n.__decorate([q.subclass("esri.views.2d.layers.TileLayerView2D")],e)});