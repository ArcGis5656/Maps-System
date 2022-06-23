/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{s as e,v as t,n as r,h as i,e as o,j as a,l as s,u as n,E as l,d as c,c as d,f as p,b as u,q as f}from"./mathUtils.js";import{i as v}from"../core/lang.js";import{b as m}from"./screenUtils.js";import{f as h}from"./mat3.js";import{b as g}from"./quatf64.js";import{g as x}from"./mat4.js";import{c as b,I as O}from"./mat4f64.js";import{c as S}from"./vec2.js";import{a as P,f as C}from"./vec2f64.js";import{b as y}from"./aaBoundingRect.js";import{n as w}from"./InterleavedLayout.js";import{f as A,d as z,C as D,s as T,r as E,k as j,p as U,c as M,R as _,S as F,P as V,b as R,U as H,g as I,l as G,a as L,h as B,i as N,j as q,V as $,X,W}from"./glUtil3D.js";import{S as k,b as Z,a as Q}from"./VerticalOffset.glsl.js";import{g as Y,R as J,a as K,S as ee}from"./ShaderBuilder.js";import{V as te}from"./VertexAttribute.js";import{a as re}from"./geometryDataUtils.js";import{G as ie}from"./GLMaterialTexture.js";import{D as oe,M as ae,o as se,d as ne,p as le,v as ce,a as de}from"./Material.js";import{R as pe}from"./RenderSlot.js";import{a as ue}from"./Util.js";import{i as fe}from"./utils2.js";import{Z as ve}from"./vec4f64.js";import{p as me}from"./floatRGBA.js";import{T as he}from"./Texture2.js";import{f as ge,B as xe,C as be,P as Oe}from"./enums.js";import{i as Se,k as Pe}from"./VisualVariables.glsl.js";import{_ as Ce}from"./tslib.es6.js";import{T as ye}from"./basicInterfaces.js";import{i as we,a as Ae,m as ze,o as De,d as Te}from"./OrderIndependentTransparency.js";import{projectPointToVector as Ee}from"../geometry/projection.js";import{v as je}from"./aaBoundingBox.js";import{g as Ue,a as Me}from"../geometry/Polygon.js";import{m as _e}from"./dehydratedFeatures.js";import{_ as Fe,ab as Ve}from"./lineUtils.js";import{O as Re,a as He}from"./DefaultBufferWriter.js";function Ie(e){const t=Y`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`,r=Y`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`;e.vertex.code.add(t),e.vertex.code.add(r),e.fragment.code.add(t),e.fragment.code.add(r)}function Ge(e){return function(e){return e instanceof Float32Array&&e.length>=16}(e)||function(e){return Array.isArray(e)&&e.length>=16}(e)}var Le,Be;function Ne(e,t){const r=e;r.include(k),r.attributes.add(te.POSITION,"vec3"),r.attributes.add(te.NORMAL,"vec3"),r.attributes.add(te.AUXPOS1,"vec4"),r.vertex.uniforms.add("proj","mat4"),r.vertex.uniforms.add("view","mat4"),r.vertex.uniforms.add("viewNormal","mat4"),r.vertex.uniforms.add("viewport","vec4"),r.vertex.uniforms.add("cameraPosition","vec3"),r.vertex.uniforms.add("polygonOffset","float"),r.vertex.uniforms.add("cameraGroundRelative","float"),r.vertex.uniforms.add("pixelRatio","float"),r.vertex.uniforms.add("perDistancePixelRatio","float"),r.vertex.uniforms.add("renderTransparentlyOccludedHUD","float"),t.verticalOffsetEnabled&&r.vertex.uniforms.add("verticalOffset","vec4"),t.screenSizePerspectiveEnabled&&r.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4"),r.vertex.uniforms.add("hudVisibilityTexture","sampler2D"),r.vertex.constants.add("smallOffsetAngle","float",.984807753012208),r.vertex.code.add(Y`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),r.vertex.code.add(Y`float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
float pointGroundSign = sign(pointGroundDistance);
if (pointGroundSign == 0.0) {
pointGroundSign = cameraGroundRelative;
}
float groundRelative = cameraGroundRelative * pointGroundSign;
if (polygonOffset > .0) {
float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
float factor = (1.0 - tanAlpha / viewport[2]);
if (groundRelative > 0.0) {
posView *= factor;
}
else {
posView /= factor;
}
}
return groundRelative;
}`),t.isDraped||r.vertex.code.add(Y`void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
float distanceToCamera = length(posView);
float pixelOffset = distanceToCamera * perDistancePixelRatio * 0.5;
vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;
vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
posModel += modelOffset;
posView += viewOffset;
}`),r.vertex.code.add(Y`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      // centerOffset is in view space and is used to implement world size offsetting
      // of labels with respect to objects. It also pulls the label towards the viewer
      // so that the label is visible in front of the object.
      vec3 centerOffset = auxpos1.xyz;

      // The pointGroundDistance is the distance of the geometry to the ground and is
      // negative if the point is below the ground, or positive if the point is above
      // ground.
      float pointGroundDistance = auxpos1.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${t.isDraped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${t.screenSizePerspectiveEnabled&&(t.verticalOffsetEnabled||t.screenCenterOffsetUnitsEnabled===Be.Screen)?"vec4 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${t.verticalOffsetEnabled?t.screenSizePerspectiveEnabled?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${t.verticalOffsetEnabled?Y`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${t.screenCenterOffsetUnitsEnabled!==Be.Screen?Y`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `:""}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${t.screenCenterOffsetUnitsEnabled===Be.Screen?t.screenSizePerspectiveEnabled?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${t.screenCenterOffsetUnitsEnabled===Be.Screen?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `),r.vertex.code.add(Y`bool testVisibilityHUD(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture2D(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}function qe(e,t){e.setUniform1f("renderTransparentlyOccludedHUD",t.renderTransparentlyOccludedHUD===Le.OCCLUDED?1:t.renderTransparentlyOccludedHUD===Le.NOTOCCLUDED?0:.75)}!function(e){e[e.OCCLUDED=0]="OCCLUDED",e[e.NOTOCCLUDED=1]="NOTOCCLUDED",e[e.BOTH=2]="BOTH",e[e.COUNT=3]="COUNT"}(Le||(Le={})),function(e){e[e.World=0]="World",e[e.Screen=1]="Screen",e[e.COUNT=2]="COUNT"}(Be||(Be={}));const $e=128,Xe=.5;function We(e,t=128,r=.5*t,i=0){const o=function(e,t=128,r=.5*t,i=0){switch(e){case"circle":default:return ke(t,r);case"square":return function(e,t){return Ze(e,t,!1)}(t,r);case"cross":return function(e,t,r=0){return Qe(e,t,!1,r)}(t,r,i);case"x":return function(e,t,r=0){return Qe(e,t,!0,r)}(t,r,i);case"kite":return function(e,t){return Ze(e,t,!0)}(t,r);case"triangle":return function(e,t){return Ke(e,Je(e/2,t,t/2))}(t,r);case"arrow":return function(e,t){const r=t,i=t/2,o=e/2,a=.8*r,s=(e-t)/2-a,n=Math.sqrt(a*a+i*i),l=Ye(o,s,n),c=Je(o,r,i);return Ke(e,((e,t)=>Math.max(c(e,t),-l(e,t))))}(t,r)}}(e,t,r,i);return new he(o,{mipmap:!1,wrap:{s:ge.CLAMP_TO_EDGE,t:ge.CLAMP_TO_EDGE},width:t,height:t,components:4,noUnpackFlip:!0})}function ke(e,t){const r=e/2-.5;return Ke(e,Ye(r,r,t/2))}function Ze(e,t,r){return r&&(t/=Math.SQRT2),Ke(e,((i,o)=>{let a=i-.5*e+.25,s=.5*e-o-.75;if(r){const e=(a+s)/Math.SQRT2;s=(s-a)/Math.SQRT2,a=e}return Math.max(Math.abs(a),Math.abs(s))-.5*t}))}function Qe(e,t,r,i=0){t-=i,r&&(t*=Math.SQRT2);const o=.5*t;return Ke(e,((t,a)=>{let s,n=t-.5*e,l=.5*e-a-1;if(r){const e=(n+l)/Math.SQRT2;l=(l-n)/Math.SQRT2,n=e}return n=Math.abs(n),l=Math.abs(l),s=n>l?n>o?Math.sqrt((n-o)*(n-o)+l*l):l:l>o?Math.sqrt(n*n+(l-o)*(l-o)):n,s-=i/2,s}))}function Ye(e,t,r){return(i,o)=>{const a=i-e,s=o-t;return Math.sqrt(a*a+s*s)-r}}function Je(e,t,r){const i=Math.sqrt(t*t+r*r);return(o,a)=>{const s=Math.abs(o-e)-r,n=a-e+t/2+.75,l=(t*s+r*n)/i,c=-n;return Math.max(l,c)}}function Ke(e,t){const r=new Uint8Array(4*e*e);for(let i=0;i<e;i++)for(let o=0;o<e;o++){const a=o+e*i;let s=t(o,i);s=s/e+.5,me(s,r,4*a)}return r}function et(e){e.include(J),e.uniforms.add("geometryDepthTexture","sampler2D"),e.uniforms.add("nearFar","vec2"),e.code.add(Y`bool geometryDepthTest(vec2 pos, float elementDepth) {
float geometryDepth = linearDepthFromTexture(geometryDepthTexture, pos, nearFar);
return (elementDepth < (geometryDepth - 1.0));
}`)}function tt(e,t){t.multipassGeometryEnabled&&t.geometryLinearDepthTexture&&e.bindTexture(t.geometryLinearDepthTexture,"geometryDepthTexture")}function rt(e,t){t.multipassGeometryEnabled&&e.vertex.include(et),t.multipassTerrainEnabled&&e.varyings.add("depth","float"),e.vertex.code.add(Y`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel
      // filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${t.multipassGeometryEnabled?Y`
        // Don't draw vertices behind geometry
        if(geometryDepthTest(.5 + .5 * posProjCenter.xy / posProjCenter.w, projectAux.posView.z)){
          posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
        }`:""}

      ${t.multipassTerrainEnabled?"depth = projectAux.posView.z;":""}
      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }

    } else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  }
  `),t.multipassTerrainEnabled&&e.fragment.include(J),e.fragment.uniforms.add("terrainDepthTexture","sampler2D"),e.fragment.uniforms.add("nearFar","vec2"),e.fragment.uniforms.add("inverseViewport","vec2"),e.fragment.include(K),e.fragment.code.add(Y`
  void main() {
    gl_FragColor = vec4(1, 1, 1, 1);
    ${t.multipassTerrainEnabled?Y`

          vec2 uv = gl_FragCoord.xy * inverseViewport;

          //Read the rgba data from the texture linear depth
          vec4 terrainDepthData = texture2D(terrainDepthTexture, uv);

          float terrainDepth = linearDepthFromFloat(rgba2float(terrainDepthData), nearFar);

          //If HUD vertex is behind terrain and the terrain depth is not the initialize value (e.g. we are not looking at the sky)
          //Mark the HUD vertex as occluded by transparent terrain
          if(depth < terrainDepth && terrainDepthData != vec4(0,0,0,1)){
            gl_FragColor.g = 0.5;
          }`:""}
  }
  `)}function it(e,t,r){e.setUniform4fv("materialColor",t.color),t.textureIsSignedDistanceField&&(t.outlineColor[3]<=0||t.outlineSize<=0?(e.setUniform4fv("outlineColor",ve),e.setUniform1f("outlineSize",0)):(e.setUniform4fv("outlineColor",t.outlineColor),e.setUniform1f("outlineSize",t.outlineSize))),e.setUniform2f("screenOffset",2*t.screenOffset[0]*r,2*t.screenOffset[1]*r),e.setUniform2fv("anchorPos",ot(t))}function ot(e,t=at){var r,i,o;return e.textureIsSignedDistanceField?(r=e.anchorPos,i=e.distanceFieldBoundingBox,(o=t)[0]=r[0]*(i[2]-i[0])+i[0],o[1]=r[1]*(i[3]-i[1])+i[1]):S(t,e.anchorPos),t}const at=P(),st=Object.freeze({__proto__:null,build:function(e){const t=new ee,r=e.signedDistanceFieldEnabled;if(t.include(Ie),t.include(Ne,e),t.include(A,e),e.output===z.Occlusion)return t.include(rt,e),t;t.include(k),t.fragment.include(K),t.fragment.include(D),t.include(Se,e),t.varyings.add("vcolor","vec4"),t.varyings.add("vtc","vec2"),t.varyings.add("vsize","vec2"),e.binaryHighlightOcclusionEnabled&&t.varyings.add("voccluded","float"),t.vertex.uniforms.add("screenOffset","vec2").add("anchorPos","vec2").add("textureCoordinateScaleFactor","vec2").add("materialColor","vec4"),r&&t.vertex.uniforms.add("outlineColor","vec4"),e.screenSizePerspectiveEnabled&&t.vertex.uniforms.add("screenSizePerspective","vec4"),(e.debugDrawLabelBorder||e.binaryHighlightOcclusionEnabled)&&t.varyings.add("debugBorderCoords","vec4"),t.attributes.add(te.UV0,"vec2"),t.attributes.add(te.COLOR,"vec4"),t.attributes.add(te.SIZE,"vec2"),t.attributes.add(te.AUXPOS2,"vec4"),t.vertex.code.add(Y`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }
      vec2 inputSize;
      ${e.screenSizePerspectiveEnabled?Y`
      inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
      vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
         `:Y`
      inputSize = size;
      vec2 screenOffsetScaled = screenOffset;`}

      ${e.vvSize?"inputSize *= vvScale(auxpos2).xx;":""}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);

      ${e.occlusionTestEnabled||e.binaryHighlightOcclusionEnabled?"bool visible = testVisibilityHUD(posProj);":""}

      ${e.binaryHighlightOcclusionEnabled?"voccluded = visible ? 0.0 : 1.0;":""}
    `);const i=Y`vec2 uv01 = floor(uv0);
vec2 uv = uv0 - uv01;
quadOffset.xy = ((uv01 - anchorPos) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;`,o=e.pixelSnappingEnabled?r?Y`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:Y`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:Y`posProj += quadOffset;`;t.vertex.code.add(Y`
      ${e.occlusionTestEnabled?"if (visible) {":""}
      ${i}
      ${e.vvColor?"vcolor = vvGetColor(auxpos2, vvColorValues, vvColorColors) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

      bool alphaDiscard = vcolor.a < ${Y.float(T)};
      ${r?`alphaDiscard = alphaDiscard && outlineColor.a < ${Y.float(T)};`:""}
      if (alphaDiscard) {
        // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      } else {
        ${o}
        gl_Position = posProj;
      }

      vtc = uv * textureCoordinateScaleFactor;

      ${e.debugDrawLabelBorder?"debugBorderCoords = vec4(uv01, 1.5 / combinedSize);":""}
      vsize = inputSize;
      ${e.occlusionTestEnabled?Y`} else { vtc = vec2(0.0);
        ${e.debugDrawLabelBorder?"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);}":"}"}`:""}
    }
    `),t.fragment.uniforms.add("tex","sampler2D"),r&&(t.fragment.uniforms.add("outlineColor","vec4"),t.fragment.uniforms.add("outlineSize","float"));const a=e.debugDrawLabelBorder?Y`(isBorder > 0.0 ? 0.0 : ${Y.float(E)})`:Y.float(E),s=Y`
    ${e.debugDrawLabelBorder?Y`
      float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`:""}

    ${r?Y`
      vec4 fillPixelColor = vcolor;

      // Attempt to sample texel centers to avoid that thin cross outlines
      // disappear with large symbol sizes.
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
      const float txSize = ${Y.float(128)};
      const float texelSize = 1.0 / txSize;
      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgba2float(texture2D(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${a} ||
          fillPixelColor.a + outlinePixelColor.a < ${Y.float(T)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        gl_FragColor = vec4(compositeColor, compositeAlpha);
      } else {
        if (fillAlphaFactor < ${a}) {
          discard;
        }

        gl_FragColor = premultiplyAlpha(fillPixelColor);
      }

      // visualize SDF:
      // gl_FragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:Y`
          vec4 texColor = texture2D(tex, vtc, -0.5);
          if (texColor.a < ${a}) {
            discard;
          }
          gl_FragColor = texColor * premultiplyAlpha(vcolor);
          `}

    // Draw debug border with transparency, so that original texels along border are still partially visible
    ${e.debugDrawLabelBorder?Y`gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`:""}
  `;return e.output===z.Alpha&&t.fragment.code.add(Y`
      void main() {
        ${s}
        gl_FragColor = vec4(gl_FragColor.a);
      }
      `),e.output===z.Color&&t.fragment.code.add(Y`
    void main() {
      ${s}
      ${e.frontFacePass?"gl_FragColor.rgb /= gl_FragColor.a;":""}
    }
    `),e.output===z.Highlight&&(t.include(j),t.fragment.code.add(Y`
    void main() {
      ${s}
      ${e.binaryHighlightOcclusionEnabled?Y`
          if (voccluded == 1.0) {
            gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
          } else {
            gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
          }`:"outputHighlight();"}
    }
    `)),t},bindHUDMaterialUniforms:it,calculateAnchorPosForRendering:ot});class nt extends F{initializeProgram(e){const t=nt.shader.get(),r=this.configuration,i=t.build({output:r.output,frontFacePass:r.transparencyPassType===ye.FrontFace,viewingMode:e.viewingMode,occlusionTestEnabled:r.occlusionTestEnabled,signedDistanceFieldEnabled:r.sdf,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!0,debugDrawLabelBorder:r.debugDrawLabelBorder,binaryHighlightOcclusionEnabled:r.binaryHighlightOcclusion,screenCenterOffsetUnitsEnabled:r.screenCenterOffsetUnitsEnabled,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,pixelSnappingEnabled:r.pixelSnappingEnabled,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!1,isDraped:r.isDraped,multipassGeometryEnabled:r.multipassGeometryEnabled,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new V(e.rctx,i,oe)}bindPass(e,t){R(this.program,t.camera.projectionMatrix),this.program.setUniform1f("cameraGroundRelative",t.camera.aboveGround?1:-1),this.program.setUniform1f("perDistancePixelRatio",Math.tan(t.camera.fovY/2)/(t.camera.fullViewport[2]/2)),this.program.setUniformMatrix4fv("viewNormal",t.camera.viewInverseTransposeMatrix),this.program.setUniform1f("polygonOffset",e.shaderPolygonOffset),Z(this.program,e,t),Q(this.program,e),this.program.setUniform1f("pixelRatio",t.camera.pixelRatio||1),H(this.program,t),this.configuration.output===z.Occlusion?(this.program.setUniform2fv("nearFar",t.camera.nearFar),this.program.setUniform2fv("inverseViewport",t.inverseViewport),tt(this.program,t),I(this.program,t)):(qe(this.program,t),it(this.program,e,t.camera.pixelRatio||1),Pe(this.program,e),this.configuration.occlusionTestEnabled&&this.program.bindTexture(t.hudVisibilityTexture,"hudVisibilityTexture")),this.configuration.output===z.Highlight&&G(this.program,t)}bindDraw(e){L(this.program,e),B(this.program,e.origin,e.camera.viewInverseTransposeMatrix),N(this.program,this.configuration,e),this.program.rebindTextures()}_setPipelineState(e){const t=this.configuration,r=e===ye.NONE,i=e===ye.FrontFace,o=be.LEQUAL,a=this.configuration.polygonOffsetEnabled&&lt,s=(r||i)&&t.output!==z.Highlight?(t.depthEnabled||t.output===z.Occlusion)&&Ae:null;return ze({blending:t.output===z.Color||t.output===z.Alpha||t.output===z.Highlight?r?ct:De(e):null,depthTest:{func:o},depthWrite:s,colorWrite:Te,polygonOffset:a})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}get primitiveType(){return this.configuration.output===z.Occlusion?Oe.POINTS:Oe.TRIANGLES}}nt.shader=new _(st,(()=>Promise.resolve().then((()=>st))));const lt={factor:0,units:-4},ct=we(xe.ONE,xe.ONE_MINUS_SRC_ALPHA);class dt extends M{constructor(){super(...arguments),this.output=z.Color,this.occlusionTestEnabled=!0,this.sdf=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.screenSizePerspective=!1,this.screenCenterOffsetUnitsEnabled=Be.World,this.debugDrawLabelBorder=!1,this.binaryHighlightOcclusion=!0,this.slicePlaneEnabled=!1,this.polygonOffsetEnabled=!1,this.depthEnabled=!0,this.transparencyPassType=ye.NONE,this.pixelSnappingEnabled=!0,this.isDraped=!1,this.multipassGeometryEnabled=!1,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}Ce([U({count:z.COUNT})],dt.prototype,"output",void 0),Ce([U()],dt.prototype,"occlusionTestEnabled",void 0),Ce([U()],dt.prototype,"sdf",void 0),Ce([U()],dt.prototype,"vvSize",void 0),Ce([U()],dt.prototype,"vvColor",void 0),Ce([U()],dt.prototype,"verticalOffset",void 0),Ce([U()],dt.prototype,"screenSizePerspective",void 0),Ce([U({count:Be.COUNT})],dt.prototype,"screenCenterOffsetUnitsEnabled",void 0),Ce([U()],dt.prototype,"debugDrawLabelBorder",void 0),Ce([U()],dt.prototype,"binaryHighlightOcclusion",void 0),Ce([U()],dt.prototype,"slicePlaneEnabled",void 0),Ce([U()],dt.prototype,"polygonOffsetEnabled",void 0),Ce([U()],dt.prototype,"depthEnabled",void 0),Ce([U({count:ye.COUNT})],dt.prototype,"transparencyPassType",void 0),Ce([U()],dt.prototype,"pixelSnappingEnabled",void 0),Ce([U()],dt.prototype,"isDraped",void 0),Ce([U()],dt.prototype,"multipassGeometryEnabled",void 0),Ce([U()],dt.prototype,"multipassTerrainEnabled",void 0),Ce([U()],dt.prototype,"cullAboveGround",void 0);class pt extends ae{constructor(e){super(e,Ut),this.techniqueConfig=new dt}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.verticalOffset=!!this.parameters.verticalOffset,this.techniqueConfig.screenSizePerspective=!!this.parameters.screenSizePerspective,this.techniqueConfig.screenCenterOffsetUnitsEnabled="screen"===this.parameters.centerOffsetUnits?Be.Screen:Be.World,this.techniqueConfig.polygonOffsetEnabled=this.parameters.polygonOffset,this.techniqueConfig.isDraped=this.parameters.isDraped,this.techniqueConfig.occlusionTestEnabled=this.parameters.occlusionTest,this.techniqueConfig.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this.techniqueConfig.sdf=this.parameters.textureIsSignedDistanceField,this.techniqueConfig.vvSize=!!this.parameters.vvSizeEnabled,this.techniqueConfig.vvColor=!!this.parameters.vvColorEnabled,e===z.Color&&(this.techniqueConfig.debugDrawLabelBorder=!!this.parameters.debugDrawLabelBorder),e===z.Highlight&&(this.techniqueConfig.binaryHighlightOcclusion=this.parameters.binaryHighlightOcclusion),this.techniqueConfig.depthEnabled=this.parameters.depthEnabled,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.multipassGeometryEnabled=t.multipassGeometryEnabled,this.techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=t.cullAboveGround,this.techniqueConfig}intersect(e,t,r,i,o,a,s,n,l){v(l)?this._intersectDrapedHudGeometry(e,a,s,n,l):this._intersectHudGeometry(e,t,r,i,s,n)}_intersectDrapedHudGeometry(e,t,r,i,o){const a=e.vertexAttributes.get(te.POSITION),s=e.vertexAttributes.get(te.SIZE),n=this.parameters,l=ot(n);let c=1,d=1;if(v(i)){const e=i(zt);c=e[0],d=e[5]}c*=e.screenToWorldRatio,d*=e.screenToWorldRatio;const p=Tt*e.screenToWorldRatio;for(let i=0;i<a.data.length/a.size;i++){const u=i*a.size,f=a.data[u],v=a.data[u+1],m=i*s.size;let h;Et[0]=s.data[m]*c,Et[1]=s.data[m+1]*d,n.textureIsSignedDistanceField&&(h=n.outlineSize*e.screenToWorldRatio/2),vt(t,f,v,Et,p,h,n,l)&&r(o.dist,o.normal,-1,!0)}}_intersectHudGeometry(l,c,d,p,f,m){if(!p.options.selectionMode||!p.options.hud||fe(c))return;const g=this.parameters;let b=1,O=1;if(h(Pt,d),v(m)){const e=m(zt);b=e[0],O=e[5],function(e){const t=e[0],r=e[1],i=e[2],o=e[3],a=e[4],s=e[5],n=e[6],l=e[7],c=e[8],d=1/Math.sqrt(t*t+r*r+i*i),p=1/Math.sqrt(o*o+a*a+s*s),u=1/Math.sqrt(n*n+l*l+c*c);e[0]=t*d,e[1]=r*d,e[2]=i*d,e[3]=o*p,e[4]=a*p,e[5]=s*p,e[6]=n*u,e[7]=l*u,e[8]=c*u}(Pt)}const S=l.vertexAttributes.get(te.POSITION),P=l.vertexAttributes.get(te.SIZE),C=l.vertexAttributes.get(te.NORMAL),y=l.vertexAttributes.get(te.AUXPOS1);ue(S.size>=3);const w=p.point,A=p.camera,z=ot(g);b*=A.pixelRatio,O*=A.pixelRatio;const D="screen"===this.parameters.centerOffsetUnits;for(let l=0;l<S.data.length/S.size;l++){const c=l*S.size;e(gt,S.data[c],S.data[c+1],S.data[c+2]),t(gt,gt,d);const v=l*P.size;Et[0]=P.data[v]*b,Et[1]=P.data[v+1]*O,t(gt,gt,A.viewMatrix);const m=l*y.size;if(e(wt,y.data[m+0],y.data[m+1],y.data[m+2]),!D&&(gt[0]+=wt[0],gt[1]+=wt[1],0!==wt[2])){const e=wt[2];r(wt,gt),i(gt,gt,o(wt,wt,e))}const h=l*C.size;if(e(xt,C.data[h],C.data[h+1],C.data[h+2]),this._normalAndViewAngle(xt,Pt,A,At),this._applyVerticalOffsetTransformationView(gt,At,A,mt),A.applyProjection(gt,bt),bt[0]>-1){let e=Math.floor(bt[0])+this.parameters.screenOffset[0],r=Math.floor(bt[1])+this.parameters.screenOffset[1];D&&(e+=wt[0],0!==wt[1]&&(r+=se(wt[1],mt.factorAlignment))),ne(Et,mt.factor,Et);const i=Dt*A.pixelRatio;let l;if(g.textureIsSignedDistanceField&&(l=g.outlineSize*A.pixelRatio/2),vt(w,e,r,Et,i,l,g,z)){const e=p.ray;if(t(St,gt,x(yt,A.viewMatrix)),bt[0]=w[0],bt[1]=w[1],A.unprojectFromRenderScreen(bt,gt)){const t=u();a(t,e.direction);const r=1/s(t);o(t,t,r);f(n(e.origin,gt)*r,t,-1,!0,1,St)}}}}}computeAttachmentOrigin(e,t){const r=e.vertexAttributes;if(!r)return!1;const i=r.get(te.POSITION),o=e.indices.get(te.POSITION);return re(i,o,t)}createBufferWriter(){return new _t(this)}_normalAndViewAngle(e,r,i,o){return Ge(r)&&(r=h(Ct,r)),l(o.normal,e,r),t(o.normal,o.normal,i.viewInverseTransposeMatrix),o.cosAngle=c(Ot,jt),o}_updateScaleInfo(e,t,r){const i=this.parameters;i.screenSizePerspective?le(r,t,i.screenSizePerspective,e.factor):(e.factor.scale=1,e.factor.factor=0,e.factor.minPixelSize=0,e.factor.paddingPixels=0),i.screenSizePerspectiveAlignment?le(r,t,i.screenSizePerspectiveAlignment,e.factorAlignment):(e.factorAlignment.factor=e.factor.factor,e.factorAlignment.scale=e.factor.scale,e.factorAlignment.minPixelSize=e.factor.minPixelSize,e.factorAlignment.paddingPixels=e.factor.paddingPixels)}applyShaderOffsetsView(e,t,r,i,o,a,s){const n=this._normalAndViewAngle(t,r,o,At);return this._applyVerticalGroundOffsetView(e,n,o,s),this._applyVerticalOffsetTransformationView(s,n,o,a),this._applyPolygonOffsetView(s,n,i[3],o,s),this._applyCenterOffsetView(s,i,s),s}applyShaderOffsetsNDC(e,t,r,i,o){return this._applyCenterOffsetNDC(e,t,r,i),v(o)&&a(o,i),this._applyPolygonOffsetNDC(i,t,r,i),i}_applyPolygonOffsetView(e,t,r,i,s){const n=i.aboveGround?1:-1;let l=Math.sign(r);0===l&&(l=n);const c=n*l;if(this.parameters.shaderPolygonOffset<=0)return a(s,e);const p=d(Math.abs(t.cosAngle),.01,1),u=1-Math.sqrt(1-p*p)/p/i.viewport[2];return o(s,e,c>0?u:1/u),s}_applyVerticalGroundOffsetView(e,t,r,i){const a=s(e),n=r.aboveGround?1:-1,l=.5*r.computeRenderPixelSizeAtDist(a),c=o(gt,t.normal,n*l);return p(i,e,c),i}_applyVerticalOffsetTransformationView(e,t,r,i){const a=this.parameters;if(!a.verticalOffset||!a.verticalOffset.screenLength){if(a.screenSizePerspective||a.screenSizePerspectiveAlignment){const r=s(e);this._updateScaleInfo(i,r,t.cosAngle)}else i.factor.scale=1,i.factorAlignment.scale=1;return e}const n=s(e),l=a.screenSizePerspectiveAlignment||a.screenSizePerspective,c=ce(r,n,a.verticalOffset,t.cosAngle,l);return this._updateScaleInfo(i,n,t.cosAngle),o(t.normal,t.normal,c),p(e,e,t.normal)}_applyCenterOffsetView(e,t,i){const s="screen"!==this.parameters.centerOffsetUnits;return i!==e&&a(i,e),s&&(i[0]+=t[0],i[1]+=t[1],t[2]&&(r(xt,i),p(i,i,o(xt,xt,t[2])))),i}_applyCenterOffsetNDC(e,t,r,i){const o="screen"!==this.parameters.centerOffsetUnits;return i!==e&&a(i,e),o||(i[0]+=t[0]/r.fullWidth*2,i[1]+=t[1]/r.fullHeight*2),i}_applyPolygonOffsetNDC(e,t,r,i){const o=this.parameters.shaderPolygonOffset;if(e!==i&&a(i,e),o){const e=r.aboveGround?1:-1,a=e*Math.sign(t[3]);i[2]-=(a||e)*o}return i}requiresSlot(e){if(e===pe.DRAPED_MATERIAL)return!0;const{drawInSecondSlot:t,occlusionTest:r}=this.parameters;return e===(t?pe.LABEL_MATERIAL:pe.HUD_MATERIAL)||r&&e===pe.OCCLUSION_PIXELS}createGLMaterial(e){return e.output===z.Color||e.output===z.Alpha?new ft(e):e.output===z.Highlight?new ut(e):null}calculateRelativeScreenBounds(e,t,r=y()){return function(e,t,r,i=ht){S(i,e.anchorPos),i[0]*=-t[0],i[1]*=-t[1],i[0]+=e.screenOffset[0]*r,i[1]+=e.screenOffset[1]*r}(this.parameters,e,t,r),r[2]=r[0]+e[0],r[3]=r[1]+e[1],r}}class ut extends ie{constructor(e){super({...e,...e.material.parameters})}updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this.selectProgram(e)}selectProgram(e){return this.ensureTechnique(nt,e)}beginSlot(e){return this.updateParameters(e)}bind(e,t){this.bindTextures(t.program),this.bindTextureScale(t.program),t.bindPass(this._material.parameters,e)}}class ft extends ut{_isOcclusionSlot(e){return e.slot===pe.OCCLUSION_PIXELS&&this._material.parameters.occlusionTest&&(this._output===z.Color||this._output===z.Alpha)}selectProgram(e){return this.ensureTechnique(nt,e,this._isOcclusionSlot(e)?z.Occlusion:this._output)}bind(e,t){this._isOcclusionSlot(e)||(this.bindTextures(t.program),this.bindTextureScale(t.program)),t.bindPass(this._material.parameters,e)}}function vt(e,t,r,i,o,a,s,n){let l=t-o-(n[0]>0?i[0]*n[0]:0),c=l+i[0]+2*o,d=r-o-(n[1]>0?i[1]*n[1]:0),p=d+i[1]+2*o;if(s.textureIsSignedDistanceField){const e=s.distanceFieldBoundingBox;l+=i[0]*e[0],d+=i[1]*e[1],c-=i[0]*(1-e[2]),p-=i[1]*(1-e[3]),l-=a,c+=a,d-=a,p+=a}return e[0]>l&&e[0]<c&&e[1]>d&&e[1]<p}const mt={factor:{scale:0,factor:0,minPixelSize:0,paddingPixels:0},factorAlignment:{scale:0,factor:0,minPixelSize:0,paddingPixels:0}},ht=P(),gt=u(),xt=u(),bt=m(),Ot=u(),St=u(),Pt=g(),Ct=g(),yt=b(),wt=u(),At={normal:Ot,cosAngle:0},zt=b(),Dt=1,Tt=2,Et=[0,0],jt=f(0,0,1),Ut={texCoordScale:[1,1],occlusionTest:!0,binaryHighlightOcclusion:!0,drawInSecondSlot:!1,color:[1,1,1,1],outlineColor:[1,1,1,1],outlineSize:0,textureIsSignedDistanceField:!1,distanceFieldBoundingBox:null,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],screenOffset:[0,0],verticalOffset:null,screenSizePerspective:null,screenSizePerspectiveAlignment:null,slicePlaneEnabled:!1,anchorPos:C(.5,.5),shaderPolygonOffset:1e-5,polygonOffset:!1,textureId:null,centerOffsetUnits:"world",depthEnabled:!0,pixelSnappingEnabled:!0,debugDrawLabelBorder:!1,isDraped:!1,...de},Mt=w().vec3f(te.POSITION).vec3f(te.NORMAL).vec2f(te.UV0).vec4u8(te.COLOR).vec2f(te.SIZE).vec4f(te.AUXPOS1).vec4f(te.AUXPOS2);class _t{constructor(e){this.material=e,this.vertexBufferLayout=Mt}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return 6*e.indices.get(te.POSITION).length}write(e,t,r,i){q(t.indices.get(te.POSITION),t.vertexAttributes.get(te.POSITION).data,e.transformation,r.position,i,6),$(t.indices.get(te.NORMAL),t.vertexAttributes.get(te.NORMAL).data,e.invTranspTransformation,r.normal,i,6);{const e=t.vertexAttributes.get(te.UV0).data;let o,a,s,n;if(null==e||e.length<4){const e=this.material.parameters;o=0,a=0,s=e.texCoordScale[0],n=e.texCoordScale[1]}else o=e[0],a=e[1],s=e[2],n=e[3];s=Math.min(1.99999,s+1),n=Math.min(1.99999,n+1);const l=t.indices.get(te.POSITION).length,c=r.uv0;let d=i;for(let e=0;e<l;++e)c.set(d,0,o),c.set(d,1,a),d+=1,c.set(d,0,s),c.set(d,1,a),d+=1,c.set(d,0,s),c.set(d,1,n),d+=1,c.set(d,0,s),c.set(d,1,n),d+=1,c.set(d,0,o),c.set(d,1,n),d+=1,c.set(d,0,o),c.set(d,1,a),d+=1}X(t.indices.get(te.COLOR),t.vertexAttributes.get(te.COLOR).data,4,r.color,i,6);{const e=t.indices.get(te.SIZE),o=t.vertexAttributes.get(te.SIZE).data,a=e.length,s=r.size;let n=i;for(let t=0;t<a;++t){const r=o[2*e[t]],i=o[2*e[t]+1];for(let e=0;e<6;++e)s.set(n,0,r),s.set(n,1,i),n+=1}}t.indices.get(te.AUXPOS1)&&t.vertexAttributes.get(te.AUXPOS1)&&W(t.indices.get(te.AUXPOS1),t.vertexAttributes.get(te.AUXPOS1).data,r.auxpos1,i,6),t.indices.get(te.AUXPOS2)&&t.vertexAttributes.get(te.AUXPOS2)&&W(t.indices.get(te.AUXPOS2),t.vertexAttributes.get(te.AUXPOS2).data,r.auxpos2,i,6)}}const Ft=u();function Vt(e,t,r,i,o,a,s,n){const l=r?r.length:0,c=e.clippingExtent;if(Ee(t,Ft,e.elevationProvider.spatialReference),v(c)&&!je(c,Ft))return null;Ee(t,Ft,e.renderCoordsHelper.spatialReference);const d=e.localOriginFactory.getOrigin(Ft),p=new Re({castShadow:!1,metadata:{layerUid:a,graphicUid:s,usesVerticalDistanceToGround:!0}});for(let e=0;e<l;e++){const t=O;p.addGeometry(r[e],i[e],t,d,n)}return{object:p,sampledElevation:Ve(p,t,e.elevationProvider,e.renderCoordsHelper,o)}}function Rt(e,t,r){const i=e.elevationContext,o=r.spatialReference;Ee(t,Ft,o),i.centerPointInElevationSR=_e(Ft[0],Ft[1],t.hasZ?Ft[2]:0,o)}function Ht(e){switch(e.type){case"point":return e;case"polygon":case"extent":return He(e);case"polyline":{const t=e.paths[0];if(!t||0===t.length)return null;const r=Ue(t,Me(t)/2);return _e(r[0],r[1],r[2],e.spatialReference)}case"mesh":return e.origin}return null}function It(e,t,r,i,o){const a=new Float64Array(3*e.length),s=new Float64Array(a.length);e.forEach(((e,t)=>{a[3*t+0]=e[0],a[3*t+1]=e[1],a[3*t+2]=e.length>2?e[2]:0}));const n=Fe(a,t,0,s,0,a,0,a.length/3,r,i,o),l=null!=n;return{numVertices:e.length,position:a,mapPosition:s,projectionSuccess:l,sampledElevation:n}}export{Ie as A,$e as D,pt as H,Le as a,Ne as b,Be as c,qe as d,tt as e,Vt as f,Rt as g,We as h,Xe as i,It as j,et as m,Ht as p};
