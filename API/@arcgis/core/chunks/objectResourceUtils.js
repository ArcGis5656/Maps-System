/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{a as e}from"./devEnvironmentUtils.js";import{h as t,b as o,i as r,u as a,j as i}from"../core/lang.js";import{a as n}from"./mat3.js";import{b as s}from"./quatf64.js";import{g as l}from"./mat4.js";import{c as d}from"./mat4f64.js";import{b as c,c as u,q as m,s as p,j as v,n as h,h as f,l as g,e as x,d as b,E as C,L as T,v as y,ad as M,g as w}from"./mathUtils.js";import{e as O,x as A}from"./aaBoundingBox.js";import{B as S,a as P,c as E,b as R,s as D,u as N,v as L}from"./BufferView.js";import{t as I,a as _,s as F,c as B}from"./vec3.js";import{l as z,D as V,C as G,c as W,t as $,n as j,s as U,a as q,f as H,b as k,d as Q,e as Y}from"./DefaultMaterial_COLOR_GAMMA.js";import X from"../request.js";import{r as K}from"./asyncUtils.js";import J from"../core/Error.js";import{L as Z}from"./Logger.js";import{throwIfAbortError as ee}from"../core/promiseUtils.js";import{V as te}from"./Version.js";import{r as oe}from"./requestImageUtils.js";import{A as re,C as ae,T as ie,d as ne}from"./basicInterfaces.js";import{d as se,T as le,O as de,f as ce,D as ue,k as me,C as pe,s as ve,m as he,p as fe,c as ge,R as xe,S as be,P as Ce,b as Te,g as ye,l as Me,Y as we,h as Oe,x as Ae,n as Se,o as Pe,q as Ee,r as Re,w as De,e as Ne}from"./glUtil3D.js";import{T as Le}from"./Texture2.js";import{V as Ie}from"./ViewingMode.js";import{n as _e}from"./InterleavedLayout.js";import{n as Fe}from"./compilerUtils.js";import{g as Be,S as ze,R as Ve}from"./ShaderBuilder.js";import{G as Ge}from"./GLMaterialTexture.js";import{D as We,n as $e,j as je,a as Ue,M as qe,v as He,i as ke}from"./Material.js";import{m as Qe,b as Ye,o as Xe,c as Ke,f as Je,a as Ze,d as et,g as tt,h as ot}from"./OrderIndependentTransparency.js";import{a as rt,R as at}from"./RenderSlot.js";import{V as it}from"./VertexAttribute.js";import{g as nt}from"./verticalOffsetUtils.js";import{_ as st}from"./tslib.es6.js";import{a as lt}from"./doublePrecisionUtils.js";import{T as dt,i as ct,e as ut,V as mt,E as pt,P as vt,c as ht,a as ft,b as gt,F as xt,g as bt,h as Ct,j as Tt}from"./VisualVariables.glsl.js";import{V as yt,b as Mt}from"./VerticalOffset.glsl.js";import{R as wt,c as Ot}from"./ReadShadowMap.glsl.js";import{V as At}from"./VertexColor.glsl.js";import{a as St}from"./Texture.js";import{C as Pt,f as Et,P as Rt}from"./enums.js";function Dt(e,t){const o=e.fragment;switch(o.code.add(Be`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case Nt.None:o.code.add(Be`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case Nt.View:o.code.add(Be`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case Nt.WindingOrder:o.code.add(Be`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:Fe(t.doubleSidedMode);case Nt.COUNT:}}var Nt;function Lt({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(Be`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(Be`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function It(e){return!!t("force-double-precision-obfuscation")||e.driverTest.doublePrecisionRequiresObfuscation}function _t(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add(it.MODELORIGINHI,"vec3"),e.attributes.add(it.MODELORIGINLO,"vec3"),e.attributes.add(it.MODEL,"mat3"),e.attributes.add(it.MODELNORMAL,"mat3")),t.instancedDoublePrecision&&(e.vertex.include(Lt,t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const o=[Be`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,Be`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?Be`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,Be`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,Be`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,t.vertexTangents?Be`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:Be``];e.vertex.code.add(o[0]),e.vertex.code.add(o[1]),e.vertex.code.add(o[2]),t.output===se.Normal&&e.vertex.code.add(o[3]),e.vertex.code.add(o[4])}!function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"}(Nt||(Nt={}));const Ft=c(),Bt=c();function zt(e){const t=Be`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.fragment.code.add(t),e.vertex.code.add(t)}function Vt(e,t){t.normalType===Gt.Attribute&&(e.attributes.add(it.NORMAL,"vec3"),e.vertex.code.add(Be`vec3 normalModel() {
return normal;
}`)),t.normalType===Gt.CompressedAttribute&&(e.include(zt),e.attributes.add(it.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(Be`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),t.normalType===Gt.ScreenDerivative&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(Be`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}var Gt,Wt;function $t(e){e.vertex.code.add(Be`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function jt(e){e.attributes.add(it.POSITION,"vec3"),e.vertex.code.add(Be`vec3 positionModel() { return position; }`)}function Ut(e){switch(e){case"multiply":default:return Wt.Multiply;case"ignore":return Wt.Ignore;case"replace":return Wt.Replace;case"tint":return Wt.Tint}}function qt(e,t,r){if(o(e)||t===Wt.Ignore)return r[0]=255,r[1]=255,r[2]=255,void(r[3]=255);const a=u(Math.round(e[3]*kt),0,kt),i=0===a||t===Wt.Tint?0:t===Wt.Replace?Qt:Yt;r[0]=u(Math.round(e[0]*Ht),0,Ht),r[1]=u(Math.round(e[1]*Ht),0,Ht),r[2]=u(Math.round(e[2]*Ht),0,Ht),r[3]=a+i}!function(e){e[e.Attribute=0]="Attribute",e[e.CompressedAttribute=1]="CompressedAttribute",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT"}(Gt||(Gt={})),function(e){e[e.Multiply=1]="Multiply",e[e.Ignore=2]="Ignore",e[e.Replace=3]="Replace",e[e.Tint=4]="Tint"}(Wt||(Wt={}));const Ht=255,kt=85,Qt=kt,Yt=2*kt;function Xt(e){e.vertex.code.add(Be`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${Be.int(Wt.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${Be.int(Wt.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${Be.int(Wt.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${Be.int(Wt.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function Kt(e,t){t.symbolColor?(e.include(Xt),e.attributes.add(it.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),t.symbolColor?e.vertex.code.add(Be`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):e.vertex.code.add(Be`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}function Jt(e,t){e.include(jt),e.vertex.include(Lt,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("transformWorldFromModelRS","mat3"),e.vertex.uniforms.add("transformWorldFromModelTH","vec3"),e.vertex.uniforms.add("transformWorldFromModelTL","vec3"),e.vertex.uniforms.add("transformWorldFromViewTH","vec3"),e.vertex.uniforms.add("transformWorldFromViewTL","vec3"),e.vertex.uniforms.add("transformViewFromCameraRelativeRS","mat3"),e.vertex.uniforms.add("transformProjFromView","mat4"),e.vertex.code.add(Be`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return transformViewFromCameraRelativeRS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.uniforms.add("transformWorldFromViewTL","vec3"),e.fragment.code.add(Be`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class Zt{constructor(){this.transformWorldFromModelRS=s(),this.transformWorldFromModelTH=c(),this.transformWorldFromModelTL=c()}}class eo{constructor(){this.transformWorldFromViewTH=c(),this.transformWorldFromViewTL=c(),this.transformViewFromCameraRelativeRS=s(),this.transformProjFromView=d()}}function to(e,t){e.setUniformMatrix3fv("transformWorldFromModelRS",t.transformWorldFromModelRS),e.setUniform3fv("transformWorldFromModelTH",t.transformWorldFromModelTH),e.setUniform3fv("transformWorldFromModelTL",t.transformWorldFromModelTL)}function oo(e,t){e.setUniform3fv("transformWorldFromViewTH",t.transformWorldFromViewTH),e.setUniform3fv("transformWorldFromViewTL",t.transformWorldFromViewTL),e.setUniformMatrix4fv("transformProjFromView",t.transformProjFromView),e.setUniformMatrix3fv("transformViewFromCameraRelativeRS",t.transformViewFromCameraRelativeRS)}function ro(e,t){t.normalType===Gt.Attribute||t.normalType===Gt.CompressedAttribute?(e.include(Vt,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("transformNormalGlobalFromModel","mat3"),e.vertex.uniforms.add("transformNormalViewFromGlobal","mat3"),e.vertex.code.add(Be`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):t.normalType===Gt.Ground?(e.include(Jt,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(Be`
    void forwardNormal() {
      vNormalWorld = ${t.viewingMode===Ie.Global?Be`normalize(vPositionWorldCameraRelative);`:Be`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(Be`void forwardNormal() {}`)}function ao(e,t){e.setUniformMatrix4fv("viewNormal",t)}function io(e,t){const o=e.vertex.code,r=e.fragment.code,a=t.hasModelTransformation;t.output!==se.Depth&&t.output!==se.Shadow||(e.include(le,{linearDepth:!0,hasModelTransformation:a}),e.include(dt,t),e.include(ct,t),e.include(de,t),e.include(ce,t),e.vertex.uniforms.add("nearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),o.add(Be`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, ${a?"model,":""} vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),e.include(ue,t),r.add(Be`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?Be`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),t.output===se.Normal&&(e.include(le,{linearDepth:!1,hasModelTransformation:a}),e.include(Vt,t),e.include(ro,t),e.include(dt,t),e.include(ct,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),o.add(Be`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${t.normalType===Gt.Attribute?Be`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${a?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),e.include(ce,t),e.include(ue,t),r.add(Be`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?Be`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${t.normalType===Gt.ScreenDerivative?Be`
            vec3 normal = screenDerivativeNormal(vPositionView);`:Be`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),t.output===se.Highlight&&(e.include(le,{linearDepth:!1,hasModelTransformation:a}),e.include(dt,t),e.include(ct,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),o.add(Be`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${a?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),e.include(ce,t),e.include(ue,t),e.include(me),r.add(Be`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?Be`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}function no(e,t){const o=e.fragment;t.vertexTangents?(e.attributes.add(it.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===Nt.WindingOrder?o.code.add(Be`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):o.code.add(Be`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),o.code.add(Be`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),t.attributeTextureCoordinates!==ut.None&&(e.include(mt,t),o.uniforms.add("normalTexture","sampler2D"),o.uniforms.add("normalTextureSize","vec2"),o.code.add(Be`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}function so(e,t){const o=e.fragment;t.receiveAmbientOcclusion?(o.uniforms.add("ssaoTex","sampler2D"),o.uniforms.add("viewportPixelSz","vec4"),o.code.add(Be`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):o.code.add(Be`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}function lo(e,t){const o=e.fragment;e.include(pt),e.include(so,t),t.pbrMode!==vt.Disabled&&e.include(ht,t),e.include(ft,t),t.receiveShadows&&e.include(wt,t),o.uniforms.add("lightingGlobalFactor","float"),o.uniforms.add("ambientBoostFactor","float"),o.uniforms.add("hasFillLights","bool"),e.include(gt),o.code.add(Be`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===vt.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),o.code.add(Be`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.viewingMode===Ie.Global?Be`normalize(vPosWorld)`:Be`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),o.code.add(Be`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),t.pbrMode===vt.Disabled||t.pbrMode===vt.WaterOnIntegratedMesh?o.code.add(Be`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):t.pbrMode!==vt.Normal&&t.pbrMode!==vt.Schematic||(o.code.add(Be`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),o.code.add(Be`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),o.code.add(Be`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),o.code.add(Be`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),o.code.add(Be`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode===vt.Schematic?Be`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:Be`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}function co(e,t){const o=Be`
  /*
  *  ${t.name}
  *  ${t.output===se.Color?"RenderOutput: Color":t.output===se.Depth?"RenderOutput: Depth":t.output===se.Shadow?"RenderOutput: Shadow":t.output===se.Normal?"RenderOutput: Normal":t.output===se.Highlight?"RenderOutput: Highlight":""}
  */
  `;St()&&(e.fragment.code.add(o),e.vertex.code.add(o))}function uo(e){e.include(pe),e.code.add(Be`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${Be.int(Wt.Multiply)}) {
        return allMixed;
      }
      else if (mode == ${Be.int(Wt.Ignore)}) {
        return internalMixed;
      }
      else if (mode == ${Be.int(Wt.Replace)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${Be.int(Wt.Ignore)}) {
        return internalMixed;
      }
      else if (mode == ${Be.int(Wt.Replace)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}const mo=Object.freeze({__proto__:null,build:function(e){const t=new ze,o=t.vertex.code,r=t.fragment.code;t.include(co,{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraPosition","vec3").add("localOrigin","vec3");const a=e.hasModelTransformation;return a&&t.vertex.uniforms.add("model","mat4"),t.include(jt),t.varyings.add("vpos","vec3"),t.include(ct,e),t.include(_t,e),t.include(yt,e),e.output!==se.Color&&e.output!==se.Alpha||(t.include(Vt,e),t.include(le,{linearDepth:!1,hasModelTransformation:a}),e.normalType===Gt.Attribute&&e.offsetBackfaces&&t.include($t),t.include(no,e),t.include(ro,e),e.instancedColor&&t.attributes.add(it.INSTANCECOLOR,"vec4"),t.varyings.add("localvpos","vec3"),t.include(dt,e),t.include(xt,e),t.include(Kt,e),t.include(At,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),o.add(Be`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${Be.float(ve)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${e.normalType===Gt.Attribute?Be`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${a?"model,":""} vpos);
          ${e.normalType===Gt.Attribute&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),e.output===se.Alpha&&(t.include(ce,e),t.include(ue,e),e.multipassTerrainEnabled&&(t.fragment.include(Ve),t.include(he,e)),t.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(uo),r.add(Be`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?Be`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:Be`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?Be`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Be`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===se.Color&&(t.include(ce,e),t.include(lo,e),t.include(so,e),t.include(ue,e),e.receiveShadows&&t.include(wt,e),e.multipassTerrainEnabled&&(t.fragment.include(Ve),t.include(he,e)),t.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(bt,e),t.include(ht,e),t.fragment.include(uo),t.include(Dt,e),r.add(Be`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?Be`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:Be`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===Gt.ScreenDerivative?Be`
        vec3 normal = screenDerivativeNormal(localvpos);`:Be`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===vt.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.viewingMode===Ie.Global?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?Be`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Be`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?Be`
              mat3 tangentSpace = ${e.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${e.pbrMode===vt.Normal||e.pbrMode===vt.Schematic?e.viewingMode===Ie.Global?Be`vec3 normalGround = normalize(vpos + localOrigin);`:Be`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:Be``}
        ${e.pbrMode===vt.Normal||e.pbrMode===vt.Schematic?Be`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(io,e),t}}),po=Z.getLogger("esri.views.3d.webgl-engine.shaders.DefaultTechnique");class vo extends be{initializeProgram(e){const t=vo.shader.get(),o=this.configuration,r=t.build({oitEnabled:o.transparencyPassType===ie.Color,output:o.output,viewingMode:e.viewingMode,receiveShadows:o.receiveShadows,slicePlaneEnabled:o.slicePlaneEnabled,sliceHighlightDisabled:o.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:o.symbolColors,vvSize:o.vvSize,vvColor:o.vvColor,vvInstancingEnabled:!0,instanced:o.instanced,instancedColor:o.instancedColor,instancedDoublePrecision:o.instancedDoublePrecision,pbrMode:o.usePBR?o.isSchematic?vt.Schematic:vt.Normal:vt.Disabled,hasMetalnessAndRoughnessTexture:o.hasMetalnessAndRoughnessTexture,hasEmissionTexture:o.hasEmissionTexture,hasOcclusionTexture:o.hasOcclusionTexture,hasNormalTexture:o.hasNormalTexture,hasColorTexture:o.hasColorTexture,hasModelTransformation:o.hasModelTransformation,receiveAmbientOcclusion:o.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:o.normalsTypeDerivate?Gt.ScreenDerivative:Gt.Attribute,doubleSidedMode:o.doubleSidedMode,vertexTangents:o.vertexTangents,attributeTextureCoordinates:o.hasMetalnessAndRoughnessTexture||o.hasEmissionTexture||o.hasOcclusionTexture||o.hasNormalTexture||o.hasColorTexture?ut.Default:ut.None,textureAlphaPremultiplied:o.textureAlphaPremultiplied,attributeColor:o.vertexColors,screenSizePerspectiveEnabled:o.screenSizePerspective,verticalOffsetEnabled:o.verticalOffset,offsetBackfaces:o.offsetBackfaces,doublePrecisionRequiresObfuscation:It(e.rctx),alphaDiscardMode:o.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:o.multipassTerrainEnabled,cullAboveGround:o.cullAboveGround});return new Ce(e.rctx,r,We)}bindPass(e,t){var o,a;Te(this.program,t.camera.projectionMatrix);const i=this.configuration.output;this.configuration.hasModelTransformation&&(r(e.modelTransformation)?this.program.setUniformMatrix4fv("model",e.modelTransformation):po.warnOnce("hasModelTransformation true, but no modelTransformation found.")),(this.configuration.output===se.Depth||t.multipassTerrainEnabled||i===se.Shadow)&&this.program.setUniform2fv("nearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),ye(this.program,t)),i===se.Alpha&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",$e[e.colorMixMode])),i===se.Color?(t.lighting.setUniforms(this.program,!1,t.hasFillLights),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",$e[e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&Ct(this.program,e,this.configuration.isSchematic)):i===se.Highlight&&Me(this.program,t),Tt(this.program,e),Mt(this.program,e,t),je(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),e.textureAlphaMode!==re.Mask&&e.textureAlphaMode!==re.MaskBlend||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),null==(o=t.shadowMap)||o.bind(this.program),null==(a=t.ssaoHelper)||a.bind(this.program,t.camera)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?m(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;we(this.program,t,e.camera.viewMatrix),this.program.rebindTextures(),(this.configuration.output===se.Color||this.configuration.output===se.Alpha||this.configuration.output===se.Depth&&this.configuration.screenSizePerspective||this.configuration.output===se.Normal&&this.configuration.screenSizePerspective||this.configuration.output===se.Highlight&&this.configuration.screenSizePerspective)&&Oe(this.program,t,e.camera.viewInverseTransposeMatrix),this.configuration.output===se.Normal&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&function(e,t){lt(t,Ft,Bt,3),e.setUniform3fv("viewOriginHi",Ft),e.setUniform3fv("viewOriginLo",Bt)}(this.program,t),Ae(this.program,this.configuration,e.slicePlane,{origin:t}),this.configuration.output===se.Color&&Ot(this.program,e,t)}_convertDepthTestFunction(e){return e===ne.Lequal?Pt.LEQUAL:Pt.LESS}_setPipeline(e,t){const o=this.configuration,r=e===ie.NONE,a=e===ie.FrontFace;return Qe({blending:o.output!==se.Color&&o.output!==se.Alpha||!o.transparent?null:r?Ye:Xe(e),culling:ho(o)&&Ke(o.cullFace),depthTest:{func:Je(e,this._convertDepthTestFunction(o.customDepthTest))},depthWrite:r||a?o.writeDepth&&Ze:null,colorWrite:et,stencilWrite:o.sceneHasOcludees?Se:null,stencilTest:o.sceneHasOcludees?t?Pe:Ee:null,polygonOffset:r||a?null:tt(o.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipeline(this.configuration.transparencyPassType,!0),this._setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function ho(e){return e.cullFace?e.cullFace!==ae.None:!e.slicePlaneEnabled&&(!e.transparent&&!e.doubleSidedMode)}vo.shader=new xe(mo,(()=>Promise.resolve().then((()=>mo))));class fo extends ge{constructor(){super(...arguments),this.output=se.Color,this.alphaDiscardMode=re.Opaque,this.doubleSidedMode=Nt.None,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=ae.None,this.transparencyPassType=ie.NONE,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1,this.hasModelTransformation=!1,this.customDepthTest=ne.Less}}st([fe({count:se.COUNT})],fo.prototype,"output",void 0),st([fe({count:re.COUNT})],fo.prototype,"alphaDiscardMode",void 0),st([fe({count:Nt.COUNT})],fo.prototype,"doubleSidedMode",void 0),st([fe()],fo.prototype,"isSchematic",void 0),st([fe()],fo.prototype,"vertexColors",void 0),st([fe()],fo.prototype,"offsetBackfaces",void 0),st([fe()],fo.prototype,"symbolColors",void 0),st([fe()],fo.prototype,"vvSize",void 0),st([fe()],fo.prototype,"vvColor",void 0),st([fe()],fo.prototype,"verticalOffset",void 0),st([fe()],fo.prototype,"receiveShadows",void 0),st([fe()],fo.prototype,"slicePlaneEnabled",void 0),st([fe()],fo.prototype,"sliceHighlightDisabled",void 0),st([fe()],fo.prototype,"receiveAmbientOcclusion",void 0),st([fe()],fo.prototype,"screenSizePerspective",void 0),st([fe()],fo.prototype,"textureAlphaPremultiplied",void 0),st([fe()],fo.prototype,"hasColorTexture",void 0),st([fe()],fo.prototype,"usePBR",void 0),st([fe()],fo.prototype,"hasMetalnessAndRoughnessTexture",void 0),st([fe()],fo.prototype,"hasEmissionTexture",void 0),st([fe()],fo.prototype,"hasOcclusionTexture",void 0),st([fe()],fo.prototype,"hasNormalTexture",void 0),st([fe()],fo.prototype,"instanced",void 0),st([fe()],fo.prototype,"instancedColor",void 0),st([fe()],fo.prototype,"instancedDoublePrecision",void 0),st([fe()],fo.prototype,"vertexTangents",void 0),st([fe()],fo.prototype,"normalsTypeDerivate",void 0),st([fe()],fo.prototype,"writeDepth",void 0),st([fe()],fo.prototype,"sceneHasOcludees",void 0),st([fe()],fo.prototype,"transparent",void 0),st([fe()],fo.prototype,"enableOffset",void 0),st([fe({count:ae.COUNT})],fo.prototype,"cullFace",void 0),st([fe({count:ie.COUNT})],fo.prototype,"transparencyPassType",void 0),st([fe()],fo.prototype,"multipassTerrainEnabled",void 0),st([fe()],fo.prototype,"cullAboveGround",void 0),st([fe()],fo.prototype,"hasModelTransformation",void 0),st([fe({count:ne.COUNT})],fo.prototype,"customDepthTest",void 0);const go=Object.freeze({__proto__:null,build:function(e){const t=new ze,o=t.vertex.code,r=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraPosition","vec3").add("localOrigin","vec3"),t.include(jt),t.varyings.add("vpos","vec3"),t.include(ct,e),t.include(_t,e),t.include(yt,e),e.output!==se.Color&&e.output!==se.Alpha||(t.include(Vt,e),t.include(le,{linearDepth:!1}),e.offsetBackfaces&&t.include($t),e.instancedColor&&t.attributes.add(it.INSTANCECOLOR,"vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.include(dt,e),t.include(xt,e),t.include(Kt,e),t.include(At,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),o.add(Be`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${Be.float(ve)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.multipassTerrainEnabled?Be`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===se.Alpha&&(t.include(ce,e),t.include(ue,e),e.multipassTerrainEnabled&&(t.fragment.include(Ve),t.include(he,e)),t.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(uo),r.add(Be`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?Be`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?Be`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:Be`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?Be`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Be`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===se.Color&&(t.include(ce,e),t.include(lo,e),t.include(so,e),t.include(ue,e),e.receiveShadows&&t.include(wt,e),e.multipassTerrainEnabled&&(t.fragment.include(Ve),t.include(he,e)),t.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(bt,e),t.include(ht,e),t.fragment.include(uo),r.add(Be`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?Be`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?Be`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:Be`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===vt.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.viewingMode===Ie.Global?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?Be`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Be`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${Be`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${e.pbrMode===vt.Normal||e.pbrMode===vt.Schematic?e.viewingMode===Ie.Global?Be`vec3 normalGround = normalize(vpos + localOrigin);`:Be`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:Be``}
        ${e.pbrMode===vt.Normal||e.pbrMode===vt.Schematic?Be`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(io,e),t}});class xo extends vo{initializeProgram(e){const t=xo.shader.get(),o=this.configuration,r=t.build({oitEnabled:o.transparencyPassType===ie.Color,output:o.output,viewingMode:e.viewingMode,receiveShadows:o.receiveShadows,slicePlaneEnabled:o.slicePlaneEnabled,sliceHighlightDisabled:o.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:o.symbolColors,vvSize:o.vvSize,vvColor:o.vvColor,vvInstancingEnabled:!0,instanced:o.instanced,instancedColor:o.instancedColor,instancedDoublePrecision:o.instancedDoublePrecision,pbrMode:o.usePBR?vt.Normal:vt.Disabled,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:o.hasColorTexture,hasModelTransformation:!1,receiveAmbientOcclusion:o.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:Gt.Attribute,doubleSidedMode:Nt.WindingOrder,vertexTangents:!1,attributeTextureCoordinates:o.hasColorTexture?ut.Default:ut.None,textureAlphaPremultiplied:o.textureAlphaPremultiplied,attributeColor:o.vertexColors,screenSizePerspectiveEnabled:o.screenSizePerspective,verticalOffsetEnabled:o.verticalOffset,offsetBackfaces:o.offsetBackfaces,doublePrecisionRequiresObfuscation:It(e.rctx),alphaDiscardMode:o.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:o.multipassTerrainEnabled,cullAboveGround:o.cullAboveGround});return new Ce(e.rctx,r,We)}}xo.shader=new xe(go,(()=>Promise.resolve().then((()=>go))));class bo extends qe{constructor(e){super(e,To),this.supportsEdges=!0,this.techniqueConfig=new fo,this.vertexBufferLayout=function(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,o=_e().vec3f(it.POSITION).vec3f(it.NORMAL);e.vertexTangents&&o.vec4f(it.TANGENT);t&&o.vec2f(it.UV0);e.vertexColors&&o.vec4u8(it.COLOR);e.symbolColors&&o.vec4u8(it.SYMBOLCOLOR);return o}(this.parameters),this.instanceBufferLayout=e.instanced?Mo(this.parameters):null}isVisibleInPass(e){return e!==rt.MATERIAL_DEPTH_SHADOWMAP_ALL&&e!==rt.MATERIAL_DEPTH_SHADOWMAP_DEFAULT&&e!==rt.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,o=e.vertexColors,r=e.symbolColors,a=!!t&&t.indexOf("color")>-1,i=e.vvColorEnabled,n="replace"===e.colorMixMode,s=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return o&&(a||i||r)?!!n||s:o?n?l:s:a||i||r?!!n||s:n?l:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.vertexTangents=this.parameters.vertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.parameters.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.parameters.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.parameters.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.parameters.normals,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,r(this.parameters.customDepthTest)&&(this.techniqueConfig.customDepthTest=this.parameters.customDepthTest),this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.cullFace=this.parameters.slicePlaneEnabled?ae.None:this.parameters.cullFace,this.techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=t.cullAboveGround,this.techniqueConfig.hasModelTransformation=r(this.parameters.modelTransformation),e!==se.Color&&e!==se.Alpha||(this.techniqueConfig.vertexColors=this.parameters.vertexColors,this.techniqueConfig.symbolColors=this.parameters.symbolColors,this.parameters.treeRendering?this.techniqueConfig.doubleSidedMode=Nt.WindingOrder:this.techniqueConfig.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?Nt.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?Nt.WindingOrder:Nt.None,this.techniqueConfig.instancedColor=!!this.parameters.instanced&&this.parameters.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!t.ssaoEnabled&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.parameters.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.parameters.usePBR&&this.parameters.isSchematic,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<ot),this.techniqueConfig}intersect(e,t,o,r,a,i,n){if(null!==this.parameters.verticalOffset){const e=r.camera;p(Eo,o[12],o[13],o[14]);let t=null;switch(r.viewingMode){case Ie.Global:t=h(So,Eo);break;case Ie.Local:t=v(So,Ao)}let n=0;if(null!==this.parameters.verticalOffset){const o=f(Ro,Eo,e.eye),r=g(o),a=x(o,o,1/r);let i=null;this.parameters.screenSizePerspective&&(i=b(t,a)),n+=He(e,r,this.parameters.verticalOffset,i,this.parameters.screenSizePerspective)}x(t,t,n),C(Po,t,r.transform.inverseRotation),a=f(wo,a,Po),i=f(Oo,i,Po)}ke(e,t,r,a,i,nt(r.verticalOffset),n)}requiresSlot(e){return e===(this.parameters.transparent?this.parameters.writeDepth?at.TRANSPARENT_MATERIAL:at.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:at.OPAQUE_MATERIAL)||e===at.DRAPED_MATERIAL}createGLMaterial(e){return e.output===se.Color||e.output===se.Alpha||e.output===se.Depth||e.output===se.Normal||e.output===se.Shadow||e.output===se.Highlight?new Co(e):null}createBufferWriter(){return new yo(this.vertexBufferLayout,this.instanceBufferLayout)}}class Co extends Ge{constructor(e){super({...e,...e.material.parameters})}updateParameters(e){const t=this._material.parameters;return this.updateTexture(t.textureId),this.ensureTechnique(t.treeRendering?xo:vo,e)}_updateShadowState(e){e.shadowMappingEnabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:e.hasOccludees})}beginSlot(e){return this._output!==se.Color&&this._output!==se.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,t){t.bindPass(this._material.parameters,e),this.bindTextures(t.program)}}const To={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:ae.Back,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,fillLightsEnabled:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:s(),modelTransformation:null,transparent:!1,writeDepth:!0,customDepthTest:ne.Less,textureAlphaMode:re.Blend,textureAlphaCutoff:Re,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,...Ue};class yo{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(it.POSITION).length}write(e,t,o,r){De(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,o,r)}}function Mo(e){let t=_e();return t=e.instancedDoublePrecision?t.vec3f(it.MODELORIGINHI).vec3f(it.MODELORIGINLO).mat3f(it.MODEL).mat3f(it.MODELNORMAL):t.mat4f(it.MODEL).mat4f(it.MODELNORMAL),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f(it.INSTANCECOLOR)),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f(it.INSTANCEFEATUREATTRIBUTE)),t}const wo=c(),Oo=c(),Ao=m(0,0,1),So=c(),Po=c(),Eo=c(),Ro=c(),Do=Z.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function No(e,t){const o=await async function(e,t){const o=r(t)&&t.streamDataRequester;if(o)return async function(e,t,o){const r=await K(t.request(e,"json",o));if(!0===r.ok)return r.value;return ee(r.error),void Lo(r.error.details.url)}(e,o,t);const i=await K(X(e,a(t)));if(!0===i.ok)return i.value.data;return ee(i.error),void Lo(i.error)}(e,t),i=await async function(e,t){const o=[];for(const a in e){const i=e[a],n=i.images[0].data;if(!n){Do.warn("Externally referenced texture data is not yet supported");continue}const s=i.encoding+";base64,"+n,l="/textureDefinitions/"+a,d="rgba"===i.channels?i.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:Et.REPEAT,t:Et.REPEAT},preMultiplyAlpha:Fo(d)!==re.Opaque},u=r(t)&&t.disableTextures?Promise.resolve(null):oe(s,t);o.push(u.then((e=>({refId:l,image:e,params:c,alphaChannelUsage:d}))))}const a=await Promise.all(o),i={};for(const e of a)i[e.refId]=e;return i}(o.textureDefinitions,t);return{resource:o,textures:i}}function Lo(e){throw new J("",`Request for object resource failed: ${e}`)}function Io(e){const t=e.params,o=t.topology;let r=!0;switch(t.vertexAttributes||(Do.warn("Geometry must specify vertex attributes"),r=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const o in t.vertexAttributes){const t=e[o];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(Do.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),r=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(Do.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),r=!1)):(Do.warn(`Indexed geometry does not specify face indices for '${o}' attribute`),r=!1)}}else Do.warn("Indexed geometries must specify faces"),r=!1;break}default:Do.warn(`Unsupported topology '${o}'`),r=!1}e.params.material||(Do.warn("Geometry requires material"),r=!1);const a=e.params.vertexAttributes;for(const e in a){a[e].values||(Do.warn("Geometries with externally defined attributes are not yet supported"),r=!1)}return r}function _o(e){const t=O();return e.forEach((e=>{const o=e.boundingInfo;r(o)&&(A(t,o.getBBMin()),A(t,o.getBBMax()))})),t}function Fo(e){switch(e){case"mask":return re.Mask;case"maskAndTransparency":return re.MaskBlend;case"none":return re.Opaque;default:return re.Blend}}function Bo(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const zo=new te(1,2,"wosr");async function Vo(t,a){const n=Go(e(t));if("wosr"===n.fileType){const e=await(a.cache?a.cache.loadWOSR(n.url,a):No(n.url,a)),t=function(e,t){const o=[],a=[],i=[],n=[],s=e.resource,l=te.parse(s.version||"1.0","wosr");zo.validate(l);const d=s.model.name,c=s.model.geometries,u=s.materialDefinitions,m=e.textures;let p=0;const v=new Map;for(let e=0;e<c.length;e++){const s=c[e];if(!Io(s))continue;const l=Bo(s),d=s.params.vertexAttributes,h=[];for(const e in d){const t=d[e],o=t.values;h.push([e,{data:o,size:t.valuesPerElement,exclusive:!0}])}const f=[];if("PerAttributeArray"!==s.params.topology){const e=s.params.faces;for(const t in e)f.push([t,new Uint32Array(e[t].values)])}const g=m&&m[l.texture];if(g&&!v.has(l.texture)){const{image:e,params:t}=g,o=new Le(e,t);n.push(o),v.set(l.texture,o)}const x=v.get(l.texture),b=x?x.id:void 0;let C=i[l.material]?i[l.material][l.texture]:null;if(!C){const e=u[l.material.substring(l.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const o=g&&g.alphaChannelUsage,a=e.transparency>0||"transparency"===o||"maskAndTransparency"===o,n=g?Fo(g.alphaChannelUsage):void 0,s={ambient:T(e.diffuse),diffuse:T(e.diffuse),opacity:1-(e.transparency||0),transparent:a,textureAlphaMode:n,textureAlphaCutoff:.33,textureId:b,initTextureTransparent:!0,doubleSided:!0,cullFace:ae.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!g&&!!g.params.preMultiplyAlpha};r(t)&&t.materialParamsMixin&&Object.assign(s,t.materialParamsMixin),C=new bo(s),i[l.material]||(i[l.material]={}),i[l.material][l.texture]=C}a.push(C);const y=new Ne(h,f);p+=f.position?f.position.length:0,o.push(y)}return{name:d,stageResources:{textures:n,materials:a,geometries:o},pivotOffset:s.model.pivotOffset,boundingBox:_o(o),numberOfVertices:p,lodThreshold:null}}(e,a);return{lods:[t],referenceBoundingBox:t.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const s=await(a.cache?a.cache.loadGLTF(n.url,a,a.usePBR):z(new V(a.streamDataRequester),n.url,a,a.usePBR)),u=i(s.model.meta,"ESRI_proxyEllipsoid");s.meta.isEsriSymbolResource&&r(u)&&-1!==s.meta.uri.indexOf("/RealisticTrees/")&&function(e,t){for(let r=0;r<e.model.lods.length;++r){const a=e.model.lods[r];e.customMeta.esriTreeRendering=!0;for(const i of a.parts){const a=i.attributes.normal;if(o(a))return;const n=i.attributes.position,s=n.count,u=c(),m=c(),p=c(),v=W(R,s),x=W(S,s),b=l(d(),i.transform);for(let o=0;o<s;o++){n.getVec(o,m),a.getVec(o,u),y(m,m,i.transform),f(p,m,t.center),M(p,p,t.radius);const s=p[2],l=g(p),d=Math.min(.45+.55*l*l,1);M(p,p,t.radius),y(p,p,b),h(p,p),r+1!==e.model.lods.length&&e.model.lods.length>1&&w(p,p,u,s>-1?.2:Math.min(-4*s-3.8,1)),x.setVec(o,p),v.set(o,0,255*d),v.set(o,1,255*d),v.set(o,2,255*d),v.set(o,3,255)}i.attributes.normal=x,i.attributes.color=v}}}(s,u);const m=s.meta.isEsriSymbolResource?{usePBR:a.usePBR,isSchematic:!1,treeRendering:s.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:a.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},p={...a.materialParamsMixin,treeRendering:s.customMeta.esriTreeRendering};if(null!=n.specifiedLodIndex){const e=Wo(s,m,p,n.specifiedLodIndex);let t=e[0].boundingBox;if(0!==n.specifiedLodIndex){t=Wo(s,m,p,0)[0].boundingBox}return{lods:e,referenceBoundingBox:t,isEsriSymbolResource:s.meta.isEsriSymbolResource,isWosr:!1,remove:s.remove}}const v=Wo(s,m,p);return{lods:v,referenceBoundingBox:v[0].boundingBox,isEsriSymbolResource:s.meta.isEsriSymbolResource,isWosr:!1,remove:s.remove}}function Go(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);if(t)return{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null};return e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function Wo(e,t,o,a){const i=e.model,l=s(),d=new Array,c=new Map,u=new Map;return i.lods.forEach(((e,s)=>{if(void 0!==a&&s!==a)return;const m={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:r(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:O()};d.push(m),e.parts.forEach((e=>{const a=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),s=i.materials.get(e.material),d=r(e.attributes.texCoord0),p=r(e.attributes.normal),v=function(e){switch(e){case"BLEND":return re.Blend;case"MASK":return re.Mask;case"OPAQUE":case null:case void 0:return re.Opaque}}(s.alphaMode);if(!c.has(a)){if(d){if(r(s.textureColor)&&!u.has(s.textureColor)){const e=i.textures.get(s.textureColor),t={...e.parameters,preMultiplyAlpha:v!==re.Opaque};u.set(s.textureColor,new Le(e.data,t))}if(r(s.textureNormal)&&!u.has(s.textureNormal)){const e=i.textures.get(s.textureNormal);u.set(s.textureNormal,new Le(e.data,e.parameters))}if(r(s.textureOcclusion)&&!u.has(s.textureOcclusion)){const e=i.textures.get(s.textureOcclusion);u.set(s.textureOcclusion,new Le(e.data,e.parameters))}if(r(s.textureEmissive)&&!u.has(s.textureEmissive)){const e=i.textures.get(s.textureEmissive);u.set(s.textureEmissive,new Le(e.data,e.parameters))}if(r(s.textureMetallicRoughness)&&!u.has(s.textureMetallicRoughness)){const e=i.textures.get(s.textureMetallicRoughness);u.set(s.textureMetallicRoughness,new Le(e.data,e.parameters))}}const n=s.color[0]**(1/G),l=s.color[1]**(1/G),m=s.color[2]**(1/G),h=s.emissiveFactor[0]**(1/G),f=s.emissiveFactor[1]**(1/G),g=s.emissiveFactor[2]**(1/G),x=r(s.textureColor)&&d?u.get(s.textureColor):null;c.set(a,new bo({...t,transparent:v===re.Blend,customDepthTest:ne.Lequal,textureAlphaMode:v,textureAlphaCutoff:s.alphaCutoff,diffuse:[n,l,m],ambient:[n,l,m],opacity:s.opacity,doubleSided:s.doubleSided,doubleSidedType:"winding-order",cullFace:s.doubleSided?ae.None:ae.Back,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:p?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,fillLightsEnabled:!0,textureId:r(x)?x.id:void 0,colorMixMode:s.colorMixMode,normalTextureId:r(s.textureNormal)&&d?u.get(s.textureNormal).id:void 0,textureAlphaPremultiplied:r(x)&&!!x.params.preMultiplyAlpha,occlusionTextureId:r(s.textureOcclusion)&&d?u.get(s.textureOcclusion).id:void 0,emissiveTextureId:r(s.textureEmissive)&&d?u.get(s.textureEmissive).id:void 0,metallicRoughnessTextureId:r(s.textureMetallicRoughness)&&d?u.get(s.textureMetallicRoughness).id:void 0,emissiveFactor:[h,f,g],mrrFactors:[s.metallicFactor,s.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...o}))}const h=function(e,t){switch(t){case Rt.TRIANGLES:return Y(e);case Rt.TRIANGLE_STRIP:return Q(e);case Rt.TRIANGLE_FAN:return k(e)}}(e.indices||e.attributes.position.count,e.primitiveType),f=e.attributes.position.count,g=W(S,f);I(g,e.attributes.position,e.transform);const x=[[it.POSITION,{data:g.typedBuffer,size:g.elementCount,exclusive:!0}]],b=[[it.POSITION,h]];if(r(e.attributes.normal)){const t=W(S,f);n(l,e.transform),_(t,e.attributes.normal,l),x.push([it.NORMAL,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),b.push([it.NORMAL,h])}if(r(e.attributes.tangent)){const t=W(P,f);n(l,e.transform),$(t,e.attributes.tangent,l),x.push([it.TANGENT,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),b.push([it.TANGENT,h])}if(r(e.attributes.texCoord0)){const t=W(E,f);j(t,e.attributes.texCoord0),x.push([it.UV0,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),b.push([it.UV0,h])}if(r(e.attributes.color)){const t=W(R,f);if(4===e.attributes.color.elementCount)e.attributes.color instanceof P?U(t,e.attributes.color,255):e.attributes.color instanceof R?q(t,e.attributes.color):e.attributes.color instanceof D&&U(t,e.attributes.color,1/256);else{H(t,255,255,255,255);const o=new N(t.buffer,0,4);e.attributes.color instanceof S?F(o,e.attributes.color,255):e.attributes.color instanceof N?B(o,e.attributes.color):e.attributes.color instanceof L&&F(o,e.attributes.color,1/256)}x.push([it.COLOR,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),b.push([it.COLOR,h])}const C=new Ne(x,b);m.stageResources.geometries.push(C),m.stageResources.materials.push(c.get(a)),d&&(r(s.textureColor)&&m.stageResources.textures.push(u.get(s.textureColor)),r(s.textureNormal)&&m.stageResources.textures.push(u.get(s.textureNormal)),r(s.textureOcclusion)&&m.stageResources.textures.push(u.get(s.textureOcclusion)),r(s.textureEmissive)&&m.stageResources.textures.push(u.get(s.textureEmissive)),r(s.textureMetallicRoughness)&&m.stageResources.textures.push(u.get(s.textureMetallicRoughness))),m.numberOfVertices+=f;const T=C.boundingInfo;r(T)&&(A(m.boundingBox,T.getBBMin()),A(m.boundingBox,T.getBBMax()))}))})),d}const $o=Object.freeze({__proto__:null,fetch:Vo,parseUrl:Go,gltfToEngineResources:Wo});export{no as C,Xt as D,lo as E,co as H,uo as M,Nt as N,jt as P,Jt as V,Gt as a,ro as b,eo as c,oo as d,to as e,It as f,Zt as g,Wt as h,qt as i,Lt as j,bo as k,No as l,Mo as m,Vo as n,so as o,Ut as p,Dt as q,ao as r,$o as s};
