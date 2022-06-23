// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl ../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl ../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl ../views/3d/webgl-engine/core/shaderModules/interfaces ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder ../views/3d/webgl-engine/lib/VertexAttribute".split(" "),function(f,d,m,n,p,b,q,g){function h(c){const a=new q.ShaderBuilder,
k=c.output===d.ShaderOutput.Color,e=c.output===d.ShaderOutput.Depth,l=c.output===d.ShaderOutput.Highlight;a.extensions.add("GL_OES_standard_derivatives");a.include(m.Slice,c);a.attributes.add(g.VertexAttribute.POSITION,"vec3");a.attributes.add(g.VertexAttribute.COLOR,"vec3");a.vertex.uniforms.add("modelView","mat4").add("proj","mat4").add("screenMinMaxSize","vec2").add("pointScale","vec2").add("clipMin","vec3").add("clipMax","vec3");e?(a.vertex.uniforms.add("nearFar","vec2"),a.varyings.add("depth",
"float")):c.output!==d.ShaderOutput.Highlight&&a.varyings.add("vColor","vec3");a.vertex.code.add(b.glsl`
    void main(void) {
      // Move clipped points outside of clipspace
      if (position.x < clipMin.x || position.y < clipMin.y || position.z < clipMin.z ||
        position.x > clipMax.x || position.y > clipMax.y || position.z > clipMax.z) {
        gl_Position = vec4(0.0,0.0,0.0,2.0);
        gl_PointSize = 0.0;
        return;
      }

      if (rejectBySlice(position)) {
        gl_Position = vec4(0.0,0.0,0.0,2.0);
        gl_PointSize = 0.0;
        return;
      }

      // Position in camera space
      vec4 camera = modelView * vec4(position, 1.0);

      float pointSize = pointScale.x;
      vec4 position = proj * camera;
     ${c.drawScreenSize?b.glsl`
      float clampedScreenSize = pointSize;`:b.glsl`
      float pointRadius = 0.5 * pointSize;
      vec4 cameraOffset = camera + vec4(0.0, pointRadius, 0.0, 0.0);
      vec4 positionOffset = proj * cameraOffset;
      float radius = abs(positionOffset.y - position.y);
      float viewHeight = pointScale.y;
      // screen diameter = (2 * r / w) * (h / 2)
      float screenPointSize = (radius / position.w) * viewHeight;
      float clampedScreenSize = clamp(screenPointSize, screenMinMaxSize.x, screenMinMaxSize.y);
      // Shift towards camera, to move rendered point out of terrain i.e. to
      // the camera-facing end of the virtual point when considering it as a
      // 3D sphere.
      camera.xyz -= normalize(camera.xyz) * pointRadius * clampedScreenSize / screenPointSize;
      position = proj * camera;`}

     gl_PointSize = clampedScreenSize;
     gl_Position = position;

     ${e?b.glsl`depth = (-camera.z - nearFar[0]) / (nearFar[1] - nearFar[0]);`:""}
     ${k?b.glsl`vColor = color;`:""}
    }
  `);a.fragment.include(p.RgbaFloatEncoding,c);l&&a.include(n.OutputHighlight);a.fragment.code.add(b.glsl`
    void main(void) {
      vec2 vOffset = gl_PointCoord - vec2(0.5, 0.5);
      float r2 = dot(vOffset, vOffset);

      if (r2 > 0.25) {
        discard;
      }
      ${e?b.glsl`gl_FragColor = float2rgba(depth);`:""}
      ${l?b.glsl`outputHighlight();`:""}
      ${k?b.glsl`gl_FragColor = vec4(vColor, 1.0);`:""}
    }
  `);return a}const r=Object.freeze({__proto__:null,build:h});f.PointRendererShader=r;f.build=h});