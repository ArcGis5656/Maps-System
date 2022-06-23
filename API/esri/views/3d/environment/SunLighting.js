// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Evented ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../webscene/Lighting".split(" "),function(m,d,c,f,t,u,v,p,q){var g;c=g=function(k){function e(a){a=k.call(this,a)||this;a.type="sun";a.cameraTrackingEnabled=!0;a.ambientOcclusionEnabled=!1;a.waterReflectionEnabled=
!1;a.positionTimezoneInfo={hours:0,minutes:0,seconds:0,autoUpdated:!0};var b=(new Date).getFullYear();b=new Date("March 15, "+b+" 12:00:00 UTC");a._set("defaultDate",b);a._set("date",b);return a}m._inheritsLoose(e,k);e.fromWebsceneLighting=function(a){return new g(a.cloneConstructProperties())};var h=e.prototype;h.autoUpdate=function(a,b){const r=g.calculateTimezoneOffset(this.positionTimezoneInfo);this.positionTimezoneInfo.hours=b.hours;this.positionTimezoneInfo.minutes=b.minutes;this.positionTimezoneInfo.seconds=
b.seconds;b=null;null!=a&&(this.positionTimezoneInfo.autoUpdated=!0,b=this.date&&this.date.getTime(),this._set("date",new Date(a.getTime())));const n=g.calculateTimezoneOffset(this.positionTimezoneInfo);r!==n&&(l.target=this,l.timezoneOffset=n,this.emit("timezone-will-change",l));if(null!=a)return b!==a.getTime()};h.clone=function(){const a=this._get("date")===this._get("defaultDate"),b=new g({...this.cloneConstructProperties(),defaultDate:this.defaultDate,cameraTrackingEnabled:this.cameraTrackingEnabled,
ambientOcclusionEnabled:this.ambientOcclusionEnabled,waterReflectionEnabled:this.waterReflectionEnabled});a&&b._set("date",b._get("defaultDate"));b.positionTimezoneInfo.autoUpdated=this.positionTimezoneInfo.autoUpdated;b.positionTimezoneInfo.hours=this.positionTimezoneInfo.hours;b.positionTimezoneInfo.minutes=this.positionTimezoneInfo.minutes;b.positionTimezoneInfo.seconds=this.positionTimezoneInfo.seconds;return b};h.cloneWithWebsceneLighting=function(a){const b=this.clone();null!=a.date&&(b.date=
a.date);b.directShadowsEnabled=a.directShadowsEnabled;b.displayUTCOffset=a.displayUTCOffset;return b};m._createClass(e,[{key:"defaultDate",get:function(){return new Date(this._get("defaultDate").getTime())},set:function(a){const b=this._get("date")===this._get("defaultDate");a=new Date(a.getTime());this._set("defaultDate",a);b&&this._set("date",a)}},{key:"date",set:function(a){null!=a&&(this.positionTimezoneInfo.autoUpdated=!1,this._set("date",new Date(a.getTime())))}}]);return e}(c.EventedMixin(q));
d.__decorate([f.property({readOnly:!0})],c.prototype,"type",void 0);d.__decorate([f.property({type:Boolean})],c.prototype,"cameraTrackingEnabled",void 0);d.__decorate([f.property({type:Boolean})],c.prototype,"ambientOcclusionEnabled",void 0);d.__decorate([f.property({type:Boolean})],c.prototype,"waterReflectionEnabled",void 0);d.__decorate([f.property({type:Date})],c.prototype,"defaultDate",null);d.__decorate([f.property({type:Date})],c.prototype,"date",null);c=g=d.__decorate([p.subclass("esri.views.3d.environment.SunLighting")],
c);(function(k){k.calculateTimezoneOffset=function({hours:e,minutes:h,seconds:a}){return Math.round(e+h/60+a/3600)}})(c||(c={}));const l={target:null,timezoneOffset:0};return c});