// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/VertexAttribute"],function(b,d,k,e){function g(c){const a=new k.ShaderBuilder,{mode:h,isAttributeDriven:f}=c;a.attributes.add(e.VertexAttribute.POSITION,"vec3");a.attributes.add(e.VertexAttribute.UV0,"vec2");c.isAttributeDriven&&(a.attributes.add(e.VertexAttribute.FEATUREATTRIBUTE,"float"),a.varyings.add("attributeValue","float"));a.varyings.add("unitCirclePos",
"vec2");a.vertex.uniforms.add("radius","float");a.vertex.uniforms.add("proj","mat4");a.vertex.uniforms.add("view","mat4");a.vertex.code.add(d.glsl`
    void main() {
      unitCirclePos = uv0;

      vec4 posProj = proj * (view * vec4(${e.VertexAttribute.POSITION}, 1.0));
      vec4 quadOffset = vec4(unitCirclePos * radius, 0.0, 0.0);

      ${f?d.glsl`attributeValue = ${e.VertexAttribute.FEATUREATTRIBUTE};`:""}
      gl_Position = posProj + quadOffset;
    }
  `);h===b.HeatmapMode.KernelDensity?a.fragment.code.add(d.glsl`
      void main() {
        float radiusRatioSquared = dot(unitCirclePos, unitCirclePos);
        if (radiusRatioSquared > 1.0) {
          discard;
        }

        float oneMinusRadiusRatioSquared = 1.0 - radiusRatioSquared;
        float density = oneMinusRadiusRatioSquared * oneMinusRadiusRatioSquared ${f?d.glsl` * attributeValue`:""};
        gl_FragColor = vec4(density);
      }
    `):h===b.HeatmapMode.GaussianBlur&&(a.fragment.uniforms.add("kernel","sampler2D"),a.fragment.code.add(d.glsl`
    void main() {
      float radiusRatioSquared = dot(unitCirclePos, unitCirclePos);
      if (radiusRatioSquared > 1.0) {
        discard;
      }

      vec2 uv = abs(unitCirclePos);
      vec2 uvX = vec2(uv.x, 0.5);
      vec2 uvY = vec2(uv.y, 0.5);
      float intensity = texture2D(kernel, uvX).r * texture2D(kernel, uvY).r${f?d.glsl` * attributeValue`:""};
      gl_FragColor = vec4(intensity);
    }
  `));return a}b.HeatmapMode=void 0;(function(c){c[c.GaussianBlur=0]="GaussianBlur";c[c.KernelDensity=1]="KernelDensity"})(b.HeatmapMode||(b.HeatmapMode={}));const l=Object.freeze({__proto__:null,get HeatmapMode(){return b.HeatmapMode},build:g});b.HeatmapDensityShader=l;b.build=g});