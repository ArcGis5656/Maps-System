// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../Color ../../../request ../../../core/MapUtils ../../../core/maybe ../../../chunks/mat3 ../../../chunks/mat3f64 ../../../chunks/vec3f64 ../../../chunks/vec4f64 ../MeshComponent ../MeshMaterialMetallicRoughness ../MeshTexture ../MeshVertexAttributes ../buffer/BufferView ../../../chunks/vec32 ../../../chunks/vec42 ../buffer/utils ./georeference ../../../views/3d/glTF/DefaultLoadingContext ../../../views/3d/glTF/loader ../../../views/3d/glTF/internal/indexUtils ../../../views/3d/webgl-engine/lib/geometryDataUtils ../../../views/3d/webgl-engine/materials/DefaultMaterial_COLOR_GAMMA ../../../views/webgl/enums ../../../chunks/vec33 ../../../chunks/vec43 ../../../chunks/vec22".split(" "),
function(E,F,G,O,H,f,I,J,P,Q,R,S,T,U,n,y,A,w,V,W,X,B,Y,Z,t,K,z,L){function C(){C=F._asyncToGenerator(function*(a,b,g){var c=new W.DefaultLoadingContext(aa(g));b=(yield X.load(c,b,g,!0)).model;c=b.lods.shift();const d=new Map,e=new Map;b.textures.forEach((p,u)=>d.set(u,new T({data:p.data,wrap:ba(p.parameters.wrap)})));b.materials.forEach((p,u)=>e.set(u,ca(p,d)));b=da(c);for(var l of b.parts)ea(b,l,e);const {position:r,normal:m,tangent:h,color:q,texCoord0:k}=b.vertexAttributes;l={position:r.typedBuffer,
normal:f.isSome(m)?m.typedBuffer:null,tangent:f.isSome(h)?h.typedBuffer:null,uv:f.isSome(k)?k.typedBuffer:null,color:f.isSome(q)?q.typedBuffer:null};g=V.georeferenceByTransform(l,a,g);return{transform:g.transform,components:b.components,spatialReference:a.spatialReference,vertexAttributes:new U.MeshVertexAttributes({position:g.vertexAttributes.position,normal:g.vertexAttributes.normal,tangent:g.vertexAttributes.tangent,color:l.color,uv:l.uv})}});return C.apply(this,arguments)}function aa(a){return null!=
a&&a.resolveFile?{busy:!1,request:function(){var b=F._asyncToGenerator(function*(g,c,d){g=a.resolveFile(g);return(yield O(g,{responseType:"image"===c?"image":"binary"===c?"array-buffer":"json",signal:f.isSome(d)?d.signal:null})).data});return function(g,c,d){return b.apply(this,arguments)}}()}:null}function x(a,b){if(f.isNone(a))return"-";a=a.typedBuffer;return`${H.getOrCreateMapValue(b,a.buffer,()=>b.size)}/${a.byteOffset}/${a.byteLength}`}function fa(a){return f.isSome(a)?a.toString():"-"}function da(a){let b=
0;var g=!1,c=!1,d=!1,e=!1;const l=new Map,r=new Map,m=[];for(const h of a.parts){const {attributes:{position:q,normal:k,color:p,tangent:u,texCoord0:M}}=h;a=`\n      ${x(q,l)}/\n      ${x(k,l)}/\n      ${x(p,l)}/\n      ${x(u,l)}/\n      ${x(M,l)}/\n      ${fa(h.transform)}\n    `;let D=!1;a=H.getOrCreateMapValue(r,a,()=>{D=!0;return{start:b,length:q.count}});D&&(b+=q.count);k&&(d=!0);p&&(g=!0);u&&(c=!0);M&&(e=!0);m.push({gltf:h,writeVertices:D,region:a})}return{vertexAttributes:{position:w.createBuffer(n.BufferViewVec3f64,
b),normal:d?w.createBuffer(n.BufferViewVec3f,b):null,tangent:c?w.createBuffer(n.BufferViewVec4f,b):null,color:g?w.createBuffer(n.BufferViewVec4u8,b):null,texCoord0:e?w.createBuffer(n.BufferViewVec2f,b):null},parts:m,components:[]}}function ca(a,b){const g=new G(ha(a.color,a.opacity)),c=a.emissiveFactor?new G(ia(a.emissiveFactor)):null;var d=f.unwrap(f.applySome(a.textureColor,h=>b.get(h))),e=f.unwrap(f.applySome(a.textureNormal,h=>b.get(h))),l=f.unwrap(f.applySome(a.textureEmissive,h=>b.get(h))),
r=f.unwrap(f.applySome(a.textureOcclusion,h=>b.get(h)));a:{switch(a.alphaMode){case "OPAQUE":var m="opaque";break a;case "MASK":m="mask";break a;case "BLEND":m="blend";break a}m=void 0}return new S({color:g,colorTexture:d,normalTexture:e,emissiveColor:c,emissiveTexture:l,occlusionTexture:r,alphaMode:m,alphaCutoff:a.alphaCutoff,doubleSided:a.doubleSided,metallic:a.metallicFactor,roughness:a.roughnessFactor,metallicRoughnessTexture:f.unwrap(f.applySome(a.textureMetallicRoughness,h=>b.get(h)))})}function ea(a,
b,g){if(b.writeVertices){{const {position:l,normal:r,tangent:m,color:h,texCoord0:q}=a.vertexAttributes;var c=b.region.start;const {attributes:k,transform:p}=b.gltf;var d=k.position.count;y.transformMat4(l.slice(c,d),k.position,p);if(f.isSome(k.normal)&&f.isSome(r)){var e=I.normalFromMat4(J.create(),p);y.transformMat3(r.slice(c,d),k.normal,e)}else f.isSome(r)&&K.fill(r,0,0,1,{dstIndex:c,count:d});f.isSome(k.tangent)&&f.isSome(m)?(e=I.normalFromMat4(J.create(),p),A.transformMat3(m.slice(c,d),k.tangent,
e)):f.isSome(m)&&z.fill(m,0,0,1,1,{dstIndex:c,count:d});f.isSome(k.texCoord0)&&f.isSome(q)?L.normalizeIntegerBuffer(q.slice(c,d),k.texCoord0):f.isSome(q)&&L.fill(q,0,0,{dstIndex:c,count:d});f.isSome(k.color)&&f.isSome(h)?(e=k.color,c=h.slice(c,d),4===e.elementCount?e instanceof n.BufferViewVec4f?A.scale(c,e,255):e instanceof n.BufferViewVec4u8?z.copy(c,e):e instanceof n.BufferViewVec4u16&&A.shiftRight(c,e,8):(z.fill(c,255,255,255,255),c=n.BufferViewVec3u8.fromTypedArray(c.typedBuffer,c.typedBufferStride),
e instanceof n.BufferViewVec3f?y.scale(c,e,255):e instanceof n.BufferViewVec3u8?K.copy(c,e):e instanceof n.BufferViewVec3u16&&y.shiftRight(c,e,8))):f.isSome(h)&&z.fill(h.slice(c,d),255,255,255,255)}}c=b.gltf;a:{d=c.indices||c.attributes.position.count;switch(c.primitiveType){case t.PrimitiveType.TRIANGLES:d=B.trianglesToTriangles(d,Y.generateIndexArray);break a;case t.PrimitiveType.TRIANGLE_STRIP:d=B.triangleStripToTriangles(d);break a;case t.PrimitiveType.TRIANGLE_FAN:d=B.triangleFanToTriangles(d);
break a}d=void 0}if(b=b.region.start)for(e=0;e<d.length;e++)d[e]+=b;a.components.push(new R({faces:d,material:g.get(c.material),trustSourceNormals:!0}))}function ba(a){return{horizontal:N(a.s),vertical:N(a.t)}}function N(a){switch(a){case t.TextureWrapMode.CLAMP_TO_EDGE:return"clamp";case t.TextureWrapMode.MIRRORED_REPEAT:return"mirror";case t.TextureWrapMode.REPEAT:return"repeat"}}function v(a){return 255*a**(1/Z.COLOR_GAMMA)}function ha(a,b){return Q.fromValues(v(a[0]),v(a[1]),v(a[2]),b)}function ia(a){return P.fromValues(v(a[0]),
v(a[1]),v(a[2]))}E.loadGLTFMesh=function(a,b,g){return C.apply(this,arguments)};Object.defineProperty(E,"__esModule",{value:!0})});