/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import{i as e,b as s,h as r,k as i,m as o,x as n,o as a}from"../core/lang.js";import{createResolver as h,isAbortError as l}from"../core/promiseUtils.js";import"./Logger.js";import"./ensureType.js";import"../core/accessorSupport/decorators/property.js";import{subclass as u}from"../core/accessorSupport/decorators/subclass.js";import{b as d}from"./aaBoundingRect.js";import{C as p}from"./CircularArray.js";import{a as f,m as c}from"./mat2d.js";import{c as m}from"./mat2df32.js";import{t as _}from"./vec2.js";import{c as y}from"./vec2f32.js";import{a as b,W as g}from"./enums4.js";import{u as j}from"./Utils16.js";import{D as x,W as w,F as v}from"./FeatureContainer.js";import{B as C,V as S}from"./VertexArrayObject.js";import{U as E}from"./enums.js";import{s as T}from"./schemaUtils.js";import{B}from"./BaseTileRenderer.js";import{l as U}from"./visualVariablesUtils.js";import{b as L}from"./brushes.js";import"../core/Error.js";import"./object.js";import"../config.js";import"./string.js";import"./get.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"./tracking.js";import"./mathUtils.js";import"./common.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"./JSONSupport.js";import"../core/Accessor.js";import"./deprecate.js";import"./ArrayPool.js";import"./watch.js";import"../core/scheduling.js";import"./nextTick.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./Ellipsoid.js";import"./enums2.js";import"./number2.js";import"./Texture.js";import"./context-util.js";import"./VertexElementDescriptor.js";import"./mat3.js";import"./mat3f32.js";import"./definitions.js";import"./TiledDisplayObject.js";import"./DisplayObject.js";import"./Evented.js";import"./TileKey.js";import"./Queue.js";import"./FramebufferObject.js";import"./TileContainer.js";import"./WGLContainer.js";import"./Container.js";import"./EffectView.js";import"./parser.js";import"./colorUtils.js";import"./screenUtils.js";import"./mat4f32.js";import"./mat4.js";import"./_commonjsHelpers.js";import"./earcut.js";import"./vec2f64.js";import"./featureConversionUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"../Color.js";import"./unitUtils.js";import"./jsonMap.js";import"./projectionEllipsoid.js";import"./lengthUtils.js";import"./capabilities2.js";import"./visualVariablesUtils2.js";import"./createSymbolSchema.js";import"./MaterialKey.js";import"./alignmentUtils.js";import"./CIMSymbolHelper.js";import"./shapingUtils.js";import"./Rect.js";import"./floatRGBA.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"./utils7.js";import"./GeometryUtils.js";import"./normalizeUtilsCommon.js";import"./cimAnalyzer.js";import"./arcadeOnDemand.js";import"../geometry.js";import"./typeUtils.js";import"./callExpressionWithFeature.js";import"./quantizationUtils.js";import"./ExpandedCIM.js";import"../portal/Portal.js";import"./Loadable.js";import"./Promise.js";import"./locale.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"./persistableUrlUtils.js";import"./clusterUtils2.js";import"./MD5.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"./LegendOptions.js";import"../renderers/visualVariables/support/SizeStop.js";import"./sizeVariableUtils.js";import"./visualVariableUtils.js";import"../Graphic.js";import"../PopupTemplate.js";import"../core/Collection.js";import"./shared.js";import"../layers/support/fieldUtils.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"./enumeration.js";import"../popup/support/FieldInfoFormat.js";import"./date.js";import"./number.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"./chartMediaInfoUtils.js";import"./MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../support/actions/ActionBase.js";import"./Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils3.js";import"../symbols/edges/Edges3D.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils4.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"./aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"./Clonable.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"./Thumbnail.js";import"./Symbol3DVerticalOffset.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./compilerUtils.js";import"./util2.js";import"../core/HandleOwner.js";import"../core/Handles.js";import"../core/reactiveUtils.js";import"./pixelUtils.js";import"../layers/support/PixelBlock.js";import"./DefaultVertexAttributeLayouts.js";import"./vec4f32.js";import"./ProgramTemplate.js";import"./Program.js";import"./StyleDefinition.js";import"./config.js";import"./GeometryUtils2.js";class V{constructor(t){this._head=t,this._cursor=t}static from(t){const e=M.from(new Float32Array(t));return new V(e)}get id(){return this._cursor.id}get baseZoom(){return this._cursor.baseZoom}get anchorX(){return this._cursor.anchorX}get anchorY(){return this._cursor.anchorY}get directionX(){return this._cursor.directionX}get directionY(){return this._cursor.directionY}get size(){return this._cursor.size}get materialKey(){return this._cursor.materialKey}get boundsCount(){return this._cursor.boundsCount}computedMinZoom(){return this._cursor.computedMinZoom()}setComputedMinZoom(t){return this._cursor.setComputedMinZoom(t)}boundsComputedAnchorX(t){return this._cursor.boundsComputedAnchorX(t)}boundsComputedAnchorY(t){return this._cursor.boundsComputedAnchorY(t)}setBoundsComputedAnchorX(t,e){return this._cursor.setBoundsComputedAnchorX(t,e)}setBoundsComputedAnchorY(t,e){return this._cursor.setBoundsComputedAnchorY(t,e)}boundsX(t){return this._cursor.boundsX(t)}boundsY(t){return this._cursor.boundsY(t)}boundsWidth(t){return this._cursor.boundsWidth(t)}boundsHeight(t){return this._cursor.boundsHeight(t)}link(t){if(e(t._head))return this._cursor.link(t._head)}getCursor(){return this.copy()}copy(){var t;const e=new V(null==(t=this._head)?void 0:t.copy());if(!e._head)return e;let s=e._head,r=e._head._link;for(;r;)s._link=r.copy(),s=r,r=s._link;return e}peekId(){var t;return null!=(t=this._cursor.peekId())?t:this._cursor._link.peekId()}nextId(){const t=this.id;for(;t===this.id;)if(!this.next())return!1;return!0}save(){this._savedCursor=this._cursor,this._savedOffset=this._cursor._offset}restore(){this._cursor=this._savedCursor,this._cursor._offset=this._savedOffset}next(){if(!this._cursor)return!1;if(!this._cursor.next()){if(!this._cursor._link)return!1;this._cursor=this._cursor._link,this._cursor._offset=0}return!0}lookup(t){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(t);){if(!this._cursor._link)return!1;this._cursor=this._cursor._link}return!!this._cursor}delete(t){let s=this._head,r=null;for(;s;){if(s.delete(t))return s.isEmpty()&&e(r)&&(r._link=s._link),!0;r=s,s=s._link}return!1}}class M{constructor(t){this._offset=-1,this._link=null,this._count=0,this._deletedCount=0,this._offsets={instance:null},this._buffer=t}static from(t){return new M(new Float32Array(t))}isEmpty(){return this._deletedCount===this.count}get count(){return this._count||(this._count=this._computeCount()),this._count}get id(){return this._buffer[this._offset+0]}set id(t){this._buffer[this._offset+0]=t}get baseZoom(){return this._buffer[this._offset+1]}get anchorX(){return this._buffer[this._offset+2]}get anchorY(){return this._buffer[this._offset+3]}get directionX(){return this._buffer[this._offset+4]}get directionY(){return this._buffer[this._offset+5]}get size(){return this._buffer[this._offset+6]}get materialKey(){return this._buffer[this._offset+7]}computedMinZoom(){return this._buffer[this._offset+8]}setComputedMinZoom(t){this._buffer[this._offset+8]=t}get boundsCount(){return this._buffer[this._offset+9]}boundsComputedAnchorX(t){return this._buffer[this._offset+10+6*t+0]}boundsComputedAnchorY(t){return this._buffer[this._offset+10+6*t+1]}setBoundsComputedAnchorX(t,e){this._buffer[this._offset+10+6*t+0]=e}setBoundsComputedAnchorY(t,e){this._buffer[this._offset+10+6*t+1]=e}boundsX(t){return this._buffer[this._offset+10+6*t+2]}boundsY(t){return this._buffer[this._offset+10+6*t+3]}boundsWidth(t){return this._buffer[this._offset+10+6*t+4]}boundsHeight(t){return this._buffer[this._offset+10+6*t+5]}link(t){let e=this;for(;e._link;)e=e._link;e._link=t}getCursor(){return this.copy()}copy(){const t=new M(this._buffer);return t._link=this._link,t._offset=this._offset,t._deletedCount=this._deletedCount,t._offsets=this._offsets,t._count=this._count,t}peekId(){const t=this._offset+10+6*this.boundsCount+0;return t>=this._buffer.length?0:this._buffer[t]}next(){let t=0;for(;this._offset<this._buffer.length&&t++<100&&(-1===this._offset?this._offset=0:this._offset+=10+6*this.boundsCount,4294967296===this.id););return 4294967296!==this.id&&this._offset<this._buffer.length}delete(t){const e=this._offset,s=this.lookup(t);if(s)for(this.id=4294967295,++this._deletedCount;this.next()&&this.id===t;)this.id=4294967295,++this._deletedCount;return this._offset=e,s}lookup(t){const e=this._offset;if(s(this._offsets.instance)){this._offsets.instance=new Map;const t=this.copy();t._offset=-1;let e=0;for(;t.next();)t.id!==e&&(this._offsets.instance.set(t.id,t._offset),e=t.id)}return!!this._offsets.instance.has(t)&&(this._offset=this._offsets.instance.get(t),4294967296!==this.id||(this._offset=e,!1))}_computeCount(){const t=this._offset;let e=0;for(this._offset=-1;this.next();)e++;return this._offset=t,e}}class I{constructor(t){if(!Array.isArray(t))return void(this.data=t);this.data=t[0];let e=this;for(let s=1;s<t.length;s++)e.next=new I([t[s]]),e=e.next}*values(){let t=this;for(;t;)yield t.data,t=t.next}forEach(t){let e=this;for(;e;)t(e.data),e=e.next}find(t){var e;return t(this.data)?this:null==(e=this.next)?void 0:e.find(t)}max(t,e=this){const s=t(this.data)>t(e.data)?this:e;return this.next?this.next.max(t,s):s}remove(t,e=null){return this===t?e?(e.next=this.next,e):this.next:this.next.remove(t,this)}get last(){return this.next?this.next.last:this}}class A{constructor(t){this._head=null,s(t)||(this._head=new I(t))}get head(){return this._head}maxAvailableSpace(){if(s(this._head))return 0;const t=this._head.max((t=>t.end-t.start));return t.data.end-t.data.start}firstFit(t){if(s(this._head))return null;let e=null,r=this._head;for(;r;){const s=r.data.end-r.data.start;if(s===t)return e?e.next=r.next:this._head=r.next,r.data.start;if(s>t){const e=r.data.start;return r.data.start+=t,e}e=r,r=r.next}return null}free(t,e){const r=t+e;if(s(this._head)){const e=new I({start:t,end:r});return void(this._head=e)}if(r<=this._head.data.start){if(r===this._head.data.start)return void(this._head.data.start-=e);const s=new I({start:t,end:r});return s.next=this._head,void(this._head=s)}let i=this._head,o=i.next;for(;o;){if(o.data.start>=r){if(i.data.end===t){if(i.data.end+=e,i.data.end===o.data.start){const t=o.data.end-o.data.start;return i.data.end+=t,void(i.next=o.next)}return}if(o.data.start===r)return void(o.data.start-=e);const s=new I({start:t,end:r});return s.next=i.next,void(i.next=s)}i=o,o=o.next}if(t===i.data.end)return void(i.data.end+=e);const n=new I({start:t,end:r});i.next=n}}class k{constructor(t,e,s,r,i){this.target=t,this.geometryType=e,this.materialKey=s,this.indexFrom=r,this.indexCount=i}get indexEnd(){return this.indexFrom+this.indexCount}extend(t){this.indexCount+=t}}class P{constructor(t,e){this.geometryType=0,this._target=t,this.geometryType=e}static from(t,s,r,i){const o=new P(t,s);if(e(i))for(const t of i)r.seekIndex(t),o.addRecord(r);else for(;r.next();)o.addRecord(r);return o}addRecord(t){const e=this._target,r=this.geometryType,i=t.materialKey;let o=t.indexFrom,n=t.indexCount;const a=t.vertexFrom,h=t.vertexCount;if(n||(o=a,n=h),s(this._head)){const t=new k(e,r,i,o,n);return void(this._head=new I(t))}let l=null,u=this._head;for(;u;){if(o<u.data.indexFrom)return this._insert(i,o,n,l,u);l=u,u=u.next}this._insert(i,o,n,l,null)}forEach(t){e(this._head)&&this._head.forEach(t)}*infos(){if(e(this._head))for(const t of this._head.values())yield t}_insert(t,r,i,o,n){if(s(o)&&s(n)){const e=new k(this._target,this.geometryType,t,r,i);this._head=new I(e)}return s(o)&&e(n)?this._insertAtHead(t,r,i,n):e(o)&&s(n)?this._insertAtEnd(t,r,i,o):e(o)&&e(n)?this._insertAtMiddle(t,r,i,o,n):void 0}_insertAtHead(t,e,s,r){const i=e+s;if(t===r.data.materialKey&&i===r.data.indexFrom)r.data.indexFrom=e,r.data.indexCount+=s;else{const i=new k(this._target,this.geometryType,t,e,s);this._head=new I(i),this._head.next=r}}_insertAtEnd(t,e,s,r){if(r.data.materialKey===t&&r.data.indexEnd===e)r.data.indexCount+=s;else{const i=new k(this._target,this.geometryType,t,e,s),o=new I(i);r.next=o}}_insertAtMiddle(t,e,s,r,i){const o=e+s;if(r.data.materialKey===t&&r.data.indexEnd===e)r.data.indexCount+=s,r.data.materialKey===i.data.materialKey&&r.data.indexEnd===i.data.indexFrom&&(r.data.indexCount+=i.data.indexCount,r.next=i.next);else if(t===i.data.materialKey&&o===i.data.indexFrom)i.data.indexFrom=e,i.data.indexCount+=s;else{const o=new k(this._target,this.geometryType,t,e,s),n=new I(o);r.next=n,n.next=i}}}const R=r("esri-2d-log-allocations");class F{constructor(t){this._array=t}get array(){return this._array}get length(){return this._array.length}static create(t){const e=q.acquire(t);return new F(e)}expand(t){const e=q.acquire(t);e.set(this._array),q.release(this._array),this._array=e}destroy(){q.release(this._array)}set(t,e){this._array.set(t._array,e)}slice(){const t=q.acquire(this._array.byteLength);return t.set(this._array),new F(t)}}class D{constructor(){this._data=new ArrayBuffer(D.BYTE_LENGTH),this._freeList=new A({start:0,end:this._data.byteLength})}static get BYTE_LENGTH(){return 64e6}get buffer(){return this._data}allocate(t){const e=this._freeList.firstFit(t);return s(e)?null:new Uint32Array(this._data,e,t/Uint32Array.BYTES_PER_ELEMENT)}free(t){this._freeList.free(t.byteOffset,t.byteLength)}}const q=new class{constructor(){this._bytesAllocated=0,this._pages=[],this._pagesByBuffer=new Map,this._addPage()}get _bytesTotal(){return this._pages.length*D.BYTE_LENGTH}acquire(t){if(this._bytesAllocated+=t,R&&console.log(`Allocating ${t}, (${this._bytesAllocated} / ${this._bytesTotal})`),t>D.BYTE_LENGTH)return new Uint32Array(t/Uint32Array.BYTES_PER_ELEMENT);for(const s of this._pages){const r=s.allocate(t);if(e(r))return r}return i(this._addPage().allocate(t),"Expected to allocate page")}release(t){this._bytesAllocated-=t.byteLength,R&&console.log(`Freeing ${t.byteLength}, (${this._bytesAllocated} / ${this._bytesTotal})`);const e=this._pagesByBuffer.get(t.buffer);e&&e.free(t)}_addPage(){const t=new D;return this._pages.push(t),this._pagesByBuffer.set(t.buffer,t),t}};class z{constructor(t,e,s){const r=F.create(e*s*Uint32Array.BYTES_PER_ELEMENT);this.size=e,this.strideInt=s,this.bufferType=t,this.dirty={start:1/0,end:0},this._gpu=null,this._cpu=r,this.clear()}get elementSize(){return this._cpu.length/this.strideInt}get invalidated(){return this.bufferSize&&!this._gpu}invalidate(){this._invalidateTriangleBuffer(),o(this._gpu,(t=>t.dispose())),this._gpu=null}_invalidateTriangleBuffer(){o(this._gpuComputeTriangles,(t=>t.dispose())),this._gpuComputeTriangles=null}destroy(){o(this._gpu,(t=>t.dispose())),o(this._gpuComputeTriangles,(t=>t.dispose())),o(this._cpu,(t=>t.destroy())),o(this._cpu2,(t=>t.destroy()))}clear(){this.dirty.start=1/0,this.dirty.end=0,this.freeList=new A({start:0,end:this._cpu.length/this.strideInt}),this.fillPointer=0}ensure(t){if(this.maxAvailableSpace()>=t)return;if(t*this.strideInt>this._cpu.length-this.fillPointer){this.invalidate();const e=this._cpu.length/this.strideInt,s=Math.round(1.25*(e+t)),r=s*this.strideInt;this._cpu.expand(r*Uint32Array.BYTES_PER_ELEMENT),this.freeList.free(e,s-e)}}set(t,e){this._cpu.array[t]!==e&&(this._cpu.array[t]=e,this.dirty.start=Math.min(t,this.dirty.start),this.dirty.end=Math.max(t,this.dirty.end))}getGPUBuffer(t,e=!1){if(!this.bufferSize)return null;if(e){if("index"!==this.bufferType)throw new Error("Tired to get triangle buffer, but target is not an index buffer");return s(this._gpuComputeTriangles)&&(this._gpuComputeTriangles=this._createComputeBuffer(t)),this._gpuComputeTriangles}return s(this._gpu)&&(this._gpu=this._createBuffer(t)),this._gpu}getCPUBuffer(){if(!this._cpu2){const t=this._cpu.slice();this._cpu2=t}return this._cpu2.length!==this._cpu.length&&this._cpu2.expand(this._cpu.length*this._cpu.array.BYTES_PER_ELEMENT),this._cpu2.set(this._cpu),this._cpu2}get bufferSize(){return this._cpu.length/this.strideInt}maxAvailableSpace(){return this.freeList.maxAvailableSpace()}insert(t,e,s,r){const o=s*this.strideInt;if(!o)return 0;const n=e*this.strideInt*Uint32Array.BYTES_PER_ELEMENT,a=new Uint32Array(t,n,o),h=i(this.freeList.firstFit(s),"First fit region must be defined")*this.strideInt,l=o,u=h/this.strideInt-e;if(0!==r)for(let t=0;t<a.length;t++)a[t]+=r;return this._cpu.array.set(a,h),this.dirty.start=Math.min(this.dirty.start,h),this.dirty.end=Math.max(this.dirty.end,h+l),this.fillPointer=Math.max(this.fillPointer,h+l),u}free(t,e,s){const r=t*this.strideInt,i=(t+e)*this.strideInt;if(!0===s)for(let s=t;s!==t+e;s++)this._cpu.array[s*this.strideInt]=2147450879;this.dirty.start=Math.min(this.dirty.start,r),this.dirty.end=Math.max(this.dirty.end,i),this.freeList.free(t,e)}upload(){if(this.dirty.end){if(this._invalidateTriangleBuffer(),s(this._gpu))return this.dirty.start=1/0,void(this.dirty.end=0);this._gpu.setSubDataFromView(this._cpu.array,this.dirty.start,this.dirty.start,this.dirty.end),this.dirty.start=1/0,this.dirty.end=0}}_createBuffer(t){const e=E.DYNAMIC_DRAW;return"index"===this.bufferType?C.createIndex(t,e,this._cpu.array):C.createVertex(t,e,this._cpu.array)}_createComputeBuffer(t){const e=E.DYNAMIC_DRAW,s=new Uint32Array(this.fillPointer/3);for(let t=0;t<this.fillPointer;t+=3)s[t/3]=this._cpu.array[t];return C.createIndex(t,e,s)}}class Y{constructor(t,e){this._vaos=new Map,this._indicesInvalid=!1,this.geometryType=t}destroy(){for(const[t,s]of this._vaos)e(s)&&s.dispose(!1);this._indexBuffer=n(this._indexBuffer),this._vertexBuffer=n(this._vertexBuffer)}insert(t,e,s){if(!t.records.byteLength)return;const r=t.stride;if(this._vertexBuffer&&this._indexBuffer){const s=t.indices.byteLength/4,o=t.vertices.byteLength/r;this._indexBuffer.ensure(s),this._vertexBuffer.ensure(o);const{vertices:n,indices:a}=t,h=x.from(t.records),l=this._vertexBuffer.insert(n,0,n.byteLength/r,0),u=this._indexBuffer.insert(a,0,a.byteLength/4,l);if(h.forEach((t=>{t.indexFrom+=u,t.vertexFrom+=l})),i(this._records,"Expected records to be defined").link(h),e)this._indicesInvalid=!0;else if(this._displayList){const t=h.getCursor();for(;t.next();)this._displayList.addRecord(t)}}else{const s=t.indices.byteLength/4,i=t.vertices.byteLength/r,o=r/Uint32Array.BYTES_PER_ELEMENT;this._records=x.from(t.records),this._indexBuffer=new z("index",s,1),this._vertexBuffer=new z("vertex",i,o),this._indexBuffer.insert(t.indices,0,t.indices.byteLength/4,0),this._vertexBuffer.insert(t.vertices,0,t.vertices.byteLength/r,0),e&&(this._indicesInvalid=!0)}}remove(t){if(!s(this._records))for(const e of t){const t=this._records.getCursor();if(!t.lookup(e))continue;const s=t.indexFrom,r=t.vertexFrom;let i=t.indexCount,o=t.vertexCount;for(;t.next()&&t.id===e;)i+=t.indexCount,o+=t.vertexCount;this._indexBuffer.free(s,i),this._vertexBuffer.free(r,o,!0),this._records.delete(e)}}getVAO(t,e,r,i){if(!this._vertexBuffer||!this._indexBuffer||s(this._records)||!this._vertexBuffer.bufferSize)return null;const n=i?1:0;let a=this._vaos.get(n);(this._vertexBuffer.invalidated||this._indexBuffer.invalidated)&&(o(a,(t=>t.dispose(!1))),a=null),this._vertexBuffer.upload(),this._indexBuffer.upload();const h=this._indexBuffer.getGPUBuffer(t,1===n),l=this._vertexBuffer.getGPUBuffer(t);return a||(a=new S(t,r,e,{geometry:l},h),this._vaos.set(n,a)),a}forEachCommand(t){if(!s(this._records)){if(this._sortIndices(this._records),!this._displayList){const t=this._cursorIndexOrder;this._displayList=P.from(this,this.geometryType,this._records.getCursor(),t)}this._displayList.forEach(t)}}_sortIndices(t){const e=!!this._indexBuffer.bufferSize;if(!this._indicesInvalid)return;this._indicesInvalid=!1;let s=0;const r=t.getCursor(),i=[],o=[],n=[];for(;r.next();)o.push(r.index),n.push(r.sortKey),i.push(r.id);o.sort(((t,e)=>{const s=n[e],r=n[t];return r===s?i[e]-i[t]:s-r}));const a=t.getCursor(),h=e?this._indexBuffer.getCPUBuffer():this._vertexBuffer.getCPUBuffer();for(const t of o){if(!a.seekIndex(t))throw new Error("Expected to find index");if(e){const{indexFrom:t,indexCount:e}=a;a.indexFrom=s;for(let r=0;r<e;r++)this._indexBuffer.set(s++,h.array[t+r])}else{const{vertexFrom:t,vertexCount:e}=a,r=this._vertexBuffer.strideInt,i=t*r,o=i+e*r;a.vertexFrom=s/r;for(let t=i;t<o;t++)this._vertexBuffer.set(s++,h.array[t])}}this._cursorIndexOrder=o,this._displayList=null}}let O=0;class G extends w{constructor(t,e,s,r,i){super(t,e,s),this.instanceId=O++,this.patchCount=0,this._renderState={current:{geometry:new Map,metrics:null},next:null,swap:!1,swapFrames:0,locked:!1},this._patches=new p(100),this._bufferPatches=new p(100),this._lastCommitTime=0,this._lastMessageWasClear=!1,this.transforms.labelMat2d=m(),this._store=r,this._requestLabelUpdate=i}destroy(){super.destroy(),this._renderState.current.geometry.forEach((t=>t.destroy()))}get labelMetrics(){return this._renderState.current.metrics}get hasData(){return!!this._renderState.current.geometry.size}getGeometry(t){return this._renderState.current.geometry.get(t)}setTransform(t,e){super.setTransform(t,e);const s=this.transforms.labelMat2d,r=t.getScreenTransform(s,e),i=y();_(i,[this.x,this.y],r),f(s,i),c(s,t.viewMat2d,s)}patch(t,e){if(this.patchCount++,t.clear&&this._lastMessageWasClear)return;this._lastMessageWasClear=t.clear,t.clear&&this._patches.size>=50&&this._dropPatches();const s=t,r=s.addOrUpdate&&this.key.id!==s.addOrUpdate.tileKeyOrigin;e&&r?this._bufferPatches.enqueue(s):(s.sort=s.sort&&!e,this._patches.enqueue(s)),this.requestRender()}commit(t){if(this._lastCommitTime!==t.time){this._lastCommitTime=t.time;for(let t=0;t<4;t++)this._updateMesh(),this.isReady&&this._updateBufferMesh();this._renderState.swap&&(this._swapRenderStates(),this.requestRender())}}lock(){this._renderState.locked=!0}unlock(){this._renderState.locked=!1,this._flushUpdates(),this._swap()}_swapRenderStates(){if(this._renderState.next){if(this._renderState.locked)return this._renderState.swap=!0,void this.requestRender();if(this._renderState.swap=!0,0===this._renderState.swapFrames)return this._renderState.swapFrames=8,void this.requestRender();1==this._renderState.swapFrames--?this._swap():this.requestRender()}}_swap(){this._renderState.swap&&(this._renderState.swap=!1,e(this._renderState.next)&&(this._renderState.current.geometry.forEach((t=>t.destroy())),this._renderState.current=this._renderState.next,this._renderState.next=null,this._requestLabelUpdate()))}_flushUpdates(){let t=this._patches.maxSize;for(;this._patches.size&&t--;)this._updateMesh(),this._swap()}_updateBufferMesh(){const t=this._bufferPatches.peek();if(!e(t)||!t.clear||null===this._renderState.next)for(;this._bufferPatches.size;){const t=this._bufferPatches.dequeue();e(t)&&this._patchBuffer(t)}}_updateMesh(){const t=this._patches.peek();if(e(t)&&t.clear&&null!==this._renderState.next)return;const s=this._patches.dequeue();if(e(s)){if(!0===s.clear){if(!this.isReady)return;return this._renderState.next,void(this._renderState.next={geometry:new Map,metrics:null})}this.requestRender(),this._patch(s),s.end&&(this.ready(),this._swapRenderStates())}}_patch(t){j((e=>{this._remove(e,t.remove),this._insert(e,t,!1)}))}_patchBuffer(t){j((e=>{this._insert(e,t,!0)}))}_insert(t,e,r){try{var i;const o=a(this._renderState.next,this._renderState.current),n=null==(i=e.addOrUpdate)?void 0:i.data[t],h=o.geometry;if(s(n))return;h.has(t)||h.set(t,new Y(t,this.stage)),h.get(t).insert(n,e.sort,r),t===b.LABEL&&this._insertLabelMetrics(e.type,n.metrics,e.clear)}catch(t){}}_insertLabelMetrics(t,e,r){const i=a(this._renderState.next,this._renderState.current);if(s(e))return;const o=V.from(e);if(s(i.metrics))i.metrics=o;else{if("update"===t){const t=o.getCursor();for(;t.next();)i.metrics.delete(t.id)}i.metrics.link(o)}}_remove(t,e){const s=a(this._renderState.next,this._renderState.current).geometry.get(t);e&&e.length&&s&&(s.remove(e),this._removeLabelMetrics(e))}_removeLabelMetrics(t){const{metrics:e}=a(this._renderState.next,this._renderState.current);if(!s(e)&&t.length)for(const s of t)for(;e.delete(s););}_dropPatches(){const t=new Array;let e=!1;for(;this._patches.size;){const r=this._patches.dequeue();if(s(r))break;if(r.clear){if(e)break;e=!0}t.push(r)}this._patches.clear(),t.forEach((t=>this._patches.enqueue(t)))}}const H=r("featurelayer-order-by-server-enabled");class K extends v{constructor(t,e,s,r){super(t),this._pointToCallbacks=[],this._layer=s,this._layerView=e,this._onUpdate=r}renderChildren(t){if(this.attributeView.update(),this.hasAnimation){t.painter.effects.integrate.draw(t,t.attributeView)}super.renderChildren(t)}hasEmptyAttributeView(){return this.attributeView.isEmpty()}isUpdating(){return this.attributeView.isUpdating()}hitTest(t){const e=h();return this._pointToCallbacks.push({point:t,resolver:e}),this.requestRender(),e.promise}onTileData(t,e){const s=H&&"orderBy"in this._layer&&this._layer.orderBy,r=(null==s?void 0:s.length)&&!s[0].valueExpression&&s[0].field,i=s&&this._layerView.orderByFields===r;t.patch(e,i),this.contains(t)||this.addChild(t),this.requestRender()}onTileError(t){this.contains(t)||this.addChild(t)}updateTransitionProperties(t,e){super.updateTransitionProperties(t,e),this._layerView.featureEffectView.transitionStep(t,e),this._layerView.featureEffectView.transitioning&&this.requestRender()}doRender(t){const{minScale:e,maxScale:s}=this._layer,r=t.state.scale;r<=(e||1/0)&&r>=s&&super.doRender(t)}onAttributeStoreUpdate(){this.hasLabels&&this._layerView.view.labelManager.requestUpdate(),this._onUpdate()}get hasAnimation(){return this.hasLabels}setStencilReference(t){if(t.rendererInfo.ddDotSize>1){const t=1;for(const e of this.children)e.stencilRef=e.key.level+t}else super.setStencilReference(t)}get hasLabels(){if("sublayers"in this._layer)return this._layer.sublayers.some((t=>t.labelingInfo&&t.labelingInfo.length&&t.labelsVisible));const t=this._layer.featureReduction,e=t&&"cluster"===t.type&&t.labelsVisible&&t.labelingInfo&&t.labelingInfo.length;return this._layer.labelingInfo&&this._layer.labelingInfo.length&&this._layer.labelsVisible||!!e}prepareRenderPasses(t){const e=t.registerRenderPass({name:"label",brushes:[L.label],target:()=>this.hasLabels?this.children:null,drawPhase:g.LABEL|g.LABEL_ALPHA}),s=t.registerRenderPass({name:"geometry",brushes:[L.fill,L.line,L.marker,L.text],target:()=>this.children,enableDefaultDraw:()=>!this._layerView.featureEffectView.hasEffects,effects:[{apply:t.effects.outsideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.excludedEffects},{apply:t.effects.insideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.includedEffects},{apply:t.effects.hittest,enable:()=>!!this._pointToCallbacks.length,args:()=>this._pointToCallbacks}]}),r=t.registerRenderPass({name:"highlight",brushes:[L.fill,L.line,L.marker,L.text],target:()=>this.children,drawPhase:g.HIGHLIGHT,enableDefaultDraw:()=>!1,effects:[{apply:t.effects.highlight,enable:()=>!!this._layerView.hasHighlight()}]});return[...super.prepareRenderPasses(t),s,r,e]}}let X=class extends B{install(t){const e=new K(this.tileInfoView,this.layerView,this.layer,(()=>this.notifyChange("updating")));this.featuresView=e,t.addChild(e)}uninstall(t){t.removeChild(this.featuresView),this.featuresView.destroy(),this.featuresView=null}fetchResource(t,e){const{url:s}=t,r=this.featuresView.stage;try{return r.resourceManager.fetchResource(s,{signal:e.signal})}catch(t){return l(t)?Promise.resolve({width:0,height:0}):Promise.reject(t)}}isUpdating(){var t;const e=super.isUpdating(),s=!this.featuresView||this.featuresView.isUpdating(),i=null==(t=this.featuresView)?void 0:t.hasEmptyAttributeView(),o=e||s||e&&i;return r("esri-2d-log-updating")&&console.log(`Updating SymbolTileRenderer ${o}\n  -> updatingTiles ${e}\n  -> hasFeaturesView ${!!this.featuresView}\n  -> updatingFeaturesView ${s}`),o}hitTest(t){return this.featuresView.hitTest(t)}supportsRenderer(t){return null!=t&&-1!==["simple","class-breaks","unique-value","dot-density","dictionary"].indexOf(t.type)}onConfigUpdate(t){let e=null;if("visualVariables"in t){const s=(T(t).visualVariables||[]).map((t=>{const e=t.clone();return"normalizationField"in t&&(e.normalizationField=null),t.valueExpression&&"$view.scale"!==t.valueExpression&&(e.valueExpression=null,e.field="nop"),e}));e=U(s)}this.featuresView.setRendererInfo(t,e,this.layerView.featureEffect)}onTileData(t){const e=this.tiles.get(t.tileKey);e&&t.data&&this.featuresView.onTileData(e,t.data),this.layerView.view.labelManager.requestUpdate()}onTileError(t){const e=this.tiles.get(t.tileKey);e&&this.featuresView.onTileError(e)}forceAttributeTextureUpload(){this.featuresView.attributeView.forceTextureUpload()}lockGPUUploads(){this.featuresView.attributeView.lockTextureUpload(),this.tiles.forEach((t=>t.lock()))}unlockGPUUploads(){this.featuresView.attributeView.unlockTextureUpload(),this.tiles.forEach((t=>t.unlock()))}async getMaterialItems(t){return this.featuresView.getMaterialItems(t)}invalidateLabels(){this.featuresView.hasLabels&&this.layerView.view.labelManager.requestUpdate()}createTile(t){const e=this.tileInfoView.getTileBounds(d(),t);return new G(t,e[0],e[3],this.featuresView.attributeView,(()=>this.layerView.view.labelManager.requestUpdate()))}disposeTile(t){this.featuresView.removeChild(t),t.destroy(),this.layerView.view.labelManager.requestUpdate()}};X=t([u("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],X);const N=X;export{N as default};