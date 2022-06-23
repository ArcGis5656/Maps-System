// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../geometry/support/Ellipsoid ../views/ViewingMode ../views/3d/webgl-engine/collections/Component/Material/shader/ComponentData.glsl ../views/3d/webgl-engine/collections/Component/Material/shader/VertexDiscardByOpacity.glsl ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexPosition.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeMaterialColor.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeShadingNormal.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadBaseColorTexture.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl ../views/3d/webgl-engine/core/shaderLibrary/terrain/Overlay.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/EllipsoidMode ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),
function(k,l,g,m,x,y,e,z,A,B,C,D,E,F,G,n,p,H,q,r,t,f,I,J,K,u,v,c,L,d){function w(a){const b=new L.ShaderBuilder;b.include(E.VertexPosition,a);b.include(D.VertexNormal,a);b.include(C.VertexColor,a);b.include(B.TextureCoordinateAttribute,a);b.include(y.ForwardLinearDepth,a);b.include(m.ComponentData,a);b.include(u.DiscardOrAdjustAlpha,a);b.include(z.Slice,a);b.include(I.ReadBaseColorTexture,a);b.include(x.VertexDiscardByOpacity,a);b.fragment.uniforms.add("view","mat4");if(a.pbrMode===f.PBRMode.Normal||
a.pbrMode===f.PBRMode.Schematic)b.include(f.PhysicallyBasedRenderingParameters,a),a.hasNormalTexture&&b.include(H.ComputeNormalTexture,a);a.output===e.ShaderOutput.Shadow&&a.componentData===m.ComponentDataType.Varying?b.vertex.code.add(c.glsl`#define discardShadows(castShadows) { if(!castShadows) { gl_Position = vec4(1e38, 1e38, 1e38, 1.0); return; } }`):b.vertex.code.add(c.glsl`#define discardShadows(castShadows) {}`);const h=a.overlayEnabled&&a.output===e.ShaderOutput.Color&&a.pbrMode===f.PBRMode.WaterOnIntegratedMesh;
a.overlayEnabled&&(b.include(r.EvaluateSceneLighting,a),b.include(K.Overlay,a),a.viewingMode===g.ViewingMode.Global?b.vertex.code.add(c.glsl`
      const float invEllipsoidRadius = ${c.glsl.float(1/(a.ellipsoidMode===v.EllipsoidMode.Earth?l.earth.radius:a.ellipsoidMode===v.EllipsoidMode.Mars?l.mars.radius:l.moon.radius))};
      vec2 projectOverlay(vec3 pos) {
        return pos.xy / (1.0 + invEllipsoidRadius * pos.z);
      }
      `):b.vertex.code.add(c.glsl`vec2 projectOverlay(vec3 pos) { return pos.xy; }`));h&&(b.varyings.add("tbnTangent","vec3"),b.varyings.add("tbnBiTangent","vec3"),b.varyings.add("groundNormal","vec3"),b.varyings.add("positionView","vec3"));b.vertex.code.add(c.glsl`
    void main() {
      bool castShadows;
      vec4 externalColor = forwardExternalColor(castShadows);
      discardShadows(castShadows);

      vertexDiscardByOpacity(externalColor.a);

      if (externalColor.a < ${c.glsl.float(u.symbolAlphaCutoff)}) {
        // Discard this vertex
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }
      forwardPosition();
      forwardNormal();
      ${h?c.glsl`
        positionView = position_view();
        ${a.viewingMode===g.ViewingMode.Global?c.glsl`
        groundNormal = normalize(positionWorld());
        tbnTangent = normalize(cross(vec3(0.0, 0.0, 1.0), groundNormal));
        tbnBiTangent = normalize(cross(groundNormal, tbnTangent));`:c.glsl`
        groundNormal = vec3(0.0, 0.0, 1.0);
        tbnTangent = vec3(1.0, 0.0, 0.0);
        tbnBiTangent = normalize(cross(groundNormal, tbnTangent));`}
        `:""}

      ${a.overlayEnabled?c.glsl`setOverlayVTC(projectOverlay(position));`:""}
      forwardTextureCoordinates();
      forwardVertexColor();
      forwardLinearDepth(); // depends on forwardPosition()
    }
  `);a.output===e.ShaderOutput.Alpha&&(b.fragment.include(n.ReadLinearDepth),a.multipassTerrainEnabled&&b.include(t.multipassTerrainTest,a),b.include(p.ComputeMaterialColor,a),b.fragment.code.add(c.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);
        ${a.multipassTerrainEnabled?c.glsl`terrainDepthTest(gl_FragCoord, vPosition_view.z);`:""}

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        vec4 externalColor;
        int externalColorMixMode;
        readExternalColor(externalColor, externalColorMixMode);

        vec4 materialColor = computeMaterialColor(
          textureColor,
          externalColor,
          externalColorMixMode
        );
        ${a.overlayEnabled?c.glsl`
        vec4 overlayColorOpaque = getOverlayColor(ovColorTex, vtcOverlay);
        vec4 overlayColor = overlayOpacity * overlayColorOpaque;
        materialColor = materialColor * (1.0 - overlayColor.a) + overlayColor;`:""}

        gl_FragColor = vec4(materialColor.a);
      }
    `));a.output===e.ShaderOutput.Color&&(b.fragment.include(n.ReadLinearDepth),a.multipassTerrainEnabled&&b.include(t.multipassTerrainTest,a),b.include(p.ComputeMaterialColor,a),b.include(q.ComputeShadingNormal,a),b.include(r.EvaluateSceneLighting,a),h&&b.fragment.uniforms.add("ovNormalTex","sampler2D"),a.receiveShadows?(b.include(J.ReadShadowMap,a),b.fragment.code.add(c.glsl`float evaluateShadow() {
return readShadowMap(vPositionWorldCameraRelative, linearDepth);
}`)):b.fragment.code.add(c.glsl`float evaluateShadow() { return 0.0; }`),b.fragment.code.add(c.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);
        ${a.multipassTerrainEnabled?c.glsl`terrainDepthTest(gl_FragCoord, vPosition_view.z);`:""}

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        vec4 externalColor;
        int externalColorMixMode;
        readExternalColor(externalColor, externalColorMixMode);

        vec4 materialColor = computeMaterialColor(
          textureColor,
          externalColor,
          externalColorMixMode
        );
        ${a.overlayEnabled?c.glsl`
        vec4 overlayColorOpaque = getOverlayColor(ovColorTex, vtcOverlay);
        vec4 overlayColor = overlayOpacity * overlayColorOpaque;
        materialColor = materialColor * (1.0 - overlayColor.a) + overlayColor;`:""}
    `),a.pbrMode===f.PBRMode.Normal||a.pbrMode===f.PBRMode.Schematic?(b.fragment.code.add(c.glsl`
        ${a.pbrMode===f.PBRMode.Normal?c.glsl`
        applyPBRFactors();
        if (int(externalColorMixMode) == 3) {
          mrr = vec3(0.0, 0.6, 0.2);
        }`:""}
        vec3 normalVertex = shadingNormalWorld();
        float additionalIrradiance = 0.02 * lightingMainIntensity[2];
      `),a.hasNormalTexture?b.fragment.code.add(c.glsl`mat3 tangentSpace = computeTangentSpace(normalVertex, vPositionWorldCameraRelative, vuv0);
vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`):b.fragment.code.add(c.glsl`vec3 shadingNormal = normalVertex;`),b.fragment.code.add(c.glsl`${a.viewingMode===g.ViewingMode.Global?c.glsl`vec3 normalGround = normalize(positionWorld());`:c.glsl`vec3 normalGround = vec3(0.0, 0.0, 1.0);`}
      `),b.fragment.code.add(c.glsl`vec3 viewDir = normalize(vPositionWorldCameraRelative);
float ssao = 1.0 - occlusion * (1.0 - evaluateAmbientOcclusion());
vec3 additionalLight = evaluateAdditionalLighting(ssao, positionWorld());
vec4 shadedColor = vec4(evaluateSceneLightingPBR(shadingNormal, materialColor.rgb, evaluateShadow(), ssao, additionalLight, viewDir, normalGround, mrr, emission, additionalIrradiance), materialColor.a);`)):(a.receiveShadows?b.fragment.code.add(c.glsl`float shadow = evaluateShadow();`):a.viewingMode===g.ViewingMode.Global?b.fragment.code.add(c.glsl`float additionalAmbientScale = additionalDirectedAmbientLight(positionWorld());
float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);`):b.fragment.code.add(c.glsl`float shadow = 0.0;`),b.fragment.code.add(c.glsl`
      float ambientOcclusion = evaluateAmbientOcclusion();
      // At global scale we create some additional ambient light based on the main light to simulate global illumination
      vec3 additionalLight = evaluateAdditionalLighting(ambientOcclusion, positionWorld());
      vec4 shadedColor = vec4(evaluateSceneLighting(shadingNormalWorld(), materialColor.rgb, shadow, ambientOcclusion, additionalLight), materialColor.a);
      ${h?c.glsl`
          vec4 overlayWaterMask = getOverlayColor(ovNormalTex, vtcOverlay);
          float waterNormalLength = length(overlayWaterMask);
          if (waterNormalLength > 0.95) {
            mat3 tbnMatrix = mat3(tbnTangent, tbnBiTangent, groundNormal);
            vec4 waterOverlayColor = vec4(overlayColorOpaque.xyz, overlayColor.w);
            vec4 waterColorLinear = getOverlayWaterColor(overlayWaterMask, waterOverlayColor, -normalize(vPositionWorldCameraRelative), shadow, groundNormal, tbnMatrix, positionView, positionWorld());
            vec4 waterColorNonLinear = delinearizeGamma(vec4(waterColorLinear.xyz, 1.0));
            // un-gamma the ground color to mix in linear space
            shadedColor = mix(shadedColor, waterColorNonLinear, waterColorLinear.w);
          }`:""}
      `)),b.fragment.code.add(c.glsl`
        gl_FragColor = highlightSlice(shadedColor, vPositionWorldCameraRelative);
        ${a.oitEnabled?"gl_FragColor \x3d premultiplyAlpha(gl_FragColor);":""}
      }
    `));if(a.output===e.ShaderOutput.Depth||a.output===e.ShaderOutput.Shadow)b.include(F.OutputDepth,a),b.fragment.code.add(c.glsl`void main() {
discardBySlice(vPositionWorldCameraRelative);
vec4 textureColor = readBaseColorTexture();
discardOrAdjustAlpha(textureColor);
outputDepth(linearDepth);
}`);a.output===e.ShaderOutput.Normal&&(b.include(q.ComputeShadingNormal,a),b.fragment.code.add(c.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        // note: the alpha component needs to be 1.0 in order for this material
        // to influence ambient occlusion, see the ssao fragment shader
        float alpha = ${a.normalType===A.NormalAttributeType.Ground?"0.0":"1.0"};
        gl_FragColor = vec4(vec3(.5) + .5 * shadingNormal_view(), alpha);
      }
    `));a.output===e.ShaderOutput.Highlight&&(b.include(G.OutputHighlight),b.fragment.code.add(c.glsl`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        ${a.overlayEnabled?c.glsl`
        vec4 overlayColor = getCombinedOverlayColor();

        if (overlayColor.a == 0.0) {
          gl_FragColor = vec4(0.0);
          return;
        }`:""}

        outputHighlight();
      }
    `));return b}d=new Map([[d.VertexAttribute.POSITION,0],[d.VertexAttribute.NORMAL,1],[d.VertexAttribute.NORMALCOMPRESSED,1],[d.VertexAttribute.COLOR,2],[d.VertexAttribute.UV0,3],[d.VertexAttribute.UVREGION,4],[d.VertexAttribute.COMPONENTINDEX,5]]);const M=Object.freeze({__proto__:null,attributeLocations:d,build:w});k.ComponentShader=M;k.attributeLocations=d;k.build=w});