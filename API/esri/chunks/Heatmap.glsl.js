// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/basicInterfaces ./HeatmapDensity.glsl".split(" "),function(d,g,h,e,k,l,c){function f(b){const a=new k.ShaderBuilder;({mode:b}=b);a.include(g.ScreenSpacePass);a.include(h.DiscardOrAdjustAlpha,{alphaDiscardMode:l.AlphaDiscardMode.Blend});
a.fragment.uniforms.add("densityMap","sampler2D");a.fragment.uniforms.add("tex","sampler2D");a.fragment.uniforms.add("densityNormalizer","float");a.fragment.uniforms.add("minDensity","float");b===c.HeatmapMode.KernelDensity&&a.fragment.uniforms.add("densityMultiplier","float");a.fragment.code.add(e.glsl`
    void main() {
      float density = texture2D(densityMap, uv).r${b===c.HeatmapMode.KernelDensity?e.glsl` * densityMultiplier`:""};
      float densityRatio = (density - minDensity) * densityNormalizer;

      vec4 color = texture2D(tex, vec2(clamp(densityRatio, 0.0, 1.0), 0.5));

      discardOrAdjustAlpha(color);
      gl_FragColor = color;
    }
  `);return a}const m=Object.freeze({__proto__:null,build:f,get HeatmapMode(){return c.HeatmapMode}});d.HeatmapShader=m;d.build=f});