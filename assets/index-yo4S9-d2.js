(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Rh={exports:{}},qo={};var c_;function xS(){if(c_)return qo;c_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return qo.Fragment=t,qo.jsx=i,qo.jsxs=i,qo}var u_;function yS(){return u_||(u_=1,Rh.exports=xS()),Rh.exports}var ct=yS(),Ch={exports:{}},ce={};var f_;function SS(){if(f_)return ce;f_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),y=Symbol.iterator;function S(L){return L===null||typeof L!="object"?null:(L=y&&L[y]||L["@@iterator"],typeof L=="function"?L:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function v(L,nt,gt){this.props=L,this.context=nt,this.refs=M,this.updater=gt||E}v.prototype.isReactComponent={},v.prototype.setState=function(L,nt){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,nt,"setState")},v.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function P(){}P.prototype=v.prototype;function U(L,nt,gt){this.props=L,this.context=nt,this.refs=M,this.updater=gt||E}var D=U.prototype=new P;D.constructor=U,T(D,v.prototype),D.isPureReactComponent=!0;var B=Array.isArray;function F(){}var z={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function A(L,nt,gt){var Et=gt.ref;return{$$typeof:r,type:L,key:nt,ref:Et!==void 0?Et:null,props:gt}}function w(L,nt){return A(L.type,nt,L.props)}function k(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function Q(L){var nt={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(gt){return nt[gt]})}var et=/\/+/g;function ut(L,nt){return typeof L=="object"&&L!==null&&L.key!=null?Q(""+L.key):nt.toString(36)}function lt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(F,F):(L.status="pending",L.then(function(nt){L.status==="pending"&&(L.status="fulfilled",L.value=nt)},function(nt){L.status==="pending"&&(L.status="rejected",L.reason=nt)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function N(L,nt,gt,Et,Ft){var it=typeof L;(it==="undefined"||it==="boolean")&&(L=null);var ht=!1;if(L===null)ht=!0;else switch(it){case"bigint":case"string":case"number":ht=!0;break;case"object":switch(L.$$typeof){case r:case t:ht=!0;break;case g:return ht=L._init,N(ht(L._payload),nt,gt,Et,Ft)}}if(ht)return Ft=Ft(L),ht=Et===""?"."+ut(L,0):Et,B(Ft)?(gt="",ht!=null&&(gt=ht.replace(et,"$&/")+"/"),N(Ft,nt,gt,"",function(Ht){return Ht})):Ft!=null&&(k(Ft)&&(Ft=w(Ft,gt+(Ft.key==null||L&&L.key===Ft.key?"":(""+Ft.key).replace(et,"$&/")+"/")+ht)),nt.push(Ft)),1;ht=0;var wt=Et===""?".":Et+":";if(B(L))for(var kt=0;kt<L.length;kt++)Et=L[kt],it=wt+ut(Et,kt),ht+=N(Et,nt,gt,it,Ft);else if(kt=S(L),typeof kt=="function")for(L=kt.call(L),kt=0;!(Et=L.next()).done;)Et=Et.value,it=wt+ut(Et,kt++),ht+=N(Et,nt,gt,it,Ft);else if(it==="object"){if(typeof L.then=="function")return N(lt(L),nt,gt,Et,Ft);throw nt=String(L),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return ht}function I(L,nt,gt){if(L==null)return L;var Et=[],Ft=0;return N(L,Et,"","",function(it){return nt.call(gt,it,Ft++)}),Et}function J(L){if(L._status===-1){var nt=L._result;nt=nt(),nt.then(function(gt){(L._status===0||L._status===-1)&&(L._status=1,L._result=gt)},function(gt){(L._status===0||L._status===-1)&&(L._status=2,L._result=gt)}),L._status===-1&&(L._status=0,L._result=nt)}if(L._status===1)return L._result.default;throw L._result}var St=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},mt={map:I,forEach:function(L,nt,gt){I(L,function(){nt.apply(this,arguments)},gt)},count:function(L){var nt=0;return I(L,function(){nt++}),nt},toArray:function(L){return I(L,function(nt){return nt})||[]},only:function(L){if(!k(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return ce.Activity=_,ce.Children=mt,ce.Component=v,ce.Fragment=i,ce.Profiler=l,ce.PureComponent=U,ce.StrictMode=s,ce.Suspense=m,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ce.__COMPILER_RUNTIME={__proto__:null,c:function(L){return z.H.useMemoCache(L)}},ce.cache=function(L){return function(){return L.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(L,nt,gt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Et=T({},L.props),Ft=L.key;if(nt!=null)for(it in nt.key!==void 0&&(Ft=""+nt.key),nt)!Y.call(nt,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&nt.ref===void 0||(Et[it]=nt[it]);var it=arguments.length-2;if(it===1)Et.children=gt;else if(1<it){for(var ht=Array(it),wt=0;wt<it;wt++)ht[wt]=arguments[wt+2];Et.children=ht}return A(L.type,Ft,Et)},ce.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},ce.createElement=function(L,nt,gt){var Et,Ft={},it=null;if(nt!=null)for(Et in nt.key!==void 0&&(it=""+nt.key),nt)Y.call(nt,Et)&&Et!=="key"&&Et!=="__self"&&Et!=="__source"&&(Ft[Et]=nt[Et]);var ht=arguments.length-2;if(ht===1)Ft.children=gt;else if(1<ht){for(var wt=Array(ht),kt=0;kt<ht;kt++)wt[kt]=arguments[kt+2];Ft.children=wt}if(L&&L.defaultProps)for(Et in ht=L.defaultProps,ht)Ft[Et]===void 0&&(Ft[Et]=ht[Et]);return A(L,it,Ft)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(L){return{$$typeof:d,render:L}},ce.isValidElement=k,ce.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:J}},ce.memo=function(L,nt){return{$$typeof:p,type:L,compare:nt===void 0?null:nt}},ce.startTransition=function(L){var nt=z.T,gt={};z.T=gt;try{var Et=L(),Ft=z.S;Ft!==null&&Ft(gt,Et),typeof Et=="object"&&Et!==null&&typeof Et.then=="function"&&Et.then(F,St)}catch(it){St(it)}finally{nt!==null&&gt.types!==null&&(nt.types=gt.types),z.T=nt}},ce.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ce.use=function(L){return z.H.use(L)},ce.useActionState=function(L,nt,gt){return z.H.useActionState(L,nt,gt)},ce.useCallback=function(L,nt){return z.H.useCallback(L,nt)},ce.useContext=function(L){return z.H.useContext(L)},ce.useDebugValue=function(){},ce.useDeferredValue=function(L,nt){return z.H.useDeferredValue(L,nt)},ce.useEffect=function(L,nt){return z.H.useEffect(L,nt)},ce.useEffectEvent=function(L){return z.H.useEffectEvent(L)},ce.useId=function(){return z.H.useId()},ce.useImperativeHandle=function(L,nt,gt){return z.H.useImperativeHandle(L,nt,gt)},ce.useInsertionEffect=function(L,nt){return z.H.useInsertionEffect(L,nt)},ce.useLayoutEffect=function(L,nt){return z.H.useLayoutEffect(L,nt)},ce.useMemo=function(L,nt){return z.H.useMemo(L,nt)},ce.useOptimistic=function(L,nt){return z.H.useOptimistic(L,nt)},ce.useReducer=function(L,nt,gt){return z.H.useReducer(L,nt,gt)},ce.useRef=function(L){return z.H.useRef(L)},ce.useState=function(L){return z.H.useState(L)},ce.useSyncExternalStore=function(L,nt,gt){return z.H.useSyncExternalStore(L,nt,gt)},ce.useTransition=function(){return z.H.useTransition()},ce.version="19.2.3",ce}var h_;function dp(){return h_||(h_=1,Ch.exports=SS()),Ch.exports}var Be=dp(),wh={exports:{}},Yo={},Dh={exports:{}},Uh={};var d_;function MS(){return d_||(d_=1,(function(r){function t(N,I){var J=N.length;N.push(I);t:for(;0<J;){var St=J-1>>>1,mt=N[St];if(0<l(mt,I))N[St]=I,N[J]=mt,J=St;else break t}}function i(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var I=N[0],J=N.pop();if(J!==I){N[0]=J;t:for(var St=0,mt=N.length,L=mt>>>1;St<L;){var nt=2*(St+1)-1,gt=N[nt],Et=nt+1,Ft=N[Et];if(0>l(gt,J))Et<mt&&0>l(Ft,gt)?(N[St]=Ft,N[Et]=J,St=Et):(N[St]=gt,N[nt]=J,St=nt);else if(Et<mt&&0>l(Ft,J))N[St]=Ft,N[Et]=J,St=Et;else break t}}return I}function l(N,I){var J=N.sortIndex-I.sortIndex;return J!==0?J:N.id-I.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,_=null,y=3,S=!1,E=!1,T=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function D(N){for(var I=i(p);I!==null;){if(I.callback===null)s(p);else if(I.startTime<=N)s(p),I.sortIndex=I.expirationTime,t(m,I);else break;I=i(p)}}function B(N){if(T=!1,D(N),!E)if(i(m)!==null)E=!0,F||(F=!0,Q());else{var I=i(p);I!==null&&lt(B,I.startTime-N)}}var F=!1,z=-1,Y=5,A=-1;function w(){return M?!0:!(r.unstable_now()-A<Y)}function k(){if(M=!1,F){var N=r.unstable_now();A=N;var I=!0;try{t:{E=!1,T&&(T=!1,P(z),z=-1),S=!0;var J=y;try{e:{for(D(N),_=i(m);_!==null&&!(_.expirationTime>N&&w());){var St=_.callback;if(typeof St=="function"){_.callback=null,y=_.priorityLevel;var mt=St(_.expirationTime<=N);if(N=r.unstable_now(),typeof mt=="function"){_.callback=mt,D(N),I=!0;break e}_===i(m)&&s(m),D(N)}else s(m);_=i(m)}if(_!==null)I=!0;else{var L=i(p);L!==null&&lt(B,L.startTime-N),I=!1}}break t}finally{_=null,y=J,S=!1}I=void 0}}finally{I?Q():F=!1}}}var Q;if(typeof U=="function")Q=function(){U(k)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,ut=et.port2;et.port1.onmessage=k,Q=function(){ut.postMessage(null)}}else Q=function(){v(k,0)};function lt(N,I){z=v(function(){N(r.unstable_now())},I)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(N){N.callback=null},r.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<N?Math.floor(1e3/N):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_next=function(N){switch(y){case 1:case 2:case 3:var I=3;break;default:I=y}var J=y;y=I;try{return N()}finally{y=J}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(N,I){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var J=y;y=N;try{return I()}finally{y=J}},r.unstable_scheduleCallback=function(N,I,J){var St=r.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?St+J:St):J=St,N){case 1:var mt=-1;break;case 2:mt=250;break;case 5:mt=1073741823;break;case 4:mt=1e4;break;default:mt=5e3}return mt=J+mt,N={id:g++,callback:I,priorityLevel:N,startTime:J,expirationTime:mt,sortIndex:-1},J>St?(N.sortIndex=J,t(p,N),i(m)===null&&N===i(p)&&(T?(P(z),z=-1):T=!0,lt(B,J-St))):(N.sortIndex=mt,t(m,N),E||S||(E=!0,F||(F=!0,Q()))),N},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(N){var I=y;return function(){var J=y;y=I;try{return N.apply(this,arguments)}finally{y=J}}}})(Uh)),Uh}var p_;function bS(){return p_||(p_=1,Dh.exports=MS()),Dh.exports}var Nh={exports:{}},zn={};var m_;function ES(){if(m_)return zn;m_=1;var r=dp();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,zn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},zn.flushSync=function(m){var p=h.T,g=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=g,s.d.f()}},zn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},zn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},zn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:y,fetchPriority:S}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:y,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},zn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},zn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},zn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},zn.requestFormReset=function(m){s.d.r(m)},zn.unstable_batchedUpdates=function(m,p){return m(p)},zn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},zn.useFormStatus=function(){return h.H.useHostTransitionStatus()},zn.version="19.2.3",zn}var g_;function TS(){if(g_)return Nh.exports;g_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Nh.exports=ES(),Nh.exports}var __;function AS(){if(__)return Yo;__=1;var r=bS(),t=dp(),i=TS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var x=!1,R=u.child;R;){if(R===a){x=!0,a=u,o=f;break}if(R===o){x=!0,o=u,a=f;break}R=R.sibling}if(!x){for(R=f.child;R;){if(R===a){x=!0,a=f,o=u;break}if(R===o){x=!0,o=f,a=u;break}R=R.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,y=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),U=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var et=Symbol.for("react.client.reference");function ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===et?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case B:return"Suspense";case F:return"SuspenseList";case A:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case U:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:ut(e.type)||"Memo";case Y:n=e._payload,e=e._init;try{return ut(e(n))}catch{}}return null}var lt=Array.isArray,N=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},St=[],mt=-1;function L(e){return{current:e}}function nt(e){0>mt||(e.current=St[mt],St[mt]=null,mt--)}function gt(e,n){mt++,St[mt]=e.current,e.current=n}var Et=L(null),Ft=L(null),it=L(null),ht=L(null);function wt(e,n){switch(gt(it,n),gt(Ft,e),gt(Et,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Ng(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Ng(n),e=Lg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nt(Et),gt(Et,e)}function kt(){nt(Et),nt(Ft),nt(it)}function Ht(e){e.memoizedState!==null&&gt(ht,e);var n=Et.current,a=Lg(n,e.type);n!==a&&(gt(Ft,e),gt(Et,a))}function pe(e){Ft.current===e&&(nt(Et),nt(Ft)),ht.current===e&&(nt(ht),Vo._currentValue=J)}var Ke,_e;function me(e){if(Ke===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ke=n&&n[1]||"",_e=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ke+e+_e}var Rt=!1;function Xt(e,n){if(!e||Rt)return"";Rt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(ot){var st=ot}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(ot){st=ot}e.call(vt.prototype)}}else{try{throw Error()}catch(ot){st=ot}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(ot){if(ot&&st&&typeof ot.stack=="string")return[ot.stack,st.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),x=f[0],R=f[1];if(x&&R){var G=x.split(`
`),tt=R.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<tt.length&&!tt[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===tt.length)for(o=G.length-1,u=tt.length-1;1<=o&&0<=u&&G[o]!==tt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==tt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==tt[u]){var dt=`
`+G[o].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=o&&0<=u);break}}}finally{Rt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?me(a):""}function le(e,n){switch(e.tag){case 26:case 27:case 5:return me(e.type);case 16:return me("Lazy");case 13:return e.child!==n&&n!==null?me("Suspense Fallback"):me("Suspense");case 19:return me("SuspenseList");case 0:case 15:return Xt(e.type,!1);case 11:return Xt(e.type.render,!1);case 1:return Xt(e.type,!0);case 31:return me("Activity");default:return""}}function H(e){try{var n="",a=null;do n+=le(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ce=Object.prototype.hasOwnProperty,ye=r.unstable_scheduleCallback,ve=r.unstable_cancelCallback,Yt=r.unstable_shouldYield,O=r.unstable_requestPaint,b=r.unstable_now,q=r.unstable_getCurrentPriorityLevel,pt=r.unstable_ImmediatePriority,yt=r.unstable_UserBlockingPriority,ft=r.unstable_NormalPriority,Jt=r.unstable_LowPriority,Dt=r.unstable_IdlePriority,jt=r.log,ae=r.unstable_setDisableYieldValue,bt=null,Tt=null;function It(e){if(typeof jt=="function"&&ae(e),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(bt,e)}catch{}}var zt=Math.clz32?Math.clz32:W,Ut=Math.log,fe=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Ut(e)/fe|0)|0}var Lt=256,At=262144,Bt=4194304;function Mt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=Mt(o):(x&=R,x!==0?u=Mt(x):a||(a=R&~e,a!==0&&(u=Mt(a))))):(R=o&~f,R!==0?u=Mt(R):x!==0?u=Mt(x):a||(a=o&~e,a!==0&&(u=Mt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ct(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function re(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fe(){var e=Bt;return Bt<<=1,(Bt&62914560)===0&&(Bt=4194304),e}function we(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Pn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ei(e,n,a,o,u,f){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,G=e.expirationTimes,tt=e.hiddenUpdates;for(a=x&~a;0<a;){var dt=31-zt(a),vt=1<<dt;R[dt]=0,G[dt]=-1;var st=tt[dt];if(st!==null)for(tt[dt]=null,dt=0;dt<st.length;dt++){var ot=st[dt];ot!==null&&(ot.lane&=-536870913)}a&=~vt}o!==0&&pl(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~n))}function pl(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-zt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function $r(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-zt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Vs(e,n){var a=n&-n;return a=(a&42)!==0?1:to(a),(a&(e.suspendedLanes|n))!==0?0:a}function to(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ks(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function eo(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:n_(e.type))}function Pi(e,n){var a=I.p;try{return I.p=e,n()}finally{I.p=a}}var ui=Math.random().toString(36).slice(2),un="__reactFiber$"+ui,bn="__reactProps$"+ui,Ti="__reactContainer$"+ui,Xs="__reactEvents$"+ui,Ws="__reactListeners$"+ui,ml="__reactHandles$"+ui,no="__reactResources$"+ui,cs="__reactMarker$"+ui;function io(e){delete e[un],delete e[bn],delete e[Xs],delete e[Ws],delete e[ml]}function Ra(e){var n=e[un];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ti]||a[un]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Hg(e);e!==null;){if(a=e[un])return a;e=Hg(e)}return n}e=a,a=e.parentNode}return null}function Ca(e){if(e=e[un]||e[Ti]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function us(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function wa(e){var n=e[no];return n||(n=e[no]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function C(e){e[cs]=!0}var j=new Set,rt={};function at(e,n){K(e,n),K(e+"Capture",n)}function K(e,n){for(rt[e]=n,e=0;e<n.length;e++)j.add(n[e])}var Nt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gt={},Ot={};function Wt(e){return Ce.call(Ot,e)?!0:Ce.call(Gt,e)?!1:Nt.test(e)?Ot[e]=!0:(Gt[e]=!0,!1)}function Zt(e,n,a){if(Wt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ee(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Kt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ne(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Le(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $e(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ze(e){if(!e._valueTracker){var n=Le(e)?"checked":"value";e._valueTracker=$e(e,n,""+e[n])}}function ze(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Le(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function $t(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Oe=/[\n"\\]/g;function oe(e){return e.replace(Oe,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function En(e,n,a,o,u,f,x,R){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ne(n)):e.value!==""+ne(n)&&(e.value=""+ne(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?Tn(e,x,ne(n)):a!=null?Tn(e,x,ne(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+ne(R):e.removeAttribute("name")}function Zi(e,n,a,o,u,f,x,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ze(e);return}a=a!=null?""+ne(a):"",n=n!=null?""+ne(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),Ze(e)}function Tn(e,n,a){n==="number"&&$t(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function fi(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ne(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ie(e,n,a){if(n!=null&&(n=""+ne(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ne(a):""}function An(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(lt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ne(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ze(e)}function gn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Rn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Cn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Rn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function qs(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Cn(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Cn(e,f,n[f])}function Ai(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),gx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gl(e){return gx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ki(){}var bu=null;function Eu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ys=null,js=null;function Up(e){var n=Ca(e);if(n&&(e=n.stateNode)){var a=e[bn]||null;t:switch(e=n.stateNode,n.type){case"input":if(En(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+oe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[bn]||null;if(!u)throw Error(s(90));En(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&ze(o)}break t;case"textarea":Ie(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&fi(e,!!a.multiple,n,!1)}}}var Tu=!1;function Np(e,n,a){if(Tu)return e(n,a);Tu=!0;try{var o=e(n);return o}finally{if(Tu=!1,(Ys!==null||js!==null)&&(ic(),Ys&&(n=Ys,e=js,js=Ys=null,Up(n),e)))for(n=0;n<e.length;n++)Up(e[n])}}function ao(e,n){var a=e.stateNode;if(a===null)return null;var o=a[bn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Au=!1;if(Qi)try{var so={};Object.defineProperty(so,"passive",{get:function(){Au=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{Au=!1}var Da=null,Ru=null,_l=null;function Lp(){if(_l)return _l;var e,n=Ru,a=n.length,o,u="value"in Da?Da.value:Da.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(o=1;o<=x&&n[a-o]===u[f-o];o++);return _l=u.slice(e,1<o?1-o:void 0)}function vl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function xl(){return!0}function Op(){return!1}function Wn(e){function n(a,o,u,f,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?xl:Op,this.isPropagationStopped=Op,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=xl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=xl)},persist:function(){},isPersistent:xl}),n}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=Wn(fs),ro=_({},fs,{view:0,detail:0}),_x=Wn(ro),Cu,wu,oo,Sl=_({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==oo&&(oo&&e.type==="mousemove"?(Cu=e.screenX-oo.screenX,wu=e.screenY-oo.screenY):wu=Cu=0,oo=e),Cu)},movementY:function(e){return"movementY"in e?e.movementY:wu}}),Pp=Wn(Sl),vx=_({},Sl,{dataTransfer:0}),xx=Wn(vx),yx=_({},ro,{relatedTarget:0}),Du=Wn(yx),Sx=_({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),Mx=Wn(Sx),bx=_({},fs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ex=Wn(bx),Tx=_({},fs,{data:0}),zp=Wn(Tx),Ax={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Cx[e])?!!n[e]:!1}function Uu(){return wx}var Dx=_({},ro,{key:function(e){if(e.key){var n=Ax[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=vl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uu,charCode:function(e){return e.type==="keypress"?vl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ux=Wn(Dx),Nx=_({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bp=Wn(Nx),Lx=_({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uu}),Ox=Wn(Lx),Px=_({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),zx=Wn(Px),Bx=_({},Sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fx=Wn(Bx),Ix=_({},fs,{newState:0,oldState:0}),Hx=Wn(Ix),Gx=[9,13,27,32],Nu=Qi&&"CompositionEvent"in window,lo=null;Qi&&"documentMode"in document&&(lo=document.documentMode);var Vx=Qi&&"TextEvent"in window&&!lo,Fp=Qi&&(!Nu||lo&&8<lo&&11>=lo),Ip=" ",Hp=!1;function Gp(e,n){switch(e){case"keyup":return Gx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zs=!1;function kx(e,n){switch(e){case"compositionend":return Vp(n);case"keypress":return n.which!==32?null:(Hp=!0,Ip);case"textInput":return e=n.data,e===Ip&&Hp?null:e;default:return null}}function Xx(e,n){if(Zs)return e==="compositionend"||!Nu&&Gp(e,n)?(e=Lp(),_l=Ru=Da=null,Zs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Fp&&n.locale!=="ko"?null:n.data;default:return null}}var Wx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Wx[e.type]:n==="textarea"}function Xp(e,n,a,o){Ys?js?js.push(o):js=[o]:Ys=o,n=uc(n,"onChange"),0<n.length&&(a=new yl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var co=null,uo=null;function qx(e){Ag(e,0)}function Ml(e){var n=us(e);if(ze(n))return e}function Wp(e,n){if(e==="change")return n}var qp=!1;if(Qi){var Lu;if(Qi){var Ou="oninput"in document;if(!Ou){var Yp=document.createElement("div");Yp.setAttribute("oninput","return;"),Ou=typeof Yp.oninput=="function"}Lu=Ou}else Lu=!1;qp=Lu&&(!document.documentMode||9<document.documentMode)}function jp(){co&&(co.detachEvent("onpropertychange",Zp),uo=co=null)}function Zp(e){if(e.propertyName==="value"&&Ml(uo)){var n=[];Xp(n,uo,e,Eu(e)),Np(qx,n)}}function Yx(e,n,a){e==="focusin"?(jp(),co=n,uo=a,co.attachEvent("onpropertychange",Zp)):e==="focusout"&&jp()}function jx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ml(uo)}function Zx(e,n){if(e==="click")return Ml(n)}function Kx(e,n){if(e==="input"||e==="change")return Ml(n)}function Qx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var $n=typeof Object.is=="function"?Object.is:Qx;function fo(e,n){if($n(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ce.call(n,u)||!$n(e[u],n[u]))return!1}return!0}function Kp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qp(e,n){var a=Kp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Kp(a)}}function Jp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Jp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function $p(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=$t(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=$t(e.document)}return n}function Pu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Jx=Qi&&"documentMode"in document&&11>=document.documentMode,Ks=null,zu=null,ho=null,Bu=!1;function tm(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Bu||Ks==null||Ks!==$t(o)||(o=Ks,"selectionStart"in o&&Pu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ho&&fo(ho,o)||(ho=o,o=uc(zu,"onSelect"),0<o.length&&(n=new yl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ks)))}function hs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Qs={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionrun:hs("Transition","TransitionRun"),transitionstart:hs("Transition","TransitionStart"),transitioncancel:hs("Transition","TransitionCancel"),transitionend:hs("Transition","TransitionEnd")},Fu={},em={};Qi&&(em=document.createElement("div").style,"AnimationEvent"in window||(delete Qs.animationend.animation,delete Qs.animationiteration.animation,delete Qs.animationstart.animation),"TransitionEvent"in window||delete Qs.transitionend.transition);function ds(e){if(Fu[e])return Fu[e];if(!Qs[e])return e;var n=Qs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in em)return Fu[e]=n[a];return e}var nm=ds("animationend"),im=ds("animationiteration"),am=ds("animationstart"),$x=ds("transitionrun"),ty=ds("transitionstart"),ey=ds("transitioncancel"),sm=ds("transitionend"),rm=new Map,Iu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Iu.push("scrollEnd");function Ri(e,n){rm.set(e,n),at(n,[e])}var bl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},hi=[],Js=0,Hu=0;function El(){for(var e=Js,n=Hu=Js=0;n<e;){var a=hi[n];hi[n++]=null;var o=hi[n];hi[n++]=null;var u=hi[n];hi[n++]=null;var f=hi[n];if(hi[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}f!==0&&om(a,u,f)}}function Tl(e,n,a,o){hi[Js++]=e,hi[Js++]=n,hi[Js++]=a,hi[Js++]=o,Hu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Gu(e,n,a,o){return Tl(e,n,a,o),Al(e)}function ps(e,n){return Tl(e,null,null,n),Al(e)}function om(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-zt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Al(e){if(50<Po)throw Po=0,Qf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var $s={};function ny(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,n,a,o){return new ny(e,n,a,o)}function Vu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ji(e,n){var a=e.alternate;return a===null?(a=ti(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function lm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Rl(e,n,a,o,u,f){var x=0;if(o=e,typeof e=="function")Vu(e)&&(x=1);else if(typeof e=="string")x=oS(e,a,Et.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case A:return e=ti(31,a,n,u),e.elementType=A,e.lanes=f,e;case T:return ms(a.children,u,f,n);case M:x=8,u|=24;break;case v:return e=ti(12,a,n,u|2),e.elementType=v,e.lanes=f,e;case B:return e=ti(13,a,n,u),e.elementType=B,e.lanes=f,e;case F:return e=ti(19,a,n,u),e.elementType=F,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:x=10;break t;case P:x=9;break t;case D:x=11;break t;case z:x=14;break t;case Y:x=16,o=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ti(x,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function ms(e,n,a,o){return e=ti(7,e,o,n),e.lanes=a,e}function ku(e,n,a){return e=ti(6,e,null,n),e.lanes=a,e}function cm(e){var n=ti(18,null,null,0);return n.stateNode=e,n}function Xu(e,n,a){return n=ti(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var um=new WeakMap;function di(e,n){if(typeof e=="object"&&e!==null){var a=um.get(e);return a!==void 0?a:(n={value:e,source:n,stack:H(n)},um.set(e,n),n)}return{value:e,source:n,stack:H(n)}}var tr=[],er=0,Cl=null,po=0,pi=[],mi=0,Ua=null,zi=1,Bi="";function $i(e,n){tr[er++]=po,tr[er++]=Cl,Cl=e,po=n}function fm(e,n,a){pi[mi++]=zi,pi[mi++]=Bi,pi[mi++]=Ua,Ua=e;var o=zi;e=Bi;var u=32-zt(o)-1;o&=~(1<<u),a+=1;var f=32-zt(n)+u;if(30<f){var x=u-u%5;f=(o&(1<<x)-1).toString(32),o>>=x,u-=x,zi=1<<32-zt(n)+u|a<<u|o,Bi=f+e}else zi=1<<f|a<<u|o,Bi=e}function Wu(e){e.return!==null&&($i(e,1),fm(e,1,0))}function qu(e){for(;e===Cl;)Cl=tr[--er],tr[er]=null,po=tr[--er],tr[er]=null;for(;e===Ua;)Ua=pi[--mi],pi[mi]=null,Bi=pi[--mi],pi[mi]=null,zi=pi[--mi],pi[mi]=null}function hm(e,n){pi[mi++]=zi,pi[mi++]=Bi,pi[mi++]=Ua,zi=n.id,Bi=n.overflow,Ua=e}var wn=null,Qe=null,Te=!1,Na=null,gi=!1,Yu=Error(s(519));function La(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw mo(di(n,e)),Yu}function dm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[un]=e,n[bn]=o,a){case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":case"embed":Me("load",n);break;case"video":case"audio":for(a=0;a<Bo.length;a++)Me(Bo[a],n);break;case"source":Me("error",n);break;case"img":case"image":case"link":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"input":Me("invalid",n),Zi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Me("invalid",n);break;case"textarea":Me("invalid",n),An(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Dg(n.textContent,a)?(o.popover!=null&&(Me("beforetoggle",n),Me("toggle",n)),o.onScroll!=null&&Me("scroll",n),o.onScrollEnd!=null&&Me("scrollend",n),o.onClick!=null&&(n.onclick=Ki),n=!0):n=!1,n||La(e,!0)}function pm(e){for(wn=e.return;wn;)switch(wn.tag){case 5:case 31:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:wn=wn.return}}function nr(e){if(e!==wn)return!1;if(!Te)return pm(e),Te=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||hh(e.type,e.memoizedProps)),a=!a),a&&Qe&&La(e),pm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Qe=Ig(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Qe=Ig(e)}else n===27?(n=Qe,Ya(e.type)?(e=_h,_h=null,Qe=e):Qe=n):Qe=wn?vi(e.stateNode.nextSibling):null;return!0}function gs(){Qe=wn=null,Te=!1}function ju(){var e=Na;return e!==null&&(Zn===null?Zn=e:Zn.push.apply(Zn,e),Na=null),e}function mo(e){Na===null?Na=[e]:Na.push(e)}var Zu=L(null),_s=null,ta=null;function Oa(e,n,a){gt(Zu,n._currentValue),n._currentValue=a}function ea(e){e._currentValue=Zu.current,nt(Zu)}function Ku(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Qu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var x=u.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=u;for(var G=0;G<n.length;G++)if(R.context===n[G]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Ku(f.return,a,e),o||(x=null);break t}f=R.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),Ku(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function ir(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var R=u.type;$n(u.pendingProps.value,x.value)||(e!==null?e.push(R):e=[R])}}else if(u===ht.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Vo):e=[Vo])}u=u.return}e!==null&&Qu(n,e,a,o),n.flags|=262144}function wl(e){for(e=e.firstContext;e!==null;){if(!$n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function vs(e){_s=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Dn(e){return mm(_s,e)}function Dl(e,n){return _s===null&&vs(e),mm(e,n)}function mm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ta===null){if(e===null)throw Error(s(308));ta=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ta=ta.next=n;return a}var iy=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},ay=r.unstable_scheduleCallback,sy=r.unstable_NormalPriority,fn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ju(){return{controller:new iy,data:new Map,refCount:0}}function go(e){e.refCount--,e.refCount===0&&ay(sy,function(){e.controller.abort()})}var _o=null,$u=0,ar=0,sr=null;function ry(e,n){if(_o===null){var a=_o=[];$u=0,ar=ih(),sr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return $u++,n.then(gm,gm),n}function gm(){if(--$u===0&&_o!==null){sr!==null&&(sr.status="fulfilled");var e=_o;_o=null,ar=0,sr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function oy(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var _m=N.S;N.S=function(e,n){tg=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ry(e,n),_m!==null&&_m(e,n)};var xs=L(null);function tf(){var e=xs.current;return e!==null?e:je.pooledCache}function Ul(e,n){n===null?gt(xs,xs.current):gt(xs,n.pool)}function vm(){var e=tf();return e===null?null:{parent:fn._currentValue,pool:e}}var rr=Error(s(460)),ef=Error(s(474)),Nl=Error(s(542)),Ll={then:function(){}};function xm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ym(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ki,Ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Mm(e),e;default:if(typeof n.status=="string")n.then(Ki,Ki);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Mm(e),e}throw Ss=n,rr}}function ys(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ss=a,rr):a}}var Ss=null;function Sm(){if(Ss===null)throw Error(s(459));var e=Ss;return Ss=null,e}function Mm(e){if(e===rr||e===Nl)throw Error(s(483))}var or=null,vo=0;function Ol(e){var n=vo;return vo+=1,or===null&&(or=[]),ym(or,e,n)}function xo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Pl(e,n){throw n.$$typeof===y?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function bm(e){function n(Z,X){if(e){var $=Z.deletions;$===null?(Z.deletions=[X],Z.flags|=16):$.push(X)}}function a(Z,X){if(!e)return null;for(;X!==null;)n(Z,X),X=X.sibling;return null}function o(Z){for(var X=new Map;Z!==null;)Z.key!==null?X.set(Z.key,Z):X.set(Z.index,Z),Z=Z.sibling;return X}function u(Z,X){return Z=Ji(Z,X),Z.index=0,Z.sibling=null,Z}function f(Z,X,$){return Z.index=$,e?($=Z.alternate,$!==null?($=$.index,$<X?(Z.flags|=67108866,X):$):(Z.flags|=67108866,X)):(Z.flags|=1048576,X)}function x(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function R(Z,X,$,_t){return X===null||X.tag!==6?(X=ku($,Z.mode,_t),X.return=Z,X):(X=u(X,$),X.return=Z,X)}function G(Z,X,$,_t){var te=$.type;return te===T?dt(Z,X,$.props.children,_t,$.key):X!==null&&(X.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===Y&&ys(te)===X.type)?(X=u(X,$.props),xo(X,$),X.return=Z,X):(X=Rl($.type,$.key,$.props,null,Z.mode,_t),xo(X,$),X.return=Z,X)}function tt(Z,X,$,_t){return X===null||X.tag!==4||X.stateNode.containerInfo!==$.containerInfo||X.stateNode.implementation!==$.implementation?(X=Xu($,Z.mode,_t),X.return=Z,X):(X=u(X,$.children||[]),X.return=Z,X)}function dt(Z,X,$,_t,te){return X===null||X.tag!==7?(X=ms($,Z.mode,_t,te),X.return=Z,X):(X=u(X,$),X.return=Z,X)}function vt(Z,X,$){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=ku(""+X,Z.mode,$),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return $=Rl(X.type,X.key,X.props,null,Z.mode,$),xo($,X),$.return=Z,$;case E:return X=Xu(X,Z.mode,$),X.return=Z,X;case Y:return X=ys(X),vt(Z,X,$)}if(lt(X)||Q(X))return X=ms(X,Z.mode,$,null),X.return=Z,X;if(typeof X.then=="function")return vt(Z,Ol(X),$);if(X.$$typeof===U)return vt(Z,Dl(Z,X),$);Pl(Z,X)}return null}function st(Z,X,$,_t){var te=X!==null?X.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return te!==null?null:R(Z,X,""+$,_t);if(typeof $=="object"&&$!==null){switch($.$$typeof){case S:return $.key===te?G(Z,X,$,_t):null;case E:return $.key===te?tt(Z,X,$,_t):null;case Y:return $=ys($),st(Z,X,$,_t)}if(lt($)||Q($))return te!==null?null:dt(Z,X,$,_t,null);if(typeof $.then=="function")return st(Z,X,Ol($),_t);if($.$$typeof===U)return st(Z,X,Dl(Z,$),_t);Pl(Z,$)}return null}function ot(Z,X,$,_t,te){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return Z=Z.get($)||null,R(X,Z,""+_t,te);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case S:return Z=Z.get(_t.key===null?$:_t.key)||null,G(X,Z,_t,te);case E:return Z=Z.get(_t.key===null?$:_t.key)||null,tt(X,Z,_t,te);case Y:return _t=ys(_t),ot(Z,X,$,_t,te)}if(lt(_t)||Q(_t))return Z=Z.get($)||null,dt(X,Z,_t,te,null);if(typeof _t.then=="function")return ot(Z,X,$,Ol(_t),te);if(_t.$$typeof===U)return ot(Z,X,$,Dl(X,_t),te);Pl(X,_t)}return null}function qt(Z,X,$,_t){for(var te=null,Ue=null,Qt=X,he=X=0,Ee=null;Qt!==null&&he<$.length;he++){Qt.index>he?(Ee=Qt,Qt=null):Ee=Qt.sibling;var Ne=st(Z,Qt,$[he],_t);if(Ne===null){Qt===null&&(Qt=Ee);break}e&&Qt&&Ne.alternate===null&&n(Z,Qt),X=f(Ne,X,he),Ue===null?te=Ne:Ue.sibling=Ne,Ue=Ne,Qt=Ee}if(he===$.length)return a(Z,Qt),Te&&$i(Z,he),te;if(Qt===null){for(;he<$.length;he++)Qt=vt(Z,$[he],_t),Qt!==null&&(X=f(Qt,X,he),Ue===null?te=Qt:Ue.sibling=Qt,Ue=Qt);return Te&&$i(Z,he),te}for(Qt=o(Qt);he<$.length;he++)Ee=ot(Qt,Z,he,$[he],_t),Ee!==null&&(e&&Ee.alternate!==null&&Qt.delete(Ee.key===null?he:Ee.key),X=f(Ee,X,he),Ue===null?te=Ee:Ue.sibling=Ee,Ue=Ee);return e&&Qt.forEach(function(Ja){return n(Z,Ja)}),Te&&$i(Z,he),te}function ie(Z,X,$,_t){if($==null)throw Error(s(151));for(var te=null,Ue=null,Qt=X,he=X=0,Ee=null,Ne=$.next();Qt!==null&&!Ne.done;he++,Ne=$.next()){Qt.index>he?(Ee=Qt,Qt=null):Ee=Qt.sibling;var Ja=st(Z,Qt,Ne.value,_t);if(Ja===null){Qt===null&&(Qt=Ee);break}e&&Qt&&Ja.alternate===null&&n(Z,Qt),X=f(Ja,X,he),Ue===null?te=Ja:Ue.sibling=Ja,Ue=Ja,Qt=Ee}if(Ne.done)return a(Z,Qt),Te&&$i(Z,he),te;if(Qt===null){for(;!Ne.done;he++,Ne=$.next())Ne=vt(Z,Ne.value,_t),Ne!==null&&(X=f(Ne,X,he),Ue===null?te=Ne:Ue.sibling=Ne,Ue=Ne);return Te&&$i(Z,he),te}for(Qt=o(Qt);!Ne.done;he++,Ne=$.next())Ne=ot(Qt,Z,he,Ne.value,_t),Ne!==null&&(e&&Ne.alternate!==null&&Qt.delete(Ne.key===null?he:Ne.key),X=f(Ne,X,he),Ue===null?te=Ne:Ue.sibling=Ne,Ue=Ne);return e&&Qt.forEach(function(vS){return n(Z,vS)}),Te&&$i(Z,he),te}function We(Z,X,$,_t){if(typeof $=="object"&&$!==null&&$.type===T&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case S:t:{for(var te=$.key;X!==null;){if(X.key===te){if(te=$.type,te===T){if(X.tag===7){a(Z,X.sibling),_t=u(X,$.props.children),_t.return=Z,Z=_t;break t}}else if(X.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===Y&&ys(te)===X.type){a(Z,X.sibling),_t=u(X,$.props),xo(_t,$),_t.return=Z,Z=_t;break t}a(Z,X);break}else n(Z,X);X=X.sibling}$.type===T?(_t=ms($.props.children,Z.mode,_t,$.key),_t.return=Z,Z=_t):(_t=Rl($.type,$.key,$.props,null,Z.mode,_t),xo(_t,$),_t.return=Z,Z=_t)}return x(Z);case E:t:{for(te=$.key;X!==null;){if(X.key===te)if(X.tag===4&&X.stateNode.containerInfo===$.containerInfo&&X.stateNode.implementation===$.implementation){a(Z,X.sibling),_t=u(X,$.children||[]),_t.return=Z,Z=_t;break t}else{a(Z,X);break}else n(Z,X);X=X.sibling}_t=Xu($,Z.mode,_t),_t.return=Z,Z=_t}return x(Z);case Y:return $=ys($),We(Z,X,$,_t)}if(lt($))return qt(Z,X,$,_t);if(Q($)){if(te=Q($),typeof te!="function")throw Error(s(150));return $=te.call($),ie(Z,X,$,_t)}if(typeof $.then=="function")return We(Z,X,Ol($),_t);if($.$$typeof===U)return We(Z,X,Dl(Z,$),_t);Pl(Z,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,X!==null&&X.tag===6?(a(Z,X.sibling),_t=u(X,$),_t.return=Z,Z=_t):(a(Z,X),_t=ku($,Z.mode,_t),_t.return=Z,Z=_t),x(Z)):a(Z,X)}return function(Z,X,$,_t){try{vo=0;var te=We(Z,X,$,_t);return or=null,te}catch(Qt){if(Qt===rr||Qt===Nl)throw Qt;var Ue=ti(29,Qt,null,Z.mode);return Ue.lanes=_t,Ue.return=Z,Ue}}}var Ms=bm(!0),Em=bm(!1),Pa=!1;function nf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function af(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ba(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Pe&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Al(e),om(e,null,a),n}return Tl(e,o,n,a),Al(e)}function yo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,$r(e,a)}}function sf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var rf=!1;function So(){if(rf){var e=sr;if(e!==null)throw e}}function Mo(e,n,a,o){rf=!1;var u=e.updateQueue;Pa=!1;var f=u.firstBaseUpdate,x=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var G=R,tt=G.next;G.next=null,x===null?f=tt:x.next=tt,x=G;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,R=dt.lastBaseUpdate,R!==x&&(R===null?dt.firstBaseUpdate=tt:R.next=tt,dt.lastBaseUpdate=G))}if(f!==null){var vt=u.baseState;x=0,dt=tt=G=null,R=f;do{var st=R.lane&-536870913,ot=st!==R.lane;if(ot?(be&st)===st:(o&st)===st){st!==0&&st===ar&&(rf=!0),dt!==null&&(dt=dt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var qt=e,ie=R;st=n;var We=a;switch(ie.tag){case 1:if(qt=ie.payload,typeof qt=="function"){vt=qt.call(We,vt,st);break t}vt=qt;break t;case 3:qt.flags=qt.flags&-65537|128;case 0:if(qt=ie.payload,st=typeof qt=="function"?qt.call(We,vt,st):qt,st==null)break t;vt=_({},vt,st);break t;case 2:Pa=!0}}st=R.callback,st!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=u.callbacks,ot===null?u.callbacks=[st]:ot.push(st))}else ot={lane:st,tag:R.tag,payload:R.payload,callback:R.callback,next:null},dt===null?(tt=dt=ot,G=vt):dt=dt.next=ot,x|=st;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ot=R,R=ot.next,ot.next=null,u.lastBaseUpdate=ot,u.shared.pending=null}}while(!0);dt===null&&(G=vt),u.baseState=G,u.firstBaseUpdate=tt,u.lastBaseUpdate=dt,f===null&&(u.shared.lanes=0),Va|=x,e.lanes=x,e.memoizedState=vt}}function Tm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Am(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Tm(a[e],n)}var lr=L(null),zl=L(0);function Rm(e,n){e=ua,gt(zl,e),gt(lr,n),ua=e|n.baseLanes}function of(){gt(zl,ua),gt(lr,lr.current)}function lf(){ua=zl.current,nt(lr),nt(zl)}var ei=L(null),_i=null;function Fa(e){var n=e.alternate;gt(rn,rn.current&1),gt(ei,e),_i===null&&(n===null||lr.current!==null||n.memoizedState!==null)&&(_i=e)}function cf(e){gt(rn,rn.current),gt(ei,e),_i===null&&(_i=e)}function Cm(e){e.tag===22?(gt(rn,rn.current),gt(ei,e),_i===null&&(_i=e)):Ia()}function Ia(){gt(rn,rn.current),gt(ei,ei.current)}function ni(e){nt(ei),_i===e&&(_i=null),nt(rn)}var rn=L(0);function Bl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||mh(a)||gh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var na=0,ue=null,ke=null,hn=null,Fl=!1,cr=!1,bs=!1,Il=0,bo=0,ur=null,ly=0;function an(){throw Error(s(321))}function uf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!$n(e[a],n[a]))return!1;return!0}function ff(e,n,a,o,u,f){return na=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=e===null||e.memoizedState===null?f0:Af,bs=!1,f=a(o,u),bs=!1,cr&&(f=Dm(n,a,o,u)),wm(e),f}function wm(e){N.H=Ao;var n=ke!==null&&ke.next!==null;if(na=0,hn=ke=ue=null,Fl=!1,bo=0,ur=null,n)throw Error(s(300));e===null||dn||(e=e.dependencies,e!==null&&wl(e)&&(dn=!0))}function Dm(e,n,a,o){ue=e;var u=0;do{if(cr&&(ur=null),bo=0,cr=!1,25<=u)throw Error(s(301));if(u+=1,hn=ke=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=h0,f=n(a,o)}while(cr);return f}function cy(){var e=N.H,n=e.useState()[0];return n=typeof n.then=="function"?Eo(n):n,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(ue.flags|=1024),n}function hf(){var e=Il!==0;return Il=0,e}function df(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function pf(e){if(Fl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Fl=!1}na=0,hn=ke=ue=null,cr=!1,bo=Il=0,ur=null}function Gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?ue.memoizedState=hn=e:hn=hn.next=e,hn}function on(){if(ke===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var n=hn===null?ue.memoizedState:hn.next;if(n!==null)hn=n,ke=e;else{if(e===null)throw ue.alternate===null?Error(s(467)):Error(s(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},hn===null?ue.memoizedState=hn=e:hn=hn.next=e}return hn}function Hl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Eo(e){var n=bo;return bo+=1,ur===null&&(ur=[]),e=ym(ur,e,n),n=ue,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?f0:Af),e}function Gl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Eo(e);if(e.$$typeof===U)return Dn(e)}throw Error(s(438,String(e)))}function mf(e){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ue.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Hl(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function ia(e,n){return typeof n=="function"?n(e):n}function Vl(e){var n=on();return gf(n,ke,e)}function gf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var x=u.next;u.next=f.next,f.next=x}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var R=x=null,G=null,tt=n,dt=!1;do{var vt=tt.lane&-536870913;if(vt!==tt.lane?(be&vt)===vt:(na&vt)===vt){var st=tt.revertLane;if(st===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),vt===ar&&(dt=!0);else if((na&st)===st){tt=tt.next,st===ar&&(dt=!0);continue}else vt={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},G===null?(R=G=vt,x=f):G=G.next=vt,ue.lanes|=st,Va|=st;vt=tt.action,bs&&a(f,vt),f=tt.hasEagerState?tt.eagerState:a(f,vt)}else st={lane:vt,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},G===null?(R=G=st,x=f):G=G.next=st,ue.lanes|=vt,Va|=vt;tt=tt.next}while(tt!==null&&tt!==n);if(G===null?x=f:G.next=R,!$n(f,e.memoizedState)&&(dn=!0,dt&&(a=sr,a!==null)))throw a;e.memoizedState=f,e.baseState=x,e.baseQueue=G,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function _f(e){var n=on(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do f=e(f,x.action),x=x.next;while(x!==u);$n(f,n.memoizedState)||(dn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Um(e,n,a){var o=ue,u=on(),f=Te;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!$n((ke||u).memoizedState,a);if(x&&(u.memoizedState=a,dn=!0),u=u.queue,yf(Om.bind(null,o,u,e),[e]),u.getSnapshot!==n||x||hn!==null&&hn.memoizedState.tag&1){if(o.flags|=2048,fr(9,{destroy:void 0},Lm.bind(null,o,u,a,n),null),je===null)throw Error(s(349));f||(na&127)!==0||Nm(o,n,a)}return a}function Nm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=Hl(),ue.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Lm(e,n,a,o){n.value=a,n.getSnapshot=o,Pm(n)&&zm(e)}function Om(e,n,a){return a(function(){Pm(n)&&zm(e)})}function Pm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!$n(e,a)}catch{return!0}}function zm(e){var n=ps(e,2);n!==null&&Kn(n,e,2)}function vf(e){var n=Gn();if(typeof e=="function"){var a=e;if(e=a(),bs){It(!0);try{a()}finally{It(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:e},n}function Bm(e,n,a,o){return e.baseState=a,gf(e,ke,typeof o=="function"?o:ia)}function uy(e,n,a,o,u){if(Wl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};N.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Fm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Fm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=N.T,x={};N.T=x;try{var R=a(u,o),G=N.S;G!==null&&G(x,R),Im(e,n,R)}catch(tt){xf(e,n,tt)}finally{f!==null&&x.types!==null&&(f.types=x.types),N.T=f}}else try{f=a(u,o),Im(e,n,f)}catch(tt){xf(e,n,tt)}}function Im(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Hm(e,n,o)},function(o){return xf(e,n,o)}):Hm(e,n,a)}function Hm(e,n,a){n.status="fulfilled",n.value=a,Gm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Fm(e,a)))}function xf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Gm(n),n=n.next;while(n!==o)}e.action=null}function Gm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Vm(e,n){return n}function km(e,n){if(Te){var a=je.formState;if(a!==null){t:{var o=ue;if(Te){if(Qe){e:{for(var u=Qe,f=gi;u.nodeType!==8;){if(!f){u=null;break e}if(u=vi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Qe=vi(u.nextSibling),o=u.data==="F!";break t}}La(o)}o=!1}o&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vm,lastRenderedState:n},a.queue=o,a=l0.bind(null,ue,o),o.dispatch=a,o=vf(!1),f=Tf.bind(null,ue,!1,o.queue),o=Gn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=uy.bind(null,ue,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Xm(e){var n=on();return Wm(n,ke,e)}function Wm(e,n,a){if(n=gf(e,n,Vm)[0],e=Vl(ia)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Eo(n)}catch(x){throw x===rr?Nl:x}else o=n;n=on();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ue.flags|=2048,fr(9,{destroy:void 0},fy.bind(null,u,a),null)),[o,f,e]}function fy(e,n){e.action=n}function qm(e){var n=on(),a=ke;if(a!==null)return Wm(n,a,e);on(),n=n.memoizedState,a=on();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function fr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ue.updateQueue,n===null&&(n=Hl(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Ym(){return on().memoizedState}function kl(e,n,a,o){var u=Gn();ue.flags|=e,u.memoizedState=fr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Xl(e,n,a,o){var u=on();o=o===void 0?null:o;var f=u.memoizedState.inst;ke!==null&&o!==null&&uf(o,ke.memoizedState.deps)?u.memoizedState=fr(n,f,a,o):(ue.flags|=e,u.memoizedState=fr(1|n,f,a,o))}function jm(e,n){kl(8390656,8,e,n)}function yf(e,n){Xl(2048,8,e,n)}function hy(e){ue.flags|=4;var n=ue.updateQueue;if(n===null)n=Hl(),ue.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Zm(e){var n=on().memoizedState;return hy({ref:n,nextImpl:e}),function(){if((Pe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Km(e,n){return Xl(4,2,e,n)}function Qm(e,n){return Xl(4,4,e,n)}function Jm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function $m(e,n,a){a=a!=null?a.concat([e]):null,Xl(4,4,Jm.bind(null,n,e),a)}function Sf(){}function t0(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&uf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function e0(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&uf(n,o[1]))return o[0];if(o=e(),bs){It(!0);try{e()}finally{It(!1)}}return a.memoizedState=[o,n],o}function Mf(e,n,a){return a===void 0||(na&1073741824)!==0&&(be&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=ng(),ue.lanes|=e,Va|=e,a)}function n0(e,n,a,o){return $n(a,n)?a:lr.current!==null?(e=Mf(e,a,o),$n(e,n)||(dn=!0),e):(na&42)===0||(na&1073741824)!==0&&(be&261930)===0?(dn=!0,e.memoizedState=a):(e=ng(),ue.lanes|=e,Va|=e,n)}function i0(e,n,a,o,u){var f=I.p;I.p=f!==0&&8>f?f:8;var x=N.T,R={};N.T=R,Tf(e,!1,n,a);try{var G=u(),tt=N.S;if(tt!==null&&tt(R,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var dt=oy(G,o);To(e,n,dt,si(e))}else To(e,n,o,si(e))}catch(vt){To(e,n,{then:function(){},status:"rejected",reason:vt},si())}finally{I.p=f,x!==null&&R.types!==null&&(x.types=R.types),N.T=x}}function dy(){}function bf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=a0(e).queue;i0(e,u,n,J,a===null?dy:function(){return s0(e),a(o)})}function a0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:J},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function s0(e){var n=a0(e);n.next===null&&(n=e.alternate.memoizedState),To(e,n.next.queue,{},si())}function Ef(){return Dn(Vo)}function r0(){return on().memoizedState}function o0(){return on().memoizedState}function py(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=si();e=za(a);var o=Ba(n,e,a);o!==null&&(Kn(o,n,a),yo(o,n,a)),n={cache:Ju()},e.payload=n;return}n=n.return}}function my(e,n,a){var o=si();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Wl(e)?c0(n,a):(a=Gu(e,n,a,o),a!==null&&(Kn(a,e,o),u0(a,n,o)))}function l0(e,n,a){var o=si();To(e,n,a,o)}function To(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Wl(e))c0(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,R=f(x,a);if(u.hasEagerState=!0,u.eagerState=R,$n(R,x))return Tl(e,n,u,0),je===null&&El(),!1}catch{}if(a=Gu(e,n,u,o),a!==null)return Kn(a,e,o),u0(a,n,o),!0}return!1}function Tf(e,n,a,o){if(o={lane:2,revertLane:ih(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Wl(e)){if(n)throw Error(s(479))}else n=Gu(e,a,o,2),n!==null&&Kn(n,e,2)}function Wl(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function c0(e,n){cr=Fl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function u0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,$r(e,a)}}var Ao={readContext:Dn,use:Gl,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};Ao.useEffectEvent=an;var f0={readContext:Dn,use:Gl,useCallback:function(e,n){return Gn().memoizedState=[e,n===void 0?null:n],e},useContext:Dn,useEffect:jm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,kl(4194308,4,Jm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return kl(4194308,4,e,n)},useInsertionEffect:function(e,n){kl(4,2,e,n)},useMemo:function(e,n){var a=Gn();n=n===void 0?null:n;var o=e();if(bs){It(!0);try{e()}finally{It(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Gn();if(a!==void 0){var u=a(n);if(bs){It(!0);try{a(n)}finally{It(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=my.bind(null,ue,e),[o.memoizedState,e]},useRef:function(e){var n=Gn();return e={current:e},n.memoizedState=e},useState:function(e){e=vf(e);var n=e.queue,a=l0.bind(null,ue,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Sf,useDeferredValue:function(e,n){var a=Gn();return Mf(a,e,n)},useTransition:function(){var e=vf(!1);return e=i0.bind(null,ue,e.queue,!0,!1),Gn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ue,u=Gn();if(Te){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),je===null)throw Error(s(349));(be&127)!==0||Nm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,jm(Om.bind(null,o,f,e),[e]),o.flags|=2048,fr(9,{destroy:void 0},Lm.bind(null,o,f,a,n),null),a},useId:function(){var e=Gn(),n=je.identifierPrefix;if(Te){var a=Bi,o=zi;a=(o&~(1<<32-zt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Il++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=ly++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Ef,useFormState:km,useActionState:km,useOptimistic:function(e){var n=Gn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Tf.bind(null,ue,!0,a),a.dispatch=n,[e,n]},useMemoCache:mf,useCacheRefresh:function(){return Gn().memoizedState=py.bind(null,ue)},useEffectEvent:function(e){var n=Gn(),a={impl:e};return n.memoizedState=a,function(){if((Pe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Af={readContext:Dn,use:Gl,useCallback:t0,useContext:Dn,useEffect:yf,useImperativeHandle:$m,useInsertionEffect:Km,useLayoutEffect:Qm,useMemo:e0,useReducer:Vl,useRef:Ym,useState:function(){return Vl(ia)},useDebugValue:Sf,useDeferredValue:function(e,n){var a=on();return n0(a,ke.memoizedState,e,n)},useTransition:function(){var e=Vl(ia)[0],n=on().memoizedState;return[typeof e=="boolean"?e:Eo(e),n]},useSyncExternalStore:Um,useId:r0,useHostTransitionStatus:Ef,useFormState:Xm,useActionState:Xm,useOptimistic:function(e,n){var a=on();return Bm(a,ke,e,n)},useMemoCache:mf,useCacheRefresh:o0};Af.useEffectEvent=Zm;var h0={readContext:Dn,use:Gl,useCallback:t0,useContext:Dn,useEffect:yf,useImperativeHandle:$m,useInsertionEffect:Km,useLayoutEffect:Qm,useMemo:e0,useReducer:_f,useRef:Ym,useState:function(){return _f(ia)},useDebugValue:Sf,useDeferredValue:function(e,n){var a=on();return ke===null?Mf(a,e,n):n0(a,ke.memoizedState,e,n)},useTransition:function(){var e=_f(ia)[0],n=on().memoizedState;return[typeof e=="boolean"?e:Eo(e),n]},useSyncExternalStore:Um,useId:r0,useHostTransitionStatus:Ef,useFormState:qm,useActionState:qm,useOptimistic:function(e,n){var a=on();return ke!==null?Bm(a,ke,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:mf,useCacheRefresh:o0};h0.useEffectEvent=Zm;function Rf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Cf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=si(),u=za(o);u.payload=n,a!=null&&(u.callback=a),n=Ba(e,u,o),n!==null&&(Kn(n,e,o),yo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=si(),u=za(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ba(e,u,o),n!==null&&(Kn(n,e,o),yo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=si(),o=za(a);o.tag=2,n!=null&&(o.callback=n),n=Ba(e,o,a),n!==null&&(Kn(n,e,a),yo(n,e,a))}};function d0(e,n,a,o,u,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,x):n.prototype&&n.prototype.isPureReactComponent?!fo(a,o)||!fo(u,f):!0}function p0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Cf.enqueueReplaceState(n,n.state,null)}function Es(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function m0(e){bl(e)}function g0(e){console.error(e)}function _0(e){bl(e)}function ql(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function v0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function wf(e,n,a){return a=za(a),a.tag=3,a.payload={element:null},a.callback=function(){ql(e,n)},a}function x0(e){return e=za(e),e.tag=3,e}function y0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){v0(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){v0(n,a,o),typeof u!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function gy(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ir(n,a,u,!0),a=ei.current,a!==null){switch(a.tag){case 31:case 13:return _i===null?ac():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ll?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),th(e,o,u)),!1;case 22:return a.flags|=65536,o===Ll?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),th(e,o,u)),!1}throw Error(s(435,a.tag))}return th(e,o,u),ac(),!1}if(Te)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Yu&&(e=Error(s(422),{cause:o}),mo(di(e,a)))):(o!==Yu&&(n=Error(s(423),{cause:o}),mo(di(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=di(o,a),u=wf(e.stateNode,o,u),sf(e,u),sn!==4&&(sn=2)),!1;var f=Error(s(520),{cause:o});if(f=di(f,a),Oo===null?Oo=[f]:Oo.push(f),sn!==4&&(sn=2),n===null)return!0;o=di(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=wf(a.stateNode,o,e),sf(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ka===null||!ka.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=x0(u),y0(u,e,a,o),sf(a,u),!1}a=a.return}while(a!==null);return!1}var Df=Error(s(461)),dn=!1;function Un(e,n,a,o){n.child=e===null?Em(n,null,a,o):Ms(n,e.child,a,o)}function S0(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var x={};for(var R in o)R!=="ref"&&(x[R]=o[R])}else x=o;return vs(n),o=ff(e,n,a,x,f,u),R=hf(),e!==null&&!dn?(df(e,n,u),aa(e,n,u)):(Te&&R&&Wu(n),n.flags|=1,Un(e,n,o,u),n.child)}function M0(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Vu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,b0(e,n,f,o,u)):(e=Rl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Ff(e,u)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:fo,a(x,o)&&e.ref===n.ref)return aa(e,n,u)}return n.flags|=1,e=Ji(f,o),e.ref=n.ref,e.return=n,n.child=e}function b0(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(fo(f,o)&&e.ref===n.ref)if(dn=!1,n.pendingProps=o=f,Ff(e,u))(e.flags&131072)!==0&&(dn=!0);else return n.lanes=e.lanes,aa(e,n,u)}return Uf(e,n,a,o,u)}function E0(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return T0(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ul(n,f!==null?f.cachePool:null),f!==null?Rm(n,f):of(),Cm(n);else return o=n.lanes=536870912,T0(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Ul(n,f.cachePool),Rm(n,f),Ia(),n.memoizedState=null):(e!==null&&Ul(n,null),of(),Ia());return Un(e,n,u,a),n.child}function Ro(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function T0(e,n,a,o,u){var f=tf();return f=f===null?null:{parent:fn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Ul(n,null),of(),Cm(n),e!==null&&ir(e,n,o,!0),n.childLanes=u,null}function Yl(e,n){return n=Zl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function A0(e,n,a){return Ms(n,e.child,null,a),e=Yl(n,n.pendingProps),e.flags|=2,ni(n),n.memoizedState=null,e}function _y(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Te){if(o.mode==="hidden")return e=Yl(n,o),n.lanes=536870912,Ro(null,e);if(cf(n),(e=Qe)?(e=Fg(e,gi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ua!==null?{id:zi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=cm(e),a.return=n,n.child=a,wn=n,Qe=null)):e=null,e===null)throw La(n);return n.lanes=536870912,null}return Yl(n,o)}var f=e.memoizedState;if(f!==null){var x=f.dehydrated;if(cf(n),u)if(n.flags&256)n.flags&=-257,n=A0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(dn||ir(e,n,a,!1),u=(a&e.childLanes)!==0,dn||u){if(o=je,o!==null&&(x=Vs(o,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,ps(e,x),Kn(o,e,x),Df;ac(),n=A0(e,n,a)}else e=f.treeContext,Qe=vi(x.nextSibling),wn=n,Te=!0,Na=null,gi=!1,e!==null&&hm(n,e),n=Yl(n,o),n.flags|=4096;return n}return e=Ji(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function jl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Uf(e,n,a,o,u){return vs(n),a=ff(e,n,a,o,void 0,u),o=hf(),e!==null&&!dn?(df(e,n,u),aa(e,n,u)):(Te&&o&&Wu(n),n.flags|=1,Un(e,n,a,u),n.child)}function R0(e,n,a,o,u,f){return vs(n),n.updateQueue=null,a=Dm(n,o,a,u),wm(e),o=hf(),e!==null&&!dn?(df(e,n,f),aa(e,n,f)):(Te&&o&&Wu(n),n.flags|=1,Un(e,n,a,f),n.child)}function C0(e,n,a,o,u){if(vs(n),n.stateNode===null){var f=$s,x=a.contextType;typeof x=="object"&&x!==null&&(f=Dn(x)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Cf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},nf(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Dn(x):$s,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Rf(n,a,x,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Cf.enqueueReplaceState(f,f.state,null),Mo(n,o,f,u),So(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,G=Es(a,R);f.props=G;var tt=f.context,dt=a.contextType;x=$s,typeof dt=="object"&&dt!==null&&(x=Dn(dt));var vt=a.getDerivedStateFromProps;dt=typeof vt=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||tt!==x)&&p0(n,f,o,x),Pa=!1;var st=n.memoizedState;f.state=st,Mo(n,o,f,u),So(),tt=n.memoizedState,R||st!==tt||Pa?(typeof vt=="function"&&(Rf(n,a,vt,o),tt=n.memoizedState),(G=Pa||d0(n,a,G,o,st,tt,x))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=tt),f.props=o,f.state=tt,f.context=x,o=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,af(e,n),x=n.memoizedProps,dt=Es(a,x),f.props=dt,vt=n.pendingProps,st=f.context,tt=a.contextType,G=$s,typeof tt=="object"&&tt!==null&&(G=Dn(tt)),R=a.getDerivedStateFromProps,(tt=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==vt||st!==G)&&p0(n,f,o,G),Pa=!1,st=n.memoizedState,f.state=st,Mo(n,o,f,u),So();var ot=n.memoizedState;x!==vt||st!==ot||Pa||e!==null&&e.dependencies!==null&&wl(e.dependencies)?(typeof R=="function"&&(Rf(n,a,R,o),ot=n.memoizedState),(dt=Pa||d0(n,a,dt,o,st,ot,G)||e!==null&&e.dependencies!==null&&wl(e.dependencies))?(tt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ot,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ot,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ot),f.props=o,f.state=ot,f.context=G,o=dt):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,jl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Ms(n,e.child,null,u),n.child=Ms(n,null,a,u)):Un(e,n,a,u),n.memoizedState=f.state,e=n.child):e=aa(e,n,u),e}function w0(e,n,a,o){return gs(),n.flags|=256,Un(e,n,a,o),n.child}var Nf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Lf(e){return{baseLanes:e,cachePool:vm()}}function Of(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ai),e}function D0(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Te){if(u?Fa(n):Ia(),(e=Qe)?(e=Fg(e,gi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ua!==null?{id:zi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=cm(e),a.return=n,n.child=a,wn=n,Qe=null)):e=null,e===null)throw La(n);return gh(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Ia(),u=n.mode,R=Zl({mode:"hidden",children:R},u),o=ms(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Lf(a),o.childLanes=Of(e,x,a),n.memoizedState=Nf,Ro(null,o)):(Fa(n),Pf(n,R))}var G=e.memoizedState;if(G!==null&&(R=G.dehydrated,R!==null)){if(f)n.flags&256?(Fa(n),n.flags&=-257,n=zf(e,n,a)):n.memoizedState!==null?(Ia(),n.child=e.child,n.flags|=128,n=null):(Ia(),R=o.fallback,u=n.mode,o=Zl({mode:"visible",children:o.children},u),R=ms(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Ms(n,e.child,null,a),o=n.child,o.memoizedState=Lf(a),o.childLanes=Of(e,x,a),n.memoizedState=Nf,n=Ro(null,o));else if(Fa(n),gh(R)){if(x=R.nextSibling&&R.nextSibling.dataset,x)var tt=x.dgst;x=tt,o=Error(s(419)),o.stack="",o.digest=x,mo({value:o,source:null,stack:null}),n=zf(e,n,a)}else if(dn||ir(e,n,a,!1),x=(a&e.childLanes)!==0,dn||x){if(x=je,x!==null&&(o=Vs(x,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,ps(e,o),Kn(x,e,o),Df;mh(R)||ac(),n=zf(e,n,a)}else mh(R)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,Qe=vi(R.nextSibling),wn=n,Te=!0,Na=null,gi=!1,e!==null&&hm(n,e),n=Pf(n,o.children),n.flags|=4096);return n}return u?(Ia(),R=o.fallback,u=n.mode,G=e.child,tt=G.sibling,o=Ji(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,tt!==null?R=Ji(tt,R):(R=ms(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Ro(null,o),o=n.child,R=e.child.memoizedState,R===null?R=Lf(a):(u=R.cachePool,u!==null?(G=fn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=vm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Of(e,x,a),n.memoizedState=Nf,Ro(e.child,o)):(Fa(n),a=e.child,e=a.sibling,a=Ji(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function Pf(e,n){return n=Zl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Zl(e,n){return e=ti(22,e,null,n),e.lanes=0,e}function zf(e,n,a){return Ms(n,e.child,null,a),e=Pf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function U0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Ku(e.return,n,a)}function Bf(e,n,a,o,u,f){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=f)}function N0(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var x=rn.current,R=(x&2)!==0;if(R?(x=x&1|2,n.flags|=128):x&=1,gt(rn,x),Un(e,n,o,a),o=Te?po:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&U0(e,a,n);else if(e.tag===19)U0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Bl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Bf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Bl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Bf(n,!0,a,null,f,o);break;case"together":Bf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function aa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Va|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(ir(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Ji(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ji(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Ff(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&wl(e)))}function vy(e,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),Oa(n,fn,e.memoizedState.cache),gs();break;case 27:case 5:Ht(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:Oa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,cf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Fa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?D0(e,n,a):(Fa(n),e=aa(e,n,a),e!==null?e.sibling:null);Fa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ir(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return N0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),gt(rn,rn.current),o)break;return null;case 22:return n.lanes=0,E0(e,n,a,n.pendingProps);case 24:Oa(n,fn,e.memoizedState.cache)}return aa(e,n,a)}function L0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)dn=!0;else{if(!Ff(e,a)&&(n.flags&128)===0)return dn=!1,vy(e,n,a);dn=(e.flags&131072)!==0}else dn=!1,Te&&(n.flags&1048576)!==0&&fm(n,po,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=ys(n.elementType),n.type=e,typeof e=="function")Vu(e)?(o=Es(e,o),n.tag=1,n=C0(null,n,e,o,a)):(n.tag=0,n=Uf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=S0(null,n,e,o,a);break t}else if(u===z){n.tag=14,n=M0(null,n,e,o,a);break t}}throw n=ut(e)||e,Error(s(306,n,""))}}return n;case 0:return Uf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Es(o,n.pendingProps),C0(e,n,o,u,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,af(e,n),Mo(n,o,null,a);var x=n.memoizedState;if(o=x.cache,Oa(n,fn,o),o!==f.cache&&Qu(n,[fn],a,!0),So(),o=x.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=w0(e,n,o,a);break t}else if(o!==u){u=di(Error(s(424)),n),mo(u),n=w0(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Qe=vi(e.firstChild),wn=n,Te=!0,Na=null,gi=!0,a=Em(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(gs(),o===u){n=aa(e,n,a);break t}Un(e,n,o,a)}n=n.child}return n;case 26:return jl(e,n),e===null?(a=Xg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(a=n.type,e=n.pendingProps,o=fc(it.current).createElement(a),o[un]=n,o[bn]=e,Nn(o,a,e),C(o),n.stateNode=o):n.memoizedState=Xg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ht(n),e===null&&Te&&(o=n.stateNode=Gg(n.type,n.pendingProps,it.current),wn=n,gi=!0,u=Qe,Ya(n.type)?(_h=u,Qe=vi(o.firstChild)):Qe=u),Un(e,n,n.pendingProps.children,a),jl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Te&&((u=o=Qe)&&(o=jy(o,n.type,n.pendingProps,gi),o!==null?(n.stateNode=o,wn=n,Qe=vi(o.firstChild),gi=!1,u=!0):u=!1),u||La(n)),Ht(n),u=n.type,f=n.pendingProps,x=e!==null?e.memoizedProps:null,o=f.children,hh(u,f)?o=null:x!==null&&hh(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=ff(e,n,cy,null,null,a),Vo._currentValue=u),jl(e,n),Un(e,n,o,a),n.child;case 6:return e===null&&Te&&((e=a=Qe)&&(a=Zy(a,n.pendingProps,gi),a!==null?(n.stateNode=a,wn=n,Qe=null,e=!0):e=!1),e||La(n)),null;case 13:return D0(e,n,a);case 4:return wt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ms(n,null,o,a):Un(e,n,o,a),n.child;case 11:return S0(e,n,n.type,n.pendingProps,a);case 7:return Un(e,n,n.pendingProps,a),n.child;case 8:return Un(e,n,n.pendingProps.children,a),n.child;case 12:return Un(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Oa(n,n.type,o.value),Un(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,vs(n),u=Dn(u),o=o(u),n.flags|=1,Un(e,n,o,a),n.child;case 14:return M0(e,n,n.type,n.pendingProps,a);case 15:return b0(e,n,n.type,n.pendingProps,a);case 19:return N0(e,n,a);case 31:return _y(e,n,a);case 22:return E0(e,n,a,n.pendingProps);case 24:return vs(n),o=Dn(fn),e===null?(u=tf(),u===null&&(u=je,f=Ju(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},nf(n),Oa(n,fn,u)):((e.lanes&a)!==0&&(af(e,n),Mo(n,null,null,a),So()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Oa(n,fn,o)):(o=f.cache,Oa(n,fn,o),o!==u.cache&&Qu(n,[fn],a,!0))),Un(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function sa(e){e.flags|=4}function If(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(rg())e.flags|=8192;else throw Ss=Ll,ef}else e.flags&=-16777217}function O0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Zg(n))if(rg())e.flags|=8192;else throw Ss=Ll,ef}function Kl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Fe():536870912,e.lanes|=n,mr|=n)}function Co(e,n){if(!Te)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Je(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function xy(e,n,a){var o=n.pendingProps;switch(qu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return Je(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ea(fn),kt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(nr(n)?sa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ju())),Je(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(sa(n),f!==null?(Je(n),O0(n,f)):(Je(n),If(n,u,null,o,a))):f?f!==e.memoizedState?(sa(n),Je(n),O0(n,f)):(Je(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&sa(n),Je(n),If(n,u,e,o,a)),null;case 27:if(pe(n),a=it.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&sa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Je(n),null}e=Et.current,nr(n)?dm(n):(e=Gg(u,o,a),n.stateNode=e,sa(n))}return Je(n),null;case 5:if(pe(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&sa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Je(n),null}if(f=Et.current,nr(n))dm(n);else{var x=fc(it.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}f[un]=n,f[bn]=o;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;t:switch(Nn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&sa(n)}}return Je(n),If(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&sa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=it.current,nr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=wn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[un]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Dg(e.nodeValue,a)),e||La(n,!0)}else e=fc(e).createTextNode(o),e[un]=n,n.stateNode=e}return Je(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=nr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[un]=n}else gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),e=!1}else a=ju(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Je(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=nr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[un]=n}else gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),u=!1}else u=ju(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Kl(n,n.updateQueue),Je(n),null);case 4:return kt(),e===null&&oh(n.stateNode.containerInfo),Je(n),null;case 10:return ea(n.type),Je(n),null;case 19:if(nt(rn),o=n.memoizedState,o===null)return Je(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)Co(o,!1);else{if(sn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Bl(e),f!==null){for(n.flags|=128,Co(o,!1),e=f.updateQueue,n.updateQueue=e,Kl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)lm(a,e),a=a.sibling;return gt(rn,rn.current&1|2),Te&&$i(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&b()>ec&&(n.flags|=128,u=!0,Co(o,!1),n.lanes=4194304)}else{if(!u)if(e=Bl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Kl(n,e),Co(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Te)return Je(n),null}else 2*b()-o.renderingStartTime>ec&&a!==536870912&&(n.flags|=128,u=!0,Co(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=b(),e.sibling=null,a=rn.current,gt(rn,u?a&1|2:a&1),Te&&$i(n,o.treeForkCount),e):(Je(n),null);case 22:case 23:return ni(n),lf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),a=n.updateQueue,a!==null&&Kl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&nt(xs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ea(fn),Je(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function yy(e,n){switch(qu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ea(fn),kt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return pe(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(s(340));gs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ni(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));gs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return nt(rn),null;case 4:return kt(),null;case 10:return ea(n.type),null;case 22:case 23:return ni(n),lf(),e!==null&&nt(xs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ea(fn),null;case 25:return null;default:return null}}function P0(e,n){switch(qu(n),n.tag){case 3:ea(fn),kt();break;case 26:case 27:case 5:pe(n);break;case 4:kt();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:nt(rn);break;case 10:ea(n.type);break;case 22:case 23:ni(n),lf(),e!==null&&nt(xs);break;case 24:ea(fn)}}function wo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,x=a.inst;o=f(),x.destroy=o}a=a.next}while(a!==u)}}catch(R){Ge(n,n.return,R)}}function Ha(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var x=o.inst,R=x.destroy;if(R!==void 0){x.destroy=void 0,u=n;var G=a,tt=R;try{tt()}catch(dt){Ge(u,G,dt)}}}o=o.next}while(o!==f)}}catch(dt){Ge(n,n.return,dt)}}function z0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Am(n,a)}catch(o){Ge(e,e.return,o)}}}function B0(e,n,a){a.props=Es(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ge(e,n,o)}}function Do(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ge(e,n,u)}}function Fi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ge(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(e,n,u)}else a.current=null}function F0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ge(e,e.return,u)}}function Hf(e,n,a){try{var o=e.stateNode;Vy(o,e.type,a,n),o[bn]=n}catch(u){Ge(e,e.return,u)}}function I0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ya(e.type)||e.tag===4}function Gf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||I0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ki));else if(o!==4&&(o===27&&Ya(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Vf(e,n,a),e=e.sibling;e!==null;)Vf(e,n,a),e=e.sibling}function Ql(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ya(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ql(e,n,a),e=e.sibling;e!==null;)Ql(e,n,a),e=e.sibling}function H0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Nn(n,o,a),n[un]=e,n[bn]=a}catch(f){Ge(e,e.return,f)}}var ra=!1,pn=!1,kf=!1,G0=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function Sy(e,n){if(e=e.containerInfo,uh=vc,e=$p(e),Pu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,R=-1,G=-1,tt=0,dt=0,vt=e,st=null;e:for(;;){for(var ot;vt!==a||u!==0&&vt.nodeType!==3||(R=x+u),vt!==f||o!==0&&vt.nodeType!==3||(G=x+o),vt.nodeType===3&&(x+=vt.nodeValue.length),(ot=vt.firstChild)!==null;)st=vt,vt=ot;for(;;){if(vt===e)break e;if(st===a&&++tt===u&&(R=x),st===f&&++dt===o&&(G=x),(ot=vt.nextSibling)!==null)break;vt=st,st=vt.parentNode}vt=ot}a=R===-1||G===-1?null:{start:R,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(fh={focusedElem:e,selectionRange:a},vc=!1,Sn=n;Sn!==null;)if(n=Sn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Sn=e;else for(;Sn!==null;){switch(n=Sn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var qt=Es(a.type,u);e=o.getSnapshotBeforeUpdate(qt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Ge(a,a.return,ie)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)ph(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ph(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Sn=e;break}Sn=n.return}}function V0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:la(e,a),o&4&&wo(5,a);break;case 1:if(la(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Ge(a,a.return,x)}else{var u=Es(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Ge(a,a.return,x)}}o&64&&z0(a),o&512&&Do(a,a.return);break;case 3:if(la(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Am(e,n)}catch(x){Ge(a,a.return,x)}}break;case 27:n===null&&o&4&&H0(a);case 26:case 5:la(e,a),n===null&&o&4&&F0(a),o&512&&Do(a,a.return);break;case 12:la(e,a);break;case 31:la(e,a),o&4&&W0(e,a);break;case 13:la(e,a),o&4&&q0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Dy.bind(null,a),Ky(e,a))));break;case 22:if(o=a.memoizedState!==null||ra,!o){n=n!==null&&n.memoizedState!==null||pn,u=ra;var f=pn;ra=o,(pn=n)&&!f?ca(e,a,(a.subtreeFlags&8772)!==0):la(e,a),ra=u,pn=f}break;case 30:break;default:la(e,a)}}function k0(e){var n=e.alternate;n!==null&&(e.alternate=null,k0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&io(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var tn=null,qn=!1;function oa(e,n,a){for(a=a.child;a!==null;)X0(e,n,a),a=a.sibling}function X0(e,n,a){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(bt,a)}catch{}switch(a.tag){case 26:pn||Fi(a,n),oa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:pn||Fi(a,n);var o=tn,u=qn;Ya(a.type)&&(tn=a.stateNode,qn=!1),oa(e,n,a),Io(a.stateNode),tn=o,qn=u;break;case 5:pn||Fi(a,n);case 6:if(o=tn,u=qn,tn=null,oa(e,n,a),tn=o,qn=u,tn!==null)if(qn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode)}catch(f){Ge(a,n,f)}else try{tn.removeChild(a.stateNode)}catch(f){Ge(a,n,f)}break;case 18:tn!==null&&(qn?(e=tn,zg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),br(e)):zg(tn,a.stateNode));break;case 4:o=tn,u=qn,tn=a.stateNode.containerInfo,qn=!0,oa(e,n,a),tn=o,qn=u;break;case 0:case 11:case 14:case 15:Ha(2,a,n),pn||Ha(4,a,n),oa(e,n,a);break;case 1:pn||(Fi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&B0(a,n,o)),oa(e,n,a);break;case 21:oa(e,n,a);break;case 22:pn=(o=pn)||a.memoizedState!==null,oa(e,n,a),pn=o;break;default:oa(e,n,a)}}function W0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{br(e)}catch(a){Ge(n,n.return,a)}}}function q0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{br(e)}catch(a){Ge(n,n.return,a)}}function My(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new G0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new G0),n;default:throw Error(s(435,e.tag))}}function Jl(e,n){var a=My(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Uy.bind(null,e,o);o.then(u,u)}})}function Yn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,x=n,R=x;t:for(;R!==null;){switch(R.tag){case 27:if(Ya(R.type)){tn=R.stateNode,qn=!1;break t}break;case 5:tn=R.stateNode,qn=!1;break t;case 3:case 4:tn=R.stateNode.containerInfo,qn=!0;break t}R=R.return}if(tn===null)throw Error(s(160));X0(f,x,u),tn=null,qn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Y0(n,e),n=n.sibling}var Ci=null;function Y0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Yn(n,e),jn(e),o&4&&(Ha(3,e,e.return),wo(3,e),Ha(5,e,e.return));break;case 1:Yn(n,e),jn(e),o&512&&(pn||a===null||Fi(a,a.return)),o&64&&ra&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ci;if(Yn(n,e),jn(e),o&512&&(pn||a===null||Fi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[cs]||f[un]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Nn(f,o,a),f[un]=e,C(f),o=f;break t;case"link":var x=Yg("link","href",u).get(o+(a.href||""));if(x){for(var R=0;R<x.length;R++)if(f=x[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(R,1);break e}}f=u.createElement(o),Nn(f,o,a),u.head.appendChild(f);break;case"meta":if(x=Yg("meta","content",u).get(o+(a.content||""))){for(R=0;R<x.length;R++)if(f=x[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(R,1);break e}}f=u.createElement(o),Nn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[un]=e,C(f),o=f}e.stateNode=o}else jg(u,e.type,e.stateNode);else e.stateNode=qg(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?jg(u,e.type,e.stateNode):qg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Hf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Yn(n,e),jn(e),o&512&&(pn||a===null||Fi(a,a.return)),a!==null&&o&4&&Hf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Yn(n,e),jn(e),o&512&&(pn||a===null||Fi(a,a.return)),e.flags&32){u=e.stateNode;try{gn(u,"")}catch(qt){Ge(e,e.return,qt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Hf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(kf=!0);break;case 6:if(Yn(n,e),jn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(qt){Ge(e,e.return,qt)}}break;case 3:if(pc=null,u=Ci,Ci=hc(n.containerInfo),Yn(n,e),Ci=u,jn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{br(n.containerInfo)}catch(qt){Ge(e,e.return,qt)}kf&&(kf=!1,j0(e));break;case 4:o=Ci,Ci=hc(e.stateNode.containerInfo),Yn(n,e),jn(e),Ci=o;break;case 12:Yn(n,e),jn(e);break;case 31:Yn(n,e),jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Jl(e,o)));break;case 13:Yn(n,e),jn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(tc=b()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Jl(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,tt=ra,dt=pn;if(ra=tt||u,pn=dt||G,Yn(n,e),pn=dt,ra=tt,jn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||ra||pn||Ts(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,u)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{R=G.stateNode;var vt=G.memoizedProps.style,st=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;R.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(qt){Ge(G,G.return,qt)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(qt){Ge(G,G.return,qt)}}}else if(n.tag===18){if(a===null){G=n;try{var ot=G.stateNode;u?Bg(ot,!0):Bg(G.stateNode,!1)}catch(qt){Ge(G,G.return,qt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Jl(e,a))));break;case 19:Yn(n,e),jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Jl(e,o)));break;case 30:break;case 21:break;default:Yn(n,e),jn(e)}}function jn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(I0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Gf(e);Ql(e,f,u);break;case 5:var x=a.stateNode;a.flags&32&&(gn(x,""),a.flags&=-33);var R=Gf(e);Ql(e,R,x);break;case 3:case 4:var G=a.stateNode.containerInfo,tt=Gf(e);Vf(e,tt,G);break;default:throw Error(s(161))}}catch(dt){Ge(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function j0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;j0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function la(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)V0(e,n.alternate,n),n=n.sibling}function Ts(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ha(4,n,n.return),Ts(n);break;case 1:Fi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&B0(n,n.return,a),Ts(n);break;case 27:Io(n.stateNode);case 26:case 5:Fi(n,n.return),Ts(n);break;case 22:n.memoizedState===null&&Ts(n);break;case 30:Ts(n);break;default:Ts(n)}e=e.sibling}}function ca(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:ca(u,f,a),wo(4,f);break;case 1:if(ca(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(tt){Ge(o,o.return,tt)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)Tm(G[u],R)}catch(tt){Ge(o,o.return,tt)}}a&&x&64&&z0(f),Do(f,f.return);break;case 27:H0(f);case 26:case 5:ca(u,f,a),a&&o===null&&x&4&&F0(f),Do(f,f.return);break;case 12:ca(u,f,a);break;case 31:ca(u,f,a),a&&x&4&&W0(u,f);break;case 13:ca(u,f,a),a&&x&4&&q0(u,f);break;case 22:f.memoizedState===null&&ca(u,f,a),Do(f,f.return);break;case 30:break;default:ca(u,f,a)}n=n.sibling}}function Xf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&go(a))}function Wf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&go(e))}function wi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Z0(e,n,a,o),n=n.sibling}function Z0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:wi(e,n,a,o),u&2048&&wo(9,n);break;case 1:wi(e,n,a,o);break;case 3:wi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&go(e)));break;case 12:if(u&2048){wi(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,x=f.id,R=f.onPostCommit;typeof R=="function"&&R(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Ge(n,n.return,G)}}else wi(e,n,a,o);break;case 31:wi(e,n,a,o);break;case 13:wi(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?wi(e,n,a,o):Uo(e,n):f._visibility&2?wi(e,n,a,o):(f._visibility|=2,hr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Xf(x,n);break;case 24:wi(e,n,a,o),u&2048&&Wf(n.alternate,n);break;default:wi(e,n,a,o)}}function hr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,x=n,R=a,G=o,tt=x.flags;switch(x.tag){case 0:case 11:case 15:hr(f,x,R,G,u),wo(8,x);break;case 23:break;case 22:var dt=x.stateNode;x.memoizedState!==null?dt._visibility&2?hr(f,x,R,G,u):Uo(f,x):(dt._visibility|=2,hr(f,x,R,G,u)),u&&tt&2048&&Xf(x.alternate,x);break;case 24:hr(f,x,R,G,u),u&&tt&2048&&Wf(x.alternate,x);break;default:hr(f,x,R,G,u)}n=n.sibling}}function Uo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Uo(a,o),u&2048&&Xf(o.alternate,o);break;case 24:Uo(a,o),u&2048&&Wf(o.alternate,o);break;default:Uo(a,o)}n=n.sibling}}var No=8192;function dr(e,n,a){if(e.subtreeFlags&No)for(e=e.child;e!==null;)K0(e,n,a),e=e.sibling}function K0(e,n,a){switch(e.tag){case 26:dr(e,n,a),e.flags&No&&e.memoizedState!==null&&lS(a,Ci,e.memoizedState,e.memoizedProps);break;case 5:dr(e,n,a);break;case 3:case 4:var o=Ci;Ci=hc(e.stateNode.containerInfo),dr(e,n,a),Ci=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=No,No=16777216,dr(e,n,a),No=o):dr(e,n,a));break;default:dr(e,n,a)}}function Q0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Lo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,$0(o,e)}Q0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)J0(e),e=e.sibling}function J0(e){switch(e.tag){case 0:case 11:case 15:Lo(e),e.flags&2048&&Ha(9,e,e.return);break;case 3:Lo(e);break;case 12:Lo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,$l(e)):Lo(e);break;default:Lo(e)}}function $l(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,$0(o,e)}Q0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ha(8,n,n.return),$l(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,$l(n));break;default:$l(n)}e=e.sibling}}function $0(e,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Ha(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:go(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Sn=o;else t:for(a=e;Sn!==null;){o=Sn;var u=o.sibling,f=o.return;if(k0(o),o===a){Sn=null;break t}if(u!==null){u.return=f,Sn=u;break t}Sn=f}}}var by={getCacheForType:function(e){var n=Dn(fn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Dn(fn).controller.signal}},Ey=typeof WeakMap=="function"?WeakMap:Map,Pe=0,je=null,Se=null,be=0,He=0,ii=null,Ga=!1,pr=!1,qf=!1,ua=0,sn=0,Va=0,As=0,Yf=0,ai=0,mr=0,Oo=null,Zn=null,jf=!1,tc=0,tg=0,ec=1/0,nc=null,ka=null,_n=0,Xa=null,gr=null,fa=0,Zf=0,Kf=null,eg=null,Po=0,Qf=null;function si(){return(Pe&2)!==0&&be!==0?be&-be:N.T!==null?ih():eo()}function ng(){if(ai===0)if((be&536870912)===0||Te){var e=At;At<<=1,(At&3932160)===0&&(At=262144),ai=e}else ai=536870912;return e=ei.current,e!==null&&(e.flags|=32),ai}function Kn(e,n,a){(e===je&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(_r(e,0),Wa(e,be,ai,!1)),Pn(e,a),((Pe&2)===0||e!==je)&&(e===je&&((Pe&2)===0&&(As|=a),sn===4&&Wa(e,be,ai,!1)),Ii(e))}function ig(e,n,a){if((Pe&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ct(e,n),u=o?Ry(e,n):$f(e,n,!0),f=o;do{if(u===0){pr&&!o&&Wa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Ty(a)){u=$f(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var R=e;u=Oo;var G=R.current.memoizedState.isDehydrated;if(G&&(_r(R,x).flags|=256),x=$f(R,x,!1),x!==2){if(qf&&!G){R.errorRecoveryDisabledLanes|=f,As|=f,u=4;break t}f=Zn,Zn=u,f!==null&&(Zn===null?Zn=f:Zn.push.apply(Zn,f))}u=x}if(f=!1,u!==2)continue}}if(u===1){_r(e,0),Wa(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Wa(o,n,ai,!Ga);break t;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=tc+300-b(),10<u)){if(Wa(o,n,ai,!Ga),xt(o,0,!0)!==0)break t;fa=n,o.timeoutHandle=Og(ag.bind(null,o,a,Zn,nc,jf,n,ai,As,mr,Ga,f,"Throttled",-0,0),u);break t}ag(o,a,Zn,nc,jf,n,ai,As,mr,Ga,f,null,-0,0)}}break}while(!0);Ii(e)}function ag(e,n,a,o,u,f,x,R,G,tt,dt,vt,st,ot){if(e.timeoutHandle=-1,vt=n.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ki},K0(n,f,vt);var qt=(f&62914560)===f?tc-b():(f&4194048)===f?tg-b():0;if(qt=cS(vt,qt),qt!==null){fa=f,e.cancelPendingCommit=qt(hg.bind(null,e,n,f,a,o,u,x,R,G,dt,vt,null,st,ot)),Wa(e,f,x,!tt);return}}hg(e,n,f,a,o,u,x,R,G)}function Ty(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!$n(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Wa(e,n,a,o){n&=~Yf,n&=~As,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-zt(u),x=1<<f;o[f]=-1,u&=~x}a!==0&&pl(e,a,n)}function ic(){return(Pe&6)===0?(zo(0),!1):!0}function Jf(){if(Se!==null){if(He===0)var e=Se.return;else e=Se,ta=_s=null,pf(e),or=null,vo=0,e=Se;for(;e!==null;)P0(e.alternate,e),e=e.return;Se=null}}function _r(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Wy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),fa=0,Jf(),je=e,Se=a=Ji(e.current,null),be=n,He=0,ii=null,Ga=!1,pr=Ct(e,n),qf=!1,mr=ai=Yf=As=Va=sn=0,Zn=Oo=null,jf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-zt(o),f=1<<u;n|=e[u],o&=~f}return ua=n,El(),a}function sg(e,n){ue=null,N.H=Ao,n===rr||n===Nl?(n=Sm(),He=3):n===ef?(n=Sm(),He=4):He=n===Df?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,Se===null&&(sn=1,ql(e,di(n,e.current)))}function rg(){var e=ei.current;return e===null?!0:(be&4194048)===be?_i===null:(be&62914560)===be||(be&536870912)!==0?e===_i:!1}function og(){var e=N.H;return N.H=Ao,e===null?Ao:e}function lg(){var e=N.A;return N.A=by,e}function ac(){sn=4,Ga||(be&4194048)!==be&&ei.current!==null||(pr=!0),(Va&134217727)===0&&(As&134217727)===0||je===null||Wa(je,be,ai,!1)}function $f(e,n,a){var o=Pe;Pe|=2;var u=og(),f=lg();(je!==e||be!==n)&&(nc=null,_r(e,n)),n=!1;var x=sn;t:do try{if(He!==0&&Se!==null){var R=Se,G=ii;switch(He){case 8:Jf(),x=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var tt=He;if(He=0,ii=null,vr(e,R,G,tt),a&&pr){x=0;break t}break;default:tt=He,He=0,ii=null,vr(e,R,G,tt)}}Ay(),x=sn;break}catch(dt){sg(e,dt)}while(!0);return n&&e.shellSuspendCounter++,ta=_s=null,Pe=o,N.H=u,N.A=f,Se===null&&(je=null,be=0,El()),x}function Ay(){for(;Se!==null;)cg(Se)}function Ry(e,n){var a=Pe;Pe|=2;var o=og(),u=lg();je!==e||be!==n?(nc=null,ec=b()+500,_r(e,n)):pr=Ct(e,n);t:do try{if(He!==0&&Se!==null){n=Se;var f=ii;e:switch(He){case 1:He=0,ii=null,vr(e,n,f,1);break;case 2:case 9:if(xm(f)){He=0,ii=null,ug(n);break}n=function(){He!==2&&He!==9||je!==e||(He=7),Ii(e)},f.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:xm(f)?(He=0,ii=null,ug(n)):(He=0,ii=null,vr(e,n,f,7));break;case 5:var x=null;switch(Se.tag){case 26:x=Se.memoizedState;case 5:case 27:var R=Se;if(x?Zg(x):R.stateNode.complete){He=0,ii=null;var G=R.sibling;if(G!==null)Se=G;else{var tt=R.return;tt!==null?(Se=tt,sc(tt)):Se=null}break e}}He=0,ii=null,vr(e,n,f,5);break;case 6:He=0,ii=null,vr(e,n,f,6);break;case 8:Jf(),sn=6;break t;default:throw Error(s(462))}}Cy();break}catch(dt){sg(e,dt)}while(!0);return ta=_s=null,N.H=o,N.A=u,Pe=a,Se!==null?0:(je=null,be=0,El(),sn)}function Cy(){for(;Se!==null&&!Yt();)cg(Se)}function cg(e){var n=L0(e.alternate,e,ua);e.memoizedProps=e.pendingProps,n===null?sc(e):Se=n}function ug(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=R0(a,n,n.pendingProps,n.type,void 0,be);break;case 11:n=R0(a,n,n.pendingProps,n.type.render,n.ref,be);break;case 5:pf(n);default:P0(a,n),n=Se=lm(n,ua),n=L0(a,n,ua)}e.memoizedProps=e.pendingProps,n===null?sc(e):Se=n}function vr(e,n,a,o){ta=_s=null,pf(n),or=null,vo=0;var u=n.return;try{if(gy(e,u,n,a,be)){sn=1,ql(e,di(a,e.current)),Se=null;return}}catch(f){if(u!==null)throw Se=u,f;sn=1,ql(e,di(a,e.current)),Se=null;return}n.flags&32768?(Te||o===1?e=!0:pr||(be&536870912)!==0?e=!1:(Ga=e=!0,(o===2||o===9||o===3||o===6)&&(o=ei.current,o!==null&&o.tag===13&&(o.flags|=16384))),fg(n,e)):sc(n)}function sc(e){var n=e;do{if((n.flags&32768)!==0){fg(n,Ga);return}e=n.return;var a=xy(n.alternate,n,ua);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=e}while(n!==null);sn===0&&(sn=5)}function fg(e,n){do{var a=yy(e.alternate,e);if(a!==null){a.flags&=32767,Se=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Se=e;return}Se=e=a}while(e!==null);sn=6,Se=null}function hg(e,n,a,o,u,f,x,R,G){e.cancelPendingCommit=null;do rc();while(_n!==0);if((Pe&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Hu,Ei(e,a,f,x,R,G),e===je&&(Se=je=null,be=0),gr=n,Xa=e,fa=a,Zf=f,Kf=u,eg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ny(ft,function(){return _g(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=N.T,N.T=null,u=I.p,I.p=2,x=Pe,Pe|=4;try{Sy(e,n,a)}finally{Pe=x,I.p=u,N.T=o}}_n=1,dg(),pg(),mg()}}function dg(){if(_n===1){_n=0;var e=Xa,n=gr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var o=I.p;I.p=2;var u=Pe;Pe|=4;try{Y0(n,e);var f=fh,x=$p(e.containerInfo),R=f.focusedElem,G=f.selectionRange;if(x!==R&&R&&R.ownerDocument&&Jp(R.ownerDocument.documentElement,R)){if(G!==null&&Pu(R)){var tt=G.start,dt=G.end;if(dt===void 0&&(dt=tt),"selectionStart"in R)R.selectionStart=tt,R.selectionEnd=Math.min(dt,R.value.length);else{var vt=R.ownerDocument||document,st=vt&&vt.defaultView||window;if(st.getSelection){var ot=st.getSelection(),qt=R.textContent.length,ie=Math.min(G.start,qt),We=G.end===void 0?ie:Math.min(G.end,qt);!ot.extend&&ie>We&&(x=We,We=ie,ie=x);var Z=Qp(R,ie),X=Qp(R,We);if(Z&&X&&(ot.rangeCount!==1||ot.anchorNode!==Z.node||ot.anchorOffset!==Z.offset||ot.focusNode!==X.node||ot.focusOffset!==X.offset)){var $=vt.createRange();$.setStart(Z.node,Z.offset),ot.removeAllRanges(),ie>We?(ot.addRange($),ot.extend(X.node,X.offset)):($.setEnd(X.node,X.offset),ot.addRange($))}}}}for(vt=[],ot=R;ot=ot.parentNode;)ot.nodeType===1&&vt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<vt.length;R++){var _t=vt[R];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}vc=!!uh,fh=uh=null}finally{Pe=u,I.p=o,N.T=a}}e.current=n,_n=2}}function pg(){if(_n===2){_n=0;var e=Xa,n=gr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var o=I.p;I.p=2;var u=Pe;Pe|=4;try{V0(e,n.alternate,n)}finally{Pe=u,I.p=o,N.T=a}}_n=3}}function mg(){if(_n===4||_n===3){_n=0,O();var e=Xa,n=gr,a=fa,o=eg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?_n=5:(_n=0,gr=Xa=null,gg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ka=null),ks(a),n=n.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(bt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=N.T,u=I.p,I.p=2,N.T=null;try{for(var f=e.onRecoverableError,x=0;x<o.length;x++){var R=o[x];f(R.value,{componentStack:R.stack})}}finally{N.T=n,I.p=u}}(fa&3)!==0&&rc(),Ii(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Qf?Po++:(Po=0,Qf=e):Po=0,zo(0)}}function gg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,go(n)))}function rc(){return dg(),pg(),mg(),_g()}function _g(){if(_n!==5)return!1;var e=Xa,n=Zf;Zf=0;var a=ks(fa),o=N.T,u=I.p;try{I.p=32>a?32:a,N.T=null,a=Kf,Kf=null;var f=Xa,x=fa;if(_n=0,gr=Xa=null,fa=0,(Pe&6)!==0)throw Error(s(331));var R=Pe;if(Pe|=4,J0(f.current),Z0(f,f.current,x,a),Pe=R,zo(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(bt,f)}catch{}return!0}finally{I.p=u,N.T=o,gg(e,n)}}function vg(e,n,a){n=di(a,n),n=wf(e.stateNode,n,2),e=Ba(e,n,2),e!==null&&(Pn(e,2),Ii(e))}function Ge(e,n,a){if(e.tag===3)vg(e,e,a);else for(;n!==null;){if(n.tag===3){vg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ka===null||!ka.has(o))){e=di(a,e),a=x0(2),o=Ba(n,a,2),o!==null&&(y0(a,o,n,e),Pn(o,2),Ii(o));break}}n=n.return}}function th(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Ey;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(qf=!0,u.add(a),e=wy.bind(null,e,n,a),n.then(e,e))}function wy(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,je===e&&(be&a)===a&&(sn===4||sn===3&&(be&62914560)===be&&300>b()-tc?(Pe&2)===0&&_r(e,0):Yf|=a,mr===be&&(mr=0)),Ii(e)}function xg(e,n){n===0&&(n=Fe()),e=ps(e,n),e!==null&&(Pn(e,n),Ii(e))}function Dy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),xg(e,a)}function Uy(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),xg(e,a)}function Ny(e,n){return ye(e,n)}var oc=null,xr=null,eh=!1,lc=!1,nh=!1,qa=0;function Ii(e){e!==xr&&e.next===null&&(xr===null?oc=xr=e:xr=xr.next=e),lc=!0,eh||(eh=!0,Oy())}function zo(e,n){if(!nh&&lc){nh=!0;do for(var a=!1,o=oc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var x=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-zt(42|e)+1)-1,f&=u&~(x&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,bg(o,f))}else f=be,f=xt(o,o===je?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ct(o,f)||(a=!0,bg(o,f));o=o.next}while(a);nh=!1}}function Ly(){yg()}function yg(){lc=eh=!1;var e=0;qa!==0&&Xy()&&(e=qa);for(var n=b(),a=null,o=oc;o!==null;){var u=o.next,f=Sg(o,n);f===0?(o.next=null,a===null?oc=u:a.next=u,u===null&&(xr=a)):(a=o,(e!==0||(f&3)!==0)&&(lc=!0)),o=u}_n!==0&&_n!==5||zo(e),qa!==0&&(qa=0)}function Sg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-zt(f),R=1<<x,G=u[x];G===-1?((R&a)===0||(R&o)!==0)&&(u[x]=re(R,n)):G<=n&&(e.expiredLanes|=R),f&=~R}if(n=je,a=be,a=xt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(He===2||He===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ve(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ct(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&ve(o),ks(a)){case 2:case 8:a=yt;break;case 32:a=ft;break;case 268435456:a=Dt;break;default:a=ft}return o=Mg.bind(null,e),a=ye(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&ve(o),e.callbackPriority=2,e.callbackNode=null,2}function Mg(e,n){if(_n!==0&&_n!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(rc()&&e.callbackNode!==a)return null;var o=be;return o=xt(e,e===je?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(ig(e,o,n),Sg(e,b()),e.callbackNode!=null&&e.callbackNode===a?Mg.bind(null,e):null)}function bg(e,n){if(rc())return null;ig(e,n,!0)}function Oy(){qy(function(){(Pe&6)!==0?ye(pt,Ly):yg()})}function ih(){if(qa===0){var e=ar;e===0&&(e=Lt,Lt<<=1,(Lt&261888)===0&&(Lt=256)),qa=e}return qa}function Eg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:gl(""+e)}function Tg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Py(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Eg((u[bn]||null).action),x=o.submitter;x&&(n=(n=x[bn]||null)?Eg(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var R=new yl("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(qa!==0){var G=x?Tg(u,x):new FormData(u);bf(a,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(R.preventDefault(),G=x?Tg(u,x):new FormData(u),bf(a,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var ah=0;ah<Iu.length;ah++){var sh=Iu[ah],zy=sh.toLowerCase(),By=sh[0].toUpperCase()+sh.slice(1);Ri(zy,"on"+By)}Ri(nm,"onAnimationEnd"),Ri(im,"onAnimationIteration"),Ri(am,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri($x,"onTransitionRun"),Ri(ty,"onTransitionStart"),Ri(ey,"onTransitionCancel"),Ri(sm,"onTransitionEnd"),K("onMouseEnter",["mouseout","mouseover"]),K("onMouseLeave",["mouseout","mouseover"]),K("onPointerEnter",["pointerout","pointerover"]),K("onPointerLeave",["pointerout","pointerover"]),at("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),at("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),at("onBeforeInput",["compositionend","keypress","textInput","paste"]),at("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bo));function Ag(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var x=o.length-1;0<=x;x--){var R=o[x],G=R.instance,tt=R.currentTarget;if(R=R.listener,G!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=tt;try{f(u)}catch(dt){bl(dt)}u.currentTarget=null,f=G}else for(x=0;x<o.length;x++){if(R=o[x],G=R.instance,tt=R.currentTarget,R=R.listener,G!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=tt;try{f(u)}catch(dt){bl(dt)}u.currentTarget=null,f=G}}}}function Me(e,n){var a=n[Xs];a===void 0&&(a=n[Xs]=new Set);var o=e+"__bubble";a.has(o)||(Rg(n,e,2,!1),a.add(o))}function rh(e,n,a){var o=0;n&&(o|=4),Rg(a,e,o,n)}var cc="_reactListening"+Math.random().toString(36).slice(2);function oh(e){if(!e[cc]){e[cc]=!0,j.forEach(function(a){a!=="selectionchange"&&(Fy.has(a)||rh(a,!1,e),rh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[cc]||(n[cc]=!0,rh("selectionchange",!1,n))}}function Rg(e,n,a,o){switch(n_(n)){case 2:var u=hS;break;case 8:u=dS;break;default:u=Mh}a=u.bind(null,n,a,e),u=void 0,!Au||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function lh(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var R=o.stateNode.containerInfo;if(R===u)break;if(x===4)for(x=o.return;x!==null;){var G=x.tag;if((G===3||G===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;R!==null;){if(x=Ra(R),x===null)return;if(G=x.tag,G===5||G===6||G===26||G===27){o=f=x;continue t}R=R.parentNode}}o=o.return}Np(function(){var tt=f,dt=Eu(a),vt=[];t:{var st=rm.get(e);if(st!==void 0){var ot=yl,qt=e;switch(e){case"keypress":if(vl(a)===0)break t;case"keydown":case"keyup":ot=Ux;break;case"focusin":qt="focus",ot=Du;break;case"focusout":qt="blur",ot=Du;break;case"beforeblur":case"afterblur":ot=Du;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Pp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=xx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Ox;break;case nm:case im:case am:ot=Mx;break;case sm:ot=zx;break;case"scroll":case"scrollend":ot=_x;break;case"wheel":ot=Fx;break;case"copy":case"cut":case"paste":ot=Ex;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Bp;break;case"toggle":case"beforetoggle":ot=Hx}var ie=(n&4)!==0,We=!ie&&(e==="scroll"||e==="scrollend"),Z=ie?st!==null?st+"Capture":null:st;ie=[];for(var X=tt,$;X!==null;){var _t=X;if($=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||$===null||Z===null||(_t=ao(X,Z),_t!=null&&ie.push(Fo(X,_t,$))),We)break;X=X.return}0<ie.length&&(st=new ot(st,qt,null,a,dt),vt.push({event:st,listeners:ie}))}}if((n&7)===0){t:{if(st=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",st&&a!==bu&&(qt=a.relatedTarget||a.fromElement)&&(Ra(qt)||qt[Ti]))break t;if((ot||st)&&(st=dt.window===dt?dt:(st=dt.ownerDocument)?st.defaultView||st.parentWindow:window,ot?(qt=a.relatedTarget||a.toElement,ot=tt,qt=qt?Ra(qt):null,qt!==null&&(We=c(qt),ie=qt.tag,qt!==We||ie!==5&&ie!==27&&ie!==6)&&(qt=null)):(ot=null,qt=tt),ot!==qt)){if(ie=Pp,_t="onMouseLeave",Z="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(ie=Bp,_t="onPointerLeave",Z="onPointerEnter",X="pointer"),We=ot==null?st:us(ot),$=qt==null?st:us(qt),st=new ie(_t,X+"leave",ot,a,dt),st.target=We,st.relatedTarget=$,_t=null,Ra(dt)===tt&&(ie=new ie(Z,X+"enter",qt,a,dt),ie.target=$,ie.relatedTarget=We,_t=ie),We=_t,ot&&qt)e:{for(ie=Iy,Z=ot,X=qt,$=0,_t=Z;_t;_t=ie(_t))$++;_t=0;for(var te=X;te;te=ie(te))_t++;for(;0<$-_t;)Z=ie(Z),$--;for(;0<_t-$;)X=ie(X),_t--;for(;$--;){if(Z===X||X!==null&&Z===X.alternate){ie=Z;break e}Z=ie(Z),X=ie(X)}ie=null}else ie=null;ot!==null&&Cg(vt,st,ot,ie,!1),qt!==null&&We!==null&&Cg(vt,We,qt,ie,!0)}}t:{if(st=tt?us(tt):window,ot=st.nodeName&&st.nodeName.toLowerCase(),ot==="select"||ot==="input"&&st.type==="file")var Ue=Wp;else if(kp(st))if(qp)Ue=Kx;else{Ue=jx;var Qt=Yx}else ot=st.nodeName,!ot||ot.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?tt&&Ai(tt.elementType)&&(Ue=Wp):Ue=Zx;if(Ue&&(Ue=Ue(e,tt))){Xp(vt,Ue,a,dt);break t}Qt&&Qt(e,st,tt),e==="focusout"&&tt&&st.type==="number"&&tt.memoizedProps.value!=null&&Tn(st,"number",st.value)}switch(Qt=tt?us(tt):window,e){case"focusin":(kp(Qt)||Qt.contentEditable==="true")&&(Ks=Qt,zu=tt,ho=null);break;case"focusout":ho=zu=Ks=null;break;case"mousedown":Bu=!0;break;case"contextmenu":case"mouseup":case"dragend":Bu=!1,tm(vt,a,dt);break;case"selectionchange":if(Jx)break;case"keydown":case"keyup":tm(vt,a,dt)}var he;if(Nu)t:{switch(e){case"compositionstart":var Ee="onCompositionStart";break t;case"compositionend":Ee="onCompositionEnd";break t;case"compositionupdate":Ee="onCompositionUpdate";break t}Ee=void 0}else Zs?Gp(e,a)&&(Ee="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(Fp&&a.locale!=="ko"&&(Zs||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Zs&&(he=Lp()):(Da=dt,Ru="value"in Da?Da.value:Da.textContent,Zs=!0)),Qt=uc(tt,Ee),0<Qt.length&&(Ee=new zp(Ee,e,null,a,dt),vt.push({event:Ee,listeners:Qt}),he?Ee.data=he:(he=Vp(a),he!==null&&(Ee.data=he)))),(he=Vx?kx(e,a):Xx(e,a))&&(Ee=uc(tt,"onBeforeInput"),0<Ee.length&&(Qt=new zp("onBeforeInput","beforeinput",null,a,dt),vt.push({event:Qt,listeners:Ee}),Qt.data=he)),Py(vt,e,tt,a,dt)}Ag(vt,n)})}function Fo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function uc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=ao(e,a),u!=null&&o.unshift(Fo(e,u,f)),u=ao(e,n),u!=null&&o.push(Fo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function Iy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Cg(e,n,a,o,u){for(var f=n._reactName,x=[];a!==null&&a!==o;){var R=a,G=R.alternate,tt=R.stateNode;if(R=R.tag,G!==null&&G===o)break;R!==5&&R!==26&&R!==27||tt===null||(G=tt,u?(tt=ao(a,f),tt!=null&&x.unshift(Fo(a,tt,G))):u||(tt=ao(a,f),tt!=null&&x.push(Fo(a,tt,G)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var Hy=/\r\n?/g,Gy=/\u0000|\uFFFD/g;function wg(e){return(typeof e=="string"?e:""+e).replace(Hy,`
`).replace(Gy,"")}function Dg(e,n){return n=wg(n),wg(e)===n}function Xe(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||gn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&gn(e,""+o);break;case"className":ee(e,"class",o);break;case"tabIndex":ee(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ee(e,a,o);break;case"style":qs(e,o,f);break;case"data":if(n!=="object"){ee(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=gl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xe(e,n,"name",u.name,u,null),Xe(e,n,"formEncType",u.formEncType,u,null),Xe(e,n,"formMethod",u.formMethod,u,null),Xe(e,n,"formTarget",u.formTarget,u,null)):(Xe(e,n,"encType",u.encType,u,null),Xe(e,n,"method",u.method,u,null),Xe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=gl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Ki);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=gl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Me("beforetoggle",e),Me("toggle",e),Zt(e,"popover",o);break;case"xlinkActuate":Kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Kt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Kt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Kt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Kt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Zt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=mx.get(a)||a,Zt(e,a,o))}}function ch(e,n,a,o,u,f){switch(a){case"style":qs(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?gn(e,o):(typeof o=="number"||typeof o=="bigint")&&gn(e,""+o);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[bn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Zt(e,a,o)}}}function Nn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,f,x,a,null)}}u&&Xe(e,n,"srcSet",a.srcSet,a,null),o&&Xe(e,n,"src",a.src,a,null);return;case"input":Me("invalid",e);var R=f=x=u=null,G=null,tt=null;for(o in a)if(a.hasOwnProperty(o)){var dt=a[o];if(dt!=null)switch(o){case"name":u=dt;break;case"type":x=dt;break;case"checked":G=dt;break;case"defaultChecked":tt=dt;break;case"value":f=dt;break;case"defaultValue":R=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:Xe(e,n,o,dt,a,null)}}Zi(e,f,R,G,tt,x,u,!1);return;case"select":Me("invalid",e),o=x=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":x=R;break;case"multiple":o=R;default:Xe(e,n,u,R,a,null)}n=f,a=x,e.multiple=!!o,n!=null?fi(e,!!o,n,!1):a!=null&&fi(e,!!o,a,!0);return;case"textarea":Me("invalid",e),f=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(R=a[x],R!=null))switch(x){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Xe(e,n,x,R,a,null)}An(e,o,u,f);return;case"option":for(G in a)a.hasOwnProperty(G)&&(o=a[G],o!=null)&&(G==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Xe(e,n,G,o,a,null));return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(o=0;o<Bo.length;o++)Me(Bo[o],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(o=a[tt],o!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,tt,o,a,null)}return;default:if(Ai(n)){for(dt in a)a.hasOwnProperty(dt)&&(o=a[dt],o!==void 0&&ch(e,n,dt,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Xe(e,n,R,o,a,null))}function Vy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,x=null,R=null,G=null,tt=null,dt=null;for(ot in a){var vt=a[ot];if(a.hasOwnProperty(ot)&&vt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":G=vt;default:o.hasOwnProperty(ot)||Xe(e,n,ot,null,o,vt)}}for(var st in o){var ot=o[st];if(vt=a[st],o.hasOwnProperty(st)&&(ot!=null||vt!=null))switch(st){case"type":f=ot;break;case"name":u=ot;break;case"checked":tt=ot;break;case"defaultChecked":dt=ot;break;case"value":x=ot;break;case"defaultValue":R=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:ot!==vt&&Xe(e,n,st,ot,o,vt)}}En(e,x,R,G,tt,dt,f,u);return;case"select":ot=x=R=st=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":ot=G;default:o.hasOwnProperty(f)||Xe(e,n,f,null,o,G)}for(u in o)if(f=o[u],G=a[u],o.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":st=f;break;case"defaultValue":R=f;break;case"multiple":x=f;default:f!==G&&Xe(e,n,u,f,o,G)}n=R,a=x,o=ot,st!=null?fi(e,!!a,st,!1):!!o!=!!a&&(n!=null?fi(e,!!a,n,!0):fi(e,!!a,a?[]:"",!1));return;case"textarea":ot=st=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Xe(e,n,R,null,o,u)}for(x in o)if(u=o[x],f=a[x],o.hasOwnProperty(x)&&(u!=null||f!=null))switch(x){case"value":st=u;break;case"defaultValue":ot=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Xe(e,n,x,u,o,f)}Ie(e,st,ot);return;case"option":for(var qt in a)st=a[qt],a.hasOwnProperty(qt)&&st!=null&&!o.hasOwnProperty(qt)&&(qt==="selected"?e.selected=!1:Xe(e,n,qt,null,o,st));for(G in o)st=o[G],ot=a[G],o.hasOwnProperty(G)&&st!==ot&&(st!=null||ot!=null)&&(G==="selected"?e.selected=st&&typeof st!="function"&&typeof st!="symbol":Xe(e,n,G,st,o,ot));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)st=a[ie],a.hasOwnProperty(ie)&&st!=null&&!o.hasOwnProperty(ie)&&Xe(e,n,ie,null,o,st);for(tt in o)if(st=o[tt],ot=a[tt],o.hasOwnProperty(tt)&&st!==ot&&(st!=null||ot!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:Xe(e,n,tt,st,o,ot)}return;default:if(Ai(n)){for(var We in a)st=a[We],a.hasOwnProperty(We)&&st!==void 0&&!o.hasOwnProperty(We)&&ch(e,n,We,void 0,o,st);for(dt in o)st=o[dt],ot=a[dt],!o.hasOwnProperty(dt)||st===ot||st===void 0&&ot===void 0||ch(e,n,dt,st,o,ot);return}}for(var Z in a)st=a[Z],a.hasOwnProperty(Z)&&st!=null&&!o.hasOwnProperty(Z)&&Xe(e,n,Z,null,o,st);for(vt in o)st=o[vt],ot=a[vt],!o.hasOwnProperty(vt)||st===ot||st==null&&ot==null||Xe(e,n,vt,st,o,ot)}function Ug(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ky(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,x=u.initiatorType,R=u.duration;if(f&&R&&Ug(x)){for(x=0,R=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],tt=G.startTime;if(tt>R)break;var dt=G.transferSize,vt=G.initiatorType;dt&&Ug(vt)&&(G=G.responseEnd,x+=dt*(G<R?1:(R-tt)/(G-tt)))}if(--o,n+=8*(f+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var uh=null,fh=null;function fc(e){return e.nodeType===9?e:e.ownerDocument}function Ng(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Lg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function hh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var dh=null;function Xy(){var e=window.event;return e&&e.type==="popstate"?e===dh?!1:(dh=e,!0):(dh=null,!1)}var Og=typeof setTimeout=="function"?setTimeout:void 0,Wy=typeof clearTimeout=="function"?clearTimeout:void 0,Pg=typeof Promise=="function"?Promise:void 0,qy=typeof queueMicrotask=="function"?queueMicrotask:typeof Pg<"u"?function(e){return Pg.resolve(null).then(e).catch(Yy)}:Og;function Yy(e){setTimeout(function(){throw e})}function Ya(e){return e==="head"}function zg(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),br(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Io(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Io(a);for(var f=a.firstChild;f;){var x=f.nextSibling,R=f.nodeName;f[cs]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&Io(e.ownerDocument.body);a=u}while(a);br(n)}function Bg(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function ph(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ph(a),io(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function jy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[cs])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=vi(e.nextSibling),e===null)break}return null}function Zy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=vi(e.nextSibling),e===null))return null;return e}function Fg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=vi(e.nextSibling),e===null))return null;return e}function mh(e){return e.data==="$?"||e.data==="$~"}function gh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ky(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function vi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var _h=null;function Ig(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return vi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Hg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Gg(e,n,a){switch(n=fc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Io(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);io(e)}var xi=new Map,Vg=new Set;function hc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ha=I.d;I.d={f:Qy,r:Jy,D:$y,C:tS,L:eS,m:nS,X:aS,S:iS,M:sS};function Qy(){var e=ha.f(),n=ic();return e||n}function Jy(e){var n=Ca(e);n!==null&&n.tag===5&&n.type==="form"?s0(n):ha.r(e)}var yr=typeof document>"u"?null:document;function kg(e,n,a){var o=yr;if(o&&typeof n=="string"&&n){var u=oe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Vg.has(u)||(Vg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Nn(n,"link",e),C(n),o.head.appendChild(n)))}}function $y(e){ha.D(e),kg("dns-prefetch",e,null)}function tS(e,n){ha.C(e,n),kg("preconnect",e,n)}function eS(e,n,a){ha.L(e,n,a);var o=yr;if(o&&e&&n){var u='link[rel="preload"][as="'+oe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+oe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+oe(a.imageSizes)+'"]')):u+='[href="'+oe(e)+'"]';var f=u;switch(n){case"style":f=Sr(e);break;case"script":f=Mr(e)}xi.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),xi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Ho(f))||n==="script"&&o.querySelector(Go(f))||(n=o.createElement("link"),Nn(n,"link",e),C(n),o.head.appendChild(n)))}}function nS(e,n){ha.m(e,n);var a=yr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+oe(o)+'"][href="'+oe(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Mr(e)}if(!xi.has(f)&&(e=_({rel:"modulepreload",href:e},n),xi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Go(f)))return}o=a.createElement("link"),Nn(o,"link",e),C(o),a.head.appendChild(o)}}}function iS(e,n,a){ha.S(e,n,a);var o=yr;if(o&&e){var u=wa(o).hoistableStyles,f=Sr(e);n=n||"default";var x=u.get(f);if(!x){var R={loading:0,preload:null};if(x=o.querySelector(Ho(f)))R.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=xi.get(f))&&vh(e,a);var G=x=o.createElement("link");C(G),Nn(G,"link",e),G._p=new Promise(function(tt,dt){G.onload=tt,G.onerror=dt}),G.addEventListener("load",function(){R.loading|=1}),G.addEventListener("error",function(){R.loading|=2}),R.loading|=4,dc(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:R},u.set(f,x)}}}function aS(e,n){ha.X(e,n);var a=yr;if(a&&e){var o=wa(a).hoistableScripts,u=Mr(e),f=o.get(u);f||(f=a.querySelector(Go(u)),f||(e=_({src:e,async:!0},n),(n=xi.get(u))&&xh(e,n),f=a.createElement("script"),C(f),Nn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function sS(e,n){ha.M(e,n);var a=yr;if(a&&e){var o=wa(a).hoistableScripts,u=Mr(e),f=o.get(u);f||(f=a.querySelector(Go(u)),f||(e=_({src:e,async:!0,type:"module"},n),(n=xi.get(u))&&xh(e,n),f=a.createElement("script"),C(f),Nn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Xg(e,n,a,o){var u=(u=it.current)?hc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Sr(a.href),a=wa(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Sr(a.href);var f=wa(u).hoistableStyles,x=f.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=u.querySelector(Ho(e)))&&!f._p&&(x.instance=f,x.state.loading=5),xi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},xi.set(e,a),f||rS(u,e,a,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Mr(a),a=wa(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Sr(e){return'href="'+oe(e)+'"'}function Ho(e){return'link[rel="stylesheet"]['+e+"]"}function Wg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function rS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Nn(n,"link",a),C(n),e.head.appendChild(n))}function Mr(e){return'[src="'+oe(e)+'"]'}function Go(e){return"script[async]"+e}function qg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+oe(a.href)+'"]');if(o)return n.instance=o,C(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),C(o),Nn(o,"style",u),dc(o,a.precedence,e),n.instance=o;case"stylesheet":u=Sr(a.href);var f=e.querySelector(Ho(u));if(f)return n.state.loading|=4,n.instance=f,C(f),f;o=Wg(a),(u=xi.get(u))&&vh(o,u),f=(e.ownerDocument||e).createElement("link"),C(f);var x=f;return x._p=new Promise(function(R,G){x.onload=R,x.onerror=G}),Nn(f,"link",o),n.state.loading|=4,dc(f,a.precedence,e),n.instance=f;case"script":return f=Mr(a.src),(u=e.querySelector(Go(f)))?(n.instance=u,C(u),u):(o=a,(u=xi.get(f))&&(o=_({},a),xh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),C(u),Nn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,dc(o,a.precedence,e));return n.instance}function dc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,x=0;x<o.length;x++){var R=o[x];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function vh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function xh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var pc=null;function Yg(e,n,a){if(pc===null){var o=new Map,u=pc=new Map;u.set(a,o)}else u=pc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[cs]||f[un]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=e+x;var R=o.get(x);R?R.push(f):o.set(x,[f])}}return o}function jg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function oS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Zg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function lS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Sr(o.href),f=n.querySelector(Ho(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=mc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,C(f);return}f=n.ownerDocument||n,o=Wg(o),(u=xi.get(u))&&vh(o,u),f=f.createElement("link"),C(f);var x=f;x._p=new Promise(function(R,G){x.onload=R,x.onerror=G}),Nn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=mc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var yh=0;function cS(e,n){return e.stylesheets&&e.count===0&&_c(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&_c(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&yh===0&&(yh=62500*ky());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&_c(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>yh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function mc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_c(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var gc=null;function _c(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,gc=new Map,n.forEach(uS,e),gc=null,mc.call(e))}function uS(e,n){if(!(n.state.loading&4)){var a=gc.get(e);if(a)var o=a.get(null);else{a=new Map,gc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var x=u[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),f=a.get(x)||o,f===o&&a.set(null,u),a.set(x,u),this.count++,o=mc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Vo={$$typeof:U,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function fS(e,n,a,o,u,f,x,R,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=we(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=we(0),this.hiddenUpdates=we(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function Kg(e,n,a,o,u,f,x,R,G,tt,dt,vt){return e=new fS(e,n,a,x,G,tt,dt,vt,R),n=1,f===!0&&(n|=24),f=ti(3,null,null,n),e.current=f,f.stateNode=e,n=Ju(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},nf(f),e}function Qg(e){return e?(e=$s,e):$s}function Jg(e,n,a,o,u,f){u=Qg(u),o.context===null?o.context=u:o.pendingContext=u,o=za(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ba(e,o,n),a!==null&&(Kn(a,e,n),yo(a,e,n))}function $g(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Sh(e,n){$g(e,n),(e=e.alternate)&&$g(e,n)}function t_(e){if(e.tag===13||e.tag===31){var n=ps(e,67108864);n!==null&&Kn(n,e,67108864),Sh(e,67108864)}}function e_(e){if(e.tag===13||e.tag===31){var n=si();n=to(n);var a=ps(e,n);a!==null&&Kn(a,e,n),Sh(e,n)}}var vc=!0;function hS(e,n,a,o){var u=N.T;N.T=null;var f=I.p;try{I.p=2,Mh(e,n,a,o)}finally{I.p=f,N.T=u}}function dS(e,n,a,o){var u=N.T;N.T=null;var f=I.p;try{I.p=8,Mh(e,n,a,o)}finally{I.p=f,N.T=u}}function Mh(e,n,a,o){if(vc){var u=bh(o);if(u===null)lh(e,n,o,xc,a),i_(e,o);else if(mS(u,e,n,a,o))o.stopPropagation();else if(i_(e,o),n&4&&-1<pS.indexOf(e)){for(;u!==null;){var f=Ca(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Mt(f.pendingLanes);if(x!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;x;){var G=1<<31-zt(x);R.entanglements[1]|=G,x&=~G}Ii(f),(Pe&6)===0&&(ec=b()+500,zo(0))}}break;case 31:case 13:R=ps(f,2),R!==null&&Kn(R,f,2),ic(),Sh(f,2)}if(f=bh(o),f===null&&lh(e,n,o,xc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else lh(e,n,o,null,a)}}function bh(e){return e=Eu(e),Eh(e)}var xc=null;function Eh(e){if(xc=null,e=Ra(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return xc=e,null}function n_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case pt:return 2;case yt:return 8;case ft:case Jt:return 32;case Dt:return 268435456;default:return 32}default:return 32}}var Th=!1,ja=null,Za=null,Ka=null,ko=new Map,Xo=new Map,Qa=[],pS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function i_(e,n){switch(e){case"focusin":case"focusout":ja=null;break;case"dragenter":case"dragleave":Za=null;break;case"mouseover":case"mouseout":Ka=null;break;case"pointerover":case"pointerout":ko.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xo.delete(n.pointerId)}}function Wo(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ca(n),n!==null&&t_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function mS(e,n,a,o,u){switch(n){case"focusin":return ja=Wo(ja,e,n,a,o,u),!0;case"dragenter":return Za=Wo(Za,e,n,a,o,u),!0;case"mouseover":return Ka=Wo(Ka,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return ko.set(f,Wo(ko.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Xo.set(f,Wo(Xo.get(f)||null,e,n,a,o,u)),!0}return!1}function a_(e){var n=Ra(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Pi(e.priority,function(){e_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Pi(e.priority,function(){e_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=bh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);bu=o,a.target.dispatchEvent(o),bu=null}else return n=Ca(a),n!==null&&t_(n),e.blockedOn=a,!1;n.shift()}return!0}function s_(e,n,a){yc(e)&&a.delete(n)}function gS(){Th=!1,ja!==null&&yc(ja)&&(ja=null),Za!==null&&yc(Za)&&(Za=null),Ka!==null&&yc(Ka)&&(Ka=null),ko.forEach(s_),Xo.forEach(s_)}function Sc(e,n){e.blockedOn===n&&(e.blockedOn=null,Th||(Th=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,gS)))}var Mc=null;function r_(e){Mc!==e&&(Mc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Mc===e&&(Mc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Eh(o||a)===null)continue;break}var f=Ca(a);f!==null&&(e.splice(n,3),n-=3,bf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function br(e){function n(G){return Sc(G,e)}ja!==null&&Sc(ja,e),Za!==null&&Sc(Za,e),Ka!==null&&Sc(Ka,e),ko.forEach(n),Xo.forEach(n);for(var a=0;a<Qa.length;a++){var o=Qa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Qa.length&&(a=Qa[0],a.blockedOn===null);)a_(a),a.blockedOn===null&&Qa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],x=u[bn]||null;if(typeof f=="function")x||r_(a);else if(x){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,x=f[bn]||null)R=x.formAction;else if(Eh(u)!==null)continue}else R=x.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),r_(a)}}}function o_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Ah(e){this._internalRoot=e}bc.prototype.render=Ah.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=si();Jg(a,o,e,n,null,null)},bc.prototype.unmount=Ah.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Jg(e.current,2,null,e,null,null),ic(),n[Ti]=null}};function bc(e){this._internalRoot=e}bc.prototype.unstable_scheduleHydration=function(e){if(e){var n=eo();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Qa.length&&n!==0&&n<Qa[a].priority;a++);Qa.splice(a,0,e),a===0&&a_(e)}};var l_=t.version;if(l_!=="19.2.3")throw Error(s(527,l_,"19.2.3"));I.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var _S={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ec.isDisabled&&Ec.supportsFiber)try{bt=Ec.inject(_S),Tt=Ec}catch{}}return Yo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=m0,f=g0,x=_0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=Kg(e,1,!1,null,null,a,o,null,u,f,x,o_),e[Ti]=n.current,oh(e),new Ah(n)},Yo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=m0,x=g0,R=_0,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=Kg(e,1,!0,n,a??null,o,u,G,f,x,R,o_),n.context=Qg(null),a=n.current,o=si(),o=to(o),u=za(o),u.callback=null,Ba(a,u,o),a=o,n.current.lanes=a,Pn(n,a),Ii(n),e[Ti]=n.current,oh(e),new bc(n)},Yo.version="19.2.3",Yo}var v_;function RS(){if(v_)return wh.exports;v_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),wh.exports=AS(),wh.exports}var CS=RS();const Rv=(...r)=>r.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim();const wS=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const DS=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase());const x_=r=>{const t=DS(r);return t.charAt(0).toUpperCase()+t.slice(1)};var US={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const NS=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};const LS=Be.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...d},m)=>Be.createElement("svg",{ref:m,...US,width:t,height:t,stroke:r,strokeWidth:s?Number(i)*24/Number(t):i,className:Rv("lucide",l),...!c&&!NS(d)&&{"aria-hidden":"true"},...d},[...h.map(([p,g])=>Be.createElement(p,g)),...Array.isArray(c)?c:[c]]));const cn=(r,t)=>{const i=Be.forwardRef(({className:s,...l},c)=>Be.createElement(LS,{ref:c,iconNode:t,className:Rv(`lucide-${wS(x_(r))}`,`lucide-${r}`,s),...l}));return i.displayName=x_(r),i};const OS=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],PS=cn("activity",OS);const zS=[["path",{d:"M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8",key:"1h8rid"}],["path",{d:"M10 5H8a2 2 0 0 0 0 4h.68",key:"3ezsi6"}],["path",{d:"M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8",key:"yt6q09"}],["path",{d:"M14 5h2a2 2 0 0 1 0 4h-.68",key:"8f95yk"}],["path",{d:"M18 22H6",key:"mg6kv4"}],["path",{d:"M9 2h6",key:"1jrp98"}]],BS=cn("amphora",zS);const FS=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],IS=cn("box",FS);const HS=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],GS=cn("building-2",HS);const VS=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],kS=cn("chevron-left",VS);const XS=[["path",{d:"M10 9h4",key:"u4k05v"}],["path",{d:"M12 7v5",key:"ma6bk"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"m18 9 3.52 2.147a1 1 0 0 1 .48.854V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6.999a1 1 0 0 1 .48-.854L6 9",key:"flvdwo"}],["path",{d:"M6 21V7a1 1 0 0 1 .376-.782l5-3.999a1 1 0 0 1 1.249.001l5 4A1 1 0 0 1 18 7v14",key:"a5i0n2"}]],WS=cn("church",XS);const qS=[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]],YS=cn("flower-2",qS);const jS=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],ZS=cn("graduation-cap",jS);const KS=[["path",{d:"M10 18v-7",key:"wt116b"}],["path",{d:"M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z",key:"1m329m"}],["path",{d:"M14 18v-7",key:"vav6t3"}],["path",{d:"M18 18v-7",key:"aexdmj"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M6 18v-7",key:"1ivflk"}]],y_=cn("landmark",KS);const QS=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],JS=cn("map",QS);const $S=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],tM=cn("palette",$S);const eM=[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]],nM=cn("scroll-text",eM);const iM=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],aM=cn("shopping-bag",iM);const sM=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],rM=cn("square",sM);const oM=[["path",{d:"M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2",key:"2ksp49"}]],lM=cn("star-half",oM);const cM=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],gd=cn("star",cM);const uM=[["path",{d:"M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4",key:"foxbe7"}],["path",{d:"M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3",key:"18arnh"}],["path",{d:"M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35",key:"ywahnh"}],["path",{d:"M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14",key:"ft0feo"}]],fM=cn("tree-palm",uM);const hM=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],dM=cn("triangle-alert",hM);const pM=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],mM=cn("trophy",pM);const gM=[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]],_M=cn("waves",gM);const vM=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],xM=cn("x",vM);function yM({setActiveTab:r,activeTab:t}){return ct.jsxs("header",{className:"fixed top-0 left-0 z-[100] flex justify-between h-16 items-center font-geist header w-full",children:[ct.jsx("h1",{className:"leading-none font-geist text-[25px] font-semibold ml-8 text-white",children:"EQUIP Q3 Bohr"}),ct.jsx("nav",{className:"backdrop-blur-xl navbar mr-8",children:ct.jsxs("ul",{className:"flex flex-row list-none",children:[ct.jsx("li",{className:"mx-1",children:ct.jsxs("button",{title:"View the map",onClick:()=>r("Map"),id:"MapButton",className:`flex items-center gap-1 font-geist button ${t==="Map"?"isActive":""}`,children:[ct.jsx(JS,{size:22,strokeWidth:1}),"Map"]})}),ct.jsx("li",{className:"mx-2",children:ct.jsxs("button",{title:"Contributions",onClick:()=>r("Credits"),id:"CreditsButton",className:`flex items-center gap-1 font-geist button ${t==="Credits"?"isActive":""}`,children:[ct.jsx(nM,{size:22,strokeWidth:1}),"Credits"]})})]})})]})}const pp="182",kr={ROTATE:0,DOLLY:1,PAN:2},Vr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},SM=0,S_=1,MM=2,eu=1,bM=2,al=3,ls=0,Jn=1,xa=2,Sa=0,Xr=1,M_=2,b_=3,E_=4,EM=5,Ls=100,TM=101,AM=102,RM=103,CM=104,wM=200,DM=201,UM=202,NM=203,_d=204,vd=205,LM=206,OM=207,PM=208,zM=209,BM=210,FM=211,IM=212,HM=213,GM=214,xd=0,yd=1,Sd=2,qr=3,Md=4,bd=5,Ed=6,Td=7,Cv=0,VM=1,kM=2,Wi=0,wv=1,Dv=2,Uv=3,Nv=4,Lv=5,Ov=6,Pv=7,zv=300,Fs=301,Yr=302,Ad=303,Rd=304,gu=306,Cd=1e3,ya=1001,wd=1002,Ln=1003,XM=1004,Tc=1005,In=1006,Lh=1007,Ps=1008,bi=1009,Bv=1010,Fv=1011,cl=1012,mp=1013,Yi=1014,ki=1015,ba=1016,gp=1017,_p=1018,ul=1020,Iv=35902,Hv=35899,Gv=1021,Vv=1022,Li=1023,Ea=1026,zs=1027,kv=1028,vp=1029,jr=1030,xp=1031,yp=1033,nu=33776,iu=33777,au=33778,su=33779,Dd=35840,Ud=35841,Nd=35842,Ld=35843,Od=36196,Pd=37492,zd=37496,Bd=37488,Fd=37489,Id=37490,Hd=37491,Gd=37808,Vd=37809,kd=37810,Xd=37811,Wd=37812,qd=37813,Yd=37814,jd=37815,Zd=37816,Kd=37817,Qd=37818,Jd=37819,$d=37820,tp=37821,ep=36492,np=36494,ip=36495,ap=36283,sp=36284,rp=36285,op=36286,WM=3200,qM=0,YM=1,ss="",Si="srgb",Zr="srgb-linear",ou="linear",Ve="srgb",Er=7680,T_=519,jM=512,ZM=513,KM=514,Sp=515,QM=516,JM=517,Mp=518,$M=519,lp=35044,A_="300 es",Xi=2e3,lu=2001;function Xv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function cu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function t1(){const r=cu("canvas");return r.style.display="block",r}const R_={};function uu(...r){const t="THREE."+r.shift();console.log(t,...r)}function se(...r){const t="THREE."+r.shift();console.warn(t,...r)}function Ae(...r){const t="THREE."+r.shift();console.error(t,...r)}function fl(...r){const t=r.join(" ");t in R_||(R_[t]=!0,se(...r))}function e1(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Gs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rl=Math.PI/180,cp=180/Math.PI;function os(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Bn[r&255]+Bn[r>>8&255]+Bn[r>>16&255]+Bn[r>>24&255]+"-"+Bn[t&255]+Bn[t>>8&255]+"-"+Bn[t>>16&15|64]+Bn[t>>24&255]+"-"+Bn[i&63|128]+Bn[i>>8&255]+"-"+Bn[i>>16&255]+Bn[i>>24&255]+Bn[s&255]+Bn[s>>8&255]+Bn[s>>16&255]+Bn[s>>24&255]).toLowerCase()}function xe(r,t,i){return Math.max(t,Math.min(i,r))}function n1(r,t){return(r%t+t)%t}function Oh(r,t,i){return(1-i)*r+i*t}function Vi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function qe(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const i1={DEG2RAD:rl};class Vt{constructor(t=0,i=0){Vt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(xe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Is{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],g=s[l+2],_=s[l+3],y=c[h+0],S=c[h+1],E=c[h+2],T=c[h+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(d>=1){t[i+0]=y,t[i+1]=S,t[i+2]=E,t[i+3]=T;return}if(_!==T||m!==y||p!==S||g!==E){let M=m*y+p*S+g*E+_*T;M<0&&(y=-y,S=-S,E=-E,T=-T,M=-M);let v=1-d;if(M<.9995){const P=Math.acos(M),U=Math.sin(P);v=Math.sin(v*P)/U,d=Math.sin(d*P)/U,m=m*v+y*d,p=p*v+S*d,g=g*v+E*d,_=_*v+T*d}else{m=m*v+y*d,p=p*v+S*d,g=g*v+E*d,_=_*v+T*d;const P=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=P,p*=P,g*=P,_*=P}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],_=c[h],y=c[h+1],S=c[h+2],E=c[h+3];return t[i]=d*E+g*_+m*S-p*y,t[i+1]=m*E+g*y+p*_-d*S,t[i+2]=p*E+g*S+d*y-m*_,t[i+3]=g*E-d*_-m*y-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),_=d(c/2),y=m(s/2),S=m(l/2),E=m(c/2);switch(h){case"XYZ":this._x=y*g*_+p*S*E,this._y=p*S*_-y*g*E,this._z=p*g*E+y*S*_,this._w=p*g*_-y*S*E;break;case"YXZ":this._x=y*g*_+p*S*E,this._y=p*S*_-y*g*E,this._z=p*g*E-y*S*_,this._w=p*g*_+y*S*E;break;case"ZXY":this._x=y*g*_-p*S*E,this._y=p*S*_+y*g*E,this._z=p*g*E+y*S*_,this._w=p*g*_-y*S*E;break;case"ZYX":this._x=y*g*_-p*S*E,this._y=p*S*_+y*g*E,this._z=p*g*E-y*S*_,this._w=p*g*_+y*S*E;break;case"YZX":this._x=y*g*_+p*S*E,this._y=p*S*_+y*g*E,this._z=p*g*E-y*S*_,this._w=p*g*_-y*S*E;break;case"XZY":this._x=y*g*_-p*S*E,this._y=p*S*_-y*g*E,this._z=p*g*E+y*S*_,this._w=p*g*_+y*S*E;break;default:se("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],y=s+d+_;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-p)*S,this._z=(h-l)*S}else if(s>d&&s>_){const S=2*Math.sqrt(1+s-d-_);this._w=(g-m)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+p)/S}else if(d>_){const S=2*Math.sqrt(1+d-s-_);this._w=(c-p)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+_-s-d);this._w=(h-l)/S,this._x=(c+p)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-s*p,this._z=c*g+h*p+s*m-l*d,this._w=h*g-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,i=0,s=0){V.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(C_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(C_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),g=2*(d*i-c*l),_=2*(c*s-h*i);return this.x=i+m*p+h*_-d*g,this.y=s+m*g+d*p-c*_,this.z=l+m*_+c*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Ph.copy(this).projectOnVector(t),this.sub(Ph)}reflect(t){return this.sub(Ph.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(xe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ph=new V,C_=new Is;class de{constructor(t,i,s,l,c,h,d,m,p){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],g=s[4],_=s[7],y=s[2],S=s[5],E=s[8],T=l[0],M=l[3],v=l[6],P=l[1],U=l[4],D=l[7],B=l[2],F=l[5],z=l[8];return c[0]=h*T+d*P+m*B,c[3]=h*M+d*U+m*F,c[6]=h*v+d*D+m*z,c[1]=p*T+g*P+_*B,c[4]=p*M+g*U+_*F,c[7]=p*v+g*D+_*z,c[2]=y*T+S*P+E*B,c[5]=y*M+S*U+E*F,c[8]=y*v+S*D+E*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-s*c*g+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=g*h-d*p,y=d*m-g*c,S=p*c-h*m,E=i*_+s*y+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=_*T,t[1]=(l*p-g*s)*T,t[2]=(d*s-l*h)*T,t[3]=y*T,t[4]=(g*i-l*m)*T,t[5]=(l*c-d*i)*T,t[6]=S*T,t[7]=(s*m-p*i)*T,t[8]=(h*i-s*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(zh.makeScale(t,i)),this}rotate(t){return this.premultiply(zh.makeRotation(-t)),this}translate(t,i){return this.premultiply(zh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zh=new de,w_=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),D_=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function a1(){const r={enabled:!0,workingColorSpace:Zr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ve&&(l.r=Ma(l.r),l.g=Ma(l.g),l.b=Ma(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ve&&(l.r=Wr(l.r),l.g=Wr(l.g),l.b=Wr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ss?ou:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return fl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return fl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Zr]:{primaries:t,whitePoint:s,transfer:ou,toXYZ:w_,fromXYZ:D_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:t,whitePoint:s,transfer:Ve,toXYZ:w_,fromXYZ:D_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),r}const De=a1();function Ma(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Wr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Tr;class s1{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Tr===void 0&&(Tr=cu("canvas")),Tr.width=t.width,Tr.height=t.height;const l=Tr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Tr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=cu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ma(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ma(i[s]/255)*255):i[s]=Ma(i[s]);return{data:i,width:t.width,height:t.height}}else return se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let r1=0;class bp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:r1++}),this.uuid=os(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Bh(l[h].image)):c.push(Bh(l[h]))}else c=Bh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Bh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?s1.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(se("Texture: Unable to serialize Texture."),{})}let o1=0;const Fh=new V;class Hn extends Gs{constructor(t=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,s=ya,l=ya,c=In,h=Ps,d=Li,m=bi,p=Hn.DEFAULT_ANISOTROPY,g=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:o1++}),this.uuid=os(),this.name="",this.source=new bp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Fh).x}get height(){return this.source.getSize(Fh).y}get depth(){return this.source.getSize(Fh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){se(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){se(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cd:t.x=t.x-Math.floor(t.x);break;case ya:t.x=t.x<0?0:1;break;case wd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cd:t.y=t.y-Math.floor(t.y);break;case ya:t.y=t.y<0?0:1;break;case wd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=zv;Hn.DEFAULT_ANISOTROPY=1;class ln{constructor(t=0,i=0,s=0,l=1){ln.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],y=m[1],S=m[5],E=m[9],T=m[2],M=m[6],v=m[10];if(Math.abs(g-y)<.01&&Math.abs(_-T)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+y)<.1&&Math.abs(_+T)<.1&&Math.abs(E+M)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,D=(S+1)/2,B=(v+1)/2,F=(g+y)/4,z=(_+T)/4,Y=(E+M)/4;return U>D&&U>B?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=F/s,c=z/s):D>B?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=F/l,c=Y/l):B<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),s=z/c,l=Y/c),this.set(s,l,c,i),this}let P=Math.sqrt((M-E)*(M-E)+(_-T)*(_-T)+(y-g)*(y-g));return Math.abs(P)<.001&&(P=1),this.x=(M-E)/P,this.y=(_-T)/P,this.z=(y-g)/P,this.w=Math.acos((p+S+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this.w=xe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this.w=xe(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class l1 extends Gs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new ln(0,0,t,i),this.scissorTest=!1,this.viewport=new ln(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Hn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new bp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends l1{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Wv extends Hn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class c1 extends Hn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dl{constructor(t=new V(1/0,1/0,1/0),i=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Di.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Di.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Di.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Di):Di.fromBufferAttribute(c,h),Di.applyMatrix4(t.matrixWorld),this.expandByPoint(Di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ac.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ac.copy(s.boundingBox)),Ac.applyMatrix4(t.matrixWorld),this.union(Ac)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Di),Di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(jo),Rc.subVectors(this.max,jo),Ar.subVectors(t.a,jo),Rr.subVectors(t.b,jo),Cr.subVectors(t.c,jo),$a.subVectors(Rr,Ar),ts.subVectors(Cr,Rr),Rs.subVectors(Ar,Cr);let i=[0,-$a.z,$a.y,0,-ts.z,ts.y,0,-Rs.z,Rs.y,$a.z,0,-$a.x,ts.z,0,-ts.x,Rs.z,0,-Rs.x,-$a.y,$a.x,0,-ts.y,ts.x,0,-Rs.y,Rs.x,0];return!Ih(i,Ar,Rr,Cr,Rc)||(i=[1,0,0,0,1,0,0,0,1],!Ih(i,Ar,Rr,Cr,Rc))?!1:(Cc.crossVectors($a,ts),i=[Cc.x,Cc.y,Cc.z],Ih(i,Ar,Rr,Cr,Rc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(da),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const da=[new V,new V,new V,new V,new V,new V,new V,new V],Di=new V,Ac=new dl,Ar=new V,Rr=new V,Cr=new V,$a=new V,ts=new V,Rs=new V,jo=new V,Rc=new V,Cc=new V,Cs=new V;function Ih(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){Cs.fromArray(r,c);const d=l.x*Math.abs(Cs.x)+l.y*Math.abs(Cs.y)+l.z*Math.abs(Cs.z),m=t.dot(Cs),p=i.dot(Cs),g=s.dot(Cs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const u1=new dl,Zo=new V,Hh=new V;class _u{constructor(t=new V,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):u1.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zo.subVectors(t,this.center);const i=Zo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Zo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zo.copy(t.center).add(Hh)),this.expandByPoint(Zo.copy(t.center).sub(Hh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const pa=new V,Gh=new V,wc=new V,es=new V,Vh=new V,Dc=new V,kh=new V;class vu{constructor(t=new V,i=new V(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=pa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(pa.copy(this.origin).addScaledVector(this.direction,i),pa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Gh.copy(t).add(i).multiplyScalar(.5),wc.copy(i).sub(t).normalize(),es.copy(this.origin).sub(Gh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(wc),d=es.dot(this.direction),m=-es.dot(wc),p=es.lengthSq(),g=Math.abs(1-h*h);let _,y,S,E;if(g>0)if(_=h*m-d,y=h*d-m,E=c*g,_>=0)if(y>=-E)if(y<=E){const T=1/g;_*=T,y*=T,S=_*(_+h*y+2*d)+y*(h*_+y+2*m)+p}else y=c,_=Math.max(0,-(h*y+d)),S=-_*_+y*(y+2*m)+p;else y=-c,_=Math.max(0,-(h*y+d)),S=-_*_+y*(y+2*m)+p;else y<=-E?(_=Math.max(0,-(-h*c+d)),y=_>0?-c:Math.min(Math.max(-c,-m),c),S=-_*_+y*(y+2*m)+p):y<=E?(_=0,y=Math.min(Math.max(-c,-m),c),S=y*(y+2*m)+p):(_=Math.max(0,-(h*c+d)),y=_>0?c:Math.min(Math.max(-c,-m),c),S=-_*_+y*(y+2*m)+p);else y=h>0?-c:c,_=Math.max(0,-(h*y+d)),S=-_*_+y*(y+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Gh).addScaledVector(wc,y),S}intersectSphere(t,i){pa.subVectors(t.center,this.origin);const s=pa.dot(this.direction),l=pa.dot(pa)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,y=this.origin;return p>=0?(s=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(s=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),g>=0?(c=(t.min.y-y.y)*g,h=(t.max.y-y.y)*g):(c=(t.max.y-y.y)*g,h=(t.min.y-y.y)*g),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-y.z)*_,m=(t.max.z-y.z)*_):(d=(t.max.z-y.z)*_,m=(t.min.z-y.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,pa)!==null}intersectTriangle(t,i,s,l,c){Vh.subVectors(i,t),Dc.subVectors(s,t),kh.crossVectors(Vh,Dc);let h=this.direction.dot(kh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;es.subVectors(this.origin,t);const m=d*this.direction.dot(Dc.crossVectors(es,Dc));if(m<0)return null;const p=d*this.direction.dot(Vh.cross(es));if(p<0||m+p>h)return null;const g=-d*es.dot(kh);return g<0?null:this.at(g/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(t,i,s,l,c,h,d,m,p,g,_,y,S,E,T,M){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,g,_,y,S,E,T,M)}set(t,i,s,l,c,h,d,m,p,g,_,y,S,E,T,M){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=y,v[3]=S,v[7]=E,v[11]=T,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/wr.setFromMatrixColumn(t,0).length(),c=1/wr.setFromMatrixColumn(t,1).length(),h=1/wr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const y=h*g,S=h*_,E=d*g,T=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=S+E*p,i[5]=y-T*p,i[9]=-d*m,i[2]=T-y*p,i[6]=E+S*p,i[10]=h*m}else if(t.order==="YXZ"){const y=m*g,S=m*_,E=p*g,T=p*_;i[0]=y+T*d,i[4]=E*d-S,i[8]=h*p,i[1]=h*_,i[5]=h*g,i[9]=-d,i[2]=S*d-E,i[6]=T+y*d,i[10]=h*m}else if(t.order==="ZXY"){const y=m*g,S=m*_,E=p*g,T=p*_;i[0]=y-T*d,i[4]=-h*_,i[8]=E+S*d,i[1]=S+E*d,i[5]=h*g,i[9]=T-y*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const y=h*g,S=h*_,E=d*g,T=d*_;i[0]=m*g,i[4]=E*p-S,i[8]=y*p+T,i[1]=m*_,i[5]=T*p+y,i[9]=S*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const y=h*m,S=h*p,E=d*m,T=d*p;i[0]=m*g,i[4]=T-y*_,i[8]=E*_+S,i[1]=_,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=S*_+E,i[10]=y-T*_}else if(t.order==="XZY"){const y=h*m,S=h*p,E=d*m,T=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=y*_+T,i[5]=h*g,i[9]=S*_-E,i[2]=E*_-S,i[6]=d*g,i[10]=T*_+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(f1,t,h1)}lookAt(t,i,s){const l=this.elements;return ri.subVectors(t,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),ns.crossVectors(s,ri),ns.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),ns.crossVectors(s,ri)),ns.normalize(),Uc.crossVectors(ri,ns),l[0]=ns.x,l[4]=Uc.x,l[8]=ri.x,l[1]=ns.y,l[5]=Uc.y,l[9]=ri.y,l[2]=ns.z,l[6]=Uc.z,l[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],g=s[1],_=s[5],y=s[9],S=s[13],E=s[2],T=s[6],M=s[10],v=s[14],P=s[3],U=s[7],D=s[11],B=s[15],F=l[0],z=l[4],Y=l[8],A=l[12],w=l[1],k=l[5],Q=l[9],et=l[13],ut=l[2],lt=l[6],N=l[10],I=l[14],J=l[3],St=l[7],mt=l[11],L=l[15];return c[0]=h*F+d*w+m*ut+p*J,c[4]=h*z+d*k+m*lt+p*St,c[8]=h*Y+d*Q+m*N+p*mt,c[12]=h*A+d*et+m*I+p*L,c[1]=g*F+_*w+y*ut+S*J,c[5]=g*z+_*k+y*lt+S*St,c[9]=g*Y+_*Q+y*N+S*mt,c[13]=g*A+_*et+y*I+S*L,c[2]=E*F+T*w+M*ut+v*J,c[6]=E*z+T*k+M*lt+v*St,c[10]=E*Y+T*Q+M*N+v*mt,c[14]=E*A+T*et+M*I+v*L,c[3]=P*F+U*w+D*ut+B*J,c[7]=P*z+U*k+D*lt+B*St,c[11]=P*Y+U*Q+D*N+B*mt,c[15]=P*A+U*et+D*I+B*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],_=t[6],y=t[10],S=t[14],E=t[3],T=t[7],M=t[11],v=t[15],P=m*S-p*y,U=d*S-p*_,D=d*y-m*_,B=h*S-p*g,F=h*y-m*g,z=h*_-d*g;return i*(T*P-M*U+v*D)-s*(E*P-M*B+v*F)+l*(E*U-T*B+v*z)-c*(E*D-T*F+M*z)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=t[9],y=t[10],S=t[11],E=t[12],T=t[13],M=t[14],v=t[15],P=_*M*p-T*y*p+T*m*S-d*M*S-_*m*v+d*y*v,U=E*y*p-g*M*p-E*m*S+h*M*S+g*m*v-h*y*v,D=g*T*p-E*_*p+E*d*S-h*T*S-g*d*v+h*_*v,B=E*_*m-g*T*m-E*d*y+h*T*y+g*d*M-h*_*M,F=i*P+s*U+l*D+c*B;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/F;return t[0]=P*z,t[1]=(T*y*c-_*M*c-T*l*S+s*M*S+_*l*v-s*y*v)*z,t[2]=(d*M*c-T*m*c+T*l*p-s*M*p-d*l*v+s*m*v)*z,t[3]=(_*m*c-d*y*c-_*l*p+s*y*p+d*l*S-s*m*S)*z,t[4]=U*z,t[5]=(g*M*c-E*y*c+E*l*S-i*M*S-g*l*v+i*y*v)*z,t[6]=(E*m*c-h*M*c-E*l*p+i*M*p+h*l*v-i*m*v)*z,t[7]=(h*y*c-g*m*c+g*l*p-i*y*p-h*l*S+i*m*S)*z,t[8]=D*z,t[9]=(E*_*c-g*T*c-E*s*S+i*T*S+g*s*v-i*_*v)*z,t[10]=(h*T*c-E*d*c+E*s*p-i*T*p-h*s*v+i*d*v)*z,t[11]=(g*d*c-h*_*c-g*s*p+i*_*p+h*s*S-i*d*S)*z,t[12]=B*z,t[13]=(g*T*l-E*_*l+E*s*y-i*T*y-g*s*M+i*_*M)*z,t[14]=(E*d*l-h*T*l-E*s*m+i*T*m+h*s*M-i*d*M)*z,t[15]=(h*_*l-g*d*l+g*s*m-i*_*m-h*s*y+i*d*y)*z,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,g=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,g=h+h,_=d+d,y=c*p,S=c*g,E=c*_,T=h*g,M=h*_,v=d*_,P=m*p,U=m*g,D=m*_,B=s.x,F=s.y,z=s.z;return l[0]=(1-(T+v))*B,l[1]=(S+D)*B,l[2]=(E-U)*B,l[3]=0,l[4]=(S-D)*F,l[5]=(1-(y+v))*F,l[6]=(M+P)*F,l[7]=0,l[8]=(E+U)*z,l[9]=(M-P)*z,l[10]=(1-(y+T))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=wr.set(l[0],l[1],l[2]).length();const h=wr.set(l[4],l[5],l[6]).length(),d=wr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ui.copy(this);const p=1/c,g=1/h,_=1/d;return Ui.elements[0]*=p,Ui.elements[1]*=p,Ui.elements[2]*=p,Ui.elements[4]*=g,Ui.elements[5]*=g,Ui.elements[6]*=g,Ui.elements[8]*=_,Ui.elements[9]*=_,Ui.elements[10]*=_,i.setFromRotationMatrix(Ui),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=Xi,m=!1){const p=this.elements,g=2*c/(i-t),_=2*c/(s-l),y=(i+t)/(i-t),S=(s+l)/(s-l);let E,T;if(m)E=c/(h-c),T=h*c/(h-c);else if(d===Xi)E=-(h+c)/(h-c),T=-2*h*c/(h-c);else if(d===lu)E=-h/(h-c),T=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=_,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=Xi,m=!1){const p=this.elements,g=2/(i-t),_=2/(s-l),y=-(i+t)/(i-t),S=-(s+l)/(s-l);let E,T;if(m)E=1/(h-c),T=h/(h-c);else if(d===Xi)E=-2/(h-c),T=-(h+c)/(h-c);else if(d===lu)E=-1/(h-c),T=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=_,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const wr=new V,Ui=new en,f1=new V(0,0,0),h1=new V(1,1,1),ns=new V,Uc=new V,ri=new V,U_=new en,N_=new Is;class Ta{constructor(t=0,i=0,s=0,l=Ta.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],y=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(xe(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-xe(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:se("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return U_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(U_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return N_.setFromEuler(this),this.setFromQuaternion(N_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ta.DEFAULT_ORDER="XYZ";class Ep{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let d1=0;const L_=new V,Dr=new Is,ma=new en,Nc=new V,Ko=new V,p1=new V,m1=new Is,O_=new V(1,0,0),P_=new V(0,1,0),z_=new V(0,0,1),B_={type:"added"},g1={type:"removed"},Ur={type:"childadded",child:null},Xh={type:"childremoved",child:null};class Xn extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:d1++}),this.uuid=os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const t=new V,i=new Ta,s=new Is,l=new V(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new en},normalMatrix:{value:new de}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ep,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Dr.setFromAxisAngle(t,i),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(t,i){return Dr.setFromAxisAngle(t,i),this.quaternion.premultiply(Dr),this}rotateX(t){return this.rotateOnAxis(O_,t)}rotateY(t){return this.rotateOnAxis(P_,t)}rotateZ(t){return this.rotateOnAxis(z_,t)}translateOnAxis(t,i){return L_.copy(t).applyQuaternion(this.quaternion),this.position.add(L_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(O_,t)}translateY(t){return this.translateOnAxis(P_,t)}translateZ(t){return this.translateOnAxis(z_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ma.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Nc.copy(t):Nc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ma.lookAt(Ko,Nc,this.up):ma.lookAt(Nc,Ko,this.up),this.quaternion.setFromRotationMatrix(ma),l&&(ma.extractRotation(l.matrixWorld),Dr.setFromRotationMatrix(ma),this.quaternion.premultiply(Dr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(B_),Ur.child=t,this.dispatchEvent(Ur),Ur.child=null):Ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(g1),Xh.child=t,this.dispatchEvent(Xh),Xh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ma.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ma.multiply(t.parent.matrixWorld)),t.applyMatrix4(ma),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(B_),Ur.child=t,this.dispatchEvent(Ur),Ur.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,t,p1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,m1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),_=h(t.shapes),y=h(t.skeletons),S=h(t.animations),E=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),y.length>0&&(s.skeletons=y),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Xn.DEFAULT_UP=new V(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ni=new V,ga=new V,Wh=new V,_a=new V,Nr=new V,Lr=new V,F_=new V,qh=new V,Yh=new V,jh=new V,Zh=new ln,Kh=new ln,Qh=new ln;class li{constructor(t=new V,i=new V,s=new V){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ni.subVectors(t,i),l.cross(Ni);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ni.subVectors(l,i),ga.subVectors(s,i),Wh.subVectors(t,i);const h=Ni.dot(Ni),d=Ni.dot(ga),m=Ni.dot(Wh),p=ga.dot(ga),g=ga.dot(Wh),_=h*p-d*d;if(_===0)return c.set(0,0,0),null;const y=1/_,S=(p*m-d*g)*y,E=(h*g-d*m)*y;return c.set(1-S-E,E,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,_a)===null?!1:_a.x>=0&&_a.y>=0&&_a.x+_a.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,_a)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,_a.x),m.addScaledVector(h,_a.y),m.addScaledVector(d,_a.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return Zh.setScalar(0),Kh.setScalar(0),Qh.setScalar(0),Zh.fromBufferAttribute(t,i),Kh.fromBufferAttribute(t,s),Qh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Zh,c.x),h.addScaledVector(Kh,c.y),h.addScaledVector(Qh,c.z),h}static isFrontFacing(t,i,s,l){return Ni.subVectors(s,i),ga.subVectors(t,i),Ni.cross(ga).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ni.subVectors(this.c,this.b),ga.subVectors(this.a,this.b),Ni.cross(ga).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return li.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return li.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return li.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return li.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return li.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;Nr.subVectors(l,s),Lr.subVectors(c,s),qh.subVectors(t,s);const m=Nr.dot(qh),p=Lr.dot(qh);if(m<=0&&p<=0)return i.copy(s);Yh.subVectors(t,l);const g=Nr.dot(Yh),_=Lr.dot(Yh);if(g>=0&&_<=g)return i.copy(l);const y=m*_-g*p;if(y<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(s).addScaledVector(Nr,h);jh.subVectors(t,c);const S=Nr.dot(jh),E=Lr.dot(jh);if(E>=0&&S<=E)return i.copy(c);const T=S*p-m*E;if(T<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(Lr,d);const M=g*E-S*_;if(M<=0&&_-g>=0&&S-E>=0)return F_.subVectors(c,l),d=(_-g)/(_-g+(S-E)),i.copy(l).addScaledVector(F_,d);const v=1/(M+T+y);return h=T*v,d=y*v,i.copy(s).addScaledVector(Nr,h).addScaledVector(Lr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const qv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},Lc={h:0,s:0,l:0};function Jh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Re{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=De.workingColorSpace){return this.r=t,this.g=i,this.b=s,De.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=De.workingColorSpace){if(t=n1(t,1),i=xe(i,0,1),s=xe(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Jh(h,c,t+1/3),this.g=Jh(h,c,t),this.b=Jh(h,c,t-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(t,i=Si){function s(c){c!==void 0&&parseFloat(c)<1&&se("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:se("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);se("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Si){const s=qv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):se("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ma(t.r),this.g=Ma(t.g),this.b=Ma(t.b),this}copyLinearToSRGB(t){return this.r=Wr(t.r),this.g=Wr(t.g),this.b=Wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Si){return De.workingToColorSpace(Fn.copy(this),t),Math.round(xe(Fn.r*255,0,255))*65536+Math.round(xe(Fn.g*255,0,255))*256+Math.round(xe(Fn.b*255,0,255))}getHexString(t=Si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=De.workingColorSpace){De.workingToColorSpace(Fn.copy(this),i);const s=Fn.r,l=Fn.g,c=Fn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=g<=.5?_/(h+d):_/(2-h-d),h){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=De.workingColorSpace){return De.workingToColorSpace(Fn.copy(this),i),t.r=Fn.r,t.g=Fn.g,t.b=Fn.b,t}getStyle(t=Si){De.workingToColorSpace(Fn.copy(this),t);const i=Fn.r,s=Fn.g,l=Fn.b;return t!==Si?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(is),this.setHSL(is.h+t,is.s+i,is.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(is),t.getHSL(Lc);const s=Oh(is.h,Lc.h,i),l=Oh(is.s,Lc.s,i),c=Oh(is.l,Lc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Re;Re.NAMES=qv;let _1=0;class Qr extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_1++}),this.uuid=os(),this.name="",this.type="Material",this.blending=Xr,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_d,this.blendDst=vd,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=T_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){se(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){se(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(s.blending=this.blending),this.side!==ls&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==_d&&(s.blendSrc=this.blendSrc),this.blendDst!==vd&&(s.blendDst=this.blendDst),this.blendEquation!==Ls&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==qr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==T_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Er&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Er&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Er&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class fu extends Qr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ta,this.combine=Cv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const mn=new V,Oc=new Vt;let v1=0;class Oi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:v1++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=lp,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Oc.fromBufferAttribute(this,i),Oc.applyMatrix3(t),this.setXY(i,Oc.x,Oc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix3(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix4(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyNormalMatrix(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.transformDirection(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Vi(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=qe(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Vi(i,this.array)),i}setX(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Vi(i,this.array)),i}setY(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Vi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Vi(i,this.array)),i}setW(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array),l=qe(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array),l=qe(l,this.array),c=qe(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==lp&&(t.usage=this.usage),t}}class Yv extends Oi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class jv extends Oi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class nn extends Oi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let x1=0;const yi=new en,$h=new Xn,Or=new V,oi=new dl,Qo=new dl,Mn=new V;class On extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:x1++}),this.uuid=os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xv(t)?jv:Yv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new de().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,i,s){return yi.makeTranslation(t,i,s),this.applyMatrix4(yi),this}scale(t,i,s){return yi.makeScale(t,i,s),this.applyMatrix4(yi),this}lookAt(t){return $h.lookAt(t),$h.updateMatrix(),this.applyMatrix4($h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new nn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _u);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Qo.setFromBufferAttribute(d),this.morphTargetsRelative?(Mn.addVectors(oi.min,Qo.min),oi.expandByPoint(Mn),Mn.addVectors(oi.max,Qo.max),oi.expandByPoint(Mn)):(oi.expandByPoint(Qo.min),oi.expandByPoint(Qo.max))}oi.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)Mn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Mn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)Mn.fromBufferAttribute(d,p),m&&(Or.fromBufferAttribute(t,p),Mn.add(Or)),l=Math.max(l,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Y=0;Y<s.count;Y++)d[Y]=new V,m[Y]=new V;const p=new V,g=new V,_=new V,y=new Vt,S=new Vt,E=new Vt,T=new V,M=new V;function v(Y,A,w){p.fromBufferAttribute(s,Y),g.fromBufferAttribute(s,A),_.fromBufferAttribute(s,w),y.fromBufferAttribute(c,Y),S.fromBufferAttribute(c,A),E.fromBufferAttribute(c,w),g.sub(p),_.sub(p),S.sub(y),E.sub(y);const k=1/(S.x*E.y-E.x*S.y);isFinite(k)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(_,-S.y).multiplyScalar(k),M.copy(_).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(k),d[Y].add(T),d[A].add(T),d[w].add(T),m[Y].add(M),m[A].add(M),m[w].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let Y=0,A=P.length;Y<A;++Y){const w=P[Y],k=w.start,Q=w.count;for(let et=k,ut=k+Q;et<ut;et+=3)v(t.getX(et+0),t.getX(et+1),t.getX(et+2))}const U=new V,D=new V,B=new V,F=new V;function z(Y){B.fromBufferAttribute(l,Y),F.copy(B);const A=d[Y];U.copy(A),U.sub(B.multiplyScalar(B.dot(A))).normalize(),D.crossVectors(F,A);const k=D.dot(m[Y])<0?-1:1;h.setXYZW(Y,U.x,U.y,U.z,k)}for(let Y=0,A=P.length;Y<A;++Y){const w=P[Y],k=w.start,Q=w.count;for(let et=k,ut=k+Q;et<ut;et+=3)z(t.getX(et+0)),z(t.getX(et+1)),z(t.getX(et+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Oi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,S=s.count;y<S;y++)s.setXYZ(y,0,0,0);const l=new V,c=new V,h=new V,d=new V,m=new V,p=new V,g=new V,_=new V;if(t)for(let y=0,S=t.count;y<S;y+=3){const E=t.getX(y+0),T=t.getX(y+1),M=t.getX(y+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),h.fromBufferAttribute(i,M),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,M),d.add(g),m.add(g),p.add(g),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let y=0,S=i.count;y<S;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),s.setXYZ(y+0,g.x,g.y,g.z),s.setXYZ(y+1,g.x,g.y,g.z),s.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Mn.fromBufferAttribute(t,i),Mn.normalize(),t.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,_=d.normalized,y=new p.constructor(m.length*g);let S=0,E=0;for(let T=0,M=m.length;T<M;T++){d.isInterleavedBufferAttribute?S=m[T]*d.data.stride+d.offset:S=m[T]*g;for(let v=0;v<g;v++)y[E++]=p[S++]}return new Oi(y,g,_)}if(this.index===null)return se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new On,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const y=p[g],S=t(y,s);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,y=p.length;_<y;_++){const S=p[_];g.push(S.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let y=0,S=_.length;y<S;y++)g.push(_[y].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const I_=new en,ws=new vu,Pc=new _u,H_=new V,zc=new V,Bc=new V,Fc=new V,td=new V,Ic=new V,G_=new V,Hc=new V;class ci extends Xn{constructor(t=new On,i=new fu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Ic.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(td.fromBufferAttribute(_,t),h?Ic.addScaledVector(td,g):Ic.addScaledVector(td.sub(i),g))}i.add(Ic)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Pc.copy(s.boundingSphere),Pc.applyMatrix4(c),ws.copy(t.ray).recast(t.near),!(Pc.containsPoint(ws.origin)===!1&&(ws.intersectSphere(Pc,H_)===null||ws.origin.distanceToSquared(H_)>(t.far-t.near)**2))&&(I_.copy(c).invert(),ws.copy(t.ray).applyMatrix4(I_),!(s.boundingBox!==null&&ws.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ws)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,y=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,T=y.length;E<T;E++){const M=y[E],v=h[M.materialIndex],P=Math.max(M.start,S.start),U=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let D=P,B=U;D<B;D+=3){const F=d.getX(D),z=d.getX(D+1),Y=d.getX(D+2);l=Gc(this,v,t,s,p,g,_,F,z,Y),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),T=Math.min(d.count,S.start+S.count);for(let M=E,v=T;M<v;M+=3){const P=d.getX(M),U=d.getX(M+1),D=d.getX(M+2);l=Gc(this,h,t,s,p,g,_,P,U,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,T=y.length;E<T;E++){const M=y[E],v=h[M.materialIndex],P=Math.max(M.start,S.start),U=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let D=P,B=U;D<B;D+=3){const F=D,z=D+1,Y=D+2;l=Gc(this,v,t,s,p,g,_,F,z,Y),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),T=Math.min(m.count,S.start+S.count);for(let M=E,v=T;M<v;M+=3){const P=M,U=M+1,D=M+2;l=Gc(this,h,t,s,p,g,_,P,U,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function y1(r,t,i,s,l,c,h,d){let m;if(t.side===Jn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===ls,d),m===null)return null;Hc.copy(d),Hc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Hc);return p<i.near||p>i.far?null:{distance:p,point:Hc.clone(),object:r}}function Gc(r,t,i,s,l,c,h,d,m,p){r.getVertexPosition(d,zc),r.getVertexPosition(m,Bc),r.getVertexPosition(p,Fc);const g=y1(r,t,i,s,zc,Bc,Fc,G_);if(g){const _=new V;li.getBarycoord(G_,zc,Bc,Fc,_),l&&(g.uv=li.getInterpolatedAttribute(l,d,m,p,_,new Vt)),c&&(g.uv1=li.getInterpolatedAttribute(c,d,m,p,_,new Vt)),h&&(g.normal=li.getInterpolatedAttribute(h,d,m,p,_,new V),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new V,materialIndex:0};li.getNormal(zc,Bc,Fc,y.normal),g.face=y,g.barycoord=_}return g}class Hs extends On{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],_=[];let y=0,S=0;E("z","y","x",-1,-1,s,i,t,h,c,0),E("z","y","x",1,-1,s,i,-t,h,c,1),E("x","z","y",1,1,t,s,i,l,h,2),E("x","z","y",1,-1,t,s,-i,l,h,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new nn(p,3)),this.setAttribute("normal",new nn(g,3)),this.setAttribute("uv",new nn(_,2));function E(T,M,v,P,U,D,B,F,z,Y,A){const w=D/z,k=B/Y,Q=D/2,et=B/2,ut=F/2,lt=z+1,N=Y+1;let I=0,J=0;const St=new V;for(let mt=0;mt<N;mt++){const L=mt*k-et;for(let nt=0;nt<lt;nt++){const gt=nt*w-Q;St[T]=gt*P,St[M]=L*U,St[v]=ut,p.push(St.x,St.y,St.z),St[T]=0,St[M]=0,St[v]=F>0?1:-1,g.push(St.x,St.y,St.z),_.push(nt/z),_.push(1-mt/Y),I+=1}}for(let mt=0;mt<Y;mt++)for(let L=0;L<z;L++){const nt=y+L+lt*mt,gt=y+L+lt*(mt+1),Et=y+(L+1)+lt*(mt+1),Ft=y+(L+1)+lt*mt;m.push(nt,gt,Ft),m.push(gt,Et,Ft),J+=6}d.addGroup(S,J,A),S+=J,y+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Kr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function kn(r){const t={};for(let i=0;i<r.length;i++){const s=Kr(r[i]);for(const l in s)t[l]=s[l]}return t}function S1(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Zv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const M1={clone:Kr,merge:kn};var b1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,E1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends Qr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=b1,this.fragmentShader=E1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Kr(t.uniforms),this.uniformsGroups=S1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Kv extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const as=new V,V_=new Vt,k_=new Vt;class Mi extends Kv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=cp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(rl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cp*2*Math.atan(Math.tan(rl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(as.x,as.y).multiplyScalar(-t/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(as.x,as.y).multiplyScalar(-t/as.z)}getViewSize(t,i){return this.getViewBounds(t,V_,k_),i.subVectors(k_,V_)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(rl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Pr=-90,zr=1;class T1 extends Xn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Mi(Pr,zr,t,i);l.layers=this.layers,this.add(l);const c=new Mi(Pr,zr,t,i);c.layers=this.layers,this.add(c);const h=new Mi(Pr,zr,t,i);h.layers=this.layers,this.add(h);const d=new Mi(Pr,zr,t,i);d.layers=this.layers,this.add(d);const m=new Mi(Pr,zr,t,i);m.layers=this.layers,this.add(m);const p=new Mi(Pr,zr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Xi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===lu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,_=t.getRenderTarget(),y=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(_,y,S),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Qv extends Hn{constructor(t=[],i=Fs,s,l,c,h,d,m,p,g){super(t,i,s,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Jv extends qi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Qv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Hs(5,5,5),c=new ji({name:"CubemapFromEquirect",uniforms:Kr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Jn,blending:Sa});c.uniforms.tEquirect.value=i;const h=new ci(l,c),d=i.minFilter;return i.minFilter===Ps&&(i.minFilter=In),new T1(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class Bs extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const A1={type:"move"};class ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const T of t.hand.values()){const M=i.getJointPose(T,s),v=this._getHandJoint(p,T);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],y=g.position.distanceTo(_.position),S=.02,E=.005;p.inputState.pinching&&y>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(A1)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Bs;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class Tp{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Re(t),this.density=i}clone(){return new Tp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class R1 extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ta,this.environmentIntensity=1,this.environmentRotation=new Ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class C1{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=lp,this.updateRanges=[],this.version=0,this.uuid=os()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,s){t*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[s+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=os()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=os()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vn=new V;class hu{constructor(t,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,s=this.data.count;i<s;i++)Vn.fromBufferAttribute(this,i),Vn.applyMatrix4(t),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Vn.fromBufferAttribute(this,i),Vn.applyNormalMatrix(t),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Vn.fromBufferAttribute(this,i),Vn.transformDirection(t),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}getComponent(t,i){let s=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(s=Vi(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=qe(s,this.array)),this.data.array[t*this.data.stride+this.offset+i]=s,this}setX(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Vi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Vi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Vi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Vi(i,this.array)),i}setXY(t,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this}setXYZ(t,i,s,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array),l=qe(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array),l=qe(l,this.array),c=qe(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){uu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Oi(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new hu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){uu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class $v extends Qr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Br;const Jo=new V,Fr=new V,Ir=new V,Hr=new Vt,$o=new Vt,tx=new en,Vc=new V,tl=new V,kc=new V,X_=new Vt,nd=new Vt,W_=new Vt;class w1 extends Xn{constructor(t=new $v){if(super(),this.isSprite=!0,this.type="Sprite",Br===void 0){Br=new On;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new C1(i,5);Br.setIndex([0,1,2,0,2,3]),Br.setAttribute("position",new hu(s,3,0,!1)),Br.setAttribute("uv",new hu(s,2,3,!1))}this.geometry=Br,this.material=t,this.center=new Vt(.5,.5),this.count=1}raycast(t,i){t.camera===null&&Ae('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fr.setFromMatrixScale(this.matrixWorld),tx.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ir.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fr.multiplyScalar(-Ir.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const h=this.center;Xc(Vc.set(-.5,-.5,0),Ir,h,Fr,l,c),Xc(tl.set(.5,-.5,0),Ir,h,Fr,l,c),Xc(kc.set(.5,.5,0),Ir,h,Fr,l,c),X_.set(0,0),nd.set(1,0),W_.set(1,1);let d=t.ray.intersectTriangle(Vc,tl,kc,!1,Jo);if(d===null&&(Xc(tl.set(-.5,.5,0),Ir,h,Fr,l,c),nd.set(0,1),d=t.ray.intersectTriangle(Vc,kc,tl,!1,Jo),d===null))return;const m=t.ray.origin.distanceTo(Jo);m<t.near||m>t.far||i.push({distance:m,point:Jo.clone(),uv:li.getInterpolation(Jo,Vc,tl,kc,X_,nd,W_,new Vt),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Xc(r,t,i,s,l,c){Hr.subVectors(r,i).addScalar(.5).multiply(s),l!==void 0?($o.x=c*Hr.x-l*Hr.y,$o.y=l*Hr.x+c*Hr.y):$o.copy(Hr),r.copy(t),r.x+=$o.x,r.y+=$o.y,r.applyMatrix4(tx)}class D1 extends Hn{constructor(t=null,i=1,s=1,l,c,h,d,m,p=Ln,g=Ln,_,y){super(null,h,d,m,p,g,l,c,_,y),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const id=new V,U1=new V,N1=new de;class va{constructor(t=new V(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=id.subVectors(s,i).cross(U1.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(id),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||N1.getNormalMatrix(t),l=this.coplanarPoint(id).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ds=new _u,L1=new Vt(.5,.5),Wc=new V;class ex{constructor(t=new va,i=new va,s=new va,l=new va,c=new va,h=new va){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Xi,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],g=c[4],_=c[5],y=c[6],S=c[7],E=c[8],T=c[9],M=c[10],v=c[11],P=c[12],U=c[13],D=c[14],B=c[15];if(l[0].setComponents(p-h,S-g,v-E,B-P).normalize(),l[1].setComponents(p+h,S+g,v+E,B+P).normalize(),l[2].setComponents(p+d,S+_,v+T,B+U).normalize(),l[3].setComponents(p-d,S-_,v-T,B-U).normalize(),s)l[4].setComponents(m,y,M,D).normalize(),l[5].setComponents(p-m,S-y,v-M,B-D).normalize();else if(l[4].setComponents(p-m,S-y,v-M,B-D).normalize(),i===Xi)l[5].setComponents(p+m,S+y,v+M,B+D).normalize();else if(i===lu)l[5].setComponents(m,y,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(t){Ds.center.set(0,0,0);const i=L1.distanceTo(t.center);return Ds.radius=.7071067811865476+i,Ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Wc.x=l.normal.x>0?t.max.x:t.min.x,Wc.y=l.normal.y>0?t.max.y:t.min.y,Wc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Wc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class du extends Qr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const pu=new V,mu=new V,q_=new en,el=new vu,qc=new _u,ad=new V,Y_=new V;class nx extends Xn{constructor(t=new On,i=new du){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)pu.fromBufferAttribute(i,l-1),mu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=pu.distanceTo(mu);t.setAttribute("lineDistance",new nn(s,1))}else se("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),qc.copy(s.boundingSphere),qc.applyMatrix4(l),qc.radius+=c,t.ray.intersectsSphere(qc)===!1)return;q_.copy(l).invert(),el.copy(t.ray).applyMatrix4(q_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=s.index,y=s.attributes.position;if(g!==null){const S=Math.max(0,h.start),E=Math.min(g.count,h.start+h.count);for(let T=S,M=E-1;T<M;T+=p){const v=g.getX(T),P=g.getX(T+1),U=Yc(this,t,el,m,v,P,T);U&&i.push(U)}if(this.isLineLoop){const T=g.getX(E-1),M=g.getX(S),v=Yc(this,t,el,m,T,M,E-1);v&&i.push(v)}}else{const S=Math.max(0,h.start),E=Math.min(y.count,h.start+h.count);for(let T=S,M=E-1;T<M;T+=p){const v=Yc(this,t,el,m,T,T+1,T);v&&i.push(v)}if(this.isLineLoop){const T=Yc(this,t,el,m,E-1,S,E-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Yc(r,t,i,s,l,c,h){const d=r.geometry.attributes.position;if(pu.fromBufferAttribute(d,l),mu.fromBufferAttribute(d,c),i.distanceSqToSegment(pu,mu,ad,Y_)>s)return;ad.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(ad);if(!(p<t.near||p>t.far))return{distance:p,point:Y_.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const j_=new V,Z_=new V;class ix extends nx{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)j_.fromBufferAttribute(i,l),Z_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+j_.distanceTo(Z_);t.setAttribute("lineDistance",new nn(s,1))}else se("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class O1 extends Hn{constructor(t,i,s,l,c,h,d,m,p){super(t,i,s,l,c,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hl extends Hn{constructor(t,i,s=Yi,l,c,h,d=Ln,m=Ln,p,g=Ea,_=1){if(g!==Ea&&g!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:_};super(y,l,c,h,d,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new bp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class P1 extends hl{constructor(t,i=Yi,s=Fs,l,c,h=Ln,d=Ln,m,p=Ea){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,i,s,l,c,h,d,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ax extends Hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class xu extends On{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const g=[],_=[],y=[],S=[];let E=0;const T=[],M=s/2;let v=0;P(),h===!1&&(t>0&&U(!0),i>0&&U(!1)),this.setIndex(g),this.setAttribute("position",new nn(_,3)),this.setAttribute("normal",new nn(y,3)),this.setAttribute("uv",new nn(S,2));function P(){const D=new V,B=new V;let F=0;const z=(i-t)/s;for(let Y=0;Y<=c;Y++){const A=[],w=Y/c,k=w*(i-t)+t;for(let Q=0;Q<=l;Q++){const et=Q/l,ut=et*m+d,lt=Math.sin(ut),N=Math.cos(ut);B.x=k*lt,B.y=-w*s+M,B.z=k*N,_.push(B.x,B.y,B.z),D.set(lt,z,N).normalize(),y.push(D.x,D.y,D.z),S.push(et,1-w),A.push(E++)}T.push(A)}for(let Y=0;Y<l;Y++)for(let A=0;A<c;A++){const w=T[A][Y],k=T[A+1][Y],Q=T[A+1][Y+1],et=T[A][Y+1];(t>0||A!==0)&&(g.push(w,k,et),F+=3),(i>0||A!==c-1)&&(g.push(k,Q,et),F+=3)}p.addGroup(v,F,0),v+=F}function U(D){const B=E,F=new Vt,z=new V;let Y=0;const A=D===!0?t:i,w=D===!0?1:-1;for(let Q=1;Q<=l;Q++)_.push(0,M*w,0),y.push(0,w,0),S.push(.5,.5),E++;const k=E;for(let Q=0;Q<=l;Q++){const ut=Q/l*m+d,lt=Math.cos(ut),N=Math.sin(ut);z.x=A*N,z.y=M*w,z.z=A*lt,_.push(z.x,z.y,z.z),y.push(0,w,0),F.x=lt*.5+.5,F.y=N*.5*w+.5,S.push(F.x,F.y),E++}for(let Q=0;Q<l;Q++){const et=B+Q,ut=k+Q;D===!0?g.push(ut,ut+1,et):g.push(ut+1,ut,et),Y+=3}p.addGroup(v,Y,D===!0?1:2),v+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xu(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ap extends xu{constructor(t=1,i=1,s=32,l=1,c=!1,h=0,d=Math.PI*2){super(0,t,i,s,l,c,h,d),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:h,thetaLength:d}}static fromJSON(t){return new Ap(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const jc=new V,Zc=new V,sd=new V,Kc=new li;class z1 extends On{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),c=Math.cos(rl*i),h=t.getIndex(),d=t.getAttribute("position"),m=h?h.count:d.count,p=[0,0,0],g=["a","b","c"],_=new Array(3),y={},S=[];for(let E=0;E<m;E+=3){h?(p[0]=h.getX(E),p[1]=h.getX(E+1),p[2]=h.getX(E+2)):(p[0]=E,p[1]=E+1,p[2]=E+2);const{a:T,b:M,c:v}=Kc;if(T.fromBufferAttribute(d,p[0]),M.fromBufferAttribute(d,p[1]),v.fromBufferAttribute(d,p[2]),Kc.getNormal(sd),_[0]=`${Math.round(T.x*l)},${Math.round(T.y*l)},${Math.round(T.z*l)}`,_[1]=`${Math.round(M.x*l)},${Math.round(M.y*l)},${Math.round(M.z*l)}`,_[2]=`${Math.round(v.x*l)},${Math.round(v.y*l)},${Math.round(v.z*l)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let P=0;P<3;P++){const U=(P+1)%3,D=_[P],B=_[U],F=Kc[g[P]],z=Kc[g[U]],Y=`${D}_${B}`,A=`${B}_${D}`;A in y&&y[A]?(sd.dot(y[A].normal)<=c&&(S.push(F.x,F.y,F.z),S.push(z.x,z.y,z.z)),y[A]=null):Y in y||(y[Y]={index0:p[P],index1:p[U],normal:sd.clone()})}}for(const E in y)if(y[E]){const{index0:T,index1:M}=y[E];jc.fromBufferAttribute(d,T),Zc.fromBufferAttribute(d,M),S.push(jc.x,jc.y,jc.z),S.push(Zc.x,Zc.y,Zc.z)}this.setAttribute("position",new nn(S,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Aa{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){se("Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let h=1;h<=t;h++)s=this.getPoint(h/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let h;i?h=i:h=t*s[c-1];let d=0,m=c-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=s[l]-h,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===h)return l/(c-1);const g=s[l],y=s[l+1]-g,S=(h-g)/y;return(l+S)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const h=this.getPoint(l),d=this.getPoint(c),m=i||(h.isVector2?new Vt:new V);return m.copy(d).sub(h).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new V,l=[],c=[],h=[],d=new V,m=new en;for(let S=0;S<=t;S++){const E=S/t;l[S]=this.getTangentAt(E,new V)}c[0]=new V,h[0]=new V;let p=Number.MAX_VALUE;const g=Math.abs(l[0].x),_=Math.abs(l[0].y),y=Math.abs(l[0].z);g<=p&&(p=g,s.set(1,0,0)),_<=p&&(p=_,s.set(0,1,0)),y<=p&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],d),h[0].crossVectors(l[0],c[0]);for(let S=1;S<=t;S++){if(c[S]=c[S-1].clone(),h[S]=h[S-1].clone(),d.crossVectors(l[S-1],l[S]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(xe(l[S-1].dot(l[S]),-1,1));c[S].applyMatrix4(m.makeRotationAxis(d,E))}h[S].crossVectors(l[S],c[S])}if(i===!0){let S=Math.acos(xe(c[0].dot(c[t]),-1,1));S/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(S=-S);for(let E=1;E<=t;E++)c[E].applyMatrix4(m.makeRotationAxis(l[E],S*E)),h[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:h}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class sx extends Aa{constructor(t=0,i=0,s=1,l=1,c=0,h=Math.PI*2,d=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=h,this.aClockwise=d,this.aRotation=m}getPoint(t,i=new Vt){const s=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const h=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(h?c=0:c=l),this.aClockwise===!0&&!h&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),y=m-this.aX,S=p-this.aY;m=y*g-S*_+this.aX,p=y*_+S*g+this.aY}return s.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class B1 extends sx{constructor(t,i,s,l,c,h){super(t,i,s,s,l,c,h),this.isArcCurve=!0,this.type="ArcCurve"}}function Rp(){let r=0,t=0,i=0,s=0;function l(c,h,d,m){r=c,t=d,i=-3*c+3*h-2*d-m,s=2*c-2*h+d+m}return{initCatmullRom:function(c,h,d,m,p){l(h,d,p*(d-c),p*(m-h))},initNonuniformCatmullRom:function(c,h,d,m,p,g,_){let y=(h-c)/p-(d-c)/(p+g)+(d-h)/g,S=(d-h)/g-(m-h)/(g+_)+(m-d)/_;y*=g,S*=g,l(h,d,y,S)},calc:function(c){const h=c*c,d=h*c;return r+t*c+i*h+s*d}}}const Qc=new V,rd=new Rp,od=new Rp,ld=new Rp;class rx extends Aa{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new V){const s=i,l=this.points,c=l.length,h=(c-(this.closed?0:1))*t;let d=Math.floor(h),m=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let p,g;this.closed||d>0?p=l[(d-1)%c]:(Qc.subVectors(l[0],l[1]).add(l[0]),p=Qc);const _=l[d%c],y=l[(d+1)%c];if(this.closed||d+2<c?g=l[(d+2)%c]:(Qc.subVectors(l[c-1],l[c-2]).add(l[c-1]),g=Qc),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(_),S),T=Math.pow(_.distanceToSquared(y),S),M=Math.pow(y.distanceToSquared(g),S);T<1e-4&&(T=1),E<1e-4&&(E=T),M<1e-4&&(M=T),rd.initNonuniformCatmullRom(p.x,_.x,y.x,g.x,E,T,M),od.initNonuniformCatmullRom(p.y,_.y,y.y,g.y,E,T,M),ld.initNonuniformCatmullRom(p.z,_.z,y.z,g.z,E,T,M)}else this.curveType==="catmullrom"&&(rd.initCatmullRom(p.x,_.x,y.x,g.x,this.tension),od.initCatmullRom(p.y,_.y,y.y,g.y,this.tension),ld.initCatmullRom(p.z,_.z,y.z,g.z,this.tension));return s.set(rd.calc(m),od.calc(m),ld.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new V().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function K_(r,t,i,s,l){const c=(s-t)*.5,h=(l-i)*.5,d=r*r,m=r*d;return(2*i-2*s+c+h)*m+(-3*i+3*s-2*c-h)*d+c*r+i}function F1(r,t){const i=1-r;return i*i*t}function I1(r,t){return 2*(1-r)*r*t}function H1(r,t){return r*r*t}function ol(r,t,i,s){return F1(r,t)+I1(r,i)+H1(r,s)}function G1(r,t){const i=1-r;return i*i*i*t}function V1(r,t){const i=1-r;return 3*i*i*r*t}function k1(r,t){return 3*(1-r)*r*r*t}function X1(r,t){return r*r*r*t}function ll(r,t,i,s,l){return G1(r,t)+V1(r,i)+k1(r,s)+X1(r,l)}class W1 extends Aa{constructor(t=new Vt,i=new Vt,s=new Vt,l=new Vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new Vt){const s=i,l=this.v0,c=this.v1,h=this.v2,d=this.v3;return s.set(ll(t,l.x,c.x,h.x,d.x),ll(t,l.y,c.y,h.y,d.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class q1 extends Aa{constructor(t=new V,i=new V,s=new V,l=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new V){const s=i,l=this.v0,c=this.v1,h=this.v2,d=this.v3;return s.set(ll(t,l.x,c.x,h.x,d.x),ll(t,l.y,c.y,h.y,d.y),ll(t,l.z,c.z,h.z,d.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Y1 extends Aa{constructor(t=new Vt,i=new Vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new Vt){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new Vt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class j1 extends Aa{constructor(t=new V,i=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new V){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new V){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Z1 extends Aa{constructor(t=new Vt,i=new Vt,s=new Vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new Vt){const s=i,l=this.v0,c=this.v1,h=this.v2;return s.set(ol(t,l.x,c.x,h.x),ol(t,l.y,c.y,h.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ox extends Aa{constructor(t=new V,i=new V,s=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new V){const s=i,l=this.v0,c=this.v1,h=this.v2;return s.set(ol(t,l.x,c.x,h.x),ol(t,l.y,c.y,h.y),ol(t,l.z,c.z,h.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class K1 extends Aa{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new Vt){const s=i,l=this.points,c=(l.length-1)*t,h=Math.floor(c),d=c-h,m=l[h===0?h:h-1],p=l[h],g=l[h>l.length-2?l.length-1:h+1],_=l[h>l.length-3?l.length-1:h+2];return s.set(K_(d,m.x,p.x,g.x,_.x),K_(d,m.y,p.y,g.y,_.y)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new Vt().fromArray(l))}return this}}var Q1=Object.freeze({__proto__:null,ArcCurve:B1,CatmullRomCurve3:rx,CubicBezierCurve:W1,CubicBezierCurve3:q1,EllipseCurve:sx,LineCurve:Y1,LineCurve3:j1,QuadraticBezierCurve:Z1,QuadraticBezierCurve3:ox,SplineCurve:K1});class yu extends On{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,_=t/d,y=i/m,S=[],E=[],T=[],M=[];for(let v=0;v<g;v++){const P=v*y-h;for(let U=0;U<p;U++){const D=U*_-c;E.push(D,-P,0),T.push(0,0,1),M.push(U/d),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let P=0;P<d;P++){const U=P+p*v,D=P+p*(v+1),B=P+1+p*(v+1),F=P+1+p*v;S.push(U,D,F),S.push(D,B,F)}this.setIndex(S),this.setAttribute("position",new nn(E,3)),this.setAttribute("normal",new nn(T,3)),this.setAttribute("uv",new nn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yu(t.width,t.height,t.widthSegments,t.heightSegments)}}class Cp extends On{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const g=[],_=new V,y=new V,S=[],E=[],T=[],M=[];for(let v=0;v<=s;v++){const P=[],U=v/s;let D=0;v===0&&h===0?D=.5/i:v===s&&m===Math.PI&&(D=-.5/i);for(let B=0;B<=i;B++){const F=B/i;_.x=-t*Math.cos(l+F*c)*Math.sin(h+U*d),_.y=t*Math.cos(h+U*d),_.z=t*Math.sin(l+F*c)*Math.sin(h+U*d),E.push(_.x,_.y,_.z),y.copy(_).normalize(),T.push(y.x,y.y,y.z),M.push(F+D,1-U),P.push(p++)}g.push(P)}for(let v=0;v<s;v++)for(let P=0;P<i;P++){const U=g[v][P+1],D=g[v][P],B=g[v+1][P],F=g[v+1][P+1];(v!==0||h>0)&&S.push(U,D,F),(v!==s-1||m<Math.PI)&&S.push(D,B,F)}this.setIndex(S),this.setAttribute("position",new nn(E,3)),this.setAttribute("normal",new nn(T,3)),this.setAttribute("uv",new nn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class wp extends On{constructor(t=new ox(new V(-1,-1,0),new V(-1,1,0),new V(1,1,0)),i=64,s=1,l=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:s,radialSegments:l,closed:c};const h=t.computeFrenetFrames(i,c);this.tangents=h.tangents,this.normals=h.normals,this.binormals=h.binormals;const d=new V,m=new V,p=new Vt;let g=new V;const _=[],y=[],S=[],E=[];T(),this.setIndex(E),this.setAttribute("position",new nn(_,3)),this.setAttribute("normal",new nn(y,3)),this.setAttribute("uv",new nn(S,2));function T(){for(let U=0;U<i;U++)M(U);M(c===!1?i:0),P(),v()}function M(U){g=t.getPointAt(U/i,g);const D=h.normals[U],B=h.binormals[U];for(let F=0;F<=l;F++){const z=F/l*Math.PI*2,Y=Math.sin(z),A=-Math.cos(z);m.x=A*D.x+Y*B.x,m.y=A*D.y+Y*B.y,m.z=A*D.z+Y*B.z,m.normalize(),y.push(m.x,m.y,m.z),d.x=g.x+s*m.x,d.y=g.y+s*m.y,d.z=g.z+s*m.z,_.push(d.x,d.y,d.z)}}function v(){for(let U=1;U<=i;U++)for(let D=1;D<=l;D++){const B=(l+1)*(U-1)+(D-1),F=(l+1)*U+(D-1),z=(l+1)*U+D,Y=(l+1)*(U-1)+D;E.push(B,F,Y),E.push(F,z,Y)}}function P(){for(let U=0;U<=i;U++)for(let D=0;D<=l;D++)p.x=U/i,p.y=D/l,S.push(p.x,p.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new wp(new Q1[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class J1 extends ji{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $1 extends Qr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=WM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tb extends Qr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class lx extends Kv{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class eb extends Mi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Q_=new en;class nb{constructor(t,i,s=0,l=1/0){this.ray=new vu(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new Ep,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Ae("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return Q_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Q_),this}intersectObject(t,i=!0,s=[]){return up(t,this,s,i),s.sort(J_),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)up(t[l],this,s,i);return s.sort(J_),s}}function J_(r,t){return r.distance-t.distance}function up(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,d=c.length;h<d;h++)up(c[h],t,i,!0)}}class $_{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(xe(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ib extends ix{constructor(t=10,i=10,s=4473924,l=8947848){s=new Re(s),l=new Re(l);const c=i/2,h=t/i,d=t/2,m=[],p=[];for(let y=0,S=0,E=-d;y<=i;y++,E+=h){m.push(-d,0,E,d,0,E),m.push(E,0,-d,E,0,d);const T=y===c?s:l;T.toArray(p,S),S+=3,T.toArray(p,S),S+=3,T.toArray(p,S),S+=3,T.toArray(p,S),S+=3}const g=new On;g.setAttribute("position",new nn(m,3)),g.setAttribute("color",new nn(p,3));const _=new du({vertexColors:!0,toneMapped:!1});super(g,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class ab extends Gs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){se("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function tv(r,t,i,s){const l=sb(s);switch(i){case Gv:return r*t;case kv:return r*t/l.components*l.byteLength;case vp:return r*t/l.components*l.byteLength;case jr:return r*t*2/l.components*l.byteLength;case xp:return r*t*2/l.components*l.byteLength;case Vv:return r*t*3/l.components*l.byteLength;case Li:return r*t*4/l.components*l.byteLength;case yp:return r*t*4/l.components*l.byteLength;case nu:case iu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case au:case su:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ud:case Ld:return Math.max(r,16)*Math.max(t,8)/4;case Dd:case Nd:return Math.max(r,8)*Math.max(t,8)/2;case Od:case Pd:case Bd:case Fd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case zd:case Id:case Hd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Gd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Vd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case kd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Xd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Wd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case qd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Yd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case jd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Zd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Kd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Qd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Jd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case $d:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case tp:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case ep:case np:case ip:return Math.ceil(r/4)*Math.ceil(t/4)*16;case ap:case sp:return Math.ceil(r/4)*Math.ceil(t/4)*8;case rp:case op:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function sb(r){switch(r){case bi:case Bv:return{byteLength:1,components:1};case cl:case Fv:case ba:return{byteLength:2,components:1};case gp:case _p:return{byteLength:2,components:4};case Yi:case mp:case ki:return{byteLength:4,components:1};case Iv:case Hv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pp}}));typeof window<"u"&&(window.__THREE__?se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pp);function cx(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function rb(r){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,y=r.createBuffer();r.bindBuffer(m,y),r.bufferData(m,p,g),d.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,d),_.length===0)r.bufferSubData(p,0,g);else{_.sort((S,E)=>S.start-E.start);let y=0;for(let S=1;S<_.length;S++){const E=_[y],T=_[S];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++y,_[y]=T)}_.length=y+1;for(let S=0,E=_.length;S<E;S++){const T=_[S];r.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var ob=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ub=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,db=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_b=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Eb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ab=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Db=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ub=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Nb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Lb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ob=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ib=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$b=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,oE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_E=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,SE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ME=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,TE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,AE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,DE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,UE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,FE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,IE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,kE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,XE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,WE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,KE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,JE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$E=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,eT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,gT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_T=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ST=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ET=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,TT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,RT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,CT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,UT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,PT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,FT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,IT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ge={alphahash_fragment:ob,alphahash_pars_fragment:lb,alphamap_fragment:cb,alphamap_pars_fragment:ub,alphatest_fragment:fb,alphatest_pars_fragment:hb,aomap_fragment:db,aomap_pars_fragment:pb,batching_pars_vertex:mb,batching_vertex:gb,begin_vertex:_b,beginnormal_vertex:vb,bsdfs:xb,iridescence_fragment:yb,bumpmap_pars_fragment:Sb,clipping_planes_fragment:Mb,clipping_planes_pars_fragment:bb,clipping_planes_pars_vertex:Eb,clipping_planes_vertex:Tb,color_fragment:Ab,color_pars_fragment:Rb,color_pars_vertex:Cb,color_vertex:wb,common:Db,cube_uv_reflection_fragment:Ub,defaultnormal_vertex:Nb,displacementmap_pars_vertex:Lb,displacementmap_vertex:Ob,emissivemap_fragment:Pb,emissivemap_pars_fragment:zb,colorspace_fragment:Bb,colorspace_pars_fragment:Fb,envmap_fragment:Ib,envmap_common_pars_fragment:Hb,envmap_pars_fragment:Gb,envmap_pars_vertex:Vb,envmap_physical_pars_fragment:$b,envmap_vertex:kb,fog_vertex:Xb,fog_pars_vertex:Wb,fog_fragment:qb,fog_pars_fragment:Yb,gradientmap_pars_fragment:jb,lightmap_pars_fragment:Zb,lights_lambert_fragment:Kb,lights_lambert_pars_fragment:Qb,lights_pars_begin:Jb,lights_toon_fragment:tE,lights_toon_pars_fragment:eE,lights_phong_fragment:nE,lights_phong_pars_fragment:iE,lights_physical_fragment:aE,lights_physical_pars_fragment:sE,lights_fragment_begin:rE,lights_fragment_maps:oE,lights_fragment_end:lE,logdepthbuf_fragment:cE,logdepthbuf_pars_fragment:uE,logdepthbuf_pars_vertex:fE,logdepthbuf_vertex:hE,map_fragment:dE,map_pars_fragment:pE,map_particle_fragment:mE,map_particle_pars_fragment:gE,metalnessmap_fragment:_E,metalnessmap_pars_fragment:vE,morphinstance_vertex:xE,morphcolor_vertex:yE,morphnormal_vertex:SE,morphtarget_pars_vertex:ME,morphtarget_vertex:bE,normal_fragment_begin:EE,normal_fragment_maps:TE,normal_pars_fragment:AE,normal_pars_vertex:RE,normal_vertex:CE,normalmap_pars_fragment:wE,clearcoat_normal_fragment_begin:DE,clearcoat_normal_fragment_maps:UE,clearcoat_pars_fragment:NE,iridescence_pars_fragment:LE,opaque_fragment:OE,packing:PE,premultiplied_alpha_fragment:zE,project_vertex:BE,dithering_fragment:FE,dithering_pars_fragment:IE,roughnessmap_fragment:HE,roughnessmap_pars_fragment:GE,shadowmap_pars_fragment:VE,shadowmap_pars_vertex:kE,shadowmap_vertex:XE,shadowmask_pars_fragment:WE,skinbase_vertex:qE,skinning_pars_vertex:YE,skinning_vertex:jE,skinnormal_vertex:ZE,specularmap_fragment:KE,specularmap_pars_fragment:QE,tonemapping_fragment:JE,tonemapping_pars_fragment:$E,transmission_fragment:tT,transmission_pars_fragment:eT,uv_pars_fragment:nT,uv_pars_vertex:iT,uv_vertex:aT,worldpos_vertex:sT,background_vert:rT,background_frag:oT,backgroundCube_vert:lT,backgroundCube_frag:cT,cube_vert:uT,cube_frag:fT,depth_vert:hT,depth_frag:dT,distance_vert:pT,distance_frag:mT,equirect_vert:gT,equirect_frag:_T,linedashed_vert:vT,linedashed_frag:xT,meshbasic_vert:yT,meshbasic_frag:ST,meshlambert_vert:MT,meshlambert_frag:bT,meshmatcap_vert:ET,meshmatcap_frag:TT,meshnormal_vert:AT,meshnormal_frag:RT,meshphong_vert:CT,meshphong_frag:wT,meshphysical_vert:DT,meshphysical_frag:UT,meshtoon_vert:NT,meshtoon_frag:LT,points_vert:OT,points_frag:PT,shadow_vert:zT,shadow_frag:BT,sprite_vert:FT,sprite_frag:IT},Pt={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Gi={basic:{uniforms:kn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:kn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Re(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:kn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:kn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:kn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Re(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:kn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:kn([Pt.points,Pt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:kn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:kn([Pt.common,Pt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:kn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:kn([Pt.sprite,Pt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distance:{uniforms:kn([Pt.common,Pt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distance_vert,fragmentShader:ge.distance_frag},shadow:{uniforms:kn([Pt.lights,Pt.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Gi.physical={uniforms:kn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const Jc={r:0,b:0,g:0},Us=new Ta,HT=new en;function GT(r,t,i,s,l,c,h){const d=new Re(0);let m=c===!0?0:1,p,g,_=null,y=0,S=null;function E(U){let D=U.isScene===!0?U.background:null;return D&&D.isTexture&&(D=(U.backgroundBlurriness>0?i:t).get(D)),D}function T(U){let D=!1;const B=E(U);B===null?v(d,m):B&&B.isColor&&(v(B,1),D=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,h):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(U,D){const B=E(D);B&&(B.isCubeTexture||B.mapping===gu)?(g===void 0&&(g=new ci(new Hs(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:Kr(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,z,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Us.copy(D.backgroundRotation),Us.x*=-1,Us.y*=-1,Us.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),g.material.uniforms.envMap.value=B,g.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(HT.makeRotationFromEuler(Us)),g.material.toneMapped=De.getTransfer(B.colorSpace)!==Ve,(_!==B||y!==B.version||S!==r.toneMapping)&&(g.material.needsUpdate=!0,_=B,y=B.version,S=r.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):B&&B.isTexture&&(p===void 0&&(p=new ci(new yu(2,2),new ji({name:"BackgroundMaterial",uniforms:Kr(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=B,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=De.getTransfer(B.colorSpace)!==Ve,B.matrixAutoUpdate===!0&&B.updateMatrix(),p.material.uniforms.uvTransform.value.copy(B.matrix),(_!==B||y!==B.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,_=B,y=B.version,S=r.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function v(U,D){U.getRGB(Jc,Zv(r)),s.buffers.color.setClear(Jc.r,Jc.g,Jc.b,D,h)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,D=1){d.set(U),m=D,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,v(d,m)},render:T,addToRenderList:M,dispose:P}}function VT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=y(null);let c=l,h=!1;function d(w,k,Q,et,ut){let lt=!1;const N=_(et,Q,k);c!==N&&(c=N,p(c.object)),lt=S(w,et,Q,ut),lt&&E(w,et,Q,ut),ut!==null&&t.update(ut,r.ELEMENT_ARRAY_BUFFER),(lt||h)&&(h=!1,D(w,k,Q,et),ut!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ut).buffer))}function m(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function g(w){return r.deleteVertexArray(w)}function _(w,k,Q){const et=Q.wireframe===!0;let ut=s[w.id];ut===void 0&&(ut={},s[w.id]=ut);let lt=ut[k.id];lt===void 0&&(lt={},ut[k.id]=lt);let N=lt[et];return N===void 0&&(N=y(m()),lt[et]=N),N}function y(w){const k=[],Q=[],et=[];for(let ut=0;ut<i;ut++)k[ut]=0,Q[ut]=0,et[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Q,attributeDivisors:et,object:w,attributes:{},index:null}}function S(w,k,Q,et){const ut=c.attributes,lt=k.attributes;let N=0;const I=Q.getAttributes();for(const J in I)if(I[J].location>=0){const mt=ut[J];let L=lt[J];if(L===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(L=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(L=w.instanceColor)),mt===void 0||mt.attribute!==L||L&&mt.data!==L.data)return!0;N++}return c.attributesNum!==N||c.index!==et}function E(w,k,Q,et){const ut={},lt=k.attributes;let N=0;const I=Q.getAttributes();for(const J in I)if(I[J].location>=0){let mt=lt[J];mt===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(mt=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(mt=w.instanceColor));const L={};L.attribute=mt,mt&&mt.data&&(L.data=mt.data),ut[J]=L,N++}c.attributes=ut,c.attributesNum=N,c.index=et}function T(){const w=c.newAttributes;for(let k=0,Q=w.length;k<Q;k++)w[k]=0}function M(w){v(w,0)}function v(w,k){const Q=c.newAttributes,et=c.enabledAttributes,ut=c.attributeDivisors;Q[w]=1,et[w]===0&&(r.enableVertexAttribArray(w),et[w]=1),ut[w]!==k&&(r.vertexAttribDivisor(w,k),ut[w]=k)}function P(){const w=c.newAttributes,k=c.enabledAttributes;for(let Q=0,et=k.length;Q<et;Q++)k[Q]!==w[Q]&&(r.disableVertexAttribArray(Q),k[Q]=0)}function U(w,k,Q,et,ut,lt,N){N===!0?r.vertexAttribIPointer(w,k,Q,ut,lt):r.vertexAttribPointer(w,k,Q,et,ut,lt)}function D(w,k,Q,et){T();const ut=et.attributes,lt=Q.getAttributes(),N=k.defaultAttributeValues;for(const I in lt){const J=lt[I];if(J.location>=0){let St=ut[I];if(St===void 0&&(I==="instanceMatrix"&&w.instanceMatrix&&(St=w.instanceMatrix),I==="instanceColor"&&w.instanceColor&&(St=w.instanceColor)),St!==void 0){const mt=St.normalized,L=St.itemSize,nt=t.get(St);if(nt===void 0)continue;const gt=nt.buffer,Et=nt.type,Ft=nt.bytesPerElement,it=Et===r.INT||Et===r.UNSIGNED_INT||St.gpuType===mp;if(St.isInterleavedBufferAttribute){const ht=St.data,wt=ht.stride,kt=St.offset;if(ht.isInstancedInterleavedBuffer){for(let Ht=0;Ht<J.locationSize;Ht++)v(J.location+Ht,ht.meshPerAttribute);w.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Ht=0;Ht<J.locationSize;Ht++)M(J.location+Ht);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let Ht=0;Ht<J.locationSize;Ht++)U(J.location+Ht,L/J.locationSize,Et,mt,wt*Ft,(kt+L/J.locationSize*Ht)*Ft,it)}else{if(St.isInstancedBufferAttribute){for(let ht=0;ht<J.locationSize;ht++)v(J.location+ht,St.meshPerAttribute);w.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let ht=0;ht<J.locationSize;ht++)M(J.location+ht);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let ht=0;ht<J.locationSize;ht++)U(J.location+ht,L/J.locationSize,Et,mt,L*Ft,L/J.locationSize*ht*Ft,it)}}else if(N!==void 0){const mt=N[I];if(mt!==void 0)switch(mt.length){case 2:r.vertexAttrib2fv(J.location,mt);break;case 3:r.vertexAttrib3fv(J.location,mt);break;case 4:r.vertexAttrib4fv(J.location,mt);break;default:r.vertexAttrib1fv(J.location,mt)}}}}P()}function B(){Y();for(const w in s){const k=s[w];for(const Q in k){const et=k[Q];for(const ut in et)g(et[ut].object),delete et[ut];delete k[Q]}delete s[w]}}function F(w){if(s[w.id]===void 0)return;const k=s[w.id];for(const Q in k){const et=k[Q];for(const ut in et)g(et[ut].object),delete et[ut];delete k[Q]}delete s[w.id]}function z(w){for(const k in s){const Q=s[k];if(Q[w.id]===void 0)continue;const et=Q[w.id];for(const ut in et)g(et[ut].object),delete et[ut];delete Q[w.id]}}function Y(){A(),h=!0,c!==l&&(c=l,p(c.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:A,dispose:B,releaseStatesOfGeometry:F,releaseStatesOfProgram:z,initAttributes:T,enableAttribute:M,disableUnusedAttributes:P}}function kT(r,t,i){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function h(p,g,_){_!==0&&(r.drawArraysInstanced(s,p,g,_),i.update(g,s,_))}function d(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let S=0;for(let E=0;E<_;E++)S+=g[E];i.update(S,s,1)}function m(p,g,_,y){if(_===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)h(p[E],g[E],y[E]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,g,0,y,0,_);let E=0;for(let T=0;T<_;T++)E+=g[T]*y[T];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function XT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==Li&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const Y=z===ba&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==bi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ki&&!Y)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(se("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),P=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=r.getParameter(r.MAX_SAMPLES),F=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:y,maxTextures:S,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:P,maxVaryings:U,maxFragmentUniforms:D,maxSamples:B,samples:F}}function WT(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new va,d=new de,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const S=_.length!==0||y||s!==0||l;return l=y,s=_.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,y){i=g(_,y,0)},this.setState=function(_,y,S){const E=_.clippingPlanes,T=_.clipIntersection,M=_.clipShadows,v=r.get(_);if(!l||E===null||E.length===0||c&&!M)c?g(null):p();else{const P=c?0:s,U=P*4;let D=v.clippingState||null;m.value=D,D=g(E,y,U,S);for(let B=0;B!==U;++B)D[B]=i[B];v.clippingState=D,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,y,S,E){const T=_!==null?_.length:0;let M=null;if(T!==0){if(M=m.value,E!==!0||M===null){const v=S+T*4,P=y.matrixWorldInverse;d.getNormalMatrix(P),(M===null||M.length<v)&&(M=new Float32Array(v));for(let U=0,D=S;U!==T;++U,D+=4)h.copy(_[U]).applyMatrix4(P,d),h.normal.toArray(M,D),M[D+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function qT(r){let t=new WeakMap;function i(h,d){return d===Ad?h.mapping=Fs:d===Rd&&(h.mapping=Yr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ad||d===Rd)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Jv(m.height);return p.fromEquirectangularTexture(r,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const rs=4,ev=[.125,.215,.35,.446,.526,.582],Os=20,YT=256,nl=new lx,nv=new Re;let cd=null,ud=0,fd=0,hd=!1;const jT=new V;class iv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=jT}=c;cd=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(cd,ud,fd),this._renderer.xr.enabled=hd,t.scissorTest=!1,Gr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Fs||t.mapping===Yr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cd=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:In,minFilter:In,generateMipmaps:!1,type:ba,format:Li,colorSpace:Zr,depthBuffer:!1},l=av(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=av(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ZT(c)),this._blurMaterial=QT(c,t,i),this._ggxMaterial=KT(c,t,i)}return l}_compileMaterial(t){const i=new ci(new On,t);this._renderer.compile(i,nl)}_sceneToCubeUV(t,i,s,l,c){const m=new Mi(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,S=_.toneMapping;_.getClearColor(nv),_.toneMapping=Wi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ci(new Hs,new fu({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,M=T.material;let v=!1;const P=t.background;P?P.isColor&&(M.color.copy(P),t.background=null,v=!0):(M.color.copy(nv),v=!0);for(let U=0;U<6;U++){const D=U%3;D===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[U],c.y,c.z)):D===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[U]));const B=this._cubeSize;Gr(l,D*B,U>2?B:0,B,B),_.setRenderTarget(l),v&&_.render(T,m),_.render(t,m)}_.toneMapping=S,_.autoClear=y,t.background=P}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Fs||t.mapping===Yr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=rv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sv());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Gr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,nl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),y=0+p*1.25,S=_*y,{_lodMax:E}=this,T=this._sizeLods[s],M=3*T*(s>E-rs?s-E+rs:0),v=4*(this._cubeSize-T);m.envMap.value=t.texture,m.roughness.value=S,m.mipInt.value=E-i,Gr(c,M,v,3*T,2*T),l.setRenderTarget(c),l.render(d,nl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Gr(t,M,v,3*T,2*T),l.setRenderTarget(t),l.render(d,nl)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ae("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=p;const y=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Os-1),T=c/E,M=isFinite(c)?1+Math.floor(g*T):Os;M>Os&&se(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Os}`);const v=[];let P=0;for(let z=0;z<Os;++z){const Y=z/T,A=Math.exp(-Y*Y/2);v.push(A),z===0?P+=A:z<M&&(P+=2*A)}for(let z=0;z<v.length;z++)v[z]=v[z]/P;y.envMap.value=t.texture,y.samples.value=M,y.weights.value=v,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:U}=this;y.dTheta.value=E,y.mipInt.value=U-s;const D=this._sizeLods[l],B=3*D*(l>U-rs?l-U+rs:0),F=4*(this._cubeSize-D);Gr(i,B,F,3*D,2*D),m.setRenderTarget(i),m.render(_,nl)}}function ZT(r){const t=[],i=[],s=[];let l=r;const c=r-rs+1+ev.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>r-rs?m=ev[h-r+rs-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),g=-p,_=1+p,y=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,E=6,T=3,M=2,v=1,P=new Float32Array(T*E*S),U=new Float32Array(M*E*S),D=new Float32Array(v*E*S);for(let F=0;F<S;F++){const z=F%3*2/3-1,Y=F>2?0:-1,A=[z,Y,0,z+2/3,Y,0,z+2/3,Y+1,0,z,Y,0,z+2/3,Y+1,0,z,Y+1,0];P.set(A,T*E*F),U.set(y,M*E*F);const w=[F,F,F,F,F,F];D.set(w,v*E*F)}const B=new On;B.setAttribute("position",new Oi(P,T)),B.setAttribute("uv",new Oi(U,M)),B.setAttribute("faceIndex",new Oi(D,v)),s.push(new ci(B,null)),l>rs&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function av(r,t,i){const s=new qi(r,t,i);return s.texture.mapping=gu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Gr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function KT(r,t,i){return new ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:YT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Su(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function QT(r,t,i){const s=new Float32Array(Os),l=new V(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function sv(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function rv(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function Su(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function JT(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Ad||m===Rd,g=m===Fs||m===Yr;if(p||g){let _=t.get(d);const y=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new iv(r)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const S=d.image;return p&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new iv(r)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function $T(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&fl("WebGLRenderer: "+s+" extension not supported."),l}}}function tA(r,t,i,s){const l={},c=new WeakMap;function h(_){const y=_.target;y.index!==null&&t.remove(y.index);for(const E in y.attributes)t.remove(y.attributes[E]);y.removeEventListener("dispose",h),delete l[y.id];const S=c.get(y);S&&(t.remove(S),c.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(_,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function m(_){const y=_.attributes;for(const S in y)t.update(y[S],r.ARRAY_BUFFER)}function p(_){const y=[],S=_.index,E=_.attributes.position;let T=0;if(S!==null){const P=S.array;T=S.version;for(let U=0,D=P.length;U<D;U+=3){const B=P[U+0],F=P[U+1],z=P[U+2];y.push(B,F,F,z,z,B)}}else if(E!==void 0){const P=E.array;T=E.version;for(let U=0,D=P.length/3-1;U<D;U+=3){const B=U+0,F=U+1,z=U+2;y.push(B,F,F,z,z,B)}}else return;const M=new(Xv(y)?jv:Yv)(y,1);M.version=T;const v=c.get(_);v&&t.remove(v),c.set(_,M)}function g(_){const y=c.get(_);if(y){const S=_.index;S!==null&&y.version<S.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function eA(r,t,i){let s;function l(y){s=y}let c,h;function d(y){c=y.type,h=y.bytesPerElement}function m(y,S){r.drawElements(s,S,c,y*h),i.update(S,s,1)}function p(y,S,E){E!==0&&(r.drawElementsInstanced(s,S,c,y*h,E),i.update(S,s,E))}function g(y,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,y,0,E);let M=0;for(let v=0;v<E;v++)M+=S[v];i.update(M,s,1)}function _(y,S,E,T){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<y.length;v++)p(y[v]/h,S[v],T[v]);else{M.multiDrawElementsInstancedWEBGL(s,S,0,c,y,0,T,0,E);let v=0;for(let P=0;P<E;P++)v+=S[P]*T[P];i.update(v,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function nA(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:Ae("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function iA(r,t,i){const s=new WeakMap,l=new ln;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let y=s.get(d);if(y===void 0||y.count!==_){let w=function(){Y.dispose(),s.delete(d),d.removeEventListener("dispose",w)};var S=w;y!==void 0&&y.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let D=0;E===!0&&(D=1),T===!0&&(D=2),M===!0&&(D=3);let B=d.attributes.position.count*D,F=1;B>t.maxTextureSize&&(F=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const z=new Float32Array(B*F*4*_),Y=new Wv(z,B,F,_);Y.type=ki,Y.needsUpdate=!0;const A=D*4;for(let k=0;k<_;k++){const Q=v[k],et=P[k],ut=U[k],lt=B*F*4*k;for(let N=0;N<Q.count;N++){const I=N*A;E===!0&&(l.fromBufferAttribute(Q,N),z[lt+I+0]=l.x,z[lt+I+1]=l.y,z[lt+I+2]=l.z,z[lt+I+3]=0),T===!0&&(l.fromBufferAttribute(et,N),z[lt+I+4]=l.x,z[lt+I+5]=l.y,z[lt+I+6]=l.z,z[lt+I+7]=0),M===!0&&(l.fromBufferAttribute(ut,N),z[lt+I+8]=l.x,z[lt+I+9]=l.y,z[lt+I+10]=l.z,z[lt+I+11]=ut.itemSize===4?l.w:1)}}y={count:_,texture:Y,size:new Vt(B,F)},s.set(d,y),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const T=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",T),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:c}}function aA(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const sA={[wv]:"LINEAR_TONE_MAPPING",[Dv]:"REINHARD_TONE_MAPPING",[Uv]:"CINEON_TONE_MAPPING",[Nv]:"ACES_FILMIC_TONE_MAPPING",[Ov]:"AGX_TONE_MAPPING",[Pv]:"NEUTRAL_TONE_MAPPING",[Lv]:"CUSTOM_TONE_MAPPING"};function rA(r,t,i,s,l){const c=new qi(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),h=new qi(t,i,{type:ba,depthBuffer:!1,stencilBuffer:!1}),d=new On;d.setAttribute("position",new nn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new nn([0,2,0,0,2,0],2));const m=new J1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new ci(d,m),g=new lx(-1,1,1,-1,0,1);let _=null,y=null,S=!1,E,T=null,M=[],v=!1;this.setSize=function(P,U){c.setSize(P,U),h.setSize(P,U);for(let D=0;D<M.length;D++){const B=M[D];B.setSize&&B.setSize(P,U)}},this.setEffects=function(P){M=P,v=M.length>0&&M[0].isRenderPass===!0;const U=c.width,D=c.height;for(let B=0;B<M.length;B++){const F=M[B];F.setSize&&F.setSize(U,D)}},this.begin=function(P,U){if(S||P.toneMapping===Wi&&M.length===0)return!1;if(T=U,U!==null){const D=U.width,B=U.height;(c.width!==D||c.height!==B)&&this.setSize(D,B)}return v===!1&&P.setRenderTarget(c),E=P.toneMapping,P.toneMapping=Wi,!0},this.hasRenderPass=function(){return v},this.end=function(P,U){P.toneMapping=E,S=!0;let D=c,B=h;for(let F=0;F<M.length;F++){const z=M[F];if(z.enabled!==!1&&(z.render(P,B,D,U),z.needsSwap!==!1)){const Y=D;D=B,B=Y}}if(_!==P.outputColorSpace||y!==P.toneMapping){_=P.outputColorSpace,y=P.toneMapping,m.defines={},De.getTransfer(_)===Ve&&(m.defines.SRGB_TRANSFER="");const F=sA[y];F&&(m.defines[F]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=D.texture,P.setRenderTarget(T),P.render(p,g),T=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const ux=new Hn,fp=new hl(1,1),fx=new Wv,hx=new c1,dx=new Qv,ov=[],lv=[],cv=new Float32Array(16),uv=new Float32Array(9),fv=new Float32Array(4);function Jr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=ov[l];if(c===void 0&&(c=new Float32Array(l),ov[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function xn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function yn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Mu(r,t){let i=lv[t];i===void 0&&(i=new Int32Array(t),lv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function oA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function lA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;r.uniform2fv(this.addr,t),yn(i,t)}}function cA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(xn(i,t))return;r.uniform3fv(this.addr,t),yn(i,t)}}function uA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;r.uniform4fv(this.addr,t),yn(i,t)}}function fA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),yn(i,t)}else{if(xn(i,s))return;fv.set(s),r.uniformMatrix2fv(this.addr,!1,fv),yn(i,s)}}function hA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),yn(i,t)}else{if(xn(i,s))return;uv.set(s),r.uniformMatrix3fv(this.addr,!1,uv),yn(i,s)}}function dA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),yn(i,t)}else{if(xn(i,s))return;cv.set(s),r.uniformMatrix4fv(this.addr,!1,cv),yn(i,s)}}function pA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function mA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;r.uniform2iv(this.addr,t),yn(i,t)}}function gA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;r.uniform3iv(this.addr,t),yn(i,t)}}function _A(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;r.uniform4iv(this.addr,t),yn(i,t)}}function vA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function xA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;r.uniform2uiv(this.addr,t),yn(i,t)}}function yA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;r.uniform3uiv(this.addr,t),yn(i,t)}}function SA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;r.uniform4uiv(this.addr,t),yn(i,t)}}function MA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(fp.compareFunction=i.isReversedDepthBuffer()?Mp:Sp,c=fp):c=ux,i.setTexture2D(t||c,l)}function bA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||hx,l)}function EA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||dx,l)}function TA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||fx,l)}function AA(r){switch(r){case 5126:return oA;case 35664:return lA;case 35665:return cA;case 35666:return uA;case 35674:return fA;case 35675:return hA;case 35676:return dA;case 5124:case 35670:return pA;case 35667:case 35671:return mA;case 35668:case 35672:return gA;case 35669:case 35673:return _A;case 5125:return vA;case 36294:return xA;case 36295:return yA;case 36296:return SA;case 35678:case 36198:case 36298:case 36306:case 35682:return MA;case 35679:case 36299:case 36307:return bA;case 35680:case 36300:case 36308:case 36293:return EA;case 36289:case 36303:case 36311:case 36292:return TA}}function RA(r,t){r.uniform1fv(this.addr,t)}function CA(r,t){const i=Jr(t,this.size,2);r.uniform2fv(this.addr,i)}function wA(r,t){const i=Jr(t,this.size,3);r.uniform3fv(this.addr,i)}function DA(r,t){const i=Jr(t,this.size,4);r.uniform4fv(this.addr,i)}function UA(r,t){const i=Jr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function NA(r,t){const i=Jr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function LA(r,t){const i=Jr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function OA(r,t){r.uniform1iv(this.addr,t)}function PA(r,t){r.uniform2iv(this.addr,t)}function zA(r,t){r.uniform3iv(this.addr,t)}function BA(r,t){r.uniform4iv(this.addr,t)}function FA(r,t){r.uniform1uiv(this.addr,t)}function IA(r,t){r.uniform2uiv(this.addr,t)}function HA(r,t){r.uniform3uiv(this.addr,t)}function GA(r,t){r.uniform4uiv(this.addr,t)}function VA(r,t,i){const s=this.cache,l=t.length,c=Mu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=fp:h=ux;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,c[d])}function kA(r,t,i){const s=this.cache,l=t.length,c=Mu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||hx,c[h])}function XA(r,t,i){const s=this.cache,l=t.length,c=Mu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||dx,c[h])}function WA(r,t,i){const s=this.cache,l=t.length,c=Mu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||fx,c[h])}function qA(r){switch(r){case 5126:return RA;case 35664:return CA;case 35665:return wA;case 35666:return DA;case 35674:return UA;case 35675:return NA;case 35676:return LA;case 5124:case 35670:return OA;case 35667:case 35671:return PA;case 35668:case 35672:return zA;case 35669:case 35673:return BA;case 5125:return FA;case 36294:return IA;case 36295:return HA;case 36296:return GA;case 35678:case 36198:case 36298:case 36306:case 35682:return VA;case 35679:case 36299:case 36307:return kA;case 35680:case 36300:case 36308:case 36293:return XA;case 36289:case 36303:case 36311:case 36292:return WA}}class YA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=AA(i.type)}}class jA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=qA(i.type)}}class ZA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const dd=/(\w+)(\])?(\[|\.)?/g;function hv(r,t){r.seq.push(t),r.map[t.id]=t}function KA(r,t,i){const s=r.name,l=s.length;for(dd.lastIndex=0;;){const c=dd.exec(s),h=dd.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){hv(i,p===void 0?new YA(d,r,t):new jA(d,r,t));break}else{let _=i.map[d];_===void 0&&(_=new ZA(d),hv(i,_)),i=_}}}class ru{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);KA(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function dv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const QA=37297;let JA=0;function $A(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const pv=new de;function t2(r){De._getMatrix(pv,De.workingColorSpace,r);const t=`mat3( ${pv.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(r)){case ou:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return se("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function mv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+$A(r.getShaderSource(t),d)}else return c}function e2(r,t){const i=t2(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const n2={[wv]:"Linear",[Dv]:"Reinhard",[Uv]:"Cineon",[Nv]:"ACESFilmic",[Ov]:"AgX",[Pv]:"Neutral",[Lv]:"Custom"};function i2(r,t){const i=n2[t];return i===void 0?(se("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const $c=new V;function a2(){De.getLuminanceCoefficients($c);const r=$c.x.toFixed(4),t=$c.y.toFixed(4),i=$c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function s2(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sl).join(`
`)}function r2(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function o2(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function sl(r){return r!==""}function gv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _v(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const l2=/^[ \t]*#include +<([\w\d./]+)>/gm;function hp(r){return r.replace(l2,u2)}const c2=new Map;function u2(r,t){let i=ge[t];if(i===void 0){const s=c2.get(t);if(s!==void 0)i=ge[s],se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return hp(i)}const f2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vv(r){return r.replace(f2,h2)}function h2(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function xv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const d2={[eu]:"SHADOWMAP_TYPE_PCF",[al]:"SHADOWMAP_TYPE_VSM"};function p2(r){return d2[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const m2={[Fs]:"ENVMAP_TYPE_CUBE",[Yr]:"ENVMAP_TYPE_CUBE",[gu]:"ENVMAP_TYPE_CUBE_UV"};function g2(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":m2[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const _2={[Yr]:"ENVMAP_MODE_REFRACTION"};function v2(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":_2[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const x2={[Cv]:"ENVMAP_BLENDING_MULTIPLY",[VM]:"ENVMAP_BLENDING_MIX",[kM]:"ENVMAP_BLENDING_ADD"};function y2(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":x2[r.combine]||"ENVMAP_BLENDING_NONE"}function S2(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function M2(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=p2(i),p=g2(i),g=v2(i),_=y2(i),y=S2(i),S=s2(i),E=r2(c),T=l.createProgram();let M,v,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(sl).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(sl).join(`
`),v.length>0&&(v+=`
`)):(M=[xv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sl).join(`
`),v=[xv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Wi?"#define TONE_MAPPING":"",i.toneMapping!==Wi?ge.tonemapping_pars_fragment:"",i.toneMapping!==Wi?i2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,e2("linearToOutputTexel",i.outputColorSpace),a2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(sl).join(`
`)),h=hp(h),h=gv(h,i),h=_v(h,i),d=hp(d),d=gv(d,i),d=_v(d,i),h=vv(h),d=vv(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===A_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===A_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=P+M+h,D=P+v+d,B=dv(l,l.VERTEX_SHADER,U),F=dv(l,l.FRAGMENT_SHADER,D);l.attachShader(T,B),l.attachShader(T,F),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function z(k){if(r.debug.checkShaderErrors){const Q=l.getProgramInfoLog(T)||"",et=l.getShaderInfoLog(B)||"",ut=l.getShaderInfoLog(F)||"",lt=Q.trim(),N=et.trim(),I=ut.trim();let J=!0,St=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,B,F);else{const mt=mv(l,B,"vertex"),L=mv(l,F,"fragment");Ae("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+lt+`
`+mt+`
`+L)}else lt!==""?se("WebGLProgram: Program Info Log:",lt):(N===""||I==="")&&(St=!1);St&&(k.diagnostics={runnable:J,programLog:lt,vertexShader:{log:N,prefix:M},fragmentShader:{log:I,prefix:v}})}l.deleteShader(B),l.deleteShader(F),Y=new ru(l,T),A=o2(l,T)}let Y;this.getUniforms=function(){return Y===void 0&&z(this),Y};let A;this.getAttributes=function(){return A===void 0&&z(this),A};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(T,QA)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=JA++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=B,this.fragmentShader=F,this}let b2=0;class E2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new T2(t),i.set(t,s)),s}}class T2{constructor(t){this.id=b2++,this.code=t,this.usedTimes=0}}function A2(r,t,i,s,l,c,h){const d=new Ep,m=new E2,p=new Set,g=[],_=new Map,y=l.logarithmicDepthBuffer;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return p.add(A),A===0?"uv":`uv${A}`}function M(A,w,k,Q,et){const ut=Q.fog,lt=et.geometry,N=A.isMeshStandardMaterial?Q.environment:null,I=(A.isMeshStandardMaterial?i:t).get(A.envMap||N),J=I&&I.mapping===gu?I.image.height:null,St=E[A.type];A.precision!==null&&(S=l.getMaxPrecision(A.precision),S!==A.precision&&se("WebGLProgram.getParameters:",A.precision,"not supported, using",S,"instead."));const mt=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,L=mt!==void 0?mt.length:0;let nt=0;lt.morphAttributes.position!==void 0&&(nt=1),lt.morphAttributes.normal!==void 0&&(nt=2),lt.morphAttributes.color!==void 0&&(nt=3);let gt,Et,Ft,it;if(St){const we=Gi[St];gt=we.vertexShader,Et=we.fragmentShader}else gt=A.vertexShader,Et=A.fragmentShader,m.update(A),Ft=m.getVertexShaderID(A),it=m.getFragmentShaderID(A);const ht=r.getRenderTarget(),wt=r.state.buffers.depth.getReversed(),kt=et.isInstancedMesh===!0,Ht=et.isBatchedMesh===!0,pe=!!A.map,Ke=!!A.matcap,_e=!!I,me=!!A.aoMap,Rt=!!A.lightMap,Xt=!!A.bumpMap,le=!!A.normalMap,H=!!A.displacementMap,Ce=!!A.emissiveMap,ye=!!A.metalnessMap,ve=!!A.roughnessMap,Yt=A.anisotropy>0,O=A.clearcoat>0,b=A.dispersion>0,q=A.iridescence>0,pt=A.sheen>0,yt=A.transmission>0,ft=Yt&&!!A.anisotropyMap,Jt=O&&!!A.clearcoatMap,Dt=O&&!!A.clearcoatNormalMap,jt=O&&!!A.clearcoatRoughnessMap,ae=q&&!!A.iridescenceMap,bt=q&&!!A.iridescenceThicknessMap,Tt=pt&&!!A.sheenColorMap,It=pt&&!!A.sheenRoughnessMap,zt=!!A.specularMap,Ut=!!A.specularColorMap,fe=!!A.specularIntensityMap,W=yt&&!!A.transmissionMap,Lt=yt&&!!A.thicknessMap,At=!!A.gradientMap,Bt=!!A.alphaMap,Mt=A.alphaTest>0,xt=!!A.alphaHash,Ct=!!A.extensions;let re=Wi;A.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(re=r.toneMapping);const Fe={shaderID:St,shaderType:A.type,shaderName:A.name,vertexShader:gt,fragmentShader:Et,defines:A.defines,customVertexShaderID:Ft,customFragmentShaderID:it,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:S,batching:Ht,batchingColor:Ht&&et._colorsTexture!==null,instancing:kt,instancingColor:kt&&et.instanceColor!==null,instancingMorph:kt&&et.morphTexture!==null,outputColorSpace:ht===null?r.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Zr,alphaToCoverage:!!A.alphaToCoverage,map:pe,matcap:Ke,envMap:_e,envMapMode:_e&&I.mapping,envMapCubeUVHeight:J,aoMap:me,lightMap:Rt,bumpMap:Xt,normalMap:le,displacementMap:H,emissiveMap:Ce,normalMapObjectSpace:le&&A.normalMapType===YM,normalMapTangentSpace:le&&A.normalMapType===qM,metalnessMap:ye,roughnessMap:ve,anisotropy:Yt,anisotropyMap:ft,clearcoat:O,clearcoatMap:Jt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:jt,dispersion:b,iridescence:q,iridescenceMap:ae,iridescenceThicknessMap:bt,sheen:pt,sheenColorMap:Tt,sheenRoughnessMap:It,specularMap:zt,specularColorMap:Ut,specularIntensityMap:fe,transmission:yt,transmissionMap:W,thicknessMap:Lt,gradientMap:At,opaque:A.transparent===!1&&A.blending===Xr&&A.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Mt,alphaHash:xt,combine:A.combine,mapUv:pe&&T(A.map.channel),aoMapUv:me&&T(A.aoMap.channel),lightMapUv:Rt&&T(A.lightMap.channel),bumpMapUv:Xt&&T(A.bumpMap.channel),normalMapUv:le&&T(A.normalMap.channel),displacementMapUv:H&&T(A.displacementMap.channel),emissiveMapUv:Ce&&T(A.emissiveMap.channel),metalnessMapUv:ye&&T(A.metalnessMap.channel),roughnessMapUv:ve&&T(A.roughnessMap.channel),anisotropyMapUv:ft&&T(A.anisotropyMap.channel),clearcoatMapUv:Jt&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:jt&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:It&&T(A.sheenRoughnessMap.channel),specularMapUv:zt&&T(A.specularMap.channel),specularColorMapUv:Ut&&T(A.specularColorMap.channel),specularIntensityMapUv:fe&&T(A.specularIntensityMap.channel),transmissionMapUv:W&&T(A.transmissionMap.channel),thicknessMapUv:Lt&&T(A.thicknessMap.channel),alphaMapUv:Bt&&T(A.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(le||Yt),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!lt.attributes.uv&&(pe||Bt),fog:!!ut,useFog:A.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:wt,skinning:et.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:nt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:re,decodeVideoTexture:pe&&A.map.isVideoTexture===!0&&De.getTransfer(A.map.colorSpace)===Ve,decodeVideoTextureEmissive:Ce&&A.emissiveMap.isVideoTexture===!0&&De.getTransfer(A.emissiveMap.colorSpace)===Ve,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===xa,flipSided:A.side===Jn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ct&&A.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&A.extensions.multiDraw===!0||Ht)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Fe.vertexUv1s=p.has(1),Fe.vertexUv2s=p.has(2),Fe.vertexUv3s=p.has(3),p.clear(),Fe}function v(A){const w=[];if(A.shaderID?w.push(A.shaderID):(w.push(A.customVertexShaderID),w.push(A.customFragmentShaderID)),A.defines!==void 0)for(const k in A.defines)w.push(k),w.push(A.defines[k]);return A.isRawShaderMaterial===!1&&(P(w,A),U(w,A),w.push(r.outputColorSpace)),w.push(A.customProgramCacheKey),w.join()}function P(A,w){A.push(w.precision),A.push(w.outputColorSpace),A.push(w.envMapMode),A.push(w.envMapCubeUVHeight),A.push(w.mapUv),A.push(w.alphaMapUv),A.push(w.lightMapUv),A.push(w.aoMapUv),A.push(w.bumpMapUv),A.push(w.normalMapUv),A.push(w.displacementMapUv),A.push(w.emissiveMapUv),A.push(w.metalnessMapUv),A.push(w.roughnessMapUv),A.push(w.anisotropyMapUv),A.push(w.clearcoatMapUv),A.push(w.clearcoatNormalMapUv),A.push(w.clearcoatRoughnessMapUv),A.push(w.iridescenceMapUv),A.push(w.iridescenceThicknessMapUv),A.push(w.sheenColorMapUv),A.push(w.sheenRoughnessMapUv),A.push(w.specularMapUv),A.push(w.specularColorMapUv),A.push(w.specularIntensityMapUv),A.push(w.transmissionMapUv),A.push(w.thicknessMapUv),A.push(w.combine),A.push(w.fogExp2),A.push(w.sizeAttenuation),A.push(w.morphTargetsCount),A.push(w.morphAttributeCount),A.push(w.numDirLights),A.push(w.numPointLights),A.push(w.numSpotLights),A.push(w.numSpotLightMaps),A.push(w.numHemiLights),A.push(w.numRectAreaLights),A.push(w.numDirLightShadows),A.push(w.numPointLightShadows),A.push(w.numSpotLightShadows),A.push(w.numSpotLightShadowsWithMaps),A.push(w.numLightProbes),A.push(w.shadowMapType),A.push(w.toneMapping),A.push(w.numClippingPlanes),A.push(w.numClipIntersection),A.push(w.depthPacking)}function U(A,w){d.disableAll(),w.instancing&&d.enable(0),w.instancingColor&&d.enable(1),w.instancingMorph&&d.enable(2),w.matcap&&d.enable(3),w.envMap&&d.enable(4),w.normalMapObjectSpace&&d.enable(5),w.normalMapTangentSpace&&d.enable(6),w.clearcoat&&d.enable(7),w.iridescence&&d.enable(8),w.alphaTest&&d.enable(9),w.vertexColors&&d.enable(10),w.vertexAlphas&&d.enable(11),w.vertexUv1s&&d.enable(12),w.vertexUv2s&&d.enable(13),w.vertexUv3s&&d.enable(14),w.vertexTangents&&d.enable(15),w.anisotropy&&d.enable(16),w.alphaHash&&d.enable(17),w.batching&&d.enable(18),w.dispersion&&d.enable(19),w.batchingColor&&d.enable(20),w.gradientMap&&d.enable(21),A.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),A.push(d.mask)}function D(A){const w=E[A.type];let k;if(w){const Q=Gi[w];k=M1.clone(Q.uniforms)}else k=A.uniforms;return k}function B(A,w){let k=_.get(w);return k!==void 0?++k.usedTimes:(k=new M2(r,w,A,c),g.push(k),_.set(w,k)),k}function F(A){if(--A.usedTimes===0){const w=g.indexOf(A);g[w]=g[g.length-1],g.pop(),_.delete(A.cacheKey),A.destroy()}}function z(A){m.remove(A)}function Y(){m.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:D,acquireProgram:B,releaseProgram:F,releaseShaderCache:z,programs:g,dispose:Y}}function R2(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function C2(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function yv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Sv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(_,y,S,E,T,M){let v=r[t];return v===void 0?(v={id:_.id,object:_,geometry:y,material:S,groupOrder:E,renderOrder:_.renderOrder,z:T,group:M},r[t]=v):(v.id=_.id,v.object=_,v.geometry=y,v.material=S,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=T,v.group=M),t++,v}function d(_,y,S,E,T,M){const v=h(_,y,S,E,T,M);S.transmission>0?s.push(v):S.transparent===!0?l.push(v):i.push(v)}function m(_,y,S,E,T,M){const v=h(_,y,S,E,T,M);S.transmission>0?s.unshift(v):S.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,y){i.length>1&&i.sort(_||C2),s.length>1&&s.sort(y||yv),l.length>1&&l.sort(y||yv)}function g(){for(let _=t,y=r.length;_<y;_++){const S=r[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function w2(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new Sv,r.set(s,[h])):l>=c.length?(h=new Sv,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function D2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new V,color:new Re};break;case"SpotLight":i={position:new V,direction:new V,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new V,color:new Re,distance:0,decay:0};break;case"HemisphereLight":i={direction:new V,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":i={color:new Re,position:new V,halfWidth:new V,halfHeight:new V};break}return r[t.id]=i,i}}}function U2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let N2=0;function L2(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function O2(r){const t=new D2,i=U2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new V);const l=new V,c=new en,h=new en;function d(p){let g=0,_=0,y=0;for(let A=0;A<9;A++)s.probe[A].set(0,0,0);let S=0,E=0,T=0,M=0,v=0,P=0,U=0,D=0,B=0,F=0,z=0;p.sort(L2);for(let A=0,w=p.length;A<w;A++){const k=p[A],Q=k.color,et=k.intensity,ut=k.distance;let lt=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===jr?lt=k.shadow.map.texture:lt=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)g+=Q.r*et,_+=Q.g*et,y+=Q.b*et;else if(k.isLightProbe){for(let N=0;N<9;N++)s.probe[N].addScaledVector(k.sh.coefficients[N],et);z++}else if(k.isDirectionalLight){const N=t.get(k);if(N.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const I=k.shadow,J=i.get(k);J.shadowIntensity=I.intensity,J.shadowBias=I.bias,J.shadowNormalBias=I.normalBias,J.shadowRadius=I.radius,J.shadowMapSize=I.mapSize,s.directionalShadow[S]=J,s.directionalShadowMap[S]=lt,s.directionalShadowMatrix[S]=k.shadow.matrix,P++}s.directional[S]=N,S++}else if(k.isSpotLight){const N=t.get(k);N.position.setFromMatrixPosition(k.matrixWorld),N.color.copy(Q).multiplyScalar(et),N.distance=ut,N.coneCos=Math.cos(k.angle),N.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),N.decay=k.decay,s.spot[T]=N;const I=k.shadow;if(k.map&&(s.spotLightMap[B]=k.map,B++,I.updateMatrices(k),k.castShadow&&F++),s.spotLightMatrix[T]=I.matrix,k.castShadow){const J=i.get(k);J.shadowIntensity=I.intensity,J.shadowBias=I.bias,J.shadowNormalBias=I.normalBias,J.shadowRadius=I.radius,J.shadowMapSize=I.mapSize,s.spotShadow[T]=J,s.spotShadowMap[T]=lt,D++}T++}else if(k.isRectAreaLight){const N=t.get(k);N.color.copy(Q).multiplyScalar(et),N.halfWidth.set(k.width*.5,0,0),N.halfHeight.set(0,k.height*.5,0),s.rectArea[M]=N,M++}else if(k.isPointLight){const N=t.get(k);if(N.color.copy(k.color).multiplyScalar(k.intensity),N.distance=k.distance,N.decay=k.decay,k.castShadow){const I=k.shadow,J=i.get(k);J.shadowIntensity=I.intensity,J.shadowBias=I.bias,J.shadowNormalBias=I.normalBias,J.shadowRadius=I.radius,J.shadowMapSize=I.mapSize,J.shadowCameraNear=I.camera.near,J.shadowCameraFar=I.camera.far,s.pointShadow[E]=J,s.pointShadowMap[E]=lt,s.pointShadowMatrix[E]=k.shadow.matrix,U++}s.point[E]=N,E++}else if(k.isHemisphereLight){const N=t.get(k);N.skyColor.copy(k.color).multiplyScalar(et),N.groundColor.copy(k.groundColor).multiplyScalar(et),s.hemi[v]=N,v++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pt.LTC_FLOAT_1,s.rectAreaLTC2=Pt.LTC_FLOAT_2):(s.rectAreaLTC1=Pt.LTC_HALF_1,s.rectAreaLTC2=Pt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=y;const Y=s.hash;(Y.directionalLength!==S||Y.pointLength!==E||Y.spotLength!==T||Y.rectAreaLength!==M||Y.hemiLength!==v||Y.numDirectionalShadows!==P||Y.numPointShadows!==U||Y.numSpotShadows!==D||Y.numSpotMaps!==B||Y.numLightProbes!==z)&&(s.directional.length=S,s.spot.length=T,s.rectArea.length=M,s.point.length=E,s.hemi.length=v,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=D+B-F,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=z,Y.directionalLength=S,Y.pointLength=E,Y.spotLength=T,Y.rectAreaLength=M,Y.hemiLength=v,Y.numDirectionalShadows=P,Y.numPointShadows=U,Y.numSpotShadows=D,Y.numSpotMaps=B,Y.numLightProbes=z,s.version=N2++)}function m(p,g){let _=0,y=0,S=0,E=0,T=0;const M=g.matrixWorldInverse;for(let v=0,P=p.length;v<P;v++){const U=p[v];if(U.isDirectionalLight){const D=s.directional[_];D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),_++}else if(U.isSpotLight){const D=s.spot[S];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),S++}else if(U.isRectAreaLight){const D=s.rectArea[E];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(M),h.identity(),c.copy(U.matrixWorld),c.premultiply(M),h.extractRotation(c),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),E++}else if(U.isPointLight){const D=s.point[y];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(M),y++}else if(U.isHemisphereLight){const D=s.hemi[T];D.direction.setFromMatrixPosition(U.matrixWorld),D.direction.transformDirection(M),T++}}}return{setup:d,setupView:m,state:s}}function Mv(r){const t=new O2(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function h(g){s.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function P2(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new Mv(r),t.set(l,[d])):c>=h.length?(d=new Mv(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const z2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,F2=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],I2=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],bv=new en,il=new V,pd=new V;function H2(r,t,i){let s=new ex;const l=new Vt,c=new Vt,h=new ln,d=new $1,m=new tb,p={},g=i.maxTextureSize,_={[ls]:Jn,[Jn]:ls,[xa]:xa},y=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:z2,fragmentShader:B2}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const E=new On;E.setAttribute("position",new Oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ci(E,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eu;let v=this.type;this.render=function(F,z,Y){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||F.length===0)return;F.type===bM&&(se("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),F.type=eu);const A=r.getRenderTarget(),w=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),Q=r.state;Q.setBlending(Sa),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const et=v!==this.type;et&&z.traverse(function(ut){ut.material&&(Array.isArray(ut.material)?ut.material.forEach(lt=>lt.needsUpdate=!0):ut.material.needsUpdate=!0)});for(let ut=0,lt=F.length;ut<lt;ut++){const N=F[ut],I=N.shadow;if(I===void 0){se("WebGLShadowMap:",N,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;l.copy(I.mapSize);const J=I.getFrameExtents();if(l.multiply(J),c.copy(I.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/J.x),l.x=c.x*J.x,I.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/J.y),l.y=c.y*J.y,I.mapSize.y=c.y)),I.map===null||et===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===al){if(N.isPointLight){se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new qi(l.x,l.y,{format:jr,type:ba,minFilter:In,magFilter:In,generateMipmaps:!1}),I.map.texture.name=N.name+".shadowMap",I.map.depthTexture=new hl(l.x,l.y,ki),I.map.depthTexture.name=N.name+".shadowMapDepth",I.map.depthTexture.format=Ea,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Ln,I.map.depthTexture.magFilter=Ln}else{N.isPointLight?(I.map=new Jv(l.x),I.map.depthTexture=new P1(l.x,Yi)):(I.map=new qi(l.x,l.y),I.map.depthTexture=new hl(l.x,l.y,Yi)),I.map.depthTexture.name=N.name+".shadowMap",I.map.depthTexture.format=Ea;const mt=r.state.buffers.depth.getReversed();this.type===eu?(I.map.depthTexture.compareFunction=mt?Mp:Sp,I.map.depthTexture.minFilter=In,I.map.depthTexture.magFilter=In):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Ln,I.map.depthTexture.magFilter=Ln)}I.camera.updateProjectionMatrix()}const St=I.map.isWebGLCubeRenderTarget?6:1;for(let mt=0;mt<St;mt++){if(I.map.isWebGLCubeRenderTarget)r.setRenderTarget(I.map,mt),r.clear();else{mt===0&&(r.setRenderTarget(I.map),r.clear());const L=I.getViewport(mt);h.set(c.x*L.x,c.y*L.y,c.x*L.z,c.y*L.w),Q.viewport(h)}if(N.isPointLight){const L=I.camera,nt=I.matrix,gt=N.distance||L.far;gt!==L.far&&(L.far=gt,L.updateProjectionMatrix()),il.setFromMatrixPosition(N.matrixWorld),L.position.copy(il),pd.copy(L.position),pd.add(F2[mt]),L.up.copy(I2[mt]),L.lookAt(pd),L.updateMatrixWorld(),nt.makeTranslation(-il.x,-il.y,-il.z),bv.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),I._frustum.setFromProjectionMatrix(bv,L.coordinateSystem,L.reversedDepth)}else I.updateMatrices(N);s=I.getFrustum(),D(z,Y,I.camera,N,this.type)}I.isPointLightShadow!==!0&&this.type===al&&P(I,Y),I.needsUpdate=!1}v=this.type,M.needsUpdate=!1,r.setRenderTarget(A,w,k)};function P(F,z){const Y=t.update(T);y.defines.VSM_SAMPLES!==F.blurSamples&&(y.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new qi(l.x,l.y,{format:jr,type:ba})),y.uniforms.shadow_pass.value=F.map.depthTexture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(z,null,Y,y,T,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(z,null,Y,S,T,null)}function U(F,z,Y,A){let w=null;const k=Y.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(k!==void 0)w=k;else if(w=Y.isPointLight===!0?m:d,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Q=w.uuid,et=z.uuid;let ut=p[Q];ut===void 0&&(ut={},p[Q]=ut);let lt=ut[et];lt===void 0&&(lt=w.clone(),ut[et]=lt,z.addEventListener("dispose",B)),w=lt}if(w.visible=z.visible,w.wireframe=z.wireframe,A===al?w.side=z.shadowSide!==null?z.shadowSide:z.side:w.side=z.shadowSide!==null?z.shadowSide:_[z.side],w.alphaMap=z.alphaMap,w.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,w.map=z.map,w.clipShadows=z.clipShadows,w.clippingPlanes=z.clippingPlanes,w.clipIntersection=z.clipIntersection,w.displacementMap=z.displacementMap,w.displacementScale=z.displacementScale,w.displacementBias=z.displacementBias,w.wireframeLinewidth=z.wireframeLinewidth,w.linewidth=z.linewidth,Y.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const Q=r.properties.get(w);Q.light=Y}return w}function D(F,z,Y,A,w){if(F.visible===!1)return;if(F.layers.test(z.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&w===al)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,F.matrixWorld);const et=t.update(F),ut=F.material;if(Array.isArray(ut)){const lt=et.groups;for(let N=0,I=lt.length;N<I;N++){const J=lt[N],St=ut[J.materialIndex];if(St&&St.visible){const mt=U(F,St,A,w);F.onBeforeShadow(r,F,z,Y,et,mt,J),r.renderBufferDirect(Y,null,et,mt,F,J),F.onAfterShadow(r,F,z,Y,et,mt,J)}}}else if(ut.visible){const lt=U(F,ut,A,w);F.onBeforeShadow(r,F,z,Y,et,lt,null),r.renderBufferDirect(Y,null,et,lt,F,null),F.onAfterShadow(r,F,z,Y,et,lt,null)}}const Q=F.children;for(let et=0,ut=Q.length;et<ut;et++)D(Q[et],z,Y,A,w)}function B(F){F.target.removeEventListener("dispose",B);for(const Y in p){const A=p[Y],w=F.target.uuid;w in A&&(A[w].dispose(),delete A[w])}}}const G2={[xd]:yd,[Sd]:Ed,[Md]:Td,[qr]:bd,[yd]:xd,[Ed]:Sd,[Td]:Md,[bd]:qr};function V2(r,t){function i(){let W=!1;const Lt=new ln;let At=null;const Bt=new ln(0,0,0,0);return{setMask:function(Mt){At!==Mt&&!W&&(r.colorMask(Mt,Mt,Mt,Mt),At=Mt)},setLocked:function(Mt){W=Mt},setClear:function(Mt,xt,Ct,re,Fe){Fe===!0&&(Mt*=re,xt*=re,Ct*=re),Lt.set(Mt,xt,Ct,re),Bt.equals(Lt)===!1&&(r.clearColor(Mt,xt,Ct,re),Bt.copy(Lt))},reset:function(){W=!1,At=null,Bt.set(-1,0,0,0)}}}function s(){let W=!1,Lt=!1,At=null,Bt=null,Mt=null;return{setReversed:function(xt){if(Lt!==xt){const Ct=t.get("EXT_clip_control");xt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),Lt=xt;const re=Mt;Mt=null,this.setClear(re)}},getReversed:function(){return Lt},setTest:function(xt){xt?ht(r.DEPTH_TEST):wt(r.DEPTH_TEST)},setMask:function(xt){At!==xt&&!W&&(r.depthMask(xt),At=xt)},setFunc:function(xt){if(Lt&&(xt=G2[xt]),Bt!==xt){switch(xt){case xd:r.depthFunc(r.NEVER);break;case yd:r.depthFunc(r.ALWAYS);break;case Sd:r.depthFunc(r.LESS);break;case qr:r.depthFunc(r.LEQUAL);break;case Md:r.depthFunc(r.EQUAL);break;case bd:r.depthFunc(r.GEQUAL);break;case Ed:r.depthFunc(r.GREATER);break;case Td:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Bt=xt}},setLocked:function(xt){W=xt},setClear:function(xt){Mt!==xt&&(Lt&&(xt=1-xt),r.clearDepth(xt),Mt=xt)},reset:function(){W=!1,At=null,Bt=null,Mt=null,Lt=!1}}}function l(){let W=!1,Lt=null,At=null,Bt=null,Mt=null,xt=null,Ct=null,re=null,Fe=null;return{setTest:function(we){W||(we?ht(r.STENCIL_TEST):wt(r.STENCIL_TEST))},setMask:function(we){Lt!==we&&!W&&(r.stencilMask(we),Lt=we)},setFunc:function(we,Pn,Ei){(At!==we||Bt!==Pn||Mt!==Ei)&&(r.stencilFunc(we,Pn,Ei),At=we,Bt=Pn,Mt=Ei)},setOp:function(we,Pn,Ei){(xt!==we||Ct!==Pn||re!==Ei)&&(r.stencilOp(we,Pn,Ei),xt=we,Ct=Pn,re=Ei)},setLocked:function(we){W=we},setClear:function(we){Fe!==we&&(r.clearStencil(we),Fe=we)},reset:function(){W=!1,Lt=null,At=null,Bt=null,Mt=null,xt=null,Ct=null,re=null,Fe=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},y=new WeakMap,S=[],E=null,T=!1,M=null,v=null,P=null,U=null,D=null,B=null,F=null,z=new Re(0,0,0),Y=0,A=!1,w=null,k=null,Q=null,et=null,ut=null;const lt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,I=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(J)[1]),N=I>=1):J.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),N=I>=2);let St=null,mt={};const L=r.getParameter(r.SCISSOR_BOX),nt=r.getParameter(r.VIEWPORT),gt=new ln().fromArray(L),Et=new ln().fromArray(nt);function Ft(W,Lt,At,Bt){const Mt=new Uint8Array(4),xt=r.createTexture();r.bindTexture(W,xt),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ct=0;Ct<At;Ct++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Lt,0,r.RGBA,1,1,Bt,0,r.RGBA,r.UNSIGNED_BYTE,Mt):r.texImage2D(Lt+Ct,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Mt);return xt}const it={};it[r.TEXTURE_2D]=Ft(r.TEXTURE_2D,r.TEXTURE_2D,1),it[r.TEXTURE_CUBE_MAP]=Ft(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[r.TEXTURE_2D_ARRAY]=Ft(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),it[r.TEXTURE_3D]=Ft(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ht(r.DEPTH_TEST),h.setFunc(qr),Xt(!1),le(S_),ht(r.CULL_FACE),me(Sa);function ht(W){g[W]!==!0&&(r.enable(W),g[W]=!0)}function wt(W){g[W]!==!1&&(r.disable(W),g[W]=!1)}function kt(W,Lt){return _[W]!==Lt?(r.bindFramebuffer(W,Lt),_[W]=Lt,W===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Lt),W===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Ht(W,Lt){let At=S,Bt=!1;if(W){At=y.get(Lt),At===void 0&&(At=[],y.set(Lt,At));const Mt=W.textures;if(At.length!==Mt.length||At[0]!==r.COLOR_ATTACHMENT0){for(let xt=0,Ct=Mt.length;xt<Ct;xt++)At[xt]=r.COLOR_ATTACHMENT0+xt;At.length=Mt.length,Bt=!0}}else At[0]!==r.BACK&&(At[0]=r.BACK,Bt=!0);Bt&&r.drawBuffers(At)}function pe(W){return E!==W?(r.useProgram(W),E=W,!0):!1}const Ke={[Ls]:r.FUNC_ADD,[TM]:r.FUNC_SUBTRACT,[AM]:r.FUNC_REVERSE_SUBTRACT};Ke[RM]=r.MIN,Ke[CM]=r.MAX;const _e={[wM]:r.ZERO,[DM]:r.ONE,[UM]:r.SRC_COLOR,[_d]:r.SRC_ALPHA,[BM]:r.SRC_ALPHA_SATURATE,[PM]:r.DST_COLOR,[LM]:r.DST_ALPHA,[NM]:r.ONE_MINUS_SRC_COLOR,[vd]:r.ONE_MINUS_SRC_ALPHA,[zM]:r.ONE_MINUS_DST_COLOR,[OM]:r.ONE_MINUS_DST_ALPHA,[FM]:r.CONSTANT_COLOR,[IM]:r.ONE_MINUS_CONSTANT_COLOR,[HM]:r.CONSTANT_ALPHA,[GM]:r.ONE_MINUS_CONSTANT_ALPHA};function me(W,Lt,At,Bt,Mt,xt,Ct,re,Fe,we){if(W===Sa){T===!0&&(wt(r.BLEND),T=!1);return}if(T===!1&&(ht(r.BLEND),T=!0),W!==EM){if(W!==M||we!==A){if((v!==Ls||D!==Ls)&&(r.blendEquation(r.FUNC_ADD),v=Ls,D=Ls),we)switch(W){case Xr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case M_:r.blendFunc(r.ONE,r.ONE);break;case b_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case E_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ae("WebGLState: Invalid blending: ",W);break}else switch(W){case Xr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case M_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case b_:Ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case E_:Ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ae("WebGLState: Invalid blending: ",W);break}P=null,U=null,B=null,F=null,z.set(0,0,0),Y=0,M=W,A=we}return}Mt=Mt||Lt,xt=xt||At,Ct=Ct||Bt,(Lt!==v||Mt!==D)&&(r.blendEquationSeparate(Ke[Lt],Ke[Mt]),v=Lt,D=Mt),(At!==P||Bt!==U||xt!==B||Ct!==F)&&(r.blendFuncSeparate(_e[At],_e[Bt],_e[xt],_e[Ct]),P=At,U=Bt,B=xt,F=Ct),(re.equals(z)===!1||Fe!==Y)&&(r.blendColor(re.r,re.g,re.b,Fe),z.copy(re),Y=Fe),M=W,A=!1}function Rt(W,Lt){W.side===xa?wt(r.CULL_FACE):ht(r.CULL_FACE);let At=W.side===Jn;Lt&&(At=!At),Xt(At),W.blending===Xr&&W.transparent===!1?me(Sa):me(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),c.setMask(W.colorWrite);const Bt=W.stencilWrite;d.setTest(Bt),Bt&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ce(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ht(r.SAMPLE_ALPHA_TO_COVERAGE):wt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(W){w!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),w=W)}function le(W){W!==SM?(ht(r.CULL_FACE),W!==k&&(W===S_?r.cullFace(r.BACK):W===MM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):wt(r.CULL_FACE),k=W}function H(W){W!==Q&&(N&&r.lineWidth(W),Q=W)}function Ce(W,Lt,At){W?(ht(r.POLYGON_OFFSET_FILL),(et!==Lt||ut!==At)&&(r.polygonOffset(Lt,At),et=Lt,ut=At)):wt(r.POLYGON_OFFSET_FILL)}function ye(W){W?ht(r.SCISSOR_TEST):wt(r.SCISSOR_TEST)}function ve(W){W===void 0&&(W=r.TEXTURE0+lt-1),St!==W&&(r.activeTexture(W),St=W)}function Yt(W,Lt,At){At===void 0&&(St===null?At=r.TEXTURE0+lt-1:At=St);let Bt=mt[At];Bt===void 0&&(Bt={type:void 0,texture:void 0},mt[At]=Bt),(Bt.type!==W||Bt.texture!==Lt)&&(St!==At&&(r.activeTexture(At),St=At),r.bindTexture(W,Lt||it[W]),Bt.type=W,Bt.texture=Lt)}function O(){const W=mt[St];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(W){Ae("WebGLState:",W)}}function q(){try{r.compressedTexImage3D(...arguments)}catch(W){Ae("WebGLState:",W)}}function pt(){try{r.texSubImage2D(...arguments)}catch(W){Ae("WebGLState:",W)}}function yt(){try{r.texSubImage3D(...arguments)}catch(W){Ae("WebGLState:",W)}}function ft(){try{r.compressedTexSubImage2D(...arguments)}catch(W){Ae("WebGLState:",W)}}function Jt(){try{r.compressedTexSubImage3D(...arguments)}catch(W){Ae("WebGLState:",W)}}function Dt(){try{r.texStorage2D(...arguments)}catch(W){Ae("WebGLState:",W)}}function jt(){try{r.texStorage3D(...arguments)}catch(W){Ae("WebGLState:",W)}}function ae(){try{r.texImage2D(...arguments)}catch(W){Ae("WebGLState:",W)}}function bt(){try{r.texImage3D(...arguments)}catch(W){Ae("WebGLState:",W)}}function Tt(W){gt.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),gt.copy(W))}function It(W){Et.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Et.copy(W))}function zt(W,Lt){let At=p.get(Lt);At===void 0&&(At=new WeakMap,p.set(Lt,At));let Bt=At.get(W);Bt===void 0&&(Bt=r.getUniformBlockIndex(Lt,W.name),At.set(W,Bt))}function Ut(W,Lt){const Bt=p.get(Lt).get(W);m.get(Lt)!==Bt&&(r.uniformBlockBinding(Lt,Bt,W.__bindingPointIndex),m.set(Lt,Bt))}function fe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},St=null,mt={},_={},y=new WeakMap,S=[],E=null,T=!1,M=null,v=null,P=null,U=null,D=null,B=null,F=null,z=new Re(0,0,0),Y=0,A=!1,w=null,k=null,Q=null,et=null,ut=null,gt.set(0,0,r.canvas.width,r.canvas.height),Et.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ht,disable:wt,bindFramebuffer:kt,drawBuffers:Ht,useProgram:pe,setBlending:me,setMaterial:Rt,setFlipSided:Xt,setCullFace:le,setLineWidth:H,setPolygonOffset:Ce,setScissorTest:ye,activeTexture:ve,bindTexture:Yt,unbindTexture:O,compressedTexImage2D:b,compressedTexImage3D:q,texImage2D:ae,texImage3D:bt,updateUBOMapping:zt,uniformBlockBinding:Ut,texStorage2D:Dt,texStorage3D:jt,texSubImage2D:pt,texSubImage3D:yt,compressedTexSubImage2D:ft,compressedTexSubImage3D:Jt,scissor:Tt,viewport:It,reset:fe}}function k2(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Vt,g=new WeakMap;let _;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,b){return S?new OffscreenCanvas(O,b):cu("canvas")}function T(O,b,q){let pt=1;const yt=Yt(O);if((yt.width>q||yt.height>q)&&(pt=q/Math.max(yt.width,yt.height)),pt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ft=Math.floor(pt*yt.width),Jt=Math.floor(pt*yt.height);_===void 0&&(_=E(ft,Jt));const Dt=b?E(ft,Jt):_;return Dt.width=ft,Dt.height=Jt,Dt.getContext("2d").drawImage(O,0,0,ft,Jt),se("WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+ft+"x"+Jt+")."),Dt}else return"data"in O&&se("WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),O;return O}function M(O){return O.generateMipmaps}function v(O){r.generateMipmap(O)}function P(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(O,b,q,pt,yt=!1){if(O!==null){if(r[O]!==void 0)return r[O];se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ft=b;if(b===r.RED&&(q===r.FLOAT&&(ft=r.R32F),q===r.HALF_FLOAT&&(ft=r.R16F),q===r.UNSIGNED_BYTE&&(ft=r.R8)),b===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(ft=r.R8UI),q===r.UNSIGNED_SHORT&&(ft=r.R16UI),q===r.UNSIGNED_INT&&(ft=r.R32UI),q===r.BYTE&&(ft=r.R8I),q===r.SHORT&&(ft=r.R16I),q===r.INT&&(ft=r.R32I)),b===r.RG&&(q===r.FLOAT&&(ft=r.RG32F),q===r.HALF_FLOAT&&(ft=r.RG16F),q===r.UNSIGNED_BYTE&&(ft=r.RG8)),b===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(ft=r.RG8UI),q===r.UNSIGNED_SHORT&&(ft=r.RG16UI),q===r.UNSIGNED_INT&&(ft=r.RG32UI),q===r.BYTE&&(ft=r.RG8I),q===r.SHORT&&(ft=r.RG16I),q===r.INT&&(ft=r.RG32I)),b===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(ft=r.RGB8UI),q===r.UNSIGNED_SHORT&&(ft=r.RGB16UI),q===r.UNSIGNED_INT&&(ft=r.RGB32UI),q===r.BYTE&&(ft=r.RGB8I),q===r.SHORT&&(ft=r.RGB16I),q===r.INT&&(ft=r.RGB32I)),b===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(ft=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(ft=r.RGBA16UI),q===r.UNSIGNED_INT&&(ft=r.RGBA32UI),q===r.BYTE&&(ft=r.RGBA8I),q===r.SHORT&&(ft=r.RGBA16I),q===r.INT&&(ft=r.RGBA32I)),b===r.RGB&&(q===r.UNSIGNED_INT_5_9_9_9_REV&&(ft=r.RGB9_E5),q===r.UNSIGNED_INT_10F_11F_11F_REV&&(ft=r.R11F_G11F_B10F)),b===r.RGBA){const Jt=yt?ou:De.getTransfer(pt);q===r.FLOAT&&(ft=r.RGBA32F),q===r.HALF_FLOAT&&(ft=r.RGBA16F),q===r.UNSIGNED_BYTE&&(ft=Jt===Ve?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(ft=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(ft=r.RGB5_A1)}return(ft===r.R16F||ft===r.R32F||ft===r.RG16F||ft===r.RG32F||ft===r.RGBA16F||ft===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function D(O,b){let q;return O?b===null||b===Yi||b===ul?q=r.DEPTH24_STENCIL8:b===ki?q=r.DEPTH32F_STENCIL8:b===cl&&(q=r.DEPTH24_STENCIL8,se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Yi||b===ul?q=r.DEPTH_COMPONENT24:b===ki?q=r.DEPTH_COMPONENT32F:b===cl&&(q=r.DEPTH_COMPONENT16),q}function B(O,b){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==Ln&&O.minFilter!==In?Math.log2(Math.max(b.width,b.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?b.mipmaps.length:1}function F(O){const b=O.target;b.removeEventListener("dispose",F),Y(b),b.isVideoTexture&&g.delete(b)}function z(O){const b=O.target;b.removeEventListener("dispose",z),w(b)}function Y(O){const b=s.get(O);if(b.__webglInit===void 0)return;const q=O.source,pt=y.get(q);if(pt){const yt=pt[b.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&A(O),Object.keys(pt).length===0&&y.delete(q)}s.remove(O)}function A(O){const b=s.get(O);r.deleteTexture(b.__webglTexture);const q=O.source,pt=y.get(q);delete pt[b.__cacheKey],h.memory.textures--}function w(O){const b=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(b.__webglFramebuffer[pt]))for(let yt=0;yt<b.__webglFramebuffer[pt].length;yt++)r.deleteFramebuffer(b.__webglFramebuffer[pt][yt]);else r.deleteFramebuffer(b.__webglFramebuffer[pt]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[pt])}else{if(Array.isArray(b.__webglFramebuffer))for(let pt=0;pt<b.__webglFramebuffer.length;pt++)r.deleteFramebuffer(b.__webglFramebuffer[pt]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let pt=0;pt<b.__webglColorRenderbuffer.length;pt++)b.__webglColorRenderbuffer[pt]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[pt]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const q=O.textures;for(let pt=0,yt=q.length;pt<yt;pt++){const ft=s.get(q[pt]);ft.__webglTexture&&(r.deleteTexture(ft.__webglTexture),h.memory.textures--),s.remove(q[pt])}s.remove(O)}let k=0;function Q(){k=0}function et(){const O=k;return O>=l.maxTextures&&se("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),k+=1,O}function ut(O){const b=[];return b.push(O.wrapS),b.push(O.wrapT),b.push(O.wrapR||0),b.push(O.magFilter),b.push(O.minFilter),b.push(O.anisotropy),b.push(O.internalFormat),b.push(O.format),b.push(O.type),b.push(O.generateMipmaps),b.push(O.premultiplyAlpha),b.push(O.flipY),b.push(O.unpackAlignment),b.push(O.colorSpace),b.join()}function lt(O,b){const q=s.get(O);if(O.isVideoTexture&&ye(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&q.__version!==O.version){const pt=O.image;if(pt===null)se("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)se("WebGLRenderer: Texture marked for update but image is incomplete");else{it(q,O,b);return}}else O.isExternalTexture&&(q.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+b)}function N(O,b){const q=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&q.__version!==O.version){it(q,O,b);return}else O.isExternalTexture&&(q.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+b)}function I(O,b){const q=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&q.__version!==O.version){it(q,O,b);return}i.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+b)}function J(O,b){const q=s.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&q.__version!==O.version){ht(q,O,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+b)}const St={[Cd]:r.REPEAT,[ya]:r.CLAMP_TO_EDGE,[wd]:r.MIRRORED_REPEAT},mt={[Ln]:r.NEAREST,[XM]:r.NEAREST_MIPMAP_NEAREST,[Tc]:r.NEAREST_MIPMAP_LINEAR,[In]:r.LINEAR,[Lh]:r.LINEAR_MIPMAP_NEAREST,[Ps]:r.LINEAR_MIPMAP_LINEAR},L={[jM]:r.NEVER,[$M]:r.ALWAYS,[ZM]:r.LESS,[Sp]:r.LEQUAL,[KM]:r.EQUAL,[Mp]:r.GEQUAL,[QM]:r.GREATER,[JM]:r.NOTEQUAL};function nt(O,b){if(b.type===ki&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===In||b.magFilter===Lh||b.magFilter===Tc||b.magFilter===Ps||b.minFilter===In||b.minFilter===Lh||b.minFilter===Tc||b.minFilter===Ps)&&se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,St[b.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,St[b.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,St[b.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,mt[b.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,mt[b.minFilter]),b.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,L[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ln||b.minFilter!==Tc&&b.minFilter!==Ps||b.type===ki&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(O,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function gt(O,b){let q=!1;O.__webglInit===void 0&&(O.__webglInit=!0,b.addEventListener("dispose",F));const pt=b.source;let yt=y.get(pt);yt===void 0&&(yt={},y.set(pt,yt));const ft=ut(b);if(ft!==O.__cacheKey){yt[ft]===void 0&&(yt[ft]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,q=!0),yt[ft].usedTimes++;const Jt=yt[O.__cacheKey];Jt!==void 0&&(yt[O.__cacheKey].usedTimes--,Jt.usedTimes===0&&A(b)),O.__cacheKey=ft,O.__webglTexture=yt[ft].texture}return q}function Et(O,b,q){return Math.floor(Math.floor(O/q)/b)}function Ft(O,b,q,pt){const ft=O.updateRanges;if(ft.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,q,pt,b.data);else{ft.sort((bt,Tt)=>bt.start-Tt.start);let Jt=0;for(let bt=1;bt<ft.length;bt++){const Tt=ft[Jt],It=ft[bt],zt=Tt.start+Tt.count,Ut=Et(It.start,b.width,4),fe=Et(Tt.start,b.width,4);It.start<=zt+1&&Ut===fe&&Et(It.start+It.count-1,b.width,4)===Ut?Tt.count=Math.max(Tt.count,It.start+It.count-Tt.start):(++Jt,ft[Jt]=It)}ft.length=Jt+1;const Dt=r.getParameter(r.UNPACK_ROW_LENGTH),jt=r.getParameter(r.UNPACK_SKIP_PIXELS),ae=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let bt=0,Tt=ft.length;bt<Tt;bt++){const It=ft[bt],zt=Math.floor(It.start/4),Ut=Math.ceil(It.count/4),fe=zt%b.width,W=Math.floor(zt/b.width),Lt=Ut,At=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,fe),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,fe,W,Lt,At,q,pt,b.data)}O.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Dt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,jt),r.pixelStorei(r.UNPACK_SKIP_ROWS,ae)}}function it(O,b,q){let pt=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(pt=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(pt=r.TEXTURE_3D);const yt=gt(O,b),ft=b.source;i.bindTexture(pt,O.__webglTexture,r.TEXTURE0+q);const Jt=s.get(ft);if(ft.version!==Jt.__version||yt===!0){i.activeTexture(r.TEXTURE0+q);const Dt=De.getPrimaries(De.workingColorSpace),jt=b.colorSpace===ss?null:De.getPrimaries(b.colorSpace),ae=b.colorSpace===ss||Dt===jt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let bt=T(b.image,!1,l.maxTextureSize);bt=ve(b,bt);const Tt=c.convert(b.format,b.colorSpace),It=c.convert(b.type);let zt=U(b.internalFormat,Tt,It,b.colorSpace,b.isVideoTexture);nt(pt,b);let Ut;const fe=b.mipmaps,W=b.isVideoTexture!==!0,Lt=Jt.__version===void 0||yt===!0,At=ft.dataReady,Bt=B(b,bt);if(b.isDepthTexture)zt=D(b.format===zs,b.type),Lt&&(W?i.texStorage2D(r.TEXTURE_2D,1,zt,bt.width,bt.height):i.texImage2D(r.TEXTURE_2D,0,zt,bt.width,bt.height,0,Tt,It,null));else if(b.isDataTexture)if(fe.length>0){W&&Lt&&i.texStorage2D(r.TEXTURE_2D,Bt,zt,fe[0].width,fe[0].height);for(let Mt=0,xt=fe.length;Mt<xt;Mt++)Ut=fe[Mt],W?At&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,Tt,It,Ut.data):i.texImage2D(r.TEXTURE_2D,Mt,zt,Ut.width,Ut.height,0,Tt,It,Ut.data);b.generateMipmaps=!1}else W?(Lt&&i.texStorage2D(r.TEXTURE_2D,Bt,zt,bt.width,bt.height),At&&Ft(b,bt,Tt,It)):i.texImage2D(r.TEXTURE_2D,0,zt,bt.width,bt.height,0,Tt,It,bt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){W&&Lt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,zt,fe[0].width,fe[0].height,bt.depth);for(let Mt=0,xt=fe.length;Mt<xt;Mt++)if(Ut=fe[Mt],b.format!==Li)if(Tt!==null)if(W){if(At)if(b.layerUpdates.size>0){const Ct=tv(Ut.width,Ut.height,b.format,b.type);for(const re of b.layerUpdates){const Fe=Ut.data.subarray(re*Ct/Ut.data.BYTES_PER_ELEMENT,(re+1)*Ct/Ut.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,re,Ut.width,Ut.height,1,Tt,Fe)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,0,Ut.width,Ut.height,bt.depth,Tt,Ut.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Mt,zt,Ut.width,Ut.height,bt.depth,0,Ut.data,0,0);else se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?At&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,0,Ut.width,Ut.height,bt.depth,Tt,It,Ut.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Mt,zt,Ut.width,Ut.height,bt.depth,0,Tt,It,Ut.data)}else{W&&Lt&&i.texStorage2D(r.TEXTURE_2D,Bt,zt,fe[0].width,fe[0].height);for(let Mt=0,xt=fe.length;Mt<xt;Mt++)Ut=fe[Mt],b.format!==Li?Tt!==null?W?At&&i.compressedTexSubImage2D(r.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,Tt,Ut.data):i.compressedTexImage2D(r.TEXTURE_2D,Mt,zt,Ut.width,Ut.height,0,Ut.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?At&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,Tt,It,Ut.data):i.texImage2D(r.TEXTURE_2D,Mt,zt,Ut.width,Ut.height,0,Tt,It,Ut.data)}else if(b.isDataArrayTexture)if(W){if(Lt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,zt,bt.width,bt.height,bt.depth),At)if(b.layerUpdates.size>0){const Mt=tv(bt.width,bt.height,b.format,b.type);for(const xt of b.layerUpdates){const Ct=bt.data.subarray(xt*Mt/bt.data.BYTES_PER_ELEMENT,(xt+1)*Mt/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xt,bt.width,bt.height,1,Tt,It,Ct)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Tt,It,bt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,zt,bt.width,bt.height,bt.depth,0,Tt,It,bt.data);else if(b.isData3DTexture)W?(Lt&&i.texStorage3D(r.TEXTURE_3D,Bt,zt,bt.width,bt.height,bt.depth),At&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Tt,It,bt.data)):i.texImage3D(r.TEXTURE_3D,0,zt,bt.width,bt.height,bt.depth,0,Tt,It,bt.data);else if(b.isFramebufferTexture){if(Lt)if(W)i.texStorage2D(r.TEXTURE_2D,Bt,zt,bt.width,bt.height);else{let Mt=bt.width,xt=bt.height;for(let Ct=0;Ct<Bt;Ct++)i.texImage2D(r.TEXTURE_2D,Ct,zt,Mt,xt,0,Tt,It,null),Mt>>=1,xt>>=1}}else if(fe.length>0){if(W&&Lt){const Mt=Yt(fe[0]);i.texStorage2D(r.TEXTURE_2D,Bt,zt,Mt.width,Mt.height)}for(let Mt=0,xt=fe.length;Mt<xt;Mt++)Ut=fe[Mt],W?At&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,Tt,It,Ut):i.texImage2D(r.TEXTURE_2D,Mt,zt,Tt,It,Ut);b.generateMipmaps=!1}else if(W){if(Lt){const Mt=Yt(bt);i.texStorage2D(r.TEXTURE_2D,Bt,zt,Mt.width,Mt.height)}At&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Tt,It,bt)}else i.texImage2D(r.TEXTURE_2D,0,zt,Tt,It,bt);M(b)&&v(pt),Jt.__version=ft.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function ht(O,b,q){if(b.image.length!==6)return;const pt=gt(O,b),yt=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+q);const ft=s.get(yt);if(yt.version!==ft.__version||pt===!0){i.activeTexture(r.TEXTURE0+q);const Jt=De.getPrimaries(De.workingColorSpace),Dt=b.colorSpace===ss?null:De.getPrimaries(b.colorSpace),jt=b.colorSpace===ss||Jt===Dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);const ae=b.isCompressedTexture||b.image[0].isCompressedTexture,bt=b.image[0]&&b.image[0].isDataTexture,Tt=[];for(let xt=0;xt<6;xt++)!ae&&!bt?Tt[xt]=T(b.image[xt],!0,l.maxCubemapSize):Tt[xt]=bt?b.image[xt].image:b.image[xt],Tt[xt]=ve(b,Tt[xt]);const It=Tt[0],zt=c.convert(b.format,b.colorSpace),Ut=c.convert(b.type),fe=U(b.internalFormat,zt,Ut,b.colorSpace),W=b.isVideoTexture!==!0,Lt=ft.__version===void 0||pt===!0,At=yt.dataReady;let Bt=B(b,It);nt(r.TEXTURE_CUBE_MAP,b);let Mt;if(ae){W&&Lt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,fe,It.width,It.height);for(let xt=0;xt<6;xt++){Mt=Tt[xt].mipmaps;for(let Ct=0;Ct<Mt.length;Ct++){const re=Mt[Ct];b.format!==Li?zt!==null?W?At&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct,0,0,re.width,re.height,zt,re.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct,fe,re.width,re.height,0,re.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct,0,0,re.width,re.height,zt,Ut,re.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct,fe,re.width,re.height,0,zt,Ut,re.data)}}}else{if(Mt=b.mipmaps,W&&Lt){Mt.length>0&&Bt++;const xt=Yt(Tt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,fe,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(bt){W?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Tt[xt].width,Tt[xt].height,zt,Ut,Tt[xt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,fe,Tt[xt].width,Tt[xt].height,0,zt,Ut,Tt[xt].data);for(let Ct=0;Ct<Mt.length;Ct++){const Fe=Mt[Ct].image[xt].image;W?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct+1,0,0,Fe.width,Fe.height,zt,Ut,Fe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct+1,fe,Fe.width,Fe.height,0,zt,Ut,Fe.data)}}else{W?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,zt,Ut,Tt[xt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,fe,zt,Ut,Tt[xt]);for(let Ct=0;Ct<Mt.length;Ct++){const re=Mt[Ct];W?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct+1,0,0,zt,Ut,re.image[xt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct+1,fe,zt,Ut,re.image[xt])}}}M(b)&&v(r.TEXTURE_CUBE_MAP),ft.__version=yt.version,b.onUpdate&&b.onUpdate(b)}O.__version=b.version}function wt(O,b,q,pt,yt,ft){const Jt=c.convert(q.format,q.colorSpace),Dt=c.convert(q.type),jt=U(q.internalFormat,Jt,Dt,q.colorSpace),ae=s.get(b),bt=s.get(q);if(bt.__renderTarget=b,!ae.__hasExternalTextures){const Tt=Math.max(1,b.width>>ft),It=Math.max(1,b.height>>ft);yt===r.TEXTURE_3D||yt===r.TEXTURE_2D_ARRAY?i.texImage3D(yt,ft,jt,Tt,It,b.depth,0,Jt,Dt,null):i.texImage2D(yt,ft,jt,Tt,It,0,Jt,Dt,null)}i.bindFramebuffer(r.FRAMEBUFFER,O),Ce(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pt,yt,bt.__webglTexture,0,H(b)):(yt===r.TEXTURE_2D||yt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,pt,yt,bt.__webglTexture,ft),i.bindFramebuffer(r.FRAMEBUFFER,null)}function kt(O,b,q){if(r.bindRenderbuffer(r.RENDERBUFFER,O),b.depthBuffer){const pt=b.depthTexture,yt=pt&&pt.isDepthTexture?pt.type:null,ft=D(b.stencilBuffer,yt),Jt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ce(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,H(b),ft,b.width,b.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,H(b),ft,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ft,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Jt,r.RENDERBUFFER,O)}else{const pt=b.textures;for(let yt=0;yt<pt.length;yt++){const ft=pt[yt],Jt=c.convert(ft.format,ft.colorSpace),Dt=c.convert(ft.type),jt=U(ft.internalFormat,Jt,Dt,ft.colorSpace);Ce(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,H(b),jt,b.width,b.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,H(b),jt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,jt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ht(O,b,q){const pt=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,O),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const yt=s.get(b.depthTexture);if(yt.__renderTarget=b,(!yt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),pt){if(yt.__webglInit===void 0&&(yt.__webglInit=!0,b.depthTexture.addEventListener("dispose",F)),yt.__webglTexture===void 0){yt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,yt.__webglTexture),nt(r.TEXTURE_CUBE_MAP,b.depthTexture);const ae=c.convert(b.depthTexture.format),bt=c.convert(b.depthTexture.type);let Tt;b.depthTexture.format===Ea?Tt=r.DEPTH_COMPONENT24:b.depthTexture.format===zs&&(Tt=r.DEPTH24_STENCIL8);for(let It=0;It<6;It++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,Tt,b.width,b.height,0,ae,bt,null)}}else lt(b.depthTexture,0);const ft=yt.__webglTexture,Jt=H(b),Dt=pt?r.TEXTURE_CUBE_MAP_POSITIVE_X+q:r.TEXTURE_2D,jt=b.depthTexture.format===zs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ea)Ce(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,jt,Dt,ft,0,Jt):r.framebufferTexture2D(r.FRAMEBUFFER,jt,Dt,ft,0);else if(b.depthTexture.format===zs)Ce(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,jt,Dt,ft,0,Jt):r.framebufferTexture2D(r.FRAMEBUFFER,jt,Dt,ft,0);else throw new Error("Unknown depthTexture format")}function pe(O){const b=s.get(O),q=O.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==O.depthTexture){const pt=O.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),pt){const yt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,pt.removeEventListener("dispose",yt)};pt.addEventListener("dispose",yt),b.__depthDisposeCallback=yt}b.__boundDepthTexture=pt}if(O.depthTexture&&!b.__autoAllocateDepthBuffer)if(q)for(let pt=0;pt<6;pt++)Ht(b.__webglFramebuffer[pt],O,pt);else{const pt=O.texture.mipmaps;pt&&pt.length>0?Ht(b.__webglFramebuffer[0],O,0):Ht(b.__webglFramebuffer,O,0)}else if(q){b.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[pt]),b.__webglDepthbuffer[pt]===void 0)b.__webglDepthbuffer[pt]=r.createRenderbuffer(),kt(b.__webglDepthbuffer[pt],O,!1);else{const yt=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer[pt];r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,ft)}}else{const pt=O.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),kt(b.__webglDepthbuffer,O,!1);else{const yt=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,ft)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ke(O,b,q){const pt=s.get(O);b!==void 0&&wt(pt.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&pe(O)}function _e(O){const b=O.texture,q=s.get(O),pt=s.get(b);O.addEventListener("dispose",z);const yt=O.textures,ft=O.isWebGLCubeRenderTarget===!0,Jt=yt.length>1;if(Jt||(pt.__webglTexture===void 0&&(pt.__webglTexture=r.createTexture()),pt.__version=b.version,h.memory.textures++),ft){q.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[Dt]=[];for(let jt=0;jt<b.mipmaps.length;jt++)q.__webglFramebuffer[Dt][jt]=r.createFramebuffer()}else q.__webglFramebuffer[Dt]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let Dt=0;Dt<b.mipmaps.length;Dt++)q.__webglFramebuffer[Dt]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(Jt)for(let Dt=0,jt=yt.length;Dt<jt;Dt++){const ae=s.get(yt[Dt]);ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture(),h.memory.textures++)}if(O.samples>0&&Ce(O)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Dt=0;Dt<yt.length;Dt++){const jt=yt[Dt];q.__webglColorRenderbuffer[Dt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[Dt]);const ae=c.convert(jt.format,jt.colorSpace),bt=c.convert(jt.type),Tt=U(jt.internalFormat,ae,bt,jt.colorSpace,O.isXRRenderTarget===!0),It=H(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,It,Tt,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.RENDERBUFFER,q.__webglColorRenderbuffer[Dt])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),kt(q.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ft){i.bindTexture(r.TEXTURE_CUBE_MAP,pt.__webglTexture),nt(r.TEXTURE_CUBE_MAP,b);for(let Dt=0;Dt<6;Dt++)if(b.mipmaps&&b.mipmaps.length>0)for(let jt=0;jt<b.mipmaps.length;jt++)wt(q.__webglFramebuffer[Dt][jt],O,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,jt);else wt(q.__webglFramebuffer[Dt],O,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);M(b)&&v(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Jt){for(let Dt=0,jt=yt.length;Dt<jt;Dt++){const ae=yt[Dt],bt=s.get(ae);let Tt=r.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Tt=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Tt,bt.__webglTexture),nt(Tt,ae),wt(q.__webglFramebuffer,O,ae,r.COLOR_ATTACHMENT0+Dt,Tt,0),M(ae)&&v(Tt)}i.unbindTexture()}else{let Dt=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Dt=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Dt,pt.__webglTexture),nt(Dt,b),b.mipmaps&&b.mipmaps.length>0)for(let jt=0;jt<b.mipmaps.length;jt++)wt(q.__webglFramebuffer[jt],O,b,r.COLOR_ATTACHMENT0,Dt,jt);else wt(q.__webglFramebuffer,O,b,r.COLOR_ATTACHMENT0,Dt,0);M(b)&&v(Dt),i.unbindTexture()}O.depthBuffer&&pe(O)}function me(O){const b=O.textures;for(let q=0,pt=b.length;q<pt;q++){const yt=b[q];if(M(yt)){const ft=P(O),Jt=s.get(yt).__webglTexture;i.bindTexture(ft,Jt),v(ft),i.unbindTexture()}}}const Rt=[],Xt=[];function le(O){if(O.samples>0){if(Ce(O)===!1){const b=O.textures,q=O.width,pt=O.height;let yt=r.COLOR_BUFFER_BIT;const ft=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Jt=s.get(O),Dt=b.length>1;if(Dt)for(let ae=0;ae<b.length;ae++)i.bindFramebuffer(r.FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Jt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Jt.__webglMultisampledFramebuffer);const jt=O.texture.mipmaps;jt&&jt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Jt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Jt.__webglFramebuffer);for(let ae=0;ae<b.length;ae++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(yt|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(yt|=r.STENCIL_BUFFER_BIT)),Dt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Jt.__webglColorRenderbuffer[ae]);const bt=s.get(b[ae]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,bt,0)}r.blitFramebuffer(0,0,q,pt,0,0,q,pt,yt,r.NEAREST),m===!0&&(Rt.length=0,Xt.length=0,Rt.push(r.COLOR_ATTACHMENT0+ae),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Rt.push(ft),Xt.push(ft),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Xt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Rt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Dt)for(let ae=0;ae<b.length;ae++){i.bindFramebuffer(r.FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,Jt.__webglColorRenderbuffer[ae]);const bt=s.get(b[ae]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Jt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.TEXTURE_2D,bt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Jt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const b=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function H(O){return Math.min(l.maxSamples,O.samples)}function Ce(O){const b=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ye(O){const b=h.render.frame;g.get(O)!==b&&(g.set(O,b),O.update())}function ve(O,b){const q=O.colorSpace,pt=O.format,yt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||q!==Zr&&q!==ss&&(De.getTransfer(q)===Ve?(pt!==Li||yt!==bi)&&se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ae("WebGLTextures: Unsupported texture color space:",q)),b}function Yt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=et,this.resetTextureUnits=Q,this.setTexture2D=lt,this.setTexture2DArray=N,this.setTexture3D=I,this.setTextureCube=J,this.rebindTextures=Ke,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Ce,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function X2(r,t){function i(s,l=ss){let c;const h=De.getTransfer(l);if(s===bi)return r.UNSIGNED_BYTE;if(s===gp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===_p)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Iv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Hv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Bv)return r.BYTE;if(s===Fv)return r.SHORT;if(s===cl)return r.UNSIGNED_SHORT;if(s===mp)return r.INT;if(s===Yi)return r.UNSIGNED_INT;if(s===ki)return r.FLOAT;if(s===ba)return r.HALF_FLOAT;if(s===Gv)return r.ALPHA;if(s===Vv)return r.RGB;if(s===Li)return r.RGBA;if(s===Ea)return r.DEPTH_COMPONENT;if(s===zs)return r.DEPTH_STENCIL;if(s===kv)return r.RED;if(s===vp)return r.RED_INTEGER;if(s===jr)return r.RG;if(s===xp)return r.RG_INTEGER;if(s===yp)return r.RGBA_INTEGER;if(s===nu||s===iu||s===au||s===su)if(h===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===nu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===nu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===iu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===au)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===su)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Dd||s===Ud||s===Nd||s===Ld)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Dd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ud)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Nd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ld)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Od||s===Pd||s===zd||s===Bd||s===Fd||s===Id||s===Hd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Od||s===Pd)return h===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===zd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Bd)return c.COMPRESSED_R11_EAC;if(s===Fd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Id)return c.COMPRESSED_RG11_EAC;if(s===Hd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Gd||s===Vd||s===kd||s===Xd||s===Wd||s===qd||s===Yd||s===jd||s===Zd||s===Kd||s===Qd||s===Jd||s===$d||s===tp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Gd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Vd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===kd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Xd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Wd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===qd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Yd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===jd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Zd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Kd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Qd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Jd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===$d)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===tp)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ep||s===np||s===ip)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===ep)return h===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===np)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ip)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ap||s===sp||s===rp||s===op)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===ap)return c.COMPRESSED_RED_RGTC1_EXT;if(s===sp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===rp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===op)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ul?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const W2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,q2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Y2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new ax(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ji({vertexShader:W2,fragmentShader:q2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ci(new yu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class j2 extends Gs{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,_=null,y=null,S=null,E=null;const T=typeof XRWebGLBinding<"u",M=new Y2,v={},P=i.getContextAttributes();let U=null,D=null;const B=[],F=[],z=new Vt;let Y=null;const A=new Mi;A.viewport=new ln;const w=new Mi;w.viewport=new ln;const k=[A,w],Q=new eb;let et=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ht=B[it];return ht===void 0&&(ht=new ed,B[it]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(it){let ht=B[it];return ht===void 0&&(ht=new ed,B[it]=ht),ht.getGripSpace()},this.getHand=function(it){let ht=B[it];return ht===void 0&&(ht=new ed,B[it]=ht),ht.getHandSpace()};function lt(it){const ht=F.indexOf(it.inputSource);if(ht===-1)return;const wt=B[ht];wt!==void 0&&(wt.update(it.inputSource,it.frame,p||h),wt.dispatchEvent({type:it.type,data:it.inputSource}))}function N(){l.removeEventListener("select",lt),l.removeEventListener("selectstart",lt),l.removeEventListener("selectend",lt),l.removeEventListener("squeeze",lt),l.removeEventListener("squeezestart",lt),l.removeEventListener("squeezeend",lt),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",I);for(let it=0;it<B.length;it++){const ht=F[it];ht!==null&&(F[it]=null,B[it].disconnect(ht))}et=null,ut=null,M.reset();for(const it in v)delete v[it];t.setRenderTarget(U),S=null,y=null,_=null,l=null,D=null,Ft.stop(),s.isPresenting=!1,t.setPixelRatio(Y),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,s.isPresenting===!0&&se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){d=it,s.isPresenting===!0&&se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(it){p=it},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",lt),l.addEventListener("selectstart",lt),l.addEventListener("selectend",lt),l.addEventListener("squeeze",lt),l.addEventListener("squeezestart",lt),l.addEventListener("squeezeend",lt),l.addEventListener("end",N),l.addEventListener("inputsourceschange",I),P.xrCompatible!==!0&&await i.makeXRCompatible(),Y=t.getPixelRatio(),t.getSize(z),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,kt=null,Ht=null;P.depth&&(Ht=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,wt=P.stencil?zs:Ea,kt=P.stencil?ul:Yi);const pe={colorFormat:i.RGBA8,depthFormat:Ht,scaleFactor:c};_=this.getBinding(),y=_.createProjectionLayer(pe),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),D=new qi(y.textureWidth,y.textureHeight,{format:Li,type:bi,depthTexture:new hl(y.textureWidth,y.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const wt={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,wt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new qi(S.framebufferWidth,S.framebufferHeight,{format:Li,type:bi,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ft.setContext(l),Ft.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function I(it){for(let ht=0;ht<it.removed.length;ht++){const wt=it.removed[ht],kt=F.indexOf(wt);kt>=0&&(F[kt]=null,B[kt].disconnect(wt))}for(let ht=0;ht<it.added.length;ht++){const wt=it.added[ht];let kt=F.indexOf(wt);if(kt===-1){for(let pe=0;pe<B.length;pe++)if(pe>=F.length){F.push(wt),kt=pe;break}else if(F[pe]===null){F[pe]=wt,kt=pe;break}if(kt===-1)break}const Ht=B[kt];Ht&&Ht.connect(wt)}}const J=new V,St=new V;function mt(it,ht,wt){J.setFromMatrixPosition(ht.matrixWorld),St.setFromMatrixPosition(wt.matrixWorld);const kt=J.distanceTo(St),Ht=ht.projectionMatrix.elements,pe=wt.projectionMatrix.elements,Ke=Ht[14]/(Ht[10]-1),_e=Ht[14]/(Ht[10]+1),me=(Ht[9]+1)/Ht[5],Rt=(Ht[9]-1)/Ht[5],Xt=(Ht[8]-1)/Ht[0],le=(pe[8]+1)/pe[0],H=Ke*Xt,Ce=Ke*le,ye=kt/(-Xt+le),ve=ye*-Xt;if(ht.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(ve),it.translateZ(ye),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Ht[10]===-1)it.projectionMatrix.copy(ht.projectionMatrix),it.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const Yt=Ke+ye,O=_e+ye,b=H-ve,q=Ce+(kt-ve),pt=me*_e/O*Yt,yt=Rt*_e/O*Yt;it.projectionMatrix.makePerspective(b,q,pt,yt,Yt,O),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function L(it,ht){ht===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ht.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let ht=it.near,wt=it.far;M.texture!==null&&(M.depthNear>0&&(ht=M.depthNear),M.depthFar>0&&(wt=M.depthFar)),Q.near=w.near=A.near=ht,Q.far=w.far=A.far=wt,(et!==Q.near||ut!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),et=Q.near,ut=Q.far),Q.layers.mask=it.layers.mask|6,A.layers.mask=Q.layers.mask&3,w.layers.mask=Q.layers.mask&5;const kt=it.parent,Ht=Q.cameras;L(Q,kt);for(let pe=0;pe<Ht.length;pe++)L(Ht[pe],kt);Ht.length===2?mt(Q,A,w):Q.projectionMatrix.copy(A.projectionMatrix),nt(it,Q,kt)};function nt(it,ht,wt){wt===null?it.matrix.copy(ht.matrixWorld):(it.matrix.copy(wt.matrixWorld),it.matrix.invert(),it.matrix.multiply(ht.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ht.projectionMatrix),it.projectionMatrixInverse.copy(ht.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=cp*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(y===null&&S===null))return m},this.setFoveation=function(it){m=it,y!==null&&(y.fixedFoveation=it),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=it)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Q)},this.getCameraTexture=function(it){return v[it]};let gt=null;function Et(it,ht){if(g=ht.getViewerPose(p||h),E=ht,g!==null){const wt=g.views;S!==null&&(t.setRenderTargetFramebuffer(D,S.framebuffer),t.setRenderTarget(D));let kt=!1;wt.length!==Q.cameras.length&&(Q.cameras.length=0,kt=!0);for(let _e=0;_e<wt.length;_e++){const me=wt[_e];let Rt=null;if(S!==null)Rt=S.getViewport(me);else{const le=_.getViewSubImage(y,me);Rt=le.viewport,_e===0&&(t.setRenderTargetTextures(D,le.colorTexture,le.depthStencilTexture),t.setRenderTarget(D))}let Xt=k[_e];Xt===void 0&&(Xt=new Mi,Xt.layers.enable(_e),Xt.viewport=new ln,k[_e]=Xt),Xt.matrix.fromArray(me.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(me.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),_e===0&&(Q.matrix.copy(Xt.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),kt===!0&&Q.cameras.push(Xt)}const Ht=l.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){_=s.getBinding();const _e=_.getDepthInformation(wt[0]);_e&&_e.isValid&&_e.texture&&M.init(_e,l.renderState)}if(Ht&&Ht.includes("camera-access")&&T){t.state.unbindTexture(),_=s.getBinding();for(let _e=0;_e<wt.length;_e++){const me=wt[_e].camera;if(me){let Rt=v[me];Rt||(Rt=new ax,v[me]=Rt);const Xt=_.getCameraImage(me);Rt.sourceTexture=Xt}}}}for(let wt=0;wt<B.length;wt++){const kt=F[wt],Ht=B[wt];kt!==null&&Ht!==void 0&&Ht.update(kt,ht,p||h)}gt&&gt(it,ht),ht.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ht}),E=null}const Ft=new cx;Ft.setAnimationLoop(Et),this.setAnimationLoop=function(it){gt=it},this.dispose=function(){}}}const Ns=new Ta,Z2=new en;function K2(r,t){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function s(M,v){v.color.getRGB(M.fogColor.value,Zv(r)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,P,U,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(M,v):v.isMeshToonMaterial?(c(M,v),_(M,v)):v.isMeshPhongMaterial?(c(M,v),g(M,v)):v.isMeshStandardMaterial?(c(M,v),y(M,v),v.isMeshPhysicalMaterial&&S(M,v,D)):v.isMeshMatcapMaterial?(c(M,v),E(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),T(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(h(M,v),v.isLineDashedMaterial&&d(M,v)):v.isPointsMaterial?m(M,v,P,U):v.isSpriteMaterial?p(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===Jn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===Jn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const P=t.get(v),U=P.envMap,D=P.envMapRotation;U&&(M.envMap.value=U,Ns.copy(D),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),M.envMapRotation.value.setFromMatrix4(Z2.makeRotationFromEuler(Ns)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function h(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function d(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,P,U){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*P,M.scale.value=U*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function p(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function g(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function _(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function y(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function S(M,v,P){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Jn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,v){v.matcap&&(M.matcap.value=v.matcap)}function T(M,v){const P=t.get(v).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function Q2(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,U){const D=U.program;s.uniformBlockBinding(P,D)}function p(P,U){let D=l[P.id];D===void 0&&(E(P),D=g(P),l[P.id]=D,P.addEventListener("dispose",M));const B=U.program;s.updateUBOMapping(P,B);const F=t.render.frame;c[P.id]!==F&&(y(P),c[P.id]=F)}function g(P){const U=_();P.__bindingPointIndex=U;const D=r.createBuffer(),B=P.__size,F=P.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,B,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,D),D}function _(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return Ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(P){const U=l[P.id],D=P.uniforms,B=P.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let F=0,z=D.length;F<z;F++){const Y=Array.isArray(D[F])?D[F]:[D[F]];for(let A=0,w=Y.length;A<w;A++){const k=Y[A];if(S(k,F,A,B)===!0){const Q=k.__offset,et=Array.isArray(k.value)?k.value:[k.value];let ut=0;for(let lt=0;lt<et.length;lt++){const N=et[lt],I=T(N);typeof N=="number"||typeof N=="boolean"?(k.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,Q+ut,k.__data)):N.isMatrix3?(k.__data[0]=N.elements[0],k.__data[1]=N.elements[1],k.__data[2]=N.elements[2],k.__data[3]=0,k.__data[4]=N.elements[3],k.__data[5]=N.elements[4],k.__data[6]=N.elements[5],k.__data[7]=0,k.__data[8]=N.elements[6],k.__data[9]=N.elements[7],k.__data[10]=N.elements[8],k.__data[11]=0):(N.toArray(k.__data,ut),ut+=I.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Q,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(P,U,D,B){const F=P.value,z=U+"_"+D;if(B[z]===void 0)return typeof F=="number"||typeof F=="boolean"?B[z]=F:B[z]=F.clone(),!0;{const Y=B[z];if(typeof F=="number"||typeof F=="boolean"){if(Y!==F)return B[z]=F,!0}else if(Y.equals(F)===!1)return Y.copy(F),!0}return!1}function E(P){const U=P.uniforms;let D=0;const B=16;for(let z=0,Y=U.length;z<Y;z++){const A=Array.isArray(U[z])?U[z]:[U[z]];for(let w=0,k=A.length;w<k;w++){const Q=A[w],et=Array.isArray(Q.value)?Q.value:[Q.value];for(let ut=0,lt=et.length;ut<lt;ut++){const N=et[ut],I=T(N),J=D%B,St=J%I.boundary,mt=J+St;D+=St,mt!==0&&B-mt<I.storage&&(D+=B-mt),Q.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=D,D+=I.storage}}}const F=D%B;return F>0&&(D+=B-F),P.__size=D,P.__cache={},this}function T(P){const U={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(U.boundary=4,U.storage=4):P.isVector2?(U.boundary=8,U.storage=8):P.isVector3||P.isColor?(U.boundary=16,U.storage=12):P.isVector4?(U.boundary=16,U.storage=16):P.isMatrix3?(U.boundary=48,U.storage=48):P.isMatrix4?(U.boundary=64,U.storage=64):P.isTexture?se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):se("WebGLRenderer: Unsupported uniform value type.",P),U}function M(P){const U=P.target;U.removeEventListener("dispose",M);const D=h.indexOf(U.__bindingPointIndex);h.splice(D,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function v(){for(const P in l)r.deleteBuffer(l[P]);h=[],l={},c={}}return{bind:m,update:p,dispose:v}}const J2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hi=null;function $2(){return Hi===null&&(Hi=new D1(J2,16,16,jr,ba),Hi.name="DFG_LUT",Hi.minFilter=In,Hi.magFilter=In,Hi.wrapS=ya,Hi.wrapT=ya,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}class t3{constructor(t={}){const{canvas:i=t1(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:y=!1,outputBufferType:S=bi}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=h;const T=S,M=new Set([yp,xp,vp]),v=new Set([bi,Yi,cl,ul,gp,_p]),P=new Uint32Array(4),U=new Int32Array(4);let D=null,B=null;const F=[],z=[];let Y=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let w=!1;this._outputColorSpace=Si;let k=0,Q=0,et=null,ut=-1,lt=null;const N=new ln,I=new ln;let J=null;const St=new Re(0);let mt=0,L=i.width,nt=i.height,gt=1,Et=null,Ft=null;const it=new ln(0,0,L,nt),ht=new ln(0,0,L,nt);let wt=!1;const kt=new ex;let Ht=!1,pe=!1;const Ke=new en,_e=new V,me=new ln,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function le(){return et===null?gt:1}let H=s;function Ce(C,j){return i.getContext(C,j)}try{const C={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${pp}`),i.addEventListener("webglcontextlost",re,!1),i.addEventListener("webglcontextrestored",Fe,!1),i.addEventListener("webglcontextcreationerror",we,!1),H===null){const j="webgl2";if(H=Ce(j,C),H===null)throw Ce(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Ae("WebGLRenderer: "+C.message),C}let ye,ve,Yt,O,b,q,pt,yt,ft,Jt,Dt,jt,ae,bt,Tt,It,zt,Ut,fe,W,Lt,At,Bt,Mt;function xt(){ye=new $T(H),ye.init(),At=new X2(H,ye),ve=new XT(H,ye,t,At),Yt=new V2(H,ye),ve.reversedDepthBuffer&&y&&Yt.buffers.depth.setReversed(!0),O=new nA(H),b=new R2,q=new k2(H,ye,Yt,b,ve,At,O),pt=new qT(A),yt=new JT(A),ft=new rb(H),Bt=new VT(H,ft),Jt=new tA(H,ft,O,Bt),Dt=new aA(H,Jt,ft,O),fe=new iA(H,ve,q),It=new WT(b),jt=new A2(A,pt,yt,ye,ve,Bt,It),ae=new K2(A,b),bt=new w2,Tt=new P2(ye),Ut=new GT(A,pt,yt,Yt,Dt,E,m),zt=new H2(A,Dt,ve),Mt=new Q2(H,O,ve,Yt),W=new kT(H,ye,O),Lt=new eA(H,ye,O),O.programs=jt.programs,A.capabilities=ve,A.extensions=ye,A.properties=b,A.renderLists=bt,A.shadowMap=zt,A.state=Yt,A.info=O}xt(),T!==bi&&(Y=new rA(T,i.width,i.height,l,c));const Ct=new j2(A,H);this.xr=Ct,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=ye.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ye.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(C){C!==void 0&&(gt=C,this.setSize(L,nt,!1))},this.getSize=function(C){return C.set(L,nt)},this.setSize=function(C,j,rt=!0){if(Ct.isPresenting){se("WebGLRenderer: Can't change size while VR device is presenting.");return}L=C,nt=j,i.width=Math.floor(C*gt),i.height=Math.floor(j*gt),rt===!0&&(i.style.width=C+"px",i.style.height=j+"px"),Y!==null&&Y.setSize(i.width,i.height),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(L*gt,nt*gt).floor()},this.setDrawingBufferSize=function(C,j,rt){L=C,nt=j,gt=rt,i.width=Math.floor(C*rt),i.height=Math.floor(j*rt),this.setViewport(0,0,C,j)},this.setEffects=function(C){if(T===bi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let j=0;j<C.length;j++)if(C[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Y.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(N)},this.getViewport=function(C){return C.copy(it)},this.setViewport=function(C,j,rt,at){C.isVector4?it.set(C.x,C.y,C.z,C.w):it.set(C,j,rt,at),Yt.viewport(N.copy(it).multiplyScalar(gt).round())},this.getScissor=function(C){return C.copy(ht)},this.setScissor=function(C,j,rt,at){C.isVector4?ht.set(C.x,C.y,C.z,C.w):ht.set(C,j,rt,at),Yt.scissor(I.copy(ht).multiplyScalar(gt).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(C){Yt.setScissorTest(wt=C)},this.setOpaqueSort=function(C){Et=C},this.setTransparentSort=function(C){Ft=C},this.getClearColor=function(C){return C.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(C=!0,j=!0,rt=!0){let at=0;if(C){let K=!1;if(et!==null){const Nt=et.texture.format;K=M.has(Nt)}if(K){const Nt=et.texture.type,Gt=v.has(Nt),Ot=Ut.getClearColor(),Wt=Ut.getClearAlpha(),Zt=Ot.r,ee=Ot.g,Kt=Ot.b;Gt?(P[0]=Zt,P[1]=ee,P[2]=Kt,P[3]=Wt,H.clearBufferuiv(H.COLOR,0,P)):(U[0]=Zt,U[1]=ee,U[2]=Kt,U[3]=Wt,H.clearBufferiv(H.COLOR,0,U))}else at|=H.COLOR_BUFFER_BIT}j&&(at|=H.DEPTH_BUFFER_BIT),rt&&(at|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",re,!1),i.removeEventListener("webglcontextrestored",Fe,!1),i.removeEventListener("webglcontextcreationerror",we,!1),Ut.dispose(),bt.dispose(),Tt.dispose(),b.dispose(),pt.dispose(),yt.dispose(),Dt.dispose(),Bt.dispose(),Mt.dispose(),jt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",ks),Ct.removeEventListener("sessionend",eo),Pi.stop()};function re(C){C.preventDefault(),uu("WebGLRenderer: Context Lost."),w=!0}function Fe(){uu("WebGLRenderer: Context Restored."),w=!1;const C=O.autoReset,j=zt.enabled,rt=zt.autoUpdate,at=zt.needsUpdate,K=zt.type;xt(),O.autoReset=C,zt.enabled=j,zt.autoUpdate=rt,zt.needsUpdate=at,zt.type=K}function we(C){Ae("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Pn(C){const j=C.target;j.removeEventListener("dispose",Pn),Ei(j)}function Ei(C){pl(C),b.remove(C)}function pl(C){const j=b.get(C).programs;j!==void 0&&(j.forEach(function(rt){jt.releaseProgram(rt)}),C.isShaderMaterial&&jt.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,rt,at,K,Nt){j===null&&(j=Rt);const Gt=K.isMesh&&K.matrixWorld.determinant()<0,Ot=cs(C,j,rt,at,K);Yt.setMaterial(at,Gt);let Wt=rt.index,Zt=1;if(at.wireframe===!0){if(Wt=Jt.getWireframeAttribute(rt),Wt===void 0)return;Zt=2}const ee=rt.drawRange,Kt=rt.attributes.position;let ne=ee.start*Zt,Le=(ee.start+ee.count)*Zt;Nt!==null&&(ne=Math.max(ne,Nt.start*Zt),Le=Math.min(Le,(Nt.start+Nt.count)*Zt)),Wt!==null?(ne=Math.max(ne,0),Le=Math.min(Le,Wt.count)):Kt!=null&&(ne=Math.max(ne,0),Le=Math.min(Le,Kt.count));const $e=Le-ne;if($e<0||$e===1/0)return;Bt.setup(K,at,Ot,rt,Wt);let Ze,ze=W;if(Wt!==null&&(Ze=ft.get(Wt),ze=Lt,ze.setIndex(Ze)),K.isMesh)at.wireframe===!0?(Yt.setLineWidth(at.wireframeLinewidth*le()),ze.setMode(H.LINES)):ze.setMode(H.TRIANGLES);else if(K.isLine){let $t=at.linewidth;$t===void 0&&($t=1),Yt.setLineWidth($t*le()),K.isLineSegments?ze.setMode(H.LINES):K.isLineLoop?ze.setMode(H.LINE_LOOP):ze.setMode(H.LINE_STRIP)}else K.isPoints?ze.setMode(H.POINTS):K.isSprite&&ze.setMode(H.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)fl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ze.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))ze.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const $t=K._multiDrawStarts,Oe=K._multiDrawCounts,oe=K._multiDrawCount,En=Wt?ft.get(Wt).bytesPerElement:1,Zi=b.get(at).currentProgram.getUniforms();for(let Tn=0;Tn<oe;Tn++)Zi.setValue(H,"_gl_DrawID",Tn),ze.render($t[Tn]/En,Oe[Tn])}else if(K.isInstancedMesh)ze.renderInstances(ne,$e,K.count);else if(rt.isInstancedBufferGeometry){const $t=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Oe=Math.min(rt.instanceCount,$t);ze.renderInstances(ne,$e,Oe)}else ze.render(ne,$e)};function $r(C,j,rt){C.transparent===!0&&C.side===xa&&C.forceSinglePass===!1?(C.side=Jn,C.needsUpdate=!0,Ws(C,j,rt),C.side=ls,C.needsUpdate=!0,Ws(C,j,rt),C.side=xa):Ws(C,j,rt)}this.compile=function(C,j,rt=null){rt===null&&(rt=C),B=Tt.get(rt),B.init(j),z.push(B),rt.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(B.pushLight(K),K.castShadow&&B.pushShadow(K))}),C!==rt&&C.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(B.pushLight(K),K.castShadow&&B.pushShadow(K))}),B.setupLights();const at=new Set;return C.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Nt=K.material;if(Nt)if(Array.isArray(Nt))for(let Gt=0;Gt<Nt.length;Gt++){const Ot=Nt[Gt];$r(Ot,rt,K),at.add(Ot)}else $r(Nt,rt,K),at.add(Nt)}),B=z.pop(),at},this.compileAsync=function(C,j,rt=null){const at=this.compile(C,j,rt);return new Promise(K=>{function Nt(){if(at.forEach(function(Gt){b.get(Gt).currentProgram.isReady()&&at.delete(Gt)}),at.size===0){K(C);return}setTimeout(Nt,10)}ye.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let Vs=null;function to(C){Vs&&Vs(C)}function ks(){Pi.stop()}function eo(){Pi.start()}const Pi=new cx;Pi.setAnimationLoop(to),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(C){Vs=C,Ct.setAnimationLoop(C),C===null?Pi.stop():Pi.start()},Ct.addEventListener("sessionstart",ks),Ct.addEventListener("sessionend",eo),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){Ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const rt=Ct.enabled===!0&&Ct.isPresenting===!0,at=Y!==null&&(et===null||rt)&&Y.begin(A,et);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Y===null||Y.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(j),j=Ct.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,j,et),B=Tt.get(C,z.length),B.init(j),z.push(B),Ke.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),kt.setFromProjectionMatrix(Ke,Xi,j.reversedDepth),pe=this.localClippingEnabled,Ht=It.init(this.clippingPlanes,pe),D=bt.get(C,F.length),D.init(),F.push(D),Ct.enabled===!0&&Ct.isPresenting===!0){const Gt=A.xr.getDepthSensingMesh();Gt!==null&&ui(Gt,j,-1/0,A.sortObjects)}ui(C,j,0,A.sortObjects),D.finish(),A.sortObjects===!0&&D.sort(Et,Ft),Xt=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,Xt&&Ut.addToRenderList(D,C),this.info.render.frame++,Ht===!0&&It.beginShadows();const K=B.state.shadowsArray;if(zt.render(K,C,j),Ht===!0&&It.endShadows(),this.info.autoReset===!0&&this.info.reset(),(at&&Y.hasRenderPass())===!1){const Gt=D.opaque,Ot=D.transmissive;if(B.setupLights(),j.isArrayCamera){const Wt=j.cameras;if(Ot.length>0)for(let Zt=0,ee=Wt.length;Zt<ee;Zt++){const Kt=Wt[Zt];bn(Gt,Ot,C,Kt)}Xt&&Ut.render(C);for(let Zt=0,ee=Wt.length;Zt<ee;Zt++){const Kt=Wt[Zt];un(D,C,Kt,Kt.viewport)}}else Ot.length>0&&bn(Gt,Ot,C,j),Xt&&Ut.render(C),un(D,C,j)}et!==null&&Q===0&&(q.updateMultisampleRenderTarget(et),q.updateRenderTargetMipmap(et)),at&&Y.end(A),C.isScene===!0&&C.onAfterRender(A,C,j),Bt.resetDefaultState(),ut=-1,lt=null,z.pop(),z.length>0?(B=z[z.length-1],Ht===!0&&It.setGlobalState(A.clippingPlanes,B.state.camera)):B=null,F.pop(),F.length>0?D=F[F.length-1]:D=null};function ui(C,j,rt,at){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)rt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)B.pushLight(C),C.castShadow&&B.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||kt.intersectsSprite(C)){at&&me.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ke);const Gt=Dt.update(C),Ot=C.material;Ot.visible&&D.push(C,Gt,Ot,rt,me.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||kt.intersectsObject(C))){const Gt=Dt.update(C),Ot=C.material;if(at&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),me.copy(C.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),me.copy(Gt.boundingSphere.center)),me.applyMatrix4(C.matrixWorld).applyMatrix4(Ke)),Array.isArray(Ot)){const Wt=Gt.groups;for(let Zt=0,ee=Wt.length;Zt<ee;Zt++){const Kt=Wt[Zt],ne=Ot[Kt.materialIndex];ne&&ne.visible&&D.push(C,Gt,ne,rt,me.z,Kt)}}else Ot.visible&&D.push(C,Gt,Ot,rt,me.z,null)}}const Nt=C.children;for(let Gt=0,Ot=Nt.length;Gt<Ot;Gt++)ui(Nt[Gt],j,rt,at)}function un(C,j,rt,at){const{opaque:K,transmissive:Nt,transparent:Gt}=C;B.setupLightsView(rt),Ht===!0&&It.setGlobalState(A.clippingPlanes,rt),at&&Yt.viewport(N.copy(at)),K.length>0&&Ti(K,j,rt),Nt.length>0&&Ti(Nt,j,rt),Gt.length>0&&Ti(Gt,j,rt),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function bn(C,j,rt,at){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[at.id]===void 0){const ne=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[at.id]=new qi(1,1,{generateMipmaps:!0,type:ne?ba:bi,minFilter:Ps,samples:ve.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace})}const Nt=B.state.transmissionRenderTarget[at.id],Gt=at.viewport||N;Nt.setSize(Gt.z*A.transmissionResolutionScale,Gt.w*A.transmissionResolutionScale);const Ot=A.getRenderTarget(),Wt=A.getActiveCubeFace(),Zt=A.getActiveMipmapLevel();A.setRenderTarget(Nt),A.getClearColor(St),mt=A.getClearAlpha(),mt<1&&A.setClearColor(16777215,.5),A.clear(),Xt&&Ut.render(rt);const ee=A.toneMapping;A.toneMapping=Wi;const Kt=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),B.setupLightsView(at),Ht===!0&&It.setGlobalState(A.clippingPlanes,at),Ti(C,rt,at),q.updateMultisampleRenderTarget(Nt),q.updateRenderTargetMipmap(Nt),ye.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let Le=0,$e=j.length;Le<$e;Le++){const Ze=j[Le],{object:ze,geometry:$t,material:Oe,group:oe}=Ze;if(Oe.side===xa&&ze.layers.test(at.layers)){const En=Oe.side;Oe.side=Jn,Oe.needsUpdate=!0,Xs(ze,rt,at,$t,Oe,oe),Oe.side=En,Oe.needsUpdate=!0,ne=!0}}ne===!0&&(q.updateMultisampleRenderTarget(Nt),q.updateRenderTargetMipmap(Nt))}A.setRenderTarget(Ot,Wt,Zt),A.setClearColor(St,mt),Kt!==void 0&&(at.viewport=Kt),A.toneMapping=ee}function Ti(C,j,rt){const at=j.isScene===!0?j.overrideMaterial:null;for(let K=0,Nt=C.length;K<Nt;K++){const Gt=C[K],{object:Ot,geometry:Wt,group:Zt}=Gt;let ee=Gt.material;ee.allowOverride===!0&&at!==null&&(ee=at),Ot.layers.test(rt.layers)&&Xs(Ot,j,rt,Wt,ee,Zt)}}function Xs(C,j,rt,at,K,Nt){C.onBeforeRender(A,j,rt,at,K,Nt),C.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(A,j,rt,at,C,Nt),K.transparent===!0&&K.side===xa&&K.forceSinglePass===!1?(K.side=Jn,K.needsUpdate=!0,A.renderBufferDirect(rt,j,at,K,C,Nt),K.side=ls,K.needsUpdate=!0,A.renderBufferDirect(rt,j,at,K,C,Nt),K.side=xa):A.renderBufferDirect(rt,j,at,K,C,Nt),C.onAfterRender(A,j,rt,at,K,Nt)}function Ws(C,j,rt){j.isScene!==!0&&(j=Rt);const at=b.get(C),K=B.state.lights,Nt=B.state.shadowsArray,Gt=K.state.version,Ot=jt.getParameters(C,K.state,Nt,j,rt),Wt=jt.getProgramCacheKey(Ot);let Zt=at.programs;at.environment=C.isMeshStandardMaterial?j.environment:null,at.fog=j.fog,at.envMap=(C.isMeshStandardMaterial?yt:pt).get(C.envMap||at.environment),at.envMapRotation=at.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,Zt===void 0&&(C.addEventListener("dispose",Pn),Zt=new Map,at.programs=Zt);let ee=Zt.get(Wt);if(ee!==void 0){if(at.currentProgram===ee&&at.lightsStateVersion===Gt)return no(C,Ot),ee}else Ot.uniforms=jt.getUniforms(C),C.onBeforeCompile(Ot,A),ee=jt.acquireProgram(Ot,Wt),Zt.set(Wt,ee),at.uniforms=Ot.uniforms;const Kt=at.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Kt.clippingPlanes=It.uniform),no(C,Ot),at.needsLights=Ra(C),at.lightsStateVersion=Gt,at.needsLights&&(Kt.ambientLightColor.value=K.state.ambient,Kt.lightProbe.value=K.state.probe,Kt.directionalLights.value=K.state.directional,Kt.directionalLightShadows.value=K.state.directionalShadow,Kt.spotLights.value=K.state.spot,Kt.spotLightShadows.value=K.state.spotShadow,Kt.rectAreaLights.value=K.state.rectArea,Kt.ltc_1.value=K.state.rectAreaLTC1,Kt.ltc_2.value=K.state.rectAreaLTC2,Kt.pointLights.value=K.state.point,Kt.pointLightShadows.value=K.state.pointShadow,Kt.hemisphereLights.value=K.state.hemi,Kt.directionalShadowMap.value=K.state.directionalShadowMap,Kt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Kt.spotShadowMap.value=K.state.spotShadowMap,Kt.spotLightMatrix.value=K.state.spotLightMatrix,Kt.spotLightMap.value=K.state.spotLightMap,Kt.pointShadowMap.value=K.state.pointShadowMap,Kt.pointShadowMatrix.value=K.state.pointShadowMatrix),at.currentProgram=ee,at.uniformsList=null,ee}function ml(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=ru.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function no(C,j){const rt=b.get(C);rt.outputColorSpace=j.outputColorSpace,rt.batching=j.batching,rt.batchingColor=j.batchingColor,rt.instancing=j.instancing,rt.instancingColor=j.instancingColor,rt.instancingMorph=j.instancingMorph,rt.skinning=j.skinning,rt.morphTargets=j.morphTargets,rt.morphNormals=j.morphNormals,rt.morphColors=j.morphColors,rt.morphTargetsCount=j.morphTargetsCount,rt.numClippingPlanes=j.numClippingPlanes,rt.numIntersection=j.numClipIntersection,rt.vertexAlphas=j.vertexAlphas,rt.vertexTangents=j.vertexTangents,rt.toneMapping=j.toneMapping}function cs(C,j,rt,at,K){j.isScene!==!0&&(j=Rt),q.resetTextureUnits();const Nt=j.fog,Gt=at.isMeshStandardMaterial?j.environment:null,Ot=et===null?A.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Zr,Wt=(at.isMeshStandardMaterial?yt:pt).get(at.envMap||Gt),Zt=at.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ee=!!rt.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Kt=!!rt.morphAttributes.position,ne=!!rt.morphAttributes.normal,Le=!!rt.morphAttributes.color;let $e=Wi;at.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&($e=A.toneMapping);const Ze=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,ze=Ze!==void 0?Ze.length:0,$t=b.get(at),Oe=B.state.lights;if(Ht===!0&&(pe===!0||C!==lt)){const Rn=C===lt&&at.id===ut;It.setState(at,C,Rn)}let oe=!1;at.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==Oe.state.version||$t.outputColorSpace!==Ot||K.isBatchedMesh&&$t.batching===!1||!K.isBatchedMesh&&$t.batching===!0||K.isBatchedMesh&&$t.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&$t.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&$t.instancing===!1||!K.isInstancedMesh&&$t.instancing===!0||K.isSkinnedMesh&&$t.skinning===!1||!K.isSkinnedMesh&&$t.skinning===!0||K.isInstancedMesh&&$t.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&$t.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&$t.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&$t.instancingMorph===!1&&K.morphTexture!==null||$t.envMap!==Wt||at.fog===!0&&$t.fog!==Nt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==It.numPlanes||$t.numIntersection!==It.numIntersection)||$t.vertexAlphas!==Zt||$t.vertexTangents!==ee||$t.morphTargets!==Kt||$t.morphNormals!==ne||$t.morphColors!==Le||$t.toneMapping!==$e||$t.morphTargetsCount!==ze)&&(oe=!0):(oe=!0,$t.__version=at.version);let En=$t.currentProgram;oe===!0&&(En=Ws(at,j,K));let Zi=!1,Tn=!1,fi=!1;const Ie=En.getUniforms(),An=$t.uniforms;if(Yt.useProgram(En.program)&&(Zi=!0,Tn=!0,fi=!0),at.id!==ut&&(ut=at.id,Tn=!0),Zi||lt!==C){Yt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ie.setValue(H,"projectionMatrix",C.projectionMatrix),Ie.setValue(H,"viewMatrix",C.matrixWorldInverse);const Cn=Ie.map.cameraPosition;Cn!==void 0&&Cn.setValue(H,_e.setFromMatrixPosition(C.matrixWorld)),ve.logarithmicDepthBuffer&&Ie.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Ie.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),lt!==C&&(lt=C,Tn=!0,fi=!0)}if($t.needsLights&&(Oe.state.directionalShadowMap.length>0&&Ie.setValue(H,"directionalShadowMap",Oe.state.directionalShadowMap,q),Oe.state.spotShadowMap.length>0&&Ie.setValue(H,"spotShadowMap",Oe.state.spotShadowMap,q),Oe.state.pointShadowMap.length>0&&Ie.setValue(H,"pointShadowMap",Oe.state.pointShadowMap,q)),K.isSkinnedMesh){Ie.setOptional(H,K,"bindMatrix"),Ie.setOptional(H,K,"bindMatrixInverse");const Rn=K.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),Ie.setValue(H,"boneTexture",Rn.boneTexture,q))}K.isBatchedMesh&&(Ie.setOptional(H,K,"batchingTexture"),Ie.setValue(H,"batchingTexture",K._matricesTexture,q),Ie.setOptional(H,K,"batchingIdTexture"),Ie.setValue(H,"batchingIdTexture",K._indirectTexture,q),Ie.setOptional(H,K,"batchingColorTexture"),K._colorsTexture!==null&&Ie.setValue(H,"batchingColorTexture",K._colorsTexture,q));const gn=rt.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&fe.update(K,rt,En),(Tn||$t.receiveShadow!==K.receiveShadow)&&($t.receiveShadow=K.receiveShadow,Ie.setValue(H,"receiveShadow",K.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(An.envMap.value=Wt,An.flipEnvMap.value=Wt.isCubeTexture&&Wt.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&j.environment!==null&&(An.envMapIntensity.value=j.environmentIntensity),An.dfgLUT!==void 0&&(An.dfgLUT.value=$2()),Tn&&(Ie.setValue(H,"toneMappingExposure",A.toneMappingExposure),$t.needsLights&&io(An,fi),Nt&&at.fog===!0&&ae.refreshFogUniforms(An,Nt),ae.refreshMaterialUniforms(An,at,gt,nt,B.state.transmissionRenderTarget[C.id]),ru.upload(H,ml($t),An,q)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(ru.upload(H,ml($t),An,q),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Ie.setValue(H,"center",K.center),Ie.setValue(H,"modelViewMatrix",K.modelViewMatrix),Ie.setValue(H,"normalMatrix",K.normalMatrix),Ie.setValue(H,"modelMatrix",K.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const Rn=at.uniformsGroups;for(let Cn=0,qs=Rn.length;Cn<qs;Cn++){const Ai=Rn[Cn];Mt.update(Ai,En),Mt.bind(Ai,En)}}return En}function io(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function Ra(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(C,j,rt){const at=b.get(C);at.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),b.get(C.texture).__webglTexture=j,b.get(C.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:rt,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,j){const rt=b.get(C);rt.__webglFramebuffer=j,rt.__useDefaultFramebuffer=j===void 0};const Ca=H.createFramebuffer();this.setRenderTarget=function(C,j=0,rt=0){et=C,k=j,Q=rt;let at=null,K=!1,Nt=!1;if(C){const Ot=b.get(C);if(Ot.__useDefaultFramebuffer!==void 0){Yt.bindFramebuffer(H.FRAMEBUFFER,Ot.__webglFramebuffer),N.copy(C.viewport),I.copy(C.scissor),J=C.scissorTest,Yt.viewport(N),Yt.scissor(I),Yt.setScissorTest(J),ut=-1;return}else if(Ot.__webglFramebuffer===void 0)q.setupRenderTarget(C);else if(Ot.__hasExternalTextures)q.rebindTextures(C,b.get(C.texture).__webglTexture,b.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ee=C.depthTexture;if(Ot.__boundDepthTexture!==ee){if(ee!==null&&b.has(ee)&&(C.width!==ee.image.width||C.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(C)}}const Wt=C.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Nt=!0);const Zt=b.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Zt[j])?at=Zt[j][rt]:at=Zt[j],K=!0):C.samples>0&&q.useMultisampledRTT(C)===!1?at=b.get(C).__webglMultisampledFramebuffer:Array.isArray(Zt)?at=Zt[rt]:at=Zt,N.copy(C.viewport),I.copy(C.scissor),J=C.scissorTest}else N.copy(it).multiplyScalar(gt).floor(),I.copy(ht).multiplyScalar(gt).floor(),J=wt;if(rt!==0&&(at=Ca),Yt.bindFramebuffer(H.FRAMEBUFFER,at)&&Yt.drawBuffers(C,at),Yt.viewport(N),Yt.scissor(I),Yt.setScissorTest(J),K){const Ot=b.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ot.__webglTexture,rt)}else if(Nt){const Ot=j;for(let Wt=0;Wt<C.textures.length;Wt++){const Zt=b.get(C.textures[Wt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Wt,Zt.__webglTexture,rt,Ot)}}else if(C!==null&&rt!==0){const Ot=b.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ot.__webglTexture,rt)}ut=-1},this.readRenderTargetPixels=function(C,j,rt,at,K,Nt,Gt,Ot=0){if(!(C&&C.isWebGLRenderTarget)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Gt!==void 0&&(Wt=Wt[Gt]),Wt){Yt.bindFramebuffer(H.FRAMEBUFFER,Wt);try{const Zt=C.textures[Ot],ee=Zt.format,Kt=Zt.type;if(!ve.textureFormatReadable(ee)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ve.textureTypeReadable(Kt)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-at&&rt>=0&&rt<=C.height-K&&(C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ot),H.readPixels(j,rt,at,K,At.convert(ee),At.convert(Kt),Nt))}finally{const Zt=et!==null?b.get(et).__webglFramebuffer:null;Yt.bindFramebuffer(H.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(C,j,rt,at,K,Nt,Gt,Ot=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Gt!==void 0&&(Wt=Wt[Gt]),Wt)if(j>=0&&j<=C.width-at&&rt>=0&&rt<=C.height-K){Yt.bindFramebuffer(H.FRAMEBUFFER,Wt);const Zt=C.textures[Ot],ee=Zt.format,Kt=Zt.type;if(!ve.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ve.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ne=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ne),H.bufferData(H.PIXEL_PACK_BUFFER,Nt.byteLength,H.STREAM_READ),C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ot),H.readPixels(j,rt,at,K,At.convert(ee),At.convert(Kt),0);const Le=et!==null?b.get(et).__webglFramebuffer:null;Yt.bindFramebuffer(H.FRAMEBUFFER,Le);const $e=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await e1(H,$e,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ne),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Nt),H.deleteBuffer(ne),H.deleteSync($e),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,j=null,rt=0){const at=Math.pow(2,-rt),K=Math.floor(C.image.width*at),Nt=Math.floor(C.image.height*at),Gt=j!==null?j.x:0,Ot=j!==null?j.y:0;q.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,rt,0,0,Gt,Ot,K,Nt),Yt.unbindTexture()};const us=H.createFramebuffer(),wa=H.createFramebuffer();this.copyTextureToTexture=function(C,j,rt=null,at=null,K=0,Nt=null){Nt===null&&(K!==0?(fl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Nt=K,K=0):Nt=0);let Gt,Ot,Wt,Zt,ee,Kt,ne,Le,$e;const Ze=C.isCompressedTexture?C.mipmaps[Nt]:C.image;if(rt!==null)Gt=rt.max.x-rt.min.x,Ot=rt.max.y-rt.min.y,Wt=rt.isBox3?rt.max.z-rt.min.z:1,Zt=rt.min.x,ee=rt.min.y,Kt=rt.isBox3?rt.min.z:0;else{const gn=Math.pow(2,-K);Gt=Math.floor(Ze.width*gn),Ot=Math.floor(Ze.height*gn),C.isDataArrayTexture?Wt=Ze.depth:C.isData3DTexture?Wt=Math.floor(Ze.depth*gn):Wt=1,Zt=0,ee=0,Kt=0}at!==null?(ne=at.x,Le=at.y,$e=at.z):(ne=0,Le=0,$e=0);const ze=At.convert(j.format),$t=At.convert(j.type);let Oe;j.isData3DTexture?(q.setTexture3D(j,0),Oe=H.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(q.setTexture2DArray(j,0),Oe=H.TEXTURE_2D_ARRAY):(q.setTexture2D(j,0),Oe=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment);const oe=H.getParameter(H.UNPACK_ROW_LENGTH),En=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Zi=H.getParameter(H.UNPACK_SKIP_PIXELS),Tn=H.getParameter(H.UNPACK_SKIP_ROWS),fi=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ze.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ze.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Zt),H.pixelStorei(H.UNPACK_SKIP_ROWS,ee),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Kt);const Ie=C.isDataArrayTexture||C.isData3DTexture,An=j.isDataArrayTexture||j.isData3DTexture;if(C.isDepthTexture){const gn=b.get(C),Rn=b.get(j),Cn=b.get(gn.__renderTarget),qs=b.get(Rn.__renderTarget);Yt.bindFramebuffer(H.READ_FRAMEBUFFER,Cn.__webglFramebuffer),Yt.bindFramebuffer(H.DRAW_FRAMEBUFFER,qs.__webglFramebuffer);for(let Ai=0;Ai<Wt;Ai++)Ie&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,b.get(C).__webglTexture,K,Kt+Ai),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,b.get(j).__webglTexture,Nt,$e+Ai)),H.blitFramebuffer(Zt,ee,Gt,Ot,ne,Le,Gt,Ot,H.DEPTH_BUFFER_BIT,H.NEAREST);Yt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(K!==0||C.isRenderTargetTexture||b.has(C)){const gn=b.get(C),Rn=b.get(j);Yt.bindFramebuffer(H.READ_FRAMEBUFFER,us),Yt.bindFramebuffer(H.DRAW_FRAMEBUFFER,wa);for(let Cn=0;Cn<Wt;Cn++)Ie?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,gn.__webglTexture,K,Kt+Cn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,gn.__webglTexture,K),An?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Rn.__webglTexture,Nt,$e+Cn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Rn.__webglTexture,Nt),K!==0?H.blitFramebuffer(Zt,ee,Gt,Ot,ne,Le,Gt,Ot,H.COLOR_BUFFER_BIT,H.NEAREST):An?H.copyTexSubImage3D(Oe,Nt,ne,Le,$e+Cn,Zt,ee,Gt,Ot):H.copyTexSubImage2D(Oe,Nt,ne,Le,Zt,ee,Gt,Ot);Yt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else An?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(Oe,Nt,ne,Le,$e,Gt,Ot,Wt,ze,$t,Ze.data):j.isCompressedArrayTexture?H.compressedTexSubImage3D(Oe,Nt,ne,Le,$e,Gt,Ot,Wt,ze,Ze.data):H.texSubImage3D(Oe,Nt,ne,Le,$e,Gt,Ot,Wt,ze,$t,Ze):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Nt,ne,Le,Gt,Ot,ze,$t,Ze.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Nt,ne,Le,Ze.width,Ze.height,ze,Ze.data):H.texSubImage2D(H.TEXTURE_2D,Nt,ne,Le,Gt,Ot,ze,$t,Ze);H.pixelStorei(H.UNPACK_ROW_LENGTH,oe),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,En),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Zi),H.pixelStorei(H.UNPACK_SKIP_ROWS,Tn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,fi),Nt===0&&j.generateMipmaps&&H.generateMipmap(Oe),Yt.unbindTexture()},this.initRenderTarget=function(C){b.get(C).__webglFramebuffer===void 0&&q.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?q.setTextureCube(C,0):C.isData3DTexture?q.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?q.setTexture2DArray(C,0):q.setTexture2D(C,0),Yt.unbindTexture()},this.resetState=function(){k=0,Q=0,et=null,Yt.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),i.unpackColorSpace=De._getUnpackColorSpace()}}const Ev={type:"change"},Dp={type:"start"},px={type:"end"},tu=new vu,Tv=new va,e3=Math.cos(70*i1.DEG2RAD),vn=new V,Qn=2*Math.PI,Ye={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},md=1e-6;class n3 extends ab{constructor(t,i=null){super(t,i),this.state=Ye.NONE,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:kr.ROTATE,MIDDLE:kr.DOLLY,RIGHT:kr.PAN},this.touches={ONE:Vr.ROTATE,TWO:Vr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new Is,this._lastTargetPosition=new V,this._quat=new Is().setFromUnitVectors(t.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new $_,this._sphericalDelta=new $_,this._scale=1,this._panOffset=new V,this._rotateStart=new Vt,this._rotateEnd=new Vt,this._rotateDelta=new Vt,this._panStart=new Vt,this._panEnd=new Vt,this._panDelta=new Vt,this._dollyStart=new Vt,this._dollyEnd=new Vt,this._dollyDelta=new Vt,this._dollyDirection=new V,this._mouse=new Vt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=a3.bind(this),this._onPointerDown=i3.bind(this),this._onPointerUp=s3.bind(this),this._onContextMenu=h3.bind(this),this._onMouseWheel=l3.bind(this),this._onKeyDown=c3.bind(this),this._onTouchStart=u3.bind(this),this._onTouchMove=f3.bind(this),this._onMouseDown=r3.bind(this),this._onMouseMove=o3.bind(this),this._interceptControlDown=d3.bind(this),this._interceptControlUp=p3.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ev),this.update(),this.state=Ye.NONE}update(t=null){const i=this.object.position;vn.copy(i).sub(this.target),vn.applyQuaternion(this._quat),this._spherical.setFromVector3(vn),this.autoRotate&&this.state===Ye.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Qn:s>Math.PI&&(s-=Qn),l<-Math.PI?l+=Qn:l>Math.PI&&(l-=Qn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(vn.setFromSpherical(this._spherical),vn.applyQuaternion(this._quatInverse),i.copy(this.target).add(vn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=vn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new V(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new V(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=vn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(tu.origin.copy(this.object.position),tu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(tu.direction))<e3?this.object.lookAt(this.target):(Tv.setFromNormalAndCoplanarPoint(this.object.up,this.target),tu.intersectPlane(Tv,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>md||8*(1-this._lastQuaternion.dot(this.object.quaternion))>md||this._lastTargetPosition.distanceToSquared(this.target)>md?(this.dispatchEvent(Ev),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Qn/60*this.autoRotateSpeed*t:Qn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){vn.setFromMatrixColumn(i,0),vn.multiplyScalar(-t),this._panOffset.add(vn)}_panUp(t,i){this.screenSpacePanning===!0?vn.setFromMatrixColumn(i,1):(vn.setFromMatrixColumn(i,0),vn.crossVectors(this.object.up,vn)),vn.multiplyScalar(t),this._panOffset.add(vn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;vn.copy(l).sub(this.target);let c=vn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Qn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Qn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Qn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Qn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new Vt,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function i3(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function a3(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function s3(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(px),this.state=Ye.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function r3(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case kr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ye.DOLLY;break;case kr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ye.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ye.ROTATE}break;case kr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ye.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ye.PAN}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(Dp)}function o3(r){switch(this.state){case Ye.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ye.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function l3(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ye.NONE||(r.preventDefault(),this.dispatchEvent(Dp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(px))}function c3(r){this.enabled!==!1&&this._handleKeyDown(r)}function u3(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Vr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ye.TOUCH_ROTATE;break;case Vr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ye.TOUCH_PAN;break;default:this.state=Ye.NONE}break;case 2:switch(this.touches.TWO){case Vr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ye.TOUCH_DOLLY_PAN;break;case Vr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ye.TOUCH_DOLLY_ROTATE;break;default:this.state=Ye.NONE}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(Dp)}function f3(r){switch(this._trackPointer(r),this.state){case Ye.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ye.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ye.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ye.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ye.NONE}}function h3(r){this.enabled!==!1&&r.preventDefault()}function d3(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function p3(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const m3=JSON.parse(`[{"id":"01","name":"Diocesan Shrine of San Isidro Labrador","type":"Religion","shapeType":"cylinder","size":[0.2,0.2,0.4,6],"pos":{"x":0.5,"z":0},"distFromOrigin":0.5,"labelContent":"San Isidro","wireframes":false,"borders":"#ffffff","borderOpacity":0.8,"transperancy":true,"opacity":0.9,"label":true,"color":"#ffffff","image":"/Diocesan.jpg","description":"Founded in 1637. Houses one of the oldest dark wood images of San Isidro in the Philippines. Declared a local heritage site in 2017.","rating":4.6,"floodRisk":1},{"id":"02","name":"Lakeshore Education Institute (LSEI)","type":"Education","shapeType":"box","size":[0.6,0.6,0.75],"pos":{"x":0.8,"z":-3.7},"distFromOrigin":3.75,"labelContent":"LSEI","wireframes":false,"borders":"#00ffcc","borderOpacity":0.6,"transperancy":true,"opacity":1,"label":true,"color":"#00ffcc","image":"/Lakeshore.jpg","description":"Established in 1931 by Dr. Flora A. Ylagan. Served as a WWII shelter and has remained an educational cornerstone for 90+ years.","rating":"N/A","floodRisk":2},{"id":"03","name":"Nuestra Señora de la Paz y Buen Viaje Parish","type":"Religion","shapeType":"cylinder","size":[0.4,0.4,0.7,12],"pos":{"x":-10.9,"z":1.6},"distFromOrigin":10.9,"labelContent":"Dela Paz Church","wireframes":false,"borders":"#ffffff","borderOpacity":0.8,"transperancy":true,"opacity":0.9,"label":true,"color":"#ffffff","image":"/Nuestra.jpg","description":"A Barangay Historical Site (2016). Jose Rizal frequently visited this chapel in 1871 during his early studies.","rating":4.6,"floodRisk":3},{"id":"04","name":"Southwoods Mall","type":"Mall","shapeType":"box","size":[1.5,0.6,1.5],"pos":{"x":4.34,"z":-37.79},"distFromOrigin":37.4,"labelContent":"Southwoods","wireframes":false,"borders":"#ffaa00","borderOpacity":0.5,"transperancy":true,"opacity":0.8,"label":true,"color":"#ffaa00","image":"/Southwoods.jpg","description":"A 3-level lifestyle mall by Megaworld. A premier destination for shopping and dining in Southwoods City.","rating":4.5,"floodRisk":0},{"id":"05","name":"Sto. Niño de Cebu Parish","type":"Religion","shapeType":"cylinder","size":[0.5,0.5,0.9,8],"pos":{"x":6.2,"z":-34.9},"distFromOrigin":35.5,"labelContent":"Sto. Niño","wireframes":false,"borders":"#ffffff","borderOpacity":0.7,"transperancy":true,"opacity":0.9,"label":true,"color":"#ffffff","image":"/StoNino.jpg","description":"Built in 1984 by Augustinian Friars. Acts as a spiritual centrum alongside Colegio San Agustin-Biñan.","rating":4.7,"floodRisk":1},{"id":"06","name":"Biñan Football Stadium","type":"Sports","shapeType":"box","size":[1.4,0.2,1],"pos":{"x":26.04,"z":6.5},"distFromOrigin":27.32,"labelContent":"Stadium","wireframes":false,"borders":"#ffaa00","borderOpacity":0.6,"transperancy":true,"opacity":0.9,"label":true,"color":"#ffaa00","image":"/Stadium.jpg","description":"Built in 2015. Home stadium for the Philippine women’s national team and a venue for the 2019 SEA Games.","rating":4.6,"floodRisk":1},{"id":"07","name":"Alonte Sports Arena","type":"Sports","shapeType":"cylinder","size":[0.9,0.9,0.5,32],"pos":{"x":27.58,"z":5.25},"distFromOrigin":28.26,"labelContent":"Alonte Arena","wireframes":false,"borders":"#ffaa00","borderOpacity":0.8,"transperancy":true,"opacity":0.9,"label":true,"color":"#ffaa00","image":"/Alonte.jpg","description":"Indoor arena with 6,500 capacity. Home of Biñan Tatak Gel and a key evacuation center for the city.","rating":4.5,"floodRisk":1},{"id":"08","name":"School of Dr. Jose P. Rizal Site & Museum","type":"Museum","shapeType":"box","size":[0.3,0.3,0.3],"pos":{"x":2.7,"z":-0.3},"distFromOrigin":3.7,"labelContent":"Rizal's School","wireframes":false,"borders":"#00ffcc","borderOpacity":0.7,"transperancy":true,"opacity":1,"label":true,"color":"#00ffcc","image":"/RizalSchool.jpg","description":"Where Jose Rizal attended his first formal school. Features a restored bahay kubo and historical artifacts.","rating":4.9,"floodRisk":2},{"id":"09","name":"Dela Paz Elementary School Main","type":"Education","shapeType":"box","size":[0.6,0.4,0.6],"pos":{"x":-10.1,"z":1.04},"distFromOrigin":10.19,"labelContent":"Dela Paz ES","wireframes":false,"borders":"#00ffcc","borderOpacity":0.6,"transperancy":true,"opacity":1,"label":true,"color":"#00ffcc","image":"/DelaPazES.jpg","description":"A complete elementary school in Brgy. Dela Paz. Vital facility within the city-proper area.","rating":4.3,"floodRisk":3},{"id":"10","name":"Alberto Mansion","type":"Heritage","shapeType":"box","size":[0.4,0.4,0.4],"pos":{"x":0,"z":0.4},"distFromOrigin":0.4,"labelContent":"Alberto Mansion","wireframes":false,"borders":"#ffffff","borderOpacity":0.9,"transperancy":true,"opacity":1,"label":true,"color":"#ffffff","image":"/Alberto.jpg","description":"19th-century Bahay na Bato. Childhood home of Teodora Alonso, mother of Jose Rizal. A critical Rizal heritage site.","rating":"N/A","floodRisk":1},{"id":"11","name":"Sentrong Pangkultura ng Biñan","type":"Culture","shapeType":"box","size":[0.3,0.4,0.3],"pos":{"x":0.55,"z":0.36},"distFromOrigin":0.68,"labelContent":"Sentrong Pangkultura","wireframes":false,"borders":"#00ffcc","borderOpacity":0.8,"transperancy":true,"opacity":1,"label":true,"color":"#00ffcc","image":"/Sentrong.jpg","description":"Former Casa Hacienda and Municipal Hall. Repurposed in 2010 to house the City Museum and Studies Center.","rating":4.8,"floodRisk":1},{"id":"12","name":"Capilla de San Jose","type":"Religion","shapeType":"box","size":[0.3,0.3,0.3],"pos":{"x":-1.53,"z":-0.69},"distFromOrigin":1.71,"labelContent":"Capilla","wireframes":false,"borders":"#ffffff","borderOpacity":0.6,"transperancy":true,"opacity":0.9,"label":true,"color":"#ffffff","image":"/Capilla.jpg","description":"A historic local chapel and landmark within the Poblacion area serving the community.","rating":"N/A","floodRisk":2},{"id":"13","name":"Isidro Gonsales House","type":"Heritage","shapeType":"box","size":[0.4,0.3,0.4],"pos":{"x":-1.4,"z":-0.9},"distFromOrigin":1.7,"labelContent":"Gonsales House","wireframes":false,"borders":"#ffffff","borderOpacity":0.7,"transperancy":true,"opacity":0.9,"label":true,"color":"#ffffff","image":"/Gonsales.jpg","description":"A notable ancestral home that represents Biñan's historic architecture and local elite history.","rating":"N/A","floodRisk":2},{"id":"14","name":"Heroes Memorial Monument","type":"Monument","shapeType":"cylinder","size":[0.1,0.1,0.6,32],"pos":{"x":1.29,"z":0.93},"distFromOrigin":5.39,"labelContent":"Heroes Monument","wireframes":false,"borders":"#ffffff","borderOpacity":1,"transperancy":true,"opacity":1,"label":true,"color":"#ffffff","image":"/Heroes.jpg","description":"Inaugurated in 1960. Honors the bravery of Biñan’s ancestors and symbolizes local respect for the past.","rating":"N/A","floodRisk":1},{"id":"15","name":"New Biñan City Hall","type":"Government","shapeType":"box","size":[1.2,1.5,0.8],"pos":{"x":26.6,"z":7.5},"distFromOrigin":27.2,"labelContent":"City Hall","wireframes":false,"borders":"#00ffcc","borderOpacity":0.9,"transperancy":true,"opacity":1,"label":true,"color":"#00ffcc","image":"/CityHall.jpg","description":"Modern seat of government in Brgy. Zapote. Striking architecture symbolizing progressive governance.","rating":4.7,"floodRisk":1},{"id":"16","name":"Magpipinig monument","type":"Monument","shapeType":"cylinder","size":[0.2,0.2,0.7,32],"pos":{"x":0.69,"z":-11.3},"distFromOrigin":11.4,"labelContent":"Magpipinig","wireframes":false,"borders":"#ffffff","borderOpacity":0.8,"transperancy":true,"opacity":1,"label":true,"color":"#ffffff","image":"/Magpipinig.jpg","description":"Celebrates agricultural produce and solidarity. The book symbol represents the commitment to education.","rating":"N/A","floodRisk":2},{"id":"17","name":"Biñan Esplanade","type":"Recreation","shapeType":"box","size":[0.6,0.2,1.2],"pos":{"x":-20.2,"z":-1.4},"distFromOrigin":3.73,"labelContent":"Biñan Esplanade","wireframes":false,"borders":"#00ffcc","borderOpacity":0.5,"transperancy":true,"opacity":0.9,"label":true,"color":"#00ffcc","image":"/Esplanade.jpg","description":"A scenic recreational park and baywalk located along the shores of Laguna de Bay in Brgy. Dela Paz. It serves as a hub for community relaxation, jogging, and environmental appreciation.","rating":"4.5","floodRisk":4},{"id":"18","name":"Timbao Prinza Dam","type":"Heritage","shapeType":"box","size":[1.4,0.4,1.4],"pos":{"x":63.4,"z":-48.22},"distFromOrigin":79.67,"labelContent":"Timbao Prinza","wireframes":false,"borders":"#ffffff","borderOpacity":0.8,"transperancy":true,"opacity":0.9,"label":true,"color":"#ffffff","image":"/TimbaoPrinza.jpg","description":"Centuries-old water dam constructed by the Dominicans during Spanish times. Located at the border of Biñan, Santa Rosa, and Carmona, it serves as irrigation and a local recreation spot.","rating":"N/A","floodRisk":2}]`);function g3({type:r}){function t(i){switch(i){case"Religion":return ct.jsxs(ct.Fragment,{children:[ct.jsx(WS,{size:20})," Religion"]});case"Heritage":return ct.jsxs(ct.Fragment,{children:[ct.jsx(y_,{size:20})," Heritage"]});case"Monument":return ct.jsxs(ct.Fragment,{children:[ct.jsx(y_,{size:20})," Monument"]});case"Education":return ct.jsxs(ct.Fragment,{children:[ct.jsx(ZS,{size:20})," Education"]});case"Museum":return ct.jsxs(ct.Fragment,{children:[ct.jsx(BS,{size:20})," Museum"]});case"Government":return ct.jsxs(ct.Fragment,{children:[ct.jsx(GS,{size:20})," Government"]});case"Culture":return ct.jsxs(ct.Fragment,{children:[ct.jsx(tM,{size:20})," Culture"]});case"Sports":return ct.jsxs(ct.Fragment,{children:[ct.jsx(mM,{size:20})," Sports"]});case"Mall":return ct.jsxs(ct.Fragment,{children:[ct.jsx(aM,{size:20})," Mall"]});case"Dam":return ct.jsxs(ct.Fragment,{children:[ct.jsx(_M,{size:20})," Dam"]});case"Cemetery":return ct.jsxs(ct.Fragment,{children:[ct.jsx(YS,{size:20})," Cemetery"]});case"Recreation":return ct.jsxs(ct.Fragment,{children:[ct.jsx(fM,{size:20})," Recreation"]})}}return ct.jsx("div",{className:"flex items-center gap-2 text-[#9C9C9C]",children:t(r)})}function _3({rating:r}){return ct.jsx("div",{className:"flex items-center gap-0.5 text-[#FFB600]",children:[...Array(5)].map((t,i)=>{const s=i+1;return r>=s?ct.jsx(gd,{size:18,className:"fill-current"},i):r>=s-.5?ct.jsx(lM,{size:18,className:"fill-current"},i):ct.jsx(gd,{size:18,className:"opacity-30"},i)})})}function v3({setActiveTab:r}){const t=Be.useRef(null),[i,s]=Be.useState({x:0,z:0}),[l,c]=Be.useState("3D"),h=Be.useRef(null),d=Be.useRef(null),m=Be.useRef(null),p=Be.useRef(null),[g,_]=Be.useState(null),[y,S]=Be.useState("Normal"),E=Be.useRef(null),T=Be.useRef(y),[M,v]=Be.useState(!1),[P,U]=Be.useState(7.2),[D,B]=Be.useState(10),[F,z]=Be.useState(!1),Y=Be.useRef(P),A=Be.useRef(F),w=Be.useRef(D),k=[new V(-10,.05,-50),new V(-5,.05,-35),new V(2,.05,0),new V(8,.05,25),new V(15,.05,50)];Be.useEffect(()=>{if(!t.current)return;t.current.innerHTML="";const N=new R1;N.background=new Re(328965),N.fog=new Tp(328965,.02),p.current=N;const I=new Mi(60,window.innerWidth/window.innerHeight,.1,1e3);I.position.set(12,12,12),h.current=I;const J=new t3({antialias:!0,powerPreference:"high-performance"});J.setSize(window.innerWidth,window.innerHeight),J.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.current.appendChild(J.domElement);const St=new ib(150,150,65484,2236962);N.add(St);const mt=new n3(I,J.domElement);mt.enableDamping=!0,mt.dampingFactor=.05,mt.maxPolarAngle=Math.PI/2.1,d.current=mt;const L=new nb,nt=new Vt,gt=new va(new V(0,1,0),0),Et=new V,Ft=[];function it(Rt,Xt){const le=document.createElement("canvas"),H=le.getContext("2d");le.width=512,le.height=128,H.filter="blur(4px)",H.fillStyle="rgba(0, 0, 0, 0.7)",H.beginPath(),H.roundRect(32,24,448,80,40),H.fill(),H.filter="none",H.strokeStyle=Xt,H.lineWidth=6,H.stroke(),H.font="bold 36px monospace",H.fillStyle="#ffffff",H.textAlign="center",H.textBaseline="middle",H.fillText(Rt.toUpperCase(),256,64);const Ce=new O1(le);Ce.anisotropy=16;const ye=new $v({map:Ce,transparent:!0,depthTest:!0}),ve=new w1(ye);return ve.scale.set(1.2,.3,1),ve}const ht=new rx(k),wt=new wp(ht,64,.08,8,!1),kt=new fu({color:16711680,transparent:!0,opacity:.6,wireframe:!1}),Ht=new ci(wt,kt);Ht.name="faultVisual",N.add(Ht),m3.forEach(Rt=>{const Xt=new Bs;let le,H=0,Ce=0;switch(Rt.shapeType){case"box":le=new Hs(Rt.size[0],Rt.size[1],Rt.size[2]),H=Rt.size[1]/2,Ce=Rt.size[1];break;case"sphere":le=new Cp(Rt.size[0],Rt.size[1],Rt.size[2]),H=Rt.size[0],Ce=Rt.size[0]*2;break;case"cylinder":le=new xu(Rt.size[0],Rt.size[1],Rt.size[2],Rt.size[3]||32),H=Rt.size[2]/2,Ce=Rt.size[2];break;case"cone":le=new Ap(Rt.size[0],Rt.size[1],Rt.size[2]||32),H=Rt.size[1]/2,Ce=Rt.size[1];break;default:le=new Hs(1,1,1)}const ye=new fu({color:Rt.color,wireframe:Rt.wireframes,transparent:Rt.transperancy,opacity:Rt.opacity}),ve=new ci(le,ye);ve.userData=Rt,ve.position.set(0,H,0),Xt.add(ve),Ft.push(ve);const Yt=[new V(0,0,0),new V(Rt.pos.x,0,Rt.pos.z*-1)],O=new On().setFromPoints(Yt),b=new du({color:Rt.color,transparent:!0,opacity:.2});if(N.add(new nx(O,b)),Rt.label&&Rt.labelContent){const q=it(Rt.labelContent,Rt.color);q.position.set(0,Ce+.6,0),Xt.add(q)}if(Rt.borders){const q=new z1(le),pt=new du({color:Rt.borders,transparent:!0,opacity:Rt.borderOpacity}),yt=new ix(q,pt);yt.position.copy(ve.position),yt.scale.set(1.001,1.001,1.001),Xt.add(yt)}Xt.position.set(Rt.pos.x,0,Rt.pos.z*-1),Xt.userData.originalPos=Xt.position.clone(),N.add(Xt)});const pe=Rt=>{if(!t.current)return;const Xt=t.current.getBoundingClientRect();nt.x=(Rt.clientX-Xt.left)/Xt.width*2-1,nt.y=-((Rt.clientY-Xt.top)/Xt.height)*2+1,L.setFromCamera(nt,I);const le=L.intersectObjects(Ft);t.current.style.cursor=le.length>0?"pointer":"default",L.ray.intersectPlane(gt,Et)&&s({x:parseFloat(Et.x.toFixed(2)),z:parseFloat(Et.z.toFixed(2))})},Ke=()=>{if(T.current!=="Normal")return;const Rt=L.intersectObjects(Ft);Rt.length>0&&_(Rt[0].object.userData)};t.current.addEventListener("click",Ke),t.current.addEventListener("mousemove",pe);const _e=()=>{setTimeout(function(){const Rt=N.getObjectByName("faultVisual");if(Rt instanceof ci){const Xt=T.current==="Earthquake";if(Rt.visible=Xt,Xt){const le=Rt.material;le.opacity=.4+Math.sin(Date.now()*.002)*.2}}if(A.current&&T.current==="Earthquake"){const Xt=Math.max(0,(Y.current-4)*.015);N.children.forEach(le=>{le instanceof Bs&&(le.position.x+=(Math.random()-.5)*Xt,le.position.z+=(Math.random()-.5)*Xt,Y.current>7&&(le.rotation.z=(Math.random()-.5)*(Xt*.2)))})}mt.update(),J.render(N,I),m.current=requestAnimationFrame(_e)},1e3/144)};m.current=requestAnimationFrame(_e);const me=()=>{I.aspect=window.innerWidth/window.innerHeight,I.updateProjectionMatrix(),J.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",me),()=>{window.removeEventListener("resize",me),t.current&&(t.current.removeEventListener("mousemove",pe),t.current.removeEventListener("click",Ke)),m.current&&cancelAnimationFrame(m.current),J.dispose(),N.traverse(Rt=>{Rt instanceof ci&&(Rt.geometry.dispose(),Rt.material.dispose())})}},[]),Be.useEffect(()=>{E.current&&(E.current.visible=y==="Earthquake"),Y.current=P,A.current=F,w.current=D,T.current=y},[y,P,F,D]);const Q=()=>{z(!1),A.current=!1,p.current&&p.current.children.forEach(N=>{N instanceof Bs&&N.userData.originalPos&&(N.position.copy(N.userData.originalPos),N.rotation.set(0,0,0))})},et=()=>{!d.current||!h.current||(c("2D"),h.current.position.set(0,15,0),d.current.target.set(0,0,0),d.current.enableRotate=!1)},ut=()=>{!d.current||!h.current||(c("3D"),h.current.position.set(12,12,12),d.current.target.set(0,0,0),d.current.enableRotate=!0)},lt=N=>{const I={x:N.x,z:N.z*-1};let J=1/0;for(let St=0;St<k.length-1;St++){const mt=k[St],L=k[St+1],nt=Math.pow(L.x-mt.x,2)+Math.pow(L.z-mt.z,2);if(nt===0)return Math.sqrt(Math.pow(I.x-mt.x,2)+Math.pow(I.z-mt.z,2));let gt=((I.x-mt.x)*(L.x-mt.x)+(I.z-mt.z)*(L.z-mt.z))/nt;gt=Math.max(0,Math.min(1,gt));const Et=Math.sqrt(Math.pow(I.x-(mt.x+gt*(L.x-mt.x)),2)+Math.pow(I.z-(mt.z+gt*(L.z-mt.z)),2));Et<J&&(J=Et)}return J.toFixed(2)};return ct.jsxs("div",{className:"relative w-full h-screen overflow-hidden bg-black text-white",children:[ct.jsxs("button",{onClick:()=>{y=="Normal"?r("Credits"):S("Normal"),v(!1)},className:"flex items-center absolute top-6 left-6 z-10 px-4 py-2 bg-white/[0.03] backdrop-blur-sm border border-white/20 font-mono text-[15px] hover:bg-white/5 hover:text-[#00ffcc] transition-all rounded uppercase",children:[ct.jsx(kS,{size:25})," ",ct.jsx("p",{className:"mr-2",children:"Back"})]}),ct.jsxs("div",{className:"absolute top-6 left-1/2 -translate-x-1/2 z-10 flex gap-2 p-1 bg-white/[0.03] backdrop-blur-sm border border-white/20 rounded-md",children:[ct.jsx("span",{className:`pointer-events-none absolute bg-white/10 w-[calc(50%_-_4px)] h-[calc(100%_-_8px)] rounded-sm transition-all duration-300 ease-in-out z-0 ${l==="3D"?"translate-x-full":"translate-x-0"}`}),ct.jsxs("button",{onClick:et,className:`gap-1 flex justify-center items-center w-[140px] h-7 relative z-10 text-[12px] uppercase transition-all rounded hover:text-white ${l==="2D"?"text-[#00ffcc] font-bold":"text-white/60"}`,children:[ct.jsx(rM,{size:14})," Top View (2D)"]}),ct.jsxs("button",{onClick:ut,className:`gap-1 flex justify-center items-center w-[140px] h-7 relative z-10 text-[12px] uppercase transition-all rounded hover:text-white ${l==="3D"?"text-[#00ffcc] font-bold":"text-white/60"}`,children:[ct.jsx(IS,{size:14})," Orbital (3D)"]})]}),ct.jsxs("div",{className:"backdrop-blur-sm absolute bottom-6 left-6 z-10 font-mono text-xs bg-white/[0.03] p-4 border border-white/20 rounded",children:[ct.jsxs("p",{children:["X: ",i.x]}),ct.jsxs("p",{children:["Y: ",i.z*-1]}),ct.jsx("p",{className:"mt-2 text-[10px] opacity-50 uppercase tracking-widest",children:"Coordinates"})]}),ct.jsxs("div",{className:`flex flex-col p-2 border border-white/20 rounded absolute top-6 right-6 w-[clamp(0px,_30vw,_350px)] h-[calc(100vh_-_40px)] bg-black/5 backdrop-blur-sm shadow-2xl transition-all ${g||M?"opacity-100 translate-x-0":"opacity-0 translate-x-10 pointer-events-none"}`,children:[ct.jsx("button",{onClick:()=>{_(null),v(!1)},className:"bg-white/5 flex justify-center items-center rounded w-8 h-8 border border-white/20 hover:text-red-500 transition-all",children:ct.jsx(xM,{size:30})}),ct.jsxs("div",{className:"overflow-x-hidden overflow-y-auto flex flex-col mt-2",children:[g&&y=="Normal"&&ct.jsxs(ct.Fragment,{children:[ct.jsx("img",{src:g.image,alt:"Location",className:"w-full rounded border-2 border-white/30 object-cover aspect-video"}),ct.jsx("p",{className:"ml-1 font-geist text-[20px] mt-2 font-bold",children:g.name}),ct.jsxs("div",{className:"flex justify-between mt-3",children:[ct.jsx("div",{className:"flex items-center text-[#9C9C9C] gap-1 ml-[2px]",children:ct.jsx(g3,{type:g.type})}),ct.jsxs("div",{className:`flex items-center gap-1 mr-2 ${g.rating!=="N/A"?"text-[#FFB600]":"text-white/30"}`,children:[g.rating,ct.jsx("div",{className:"flex",children:g.rating!=="N/A"?ct.jsx(_3,{rating:Number(g.rating)}):[...Array(5)].map((N,I)=>ct.jsx(gd,{size:18,className:"opacity-20"},I))})]})]}),ct.jsxs("div",{className:"flex flex-col",children:[ct.jsxs("div",{children:[ct.jsx("p",{className:"ml-1 mt-4 text-[10px] opacity-55 uppercase tracking-widest",children:"About this place:"}),ct.jsx("p",{className:"mx-1 text-md mr-2 leading-relaxed",children:g.description||"No description available."})]}),ct.jsxs("div",{className:"ml-1 mt-6 text-[10px] opacity-55 uppercase tracking-widest",children:[g&&ct.jsxs("p",{children:["Coordinates: (",g.pos.x,", ",g.pos.z,")"]}),g&&ct.jsxs("p",{children:["Dictance From Center: ",g.distFromOrigin]}),g&&ct.jsxs("p",{children:["Distance From Fault Line: ",lt(g.pos)]})]})]})]}),T.current=="Earthquake"&&ct.jsxs(ct.Fragment,{children:[ct.jsx("div",{className:"flex justify-center mt-2 text-[13px] text-red-500 opacity-55 uppercase tracking-[0.2em]",children:ct.jsx("p",{children:"Earthquake Simulation"})}),ct.jsxs("div",{className:"h-14.3 mt-6 z-10 flex flex-col gap-2 p-1.5 bg-white/[0.1] backdrop-blur-sm border border-white/20 rounded-md",children:[ct.jsxs("div",{className:"flex justify-between items-center pr-1",children:[ct.jsx("p",{className:"text-[10px] opacity-55 uppercase tracking-[0.3em]",children:"Magnitude"}),ct.jsx("span",{className:"text-[10px] font-mono text-white/80",children:P})]}),ct.jsx("input",{type:"range",min:4,max:8.5,step:.01,value:P,onChange:N=>U(parseFloat(N.target.value)),className:`my-2 w-full h-1 bg-red-500/70 rounded-lg appearance-none cursor-pointer\r
                                [&::-webkit-slider-thumb]:appearance-none\r
                                [&::-webkit-slider-thumb]:w-2\r
                                [&::-webkit-slider-thumb]:h-2\r
                                [&::-webkit-slider-thumb]:bg-red-500\r
                                [&::-webkit-slider-thumb]:rounded-full\r
                                [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(239,68,68,0.8)]\r
                                [&::-webkit-slider-thumb]:transition-all\r
                                hover:[&::-webkit-slider-thumb]:scale-100`})]}),ct.jsxs("div",{className:"mt-4 z-10 flex flex-col gap-2 p-1.5 bg-white/[0.1] backdrop-blur-sm border border-white/20 rounded-md",children:[ct.jsxs("div",{className:"flex justify-between items-center pr-1",children:[ct.jsx("p",{className:"text-[10px] opacity-55 uppercase tracking-[0.3em]",children:"Focal Depth"}),ct.jsxs("span",{className:"text-[10px] font-mono text-white/80",children:[D," KM"]})]}),ct.jsx("input",{type:"range",min:2,max:50,step:1,value:D,onChange:N=>B(parseInt(N.target.value)),className:`my-2 w-full h-1 bg-red-500/70 rounded-lg appearance-none cursor-pointer\r
                                    [&::-webkit-slider-thumb]:appearance-none\r
                                    [&::-webkit-slider-thumb]:w-2\r
                                    [&::-webkit-slider-thumb]:h-2\r
                                    [&::-webkit-slider-thumb]:bg-white\r
                                    [&::-webkit-slider-thumb]:rounded-full\r
                                    [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(255,255,255,0.5)]\r
                                    [&::-webkit-slider-thumb]:transition-all\r
                                    hover:[&::-webkit-slider-thumb]:scale-100`})]}),ct.jsx("button",{onClick:()=>{z(!F)},className:"w-[45%] mt-4 p-3 rounded flex justify-center align-center border border-white/20 bg-white/[0.1] transition-all duration-200 hover:bg-white/20",children:ct.jsx("p",{className:"text-[10px] opacity-55 uppercase tracking-[0.3em]",children:F?"Stop Shaking":"Start Shaking"})}),ct.jsx("button",{onClick:()=>{Q()},className:"w-[45%] mt-4 p-3 rounded flex justify-center align-center border border-white/20 bg-white/[0.1] transition-all duration-200 hover:bg-white/20",children:ct.jsx("p",{className:"text-[10px] opacity-55 uppercase tracking-[0.3em]",children:"Reset Positions"})})]})]})]}),ct.jsxs("div",{className:"absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col gap-2 p-1 bg-white/[0.03] backdrop-blur-sm border border-white/20 rounded-md",children:[ct.jsxs("div",{className:"flex align-center ml-1 text-[11px] gap-1 opacity-55 uppercase tracking-widest",children:[ct.jsx(dM,{strokeWidth:1,size:20}),ct.jsx("p",{className:"mr-2",children:"Calamity Simulations"})]}),ct.jsx("div",{className:"flex gap-1",children:ct.jsx("button",{onClick:()=>{S("Earthquake"),v(!0)},title:"Earthquake",className:`text-white/40 flex justify-center align-center border border-white/20 rounded p-1 transition-all duration-250 ${y=="Earthquake"?"bg-red-500/60":"hover:text-white hover:bg-white/10"}`,children:ct.jsx(PS,{})})})]}),ct.jsx("div",{ref:t,className:"w-full h-full"})]})}const Av=({children:r})=>{const[t,i]=Be.useState(!1),s=Be.useRef(null);return Be.useEffect(()=>{const l=new IntersectionObserver(h=>{h.forEach(d=>{d.isIntersecting&&(i(!0),s.current&&l.unobserve(s.current))})},{threshold:.1}),c=s.current;return c&&l.observe(c),()=>{c&&l.unobserve(c)}},[]),ct.jsx("div",{ref:s,className:`transition-all duration-1000 ease-out transform ${t?"opacity-100 translate-y-0 blur-none":"opacity-0 translate-y-10 blur-md"}`,children:r})},x3=({title:r})=>ct.jsxs("div",{className:"flex flex-col items-center mb-6 group",children:[ct.jsx("div",{className:"flex items-center gap-2",children:ct.jsx("h2",{className:"text-[14px] text-white opacity-90 uppercase tracking-[0.3em] font-bold",children:r})}),ct.jsx("div",{className:"h-[1px] w-24 bg-gradient-to-r from-transparent via-red-500/50 to-transparent mt-2 transition-all duration-500 group-hover:w-full"})]}),y3=()=>{const r=[{title:"Mappers",members:["Fogarty (Lead Developer, Leader)","Garcia (Coordinates)","Jose (Coordinates)","Marquina (Research/Locations, Assistant Leader)"]},{title:"Presenters",members:["Hadji Basher (Script/PPT)","Galicia (Script/Choreography)","Laurito (Script)","David (Script)","Quisido","Dela Cruz","Doctor","Laroya","Quismorio"]},{title:"Researchers",members:["Bañares (Script, Leader)","Roxas (Leader)","Valverde (PPT)","Buenafe","Bascon","Bejasa","Cabase","Chavez","Clemente","Gomez","Obina","Ramos","Rocero","Sabilla"]},{title:"Yell & Performance",members:["Raquedan","Totaan","Daniel Vasquez","De Jesus","Jordan","Mercado","Argamosa (Dancer)","Enriquez (Props)"]}];return ct.jsxs("div",{className:"min-h-screen bg-black/90 backdrop-blur-xl text-white py-20 px-4 overflow-y-auto",children:[ct.jsx(Av,{children:ct.jsx("div",{className:"text-center mb-16",children:ct.jsx("h1",{className:"mt-15 text-3xl font-light tracking-[0.5em] uppercase opacity-60",children:"Project Credits"})})}),ct.jsx("div",{className:"max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12",children:r.map(t=>ct.jsx(Av,{children:ct.jsxs("div",{className:"flex flex-col items-center",children:[ct.jsx(x3,{title:t.title}),ct.jsx("ul",{className:"text-center space-y-2",children:t.members.map(i=>ct.jsx("li",{className:"text-[12px] text-white/60 hover:text-red-400 transition-colors cursor-default",children:i},i))})]})},t.title))})]})};function S3(){const[r,t]=Be.useState("Credits");return ct.jsxs(ct.Fragment,{children:[r!="Map"&&ct.jsx(yM,{setActiveTab:t,activeTab:r}),r=="Map"&&ct.jsx(v3,{setActiveTab:t}),r=="Credits"&&ct.jsx(y3,{})]})}CS.createRoot(document.getElementById("root")).render(ct.jsx(Be.StrictMode,{children:ct.jsx(S3,{})}));
