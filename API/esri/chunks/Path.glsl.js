// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../views/ViewingMode ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl ../views/3d/webgl-engine/core/shaderLibrary/attributes/PathVertexPosition.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/NormalUtils.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder".split(" "),
function(g,m,n,c,e,f,p,q,r,t,u,v,w,x,h,k,y,d,z){function l(b){const a=new z.ShaderBuilder;a.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraPosition","vec3").add("localOrigin","vec3");a.varyings.add("vpos","vec3");a.include(p.PathVertexPosition,b);if(b.output===c.ShaderOutput.Color||b.output===c.ShaderOutput.Alpha)a.include(f.Transform,{linearDepth:!1}),b.receiveShadows&&a.include(k.ReadShadowMap,b),a.include(n.ForwardLinearDepth,b),a.varyings.add("vnormal","vec3"),a.varyings.add("vcolor",
"vec4"),b.multipassTerrainEnabled&&a.varyings.add("depth","float"),a.vertex.code.add(d.glsl`
      void main() {
        vpos = calculateVPos();
        vnormal = normalize(localNormal());

        ${b.multipassTerrainEnabled?"depth \x3d (view * vec4(vpos, 1.0)).z;":""}
        gl_Position = transformPosition(proj, view, vpos);

        ${b.output===c.ShaderOutput.Color?"forwardLinearDepth();":""}

        vcolor = getColor();
      }
    `);b.multipassTerrainEnabled&&(a.fragment.include(t.ReadLinearDepth),a.include(w.multipassTerrainTest,b));b.output===c.ShaderOutput.Alpha&&(a.include(e.Slice,b),a.fragment.uniforms.add("cameraPosition","vec3"),a.fragment.uniforms.add("localOrigin","vec3"),a.fragment.uniforms.add("opacity","float"),a.fragment.code.add(d.glsl`
      void main() {
        discardBySlice(vpos);
        ${b.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        float combinedOpacity = vcolor.a * opacity;
        gl_FragColor = vec4(combinedOpacity);
      }
    `));b.output===c.ShaderOutput.Color&&(a.include(e.Slice,b),a.include(v.EvaluateSceneLighting,b),a.include(u.EvaluateAmbientOcclusion,b),b.receiveShadows&&a.include(k.ReadShadowMap,b),a.include(x.Normals,b),a.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("specular","vec3").add("opacity","float"),a.fragment.include(y.ColorConversion),a.fragment.code.add(d.glsl`
      void main() {
        discardBySlice(vpos);
        ${b.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}

        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        shadingParams.normalView = vnormal;
        vec3 normal = shadingNormal(shadingParams);
        float ssao = evaluateAmbientOcclusionInverse();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${b.receiveShadows?"float shadow \x3d readShadowMap(vpos, linearDepth);":b.viewingMode===m.ViewingMode.Global?"float shadow \x3d lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow \x3d 0.0;"}
        vec3 albedo = vcolor.rgb * max(ambient, diffuse); // combine the old material parameters into a single one
        float combinedOpacity = vcolor.a * opacity;
        albedo += 0.25 * specular; // don't completely ignore specular for now

        vec3 shadedColor = evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight);
        gl_FragColor = vec4(shadedColor, combinedOpacity);
        gl_FragColor = highlightSlice(gl_FragColor, vpos);
        ${b.oitEnabled?"gl_FragColor \x3d premultiplyAlpha(gl_FragColor);":""}
      }
    `));if(b.output===c.ShaderOutput.Depth||b.output===c.ShaderOutput.Shadow)a.include(f.Transform,{linearDepth:!0}),a.vertex.uniforms.add("nearFar","vec2"),a.varyings.add("depth","float"),a.vertex.code.add(d.glsl`void main() {
vpos = calculateVPos();
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
}`),a.include(e.Slice,b),a.include(q.OutputDepth,b),a.fragment.uniforms.add("timeElapsed","float"),a.fragment.code.add(d.glsl`void main() {
discardBySlice(vpos);
outputDepth(depth);
}`);b.output===c.ShaderOutput.Normal&&(a.include(f.Transform,{linearDepth:!1}),a.include(h.NormalUtils,b),a.vertex.uniforms.add("viewNormal","mat4"),a.varyings.add("vnormal","vec3"),a.vertex.code.add(d.glsl`void main(void) {
vpos = calculateVPos();
vnormal = normalize((viewNormal * vec4(localNormal(), 1.0)).xyz);
gl_Position = transformPosition(proj, view, vpos);
}`),a.include(e.Slice,b),a.fragment.uniforms.add("waterColor","vec4"),a.fragment.code.add(d.glsl`void main() {
discardBySlice(vpos);
vec3 normal = normalize(vnormal);
if (gl_FrontFacing == false) normal = -normal;
gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
}`));b.output===c.ShaderOutput.Highlight&&(a.include(f.Transform,{linearDepth:!1}),a.include(h.NormalUtils,b),a.vertex.uniforms.add("viewNormal","mat4"),a.varyings.add("vnormal","vec3"),a.vertex.code.add(d.glsl`void main(void) {
vpos = calculateVPos();
gl_Position = transformPosition(proj, view, vpos);
}`),a.include(e.Slice,b),a.include(r.OutputHighlight),a.fragment.code.add(d.glsl`void main() {
discardBySlice(vpos);
outputHighlight();
}`));return a}const A=Object.freeze({__proto__:null,build:l});g.PathShader=A;g.build=l});