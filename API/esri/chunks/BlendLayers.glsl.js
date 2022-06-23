// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/VertexAttribute"],function(b,c,f,d){function e(){const a=new f.ShaderBuilder;a.attributes.add(d.VertexAttribute.POSITION,"vec2");a.attributes.add(d.VertexAttribute.UV0,"vec2");a.vertex.uniforms.add("scale","float");a.vertex.uniforms.add("offset","vec2");a.varyings.add("uv","vec2");a.vertex.code.add(c.glsl`void main(void) {
gl_Position = vec4(position, 0.0, 1.0);
uv = uv0 * scale + offset;
}`);a.fragment.uniforms.add("tex","sampler2D");a.fragment.uniforms.add("opacity","float");a.fragment.code.add(c.glsl`void main() {
vec4 color = texture2D(tex, uv);
gl_FragColor = vec4(color.xyz, 1.0) * color.a * opacity;
}`);return a}const g=Object.freeze({__proto__:null,build:e});b.BlendLayersShader=g;b.build=e});