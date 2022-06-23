// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../attributes/TextureCoordinateAttribute.glsl","../attributes/VertexTextureCoordinates.glsl","../util/TextureAtlasLookup.glsl","../../shaderModules/interfaces"],function(e,f,g,h,b){e.ReadBaseColorTexture=function(c,d){const a=c.fragment;d.baseColorTexture?(c.include(g.VertexTextureCoordinates,d),a.uniforms.add("baseColorTexture","sampler2D"),a.uniforms.add("baseColorTextureSize","vec2"),d.attributeTextureCoordinates===f.TextureCoordinateAttributeType.Atlas?(c.include(h.TextureAtlasLookup),
a.code.add(b.glsl`vec4 readBaseColorTexture() {
return textureAtlasLookup(
baseColorTexture,
baseColorTextureSize,
vuv0,
vuvRegion
);
}`)):a.code.add(b.glsl`vec4 readBaseColorTexture() {
return texture2D(baseColorTexture, vuv0);
}`)):a.code.add(b.glsl`vec4 readBaseColorTexture() { return vec4(1.0); }`)};Object.defineProperty(e,"__esModule",{value:!0})});