// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/asyncUtils ../../../core/Collection ../../../core/Logger ../../../core/maybe ../../../core/promiseUtils ../../../core/reactiveUtils ../../../core/screenUtils ../../../core/typedArrayUtil ../../../core/unitUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../chunks/vec3 ../../../chunks/vec3f32 ../../../geometry/projection ../../../geometry/support/aaBoundingBox ../../../geometry/support/aaBoundingRect ../../../geometry/support/plane ../../../layers/graphics/dehydratedFeatures ../../../layers/support/CodedValue ../../../layers/support/CodedValueDomain ../../../layers/support/Domain ../../../layers/support/InheritedDomain ../../../layers/support/RangeDomain ../../../layers/support/fieldUtils ../../../layers/support/PromiseQueue ../../../symbols/support/unitConversionUtils ./LayerView3D ./PointCloudWorkerHandle ./i3s/I3SUtil ./i3s/LoDUtil ./i3s/PagedNodeIndex ./i3s/PointCloudRendererUtil ./i3s/PointCloudWorkerUtil ./i3s/PointGraphic ./i3s/PointRenderer ./support/PopupSceneLayerView ../support/extentUtils ../support/index ../support/orientedBoundingBox ../support/updatingProperties ../webgl-engine/lib/RenderSlot ../../layers/LayerView ../../support/layerViewUtils ../../support/Scheduler".split(" "),
function(q,l,M,W,h,x,C,r,X,F,Y,t,ya,za,Aa,Z,aa,N,ba,ca,O,P,da,ea,fa,Ba,Ca,Da,Q,ha,ia,ja,ka,R,G,la,y,H,S,T,ma,na,U,oa,pa,qa,ra,I,sa){const J=h.getLogger("esri.views.3d.layers.PointCloudLayerView3D"),ta=P.create();h=function(K){function E(){var a=K.apply(this,arguments)||this;a.type="point-cloud-3d";a.maximumPointCount=4E6;a.slicePlaneEnabled=!1;a._renderer=null;a._rendererAdded=!1;a._renderedNodes=new Set;a._nodeScales=new Map;a._updateViewNeeded=!0;a._lodFactor=1;a._maxLoggedBoxWarnings=5;a._pageMultiplier=
1;a._nodeLoadEpoch=0;a._indexQueue=[];a._workQueue=[];a._idleQueue=new ha.PromiseQueue;a._indexPagesLoading=new Map;a._loadingNodes=new Map;a._recalcWork=!0;a._layerIsVisible=!1;a._codedDomainPopulationPromise=null;a._codedDomainPopulationAbortController=null;a._totalWork=0;a._index=null;a._loadingInitNodePage=!1;a._nodeIdArray=[];return a}q._inheritsLoose(E,K);var e=E.prototype;e.initialize=function(){const a=this.view.resourceController;this._worker=new ka.PointCloudWorkerHandle(d=>a.schedule(d));
this.addResolvingPromise(this._worker.promise);this._tmpPoint=da.makeDehydratedPoint(0,0,0,this.layer.spatialReference);R.checkPointCloudLayerValid(this.layer);R.checkPointCloudLayerCompatibleWithView(this.layer,this.view);this._indexRequester=a.createStreamDataRequester(U.ClientType.I3S_INDEX);this._dataRequester=a.createStreamDataRequester(U.ClientType.I3S_DATA);this._initRenderer();const b=this._initNodePages(),c=this.view.resourceController.memoryController;this._memCache=c.newCache(this.layer.uid);
this.updatingHandles.add(()=>this._clippingBox,()=>this._setUpdateViewNeeded(),r.initial);this.updatingHandles.add(()=>this._elevationOffset,()=>this._elevationOffsetChanged(),r.initial);this.updatingHandles.add(()=>this.layer.renderer,()=>this._rendererChanged(),r.initial);this.updatingHandles.add(()=>this.layer.filters,()=>this._reload(),r.initial);this.updatingHandles.add(()=>this.layer.outFields,()=>this._reload(),r.initial);this.updatingHandles.add(()=>this.layer.effectiveScaleRange,()=>this._setUpdateViewNeeded());
this.updatingHandles.add(()=>this.view.state.contentCamera,()=>this._setUpdateViewNeeded());this.handles.add([this.view.basemapTerrain.on("scale-change",d=>this._scaleUpdateHandler(d)),c.events.on("quality-changed",()=>this._setUpdateViewNeeded())]);this.addResolvingPromise(b);this.when(()=>{this.handles.add([a.scheduler.registerTask(sa.TaskPriority.POINT_CLOUD_LAYER,this),a.scheduler.registerIdleStateCallbacks(()=>this._idleBegin(),()=>this._idleEnd()),this.updatingHandles.add(()=>this.suspended,
d=>{d?this._clearNodeState():this._setUpdateViewNeeded()},r.initial)])},()=>{this.updatingHandles.removeAll();this.handles.removeAll()})};e._setUpdateViewNeeded=function(){this._updateViewNeeded=!0;this._updateLoading()};e.destroy=function(){this.cancelLoading();this._worker&&(this._worker.destroy(),this._worker=null);this._destroyRenderer();this._memCache.destroy();this._memCache=null;this._codedDomainPopulationAbortController&&(this._codedDomainPopulationAbortController.abort(),this._codedDomainPopulationAbortController=
null);this._codedDomainPopulationPromise=null};e._initRenderer=function(){this._renderer=new T.PointRenderer({createGraphic:(a,b,c)=>this._createGraphic(a,b,c)});this._renderer.layerUid=this.layer.uid;this.updatingHandles.add(()=>this._clippingBox,a=>this._renderer.clippingBox=a,r.initial);this.updatingHandles.add(()=>this.suspended,a=>this._setPointsVisible(!a),r.initial);this.updatingHandles.add(()=>this.pointScale,a=>this._renderer.scaleFactor=a,r.initial);this._renderer.minSizePx=Math.sqrt(2);
this.updatingHandles.add(()=>this.useRealWorldSymbolSizes,a=>this._renderer.useRealWorldSymbolSizes=a,r.initial);this.updatingHandles.add(()=>this.pointSize,a=>{const b=X.pt2px(a);this._renderer.size=a;this._renderer.sizePx=b},r.initial);this.updatingHandles.add(()=>this.slicePlaneEnabled,a=>this._renderer.slicePlaneEnabled=a,r.initial);this.updatingHandles.add(()=>this.inverseDensity,()=>this._setUpdateViewNeeded(),r.initial);this.updatingHandles.add(()=>this.maximumPointCount,()=>this._setUpdateViewNeeded(),
r.initial);this.updatingHandles.add(()=>this.view.qualitySettings.sceneService.pointCloud.lodFactor,a=>{this._lodFactor=a;this._setUpdateViewNeeded()},r.initial)};e._destroyRenderer=function(){this._renderer.removeAll();this._setPointsVisible(!1)};e._createGraphic=function(a,b,c){const d=x.isSome(a.pointIdFilterMap)?a.pointIdFilterMap[b]:b;c=this.view.computeMapPointFromVec3d(c);const f=this._createGraphicAttributes(a,d);return new S.PointGraphic({pointCloudMetadata:{nodeId:a.id,pointIndexInNode:b,
attributePointIndexInNode:d,epoch:this._nodeLoadEpoch},geometry:c,attributes:f,layer:this.layer,sourceLayer:this.layer})};e._createGraphicAttributes=function(a,b){const c={};for(const d of a.attributes)this._encodeGraphicAttribute(d.attributeInfo,d.values,b,c);return c};e._encodeGraphicAttribute=function(a,b,c,d){var f=a.storageInfo&&a.storageInfo.attributeValues;const g=f?f.valuesPerElement:1;if(1===g)d[a.name]=b[c];else if("UInt8"===f.valueType&&4>=g){f=0;c*=g;for(let m=c;m<c+g;m++)f=(f<<8)+b[m];
d[a.name]=f}else d[a.name]=void 0};e._setPointsVisible=function(a){a&&!this._rendererAdded?(this.view._stage.addRenderPlugin([qa.RenderSlot.OPAQUE_PLUGIN],this._renderer),this._rendererAdded=!0):!a&&this._rendererAdded&&(this.view._stage.removeRenderPlugin(this._renderer),this._rendererAdded=!1)};e._rendererChanged=function(){this._renderer.useFixedSizes=y.rendererUsesFixedSizes(this.layer.renderer);this._reload()};e._reload=function(){this._clearNodeState();this._memCache.clear();this._setUpdateViewNeeded()};
e._elevationOffsetChanged=function(){this._clearNodeState();this._memCache.clear();this._initNodePages()};e._scaleUpdateHandler=function(a){const b=this.layer.effectiveScaleRange;I.isScaleRangeActive(b.minScale,b.maxScale)?ba.projectBoundingRect(a.extent,a.spatialReference,V,this.layer.spatialReference)&&(this._nodeScales.forEach((c,d)=>{this._renderedNodes.has(d)?(c=this._index.getNode(d),O.containsPoint(V,c.obb.center)&&this._nodeScales.set(d,a.scale)):this._nodeScales.delete(d)}),this._setUpdateViewNeeded()):
this._nodeScales.clear()};e._displayNodes=function(a){this._workQueue=G.nodeDiff([...this._renderedNodes],a,this._index);G.sortFrontToBack(this._workQueue,this.view.state.contentCamera.viewForward,this._index);G.splitWorkEntries(this._workQueue,8,this._index);this._updateQueues();this._totalWork=this._computeWork();this._updateLoading();this._layerIsVisible=0<a.length||this._loadingInitNodePage;this.notifyChange("suspended")};e.cancelLoading=function(){this._cancelNodeLoading();this._cancelIndexLoading()};
e._cancelNodeLoading=function(){const a=[];this._loadingNodes.forEach(({abortController:b})=>a.push(b));this._loadingNodes.clear();for(const b of a)b.abort();this._workQueue=[];this._idleQueue.cancelAll();this._totalWork=this._computeWork();this._updateLoading()};e._updateQueues=function(){const a=new Set;this._workQueue.forEach(d=>d.load.forEach(f=>a.add(f)));const b=[],c=new Map;this._loadingNodes.forEach((d,f)=>{a.has(f)?c.set(f,d):b.push(d)});this._loadingNodes=c;for(const {abortController:d}of b)d.abort();
this._workQueue=this._workQueue.filter(d=>{for(const f of d.load)if(this._loadingNodes.has(f))return this._recalcWork=!0,!1;return!0});this._totalWork=this._computeWork();this._updateLoading()};e._cancelIndexLoading=function(){this._indexQueue=[];this._indexPagesLoading.forEach(({abortController:a})=>a.abort());this._indexPagesLoading.clear();this._totalWork=this._computeWork();this._updateLoading()};e._clearNodeState=function(){this._nodeLoadEpoch++;this._renderedNodes.forEach(a=>this._removeFromRenderer(a));
this._cancelNodeLoading()};e._idleBegin=function(){this._setUpdateViewNeeded()};e._idleEnd=function(){this._setUpdateViewNeeded()};e.runTask=function(a){if(this.suspended)this._updateViewNeeded&&(this._updateViewNeeded=!1,a=this._isRootNodeVisible(),a!==this._layerIsVisible&&(this._layerIsVisible=a,this.notifyChange("suspended")),this._updateLoading());else{for(a.run(()=>this._updateWorkQueues());0<this._indexQueue.length&&a.run(()=>this._processIndexQueue()););this._processWorkQueue(a);this._idleQueue.runTask(a)}};
e._processIndexQueue=function(){const a=this._indexQueue.shift(),b=this._loadNodePage(a);this._indexPagesLoading.set(a,b);b.promise.then(c=>{this._index.addPage(a,c,this._elevationOffset);this._setUpdateViewNeeded()}).then(()=>{this._indexPagesLoading.delete(a)},()=>{this._indexPagesLoading.delete(a)});return!0};e._processWorkQueue=function(a){for(;!a.done;){const b=this._scheduleWorkEntry();if(x.isNone(b))break;this._processWorkEntry(b);a.madeProgress()}};e._scheduleWorkEntry=function(){let a=this._workQueue.length;
for(;a--;){const b=this._workQueue.shift();if(b.remove.find(c=>!this._renderedNodes.has(c)))this._workQueue.push(b);else return b}return null};e._processWorkEntry=function(a){if(0===a.load.length)for(const b of a.remove)this._removeFromRenderer(b);else Promise.all(a.load.map(b=>{const c=new AbortController,d=this._memCache.pop(b.toString());x.isSome(d)?this._loadingNodes.set(b,{abortController:c,promise:Promise.resolve(d)}):this._loadingNodes.has(b)||this._loadingNodes.set(b,{abortController:c,promise:this._loadNode(b,
c.signal)});return this._loadingNodes.get(b).promise})).then(b=>{for(let c=0;c<a.load.length;c++)if(b[c]){const d=this._setupRendererData(a.load[c],b[c]);this._addToRenderer(d)}for(const c of a.remove)this._removeFromRenderer(c)}).catch(()=>{}).then(()=>{for(const b of a.load)this._loadingNodes.delete(b);this._updateLoading();this._recalcWork&&!this._idleQueue.running&&0===this._indexQueue.length&&0===this._loadingNodes.size&&(this._recalcWork=!1,this._setUpdateViewNeeded())}),this._updateLoading()};
e._populateClassCodeCodedDomain=function(){var a=q._asyncToGenerator(function*(b,c){const d=this.layer.fieldsIndex.get("CLASS_CODE");d&&!d.domain&&-1!==b.indexOf(d.name)&&(b=yield M.result(this.layer.queryCachedStatistics("CLASS_CODE",{signal:c})),!1!==b.ok&&(b=(b=b.value)&&b.labels&&b.labels.labels)&&Array.isArray(b)&&(d.domain=new fa({name:"CLASS_CODE",codedValues:b.map(f=>new ea.default({code:f.value,name:f.label}))})))});return function(b,c){return a.apply(this,arguments)}}();e.prepareFetchPopupFeatures=
function(){var a=q._asyncToGenerator(function*(b){this._codedDomainPopulationPromise||(this._codedDomainPopulationAbortController=new AbortController,this._codedDomainPopulationPromise=this._populateClassCodeCodedDomain(b,this._codedDomainPopulationAbortController.signal).then(()=>{this._codedDomainPopulationAbortController=null}));return this._codedDomainPopulationPromise});return function(b){return a.apply(this,arguments)}}();e.whenGraphicAttributes=function(){var a=q._asyncToGenerator(function*(b,
c){var d=this;const f=this._splitGraphicsPerNode(b),g=this.layer.attributeStorageInfo,m=c.map(p=>y.getAttributeInfo(g,p)),v=function(){var p=q._asyncToGenerator(function*(n,w){const A=d._index.getNode(w);yield M.forEach(m,function(){var u=q._asyncToGenerator(function*(k){const B=k.useElevation?yield d._loadElevationAttributeFromGeometry(A.resourceId):yield d._loadAndParseAttribute(A,k);if(B)for(const D of n)d._isValidPointGraphic(D)&&d._encodeGraphicAttribute(k,B,D.pointCloudMetadata.attributePointIndexInNode,
D.attributes)});return function(k){return u.apply(this,arguments)}}())});return function(n,w){return p.apply(this,arguments)}}(),z=[];f.forEach((p,n)=>{z.push(v(p,n))});yield C.eachAlways(z);return b});return function(b,c){return a.apply(this,arguments)}}();e._isValidPointGraphic=function(a){return a instanceof S.PointGraphic&&a.pointCloudMetadata&&a.pointCloudMetadata.epoch===this._nodeLoadEpoch};e._splitGraphicsPerNode=function(a){const b=new Map;for(const c of a){if(!this._isValidPointGraphic(c))continue;
a=c.pointCloudMetadata;const d=b.get(a.nodeId);d?d.push(c):b.set(a.nodeId,[c])}return b};e._loadAndParseAttribute=function(){var a=q._asyncToGenerator(function*(b,c){const d=yield this._loadAttribute(b.resourceId,c,null);return x.isSome(d)?H.getAttributeValues({attributeInfo:c,buffer:d},null,b.vertexCount):null});return function(b,c){return a.apply(this,arguments)}}();e._loadElevationAttributeFromGeometry=function(){var a=q._asyncToGenerator(function*(b){b=H.readGeometry(this.layer.store.defaultGeometrySchema,
yield this._loadGeometry(b,null));return H.elevationFromPositions(b,b.length/3)});return function(b){return a.apply(this,arguments)}}();e.highlight=function(a){if(!a)return{remove(){}};a=W.isCollection(a)?a.toArray():Array.isArray(a)?a:[a];return this._renderer.highlight(a.map(b=>this._graphicToPointDefinition(b)))};e._graphicToPointDefinition=function(a){if(!this._isValidPointGraphic(a))return null;const {nodeId:b,pointIndexInNode:c}=a.pointCloudMetadata;return null!=b&&null!=c?{nodeId:b,pointId:c}:
null};e._computeWork=function(){let a=0;for(const b of this._workQueue)a+=b.load.length+b.remove.length;a+=this._loadingNodes.size;a+=(this._indexQueue.length+this._indexPagesLoading.size)*this._index.pageSize;a+=this._loadingInitNodePage?100:0;return a+=this._updateViewNeeded?100:0};e._updateLoading=function(){this.notifyChange("updating");this.notifyChange("updatingProgressValue")};e.canResume=function(){return K.prototype.canResume.call(this)&&this._layerIsVisible};e.isUpdating=function(){return this.suspended?
this._updateViewNeeded:0<this._computeWork()};e._initNodePages=function(){const a=this.layer.store.index;this._index=new la(this.layer.spatialReference,this.view.renderCoordsHelper.spatialReference,a.nodesPerPage||a.nodePerIndexBlock);this._cancelIndexLoading();this._traverseVisible=this._index.createVisibilityTraverse();this._layerIsVisible=this._loadingInitNodePage=!0;this.notifyChange("suspended");this._updateLoading();this._pageMultiplier=null!=a.nodesPerPage?1:a.nodePerIndexBlock;return this._loadNodePage(0).promise.then(b=>
{this._index.addPage(0,b,this._elevationOffset);this._loadingInitNodePage=!1;this._setUpdateViewNeeded()})};e._loadNodePage=function(a){const b=new AbortController;return{promise:this._requestNodePage(`${this.baseUrl}/nodepages/${a*this._pageMultiplier}`,b.signal).then(c=>c.nodes.map((d,f)=>({resourceId:null!=d.resourceId?d.resourceId:a*this._index.pageSize+f,obb:d.obb,firstChild:d.firstChild,childCount:d.childCount,vertexCount:null!=d.vertexCount?d.vertexCount:d.pointCount,lodThreshold:null!=d.lodThreshold?
d.lodThreshold:d.effectiveArea}))),abortController:b}};e._updateWorkQueues=function(){if(!this._updateViewNeeded)return!1;let a=this.inverseDensity/this._lodFactor*this._getLodMemoryFactor();const b=this.maximumPointCount*this._lodFactor*this._getLodMemoryFactor();let c=this._computeNodesForMinimumDensity(a),d=this._computePointCount(c),f=Math.sqrt(d/(.75*b));for(;d>b;)a*=f,c=this._computeNodesForMinimumDensity(a),d=this._computePointCount(c),f=Math.sqrt(2);this._displayNodes(c);this._updateViewNeeded=
!1;this._updateLoading();return!0};e._computePointCount=function(a){let b=0;for(let c=0;c<a.length;c++){const d=this._index.getNode(a[c]);d&&(b+=d.vertexCount)}return b};e._getLodMemoryFactor=function(){return this.view.resourceController.memoryController.memoryFactor};e._isRootNodeVisible=function(){let a=!1;this._traverseVisible({frustum:this.view.state.contentCamera.frustum,clippingBox:this._clippingBox},{predicate:(b,c,d)=>{a=d;return!1},pageMiss:()=>{}});return a};e._computeNodesForMinimumDensity=
function(a){const b=this.view.state.contentCamera,c=b.frustum,d=this._clippingBox,f=b.viewForward,g=aa.dot(f,b.eye),m=P.fromNormalAndOffset(f,-g,ta),v=b.perScreenPixelRatio/2,z=a*a,p=this._nodeIdArray;p.length=0;const {minScale:n,maxScale:w}=I.extractSafeScaleBounds(this.layer),A=0===n&&0===w?u=>p.push(u):u=>{const k=this._getScale(u);I.scaleBoundsPredicate(k,n,w)&&p.push(u)};this._traverseVisible({frustum:c,clippingBox:d},{predicate:(u,k,B)=>{if(!B)return!1;if(0===k.childCount)return A(u),!1;B=this._index.getRenderObb(u);
return this._computeAveragePixelArea(B,k.lodThreshold,k.vertexCount,m,v)<=z?(A(u),!1):!0},pageMiss:(u,k)=>{A(u);0>this._indexQueue.indexOf(k)&&this._indexQueue.push(k)}});return p};e._getScale=function(a){var b=this._nodeScales.get(a);null==b&&(b=this._index.getNode(a).obb.center,this._tmpPoint.x=b[0],this._tmpPoint.y=b[1],this._tmpPoint.z=b[2],b=this.view.basemapTerrain.getScale(this._tmpPoint),this._nodeScales.set(a,b));return b};e._computeAveragePixelArea=function(a,b,c,d,f){a=Math.max(1E-7,oa.minimumDistancePlane(a,
d));return b/(a*a)/(4*f*f)/c};e._loadNode=function(a,b){try{return this._loadNodeAsync(a,b)}catch(c){throw C.isAbortError(c)||J.error(c),c;}};e._loadAdditionalUserAttributes=function(){var a=q._asyncToGenerator(function*(b,c,d){var f=this.layer.outFields;if(!f)return[];f=Q.unpackFieldNames(this.layer.fieldsIndex,f);b=new Set(b.map(v=>x.isSome(v)?v.name:null));const g=this.layer.attributeStorageInfo,m=[];for(const v of f)b.has(v)||(f=y.getAttributeInfo(g,v))&&m.push(c(f));c=yield C.eachAlwaysValues(m);
C.throwIfAborted(d);return x.mapSome(c,v=>v)});return function(b,c,d){return a.apply(this,arguments)}}();e._loadNodeAsync=function(){var a=q._asyncToGenerator(function*(b,c){var d=this;const f=this._index.getNode(b),g=y.getRendererInfo(this.layer),m=y.getFilterInfo(this.layer),v=f.resourceId,z=function(){var p=q._asyncToGenerator(function*(n){if(x.isNone(n))return null;if(n.useElevation)return{attributeInfo:n,buffer:null};const w=yield d._loadAttribute(v,n,c);return x.isSome(w)?{attributeInfo:n,buffer:w}:
null});return function(n){return p.apply(this,arguments)}}();return this._idleQueue.push(q._asyncToGenerator(function*(){var p=d._loadGeometry(v,c);const {primaryAttribute:n,modulationAttribute:w}=g,A=z(n),u=z(w);var k=m.map(L=>L.attributeInfo);const B=k.map(L=>z(L));k=d._loadAdditionalUserAttributes([n,w,...k],z,c);const [D,ua,va,wa,xa]=yield Promise.all([p,A,u,Promise.all(B),k]);C.throwIfAborted(c);p={geometryBuffer:D,primaryAttributeData:ua,modulationAttributeData:va,filterAttributesData:wa,userAttributesData:xa,
schema:d.layer.store.defaultGeometrySchema,rendererInfo:g,filterInfo:m,obb:d._index.getRenderObb(b),elevationOffset:d._elevationOffset,inSR:d.layer.spatialReference.toJSON(),outSR:d.view.renderCoordsHelper.spatialReference.toJSON()};return d._worker.invoke(p,c)}),c)});return function(b,c){return a.apply(this,arguments)}}();e._loadGeometry=function(){var a=q._asyncToGenerator(function*(b,c){return this._requestData(`${this.baseUrl}/nodes/${b}/geometries/0`,c)});return function(b,c){return a.apply(this,
arguments)}}();e._loadAttribute=function(){var a=q._asyncToGenerator(function*(b,c,d){return x.isNone(c)||!c.storageInfo?null:this._requestData(`${this.baseUrl}/nodes/${b}/attributes/${c.storageInfo.key}`,d)});return function(b,c,d){return a.apply(this,arguments)}}();e._requestNodePage=function(a,b){return this._indexRequester.request(a,"json",{query:{f:"json",token:this.layer.apiKey},signal:b})};e._requestData=function(a,b){return this._dataRequester.request(a,"binary",{query:{token:this.layer.apiKey},
signal:b})};e._removeFromRenderer=function(a){if(this._renderedNodes.has(a)){const b=this._renderer.removeNode(a);this._renderedNodes.delete(a);this._nodeScales.delete(a);this._memCache.put(b.id.toString(),b,5*b.coordinates.length+128)}};e._addToRenderer=function(a){this._renderedNodes.has(a.id)||(this._renderedNodes.add(a.id),this._renderer.addNode(a))};e._setupRendererData=function(a,b){const c=this._index.getNode(a),d=Math.sqrt(c.lodThreshold/c.vertexCount),f=this._index.getRenderObb(a);if(T.isInstanceOfNode(b))return b.splatSize=
d,b.obb=f,b.origin=N.clone(b.obb.center),b;var g=.01*Math.max(f.halfSize[0],f.halfSize[1],f.halfSize[2]);if(b.obb.halfSize[0]>f.halfSize[0]+g||b.obb.halfSize[1]>f.halfSize[1]+g||b.obb.halfSize[2]>f.halfSize[2]+g)0<this._maxLoggedBoxWarnings&&(g=m=>`[${m.halfSize[0]}, ${m.halfSize[1]}, ${m.halfSize[2]}]`,J.warn(`Node ${a} reported bounding box too small. got ${g(f)} but points cover ${g(b.obb)}`),0===--this._maxLoggedBoxWarnings&&J.warn("  Too many bounding box errors, stopping reporting for this layer.")),
this._index.setRenderObb(a,b.obb);return{id:a,coordinates:b.points,origin:N.clone(f.center),rgb:b.rgb,attributes:b.attributes,pointIdFilterMap:b.pointIdFilterMap,highlights:null,splatSize:d,obb:f,isLeaf:0===c.childCount}};e.getUsedMemory=function(){let a=0;this._renderer.forEachNode(b=>{a+=160;a+=F.estimateSize(b.coordinates);for(const c of b.attributes)b=c.values,F.isArrayBuffer(b.buffer)&&(a+=F.estimateSize(b))});return a};e.getUnloadedMemory=function(){var a=this._renderedNodes.size;if(4>a)return 0;
const b=[...this._renderedNodes].reduce((f,g)=>f+this._index.getNode(g).vertexCount);let c=this._loadingNodes.size;for(var d=0;d<this._workQueue.length;d++)c+=this._workQueue[d].load.length,c-=this._workQueue[d].remove.length;if(0>c)return 0;d=c*b/a;a=(this.getUsedMemory()-160*a)/b;return d*a+160*c};e.ignoresMemoryFactor=function(){return!1};q._createClass(E,[{key:"pointScale",get:function(){const a=y.getSplatSizeAlgorithm(this.layer&&this.layer.renderer);return a&&null!=a.scaleFactor?a.scaleFactor:
1}},{key:"useRealWorldSymbolSizes",get:function(){const a=y.getFixedSizeAlgorithm(this.layer&&this.layer.renderer);return a&&null!=a.useRealWorldSymbolSizes?a.useRealWorldSymbolSizes:!1}},{key:"pointSize",get:function(){const a=y.getFixedSizeAlgorithm(this.layer&&this.layer.renderer);return a&&null!=a.size?a.size:0}},{key:"inverseDensity",get:function(){return this.layer&&this.layer.renderer?96/this.layer.renderer.pointsPerInch:5}},{key:"availableFields",get:function(){var a=y.getRendererInfo(this.layer);
const b=new Set;a.primaryAttribute&&b.add(a.primaryAttribute.name);a.modulationAttribute&&b.add(a.primaryAttribute.name);if(a=y.getFilterInfo(this.layer))for(const c of a)b.add(c.attributeInfo.name);if(this.layer.outFields)for(const c of Q.unpackFieldNames(this.layer.fieldsIndex,this.layer.outFields))b.add(c);return Array.from(b)}},{key:"_clippingBox",get:function(){if(!this.view||!this.view.clippingArea)return null;const a=ca.create();return na.projectToBoundingBox(this.view.clippingArea,a,this.view.renderSpatialReference)?
a:null}},{key:"_elevationOffset",get:function(){const a=this.layer&&this.layer.elevationInfo;if(a&&"absolute-height"===a.mode){const b=Y.getMetersPerVerticalUnitForSR(this.layer.spatialReference),c=ia.getMetersPerUnit(a.unit);return x.unwrapOr(a.offset,0)*c/b}return 0}},{key:"running",get:function(){return this.suspended?this._updateViewNeeded:this._updateViewNeeded||0<this._indexQueue.length||0<this._workQueue.length||this._idleQueue.running}},{key:"updatingProgressValue",get:function(){if(this.suspended)return this._updateViewNeeded?
0:1;const a=this._computeWork();return 1-Math.min(this._totalWork,a)/this._totalWork}},{key:"performanceInfo",get:function(){return{nodes:this._renderedNodes.size,displayedNumberOfFeatures:[...this._renderedNodes].reduce((a,b)=>a+this._index.getNode(b).vertexCount,0),maximumNumberOfFeatures:this.maximumPointCount,totalNumberOfFeatures:-1,core:null,"Loading Nodes":this._loadingNodes.size,"Index Queue":this._indexQueue.length,"Work Queue":this._workQueue.length,"Idle Queue":this._idleQueue.length}}},
{key:"test",get:function(){return{index:this._index,visibleNodes:this._renderedNodes}}}]);return E}(ma.PopupSceneLayerView(ja.LayerView3D(ra)));l.__decorate([t.property()],h.prototype,"layer",void 0);l.__decorate([t.property({readOnly:!0,aliasOf:"layer.parsedUrl.path"})],h.prototype,"baseUrl",void 0);l.__decorate([t.property({readOnly:!0})],h.prototype,"pointScale",null);l.__decorate([t.property({readOnly:!0})],h.prototype,"useRealWorldSymbolSizes",null);l.__decorate([t.property({readOnly:!0})],h.prototype,
"pointSize",null);l.__decorate([t.property({readOnly:!0})],h.prototype,"inverseDensity",null);l.__decorate([t.property()],h.prototype,"maximumPointCount",void 0);l.__decorate([t.property({readOnly:!0})],h.prototype,"availableFields",null);l.__decorate([t.property({readOnly:!0})],h.prototype,"_clippingBox",null);l.__decorate([t.property({readOnly:!0})],h.prototype,"_elevationOffset",null);l.__decorate([t.property({type:Boolean})],h.prototype,"slicePlaneEnabled",void 0);l.__decorate([t.property()],
h.prototype,"updating",void 0);l.__decorate([t.property(pa.updatingProgress)],h.prototype,"updatingProgress",void 0);l.__decorate([t.property({readOnly:!0})],h.prototype,"updatingProgressValue",null);l=h=l.__decorate([Z.subclass("esri.views.3d.layers.PointCloudLayerView3D")],h);const V=O.create();return l});