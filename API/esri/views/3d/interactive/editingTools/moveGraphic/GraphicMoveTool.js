// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/Collection ../../../../../core/Evented ../../../../../core/HandleOwner ../../../../../core/Handles ../../../../../core/handleUtils ../../../../../core/maybe ../../../../../core/accessorSupport/decorators/property ../../../../../core/arrayUtils ../../../../../core/has ../../../../../core/accessorSupport/ensureType ../../../../../core/accessorSupport/decorators/subclass ../../../../../layers/graphics/dehydratedFeatures ../../../../../support/elevationInfoUtils ../../manipulatorUtils ../../SnappingVisualizer3D ../isSupportedGraphicUtils ../manipulatorUtils ../visualElementUtils ../manipulations/config ../manipulations/MoveManipulation ../manipulations/moveUtils ../manipulations/MoveXYGraphicManipulation ./isSupportedGraphic ../../visualElements/OutlineVisualElement ../../../layers/graphics/GraphicState ../../../../interactive/dragEventPipeline ../../../../interactive/InteractiveToolBase ../../../../interactive/editGeometry/EditGeometryOperations ../../../../interactive/snapping/SnappingContext ../../../../interactive/snapping/SnappingDragPipelineStep".split(" "),
function(k,z,r,G,H,I,J,K,w,u,ca,da,ea,L,M,x,N,O,P,Q,R,S,y,T,U,V,B,W,C,X,Y,Z,aa){let D=function(n){this.allGraphics=n;this.type="graphic-move-start"},E=function(n,q,l){this.dx=n;this.dy=q;this.allGraphics=l;this.type="graphic-move"},A=function(n){this.allGraphics=n;this.type="graphic-move-stop"};k.GraphicMoveTool=function(n){function q(a){a=n.call(this,a)||this;a.graphics=new G;a.enableZ=!0;a.type="move-3d";a._toolHandles=new J;a.snappingPipeline=new aa.SnappingPipeline;return a}z._inheritsLoose(q,
n);var l=q.prototype;l.initialize=function(){this._toolHandles.add([this.graphics.on("change",()=>this._refreshManipulators())]);this._refreshManipulators();this.finishToolCreation()};l.destroy=function(){this._toolHandles.destroy();this._toolHandles=null;this.graphics.removeAll();this._set("view",null)};l.reset=function(){};l._refreshManipulators=function(){this.handles.removeAll();this._moveManipulation&&this._moveManipulation.destroy();this.manipulators.removeAll();const a=this.graphics.toArray().filter(b=>
V.isSupportedGraphic(b)===P.SupportedGraphicResult.SUPPORTED).map(b=>new ba(b));a.length&&(this._createManipulators(a),this._createVisualElements(a),this.handles.add(a.map(b=>this.view.trackGraphicState(b.state))),this._updateMoveManipulation(a))};l._createManipulators=function(a){for(const b of a){const f=b.state;b.manipulationXY=new U.MoveXYGraphicManipulation({tool:this,view:this.view,graphicState:f});b.manipulationXY.forEachManipulator(c=>this.handles.add(c.events.on("immediate-click",d=>{this.emit("immediate-click",
{...d,graphic:f.graphic});d.stopPropagation()})));this.handles.add(b.manipulationXY.createDragPipeline((c,d,e,m)=>this._buildDragEventPipeline(a,y.ManipulationType.XY,c,d,e,m)))}this._createMoveManipulation(a)};l._createMoveManipulation=function(a){const b=new y.MoveManipulation({tool:this,view:this.view,snapToScene:!1,xyAvailable:!0,xyAxisAvailable:!0,zAvailable:!0,radius:1===a.length?y.MoveManipulation.radiusForSymbol(a[0].graphic.symbol):S.DISC_RADIUS});this._moveManipulation=b;b.elevationInfo=
{mode:"absolute-height",offset:0};b.forEachManipulator(d=>{this.handles.add(d.events.on("immediate-click",e=>{b.zManipulation.hasManipulator(d)||1!==this.graphics.length||this.emit("immediate-click",{...e,graphic:this.graphics.getItemAt(0)});e.stopPropagation()}))});const f=()=>this._updateMoveManipulation(a);for(const d of a)this.handles.add([d.state.on("changed",f),d.state.watch("displaying",f)]);const c=a[a.length-1];this.handles.add(c.state.on("changed",()=>this._updateMoveManipulationAngle(c)));
this.handles.add(b.createDragPipeline((d,e,m,h,t)=>this._buildDragEventPipeline(a,d,e,m,h,t),x.getGraphicEffectiveElevationInfo(c.graphic),w.unwrap(c.graphic.geometry).spatialReference,c.graphic));this._updateMoveManipulationAngle(c)};l._createVisualElements=function(a){for(const b of a){const f=R.createVisualElements({view:this.view,graphic:b.graphic,forEachManipulator:c=>{b.manipulationXY.forEachManipulator(c);this._moveManipulation.forEachManipulator(c)},onManipulatorsChanged:()=>K.makeHandle()});
w.isNone(f)||(b.geometryRepresentation=f.visualElement,b.geometryRepresentation instanceof B.OutlineVisualElement&&this.handles.add([b.geometryRepresentation.events.on("attachment-origin-changed",()=>{b.state.isDraped||this._updateMoveManipulation(a)}),b.state.watch("isDraped",()=>this._updateMoveManipulation(a))]),this.handles.add(f))}};l._updateMoveManipulationAngle=function(a){this._moveManipulation.angleDeferred=()=>T.shapeOrientation(a.graphic.geometry)};l._updateMoveManipulation=function(a){const b=
M.makeDehydratedPoint(0,0,0,this.view.spatialReference);let f=0,c=!1;const d=this._moveManipulation;for(const e of a)e.state.displaying&&(a=e.state.graphic,this.enableZ&&Q.canMoveZ(a)&&(c=!0),a=e.geometryRepresentation instanceof B.OutlineVisualElement&&!e.state.isDraped?e.geometryRepresentation.attachmentOrigin:N.getGraphicAttachmentOrigin(this.view,a),w.isSome(a)&&(b.x+=a.x,b.y+=a.y,b.z+=a.z,f++));0<f?(b.x/=f,b.y/=f,b.z/=f,d.location=b,d.xyManipulation.available=!0,d.xyAxisManipulation.available=
!0,d.zManipulation.available=c):d.available=!1};l._buildDragEventPipeline=function(a,b,f,c,d,e){const m=[],h=[];let t=null,v=null;const F=()=>{for(const g of m)g.dragging=!1;m.length=0;h.length=0;v=t=null;this._moveManipulation.interactive=!0};1===a.length&&b===y.ManipulationType.XY&&(b=a[0].graphic,c=this._buildSnappingPipelineSteps(b,x.getGraphicEffectiveElevationInfo(b),c,d,e));c=c.next(g=>{if("start"===g.action){m.length=0;h.length=0;for(const p of a)p.dragging||!p.manipulationXY.hasManipulator(f)&&
p.manipulationXY.grabbing||(m.push(p),h.push(p.graphic),p.dragging=!0);if(0!==h.length&&(this._moveManipulation.interactive=!1,t=C.dragGraphicMany(h,this.view.state.viewingMode),v=C.resetGraphicMany(h),this.emit("graphic-move-start",new D(h)),this.destroyed))return null}return 0!==h.length?g:null}).next(g=>t(g)).next(g=>{switch(g.action){case "start":case "update":if(g.translationX||g.translationY||g.translationZ){const p=this.view.toScreen(g.mapStart);g=this.view.toScreen(g.mapEnd);this.emit("graphic-move",
new E(g.x-p.x,g.y-p.y,h));if(this.destroyed)return null}break;case "end":this.emit("graphic-move-stop",new A(h));if(this.destroyed)return null;F()}});d.next(g=>v(g)).next(()=>{this.emit("graphic-move-stop",new A(h));if(this.destroyed)return null;F()});return c};l._buildSnappingPipelineSteps=function(a,b,f,c,d){const e=a.geometry;if(w.isNone(e)||"point"!==e.type&&"mesh"!==e.type)return f;const m=("point"===e.type?e:e.anchor).clone(),h=new Z.SnappingContext({elevationInfo:b,pointer:d,editGeometryOperations:Y.EditGeometryOperations.fromGeometry(m,
this.view.state.viewingMode),visualizer:new O.SnappingVisualizer3D,excludeFeature:a});b=this.snappingManager;return f.next(t=>{m.z=x.getConvertedElevation(this.view,m,x.getGraphicEffectiveElevationInfo(a),{mode:"absolute-height",offset:0});const v=h.coordinateHelper.pointToVector(m);return{...t,snapOrigin:v}}).next(this.snappingPipeline.createSnapDragEventPipelineStep({snappingContext:h,snappingManager:b,cancel:c,updatingHandles:this.updatingHandles}),this.snappingPipeline.next)};z._createClass(q,
[{key:"updating",get:function(){return this.updatingHandles.updating}}]);return q}(I.HandleOwnerMixin(H.EventedMixin(X.InteractiveToolBase)));r.__decorate([u.property({constructOnly:!0,nonNullable:!0})],k.GraphicMoveTool.prototype,"view",void 0);r.__decorate([u.property({readOnly:!0})],k.GraphicMoveTool.prototype,"graphics",void 0);r.__decorate([u.property({constructOnly:!0,nonNullable:!0})],k.GraphicMoveTool.prototype,"enableZ",void 0);r.__decorate([u.property({constructOnly:!0})],k.GraphicMoveTool.prototype,
"snappingManager",void 0);r.__decorate([u.property({readOnly:!0})],k.GraphicMoveTool.prototype,"type",void 0);r.__decorate([u.property({readOnly:!0})],k.GraphicMoveTool.prototype,"updating",null);k.GraphicMoveTool=r.__decorate([L.subclass("esri.views.3d.interactive.editingTools.graphicMove3D.GraphicMoveTool")],k.GraphicMoveTool);let ba=function(){function n(q){this.manipulationXY=this.geometryRepresentation=this.state=null;this.dragging=!1;this.state=new W.GraphicState({graphic:q})}z._createClass(n,
[{key:"graphic",get:function(){return this.state.graphic}}]);return n}();k.GraphicMoveEvent=E;k.GraphicMoveStartEvent=D;k.GraphicMoveStopEvent=A;Object.defineProperty(k,"__esModule",{value:!0})});