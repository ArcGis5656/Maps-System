// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/vec3"],function(l,k){function r(d,b,e){for(;0<d;){const a=b.indexOf(d);if(0<=a)return a;d=e.getParentId(d)}return b.indexOf(d)}function t(d,b,e){const a=[b.remove[0]],c=[];for(;1===a.length;){const u=a.pop();c.length=0;for(let n=0;n<b.load.length;n++){let m=b.load[n];for(var h=e.getParentId(m);h!==u;)m=h,h=e.getParentId(m);h=a.indexOf(m);0>h&&(h=a.length,a.push(m),c.push([]));c[h].push(b.load[n])}}b.load=a;for(b=0;b<a.length;b++)1<c[b].length?d.push({remove:[a[b]],
load:c[b]}):a[b]=c[b][0]}const p=[!1],f=[null],q=[!1],g=[null];l.nodeDiff=function(d,b,e){for(var a=0;a<b.length;a++)q[a]=!1,g[a]=null;for(a=0;a<d.length;a++)p[a]=!1,f[a]=null;for(a=0;a<b.length;a++){var c=r(b[a],d,e);0<=c&&(q[a]=!0,null!=f[c]?f[c].push(b[a]):f[c]=[b[a]])}for(a=0;a<d.length;a++)c=r(d[a],b,e),0<=c&&(p[a]=!0,null!=g[c]?g[c].push(d[a]):g[c]=[d[a]]);e=[];for(a=0;a<d.length;a++)null!=f[a]||p[a]||e.push({load:[],remove:[d[a]]});for(a=0;a<b.length;a++)null!=g[a]||q[a]||e.push({load:[b[a]],
remove:[]});for(a=0;a<b.length;a++)null!=g[a]&&(1<g[a].length||g[a][0]!==b[a])&&e.push({load:[b[a]],remove:g[a]});for(b=0;b<d.length;b++)null!=f[b]&&(1<f[b].length||f[b][0]!==d[b])&&e.push({load:f[b],remove:[d[b]]});return e};l.sortFrontToBack=function(d,b,e){return d.sort((a,c)=>{if(0===a.load.length&&0===c.load.length)return 0;if(0===a.load.length)return-1;if(0===c.load.length)return 1;if(0===a.remove.length&&0===c.remove.length)return a=e.getRenderCenter(a.load[0]),c=e.getRenderCenter(c.load[0]),
k.dot(a,b)-k.dot(c,b);if(0===a.remove.length)return-1;if(0===c.remove.length)return 1;if(1===a.load.length&&1===c.load.length)return a=e.getRenderCenter(a.load[0]),c=e.getRenderCenter(c.load[0]),k.dot(a,b)-k.dot(c,b);if(1===a.load.length)return-1;if(1===c.load.length)return 1;a=e.getRenderCenter(a.remove[0]);c=e.getRenderCenter(c.remove[0]);return k.dot(a,b)-k.dot(c,b)})};l.splitWorkEntries=function(d,b,e){for(let a=0;a<d.length;++a){const c=d[a];c.load.length>b&&1===c.remove.length&&t(d,c,e)}};l.splitWorkEntry=
t;Object.defineProperty(l,"__esModule",{value:!0})});