/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import t from"../../core/Collection.js";import i from"../../core/Error.js";import{HandleOwner as l}from"../../core/HandleOwner.js";import{i as s}from"../../core/lang.js";import{createTask as r}from"../../core/promiseUtils.js";import{M as o}from"../../core/scheduling.js";import{init as n,watch as a}from"../../core/watchUtils.js";import{property as u}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import{subclass as h}from"../../core/accessorSupport/decorators/subclass.js";import{a as d,W as c}from"../../chunks/Widgets.js";import{G as v}from"../../chunks/GoTo.js";import"../../chunks/ArrayPool.js";import"../../chunks/Evented.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../chunks/nextTick.js";import"../../chunks/shared.js";import"../../core/Handles.js";import"../../core/reactiveUtils.js";import"../../chunks/JSONSupport.js";import"../../chunks/jsonMap.js";import"../../TimeExtent.js";import"../../chunks/timeUtils.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../TimeInterval.js";function f(e){return"esri.WebMap"===e.declaredClass}let p=class extends(v(l)){constructor(e){super(e),this.filterMenuOpen=!1,this.filterMenuType="site",this.filterMode="base-floors",this.levelsExpanded=!0,this.searchTerm=null,this.view=null,this._updateFloorFilterTask=null}initialize(){this.handles.add([n(this,"view.map",(e=>{s(this._updateFloorFilterTask)&&(this._updateFloorFilterTask.abort(),this._updateFloorFilterTask=null),this._updateFloorFilterTask=r((()=>this._updateFloorFilterFromMap(e).then((()=>{this._setInitialViewState()}))))})),n(this,"view",((e,t)=>{this._unregisterWidget(t),this._registerWidget(e),this._watchSearchResults(e)}),!0),a(this,"view.widthBreakpoint",(e=>{this._viewWidthBreakpoint=e})),a(this,"view.heightBreakpoint",(e=>{this._viewHeightBreakpoint=e}))])}destroy(){this._unregisterWidget(this.view),this.view=null,s(this._updateFloorFilterTask)&&(this._updateFloorFilterTask.abort(),this._updateFloorFilterTask=null)}set enabled(e){this._callOverride("enabled",e)}set facility(e){if(e&&this._isOverridden("facility")){const t=this.getFacility(e);this.hasMultipleSites&&(this.site=(null==t?void 0:t.siteId)||void 0)}this._callOverride("facility",e)}set filterFeatures(e){this._callOverride("filterFeatures",e)}set filterLayers(e){this._callOverride("filterLayers",e)}get hasFacilities(){var e,t,i,l;return(null==(e=this.filterLayers)?void 0:e.facilityLayer)&&(null==(t=this.filterFeatures)||null==(i=t.facilities)||null==(l=i.facilitiesInfo)?void 0:l.length)>0}get hasLevels(){var e,t,i,l;return(null==(e=this.filterLayers)?void 0:e.levelLayer)&&(null==(t=this.filterFeatures)||null==(i=t.levels)||null==(l=i.levelsInfo)?void 0:l.length)>0}get hasMultipleSites(){var e,t,i,l;return(null==(e=this.filterLayers)?void 0:e.siteLayer)&&(null==(t=this.filterFeatures)||null==(i=t.sites)||null==(l=i.sitesInfo)?void 0:l.length)>1}get isNormalMode(){let e=!0;const t=this._viewWidthBreakpoint,i=this._viewHeightBreakpoint;return"small"!==t&&"xsmall"!==t&&"xsmall"!==i||(e=!1),e}set level(e){if(!e)return this._callOverride("level",e),this.facility=void 0,this.site=void 0,void this.setFloors(null);let t=null,i=null;const l=null==e?void 0:e.split("--");var s;(null==l?void 0:l.length)>1&&"all"===l[0]?(i=l[1],t={id:e,facilityId:i,shortName:null,longName:null,levelNumber:null,verticalOrder:null}):(t=this.getLevel(e),i=null==(s=t)?void 0:s.facilityId);if(this.level!==e||this.isNormalMode||this.levelsExpanded){if(t&&this.hasFacilities&&this.hasLevels){var r;if(this.facility=i,this.hasMultipleSites)this.site=null==(r=this.getFacility(i))?void 0:r.siteId;this.setFloors(t)}else this._isOverridden("level")&&(this.facility=void 0,this.site=void 0,this.hasMultipleSites&&(this.filterMenuType="site"),this.setFloors(null));this._callOverride("level",e)}else{const e=this.getFacilityLevels(i);(null==e?void 0:e.length)>1&&(this.levelsExpanded=!0)}}set longNames(e){this._callOverride("longNames",e)}set minimized(e){this._callOverride("minimized",e)}set pinnedLevels(e){this._callOverride("pinnedLevels",e)}set site(e){this._callOverride("site",e)}get state(){return this.view&&this.filterFeatures&&this.hasFacilities&&this.hasLevels?"ready":this.view&&!this.filterFeatures?"loading":"disabled"}filterFacilities(e){let t=e;this.searchTerm&&(t=e.filter((e=>{const{name:t}=e;return t.toLowerCase().includes(this.searchTerm.toLowerCase())}))),this.site&&(t=t.filter((e=>e.siteId===this.site)));return t.sort(((e,t)=>{const i=e.name,l=t.name;return i>l?1:i===l?0:-1}))}filterSites(e){let t=e;this.searchTerm&&(t=e.filter((e=>{const{name:t}=e;return t.toLowerCase().includes(this.searchTerm.toLowerCase())})));return t.sort(((e,t)=>{const i=e.name,l=t.name;return i>l?1:i===l?0:-1}))}getBaseLevel(e){var t,i;const l=null==(t=this.filterFeatures)||null==(i=t.levels)?void 0:i.levelsInfo;let s=null;if(e){const{id:t}=e;l&&l.length>0&&l.forEach((e=>{0===e.verticalOrder&&e.facilityId===t&&(s=e)}))}return s}getFacility(e){var t,i,l,s;return null!=(t=null==(i=this.filterFeatures)||null==(l=i.facilities)||null==(s=l.facilitiesInfo)?void 0:s.find((t=>t.id===e)))?t:null}getFacilityLevels(e){var t,i;if(!e||null==(t=this.filterFeatures)||null==(i=t.levels)||!i.levelsInfo)return[];return this.filterFeatures.levels.levelsInfo.filter((t=>t.facilityId===e)).sort(((e,t)=>{const i=e.verticalOrder,l=t.verticalOrder;return i>l?-1:i===l?0:1}))}getLevel(e){var t,i,l,s;return null!=(t=null==(i=this.filterFeatures)||null==(l=i.levels)||null==(s=l.levelsInfo)?void 0:s.find((t=>t.id===e)))?t:null}getSite(e){var t,i,l,s;return null!=(t=null==(i=this.filterFeatures)||null==(l=i.sites)||null==(s=l.sitesInfo)?void 0:s.find((t=>t.id===e)))?t:null}goTo(e){const{view:t}=this;if(!t||!e)return;const{geometry:i}=e;if(i&&i.extent){const e={duration:o(1e3),easing:"out-back"},t={target:i.extent,options:e};this.callGoTo(t)}}setFloors(e){var i,l,s;null==(i=this.view)||null==(l=i.map)||null==(s=l.allLayers)||s.forEach((e=>{"feature"===e.type&&this._computeViewAllModeFloors(e)})),this.view.floors=new t(this._computeFloors(e))}updateWebDocument(e){if(f(e)){var t,i,l;const s=new d({enabled:this.enabled,longNames:this.longNames,minimized:this.minimized,pinnedLevels:this.pinnedLevels,site:null!=(t=this.site)?t:null,facility:null!=(i=this.facility)?i:null,level:null!=(l=this.level)?l:null});e.widgets?e.widgets.floorFilter=s:e.widgets=new c({floorFilter:s})}}_computeFloors(e){if("single-floor"===this.filterMode)this._computeSingleFloor(e);else if("base-floors"===this.filterMode)return"3d"===this.view.type?this._computeBaseFloors3D(e):this._computeBaseFloors(e);return this._computeEmptyFloors()}_computeSingleFloor(e){if(!e)return this._computeEmptyFloors();const t=[];if("all"===(null==e?void 0:e.id)){this.getFacilityLevels(e.facilityId).forEach((e=>{e.id&&t.push(e.id)}))}else e&&t.push(e.id);return t}_computeBaseFloors(e){var t,i;const l=null==(t=this.filterFeatures)||null==(i=t.levels)?void 0:i.levelsInfo;if(!l||!l.length)return this._computeEmptyFloors();const s=[];if("all"===(null==e?void 0:e.id)){this.getFacilityLevels(e.facilityId).forEach((e=>{e.id&&s.push(e.id)}))}else e&&s.push(e.id);const r=null==e?void 0:e.facilityId;return l.forEach((e=>{const{id:t,facilityId:i,verticalOrder:l}=e;(r||0!==l||s.includes(t))&&(i===r||0!==l||s.includes(t))||s.push(t)})),s}_computeBaseFloors3D(e){var t,i;const l=null==(t=this.filterFeatures)||null==(i=t.levels)?void 0:i.levelsInfo;if(!l||!l.length)return this._computeEmptyFloors();const s=[],r=null==e?void 0:e.id.split("--");if((null==r?void 0:r.length)>1&&"all"===r[0]){this.getFacilityLevels(e.facilityId).forEach((e=>{e.id&&s.push(e.id)}))}else e&&s.push(e.id);const o=null==e?void 0:e.facilityId;return l.forEach((e=>{const{id:t,facilityId:i}=e;(o||s.includes(t))&&(i===o||s.includes(t))||s.push(t)})),s}_computeEmptyFloors(){return[]}async _setFilterLayers(){const{view:e}=this;if(!this._isOverridden("filterLayers")){if(!f(e.map)&&"esri.WebScene"!==e.map.declaredClass)throw new i("Map must be a webmap or webscene");{var t;const i=e.map,f=null==i?void 0:i.allLayers;if((null==f||null==(t=f.items)?void 0:t.length)>0){var l,s,r,o,n,a,u,h,d,c,v,p;const e={siteLayer:null,facilityLayer:null,levelLayer:null},t=null==(l=i.floorInfo)||null==(s=l.siteLayer)?void 0:s.layerId,_=null==(r=i.floorInfo)||null==(o=r.facilityLayer)?void 0:o.layerId,w=null==(n=i.floorInfo)||null==(a=n.levelLayer)?void 0:a.layerId,b=(null==(u=i.floorInfo)||null==(h=u.siteLayer)?void 0:h.sublayerId)||(null==(d=i.floorInfo)||null==(c=d.facilityLayer)?void 0:c.sublayerId)||(null==(v=i.floorInfo)||null==(p=v.levelLayer)?void 0:p.sublayerId);if(!_||!w)return;const k=f.items.filter((e=>"feature"===e.type||"scene"===e.type)),j=f.items.filter((e=>"map-image"===e.type));if((null==j?void 0:j.length)>0&&b){var y,m,F,g,L,I;await Promise.all(j.map((e=>e.load())));const l=null==(y=i.floorInfo)||null==(m=y.siteLayer)?void 0:m.sublayerId,s=null==(F=i.floorInfo)||null==(g=F.facilityLayer)?void 0:g.sublayerId,r=null==(L=i.floorInfo)||null==(I=L.levelLayer)?void 0:I.sublayerId;j.forEach((i=>{const o=i.id,n=null==i?void 0:i.allSublayers,a=null==n?void 0:n.items;(o===t||o===_||o===w)&&(null==a?void 0:a.length)>0&&n.items.forEach((i=>{const n=i.id;o===t&&n===l?e.siteLayer=i:n===s?e.facilityLayer=i:n===r&&(e.levelLayer=i)}))}))}(null==k?void 0:k.length)>0&&k.forEach((i=>{const l=i.id;l===t?e.siteLayer=i:l===_?e.facilityLayer=i:l===w&&(e.levelLayer=i)})),this.filterLayers=e}}}}async _getFilterFeatures(){if(this._isOverridden("filterFeatures"))return Promise.resolve(this.filterFeatures);const e={sites:null,facilities:null,levels:null},t=await this._getSites();e.sites=t;const i=await this._getFacilities();e.facilities=i;const l=await this._getLevels();return e.levels=l,e}async _getSites(){var e,t;const{filterLayers:i,view:l}=this,s=l.map,{siteLayer:r}=i,o={sitesInfo:[]};if(!r||null==s||null==(e=s.floorInfo)||!e.siteLayer)return o;const n=r.createQuery();n.returnGeometry=!0,n.outFields=["*"],n.returnZ=!0,"type"in r&&"scene"===r.type&&(n.multipatchOption="xyFootprint");const{siteIdField:a,nameField:u}=s.floorInfo.siteLayer,h=await r.queryFeatures(n);if((null==h||null==(t=h.features)?void 0:t.length)>0){h.features.forEach((e=>{const t=e.attributes,i=e.geometry,l=t[a],s=t[u];l&&s&&o.sitesInfo.push({id:l,name:s,geometry:i})}))}return o}async _getFacilities(){var e,t;const{filterLayers:i,view:l}=this,s=l.map,{facilityLayer:r}=i,o={facilitiesInfo:[]};if(!r||null==s||null==(e=s.floorInfo)||!e.facilityLayer)return o;const n=r.createQuery();n.returnGeometry=!0,n.outFields=["*"],n.returnZ=!0,"type"in r&&"scene"===r.type&&(n.multipatchOption="xyFootprint");const{facilityIdField:a,siteIdField:u,nameField:h}=s.floorInfo.facilityLayer,d=await r.queryFeatures(n);if((null==d||null==(t=d.features)?void 0:t.length)>0){d.features.forEach((e=>{const t=e.attributes,i=e.geometry,l=t[a],s=t[u],r=t[h];l&&r&&o.facilitiesInfo.push({id:l,siteId:s,name:r,geometry:i})}))}return o}async _getLevels(){var e,t;const{filterLayers:i,view:l}=this,s=l.map,{levelLayer:r}=i,o={levelsInfo:[]};if(!r||null==s||null==(e=s.floorInfo)||!e.levelLayer)return o;const n=r.createQuery();n.returnGeometry=!0,n.outFields=["*"],n.returnZ=!0;const{levelIdField:a,facilityIdField:u,longNameField:h,shortNameField:d,levelNumberField:c,verticalOrderField:v}=s.floorInfo.levelLayer,f=await r.queryFeatures(n);if((null==f||null==(t=f.features)?void 0:t.length)>0){f.features.forEach((e=>{const t=e.attributes,i=t[a],l=t[u],s=t[h],r=t[d],n=t[c],f=t[v];i&&l&&s&&r&&"number"==typeof n&&"number"==typeof f&&o.levelsInfo.push({id:i,facilityId:l,longName:s,shortName:r,levelNumber:n,verticalOrder:f})}))}return o}_registerWidget(e){(null==e?void 0:e.persistableViewModels.some((e=>e===this)))||null==e||e.persistableViewModels.add(this)}_unregisterWidget(e){null==e||e.persistableViewModels.remove(this)}_watchSearchResults(e){null==e||e.on("select-result-floor",(e=>{const t=this.getLevel(e);t&&this.level!==e&&(this.level=e,this.setFloors(t))}))}async _setInitialViewState(){if(this.view)try{await this.view.when(),await this._setFilterLayers();const e=await this._getFilterFeatures();if(!e)return;if(this.filterFeatures=e,!this.hasFacilities||!this.hasLevels)return void console.error("Facilities and Levels are required for the Floor Filter widget");if(this.hasMultipleSites||(this.filterMenuType="facility"),this.facility&&this.level){this.filterMenuType="facility";const e=this.getFacility(this.facility),t=this.getLevel(this.level);this.site||(this.site=e.siteId||void 0),this.setFloors(t),this.goTo(e)}else if(this.facility&&!this.level){this.filterMenuType="facility";const e=this.getFacility(this.facility),t=this.getBaseLevel(e);this.site||(this.site=e.siteId||void 0),this.level=(null==t?void 0:t.id)||void 0,this.setFloors(t),this.goTo(e)}else if(!this.facility&&this.level){this.filterMenuType="facility";const e=this.getLevel(this.level),t=this.getFacility(null==e?void 0:e.facilityId);this.facility=(null==t?void 0:t.id)||void 0,this.site||(this.site=(null==t?void 0:t.siteId)||void 0),this.setFloors(e),this.goTo(t)}else if(!this.site||this.facility||this.level)this.setFloors(null);else{this.filterMenuType="site";const e=this.getSite(this.site);this.setFloors(null),this.goTo(e)}}catch(e){console.error("Couldn't retrieve sites, facilities, and levels",e)}}_callOverride(e,t){this._override(e,t)}async _updateFloorFilterFromMap(e){var t;if(!e||!f(e))return;const i=null==e||null==(t=e.widgets)?void 0:t.floorFilter;i&&(this._isOverridden("enabled")||(this.enabled=i.enabled),this._isOverridden("longNames")||(this.longNames=i.longNames),this._isOverridden("minimized")||(this.minimized=i.minimized),this._isOverridden("pinnedLevels")||(this.pinnedLevels=i.pinnedLevels),this._isOverridden("site")||(this.site=i.site),this._isOverridden("facility")||(this.facility=i.facility),this._isOverridden("level")||(this.level=i.level))}_computeViewAllModeFloors(e){var i;const{filterFeatures:l}=this;if(null!=(i=e.floorInfo)&&i.viewAllMode&&this.hasLevels&&this.hasFacilities&&"base-floors"===this.filterMode){const{level:i,facility:s}=this,r=[];l.levels.levelsInfo.forEach((e=>{const{id:t,facilityId:l}=e;s&&l===s?i&&t===i&&r.push(t):r.push(t)})),e.floorInfo.viewAllLevelIds=new t(r)}}};e([u({value:!1})],p.prototype,"enabled",null),e([u({value:void 0})],p.prototype,"facility",null),e([u({value:null})],p.prototype,"filterFeatures",null),e([u({value:null})],p.prototype,"filterLayers",null),e([u()],p.prototype,"filterMenuOpen",void 0),e([u()],p.prototype,"filterMenuType",void 0),e([u()],p.prototype,"filterMode",void 0),e([u()],p.prototype,"hasFacilities",null),e([u()],p.prototype,"hasLevels",null),e([u()],p.prototype,"hasMultipleSites",null),e([u({readOnly:!0})],p.prototype,"isNormalMode",null),e([u({value:void 0})],p.prototype,"level",null),e([u({value:!1})],p.prototype,"longNames",null),e([u()],p.prototype,"levelsExpanded",void 0),e([u({value:!1})],p.prototype,"minimized",null),e([u({value:!1})],p.prototype,"pinnedLevels",null),e([u()],p.prototype,"searchTerm",void 0),e([u({value:void 0})],p.prototype,"site",null),e([u({readOnly:!0})],p.prototype,"state",null),e([u()],p.prototype,"view",void 0),e([u()],p.prototype,"_viewHeightBreakpoint",void 0),e([u()],p.prototype,"_viewWidthBreakpoint",void 0),e([u()],p.prototype,"updateWebDocument",null),p=e([h("esri/widgets/FloorFilter/FloorFilterViewModel")],p);const y=p;export{y as default};