// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexTangent.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/NormalUtils.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../views/3d/webgl-engine/core/shaderLibrary/terrain/Overlay.glsl ../views/3d/webgl-engine/core/shaderLibrary/terrain/Skirts.glsl ../views/3d/webgl-engine/core/shaderLibrary/terrain/TerrainTexture.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/HeaderComment.glsl ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(l,d,r,e,t,u,v,m,f,n,g,w,x,y,c,z,p){function q(b){const a=new z.ShaderBuilder;a.include(y.HeaderComment,{name:"Terrain Shader",output:b.output});a.include(w.Skirts);a.attributes.add(p.VertexAttribute.POSITION,"vec3");a.attributes.add(p.VertexAttribute.UV0,"vec2");a.vertex.uniforms.add("proj","mat4").add("view","mat4").add("origin","vec3").add("skirtScale","float");a.fragment.uniforms.add("origin","vec3");if(b.output===d.ShaderOutput.Color){a.include(e.Transform,{linearDepth:!1});a.include(f.NormalUtils,
b);a.include(x.TerrainTexture,b);a.include(m.EvaluateSceneLighting,b);const k=b.overlayMode!==g.OverlayMode.Disabled,h=b.overlayMode===g.OverlayMode.EnabledWithWater;k&&a.include(g.Overlay,{pbrMode:n.PBRMode.Water,useCustomDTRExponentForWater:!1,ssrEnabled:b.ssrEnabled,highStepCount:b.highStepCount});h&&a.include(t.VertexTangent,b);a.varyings.add("vnormal","vec3");a.varyings.add("vpos","vec3");a.vertex.uniforms.add("viewNormal","mat4");b.receiveShadows&&a.varyings.add("linearDepth","float");b.tileBorders&&
a.varyings.add("vuv","vec2");b.atmosphere&&(a.vertex.uniforms.add("lightingMainDirection","vec3"),a.varyings.add("wnormal","vec3"),a.varyings.add("wlight","vec3"));b.screenSizePerspective&&(a.vertex.uniforms.add("screenSizePerspective","vec4"),a.varyings.add("screenSizeDistanceToCamera","float"),a.varyings.add("screenSizeCosAngle","float"));a.vertex.code.add(c.glsl`
      void main(void) {
        vpos = position;
        vnormal = getLocalUp(vpos, origin);

        vec2 uv = uv0;
        vpos = applySkirts(uv, vpos, vnormal, skirtScale);
        ${b.atmosphere?c.glsl`
        wnormal = normalize((viewNormal * vec4(normalize(vpos + origin), 1.0)).xyz);
        wlight = normalize((view  * vec4(lightingMainDirection, 1.0)).xyz);`:""}
        ${b.tileBorders?c.glsl`vuv = uv;`:""}
        ${b.screenSizePerspective?c.glsl`
        vec3 viewPos = (view * vec4(vpos, 1.0)).xyz;
        screenSizeDistanceToCamera = length(viewPos);
        vec3 viewSpaceNormal = (viewNormal * vec4(normalize(vpos + origin), 1.0)).xyz;
        screenSizeCosAngle = abs(viewSpaceNormal.z);`:""}
        gl_Position = transformPosition(proj, view, vpos);
        ${b.receiveShadows?c.glsl`linearDepth = gl_Position.w;`:""}
        forwardTextureCoordinates(uv);
        ${k?c.glsl`setOverlayVTC(uv);`:""}
        ${h?c.glsl`forwardVertexTangent(vnormal);`:c.glsl``}
      }
    `);a.extensions.add("GL_OES_standard_derivatives");a.extensions.add("GL_EXT_shader_texture_lod");a.include(r.Slice,b);a.include(m.EvaluateSceneLighting,b);a.fragment.uniforms.add("cameraPosition","vec3").add("viewDirection","vec3").add("ssaoTex","sampler2D").add("viewportPixelSz","vec4");b.screenSizePerspective&&a.fragment.uniforms.add("screenSizePerspective","vec4");h&&(a.fragment.uniforms.add("ovWaterTex","sampler2D"),a.fragment.uniforms.add("view","mat4"));a.fragment.code.add(c.glsl`const float sliceOpacity = 0.2;
float lum(vec3 c) {
return (min(min(c.r, c.g), c.b) + max(max(c.r, c.g), c.b)) * 0.5;
}`);a.fragment.code.add(c.glsl`
      void main() {
        ${b.receiveShadows?c.glsl`float shadow = readShadowMap(vpos, linearDepth);`:c.glsl`float shadow = 0.0;`}
        float vndl = dot(normalize(vnormal), lightingMainDirection);

        float ssao = viewportPixelSz.w < .0 ? 1.0 : texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
        vec4 tileColor = getTileColor();
        ${k?c.glsl`
            vec4 overlayColorOpaque = getOverlayColor(ovColorTex, vtcOverlay);
            vec4 overlayColor = overlayOpacity * overlayColorOpaque;
            vec4 groundColor = tileColor;
            tileColor = tileColor * (1.0 - overlayColor.a) + overlayColor;`:""}
        if (rejectBySlice(vpos)) {
          tileColor *= sliceOpacity;
        }
        ${b.atmosphere?c.glsl`
            float ndotl = clamp(vndl, 0.0, 1.0);
            vec3 atm = vec3(clamp(1.0 - dot(-viewDirection, wnormal), 0.0, 1.0));
            atm *= clamp(1.0 - lum(tileColor.rgb) * 1.5, 0.0, 1.0); //avoid atmosphere on bright base maps
            atm *= clamp(ndotl * 2.0, 0.0, 1.0); // avoid atmosphere on dark side of the globe
            atm *= tileColor.a; // premultiply with tile alpha`:""}

        vec3 albedo = ${b.atmosphere?c.glsl`atm + tileColor.rgb;`:c.glsl`tileColor.rgb;`}
        vec3 normal = normalize(vnormal);

        // heuristic shading function used in the old terrain, now used to add ambient lighting
        float additionalAmbientScale = smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        gl_FragColor = vec4(evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight), tileColor.a);
        ${h?c.glsl`
            vec4 overlayWaterMask = getOverlayColor(ovWaterTex, vtcOverlay);
            float waterNormalLength = length(overlayWaterMask);
            if (waterNormalLength > 0.95) {
              mat3 tbnMatrix = mat3(tbnTangent, tbnBiTangent, vnormal);
              vec4 waterOverlayColor = vec4(overlayColor.w > 0.0 ? overlayColorOpaque.xyz/overlayColor.w : vec3(1.0), overlayColor.w);
              vec4 viewPosition = view*vec4(vpos, 1.0);
              vec4 waterColorLinear = getOverlayWaterColor(overlayWaterMask, waterOverlayColor, -normalize(vpos - cameraPosition), shadow, vnormal, tbnMatrix, viewPosition.xyz,  vpos + origin);
              vec4 waterColorNonLinear = delinearizeGamma(vec4(waterColorLinear.xyz, 1.0));
              // un-gamma the ground color to mix in linear space
              gl_FragColor = mix(groundColor, waterColorNonLinear, waterColorLinear.w);
            }`:""}
        ${b.screenSizePerspective?c.glsl`
          float perspectiveScale = screenSizePerspectiveScaleFloat(1.0, screenSizeCosAngle, screenSizeDistanceToCamera, screenSizePerspective);
          if (perspectiveScale <= 0.25) {
            gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 0.0, 1.0), perspectiveScale * 4.0);
          }
          else if (perspectiveScale <= 0.5) {
            gl_FragColor = mix(gl_FragColor, vec4(0.0, 0.0, 1.0, 1.0), (perspectiveScale - 0.25) * 4.0);
          }
          else if (perspectiveScale >= 0.99) {
            gl_FragColor = mix(gl_FragColor, vec4(0.0, 1.0, 0.0, 1.0), 0.2);
          }
          else {
            gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 1.0, 1.0), (perspectiveScale - 0.5) * 2.0);
          }`:""}
        ${b.tileBorders?c.glsl`
            vec2 dVuv = fwidth(vuv);
            vec2 edgeFactors = smoothstep(vec2(0.0), 1.5 * dVuv, min(vuv, 1.0 - vuv));
            float edgeFactor = 1.0 - min(edgeFactors.x, edgeFactors.y);
            gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 0.0, 1.0), edgeFactor);`:""}
        gl_FragColor = highlightSlice(gl_FragColor, vpos);
      }
    `)}if(b.output===d.ShaderOutput.Depth||b.output===d.ShaderOutput.Shadow)a.include(e.Transform,{linearDepth:!0}),a.include(u.OutputDepth,{output:b.output}),a.include(f.NormalUtils,b),a.varyings.add("linearDepth","float"),a.vertex.uniforms.add("nearFar","vec2"),a.vertex.code.add(c.glsl`void main(void) {
vec3 normal = getLocalUp(position, origin);
vec2 uv = uv0;
vec3 vpos = applySkirts(uv, position, normal.xyz, skirtScale);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, linearDepth);
}`),a.fragment.code.add(c.glsl`void main() {
outputDepth(linearDepth);
}`);b.output===d.ShaderOutput.Normal&&(a.include(e.Transform,{linearDepth:!1}),a.include(f.NormalUtils,b),a.varyings.add("vnormal","vec3"),a.varyings.add("vpos","vec3"),a.vertex.uniforms.add("viewNormal","mat4"),a.vertex.code.add(c.glsl`void main(void) {
vec3 normal = getLocalUp(position, origin);
vec2 uv = uv0;
vpos = applySkirts(uv, position, normal, skirtScale);
gl_Position = transformPosition(proj, view, vpos);
vnormal = normalize((viewNormal * vec4(normal, 1.0)).xyz);
}`),a.fragment.code.add(c.glsl`void main() {
vec3 normal = normalize(vnormal);
if (gl_FrontFacing == false) {
normal = -normal;
}
gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 0.0);
}`));b.output===d.ShaderOutput.Highlight&&(a.include(e.Transform,{linearDepth:!1}),a.include(f.NormalUtils,b),a.include(g.Overlay,{pbrMode:n.PBRMode.Disabled}),a.vertex.code.add(c.glsl`void main() {
vec3 vnormal = getLocalUp(position, origin);
vec2 uv = uv0;
vec3 vpos = applySkirts(uv, position, vnormal, skirtScale);
setOverlayVTC(uv);
gl_Position = transformPosition(proj, view, vpos);
}`),a.include(v.OutputHighlight),a.fragment.code.add(c.glsl`void main() {
vec4 overlayColor = getCombinedOverlayColor();
if (overlayColor.a == 0.0) {
gl_FragColor = vec4(0.0);
return;
}
outputHighlight();
}`));return a}const A=Object.freeze({__proto__:null,build:q});l.TerrainShader=A;l.build=q});