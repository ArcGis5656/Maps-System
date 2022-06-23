// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../views/3d/environment/NoiseTextureAtlas","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder"],function(d,e,g,a,h){function f(b){const c=new h.ShaderBuilder;c.include(g.ScreenSpacePass,!1);c.fragment.uniforms.add("cloudRadius","float").add("halfCubeMapSize","float").add("power","float").add("sigmaE","float").add("density","float").add("cloudSize","float").add("detailSize",
"float").add("smoothness","float").add("cloudHeight","float").add("coverage","float").add("view","mat3").add("cloudShapeTexture","sampler2D");c.fragment.code.add(a.glsl`
    const int STEPS = ${b.steps===d.RayMarchingSteps.SIXTEEN?a.glsl`16`:b.steps===d.RayMarchingSteps.HUNDRED?a.glsl`100`:a.glsl`200`};
    const int STEPS_LIGHT = 6;
    const float stepL = 300.0 / float(STEPS_LIGHT);

    const float cloudStart = 1500.0;

    vec3 rayDirection(vec2 fragCoord) {
      vec2 xy = fragCoord - halfCubeMapSize;
      return normalize(vec3(-xy, -halfCubeMapSize));
    }

    float remap(float x, float low1, float high1, float low2, float high2) {
      return low2 + (x - low1) * (high2 - low2) / (high1 - low1);
    }

    float saturate(float x) {
      return clamp(x, 0.0, 1.0);
    }`);c.fragment.code.add(a.glsl`
    float getCloudShape(vec3 pos, float pOffset) {
      const float textureWidth = ${a.glsl.float(e.ATLAS_SIZE)};
      const float dataWidth = ${a.glsl.float(e.ATLAS_SIZE)};
      const float tileRows = ${a.glsl.float(e.TILE_ROWS)};
      const vec3 atlasDimensions = vec3(${a.glsl.float(e.TILE_SIZE)}, ${a.glsl.float(e.TILE_SIZE)}, tileRows * tileRows);

      //Change from Y being height to Z being height
      vec3 p = float(${a.glsl.float(e.TEXTURE_SCALE)}) * pos.xzy;

      //Pixel coordinates of point in the 3D data
      vec3 coord = vec3(mod(p - pOffset * atlasDimensions, atlasDimensions));
      float f = fract(coord.z);
      float level = floor(coord.z);
      float tileY = floor(level / tileRows);
      float tileX = level - tileY * tileRows;

      //The data coordinates are offset by the x and y tile, the two boundary cells between each tile pair and the initial boundary cell on the first row/column
      vec2 offset = atlasDimensions.x * vec2(tileX, tileY) + 2.0 * vec2(tileX, tileY) + 1.0;
      vec2 pixel = coord.xy + offset;
      vec2 data = texture2D(cloudShapeTexture, mod(pixel, dataWidth) / textureWidth).xy;

      return 1.0 - mix(data.x, data.y, f);
    }`);c.fragment.code.add(a.glsl`float clouds(vec3 p) {
float cloudVariations = getCloudShape(0.002 * p, 0.5);
float cloud = saturate(0.5 * mix(0.0, 1.0, min(2.0 * coverage, 1.0)));
cloud += (cloudVariations * 0.6 - 0.3) * ( -4.0 * (coverage * coverage - coverage));
float heightFraction = saturate((length(p) - cloudRadius - cloudStart) / cloudHeight);
cloud *= saturate(remap(heightFraction, 0.0, 0.25, 0.0, 1.0)) * saturate(remap(heightFraction, 0.75, 1.0, 1.0, 0.0));
float shape = getCloudShape(cloudSize * p, 0.0);
shape *= mix(0.0, 1.0, min(2.0 * (1.0 - coverage), 1.0));
cloud = saturate(remap(cloud, shape, 1.0, 0.0, 1.0));
if (cloud <= 0.0) {
return 0.0;
}
return density * saturate(remap(cloud, smoothness * getCloudShape(detailSize * p, 0.0), 1.0, 0.0, 1.0));
}`);c.fragment.code.add(a.glsl`vec2 sphereIntersections(vec3 start, vec3 dir, float radius) {
float a = dot(dir, dir);
float b = 2.0 * dot(dir, start);
float c = dot(start, start) - (radius * radius);
float d = (b * b) - 4.0 * a * c;
if (d < 0.0) {
return vec2(1e5, -1e5);
}
return vec2((-b - sqrt(d)) / (2.0 * a), (-b + sqrt(d)) / (2.0 * a));
}
float HenyeyGreenstein(float g, float costh) {
return (1.0 / (4.0 * 3.1415))  * ((1.0 - g * g) / pow(1.0 + g * g - 2.0 * g * costh, 1.5));
}`);c.fragment.code.add("\n    vec3 multipleOctaves(float extinction, float mu, float stepL) {\n      float attenuation \x3d 1.0;\n      float contribution \x3d 1.0;\n      float phaseAttenuation \x3d 1.0;\n      vec3 luminance \x3d vec3(0);\n\n      for (int i \x3d 0; i \x3c 4; i++) {\n        float phase \x3d mix(HenyeyGreenstein(0.0, mu), HenyeyGreenstein(0.3 * phaseAttenuation, mu), 0.7);\n        luminance +\x3d contribution * phase * exp(-stepL * extinction * sigmaE * attenuation);\n        attenuation *\x3d 0.2;\n        contribution *\x3d 0.6;\n        phaseAttenuation *\x3d 0.5;\n      }\n\n      return luminance;\n    }");
c.fragment.code.add(a.glsl`vec3 lightRay(vec3 org, vec3 p, float phaseFunction, float mu, vec3 sunDirection) {
float lightRayDensity = clouds(p);
lightRayDensity += clouds(p + sunDirection * 1.0 * stepL);
lightRayDensity += clouds(p + sunDirection * 2.0 * stepL);
lightRayDensity += clouds(p + sunDirection * 3.0 * stepL);
lightRayDensity += clouds(p + sunDirection * 4.0 * stepL);
lightRayDensity += clouds(p + sunDirection * 5.0 * stepL);
vec3 beersLaw = multipleOctaves(lightRayDensity, mu, stepL);
return mix(beersLaw * 2.0 * (1.0 - (exp(-stepL * lightRayDensity * 2.0 * sigmaE ))), beersLaw, 0.5 + 0.5 * mu);
}`);c.fragment.code.add(a.glsl`vec3 mainRay(vec3 org, vec3 dir, vec3 sunDirection, float distToStart, float totalDistance, out float totalTransmittance) {
if (dir.z < 0.0) {
return vec3(0);
}
totalTransmittance = 1.0;
float stepS = totalDistance / float(STEPS);
float cameraHeight = length(org);
float mu = 0.5 + 0.5 * dot(sunDirection, dir);
float phaseFunction = mix(HenyeyGreenstein(-0.3, mu), HenyeyGreenstein(0.3, mu), 0.7);
vec3 p = org + distToStart  * dir;
float dist = distToStart;
vec3 color = vec3(0.0);
for (int i = 0; i < STEPS; i++) {
float sampleDensity = clouds(p);
float sampleSigmaE = sampleDensity * sigmaE;
if (sampleDensity > 0.0 ) {
float ambient = mix((1.2), (1.6), saturate((length(p) - cloudRadius - cloudStart) / cloudHeight));
vec3 luminance = sampleDensity * (ambient + power * phaseFunction * lightRay(org, p, phaseFunction, mu, sunDirection));
float transmittance = exp(-sampleSigmaE * stepS);
color += totalTransmittance * (luminance - luminance * transmittance) / sampleSigmaE;
totalTransmittance *= transmittance;
if (totalTransmittance <= 0.001) {
totalTransmittance = 0.0;
break;
}
}
dist += stepS;
p = org + dir * dist;
}
return color;
}`);c.fragment.code.add(a.glsl`void main() {
vec3 rayDir = rayDirection(gl_FragCoord.xy);
rayDir = normalize(view * rayDir);
vec3 viewPos = vec3(0, 0, cloudRadius + 1.0);
bool hitsPlanet = rayDir.z < 0.0;
if (hitsPlanet) {
gl_FragColor = vec4(vec3(0), 1);
return;
}
vec2 rayStartIntersect = sphereIntersections(viewPos, rayDir, cloudRadius + cloudStart);
vec2 rayEndIntersect = sphereIntersections(viewPos, rayDir, cloudRadius + cloudStart + cloudHeight);
float distToStart = rayStartIntersect.y;
float totalDistance = rayEndIntersect.y - distToStart;
float totalTransmittance = 1.0;
vec3 sunDirection = normalize(vec3(0, 0, 1));
vec3 col = 0.5 * mainRay(viewPos, rayDir, sunDirection, distToStart, totalDistance, totalTransmittance).rgb;
gl_FragColor = vec4(col, totalTransmittance);
}`);return c}d.RayMarchingSteps=void 0;(function(b){b[b.SIXTEEN=0]="SIXTEEN";b[b.HUNDRED=1]="HUNDRED";b[b.TWOHUNDRED=2]="TWOHUNDRED";b[b.COUNT=3]="COUNT"})(d.RayMarchingSteps||(d.RayMarchingSteps={}));const k=Object.freeze({__proto__:null,get RayMarchingSteps(){return d.RayMarchingSteps},build:f});d.CloudsShader=k;d.build=f});