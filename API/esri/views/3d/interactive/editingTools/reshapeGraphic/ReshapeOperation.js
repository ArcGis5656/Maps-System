// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/has ../../../../../core/Evented ../../../../../core/HandleOwner ../../../../../core/Handles ../../../../../core/handleUtils ../../../../../core/maybe ../../../../../core/watchUtils ../../../../../core/accessorSupport/decorators/property ../../../../../core/arrayUtils ../../../../../core/accessorSupport/ensureType ../../../../../core/accessorSupport/decorators/subclass ../../../../../chunks/mat4f64 ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../../geometry/Polyline ../../../../../layers/graphics/dehydratedFeatures ../../../../../support/elevationInfoUtils ../../../../../symbols/support/utils ../../Manipulator3D ../../manipulatorUtils ../../SnappingVisualizer3D ../dragEventPipeline3D ../ManipulatorType ../manipulatorUtils ../settings ../visualElementUtils ../manipulations/config ../manipulations/MoveManipulation ../manipulations/moveUtils ../manipulations/MoveXYGraphicManipulation ./edgeOffsetUtils ../../visualElements/OutlineVisualElement ../../../layers/graphics/GraphicState ../../../webgl-engine/lib/GeometryUtil ../../../../input/IViewEvents ../../../../interactive/dragEventPipeline ../../../../interactive/interfaces ../../../../interactive/editGeometry/EditGeometryOperations ../../../../interactive/editGeometry/interfaces ../../../../interactive/snapping/SnappingContext ../../../../interactive/snapping/SnappingDragPipelineStep".split(" "),
function(x,R,C,pa,ca,da,ea,D,f,S,G,qa,ra,fa,ha,y,T,ia,U,H,V,M,u,W,I,X,N,h,ja,ka,O,la,ma,z,Y,na,A,Z,v,n,oa,P,aa,ba){function E(r){return"vertex"===r.handle.type}x.ReshapeOperation=function(r){function J(a){a=r.call(this,a)||this;a._vertexManipulatorMaterial=u.createManipulatorMaterial(h.settings.colorToVec4(h.settings.reshapeManipulators.vertex.color),h.settings.reshapeManipulators.vertex.renderOccluded);a._vertexManipulatorOutlineMaterial=u.createManipulatorOutlineMaterial(h.settings.colorToVec4(h.settings.reshapeManipulators.vertex.outlineColor),
h.settings.reshapeManipulators.vertex.renderOccluded);a._vertexManipulatorHoverOutlineMaterial=u.createManipulatorOutlineMaterial(h.settings.colorToVec4(h.settings.reshapeManipulators.vertex.hoverOutlineColor),h.settings.reshapeManipulators.vertex.renderOccluded);a._edgeManipulatorMaterial=u.createManipulatorMaterial(h.settings.colorToVec4(h.settings.reshapeManipulators.edge.color),h.settings.reshapeManipulators.edge.renderOccluded);a._edgeManipulatorOutlineMaterial=u.createManipulatorOutlineMaterial(h.settings.colorToVec4(h.settings.reshapeManipulators.edge.outlineColor),
h.settings.reshapeManipulators.edge.renderOccluded);a._edgeOffsetManipulatorMaterial=u.createManipulatorMaterial(h.settings.colorToVec4(h.settings.reshapeManipulators.edgeOffset.color),h.settings.reshapeManipulators.edgeOffset.renderOccluded,!1);a._edgeOffsetManipulatorHoverMaterial=u.createManipulatorMaterial(h.settings.colorToVec4(h.settings.reshapeManipulators.edgeOffset.hoverColor),h.settings.reshapeManipulators.edgeOffset.renderOccluded,!1);a._selectedManipulatorMaterial=u.createManipulatorMaterial(h.settings.colorToVec4(h.settings.reshapeManipulators.selected.color),
h.settings.reshapeManipulators.selected.renderOccluded);a._selectedManipulatorOutlineMaterial=u.createManipulatorOutlineMaterial(h.settings.colorToVec4(h.settings.reshapeManipulators.selected.outlineColor),h.settings.reshapeManipulators.selected.renderOccluded);a._selectedManipulatorHoverOutlineMaterial=u.createManipulatorOutlineMaterial(h.settings.colorToVec4(h.settings.reshapeManipulators.selected.hoverOutlineColor),h.settings.reshapeManipulators.selected.renderOccluded);a._selectedIndex=0;a._vertexManipulatorGeometry=
null;a._vertexManipulatorOutlineGeometry=null;a._edgeManipulatorGeometry=null;a._edgeManipulatorOutlineGeometry=null;a._edgeOffsetManipulatorGeometryInside=null;a._edgeOffsetManipulatorGeometryOutside=null;a._manipulatorHandles=new ea;a._manipulatorInfos=[];a._editGeometryOperations=null;a._graphicMoveManipulation=null;a._moveManipulation=null;a._numGrabbing=0;a._numDragging=0;a._reshapeEventState=p.NONE;a._outlineVisualElement=null;a.tool=null;a.outputGeometry=null;a._snappingPipeline=new ba.SnappingPipeline;
a._snappingPipelineHandle=new ba.SnappingPipeline;a._vertexLaserLineVisualElement=null;return a}R._inheritsLoose(J,r);var k=J.prototype;k.initialize=function(){const a=new na.GraphicState({graphic:this.graphic});this._graphicState=a;this.handles.add([a.watch("displaying",c=>{for(const b of this._manipulatorInfos)b.manipulator.available=c}),this.view.trackGraphicState(a)])};k.destroy=function(){this._editGeometryOperations=f.destroyMaybe(this._editGeometryOperations);this._moveManipulation=f.destroyMaybe(this._moveManipulation);
this._graphicMoveManipulation=f.destroyMaybe(this._graphicMoveManipulation);this._manipulatorHandles=f.destroyMaybe(this._manipulatorHandles);this.manipulators.removeAll();this._manipulatorInfos=[];this._resetGrabbingDragging()};k.removeSelectedVertices=function(){const a=this._manipulatorInfos.filter(c=>c.manipulator.selected&&"vertex"===c.handle.type);this._removeVertices(a)};k.manipulatorSelectionChanged=function(){this.emit("manipulators-changed")};k._removeManipulators=function(){this._moveManipulation=
f.destroyMaybe(this._moveManipulation);this._graphicMoveManipulation=f.destroyMaybe(this._graphicMoveManipulation);this._manipulatorHandles.removeAll();this.manipulators.removeAll();this._manipulatorInfos=[]};k._resetGrabbingDragging=function(){this._numDragging=this._numGrabbing=0};k._createManipulators=function(){if(!f.isNone(this._editGeometryOperations)){var a=H.getGraphicEffectiveElevationInfo(this.graphic);for(const c of this._editGeometryOperations.data.components){for(const b of c.vertices)this._createVertexOrEdgeManipulator(b,
a);for(const b of c.edges)this._createVertexOrEdgeManipulator(b,a)}this._createGraphicMoveManipulators(a)}};k.redo=function(){if(f.isNone(this._editGeometryOperations))return null;const a=this._editGeometryOperations.redo();f.isSome(a)&&(this.outputGeometry=this._editGeometryOperations.data.geometry,this._recreateManipulators());return a};k.undo=function(){if(f.isNone(this._editGeometryOperations))return null;this.emit("undo");const a=this._editGeometryOperations.undo();f.isSome(a)&&(this.outputGeometry=
this._editGeometryOperations.data.geometry,this._recreateManipulators());return a};k._recreateManipulators=function(){this._removeManipulators();this._resetGrabbingDragging();this._createManipulators()};k._recreateEditGeometryAndManipulators=function(a=this.inputGeometry){this._removeManipulators();this._resetGrabbingDragging();f.isNone(a)||(f.destroyMaybe(this._editGeometryOperations),this._editGeometryOperations=oa.EditGeometryOperations.fromGeometry(a,this.view.state.viewingMode),this._createManipulators())};
k._perGraphicManipulatorDragAction=function(a,c){if("end"!==c.action){var b=0,d=[],e=this._manipulatorInfos.some(g=>"vertex"===g.handle.type&&g.manipulator.selected);a=a===B.SELECTED_OR_ALL&&e;for(const g of this._manipulatorInfos)E(g)&&(g.manipulator.grabbing||a&&!g.manipulator.selected||d.push(g),b++);0!==d.length&&(this._moveVertices(d,c),d.length===b?(this._updateEventState(p.MOVING),this.destroyed||this.emit("move",{type:"move",dx:c.screenDeltaX,dy:c.screenDeltaY,mover:this.graphic})):(this._updateEventState(p.RESHAPING),
this.destroyed||this.emit("reshape",{type:"reshape",mover:this.graphic})))}};k._isMultiVertexSelection=function(){let a=0;for(const c of this._manipulatorInfos)E(c)&&c.manipulator.selected&&a++;return 1<a};k._perVertexManipulatorDragAction=function(a){this._updateEventState(p.RESHAPING);if(!this.destroyed){var {mapDeltaX:c,mapDeltaY:b,mapDeltaZ:d}=a;if(c||b||d){var e=[];for(const g of this._manipulatorInfos)E(g)&&(g.manipulator.selected&&!g.manipulator.grabbing||g===a.info)&&e.push(g);this._moveVertices(e,
a,P.AccumulationBehaviour.ACCUMULATE_STEPS);this.emit("reshape",{type:"reshape",mover:this.graphic})}}};k._updateEventState=function(a){if(a===this._reshapeEventState)return!1;switch(a){case p.NONE:if(0!==this._numGrabbing||0!==this._numDragging)return!1;switch(this._reshapeEventState){case p.MOVING:this.emit("move",{type:"move-stop",dx:0,dy:0,mover:this.graphic});break;case p.RESHAPING:this.emit("reshape",{type:"reshape-stop",mover:this.graphic})}break;case p.MOVING:switch(this._reshapeEventState){case p.NONE:this.emit("move",
{type:"move-start",dx:0,dy:0,mover:this.graphic});break;case p.RESHAPING:this.emit("reshape",{type:"reshape-stop",mover:this.graphic}),this.destroyed||this.emit("move",{type:"move-start",dx:0,dy:0,mover:this.graphic})}break;case p.RESHAPING:switch(this._reshapeEventState){case p.NONE:this.emit("reshape",{type:"reshape-start",mover:this.graphic});break;case p.MOVING:this.emit("move",{type:"move-stop",dx:0,dy:0,mover:this.graphic}),this.destroyed||this.emit("reshape",{type:"reshape-start",mover:this.graphic})}}if(this.destroyed)return!1;
const c=this._reshapeEventState!==a;this._reshapeEventState=a;return c};k._createGraphicMoveManipulators=function(a){this._graphicMoveManipulation=new ma.MoveXYGraphicManipulation({tool:this.tool,view:this.view,graphicState:this._graphicState});if(this.enableMoveGraphic){let b=null;this._manipulatorHandles.add(this._graphicMoveManipulation.createDragPipeline((d,e,g)=>{e.next(l=>this._trackNumDragging(l)).next(l=>{"start"===l.action&&(b=f.unwrap(this._editGeometryOperations).createUndoGroup());return l}).next(l=>
{this._perGraphicManipulatorDragAction(B.ALL,l);"end"===l.action&&(b=f.removeMaybe(b))});g.next(this._cancelDragOperation(()=>b=f.removeMaybe(b)))}))}else this._graphicMoveManipulation.forEachManipulator(b=>{b.grabbable=!1;b.cursor=null});this._graphicMoveManipulation.forEachManipulator(b=>this._manipulatorHandles.add([this._watchAndUpdateGrabState(b,!1),b.events.on("immediate-click",d=>{this._manipulatorInfos.some(e=>e.manipulator.selected)?this._clearSelection():this.emit("immediate-click",{...d,
graphic:this.graphic});d.stopPropagation()})]));this._moveManipulation=new O.MoveManipulation({tool:this.tool,view:this.view,xyAvailable:!0,xyAxisAvailable:!0,zAvailable:this.enableZShape&&N.canMoveZ(this.graphic),snapToScene:!1,radius:O.MoveManipulation.radiusForSymbol(this.graphic.symbol)});this._moveManipulation.forEachManipulator(b=>{this.handles.add([this._watchAndUpdateGrabState(b,!1),b.events.on("immediate-click",d=>{this._moveManipulation.zManipulation.hasManipulator(b)||this._manipulatorInfos.some(e=>
e.manipulator.selected)||this.emit("immediate-click",{...d,graphic:this.graphic});d.stopPropagation()})])});this._moveManipulation.elevationInfo={mode:"absolute-height",offset:0};var c=f.unwrap(this.graphic.geometry).spatialReference;this.handles.add([this._moveManipulation.createDragPipeline((b,d,e,g,l)=>{b=e.next(m=>this._trackNumDragging(m)).next(m=>{const t=this._manipulatorInfos.filter(q=>E(q)&&q.manipulator.selected);return m.manipulatorType===X.ManipulatorType.TRANSLATE_XY&&1===t.length?{...m,
info:t[0],snapOrigin:t[0].handle.pos}:{...m,info:null}}).next(this._snappingPipelineHandle.createSnapDragEventPipelineStep({predicate:m=>!!m.info,cancel:g,snappingManager:this.tool.snappingManager,snappingContext:new aa.SnappingContext({editGeometryOperations:f.unwrap(this._editGeometryOperations),elevationInfo:a,pointer:l,excludeFeature:this.graphic,visualizer:new W.SnappingVisualizer3D}),updatingHandles:this.updatingHandles}),this._snappingPipelineHandle.next).next(v.addMapDelta()).next(m=>{this._perGraphicManipulatorDragAction(B.SELECTED_OR_ALL,
m);return m});g.next(this._cancelDragOperation());return b},a,c,this.graphic),S.init(this._graphicState,"displaying",()=>{this._updateMoveManipulationPosition()}),this._graphicState.on("changed",()=>this._updateMoveManipulationPosition()),S.init(this._graphicState,"isDraped",()=>{this._graphicState.isDraped?this.handles.add(this.view.elevationProvider.on("elevation-change",()=>this._updateMoveManipulationPosition()),"align-move-manipulation"):this.handles.remove("align-move-manipulation")})]);this._updateMoveManipulationPosition();
c=ja.createVisualElements({view:this.view,graphic:this.graphic,forEachManipulator:b=>{if(!this.destroyed){f.isSome(this._graphicMoveManipulation)&&this._graphicMoveManipulation.forEachManipulator(b);for(const d of this._manipulatorInfos)b(d.manipulator,X.ManipulatorType.TRANSLATE_XY);this._moveManipulation.forEachManipulator(b)}},onManipulatorsChanged:b=>this.on("manipulators-changed",b)});f.isSome(c)&&(this._outlineVisualElement=c.visualElement instanceof Y.OutlineVisualElement?c.visualElement:null);
f.isSome(this._outlineVisualElement)&&this._manipulatorHandles.add([this._outlineVisualElement.events.on("attachment-origin-changed",()=>{this._graphicState.isDraped||this._updateMoveManipulationPosition()}),this._graphicState.watch("isDraped",()=>this._updateMoveManipulationPosition())]);this._manipulatorHandles.add(c)};k._createEdgeOffsetManipulator=function(a,c=H.getGraphicEffectiveElevationInfo(this.graphic)){var b=h.settings.reshapeManipulators.edgeOffset,d=b.size/2,e=d+b.collisionPadding;if(f.isNone(this._edgeOffsetManipulatorGeometryInside)||
f.isNone(this._edgeOffsetManipulatorGeometryOutside)){d/=e;const l=d*Math.sqrt(3)/2;this._edgeOffsetManipulatorGeometryInside=A.createExtrudedTriangle(l,d/2,d/2,b.height,b.offset);this._edgeOffsetManipulatorGeometryOutside=A.createExtrudedTriangle(-l,d/2,d/2,b.height,-b.offset)}e=new M.Manipulator3D({view:this.view,renderObjects:[{geometry:this._edgeOffsetManipulatorGeometryInside,material:this._edgeOffsetManipulatorMaterial,stateMask:n.ManipulatorStateFlags.Unfocused},{geometry:this._edgeOffsetManipulatorGeometryInside,
material:this._edgeOffsetManipulatorHoverMaterial,stateMask:n.ManipulatorStateFlags.Focused},{geometry:this._edgeOffsetManipulatorGeometryOutside,material:this._edgeOffsetManipulatorMaterial,stateMask:n.ManipulatorStateFlags.Unfocused},{geometry:this._edgeOffsetManipulatorGeometryOutside,material:this._edgeOffsetManipulatorHoverMaterial,stateMask:n.ManipulatorStateFlags.Focused}],elevationInfo:"on-the-ground"!==c.mode||V.isVolumetricSymbol(this.graphic.symbol)?{mode:"absolute-height",offset:0}:c,
worldOriented:!1,focusMultiplier:1,radius:e,available:!(!this.graphic.visible||!this.graphic.layer.visible),collisionType:{type:"disc",direction:T.fromValues(0,0,1)},collisionPriority:1});d=new M.Manipulator3D({view:this.view,renderObjects:[],worldSized:!0,worldOriented:!1,available:!(!this.graphic.visible||!this.graphic.layer.visible),collisionPriority:-10,cursor:this.enableMoveGraphic?"move":"default"});const g={manipulator:e,handle:a,locationUpdateHandle:null,type:"edge",selectedIndex:0,edgeManipulator:d,
elevationInfo:c,visibilityHandle:null};this._autoHideEdgeOffsetManipulator(g,b.minSquaredEdgeLength);this._updateEdgeOffsetManipulator(g);a=this._getManipulatorInfoFromHandle(g.handle.leftVertex).manipulator.events.on("location-update",()=>this._updateEdgeOffsetManipulator(g));b=this._getManipulatorInfoFromHandle(g.handle.rightVertex).manipulator.events.on("location-update",()=>this._updateEdgeOffsetManipulator(g));g.locationUpdateHandle=D.handlesGroup([a,b]);this._manipulatorHandles.add(g.locationUpdateHandle,
e);this._manipulatorHandles.add([this._watchAndUpdateGrabState(e,!0),this._watchAndUpdateGrabState(d,!0)],e);this._manipulatorHandles.add(v.createManipulatorDragEventPipeline(e,this._createEdgeOffsetPipeline(g,c)),e);this._manipulatorHandles.add(v.createManipulatorDragEventPipeline(d,(l,m,t,q)=>{if("touch"===q)this._createEdgeOffsetPipeline(g,c)(l,m,t);else if(this.enableMoveGraphic){q=this.graphic;const K=f.isSome(q.geometry)?q.geometry.spatialReference:null;m.next(Q=>this._trackNumDragging(Q)).next(v.dragAtLocation(this.view,
l.elevationAlignedLocation)).next(I.screenToMapXYAtLocation(this.view,l.elevationAlignedLocation,c,K,q)).next(v.addScreenDelta()).next(v.addMapDelta()).next(Q=>this._perGraphicManipulatorDragAction(B.ALL,Q));t.next(this._cancelDragOperation())}}),e);a=l=>{this._manipulatorInfos.some(m=>m.manipulator.selected)?this._clearSelection():this.emit("immediate-click",{...l,graphic:this.graphic});l.stopPropagation()};this._manipulatorHandles.add([e.events.on("immediate-click",a),d.events.on("immediate-click",
a)],e);this._manipulatorInfos.push(g);this.manipulators.add(e);this.manipulators.add(d);this.emit("manipulators-changed");return g};k._autoHideEdgeOffsetManipulator=function(a,c){const b=a.manipulator,d=a.edgeManipulator,e=()=>{f.removeMaybe(a.visibilityHandle);const g=z.screenEdgeLengthSquared(this._getManipulatorInfoFromHandle(a.handle.leftVertex).manipulator.renderLocation,this._getManipulatorInfoFromHandle(a.handle.rightVertex).manipulator.renderLocation,this.view.state.camera)<c;if(!b.focused&&
!d.focused||g)b.grabbable=!g,d.grabbable=!g,a.visibilityHandle=D.handlesGroup([b.disableDisplay(),{remove:()=>{b.grabbable=!0;d.grabbable=this.enableMoveGraphic}}])};this._manipulatorHandles.add([b.events.on("focus-changed",e),d.events.on("focus-changed",e),{remove:()=>{f.removeMaybe(a.visibilityHandle);this.manipulators.remove(d)}}],b);e()};k._updateEdgeOffsetManipulator=function(a){this._updateManipulatorPosition(a);var c=f.unwrap(this._editGeometryOperations).data.coordinateHelper,b=z.createEdgeOffsetIntersectionPlane(this.view,
a.manipulator.elevationAlignedLocation,z.createEdgeOffsetOperation(c,a.handle,f.unwrap(a.manipulator.elevationInfo)));c=this._getManipulatorInfoFromHandle(a.handle.leftVertex).manipulator.renderLocation;const d=this._getManipulatorInfoFromHandle(a.handle.rightVertex).manipulator.renderLocation;b=f.isSome(b)?z.edgeOffsetRotationMatrix(b,c,d):ha.IDENTITY;a.manipulator.modelTransform=b;a.edgeManipulator.elevationAlignedLocation=a.manipulator.elevationAlignedLocation;a.edgeManipulator.modelTransform=
b;c=y.length(y.subtract(L,c,d))/2;a.edgeManipulator.collisionType={type:"line",paths:[[[-c,0,0],[c,0,0]]]}};k._createEdgeOffsetPipeline=function(a,c){return(b,d,e)=>{this._clearSelection();const {step:g,cleanup:l}=this._initializeEdgeOffset(a,c);d.next(m=>this._trackNumDragging(m)).next(v.dragAtLocation(this.view,b.elevationAlignedLocation)).next(g).next(I.screenToRenderPlaneFromEvent(this.view)).next(I.convertToMapCoordinates(this.view,f.unwrap(this._editGeometryOperations).data.spatialReference)).next(v.addMapDelta()).next(this._applyEdgeOffsetStep(a)).next(m=>
{"end"===m.action&&l()});e.next(m=>{l();return m}).next(this._cancelDragOperation())}};k._initializeEdgeOffset=function(a,c){var b=f.unwrap(this._editGeometryOperations);const d=z.createEdgeOffsetOperation(b.data.coordinateHelper,a.handle,c);c=b.createUndoGroup();const e=z.createEdgeOffsetIntersectionPlane(this.view,a.manipulator.elevationAlignedLocation,d);d.requiresSplitEdgeLeft&&this._splitEdgeManipulator(this._getManipulatorInfoFromHandle(a.handle.leftVertex.leftEdge),1);d.requiresSplitEdgeRight&&
this._splitEdgeManipulator(this._getManipulatorInfoFromHandle(a.handle.rightVertex.rightEdge),0);const g=()=>new ia({paths:[[a.handle.leftVertex.pos,a.handle.rightVertex.pos]],spatialReference:f.unwrap(this._editGeometryOperations).data.spatialReference}),l=new Y.OutlineVisualElement({view:this.view,isDraped:this._graphicState.isDraped,geometry:g(),elevationInfo:a.elevationInfo,width:h.settings.visualElements.lineGraphics.outline.width,color:h.settings.colorToVec4(h.colors.main),attached:!0});let m;
const t=()=>{this._cleanEdgeOffsetCollapsedEdges(a);m=f.removeMaybe(m)};b=this.on("undo",t);m=D.handlesGroup([D.destroyHandle(l),this._graphicState.watch("isDraped",q=>l.isDraped=q),this._graphicState.on("changed",()=>l.geometry=g()),c,b]);return{step:q=>f.isNone(d)||f.isNone(e)?(t(),null):{...q,operation:d,plane:e},cleanup:t}};k._applyEdgeOffsetStep=function(a){return c=>{if(this.destroyed||f.isNone(c.operation))return c;this._updateEventState(p.RESHAPING);const {mapDeltaX:b,mapDeltaY:d,mapDeltaZ:e}=
c;if(b||d||e)this._offsetEdge(a,c),this.emit("reshape",{type:"reshape",mover:this.graphic});return c}};k._cleanEdgeOffsetCollapsedEdges=function(a){var c,b;const d=null==(c=a.handle.leftVertex.leftEdge)?void 0:c.leftVertex;c=a.handle.leftVertex;const e=null==(b=a.handle.rightVertex.rightEdge)?void 0:b.rightVertex;a=a.handle.rightVertex;b=f.unwrap(this._editGeometryOperations).data.coordinateHelper;const g=[];d&&1E-6>b.distance(d.pos,c.pos)&&g.push(this._getManipulatorInfoFromHandle(c));(1E-6>b.distance(c.pos,
a.pos)||e&&1E-6>b.distance(e.pos,a.pos))&&g.push(this._getManipulatorInfoFromHandle(a));g.length&&this._removeVertices(g)};k._computeVertexManipulatorSizeAndOutline=function(a){const c=a.size/2,b=c+a.collisionPadding;return{size:c/b,outlineSize:(c+a.outlineSize)/b}};k._createVertexOrEdgeManipulator=function(a,c=H.getGraphicEffectiveElevationInfo(this.graphic)){if("edge"===a.type){if(this.enableEdgeOffset)return this._createEdgeOffsetManipulator(a,c);if(!this.enableMidpoints)return null}if(f.isNone(this._vertexManipulatorGeometry)||
f.isNone(this._vertexManipulatorOutlineGeometry)){const {size:e,outlineSize:g}=this._computeVertexManipulatorSizeAndOutline(h.settings.reshapeManipulators.vertex);this._vertexManipulatorGeometry=A.createSphereGeometry(e,16,16);this._vertexManipulatorOutlineGeometry=A.createSphereGeometry(g,16,16)}if(f.isNone(this._edgeManipulatorGeometry)||f.isNone(this._edgeManipulatorOutlineGeometry)){const {size:e,outlineSize:g}=this._computeVertexManipulatorSizeAndOutline(h.settings.reshapeManipulators.edge);
this._edgeManipulatorGeometry=A.createSphereGeometry(e,16,16);this._edgeManipulatorOutlineGeometry=A.createSphereGeometry(g,16,16)}var b=f.isSome(this.graphic.geometry)&&"point"===this.graphic.geometry.type?[]:[{geometry:this._vertexManipulatorGeometry,material:this._vertexManipulatorMaterial,stateMask:w.Vertex|n.ManipulatorStateFlags.Unselected},{geometry:this._vertexManipulatorOutlineGeometry,material:this._vertexManipulatorOutlineMaterial,stateMask:w.Vertex|n.ManipulatorStateFlags.Unfocused|n.ManipulatorStateFlags.Unselected},
{geometry:this._vertexManipulatorOutlineGeometry,material:this._vertexManipulatorHoverOutlineMaterial,stateMask:w.Vertex|n.ManipulatorStateFlags.Focused|n.ManipulatorStateFlags.Unselected},{geometry:this._vertexManipulatorGeometry,material:this._selectedManipulatorMaterial,stateMask:n.ManipulatorStateFlags.Selected},{geometry:this._vertexManipulatorOutlineGeometry,material:this._selectedManipulatorOutlineMaterial,stateMask:n.ManipulatorStateFlags.Selected|n.ManipulatorStateFlags.Unfocused},{geometry:this._vertexManipulatorOutlineGeometry,
material:this._selectedManipulatorHoverOutlineMaterial,stateMask:n.ManipulatorStateFlags.Selected|n.ManipulatorStateFlags.Focused}];this.enableMidpoints&&b.push({geometry:this._edgeManipulatorGeometry,material:this._vertexManipulatorMaterial,stateMask:w.Edge|n.ManipulatorStateFlags.Focused|n.ManipulatorStateFlags.Unselected},{geometry:this._edgeManipulatorOutlineGeometry,material:this._vertexManipulatorHoverOutlineMaterial,stateMask:w.Edge|n.ManipulatorStateFlags.Focused|n.ManipulatorStateFlags.Unselected},
{geometry:this._edgeManipulatorGeometry,material:this._edgeManipulatorMaterial,stateMask:w.Edge|n.ManipulatorStateFlags.Unfocused|n.ManipulatorStateFlags.Unselected},{geometry:this._edgeManipulatorOutlineGeometry,material:this._edgeManipulatorOutlineMaterial,stateMask:w.Edge|n.ManipulatorStateFlags.Unfocused|n.ManipulatorStateFlags.Unselected});b=new M.Manipulator3D({view:this.view,renderObjects:b,elevationInfo:c,focusMultiplier:1,touchMultiplier:1,available:!(!this.graphic.visible||!this.graphic.layer.visible)});
this._setTypeSpecificManipulatorSettings(b,a,c);const d="edge"===a.type?{manipulator:b,handle:a,locationUpdateHandle:null,type:"edge",selectedIndex:0}:{manipulator:b,handle:a,type:"vertex",selectedIndex:0};this._manipulatorInfos.push(d);this.manipulators.add(b);this._updateManipulatorPosition(d);if("edge"===d.type){a=this._getManipulatorInfoFromHandle(d.handle.leftVertex).manipulator.events.on("location-update",()=>this._updateManipulatorPosition(d));const e=this._getManipulatorInfoFromHandle(d.handle.rightVertex).manipulator.events.on("location-update",
()=>this._updateManipulatorPosition(d));d.locationUpdateHandle=D.handlesGroup([a,e]);this._manipulatorHandles.add(d.locationUpdateHandle,b)}this._manipulatorHandles.add(this._watchAndUpdateGrabState(b,!0),b);a=v.createManipulatorDragEventPipeline(b,(e,g,l,m)=>{let t=null;g.next(q=>this._trackNumDragging(q)).next(q=>{"start"===q.action&&(t=f.unwrap(this._editGeometryOperations).createUndoGroup());if("edge"===d.handle.type){const K=this._splitEdgeManipulator(d);return{...q,info:K,snapOrigin:K.handle.pos}}return{...q,
info:d,snapOrigin:d.handle.pos}}).next(v.dragAtLocation(this.view,e.elevationAlignedLocation)).next(I.screenToMapXYForGraphicAtLocation(this.view,this.graphic,e.elevationAlignedLocation,e.location.spatialReference,this.graphic)).next(this._snappingPipeline.createSnapDragEventPipelineStep({predicate:()=>!this._isMultiVertexSelection(),cancel:l,snappingManager:this.tool.snappingManager,snappingContext:new aa.SnappingContext({editGeometryOperations:f.unwrap(this._editGeometryOperations),elevationInfo:c,
pointer:m,excludeFeature:this.graphic,visualizer:new W.SnappingVisualizer3D}),updatingHandles:this.updatingHandles}),this._snappingPipeline.next).next(v.addMapDelta()).next(q=>{this._perVertexManipulatorDragAction(q);"end"===q.action&&(t=f.removeMaybe(t))});l.next(this._cancelDragOperation(()=>t=f.removeMaybe(t)))});this._manipulatorHandles.add(a,b);this._manipulatorHandles.add([b.events.on("immediate-click",e=>this._manipulatorClickCallback(e,d)),b.events.on("select-changed",()=>{d.selectedIndex=
++this._selectedIndex;this._updateMoveManipulationPosition()})],b);this.emit("manipulators-changed");return d};k._trackNumDragging=function(a){switch(a.action){case "start":this._numDragging++;break;case "end":this._numDragging--}return a};k._cancelDragOperation=function(a){return()=>{this._numDragging--;this.undo();this.outputGeometry=f.isSome(this._editGeometryOperations)?this._editGeometryOperations.data.geometry:null;f.isSome(this.tool.snappingManager)&&this.tool.snappingManager.doneSnapping();
switch(this._reshapeEventState){case p.MOVING:this.emit("move",{type:"move",dx:0,dy:0,mover:this.graphic});break;case p.RESHAPING:this.emit("reshape",{type:"reshape",mover:this.graphic})}a&&a();this.destroyed||this._updateEventState(p.NONE)}};k._setTypeSpecificManipulatorSettings=function(a,c,b){switch(c.type){case "vertex":a.state=w.Vertex;a.selectable=!0;a.cursor="move";a.collisionPriority=2;a.radius=h.settings.reshapeManipulators.vertex.size/2+h.settings.reshapeManipulators.vertex.collisionPadding;
a.elevationInfo=b;a.interactive=f.isSome(this.graphic.geometry)&&"point"!==this.graphic.geometry.type;break;case "edge":a.state=w.Edge,a.selectable=!1,a.cursor="copy",a.collisionPriority=-1,a.radius=h.settings.reshapeManipulators.edge.size/2+h.settings.reshapeManipulators.edge.collisionPadding,a.elevationInfo="on-the-ground"!==b.mode||V.isVolumetricSymbol(this.graphic.symbol)?{mode:"absolute-height",offset:0}:b}};k._watchAndUpdateGrabState=function(a,c){return a.events.on("grab-changed",b=>{if("start"===
b.action)c&&this._updateSelection(a),this._numGrabbing++;else if(this._numGrabbing--,this._updateEventState(p.NONE),this.destroyed)return;this._moveManipulation.interactive=!this._numGrabbing;if("touch"!==b.pointerType||this.enableEdgeOffset)this._manipulatorInfos.forEach(d=>{d.manipulator.interactive=!this._numGrabbing&&f.isSome(this.graphic.geometry)&&"point"!==this.graphic.geometry.type;"edgeManipulator"in d&&(d.edgeManipulator.interactive=!this._numGrabbing)}),f.unwrap(this._graphicMoveManipulation).forEachManipulator(d=>
d.interactive=!this._numGrabbing)})};k._clearSelection=function(){for(const a of this._manipulatorInfos)a.manipulator.grabbing||(a.manipulator.selected=!1)};k._updateSelection=function(a){a.grabbing&&!a.selected&&a.selectable&&(this._clearSelection(),a.selected=!0,this.emit("manipulators-changed"))};k._removeManipulator=function(a){a&&(this._manipulatorHandles.remove(a.manipulator),this._manipulatorInfos.splice(this._manipulatorInfos.indexOf(a),1),this.manipulators.remove(a.manipulator),this.emit("manipulators-changed"))};
k._getManipulatorInfoFromHandle=function(a){if(a)for(const c of this._manipulatorInfos)if(a===c.handle)return c;return null};k._updateManipulatorPosition=function(a){if(a){var c=f.unwrap(this._editGeometryOperations);if("vertex"===a.handle.type)a.manipulator.location=c.data.coordinateHelper.vectorToDehydratedPoint(a.handle.pos,F),a.manipulator.grabbing&&f.isSome(this._vertexLaserLineVisualElement)&&(this._vertexLaserLineVisualElement.visualElement.intersectsWorldUpAtLocation=a.manipulator.renderLocation);
else if("edge"===a.handle.type){var b=this._getManipulatorInfoFromHandle(a.handle.leftVertex).manipulator,d=this._getManipulatorInfoFromHandle(a.handle.rightVertex).manipulator;f.isSome(a.manipulator.elevationInfo)&&"on-the-ground"===a.manipulator.elevationInfo.mode?(b=b.location,d=d.location,a.manipulator.location=U.makeDehydratedPoint(b.x+.5*(d.x-b.x),b.y+.5*(d.y-b.y),b.hasZ&&d.hasZ?0:void 0,c.data.spatialReference)):(y.lerp(L,b.renderLocation,d.renderLocation,.5),a.manipulator.renderLocation=L)}}};
k._splitEdgeManipulator=function(a,c=.5){var b=f.unwrap(this._editGeometryOperations);c=f.unwrap(b.splitEdge(a.handle,c).createdVertex);a.locationUpdateHandle.remove();a.locationUpdateHandle=void 0;var d=H.getGraphicEffectiveElevationInfo(this.graphic);let e;this.enableEdgeOffset?(this._removeManipulator(a),e=this._createVertexOrEdgeManipulator(c)):(e=a,e.handle=c,e.type="vertex",this._setTypeSpecificManipulatorSettings(a.manipulator,a.handle,d));c.leftEdge&&this._createVertexOrEdgeManipulator(c.leftEdge);
c.rightEdge&&this._createVertexOrEdgeManipulator(c.rightEdge);this.outputGeometry=b.data.geometry;this._updateManipulatorPosition(e);this._updateSelection(a.manipulator);a=this._updateEventState(p.RESHAPING);d=b.data.coordinateHelper.vectorToArray(e.handle.pos);b=b.data.components.indexOf(c.component);this.emit("vertex-add",{type:"vertex-add",vertices:[{coordinates:d,componentIndex:b,vertexIndex:f.unwrap(c.index)}],added:d});a&&this._updateEventState(p.NONE);return e};k._updateMoveManipulationPosition=
function(){const a=y.set(L,0,0,0);let c=0,b=!1;var d=null;let e=null;for(var g of this._manipulatorInfos)if(E(g))if(g.manipulator.selected)if(c++,y.add(a,a,g.manipulator.renderLocation),f.isNone(d)||g.selectedIndex>d.selectedIndex)e=d,d=g;else{if(f.isNone(e)||g.selectedIndex>e.selectedIndex)e=g}else b=!0;0!==c?(g=this._graphicState.displaying,this._moveManipulation.xyManipulation.available=g,this._moveManipulation.xyAxisManipulation.available=g,this._moveManipulation.zManipulation.available=g&&this.enableZVertex&&
N.canMoveZ(this.graphic),this._moveManipulation.xyAxisManipulation.orthogonalAvailable=g&&1!==c):(g=this._graphicState.displaying&&this.enableMoveGraphic,this._moveManipulation.xyManipulation.available=g,this._moveManipulation.xyAxisManipulation.available=g,this._moveManipulation.xyAxisManipulation.orthogonalAvailable=g,this._moveManipulation.zManipulation.available=g&&this.enableZShape&&N.canMoveZ(this.graphic));if(0!==c){g=0;if(f.isSome(d)){const l=d.handle.pos,m=f.isSome(e)?e.handle.pos:d.handle.leftEdge&&
d.handle.leftEdge.leftVertex?d.handle.leftEdge.leftVertex.pos:null;d=!f.isSome(e)&&d.handle.rightEdge&&d.handle.rightEdge.rightVertex?d.handle.rightEdge.rightVertex.pos:null;m&&d?this._moveManipulation.xyAxisManipulation.available=!1:m?g=Math.atan2(l[1]-m[1],l[0]-m[0])+Math.PI/2:d&&(g=Math.atan2(d[1]-l[1],d[0]-l[0])+Math.PI/2)}this._moveManipulation.angle=g;this._moveManipulation.radius=ka.DISC_RADIUS_SMALL}else this._moveManipulation.angleDeferred=()=>la.shapeOrientation(f.unwrap(this.graphic.geometry)),
this._moveManipulation.radius=O.MoveManipulation.radiusForSymbol(this.graphic.symbol);0!==c&&b?(y.scale(a,a,1/c),F.spatialReference=f.unwrap(this._editGeometryOperations).data.spatialReference,F.hasZ=!0,this.view.renderCoordsHelper.fromRenderCoords(a,F),this._moveManipulation.elevationAlignedLocation=F):f.isSome(this._outlineVisualElement)&&!this._graphicState.isDraped&&f.isSome(this._outlineVisualElement.attachmentOrigin)?this._moveManipulation.elevationAlignedLocation=this._outlineVisualElement.attachmentOrigin:
u.placeAtGraphic(this.view,this._moveManipulation,this.graphic)};k._removeVertices=function(a){var c=[];const b=f.unwrap(this._editGeometryOperations);for(var d of a)"vertex"===d.handle.type&&b.canRemoveVertex()&&(c.push(d.handle),this._removeManipulator(d),this._removeManipulator(this._getManipulatorInfoFromHandle(d.handle.leftEdge)),this._removeManipulator(this._getManipulatorInfoFromHandle(d.handle.rightEdge)),(a=f.unwrap(b.removeVertices([d.handle]).removedVertices[0].createdEdge))&&this._createVertexOrEdgeManipulator(a));
if(0<c.length&&(c=c.map(e=>{const g=b.data.components.indexOf(e.component);return{coordinates:b.data.coordinateHelper.vectorToArray(e.pos),componentIndex:g,vertexIndex:f.unwrap(e.index)}}),this.outputGeometry=b.data.geometry,d=this._updateEventState(p.RESHAPING),!this.destroyed&&(this.emit("vertex-remove",{type:"vertex-remove",removed:c.map(e=>e.coordinates),vertices:c}),!this.destroyed))){if(d&&(this._updateEventState(p.NONE),this.destroyed))return;this._updateMoveManipulationPosition()}};k._moveVertices=
function(a,c,b="start"===c.action?P.AccumulationBehaviour.NEW_STEP:P.AccumulationBehaviour.ACCUMULATE_STEPS){const d=f.unwrap(this._editGeometryOperations);d.moveVertices(a.map(e=>e.handle),c.mapDeltaX,c.mapDeltaY,c.mapDeltaZ,b);this.outputGeometry=d.data.geometry;for(const e of a)this._updateManipulatorPosition(e)};k._offsetEdge=function(a,c){if(!f.isNone(c.operation)){var b=f.unwrap(this._editGeometryOperations),d=c.operation.clone();d.distance=c.operation.signedDistanceToPoint(c.mapEnd);b.updateVertices([a.handle.leftVertex,
a.handle.rightVertex],d);this.outputGeometry=b.data.geometry;this._updateManipulatorPosition(this._getManipulatorInfoFromHandle(a.handle.leftVertex));this._updateManipulatorPosition(this._getManipulatorInfoFromHandle(a.handle.rightVertex))}};k._manipulatorClickCallback=function(a,c){a.shiftKey||this._clearSelection();"vertex"===c.handle.type&&(c.manipulator.selected=!c.manipulator.selected);"vertex"===c.handle.type&&a.button===Z.MouseButton.Right&&this._removeVertices([c]);"edge"===c.handle.type&&
a.button===Z.MouseButton.Left&&this._splitEdgeManipulator(c);a.stopPropagation()};R._createClass(J,[{key:"inputGeometry",get:function(){return f.isSome(this._editGeometryOperations)?this._editGeometryOperations.data.geometry:null},set:function(a){this._recreateEditGeometryAndManipulators(a)}},{key:"updating",get:function(){return this.updatingHandles.updating}},{key:"manipulators",get:function(){return this.tool.manipulators}},{key:"view",get:function(){return this.tool.view}},{key:"graphic",get:function(){return this.tool.graphic}},
{key:"enableZShape",get:function(){return this.tool.enableZShape}},{key:"enableZVertex",get:function(){return this.tool.enableZVertex}},{key:"enableMoveGraphic",get:function(){return this.tool.enableMoveGraphic}},{key:"enableMidpoints",get:function(){return this.tool.enableMidpoints}},{key:"enableEdgeOffset",get:function(){return this.tool.enableEdgeOffset}},{key:"canRedo",get:function(){return f.isSome(this._editGeometryOperations)&&this._editGeometryOperations.canRedo}},{key:"canUndo",get:function(){return f.isSome(this._editGeometryOperations)&&
this._editGeometryOperations.canUndo}}]);return J}(ca.EventedMixin(da.HandleOwner));C.__decorate([G.property({constructOnly:!0})],x.ReshapeOperation.prototype,"tool",void 0);C.__decorate([G.property()],x.ReshapeOperation.prototype,"inputGeometry",null);C.__decorate([G.property()],x.ReshapeOperation.prototype,"outputGeometry",void 0);C.__decorate([G.property({readOnly:!0})],x.ReshapeOperation.prototype,"updating",null);x.ReshapeOperation=C.__decorate([fa.subclass("esri.views.3d.interactive.editingTools.reshapeGraphic.ReshapeOperation")],
x.ReshapeOperation);const F=U.makeDehydratedPoint(0,0,null,null),L=T.create();var w;(function(r){r.Vertex=n.ManipulatorStateCustomFlags.Custom1;r.Edge=n.ManipulatorStateCustomFlags.Custom2})(w||(w={}));var p;(function(r){r[r.NONE=0]="NONE";r[r.MOVING=1]="MOVING";r[r.RESHAPING=2]="RESHAPING"})(p||(p={}));var B;(function(r){r[r.ALL=0]="ALL";r[r.SELECTED_OR_ALL=1]="SELECTED_OR_ALL"})(B||(B={}));Object.defineProperty(x,"__esModule",{value:!0})});