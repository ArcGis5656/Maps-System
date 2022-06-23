// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateMainLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/NormalUtils.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/Water.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/WaterDistortion.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(g,n,d,e,p,q,r,t,u,v,h,w,x,y,k,f,z,c,A,l){function m(b){const a=new A.ShaderBuilder;a.include(p.Transform,{linearDepth:!1});a.attributes.add(l.VertexAttribute.POSITION,"vec3");a.attributes.add(l.VertexAttribute.UV0,"vec2");a.vertex.uniforms.add("proj","mat4").add("view","mat4").add("localOrigin","vec3");a.vertex.uniforms.add("waterColor","vec4");if(b.output===d.ShaderOutput.Color||b.output===d.ShaderOutput.Alpha)a.include(h.NormalUtils,b),a.include(n.ForwardLinearDepth,b),a.varyings.add("vuv",
"vec2"),a.varyings.add("vpos","vec3"),a.varyings.add("vnormal","vec3"),a.varyings.add("vtbnMatrix","mat3"),a.fragment.uniforms.add("localOrigin","vec3"),b.multipassTerrainEnabled&&a.varyings.add("depth","float"),a.vertex.code.add(c.glsl`
      void main(void) {
        if (waterColor.a < ${c.glsl.float(f.symbolAlphaCutoff)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vuv = uv0;
        vpos = position;

        vnormal = getLocalUp(vpos, localOrigin);
        vtbnMatrix = getTBNMatrix(vnormal);

        ${b.multipassTerrainEnabled?"depth \x3d (view * vec4(vpos, 1.0)).z;":""}

        gl_Position = transformPosition(proj, view, vpos);
        ${b.output===d.ShaderOutput.Color?"forwardLinearDepth();":""}
      }
    `);b.multipassTerrainEnabled&&(a.fragment.include(r.ReadLinearDepth),a.include(v.multipassTerrainTest,b));b.output===d.ShaderOutput.Alpha&&(a.include(e.Slice,b),a.fragment.uniforms.add("waterColor","vec4"),a.fragment.code.add(c.glsl`
        void main() {
          discardBySlice(vpos);
          ${b.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}

          gl_FragColor = vec4(waterColor.a);
        }
      `));b.output===d.ShaderOutput.Color&&(a.include(u.EvaluateMainLighting),a.include(t.EvaluateAmbientLighting,{pbrMode:w.PBRMode.Disabled,lightingSphericalHarmonicsOrder:2}),a.include(k.WaterDistortion,b),a.include(e.Slice,b),b.receiveShadows&&a.include(x.ReadShadowMap,b),a.include(y.Water,b),a.fragment.uniforms.add("waterColor","vec4").add("lightingMainDirection","vec3").add("lightingMainIntensity","vec3").add("lightingSpecularStrength","float").add("lightingEnvironmentStrength","float").add("cameraPosition",
"vec3").add("timeElapsed","float").add("view","mat4"),a.fragment.include(z.ColorConversion),a.fragment.code.add(c.glsl`
      void main() {
        discardBySlice(vpos);
        ${b.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        vec3 localUp = vnormal;
        // the created normal is in tangent space
        vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);

        // we rotate the normal according to the tangent-bitangent-normal-Matrix
        vec3 n = normalize(vtbnMatrix * tangentNormalFoam.xyz);
        vec3 v = -normalize(vpos - cameraPosition);
        float shadow = ${b.receiveShadows?c.glsl`1.0 - readShadowMap(vpos, linearDepth)`:"1.0"};
        vec4 vPosView = view*vec4(vpos, 1.0);
        vec4 final = vec4(getSeaColor(n, v, lightingMainDirection, waterColor.rgb, lightingMainIntensity, localUp, shadow, tangentNormalFoam.w, vPosView.xyz, vpos + localOrigin), waterColor.w);

        // gamma correction
        gl_FragColor = delinearizeGamma(final);
        gl_FragColor = highlightSlice(gl_FragColor, vpos);
        ${b.oitEnabled?"gl_FragColor \x3d premultiplyAlpha(gl_FragColor);":""}
      }
    `));b.output===d.ShaderOutput.Normal&&(a.include(h.NormalUtils,b),a.include(k.WaterDistortion,b),a.include(e.Slice,b),a.varyings.add("vpos","vec3"),a.varyings.add("vuv","vec2"),a.vertex.code.add(c.glsl`
        void main(void) {
          if (waterColor.a < ${c.glsl.float(f.symbolAlphaCutoff)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vuv = uv0;
          vpos = position;

          gl_Position = transformPosition(proj, view, vpos);
        }
    `),a.fragment.uniforms.add("timeElapsed","float"),a.fragment.code.add(c.glsl`void main() {
discardBySlice(vpos);
vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);
tangentNormalFoam.xyz = normalize(tangentNormalFoam.xyz);
gl_FragColor = vec4((tangentNormalFoam.xyz + vec3(1.0)) * 0.5, tangentNormalFoam.w);
}`));b.output===d.ShaderOutput.Draped&&(a.varyings.add("vpos","vec3"),a.vertex.code.add(c.glsl`
        void main(void) {
          if (waterColor.a < ${c.glsl.float(f.symbolAlphaCutoff)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vpos = position;
          gl_Position = transformPosition(proj, view, vpos);
        }
    `),a.fragment.uniforms.add("waterColor","vec4"),a.fragment.code.add(c.glsl`void main() {
gl_FragColor = waterColor;
}`));b.output===d.ShaderOutput.Highlight&&(a.include(q.OutputHighlight),a.varyings.add("vpos","vec3"),a.vertex.code.add(c.glsl`
      void main(void) {
        if (waterColor.a < ${c.glsl.float(f.symbolAlphaCutoff)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
      }
    `),a.include(e.Slice,b),a.fragment.code.add(c.glsl`void main() {
discardBySlice(vpos);
outputHighlight();
}`));return a}const B=Object.freeze({__proto__:null,build:m});g.WaterSurface=B;g.build=m});