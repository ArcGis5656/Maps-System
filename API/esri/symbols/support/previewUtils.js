// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../Color"],function(e,k){function h(b,a){return Math.round(Math.min(Math.max(b+191.25*a,0),255))}e.SymbolSizeDefaults=void 0;(function(b){b[b.size=22]="size";b[b.lineWidth=50]="lineWidth";b[b.maxSize=120]="maxSize";b[b.maxOutlineSize=80]="maxOutlineSize";b[b.tallSymbolWidth=20]="tallSymbolWidth"})(e.SymbolSizeDefaults||(e.SymbolSizeDefaults={}));e.adjustColorBrightness=function(b,a){if("type"in b&&("linear"===b.type||"pattern"===b.type))return b;b=new k(b);return new k([h(b.r,
a),h(b.g,a),h(b.b,a),b.a])};e.adjustColorComponentBrightness=h;e.getConeShapes=function(b,a){let c=a?e.SymbolSizeDefaults.tallSymbolWidth:b;a=a?4:6;c=c<=e.SymbolSizeDefaults.size?c-.5*a:c-a;a=.15*c;const d=c;b-=a;return[{type:"ellipse",cx:.5*c,cy:b,rx:.5*c,ry:a},{type:"path",path:[{command:"M",values:[.5*d,0]},{command:"L",values:[d,b]},{command:"L",values:[0,b]},{command:"Z",values:[]}]}]};e.getCubeShapes=function(b,a){let c=a?e.SymbolSizeDefaults.tallSymbolWidth:b;var d=a?4:6;d=c=c<=e.SymbolSizeDefaults.size?
c-.5*d:c-d;a=a?.35*c:.5*c;return[{type:"path",path:[{command:"M",values:[.5*d,0]},{command:"L",values:[d,.5*a]},{command:"L",values:[.5*d,a]},{command:"L",values:[0,.5*a]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[0,.5*a]},{command:"L",values:[.5*d,a]},{command:"L",values:[.5*d,b]},{command:"L",values:[0,b-.5*a]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.5*d,a]},{command:"L",values:[.5*d,b]},{command:"L",values:[d,b-.5*a]},{command:"L",values:[d,.5*
a]},{command:"Z",values:[]}]}]};e.getCylinderShapes=function(b,a){var c=a?e.SymbolSizeDefaults.tallSymbolWidth:b;a=a?4:6;c=c<=e.SymbolSizeDefaults.size?c-.5*a:c-a;a=.5*c;const d=.15*c;b-=d;return[{type:"ellipse",cx:.5*c,cy:b,rx:a,ry:d},{type:"path",path:[{command:"M",values:[0,d]},{command:"L",values:[0,b]},{command:"L",values:[c,b]},{command:"L",values:[c,d]},{command:"Z",values:[]}]},{type:"ellipse",cx:.5*c,cy:d,rx:a,ry:d}]};e.getDiamondShapes=function(b){var a=b;a=a<e.SymbolSizeDefaults.size?a-
2:a-4;const c=Math.floor(b/10)-1||1;return[{type:"path",path:[{command:"M",values:[.45*a,0]},{command:"L",values:[a,.5*b-c]},{command:"L",values:[.45*a-c,.5*b+c]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.45*a,0]},{command:"L",values:[.45*a-c,.5*b+c]},{command:"L",values:[0,.5*b-c]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[0,.5*b-c]},{command:"L",values:[.45*a-c,.5*b+c]},{command:"L",values:[.45*a,b]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",
values:[.45*a,b]},{command:"L",values:[a,.5*b-c]},{command:"L",values:[.45*a-c,.5*b+c]},{command:"Z",values:[]}]}]};e.getExtrudeSymbolShapes=function(b){const a=e.SymbolSizeDefaults.size;b*=.5;return[{type:"path",path:[{command:"M",values:[0,.35*a]},{command:"L",values:[.3*a,.7*a]},{command:"L",values:[.3*a,.7*a+b]},{command:"L",values:[0,.7*a+b-.35*a]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.3*a,.7*a]},{command:"L",values:[.3*a,.7*a+b]},{command:"L",values:[a,b]},{command:"L",
values:[a,0]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.3*a,0]},{command:"L",values:[a,0]},{command:"L",values:[.3*a,.7*a]},{command:"L",values:[0,.35*a]},{command:"Z",values:[]}]}]};e.getInvertedConeShapes=function(b){let a=b;a=a<e.SymbolSizeDefaults.size?a-3:a-6;const c=.15*a,d=a;return[{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[d,0]},{command:"L",values:[.5*d,b-c]},{command:"Z",values:[]}]},{type:"ellipse",cx:.5*a,cy:0,rx:.5*a,ry:c}]};e.getPathSymbolShapes=
function(b,a,c){var d=e.SymbolSizeDefaults.size;let f=d,g=d;1>b?f*=.75:1<b&&(g*=1.25);b=d;a&&c&&(f=g=b=d=0);return[{type:"path",path:[{command:"M",values:[b,0]},{command:"L",values:[c?b:.875*b,0]},{command:"L",values:[c?f-.5*b:0,g-.5*d]},{command:"L",values:[f-.5*b,g-.5*d]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[b,0]},{command:"L",values:[b,a?0:.125*d]},{command:"L",values:[f-.5*b,a?g-.5*d:d]},{command:"L",values:[f-.5*b,g-.5*d]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",
values:[f-.5*b,g-.5*d]},{command:"L",values:[c?f-.5*b:0,g-.5*d]},{command:"L",values:[c?f-.5*b:0,a?g-.5*d:d]},{command:"L",values:[f-.5*b,a?g-.5*d:d]},{command:"Z",values:[]}]}]};e.getTetrahedronShapes=function(b){var a=b;a=a<e.SymbolSizeDefaults.size?a-1:a-2;return[{type:"path",path:[{command:"M",values:[.45*b,0]},{command:"L",values:[b,a]},{command:"L",values:[.45*b,.6*a]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.45*b,0]},{command:"L",values:[.45*b,.6*a]},{command:"L",
values:[0,a]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[0,a]},{command:"L",values:[.45*b,.6*a]},{command:"L",values:[b,a]},{command:"Z",values:[]}]}]};e.getWaterSymbolShapes=function(){return[{type:"path",path:"M80,80.2v-27c-1.5,0.7-2.8,1.6-3.9,2.8c-1.8,2.1-4.4,3.3-7.1,3.5c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.4,3.6c-1.8,2.1-4.4,3.3-7.2,3.4C8.3,59.3,5.7,58,3.9,56c-1.1-1.2-2.4-2.1-3.9-2.8v27"},
{type:"path",path:"M11,59.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.4-3.6s5.1,1.3,7.4,3.6c1.8,2,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.3-3.6s5.1,1.3,7.4,3.6c1.8,2.1,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c1.1-1.2,2.4-2.1,3.9-2.8v-24c-1.5,0.7-2.8,1.6-3.9,2.8c-1.8,2.1-4.4,3.3-7.1,3.5c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.4,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-1.1-1.2-2.4-2.1-3.9-2.8v24c1.5,0.7,2.8,1.6,3.9,2.8C5.7,58,8.3,59.3,11,59.4z"},
{type:"path",path:"M11,35.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.4-3.6s5.1,1.3,7.4,3.6c1.8,2,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.3-3.6s5.1,1.3,7.4,3.6c1.8,2.1,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c1.1-1.2,2.4-2.1,3.9-2.8V3.6c-1.5,0.7-2.8,1.6-3.9,2.8c-2.2,2.1-4.6,3.4-7.1,3.4s-5-1.3-7.1-3.4s-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6S42.5,9.9,40,9.9s-5-1.3-7.1-3.4s-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.5,0-5-1.3-7.1-3.4C2.8,5.3,1.4,4.3,0,3.6v25.6c1.5,0.7,2.8,1.6,3.9,2.8C5.7,34.1,8.3,35.3,11,35.4z"}]};
e.shapes={fill:[{type:"path",path:"M -10,-10 L 10,0 L 10,10 L -10,10 L -10,-10 Z"}],squareFill:[{type:"path",path:"M -10,-10 L 10,-10 L 10,10 L -10,10 L -10,-10 Z"}],pathSymbol3DLayer:[{type:"path",path:"M 3,12 L 12,0 L 11,-2 L -4,5 L -1,5 L 1,7 L 3,10 L 3,12 Z"},{type:"circle",cx:-2,cy:10,r:5}],extrudeSymbol3DLayer:[{type:"path",path:"M -7,-5 L -2,0 L -2,7 L -7,3 L -7,-5 Z"},{type:"path",path:"M -2,0 L -2,7 L 10,-3 L 10,-10 L -2,0 Z"},{type:"path",path:"M -7,-5 L -2,0 L 10,-10 L -2,-10 L -7,-5 Z"}],
cone:[{type:"path",path:"M 0,-10 L -8,5 L -4,6.5 L 0,7 L 4,6.5 L 8,5 Z"}],tallCone:[{type:"path",path:"M 0,-9 L -3.5,7 L -1.5,7.8 L 0,8 L 1.5,7.8 L 3.5,7 L 0,-9 Z"}],invertedCone:[{type:"path",path:"M 0,7 L -8,-8 L 8,-8 Z"},{type:"path",path:"M -8,-8 L -4,-9.5 L 0,-10 L 4,-9.5 L 8,-8 L 4,-6.5 L 0,-6 L -4,-6.5 Z"}],cube:[{type:"path",path:"M -10,-7 L 0,-12 L 10,-7 L 0,-2 L -10,-7 Z"},{type:"path",path:"M -10,-7 L 0,-2 L 0,12 L -10,7 L -10,-7 Z"},{type:"path",path:"M 0,-2 L 10,-7 L 10,7 L 0,12 L 0,-2 Z"}],
tallCube:[{type:"path",path:"M -3.5,-8.5 L 0,-9.5 L 3.5,-8.5 L 0,-7.5 L -3.5,-8.5 Z"},{type:"path",path:"M -3.5,-8.5 L 0,-7.5 L 0,9 L -3.5,8 L -3.5,-8.5 Z"},{type:"path",path:"M 0,-7.5 L 3.5,-8.5 L 3.5,8 L 0,9 L 0,-7.5 Z"}],cylinder:[{type:"path",path:"M -8,-9 L -8,7 L -4,8.5 L 0,9 L 4,8.5 L 8,7 L 8,-9 Z"},{type:"ellipse",cx:0,cy:-9,rx:8,ry:2}],tallCylinder:[{type:"path",path:"M -3.5,-9 L -3.5,7 L -1.5,7.8 L 0,8 L 1.5,7.8 L 3.5,7 L 3.5,-9 Z"},{type:"ellipse",cx:0,cy:-9,rx:3.5,ry:1}],diamond:[{type:"path",
path:"M 0,-10 L 10,-1 L -1,1 L 0,-10 Z"},{type:"path",path:"M 0,-10 L -1,1 L -8,-1 L 0,-10 Z"},{type:"path",path:"M -1,1 L 0,10 L -8,-1 L -1,1 Z"},{type:"path",path:"M -1,0 L 0,10 L 10,-1 L -1,1 Z"}],tetrahedron:[{type:"path",path:"M 0,-10 L 10,7 L 0,0 L 0,-10 Z"},{type:"path",path:"M 0,-10 L 0,0 L -8,7 L 0,-10 Z"},{type:"path",path:"M 10,7 L 0,0 L -8,7 L 10,7 Z"}]};Object.defineProperty(e,"__esModule",{value:!0})});