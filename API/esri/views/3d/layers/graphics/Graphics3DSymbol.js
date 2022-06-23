// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../core/asyncUtils ../../../../core/maybe ../../../../core/promiseUtils ./Graphics3DGraphic ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolLayerFactory ./interfaces ./Loadable ./symbolComplexity".split(" "),function(n,x,g,v,y,z,A,t,p,B){const q={renderPriority:0,renderPriorityStep:1,ignoreDrivers:!1};return function(u){function r(b,c,d){var a=u.call(this,c.schedule)||this;a._symbol=b;a._context=c;a._backgroundLayers=d;a._destroyed=
!1;a.symbolLayers=[];a.referenced=0;a._extentPadding=0;return a}n._inheritsLoose(r,u);var k=r.prototype;k.doLoad=function(){var b=n._asyncToGenerator(function*(c){var d=this;let a=this._symbol.symbolLayers;this._extentPadding=0;this._backgroundLayers&&(a=this._backgroundLayers.concat(a));const f=a.length;for(;this.symbolLayers.length<a.length;)this.symbolLayers.push(null);this.symbolLayers.length=a.length;const h=[];for(let e=0;e<f;e++){const l=a.getItemAt(e);if(!1===l.enabled)continue;q.renderPriority=
1-(1+e)/f;q.renderPriorityStep=1/f;q.ignoreDrivers=l._ignoreDrivers;const m=A.make(this.symbol,l,this._context,q);h.push(v.onAbortOrThrow(c,()=>{this.symbolLayers[e]=null;m.destroy()}));this.symbolLayers[e]=m}yield x.forEach(this.symbolLayers,function(){var e=n._asyncToGenerator(function*(l,m){if(g.isSome(l))try{yield l.load(),d._extentPadding+=Math.max(d._extentPadding,l.extentPadding)}catch{d.symbolLayers[m]=null}});return function(l,m){return e.apply(this,arguments)}}());for(const e of h)null==
e?void 0:e.remove();h.length=0;v.throwIfAborted(c);if(this.symbolLayers.length&&!this.symbolLayers.some(e=>!!e))throw Error();});return function(c){return b.apply(this,arguments)}}();k.getSymbolLayerSize=function(b){b=this.symbolLayers[b];return g.isSome(b)?b.getCachedSize():null};k.createGraphics3DGraphic=function(b,c){const d=b.graphic,a=Array(this.symbolLayers.length);for(let f=0;f<this.symbolLayers.length;f++){const h=this.symbolLayers[f];a[f]=g.isSome(h)?h.createGraphics3DGraphic(b):null}return new y(d,
c||this,a,b.layer,this._context.arcade||this._context.featureExpressionInfoContext&&this._context.featureExpressionInfoContext.arcade&&this._context.featureExpressionInfoContext.arcade.modules||null)};k.globalPropertyChanged=function(b,c){const d=this.symbolLayers.length;for(let a=0;a<d;a++){const f=this.symbolLayers[a],h=e=>{e=e.graphics[a];return e instanceof z.Graphics3DObject3DGraphicLayer?e:null};if(g.isSome(f)&&!f.globalPropertyChanged(b,c,h))return!1}return!0};k.applyRendererDiff=function(b,
c){return this.loadStatus!==p.LoadStatus.LOADED?t.ApplyRendererDiffResult.Recreate_Symbol:this.symbolLayers.reduce((d,a)=>d!==t.ApplyRendererDiffResult.Recreate_Symbol&&g.isSome(a)?Math.min(d,a.applyRendererDiff(b,c)):d,t.ApplyRendererDiffResult.Fast_Update)};k.prepareSymbolPatch=function(b){if(this.loadStatus!==p.LoadStatus.FAILED&&"partial"===b.diff.type){var c=b.diff.diff;if(c.symbolLayers&&"partial"===c.symbolLayers.type){var d=c.symbolLayers.diff;this.symbolLayers.forEach((a,f)=>{if(!g.isNone(a)){var h=
d[f];if(h){const e={diff:h,graphics3DGraphicPatches:[],symbolLayerStatePatches:[]};a.prepareSymbolLayerPatch(e);b.symbolStatePatches.push(...e.symbolLayerStatePatches);e.graphics3DGraphicPatches.length&&b.graphics3DGraphicPatches.push((l,m)=>{const w=l.graphics[f];g.isSome(w)&&e.graphics3DGraphicPatches.forEach(C=>C(w,m))})}}})}}};k.updateGeometry=function(b,c){for(let d=0;d<this.symbolLayers.length;d++){const a=this.symbolLayers[d];if(g.isNone(a))continue;const f=b.graphics[d];if(g.isNone(f)||!a.updateGeometry(f,
c))return!1}return!0};k.onRemoveGraphic=function(b){for(let c=0;c<this.symbolLayers.length;c++){const d=this.symbolLayers[c];if(g.isNone(d))continue;const a=b.graphics[c];if(g.isSome(a))d.onRemoveGraphic(a)}};k.getFastUpdateStatus=function(){let b=0,c=0,d=0;this.symbolLayers.forEach(a=>{g.isNone(a)||(a.loadStatus===p.LoadStatus.LOADING?b++:a.isFastUpdatesEnabled()?d++:c++)});return{loading:b,slow:c,fast:d}};k.destroy=function(){if(this.destroyed)console.error("Graphics3DSymbol.destroy called when already destroyed!");
else{u.prototype.destroy.call(this);for(const b of this.symbolLayers)g.isSome(b)&&b.destroy();this.symbolLayers.length=0;this._destroyed=!0}};n._createClass(r,[{key:"symbol",get:function(){return this._symbol},set:function(b){this._symbol=b;for(let c=0;c<b.symbolLayers.length;c++){const d=this.symbolLayers[c];g.isNone(d)||(d.symbol=b,d.symbolLayer=b.symbolLayers.items[c])}}},{key:"extentPadding",get:function(){return this._extentPadding}},{key:"complexity",get:function(){return B.totalSymbolComplexities(this.symbolLayers.map(b=>
g.get(b,"complexity")))}},{key:"destroyed",get:function(){return this._destroyed}}]);return r}(p.Loadable)});