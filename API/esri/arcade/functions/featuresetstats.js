// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/languageUtils","./fieldStats","../../core/promiseUtils","../../core/sql/WhereClause"],function(p,g,n,h,q){function l(b,d,f,a,e,c){if(1===a.length){if(g.isArray(a[0]))return h.resolve(n.calculateStat(b,a[0],g.defaultUndefined(a[1],-1)));if(g.isImmutableArray(a[0]))return h.resolve(n.calculateStat(b,a[0].toArray(),g.defaultUndefined(a[1],-1)))}else if(2===a.length){if(g.isArray(a[0]))return h.resolve(n.calculateStat(b,a[0],g.defaultUndefined(a[1],-1)));if(g.isImmutableArray(a[0]))return h.resolve(n.calculateStat(b,
a[0].toArray(),g.defaultUndefined(a[1],-1)));if(g.isFeatureSet(a[0]))return a[0].load().then(m=>r(q.WhereClause.create(a[1],m.getFieldsIndex()),c,e).then(k=>a[0].calculateStatistic(b,k,g.defaultUndefined(a[2],1E3),d.abortSignal)))}else if(3===a.length&&g.isFeatureSet(a[0]))return a[0].load().then(m=>r(q.WhereClause.create(a[1],m.getFieldsIndex()),c,e).then(k=>a[0].calculateStatistic(b,k,g.defaultUndefined(a[2],1E3),d.abortSignal)));return h.resolve(n.calculateStat(b,a,-1))}function r(b,d,f){try{const a=
b.getVariables();if(0<a.length){const e=[];for(let c=0;c<a.length;c++)e.push(d.evaluateIdentifier(f,{name:a[c]}));return h.all(e).then(c=>{const m={};for(let k=0;k<a.length;k++)m[a[k]]=c[k];b.parameters=m;return b})}return h.resolve(b)}catch(a){return h.reject(a)}}p.registerFunctions=function(b){"async"===b.mode&&(b.functions.stdev=function(d,f){return b.standardFunctionAsync(d,f,function(a,e,c){return l("stdev",a,e,c,d,b)})},b.functions.variance=function(d,f){return b.standardFunctionAsync(d,f,function(a,
e,c){return l("variance",a,e,c,d,b)})},b.functions.average=function(d,f){return b.standardFunctionAsync(d,f,function(a,e,c){return l("mean",a,e,c,d,b)})},b.functions.mean=function(d,f){return b.standardFunctionAsync(d,f,function(a,e,c){return l("mean",a,e,c,d,b)})},b.functions.sum=function(d,f){return b.standardFunctionAsync(d,f,function(a,e,c){return l("sum",a,e,c,d,b)})},b.functions.min=function(d,f){return b.standardFunctionAsync(d,f,function(a,e,c){return l("min",a,e,c,d,b)})},b.functions.max=
function(d,f){return b.standardFunctionAsync(d,f,function(a,e,c){return l("max",a,e,c,d,b)})},b.functions.count=function(d,f){return b.standardFunctionAsync(d,f,function(a,e,c){g.pcCheck(c,1,1);if(g.isFeatureSet(c[0]))return c[0].count(a.abortSignal);if(g.isArray(c[0])||g.isString(c[0]))return c[0].length;if(g.isImmutableArray(c[0]))return c[0].length();throw Error("Invalid Parameters for Count");})})};Object.defineProperty(p,"__esModule",{value:!0})});