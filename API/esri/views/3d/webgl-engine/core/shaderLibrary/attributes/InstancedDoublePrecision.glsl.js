// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../chunks/vec3f64 ../ShaderOutputOptions ../util/DoublePrecision.glsl ../../shaderModules/interfaces ../../../lib/VertexAttribute ../../../../../webgl/doublePrecisionUtils".split(" "),function(e,g,l,m,c,f,n){const h=g.create(),k=g.create();e.InstancedDoublePrecision=function(a,b){b.instanced&&b.instancedDoublePrecision&&(a.attributes.add(f.VertexAttribute.MODELORIGINHI,"vec3"),a.attributes.add(f.VertexAttribute.MODELORIGINLO,"vec3"),a.attributes.add(f.VertexAttribute.MODEL,
"mat3"),a.attributes.add(f.VertexAttribute.MODELNORMAL,"mat3"));b.instancedDoublePrecision&&(a.vertex.include(m.DoublePrecision,b),a.vertex.uniforms.add("viewOriginHi","vec3"),a.vertex.uniforms.add("viewOriginLo","vec3"));const d=[c.glsl`
    vec3 calculateVPos() {
      ${b.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,c.glsl`
    vec3 subtractOrigin(vec3 _pos) {
      ${b.instancedDoublePrecision?c.glsl`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,c.glsl`
    vec3 dpNormal(vec4 _normal) {
      ${b.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,c.glsl`
    vec3 dpNormalView(vec4 _normal) {
      ${b.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,b.vertexTangents?c.glsl`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${b.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:c.glsl``];a.vertex.code.add(d[0]);a.vertex.code.add(d[1]);a.vertex.code.add(d[2]);b.output===l.ShaderOutput.Normal&&a.vertex.code.add(d[3]);a.vertex.code.add(d[4])};e.InstancedDoublePrecisionUniforms=function(){};e.bindCustomOrigin=function(a,b){n.encodeDoubleArraySplit(b,h,k,3);a.setUniform3fv("viewOriginHi",h);a.setUniform3fv("viewOriginLo",k)};Object.defineProperty(e,"__esModule",{value:!0})});