// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/languageUtils","./shared","./sqlUtils","../../../core/promiseUtils"],function(h,y,p,r,m){function n(b){let a=0;for(let c=0;c<b.length;c++)a+=b[c];return a/b.length}function t(b){const a=n(b);let c=0;for(let d=0;d<b.length;d++)c+=(a-b[d])**2;return c/b.length}function u(b){const a=n(b);let c=0;for(let d=0;d<b.length;d++)c+=(a-b[d])**2;return c/(b.length-1)}function v(b){let a=0;for(let c=0;c<b.length;c++)a+=b[c];return a}function l(b,a,c,d=!1){try{const e=b.iterator(c);
return m.create((f,g)=>{w(e,[],a,d,f,g)})}catch(e){return m.reject(e)}}function w(b,a,c,d,e,f){y.tick(b.next().then(g=>{try{if(null!==g){const k=c.calculateValue(g);null===k?!1===d&&(a[a.length]=k):a[a.length]=k;return w(b,a,c,d,e,f)}e(a)}catch(k){f(k)}},f))}function x(b,a,c,d,e){return b.next().then(f=>null!==f?(f=d.calculateValue(f),void 0!==f&&null!==f&&void 0===a[f]&&(c.push(f),a[f]=1),c.length>=e&&-1!==e?c:x(b,a,c,d,e)):c)}h.calculateStat=function(b,a,c=1E3){switch(b.toLowerCase()){case "distinct":a:{b=
[];const d={},e=[];for(let f=0;f<a.length;f++){if(void 0!==a[f]&&null!==a[f]){const g=a[f];if(p.isNumber(g)||p.isString(g))void 0===d[g]&&(b.push(g),d[g]=1);else{let k=!1;for(let q=0;q<e.length;q++)!0===p.equalityTest(e[q],g)&&(k=!0);!1===k&&(e.push(g),b.push(g))}}if(b.length>=c&&-1!==c){a=b;break a}}a=b}return a;case "avg":case "mean":return n(a);case "min":return Math.min.apply(Math,a);case "sum":return v(a);case "max":return Math.max.apply(Math,a);case "stdev":case "stddev":return Math.sqrt(t(a));
case "var":case "variance":return t(a);case "count":return a.length}return 0};h.count=function(b,a){try{return b.iterator(a).count()}catch(c){return m.reject(c)}};h.decodeStatType=function(b){switch(b.toLowerCase()){case "distinct":return"distinct";case "avg":case "mean":return"avg";case "min":return"min";case "sum":return"sum";case "max":return"max";case "stdev":case "stddev":return"stddev";case "var":case "variance":return"var";case "count":return"count"}return""};h.distinct=function(b,a,c=1E3,
d=null){try{const f=b.iterator(d);var e=x(f,{},[],a,c)}catch(f){e=m.reject(f)}return e};h.max=function(b,a,c){return l(b,a,c,!0).then(d=>0===d.length?null:Math.max.apply(Math,d))};h.mean=function(b,a,c){let d="";!1===r.isSingleField(a)&&(d=r.predictType(a,b.fields,null));return l(b,a,c,!0).then(e=>{if(0===e.length)return null;e=n(e);return null===e?e:"integer"===d?(e=+e,e=isFinite(e)?e-e%1||(0>e?-0:0===e?e:0):e,e):e})};h.min=function(b,a,c){return l(b,a,c,!0).then(d=>0===d.length?null:Math.min.apply(Math,
d))};h.stdev=function(b,a,c){return l(b,a,c,!0).then(d=>0===d.length?null:Math.sqrt(u(d)))};h.sum=function(b,a,c){return l(b,a,c,!0).then(d=>0===d.length?null:v(d))};h.variance=function(b,a,c){return l(b,a,c,!0).then(d=>0===d.length?null:u(d))};Object.defineProperty(h,"__esModule",{value:!0})});