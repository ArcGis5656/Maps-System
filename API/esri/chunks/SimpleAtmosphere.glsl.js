// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/VertexAttribute"],function(d,g,c,h,e){function f(b){const a=new h.ShaderBuilder;b.geometry===d.SimpleAtmosphereGeometry.Underground?(a.attributes.add(e.VertexAttribute.POSITION,"vec2"),a.varyings.add("color","vec4"),a.vertex.uniforms.add("lightingMainDirection","vec3").add("cameraPosition",
"vec3").add("undergroundFadeAlpha","float"),a.vertex.code.add(c.glsl`void main(void) {
float ndotl = dot(normalize(cameraPosition), lightingMainDirection);
float lighting = max(0.0, smoothstep(-1.0, 0.8, 2.0 * ndotl));
color = vec4(vec3(lighting), undergroundFadeAlpha);
gl_Position = vec4(position.xy, 1.0, 1.0);
}`),a.fragment.code.add(c.glsl`void main() {
gl_FragColor = color;
}`)):(a.include(g.Transform,{linearDepth:!1}),a.attributes.add(e.VertexAttribute.POSITION,"vec3"),a.varyings.add("vtc","vec2"),a.varyings.add("falloff","float"),b=b.geometry===d.SimpleAtmosphereGeometry.Cylinder,a.vertex.uniforms.add("proj","mat4").add("view","mat4").add("lightingMainDirection","vec3"),b||(a.varyings.add("innerFactor","float"),a.vertex.uniforms.add("silCircleCenter","vec3").add("silCircleV1","vec3").add("silCircleV2","vec3").add("texV","vec2").add("innerScale","float")),a.vertex.code.add(c.glsl`
		void main(void) {
      ${b?c.glsl`
      vec3 pos = position;
      float ndotl = lightingMainDirection.z;
      vtc = vec2(0.0, position.z + 0.05);`:c.glsl`
      innerFactor = clamp(-position.z, 0.0, 1.0);
      float scale = position.y * (1.0 + innerFactor * innerScale);
      float phi = position.x * ${c.glsl.float(.04908738515625)} + 1.0;
      vec3 pos =  (silCircleCenter + sin(phi) * silCircleV1 + cos(phi) * silCircleV2) * scale;
      float ndotl = dot(normalize(position.y > 0.0 ? pos: silCircleCenter), lightingMainDirection);
      vtc.x = position.x  * ${c.glsl.float(.0078125)};
      vtc.y = texV.x * (1.0 - position.z) + texV.y * position.z;
      `}
      falloff = max(0.0, smoothstep(-1.0, 0.8, 2.0 * ndotl));

		  gl_Position = transformPosition(proj, view, pos);
		  gl_Position.z = gl_Position.w; // project atmosphere onto the far plane
    }
	  `),a.fragment.uniforms.add("tex","sampler2D"),b||a.fragment.uniforms.add("altitudeFade","float"),a.fragment.code.add(c.glsl`
		void main() {
			vec4 atmosphereColor = texture2D(tex, vtc) * falloff;
      ${b?c.glsl`gl_FragColor = atmosphereColor;`:c.glsl`
			vec4 innerColor = vec4(atmosphereColor.rgb, 1.0 - altitudeFade);
			gl_FragColor = mix(atmosphereColor, innerColor, smoothstep(0.0, 1.0, innerFactor));
      `}
    }`));return a}d.SimpleAtmosphereGeometry=void 0;(function(b){b[b.Cone=0]="Cone";b[b.Cylinder=1]="Cylinder";b[b.Underground=2]="Underground";b[b.COUNT=3]="COUNT"})(d.SimpleAtmosphereGeometry||(d.SimpleAtmosphereGeometry={}));const k=Object.freeze({__proto__:null,get SimpleAtmosphereGeometry(){return d.SimpleAtmosphereGeometry},build:f});d.SimpleAtmosphereShader=k;d.build=f});