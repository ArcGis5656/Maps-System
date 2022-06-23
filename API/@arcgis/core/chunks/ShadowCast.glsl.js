/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{s as t,q as e,g as a,G as n,c as i,n as o,v as r,p as s,b as l}from"./mathUtils.js";import{e as c,i as u,r as d,n as m,b as f}from"./mat4.js";import{c as h}from"./mat4f64.js";import{V as p}from"./ViewingMode.js";import{S as g}from"./ScreenSpacePass.js";import{S as v,a as b,R as x,g as y}from"./ShaderBuilder.js";import{R as w}from"./ReadShadowMap.glsl.js";import{C as M}from"./CameraSpace.glsl.js";var S,A,P={exports:{}};S=P,A=function(){var t=Math.PI,e=Math.sin,a=Math.cos,n=Math.tan,i=Math.asin,o=Math.atan2,r=Math.acos,s=t/180,l=864e5,c=2440588,u=2451545,d={dec:0,ra:0};function m(t){return t.valueOf()/l-.5+c}function f(t){return new Date((t+.5-c)*l)}function h(t){return m(t)-u}var p=23.4397*s;function g(t,i){return o(e(t)*a(p)-n(i)*e(p),a(t))}function v(t,n){return i(e(n)*a(p)+a(n)*e(p)*e(t))}function b(t,i,r){return o(e(t),a(t)*e(i)-n(r)*a(i))}function x(t,n,o){return i(e(n)*e(o)+a(n)*a(o)*a(t))}function y(t,e){return s*(280.16+360.9856235*t)-e}function w(t){return s*(357.5291+.98560028*t)}function M(t){return s*(1.9148*e(t)+.02*e(2*t)+3e-4*e(3*t))}function S(e,a){return e+a+102.9372*s+t}function A(t,e){var a=w(t),n=S(a,M(a));return e||(e={dec:0,ra:0}),e.dec=v(n,0),e.ra=g(n,0),e}var P={PolarException:{NORMAL:0,MIDNIGHT_SUN:1,POLAR_NIGHT:2},getPosition:function(t,e,a,n){var i=s*-a,o=s*e,r=h(t),l=A(r,d),c=y(r,i)-l.ra;return n||(n={azimuth:0,altitude:0}),n.azimuth=b(c,o,l.dec),n.altitude=x(c,o,l.dec),n}},z=[[-.83,"sunrise","sunset"]];P.addTime=function(t,e,a){z.push([t,e,a])};var N=9e-4;function T(e,a){return Math.round(e-N-a/(2*t))}function C(e,a,n){return N+(e+a)/(2*t)+n}function D(t,a,n){return u+t+.0053*e(a)-.0069*e(2*n)}function O(t,n,i){return r((e(t)-e(n)*e(i))/(a(n)*a(i)))}function E(t){var n=s*(134.963+13.064993*t),i=s*(93.272+13.22935*t),o=s*(218.316+13.176396*t)+6.289*s*e(n),r=5.128*s*e(i),l=385001-20905*a(n);return{ra:g(o,r),dec:v(o,r),dist:l}}return P.getTimes=function(t,n,i){var o=s*-i,r=s*n,l=T(h(t),o),c=C(0,o,l),u=w(c),d=M(u),m=S(u,d),p=v(m,0),g=D(c,u,m);function b(t){return D(C(O(t,r,p),o,l),u,m)}function x(t){var n=(e(t)-e(r)*e(p))/(a(r)*a(p));return n<-1?P.PolarException.MIDNIGHT_SUN:n>1?P.PolarException.POLAR_NIGHT:P.PolarException.NORMAL}var y,A,N,E,F,G={solarNoon:f(g),nadir:f(g-.5),polarException:P.PolarException.NORMAL};for(y=0,A=z.length;y<A;y+=1)F=g-((E=b((N=z[y])[0]*s))-g),G[N[1]]=f(F),G[N[2]]=f(E);return G.polarException=x(z[0][0]*s),G},P.getMoonPosition=function(t,e,a){var i=s*-a,o=s*e,r=h(t),l=E(r),c=y(r,i)-l.ra,u=x(c,o,l.dec);return u+=.017*s/n(u+10.26*s/(u+5.1*s)),{azimuth:b(c,o,l.dec),altitude:u,distance:l.dist}},P.getMoonFraction=function(t){var n=h(t),i=A(n),s=E(n),l=149598e3,c=r(e(i.dec)*e(s.dec)+a(i.dec)*a(s.dec)*a(i.ra-s.ra)),u=o(l*e(c),s.dist-l*a(c));return(1+a(u))/2},P}(),void 0!==A&&(S.exports=A);const z=P.exports,N={local:{altitude:1500,ambientAtNight:.1,ambientAtNoon:.45,ambientAtTwilight:.2,directAtNoon:.65,directAtTwilight:.7},global:{altitude:8e5,ambient:.015,direct:.75},planarDirection:{localAltitude:1e4,globalAltitude:1e6,globalAngles:{azimuth:1.3*Math.PI,altitude:.6*Math.PI}}};function T(s,l,u,d,m,f,h){t(h.ambient.color,1,1,1),h.ambient.intensity=N.global.ambient,t(h.direct.color,1,1,1),h.direct.intensity=N.global.direct;const g=l[2],v=i((Math.abs(g)-N.local.altitude)/(N.global.altitude-N.local.altitude),0,1);let b;if(h.globalFactor=v,"sun"===f&&(b=z.getTimes(s,l[1],l[0])),v<1){let t;if("sun"===f)t=function(t,a,n){const i=t.valueOf();let o,r;a.polarException===z.PolarException.MIDNIGHT_SUN?(o=i-60*(t.getHours()+48)*60*1e3-60*t.getMinutes()*1e3,r=o+432e6):a.polarException===z.PolarException.POLAR_NIGHT?(o=i-2,r=i-1):(o=a.sunrise.valueOf(),r=a.sunset.valueOf());const s=r-o,l=o+s/2,c=s/4,u=l-c,d=l+c,m=.06*s,f=o-m/2,h=o+m/2,p=r-m/2,g=r+m/2,v=N.local,b=[.01,v.ambientAtNight],x=[.8,.8,1],y=[.01,.01,.01],w=[v.directAtTwilight,v.ambientAtTwilight],M=[1,.6,.5],S=[.8,.8,1],A=[.9*v.directAtNoon,v.ambientAtNoon],P=[1,.98,.98],T=[.98,.98,1],C=[v.directAtNoon,v.ambientAtNoon],D=[1,1,1],O=[1,1,1],E=A,F=P,G=T,I=w,H=M,L=S;let j,U,$=[0,0],q=[0,0,0],B=[0,0,0];i<f||i>g?($=b,q=y,B=x,U="night"):i<h?(j=h-f,$=R(i-f,j,b,w),q=R(i-f,j,y,M),B=R(i-f,j,x,S),U="sun rising"):i<u?(j=u-h,$=R(i-h,j,w,A),q=R(i-h,j,M,P),B=R(i-h,j,S,T),U="early morning"):i<l?(j=l-u,$=R(i-u,j,A,C),q=R(i-u,j,P,D),B=R(i-u,j,T,O),U="late morning"):i<d?(j=d-l,$=R(i-l,j,C,E),q=R(i-l,j,D,F),B=R(i-l,j,O,G),U="early afternoon"):i<p?(j=p-d,$=R(i-d,j,E,I),q=R(i-d,j,F,H),B=R(i-d,j,G,L),U="late afternoon"):i<g&&(j=g-p,$=R(i-p,j,I,b),q=R(i-p,j,H,y),B=R(i-p,j,L,x),U="sun setting");let k=0;switch(n){case"rainy":case"foggy":k=.9;case"snowy":k=.5}k>0&&(q=_(q,k),B=_(B,k));const J=e(q[0],q[1],q[2]),K=e(B[0],B[1],B[2]),Q=V(n);return{direct:{intensity:$[0]*Q.direct,color:J},ambient:{intensity:$[1]*Q.ambient,color:K},timeOfDay:U}}(s,b,d);else{const a=V(d);t={direct:{intensity:N.local.directAtNoon*a.direct,color:e(1,1,1)},ambient:{intensity:N.local.ambientAtNoon*a.ambient,color:e(1,1,1)},timeOfDay:"early afternoon"}}a(h.ambient.color,t.ambient.color,h.ambient.color,v),h.ambient.intensity=n(t.ambient.intensity,h.ambient.intensity,v),a(h.direct.color,t.direct.color,h.direct.color,v),h.direct.intensity=n(t.direct.intensity,h.direct.intensity,v),h.specularStrength="rainy"===d||"snowy"===d||"foggy"===d?0:1,h.environmentStrength="rainy"===d?.7:"snowy"===d||"foggy"===d?.75:1}h.noonFactor="sun"===f?function(t,e){const a=t.valueOf();let n,o;e.polarException===z.PolarException.MIDNIGHT_SUN?(n=a-60*(t.getHours()+48)*60*1e3-60*t.getMinutes()*1e3,o=n+432e6):e.polarException===z.PolarException.POLAR_NIGHT?(n=a-2,o=a-1):(n=e.sunrise.valueOf(),o=e.sunset.valueOf());const r=n+(o-n)/2;return 1-i(Math.abs(a-r)/432e5,0,1)}(s,b):1,"sun"===f?C(s,l,u,h.direct.directionToLightSource):function(e,a,n){a===p.Global?o(j,e.eye):t(j,0,0,1);c(L,U,e.viewRight),r(n,j,L),c(L,$,j),r(n,n,L)}(m,u,h.direct.directionToLightSource)}function C(e,a,n,o){const s=I,l=u(G);if(n===p.Global)z.getPosition(e,0,0,s),t(o,0,0,-1),d(l,l,-s.azimuth),m(l,l,-s.altitude),r(o,o,l);else{const n=N.planarDirection,c=n.globalAngles,u=a[2];let m=(Math.abs(u)-n.localAltitude)/(n.globalAltitude-n.localAltitude);m=i(m,0,1),m<1?(z.getPosition(e,a[1],a[0],s),s.azimuth=(1-m)*s.azimuth+m*c.azimuth,s.altitude=(1-m)*s.altitude+m*c.altitude):(s.azimuth=c.azimuth,s.altitude=c.altitude),t(o,0,-1,0),f(l,l,-s.azimuth),d(l,l,-s.altitude),r(o,o,l)}}function D(t,e){if(e===p.Global)return!0;const a=N.planarDirection;return Math.abs(t)<a.localAltitude}function O(t,e,a,n,i){const o=t.getTime(),r=e.getTime()-o,s=Math.floor(r/a)+1,c=new Array(s);for(let t=0;t<s;++t)H.setTime(o+a*t),c[t]=l(),C(H,n,i,c[t]);return c}const E=e(.5773502691896258,-.5773502691896258,.5773502691896258);class F{constructor(){this.ambient={color:e(1,1,1),intensity:.55},this.direct={color:e(1,1,1),intensity:.55,directionToLightSource:s(E)},this.noonFactor=.5,this.globalFactor=0,this.specularStrength=1,this.environmentStrength=1}}const G=h(),I={azimuth:0,altitude:0};function V(t){switch(t){case"disabled":case"sunny":case"cloudy":return{direct:1,ambient:1};case"rainy":return{direct:.4,ambient:1.2};case"snowy":return{direct:.5,ambient:1.3};case"foggy":return{direct:.2,ambient:1.6}}}function _(t,e){const a=(t[0]+t[1]+t[2])/3;for(let n=0;n<3;n++)t[n]=t[n]+(a-t[n])*e;return t}function R(t,e,a,n){const i=[];for(let o=0;o<a.length;o++)i[o]=(n[o]-a[o])*t/e+a[o];return i}const H=new Date(0),L=h(),j=l(),U=.35,$=-.5;var q,B;!function(t){t[t.Accumulate=0]="Accumulate",t[t.Visualize=1]="Visualize",t[t.VisualizeCurrent=2]="VisualizeCurrent",t[t.COUNT=3]="COUNT"}(q||(q={})),function(t){t[t.Gradient=0]="Gradient",t[t.Threshold=1]="Threshold"}(B||(B={}));const k=255;const J=Object.freeze({__proto__:null,get ShadowCastPass(){return q},get ShadowCastVisualization(){return B},shadowCastMaxSamples:255,build:function(t){const e=new v;e.fragment.include(b),e.fragment.include(x),e.include(M),e.include(g);const{pass:a}=t;if(a===q.Visualize){const{visualization:a,bandsEnabled:n}=t;e.fragment.constants.add("inverseSampleValue","float",255),e.fragment.uniforms.add("shadowCastMap","sampler2D"),e.fragment.uniforms.add("sampleScale","float"),e.fragment.uniforms.add("opacityFromElevation","float");const i=a===B.Gradient,o=a===B.Threshold;e.fragment.uniforms.add("uColor","vec4"),i?n&&e.fragment.uniforms.add("bandSize","float"):o&&e.fragment.uniforms.add("threshold","float"),e.fragment.code.add(y`
      void main(void) {
        vec4 record = texture2D(shadowCastMap, uv);
        float pixelSamples = record.r * inverseSampleValue;

        if (pixelSamples < 1.0) {
          discard;
        }

        float strength = pixelSamples * sampleScale;

        ${o?y`
            if (strength <= threshold) {
              discard;
            }`:""}

        ${i&&n?y`strength = ceil(strength / bandSize) * bandSize;`:""}

        gl_FragColor = vec4(uColor.xyz, uColor.a * opacityFromElevation ${i?y`* strength`:""});
      }
    `)}else a!==q.Accumulate&&a!==q.VisualizeCurrent||(e.include(w),e.fragment.uniforms.add("depthMap","sampler2D"),e.fragment.uniforms.add("inverseViewMatrix","mat4"),e.fragment.uniforms.add("nearFar","vec2"),a===q.Accumulate?e.fragment.constants.add("sampleValue","float",.00392156862745098):e.fragment.constants.add("shadowColor","vec4",[0,0,0,.8]),e.fragment.code.add(y`
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

        gl_FragColor = ${a===q.Accumulate?y`vec4(sampleValue)`:y`shadowColor`};
      }
    `));return e}});export{F as C,q as S,D as a,B as b,T as c,J as d,z as e,O as f,k as s};
