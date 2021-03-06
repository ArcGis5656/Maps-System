// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../attributes/TextureCoordinateAttribute.glsl ../attributes/VertexTextureCoordinates.glsl ./Normals.glsl ../../shaderModules/interfaces ../../../lib/VertexAttribute".split(" "),function(e,f,g,h,d,k){e.ComputeNormalTexture=function(b,c){const a=b.fragment;c.vertexTangents?(b.attributes.add(k.VertexAttribute.TANGENT,"vec4"),b.varyings.add("vTangent","vec4"),c.doubleSidedMode===h.NormalsDoubleSidedMode.WindingOrder?a.code.add(d.glsl`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):a.code.add(d.glsl`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(b.extensions.add("GL_OES_standard_derivatives"),a.code.add(d.glsl`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`));c.attributeTextureCoordinates!==f.TextureCoordinateAttributeType.None&&(b.include(g.VertexTextureCoordinates,c),a.uniforms.add("normalTexture","sampler2D"),a.uniforms.add("normalTextureSize","vec2"),a.code.add(d.glsl`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${c.supportsTextureAtlas?"vtc.size \x3d normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))};Object.defineProperty(e,"__esModule",{value:!0})});