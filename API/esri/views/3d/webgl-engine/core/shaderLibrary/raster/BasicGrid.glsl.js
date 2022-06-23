// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../shaderModules/interfaces","../../../lib/VertexAttribute"],function(b,d,c){b.BasicGrid=function(a){a.attributes.add(c.VertexAttribute.POSITION,"vec2");a.attributes.add(c.VertexAttribute.UV0,"vec2");a.vertex.uniforms.add("u_scale","float");a.vertex.uniforms.add("u_offset","vec2");a.varyings.add("v_texcoord","vec2");a.vertex.code.add(d.glsl`void main(void) {
v_texcoord = uv0 * u_scale + u_offset;
gl_Position = vec4(position, 0.0, 1.0);
}`)};Object.defineProperty(b,"__esModule",{value:!0})});