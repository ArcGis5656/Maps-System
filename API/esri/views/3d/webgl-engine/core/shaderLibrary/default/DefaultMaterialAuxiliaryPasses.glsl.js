// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("exports ../ShaderOutputOptions ../Slice.glsl ../Transform.glsl ../attributes/NormalAttribute.glsl ../attributes/TextureCoordinateAttribute.glsl ../attributes/VertexNormal.glsl ../output/OutputDepth.glsl ../output/OutputHighlight.glsl ../shading/VisualVariables.glsl ../util/AlphaDiscard.glsl ../../shaderModules/interfaces".split(" "),function(q,e,f,g,h,k,r,t,u,l,m,c){q.DefaultMaterialAuxiliaryPasses=function(a,b){const n=a.vertex.code,p=a.fragment.code,d=b.hasModelTransformation;if(b.output===
e.ShaderOutput.Depth||b.output===e.ShaderOutput.Shadow)a.include(g.Transform,{linearDepth:!0,hasModelTransformation:d}),a.include(k.TextureCoordinateAttribute,b),a.include(l.VisualVariables,b),a.include(t.OutputDepth,b),a.include(f.Slice,b),a.vertex.uniforms.add("nearFar","vec2"),a.varyings.add("depth","float"),b.hasColorTexture&&a.fragment.uniforms.add("tex","sampler2D"),n.add(c.glsl`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, ${d?"model,":""} vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),a.include(m.DiscardOrAdjustAlpha,b),p.add(c.glsl`
      void main(void) {
        discardBySlice(vpos);
        ${b.hasColorTexture?c.glsl`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `);b.output===e.ShaderOutput.Normal&&(a.include(g.Transform,{linearDepth:!1,hasModelTransformation:d}),a.include(h.NormalAttribute,b),a.include(r.VertexNormal,b),a.include(k.TextureCoordinateAttribute,b),a.include(l.VisualVariables,b),b.hasColorTexture&&a.fragment.uniforms.add("tex","sampler2D"),a.vertex.uniforms.add("viewNormal","mat4"),a.varyings.add("vPositionView","vec3"),n.add(c.glsl`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${b.normalType===h.NormalAttributeType.Attribute?c.glsl`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${d?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),a.include(f.Slice,b),a.include(m.DiscardOrAdjustAlpha,b),p.add(c.glsl`
      void main() {
        discardBySlice(vpos);
        ${b.hasColorTexture?c.glsl`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${b.normalType===h.NormalAttributeType.ScreenDerivative?c.glsl`
            vec3 normal = screenDerivativeNormal(vPositionView);`:c.glsl`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `));b.output===e.ShaderOutput.Highlight&&(a.include(g.Transform,{linearDepth:!1,hasModelTransformation:d}),a.include(k.TextureCoordinateAttribute,b),a.include(l.VisualVariables,b),b.hasColorTexture&&a.fragment.uniforms.add("tex","sampler2D"),n.add(c.glsl`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${d?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),a.include(f.Slice,b),a.include(m.DiscardOrAdjustAlpha,b),a.include(u.OutputHighlight),p.add(c.glsl`
      void main() {
        discardBySlice(vpos);
        ${b.hasColorTexture?c.glsl`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))};Object.defineProperty(q,"__esModule",{value:!0})});