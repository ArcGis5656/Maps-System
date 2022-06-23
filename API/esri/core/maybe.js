// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports"],function(c){function f(a,b){return null!=a?b(a):null}function g(a,b,d){return null!=a?d(a):b}c.abortMaybe=function(a){null!=a&&a.abort();return null};c.applySome=f;c.assumeNonNull=function(a){return a};c.destroyMaybe=function(a){null!=a&&a.destroy();return null};c.disposeMaybe=function(a){null!=a&&a.dispose();return null};c.equalsMaybe=function(a,b){return null!=a&&null!=b?a.equals(b):a===b};c.filterNones=function(a){return a.filter(b=>null!=b)};c.forEachSome=function(a,b){for(const d of a)f(d,
b)};c.get=function(a,...b){for(let d=0;d<b.length&&a;++d)a=a[b[d]];return a};c.isNone=function(a){return null==a};c.isSome=function(a){return null!=a};c.isUndefined=function(a){return void 0===a};c.mapMany=function(a,b){const d=[];for(const e of a)d.push(g(e,null,b));return d};c.mapOr=g;c.mapSome=function(a,b){const d=[];a.forEach(e=>{e=b(e);null!=e&&d.push(e)});return d};c.mapSomeFirst=function(a,b){for(const d of a)if(a=b(d),null!=a)return a;return null};c.none=null;c.nullifyNonnullableForDispose=
function(a){return null};c.releaseMaybe=function(a){null!=a&&a.release();return null};c.removeMaybe=function(a){null!=a&&a.remove();return null};c.unwrap=function(a){return a};c.unwrapOr=function(a,b){return null!=a?a:"function"===typeof b?b():b};c.unwrapOrThrow=function(a,b){if(null==a)throw Error(b);return a};c.unwrapOrValue=function(a,b){return null!=a?a:b};Object.defineProperty(c,"__esModule",{value:!0})});