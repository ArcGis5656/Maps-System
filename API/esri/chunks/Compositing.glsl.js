// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder"],function(c,f,d,g){function e(a){const b=new g.ShaderBuilder;b.include(f.ScreenSpacePass);b.fragment.uniforms.add("tex","sampler2D");a.function===c.CompositingFunction.Standard&&(a.hasOpacityFactor?(b.fragment.uniforms.add("opacity","float"),b.fragment.code.add(d.glsl`void main() {
gl_FragColor = texture2D(tex, uv) * opacity;
}`)):b.fragment.code.add(d.glsl`void main() {
gl_FragColor = texture2D(tex, uv);
}`));a.function===c.CompositingFunction.OverlayWithTransparency&&(b.fragment.uniforms.add("overlayIdx","int"),a.hasOpacityFactor&&b.fragment.uniforms.add("opacity","float"),b.fragment.code.add(d.glsl`
      void main() {
        vec2 overlayUV = overlayIdx == 0 ? vec2(uv.x * 0.5, uv.y) : vec2(uv.x * 0.5 + 0.5, uv.y);
        gl_FragColor = texture2D(tex, overlayUV) ${a.hasOpacityFactor?"* opacity":""};
      }`));a.function===c.CompositingFunction.TransparentToHUDVisibility&&b.fragment.code.add(d.glsl`void main() {
gl_FragColor = vec4(1.0 - texture2D(tex, uv).a);
}`);a.function===c.CompositingFunction.Transparency&&(b.fragment.uniforms.add("colorTexture","sampler2D"),b.fragment.uniforms.add("alphaTexture","sampler2D"),b.fragment.uniforms.add("frontFaceTexture","sampler2D"),b.fragment.code.add(d.glsl`void main() {
vec4 srcColor = texture2D(colorTexture, uv);
float srcAlpha = texture2D(alphaTexture, uv).r;
vec4 frontFace = texture2D(frontFaceTexture, uv);
if(srcColor.a <= 1e-5){
discard;
}
gl_FragColor = vec4(mix(srcColor.rgb/srcColor.a, frontFace.rgb, frontFace.a), 1.0 - srcAlpha);
}`));return b}c.CompositingFunction=void 0;(function(a){a[a.Standard=0]="Standard";a[a.TransparentToHUDVisibility=1]="TransparentToHUDVisibility";a[a.Transparency=2]="Transparency";a[a.OverlayWithTransparency=3]="OverlayWithTransparency";a[a.COUNT=4]="COUNT"})(c.CompositingFunction||(c.CompositingFunction={}));const h=Object.freeze({__proto__:null,get CompositingFunction(){return c.CompositingFunction},build:e});c.CompositingShader=h;c.build=e});