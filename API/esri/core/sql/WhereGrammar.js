// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.23/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_commonjsHelpers"],function(Fb,Tc){var Gb={exports:{}};(function(ma){(function(L,na){ma.exports&&(ma.exports=na())})(Tc.commonjsGlobal,function(){function L(f,x,l,y){f=Error.call(this,f);Object.setPrototypeOf&&Object.setPrototypeOf(f,L.prototype);f.expected=x;f.found=l;f.location=y;f.name="SyntaxError";return f}function na(f,x,l){l=l||" ";if(f.length>x)return f;x-=f.length;l+=l.repeat(x);return f+l.slice(0,x)}(function(f,x){function l(){this.constructor=f}l.prototype=
x.prototype;f.prototype=new l})(L,Error);L.prototype.format=function(f){var x="Error: "+this.message;if(this.location){var l=null,y;for(y=0;y<f.length;y++)if(f[y].source===this.location.source){l=f[y].text.split(/\r\n|\n|\r/g);break}f=this.location.start;y=this.location.source+":"+f.line+":"+f.column;if(l){var I=this.location.end,V=na("",f.line.toString().length);l=l[f.line-1];I=f.line===I.line?I.column:l.length+1;x+="\n --\x3e "+y+"\n"+V+" |\n"+f.line+" | "+l+"\n"+V+" | "+na("",f.column-1)+na("",
I-f.column,"^")}else x+="\n at "+y}return x};L.buildMessage=function(f,x){function l(t){return t.charCodeAt(0).toString(16).toUpperCase()}function y(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(z){return"\\x0"+l(z)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(z){return"\\x"+l(z)})}function I(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,
"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(z){return"\\x0"+l(z)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(z){return"\\x"+l(z)})}function V(t){return m[t.type](t)}var m={literal:function(t){return'"'+y(t.text)+'"'},class:function(t){var z=t.parts.map(function(u){return Array.isArray(u)?I(u[0])+"-"+I(u[1]):I(u)});return"["+(t.inverted?"^":"")+z+"]"},any:function(){return"any character"},end:function(){return"end of input"},
other:function(t){return t.description}};return"Expected "+function(t){t=t.map(V);var z,u;t.sort();if(0<t.length){for(u=z=1;z<t.length;z++)t[z-1]!==t[z]&&(t[u]=t[z],u++);t.length=u}switch(t.length){case 1:return t[0];case 2:return t[0]+" or "+t[1];default:return t.slice(0,-1).join(", ")+", or "+t[t.length-1]}}(f)+" but "+(x?'"'+y(x)+'"':"end of input")+" found."};return{SyntaxError:L,parse:function(f,x){function l(c,d){return{type:"literal",text:c,ignoreCase:d}}function y(c,d,e){return{type:"class",
parts:c,inverted:d,ignoreCase:e}}function I(c){var d=Ba[c],e;if(!d){for(e=c-1;!Ba[e];)e--;d=Ba[e];for(d={line:d.line,column:d.column};e<c;)10===f.charCodeAt(e)?(d.line++,d.column=1):d.column++,e++;Ba[c]=d}return d}function V(c,d){var e=I(c),g=I(d);return{source:Uc,start:{offset:c,line:e.line,column:e.column},end:{offset:d,line:g.line,column:g.column}}}function m(c){b<M||(b>M&&(M=b,eb=[]),eb.push(c))}function t(){var c=b;k();var d=u();d!==a?(k(),c=d):(b=c,c=a);return c}function z(){var c=b;var d=u();
if(d!==a){c=[];var e=b;var g=k();var n=Ca();if(n!==a){var p=k();var q=u();q!==a?e=g=[g,n,p,q]:(b=e,e=a)}else b=e,e=a;for(;e!==a;)c.push(e),e=b,g=k(),n=Ca(),n!==a?(p=k(),q=u(),q!==a?e=g=[g,n,p,q]:(b=e,e=a)):(b=e,e=a);e={type:"expr_list"};d=[d];for(g=0;g<c.length;g++)d.push(c[g][3]);e.value=d;c=e}else b=c,c=a;return c}function u(){var c=b;var d=fb();if(d!==a){c=[];var e=b;var g=k();var n=Hb();if(n!==a){var p=k();var q=fb();q!==a?e=g=[g,n,p,q]:(b=e,e=a)}else b=e,e=a;for(;e!==a;)c.push(e),e=b,g=k(),n=
Hb(),n!==a?(p=k(),q=fb(),q!==a?e=g=[g,n,p,q]:(b=e,e=a)):(b=e,e=a);c=oa(d,c)}else b=c,c=a;return c}function fb(){var c=b;var d=Da();if(d!==a){c=[];var e=b;var g=k();var n=Ea();if(n!==a){var p=k();var q=Da();q!==a?e=g=[g,n,p,q]:(b=e,e=a)}else b=e,e=a;for(;e!==a;)c.push(e),e=b,g=k(),n=Ea(),n!==a?(p=k(),q=Da(),q!==a?e=g=[g,n,p,q]:(b=e,e=a)):(b=e,e=a);c=oa(d,c)}else b=c,c=a;return c}function Da(){var c=b;var d=pa();if(d===a){d=b;if(33===f.charCodeAt(b)){var e=Vc;b++}else e=a,0===h&&m(Wc);if(e!==a){var g=
b;h++;if(61===f.charCodeAt(b)){var n=Ib;b++}else n=a,0===h&&m(Jb);h--;n===a?g=void 0:(b=g,g=a);g!==a?d=e=[e,g]:(b=d,d=a)}else b=d,d=a}d!==a?(e=k(),g=Da(),g!==a?c={type:"unary_expr",operator:"NOT",expr:g}:(b=c,c=a)):(b=c,c=a);if(c===a){d=b;c=P();if(c!==a){k();d=[];e=b;g=k();n=Kb();if(n!==a){var p=k();var q=P();q!==a?e=g=[g,n,p,q]:(b=e,e=a)}else b=e,e=a;if(e!==a)for(;e!==a;)d.push(e),e=b,g=k(),n=Kb(),n!==a?(p=k(),q=P(),q!==a?e=g=[g,n,p,q]:(b=e,e=a)):(b=e,e=a);else d=a;d!==a&&(d={type:"arithmetic",tail:d});
d===a&&(d=b,e=gb(),e!==a?(k(),g=C(),g!==a?(k(),g=z(),g!==a?(k(),n=D(),n!==a?d={op:e,right:g}:(b=d,d=a)):(b=d,d=a)):(b=d,d=a)):(b=d,d=a),d===a&&(d=b,e=gb(),e!==a?(k(),g=C(),g!==a?(k(),g=D(),g!==a?d={op:e,right:{type:"expr_list",value:[]}}:(b=d,d=a)):(b=d,d=a)):(b=d,d=a),d===a&&(d=b,e=gb(),e!==a?(k(),g=hb(),g!==a?d={op:e,right:g}:(b=d,d=a)):(b=d,d=a))),d===a&&(d=b,n=pa(),n!==a?(k(),e=Lb(),e!==a?(k(),g=P(),g!==a?(k(),p=Ea(),p!==a?(k(),n=P(),n!==a?d={op:"NOT"+e,right:{type:"expr_list",value:[g,n]}}:(b=
d,d=a)):(b=d,d=a)):(b=d,d=a)):(b=d,d=a)):(b=d,d=a),d===a&&(d=b,n=Lb(),n!==a?(k(),e=P(),e!==a?(k(),g=Ea(),g!==a?(k(),p=P(),p!==a?d={op:n,right:{type:"expr_list",value:[e,p]}}:(b=d,d=a)):(b=d,d=a)):(b=d,d=a)):(b=d,d=a)),d===a&&(d=b,e=Mb(),e!==a?(k(),g=pa(),g!==a?(k(),g=P(),g!==a?d={op:e+"NOT",right:g}:(b=d,d=a)):(b=d,d=a)):(b=d,d=a),d===a&&(d=b,e=Mb(),e!==a?(k(),g=P(),g!==a?d={op:e,right:g}:(b=d,d=a)):(b=d,d=a)),d===a&&(d=b,e=Nb(),e!==a?(k(),g=Y(),g!==a?(k(),n=b,f.substr(b,6).toLowerCase()===Xc?(p=
f.substr(b,6),b+=6):(p=a,0===h&&m(Yc)),p!==a?(p=b,h++,q=r(),h--,q===a?p=void 0:(b=p,p=a),p!==a?n="ESCAPE":(b=n,n=a)):(b=n,n=a),n!==a?(k(),n=ib(),n!==a?d={op:e,right:g,escape:n.value}:(b=d,d=a)):(b=d,d=a)):(b=d,d=a)):(b=d,d=a),d===a&&(d=b,e=Nb(),e!==a?(k(),g=Y(),g!==a?d={op:e,right:g,escape:""}:(b=d,d=a)):(b=d,d=a))))));d===a&&(d=null);""==d||void 0==d||null==d?d=c:(e=null,d=e="arithmetic"==d.type?oa(c,d.tail):Ob(d.op,c,d.right,d.escape))}else b=d,d=a;c=d}return c}function Kb(){if(f.substr(b,2)===
Pb){var c=Pb;b+=2}else c=a,0===h&&m(Zc);c===a&&(62===f.charCodeAt(b)?(c=$c,b++):(c=a,0===h&&m(ad)),c===a&&(f.substr(b,2)===Qb?(c=Qb,b+=2):(c=a,0===h&&m(bd)),c===a&&(f.substr(b,2)===Rb?(c=Rb,b+=2):(c=a,0===h&&m(cd)),c===a&&(60===f.charCodeAt(b)?(c=dd,b++):(c=a,0===h&&m(ed)),c===a&&(61===f.charCodeAt(b)?(c=Ib,b++):(c=a,0===h&&m(Jb)),c===a&&(f.substr(b,2)===Sb?(c=Sb,b+=2):(c=a,0===h&&m(fd))))))));return c}function Nb(){var c=c=b;var d=pa();if(d!==a){var e=k();var g=Tb();g!==a?c=d=[d,e,g]:(b=c,c=a)}else b=
c,c=a;c!==a&&(c=c[0]+" "+c[2]);c===a&&(c=Tb());return c}function gb(){var c=c=b;var d=pa();if(d!==a){var e=k();var g=jb();g!==a?c=d=[d,e,g]:(b=c,c=a)}else b=c,c=a;c!==a&&(c=c[0]+" "+c[2]);c===a&&(c=jb());return c}function P(){var c=b;var d=kb();if(d!==a){c=[];var e=b;var g=k();var n=Ub();if(n!==a){var p=k();var q=kb();q!==a?e=g=[g,n,p,q]:(b=e,e=a)}else b=e,e=a;for(;e!==a;)c.push(e),e=b,g=k(),n=Ub(),n!==a?(p=k(),q=kb(),q!==a?e=g=[g,n,p,q]:(b=e,e=a)):(b=e,e=a);c=oa(d,c)}else b=c,c=a;return c}function Ub(){if(43===
f.charCodeAt(b)){var c=lb;b++}else c=a,0===h&&m(mb);c===a&&(45===f.charCodeAt(b)?(c=nb,b++):(c=a,0===h&&m(ob)));return c}function kb(){var c=b;var d=pb();if(d!==a){c=[];var e=b;var g=k();var n=Vb();if(n!==a){var p=k();var q=pb();q!==a?e=g=[g,n,p,q]:(b=e,e=a)}else b=e,e=a;for(;e!==a;)c.push(e),e=b,g=k(),n=Vb(),n!==a?(p=k(),q=pb(),q!==a?e=g=[g,n,p,q]:(b=e,e=a)):(b=e,e=a);c=oa(d,c)}else b=c,c=a;return c}function Vb(){if(42===f.charCodeAt(b)){var c=gd;b++}else c=a,0===h&&m(hd);c===a&&(47===f.charCodeAt(b)?
(c=id,b++):(c=a,0===h&&m(jd)));return c}function pb(){var c=ib();if(c===a){var d=b;var e=b;var g=Fa();if(g!==a){var n=Wb();if(n!==a){var p=Xb();p!==a?e=parseFloat(g+n+p):(b=e,e=a)}else b=e,e=a}else b=e,e=a;e===a&&(e=b,g=Fa(),g!==a?(n=Wb(),n!==a?e=parseFloat(g+n):(b=e,e=a)):(b=e,e=a),e===a&&(e=b,g=Fa(),g!==a?(n=Xb(),n!==a?e=parseFloat(g+n):(b=e,e=a)):(b=e,e=a),e===a&&(e=b,g=Fa(),g!==a&&(g=parseFloat(g)),e=g)));var q=e;if(q!==a){var Ga=b;h++;var kd=qb();h--;kd===a?Ga=void 0:(b=Ga,Ga=a);Ga!==a?d={type:"number",
value:q}:(b=d,d=a)}else b=d,d=a;c=d;if(c===a){var qa=b;var Z=b;if(f.substr(b,4).toLowerCase()===ld){var Ha=f.substr(b,4);b+=4}else Ha=a,0===h&&m(md);if(Ha!==a){var ra=b;h++;var nd=r();h--;nd===a?ra=void 0:(b=ra,ra=a);ra!==a?Z=Ha=[Ha,ra]:(b=Z,Z=a)}else b=Z,Z=a;var W=Z;W!==a&&(W={type:"bool",value:!0});qa=W;if(qa===a){qa=b;var aa=b;if(f.substr(b,5).toLowerCase()===od){var Ia=f.substr(b,5);b+=5}else Ia=a,0===h&&m(pd);if(Ia!==a){var sa=b;h++;var qd=r();h--;qd===a?sa=void 0:(b=sa,sa=a);sa!==a?aa=Ia=[Ia,
sa]:(b=aa,aa=a)}else b=aa,aa=a;W=aa;W!==a&&(W={type:"bool",value:!1});qa=W}c=qa;if(c===a){var ba=b;if(f.substr(b,4).toLowerCase()===rd){var Ja=f.substr(b,4);b+=4}else Ja=a,0===h&&m(sd);if(Ja!==a){var ta=b;h++;var td=r();h--;td===a?ta=void 0:(b=ta,ta=a);ta!==a?ba=Ja=[Ja,ta]:(b=ba,ba=a)}else b=ba,ba=a;var rb=ba;rb!==a&&(rb={type:"null",value:null});c=rb;if(c===a){var ca=b;var da=b;if(f.substr(b,4).toLowerCase()===ud){var Yb=f.substr(b,4);b+=4}else Yb=a,0===h&&m(vd);if(Yb!==a){var Ka=b;h++;var wd=r();
h--;wd===a?Ka=void 0:(b=Ka,Ka=a);Ka!==a?da="DATE":(b=da,da=a)}else b=da,da=a;if(da!==a){k();var Zb=Y();Zb!==a?ca={type:"date",value:Zb.value}:(b=ca,ca=a)}else b=ca,ca=a;c=ca;if(c===a){var ea=b;var fa=b;if(f.substr(b,9).toLowerCase()===xd){var $b=f.substr(b,9);b+=9}else $b=a,0===h&&m(yd);if($b!==a){var La=b;h++;var zd=r();h--;zd===a?La=void 0:(b=La,La=a);La!==a?fa="TIMESTAMP":(b=fa,fa=a)}else b=fa,fa=a;if(fa!==a){k();var ac=Y();ac!==a?ea={type:"timestamp",value:ac.value}:(b=ea,ea=a)}else b=ea,ea=a;
c=ea;if(c===a){var A=b;var sb=bc();if(sb!==a){k();if(45===f.charCodeAt(b)){var Q=nb;b++}else Q=a,0===h&&m(ob);Q===a&&(43===f.charCodeAt(b)?(Q=lb,b++):(Q=a,0===h&&m(mb)));if(Q!==a){k();var ua=Y();if(ua!==a){k();var dc=cc();dc!==a?A={type:"interval",value:ua,qualifier:dc,op:Q}:(b=A,A=a)}else b=A,A=a}else b=A,A=a}else b=A,A=a;A===a&&(A=b,sb=bc(),sb!==a?(k(),Q=Y(),Q!==a?(k(),ua=cc(),ua!==a?A={type:"interval",value:Q,qualifier:ua,op:""}:(b=A,A=a)):(b=A,A=a)):(b=A,A=a));c=A}}}}}}var v=c;if(v===a){var F=
b;var ha=b;if(f.substr(b,7).toLowerCase()===Ad){var ec=f.substr(b,7);b+=7}else ec=a,0===h&&m(Bd);if(ec!==a){var Ma=b;h++;var Cd=r();h--;Cd===a?Ma=void 0:(b=Ma,Ma=a);Ma!==a?ha="EXTRACT":(b=ha,ha=a)}else b=ha,ha=a;if(ha!==a){k();var Dd=C();if(Dd!==a){k();var J=fc();J===a&&(J=gc(),J===a&&(J=hc(),J===a&&(J=ic(),J===a&&(J=jc(),J===a&&(J=X())))));var kc=J;if(kc!==a){k();var Ed=tb();if(Ed!==a){k();var lc=u();if(lc!==a){k();var Fd=D();Fd!==a?F={type:"function",name:"extract",args:{type:"expr_list",value:[{type:"string",
value:kc},lc]}}:(b=F,F=a)}else b=F,F=a}else b=F,F=a}else b=F,F=a}else b=F,F=a}else b=F,F=a;v=F;if(v===a){var G=b;var ia=b;if(f.substr(b,9).toLowerCase()===Gd){var mc=f.substr(b,9);b+=9}else mc=a,0===h&&m(Hd);if(mc!==a){var Na=b;h++;var Id=r();h--;Id===a?Na=void 0:(b=Na,Na=a);Na!==a?ia="SUBSTRING":(b=ia,ia=a)}else b=ia,ia=a;if(ia!==a){k();var Jd=C();if(Jd!==a){k();var ub=u();if(ub!==a){k();var Kd=tb();if(Kd!==a){k();var vb=u();if(vb!==a){k();var R=b;var ja=b;if(f.substr(b,3).toLowerCase()===Ld){var nc=
f.substr(b,3);b+=3}else nc=a,0===h&&m(Md);if(nc!==a){var Oa=b;h++;var Nd=r();h--;Nd===a?Oa=void 0:(b=Oa,Oa=a);Oa!==a?ja="FOR":(b=ja,ja=a)}else b=ja,ja=a;var va=ja;if(va!==a){var Od=k();var oc=u();if(oc!==a){var Pd=k();R=va=[va,Od,oc,Pd]}else b=R,R=a}else b=R,R=a;R===a&&(R=null);va=D();va!==a?G={type:"function",name:"substring",args:{type:"expr_list",value:R?[ub,vb,R[2]]:[ub,vb]}}:(b=G,G=a)}else b=G,G=a}else b=G,G=a}else b=G,G=a}else b=G,G=a}else b=G,G=a;v=G;if(v===a){var w=b;var wb=pc();if(wb!==a){k();
var xb=C();if(xb!==a){k();var S=qc();S===a&&(S=null);k();var wa=u();if(wa!==a){k();var yb=tb();if(yb!==a){k();var rc=u();if(rc!==a){k();var Qd=D();Qd!==a?w={type:"function",name:"trim",args:{type:"expr_list",value:[{type:"string",value:null==S?"BOTH":S},wa,rc]}}:(b=w,w=a)}else b=w,w=a}else b=w,w=a}else b=w,w=a}else b=w,w=a}else b=w,w=a;w===a&&(w=b,wb=pc(),wb!==a?(k(),xb=C(),xb!==a?(k(),S=qc(),S===a&&(S=null),k(),wa=u(),wa!==a?(k(),yb=D(),yb!==a?w={type:"function",name:"trim",args:{type:"expr_list",
value:[{type:"string",value:null==S?"BOTH":S},wa]}}:(b=w,w=a)):(b=w,w=a)):(b=w,w=a)):(b=w,w=a));v=w;if(v===a){var H=b;var ka=b;if(f.substr(b,8).toLowerCase()===Rd){var sc=f.substr(b,8);b+=8}else sc=a,0===h&&m(Sd);if(sc!==a){var Pa=b;h++;var Td=r();h--;Td===a?Pa=void 0:(b=Pa,Pa=a);Pa!==a?ka="POSITION":(b=ka,ka=a)}else b=ka,ka=a;if(ka!==a){k();var Ud=C();if(Ud!==a){k();var tc=u();if(tc!==a){k();var Vd=jb();if(Vd!==a){k();var uc=u();if(uc!==a){k();var Wd=D();Wd!==a?H={type:"function",name:"position",
args:{type:"expr_list",value:[tc,uc]}}:(b=H,H=a)}else b=H,H=a}else b=H,H=a}else b=H,H=a}else b=H,H=a}else b=H,H=a;v=H;if(v===a){var U=b;var Qa;var K=b;K=Qa=vc();if(K===a)if(K=b,96===f.charCodeAt(b)?(Qa=wc,b++):(Qa=a,0===h&&m(xc)),Qa!==a){var Ra=[];if(yc.test(f.charAt(b))){var T=f.charAt(b);b++}else T=a,0===h&&m(zc);if(T!==a)for(;T!==a;)Ra.push(T),yc.test(f.charAt(b))?(T=f.charAt(b),b++):(T=a,0===h&&m(zc));else Ra=a;Ra!==a?(96===f.charCodeAt(b)?(T=wc,b++):(T=a,0===h&&m(xc)),T!==a?K=Ra.join(""):(b=
K,K=a)):(b=K,K=a)}else b=K,K=a;var Ac=K;if(Ac!==a){k();var Xd=C();if(Xd!==a){k();var Sa=z();Sa===a&&(Sa=null);k();var Yd=D();Yd!==a?U={type:"function",name:Ac,args:Sa?Sa:{type:"expr_list",value:[]}}:(b=U,U=a)}else b=U,U=a}else b=U,U=a;v=U;if(v===a){var N;var B=b;var zb=Ta();if(zb!==a){k();var xa=u();if(xa!==a){k();var ya=[];for(N=Ua();N!==a;)ya.push(N),N=Ua();N=k();var Wa=Va();Wa!==a?B={type:"case_expression",format:"simple",operand:xa,clauses:ya,else:null}:(b=B,B=a)}else b=B,B=a}else b=B,B=a;if(B===
a)if(B=b,zb=Ta(),zb!==a)if(k(),xa=u(),xa!==a){k();ya=[];for(N=Ua();N!==a;)ya.push(N),N=Ua();N=k();Wa=Bc();if(Wa!==a){k();var Zd=Va();Zd!==a?B={type:"case_expression",format:"simple",operand:xa,clauses:ya,else:Wa.value}:(b=B,B=a)}else b=B,B=a}else b=B,B=a;else b=B,B=a;var Ab=B;if(Ab===a){var O;var E=b;var Bb=Ta();if(Bb!==a){k();var za=[];for(O=Xa();O!==a;)za.push(O),O=Xa();O=k();var Ya=Va();Ya!==a?E={type:"case_expression",format:"searched",clauses:za,else:null}:(b=E,E=a)}else b=E,E=a;if(E===a)if(E=
b,Bb=Ta(),Bb!==a){k();za=[];for(O=Xa();O!==a;)za.push(O),O=Xa();O=k();Ya=Bc();if(Ya!==a){k();var $d=Va();$d!==a?E={type:"case_expression",format:"searched",clauses:za,else:Ya.value}:(b=E,E=a)}else b=E,E=a}else b=E,E=a;Ab=E}v=Ab;if(v===a){var Za;var $a=b;var Cc=qb();if(Cc!==a){var Dc=[];for(Za=Ec();Za!==a;)Dc.push(Za),Za=Ec();$a=Cc+Dc.join("")}else b=$a,$a=a;var ab=$a;if(ab!==a){var Cb=ab;ab=/^CURRENT_DATE$/i.test(Cb)?{type:"current_time",mode:"date"}:/^CURRENT_TIMESTAMP$/i.test(Cb)?{type:"current_time",
mode:"timestamp"}:{type:"column_ref",table:"",column:Cb}}v=ab;if(v===a&&(v=hb(),v===a)){v=b;var ae=C();if(ae!==a){k();var Db=u();if(Db!==a){k();var be=D();be!==a?(Db.paren=!0,v=Db):(b=v,v=a)}else b=v,v=a}else b=v,v=a}}}}}}}}return v}function vc(){var c;var d=b;var e=qb();if(e!==a){d=[];for(c=r();c!==a;)d.push(c),c=r();d=e+d.join("")}else b=d,d=a;return d}function qb(){if(ce.test(f.charAt(b))){var c=f.charAt(b);b++}else c=a,0===h&&m(de);return c}function r(){if(ee.test(f.charAt(b))){var c=f.charAt(b);
b++}else c=a,0===h&&m(fe);return c}function Ec(){if(ge.test(f.charAt(b))){var c=f.charAt(b);b++}else c=a,0===h&&m(he);return c}function hb(){var c=b;if(64===f.charCodeAt(b)){var d=ie;b++}else d=a,0===h&&m(je);if(d!==a){var e=vc();e!==a?c=d=[d,e]:(b=c,c=a)}else b=c,c=a;c!==a&&(c={type:"param",value:c[1]});return c}function qc(){var c=b;if(f.substr(b,7).toLowerCase()===ke){var d=f.substr(b,7);b+=7}else d=a,0===h&&m(le);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?c="LEADING":(b=c,
c=a)}else b=c,c=a;c===a&&(c=b,f.substr(b,8).toLowerCase()===me?(d=f.substr(b,8),b+=8):(d=a,0===h&&m(ne)),d!==a?(d=b,h++,e=r(),h--,e===a?d=void 0:(b=d,d=a),d!==a?c="TRAILING":(b=c,c=a)):(b=c,c=a),c===a&&(c=b,f.substr(b,4).toLowerCase()===oe?(d=f.substr(b,4),b+=4):(d=a,0===h&&m(pe)),d!==a?(d=b,h++,e=r(),h--,e===a?d=void 0:(b=d,d=a),d!==a?c="BOTH":(b=c,c=a)):(b=c,c=a)));return c}function cc(){var c=b;var d=b;var e=Aa();if(e!==a){k();var g=C();if(g!==a)if(k(),g=bb(),g!==a){k();var n=D();n!==a?d={type:"interval-period",
period:e.value,precision:g,secondary:null}:(b=d,d=a)}else b=d,d=a;else b=d,d=a}else b=d,d=a;d===a&&(d=b,e=Aa(),e!==a&&(e=Fc(e)),d=e);if(d!==a)if(k(),e=b,f.substr(b,2).toLowerCase()===qe?(g=f.substr(b,2),b+=2):(g=a,0===h&&m(re)),g!==a?(g=b,h++,n=r(),h--,n===a?g=void 0:(b=g,g=a),g!==a?e="TO":(b=e,e=a)):(b=e,e=a),e!==a){k();e=b;g=Aa();g!==a&&(g={type:"interval-period",period:g.value,precision:null,secondary:null});e=g;if(e===a){e=b;g=X();if(g!==a)if(k(),g=C(),g!==a)if(k(),g=bb(),g!==a)if(k(),n=Ca(),
n!==a)if(k(),n=cb(),n!==a){k();var p=D();p!==a?e=Gc(g,n):(b=e,e=a)}else b=e,e=a;else b=e,e=a;else b=e,e=a;else b=e,e=a;else b=e,e=a;e===a&&(e=b,g=X(),g!==a?(k(),g=C(),g!==a?(k(),g=bb(),g!==a?(k(),n=D(),n!==a?e={type:"interval-period",period:"second",precision:g,secondary:null}:(b=e,e=a)):(b=e,e=a)):(b=e,e=a)):(b=e,e=a),e===a&&(e=b,g=X(),g!==a&&(g={type:"interval-period",period:"second",precision:null,secondary:null}),e=g))}e!==a?c={type:"interval-qualifier",start:d,end:e}:(b=c,c=a)}else b=c,c=a;else b=
c,c=a;c===a&&(c=b,e=Aa(),e!==a?(k(),d=C(),d!==a?(k(),d=cb(),d!==a?(k(),g=D(),g!==a?c={type:"interval-period",period:e.value,precision:d,secondary:null}:(b=c,c=a)):(b=c,c=a)):(b=c,c=a)):(b=c,c=a),c===a&&(c=b,e=Aa(),e!==a&&(e=Fc(e)),c=e,c===a&&(c=b,e=X(),e!==a?(k(),d=C(),d!==a?(k(),d=bb(),d!==a?(k(),g=Ca(),g!==a?(k(),e=cb(),e!==a?(k(),g=D(),g!==a?c=Gc(d,e):(b=c,c=a)):(b=c,c=a)):(b=c,c=a)):(b=c,c=a)):(b=c,c=a)):(b=c,c=a),c===a&&(c=b,e=X(),e!==a?(k(),d=C(),d!==a?(k(),d=cb(),d!==a?(k(),g=D(),g!==a?c={type:"interval-period",
period:"second",precision:d,secondary:null}:(b=c,c=a)):(b=c,c=a)):(b=c,c=a)):(b=c,c=a),c===a&&(c=b,e=X(),e!==a&&(e={type:"interval-period",period:"second",precision:null,secondary:null}),c=e)))));return c}function Aa(){var c=b;c=hc();c!==a&&(c={type:"string",value:"day"});c===a&&(c=b,c=ic(),c!==a&&(c={type:"string",value:"hour"}),c===a&&(c=b,c=jc(),c!==a&&(c={type:"string",value:"minute"}),c===a&&(c=b,c=gc(),c!==a&&(c={type:"string",value:"month"}),c===a&&(c=b,c=fc(),c!==a&&(c={type:"string",value:"year"})))));
return c}function cb(){var c=la();c!==a&&(c=parseFloat(c));return c}function bb(){var c=la();c!==a&&(c=parseFloat(c));return c}function Y(){var c=ib();c===a&&(c=hb());return c}function ib(){var c=b;if(39===f.charCodeAt(b)){var d=Hc;b++}else d=a,0===h&&m(Ic);d===a&&(f.substr(b,2)===Jc?(d=Jc,b+=2):(d=a,0===h&&m(se)));if(d!==a){d=[];var e=b;f.substr(b,2)===db?(e=db,b+=2):(e=a,0===h&&m(Kc));e!==a&&(e="'");e===a&&(Lc.test(f.charAt(b))?(e=f.charAt(b),b++):(e=a,0===h&&m(Mc)));for(;e!==a;)d.push(e),e=b,f.substr(b,
2)===db?(e=db,b+=2):(e=a,0===h&&m(Kc)),e!==a&&(e="'"),e===a&&(Lc.test(f.charAt(b))?(e=f.charAt(b),b++):(e=a,0===h&&m(Mc)));39===f.charCodeAt(b)?(e=Hc,b++):(e=a,0===h&&m(Ic));e!==a?c={type:"string",value:d.join("")}:(b=c,c=a)}else b=c,c=a;return c}function Xa(){var c=b;if(Nc()!==a){k();var d=u();if(d!==a){k();var e=Oc();e!==a?(k(),e=u(),e!==a?c={type:"when_clause",operand:d,value:e}:(b=c,c=a)):(b=c,c=a)}else b=c,c=a}else b=c,c=a;return c}function Ua(){var c=b;if(Nc()!==a){k();var d=u();if(d!==a){k();
var e=Oc();e!==a?(k(),e=u(),e!==a?c={type:"when_clause",operand:d,value:e}:(b=c,c=a)):(b=c,c=a)}else b=c,c=a}else b=c,c=a;return c}function Bc(){var c=b;var d=b;if(f.substr(b,4).toLowerCase()===te){var e=f.substr(b,4);b+=4}else e=a,0===h&&m(ue);if(e!==a){e=b;h++;var g=r();h--;g===a?e=void 0:(b=e,e=a);e!==a?d="ELSE":(b=d,d=a)}else b=d,d=a;d!==a?(k(),d=u(),d!==a?c={type:"else_clause",value:d}:(b=c,c=a)):(b=c,c=a);return c}function Fa(){var c=la();if(c===a){c=b;if(45===f.charCodeAt(b)){var d=nb;b++}else d=
a,0===h&&m(ob);d===a&&(43===f.charCodeAt(b)?(d=lb,b++):(d=a,0===h&&m(mb)));if(d!==a){var e=la();e!==a?c=d[0]+e:(b=c,c=a)}else b=c,c=a}return c}function Wb(){var c=b;if(46===f.charCodeAt(b)){var d=ve;b++}else d=a,0===h&&m(we);d!==a?(c=la(),c===a&&(c=null),c="."+(null!=c?c:"")):(b=c,c=a);return c}function Xb(){var c;var d=c=b;if(xe.test(f.charAt(b))){var e=f.charAt(b);b++}else e=a,0===h&&m(ye);e!==a?(ze.test(f.charAt(b))?(d=f.charAt(b),b++):(d=a,0===h&&m(Ae)),d===a&&(d=null),d="e"+(null===d?"":d)):
(b=d,d=a);d!==a?(e=la(),e!==a?c=d+e:(b=c,c=a)):(b=c,c=a);return c}function la(){var c=[];var d=Pc();if(d!==a)for(;d!==a;)c.push(d),d=Pc();else c=a;c!==a&&(c=c.join(""));return c}function Pc(){if(Be.test(f.charAt(b))){var c=f.charAt(b);b++}else c=a,0===h&&m(Ce);return c}function jb(){var c=b;if(f.substr(b,2).toLowerCase()===De){var d=f.substr(b,2);b+=2}else d=a,0===h&&m(Ee);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?c="IN":(b=c,c=a)}else b=c,c=a;return c}function Mb(){var c=b;if(f.substr(b,
2).toLowerCase()===Fe){var d=f.substr(b,2);b+=2}else d=a,0===h&&m(Ge);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?c="IS":(b=c,c=a)}else b=c,c=a;return c}function Tb(){var c=b;if(f.substr(b,4).toLowerCase()===He){var d=f.substr(b,4);b+=4}else d=a,0===h&&m(Ie);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?c="LIKE":(b=c,c=a)}else b=c,c=a;return c}function pa(){var c=b;if(f.substr(b,3).toLowerCase()===Je){var d=f.substr(b,3);b+=3}else d=a,0===h&&m(Ke);if(d!==a){d=b;
h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?c="NOT":(b=c,c=a)}else b=c,c=a;return c}function Ea(){var c=b;if(f.substr(b,3).toLowerCase()===Le){var d=f.substr(b,3);b+=3}else d=a,0===h&&m(Me);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?c="AND":(b=c,c=a)}else b=c,c=a;return c}function Hb(){var c=b;if(f.substr(b,2).toLowerCase()===Ne){var d=f.substr(b,2);b+=2}else d=a,0===h&&m(Oe);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?c="OR":(b=c,c=a)}else b=c,c=a;return c}
function Lb(){var c=b;if(f.substr(b,7).toLowerCase()===Pe){var d=f.substr(b,7);b+=7}else d=a,0===h&&m(Qe);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?c="BETWEEN":(b=c,c=a)}else b=c,c=a;return c}function tb(){var c=b;if(f.substr(b,4).toLowerCase()===Re){var d=f.substr(b,4);b+=4}else d=a,0===h&&m(Se);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?c="FROM":(b=c,c=a)}else b=c,c=a;return c}function pc(){var c=b;if(f.substr(b,4).toLowerCase()===Te){var d=f.substr(b,4);
b+=4}else d=a,0===h&&m(Ue);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?c="TRIM":(b=c,c=a)}else b=c,c=a;return c}function bc(){var c=b;if(f.substr(b,8).toLowerCase()===Ve){var d=f.substr(b,8);b+=8}else d=a,0===h&&m(We);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?c="INTERVAL":(b=c,c=a)}else b=c,c=a;return c}function fc(){var c=b;if(f.substr(b,4).toLowerCase()===Xe){var d=f.substr(b,4);b+=4}else d=a,0===h&&m(Ye);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=
d,d=a);d!==a?c="YEAR":(b=c,c=a)}else b=c,c=a;return c}function gc(){var c=b;if(f.substr(b,5).toLowerCase()===Ze){var d=f.substr(b,5);b+=5}else d=a,0===h&&m($e);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?c="MONTH":(b=c,c=a)}else b=c,c=a;return c}function hc(){var c=b;if(f.substr(b,3).toLowerCase()===af){var d=f.substr(b,3);b+=3}else d=a,0===h&&m(bf);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?c="DAY":(b=c,c=a)}else b=c,c=a;return c}function ic(){var c=b;if(f.substr(b,
4).toLowerCase()===cf){var d=f.substr(b,4);b+=4}else d=a,0===h&&m(df);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?c="HOUR":(b=c,c=a)}else b=c,c=a;return c}function jc(){var c=b;if(f.substr(b,6).toLowerCase()===ef){var d=f.substr(b,6);b+=6}else d=a,0===h&&m(ff);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?c="MINUTE":(b=c,c=a)}else b=c,c=a;return c}function X(){var c=b;if(f.substr(b,6).toLowerCase()===gf){var d=f.substr(b,6);b+=6}else d=a,0===h&&m(hf);if(d!==a){d=
b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?c="SECOND":(b=c,c=a)}else b=c,c=a;return c}function Ta(){var c=b;if(f.substr(b,4).toLowerCase()===jf){var d=f.substr(b,4);b+=4}else d=a,0===h&&m(kf);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?c="CASE":(b=c,c=a)}else b=c,c=a;return c}function Va(){var c=b;if(f.substr(b,3).toLowerCase()===lf){var d=f.substr(b,3);b+=3}else d=a,0===h&&m(mf);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?c="END":(b=c,c=a)}else b=c,c=
a;return c}function Nc(){var c=b;if(f.substr(b,4).toLowerCase()===nf){var d=f.substr(b,4);b+=4}else d=a,0===h&&m(of);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?c="WHEN":(b=c,c=a)}else b=c,c=a;return c}function Oc(){var c=b;if(f.substr(b,4).toLowerCase()===pf){var d=f.substr(b,4);b+=4}else d=a,0===h&&m(qf);if(d!==a){d=b;h++;var e=r();h--;e===a?d=void 0:(b=d,d=a);d!==a?c="THEN":(b=c,c=a)}else b=c,c=a;return c}function Ca(){if(44===f.charCodeAt(b)){var c=rf;b++}else c=a,0===h&&m(sf);
return c}function C(){if(40===f.charCodeAt(b)){var c=tf;b++}else c=a,0===h&&m(uf);return c}function D(){if(41===f.charCodeAt(b)){var c=vf;b++}else c=a,0===h&&m(wf);return c}function k(){var c;var d=[];for(c=Qc();c!==a;)d.push(c),c=Qc();return d}function Qc(){if(xf.test(f.charAt(b))){var c=f.charAt(b);b++}else c=a,0===h&&m(yf);return c}function Ob(c,d,e,g){c={type:"binary_expr",operator:c,left:d,right:e};void 0!==g&&(c.escape=g);return c}function oa(c,d){for(var e=0;e<d.length;e++)c=Ob(d[e][1],c,d[e][3]);
return c}x=void 0!==x?x:{};var a={},Uc=x.grammarSource,Rc={start:t},Sc=t,Vc="!",Ib="\x3d",Pb="\x3e\x3d",$c="\x3e",Qb="\x3c\x3d",Rb="\x3c\x3e",dd="\x3c",Sb="!\x3d",lb="+",nb="-",gd="*",id="/",ie="@",Hc="'",Jc="N'",db="''",ve=".",rd="null",ld="true",od="false",De="in",Fe="is",He="like",Xc="escape",Je="not",Le="and",Ne="or",Pe="between",Re="from",Ld="for",Gd="substring",Ad="extract",Te="trim",Rd="position",xd="timestamp",ud="date",ke="leading",me="trailing",oe="both",qe="to",Ve="interval",Xe="year",
Ze="month",af="day",cf="hour",ef="minute",gf="second",jf="case",lf="end",nf="when",pf="then",te="else",rf=",",tf="(",vf=")",wc="`",ce=/^[A-Za-z_\x80-\uFFFF]/,ee=/^[A-Za-z0-9_]/,ge=/^[A-Za-z0-9_.\x80-\uFFFF]/,Lc=/^[^']/,Be=/^[0-9]/,xe=/^[eE]/,ze=/^[+\-]/,xf=/^[ \t\n\r]/,yc=/^[^`]/,Wc=l("!",!1),Jb=l("\x3d",!1),Zc=l("\x3e\x3d",!1),ad=l("\x3e",!1),bd=l("\x3c\x3d",!1),cd=l("\x3c\x3e",!1),ed=l("\x3c",!1),fd=l("!\x3d",!1),mb=l("+",!1),ob=l("-",!1),hd=l("*",!1),jd=l("/",!1),de=y([["A","Z"],["a","z"],"_",
["\u0080","\uffff"]],!1,!1),fe=y([["A","Z"],["a","z"],["0","9"],"_"],!1,!1),he=y([["A","Z"],["a","z"],["0","9"],"_",".",["\u0080","\uffff"]],!1,!1),je=l("@",!1),Ic=l("'",!1),se=l("N'",!1),Kc=l("''",!1),Mc=y(["'"],!0,!1),we=l(".",!1),Ce=y([["0","9"]],!1,!1),ye=y(["e","E"],!1,!1),Ae=y(["+","-"],!1,!1),sd=l("NULL",!0),md=l("TRUE",!0),pd=l("FALSE",!0),Ee=l("IN",!0),Ge=l("IS",!0),Ie=l("LIKE",!0),Yc=l("ESCAPE",!0),Ke=l("NOT",!0),Me=l("AND",!0),Oe=l("OR",!0),Qe=l("BETWEEN",!0),Se=l("FROM",!0),Md=l("FOR",
!0),Hd=l("SUBSTRING",!0),Bd=l("EXTRACT",!0),Ue=l("TRIM",!0),Sd=l("POSITION",!0),yd=l("TIMESTAMP",!0),vd=l("DATE",!0),le=l("LEADING",!0),ne=l("TRAILING",!0),pe=l("BOTH",!0),re=l("TO",!0),We=l("INTERVAL",!0),Ye=l("YEAR",!0),$e=l("MONTH",!0),bf=l("DAY",!0),df=l("HOUR",!0),ff=l("MINUTE",!0),hf=l("SECOND",!0),kf=l("CASE",!0),mf=l("END",!0),of=l("WHEN",!0),qf=l("THEN",!0),ue=l("ELSE",!0),sf=l(",",!1),uf=l("(",!1),wf=l(")",!1),yf=y([" ","\t","\n","\r"],!1,!1),xc=l("`",!1),zc=y(["`"],!0,!1),Fc=function(c){return{type:"interval-period",
period:c.value,precision:null,secondary:null}},Gc=function(c,d){return{type:"interval-period",period:"second",precision:c,secondary:d}},b=0,Ba=[{line:1,column:1}],M=0,eb=[],h=0;if("startRule"in x){if(!(x.startRule in Rc))throw Error("Can't start parsing from rule \""+x.startRule+'".');Sc=Rc[x.startRule]}var Eb=Sc();if(Eb!==a&&b===f.length)return Eb;Eb!==a&&b<f.length&&m({type:"end"});throw function(c,d,e){return new L(L.buildMessage(c,d),c,d,e)}(eb,M<f.length?f.charAt(M):null,M<f.length?V(M,M+1):
V(M,M));}}})})(Gb);let zf=function(){function ma(){}ma.parse=function(L){return Gb.exports.parse(L)};return ma}();Fb.WhereGrammar=zf;Object.defineProperty(Fb,"__esModule",{value:!0})});