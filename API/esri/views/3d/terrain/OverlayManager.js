// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/Handles ../../../core/has ../../../core/mathUtils ../../../core/maybe ../../../core/scheduling ../../../core/time ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../chunks/vec2 ../../../chunks/vec3 ../../../chunks/vec3f64 ../../../chunks/vec4 ../../../chunks/vec4f64 ../../../geometry/projection ../../../geometry/projectionEllipsoid ../../../geometry/support/aaBoundingRect ../../../geometry/support/ray ../../../chunks/sphere ../../../geometry/support/vector ../../../geometry/support/webMercatorUtils ../layers/interfaces ../state/utils/viewUtils ../support/debugFlags ../support/debugUtils ../support/mathUtils ./interfaces ./Overlay ./OverlayRenderer ../webgl-engine/lib/basicInterfaces ../webgl-engine/lib/Intersector ../webgl-engine/lib/LocalOriginFactory ../webgl-engine/parts/requireUtils ../../support/Scheduler".split(" "),
function(n,I,p,T,U,V,J,m,W,X,r,oa,pa,Y,Z,D,N,K,O,P,E,l,Q,R,aa,ba,F,ca,L,da,M,q,ea,fa,w,ha,ia,ja,ka){const la=[[-.1,-2,3.9,2],[-.1,-3.9,3.9,.1],[-2,-3.9,2,.1],[-3.9,-3.9,.1,.1],[-3.9,-2,.1,2],[-3.9,-.1,.1,3.9],[-2,-.1,2,3.9],[-.1,-.1,3.9,3.9]];let B;n.OverlayManager=function(x){function G(a){a=x.call(this,a)||this;a._handles=new U;a._spatialReference=null;a._renderSR=null;a._overlaySREqualsRenderSR=!0;a._drapeSources=new Map;a._drapeTargets=new Set;a._placementDirty=!1;a._contentUpdated=!1;a._drawTexturesDirty=
!1;a._drawTexturesAnimateDirty=!1;a._layerViewsDirty=!0;a._hasUnusedRenderTargets=!1;a._longitudeCyclical=null;a._latestOriginId=0;a._maxResolution=V("esri-mobile")?2048:4096;a._animationTimeLast=0;return a}I._inheritsLoose(G,x);var g=G.prototype;g.initialize=function(){const a=this.view;this.renderer=new fa.OverlayRenderer({view:a,worldToPCSRatio:this._worldToPCSRatio,spatialReference:this._spatialReference});this._groundIntersector=ha.newIntersector(this.view.state.viewingMode);this._groundIntersector.options.backfacesTerrain=
!0;this._groundIntersector.options.invisibleTerrain=!0;this._groundIntersector.options.hud=!1;this._handles.add([this.renderer.events.on("has-highlights",()=>{this._setDrawTexturesDirty();this.notifyChange("hasHighlights")}),this.renderer.events.on("has-water",b=>{var c;return null==(c=a._stage)?void 0:c.renderView.setRenderParameters({hasOverlayWater:b})}),this.renderer.events.on("renders-occluded",()=>{this._setDrawTexturesDirty();this.notifyChange("rendersOccluded")}),this.renderer.events.on("content-changed",
()=>this._setDrawTexturesDirty()),this.renderer.events.on("textures-disposed",()=>this.updateDrapeTargets()),a.watch(["pointsOfInterest.renderPointOfView","pointsOfInterest.centerOnSurfaceFrequent.location","pixelRatio"],()=>this.setPlacementDirty()),this.surface.on("elevation-change",()=>this.setPlacementDirty()),a.allLayerViews.on("after-changes",()=>this._layerViewsDirty=!0),a.watch("graphicsView",()=>this._layerViewsDirty=!0),a.on("resize",()=>this.setPlacementDirty()),W.addFrameTask({preRender:b=>
{this._contentUpdated=!1;this.renderer.processSyncLayers();this._updateLayerViews();this.renderer.hasOverlays&&(this._dispatchAnimationUpdate(b),this._drawOverlayTextures(this.renderer.overlays,w.RenderRequestType.UPDATE));this._hasUnusedRenderTargets&&this._collectUnusedRenderTargetMemory()}}),a.resourceController.scheduler.registerTask(ka.TaskPriority.OVERLAY,this),a._stage.renderView.events.on("force-camera-for-screenshot",b=>{this._updateOverlays(b,w.RenderRequestType.BACKGROUND);this.renderer.hasOverlays&&
this._drawOverlayTextures(this.renderer.overlays,w.RenderRequestType.BACKGROUND,b)})]);this._updateLayerViews()};g.destroy=function(){this._drapeSources.forEach((a,b)=>this.unregisterDrapeSource(b));this._drapeTargets.forEach(a=>this._unregisterDrapeTarget(a));this.renderer.dispose();this._handles&&(this._handles.destroy(),this._handles=null);m.isSome(B)&&(B.hide(),B=null)};g.setSpatialReference=function(a){this._spatialReference=a;this.renderer.spatialReference=a;this._longitudeCyclical=null;const b=
this.view.renderSpatialReference;m.isSome(a)&&m.isSome(b)?(this._renderSR=b,this._overlaySREqualsRenderSR=a.equals(this._renderSR),this._isSpherical&&(this._longitudeCyclical=a.isWebMercator?new M.Cyclical(-2.0037508342787E7,2.0037508342787E7):new M.Cyclical(-180,180),this.renderer.longitudeCyclical=this._longitudeCyclical),this.renderer&&(this.renderer.worldToPCSRatio=this._worldToPCSRatio)):this.renderer.disposeOverlays()};g._updateLayerViews=function(){if(this._layerViewsDirty){var a=new Set;for(var b of this.view.allLayerViews.items)a.add(b.uid),
"drapeSourceType"in b&&!this._drapeSources.has(b)&&this._registerDrapeSource(b,F.DrapeSourceRegistration.LAYER_VIEW),"drapeTargetType"in b&&!this._drapeTargets.has(b)&&this._registerDrapeTarget(b);b=this.view.graphicsView;m.isSome(b)&&!this._drapeSources.has(b)&&(this._registerDrapeSource(b,F.DrapeSourceRegistration.LAYER_VIEW),a.add(b.uid));this._drapeSources.forEach((c,e)=>{c!==F.DrapeSourceRegistration.LAYER_VIEW||a.has(e.uid)||this.unregisterDrapeSource(e)});this._drapeTargets.forEach(c=>{a.has(c.uid)||
this._unregisterDrapeTarget(c)});this.renderer.updateLayerOrder();this._setDrawTexturesDirty();this._layerViewsDirty=!1}};g.registerDrapeSource=function(a){this._registerDrapeSource(a,F.DrapeSourceRegistration.EXTERNAL)};g._registerDrapeSource=function(a,b){this._drapeSources.set(a,b);this.renderer.ensureOverlays(this._drapeTargets,this._drapeSources);this._updateDrapeSourceExtent(a);this._setContentDirty();this.notifyChange("running")};g._updateDrapeSourceExtent=function(a){2===this.renderer.overlays.length&&
m.isSome(a.setDrapingExtent)&&m.isSome(this._spatialReference)&&a.setDrapingExtent(this.renderer.overlays,this._spatialReference)};g.unregisterDrapeSource=function(a){this._drapeSources.has(a)&&(this._drapeSources.delete(a),this.renderer.ensureDrapeSources(this._drapeSources),this._setContentDirty(),this.notifyChange("running"))};g._registerDrapeTarget=function(a){this._drapeTargets.add(a);this._updateDrapeTarget(a);this.renderer.ensureOverlays(this._drapeTargets,this._drapeSources)};g.updateDrapeTargets=
function(){this._drapeTargets.forEach(a=>this._updateDrapeTarget(a))};g._updateDrapeTarget=function(a){a.setDrapingTextures(this.renderer.overlays)};g._unregisterDrapeTarget=function(a){this._drapeTargets.delete(a);this.renderer.ensureDrapeTargets(this._drapeTargets)};g._setContentDirty=function(){this.setPlacementDirty();this._setDrawTexturesDirty()};g.setPlacementDirty=function(){this._placementDirty=!0};g.runTask=function(){this._updateOverlays(this.view.state.camera,w.RenderRequestType.UPDATE)};
g._updateOverlays=function(a,b){if(this._spatialReference){this._updateLayerViews();var c=ea.computeOverlayResolution(a.fullWidth,a.fullHeight,this._maxResolution);this._computeOverlayExtents(a,c,y);var e=l.width(y.inner)/l.width(y.outer);this.renderer.ensureOverlays(this._drapeTargets,this._drapeSources);a=this._updateOverlay(q.OverlayIndex.INNER,y.inner,c,1*y.pixelRatioAdjustment,y.mapUnitsPerPixel);c=this._updateOverlay(q.OverlayIndex.OUTER,y.outer,c,e*y.pixelRatioAdjustment,y.mapUnitsPerPixel);
if(a===v.EXTENT||c===v.EXTENT)this._drapeSources.forEach((d,f)=>this._updateDrapeSourceExtent(f)),this.surface.updateTileOverlayParams(b);a===v.NONE&&c===v.NONE||this._setDrawTexturesDirty();this._placementDirty=!1}};g._updateOverlay=function(a,b,c,e,d){if(0===this.renderer.overlays.length)return v.NONE;a=this.renderer.overlays[a];const f=a.mapUnitsPerPixel;a.mapUnitsPerPixel=d;a.pixelRatio=e;{e=a.extent;const u=L.TESTS_DISABLE_OPTIMIZATIONS?0:1E-5*Math.max(b[2]-b[0],b[3]-b[1],e[2]-e[0],e[3]-e[1]);
e=Math.abs(e[0]-b[0])<=u&&Math.abs(e[1]-b[1])<=u&&Math.abs(e[2]-b[2])<=u&&Math.abs(e[3]-b[3])<=u}if(e&&c===a.resolution)return f===d?v.NONE:v.RERENDER_ONLY;l.copy(a.extent,b);a.resolution=c;b=l.center(a.extent);a.renderLocalOrigin=ia.fromValues(b[0],b[1],0,`OV_${this._latestOriginId++}`);return v.EXTENT};g.setTileParameters=function(a){const b=a.renderData.overlay;if(0<this.renderer.overlays.length){const c=this.renderer.overlays[q.OverlayIndex.INNER],e=this.renderer.overlays[q.OverlayIndex.OUTER];
a=l.intersection(a.extent,this.surface.extent,S);this._rectInsideRect(c.extent,a)||this._rectanglesOverlap(a,c.extent)||this._rectanglesOverlap(a,e.extent)?(this._setTileOverlayData(a,q.OverlayIndex.INNER,b),this._setTileOverlayData(a,q.OverlayIndex.OUTER,b)):(this._clearTileOverlayData(q.OverlayIndex.INNER,b),this._clearTileOverlayData(q.OverlayIndex.OUTER,b))}else this._clearTileOverlayData(q.OverlayIndex.INNER,b),this._clearTileOverlayData(q.OverlayIndex.OUTER,b)};g.overlayPixelSizeInMapUnits=
function(a){if(0===this.renderer.overlays.length)return 0;const b=this.renderer.overlays[q.OverlayIndex.INNER],c=this.renderer.overlays[q.OverlayIndex.OUTER];a=this._pointIsInExtent(a,b.extent)?b:c;return(a.extent[2]-a.extent[0])/a.resolution};g._setTileOverlayData=function(a,b,c){if(0!==this.renderer.overlays.length){var e=this.renderer.overlays[b].extent,d=l.width(e),f=l.height(e),u=a[0];if(this._longitudeCyclical){u=this._longitudeCyclical.minimalMonotonic(e[0],u);const t=this._longitudeCyclical.minimalMonotonic(e[0],
a[2]);u>t&&(u=t-(a[2]-a[0]))}c.setScale(b,l.width(a)/d,l.height(a)/f);c.setOffset(b,(u-e[0])/d,(a[1]-e[1])/f)}};g._clearTileOverlayData=function(a,b){b.setScale(a,-1,-1);b.setOffset(a,-1,-1)};g.reloadShaders=function(){var a=I._asyncToGenerator(function*(){ja.removeLoadedShaderModules();yield this.renderer.reloadShaders();this._setDrawTexturesDirty();this.runTask()});return function(){return a.apply(this,arguments)}}();g._dispatchAnimationUpdate=function(a){const b=X.Milliseconds(a.time-this._animationTimeLast);
if(b>=this.surface.view._stage.renderView.animationTimestep||m.isSome(this.forcedAnimationTime)||this._drawTexturesDirty||this._drawTexturesAnimateDirty)this.renderer.updateAnimation({dt:b,forcedTime:this.forcedAnimationTime,camera:this.view.state.camera})&&(this._drawTexturesAnimateDirty=!0),this._animationTimeLast=a.time};g._setDrawTexturesDirty=function(){this.renderer.hasOverlays?this._drawTexturesDirty=this._contentUpdated=!0:this.setPlacementDirty()};g._intersectGroundFromView=function(a,b,
c,e){c=this.view.sceneIntersectionHelper.getCenterRayWithSubpixelOffset(a,ma,b,c);if(m.isNone(c))return!1;b=c.origin;c=D.add(H,c.origin,c.direction);this._groundIntersector.reset(b,c,a);this._groundIntersector.intersect([],null);this.view.basemapTerrain.intersect(this._groundIntersector,null,b,c);return this._groundIntersector.results.min.getIntersectionPoint(e)};g._findHorizonBasedPointOfInterest=function(a,b){var c=.5;c=this.view.renderCoordsHelper.getAltitude(a.eye);const e=this.view.pointsOfInterest.centerOnSurfaceFrequent;
var d=J.clamp(e.estimatedSurfaceAltitude,a.aboveGround?-Infinity:c+1E-5,a.aboveGround?c-1E-5:Infinity);c=a.aboveGround;if("global"===this.view.viewingMode){var f=H;R.closestPointOnSilhouette(R.fromRadius(E.getReferenceEllipsoid(this.view.spatialReference).radius+d),Q.wrap(a.eye,a.viewForward),f);D.subtract(f,f,a.eye);d=M.cyclicalPI.normalize(aa.angleAroundAxis(a.viewForward,f,a.viewRight))/a.fovY+.5;f=0>=d||1<=d?.5:.55;c=c?f*d:d+f*(1-d)}else d=O.fromValues(0,Math.tan(.5*Math.PI-Math.acos(-a.viewForward[2])),
1,0),d=K.transformMat4(d,d,a.projectionMatrix)[1],d=J.clamp(.5+.5*d,0,1),c=1===d||0===d?.5:c?.55*d:1-.55*(1-d);return this._intersectGroundFromView(a,.5,c,b)?D.sqrDist(b,a.eye)<e.distance*e.distance:!1};g._computeOverlayExtents=function(a,b,c){var e=this.view.pointsOfInterest.centerOnSurfaceFrequent.renderLocation,d=N.create();this._findHorizonBasedPointOfInterest(a,d)||D.copy(d,e);var f=Math.max(.1,D.distance(a.eye,d));e=ca.viewAngle(this.view.renderCoordsHelper,e,a.eye);const u=Math.PI/2-Math.abs(e-
Math.PI/2);L.OVERLAY_SHOW_CENTER?(m.isNone(B)&&(B=new da.PointGraphics(this.view.graphics,"red")),B.show(d,this._renderSR)):m.isSome(B)&&B.hide();this._overlaySREqualsRenderSR||P.projectVectorToVector(d,this._renderSR,d,this._spatialReference);e=this.surface.extent;var t=!this._isSpherical&&m.isSome(this._spatialReference)&&this._spatialReference.isGeographic,z=t&&m.isSome(this._spatialReference)?1/E.getReferenceEllipsoid(this._spatialReference).metersPerDegree:1;f=a.perRenderPixelRatio*f*z;c.mapUnitsPerPixel=
f/this._worldToPCSRatio;f=b*f/2;var h=!1;t=t?90:Infinity;this._isSpherical&&m.isSome(e)&&m.isSome(this._spatialReference)&&(this._spatialReference.isWebMercator?(f/=Math.cos(ba.y2lat(d[1])),t=e[3]):(h=!0,f/=E.getReferenceEllipsoid(this._spatialReference).metersPerDegree,t=90),f>=t&&(f=t,d[1]=0,this._spatialReference.isWebMercator&&(d[0]=0)));z=1;h&&(z=1/Math.max(.2,Math.cos(Math.abs(J.deg2rad(d[1])))),180<f*z&&(z=180/f),c.mapUnitsPerPixel*=z);h=Math.log(2)/12;f=Math.exp(Math.round(Math.log(f)/h)*
h);const C=f*z;h=.5*b/(32*C);var k=.5*b/(32*f);d[0]=Math.round(d[0]*h)/h;d[1]=Math.round(d[1]*k)/k;h=c.inner;h[0]=d[0]-C;h[1]=d[1]-f;h[2]=d[0]+C;h[3]=d[1]+f;this._isSpherical&&this._shiftExtentToFitBounds(h,Infinity,t);k=c.outer;6*C>l.width(e)?l.copy(k,m.unwrap(e)):u<=.25*Math.PI?(k[0]=h[0]-C,k[1]=h[1]-f,k[2]=h[2]+C,k[3]=h[3]+f):(P.projectVectorToVector(a.eye,this._renderSR,H,this._spatialReference),Z.subtract(A,d,H),a=-Math.atan2(A[1],A[0])+.125*Math.PI,0>a&&(a+=2*Math.PI),K.scale(A,la[Math.floor(a/
(.25*Math.PI))],2*f),A[0]*=z,A[2]*=z,K.add(k,h,A));this._isSpherical?(k[0]=this._longitudeCyclical.clamp(k[0]),k[2]=this._longitudeCyclical.clamp(k[2]),k[1]=Math.max(k[1],-t),k[3]=Math.min(k[3],t)):(a=l.intersection(h,e,S),d=l.intersection(k,e,na),l.contains(a,d)&&(k[2]=k[0],k[3]=k[1]));b=Math.abs(h[2]-h[0])/b;c.mapUnitsPerPixel=Math.max(c.mapUnitsPerPixel,b);c.pixelRatioAdjustment=c.mapUnitsPerPixel/b};g._drawOverlayTextures=function(a,b,c=this.view.state.camera){if(0!==a.length&&(this._drawTexturesDirty||
this._drawTexturesAnimateDirty)){var e=this._drawTexturesDirty;this._drawTexturesAnimateDirty=this._drawTexturesDirty=!1;var d=this._drawOverlay(a[q.OverlayIndex.INNER],c);a=this._drawOverlay(a[q.OverlayIndex.OUTER],c);d!==w.ValidationState.CHANGED&&a!==w.ValidationState.CHANGED||this.surface.updateTileOverlayParams(w.RenderRequestType.UPDATE);this._collectUnusedRenderTargetMemory();this.updateDrapeTargets();e?(this.surface.requestRender(b),b===w.RenderRequestType.UPDATE&&this.surface.requestUpdate()):
this.surface.requestRender(w.RenderRequestType.BACKGROUND)}};g._drawOverlay=function(a,b){this._longitudeCyclical?a.setupGeometryViewsCyclical(this._longitudeCyclical):a.setupGeometryViewsDirect();return a.draw(this.renderer,b.pixelRatio)};g._collectUnusedRenderTargetMemory=function(){this._hasUnusedRenderTargets=!1;if(this.renderer.hasOverlays){const a=performance.now();this._hasUnusedRenderTargets=this.renderer.collectUnusedRenderTargetMemory(a)}};g._rectanglesOverlap=function(a,b){return m.isNone(a)?
!1:this._longitudeCyclical?(this._longitudeCyclical.contains(b[0],b[2],a[0])||this._longitudeCyclical.contains(b[0],b[2],a[2])||this._longitudeCyclical.contains(a[0],a[2],b[0]))&&!(a[1]>b[3]||a[3]<b[1]):l.intersects(a,b)};g._rectInsideRect=function(a,b){return m.isNone(b)?!1:this._longitudeCyclical?this._longitudeCyclical.contains(a[0],a[2],b[0])&&this._longitudeCyclical.contains(a[0],a[2],b[2])&&b[1]>a[1]&&b[3]<a[3]:l.contains(a,b)};g._pointIsInExtent=function(a,b){if(this._longitudeCyclical)return this._longitudeCyclical.contains(b[0],
b[2],a.x)&&a.y>=b[1]&&a.y<=b[3];const c=a.x;a=a.y;return c>b[0]&&c<b[2]&&a>b[1]&&a<b[3]};g._shiftExtentToFitBounds=function(a,b,c){let e=0,d=0;a[0]<-b?e=a[0]+b:a[2]>b&&(e=b-a[2]);a[1]<-c?d=a[1]+c:a[3]>c&&(d=c-a[3]);l.offset(a,e,d)};I._createClass(G,[{key:"running",get:function(){return(this._placementDirty||this._layerViewsDirty)&&(0<this._drapeSources.size||0<this.view.graphics.length||L.OVERLAY_DRAW_DEBUG_TEXTURE)&&!!this._spatialReference&&!this.suspended&&this.surface.ready}},{key:"_isSpherical",
get:function(){return this.view.state.isGlobal}},{key:"_worldToPCSRatio",get:function(){return m.isSome(this._spatialReference)&&this._spatialReference.isGeographic&&!this.view.state.isLocal?E.getReferenceEllipsoid(this._spatialReference).metersPerDegree:1}},{key:"view",get:function(){return this.surface.view}},{key:"updating",get:function(){return this.running||this.renderer.updating||this._contentUpdated}},{key:"hasHighlights",get:function(){return this.renderer.hasHighlights}},{key:"rendersOccluded",
get:function(){return this.renderer.rendersOccluded}},{key:"hasOverlays",get:function(){return this.renderer.hasOverlays}},{key:"gpuMemoryUsage",get:function(){return this.renderer.gpuMemoryUsage}},{key:"test",get:function(){return{renderer:this.renderer,update:()=>this.runTask()}}}]);return G}(T);p.__decorate([r.property()],n.OverlayManager.prototype,"_spatialReference",void 0);p.__decorate([r.property({readOnly:!0})],n.OverlayManager.prototype,"running",null);p.__decorate([r.property()],n.OverlayManager.prototype,
"_placementDirty",void 0);p.__decorate([r.property()],n.OverlayManager.prototype,"_contentUpdated",void 0);p.__decorate([r.property()],n.OverlayManager.prototype,"_layerViewsDirty",void 0);p.__decorate([r.property()],n.OverlayManager.prototype,"_isSpherical",null);p.__decorate([r.property()],n.OverlayManager.prototype,"_worldToPCSRatio",null);p.__decorate([r.property()],n.OverlayManager.prototype,"renderer",void 0);p.__decorate([r.property({constructOnly:!0})],n.OverlayManager.prototype,"surface",
void 0);p.__decorate([r.property({readOnly:!0,aliasOf:"surface.suspended"})],n.OverlayManager.prototype,"suspended",void 0);p.__decorate([r.property({readOnly:!0})],n.OverlayManager.prototype,"updating",null);p.__decorate([r.property({type:Boolean})],n.OverlayManager.prototype,"hasHighlights",null);p.__decorate([r.property({type:Boolean})],n.OverlayManager.prototype,"rendersOccluded",null);n.OverlayManager=p.__decorate([Y.subclass("esri.views.3d.terrain.OverlayManager")],n.OverlayManager);const A=
O.create(),H=N.create(),y={inner:l.create(),outer:l.create(),mapUnitsPerPixel:0,pixelRatioAdjustment:1},S=l.create(),na=l.create(),ma=Q.create();var v;(function(x){x[x.NONE=0]="NONE";x[x.EXTENT=1]="EXTENT";x[x.RERENDER_ONLY=2]="RERENDER_ONLY"})(v||(v={}));Object.defineProperty(n,"__esModule",{value:!0})});