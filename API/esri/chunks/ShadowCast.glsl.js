// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass ../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder".split(" "),function(c,k,l,m,n,
p,e,q){function f(a){const b=new q.ShaderBuilder;b.fragment.include(p.RgbaFloatEncoding);b.fragment.include(l.ReadLinearDepth);b.include(n.CameraSpace);b.include(k.ScreenSpacePass);var {pass:d}=a;if(d===c.ShadowCastPass.Visualize){const {visualization:g,bandsEnabled:h}=a;b.fragment.constants.add("inverseSampleValue","float",255);b.fragment.uniforms.add("shadowCastMap","sampler2D");b.fragment.uniforms.add("sampleScale","float");b.fragment.uniforms.add("opacityFromElevation","float");a=g===c.ShadowCastVisualization.Gradient;
d=g===c.ShadowCastVisualization.Threshold;b.fragment.uniforms.add("uColor","vec4");a?h&&b.fragment.uniforms.add("bandSize","float"):d&&b.fragment.uniforms.add("threshold","float");b.fragment.code.add(e.glsl`
      void main(void) {
        vec4 record = texture2D(shadowCastMap, uv);
        float pixelSamples = record.r * inverseSampleValue;

        if (pixelSamples < 1.0) {
          discard;
        }

        float strength = pixelSamples * sampleScale;

        ${d?e.glsl`
            if (strength <= threshold) {
              discard;
            }`:""}

        ${a&&h?e.glsl`strength = ceil(strength / bandSize) * bandSize;`:""}

        gl_FragColor = vec4(uColor.xyz, uColor.a * opacityFromElevation ${a?e.glsl`* strength`:""});
      }
    `)}else if(d===c.ShadowCastPass.Accumulate||d===c.ShadowCastPass.VisualizeCurrent)b.include(m.ReadShadowMap),b.fragment.uniforms.add("depthMap","sampler2D"),b.fragment.uniforms.add("inverseViewMatrix","mat4"),b.fragment.uniforms.add("nearFar","vec2"),d===c.ShadowCastPass.Accumulate?b.fragment.constants.add("sampleValue","float",r):b.fragment.constants.add("shadowColor","vec4",[0,0,0,.8]),b.fragment.code.add(e.glsl`
      void main(void) {

        float depth = rgba2float(texture2D(depthMap, uv));
        // 0.0 is the clear value of depthMap, which means nothing has been drawn there and we should discard
        if (depth == 0.0) {
          discard;
        }

        float currentPixelDepth = linearDepthFromFloat(depth, nearFar);

        if (-currentPixelDepth > nearFar.y || -currentPixelDepth < nearFar.x) {
          discard;
        }

        vec4 currentPixelPos = vec4(reconstructPosition(gl_FragCoord.xy, currentPixelDepth), 1.0);
        vec4 worldSpacePos = inverseViewMatrix * currentPixelPos;

        mat4 shadowMatrix;
        float linearDepth = -currentPixelDepth;
        int i = chooseCascade(linearDepth, shadowMatrix);

        if (i >= numCascades) {
          discard;
        }

        vec3 lvpos = lightSpacePosition(worldSpacePos.xyz, shadowMatrix);

        // vertex completely outside? -> no shadow
        if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) {
          discard;
        }

        vec2 uvShadow = cascadeCoordinates(i, lvpos);

        float depthShadow = readShadowMapDepth(uvShadow, shadowMapTex);
        bool shadow = depthShadow < lvpos.z;

        if (!shadow) {
          discard;
        }

        gl_FragColor = ${d===c.ShadowCastPass.Accumulate?e.glsl`vec4(sampleValue)`:e.glsl`shadowColor`};
      }
    `);return b}c.ShadowCastPass=void 0;(function(a){a[a.Accumulate=0]="Accumulate";a[a.Visualize=1]="Visualize";a[a.VisualizeCurrent=2]="VisualizeCurrent";a[a.COUNT=3]="COUNT"})(c.ShadowCastPass||(c.ShadowCastPass={}));c.ShadowCastVisualization=void 0;(function(a){a[a.Gradient=0]="Gradient";a[a.Threshold=1]="Threshold"})(c.ShadowCastVisualization||(c.ShadowCastVisualization={}));const r=1/255,t=Object.freeze({__proto__:null,get ShadowCastPass(){return c.ShadowCastPass},get ShadowCastVisualization(){return c.ShadowCastVisualization},
shadowCastMaxSamples:255,build:f});c.ShadowCast=t;c.build=f;c.shadowCastMaxSamples=255});