// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","../Error","../maybe"],function(k,q,l,r){let g;k.execute=function(f,c){let a=c.responseType;a?"array-buffer"!==a&&"blob"!==a&&"json"!==a&&"native"!==a&&"native-request-init"!==a&&"text"!==a&&(a="text"):a="json";c.responseType=a;const m=r.unwrap(c.signal);delete c.signal;return globalThis.invokeStaticMessage("request",{url:f,options:c},{signal:m}).then(function(){var t=q._asyncToGenerator(function*(b){let e,n,h;if(b.data)if(b.data instanceof
ArrayBuffer){if("json"===a||"text"===a||"blob"===a){var d=new Blob([b.data]);if("json"===a||"text"===a)if(g||(g=new FileReaderSync),h=g.readAsText(d),"json"===a){try{e=JSON.parse(h||null)}catch(p){throw new l("request:server",p.message,{...p,url:f,requestOptions:c});}if(e.error)throw new l("request:server",e.error.message,{...e.error,url:f,requestOptions:c});}}}else"native"===a&&(b.data.signal=m,n=yield fetch(b.data.url,b.data));switch(a){case "blob":break;case "json":d=e;break;case "native":d=n;
break;case "text":d=h;break;default:d=b.data}return{data:d,requestOptions:c,ssl:b.ssl,url:f}});return function(b){return t.apply(this,arguments)}}())};Object.defineProperty(k,"__esModule",{value:!0})});