(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{0:function(t,n,e){e("GcxT"),t.exports=e("nOHt")},"1TCz":function(t,n,e){"use strict";e.r(n);var r=e("o0o1"),o=e.n(r),a=e("1OyB"),c=e("vuIU"),u=e("Ji7U"),i=e("md7G"),f=e("foSv"),s=e("8Bbg"),l=e.n(s),p=e("q1tI"),v=e.n(p),d=e("/MKj"),h=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(n,e)};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),y=function(){return(y=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)},g=function(t,n,e,r){return new(e||(e=Promise))((function(o,a){function c(t){try{i(r.next(t))}catch(n){a(n)}}function u(t){try{i(r.throw(t))}catch(n){a(n)}}function i(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(c,u)}i((r=r.apply(t,n||[])).next())}))},b=function(t,n){var e,r,o,a,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(e)throw new TypeError("Generator is already executing.");for(;c;)try{if(e=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,r=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){c=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){c.label=a[1];break}if(6===a[0]&&c.label<o[1]){c.label=o[1],o=a;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(a);break}o[2]&&c.ops.pop(),c.trys.pop();continue}a=n.call(t,c)}catch(u){a=[6,u],r=0}finally{e=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},m=function(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(e[r[o]]=t[r[o]])}return e},w={storeKey:"__NEXT_REDUX_STORE__",debug:!1,serializeState:function(t){return t},deserializeState:function(t){return t}},O=function(t){return"@@redux-saga/"+t},S=O("CANCEL_PROMISE"),x=O("CHANNEL_END"),E=O("IO"),j=O("MATCH"),P=O("MULTICAST"),A=O("SAGA_ACTION"),k=O("SELF_CANCELLATION"),T=O("TASK"),C=O("TASK_CANCEL"),_=O("TERMINATE"),R=O("LOCATION"),I=e("wx14"),N=e("zLVn"),L=function(t){return null===t||void 0===t},D=function(t){return null!==t&&void 0!==t},M=function(t){return"function"===typeof t},U=function(t){return"string"===typeof t},q=Array.isArray,K=function(t){return t&&M(t.then)},B=function(t){return t&&M(t.next)&&M(t.throw)},G=function t(n){return n&&(U(n)||X(n)||M(n)||q(n)&&n.every(t))},z=function(t){return t&&M(t.take)&&M(t.close)},H=function(t){return M(t)&&t.hasOwnProperty("toString")},X=function(t){return Boolean(t)&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype},J=function(t){return z(t)&&t[P]};var F=function(t,n){var e;void 0===n&&(n=!0);var r=new Promise((function(r){e=setTimeout(r,t,n)}));return r[S]=function(){clearTimeout(e)},r},W=function(t){return function(){return t}}(!0),V=function(){};var Z=function(t){return t};"function"===typeof Symbol&&Symbol.asyncIterator&&Symbol.asyncIterator;var $=function(t,n){Object(I.a)(t,n),Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(n).forEach((function(e){t[e]=n[e]}))},Q=function(t,n){var e;return(e=[]).concat.apply(e,n.map(t))};function Y(t,n){var e=t.indexOf(n);e>=0&&t.splice(e,1)}function tt(t){var n=!1;return function(){n||(n=!0,t())}}var nt=function(t){throw t},et=function(t){return{value:t,done:!0}};function rt(t,n,e){void 0===n&&(n=nt),void 0===e&&(e="iterator");var r={meta:{name:e},next:t,throw:n,return:et,isSagaIterator:!0};return"undefined"!==typeof Symbol&&(r[Symbol.iterator]=function(){return r}),r}function ot(t,n){var e=n.sagaStack;console.error(t),console.error(e)}var at=function(t){return Array.apply(null,new Array(t))},ct=function(t){return function(n){return t(Object.defineProperty(n,A,{value:!0}))}},ut=function(t){return t===_},it=function(t){return t===C},ft=function(t){return ut(t)||it(t)};function st(t,n){var e=Object.keys(t),r=e.length;var o,a=0,c=q(t)?at(r):{},u={};return e.forEach((function(t){var e=function(e,u){o||(u||ft(e)?(n.cancel(),n(e,u)):(c[t]=e,++a===r&&(o=!0,n(c))))};e.cancel=V,u[t]=e})),n.cancel=function(){o||(o=!0,e.forEach((function(t){return u[t].cancel()})))},u}function lt(t){return{name:t.name||"anonymous",location:pt(t)}}function pt(t){return t[R]}var vt="Channel's Buffer overflow!",dt=1,ht=3,yt=4;function gt(t,n){void 0===t&&(t=10);var e=new Array(t),r=0,o=0,a=0,c=function(n){e[o]=n,o=(o+1)%t,r++},u=function(){if(0!=r){var n=e[a];return e[a]=null,r--,a=(a+1)%t,n}},i=function(){for(var t=[];r;)t.push(u());return t};return{isEmpty:function(){return 0==r},put:function(u){var f;if(r<t)c(u);else switch(n){case dt:throw new Error(vt);case ht:e[o]=u,a=o=(o+1)%t;break;case yt:f=2*t,e=i(),r=e.length,o=e.length,a=0,e.length=f,t=f,c(u)}},take:u,flush:i}}var bt=function(t){return gt(t,yt)},mt="TAKE",wt="PUT",Ot="ALL",St="RACE",xt="CALL",Et="CPS",jt="FORK",Pt="JOIN",At="CANCEL",kt="SELECT",Tt="ACTION_CHANNEL",Ct="CANCELLED",_t="FLUSH",Rt="GET_CONTEXT",It="SET_CONTEXT",Nt=function(t,n){var e;return(e={})[E]=!0,e.combinator=!1,e.type=t,e.payload=n,e};function Lt(t,n){return void 0===t&&(t="*"),G(t)?Nt(mt,{pattern:t}):J(t)&&D(n)&&G(n)?Nt(mt,{channel:t,pattern:n}):z(t)?Nt(mt,{channel:t}):void 0}function Dt(t,n){return L(n)&&(n=t,t=void 0),Nt(wt,{channel:t,action:n})}function Mt(t){var n=Nt(Ot,t);return n.combinator=!0,n}function Ut(t,n){var e,r=null;return M(t)?e=t:(q(t)?(r=t[0],e=t[1]):(r=t.context,e=t.fn),r&&U(e)&&M(r[e])&&(e=r[e])),{context:r,fn:e,args:n}}function qt(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];return Nt(xt,Ut(t,e))}function Kt(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];return Nt(jt,Ut(t,e))}var Bt=qt.bind(null,F),Gt=e("ANjH");function zt(){var t={};return t.promise=new Promise((function(n,e){t.resolve=n,t.reject=e})),t}var Ht=zt,Xt=[],Jt=0;function Ft(t){try{Zt(),t()}finally{$t()}}function Wt(t){Xt.push(t),Jt||(Zt(),Qt())}function Vt(t){try{return Zt(),t()}finally{Qt()}}function Zt(){Jt++}function $t(){Jt--}function Qt(){var t;for($t();!Jt&&void 0!==(t=Xt.shift());)Ft(t)}var Yt=function(t){return function(n){return t.some((function(t){return on(t)(n)}))}},tn=function(t){return function(n){return t(n)}},nn=function(t){return function(n){return n.type===String(t)}},en=function(t){return function(n){return n.type===t}},rn=function(){return W};function on(t){var n="*"===t?rn:U(t)?nn:q(t)?Yt:H(t)?nn:M(t)?tn:X(t)?en:null;if(null===n)throw new Error("invalid pattern: "+t);return n(t)}var an={type:x},cn=function(t){return t&&t.type===x};function un(t){void 0===t&&(t=bt());var n=!1,e=[];return{take:function(r){n&&t.isEmpty()?r(an):t.isEmpty()?(e.push(r),r.cancel=function(){Y(e,r)}):r(t.take())},put:function(r){if(!n){if(0===e.length)return t.put(r);e.shift()(r)}},flush:function(e){n&&t.isEmpty()?e(an):e(t.flush())},close:function(){if(!n){n=!0;var t=e;e=[];for(var r=0,o=t.length;r<o;r++){(0,t[r])(an)}}}}}function fn(){var t=function(){var t,n=!1,e=[],r=e,o=function(){r===e&&(r=e.slice())},a=function(){n=!0;var t=e=r;r=[],t.forEach((function(t){t(an)}))};return(t={})[P]=!0,t.put=function(t){if(!n)if(cn(t))a();else for(var o=e=r,c=0,u=o.length;c<u;c++){var i=o[c];i[j](t)&&(i.cancel(),i(t))}},t.take=function(t,e){void 0===e&&(e=rn),n?t(an):(t[j]=e,o(),r.push(t),t.cancel=tt((function(){o(),Y(r,t)})))},t.close=a,t}(),n=t.put;return t.put=function(t){t[A]?n(t):Wt((function(){n(t)}))},t}var sn=0,ln=1,pn=2,vn=3;function dn(t,n){var e=t[S];M(e)&&(n.cancel=e),t.then(n,(function(t){n(t,!0)}))}var hn,yn=0,gn=function(){return++yn};function bn(t){t.isRunning()&&t.cancel()}var mn=((hn={})[mt]=function(t,n,e){var r=n.channel,o=void 0===r?t.channel:r,a=n.pattern,c=n.maybe,u=function(t){t instanceof Error?e(t,!0):!cn(t)||c?e(t):e(_)};try{o.take(u,D(a)?on(a):null)}catch(i){return void e(i,!0)}e.cancel=u.cancel},hn[wt]=function(t,n,e){var r=n.channel,o=n.action,a=n.resolve;Wt((function(){var n;try{n=(r?r.put:t.dispatch)(o)}catch(c){return void e(c,!0)}a&&K(n)?dn(n,e):e(n)}))},hn[Ot]=function(t,n,e,r){var o=r.digestEffect,a=yn,c=Object.keys(n);if(0!==c.length){var u=st(n,e);c.forEach((function(t){o(n[t],a,u[t],t)}))}else e(q(n)?[]:{})},hn[St]=function(t,n,e,r){var o=r.digestEffect,a=yn,c=Object.keys(n),u=q(n)?at(c.length):{},i={},f=!1;c.forEach((function(t){var n=function(n,r){f||(r||ft(n)?(e.cancel(),e(n,r)):(e.cancel(),f=!0,u[t]=n,e(u)))};n.cancel=V,i[t]=n})),e.cancel=function(){f||(f=!0,c.forEach((function(t){return i[t].cancel()})))},c.forEach((function(t){f||o(n[t],a,i[t],t)}))},hn[xt]=function(t,n,e,r){var o=n.context,a=n.fn,c=n.args,u=r.task;try{var i=a.apply(o,c);if(K(i))return void dn(i,e);if(B(i))return void Cn(t,i,u.context,yn,lt(a),!1,e);e(i)}catch(f){e(f,!0)}},hn[Et]=function(t,n,e){var r=n.context,o=n.fn,a=n.args;try{var c=function(t,n){L(t)?e(n):e(t,!0)};o.apply(r,a.concat(c)),c.cancel&&(e.cancel=c.cancel)}catch(u){e(u,!0)}},hn[jt]=function(t,n,e,r){var o=n.context,a=n.fn,c=n.args,u=n.detached,i=r.task,f=function(t){var n=t.context,e=t.fn,r=t.args;try{var o=e.apply(n,r);if(B(o))return o;var a=!1;return rt((function(t){return a?{value:t,done:!0}:(a=!0,{value:o,done:!K(o)})}))}catch(c){return rt((function(){throw c}))}}({context:o,fn:a,args:c}),s=function(t,n){return t.isSagaIterator?{name:t.meta.name}:lt(n)}(f,a);Vt((function(){var n=Cn(t,f,i.context,yn,s,u,void 0);u?e(n):n.isRunning()?(i.queue.addTask(n),e(n)):n.isAborted()?i.queue.abort(n.error()):e(n)}))},hn[Pt]=function(t,n,e,r){var o=r.task,a=function(t,n){if(t.isRunning()){var e={task:o,cb:n};n.cancel=function(){t.isRunning()&&Y(t.joiners,e)},t.joiners.push(e)}else t.isAborted()?n(t.error(),!0):n(t.result())};if(q(n)){if(0===n.length)return void e([]);var c=st(n,e);n.forEach((function(t,n){a(t,c[n])}))}else a(n,e)},hn[At]=function(t,n,e,r){var o=r.task;n===k?bn(o):q(n)?n.forEach(bn):bn(n),e()},hn[kt]=function(t,n,e){var r=n.selector,o=n.args;try{e(r.apply(void 0,[t.getState()].concat(o)))}catch(a){e(a,!0)}},hn[Tt]=function(t,n,e){var r=n.pattern,o=un(n.buffer),a=on(r),c=function n(e){cn(e)||t.channel.take(n,a),o.put(e)},u=o.close;o.close=function(){c.cancel(),u()},t.channel.take(c,a),e(o)},hn[Ct]=function(t,n,e,r){e(r.task.isCancelled())},hn[_t]=function(t,n,e){n.flush(e)},hn[Rt]=function(t,n,e,r){e(r.task.context[n])},hn[It]=function(t,n,e,r){var o=r.task;$(o.context,n),e()},hn);function wn(t,n){return t+"?"+n}function On(t){var n=t.name,e=t.location;return e?n+"  "+wn(e.fileName,e.lineNumber):n}function Sn(t){var n=Q((function(t){return t.cancelledTasks}),t);return n.length?["Tasks cancelled due to error:"].concat(n).join("\n"):""}var xn=null,En=[],jn=function(t){t.crashedEffect=xn,En.push(t)},Pn=function(){xn=null,En.length=0},An=function(t){xn=t},kn=function(){var t=En[0],n=En.slice(1),e=t.crashedEffect?function(t){var n=pt(t);return n?n.code+"  "+wn(n.fileName,n.lineNumber):""}(t.crashedEffect):null;return["The above error occurred in task "+On(t.meta)+(e?" \n when executing effect "+e:"")].concat(n.map((function(t){return"    created by "+On(t.meta)})),[Sn(En)]).join("\n")};function Tn(t,n,e,r,o,a,c){var u;void 0===c&&(c=V);var i,f,s=sn,l=null,p=[],v=Object.create(e),d=function(t,n,e){var r,o=[],a=!1;function c(t){n(),i(),e(t,!0)}function u(n){o.push(n),n.cont=function(u,i){a||(Y(o,n),n.cont=V,i?c(u):(n===t&&(r=u),o.length||(a=!0,e(r))))}}function i(){a||(a=!0,o.forEach((function(t){t.cont=V,t.cancel()})),o=[])}return u(t),{addTask:u,cancelAll:i,abort:c,getTasks:function(){return o}}}(n,(function(){p.push.apply(p,d.getTasks().map((function(t){return t.meta.name})))}),h);function h(n,e){if(e){if(s=pn,jn({meta:o,cancelledTasks:p}),y.isRoot){var r=kn();Pn(),t.onError(n,{sagaStack:r})}f=n,l&&l.reject(n)}else n===C?s=ln:s!==ln&&(s=vn),i=n,l&&l.resolve(n);y.cont(n,e),y.joiners.forEach((function(t){t.cb(n,e)})),y.joiners=null}var y=((u={})[T]=!0,u.id=r,u.meta=o,u.isRoot=a,u.context=v,u.joiners=[],u.queue=d,u.cancel=function(){s===sn&&(s=ln,d.cancelAll(),h(C,!1))},u.cont=c,u.end=h,u.setContext=function(t){$(v,t)},u.toPromise=function(){return l?l.promise:(l=Ht(),s===pn?l.reject(f):s!==sn&&l.resolve(i),l.promise)},u.isRunning=function(){return s===sn},u.isCancelled=function(){return s===ln||s===sn&&n.status===ln},u.isAborted=function(){return s===pn},u.result=function(){return i},u.error=function(){return f},u);return y}function Cn(t,n,e,r,o,a,c){var u=t.finalizeRunEffect((function(n,e,r){if(K(n))dn(n,r);else if(B(n))Cn(t,n,f.context,e,o,!1,r);else if(n&&n[E]){(0,mn[n.type])(t,n.payload,r,s)}else r(n)}));l.cancel=V;var i={meta:o,cancel:function(){i.status===sn&&(i.status=ln,l(C))},status:sn},f=Tn(t,i,e,r,o,a,c),s={task:f,digestEffect:p};return c&&(c.cancel=f.cancel),l(),f;function l(t,e){try{var o;e?(o=n.throw(t),Pn()):it(t)?(i.status=ln,l.cancel(),o=M(n.return)?n.return(C):{done:!0,value:C}):o=ut(t)?M(n.return)?n.return():{done:!0}:n.next(t),o.done?(i.status!==ln&&(i.status=vn),i.cont(o.value)):p(o.value,r,l)}catch(a){if(i.status===ln)throw a;i.status=pn,i.cont(a,!0)}}function p(n,e,r,o){void 0===o&&(o="");var a,c=gn();function i(e,o){a||(a=!0,r.cancel=V,t.sagaMonitor&&(o?t.sagaMonitor.effectRejected(c,e):t.sagaMonitor.effectResolved(c,e)),o&&An(n),r(e,o))}t.sagaMonitor&&t.sagaMonitor.effectTriggered({effectId:c,parentEffectId:e,label:o,effect:n}),i.cancel=V,r.cancel=function(){a||(a=!0,i.cancel(),i.cancel=V,t.sagaMonitor&&t.sagaMonitor.effectCancelled(c))},u(n,c,i)}}function _n(t,n){var e=t.channel,r=void 0===e?fn():e,o=t.dispatch,a=t.getState,c=t.context,u=void 0===c?{}:c,i=t.sagaMonitor,f=t.effectMiddlewares,s=t.onError,l=void 0===s?ot:s;for(var p=arguments.length,v=new Array(p>2?p-2:0),d=2;d<p;d++)v[d-2]=arguments[d];var h=n.apply(void 0,v);var y,g=gn();if(i&&(i.rootSagaStarted=i.rootSagaStarted||V,i.effectTriggered=i.effectTriggered||V,i.effectResolved=i.effectResolved||V,i.effectRejected=i.effectRejected||V,i.effectCancelled=i.effectCancelled||V,i.actionDispatched=i.actionDispatched||V,i.rootSagaStarted({effectId:g,saga:n,args:v})),f){var b=Gt.d.apply(void 0,f);y=function(t){return function(n,e,r){return b((function(n){return t(n,e,r)}))(n)}}}else y=Z;var m={channel:r,dispatch:ct(o),getState:a,sagaMonitor:i,onError:l,finalizeRunEffect:y};return Vt((function(){var t=Cn(m,h,u,g,lt(n),!0,void 0);return i&&i.effectResolved(g,t),t}))}var Rn=function(t){var n,e=void 0===t?{}:t,r=e.context,o=void 0===r?{}:r,a=e.channel,c=void 0===a?fn():a,u=e.sagaMonitor,i=Object(N.a)(e,["context","channel","sagaMonitor"]);function f(t){var e=t.getState,r=t.dispatch;return n=_n.bind(null,Object(I.a)({},i,{context:o,channel:c,dispatch:r,getState:e,sagaMonitor:u})),function(t){return function(n){u&&u.actionDispatched&&u.actionDispatched(n);var e=t(n);return c.put(n),e}}}return f.run=function(){return n.apply(void 0,arguments)},f.setContext=function(t){$(o,t)},f};function In(t,n,e,r,o,a,c){try{var u=t[a](c),i=u.value}catch(f){return void e(f)}u.done?n(i):Promise.resolve(i).then(r,o)}function Nn(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Ln(t){return(Ln=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Dn(t,n){return(Dn=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function Mn(t,n){return!n||"object"!==typeof n&&"function"!==typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}var Un=function(t){var n,e,r,a=function(n){function e(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),Mn(this,Ln(e).apply(this,arguments))}var r,a,c;return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&Dn(t,n)}(e,n),r=e,a=[{key:"render",value:function(){return v.a.createElement(t,this.props)}}],c=[{key:"getInitialProps",value:function(){var n,e=(n=o.a.mark((function n(e){var r,a,c,u;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=e.ctx,a=r.isServer,c=r.store,u={},!t.getInitialProps){n.next=6;break}return n.next=5,t.getInitialProps(e);case 5:u=n.sent;case 6:if(!a){n.next=10;break}return c.dispatch(an),n.next=10,c.sagaTask.toPromise();case 10:return n.abrupt("return",u);case 11:case"end":return n.stop()}}),n,this)})),function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function c(t){In(a,r,o,c,u,"next",t)}function u(t){In(a,r,o,c,u,"throw",t)}c(void 0)}))});return function(t){return e.apply(this,arguments)}}()}],a&&Nn(r.prototype,a),c&&Nn(r,c),e}(p.Component);return n=a,e="displayName",r="withReduxSaga(".concat(t.displayName||t.name||"BaseComponent",")"),e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,a};function qn(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function Kn(t){return function(t){if(Array.isArray(t))return qn(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(t){if("string"===typeof t)return qn(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?qn(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Bn=e("rePB"),Gn=e("29t5");function zn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function Hn(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?zn(Object(e),!0).forEach((function(n){Object(Bn.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):zn(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var Xn={count:0,error:!1,lastUpdate:new Date,light:!1,placeholderData:null};var Jn=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Gn.a.FAILURE:return Hn({},t,{},{error:n.error});case Gn.a.INCREMENT:return Hn({},t,{},{count:t.count+1});case Gn.a.DECREMENT:return Hn({},t,{},{count:t.count-1});case Gn.a.RESET:return Hn({},t,{},{count:Xn.count});case Gn.a.LOAD_DATA_SUCCESS:return Hn({},t,{},{placeholderData:n.data});case Gn.a.TICK_CLOCK:return Hn({},t,{},{lastUpdate:n.ts,light:!!n.light});default:return t}},Fn=Object(Gt.c)({TestReducer:Jn}),Wn=function(t){return{done:!0,value:t}},Vn={};function Zn(t){return z(t)?"channel":H(t)?String(t):M(t)?t.name:String(t)}function $n(t,n,e){var r,o,a,c=n;function u(n,e){if(c===Vn)return Wn(n);if(e&&!o)throw c=Vn,e;r&&r(n);var u=e?t[o](e):t[c]();return c=u.nextState,a=u.effect,r=u.stateUpdater,o=u.errorState,c===Vn?Wn(n):a}return rt(u,(function(t){return u(null,t)}),e)}function Qn(t,n){for(var e=arguments.length,r=new Array(e>2?e-2:0),o=2;o<e;o++)r[o-2]=arguments[o];var a,c,u={done:!1,value:Lt(t)},i=function(t){return{done:!1,value:Kt.apply(void 0,[n].concat(r,[t]))}},f=function(t){return{done:!1,value:(n=t,void 0===n&&(n=k),Nt(At,n))};var n},s=function(t){return a=t},l=function(t){return c=t};return $n({q1:function(){return{nextState:"q2",effect:u,stateUpdater:l}},q2:function(){return a?{nextState:"q3",effect:f(a)}:{nextState:"q1",effect:i(c),stateUpdater:s}},q3:function(){return{nextState:"q1",effect:i(c),stateUpdater:s}}},"q1","takeLatest("+Zn(t)+", "+n.name+")")}function Yn(t,n){for(var e=arguments.length,r=new Array(e>2?e-2:0),o=2;o<e;o++)r[o-2]=arguments[o];return Kt.apply(void 0,[Qn,t,n].concat(r))}e("LpSC");var te=o.a.mark(re),ne=o.a.mark(oe),ee=o.a.mark(ae);function re(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Lt(Gn.a.START_CLOCK);case 2:return t.next=5,Dt(Object(Gn.i)(!1));case 5:return t.next=7,Bt(1e3);case 7:t.next=2;break;case 9:case"end":return t.stop()}}),te)}function oe(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/users");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.next=9,Dt(Object(Gn.f)(n));case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),e.next=15,Dt(Object(Gn.c)(e.t0));case 15:case"end":return e.stop()}}),ne,null,[[0,11]])}function ae(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Mt([qt(re),Yn(Gn.a.LOAD_DATA,oe)]);case 2:case"end":return t.stop()}}),ee)}var ce=ae,ue=o.a.mark(ie);function ie(t){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Mt([ce()]);case 2:case"end":return t.stop()}}),ue)}var fe=function(t){return Gt.a.apply(void 0,Kn(t))};var se=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Rn(),e=Object(Gt.e)(Fn,t,fe([n]));return e.sagaTask=n.run(ie),e},le=v.a.createElement;function pe(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var ve=function(t){Object(u.a)(r,t);var n,e=(n=r,function(){var t,e=Object(f.a)(n);if(pe()){var r=Object(f.a)(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return Object(i.a)(this,t)});function r(){return Object(a.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:"render",value:function(){var t=this.props,n=t.Component,e=t.pageProps,r=t.store;return le(d.a,{store:r},le(n,e))}}],[{key:"getInitialProps",value:function(t){var n,e,r;return o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(n=t.Component,e=t.ctx,r={},!n.getInitialProps){a.next=6;break}return a.next=5,o.a.awrap(n.getInitialProps({ctx:e}));case 5:r=a.sent;case 6:return a.abrupt("return",{pageProps:r});case 7:case"end":return a.stop()}}),null,null,null,Promise)}}]),r}(l.a);n.default=function(t,n){var e=y(y({},w),n),r="undefined"===typeof window,o=function(o){var a=o.initialState,c=o.ctx,u=e.storeKey,i=function(){return t(e.deserializeState(a),y(y(y({},c),n),{isServer:r}))};return r?i():(u in window||(window[u]=i()),window[u])};return function(t){var n;return(n=function(n){function r(t,r){var a=n.call(this,t,r)||this,c=t.initialState;return e.debug&&console.log("4. WrappedApp.render created new store with initialState",c),a.store=o({ctx:r.ctx,initialState:c}),a}return h(r,n),r.prototype.render=function(){var n=this.props,e=n.initialProps,r=(n.initialState,m(n,["initialProps","initialState"]));return p.createElement(t,y({},r,e,{store:this.store}))},r}(p.Component)).displayName="withRedux("+(t.displayName||t.name||"App")+")",n.getInitialProps=function(n){return g(void 0,void 0,void 0,(function(){var a,c;return b(this,(function(u){switch(u.label){case 0:if(!n)throw new Error("No app context");if(!n.ctx)throw new Error("No page context");return a=o({ctx:n.ctx}),e.debug&&console.log("1. WrappedApp.getInitialProps wrapper got the store with state",a.getState()),n.ctx.store=a,n.ctx.isServer=r,c={},"getInitialProps"in t?[4,t.getInitialProps.call(t,n)]:[3,2];case 1:c=u.sent(),u.label=2;case 2:return e.debug&&console.log("3. WrappedApp.getInitialProps has store state",a.getState()),[2,{isServer:r,initialState:r?e.serializeState(a.getState()):a.getState(),initialProps:c}]}}))}))},n}}(se)(Un(ve))},"8Bbg":function(t,n,e){t.exports=e("B5Ud")},B5Ud:function(t,n,e){"use strict";var r=e("/GRZ"),o=e("i2R6"),a=e("48fX"),c=e("tCBg"),u=e("T0f4"),i=e("vJKn");function f(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var s=e("AroE");n.__esModule=!0,n.Container=function(t){0;return t.children},n.createUrl=h,n.default=void 0;var l=s(e("q1tI")),p=e("g/15");function v(t){var n,e,r;return i.async((function(o){for(;;)switch(o.prev=o.next){case 0:return n=t.Component,e=t.ctx,o.next=3,i.awrap((0,p.loadGetInitialProps)(n,e));case 3:return r=o.sent,o.abrupt("return",{pageProps:r});case 5:case"end":return o.stop()}}),null,null,null,Promise)}n.AppInitialProps=p.AppInitialProps;var d=function(t){a(i,t);var n,e=(n=i,function(){var t,e=u(n);if(f()){var r=u(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return c(this,t)});function i(){return r(this,i),e.apply(this,arguments)}return o(i,[{key:"componentDidCatch",value:function(t,n){throw t}},{key:"render",value:function(){var t=this.props,n=t.router,e=t.Component,r=t.pageProps,o=t.__N_SSG,a=t.__N_SSP;return l.default.createElement(e,Object.assign({},r,o||a?{}:{url:h(n)}))}}]),i}(l.default.Component);function h(t){var n=t.pathname,e=t.asPath,r=t.query;return{get query(){return r},get pathname(){return n},get asPath(){return e},back:function(){t.back()},push:function(n,e){return t.push(n,e)},pushTo:function(n,e){var r=e?n:"",o=e||n;return t.push(r,o)},replace:function(n,e){return t.replace(n,e)},replaceTo:function(n,e){var r=e?n:"",o=e||n;return t.replace(r,o)}}}n.default=d,d.origGetInitialProps=v,d.getInitialProps=v},GcxT:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return e("1TCz")}])},K64n:function(t,n,e){"use strict";n.Headers=self.Headers,n.Request=self.Request,n.Response=self.Response,n.fetch=self.fetch},LpSC:function(t,n,e){e("K64n"),t.exports=self.fetch.bind(self)}},[[0,0,1,2,3,5]]]);