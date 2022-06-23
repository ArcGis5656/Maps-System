// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/languageUtils ../support/FeatureSet ../support/IdSet ../support/OrderbyClause ../../../core/promiseUtils".split(" "),function(u,n,r,p,v,q){return function(t){function k(a){var b=t.call(this,a)||this;b._orderbyclause=null;b.declaredClass="esri.arcade.featureset.actions.OrderBy";b._maxProcessing=100;b._orderbyclause=a.orderbyclause;b._parent=a.parentfeatureset;return b}u._inheritsLoose(k,t);var g=k.prototype;g._getSet=function(a){return null===
this._wset?this._ensureLoaded().then(()=>this._getFilteredSet("",null,null,this._orderbyclause,a)).then(b=>{this._checkCancelled(a);return this._wset=b}):q.resolve(this._wset)};g.manualOrderSet=function(a,b){return this.getIdColumnDictionary(a,[],-1,b).then(c=>{this._orderbyclause.order(c);const d=new p([],[],!0,null);for(let e=0;e<c.length;e++)d._known.push(c[e].id);return d})};g.getIdColumnDictionary=function(a,b,c,d){if(c<a._known.length-1){var e=this._maxQueryRate();if("GETPAGES"===a._known[c+
1])return n.tick(this._parent._expandPagedSet(a,e,0,0,d)).then(()=>this.getIdColumnDictionary(a,b,c,d));e=c+1;const f=[];for(;e<a._known.length&&"GETPAGES"!==a._known[e];)f.push(a._known[e]),e++;c+=f.length;return n.tick(this._parent._getFeatureBatch(f,d)).then(l=>{this._checkCancelled(d);for(const m of l)b.push({id:m.attributes[this.objectIdField],feature:m});return this.getIdColumnDictionary(a,b,c,d)})}return 0<a._candidates.length?n.tick(this._refineSetBlock(a,this._maxProcessingRate(),d)).then(()=>
{this._checkCancelled(d);return this.getIdColumnDictionary(a,b,c,d)}):q.resolve(b)};g._isInFeatureSet=function(a){return this._parent._isInFeatureSet(a)};g._getFeatures=function(a,b,c,d){return this._parent._getFeatures(a,b,c,d)};g._featureFromCache=function(a){if(void 0===this._featureCache[a]){const b=this._parent._featureFromCache(a);return void 0===b?void 0:null===b?null:this._featureCache[a]=b}return this._featureCache[a]};g._fetchAndRefineFeatures=function(){return q.reject(Error("Fetch and Refine should not be called in this featureset"))};
g._getFilteredSet=function(a,b,c,d,e){return this._ensureLoaded().then(()=>this._parent._getFilteredSet(a,b,c,null===d?this._orderbyclause:d,e)).then(f=>{this._checkCancelled(e);const l=new p(f._candidates.slice(0),f._known.slice(0),f._ordered,this._clonePageDefinition(f.pagesDefinition));let m=!0;0<f._candidates.length&&(m=!1);return!1===l._ordered?this.manualOrderSet(l,e).then(h=>{!1!==m||null===b&&null===c||(h=new p(h._candidates.slice(0).concat(h._known.slice(0)),[],h._ordered,this._clonePageDefinition(h.pagesDefinition)));
return h}):l})};k.registerAction=function(){r._featuresetFunctions.orderBy=function(a){return""===a?this:new k({parentfeatureset:this,orderbyclause:new v(a)})}};return k}(r)});