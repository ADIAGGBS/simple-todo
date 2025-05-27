(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ws(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ne={},Zt=[],qe=()=>{},ml=()=>!1,Dr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ks=t=>t.startsWith("onUpdate:"),ge=Object.assign,zs=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},_l=Object.prototype.hasOwnProperty,Q=(t,e)=>_l.call(t,e),F=Array.isArray,en=t=>Kn(t)==="[object Map]",Nr=t=>Kn(t)==="[object Set]",Ti=t=>Kn(t)==="[object Date]",H=t=>typeof t=="function",ue=t=>typeof t=="string",Ye=t=>typeof t=="symbol",re=t=>t!==null&&typeof t=="object",Qo=t=>(re(t)||H(t))&&H(t.then)&&H(t.catch),Zo=Object.prototype.toString,Kn=t=>Zo.call(t),vl=t=>Kn(t).slice(8,-1),ea=t=>Kn(t)==="[object Object]",Gs=t=>ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,In=Ws(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Mr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},yl=/-(\w)/g,De=Mr(t=>t.replace(yl,(e,n)=>n?n.toUpperCase():"")),bl=/\B([A-Z])/g,xt=Mr(t=>t.replace(bl,"-$1").toLowerCase()),Lr=Mr(t=>t.charAt(0).toUpperCase()+t.slice(1)),es=Mr(t=>t?`on${Lr(t)}`:""),At=(t,e)=>!Object.is(t,e),ir=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ta=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},hr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ci;const Ur=()=>Ci||(Ci=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Nn(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ue(r)?Sl(r):Nn(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ue(t)||re(t))return t}const wl=/;(?![^(]*\))/g,Il=/:([^]+)/,El=/\/\*[^]*?\*\//g;function Sl(t){const e={};return t.replace(El,"").split(wl).forEach(n=>{if(n){const r=n.split(Il);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Fr(t){let e="";if(ue(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=Fr(t[n]);r&&(e+=r+" ")}else if(re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Tl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cl=Ws(Tl);function na(t){return!!t||t===""}function Al(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Br(t[r],e[r]);return n}function Br(t,e){if(t===e)return!0;let n=Ti(t),r=Ti(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Ye(t),r=Ye(e),n||r)return t===e;if(n=F(t),r=F(e),n||r)return n&&r?Al(t,e):!1;if(n=re(t),r=re(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Br(t[o],e[o]))return!1}}return String(t)===String(e)}function Rl(t,e){return t.findIndex(n=>Br(n,e))}const ra=t=>!!(t&&t.__v_isRef===!0),qs=t=>ue(t)?t:t==null?"":F(t)||re(t)&&(t.toString===Zo||!H(t.toString))?ra(t)?qs(t.value):JSON.stringify(t,sa,2):String(t),sa=(t,e)=>ra(e)?sa(t,e.value):en(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[ts(r,i)+" =>"]=s,n),{})}:Nr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ts(n))}:Ye(e)?ts(e):re(e)&&!F(e)&&!ea(e)?String(e):e,ts=(t,e="")=>{var n;return Ye(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let he;class ia{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=he,!e&&he&&(this.index=(he.scopes||(he.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=he;try{return he=this,e()}finally{he=n}}}on(){++this._on===1&&(this.prevScope=he,he=this)}off(){this._on>0&&--this._on===0&&(he=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function oa(t){return new ia(t)}function aa(){return he}function Pl(t,e=!1){he&&he.cleanups.push(t)}let ie;const ns=new WeakSet;class ca{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,he&&he.active&&he.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ns.has(this)&&(ns.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ua(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ai(this),fa(this);const e=ie,n=Me;ie=this,Me=!0;try{return this.fn()}finally{da(this),ie=e,Me=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Xs(e);this.deps=this.depsTail=void 0,Ai(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ns.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ws(this)&&this.run()}get dirty(){return ws(this)}}let la=0,En,Sn;function ua(t,e=!1){if(t.flags|=8,e){t.next=Sn,Sn=t;return}t.next=En,En=t}function Js(){la++}function Ys(){if(--la>0)return;if(Sn){let e=Sn;for(Sn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;En;){let e=En;for(En=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function fa(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function da(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Xs(r),Ol(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function ws(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ha(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ha(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Mn)||(t.globalVersion=Mn,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!ws(t))))return;t.flags|=2;const e=t.dep,n=ie,r=Me;ie=t,Me=!0;try{fa(t);const s=t.fn(t._value);(e.version===0||At(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ie=n,Me=r,da(t),t.flags&=-3}}function Xs(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Xs(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ol(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Me=!0;const pa=[];function ut(){pa.push(Me),Me=!1}function ft(){const t=pa.pop();Me=t===void 0?!0:t}function Ai(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ie;ie=void 0;try{e()}finally{ie=n}}}let Mn=0;class kl{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Qs{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ie||!Me||ie===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ie)n=this.activeLink=new kl(ie,this),ie.deps?(n.prevDep=ie.depsTail,ie.depsTail.nextDep=n,ie.depsTail=n):ie.deps=ie.depsTail=n,ga(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ie.depsTail,n.nextDep=void 0,ie.depsTail.nextDep=n,ie.depsTail=n,ie.deps===n&&(ie.deps=r)}return n}trigger(e){this.version++,Mn++,this.notify(e)}notify(e){Js();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ys()}}}function ga(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)ga(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const pr=new WeakMap,Ht=Symbol(""),Is=Symbol(""),Ln=Symbol("");function pe(t,e,n){if(Me&&ie){let r=pr.get(t);r||pr.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Qs),s.map=r,s.key=n),s.track()}}function rt(t,e,n,r,s,i){const o=pr.get(t);if(!o){Mn++;return}const a=c=>{c&&c.trigger()};if(Js(),e==="clear")o.forEach(a);else{const c=F(t),u=c&&Gs(n);if(c&&n==="length"){const l=Number(r);o.forEach((d,h)=>{(h==="length"||h===Ln||!Ye(h)&&h>=l)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(Ln)),e){case"add":c?u&&a(o.get("length")):(a(o.get(Ht)),en(t)&&a(o.get(Is)));break;case"delete":c||(a(o.get(Ht)),en(t)&&a(o.get(Is)));break;case"set":en(t)&&a(o.get(Ht));break}}Ys()}function xl(t,e){const n=pr.get(t);return n&&n.get(e)}function qt(t){const e=q(t);return e===t?e:(pe(e,"iterate",Ln),xe(t)?e:e.map(fe))}function $r(t){return pe(t=q(t),"iterate",Ln),t}const Dl={__proto__:null,[Symbol.iterator](){return rs(this,Symbol.iterator,fe)},concat(...t){return qt(this).concat(...t.map(e=>F(e)?qt(e):e))},entries(){return rs(this,"entries",t=>(t[1]=fe(t[1]),t))},every(t,e){return et(this,"every",t,e,void 0,arguments)},filter(t,e){return et(this,"filter",t,e,n=>n.map(fe),arguments)},find(t,e){return et(this,"find",t,e,fe,arguments)},findIndex(t,e){return et(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return et(this,"findLast",t,e,fe,arguments)},findLastIndex(t,e){return et(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return et(this,"forEach",t,e,void 0,arguments)},includes(...t){return ss(this,"includes",t)},indexOf(...t){return ss(this,"indexOf",t)},join(t){return qt(this).join(t)},lastIndexOf(...t){return ss(this,"lastIndexOf",t)},map(t,e){return et(this,"map",t,e,void 0,arguments)},pop(){return vn(this,"pop")},push(...t){return vn(this,"push",t)},reduce(t,...e){return Ri(this,"reduce",t,e)},reduceRight(t,...e){return Ri(this,"reduceRight",t,e)},shift(){return vn(this,"shift")},some(t,e){return et(this,"some",t,e,void 0,arguments)},splice(...t){return vn(this,"splice",t)},toReversed(){return qt(this).toReversed()},toSorted(t){return qt(this).toSorted(t)},toSpliced(...t){return qt(this).toSpliced(...t)},unshift(...t){return vn(this,"unshift",t)},values(){return rs(this,"values",fe)}};function rs(t,e,n){const r=$r(t),s=r[e]();return r!==t&&!xe(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Nl=Array.prototype;function et(t,e,n,r,s,i){const o=$r(t),a=o!==t&&!xe(t),c=o[e];if(c!==Nl[e]){const d=c.apply(t,i);return a?fe(d):d}let u=n;o!==t&&(a?u=function(d,h){return n.call(this,fe(d),h,t)}:n.length>2&&(u=function(d,h){return n.call(this,d,h,t)}));const l=c.call(o,u,r);return a&&s?s(l):l}function Ri(t,e,n,r){const s=$r(t);let i=n;return s!==t&&(xe(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,fe(a),c,t)}),s[e](i,...r)}function ss(t,e,n){const r=q(t);pe(r,"iterate",Ln);const s=r[e](...n);return(s===-1||s===!1)&&ti(n[0])?(n[0]=q(n[0]),r[e](...n)):s}function vn(t,e,n=[]){ut(),Js();const r=q(t)[e].apply(t,n);return Ys(),ft(),r}const Ml=Ws("__proto__,__v_isRef,__isVue"),ma=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ye));function Ll(t){Ye(t)||(t=String(t));const e=q(this);return pe(e,"has",t),e.hasOwnProperty(t)}class _a{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?zl:wa:i?ba:ya).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=F(e);if(!s){let c;if(o&&(c=Dl[n]))return c;if(n==="hasOwnProperty")return Ll}const a=Reflect.get(e,n,ce(e)?e:r);return(Ye(n)?ma.has(n):Ml(n))||(s||pe(e,"get",n),i)?a:ce(a)?o&&Gs(n)?a:a.value:re(a)?s?Ea(a):gn(a):a}}class va extends _a{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Ot(i);if(!xe(r)&&!Ot(r)&&(i=q(i),r=q(r)),!F(e)&&ce(i)&&!ce(r))return c?!1:(i.value=r,!0)}const o=F(e)&&Gs(n)?Number(n)<e.length:Q(e,n),a=Reflect.set(e,n,r,ce(e)?e:s);return e===q(s)&&(o?At(r,i)&&rt(e,"set",n,r):rt(e,"add",n,r)),a}deleteProperty(e,n){const r=Q(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&rt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Ye(n)||!ma.has(n))&&pe(e,"has",n),r}ownKeys(e){return pe(e,"iterate",F(e)?"length":Ht),Reflect.ownKeys(e)}}class Ul extends _a{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Fl=new va,Bl=new Ul,$l=new va(!0);const Es=t=>t,tr=t=>Reflect.getPrototypeOf(t);function Hl(t,e,n){return function(...r){const s=this.__v_raw,i=q(s),o=en(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),l=n?Es:e?gr:fe;return!e&&pe(i,"iterate",c?Is:Ht),{next(){const{value:d,done:h}=u.next();return h?{value:d,done:h}:{value:a?[l(d[0]),l(d[1])]:l(d),done:h}},[Symbol.iterator](){return this}}}}function nr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function jl(t,e){const n={get(s){const i=this.__v_raw,o=q(i),a=q(s);t||(At(s,a)&&pe(o,"get",s),pe(o,"get",a));const{has:c}=tr(o),u=e?Es:t?gr:fe;if(c.call(o,s))return u(i.get(s));if(c.call(o,a))return u(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&pe(q(s),"iterate",Ht),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=q(i),a=q(s);return t||(At(s,a)&&pe(o,"has",s),pe(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=q(a),u=e?Es:t?gr:fe;return!t&&pe(c,"iterate",Ht),a.forEach((l,d)=>s.call(i,u(l),u(d),o))}};return ge(n,t?{add:nr("add"),set:nr("set"),delete:nr("delete"),clear:nr("clear")}:{add(s){!e&&!xe(s)&&!Ot(s)&&(s=q(s));const i=q(this);return tr(i).has.call(i,s)||(i.add(s),rt(i,"add",s,s)),this},set(s,i){!e&&!xe(i)&&!Ot(i)&&(i=q(i));const o=q(this),{has:a,get:c}=tr(o);let u=a.call(o,s);u||(s=q(s),u=a.call(o,s));const l=c.call(o,s);return o.set(s,i),u?At(i,l)&&rt(o,"set",s,i):rt(o,"add",s,i),this},delete(s){const i=q(this),{has:o,get:a}=tr(i);let c=o.call(i,s);c||(s=q(s),c=o.call(i,s)),a&&a.call(i,s);const u=i.delete(s);return c&&rt(i,"delete",s,void 0),u},clear(){const s=q(this),i=s.size!==0,o=s.clear();return i&&rt(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Hl(s,t,e)}),n}function Zs(t,e){const n=jl(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Q(n,s)&&s in r?n:r,s,i)}const Vl={get:Zs(!1,!1)},Wl={get:Zs(!1,!0)},Kl={get:Zs(!0,!1)};const ya=new WeakMap,ba=new WeakMap,wa=new WeakMap,zl=new WeakMap;function Gl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ql(t){return t.__v_skip||!Object.isExtensible(t)?0:Gl(vl(t))}function gn(t){return Ot(t)?t:ei(t,!1,Fl,Vl,ya)}function Ia(t){return ei(t,!1,$l,Wl,ba)}function Ea(t){return ei(t,!0,Bl,Kl,wa)}function ei(t,e,n,r,s){if(!re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=ql(t);if(i===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,i===2?r:n);return s.set(t,a),a}function ct(t){return Ot(t)?ct(t.__v_raw):!!(t&&t.__v_isReactive)}function Ot(t){return!!(t&&t.__v_isReadonly)}function xe(t){return!!(t&&t.__v_isShallow)}function ti(t){return t?!!t.__v_raw:!1}function q(t){const e=t&&t.__v_raw;return e?q(e):t}function ni(t){return!Q(t,"__v_skip")&&Object.isExtensible(t)&&ta(t,"__v_skip",!0),t}const fe=t=>re(t)?gn(t):t,gr=t=>re(t)?Ea(t):t;function ce(t){return t?t.__v_isRef===!0:!1}function lt(t){return Sa(t,!1)}function Jl(t){return Sa(t,!0)}function Sa(t,e){return ce(t)?t:new Yl(t,e)}class Yl{constructor(e,n){this.dep=new Qs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:q(e),this._value=n?e:fe(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||xe(e)||Ot(e);e=r?e:q(e),At(e,n)&&(this._rawValue=e,this._value=r?e:fe(e),this.dep.trigger())}}function tn(t){return ce(t)?t.value:t}const Xl={get:(t,e,n)=>e==="__v_raw"?t:tn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ce(s)&&!ce(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Ta(t){return ct(t)?t:new Proxy(t,Xl)}function Ql(t){const e=F(t)?new Array(t.length):{};for(const n in t)e[n]=Ca(t,n);return e}class Zl{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return xl(q(this._object),this._key)}}class eu{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function tu(t,e,n){return ce(t)?t:H(t)?new eu(t):re(t)&&arguments.length>1?Ca(t,e,n):lt(t)}function Ca(t,e,n){const r=t[e];return ce(r)?r:new Zl(t,e,n)}class nu{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Qs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Mn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ie!==this)return ua(this,!0),!0}get value(){const e=this.dep.track();return ha(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ru(t,e,n=!1){let r,s;return H(t)?r=t:(r=t.get,s=t.set),new nu(r,s,n)}const rr={},mr=new WeakMap;let Ut;function su(t,e=!1,n=Ut){if(n){let r=mr.get(n);r||mr.set(n,r=[]),r.push(t)}}function iu(t,e,n=ne){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,u=k=>s?k:xe(k)||s===!1||s===0?st(k,1):st(k);let l,d,h,g,I=!1,R=!1;if(ce(t)?(d=()=>t.value,I=xe(t)):ct(t)?(d=()=>u(t),I=!0):F(t)?(R=!0,I=t.some(k=>ct(k)||xe(k)),d=()=>t.map(k=>{if(ce(k))return k.value;if(ct(k))return u(k);if(H(k))return c?c(k,2):k()})):H(t)?e?d=c?()=>c(t,2):t:d=()=>{if(h){ut();try{h()}finally{ft()}}const k=Ut;Ut=l;try{return c?c(t,3,[g]):t(g)}finally{Ut=k}}:d=qe,e&&s){const k=d,j=s===!0?1/0:s;d=()=>st(k(),j)}const U=aa(),D=()=>{l.stop(),U&&U.active&&zs(U.effects,l)};if(i&&e){const k=e;e=(...j)=>{k(...j),D()}}let O=R?new Array(t.length).fill(rr):rr;const x=k=>{if(!(!(l.flags&1)||!l.dirty&&!k))if(e){const j=l.run();if(s||I||(R?j.some((le,J)=>At(le,O[J])):At(j,O))){h&&h();const le=Ut;Ut=l;try{const J=[j,O===rr?void 0:R&&O[0]===rr?[]:O,g];c?c(e,3,J):e(...J),O=j}finally{Ut=le}}}else l.run()};return a&&a(x),l=new ca(d),l.scheduler=o?()=>o(x,!1):x,g=k=>su(k,!1,l),h=l.onStop=()=>{const k=mr.get(l);if(k){if(c)c(k,4);else for(const j of k)j();mr.delete(l)}},e?r?x(!0):O=l.run():o?o(x.bind(null,!0),!0):l.run(),D.pause=l.pause.bind(l),D.resume=l.resume.bind(l),D.stop=D,D}function st(t,e=1/0,n){if(e<=0||!re(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ce(t))st(t.value,e,n);else if(F(t))for(let r=0;r<t.length;r++)st(t[r],e,n);else if(Nr(t)||en(t))t.forEach(r=>{st(r,e,n)});else if(ea(t)){for(const r in t)st(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&st(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zn(t,e,n,r){try{return r?t(...r):t()}catch(s){Hr(s,e,n)}}function Xe(t,e,n,r){if(H(t)){const s=zn(t,e,n,r);return s&&Qo(s)&&s.catch(i=>{Hr(i,e,n)}),s}if(F(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Xe(t[i],e,n,r));return s}}function Hr(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ne;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const l=a.ec;if(l){for(let d=0;d<l.length;d++)if(l[d](t,c,u)===!1)return}a=a.parent}if(i){ut(),zn(i,null,10,[t,c,u]),ft();return}}ou(t,n,s,r,o)}function ou(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const ve=[];let We=-1;const nn=[];let bt=null,Yt=0;const Aa=Promise.resolve();let _r=null;function jr(t){const e=_r||Aa;return t?e.then(this?t.bind(this):t):e}function au(t){let e=We+1,n=ve.length;for(;e<n;){const r=e+n>>>1,s=ve[r],i=Un(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function ri(t){if(!(t.flags&1)){const e=Un(t),n=ve[ve.length-1];!n||!(t.flags&2)&&e>=Un(n)?ve.push(t):ve.splice(au(e),0,t),t.flags|=1,Ra()}}function Ra(){_r||(_r=Aa.then(Oa))}function cu(t){F(t)?nn.push(...t):bt&&t.id===-1?bt.splice(Yt+1,0,t):t.flags&1||(nn.push(t),t.flags|=1),Ra()}function Pi(t,e,n=We+1){for(;n<ve.length;n++){const r=ve[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;ve.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Pa(t){if(nn.length){const e=[...new Set(nn)].sort((n,r)=>Un(n)-Un(r));if(nn.length=0,bt){bt.push(...e);return}for(bt=e,Yt=0;Yt<bt.length;Yt++){const n=bt[Yt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}bt=null,Yt=0}}const Un=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Oa(t){try{for(We=0;We<ve.length;We++){const e=ve[We];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),zn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;We<ve.length;We++){const e=ve[We];e&&(e.flags&=-2)}We=-1,ve.length=0,Pa(),_r=null,(ve.length||nn.length)&&Oa()}}let Se=null,ka=null;function vr(t){const e=Se;return Se=t,ka=t&&t.type.__scopeId||null,e}function lu(t,e=Se,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&$i(-1);const i=vr(e);let o;try{o=t(...s)}finally{vr(i),r._d&&$i(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Oi(t,e){if(Se===null)return t;const n=zr(Se),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=ne]=e[s];i&&(H(i)&&(i={mounted:i,updated:i}),i.deep&&st(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Mt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(ut(),Xe(c,n,8,[t.el,a,t,e]),ft())}}const uu=Symbol("_vte"),fu=t=>t.__isTeleport;function si(t,e){t.shapeFlag&6&&t.component?(t.transition=e,si(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function xa(t,e){return H(t)?ge({name:t.name},e,{setup:t}):t}function Da(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function yr(t,e,n,r,s=!1){if(F(t)){t.forEach((I,R)=>yr(I,e&&(F(e)?e[R]:e),n,r,s));return}if(Tn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&yr(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?zr(r.component):r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===ne?a.refs={}:a.refs,d=a.setupState,h=q(d),g=d===ne?()=>!1:I=>Q(h,I);if(u!=null&&u!==c&&(ue(u)?(l[u]=null,g(u)&&(d[u]=null)):ce(u)&&(u.value=null)),H(c))zn(c,a,12,[o,l]);else{const I=ue(c),R=ce(c);if(I||R){const U=()=>{if(t.f){const D=I?g(c)?d[c]:l[c]:c.value;s?F(D)&&zs(D,i):F(D)?D.includes(i)||D.push(i):I?(l[c]=[i],g(c)&&(d[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else I?(l[c]=o,g(c)&&(d[c]=o)):R&&(c.value=o,t.k&&(l[t.k]=o))};o?(U.id=-1,Re(U,n)):U()}}}Ur().requestIdleCallback;Ur().cancelIdleCallback;const Tn=t=>!!t.type.__asyncLoader,Na=t=>t.type.__isKeepAlive;function du(t,e){Ma(t,"a",e)}function hu(t,e){Ma(t,"da",e)}function Ma(t,e,n=de){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Vr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Na(s.parent.vnode)&&pu(r,e,n,s),s=s.parent}}function pu(t,e,n,r){const s=Vr(e,t,r,!0);Ua(()=>{zs(r[e],s)},n)}function Vr(t,e,n=de,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{ut();const a=Gn(n),c=Xe(e,n,t,o);return a(),ft(),c});return r?s.unshift(i):s.push(i),i}}const pt=t=>(e,n=de)=>{(!Bn||t==="sp")&&Vr(t,(...r)=>e(...r),n)},gu=pt("bm"),La=pt("m"),mu=pt("bu"),_u=pt("u"),vu=pt("bum"),Ua=pt("um"),yu=pt("sp"),bu=pt("rtg"),wu=pt("rtc");function Iu(t,e=de){Vr("ec",t,e)}const Eu="components";function Su(t,e){return Cu(Eu,t,!0,e)||t}const Tu=Symbol.for("v-ndc");function Cu(t,e,n=!0,r=!1){const s=Se||de;if(s){const i=s.type;{const a=_f(i,!1);if(a&&(a===e||a===De(e)||a===Lr(De(e))))return i}const o=ki(s[t]||i[t],e)||ki(s.appContext[t],e);return!o&&r?i:o}}function ki(t,e){return t&&(t[e]||t[De(e)]||t[Lr(De(e))])}function Au(t,e,n,r){let s;const i=n,o=F(t);if(o||ue(t)){const a=o&&ct(t);let c=!1,u=!1;a&&(c=!xe(t),u=Ot(t),t=$r(t)),s=new Array(t.length);for(let l=0,d=t.length;l<d;l++)s[l]=e(c?u?gr(fe(t[l])):fe(t[l]):t[l],l,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(re(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const l=a[c];s[c]=e(t[l],l,c,i)}}else s=[];return s}const Ss=t=>t?sc(t)?zr(t):Ss(t.parent):null,Cn=ge(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ss(t.parent),$root:t=>Ss(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ba(t),$forceUpdate:t=>t.f||(t.f=()=>{ri(t.update)}),$nextTick:t=>t.n||(t.n=jr.bind(t.proxy)),$watch:t=>Ju.bind(t)}),is=(t,e)=>t!==ne&&!t.__isScriptSetup&&Q(t,e),Ru={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(is(r,e))return o[e]=1,r[e];if(s!==ne&&Q(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Q(u,e))return o[e]=3,i[e];if(n!==ne&&Q(n,e))return o[e]=4,n[e];Ts&&(o[e]=0)}}const l=Cn[e];let d,h;if(l)return e==="$attrs"&&pe(t.attrs,"get",""),l(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==ne&&Q(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,Q(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return is(s,e)?(s[e]=n,!0):r!==ne&&Q(r,e)?(r[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ne&&Q(t,o)||is(e,o)||(a=i[0])&&Q(a,o)||Q(r,o)||Q(Cn,o)||Q(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function xi(t){return F(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ts=!0;function Pu(t){const e=Ba(t),n=t.proxy,r=t.ctx;Ts=!1,e.beforeCreate&&Di(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:d,mounted:h,beforeUpdate:g,updated:I,activated:R,deactivated:U,beforeDestroy:D,beforeUnmount:O,destroyed:x,unmounted:k,render:j,renderTracked:le,renderTriggered:J,errorCaptured:z,serverPrefetch:W,expose:oe,inheritAttrs:me,components:Te,directives:be,filters:Nt}=e;if(u&&Ou(u,r,null),o)for(const V in o){const Y=o[V];H(Y)&&(r[V]=Y.bind(n))}if(s){const V=s.call(n,n);re(V)&&(t.data=gn(V))}if(Ts=!0,i)for(const V in i){const Y=i[V],Ze=H(Y)?Y.bind(n,n):H(Y.get)?Y.get.bind(n,n):qe,mt=!H(Y)&&H(Y.set)?Y.set.bind(n):qe,Be=Ee({get:Ze,set:mt});Object.defineProperty(r,V,{enumerable:!0,configurable:!0,get:()=>Be.value,set:we=>Be.value=we})}if(a)for(const V in a)Fa(a[V],r,n,V);if(c){const V=H(c)?c.call(n):c;Reflect.ownKeys(V).forEach(Y=>{or(Y,V[Y])})}l&&Di(l,t,"c");function ae(V,Y){F(Y)?Y.forEach(Ze=>V(Ze.bind(n))):Y&&V(Y.bind(n))}if(ae(gu,d),ae(La,h),ae(mu,g),ae(_u,I),ae(du,R),ae(hu,U),ae(Iu,z),ae(wu,le),ae(bu,J),ae(vu,O),ae(Ua,k),ae(yu,W),F(oe))if(oe.length){const V=t.exposed||(t.exposed={});oe.forEach(Y=>{Object.defineProperty(V,Y,{get:()=>n[Y],set:Ze=>n[Y]=Ze})})}else t.exposed||(t.exposed={});j&&t.render===qe&&(t.render=j),me!=null&&(t.inheritAttrs=me),Te&&(t.components=Te),be&&(t.directives=be),W&&Da(t)}function Ou(t,e,n=qe){F(t)&&(t=Cs(t));for(const r in t){const s=t[r];let i;re(s)?"default"in s?i=Le(s.from||r,s.default,!0):i=Le(s.from||r):i=Le(s),ce(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Di(t,e,n){Xe(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Fa(t,e,n,r){let s=r.includes(".")?Qa(n,r):()=>n[r];if(ue(t)){const i=e[t];H(i)&&An(s,i)}else if(H(t))An(s,t.bind(n));else if(re(t))if(F(t))t.forEach(i=>Fa(i,e,n,r));else{const i=H(t.handler)?t.handler.bind(n):e[t.handler];H(i)&&An(s,i,t)}}function Ba(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>br(c,u,o,!0)),br(c,e,o)),re(e)&&i.set(e,c),c}function br(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&br(t,i,n,!0),s&&s.forEach(o=>br(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=ku[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const ku={data:Ni,props:Mi,emits:Mi,methods:wn,computed:wn,beforeCreate:_e,created:_e,beforeMount:_e,mounted:_e,beforeUpdate:_e,updated:_e,beforeDestroy:_e,beforeUnmount:_e,destroyed:_e,unmounted:_e,activated:_e,deactivated:_e,errorCaptured:_e,serverPrefetch:_e,components:wn,directives:wn,watch:Du,provide:Ni,inject:xu};function Ni(t,e){return e?t?function(){return ge(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function xu(t,e){return wn(Cs(t),Cs(e))}function Cs(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function _e(t,e){return t?[...new Set([].concat(t,e))]:e}function wn(t,e){return t?ge(Object.create(null),t,e):e}function Mi(t,e){return t?F(t)&&F(e)?[...new Set([...t,...e])]:ge(Object.create(null),xi(t),xi(e??{})):e}function Du(t,e){if(!t)return e;if(!e)return t;const n=ge(Object.create(null),t);for(const r in e)n[r]=_e(t[r],e[r]);return n}function $a(){return{app:null,config:{isNativeTag:ml,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nu=0;function Mu(t,e){return function(r,s=null){H(r)||(r=ge({},r)),s!=null&&!re(s)&&(s=null);const i=$a(),o=new WeakSet,a=[];let c=!1;const u=i.app={_uid:Nu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:yf,get config(){return i.config},set config(l){},use(l,...d){return o.has(l)||(l&&H(l.install)?(o.add(l),l.install(u,...d)):H(l)&&(o.add(l),l(u,...d))),u},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),u},component(l,d){return d?(i.components[l]=d,u):i.components[l]},directive(l,d){return d?(i.directives[l]=d,u):i.directives[l]},mount(l,d,h){if(!c){const g=u._ceVNode||Oe(r,s);return g.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),t(g,l,h),c=!0,u._container=l,l.__vue_app__=u,zr(g.component)}},onUnmount(l){a.push(l)},unmount(){c&&(Xe(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(l,d){return i.provides[l]=d,u},runWithContext(l){const d=jt;jt=u;try{return l()}finally{jt=d}}};return u}}let jt=null;function or(t,e){if(de){let n=de.provides;const r=de.parent&&de.parent.provides;r===n&&(n=de.provides=Object.create(r)),n[t]=e}}function Le(t,e,n=!1){const r=de||Se;if(r||jt){const s=jt?jt._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&H(e)?e.call(r&&r.proxy):e}}function Lu(){return!!(de||Se||jt)}const Ha={},ja=()=>Object.create(Ha),Va=t=>Object.getPrototypeOf(t)===Ha;function Uu(t,e,n,r=!1){const s={},i=ja();t.propsDefaults=Object.create(null),Wa(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ia(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Fu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=q(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let d=0;d<l.length;d++){let h=l[d];if(Wr(t.emitsOptions,h))continue;const g=e[h];if(c)if(Q(i,h))g!==i[h]&&(i[h]=g,u=!0);else{const I=De(h);s[I]=As(c,a,I,g,t,!1)}else g!==i[h]&&(i[h]=g,u=!0)}}}else{Wa(t,e,s,i)&&(u=!0);let l;for(const d in a)(!e||!Q(e,d)&&((l=xt(d))===d||!Q(e,l)))&&(c?n&&(n[d]!==void 0||n[l]!==void 0)&&(s[d]=As(c,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!Q(e,d))&&(delete i[d],u=!0)}u&&rt(t.attrs,"set","")}function Wa(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(In(c))continue;const u=e[c];let l;s&&Q(s,l=De(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:Wr(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=q(n),u=a||ne;for(let l=0;l<i.length;l++){const d=i[l];n[d]=As(s,c,d,u[d],t,!Q(u,d))}}return o}function As(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Q(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&H(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const l=Gn(s);r=u[n]=c.call(null,e),l()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===xt(n))&&(r=!0))}return r}const Bu=new WeakMap;function Ka(t,e,n=!1){const r=n?Bu:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!H(t)){const l=d=>{c=!0;const[h,g]=Ka(d,e,!0);ge(o,h),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return re(t)&&r.set(t,Zt),Zt;if(F(i))for(let l=0;l<i.length;l++){const d=De(i[l]);Li(d)&&(o[d]=ne)}else if(i)for(const l in i){const d=De(l);if(Li(d)){const h=i[l],g=o[d]=F(h)||H(h)?{type:h}:ge({},h),I=g.type;let R=!1,U=!0;if(F(I))for(let D=0;D<I.length;++D){const O=I[D],x=H(O)&&O.name;if(x==="Boolean"){R=!0;break}else x==="String"&&(U=!1)}else R=H(I)&&I.name==="Boolean";g[0]=R,g[1]=U,(R||Q(g,"default"))&&a.push(d)}}const u=[o,a];return re(t)&&r.set(t,u),u}function Li(t){return t[0]!=="$"&&!In(t)}const ii=t=>t[0]==="_"||t==="$stable",oi=t=>F(t)?t.map(ze):[ze(t)],$u=(t,e,n)=>{if(e._n)return e;const r=lu((...s)=>oi(e(...s)),n);return r._c=!1,r},za=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ii(s))continue;const i=t[s];if(H(i))e[s]=$u(s,i,r);else if(i!=null){const o=oi(i);e[s]=()=>o}}},Ga=(t,e)=>{const n=oi(e);t.slots.default=()=>n},qa=(t,e,n)=>{for(const r in e)(n||!ii(r))&&(t[r]=e[r])},Hu=(t,e,n)=>{const r=t.slots=ja();if(t.vnode.shapeFlag&32){const s=e._;s?(qa(r,e,n),n&&ta(r,"_",s,!0)):za(e,r)}else e&&Ga(t,e)},ju=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ne;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:qa(s,e,n):(i=!e.$stable,za(e,s)),o=e}else e&&(Ga(t,e),o={default:1});if(i)for(const a in s)!ii(a)&&o[a]==null&&delete s[a]},Re=nf;function Vu(t){return Wu(t)}function Wu(t,e){const n=Ur();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:d,nextSibling:h,setScopeId:g=qe,insertStaticContent:I}=t,R=(f,p,m,_=null,b=null,y=null,T=void 0,S=null,E=!!p.dynamicChildren)=>{if(f===p)return;f&&!yn(f,p)&&(_=v(f),we(f,b,y,!0),f=null),p.patchFlag===-2&&(E=!1,p.dynamicChildren=null);const{type:w,ref:L,shapeFlag:A}=p;switch(w){case Kr:U(f,p,m,_);break;case kt:D(f,p,m,_);break;case as:f==null&&O(p,m,_,T);break;case Ke:Te(f,p,m,_,b,y,T,S,E);break;default:A&1?j(f,p,m,_,b,y,T,S,E):A&6?be(f,p,m,_,b,y,T,S,E):(A&64||A&128)&&w.process(f,p,m,_,b,y,T,S,E,N)}L!=null&&b&&yr(L,f&&f.ref,y,p||f,!p)},U=(f,p,m,_)=>{if(f==null)r(p.el=a(p.children),m,_);else{const b=p.el=f.el;p.children!==f.children&&u(b,p.children)}},D=(f,p,m,_)=>{f==null?r(p.el=c(p.children||""),m,_):p.el=f.el},O=(f,p,m,_)=>{[f.el,f.anchor]=I(f.children,p,m,_,f.el,f.anchor)},x=({el:f,anchor:p},m,_)=>{let b;for(;f&&f!==p;)b=h(f),r(f,m,_),f=b;r(p,m,_)},k=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=h(f),s(f),f=m;s(p)},j=(f,p,m,_,b,y,T,S,E)=>{p.type==="svg"?T="svg":p.type==="math"&&(T="mathml"),f==null?le(p,m,_,b,y,T,S,E):W(f,p,b,y,T,S,E)},le=(f,p,m,_,b,y,T,S)=>{let E,w;const{props:L,shapeFlag:A,transition:M,dirs:$}=f;if(E=f.el=o(f.type,y,L&&L.is,L),A&8?l(E,f.children):A&16&&z(f.children,E,null,_,b,os(f,y),T,S),$&&Mt(f,null,_,"created"),J(E,f,f.scopeId,T,_),L){for(const se in L)se!=="value"&&!In(se)&&i(E,se,null,L[se],y,_);"value"in L&&i(E,"value",null,L.value,y),(w=L.onVnodeBeforeMount)&&Ve(w,_,f)}$&&Mt(f,null,_,"beforeMount");const G=Ku(b,M);G&&M.beforeEnter(E),r(E,p,m),((w=L&&L.onVnodeMounted)||G||$)&&Re(()=>{w&&Ve(w,_,f),G&&M.enter(E),$&&Mt(f,null,_,"mounted")},b)},J=(f,p,m,_,b)=>{if(m&&g(f,m),_)for(let y=0;y<_.length;y++)g(f,_[y]);if(b){let y=b.subTree;if(p===y||ec(y.type)&&(y.ssContent===p||y.ssFallback===p)){const T=b.vnode;J(f,T,T.scopeId,T.slotScopeIds,b.parent)}}},z=(f,p,m,_,b,y,T,S,E=0)=>{for(let w=E;w<f.length;w++){const L=f[w]=S?wt(f[w]):ze(f[w]);R(null,L,p,m,_,b,y,T,S)}},W=(f,p,m,_,b,y,T)=>{const S=p.el=f.el;let{patchFlag:E,dynamicChildren:w,dirs:L}=p;E|=f.patchFlag&16;const A=f.props||ne,M=p.props||ne;let $;if(m&&Lt(m,!1),($=M.onVnodeBeforeUpdate)&&Ve($,m,p,f),L&&Mt(p,f,m,"beforeUpdate"),m&&Lt(m,!0),(A.innerHTML&&M.innerHTML==null||A.textContent&&M.textContent==null)&&l(S,""),w?oe(f.dynamicChildren,w,S,m,_,os(p,b),y):T||Y(f,p,S,null,m,_,os(p,b),y,!1),E>0){if(E&16)me(S,A,M,m,b);else if(E&2&&A.class!==M.class&&i(S,"class",null,M.class,b),E&4&&i(S,"style",A.style,M.style,b),E&8){const G=p.dynamicProps;for(let se=0;se<G.length;se++){const Z=G[se],Ce=A[Z],Ie=M[Z];(Ie!==Ce||Z==="value")&&i(S,Z,Ce,Ie,b,m)}}E&1&&f.children!==p.children&&l(S,p.children)}else!T&&w==null&&me(S,A,M,m,b);(($=M.onVnodeUpdated)||L)&&Re(()=>{$&&Ve($,m,p,f),L&&Mt(p,f,m,"updated")},_)},oe=(f,p,m,_,b,y,T)=>{for(let S=0;S<p.length;S++){const E=f[S],w=p[S],L=E.el&&(E.type===Ke||!yn(E,w)||E.shapeFlag&70)?d(E.el):m;R(E,w,L,null,_,b,y,T,!0)}},me=(f,p,m,_,b)=>{if(p!==m){if(p!==ne)for(const y in p)!In(y)&&!(y in m)&&i(f,y,p[y],null,b,_);for(const y in m){if(In(y))continue;const T=m[y],S=p[y];T!==S&&y!=="value"&&i(f,y,S,T,b,_)}"value"in m&&i(f,"value",p.value,m.value,b)}},Te=(f,p,m,_,b,y,T,S,E)=>{const w=p.el=f?f.el:a(""),L=p.anchor=f?f.anchor:a("");let{patchFlag:A,dynamicChildren:M,slotScopeIds:$}=p;$&&(S=S?S.concat($):$),f==null?(r(w,m,_),r(L,m,_),z(p.children||[],m,L,b,y,T,S,E)):A>0&&A&64&&M&&f.dynamicChildren?(oe(f.dynamicChildren,M,m,b,y,T,S),(p.key!=null||b&&p===b.subTree)&&Ja(f,p,!0)):Y(f,p,m,L,b,y,T,S,E)},be=(f,p,m,_,b,y,T,S,E)=>{p.slotScopeIds=S,f==null?p.shapeFlag&512?b.ctx.activate(p,m,_,T,E):Nt(p,m,_,b,y,T,E):gt(f,p,E)},Nt=(f,p,m,_,b,y,T)=>{const S=f.component=df(f,_,b);if(Na(f)&&(S.ctx.renderer=N),hf(S,!1,T),S.asyncDep){if(b&&b.registerDep(S,ae,T),!f.el){const E=S.subTree=Oe(kt);D(null,E,p,m)}}else ae(S,f,p,m,b,y,T)},gt=(f,p,m)=>{const _=p.component=f.component;if(ef(f,p,m))if(_.asyncDep&&!_.asyncResolved){V(_,p,m);return}else _.next=p,_.update();else p.el=f.el,_.vnode=p},ae=(f,p,m,_,b,y,T)=>{const S=()=>{if(f.isMounted){let{next:A,bu:M,u:$,parent:G,vnode:se}=f;{const He=Ya(f);if(He){A&&(A.el=se.el,V(f,A,T)),He.asyncDep.then(()=>{f.isUnmounted||S()});return}}let Z=A,Ce;Lt(f,!1),A?(A.el=se.el,V(f,A,T)):A=se,M&&ir(M),(Ce=A.props&&A.props.onVnodeBeforeUpdate)&&Ve(Ce,G,A,se),Lt(f,!0);const Ie=Fi(f),$e=f.subTree;f.subTree=Ie,R($e,Ie,d($e.el),v($e),f,b,y),A.el=Ie.el,Z===null&&tf(f,Ie.el),$&&Re($,b),(Ce=A.props&&A.props.onVnodeUpdated)&&Re(()=>Ve(Ce,G,A,se),b)}else{let A;const{el:M,props:$}=p,{bm:G,m:se,parent:Z,root:Ce,type:Ie}=f,$e=Tn(p);Lt(f,!1),G&&ir(G),!$e&&(A=$&&$.onVnodeBeforeMount)&&Ve(A,Z,p),Lt(f,!0);{Ce.ce&&Ce.ce._injectChildStyle(Ie);const He=f.subTree=Fi(f);R(null,He,m,_,f,b,y),p.el=He.el}if(se&&Re(se,b),!$e&&(A=$&&$.onVnodeMounted)){const He=p;Re(()=>Ve(A,Z,He),b)}(p.shapeFlag&256||Z&&Tn(Z.vnode)&&Z.vnode.shapeFlag&256)&&f.a&&Re(f.a,b),f.isMounted=!0,p=m=_=null}};f.scope.on();const E=f.effect=new ca(S);f.scope.off();const w=f.update=E.run.bind(E),L=f.job=E.runIfDirty.bind(E);L.i=f,L.id=f.uid,E.scheduler=()=>ri(L),Lt(f,!0),w()},V=(f,p,m)=>{p.component=f;const _=f.vnode.props;f.vnode=p,f.next=null,Fu(f,p.props,_,m),ju(f,p.children,m),ut(),Pi(f),ft()},Y=(f,p,m,_,b,y,T,S,E=!1)=>{const w=f&&f.children,L=f?f.shapeFlag:0,A=p.children,{patchFlag:M,shapeFlag:$}=p;if(M>0){if(M&128){mt(w,A,m,_,b,y,T,S,E);return}else if(M&256){Ze(w,A,m,_,b,y,T,S,E);return}}$&8?(L&16&&ke(w,b,y),A!==w&&l(m,A)):L&16?$&16?mt(w,A,m,_,b,y,T,S,E):ke(w,b,y,!0):(L&8&&l(m,""),$&16&&z(A,m,_,b,y,T,S,E))},Ze=(f,p,m,_,b,y,T,S,E)=>{f=f||Zt,p=p||Zt;const w=f.length,L=p.length,A=Math.min(w,L);let M;for(M=0;M<A;M++){const $=p[M]=E?wt(p[M]):ze(p[M]);R(f[M],$,m,null,b,y,T,S,E)}w>L?ke(f,b,y,!0,!1,A):z(p,m,_,b,y,T,S,E,A)},mt=(f,p,m,_,b,y,T,S,E)=>{let w=0;const L=p.length;let A=f.length-1,M=L-1;for(;w<=A&&w<=M;){const $=f[w],G=p[w]=E?wt(p[w]):ze(p[w]);if(yn($,G))R($,G,m,null,b,y,T,S,E);else break;w++}for(;w<=A&&w<=M;){const $=f[A],G=p[M]=E?wt(p[M]):ze(p[M]);if(yn($,G))R($,G,m,null,b,y,T,S,E);else break;A--,M--}if(w>A){if(w<=M){const $=M+1,G=$<L?p[$].el:_;for(;w<=M;)R(null,p[w]=E?wt(p[w]):ze(p[w]),m,G,b,y,T,S,E),w++}}else if(w>M)for(;w<=A;)we(f[w],b,y,!0),w++;else{const $=w,G=w,se=new Map;for(w=G;w<=M;w++){const Ae=p[w]=E?wt(p[w]):ze(p[w]);Ae.key!=null&&se.set(Ae.key,w)}let Z,Ce=0;const Ie=M-G+1;let $e=!1,He=0;const _n=new Array(Ie);for(w=0;w<Ie;w++)_n[w]=0;for(w=$;w<=A;w++){const Ae=f[w];if(Ce>=Ie){we(Ae,b,y,!0);continue}let je;if(Ae.key!=null)je=se.get(Ae.key);else for(Z=G;Z<=M;Z++)if(_n[Z-G]===0&&yn(Ae,p[Z])){je=Z;break}je===void 0?we(Ae,b,y,!0):(_n[je-G]=w+1,je>=He?He=je:$e=!0,R(Ae,p[je],m,null,b,y,T,S,E),Ce++)}const Ei=$e?zu(_n):Zt;for(Z=Ei.length-1,w=Ie-1;w>=0;w--){const Ae=G+w,je=p[Ae],Si=Ae+1<L?p[Ae+1].el:_;_n[w]===0?R(null,je,m,Si,b,y,T,S,E):$e&&(Z<0||w!==Ei[Z]?Be(je,m,Si,2):Z--)}}},Be=(f,p,m,_,b=null)=>{const{el:y,type:T,transition:S,children:E,shapeFlag:w}=f;if(w&6){Be(f.component.subTree,p,m,_);return}if(w&128){f.suspense.move(p,m,_);return}if(w&64){T.move(f,p,m,N);return}if(T===Ke){r(y,p,m);for(let A=0;A<E.length;A++)Be(E[A],p,m,_);r(f.anchor,p,m);return}if(T===as){x(f,p,m);return}if(_!==2&&w&1&&S)if(_===0)S.beforeEnter(y),r(y,p,m),Re(()=>S.enter(y),b);else{const{leave:A,delayLeave:M,afterLeave:$}=S,G=()=>{f.ctx.isUnmounted?s(y):r(y,p,m)},se=()=>{A(y,()=>{G(),$&&$()})};M?M(y,G,se):se()}else r(y,p,m)},we=(f,p,m,_=!1,b=!1)=>{const{type:y,props:T,ref:S,children:E,dynamicChildren:w,shapeFlag:L,patchFlag:A,dirs:M,cacheIndex:$}=f;if(A===-2&&(b=!1),S!=null&&(ut(),yr(S,null,m,f,!0),ft()),$!=null&&(p.renderCache[$]=void 0),L&256){p.ctx.deactivate(f);return}const G=L&1&&M,se=!Tn(f);let Z;if(se&&(Z=T&&T.onVnodeBeforeUnmount)&&Ve(Z,p,f),L&6)er(f.component,m,_);else{if(L&128){f.suspense.unmount(m,_);return}G&&Mt(f,null,p,"beforeUnmount"),L&64?f.type.remove(f,p,m,N,_):w&&!w.hasOnce&&(y!==Ke||A>0&&A&64)?ke(w,p,m,!1,!0):(y===Ke&&A&384||!b&&L&16)&&ke(E,p,m),_&&zt(f)}(se&&(Z=T&&T.onVnodeUnmounted)||G)&&Re(()=>{Z&&Ve(Z,p,f),G&&Mt(f,null,p,"unmounted")},m)},zt=f=>{const{type:p,el:m,anchor:_,transition:b}=f;if(p===Ke){Gt(m,_);return}if(p===as){k(f);return}const y=()=>{s(m),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(f.shapeFlag&1&&b&&!b.persisted){const{leave:T,delayLeave:S}=b,E=()=>T(m,y);S?S(f.el,y,E):E()}else y()},Gt=(f,p)=>{let m;for(;f!==p;)m=h(f),s(f),f=m;s(p)},er=(f,p,m)=>{const{bum:_,scope:b,job:y,subTree:T,um:S,m:E,a:w,parent:L,slots:{__:A}}=f;Ui(E),Ui(w),_&&ir(_),L&&F(A)&&A.forEach(M=>{L.renderCache[M]=void 0}),b.stop(),y&&(y.flags|=8,we(T,f,p,m)),S&&Re(S,p),Re(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},ke=(f,p,m,_=!1,b=!1,y=0)=>{for(let T=y;T<f.length;T++)we(f[T],p,m,_,b)},v=f=>{if(f.shapeFlag&6)return v(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const p=h(f.anchor||f.el),m=p&&p[uu];return m?h(m):p};let P=!1;const C=(f,p,m)=>{f==null?p._vnode&&we(p._vnode,null,null,!0):R(p._vnode||null,f,p,null,null,null,m),p._vnode=f,P||(P=!0,Pi(),Pa(),P=!1)},N={p:R,um:we,m:Be,r:zt,mt:Nt,mc:z,pc:Y,pbc:oe,n:v,o:t};return{render:C,hydrate:void 0,createApp:Mu(C)}}function os({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Lt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ku(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ja(t,e,n=!1){const r=t.children,s=e.children;if(F(r)&&F(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=wt(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Ja(o,a)),a.type===Kr&&(a.el=o.el),a.type===kt&&!a.el&&(a.el=o.el)}}function zu(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Ya(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ya(e)}function Ui(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Gu=Symbol.for("v-scx"),qu=()=>Le(Gu);function An(t,e,n){return Xa(t,e,n)}function Xa(t,e,n=ne){const{immediate:r,deep:s,flush:i,once:o}=n,a=ge({},n),c=e&&r||!e&&i!=="post";let u;if(Bn){if(i==="sync"){const g=qu();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=qe,g.resume=qe,g.pause=qe,g}}const l=de;a.call=(g,I,R)=>Xe(g,l,I,R);let d=!1;i==="post"?a.scheduler=g=>{Re(g,l&&l.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(g,I)=>{I?g():ri(g)}),a.augmentJob=g=>{e&&(g.flags|=4),d&&(g.flags|=2,l&&(g.id=l.uid,g.i=l))};const h=iu(t,e,a);return Bn&&(u?u.push(h):c&&h()),h}function Ju(t,e,n){const r=this.proxy,s=ue(t)?t.includes(".")?Qa(r,t):()=>r[t]:t.bind(r,r);let i;H(e)?i=e:(i=e.handler,n=e);const o=Gn(this),a=Xa(s,i.bind(r),n);return o(),a}function Qa(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Yu=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${De(e)}Modifiers`]||t[`${xt(e)}Modifiers`];function Xu(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ne;let s=n;const i=e.startsWith("update:"),o=i&&Yu(r,e.slice(7));o&&(o.trim&&(s=n.map(l=>ue(l)?l.trim():l)),o.number&&(s=n.map(hr)));let a,c=r[a=es(e)]||r[a=es(De(e))];!c&&i&&(c=r[a=es(xt(e))]),c&&Xe(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Xe(u,t,6,s)}}function Za(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!H(t)){const c=u=>{const l=Za(u,e,!0);l&&(a=!0,ge(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(re(t)&&r.set(t,null),null):(F(i)?i.forEach(c=>o[c]=null):ge(o,i),re(t)&&r.set(t,o),o)}function Wr(t,e){return!t||!Dr(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,xt(e))||Q(t,e))}function Fi(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:l,props:d,data:h,setupState:g,ctx:I,inheritAttrs:R}=t,U=vr(t);let D,O;try{if(n.shapeFlag&4){const k=s||r,j=k;D=ze(u.call(j,k,l,d,g,h,I)),O=a}else{const k=e;D=ze(k.length>1?k(d,{attrs:a,slots:o,emit:c}):k(d,null)),O=e.props?a:Qu(a)}}catch(k){Rn.length=0,Hr(k,t,1),D=Oe(kt)}let x=D;if(O&&R!==!1){const k=Object.keys(O),{shapeFlag:j}=x;k.length&&j&7&&(i&&k.some(Ks)&&(O=Zu(O,i)),x=ln(x,O,!1,!0))}return n.dirs&&(x=ln(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&si(x,n.transition),D=x,vr(U),D}const Qu=t=>{let e;for(const n in t)(n==="class"||n==="style"||Dr(n))&&((e||(e={}))[n]=t[n]);return e},Zu=(t,e)=>{const n={};for(const r in t)(!Ks(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ef(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Bi(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let d=0;d<l.length;d++){const h=l[d];if(o[h]!==r[h]&&!Wr(u,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Bi(r,o,u):!0:!!o;return!1}function Bi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Wr(n,i))return!0}return!1}function tf({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const ec=t=>t.__isSuspense;function nf(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):cu(t)}const Ke=Symbol.for("v-fgt"),Kr=Symbol.for("v-txt"),kt=Symbol.for("v-cmt"),as=Symbol.for("v-stc"),Rn=[];let Pe=null;function Ct(t=!1){Rn.push(Pe=t?null:[])}function rf(){Rn.pop(),Pe=Rn[Rn.length-1]||null}let Fn=1;function $i(t,e=!1){Fn+=t,t<0&&Pe&&e&&(Pe.hasOnce=!0)}function tc(t){return t.dynamicChildren=Fn>0?Pe||Zt:null,rf(),Fn>0&&Pe&&Pe.push(t),t}function Qt(t,e,n,r,s,i){return tc(K(t,e,n,r,s,i,!0))}function nc(t,e,n,r,s){return tc(Oe(t,e,n,r,s,!0))}function wr(t){return t?t.__v_isVNode===!0:!1}function yn(t,e){return t.type===e.type&&t.key===e.key}const rc=({key:t})=>t??null,ar=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ue(t)||ce(t)||H(t)?{i:Se,r:t,k:e,f:!!n}:t:null);function K(t,e=null,n=null,r=0,s=null,i=t===Ke?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&rc(e),ref:e&&ar(e),scopeId:ka,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Se};return a?(ai(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ue(n)?8:16),Fn>0&&!o&&Pe&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Pe.push(c),c}const Oe=sf;function sf(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Tu)&&(t=kt),wr(t)){const a=ln(t,e,!0);return n&&ai(a,n),Fn>0&&!i&&Pe&&(a.shapeFlag&6?Pe[Pe.indexOf(t)]=a:Pe.push(a)),a.patchFlag=-2,a}if(vf(t)&&(t=t.__vccOpts),e){e=of(e);let{class:a,style:c}=e;a&&!ue(a)&&(e.class=Fr(a)),re(c)&&(ti(c)&&!F(c)&&(c=ge({},c)),e.style=Nn(c))}const o=ue(t)?1:ec(t)?128:fu(t)?64:re(t)?4:H(t)?2:0;return K(t,e,n,r,s,o,i,!0)}function of(t){return t?ti(t)||Va(t)?ge({},t):t:null}function ln(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,u=e?lf(s||{},e):s,l={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&rc(u),ref:e&&e.ref?n&&i?F(i)?i.concat(ar(e)):[i,ar(e)]:ar(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ke?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ln(t.ssContent),ssFallback:t.ssFallback&&ln(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&si(l,c.clone(l)),l}function af(t=" ",e=0){return Oe(Kr,null,t,e)}function cf(t="",e=!1){return e?(Ct(),nc(kt,null,t)):Oe(kt,null,t)}function ze(t){return t==null||typeof t=="boolean"?Oe(kt):F(t)?Oe(Ke,null,t.slice()):wr(t)?wt(t):Oe(Kr,null,String(t))}function wt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ln(t)}function ai(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ai(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Va(e)?e._ctx=Se:s===3&&Se&&(Se.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:Se},n=32):(e=String(e),r&64?(n=16,e=[af(e)]):n=8);t.children=e,t.shapeFlag|=n}function lf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Fr([e.class,r.class]));else if(s==="style")e.style=Nn([e.style,r.style]);else if(Dr(s)){const i=e[s],o=r[s];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ve(t,e,n,r=null){Xe(t,e,7,[n,r])}const uf=$a();let ff=0;function df(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||uf,i={uid:ff++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ia(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ka(r,s),emitsOptions:Za(r,s),emit:null,emitted:null,propsDefaults:ne,inheritAttrs:r.inheritAttrs,ctx:ne,data:ne,props:ne,attrs:ne,slots:ne,refs:ne,setupState:ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Xu.bind(null,i),t.ce&&t.ce(i),i}let de=null,Ir,Rs;{const t=Ur(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ir=e("__VUE_INSTANCE_SETTERS__",n=>de=n),Rs=e("__VUE_SSR_SETTERS__",n=>Bn=n)}const Gn=t=>{const e=de;return Ir(t),t.scope.on(),()=>{t.scope.off(),Ir(e)}},Hi=()=>{de&&de.scope.off(),Ir(null)};function sc(t){return t.vnode.shapeFlag&4}let Bn=!1;function hf(t,e=!1,n=!1){e&&Rs(e);const{props:r,children:s}=t.vnode,i=sc(t);Uu(t,r,i,e),Hu(t,s,n||e);const o=i?pf(t,e):void 0;return e&&Rs(!1),o}function pf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Ru);const{setup:r}=n;if(r){ut();const s=t.setupContext=r.length>1?mf(t):null,i=Gn(t),o=zn(r,t,0,[t.props,s]),a=Qo(o);if(ft(),i(),(a||t.sp)&&!Tn(t)&&Da(t),a){if(o.then(Hi,Hi),e)return o.then(c=>{ji(t,c)}).catch(c=>{Hr(c,t,0)});t.asyncDep=o}else ji(t,o)}else ic(t)}function ji(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:re(e)&&(t.setupState=Ta(e)),ic(t)}function ic(t,e,n){const r=t.type;t.render||(t.render=r.render||qe);{const s=Gn(t);ut();try{Pu(t)}finally{ft(),s()}}}const gf={get(t,e){return pe(t,"get",""),t[e]}};function mf(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,gf),slots:t.slots,emit:t.emit,expose:e}}function zr(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ta(ni(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Cn)return Cn[n](t)},has(e,n){return n in e||n in Cn}})):t.proxy}function _f(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function vf(t){return H(t)&&"__vccOpts"in t}const Ee=(t,e)=>ru(t,e,Bn);function oc(t,e,n){const r=arguments.length;return r===2?re(e)&&!F(e)?wr(e)?Oe(t,null,[e]):Oe(t,e):Oe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&wr(n)&&(n=[n]),Oe(t,e,n))}const yf="3.5.14";/**
* @vue/runtime-dom v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ps;const Vi=typeof window<"u"&&window.trustedTypes;if(Vi)try{Ps=Vi.createPolicy("vue",{createHTML:t=>t})}catch{}const ac=Ps?t=>Ps.createHTML(t):t=>t,bf="http://www.w3.org/2000/svg",wf="http://www.w3.org/1998/Math/MathML",nt=typeof document<"u"?document:null,Wi=nt&&nt.createElement("template"),If={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?nt.createElementNS(bf,t):e==="mathml"?nt.createElementNS(wf,t):n?nt.createElement(t,{is:n}):nt.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>nt.createTextNode(t),createComment:t=>nt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>nt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Wi.innerHTML=ac(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Wi.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ef=Symbol("_vtc");function Sf(t,e,n){const r=t[Ef];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ki=Symbol("_vod"),Tf=Symbol("_vsh"),Cf=Symbol(""),Af=/(^|;)\s*display\s*:/;function Rf(t,e,n){const r=t.style,s=ue(n);let i=!1;if(n&&!s){if(e)if(ue(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&cr(r,a,"")}else for(const o in e)n[o]==null&&cr(r,o,"");for(const o in n)o==="display"&&(i=!0),cr(r,o,n[o])}else if(s){if(e!==n){const o=r[Cf];o&&(n+=";"+o),r.cssText=n,i=Af.test(n)}}else e&&t.removeAttribute("style");Ki in t&&(t[Ki]=i?r.display:"",t[Tf]&&(r.display="none"))}const zi=/\s*!important$/;function cr(t,e,n){if(F(n))n.forEach(r=>cr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Pf(t,e);zi.test(n)?t.setProperty(xt(r),n.replace(zi,""),"important"):t[r]=n}}const Gi=["Webkit","Moz","ms"],cs={};function Pf(t,e){const n=cs[e];if(n)return n;let r=De(e);if(r!=="filter"&&r in t)return cs[e]=r;r=Lr(r);for(let s=0;s<Gi.length;s++){const i=Gi[s]+r;if(i in t)return cs[e]=i}return e}const qi="http://www.w3.org/1999/xlink";function Ji(t,e,n,r,s,i=Cl(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(qi,e.slice(6,e.length)):t.setAttributeNS(qi,e,n):n==null||i&&!na(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Ye(n)?String(n):n)}function Yi(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?ac(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=na(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Bt(t,e,n,r){t.addEventListener(e,n,r)}function Of(t,e,n,r){t.removeEventListener(e,n,r)}const Xi=Symbol("_vei");function kf(t,e,n,r,s=null){const i=t[Xi]||(t[Xi]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=xf(e);if(r){const u=i[e]=Mf(r,s);Bt(t,a,u,c)}else o&&(Of(t,a,o,c),i[e]=void 0)}}const Qi=/(?:Once|Passive|Capture)$/;function xf(t){let e;if(Qi.test(t)){e={};let r;for(;r=t.match(Qi);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):xt(t.slice(2)),e]}let ls=0;const Df=Promise.resolve(),Nf=()=>ls||(Df.then(()=>ls=0),ls=Date.now());function Mf(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Xe(Lf(r,n.value),e,5,[r])};return n.value=t,n.attached=Nf(),n}function Lf(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Zi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Uf=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Sf(t,r,o):e==="style"?Rf(t,n,r):Dr(e)?Ks(e)||kf(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ff(t,e,r,o))?(Yi(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ji(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ue(r))?Yi(t,De(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ji(t,e,r,o))};function Ff(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Zi(e)&&H(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Zi(e)&&ue(n)?!1:e in t}const Er=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>ir(e,n):e};function Bf(t){t.target.composing=!0}function eo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const rn=Symbol("_assign"),$f={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[rn]=Er(s);const i=r||s.props&&s.props.type==="number";Bt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=hr(a)),t[rn](a)}),n&&Bt(t,"change",()=>{t.value=t.value.trim()}),e||(Bt(t,"compositionstart",Bf),Bt(t,"compositionend",eo),Bt(t,"change",eo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[rn]=Er(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?hr(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Hf={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Nr(e);Bt(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?hr(Sr(o)):Sr(o));t[rn](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,jr(()=>{t._assigning=!1})}),t[rn]=Er(r)},mounted(t,{value:e}){to(t,e)},beforeUpdate(t,e,n){t[rn]=Er(n)},updated(t,{value:e}){t._assigning||to(t,e)}};function to(t,e){const n=t.multiple,r=F(e);if(!(n&&!r&&!Nr(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],a=Sr(o);if(n)if(r){const c=typeof a;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=Rl(e,a)>-1}else o.selected=e.has(a);else if(Br(Sr(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Sr(t){return"_value"in t?t._value:t.value}const jf=["ctrl","shift","alt","meta"],Vf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>jf.some(n=>t[`${n}Key`]&&!e.includes(n))},Wf=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=Vf[e[o]];if(a&&a(s,e))return}return t(s,...i)})},Kf={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},zf=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=xt(s.key);if(e.some(o=>o===i||Kf[o]===i))return t(s)})},Gf=ge({patchProp:Uf},If);let no;function qf(){return no||(no=Vu(Gf))}const Jf=(...t)=>{const e=qf().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Xf(r);if(!s)return;const i=e._component;!H(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Yf(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Yf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Xf(t){return ue(t)?document.querySelector(t):t}const Gr=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Qf={};function Zf(t,e){const n=Su("router-view");return Ct(),nc(n)}const ed=Gr(Qf,[["render",Zf]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Xt=typeof document<"u";function cc(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function td(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&cc(t.default)}const X=Object.assign;function us(t,e){const n={};for(const r in e){const s=e[r];n[r]=Fe(s)?s.map(t):t(s)}return n}const Pn=()=>{},Fe=Array.isArray,lc=/#/g,nd=/&/g,rd=/\//g,sd=/=/g,id=/\?/g,uc=/\+/g,od=/%5B/g,ad=/%5D/g,fc=/%5E/g,cd=/%60/g,dc=/%7B/g,ld=/%7C/g,hc=/%7D/g,ud=/%20/g;function ci(t){return encodeURI(""+t).replace(ld,"|").replace(od,"[").replace(ad,"]")}function fd(t){return ci(t).replace(dc,"{").replace(hc,"}").replace(fc,"^")}function Os(t){return ci(t).replace(uc,"%2B").replace(ud,"+").replace(lc,"%23").replace(nd,"%26").replace(cd,"`").replace(dc,"{").replace(hc,"}").replace(fc,"^")}function dd(t){return Os(t).replace(sd,"%3D")}function hd(t){return ci(t).replace(lc,"%23").replace(id,"%3F")}function pd(t){return t==null?"":hd(t).replace(rd,"%2F")}function $n(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const gd=/\/$/,md=t=>t.replace(gd,"");function fs(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=bd(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:$n(o)}}function _d(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ro(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function vd(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&un(e.matched[r],n.matched[s])&&pc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function un(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function pc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!yd(t[n],e[n]))return!1;return!0}function yd(t,e){return Fe(t)?so(t,e):Fe(e)?so(e,t):t===e}function so(t,e){return Fe(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function bd(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const _t={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Hn;(function(t){t.pop="pop",t.push="push"})(Hn||(Hn={}));var On;(function(t){t.back="back",t.forward="forward",t.unknown=""})(On||(On={}));function wd(t){if(!t)if(Xt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),md(t)}const Id=/^[^#]+#/;function Ed(t,e){return t.replace(Id,"#")+e}function Sd(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const qr=()=>({left:window.scrollX,top:window.scrollY});function Td(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Sd(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function io(t,e){return(history.state?history.state.position-e:-1)+t}const ks=new Map;function Cd(t,e){ks.set(t,e)}function Ad(t){const e=ks.get(t);return ks.delete(t),e}let Rd=()=>location.protocol+"//"+location.host;function gc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),ro(c,"")}return ro(n,t)+r+s}function Pd(t,e,n,r){let s=[],i=[],o=null;const a=({state:h})=>{const g=gc(t,location),I=n.value,R=e.value;let U=0;if(h){if(n.value=g,e.value=h,o&&o===I){o=null;return}U=R?h.position-R.position:0}else r(g);s.forEach(D=>{D(n.value,I,{delta:U,type:Hn.pop,direction:U?U>0?On.forward:On.back:On.unknown})})};function c(){o=n.value}function u(h){s.push(h);const g=()=>{const I=s.indexOf(h);I>-1&&s.splice(I,1)};return i.push(g),g}function l(){const{history:h}=window;h.state&&h.replaceState(X({},h.state,{scroll:qr()}),"")}function d(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:c,listen:u,destroy:d}}function oo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?qr():null}}function Od(t){const{history:e,location:n}=window,r={value:gc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const d=t.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:Rd()+t+c;try{e[l?"replaceState":"pushState"](u,"",h),s.value=u}catch(g){console.error(g),n[l?"replace":"assign"](h)}}function o(c,u){const l=X({},e.state,oo(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,l,!0),r.value=c}function a(c,u){const l=X({},s.value,e.state,{forward:c,scroll:qr()});i(l.current,l,!0);const d=X({},oo(r.value,c,null),{position:l.position+1},u);i(c,d,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function kd(t){t=wd(t);const e=Od(t),n=Pd(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=X({location:"",base:t,go:r,createHref:Ed.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function xd(t){return typeof t=="string"||t&&typeof t=="object"}function mc(t){return typeof t=="string"||typeof t=="symbol"}const _c=Symbol("");var ao;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ao||(ao={}));function fn(t,e){return X(new Error,{type:t,[_c]:!0},e)}function tt(t,e){return t instanceof Error&&_c in t&&(e==null||!!(t.type&e))}const co="[^/]+?",Dd={sensitive:!1,strict:!1,start:!0,end:!0},Nd=/[.+*?^${}()[\]/\\]/g;function Md(t,e){const n=X({},Dd,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const h=u[d];let g=40+(n.sensitive?.25:0);if(h.type===0)d||(s+="/"),s+=h.value.replace(Nd,"\\$&"),g+=40;else if(h.type===1){const{value:I,repeatable:R,optional:U,regexp:D}=h;i.push({name:I,repeatable:R,optional:U});const O=D||co;if(O!==co){g+=10;try{new RegExp(`(${O})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${I}" (${O}): `+k.message)}}let x=R?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;d||(x=U&&u.length<2?`(?:/${x})`:"/"+x),U&&(x+="?"),s+=x,g+=20,U&&(g+=-8),R&&(g+=-20),O===".*"&&(g+=-50)}l.push(g)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const l=u.match(o),d={};if(!l)return null;for(let h=1;h<l.length;h++){const g=l[h]||"",I=i[h-1];d[I.name]=g&&I.repeatable?g.split("/"):g}return d}function c(u){let l="",d=!1;for(const h of t){(!d||!l.endsWith("/"))&&(l+="/"),d=!1;for(const g of h)if(g.type===0)l+=g.value;else if(g.type===1){const{value:I,repeatable:R,optional:U}=g,D=I in u?u[I]:"";if(Fe(D)&&!R)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const O=Fe(D)?D.join("/"):D;if(!O)if(U)h.length<2&&(l.endsWith("/")?l=l.slice(0,-1):d=!0);else throw new Error(`Missing required param "${I}"`);l+=O}}return l||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Ld(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function vc(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Ld(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(lo(r))return 1;if(lo(s))return-1}return s.length-r.length}function lo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Ud={type:0,value:""},Fd=/[a-zA-Z0-9_]/;function Bd(t){if(!t)return[[]];if(t==="/")return[[Ud]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",l="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function h(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&d(),o()):c===":"?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:Fd.test(c)?h():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function $d(t,e,n){const r=Md(Bd(t.path),n),s=X(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Hd(t,e){const n=[],r=new Map;e=po({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,h,g){const I=!g,R=fo(d);R.aliasOf=g&&g.record;const U=po(e,d),D=[R];if("alias"in d){const k=typeof d.alias=="string"?[d.alias]:d.alias;for(const j of k)D.push(fo(X({},R,{components:g?g.record.components:R.components,path:j,aliasOf:g?g.record:R})))}let O,x;for(const k of D){const{path:j}=k;if(h&&j[0]!=="/"){const le=h.record.path,J=le[le.length-1]==="/"?"":"/";k.path=h.record.path+(j&&J+j)}if(O=$d(k,h,U),g?g.alias.push(O):(x=x||O,x!==O&&x.alias.push(O),I&&d.name&&!ho(O)&&o(d.name)),yc(O)&&c(O),R.children){const le=R.children;for(let J=0;J<le.length;J++)i(le[J],O,g&&g.children[J])}g=g||O}return x?()=>{o(x)}:Pn}function o(d){if(mc(d)){const h=r.get(d);h&&(r.delete(d),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(d);h>-1&&(n.splice(h,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function c(d){const h=Wd(d,n);n.splice(h,0,d),d.record.name&&!ho(d)&&r.set(d.record.name,d)}function u(d,h){let g,I={},R,U;if("name"in d&&d.name){if(g=r.get(d.name),!g)throw fn(1,{location:d});U=g.record.name,I=X(uo(h.params,g.keys.filter(x=>!x.optional).concat(g.parent?g.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),d.params&&uo(d.params,g.keys.map(x=>x.name))),R=g.stringify(I)}else if(d.path!=null)R=d.path,g=n.find(x=>x.re.test(R)),g&&(I=g.parse(R),U=g.record.name);else{if(g=h.name?r.get(h.name):n.find(x=>x.re.test(h.path)),!g)throw fn(1,{location:d,currentLocation:h});U=g.record.name,I=X({},h.params,d.params),R=g.stringify(I)}const D=[];let O=g;for(;O;)D.unshift(O.record),O=O.parent;return{name:U,path:R,params:I,matched:D,meta:Vd(D)}}t.forEach(d=>i(d));function l(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:l,getRoutes:a,getRecordMatcher:s}}function uo(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function fo(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:jd(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function jd(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function ho(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Vd(t){return t.reduce((e,n)=>X(e,n.meta),{})}function po(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Wd(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;vc(t,e[i])<0?r=i:n=i+1}const s=Kd(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Kd(t){let e=t;for(;e=e.parent;)if(yc(e)&&vc(t,e)===0)return e}function yc({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function zd(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(uc," "),o=i.indexOf("="),a=$n(o<0?i:i.slice(0,o)),c=o<0?null:$n(i.slice(o+1));if(a in e){let u=e[a];Fe(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function go(t){let e="";for(let n in t){const r=t[n];if(n=dd(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Fe(r)?r.map(i=>i&&Os(i)):[r&&Os(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Gd(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Fe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const qd=Symbol(""),mo=Symbol(""),Jr=Symbol(""),bc=Symbol(""),xs=Symbol("");function bn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function It(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const u=h=>{h===!1?c(fn(4,{from:n,to:e})):h instanceof Error?c(h):xd(h)?c(fn(2,{from:e,to:h})):(o&&r.enterCallbacks[s]===o&&typeof h=="function"&&o.push(h),a())},l=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(l);t.length<3&&(d=d.then(u)),d.catch(h=>c(h))})}function ds(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(cc(c)){const l=(c.__vccOpts||c)[e];l&&i.push(It(l,n,r,o,a,s))}else{let u=c();i.push(()=>u.then(l=>{if(!l)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=td(l)?l.default:l;o.mods[a]=l,o.components[a]=d;const g=(d.__vccOpts||d)[e];return g&&It(g,n,r,o,a,s)()}))}}return i}function _o(t){const e=Le(Jr),n=Le(bc),r=Ee(()=>{const c=tn(t.to);return e.resolve(c)}),s=Ee(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],d=n.matched;if(!l||!d.length)return-1;const h=d.findIndex(un.bind(null,l));if(h>-1)return h;const g=vo(c[u-2]);return u>1&&vo(l)===g&&d[d.length-1].path!==g?d.findIndex(un.bind(null,c[u-2])):h}),i=Ee(()=>s.value>-1&&Zd(n.params,r.value.params)),o=Ee(()=>s.value>-1&&s.value===n.matched.length-1&&pc(n.params,r.value.params));function a(c={}){if(Qd(c)){const u=e[tn(t.replace)?"replace":"push"](tn(t.to)).catch(Pn);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Ee(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function Jd(t){return t.length===1?t[0]:t}const Yd=xa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:_o,setup(t,{slots:e}){const n=gn(_o(t)),{options:r}=Le(Jr),s=Ee(()=>({[yo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[yo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&Jd(e.default(n));return t.custom?i:oc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Xd=Yd;function Qd(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Zd(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Fe(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function vo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const yo=(t,e,n)=>t??e??n,eh=xa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Le(xs),s=Ee(()=>t.route||r.value),i=Le(mo,0),o=Ee(()=>{let u=tn(i);const{matched:l}=s.value;let d;for(;(d=l[u])&&!d.components;)u++;return u}),a=Ee(()=>s.value.matched[o.value]);or(mo,Ee(()=>o.value+1)),or(qd,a),or(xs,s);const c=lt();return An(()=>[c.value,a.value,t.name],([u,l,d],[h,g,I])=>{l&&(l.instances[d]=u,g&&g!==l&&u&&u===h&&(l.leaveGuards.size||(l.leaveGuards=g.leaveGuards),l.updateGuards.size||(l.updateGuards=g.updateGuards))),u&&l&&(!g||!un(l,g)||!h)&&(l.enterCallbacks[d]||[]).forEach(R=>R(u))},{flush:"post"}),()=>{const u=s.value,l=t.name,d=a.value,h=d&&d.components[l];if(!h)return bo(n.default,{Component:h,route:u});const g=d.props[l],I=g?g===!0?u.params:typeof g=="function"?g(u):g:null,U=oc(h,X({},I,e,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(d.instances[l]=null)},ref:c}));return bo(n.default,{Component:U,route:u})||U}}});function bo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const th=eh;function nh(t){const e=Hd(t.routes,t),n=t.parseQuery||zd,r=t.stringifyQuery||go,s=t.history,i=bn(),o=bn(),a=bn(),c=Jl(_t);let u=_t;Xt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=us.bind(null,v=>""+v),d=us.bind(null,pd),h=us.bind(null,$n);function g(v,P){let C,N;return mc(v)?(C=e.getRecordMatcher(v),N=P):N=v,e.addRoute(N,C)}function I(v){const P=e.getRecordMatcher(v);P&&e.removeRoute(P)}function R(){return e.getRoutes().map(v=>v.record)}function U(v){return!!e.getRecordMatcher(v)}function D(v,P){if(P=X({},P||c.value),typeof v=="string"){const m=fs(n,v,P.path),_=e.resolve({path:m.path},P),b=s.createHref(m.fullPath);return X(m,_,{params:h(_.params),hash:$n(m.hash),redirectedFrom:void 0,href:b})}let C;if(v.path!=null)C=X({},v,{path:fs(n,v.path,P.path).path});else{const m=X({},v.params);for(const _ in m)m[_]==null&&delete m[_];C=X({},v,{params:d(m)}),P.params=d(P.params)}const N=e.resolve(C,P),ee=v.hash||"";N.params=l(h(N.params));const f=_d(r,X({},v,{hash:fd(ee),path:N.path})),p=s.createHref(f);return X({fullPath:f,hash:ee,query:r===go?Gd(v.query):v.query||{}},N,{redirectedFrom:void 0,href:p})}function O(v){return typeof v=="string"?fs(n,v,c.value.path):X({},v)}function x(v,P){if(u!==v)return fn(8,{from:P,to:v})}function k(v){return J(v)}function j(v){return k(X(O(v),{replace:!0}))}function le(v){const P=v.matched[v.matched.length-1];if(P&&P.redirect){const{redirect:C}=P;let N=typeof C=="function"?C(v):C;return typeof N=="string"&&(N=N.includes("?")||N.includes("#")?N=O(N):{path:N},N.params={}),X({query:v.query,hash:v.hash,params:N.path!=null?{}:v.params},N)}}function J(v,P){const C=u=D(v),N=c.value,ee=v.state,f=v.force,p=v.replace===!0,m=le(C);if(m)return J(X(O(m),{state:typeof m=="object"?X({},ee,m.state):ee,force:f,replace:p}),P||C);const _=C;_.redirectedFrom=P;let b;return!f&&vd(r,N,C)&&(b=fn(16,{to:_,from:N}),Be(N,N,!0,!1)),(b?Promise.resolve(b):oe(_,N)).catch(y=>tt(y)?tt(y,2)?y:mt(y):Y(y,_,N)).then(y=>{if(y){if(tt(y,2))return J(X({replace:p},O(y.to),{state:typeof y.to=="object"?X({},ee,y.to.state):ee,force:f}),P||_)}else y=Te(_,N,!0,p,ee);return me(_,N,y),y})}function z(v,P){const C=x(v,P);return C?Promise.reject(C):Promise.resolve()}function W(v){const P=Gt.values().next().value;return P&&typeof P.runWithContext=="function"?P.runWithContext(v):v()}function oe(v,P){let C;const[N,ee,f]=rh(v,P);C=ds(N.reverse(),"beforeRouteLeave",v,P);for(const m of N)m.leaveGuards.forEach(_=>{C.push(It(_,v,P))});const p=z.bind(null,v,P);return C.push(p),ke(C).then(()=>{C=[];for(const m of i.list())C.push(It(m,v,P));return C.push(p),ke(C)}).then(()=>{C=ds(ee,"beforeRouteUpdate",v,P);for(const m of ee)m.updateGuards.forEach(_=>{C.push(It(_,v,P))});return C.push(p),ke(C)}).then(()=>{C=[];for(const m of f)if(m.beforeEnter)if(Fe(m.beforeEnter))for(const _ of m.beforeEnter)C.push(It(_,v,P));else C.push(It(m.beforeEnter,v,P));return C.push(p),ke(C)}).then(()=>(v.matched.forEach(m=>m.enterCallbacks={}),C=ds(f,"beforeRouteEnter",v,P,W),C.push(p),ke(C))).then(()=>{C=[];for(const m of o.list())C.push(It(m,v,P));return C.push(p),ke(C)}).catch(m=>tt(m,8)?m:Promise.reject(m))}function me(v,P,C){a.list().forEach(N=>W(()=>N(v,P,C)))}function Te(v,P,C,N,ee){const f=x(v,P);if(f)return f;const p=P===_t,m=Xt?history.state:{};C&&(N||p?s.replace(v.fullPath,X({scroll:p&&m&&m.scroll},ee)):s.push(v.fullPath,ee)),c.value=v,Be(v,P,C,p),mt()}let be;function Nt(){be||(be=s.listen((v,P,C)=>{if(!er.listening)return;const N=D(v),ee=le(N);if(ee){J(X(ee,{replace:!0,force:!0}),N).catch(Pn);return}u=N;const f=c.value;Xt&&Cd(io(f.fullPath,C.delta),qr()),oe(N,f).catch(p=>tt(p,12)?p:tt(p,2)?(J(X(O(p.to),{force:!0}),N).then(m=>{tt(m,20)&&!C.delta&&C.type===Hn.pop&&s.go(-1,!1)}).catch(Pn),Promise.reject()):(C.delta&&s.go(-C.delta,!1),Y(p,N,f))).then(p=>{p=p||Te(N,f,!1),p&&(C.delta&&!tt(p,8)?s.go(-C.delta,!1):C.type===Hn.pop&&tt(p,20)&&s.go(-1,!1)),me(N,f,p)}).catch(Pn)}))}let gt=bn(),ae=bn(),V;function Y(v,P,C){mt(v);const N=ae.list();return N.length?N.forEach(ee=>ee(v,P,C)):console.error(v),Promise.reject(v)}function Ze(){return V&&c.value!==_t?Promise.resolve():new Promise((v,P)=>{gt.add([v,P])})}function mt(v){return V||(V=!v,Nt(),gt.list().forEach(([P,C])=>v?C(v):P()),gt.reset()),v}function Be(v,P,C,N){const{scrollBehavior:ee}=t;if(!Xt||!ee)return Promise.resolve();const f=!C&&Ad(io(v.fullPath,0))||(N||!C)&&history.state&&history.state.scroll||null;return jr().then(()=>ee(v,P,f)).then(p=>p&&Td(p)).catch(p=>Y(p,v,P))}const we=v=>s.go(v);let zt;const Gt=new Set,er={currentRoute:c,listening:!0,addRoute:g,removeRoute:I,clearRoutes:e.clearRoutes,hasRoute:U,getRoutes:R,resolve:D,options:t,push:k,replace:j,go:we,back:()=>we(-1),forward:()=>we(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ae.add,isReady:Ze,install(v){const P=this;v.component("RouterLink",Xd),v.component("RouterView",th),v.config.globalProperties.$router=P,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>tn(c)}),Xt&&!zt&&c.value===_t&&(zt=!0,k(s.location).catch(ee=>{}));const C={};for(const ee in _t)Object.defineProperty(C,ee,{get:()=>c.value[ee],enumerable:!0});v.provide(Jr,P),v.provide(bc,Ia(C)),v.provide(xs,c);const N=v.unmount;Gt.add(v),v.unmount=function(){Gt.delete(v),Gt.size<1&&(u=_t,be&&be(),be=null,c.value=_t,zt=!1,V=!1),N()}}};function ke(v){return v.reduce((P,C)=>P.then(()=>W(C)),Promise.resolve())}return er}function rh(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>un(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>un(u,c))||s.push(c))}return[n,r,s]}function wc(){return Le(Jr)}/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Ic;const Yr=t=>Ic=t,Ec=Symbol();function Ds(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var kn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(kn||(kn={}));function sh(){const t=oa(!0),e=t.run(()=>lt({}));let n=[],r=[];const s=ni({install(i){Yr(s),s._a=i,i.provide(Ec,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Sc=()=>{};function wo(t,e,n,r=Sc){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&aa()&&Pl(s),s}function Jt(t,...e){t.slice().forEach(n=>{n(...e)})}const ih=t=>t(),Io=Symbol(),hs=Symbol();function Ns(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Ds(s)&&Ds(r)&&t.hasOwnProperty(n)&&!ce(r)&&!ct(r)?t[n]=Ns(s,r):t[n]=r}return t}const oh=Symbol();function ah(t){return!Ds(t)||!Object.prototype.hasOwnProperty.call(t,oh)}const{assign:yt}=Object;function ch(t){return!!(ce(t)&&t.effect)}function lh(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function u(){a||(n.state.value[t]=s?s():{});const l=Ql(n.state.value[t]);return yt(l,i,Object.keys(o||{}).reduce((d,h)=>(d[h]=ni(Ee(()=>{Yr(n);const g=n._s.get(t);return o[h].call(g,g)})),d),{}))}return c=Tc(t,u,e,n,r,!0),c}function Tc(t,e,n={},r,s,i){let o;const a=yt({actions:{}},n),c={deep:!0};let u,l,d=[],h=[],g;const I=r.state.value[t];!i&&!I&&(r.state.value[t]={}),lt({});let R;function U(z){let W;u=l=!1,typeof z=="function"?(z(r.state.value[t]),W={type:kn.patchFunction,storeId:t,events:g}):(Ns(r.state.value[t],z),W={type:kn.patchObject,payload:z,storeId:t,events:g});const oe=R=Symbol();jr().then(()=>{R===oe&&(u=!0)}),l=!0,Jt(d,W,r.state.value[t])}const D=i?function(){const{state:W}=n,oe=W?W():{};this.$patch(me=>{yt(me,oe)})}:Sc;function O(){o.stop(),d=[],h=[],r._s.delete(t)}const x=(z,W="")=>{if(Io in z)return z[hs]=W,z;const oe=function(){Yr(r);const me=Array.from(arguments),Te=[],be=[];function Nt(V){Te.push(V)}function gt(V){be.push(V)}Jt(h,{args:me,name:oe[hs],store:j,after:Nt,onError:gt});let ae;try{ae=z.apply(this&&this.$id===t?this:j,me)}catch(V){throw Jt(be,V),V}return ae instanceof Promise?ae.then(V=>(Jt(Te,V),V)).catch(V=>(Jt(be,V),Promise.reject(V))):(Jt(Te,ae),ae)};return oe[Io]=!0,oe[hs]=W,oe},k={_p:r,$id:t,$onAction:wo.bind(null,h),$patch:U,$reset:D,$subscribe(z,W={}){const oe=wo(d,z,W.detached,()=>me()),me=o.run(()=>An(()=>r.state.value[t],Te=>{(W.flush==="sync"?l:u)&&z({storeId:t,type:kn.direct,events:g},Te)},yt({},c,W)));return oe},$dispose:O},j=gn(k);r._s.set(t,j);const J=(r._a&&r._a.runWithContext||ih)(()=>r._e.run(()=>(o=oa()).run(()=>e({action:x}))));for(const z in J){const W=J[z];if(ce(W)&&!ch(W)||ct(W))i||(I&&ah(W)&&(ce(W)?W.value=I[z]:Ns(W,I[z])),r.state.value[t][z]=W);else if(typeof W=="function"){const oe=x(W,z);J[z]=oe,a.actions[z]=W}}return yt(j,J),yt(q(j),J),Object.defineProperty(j,"$state",{get:()=>r.state.value[t],set:z=>{U(W=>{yt(W,z)})}}),r._p.forEach(z=>{yt(j,o.run(()=>z({store:j,app:r._a,pinia:r,options:a})))}),I&&i&&n.hydrate&&n.hydrate(j.$state,I),u=!0,l=!0,j}/*! #__NO_SIDE_EFFECTS__ */function uh(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,a){const c=Lu();return o=o||(c?Le(Ec,null):null),o&&Yr(o),o=Ic,o._s.has(t)||(s?Tc(t,e,r,o):lh(t,r,o)),o._s.get(t)}return i.$id=t,i}function fh(t){const e=q(t),n={};for(const r in e){const s=e[r];s.effect?n[r]=Ee({get:()=>t[r],set(i){t[r]=i}}):(ce(s)||ct(s))&&(n[r]=tu(t,r))}return n}const dh=()=>{};var Eo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},hh=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ac={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,l=i>>2,d=(i&3)<<4|a>>4;let h=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(h=64)),r.push(n[l],n[d],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||d==null)throw new ph;const h=i<<2|a>>4;if(r.push(h),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const I=u<<6&192|d;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ph extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gh=function(t){const e=Cc(t);return Ac.encodeByteArray(e,!0)},Rc=function(t){return gh(t).replace(/\./g,"")},Pc=function(t){try{return Ac.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h=()=>mh().__FIREBASE_DEFAULTS__,vh=()=>{if(typeof process>"u"||typeof Eo>"u")return;const t=Eo.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yh=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pc(t[1]);return e&&JSON.parse(e)},li=()=>{try{return dh()||_h()||vh()||yh()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bh=t=>{var e,n;return(n=(e=li())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Oc=()=>{var t;return(t=li())===null||t===void 0?void 0:t.config},kc=t=>{var e;return(e=li())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(t){return t.endsWith(".cloudworkstations.dev")}async function Ih(t){return(await fetch(t,{credentials:"include"})).ok}const xn={};function Eh(){const t={prod:[],emulator:[]};for(const e of Object.keys(xn))xn[e]?t.emulator.push(e):t.prod.push(e);return t}function Sh(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let So=!1;function Th(t,e){if(typeof window>"u"||typeof document>"u"||!ui(window.location.host)||xn[t]===e||xn[t]||So)return;xn[t]=e;function n(h){return`__firebase__banner__${h}`}const r="__firebase__banner",i=Eh().prod.length>0;function o(){const h=document.getElementById(r);h&&h.remove()}function a(h){h.style.display="flex",h.style.background="#7faaf0",h.style.position="fixed",h.style.bottom="5px",h.style.left="5px",h.style.padding=".5em",h.style.borderRadius="5px",h.style.alignItems="center"}function c(h,g){h.setAttribute("width","24"),h.setAttribute("id",g),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px"}function u(){const h=document.createElement("span");return h.style.cursor="pointer",h.style.marginLeft="16px",h.style.fontSize="24px",h.innerHTML=" &times;",h.onclick=()=>{So=!0,o()},h}function l(h,g){h.setAttribute("id",g),h.innerText="Learn more",h.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",h.setAttribute("target","__blank"),h.style.paddingLeft="5px",h.style.textDecoration="underline"}function d(){const h=Sh(r),g=n("text"),I=document.getElementById(g)||document.createElement("span"),R=n("learnmore"),U=document.getElementById(R)||document.createElement("a"),D=n("preprendIcon"),O=document.getElementById(D)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.created){const x=h.element;a(x),l(U,R);const k=u();c(O,D),x.append(O,I,U,k),document.body.appendChild(x)}i?(I.innerText="Preview backend disconnected.",O.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(O.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,I.innerText="Preview backend running in this workspace."),I.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ch(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye())}function Ah(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Rh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ph(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Oh(){const t=ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function kh(){try{return typeof indexedDB=="object"}catch{return!1}}function xh(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh="FirebaseError";class Dt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Dh,Object.setPrototypeOf(this,Dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qn.prototype.create)}}class qn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Nh(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Dt(s,a,r)}}function Nh(t,e){return t.replace(Mh,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Mh=/\{\$([^}]+)}/g;function Lh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function dn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(To(i)&&To(o)){if(!dn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function To(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Uh(t,e){const n=new Fh(t,e);return n.subscribe.bind(n)}class Fh{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Bh(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ps),s.error===void 0&&(s.error=ps),s.complete===void 0&&(s.complete=ps);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ps(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t){return t&&t._delegate?t._delegate:t}class hn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new wh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jh(e))try{this.getOrInitializeService({instanceIdentifier:Ft})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ft){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ft){return this.instances.has(e)}getOptions(e=Ft){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Hh(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ft){return this.component?this.component.multipleInstances?e:Ft:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hh(t){return t===Ft?void 0:t}function jh(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $h(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const Wh={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},Kh=te.INFO,zh={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Gh=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=zh[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xc{constructor(e){this.name=e,this._logLevel=Kh,this._logHandler=Gh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Wh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const qh=(t,e)=>e.some(n=>t instanceof n);let Co,Ao;function Jh(){return Co||(Co=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yh(){return Ao||(Ao=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dc=new WeakMap,Ms=new WeakMap,Nc=new WeakMap,gs=new WeakMap,fi=new WeakMap;function Xh(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Rt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Dc.set(n,t)}).catch(()=>{}),fi.set(e,t),e}function Qh(t){if(Ms.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ms.set(t,e)}let Ls={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ms.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Nc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Zh(t){Ls=t(Ls)}function ep(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ms(this),e,...n);return Nc.set(r,e.sort?e.sort():[e]),Rt(r)}:Yh().includes(t)?function(...e){return t.apply(ms(this),e),Rt(Dc.get(this))}:function(...e){return Rt(t.apply(ms(this),e))}}function tp(t){return typeof t=="function"?ep(t):(t instanceof IDBTransaction&&Qh(t),qh(t,Jh())?new Proxy(t,Ls):t)}function Rt(t){if(t instanceof IDBRequest)return Xh(t);if(gs.has(t))return gs.get(t);const e=tp(t);return e!==t&&(gs.set(t,e),fi.set(e,t)),e}const ms=t=>fi.get(t);function np(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Rt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Rt(o.result),c.oldVersion,c.newVersion,Rt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const rp=["get","getKey","getAll","getAllKeys","count"],sp=["put","add","delete","clear"],_s=new Map;function Ro(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_s.get(e))return _s.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=sp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||rp.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return _s.set(e,i),i}Zh(t=>({...t,get:(e,n,r)=>Ro(e,n)||t.get(e,n,r),has:(e,n)=>!!Ro(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(op(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function op(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Us="@firebase/app",Po="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt=new xc("@firebase/app"),ap="@firebase/app-compat",cp="@firebase/analytics-compat",lp="@firebase/analytics",up="@firebase/app-check-compat",fp="@firebase/app-check",dp="@firebase/auth",hp="@firebase/auth-compat",pp="@firebase/database",gp="@firebase/data-connect",mp="@firebase/database-compat",_p="@firebase/functions",vp="@firebase/functions-compat",yp="@firebase/installations",bp="@firebase/installations-compat",wp="@firebase/messaging",Ip="@firebase/messaging-compat",Ep="@firebase/performance",Sp="@firebase/performance-compat",Tp="@firebase/remote-config",Cp="@firebase/remote-config-compat",Ap="@firebase/storage",Rp="@firebase/storage-compat",Pp="@firebase/firestore",Op="@firebase/ai",kp="@firebase/firestore-compat",xp="firebase",Dp="11.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs="[DEFAULT]",Np={[Us]:"fire-core",[ap]:"fire-core-compat",[lp]:"fire-analytics",[cp]:"fire-analytics-compat",[fp]:"fire-app-check",[up]:"fire-app-check-compat",[dp]:"fire-auth",[hp]:"fire-auth-compat",[pp]:"fire-rtdb",[gp]:"fire-data-connect",[mp]:"fire-rtdb-compat",[_p]:"fire-fn",[vp]:"fire-fn-compat",[yp]:"fire-iid",[bp]:"fire-iid-compat",[wp]:"fire-fcm",[Ip]:"fire-fcm-compat",[Ep]:"fire-perf",[Sp]:"fire-perf-compat",[Tp]:"fire-rc",[Cp]:"fire-rc-compat",[Ap]:"fire-gcs",[Rp]:"fire-gcs-compat",[Pp]:"fire-fst",[kp]:"fire-fst-compat",[Op]:"fire-vertex","fire-js":"fire-js",[xp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new Map,Mp=new Map,Bs=new Map;function Oo(t,e){try{t.container.addComponent(e)}catch(n){dt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function jn(t){const e=t.name;if(Bs.has(e))return dt.debug(`There were multiple attempts to register component ${e}.`),!1;Bs.set(e,t);for(const n of Tr.values())Oo(n,t);for(const n of Mp.values())Oo(n,t);return!0}function Mc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ge(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pt=new qn("app","Firebase",Lp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=Dp;function Lc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Fs,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Pt.create("bad-app-name",{appName:String(s)});if(n||(n=Oc()),!n)throw Pt.create("no-options");const i=Tr.get(s);if(i){if(dn(n,i.options)&&dn(r,i.config))return i;throw Pt.create("duplicate-app",{appName:s})}const o=new Vh(s);for(const c of Bs.values())o.addComponent(c);const a=new Up(n,r,o);return Tr.set(s,a),a}function Fp(t=Fs){const e=Tr.get(t);if(!e&&t===Fs&&Oc())return Lc();if(!e)throw Pt.create("no-app",{appName:t});return e}function sn(t,e,n){var r;let s=(r=Np[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dt.warn(a.join(" "));return}jn(new hn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp="firebase-heartbeat-database",$p=1,Vn="firebase-heartbeat-store";let vs=null;function Uc(){return vs||(vs=np(Bp,$p,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Vn)}catch(n){console.warn(n)}}}}).catch(t=>{throw Pt.create("idb-open",{originalErrorMessage:t.message})})),vs}async function Hp(t){try{const n=(await Uc()).transaction(Vn),r=await n.objectStore(Vn).get(Fc(t));return await n.done,r}catch(e){if(e instanceof Dt)dt.warn(e.message);else{const n=Pt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dt.warn(n.message)}}}async function ko(t,e){try{const r=(await Uc()).transaction(Vn,"readwrite");await r.objectStore(Vn).put(e,Fc(t)),await r.done}catch(n){if(n instanceof Dt)dt.warn(n.message);else{const r=Pt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});dt.warn(r.message)}}}function Fc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp=1024,Vp=30;class Wp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zp(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=xo();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Vp){const o=Gp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){dt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=xo(),{heartbeatsToSend:r,unsentEntries:s}=Kp(this._heartbeatsCache.heartbeats),i=Rc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return dt.warn(n),""}}}function xo(){return new Date().toISOString().substring(0,10)}function Kp(t,e=jp){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Do(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Do(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kh()?xh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Hp(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ko(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ko(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Do(t){return Rc(JSON.stringify({version:2,heartbeats:t})).length}function Gp(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(t){jn(new hn("platform-logger",e=>new ip(e),"PRIVATE")),jn(new hn("heartbeat",e=>new Wp(e),"PRIVATE")),sn(Us,Po,t),sn(Us,Po,"esm2017"),sn("fire-js","")}qp("");function di(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Bc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Jp=Bc,$c=new qn("auth","Firebase",Bc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=new xc("@firebase/auth");function Yp(t,...e){Cr.logLevel<=te.WARN&&Cr.warn(`Auth (${Yn}): ${t}`,...e)}function lr(t,...e){Cr.logLevel<=te.ERROR&&Cr.error(`Auth (${Yn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t,...e){throw pi(t,...e)}function Ue(t,...e){return pi(t,...e)}function hi(t,e,n){const r=Object.assign(Object.assign({},Jp()),{[e]:n});return new qn("auth","Firebase",r).create(e,{appName:t.name})}function Vt(t){return hi(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xp(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Qe(t,"argument-error"),hi(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function pi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return $c.create(t,...e)}function B(t,e,...n){if(!t)throw pi(e,...n)}function ot(t){const e="INTERNAL ASSERTION FAILED: "+t;throw lr(e),new Error(e)}function ht(t,e){t||ot(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Qp(){return No()==="http:"||No()==="https:"}function No(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Qp()||Rh()||"connection"in navigator)?navigator.onLine:!0}function eg(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n){this.shortDelay=e,this.longDelay=n,ht(n>e,"Short delay should be less than long delay!"),this.isMobile=Ch()||Ph()}get(){return Zp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(t,e){ht(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],rg=new Xn(3e4,6e4);function mi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function mn(t,e,n,r,s={}){return jc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Jn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return Ah()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&ui(t.emulatorConfig.host)&&(u.credentials="include"),Hc.fetch()(await Vc(t,t.config.apiHost,n,a),u)})}async function jc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},tg),e);try{const s=new ig(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw sr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw sr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw sr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw sr(t,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw hi(t,l,u);Qe(t,l)}}catch(s){if(s instanceof Dt)throw s;Qe(t,"network-request-failed",{message:String(s)})}}async function sg(t,e,n,r,s={}){const i=await mn(t,e,n,r,s);return"mfaPendingCredential"in i&&Qe(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Vc(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?gi(t.config,s):`${t.config.apiScheme}://${s}`;return ng.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class ig{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ue(this.auth,"network-request-failed")),rg.get())})}}function sr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ue(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function og(t,e){return mn(t,"POST","/v1/accounts:delete",e)}async function Ar(t,e){return mn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ag(t,e=!1){const n=Kt(t),r=await n.getIdToken(e),s=_i(r);B(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Dn(ys(s.auth_time)),issuedAtTime:Dn(ys(s.iat)),expirationTime:Dn(ys(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ys(t){return Number(t)*1e3}function _i(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return lr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Pc(n);return s?JSON.parse(s):(lr("Failed to decode base64 JWT payload"),null)}catch(s){return lr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Mo(t){const e=_i(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Dt&&cg(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function cg({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Dn(this.lastLoginAt),this.creationTime=Dn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Wn(t,Ar(n,{idToken:r}));B(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Wc(i.providerUserInfo):[],a=fg(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Hs(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,d)}async function ug(t){const e=Kt(t);await Rr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fg(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Wc(t){return t.map(e=>{var{providerId:n}=e,r=di(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dg(t,e){const n=await jc(t,{},async()=>{const r=Jn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Vc(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Hc.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function hg(t,e){return mn(t,"POST","/v2/accounts:revokeToken",mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Mo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){B(e.length!==0,"internal-error");const n=Mo(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await dg(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new on;return r&&(B(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(B(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(B(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new on,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ne{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=di(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Hs(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Wn(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ag(this,e)}reload(){return ug(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ne(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Rr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ge(this.auth.app))return Promise.reject(Vt(this.auth));const e=await this.getIdToken();return await Wn(this,og(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,l;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(a=n.tenantId)!==null&&a!==void 0?a:void 0,U=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,D=(u=n.createdAt)!==null&&u!==void 0?u:void 0,O=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:x,emailVerified:k,isAnonymous:j,providerData:le,stsTokenManager:J}=n;B(x&&J,e,"internal-error");const z=on.fromJSON(this.name,J);B(typeof x=="string",e,"internal-error"),vt(d,e.name),vt(h,e.name),B(typeof k=="boolean",e,"internal-error"),B(typeof j=="boolean",e,"internal-error"),vt(g,e.name),vt(I,e.name),vt(R,e.name),vt(U,e.name),vt(D,e.name),vt(O,e.name);const W=new Ne({uid:x,auth:e,email:h,emailVerified:k,displayName:d,isAnonymous:j,photoURL:I,phoneNumber:g,tenantId:R,stsTokenManager:z,createdAt:D,lastLoginAt:O});return le&&Array.isArray(le)&&(W.providerData=le.map(oe=>Object.assign({},oe))),U&&(W._redirectEventId=U),W}static async _fromIdTokenResponse(e,n,r=!1){const s=new on;s.updateFromServerResponse(n);const i=new Ne({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Rr(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];B(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Wc(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new on;a.updateFromIdToken(r);const c=new Ne({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Hs(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=new Map;function at(t){ht(t instanceof Function,"Expected a class definition");let e=Lo.get(t);return e?(ht(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Lo.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Kc.type="NONE";const Uo=Kc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(t,e,n){return`firebase:${t}:${e}:${n}`}class an{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ur(this.userKey,s.apiKey,i),this.fullPersistenceKey=ur("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ar(this.auth,{idToken:e}).catch(()=>{});return n?Ne._fromGetAccountInfoResponse(this.auth,n,e):null}return Ne._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new an(at(Uo),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||at(Uo);const o=ur(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){let d;if(typeof l=="string"){const h=await Ar(e,{idToken:l}).catch(()=>{});if(!h)break;d=await Ne._fromGetAccountInfoResponse(e,h,l)}else d=Ne._fromJSON(e,l);u!==i&&(a=d),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new an(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new an(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Jc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xc(e))return"Blackberry";if(Qc(e))return"Webos";if(Gc(e))return"Safari";if((e.includes("chrome/")||qc(e))&&!e.includes("edge/"))return"Chrome";if(Yc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zc(t=ye()){return/firefox\//i.test(t)}function Gc(t=ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qc(t=ye()){return/crios\//i.test(t)}function Jc(t=ye()){return/iemobile/i.test(t)}function Yc(t=ye()){return/android/i.test(t)}function Xc(t=ye()){return/blackberry/i.test(t)}function Qc(t=ye()){return/webos/i.test(t)}function vi(t=ye()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function pg(t=ye()){var e;return vi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gg(){return Oh()&&document.documentMode===10}function Zc(t=ye()){return vi(t)||Yc(t)||Qc(t)||Xc(t)||/windows phone/i.test(t)||Jc(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(t,e=[]){let n;switch(t){case"Browser":n=Fo(ye());break;case"Worker":n=`${Fo(ye())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Yn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _g(t,e={}){return mn(t,"GET","/v2/passwordPolicy",mi(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=6;class yg{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:vg,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bo(this),this.idTokenSubscription=new Bo(this),this.beforeStateQueue=new mg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$c,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=at(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await an.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ar(this,{idToken:e}),r=await Ne._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ge(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Rr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=eg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ge(this.app))return Promise.reject(Vt(this));const n=e?Kt(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ge(this.app)?Promise.reject(Vt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ge(this.app)?Promise.reject(Vt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(at(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _g(this),n=new yg(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new qn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await hg(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&at(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await an.create(this,[at(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=el(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Ge(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Yp(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Xr(t){return Kt(t)}class Bo{constructor(e){this.auth=e,this.observer=null,this.addObserver=Uh(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wg(t){yi=t}function Ig(t){return yi.loadJS(t)}function Eg(){return yi.gapiScript}function Sg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(t,e){const n=Mc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(dn(i,e??{}))return s;Qe(s,"already-initialized")}return n.initialize({options:e})}function Cg(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(at);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ag(t,e,n){const r=Xr(t);B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=tl(e),{host:o,port:a}=Rg(e),c=a===null?"":`:${a}`,u={url:`${i}//${o}${c}/`},l=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){B(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),B(dn(u,r.config.emulator)&&dn(l,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=l,r.settings.appVerificationDisabledForTesting=!0,ui(o)?(Ih(`${i}//${o}${c}`),Th("Auth",!0)):Pg()}function tl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Rg(t){const e=tl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:$o(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:$o(o)}}}function $o(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Pg(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ot("not implemented")}_getIdTokenResponse(e){return ot("not implemented")}_linkToIdToken(e,n){return ot("not implemented")}_getReauthenticationResolver(e){return ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cn(t,e){return sg(t,"POST","/v1/accounts:signInWithIdp",mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og="http://localhost";class Wt extends nl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=di(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Wt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return cn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,cn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,cn(e,n)}buildRequest(){const e={requestUri:Og,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Jn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends bi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends Qn{constructor(){super("facebook.com")}static credential(e){return Wt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch{return null}}}Et.FACEBOOK_SIGN_IN_METHOD="facebook.com";Et.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends Qn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wt._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return it.credential(n,r)}catch{return null}}}it.GOOGLE_SIGN_IN_METHOD="google.com";it.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends Qn{constructor(){super("github.com")}static credential(e){return Wt._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return St.credential(e.oauthAccessToken)}catch{return null}}}St.GITHUB_SIGN_IN_METHOD="github.com";St.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends Qn{constructor(){super("twitter.com")}static credential(e,n){return Wt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Tt.credential(n,r)}catch{return null}}}Tt.TWITTER_SIGN_IN_METHOD="twitter.com";Tt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ne._fromIdTokenResponse(e,r,s),o=Ho(r);return new pn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ho(r);return new pn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ho(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends Dt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Pr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Pr(e,n,r,s)}}function rl(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Pr._fromErrorAndOperation(t,i,e,r):i})}async function kg(t,e,n=!1){const r=await Wn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return pn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xg(t,e,n=!1){const{auth:r}=t;if(Ge(r.app))return Promise.reject(Vt(r));const s="reauthenticate";try{const i=await Wn(t,rl(r,s,e,t),n);B(i.idToken,r,"internal-error");const o=_i(i.idToken);B(o,r,"internal-error");const{sub:a}=o;return B(t.uid===a,r,"user-mismatch"),pn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Qe(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dg(t,e,n=!1){if(Ge(t.app))return Promise.reject(Vt(t));const r="signIn",s=await rl(t,r,e),i=await pn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function Ng(t,e,n,r){return Kt(t).onIdTokenChanged(e,n,r)}function Mg(t,e,n){return Kt(t).beforeAuthStateChanged(e,n)}function Lg(t,e,n,r){return Kt(t).onAuthStateChanged(e,n,r)}const Or="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Or,"1"),this.storage.removeItem(Or),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=1e3,Fg=10;class il extends sl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Zc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);gg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Fg):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ug)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}il.type="LOCAL";const Bg=il;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol extends sl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ol.type="SESSION";const al=ol;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Qr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await $g(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=wi("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return window}function jg(t){Je().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(){return typeof Je().WorkerGlobalScope<"u"&&typeof Je().importScripts=="function"}async function Vg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Wg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Kg(){return cl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll="firebaseLocalStorageDb",zg=1,kr="firebaseLocalStorage",ul="fbase_key";class Zn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Zr(t,e){return t.transaction([kr],e?"readwrite":"readonly").objectStore(kr)}function Gg(){const t=indexedDB.deleteDatabase(ll);return new Zn(t).toPromise()}function js(){const t=indexedDB.open(ll,zg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(kr,{keyPath:ul})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(kr)?e(r):(r.close(),await Gg(),e(await js()))})})}async function jo(t,e,n){const r=Zr(t,!0).put({[ul]:e,value:n});return new Zn(r).toPromise()}async function qg(t,e){const n=Zr(t,!1).get(e),r=await new Zn(n).toPromise();return r===void 0?null:r.value}function Vo(t,e){const n=Zr(t,!0).delete(e);return new Zn(n).toPromise()}const Jg=800,Yg=3;class fl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await js(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Yg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qr._getInstance(Kg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Vg(),!this.activeServiceWorker)return;this.sender=new Hg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Wg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await js();return await jo(e,Or,"1"),await Vo(e,Or),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>jo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>qg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Zr(s,!1).getAll();return new Zn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Jg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fl.type="LOCAL";const Xg=fl;new Xn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(t,e){return e?at(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends nl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return cn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return cn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return cn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Qg(t){return Dg(t.auth,new Ii(t),t.bypassAuthState)}function Zg(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),xg(n,new Ii(t),t.bypassAuthState)}async function em(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),kg(n,new Ii(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Qg;case"linkViaPopup":case"linkViaRedirect":return em;case"reauthViaPopup":case"reauthViaRedirect":return Zg;default:Qe(this.auth,"internal-error")}}resolve(e){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm=new Xn(2e3,1e4);async function nm(t,e,n){if(Ge(t.app))return Promise.reject(Ue(t,"operation-not-supported-in-this-environment"));const r=Xr(t);Xp(t,e,bi);const s=dl(r,n);return new $t(r,"signInViaPopup",e,s).executeNotNull()}class $t extends hl{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,$t.currentPopupAction&&$t.currentPopupAction.cancel(),$t.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){ht(this.filter.length===1,"Popup operations only handle one event");const e=wi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ue(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ue(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$t.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ue(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tm.get())};e()}}$t.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm="pendingRedirect",fr=new Map;class sm extends hl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fr.get(this.auth._key());if(!e){try{const r=await im(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fr.set(this.auth._key(),e)}return this.bypassAuthState||fr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function im(t,e){const n=cm(e),r=am(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function om(t,e){fr.set(t._key(),e)}function am(t){return at(t._redirectPersistence)}function cm(t){return ur(rm,t.config.apiKey,t.name)}async function lm(t,e,n=!1){if(Ge(t.app))return Promise.reject(Vt(t));const r=Xr(t),s=dl(r,e),o=await new sm(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um=10*60*1e3;class fm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!pl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ue(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=um&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wo(e))}saveEventToCache(e){this.cachedEventUids.add(Wo(e)),this.lastProcessedEventTime=Date.now()}}function Wo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function pl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function dm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pl(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hm(t,e={}){return mn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gm=/^https?/;async function mm(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hm(t);for(const n of e)try{if(_m(n))return}catch{}Qe(t,"unauthorized-domain")}function _m(t){const e=$s(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!gm.test(n))return!1;if(pm.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm=new Xn(3e4,6e4);function Ko(){const t=Je().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ym(t){return new Promise((e,n)=>{var r,s,i;function o(){Ko(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ko(),n(Ue(t,"network-request-failed"))},timeout:vm.get()})}if(!((s=(r=Je().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Je().gapi)===null||i===void 0)&&i.load)o();else{const a=Sg("iframefcb");return Je()[a]=()=>{gapi.load?o():n(Ue(t,"network-request-failed"))},Ig(`${Eg()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw dr=null,e})}let dr=null;function bm(t){return dr=dr||ym(t),dr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm=new Xn(5e3,15e3),Im="__/auth/iframe",Em="emulator/auth/iframe",Sm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Tm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Cm(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gi(e,Em):`https://${t.config.authDomain}/${Im}`,r={apiKey:e.apiKey,appName:t.name,v:Yn},s=Tm.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Jn(r).slice(1)}`}async function Am(t){const e=await bm(t),n=Je().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:Cm(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Sm,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ue(t,"network-request-failed"),a=Je().setTimeout(()=>{i(o)},wm.get());function c(){Je().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Pm=500,Om=600,km="_blank",xm="http://localhost";class zo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Dm(t,e,n,r=Pm,s=Om){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Rm),{width:r.toString(),height:s.toString(),top:i,left:o}),u=ye().toLowerCase();n&&(a=qc(u)?km:n),zc(u)&&(e=e||xm,c.scrollbars="yes");const l=Object.entries(c).reduce((h,[g,I])=>`${h}${g}=${I},`,"");if(pg(u)&&a!=="_self")return Nm(e||"",a),new zo(null);const d=window.open(e||"",a,l);B(d,t,"popup-blocked");try{d.focus()}catch{}return new zo(d)}function Nm(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm="__/auth/handler",Lm="emulator/auth/handler",Um=encodeURIComponent("fac");async function Go(t,e,n,r,s,i){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Yn,eventId:s};if(e instanceof bi){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Lh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,d]of Object.entries({}))o[l]=d}if(e instanceof Qn){const l=e.getScopes().filter(d=>d!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await t._getAppCheckToken(),u=c?`#${Um}=${encodeURIComponent(c)}`:"";return`${Fm(t)}?${Jn(a).slice(1)}${u}`}function Fm({config:t}){return t.emulator?gi(t,Lm):`https://${t.authDomain}/${Mm}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs="webStorageSupport";class Bm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=al,this._completeRedirectFn=lm,this._overrideRedirectResult=om}async _openPopup(e,n,r,s){var i;ht((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Go(e,n,r,$s(),s);return Dm(e,o,wi())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Go(e,n,r,$s(),s);return jg(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ht(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Am(e),r=new fm(e);return n.register("authEvent",s=>(B(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(bs,{type:bs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[bs];o!==void 0&&n(!!o),Qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mm(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Zc()||Gc()||vi()}}const $m=Bm;var qo="@firebase/auth",Jo="1.10.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Vm(t){jn(new hn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;B(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:el(t)},u=new bg(r,s,i,c);return Cg(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),jn(new hn("auth-internal",e=>{const n=Xr(e.getProvider("auth").getImmediate());return(r=>new Hm(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sn(qo,Jo,jm(t)),sn(qo,Jo,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm=5*60,Km=kc("authIdTokenMaxAge")||Wm;let Yo=null;const zm=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Km)return;const s=n==null?void 0:n.token;Yo!==s&&(Yo=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function gl(t=Fp()){const e=Mc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Tg(t,{popupRedirectResolver:$m,persistence:[Xg,Bg,al]}),r=kc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=zm(i.toString());Mg(n,o,()=>o(n.currentUser)),Ng(n,a=>o(a))}}const s=bh("auth");return s&&Ag(n,`http://${s}`),n}function Gm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}wg({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ue("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Gm().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Vm("Browser");var qm="firebase",Jm="11.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn(qm,Jm,"app");const Ym={apiKey:"AIzaSyAslq771dJzYasUJnQkvQQD_2HbLWqSPfY",authDomain:"todo-adpersonal.firebaseapp.com",projectId:"todo-adpersonal",storageBucket:"todo-adpersonal.firebasestorage.app",messagingSenderId:"413443352578",appId:"1:413443352578:web:145ff97052927a3d991f1b"},Xm=Lc(Ym),Qm=gl(Xm),Zm=new it,xr=uh("users",{state:()=>({user:null,initialized:!1}),getters:{isLoggedIn:t=>!!t.user},actions:{init(){return new Promise(t=>{const e=gl();Lg(e,n=>{this.user=n,this.initialized=!0,t()})})},setUser(t){this.user=t},getUser(){return this.user},setInitialized(t){this.initialized=t}}}),e_={class:"login-page"},t_={__name:"login",setup(t){const e=wc();La(()=>{xr().isLoggedIn&&e.push("/")});const n=async()=>{const r=xr();if(r.isLoggedIn){e.push("/");return}if(r.user){e.push("/");return}try{const i=(await nm(Qm,Zm)).user;r.setUser(i),e.push("/")}catch(s){console.error("Error during Google login:",s)}};return(r,s)=>(Ct(),Qt("div",e_,[K("div",{class:"login-container"},[K("button",{class:"google-login-btn",onClick:n}," Login With Google ")])]))}},n_=Gr(t_,[["__scopeId","data-v-f88efde5"]]),r_={class:"dashboard"},s_={class:"project-stats"},i_={class:"progress-bar"},o_={class:"completed"},a_={__name:"homepage",setup(t){var a,c;const e=xr(),{user:n}=fh(e);console.log("User:",n.value),(a=n.value)!=null&&a.displayName.split(" ")[0],(c=n.value)!=null&&c.photoURL;const r=lt(8),s=lt(6),i=Ee(()=>s.value/r.value*100),o=()=>{const u=["#FFCDD2","#F8BBD0","#E1BEE7","#D1C4E9","#C5CAE9","#BBDEFB","#B3E5FC","#B2EBF2","#B2DFDB","#C8E6C9","#DCEDC8","#F0F4C3","#FFF9C4","#FFECB3","#FFE0B2","#FFCCBC","#D7CCC8","#F5F5F5","#E0F7FA","#F8FFAE"];let l=[];for(let g=0;g<2;g++){const I=u[Math.floor(Math.random()*u.length)];l.push(I)}return`linear-gradient(${Math.floor(Math.random()*360)}deg, ${l.join(", ")})`};return(u,l)=>(Ct(),Qt("div",r_,[l[2]||(l[2]=K("div",{class:"welcome-card"},[K("h1",null,"Welcome ! Keu 😃"),K("p",{class:"quote"},"A random quote of the day ...")],-1)),l[3]||(l[3]=K("h2",{class:"dashboard-title"},"Dashboard",-1)),K("div",{class:"project-card",style:Nn({background:o()})},[l[1]||(l[1]=K("div",{class:"project-header"},[K("h3",null,"Project 1")],-1)),K("div",s_,[l[0]||(l[0]=K("p",{class:"sub-tasks"},"8 SUB-TASKS",-1)),K("div",i_,[K("div",{class:"progress-fill",style:Nn({width:i.value+"%"})},null,4)]),K("p",o_,qs(s.value)+" COMPLETED",1)])],4)]))}},c_=Gr(a_,[["__scopeId","data-v-3c452c64"]]),l_={class:"project-page"},u_={class:"tasks-section"},f_={class:"tasks-list"},d_={class:"task-content"},h_={class:"task-text"},p_={class:"task-actions"},g_=["onClick"],m_=["onClick"],__={__name:"project",setup(t){const e=wc(),n=lt(!1),r=lt(""),s=lt("medium"),i=gn([{id:1,text:"Task 1",priority:"high",completed:!1},{id:2,text:"This is a multiline Task that shows It can be done!",priority:"medium",completed:!1}]),o=()=>{r.value.trim()&&(i.push({id:Date.now(),text:r.value,priority:s.value,completed:!1}),l())},a=d=>{const h=i.findIndex(g=>g.id===d);h!==-1&&i.splice(h,1)},c=d=>{const h=i.findIndex(g=>g.id===d);h!==-1&&i.splice(h,1)},u=()=>{confirm("Are you sure you want to delete this project?")&&e.push("/dashboard")},l=()=>{n.value=!1,r.value="",s.value="medium"};return(d,h)=>(Ct(),Qt("div",l_,[K("div",{class:"header"},[h[4]||(h[4]=K("h1",null,"Project 1",-1)),K("button",{class:"delete-btn",onClick:u},"🗑️")]),h[8]||(h[8]=K("h2",{class:"tasks-title"},"Tasks",-1)),K("div",u_,[h[5]||(h[5]=K("div",{class:"section-header"},[K("h3",null,"In-Progress")],-1)),K("div",f_,[(Ct(!0),Qt(Ke,null,Au(i,g=>(Ct(),Qt("div",{key:g.id,class:Fr(["task-item",{"task-red":g.priority==="high","task-yellow":g.priority==="medium"}])},[K("div",d_,[K("span",h_,qs(g.text),1)]),K("div",p_,[K("button",{class:"action-btn complete-btn",onClick:I=>a(g.id)},"✓",8,g_),K("button",{class:"action-btn delete-btn",onClick:I=>c(g.id)},"🗑️",8,m_)])],2))),128))])]),K("button",{class:"add-task-btn",onClick:h[0]||(h[0]=g=>n.value=!0)},"Add Task"),n.value?(Ct(),Qt("div",{key:0,class:"modal-overlay",onClick:l},[K("div",{class:"modal",onClick:h[3]||(h[3]=Wf(()=>{},["stop"]))},[h[7]||(h[7]=K("h3",null,"Add New Task",-1)),Oi(K("input",{"onUpdate:modelValue":h[1]||(h[1]=g=>r.value=g),type:"text",placeholder:"Enter task description...",class:"task-input",onKeyup:zf(o,["enter"])},null,544),[[$f,r.value]]),Oi(K("select",{"onUpdate:modelValue":h[2]||(h[2]=g=>s.value=g),class:"priority-select"},h[6]||(h[6]=[K("option",{value:"low"},"Low Priority",-1),K("option",{value:"medium"},"Medium Priority",-1),K("option",{value:"high"},"High Priority",-1)]),512),[[Hf,s.value]]),K("div",{class:"modal-actions"},[K("button",{onClick:o,class:"btn-primary"},"Add Task"),K("button",{onClick:l,class:"btn-secondary"},"Cancel")])])])):cf("",!0)]))}},v_=Gr(__,[["__scopeId","data-v-4479a5f4"]]),y_=[{path:"/",name:"Home",component:c_},{path:"/login",name:"Login",component:n_},{path:"/project/:id",name:"ProjectTasks",component:v_}],Vs=Jf(ed),b_=sh();Vs.use(b_);const Xo=nh({history:kd(),routes:y_});(async()=>{const t=xr();await t.init(),Xo.beforeEach((e,n,r)=>{!["/login"].includes(e.path)&&!t.isLoggedIn?r("/login"):r()}),Vs.use(Xo),Vs.mount("#app")})();
