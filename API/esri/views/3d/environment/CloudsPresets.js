// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/Clouds.glsl"],function(c,a){let b=function(d,e,f,g,h,k,l,m,n=.5){this.coverage=d;this.density=e;this.absorption=f;this.cloudSize=g;this.detailSize=h;this.smoothness=k;this.cloudHeight=l;this.raymarchingStepType=m;this.median=n};a={sunny:new b([.1,.7],[.02,.02],[0,0],[.86,.86],[.8,.8],[.5,.5],[.05,.05],a.RayMarchingSteps.SIXTEEN),cloudy:new b([.24,.7],[.135,.2],[0,0],[.5,.5],[.65,.7],[.3,.3],[1,1],a.RayMarchingSteps.TWOHUNDRED),rainy:new b([.5,.9],[.2,.5],[.3,.6],
[.4,.4],[.7,.7],[.5,.5],[1,1],a.RayMarchingSteps.TWOHUNDRED),snowy:new b([.5,.9],[.2,.5],[0,0],[.4,.4],[.7,.7],[.5,.5],[1,1],a.RayMarchingSteps.TWOHUNDRED),foggy:new b([.8,.8],[.5,.5],[0,0],[.85,.85],[.75,.75],[.8,.8],[.3,.3],a.RayMarchingSteps.HUNDRED)};c.CloudPresets=b;c.cloudPresets=a;Object.defineProperty(c,"__esModule",{value:!0})});