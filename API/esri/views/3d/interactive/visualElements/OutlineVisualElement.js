// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../core/Evented ../../../../core/maybe ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../../../chunks/vec4 ../../../../chunks/vec4f32 ../../../../geometry/projection ../../../../geometry/support/aaBoundingBox ../../../../layers/graphics/dehydratedFeatures ../../../../support/elevationInfoUtils ../../../../symbols/support/ElevationInfo ./DrapedVisualElementResources ./LaserlineVisualElement ./VisualElementResources ../../layers/graphics/ElevationContext ../../layers/graphics/lineUtils ../../webgl-engine/lib/geometryDataUtils ../../webgl-engine/lib/Material ../../webgl-engine/lib/RenderGeometry ../../webgl-engine/lib/VertexAttribute ../../webgl-engine/materials/RibbonLineMaterial".split(" "),
function(u,y,z,f,n,v,k,p,A,m,B,C,D,E,F,G,H,h,I,q,J,r,w){let L=function(){function t(a){this.view=null;this._attachmentOrigin=B.makeDehydratedPoint(0,0,0,null);this._attachmentOriginDirty=!0;this.events=new z;this._isDraped=!1;this._geometry=null;this._width=1;this._color=p.fromValues(1,0,1,1);this._innerWidth=0;this._innerColor=p.fromValues(1,1,1,1);this._stippleOffColor=this._stipplePattern=null;this._falloff=0;this._laserlineStyle=this._elevationInfo=null;this._laserlineEnabled=!1;this._renderOccluded=
q.RenderOccludedFlag.OccludeAndTransparentStencil;this.resources=new G.VisualElementResources({view:a.view,createResources:b=>this._createResources(b),recreateGeometry:(b,e)=>{b.geometries.length=0;this._recreateGeometry(e,b.material,b.geometries);return b.geometries}});this._attachmentOrigin.spatialReference=a.view.spatialReference;this.drapedResources=new E.DrapedVisualElementResources({view:a.view,createResources:()=>this._createDrapedResources(),recreateGeometry:b=>{b.geometries=this._createRenderGeometriesDraped(b.material);
this._attachmentOriginChanged()}});let c=!0;this._laserline=new F.LaserlineVisualElement({view:a.view});for(const b in a)b in this?"attached"===b?c=a[b]:this[b]=a[b]:console.error("Cannot set unknown property",b);this.attached=c}var g=t.prototype;g.destroy=function(){this.resources.destroy();this.drapedResources.destroy();this._laserline.destroy()};g._updateAttached=function(a){this.resources.attached=!this.isDraped&&a;this.drapedResources.attached=this.isDraped&&a;this._laserline.attached=this.laserlineAttached;
this.attached&&this._attachmentOriginChanged()};g._updateMaterial=function(){f.isSome(this.resources.resources)&&this.resources.resources.material.setParameters(this.materialParameters);f.isSome(this.drapedResources.resources)&&this.drapedResources.resources.material.setParameters(this.materialParameters)};g._recreateGeometry=function(a,c,b){const e=this._createRenderGeometries();for(const d of e)a.addGeometry(d,c),b.push(d);this._attachmentOriginChanged()};g._attachmentOriginChanged=function(){this._attachmentOriginDirty=
!0;this.events.emit("attachment-origin-changed")};g._createResources=function(a){const c=new w.RibbonLineMaterial(this.materialParameters),b=[];this._recreateGeometry(a,c,b);return{material:c,geometries:b,forEach:e=>{e(c);b.forEach(e)}}};g._createDrapedResources=function(){const a=new w.RibbonLineMaterial(this.materialParameters),c=this._createRenderGeometriesDraped(a);return{material:a,geometries:c}};g._createRenderGeometriesDraped=function(a){var c=this.geometry;if(f.isNone(c))return[];var b=h.geometryToRenderInfoDraped(c,
this.view.basemapTerrain.spatialReference);c=[];for(const {position:e}of b.lines){b=new J.RenderGeometry(h.createGeometry({overlayInfo:{spatialReference:this.view.basemapTerrain.spatialReference,renderCoordsHelper:this.view.renderCoordsHelper},attributeData:{position:e},removeDuplicateStartEnd:this.isClosed?h.RemoveDuplicateStartEnd.REMOVE:h.RemoveDuplicateStartEnd.KEEP}),a);const d=m.empty(K);m.expandWithBuffer(d,e);k.set(b.boundingSphere,.5*(d[0]+d[3]),.5*(d[1]+d[4]),0,.5*Math.sqrt((d[3]-d[0])*
(d[3]-d[0])+(d[4]-d[1])*(d[4]-d[1])));c.push(b)}return c};g.calculateMapBounds=function(a){if(f.isNone(this.resources.resources))return!1;const c=this.view.renderCoordsHelper;for(const b of this.resources.resources.geometries){const e=b.vertexAttributes.get(r.VertexAttribute.POSITION),d=new Float64Array(e.data.length);A.projectBuffer(e.data,c.spatialReference,0,d,this.view.spatialReference,0,e.data.length/3);m.expandWithBuffer(a,d)}return!0};g._createRenderGeometries=function(){var a,c=this.geometry;
if(f.isNone(c))return[];c=h.geometryToRenderInfo(c,this.view.elevationProvider,this.view.renderCoordsHelper,H.ElevationContext.fromElevationInfo(null!=(a=this.elevationInfo)?a:new D({mode:C.getGeometryEffectiveElevationMode(c,null)})));a=[];const b=[];for(const {position:e,mapPosition:d}of c.lines)a.push(h.createGeometry({overlayInfo:null,attributeData:{position:e,mapPosition:d},removeDuplicateStartEnd:this.isClosed?h.RemoveDuplicateStartEnd.REMOVE:h.RemoveDuplicateStartEnd.KEEP})),b.push(e);this._laserline.pathVerticalPlane=
b;return a};y._createClass(t,[{key:"isDraped",get:function(){return this._isDraped},set:function(a){a!==this._isDraped&&(this._isDraped=a,this._updateAttached(this.attached),this._laserline.attached=this.laserlineAttached)}},{key:"laserlineAttached",get:function(){return this.attached&&this.visible&&f.isSome(this._laserlineStyle)&&!this.isDraped&&this.laserlineEnabled}},{key:"visible",get:function(){return this.resources.visible},set:function(a){this.resources.visible=a;this.drapedResources.visible=
a;this._laserline.attached=this.laserlineAttached}},{key:"attached",get:function(){return this.resources.attached||this.drapedResources.attached},set:function(a){this._updateAttached(a)}},{key:"geometry",get:function(){return this._geometry},set:function(a){this._geometry=a;this.resources.recreateGeometry();this.drapedResources.recreateGeometry()}},{key:"width",get:function(){return this._width},set:function(a){a!==this._width&&(this._width=a,this._updateMaterial())}},{key:"color",get:function(){return this._color},
set:function(a){k.exactEquals(a,this._color)||(k.copy(this._color,a),this._updateMaterial())}},{key:"innerWidth",get:function(){return this._innerWidth},set:function(a){a!==this._innerWidth&&(this._innerWidth=a,this._updateMaterial())}},{key:"innerColor",get:function(){return this._innerColor},set:function(a){k.exactEquals(a,this._innerColor)||(k.copy(this._innerColor,a),this._updateMaterial())}},{key:"stipplePattern",get:function(){return this._stipplePattern},set:function(a){const c=f.isSome(a)!==
f.isSome(this._stipplePattern);this._stipplePattern=a;c?this.resources.recreate():this._updateMaterial()}},{key:"stippleOffColor",get:function(){return this._stippleOffColor},set:function(a){a&&this._stippleOffColor&&k.exactEquals(a,this._stippleOffColor)||(this._stippleOffColor=a?p.clone(a):null,this._updateMaterial())}},{key:"falloff",get:function(){return this._falloff},set:function(a){a!==this._falloff&&(this._falloff=a,this._updateMaterial())}},{key:"elevationInfo",get:function(){return this._elevationInfo},
set:function(a){this._elevationInfo=a;this.resources.recreateGeometry()}},{key:"laserlineStyle",get:function(){return this._laserlineStyle},set:function(a){this._laserlineStyle=a;this._laserline.attached=this.laserlineAttached;f.isSome(a)&&(this._laserline.style=a)}},{key:"laserlineEnabled",get:function(){return this._laserlineEnabled},set:function(a){this._laserlineEnabled!==a&&(this._laserlineEnabled=a,this._laserline.attached=this.laserlineAttached)}},{key:"renderOccluded",get:function(){return this._renderOccluded},
set:function(a){a!==this._renderOccluded&&(this._renderOccluded=a,this._updateMaterial())}},{key:"attachmentOrigin",get:function(){if(!this._attachmentOriginDirty)return this._attachmentOrigin;var a=f.isSome(this.resources.resources)?this.resources.resources.geometries:null;if(!a||0===a.length)return null;n.set(l,0,0,0);let c=0;for(const b of a){a=b.vertexAttributes.get(r.VertexAttribute.POSITION);const e=b.indices.get(r.VertexAttribute.POSITION),d=f.unwrap(this.resources.resources).material.isClosed(a.data,
e);I.computeAttachmentOriginLines(a,e,d,x)&&(n.add(l,l,x),c++)}if(0===c)return null;n.scale(l,l,1/c);this.view.renderCoordsHelper.fromRenderCoords(l,this._attachmentOrigin);this._attachmentOriginDirty=!1;return this._attachmentOrigin}},{key:"isClosed",get:function(){return f.isSome(this.geometry)&&"polygon"===this.geometry.type}},{key:"materialParameters",get:function(){return{width:this._width,color:this._color,stippleOffColor:this._stippleOffColor,stipplePattern:this._stipplePattern,stipplePreferContinuous:!1,
isClosed:this.isClosed,falloff:this._falloff,innerColor:this._innerColor,innerWidth:this._innerWidth,join:"round",polygonOffset:!0,renderOccluded:this.normalizedRenderOccluded}}},{key:"normalizedRenderOccluded",get:function(){return this.isDraped&&this._renderOccluded===q.RenderOccludedFlag.OccludeAndTransparentStencil?q.RenderOccludedFlag.OccludeAndTransparent:this._renderOccluded}}]);return t}();const K=m.create(),x=v.create(),l=v.create();u.OutlineVisualElement=L;Object.defineProperty(u,"__esModule",
{value:!0})});