// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("require ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../Graphic ../../../core/arrayUtils ../../../core/Logger ../../../core/maybe ../../../core/reactiveUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../chunks/vec3 ../../../chunks/vec3f64 ../../../geometry/projection ../../../geometry/support/aaBoundingRect ../../../geometry/support/contains ../../../geometry/support/zscale ../../../layers/graphics/dehydratedFeatures ../../../layers/graphics/hydratedFeatures ../../../layers/graphics/controllers/I3SOnDemandController ../../../layers/support/FeatureFilter ../../../rest/support/Query ./I3SPointsWorkerHandle ./interfaces ./LayerView3D ./graphics/Graphics3DFeatureProcessor ./graphics/QueryEngine ./i3s/attributeEditing ./i3s/I3SAttributeOverrides ./i3s/I3SUtil ./support/DefinitionExpressionSceneLayerView ./support/fieldProperties ./support/PopupSceneLayerView ./support/SceneLayerViewRequiredFields ../support/debugFlags ../support/GraphicsMap ../support/orientedBoundingBox ../support/updatingProperties ../webgl-engine/lib/basicInterfaces ../../layers/SceneLayerView ../../support/Scheduler".split(" "),
function(W,w,k,H,X,I,g,O,Y,m,xa,ya,Z,aa,P,F,ba,ca,da,L,ea,fa,ha,Q,R,ia,h,ja,ka,S,la,J,ma,na,oa,pa,M,qa,ra,sa,ta,ua,va){function T(D){const x=D.attributeInfo;for(let e=0;e<D.graphics.length;e++){const a=D.graphics[e];a.attributes||(a.attributes={});if(g.isSome(x)&&g.isSome(x.loadedAttributes))for(const {name:b}of x.loadedAttributes)x.attributeData[b]&&(a.attributes[b]=J.getCachedAttributeValue(x.attributeData[b],e))}}const G=I.getLogger("esri.views.3d.layers.SceneLayerGraphicsView3D");I=na.defineFieldProperties();
h=function(D){function x(){var a=D.apply(this,arguments)||this;a.type="scene-layer-graphics-3d";a._nodesAddedToStage=new Map;a.drapeSourceType=ia.DrapeSourceType.Features;a._queryEngine=null;a._memCache=null;a._interactiveEditingSessions=new Map;a.loadedGraphics=new qa.GraphicsMap;a.holeFilling="always";a.progressiveLoadFactor=1;a.supportsHeightUnitConversion=!0;a._coordinatesOutsideExtentErrors=0;a._maxCoordinatesOutsideExtentErrors=20;return a}w._inheritsLoose(x,D);var e=x.prototype;e.initialize=
function(){var a,b;const c=this.layer;this.addResolvingPromise(c.indexInfo);this._attributeOverrides=new la.I3SAttributeOverrides(this.layer,null==(a=this.view.resourceController)?void 0:a.memoryController);J.checkSpatialReferences(c,this.view.spatialReference,this.view.viewingMode);this.fieldsHelper=new pa.SceneLayerViewRequiredFields({layerView:this});this.updatingHandles.add(()=>c.rangeInfos,d=>this._rangeInfosChanged(d),O.initial);this.updatingHandles.add(()=>c.renderer,(d,f)=>this._rendererChange(d,
f));this.updatingHandles.add(()=>[this.parsedDefinitionExpression,this.excludeObjectIdsSorted],()=>this._filterChange());this.updatingHandles.add(()=>this.view.floors,()=>this.processor.filterVisibility.filterChanged());this.handles.add(Y.init(M,"I3S_TREE_SHOW_TILES",d=>{if(d&&!this._treeDebugger){const f=this._controller.crsIndex;(new Promise((p,l)=>W(["./support/I3STreeDebugger"],p,l))).then(({I3STreeDebugger:p})=>{!this._treeDebugger&&M.I3S_TREE_SHOW_TILES&&(this._treeDebugger=new p({lv:this,view:this.view,
nodeSR:f}))})}else d||!this._treeDebugger||M.I3S_TREE_SHOW_TILES||(this._treeDebugger.destroy(),this._treeDebugger=null)}));this._set("processor",new ja({owner:this,preferredUpdatePolicy:ta.UpdatePolicy.ASYNC,scaleVisibilityEnabled:!0,filterVisibilityEnabled:!0,timeExtentVisibilityEnabled:!1,frustumVisibilityEnabled:!1,elevationAlignmentEnabled:!0,elevationFeatureExpressionEnabled:!1,dataExtent:c.fullExtent,updateClippingExtent:d=>this._updateClippingExtent(d)}));null==(b=this.processor.elevationAlignment)?
void 0:b.events.on("invalidate-elevation",d=>this._invalidateElevation(d));this.supportsHeightUnitConversion&&(this._verticalScale=da.getGeometryZScaler("point",c.spatialReference,this.view.spatialReference));this.addResolvingPromise(this.processor.setup());this._memCache=this.view.resourceController.memoryController.newCache(c.uid);this._controller=new fa({layerView:this,scaleVisibilityEnabled:!1});J.containsDraco(this.layer.geometryDefinitions)&&(this._worker=new R.I3SPointsWorkerHandle(d=>this.view.resourceController.schedule(d)));
this.handles.add(this.layer.on("apply-edits",d=>this.updatingHandles.addPromise(d.result)));this.handles.add(this.layer.on("edits",d=>this._handleEdits(d)));this.when(()=>{this._queryEngine=new ka.default({layerView:this,priority:va.TaskPriority.FEATURE_QUERY_ENGINE});this.updatingHandles.add(()=>this.maximumNumberOfFeatures,d=>this._controller.featureTarget=d,O.initial);this.updatingHandles.add(()=>this.suspended,d=>{d&&this._removeAllNodeData()})})};e.destroy=function(){this._treeDebugger=g.destroyMaybe(this._treeDebugger);
this._attributeOverrides=g.destroyMaybe(this._attributeOverrides);this._set("processor",g.destroyMaybe(this.processor));this._controller=g.destroyMaybe(this._controller);this._queryEngine=g.destroyMaybe(this._queryEngine);this._worker=g.destroyMaybe(this._worker);this._memCache=g.destroyMaybe(this._memCache);this._nodesAddedToStage.clear();this.fieldsHelper=g.destroyMaybe(this.fieldsHelper)};e.whenGraphicAttributes=function(){var a=w._asyncToGenerator(function*(b,c){return J.whenGraphicAttributes(this.layer,
b,this._getObjectIdField(),c,()=>[...this._nodesAddedToStage.values()])});return function(b,c){return a.apply(this,arguments)}}();e.getGraphicFromGraphicUid=function(a){if(!this.loadedGraphics)return null;const b=ea.hydrateGraphic(this.loadedGraphics.find(d=>d.uid===a),this.layer),c=this._getObjectIdField();if(!b||!b.attributes||!b.attributes[c])return null;b.layer=this.layer;b.sourceLayer=this.layer;return b};e.whenGraphicBounds=function(a,b){return this.processor.whenGraphicBounds(a,b)};e.computeAttachmentOrigin=
function(a,b){return this.processor.computeAttachmentOrigin(a,b)};e.canResume=function(){return D.prototype.canResume.call(this)&&(!this._controller||this._controller.rootNodeVisible)};e.isUpdating=function(){var a,b,c;return!!(null!=(a=this._controller)&&a.updating||null!=(b=this.processor)&&b.updating||null!=(c=this.fieldsHelper)&&c.updating)};e.highlight=function(a){return this.processor.highlight(a,this.layer.objectIdField)};e.createInteractiveEditSession=function(a){return S.createInteractiveEditSession(this.attributeEditingContext,
a)};e._extractBinaryPointData=function(){var a=w._asyncToGenerator(function*(b,c){b={geometryBuffer:b.geometryBuffer};g.isNone(this._worker)&&(this._worker=new R.I3SPointsWorkerHandle(d=>this.view.resourceController.schedule(d)));return this._worker.invoke(b,c).then(d=>{if(g.isSome(d))return{positionData:d.positions,featureIds:d.featureIds};throw Error("Failed to decompress Draco point data");})});return function(b,c){return a.apply(this,arguments)}}();e._checkExtent=function(a,b){a&&!ca.extentContainsCoords3D(a,
b)&&(this._coordinatesOutsideExtentErrors<this._maxCoordinatesOutsideExtentErrors&&G.error("Service Error: Coordinates outside of layer extent"),this._coordinatesOutsideExtentErrors+1===this._maxCoordinatesOutsideExtentErrors&&G.error("Maximum number of errors reached. Further errors are ignored."),this._coordinatesOutsideExtentErrors++)};e.addNode=function(){var a=w._asyncToGenerator(function*(b,c,d){if(!("geometryBuffer"in c&&null!==c.geometryBuffer||"pointData"in c))return Promise.reject();if(this._nodesAddedToStage.has(b.index))G.error("I3S node "+
b.id+" already added");else{if(g.isSome(this.layer.fullExtent)){var f=this.layer.fullExtent.clone();f.xmin-=.5;f.ymin-=.5;f.xmax+=.5;f.ymax+=.5;f.hasZ&&(f.zmin-=.5,f.zmax+=.5);f.hasM&&(f.mmin-=.5,f.mmax+=.5)}else f=null;var p=this._controller.crsVertex,l=[],n={graphics:null,featureIds:null,attributeInfo:c.attributeDataInfo,node:b};"geometryBuffer"in c&&null!==c.geometryBuffer?yield this._addNodeBinaryPointData(b,n,c,f,l,d):"pointData"in c&&this._addNodeLegacyPointData(b,n,c,f,l);yield this._attributeOverrides.apply(n.featureIds,
c.attributeDataInfo,d);b.numFeatures=n.graphics.length;this._updateNodeMemory(b);T(n);0<l.length&&(this._computeObb(b,l,p),this._controller.updateVisibility(b.index));if(!this._controller.isGeometryVisible(b))return this._cacheNodeData(n),Promise.resolve();if(g.isSome(this._verticalScale))for(const u of n.graphics)this._verticalScale(u.geometry);this._nodesAddedToStage.set(b.index,n);this.loadedGraphics.addMany(n.graphics);this._filterNode(n);this._treeDebugger&&this._treeDebugger.update();return Promise.resolve()}});
return function(b,c,d){return a.apply(this,arguments)}}();e._computeObb=function(a,b,c){const d=this._controller.crsIndex,f=d.isGeographic?this.view.renderSpatialReference:d;F.projectBuffer(b,c,0,b,f,0,b.length/3);a.serviceObb=ra.compute({data:b,size:3});d.isGeographic&&F.projectVectorToVector(a.serviceObb.center,f,a.serviceObb.center,d)};e.isNodeLoaded=function(a){return this._nodesAddedToStage.has(a)};e.isNodeReloading=function(){return!1};e.updateNodeState=function(){};e._addNodeBinaryPointData=
function(){var a=w._asyncToGenerator(function*(b,c,d,f,p,l){var n=yield this._extractBinaryPointData(d,l);if(null==n)return Promise.reject();d=this._getObjectIdField();l=this._controller.crsVertex;const u=this.view.spatialReference,K=this.processor.graphicsCore,{positionData:B,featureIds:y}=n;n=B.length/3;const t=[];for(let E=0;E<n;E++){var A=g.isSome(b.serviceObb)?b.serviceObb.center:[0,0,0],r=3*E,q=P.fromValues(B[r+0],B[r+1],B[r+2]);aa.add(q,q,A);b.serviceObb||p.push(q[0],q[1],q[2]);g.isSome(f)&&
this._checkExtent(f,q);r=y[E];A={};null!=r&&(A[d]=r);r=null==r?H.generateUID():r;F.projectBuffer(q,l,0,C,u,0,1);q=L.makeDehydratedPoint(C[0],C[1],C[2],u);var v=this.loadedGraphics.get(r);g.isSome(v)?(v.level<b.level&&(z.property="geometry",z.graphic=v,z.oldValue=g.unwrap(v.geometry),z.newValue=q,v.geometry=q,K.graphicUpdateHandler(z)),t.push(v)):(v=H.generateUID(),t.push({objectId:r,uid:v,geometry:q,attributes:A,visible:!0,level:b.level}))}c.graphics=t;c.featureIds=Array.from(y)});return function(b,
c,d,f,p,l){return a.apply(this,arguments)}}();e._addNodeLegacyPointData=function(a,b,c,d,f){const p=this._getObjectIdField(),l=this._controller.crsVertex,n=this.view.spatialReference,u=[0,0,0],K=[],B=[];for(const A of c.pointData){c=A.featureDataPosition;const r=c.length;var y=A.geometries&&A.geometries[0]||wa[r];const q=A.featureIds[0];if("points"!==y.params.type)continue;g.isSome(d)&&this._checkExtent(d,c);const v={};null!=q&&(v[p]=q);const E=null==q?H.generateUID():q;let N;"Embedded"===y.type&&
(N=y.params.vertexAttributes.position);for(y=0;y<N.length;y+=r){for(var t=0;t<r;t++)u[t]=c[t]+N[y+t];t=3===r;a.serviceObb||f.push(u[0],u[1],t?u[2]:0);F.projectBuffer(u,l,0,C,n,0,1);t=L.makeDehydratedPoint(C[0],C[1],t?C[2]:void 0,n);const U=this.loadedGraphics.get(E);g.isSome(U)?B.push(U):B.push({objectId:E,uid:H.generateUID(),geometry:t,attributes:v,visible:!0})}K.push(q)}b.graphics=B;b.featureIds=K};e._updateNodeMemory=function(a){a.memory=4096+(g.isSome(a.numFeatures)?a.numFeatures*this.processor.graphicsCore.usedMemoryPerGraphic:
0)};e._cacheNodeData=function(a){const b=a.graphics.reduce((c,d)=>L.estimateSize(d)+c,8*a.featureIds.length+1536);this._memCache.put(this._getMemCacheKey(a.node),a,b)};e._getMemCacheKey=function(a){return`${a.index}`};e._removeAllNodeData=function(){this._nodesAddedToStage.forEach(a=>{a&&(this._updateNodeMemory(a.node),this._cacheNodeData(a))});this._nodesAddedToStage.clear();this._treeDebugger&&this._treeDebugger.update();this.loadedGraphics.clear()};e.removeNode=function(a){if(a=this._removeNodeStageData(a))this._updateNodeMemory(a.node),
this._cacheNodeData(a)};e._removeNodeStageData=function(a){const b=this._nodesAddedToStage.get(a);if(!b)return null;this.loadedGraphics.removeMany(b.graphics);this._nodesAddedToStage.delete(a);this._treeDebugger&&this._treeDebugger.update();return b};e.loadCachedNodeData=function(){var a=w._asyncToGenerator(function*(b){return this._memCache.pop(this._getMemCacheKey(b))});return function(b){return a.apply(this,arguments)}}();e.addCachedNodeData=function(){var a=w._asyncToGenerator(function*(b,c,d,
f){if(this._nodesAddedToStage.has(b.index))G.error("I3S node "+b.id+" already added");else return this.loadedGraphics.addMany(c.graphics),this._nodesAddedToStage.set(b.index,c),this._updateNodeMemory(b),yield this.updateAttributes(b.index,d,f),this._filterNode(c),this._treeDebugger&&this._treeDebugger.update(),Promise.resolve()});return function(b,c,d,f){return a.apply(this,arguments)}}();e.getLoadedNodeIds=function(){const a=[];this._nodesAddedToStage.forEach(b=>a.push(b.node.id));return a.sort()};
e.getVisibleNodes=function(){const a=[];this._nodesAddedToStage.forEach(b=>a.push(b.node));return a};e.getLoadedNodeIndices=function(a){this._nodesAddedToStage.forEach((b,c)=>a.push(c))};e.getLoadedAttributes=function(a){if((a=this._nodesAddedToStage.get(a))&&g.isSome(a.attributeInfo))return a.attributeInfo.loadedAttributes};e.getAttributeData=function(a){if((a=this._nodesAddedToStage.get(a))&&g.isSome(a.attributeInfo))return a.attributeInfo.attributeData};e._setAttributeData=function(a,b){(a=this._nodesAddedToStage.get(a))&&
!g.isNone(a.attributeInfo)&&(a.attributeInfo.attributeData=b,this._attributeValuesChanged(a))};e.updateAttributes=function(){var a=w._asyncToGenerator(function*(b,c,d){if(b=this._nodesAddedToStage.get(b))yield this._attributeOverrides.apply(b.featureIds,c,d),b.attributeInfo=c,this._attributeValuesChanged(b)});return function(b,c,d){return a.apply(this,arguments)}}();e._attributeValuesChanged=function(a){T(a);this._filterNode(a);this.processor.graphicsCore.labelsEnabled&&(a=a.graphics.map(b=>b.uid),
this.processor.graphicsCore.updateLabelingInfo(a))};e._updateClippingExtent=function(a){this._controller&&this._controller.updateClippingArea(a);return!1};e._getObjectIdField=function(){return this.layer.objectIdField||"OBJECTID"};e._rendererChange=function(){var a=w._asyncToGenerator(function*(b,c){const {layer:{fieldsIndex:d}}=this,f=new Set;let p;b?(yield b.collectRequiredFields(f,d),p=Array.from(f).sort()):p=[];f.clear();let l;c?(yield c.collectRequiredFields(f,d),l=Array.from(f).sort()):l=[];
p.length===l.length&&p.every((n,u)=>p[u]===l[u])||this._reloadAllNodes()});return function(b,c){return a.apply(this,arguments)}}();e._rangeInfosChanged=function(a){null!=a&&0<a.length&&G.warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")};e._filterChange=function(){this._nodesAddedToStage.forEach(a=>this._filterNode(a))};e._reloadAllNodes=function(){this._removeAllNodeData();this._controller&&this._controller.restartNodeLoading()};
e._filterNode=function(a){const b=this.parsedDefinitionExpression,c=this.excludeObjectIdsSorted,d=this._getObjectIdField();for(const f of a.graphics){a=f.visible;const p=!b||this._evaluateClause(b,f),l=g.isNone(c)||0>X.binaryIndexOf(c,f.attributes[d]);f.visible=p&&l;a!==f.visible&&(z.graphic=f,z.property="visible",z.oldValue=a,z.newValue=f.visible,this.processor.graphicsCore.graphicUpdateHandler(z))}};e._invalidateElevation=function(a){const b=this._controller.crsIndex;F.projectBoundingRect(a.extent,
a.spatialReference,V,b);this._controller.updateElevationChanged(V,b)};e.createQuery=function(){const a={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};return g.isSome(this.filter)?this.filter.createQuery(a):new Q(a)};e.queryFeatures=function(a,b){return this._queryEngine.executeQuery(this._ensureQuery(a),null==b?void 0:b.signal)};e.queryObjectIds=function(a,b){return this._queryEngine.executeQueryForIds(this._ensureQuery(a),null==b?void 0:b.signal)};e.queryFeatureCount=
function(a,b){return this._queryEngine.executeQueryForCount(this._ensureQuery(a),null==b?void 0:b.signal)};e.queryExtent=function(a,b){return this._queryEngine.executeQueryForExtent(this._ensureQuery(a),null==b?void 0:b.signal)};e._ensureQuery=function(a){return this._addDefinitionExpressionToQuery(g.isNone(a)?this.createQuery():Q.from(a))};e.getUsedMemory=function(){var a,b,c;return null!=(a=null==(b=this.processor)?void 0:null==(c=b.graphicsCore)?void 0:c.usedMemory)?a:0};e.getUnloadedMemory=function(){var a,
b,c,d,f;return.8*((null!=(a=null==(b=this._controller)?void 0:b.unloadedMemoryEstimate)?a:0)+(null!=(c=null==(d=this.processor)?void 0:null==(f=d.graphicsCore)?void 0:f.unprocessedMemoryEstimate)?c:0))};e.ignoresMemoryFactor=function(){return this._controller&&this._controller.fixedFeatureTarget};e._handleEdits=function(a){S.processAttributeEdits(this.attributeEditingContext,a)};w._createClass(x,[{key:"requiredFields",get:function(){var a,b;return null!=(a=null==(b=this.fieldsHelper)?void 0:b.requiredFields)?
a:[]}},{key:"maximumNumberOfFeatures",get:function(){var a,b,c;const d=null==(a=this.processor)?void 0:null==(b=a.graphicsCore)?void 0:b.displayFeatureLimit;return null!=(c=null==d?void 0:d.maximumNumberOfFeatures)?c:0},set:function(a){null!=a?(this._override("maximumNumberOfFeatures",a),this._controller.fixedFeatureTarget=!0):(this._clearOverride("maximumNumberOfFeatures"),this._controller.fixedFeatureTarget=!1)}},{key:"maximumNumberOfFeaturesExceeded",get:function(){var a;return this.suspended?
!1:!(null==(a=this._controller)||!a.useMaximumNumberOfFeatures)&&!this._controller.leavesReached}},{key:"excludeObjectIdsSorted",get:function(){const a=this.layer.excludeObjectIds;return a.length?a.toArray().sort((b,c)=>b-c):null}},{key:"hasM",get:function(){return!1}},{key:"hasZ",get:function(){return!0}},{key:"updatePolicy",get:function(){return this.processor.graphicsCore.effectiveUpdatePolicy}},{key:"attributeEditingContext",get:function(){const a=this._getObjectIdField();return{sessions:this._interactiveEditingSessions,
fieldsIndex:this.layer.fieldsIndex,objectIdField:a,forEachNode:b=>this._nodesAddedToStage.forEach(c=>b(c.node,c.featureIds)),attributeStorageInfo:this.i3slayer.attributeStorageInfo,attributeOverrides:this._attributeOverrides,getAttributeData:b=>this.getAttributeData(b),setAttributeData:(b,c,d)=>{this._setAttributeData(b,c);b=this._nodesAddedToStage.get(b);g.isSome(d)?(d=this.loadedGraphics.get(d.attributes[a]),g.isSome(d)&&this.processor.graphicsCore.recreateGraphics([d])):g.isSome(b)&&this.processor.graphicsCore.recreateGraphics(b.graphics)},
clearMemCache:()=>{}}}},{key:"performanceInfo",get:function(){const a={displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:this.maximumNumberOfFeatures,totalNumberOfFeatures:-1,nodes:this._nodesAddedToStage.size,core:this.processor.graphicsCore.performanceInfo};this._controller&&this._controller.updateStats(a);return a}},{key:"test",get:function(){return{controller:this._controller,numNodes:this._nodesAddedToStage.size,numFeatures:this.loadedGraphics.length}}}]);return x}(ma.DefinitionExpressionSceneLayerView(oa.PopupSceneLayerView(h.LayerView3D(ua))));
k.__decorate([m.property()],h.prototype,"processor",void 0);k.__decorate([m.property({type:ha})],h.prototype,"filter",void 0);k.__decorate([m.property()],h.prototype,"loadedGraphics",void 0);k.__decorate([m.property({aliasOf:"layer"})],h.prototype,"i3slayer",void 0);k.__decorate([m.property()],h.prototype,"_controller",void 0);k.__decorate([m.property()],h.prototype,"updating",void 0);k.__decorate([m.property()],h.prototype,"suspended",void 0);k.__decorate([m.property()],h.prototype,"holeFilling",
void 0);k.__decorate([m.property(sa.updatingProgress)],h.prototype,"updatingProgress",void 0);k.__decorate([m.property({aliasOf:"_controller.updatingProgress"})],h.prototype,"updatingProgressValue",void 0);k.__decorate([m.property(I.requiredFields)],h.prototype,"requiredFields",null);k.__decorate([m.property(I.availableFields)],h.prototype,"availableFields",void 0);k.__decorate([m.property()],h.prototype,"fieldsHelper",void 0);k.__decorate([m.property({type:Number})],h.prototype,"maximumNumberOfFeatures",
null);k.__decorate([m.property({readOnly:!0})],h.prototype,"maximumNumberOfFeaturesExceeded",null);k.__decorate([m.property()],h.prototype,"excludeObjectIdsSorted",null);k.__decorate([m.property({readOnly:!0,aliasOf:"view.qualitySettings.sceneService.point.lodFactor"})],h.prototype,"lodFactor",void 0);k.__decorate([m.property({readOnly:!0})],h.prototype,"hasM",null);k.__decorate([m.property({readOnly:!0})],h.prototype,"hasZ",null);k=h=k.__decorate([Z.subclass("esri.views.3d.layers.SceneLayerGraphicsView3D")],
h);const wa={2:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0]}}},3:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0,0]}}}},C=P.create(),z={graphic:null,property:null,oldValue:null,newValue:null},V=ba.create();return k});