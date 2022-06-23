// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../TimeExtent ../../TimeInterval ../../core/Collection ../../core/Evented ../../core/HandleOwner ../../core/Logger ../../core/maybe ../../core/promiseUtils ../../core/timeUtils ../../core/watchUtils ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../webdoc/Widgets ../../webdoc/widgets/TimeSlider ./utils".split(" "),
function(u,h,r,I,E,f,J,K,c,B,L,v,l,Q,R,F,M,N,O,z){function C(g){return c.isSome(g)&&void 0!==g.count}function A(g){return c.isSome(g)&&void 0!==g.interval}function G(g){return c.isSome(g)&&void 0!==g.dates}var D;const P=K.getLogger("esri.widgets.Popup.PopupViewModel");f=D=function(g){function x(a){a=g.call(this,a)||this;a._animationController=null;a._isViewTimeExtentInitialized=!1;a._loadingWebDocument=!1;a._timerId=null;a._updateTimeSliderTask=null;a.actions=new E;a.view=null;return a}u._inheritsLoose(x,
g);var k=x.prototype;k.initialize=function(){var a=this;this.handles.add([v.init(this,"effectiveStops",()=>{c.isNone(this.timeExtent)&&this._set("timeExtent",this._getDefaultTimeExtent())}),v.init(this,"view.map",b=>{c.isSome(this._updateTimeSliderTask)&&(this._updateTimeSliderTask.abort(),this._updateTimeSliderTask=null);this._updateTimeSliderTask=B.createTask(function(){var d=u._asyncToGenerator(function*(e){a._loadingWebDocument=!0;yield a._updateTimeSliderFromMap(b,e);a._loadingWebDocument=!1});
return function(e){return d.apply(this,arguments)}}())}),v.init(this,"view",(b,d)=>{this._unregisterWidget(d);this._registerWidget(b)},!0),v.init(this,"timeExtent",b=>{if(!c.isNone(this.view)){var d=this.view.timeExtent;(c.isNone(b)||b.isAllTime)&&(c.isNone(d)||d.isAllTime)||c.isSome(b)&&c.isSome(d)&&b.equals(d)||(this.view.timeExtent=c.unwrap(b))}}),v.watch(this,"view.timeExtent",b=>{this._isViewTimeExtentInitialized?(c.isNone(b)||b.isAllTime)&&(c.isNone(this.timeExtent)||this.timeExtent.isAllTime)||
c.isSome(b)&&c.isSome(this.timeExtent)&&b.equals(this.timeExtent)||(this.timeExtent=b):this._isViewTimeExtentInitialized=!0})])};k.destroy=function(){c.isSome(this._timerId)&&(clearInterval(this._timerId),this._timerId=null);this._unregisterWidget(this.view);this.view=null;c.isSome(this._animationController)&&(this._animationController.abort(),this._animationController=null);c.isSome(this._updateTimeSliderTask)&&(this._updateTimeSliderTask.abort(),this._updateTimeSliderTask=null)};x.getPropertiesFromWebMap=
function(){var a=u._asyncToGenerator(function*(b,d){var e,m;if(!b||"esri.WebMap"!==b.declaredClass)return null;yield b.load({signal:d});var n=null==b?void 0:null==(e=b.widgets)?void 0:e.timeSlider;if(!n)return null;b=yield z.getFullTimeExtentFromWebDocument(b,d);d=n.loop;e=z.getModeFromTimeSlider(n);const q=null!=(m=n.stopDelay)?m:2E3;m=z.getStopsFromTimeSlider(n);n=z.getTimeExtentFromTimeSlider(n,e);return{fullTimeExtent:b,loop:d,mode:e,playRate:q,stops:m,timeExtent:n}});return function(b,d){return a.apply(this,
arguments)}}();k.next=function(){this._step({forward:!0,allowRestart:!1})};k.play=function(){this._startAnimation()};k.previous=function(){this._step({forward:!1,allowRestart:!1})};k.stop=function(){this._stopAnimation()};k.triggerAction=function(a){this.emit("trigger-action",{action:a})};k.updateWebDocument=function(a){if("esri.WebMap"===a.declaredClass){const b=new O({currentTimeExtent:this.timeExtent,fullTimeExtent:this.fullTimeExtent,loop:this.loop,numStops:C(this.stops)?this.stops.count:null,
numThumbs:"time-window"===this.mode?2:1,stopDelay:this.playRate,stopInterval:A(this.stops)?this.stops.interval:null,stops:G(this.stops)?this.stops.dates:null});a.widgets?a.widgets.timeSlider=b:a.widgets=new N({timeSlider:b})}};k.valuesToTimeExtent=function(a){if(c.isNone(a))return null;var b=a.sort((d,e)=>d-e).map(d=>new Date(d));a=0<b.length?b[0]:null;b=1<b.length?b[1]:null;switch(this.mode){case "time-window":return new r({start:a,end:b});case "instant":return new r({start:a,end:a});case "cumulative-from-start":return new r({start:null,
end:a});case "cumulative-from-end":return new r({start:a,end:null});default:return r.allTime}};k._animate=function(){var a=u._asyncToGenerator(function*(){try{yield Promise.all([B.after(this.playRate,null,c.isSome(this._animationController)&&this._animationController.signal),c.isSome(this.view)&&v.whenFalseOnce(this.view,"updating",c.isSome(this._animationController)&&this._animationController.signal)])}catch(b){B.isAbortError(b)||P.error(b);this._animationController=null;return}this._step({forward:!0,
allowRestart:!1});c.isNone(this._animationController)||this._animate()});return function(){return a.apply(this,arguments)}}();k._divideTimeExtentByCount=function(a,b=10){if(!a||!b)return[];const {start:d,end:e}=a;if(c.isNone(d)||c.isNone(e))return[];if(1E4<b)return this._divideTimeExtentByCount(a);a=[];const m=d.getTime(),n=e.getTime()-m;for(let q=0;q<=b;q++)a.push(new Date(m+q/b*n));return a};k._divideTimeExtentByInterval=function(a,b,d=1E4){if(!a||!b)return[];const {start:e,end:m}=a;if(c.isNone(e)||
c.isNone(m))return[];const n=m.getTime()-e.getTime(),q=b.toMilliseconds();if(n/q>d)return this._divideTimeExtentByCount(a);a=[];const {value:y,unit:p}=b;for(b=e;b.getTime()<=m.getTime();)a.push(new Date(b.getTime())),b=L.offsetDate(b,y,p);return a};k._getDefaultTimeExtent=function(){const {effectiveStops:a,mode:b}=this;if(c.isNone(a)||!b)return null;switch(b){case "time-window":return 1<a.length?new r({start:a[0],end:a[1]}):null;case "cumulative-from-start":return 0<a.length?new r({start:null,end:a[0]}):
null;case "cumulative-from-end":return 0<a.length?new r({start:a[0],end:null}):null;case "instant":return 0<a.length?new r({start:a[0],end:a[0]}):null;default:return null}};k._registerWidget=function(a){c.isSome(a)&&(a.persistableViewModels.some(b=>b===this)||a.persistableViewModels.add(this))};k._startAnimation=function(){this._stopAnimation();this._animationController=new AbortController;this._step({forward:!0,allowRestart:!0});this._animate()};k._step=function(a){const {forward:b,allowRestart:d}=
a;({effectiveStops:a}=this);if(!c.isNone(this.timeExtentValues)&&!c.isNone(a)){var e=a.map(p=>p.getTime());a=this.timeExtentValues.map(p=>{var w=e.indexOf(p);if(-1!==w)return w;w=e.reduce((t,H)=>Math.abs(H-p)<Math.abs(t-p)?H:t);return e.indexOf(w)});var m=a.map(p=>p+=b?1:-1),n=m.some(p=>0>p||p>e.length-1),{loop:q,state:y}=this;if(n)if(q||d){const p=Math.min(...a),w=Math.max(...a);a=(b?a.map(t=>t-p):a.map(t=>t+(e.length-1-w))).map(t=>e[t]);this.timeExtent=this.valuesToTimeExtent(a)}else"playing"===
y&&this.stop();else a=m.map(p=>e[p]),this.timeExtent=this.valuesToTimeExtent(a)}};k._stopAnimation=function(){c.isSome(this._animationController)&&(this._animationController.abort(),this._animationController=null)};k._unregisterWidget=function(a){c.isSome(a)&&a.persistableViewModels.remove(this)};k._updateTimeSliderFromMap=function(){var a=u._asyncToGenerator(function*(b,d){b=yield D.getPropertiesFromWebMap(b,d);if(!c.isNone(b))for(const e in b)this._isOverridden(e)||(this[e]=b[e])});return function(b,
d){return a.apply(this,arguments)}}();u._createClass(x,[{key:"effectiveStops",get:function(){const {fullTimeExtent:a,stops:b}=this;if(G(b)){var {dates:d}=b;if(null==d||0===d.length)return null;d=d.sort((q,y)=>q.getTime()-y.getTime());if(c.isNone(a))return d;const {start:m,end:n}=a;return c.isNone(m)||c.isNone(n)?d:d.filter(q=>!(q.getTime()<m.getTime()||q.getTime()>n.getTime()))}if(C(b)){var e=null!=(d=b.timeExtent)?d:c.unwrap(a);return this._divideTimeExtentByCount(e,b.count)}return A(b)?(d=null!=
(e=b.timeExtent)?e:c.unwrap(a),this._divideTimeExtentByInterval(d,b.interval)):[]}},{key:"fullTimeExtent",set:function(a){this._override("fullTimeExtent",a)}},{key:"loop",set:function(a){this._override("loop",a)}},{key:"mode",set:function(a){this._override("mode",a)}},{key:"playRate",set:function(a){0>=a||36E5<a||("playing"===this.state&&this._startAnimation(),this._override("playRate",a))}},{key:"state",get:function(){return c.isNone(this.fullTimeExtent)||this._loadingWebDocument?"disabled":c.isSome(this._animationController)?
"playing":"ready"}},{key:"stops",set:function(a){this._override("stops",a)}},{key:"timeExtent",set:function(a){this._override("timeExtent",a)}},{key:"timeExtentValues",get:function(){const {mode:a,timeExtent:b}=this;if(c.isNone(b)||b.isAllTime||b.isEmpty)return null;const {start:d,end:e}=b;switch(a){case "cumulative-from-end":case "instant":return c.isSome(d)?[d.getTime()]:null;case "cumulative-from-start":return c.isSome(e)?[e.getTime()]:null;case "time-window":return c.isSome(d)&&c.isSome(e)?[d.getTime(),
e.getTime()]:null}}}]);return x}(J.HandleOwnerMixin(f.EventedAccessor));h.__decorate([l.property()],f.prototype,"_animationController",void 0);h.__decorate([l.property()],f.prototype,"_loadingWebDocument",void 0);h.__decorate([l.property({type:E})],f.prototype,"actions",void 0);h.__decorate([l.property({readOnly:!0})],f.prototype,"effectiveStops",null);h.__decorate([l.property({type:r,value:null})],f.prototype,"fullTimeExtent",null);h.__decorate([l.property({nonNullable:!0,value:!1})],f.prototype,
"loop",null);h.__decorate([l.property({nonNullable:!0,value:"time-window"})],f.prototype,"mode",null);h.__decorate([l.property({nonNullable:!0,value:1E3})],f.prototype,"playRate",null);h.__decorate([l.property({readOnly:!0})],f.prototype,"state",null);h.__decorate([l.property({cast:g=>{if(c.isNone(g))return null;A(g)&&(g.interval=F.ensureType(I,g.interval));if(A(g)||C(g))g.timeExtent=F.ensureType(r,g.timeExtent);return g},value:{count:10}})],f.prototype,"stops",null);h.__decorate([l.property({type:r,
value:null})],f.prototype,"timeExtent",null);h.__decorate([l.property({readOnly:!0})],f.prototype,"timeExtentValues",null);h.__decorate([l.property()],f.prototype,"view",void 0);h.__decorate([l.property()],f.prototype,"next",null);h.__decorate([l.property()],f.prototype,"play",null);h.__decorate([l.property()],f.prototype,"previous",null);h.__decorate([l.property()],f.prototype,"stop",null);h.__decorate([l.property()],f.prototype,"updateWebDocument",null);return f=D=h.__decorate([M.subclass("esri.widgets.Popup.PopupViewModel")],
f)});