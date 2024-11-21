(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[364], {
    2025: function (e, t, n) {
        var r = n(4155), o = n(4147).version;
        n(9738).config({path: "./.env"}), e.exports = {
            serviceName: "course-player-ui",
            team: "videoservices",
            version: o,
            logPath: r.env.LOG_PATH,
            accessLogPath: r.env.ACCESS_LOG_PATH,
            newRelic: {appName: r.env.NEW_RELIC_APP_NAME, licenseKey: r.env.NEW_RELIC_LICENSE_KEY},
            coursePlayer: {api: {baseUrl: r.env.COURSE_PLAYER_API_BASE_URL}},
            freeLibraryId: r.env.FREE_LIBRARY_ID,
            jwtCookieName: r.env.JWT_COOKIE_NAME,
            jwtSecret: r.env.JWT_SECRET,
            ldSdkKey: r.env.LD_SDK_KEY
        }
    }, 2133: function (e, t, n) {
       // "use strict";
        n.r(t), n.d(t, {
            default: function () {
                return Mn
            }
        });
        var r, o = n(266), i = n(809), a = n.n(i), s = n(7294), c = n(8860), u = n(9008), l = function (e) {
                return e ? {__html: 'window.NREUM||(NREUM={});NREUM.init={distributed_tracing:{enabled:true},privacy:{cookies_enabled:true},ajax:{deny_list:["bam-cell.nr-data.net"]}};window.NREUM||(NREUM={}),__nr_require=function(t,e,n){function r(n){if(!e[n]){var o=e[n]={exports:{}};t[n][0].call(o.exports,function(e){var o=t[n][1][e];return r(o||e)},o,o.exports)}return e[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var o=0;o<n.length;o++)r(n[o]);return r}({1:[function(t,e,n){function r(t){try{s.console&&console.log(t)}catch(e){}}var o,i=t("ee"),a=t(32),s={};try{o=localStorage.getItem("__nr_flags").split(","),console&&"function"==typeof console.log&&(s.console=!0,o.indexOf("dev")!==-1&&(s.dev=!0),o.indexOf("nr_dev")!==-1&&(s.nrDev=!0))}catch(c){}s.nrDev&&i.on("internal-error",function(t){r(t.stack)}),s.dev&&i.on("fn-err",function(t,e,n){r(n.stack)}),s.dev&&(r("NR AGENT IN DEVELOPMENT MODE"),r("flags: "+a(s,function(t,e){return t}).join(", ")))},{}],2:[function(t,e,n){function r(t,e,n,r,s){try{l?l-=1:o(s||new UncaughtException(t,e,n),!0)}catch(f){try{i("ierr",[f,c.now(),!0])}catch(d){}}return"function"==typeof u&&u.apply(this,a(arguments))}function UncaughtException(t,e,n){this.message=t||"Uncaught error with no additional information",this.sourceURL=e,this.line=n}function o(t,e){var n=e?null:c.now();i("err",[t,n])}var i=t("handle"),a=t(33),s=t("ee"),c=t("loader"),f=t("gos"),u=window.onerror,d=!1,p="nr@seenError";if(!c.disabled){var l=0;c.features.err=!0,t(1),window.onerror=r;try{throw new Error}catch(h){"stack"in h&&(t(14),t(13),"addEventListener"in window&&t(7),c.xhrWrappable&&t(15),d=!0)}s.on("fn-start",function(t,e,n){d&&(l+=1)}),s.on("fn-err",function(t,e,n){d&&!n[p]&&(f(n,p,function(){return!0}),this.thrown=!0,o(n))}),s.on("fn-end",function(){d&&!this.thrown&&l>0&&(l-=1)}),s.on("internal-error",function(t){i("ierr",[t,c.now(),!0])})}},{}],3:[function(t,e,n){var r=t("loader");r.disabled||(r.features.ins=!0)},{}],4:[function(t,e,n){function r(){U++,L=g.hash,this[u]=y.now()}function o(){U--,g.hash!==L&&i(0,!0);var t=y.now();this[h]=~~this[h]+t-this[u],this[d]=t}function i(t,e){E.emit("newURL",[""+g,e])}function a(t,e){t.on(e,function(){this[e]=y.now()})}var s="-start",c="-end",f="-body",u="fn"+s,d="fn"+c,p="cb"+s,l="cb"+c,h="jsTime",m="fetch",v="addEventListener",w=window,g=w.location,y=t("loader");if(w[v]&&y.xhrWrappable&&!y.disabled){var x=t(11),b=t(12),E=t(9),R=t(7),O=t(14),T=t(8),P=t(15),S=t(10),M=t("ee"),N=M.get("tracer"),C=t(23);t(17),y.features.spa=!0;var L,U=0;M.on(u,r),b.on(p,r),S.on(p,r),M.on(d,o),b.on(l,o),S.on(l,o),M.buffer([u,d,"xhr-resolved"]),R.buffer([u]),O.buffer(["setTimeout"+c,"clearTimeout"+s,u]),P.buffer([u,"new-xhr","send-xhr"+s]),T.buffer([m+s,m+"-done",m+f+s,m+f+c]),E.buffer(["newURL"]),x.buffer([u]),b.buffer(["propagate",p,l,"executor-err","resolve"+s]),N.buffer([u,"no-"+u]),S.buffer(["new-jsonp","cb-start","jsonp-error","jsonp-end"]),a(T,m+s),a(T,m+"-done"),a(S,"new-jsonp"),a(S,"jsonp-end"),a(S,"cb-start"),E.on("pushState-end",i),E.on("replaceState-end",i),w[v]("hashchange",i,C(!0)),w[v]("load",i,C(!0)),w[v]("popstate",function(){i(0,U>1)},C(!0))}},{}],5:[function(t,e,n){function r(){var t=new PerformanceObserver(function(t,e){var n=t.getEntries();s(v,[n])});try{t.observe({entryTypes:["resource"]})}catch(e){}}function o(t){if(s(v,[window.performance.getEntriesByType(w)]),window.performance["c"+p])try{window.performance[h](m,o,!1)}catch(t){}else try{window.performance[h]("webkit"+m,o,!1)}catch(t){}}function i(t){}if(window.performance&&window.performance.timing&&window.performance.getEntriesByType){var a=t("ee"),s=t("handle"),c=t(14),f=t(13),u=t(6),d=t(23),p="learResourceTimings",l="addEventListener",h="removeEventListener",m="resourcetimingbufferfull",v="bstResource",w="resource",g="-start",y="-end",x="fn"+g,b="fn"+y,E="bstTimer",R="pushState",O=t("loader");if(!O.disabled){O.features.stn=!0,t(9),"addEventListener"in window&&t(7);var T=NREUM.o.EV;a.on(x,function(t,e){var n=t[0];n instanceof T&&(this.bstStart=O.now())}),a.on(b,function(t,e){var n=t[0];n instanceof T&&s("bst",[n,e,this.bstStart,O.now()])}),c.on(x,function(t,e,n){this.bstStart=O.now(),this.bstType=n}),c.on(b,function(t,e){s(E,[e,this.bstStart,O.now(),this.bstType])}),f.on(x,function(){this.bstStart=O.now()}),f.on(b,function(t,e){s(E,[e,this.bstStart,O.now(),"requestAnimationFrame"])}),a.on(R+g,function(t){this.time=O.now(),this.startPath=location.pathname+location.hash}),a.on(R+y,function(t){s("bstHist",[location.pathname+location.hash,this.startPath,this.time])}),u()?(s(v,[window.performance.getEntriesByType("resource")]),r()):l in window.performance&&(window.performance["c"+p]?window.performance[l](m,o,d(!1)):window.performance[l]("webkit"+m,o,d(!1))),document[l]("scroll",i,d(!1)),document[l]("keypress",i,d(!1)),document[l]("click",i,d(!1))}}},{}],6:[function(t,e,n){e.exports=function(){return"PerformanceObserver"in window&&"function"==typeof window.PerformanceObserver}},{}],7:[function(t,e,n){function r(t){for(var e=t;e&&!e.hasOwnProperty(u);)e=Object.getPrototypeOf(e);e&&o(e)}function o(t){s.inPlace(t,[u,d],"-",i)}function i(t,e){return t[1]}var a=t("ee").get("events"),s=t("wrap-function")(a,!0),c=t("gos"),f=XMLHttpRequest,u="addEventListener",d="removeEventListener";e.exports=a,"getPrototypeOf"in Object?(r(document),r(window),r(f.prototype)):f.prototype.hasOwnProperty(u)&&(o(window),o(f.prototype)),a.on(u+"-start",function(t,e){var n=t[1];if(null!==n&&("function"==typeof n||"object"==typeof n)){var r=c(n,"nr@wrapped",function(){function t(){if("function"==typeof n.handleEvent)return n.handleEvent.apply(n,arguments)}var e={object:t,"function":n}[typeof n];return e?s(e,"fn-",null,e.name||"anonymous"):n});this.wrapped=t[1]=r}}),a.on(d+"-start",function(t){t[1]=this.wrapped||t[1]})},{}],8:[function(t,e,n){function r(t,e,n){var r=t[e];"function"==typeof r&&(t[e]=function(){var t=i(arguments),e={};o.emit(n+"before-start",[t],e);var a;e[m]&&e[m].dt&&(a=e[m].dt);var s=r.apply(this,t);return o.emit(n+"start",[t,a],s),s.then(function(t){return o.emit(n+"end",[null,t],s),t},function(t){throw o.emit(n+"end",[t],s),t})})}var o=t("ee").get("fetch"),i=t(33),a=t(32);e.exports=o;var s=window,c="fetch-",f=c+"body-",u=["arrayBuffer","blob","json","text","formData"],d=s.Request,p=s.Response,l=s.fetch,h="prototype",m="nr@context";d&&p&&l&&(a(u,function(t,e){r(d[h],e,f),r(p[h],e,f)}),r(s,"fetch",c),o.on(c+"end",function(t,e){var n=this;if(e){var r=e.headers.get("content-length");null!==r&&(n.rxSize=r),o.emit(c+"done",[null,e],n)}else o.emit(c+"done",[t],n)}))},{}],9:[function(t,e,n){var r=t("ee").get("history"),o=t("wrap-function")(r);e.exports=r;var i=window.history&&window.history.constructor&&window.history.constructor.prototype,a=window.history;i&&i.pushState&&i.replaceState&&(a=i),o.inPlace(a,["pushState","replaceState"],"-")},{}],10:[function(t,e,n){function r(t){function e(){f.emit("jsonp-end",[],l),t.removeEventListener("load",e,c(!1)),t.removeEventListener("error",n,c(!1))}function n(){f.emit("jsonp-error",[],l),f.emit("jsonp-end",[],l),t.removeEventListener("load",e,c(!1)),t.removeEventListener("error",n,c(!1))}var r=t&&"string"==typeof t.nodeName&&"script"===t.nodeName.toLowerCase();if(r){var o="function"==typeof t.addEventListener;if(o){var a=i(t.src);if(a){var d=s(a),p="function"==typeof d.parent[d.key];if(p){var l={};u.inPlace(d.parent,[d.key],"cb-",l),t.addEventListener("load",e,c(!1)),t.addEventListener("error",n,c(!1)),f.emit("new-jsonp",[t.src],l)}}}}}function o(){return"addEventListener"in window}function i(t){var e=t.match(d);return e?e[1]:null}function a(t,e){var n=t.match(l),r=n[1],o=n[3];return o?a(o,e[r]):e[r]}function s(t){var e=t.match(p);return e&&e.length>=3?{key:e[2],parent:a(e[1],window)}:{key:t,parent:window}}var c=t(23),f=t("ee").get("jsonp"),u=t("wrap-function")(f);if(e.exports=f,o()){var d=/[?&](?:callback|cb)=([^&#]+)/,p=/(.*).([^.]+)/,l=/^(w+)(.|$)(.*)$/,h=["appendChild","insertBefore","replaceChild"];Node&&Node.prototype&&Node.prototype.appendChild?u.inPlace(Node.prototype,h,"dom-"):(u.inPlace(HTMLElement.prototype,h,"dom-"),u.inPlace(HTMLHeadElement.prototype,h,"dom-"),u.inPlace(HTMLBodyElement.prototype,h,"dom-")),f.on("dom-start",function(t){r(t[0])})}},{}],11:[function(t,e,n){var r=t("ee").get("mutation"),o=t("wrap-function")(r),i=NREUM.o.MO;e.exports=r,i&&(window.MutationObserver=function(t){return this instanceof i?new i(o(t,"fn-")):i.apply(this,arguments)},MutationObserver.prototype=i.prototype)},{}],12:[function(t,e,n){function r(t){var e=i.context(),n=s(t,"executor-",e,null,!1),r=new f(n);return i.context(r).getCtx=function(){return e},r}var o=t("wrap-function"),i=t("ee").get("promise"),a=t("ee").getOrSetContext,s=o(i),c=t(32),f=NREUM.o.PR;e.exports=i,f&&(window.Promise=r,["all","race"].forEach(function(t){var e=f[t];f[t]=function(n){function r(t){return function(){i.emit("propagate",[null,!o],a,!1,!1),o=o||!t}}var o=!1;c(n,function(e,n){Promise.resolve(n).then(r("all"===t),r(!1))});var a=e.apply(f,arguments),s=f.resolve(a);return s}}),["resolve","reject"].forEach(function(t){var e=f[t];f[t]=function(t){var n=e.apply(f,arguments);return t!==n&&i.emit("propagate",[t,!0],n,!1,!1),n}}),f.prototype["catch"]=function(t){return this.then(null,t)},f.prototype=Object.create(f.prototype,{constructor:{value:r}}),c(Object.getOwnPropertyNames(f),function(t,e){try{r[e]=f[e]}catch(n){}}),o.wrapInPlace(f.prototype,"then",function(t){return function(){var e=this,n=o.argsToArray.apply(this,arguments),r=a(e);r.promise=e,n[0]=s(n[0],"cb-",r,null,!1),n[1]=s(n[1],"cb-",r,null,!1);var c=t.apply(this,n);return r.nextPromise=c,i.emit("propagate",[e,!0],c,!1,!1),c}}),i.on("executor-start",function(t){t[0]=s(t[0],"resolve-",this,null,!1),t[1]=s(t[1],"resolve-",this,null,!1)}),i.on("executor-err",function(t,e,n){t[1](n)}),i.on("cb-end",function(t,e,n){i.emit("propagate",[n,!0],this.nextPromise,!1,!1)}),i.on("propagate",function(t,e,n){this.getCtx&&!e||(this.getCtx=function(){if(t instanceof Promise)var e=i.context(t);return e&&e.getCtx?e.getCtx():this})}),r.toString=function(){return""+f})},{}],13:[function(t,e,n){var r=t("ee").get("raf"),o=t("wrap-function")(r),i="equestAnimationFrame";e.exports=r,o.inPlace(window,["r"+i,"mozR"+i,"webkitR"+i,"msR"+i],"raf-"),r.on("raf-start",function(t){t[0]=o(t[0],"fn-")})},{}],14:[function(t,e,n){function r(t,e,n){t[0]=a(t[0],"fn-",null,n)}function o(t,e,n){this.method=n,this.timerDuration=isNaN(t[1])?0:+t[1],t[0]=a(t[0],"fn-",this,n)}var i=t("ee").get("timer"),a=t("wrap-function")(i),s="setTimeout",c="setInterval",f="clearTimeout",u="-start",d="-";e.exports=i,a.inPlace(window,[s,"setImmediate"],s+d),a.inPlace(window,[c],c+d),a.inPlace(window,[f,"clearImmediate"],f+d),i.on(c+u,r),i.on(s+u,o)},{}],15:[function(t,e,n){function r(t,e){d.inPlace(e,["onreadystatechange"],"fn-",s)}function o(){var t=this,e=u.context(t);t.readyState>3&&!e.resolved&&(e.resolved=!0,u.emit("xhr-resolved",[],t)),d.inPlace(t,y,"fn-",s)}function i(t){x.push(t),m&&(E?E.then(a):w?w(a):(R=-R,O.data=R))}function a(){for(var t=0;t<x.length;t++)r([],x[t]);x.length&&(x=[])}function s(t,e){return e}function c(t,e){for(var n in t)e[n]=t[n];return e}t(7);var f=t("ee"),u=f.get("xhr"),d=t("wrap-function")(u),p=t(23),l=NREUM.o,h=l.XHR,m=l.MO,v=l.PR,w=l.SI,g="readystatechange",y=["onload","onerror","onabort","onloadstart","onloadend","onprogress","ontimeout"],x=[];e.exports=u;var b=window.XMLHttpRequest=function(t){var e=new h(t);try{u.emit("new-xhr",[e],e),e.addEventListener(g,o,p(!1))}catch(n){try{u.emit("internal-error",[n])}catch(r){}}return e};if(c(h,b),b.prototype=h.prototype,d.inPlace(b.prototype,["open","send"],"-xhr-",s),u.on("send-xhr-start",function(t,e){r(t,e),i(e)}),u.on("open-xhr-start",r),m){var E=v&&v.resolve();if(!w&&!v){var R=1,O=document.createTextNode(R);new m(a).observe(O,{characterData:!0})}}else f.on("fn-end",function(t){t[0]&&t[0].type===g||a()})},{}],16:[function(t,e,n){function r(t){if(!s(t))return null;var e=window.NREUM;if(!e.loader_config)return null;var n=(e.loader_config.accountID||"").toString()||null,r=(e.loader_config.agentID||"").toString()||null,f=(e.loader_config.trustKey||"").toString()||null;if(!n||!r)return null;var h=l.generateSpanId(),m=l.generateTraceId(),v=Date.now(),w={spanId:h,traceId:m,timestamp:v};return(t.sameOrigin||c(t)&&p())&&(w.traceContextParentHeader=o(h,m),w.traceContextStateHeader=i(h,v,n,r,f)),(t.sameOrigin&&!u()||!t.sameOrigin&&c(t)&&d())&&(w.newrelicHeader=a(h,m,v,n,r,f)),w}function o(t,e){return"00-"+e+"-"+t+"-01"}function i(t,e,n,r,o){var i=0,a="",s=1,c="",f="";return o+"@nr="+i+"-"+s+"-"+n+"-"+r+"-"+t+"-"+a+"-"+c+"-"+f+"-"+e}function a(t,e,n,r,o,i){var a="btoa"in window&&"function"==typeof window.btoa;if(!a)return null;var s={v:[0,1],d:{ty:"Browser",ac:r,ap:o,id:t,tr:e,ti:n}};return i&&r!==i&&(s.d.tk=i),btoa(JSON.stringify(s))}function s(t){return f()&&c(t)}function c(t){var e=!1,n={};if("init"in NREUM&&"distributed_tracing"in NREUM.init&&(n=NREUM.init.distributed_tracing),t.sameOrigin)e=!0;else if(n.allowed_origins instanceof Array)for(var r=0;r<n.allowed_origins.length;r++){var o=h(n.allowed_origins[r]);if(t.hostname===o.hostname&&t.protocol===o.protocol&&t.port===o.port){e=!0;break}}return e}function f(){return"init"in NREUM&&"distributed_tracing"in NREUM.init&&!!NREUM.init.distributed_tracing.enabled}function u(){return"init"in NREUM&&"distributed_tracing"in NREUM.init&&!!NREUM.init.distributed_tracing.exclude_newrelic_header}function d(){return"init"in NREUM&&"distributed_tracing"in NREUM.init&&NREUM.init.distributed_tracing.cors_use_newrelic_header!==!1}function p(){return"init"in NREUM&&"distributed_tracing"in NREUM.init&&!!NREUM.init.distributed_tracing.cors_use_tracecontext_headers}var l=t(29),h=t(18);e.exports={generateTracePayload:r,shouldGenerateTrace:s}},{}],17:[function(t,e,n){function r(t){var e=this.params,n=this.metrics;if(!this.ended){this.ended=!0;for(var r=0;r<p;r++)t.removeEventListener(d[r],this.listener,!1);e.aborted||(n.duration=a.now()-this.startTime,this.loadCaptureCalled||4!==t.readyState?null==e.status&&(e.status=0):i(this,t),n.cbTime=this.cbTime,s("xhr",[e,n,this.startTime,this.endTime,"xhr"],this))}}function o(t,e){var n=c(e),r=t.params;r.hostname=n.hostname,r.port=n.port,r.protocol=n.protocol,r.host=n.hostname+":"+n.port,r.pathname=n.pathname,t.parsedOrigin=n,t.sameOrigin=n.sameOrigin}function i(t,e){t.params.status=e.status;var n=v(e,t.lastSize);if(n&&(t.metrics.rxSize=n),t.sameOrigin){var r=e.getResponseHeader("X-NewRelic-App-Data");r&&(t.params.cat=r.split(", ").pop())}t.loadCaptureCalled=!0}var a=t("loader");if(a.xhrWrappable&&!a.disabled){var s=t("handle"),c=t(18),f=t(16).generateTracePayload,u=t("ee"),d=["load","error","abort","timeout"],p=d.length,l=t("id"),h=t(24),m=t(22),v=t(19),w=t(23),g=NREUM.o.REQ,y=window.XMLHttpRequest;a.features.xhr=!0,t(15),t(8),u.on("new-xhr",function(t){var e=this;e.totalCbs=0,e.called=0,e.cbTime=0,e.end=r,e.ended=!1,e.xhrGuids={},e.lastSize=null,e.loadCaptureCalled=!1,e.params=this.params||{},e.metrics=this.metrics||{},t.addEventListener("load",function(n){i(e,t)},w(!1)),h&&(h>34||h<10)||t.addEventListener("progress",function(t){e.lastSize=t.loaded},w(!1))}),u.on("open-xhr-start",function(t){this.params={method:t[0]},o(this,t[1]),this.metrics={}}),u.on("open-xhr-end",function(t,e){"loader_config"in NREUM&&"xpid"in NREUM.loader_config&&this.sameOrigin&&e.setRequestHeader("X-NewRelic-ID",NREUM.loader_config.xpid);var n=f(this.parsedOrigin);if(n){var r=!1;n.newrelicHeader&&(e.setRequestHeader("newrelic",n.newrelicHeader),r=!0),n.traceContextParentHeader&&(e.setRequestHeader("traceparent",n.traceContextParentHeader),n.traceContextStateHeader&&e.setRequestHeader("tracestate",n.traceContextStateHeader),r=!0),r&&(this.dt=n)}}),u.on("send-xhr-start",function(t,e){var n=this.metrics,r=t[0],o=this;if(n&&r){var i=m(r);i&&(n.txSize=i)}this.startTime=a.now(),this.listener=function(t){try{"abort"!==t.type||o.loadCaptureCalled||(o.params.aborted=!0),("load"!==t.type||o.called===o.totalCbs&&(o.onloadCalled||"function"!=typeof e.onload))&&o.end(e)}catch(n){try{u.emit("internal-error",[n])}catch(r){}}};for(var s=0;s<p;s++)e.addEventListener(d[s],this.listener,w(!1))}),u.on("xhr-cb-time",function(t,e,n){this.cbTime+=t,e?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&"function"==typeof n.onload||this.end(n)}),u.on("xhr-load-added",function(t,e){var n=""+l(t)+!!e;this.xhrGuids&&!this.xhrGuids[n]&&(this.xhrGuids[n]=!0,this.totalCbs+=1)}),u.on("xhr-load-removed",function(t,e){var n=""+l(t)+!!e;this.xhrGuids&&this.xhrGuids[n]&&(delete this.xhrGuids[n],this.totalCbs-=1)}),u.on("xhr-resolved",function(){this.endTime=a.now()}),u.on("addEventListener-end",function(t,e){e instanceof y&&"load"===t[0]&&u.emit("xhr-load-added",[t[1],t[2]],e)}),u.on("removeEventListener-end",function(t,e){e instanceof y&&"load"===t[0]&&u.emit("xhr-load-removed",[t[1],t[2]],e)}),u.on("fn-start",function(t,e,n){e instanceof y&&("onload"===n&&(this.onload=!0),("load"===(t[0]&&t[0].type)||this.onload)&&(this.xhrCbStart=a.now()))}),u.on("fn-end",function(t,e){this.xhrCbStart&&u.emit("xhr-cb-time",[a.now()-this.xhrCbStart,this.onload,e],e)}),u.on("fetch-before-start",function(t){function e(t,e){var n=!1;return e.newrelicHeader&&(t.set("newrelic",e.newrelicHeader),n=!0),e.traceContextParentHeader&&(t.set("traceparent",e.traceContextParentHeader),e.traceContextStateHeader&&t.set("tracestate",e.traceContextStateHeader),n=!0),n}var n,r=t[1]||{};"string"==typeof t[0]?n=t[0]:t[0]&&t[0].url?n=t[0].url:window.URL&&t[0]&&t[0]instanceof URL&&(n=t[0].href),n&&(this.parsedOrigin=c(n),this.sameOrigin=this.parsedOrigin.sameOrigin);var o=f(this.parsedOrigin);if(o&&(o.newrelicHeader||o.traceContextParentHeader))if("string"==typeof t[0]||window.URL&&t[0]&&t[0]instanceof URL){var i={};for(var a in r)i[a]=r[a];i.headers=new Headers(r.headers||{}),e(i.headers,o)&&(this.dt=o),t.length>1?t[1]=i:t.push(i)}else t[0]&&t[0].headers&&e(t[0].headers,o)&&(this.dt=o)}),u.on("fetch-start",function(t,e){this.params={},this.metrics={},this.startTime=a.now(),this.dt=e,t.length>=1&&(this.target=t[0]),t.length>=2&&(this.opts=t[1]);var n,r=this.opts||{},i=this.target;"string"==typeof i?n=i:"object"==typeof i&&i instanceof g?n=i.url:window.URL&&"object"==typeof i&&i instanceof URL&&(n=i.href),o(this,n);var s=(""+(i&&i instanceof g&&i.method||r.method||"GET")).toUpperCase();this.params.method=s,this.txSize=m(r.body)||0}),u.on("fetch-done",function(t,e){this.endTime=a.now(),this.params||(this.params={}),this.params.status=e?e.status:0;var n;"string"==typeof this.rxSize&&this.rxSize.length>0&&(n=+this.rxSize);var r={txSize:this.txSize,rxSize:n,duration:a.now()-this.startTime};s("xhr",[this.params,r,this.startTime,this.endTime,"fetch"],this)})}},{}],18:[function(t,e,n){var r={};e.exports=function(t){if(t in r)return r[t];var e=document.createElement("a"),n=window.location,o={};e.href=t,o.port=e.port;var i=e.href.split("://");!o.port&&i[1]&&(o.port=i[1].split("/")[0].split("@").pop().split(":")[1]),o.port&&"0"!==o.port||(o.port="https"===i[0]?"443":"80"),o.hostname=e.hostname||n.hostname,o.pathname=e.pathname,o.protocol=i[0],"/"!==o.pathname.charAt(0)&&(o.pathname="/"+o.pathname);var a=!e.protocol||":"===e.protocol||e.protocol===n.protocol,s=e.hostname===document.domain&&e.port===n.port;return o.sameOrigin=a&&(!e.hostname||s),"/"===o.pathname&&(r[t]=o),o}},{}],19:[function(t,e,n){function r(t,e){var n=t.responseType;return"json"===n&&null!==e?e:"arraybuffer"===n||"blob"===n||"json"===n?o(t.response):"text"===n||""===n||void 0===n?o(t.responseText):void 0}var o=t(22);e.exports=r},{}],20:[function(t,e,n){function r(){}function o(t,e,n,r){return function(){return u.recordSupportability("API/"+e+"/called"),i(t+e,[f.now()].concat(s(arguments)),n?null:this,r),n?void 0:this}}var i=t("handle"),a=t(32),s=t(33),c=t("ee").get("tracer"),f=t("loader"),u=t(25),d=NREUM;"undefined"==typeof window.newrelic&&(newrelic=d);var p=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],l="api-",h=l+"ixn-";a(p,function(t,e){d[e]=o(l,e,!0,"api")}),d.addPageAction=o(l,"addPageAction",!0),d.setCurrentRouteName=o(l,"routeName",!0),e.exports=newrelic,d.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(t,e){var n={},r=this,o="function"==typeof e;return i(h+"tracer",[f.now(),t,n],r),function(){if(c.emit((o?"":"no-")+"fn-start",[f.now(),r,o],n),o)try{return e.apply(this,arguments)}catch(t){throw c.emit("fn-err",[arguments,this,t],n),t}finally{c.emit("fn-end",[f.now()],n)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(t,e){m[e]=o(h,e)}),newrelic.noticeError=function(t,e){"string"==typeof t&&(t=new Error(t)),u.recordSupportability("API/noticeError/called"),i("err",[t,f.now(),!1,e])}},{}],21:[function(t,e,n){function r(t){if(NREUM.init){for(var e=NREUM.init,n=t.split("."),r=0;r<n.length-1;r++)if(e=e[n[r]],"object"!=typeof e)return;return e=e[n[n.length-1]]}}e.exports={getConfiguration:r}},{}],22:[function(t,e,n){e.exports=function(t){if("string"==typeof t&&t.length)return t.length;if("object"==typeof t){if("undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer&&t.byteLength)return t.byteLength;if("undefined"!=typeof Blob&&t instanceof Blob&&t.size)return t.size;if(!("undefined"!=typeof FormData&&t instanceof FormData))try{return JSON.stringify(t).length}catch(e){return}}}},{}],23:[function(t,e,n){var r=!1;try{var o=Object.defineProperty({},"passive",{get:function(){r=!0}});window.addEventListener("testPassive",null,o),window.removeEventListener("testPassive",null,o)}catch(i){}e.exports=function(t){return r?{passive:!0,capture:!!t}:!!t}},{}],24:[function(t,e,n){var r=0,o=navigator.userAgent.match(/Firefox[/s](d+.d+)/);o&&(r=+o[1]),e.exports=r},{}],25:[function(t,e,n){function r(t,e){var n=[a,t,{name:t},e];return i("storeMetric",n,null,"api"),n}function o(t,e){var n=[s,t,{name:t},e];return i("storeEventMetrics",n,null,"api"),n}var i=t("handle"),a="sm",s="cm";e.exports={constants:{SUPPORTABILITY_METRIC:a,CUSTOM_METRIC:s},recordSupportability:r,recordCustom:o}},{}],26:[function(t,e,n){function r(){return s.exists&&performance.now?Math.round(performance.now()):(i=Math.max((new Date).getTime(),i))-a}function o(){return i}var i=(new Date).getTime(),a=i,s=t(34);e.exports=r,e.exports.offset=a,e.exports.getLastTimestamp=o},{}],27:[function(t,e,n){function r(t){return!(!t||!t.protocol||"file:"===t.protocol)}e.exports=r},{}],28:[function(t,e,n){function r(t,e){var n=t.getEntries();n.forEach(function(t){"first-paint"===t.name?p("timing",["fp",Math.floor(t.startTime)]):"first-contentful-paint"===t.name&&p("timing",["fcp",Math.floor(t.startTime)])})}function o(t,e){var n=t.getEntries();if(n.length>0){var r=n[n.length-1];if(c&&c<r.startTime)return;p("lcp",[r])}}function i(t){t.getEntries().forEach(function(t){t.hadRecentInput||p("cls",[t])})}function a(t){if(t instanceof v&&!g){var e=Math.round(t.timeStamp),n={type:t.type};e<=l.now()?n.fid=l.now()-e:e>l.offset&&e<=Date.now()?(e-=l.offset,n.fid=l.now()-e):e=l.now(),g=!0,p("timing",["fi",e,n])}}function s(t){"hidden"===t&&(c=l.now(),p("pageHide",[c]))}if(!("init"in NREUM&&"page_view_timing"in NREUM.init&&"enabled"in NREUM.init.page_view_timing&&NREUM.init.page_view_timing.enabled===!1)){var c,f,u,d,p=t("handle"),l=t("loader"),h=t(31),m=t(23),v=NREUM.o.EV;if("PerformanceObserver"in window&&"function"==typeof window.PerformanceObserver){f=new PerformanceObserver(r);try{f.observe({entryTypes:["paint"]})}catch(w){}u=new PerformanceObserver(o);try{u.observe({entryTypes:["largest-contentful-paint"]})}catch(w){}d=new PerformanceObserver(i);try{d.observe({type:"layout-shift",buffered:!0})}catch(w){}}if("addEventListener"in document){var g=!1,y=["click","keydown","mousedown","pointerdown","touchstart"];y.forEach(function(t){document.addEventListener(t,a,m(!1))})}h(s)}},{}],29:[function(t,e,n){function r(){function t(){return e?15&e[n++]:16*Math.random()|0}var e=null,n=0,r=window.crypto||window.msCrypto;r&&r.getRandomValues&&(e=r.getRandomValues(new Uint8Array(31)));for(var o,i="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",a="",s=0;s<i.length;s++)o=i[s],"x"===o?a+=t().toString(16):"y"===o?(o=3&t()|8,a+=o.toString(16)):a+=o;return a}function o(){return a(16)}function i(){return a(32)}function a(t){function e(){return n?15&n[r++]:16*Math.random()|0}var n=null,r=0,o=window.crypto||window.msCrypto;o&&o.getRandomValues&&Uint8Array&&(n=o.getRandomValues(new Uint8Array(31)));for(var i=[],a=0;a<t;a++)i.push(e().toString(16));return i.join("")}e.exports={generateUuid:r,generateSpanId:o,generateTraceId:i}},{}],30:[function(t,e,n){function r(t,e){if(!o)return!1;if(t!==o)return!1;if(!e)return!0;if(!i)return!1;for(var n=i.split("."),r=e.split("."),a=0;a<r.length;a++)if(r[a]!==n[a])return!1;return!0}var o=null,i=null,a=/Version\\/(\\S+)\\s+Safari/;if(navigator.userAgent){var s=navigator.userAgent,c=s.match(a);c&&s.indexOf("Chrome")===-1&&s.indexOf("Chromium")===-1&&(o="Safari",i=c[1])}e.exports={agent:o,version:i,match:r}},{}],31:[function(t,e,n){function r(t){function e(){t(s&&document[s]?document[s]:document[i]?"hidden":"visible")}"addEventListener"in document&&a&&document.addEventListener(a,e,o(!1))}var o=t(23);e.exports=r;var i,a,s;"undefined"!=typeof document.hidden?(i="hidden",a="visibilitychange",s="visibilityState"):"undefined"!=typeof document.msHidden?(i="msHidden",a="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(i="webkitHidden",a="webkitvisibilitychange",s="webkitVisibilityState")},{}],32:[function(t,e,n){function r(t,e){var n=[],r="",i=0;for(r in t)o.call(t,r)&&(n[i]=e(r,t[r]),i+=1);return n}var o=Object.prototype.hasOwnProperty;e.exports=r},{}],33:[function(t,e,n){function r(t,e,n){e||(e=0),"undefined"==typeof n&&(n=t?t.length:0);for(var r=-1,o=n-e||0,i=Array(o<0?0:o);++r<o;)i[r]=t[e+r];return i}e.exports=r},{}],34:[function(t,e,n){e.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(t,e,n){function r(){}function o(t){function e(t){return t&&t instanceof r?t:t?f(t,c,a):a()}function n(n,r,o,i,a){if(a!==!1&&(a=!0),!l.aborted||i){t&&a&&t(n,r,o);for(var s=e(o),c=m(n),f=c.length,u=0;u<f;u++)c[u].apply(s,r);var p=d[y[n]];return p&&p.push([x,n,r,s]),s}}function i(t,e){g[t]=m(t).concat(e)}function h(t,e){var n=g[t];if(n)for(var r=0;r<n.length;r++)n[r]===e&&n.splice(r,1)}function m(t){return g[t]||[]}function v(t){return p[t]=p[t]||o(n)}function w(t,e){l.aborted||u(t,function(t,n){e=e||"feature",y[n]=e,e in d||(d[e]=[])})}var g={},y={},x={on:i,addEventListener:i,removeEventListener:h,emit:n,get:v,listeners:m,context:e,buffer:w,abort:s,aborted:!1};return x}function i(t){return f(t,c,a)}function a(){return new r}function s(){(d.api||d.feature)&&(l.aborted=!0,d=l.backlog={})}var c="nr@context",f=t("gos"),u=t(32),d={},p={},l=e.exports=o();e.exports.getOrSetContext=i,l.backlog=d},{}],gos:[function(t,e,n){function r(t,e,n){if(o.call(t,e))return t[e];var r=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(t,e,{value:r,writable:!0,enumerable:!1}),r}catch(i){}return t[e]=r,r}var o=Object.prototype.hasOwnProperty;e.exports=r},{}],handle:[function(t,e,n){function r(t,e,n,r){o.buffer([t],r),o.emit(t,e,n)}var o=t("ee").get("handle");e.exports=r,r.ee=o},{}],id:[function(t,e,n){function r(t){var e=typeof t;return!t||"object"!==e&&"function"!==e?-1:t===window?0:a(t,i,function(){return o++})}var o=1,i="nr@id",a=t("gos");e.exports=r},{}],loader:[function(t,e,n){function r(){if(!P++){var t=T.info=NREUM.info,e=v.getElementsByTagName("script")[0];if(setTimeout(f.abort,3e4),!(t&&t.licenseKey&&t.applicationID&&e))return f.abort();c(R,function(e,n){t[e]||(t[e]=n)});var n=a();s("mark",["onload",n+T.offset],null,"api"),s("timing",["load",n]);var r=v.createElement("script");0===t.agent.indexOf("http://")||0===t.agent.indexOf("https://")?r.src=t.agent:r.src=h+"://"+t.agent,e.parentNode.insertBefore(r,e)}}function o(){"complete"===v.readyState&&i()}function i(){s("mark",["domContent",a()+T.offset],null,"api")}var a=t(26),s=t("handle"),c=t(32),f=t("ee"),u=t(30),d=t(27),p=t(21),l=t(23),h=p.getConfiguration("ssl")===!1?"http":"https",m=window,v=m.document,w="addEventListener",g="attachEvent",y=m.XMLHttpRequest,x=y&&y.prototype,b=!d(m.location);NREUM.o={ST:setTimeout,SI:m.setImmediate,CT:clearTimeout,XHR:y,REQ:m.Request,EV:m.Event,PR:m.Promise,MO:m.MutationObserver};var E=""+location,R={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-spa-1212.min.js"},O=y&&x&&x[w]&&!/CriOS/.test(navigator.userAgent),T=e.exports={offset:a.getLastTimestamp(),now:a,origin:E,features:{},xhrWrappable:O,userAgent:u,disabled:b};if(!b){t(20),t(28),v[w]?(v[w]("DOMContentLoaded",i,l(!1)),m[w]("load",r,l(!1))):(v[g]("onreadystatechange",o),m[g]("onload",r)),s("mark",["firstbyte",a.getLastTimestamp()],null,"api");var P=0}},{}],"wrap-function":[function(t,e,n){function r(t,e){function n(e,n,r,c,f){function nrWrapper(){var i,a,u,p;try{a=this,i=d(arguments),u="function"==typeof r?r(i,a):r||{}}catch(l){o([l,"",[i,a,c],u],t)}s(n+"start",[i,a,c],u,f);try{return p=e.apply(a,i)}catch(h){throw s(n+"err",[i,a,h],u,f),h}finally{s(n+"end",[i,a,p],u,f)}}return a(e)?e:(n||(n=""),nrWrapper[p]=e,i(e,nrWrapper,t),nrWrapper)}function r(t,e,r,o,i){r||(r="");var s,c,f,u="-"===r.charAt(0);for(f=0;f<e.length;f++)c=e[f],s=t[c],a(s)||(t[c]=n(s,u?c+r:r,o,c,i))}function s(n,r,i,a){if(!h||e){var s=h;h=!0;try{t.emit(n,r,i,e,a)}catch(c){o([c,n,r,i],t)}h=s}}return t||(t=u),n.inPlace=r,n.flag=p,n}function o(t,e){e||(e=u);try{e.emit("internal-error",t)}catch(n){}}function i(t,e,n){if(Object.defineProperty&&Object.keys)try{var r=Object.keys(t);return r.forEach(function(n){Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){return t[n]=e,e}})}),e}catch(i){o([i],n)}for(var a in t)l.call(t,a)&&(e[a]=t[a]);return e}function a(t){return!(t&&t instanceof Function&&t.apply&&!t[p])}function s(t,e){var n=e(t);return n[p]=t,i(t,n,u),n}function c(t,e,n){var r=t[e];t[e]=s(r,n)}function f(){for(var t=arguments.length,e=new Array(t),n=0;n<t;++n)e[n]=arguments[n];return e}var u=t("ee"),d=t(33),p="nr@original",l=Object.prototype.hasOwnProperty,h=!1;e.exports=r,e.exports.wrapFunction=s,e.exports.wrapInPlace=c,e.exports.argsToArray=f},{}]},{},["loader",2,17,5,3,4]);NREUM.loader_config={accountID:"331786",trustKey:"331786",agentID:"339378916",licenseKey:"2700af8a3c",applicationID:"309520240"};NREUM.info={beacon:"bam-cell.nr-data.net",errorBeacon:"bam-cell.nr-data.net",licenseKey:"2700af8a3c",applicationID:"309520240",sa:1}'} : {__html: 'window.NREUM||(NREUM={});NREUM.init={privacy:{cookies_enabled:true},ajax:{deny_list:["bam-cell.nr-data.net"]}};window.NREUM||(NREUM={}),__nr_require=function(t,e,n){function r(n){if(!e[n]){var o=e[n]={exports:{}};t[n][0].call(o.exports,function(e){var o=t[n][1][e];return r(o||e)},o,o.exports)}return e[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var o=0;o<n.length;o++)r(n[o]);return r}({1:[function(t,e,n){function r(t){try{s.console&&console.log(t)}catch(e){}}var o,i=t("ee"),a=t(32),s={};try{o=localStorage.getItem("__nr_flags").split(","),console&&"function"==typeof console.log&&(s.console=!0,o.indexOf("dev")!==-1&&(s.dev=!0),o.indexOf("nr_dev")!==-1&&(s.nrDev=!0))}catch(c){}s.nrDev&&i.on("internal-error",function(t){r(t.stack)}),s.dev&&i.on("fn-err",function(t,e,n){r(n.stack)}),s.dev&&(r("NR AGENT IN DEVELOPMENT MODE"),r("flags: "+a(s,function(t,e){return t}).join(", ")))},{}],2:[function(t,e,n){function r(t,e,n,r,s){try{l?l-=1:o(s||new UncaughtException(t,e,n),!0)}catch(f){try{i("ierr",[f,c.now(),!0])}catch(d){}}return"function"==typeof u&&u.apply(this,a(arguments))}function UncaughtException(t,e,n){this.message=t||"Uncaught error with no additional information",this.sourceURL=e,this.line=n}function o(t,e){var n=e?null:c.now();i("err",[t,n])}var i=t("handle"),a=t(33),s=t("ee"),c=t("loader"),f=t("gos"),u=window.onerror,d=!1,p="nr@seenError";if(!c.disabled){var l=0;c.features.err=!0,t(1),window.onerror=r;try{throw new Error}catch(h){"stack"in h&&(t(14),t(13),"addEventListener"in window&&t(7),c.xhrWrappable&&t(15),d=!0)}s.on("fn-start",function(t,e,n){d&&(l+=1)}),s.on("fn-err",function(t,e,n){d&&!n[p]&&(f(n,p,function(){return!0}),this.thrown=!0,o(n))}),s.on("fn-end",function(){d&&!this.thrown&&l>0&&(l-=1)}),s.on("internal-error",function(t){i("ierr",[t,c.now(),!0])})}},{}],3:[function(t,e,n){var r=t("loader");r.disabled||(r.features.ins=!0)},{}],4:[function(t,e,n){function r(){U++,L=g.hash,this[u]=y.now()}function o(){U--,g.hash!==L&&i(0,!0);var t=y.now();this[h]=~~this[h]+t-this[u],this[d]=t}function i(t,e){E.emit("newURL",[""+g,e])}function a(t,e){t.on(e,function(){this[e]=y.now()})}var s="-start",c="-end",f="-body",u="fn"+s,d="fn"+c,p="cb"+s,l="cb"+c,h="jsTime",m="fetch",v="addEventListener",w=window,g=w.location,y=t("loader");if(w[v]&&y.xhrWrappable&&!y.disabled){var x=t(11),b=t(12),E=t(9),R=t(7),O=t(14),T=t(8),P=t(15),S=t(10),M=t("ee"),N=M.get("tracer"),C=t(23);t(17),y.features.spa=!0;var L,U=0;M.on(u,r),b.on(p,r),S.on(p,r),M.on(d,o),b.on(l,o),S.on(l,o),M.buffer([u,d,"xhr-resolved"]),R.buffer([u]),O.buffer(["setTimeout"+c,"clearTimeout"+s,u]),P.buffer([u,"new-xhr","send-xhr"+s]),T.buffer([m+s,m+"-done",m+f+s,m+f+c]),E.buffer(["newURL"]),x.buffer([u]),b.buffer(["propagate",p,l,"executor-err","resolve"+s]),N.buffer([u,"no-"+u]),S.buffer(["new-jsonp","cb-start","jsonp-error","jsonp-end"]),a(T,m+s),a(T,m+"-done"),a(S,"new-jsonp"),a(S,"jsonp-end"),a(S,"cb-start"),E.on("pushState-end",i),E.on("replaceState-end",i),w[v]("hashchange",i,C(!0)),w[v]("load",i,C(!0)),w[v]("popstate",function(){i(0,U>1)},C(!0))}},{}],5:[function(t,e,n){function r(){var t=new PerformanceObserver(function(t,e){var n=t.getEntries();s(v,[n])});try{t.observe({entryTypes:["resource"]})}catch(e){}}function o(t){if(s(v,[window.performance.getEntriesByType(w)]),window.performance["c"+p])try{window.performance[h](m,o,!1)}catch(t){}else try{window.performance[h]("webkit"+m,o,!1)}catch(t){}}function i(t){}if(window.performance&&window.performance.timing&&window.performance.getEntriesByType){var a=t("ee"),s=t("handle"),c=t(14),f=t(13),u=t(6),d=t(23),p="learResourceTimings",l="addEventListener",h="removeEventListener",m="resourcetimingbufferfull",v="bstResource",w="resource",g="-start",y="-end",x="fn"+g,b="fn"+y,E="bstTimer",R="pushState",O=t("loader");if(!O.disabled){O.features.stn=!0,t(9),"addEventListener"in window&&t(7);var T=NREUM.o.EV;a.on(x,function(t,e){var n=t[0];n instanceof T&&(this.bstStart=O.now())}),a.on(b,function(t,e){var n=t[0];n instanceof T&&s("bst",[n,e,this.bstStart,O.now()])}),c.on(x,function(t,e,n){this.bstStart=O.now(),this.bstType=n}),c.on(b,function(t,e){s(E,[e,this.bstStart,O.now(),this.bstType])}),f.on(x,function(){this.bstStart=O.now()}),f.on(b,function(t,e){s(E,[e,this.bstStart,O.now(),"requestAnimationFrame"])}),a.on(R+g,function(t){this.time=O.now(),this.startPath=location.pathname+location.hash}),a.on(R+y,function(t){s("bstHist",[location.pathname+location.hash,this.startPath,this.time])}),u()?(s(v,[window.performance.getEntriesByType("resource")]),r()):l in window.performance&&(window.performance["c"+p]?window.performance[l](m,o,d(!1)):window.performance[l]("webkit"+m,o,d(!1))),document[l]("scroll",i,d(!1)),document[l]("keypress",i,d(!1)),document[l]("click",i,d(!1))}}},{}],6:[function(t,e,n){e.exports=function(){return"PerformanceObserver"in window&&"function"==typeof window.PerformanceObserver}},{}],7:[function(t,e,n){function r(t){for(var e=t;e&&!e.hasOwnProperty(u);)e=Object.getPrototypeOf(e);e&&o(e)}function o(t){s.inPlace(t,[u,d],"-",i)}function i(t,e){return t[1]}var a=t("ee").get("events"),s=t("wrap-function")(a,!0),c=t("gos"),f=XMLHttpRequest,u="addEventListener",d="removeEventListener";e.exports=a,"getPrototypeOf"in Object?(r(document),r(window),r(f.prototype)):f.prototype.hasOwnProperty(u)&&(o(window),o(f.prototype)),a.on(u+"-start",function(t,e){var n=t[1];if(null!==n&&("function"==typeof n||"object"==typeof n)){var r=c(n,"nr@wrapped",function(){function t(){if("function"==typeof n.handleEvent)return n.handleEvent.apply(n,arguments)}var e={object:t,"function":n}[typeof n];return e?s(e,"fn-",null,e.name||"anonymous"):n});this.wrapped=t[1]=r}}),a.on(d+"-start",function(t){t[1]=this.wrapped||t[1]})},{}],8:[function(t,e,n){function r(t,e,n){var r=t[e];"function"==typeof r&&(t[e]=function(){var t=i(arguments),e={};o.emit(n+"before-start",[t],e);var a;e[m]&&e[m].dt&&(a=e[m].dt);var s=r.apply(this,t);return o.emit(n+"start",[t,a],s),s.then(function(t){return o.emit(n+"end",[null,t],s),t},function(t){throw o.emit(n+"end",[t],s),t})})}var o=t("ee").get("fetch"),i=t(33),a=t(32);e.exports=o;var s=window,c="fetch-",f=c+"body-",u=["arrayBuffer","blob","json","text","formData"],d=s.Request,p=s.Response,l=s.fetch,h="prototype",m="nr@context";d&&p&&l&&(a(u,function(t,e){r(d[h],e,f),r(p[h],e,f)}),r(s,"fetch",c),o.on(c+"end",function(t,e){var n=this;if(e){var r=e.headers.get("content-length");null!==r&&(n.rxSize=r),o.emit(c+"done",[null,e],n)}else o.emit(c+"done",[t],n)}))},{}],9:[function(t,e,n){var r=t("ee").get("history"),o=t("wrap-function")(r);e.exports=r;var i=window.history&&window.history.constructor&&window.history.constructor.prototype,a=window.history;i&&i.pushState&&i.replaceState&&(a=i),o.inPlace(a,["pushState","replaceState"],"-")},{}],10:[function(t,e,n){function r(t){function e(){f.emit("jsonp-end",[],l),t.removeEventListener("load",e,c(!1)),t.removeEventListener("error",n,c(!1))}function n(){f.emit("jsonp-error",[],l),f.emit("jsonp-end",[],l),t.removeEventListener("load",e,c(!1)),t.removeEventListener("error",n,c(!1))}var r=t&&"string"==typeof t.nodeName&&"script"===t.nodeName.toLowerCase();if(r){var o="function"==typeof t.addEventListener;if(o){var a=i(t.src);if(a){var d=s(a),p="function"==typeof d.parent[d.key];if(p){var l={};u.inPlace(d.parent,[d.key],"cb-",l),t.addEventListener("load",e,c(!1)),t.addEventListener("error",n,c(!1)),f.emit("new-jsonp",[t.src],l)}}}}}function o(){return"addEventListener"in window}function i(t){var e=t.match(d);return e?e[1]:null}function a(t,e){var n=t.match(l),r=n[1],o=n[3];return o?a(o,e[r]):e[r]}function s(t){var e=t.match(p);return e&&e.length>=3?{key:e[2],parent:a(e[1],window)}:{key:t,parent:window}}var c=t(23),f=t("ee").get("jsonp"),u=t("wrap-function")(f);if(e.exports=f,o()){var d=/[?&](?:callback|cb)=([^&#]+)/,p=/(.*).([^.]+)/,l=/^(w+)(.|$)(.*)$/,h=["appendChild","insertBefore","replaceChild"];Node&&Node.prototype&&Node.prototype.appendChild?u.inPlace(Node.prototype,h,"dom-"):(u.inPlace(HTMLElement.prototype,h,"dom-"),u.inPlace(HTMLHeadElement.prototype,h,"dom-"),u.inPlace(HTMLBodyElement.prototype,h,"dom-")),f.on("dom-start",function(t){r(t[0])})}},{}],11:[function(t,e,n){var r=t("ee").get("mutation"),o=t("wrap-function")(r),i=NREUM.o.MO;e.exports=r,i&&(window.MutationObserver=function(t){return this instanceof i?new i(o(t,"fn-")):i.apply(this,arguments)},MutationObserver.prototype=i.prototype)},{}],12:[function(t,e,n){function r(t){var e=i.context(),n=s(t,"executor-",e,null,!1),r=new f(n);return i.context(r).getCtx=function(){return e},r}var o=t("wrap-function"),i=t("ee").get("promise"),a=t("ee").getOrSetContext,s=o(i),c=t(32),f=NREUM.o.PR;e.exports=i,f&&(window.Promise=r,["all","race"].forEach(function(t){var e=f[t];f[t]=function(n){function r(t){return function(){i.emit("propagate",[null,!o],a,!1,!1),o=o||!t}}var o=!1;c(n,function(e,n){Promise.resolve(n).then(r("all"===t),r(!1))});var a=e.apply(f,arguments),s=f.resolve(a);return s}}),["resolve","reject"].forEach(function(t){var e=f[t];f[t]=function(t){var n=e.apply(f,arguments);return t!==n&&i.emit("propagate",[t,!0],n,!1,!1),n}}),f.prototype["catch"]=function(t){return this.then(null,t)},f.prototype=Object.create(f.prototype,{constructor:{value:r}}),c(Object.getOwnPropertyNames(f),function(t,e){try{r[e]=f[e]}catch(n){}}),o.wrapInPlace(f.prototype,"then",function(t){return function(){var e=this,n=o.argsToArray.apply(this,arguments),r=a(e);r.promise=e,n[0]=s(n[0],"cb-",r,null,!1),n[1]=s(n[1],"cb-",r,null,!1);var c=t.apply(this,n);return r.nextPromise=c,i.emit("propagate",[e,!0],c,!1,!1),c}}),i.on("executor-start",function(t){t[0]=s(t[0],"resolve-",this,null,!1),t[1]=s(t[1],"resolve-",this,null,!1)}),i.on("executor-err",function(t,e,n){t[1](n)}),i.on("cb-end",function(t,e,n){i.emit("propagate",[n,!0],this.nextPromise,!1,!1)}),i.on("propagate",function(t,e,n){this.getCtx&&!e||(this.getCtx=function(){if(t instanceof Promise)var e=i.context(t);return e&&e.getCtx?e.getCtx():this})}),r.toString=function(){return""+f})},{}],13:[function(t,e,n){var r=t("ee").get("raf"),o=t("wrap-function")(r),i="equestAnimationFrame";e.exports=r,o.inPlace(window,["r"+i,"mozR"+i,"webkitR"+i,"msR"+i],"raf-"),r.on("raf-start",function(t){t[0]=o(t[0],"fn-")})},{}],14:[function(t,e,n){function r(t,e,n){t[0]=a(t[0],"fn-",null,n)}function o(t,e,n){this.method=n,this.timerDuration=isNaN(t[1])?0:+t[1],t[0]=a(t[0],"fn-",this,n)}var i=t("ee").get("timer"),a=t("wrap-function")(i),s="setTimeout",c="setInterval",f="clearTimeout",u="-start",d="-";e.exports=i,a.inPlace(window,[s,"setImmediate"],s+d),a.inPlace(window,[c],c+d),a.inPlace(window,[f,"clearImmediate"],f+d),i.on(c+u,r),i.on(s+u,o)},{}],15:[function(t,e,n){function r(t,e){d.inPlace(e,["onreadystatechange"],"fn-",s)}function o(){var t=this,e=u.context(t);t.readyState>3&&!e.resolved&&(e.resolved=!0,u.emit("xhr-resolved",[],t)),d.inPlace(t,y,"fn-",s)}function i(t){x.push(t),m&&(E?E.then(a):w?w(a):(R=-R,O.data=R))}function a(){for(var t=0;t<x.length;t++)r([],x[t]);x.length&&(x=[])}function s(t,e){return e}function c(t,e){for(var n in t)e[n]=t[n];return e}t(7);var f=t("ee"),u=f.get("xhr"),d=t("wrap-function")(u),p=t(23),l=NREUM.o,h=l.XHR,m=l.MO,v=l.PR,w=l.SI,g="readystatechange",y=["onload","onerror","onabort","onloadstart","onloadend","onprogress","ontimeout"],x=[];e.exports=u;var b=window.XMLHttpRequest=function(t){var e=new h(t);try{u.emit("new-xhr",[e],e),e.addEventListener(g,o,p(!1))}catch(n){try{u.emit("internal-error",[n])}catch(r){}}return e};if(c(h,b),b.prototype=h.prototype,d.inPlace(b.prototype,["open","send"],"-xhr-",s),u.on("send-xhr-start",function(t,e){r(t,e),i(e)}),u.on("open-xhr-start",r),m){var E=v&&v.resolve();if(!w&&!v){var R=1,O=document.createTextNode(R);new m(a).observe(O,{characterData:!0})}}else f.on("fn-end",function(t){t[0]&&t[0].type===g||a()})},{}],16:[function(t,e,n){function r(t){if(!s(t))return null;var e=window.NREUM;if(!e.loader_config)return null;var n=(e.loader_config.accountID||"").toString()||null,r=(e.loader_config.agentID||"").toString()||null,f=(e.loader_config.trustKey||"").toString()||null;if(!n||!r)return null;var h=l.generateSpanId(),m=l.generateTraceId(),v=Date.now(),w={spanId:h,traceId:m,timestamp:v};return(t.sameOrigin||c(t)&&p())&&(w.traceContextParentHeader=o(h,m),w.traceContextStateHeader=i(h,v,n,r,f)),(t.sameOrigin&&!u()||!t.sameOrigin&&c(t)&&d())&&(w.newrelicHeader=a(h,m,v,n,r,f)),w}function o(t,e){return"00-"+e+"-"+t+"-01"}function i(t,e,n,r,o){var i=0,a="",s=1,c="",f="";return o+"@nr="+i+"-"+s+"-"+n+"-"+r+"-"+t+"-"+a+"-"+c+"-"+f+"-"+e}function a(t,e,n,r,o,i){var a="btoa"in window&&"function"==typeof window.btoa;if(!a)return null;var s={v:[0,1],d:{ty:"Browser",ac:r,ap:o,id:t,tr:e,ti:n}};return i&&r!==i&&(s.d.tk=i),btoa(JSON.stringify(s))}function s(t){return f()&&c(t)}function c(t){var e=!1,n={};if("init"in NREUM&&"distributed_tracing"in NREUM.init&&(n=NREUM.init.distributed_tracing),t.sameOrigin)e=!0;else if(n.allowed_origins instanceof Array)for(var r=0;r<n.allowed_origins.length;r++){var o=h(n.allowed_origins[r]);if(t.hostname===o.hostname&&t.protocol===o.protocol&&t.port===o.port){e=!0;break}}return e}function f(){return"init"in NREUM&&"distributed_tracing"in NREUM.init&&!!NREUM.init.distributed_tracing.enabled}function u(){return"init"in NREUM&&"distributed_tracing"in NREUM.init&&!!NREUM.init.distributed_tracing.exclude_newrelic_header}function d(){return"init"in NREUM&&"distributed_tracing"in NREUM.init&&NREUM.init.distributed_tracing.cors_use_newrelic_header!==!1}function p(){return"init"in NREUM&&"distributed_tracing"in NREUM.init&&!!NREUM.init.distributed_tracing.cors_use_tracecontext_headers}var l=t(29),h=t(18);e.exports={generateTracePayload:r,shouldGenerateTrace:s}},{}],17:[function(t,e,n){function r(t){var e=this.params,n=this.metrics;if(!this.ended){this.ended=!0;for(var r=0;r<p;r++)t.removeEventListener(d[r],this.listener,!1);e.aborted||(n.duration=a.now()-this.startTime,this.loadCaptureCalled||4!==t.readyState?null==e.status&&(e.status=0):i(this,t),n.cbTime=this.cbTime,s("xhr",[e,n,this.startTime,this.endTime,"xhr"],this))}}function o(t,e){var n=c(e),r=t.params;r.hostname=n.hostname,r.port=n.port,r.protocol=n.protocol,r.host=n.hostname+":"+n.port,r.pathname=n.pathname,t.parsedOrigin=n,t.sameOrigin=n.sameOrigin}function i(t,e){t.params.status=e.status;var n=v(e,t.lastSize);if(n&&(t.metrics.rxSize=n),t.sameOrigin){var r=e.getResponseHeader("X-NewRelic-App-Data");r&&(t.params.cat=r.split(", ").pop())}t.loadCaptureCalled=!0}var a=t("loader");if(a.xhrWrappable&&!a.disabled){var s=t("handle"),c=t(18),f=t(16).generateTracePayload,u=t("ee"),d=["load","error","abort","timeout"],p=d.length,l=t("id"),h=t(24),m=t(22),v=t(19),w=t(23),g=NREUM.o.REQ,y=window.XMLHttpRequest;a.features.xhr=!0,t(15),t(8),u.on("new-xhr",function(t){var e=this;e.totalCbs=0,e.called=0,e.cbTime=0,e.end=r,e.ended=!1,e.xhrGuids={},e.lastSize=null,e.loadCaptureCalled=!1,e.params=this.params||{},e.metrics=this.metrics||{},t.addEventListener("load",function(n){i(e,t)},w(!1)),h&&(h>34||h<10)||t.addEventListener("progress",function(t){e.lastSize=t.loaded},w(!1))}),u.on("open-xhr-start",function(t){this.params={method:t[0]},o(this,t[1]),this.metrics={}}),u.on("open-xhr-end",function(t,e){"loader_config"in NREUM&&"xpid"in NREUM.loader_config&&this.sameOrigin&&e.setRequestHeader("X-NewRelic-ID",NREUM.loader_config.xpid);var n=f(this.parsedOrigin);if(n){var r=!1;n.newrelicHeader&&(e.setRequestHeader("newrelic",n.newrelicHeader),r=!0),n.traceContextParentHeader&&(e.setRequestHeader("traceparent",n.traceContextParentHeader),n.traceContextStateHeader&&e.setRequestHeader("tracestate",n.traceContextStateHeader),r=!0),r&&(this.dt=n)}}),u.on("send-xhr-start",function(t,e){var n=this.metrics,r=t[0],o=this;if(n&&r){var i=m(r);i&&(n.txSize=i)}this.startTime=a.now(),this.listener=function(t){try{"abort"!==t.type||o.loadCaptureCalled||(o.params.aborted=!0),("load"!==t.type||o.called===o.totalCbs&&(o.onloadCalled||"function"!=typeof e.onload))&&o.end(e)}catch(n){try{u.emit("internal-error",[n])}catch(r){}}};for(var s=0;s<p;s++)e.addEventListener(d[s],this.listener,w(!1))}),u.on("xhr-cb-time",function(t,e,n){this.cbTime+=t,e?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&"function"==typeof n.onload||this.end(n)}),u.on("xhr-load-added",function(t,e){var n=""+l(t)+!!e;this.xhrGuids&&!this.xhrGuids[n]&&(this.xhrGuids[n]=!0,this.totalCbs+=1)}),u.on("xhr-load-removed",function(t,e){var n=""+l(t)+!!e;this.xhrGuids&&this.xhrGuids[n]&&(delete this.xhrGuids[n],this.totalCbs-=1)}),u.on("xhr-resolved",function(){this.endTime=a.now()}),u.on("addEventListener-end",function(t,e){e instanceof y&&"load"===t[0]&&u.emit("xhr-load-added",[t[1],t[2]],e)}),u.on("removeEventListener-end",function(t,e){e instanceof y&&"load"===t[0]&&u.emit("xhr-load-removed",[t[1],t[2]],e)}),u.on("fn-start",function(t,e,n){e instanceof y&&("onload"===n&&(this.onload=!0),("load"===(t[0]&&t[0].type)||this.onload)&&(this.xhrCbStart=a.now()))}),u.on("fn-end",function(t,e){this.xhrCbStart&&u.emit("xhr-cb-time",[a.now()-this.xhrCbStart,this.onload,e],e)}),u.on("fetch-before-start",function(t){function e(t,e){var n=!1;return e.newrelicHeader&&(t.set("newrelic",e.newrelicHeader),n=!0),e.traceContextParentHeader&&(t.set("traceparent",e.traceContextParentHeader),e.traceContextStateHeader&&t.set("tracestate",e.traceContextStateHeader),n=!0),n}var n,r=t[1]||{};"string"==typeof t[0]?n=t[0]:t[0]&&t[0].url?n=t[0].url:window.URL&&t[0]&&t[0]instanceof URL&&(n=t[0].href),n&&(this.parsedOrigin=c(n),this.sameOrigin=this.parsedOrigin.sameOrigin);var o=f(this.parsedOrigin);if(o&&(o.newrelicHeader||o.traceContextParentHeader))if("string"==typeof t[0]||window.URL&&t[0]&&t[0]instanceof URL){var i={};for(var a in r)i[a]=r[a];i.headers=new Headers(r.headers||{}),e(i.headers,o)&&(this.dt=o),t.length>1?t[1]=i:t.push(i)}else t[0]&&t[0].headers&&e(t[0].headers,o)&&(this.dt=o)}),u.on("fetch-start",function(t,e){this.params={},this.metrics={},this.startTime=a.now(),this.dt=e,t.length>=1&&(this.target=t[0]),t.length>=2&&(this.opts=t[1]);var n,r=this.opts||{},i=this.target;"string"==typeof i?n=i:"object"==typeof i&&i instanceof g?n=i.url:window.URL&&"object"==typeof i&&i instanceof URL&&(n=i.href),o(this,n);var s=(""+(i&&i instanceof g&&i.method||r.method||"GET")).toUpperCase();this.params.method=s,this.txSize=m(r.body)||0}),u.on("fetch-done",function(t,e){this.endTime=a.now(),this.params||(this.params={}),this.params.status=e?e.status:0;var n;"string"==typeof this.rxSize&&this.rxSize.length>0&&(n=+this.rxSize);var r={txSize:this.txSize,rxSize:n,duration:a.now()-this.startTime};s("xhr",[this.params,r,this.startTime,this.endTime,"fetch"],this)})}},{}],18:[function(t,e,n){var r={};e.exports=function(t){if(t in r)return r[t];var e=document.createElement("a"),n=window.location,o={};e.href=t,o.port=e.port;var i=e.href.split("://");!o.port&&i[1]&&(o.port=i[1].split("/")[0].split("@").pop().split(":")[1]),o.port&&"0"!==o.port||(o.port="https"===i[0]?"443":"80"),o.hostname=e.hostname||n.hostname,o.pathname=e.pathname,o.protocol=i[0],"/"!==o.pathname.charAt(0)&&(o.pathname="/"+o.pathname);var a=!e.protocol||":"===e.protocol||e.protocol===n.protocol,s=e.hostname===document.domain&&e.port===n.port;return o.sameOrigin=a&&(!e.hostname||s),"/"===o.pathname&&(r[t]=o),o}},{}],19:[function(t,e,n){function r(t,e){var n=t.responseType;return"json"===n&&null!==e?e:"arraybuffer"===n||"blob"===n||"json"===n?o(t.response):"text"===n||""===n||void 0===n?o(t.responseText):void 0}var o=t(22);e.exports=r},{}],20:[function(t,e,n){function r(){}function o(t,e,n,r){return function(){return u.recordSupportability("API/"+e+"/called"),i(t+e,[f.now()].concat(s(arguments)),n?null:this,r),n?void 0:this}}var i=t("handle"),a=t(32),s=t(33),c=t("ee").get("tracer"),f=t("loader"),u=t(25),d=NREUM;"undefined"==typeof window.newrelic&&(newrelic=d);var p=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],l="api-",h=l+"ixn-";a(p,function(t,e){d[e]=o(l,e,!0,"api")}),d.addPageAction=o(l,"addPageAction",!0),d.setCurrentRouteName=o(l,"routeName",!0),e.exports=newrelic,d.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(t,e){var n={},r=this,o="function"==typeof e;return i(h+"tracer",[f.now(),t,n],r),function(){if(c.emit((o?"":"no-")+"fn-start",[f.now(),r,o],n),o)try{return e.apply(this,arguments)}catch(t){throw c.emit("fn-err",[arguments,this,t],n),t}finally{c.emit("fn-end",[f.now()],n)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(t,e){m[e]=o(h,e)}),newrelic.noticeError=function(t,e){"string"==typeof t&&(t=new Error(t)),u.recordSupportability("API/noticeError/called"),i("err",[t,f.now(),!1,e])}},{}],21:[function(t,e,n){function r(t){if(NREUM.init){for(var e=NREUM.init,n=t.split("."),r=0;r<n.length-1;r++)if(e=e[n[r]],"object"!=typeof e)return;return e=e[n[n.length-1]]}}e.exports={getConfiguration:r}},{}],22:[function(t,e,n){e.exports=function(t){if("string"==typeof t&&t.length)return t.length;if("object"==typeof t){if("undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer&&t.byteLength)return t.byteLength;if("undefined"!=typeof Blob&&t instanceof Blob&&t.size)return t.size;if(!("undefined"!=typeof FormData&&t instanceof FormData))try{return JSON.stringify(t).length}catch(e){return}}}},{}],23:[function(t,e,n){var r=!1;try{var o=Object.defineProperty({},"passive",{get:function(){r=!0}});window.addEventListener("testPassive",null,o),window.removeEventListener("testPassive",null,o)}catch(i){}e.exports=function(t){return r?{passive:!0,capture:!!t}:!!t}},{}],24:[function(t,e,n){var r=0,o=navigator.userAgent.match(/Firefox[/s](d+.d+)/);o&&(r=+o[1]),e.exports=r},{}],25:[function(t,e,n){function r(t,e){var n=[a,t,{name:t},e];return i("storeMetric",n,null,"api"),n}function o(t,e){var n=[s,t,{name:t},e];return i("storeEventMetrics",n,null,"api"),n}var i=t("handle"),a="sm",s="cm";e.exports={constants:{SUPPORTABILITY_METRIC:a,CUSTOM_METRIC:s},recordSupportability:r,recordCustom:o}},{}],26:[function(t,e,n){function r(){return s.exists&&performance.now?Math.round(performance.now()):(i=Math.max((new Date).getTime(),i))-a}function o(){return i}var i=(new Date).getTime(),a=i,s=t(34);e.exports=r,e.exports.offset=a,e.exports.getLastTimestamp=o},{}],27:[function(t,e,n){function r(t){return!(!t||!t.protocol||"file:"===t.protocol)}e.exports=r},{}],28:[function(t,e,n){function r(t,e){var n=t.getEntries();n.forEach(function(t){"first-paint"===t.name?p("timing",["fp",Math.floor(t.startTime)]):"first-contentful-paint"===t.name&&p("timing",["fcp",Math.floor(t.startTime)])})}function o(t,e){var n=t.getEntries();if(n.length>0){var r=n[n.length-1];if(c&&c<r.startTime)return;p("lcp",[r])}}function i(t){t.getEntries().forEach(function(t){t.hadRecentInput||p("cls",[t])})}function a(t){if(t instanceof v&&!g){var e=Math.round(t.timeStamp),n={type:t.type};e<=l.now()?n.fid=l.now()-e:e>l.offset&&e<=Date.now()?(e-=l.offset,n.fid=l.now()-e):e=l.now(),g=!0,p("timing",["fi",e,n])}}function s(t){"hidden"===t&&(c=l.now(),p("pageHide",[c]))}if(!("init"in NREUM&&"page_view_timing"in NREUM.init&&"enabled"in NREUM.init.page_view_timing&&NREUM.init.page_view_timing.enabled===!1)){var c,f,u,d,p=t("handle"),l=t("loader"),h=t(31),m=t(23),v=NREUM.o.EV;if("PerformanceObserver"in window&&"function"==typeof window.PerformanceObserver){f=new PerformanceObserver(r);try{f.observe({entryTypes:["paint"]})}catch(w){}u=new PerformanceObserver(o);try{u.observe({entryTypes:["largest-contentful-paint"]})}catch(w){}d=new PerformanceObserver(i);try{d.observe({type:"layout-shift",buffered:!0})}catch(w){}}if("addEventListener"in document){var g=!1,y=["click","keydown","mousedown","pointerdown","touchstart"];y.forEach(function(t){document.addEventListener(t,a,m(!1))})}h(s)}},{}],29:[function(t,e,n){function r(){function t(){return e?15&e[n++]:16*Math.random()|0}var e=null,n=0,r=window.crypto||window.msCrypto;r&&r.getRandomValues&&(e=r.getRandomValues(new Uint8Array(31)));for(var o,i="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",a="",s=0;s<i.length;s++)o=i[s],"x"===o?a+=t().toString(16):"y"===o?(o=3&t()|8,a+=o.toString(16)):a+=o;return a}function o(){return a(16)}function i(){return a(32)}function a(t){function e(){return n?15&n[r++]:16*Math.random()|0}var n=null,r=0,o=window.crypto||window.msCrypto;o&&o.getRandomValues&&Uint8Array&&(n=o.getRandomValues(new Uint8Array(31)));for(var i=[],a=0;a<t;a++)i.push(e().toString(16));return i.join("")}e.exports={generateUuid:r,generateSpanId:o,generateTraceId:i}},{}],30:[function(t,e,n){function r(t,e){if(!o)return!1;if(t!==o)return!1;if(!e)return!0;if(!i)return!1;for(var n=i.split("."),r=e.split("."),a=0;a<r.length;a++)if(r[a]!==n[a])return!1;return!0}var o=null,i=null,a=/Version\\/(\\S+)\\s+Safari/;if(navigator.userAgent){var s=navigator.userAgent,c=s.match(a);c&&s.indexOf("Chrome")===-1&&s.indexOf("Chromium")===-1&&(o="Safari",i=c[1])}e.exports={agent:o,version:i,match:r}},{}],31:[function(t,e,n){function r(t){function e(){t(s&&document[s]?document[s]:document[i]?"hidden":"visible")}"addEventListener"in document&&a&&document.addEventListener(a,e,o(!1))}var o=t(23);e.exports=r;var i,a,s;"undefined"!=typeof document.hidden?(i="hidden",a="visibilitychange",s="visibilityState"):"undefined"!=typeof document.msHidden?(i="msHidden",a="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(i="webkitHidden",a="webkitvisibilitychange",s="webkitVisibilityState")},{}],32:[function(t,e,n){function r(t,e){var n=[],r="",i=0;for(r in t)o.call(t,r)&&(n[i]=e(r,t[r]),i+=1);return n}var o=Object.prototype.hasOwnProperty;e.exports=r},{}],33:[function(t,e,n){function r(t,e,n){e||(e=0),"undefined"==typeof n&&(n=t?t.length:0);for(var r=-1,o=n-e||0,i=Array(o<0?0:o);++r<o;)i[r]=t[e+r];return i}e.exports=r},{}],34:[function(t,e,n){e.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(t,e,n){function r(){}function o(t){function e(t){return t&&t instanceof r?t:t?f(t,c,a):a()}function n(n,r,o,i,a){if(a!==!1&&(a=!0),!l.aborted||i){t&&a&&t(n,r,o);for(var s=e(o),c=m(n),f=c.length,u=0;u<f;u++)c[u].apply(s,r);var p=d[y[n]];return p&&p.push([x,n,r,s]),s}}function i(t,e){g[t]=m(t).concat(e)}function h(t,e){var n=g[t];if(n)for(var r=0;r<n.length;r++)n[r]===e&&n.splice(r,1)}function m(t){return g[t]||[]}function v(t){return p[t]=p[t]||o(n)}function w(t,e){l.aborted||u(t,function(t,n){e=e||"feature",y[n]=e,e in d||(d[e]=[])})}var g={},y={},x={on:i,addEventListener:i,removeEventListener:h,emit:n,get:v,listeners:m,context:e,buffer:w,abort:s,aborted:!1};return x}function i(t){return f(t,c,a)}function a(){return new r}function s(){(d.api||d.feature)&&(l.aborted=!0,d=l.backlog={})}var c="nr@context",f=t("gos"),u=t(32),d={},p={},l=e.exports=o();e.exports.getOrSetContext=i,l.backlog=d},{}],gos:[function(t,e,n){function r(t,e,n){if(o.call(t,e))return t[e];var r=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(t,e,{value:r,writable:!0,enumerable:!1}),r}catch(i){}return t[e]=r,r}var o=Object.prototype.hasOwnProperty;e.exports=r},{}],handle:[function(t,e,n){function r(t,e,n,r){o.buffer([t],r),o.emit(t,e,n)}var o=t("ee").get("handle");e.exports=r,r.ee=o},{}],id:[function(t,e,n){function r(t){var e=typeof t;return!t||"object"!==e&&"function"!==e?-1:t===window?0:a(t,i,function(){return o++})}var o=1,i="nr@id",a=t("gos");e.exports=r},{}],loader:[function(t,e,n){function r(){if(!P++){var t=T.info=NREUM.info,e=v.getElementsByTagName("script")[0];if(setTimeout(f.abort,3e4),!(t&&t.licenseKey&&t.applicationID&&e))return f.abort();c(R,function(e,n){t[e]||(t[e]=n)});var n=a();s("mark",["onload",n+T.offset],null,"api"),s("timing",["load",n]);var r=v.createElement("script");0===t.agent.indexOf("http://")||0===t.agent.indexOf("https://")?r.src=t.agent:r.src=h+"://"+t.agent,e.parentNode.insertBefore(r,e)}}function o(){"complete"===v.readyState&&i()}function i(){s("mark",["domContent",a()+T.offset],null,"api")}var a=t(26),s=t("handle"),c=t(32),f=t("ee"),u=t(30),d=t(27),p=t(21),l=t(23),h=p.getConfiguration("ssl")===!1?"http":"https",m=window,v=m.document,w="addEventListener",g="attachEvent",y=m.XMLHttpRequest,x=y&&y.prototype,b=!d(m.location);NREUM.o={ST:setTimeout,SI:m.setImmediate,CT:clearTimeout,XHR:y,REQ:m.Request,EV:m.Event,PR:m.Promise,MO:m.MutationObserver};var E=""+location,R={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-spa-1212.min.js"},O=y&&x&&x[w]&&!/CriOS/.test(navigator.userAgent),T=e.exports={offset:a.getLastTimestamp(),now:a,origin:E,features:{},xhrWrappable:O,userAgent:u,disabled:b};if(!b){t(20),t(28),v[w]?(v[w]("DOMContentLoaded",i,l(!1)),m[w]("load",r,l(!1))):(v[g]("onreadystatechange",o),m[g]("onload",r)),s("mark",["firstbyte",a.getLastTimestamp()],null,"api");var P=0}},{}],"wrap-function":[function(t,e,n){function r(t,e){function n(e,n,r,c,f){function nrWrapper(){var i,a,u,p;try{a=this,i=d(arguments),u="function"==typeof r?r(i,a):r||{}}catch(l){o([l,"",[i,a,c],u],t)}s(n+"start",[i,a,c],u,f);try{return p=e.apply(a,i)}catch(h){throw s(n+"err",[i,a,h],u,f),h}finally{s(n+"end",[i,a,p],u,f)}}return a(e)?e:(n||(n=""),nrWrapper[p]=e,i(e,nrWrapper,t),nrWrapper)}function r(t,e,r,o,i){r||(r="");var s,c,f,u="-"===r.charAt(0);for(f=0;f<e.length;f++)c=e[f],s=t[c],a(s)||(t[c]=n(s,u?c+r:r,o,c,i))}function s(n,r,i,a){if(!h||e){var s=h;h=!0;try{t.emit(n,r,i,e,a)}catch(c){o([c,n,r,i],t)}h=s}}return t||(t=u),n.inPlace=r,n.flag=p,n}function o(t,e){e||(e=u);try{e.emit("internal-error",t)}catch(n){}}function i(t,e,n){if(Object.defineProperty&&Object.keys)try{var r=Object.keys(t);return r.forEach(function(n){Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){return t[n]=e,e}})}),e}catch(i){o([i],n)}for(var a in t)l.call(t,a)&&(e[a]=t[a]);return e}function a(t){return!(t&&t instanceof Function&&t.apply&&!t[p])}function s(t,e){var n=e(t);return n[p]=t,i(t,n,u),n}function c(t,e,n){var r=t[e];t[e]=s(r,n)}function f(){for(var t=arguments.length,e=new Array(t),n=0;n<t;++n)e[n]=arguments[n];return e}var u=t("ee"),d=t(33),p="nr@original",l=Object.prototype.hasOwnProperty,h=!1;e.exports=r,e.exports.wrapFunction=s,e.exports.wrapInPlace=c,e.exports.argsToArray=f},{}]},{},["loader",2,17,5,3,4]);NREUM.loader_config={accountID:"331786",trustKey:"331786",agentID:"341277586",licenseKey:"2700af8a3c",applicationID:"309610411"};NREUM.info={beacon:"bam-cell.nr-data.net",errorBeacon:"bam-cell.nr-data.net",licenseKey:"2700af8a3c",applicationID:"309610411",sa:1}'}
            }, d = n(5893), f = function (e) {
                var t = e.appEnv, n = e.children, r = e.isOldBrowser, o = e.title,
                    i = t ? "production" !== t : "app" !== window.location.hostname.split(".")[0],
                    a = i ? "D85a8FDQrDeMzkihHnm5r2ulc2APP2vt" : "n2LLbFI1MDxFKBLzI0es2Z7PrDhu6jEA",
                    s = i ? "//assets.adobedtm.com/08e39cddbedb/e636e43250a6/launch-c122eb453412-staging.min.js" : "//assets.adobedtm.com/08e39cddbedb/e636e43250a6/launch-b12e2e8e4ced.min.js";
                return (0, d.jsxs)("div", {
                    children: [(0, d.jsxs)(u.default, {
                        children: [(0, d.jsx)("title", {children: o ? "".concat(o, " | Pluralsight") : "Pluralsight"}), (0, d.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1, shrink-to-fit=no"
                        }), (0, d.jsx)("meta", {name: "theme-color", content: "#000000"}), (0, d.jsx)("link", {
                            rel: "icon",
                            href: "https://s2.pluralsight.com/favicon.ico"
                        }), (0, d.jsx)("script", {
                            type: "text/javascript",
                            dangerouslySetInnerHTML: l(i)
                        }), (0, d.jsx)("script", {src: s, async: !0}), (0, d.jsx)("script", {
                            type: "text/javascript", dangerouslySetInnerHTML: {
                                __html: '!function () {\n      var analytics = window.analytics = window.analytics || []; if (!analytics.initialize) if (analytics.invoked) window.console && console.error && console.error("Segment snippet included twice."); else {\n            analytics.invoked = !0; analytics.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "page", "once", "off", "on"]; analytics.factory = function (t) { return function () { var e = Array.prototype.slice.call(arguments); e.unshift(t); analytics.push(e); return analytics } }; for (var t = 0; t < analytics.methods.length; t++) { var e = analytics.methods[t]; analytics[e] = analytics.factory(e) } analytics.load = function (t) { var e = document.createElement("script"); e.type = "text/javascript"; e.async = !0; e.src = ("https:" === document.location.protocol ? "https://" : "http://") + "cdn.segment.com/analytics.js/v1/" + t + "/analytics.min.js"; var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(e, n) }; analytics.SNIPPET_VERSION = "3.1.0";\n        analytics.load("'.concat(a, '");\n      }\n    }();')
                            }
                        })]
                    }), r && (0, d.jsx)("script", {src: "//s2.pluralsight.com/embeddable-player/polyfills.v0.0.48.min.js"}), n, (0, d.jsx)("script", {src: "//s2.pluralsight.com/embeddable-player/embeddable-player.v1.0.11.min.js"}), (0, d.jsx)("script", {src: "//s2.pluralsight.com/analytics/analytics-facade.v4.10.0-beta.2.js"})]
                })
            }, p = s.createContext(null), m = n(8216), h = n(5997), g = [2, 3, 4], v = new RegExp("^[" + g.join("") + "]."),
            y = function () {
                function e(t) {
                    (0, m.Z)(this, e), window.AnalyticsFacade ? this.isSupportedVersion() ? (this.boundedContext = t, this.analyticsFacade = new window.AnalyticsFacade({
                        contextName: "course-player",
                        waitForIdentify: !0
                    })) : console.error("window.AnalyticsFacade version " + window.AnalyticsFacade.VERSION + " is not supported.  Supported versions: " + g) : console.error("window.AnalyticsFacade constructor not found")
                }

                return (0, h.Z)(e, [{
                    key: "isSupportedVersion", value: function () {
                        return v.test(window.AnalyticsFacade.VERSION)
                    }
                }, {
                    key: "track", value: function (e, t) {
                        this.analyticsFacade && this.analyticsFacade.track(e, t)
                    }
                }, {
                    key: "pageview", value: function () {
                        this.analyticsFacade && this.analyticsFacade.page()
                    }
                }, {
                    key: "identify", value: function (e) {
                        this.analyticsFacade && this.analyticsFacade.identify(e)
                    }
                }, {
                    key: "trackExperiment", value: function (e, t, n) {
                        this.analyticsFacade && this.analyticsFacade.trackExperiment(e, t, {userHandle: n})
                    }
                }]), e
            }(), b = {
                initialize: function (e) {
                    b.analyticsFacade = new y(e), r = e
                }, analyticsFacade: {}, onNoteClicked: function (e) {
                    var t = {
                        eventName: "Note Clicked",
                        source: "course-player/notes/note",
                        position: e.index + 1,
                        context: r,
                        contentType: "course",
                        contentTitle: e.courseTitle,
                        moduleTitle: e.moduleTitle,
                        contentId: e.courseId,
                        clipTitle: e.clipTitle,
                        clipId: e.clipId
                    };
                    b.analyticsFacade.track && b.analyticsFacade.track("generic_click", t)
                }, onNoteCreated: function (e) {
                    var t = {
                        eventName: "Note Created",
                        source: "course-player/notes/note-editor",
                        context: r,
                        contentTitle: e.courseTitle,
                        contentId: e.courseId,
                        contentType: "course",
                        moduleTitle: e.moduleTitle,
                        clipTitle: e.clipTitle,
                        clipId: e.clipId
                    };
                    b.analyticsFacade.track && b.analyticsFacade.track("generic_click", t)
                }, onNoteEdited: function (e) {
                    var t = {
                        eventName: "Note Edited",
                        source: "course-player/notes/note-editor",
                        position: e.index + 1,
                        context: r,
                        contentTitle: e.courseTitle,
                        contentId: e.courseId,
                        moduleTitle: e.moduleTitle,
                        contentType: "course",
                        clipTitle: e.clipTitle,
                        clipId: e.clipId
                    };
                    b.analyticsFacade.track && b.analyticsFacade.track("generic_click", t)
                }, onNoteDeleted: function (e) {
                    var t = {
                        eventName: "Note Deleted",
                        source: "course-player/notes/note",
                        position: e.index + 1,
                        context: r,
                        contentTitle: e.courseTitle,
                        contentId: e.courseId,
                        contentType: "course",
                        clipTitle: e.clipTitle,
                        clipId: e.clipId,
                        moduleTitle: e.moduleTitle
                    };
                    b.analyticsFacade.track && b.analyticsFacade.track("generic_click", t)
                }, onViewAllNotesClicked: function (e, t) {
                    var n = {
                        eventName: "View All Notes Clicked",
                        linkName: e,
                        source: "course-player/notes",
                        context: r,
                        contentType: "course",
                        contentTitle: t.title,
                        contentId: t.id
                    };
                    b.analyticsFacade.track && b.analyticsFacade.track("generic_click", n)
                }, onDownloadNotesClicked: function (e, t) {
                    var n = {
                        eventName: "Download Notes Clicked",
                        linkName: e,
                        source: "course-player/notes",
                        context: r,
                        contentType: "course",
                        contentTitle: t.title,
                        contentId: t.id
                    };
                    b.analyticsFacade.track && b.analyticsFacade.track("generic_click", n)
                }, onTabClicked: function (e, t) {
                    var n = {
                        eventName: "Tab Clicked",
                        linkName: e,
                        source: "course-player/tab",
                        context: r,
                        contentType: "course",
                        contentTitle: t.title,
                        contentId: t.id
                    };
                    b.analyticsFacade.track && b.analyticsFacade.track("generic_click", n)
                }, onCourseModuleClicked: function (e) {
                    var t = e.course, n = e.index, o = e.moduleTitle, i = e.moduleId, a = {
                        eventName: "Course Module Clicked",
                        source: "course-player/table-of-contents/module",
                        position: n + 1,
                        context: r,
                        contentType: "course",
                        contentTitle: t.title,
                        contentId: t.id,
                        moduleTitle: o,
                        moduleId: i
                    };
                    b.analyticsFacade.track && b.analyticsFacade.track("generic_click", a)
                }, onRelatedCoursesClicked: function (e, t) {
                    var n = {
                        eventName: "View Related Courses Clicked",
                        linkName: e,
                        source: "course-player/player-modal",
                        context: r,
                        contentType: "course",
                        contentTitle: t.title
                    };
                    b.analyticsFacade.track && b.analyticsFacade.track("generic_click", n)
                }, partnershipLinkOpened: function (e) {
                    var t = e.contentTitle, n = e.contentId, o = e.partnerContentTitle, i = e.partnerContentType,
                        a = e.partnerContentLink, s = e.authorHandle, c = {
                            eventName: "Partnership Content Opened",
                            source: "course-player/player",
                            context: r,
                            contentType: "course",
                            contentTitle: t,
                            contentId: n,
                            partnerContentTitle: o,
                            partnerContentType: i,
                            partnerContentLink: a,
                            authorHandle: s
                        };
                    b.analyticsFacade.track && b.analyticsFacade.track("generic_click", c)
                }, partnershipLinkSkipped: function (e) {
                    var t = e.contentTitle, n = e.contentId, o = e.partnerContentTitle, i = e.partnerContentType,
                        a = e.partnerContentLink, s = e.authorHandle, c = {
                            eventName: "Partnership Content Skipped",
                            source: "course-player/player",
                            context: r,
                            contentType: "course",
                            contentTitle: t,
                            contentId: n,
                            partnerContentTitle: o,
                            partnerContentType: i,
                            partnerContentLink: a,
                            authorHandle: s
                        };
                    b.analyticsFacade.track && b.analyticsFacade.track("generic_click", c)
                }, onPageLoad: function (e) {
                    b.analyticsFacade.identify && b.analyticsFacade.identify(e), b.analyticsFacade.pageview && b.analyticsFacade.pageview()
                }, onShareFeedbackClick: function (e) {
                    var t = e.course, n = e.linkName;
                    b.analyticsFacade.track && b.analyticsFacade.track("generic_click", {
                        eventName: "Share Feedback Clicked",
                        source: "course-player/related-courses-modal",
                        context: "course-player",
                        linkName: n,
                        contentId: t.id,
                        contentTitle: t.title,
                        contentType: "course"
                    })
                }, onNextModuleClicked: function (e) {
                    var t = e.course, n = e.linkName, r = e.moduleId, o = e.moduleTitle, i = {
                        eventName: "Next Module Clicked",
                        source: "course-player/completed-modal",
                        context: "course-player",
                        linkName: n,
                        contentId: t.id,
                        contentTitle: t.title,
                        contentType: "course",
                        moduleId: r,
                        moduleTitle: o
                    };
                    b.analyticsFacade.track && b.analyticsFacade.track("generic_click", i)
                }, onUpgradeNowClicked: function (e, t) {
                    var n = {
                        eventName: "Freemium Upgrade Now Clicked",
                        linkName: e,
                        source: "course-player/end-of-course",
                        context: r,
                        contentType: "course",
                        contentTitle: t.title
                    };
                    b.analyticsFacade.track && b.analyticsFacade.track("generic_click", n)
                }, onTrophyCaseLinkClicked: function (e) {
                    var t = e.course, n = e.currentModule, r = e.currentContentItem, o = {
                        eventName: "View Trophy Case Clicked",
                        source: "course-player/player/module-completed-modal",
                        context: "course-player",
                        contentId: t.id,
                        contentTitle: t.title,
                        contentType: "course-player",
                        moduleId: n.id,
                        moduleTitle: n.title,
                        clipId: r.id,
                        clipTitle: r.title
                    };
                    b.analyticsFacade.track && b.analyticsFacade.track("generic_click", o)
                }, onBadgesNextClicked: function (e) {
                    var t = e.course, n = e.currentModule, r = e.currentContentItem, o = e.badge, i = {
                        eventName: "Course Badges Module Next Clicked",
                        source: "course-player/player/module-completed-modal",
                        context: "course-player",
                        contentId: t.id,
                        contentTitle: t.title,
                        contentType: "course-player",
                        moduleId: n.id,
                        moduleTitle: n.title,
                        clipId: r.id,
                        clipTitle: r.title,
                        badgeTitle: o.name,
                        badgeId: o.id
                    };
                    b.analyticsFacade.track && b.analyticsFacade.track("generic_click", i)
                }, onBadgesPreviousClicked: function (e) {
                    var t = e.course, n = e.currentModule, r = e.currentContentItem, o = e.badge, i = {
                        eventName: "Course Badges Module Back Clicked",
                        source: "course-player/player/module-completed-modal",
                        context: "course-player",
                        contentId: t.id,
                        contentTitle: t.title,
                        contentType: "course-player",
                        moduleId: n.id,
                        moduleTitle: n.title,
                        clipId: r.id,
                        clipTitle: r.title,
                        badgeTitle: o.name,
                        badgeId: o.id
                    };
                    b.analyticsFacade.track && b.analyticsFacade.track("generic_click", i)
                }, onBadgePaginationDotClicked: function (e) {
                    var t = e.course, n = e.currentModule, r = e.currentContentItem, o = e.currentBadge, i = e.goingToBadge,
                        a = {
                            eventName: "Badge Pagination Dot Clicked",
                            source: "course-player/player/module-completed-modal",
                            context: "course-player",
                            contentId: t.id,
                            contentTitle: t.title,
                            contentType: "course-player",
                            moduleId: n.id,
                            moduleTitle: n.title,
                            clipId: r.id,
                            clipTitle: r.title,
                            badgeTitle: o.name,
                            badgeId: o.id,
                            goingToBadgeTitle: i.name,
                            goingToBadgeId: i.id
                        };
                    b.analyticsFacade.track && b.analyticsFacade.track("generic_click", a)
                }, onModuleCompleteModalClosed: function (e) {
                    var t = e.course, n = e.currentModule, r = e.currentContentItem, o = {
                        eventName: "Module Completed Modal Closed",
                        source: "course-player/player/module-completed-modal",
                        context: "course-player",
                        contentId: t.id,
                        contentTitle: t.title,
                        contentType: "course-player",
                        moduleId: n.id,
                        moduleTitle: n.title,
                        clipId: r.id,
                        clipTitle: r.title
                    };
                    b.analyticsFacade.track && b.analyticsFacade.track("generic_click", o)
                }, keyboardShortcutsToggleClicked: function (e) {
                    var t = e.enabled, n = {
                        eventName: "Keyboard Shortcuts Toggle Clicked",
                        source: "course-player/player/accessibility",
                        context: r,
                        enabled: t
                    };
                    b.analyticsFacade.track && b.analyticsFacade.track("generic_click", n)
                }, keyboardShortcutPressed: function (e) {
                    var t = e.clipId, n = e.clipTitle, o = e.keyPressed, i = e.keyPressedAction, a = {
                        eventName: "Keyboard Shortcut Pressed",
                        source: "course-player/player",
                        context: r,
                        clipId: t,
                        clipTitle: n,
                        keyPressed: o,
                        keyPressedAction: i
                    };
                    b.analyticsFacade.track && b.analyticsFacade.track("generic_click", a)
                }
            };
        var _ = n(2809), x = n(5996), w = n.n(x), C = n(4184), j = n.n(C), E = n(4090), k = n(9534), O = n(3943),
            N = n(7894), L = n.n(N), T = n(6823), P = n(4239), I = n(1926);

        function S(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function M(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? S(Object(n), !0).forEach((function (t) {
                    (0, _.Z)(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        var R = function () {
            return (0, d.jsxs)("svg", {
                "aria-label": "completed",
                className: L()["circle-thing__icon"],
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                children: [(0, d.jsx)("path", {d: "M2.6 12.3l-1.4 1.4a1 1 0 000 1.5l6.1 6.2c.4.4 1 .4 1.4 0L23 6.9c.4-.4.4-1 0-1.4L21.6 4A1 1 0 0020 4l-12 12.3-4-4a1 1 0 00-1.5 0z"}), " "]
            })
        }, A = function () {
            return (0, d.jsx)("svg", {
                "aria-label": "selected",
                className: L()["circle-thing__icon"],
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                children: (0, d.jsx)("path", {d: "M6.23 20.7L19.77 12 6.23 3.3"})
            })
        }, D = function (e) {
            var t = (0, s.useContext)(k.CoursePlayerContext), n = t.state, r = t.dispatch, o = e.title, i = e.duration,
                a = e.id, c = e.type, u = n && n.currentContentItem && a === n.currentContentItem.id,
                l = n && n.watchedContentItemIds.includes(a), f = (0, s.useRef)(), p = n.course,
                m = n.currentClipCompleted, h = n.scrollableNavigationRef;
            (0, s.useEffect)((function () {
                u && window.innerWidth > 990 && !n.navCollapsed && h && (0, P.Z)(f.current, {
                    scrollMode: "if-needed",
                    behavior: "smooth",
                    boundary: h
                })
            }), [u, n.navCollapsed, h]);
            var g = l && !u || u && m;
            return (0, d.jsxs)("button", {
                className: j()(L()["content-item"], "u-flex", "u-align-items-stretch", (0, _.Z)({}, L()["is-current"], u), (0, _.Z)({}, L()["is-completed"], l && !u)),
                ref: f,
                onClick: function () {
                    (0, T.LA)(a, p);
                    r({type: "CURRENT_CONTENT_ITEM_CHANGED", data: M({}, e)})
                },
                children: [(0, d.jsx)("div", {
                    className: j()(L()["circle-thing-container"], L()["u-flex-none"]),
                    children: (0, d.jsx)("div", {
                        className: j()(L()["circle-thing"], (0, _.Z)({}, L()["is-completed"], l)),
                        children: g ? (0, d.jsxs)(d.Fragment, {
                            children: [(0, d.jsx)(R, {}), (0, d.jsx)("span", {
                                className: "screenreader-only",
                                children: "(completed)"
                            })]
                        }) : (0, d.jsx)(A, {})
                    })
                }), (0, d.jsxs)("div", {
                    className: j()(L()["content-item-body"], "u-flex", "u-align-items-center", "u-flex-1"),
                    children: [(0, d.jsx)("h3", {
                        className: j()("u-flex-1", "u-ps-type-sm", "u-ps-type-weight-book", "u-truncate"),
                        children: (0, d.jsxs)("div", {
                            className: "u-flex u-align-items-center",
                            children: ["link" === c && (0, d.jsxs)(d.Fragment, {
                                children: [(0, d.jsx)("span", {
                                    className: "screenreader-only",
                                    children: "(link)"
                                }), (0, d.jsx)(I.x, {size: I.x.sizes.small, className: "u-pr-tiny u-flex-none"})]
                            }), (0, d.jsx)("span", {className: "u-truncate", title: o, children: o})]
                        })
                    }), (0, d.jsx)("div", {
                        className: j()(L()["content-item-duration"], "u-flex-none", "u-pl-tiny", "u-ps-type-xs", "u-ps-type-weight-book"),
                        children: (0, T.Jd)(i)
                    })]
                })]
            })
        }, U = n(9368), Z = n.n(U), H = n(186), F = n(4503), B = n.n(F), z = function (e) {
            var t, n = e.index, r = e.contentItems, o = e.isCurrentModule,
                i = (0, s.useContext)(k.CoursePlayerContext).state, a = r.filter((function (e) {
                    return i.watchedContentItemIds.includes(e.id)
                })), c = a.length / r.length * 100, u = ![0, 100].includes(c), l = a.length === r.length,
                f = 2 * Math.PI * 11, p = (100 - c) / 100 * f;
            return (0, d.jsxs)(d.Fragment, {
                children: [(0, d.jsx)("div", {className: j()((0, _.Z)({}, B()["is-completed"], l))}), (0, d.jsxs)("svg", {
                    className: j()(B()["module-progress"], (t = {}, (0, _.Z)(t, B()["is-in-progress"], u), (0, _.Z)(t, B()["is-completed"], l), (0, _.Z)(t, B()["is-current-module"], o), t)),
                    "aria-label": l ? "module completed" : "".concat(a.length, " of ").concat(r.length, " clips completed"),
                    viewBox: "0 0 ".concat(24, " ").concat(24),
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    transform: "rotate(-90)",
                    children: [(0, d.jsx)("circle", {
                        r: 11,
                        cx: "12",
                        cy: "12",
                        className: B()["module-progress__background"],
                        strokeWidth: 2
                    }), (0, d.jsx)("text", {
                        className: B()["module-progress__text"],
                        x: "49%",
                        y: "-31%",
                        textAnchor: "middle",
                        transform: "rotate(90)",
                        children: n + 1
                    }), (0, d.jsx)("circle", {
                        r: 11,
                        cx: "12",
                        cy: "12",
                        strokeWidth: 2,
                        strokeDasharray: "".concat(f, " ").concat(f),
                        strokeDashoffset: p,
                        className: B()["module-progress__progress"]
                    })]
                })]
            })
        };

        function V(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function G(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? V(Object(n), !0).forEach((function (t) {
                    (0, _.Z)(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : V(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        var q = function (e) {
            var t = e.title, n = e.duration, r = e.course, o = e.index, i = e.id;
            return (0, d.jsxs)("div", {
                className: j()(Z()["module-header"], "u-flex", "u-align-items-center"),
                onClick: function () {
                    return b.onCourseModuleClicked({course: r, index: o, moduleTitle: t, moduleId: i})
                },
                children: [(0, d.jsx)("div", {
                    className: Z()["module-progress-container"],
                    children: (0, d.jsx)(z, G({}, e))
                }), (0, d.jsxs)("div", {
                    className: "u-py-md",
                    children: [(0, d.jsx)("h2", {
                        className: j()(Z()["module-header__title"], "u-m-0", "u-p-0", "u-ps-type-sm", "u-ps-type-weight-med"),
                        children: t
                    }), (0, d.jsxs)("div", {
                        className: "u-ps-type-xs ps-type-weight-book u-text-subtle u-flex u-align-items-center",
                        children: [(0, d.jsxs)("svg", {
                            className: j()(Z()["module-clock-icon"], "u-flex-none"),
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24px",
                            height: "24px",
                            viewBox: "0 0 24 24",
                            children: [(0, d.jsx)("path", {d: "M12 23.1a11.44 11.44 0 1 1 11.43-11.43c0 6.3-5.13 11.42-11.43 11.42zm0-20.87a9.44 9.44 0 0 0 0 18.87 9.44 9.44 0 0 0 0-18.87z"}), (0, d.jsx)("path", {d: "M13 11V3.95h-2V11H4.36v2H13v-2z"})]
                        }), (0, d.jsx)("span", {
                            className: "screenreader-only",
                            children: "Module length:"
                        }), (0, T.Jd)(n)]
                    })]
                })]
            })
        }, K = function (e) {
            var t = e.contentItems, n = (0, s.useContext)(k.CoursePlayerContext).state.currentContentItem,
                r = (0, s.useState)(null), o = r[0], i = r[1], a = (0, s.useState)(null), c = a[0], u = a[1];
            return (0, s.useEffect)((function () {
                u(t.some((function (e) {
                    return e.id === n.id
                }))), i(t.some((function (e) {
                    return !1 === e.watched
                })))
            }), [t, n]), (0, d.jsx)(H.ZP, {
                className: j()(Z().module, (0, _.Z)({}, Z()["is-current-module"], c)),
                base: (0, d.jsx)(q, G(G({}, e), {}, {isCurrentModule: c})),
                isOpen: c || void 0,
                startOpen: o || void 0,
                children: (0, d.jsx)("div", {
                    className: Z()["module-content"], children: t.map((function (e, t) {
                        return (0, d.jsx)(D, G(G({}, e), {}, {index: t}), e.id)
                    }))
                })
            })
        }, X = n(2106), W = n.n(X), J = n(1163);

        function Q(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Y(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Q(Object(n), !0).forEach((function (t) {
                    (0, _.Z)(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Q(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        var $ = function () {
                var e = (0, s.useContext)(k.CoursePlayerContext), t = e.state, n = e.dispatch, r = (0, J.useRouter)();
                (0, s.useEffect)((function () {
                    navigator && navigator.mediaSession && (navigator.mediaSession.setActionHandler("nexttrack", (function () {
                        return n({type: "PLAYER_NEXT_CLIP"})
                    })), navigator.mediaSession.setActionHandler("previoustrack", (function () {
                        return n({type: "PLAYER_PREV_CLIP"})
                    })))
                }), []);
                var o = function (e) {
                    var r = e.as.split("?").pop(), o = (0, O.getParams)(r), i = function (e, t) {
                        return function (e) {
                            return e.clipId && !e.courseId
                        }(t) ? (n = e, r = t.clipId, n.modules.reduce((function (e, t) {
                            return e.concat(t.contentItems)
                        }), []).find((function (e) {
                            return e.id === r
                        }))) : function (e, t) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            return (e.modules.find((function (e) {
                                return e.deprecatedModuleId.split("|")[1] === t
                            })) || e.modules[0]).contentItems[n]
                        }(e, t.moduleSlug, t.clipIndex);
                        var n, r
                    }(t.course, o);
                    n({
                        type: "CURRENT_CONTENT_ITEM_CHANGED",
                        data: Y(Y({}, i), {}, {startTime: o.startTime, versionId: o.versionId})
                    })
                };
                (0, s.useEffect)((function () {
                    r.beforePopState(o)
                }), []);
                var i = t.course && t.course.modules.map((function (e, n) {
                    return (0, d.jsx)(K, Y({index: n, course: t.course}, e), e.id)
                }));
                return (0, d.jsx)("div", {className: W()["table-of-contents"], children: i})
            }, ee = n(3789), te = n(251), ne = n.n(te), re = n(7150), oe = n.n(re), ie = function (e) {
                var t = e.duration, n = e.delay, r = e.onFaded, o = (0, s.useRef)(!1), i = t + n;
                return (0, s.useEffect)((function () {
                    var e = setTimeout((function () {
                        o.current = !0, r()
                    }), i);
                    return function () {
                        clearTimeout(e)
                    }
                }), [i, r]), (0, d.jsx)("div", {
                    className: j()(oe()["fade-out-wrapper"], (0, _.Z)({}, oe()["is-hidden"], o.current)),
                    children: e.children
                })
            }, ae = n(3449), se = n(4416), ce = n(3728), ue = n(6268), le = n(9802), de = n.n(le), fe = function () {
                return (0, d.jsx)("div", {
                    className: de()["anonymous-notes__message"],
                    children: (0, d.jsxs)("div", {
                        children: [(0, d.jsx)(ue.Z, {
                            className: "u-mb-sm",
                            size: ue.Z.sizes.large
                        }), (0, d.jsx)("div", {
                            className: j()("u-mb-md", de()["anonymous-notes__message-text"]),
                            children: "Want to take notes while you learn?"
                        }), (0, d.jsx)("div", {
                            children: (0, d.jsx)("div", {
                                className: "u-link u-flex u-align-items-center u-justify-content-center",
                                children: (0, d.jsx)(ce.default, {
                                    href: "/id?redirectTo=".concat(encodeURI(window.location)),
                                    children: "Sign in"
                                })
                            })
                        })]
                    })
                })
            }, pe = n(8165), me = n.n(pe), he = n(9532), ge = n(7125), ve = n(6678), ye = n(7441), be = n(804),
            _e = n(1036);

        function xe(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function we(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? xe(Object(n), !0).forEach((function (t) {
                    (0, _.Z)(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xe(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        var Ce = function (e) {
                if (!e) return {__html: "<span />"};
                var t = (0, ye.TU)(e, {breaks: !0}), n = _e(t, {disallowedTagsMode: "escape"});
                return {
                    __html: be.autoLinkHashtags(n, {
                        hashtagUrlBase: "/notes?tag=",
                        hashtagClass: "hashtag-link",
                        target: "ps-notes"
                    })
                }
            }, je = function (e) {
                var t = e.note, n = e.deleteNote, r = e.editNote, o = e.noteIndex, i = e.course, a = t.noteId,
                    c = t.moduleTitle, u = t.clipTitle, l = t.timeInClip, f = t.text,
                    p = (0, s.useContext)(k.CoursePlayerContext), m = p.state, h = p.dispatch, g = m.currentNote,
                    v = g && g.noteId === a;
                return (0, d.jsx)("li", {
                    className: j()([me().note], (0, _.Z)({}, me()["is-active"], v)),
                    role: "button",
                    "aria-label": "go to clip",
                    onClick: function () {
                        h({type: "NOTE_CLICKED", data: {note: t}}), h({
                            type: "CURRENT_NOTE_CHANGED",
                            data: {note: {noteId: a}}
                        }), i && b.onNoteClicked(we(we({}, t), {}, {index: o}), i)
                    },
                    ref: function (e) {
                        v && e && window.innerWidth > 990 && (0, P.Z)(e, {scrollMode: "if-needed", behavior: "smooth"})
                    },
                    children: (0, d.jsxs)("div", {
                        className: me()["notes-container"],
                        children: [(0, d.jsx)("div", {
                            className: me().note__text,
                            dangerouslySetInnerHTML: Ce(f)
                        }), (0, d.jsxs)("div", {
                            className: j()(me().note__meta, "u-flex", "u-align-items-center"),
                            children: [(0, d.jsxs)("div", {
                                className: j()("u-flex-1", "u-flex", "u-align-items-center", "u-truncate"),
                                children: [(0, d.jsx)(he.z, {
                                    className: "u-primary-action-text u-flex-none",
                                    size: he.z.sizes.small
                                }), (0, d.jsx)("span", {
                                    className: "u-ml-sm u-flex-1 u-truncate",
                                    children: "".concat(c, ": ").concat(u)
                                })]
                            }), (0, d.jsx)("div", {
                                className: j()("u-flex-none", "u-mr-sm", "u-ml-sm"),
                                children: (0, T.mr)(l)
                            }), (0, d.jsxs)("div", {
                                className: j()(me().note__meta__controls, "u-flex-none"),
                                children: [(0, d.jsxs)("button", {
                                    className: j()(me()["note-link-btn"], "u-inline-flex", "u-align-items-center", "u-mr-sm"),
                                    onClick: function (e) {
                                        e.stopPropagation(), n()
                                    },
                                    children: [(0, d.jsx)(ge.T, {size: ge.T.sizes.small}), (0, d.jsx)("span", {children: "delete"})]
                                }), (0, d.jsxs)("button", {
                                    className: j()(me()["note-link-btn"], "u-inline-flex", "u-align-items-center"),
                                    onClick: function (e) {
                                        e.stopPropagation(), r()
                                    },
                                    children: [(0, d.jsx)(ve.v, {size: ve.v.sizes.small}), (0, d.jsx)("span", {children: "edit"})]
                                })]
                            })]
                        })]
                    })
                })
            }, Ee = n(2967), ke = n.n(Ee), Oe = n(2731), Ne = n.n(Oe), Le = function (e) {
                var t = e.undoDelete;
                return (0, d.jsxs)("div", {
                    className: Ne()["note-deleted-prompt"],
                    children: ["Note deleted.", " ", (0, d.jsx)("button", {
                        className: Ne()["note-link-btn"],
                        onClick: t,
                        children: "Undo"
                    })]
                })
            }, Te = n(516), Pe = n(3434), Ie = n(9181), Se = n.n(Ie), Me = n(2841), Re = n(4042), Ae = n(5174),
            De = n(1171), Ue = n.n(De);

        function Ze(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function He(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ze(Object(n), !0).forEach((function (t) {
                    (0, _.Z)(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ze(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        var Fe = function (e) {
            var t = e.note, n = e.onSubmit, r = e.onCancel, i = e.isExistingNote, c = e.noteIndex, u = e.textareaId,
                l = (0, s.useContext)(k.CoursePlayerContext), f = l.state, p = l.dispatch, m = f.currentContentItem,
                h = f.course, g = f.enterToSaveEnabled, v = (0, s.useState)(t.text), y = v[0], x = v[1],
                w = (0, s.useState)(!1), C = w[0], E = w[1], O = (0, s.useState)(null), N = O[0], L = O[1];
            (0, s.useEffect)((function () {
                return y && "" !== y ? (y && E(!1), null === N ? L((0, Me.qZ)()) : void 0) : L(null)
            }), [y, N]);
            var P = function () {
                var e = (0, o.Z)(a().mark((function e() {
                    var r, o, s, u;
                    return a().wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (y) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", E(!0));
                            case 2:
                                r = (0, T.LA)(m.id, h), o = y && y.match(/(\#[0-9a-zA-Z\_]+\b)/g) || [], s = o.map((function (e) {
                                    return e.replace("#", "")
                                })), u = He(He({
                                    noteId: t.noteId || Ue()(),
                                    timeInClip: N || 0,
                                    created: Date.now()
                                }, t), {}, {
                                    updated: Date.now(),
                                    deleted: !1,
                                    text: y,
                                    tags: s,
                                    clipId: t.clipId || m.id,
                                    clipTitle: t.clipTitle || m.title,
                                    moduleTitle: t.moduleTitle || r.title,
                                    courseTitle: h.title
                                }), (0, Ae.writeNoteByCourse)(u, h), i ? b.onNoteEdited(He(He({}, u), {}, {
                                    index: c,
                                    courseId: h.id
                                })) : b.onNoteCreated(He(He({}, u), {}, {courseId: h.id})), n(u), x(""), p({
                                    type: "CURRENT_NOTE_CHANGED",
                                    data: {note: u}
                                });
                            case 11:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function () {
                    return e.apply(this, arguments)
                }
            }();
            return (0, d.jsxs)("div", {
                className: Se()["notes-container"],
                children: [C && (0, d.jsx)(Pe.ZP, {
                    color: Pe.ZP.colors.red,
                    className: Se()["u-mb-sm"],
                    children: "Text is required to save a note."
                }), (0, d.jsxs)("div", {
                    className: j()(Se()["notes-textarea-wrapper"], (0, _.Z)({}, Se()["has-error"], C)),
                    children: [(0, d.jsx)(Re.Z, {
                        id: u, className: Se()["notes-textarea"], onChange: function (e) {
                            return x(e.target.value)
                        }, placeholder: "Add a note...", "aria-label": "Add a note", value: y, onKeyDown: function (e) {
                            g && 13 === e.which && !e.shiftKey && (e.preventDefault(), P())
                        }, autoFocus: !0, maxLength: 8e4
                    }), (0, d.jsx)("div", {
                        className: Se()["notes-textarea__time"],
                        children: null !== N && (0, T.mr)(N)
                    })]
                }), !g && (0, d.jsx)(ce.default, {
                    className: "u-full-width u-mb-md", onClick: function () {
                        return P()
                    }, children: "Save Note"
                }), (0, d.jsxs)("div", {
                    className: "u-flex u-align-items-center",
                    children: [r && (0, d.jsx)("button", {
                        className: j()(Se()["note-link-btn"], "u-ps-type-xs"),
                        onClick: r,
                        children: "cancel"
                    }), (0, d.jsx)(Te.ZP, {
                        className: "u-pin-right",
                        size: Te.ZP.sizes.small,
                        checked: g,
                        onClick: function () {
                            p({type: "NOTES_ENTER_TO_SAVE_CHANGE", data: {enterToSaveEnabled: !g}})
                        },
                        labelAlign: Te.ZP.labelAligns.left,
                        children: (0, d.jsxs)("span", {
                            className: "u-type-reset",
                            children: ["Press ", (0, d.jsx)("span", {
                                className: "u-outline",
                                children: "enter"
                            }), " to save"]
                        })
                    })]
                })]
            })
        }, Be = n(6524), ze = n.n(Be), Ve = function () {
            return (0, d.jsx)("div", {
                className: ze()["notes-message"],
                children: (0, d.jsxs)("div", {
                    children: [(0, d.jsx)(ue.Z, {
                        className: "u-mb-sm",
                        size: ue.Z.sizes.large
                    }), (0, d.jsxs)("div", {
                        className: j()("u-mb-md", ze()["notes-message__text"]),
                        children: ["Take notes while you learn. Add ", (0, d.jsx)("strong", {children: "#tags"}), " to your notes to make them easier to find.", " "]
                    }), (0, d.jsx)("div", {
                        children: (0, d.jsxs)("a", {
                            className: "u-link u-flex u-align-items-center u-justify-content-center",
                            href: "/notes",
                            children: ["View all notes ", (0, d.jsx)(se.Q, {})]
                        })
                    })]
                })
            })
        }, Ge = n(7541);

        function qe(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Ke(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? qe(Object(n), !0).forEach((function (t) {
                    (0, _.Z)(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qe(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        var Xe = function () {
            var e = (0, s.useContext)(k.CoursePlayerContext), t = e.state, n = e.dispatch, r = t.notes, o = t.course,
                i = (0, s.useState)(null), a = i[0], c = i[1], u = (0, s.useRef)([]), l = (0, s.useRef)(r),
                f = function (e) {
                    return n({type: "NOTES_UPDATED", data: {notes: e}})
                };
            (0, s.useEffect)((function () {
                if (r.find((function (e) {
                    return e.deleted
                }))) {
                    var e = r.filter((function (e) {
                        return !e.deleted
                    }));
                    f(e), l.current = e
                }
            }), []);
            var p = function (e, t) {
                u.current = e ? u.current.concat(t.noteId) : u.current.filter((function (e) {
                    return e !== t.noteId
                }));
                var n = Ke(Ke({}, t), {}, {deleted: e});
                (0, Ae.writeNoteByCourse)(n, o);
                var i = r.map((function (e) {
                    return e.noteId === t.noteId ? n : e
                }));
                l.current = i, f(i)
            }, m = function (e) {
                c(null);
                var t = l.current.map((function (t) {
                    return t.noteId === e.noteId ? e : t
                }));
                ne()(t, l.current) || (f(t), l.current = t)
            }, h = l.current && l.current.length > 0, g = "anonymous" === t.userHandle;
            return (0, d.jsxs)("div", {
                className: ke().notes,
                children: [g && (0, d.jsx)(fe, {}), !h && !g && (0, d.jsx)("div", {
                    className: ke().notes__main,
                    children: (0, d.jsx)(Ve, {})
                }), h && !g && (0, d.jsxs)("div", {
                    className: ke()["notes-menu"],
                    children: [(0, d.jsxs)("a", {
                        className: j()(ke()["notes-menu__link"], "u-flex", "u-align-items-center"),
                        href: "/player/api/course/download?courseSlug=".concat(o.deprecatedCourseId),
                        onClick: function () {
                            return b.onDownloadNotesClicked("Download notes", o)
                        },
                        children: [(0, d.jsx)(ae._, {}), (0, d.jsx)("span", {
                            className: "u-ml-sm",
                            children: "Download notes"
                        })]
                    }), (0, d.jsxs)("a", {
                        className: ke()["notes-menu__link"],
                        href: "/notes",
                        onClick: function () {
                            return b.onViewAllNotesClicked("View all notes", o)
                        },
                        children: [(0, d.jsx)("span", {
                            className: "u-mr-sm",
                            children: "View all notes"
                        }), (0, d.jsx)(se.Q, {})]
                    })]
                }), h && !g && (0, d.jsx)("div", {
                    className: ke().notes__main,
                    children: (0, d.jsx)("ul", {
                        className: ke()["notes-list"],
                        children: l.current.map((function (e, t) {
                            var n = e.noteId || Ue()();
                            return u.current && u.current.includes(e.noteId) ? (0, d.jsx)(ie, {
                                duration: 250,
                                delay: 3e3,
                                onFaded: function () {
                                    return t = e.noteId, l.current = l.current.filter((function (e) {
                                        return e.noteId !== t
                                    })), f(l.current), void (u.current = u.current.filter((function (e) {
                                        return e !== t
                                    })));
                                    var t
                                },
                                children: (0, d.jsx)(Le, {
                                    undoDelete: function () {
                                        return p(!1, e)
                                    }
                                })
                            }, "".concat(n, "_fadeout")) : a && a.noteId === e.noteId ? (0, d.jsx)(Fe, {
                                note: e,
                                onSubmit: function (e) {
                                    return m(e)
                                },
                                onCancel: function () {
                                    return c(null)
                                },
                                isExistingNote: !0,
                                noteIndex: t
                            }, "".concat(n, "_editor")) : (0, d.jsx)(je, {
                                note: e, editNote: function () {
                                    return c(e)
                                }, deleteNote: function () {
                                    return function (e) {
                                        p(!0, e), b.onNoteDeleted(Ke(Ke({}, e), {}, {courseId: o.id}))
                                    }(e)
                                }, onUpdate: function () {
                                    return m(e)
                                }, noteIndex: t, course: o
                            }, "".concat(n, "_note"))
                        }))
                    })
                }), !g && (0, d.jsx)("div", {
                    className: ke()["notes__add-note"],
                    children: (0, d.jsx)(Fe, {
                        textareaId: ke()["main-note-editor"],
                        note: {noteId: Ue()()},
                        onSubmit: function (e) {
                            var t = (0, Ge.$)(o);
                            f([].concat((0, ee.Z)(r), [e])), l.current = l.current.concat([e]).sort(t), c(null)
                        },
                        isExistingNote: !1
                    })
                })]
            })
        }, We = n(4928), Je = n.n(We), Qe = n(847), Ye = n.n(Qe);

        function $e(e, t) {
            var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function (e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return et(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return et(e, t)
                }(e)) || t && e && "number" === typeof e.length) {
                    n && (e = n);
                    var r = 0, o = function () {
                    };
                    return {
                        s: o, n: function () {
                            return r >= e.length ? {done: !0} : {done: !1, value: e[r++]}
                        }, e: function (e) {
                            throw e
                        }, f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, a = !0, s = !1;
            return {
                s: function () {
                    n = n.call(e)
                }, n: function () {
                    var e = n.next();
                    return a = e.done, e
                }, e: function (e) {
                    s = !0, i = e
                }, f: function () {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (s) throw i
                    }
                }
            }
        }

        function et(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        var tt = function (e, t) {
            var n = e.filter((function (e) {
                return !!e.displayName
            })), r = function (e, t) {
                var n, r = 0, o = 0, i = $e(e);
                try {
                    for (i.s(); !(n = i.n()).done;) {
                        var a = n.value;
                        if (r + a.displayName.length > t) return o > 0 ? o : 1;
                        r += a.displayName.length, o += 1
                    }
                } catch (s) {
                    i.e(s)
                } finally {
                    i.f()
                }
                return e.length
            }(n, t), o = {visibleAuthors: [], hiddenAuthors: []};
            return n.length < 2 ? (o.visibleAuthors = n, o) : (n.length > 1 && (o.visibleAuthors = n.slice(0, r + 1), o.hiddenAuthors = n.slice(r + 1, n.length)), o)
        }, nt = n(2930), rt = n.n(nt), ot = n(3154), it = function (e) {
            var t = e.authors, n = e.truncateAfter, r = (0, s.useState)(!1), o = r[0], i = r[1],
                a = function (e, t, n) {
                    return e > 1 && t === e - 2 && n ? ", and " : t < e - 1 ? ", " : ""
                }, c = function (e, t, n) {
                    return e.map((function (r, o) {
                        return (0, d.jsxs)("span", {
                            children: [n && 0 === o && ", ", (0, d.jsx)("a", {
                                className: rt()["overflow-accordion__link"],
                                href: "https://app.pluralsight.com/profile/author/".concat(r.authorHandle),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: r.displayName
                            }), a(e.length, o, t)]
                        }, o)
                    }))
                }, u = tt(t, n), l = u.hiddenAuthors.length > 0;
            return !u || !u.visibleAuthors.length > 0 || !u.visibleAuthors[0].displayName ? null : (0, d.jsxs)("div", {
                className: rt()["overflow-accordion"],
                children: [(0, d.jsxs)("span", {
                    className: rt()["overflow-accordion__visible"],
                    children: ["By\xa0", c(u.visibleAuthors, !l, !1)]
                }), l && (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)("span", {
                        className: j()([rt()["overflow-accordion__overflow"]], (0, _.Z)({}, rt()["is-open"], o)),
                        children: c(u.hiddenAuthors, !0, !0)
                    }), "\xa0", (0, d.jsx)(ot.Z, {
                        onClick: function () {
                            return i(!o)
                        },
                        className: rt()["overflow-accordion__toggle-button"],
                        children: (0, d.jsx)("span", {children: o ? "Less" : "+ ".concat(u.hiddenAuthors.length, " more")})
                    })]
                })]
            })
        }, at = function () {
            var e = (0, s.useContext)(k.CoursePlayerContext).state.course, t = e && e.id;
            return (0, d.jsxs)("div", {
                className: Ye()["course-title"],
                children: [(0, d.jsx)("h1", {
                    className: j()(Ye()["course-title__title"], "u-mb-sm"),
                    children: (0, d.jsx)("a", {
                        className: Ye()["course-title__link"],
                        href: "/courses/".concat(t, "/table-of-contents"),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: e && e.title
                    })
                }), (0, d.jsx)("h2", {
                    className: Ye()["course-title__subtitle"],
                    children: e && e.authors && e.authors.length > 0 && (0, d.jsx)(it, {
                        authors: e.authors,
                        truncateAfter: 65
                    })
                })]
            })
        };

        function st(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function ct(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? st(Object(n), !0).forEach((function (t) {
                    (0, _.Z)(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : st(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        var ut = function () {
            var e = (0, s.useState)("table-of-contents"), t = e[0], n = e[1],
                r = (0, s.useContext)(k.CoursePlayerContext), o = r.state, i = r.dispatch, a = o.notes, c = o.course,
                u = o.navCollapsed, l = o.settings, f = (0, s.useRef)(), p = a && a.filter((function (e) {
                    return !0 !== e.deleted
                })), m = a && p.length > 0 ? " (".concat(p.length, ")") : "",
                h = [{id: "table-of-contents", label: "Table of Contents", content: (0, d.jsx)($, {})}, {
                    id: "notes",
                    label: "Notes".concat(m),
                    content: (0, d.jsx)(Xe, {})
                }];
            return (0, s.useEffect)((function () {
                i({type: "SCROLLABLE_NAVIGATION_REF_CHANGED", data: {scrollableNavigationRef: f.current}})
            }), [f.current]), (0, s.useEffect)((function () {
                var e = function (e) {
                    var t = 78 === e.which, r = "textarea" !== e.target.tagName.toLowerCase(),
                        a = "input" !== e.target.tagName.toLowerCase(), s = "select" !== e.target.tagName.toLowerCase();
                    if (t && r && a && s) {
                        e.preventDefault(), n("notes"), u && i({
                            type: "NAV_COLLAPSED_CHANGED",
                            data: {navCollapsed: !1}
                        });
                        var c = document.getElementById("main-note-editor");
                        c && c.focus(), b.keyboardShortcutPressed({
                            keyPressed: e.code,
                            keyPressedAction: "focusNoteEditor",
                            clipId: o.currentContentItem && o.currentContentItem.id,
                            clipTitle: o.currentContentItem && o.currentContentItem.title
                        })
                    }
                };
                return l.keyboardShortcutsEnabled && document.addEventListener("keydown", e), !l.keyboardShortcutsEnabled && document.removeEventListener("keydown", e), function () {
                    document.removeEventListener("keydown", e)
                }
            }), [u, l.keyboardShortcutsEnabled]), (0, d.jsxs)("div", {
                className: Je().navigation,
                children: [(0, d.jsxs)("div", {
                    className: Je()["navigation-header"],
                    children: [(0, d.jsx)(at, {}), (0, d.jsx)("div", {
                        className: Je()["navigation-tabs"],
                        children: (0, d.jsx)(E.Z.List, {
                            children: h.map((function (e) {
                                return (0, d.jsx)(E.Z.ListItem, ct(ct({
                                    className: Je()["navigation-tabs__item"],
                                    onClick: function () {
                                        n(e.id), c && b.onTabClicked(e.id, c)
                                    }
                                }, t === e.id ? {active: !0} : null), {}, {id: e.id, children: e.label}), e.id)
                            }))
                        })
                    })]
                }), (0, d.jsx)("div", {
                    className: Je()["navigation-content"], ref: f, children: h.map((function (e) {
                        return t === e.id ? (0, d.jsx)(E.Z.Panel, {
                            labelledBy: e.id,
                            className: Je()["navigation_tab-panel"],
                            children: e.content
                        }, e.id) : null
                    }))
                })]
            })
        }, lt = n(3265), dt = n(7905), ft = n(9047), pt = n.n(ft), mt = function () {
            var e = (0, s.useContext)(k.CoursePlayerContext), t = e.state, n = e.dispatch, r = t.navCollapsed,
                o = t.settings, i = (0, s.useState)(), a = i[0], c = i[1];
            return (0, s.useEffect)((function () {
                var e = function (e) {
                    var o = 84 === e.which, i = "textarea" !== e.target.tagName.toLowerCase(),
                        a = "input" !== e.target.tagName.toLowerCase(), s = "select" !== e.target.tagName.toLowerCase();
                    o && i && a && s && (n({
                        type: "NAV_COLLAPSED_CHANGED",
                        data: {navCollapsed: !r}
                    }), b.keyboardShortcutPressed({
                        keyPressed: e.code,
                        keyPressedAction: "toggleSideMenu",
                        clipId: t.currentContentItem && t.currentContentItem.id,
                        clipTitle: t.currentContentItem && t.currentContentItem.title
                    }))
                };
                return o.keyboardShortcutsEnabled && document.addEventListener("keydown", e), !o.keyboardShortcutsEnabled && document.removeEventListener("keydown", e), function () {
                    document.removeEventListener("keydown", e)
                }
            }), [r, o.keyboardShortcutsEnabled]), (0, d.jsxs)("div", {
                className: pt()["nav-toggle-btn-container"],
                children: [(0, d.jsxs)(ce.default, {
                    "aria-label": "toggle side menu",
                    "aria-expanded": !r,
                    className: pt()["nav-toggle-btn"],
                    onClick: function () {
                        return n({type: "NAV_COLLAPSED_CHANGED", data: {navCollapsed: !r}})
                    },
                    appearance: ce.default.appearances.flat,
                    onMouseEnter: function () {
                        return c(!0)
                    },
                    onMouseLeave: function () {
                        return c(!1)
                    },
                    children: [r ? (0, d.jsx)(lt.O, {}) : (0, d.jsx)("svg", {
                        className: pt()["nav-toggle-btn__svg"],
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24px",
                        height: "24px",
                        viewBox: "0 0 24 24",
                        children: (0, d.jsx)("path", {d: "M2 17.02h17.33v2H2zM2 11.06h15.49v2H2zM18.55 2.52L17.2 3.98l1.16 1.08H2v2h16.4L17.35 8.2l1.46 1.37L22.2 5.9l-3.64-3.39zm.78 3.54v-.08l.04.04-.04.04z"})
                    }), " "]
                }), a && (0, d.jsx)("div", {
                    className: pt()["tooltip-container"],
                    children: (0, d.jsx)(dt.ZP, {
                        className: pt().tooltip,
                        appearance: dt.ZP.appearances.basic,
                        tailPosition: dt.ZP.tailPositions.topRight,
                        children: "Toggle side menu (T)"
                    })
                })]
            })
        }, ht = function () {
            var e = (0, s.useContext)(k.CoursePlayerContext), t = e.state, n = e.dispatch,
                r = t.course && t.course.deprecatedCourseId;
            return (0, s.useEffect)((function () {
                r && (0, Ae.getNotesByCourseSlug)(t.course, r).then((function (e) {
                    n({type: "NOTES_UPDATED", data: {notes: e}})
                }))
            }), [r, n, t.course]), null
        }, gt = n(4193), vt = function () {
            var e = (0, s.useContext)(k.CoursePlayerContext).dispatch;
            return (0, s.useEffect)((function () {
                var t = (0, gt.getSettings)();
                e({
                    type: "SETTINGS_CHANGED",
                    data: {settings: t}
                }), !1 === t.keyboardShortcutsEnabled && e({
                    type: "NOTES_ENTER_TO_SAVE_CHANGE",
                    data: {enterToSaveEnabled: t.keyboardShortcutsEnabled}
                })
            }), []), null
        }, yt = n(4124), bt = n.n(yt), _t = function () {
            var e = (0, s.useState)(null), t = e[0], n = e[1], r = (0, s.useState)(null), o = r[0], i = r[1],
                a = (0, s.useState)(null), c = a[0], u = a[1], l = (0, s.useContext)(k.CoursePlayerContext),
                f = l.state, p = l.dispatch, m = f.currentContentItem, h = f.course, g = f.markers, v = f.startTime,
                y = f.versionId, b = f.userHandle, _ = f.settings;
            return (0, s.useEffect)((function () {
                if (t) {
                    var e = (0, Me.Oo)({
                        userId: b,
                        el: t,
                        boundedContext: "course",
                        markerCallback: function (e) {
                            p({type: "CURRENT_NOTE_CHANGED", data: {note: {noteId: e[0]}}})
                        },
                        markerConfig: {clusterInterval: 10},
                        nextCallback: function () {
                            return p({type: "PLAYER_NEXT_CLIP"})
                        },
                        previousCallback: function () {
                            return p({type: "PLAYER_PREV_CLIP"})
                        },
                        clipCompletedCallback: function () {
                            return p({type: "CLIP_COMPLETED"})
                        },
                        isStagingEnv: window.location.hostname.includes("app-stage") || window.location.hostname.includes("local")
                    });
                    i(e)
                }
            }), [p, t, b]), (0, s.useEffect)((function () {
                if ((!c || c.id !== m.id) && m && o) {
                    var e = {
                        title: h && h.title,
                        subtitle: m && m.title,
                        clipId: "link" !== m.type ? m.id : m.replacementClipId,
                        autoPlay: "link" !== m.type,
                        startTime: v,
                        versionId: y || m.version
                    };
                    o.play(e), u(m)
                }
            }), [m, h, v, o, c, y]), (0, s.useEffect)((function () {
                o && g && o.update({markers: g})
            }), [o, g]), (0, s.useEffect)((function () {
                o && h && o.update({courseTitle: h.title})
            }), [o, h]), (0, s.useEffect)((function () {
                o && m && o.update({clipTitle: m.title})
            }), [o, m]), (0, s.useEffect)((function () {
                o && o.update({keyboardShortcutsEnabled: _.keyboardShortcutsEnabled})
            }), [o, _.keyboardShortcutsEnabled]), (0, d.jsx)("div", {
                children: (0, d.jsx)("div", {
                    className: bt()["player-wrapper"],
                    ref: function (e) {
                        return n(e)
                    }
                })
            })
        }, xt = n(2737), wt = n(5929), Ct = n.n(wt), jt = function (e) {
            var t = e.isVisible, n = e.onOutsideClick, r = e.onModalVisible, o = (0, s.useRef)(), i = (0, s.useRef)();
            (0, s.useEffect)((function () {
                var e = function (e) {
                    o.current.contains(e.target) || n()
                };
                return t && r && r(), t && document.addEventListener("mousedown", e), !t && document.removeEventListener("mousedown", e), function () {
                    document.removeEventListener("mousedown", e)
                }
            }), [t, r, n]);
            return (0, d.jsx)("div", {
                ref: o,
                className: j()(Ct()["player-modal-overlay"], (0, _.Z)({}, Ct()["is-active"], t)),
                children: (0, d.jsxs)("div", {
                    ref: i,
                    className: j()(Ct()["player-modal"], (0, _.Z)({}, Ct()["is-active"], t)),
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-hidden": !t,
                    tabIndex: "-1",
                    onKeyDown: function (e) {
                        if (27 === e.which && n(), 9 === e.which) {
                            var t = document.activeElement,
                                r = Array.from(i.current.querySelectorAll("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), object, embed, *[tabindex], *[contenteditable]")),
                                o = r.length, a = r.indexOf(t);
                            e.shiftKey ? 0 === a && (e.preventDefault(), r[o - 1].focus()) : a === o - 1 && (e.preventDefault(), r[0].focus())
                        }
                    },
                    children: [(0, d.jsx)("button", {
                        className: Ct()["player-modal__close-btn"],
                        onClick: n,
                        "aria-label": "Close dialog",
                        children: (0, d.jsx)(ge.T, {color: ge.T.colors.textIconLowOnLight, size: ge.T.sizes.medium})
                    }), e.children]
                })
            })
        }, Et = function (e, t) {
            return fetch("/course-player/api/v1/metric/event", {
                body: JSON.stringify({functionName: e, tags: t}),
                headers: {"content-type": "application/json", "X-TEAM": "video-services"},
                method: "POST"
            })
        }, kt = n(5064), Ot = n.n(kt), Nt = n(4608), Lt = n.n(Nt);
        var Tt = function () {
            return (0, d.jsxs)("svg", {
                className: Lt()["feedback-callout__svg"],
                viewBox: "0 0 128 128",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, d.jsx)("path", {
                    d: "M98.576 15.194H40.004c-1.183 0-1.972.118-1.972.296V25H91.5a3 3 0 013 3v71.5h6.661c0-18.548.339-78.5.339-83l-.952-1.01c0-.178-.986-.296-1.972-.296z",
                    fill: "#8A99A8",
                    fillOpacity: ".25"
                }), (0, d.jsx)("path", {
                    d: "M89.82 111.9H29.239c-1.224 0-2.04-.816-2.04-2.04V29.491c0-1.224.816-2.04 2.04-2.04h60.583c1.224 0 2.04.816 2.04 2.04v80.369c0 1.224-1.02 2.04-2.04 2.04z",
                    stroke: "#0D0F12",
                    strokeWidth: "2",
                    strokeMiterlimit: "10",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0, d.jsx)("path", {
                    fillRule: "evenodd",
                    clipule: "evenodd",
                    d: "M39.032 17.237c0-.39.124-.636.266-.78.14-.143.374-.264.745-.264h59.72c.372 0 .605.121.745.264.142.144.266.39.266.78V97.73a1.03 1.03 0 01-1.01 1.043h-5.119v2h5.118c1.507 0 3.011-1.215 3.011-3.043V17.237c0-.836-.278-1.612-.84-2.183-.564-.573-1.335-.86-2.17-.86H40.042c-.835 0-1.607.287-2.17.86-.563.571-.84 1.347-.84 2.183v7.537h2v-7.537z",
                    fill: "#0D0F12"
                }), (0, d.jsx)("path", {
                    stroke: "#0D0F12",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    d: "M60 46h21M38 56h43M39 66h42M39 76h42M39 86h42M39 96h25"
                }), (0, d.jsx)("circle", {
                    cx: "77.5",
                    cy: "97.5",
                    r: "4.5",
                    stroke: "#0D0F12",
                    strokeWidth: "2"
                }), (0, d.jsx)("rect", {
                    x: "36",
                    y: "36",
                    width: "16",
                    height: "10",
                    rx: "1",
                    fill: "#8A99A8",
                    fillOpacity: ".25",
                    stroke: "#0D0F12",
                    strokeWidth: "2"
                }), (0, d.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M25 54H7a2 2 0 01-2-2V25a2 2 0 012-2h29v-2H7a4 4 0 00-4 4v27a4 4 0 004 4h18v-2zm0 41h-8a4 4 0 00-4 4v21a4 4 0 004 4h33a4 4 0 004-4v-6h-2v6a2 2 0 01-2 2H17a2 2 0 01-2-2V99a2 2 0 012-2h8v-2zm79-9h17a4 4 0 004-4V58a4 4 0 00-4-4h-17v2h17a2 2 0 012 2v24a2 2 0 01-2 2h-17v2zm0-40h12a4 4 0 004-4V31a4 4 0 00-4-4h-12v2h12a2 2 0 012 2v11a2 2 0 01-2 2h-12v2z",
                    fill: "#8A99A8",
                    fillOpacity: ".25"
                }), (0, d.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M27 97.323v14.709h63.742V33.581L27 97.323zM77.5 105a7.5 7.5 0 100-15 7.5 7.5 0 000 15z",
                    fill: "#8A99A8",
                    fillOpacity: ".25"
                })]
            })
        }, Pt = function (e) {
            var t = e.sendFeedbackUrl, n = e.trackFeedbackLinkClicked;
            return (0, d.jsxs)("div", {
                className: Ot()["feedback-callout"],
                children: [(0, d.jsxs)("div", {
                    className: Ot()["feedback-callout__header"],
                    children: [(0, d.jsx)(Tt, {}), (0, d.jsx)("h4", {
                        className: Ot()["feedback-callout__heading"],
                        children: "Share your Feedback"
                    })]
                }), (0, d.jsx)("p", {
                    className: j()(Ot()["feedback-callout__text"], Ot()["feedback-callout--new__text"]),
                    children: "Please take a moment to share some feedback about your experience with us!"
                }), (0, d.jsx)(ot.Z, {
                    onClick: n,
                    children: (0, d.jsx)("a", {
                        className: Ot()["feedback-callout__link"],
                        href: t,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Share your feedback with the author"
                    })
                })]
            })
        }, It = function () {
            var e = (0, s.useContext)(k.CoursePlayerContext).state, t = e.course, n = e.currentContentItem,
                r = e.userHandle, o = t && t.id, i = t && t.deprecatedCourseId,
                a = t && t.authors && t.authors[0].authorHandle, c = t && (0, T.LA)(n.id, t),
                u = c && c.deprecatedModuleId.split("|")[1], l = c && c.id,
                f = "https://pluralsight.qualtrics.com/SE/?SID=SV_7VZlm6J5ya98vZj&handle=".concat(r, "&course=").concat(i, "&author=").concat(a, "&name=").concat(u, "&courseId=").concat(o, "&moduleId=").concat(l);
            return (0, d.jsx)(Pt, {
                trackFeedbackLinkClicked: function () {
                    b.onShareFeedbackClick({
                        course: t,
                        linkName: "Share your feedback"
                    }), Et("moduleCompleteFeedbackLinkClicked", {modalVersion: "new"})
                }, sendFeedbackUrl: f
            })
        }, St = n(4126), Mt = n.n(St), Rt = n(4955), At = n(5311);

        function Dt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Ut(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Dt(Object(n), !0).forEach((function (t) {
                    (0, _.Z)(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Dt(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        var Zt = function (e) {
            var t = e.badge, n = e.userProgress, r = e.isMobile, o = t.name, i = t.icon,
                a = n.progressRemainingDescription, s = n.completePercentage;
            return (0, d.jsxs)("div", {
                className: j()(Mt()["upcoming-badge"], "u-flex", "u-align-items-center"),
                children: [!r && (0, d.jsx)("div", {
                    className: j()(Mt()["upcoming-badge__icon"], "u-flex-none"),
                    children: (0, d.jsx)("img", {alt: i.alt, src: "".concat(i.disabledLight.svg, "?w=50&h=50")})
                }), (0, d.jsxs)("div", {
                    className: j()(Mt()["upcoming-badge__progress"], "u-flex-1"),
                    children: [(0, d.jsx)("span", {
                        className: Mt()["upcoming-badge__title"],
                        children: o
                    }), (0, d.jsx)(At.Z, {
                        className: Mt()["upcoming-badge__slider"],
                        value: 100 * s
                    }), (0, d.jsx)("div", {
                        className: Mt()["upcoming-badge__description"],
                        style: {color: Rt.X6.colors.secondary},
                        children: a
                    })]
                })]
            })
        }, Ht = function (e) {
            var t = e.upcomingBadges, n = e.isMobile, r = void 0 !== n && n,
                o = (0, s.useContext)(k.CoursePlayerContext).state, i = o.course, a = o.currentContentItem,
                c = i && (0, T.LA)(a.id, i);
            return (0, d.jsxs)("div", {
                className: "u-text-center",
                children: [(0, d.jsx)(Rt.X6, {
                    size: Rt.X6.sizes.xSmall,
                    style: {marginTop: "0"},
                    children: (0, d.jsx)("h5", {children: "Keep on learning!"})
                }), t.map((function (e, t) {
                    return (0, d.jsx)(Zt, Ut(Ut({}, e), {}, {isMobile: r}), t)
                })), (0, d.jsx)("div", {
                    className: "u-font-weight-500",
                    children: (0, d.jsx)(ot.Z, {
                        onClick: function () {
                            return b.onTrophyCaseLinkClicked({course: i, currentModule: c, currentContentItem: a})
                        },
                        children: (0, d.jsx)("a", {
                            href: "/achievements",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: "Visit my trophy case"
                        })
                    })
                })]
            })
        }, Ft = n(3456), Bt = n.n(Ft), zt = n(3963), Vt = n(7268), Gt = n.n(Vt), qt = function (e) {
            var t = e.length, n = e.activeIndex, r = e.setActiveIndex, o = e.clicksDisabled, i = e.badges,
                a = (0, s.useContext)(k.CoursePlayerContext).state, c = a.course, u = a.currentContentItem,
                l = c && (0, T.LA)(u.id, c), f = new Array(t).fill(null), p = function (e, t) {
                    return function () {
                        b.onBadgePaginationDotClicked({
                            course: c,
                            currentContentItem: u,
                            currentModule: l,
                            currentBadge: i[e],
                            goingToBadge: i[t]
                        }), r(t)
                    }
                };
            return t > 1 ? (0, d.jsx)("div", {
                className: "u-text-center",
                children: (0, d.jsx)("div", {
                    children: f.map((function (e, t) {
                        return (0, d.jsx)("button", {
                            "aria-label": n === t ? "slide ".concat(t, " of ").concat(f.length, " (active)") : "go to slide ".concat(t, " of ").concat(f.length),
                            disabled: o,
                            className: n === t ? j()(Gt()["pagination-dot"], Gt()["is-active"]) : Gt()["pagination-dot"],
                            onClick: p(n, t)
                        }, t)
                    }))
                })
            }) : null
        };

        function Kt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Xt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Kt(Object(n), !0).forEach((function (t) {
                    (0, _.Z)(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Kt(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        var Wt = function (e) {
            var t = e.name, n = e.shareDescription, r = e.isActive;
            return (0, d.jsxs)("li", {
                className: Bt()["user-badge"],
                "aria-hidden": !r,
                children: [(0, d.jsx)(Rt.__, {
                    size: Rt.__.sizes.small,
                    strong: !0,
                    style: {color: "var(--psColorsTextIconHighOnLight"},
                    children: t
                }), (0, d.jsx)("div", {className: Bt()["user-badge__description"], children: n})]
            })
        }, Jt = function (e) {
            var t = e.userBadges, n = e.showTrophyCaseLink, r = e.isMobile, o = void 0 !== r && r,
                i = (0, s.useState)(0), a = i[0], c = i[1], u = (0, s.useContext)(k.CoursePlayerContext).state,
                l = u.course, f = u.currentContentItem, p = l && (0, T.LA)(f.id, l);
            return (0, d.jsxs)(d.Fragment, {
                children: [(0, d.jsxs)("div", {
                    className: j()("u-text-center", "user-badges-container"),
                    children: [(0, d.jsx)("img", {
                        alt: t[a].icon.alt,
                        src: t[a].icon.enabledLight.svg,
                        width: 128,
                        height: 128
                    }), (0, d.jsx)(Rt.X6, {
                        size: Rt.X6.sizes.xSmall,
                        style: {color: "var(--psColorsTextIconHighOnLight"},
                        children: (0, d.jsx)("h2", {children: t.length > 1 ? "You earned new badges!" : "You earned a new badge!"})
                    }), (0, d.jsxs)("div", {
                        className: Bt()["user-badges-pagination"],
                        children: [(0, d.jsx)("div", {
                            className: Bt()["user-badges-pagination__arrow-container"],
                            children: !o && 0 !== a && (0, d.jsx)("button", {
                                className: Bt()["user-badges-pagination__arrow"],
                                onClick: function () {
                                    b.onBadgesPreviousClicked({
                                        course: l,
                                        currentModule: p,
                                        currentContentItem: f,
                                        badge: t[a]
                                    }), c(a - 1)
                                },
                                "aria-label": "Go to previous slide",
                                children: (0, d.jsx)(zt.B, {
                                    color: zt.B.colors.textIconHighOnLight,
                                    size: zt.B.sizes.medium
                                })
                            })
                        }), (0, d.jsx)("div", {
                            className: "u-overflow-hidden",
                            children: (0, d.jsx)("div", {
                                className: j()("u-flex-1", Bt()["user-badges-window"]),
                                style: {transform: "translateX(-".concat(167 * a, "px)")},
                                children: (0, d.jsx)("ul", {
                                    className: j()(Bt()["user-badges-list"], "u-flex", "u-align-items-center"),
                                    children: t.map((function (e, t) {
                                        return (0, s.createElement)(Wt, Xt(Xt({}, e), {}, {
                                            "aria-label": "Go to next slide",
                                            isActive: t === a,
                                            index: t,
                                            key: t
                                        }))
                                    }))
                                })
                            })
                        }), (0, d.jsx)("div", {
                            className: Bt()["user-badges-pagination__arrow-container"],
                            children: !o && a < t.length - 1 && (0, d.jsx)("button", {
                                className: Bt()["user-badges-pagination__arrow"],
                                onClick: function () {
                                    b.onBadgesNextClicked({
                                        course: l,
                                        currentModule: p,
                                        currentContentItem: f,
                                        badge: t[a]
                                    }), c(a + 1)
                                },
                                children: (0, d.jsx)(se.Q, {
                                    color: se.Q.colors.textIconHighOnLight,
                                    size: se.Q.sizes.medium
                                })
                            })
                        })]
                    }), !o && (0, d.jsx)(qt, {
                        badges: t,
                        clicksDisabled: !1,
                        length: t.length,
                        activeIndex: a,
                        setActiveIndex: c
                    })]
                }), (o || n) && (0, d.jsx)("div", {
                    className: j()("u-font-weight-500", "u-text-center", Bt()["user-badges-trophy-link"]),
                    children: (0, d.jsx)(ot.Z, {
                        onClick: function () {
                            return b.onTrophyCaseLinkClicked({course: l, currentModule: p, currentContentItem: f})
                        },
                        children: (0, d.jsx)("a", {
                            href: "/achievements",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: "Visit my trophy case"
                        })
                    })
                })]
            })
        }, Qt = Jt, Yt = n(6306), $t = n.n(Yt);

        function en(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function tn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? en(Object(n), !0).forEach((function (t) {
                    (0, _.Z)(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : en(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        var nn = function (e) {
            var t, n, r = e.badges;
            return (0, d.jsx)(xt.default, {
                name: xt.default.names.light,
                children: (0, d.jsxs)("div", {
                    className: $t()["module-completed-modal__content"],
                    children: [(null === r || void 0 === r || null === (t = r.upcomingBadges) || void 0 === t ? void 0 : t.length) > 0 ? (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)("div", {
                            className: $t()["module-completed-modal__col"],
                            children: (0, d.jsx)(Ht, {upcomingBadges: r.upcomingBadges})
                        }), (0, d.jsx)("div", {className: j()($t()["module-completed-modal__vr"], "u-flex-none")})]
                    }) : null, (0, d.jsx)("div", {
                        className: $t()["module-completed-modal__col"],
                        children: (null === r || void 0 === r || null === (n = r.userBadges) || void 0 === n ? void 0 : n.length) > 0 ? (0, d.jsx)(Qt, {
                            showTrophyCaseLink: r.upcomingBadges.length < 1,
                            userBadges: r.userBadges
                        }) : (0, d.jsx)(It, tn({}, e))
                    })]
                })
            })
        }, rn = n(5587), on = n(6944), an = n(8341), sn = n.n(an);
        var cn = function (e) {
                var t = e.data;
                switch (t.type) {
                    case"user":
                        return (0, d.jsx)(Jt, {userBadges: t.badges, isMobile: !0});
                    case"upcoming":
                        return (0, d.jsx)(Ht, {upcomingBadges: t.badges, isMobile: !0});
                    case"feedback":
                        return (0, d.jsx)(It, {});
                    default:
                        return null
                }
            }, un = function (e) {
                var t = function (e, t) {
                    var n, r, o = [];
                    return t && o.push({type: "feedback"}), (null === e || void 0 === e || null === (n = e.userBadges) || void 0 === n ? void 0 : n.length) > 0 && e.userBadges.forEach((function (e) {
                        o.push({type: "user", badges: [e]})
                    })), (null === e || void 0 === e || null === (r = e.upcomingBadges) || void 0 === r ? void 0 : r.length) > 0 && o.push({
                        type: "upcoming",
                        badges: e.upcomingBadges
                    }), t || o.push({type: "feedback"}), o
                }(e.badges, e.showFeedbackFirst), n = (0, s.useState)(0), r = n[0], o = n[1];
                return (0, d.jsxs)("div", {
                    className: sn()["mobile-carousel-container"],
                    children: [(0, d.jsx)(on.Z, {
                        children: t.map((function (e, t) {
                            return (0, d.jsx)(on.Z.Item, {
                                children: function (t) {
                                    return t.isActivePage && o(t.pageIndex), (0, d.jsx)("div", {
                                        className: sn()["mobile-carousel-content"],
                                        children: (0, d.jsx)(cn, {data: e})
                                    })
                                }
                            }, t)
                        }))
                    }), (0, d.jsx)("div", {
                        className: sn()["mobile-pagination-wrapper"],
                        children: t.length > 1 && (0, d.jsx)(qt, {clicksDisabled: !0, length: t.length, activeIndex: r})
                    })]
                })
            }, ln = n(625), dn = n.n(ln),
            fn = ["accenture-tq-62bda", "accenture-tq-3b62e", "accenture-tq-549f3", "takeda-35ef8", "accenture-tq-dd896"],
            pn = function () {
                var e = (0, s.useContext)(k.CoursePlayerContext), t = e.state, n = e.dispatch,
                    r = t.showModuleCompletedModal, o = t.showCourseCompletedModal, i = t.course,
                    a = t.currentContentItem, c = i && i.id, u = i && (0, T.LA)(a.id, i), l = (0, s.useState)(!1),
                    f = l[0], p = l[1], m = (0, s.useState)(!1), h = m[0], g = m[1],
                    v = (0, s.useState)({userBadges: [], upcomingBadges: []}), y = v[0], _ = v[1],
                    x = (0, s.useState)((new Date).getTime()), w = x[0], C = x[1], j = (0, s.useRef)(),
                    E = (0, s.useState)(!1), O = E[0], N = E[1];
                (0, s.useEffect)((function () {
                    (0, rn.g)().then((function (e) {
                        e.plans && N(function (e) {
                            return e.some((function (e) {
                                return fn.indexOf(e) >= 0
                            }))
                        }(e.plans))
                    }))
                }), []), (0, s.useEffect)((function () {
                    r && j && j.current && j.current.focus()
                }), [r, j.current]);
                var L = !O && o;
                (0, s.useEffect)((function () {
                    (r || o) && (p(!f), g(!1), (0, Ae.getUserBadges)(w, c).then((function (e) {
                        _(e), g(!0), C((new Date).getTime())
                    })))
                }), [r, o]);
                return (0, d.jsx)(xt.default, {
                    name: xt.default.names.light, children: h && (r || o) && (0, d.jsxs)(jt, {
                        isVisible: r || o,
                        onModalVisible: function () {
                            return Et("moduleCompleteModalOpened", {modalVersion: "new"})
                        },
                        onOutsideClick: function () {
                            b.onModuleCompleteModalClosed({
                                course: i,
                                currentModule: u,
                                currentContentItem: a
                            }), n({type: "HIDE_COMPLETED_MODAL"})
                        },
                        children: [(0, d.jsx)("div", {
                            className: dn()["module-completed-modal-container--mobile"],
                            children: (0, d.jsx)(un, {badges: y, showFeedbackFirst: f})
                        }), (0, d.jsx)("div", {
                            className: dn()["module-completed-modal-container--desktop"],
                            children: (0, d.jsx)(nn, {badges: y})
                        }), (r || L) && (0, d.jsx)("div", {
                            className: dn()["module-completed-modal-container__footer"],
                            children: L ? (0, d.jsx)(ce.default, {
                                ref: j,
                                onClick: b.onRelatedCoursesClicked("View Related Courses", i),
                                href: "/library/courses/".concat(c, "/recommended-courses"),
                                target: "_blank",
                                children: "View related courses"
                            }) : (0, d.jsx)(ce.default, {
                                ref: j, onClick: function () {
                                    b.onNextModuleClicked({
                                        course: i,
                                        linkName: "Continue to next module",
                                        moduleTitle: u.title,
                                        moduleId: u.id
                                    }), n({type: "CONTINUE_CLICKED"})
                                }, children: "Continue to next module"
                            })
                        })]
                    })
                })
            }, mn = n(5814), hn = n.n(mn), gn = function (e) {
                var t = e.title, n = e.description, r = e.id, o = e.url, i = e.source, a = e.isAuthorized,
                    c = (0, s.useContext)(k.CoursePlayerContext), u = c.state, l = c.dispatch, f = u.course, p = f.authors,
                    m = (0, T.GQ)({id: r}, f), h = function (e) {
                        return e && e.length && e.map((function (e) {
                            return e.authorHandle
                        })).join("|")
                    }, g = function () {
                        l({type: "CONTENT_LINK_SKIPPED", data: {id: r}}), b.partnershipLinkSkipped({
                            contentTitle: f.title,
                            contentId: f.id,
                            partnerContentTitle: t,
                            partnerContentType: i,
                            partnerContentLink: o,
                            authorHandle: h(p)
                        })
                    };
                return (0, d.jsx)("div", {
                    className: hn()["content-link"], children: a ? (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsxs)("div", {
                            className: hn()["content-link__main"],
                            children: [(0, d.jsx)("h1", {
                                className: hn()["content-link__title"],
                                children: t
                            }), (0, d.jsx)("p", {
                                className: hn()["content-link__description"],
                                children: n
                            }), (0, d.jsxs)("div", {
                                children: [!m && (0, d.jsx)(ce.default, {
                                    className: hn()["content-link__btn"],
                                    appearance: ce.default.appearances.secondary,
                                    onClick: g,
                                    children: "Skip"
                                }), (0, d.jsx)(ce.default, {
                                    className: hn()["content-link__btn"],
                                    href: o,
                                    target: "_blank",
                                    onClick: function () {
                                        l({
                                            type: "CONTENT_LINK_OPEN",
                                            data: {id: r}
                                        }), b.partnershipLinkOpened({
                                            contentTitle: f.title,
                                            contentId: f.id,
                                            partnerContentTitle: t,
                                            partnerContentType: i,
                                            partnerContentLink: o,
                                            authorHandle: h(p)
                                        })
                                    },
                                    children: "Open"
                                })]
                            })]
                        }), "Qwiklabs" === i && (0, d.jsxs)("div", {
                            className: hn()["content-link__footer"], children: [(0, d.jsxs)("svg", {
                                className: hn()["content-link__logo"],
                                xmlnsXlink: "http://www.w3.org/1999/xlink",
                                viewBox: "0 0 778.44 256",
                                children: [(0, d.jsx)("defs", {
                                    children: (0, d.jsx)("path", {
                                        id: "a",
                                        d: "M0 0h778.44v256H0z"
                                    })
                                }), (0, d.jsx)("clipPath", {
                                    id: "b",
                                    children: (0, d.jsx)("use", {overflow: "visible", xlinkHref: "#a"})
                                }), (0, d.jsx)("path", {
                                    fill: "#FFF",
                                    d: "M124.97 168.3c-11.65 0-21.7-4.13-30.13-12.39-8.44-8.26-12.65-18.19-12.65-29.78s4.21-21.51 12.65-29.77c8.43-8.27 18.48-12.4 30.13-12.4a40.36 40.36 0 0 1 28.9 11.62l-8.12 8.13a29.28 29.28 0 0 0-20.78-8.23 28.92 28.92 0 0 0-21.44 8.95c-5.86 5.97-8.8 13.2-8.8 21.7s2.94 15.74 8.8 21.7a28.93 28.93 0 0 0 21.44 8.96c8.58 0 15.67-2.82 21.3-8.44 3.36-3.36 5.45-8.2 6.27-14.5h-27.57v-11.52h38.78c.41 2.05.62 4.45.62 7.2 0 11.31-3.33 20.3-9.98 26.94-7.54 7.9-17.35 11.84-29.42 11.84m90.11-7.77c-5.28 5.18-11.73 7.77-19.34 7.77-7.61 0-14.06-2.6-19.34-7.77-5.28-5.18-7.92-11.64-7.92-19.39s2.64-14.21 7.92-19.39c5.28-5.18 11.73-7.77 19.34-7.77 7.61 0 14.06 2.6 19.34 7.77 5.28 5.18 7.92 11.64 7.92 19.39s-2.64 14.21-7.92 19.39m-30.14-7.61a14.5 14.5 0 0 0 10.8 4.68 14.5 14.5 0 0 0 10.8-4.68c3.02-3.12 4.53-7.05 4.53-11.78 0-4.8-1.5-8.74-4.48-11.83a14.53 14.53 0 0 0-10.85-4.62c-4.25 0-7.87 1.54-10.85 4.62-2.98 3.09-4.47 7.03-4.47 11.83 0 4.73 1.5 8.66 4.52 11.78m89.6 7.6c-5.29 5.19-11.73 7.78-19.35 7.78-7.6 0-14.05-2.6-19.33-7.77-5.28-5.18-7.92-11.64-7.92-19.39s2.64-14.21 7.92-19.39c5.28-5.18 11.72-7.77 19.33-7.77 7.62 0 14.06 2.6 19.34 7.77 5.28 5.18 7.92 11.64 7.92 19.39s-2.64 14.21-7.92 19.39m-30.14-7.61a14.5 14.5 0 0 0 10.8 4.68 14.5 14.5 0 0 0 10.8-4.68c3.02-3.12 4.53-7.05 4.53-11.78 0-4.8-1.5-8.74-4.47-11.83a14.53 14.53 0 0 0-10.86-4.62c-4.25 0-7.86 1.54-10.85 4.62-2.98 3.09-4.47 7.03-4.47 11.83 0 4.73 1.5 8.66 4.52 11.78m69.23 39.75c-6.04 0-11.11-1.6-15.23-4.83-4.1-3.23-7.06-6.96-8.84-11.21l10.39-4.32c1.1 2.6 2.81 4.86 5.14 6.79a13 13 0 0 0 8.54 2.88c4.52 0 8.07-1.38 10.64-4.12 2.58-2.74 3.86-6.68 3.86-11.83v-3.9h-.41c-3.36 4.1-8.13 6.17-14.3 6.17-6.92 0-13-2.64-18.2-7.93a26.23 26.23 0 0 1-7.82-19.13c0-7.54 2.6-13.97 7.82-19.28 5.2-5.31 11.28-7.97 18.2-7.97 3.09 0 5.88.58 8.39 1.75 2.5 1.16 4.47 2.6 5.91 4.31h.41v-4.42h11.32v48.76c0 9.46-2.42 16.54-7.26 21.24-4.83 4.7-11.02 7.04-18.56 7.04m.82-35.07c4.12 0 7.56-1.56 10.34-4.68 2.78-3.12 4.17-7.01 4.17-11.68 0-4.73-1.4-8.67-4.17-11.83a13.23 13.23 0 0 0-10.34-4.73 14.1 14.1 0 0 0-10.7 4.73c-2.95 3.16-4.42 7.1-4.42 11.83 0 4.67 1.47 8.56 4.42 11.68a14.17 14.17 0 0 0 10.7 4.68m45.16 9.05h-11.94V86.84h11.94v79.82zm32.7 1.65c-7.68 0-14.09-2.6-19.23-7.82-5.14-5.21-7.71-11.66-7.71-19.34 0-7.95 2.48-14.47 7.46-19.54a24.46 24.46 0 0 1 18.15-7.61c3.29 0 6.34.6 9.15 1.8a21.5 21.5 0 0 1 7 4.63 31.86 31.86 0 0 1 4.42 5.5 32.73 32.73 0 0 1 2.68 5.35l1.23 3.09-36.31 15.01c2.81 5.49 7.2 8.23 13.17 8.23 5.48 0 9.94-2.5 13.37-7.51l9.25 6.17a30.08 30.08 0 0 1-8.74 8.33c-3.77 2.47-8.4 3.7-13.88 3.7m-15.12-27.97l24.27-10.08a8.41 8.41 0 0 0-3.8-4.17 12.38 12.38 0 0 0-6.28-1.6c-3.5 0-6.77 1.45-9.82 4.33-3.06 2.88-4.51 6.72-4.37 11.52M478.1 168.3c-10.85 0-19.93-3.66-27.27-11-7.33-7.34-11-16.5-11-27.47 0-10.97 3.67-20.12 11-27.46 7.34-7.33 16.42-11 27.26-11 11.1 0 20.12 4 27.05 12.03l-6.58 6.38c-5-6.24-11.83-9.36-20.47-9.36-8.02 0-14.8 2.7-20.31 8.13-5.52 5.41-8.28 12.51-8.28 21.29s2.76 15.87 8.28 21.29 12.29 8.13 20.31 8.13c8.85 0 16.39-3.57 22.63-10.7l6.58 6.58a35.87 35.87 0 0 1-12.65 9.62 38.75 38.75 0 0 1-16.56 3.55M515.74 93.01h9.46v73.65h-9.46zM540.63 122.28c4.87-5.11 11.07-7.67 18.62-7.67 7.54 0 13.74 2.56 18.61 7.67 4.87 5.1 7.3 11.5 7.3 19.18s-2.43 14.07-7.3 19.18c-4.87 5.11-11.07 7.67-18.61 7.67-7.55 0-13.75-2.56-18.62-7.67-4.87-5.1-7.3-11.5-7.3-19.18s2.43-14.07 7.3-19.18m7.04 32.4a15.65 15.65 0 0 0 11.58 4.98c4.45 0 8.3-1.66 11.57-4.98 3.25-3.33 4.88-7.73 4.88-13.22s-1.63-9.9-4.88-13.22a15.67 15.67 0 0 0-11.57-4.99c-4.46 0-8.32 1.67-11.58 4.99-3.25 3.33-4.88 7.73-4.88 13.22s1.63 9.9 4.88 13.22M637.52 166.66h-9.05v-7h-.41a17.57 17.57 0 0 1-6.58 6.12 18.61 18.61 0 0 1-9.36 2.52c-6.31 0-11.1-1.91-14.35-5.76-3.26-3.84-4.89-8.98-4.89-15.42v-30.86h9.46v29.31c0 9.4 4.15 14.1 12.45 14.1 3.9 0 7.1-1.58 9.57-4.74a17.2 17.2 0 0 0 3.7-10.9v-27.77h9.46v50.4zM669.62 168.3c-6.52 0-12.14-2.56-16.87-7.71-4.74-5.14-7.1-11.52-7.1-19.13s2.36-14 7.1-19.13c4.73-5.15 10.35-7.72 16.86-7.72 3.84 0 7.29.83 10.34 2.47a17.49 17.49 0 0 1 6.84 6.17h.41l-.4-7V93.02h9.46v73.65h-9.06v-7h-.4a17.49 17.49 0 0 1-6.85 6.18 21.43 21.43 0 0 1-10.34 2.47m1.55-8.65c4.46 0 8.24-1.64 11.36-4.93s4.68-7.72 4.68-13.27c0-5.56-1.56-9.98-4.68-13.27s-6.9-4.94-11.36-4.94c-4.4 0-8.16 1.66-11.32 4.99-3.15 3.33-4.73 7.73-4.73 13.22 0 5.48 1.58 9.9 4.73 13.22a15.05 15.05 0 0 0 11.32 4.98",
                                    clipPath: "url(#b)"
                                })]
                            }), (0, d.jsx)("div", {
                                className: hn()["content-link__logo-subhead"],
                                children: "Self-Paced Labs powered by Qwiklabs"
                            })]
                        })]
                    }) : (0, d.jsxs)("div", {
                        className: hn()["content-link__main"], children: [(0, d.jsxs)("svg", {
                            width: "128",
                            height: "127",
                            viewBox: "0 0 128 127",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, d.jsx)("path", {
                                d: "M113.996 96.5414L114.622 96.9541L115.22 96.0474L114.161 95.8096L113.996 96.5414ZM96.6081 113.952L95.8765 114.117L96.1157 115.177L97.0216 114.578L96.6081 113.952ZM114.985 96.8004L115.201 96.082L114.663 95.9207L114.357 96.391L114.985 96.8004ZM96.8684 114.941L96.4581 114.313L95.9882 114.62L96.1503 115.157L96.8684 114.941ZM96.049 115.467L96.7632 115.238L96.4675 114.316L95.6487 114.833L96.049 115.467ZM115.51 95.9804L114.875 95.5809L114.359 96.4004L115.282 96.6949L115.51 95.9804ZM26.434 12.9255L25.815 13.3489L26.252 13.9879L26.8768 13.5308L26.434 12.9255ZM13.7607 25.3186L14.356 25.7749L14.827 25.1604L14.1978 24.7092L13.7607 25.3186ZM95.7723 114.495L96.1756 115.127L96.6307 114.837L96.5 114.313L95.7723 114.495ZM114.538 95.7049L114.357 96.4329L114.881 96.5628L115.171 96.1074L114.538 95.7049ZM26.9389 13.7566L26.4953 13.1519L25.9704 13.5369L26.2777 14.1107L26.9389 13.7566ZM14.5804 25.8419L14.9492 25.1888L14.3824 24.8687L13.9857 25.3849L14.5804 25.8419ZM14.9656 25.3459L14.3757 24.8828L13.8305 25.5773L14.604 26.003L14.9656 25.3459ZM26.4344 14.1307L27.0994 13.7839L26.6911 13.001L25.9846 13.5305L26.4344 14.1307ZM25.9345 13.2947L26.3833 13.8956L26.9581 13.4663L26.5547 12.8731L25.9345 13.2947ZM14.1411 24.8275L13.7057 25.4382L14.2897 25.8546L14.7317 25.2896L14.1411 24.8275ZM108.98 56.0174L109.723 55.9123L109.618 55.174L108.879 55.2742L108.98 56.0174ZM109.257 66.6065L109.194 67.354L109.938 67.4157L110.004 66.6725L109.257 66.6065ZM109.871 55.0022L109.131 55.1212L109.229 55.7356L109.852 55.7519L109.871 55.0022ZM110.2 67.5745L110.141 66.8267L109.52 66.8752L109.454 67.4946L110.2 67.5745ZM110.018 55.9779L110.061 55.2291L109.149 55.176L109.275 56.0813L110.018 55.9779ZM110.294 66.5926L109.547 66.5283L109.469 67.4382L110.377 67.338L110.294 66.5926ZM109.161 67.5708L109.907 67.6523L109.99 66.8887L109.225 66.8235L109.161 67.5708ZM108.834 55.0595L108.937 55.8024L109.698 55.6973L109.574 54.9387L108.834 55.0595ZM110.797 95.4384C102.349 95.4384 95.5009 102.287 95.5009 110.734L97.0009 110.734C97.0009 103.115 103.178 96.9384 110.797 96.9384L110.797 95.4384ZM114.161 95.8096C113.077 95.5666 111.952 95.4384 110.797 95.4384L110.797 96.9384C111.84 96.9384 112.856 97.0542 113.832 97.2732L114.161 95.8096ZM113.37 96.1287C108.869 102.958 103.017 108.817 96.1946 113.327L97.0216 114.578C104.013 109.957 110.01 103.952 114.622 96.9541L113.37 96.1287ZM95.5009 110.734C95.5009 111.896 95.6306 113.028 95.8765 114.117L97.3397 113.787C97.1181 112.806 97.0009 111.784 97.0009 110.734L95.5009 110.734ZM114.357 96.391C109.702 103.535 103.596 109.649 96.4581 114.313L97.2786 115.568C104.591 110.791 110.845 104.529 115.613 97.2098L114.357 96.391ZM126.093 110.734C126.093 103.816 121.501 97.973 115.201 96.082L114.769 97.5187C120.453 99.2246 124.593 104.497 124.593 110.734L126.093 110.734ZM110.797 126.03C119.245 126.03 126.093 119.182 126.093 110.734L124.593 110.734C124.593 118.354 118.416 124.53 110.797 124.53L110.797 126.03ZM96.1503 115.157C98.0474 121.448 103.886 126.03 110.797 126.03L110.797 124.53C104.566 124.53 99.2978 120.399 97.5864 114.724L96.1503 115.157ZM95.3348 115.696C97.4313 122.234 103.56 126.969 110.797 126.969L110.797 125.469C104.231 125.469 98.6664 121.174 96.7632 115.238L95.3348 115.696ZM110.797 126.969C119.763 126.969 127.031 119.7 127.031 110.734L125.531 110.734C125.531 118.872 118.934 125.469 110.797 125.469L110.797 126.969ZM127.031 110.734C127.031 103.49 122.287 97.3562 115.738 95.2659L115.282 96.6949C121.227 98.5925 125.531 104.162 125.531 110.734L127.031 110.734ZM124.25 63C124.25 74.9748 120.814 86.1448 114.875 95.5809L116.145 96.3799C122.23 86.7116 125.75 75.2657 125.75 63L124.25 63ZM63 1.74999C96.8275 1.75 124.25 29.1726 124.25 63L125.75 63C125.75 28.3441 97.6559 0.249997 63 0.249994L63 1.74999ZM26.8768 13.5308C37.0041 6.12296 49.4903 1.74999 63 1.74999L63 0.249994C49.1613 0.249993 36.3669 4.73064 25.9912 12.3201L26.8768 13.5308ZM27.0531 12.5021C25.2983 9.93633 22.3462 8.25 19 8.25L19 9.75C21.8301 9.75 24.3278 11.1744 25.815 13.3489L27.0531 12.5021ZM19 8.25C13.6152 8.25 9.25001 12.6152 9.25001 18L10.75 18C10.75 13.4437 14.4437 9.75 19 9.75L19 8.25ZM9.25001 18C9.25001 21.2679 10.8585 24.1602 13.3236 25.9281L14.1978 24.7092C12.1086 23.2109 10.75 20.7641 10.75 18L9.25001 18ZM1.75002 63C1.75002 48.9962 6.44873 36.0919 14.356 25.7749L13.1654 24.8624C5.06453 35.4321 0.250022 48.6549 0.250021 63L1.75002 63ZM63 124.25C29.1726 124.25 1.75002 96.8274 1.75002 63L0.250021 63C0.250018 97.6559 28.3441 125.75 63 125.75L63 124.25ZM95.6487 114.833C86.1984 120.798 75.0035 124.25 63 124.25L63 125.75C75.2951 125.75 86.7664 122.213 96.4493 116.101L95.6487 114.833ZM94.5625 110.734C94.5625 112.093 94.7296 113.414 95.0446 114.676L96.5 114.313C96.2143 113.168 96.0625 111.97 96.0625 110.734L94.5625 110.734ZM110.797 94.5C101.831 94.5 94.5625 101.768 94.5625 110.734L96.0625 110.734C96.0625 102.597 102.659 96 110.797 96L110.797 94.5ZM114.718 94.977C113.462 94.6652 112.148 94.5 110.797 94.5L110.797 96C112.025 96 113.218 96.1502 114.357 96.4329L114.718 94.977ZM123.281 63C123.281 74.8858 119.842 85.966 113.905 95.3025L115.171 96.1074C121.256 86.5374 124.781 75.1792 124.781 63L123.281 63ZM63 2.71874C96.2924 2.71875 123.281 29.7076 123.281 63L124.781 63C124.781 28.8792 97.1209 1.21875 63 1.21874L63 2.71874ZM27.3825 14.3614C37.3613 7.04148 49.6747 2.71874 63 2.71874L63 1.21874C49.345 1.21874 36.7226 5.64964 26.4953 13.1519L27.3825 14.3614ZM28.75 18C28.75 16.339 28.334 14.7729 27.6 13.4025L26.2777 14.1107C26.898 15.2687 27.25 16.5921 27.25 18L28.75 18ZM19 27.75C24.3848 27.75 28.75 23.3848 28.75 18L27.25 18C27.25 22.5563 23.5564 26.25 19 26.25L19 27.75ZM14.2115 26.4949C15.6266 27.2942 17.2612 27.75 19 27.75L19 26.25C17.5264 26.25 16.1451 25.8643 14.9492 25.1888L14.2115 26.4949ZM2.71877 63C2.71877 49.1884 7.36284 36.4635 15.175 26.2989L13.9857 25.3849C5.97913 35.8024 1.21877 48.8463 1.21877 63L2.71877 63ZM63 123.281C29.7076 123.281 2.71877 96.2924 2.71877 63L1.21877 63C1.21877 97.1208 28.8792 124.781 63 124.781L63 123.281ZM95.369 113.863C86.0186 119.826 74.914 123.281 63 123.281L63 124.781C75.2082 124.781 86.5914 121.24 96.1756 115.127L95.369 113.863ZM14.604 26.003C15.9087 26.7211 17.4078 27.1293 19 27.1293L19 25.6293C17.6671 25.6293 16.416 25.2881 15.3272 24.6889L14.604 26.003ZM19 27.1293C24.042 27.1293 28.1293 23.042 28.1293 18L26.6293 18C26.6293 22.2136 23.2136 25.6293 19 25.6293L19 27.1293ZM28.1293 18C28.1293 16.4806 27.7576 15.0459 27.0994 13.7839L25.7694 14.4775C26.3185 15.5304 26.6293 16.7278 26.6293 18L28.1293 18ZM15.5556 25.809C18.8288 21.6393 22.6399 17.9117 26.8842 14.7308L25.9846 13.5305C21.6352 16.7901 17.7299 20.6099 14.3757 24.8828L15.5556 25.809ZM26.5547 12.8731C24.9135 10.459 22.1423 8.87069 19 8.87069L19 10.3707C21.6248 10.3707 23.9404 11.6955 25.3143 13.7164L26.5547 12.8731ZM19 8.87069C13.958 8.87069 9.8707 12.958 9.8707 18L11.3707 18C11.3707 13.7865 14.7865 10.3707 19 10.3707L19 8.87069ZM9.8707 18C9.8707 21.0691 11.3859 23.7842 13.7057 25.4382L14.5764 24.2168C12.6345 22.8323 11.3707 20.5637 11.3707 18L9.8707 18ZM14.7317 25.2896C18.0917 20.9951 22.0123 17.1604 26.3833 13.8956L25.4857 12.6938C21.0081 16.0382 16.9921 19.9663 13.5504 24.3653L14.7317 25.2896ZM105.125 61.2969C105.125 58.9797 106.847 57.0636 109.081 56.7606L108.879 55.2742C105.912 55.6767 103.625 58.2191 103.625 61.2969L105.125 61.2969ZM109.319 65.8591C106.97 65.6643 105.125 63.6957 105.125 61.2969L103.625 61.2969C103.625 64.4825 106.075 67.0951 109.194 67.354L109.319 65.8591ZM108.686 62.5156C108.686 63.8723 108.626 65.2148 108.509 66.5406L110.004 66.6725C110.124 65.3028 110.186 63.9163 110.186 62.5156L108.686 62.5156ZM108.238 56.1225C108.533 58.2107 108.686 60.3451 108.686 62.5156L110.186 62.5156C110.186 60.2745 110.028 58.0699 109.723 55.9123L108.238 56.1225ZM109.852 55.7519C112.846 55.8304 115.25 58.283 115.25 61.2969L116.75 61.2969C116.75 57.4678 113.696 54.3522 109.891 54.2525L109.852 55.7519ZM115.25 61.2969C115.25 64.2128 113 66.6038 110.141 66.8267L110.258 68.3222C113.891 68.0389 116.75 65.0021 116.75 61.2969L115.25 61.2969ZM109.454 67.4946C106.971 90.6873 87.3366 108.75 63.4844 108.75L63.4844 110.25C88.1114 110.25 108.382 91.601 110.945 67.6543L109.454 67.4946ZM63.4844 108.75C37.9498 108.75 17.25 88.0502 17.25 62.5156L15.75 62.5156C15.75 88.8786 37.1214 110.25 63.4844 110.25L63.4844 108.75ZM17.25 62.5156C17.25 36.9811 37.9498 16.2812 63.4844 16.2812L63.4844 14.7812C37.1214 14.7812 15.75 36.1526 15.75 62.5156L17.25 62.5156ZM63.4844 16.2812C86.5017 16.2812 105.592 33.1017 109.131 55.1212L110.612 54.8832C106.958 32.1481 87.2499 14.7812 63.4844 14.7812L63.4844 16.2812ZM109.974 56.7266C112.376 56.8664 114.281 58.8594 114.281 61.2969L115.781 61.2969C115.781 58.0602 113.252 55.4148 110.061 55.2291L109.974 56.7266ZM114.281 61.2969C114.281 63.6531 112.501 65.5945 110.212 65.8471L110.377 67.338C113.417 67.0024 115.781 64.4263 115.781 61.2969L114.281 61.2969ZM109.719 62.5156C109.719 63.8677 109.661 65.2061 109.547 66.5283L111.042 66.6568C111.159 65.2918 111.219 63.9106 111.219 62.5156L109.719 62.5156ZM109.275 56.0813C109.567 58.1837 109.719 60.3318 109.719 62.5156L111.219 62.5156C111.219 60.2624 111.063 58.0452 110.76 55.8745L109.275 56.0813ZM108.416 67.4892C105.94 90.113 86.7676 107.717 63.4844 107.717L63.4844 109.217C87.5412 109.217 107.349 91.0285 109.907 67.6523L108.416 67.4892ZM63.4844 107.717C38.5201 107.717 18.2826 87.4799 18.2826 62.5156L16.7826 62.5156C16.7826 88.3083 37.6917 109.217 63.4844 109.217L63.4844 107.717ZM18.2826 62.5156C18.2826 37.5514 38.5202 17.3139 63.4844 17.3139L63.4844 15.8139C37.6917 15.8139 16.7826 36.723 16.7826 62.5156L18.2826 62.5156ZM63.4844 17.3139C85.9506 17.3139 104.59 33.7047 108.094 55.1802L109.574 54.9387C105.954 32.7492 86.6976 15.8139 63.4844 15.8139L63.4844 17.3139ZM104.156 61.2969C104.156 58.4937 106.236 56.1751 108.937 55.8024L108.732 54.3165C105.299 54.7902 102.656 57.7343 102.656 61.2969L104.156 61.2969ZM109.225 66.8235C106.386 66.5815 104.156 64.1991 104.156 61.2969L102.656 61.2969C102.656 64.9848 105.489 68.0105 109.098 68.318L109.225 66.8235Z",
                                fill: "#8A99A8",
                                "fill-opacity": "0.4"
                            }), (0, d.jsx)("path", {
                                d: "M44.7904 50.4186H42.2487C39.7405 50.4186 37.707 52.4521 37.707 54.9603V86.8336C37.707 89.3417 39.7405 91.3752 42.2487 91.3752L84.7487 91.3769C87.2568 91.3769 89.2904 89.3439 89.2904 86.8353V54.9603C89.2904 52.4521 87.2569 50.4186 84.7487 50.4186H82.207V44.3353C82.207 34.0188 73.8152 25.627 63.4987 25.627C53.1822 25.627 44.7904 34.0188 44.7904 44.3353V50.4186ZM53.8737 44.3353C53.8737 39.0295 58.1929 34.7103 63.4987 34.7103C68.8045 34.7103 73.1237 39.0295 73.1237 44.3353V50.4186H53.8737V44.3353ZM67.8112 70.8961C67.8112 73.2778 65.8804 75.2086 63.4987 75.2086C61.117 75.2086 59.1862 73.2778 59.1862 70.8961C59.1862 68.5143 61.117 66.5836 63.4987 66.5836C65.8804 66.5836 67.8112 68.5143 67.8112 70.8961Z",
                                fill: "#8A99A8",
                                "fill-opacity": "0.4",
                                stroke: "white",
                                "stroke-width": "2"
                            })]
                        }), (0, d.jsx)("h1", {
                            className: hn()["content-link__title"],
                            children: "Access to Qwiklabs is restricted by your plan admin."
                        }), !m && (0, d.jsx)(ce.default, {
                            className: hn()["content-link__btn"],
                            size: ce.default.sizes.large,
                            onClick: g,
                            children: "Continue to next clip"
                        })]
                    })
                })
            }, vn = n(8120), yn = n.n(vn), bn = function (e) {
                var t = e.buttonText, n = (0, s.useContext)(k.CoursePlayerContext).state.course;
                return (0, d.jsx)("div", {
                    className: yn()["freemium-cta"],
                    children: (0, d.jsxs)("div", {
                        className: yn()["freemium-cta__content"],
                        children: ["Upgrade to get access to thousands of expert-led courses across hundreds of topics.", (0, d.jsx)("div", {
                            className: j()(yn()["freemium-cta__buttons"], "u-flex@sm", "u-justify-content-center"),
                            children: (0, d.jsx)(ce.default, {
                                className: "u-order-2@sm u-auto-width@sm u-margin-sm",
                                appearance: ce.default.appearances.primary,
                                onClick: function () {
                                    b.onUpgradeNowClicked("Upgrade Now", n), window.open("https://go.pluralsight.com/C0094778", "_blank")
                                },
                                children: t
                            })
                        })]
                    })
                })
            };

        function _n(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function xn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? _n(Object(n), !0).forEach((function (t) {
                    (0, _.Z)(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _n(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        var wn = function () {
            var e = (0, s.useContext)(k.CoursePlayerContext).state, t = (0, s.useState)(!1), n = t[0], r = t[1],
                o = e.currentContentItem, i = e.showCourseCompletedModal, a = e.userLibraries, c = e.currentTime,
                u = e.freeLibraryId, l = e.currentContentItem && e.currentContentItem.type || "clip",
                f = (0, s.createRef)();
            (0, s.useEffect)((function () {
                f && f.current && f.current.focus()
            }), [o]), (0, s.useEffect)((function () {
                (0, T.wE)(a, u) && i && r(!0)
            }), [a, i]);
            var p = "clip" === l && !n,
                m = c > "2020-11-22T07:00:00.000Z" && c < "2020-12-04T07:00:00.000Z" ? "Get 40% off" : "Upgrade";
            return (0, d.jsxs)("div", {
                ref: f,
                tabIndex: "-1",
                children: ["link" === l && (0, d.jsx)(gn, xn({}, e.currentContentItem)), n && (0, d.jsx)(bn, {buttonText: m}), (0, d.jsxs)("div", {
                    style: {display: p ? "block" : "none"},
                    children: [(0, d.jsx)(_t, {}), !n && (0, d.jsx)(pn, {})]
                })]
            })
        }, Cn = function () {
            var e = (0, s.useContext)(k.CoursePlayerContext).dispatch;
            return (0, s.useEffect)((function () {
                (0, Ae.getUserLibraries)().then((function (t) {
                    e({type: "USER_LIBRARIES_UPDATED", data: {userLibraries: t.userLibraries}})
                }))
            }), [e]), null
        }, jn = n(7706), En = n.n(jn), kn = function () {
            var e = (0, s.useContext)(k.CoursePlayerContext), t = e.state, n = e.dispatch, r = t.settings,
                o = t.navCollapsed, i = r.keyboardShortcutsEnabled;
            return (0, d.jsxs)("div", {
                className: j()(En()["disable-shortcuts-banner"], "u-flex", "u-align-items-center", (0, _.Z)({}, En()["has-collapsed-nav"], o)),
                tabIndex: "0",
                children: [(0, d.jsx)("div", {
                    className: "u-flex u-align-items-center",
                    children: (0, d.jsx)(Te.ZP, {
                        className: "u-mr-md", checked: i, onClick: function () {
                            var e = !i;
                            (0, Ae.setSettings)({keyboardShortcutsEnabled: e}), n({
                                type: "SETTINGS_CHANGED",
                                data: {settings: {keyboardShortcutsEnabled: e}}
                            }), n({
                                type: "NOTES_ENTER_TO_SAVE_CHANGE",
                                data: {enterToSaveEnabled: e}
                            }), b.keyboardShortcutsToggleClicked({enabled: e})
                        }, labelAlign: "left", children: "Video player keyboard shortcuts on this page"
                    })
                }), i ? "On" : "Off"]
            })
        }, On = function () {
            var e = (0, s.useContext)(k.CoursePlayerContext), t = e.state, n = e.dispatch, r = (0, s.useState)(!1),
                o = r[0], i = r[1], a = t.navCollapsed, c = (0, s.useRef)(null);
            (0, s.useEffect)((function () {
                var e = function () {
                    u(!1)
                }, t = function (e) {
                    9 === e.which && i(!0)
                }, n = function () {
                    return i(!1)
                };
                return window.addEventListener("resize", e), window.addEventListener("keydown", t), window.addEventListener("mousemove", n), function () {
                    window.removeEventListener("resize", e), window.removeEventListener("keydown", t), window.removeEventListener("mousemove", n)
                }
            }), []);
            var u = function (e) {
                n({type: "NAV_COLLAPSED_CHANGED", data: {navCollapsed: e}})
            };
            return (0, d.jsx)("div", {
                className: w()["course-player-wrapper"],
                children: (0, d.jsxs)("div", {
                    className: j()(w()["course-player"], (0, _.Z)({}, w()["has-collapsed-nav"], a), (0, _.Z)({}, w()["is-using-keyboard"], o)),
                    ref: c,
                    children: [(0, d.jsx)(Cn, {}), (0, d.jsx)(kn, {}), (0, d.jsx)(ht, {}), (0, d.jsx)(vt, {}), (0, d.jsxs)("div", {
                        className: w()["course-player__player"],
                        children: [(0, d.jsx)(mt, {}), (0, d.jsx)(wn, {})]
                    }), (0, d.jsx)("div", {
                        className: j()(w()["course-player__nav"], (0, _.Z)({}, w()["is-collapsed"], a)),
                        children: (0, d.jsx)("div", {
                            className: w()["course-player__nav-content"],
                            children: (0, d.jsx)(ut, {})
                        })
                    })]
                })
            })
        }, Nn = function (e) {
            var t = e.userHandle;
            return (0, s.useEffect)((function () {
                b.initialize("course-player"), b.onPageLoad(t)
            }), []), (0, d.jsx)(On, {})
        }, Ln = n(2025), Tn = n.n(Ln), Pn = n(4155), In = (0, c.default)((function () {
            return Promise.resolve().then(n.bind(n, 9534))
        }), {
            ssr: !1, loadableGenerated: {
                webpack: function () {
                    return [9534]
                }, modules: ["course-player/index.js -> ../../src/Context"]
            }
        }), Sn = function (e) {
            var t = e.appEnv, n = e.userHandle, r = e.tableOfContents, o = e.isOldBrowser, i = e.freeLibraryId,
                a = e.launchDarklyFlags;
            return (0, d.jsxs)(p.Provider, {
                value: a,
                children: [(0, d.jsx)("style", {children: "html { background: #181818 }"}), (0, d.jsx)(f, {
                    appEnv: t,
                    isOldBrowser: o,
                    title: null === r || void 0 === r ? void 0 : r.title,
                    children: (0, d.jsx)(In, {
                        userHandle: n,
                        tableOfContents: r,
                        freeLibraryId: i,
                        children: (0, d.jsx)(Nn, {userHandle: n})
                    })
                })]
            })
        };
        Sn.getInitialProps = function () {
            var e = (0, o.Z)(a().mark((function e(t) {
                var n;
                return a().wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return n = t.req, e.abrupt("return", {
                                appEnv: Pn.env.APP_ENV,
                                freeLibraryId: Tn().freeLibraryId,
                                userHandle: n && n.userHandle,
                                tableOfContents: n && n.tableOfContents,
                                isOldBrowser: n && n.userAgent.isIE,
                                launchDarklyFlags: n && n.launchDarklyFlags
                            });
                        case 2:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })));
            return function (t) {
                return e.apply(this, arguments)
            }
        }();
        var Mn = Sn
    }, 9534: function (e, t, n) {
       // "use strict";
        n.r(t), n.d(t, {
            CoursePlayerContext: function () {
                return y
            }, CoursePlayerProvider: function () {
                return b
            }, default: function () {
                return _
            }
        });
        var r = n(3789), o = n(7294), i = n(2809), a = n(2841), s = function (e, t) {
            return e.filter((function (e) {
                return !e.deleted
            })).filter((function (e) {
                return e.clipId === t
            })).map((function (e) {
                return {id: e.noteId, timeIndex: e.timeInClip}
            }))
        }, c = n(466), u = n(1127), l = n(7541);

        function d(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function f(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? d(Object(n), !0).forEach((function (t) {
                    (0, i.Z)(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        var p = function (e, t, n) {
            var o = e.currentContentItem, i = e.course, a = e.showCourseCompletedModal, c = e.showModuleCompletedModal,
                l = e.watchedContentItemIds, d = e.notes;
            if (t(o, i) || c || a) return f(f({}, e), {}, {startTime: null});
            var p = n(o.id, i);
            return "link" !== p.type && (0, u.sA)(p.id), f(f({}, e), {}, {
                currentContentItem: p,
                currentClipCompleted: !1,
                watchedContentItemIds: [].concat((0, r.Z)(l), [p.id]),
                startTime: null,
                markers: s(d, p.id)
            })
        }, m = function (e, t) {
            var n = e.currentContentItem, o = e.course, i = e.watchedContentItemIds;
            switch (t.type) {
                case"SCROLLABLE_NAVIGATION_REF_CHANGED":
                    return f(f({}, e), {}, {scrollableNavigationRef: t.data.scrollableNavigationRef});
                case"USER_LIBRARIES_UPDATED":
                    return f(f({}, e), {}, {userLibraries: t.data.userLibraries});
                case"NOTES_ENTER_TO_SAVE_CHANGE":
                case"SETTINGS_CHANGED":
                case"COURSE_RELOADED":
                    return f(f({}, e), t.data);
                case"NOTES_UPDATED":
                    var d = s(t.data.notes, e.currentContentItem.id), m = (0, l.$)(o), h = t.data.notes.sort(m);
                    return f(f({}, e), {}, {notes: h, markers: d});
                case"NOTE_CLICKED":
                    var g = t.data.note, v = g.clipId, y = g.timeInClip;
                    return v === e.currentContentItem.id ? ((0, a.Y1)(y), f({}, e)) : ((0, u.sA)(v), f(f({}, e), {}, {
                        currentContentItem: (0, c.o)(v, e.course),
                        currentClipCompleted: !1,
                        markers: s(e.notes, v)
                    }));
                case"CURRENT_CONTENT_ITEM_CHANGED":
                    return "link" !== t.data.type && (0, u.sA)(t.data.id), f(f({}, e), {}, {
                        startTime: null,
                        currentContentItem: t.data,
                        currentClipCompleted: !1,
                        watchedContentItemIds: [].concat((0, r.Z)(i), [t.data.id]),
                        markers: s(e.notes, t.data.id)
                    });
                case"CURRENT_NOTE_CHANGED":
                    return f(f({}, e), {}, {currentNote: t.data.note});
                case"PLAYER_PREV_CLIP":
                    return p(e, u.dA, u.R5);
                case"PLAYER_NEXT_CLIP":
                    return p(e, u.GQ, u.$A);
                case"CONTENT_LINK_SKIPPED":
                    var b = (0, u.$A)(n.id, o);
                    return (0, u.sA)(b.id), f(f({}, e), {}, {currentContentItem: b, currentClipCompleted: !1});
                case"CONTENT_LINK_OPEN":
                    return f(f({}, e), {}, {watchedContentItemIds: [].concat((0, r.Z)(i), [t.data.id])});
                case"CONTINUE_CLICKED":
                    var _ = (0, u.$A)(n.id, o);
                    return (0, u.sA)(_.id), f(f({}, e), {}, {
                        currentContentItem: _,
                        currentClipCompleted: !1,
                        watchedContentItemIds: [].concat((0, r.Z)(i), [_.id]),
                        showModuleCompletedModal: !1
                    });
                case"HIDE_COMPLETED_MODAL":
                    return f(f({}, e), {}, {showCourseCompletedModal: !1, showModuleCompletedModal: !1});
                case"NAV_COLLAPSED_CHANGED":
                    return f(f({}, e), {}, {navCollapsed: t.data.navCollapsed});
                case"CLIP_COMPLETED":
                    return (0, u.GQ)(n, o) ? f(f({}, e), {}, {
                        currentClipCompleted: !0,
                        showCourseCompletedModal: !0
                    }) : (0, u.dT)(n, o) ? f(f({}, e), {}, {
                        currentClipCompleted: !0,
                        showModuleCompletedModal: !0
                    }) : f(f({}, e), {}, {currentClipCompleted: !0});
                default:
                    return
            }
        }, h = n(5174), g = n(1163), v = n(5893), y = (0, o.createContext)({}), b = function (e) {
            var t, n = e.tableOfContents, i = e.userHandle, a = e.freeLibraryId, s = (0, g.useRouter)().query,
                c = (0, h.getParams)(s), u = (t = n) ? t.modules.map((function (e) {
                    return e.contentItems
                })).reduce((function (e, t) {
                    return [].concat((0, r.Z)(e), (0, r.Z)(t))
                }), []).filter((function (e) {
                    return e.watched
                })).map((function (e) {
                    return e.id
                })) : [], l = function (e, t) {
                    return function (e) {
                        return e.clipId && !e.courseId
                    }(t) ? (n = e, r = t.clipId, n.modules.reduce((function (e, t) {
                        return e.concat(t.contentItems)
                    }), []).find((function (e) {
                        return e.id === r || e.replacementClipId === r
                    }))) : function (e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                        return e ? (e.modules.find((function (e) {
                            var n = e.deprecatedModuleId.split("|")[1] === t, r = t === e.id;
                            return n || r
                        })) || e.modules[0]).contentItems[n] : null
                    }(e, t.moduleSlug, t.clipIndex);
                    var n, r
                }(n, c), d = {
                    currentClip: null,
                    currentClipCompleted: !1,
                    notes: [],
                    userHandle: i,
                    course: n,
                    currentContentItem: l,
                    versionId: c.versionId,
                    startTime: c.startTime,
                    watchedContentItemIds: n ? [].concat((0, r.Z)(u), [l.id]) : [],
                    navCollapsed: !1,
                    userLibraries: [],
                    scrollableNavigationRef: null,
                    settings: (0, h.getSettings)(),
                    enterToSave: (0, h.getSettings)().keyboardShortcutsEnabled,
                    currentTime: (new Date).toISOString(),
                    freeLibraryId: a
                }, f = (0, o.useReducer)(m, d), p = f[0], b = f[1];
            return (0, v.jsx)(y.Provider, {value: {state: p, dispatch: b}, children: e.children})
        }, _ = b
    }, 763: function (e, t, n) {
       // "use strict";
        n.d(t, {
            r: function () {
                return s
            }
        });
        var r = n(266), o = n(809), i = n.n(o), a = n(3300), s = function () {
            var e = (0, r.Z)(i().mark((function e(t, n) {
                return i().wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.abrupt("return", a("/course-player/api/v1/user-badges?after=".concat(t, "&courseId=").concat(n)).then((function (e) {
                                if (200 === e.status) return e.json()
                            })));
                        case 4:
                            e.prev = 4, e.t0 = e.catch(0), console.log("err", e.t0);
                        case 7:
                            return e.abrupt("return", {userBadges: [], upcomingBadges: []});
                        case 8:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 4]])
            })));
            return function (t, n) {
                return e.apply(this, arguments)
            }
        }()
    }, 5174: function (e, t, n) {
       // "use strict";
        n.d(t, {
            getNotesByCourseSlug: function () {
                return r.G
            }, writeNoteByCourse: function () {
                return r.r
            }, getUserLibraries: function () {
                return i.X
            }, getUserBadges: function () {
                return s.r
            }
        });
        var r = n(5428), o = n(3943);
        n.o(o, "getParams") && n.d(t, {
            getParams: function () {
                return o.getParams
            }
        }), n.o(o, "getSettings") && n.d(t, {
            getSettings: function () {
                return o.getSettings
            }
        }), n.o(o, "getUserBadges") && n.d(t, {
            getUserBadges: function () {
                return o.getUserBadges
            }
        }), n.o(o, "getUserLibraries") && n.d(t, {
            getUserLibraries: function () {
                return o.getUserLibraries
            }
        }), n.o(o, "setSettings") && n.d(t, {
            setSettings: function () {
                return o.setSettings
            }
        });
        n(5587);
        var i = n(9374), a = n(4193);
        n.o(a, "getParams") && n.d(t, {
            getParams: function () {
                return a.getParams
            }
        }), n.o(a, "getSettings") && n.d(t, {
            getSettings: function () {
                return a.getSettings
            }
        }), n.o(a, "getUserBadges") && n.d(t, {
            getUserBadges: function () {
                return a.getUserBadges
            }
        }), n.o(a, "setSettings") && n.d(t, {
            setSettings: function () {
                return a.setSettings
            }
        });
        var s = n(763)
    }, 9374: function (e, t, n) {
       // "use strict";
        n.d(t, {
            X: function () {
                return s
            }
        });
        var r = n(266), o = n(809), i = n.n(o), a = n(3300), s = function () {
            var e = (0, r.Z)(i().mark((function e() {
                return i().wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.abrupt("return", a("/course-player/api/v1/libraries").then((function (e) {
                                return e.json()
                            })));
                        case 4:
                            return e.prev = 4, e.t0 = e.catch(0), e.abrupt("return", {userLibraries: []});
                        case 7:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 4]])
            })));
            return function () {
                return e.apply(this, arguments)
            }
        }()
    }, 5428: function (e, t, n) {
       // "use strict";
        n.d(t, {
            r: function () {
                return s
            }, G: function () {
                return c
            }
        });
        var r = n(2809), o = n(6823);

        function i(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function a(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(Object(n), !0).forEach((function (t) {
                    (0, r.Z)(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        var s = function (e, t) {
            var n = (0, o.LA)(e.clipId, t), r = (0, o.oW)(e.clipId, t), i = a(a({}, e), {}, {
                courseSlug: t.deprecatedCourseId,
                courseTitle: t.title,
                courseId: t.id,
                moduleIndex: n.index,
                clipId: (0, o.Xw)(t, r),
                clipIndex: r.index,
                duration: r.duration,
                schema: 2
            });
            return fetch("/player/api/graphql", {
                method: "POST",
                headers: {"Content-Type": "application/json", "X-TEAM": "video-services"},
                body: JSON.stringify({
                    query: "mutation($note: noteInput){writeNote(note: $note) {success, noteId} }",
                    variables: {note: i}
                })
            }).then((function (e) {
                return e.clone().json()
            }))
        }, c = function (e, t) {
            var n = 'query GetNotesByCourseAndUser { rpc { getNotesByCourseAndUser (courseSlug: "'.concat(t, '") { timeInClip schema created clipIndex duration moduleIndex updated noteId clipId userHandle clipTitle moduleTitle courseTitle courseSlug text courseId deleted tags} } }');
            return fetch("/player/api/graphql", {
                method: "POST",
                headers: {"Content-Type": "application/json", "X-TEAM": "video-services"},
                body: JSON.stringify({query: n, variables: {}})
            }).then((function (e) {
                return e.clone().json()
            })).then((function (t) {
                return (t.data.rpc.getNotesByCourseAndUser || []).sort((function (e, t) {
                    return e.created - t.created
                })).map((function (t) {
                    return a(a({}, t), {}, {clipId: (0, o.HW)(e, t.clipId)})
                }))
            }))
        }
    }, 3943: function (e) {
        e.exports = {
            getParams: function (e) {
                var t = new URLSearchParams(e);
                return {
                    courseId: t.get("courseId") || t.get("course") || "",
                    clipId: t.get("clipId") || "",
                    versionId: t.get("versionId") || "",
                    moduleSlug: t.get("name"),
                    deprecatedModuleId: t.get("author") ? "".concat(t.get("author"), "|").concat(t.get("name")) : "",
                    clipIndex: t.get("clip") || 0,
                    startTime: parseInt(t.get("startTime")) || parseInt(t.get("start")) || null
                }
            }, setParams: function (e) {
                var t = e.clipId, n = void 0 === t ? "" : t, r = new URLSearchParams;
                return r.set("clipId", n), r.toString()
            }
        }
    }, 5587: function (e, t, n) {
       // "use strict";
        n.d(t, {
            g: function () {
                return s
            }
        });
        var r = n(266), o = n(809), i = n.n(o), a = n(3300), s = function () {
            var e = (0, r.Z)(i().mark((function e() {
                return i().wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.abrupt("return", a("/course-player/api/v1/plans").then((function (e) {
                                return e.json()
                            })));
                        case 4:
                            return e.prev = 4, e.t0 = e.catch(0), e.abrupt("return", {plans: []});
                        case 7:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 4]])
            })));
            return function () {
                return e.apply(this, arguments)
            }
        }()
    }, 4193: function (e, t, n) {
        var r = n(1682);

        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach((function (t) {
                    r(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        var a = {keyboardShortcutsEnabled: !0}, s = function () {
            var e = localStorage.getItem("ps-cp-settings");
            return e ? JSON.parse(e) : a
        };
        e.exports = {
            getSettings: s, setSettings: function (e) {
                var t = i(i({}, s()), e);
                return localStorage.setItem("ps-cp-settings", JSON.stringify(t))
            }
        }
    }, 2841: function (e, t, n) {
       // "use strict";
        n.d(t, {
            Oo: function () {
                return o
            }, qZ: function () {
                return i
            }, Y1: function () {
                return a
            }
        });
        var r = null, o = function (e) {
            return r || (r = window.EmbeddablePlayer.render(e))
        }, i = function () {
            return r.getMetadata().currentTimeSeconds
        }, a = function (e) {
            return r.update({currentTime: e})
        }
    }, 466: function (e, t, n) {
       // "use strict";
        n.d(t, {
            L: function () {
                return c
            }, o: function () {
                return u
            }
        });
        var r = n(2809);

        function o(e, t) {
            var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function (e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                }(e)) || t && e && "number" === typeof e.length) {
                    n && (e = n);
                    var r = 0, o = function () {
                    };
                    return {
                        s: o, n: function () {
                            return r >= e.length ? {done: !0} : {done: !1, value: e[r++]}
                        }, e: function (e) {
                            throw e
                        }, f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a, s = !0, c = !1;
            return {
                s: function () {
                    n = n.call(e)
                }, n: function () {
                    var e = n.next();
                    return s = e.done, e
                }, e: function (e) {
                    c = !0, a = e
                }, f: function () {
                    try {
                        s || null == n.return || n.return()
                    } finally {
                        if (c) throw a
                    }
                }
            }
        }

        function i(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? a(Object(n), !0).forEach((function (t) {
                    (0, r.Z)(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        var c = function (e, t) {
            return t.modules.reduce((function (t, n, r) {
                return t || (n.contentItems.some((function (t) {
                    return t.id === e
                })) ? s(s({}, n), {}, {index: r}) : null)
            }), null)
        }, u = function (e, t) {
            var n, r = o(t.modules);
            try {
                for (r.s(); !(n = r.n()).done;) for (var i = n.value, a = 0; a < i.contentItems.length; a++) {
                    var c = i.contentItems[a];
                    if (e === c.id) return s(s({}, c), {}, {index: a})
                }
            } catch (u) {
                r.e(u)
            } finally {
                r.f()
            }
            return null
        }
    }, 6823: function (e, t, n) {
       // "use strict";

        function r(e) {
            e = Math.round(e || 0);
            var t = Math.floor(e / 60);
            return t + ":" + ("0" + (e - 60 * t)).substr(-2)
        }

        function o(e) {
            if (void 0 === e) return "";
            var t = Math.floor(e / 60), n = e % 60;
            return "".concat(t, "m ").concat(n, "s")
        }

        n.d(t, {
            Jd: function () {
                return o
            }, mr: function () {
                return r
            }, oW: function () {
                return i.o
            }, HW: function () {
                return l
            }, Xw: function () {
                return u
            }, LA: function () {
                return i.L
            }, GQ: function () {
                return d.GQ
            }, wE: function () {
                return f
            }
        });
        var i = n(466), a = n(318);

        function s(e, t) {
            var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function (e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return c(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
                }(e)) || t && e && "number" === typeof e.length) {
                    n && (e = n);
                    var r = 0, o = function () {
                    };
                    return {
                        s: o, n: function () {
                            return r >= e.length ? {done: !0} : {done: !1, value: e[r++]}
                        }, e: function (e) {
                            throw e
                        }, f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, a = !0, s = !1;
            return {
                s: function () {
                    n = n.call(e)
                }, n: function () {
                    var e = n.next();
                    return a = e.done, e
                }, e: function (e) {
                    s = !0, i = e
                }, f: function () {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (s) throw i
                    }
                }
            }
        }

        function c(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        var u = function (e, t) {
            var n, r = e.deprecatedCourseId, o = s(e.modules);
            try {
                for (o.s(); !(n = o.n()).done;) for (var i = n.value, c = 0; c < i.contentItems.length; c++) {
                    if (i.contentItems[c].id === t.id) {
                        var u = i.deprecatedModuleId.split("|"), l = (0, a.Z)(u, 2), d = l[0], f = l[1];
                        return "".concat(r, ":").concat(f, ":").concat(c, ":").concat(d)
                    }
                }
            } catch (p) {
                o.e(p)
            } finally {
                o.f()
            }
            return null
        }, l = function (e, t) {
            var n, r = t.split(":"), o = (0, a.Z)(r, 3), i = (o[0], o[1]), c = o[2], u = s(e.modules);
            try {
                for (u.s(); !(n = u.n()).done;) {
                    var l = n.value, d = l.deprecatedModuleId.split("|"), f = (0, a.Z)(d, 2);
                    f[0];
                    if (f[1] === i) {
                        var p = l.contentItems[c];
                        return p && p.id
                    }
                }
            } catch (m) {
                u.e(m)
            } finally {
                u.f()
            }
        }, d = n(1127), f = function (e, t) {
            return e.every((function (e) {
                return e === t
            }))
        }
    }, 7541: function (e, t, n) {
       // "use strict";
        n.d(t, {
            $: function () {
                return o
            }
        });
        var r = n(466), o = function (e) {
            return function (t, n) {
                var o = (0, r.L)(t.clipId, e), i = o && o.index ? o.index : -1, a = (0, r.L)(n.clipId, e),
                    s = a && a.index ? a.index : -1;
                if (i !== s) return i - s;
                var c = (0, r.o)(t.clipId, e), u = c && c.index ? c.index : -1, l = (0, r.o)(n.clipId, e),
                    d = l && l.index ? l.index : -1;
                if (u !== d) return u - d;
                var f = t.timeInClip || -1, p = n.timeInClip || -1;
                return f !== p ? f - p : t.created - n.created
            }
        }
    }, 1127: function (e, t, n) {
       // "use strict";
        n.d(t, {
            GQ: function () {
                return i
            }, dA: function () {
                return a
            }, dT: function () {
                return s
            }, $A: function () {
                return u
            }, R5: function () {
                return l
            }, sA: function () {
                return d
            }
        });
        var r = n(3789), o = n(1163), i = function (e, t) {
            return null === c(e.id, t, 1)
        }, a = function (e, t) {
            return null === c(e.id, t, -1)
        }, s = function (e, t) {
            var n = t && t.modules.filter((function (t) {
                return t.contentItems.some((function (t) {
                    return t.id === e.id
                }))
            }))[0];
            return n.contentItems[n.contentItems.length - 1].id === e.id
        }, c = function (e, t, n) {
            var o = t.modules.map((function (e) {
                return e.contentItems
            })).reduce((function (e, t) {
                return [].concat((0, r.Z)(e), (0, r.Z)(t))
            }), []), i = o.findIndex((function (t) {
                return t.id === e
            }));
            return o[i + n] || null
        }, u = function (e, t) {
            return c(e, t, 1)
        }, l = function (e, t) {
            return c(e, t, -1)
        }, d = function (e) {
            o.default.push("/course-player?clipId=".concat(e), void 0, {shallow: !0})
        }
    }, 1246: function (e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/course-player", function () {
            return n(2133)
        }])
    }, 9802: function (e) {
        e.exports = {
            "anonymous-notes__message": "anonymous-notes_anonymous-notes__message__31Y-t",
            "anonymous-notes__message-text": "anonymous-notes_anonymous-notes__message-text__1PkZ6"
        }
    }, 7894: function (e) {
        e.exports = {
            "content-item": "content-item_content-item__66EcK",
            "is-completed": "content-item_is-completed__2hWxz",
            "is-using-keyboard": "content-item_is-using-keyboard__1blab",
            "is-current": "content-item_is-current__1qJV9",
            "content-item-body": "content-item_content-item-body__cy0Oe",
            "content-item-title": "content-item_content-item-title__wpEUo",
            "content-item-duration": "content-item_content-item-duration__3fx2J",
            "circle-thing-container": "content-item_circle-thing-container__36tri",
            "line-thing": "content-item_line-thing__v-nUt",
            "circle-thing": "content-item_circle-thing__2hrgL",
            "circle-thing__icon": "content-item_circle-thing__icon__2IzFT"
        }
    }, 5814: function (e) {
        e.exports = {
            "content-link": "content-link_content-link__2dcVr",
            "content-link__title": "content-link_content-link__title__2Zp11",
            "content-link__description": "content-link_content-link__description__1bKKM",
            "content-link__btn": "content-link_content-link__btn__1vOUJ",
            "content-link__logo": "content-link_content-link__logo__3_jlz",
            "content-link__logo-subhead": "content-link_content-link__logo-subhead__nI-Xw",
            "content-link__footer": "content-link_content-link__footer__3Ajs6"
        }
    }, 5996: function (e) {
        e.exports = {
            "course-player": "course-player-layout_course-player__14gjT",
            "has-collapsed-nav": "course-player-layout_has-collapsed-nav__iP8LV",
            "course-player__player": "course-player-layout_course-player__player__ibkqI",
            "course-player__nav": "course-player-layout_course-player__nav__2feK9",
            "course-player__nav-content": "course-player-layout_course-player__nav-content__zvNTw",
            "course-title": "course-player-layout_course-title__qNy98",
            "nav-toggle-btn": "course-player-layout_nav-toggle-btn__1i04j"
        }
    }, 847: function (e) {
        e.exports = {
            "course-title": "course-title_course-title__35OVB",
            "course-title__title": "course-title_course-title__title__nI0ZU",
            "course-title__subtitle": "course-title_course-title__subtitle__3VPmw",
            "course-title__link": "course-title_course-title__link__1ExwT",
            app__player: "course-title_app__player__144dR"
        }
    }, 7706: function (e) {
        e.exports = {
            "disable-shortcuts-banner": "disable-shortcuts-banner_disable-shortcuts-banner__2h9Kb",
            "has-collapsed-nav": "disable-shortcuts-banner_has-collapsed-nav__aBxg3",
            slideDown: "disable-shortcuts-banner_slideDown__2vUPn"
        }
    }, 7150: function (e) {
        e.exports = {"fade-out-wrapper": "fade-out_fade-out-wrapper__27o3B", "is-hidden": "fade-out_is-hidden__1zL8f"}
    }, 5064: function (e) {
        e.exports = {
            "feedback-callout": "feedback-callout_feedback-callout__1hotS",
            "feedback-callout--old": "feedback-callout_feedback-callout--old__103Vj",
            "feedback-callout__link": "feedback-callout_feedback-callout__link__B8JTc",
            "feedback-callout__text": "feedback-callout_feedback-callout__text__1rijC",
            "feedback-callout--new__text": "feedback-callout_feedback-callout--new__text__1iXSw",
            "feedback-callout__header": "feedback-callout_feedback-callout__header__3XVNe",
            "feedback-callout__heading": "feedback-callout_feedback-callout__heading__AUTEk"
        }
    }, 4608: function (e) {
        e.exports = {"feedback-callout__svg": "feedback-svg_feedback-callout__svg__18kse"}
    }, 8120: function (e) {
        e.exports = {
            "freemium-cta": "freemium-cta_freemium-cta__DCKQv",
            "freemium-cta__content": "freemium-cta_freemium-cta__content__3JaJH",
            "freemium-cta__buttons": "freemium-cta_freemium-cta__buttons__1um72",
            "u-full-width": "freemium-cta_u-full-width__2gjOh",
            "u-margin-sm": "freemium-cta_u-margin-sm__273DE",
            "u-justify-content-center": "freemium-cta_u-justify-content-center__3k2f-",
            "u-flex@sm": "freemium-cta_u-flex__sm__OQe_7",
            "u-order-2@sm": "freemium-cta_u-order-2__sm__21wfJ",
            "u-auto-width@sm": "freemium-cta_u-auto-width__sm__1p6vk"
        }
    }, 8341: function (e) {
        e.exports = {
            "mobile-carousel-container": "mobile-carousel_mobile-carousel-container__2wOPI",
            "mobile-carousel-content": "mobile-carousel_mobile-carousel-content__3fvUs",
            "mobile-pagination-wrapper": "mobile-carousel_mobile-pagination-wrapper__1WBVA"
        }
    }, 625: function (e) {
        e.exports = {
            "module-completed-modal-container--mobile": "module-completed-modal-container_module-completed-modal-container--mobile__2Uxgp",
            "module-completed-modal-container--desktop": "module-completed-modal-container_module-completed-modal-container--desktop__2Eiaf",
            "module-completed-modal-container__footer": "module-completed-modal-container_module-completed-modal-container__footer__3EaGe"
        }
    }, 6306: function (e) {
        e.exports = {
            "module-completed-modal__vr": "module-completed-modal_module-completed-modal__vr__3TDBK",
            "module-completed-modal__content": "module-completed-modal_module-completed-modal__content__Px9Aj",
            "module-completed-modal__col": "module-completed-modal_module-completed-modal__col__1Z3ul"
        }
    }, 4503: function (e) {
        e.exports = {
            "module-progress": "module-progress_module-progress__1WXie",
            "module-progress__background": "module-progress_module-progress__background__D1c2W",
            "module-progress__text": "module-progress_module-progress__text__28Ybf",
            "is-in-progress": "module-progress_is-in-progress__1EjCp",
            "module-progress__progress": "module-progress_module-progress__progress__32OzO",
            "is-completed": "module-progress_is-completed__2-lFS",
            "is-current-module": "module-progress_is-current-module__254Dg"
        }
    }, 9368: function (e) {
        e.exports = {
            module: "module_module__zEHv-",
            "module-header__title": "module_module-header__title__2LWNR",
            "module-progress-container": "module_module-progress-container__2mkEn",
            "module-clock-icon": "module_module-clock-icon__3BQEV",
            "is-current-module": "module_is-current-module__pPqNx"
        }
    }, 9047: function (e) {
        e.exports = {
            "nav-toggle-btn-container": "nav-toggle-btn_nav-toggle-btn-container__23uPw",
            "nav-toggle-btn": "nav-toggle-btn_nav-toggle-btn__2jAS_",
            "nav-toggle-btn__svg": "nav-toggle-btn_nav-toggle-btn__svg__3I6KQ",
            app__player: "nav-toggle-btn_app__player__10SBh",
            "tooltip-container": "nav-toggle-btn_tooltip-container__2toyU"
        }
    }, 4928: function (e) {
        e.exports = {
            navigation: "navigation_navigation__2J_RQ",
            "navigation-header": "navigation_navigation-header__UlGsT",
            "navigation-content": "navigation_navigation-content__2KXo_",
            "navigation_tab-panel": "navigation_navigation_tab-panel__y67W9",
            "navigation-tabs__item": "navigation_navigation-tabs__item__rpMZt"
        }
    }, 6524: function (e) {
        e.exports = {
            "notes-message": "no-notes_notes-message__1Caoy",
            "notes-message__text": "no-notes_notes-message__text__3MrOa"
        }
    }, 2731: function (e) {
        e.exports = {
            "note-deleted-prompt": "note-deleted-prompt_note-deleted-prompt__zC3UU",
            "note-link-btn": "note-deleted-prompt_note-link-btn__66u2N"
        }
    }, 9181: function (e) {
        e.exports = {
            "notes-textarea-wrapper": "note-editor_notes-textarea-wrapper__3xHp4",
            "notes-container": "note-editor_notes-container__2cFsj",
            "notes-textarea": "note-editor_notes-textarea__A9WIT",
            "has-error": "note-editor_has-error__2jE5Q",
            "notes-textarea__time": "note-editor_notes-textarea__time__2POGX",
            "notes-toggle-enter": "note-editor_notes-toggle-enter__3988b",
            "notes-validation-msg": "note-editor_notes-validation-msg__nrHzD",
            "note-link-btn": "note-editor_note-link-btn__1rSH2"
        }
    }, 8165: function (e) {
        e.exports = {
            note: "note_note__3_oFv",
            "notes-container": "note_notes-container__3TLTo",
            "is-active": "note_is-active__1lYla",
            "highlight-fade-out": "note_highlight-fade-out__32X-Z",
            "is-new": "note_is-new__3liRg",
            fadeInUp: "note_fadeInUp__3-QDF",
            note__text: "note_note__text__2xNSw",
            note__meta: "note_note__meta__3U3pa",
            note__meta__controls: "note_note__meta__controls__VpSS3",
            "note-link-btn": "note_note-link-btn__1xJu1"
        }
    }, 2967: function (e) {
        e.exports = {
            notes: "notes_notes__QZ9NC",
            notes__main: "notes_notes__main__1wwUi",
            "notes__add-note": "notes_notes__add-note__14Jjk",
            "notes-container": "notes_notes-container__2DU-g",
            "notes-list": "notes_notes-list__oBXWN",
            "notes-menu": "notes_notes-menu__r6pKu",
            "notes-menu__link": "notes_notes-menu__link__3cNG2",
            "notes-toggle-enter": "notes_notes-toggle-enter__1mHW7",
            "note-link-btn": "notes_note-link-btn__2pIqB"
        }
    }, 2930: function (e) {
        e.exports = {
            "overflow-accordion__toggle-button": "overflow-accordion_overflow-accordion__toggle-button__2atmI",
            "overflow-accordion__overflow": "overflow-accordion_overflow-accordion__overflow__Z9-ud",
            "is-open": "overflow-accordion_is-open__TB-Tq",
            "overflow-accordion__link": "overflow-accordion_overflow-accordion__link__2OPY-"
        }
    }, 7268: function (e) {
        e.exports = {
            "pagination-dot": "pagination-dots_pagination-dot__13Y8b",
            "is-active": "pagination-dots_is-active__2Z9Ko"
        }
    }, 5929: function (e) {
        e.exports = {
            "player-modal-overlay": "player-modal_player-modal-overlay__3wu-5",
            "is-active": "player-modal_is-active__3hJNJ",
            "player-modal": "player-modal_player-modal__2lNcj",
            "player-modal-fade": "player-modal_player-modal-fade__2V0aD",
            "player-modal__close-btn": "player-modal_player-modal__close-btn__2Yp32"
        }
    }, 4124: function (e) {
        e.exports = {"player-wrapper": "player-wrapper_player-wrapper__3xujW"}
    }, 2106: function () {
    }, 4126: function (e) {
        e.exports = {
            "upcoming-badge": "upcoming-badges_upcoming-badge__cLF7O",
            "upcoming-badge__progress": "upcoming-badges_upcoming-badge__progress__3XnTF",
            "upcoming-badge__slider": "upcoming-badges_upcoming-badge__slider__2Gmy1",
            "upcoming-badge__icon": "upcoming-badges_upcoming-badge__icon__m_dQ-",
            "upcoming-badge__title": "upcoming-badges_upcoming-badge__title__2dH8e",
            "upcoming-badge__description": "upcoming-badges_upcoming-badge__description__1dkqA"
        }
    }, 3456: function (e) {
        e.exports = {
            "user-badges-container": "user-badges_user-badges-container__2B56b",
            "user-badges-list": "user-badges_user-badges-list__ab5J9",
            "user-badges-window": "user-badges_user-badges-window__2xpne",
            "user-badge": "user-badges_user-badge__3rvcw",
            "user-badges-pagination": "user-badges_user-badges-pagination__1ChzN",
            "user-badges-pagination__arrow-container": "user-badges_user-badges-pagination__arrow-container__2am4g",
            "user-badges-trophy-link": "user-badges_user-badges-trophy-link__18p4G",
            "user-badges-pagination__arrow": "user-badges_user-badges-pagination__arrow__27N3c",
            "user-badge__description": "user-badges_user-badge__description__2DEPZ"
        }
    }, 6647: function () {
    }, 2868: function () {
    }, 5574: function () {
    }, 4777: function () {
    }, 9830: function () {
    }, 4147: function (e) {
       // "use strict";
        e.exports = JSON.parse('{"name":"client","version":"1.0.1","description":"","main":"index.js","scripts":{"build":"next build","start":"./startup.sh","test":"jest --forceExit","test-server":"jest server.spec.js --forceExit","test:watch":"jest --watch","test:coverage":"jest --coverage","lint":"npx eslint src/**/*.js src/**/**/*.js"},"keywords":[],"author":"","license":"ISC","dependencies":{"@babel/core":"^7.6.4","@pluralsight/ps-csp-node":"1.10.1","@pluralsight/ps-design-system-banner":"^9","@pluralsight/ps-design-system-button":"^21.0.6","@pluralsight/ps-design-system-carousel":"^13","@pluralsight/ps-design-system-core":"^8","@pluralsight/ps-design-system-drawer":"^7.1.0","@pluralsight/ps-design-system-errors":"^11","@pluralsight/ps-design-system-icon":"^23","@pluralsight/ps-design-system-linearprogress":"^9","@pluralsight/ps-design-system-link":"^12","@pluralsight/ps-design-system-normalize":"^5","@pluralsight/ps-design-system-switch":"^8","@pluralsight/ps-design-system-tab":"^17","@pluralsight/ps-design-system-textarea":"^9","@pluralsight/ps-design-system-theme":"^7","@pluralsight/ps-design-system-tooltip":"^7","@pluralsight/ps-koa-healthcheck":"^3.0.4","@pluralsight/ps-logging-node":"^3.2.1","@pluralsight/ps-web-logging":"^0.3.1","@pluralsight/videoservices-new-relic":"^3.0.2","classnames":"^2.3.1","core-js":"^3.2.1","dnscache":"^1.0.2","dotenv":"^6.0.0","eslint-config-react-app":"^5.2.1","glamor":"^2.20.40","history":"^4.9.0","ip":"^1.1.5","jsonwebtoken":"^8.5.1","koa":"^2.7.0","koa-mount":"^4.0.0","koa-router":"^10.0.0","koa-static":"^5.0.0","koa2-useragent":"^0.3.2","launchdarkly-node-server-sdk":"^5.13.3","load-script":"^1.0.0","marked":"^4.0.10","next":"^11.1.0","next-images":"^1.1.2","node-fetch":"^2.6.0","path-browserify":"^1.0.1","ramda":"^0.27.0","react":"^17.0.2","react-autosize-textarea":"^7.1.0","react-dom":"^17.0.2","resolve":"1.10.0","sanitize-html":"^2.3.2","scroll-into-view-if-needed":"^2.2.20","twitter-text":"3.0.1","uuid":"^3.3.2","webpack":"^5","whatwg-fetch":"^3.0.0"},"devDependencies":{"babel-eslint":"^10.1.0","babel-loader":"^8.2.2","eslint":"^7.32.0","eslint-loader":"^4.0.0","eslint-plugin-flowtype":"^4.7.0","eslint-plugin-import":"^2.20.2","eslint-plugin-jest":"^23.8.2","eslint-plugin-jsx-a11y":"^6.2.3","eslint-plugin-mocha":"^6.3.0","eslint-plugin-prettier":"^4.0.0","eslint-plugin-react":"^7.19.0","eslint-plugin-react-hooks":"^3.0.0","eslint-plugin-unused-imports":"^1.1.4","jest":"^27.2.1","jest-pnp-resolver":"^1.2.2","jest-resolve":"^26.6.2","jest-watch-typeahead":"^0.6.1","nodemon":"^2.0.7","prettier":"^2.4.1","supertest":"^4.0.2"},"resolutions":{"ansi-regex":"^5.0.1","browserslist":"^4.16.5","css-what":"^5.0.1","glob-parent":"^5.1.2","immer":"^9.0.6","node-fetch":"^2.6.7","nth-check":"^2","postcss":"8.2.13","trim":"^0.0.3","url-parse":"^1.5.2"},"buildVersion":"2022.04.14.500"}')
    }
}, function (e) {
    e.O(0, [774, 664, 467, 888, 179], (function () {
        return t = 1246, e(e.s = t);
        var t
    }));
    var t = e.O();
    _N_E = t
}]);