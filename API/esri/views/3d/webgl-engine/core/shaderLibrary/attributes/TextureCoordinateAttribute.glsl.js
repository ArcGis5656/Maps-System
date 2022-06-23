// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../shaderModules/interfaces","../../../lib/VertexAttribute"],function(b,c,d){b.TextureCoordinateAttributeType=void 0;(function(a){a[a.None=0]="None";a[a.Default=1]="Default";a[a.Atlas=2]="Atlas";a[a.COUNT=3]="COUNT"})(b.TextureCoordinateAttributeType||(b.TextureCoordinateAttributeType={}));b.TextureCoordinateAttribute=function(a,e){e.attributeTextureCoordinates===b.TextureCoordinateAttributeType.Default&&(a.attributes.add(d.VertexAttribute.UV0,"vec2"),a.varyings.add("vuv0","vec2"),
a.vertex.code.add(c.glsl`void forwardTextureCoordinates() {
vuv0 = uv0;
}`));e.attributeTextureCoordinates===b.TextureCoordinateAttributeType.Atlas&&(a.attributes.add(d.VertexAttribute.UV0,"vec2"),a.varyings.add("vuv0","vec2"),a.attributes.add(d.VertexAttribute.UVREGION,"vec4"),a.varyings.add("vuvRegion","vec4"),a.vertex.code.add(c.glsl`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`));e.attributeTextureCoordinates===b.TextureCoordinateAttributeType.None&&a.vertex.code.add(c.glsl`void forwardTextureCoordinates() {}`)};Object.defineProperty(b,"__esModule",{value:!0})});