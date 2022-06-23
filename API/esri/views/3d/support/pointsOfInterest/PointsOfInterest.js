// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/Handles ../../../../core/maybe ../../../../core/watchUtils ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../geometry/support/ray ../debugFlags ../debugUtils ../PropertiesPool ../geometryUtils/ray ./CameraOnSurface ./CenterOnSurface ./ContentGeometryUpdates ./Focus ./StableSurfaceCenter ./SurfaceGeometryUpdates ../../webgl-engine/lib/Intersector ../../webgl-engine/lib/IntersectorInterfaces ../../webgl-engine/lib/verticalOffsetUtils ../../../support/Scheduler".split(" "),
function(b,w,d,F,G,q,x,e,V,W,X,H,r,z,A,I,k,J,K,B,t,L,M,N,O,C,P,Q,m){b.PointsOfInterest=function(D){function u(a){a=D.call(this,a)||this;a._handles=new G;a._tmpRay=A.create();a._centerRayDirty=!0;a._surfaceAltitudeAtCenter=0;a._surfaceAltitudeAtCenterDirty=!0;a._contentAltitudeAtCenter=0;a._contentAltitudeAtCenterDirty=!0;a._propertiesPool=new J.PropertiesPool({renderPointOfView:R},w._assertThisInitialized(a));a.renderPointOfView=z.create();a._pois=[];a._debugCenters=new Map;return a}w._inheritsLoose(u,
D);var h=u.prototype;h.initialize=function(){var a;const {state:c,basemapTerrain:f,renderCoordsHelper:p,map:v}=this.view;this._surfaceIntersector=C.newIntersector(c.viewingMode);this._surfaceIntersector.options.backfacesTerrain=c.isGlobal?!1:!0;this._surfaceIntersector.options.invisibleTerrain=!1;this._surfaceIntersector.options.store=P.StoreResults.MIN;this._contentIntersector=C.newIntersector(c.viewingMode);var g=()=>this._estimateSurfaceAltitudeAtCenter();const E=this.view.resourceController.scheduler,
y=q.unwrap(null==(a=this.view.basemapTerrain)?void 0:a.elevationQueryCache);a={state:c,scheduler:E,surface:f,renderCoordsHelper:p};this._set("centerOnSurfaceInfrequent",new t.default({...a,task:m.TaskPriority.POINT_OF_INTEREST_INFREQUENT,estimateSurfaceAltitudeAtCenter:g}));this._set("centerOnSurfaceFrequent",new t.default({...a,task:m.TaskPriority.POINT_OF_INTEREST_FREQUENT,estimateSurfaceAltitudeAtCenter:g}));this._set("contentCenterOnSurface",new t.default({...a,task:m.TaskPriority.POINT_OF_INTEREST_INFREQUENT,
estimateSurfaceAltitudeAtCenter:g,cameraName:"contentCamera"}));this._set("centerOnContent",new t.default({...a,task:m.TaskPriority.POINT_OF_INTEREST_FREQUENT,estimateSurfaceAltitudeAtCenter:()=>this._estimateContentAltitudeAtCenter()}));this._set("cameraOnSurface",new B.default({...a,cache:y,task:m.TaskPriority.POINT_OF_INTEREST_INFREQUENT,map:v}));this._set("contentCameraOnSurface",new B.default({...a,cache:y,task:m.TaskPriority.POINT_OF_INTEREST_INFREQUENT,map:v,cameraName:"contentCamera"}));this._set("surfaceGeometryUpdates",
new O.SurfaceGeometryUpdates({...a,centerOnSurfaces:[this.centerOnSurfaceFrequent,this.centerOnContent,this.centerOnSurfaceInfrequent]}));this._set("contentGeometryUpdates",new L.ContentGeometryUpdates({contentLayerViews:this.view.allLayerViews,renderCoordsHelper:p}));this._set("surfaceOrigin",new N.StableSurfaceCenter({cache:y,view:this.view}));this._set("focus",new M.default({state:c,scheduler:E,surface:f,renderCoordsHelper:p,centerOnSurface:this.contentCenterOnSurface,estimateSurfaceIntersectionAtRenderPoint:(l,
S)=>this._estimateSurfaceIntersectionAtRenderPoint(l,this.view.state.contentCamera,S)}));this._pois.push(this.centerOnContent,this.centerOnSurfaceFrequent,this.centerOnSurfaceInfrequent,this.contentCenterOnSurface,this.cameraOnSurface,this.contentCameraOnSurface,this.focus);g=this.view.graphics;this._debugCenters.set(this.centerOnContent,new k.PointGraphics(g,"red","CenterOnContent"));this._debugCenters.set(this.centerOnSurfaceFrequent,new k.PointGraphics(g,"red","CenterOnSurface"));this._debugCenters.set(this.centerOnSurfaceInfrequent,
new k.PointGraphics(g,"red","CenterOnSurface"));this._debugCenters.set(this.contentCenterOnSurface,new k.PointGraphics(g,"red","ContentCenterOnSurface"));this._debugCenters.set(this.cameraOnSurface,new k.PointGraphics(g,"blue","CameraOnSurface"));this._debugCenters.set(this.contentCameraOnSurface,new k.PointGraphics(g,"blue","ContentCameraOnSurface"));this._debugCenters.set(this.focus,new k.PointGraphics(g,"green","Focus"));this._handles.add([c.watch("camera",l=>this._cameraChanged(l),!0),f.watch("extent",
()=>this._updateCenterPointsOfInterest()),x.whenFalse(f,"updating",()=>this._updateCenterPointsOfInterest(),!0),this.surfaceGeometryUpdates.events.on("request-update",()=>this._updateCenterPointsOfInterest()),this.contentGeometryUpdates.events.on("request-update",()=>this._updateCenterOnContent()),x.init(I,"SHOW_POI",l=>this._setDebug(l))]);this._cameraChanged(this.view.state.camera);for(const l of this._pois)l.runTask()};h.destroy=function(){this._setDebug(!1);this._handles.destroy();this._propertiesPool.destroy();
for(const a of this._pois)a.destroy();this.surfaceOrigin.destroy()};h._estimateContentAltitudeAtCenter=function(){if(!this._contentAltitudeAtCenterDirty)return this._contentAltitudeAtCenter;this._contentAltitudeAtCenterDirty=!1;const a=this.centerRay;if(q.isNone(a))return this._contentAltitudeAtCenter;this.view.sceneIntersectionHelper.intersectRay(a,this._contentIntersector,n,T)?this._contentAltitudeAtCenter=this.view.renderCoordsHelper.getAltitude(n):this._contentAltitudeAtCenter=this._estimateSurfaceAltitudeAtCenter();
return this._contentAltitudeAtCenter};h._estimateSurfaceAltitudeAtCenter=function(){if(!this.view.basemapTerrain)return 0;if(!this._surfaceAltitudeAtCenterDirty)return this._surfaceAltitudeAtCenter;this._surfaceAltitudeAtCenterDirty=!1;const a=this.centerRay;if(q.isNone(a))return this._surfaceAltitudeAtCenter;const c=a.origin,f=r.add(n,a.origin,a.direction);this._surfaceIntersector.resetWithRay(a,this.view.state.camera);this.view.basemapTerrain.intersect(this._surfaceIntersector,null,c,f);this._surfaceIntersector.results.min.getIntersectionPoint(n)&&
(this._surfaceAltitudeAtCenter=this.view.renderCoordsHelper.getAltitude(n));return this._surfaceAltitudeAtCenter};h._estimateSurfaceIntersectionAtRenderPoint=function(a,c,f){a=K.fromRenderAtEye(c,a,U);if(q.isNone(a))return null;const p=a.origin,v=r.add(n,a.origin,a.direction);this._surfaceIntersector.resetWithRay(a,c);this.view.basemapTerrain.intersect(this._surfaceIntersector,null,p,v);return this._surfaceIntersector.results.min.getIntersectionPoint(f)?f:null};h._cameraChanged=function(a){this._updateCenterPointsOfInterest();
a=a.eye;r.exactEquals(this.renderPointOfView,a)||this._set("renderPointOfView",r.copy(this._propertiesPool.get("renderPointOfView"),a))};h._updateCenterPointsOfInterest=function(){this._contentAltitudeAtCenterDirty=this._surfaceAltitudeAtCenterDirty=this._centerRayDirty=!0;for(const a of this._pois)a.updateRenderLocation()};h._updateCenterOnContent=function(){this._contentAltitudeAtCenterDirty=!0;this.centerOnContent.updateRenderLocation()};h._setDebug=function(a){if(a)for(const c of this._pois)this._handles.add(x.init(c,
"renderLocation",f=>this._debugCenters.get(c).show(f,c.renderCoordsHelper.spatialReference)),"debug");else this._debugCenters.forEach(c=>c.hide()),this._handles.remove("debug")};w._createClass(u,[{key:"updating",get:function(){var a;return!!(null!=(a=this.surfaceGeometryUpdates)&&a.updating||this._pois.some(c=>c.updating))}},{key:"centerRay",get:function(){this._centerRayDirty&&(this._centerRay=this.view.sceneIntersectionHelper.getCenterRayWithSubpixelOffset(this.view.state.camera,this._tmpRay),this._centerRayDirty=
!1);return this._centerRay}},{key:"test",get:function(){return{update:()=>{this.surfaceGeometryUpdates.runTask();for(const a of this._pois)a.runTask()},surfaceGeometryUpdates:this.surfaceGeometryUpdates}}}]);return u}(F);d.__decorate([e.property({readOnly:!0})],b.PointsOfInterest.prototype,"centerOnContent",void 0);d.__decorate([e.property({readOnly:!0})],b.PointsOfInterest.prototype,"centerOnSurfaceFrequent",void 0);d.__decorate([e.property({readOnly:!0})],b.PointsOfInterest.prototype,"centerOnSurfaceInfrequent",
void 0);d.__decorate([e.property({readOnly:!0})],b.PointsOfInterest.prototype,"contentCenterOnSurface",void 0);d.__decorate([e.property({readOnly:!0})],b.PointsOfInterest.prototype,"cameraOnSurface",void 0);d.__decorate([e.property({readOnly:!0})],b.PointsOfInterest.prototype,"contentCameraOnSurface",void 0);d.__decorate([e.property({readOnly:!0})],b.PointsOfInterest.prototype,"focus",void 0);d.__decorate([e.property({readOnly:!0})],b.PointsOfInterest.prototype,"renderPointOfView",void 0);d.__decorate([e.property({readOnly:!0})],
b.PointsOfInterest.prototype,"surfaceOrigin",void 0);d.__decorate([e.property({readOnly:!0})],b.PointsOfInterest.prototype,"contentGeometryUpdates",void 0);d.__decorate([e.property({readOnly:!0})],b.PointsOfInterest.prototype,"surfaceGeometryUpdates",void 0);d.__decorate([e.property({constructOnly:!0})],b.PointsOfInterest.prototype,"view",void 0);d.__decorate([e.property({readOnly:!0})],b.PointsOfInterest.prototype,"updating",null);b.PointsOfInterest=d.__decorate([H.subclass("esri.views.3d.support.PointsOfInterest")],
b.PointsOfInterest);const R=Array,n=z.create(),U=A.create(),T={exclude:new Set([Q.TERRAIN_ID])};b.default=b.PointsOfInterest;Object.defineProperty(b,"__esModule",{value:!0})});