// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/_rollupPluginBabelHelpers ../../../Color ../../../symbols ../../../renderers/support/numberUtils ../../../symbols/support/cimSymbolUtils ../../../symbols/support/utils ./utils ../../support/widgetThemeUtils".split(" "),function(L,B,v,U,M,r,V,E,N,W){function X(a,b){const c=a.length-1;return a.map((d,g)=>N.createStopLabel(d,g,c,b))}function F(){F=v._asyncToGenerator(function*(a,b,c,d,g,m){var k,f,h=b.legendOptions;h=h&&h.customValues;const l=yield Y(a,c);var e=
null!=b.minSize&&null!=b.maxSize;c=b.stops&&1<b.stops.length;var n=!!b.target;if(l&&(h||e||c&&!n)){var q=E.isVolumetricSymbol(l),u=null,y=e=null;e=q&&!c?r.round([b.minDataValue,b.maxDataValue]):h||(yield Z(b,l,d,g));h=null==a?void 0:a.authoringInfo;var z=(n="univariate-color-size"===(null==h?void 0:h.type))&&"above-and-below"===(null==h?void 0:h.univariateTheme);!e&&c&&(e=b.stops.map(p=>p.value),u=b.stops.some(p=>!!p.label),"flow"===a.type&&(e=r.round(e)),u&&(y=b.stops.map(p=>p.label)));q&&2<(null==
(k=e)?void 0:k.length)&&!z&&(e=[e[0],e[e.length-1]]);if(!e)return null;n&&5!==(null==(f=e)?void 0:f.length)&&(e=O({minSize:e[0],maxSize:e[e.length-1]}));var C=q?aa(a,e):null,D=E.getSymbolOutlineSize(l),G=u?null:X(e,m);return(yield Promise.all(e.map(function(){var p=v._asyncToGenerator(function*(t,A){const P=q?C[A]:yield w(b,l,t,d,g),da=ba(z&&"class-breaks"===a.type?ca(a,A):l,P);return{value:t,symbol:da,label:u?y[A]:G[A],size:P,outlineSize:D}});return function(t,A){return p.apply(this,arguments)}}()))).reverse()}});
return F.apply(this,arguments)}function aa(a,b){a=null==a?void 0:a.authoringInfo;const c="univariate-color-size"===(null==a?void 0:a.type);let d=[12,30];if(c){const g=b[0],m=b[b.length-1];d=b.map(k=>12+(k-g)/(m-g)*18)}c&&"below"===(null==a?void 0:a.univariateTheme)&&d.reverse();return d}function ca(a,b){const c=a.classBreakInfos,d=c.length;b=2>d||!(2<=b)?c[0].symbol.clone():c[d-1].symbol.clone();a.visualVariables.some(g=>"color"===g.type)&&(-1<b.type.indexOf("3d")?Q(b):R(b));return b}function Y(a,
b){return H.apply(this,arguments)}function H(){H=v._asyncToGenerator(function*(a,b){if("flow"===a.type)return N.getSymbolForFlowRenderer(a,b);let c=null,d=null;"simple"===a.type?c=a.symbol:"class-breaks"===a.type?(c=(a=a.classBreakInfos)&&a[0]&&a[0].symbol,d=1<a.length):"unique-value"===a.type&&(c=(a=a.uniqueValueInfos)&&a[0]&&a[0].symbol,d=1<a.length);if(!c||ea(c))return null;c=c.clone();if(b||d)-1<c.type.indexOf("3d")?Q(c):R(c);return c});return H.apply(this,arguments)}function ea(a){return a?M.isSymbol3D(a)?
a.symbolLayers?a.symbolLayers.some(b=>b&&"fill"===b.type):!1:-1!==a.type.indexOf("fill"):!1}function Q(a){"line-3d"===a.type?a.symbolLayers.forEach(b=>{b.material={color:x}}):a.symbolLayers.forEach(b=>{"icon"!==b.type||b.resource&&b.resource.href?b.material={color:S}:(b.material={color:T},b.outline={color:x,size:1.5})})}function R(a){const b=W.isDarkTheme();if("cim"===a.type)V.applyCIMSymbolColor(a,new U(S));else if(-1!==a.type.indexOf("line"))a.color=x;else if(a.color=b?x:T,"simple-marker"===a.type)if(a.outline){var c,
d;"#ffffff"===(null==(c=a.outline)?void 0:null==(d=c.color)?void 0:d.toHex())&&(a.outline.color=x)}else a.outline={color:x,width:1.5}}function Z(a,b,c,d){return I.apply(this,arguments)}function I(){I=v._asyncToGenerator(function*(a,b,c,d){const g=(yield new Promise((f,h)=>L(["../../../renderers/visualVariables/support/visualVariableUtils"],f,h))).getSizeRangeAtScale(a,c,d),m=g&&O(g);if(g||m){var k=m.map(f=>{{const h=g.minSize,l=g.maxSize,e=a.minDataValue,n=a.maxDataValue;let q=null;f=q=f<=h?e:f>=
l?n:(f-h)/(l-h)*(n-e)+e}return f});k=r.round(k);for(let f=1;f<k.length-1;f++){const h=yield fa(a,b,k[f],k[f-1],c,d);h&&(k[f]=h[0],m[f]=h[1])}return k}});return I.apply(this,arguments)}function O(a){const b=a.minSize;a=(a.maxSize-b)/4;const c=[];for(let d=0;5>d;d++)c.push(b+a*d);return c}function fa(a,b,c,d,g,m){return J.apply(this,arguments)}function J(){J=v._asyncToGenerator(function*(a,b,c,d,g,m){const k=yield w(a,b,c,g,m);d=yield w(a,b,d,g,m);var f=r.numDigits(c),h=f.fractional,l=f.integer;let e=
f=null;0<c&&1>c&&(f=10**h,c*=f,l=r.numDigits(c).integer);for(h=l-1;0<=h;h--){var n=10**h;l=Math.floor(c/n)*n;n*=Math.ceil(c/n);null!=f&&(l/=f,n/=f);let q=(l+n)/2;[,q]=r.round([l,q,n],{indexes:[1]});const u=yield w(a,b,l,g,m),y=yield w(a,b,n,g,m),z=yield w(a,b,q,g,m),C=r.percentChange(k,u,d,null),D=r.percentChange(k,y,d,null),G=r.percentChange(k,z,d,null);let p=20>=C.previous,t=20>=D.previous;p&&t&&(C.previous<=D.previous?(p=!0,t=!1):(t=!0,p=!1));p?e=[l,u]:t?e=[n,y]:20>=G.previous&&(e=[q,z]);if(e)break}return e});
return J.apply(this,arguments)}function w(a,b,c,d,g){return K.apply(this,arguments)}function K(){K=v._asyncToGenerator(function*(a,b,c,d,g){const {getSize:m}=yield new Promise((k,f)=>L(["../../../renderers/visualVariables/support/visualVariableUtils"],k,f));return m(a,c,{scale:d,view:g,shape:"simple-marker"===b.type?b.style:null})});return K.apply(this,arguments)}function ba(a,b){a=a.clone();if(M.isSymbol3D(a))E.isVolumetricSymbol(a)||a.symbolLayers.forEach(c=>{"fill"!==c.type&&(c.size=b)});else if("esri.symbols.SimpleMarkerSymbol"===
a.declaredClass)a.size=b;else if("esri.symbols.PictureMarkerSymbol"===a.declaredClass){const c=a.width,d=a.height;a.height=b;a.width=c/d*b}else"esri.symbols.SimpleLineSymbol"===a.declaredClass?a.width=b:"esri.symbols.TextSymbol"===a.declaredClass&&a.font&&(a.font.size=b);return a}const T=[255,255,255],S=[200,200,200],x=[128,128,128];B.REAL_WORLD_MAX_SIZE=30;B.REAL_WORLD_MIN_SIZE=12;B.getRampStops=function(a,b,c,d,g,m){return F.apply(this,arguments)};Object.defineProperty(B,"__esModule",{value:!0})});