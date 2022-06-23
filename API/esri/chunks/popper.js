// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","./dom"],function(V,ya){function F(a){return a?(a.nodeName||"").toLowerCase():null}function B(a){return null==a?window:"[object Window]"!==a.toString()?(a=a.ownerDocument)?a.defaultView||window:window:a}function M(a){var b=B(a).Element;return a instanceof b||a instanceof Element}function z(a){var b=B(a).HTMLElement;return a instanceof b||a instanceof HTMLElement}function ha(a){if("undefined"===typeof ShadowRoot)return!1;var b=B(a).ShadowRoot;return a instanceof b||a instanceof ShadowRoot}
function G(a){return a.split("-")[0]}function N(a,b){void 0===b&&(b=!1);var c=a.getBoundingClientRect(),d=1,e=1;z(a)&&b&&(b=a.offsetHeight,a=a.offsetWidth,0<a&&(d=O(c.width)/a||1),0<b&&(e=O(c.height)/b||1));return{width:c.width/d,height:c.height/e,top:c.top/e,right:c.right/d,bottom:c.bottom/e,left:c.left/d,x:c.left/d,y:c.top/e}}function aa(a){var b=N(a),c=a.offsetWidth,d=a.offsetHeight;1>=Math.abs(b.width-c)&&(c=b.width);1>=Math.abs(b.height-d)&&(d=b.height);return{x:a.offsetLeft,y:a.offsetTop,width:c,
height:d}}function ia(a,b){var c=b.getRootNode&&b.getRootNode();if(a.contains(b))return!0;if(c&&ha(c)){do{if(b&&a.isSameNode(b))return!0;b=b.parentNode||b.host}while(b)}return!1}function I(a){return B(a).getComputedStyle(a)}function K(a){return((M(a)?a.ownerDocument:a.document)||window.document).documentElement}function W(a){return"html"===F(a)?a:a.assignedSlot||a.parentNode||(ha(a)?a.host:null)||K(a)}function ja(a){return z(a)&&"fixed"!==I(a).position?a.offsetParent:null}function R(a){for(var b=
B(a),c=ja(a);c&&0<=["table","td","th"].indexOf(F(c))&&"static"===I(c).position;)c=ja(c);if(c&&("html"===F(c)||"body"===F(c)&&"static"===I(c).position))return b;if(!c)a:{c=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1===navigator.userAgent.indexOf("Trident")||!z(a)||"fixed"!==I(a).position)for(a=W(a);z(a)&&0>["html","body"].indexOf(F(a));){var d=I(a);if("none"!==d.transform||"none"!==d.perspective||"paint"===d.contain||-1!==["transform","perspective"].indexOf(d.willChange)||c&&"filter"===
d.willChange||c&&d.filter&&"none"!==d.filter){c=a;break a}else a=a.parentNode}c=null}return c||b}function ba(a){return 0<=["top","bottom"].indexOf(a)?"x":"y"}function ka(a){return Object.assign({},{top:0,right:0,bottom:0,left:0},a)}function la(a,b){return b.reduce(function(c,d){c[d]=a;return c},{})}function P(a){return a.split("-")[1]}function ma(a){var b,c=a.popper,d=a.popperRect,e=a.placement,f=a.variation,g=a.offsets,k=a.position,n=a.gpuAcceleration,l=a.adaptive,m=a.roundOffsets,q=a.isFixed;a=
g.x;a=void 0===a?0:a;var p=g.y,h=void 0===p?0:p;p="function"===typeof m?m({x:a,y:h}):{x:a,y:h};a=p.x;h=p.y;p=g.hasOwnProperty("x");g=g.hasOwnProperty("y");var u="left",v="top",w=window;if(l){var t=R(c),C="clientHeight",x="clientWidth";t===B(c)&&(t=K(c),"static"!==I(t).position&&"absolute"===k&&(C="scrollHeight",x="scrollWidth"));if("top"===e||("left"===e||"right"===e)&&"end"===f)v="bottom",h-=(q&&w.visualViewport?w.visualViewport.height:t[C])-d.height,h*=n?1:-1;if("left"===e||("top"===e||"bottom"===
e)&&"end"===f)u="right",a-=(q&&w.visualViewport?w.visualViewport.width:t[x])-d.width,a*=n?1:-1}c=Object.assign({position:k},l&&za);!0===m?(m=h,d=window.devicePixelRatio||1,a={x:O(a*d)/d||0,y:O(m*d)/d||0}):a={x:a,y:h};m=a;a=m.x;h=m.y;if(n){var r;return Object.assign({},c,(r={},r[v]=g?"0":"",r[u]=p?"0":"",r.transform=1>=(w.devicePixelRatio||1)?"translate("+a+"px, "+h+"px)":"translate3d("+a+"px, "+h+"px, 0)",r))}return Object.assign({},c,(b={},b[v]=g?h+"px":"",b[u]=p?a+"px":"",b.transform="",b))}function X(a){return a.replace(/left|right|bottom|top/g,
function(b){return Aa[b]})}function na(a){return a.replace(/start|end/g,function(b){return Ba[b]})}function ca(a){a=B(a);return{scrollLeft:a.pageXOffset,scrollTop:a.pageYOffset}}function da(a){return N(K(a)).left+ca(a).scrollLeft}function ea(a){a=I(a);return/auto|scroll|overlay|hidden/.test(a.overflow+a.overflowY+a.overflowX)}function oa(a){return 0<=["html","body","#document"].indexOf(F(a))?a.ownerDocument.body:z(a)&&ea(a)?a:oa(W(a))}function S(a,b){var c;void 0===b&&(b=[]);var d=oa(a);a=d===(null==
(c=a.ownerDocument)?void 0:c.body);c=B(d);d=a?[c].concat(c.visualViewport||[],ea(d)?d:[]):d;b=b.concat(d);return a?b:b.concat(S(W(d)))}function fa(a){return Object.assign({},a,{left:a.x,top:a.y,right:a.x+a.width,bottom:a.y+a.height})}function pa(a,b){if("viewport"===b){b=B(a);var c=K(a);b=b.visualViewport;var d=c.clientWidth;c=c.clientHeight;var e=0,f=0;b&&(d=b.width,c=b.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(e=b.offsetLeft,f=b.offsetTop));a={width:d,height:c,x:e+da(a),
y:f};a=fa(a)}else M(b)?(a=N(b),a.top+=b.clientTop,a.left+=b.clientLeft,a.bottom=a.top+b.clientHeight,a.right=a.left+b.clientWidth,a.width=b.clientWidth,a.height=b.clientHeight,a.x=a.left,a.y=a.top):(f=K(a),a=K(f),d=ca(f),b=null==(c=f.ownerDocument)?void 0:c.body,c=D(a.scrollWidth,a.clientWidth,b?b.scrollWidth:0,b?b.clientWidth:0),e=D(a.scrollHeight,a.clientHeight,b?b.scrollHeight:0,b?b.clientHeight:0),f=-d.scrollLeft+da(f),d=-d.scrollTop,"rtl"===I(b||a).direction&&(f+=D(a.clientWidth,b?b.clientWidth:
0)-c),a=fa({width:c,height:e,x:f,y:d}));return a}function Ca(a){var b=S(W(a)),c=0<=["absolute","fixed"].indexOf(I(a).position)&&z(a)?R(a):a;return M(c)?b.filter(function(d){return M(d)&&ia(d,c)&&"body"!==F(d)}):[]}function Da(a,b,c){b="clippingParents"===b?Ca(a):[].concat(b);c=[].concat(b,[c]);c=c.reduce(function(d,e){e=pa(a,e);d.top=D(e.top,d.top);d.right=L(e.right,d.right);d.bottom=L(e.bottom,d.bottom);d.left=D(e.left,d.left);return d},pa(a,c[0]));c.width=c.right-c.left;c.height=c.bottom-c.top;
c.x=c.left;c.y=c.top;return c}function qa(a){var b=a.reference,c=a.element,d=(a=a.placement)?G(a):null;a=a?P(a):null;var e=b.x+b.width/2-c.width/2,f=b.y+b.height/2-c.height/2;switch(d){case "top":e={x:e,y:b.y-c.height};break;case "bottom":e={x:e,y:b.y+b.height};break;case "right":e={x:b.x+b.width,y:f};break;case "left":e={x:b.x-c.width,y:f};break;default:e={x:b.x,y:b.y}}d=d?ba(d):null;if(null!=d)switch(f="y"===d?"height":"width",a){case "start":e[d]-=b[f]/2-c[f]/2;break;case "end":e[d]+=b[f]/2-c[f]/
2}return e}function T(a,b){void 0===b&&(b={});var c=b;b=c.placement;b=void 0===b?a.placement:b;var d=c.boundary,e=void 0===d?"clippingParents":d;d=c.rootBoundary;var f=void 0===d?"viewport":d;d=c.elementContext;d=void 0===d?"popper":d;var g=c.altBoundary,k=void 0===g?!1:g;c=c.padding;c=void 0===c?0:c;c=ka("number"!==typeof c?c:la(c,U));g=a.rects.popper;k=a.elements[k?"popper"===d?"reference":"popper":d];e=Da(M(k)?k:k.contextElement||K(a.elements.popper),e,f);f=N(a.elements.reference);k=qa({reference:f,
element:g,strategy:"absolute",placement:b});g=fa(Object.assign({},g,k));f="popper"===d?g:f;var n={top:e.top-f.top+c.top,bottom:f.bottom-e.bottom+c.bottom,left:e.left-f.left+c.left,right:f.right-e.right+c.right};a=a.modifiersData.offset;if("popper"===d&&a){var l=a[b];Object.keys(n).forEach(function(m){var q=0<=["right","bottom"].indexOf(m)?1:-1,p=0<=["top","bottom"].indexOf(m)?"y":"x";n[m]+=l[p]*q})}return n}function Ea(a,b){void 0===b&&(b={});var c=b.boundary,d=b.rootBoundary,e=b.padding,f=b.flipVariations,
g=b.allowedAutoPlacements,k=void 0===g?ra:g,n=P(b.placement);b=n?f?sa:sa.filter(function(m){return P(m)===n}):U;f=b.filter(function(m){return 0<=k.indexOf(m)});0===f.length&&(f=b);var l=f.reduce(function(m,q){m[q]=T(a,{placement:q,boundary:c,rootBoundary:d,padding:e})[G(q)];return m},{});return Object.keys(l).sort(function(m,q){return l[m]-l[q]})}function Fa(a){if("auto"===G(a))return[];var b=X(a);return[na(a),b,na(b)]}function ta(a,b,c){void 0===c&&(c={x:0,y:0});return{top:a.top-b.height-c.y,right:a.right-
b.width+c.x,bottom:a.bottom-b.height+c.y,left:a.left-b.width-c.x}}function ua(a){return["top","right","bottom","left"].some(function(b){return 0<=a[b]})}function Ga(a,b,c){void 0===c&&(c=!1);var d=z(b),e;if(e=z(b)){var f=b.getBoundingClientRect();e=O(f.width)/b.offsetWidth||1;f=O(f.height)/b.offsetHeight||1;e=1!==e||1!==f}f=e;e=K(b);a=N(a,f);f={scrollLeft:0,scrollTop:0};var g={x:0,y:0};if(d||!d&&!c){if("body"!==F(b)||ea(e))f=b!==B(b)&&z(b)?{scrollLeft:b.scrollLeft,scrollTop:b.scrollTop}:ca(b);z(b)?
(g=N(b,!0),g.x+=b.clientLeft,g.y+=b.clientTop):e&&(g.x=da(e))}return{x:a.left+f.scrollLeft-g.x,y:a.top+f.scrollTop-g.y,width:a.width,height:a.height}}function Ha(a){function b(f){d.add(f.name);[].concat(f.requires||[],f.requiresIfExists||[]).forEach(function(g){d.has(g)||(g=c.get(g))&&b(g)});e.push(f)}var c=new Map,d=new Set,e=[];a.forEach(function(f){c.set(f.name,f)});a.forEach(function(f){d.has(f.name)||b(f)});return e}function Ia(a){var b=Ha(a);return Ja.reduce(function(c,d){return c.concat(b.filter(function(e){return e.phase===
d}))},[])}function Ka(a){var b;return function(){b||(b=new Promise(function(c){Promise.resolve().then(function(){b=void 0;c(a())})}));return b}}function La(a){var b=a.reduce(function(c,d){var e=c[d.name];c[d.name]=e?Object.assign({},e,d,{options:Object.assign({},e.options,d.options),data:Object.assign({},e.data,d.data)}):d;return c},{});return Object.keys(b).map(function(c){return b[c]})}function va(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return!b.some(function(d){return!(d&&
"function"===typeof d.getBoundingClientRect)})}function wa(a,b){const c=["left","right"],d=["start","end"];"rtl"===ya.getElementDir(a)&&(c.reverse(),d.reverse());return b.replace(/-leading/gi,`-${d[0]}`).replace(/-trailing/gi,`-${d[1]}`).replace(/leading/gi,c[0]).replace(/trailing/gi,c[1])}var U=["top","bottom","right","left"],sa=U.reduce(function(a,b){return a.concat([b+"-start",b+"-end"])},[]),ra=[].concat(U,["auto"]).reduce(function(a,b){return a.concat([b,b+"-start",b+"-end"])},[]),Ja="beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "),
D=Math.max,L=Math.min,O=Math.round,za={top:"auto",right:"auto",bottom:"auto",left:"auto"},Y={passive:!0},Aa={left:"right",right:"left",bottom:"top",top:"bottom"},Ba={start:"end",end:"start"},xa={placement:"bottom",modifiers:[],strategy:"absolute"},Ma=function(a){void 0===a&&(a={});var b=a.defaultModifiers,c=void 0===b?[]:b;a=a.defaultOptions;var d=void 0===a?xa:a;return function(e,f,g){function k(){l.orderedModifiers.forEach(function(h){var u=h.name,v=h.options;v=void 0===v?{}:v;h=h.effect;"function"===
typeof h&&(u=h({state:l,name:u,instance:p,options:v}),m.push(u||function(){}))})}function n(){m.forEach(function(h){return h()});m=[]}void 0===g&&(g=d);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},xa,d),modifiersData:{},elements:{reference:e,popper:f},attributes:{},styles:{}},m=[],q=!1,p={state:l,setOptions:function(h){h="function"===typeof h?h(l.options):h;n();l.options=Object.assign({},d,l.options,h);l.scrollParents={reference:M(e)?S(e):e.contextElement?S(e.contextElement):
[],popper:S(f)};h=Ia(La([].concat(c,l.options.modifiers)));l.orderedModifiers=h.filter(function(u){return u.enabled});k();return p.update()},forceUpdate:function(){if(!q){var h=l.elements,u=h.reference;h=h.popper;if(va(u,h))for(l.rects={reference:Ga(u,R(h),"fixed"===l.options.strategy),popper:aa(h)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(t){return l.modifiersData[t.name]=Object.assign({},t.data)}),u=0;u<l.orderedModifiers.length;u++)if(!0===l.reset)l.reset=
!1,u=-1;else{var v=l.orderedModifiers[u];h=v.fn;var w=v.options;w=void 0===w?{}:w;v=v.name;"function"===typeof h&&(l=h({state:l,options:w,name:v,instance:p})||l)}}},update:Ka(function(){return new Promise(function(h){p.forceUpdate();h(l)})}),destroy:function(){n();q=!0}};if(!va(e,f))return p;p.setOptions(g).then(function(h){if(!q&&g.onFirstUpdate)g.onFirstUpdate(h)});return p}}({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(a){var b=a.state,c=a.instance;
a=a.options;var d=a.scroll,e=void 0===d?!0:d;a=a.resize;var f=void 0===a?!0:a,g=B(b.elements.popper),k=[].concat(b.scrollParents.reference,b.scrollParents.popper);e&&k.forEach(function(n){n.addEventListener("scroll",c.update,Y)});f&&g.addEventListener("resize",c.update,Y);return function(){e&&k.forEach(function(n){n.removeEventListener("scroll",c.update,Y)});f&&g.removeEventListener("resize",c.update,Y)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(a){var b=a.state;b.modifiersData[a.name]=
qa({reference:b.rects.reference,element:b.rects.popper,strategy:"absolute",placement:b.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(a){var b=a.state,c=a.options;a=c.gpuAcceleration;a=void 0===a?!0:a;var d=c.adaptive;d=void 0===d?!0:d;c=c.roundOffsets;c=void 0===c?!0:c;a={placement:G(b.placement),variation:P(b.placement),popper:b.elements.popper,popperRect:b.rects.popper,gpuAcceleration:a,isFixed:"fixed"===b.options.strategy};null!=b.modifiersData.popperOffsets&&
(b.styles.popper=Object.assign({},b.styles.popper,ma(Object.assign({},a,{offsets:b.modifiersData.popperOffsets,position:b.options.strategy,adaptive:d,roundOffsets:c}))));null!=b.modifiersData.arrow&&(b.styles.arrow=Object.assign({},b.styles.arrow,ma(Object.assign({},a,{offsets:b.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c}))));b.attributes.popper=Object.assign({},b.attributes.popper,{"data-popper-placement":b.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",
fn:function(a){var b=a.state;Object.keys(b.elements).forEach(function(c){var d=b.styles[c]||{},e=b.attributes[c]||{},f=b.elements[c];z(f)&&F(f)&&(Object.assign(f.style,d),Object.keys(e).forEach(function(g){var k=e[g];!1===k?f.removeAttribute(g):f.setAttribute(g,!0===k?"":k)}))})},effect:function(a){var b=a.state,c={popper:{position:b.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(b.elements.popper.style,c.popper);b.styles=c;b.elements.arrow&&
Object.assign(b.elements.arrow.style,c.arrow);return function(){Object.keys(b.elements).forEach(function(d){var e=b.elements[d],f=b.attributes[d]||{};d=Object.keys(b.styles.hasOwnProperty(d)?b.styles[d]:c[d]).reduce(function(g,k){g[k]="";return g},{});z(e)&&F(e)&&(Object.assign(e.style,d),Object.keys(f).forEach(function(g){e.removeAttribute(g)}))})}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(a){var b=a.state,c=a.name;a=a.options.offset;
var d=void 0===a?[0,0]:a;a=ra.reduce(function(g,k){var n=b.rects;var l=G(k);var m=0<=["left","top"].indexOf(l)?-1:1,q="function"===typeof d?d(Object.assign({},n,{placement:k})):d;n=q[0];q=q[1];n=n||0;q=(q||0)*m;l=0<=["left","right"].indexOf(l)?{x:q,y:n}:{x:n,y:q};g[k]=l;return g},{});var e=a[b.placement],f=e.x;e=e.y;null!=b.modifiersData.popperOffsets&&(b.modifiersData.popperOffsets.x+=f,b.modifiersData.popperOffsets.y+=e);b.modifiersData[c]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(a){var b=
a.state,c=a.options;a=a.name;if(!b.modifiersData[a]._skip){var d=c.mainAxis;d=void 0===d?!0:d;var e=c.altAxis;e=void 0===e?!0:e;var f=c.fallbackPlacements,g=c.padding,k=c.boundary,n=c.rootBoundary,l=c.altBoundary,m=c.flipVariations,q=void 0===m?!0:m,p=c.allowedAutoPlacements;c=b.options.placement;m=G(c);f=f||(m!==c&&q?Fa(c):[X(c)]);var h=[c].concat(f).reduce(function(E,H){return E.concat("auto"===G(H)?Ea(b,{placement:H,boundary:k,rootBoundary:n,padding:g,flipVariations:q,allowedAutoPlacements:p}):
H)},[]);c=b.rects.reference;f=b.rects.popper;var u=new Map;m=!0;for(var v=h[0],w=0;w<h.length;w++){var t=h[w],C=G(t),x="start"===P(t),r=0<=["top","bottom"].indexOf(C),J=r?"width":"height",Q=T(b,{placement:t,boundary:k,rootBoundary:n,altBoundary:l,padding:g});x=r?x?"right":"left":x?"bottom":"top";c[J]>f[J]&&(x=X(x));J=X(x);r=[];d&&r.push(0>=Q[C]);e&&r.push(0>=Q[x],0>=Q[J]);if(r.every(function(E){return E})){v=t;m=!1;break}u.set(t,r)}if(m)for(d=function(E){var H=h.find(function(y){if(y=u.get(y))return y.slice(0,
E).every(function(Z){return Z})});if(H)return v=H,"break"},e=q?3:1;0<e&&"break"!==d(e);e--);b.placement!==v&&(b.modifiersData[a]._skip=!0,b.placement=v,b.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(a){var b=a.state,c=a.options;a=a.name;var d=c.mainAxis,e=void 0===d?!0:d;d=c.altAxis;var f=void 0===d?!1:d;d=c.tether;var g=void 0===d?!0:d;d=c.tetherOffset;var k=void 0===d?0:d,n=T(b,{boundary:c.boundary,rootBoundary:c.rootBoundary,
padding:c.padding,altBoundary:c.altBoundary}),l=G(b.placement),m=P(b.placement),q=!m,p=ba(l);c="x"===p?"y":"x";d=b.modifiersData.popperOffsets;var h=b.rects.reference,u=b.rects.popper;k="function"===typeof k?k(Object.assign({},b.rects,{placement:b.placement})):k;var v="number"===typeof k?{mainAxis:k,altAxis:k}:Object.assign({mainAxis:0,altAxis:0},k),w=b.modifiersData.offset?b.modifiersData.offset[b.placement]:null;k={x:0,y:0};if(d){if(e){var t,C="y"===p?"top":"left",x="y"===p?"bottom":"right",r="y"===
p?"height":"width";e=d[p];var J=e+n[C],Q=e-n[x],E=g?-u[r]/2:0,H="start"===m?h[r]:u[r];m="start"===m?-u[r]:-h[r];var y=b.elements.arrow;y=g&&y?aa(y):{width:0,height:0};var Z=b.modifiersData["arrow#persistent"]?b.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0};C=Z[C];x=Z[x];y=D(0,L(h[r],y[r]));H=q?h[r]/2-E-y-C-v.mainAxis:H-y-C-v.mainAxis;q=q?-h[r]/2+E+y+x+v.mainAxis:m+y+x+v.mainAxis;r=(r=b.elements.arrow&&R(b.elements.arrow))?"y"===p?r.clientTop||0:r.clientLeft||0:0;E=null!=
(t=null==w?void 0:w[p])?t:0;t=e+q-E;J=g?L(J,e+H-E-r):J;t=g?D(Q,t):Q;t=D(J,L(e,t));d[p]=t;k[p]=t-e}if(f){var A;f=d[c];e="y"===c?"height":"width";t=f+n["x"===p?"top":"left"];n=f-n["x"===p?"bottom":"right"];l=-1!==["top","left"].indexOf(l);p=null!=(A=null==w?void 0:w[c])?A:0;A=l?t:f-h[e]-u[e]-p+v.altAxis;h=l?f+h[e]+u[e]-p-v.altAxis:n;g&&l?(A=D(A,L(f,h)),A=A>h?h:A):A=D(g?A:t,L(f,g?h:n));d[c]=A;k[c]=A-f}b.modifiersData[a]=k}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(a){var b,
c=a.state,d=a.name,e=a.options,f=c.elements.arrow,g=c.modifiersData.popperOffsets,k=G(c.placement);a=ba(k);k=0<=["left","right"].indexOf(k)?"height":"width";if(f&&g){e=e.padding;e="function"===typeof e?e(Object.assign({},c.rects,{placement:c.placement})):e;e=ka("number"!==typeof e?e:la(e,U));var n=aa(f),l="y"===a?"top":"left",m="y"===a?"bottom":"right",q=c.rects.reference[k]+c.rects.reference[a]-g[a]-c.rects.popper[k];g=g[a]-c.rects.reference[a];f=(f=R(f))?"y"===a?f.clientHeight||0:f.clientWidth||
0:0;g=f/2-n[k]/2+(q/2-g/2);k=D(e[l],L(g,f-n[k]-e[m]));c.modifiersData[d]=(b={},b[a]=k,b.centerOffset=k-g,b)}},effect:function(a){var b=a.state;a=a.options.element;a=void 0===a?"[data-popper-arrow]":a;if(null!=a){if("string"===typeof a&&(a=b.elements.popper.querySelector(a),!a))return;ia(b.elements.popper,a)&&(b.elements.arrow=a)}},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(a){var b=a.state;
a=a.name;var c=b.rects.reference,d=b.rects.popper,e=b.modifiersData.preventOverflow,f=T(b,{elementContext:"reference"}),g=T(b,{altBoundary:!0});c=ta(f,c);d=ta(g,d,e);e=ua(c);g=ua(d);b.modifiersData[a]={referenceClippingOffsets:c,popperEscapeOffsets:d,isReferenceHidden:e,hasPopperEscaped:g};b.attributes.popper=Object.assign({},b.attributes.popper,{"data-popper-reference-hidden":e,"data-popper-escaped":g})}}]});const Na=Math.ceil(Math.sqrt(Math.pow(4,2)+Math.pow(4,2)));V.CSS={animation:"calcite-popper-anim",
animationActive:"calcite-popper-anim--active"};V.createPopper=function({referenceEl:a,el:b,placement:c,overlayPositioning:d="absolute",modifiers:e}){return a?Ma(a,b,{strategy:d,placement:wa(b,c),modifiers:e}):null};V.defaultOffsetDistance=Na;V.updatePopper=async function({el:a,modifiers:b,placement:c,popper:d}){a=wa(a,c);await d.setOptions({modifiers:b,placement:a})}});