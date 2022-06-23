// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(function(){return function(){function f(){this.bitsPerWord=32;this.addressBitsPerWord=5;this._store=[]}var d=f.prototype;d.clone=function(){const b=new f;b._store=this._store.slice();return b};d.wordIndex=function(b){return b>>this.addressBitsPerWord};d.set=function(b){return this._store[this.wordIndex(b-1)]|=1<<b-1};d.clear=function(b){return this._store[this.wordIndex(b-1)]&=255^1<<b-1};d.clearAll=function(){for(let b=0;b<this._store.length;++b)this._store[b]=0};d.get=function(b){return 0!==
(this._store[this.wordIndex(b-1)]&1<<b-1)};d.length=function(){return 0===this.wordLength()?0:this.bitsPerWord*(this.wordLength()-1)+(this._store[this.wordLength()-1].toString(2).length+1)};d.wordLength=function(){let b,c=this._store.length;for(let a=b=this._store.length-1;(0>=b?0>=a:0<=a)&&0===this._store[a];0>=b?a++:a--)c--;return c};d.store=function(){return this._store};d.cardinality=function(){let b=0;const c=this.length();for(let a=0;0<=c?a<=c:a>=c;0<=c?a++:a--)this.get(a)&&b++;return b};d.toString=
function(){const b=[],c=this.length();for(let a=0;0<=c?a<=c:a>=c;0<=c?a++:a--)this.get(a)&&b.push(""+a);return"{"+b.join(",")+"}"};d.toBinaryString=function(){const b=this,c=(a,e,g)=>{for(;a.length<g;)a=e+a;return a};return 0<this.wordLength()?this._store.map(a=>c(a.toString(2),"0",b.bitsPerWord)).join(""):c("","0",this.bitsPerWord)};d.or=function(b){if(this!==b){var c=Math.min(this.wordLength(),b.wordLength()),a=c-1;for(let e=0;0<=a?e<=a:e>=a;0<=a?e++:e--)this._store[e]|=b.store[e];c<b.wordLength()&&
(this._store=this._store.concat(b._store.slice(c,b.wordLength())));return null}};d.and=function(b){if(this!==b){var c=this.wordLength(),a=b.wordLength();for(let e=c;c<=a?e<=a:e>=a;c<=a?e++:e--)this._store[e]=0;c=this.wordLength();for(a=0;0<=c?a<=c:a>=c;0<=c?a++:a--)this._store[a]&=b.store[a];return null}};d.andNot=function(b){const c=Math.min(this.wordLength(),b.wordLength())-1;for(let a=0;0<=c?a<=c:a>=c;0<=c?a++:a--)this._store[a]&=~b.store[a];return null};d.xor=function(b){if(this!==b){var c=this.wordLength();
for(let a=0;0<=c?a<=c:a>=c;0<=c?a++:a--)this._store[a]^=b.store[a];return null}};return f}()});