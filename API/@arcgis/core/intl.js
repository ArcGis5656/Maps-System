/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{a as e,f as t}from"./chunks/number.js";export{c as convertDateFormatToIntlOptions,b as convertNumberFormatToIntlOptions,f as formatDate,a as formatNumber}from"./chunks/number.js";import{L as i}from"./chunks/Logger.js";import{g as u}from"./chunks/object.js";import{r as m}from"./chunks/string.js";export{g as getLocale,o as onLocaleChange,p as prefersRTL,s as setLocale}from"./chunks/locale.js";import{n as l,r as h}from"./chunks/messages.js";export{f as fetchMessageBundle,n as normalizeMessageBundleLocale,r as registerMessageBundleLoader}from"./chunks/messages.js";import d from"./request.js";import w from"./core/Error.js";import{i as j}from"./core/lang.js";import{g as k}from"./chunks/assets.js";import"./chunks/jsonMap.js";import"./config.js";import"./core/promiseUtils.js";import"./kernel.js";import"./core/urlUtils.js";const L=i.getLogger("esri.intl");function $(r,n,s={}){const{format:o={}}=s;return m(r,(r=>function(r,n,s){let o,a;const i=r.indexOf(":");-1===i?o=r.trim():(o=r.slice(0,i).trim(),a=r.slice(i+1).trim());if(!o)return"";const c=u(o,n);if(null==c)return"";const f=s[a]||s[o];if(f)return function(r,n){switch(n.type){case"date":return t(r,n.intlOptions);case"number":return e(r,n.intlOptions);default:return L.warn("missing format descriptor for key {key}"),y(r)}}(c,f);if(a)return function(r,n){switch(n.toLowerCase()){case"dateformat":return t(r);case"numberformat":return e(r);default:return L.warn(`inline format is unsupported since 4.12: ${n}`),/^(dateformat|datestring)/i.test(n)?t(r):/^numberformat/i.test(n)?e(r):y(r)}}(c,a);return y(c)}(r,n,o)))}function y(r){switch(typeof r){case"string":return r;case"number":return e(r);case"boolean":return""+r;default:return r instanceof Date?t(r):""}}async function x(e){if(j(R.fetchBundleAsset))return R.fetchBundleAsset(e);const t=await d(e,{responseType:"text"});return JSON.parse(t.data)}class B{constructor({base:e="",pattern:t,location:r=new URL(window.location.href)}){let n;n="string"==typeof r?e=>new URL(e,new URL(r,window.location.href)).href:r instanceof URL?e=>new URL(e,r).href:r,this.pattern="string"==typeof t?new RegExp(`^${t}`):t,this.getAssetUrl=n,e=e?e.endsWith("/")?e:e+"/":"",this.matcher=new RegExp(`^${e}(?:(.*)/)?(.*)$`)}fetchMessageBundle(e,t){return async function(e,t,r,n){const s=t.exec(r);if(!s)throw new w("esri-intl:invalid-bundle",`Bundle id "${r}" is not compatible with the pattern "${t}"`);const o=s[1]?`${s[1]}/`:"",a=s[2],i=l(n),c=`${o}${a}.json`,u=i?`${o}${a}_${i}.json`:c;let f;try{f=await x(e(u))}catch(t){if(u===c)throw new w("intl:unknown-bundle",`Bundle "${r}" cannot be loaded`,{error:t});try{f=await x(e(c))}catch(e){throw new w("intl:unknown-bundle",`Bundle "${r}" cannot be loaded`,{error:e})}}return f}(this.getAssetUrl,this.matcher,e,t)}}function U(e){return new B(e)}const R={};h(U({pattern:"esri/",location:k}));export{U as createJSONLoader,$ as substitute};
