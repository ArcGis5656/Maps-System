// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../../../chunks/_rollupPluginBabelHelpers ../../../../core/maybe ../../../../core/promiseUtils ./Placement ./TileParser ../../tiling/enums".split(" "),function(m,p,q,r,t,e){return function(){function n(h,b,a,c){this.status=e.TileStatus.INITIALIZED;this.placementEngine=new r.PlacementEngine;this.tileKey=h;this.refKeys=b;this._workerTileHandler=a;this._styleRepository=c}var f=n.prototype;f.release=function(){this.tileKey="";this.refKeys=null;this.status=e.TileStatus.INITIALIZED;this._workerTileHandler=
null};f.parse=function(){var h=m._asyncToGenerator(function*(b,a){const c=a&&a.signal;if(p.isSome(c)){const k=()=>{c.removeEventListener("abort",k);this.status=e.TileStatus.INVALID};c.addEventListener("abort",k)}const l={bucketsWithData:[],emptyBuckets:null};try{var d=yield this._parse(b,a)}catch(k){if(q.isAbortError(k))throw k;return{result:l,transferList:[]}}this.status=e.TileStatus.READY;a=l.bucketsWithData;b=[];for(var g of d)g.hasFeatures()?(d=g.serialize(),a.push(d)):b.push(g.layer.uid);g=[...a];
d=null;0<b.length&&(d=Uint32Array.from(b),g.push(d.buffer));l.emptyBuckets=d;return{result:l,transferList:g}});return function(b,a){return h.apply(this,arguments)}}();f.setObsolete=function(){this.status=e.TileStatus.INVALID};f.getLayers=function(){return this._workerTileHandler.getLayers()};f.getWorkerTileHandler=function(){return this._workerTileHandler};f._parse=function(){var h=m._asyncToGenerator(function*(b,a){const c=b.sourceName2DataAndRefKey;if(0===Object.keys(c).length)return[];this.status=
e.TileStatus.MODIFIED;return(new t(c,this,a.client,this._styleRepository,b.styleLayerUIDs)).parse(a)});return function(b,a){return h.apply(this,arguments)}}();return n}()});