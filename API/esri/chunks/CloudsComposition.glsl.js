// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateMainLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/Gamma.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PiUtils.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/CloudsParallaxShading.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(b,e,f,g,h,k,l,m,n,c,p,q){function d(){const a=new p.ShaderBuilder;a.attributes.add(q.VertexAttribute.POSITION,"vec2");a.varyings.add("worldRay","vec3");a.vertex.uniforms.add("inverseProjectionMatrix","mat4");a.vertex.uniforms.add("inverseViewMatrix","mat4");a.vertex.code.add(c.glsl`void main(void) {
vec3 posViewNear = (inverseProjectionMatrix * vec4(position, -1.0, 1.0)).xyz;
worldRay = (inverseViewMatrix * vec4(posViewNear, 0.0)).xyz;
gl_Position = vec4(position, 1.0, 1.0);
}`);a.fragment.uniforms.add("lightingMainDirection","vec3");a.fragment.include(m.ColorConversion);a.fragment.include(n.RgbaFloatEncoding);a.include(f.EvaluateMainLighting);a.include(e.EvaluateAmbientLighting,{pbrMode:h.PBRMode.Disabled,lightingSphericalHarmonicsOrder:2});a.include(k.PiUtils);a.include(g.Gamma);a.include(l.CloudsParallaxShading);a.fragment.code.add(c.glsl`void main() {
vec4 cloudsColor = crossFade == 0 ? renderCloud(normalize(worldRay), cameraPosition) : renderCloudCrossFade(normalize(worldRay), cameraPosition);
gl_FragColor = vec4((1.0 - totalFadeInOut) * cloudsColor.rgb, cloudsColor.a);
}`);return a}const r=Object.freeze({__proto__:null,build:d});b.CloudsCompositionShader=r;b.build=d});