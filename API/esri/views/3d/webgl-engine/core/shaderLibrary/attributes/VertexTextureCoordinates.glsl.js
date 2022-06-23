// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","./TextureCoordinateAttribute.glsl","../util/TextureAtlasLookup.glsl","../../shaderModules/interfaces"],function(e,c,f,d){e.VertexTextureCoordinates=function(a,b){a.include(c.TextureCoordinateAttribute,b);a.fragment.code.add(d.glsl`
  struct TextureLookupParameter {
    vec2 uv;
    ${b.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `);b.attributeTextureCoordinates===c.TextureCoordinateAttributeType.Default&&a.fragment.code.add(d.glsl`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`);b.attributeTextureCoordinates===c.TextureCoordinateAttributeType.Atlas&&(a.include(f.TextureAtlasLookup),a.fragment.code.add(d.glsl`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))};Object.defineProperty(e,"__esModule",{value:!0})});