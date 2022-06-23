// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../Color ../../../../../analysis/LineOfSightAnalysisObserver ../../../../../analysis/LineOfSightAnalysisTarget ../../../../../core/Collection ../../../../../core/Handles ../../../../../core/handleUtils ../../../../../core/Logger ../../../../../core/maybe ../../../../../core/reactiveUtils ../../../../../core/accessorSupport/decorators/property ../../../../../core/arrayUtils ../../../../../core/has ../../../../../core/accessorSupport/ensureType ../../../../../core/accessorSupport/decorators/subclass ../../../../../geometry/support/lineSegment ../../../analysis/LineOfSight/LineOfSightRayIntersector ./LineOfSightToolConfiguration ./lineOfSightToolUtils ../../visualElements/LaserlineVisualElement ../../../../interactive/dragEventPipeline ../../../../interactive/InteractiveToolBase ../../../../interactive/interfaces".split(" "),
function(g,w,h,x,y,q,r,t,z,F,d,k,l,L,M,N,G,A,H,B,C,I,D,J,u){var m;(function(n){n.Ready="ready";n.Creating="creating";n.Created="created"})(m||(m={}));r=r.ofType(q);const E=F.getLogger("esri.views.3d.interactive.analysisTools.lineOfSight.LineOfSightTool");g.LineOfSightTool=function(n){function p(a){a=n.call(this,a)||this;a.configuration=new B.LineOfSightToolConfiguration;a.analysisView=null;a._someManipulatorsFocused=!1;a._laserlineVisualElement=null;a._grabbedManipulator=null;a._analysisHandles=new t;
a._handles=new t;a._manipulatorHandles=new t;a._targetTrackerManipulator=null;return a}w._inheritsLoose(p,n);var c=p.prototype;c.initialize=function(){this._intersector=new H.LineOfSightRayIntersector({view:this.view});this.startToolCreation();this._handles.add(k.watch(()=>this.state,a=>{a===m.Created&&this.finishToolCreation()},k.syncAndInitial));this._observerManipulator=this._createObserverManipulator();this._handles.add([k.watch(()=>({...this.configuration.observer}),()=>this._updateObserverManipulatorStyle(),
k.sync),k.watch(()=>this.analysisView.elevationAlignedObserver,a=>this._onObserverLocationChange(a),k.syncAndInitial),k.watch(()=>({...this.configuration.laserLine}),()=>this._createVisualElements(),k.syncAndInitial),this._connectComputations()])};c.destroy=function(){this._handles=d.destroyMaybe(this._handles);this._manipulatorHandles=d.destroyMaybe(this._manipulatorHandles);this._analysisHandles=d.destroyMaybe(this._analysisHandles);this._observerManipulator=null;this._clearTargetTracker();this._removeVisualElements();
this._intersector=null;this._set("analysis",null)};c.continue=function(){this.view.activeTool=this};c.stop=function(){this.view.activeTool=null};c.onInputEvent=function(a){switch(a.type){case "immediate-double-click":this._doubleClickHandler(a);break;case "key-down":this._keyDownHandler(a);break;case "pointer-move":this._pointerMoveHandler(a)}};c.onInputEventAfter=function(a){switch(a.type){case "immediate-click":this._clickHandler(a)}};c.onShow=function(){this.analysis.visible=!0};c.onHide=function(){this.analysis.visible=
!1};c.onActivate=function(){this._manipulatorFocusChanged()};c.onDeactivate=function(){this._clearTargetTracker();this._manipulatorFocusChanged()};c._connectComputations=function(){let a=null;return z.handlesGroup([k.watch(()=>this.analysisView.computations,b=>{a=d.removeMaybe(a);a=b.on("change",e=>this._onComputationsCollectionChange(e));b.forEach(e=>this._connectComputation(e))},k.syncAndInitial),z.makeHandle(()=>a=d.removeMaybe(a))])};c._onComputationsCollectionChange=function(a){a.added.forEach(b=>
this._connectComputation(b));a.removed.forEach(b=>this._disconnectComputation(b))};c._connectComputation=function(a){if(this.destroyed)E.warn("Attempting to connect an analysis to a destroyed LineOfSight tool. Ignoring.");else{var b=this._analysisHandles;if(!b.has(a)){var e=this._createTargetManipulator(a.target);d.isNone(this._targetTrackerManipulator)&&e.metadata.target===this.analysisView.cursorTarget&&(this._targetTrackerManipulator=e,this._targetTrackerManipulator.available=!1,this._targetTrackerManipulator.interactive=
!1,this._updateLaserLineRenderer());b.add([k.watch(()=>this._getLineOfSightManipulatorStateDependencies(a),()=>this._updateManipulatorState(e,a),k.syncAndInitial),k.watch(()=>a.elevationAlignedTargetLocation,f=>this._onTargetLocationChange(f,e),k.syncAndInitial)],a)}}};c._disconnectComputation=function(a){this.destroyed?E.warn("Attempting to disconnect an analysis from a destroyed LineOfSight tool. Ignoring."):(this._analysisHandles.remove(a),a=this._getTargetManipulator(a.target),d.isSome(a)&&(this.manipulators.remove(a),
this._manipulatorHandles.remove(a),d.isSome(this._targetTrackerManipulator)&&this._targetTrackerManipulator===a&&(this._targetTrackerManipulator=null)))};c._createTargetTracker=function(a){this.analysisView.cursorTarget=new q({position:a.point,intersection:a})};c._clearTargetTracker=function(){d.isSome(this.analysisView.cursorTarget)&&(this.analysisView.cursorTarget=d.destroyMaybe(this.analysisView.cursorTarget))};c._createManipulator=function(a,b,e){const f=C.createSphereManipulator(this.view,a);
f.metadata=e;this._manipulatorHandles.add([b(f),f.events.on("focus-changed",()=>this._manipulatorFocusChanged()),f.events.on("grab-changed",v=>this._manipulatorGrabChanged(f,v)),f.events.on("immediate-click",v=>v.stopPropagation())],f);this.manipulators.add(f);return f};c._createTargetManipulator=function(a){var b=this.configuration;b=this._createManipulator({size:b.target.size,customColor1:b.target.visibleColor,customColor2:b.target.occludedColor,customColor3:b.target.undefinedColor,visible:!0},
e=>this._createTargetManipulatorDragPipeline(e),{target:a,type:"target"});d.isSome(a.position)?b.elevationAlignedLocation=a.position:b.available=!1;return b};c._getTargetManipulator=function(a){let b=null;this.manipulators.forEach(e=>{e=e.manipulator;d.isNone(b)&&"target"===e.metadata.type&&e.metadata.target===a&&(b=e)});return b};c._createObserverManipulator=function(){const a=this.configuration;return this._createManipulator({size:a.observer.size,color:a.observer.color,visible:!0},b=>this._createObserverManipulatorDragPipeline(b),
{type:"observer",intersection:null})};c._updateObserverManipulatorStyle=function(){const a=this._observerManipulator,b=this.configuration.observer;a.renderObjects=C.createSphereManipulatorRenderObjects({size:b.size,color:b.color,visible:a.available})};c._manipulatorFocusChanged=function(){this._someManipulatorsFocused=this.manipulators.some(a=>a.manipulator.focused);this._updateLaserLineRenderer()};c._screenToIntersection=function(){return a=>{const b=this._intersector.getScreenPointIntersection(a.screenEnd);
return d.isNone(b)?null:{...a,intersection:b}}};c._createTargetManipulatorDragPipeline=function(a){return D.createManipulatorDragEventPipeline(a,(b,e,f)=>{e.next(this._screenToIntersection()).next(this._updateTargetDragStep(a)).next(()=>this._updateLaserLineRenderer());f.next(this._cancelTargetDragStep(a.metadata.target)).next(()=>this._updateLaserLineRenderer())})};c._createObserverManipulatorDragPipeline=function(a){return D.createManipulatorDragEventPipeline(a,(b,e,f)=>{e.next(this._screenToIntersection()).next(this._updateObserverDragStep()).next(()=>
this._updateLaserLineRenderer());f.next(this._cancelObserverDragStep()).next(()=>this._updateLaserLineRenderer())})};c._updateObserverDragStep=function(){return a=>{d.isSome(this.analysis.observer)?(this.analysis.observer.position=a.intersection.point,this.analysis.observer.intersection=a.intersection):this.analysis.observer=new y({position:a.intersection.point,intersection:a.intersection});return a}};c._cancelObserverDragStep=function(){const a=d.isSome(this.analysis.observer)&&d.isSome(this.analysis.observer.position)?
this.analysis.observer.clone():null;return b=>{this.analysis.observer=a;return b}};c._updateTargetDragStep=function(a){return b=>{const e=b.intersection.point;a.metadata.target.position=e;a.metadata.target.intersection=b.intersection;d.isSome(e)&&(a.elevationAlignedLocation=e);return b}};c._cancelTargetDragStep=function(a){const b=d.applySome(a.position,f=>f.clone()),e=a.intersection;return f=>{a.position=b;a.intersection=e;return f}};c._manipulatorGrabChanged=function(a,b){switch(b.action){case "start":this._grabbedManipulator=
a;break;case "end":this._grabbedManipulator===a&&(this._grabbedManipulator=null)}this._manipulatorFocusChanged()};c._updateManipulatorState=function(a,b){const {isValid:e,isTargetVisible:f}=b.computationResult;a.state=e?f?u.ManipulatorStateCustomFlags.Custom1:u.ManipulatorStateCustomFlags.Custom2:u.ManipulatorStateCustomFlags.Custom3};c._getLineOfSightManipulatorStateDependencies=function(a){const {isValid:b,isTargetVisible:e}=a.computationResult;return{isValid:b,isTargetVisible:e}};c._updateLaserLineRenderer=
function(){if(!d.isNone(this._laserlineVisualElement)){var a=this._laserlineVisualElement,b=d.isSome(this._grabbedManipulator)?this._grabbedManipulator:this._shouldRenderTracker&&d.isSome(this.analysis.observer)&&d.isSome(this.analysis.observer.position)?this._targetTrackerManipulator:null;this.configuration.laserLine.enabled&&d.isSome(b)?(a.visible=!0,a.heightManifoldTarget=b.renderLocation,a.lineVerticalPlaneSegment=b!==this._observerManipulator?A.fromPoints(this._observerManipulator.renderLocation,
b.renderLocation,K):null):(a.visible=!1,a.heightManifoldTarget=null,a.lineVerticalPlaneSegment=null)}};c._createVisualElements=function(){const a=this.configuration.laserLine;this._removeVisualElements();this._laserlineVisualElement=new I.LaserlineVisualElement({view:this.view,attached:!0,style:{glowColor:x.toUnitRGB(a.glowColor),glowWidth:a.glowWidth,innerColor:x.toUnitRGB(a.innerColor),innerWidth:a.innerWidth,globalAlpha:a.globalAlpha}})};c._removeVisualElements=function(){d.isSome(this._laserlineVisualElement)&&
(this._laserlineVisualElement.destroy(),this._laserlineVisualElement=null)};c._onObserverLocationChange=function(a){d.isNone(a)?this._observerManipulator.available=!1:(this._observerManipulator.metadata.intersection=null,this._observerManipulator.available=!0,this._observerManipulator.elevationAlignedLocation=a)};c._onTargetLocationChange=function(a,b){d.isSome(a)?(b.elevationAlignedLocation=a,b!==this._targetTrackerManipulator&&(b.available=!0)):b.available=!1};c._addPointFromClickEvent=function(a){a=
this._intersector.getScreenPointIntersection(a);d.isNone(a)||d.isNone(a.point)||(d.isSome(this.analysis.observer)&&d.isSome(this.analysis.observer.position)?(this._clearTargetTracker(),this.analysis.targets.add(new q({position:a.point,intersection:a}))):this.analysis.observer=new y({position:a.point,intersection:a}))};c._clickHandler=function(a){this.active&&(this._addPointFromClickEvent({x:a.x,y:a.y}),a.stopPropagation())};c._doubleClickHandler=function(a){this.active&&(this.stop(),a.stopPropagation())};
c._keyDownHandler=function(a){this.active&&"Escape"===a.key&&(this.stop(),a.stopPropagation())};c._pointerMoveHandler=function(a){this._latestPointerMovePointerType=a.pointerType;this._updateLaserLineRenderer();!this._showTracker||d.isNone(this.analysis.observer)||d.isNone(this.analysis.observer.position)||(a=this._intersector.getScreenPointIntersection({x:a.x,y:a.y}),d.isSome(a)&&d.isSome(a.point)&&(d.isSome(this.analysisView.cursorTarget)?(this.analysisView.cursorTarget.position=a.point,this.analysisView.cursorTarget.intersection=
a):this._createTargetTracker(a),this._updateLaserLineRenderer()))};w._createClass(p,[{key:"state",get:function(){return this.active?d.isSome(this._grabbedManipulator)?m.Created:m.Creating:d.isSome(this.analysis.observer)&&d.isSome(this.analysis.observer.position)?m.Created:m.Ready}},{key:"cursor",get:function(){return!this._someManipulatorsFocused&&this.active&&this._showTracker?"crosshair":null}},{key:"updating",get:function(){return d.isSome(this.analysisView)?this.analysisView.updating:!1}},{key:"_showTracker",
get:function(){return this.active&&"mouse"===this._latestPointerMovePointerType}},{key:"_shouldRenderTracker",get:function(){return this._showTracker&&d.isSome(this.analysis.observer)&&d.isSome(this.analysis.observer.position)&&!this._someManipulatorsFocused}},{key:"testInfo",get:function(){return{laserLineVisualElement:this._laserlineVisualElement}}}]);return p}(J.InteractiveToolBase);h.__decorate([l.property({constructOnly:!0})],g.LineOfSightTool.prototype,"view",void 0);h.__decorate([l.property({constructOnly:!0})],
g.LineOfSightTool.prototype,"analysis",void 0);h.__decorate([l.property({readOnly:!0})],g.LineOfSightTool.prototype,"state",null);h.__decorate([l.property({readOnly:!0})],g.LineOfSightTool.prototype,"cursor",null);h.__decorate([l.property({readOnly:!0})],g.LineOfSightTool.prototype,"updating",null);h.__decorate([l.property({type:B.LineOfSightToolConfiguration})],g.LineOfSightTool.prototype,"configuration",void 0);h.__decorate([l.property({constructOnly:!0})],g.LineOfSightTool.prototype,"analysisView",
void 0);h.__decorate([l.property({readOnly:!0})],g.LineOfSightTool.prototype,"_showTracker",null);h.__decorate([l.property()],g.LineOfSightTool.prototype,"_latestPointerMovePointerType",void 0);h.__decorate([l.property()],g.LineOfSightTool.prototype,"_shouldRenderTracker",null);h.__decorate([l.property()],g.LineOfSightTool.prototype,"_someManipulatorsFocused",void 0);h.__decorate([l.property()],g.LineOfSightTool.prototype,"_laserlineVisualElement",void 0);h.__decorate([l.property()],g.LineOfSightTool.prototype,
"_grabbedManipulator",void 0);g.LineOfSightTool=h.__decorate([G.subclass("esri.views.3d.interactive.analysisTools.lineOfSight.LineOfSightTool")],g.LineOfSightTool);const K=A.create();g.LineOfSightTargetCollection=r;Object.defineProperty(g,"__esModule",{value:!0})});