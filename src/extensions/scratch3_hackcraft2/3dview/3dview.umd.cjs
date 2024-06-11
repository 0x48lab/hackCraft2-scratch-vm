(function(nc){typeof define=="function"&&define.amd?define(nc):nc()})(function(){"use strict";const nc="";function qr(n,e){const t=new Set(n.split(","));return e?i=>t.has(i.toLowerCase()):i=>t.has(i)}const ct=Object.freeze({}),$r=Object.freeze([]),Gt=()=>{},nh=()=>!1,qs=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ea=n=>n.startsWith("onUpdate:"),_t=Object.assign,ic=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},o_=Object.prototype.hasOwnProperty,rt=(n,e)=>o_.call(n,e),He=Array.isArray,lr=n=>ta(n)==="[object Map]",ih=n=>ta(n)==="[object Set]",Ye=n=>typeof n=="function",St=n=>typeof n=="string",Kr=n=>typeof n=="symbol",st=n=>n!==null&&typeof n=="object",rc=n=>(st(n)||Ye(n))&&Ye(n.then)&&Ye(n.catch),rh=Object.prototype.toString,ta=n=>rh.call(n),sc=n=>ta(n).slice(8,-1),sh=n=>ta(n)==="[object Object]",oc=n=>St(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,na=qr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),a_=qr("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),ia=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},l_=/-(\w)/g,oi=ia(n=>n.replace(l_,(e,t)=>t?t.toUpperCase():"")),c_=/\B([A-Z])/g,dn=ia(n=>n.replace(c_,"-$1").toLowerCase()),ra=ia(n=>n.charAt(0).toUpperCase()+n.slice(1)),cr=ia(n=>n?`on${ra(n)}`:""),Li=(n,e)=>!Object.is(n,e),$s=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},sa=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},u_=n=>{const e=parseFloat(n);return isNaN(e)?n:e},oh=n=>{const e=St(n)?Number(n):NaN;return isNaN(e)?n:e};let ah;const ac=()=>ah||(ah=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function lc(n){if(He(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=St(i)?p_(i):lc(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(St(n)||st(n))return n}const f_=/;(?![^(]*\))/g,h_=/:([^]+)/,d_=/\/\*[^]*?\*\//g;function p_(n){const e={};return n.replace(d_,"").split(f_).forEach(t=>{if(t){const i=t.split(h_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function oa(n){let e="";if(St(n))e=n;else if(He(n))for(let t=0;t<n.length;t++){const i=oa(n[t]);i&&(e+=i+" ")}else if(st(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const m_=qr("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function lh(n){return!!n||n===""}const Cn=n=>St(n)?n:n==null?"":He(n)||st(n)&&(n.toString===rh||!Ye(n.toString))?JSON.stringify(n,ch,2):String(n),ch=(n,e)=>e&&e.__v_isRef?ch(n,e.value):lr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[cc(i,s)+" =>"]=r,t),{})}:ih(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>cc(t))}:Kr(e)?cc(e):st(e)&&!He(e)&&!sh(e)?String(e):e,cc=(n,e="")=>{var t;return Kr(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};function aa(n,...e){console.warn(`[Vue warn] ${n}`,...e)}let pn;class uh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=pn,!e&&pn&&(this.index=(pn.scopes||(pn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=pn;try{return pn=this,e()}finally{pn=t}}else aa("cannot run an inactive effect scope.")}on(){pn=this}off(){pn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function fh(n){return new uh(n)}function g_(n,e=pn){e&&e.active&&e.effects.push(n)}function uc(){return pn}function hh(n){pn?pn.cleanups.push(n):aa("onScopeDispose() is called when there is no active effect scope to be associated with.")}let ur;class fc{constructor(e,t,i,r){this.fn=e,this.trigger=t,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=3,this._trackId=0,this._runnings=0,this._queryings=0,this._depsLength=0,g_(this,r)}get dirty(){if(this._dirtyLevel===1){this._dirtyLevel=0,this._queryings++,Di();for(const e of this.deps)if(e.computed&&(v_(e.computed),this._dirtyLevel>=2))break;Ii(),this._queryings--}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?3:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Ui,t=ur;try{return Ui=!0,ur=this,this._runnings++,dh(this),this.fn()}finally{ph(this),this._runnings--,ur=t,Ui=e}}stop(){var e;this.active&&(dh(this),ph(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function v_(n){return n.value}function dh(n){n._trackId++,n._depsLength=0}function ph(n){if(n.deps&&n.deps.length>n._depsLength){for(let e=n._depsLength;e<n.deps.length;e++)mh(n.deps[e],n);n.deps.length=n._depsLength}}function mh(n,e){const t=n.get(e);t!==void 0&&e._trackId!==t&&(n.delete(e),n.size===0&&n.cleanup())}let Ui=!0,hc=0;const gh=[];function Di(){gh.push(Ui),Ui=!1}function Ii(){const n=gh.pop();Ui=n===void 0?!0:n}function dc(){hc++}function pc(){for(hc--;!hc&&mc.length;)mc.shift()()}function vh(n,e,t){var i;if(e.get(n)!==n._trackId){e.set(n,n._trackId);const r=n.deps[n._depsLength];r!==e?(r&&mh(r,n),n.deps[n._depsLength++]=e):n._depsLength++,(i=n.onTrack)==null||i.call(n,_t({effect:n},t))}}const mc=[];function _h(n,e,t){var i;dc();for(const r of n.keys())if(!(!r.allowRecurse&&r._runnings)&&r._dirtyLevel<e&&(!r._runnings||e!==2)){const s=r._dirtyLevel;r._dirtyLevel=e,s===0&&(!r._queryings||e!==2)&&((i=r.onTrigger)==null||i.call(r,_t({effect:r},t)),r.trigger(),r.scheduler&&mc.push(r.scheduler))}pc()}const xh=(n,e)=>{const t=new Map;return t.cleanup=n,t.computed=e,t},la=new WeakMap,fr=Symbol("iterate"),gc=Symbol("Map key iterate");function Ht(n,e,t){if(Ui&&ur){let i=la.get(n);i||la.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=xh(()=>i.delete(t))),vh(ur,r,{target:n,type:e,key:t})}}function jn(n,e,t,i,r,s){const o=la.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&He(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!Kr(u)&&u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":He(n)?oc(t)&&a.push(o.get("length")):(a.push(o.get(fr)),lr(n)&&a.push(o.get(gc)));break;case"delete":He(n)||(a.push(o.get(fr)),lr(n)&&a.push(o.get(gc)));break;case"set":lr(n)&&a.push(o.get(fr));break}dc();for(const l of a)l&&_h(l,3,{target:n,type:e,key:t,newValue:i,oldValue:r,oldTarget:s});pc()}function __(n,e){var t;return(t=la.get(n))==null?void 0:t.get(e)}const x_=qr("__proto__,__v_isRef,__isVue"),yh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Kr)),Sh=y_();function y_(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=qe(this);for(let s=0,o=this.length;s<o;s++)Ht(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(qe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Di(),dc();const i=qe(this)[e].apply(this,t);return pc(),Ii(),i}}),n}function S_(n){const e=qe(this);return Ht(e,"has",n),e.hasOwnProperty(n)}class bh{constructor(e=!1,t=!1){this._isReadonly=e,this._shallow=t}get(e,t,i){const r=this._isReadonly,s=this._shallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Dh:Uh:s?Lh:Ph).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=He(e);if(!r){if(o&&rt(Sh,t))return Reflect.get(Sh,t,i);if(t==="hasOwnProperty")return S_}const a=Reflect.get(e,t,i);return(Kr(t)?yh.has(t):x_(t))||(r||Ht(e,"get",t),s)?a:ft(a)?o&&oc(t)?a:a.value:st(a)?r?Ih(a):ga(a):a}}class Mh extends bh{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._shallow){const l=Fi(s);if(!_a(i)&&!Fi(i)&&(s=qe(s),i=qe(i)),!He(e)&&ft(s)&&!ft(i))return l?!1:(s.value=i,!0)}const o=He(e)&&oc(t)?Number(t)<e.length:rt(e,t),a=Reflect.set(e,t,i,r);return e===qe(r)&&(o?Li(i,s)&&jn(e,"set",t,i,s):jn(e,"add",t,i)),a}deleteProperty(e,t){const i=rt(e,t),r=e[t],s=Reflect.deleteProperty(e,t);return s&&i&&jn(e,"delete",t,void 0,r),s}has(e,t){const i=Reflect.has(e,t);return(!Kr(t)||!yh.has(t))&&Ht(e,"has",t),i}ownKeys(e){return Ht(e,"iterate",He(e)?"length":fr),Reflect.ownKeys(e)}}class Eh extends bh{constructor(e=!1){super(!0,e)}set(e,t){return aa(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0}deleteProperty(e,t){return aa(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}}const b_=new Mh,M_=new Eh,E_=new Mh(!0),w_=new Eh(!0),vc=n=>n,ca=n=>Reflect.getPrototypeOf(n);function ua(n,e,t=!1,i=!1){n=n.__v_raw;const r=qe(n),s=qe(e);t||(Li(e,s)&&Ht(r,"get",e),Ht(r,"get",s));const{has:o}=ca(r),a=i?vc:t?_c:Ks;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function fa(n,e=!1){const t=this.__v_raw,i=qe(t),r=qe(n);return e||(Li(n,r)&&Ht(i,"has",n),Ht(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function ha(n,e=!1){return n=n.__v_raw,!e&&Ht(qe(n),"iterate",fr),Reflect.get(n,"size",n)}function wh(n){n=qe(n);const e=qe(this);return ca(e).has.call(e,n)||(e.add(n),jn(e,"add",n,n)),this}function Th(n,e){e=qe(e);const t=qe(this),{has:i,get:r}=ca(t);let s=i.call(t,n);s?Rh(t,i,n):(n=qe(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?Li(e,o)&&jn(t,"set",n,e,o):jn(t,"add",n,e),this}function Ah(n){const e=qe(this),{has:t,get:i}=ca(e);let r=t.call(e,n);r?Rh(e,t,n):(n=qe(n),r=t.call(e,n));const s=i?i.call(e,n):void 0,o=e.delete(n);return r&&jn(e,"delete",n,void 0,s),o}function Ch(){const n=qe(this),e=n.size!==0,t=lr(n)?new Map(n):new Set(n),i=n.clear();return e&&jn(n,"clear",void 0,void 0,t),i}function da(n,e){return function(i,r){const s=this,o=s.__v_raw,a=qe(o),l=e?vc:n?_c:Ks;return!n&&Ht(a,"iterate",fr),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function pa(n,e,t){return function(...i){const r=this.__v_raw,s=qe(r),o=lr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?vc:e?_c:Ks;return!e&&Ht(s,"iterate",l?gc:fr),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Oi(n){return function(...e){{const t=e[0]?`on key "${e[0]}" `:"";console.warn(`${ra(n)} operation ${t}failed: target is readonly.`,qe(this))}return n==="delete"?!1:n==="clear"?void 0:this}}function T_(){const n={get(s){return ua(this,s)},get size(){return ha(this)},has:fa,add:wh,set:Th,delete:Ah,clear:Ch,forEach:da(!1,!1)},e={get(s){return ua(this,s,!1,!0)},get size(){return ha(this)},has:fa,add:wh,set:Th,delete:Ah,clear:Ch,forEach:da(!1,!0)},t={get(s){return ua(this,s,!0)},get size(){return ha(this,!0)},has(s){return fa.call(this,s,!0)},add:Oi("add"),set:Oi("set"),delete:Oi("delete"),clear:Oi("clear"),forEach:da(!0,!1)},i={get(s){return ua(this,s,!0,!0)},get size(){return ha(this,!0)},has(s){return fa.call(this,s,!0)},add:Oi("add"),set:Oi("set"),delete:Oi("delete"),clear:Oi("clear"),forEach:da(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=pa(s,!1,!1),t[s]=pa(s,!0,!1),e[s]=pa(s,!1,!0),i[s]=pa(s,!0,!0)}),[n,t,e,i]}const[A_,C_,R_,P_]=T_();function ma(n,e){const t=e?n?P_:R_:n?C_:A_;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(rt(t,r)&&r in i?t:i,r,s)}const L_={get:ma(!1,!1)},U_={get:ma(!1,!0)},D_={get:ma(!0,!1)},I_={get:ma(!0,!0)};function Rh(n,e,t){const i=qe(t);if(i!==t&&e.call(n,i)){const r=sc(n);console.warn(`Reactive ${r} contains both the raw and reactive versions of the same object${r==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const Ph=new WeakMap,Lh=new WeakMap,Uh=new WeakMap,Dh=new WeakMap;function O_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function F_(n){return n.__v_skip||!Object.isExtensible(n)?0:O_(sc(n))}function ga(n){return Fi(n)?n:va(n,!1,b_,L_,Ph)}function N_(n){return va(n,!1,E_,U_,Lh)}function Ih(n){return va(n,!0,M_,D_,Uh)}function Jr(n){return va(n,!0,w_,I_,Dh)}function va(n,e,t,i,r){if(!st(n))return console.warn(`value cannot be made reactive: ${String(n)}`),n;if(n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=F_(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function Rn(n){return Fi(n)?Rn(n.__v_raw):!!(n&&n.__v_isReactive)}function Fi(n){return!!(n&&n.__v_isReadonly)}function _a(n){return!!(n&&n.__v_isShallow)}function xa(n){return Rn(n)||Fi(n)}function qe(n){const e=n&&n.__v_raw;return e?qe(e):n}function ai(n){return sa(n,"__v_skip",!0),n}const Ks=n=>st(n)?ga(n):n,_c=n=>st(n)?Ih(n):n;class Oh{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new fc(()=>e(this._value),()=>xc(this,1)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=qe(this);return Fh(e),(!e._cacheable||e.effect.dirty)&&Li(e._value,e._value=e.effect.run())&&xc(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function B_(n,e,t=!1){let i,r;const s=Ye(n);s?(i=n,r=()=>{console.warn("Write operation failed: computed value is readonly")}):(i=n.get,r=n.set);const o=new Oh(i,r,s||!r,t);return e&&!t&&(o.effect.onTrack=e.onTrack,o.effect.onTrigger=e.onTrigger),o}function Fh(n){Ui&&ur&&(n=qe(n),vh(ur,n.dep||(n.dep=xh(()=>n.dep=void 0,n instanceof Oh?n:void 0)),{target:n,type:"get",key:"value"}))}function xc(n,e=3,t){n=qe(n);const i=n.dep;i&&_h(i,e,{target:n,type:"set",key:"value",newValue:t})}function ft(n){return!!(n&&n.__v_isRef===!0)}function ht(n){return Nh(n,!1)}function k_(n){return Nh(n,!0)}function Nh(n,e){return ft(n)?n:new z_(n,e)}class z_{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:qe(e),this._value=t?e:Ks(e)}get value(){return Fh(this),this._value}set value(e){const t=this.__v_isShallow||_a(e)||Fi(e);e=t?e:qe(e),Li(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Ks(e),xc(this,3,e))}}function Vt(n){return ft(n)?n.value:n}function Bh(n){return Ye(n)?n():Vt(n)}const G_={get:(n,e,t)=>Vt(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return ft(r)&&!ft(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function kh(n){return Rn(n)?n:new Proxy(n,G_)}function zh(n){xa(n)||console.warn("toRefs() expects a reactive object but received a plain one.");const e=He(n)?new Array(n.length):{};for(const t in n)e[t]=Gh(n,t);return e}class H_{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return __(qe(this._object),this._key)}}class V_{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function ya(n,e,t){return ft(n)?n:Ye(n)?new V_(n):st(n)&&arguments.length>1?Gh(n,e,t):ht(n)}function Gh(n,e,t){const i=n[e];return ft(i)?i:new H_(n,e,t)}const hr=[];function Sa(n){hr.push(n)}function ba(){hr.pop()}function Re(n,...e){Di();const t=hr.length?hr[hr.length-1].component:null,i=t&&t.appContext.config.warnHandler,r=W_();if(i)li(i,t,11,[n+e.join(""),t&&t.proxy,r.map(({vnode:s})=>`at <${ka(t,s.type)}>`).join(`
`),r]);else{const s=[`[Vue warn]: ${n}`,...e];r.length&&s.push(`
`,...X_(r)),console.warn(...s)}Ii()}function W_(){let n=hr[hr.length-1];if(!n)return[];const e=[];for(;n;){const t=e[0];t&&t.vnode===n?t.recurseCount++:e.push({vnode:n,recurseCount:0});const i=n.component&&n.component.parent;n=i&&i.vnode}return e}function X_(n){const e=[];return n.forEach((t,i)=>{e.push(...i===0?[]:[`
`],...j_(t))}),e}function j_({vnode:n,recurseCount:e}){const t=e>0?`... (${e} recursive calls)`:"",i=n.component?n.component.parent==null:!1,r=` at <${ka(n.component,n.type,i)}`,s=">"+t;return n.props?[r,...Y_(n.props),s]:[r+s]}function Y_(n){const e=[],t=Object.keys(n);return t.slice(0,3).forEach(i=>{e.push(...Hh(i,n[i]))}),t.length>3&&e.push(" ..."),e}function Hh(n,e,t){return St(e)?(e=JSON.stringify(e),t?e:[`${n}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?t?e:[`${n}=${e}`]:ft(e)?(e=Hh(n,qe(e.value),!0),t?e:[`${n}=Ref<`,e,">"]):Ye(e)?[`${n}=fn${e.name?`<${e.name}>`:""}`]:(e=qe(e),t?e:[`${n}=`,e])}const yc={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function li(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){Js(s,e,t)}return r}function Pn(n,e,t,i){if(Ye(n)){const s=li(n,e,t,i);return s&&rc(s)&&s.catch(o=>{Js(o,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(Pn(n[s],e,t,i));return r}function Js(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=yc[t];for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){li(l,null,10,[n,o,a]);return}}q_(n,t,r,i)}function q_(n,e,t,i=!0){{const r=yc[e];if(t&&Sa(t),Re(`Unhandled error${r?` during execution of ${r}`:""}`),t&&ba(),i)throw n;console.error(n)}}let Zs=!1,Sc=!1;const Wt=[];let Yn=0;const Zr=[];let ci=null,Ni=0;const Vh=Promise.resolve();let bc=null;const $_=100;function Ma(n){const e=bc||Vh;return n?e.then(this?n.bind(this):n):e}function K_(n){let e=Yn+1,t=Wt.length;for(;e<t;){const i=e+t>>>1,r=Wt[i],s=Qs(r);s<n||s===n&&r.pre?e=i+1:t=i}return e}function Ea(n){(!Wt.length||!Wt.includes(n,Zs&&n.allowRecurse?Yn+1:Yn))&&(n.id==null?Wt.push(n):Wt.splice(K_(n.id),0,n),Wh())}function Wh(){!Zs&&!Sc&&(Sc=!0,bc=Vh.then(qh))}function J_(n){const e=Wt.indexOf(n);e>Yn&&Wt.splice(e,1)}function Xh(n){He(n)?Zr.push(...n):(!ci||!ci.includes(n,n.allowRecurse?Ni+1:Ni))&&Zr.push(n),Wh()}function jh(n,e,t=Zs?Yn+1:0){for(e=e||new Map;t<Wt.length;t++){const i=Wt[t];if(i&&i.pre){if(n&&i.id!==n.uid||Mc(e,i))continue;Wt.splice(t,1),t--,i()}}}function Yh(n){if(Zr.length){const e=[...new Set(Zr)].sort((t,i)=>Qs(t)-Qs(i));if(Zr.length=0,ci){ci.push(...e);return}for(ci=e,n=n||new Map,Ni=0;Ni<ci.length;Ni++)Mc(n,ci[Ni])||ci[Ni]();ci=null,Ni=0}}const Qs=n=>n.id==null?1/0:n.id,Z_=(n,e)=>{const t=Qs(n)-Qs(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function qh(n){Sc=!1,Zs=!0,n=n||new Map,Wt.sort(Z_);const e=t=>Mc(n,t);try{for(Yn=0;Yn<Wt.length;Yn++){const t=Wt[Yn];if(t&&t.active!==!1){if(e(t))continue;li(t,null,14)}}}finally{Yn=0,Wt.length=0,Yh(n),Zs=!1,bc=null,(Wt.length||Zr.length)&&qh(n)}}function Mc(n,e){if(!n.has(e))n.set(e,1);else{const t=n.get(e);if(t>$_){const i=e.ownerInstance,r=i&&Bd(i.type);return Js(`Maximum recursive updates exceeded${r?` in component <${r}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,null,10),!0}else n.set(e,t+1)}}let dr=!1;const Qr=new Set;ac().__VUE_HMR_RUNTIME__={createRecord:Ec($h),rerender:Ec(t0),reload:Ec(n0)};const pr=new Map;function Q_(n){const e=n.type.__hmrId;let t=pr.get(e);t||($h(e,n.type),t=pr.get(e)),t.instances.add(n)}function e0(n){pr.get(n.type.__hmrId).instances.delete(n)}function $h(n,e){return pr.has(n)?!1:(pr.set(n,{initialDef:eo(e),instances:new Set}),!0)}function eo(n){return kd(n)?n.__vccOpts:n}function t0(n,e){const t=pr.get(n);t&&(t.initialDef.render=e,[...t.instances].forEach(i=>{e&&(i.render=e,eo(i.type).render=e),i.renderCache=[],dr=!0,i.effect.dirty=!0,i.update(),dr=!1}))}function n0(n,e){const t=pr.get(n);if(!t)return;e=eo(e),Kh(t.initialDef,e);const i=[...t.instances];for(const r of i){const s=eo(r.type);Qr.has(s)||(s!==t.initialDef&&Kh(s,e),Qr.add(s)),r.appContext.propsCache.delete(r.type),r.appContext.emitsCache.delete(r.type),r.appContext.optionsCache.delete(r.type),r.ceReload?(Qr.add(s),r.ceReload(e.styles),Qr.delete(s)):r.parent?(r.parent.effect.dirty=!0,Ea(r.parent.update)):r.appContext.reload?r.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Xh(()=>{for(const r of i)Qr.delete(eo(r.type))})}function Kh(n,e){_t(n,e);for(const t in n)t!=="__file"&&!(t in e)&&delete n[t]}function Ec(n){return(e,t)=>{try{return n(e,t)}catch(i){console.error(i),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let qn,to=[],wc=!1;function no(n,...e){qn?qn.emit(n,...e):wc||to.push({event:n,args:e})}function Jh(n,e){var t,i;qn=n,qn?(qn.enabled=!0,to.forEach(({event:r,args:s})=>qn.emit(r,...s)),to=[]):typeof window<"u"&&window.HTMLElement&&!((i=(t=window.navigator)==null?void 0:t.userAgent)!=null&&i.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(s=>{Jh(s,e)}),setTimeout(()=>{qn||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,wc=!0,to=[])},3e3)):(wc=!0,to=[])}function i0(n,e){no("app:init",n,e,{Fragment:Ln,Text:lo,Comment:mn,Static:Ia})}function r0(n){no("app:unmount",n)}const s0=Tc("component:added"),Zh=Tc("component:updated"),o0=Tc("component:removed"),a0=n=>{qn&&typeof qn.cleanupBuffer=="function"&&!qn.cleanupBuffer(n)&&o0(n)};function Tc(n){return e=>{no(n,e.appContext.app,e.uid,e.parent?e.parent.uid:void 0,e)}}const l0=Qh("perf:start"),c0=Qh("perf:end");function Qh(n){return(e,t,i)=>{no(n,e.appContext.app,e.uid,e,t,i)}}function u0(n,e,t){no("component:emit",n.appContext.app,n,e,t)}function f0(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ct;{const{emitsOptions:u,propsOptions:[f]}=n;if(u)if(!(e in u))(!f||!(cr(e)in f))&&Re(`Component emitted event "${e}" but it is neither declared in the emits option nor as an "${cr(e)}" prop.`);else{const h=u[e];Ye(h)&&(h(...t)||Re(`Invalid event arguments: event validation failed for event "${e}".`))}}let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||ct;h&&(r=t.map(d=>St(d)?d.trim():d)),f&&(r=t.map(u_))}u0(n,e,r);{const u=e.toLowerCase();u!==e&&i[cr(u)]&&Re(`Event "${u}" is emitted in component ${ka(n,n.type)} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${dn(e)}" instead of "${e}".`)}let a,l=i[a=cr(e)]||i[a=cr(oi(e))];!l&&s&&(l=i[a=cr(dn(e))]),l&&Pn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Pn(c,n,6,r)}}function ed(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ye(n)){const l=c=>{const u=ed(c,e,!0);u&&(a=!0,_t(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(st(n)&&i.set(n,null),null):(He(s)?s.forEach(l=>o[l]=null):_t(o,s),st(n)&&i.set(n,o),o)}function wa(n,e){return!n||!qs(e)?!1:(e=e.slice(2).replace(/Once$/,""),rt(n,e[0].toLowerCase()+e.slice(1))||rt(n,dn(e))||rt(n,e))}let rn=null,Ta=null;function Aa(n){const e=rn;return rn=n,Ta=n&&n.type.__scopeId||null,e}function h0(n){Ta=n}function d0(){Ta=null}function p0(n,e=rn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Cd(-1);const s=Aa(e);let o;try{o=n(...r)}finally{Aa(s),i._d&&Cd(1)}return Zh(e),o};return i._n=!0,i._c=!0,i._d=!0,i}let Ac=!1;function Ca(){Ac=!0}function Cc(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:d,ctx:g,inheritAttrs:v}=n;let p,m;const S=Aa(n);Ac=!1;try{if(t.shapeFlag&4){const A=r||i,T=d.__isScriptSetup?new Proxy(A,{get(b,O,J){return Re(`Property '${String(O)}' was accessed via 'this'. Avoid using 'this' in templates.`),Reflect.get(b,O,J)}}):A;p=Dn(u.call(T,A,f,s,d,h,g)),m=l}else{const A=e;l===s&&Ca(),p=Dn(A.length>1?A(s,{get attrs(){return Ca(),l},slots:a,emit:c}):A(s,null)),m=e.props?l:g0(l)}}catch(A){co.length=0,Js(A,n,1),p=$n(mn)}let _=p,M;if(p.patchFlag>0&&p.patchFlag&2048&&([_,M]=m0(p)),m&&v!==!1){const A=Object.keys(m),{shapeFlag:T}=_;if(A.length){if(T&7)o&&A.some(ea)&&(m=v0(m,o)),_=ki(_,m);else if(!Ac&&_.type!==mn){const b=Object.keys(l),O=[],J=[];for(let x=0,w=b.length;x<w;x++){const L=b[x];qs(L)?ea(L)||O.push(L[2].toLowerCase()+L.slice(3)):J.push(L)}J.length&&Re(`Extraneous non-props attributes (${J.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),O.length&&Re(`Extraneous non-emits event listeners (${O.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return t.dirs&&(nd(_)||Re("Runtime directive used on component with non-element root node. The directives will not function as intended."),_=ki(_),_.dirs=_.dirs?_.dirs.concat(t.dirs):t.dirs),t.transition&&(nd(_)||Re("Component inside <Transition> renders non-element root node that cannot be animated."),_.transition=t.transition),M?M(_):p=_,Aa(S),p}const m0=n=>{const e=n.children,t=n.dynamicChildren,i=td(e);if(!i)return[n,void 0];const r=e.indexOf(i),s=t?t.indexOf(i):-1,o=a=>{e[r]=a,t&&(s>-1?t[s]=a:a.patchFlag>0&&(n.dynamicChildren=[...t,a]))};return[Dn(i),o]};function td(n){let e;for(let t=0;t<n.length;t++){const i=n[t];if(Vc(i)){if(i.type!==mn||i.children==="v-if"){if(e)return;e=i}}else return}return e}const g0=n=>{let e;for(const t in n)(t==="class"||t==="style"||qs(t))&&((e||(e={}))[t]=n[t]);return e},v0=(n,e)=>{const t={};for(const i in n)(!ea(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t},nd=n=>n.shapeFlag&7||n.type===mn;function _0(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if((r||a)&&dr||e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?id(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!wa(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?id(i,o,c):!0:!!o;return!1}function id(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!wa(t,s))return!0}return!1}function x0({vnode:n,parent:e},t){if(t)for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const y0=Symbol.for("v-ndc"),S0=n=>n.__isSuspense;function b0(n,e){e&&e.pendingBranch?He(n)?e.effects.push(...n):e.effects.push(n):Xh(n)}const M0=Symbol.for("v-scx"),E0=()=>{{const n=oo(M0);return n||Re("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),n}},Ra={};function Tt(n,e,t){return Ye(e)||Re("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),rd(n,e,t)}function rd(n,e,{immediate:t,deep:i,flush:r,once:s,onTrack:o,onTrigger:a}=ct){if(e&&s){const b=e;e=(...O)=>{b(...O),T()}}i!==void 0&&typeof i=="number"&&Re('watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'),e||(t!==void 0&&Re('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),i!==void 0&&Re('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'),s!==void 0&&Re('watch() "once" option is only respected when using the watch(source, callback, options?) signature.'));const l=b=>{Re("Invalid watch source: ",b,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},c=Ut,u=b=>i===!0?b:es(b,i===!1?1:void 0);let f,h=!1,d=!1;if(ft(n)?(f=()=>n.value,h=_a(n)):Rn(n)?(f=()=>u(n),h=!0):He(n)?(d=!0,h=n.some(b=>Rn(b)||_a(b)),f=()=>n.map(b=>{if(ft(b))return b.value;if(Rn(b))return u(b);if(Ye(b))return li(b,c,2);l(b)})):Ye(n)?e?f=()=>li(n,c,2):f=()=>(g&&g(),Pn(n,c,3,[v])):(f=Gt,l(n)),e&&i){const b=f;f=()=>es(b())}let g,v=b=>{g=M.onStop=()=>{li(b,c,4),g=M.onStop=void 0}},p;if(Ba)if(v=Gt,e?t&&Pn(e,c,3,[f(),d?[]:void 0,v]):f(),r==="sync"){const b=E0();p=b.__watcherHandles||(b.__watcherHandles=[])}else return Gt;let m=d?new Array(n.length).fill(Ra):Ra;const S=()=>{if(!(!M.active||!M.dirty))if(e){const b=M.run();(i||h||(d?b.some((O,J)=>Li(O,m[J])):Li(b,m)))&&(g&&g(),Pn(e,c,3,[b,m===Ra?void 0:d&&m[0]===Ra?[]:m,v]),m=b)}else M.run()};S.allowRecurse=!!e;let _;r==="sync"?_=S:r==="post"?_=()=>sn(S,c&&c.suspense):(S.pre=!0,c&&(S.id=c.uid),_=()=>Ea(S));const M=new fc(f,Gt,_),A=uc(),T=()=>{M.stop(),A&&ic(A.effects,M)};return M.onTrack=o,M.onTrigger=a,e?t?S():m=M.run():r==="post"?sn(M.run.bind(M),c&&c.suspense):M.run(),p&&p.push(T),T}function w0(n,e,t){const i=this.proxy,r=St(n)?n.includes(".")?sd(i,n):()=>i[n]:n.bind(i,i);let s;Ye(e)?s=e:(s=e.handler,t=e);const o=po(this),a=rd(r,s.bind(i),t);return o(),a}function sd(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function es(n,e,t=0,i){if(!st(n)||n.__v_skip)return n;if(e&&e>0){if(t>=e)return n;t++}if(i=i||new Set,i.has(n))return n;if(i.add(n),ft(n))es(n.value,e,t,i);else if(He(n))for(let r=0;r<n.length;r++)es(n[r],e,t,i);else if(ih(n)||lr(n))n.forEach(r=>{es(r,e,t,i)});else if(sh(n))for(const r in n)es(n[r],e,t,i);return n}function od(n){a_(n)&&Re("Do not use built-in directive ids as custom directive id: "+n)}function mr(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Di(),Pn(l,t,8,[n.el,a,n,e]),Ii())}}/*! #__NO_SIDE_EFFECTS__ */function Rc(n,e){return Ye(n)?(()=>_t({name:n.name},e,{setup:n}))():n}const Pa=n=>!!n.type.__asyncLoader,Pc=n=>n.type.__isKeepAlive;function T0(n,e){ad(n,"a",e)}function A0(n,e){ad(n,"da",e)}function ad(n,e,t=Ut){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(La(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Pc(r.parent.vnode)&&C0(i,e,t,r),r=r.parent}}function C0(n,e,t,i){const r=La(e,n,i,!0);ld(()=>{ic(i[e],r)},t)}function La(n,e,t=Ut,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Di();const a=po(t),l=Pn(e,t,n,o);return a(),Ii(),l});return i?r.unshift(s):r.push(s),s}else{const r=cr(yc[n].replace(/ hook$/,""));Re(`${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const ui=n=>(e,t=Ut)=>(!Ba||n==="sp")&&La(n,(...i)=>e(...i),t),R0=ui("bm"),P0=ui("m"),L0=ui("bu"),U0=ui("u"),io=ui("bum"),ld=ui("um"),D0=ui("sp"),I0=ui("rtg"),O0=ui("rtc");function F0(n,e=Ut){La("ec",n,e)}function N0(n,e,t,i){let r;const s=t&&t[i];if(He(n)||St(n)){r=new Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=e(n[o],o,void 0,s&&s[o])}else if(typeof n=="number"){Number.isInteger(n)||Re(`The v-for range expect an integer value but got ${n}.`),r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(st(n))if(n[Symbol.iterator])r=Array.from(n,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(n);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(n[c],c,a,s&&s[a])}}else r=[];return t&&(t[i]=r),r}const Lc=n=>n?Od(n)?qc(n)||n.proxy:Lc(n.parent):null,gr=_t(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>Jr(n.props),$attrs:n=>Jr(n.attrs),$slots:n=>Jr(n.slots),$refs:n=>Jr(n.refs),$parent:n=>Lc(n.parent),$root:n=>Lc(n.root),$emit:n=>n.emit,$options:n=>Oc(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,Ea(n.update)}),$nextTick:n=>n.n||(n.n=Ma.bind(n.proxy)),$watch:n=>w0.bind(n)}),Uc=n=>n==="_"||n==="$",Dc=(n,e)=>n!==ct&&!n.__isScriptSetup&&rt(n,e),cd={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e==="__isVue")return!0;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Dc(i,e))return o[e]=1,i[e];if(r!==ct&&rt(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&rt(c,e))return o[e]=3,s[e];if(t!==ct&&rt(t,e))return o[e]=4,t[e];Ic&&(o[e]=0)}}const u=gr[e];let f,h;if(u)return e==="$attrs"?(Ht(n,"get",e),Ca()):e==="$slots"&&Ht(n,"get",e),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==ct&&rt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,rt(h,e))return h[e];rn&&(!St(e)||e.indexOf("__v")!==0)&&(r!==ct&&Uc(e[0])&&rt(r,e)?Re(`Property ${JSON.stringify(e)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):n===rn&&Re(`Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`))},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Dc(r,e)?(r[e]=t,!0):r.__isScriptSetup&&rt(r,e)?(Re(`Cannot mutate <script setup> binding "${e}" from Options API.`),!1):i!==ct&&rt(i,e)?(i[e]=t,!0):rt(n.props,e)?(Re(`Attempting to mutate prop "${e}". Props are readonly.`),!1):e[0]==="$"&&e.slice(1)in n?(Re(`Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`),!1):(e in n.appContext.config.globalProperties?Object.defineProperty(s,e,{enumerable:!0,configurable:!0,value:t}):s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==ct&&rt(n,o)||Dc(e,o)||(a=s[0])&&rt(a,o)||rt(i,o)||rt(gr,o)||rt(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:rt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};cd.ownKeys=n=>(Re("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(n));function B0(n){const e={};return Object.defineProperty(e,"_",{configurable:!0,enumerable:!1,get:()=>n}),Object.keys(gr).forEach(t=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,get:()=>gr[t](n),set:Gt})}),e}function k0(n){const{ctx:e,propsOptions:[t]}=n;t&&Object.keys(t).forEach(i=>{Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>n.props[i],set:Gt})})}function z0(n){const{ctx:e,setupState:t}=n;Object.keys(qe(t)).forEach(i=>{if(!t.__isScriptSetup){if(Uc(i[0])){Re(`setup() return property ${JSON.stringify(i)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>t[i],set:Gt})}})}function ud(n){return He(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}function G0(){const n=Object.create(null);return(e,t)=>{n[t]?Re(`${e} property "${t}" is already defined in ${n[t]}.`):n[t]=e}}let Ic=!0;function H0(n){const e=Oc(n),t=n.proxy,i=n.ctx;Ic=!1,e.beforeCreate&&fd(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:v,deactivated:p,beforeDestroy:m,beforeUnmount:S,destroyed:_,unmounted:M,render:A,renderTracked:T,renderTriggered:b,errorCaptured:O,serverPrefetch:J,expose:x,inheritAttrs:w,components:L,directives:V,filters:P}=e,j=G0();{const[te]=n.propsOptions;if(te)for(const Z in te)j("Props",Z)}if(c&&V0(c,i,j),o)for(const te in o){const Z=o[te];Ye(Z)?(Object.defineProperty(i,te,{value:Z.bind(t),configurable:!0,enumerable:!0,writable:!0}),j("Methods",te)):Re(`Method "${te}" has type "${typeof Z}" in the component definition. Did you reference the function correctly?`)}if(r){Ye(r)||Re("The data option must be a function. Plain object usage is no longer supported.");const te=r.call(t,t);if(rc(te)&&Re("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!st(te))Re("data() should return an object.");else{n.data=ga(te);for(const Z in te)j("Data",Z),Uc(Z[0])||Object.defineProperty(i,Z,{configurable:!0,enumerable:!0,get:()=>te[Z],set:Gt})}}if(Ic=!0,s)for(const te in s){const Z=s[te],Y=Ye(Z)?Z.bind(t,t):Ye(Z.get)?Z.get.bind(t,t):Gt;Y===Gt&&Re(`Computed property "${te}" has no getter.`);const ee=!Ye(Z)&&Ye(Z.set)?Z.set.bind(t):()=>{Re(`Write operation failed: computed property "${te}" is readonly.`)},F=pi({get:Y,set:ee});Object.defineProperty(i,te,{enumerable:!0,configurable:!0,get:()=>F.value,set:Q=>F.value=Q}),j("Computed",te)}if(a)for(const te in a)hd(a[te],i,t,te);if(l){const te=Ye(l)?l.call(t):l;Reflect.ownKeys(te).forEach(Z=>{$0(Z,te[Z])})}u&&fd(u,n,"c");function G(te,Z){He(Z)?Z.forEach(Y=>te(Y.bind(t))):Z&&te(Z.bind(t))}if(G(R0,f),G(P0,h),G(L0,d),G(U0,g),G(T0,v),G(A0,p),G(F0,O),G(O0,T),G(I0,b),G(io,S),G(ld,M),G(D0,J),He(x))if(x.length){const te=n.exposed||(n.exposed={});x.forEach(Z=>{Object.defineProperty(te,Z,{get:()=>t[Z],set:Y=>t[Z]=Y})})}else n.exposed||(n.exposed={});A&&n.render===Gt&&(n.render=A),w!=null&&(n.inheritAttrs=w),L&&(n.components=L),V&&(n.directives=V)}function V0(n,e,t=Gt){He(n)&&(n=Fc(n));for(const i in n){const r=n[i];let s;st(r)?"default"in r?s=oo(r.from||i,r.default,!0):s=oo(r.from||i):s=oo(r),ft(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s,t("Inject",i)}}function fd(n,e,t){Pn(He(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function hd(n,e,t,i){const r=i.includes(".")?sd(t,i):()=>t[i];if(St(n)){const s=e[n];Ye(s)?Tt(r,s):Re(`Invalid watch handler specified by key "${n}"`,s)}else if(Ye(n))Tt(r,n.bind(t));else if(st(n))if(He(n))n.forEach(s=>hd(s,e,t,i));else{const s=Ye(n.handler)?n.handler.bind(t):e[n.handler];Ye(s)?Tt(r,s,n):Re(`Invalid watch handler specified by key "${n.handler}"`,s)}else Re(`Invalid watch option: "${i}"`,n)}function Oc(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Ua(l,c,o,!0)),Ua(l,e,o)),st(e)&&s.set(e,l),l}function Ua(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Ua(n,s,t,!0),r&&r.forEach(o=>Ua(n,o,t,!0));for(const o in e)if(i&&o==="expose")Re('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const a=W0[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const W0={data:dd,props:pd,emits:pd,methods:ro,computed:ro,beforeCreate:Zt,created:Zt,beforeMount:Zt,mounted:Zt,beforeUpdate:Zt,updated:Zt,beforeDestroy:Zt,beforeUnmount:Zt,destroyed:Zt,unmounted:Zt,activated:Zt,deactivated:Zt,errorCaptured:Zt,serverPrefetch:Zt,components:ro,directives:ro,watch:j0,provide:dd,inject:X0};function dd(n,e){return e?n?function(){return _t(Ye(n)?n.call(this,this):n,Ye(e)?e.call(this,this):e)}:e:n}function X0(n,e){return ro(Fc(n),Fc(e))}function Fc(n){if(He(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Zt(n,e){return n?[...new Set([].concat(n,e))]:e}function ro(n,e){return n?_t(Object.create(null),n,e):e}function pd(n,e){return n?He(n)&&He(e)?[...new Set([...n,...e])]:_t(Object.create(null),ud(n),ud(e??{})):e}function j0(n,e){if(!n)return e;if(!e)return n;const t=_t(Object.create(null),n);for(const i in e)t[i]=Zt(n[i],e[i]);return t}function md(){return{app:null,config:{isNativeTag:nh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Y0=0;function q0(n,e){return function(i,r=null){Ye(i)||(i=_t({},i)),r!=null&&!st(r)&&(Re("root props passed to app.mount() must be an object."),r=null);const s=md(),o=new WeakSet;let a=!1;const l=s.app={_uid:Y0++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:zd,get config(){return s.config},set config(c){Re("app.config cannot be replaced. Modify individual options instead.")},use(c,...u){return o.has(c)?Re("Plugin has already been applied to target app."):c&&Ye(c.install)?(o.add(c),c.install(l,...u)):Ye(c)?(o.add(c),c(l,...u)):Re('A plugin must either be a function or an object with an "install" function.'),l},mixin(c){return s.mixins.includes(c)?Re("Mixin has already been applied to target app"+(c.name?`: ${c.name}`:"")):s.mixins.push(c),l},component(c,u){return jc(c,s.config),u?(s.components[c]&&Re(`Component "${c}" has already been registered in target app.`),s.components[c]=u,l):s.components[c]},directive(c,u){return od(c),u?(s.directives[c]&&Re(`Directive "${c}" has already been registered in target app.`),s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(a)Re("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{c.__vue_app__&&Re("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const h=$n(i,r);return h.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),s.reload=()=>{n(ki(h),c,f)},u&&e?e(h,c):n(h,c,f),a=!0,l._container=c,c.__vue_app__=l,l._instance=h.component,i0(l,zd),qc(h.component)||h.component.proxy}},unmount(){a?(n(null,l._container),l._instance=null,r0(l),delete l._container.__vue_app__):Re("Cannot unmount an app that is not mounted.")},provide(c,u){return c in s.provides&&Re(`App already provides property with key "${String(c)}". It will be overwritten with the new value.`),s.provides[c]=u,l},runWithContext(c){so=l;try{return c()}finally{so=null}}};return l}}let so=null;function $0(n,e){if(!Ut)Re("provide() can only be used inside setup().");else{let t=Ut.provides;const i=Ut.parent&&Ut.parent.provides;i===t&&(t=Ut.provides=Object.create(i)),t[n]=e}}function oo(n,e,t=!1){const i=Ut||rn;if(i||so){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:so._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ye(e)?e.call(i&&i.proxy):e;Re(`injection "${String(n)}" not found.`)}else Re("inject() can only be used inside setup() or functional components.")}function K0(){return!!(Ut||rn||so)}function J0(n,e,t,i=!1){const r={},s={};sa(s,Oa,1),n.propsDefaults=Object.create(null),gd(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);Sd(e||{},r,n),t?n.props=i?r:N_(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Z0(n){for(;n;){if(n.type.__hmrId)return!0;n=n.parent}}function Q0(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=qe(r),[l]=n.propsOptions;let c=!1;if(!Z0(n)&&(i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(wa(n.emitsOptions,h))continue;const d=e[h];if(l)if(rt(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=oi(h);r[g]=Nc(l,a,g,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{gd(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!rt(e,f)&&((u=dn(f))===f||!rt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Nc(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!rt(e,f))&&(delete s[f],c=!0)}c&&jn(n,"set","$attrs"),Sd(e||{},r,n)}function gd(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(na(l))continue;const c=e[l];let u;r&&rt(r,u=oi(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:wa(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=qe(t),c=a||ct;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Nc(r,l,f,c[f],n,!rt(c,f))}}return o}function Nc(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=rt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ye(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=po(r);i=c[t]=l.call(null,e),u()}}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===dn(t))&&(i=!0))}return i}function vd(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ye(n)){const u=f=>{l=!0;const[h,d]=vd(f,e,!0);_t(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return st(n)&&i.set(n,$r),$r;if(He(s))for(let u=0;u<s.length;u++){St(s[u])||Re("props must be strings when using array syntax.",s[u]);const f=oi(s[u]);_d(f)&&(o[f]=ct)}else if(s){st(s)||Re("invalid props options",s);for(const u in s){const f=oi(u);if(_d(f)){const h=s[u],d=o[f]=He(h)||Ye(h)?{type:h}:_t({},h);if(d){const g=yd(Boolean,d.type),v=yd(String,d.type);d[0]=g>-1,d[1]=v<0||g<v,(g>-1||rt(d,"default"))&&a.push(f)}}}}const c=[o,a];return st(n)&&i.set(n,c),c}function _d(n){return n[0]!=="$"?!0:(Re(`Invalid prop name: "${n}" is a reserved property.`),!1)}function Bc(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function xd(n,e){return Bc(n)===Bc(e)}function yd(n,e){return He(e)?e.findIndex(t=>xd(t,n)):Ye(e)&&xd(e,n)?0:-1}function Sd(n,e,t){const i=qe(e),r=t.propsOptions[0];for(const s in r){let o=r[s];o!=null&&ex(s,i[s],o,Jr(i),!rt(n,s)&&!rt(n,dn(s)))}}function ex(n,e,t,i,r){const{type:s,required:o,validator:a,skipCheck:l}=t;if(o&&r){Re('Missing required prop: "'+n+'"');return}if(!(e==null&&!o)){if(s!=null&&s!==!0&&!l){let c=!1;const u=He(s)?s:[s],f=[];for(let h=0;h<u.length&&!c;h++){const{valid:d,expectedType:g}=nx(e,u[h]);f.push(g||""),c=d}if(!c){Re(ix(n,e,f));return}}a&&!a(e,i)&&Re('Invalid prop: custom validator check failed for prop "'+n+'".')}}const tx=qr("String,Number,Boolean,Function,Symbol,BigInt");function nx(n,e){let t;const i=Bc(e);if(tx(i)){const r=typeof n;t=r===i.toLowerCase(),!t&&r==="object"&&(t=n instanceof e)}else i==="Object"?t=st(n):i==="Array"?t=He(n):i==="null"?t=n===null:t=n instanceof e;return{valid:t,expectedType:i}}function ix(n,e,t){if(t.length===0)return`Prop type [] for prop "${n}" won't match anything. Did you mean to use type Array instead?`;let i=`Invalid prop: type check failed for prop "${n}". Expected ${t.map(ra).join(" | ")}`;const r=t[0],s=sc(e),o=bd(e,r),a=bd(e,s);return t.length===1&&Md(r)&&!rx(r,s)&&(i+=` with value ${o}`),i+=`, got ${s} `,Md(s)&&(i+=`with value ${a}.`),i}function bd(n,e){return e==="String"?`"${n}"`:e==="Number"?`${Number(n)}`:`${n}`}function Md(n){return["string","number","boolean"].some(t=>n.toLowerCase()===t)}function rx(...n){return n.some(e=>e.toLowerCase()==="boolean")}const Ed=n=>n[0]==="_"||n==="$stable",kc=n=>He(n)?n.map(Dn):[Dn(n)],sx=(n,e,t)=>{if(e._n)return e;const i=p0((...r)=>(Ut&&Re(`Slot "${n}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),kc(e(...r))),t);return i._c=!1,i},wd=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Ed(r))continue;const s=n[r];if(Ye(s))e[r]=sx(r,s,i);else if(s!=null){Re(`Non-function value encountered for slot "${r}". Prefer function slots for better performance.`);const o=kc(s);e[r]=()=>o}}},Td=(n,e)=>{Pc(n.vnode)||Re("Non-function value encountered for default slot. Prefer function slots for better performance.");const t=kc(e);n.slots.default=()=>t},ox=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=qe(e),sa(e,"_",t)):wd(e,n.slots={})}else n.slots={},e&&Td(n,e);sa(n.slots,Oa,1)},ax=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=ct;if(i.shapeFlag&32){const a=e._;a?dr?(_t(r,e),jn(n,"set","$slots")):t&&a===1?s=!1:(_t(r,e),!t&&a===1&&delete r._):(s=!e.$stable,wd(e,r)),o=e}else e&&(Td(n,e),o={default:1});if(s)for(const a in r)!Ed(a)&&o[a]==null&&delete r[a]};function zc(n,e,t,i,r=!1){if(He(n)){n.forEach((h,d)=>zc(h,e&&(He(e)?e[d]:e),t,i,r));return}if(Pa(i)&&!r)return;const s=i.shapeFlag&4?qc(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=n;if(!a){Re("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const c=e&&e.r,u=a.refs===ct?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(St(c)?(u[c]=null,rt(f,c)&&(f[c]=null)):ft(c)&&(c.value=null)),Ye(l))li(l,a,12,[o,u]);else{const h=St(l),d=ft(l);if(h||d){const g=()=>{if(n.f){const v=h?rt(f,l)?f[l]:u[l]:l.value;r?He(v)&&ic(v,s):He(v)?v.includes(s)||v.push(s):h?(u[l]=[s],rt(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=o,rt(f,l)&&(f[l]=o)):d?(l.value=o,n.k&&(u[n.k]=o)):Re("Invalid template ref type:",l,`(${typeof l})`)};o?(g.id=-1,sn(g,t)):g()}else Re("Invalid template ref type:",l,`(${typeof l})`)}}let ao,Bi;function fi(n,e){n.appContext.config.performance&&Da()&&Bi.mark(`vue-${e}-${n.uid}`),l0(n,e,Da()?Bi.now():Date.now())}function hi(n,e){if(n.appContext.config.performance&&Da()){const t=`vue-${e}-${n.uid}`,i=t+":end";Bi.mark(i),Bi.measure(`<${ka(n,n.type)}> ${e}`,t,i),Bi.clearMarks(t),Bi.clearMarks(i)}c0(n,e,Da()?Bi.now():Date.now())}function Da(){return ao!==void 0||(typeof window<"u"&&window.performance?(ao=!0,Bi=window.performance):ao=!1),ao}function lx(){const n=[];if(n.length){const e=n.length>1;console.warn(`Feature flag${e?"s":""} ${n.join(", ")} ${e?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const sn=b0;function cx(n){return ux(n)}function ux(n,e){lx();const t=ac();t.__VUE__=!0,Jh(t.__VUE_DEVTOOLS_GLOBAL_HOOK__,t);const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=Gt,insertStaticContent:g}=n,v=(C,U,H,ie=null,W=null,E=null,y=void 0,R=null,K=dr?!1:!!U.dynamicChildren)=>{if(C===U)return;C&&!ho(C,U)&&(ie=fe(C),ne(C,W,E,!0),C=null),U.patchFlag===-2&&(K=!1,U.dynamicChildren=null);const{type:N,ref:q,shapeFlag:re}=U;switch(N){case lo:p(C,U,H,ie);break;case mn:m(C,U,H,ie);break;case Ia:C==null?S(U,H,ie,y):_(C,U,H,y);break;case Ln:V(C,U,H,ie,W,E,y,R,K);break;default:re&1?T(C,U,H,ie,W,E,y,R,K):re&6?P(C,U,H,ie,W,E,y,R,K):re&64||re&128?N.process(C,U,H,ie,W,E,y,R,K,_e):Re("Invalid VNode type:",N,`(${typeof N})`)}q!=null&&W&&zc(q,C&&C.ref,E,U||C,!U)},p=(C,U,H,ie)=>{if(C==null)i(U.el=a(U.children),H,ie);else{const W=U.el=C.el;U.children!==C.children&&c(W,U.children)}},m=(C,U,H,ie)=>{C==null?i(U.el=l(U.children||""),H,ie):U.el=C.el},S=(C,U,H,ie)=>{[C.el,C.anchor]=g(C.children,U,H,ie,C.el,C.anchor)},_=(C,U,H,ie)=>{if(U.children!==C.children){const W=h(C.anchor);A(C),[U.el,U.anchor]=g(U.children,H,W,ie)}else U.el=C.el,U.anchor=C.anchor},M=({el:C,anchor:U},H,ie)=>{let W;for(;C&&C!==U;)W=h(C),i(C,H,ie),C=W;i(U,H,ie)},A=({el:C,anchor:U})=>{let H;for(;C&&C!==U;)H=h(C),r(C),C=H;r(U)},T=(C,U,H,ie,W,E,y,R,K)=>{U.type==="svg"?y="svg":U.type==="math"&&(y="mathml"),C==null?b(U,H,ie,W,E,y,R,K):x(C,U,W,E,y,R,K)},b=(C,U,H,ie,W,E,y,R)=>{let K,N;const{props:q,shapeFlag:re,transition:ue,dirs:oe}=C;if(K=C.el=o(C.type,E,q&&q.is,q),re&8?u(K,C.children):re&16&&J(C.children,K,null,ie,W,Gc(C,E),y,R),oe&&mr(C,null,ie,"created"),O(K,C,C.scopeId,y,ie),q){for(const xe in q)xe!=="value"&&!na(xe)&&s(K,xe,null,q[xe],E,C.children,ie,W,se);"value"in q&&s(K,"value",null,q.value,E),(N=q.onVnodeBeforeMount)&&Kn(N,ie,C)}Object.defineProperty(K,"__vnode",{value:C,enumerable:!1}),Object.defineProperty(K,"__vueParentComponent",{value:ie,enumerable:!1}),oe&&mr(C,null,ie,"beforeMount");const he=fx(W,ue);he&&ue.beforeEnter(K),i(K,U,H),((N=q&&q.onVnodeMounted)||he||oe)&&sn(()=>{N&&Kn(N,ie,C),he&&ue.enter(K),oe&&mr(C,null,ie,"mounted")},W)},O=(C,U,H,ie,W)=>{if(H&&d(C,H),ie)for(let E=0;E<ie.length;E++)d(C,ie[E]);if(W){let E=W.subTree;if(E.patchFlag>0&&E.patchFlag&2048&&(E=td(E.children)||E),U===E){const y=W.vnode;O(C,y,y.scopeId,y.slotScopeIds,W.parent)}}},J=(C,U,H,ie,W,E,y,R,K=0)=>{for(let N=K;N<C.length;N++){const q=C[N]=R?zi(C[N]):Dn(C[N]);v(null,q,U,H,ie,W,E,y,R)}},x=(C,U,H,ie,W,E,y)=>{const R=U.el=C.el;let{patchFlag:K,dynamicChildren:N,dirs:q}=U;K|=C.patchFlag&16;const re=C.props||ct,ue=U.props||ct;let oe;if(H&&vr(H,!1),(oe=ue.onVnodeBeforeUpdate)&&Kn(oe,H,U,C),q&&mr(U,C,H,"beforeUpdate"),H&&vr(H,!0),dr&&(K=0,y=!1,N=null),N?(w(C.dynamicChildren,N,R,H,ie,Gc(U,W),E),Hc(C,U)):y||Y(C,U,R,null,H,ie,Gc(U,W),E,!1),K>0){if(K&16)L(R,U,re,ue,H,ie,W);else if(K&2&&re.class!==ue.class&&s(R,"class",null,ue.class,W),K&4&&s(R,"style",re.style,ue.style,W),K&8){const he=U.dynamicProps;for(let xe=0;xe<he.length;xe++){const le=he[xe],Le=re[le],De=ue[le];(De!==Le||le==="value")&&s(R,le,Le,De,W,C.children,H,ie,se)}}K&1&&C.children!==U.children&&u(R,U.children)}else!y&&N==null&&L(R,U,re,ue,H,ie,W);((oe=ue.onVnodeUpdated)||q)&&sn(()=>{oe&&Kn(oe,H,U,C),q&&mr(U,C,H,"updated")},ie)},w=(C,U,H,ie,W,E,y)=>{for(let R=0;R<U.length;R++){const K=C[R],N=U[R],q=K.el&&(K.type===Ln||!ho(K,N)||K.shapeFlag&70)?f(K.el):H;v(K,N,q,null,ie,W,E,y,!0)}},L=(C,U,H,ie,W,E,y)=>{if(H!==ie){if(H!==ct)for(const R in H)!na(R)&&!(R in ie)&&s(C,R,H[R],null,y,U.children,W,E,se);for(const R in ie){if(na(R))continue;const K=ie[R],N=H[R];K!==N&&R!=="value"&&s(C,R,N,K,y,U.children,W,E,se)}"value"in ie&&s(C,"value",H.value,ie.value,y)}},V=(C,U,H,ie,W,E,y,R,K)=>{const N=U.el=C?C.el:a(""),q=U.anchor=C?C.anchor:a("");let{patchFlag:re,dynamicChildren:ue,slotScopeIds:oe}=U;(dr||re&2048)&&(re=0,K=!1,ue=null),oe&&(R=R?R.concat(oe):oe),C==null?(i(N,H,ie),i(q,H,ie),J(U.children||[],H,q,W,E,y,R,K)):re>0&&re&64&&ue&&C.dynamicChildren?(w(C.dynamicChildren,ue,H,W,E,y,R),Hc(C,U)):Y(C,U,H,q,W,E,y,R,K)},P=(C,U,H,ie,W,E,y,R,K)=>{U.slotScopeIds=R,C==null?U.shapeFlag&512?W.ctx.activate(U,H,ie,y,K):j(U,H,ie,W,E,y,K):G(C,U,K)},j=(C,U,H,ie,W,E,y)=>{const R=C.component=Sx(C,ie,W);if(R.type.__hmrId&&Q_(R),Sa(C),fi(R,"mount"),Pc(C)&&(R.ctx.renderer=_e),fi(R,"init"),Ex(R),hi(R,"init"),R.asyncDep){if(W&&W.registerDep(R,te),!C.el){const K=R.subTree=$n(mn);m(null,K,U,H)}}else te(R,C,U,H,W,E,y);ba(),hi(R,"mount")},G=(C,U,H)=>{const ie=U.component=C.component;if(_0(C,U,H))if(ie.asyncDep&&!ie.asyncResolved){Sa(U),Z(ie,U,H),ba();return}else ie.next=U,J_(ie.update),ie.effect.dirty=!0,ie.update();else U.el=C.el,ie.vnode=U},te=(C,U,H,ie,W,E,y)=>{const R=()=>{if(C.isMounted){let{next:q,bu:re,u:ue,parent:oe,vnode:he}=C;{const Ce=Ad(C);if(Ce){q&&(q.el=he.el,Z(C,q,y)),Ce.asyncDep.then(()=>{C.isUnmounted||R()});return}}let xe=q,le;Sa(q||C.vnode),vr(C,!1),q?(q.el=he.el,Z(C,q,y)):q=he,re&&$s(re),(le=q.props&&q.props.onVnodeBeforeUpdate)&&Kn(le,oe,q,he),vr(C,!0),fi(C,"render");const Le=Cc(C);hi(C,"render");const De=C.subTree;C.subTree=Le,fi(C,"patch"),v(De,Le,f(De.el),fe(De),C,W,E),hi(C,"patch"),q.el=Le.el,xe===null&&x0(C,Le.el),ue&&sn(ue,W),(le=q.props&&q.props.onVnodeUpdated)&&sn(()=>Kn(le,oe,q,he),W),Zh(C),ba()}else{let q;const{el:re,props:ue}=U,{bm:oe,m:he,parent:xe}=C,le=Pa(U);if(vr(C,!1),oe&&$s(oe),!le&&(q=ue&&ue.onVnodeBeforeMount)&&Kn(q,xe,U),vr(C,!0),re&&ke){const Le=()=>{fi(C,"render"),C.subTree=Cc(C),hi(C,"render"),fi(C,"hydrate"),ke(re,C.subTree,C,W,null),hi(C,"hydrate")};le?U.type.__asyncLoader().then(()=>!C.isUnmounted&&Le()):Le()}else{fi(C,"render");const Le=C.subTree=Cc(C);hi(C,"render"),fi(C,"patch"),v(null,Le,H,ie,C,W,E),hi(C,"patch"),U.el=Le.el}if(he&&sn(he,W),!le&&(q=ue&&ue.onVnodeMounted)){const Le=U;sn(()=>Kn(q,xe,Le),W)}(U.shapeFlag&256||xe&&Pa(xe.vnode)&&xe.vnode.shapeFlag&256)&&C.a&&sn(C.a,W),C.isMounted=!0,s0(C),U=H=ie=null}},K=C.effect=new fc(R,Gt,()=>Ea(N),C.scope),N=C.update=()=>{K.dirty&&K.run()};N.id=C.uid,vr(C,!0),K.onTrack=C.rtc?q=>$s(C.rtc,q):void 0,K.onTrigger=C.rtg?q=>$s(C.rtg,q):void 0,N.ownerInstance=C,N()},Z=(C,U,H)=>{U.component=C;const ie=C.vnode.props;C.vnode=U,C.next=null,Q0(C,U.props,ie,H),ax(C,U.children,H),Di(),jh(C),Ii()},Y=(C,U,H,ie,W,E,y,R,K=!1)=>{const N=C&&C.children,q=C?C.shapeFlag:0,re=U.children,{patchFlag:ue,shapeFlag:oe}=U;if(ue>0){if(ue&128){F(N,re,H,ie,W,E,y,R,K);return}else if(ue&256){ee(N,re,H,ie,W,E,y,R,K);return}}oe&8?(q&16&&se(N,W,E),re!==N&&u(H,re)):q&16?oe&16?F(N,re,H,ie,W,E,y,R,K):se(N,W,E,!0):(q&8&&u(H,""),oe&16&&J(re,H,ie,W,E,y,R,K))},ee=(C,U,H,ie,W,E,y,R,K)=>{C=C||$r,U=U||$r;const N=C.length,q=U.length,re=Math.min(N,q);let ue;for(ue=0;ue<re;ue++){const oe=U[ue]=K?zi(U[ue]):Dn(U[ue]);v(C[ue],oe,H,null,W,E,y,R,K)}N>q?se(C,W,E,!0,!1,re):J(U,H,ie,W,E,y,R,K,re)},F=(C,U,H,ie,W,E,y,R,K)=>{let N=0;const q=U.length;let re=C.length-1,ue=q-1;for(;N<=re&&N<=ue;){const oe=C[N],he=U[N]=K?zi(U[N]):Dn(U[N]);if(ho(oe,he))v(oe,he,H,null,W,E,y,R,K);else break;N++}for(;N<=re&&N<=ue;){const oe=C[re],he=U[ue]=K?zi(U[ue]):Dn(U[ue]);if(ho(oe,he))v(oe,he,H,null,W,E,y,R,K);else break;re--,ue--}if(N>re){if(N<=ue){const oe=ue+1,he=oe<q?U[oe].el:ie;for(;N<=ue;)v(null,U[N]=K?zi(U[N]):Dn(U[N]),H,he,W,E,y,R,K),N++}}else if(N>ue)for(;N<=re;)ne(C[N],W,E,!0),N++;else{const oe=N,he=N,xe=new Map;for(N=he;N<=ue;N++){const Ne=U[N]=K?zi(U[N]):Dn(U[N]);Ne.key!=null&&(xe.has(Ne.key)&&Re("Duplicate keys found during update:",JSON.stringify(Ne.key),"Make sure keys are unique."),xe.set(Ne.key,N))}let le,Le=0;const De=ue-he+1;let Ce=!1,Ae=0;const ye=new Array(De);for(N=0;N<De;N++)ye[N]=0;for(N=oe;N<=re;N++){const Ne=C[N];if(Le>=De){ne(Ne,W,E,!0);continue}let k;if(Ne.key!=null)k=xe.get(Ne.key);else for(le=he;le<=ue;le++)if(ye[le-he]===0&&ho(Ne,U[le])){k=le;break}k===void 0?ne(Ne,W,E,!0):(ye[k-he]=N+1,k>=Ae?Ae=k:Ce=!0,v(Ne,U[k],H,null,W,E,y,R,K),Le++)}const Ue=Ce?hx(ye):$r;for(le=Ue.length-1,N=De-1;N>=0;N--){const Ne=he+N,k=U[Ne],ge=Ne+1<q?U[Ne+1].el:ie;ye[N]===0?v(null,k,H,ge,W,E,y,R,K):Ce&&(le<0||N!==Ue[le]?Q(k,H,ge,2):le--)}}},Q=(C,U,H,ie,W=null)=>{const{el:E,type:y,transition:R,children:K,shapeFlag:N}=C;if(N&6){Q(C.component.subTree,U,H,ie);return}if(N&128){C.suspense.move(U,H,ie);return}if(N&64){y.move(C,U,H,_e);return}if(y===Ln){i(E,U,H);for(let re=0;re<K.length;re++)Q(K[re],U,H,ie);i(C.anchor,U,H);return}if(y===Ia){M(C,U,H);return}if(ie!==2&&N&1&&R)if(ie===0)R.beforeEnter(E),i(E,U,H),sn(()=>R.enter(E),W);else{const{leave:re,delayLeave:ue,afterLeave:oe}=R,he=()=>i(E,U,H),xe=()=>{re(E,()=>{he(),oe&&oe()})};ue?ue(E,he,xe):xe()}else i(E,U,H)},ne=(C,U,H,ie=!1,W=!1)=>{const{type:E,props:y,ref:R,children:K,dynamicChildren:N,shapeFlag:q,patchFlag:re,dirs:ue}=C;if(R!=null&&zc(R,null,H,C,!0),q&256){U.ctx.deactivate(C);return}const oe=q&1&&ue,he=!Pa(C);let xe;if(he&&(xe=y&&y.onVnodeBeforeUnmount)&&Kn(xe,U,C),q&6)ce(C.component,H,ie);else{if(q&128){C.suspense.unmount(H,ie);return}oe&&mr(C,null,U,"beforeUnmount"),q&64?C.type.remove(C,U,H,W,_e,ie):N&&(E!==Ln||re>0&&re&64)?se(N,U,H,!1,!0):(E===Ln&&re&384||!W&&q&16)&&se(K,U,H),ie&&z(C)}(he&&(xe=y&&y.onVnodeUnmounted)||oe)&&sn(()=>{xe&&Kn(xe,U,C),oe&&mr(C,null,U,"unmounted")},H)},z=C=>{const{type:U,el:H,anchor:ie,transition:W}=C;if(U===Ln){C.patchFlag>0&&C.patchFlag&2048&&W&&!W.persisted?C.children.forEach(y=>{y.type===mn?r(y.el):z(y)}):X(H,ie);return}if(U===Ia){A(C);return}const E=()=>{r(H),W&&!W.persisted&&W.afterLeave&&W.afterLeave()};if(C.shapeFlag&1&&W&&!W.persisted){const{leave:y,delayLeave:R}=W,K=()=>y(H,E);R?R(C.el,E,K):K()}else E()},X=(C,U)=>{let H;for(;C!==U;)H=h(C),r(C),C=H;r(U)},ce=(C,U,H)=>{C.type.__hmrId&&e0(C);const{bum:ie,scope:W,update:E,subTree:y,um:R}=C;ie&&$s(ie),W.stop(),E&&(E.active=!1,ne(y,C,U,H)),R&&sn(R,U),sn(()=>{C.isUnmounted=!0},U),U&&U.pendingBranch&&!U.isUnmounted&&C.asyncDep&&!C.asyncResolved&&C.suspenseId===U.pendingId&&(U.deps--,U.deps===0&&U.resolve()),a0(C)},se=(C,U,H,ie=!1,W=!1,E=0)=>{for(let y=E;y<C.length;y++)ne(C[y],U,H,ie,W)},fe=C=>C.shapeFlag&6?fe(C.component.subTree):C.shapeFlag&128?C.suspense.next():h(C.anchor||C.el);let ve=!1;const Te=(C,U,H)=>{C==null?U._vnode&&ne(U._vnode,null,null,!0):v(U._vnode||null,C,U,null,null,null,H),ve||(ve=!0,jh(),Yh(),ve=!1),U._vnode=C},_e={p:v,um:ne,m:Q,r:z,mt:j,mc:J,pc:Y,pbc:w,n:fe,o:n};let B,ke;return e&&([B,ke]=e(_e)),{render:Te,hydrate:B,createApp:q0(Te,B)}}function Gc({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function vr({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function fx(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Hc(n,e,t=!1){const i=n.children,r=e.children;if(He(i)&&He(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=zi(r[s]),a.el=o.el),t||Hc(o,a)),a.type===lo&&(a.el=o.el),a.type===mn&&!a.el&&(a.el=o.el)}}function hx(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Ad(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ad(e)}const dx=n=>n.__isTeleport,Ln=Symbol.for("v-fgt"),lo=Symbol.for("v-txt"),mn=Symbol.for("v-cmt"),Ia=Symbol.for("v-stc"),co=[];let Un=null;function _r(n=!1){co.push(Un=n?null:[])}function px(){co.pop(),Un=co[co.length-1]||null}let uo=1;function Cd(n){uo+=n}function Rd(n){return n.dynamicChildren=uo>0?Un||$r:null,px(),uo>0&&Un&&Un.push(n),n}function fo(n,e,t,i,r,s){return Rd(At(n,e,t,i,r,s,!0))}function Pd(n,e,t,i,r){return Rd($n(n,e,t,i,r,!0))}function Vc(n){return n?n.__v_isVNode===!0:!1}function ho(n,e){return e.shapeFlag&6&&Qr.has(e.type)?(n.shapeFlag&=-257,e.shapeFlag&=-513,!1):n.type===e.type&&n.key===e.key}const mx=(...n)=>gx(...n),Oa="__vInternal",Ld=({key:n})=>n??null,Fa=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?St(n)||ft(n)||Ye(n)?{i:rn,r:n,k:e,f:!!t}:n:null);function At(n,e=null,t=null,i=0,r=null,s=n===Ln?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Ld(e),ref:e&&Fa(e),scopeId:Ta,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:rn};return a?(Wc(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=St(t)?8:16),l.key!==l.key&&Re("VNode created with invalid key (NaN). VNode type:",l.type),uo>0&&!o&&Un&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Un.push(l),l}const $n=mx;function gx(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===y0)&&(n||Re(`Invalid vnode type when creating vnode: ${n}.`),n=mn),Vc(n)){const a=ki(n,e,!0);return t&&Wc(a,t),uo>0&&!s&&Un&&(a.shapeFlag&6?Un[Un.indexOf(n)]=a:Un.push(a)),a.patchFlag|=-2,a}if(kd(n)&&(n=n.__vccOpts),e){e=vx(e);let{class:a,style:l}=e;a&&!St(a)&&(e.class=oa(a)),st(l)&&(xa(l)&&!He(l)&&(l=_t({},l)),e.style=lc(l))}const o=St(n)?1:S0(n)?128:dx(n)?64:st(n)?4:Ye(n)?2:0;return o&4&&xa(n)&&(n=qe(n),Re("Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,n)),At(n,e,t,i,r,o,s,!0)}function vx(n){return n?xa(n)||Oa in n?_t({},n):n:null}function ki(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:o}=n,a=e?_x(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&Ld(a),ref:e&&e.ref?t&&r?He(r)?r.concat(Fa(e)):[r,Fa(e)]:Fa(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:s===-1&&He(o)?o.map(Ud):o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ln?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ki(n.ssContent),ssFallback:n.ssFallback&&ki(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Ud(n){const e=ki(n);return He(n.children)&&(e.children=n.children.map(Ud)),e}function di(n=" ",e=0){return $n(lo,null,n,e)}function Dd(n="",e=!1){return e?(_r(),Pd(mn,null,n)):$n(mn,null,n)}function Dn(n){return n==null||typeof n=="boolean"?$n(mn):He(n)?$n(Ln,null,n.slice()):typeof n=="object"?zi(n):$n(lo,null,String(n))}function zi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ki(n)}function Wc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(He(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Wc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Oa in e)?e._ctx=rn:r===3&&rn&&(rn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ye(e)?(e={default:e,_ctx:rn},t=32):(e=String(e),i&64?(t=16,e=[di(e)]):t=8);n.children=e,n.shapeFlag|=t}function _x(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=oa([e.class,i.class]));else if(r==="style")e.style=lc([e.style,i.style]);else if(qs(r)){const s=e[r],o=i[r];o&&s!==o&&!(He(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Kn(n,e,t,i=null){Pn(n,e,7,[t,i])}const xx=md();let yx=0;function Sx(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||xx,s={uid:yx++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new uh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vd(i,r),emitsOptions:ed(i,r),emit:null,emitted:null,propsDefaults:ct,inheritAttrs:i.inheritAttrs,ctx:ct,data:ct,props:ct,attrs:ct,slots:ct,refs:ct,setupState:ct,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx=B0(s),s.root=e?e.root:s,s.emit=f0.bind(null,s),n.ce&&n.ce(s),s}let Ut=null;const bx=()=>Ut||rn;let Na,Xc;{const n=ac(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Na=e("__VUE_INSTANCE_SETTERS__",t=>Ut=t),Xc=e("__VUE_SSR_SETTERS__",t=>Ba=t)}const po=n=>{const e=Ut;return Na(n),n.scope.on(),()=>{n.scope.off(),Na(e)}},Id=()=>{Ut&&Ut.scope.off(),Na(null)},Mx=qr("slot,component");function jc(n,e){const t=e.isNativeTag||nh;(Mx(n)||t(n))&&Re("Do not use built-in or reserved HTML elements as component id: "+n)}function Od(n){return n.vnode.shapeFlag&4}let Ba=!1;function Ex(n,e=!1){e&&Xc(e);const{props:t,children:i}=n.vnode,r=Od(n);J0(n,t,r,e),ox(n,i);const s=r?wx(n,e):void 0;return e&&Xc(!1),s}function wx(n,e){var t;const i=n.type;{if(i.name&&jc(i.name,n.appContext.config),i.components){const s=Object.keys(i.components);for(let o=0;o<s.length;o++)jc(s[o],n.appContext.config)}if(i.directives){const s=Object.keys(i.directives);for(let o=0;o<s.length;o++)od(s[o])}i.compilerOptions&&Tx()&&Re('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}n.accessCache=Object.create(null),n.proxy=ai(new Proxy(n.ctx,cd)),k0(n);const{setup:r}=i;if(r){const s=n.setupContext=r.length>1?Rx(n):null,o=po(n);Di();const a=li(r,n,0,[Jr(n.props),s]);if(Ii(),o(),rc(a)){if(a.then(Id,Id),e)return a.then(l=>{Fd(n,l,e)}).catch(l=>{Js(l,n,0)});if(n.asyncDep=a,!n.suspense){const l=(t=i.name)!=null?t:"Anonymous";Re(`Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else Fd(n,a,e)}else Nd(n,e)}function Fd(n,e,t){Ye(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:st(e)?(Vc(e)&&Re("setup() should not return VNodes directly - return a render function instead."),n.devtoolsRawSetupState=e,n.setupState=kh(e),z0(n)):e!==void 0&&Re(`setup() should return an object. Received: ${e===null?"null":typeof e}`),Nd(n,t)}let Yc;const Tx=()=>!Yc;function Nd(n,e,t){const i=n.type;if(!n.render){if(!e&&Yc&&!i.render){const r=i.template||Oc(n).template;if(r){fi(n,"compile");const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=_t(_t({isCustomElement:s,delimiters:a},o),l);i.render=Yc(r,c),hi(n,"compile")}}n.render=i.render||Gt}{const r=po(n);Di();try{H0(n)}finally{Ii(),r()}}!i.render&&n.render===Gt&&!e&&(i.template?Re('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):Re("Component is missing template or render function."))}function Ax(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return Ca(),Ht(n,"get","$attrs"),e[t]},set(){return Re("setupContext.attrs is readonly."),!1},deleteProperty(){return Re("setupContext.attrs is readonly."),!1}}))}function Cx(n){return n.slotsProxy||(n.slotsProxy=new Proxy(n.slots,{get(e,t){return Ht(n,"get","$slots"),e[t]}}))}function Rx(n){return Object.freeze({get attrs(){return Ax(n)},get slots(){return Cx(n)},get emit(){return(t,...i)=>n.emit(t,...i)},expose:t=>{if(n.exposed&&Re("expose() should be called only once per setup()."),t!=null){let i=typeof t;i==="object"&&(He(t)?i="array":ft(t)&&(i="ref")),i!=="object"&&Re(`expose() should be passed a plain object, received ${i}.`)}n.exposed=t||{}}})}function qc(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(kh(ai(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in gr)return gr[t](n)},has(e,t){return t in e||t in gr}}))}const Px=/(?:^|[-_])(\w)/g,Lx=n=>n.replace(Px,e=>e.toUpperCase()).replace(/[-_]/g,"");function Bd(n,e=!0){return Ye(n)?n.displayName||n.name:n.name||e&&n.__name}function ka(n,e,t=!1){let i=Bd(e);if(!i&&e.__file){const r=e.__file.match(/([^/\\]+)\.\w+$/);r&&(i=r[1])}if(!i&&n&&n.parent){const r=s=>{for(const o in s)if(s[o]===e)return o};i=r(n.components||n.parent.type.components)||r(n.appContext.components)}return i?Lx(i):t?"App":"Anonymous"}function kd(n){return Ye(n)&&"__vccOpts"in n}const pi=(n,e)=>B_(n,e,Ba);function $c(n){return!!(n&&n.__v_isShallow)}function Ux(){if(typeof window>"u")return;const n={style:"color:#3ba776"},e={style:"color:#1677ff"},t={style:"color:#f5222d"},i={style:"color:#eb2f96"},r={header(f){return st(f)?f.__isVue?["div",n,"VueInstance"]:ft(f)?["div",{},["span",n,u(f)],"<",a(f.value),">"]:Rn(f)?["div",{},["span",n,$c(f)?"ShallowReactive":"Reactive"],"<",a(f),`>${Fi(f)?" (readonly)":""}`]:Fi(f)?["div",{},["span",n,$c(f)?"ShallowReadonly":"Readonly"],"<",a(f),">"]:null:null},hasBody(f){return f&&f.__isVue},body(f){if(f&&f.__isVue)return["div",{},...s(f.$)]}};function s(f){const h=[];f.type.props&&f.props&&h.push(o("props",qe(f.props))),f.setupState!==ct&&h.push(o("setup",f.setupState)),f.data!==ct&&h.push(o("data",qe(f.data)));const d=l(f,"computed");d&&h.push(o("computed",d));const g=l(f,"inject");return g&&h.push(o("injected",g)),h.push(["div",{},["span",{style:i.style+";opacity:0.66"},"$ (internal): "],["object",{object:f}]]),h}function o(f,h){return h=_t({},h),Object.keys(h).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},f],["div",{style:"padding-left:1.25em"},...Object.keys(h).map(d=>["div",{},["span",i,d+": "],a(h[d],!1)])]]:["span",{}]}function a(f,h=!0){return typeof f=="number"?["span",e,f]:typeof f=="string"?["span",t,JSON.stringify(f)]:typeof f=="boolean"?["span",i,f]:st(f)?["object",{object:h?qe(f):f}]:["span",t,String(f)]}function l(f,h){const d=f.type;if(Ye(d))return;const g={};for(const v in f.ctx)c(d,v,h)&&(g[v]=f.ctx[v]);return g}function c(f,h,d){const g=f[d];if(He(g)&&g.includes(h)||st(g)&&h in g||f.extends&&c(f.extends,h,d)||f.mixins&&f.mixins.some(v=>c(v,h,d)))return!0}function u(f){return $c(f)?"ShallowRef":f.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(r):window.devtoolsFormatters=[r]}const zd="3.4.7",Kc=Re,Dx="http://www.w3.org/2000/svg",Ix="http://www.w3.org/1998/Math/MathML",Gi=typeof document<"u"?document:null,Gd=Gi&&Gi.createElement("template"),Ox={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Gi.createElementNS(Dx,n):e==="mathml"?Gi.createElementNS(Ix,n):Gi.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Gi.createTextNode(n),createComment:n=>Gi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Gi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Gd.innerHTML=i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n;const a=Gd.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Fx=Symbol("_vtc");function Nx(n,e,t){const i=n[Fx];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Bx=Symbol("_vod"),kx=Symbol("CSS_VAR_TEXT");function zx(n,e,t){const i=n.style,r=St(t);if(t&&!r){if(e&&!St(e))for(const s in e)t[s]==null&&Jc(i,s,"");for(const s in t)Jc(i,s,t[s])}else{const s=i.display;if(r){if(e!==t){const o=i[kx];o&&(t+=";"+o),i.cssText=t}}else e&&n.removeAttribute("style");Bx in n&&(i.display=s)}}const Gx=/[^\\];\s*$/,Hd=/\s*!important$/;function Jc(n,e,t){if(He(t))t.forEach(i=>Jc(n,e,i));else if(t==null&&(t=""),Gx.test(t)&&Kc(`Unexpected semicolon at the end of '${e}' style value: '${t}'`),e.startsWith("--"))n.setProperty(e,t);else{const i=Hx(n,e);Hd.test(t)?n.setProperty(dn(i),t.replace(Hd,""),"important"):n[i]=t}}const Vd=["Webkit","Moz","ms"],Zc={};function Hx(n,e){const t=Zc[e];if(t)return t;let i=oi(e);if(i!=="filter"&&i in n)return Zc[e]=i;i=ra(i);for(let r=0;r<Vd.length;r++){const s=Vd[r]+i;if(s in n)return Zc[e]=s}return e}const Wd="http://www.w3.org/1999/xlink";function Vx(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Wd,e.slice(6,e.length)):n.setAttributeNS(Wd,e,t);else{const s=m_(e);t==null||s&&!lh(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function Wx(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){n._value=t;const c=a==="OPTION"?n.getAttribute("value"):n.value,u=t??"";c!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=lh(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch(c){l||Kc(`Failed setting prop "${e}" on <${a.toLowerCase()}>: value ${t} is invalid.`,c)}l&&n.removeAttribute(e)}function Xx(n,e,t,i){n.addEventListener(e,t,i)}function jx(n,e,t,i){n.removeEventListener(e,t,i)}const Xd=Symbol("_vei");function Yx(n,e,t,i,r=null){const s=n[Xd]||(n[Xd]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=qx(e);if(i){const c=s[e]=Jx(i,r);Xx(n,a,c,l)}else o&&(jx(n,a,o,l),s[e]=void 0)}}const jd=/(?:Once|Passive|Capture)$/;function qx(n){let e;if(jd.test(n)){e={};let i;for(;i=n.match(jd);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):dn(n.slice(2)),e]}let Qc=0;const $x=Promise.resolve(),Kx=()=>Qc||($x.then(()=>Qc=0),Qc=Date.now());function Jx(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Pn(Zx(i,t.value),e,5,[i])};return t.value=n,t.attached=Kx(),t}function Zx(n,e){if(He(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Yd=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Qx=(n,e,t,i,r,s,o,a,l)=>{const c=r==="svg";e==="class"?Nx(n,i,c):e==="style"?zx(n,t,i):qs(e)?ea(e)||Yx(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ey(n,e,i,c))?Wx(n,e,i,s,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Vx(n,e,i,c))};function ey(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Yd(e)&&Ye(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Yd(e)&&St(t)?!1:e in n}/*! #__NO_SIDE_EFFECTS__ */function ty(n,e){const t=Rc(n);class i extends eu{constructor(s){super(t,s,e)}}return i.def=t,i}const ny=typeof HTMLElement<"u"?HTMLElement:class{};class eu extends ny{constructor(e,t={},i){super(),this._def=e,this._props=t,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&i?i(this._createVNode(),this.shadowRoot):(this.shadowRoot&&Kc("Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."),this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),Ma(()=>{this._connected||($d(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let i=0;i<this.attributes.length;i++)this._setAttr(this.attributes[i].name);this._ob=new MutationObserver(i=>{for(const r of i)this._setAttr(r.attributeName)}),this._ob.observe(this,{attributes:!0});const e=(i,r=!1)=>{const{props:s,styles:o}=i;let a;if(s&&!He(s))for(const l in s){const c=s[l];(c===Number||c&&c.type===Number)&&(l in this._props&&(this._props[l]=oh(this._props[l])),(a||(a=Object.create(null)))[oi(l)]=!0)}this._numberProps=a,r&&this._resolveProps(i),this._applyStyles(o),this._update()},t=this._def.__asyncLoader;t?t().then(i=>e(i,!0)):e(this._def)}_resolveProps(e){const{props:t}=e,i=He(t)?t:Object.keys(t||{});for(const r of Object.keys(this))r[0]!=="_"&&i.includes(r)&&this._setProp(r,this[r],!0,!1);for(const r of i.map(oi))Object.defineProperty(this,r,{get(){return this._getProp(r)},set(s){this._setProp(r,s)}})}_setAttr(e){let t=this.getAttribute(e);const i=oi(e);this._numberProps&&this._numberProps[i]&&(t=oh(t)),this._setProp(i,t,!1)}_getProp(e){return this._props[e]}_setProp(e,t,i=!0,r=!0){t!==this._props[e]&&(this._props[e]=t,r&&this._instance&&this._update(),i&&(t===!0?this.setAttribute(dn(e),""):typeof t=="string"||typeof t=="number"?this.setAttribute(dn(e),t+""):t||this.removeAttribute(dn(e))))}_update(){$d(this._createVNode(),this.shadowRoot)}_createVNode(){const e=$n(this._def,_t({},this._props));return this._instance||(e.ce=t=>{this._instance=t,t.isCE=!0,t.ceReload=s=>{this._styles&&(this._styles.forEach(o=>this.shadowRoot.removeChild(o)),this._styles.length=0),this._applyStyles(s),this._instance=null,this._update()};const i=(s,o)=>{this.dispatchEvent(new CustomEvent(s,{detail:o}))};t.emit=(s,...o)=>{i(s,o),dn(s)!==s&&i(dn(s),o)};let r=this;for(;r=r&&(r.parentNode||r.host);)if(r instanceof eu){t.parent=r._instance,t.provides=r._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach(t=>{const i=document.createElement("style");i.textContent=t,this.shadowRoot.appendChild(i),(this._styles||(this._styles=[])).push(i)})}}const iy=_t({patchProp:Qx},Ox);let qd;function ry(){return qd||(qd=cx(iy))}const $d=(...n)=>{ry().render(...n)};function sy(){Ux()}sy();const oy=n=>{class e extends n{constructor(){var i;super();const r=document.createElement("style");r.textContent=":root{--vt-c-white: #ffffff;--vt-c-white-soft: #f8f8f8;--vt-c-white-mute: #f2f2f2;--vt-c-black: #181818;--vt-c-black-soft: #222222;--vt-c-black-mute: #282828;--vt-c-indigo: #2c3e50;--vt-c-divider-light-1: rgba(60, 60, 60, .29);--vt-c-divider-light-2: rgba(60, 60, 60, .12);--vt-c-divider-dark-1: rgba(84, 84, 84, .65);--vt-c-divider-dark-2: rgba(84, 84, 84, .48);--vt-c-text-light-1: var(--vt-c-indigo);--vt-c-text-light-2: rgba(60, 60, 60, .66);--vt-c-text-dark-1: var(--vt-c-white);--vt-c-text-dark-2: rgba(235, 235, 235, .64)}:root{--color-background: var(--vt-c-white);--color-background-soft: var(--vt-c-white-soft);--color-background-mute: var(--vt-c-white-mute);--color-border: var(--vt-c-divider-light-2);--color-border-hover: var(--vt-c-divider-light-1);--color-heading: var(--vt-c-text-light-1);--color-text: var(--vt-c-text-light-1);--section-gap: 160px}@media (prefers-color-scheme: dark){:root{--color-background: var(--vt-c-black);--color-background-soft: var(--vt-c-black-soft);--color-background-mute: var(--vt-c-black-mute);--color-border: var(--vt-c-divider-dark-2);--color-border-hover: var(--vt-c-divider-dark-1);--color-heading: var(--vt-c-text-dark-1);--color-text: var(--vt-c-text-dark-2)}}*,*:before,*:after{box-sizing:border-box;margin:0;font-weight:400}body{min-height:100vh;color:var(--color-text);background:var(--color-background);transition:color .5s,background-color .5s;line-height:1.6;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:15px;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}body{display:flex}#app{display:flex;font-weight:400;flex:1}a,.green{text-decoration:none;color:#00bd7e;transition:.4s;padding:3px}@media (hover: hover){a:hover{background-color:#00bd7e33}}#threedview[data-v-2505aed2]{background-color:linen;flex:1}#threedview[data-v-2505aed2] canvas{position:absolute}.rel[data-v-2505aed2]{display:flex;position:relative}.abs[data-v-2505aed2]{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;justify-content:center;align-items:center;pointer-events:none}.server-info[data-v-2505aed2]{position:absolute;top:10px;left:10px;pointer-events:none;font-weight:700;font-size:10px;color:#fff;text-shadow:#000 0 0 5px}.entities[data-v-2505aed2]{position:absolute;top:10px;right:10px;pointer-events:none;font-weight:700;font-size:10px;color:#fff;text-shadow:#000 0 0 5px}.entity[data-v-2505aed2]:not(.selected){pointer-events:all;cursor:pointer}.entity.selected[data-v-2505aed2]{color:gold;cursor:default}.dev[data-v-2505aed2]{position:absolute;bottom:10px;left:10px;pointer-events:none;font-weight:700;font-size:10px;color:#fff;text-shadow:#000 0 0 5px}.actions[data-v-2505aed2]{text-align:right;position:absolute;bottom:10px;right:10px}#axis[data-v-2505aed2]{width:50px;height:50px}\n",(i=this.shadowRoot)==null||i.prepend(r)}}return e};var ay=!1;function za(n,e,t){return Array.isArray(n)?(n.length=Math.max(n.length,e),n.splice(e,1,t),t):(n[e]=t,t)}function tu(n,e){if(Array.isArray(n)){n.splice(e,1);return}delete n[e]}function ly(){return Kd().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Kd(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const cy=typeof Proxy=="function",uy="devtools-plugin:setup",fy="plugin:settings:set";let ts,nu;function hy(){var n;return ts!==void 0||(typeof window<"u"&&window.performance?(ts=!0,nu=window.performance):typeof global<"u"&&(!((n=global.perf_hooks)===null||n===void 0)&&n.performance)?(ts=!0,nu=global.perf_hooks.performance):ts=!1),ts}function dy(){return hy()?nu.now():Date.now()}class py{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const i={};if(e.settings)for(const o in e.settings){const a=e.settings[o];i[o]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let s=Object.assign({},i);try{const o=localStorage.getItem(r),a=JSON.parse(o);Object.assign(s,a)}catch{}this.fallbacks={getSettings(){return s},setSettings(o){try{localStorage.setItem(r,JSON.stringify(o))}catch{}s=o},now(){return dy()}},t&&t.on(fy,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function Jd(n,e){const t=n,i=Kd(),r=ly(),s=cy&&t.enableEarlyProxy;if(r&&(i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!s))r.emit(uy,n,e);else{const o=s?new py(t,r):null;(i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:t,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let iu;const ns=n=>iu=n,Zd=Symbol("pinia");function xr(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var Jn;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Jn||(Jn={}));const Ga=typeof window<"u",Ha=Ga,Qd=(()=>typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:typeof globalThis=="object"?globalThis:{HTMLElement:null})();function my(n,{autoBom:e=!1}={}){return e&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(n.type)?new Blob([String.fromCharCode(65279),n],{type:n.type}):n}function ru(n,e,t){const i=new XMLHttpRequest;i.open("GET",n),i.responseType="blob",i.onload=function(){np(i.response,e,t)},i.onerror=function(){console.error("could not download file")},i.send()}function ep(n){const e=new XMLHttpRequest;e.open("HEAD",n,!1);try{e.send()}catch{}return e.status>=200&&e.status<=299}function Va(n){try{n.dispatchEvent(new MouseEvent("click"))}catch{const t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),n.dispatchEvent(t)}}const Wa=typeof navigator=="object"?navigator:{userAgent:""},tp=(()=>/Macintosh/.test(Wa.userAgent)&&/AppleWebKit/.test(Wa.userAgent)&&!/Safari/.test(Wa.userAgent))(),np=Ga?typeof HTMLAnchorElement<"u"&&"download"in HTMLAnchorElement.prototype&&!tp?gy:"msSaveOrOpenBlob"in Wa?vy:_y:()=>{};function gy(n,e="download",t){const i=document.createElement("a");i.download=e,i.rel="noopener",typeof n=="string"?(i.href=n,i.origin!==location.origin?ep(i.href)?ru(n,e,t):(i.target="_blank",Va(i)):Va(i)):(i.href=URL.createObjectURL(n),setTimeout(function(){URL.revokeObjectURL(i.href)},4e4),setTimeout(function(){Va(i)},0))}function vy(n,e="download",t){if(typeof n=="string")if(ep(n))ru(n,e,t);else{const i=document.createElement("a");i.href=n,i.target="_blank",setTimeout(function(){Va(i)})}else navigator.msSaveOrOpenBlob(my(n,t),e)}function _y(n,e,t,i){if(i=i||open("","_blank"),i&&(i.document.title=i.document.body.innerText="downloading..."),typeof n=="string")return ru(n,e,t);const r=n.type==="application/octet-stream",s=/constructor/i.test(String(Qd.HTMLElement))||"safari"in Qd,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||r&&s||tp)&&typeof FileReader<"u"){const a=new FileReader;a.onloadend=function(){let l=a.result;if(typeof l!="string")throw i=null,new Error("Wrong reader.result type");l=o?l:l.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=l:location.assign(l),i=null},a.readAsDataURL(n)}else{const a=URL.createObjectURL(n);i?i.location.assign(a):location.href=a,i=null,setTimeout(function(){URL.revokeObjectURL(a)},4e4)}}function Dt(n,e){const t="🍍 "+n;typeof __VUE_DEVTOOLS_TOAST__=="function"?__VUE_DEVTOOLS_TOAST__(t,e):e==="error"?console.error(t):e==="warn"?console.warn(t):console.log(t)}function su(n){return"_a"in n&&"install"in n}function ip(){if(!("clipboard"in navigator))return Dt("Your browser doesn't support the Clipboard API","error"),!0}function rp(n){return n instanceof Error&&n.message.toLowerCase().includes("document is not focused")?(Dt('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.',"warn"),!0):!1}async function xy(n){if(!ip())try{await navigator.clipboard.writeText(JSON.stringify(n.state.value)),Dt("Global state copied to clipboard.")}catch(e){if(rp(e))return;Dt("Failed to serialize the state. Check the console for more details.","error"),console.error(e)}}async function yy(n){if(!ip())try{sp(n,JSON.parse(await navigator.clipboard.readText())),Dt("Global state pasted from clipboard.")}catch(e){if(rp(e))return;Dt("Failed to deserialize the state from clipboard. Check the console for more details.","error"),console.error(e)}}async function Sy(n){try{np(new Blob([JSON.stringify(n.state.value)],{type:"text/plain;charset=utf-8"}),"pinia-state.json")}catch(e){Dt("Failed to export the state as JSON. Check the console for more details.","error"),console.error(e)}}let mi;function by(){mi||(mi=document.createElement("input"),mi.type="file",mi.accept=".json");function n(){return new Promise((e,t)=>{mi.onchange=async()=>{const i=mi.files;if(!i)return e(null);const r=i.item(0);return e(r?{text:await r.text(),file:r}:null)},mi.oncancel=()=>e(null),mi.onerror=t,mi.click()})}return n}async function My(n){try{const t=await by()();if(!t)return;const{text:i,file:r}=t;sp(n,JSON.parse(i)),Dt(`Global state imported from "${r.name}".`)}catch(e){Dt("Failed to import the state from JSON. Check the console for more details.","error"),console.error(e)}}function sp(n,e){for(const t in e){const i=n.state.value[t];i?Object.assign(i,e[t]):n.state.value[t]=e[t]}}function In(n){return{_custom:{display:n}}}const op="🍍 Pinia (root)",ou="_root";function Ey(n){return su(n)?{id:ou,label:op}:{id:n.$id,label:n.$id}}function wy(n){if(su(n)){const t=Array.from(n._s.keys()),i=n._s;return{state:t.map(s=>({editable:!0,key:s,value:n.state.value[s]})),getters:t.filter(s=>i.get(s)._getters).map(s=>{const o=i.get(s);return{editable:!1,key:s,value:o._getters.reduce((a,l)=>(a[l]=o[l],a),{})}})}}const e={state:Object.keys(n.$state).map(t=>({editable:!0,key:t,value:n.$state[t]}))};return n._getters&&n._getters.length&&(e.getters=n._getters.map(t=>({editable:!1,key:t,value:n[t]}))),n._customProperties.size&&(e.customProperties=Array.from(n._customProperties).map(t=>({editable:!0,key:t,value:n[t]}))),e}function Ty(n){return n?Array.isArray(n)?n.reduce((e,t)=>(e.keys.push(t.key),e.operations.push(t.type),e.oldValue[t.key]=t.oldValue,e.newValue[t.key]=t.newValue,e),{oldValue:{},keys:[],operations:[],newValue:{}}):{operation:In(n.type),key:In(n.key),oldValue:n.oldValue,newValue:n.newValue}:{}}function Ay(n){switch(n){case Jn.direct:return"mutation";case Jn.patchFunction:return"$patch";case Jn.patchObject:return"$patch";default:return"unknown"}}let is=!0;const Xa=[],yr="pinia:mutations",Xt="pinia",{assign:Cy}=Object,ja=n=>"🍍 "+n;function Ry(n,e){Jd({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:Xa,app:n},t=>{typeof t.now!="function"&&Dt("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),t.addTimelineLayer({id:yr,label:"Pinia 🍍",color:15064968}),t.addInspector({id:Xt,label:"Pinia 🍍",icon:"storage",treeFilterPlaceholder:"Search stores",actions:[{icon:"content_copy",action:()=>{xy(e)},tooltip:"Serialize and copy the state"},{icon:"content_paste",action:async()=>{await yy(e),t.sendInspectorTree(Xt),t.sendInspectorState(Xt)},tooltip:"Replace the state with the content of your clipboard"},{icon:"save",action:()=>{Sy(e)},tooltip:"Save the state as a JSON file"},{icon:"folder_open",action:async()=>{await My(e),t.sendInspectorTree(Xt),t.sendInspectorState(Xt)},tooltip:"Import the state from a JSON file"}],nodeActions:[{icon:"restore",tooltip:'Reset the state (with "$reset")',action:i=>{const r=e._s.get(i);r?typeof r.$reset!="function"?Dt(`Cannot reset "${i}" store because it doesn't have a "$reset" method implemented.`,"warn"):(r.$reset(),Dt(`Store "${i}" reset.`)):Dt(`Cannot reset "${i}" store because it wasn't found.`,"warn")}}]}),t.on.inspectComponent((i,r)=>{const s=i.componentInstance&&i.componentInstance.proxy;if(s&&s._pStores){const o=i.componentInstance.proxy._pStores;Object.values(o).forEach(a=>{i.instanceData.state.push({type:ja(a.$id),key:"state",editable:!0,value:a._isOptionsAPI?{_custom:{value:qe(a.$state),actions:[{icon:"restore",tooltip:"Reset the state of this store",action:()=>a.$reset()}]}}:Object.keys(a.$state).reduce((l,c)=>(l[c]=a.$state[c],l),{})}),a._getters&&a._getters.length&&i.instanceData.state.push({type:ja(a.$id),key:"getters",editable:!1,value:a._getters.reduce((l,c)=>{try{l[c]=a[c]}catch(u){l[c]=u}return l},{})})})}}),t.on.getInspectorTree(i=>{if(i.app===n&&i.inspectorId===Xt){let r=[e];r=r.concat(Array.from(e._s.values())),i.rootNodes=(i.filter?r.filter(s=>"$id"in s?s.$id.toLowerCase().includes(i.filter.toLowerCase()):op.toLowerCase().includes(i.filter.toLowerCase())):r).map(Ey)}}),t.on.getInspectorState(i=>{if(i.app===n&&i.inspectorId===Xt){const r=i.nodeId===ou?e:e._s.get(i.nodeId);if(!r)return;r&&(i.state=wy(r))}}),t.on.editInspectorState((i,r)=>{if(i.app===n&&i.inspectorId===Xt){const s=i.nodeId===ou?e:e._s.get(i.nodeId);if(!s)return Dt(`store "${i.nodeId}" not found`,"error");const{path:o}=i;su(s)?o.unshift("state"):(o.length!==1||!s._customProperties.has(o[0])||o[0]in s.$state)&&o.unshift("$state"),is=!1,i.set(s,o,i.state.value),is=!0}}),t.on.editComponentState(i=>{if(i.type.startsWith("🍍")){const r=i.type.replace(/^🍍\s*/,""),s=e._s.get(r);if(!s)return Dt(`store "${r}" not found`,"error");const{path:o}=i;if(o[0]!=="state")return Dt(`Invalid path for store "${r}":
${o}
Only state can be modified.`);o[0]="$state",is=!1,i.set(s,o,i.state.value),is=!0}})})}function Py(n,e){Xa.includes(ja(e.$id))||Xa.push(ja(e.$id)),Jd({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:Xa,app:n,settings:{logStoreChanges:{label:"Notify about new/deleted stores",type:"boolean",defaultValue:!0}}},t=>{const i=typeof t.now=="function"?t.now.bind(t):Date.now;e.$onAction(({after:o,onError:a,name:l,args:c})=>{const u=ap++;t.addTimelineEvent({layerId:yr,event:{time:i(),title:"🛫 "+l,subtitle:"start",data:{store:In(e.$id),action:In(l),args:c},groupId:u}}),o(f=>{Hi=void 0,t.addTimelineEvent({layerId:yr,event:{time:i(),title:"🛬 "+l,subtitle:"end",data:{store:In(e.$id),action:In(l),args:c,result:f},groupId:u}})}),a(f=>{Hi=void 0,t.addTimelineEvent({layerId:yr,event:{time:i(),logType:"error",title:"💥 "+l,subtitle:"end",data:{store:In(e.$id),action:In(l),args:c,error:f},groupId:u}})})},!0),e._customProperties.forEach(o=>{Tt(()=>Vt(e[o]),(a,l)=>{t.notifyComponentUpdate(),t.sendInspectorState(Xt),is&&t.addTimelineEvent({layerId:yr,event:{time:i(),title:"Change",subtitle:o,data:{newValue:a,oldValue:l},groupId:Hi}})},{deep:!0})}),e.$subscribe(({events:o,type:a},l)=>{if(t.notifyComponentUpdate(),t.sendInspectorState(Xt),!is)return;const c={time:i(),title:Ay(a),data:Cy({store:In(e.$id)},Ty(o)),groupId:Hi};a===Jn.patchFunction?c.subtitle="⤵️":a===Jn.patchObject?c.subtitle="🧩":o&&!Array.isArray(o)&&(c.subtitle=o.type),o&&(c.data["rawEvent(s)"]={_custom:{display:"DebuggerEvent",type:"object",tooltip:"raw DebuggerEvent[]",value:o}}),t.addTimelineEvent({layerId:yr,event:c})},{detached:!0,flush:"sync"});const r=e._hotUpdate;e._hotUpdate=ai(o=>{r(o),t.addTimelineEvent({layerId:yr,event:{time:i(),title:"🔥 "+e.$id,subtitle:"HMR update",data:{store:In(e.$id),info:In("HMR update")}}}),t.notifyComponentUpdate(),t.sendInspectorTree(Xt),t.sendInspectorState(Xt)});const{$dispose:s}=e;e.$dispose=()=>{s(),t.notifyComponentUpdate(),t.sendInspectorTree(Xt),t.sendInspectorState(Xt),t.getSettings().logStoreChanges&&Dt(`Disposed "${e.$id}" store 🗑`)},t.notifyComponentUpdate(),t.sendInspectorTree(Xt),t.sendInspectorState(Xt),t.getSettings().logStoreChanges&&Dt(`"${e.$id}" store installed 🆕`)})}let ap=0,Hi;function lp(n,e,t){const i=e.reduce((r,s)=>(r[s]=qe(n)[s],r),{});for(const r in i)n[r]=function(){const s=ap,o=t?new Proxy(n,{get(...l){return Hi=s,Reflect.get(...l)},set(...l){return Hi=s,Reflect.set(...l)}}):n;Hi=s;const a=i[r].apply(o,arguments);return Hi=void 0,a}}function Ly({app:n,store:e,options:t}){if(e.$id.startsWith("__hot:"))return;e._isOptionsAPI=!!t.state,lp(e,Object.keys(t.actions),e._isOptionsAPI);const i=e._hotUpdate;qe(e)._hotUpdate=function(r){i.apply(this,arguments),lp(e,Object.keys(r._hmrPayload.actions),!!e._isOptionsAPI)},Py(n,e)}function Uy(){const n=fh(!0),e=n.run(()=>ht({}));let t=[],i=[];const r=ai({install(s){ns(r),r._a=s,s.provide(Zd,r),s.config.globalProperties.$pinia=r,Ha&&Ry(s,r),i.forEach(o=>t.push(o)),i=[]},use(s){return!this._a&&!ay?i.push(s):t.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return Ha&&typeof Proxy<"u"&&r.use(Ly),r}function cp(n,e){for(const t in e){const i=e[t];if(!(t in n))continue;const r=n[t];xr(r)&&xr(i)&&!ft(i)&&!Rn(i)?n[t]=cp(r,i):n[t]=i}return n}const Dy=()=>{};function up(n,e,t,i=Dy){n.push(e);const r=()=>{const s=n.indexOf(e);s>-1&&(n.splice(s,1),i())};return!t&&uc()&&hh(r),r}function rs(n,...e){n.slice().forEach(t=>{t(...e)})}const Iy=n=>n();function au(n,e){n instanceof Map&&e instanceof Map&&e.forEach((t,i)=>n.set(i,t)),n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const i=e[t],r=n[t];xr(r)&&xr(i)&&n.hasOwnProperty(t)&&!ft(i)&&!Rn(i)?n[t]=au(r,i):n[t]=i}return n}const Oy=Symbol("pinia:skipHydration");function Fy(n){return!xr(n)||!n.hasOwnProperty(Oy)}const{assign:Sn}=Object;function fp(n){return!!(ft(n)&&n.effect)}function hp(n,e,t,i){const{state:r,actions:s,getters:o}=e,a=t.state.value[n];let l;function c(){!a&&!i&&(t.state.value[n]=r?r():{});const u=zh(i?ht(r?r():{}).value:t.state.value[n]);return Sn(u,s,Object.keys(o||{}).reduce((f,h)=>(h in u&&console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${h}" in store "${n}".`),f[h]=ai(pi(()=>{ns(t);const d=t._s.get(n);return o[h].call(d,d)})),f),{}))}return l=lu(n,c,e,t,i,!0),l}function lu(n,e,t={},i,r,s){let o;const a=Sn({actions:{}},t);if(!i._e.active)throw new Error("Pinia destroyed");const l={deep:!0};l.onTrigger=x=>{c?d=x:c==!1&&!b._hotUpdating&&(Array.isArray(d)?d.push(x):console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."))};let c,u,f=[],h=[],d;const g=i.state.value[n];!s&&!g&&!r&&(i.state.value[n]={});const v=ht({});let p;function m(x){let w;c=u=!1,d=[],typeof x=="function"?(x(i.state.value[n]),w={type:Jn.patchFunction,storeId:n,events:d}):(au(i.state.value[n],x),w={type:Jn.patchObject,payload:x,storeId:n,events:d});const L=p=Symbol();Ma().then(()=>{p===L&&(c=!0)}),u=!0,rs(f,w,i.state.value[n])}const S=s?function(){const{state:w}=t,L=w?w():{};this.$patch(V=>{Sn(V,L)})}:()=>{throw new Error(`🍍: Store "${n}" is built using the setup syntax and does not implement $reset().`)};function _(){o.stop(),f=[],h=[],i._s.delete(n)}function M(x,w){return function(){ns(i);const L=Array.from(arguments),V=[],P=[];function j(Z){V.push(Z)}function G(Z){P.push(Z)}rs(h,{args:L,name:x,store:b,after:j,onError:G});let te;try{te=w.apply(this&&this.$id===n?this:b,L)}catch(Z){throw rs(P,Z),Z}return te instanceof Promise?te.then(Z=>(rs(V,Z),Z)).catch(Z=>(rs(P,Z),Promise.reject(Z))):(rs(V,te),te)}}const A=ai({actions:{},getters:{},state:[],hotState:v}),T={_p:i,$id:n,$onAction:up.bind(null,h),$patch:m,$reset:S,$subscribe(x,w={}){const L=up(f,x,w.detached,()=>V()),V=o.run(()=>Tt(()=>i.state.value[n],P=>{(w.flush==="sync"?u:c)&&x({storeId:n,type:Jn.direct,events:d},P)},Sn({},l,w)));return L},$dispose:_},b=ga(Sn({_hmrPayload:A,_customProperties:ai(new Set)},T));i._s.set(n,b);const J=(i._a&&i._a.runWithContext||Iy)(()=>i._e.run(()=>(o=fh()).run(e)));for(const x in J){const w=J[x];if(ft(w)&&!fp(w)||Rn(w))r?za(v.value,x,ya(J,x)):s||(g&&Fy(w)&&(ft(w)?w.value=g[x]:au(w,g[x])),i.state.value[n][x]=w),A.state.push(x);else if(typeof w=="function"){const L=r?w:M(x,w);J[x]=L,A.actions[x]=w,a.actions[x]=w}else fp(w)&&(A.getters[x]=s?t.getters[x]:w,Ga&&(J._getters||(J._getters=ai([]))).push(x))}if(Sn(b,J),Sn(qe(b),J),Object.defineProperty(b,"$state",{get:()=>r?v.value:i.state.value[n],set:x=>{if(r)throw new Error("cannot set hotState");m(w=>{Sn(w,x)})}}),b._hotUpdate=ai(x=>{b._hotUpdating=!0,x._hmrPayload.state.forEach(w=>{if(w in b.$state){const L=x.$state[w],V=b.$state[w];typeof L=="object"&&xr(L)&&xr(V)?cp(L,V):x.$state[w]=V}za(b,w,ya(x.$state,w))}),Object.keys(b.$state).forEach(w=>{w in x.$state||tu(b,w)}),c=!1,u=!1,i.state.value[n]=ya(x._hmrPayload,"hotState"),u=!0,Ma().then(()=>{c=!0});for(const w in x._hmrPayload.actions){const L=x[w];za(b,w,M(w,L))}for(const w in x._hmrPayload.getters){const L=x._hmrPayload.getters[w],V=s?pi(()=>(ns(i),L.call(b,b))):L;za(b,w,V)}Object.keys(b._hmrPayload.getters).forEach(w=>{w in x._hmrPayload.getters||tu(b,w)}),Object.keys(b._hmrPayload.actions).forEach(w=>{w in x._hmrPayload.actions||tu(b,w)}),b._hmrPayload=x._hmrPayload,b._getters=x._getters,b._hotUpdating=!1}),Ha){const x={writable:!0,configurable:!0,enumerable:!1};["_p","_hmrPayload","_getters","_customProperties"].forEach(w=>{Object.defineProperty(b,w,Sn({value:b[w]},x))})}return i._p.forEach(x=>{if(Ha){const w=o.run(()=>x({store:b,app:i._a,pinia:i,options:a}));Object.keys(w||{}).forEach(L=>b._customProperties.add(L)),Sn(b,w)}else Sn(b,o.run(()=>x({store:b,app:i._a,pinia:i,options:a})))}),b.$state&&typeof b.$state=="object"&&typeof b.$state.constructor=="function"&&!b.$state.constructor.toString().includes("[native code]")&&console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${b.$id}".`),g&&s&&t.hydrate&&t.hydrate(b.$state,g),c=!0,u=!0,b}function cu(n,e,t){let i,r;const s=typeof e=="function";if(typeof n=="string")i=n,r=s?t:e;else if(r=n,i=n.id,typeof i!="string")throw new Error('[🍍]: "defineStore()" must be passed a store id as its first argument.');function o(a,l){const c=K0();if(a=a||(c?oo(Zd,null):null),a&&ns(a),!iu)throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);a=iu,a._s.has(i)||(s?lu(i,e,r,a):hp(i,r,a),o._pinia=a);const u=a._s.get(i);if(l){const f="__hot:"+i,h=s?lu(f,e,r,a,!0):hp(f,Sn({},r),a,!0);l._hotUpdate(h),delete a.state.value[f],a._s.delete(f)}if(Ga){const f=bx();if(f&&f.proxy&&!l){const h=f.proxy,d="_pStores"in h?h._pStores:h._pStores={};d[i]=u}}return u}return o.$id=i,o}function Ny(n){{n=qe(n);const e={};for(const t in n){const i=n[t];(ft(i)||Rn(i))&&(e[t]=ya(n,t))}return e}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uu="161",ss={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},os={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},By=0,dp=1,ky=2,pp=1,zy=2,gi=3,On=0,Qt=1,on=2,Vi=0,as=1,mp=2,gp=3,vp=4,Gy=5,Sr=100,Hy=101,Vy=102,_p=103,xp=104,Wy=200,Xy=201,jy=202,Yy=203,fu=204,hu=205,qy=206,$y=207,Ky=208,Jy=209,Zy=210,Qy=211,eS=212,tS=213,nS=214,iS=0,rS=1,sS=2,Ya=3,oS=4,aS=5,lS=6,cS=7,du=0,uS=1,fS=2,Wi=0,hS=1,dS=2,pS=3,mS=4,gS=5,vS=6,yp=300,ls=301,cs=302,pu=303,mu=304,qa=306,$a=1e3,Fn=1001,gu=1002,dt=1003,Sp=1004,mo=1005,jt=1006,vu=1007,br=1008,Xi=1009,_S=1010,xS=1011,_u=1012,bp=1013,ji=1014,vi=1015,go=1016,Mp=1017,Ep=1018,Mr=1020,yS=1021,bn=1023,SS=1024,bS=1025,Er=1026,us=1027,MS=1028,wp=1029,ES=1030,Tp=1031,Ap=1033,xu=33776,yu=33777,Su=33778,bu=33779,Cp=35840,Rp=35841,Pp=35842,Lp=35843,Up=36196,Dp=37492,Ip=37496,Op=37808,Fp=37809,Np=37810,Bp=37811,kp=37812,zp=37813,Gp=37814,Hp=37815,Vp=37816,Wp=37817,Xp=37818,jp=37819,Yp=37820,qp=37821,Mu=36492,$p=36494,Kp=36495,wS=36283,Jp=36284,Zp=36285,Qp=36286,em=3e3,wr=3001,TS=3200,tm=3201,nm=0,AS=1,Mn="",It="srgb",_i="srgb-linear",Eu="display-p3",Ka="display-p3-linear",Ja="linear",pt="srgb",Za="rec709",Qa="p3",fs=7680,im=519,CS=512,RS=513,PS=514,rm=515,LS=516,US=517,DS=518,IS=519,sm=35044,om="300 es",wu=1035,xi=2e3,el=2001;class Tr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let am=1234567;const vo=Math.PI/180,_o=180/Math.PI;function Ar(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function Ot(n,e,t){return Math.max(e,Math.min(t,n))}function Tu(n,e){return(n%e+e)%e}function OS(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function FS(n,e,t){return n!==e?(t-n)/(e-n):0}function xo(n,e,t){return(1-t)*n+t*e}function NS(n,e,t,i){return xo(n,e,1-Math.exp(-t*i))}function BS(n,e=1){return e-Math.abs(Tu(n,e*2)-e)}function kS(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function zS(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function GS(n,e){return n+Math.floor(Math.random()*(e-n+1))}function HS(n,e){return n+Math.random()*(e-n)}function VS(n){return n*(.5-Math.random())}function WS(n){n!==void 0&&(am=n);let e=am+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function XS(n){return n*vo}function jS(n){return n*_o}function Au(n){return(n&n-1)===0&&n!==0}function YS(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function tl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function qS(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),d=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*f,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function hs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function en(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const $S={DEG2RAD:vo,RAD2DEG:_o,generateUUID:Ar,clamp:Ot,euclideanModulo:Tu,mapLinear:OS,inverseLerp:FS,lerp:xo,damp:NS,pingpong:BS,smoothstep:kS,smootherstep:zS,randInt:GS,randFloat:HS,randFloatSpread:VS,seededRandom:WS,degToRad:XS,radToDeg:jS,isPowerOfTwo:Au,ceilPowerOfTwo:YS,floorPowerOfTwo:tl,setQuaternionFromProperEuler:qS,normalize:en,denormalize:hs};class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nt{constructor(e,t,i,r,s,o,a,l,c){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],v=r[0],p=r[3],m=r[6],S=r[1],_=r[4],M=r[7],A=r[2],T=r[5],b=r[8];return s[0]=o*v+a*S+l*A,s[3]=o*p+a*_+l*T,s[6]=o*m+a*M+l*b,s[1]=c*v+u*S+f*A,s[4]=c*p+u*_+f*T,s[7]=c*m+u*M+f*b,s[2]=h*v+d*S+g*A,s[5]=h*p+d*_+g*T,s[8]=h*m+d*M+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=t*f+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Cu.makeScale(e,t)),this}rotate(e){return this.premultiply(Cu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cu=new nt;function lm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function yo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function KS(){const n=yo("canvas");return n.style.display="block",n}const cm={};function ds(n){n in cm||(cm[n]=!0,console.warn(n))}const um=new nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),fm=new nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),nl={[_i]:{transfer:Ja,primaries:Za,toReference:n=>n,fromReference:n=>n},[It]:{transfer:pt,primaries:Za,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ka]:{transfer:Ja,primaries:Qa,toReference:n=>n.applyMatrix3(fm),fromReference:n=>n.applyMatrix3(um)},[Eu]:{transfer:pt,primaries:Qa,toReference:n=>n.convertSRGBToLinear().applyMatrix3(fm),fromReference:n=>n.applyMatrix3(um).convertLinearToSRGB()}},JS=new Set([_i,Ka]),ot={enabled:!0,_workingColorSpace:_i,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!JS.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=nl[e].toReference,r=nl[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return nl[n].primaries},getTransfer:function(n){return n===Mn?Ja:nl[n].transfer}};function ps(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ru(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ms;class hm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ms===void 0&&(ms=yo("canvas")),ms.width=e.width,ms.height=e.height;const i=ms.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ms}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ps(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ps(t[i]/255)*255):t[i]=ps(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ZS=0;class dm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=Ar(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Pu(r[o].image)):s.push(Pu(r[o]))}else s=Pu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Pu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?hm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let QS=0;class Ct extends Tr{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,i=Fn,r=Fn,s=jt,o=br,a=bn,l=Xi,c=Ct.DEFAULT_ANISOTROPY,u=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=Ar(),this.name="",this.source=new dm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ds("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===wr?It:Mn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $a:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case gu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $a:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case gu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ds("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===It?wr:em}set encoding(e){ds("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===wr?It:Mn}}Ct.DEFAULT_IMAGE=null,Ct.DEFAULT_MAPPING=yp,Ct.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,t=0,i=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,M=(d+1)/2,A=(m+1)/2,T=(u+h)/4,b=(f+v)/4,O=(g+p)/4;return _>M&&_>A?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=T/i,s=b/i):M>A?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=T/r,s=O/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=b/s,r=O/s),this.set(i,r,s,t),this}let S=Math.sqrt((p-g)*(p-g)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(f-v)/S,this.z=(h-u)/S,this.w=Math.acos((c+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eb extends Tr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(ds("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===wr?It:Mn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Ct(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new dm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cr extends eb{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class pm extends Ct{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=dt,this.minFilter=dt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tb extends Ct{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=dt,this.minFilter=dt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==h||c!==d||u!==g){let p=1-a;const m=l*h+c*d+u*g+f*v,S=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const A=Math.sqrt(_),T=Math.atan2(A,m*S);p=Math.sin(p*T)/A,a=Math.sin(a*T)/A}const M=a*S;if(l=l*p+h*M,c=c*p+d*M,u=u*p+g*M,f=f*p+v*M,p===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Lu.copy(this).projectOnVector(e),this.sub(Lu)}reflect(e){return this.sub(Lu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lu=new $,mm=new Zn;class gs{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nn):Nn.fromBufferAttribute(s,o),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),il.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),il.copy(i.boundingBox)),il.applyMatrix4(e.matrixWorld),this.union(il)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(So),rl.subVectors(this.max,So),vs.subVectors(e.a,So),_s.subVectors(e.b,So),xs.subVectors(e.c,So),Yi.subVectors(_s,vs),qi.subVectors(xs,_s),Rr.subVectors(vs,xs);let t=[0,-Yi.z,Yi.y,0,-qi.z,qi.y,0,-Rr.z,Rr.y,Yi.z,0,-Yi.x,qi.z,0,-qi.x,Rr.z,0,-Rr.x,-Yi.y,Yi.x,0,-qi.y,qi.x,0,-Rr.y,Rr.x,0];return!Uu(t,vs,_s,xs,rl)||(t=[1,0,0,0,1,0,0,0,1],!Uu(t,vs,_s,xs,rl))?!1:(sl.crossVectors(Yi,qi),t=[sl.x,sl.y,sl.z],Uu(t,vs,_s,xs,rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yi=[new $,new $,new $,new $,new $,new $,new $,new $],Nn=new $,il=new gs,vs=new $,_s=new $,xs=new $,Yi=new $,qi=new $,Rr=new $,So=new $,rl=new $,sl=new $,Pr=new $;function Uu(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Pr.fromArray(n,s);const a=r.x*Math.abs(Pr.x)+r.y*Math.abs(Pr.y)+r.z*Math.abs(Pr.z),l=e.dot(Pr),c=t.dot(Pr),u=i.dot(Pr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const nb=new gs,bo=new $,Du=new $;class ys{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):nb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bo.subVectors(e,this.center);const t=bo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(bo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Du.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bo.copy(e.center).add(Du)),this.expandByPoint(bo.copy(e.center).sub(Du))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Si=new $,Iu=new $,ol=new $,$i=new $,Ou=new $,al=new $,Fu=new $;class ll{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Iu.copy(e).add(t).multiplyScalar(.5),ol.copy(t).sub(e).normalize(),$i.copy(this.origin).sub(Iu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ol),a=$i.dot(this.direction),l=-$i.dot(ol),c=$i.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const v=1/u;f*=v,h*=v,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Iu).addScaledVector(ol,h),d}intersectSphere(e,t){Si.subVectors(e.center,this.origin);const i=Si.dot(this.direction),r=Si.dot(Si)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,i,r,s){Ou.subVectors(t,e),al.subVectors(i,e),Fu.crossVectors(Ou,al);let o=this.direction.dot(Fu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$i.subVectors(this.origin,e);const l=a*this.direction.dot(al.crossVectors($i,al));if(l<0)return null;const c=a*this.direction.dot(Ou.cross($i));if(c<0||l+c>o)return null;const u=-a*$i.dot(Fu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,t,i,r,s,o,a,l,c,u,f,h,d,g,v,p){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,d,g,v,p)}set(e,t,i,r,s,o,a,l,c,u,f,h,d,g,v,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ss.setFromMatrixColumn(e,0).length(),s=1/Ss.setFromMatrixColumn(e,1).length(),o=1/Ss.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,v=c*f;t[0]=h+v*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,v=c*f;t[0]=h-v*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ib,e,rb)}lookAt(e,t,i){const r=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Ki.crossVectors(i,gn),Ki.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Ki.crossVectors(i,gn)),Ki.normalize(),cl.crossVectors(gn,Ki),r[0]=Ki.x,r[4]=cl.x,r[8]=gn.x,r[1]=Ki.y,r[5]=cl.y,r[9]=gn.y,r[2]=Ki.z,r[6]=cl.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],v=i[6],p=i[10],m=i[14],S=i[3],_=i[7],M=i[11],A=i[15],T=r[0],b=r[4],O=r[8],J=r[12],x=r[1],w=r[5],L=r[9],V=r[13],P=r[2],j=r[6],G=r[10],te=r[14],Z=r[3],Y=r[7],ee=r[11],F=r[15];return s[0]=o*T+a*x+l*P+c*Z,s[4]=o*b+a*w+l*j+c*Y,s[8]=o*O+a*L+l*G+c*ee,s[12]=o*J+a*V+l*te+c*F,s[1]=u*T+f*x+h*P+d*Z,s[5]=u*b+f*w+h*j+d*Y,s[9]=u*O+f*L+h*G+d*ee,s[13]=u*J+f*V+h*te+d*F,s[2]=g*T+v*x+p*P+m*Z,s[6]=g*b+v*w+p*j+m*Y,s[10]=g*O+v*L+p*G+m*ee,s[14]=g*J+v*V+p*te+m*F,s[3]=S*T+_*x+M*P+A*Z,s[7]=S*b+_*w+M*j+A*Y,s[11]=S*O+_*L+M*G+A*ee,s[15]=S*J+_*V+M*te+A*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],v=e[7],p=e[11],m=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*d-i*l*d)+v*(+t*l*d-t*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+p*(+t*c*f-t*a*d-s*o*f+i*o*d+s*a*u-i*c*u)+m*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],v=e[13],p=e[14],m=e[15],S=f*p*c-v*h*c+v*l*d-a*p*d-f*l*m+a*h*m,_=g*h*c-u*p*c-g*l*d+o*p*d+u*l*m-o*h*m,M=u*v*c-g*f*c+g*a*d-o*v*d-u*a*m+o*f*m,A=g*f*l-u*v*l-g*a*h+o*v*h+u*a*p-o*f*p,T=t*S+i*_+r*M+s*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/T;return e[0]=S*b,e[1]=(v*h*s-f*p*s-v*r*d+i*p*d+f*r*m-i*h*m)*b,e[2]=(a*p*s-v*l*s+v*r*c-i*p*c-a*r*m+i*l*m)*b,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*d-i*l*d)*b,e[4]=_*b,e[5]=(u*p*s-g*h*s+g*r*d-t*p*d-u*r*m+t*h*m)*b,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*m-t*l*m)*b,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*d+t*l*d)*b,e[8]=M*b,e[9]=(g*f*s-u*v*s-g*i*d+t*v*d+u*i*m-t*f*m)*b,e[10]=(o*v*s-g*a*s+g*i*c-t*v*c-o*i*m+t*a*m)*b,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*d-t*a*d)*b,e[12]=A*b,e[13]=(u*v*r-g*f*r+g*i*h-t*v*h-u*i*p+t*f*p)*b,e[14]=(g*a*r-o*v*r-g*i*l+t*v*l+o*i*p-t*a*p)*b,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*b,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,v=o*u,p=o*f,m=a*f,S=l*c,_=l*u,M=l*f,A=i.x,T=i.y,b=i.z;return r[0]=(1-(v+m))*A,r[1]=(d+M)*A,r[2]=(g-_)*A,r[3]=0,r[4]=(d-M)*T,r[5]=(1-(h+m))*T,r[6]=(p+S)*T,r[7]=0,r[8]=(g+_)*b,r[9]=(p-S)*b,r[10]=(1-(h+v))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ss.set(r[0],r[1],r[2]).length();const o=Ss.set(r[4],r[5],r[6]).length(),a=Ss.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);const c=1/s,u=1/o,f=1/a;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=u,Bn.elements[5]*=u,Bn.elements[6]*=u,Bn.elements[8]*=f,Bn.elements[9]*=f,Bn.elements[10]*=f,t.setFromRotationMatrix(Bn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=xi){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let d,g;if(a===xi)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===el)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=xi){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,d=(i+r)*u;let g,v;if(a===xi)g=(o+s)*f,v=-2*f;else if(a===el)g=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ss=new $,Bn=new gt,ib=new $(0,0,0),rb=new $(1,1,1),Ki=new $,cl=new $,gn=new $,gm=new gt,vm=new Zn;class ul{constructor(e=0,t=0,i=0,r=ul.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return gm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vm.setFromEuler(this),this.setFromQuaternion(vm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ul.DEFAULT_ORDER="XYZ";class _m{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sb=0;const xm=new $,bs=new Zn,bi=new gt,fl=new $,Mo=new $,ob=new $,ab=new Zn,ym=new $(1,0,0),Sm=new $(0,1,0),bm=new $(0,0,1),lb={type:"added"},cb={type:"removed"};class Ft extends Tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sb++}),this.uuid=Ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new $,t=new ul,i=new Zn,r=new $(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new nt}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _m,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(ym,e)}rotateY(e){return this.rotateOnAxis(Sm,e)}rotateZ(e){return this.rotateOnAxis(bm,e)}translateOnAxis(e,t){return xm.copy(e).applyQuaternion(this.quaternion),this.position.add(xm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ym,e)}translateY(e){return this.translateOnAxis(Sm,e)}translateZ(e){return this.translateOnAxis(bm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?fl.copy(e):fl.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Mo,fl,this.up):bi.lookAt(fl,Mo,this.up),this.quaternion.setFromRotationMatrix(bi),r&&(bi.extractRotation(r.matrixWorld),bs.setFromRotationMatrix(bi),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(lb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cb)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,e,ob),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,ab,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ft.DEFAULT_UP=new $(0,1,0),Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new $,Mi=new $,Nu=new $,Ei=new $,Ms=new $,Es=new $,Mm=new $,Bu=new $,ku=new $,zu=new $;class Qn{constructor(e=new $,t=new $,i=new $){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),kn.subVectors(e,t),r.cross(kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){kn.subVectors(r,t),Mi.subVectors(i,t),Nu.subVectors(e,t);const o=kn.dot(kn),a=kn.dot(Mi),l=kn.dot(Nu),c=Mi.dot(Mi),u=Mi.dot(Nu),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l)}static isFrontFacing(e,t,i,r){return kn.subVectors(i,t),Mi.subVectors(e,t),kn.cross(Mi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),kn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Qn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Ms.subVectors(r,i),Es.subVectors(s,i),Bu.subVectors(e,i);const l=Ms.dot(Bu),c=Es.dot(Bu);if(l<=0&&c<=0)return t.copy(i);ku.subVectors(e,r);const u=Ms.dot(ku),f=Es.dot(ku);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ms,o);zu.subVectors(e,s);const d=Ms.dot(zu),g=Es.dot(zu);if(g>=0&&d<=g)return t.copy(s);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Es,a);const p=u*g-d*f;if(p<=0&&f-u>=0&&d-g>=0)return Mm.subVectors(s,r),a=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(Mm,a);const m=1/(p+v+h);return o=v*m,a=h*m,t.copy(i).addScaledVector(Ms,o).addScaledVector(Es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Em={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},hl={h:0,s:0,l:0};function Gu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ot.workingColorSpace){if(e=Tu(e,1),t=Ot(t,0,1),i=Ot(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Gu(o,s,e+1/3),this.g=Gu(o,s,e),this.b=Gu(o,s,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,t=It){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const i=Em[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}copyLinearToSRGB(e){return this.r=Ru(e.r),this.g=Ru(e.g),this.b=Ru(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return ot.fromWorkingColorSpace(qt.copy(this),e),Math.round(Ot(qt.r*255,0,255))*65536+Math.round(Ot(qt.g*255,0,255))*256+Math.round(Ot(qt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(qt.copy(this),t);const i=qt.r,r=qt.g,s=qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=It){ot.fromWorkingColorSpace(qt.copy(this),e);const t=qt.r,i=qt.g,r=qt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+t,Ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ji),e.getHSL(hl);const i=xo(Ji.h,hl.h,t),r=xo(Ji.s,hl.s,t),s=xo(Ji.l,hl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new $e;$e.NAMES=Em;let ub=0;class ei extends Tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ub++}),this.uuid=Ar(),this.name="",this.type="Material",this.blending=as,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fu,this.blendDst=hu,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Ya,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=im,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(i.blending=this.blending),this.side!==On&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fu&&(i.blendSrc=this.blendSrc),this.blendDst!==hu&&(i.blendDst=this.blendDst),this.blendEquation!==Sr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ya&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==im&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ws extends ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=du,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new $,dl=new Ie;class Qe{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=sm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ds("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)dl.fromBufferAttribute(this,t),dl.applyMatrix3(e),this.setXY(t,dl.x,dl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=hs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hs(t,this.array)),t}setX(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hs(t,this.array)),t}setY(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hs(t,this.array)),t}setW(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sm&&(e.usage=this.usage),e}}class wm extends Qe{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Tm extends Qe{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class vt extends Qe{constructor(e,t,i){super(new Float32Array(e),t,i)}}let fb=0;const En=new gt,Hu=new Ft,Ts=new $,vn=new gs,Eo=new gs,Nt=new $;class Mt extends Tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=Ar(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lm(e)?Tm:wm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new nt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,i){return En.makeTranslation(e,t,i),this.applyMatrix4(En),this}scale(e,t,i){return En.makeScale(e,t,i),this.applyMatrix4(En),this}lookAt(e){return Hu.lookAt(e),Hu.updateMatrix(),this.applyMatrix4(Hu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new vt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Eo.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(vn.min,Eo.min),vn.expandByPoint(Nt),Nt.addVectors(vn.max,Eo.max),vn.expandByPoint(Nt)):(vn.expandByPoint(Eo.min),vn.expandByPoint(Eo.max))}vn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Nt.fromBufferAttribute(a,c),l&&(Ts.fromBufferAttribute(e,c),Nt.add(Ts)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qe(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let x=0;x<a;x++)c[x]=new $,u[x]=new $;const f=new $,h=new $,d=new $,g=new Ie,v=new Ie,p=new Ie,m=new $,S=new $;function _(x,w,L){f.fromArray(r,x*3),h.fromArray(r,w*3),d.fromArray(r,L*3),g.fromArray(o,x*2),v.fromArray(o,w*2),p.fromArray(o,L*2),h.sub(f),d.sub(f),v.sub(g),p.sub(g);const V=1/(v.x*p.y-p.x*v.y);isFinite(V)&&(m.copy(h).multiplyScalar(p.y).addScaledVector(d,-v.y).multiplyScalar(V),S.copy(d).multiplyScalar(v.x).addScaledVector(h,-p.x).multiplyScalar(V),c[x].add(m),c[w].add(m),c[L].add(m),u[x].add(S),u[w].add(S),u[L].add(S))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let x=0,w=M.length;x<w;++x){const L=M[x],V=L.start,P=L.count;for(let j=V,G=V+P;j<G;j+=3)_(i[j+0],i[j+1],i[j+2])}const A=new $,T=new $,b=new $,O=new $;function J(x){b.fromArray(s,x*3),O.copy(b);const w=c[x];A.copy(w),A.sub(b.multiplyScalar(b.dot(w))).normalize(),T.crossVectors(O,w);const V=T.dot(u[x])<0?-1:1;l[x*4]=A.x,l[x*4+1]=A.y,l[x*4+2]=A.z,l[x*4+3]=V}for(let x=0,w=M.length;x<w;++x){const L=M[x],V=L.start,P=L.count;for(let j=V,G=V+P;j<G;j+=3)J(i[j+0]),J(i[j+1]),J(i[j+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qe(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new $,s=new $,o=new $,a=new $,l=new $,c=new $,u=new $,f=new $;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),v=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*u;for(let m=0;m<u;m++)h[g++]=c[d++]}return new Qe(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Am=new gt,Lr=new ll,pl=new ys,Cm=new $,As=new $,Cs=new $,Rs=new $,Vu=new $,ml=new $,gl=new Ie,vl=new Ie,_l=new Ie,Rm=new $,Pm=new $,Lm=new $,xl=new $,yl=new $;class Et extends Ft{constructor(e=new Mt,t=new ws){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ml.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Vu.fromBufferAttribute(f,e),o?ml.addScaledVector(Vu,u):ml.addScaledVector(Vu.sub(t),u))}t.add(ml)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),pl.copy(i.boundingSphere),pl.applyMatrix4(s),Lr.copy(e.ray).recast(e.near),!(pl.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(pl,Cm)===null||Lr.origin.distanceToSquared(Cm)>(e.far-e.near)**2))&&(Am.copy(s).invert(),Lr.copy(e.ray).applyMatrix4(Am),!(i.boundingBox!==null&&Lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Lr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const p=h[g],m=o[p.materialIndex],S=Math.max(p.start,d.start),_=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let M=S,A=_;M<A;M+=3){const T=a.getX(M),b=a.getX(M+1),O=a.getX(M+2);r=Sl(this,m,e,i,c,u,f,T,b,O),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){const S=a.getX(p),_=a.getX(p+1),M=a.getX(p+2);r=Sl(this,o,e,i,c,u,f,S,_,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const p=h[g],m=o[p.materialIndex],S=Math.max(p.start,d.start),_=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let M=S,A=_;M<A;M+=3){const T=M,b=M+1,O=M+2;r=Sl(this,m,e,i,c,u,f,T,b,O),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){const S=p,_=p+1,M=p+2;r=Sl(this,o,e,i,c,u,f,S,_,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function hb(n,e,t,i,r,s,o,a){let l;if(e.side===Qt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===On,a),l===null)return null;yl.copy(a),yl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(yl);return c<t.near||c>t.far?null:{distance:c,point:yl.clone(),object:n}}function Sl(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,As),n.getVertexPosition(l,Cs),n.getVertexPosition(c,Rs);const u=hb(n,e,t,i,As,Cs,Rs,xl);if(u){r&&(gl.fromBufferAttribute(r,a),vl.fromBufferAttribute(r,l),_l.fromBufferAttribute(r,c),u.uv=Qn.getInterpolation(xl,As,Cs,Rs,gl,vl,_l,new Ie)),s&&(gl.fromBufferAttribute(s,a),vl.fromBufferAttribute(s,l),_l.fromBufferAttribute(s,c),u.uv1=Qn.getInterpolation(xl,As,Cs,Rs,gl,vl,_l,new Ie),u.uv2=u.uv1),o&&(Rm.fromBufferAttribute(o,a),Pm.fromBufferAttribute(o,l),Lm.fromBufferAttribute(o,c),u.normal=Qn.getInterpolation(xl,As,Cs,Rs,Rm,Pm,Lm,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new $,materialIndex:0};Qn.getNormal(As,Cs,Rs,f.normal),u.face=f}return u}class wo extends Mt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(f,2));function g(v,p,m,S,_,M,A,T,b,O,J){const x=M/b,w=A/O,L=M/2,V=A/2,P=T/2,j=b+1,G=O+1;let te=0,Z=0;const Y=new $;for(let ee=0;ee<G;ee++){const F=ee*w-V;for(let Q=0;Q<j;Q++){const ne=Q*x-L;Y[v]=ne*S,Y[p]=F*_,Y[m]=P,c.push(Y.x,Y.y,Y.z),Y[v]=0,Y[p]=0,Y[m]=T>0?1:-1,u.push(Y.x,Y.y,Y.z),f.push(Q/b),f.push(1-ee/O),te+=1}}for(let ee=0;ee<O;ee++)for(let F=0;F<b;F++){const Q=h+F+j*ee,ne=h+F+j*(ee+1),z=h+(F+1)+j*(ee+1),X=h+(F+1)+j*ee;l.push(Q,ne,X),l.push(ne,z,X),Z+=6}a.addGroup(d,Z,J),d+=Z,h+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ps(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function tn(n){const e={};for(let t=0;t<n.length;t++){const i=Ps(n[t]);for(const r in i)e[r]=i[r]}return e}function db(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Um(n){return n.getRenderTarget()===null?n.outputColorSpace:ot.workingColorSpace}const Dm={clone:Ps,merge:tn};var pb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wi extends ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pb,this.fragmentShader=mb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=db(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Im extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new $,Om=new Ie,Fm=new Ie;class wn extends Im{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_o*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _o*2*Math.atan(Math.tan(vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,t){return this.getViewBounds(e,Om,Fm),t.subVectors(Fm,Om)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ls=-90,Us=1;class gb extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wn(Ls,Us,e,t);r.layers=this.layers,this.add(r);const s=new wn(Ls,Us,e,t);s.layers=this.layers,this.add(s);const o=new wn(Ls,Us,e,t);o.layers=this.layers,this.add(o);const a=new wn(Ls,Us,e,t);a.layers=this.layers,this.add(a);const l=new wn(Ls,Us,e,t);l.layers=this.layers,this.add(l);const c=new wn(Ls,Us,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===xi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===el)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Nm extends Ct{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ls,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vb extends Cr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(ds("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===wr?It:Mn),this.texture=new Nm(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new wo(5,5,5),s=new wi({name:"CubemapFromEquirect",uniforms:Ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:Vi});s.uniforms.tEquirect.value=t;const o=new Et(r,s),a=t.minFilter;return t.minFilter===br&&(t.minFilter=jt),new gb(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Wu=new $,_b=new $,xb=new nt;class Qi{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Wu.subVectors(i,t).cross(_b.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Wu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||xb.getNormalMatrix(e),r=this.coplanarPoint(Wu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new ys,bl=new $;class Bm{constructor(e=new Qi,t=new Qi,i=new Qi,r=new Qi,s=new Qi,o=new Qi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=xi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],g=r[9],v=r[10],p=r[11],m=r[12],S=r[13],_=r[14],M=r[15];if(i[0].setComponents(l-s,h-c,p-d,M-m).normalize(),i[1].setComponents(l+s,h+c,p+d,M+m).normalize(),i[2].setComponents(l+o,h+u,p+g,M+S).normalize(),i[3].setComponents(l-o,h-u,p-g,M-S).normalize(),i[4].setComponents(l-a,h-f,p-v,M-_).normalize(),t===xi)i[5].setComponents(l+a,h+f,p+v,M+_).normalize();else if(t===el)i[5].setComponents(a,f,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){return Ur.center.set(0,0,0),Ur.radius=.7071067811865476,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(bl.x=r.normal.x>0?e.max.x:e.min.x,bl.y=r.normal.y>0?e.max.y:e.min.y,bl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(bl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function km(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function yb(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,d=f.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,f,h),c.onUploadCallback();let v;if(f instanceof Float32Array)v=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=n.SHORT;else if(f instanceof Uint32Array)v=n.UNSIGNED_INT;else if(f instanceof Int32Array)v=n.INT;else if(f instanceof Int8Array)v=n.BYTE;else if(f instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:d}}function s(c,u,f){const h=u.array,d=u._updateRange,g=u.updateRanges;if(n.bindBuffer(f,c),d.count===-1&&g.length===0&&n.bufferSubData(f,0,h),g.length!==0){for(let v=0,p=g.length;v<p;v++){const m=g[v];t?n.bufferSubData(f,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count):n.bufferSubData(f,m.start*h.BYTES_PER_ELEMENT,h.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}d.count!==-1&&(t?n.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):n.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:o,remove:a,update:l}}class Dr extends Mt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],v=[],p=[];for(let m=0;m<u;m++){const S=m*h-o;for(let _=0;_<c;_++){const M=_*f-s;g.push(M,-S,0),v.push(0,0,1),p.push(_/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){const _=S+c*m,M=S+c*(m+1),A=S+1+c*(m+1),T=S+1+c*m;d.push(_,M,T),d.push(M,A,T)}this.setIndex(d),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(v,3)),this.setAttribute("uv",new vt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Sb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bb=`#ifdef USE_ALPHAHASH
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
#endif`,Mb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Eb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ab=`#ifdef USE_AOMAP
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
#endif`,Cb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rb=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Pb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Lb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ub=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Db=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ib=`#ifdef USE_IRIDESCENCE
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
#endif`,Ob=`#ifdef USE_BUMPMAP
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
#endif`,Fb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Vb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Wb=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Xb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jb=`vec3 transformedNormal = objectNormal;
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
#endif`,Yb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$b=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zb=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Qb=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,eM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tM=`#ifdef USE_ENVMAP
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
#endif`,nM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iM=`#ifdef USE_ENVMAP
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
#endif`,rM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lM=`#ifdef USE_GRADIENTMAP
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
}`,cM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,uM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dM=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,pM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,mM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_M=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,yM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,SM=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,bM=`#if defined( RE_IndirectDiffuse )
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
#endif`,MM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,AM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,CM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,LM=`#if defined( USE_POINTS_UV )
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
#endif`,UM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,DM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,IM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,OM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,FM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,NM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,BM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,VM=`#ifdef USE_NORMALMAP
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
#endif`,WM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,XM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$M=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,KM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,iE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aE=`#ifdef USE_SKINNING
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
#endif`,lE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cE=`#ifdef USE_SKINNING
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
#endif`,uE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dE=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pE=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mE=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const et={alphahash_fragment:Sb,alphahash_pars_fragment:bb,alphamap_fragment:Mb,alphamap_pars_fragment:Eb,alphatest_fragment:wb,alphatest_pars_fragment:Tb,aomap_fragment:Ab,aomap_pars_fragment:Cb,batching_pars_vertex:Rb,batching_vertex:Pb,begin_vertex:Lb,beginnormal_vertex:Ub,bsdfs:Db,iridescence_fragment:Ib,bumpmap_pars_fragment:Ob,clipping_planes_fragment:Fb,clipping_planes_pars_fragment:Nb,clipping_planes_pars_vertex:Bb,clipping_planes_vertex:kb,color_fragment:zb,color_pars_fragment:Gb,color_pars_vertex:Hb,color_vertex:Vb,common:Wb,cube_uv_reflection_fragment:Xb,defaultnormal_vertex:jb,displacementmap_pars_vertex:Yb,displacementmap_vertex:qb,emissivemap_fragment:$b,emissivemap_pars_fragment:Kb,colorspace_fragment:Jb,colorspace_pars_fragment:Zb,envmap_fragment:Qb,envmap_common_pars_fragment:eM,envmap_pars_fragment:tM,envmap_pars_vertex:nM,envmap_physical_pars_fragment:pM,envmap_vertex:iM,fog_vertex:rM,fog_pars_vertex:sM,fog_fragment:oM,fog_pars_fragment:aM,gradientmap_pars_fragment:lM,lightmap_fragment:cM,lightmap_pars_fragment:uM,lights_lambert_fragment:fM,lights_lambert_pars_fragment:hM,lights_pars_begin:dM,lights_toon_fragment:mM,lights_toon_pars_fragment:gM,lights_phong_fragment:vM,lights_phong_pars_fragment:_M,lights_physical_fragment:xM,lights_physical_pars_fragment:yM,lights_fragment_begin:SM,lights_fragment_maps:bM,lights_fragment_end:MM,logdepthbuf_fragment:EM,logdepthbuf_pars_fragment:wM,logdepthbuf_pars_vertex:TM,logdepthbuf_vertex:AM,map_fragment:CM,map_pars_fragment:RM,map_particle_fragment:PM,map_particle_pars_fragment:LM,metalnessmap_fragment:UM,metalnessmap_pars_fragment:DM,morphcolor_vertex:IM,morphnormal_vertex:OM,morphtarget_pars_vertex:FM,morphtarget_vertex:NM,normal_fragment_begin:BM,normal_fragment_maps:kM,normal_pars_fragment:zM,normal_pars_vertex:GM,normal_vertex:HM,normalmap_pars_fragment:VM,clearcoat_normal_fragment_begin:WM,clearcoat_normal_fragment_maps:XM,clearcoat_pars_fragment:jM,iridescence_pars_fragment:YM,opaque_fragment:qM,packing:$M,premultiplied_alpha_fragment:KM,project_vertex:JM,dithering_fragment:ZM,dithering_pars_fragment:QM,roughnessmap_fragment:eE,roughnessmap_pars_fragment:tE,shadowmap_pars_fragment:nE,shadowmap_pars_vertex:iE,shadowmap_vertex:rE,shadowmask_pars_fragment:sE,skinbase_vertex:oE,skinning_pars_vertex:aE,skinning_vertex:lE,skinnormal_vertex:cE,specularmap_fragment:uE,specularmap_pars_fragment:fE,tonemapping_fragment:hE,tonemapping_pars_fragment:dE,transmission_fragment:pE,transmission_pars_fragment:mE,uv_pars_fragment:gE,uv_pars_vertex:vE,uv_vertex:_E,worldpos_vertex:xE,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},Pe={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},ti={basic:{uniforms:tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new $e(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:tn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:tn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new $e(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:tn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:tn([Pe.points,Pe.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:tn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:tn([Pe.common,Pe.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:tn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:tn([Pe.sprite,Pe.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:tn([Pe.common,Pe.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:tn([Pe.lights,Pe.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};ti.physical={uniforms:tn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Ml={r:0,b:0,g:0};function yE(n,e,t,i,r,s,o){const a=new $e(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(p,m){let S=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?t:e).get(_)),_===null?v(a,l):_&&_.isColor&&(v(_,1),S=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===qa)?(u===void 0&&(u=new Et(new wo(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:Ps(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=ot.getTransfer(_.colorSpace)!==pt,(f!==_||h!==_.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=_,h=_.version,d=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Et(new Dr(2,2),new wi({name:"BackgroundMaterial",uniforms:Ps(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=ot.getTransfer(_.colorSpace)!==pt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||h!==_.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=_,h=_.version,d=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,m){p.getRGB(Ml,Um(n)),i.buffers.color.setClear(Ml.r,Ml.g,Ml.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(a,l)},render:g}}function SE(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function f(P,j,G,te,Z){let Y=!1;if(o){const ee=v(te,G,j);c!==ee&&(c=ee,d(c.object)),Y=m(P,te,G,Z),Y&&S(P,te,G,Z)}else{const ee=j.wireframe===!0;(c.geometry!==te.id||c.program!==G.id||c.wireframe!==ee)&&(c.geometry=te.id,c.program=G.id,c.wireframe=ee,Y=!0)}Z!==null&&t.update(Z,n.ELEMENT_ARRAY_BUFFER),(Y||u)&&(u=!1,O(P,j,G,te),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function d(P){return i.isWebGL2?n.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return i.isWebGL2?n.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function v(P,j,G){const te=G.wireframe===!0;let Z=a[P.id];Z===void 0&&(Z={},a[P.id]=Z);let Y=Z[j.id];Y===void 0&&(Y={},Z[j.id]=Y);let ee=Y[te];return ee===void 0&&(ee=p(h()),Y[te]=ee),ee}function p(P){const j=[],G=[],te=[];for(let Z=0;Z<r;Z++)j[Z]=0,G[Z]=0,te[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:G,attributeDivisors:te,object:P,attributes:{},index:null}}function m(P,j,G,te){const Z=c.attributes,Y=j.attributes;let ee=0;const F=G.getAttributes();for(const Q in F)if(F[Q].location>=0){const z=Z[Q];let X=Y[Q];if(X===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(X=P.instanceColor)),z===void 0||z.attribute!==X||X&&z.data!==X.data)return!0;ee++}return c.attributesNum!==ee||c.index!==te}function S(P,j,G,te){const Z={},Y=j.attributes;let ee=0;const F=G.getAttributes();for(const Q in F)if(F[Q].location>=0){let z=Y[Q];z===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(z=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(z=P.instanceColor));const X={};X.attribute=z,z&&z.data&&(X.data=z.data),Z[Q]=X,ee++}c.attributes=Z,c.attributesNum=ee,c.index=te}function _(){const P=c.newAttributes;for(let j=0,G=P.length;j<G;j++)P[j]=0}function M(P){A(P,0)}function A(P,j){const G=c.newAttributes,te=c.enabledAttributes,Z=c.attributeDivisors;G[P]=1,te[P]===0&&(n.enableVertexAttribArray(P),te[P]=1),Z[P]!==j&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,j),Z[P]=j)}function T(){const P=c.newAttributes,j=c.enabledAttributes;for(let G=0,te=j.length;G<te;G++)j[G]!==P[G]&&(n.disableVertexAttribArray(G),j[G]=0)}function b(P,j,G,te,Z,Y,ee){ee===!0?n.vertexAttribIPointer(P,j,G,Z,Y):n.vertexAttribPointer(P,j,G,te,Z,Y)}function O(P,j,G,te){if(i.isWebGL2===!1&&(P.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const Z=te.attributes,Y=G.getAttributes(),ee=j.defaultAttributeValues;for(const F in Y){const Q=Y[F];if(Q.location>=0){let ne=Z[F];if(ne===void 0&&(F==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),F==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor)),ne!==void 0){const z=ne.normalized,X=ne.itemSize,ce=t.get(ne);if(ce===void 0)continue;const se=ce.buffer,fe=ce.type,ve=ce.bytesPerElement,Te=i.isWebGL2===!0&&(fe===n.INT||fe===n.UNSIGNED_INT||ne.gpuType===bp);if(ne.isInterleavedBufferAttribute){const _e=ne.data,B=_e.stride,ke=ne.offset;if(_e.isInstancedInterleavedBuffer){for(let C=0;C<Q.locationSize;C++)A(Q.location+C,_e.meshPerAttribute);P.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let C=0;C<Q.locationSize;C++)M(Q.location+C);n.bindBuffer(n.ARRAY_BUFFER,se);for(let C=0;C<Q.locationSize;C++)b(Q.location+C,X/Q.locationSize,fe,z,B*ve,(ke+X/Q.locationSize*C)*ve,Te)}else{if(ne.isInstancedBufferAttribute){for(let _e=0;_e<Q.locationSize;_e++)A(Q.location+_e,ne.meshPerAttribute);P.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let _e=0;_e<Q.locationSize;_e++)M(Q.location+_e);n.bindBuffer(n.ARRAY_BUFFER,se);for(let _e=0;_e<Q.locationSize;_e++)b(Q.location+_e,X/Q.locationSize,fe,z,X*ve,X/Q.locationSize*_e*ve,Te)}}else if(ee!==void 0){const z=ee[F];if(z!==void 0)switch(z.length){case 2:n.vertexAttrib2fv(Q.location,z);break;case 3:n.vertexAttrib3fv(Q.location,z);break;case 4:n.vertexAttrib4fv(Q.location,z);break;default:n.vertexAttrib1fv(Q.location,z)}}}}T()}function J(){L();for(const P in a){const j=a[P];for(const G in j){const te=j[G];for(const Z in te)g(te[Z].object),delete te[Z];delete j[G]}delete a[P]}}function x(P){if(a[P.id]===void 0)return;const j=a[P.id];for(const G in j){const te=j[G];for(const Z in te)g(te[Z].object),delete te[Z];delete j[G]}delete a[P.id]}function w(P){for(const j in a){const G=a[j];if(G[P.id]===void 0)continue;const te=G[P.id];for(const Z in te)g(te[Z].object),delete te[Z];delete G[P.id]}}function L(){V(),u=!0,c!==l&&(c=l,d(c.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:L,resetDefaultState:V,dispose:J,releaseStatesOfGeometry:x,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:M,disableUnusedAttributes:T}}function bE(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,f){n.drawArrays(s,u,f),t.update(f,s,1)}function l(u,f,h){if(h===0)return;let d,g;if(r)d=n,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](s,u,f,h),t.update(f,s,h)}function c(u,f,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<h;g++)this.render(u[g],f[g]);else{d.multiDrawArraysWEBGL(s,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=f[v];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function ME(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),m=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=h>0,M=o||e.has("OES_texture_float"),A=_&&M,T=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:S,vertexTextures:_,floatFragmentTextures:M,floatVertexTextures:A,maxSamples:T}}function EE(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Qi,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,m=n.get(f);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const S=s?0:i,_=S*4;let M=m.clippingState||null;l.value=M,M=u(g,h,_,d);for(let A=0;A!==_;++A)M[A]=t[A];m.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const m=d+v*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,M=d;_!==v;++_,M+=4)o.copy(f[_]).applyMatrix4(S,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function wE(n){let e=new WeakMap;function t(o,a){return a===pu?o.mapping=ls:a===mu&&(o.mapping=cs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===pu||a===mu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new vb(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class zm extends Im{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ds=4,Gm=[.125,.215,.35,.446,.526,.582],Ir=20,Xu=new zm,Hm=new $e;let ju=null,Yu=0,qu=0;const Or=(1+Math.sqrt(5))/2,Is=1/Or,Vm=[new $(1,1,1),new $(-1,1,1),new $(1,1,-1),new $(-1,1,-1),new $(0,Or,Is),new $(0,Or,-Is),new $(Is,0,Or),new $(-Is,0,Or),new $(Or,Is,0),new $(-Or,Is,0)];class Wm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ju=this._renderer.getRenderTarget(),Yu=this._renderer.getActiveCubeFace(),qu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ym(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ju,Yu,qu),e.scissorTest=!1,El(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ju=this._renderer.getRenderTarget(),Yu=this._renderer.getActiveCubeFace(),qu=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:go,format:bn,colorSpace:_i,depthBuffer:!1},r=Xm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xm(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=TE(s)),this._blurMaterial=AE(s,e,t)}return r}_compileMaterial(e){const t=new Et(this._lodPlanes[0],e);this._renderer.compile(t,Xu)}_sceneToCubeUV(e,t,i,r){const a=new wn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Hm),u.toneMapping=Wi,u.autoClear=!1;const d=new ws({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),g=new Et(new wo,d);let v=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,v=!0):(d.color.copy(Hm),v=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):S===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const _=this._cubeSize;El(r,S*_,m>2?_:0,_,_),u.setRenderTarget(r),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ls||e.mapping===cs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ym()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Et(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;El(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Xu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Vm[(r-1)%Vm.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Et(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ir-1),v=s/g,p=isFinite(s)?1+Math.floor(u*v):Ir;p>Ir&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ir}`);const m=[];let S=0;for(let b=0;b<Ir;++b){const O=b/v,J=Math.exp(-O*O/2);m.push(J),b===0?S+=J:b<p&&(S+=2*J)}for(let b=0;b<m.length;b++)m[b]=m[b]/S;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-i;const M=this._sizeLods[r],A=3*M*(r>_-Ds?r-_+Ds:0),T=4*(this._cubeSize-M);El(t,A,T,3*M,2*M),l.setRenderTarget(t),l.render(f,Xu)}}function TE(n){const e=[],t=[],i=[];let r=n;const s=n-Ds+1+Gm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ds?l=Gm[o-n+Ds-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,v=3,p=2,m=1,S=new Float32Array(v*g*d),_=new Float32Array(p*g*d),M=new Float32Array(m*g*d);for(let T=0;T<d;T++){const b=T%3*2/3-1,O=T>2?0:-1,J=[b,O,0,b+2/3,O,0,b+2/3,O+1,0,b,O,0,b+2/3,O+1,0,b,O+1,0];S.set(J,v*g*T),_.set(h,p*g*T);const x=[T,T,T,T,T,T];M.set(x,m*g*T)}const A=new Mt;A.setAttribute("position",new Qe(S,v)),A.setAttribute("uv",new Qe(_,p)),A.setAttribute("faceIndex",new Qe(M,m)),e.push(A),r>Ds&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Xm(n,e,t){const i=new Cr(n,e,t);return i.texture.mapping=qa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function El(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function AE(n,e,t){const i=new Float32Array(Ir),r=new $(0,1,0);return new wi({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$u(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function jm(){return new wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$u(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Ym(){return new wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function $u(){return`

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
	`}function CE(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===pu||l===mu,u=l===ls||l===cs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Wm(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Wm(n));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function RE(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function PE(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const v=h.morphAttributes[g];for(let p=0,m=v.length;p<m;p++)e.remove(v[p])}h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const v=d[g];for(let p=0,m=v.length;p<m;p++)e.update(v[p],n.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let v=0;if(d!==null){const S=d.array;v=d.version;for(let _=0,M=S.length;_<M;_+=3){const A=S[_+0],T=S[_+1],b=S[_+2];h.push(A,T,T,b,b,A)}}else if(g!==void 0){const S=g.array;v=g.version;for(let _=0,M=S.length/3-1;_<M;_+=3){const A=_+0,T=_+1,b=_+2;h.push(A,T,T,b,b,A)}}else return;const p=new(lm(h)?Tm:wm)(h,1);p.version=v;const m=s.get(f);m&&e.remove(m),s.set(f,p)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function LE(n,e,t,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,g){n.drawElements(s,g,a,d*l),t.update(g,s,1)}function f(d,g,v){if(v===0)return;let p,m;if(r)p=n,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,g,a,d*l,v),t.update(g,s,v)}function h(d,g,v){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<v;m++)this.render(d[m]/l,g[m]);else{p.multiDrawElementsWEBGL(s,g,0,a,d,0,v);let m=0;for(let S=0;S<v;S++)m+=g[S];t.update(m,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function UE(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function DE(n,e){return n[0]-e[0]}function IE(n,e){return Math.abs(e[1])-Math.abs(n[1])}function OE(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new Rt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=d!==void 0?d.length:0;let v=s.get(u);if(v===void 0||v.count!==g){let P=function(){L.dispose(),s.delete(u),u.removeEventListener("dispose",P)};v!==void 0&&v.texture.dispose();const S=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let O=0;S===!0&&(O=1),_===!0&&(O=2),M===!0&&(O=3);let J=u.attributes.position.count*O,x=1;J>e.maxTextureSize&&(x=Math.ceil(J/e.maxTextureSize),J=e.maxTextureSize);const w=new Float32Array(J*x*4*g),L=new pm(w,J,x,g);L.type=vi,L.needsUpdate=!0;const V=O*4;for(let j=0;j<g;j++){const G=A[j],te=T[j],Z=b[j],Y=J*x*4*j;for(let ee=0;ee<G.count;ee++){const F=ee*V;S===!0&&(o.fromBufferAttribute(G,ee),w[Y+F+0]=o.x,w[Y+F+1]=o.y,w[Y+F+2]=o.z,w[Y+F+3]=0),_===!0&&(o.fromBufferAttribute(te,ee),w[Y+F+4]=o.x,w[Y+F+5]=o.y,w[Y+F+6]=o.z,w[Y+F+7]=0),M===!0&&(o.fromBufferAttribute(Z,ee),w[Y+F+8]=o.x,w[Y+F+9]=o.y,w[Y+F+10]=o.z,w[Y+F+11]=Z.itemSize===4?o.w:1)}}v={count:g,texture:L,size:new Ie(J,x)},s.set(u,v),u.addEventListener("dispose",P)}let p=0;for(let S=0;S<h.length;S++)p+=h[S];const m=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(n,"morphTargetBaseInfluence",m),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{const d=h===void 0?0:h.length;let g=i[u.id];if(g===void 0||g.length!==d){g=[];for(let _=0;_<d;_++)g[_]=[_,0];i[u.id]=g}for(let _=0;_<d;_++){const M=g[_];M[0]=_,M[1]=h[_]}g.sort(IE);for(let _=0;_<8;_++)_<d&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(DE);const v=u.morphAttributes.position,p=u.morphAttributes.normal;let m=0;for(let _=0;_<8;_++){const M=a[_],A=M[0],T=M[1];A!==Number.MAX_SAFE_INTEGER&&T?(v&&u.getAttribute("morphTarget"+_)!==v[A]&&u.setAttribute("morphTarget"+_,v[A]),p&&u.getAttribute("morphNormal"+_)!==p[A]&&u.setAttribute("morphNormal"+_,p[A]),r[_]=T,m+=T):(v&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),p&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),r[_]=0)}const S=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(n,"morphTargetBaseInfluence",S),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function FE(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class qm extends Ct{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Er,u!==Er&&u!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Er&&(i=ji),i===void 0&&u===us&&(i=Mr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:dt,this.minFilter=l!==void 0?l:dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const $m=new Ct,Km=new qm(1,1);Km.compareFunction=rm;const Jm=new pm,Zm=new tb,Qm=new Nm,eg=[],tg=[],ng=new Float32Array(16),ig=new Float32Array(9),rg=new Float32Array(4);function Os(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=eg[r];if(s===void 0&&(s=new Float32Array(r),eg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function wl(n,e){let t=tg[e];t===void 0&&(t=new Int32Array(e),tg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function NE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function BE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function kE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function zE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function GE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;rg.set(i),n.uniformMatrix2fv(this.addr,!1,rg),Lt(t,i)}}function HE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;ig.set(i),n.uniformMatrix3fv(this.addr,!1,ig),Lt(t,i)}}function VE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;ng.set(i),n.uniformMatrix4fv(this.addr,!1,ng),Lt(t,i)}}function WE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function XE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function jE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function YE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function qE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function $E(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function KE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function JE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function ZE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Km:$m;t.setTexture2D(e||s,r)}function QE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Zm,r)}function e1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Qm,r)}function t1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Jm,r)}function n1(n){switch(n){case 5126:return NE;case 35664:return BE;case 35665:return kE;case 35666:return zE;case 35674:return GE;case 35675:return HE;case 35676:return VE;case 5124:case 35670:return WE;case 35667:case 35671:return XE;case 35668:case 35672:return jE;case 35669:case 35673:return YE;case 5125:return qE;case 36294:return $E;case 36295:return KE;case 36296:return JE;case 35678:case 36198:case 36298:case 36306:case 35682:return ZE;case 35679:case 36299:case 36307:return QE;case 35680:case 36300:case 36308:case 36293:return e1;case 36289:case 36303:case 36311:case 36292:return t1}}function i1(n,e){n.uniform1fv(this.addr,e)}function r1(n,e){const t=Os(e,this.size,2);n.uniform2fv(this.addr,t)}function s1(n,e){const t=Os(e,this.size,3);n.uniform3fv(this.addr,t)}function o1(n,e){const t=Os(e,this.size,4);n.uniform4fv(this.addr,t)}function a1(n,e){const t=Os(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function l1(n,e){const t=Os(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function c1(n,e){const t=Os(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function u1(n,e){n.uniform1iv(this.addr,e)}function f1(n,e){n.uniform2iv(this.addr,e)}function h1(n,e){n.uniform3iv(this.addr,e)}function d1(n,e){n.uniform4iv(this.addr,e)}function p1(n,e){n.uniform1uiv(this.addr,e)}function m1(n,e){n.uniform2uiv(this.addr,e)}function g1(n,e){n.uniform3uiv(this.addr,e)}function v1(n,e){n.uniform4uiv(this.addr,e)}function _1(n,e,t){const i=this.cache,r=e.length,s=wl(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||$m,s[o])}function x1(n,e,t){const i=this.cache,r=e.length,s=wl(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Zm,s[o])}function y1(n,e,t){const i=this.cache,r=e.length,s=wl(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Qm,s[o])}function S1(n,e,t){const i=this.cache,r=e.length,s=wl(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Jm,s[o])}function b1(n){switch(n){case 5126:return i1;case 35664:return r1;case 35665:return s1;case 35666:return o1;case 35674:return a1;case 35675:return l1;case 35676:return c1;case 5124:case 35670:return u1;case 35667:case 35671:return f1;case 35668:case 35672:return h1;case 35669:case 35673:return d1;case 5125:return p1;case 36294:return m1;case 36295:return g1;case 36296:return v1;case 35678:case 36198:case 36298:case 36306:case 35682:return _1;case 35679:case 36299:case 36307:return x1;case 35680:case 36300:case 36308:case 36293:return y1;case 36289:case 36303:case 36311:case 36292:return S1}}class M1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=n1(t.type)}}class E1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=b1(t.type)}}class w1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Ku=/(\w+)(\])?(\[|\.)?/g;function sg(n,e){n.seq.push(e),n.map[e.id]=e}function T1(n,e,t){const i=n.name,r=i.length;for(Ku.lastIndex=0;;){const s=Ku.exec(i),o=Ku.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){sg(t,c===void 0?new M1(a,n,e):new E1(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new w1(a),sg(t,f)),t=f}}}class Tl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);T1(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function og(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const A1=37297;let C1=0;function R1(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function P1(n){const e=ot.getPrimaries(ot.workingColorSpace),t=ot.getPrimaries(n);let i;switch(e===t?i="":e===Qa&&t===Za?i="LinearDisplayP3ToLinearSRGB":e===Za&&t===Qa&&(i="LinearSRGBToLinearDisplayP3"),n){case _i:case Ka:return[i,"LinearTransferOETF"];case It:case Eu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function ag(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+R1(n.getShaderSource(e),o)}else return r}function L1(n,e){const t=P1(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function U1(n,e){let t;switch(e){case hS:t="Linear";break;case dS:t="Reinhard";break;case pS:t="OptimizedCineon";break;case mS:t="ACESFilmic";break;case vS:t="AgX";break;case gS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function D1(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Fs).join(`
`)}function I1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function O1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function F1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Fs(n){return n!==""}function lg(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const N1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ju(n){return n.replace(N1,k1)}const B1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function k1(n,e){let t=et[e];if(t===void 0){const i=B1.get(e);if(i!==void 0)t=et[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ju(t)}const z1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ug(n){return n.replace(z1,G1)}function G1(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fg(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	`;return n.isWebGL2&&(e+=`precision ${n.precision} sampler3D;
		precision ${n.precision} sampler2DArray;
		precision ${n.precision} sampler2DShadow;
		precision ${n.precision} samplerCubeShadow;
		precision ${n.precision} sampler2DArrayShadow;
		precision ${n.precision} isampler2D;
		precision ${n.precision} isampler3D;
		precision ${n.precision} isamplerCube;
		precision ${n.precision} isampler2DArray;
		precision ${n.precision} usampler2D;
		precision ${n.precision} usampler3D;
		precision ${n.precision} usamplerCube;
		precision ${n.precision} usampler2DArray;
		`),n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function H1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===pp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===zy?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function V1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ls:case cs:e="ENVMAP_TYPE_CUBE";break;case qa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function W1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case cs:e="ENVMAP_MODE_REFRACTION";break}return e}function X1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case du:e="ENVMAP_BLENDING_MULTIPLY";break;case uS:e="ENVMAP_BLENDING_MIX";break;case fS:e="ENVMAP_BLENDING_ADD";break}return e}function j1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Y1(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=H1(t),c=V1(t),u=W1(t),f=X1(t),h=j1(t),d=t.isWebGL2?"":D1(t),g=I1(t),v=O1(s),p=r.createProgram();let m,S,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Fs).join(`
`),m.length>0&&(m+=`
`),S=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Fs).join(`
`),S.length>0&&(S+=`
`)):(m=[fg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),S=[d,fg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wi?"#define TONE_MAPPING":"",t.toneMapping!==Wi?et.tonemapping_pars_fragment:"",t.toneMapping!==Wi?U1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,L1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fs).join(`
`)),o=Ju(o),o=lg(o,t),o=cg(o,t),a=Ju(a),a=lg(a,t),a=cg(a,t),o=ug(o),a=ug(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===om?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===om?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const M=_+m+o,A=_+S+a,T=og(r,r.VERTEX_SHADER,M),b=og(r,r.FRAGMENT_SHADER,A);r.attachShader(p,T),r.attachShader(p,b),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function O(L){if(n.debug.checkShaderErrors){const V=r.getProgramInfoLog(p).trim(),P=r.getShaderInfoLog(T).trim(),j=r.getShaderInfoLog(b).trim();let G=!0,te=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,T,b);else{const Z=ag(r,T,"vertex"),Y=ag(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+Z+`
`+Y)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(P===""||j==="")&&(te=!1);te&&(L.diagnostics={runnable:G,programLog:V,vertexShader:{log:P,prefix:m},fragmentShader:{log:j,prefix:S}})}r.deleteShader(T),r.deleteShader(b),J=new Tl(r,p),x=F1(r,p)}let J;this.getUniforms=function(){return J===void 0&&O(this),J};let x;this.getAttributes=function(){return x===void 0&&O(this),x};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(p,A1)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=C1++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=b,this}let q1=0;class $1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new K1(e),t.set(e,i)),i}}class K1{constructor(e){this.id=q1++,this.code=e,this.usedTimes=0}}function J1(n,e,t,i,r,s,o){const a=new _m,l=new $1,c=new Set,u=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let g=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,w,L,V,P){const j=V.fog,G=P.geometry,te=x.isMeshStandardMaterial?V.environment:null,Z=(x.isMeshStandardMaterial?t:e).get(x.envMap||te),Y=Z&&Z.mapping===qa?Z.image.height:null,ee=v[x.type];x.precision!==null&&(g=r.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const F=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Q=F!==void 0?F.length:0;let ne=0;G.morphAttributes.position!==void 0&&(ne=1),G.morphAttributes.normal!==void 0&&(ne=2),G.morphAttributes.color!==void 0&&(ne=3);let z,X,ce,se;if(ee){const Be=ti[ee];z=Be.vertexShader,X=Be.fragmentShader}else z=x.vertexShader,X=x.fragmentShader,l.update(x),ce=l.getVertexShaderID(x),se=l.getFragmentShaderID(x);const fe=n.getRenderTarget(),ve=P.isInstancedMesh===!0,Te=P.isBatchedMesh===!0,_e=!!x.map,B=!!x.matcap,ke=!!Z,C=!!x.aoMap,U=!!x.lightMap,H=!!x.bumpMap,ie=!!x.normalMap,W=!!x.displacementMap,E=!!x.emissiveMap,y=!!x.metalnessMap,R=!!x.roughnessMap,K=x.anisotropy>0,N=x.clearcoat>0,q=x.iridescence>0,re=x.sheen>0,ue=x.transmission>0,oe=K&&!!x.anisotropyMap,he=N&&!!x.clearcoatMap,xe=N&&!!x.clearcoatNormalMap,le=N&&!!x.clearcoatRoughnessMap,Le=q&&!!x.iridescenceMap,De=q&&!!x.iridescenceThicknessMap,Ce=re&&!!x.sheenColorMap,Ae=re&&!!x.sheenRoughnessMap,ye=!!x.specularMap,Ue=!!x.specularColorMap,Ne=!!x.specularIntensityMap,k=ue&&!!x.transmissionMap,ge=ue&&!!x.thicknessMap,be=!!x.gradientMap,D=!!x.alphaMap,Me=x.alphaTest>0,Se=!!x.alphaHash,Ee=!!x.extensions;let Oe=Wi;x.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Oe=n.toneMapping);const Ge={isWebGL2:f,shaderID:ee,shaderType:x.type,shaderName:x.name,vertexShader:z,fragmentShader:X,defines:x.defines,customVertexShaderID:ce,customFragmentShaderID:se,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Te,instancing:ve,instancingColor:ve&&P.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:_i,alphaToCoverage:!!x.alphaToCoverage,map:_e,matcap:B,envMap:ke,envMapMode:ke&&Z.mapping,envMapCubeUVHeight:Y,aoMap:C,lightMap:U,bumpMap:H,normalMap:ie,displacementMap:d&&W,emissiveMap:E,normalMapObjectSpace:ie&&x.normalMapType===AS,normalMapTangentSpace:ie&&x.normalMapType===nm,metalnessMap:y,roughnessMap:R,anisotropy:K,anisotropyMap:oe,clearcoat:N,clearcoatMap:he,clearcoatNormalMap:xe,clearcoatRoughnessMap:le,iridescence:q,iridescenceMap:Le,iridescenceThicknessMap:De,sheen:re,sheenColorMap:Ce,sheenRoughnessMap:Ae,specularMap:ye,specularColorMap:Ue,specularIntensityMap:Ne,transmission:ue,transmissionMap:k,thicknessMap:ge,gradientMap:be,opaque:x.transparent===!1&&x.blending===as&&x.alphaToCoverage===!1,alphaMap:D,alphaTest:Me,alphaHash:Se,combine:x.combine,mapUv:_e&&p(x.map.channel),aoMapUv:C&&p(x.aoMap.channel),lightMapUv:U&&p(x.lightMap.channel),bumpMapUv:H&&p(x.bumpMap.channel),normalMapUv:ie&&p(x.normalMap.channel),displacementMapUv:W&&p(x.displacementMap.channel),emissiveMapUv:E&&p(x.emissiveMap.channel),metalnessMapUv:y&&p(x.metalnessMap.channel),roughnessMapUv:R&&p(x.roughnessMap.channel),anisotropyMapUv:oe&&p(x.anisotropyMap.channel),clearcoatMapUv:he&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:xe&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:De&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&p(x.sheenRoughnessMap.channel),specularMapUv:ye&&p(x.specularMap.channel),specularColorMapUv:Ue&&p(x.specularColorMap.channel),specularIntensityMapUv:Ne&&p(x.specularIntensityMap.channel),transmissionMapUv:k&&p(x.transmissionMap.channel),thicknessMapUv:ge&&p(x.thicknessMap.channel),alphaMapUv:D&&p(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ie||K),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!G.attributes.uv&&(_e||D),fog:!!j,useFog:x.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:P.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ne,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Oe,useLegacyLights:n._useLegacyLights,decodeVideoTexture:_e&&x.map.isVideoTexture===!0&&ot.getTransfer(x.map.colorSpace)===pt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===on,flipSided:x.side===Qt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:Ee&&x.extensions.derivatives===!0,extensionFragDepth:Ee&&x.extensions.fragDepth===!0,extensionDrawBuffers:Ee&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ee&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ee&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ee&&x.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function S(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)w.push(L),w.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(_(w,x),M(w,x),w.push(n.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function _(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function M(x,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),x.push(a.mask)}function A(x){const w=v[x.type];let L;if(w){const V=ti[w];L=Dm.clone(V.uniforms)}else L=x.uniforms;return L}function T(x,w){let L;for(let V=0,P=u.length;V<P;V++){const j=u[V];if(j.cacheKey===w){L=j,++L.usedTimes;break}}return L===void 0&&(L=new Y1(n,w,x,s),u.push(L)),L}function b(x){if(--x.usedTimes===0){const w=u.indexOf(x);u[w]=u[u.length-1],u.pop(),x.destroy()}}function O(x){l.remove(x)}function J(){l.dispose()}return{getParameters:m,getProgramCacheKey:S,getUniforms:A,acquireProgram:T,releaseProgram:b,releaseShaderCache:O,programs:u,dispose:J}}function Z1(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Q1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function hg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function dg(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,d,g,v,p){let m=n[e];return m===void 0?(m={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:v,group:p},n[e]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=d,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=v,m.group=p),e++,m}function a(f,h,d,g,v,p){const m=o(f,h,d,g,v,p);d.transmission>0?i.push(m):d.transparent===!0?r.push(m):t.push(m)}function l(f,h,d,g,v,p){const m=o(f,h,d,g,v,p);d.transmission>0?i.unshift(m):d.transparent===!0?r.unshift(m):t.unshift(m)}function c(f,h){t.length>1&&t.sort(f||Q1),i.length>1&&i.sort(h||hg),r.length>1&&r.sort(h||hg)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function ew(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new dg,n.set(i,[o])):r>=s.length?(o=new dg,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function tw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new $e};break;case"SpotLight":t={position:new $,direction:new $,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new $,halfWidth:new $,halfHeight:new $};break}return n[e.id]=t,t}}}function nw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let iw=0;function rw(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function sw(n,e){const t=new tw,i=nw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new $);const s=new $,o=new gt,a=new gt;function l(u,f){let h=0,d=0,g=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let v=0,p=0,m=0,S=0,_=0,M=0,A=0,T=0,b=0,O=0,J=0;u.sort(rw);const x=f===!0?Math.PI:1;for(let L=0,V=u.length;L<V;L++){const P=u[L],j=P.color,G=P.intensity,te=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=j.r*G*x,d+=j.g*G*x,g+=j.b*G*x;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(P.sh.coefficients[Y],G);J++}else if(P.isDirectionalLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity*x),P.castShadow){const ee=P.shadow,F=i.get(P);F.shadowBias=ee.bias,F.shadowNormalBias=ee.normalBias,F.shadowRadius=ee.radius,F.shadowMapSize=ee.mapSize,r.directionalShadow[v]=F,r.directionalShadowMap[v]=Z,r.directionalShadowMatrix[v]=P.shadow.matrix,M++}r.directional[v]=Y,v++}else if(P.isSpotLight){const Y=t.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(j).multiplyScalar(G*x),Y.distance=te,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,r.spot[m]=Y;const ee=P.shadow;if(P.map&&(r.spotLightMap[b]=P.map,b++,ee.updateMatrices(P),P.castShadow&&O++),r.spotLightMatrix[m]=ee.matrix,P.castShadow){const F=i.get(P);F.shadowBias=ee.bias,F.shadowNormalBias=ee.normalBias,F.shadowRadius=ee.radius,F.shadowMapSize=ee.mapSize,r.spotShadow[m]=F,r.spotShadowMap[m]=Z,T++}m++}else if(P.isRectAreaLight){const Y=t.get(P);Y.color.copy(j).multiplyScalar(G),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),r.rectArea[S]=Y,S++}else if(P.isPointLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity*x),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const ee=P.shadow,F=i.get(P);F.shadowBias=ee.bias,F.shadowNormalBias=ee.normalBias,F.shadowRadius=ee.radius,F.shadowMapSize=ee.mapSize,F.shadowCameraNear=ee.camera.near,F.shadowCameraFar=ee.camera.far,r.pointShadow[p]=F,r.pointShadowMap[p]=Z,r.pointShadowMatrix[p]=P.shadow.matrix,A++}r.point[p]=Y,p++}else if(P.isHemisphereLight){const Y=t.get(P);Y.skyColor.copy(P.color).multiplyScalar(G*x),Y.groundColor.copy(P.groundColor).multiplyScalar(G*x),r.hemi[_]=Y,_++}}S>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=g;const w=r.hash;(w.directionalLength!==v||w.pointLength!==p||w.spotLength!==m||w.rectAreaLength!==S||w.hemiLength!==_||w.numDirectionalShadows!==M||w.numPointShadows!==A||w.numSpotShadows!==T||w.numSpotMaps!==b||w.numLightProbes!==J)&&(r.directional.length=v,r.spot.length=m,r.rectArea.length=S,r.point.length=p,r.hemi.length=_,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=T+b-O,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=J,w.directionalLength=v,w.pointLength=p,w.spotLength=m,w.rectAreaLength=S,w.hemiLength=_,w.numDirectionalShadows=M,w.numPointShadows=A,w.numSpotShadows=T,w.numSpotMaps=b,w.numLightProbes=J,r.version=iw++)}function c(u,f){let h=0,d=0,g=0,v=0,p=0;const m=f.matrixWorldInverse;for(let S=0,_=u.length;S<_;S++){const M=u[S];if(M.isDirectionalLight){const A=r.directional[h];A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),h++}else if(M.isSpotLight){const A=r.spot[g];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),g++}else if(M.isRectAreaLight){const A=r.rectArea[v];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(m),a.identity(),o.copy(M.matrixWorld),o.premultiply(m),a.extractRotation(o),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){const A=r.point[d];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const A=r.hemi[p];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:r}}function pg(n,e){const t=new sw(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function ow(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new pg(n,e),t.set(s,[l])):o>=a.length?(l=new pg(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class mg extends ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=TS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gg extends ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const aw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cw(n,e,t){let i=new Bm;const r=new Ie,s=new Ie,o=new Rt,a=new mg({depthPacking:tm}),l=new gg,c={},u=t.maxTextureSize,f={[On]:Qt,[Qt]:On,[on]:on},h=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:aw,fragmentShader:lw}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Mt;g.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Et(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pp;let m=this.type;this.render=function(T,b,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const J=n.getRenderTarget(),x=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),L=n.state;L.setBlending(Vi),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const V=m!==gi&&this.type===gi,P=m===gi&&this.type!==gi;for(let j=0,G=T.length;j<G;j++){const te=T[j],Z=te.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);const Y=Z.getFrameExtents();if(r.multiply(Y),s.copy(Z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,Z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,Z.mapSize.y=s.y)),Z.map===null||V===!0||P===!0){const F=this.type!==gi?{minFilter:dt,magFilter:dt}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Cr(r.x,r.y,F),Z.map.texture.name=te.name+".shadowMap",Z.camera.updateProjectionMatrix()}n.setRenderTarget(Z.map),n.clear();const ee=Z.getViewportCount();for(let F=0;F<ee;F++){const Q=Z.getViewport(F);o.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),L.viewport(o),Z.updateMatrices(te,F),i=Z.getFrustum(),M(b,O,Z.camera,te,this.type)}Z.isPointLightShadow!==!0&&this.type===gi&&S(Z,O),Z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(J,x,w)};function S(T,b){const O=e.update(v);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Cr(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(b,null,O,h,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(b,null,O,d,v,null)}function _(T,b,O,J){let x=null;const w=O.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)x=w;else if(x=O.isPointLight===!0?l:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const L=x.uuid,V=b.uuid;let P=c[L];P===void 0&&(P={},c[L]=P);let j=P[V];j===void 0&&(j=x.clone(),P[V]=j,b.addEventListener("dispose",A)),x=j}if(x.visible=b.visible,x.wireframe=b.wireframe,J===gi?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:f[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,O.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const L=n.properties.get(x);L.light=O}return x}function M(T,b,O,J,x){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===gi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,T.matrixWorld);const V=e.update(T),P=T.material;if(Array.isArray(P)){const j=V.groups;for(let G=0,te=j.length;G<te;G++){const Z=j[G],Y=P[Z.materialIndex];if(Y&&Y.visible){const ee=_(T,Y,J,x);T.onBeforeShadow(n,T,b,O,V,ee,Z),n.renderBufferDirect(O,null,V,ee,T,Z),T.onAfterShadow(n,T,b,O,V,ee,Z)}}}else if(P.visible){const j=_(T,P,J,x);T.onBeforeShadow(n,T,b,O,V,j,null),n.renderBufferDirect(O,null,V,j,T,null),T.onAfterShadow(n,T,b,O,V,j,null)}}const L=T.children;for(let V=0,P=L.length;V<P;V++)M(L[V],b,O,J,x)}function A(T){T.target.removeEventListener("dispose",A);for(const O in c){const J=c[O],x=T.target.uuid;x in J&&(J[x].dispose(),delete J[x])}}}function uw(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const Me=new Rt;let Se=null;const Ee=new Rt(0,0,0,0);return{setMask:function(Oe){Se!==Oe&&!D&&(n.colorMask(Oe,Oe,Oe,Oe),Se=Oe)},setLocked:function(Oe){D=Oe},setClear:function(Oe,Ge,Be,Ve,it){it===!0&&(Oe*=Ve,Ge*=Ve,Be*=Ve),Me.set(Oe,Ge,Be,Ve),Ee.equals(Me)===!1&&(n.clearColor(Oe,Ge,Be,Ve),Ee.copy(Me))},reset:function(){D=!1,Se=null,Ee.set(-1,0,0,0)}}}function s(){let D=!1,Me=null,Se=null,Ee=null;return{setTest:function(Oe){Oe?ve(n.DEPTH_TEST):Te(n.DEPTH_TEST)},setMask:function(Oe){Me!==Oe&&!D&&(n.depthMask(Oe),Me=Oe)},setFunc:function(Oe){if(Se!==Oe){switch(Oe){case iS:n.depthFunc(n.NEVER);break;case rS:n.depthFunc(n.ALWAYS);break;case sS:n.depthFunc(n.LESS);break;case Ya:n.depthFunc(n.LEQUAL);break;case oS:n.depthFunc(n.EQUAL);break;case aS:n.depthFunc(n.GEQUAL);break;case lS:n.depthFunc(n.GREATER);break;case cS:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=Oe}},setLocked:function(Oe){D=Oe},setClear:function(Oe){Ee!==Oe&&(n.clearDepth(Oe),Ee=Oe)},reset:function(){D=!1,Me=null,Se=null,Ee=null}}}function o(){let D=!1,Me=null,Se=null,Ee=null,Oe=null,Ge=null,Be=null,Ve=null,it=null;return{setTest:function(Xe){D||(Xe?ve(n.STENCIL_TEST):Te(n.STENCIL_TEST))},setMask:function(Xe){Me!==Xe&&!D&&(n.stencilMask(Xe),Me=Xe)},setFunc:function(Xe,Ke,at){(Se!==Xe||Ee!==Ke||Oe!==at)&&(n.stencilFunc(Xe,Ke,at),Se=Xe,Ee=Ke,Oe=at)},setOp:function(Xe,Ke,at){(Ge!==Xe||Be!==Ke||Ve!==at)&&(n.stencilOp(Xe,Ke,at),Ge=Xe,Be=Ke,Ve=at)},setLocked:function(Xe){D=Xe},setClear:function(Xe){it!==Xe&&(n.clearStencil(Xe),it=Xe)},reset:function(){D=!1,Me=null,Se=null,Ee=null,Oe=null,Ge=null,Be=null,Ve=null,it=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},d={},g=new WeakMap,v=[],p=null,m=!1,S=null,_=null,M=null,A=null,T=null,b=null,O=null,J=new $e(0,0,0),x=0,w=!1,L=null,V=null,P=null,j=null,G=null;const te=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,Y=0;const ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ee)[1]),Z=Y>=1):ee.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),Z=Y>=2);let F=null,Q={};const ne=n.getParameter(n.SCISSOR_BOX),z=n.getParameter(n.VIEWPORT),X=new Rt().fromArray(ne),ce=new Rt().fromArray(z);function se(D,Me,Se,Ee){const Oe=new Uint8Array(4),Ge=n.createTexture();n.bindTexture(D,Ge),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Be=0;Be<Se;Be++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(Me,0,n.RGBA,1,1,Ee,0,n.RGBA,n.UNSIGNED_BYTE,Oe):n.texImage2D(Me+Be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Oe);return Ge}const fe={};fe[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),fe[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(fe[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),fe[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ve(n.DEPTH_TEST),l.setFunc(Ya),W(!1),E(dp),ve(n.CULL_FACE),H(Vi);function ve(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function Te(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function _e(D,Me){return d[D]!==Me?(n.bindFramebuffer(D,Me),d[D]=Me,i&&(D===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Me),D===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Me)),!0):!1}function B(D,Me){let Se=v,Ee=!1;if(D)if(Se=g.get(Me),Se===void 0&&(Se=[],g.set(Me,Se)),D.isWebGLMultipleRenderTargets){const Oe=D.texture;if(Se.length!==Oe.length||Se[0]!==n.COLOR_ATTACHMENT0){for(let Ge=0,Be=Oe.length;Ge<Be;Ge++)Se[Ge]=n.COLOR_ATTACHMENT0+Ge;Se.length=Oe.length,Ee=!0}}else Se[0]!==n.COLOR_ATTACHMENT0&&(Se[0]=n.COLOR_ATTACHMENT0,Ee=!0);else Se[0]!==n.BACK&&(Se[0]=n.BACK,Ee=!0);Ee&&(t.isWebGL2?n.drawBuffers(Se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Se))}function ke(D){return p!==D?(n.useProgram(D),p=D,!0):!1}const C={[Sr]:n.FUNC_ADD,[Hy]:n.FUNC_SUBTRACT,[Vy]:n.FUNC_REVERSE_SUBTRACT};if(i)C[_p]=n.MIN,C[xp]=n.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(C[_p]=D.MIN_EXT,C[xp]=D.MAX_EXT)}const U={[Wy]:n.ZERO,[Xy]:n.ONE,[jy]:n.SRC_COLOR,[fu]:n.SRC_ALPHA,[Zy]:n.SRC_ALPHA_SATURATE,[Ky]:n.DST_COLOR,[qy]:n.DST_ALPHA,[Yy]:n.ONE_MINUS_SRC_COLOR,[hu]:n.ONE_MINUS_SRC_ALPHA,[Jy]:n.ONE_MINUS_DST_COLOR,[$y]:n.ONE_MINUS_DST_ALPHA,[Qy]:n.CONSTANT_COLOR,[eS]:n.ONE_MINUS_CONSTANT_COLOR,[tS]:n.CONSTANT_ALPHA,[nS]:n.ONE_MINUS_CONSTANT_ALPHA};function H(D,Me,Se,Ee,Oe,Ge,Be,Ve,it,Xe){if(D===Vi){m===!0&&(Te(n.BLEND),m=!1);return}if(m===!1&&(ve(n.BLEND),m=!0),D!==Gy){if(D!==S||Xe!==w){if((_!==Sr||T!==Sr)&&(n.blendEquation(n.FUNC_ADD),_=Sr,T=Sr),Xe)switch(D){case as:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mp:n.blendFunc(n.ONE,n.ONE);break;case gp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case as:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mp:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case gp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,A=null,b=null,O=null,J.set(0,0,0),x=0,S=D,w=Xe}return}Oe=Oe||Me,Ge=Ge||Se,Be=Be||Ee,(Me!==_||Oe!==T)&&(n.blendEquationSeparate(C[Me],C[Oe]),_=Me,T=Oe),(Se!==M||Ee!==A||Ge!==b||Be!==O)&&(n.blendFuncSeparate(U[Se],U[Ee],U[Ge],U[Be]),M=Se,A=Ee,b=Ge,O=Be),(Ve.equals(J)===!1||it!==x)&&(n.blendColor(Ve.r,Ve.g,Ve.b,it),J.copy(Ve),x=it),S=D,w=!1}function ie(D,Me){D.side===on?Te(n.CULL_FACE):ve(n.CULL_FACE);let Se=D.side===Qt;Me&&(Se=!Se),W(Se),D.blending===as&&D.transparent===!1?H(Vi):H(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const Ee=D.stencilWrite;c.setTest(Ee),Ee&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),R(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):Te(n.SAMPLE_ALPHA_TO_COVERAGE)}function W(D){L!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),L=D)}function E(D){D!==By?(ve(n.CULL_FACE),D!==V&&(D===dp?n.cullFace(n.BACK):D===ky?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Te(n.CULL_FACE),V=D}function y(D){D!==P&&(Z&&n.lineWidth(D),P=D)}function R(D,Me,Se){D?(ve(n.POLYGON_OFFSET_FILL),(j!==Me||G!==Se)&&(n.polygonOffset(Me,Se),j=Me,G=Se)):Te(n.POLYGON_OFFSET_FILL)}function K(D){D?ve(n.SCISSOR_TEST):Te(n.SCISSOR_TEST)}function N(D){D===void 0&&(D=n.TEXTURE0+te-1),F!==D&&(n.activeTexture(D),F=D)}function q(D,Me,Se){Se===void 0&&(F===null?Se=n.TEXTURE0+te-1:Se=F);let Ee=Q[Se];Ee===void 0&&(Ee={type:void 0,texture:void 0},Q[Se]=Ee),(Ee.type!==D||Ee.texture!==Me)&&(F!==Se&&(n.activeTexture(Se),F=Se),n.bindTexture(D,Me||fe[D]),Ee.type=D,Ee.texture=Me)}function re(){const D=Q[F];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ue(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ue(D){X.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),X.copy(D))}function Ne(D){ce.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ce.copy(D))}function k(D,Me){let Se=f.get(Me);Se===void 0&&(Se=new WeakMap,f.set(Me,Se));let Ee=Se.get(D);Ee===void 0&&(Ee=n.getUniformBlockIndex(Me,D.name),Se.set(D,Ee))}function ge(D,Me){const Ee=f.get(Me).get(D);u.get(Me)!==Ee&&(n.uniformBlockBinding(Me,Ee,D.__bindingPointIndex),u.set(Me,Ee))}function be(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},F=null,Q={},d={},g=new WeakMap,v=[],p=null,m=!1,S=null,_=null,M=null,A=null,T=null,b=null,O=null,J=new $e(0,0,0),x=0,w=!1,L=null,V=null,P=null,j=null,G=null,X.set(0,0,n.canvas.width,n.canvas.height),ce.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ve,disable:Te,bindFramebuffer:_e,drawBuffers:B,useProgram:ke,setBlending:H,setMaterial:ie,setFlipSided:W,setCullFace:E,setLineWidth:y,setPolygonOffset:R,setScissorTest:K,activeTexture:N,bindTexture:q,unbindTexture:re,compressedTexImage2D:ue,compressedTexImage3D:oe,texImage2D:Ae,texImage3D:ye,updateUBOMapping:k,uniformBlockBinding:ge,texStorage2D:De,texStorage3D:Ce,texSubImage2D:he,texSubImage3D:xe,compressedTexSubImage2D:le,compressedTexSubImage3D:Le,scissor:Ue,viewport:Ne,reset:be}}function fw(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,y){return d?new OffscreenCanvas(E,y):yo("canvas")}function v(E,y,R,K){let N=1;if((E.width>K||E.height>K)&&(N=K/Math.max(E.width,E.height)),N<1||y===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const q=y?tl:Math.floor,re=q(N*E.width),ue=q(N*E.height);f===void 0&&(f=g(re,ue));const oe=R?g(re,ue):f;return oe.width=re,oe.height=ue,oe.getContext("2d").drawImage(E,0,0,re,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+re+"x"+ue+")."),oe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function p(E){return Au(E.width)&&Au(E.height)}function m(E){return a?!1:E.wrapS!==Fn||E.wrapT!==Fn||E.minFilter!==dt&&E.minFilter!==jt}function S(E,y){return E.generateMipmaps&&y&&E.minFilter!==dt&&E.minFilter!==jt}function _(E){n.generateMipmap(E)}function M(E,y,R,K,N=!1){if(a===!1)return y;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let q=y;if(y===n.RED&&(R===n.FLOAT&&(q=n.R32F),R===n.HALF_FLOAT&&(q=n.R16F),R===n.UNSIGNED_BYTE&&(q=n.R8)),y===n.RED_INTEGER&&(R===n.UNSIGNED_BYTE&&(q=n.R8UI),R===n.UNSIGNED_SHORT&&(q=n.R16UI),R===n.UNSIGNED_INT&&(q=n.R32UI),R===n.BYTE&&(q=n.R8I),R===n.SHORT&&(q=n.R16I),R===n.INT&&(q=n.R32I)),y===n.RG&&(R===n.FLOAT&&(q=n.RG32F),R===n.HALF_FLOAT&&(q=n.RG16F),R===n.UNSIGNED_BYTE&&(q=n.RG8)),y===n.RGBA){const re=N?Ja:ot.getTransfer(K);R===n.FLOAT&&(q=n.RGBA32F),R===n.HALF_FLOAT&&(q=n.RGBA16F),R===n.UNSIGNED_BYTE&&(q=re===pt?n.SRGB8_ALPHA8:n.RGBA8),R===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),R===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function A(E,y,R){return S(E,R)===!0||E.isFramebufferTexture&&E.minFilter!==dt&&E.minFilter!==jt?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function T(E){return E===dt||E===Sp||E===mo?n.NEAREST:n.LINEAR}function b(E){const y=E.target;y.removeEventListener("dispose",b),J(y),y.isVideoTexture&&u.delete(y)}function O(E){const y=E.target;y.removeEventListener("dispose",O),w(y)}function J(E){const y=i.get(E);if(y.__webglInit===void 0)return;const R=E.source,K=h.get(R);if(K){const N=K[y.__cacheKey];N.usedTimes--,N.usedTimes===0&&x(E),Object.keys(K).length===0&&h.delete(R)}i.remove(E)}function x(E){const y=i.get(E);n.deleteTexture(y.__webglTexture);const R=E.source,K=h.get(R);delete K[y.__cacheKey],o.memory.textures--}function w(E){const y=E.texture,R=i.get(E),K=i.get(y);if(K.__webglTexture!==void 0&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(R.__webglFramebuffer[N]))for(let q=0;q<R.__webglFramebuffer[N].length;q++)n.deleteFramebuffer(R.__webglFramebuffer[N][q]);else n.deleteFramebuffer(R.__webglFramebuffer[N]);R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer[N])}else{if(Array.isArray(R.__webglFramebuffer))for(let N=0;N<R.__webglFramebuffer.length;N++)n.deleteFramebuffer(R.__webglFramebuffer[N]);else n.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&n.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let N=0;N<R.__webglColorRenderbuffer.length;N++)R.__webglColorRenderbuffer[N]&&n.deleteRenderbuffer(R.__webglColorRenderbuffer[N]);R.__webglDepthRenderbuffer&&n.deleteRenderbuffer(R.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let N=0,q=y.length;N<q;N++){const re=i.get(y[N]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),o.memory.textures--),i.remove(y[N])}i.remove(y),i.remove(E)}let L=0;function V(){L=0}function P(){const E=L;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),L+=1,E}function j(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function G(E,y){const R=i.get(E);if(E.isVideoTexture&&ie(E),E.isRenderTargetTexture===!1&&E.version>0&&R.__version!==E.version){const K=E.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(R,E,y);return}}t.bindTexture(n.TEXTURE_2D,R.__webglTexture,n.TEXTURE0+y)}function te(E,y){const R=i.get(E);if(E.version>0&&R.__version!==E.version){X(R,E,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,R.__webglTexture,n.TEXTURE0+y)}function Z(E,y){const R=i.get(E);if(E.version>0&&R.__version!==E.version){X(R,E,y);return}t.bindTexture(n.TEXTURE_3D,R.__webglTexture,n.TEXTURE0+y)}function Y(E,y){const R=i.get(E);if(E.version>0&&R.__version!==E.version){ce(R,E,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+y)}const ee={[$a]:n.REPEAT,[Fn]:n.CLAMP_TO_EDGE,[gu]:n.MIRRORED_REPEAT},F={[dt]:n.NEAREST,[Sp]:n.NEAREST_MIPMAP_NEAREST,[mo]:n.NEAREST_MIPMAP_LINEAR,[jt]:n.LINEAR,[vu]:n.LINEAR_MIPMAP_NEAREST,[br]:n.LINEAR_MIPMAP_LINEAR},Q={[CS]:n.NEVER,[IS]:n.ALWAYS,[RS]:n.LESS,[rm]:n.LEQUAL,[PS]:n.EQUAL,[DS]:n.GEQUAL,[LS]:n.GREATER,[US]:n.NOTEQUAL};function ne(E,y,R){if(y.type===vi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===jt||y.magFilter===vu||y.magFilter===mo||y.magFilter===br||y.minFilter===jt||y.minFilter===vu||y.minFilter===mo||y.minFilter===br)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),R?(n.texParameteri(E,n.TEXTURE_WRAP_S,ee[y.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ee[y.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ee[y.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,F[y.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,F[y.minFilter])):(n.texParameteri(E,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(E,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(y.wrapS!==Fn||y.wrapT!==Fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,n.TEXTURE_MAG_FILTER,T(y.magFilter)),n.texParameteri(E,n.TEXTURE_MIN_FILTER,T(y.minFilter)),y.minFilter!==dt&&y.minFilter!==jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Q[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const K=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===dt||y.minFilter!==mo&&y.minFilter!==br||y.type===vi&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===go&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(n.texParameterf(E,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function z(E,y){let R=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",b));const K=y.source;let N=h.get(K);N===void 0&&(N={},h.set(K,N));const q=j(y);if(q!==E.__cacheKey){N[q]===void 0&&(N[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,R=!0),N[q].usedTimes++;const re=N[E.__cacheKey];re!==void 0&&(N[E.__cacheKey].usedTimes--,re.usedTimes===0&&x(y)),E.__cacheKey=q,E.__webglTexture=N[q].texture}return R}function X(E,y,R){let K=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=n.TEXTURE_3D);const N=z(E,y),q=y.source;t.bindTexture(K,E.__webglTexture,n.TEXTURE0+R);const re=i.get(q);if(q.version!==re.__version||N===!0){t.activeTexture(n.TEXTURE0+R);const ue=ot.getPrimaries(ot.workingColorSpace),oe=y.colorSpace===Mn?null:ot.getPrimaries(y.colorSpace),he=y.colorSpace===Mn||ue===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const xe=m(y)&&p(y.image)===!1;let le=v(y.image,xe,!1,r.maxTextureSize);le=W(y,le);const Le=p(le)||a,De=s.convert(y.format,y.colorSpace);let Ce=s.convert(y.type),Ae=M(y.internalFormat,De,Ce,y.colorSpace,y.isVideoTexture);ne(K,y,Le);let ye;const Ue=y.mipmaps,Ne=a&&y.isVideoTexture!==!0&&Ae!==Up,k=re.__version===void 0||N===!0,ge=q.dataReady,be=A(y,le,Le);if(y.isDepthTexture)Ae=n.DEPTH_COMPONENT,a?y.type===vi?Ae=n.DEPTH_COMPONENT32F:y.type===ji?Ae=n.DEPTH_COMPONENT24:y.type===Mr?Ae=n.DEPTH24_STENCIL8:Ae=n.DEPTH_COMPONENT16:y.type===vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Er&&Ae===n.DEPTH_COMPONENT&&y.type!==_u&&y.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=ji,Ce=s.convert(y.type)),y.format===us&&Ae===n.DEPTH_COMPONENT&&(Ae=n.DEPTH_STENCIL,y.type!==Mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Mr,Ce=s.convert(y.type))),k&&(Ne?t.texStorage2D(n.TEXTURE_2D,1,Ae,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Ae,le.width,le.height,0,De,Ce,null));else if(y.isDataTexture)if(Ue.length>0&&Le){Ne&&k&&t.texStorage2D(n.TEXTURE_2D,be,Ae,Ue[0].width,Ue[0].height);for(let D=0,Me=Ue.length;D<Me;D++)ye=Ue[D],Ne?ge&&t.texSubImage2D(n.TEXTURE_2D,D,0,0,ye.width,ye.height,De,Ce,ye.data):t.texImage2D(n.TEXTURE_2D,D,Ae,ye.width,ye.height,0,De,Ce,ye.data);y.generateMipmaps=!1}else Ne?(k&&t.texStorage2D(n.TEXTURE_2D,be,Ae,le.width,le.height),ge&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le.width,le.height,De,Ce,le.data)):t.texImage2D(n.TEXTURE_2D,0,Ae,le.width,le.height,0,De,Ce,le.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ne&&k&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Ae,Ue[0].width,Ue[0].height,le.depth);for(let D=0,Me=Ue.length;D<Me;D++)ye=Ue[D],y.format!==bn?De!==null?Ne?ge&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,D,0,0,0,ye.width,ye.height,le.depth,De,ye.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,D,Ae,ye.width,ye.height,le.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?ge&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,D,0,0,0,ye.width,ye.height,le.depth,De,Ce,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,D,Ae,ye.width,ye.height,le.depth,0,De,Ce,ye.data)}else{Ne&&k&&t.texStorage2D(n.TEXTURE_2D,be,Ae,Ue[0].width,Ue[0].height);for(let D=0,Me=Ue.length;D<Me;D++)ye=Ue[D],y.format!==bn?De!==null?Ne?ge&&t.compressedTexSubImage2D(n.TEXTURE_2D,D,0,0,ye.width,ye.height,De,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,D,Ae,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?ge&&t.texSubImage2D(n.TEXTURE_2D,D,0,0,ye.width,ye.height,De,Ce,ye.data):t.texImage2D(n.TEXTURE_2D,D,Ae,ye.width,ye.height,0,De,Ce,ye.data)}else if(y.isDataArrayTexture)Ne?(k&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Ae,le.width,le.height,le.depth),ge&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,De,Ce,le.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,le.width,le.height,le.depth,0,De,Ce,le.data);else if(y.isData3DTexture)Ne?(k&&t.texStorage3D(n.TEXTURE_3D,be,Ae,le.width,le.height,le.depth),ge&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,De,Ce,le.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,le.width,le.height,le.depth,0,De,Ce,le.data);else if(y.isFramebufferTexture){if(k)if(Ne)t.texStorage2D(n.TEXTURE_2D,be,Ae,le.width,le.height);else{let D=le.width,Me=le.height;for(let Se=0;Se<be;Se++)t.texImage2D(n.TEXTURE_2D,Se,Ae,D,Me,0,De,Ce,null),D>>=1,Me>>=1}}else if(Ue.length>0&&Le){Ne&&k&&t.texStorage2D(n.TEXTURE_2D,be,Ae,Ue[0].width,Ue[0].height);for(let D=0,Me=Ue.length;D<Me;D++)ye=Ue[D],Ne?ge&&t.texSubImage2D(n.TEXTURE_2D,D,0,0,De,Ce,ye):t.texImage2D(n.TEXTURE_2D,D,Ae,De,Ce,ye);y.generateMipmaps=!1}else Ne?(k&&t.texStorage2D(n.TEXTURE_2D,be,Ae,le.width,le.height),ge&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,De,Ce,le)):t.texImage2D(n.TEXTURE_2D,0,Ae,De,Ce,le);S(y,Le)&&_(K),re.__version=q.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function ce(E,y,R){if(y.image.length!==6)return;const K=z(E,y),N=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+R);const q=i.get(N);if(N.version!==q.__version||K===!0){t.activeTexture(n.TEXTURE0+R);const re=ot.getPrimaries(ot.workingColorSpace),ue=y.colorSpace===Mn?null:ot.getPrimaries(y.colorSpace),oe=y.colorSpace===Mn||re===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const he=y.isCompressedTexture||y.image[0].isCompressedTexture,xe=y.image[0]&&y.image[0].isDataTexture,le=[];for(let D=0;D<6;D++)!he&&!xe?le[D]=v(y.image[D],!1,!0,r.maxCubemapSize):le[D]=xe?y.image[D].image:y.image[D],le[D]=W(y,le[D]);const Le=le[0],De=p(Le)||a,Ce=s.convert(y.format,y.colorSpace),Ae=s.convert(y.type),ye=M(y.internalFormat,Ce,Ae,y.colorSpace),Ue=a&&y.isVideoTexture!==!0,Ne=q.__version===void 0||K===!0,k=N.dataReady;let ge=A(y,Le,De);ne(n.TEXTURE_CUBE_MAP,y,De);let be;if(he){Ue&&Ne&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,ye,Le.width,Le.height);for(let D=0;D<6;D++){be=le[D].mipmaps;for(let Me=0;Me<be.length;Me++){const Se=be[Me];y.format!==bn?Ce!==null?Ue?k&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,Me,0,0,Se.width,Se.height,Ce,Se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,Me,ye,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,Me,0,0,Se.width,Se.height,Ce,Ae,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,Me,ye,Se.width,Se.height,0,Ce,Ae,Se.data)}}}else{be=y.mipmaps,Ue&&Ne&&(be.length>0&&ge++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,ye,le[0].width,le[0].height));for(let D=0;D<6;D++)if(xe){Ue?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,le[D].width,le[D].height,Ce,Ae,le[D].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,ye,le[D].width,le[D].height,0,Ce,Ae,le[D].data);for(let Me=0;Me<be.length;Me++){const Ee=be[Me].image[D].image;Ue?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,Me+1,0,0,Ee.width,Ee.height,Ce,Ae,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,Me+1,ye,Ee.width,Ee.height,0,Ce,Ae,Ee.data)}}else{Ue?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,Ce,Ae,le[D]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,ye,Ce,Ae,le[D]);for(let Me=0;Me<be.length;Me++){const Se=be[Me];Ue?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,Me+1,0,0,Ce,Ae,Se.image[D]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+D,Me+1,ye,Ce,Ae,Se.image[D])}}}S(y,De)&&_(n.TEXTURE_CUBE_MAP),q.__version=N.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function se(E,y,R,K,N,q){const re=s.convert(R.format,R.colorSpace),ue=s.convert(R.type),oe=M(R.internalFormat,re,ue,R.colorSpace);if(!i.get(y).__hasExternalTextures){const xe=Math.max(1,y.width>>q),le=Math.max(1,y.height>>q);N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?t.texImage3D(N,q,oe,xe,le,y.depth,0,re,ue,null):t.texImage2D(N,q,oe,xe,le,0,re,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),H(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,N,i.get(R).__webglTexture,0,U(y)):(N===n.TEXTURE_2D||N>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&N<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,N,i.get(R).__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(E,y,R){if(n.bindRenderbuffer(n.RENDERBUFFER,E),y.depthBuffer&&!y.stencilBuffer){let K=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(R||H(y)){const N=y.depthTexture;N&&N.isDepthTexture&&(N.type===vi?K=n.DEPTH_COMPONENT32F:N.type===ji&&(K=n.DEPTH_COMPONENT24));const q=U(y);H(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,q,K,y.width,y.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,q,K,y.width,y.height)}else n.renderbufferStorage(n.RENDERBUFFER,K,y.width,y.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(y.depthBuffer&&y.stencilBuffer){const K=U(y);R&&H(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,K,n.DEPTH24_STENCIL8,y.width,y.height):H(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,K,n.DEPTH24_STENCIL8,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{const K=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let N=0;N<K.length;N++){const q=K[N],re=s.convert(q.format,q.colorSpace),ue=s.convert(q.type),oe=M(q.internalFormat,re,ue,q.colorSpace),he=U(y);R&&H(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,oe,y.width,y.height):H(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,oe,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,oe,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ve(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),G(y.depthTexture,0);const K=i.get(y.depthTexture).__webglTexture,N=U(y);if(y.depthTexture.format===Er)H(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,N):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(y.depthTexture.format===us)H(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,N):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Te(E){const y=i.get(E),R=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");ve(y.__webglFramebuffer,E)}else if(R){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]=n.createRenderbuffer(),fe(y.__webglDepthbuffer[K],E,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=n.createRenderbuffer(),fe(y.__webglDepthbuffer,E,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(E,y,R){const K=i.get(E);y!==void 0&&se(K.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),R!==void 0&&Te(E)}function B(E){const y=E.texture,R=i.get(E),K=i.get(y);E.addEventListener("dispose",O),E.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=y.version,o.memory.textures++);const N=E.isWebGLCubeRenderTarget===!0,q=E.isWebGLMultipleRenderTargets===!0,re=p(E)||a;if(N){R.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(a&&y.mipmaps&&y.mipmaps.length>0){R.__webglFramebuffer[ue]=[];for(let oe=0;oe<y.mipmaps.length;oe++)R.__webglFramebuffer[ue][oe]=n.createFramebuffer()}else R.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){R.__webglFramebuffer=[];for(let ue=0;ue<y.mipmaps.length;ue++)R.__webglFramebuffer[ue]=n.createFramebuffer()}else R.__webglFramebuffer=n.createFramebuffer();if(q)if(r.drawBuffers){const ue=E.texture;for(let oe=0,he=ue.length;oe<he;oe++){const xe=i.get(ue[oe]);xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&H(E)===!1){const ue=q?y:[y];R.__webglMultisampledFramebuffer=n.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let oe=0;oe<ue.length;oe++){const he=ue[oe];R.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,R.__webglColorRenderbuffer[oe]);const xe=s.convert(he.format,he.colorSpace),le=s.convert(he.type),Le=M(he.internalFormat,xe,le,he.colorSpace,E.isXRRenderTarget===!0),De=U(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Le,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,R.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(R.__webglDepthRenderbuffer=n.createRenderbuffer(),fe(R.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(N){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),ne(n.TEXTURE_CUBE_MAP,y,re);for(let ue=0;ue<6;ue++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let oe=0;oe<y.mipmaps.length;oe++)se(R.__webglFramebuffer[ue][oe],E,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,oe);else se(R.__webglFramebuffer[ue],E,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);S(y,re)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(q){const ue=E.texture;for(let oe=0,he=ue.length;oe<he;oe++){const xe=ue[oe],le=i.get(xe);t.bindTexture(n.TEXTURE_2D,le.__webglTexture),ne(n.TEXTURE_2D,xe,re),se(R.__webglFramebuffer,E,xe,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),S(xe,re)&&_(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?ue=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ue,K.__webglTexture),ne(ue,y,re),a&&y.mipmaps&&y.mipmaps.length>0)for(let oe=0;oe<y.mipmaps.length;oe++)se(R.__webglFramebuffer[oe],E,y,n.COLOR_ATTACHMENT0,ue,oe);else se(R.__webglFramebuffer,E,y,n.COLOR_ATTACHMENT0,ue,0);S(y,re)&&_(ue),t.unbindTexture()}E.depthBuffer&&Te(E)}function ke(E){const y=p(E)||a,R=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let K=0,N=R.length;K<N;K++){const q=R[K];if(S(q,y)){const re=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ue=i.get(q).__webglTexture;t.bindTexture(re,ue),_(re),t.unbindTexture()}}}function C(E){if(a&&E.samples>0&&H(E)===!1){const y=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],R=E.width,K=E.height;let N=n.COLOR_BUFFER_BIT;const q=[],re=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(E),oe=E.isWebGLMultipleRenderTargets===!0;if(oe)for(let he=0;he<y.length;he++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let he=0;he<y.length;he++){q.push(n.COLOR_ATTACHMENT0+he),E.depthBuffer&&q.push(re);const xe=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(xe===!1&&(E.depthBuffer&&(N|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&(N|=n.STENCIL_BUFFER_BIT)),oe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[he]),xe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[re]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[re])),oe){const le=i.get(y[he]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,le,0)}n.blitFramebuffer(0,0,R,K,0,0,R,K,N,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,q)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let he=0;he<y.length;he++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,ue.__webglColorRenderbuffer[he]);const xe=i.get(y[he]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function U(E){return Math.min(r.maxSamples,E.samples)}function H(E){const y=i.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ie(E){const y=o.render.frame;u.get(E)!==y&&(u.set(E,y),E.update())}function W(E,y){const R=E.colorSpace,K=E.format,N=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===wu||R!==_i&&R!==Mn&&(ot.getTransfer(R)===pt?a===!1?e.has("EXT_sRGB")===!0&&K===bn?(E.format=wu,E.minFilter=jt,E.generateMipmaps=!1):y=hm.sRGBToLinear(y):(K!==bn||N!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",R)),y}this.allocateTextureUnit=P,this.resetTextureUnits=V,this.setTexture2D=G,this.setTexture2DArray=te,this.setTexture3D=Z,this.setTextureCube=Y,this.rebindTextures=_e,this.setupRenderTarget=B,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=C,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=se,this.useMultisampledRTT=H}function hw(n,e,t){const i=t.isWebGL2;function r(s,o=Mn){let a;const l=ot.getTransfer(o);if(s===Xi)return n.UNSIGNED_BYTE;if(s===Mp)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Ep)return n.UNSIGNED_SHORT_5_5_5_1;if(s===_S)return n.BYTE;if(s===xS)return n.SHORT;if(s===_u)return n.UNSIGNED_SHORT;if(s===bp)return n.INT;if(s===ji)return n.UNSIGNED_INT;if(s===vi)return n.FLOAT;if(s===go)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===yS)return n.ALPHA;if(s===bn)return n.RGBA;if(s===SS)return n.LUMINANCE;if(s===bS)return n.LUMINANCE_ALPHA;if(s===Er)return n.DEPTH_COMPONENT;if(s===us)return n.DEPTH_STENCIL;if(s===wu)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===MS)return n.RED;if(s===wp)return n.RED_INTEGER;if(s===ES)return n.RG;if(s===Tp)return n.RG_INTEGER;if(s===Ap)return n.RGBA_INTEGER;if(s===xu||s===yu||s===Su||s===bu)if(l===pt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===xu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===yu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Su)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===bu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===xu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===yu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Su)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===bu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Cp||s===Rp||s===Pp||s===Lp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Cp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Rp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Pp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Lp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Up)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Dp||s===Ip)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Dp)return l===pt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ip)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Op||s===Fp||s===Np||s===Bp||s===kp||s===zp||s===Gp||s===Hp||s===Vp||s===Wp||s===Xp||s===jp||s===Yp||s===qp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Op)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Fp)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Np)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Bp)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===kp)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===zp)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Gp)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Hp)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vp)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Wp)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Xp)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===jp)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Yp)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===qp)return l===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Mu||s===$p||s===Kp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Mu)return l===pt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===$p)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Kp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===wS||s===Jp||s===Zp||s===Qp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Mu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Jp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Zp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Qp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Mr?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class dw extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ns extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pw={type:"move"};class Zu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ns;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const mw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Ct,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new wi({extensions:{fragDepth:!0},vertexShader:mw,fragmentShader:gw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Et(new Dr(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class _w extends Tr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const v=new vw,p=t.getContextAttributes();let m=null,S=null;const _=[],M=[],A=new Ie;let T=null;const b=new wn;b.layers.enable(1),b.viewport=new Rt;const O=new wn;O.layers.enable(2),O.viewport=new Rt;const J=[b,O],x=new dw;x.layers.enable(1),x.layers.enable(2);let w=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let X=_[z];return X===void 0&&(X=new Zu,_[z]=X),X.getTargetRaySpace()},this.getControllerGrip=function(z){let X=_[z];return X===void 0&&(X=new Zu,_[z]=X),X.getGripSpace()},this.getHand=function(z){let X=_[z];return X===void 0&&(X=new Zu,_[z]=X),X.getHandSpace()};function V(z){const X=M.indexOf(z.inputSource);if(X===-1)return;const ce=_[X];ce!==void 0&&(ce.update(z.inputSource,z.frame,c||o),ce.dispatchEvent({type:z.type,data:z.inputSource}))}function P(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",j);for(let z=0;z<_.length;z++){const X=M[z];X!==null&&(M[z]=null,_[z].disconnect(X))}w=null,L=null,v.reset(),e.setRenderTarget(m),d=null,h=null,f=null,r=null,S=null,ne.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",P),r.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const X={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,X),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Cr(d.framebufferWidth,d.framebufferHeight,{format:bn,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let X=null,ce=null,se=null;p.depth&&(se=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=p.stencil?us:Er,ce=p.stencil?Mr:ji);const fe={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(fe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new Cr(h.textureWidth,h.textureHeight,{format:bn,type:Xi,depthTexture:new qm(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const ve=e.properties.get(S);ve.__ignoreDepthValues=h.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ne.setContext(r),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function j(z){for(let X=0;X<z.removed.length;X++){const ce=z.removed[X],se=M.indexOf(ce);se>=0&&(M[se]=null,_[se].disconnect(ce))}for(let X=0;X<z.added.length;X++){const ce=z.added[X];let se=M.indexOf(ce);if(se===-1){for(let ve=0;ve<_.length;ve++)if(ve>=M.length){M.push(ce),se=ve;break}else if(M[ve]===null){M[ve]=ce,se=ve;break}if(se===-1)break}const fe=_[se];fe&&fe.connect(ce)}}const G=new $,te=new $;function Z(z,X,ce){G.setFromMatrixPosition(X.matrixWorld),te.setFromMatrixPosition(ce.matrixWorld);const se=G.distanceTo(te),fe=X.projectionMatrix.elements,ve=ce.projectionMatrix.elements,Te=fe[14]/(fe[10]-1),_e=fe[14]/(fe[10]+1),B=(fe[9]+1)/fe[5],ke=(fe[9]-1)/fe[5],C=(fe[8]-1)/fe[0],U=(ve[8]+1)/ve[0],H=Te*C,ie=Te*U,W=se/(-C+U),E=W*-C;X.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(E),z.translateZ(W),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const y=Te+W,R=_e+W,K=H-E,N=ie+(se-E),q=B*_e/R*y,re=ke*_e/R*y;z.projectionMatrix.makePerspective(K,N,q,re,y,R),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function Y(z,X){X===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(X.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;v.texture!==null&&(z.near=v.depthNear,z.far=v.depthFar),x.near=O.near=b.near=z.near,x.far=O.far=b.far=z.far,(w!==x.near||L!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,L=x.far,b.near=w,b.far=L,O.near=w,O.far=L,b.updateProjectionMatrix(),O.updateProjectionMatrix(),z.updateProjectionMatrix());const X=z.parent,ce=x.cameras;Y(x,X);for(let se=0;se<ce.length;se++)Y(ce[se],X);ce.length===2?Z(x,b,O):x.projectionMatrix.copy(b.projectionMatrix),ee(z,x,X)};function ee(z,X,ce){ce===null?z.matrix.copy(X.matrixWorld):(z.matrix.copy(ce.matrixWorld),z.matrix.invert(),z.matrix.multiply(X.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(X.projectionMatrix),z.projectionMatrixInverse.copy(X.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=_o*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(z){l=z,h!==null&&(h.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)},this.hasDepthSensing=function(){return v.texture!==null};let F=null;function Q(z,X){if(u=X.getViewerPose(c||o),g=X,u!==null){const ce=u.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let se=!1;ce.length!==x.cameras.length&&(x.cameras.length=0,se=!0);for(let ve=0;ve<ce.length;ve++){const Te=ce[ve];let _e=null;if(d!==null)_e=d.getViewport(Te);else{const ke=f.getViewSubImage(h,Te);_e=ke.viewport,ve===0&&(e.setRenderTargetTextures(S,ke.colorTexture,h.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(S))}let B=J[ve];B===void 0&&(B=new wn,B.layers.enable(ve),B.viewport=new Rt,J[ve]=B),B.matrix.fromArray(Te.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(Te.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(_e.x,_e.y,_e.width,_e.height),ve===0&&(x.matrix.copy(B.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),se===!0&&x.cameras.push(B)}const fe=r.enabledFeatures;if(fe&&fe.includes("depth-sensing")){const ve=f.getDepthInformation(ce[0]);ve&&ve.isValid&&ve.texture&&v.init(e,ve,r.renderState)}}for(let ce=0;ce<_.length;ce++){const se=M[ce],fe=_[ce];se!==null&&fe!==void 0&&fe.update(se,X,c||o)}v.render(e,x),F&&F(z,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),g=null}const ne=new km;ne.setAnimationLoop(Q),this.setAnimationLoop=function(z){F=z},this.dispose=function(){}}}function xw(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Um(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,S,_,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,M)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),v(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,S,_):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Qt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Qt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m).envMap;if(S&&(p.envMap.value=S,p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const _=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*_,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=_*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Qt&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function yw(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,_){const M=_.program;i.uniformBlockBinding(S,M)}function c(S,_){let M=r[S.id];M===void 0&&(g(S),M=u(S),r[S.id]=M,S.addEventListener("dispose",p));const A=_.program;i.updateUBOMapping(S,A);const T=e.render.frame;s[S.id]!==T&&(h(S),s[S.id]=T)}function u(S){const _=f();S.__bindingPointIndex=_;const M=n.createBuffer(),A=S.__size,T=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,A,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,M),M}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const _=r[S.id],M=S.uniforms,A=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let T=0,b=M.length;T<b;T++){const O=Array.isArray(M[T])?M[T]:[M[T]];for(let J=0,x=O.length;J<x;J++){const w=O[J];if(d(w,T,J,A)===!0){const L=w.__offset,V=Array.isArray(w.value)?w.value:[w.value];let P=0;for(let j=0;j<V.length;j++){const G=V[j],te=v(G);typeof G=="number"||typeof G=="boolean"?(w.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,L+P,w.__data)):G.isMatrix3?(w.__data[0]=G.elements[0],w.__data[1]=G.elements[1],w.__data[2]=G.elements[2],w.__data[3]=0,w.__data[4]=G.elements[3],w.__data[5]=G.elements[4],w.__data[6]=G.elements[5],w.__data[7]=0,w.__data[8]=G.elements[6],w.__data[9]=G.elements[7],w.__data[10]=G.elements[8],w.__data[11]=0):(G.toArray(w.__data,P),P+=te.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(S,_,M,A){const T=S.value,b=_+"_"+M;if(A[b]===void 0)return typeof T=="number"||typeof T=="boolean"?A[b]=T:A[b]=T.clone(),!0;{const O=A[b];if(typeof T=="number"||typeof T=="boolean"){if(O!==T)return A[b]=T,!0}else if(O.equals(T)===!1)return O.copy(T),!0}return!1}function g(S){const _=S.uniforms;let M=0;const A=16;for(let b=0,O=_.length;b<O;b++){const J=Array.isArray(_[b])?_[b]:[_[b]];for(let x=0,w=J.length;x<w;x++){const L=J[x],V=Array.isArray(L.value)?L.value:[L.value];for(let P=0,j=V.length;P<j;P++){const G=V[P],te=v(G),Z=M%A;Z!==0&&A-Z<te.boundary&&(M+=A-Z),L.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=M,M+=te.storage}}}const T=M%A;return T>0&&(M+=A-T),S.__size=M,S.__cache={},this}function v(S){const _={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=48,_.storage=48):S.isMatrix4?(_.boundary=64,_.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),_}function p(S){const _=S.target;_.removeEventListener("dispose",p);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function m(){for(const S in r)n.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}class Qu{constructor(e={}){const{canvas:t=KS(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const d=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const m=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=It,this._useLegacyLights=!1,this.toneMapping=Wi,this.toneMappingExposure=1;const _=this;let M=!1,A=0,T=0,b=null,O=-1,J=null;const x=new Rt,w=new Rt;let L=null;const V=new $e(0);let P=0,j=t.width,G=t.height,te=1,Z=null,Y=null;const ee=new Rt(0,0,j,G),F=new Rt(0,0,j,G);let Q=!1;const ne=new Bm;let z=!1,X=!1,ce=null;const se=new gt,fe=new Ie,ve=new $,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return b===null?te:1}let B=i;function ke(I,ae){for(let pe=0;pe<I.length;pe++){const me=I[pe],de=t.getContext(me,ae);if(de!==null)return de}return null}try{const I={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${uu}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",Me,!1),B===null){const ae=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&ae.shift(),B=ke(ae,I),B===null)throw ke(ae)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let C,U,H,ie,W,E,y,R,K,N,q,re,ue,oe,he,xe,le,Le,De,Ce,Ae,ye,Ue,Ne;function k(){C=new RE(B),U=new ME(B,C,e),C.init(U),ye=new hw(B,C,U),H=new uw(B,C,U),ie=new UE(B),W=new Z1,E=new fw(B,C,H,W,U,ye,ie),y=new wE(_),R=new CE(_),K=new yb(B,U),Ue=new SE(B,C,K,U),N=new PE(B,K,ie,Ue),q=new FE(B,N,K,ie),De=new OE(B,U,E),xe=new EE(W),re=new J1(_,y,R,C,U,Ue,xe),ue=new xw(_,W),oe=new ew,he=new ow(C,U),Le=new yE(_,y,R,H,q,h,l),le=new cw(_,q,U),Ne=new yw(B,ie,U,H),Ce=new bE(B,C,ie,U),Ae=new LE(B,C,ie,U),ie.programs=re.programs,_.capabilities=U,_.extensions=C,_.properties=W,_.renderLists=oe,_.shadowMap=le,_.state=H,_.info=ie}k();const ge=new _w(_,B);this.xr=ge,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const I=C.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=C.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(I){I!==void 0&&(te=I,this.setSize(j,G,!1))},this.getSize=function(I){return I.set(j,G)},this.setSize=function(I,ae,pe=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=I,G=ae,t.width=Math.floor(I*te),t.height=Math.floor(ae*te),pe===!0&&(t.style.width=I+"px",t.style.height=ae+"px"),this.setViewport(0,0,I,ae)},this.getDrawingBufferSize=function(I){return I.set(j*te,G*te).floor()},this.setDrawingBufferSize=function(I,ae,pe){j=I,G=ae,te=pe,t.width=Math.floor(I*pe),t.height=Math.floor(ae*pe),this.setViewport(0,0,I,ae)},this.getCurrentViewport=function(I){return I.copy(x)},this.getViewport=function(I){return I.copy(ee)},this.setViewport=function(I,ae,pe,me){I.isVector4?ee.set(I.x,I.y,I.z,I.w):ee.set(I,ae,pe,me),H.viewport(x.copy(ee).multiplyScalar(te).floor())},this.getScissor=function(I){return I.copy(F)},this.setScissor=function(I,ae,pe,me){I.isVector4?F.set(I.x,I.y,I.z,I.w):F.set(I,ae,pe,me),H.scissor(w.copy(F).multiplyScalar(te).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(I){H.setScissorTest(Q=I)},this.setOpaqueSort=function(I){Z=I},this.setTransparentSort=function(I){Y=I},this.getClearColor=function(I){return I.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(I=!0,ae=!0,pe=!0){let me=0;if(I){let de=!1;if(b!==null){const Fe=b.texture.format;de=Fe===Ap||Fe===Tp||Fe===wp}if(de){const Fe=b.texture.type,ze=Fe===Xi||Fe===ji||Fe===_u||Fe===Mr||Fe===Mp||Fe===Ep,We=Le.getClearColor(),we=Le.getClearAlpha(),Je=We.r,Ze=We.g,je=We.b;ze?(d[0]=Je,d[1]=Ze,d[2]=je,d[3]=we,B.clearBufferuiv(B.COLOR,0,d)):(g[0]=Je,g[1]=Ze,g[2]=je,g[3]=we,B.clearBufferiv(B.COLOR,0,g))}else me|=B.COLOR_BUFFER_BIT}ae&&(me|=B.DEPTH_BUFFER_BIT),pe&&(me|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(me)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),oe.dispose(),he.dispose(),W.dispose(),y.dispose(),R.dispose(),q.dispose(),Ue.dispose(),Ne.dispose(),re.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",it),ge.removeEventListener("sessionend",Xe),ce&&(ce.dispose(),ce=null),Ke.stop()};function be(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const I=ie.autoReset,ae=le.enabled,pe=le.autoUpdate,me=le.needsUpdate,de=le.type;k(),ie.autoReset=I,le.enabled=ae,le.autoUpdate=pe,le.needsUpdate=me,le.type=de}function Me(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Se(I){const ae=I.target;ae.removeEventListener("dispose",Se),Ee(ae)}function Ee(I){Oe(I),W.remove(I)}function Oe(I){const ae=W.get(I).programs;ae!==void 0&&(ae.forEach(function(pe){re.releaseProgram(pe)}),I.isShaderMaterial&&re.releaseShaderCache(I))}this.renderBufferDirect=function(I,ae,pe,me,de,Fe){ae===null&&(ae=Te);const ze=de.isMesh&&de.matrixWorld.determinant()<0,We=$l(I,ae,pe,me,de);H.setMaterial(me,ze);let we=pe.index,Je=1;if(me.wireframe===!0){if(we=N.getWireframeAttribute(pe),we===void 0)return;Je=2}const Ze=pe.drawRange,je=pe.attributes.position;let ut=Ze.start*Je,Kt=(Ze.start+Ze.count)*Je;Fe!==null&&(ut=Math.max(ut,Fe.start*Je),Kt=Math.min(Kt,(Fe.start+Fe.count)*Je)),we!==null?(ut=Math.max(ut,0),Kt=Math.min(Kt,we.count)):je!=null&&(ut=Math.max(ut,0),Kt=Math.min(Kt,je.count));const bt=Kt-ut;if(bt<0||bt===1/0)return;Ue.setup(de,me,We,pe,we);let cn,lt=Ce;if(we!==null&&(cn=K.get(we),lt=Ae,lt.setIndex(cn)),de.isMesh)me.wireframe===!0?(H.setLineWidth(me.wireframeLinewidth*_e()),lt.setMode(B.LINES)):lt.setMode(B.TRIANGLES);else if(de.isLine){let tt=me.linewidth;tt===void 0&&(tt=1),H.setLineWidth(tt*_e()),de.isLineSegments?lt.setMode(B.LINES):de.isLineLoop?lt.setMode(B.LINE_LOOP):lt.setMode(B.LINE_STRIP)}else de.isPoints?lt.setMode(B.POINTS):de.isSprite&&lt.setMode(B.TRIANGLES);if(de.isBatchedMesh)lt.renderMultiDraw(de._multiDrawStarts,de._multiDrawCounts,de._multiDrawCount);else if(de.isInstancedMesh)lt.renderInstances(ut,bt,de.count);else if(pe.isInstancedBufferGeometry){const tt=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,sr=Math.min(pe.instanceCount,tt);lt.renderInstances(ut,bt,sr)}else lt.render(ut,bt)};function Ge(I,ae,pe){I.transparent===!0&&I.side===on&&I.forceSinglePass===!1?(I.side=Qt,I.needsUpdate=!0,ln(I,ae,pe),I.side=On,I.needsUpdate=!0,ln(I,ae,pe),I.side=on):ln(I,ae,pe)}this.compile=function(I,ae,pe=null){pe===null&&(pe=I),p=he.get(pe),p.init(),S.push(p),pe.traverseVisible(function(de){de.isLight&&de.layers.test(ae.layers)&&(p.pushLight(de),de.castShadow&&p.pushShadow(de))}),I!==pe&&I.traverseVisible(function(de){de.isLight&&de.layers.test(ae.layers)&&(p.pushLight(de),de.castShadow&&p.pushShadow(de))}),p.setupLights(_._useLegacyLights);const me=new Set;return I.traverse(function(de){const Fe=de.material;if(Fe)if(Array.isArray(Fe))for(let ze=0;ze<Fe.length;ze++){const We=Fe[ze];Ge(We,pe,de),me.add(We)}else Ge(Fe,pe,de),me.add(Fe)}),S.pop(),p=null,me},this.compileAsync=function(I,ae,pe=null){const me=this.compile(I,ae,pe);return new Promise(de=>{function Fe(){if(me.forEach(function(ze){W.get(ze).currentProgram.isReady()&&me.delete(ze)}),me.size===0){de(I);return}setTimeout(Fe,10)}C.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Be=null;function Ve(I){Be&&Be(I)}function it(){Ke.stop()}function Xe(){Ke.start()}const Ke=new km;Ke.setAnimationLoop(Ve),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(I){Be=I,ge.setAnimationLoop(I),I===null?Ke.stop():Ke.start()},ge.addEventListener("sessionstart",it),ge.addEventListener("sessionend",Xe),this.render=function(I,ae){if(ae!==void 0&&ae.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ae.parent===null&&ae.matrixWorldAutoUpdate===!0&&ae.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(ae),ae=ge.getCamera()),I.isScene===!0&&I.onBeforeRender(_,I,ae,b),p=he.get(I,S.length),p.init(),S.push(p),se.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),ne.setFromProjectionMatrix(se),X=this.localClippingEnabled,z=xe.init(this.clippingPlanes,X),v=oe.get(I,m.length),v.init(),m.push(v),at(I,ae,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(Z,Y),this.info.render.frame++,z===!0&&xe.beginShadows();const pe=p.state.shadowsArray;if(le.render(pe,I,ae),z===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1)&&Le.render(v,I),p.setupLights(_._useLegacyLights),ae.isArrayCamera){const me=ae.cameras;for(let de=0,Fe=me.length;de<Fe;de++){const ze=me[de];$t(v,I,ze,ze.viewport)}}else $t(v,I,ae);b!==null&&(E.updateMultisampleRenderTarget(b),E.updateRenderTargetMipmap(b)),I.isScene===!0&&I.onAfterRender(_,I,ae),Ue.resetDefaultState(),O=-1,J=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function at(I,ae,pe,me){if(I.visible===!1)return;if(I.layers.test(ae.layers)){if(I.isGroup)pe=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(ae);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||ne.intersectsSprite(I)){me&&ve.setFromMatrixPosition(I.matrixWorld).applyMatrix4(se);const ze=q.update(I),We=I.material;We.visible&&v.push(I,ze,We,pe,ve.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||ne.intersectsObject(I))){const ze=q.update(I),We=I.material;if(me&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),ve.copy(I.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),ve.copy(ze.boundingSphere.center)),ve.applyMatrix4(I.matrixWorld).applyMatrix4(se)),Array.isArray(We)){const we=ze.groups;for(let Je=0,Ze=we.length;Je<Ze;Je++){const je=we[Je],ut=We[je.materialIndex];ut&&ut.visible&&v.push(I,ze,ut,pe,ve.z,je)}}else We.visible&&v.push(I,ze,We,pe,ve.z,null)}}const Fe=I.children;for(let ze=0,We=Fe.length;ze<We;ze++)at(Fe[ze],ae,pe,me)}function $t(I,ae,pe,me){const de=I.opaque,Fe=I.transmissive,ze=I.transparent;p.setupLightsView(pe),z===!0&&xe.setGlobalState(_.clippingPlanes,pe),Fe.length>0&&an(de,Fe,ae,pe),me&&H.viewport(x.copy(me)),de.length>0&&xn(de,ae,pe),Fe.length>0&&xn(Fe,ae,pe),ze.length>0&&xn(ze,ae,pe),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function an(I,ae,pe,me){if((pe.isScene===!0?pe.overrideMaterial:null)!==null)return;const Fe=U.isWebGL2;ce===null&&(ce=new Cr(1,1,{generateMipmaps:!0,type:C.has("EXT_color_buffer_half_float")?go:Xi,minFilter:br,samples:Fe?4:0})),_.getDrawingBufferSize(fe),Fe?ce.setSize(fe.x,fe.y):ce.setSize(tl(fe.x),tl(fe.y));const ze=_.getRenderTarget();_.setRenderTarget(ce),_.getClearColor(V),P=_.getClearAlpha(),P<1&&_.setClearColor(16777215,.5),_.clear();const We=_.toneMapping;_.toneMapping=Wi,xn(I,pe,me),E.updateMultisampleRenderTarget(ce),E.updateRenderTargetMipmap(ce);let we=!1;for(let Je=0,Ze=ae.length;Je<Ze;Je++){const je=ae[Je],ut=je.object,Kt=je.geometry,bt=je.material,cn=je.group;if(bt.side===on&&ut.layers.test(me.layers)){const lt=bt.side;bt.side=Qt,bt.needsUpdate=!0,ri(ut,pe,me,Kt,bt,cn),bt.side=lt,bt.needsUpdate=!0,we=!0}}we===!0&&(E.updateMultisampleRenderTarget(ce),E.updateRenderTargetMipmap(ce)),_.setRenderTarget(ze),_.setClearColor(V,P),_.toneMapping=We}function xn(I,ae,pe){const me=ae.isScene===!0?ae.overrideMaterial:null;for(let de=0,Fe=I.length;de<Fe;de++){const ze=I[de],We=ze.object,we=ze.geometry,Je=me===null?ze.material:me,Ze=ze.group;We.layers.test(pe.layers)&&ri(We,ae,pe,we,Je,Ze)}}function ri(I,ae,pe,me,de,Fe){I.onBeforeRender(_,ae,pe,me,de,Fe),I.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),de.onBeforeRender(_,ae,pe,me,I,Fe),de.transparent===!0&&de.side===on&&de.forceSinglePass===!1?(de.side=Qt,de.needsUpdate=!0,_.renderBufferDirect(pe,ae,me,de,I,Fe),de.side=On,de.needsUpdate=!0,_.renderBufferDirect(pe,ae,me,de,I,Fe),de.side=on):_.renderBufferDirect(pe,ae,me,de,I,Fe),I.onAfterRender(_,ae,pe,me,de,Fe)}function ln(I,ae,pe){ae.isScene!==!0&&(ae=Te);const me=W.get(I),de=p.state.lights,Fe=p.state.shadowsArray,ze=de.state.version,We=re.getParameters(I,de.state,Fe,ae,pe),we=re.getProgramCacheKey(We);let Je=me.programs;me.environment=I.isMeshStandardMaterial?ae.environment:null,me.fog=ae.fog,me.envMap=(I.isMeshStandardMaterial?R:y).get(I.envMap||me.environment),Je===void 0&&(I.addEventListener("dispose",Se),Je=new Map,me.programs=Je);let Ze=Je.get(we);if(Ze!==void 0){if(me.currentProgram===Ze&&me.lightsStateVersion===ze)return si(I,We),Ze}else We.uniforms=re.getUniforms(I),I.onBuild(pe,We,_),I.onBeforeCompile(We,_),Ze=re.acquireProgram(We,we),Je.set(we,Ze),me.uniforms=We.uniforms;const je=me.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(je.clippingPlanes=xe.uniform),si(I,We),me.needsLights=Wf(I),me.lightsStateVersion=ze,me.needsLights&&(je.ambientLightColor.value=de.state.ambient,je.lightProbe.value=de.state.probe,je.directionalLights.value=de.state.directional,je.directionalLightShadows.value=de.state.directionalShadow,je.spotLights.value=de.state.spot,je.spotLightShadows.value=de.state.spotShadow,je.rectAreaLights.value=de.state.rectArea,je.ltc_1.value=de.state.rectAreaLTC1,je.ltc_2.value=de.state.rectAreaLTC2,je.pointLights.value=de.state.point,je.pointLightShadows.value=de.state.pointShadow,je.hemisphereLights.value=de.state.hemi,je.directionalShadowMap.value=de.state.directionalShadowMap,je.directionalShadowMatrix.value=de.state.directionalShadowMatrix,je.spotShadowMap.value=de.state.spotShadowMap,je.spotLightMatrix.value=de.state.spotLightMatrix,je.spotLightMap.value=de.state.spotLightMap,je.pointShadowMap.value=de.state.pointShadowMap,je.pointShadowMatrix.value=de.state.pointShadowMatrix),me.currentProgram=Ze,me.uniformsList=null,Ze}function Bt(I){if(I.uniformsList===null){const ae=I.currentProgram.getUniforms();I.uniformsList=Tl.seqWithValue(ae.seq,I.uniforms)}return I.uniformsList}function si(I,ae){const pe=W.get(I);pe.outputColorSpace=ae.outputColorSpace,pe.batching=ae.batching,pe.instancing=ae.instancing,pe.instancingColor=ae.instancingColor,pe.skinning=ae.skinning,pe.morphTargets=ae.morphTargets,pe.morphNormals=ae.morphNormals,pe.morphColors=ae.morphColors,pe.morphTargetsCount=ae.morphTargetsCount,pe.numClippingPlanes=ae.numClippingPlanes,pe.numIntersection=ae.numClipIntersection,pe.vertexAlphas=ae.vertexAlphas,pe.vertexTangents=ae.vertexTangents,pe.toneMapping=ae.toneMapping}function $l(I,ae,pe,me,de){ae.isScene!==!0&&(ae=Te),E.resetTextureUnits();const Fe=ae.fog,ze=me.isMeshStandardMaterial?ae.environment:null,We=b===null?_.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:_i,we=(me.isMeshStandardMaterial?R:y).get(me.envMap||ze),Je=me.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,Ze=!!pe.attributes.tangent&&(!!me.normalMap||me.anisotropy>0),je=!!pe.morphAttributes.position,ut=!!pe.morphAttributes.normal,Kt=!!pe.morphAttributes.color;let bt=Wi;me.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(bt=_.toneMapping);const cn=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,lt=cn!==void 0?cn.length:0,tt=W.get(me),sr=p.state.lights;if(z===!0&&(X===!0||I!==J)){const Jt=I===J&&me.id===O;xe.setState(me,I,Jt)}let mt=!1;me.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==sr.state.version||tt.outputColorSpace!==We||de.isBatchedMesh&&tt.batching===!1||!de.isBatchedMesh&&tt.batching===!0||de.isInstancedMesh&&tt.instancing===!1||!de.isInstancedMesh&&tt.instancing===!0||de.isSkinnedMesh&&tt.skinning===!1||!de.isSkinnedMesh&&tt.skinning===!0||de.isInstancedMesh&&tt.instancingColor===!0&&de.instanceColor===null||de.isInstancedMesh&&tt.instancingColor===!1&&de.instanceColor!==null||tt.envMap!==we||me.fog===!0&&tt.fog!==Fe||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==xe.numPlanes||tt.numIntersection!==xe.numIntersection)||tt.vertexAlphas!==Je||tt.vertexTangents!==Ze||tt.morphTargets!==je||tt.morphNormals!==ut||tt.morphColors!==Kt||tt.toneMapping!==bt||U.isWebGL2===!0&&tt.morphTargetsCount!==lt)&&(mt=!0):(mt=!0,tt.__version=me.version);let Gn=tt.currentProgram;mt===!0&&(Gn=ln(me,ae,de));let Xo=!1,Hn=!1,Xr=!1;const yt=Gn.getUniforms(),Vn=tt.uniforms;if(H.useProgram(Gn.program)&&(Xo=!0,Hn=!0,Xr=!0),me.id!==O&&(O=me.id,Hn=!0),Xo||J!==I){yt.setValue(B,"projectionMatrix",I.projectionMatrix),yt.setValue(B,"viewMatrix",I.matrixWorldInverse);const Jt=yt.map.cameraPosition;Jt!==void 0&&Jt.setValue(B,ve.setFromMatrixPosition(I.matrixWorld)),U.logarithmicDepthBuffer&&yt.setValue(B,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(me.isMeshPhongMaterial||me.isMeshToonMaterial||me.isMeshLambertMaterial||me.isMeshBasicMaterial||me.isMeshStandardMaterial||me.isShaderMaterial)&&yt.setValue(B,"isOrthographic",I.isOrthographicCamera===!0),J!==I&&(J=I,Hn=!0,Xr=!0)}if(de.isSkinnedMesh){yt.setOptional(B,de,"bindMatrix"),yt.setOptional(B,de,"bindMatrixInverse");const Jt=de.skeleton;Jt&&(U.floatVertexTextures?(Jt.boneTexture===null&&Jt.computeBoneTexture(),yt.setValue(B,"boneTexture",Jt.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}de.isBatchedMesh&&(yt.setOptional(B,de,"batchingTexture"),yt.setValue(B,"batchingTexture",de._matricesTexture,E));const jr=pe.morphAttributes;if((jr.position!==void 0||jr.normal!==void 0||jr.color!==void 0&&U.isWebGL2===!0)&&De.update(de,pe,Gn),(Hn||tt.receiveShadow!==de.receiveShadow)&&(tt.receiveShadow=de.receiveShadow,yt.setValue(B,"receiveShadow",de.receiveShadow)),me.isMeshGouraudMaterial&&me.envMap!==null&&(Vn.envMap.value=we,Vn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),Hn&&(yt.setValue(B,"toneMappingExposure",_.toneMappingExposure),tt.needsLights&&Wo(Vn,Xr),Fe&&me.fog===!0&&ue.refreshFogUniforms(Vn,Fe),ue.refreshMaterialUniforms(Vn,me,te,G,ce),Tl.upload(B,Bt(tt),Vn,E)),me.isShaderMaterial&&me.uniformsNeedUpdate===!0&&(Tl.upload(B,Bt(tt),Vn,E),me.uniformsNeedUpdate=!1),me.isSpriteMaterial&&yt.setValue(B,"center",de.center),yt.setValue(B,"modelViewMatrix",de.modelViewMatrix),yt.setValue(B,"normalMatrix",de.normalMatrix),yt.setValue(B,"modelMatrix",de.matrixWorld),me.isShaderMaterial||me.isRawShaderMaterial){const Jt=me.uniformsGroups;for(let un=0,Xf=Jt.length;un<Xf;un++)if(U.isWebGL2){const Yr=Jt[un];Ne.update(Yr,Gn),Ne.bind(Yr,Gn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gn}function Wo(I,ae){I.ambientLightColor.needsUpdate=ae,I.lightProbe.needsUpdate=ae,I.directionalLights.needsUpdate=ae,I.directionalLightShadows.needsUpdate=ae,I.pointLights.needsUpdate=ae,I.pointLightShadows.needsUpdate=ae,I.spotLights.needsUpdate=ae,I.spotLightShadows.needsUpdate=ae,I.rectAreaLights.needsUpdate=ae,I.hemisphereLights.needsUpdate=ae}function Wf(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(I,ae,pe){W.get(I.texture).__webglTexture=ae,W.get(I.depthTexture).__webglTexture=pe;const me=W.get(I);me.__hasExternalTextures=!0,me.__hasExternalTextures&&(me.__autoAllocateDepthBuffer=pe===void 0,me.__autoAllocateDepthBuffer||C.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),me.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,ae){const pe=W.get(I);pe.__webglFramebuffer=ae,pe.__useDefaultFramebuffer=ae===void 0},this.setRenderTarget=function(I,ae=0,pe=0){b=I,A=ae,T=pe;let me=!0,de=null,Fe=!1,ze=!1;if(I){const we=W.get(I);we.__useDefaultFramebuffer!==void 0?(H.bindFramebuffer(B.FRAMEBUFFER,null),me=!1):we.__webglFramebuffer===void 0?E.setupRenderTarget(I):we.__hasExternalTextures&&E.rebindTextures(I,W.get(I.texture).__webglTexture,W.get(I.depthTexture).__webglTexture);const Je=I.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(ze=!0);const Ze=W.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Ze[ae])?de=Ze[ae][pe]:de=Ze[ae],Fe=!0):U.isWebGL2&&I.samples>0&&E.useMultisampledRTT(I)===!1?de=W.get(I).__webglMultisampledFramebuffer:Array.isArray(Ze)?de=Ze[pe]:de=Ze,x.copy(I.viewport),w.copy(I.scissor),L=I.scissorTest}else x.copy(ee).multiplyScalar(te).floor(),w.copy(F).multiplyScalar(te).floor(),L=Q;if(H.bindFramebuffer(B.FRAMEBUFFER,de)&&U.drawBuffers&&me&&H.drawBuffers(I,de),H.viewport(x),H.scissor(w),H.setScissorTest(L),Fe){const we=W.get(I.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we.__webglTexture,pe)}else if(ze){const we=W.get(I.texture),Je=ae||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,we.__webglTexture,pe||0,Je)}O=-1},this.readRenderTargetPixels=function(I,ae,pe,me,de,Fe,ze){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=W.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&ze!==void 0&&(We=We[ze]),We){H.bindFramebuffer(B.FRAMEBUFFER,We);try{const we=I.texture,Je=we.format,Ze=we.type;if(Je!==bn&&ye.convert(Je)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const je=Ze===go&&(C.has("EXT_color_buffer_half_float")||U.isWebGL2&&C.has("EXT_color_buffer_float"));if(Ze!==Xi&&ye.convert(Ze)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ze===vi&&(U.isWebGL2||C.has("OES_texture_float")||C.has("WEBGL_color_buffer_float")))&&!je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ae>=0&&ae<=I.width-me&&pe>=0&&pe<=I.height-de&&B.readPixels(ae,pe,me,de,ye.convert(Je),ye.convert(Ze),Fe)}finally{const we=b!==null?W.get(b).__webglFramebuffer:null;H.bindFramebuffer(B.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(I,ae,pe=0){const me=Math.pow(2,-pe),de=Math.floor(ae.image.width*me),Fe=Math.floor(ae.image.height*me);E.setTexture2D(ae,0),B.copyTexSubImage2D(B.TEXTURE_2D,pe,0,0,I.x,I.y,de,Fe),H.unbindTexture()},this.copyTextureToTexture=function(I,ae,pe,me=0){const de=ae.image.width,Fe=ae.image.height,ze=ye.convert(pe.format),We=ye.convert(pe.type);E.setTexture2D(pe,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,pe.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,pe.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,pe.unpackAlignment),ae.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,me,I.x,I.y,de,Fe,ze,We,ae.image.data):ae.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,me,I.x,I.y,ae.mipmaps[0].width,ae.mipmaps[0].height,ze,ae.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,me,I.x,I.y,ze,We,ae.image),me===0&&pe.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),H.unbindTexture()},this.copyTextureToTexture3D=function(I,ae,pe,me,de=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Fe=I.max.x-I.min.x+1,ze=I.max.y-I.min.y+1,We=I.max.z-I.min.z+1,we=ye.convert(me.format),Je=ye.convert(me.type);let Ze;if(me.isData3DTexture)E.setTexture3D(me,0),Ze=B.TEXTURE_3D;else if(me.isDataArrayTexture||me.isCompressedArrayTexture)E.setTexture2DArray(me,0),Ze=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,me.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,me.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,me.unpackAlignment);const je=B.getParameter(B.UNPACK_ROW_LENGTH),ut=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Kt=B.getParameter(B.UNPACK_SKIP_PIXELS),bt=B.getParameter(B.UNPACK_SKIP_ROWS),cn=B.getParameter(B.UNPACK_SKIP_IMAGES),lt=pe.isCompressedTexture?pe.mipmaps[de]:pe.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,lt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,lt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,I.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,I.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,I.min.z),pe.isDataTexture||pe.isData3DTexture?B.texSubImage3D(Ze,de,ae.x,ae.y,ae.z,Fe,ze,We,we,Je,lt.data):pe.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Ze,de,ae.x,ae.y,ae.z,Fe,ze,We,we,lt.data)):B.texSubImage3D(Ze,de,ae.x,ae.y,ae.z,Fe,ze,We,we,Je,lt),B.pixelStorei(B.UNPACK_ROW_LENGTH,je),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ut),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Kt),B.pixelStorei(B.UNPACK_SKIP_ROWS,bt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,cn),de===0&&me.generateMipmaps&&B.generateMipmap(Ze),H.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?E.setTextureCube(I,0):I.isData3DTexture?E.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?E.setTexture2DArray(I,0):E.setTexture2D(I,0),H.unbindTexture()},this.resetState=function(){A=0,T=0,b=null,H.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Eu?"display-p3":"srgb",t.unpackColorSpace=ot.workingColorSpace===Ka?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===It?wr:em}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===wr?It:_i}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Sw extends Qu{}Sw.prototype.isWebGL1Renderer=!0;class ef extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class bw extends Ct{constructor(e=null,t=1,i=1,r,s,o,a,l,c=dt,u=dt,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mw extends Qe{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class To extends ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const vg=new $,_g=new $,xg=new gt,tf=new ll,Al=new ys;class Ew extends Ft{constructor(e=new Mt,t=new To){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)vg.fromBufferAttribute(t,r-1),_g.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=vg.distanceTo(_g);e.setAttribute("lineDistance",new vt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Al.copy(i.boundingSphere),Al.applyMatrix4(r),Al.radius+=s,e.ray.intersectsSphere(Al)===!1)return;xg.copy(r).invert(),tf.copy(e.ray).applyMatrix4(xg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new $,u=new $,f=new $,h=new $,d=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){const m=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let _=m,M=S-1;_<M;_+=d){const A=g.getX(_),T=g.getX(_+1);if(c.fromBufferAttribute(p,A),u.fromBufferAttribute(p,T),tf.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(h);O<e.near||O>e.far||t.push({distance:O,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),S=Math.min(p.count,o.start+o.count);for(let _=m,M=S-1;_<M;_+=d){if(c.fromBufferAttribute(p,_),u.fromBufferAttribute(p,_+1),tf.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(h);T<e.near||T>e.far||t.push({distance:T,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const yg=new $,Sg=new $;class nf extends Ew{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)yg.fromBufferAttribute(t,r),Sg.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+yg.distanceTo(Sg);e.setAttribute("lineDistance",new vt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ao extends ei{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bg=new gt,rf=new ll,Cl=new ys,Rl=new $;class sf extends Ft{constructor(e=new Mt,t=new Ao){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Cl.copy(i.boundingSphere),Cl.applyMatrix4(r),Cl.radius+=s,e.ray.intersectsSphere(Cl)===!1)return;bg.copy(r).invert(),rf.copy(e.ray).applyMatrix4(bg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,v=d;g<v;g++){const p=c.getX(g);Rl.fromBufferAttribute(f,p),Mg(Rl,p,l,r,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,v=d;g<v;g++)Rl.fromBufferAttribute(f,g),Mg(Rl,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Mg(n,e,t,i,r,s,o){const a=rf.distanceSqToPoint(n);if(a<t){const l=new $;rf.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Eg extends Ct{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ni{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,d=(o-u)/h;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Ie:new $);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new $,r=[],s=[],o=[],a=new $,l=new gt;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new $)}s[0]=new $,o[0]=new $;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ot(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(Ot(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class of extends ni{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const i=t||new Ie,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ww extends of{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function af(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,d*=u,r(o,a,h,d)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Pl=new $,lf=new af,cf=new af,uf=new af;class Tw extends ni{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new $){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Pl.subVectors(r[0],r[1]).add(r[0]),c=Pl);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Pl.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Pl),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(h),d),p=Math.pow(h.distanceToSquared(u),d);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),lf.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,v,p),cf.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,v,p),uf.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,v,p)}else this.curveType==="catmullrom"&&(lf.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),cf.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),uf.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(lf.calc(l),cf.calc(l),uf.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new $().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function wg(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function Aw(n,e){const t=1-n;return t*t*e}function Cw(n,e){return 2*(1-n)*n*e}function Rw(n,e){return n*n*e}function Co(n,e,t,i){return Aw(n,e)+Cw(n,t)+Rw(n,i)}function Pw(n,e){const t=1-n;return t*t*t*e}function Lw(n,e){const t=1-n;return 3*t*t*n*e}function Uw(n,e){return 3*(1-n)*n*n*e}function Dw(n,e){return n*n*n*e}function Ro(n,e,t,i,r){return Pw(n,e)+Lw(n,t)+Uw(n,i)+Dw(n,r)}class Tg extends ni{constructor(e=new Ie,t=new Ie,i=new Ie,r=new Ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Ie){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ro(e,r.x,s.x,o.x,a.x),Ro(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Iw extends ni{constructor(e=new $,t=new $,i=new $,r=new $){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new $){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ro(e,r.x,s.x,o.x,a.x),Ro(e,r.y,s.y,o.y,a.y),Ro(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ag extends ni{constructor(e=new Ie,t=new Ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ie){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ow extends ni{constructor(e=new $,t=new $){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new $){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new $){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cg extends ni{constructor(e=new Ie,t=new Ie,i=new Ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ie){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Co(e,r.x,s.x,o.x),Co(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fw extends ni{constructor(e=new $,t=new $,i=new $){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new $){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Co(e,r.x,s.x,o.x),Co(e,r.y,s.y,o.y),Co(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rg extends ni{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ie){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(wg(a,l.x,c.x,u.x,f.x),wg(a,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Ie().fromArray(r))}return this}}var Pg=Object.freeze({__proto__:null,ArcCurve:ww,CatmullRomCurve3:Tw,CubicBezierCurve:Tg,CubicBezierCurve3:Iw,EllipseCurve:of,LineCurve:Ag,LineCurve3:Ow,QuadraticBezierCurve:Cg,QuadraticBezierCurve3:Fw,SplineCurve:Rg});class Nw extends ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Pg[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Pg[r.type]().fromJSON(r))}return this}}class ff extends Nw{constructor(e){super(),this.type="Path",this.currentPoint=new Ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Ag(this.currentPoint.clone(),new Ie(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new Cg(this.currentPoint.clone(),new Ie(e,t),new Ie(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new Tg(this.currentPoint.clone(),new Ie(e,t),new Ie(i,r),new Ie(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Rg(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const c=new of(e,t,i,r,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class hf extends ff{constructor(e){super(e),this.uuid=Ar(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new ff().fromJSON(r))}return this}}const Bw={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=Lg(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,f,h,d;if(i&&(s=Vw(n,e,s,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(let g=t;g<r;g+=t)f=n[g],h=n[g+1],f<a&&(a=f),h<l&&(l=h),f>c&&(c=f),h>u&&(u=h);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return Po(s,o,t,a,l,d,0),o}};function Lg(n,e,t,i,r){let s,o;if(r===eT(n,e,t,i)>0)for(s=e;s<t;s+=i)o=Ig(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=Ig(s,n[s],n[s+1],o);return o&&Ll(o,o.next)&&(Uo(o),o=o.next),o}function Fr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ll(t,t.next)||xt(t.prev,t,t.next)===0)){if(Uo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Po(n,e,t,i,r,s,o){if(!n)return;!o&&s&&qw(n,i,r,s);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?zw(n,i,r,s):kw(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Uo(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Gw(Fr(n),e,t),Po(n,e,t,i,r,s,2)):o===2&&Hw(n,e,t,i,r,s):Po(Fr(n),e,t,i,r,s,1);break}}}function kw(n){const e=n.prev,t=n,i=n.next;if(xt(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,f=a<l?a<c?a:c:l<c?l:c,h=r>s?r>o?r:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=d&&Bs(r,a,s,l,o,c,g.x,g.y)&&xt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function zw(n,e,t,i){const r=n.prev,s=n,o=n.next;if(xt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,f=s.y,h=o.y,d=a<l?a<c?a:c:l<c?l:c,g=u<f?u<h?u:h:f<h?f:h,v=a>l?a>c?a:c:l>c?l:c,p=u>f?u>h?u:h:f>h?f:h,m=df(d,g,e,t,i),S=df(v,p,e,t,i);let _=n.prevZ,M=n.nextZ;for(;_&&_.z>=m&&M&&M.z<=S;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=p&&_!==r&&_!==o&&Bs(a,u,l,f,c,h,_.x,_.y)&&xt(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=d&&M.x<=v&&M.y>=g&&M.y<=p&&M!==r&&M!==o&&Bs(a,u,l,f,c,h,M.x,M.y)&&xt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=m;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=p&&_!==r&&_!==o&&Bs(a,u,l,f,c,h,_.x,_.y)&&xt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=S;){if(M.x>=d&&M.x<=v&&M.y>=g&&M.y<=p&&M!==r&&M!==o&&Bs(a,u,l,f,c,h,M.x,M.y)&&xt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Gw(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!Ll(r,s)&&Ug(r,i,i.next,s)&&Lo(r,s)&&Lo(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),Uo(i),Uo(i.next),i=n=s),i=i.next}while(i!==n);return Fr(i)}function Hw(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Jw(o,a)){let l=Dg(o,a);o=Fr(o,o.next),l=Fr(l,l.next),Po(o,e,t,i,r,s,0),Po(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function Vw(n,e,t,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=Lg(n,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(Kw(c));for(r.sort(Ww),s=0;s<r.length;s++)t=Xw(r[s],t);return t}function Ww(n,e){return n.x-e.x}function Xw(n,e){const t=jw(n,e);if(!t)return e;const i=Dg(t,n);return Fr(i,i.next),Fr(t,t.next)}function jw(n,e){let t=e,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const h=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=s&&h>i&&(i=h,r=t.x<t.next.x?t:t.next,h===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,f;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&Bs(o<c?s:i,o,l,c,o<c?i:s,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(s-t.x),Lo(t,n)&&(f<u||f===u&&(t.x>r.x||t.x===r.x&&Yw(r,t)))&&(r=t,u=f)),t=t.next;while(t!==a);return r}function Yw(n,e){return xt(n.prev,n,e.prev)<0&&xt(e.next,n,n.next)<0}function qw(n,e,t,i){let r=n;do r.z===0&&(r.z=df(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,$w(r)}function $w(n){let e,t,i,r,s,o,a,l,c=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,c*=2}while(o>1);return n}function df(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Kw(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Bs(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function Jw(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Zw(n,e)&&(Lo(n,e)&&Lo(e,n)&&Qw(n,e)&&(xt(n.prev,n,e.prev)||xt(n,e.prev,e))||Ll(n,e)&&xt(n.prev,n,n.next)>0&&xt(e.prev,e,e.next)>0)}function xt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ll(n,e){return n.x===e.x&&n.y===e.y}function Ug(n,e,t,i){const r=Dl(xt(n,e,t)),s=Dl(xt(n,e,i)),o=Dl(xt(t,i,n)),a=Dl(xt(t,i,e));return!!(r!==s&&o!==a||r===0&&Ul(n,t,e)||s===0&&Ul(n,i,e)||o===0&&Ul(t,n,i)||a===0&&Ul(t,e,i))}function Ul(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Dl(n){return n>0?1:n<0?-1:0}function Zw(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Ug(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Lo(n,e){return xt(n.prev,n,n.next)<0?xt(n,e,n.next)>=0&&xt(n,n.prev,e)>=0:xt(n,e,n.prev)<0||xt(n,n.next,e)<0}function Qw(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Dg(n,e){const t=new pf(n.i,n.x,n.y),i=new pf(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Ig(n,e,t,i){const r=new pf(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Uo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function pf(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function eT(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class mf{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return mf.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Og(e),Fg(i,e);let o=e.length;t.forEach(Og);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Fg(i,t[l]);const a=Bw.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Og(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Fg(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class gf extends Mt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new $,h=new $,d=[],g=[],v=[],p=[];for(let m=0;m<=i;m++){const S=[],_=m/i;let M=0;m===0&&o===0?M=.5/t:m===i&&l===Math.PI&&(M=-.5/t);for(let A=0;A<=t;A++){const T=A/t;f.x=-e*Math.cos(r+T*s)*Math.sin(o+_*a),f.y=e*Math.cos(o+_*a),f.z=e*Math.sin(r+T*s)*Math.sin(o+_*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),p.push(T+M,1-_),S.push(c++)}u.push(S)}for(let m=0;m<i;m++)for(let S=0;S<t;S++){const _=u[m][S+1],M=u[m][S],A=u[m+1][S],T=u[m+1][S+1];(m!==0||o>0)&&d.push(_,M,T),(m!==i-1||l<Math.PI)&&d.push(M,A,T)}this.setIndex(d),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(v,3)),this.setAttribute("uv",new vt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ng extends wi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Bg extends ei{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new $e(16777215),this.specular=new $e(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nm,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=du,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Il={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class tT{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const kg=new tT;class Nr{constructor(e){this.manager=e!==void 0?e:kg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Nr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ti={};class nT extends Error{constructor(e,t){super(e),this.response=t}}class vf extends Nr{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Il.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ti[e]!==void 0){Ti[e].push({onLoad:t,onProgress:i,onError:r});return}Ti[e]=[],Ti[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ti[e],f=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=h?parseInt(h):0,g=d!==0;let v=0;const p=new ReadableStream({start(m){S();function S(){f.read().then(({done:_,value:M})=>{if(_)m.close();else{v+=M.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:d});for(let T=0,b=u.length;T<b;T++){const O=u[T];O.onProgress&&O.onProgress(A)}m.enqueue(M),S()}})}}});return new Response(p)}else throw new nT(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Il.add(e,c);const u=Ti[e];delete Ti[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Ti[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ti[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class iT extends Nr{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Il.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=yo("img");function l(){u(),Il.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class rT extends Nr{constructor(e){super(e)}load(e,t,i,r){const s=new Ct,o=new iT(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class zg extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class sT extends zg{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}class oT extends zg{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class aT{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class lT extends Mt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Gg{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ot(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class cT extends nf{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Mt;r.setAttribute("position",new vt(t,3)),r.setAttribute("color",new vt(i,3));const s=new To({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new $e,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class uT{constructor(){this.type="ShapePath",this.color=new $e,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new ff,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,o){return this.currentPath.bezierCurveTo(e,t,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(m){const S=[];for(let _=0,M=m.length;_<M;_++){const A=m[_],T=new hf;T.curves=A.curves,S.push(T)}return S}function i(m,S){const _=S.length;let M=!1;for(let A=_-1,T=0;T<_;A=T++){let b=S[A],O=S[T],J=O.x-b.x,x=O.y-b.y;if(Math.abs(x)>Number.EPSILON){if(x<0&&(b=S[T],J=-J,O=S[A],x=-x),m.y<b.y||m.y>O.y)continue;if(m.y===b.y){if(m.x===b.x)return!0}else{const w=x*(m.x-b.x)-J*(m.y-b.y);if(w===0)return!0;if(w<0)continue;M=!M}}else{if(m.y!==b.y)continue;if(O.x<=m.x&&m.x<=b.x||b.x<=m.x&&m.x<=O.x)return!0}}return M}const r=mf.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new hf,l.curves=a.curves,c.push(l),c;let u=!r(s[0].getPoints());u=e?!u:u;const f=[],h=[];let d=[],g=0,v;h[g]=void 0,d[g]=[];for(let m=0,S=s.length;m<S;m++)a=s[m],v=a.getPoints(),o=r(v),o=e?!o:o,o?(!u&&h[g]&&g++,h[g]={s:new hf,p:v},h[g].s.curves=a.curves,u&&g++,d[g]=[]):d[g].push({h:a,p:v[0]});if(!h[0])return t(s);if(h.length>1){let m=!1,S=0;for(let _=0,M=h.length;_<M;_++)f[_]=[];for(let _=0,M=h.length;_<M;_++){const A=d[_];for(let T=0;T<A.length;T++){const b=A[T];let O=!0;for(let J=0;J<h.length;J++)i(b.p,h[J].p)&&(_!==J&&S++,O?(O=!1,f[J].push(b)):m=!0);O&&f[_].push(b)}}S>0&&m===!1&&(d=f)}let p;for(let m=0,S=h.length;m<S;m++){l=h[m].s,c.push(l),p=d[m];for(let _=0,M=p.length;_<M;_++)l.holes.push(p[_].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uu}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uu);class fT{static isWebGLAvailable(){try{const e=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(e.getContext("webgl")||e.getContext("experimental-webgl")))}catch{return!1}}static isWebGL2Available(){try{const e=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&e.getContext("webgl2"))}catch{return!1}}static isColorSpaceAvailable(e){try{const t=document.createElement("canvas"),i=window.WebGL2RenderingContext&&t.getContext("webgl2");return i.drawingBufferColorSpace=e,i.drawingBufferColorSpace===e}catch{return!1}}static getWebGLErrorMessage(){return this.getErrorMessage(1)}static getWebGL2ErrorMessage(){return this.getErrorMessage(2)}static getErrorMessage(e){const t={1:"WebGL",2:"WebGL 2"},i={1:window.WebGLRenderingContext,2:window.WebGL2RenderingContext};let r='Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>';const s=document.createElement("div");return s.id="webglmessage",s.style.fontFamily="monospace",s.style.fontSize="13px",s.style.fontWeight="normal",s.style.textAlign="center",s.style.background="#fff",s.style.color="#000",s.style.padding="1.5em",s.style.width="400px",s.style.margin="5em auto 0",i[e]?r=r.replace("$0","graphics card"):r=r.replace("$0","browser"),r=r.replace("$1",t[e]),s.innerHTML=r,s}}const Hg=fT;function _f(){const n=ht(Hg.isWebGLAvailable()),e=ht(Hg.getWebGLErrorMessage());return{webGLAvailable:n,webGLWarning:e}}const Ai=cu("world",{state:()=>({isReady:!1,cameraFollowsEntity:!0,playerEntityLocation:{x:0,y:0,z:0,blockX:0,blockY:0,blockZ:0},nearbyEntities:[],blocks:[],chunks:new Set,lastChatMessage:null}),actions:{toggleCameraFollowsEntity(){this.cameraFollowsEntity=!this.cameraFollowsEntity},setBlocks(n){},setEntityLocation(n){this.playerEntityLocation=n,this.isReady=!0},setNearbyEntities(n){this.nearbyEntities=n},setChunk(n,e){this.blocks=e},addChunk(n){this.chunks.add(`${n.x},${n.y},${n.z}`)},checkChunk(n){return this.chunks.has(`${n.x},${n.y},${n.z}`)},addChatMessage(n,e){this.lastChatMessage={uuid:n,message:e,timestamp:Date.now()}}}}),nn={width:32,height:32,count:0,x:32,y:32};let Br,Ol;const Vg=ht(0),xf=ht(0);function Do(){function n(){const a=document.createElement("canvas");a.width=nn.x*nn.width*2,a.height=nn.y*nn.height*2;const l=a.getContext("2d");if(!l)throw"Could not initialize 2d context for atlas drawing.";l.clearRect(0,0,a.width,a.height);const c=new Eg(a);c.flipY=!1,c.magFilter=dt,c.minFilter=dt,c.generateMipmaps=!1,Br=l,Ol=c}function e(){Ol.dispose()}async function t(a){return Vg.value+=1,new Promise((l,c)=>{const u=new Image;u.src=a,u.addEventListener("load",()=>{const f=nn.width,h=nn.height,d=f/2,g=h/2,v=f*2,p=h*2;let m=u.width,S=u.height;m!=S&&(m=Math.min(m,S),S=m);const _=document.createElement("canvas");_.width=m,_.height=S;const M=_.getContext("2d");if(!M)throw"Could not initialize 2d context for atlas drawing.";const A=nn.count+1,T=Math.ceil(Math.log(Math.max(32,Math.max(m,S))/32)*Math.LOG2E),b=(w,L,V,P)=>{const j=nn.count+1,G=j%nn.x,te=Math.floor(j/nn.x);Br.imageSmoothingEnabled=!1,M.clearRect(0,0,m,S),M.drawImage(u,0,0),Br.drawImage(_,w,L,V,P,G*v+d,te*p+g,f,h),M.clearRect(0,0,m,S),M.save(),M.scale(1,-1),M.drawImage(u,0,0,m,-S),M.restore(),Br.drawImage(_,w,S-L-P/2,V,P/2,G*v+d,te*p,f,g),Br.drawImage(_,w,S-L-P,V,P/2,G*v+d,te*p+h+g,f,g),M.clearRect(0,0,m,S),M.save(),M.scale(-1,1),M.drawImage(u,0,0,-m,S),M.restore(),Br.drawImage(_,m-w-V/2,L,V/2,P,G*v,te*p+g,d,h),Br.drawImage(_,m-w-V,L,V/2,P,G*v+f+d,te*p+g,d,h),++nn.count},O=Math.pow(2,T),J=m/O,x=S/O;for(let w=0,L=0;w<O;++w,L+=x)for(let V=0,P=0;V<O;++V,P+=J)b(P,L,J,x);Ol.needsUpdate=!0,l({index:A,sizeFactor:T}),xf.value+=1},!1),u.addEventListener("error",f=>{c(`The file at "${a}" is not accessible: ${f}`),xf.value+=1},!1)})}const i=nn.x,r=nn.y,s=nn.x*nn.y;return{init:n,dispose:e,loadTexture:t,x:i,y:r,maxTexCount:s,texture:Ol,count:Vg,loadedCount:xf}}let yf;function Sf(){function n(){const s=new Uint8Array(1024);for(let a=0;a<4*256;a+=4){const l=6*a/768,c=1-Math.max(Math.min(Math.exp(-1e-7*Math.pow(l,10)),1),0);s[a]=s[a+1]=s[a+2]=255*c,s[a+3]=255}const o=new bw(s,256,1,bn);o.needsUpdate=!0,yf=o}function e(){yf.dispose()}return{init:n,dispose:e,texture:yf}}function ks(){const n={position:{type:Float32Array,size:3},normal:{type:Float32Array,size:3},uv:{type:Float32Array,size:2},offset:{type:Float32Array,size:3},color:{type:Float32Array,size:4},tintColor:{type:Float32Array,size:3},textureId:{type:Uint16Array,size:1}},e=["position","normal","uv","offset","color","tintColor","textureId"],t=["position","normal","uv","offset","color"];function i(u,f,h){const d=new Mt;return u.forEach(g=>{const v=n[g].type,p=n[g].size,m=new v(p*f);d.setAttribute(g,new Qe(m,p)),h&&h[g]&&m.set(h[g])}),d}function r(u,f){const h=new Mt;u=u||1,f=f||1;const d=u/2,g=f/2,v=Math.floor(1)||1,p=Math.floor(1)||1,m=v+1,S=p+1,_=u/v,M=f/p;let A,T;const b=[],O=[],J=[],x=[];for(T=0;T<S;T++){const w=T*M-g;for(A=0;A<m;A++){const L=A*_-d;O.push(L,-w,0),J.push(0,0,1),x.push(A/v),x.push(1-T/p)}}for(T=0;T<p;T++)for(A=0;A<v;A++){const w=A+m*T,L=A+m*(T+1),V=A+1+m*(T+1),P=A+1+m*T;b.push(w,L,P),b.push(L,V,P)}return h.setIndex(b),l(h,"position",new vt(O,3)),l(h,"normal",new vt(J,3)),l(h,"uv",new vt(x,2)),h}function s(u,f){for(const h in f){const d=n[h].type,g=n[h].size,v=new d(f[h].buffer);u.setAttribute(h,new Qe(v,g))}return u}function o(u,f){const h={attributes:{},vertexCount:u.vertex,indexCount:u.index};for(const d in f){const g=n[d].type,v=n[d].size;h.attributes[d]=new g(f[d].array.buffer,0,v*u.vertex)}return h}function a(u,f,h){if(!(f&&f.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",f);return}h===void 0&&(h=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const d=u.attributes;for(const g in d){if(f.attributes[g]===void 0)continue;const p=d[g].array,m=f.attributes[g],S=m.array,_=m.itemSize;for(let M=0,A=_*h;M<S.length;M++,A++)p[A]=S[M]}return u}function l(u,f,h){return f==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),u.setIndex(h),u):(u.attributes[f]=h,u)}function c(u,f,h,d){for(const g in f)if(g in u.attributes){const v=u.attributes[g];v.array.set(f[g]),h&&(v.needsUpdate=!0)}d!=-1&&u.setDrawRange(0,d)}return{createGeometry:i,createPlane:r,setAttributeBuffers:s,getAttributes:o,attributesBlockTextured:e,attributesBlock:t,mergeGeometries:a,addAttribute:l,setGeometryAttributes:c}}const hT=`precision highp float;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform vec3 centerPosition;

attribute vec3 position;
attribute vec3 normal;
attribute vec3 offset;
attribute vec2 uv;
attribute vec4 color;
attribute vec3 tintColor;
attribute float textureId;

varying vec3 vViewPos;
varying vec3 vNormal;
varying vec2 vUv;
varying vec4 vColor;
varying vec3 vTintColor;
varying float vTextureId;
varying float vCenterDistance;

void main() {
    vec3 offsetPos = offset + position;
    vec4 camCoordPos = modelViewMatrix * vec4( offsetPos, 1.0 );
    vNormal = normalize( ( modelViewMatrix * vec4( normal, 0.0 ) ).xyz );
    vUv = uv;
    vColor = color;
    vTintColor = tintColor;
    vTextureId = textureId;
    vViewPos = camCoordPos.xyz;
    vCenterDistance = distance(offsetPos, centerPosition);
    gl_Position = projectionMatrix * camCoordPos;
}
`,dT=`precision highp float;

#define LOG2 1.442695

struct DirectionalLight {
    vec3 direction;
    vec3 color;
};
uniform DirectionalLight light0;

uniform mat4 modelViewMatrix;

uniform vec3 fogColor;
uniform float fogCutoffDistance;
uniform vec3 ambientLightColor;
uniform mat3 normalMatrix;

uniform sampler2D map;
uniform sampler2D fogFactorLookupMap;
uniform vec2 uTexAtlasSize;

varying vec3 vViewPos;
varying vec3 vNormal;
varying vec2 vUv;
varying vec4 vColor;
varying vec3 vTintColor;
varying float vTextureId;
varying float vCenterDistance;

vec4 computeLighting() {
    vec4 ambient = vec4( 0.6, 0.6, 0.6, 1.0 );
    vec3 lightDir = normalize( modelViewMatrix * vec4( normalize( light0.direction ), 0.0 ) ).xyz;
    float intensity = max( dot( vNormal, lightDir ), 0.0 );
    return vec4( ambient.rgb + intensity * light0.color, 1.0 );
}

float round(float value) {
    return floor(value + 0.5);
}

vec4 texAtlasColor(float texInfo, vec2 uv, vec2 atlasSize) {
    float texSizeExp = floor( texInfo / 1024.0 );
    float texId = texInfo - texSizeExp * 1024.0;
    float texSizeFactor = exp2( texSizeExp );
    float uvStep = 1.0 / texSizeFactor;

    // Handle 64x64 textures as four 32x32 tiles.
    if ( texSizeExp == 1.0 ) {
        for ( int i = 0; i < 1; ++i ) {
            if ( uv.x >= uvStep ) {
                uv.x -= uvStep;
                texId += 1.0;
            }
            if ( uv.y >= uvStep ) {
                uv.y -= uvStep;
                texId += texSizeFactor;
            }
        }
    }

    // Fixes artifacts on rendering left-most textures in mobile Safari.
    texId = round( texId );

    float xCoord = mod( texId, atlasSize.x );
    float yCoord = floor( texId / atlasSize.x );
    vec2 uvOffset = vec2( xCoord, yCoord ) + 0.25;
    vec2 uvScaled = uv * 0.5 * texSizeFactor;
    vec2 uvPos = ( uvOffset + uvScaled ) / atlasSize;
    return texture2D( map, uvPos );
}

vec4 applyFog(vec4 color) {
    float t = vCenterDistance / fogCutoffDistance;
    float fogFactorFromTex = texture2D( fogFactorLookupMap, vec2( t , 0.5 ) ).r;
    vec3 mixed = mix( color.rgb, fogColor, fogFactorFromTex );
    return vec4(mixed, color.a);
}

void main() {
    vec4 blockColor = vColor / 255.0;
    vec3 tintColor = vTintColor / 255.0;
    vec4 texColor = texAtlasColor(vTextureId, vUv, uTexAtlasSize);
    vec4 lightColor = computeLighting();

    bool useTexture = vTextureId > 0.0;
    bool useTint = length( vTintColor ) > 0.0;
    bool shouldDiscard = useTexture && texColor.a == 0.0;
    bool shade = true;
    
    float options = vColor.a;
    if ( options > 0.5 && options < 1.5 ) shade = false;
    
    vec4 outColor = blockColor;

    if (shouldDiscard) discard;
    if (useTexture) outColor = texColor;
    if (useTint) outColor = vec4( outColor.rgb * tintColor, outColor.a );
    if (shade) outColor *= lightColor;
    outColor = applyFog(outColor);

    gl_FragColor = outColor;
}
`;function bf(){function n(e,t){const i=(c,u)=>{const f=(c>>16&255)*u<<16,h=(c>>8&255)*u<<8,d=(c&255)*u;return f|h|d},{x:r,y:s,texture:o}=Do(),{texture:a}=Sf(),l=new Ng({uniforms:{map:{value:o},fogFactorLookupMap:{value:a},uTexAtlasSize:{value:new Ie(r,s)},light0:{value:{direction:new $(1,2,-.5),color:new $e(i(16776176,.5))}},fogColor:{value:new $e("rgb(181, 209, 255)")},fogCutoffDistance:{value:(e==null?void 0:e.fogCutoffDistance)??16},centerPosition:{value:new $}},vertexShader:hT,fragmentShader:dT,side:On});return Object.assign(l,t??{}),l}return{getMaterial:n}}function Io(){function n(t){if(t.geometry&&t.geometry.dispose(),Array.isArray(t.material))for(const i of t.material)i.dispose();else t.material instanceof ei&&t.material.dispose()}function e(t){for(const i of t.children)i instanceof Et&&n(i)}return{disposeMesh:n,disposeObject:e}}const pT=`precision highp float;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

attribute vec3 position;
attribute vec3 offset;
attribute vec4 color;

varying vec4 vColor;

void main(){
    vColor = color;
    vec3 offsetPos = offset + position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( offsetPos, 1.0 );
}
`,mT=`precision highp float;

varying vec4 vColor;

void main() {
    gl_FragColor = vec4( vColor.rgb / 255.0, 1.0 );
}
`,Oo=new Ns,zn={};function Mf(){function n(l,c,u){return zn.model=e(884736,221184,1e5),Oo.add(zn.model),zn.wireframe=i(884736,221184),Oo.add(zn.wireframe),zn.liquid=r(884736,221184),Oo.add(zn.liquid),zn.translucent=t(884736,221184),Oo.add(zn.translucent),Oo}function e(l,c,u){const{addAttribute:f}=ks(),{getMaterial:h}=bf(),d=h({fogCutoffDistance:u}),g=new Mt;f(g,"position",new Qe(new Float32Array(3*l),3)),f(g,"normal",new Qe(new Float32Array(3*l),3)),f(g,"uv",new Qe(new Float32Array(2*l),2)),f(g,"offset",new Qe(new Float32Array(3*l),3)),f(g,"color",new Qe(new Float32Array(4*l),4)),f(g,"tintColor",new Qe(new Float32Array(3*l),3)),f(g,"textureId",new Qe(new Uint16Array(l),1));const v=new Uint32Array(6*c);for(let m=0,S=0;m<6*c;m+=6,S+=4)v[m]=S,v[m+1]=S+2,v[m+2]=S+1,v[m+3]=S+3,v[m+4]=S+1,v[m+5]=S+2;g.setIndex(new Qe(v,1));const p=new Et(g,d);return p.frustumCulled=!1,p.renderOrder=2,p}function t(l,c){const{addAttribute:u}=ks(),{getMaterial:f}=bf(),h=f({},{transparent:!0,depthWrite:!1}),d=new Mt;u(d,"position",new Qe(new Float32Array(3*l),3)),u(d,"normal",new Qe(new Float32Array(3*l),3)),u(d,"uv",new Qe(new Float32Array(2*l),2)),u(d,"offset",new Qe(new Float32Array(3*l),3)),u(d,"color",new Qe(new Float32Array(4*l),4)),u(d,"tintColor",new Qe(new Float32Array(3*l),3)),u(d,"textureId",new Qe(new Uint16Array(l),1));const g=new Uint32Array(6*c);for(let p=0,m=0;p<6*c;p+=6,m+=4)g[p]=m,g[p+1]=m+2,g[p+2]=m+1,g[p+3]=m+3,g[p+4]=m+1,g[p+5]=m+2;d.setIndex(new Qe(g,1));const v=new Et(d,h);return v.frustumCulled=!1,v.renderOrder=5,v}function i(l,c){const{addAttribute:u}=ks(),f=new Ng({vertexShader:pT,fragmentShader:mT,wireframe:!0}),h=new Mt;u(h,"position",new Qe(new Float32Array(3*l),3)),u(h,"normal",new Qe(new Float32Array(3*l),3)),u(h,"uv",new Qe(new Float32Array(2*l),2)),u(h,"offset",new Qe(new Float32Array(3*l),3)),u(h,"color",new Qe(new Float32Array(4*l),4));const d=new Uint32Array(6*c);for(let v=0,p=0;v<6*c;v+=6,p+=4)d[v]=p,d[v+1]=p+1,d[v+2]=p+2,d[v+3]=p+2,d[v+4]=p+1,d[v+5]=p+3;h.setIndex(new Qe(d,1));const g=new Et(h,f);return g.frustumCulled=!1,g.renderOrder=3,g}function r(l,c){const{addAttribute:u}=ks(),{getMaterial:f}=bf(),h=f({},{side:on,transparent:!0,depthWrite:!1}),d=new Mt;u(d,"position",new Qe(new Float32Array(3*l),3)),u(d,"normal",new Qe(new Float32Array(3*l),3)),u(d,"uv",new Qe(new Float32Array(2*l),2)),u(d,"offset",new Qe(new Float32Array(3*l),3)),u(d,"color",new Qe(new Float32Array(4*l),4));const g=new Uint32Array(6*c);for(let p=0,m=0;p<6*c;p+=6,m+=4)g[p]=m,g[p+1]=m+2,g[p+2]=m+1,g[p+3]=m+3,g[p+4]=m+1,g[p+5]=m+2;d.setIndex(new Qe(g,1));const v=new Et(d,h);return v.frustumCulled=!1,v.renderOrder=4,v}function s(){const{disposeMesh:l}=Io();l(zn.model)}function o(l){const{setGeometryAttributes:c}=ks();console.time("[Profile] [Main] Setting worker geometry");for(const u in l){const f=l[u];c(zn[u].geometry,f.attributes,f.vertexCount,f.indexCount)}console.timeEnd("[Profile] [Main] Setting worker geometry")}function a(l){Object.values(zn).map(c=>c.material).filter(c=>c.uniforms.centerPosition).map(c=>c.uniforms.centerPosition.value).forEach(c=>c.set(l.x,l.y,l.z))}return{init:n,dispose:s,updateGeometries:o,updatePosUniform:a}}let Fo;function gT(){function n(){const i=new gf(.5,8,8),r=new ws({color:16776960,wireframe:!0});return Fo=new Et(i,r),Fo}function e(i){Fo.position.set(i.x-.5,i.y,i.z-.5),Fo.matrixWorldNeedsUpdate=!0}function t(){const{disposeMesh:i}=Io();i(Fo)}return{createMesh:n,updatePos:e,dispose:t}}const Wg={type:"change"},Ef={type:"start"},Xg={type:"end"},Fl=new ll,jg=new Qi,vT=Math.cos(70*$S.DEG2RAD);class _T extends Tr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ss.ROTATE,MIDDLE:ss.DOLLY,RIGHT:ss.PAN},this.touches={ONE:os.ROTATE,TWO:os.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(k){k.addEventListener("keydown",he),this._domElementKeyEvents=k},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",he),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Wg),i.update(),s=r.NONE},this.update=function(){const k=new $,ge=new Zn().setFromUnitVectors(e.up,new $(0,1,0)),be=ge.clone().invert(),D=new $,Me=new Zn,Se=new $,Ee=2*Math.PI;return function(Ge=null){const Be=i.object.position;k.copy(Be).sub(i.target),k.applyQuaternion(ge),a.setFromVector3(k),i.autoRotate&&s===r.NONE&&L(x(Ge)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ve=i.minAzimuthAngle,it=i.maxAzimuthAngle;isFinite(Ve)&&isFinite(it)&&(Ve<-Math.PI?Ve+=Ee:Ve>Math.PI&&(Ve-=Ee),it<-Math.PI?it+=Ee:it>Math.PI&&(it-=Ee),Ve<=it?a.theta=Math.max(Ve,Math.min(it,a.theta)):a.theta=a.theta>(Ve+it)/2?Math.max(Ve,a.theta):Math.min(it,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Xe=!1;if(i.zoomToCursor&&T||i.object.isOrthographicCamera)a.radius=ee(a.radius);else{const Ke=a.radius;a.radius=ee(a.radius*c),Xe=Ke!=a.radius}if(k.setFromSpherical(a),k.applyQuaternion(be),Be.copy(i.target).add(k),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&T){let Ke=null;if(i.object.isPerspectiveCamera){const at=k.length();Ke=ee(at*c);const $t=at-Ke;i.object.position.addScaledVector(M,$t),i.object.updateMatrixWorld(),Xe=!!$t}else if(i.object.isOrthographicCamera){const at=new $(A.x,A.y,0);at.unproject(i.object);const $t=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Xe=$t!==i.object.zoom;const an=new $(A.x,A.y,0);an.unproject(i.object),i.object.position.sub(an).add(at),i.object.updateMatrixWorld(),Ke=k.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Ke!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Ke).add(i.object.position):(Fl.origin.copy(i.object.position),Fl.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Fl.direction))<vT?e.lookAt(i.target):(jg.setFromNormalAndCoplanarPoint(i.object.up,i.target),Fl.intersectPlane(jg,i.target))))}else if(i.object.isOrthographicCamera){const Ke=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),Ke!==i.object.zoom&&(i.object.updateProjectionMatrix(),Xe=!0)}return c=1,T=!1,Xe||D.distanceToSquared(i.object.position)>o||8*(1-Me.dot(i.object.quaternion))>o||Se.distanceToSquared(i.target)>o?(i.dispatchEvent(Wg),D.copy(i.object.position),Me.copy(i.object.quaternion),Se.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Le),i.domElement.removeEventListener("pointerdown",E),i.domElement.removeEventListener("pointercancel",R),i.domElement.removeEventListener("wheel",q),i.domElement.removeEventListener("pointermove",y),i.domElement.removeEventListener("pointerup",R),i.domElement.getRootNode().removeEventListener("keydown",ue,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",he),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Gg,l=new Gg;let c=1;const u=new $,f=new Ie,h=new Ie,d=new Ie,g=new Ie,v=new Ie,p=new Ie,m=new Ie,S=new Ie,_=new Ie,M=new $,A=new Ie;let T=!1;const b=[],O={};let J=!1;function x(k){return k!==null?2*Math.PI/60*i.autoRotateSpeed*k:2*Math.PI/60/60*i.autoRotateSpeed}function w(k){const ge=Math.abs(k*.01);return Math.pow(.95,i.zoomSpeed*ge)}function L(k){l.theta-=k}function V(k){l.phi-=k}const P=function(){const k=new $;return function(be,D){k.setFromMatrixColumn(D,0),k.multiplyScalar(-be),u.add(k)}}(),j=function(){const k=new $;return function(be,D){i.screenSpacePanning===!0?k.setFromMatrixColumn(D,1):(k.setFromMatrixColumn(D,0),k.crossVectors(i.object.up,k)),k.multiplyScalar(be),u.add(k)}}(),G=function(){const k=new $;return function(be,D){const Me=i.domElement;if(i.object.isPerspectiveCamera){const Se=i.object.position;k.copy(Se).sub(i.target);let Ee=k.length();Ee*=Math.tan(i.object.fov/2*Math.PI/180),P(2*be*Ee/Me.clientHeight,i.object.matrix),j(2*D*Ee/Me.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(P(be*(i.object.right-i.object.left)/i.object.zoom/Me.clientWidth,i.object.matrix),j(D*(i.object.top-i.object.bottom)/i.object.zoom/Me.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function te(k){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=k:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Z(k){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=k:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Y(k,ge){if(!i.zoomToCursor)return;T=!0;const be=i.domElement.getBoundingClientRect(),D=k-be.left,Me=ge-be.top,Se=be.width,Ee=be.height;A.x=D/Se*2-1,A.y=-(Me/Ee)*2+1,M.set(A.x,A.y,1).unproject(i.object).sub(i.object.position).normalize()}function ee(k){return Math.max(i.minDistance,Math.min(i.maxDistance,k))}function F(k){f.set(k.clientX,k.clientY)}function Q(k){Y(k.clientX,k.clientX),m.set(k.clientX,k.clientY)}function ne(k){g.set(k.clientX,k.clientY)}function z(k){h.set(k.clientX,k.clientY),d.subVectors(h,f).multiplyScalar(i.rotateSpeed);const ge=i.domElement;L(2*Math.PI*d.x/ge.clientHeight),V(2*Math.PI*d.y/ge.clientHeight),f.copy(h),i.update()}function X(k){S.set(k.clientX,k.clientY),_.subVectors(S,m),_.y>0?te(w(_.y)):_.y<0&&Z(w(_.y)),m.copy(S),i.update()}function ce(k){v.set(k.clientX,k.clientY),p.subVectors(v,g).multiplyScalar(i.panSpeed),G(p.x,p.y),g.copy(v),i.update()}function se(k){Y(k.clientX,k.clientY),k.deltaY<0?Z(w(k.deltaY)):k.deltaY>0&&te(w(k.deltaY)),i.update()}function fe(k){let ge=!1;switch(k.code){case i.keys.UP:k.ctrlKey||k.metaKey||k.shiftKey?V(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,i.keyPanSpeed),ge=!0;break;case i.keys.BOTTOM:k.ctrlKey||k.metaKey||k.shiftKey?V(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,-i.keyPanSpeed),ge=!0;break;case i.keys.LEFT:k.ctrlKey||k.metaKey||k.shiftKey?L(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(i.keyPanSpeed,0),ge=!0;break;case i.keys.RIGHT:k.ctrlKey||k.metaKey||k.shiftKey?L(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(-i.keyPanSpeed,0),ge=!0;break}ge&&(k.preventDefault(),i.update())}function ve(k){if(b.length===1)f.set(k.pageX,k.pageY);else{const ge=Ue(k),be=.5*(k.pageX+ge.x),D=.5*(k.pageY+ge.y);f.set(be,D)}}function Te(k){if(b.length===1)g.set(k.pageX,k.pageY);else{const ge=Ue(k),be=.5*(k.pageX+ge.x),D=.5*(k.pageY+ge.y);g.set(be,D)}}function _e(k){const ge=Ue(k),be=k.pageX-ge.x,D=k.pageY-ge.y,Me=Math.sqrt(be*be+D*D);m.set(0,Me)}function B(k){i.enableZoom&&_e(k),i.enablePan&&Te(k)}function ke(k){i.enableZoom&&_e(k),i.enableRotate&&ve(k)}function C(k){if(b.length==1)h.set(k.pageX,k.pageY);else{const be=Ue(k),D=.5*(k.pageX+be.x),Me=.5*(k.pageY+be.y);h.set(D,Me)}d.subVectors(h,f).multiplyScalar(i.rotateSpeed);const ge=i.domElement;L(2*Math.PI*d.x/ge.clientHeight),V(2*Math.PI*d.y/ge.clientHeight),f.copy(h)}function U(k){if(b.length===1)v.set(k.pageX,k.pageY);else{const ge=Ue(k),be=.5*(k.pageX+ge.x),D=.5*(k.pageY+ge.y);v.set(be,D)}p.subVectors(v,g).multiplyScalar(i.panSpeed),G(p.x,p.y),g.copy(v)}function H(k){const ge=Ue(k),be=k.pageX-ge.x,D=k.pageY-ge.y,Me=Math.sqrt(be*be+D*D);S.set(0,Me),_.set(0,Math.pow(S.y/m.y,i.zoomSpeed)),te(_.y),m.copy(S);const Se=(k.pageX+ge.x)*.5,Ee=(k.pageY+ge.y)*.5;Y(Se,Ee)}function ie(k){i.enableZoom&&H(k),i.enablePan&&U(k)}function W(k){i.enableZoom&&H(k),i.enableRotate&&C(k)}function E(k){i.enabled!==!1&&(b.length===0&&(i.domElement.setPointerCapture(k.pointerId),i.domElement.addEventListener("pointermove",y),i.domElement.addEventListener("pointerup",R)),!Ae(k)&&(De(k),k.pointerType==="touch"?xe(k):K(k)))}function y(k){i.enabled!==!1&&(k.pointerType==="touch"?le(k):N(k))}function R(k){switch(Ce(k),b.length){case 0:i.domElement.releasePointerCapture(k.pointerId),i.domElement.removeEventListener("pointermove",y),i.domElement.removeEventListener("pointerup",R),i.dispatchEvent(Xg),s=r.NONE;break;case 1:const ge=b[0],be=O[ge];xe({pointerId:ge,pageX:be.x,pageY:be.y});break}}function K(k){let ge;switch(k.button){case 0:ge=i.mouseButtons.LEFT;break;case 1:ge=i.mouseButtons.MIDDLE;break;case 2:ge=i.mouseButtons.RIGHT;break;default:ge=-1}switch(ge){case ss.DOLLY:if(i.enableZoom===!1)return;Q(k),s=r.DOLLY;break;case ss.ROTATE:if(k.ctrlKey||k.metaKey||k.shiftKey){if(i.enablePan===!1)return;ne(k),s=r.PAN}else{if(i.enableRotate===!1)return;F(k),s=r.ROTATE}break;case ss.PAN:if(k.ctrlKey||k.metaKey||k.shiftKey){if(i.enableRotate===!1)return;F(k),s=r.ROTATE}else{if(i.enablePan===!1)return;ne(k),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ef)}function N(k){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;z(k);break;case r.DOLLY:if(i.enableZoom===!1)return;X(k);break;case r.PAN:if(i.enablePan===!1)return;ce(k);break}}function q(k){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(k.preventDefault(),i.dispatchEvent(Ef),se(re(k)),i.dispatchEvent(Xg))}function re(k){const ge=k.deltaMode,be={clientX:k.clientX,clientY:k.clientY,deltaY:k.deltaY};switch(ge){case 1:be.deltaY*=16;break;case 2:be.deltaY*=100;break}return k.ctrlKey&&!J&&(be.deltaY*=10),be}function ue(k){k.key==="Control"&&(J=!0,i.domElement.getRootNode().addEventListener("keyup",oe,{passive:!0,capture:!0}))}function oe(k){k.key==="Control"&&(J=!1,i.domElement.getRootNode().removeEventListener("keyup",oe,{passive:!0,capture:!0}))}function he(k){i.enabled===!1||i.enablePan===!1||fe(k)}function xe(k){switch(ye(k),b.length){case 1:switch(i.touches.ONE){case os.ROTATE:if(i.enableRotate===!1)return;ve(k),s=r.TOUCH_ROTATE;break;case os.PAN:if(i.enablePan===!1)return;Te(k),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case os.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;B(k),s=r.TOUCH_DOLLY_PAN;break;case os.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ke(k),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ef)}function le(k){switch(ye(k),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;C(k),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;U(k),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ie(k),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;W(k),i.update();break;default:s=r.NONE}}function Le(k){i.enabled!==!1&&k.preventDefault()}function De(k){b.push(k.pointerId)}function Ce(k){delete O[k.pointerId];for(let ge=0;ge<b.length;ge++)if(b[ge]==k.pointerId){b.splice(ge,1);return}}function Ae(k){for(let ge=0;ge<b.length;ge++)if(b[ge]==k.pointerId)return!0;return!1}function ye(k){let ge=O[k.pointerId];ge===void 0&&(ge=new Ie,O[k.pointerId]=ge),ge.set(k.pageX,k.pageY)}function Ue(k){const ge=k.pointerId===b[0]?b[1]:b[0];return O[ge]}i.domElement.addEventListener("contextmenu",Le),i.domElement.addEventListener("pointerdown",E),i.domElement.addEventListener("pointercancel",R),i.domElement.addEventListener("pointerleave",R),i.domElement.addEventListener("wheel",q,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",ue,{passive:!0,capture:!0}),this.update()}}let kt,kr=new $,zs=new $,Gs=!1;function er(){function n(h,d,g){kt=new _T(h,d),kt.addEventListener("change",g),kt.minDistance=2,kt.maxDistance=32}function e(){kt.dispose()}function t(){Gs&&(kt.target.lerp(zs,.2),kt.object.position.lerp(kr,.1),kt.update(),kt.object.position.distanceTo(kr)<.001&&(kt.target.set(zs.x,zs.y,zs.z),kt.object.position.set(kr.x,kr.y,kr.z),Gs=!1))}function i(){Gs=!1}function r(){Gs=!1}function s(h){h.addEventListener("mousedown",i),h.addEventListener("wheel",r)}function o(){return kt.object.getWorldDirection(new $)}function a(){return kt.getPolarAngle()}function l(){return kt.object.position}function c(h,d,g){zs=new $(h,d,g),kt.target.set(h,d,g),kt.update()}function u(h){kr=new $(h.x,h.y,h.z),Gs=!0}function f(h){const d=o(),g=kt.getDistance(),v=new $(h.x,h.y,h.z).addScaledVector(d,-g);kr=new $(v.x,v.y,v.z),zs=new $(h.x,h.y,h.z),Gs=!0}return{init:n,dispose:e,attachToView:s,animate:t,getDirection:o,getPolarAngle:a,getPosition:l,setTarget:c,animateTo:u,animateToTarget:f}}class Yg extends Nr{constructor(e){super(e)}load(e,t,i,r){const s=this,o=this.path===""?aT.extractUrlBase(e):this.path,a=new vf(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{t(s.parse(l,o))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},i,r)}setMaterialOptions(e){return this.materialOptions=e,this}parse(e,t){const i=e.split(`
`);let r={};const s=/\s+/,o={};for(let l=0;l<i.length;l++){let c=i[l];if(c=c.trim(),c.length===0||c.charAt(0)==="#")continue;const u=c.indexOf(" ");let f=u>=0?c.substring(0,u):c;f=f.toLowerCase();let h=u>=0?c.substring(u+1):"";if(h=h.trim(),f==="newmtl")r={name:h},o[h]=r;else if(f==="ka"||f==="kd"||f==="ks"||f==="ke"){const d=h.split(s,3);r[f]=[parseFloat(d[0]),parseFloat(d[1]),parseFloat(d[2])]}else r[f]=h}const a=new xT(this.resourcePath||t,this.materialOptions);return a.setCrossOrigin(this.crossOrigin),a.setManager(this.manager),a.setMaterials(o),a}}class xT{constructor(e="",t={}){this.baseUrl=e,this.options=t,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:On,this.wrap=this.options.wrap!==void 0?this.options.wrap:$a}setCrossOrigin(e){return this.crossOrigin=e,this}setManager(e){this.manager=e}setMaterials(e){this.materialsInfo=this.convert(e),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(e){if(!this.options)return e;const t={};for(const i in e){const r=e[i],s={};t[i]=s;for(const o in r){let a=!0,l=r[o];const c=o.toLowerCase();switch(c){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(l=[l[0]/255,l[1]/255,l[2]/255]),this.options&&this.options.ignoreZeroRGBs&&l[0]===0&&l[1]===0&&l[2]===0&&(a=!1);break}a&&(s[c]=l)}}return t}preload(){for(const e in this.materialsInfo)this.create(e)}getIndex(e){return this.nameLookup[e]}getAsArray(){let e=0;for(const t in this.materialsInfo)this.materialsArray[e]=this.create(t),this.nameLookup[t]=e,e++;return this.materialsArray}create(e){return this.materials[e]===void 0&&this.createMaterial_(e),this.materials[e]}createMaterial_(e){const t=this,i=this.materialsInfo[e],r={name:e,side:this.side};function s(a,l){return typeof l!="string"||l===""?"":/^https?:\/\//i.test(l)?l:a+l}function o(a,l){if(r[a])return;const c=t.getTextureParams(l,r),u=t.loadTexture(s(t.baseUrl,c.url));u.repeat.copy(c.scale),u.offset.copy(c.offset),u.wrapS=t.wrap,u.wrapT=t.wrap,(a==="map"||a==="emissiveMap")&&(u.colorSpace=It),r[a]=u}for(const a in i){const l=i[a];let c;if(l!=="")switch(a.toLowerCase()){case"kd":r.color=new $e().fromArray(l).convertSRGBToLinear();break;case"ks":r.specular=new $e().fromArray(l).convertSRGBToLinear();break;case"ke":r.emissive=new $e().fromArray(l).convertSRGBToLinear();break;case"map_kd":o("map",l);break;case"map_ks":o("specularMap",l);break;case"map_ke":o("emissiveMap",l);break;case"norm":o("normalMap",l);break;case"map_bump":case"bump":o("bumpMap",l);break;case"map_d":o("alphaMap",l),r.transparent=!0;break;case"ns":r.shininess=parseFloat(l);break;case"d":c=parseFloat(l),c<1&&(r.opacity=c,r.transparent=!0);break;case"tr":c=parseFloat(l),this.options&&this.options.invertTrProperty&&(c=1-c),c>0&&(r.opacity=1-c,r.transparent=!0);break}}return this.materials[e]=new Bg(r),this.materials[e]}getTextureParams(e,t){const i={scale:new Ie(1,1),offset:new Ie(0,0)},r=e.split(/\s+/);let s;return s=r.indexOf("-bm"),s>=0&&(t.bumpScale=parseFloat(r[s+1]),r.splice(s,2)),s=r.indexOf("-s"),s>=0&&(i.scale.set(parseFloat(r[s+1]),parseFloat(r[s+2])),r.splice(s,4)),s=r.indexOf("-o"),s>=0&&(i.offset.set(parseFloat(r[s+1]),parseFloat(r[s+2])),r.splice(s,4)),i.url=r.join(" ").trim(),i}loadTexture(e,t,i,r,s){const o=this.manager!==void 0?this.manager:kg;let a=o.getHandler(e);a===null&&(a=new rT(o)),a.setCrossOrigin&&a.setCrossOrigin(this.crossOrigin);const l=a.load(e,i,r,s);return t!==void 0&&(l.mapping=t),l}}const yT=/^[og]\s*(.+)?/,ST=/^mtllib /,bT=/^usemtl /,MT=/^usemap /,qg=/\s+/,$g=new $,wf=new $,Kg=new $,Jg=new $,Tn=new $,Nl=new $e;function ET(){const n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},i&&i.name&&typeof i.clone=="function"){const r=i.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const r=this.vertices,s=this.object.geometry.vertices;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[i+0],r[i+1],r[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const r=this.normals,s=this.object.geometry.normals;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[i+0],r[i+1],r[i+2])},addFaceNormal:function(e,t,i){const r=this.vertices,s=this.object.geometry.normals;$g.fromArray(r,e),wf.fromArray(r,t),Kg.fromArray(r,i),Tn.subVectors(Kg,wf),Jg.subVectors($g,wf),Tn.cross(Jg),Tn.normalize(),s.push(Tn.x,Tn.y,Tn.z),s.push(Tn.x,Tn.y,Tn.z),s.push(Tn.x,Tn.y,Tn.z)},addColor:function(e,t,i){const r=this.colors,s=this.object.geometry.colors;r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[i]!==void 0&&s.push(r[i+0],r[i+1],r[i+2])},addUV:function(e,t,i){const r=this.uvs,s=this.object.geometry.uvs;s.push(r[e+0],r[e+1]),s.push(r[t+0],r[t+1]),s.push(r[i+0],r[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,r,s,o,a,l,c){const u=this.vertices.length;let f=this.parseVertexIndex(e,u),h=this.parseVertexIndex(t,u),d=this.parseVertexIndex(i,u);if(this.addVertex(f,h,d),this.addColor(f,h,d),a!==void 0&&a!==""){const g=this.normals.length;f=this.parseNormalIndex(a,g),h=this.parseNormalIndex(l,g),d=this.parseNormalIndex(c,g),this.addNormal(f,h,d)}else this.addFaceNormal(f,h,d);if(r!==void 0&&r!==""){const g=this.uvs.length;f=this.parseUVIndex(r,g),h=this.parseUVIndex(s,g),d=this.parseUVIndex(o,g),this.addUV(f,h,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,r=e.length;i<r;i++){const s=this.parseVertexIndex(e[i],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,r=this.uvs.length;for(let s=0,o=e.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(e[s],i));for(let s=0,o=t.length;s<o;s++)this.addUVLine(this.parseUVIndex(t[s],r))}};return n.startObject("",!1),n}class Zg extends Nr{constructor(e){super(e),this.materials=null}load(e,t,i,r){const s=this,o=new vf(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}setMaterials(e){return this.materials=e,this}parse(e){const t=new ET;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let r=[];for(let a=0,l=i.length;a<l;a++){const c=i[a].trimStart();if(c.length===0)continue;const u=c.charAt(0);if(u!=="#")if(u==="v"){const f=c.split(qg);switch(f[0]){case"v":t.vertices.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3])),f.length>=7?(Nl.setRGB(parseFloat(f[4]),parseFloat(f[5]),parseFloat(f[6])).convertSRGBToLinear(),t.colors.push(Nl.r,Nl.g,Nl.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3]));break;case"vt":t.uvs.push(parseFloat(f[1]),parseFloat(f[2]));break}}else if(u==="f"){const h=c.slice(1).trim().split(qg),d=[];for(let v=0,p=h.length;v<p;v++){const m=h[v];if(m.length>0){const S=m.split("/");d.push(S)}}const g=d[0];for(let v=1,p=d.length-1;v<p;v++){const m=d[v],S=d[v+1];t.addFace(g[0],m[0],S[0],g[1],m[1],S[1],g[2],m[2],S[2])}}else if(u==="l"){const f=c.substring(1).trim().split(" ");let h=[];const d=[];if(c.indexOf("/")===-1)h=f;else for(let g=0,v=f.length;g<v;g++){const p=f[g].split("/");p[0]!==""&&h.push(p[0]),p[1]!==""&&d.push(p[1])}t.addLineGeometry(h,d)}else if(u==="p"){const h=c.slice(1).trim().split(" ");t.addPointGeometry(h)}else if((r=yT.exec(c))!==null){const f=(" "+r[0].slice(1).trim()).slice(1);t.startObject(f)}else if(bT.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(ST.test(c))t.materialLibraries.push(c.substring(7).trim());else if(MT.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(r=c.split(" "),r.length>1){const h=r[1].trim().toLowerCase();t.object.smooth=h!=="0"&&h!=="off"}else t.object.smooth=!0;const f=t.object.currentMaterial();f&&(f.smooth=t.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}t.finalize();const s=new Ns;if(s.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=t.objects.length;a<l;a++){const c=t.objects[a],u=c.geometry,f=c.materials,h=u.type==="Line",d=u.type==="Points";let g=!1;if(u.vertices.length===0)continue;const v=new Mt;v.setAttribute("position",new vt(u.vertices,3)),u.normals.length>0&&v.setAttribute("normal",new vt(u.normals,3)),u.colors.length>0&&(g=!0,v.setAttribute("color",new vt(u.colors,3))),u.hasUVIndices===!0&&v.setAttribute("uv",new vt(u.uvs,2));const p=[];for(let S=0,_=f.length;S<_;S++){const M=f[S],A=M.name+"_"+M.smooth+"_"+g;let T=t.materials[A];if(this.materials!==null){if(T=this.materials.create(M.name),h&&T&&!(T instanceof To)){const b=new To;ei.prototype.copy.call(b,T),b.color.copy(T.color),T=b}else if(d&&T&&!(T instanceof Ao)){const b=new Ao({size:10,sizeAttenuation:!1});ei.prototype.copy.call(b,T),b.color.copy(T.color),b.map=T.map,T=b}}T===void 0&&(h?T=new To:d?T=new Ao({size:1,sizeAttenuation:!1}):T=new Bg,T.name=M.name,T.flatShading=!M.smooth,T.vertexColors=g,t.materials[A]=T),p.push(T)}let m;if(p.length>1){for(let S=0,_=f.length;S<_;S++){const M=f[S];v.addGroup(M.groupStart,M.groupCount,S)}h?m=new nf(v,p):d?m=new sf(v,p):m=new Et(v,p)}else h?m=new nf(v,p[0]):d?m=new sf(v,p[0]):m=new Et(v,p[0]);m.name=c.name,s.add(m)}else if(t.vertices.length>0){const a=new Ao({size:1,sizeAttenuation:!1}),l=new Mt;l.setAttribute("position",new vt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(l.setAttribute("color",new vt(t.colors,3)),a.vertexColors=!0);const c=new sf(l,a);s.add(c)}return s}}var Qg=(n=>(n.Main="main",n.Worker="worker",n))(Qg||{});class No{static connect(e,t,i){return{type:"connect",data:{clientType:e,player:t,entity:i}}}static login(e){return{type:"login",data:{loginId:e}}}static getChunks(e){return{type:"getChunks",data:{chunks:e}}}static getEntity(e){return{type:"getEntity",data:{entityId:e}}}static getNearbyEntities(){return{type:"getNearbyEntities"}}}var tr=(n=>(n.Connected="connected",n.Error="error",n.Blocks="blocks",n.Chunks="chunks",n.Entity="entity",n.NearbyEntities="nearbyEntities",n.EntityMoved="entityMoved",n.Entities="entities",n.ChatMessage="chatMessage",n))(tr||{});class wT{static parse(e){const t=JSON.parse(e);return{type:t.type,data:t.data}}}const ev=ht(),tv=ht(),nv=ht(),iv=ht(),rv=ht();function Bl(){function n(t,i,r=!1,s,o){console.log("ssl=",r),console.log("entity_id=",o);const l=`${r==!0?"wss://":"ws://"}${t}:${i}/ws`,c=ev.value=new WebSocket(l);c.onopen=function(u){tv.value=u},c.onmessage=function(u){const f=wT.parse(u.data);iv.value=f},c.onclose=function(u){nv.value=u}}function e(t){var i;rv.value=t,(i=ev.value)==null||i.send(JSON.stringify(t))}return{connect:n,send:e,onOpen:tv,onClose:nv,onReceive:iv,onSend:rv}}const sv=cu("console",{state:()=>({lines:[{type:"info",line:"Welcome to 8x9craft2!"}]}),getters:{body:n=>n.lines.map(e=>e.line).join(`
`),reverseBody:n=>n.lines.reverse().map(e=>e.line).join(`
`)},actions:{log(n){this.lines.push({type:"info",line:n})},error(n){this.lines.push({type:"error",line:n})},success(n){this.lines.push({type:"success",line:n})},clear(){this.lines=[]}}});function TT(){function n(t,i,r){const s=[];for(const o in t){const a=t[o],l=i[a],c=r[o];s.push({x:c.x,y:c.y,z:c.z,type:l.type,color:l.mapColor,tintColor:l.tintColor,isLiquid:l.isLiquid,isAir:l.isAir,isOccluding:l.isOccluding})}return s}function e(t,i,r){const s=[];for(let o=0;o<r.size;++o)for(let a=0;a<r.size;++a)for(let l=0;l<r.size;++l){const c=o*r.size*r.size+a*r.size+l,u=t[c],f=i[u];s.push({x:r.x+o,y:r.y+a,z:r.z+l,type:f.type,color:f.mapColor,tintColor:f.tintColor,isLiquid:f.isLiquid,isAir:f.isAir,isOccluding:f.isOccluding})}return s}return{parseBlocks:n,parseChunk:e}}function AT(){const n=o=>{const a=Ai(),{parseBlocks:l}=TT(),c=l(o.data.blocks,o.data.states,o.data.positions);a.setBlocks(c)},e=o=>{Ai().setEntityLocation(o.data.location)},t=o=>{const a=An(),l=Ai(),c=a.entityId,u=o.data.items.filter(f=>f.uuid!=c);l.setNearbyEntities(u)},i=o=>{Ai().setEntityLocation(o.data.to)},r=o=>{Ai().addChatMessage(o.data.uuid,o.data.message)};return{handleMessage:o=>{switch(o.type){case tr.Entity:e(o);break;case tr.NearbyEntities:t(o);break;case tr.Blocks:n(o);break;case tr.EntityMoved:i(o);break;case tr.ChatMessage:r(o);break}}}}function ov(n,e){return n&&(n.length>e?n.substring(0,e)+"...":n)}var kl=(n=>(n[n.init=0]="init",n[n.connecting=1]="connecting",n[n.connected=2]="connected",n[n.disconnected=3]="disconnected",n))(kl||{});function av(n){return n&&(n.endsWith("/")?n:`${n}/`)}const An=cu("server",{state:()=>{const n=new URLSearchParams(window.location.search);let e=()=>{};const t=new Promise(i=>{e=i});return{playerName:n.get("player_name")||"",playerId:n.get("player_id")||"",entityName:n.get("entity_name")||"",entityId:n.get("entity_id")||"",ssl:JSON.parse(n.get("ssl")||"false"),host:n.get("host")||"localhost",isCreativeMode:JSON.parse(n.get("isCreativeMode")||"false"),port:parseInt(n.get("monacoPort")||"25569"),assetsLocation:av(n.get("assetsLocation"))||"",resolveConfigReady:e,isConfigReady:t,state:0,entities:[]}},actions:{setAssetsLocation(n){this.assetsLocation=av(n)||""},setConfigReady(){this.resolveConfigReady()},connect(){const n=sv(),{connect:e,send:t,onOpen:i,onClose:r,onReceive:s,onSend:o}=Bl();this.state=0,e(this.host,this.port,this.ssl,this.playerId,this.entityId),Tt(i,()=>{this.state=1,t(No.connect(Qg.Main,this.playerId,this.entityId)),t(No.login(this.playerName))}),Tt(r,()=>{this.state=3}),Tt(s,a=>{if(!a)return;const l=AT(),c=JSON.stringify(a.data);switch(n.log(`WebSocket << [${a.type}] ${ov(c,100)}`),a.type){case tr.Connected:this.state=2;break;case tr.Entities:this.entities=a.data;break;default:l.handleMessage(a)}}),Tt(o,a=>{if(!a)return;const l=JSON.stringify(a.data);n.log(`WebSocket >> [${a.type}] ${ov(l,100)}`)})}}}),Tf=ht(0);let zr;function lv(){function n(){const{isConfigReady:r}=An();return r.then(()=>new Promise((s,o)=>{const{assetsLocation:a}=An(),l=new Yg;l.setPath(`${a}obj/hakkun/`),l.load("chara.mtl",c=>{c.preload();const u=c.materials.Chara;u.map.minFilter=dt,u.map.magFilter=dt;const f=new Zg;f.setMaterials(c),f.setPath(`${a}obj/hakkun/`),f.load("chara.obj",h=>{h.children[0].scale.x=.8,h.children[0].scale.y=.8,h.children[0].scale.z=.8,h.children[0].translateY(-.5),h.renderOrder=2,h.visible=!1,zr=h,s(h)},function(d){d.lengthComputable&&(Tf.value=50+d.loaded/d.total*100/2)},function(d){o(d)})},function(u){u.lengthComputable&&(Tf.value=u.loaded/u.total*100/2)},function(u){o(u)})}))}function e(){}function t(r){zr&&(zr.visible=r)}function i(r){zr.position.x=r.x-.5,zr.position.y=r.y,zr.position.z=r.z-.5;const s=new $(r.directionX,r.directionY,r.directionZ),o=new gt().lookAt(s,new $(0,0,0),new $(0,1,0)),a=new Zn().setFromRotationMatrix(o);zr.setRotationFromQuaternion(a)}return{init:n,dispose:e,setVisible:t,setPosition:i,progress:Tf}}const Af=new Set;function Cf(){function n(i){Af.add(i)}function e(i){Af.delete(i)}function t(i){for(const r of Af)r.quaternion.copy(i.quaternion)}return{add:n,remove:e,applyCameraQuaternion:t}}function CT(){var n=Object.create(null);function e(r,s){var o=r.id,a=r.name,l=r.dependencies;l===void 0&&(l=[]);var c=r.init;c===void 0&&(c=function(){});var u=r.getTransferables;if(u===void 0&&(u=null),!n[o])try{l=l.map(function(h){return h&&h.isWorkerModule&&(e(h,function(d){if(d instanceof Error)throw d}),h=n[h.id].value),h}),c=i("<"+a+">.init",c),u&&(u=i("<"+a+">.getTransferables",u));var f=null;typeof c=="function"?f=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),n[o]={id:o,value:f,getTransferables:u},s(f)}catch(h){h&&h.noLog||console.error(h),s(h)}}function t(r,s){var o,a=r.id,l=r.args;(!n[a]||typeof n[a].value!="function")&&s(new Error("Worker module "+a+": not found or its 'init' did not return a function"));try{var c=(o=n[a]).value.apply(o,l);c&&typeof c.then=="function"?c.then(u,function(f){return s(f instanceof Error?f:new Error(""+f))}):u(c)}catch(f){s(f)}function u(f){try{var h=n[a].getTransferables&&n[a].getTransferables(f);(!h||!Array.isArray(h)||!h.length)&&(h=void 0),s(f,h)}catch(d){console.error(d),s(d)}}}function i(r,s){var o=void 0;self.troikaDefine=function(l){return o=l};var a=URL.createObjectURL(new Blob(["/** "+r.replace(/\*/g,"")+` **/

troikaDefine(
`+s+`
)`],{type:"application/javascript"}));try{importScripts(a)}catch(l){console.error(l)}return URL.revokeObjectURL(a),delete self.troikaDefine,o}self.addEventListener("message",function(r){var s=r.data,o=s.messageId,a=s.action,l=s.data;try{a==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:o,success:!1,error:c.message}):postMessage({messageId:o,success:!0,result:{isCallable:typeof c=="function"}})}),a==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:o,success:!1,error:c.message}):postMessage({messageId:o,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:o,success:!1,error:c.stack})}})}function RT(n){var e=function(){for(var t=[],i=arguments.length;i--;)t[i]=arguments[i];return e._getInitResult().then(function(r){if(typeof r=="function")return r.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=n.dependencies,i=n.init;t=Array.isArray(t)?t.map(function(s){return s&&s._getInitResult?s._getInitResult():s}):[];var r=Promise.all(t).then(function(s){return i.apply(null,s)});return e._getInitResult=function(){return r},r},e}var cv=function(){var n=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),n=!0}catch(t){typeof process<"u",console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return cv=function(){return n},n},PT=0,LT=0,Rf=!1,Bo=Object.create(null),ko=Object.create(null),Pf=Object.create(null);function Hs(n){if((!n||typeof n.init!="function")&&!Rf)throw new Error("requires `options.init` function");var e=n.dependencies,t=n.init,i=n.getTransferables,r=n.workerId;if(!cv())return RT(n);r==null&&(r="#default");var s="workerModule"+ ++PT,o=n.name||s,a=null;e=e&&e.map(function(c){return typeof c=="function"&&!c.workerModuleData&&(Rf=!0,c=Hs({workerId:r,name:"<"+o+"> function dependency: "+c.name,init:`function(){return (
`+zl(c)+`
)}`}),Rf=!1),c&&c.workerModuleData&&(c=c.workerModuleData),c});function l(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(!a){a=uv(r,"registerModule",l.workerModuleData);var f=function(){a=null,ko[r].delete(f)};(ko[r]||(ko[r]=new Set)).add(f)}return a.then(function(h){var d=h.isCallable;if(d)return uv(r,"callModule",{id:s,args:c});throw new Error("Worker module function was called but `init` did not return a callable function")})}return l.workerModuleData={isWorkerModule:!0,id:s,name:o,dependencies:e,init:zl(t),getTransferables:i&&zl(i)},l}function UT(n){ko[n]&&ko[n].forEach(function(e){e()}),Bo[n]&&(Bo[n].terminate(),delete Bo[n])}function zl(n){var e=n.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function DT(n){var e=Bo[n];if(!e){var t=zl(CT);e=Bo[n]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+n.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(i){var r=i.data,s=r.messageId,o=Pf[s];if(!o)throw new Error("WorkerModule response with empty or unknown messageId");delete Pf[s],o(r)}}return e}function uv(n,e,t){return new Promise(function(i,r){var s=++LT;Pf[s]=function(o){o.success?i(o.result):r(new Error("Error in worker "+e+" call: "+o.error))},DT(n).postMessage({messageId:s,action:e,data:t})})}function fv(){var n=function(e){function t(Y,ee,F,Q,ne,z,X,ce){var se=1-X;ce.x=se*se*Y+2*se*X*F+X*X*ne,ce.y=se*se*ee+2*se*X*Q+X*X*z}function i(Y,ee,F,Q,ne,z,X,ce,se,fe){var ve=1-se;fe.x=ve*ve*ve*Y+3*ve*ve*se*F+3*ve*se*se*ne+se*se*se*X,fe.y=ve*ve*ve*ee+3*ve*ve*se*Q+3*ve*se*se*z+se*se*se*ce}function r(Y,ee){for(var F=/([MLQCZ])([^MLQCZ]*)/g,Q,ne,z,X,ce;Q=F.exec(Y);){var se=Q[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(fe){return parseFloat(fe)});switch(Q[1]){case"M":X=ne=se[0],ce=z=se[1];break;case"L":(se[0]!==X||se[1]!==ce)&&ee("L",X,ce,X=se[0],ce=se[1]);break;case"Q":{ee("Q",X,ce,X=se[2],ce=se[3],se[0],se[1]);break}case"C":{ee("C",X,ce,X=se[4],ce=se[5],se[0],se[1],se[2],se[3]);break}case"Z":(X!==ne||ce!==z)&&ee("L",X,ce,ne,z);break}}}function s(Y,ee,F){F===void 0&&(F=16);var Q={x:0,y:0};r(Y,function(ne,z,X,ce,se,fe,ve,Te,_e){switch(ne){case"L":ee(z,X,ce,se);break;case"Q":{for(var B=z,ke=X,C=1;C<F;C++)t(z,X,fe,ve,ce,se,C/(F-1),Q),ee(B,ke,Q.x,Q.y),B=Q.x,ke=Q.y;break}case"C":{for(var U=z,H=X,ie=1;ie<F;ie++)i(z,X,fe,ve,Te,_e,ce,se,ie/(F-1),Q),ee(U,H,Q.x,Q.y),U=Q.x,H=Q.y;break}}})}var o="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",a="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(Y,ee){var F=Y.getContext?Y.getContext("webgl",c):Y,Q=l.get(F);if(!Q){let ve=function(U){var H=z[U];if(!H&&(H=z[U]=F.getExtension(U),!H))throw new Error(U+" not supported");return H},Te=function(U,H){var ie=F.createShader(H);return F.shaderSource(ie,U),F.compileShader(ie),ie},_e=function(U,H,ie,W){if(!X[U]){var E={},y={},R=F.createProgram();F.attachShader(R,Te(H,F.VERTEX_SHADER)),F.attachShader(R,Te(ie,F.FRAGMENT_SHADER)),F.linkProgram(R),X[U]={program:R,transaction:function(N){F.useProgram(R),N({setUniform:function(re,ue){for(var oe=[],he=arguments.length-2;he-- >0;)oe[he]=arguments[he+2];var xe=y[ue]||(y[ue]=F.getUniformLocation(R,ue));F["uniform"+re].apply(F,[xe].concat(oe))},setAttribute:function(re,ue,oe,he,xe){var le=E[re];le||(le=E[re]={buf:F.createBuffer(),loc:F.getAttribLocation(R,re),data:null}),F.bindBuffer(F.ARRAY_BUFFER,le.buf),F.vertexAttribPointer(le.loc,ue,F.FLOAT,!1,0,0),F.enableVertexAttribArray(le.loc),ne?F.vertexAttribDivisor(le.loc,he):ve("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(le.loc,he),xe!==le.data&&(F.bufferData(F.ARRAY_BUFFER,xe,oe),le.data=xe)}})}}}X[U].transaction(W)},B=function(U,H){se++;try{F.activeTexture(F.TEXTURE0+se);var ie=ce[U];ie||(ie=ce[U]=F.createTexture(),F.bindTexture(F.TEXTURE_2D,ie),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_MIN_FILTER,F.NEAREST),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_MAG_FILTER,F.NEAREST)),F.bindTexture(F.TEXTURE_2D,ie),H(ie,se)}finally{se--}},ke=function(U,H,ie){var W=F.createFramebuffer();fe.push(W),F.bindFramebuffer(F.FRAMEBUFFER,W),F.activeTexture(F.TEXTURE0+H),F.bindTexture(F.TEXTURE_2D,U),F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,U,0);try{ie(W)}finally{F.deleteFramebuffer(W),F.bindFramebuffer(F.FRAMEBUFFER,fe[--fe.length-1]||null)}},C=function(){z={},X={},ce={},se=-1,fe.length=0};var ne=typeof WebGL2RenderingContext<"u"&&F instanceof WebGL2RenderingContext,z={},X={},ce={},se=-1,fe=[];F.canvas.addEventListener("webglcontextlost",function(U){C(),U.preventDefault()},!1),l.set(F,Q={gl:F,isWebGL2:ne,getExtension:ve,withProgram:_e,withTexture:B,withTextureFramebuffer:ke,handleContextLoss:C})}ee(Q)}function f(Y,ee,F,Q,ne,z,X,ce){X===void 0&&(X=15),ce===void 0&&(ce=null),u(Y,function(se){var fe=se.gl,ve=se.withProgram,Te=se.withTexture;Te("copy",function(_e,B){fe.texImage2D(fe.TEXTURE_2D,0,fe.RGBA,ne,z,0,fe.RGBA,fe.UNSIGNED_BYTE,ee),ve("copy",o,a,function(ke){var C=ke.setUniform,U=ke.setAttribute;U("aUV",2,fe.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),C("1i","image",B),fe.bindFramebuffer(fe.FRAMEBUFFER,ce||null),fe.disable(fe.BLEND),fe.colorMask(X&8,X&4,X&2,X&1),fe.viewport(F,Q,ne,z),fe.scissor(F,Q,ne,z),fe.drawArrays(fe.TRIANGLES,0,3)})})})}function h(Y,ee,F){var Q=Y.width,ne=Y.height;u(Y,function(z){var X=z.gl,ce=new Uint8Array(Q*ne*4);X.readPixels(0,0,Q,ne,X.RGBA,X.UNSIGNED_BYTE,ce),Y.width=ee,Y.height=F,f(X,ce,0,0,Q,ne)})}var d=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:f,resizeWebGLCanvasWithoutClearing:h});function g(Y,ee,F,Q,ne,z){z===void 0&&(z=1);var X=new Uint8Array(Y*ee),ce=Q[2]-Q[0],se=Q[3]-Q[1],fe=[];s(F,function(U,H,ie,W){fe.push({x1:U,y1:H,x2:ie,y2:W,minX:Math.min(U,ie),minY:Math.min(H,W),maxX:Math.max(U,ie),maxY:Math.max(H,W)})}),fe.sort(function(U,H){return U.maxX-H.maxX});for(var ve=0;ve<Y;ve++)for(var Te=0;Te<ee;Te++){var _e=ke(Q[0]+ce*(ve+.5)/Y,Q[1]+se*(Te+.5)/ee),B=Math.pow(1-Math.abs(_e)/ne,z)/2;_e<0&&(B=1-B),B=Math.max(0,Math.min(255,Math.round(B*255))),X[Te*Y+ve]=B}return X;function ke(U,H){for(var ie=1/0,W=1/0,E=fe.length;E--;){var y=fe[E];if(y.maxX+W<=U)break;if(U+W>y.minX&&H-W<y.maxY&&H+W>y.minY){var R=m(U,H,y.x1,y.y1,y.x2,y.y2);R<ie&&(ie=R,W=Math.sqrt(ie))}}return C(U,H)&&(W=-W),W}function C(U,H){for(var ie=0,W=fe.length;W--;){var E=fe[W];if(E.maxX<=U)break;var y=E.y1>H!=E.y2>H&&U<(E.x2-E.x1)*(H-E.y1)/(E.y2-E.y1)+E.x1;y&&(ie+=E.y1<E.y2?1:-1)}return ie!==0}}function v(Y,ee,F,Q,ne,z,X,ce,se,fe){z===void 0&&(z=1),ce===void 0&&(ce=0),se===void 0&&(se=0),fe===void 0&&(fe=0),p(Y,ee,F,Q,ne,z,X,null,ce,se,fe)}function p(Y,ee,F,Q,ne,z,X,ce,se,fe,ve){z===void 0&&(z=1),se===void 0&&(se=0),fe===void 0&&(fe=0),ve===void 0&&(ve=0);for(var Te=g(Y,ee,F,Q,ne,z),_e=new Uint8Array(Te.length*4),B=0;B<Te.length;B++)_e[B*4+ve]=Te[B];f(X,_e,se,fe,Y,ee,1<<3-ve,ce)}function m(Y,ee,F,Q,ne,z){var X=ne-F,ce=z-Q,se=X*X+ce*ce,fe=se?Math.max(0,Math.min(1,((Y-F)*X+(ee-Q)*ce)/se)):0,ve=Y-(F+fe*X),Te=ee-(Q+fe*ce);return ve*ve+Te*Te}var S=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:v,generateIntoFramebuffer:p}),_="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",M="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",A="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",T=new Float32Array([0,0,2,0,0,2]),b=null,O=!1,J={},x=new WeakMap;function w(Y){if(!O&&!j(Y))throw new Error("WebGL generation not supported")}function L(Y,ee,F,Q,ne,z,X){if(z===void 0&&(z=1),X===void 0&&(X=null),!X&&(X=b,!X)){var ce=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!ce)throw new Error("OffscreenCanvas or DOM canvas not supported");X=b=ce.getContext("webgl",{depth:!1})}w(X);var se=new Uint8Array(Y*ee*4);u(X,function(_e){var B=_e.gl,ke=_e.withTexture,C=_e.withTextureFramebuffer;ke("readable",function(U,H){B.texImage2D(B.TEXTURE_2D,0,B.RGBA,Y,ee,0,B.RGBA,B.UNSIGNED_BYTE,null),C(U,H,function(ie){P(Y,ee,F,Q,ne,z,B,ie,0,0,0),B.readPixels(0,0,Y,ee,B.RGBA,B.UNSIGNED_BYTE,se)})})});for(var fe=new Uint8Array(Y*ee),ve=0,Te=0;ve<se.length;ve+=4)fe[Te++]=se[ve];return fe}function V(Y,ee,F,Q,ne,z,X,ce,se,fe){z===void 0&&(z=1),ce===void 0&&(ce=0),se===void 0&&(se=0),fe===void 0&&(fe=0),P(Y,ee,F,Q,ne,z,X,null,ce,se,fe)}function P(Y,ee,F,Q,ne,z,X,ce,se,fe,ve){z===void 0&&(z=1),se===void 0&&(se=0),fe===void 0&&(fe=0),ve===void 0&&(ve=0),w(X);var Te=[];s(F,function(_e,B,ke,C){Te.push(_e,B,ke,C)}),Te=new Float32Array(Te),u(X,function(_e){var B=_e.gl,ke=_e.isWebGL2,C=_e.getExtension,U=_e.withProgram,H=_e.withTexture,ie=_e.withTextureFramebuffer,W=_e.handleContextLoss;if(H("rawDistances",function(E,y){(Y!==E._lastWidth||ee!==E._lastHeight)&&B.texImage2D(B.TEXTURE_2D,0,B.RGBA,E._lastWidth=Y,E._lastHeight=ee,0,B.RGBA,B.UNSIGNED_BYTE,null),U("main",_,M,function(R){var K=R.setAttribute,N=R.setUniform,q=!ke&&C("ANGLE_instanced_arrays"),re=!ke&&C("EXT_blend_minmax");K("aUV",2,B.STATIC_DRAW,0,T),K("aLineSegment",4,B.DYNAMIC_DRAW,1,Te),N.apply(void 0,["4f","uGlyphBounds"].concat(Q)),N("1f","uMaxDistance",ne),N("1f","uExponent",z),ie(E,y,function(ue){B.enable(B.BLEND),B.colorMask(!0,!0,!0,!0),B.viewport(0,0,Y,ee),B.scissor(0,0,Y,ee),B.blendFunc(B.ONE,B.ONE),B.blendEquationSeparate(B.FUNC_ADD,ke?B.MAX:re.MAX_EXT),B.clear(B.COLOR_BUFFER_BIT),ke?B.drawArraysInstanced(B.TRIANGLES,0,3,Te.length/4):q.drawArraysInstancedANGLE(B.TRIANGLES,0,3,Te.length/4)})}),U("post",o,A,function(R){R.setAttribute("aUV",2,B.STATIC_DRAW,0,T),R.setUniform("1i","tex",y),B.bindFramebuffer(B.FRAMEBUFFER,ce),B.disable(B.BLEND),B.colorMask(ve===0,ve===1,ve===2,ve===3),B.viewport(se,fe,Y,ee),B.scissor(se,fe,Y,ee),B.drawArrays(B.TRIANGLES,0,3)})}),B.isContextLost())throw W(),new Error("webgl context lost")})}function j(Y){var ee=!Y||Y===b?J:Y.canvas||Y,F=x.get(ee);if(F===void 0){O=!0;var Q=null;try{var ne=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],z=L(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,Y);F=z&&ne.length===z.length&&z.every(function(X,ce){return X===ne[ce]}),F||(Q="bad trial run results",console.info(ne,z))}catch(X){F=!1,Q=X.message}Q&&console.warn("WebGL SDF generation not supported:",Q),O=!1,x.set(ee,F)}return F}var G=Object.freeze({__proto__:null,generate:L,generateIntoCanvas:V,generateIntoFramebuffer:P,isSupported:j});function te(Y,ee,F,Q,ne,z){ne===void 0&&(ne=Math.max(Q[2]-Q[0],Q[3]-Q[1])/2),z===void 0&&(z=1);try{return L.apply(G,arguments)}catch(X){return console.info("WebGL SDF generation failed, falling back to JS",X),g.apply(S,arguments)}}function Z(Y,ee,F,Q,ne,z,X,ce,se,fe){ne===void 0&&(ne=Math.max(Q[2]-Q[0],Q[3]-Q[1])/2),z===void 0&&(z=1),ce===void 0&&(ce=0),se===void 0&&(se=0),fe===void 0&&(fe=0);try{return V.apply(G,arguments)}catch(ve){return console.info("WebGL SDF generation failed, falling back to JS",ve),v.apply(S,arguments)}}return e.forEachPathCommand=r,e.generate=te,e.generateIntoCanvas=Z,e.javascript=S,e.pathToLineSegments=s,e.webgl=G,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return n}function IT(){var n=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},i={},r={};i.L=1,r[1]="L",Object.keys(t).forEach(function(W,E){i[W]=1<<E+1,r[i[W]]=W}),Object.freeze(i);var s=i.LRI|i.RLI|i.FSI,o=i.L|i.R|i.AL,a=i.B|i.S|i.WS|i.ON|i.FSI|i.LRI|i.RLI|i.PDI,l=i.BN|i.RLE|i.LRE|i.RLO|i.LRO|i.PDF,c=i.S|i.WS|i.B|s|i.PDI|l,u=null;function f(){if(!u){u=new Map;var W=function(y){if(t.hasOwnProperty(y)){var R=0;t[y].split(",").forEach(function(K){var N=K.split("+"),q=N[0],re=N[1];q=parseInt(q,36),re=re?parseInt(re,36):0,u.set(R+=q,i[y]);for(var ue=0;ue<re;ue++)u.set(++R,i[y])})}};for(var E in t)W(E)}}function h(W){return f(),u.get(W.codePointAt(0))||i.L}function d(W){return r[h(W)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function v(W,E){var y=36,R=0,K=new Map,N=E&&new Map,q;return W.split(",").forEach(function re(ue){if(ue.indexOf("+")!==-1)for(var oe=+ue;oe--;)re(q);else{q=ue;var he=ue.split(">"),xe=he[0],le=he[1];xe=String.fromCodePoint(R+=parseInt(xe,y)),le=String.fromCodePoint(R+=parseInt(le,y)),K.set(xe,le),E&&N.set(le,xe)}}),{map:K,reverseMap:N}}var p,m,S;function _(){if(!p){var W=v(g.pairs,!0),E=W.map,y=W.reverseMap;p=E,m=y,S=v(g.canonical,!1).map}}function M(W){return _(),p.get(W)||null}function A(W){return _(),m.get(W)||null}function T(W){return _(),S.get(W)||null}var b=i.L,O=i.R,J=i.EN,x=i.ES,w=i.ET,L=i.AN,V=i.CS,P=i.B,j=i.S,G=i.ON,te=i.BN,Z=i.NSM,Y=i.AL,ee=i.LRO,F=i.RLO,Q=i.LRE,ne=i.RLE,z=i.PDF,X=i.LRI,ce=i.RLI,se=i.FSI,fe=i.PDI;function ve(W,E){for(var y=125,R=new Uint32Array(W.length),K=0;K<W.length;K++)R[K]=h(W[K]);var N=new Map;function q(fn,Xn){var hn=R[fn];R[fn]=Xn,N.set(hn,N.get(hn)-1),hn&a&&N.set(a,N.get(a)-1),N.set(Xn,(N.get(Xn)||0)+1),Xn&a&&N.set(a,(N.get(a)||0)+1)}for(var re=new Uint8Array(W.length),ue=new Map,oe=[],he=null,xe=0;xe<W.length;xe++)he||oe.push(he={start:xe,end:W.length-1,level:E==="rtl"?1:E==="ltr"?0:r_(xe,!1)}),R[xe]&P&&(he.end=xe,he=null);for(var le=ne|Q|F|ee|s|fe|z|P,Le=function(fn){return fn+(fn&1?1:2)},De=function(fn){return fn+(fn&1?2:1)},Ce=0;Ce<oe.length;Ce++){he=oe[Ce];var Ae=[{_level:he.level,_override:0,_isolate:0}],ye=void 0,Ue=0,Ne=0,k=0;N.clear();for(var ge=he.start;ge<=he.end;ge++){var be=R[ge];if(ye=Ae[Ae.length-1],N.set(be,(N.get(be)||0)+1),be&a&&N.set(a,(N.get(a)||0)+1),be&le)if(be&(ne|Q)){re[ge]=ye._level;var D=(be===ne?De:Le)(ye._level);D<=y&&!Ue&&!Ne?Ae.push({_level:D,_override:0,_isolate:0}):Ue||Ne++}else if(be&(F|ee)){re[ge]=ye._level;var Me=(be===F?De:Le)(ye._level);Me<=y&&!Ue&&!Ne?Ae.push({_level:Me,_override:be&F?O:b,_isolate:0}):Ue||Ne++}else if(be&s){be&se&&(be=r_(ge+1,!0)===1?ce:X),re[ge]=ye._level,ye._override&&q(ge,ye._override);var Se=(be===ce?De:Le)(ye._level);Se<=y&&Ue===0&&Ne===0?(k++,Ae.push({_level:Se,_override:0,_isolate:1,_isolInitIndex:ge})):Ue++}else if(be&fe){if(Ue>0)Ue--;else if(k>0){for(Ne=0;!Ae[Ae.length-1]._isolate;)Ae.pop();var Ee=Ae[Ae.length-1]._isolInitIndex;Ee!=null&&(ue.set(Ee,ge),ue.set(ge,Ee)),Ae.pop(),k--}ye=Ae[Ae.length-1],re[ge]=ye._level,ye._override&&q(ge,ye._override)}else be&z?(Ue===0&&(Ne>0?Ne--:!ye._isolate&&Ae.length>1&&(Ae.pop(),ye=Ae[Ae.length-1])),re[ge]=ye._level):be&P&&(re[ge]=he.level);else re[ge]=ye._level,ye._override&&be!==te&&q(ge,ye._override)}for(var Oe=[],Ge=null,Be=he.start;Be<=he.end;Be++){var Ve=R[Be];if(!(Ve&l)){var it=re[Be],Xe=Ve&s,Ke=Ve===fe;Ge&&it===Ge._level?(Ge._end=Be,Ge._endsWithIsolInit=Xe):Oe.push(Ge={_start:Be,_end:Be,_level:it,_startsWithPDI:Ke,_endsWithIsolInit:Xe})}}for(var at=[],$t=0;$t<Oe.length;$t++){var an=Oe[$t];if(!an._startsWithPDI||an._startsWithPDI&&!ue.has(an._start)){for(var xn=[Ge=an],ri=void 0;Ge&&Ge._endsWithIsolInit&&(ri=ue.get(Ge._end))!=null;)for(var ln=$t+1;ln<Oe.length;ln++)if(Oe[ln]._start===ri){xn.push(Ge=Oe[ln]);break}for(var Bt=[],si=0;si<xn.length;si++)for(var $l=xn[si],Wo=$l._start;Wo<=$l._end;Wo++)Bt.push(Wo);for(var Wf=re[Bt[0]],I=he.level,ae=Bt[0]-1;ae>=0;ae--)if(!(R[ae]&l)){I=re[ae];break}var pe=Bt[Bt.length-1],me=re[pe],de=he.level;if(!(R[pe]&s)){for(var Fe=pe+1;Fe<=he.end;Fe++)if(!(R[Fe]&l)){de=re[Fe];break}}at.push({_seqIndices:Bt,_sosType:Math.max(I,Wf)%2?O:b,_eosType:Math.max(de,me)%2?O:b})}}for(var ze=0;ze<at.length;ze++){var We=at[ze],we=We._seqIndices,Je=We._sosType,Ze=We._eosType,je=re[we[0]]&1?O:b;if(N.get(Z))for(var ut=0;ut<we.length;ut++){var Kt=we[ut];if(R[Kt]&Z){for(var bt=Je,cn=ut-1;cn>=0;cn--)if(!(R[we[cn]]&l)){bt=R[we[cn]];break}q(Kt,bt&(s|fe)?G:bt)}}if(N.get(J))for(var lt=0;lt<we.length;lt++){var tt=we[lt];if(R[tt]&J)for(var sr=lt-1;sr>=-1;sr--){var mt=sr===-1?Je:R[we[sr]];if(mt&o){mt===Y&&q(tt,L);break}}}if(N.get(Y))for(var Gn=0;Gn<we.length;Gn++){var Xo=we[Gn];R[Xo]&Y&&q(Xo,O)}if(N.get(x)||N.get(V))for(var Hn=1;Hn<we.length-1;Hn++){var Xr=we[Hn];if(R[Xr]&(x|V)){for(var yt=0,Vn=0,jr=Hn-1;jr>=0&&(yt=R[we[jr]],!!(yt&l));jr--);for(var Jt=Hn+1;Jt<we.length&&(Vn=R[we[Jt]],!!(Vn&l));Jt++);yt===Vn&&(R[Xr]===x?yt===J:yt&(J|L))&&q(Xr,yt)}}if(N.get(J))for(var un=0;un<we.length;un++){var Xf=we[un];if(R[Xf]&J){for(var Yr=un-1;Yr>=0&&R[we[Yr]]&(w|l);Yr--)q(we[Yr],J);for(un++;un<we.length&&R[we[un]]&(w|l|J);un++)R[we[un]]!==J&&q(we[un],J)}}if(N.get(w)||N.get(x)||N.get(V))for(var jo=0;jo<we.length;jo++){var Xv=we[jo];if(R[Xv]&(w|x|V)){q(Xv,G);for(var Kl=jo-1;Kl>=0&&R[we[Kl]]&l;Kl--)q(we[Kl],G);for(var Jl=jo+1;Jl<we.length&&R[we[Jl]]&l;Jl++)q(we[Jl],G)}}if(N.get(J))for(var jf=0,jv=Je;jf<we.length;jf++){var Yv=we[jf],Yf=R[Yv];Yf&J?jv===b&&q(Yv,b):Yf&o&&(jv=Yf)}if(N.get(a)){var Yo=O|J|L,qv=Yo|b,Zl=[];{for(var js=[],Ys=0;Ys<we.length;Ys++)if(R[we[Ys]]&a){var qo=W[we[Ys]],$v=void 0;if(M(qo)!==null)if(js.length<63)js.push({char:qo,seqIndex:Ys});else break;else if(($v=A(qo))!==null)for(var $o=js.length-1;$o>=0;$o--){var qf=js[$o].char;if(qf===$v||qf===A(T(qo))||M(T(qf))===qo){Zl.push([js[$o].seqIndex,Ys]),js.length=$o;break}}}Zl.sort(function(fn,Xn){return fn[0]-Xn[0]})}for(var $f=0;$f<Zl.length;$f++){for(var Kv=Zl[$f],Ql=Kv[0],Kf=Kv[1],Jv=!1,Wn=0,Jf=Ql+1;Jf<Kf;Jf++){var Zv=we[Jf];if(R[Zv]&qv){Jv=!0;var Qv=R[Zv]&Yo?O:b;if(Qv===je){Wn=Qv;break}}}if(Jv&&!Wn){Wn=Je;for(var Zf=Ql-1;Zf>=0;Zf--){var e_=we[Zf];if(R[e_]&qv){var t_=R[e_]&Yo?O:b;t_!==je?Wn=t_:Wn=je;break}}}if(Wn){if(R[we[Ql]]=R[we[Kf]]=Wn,Wn!==je){for(var Ko=Ql+1;Ko<we.length;Ko++)if(!(R[we[Ko]]&l)){h(W[we[Ko]])&Z&&(R[we[Ko]]=Wn);break}}if(Wn!==je){for(var Jo=Kf+1;Jo<we.length;Jo++)if(!(R[we[Jo]]&l)){h(W[we[Jo]])&Z&&(R[we[Jo]]=Wn);break}}}}for(var or=0;or<we.length;or++)if(R[we[or]]&a){for(var n_=or,Qf=or,eh=Je,Zo=or-1;Zo>=0;Zo--)if(R[we[Zo]]&l)n_=Zo;else{eh=R[we[Zo]]&Yo?O:b;break}for(var i_=Ze,Qo=or+1;Qo<we.length;Qo++)if(R[we[Qo]]&(a|l))Qf=Qo;else{i_=R[we[Qo]]&Yo?O:b;break}for(var th=n_;th<=Qf;th++)R[we[th]]=eh===i_?eh:je;or=Qf}}}for(var yn=he.start;yn<=he.end;yn++){var _2=re[yn],ec=R[yn];if(_2&1?ec&(b|J|L)&&re[yn]++:ec&O?re[yn]++:ec&(L|J)&&(re[yn]+=2),ec&l&&(re[yn]=yn===0?he.level:re[yn-1]),yn===he.end||h(W[yn])&(j|P))for(var tc=yn;tc>=0&&h(W[tc])&c;tc--)re[tc]=he.level}}return{levels:re,paragraphs:oe};function r_(fn,Xn){for(var hn=fn;hn<W.length;hn++){var ar=R[hn];if(ar&(O|Y))return 1;if(ar&(P|b)||Xn&&ar===fe)return 0;if(ar&s){var s_=x2(hn);hn=s_===-1?W.length:s_}}return 0}function x2(fn){for(var Xn=1,hn=fn+1;hn<W.length;hn++){var ar=R[hn];if(ar&P)break;if(ar&fe){if(--Xn===0)return hn}else ar&s&&Xn++}return-1}}var Te="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",_e;function B(){if(!_e){var W=v(Te,!0),E=W.map,y=W.reverseMap;y.forEach(function(R,K){E.set(K,R)}),_e=E}}function ke(W){return B(),_e.get(W)||null}function C(W,E,y,R){var K=W.length;y=Math.max(0,y==null?0:+y),R=Math.min(K-1,R==null?K-1:+R);for(var N=new Map,q=y;q<=R;q++)if(E[q]&1){var re=ke(W[q]);re!==null&&N.set(q,re)}return N}function U(W,E,y,R){var K=W.length;y=Math.max(0,y==null?0:+y),R=Math.min(K-1,R==null?K-1:+R);var N=[];return E.paragraphs.forEach(function(q){var re=Math.max(y,q.start),ue=Math.min(R,q.end);if(re<ue){for(var oe=E.levels.slice(re,ue+1),he=ue;he>=re&&h(W[he])&c;he--)oe[he]=q.level;for(var xe=q.level,le=1/0,Le=0;Le<oe.length;Le++){var De=oe[Le];De>xe&&(xe=De),De<le&&(le=De|1)}for(var Ce=xe;Ce>=le;Ce--)for(var Ae=0;Ae<oe.length;Ae++)if(oe[Ae]>=Ce){for(var ye=Ae;Ae+1<oe.length&&oe[Ae+1]>=Ce;)Ae++;Ae>ye&&N.push([ye+re,Ae+re])}}}),N}function H(W,E,y,R){var K=ie(W,E,y,R),N=[].concat(W);return K.forEach(function(q,re){N[re]=(E.levels[q]&1?ke(W[q]):null)||W[q]}),N.join("")}function ie(W,E,y,R){for(var K=U(W,E,y,R),N=[],q=0;q<W.length;q++)N[q]=q;return K.forEach(function(re){for(var ue=re[0],oe=re[1],he=N.slice(ue,oe+1),xe=he.length;xe--;)N[oe-xe]=he[xe]}),N}return e.closingToOpeningBracket=A,e.getBidiCharType=h,e.getBidiCharTypeName=d,e.getCanonicalBracket=T,e.getEmbeddingLevels=ve,e.getMirroredCharacter=ke,e.getMirroredCharactersMap=C,e.getReorderSegments=U,e.getReorderedIndices=ie,e.getReorderedString=H,e.openingToClosingBracket=M,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return n}const hv=/\bvoid\s+main\s*\(\s*\)\s*{/g;function Lf(n){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(i,r){let s=et[r];return s?Lf(s):i}return n.replace(e,t)}const zt=[];for(let n=0;n<256;n++)zt[n]=(n<16?"0":"")+n.toString(16);function OT(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toUpperCase()}const Gr=Object.assign||function(){let n=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let i=arguments[e];if(i)for(let r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=i[r])}return n},FT=Date.now(),dv=new WeakMap,pv=new Map;let NT=1e10;function Uf(n,e){const t=GT(e);let i=dv.get(n);if(i||dv.set(n,i=Object.create(null)),i[t])return new i[t];const r=`_onBeforeCompile${t}`,s=function(c,u){n.onBeforeCompile.call(this,c,u);const f=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let h=pv[f];if(!h){const d=BT(this,c,e,t);h=pv[f]=d}c.vertexShader=h.vertexShader,c.fragmentShader=h.fragmentShader,Gr(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-FT}}),this[r]&&this[r](c)},o=function(){return a(e.chained?n:n.clone())},a=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:n}),Object.defineProperty(u,"id",{value:NT++}),u.uuid=OT(),u.uniforms=Gr({},c.uniforms,e.uniforms),u.defines=Gr({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=Gr({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:o},isDerivedMaterial:{value:!0},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return n.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return s},set(c){this[r]=c}},copy:{writable:!0,configurable:!0,value:function(c){return n.copy.call(this,c),!n.isShaderMaterial&&!n.isDerivedMaterial&&(Gr(this.extensions,c.extensions),Gr(this.defines,c.defines),Gr(this.uniforms,Dm.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new n.constructor;return a(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=Uf(n.isDerivedMaterial?n.getDepthMaterial():new mg({depthPacking:tm}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=Uf(n.isDerivedMaterial?n.getDistanceMaterial():new gg,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),n.dispose.call(this)}}};return i[t]=o,new o}function BT(n,{vertexShader:e,fragmentShader:t},i,r){let{vertexDefs:s,vertexMainIntro:o,vertexMainOutro:a,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:f,fragmentColorTransform:h,customRewriter:d,timeUniform:g}=i;if(s=s||"",o=o||"",a=a||"",c=c||"",u=u||"",f=f||"",(l||d)&&(e=Lf(e)),(h||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=Lf(t)),d){let v=d({vertexShader:e,fragmentShader:t});e=v.vertexShader,t=v.fragmentShader}if(h){let v=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,p=>(v.push(p),"")),f=`${h}
${v.join(`
`)}
${f}`}if(g){const v=`
uniform float ${g};
`;s=v+s,c=v+c}return l&&(e=`vec3 troika_position_${r};
vec3 troika_normal_${r};
vec2 troika_uv_${r};
${e}
`,s=`${s}
void troikaVertexTransform${r}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,o=`
troika_position_${r} = vec3(position);
troika_normal_${r} = vec3(normal);
troika_uv_${r} = vec2(uv);
troikaVertexTransform${r}(troika_position_${r}, troika_normal_${r}, troika_uv_${r});
${o}
`,e=e.replace(/\b(position|normal|uv)\b/g,(v,p,m,S)=>/\battribute\s+vec[23]\s+$/.test(S.substr(0,m))?p:`troika_${p}_${r}`),n.map&&n.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${r}`))),e=mv(e,r,s,o,a),t=mv(t,r,c,u,f),{vertexShader:e,fragmentShader:t}}function mv(n,e,t,i,r){return(i||r||t)&&(n=n.replace(hv,`
${t}
void troikaOrigMain${e}() {`),n+=`
void main() {
  ${i}
  troikaOrigMain${e}();
  ${r}
}`),n}function kT(n,e){return n==="uniforms"?void 0:typeof e=="function"?e.toString():e}let zT=0;const gv=new Map;function GT(n){const e=JSON.stringify(n,kT);let t=gv.get(e);return t==null&&gv.set(e,t=++zT),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function HT(){return typeof window>"u"&&(self.window=self),function(n){var e={parse:function(r){var s=e._bin,o=new Uint8Array(r);if(s.readASCII(o,0,4)=="ttcf"){var a=4;s.readUshort(o,a),a+=2,s.readUshort(o,a),a+=2;var l=s.readUint(o,a);a+=4;for(var c=[],u=0;u<l;u++){var f=s.readUint(o,a);a+=4,c.push(e._readFont(o,f))}return c}return[e._readFont(o,0)]},_readFont:function(r,s){var o=e._bin,a=s;o.readFixed(r,s),s+=4;var l=o.readUshort(r,s);s+=2,o.readUshort(r,s),s+=2,o.readUshort(r,s),s+=2,o.readUshort(r,s),s+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:r,_offset:a},f={},h=0;h<l;h++){var d=o.readASCII(r,s,4);s+=4,o.readUint(r,s),s+=4;var g=o.readUint(r,s);s+=4;var v=o.readUint(r,s);s+=4,f[d]={offset:g,length:v}}for(h=0;h<c.length;h++){var p=c[h];f[p]&&(u[p.trim()]=e[p.trim()].parse(r,f[p].offset,f[p].length,u))}return u},_tabOffset:function(r,s,o){for(var a=e._bin,l=a.readUshort(r,o+4),c=o+12,u=0;u<l;u++){var f=a.readASCII(r,c,4);c+=4,a.readUint(r,c),c+=4;var h=a.readUint(r,c);if(c+=4,a.readUint(r,c),c+=4,f==s)return h}return 0}};e._bin={readFixed:function(r,s){return(r[s]<<8|r[s+1])+(r[s+2]<<8|r[s+3])/65540},readF2dot14:function(r,s){return e._bin.readShort(r,s)/16384},readInt:function(r,s){return e._bin._view(r).getInt32(s)},readInt8:function(r,s){return e._bin._view(r).getInt8(s)},readShort:function(r,s){return e._bin._view(r).getInt16(s)},readUshort:function(r,s){return e._bin._view(r).getUint16(s)},readUshorts:function(r,s,o){for(var a=[],l=0;l<o;l++)a.push(e._bin.readUshort(r,s+2*l));return a},readUint:function(r,s){return e._bin._view(r).getUint32(s)},readUint64:function(r,s){return 4294967296*e._bin.readUint(r,s)+e._bin.readUint(r,s+4)},readASCII:function(r,s,o){for(var a="",l=0;l<o;l++)a+=String.fromCharCode(r[s+l]);return a},readUnicode:function(r,s,o){for(var a="",l=0;l<o;l++){var c=r[s++]<<8|r[s++];a+=String.fromCharCode(c)}return a},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(r,s,o){var a=e._bin._tdec;return a&&s==0&&o==r.length?a.decode(r):e._bin.readASCII(r,s,o)},readBytes:function(r,s,o){for(var a=[],l=0;l<o;l++)a.push(r[s+l]);return a},readASCIIArray:function(r,s,o){for(var a=[],l=0;l<o;l++)a.push(String.fromCharCode(r[s+l]));return a},_view:function(r){return r._dataView||(r._dataView=r.buffer?new DataView(r.buffer,r.byteOffset,r.byteLength):new DataView(new Uint8Array(r).buffer))}},e._lctf={},e._lctf.parse=function(r,s,o,a,l){var c=e._bin,u={},f=s;c.readFixed(r,s),s+=4;var h=c.readUshort(r,s);s+=2;var d=c.readUshort(r,s);s+=2;var g=c.readUshort(r,s);return s+=2,u.scriptList=e._lctf.readScriptList(r,f+h),u.featureList=e._lctf.readFeatureList(r,f+d),u.lookupList=e._lctf.readLookupList(r,f+g,l),u},e._lctf.readLookupList=function(r,s,o){var a=e._bin,l=s,c=[],u=a.readUshort(r,s);s+=2;for(var f=0;f<u;f++){var h=a.readUshort(r,s);s+=2;var d=e._lctf.readLookupTable(r,l+h,o);c.push(d)}return c},e._lctf.readLookupTable=function(r,s,o){var a=e._bin,l=s,c={tabs:[]};c.ltype=a.readUshort(r,s),s+=2,c.flag=a.readUshort(r,s),s+=2;var u=a.readUshort(r,s);s+=2;for(var f=c.ltype,h=0;h<u;h++){var d=a.readUshort(r,s);s+=2;var g=o(r,f,l+d,c);c.tabs.push(g)}return c},e._lctf.numOfOnes=function(r){for(var s=0,o=0;o<32;o++)r>>>o&1&&s++;return s},e._lctf.readClassDef=function(r,s){var o=e._bin,a=[],l=o.readUshort(r,s);if(s+=2,l==1){var c=o.readUshort(r,s);s+=2;var u=o.readUshort(r,s);s+=2;for(var f=0;f<u;f++)a.push(c+f),a.push(c+f),a.push(o.readUshort(r,s)),s+=2}if(l==2){var h=o.readUshort(r,s);for(s+=2,f=0;f<h;f++)a.push(o.readUshort(r,s)),s+=2,a.push(o.readUshort(r,s)),s+=2,a.push(o.readUshort(r,s)),s+=2}return a},e._lctf.getInterval=function(r,s){for(var o=0;o<r.length;o+=3){var a=r[o],l=r[o+1];if(r[o+2],a<=s&&s<=l)return o}return-1},e._lctf.readCoverage=function(r,s){var o=e._bin,a={};a.fmt=o.readUshort(r,s),s+=2;var l=o.readUshort(r,s);return s+=2,a.fmt==1&&(a.tab=o.readUshorts(r,s,l)),a.fmt==2&&(a.tab=o.readUshorts(r,s,3*l)),a},e._lctf.coverageIndex=function(r,s){var o=r.tab;if(r.fmt==1)return o.indexOf(s);if(r.fmt==2){var a=e._lctf.getInterval(o,s);if(a!=-1)return o[a+2]+(s-o[a])}return-1},e._lctf.readFeatureList=function(r,s){var o=e._bin,a=s,l=[],c=o.readUshort(r,s);s+=2;for(var u=0;u<c;u++){var f=o.readASCII(r,s,4);s+=4;var h=o.readUshort(r,s);s+=2;var d=e._lctf.readFeatureTable(r,a+h);d.tag=f.trim(),l.push(d)}return l},e._lctf.readFeatureTable=function(r,s){var o=e._bin,a=s,l={},c=o.readUshort(r,s);s+=2,c>0&&(l.featureParams=a+c);var u=o.readUshort(r,s);s+=2,l.tab=[];for(var f=0;f<u;f++)l.tab.push(o.readUshort(r,s+2*f));return l},e._lctf.readScriptList=function(r,s){var o=e._bin,a=s,l={},c=o.readUshort(r,s);s+=2;for(var u=0;u<c;u++){var f=o.readASCII(r,s,4);s+=4;var h=o.readUshort(r,s);s+=2,l[f.trim()]=e._lctf.readScriptTable(r,a+h)}return l},e._lctf.readScriptTable=function(r,s){var o=e._bin,a=s,l={},c=o.readUshort(r,s);s+=2,c>0&&(l.default=e._lctf.readLangSysTable(r,a+c));var u=o.readUshort(r,s);s+=2;for(var f=0;f<u;f++){var h=o.readASCII(r,s,4);s+=4;var d=o.readUshort(r,s);s+=2,l[h.trim()]=e._lctf.readLangSysTable(r,a+d)}return l},e._lctf.readLangSysTable=function(r,s){var o=e._bin,a={};o.readUshort(r,s),s+=2,a.reqFeature=o.readUshort(r,s),s+=2;var l=o.readUshort(r,s);return s+=2,a.features=o.readUshorts(r,s,l),a},e.CFF={},e.CFF.parse=function(r,s,o){var a=e._bin;(r=new Uint8Array(r.buffer,s,o))[s=0],r[++s],r[++s],r[++s],s++;var l=[];s=e.CFF.readIndex(r,s,l);for(var c=[],u=0;u<l.length-1;u++)c.push(a.readASCII(r,s+l[u],l[u+1]-l[u]));s+=l[l.length-1];var f=[];s=e.CFF.readIndex(r,s,f);var h=[];for(u=0;u<f.length-1;u++)h.push(e.CFF.readDict(r,s+f[u],s+f[u+1]));s+=f[f.length-1];var d=h[0],g=[];s=e.CFF.readIndex(r,s,g);var v=[];for(u=0;u<g.length-1;u++)v.push(a.readASCII(r,s+g[u],g[u+1]-g[u]));if(s+=g[g.length-1],e.CFF.readSubrs(r,s,d),d.CharStrings){s=d.CharStrings,g=[],s=e.CFF.readIndex(r,s,g);var p=[];for(u=0;u<g.length-1;u++)p.push(a.readBytes(r,s+g[u],g[u+1]-g[u]));d.CharStrings=p}if(d.ROS){s=d.FDArray;var m=[];for(s=e.CFF.readIndex(r,s,m),d.FDArray=[],u=0;u<m.length-1;u++){var S=e.CFF.readDict(r,s+m[u],s+m[u+1]);e.CFF._readFDict(r,S,v),d.FDArray.push(S)}s+=m[m.length-1],s=d.FDSelect,d.FDSelect=[];var _=r[s];if(s++,_!=3)throw _;var M=a.readUshort(r,s);for(s+=2,u=0;u<M+1;u++)d.FDSelect.push(a.readUshort(r,s),r[s+2]),s+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(r,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(r,d.charset,d.CharStrings.length)),e.CFF._readFDict(r,d,v),d},e.CFF._readFDict=function(r,s,o){var a;for(var l in s.Private&&(a=s.Private[1],s.Private=e.CFF.readDict(r,a,a+s.Private[0]),s.Private.Subrs&&e.CFF.readSubrs(r,a+s.Private.Subrs,s.Private)),s)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(s[l]=o[s[l]-426+35])},e.CFF.readSubrs=function(r,s,o){var a=e._bin,l=[];s=e.CFF.readIndex(r,s,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,o.Bias=c,o.Subrs=[];for(var f=0;f<l.length-1;f++)o.Subrs.push(a.readBytes(r,s+l[f],l[f+1]-l[f]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(r,s){for(var o=0;o<r.charset.length;o++)if(r.charset[o]==s)return o;return-1},e.CFF.glyphBySE=function(r,s){return s<0||s>255?-1:e.CFF.glyphByUnicode(r,e.CFF.tableSE[s])},e.CFF.readEncoding=function(r,s,o){e._bin;var a=[".notdef"],l=r[s];if(s++,l!=0)throw"error: unknown encoding format: "+l;var c=r[s];s++;for(var u=0;u<c;u++)a.push(r[s+u]);return a},e.CFF.readCharset=function(r,s,o){var a=e._bin,l=[".notdef"],c=r[s];if(s++,c==0)for(var u=0;u<o;u++){var f=a.readUshort(r,s);s+=2,l.push(f)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<o;){f=a.readUshort(r,s),s+=2;var h=0;for(c==1?(h=r[s],s++):(h=a.readUshort(r,s),s+=2),u=0;u<=h;u++)l.push(f),f++}}return l},e.CFF.readIndex=function(r,s,o){var a=e._bin,l=a.readUshort(r,s)+1,c=r[s+=2];if(s++,c==1)for(var u=0;u<l;u++)o.push(r[s+u]);else if(c==2)for(u=0;u<l;u++)o.push(a.readUshort(r,s+2*u));else if(c==3)for(u=0;u<l;u++)o.push(16777215&a.readUint(r,s+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(s+=l*c)-1},e.CFF.getCharString=function(r,s,o){var a=e._bin,l=r[s],c=r[s+1];r[s+2],r[s+3],r[s+4];var u=1,f=null,h=null;l<=20&&(f=l,u=1),l==12&&(f=100*l+c,u=2),21<=l&&l<=27&&(f=l,u=1),l==28&&(h=a.readShort(r,s+1),u=3),29<=l&&l<=31&&(f=l,u=1),32<=l&&l<=246&&(h=l-139,u=1),247<=l&&l<=250&&(h=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(h=256*-(l-251)-c-108,u=2),l==255&&(h=a.readInt(r,s+1)/65535,u=5),o.val=h??"o"+f,o.size=u},e.CFF.readCharString=function(r,s,o){for(var a=s+o,l=e._bin,c=[];s<a;){var u=r[s],f=r[s+1];r[s+2],r[s+3],r[s+4];var h=1,d=null,g=null;u<=20&&(d=u,h=1),u==12&&(d=100*u+f,h=2),u!=19&&u!=20||(d=u,h=2),21<=u&&u<=27&&(d=u,h=1),u==28&&(g=l.readShort(r,s+1),h=3),29<=u&&u<=31&&(d=u,h=1),32<=u&&u<=246&&(g=u-139,h=1),247<=u&&u<=250&&(g=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(g=256*-(u-251)-f-108,h=2),u==255&&(g=l.readInt(r,s+1)/65535,h=5),c.push(g??"o"+d),s+=h}return c},e.CFF.readDict=function(r,s,o){for(var a=e._bin,l={},c=[];s<o;){var u=r[s],f=r[s+1];r[s+2],r[s+3],r[s+4];var h=1,d=null,g=null;if(u==28&&(g=a.readShort(r,s+1),h=3),u==29&&(g=a.readInt(r,s+1),h=5),32<=u&&u<=246&&(g=u-139,h=1),247<=u&&u<=250&&(g=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(g=256*-(u-251)-f-108,h=2),u==255)throw g=a.readInt(r,s+1)/65535,h=5,"unknown number";if(u==30){var v=[];for(h=1;;){var p=r[s+h];h++;var m=p>>4,S=15&p;if(m!=15&&v.push(m),S!=15&&v.push(S),S==15)break}for(var _="",M=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],A=0;A<v.length;A++)_+=M[v[A]];g=parseFloat(_)}u<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],h=1,u==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][f],h=2)),d!=null?(l[d]=c.length==1?c[0]:c,c=[]):c.push(g),s+=h}return l},e.cmap={},e.cmap.parse=function(r,s,o){r=new Uint8Array(r.buffer,s,o),s=0;var a=e._bin,l={};a.readUshort(r,s),s+=2;var c=a.readUshort(r,s);s+=2;var u=[];l.tables=[];for(var f=0;f<c;f++){var h=a.readUshort(r,s);s+=2;var d=a.readUshort(r,s);s+=2;var g=a.readUint(r,s);s+=4;var v="p"+h+"e"+d,p=u.indexOf(g);if(p==-1){var m;p=l.tables.length,u.push(g);var S=a.readUshort(r,g);S==0?m=e.cmap.parse0(r,g):S==4?m=e.cmap.parse4(r,g):S==6?m=e.cmap.parse6(r,g):S==12?m=e.cmap.parse12(r,g):console.debug("unknown format: "+S,h,d,g),l.tables.push(m)}if(l[v]!=null)throw"multiple tables for one platform+encoding";l[v]=p}return l},e.cmap.parse0=function(r,s){var o=e._bin,a={};a.format=o.readUshort(r,s),s+=2;var l=o.readUshort(r,s);s+=2,o.readUshort(r,s),s+=2,a.map=[];for(var c=0;c<l-6;c++)a.map.push(r[s+c]);return a},e.cmap.parse4=function(r,s){var o=e._bin,a=s,l={};l.format=o.readUshort(r,s),s+=2;var c=o.readUshort(r,s);s+=2,o.readUshort(r,s),s+=2;var u=o.readUshort(r,s);s+=2;var f=u/2;l.searchRange=o.readUshort(r,s),s+=2,l.entrySelector=o.readUshort(r,s),s+=2,l.rangeShift=o.readUshort(r,s),s+=2,l.endCount=o.readUshorts(r,s,f),s+=2*f,s+=2,l.startCount=o.readUshorts(r,s,f),s+=2*f,l.idDelta=[];for(var h=0;h<f;h++)l.idDelta.push(o.readShort(r,s)),s+=2;for(l.idRangeOffset=o.readUshorts(r,s,f),s+=2*f,l.glyphIdArray=[];s<a+c;)l.glyphIdArray.push(o.readUshort(r,s)),s+=2;return l},e.cmap.parse6=function(r,s){var o=e._bin,a={};a.format=o.readUshort(r,s),s+=2,o.readUshort(r,s),s+=2,o.readUshort(r,s),s+=2,a.firstCode=o.readUshort(r,s),s+=2;var l=o.readUshort(r,s);s+=2,a.glyphIdArray=[];for(var c=0;c<l;c++)a.glyphIdArray.push(o.readUshort(r,s)),s+=2;return a},e.cmap.parse12=function(r,s){var o=e._bin,a={};a.format=o.readUshort(r,s),s+=2,s+=2,o.readUint(r,s),s+=4,o.readUint(r,s),s+=4;var l=o.readUint(r,s);s+=4,a.groups=[];for(var c=0;c<l;c++){var u=s+12*c,f=o.readUint(r,u+0),h=o.readUint(r,u+4),d=o.readUint(r,u+8);a.groups.push([f,h,d])}return a},e.glyf={},e.glyf.parse=function(r,s,o,a){for(var l=[],c=0;c<a.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(r,s){var o=e._bin,a=r._data,l=e._tabOffset(a,"glyf",r._offset)+r.loca[s];if(r.loca[s]==r.loca[s+1])return null;var c={};if(c.noc=o.readShort(a,l),l+=2,c.xMin=o.readShort(a,l),l+=2,c.yMin=o.readShort(a,l),l+=2,c.xMax=o.readShort(a,l),l+=2,c.yMax=o.readShort(a,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(o.readUshort(a,l)),l+=2;var f=o.readUshort(a,l);if(l+=2,a.length-l<f)return null;c.instructions=o.readBytes(a,l,f),l+=f;var h=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<h;u++){var d=a[l];if(l++,c.flags.push(d),(8&d)!=0){var g=a[l];l++;for(var v=0;v<g;v++)c.flags.push(d),u++}}for(c.xs=[],u=0;u<h;u++){var p=(2&c.flags[u])!=0,m=(16&c.flags[u])!=0;p?(c.xs.push(m?a[l]:-a[l]),l++):m?c.xs.push(0):(c.xs.push(o.readShort(a,l)),l+=2)}for(c.ys=[],u=0;u<h;u++)p=(4&c.flags[u])!=0,m=(32&c.flags[u])!=0,p?(c.ys.push(m?a[l]:-a[l]),l++):m?c.ys.push(0):(c.ys.push(o.readShort(a,l)),l+=2);var S=0,_=0;for(u=0;u<h;u++)S+=c.xs[u],_+=c.ys[u],c.xs[u]=S,c.ys[u]=_}else{var M;c.parts=[];do{M=o.readUshort(a,l),l+=2;var A={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(A),A.glyphIndex=o.readUshort(a,l),l+=2,1&M){var T=o.readShort(a,l);l+=2;var b=o.readShort(a,l);l+=2}else T=o.readInt8(a,l),l++,b=o.readInt8(a,l),l++;2&M?(A.m.tx=T,A.m.ty=b):(A.p1=T,A.p2=b),8&M?(A.m.a=A.m.d=o.readF2dot14(a,l),l+=2):64&M?(A.m.a=o.readF2dot14(a,l),l+=2,A.m.d=o.readF2dot14(a,l),l+=2):128&M&&(A.m.a=o.readF2dot14(a,l),l+=2,A.m.b=o.readF2dot14(a,l),l+=2,A.m.c=o.readF2dot14(a,l),l+=2,A.m.d=o.readF2dot14(a,l),l+=2)}while(32&M);if(256&M){var O=o.readUshort(a,l);for(l+=2,c.instr=[],u=0;u<O;u++)c.instr.push(a[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(r,s,o,a){var l=s;s+=4;var c=e._bin.readUshort(r,s);return{glyphClassDef:c===0?null:e._lctf.readClassDef(r,l+c)}},e.GPOS={},e.GPOS.parse=function(r,s,o,a){return e._lctf.parse(r,s,o,a,e.GPOS.subt)},e.GPOS.subt=function(r,s,o,a){var l=e._bin,c=o,u={};if(u.fmt=l.readUshort(r,o),o+=2,s==1||s==2||s==3||s==7||s==8&&u.fmt<=2){var f=l.readUshort(r,o);o+=2,u.coverage=e._lctf.readCoverage(r,f+c)}if(s==1&&u.fmt==1){var h=l.readUshort(r,o);o+=2,h!=0&&(u.pos=e.GPOS.readValueRecord(r,o,h))}else if(s==2&&u.fmt>=1&&u.fmt<=2){h=l.readUshort(r,o),o+=2;var d=l.readUshort(r,o);o+=2;var g=e._lctf.numOfOnes(h),v=e._lctf.numOfOnes(d);if(u.fmt==1){u.pairsets=[];var p=l.readUshort(r,o);o+=2;for(var m=0;m<p;m++){var S=c+l.readUshort(r,o);o+=2;var _=l.readUshort(r,S);S+=2;for(var M=[],A=0;A<_;A++){var T=l.readUshort(r,S);S+=2,h!=0&&(L=e.GPOS.readValueRecord(r,S,h),S+=2*g),d!=0&&(V=e.GPOS.readValueRecord(r,S,d),S+=2*v),M.push({gid2:T,val1:L,val2:V})}u.pairsets.push(M)}}if(u.fmt==2){var b=l.readUshort(r,o);o+=2;var O=l.readUshort(r,o);o+=2;var J=l.readUshort(r,o);o+=2;var x=l.readUshort(r,o);for(o+=2,u.classDef1=e._lctf.readClassDef(r,c+b),u.classDef2=e._lctf.readClassDef(r,c+O),u.matrix=[],m=0;m<J;m++){var w=[];for(A=0;A<x;A++){var L=null,V=null;h!=0&&(L=e.GPOS.readValueRecord(r,o,h),o+=2*g),d!=0&&(V=e.GPOS.readValueRecord(r,o,d),o+=2*v),w.push({val1:L,val2:V})}u.matrix.push(w)}}}else if(s==4&&u.fmt==1)u.markCoverage=e._lctf.readCoverage(r,l.readUshort(r,o)+c),u.baseCoverage=e._lctf.readCoverage(r,l.readUshort(r,o+2)+c),u.markClassCount=l.readUshort(r,o+4),u.markArray=e.GPOS.readMarkArray(r,l.readUshort(r,o+6)+c),u.baseArray=e.GPOS.readBaseArray(r,l.readUshort(r,o+8)+c,u.markClassCount);else if(s==6&&u.fmt==1)u.mark1Coverage=e._lctf.readCoverage(r,l.readUshort(r,o)+c),u.mark2Coverage=e._lctf.readCoverage(r,l.readUshort(r,o+2)+c),u.markClassCount=l.readUshort(r,o+4),u.mark1Array=e.GPOS.readMarkArray(r,l.readUshort(r,o+6)+c),u.mark2Array=e.GPOS.readBaseArray(r,l.readUshort(r,o+8)+c,u.markClassCount);else{if(s==9&&u.fmt==1){var P=l.readUshort(r,o);o+=2;var j=l.readUint(r,o);if(o+=4,a.ltype==9)a.ltype=P;else if(a.ltype!=P)throw"invalid extension substitution";return e.GPOS.subt(r,a.ltype,c+j)}console.debug("unsupported GPOS table LookupType",s,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(r,s,o){var a=e._bin,l=[];return l.push(1&o?a.readShort(r,s):0),s+=1&o?2:0,l.push(2&o?a.readShort(r,s):0),s+=2&o?2:0,l.push(4&o?a.readShort(r,s):0),s+=4&o?2:0,l.push(8&o?a.readShort(r,s):0),s+=8&o?2:0,l},e.GPOS.readBaseArray=function(r,s,o){var a=e._bin,l=[],c=s,u=a.readUshort(r,s);s+=2;for(var f=0;f<u;f++){for(var h=[],d=0;d<o;d++)h.push(e.GPOS.readAnchorRecord(r,c+a.readUshort(r,s))),s+=2;l.push(h)}return l},e.GPOS.readMarkArray=function(r,s){var o=e._bin,a=[],l=s,c=o.readUshort(r,s);s+=2;for(var u=0;u<c;u++){var f=e.GPOS.readAnchorRecord(r,o.readUshort(r,s+2)+l);f.markClass=o.readUshort(r,s),a.push(f),s+=4}return a},e.GPOS.readAnchorRecord=function(r,s){var o=e._bin,a={};return a.fmt=o.readUshort(r,s),a.x=o.readShort(r,s+2),a.y=o.readShort(r,s+4),a},e.GSUB={},e.GSUB.parse=function(r,s,o,a){return e._lctf.parse(r,s,o,a,e.GSUB.subt)},e.GSUB.subt=function(r,s,o,a){var l=e._bin,c=o,u={};if(u.fmt=l.readUshort(r,o),o+=2,s!=1&&s!=2&&s!=4&&s!=5&&s!=6)return null;if(s==1||s==2||s==4||s==5&&u.fmt<=2||s==6&&u.fmt<=2){var f=l.readUshort(r,o);o+=2,u.coverage=e._lctf.readCoverage(r,c+f)}if(s==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(r,o),o+=2;else if(u.fmt==2){var h=l.readUshort(r,o);o+=2,u.newg=l.readUshorts(r,o,h),o+=2*u.newg.length}}else if(s==2&&u.fmt==1){h=l.readUshort(r,o),o+=2,u.seqs=[];for(var d=0;d<h;d++){var g=l.readUshort(r,o)+c;o+=2;var v=l.readUshort(r,g);u.seqs.push(l.readUshorts(r,g+2,v))}}else if(s==4)for(u.vals=[],h=l.readUshort(r,o),o+=2,d=0;d<h;d++){var p=l.readUshort(r,o);o+=2,u.vals.push(e.GSUB.readLigatureSet(r,c+p))}else if(s==5&&u.fmt==2){if(u.fmt==2){var m=l.readUshort(r,o);o+=2,u.cDef=e._lctf.readClassDef(r,c+m),u.scset=[];var S=l.readUshort(r,o);for(o+=2,d=0;d<S;d++){var _=l.readUshort(r,o);o+=2,u.scset.push(_==0?null:e.GSUB.readSubClassSet(r,c+_))}}}else if(s==6&&u.fmt==3){if(u.fmt==3){for(d=0;d<3;d++){h=l.readUshort(r,o),o+=2;for(var M=[],A=0;A<h;A++)M.push(e._lctf.readCoverage(r,c+l.readUshort(r,o+2*A)));o+=2*h,d==0&&(u.backCvg=M),d==1&&(u.inptCvg=M),d==2&&(u.ahedCvg=M)}h=l.readUshort(r,o),o+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(r,o,h)}}else{if(s==7&&u.fmt==1){var T=l.readUshort(r,o);o+=2;var b=l.readUint(r,o);if(o+=4,a.ltype==9)a.ltype=T;else if(a.ltype!=T)throw"invalid extension substitution";return e.GSUB.subt(r,a.ltype,c+b)}console.debug("unsupported GSUB table LookupType",s,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(r,s){var o=e._bin.readUshort,a=s,l=[],c=o(r,s);s+=2;for(var u=0;u<c;u++){var f=o(r,s);s+=2,l.push(e.GSUB.readSubClassRule(r,a+f))}return l},e.GSUB.readSubClassRule=function(r,s){var o=e._bin.readUshort,a={},l=o(r,s),c=o(r,s+=2);s+=2,a.input=[];for(var u=0;u<l-1;u++)a.input.push(o(r,s)),s+=2;return a.substLookupRecords=e.GSUB.readSubstLookupRecords(r,s,c),a},e.GSUB.readSubstLookupRecords=function(r,s,o){for(var a=e._bin.readUshort,l=[],c=0;c<o;c++)l.push(a(r,s),a(r,s+2)),s+=4;return l},e.GSUB.readChainSubClassSet=function(r,s){var o=e._bin,a=s,l=[],c=o.readUshort(r,s);s+=2;for(var u=0;u<c;u++){var f=o.readUshort(r,s);s+=2,l.push(e.GSUB.readChainSubClassRule(r,a+f))}return l},e.GSUB.readChainSubClassRule=function(r,s){for(var o=e._bin,a={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=o.readUshort(r,s);s+=2,c==1&&u--,a[l[c]]=o.readUshorts(r,s,u),s+=2*a[l[c]].length}return u=o.readUshort(r,s),s+=2,a.subst=o.readUshorts(r,s,2*u),s+=2*a.subst.length,a},e.GSUB.readLigatureSet=function(r,s){var o=e._bin,a=s,l=[],c=o.readUshort(r,s);s+=2;for(var u=0;u<c;u++){var f=o.readUshort(r,s);s+=2,l.push(e.GSUB.readLigature(r,a+f))}return l},e.GSUB.readLigature=function(r,s){var o=e._bin,a={chain:[]};a.nglyph=o.readUshort(r,s),s+=2;var l=o.readUshort(r,s);s+=2;for(var c=0;c<l-1;c++)a.chain.push(o.readUshort(r,s)),s+=2;return a},e.head={},e.head.parse=function(r,s,o){var a=e._bin,l={};return a.readFixed(r,s),s+=4,l.fontRevision=a.readFixed(r,s),s+=4,a.readUint(r,s),s+=4,a.readUint(r,s),s+=4,l.flags=a.readUshort(r,s),s+=2,l.unitsPerEm=a.readUshort(r,s),s+=2,l.created=a.readUint64(r,s),s+=8,l.modified=a.readUint64(r,s),s+=8,l.xMin=a.readShort(r,s),s+=2,l.yMin=a.readShort(r,s),s+=2,l.xMax=a.readShort(r,s),s+=2,l.yMax=a.readShort(r,s),s+=2,l.macStyle=a.readUshort(r,s),s+=2,l.lowestRecPPEM=a.readUshort(r,s),s+=2,l.fontDirectionHint=a.readShort(r,s),s+=2,l.indexToLocFormat=a.readShort(r,s),s+=2,l.glyphDataFormat=a.readShort(r,s),s+=2,l},e.hhea={},e.hhea.parse=function(r,s,o){var a=e._bin,l={};return a.readFixed(r,s),s+=4,l.ascender=a.readShort(r,s),s+=2,l.descender=a.readShort(r,s),s+=2,l.lineGap=a.readShort(r,s),s+=2,l.advanceWidthMax=a.readUshort(r,s),s+=2,l.minLeftSideBearing=a.readShort(r,s),s+=2,l.minRightSideBearing=a.readShort(r,s),s+=2,l.xMaxExtent=a.readShort(r,s),s+=2,l.caretSlopeRise=a.readShort(r,s),s+=2,l.caretSlopeRun=a.readShort(r,s),s+=2,l.caretOffset=a.readShort(r,s),s+=2,s+=8,l.metricDataFormat=a.readShort(r,s),s+=2,l.numberOfHMetrics=a.readUshort(r,s),s+=2,l},e.hmtx={},e.hmtx.parse=function(r,s,o,a){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,f=0,h=0;h<a.maxp.numGlyphs;h++)h<a.hhea.numberOfHMetrics&&(u=l.readUshort(r,s),s+=2,f=l.readShort(r,s),s+=2),c.aWidth.push(u),c.lsBearing.push(f);return c},e.kern={},e.kern.parse=function(r,s,o,a){var l=e._bin,c=l.readUshort(r,s);if(s+=2,c==1)return e.kern.parseV1(r,s-2,o,a);var u=l.readUshort(r,s);s+=2;for(var f={glyph1:[],rval:[]},h=0;h<u;h++){s+=2,o=l.readUshort(r,s),s+=2;var d=l.readUshort(r,s);s+=2;var g=d>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;s=e.kern.readFormat0(r,s,f)}return f},e.kern.parseV1=function(r,s,o,a){var l=e._bin;l.readFixed(r,s),s+=4;var c=l.readUint(r,s);s+=4;for(var u={glyph1:[],rval:[]},f=0;f<c;f++){l.readUint(r,s),s+=4;var h=l.readUshort(r,s);s+=2,l.readUshort(r,s),s+=2;var d=h>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;s=e.kern.readFormat0(r,s,u)}return u},e.kern.readFormat0=function(r,s,o){var a=e._bin,l=-1,c=a.readUshort(r,s);s+=2,a.readUshort(r,s),s+=2,a.readUshort(r,s),s+=2,a.readUshort(r,s),s+=2;for(var u=0;u<c;u++){var f=a.readUshort(r,s);s+=2;var h=a.readUshort(r,s);s+=2;var d=a.readShort(r,s);s+=2,f!=l&&(o.glyph1.push(f),o.rval.push({glyph2:[],vals:[]}));var g=o.rval[o.rval.length-1];g.glyph2.push(h),g.vals.push(d),l=f}return s},e.loca={},e.loca.parse=function(r,s,o,a){var l=e._bin,c=[],u=a.head.indexToLocFormat,f=a.maxp.numGlyphs+1;if(u==0)for(var h=0;h<f;h++)c.push(l.readUshort(r,s+(h<<1))<<1);if(u==1)for(h=0;h<f;h++)c.push(l.readUint(r,s+(h<<2)));return c},e.maxp={},e.maxp.parse=function(r,s,o){var a=e._bin,l={},c=a.readUint(r,s);return s+=4,l.numGlyphs=a.readUshort(r,s),s+=2,c==65536&&(l.maxPoints=a.readUshort(r,s),s+=2,l.maxContours=a.readUshort(r,s),s+=2,l.maxCompositePoints=a.readUshort(r,s),s+=2,l.maxCompositeContours=a.readUshort(r,s),s+=2,l.maxZones=a.readUshort(r,s),s+=2,l.maxTwilightPoints=a.readUshort(r,s),s+=2,l.maxStorage=a.readUshort(r,s),s+=2,l.maxFunctionDefs=a.readUshort(r,s),s+=2,l.maxInstructionDefs=a.readUshort(r,s),s+=2,l.maxStackElements=a.readUshort(r,s),s+=2,l.maxSizeOfInstructions=a.readUshort(r,s),s+=2,l.maxComponentElements=a.readUshort(r,s),s+=2,l.maxComponentDepth=a.readUshort(r,s),s+=2),l},e.name={},e.name.parse=function(r,s,o){var a=e._bin,l={};a.readUshort(r,s),s+=2;var c=a.readUshort(r,s);s+=2,a.readUshort(r,s);for(var u,f=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],h=s+=2,d=0;d<c;d++){var g=a.readUshort(r,s);s+=2;var v=a.readUshort(r,s);s+=2;var p=a.readUshort(r,s);s+=2;var m=a.readUshort(r,s);s+=2;var S=a.readUshort(r,s);s+=2;var _=a.readUshort(r,s);s+=2;var M,A=f[m],T=h+12*c+_;if(g==0)M=a.readUnicode(r,T,S/2);else if(g==3&&v==0)M=a.readUnicode(r,T,S/2);else if(v==0)M=a.readASCII(r,T,S);else if(v==1)M=a.readUnicode(r,T,S/2);else if(v==3)M=a.readUnicode(r,T,S/2);else{if(g!=1)throw"unknown encoding "+v+", platformID: "+g;M=a.readASCII(r,T,S),console.debug("reading unknown MAC encoding "+v+" as ASCII")}var b="p"+g+","+p.toString(16);l[b]==null&&(l[b]={}),l[b][A!==void 0?A:m]=M,l[b]._lang=p}for(var O in l)if(l[O].postScriptName!=null&&l[O]._lang==1033)return l[O];for(var O in l)if(l[O].postScriptName!=null&&l[O]._lang==0)return l[O];for(var O in l)if(l[O].postScriptName!=null&&l[O]._lang==3084)return l[O];for(var O in l)if(l[O].postScriptName!=null)return l[O];for(var O in l){u=O;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(r,s,o){var a=e._bin.readUshort(r,s);s+=2;var l={};if(a==0)e["OS/2"].version0(r,s,l);else if(a==1)e["OS/2"].version1(r,s,l);else if(a==2||a==3||a==4)e["OS/2"].version2(r,s,l);else{if(a!=5)throw"unknown OS/2 table version: "+a;e["OS/2"].version5(r,s,l)}return l},e["OS/2"].version0=function(r,s,o){var a=e._bin;return o.xAvgCharWidth=a.readShort(r,s),s+=2,o.usWeightClass=a.readUshort(r,s),s+=2,o.usWidthClass=a.readUshort(r,s),s+=2,o.fsType=a.readUshort(r,s),s+=2,o.ySubscriptXSize=a.readShort(r,s),s+=2,o.ySubscriptYSize=a.readShort(r,s),s+=2,o.ySubscriptXOffset=a.readShort(r,s),s+=2,o.ySubscriptYOffset=a.readShort(r,s),s+=2,o.ySuperscriptXSize=a.readShort(r,s),s+=2,o.ySuperscriptYSize=a.readShort(r,s),s+=2,o.ySuperscriptXOffset=a.readShort(r,s),s+=2,o.ySuperscriptYOffset=a.readShort(r,s),s+=2,o.yStrikeoutSize=a.readShort(r,s),s+=2,o.yStrikeoutPosition=a.readShort(r,s),s+=2,o.sFamilyClass=a.readShort(r,s),s+=2,o.panose=a.readBytes(r,s,10),s+=10,o.ulUnicodeRange1=a.readUint(r,s),s+=4,o.ulUnicodeRange2=a.readUint(r,s),s+=4,o.ulUnicodeRange3=a.readUint(r,s),s+=4,o.ulUnicodeRange4=a.readUint(r,s),s+=4,o.achVendID=[a.readInt8(r,s),a.readInt8(r,s+1),a.readInt8(r,s+2),a.readInt8(r,s+3)],s+=4,o.fsSelection=a.readUshort(r,s),s+=2,o.usFirstCharIndex=a.readUshort(r,s),s+=2,o.usLastCharIndex=a.readUshort(r,s),s+=2,o.sTypoAscender=a.readShort(r,s),s+=2,o.sTypoDescender=a.readShort(r,s),s+=2,o.sTypoLineGap=a.readShort(r,s),s+=2,o.usWinAscent=a.readUshort(r,s),s+=2,o.usWinDescent=a.readUshort(r,s),s+=2},e["OS/2"].version1=function(r,s,o){var a=e._bin;return s=e["OS/2"].version0(r,s,o),o.ulCodePageRange1=a.readUint(r,s),s+=4,o.ulCodePageRange2=a.readUint(r,s),s+=4},e["OS/2"].version2=function(r,s,o){var a=e._bin;return s=e["OS/2"].version1(r,s,o),o.sxHeight=a.readShort(r,s),s+=2,o.sCapHeight=a.readShort(r,s),s+=2,o.usDefault=a.readUshort(r,s),s+=2,o.usBreak=a.readUshort(r,s),s+=2,o.usMaxContext=a.readUshort(r,s),s+=2},e["OS/2"].version5=function(r,s,o){var a=e._bin;return s=e["OS/2"].version2(r,s,o),o.usLowerOpticalPointSize=a.readUshort(r,s),s+=2,o.usUpperOpticalPointSize=a.readUshort(r,s),s+=2},e.post={},e.post.parse=function(r,s,o){var a=e._bin,l={};return l.version=a.readFixed(r,s),s+=4,l.italicAngle=a.readFixed(r,s),s+=4,l.underlinePosition=a.readShort(r,s),s+=2,l.underlineThickness=a.readShort(r,s),s+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(r,s){var o=r.cmap,a=-1;if(o.p0e4!=null?a=o.p0e4:o.p3e1!=null?a=o.p3e1:o.p1e0!=null?a=o.p1e0:o.p0e3!=null&&(a=o.p0e3),a==-1)throw"no familiar platform and encoding!";var l=o.tables[a];if(l.format==0)return s>=l.map.length?0:l.map[s];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(s<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>s?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[s-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:s+l.idDelta[c])}if(l.format==12){if(s>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var f=l.groups[u];if(f[0]<=s&&s<=f[1])return f[2]+(s-f[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(r,s){var o={cmds:[],crds:[]};if(r.SVG&&r.SVG.entries[s]){var a=r.SVG.entries[s];return a==null?o:(typeof a=="string"&&(a=e.SVG.toPath(a),r.SVG.entries[s]=a),a)}if(r.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:r.CFF.Private?r.CFF.Private.defaultWidthX:0,open:!1},c=r.CFF,u=r.CFF.Private;if(c.ROS){for(var f=0;c.FDSelect[f+2]<=s;)f+=2;u=c.FDArray[c.FDSelect[f+1]].Private}e.U._drawCFF(r.CFF.CharStrings[s],l,c,u,o)}else r.glyf&&e.U._drawGlyf(s,r,o);return o},e.U._drawGlyf=function(r,s,o){var a=s.glyf[r];a==null&&(a=s.glyf[r]=e.glyf._parseGlyf(s,r)),a!=null&&(a.noc>-1?e.U._simpleGlyph(a,o):e.U._compoGlyph(a,s,o))},e.U._simpleGlyph=function(r,s){for(var o=0;o<r.noc;o++){for(var a=o==0?0:r.endPts[o-1]+1,l=r.endPts[o],c=a;c<=l;c++){var u=c==a?l:c-1,f=c==l?a:c+1,h=1&r.flags[c],d=1&r.flags[u],g=1&r.flags[f],v=r.xs[c],p=r.ys[c];if(c==a)if(h){if(!d){e.U.P.moveTo(s,v,p);continue}e.U.P.moveTo(s,r.xs[u],r.ys[u])}else d?e.U.P.moveTo(s,r.xs[u],r.ys[u]):e.U.P.moveTo(s,(r.xs[u]+v)/2,(r.ys[u]+p)/2);h?d&&e.U.P.lineTo(s,v,p):g?e.U.P.qcurveTo(s,v,p,r.xs[f],r.ys[f]):e.U.P.qcurveTo(s,v,p,(v+r.xs[f])/2,(p+r.ys[f])/2)}e.U.P.closePath(s)}},e.U._compoGlyph=function(r,s,o){for(var a=0;a<r.parts.length;a++){var l={cmds:[],crds:[]},c=r.parts[a];e.U._drawGlyf(c.glyphIndex,s,l);for(var u=c.m,f=0;f<l.crds.length;f+=2){var h=l.crds[f],d=l.crds[f+1];o.crds.push(h*u.a+d*u.b+u.tx),o.crds.push(h*u.c+d*u.d+u.ty)}for(f=0;f<l.cmds.length;f++)o.cmds.push(l.cmds[f])}},e.U._getGlyphClass=function(r,s){var o=e._lctf.getInterval(s,r);return o==-1?0:s[o+2]},e.U._applySubs=function(r,s,o,a){for(var l=r.length-s-1,c=0;c<o.tabs.length;c++)if(o.tabs[c]!=null){var u,f=o.tabs[c];if(!f.coverage||(u=e._lctf.coverageIndex(f.coverage,r[s]))!=-1){if(o.ltype==1)r[s],f.fmt==1?r[s]=r[s]+f.delta:r[s]=f.newg[u];else if(o.ltype==4)for(var h=f.vals[u],d=0;d<h.length;d++){var g=h[d],v=g.chain.length;if(!(v>l)){for(var p=!0,m=0,S=0;S<v;S++){for(;r[s+m+(1+S)]==-1;)m++;g.chain[S]!=r[s+m+(1+S)]&&(p=!1)}if(p){for(r[s]=g.nglyph,S=0;S<v+m;S++)r[s+S+1]=-1;break}}}else if(o.ltype==5&&f.fmt==2)for(var _=e._lctf.getInterval(f.cDef,r[s]),M=f.cDef[_+2],A=f.scset[M],T=0;T<A.length;T++){var b=A[T],O=b.input;if(!(O.length>l)){for(p=!0,S=0;S<O.length;S++){var J=e._lctf.getInterval(f.cDef,r[s+1+S]);if(_==-1&&f.cDef[J+2]!=O[S]){p=!1;break}}if(p){var x=b.substLookupRecords;for(d=0;d<x.length;d+=2)x[d],x[d+1]}}}else if(o.ltype==6&&f.fmt==3){if(!e.U._glsCovered(r,f.backCvg,s-f.backCvg.length)||!e.U._glsCovered(r,f.inptCvg,s)||!e.U._glsCovered(r,f.ahedCvg,s+f.inptCvg.length))continue;var w=f.lookupRec;for(T=0;T<w.length;T+=2){_=w[T];var L=a[w[T+1]];e.U._applySubs(r,s+_,L,a)}}}}},e.U._glsCovered=function(r,s,o){for(var a=0;a<s.length;a++)if(e._lctf.coverageIndex(s[a],r[o+a])==-1)return!1;return!0},e.U.glyphsToPath=function(r,s,o){for(var a={cmds:[],crds:[]},l=0,c=0;c<s.length;c++){var u=s[c];if(u!=-1){for(var f=c<s.length-1&&s[c+1]!=-1?s[c+1]:0,h=e.U.glyphToPath(r,u),d=0;d<h.crds.length;d+=2)a.crds.push(h.crds[d]+l),a.crds.push(h.crds[d+1]);for(o&&a.cmds.push(o),d=0;d<h.cmds.length;d++)a.cmds.push(h.cmds[d]);o&&a.cmds.push("X"),l+=r.hmtx.aWidth[u],c<s.length-1&&(l+=e.U.getPairAdjustment(r,u,f))}}return a},e.U.P={},e.U.P.moveTo=function(r,s,o){r.cmds.push("M"),r.crds.push(s,o)},e.U.P.lineTo=function(r,s,o){r.cmds.push("L"),r.crds.push(s,o)},e.U.P.curveTo=function(r,s,o,a,l,c,u){r.cmds.push("C"),r.crds.push(s,o,a,l,c,u)},e.U.P.qcurveTo=function(r,s,o,a,l){r.cmds.push("Q"),r.crds.push(s,o,a,l)},e.U.P.closePath=function(r){r.cmds.push("Z")},e.U._drawCFF=function(r,s,o,a,l){for(var c=s.stack,u=s.nStems,f=s.haveWidth,h=s.width,d=s.open,g=0,v=s.x,p=s.y,m=0,S=0,_=0,M=0,A=0,T=0,b=0,O=0,J=0,x=0,w={val:0,size:0};g<r.length;){e.CFF.getCharString(r,g,w);var L=w.val;if(g+=w.size,L=="o1"||L=="o18")c.length%2!=0&&!f&&(h=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(L=="o3"||L=="o23")c.length%2!=0&&!f&&(h=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(L=="o4")c.length>1&&!f&&(h=c.shift()+a.nominalWidthX,f=!0),d&&e.U.P.closePath(l),p+=c.pop(),e.U.P.moveTo(l,v,p),d=!0;else if(L=="o5")for(;c.length>0;)v+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,v,p);else if(L=="o6"||L=="o7")for(var V=c.length,P=L=="o6",j=0;j<V;j++){var G=c.shift();P?v+=G:p+=G,P=!P,e.U.P.lineTo(l,v,p)}else if(L=="o8"||L=="o24"){V=c.length;for(var te=0;te+6<=V;)m=v+c.shift(),S=p+c.shift(),_=m+c.shift(),M=S+c.shift(),v=_+c.shift(),p=M+c.shift(),e.U.P.curveTo(l,m,S,_,M,v,p),te+=6;L=="o24"&&(v+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,v,p))}else{if(L=="o11")break;if(L=="o1234"||L=="o1235"||L=="o1236"||L=="o1237")L=="o1234"&&(S=p,_=(m=v+c.shift())+c.shift(),x=M=S+c.shift(),T=M,O=p,v=(b=(A=(J=_+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,m,S,_,M,J,x),e.U.P.curveTo(l,A,T,b,O,v,p)),L=="o1235"&&(m=v+c.shift(),S=p+c.shift(),_=m+c.shift(),M=S+c.shift(),J=_+c.shift(),x=M+c.shift(),A=J+c.shift(),T=x+c.shift(),b=A+c.shift(),O=T+c.shift(),v=b+c.shift(),p=O+c.shift(),c.shift(),e.U.P.curveTo(l,m,S,_,M,J,x),e.U.P.curveTo(l,A,T,b,O,v,p)),L=="o1236"&&(m=v+c.shift(),S=p+c.shift(),_=m+c.shift(),x=M=S+c.shift(),T=M,b=(A=(J=_+c.shift())+c.shift())+c.shift(),O=T+c.shift(),v=b+c.shift(),e.U.P.curveTo(l,m,S,_,M,J,x),e.U.P.curveTo(l,A,T,b,O,v,p)),L=="o1237"&&(m=v+c.shift(),S=p+c.shift(),_=m+c.shift(),M=S+c.shift(),J=_+c.shift(),x=M+c.shift(),A=J+c.shift(),T=x+c.shift(),b=A+c.shift(),O=T+c.shift(),Math.abs(b-v)>Math.abs(O-p)?v=b+c.shift():p=O+c.shift(),e.U.P.curveTo(l,m,S,_,M,J,x),e.U.P.curveTo(l,A,T,b,O,v,p));else if(L=="o14"){if(c.length>0&&!f&&(h=c.shift()+o.nominalWidthX,f=!0),c.length==4){var Z=c.shift(),Y=c.shift(),ee=c.shift(),F=c.shift(),Q=e.CFF.glyphBySE(o,ee),ne=e.CFF.glyphBySE(o,F);e.U._drawCFF(o.CharStrings[Q],s,o,a,l),s.x=Z,s.y=Y,e.U._drawCFF(o.CharStrings[ne],s,o,a,l)}d&&(e.U.P.closePath(l),d=!1)}else if(L=="o19"||L=="o20")c.length%2!=0&&!f&&(h=c.shift()+a.nominalWidthX),u+=c.length>>1,c.length=0,f=!0,g+=u+7>>3;else if(L=="o21")c.length>2&&!f&&(h=c.shift()+a.nominalWidthX,f=!0),p+=c.pop(),v+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,v,p),d=!0;else if(L=="o22")c.length>1&&!f&&(h=c.shift()+a.nominalWidthX,f=!0),v+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,v,p),d=!0;else if(L=="o25"){for(;c.length>6;)v+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,v,p);m=v+c.shift(),S=p+c.shift(),_=m+c.shift(),M=S+c.shift(),v=_+c.shift(),p=M+c.shift(),e.U.P.curveTo(l,m,S,_,M,v,p)}else if(L=="o26")for(c.length%2&&(v+=c.shift());c.length>0;)m=v,S=p+c.shift(),v=_=m+c.shift(),p=(M=S+c.shift())+c.shift(),e.U.P.curveTo(l,m,S,_,M,v,p);else if(L=="o27")for(c.length%2&&(p+=c.shift());c.length>0;)S=p,_=(m=v+c.shift())+c.shift(),M=S+c.shift(),v=_+c.shift(),p=M,e.U.P.curveTo(l,m,S,_,M,v,p);else if(L=="o10"||L=="o29"){var z=L=="o10"?a:o;if(c.length==0)console.debug("error: empty stack");else{var X=c.pop(),ce=z.Subrs[X+z.Bias];s.x=v,s.y=p,s.nStems=u,s.haveWidth=f,s.width=h,s.open=d,e.U._drawCFF(ce,s,o,a,l),v=s.x,p=s.y,u=s.nStems,f=s.haveWidth,h=s.width,d=s.open}}else if(L=="o30"||L=="o31"){var se=c.length,fe=(te=0,L=="o31");for(te+=se-(V=-3&se);te<V;)fe?(S=p,_=(m=v+c.shift())+c.shift(),p=(M=S+c.shift())+c.shift(),V-te==5?(v=_+c.shift(),te++):v=_,fe=!1):(m=v,S=p+c.shift(),_=m+c.shift(),M=S+c.shift(),v=_+c.shift(),V-te==5?(p=M+c.shift(),te++):p=M,fe=!0),e.U.P.curveTo(l,m,S,_,M,v,p),te+=4}else{if((L+"").charAt(0)=="o")throw console.debug("Unknown operation: "+L,r),L;c.push(L)}}}s.x=v,s.y=p,s.nStems=u,s.haveWidth=f,s.width=h,s.open=d};var t=e,i={Typr:t};return n.Typr=t,n.default=i,Object.defineProperty(n,"__esModule",{value:!0}),n}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function VT(){return function(n){var e=Uint8Array,t=Uint16Array,i=Uint32Array,r=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),s=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),o=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=function(L,V){for(var P=new t(31),j=0;j<31;++j)P[j]=V+=1<<L[j-1];var G=new i(P[30]);for(j=1;j<30;++j)for(var te=P[j];te<P[j+1];++te)G[te]=te-P[j]<<5|j;return[P,G]},l=a(r,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var f=a(s,0)[0],h=new t(32768),d=0;d<32768;++d){var g=(43690&d)>>>1|(21845&d)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,h[d]=((65280&g)>>>8|(255&g)<<8)>>>1}var v=function(L,V,P){for(var j=L.length,G=0,te=new t(V);G<j;++G)++te[L[G]-1];var Z,Y=new t(V);for(G=0;G<V;++G)Y[G]=Y[G-1]+te[G-1]<<1;if(P){Z=new t(1<<V);var ee=15-V;for(G=0;G<j;++G)if(L[G])for(var F=G<<4|L[G],Q=V-L[G],ne=Y[L[G]-1]++<<Q,z=ne|(1<<Q)-1;ne<=z;++ne)Z[h[ne]>>>ee]=F}else for(Z=new t(j),G=0;G<j;++G)L[G]&&(Z[G]=h[Y[L[G]-1]++]>>>15-L[G]);return Z},p=new e(288);for(d=0;d<144;++d)p[d]=8;for(d=144;d<256;++d)p[d]=9;for(d=256;d<280;++d)p[d]=7;for(d=280;d<288;++d)p[d]=8;var m=new e(32);for(d=0;d<32;++d)m[d]=5;var S=v(p,9,1),_=v(m,5,1),M=function(L){for(var V=L[0],P=1;P<L.length;++P)L[P]>V&&(V=L[P]);return V},A=function(L,V,P){var j=V/8|0;return(L[j]|L[j+1]<<8)>>(7&V)&P},T=function(L,V){var P=V/8|0;return(L[P]|L[P+1]<<8|L[P+2]<<16)>>(7&V)},b=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],O=function(L,V,P){var j=new Error(V||b[L]);if(j.code=L,Error.captureStackTrace&&Error.captureStackTrace(j,O),!P)throw j;return j},J=function(L,V,P){var j=L.length;if(!j||P&&!P.l&&j<5)return V||new e(0);var G=!V||P,te=!P||P.i;P||(P={}),V||(V=new e(3*j));var Z,Y=function(ye){var Ue=V.length;if(ye>Ue){var Ne=new e(Math.max(2*Ue,ye));Ne.set(V),V=Ne}},ee=P.f||0,F=P.p||0,Q=P.b||0,ne=P.l,z=P.d,X=P.m,ce=P.n,se=8*j;do{if(!ne){P.f=ee=A(L,F,1);var fe=A(L,F+1,3);if(F+=3,!fe){var ve=L[(y=((Z=F)/8|0)+(7&Z&&1)+4)-4]|L[y-3]<<8,Te=y+ve;if(Te>j){te&&O(0);break}G&&Y(Q+ve),V.set(L.subarray(y,Te),Q),P.b=Q+=ve,P.p=F=8*Te;continue}if(fe==1)ne=S,z=_,X=9,ce=5;else if(fe==2){var _e=A(L,F,31)+257,B=A(L,F+10,15)+4,ke=_e+A(L,F+5,31)+1;F+=14;for(var C=new e(ke),U=new e(19),H=0;H<B;++H)U[o[H]]=A(L,F+3*H,7);F+=3*B;var ie=M(U),W=(1<<ie)-1,E=v(U,ie,1);for(H=0;H<ke;){var y,R=E[A(L,F,W)];if(F+=15&R,(y=R>>>4)<16)C[H++]=y;else{var K=0,N=0;for(y==16?(N=3+A(L,F,3),F+=2,K=C[H-1]):y==17?(N=3+A(L,F,7),F+=3):y==18&&(N=11+A(L,F,127),F+=7);N--;)C[H++]=K}}var q=C.subarray(0,_e),re=C.subarray(_e);X=M(q),ce=M(re),ne=v(q,X,1),z=v(re,ce,1)}else O(1);if(F>se){te&&O(0);break}}G&&Y(Q+131072);for(var ue=(1<<X)-1,oe=(1<<ce)-1,he=F;;he=F){var xe=(K=ne[T(L,F)&ue])>>>4;if((F+=15&K)>se){te&&O(0);break}if(K||O(2),xe<256)V[Q++]=xe;else{if(xe==256){he=F,ne=null;break}var le=xe-254;if(xe>264){var Le=r[H=xe-257];le=A(L,F,(1<<Le)-1)+c[H],F+=Le}var De=z[T(L,F)&oe],Ce=De>>>4;if(De||O(3),F+=15&De,re=f[Ce],Ce>3&&(Le=s[Ce],re+=T(L,F)&(1<<Le)-1,F+=Le),F>se){te&&O(0);break}G&&Y(Q+131072);for(var Ae=Q+le;Q<Ae;Q+=4)V[Q]=V[Q-re],V[Q+1]=V[Q+1-re],V[Q+2]=V[Q+2-re],V[Q+3]=V[Q+3-re];Q=Ae}}P.l=ne,P.p=he,P.b=Q,ne&&(ee=1,P.m=X,P.d=z,P.n=ce)}while(!ee);return Q==V.length?V:function(ye,Ue,Ne){(Ue==null||Ue<0)&&(Ue=0),(Ne==null||Ne>ye.length)&&(Ne=ye.length);var k=new(ye instanceof t?t:ye instanceof i?i:e)(Ne-Ue);return k.set(ye.subarray(Ue,Ne)),k}(V,0,Q)},x=new e(0),w=typeof TextDecoder<"u"&&new TextDecoder;try{w.decode(x,{stream:!0})}catch{}return n.convert_streams=function(L){var V=new DataView(L),P=0;function j(){var _e=V.getUint16(P);return P+=2,_e}function G(){var _e=V.getUint32(P);return P+=4,_e}function te(_e){ve.setUint16(Te,_e),Te+=2}function Z(_e){ve.setUint32(Te,_e),Te+=4}for(var Y={signature:G(),flavor:G(),length:G(),numTables:j(),reserved:j(),totalSfntSize:G(),majorVersion:j(),minorVersion:j(),metaOffset:G(),metaLength:G(),metaOrigLength:G(),privOffset:G(),privLength:G()},ee=0;Math.pow(2,ee)<=Y.numTables;)ee++;ee--;for(var F=16*Math.pow(2,ee),Q=16*Y.numTables-F,ne=12,z=[],X=0;X<Y.numTables;X++)z.push({tag:G(),offset:G(),compLength:G(),origLength:G(),origChecksum:G()}),ne+=16;var ce,se=new Uint8Array(12+16*z.length+z.reduce(function(_e,B){return _e+B.origLength+4},0)),fe=se.buffer,ve=new DataView(fe),Te=0;return Z(Y.flavor),te(Y.numTables),te(F),te(ee),te(Q),z.forEach(function(_e){Z(_e.tag),Z(_e.origChecksum),Z(ne),Z(_e.origLength),_e.outOffset=ne,(ne+=_e.origLength)%4!=0&&(ne+=4-ne%4)}),z.forEach(function(_e){var B,ke=L.slice(_e.offset,_e.offset+_e.compLength);if(_e.compLength!=_e.origLength){var C=new Uint8Array(_e.origLength);B=new Uint8Array(ke,2),J(B,C)}else C=new Uint8Array(ke);se.set(C,_e.outOffset);var U=0;(ne=_e.outOffset+_e.origLength)%4!=0&&(U=4-ne%4),se.set(new Uint8Array(U).buffer,_e.outOffset+_e.origLength),ce=ne+U}),fe.slice(0,ce)},Object.defineProperty(n,"__esModule",{value:!0}),n}({}).convert_streams}function WT(n,e){const t={M:2,L:2,Q:4,C:6,Z:0},i={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},r=1,s=2,o=4,a=8,l=16,c=32;let u;function f(b){if(!u){const O={R:s,L:r,D:o,C:l,U:c,T:a};u=new Map;for(let J in i){let x=0;i[J].split(",").forEach(w=>{let[L,V]=w.split("+");L=parseInt(L,36),V=V?parseInt(V,36):0,u.set(x+=L,O[J]);for(let P=V;P--;)u.set(++x,O[J])})}}return u.get(b)||c}const h=1,d=2,g=3,v=4,p=[null,"isol","init","fina","medi"];function m(b){const O=new Uint8Array(b.length);let J=c,x=h,w=-1;for(let L=0;L<b.length;L++){const V=b.codePointAt(L);let P=f(V)|0,j=h;P&a||(J&(r|o|l)?P&(s|o|l)?(j=g,(x===h||x===g)&&O[w]++):P&(r|c)&&(x===d||x===v)&&O[w]--:J&(s|c)&&(x===d||x===v)&&O[w]--,x=O[L]=j,J=P,w=L,V>65535&&L++)}return O}function S(b,O){const J=[];for(let w=0;w<O.length;w++){const L=O.codePointAt(w);L>65535&&w++,J.push(n.U.codeToGlyph(b,L))}const x=b.GSUB;if(x){const{lookupList:w,featureList:L}=x;let V;const P=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,j=[];L.forEach(G=>{if(P.test(G.tag))for(let te=0;te<G.tab.length;te++){if(j[G.tab[te]])continue;j[G.tab[te]]=!0;const Z=w[G.tab[te]],Y=/^(isol|init|fina|medi)$/.test(G.tag);Y&&!V&&(V=m(O));for(let ee=0;ee<J.length;ee++)(!V||!Y||p[V[ee]]===G.tag)&&n.U._applySubs(J,ee,Z,w)}})}return J}function _(b,O){const J=new Int16Array(O.length*3);let x=0;for(;x<O.length;x++){const P=O[x];if(P===-1)continue;J[x*3+2]=b.hmtx.aWidth[P];const j=b.GPOS;if(j){const G=j.lookupList;for(let te=0;te<G.length;te++){const Z=G[te];for(let Y=0;Y<Z.tabs.length;Y++){const ee=Z.tabs[Y];if(Z.ltype===1){if(n._lctf.coverageIndex(ee.coverage,P)!==-1&&ee.pos){V(ee.pos,x);break}}else if(Z.ltype===2){let F=null,Q=w();if(Q!==-1){const ne=n._lctf.coverageIndex(ee.coverage,O[Q]);if(ne!==-1){if(ee.fmt===1){const z=ee.pairsets[ne];for(let X=0;X<z.length;X++)z[X].gid2===P&&(F=z[X])}else if(ee.fmt===2){const z=n.U._getGlyphClass(O[Q],ee.classDef1),X=n.U._getGlyphClass(P,ee.classDef2);F=ee.matrix[z][X]}if(F){F.val1&&V(F.val1,Q),F.val2&&V(F.val2,x);break}}}}else if(Z.ltype===4){const F=n._lctf.coverageIndex(ee.markCoverage,P);if(F!==-1){const Q=w(L),ne=Q===-1?-1:n._lctf.coverageIndex(ee.baseCoverage,O[Q]);if(ne!==-1){const z=ee.markArray[F],X=ee.baseArray[ne][z.markClass];J[x*3]=X.x-z.x+J[Q*3]-J[Q*3+2],J[x*3+1]=X.y-z.y+J[Q*3+1];break}}}else if(Z.ltype===6){const F=n._lctf.coverageIndex(ee.mark1Coverage,P);if(F!==-1){const Q=w();if(Q!==-1){const ne=O[Q];if(M(b,ne)===3){const z=n._lctf.coverageIndex(ee.mark2Coverage,ne);if(z!==-1){const X=ee.mark1Array[F],ce=ee.mark2Array[z][X.markClass];J[x*3]=ce.x-X.x+J[Q*3]-J[Q*3+2],J[x*3+1]=ce.y-X.y+J[Q*3+1];break}}}}}}}}else if(b.kern&&!b.cff){const G=w();if(G!==-1){const te=b.kern.glyph1.indexOf(O[G]);if(te!==-1){const Z=b.kern.rval[te].glyph2.indexOf(P);Z!==-1&&(J[G*3+2]+=b.kern.rval[te].vals[Z])}}}}return J;function w(P){for(let j=x-1;j>=0;j--)if(O[j]!==-1&&(!P||P(O[j])))return j;return-1}function L(P){return M(b,P)===1}function V(P,j){for(let G=0;G<3;G++)J[j*3+G]+=P[G]||0}}function M(b,O){const J=b.GDEF&&b.GDEF.glyphClassDef;return J?n.U._getGlyphClass(O,J):0}function A(...b){for(let O=0;O<b.length;O++)if(typeof b[O]=="number")return b[O]}function T(b){const O=Object.create(null),J=b["OS/2"],x=b.hhea,w=b.head.unitsPerEm,L=A(J&&J.sTypoAscender,x&&x.ascender,w),V={unitsPerEm:w,ascender:L,descender:A(J&&J.sTypoDescender,x&&x.descender,0),capHeight:A(J&&J.sCapHeight,L),xHeight:A(J&&J.sxHeight,L),lineGap:A(J&&J.sTypoLineGap,x&&x.lineGap),supportsCodePoint(P){return n.U.codeToGlyph(b,P)>0},forEachGlyph(P,j,G,te){let Z=0;const Y=1/V.unitsPerEm*j,ee=S(b,P);let F=0;const Q=_(b,ee);return ee.forEach((ne,z)=>{if(ne!==-1){let X=O[ne];if(!X){const{cmds:ce,crds:se}=n.U.glyphToPath(b,ne);let fe="",ve=0;for(let C=0,U=ce.length;C<U;C++){const H=t[ce[C]];fe+=ce[C];for(let ie=1;ie<=H;ie++)fe+=(ie>1?",":"")+se[ve++]}let Te,_e,B,ke;if(se.length){Te=_e=1/0,B=ke=-1/0;for(let C=0,U=se.length;C<U;C+=2){let H=se[C],ie=se[C+1];H<Te&&(Te=H),ie<_e&&(_e=ie),H>B&&(B=H),ie>ke&&(ke=ie)}}else Te=B=_e=ke=0;X=O[ne]={index:ne,advanceWidth:b.hmtx.aWidth[ne],xMin:Te,yMin:_e,xMax:B,yMax:ke,path:fe}}te.call(null,X,Z+Q[z*3]*Y,Q[z*3+1]*Y,F),Z+=Q[z*3+2]*Y,G&&(Z+=G*j)}F+=P.codePointAt(F)>65535?2:1}),Z}};return V}return function(O){const J=new Uint8Array(O,0,4),x=n._bin.readASCII(J,0,4);if(x==="wOFF")O=e(O);else if(x==="wOF2")throw new Error("woff2 fonts not supported");return T(n.parse(O)[0])}}const XT=Hs({name:"Typr Font Parser",dependencies:[HT,VT,WT],init(n,e,t){const i=n(),r=e();return t(i,r)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function jT(){return function(n){var e=function(){this.buckets=new Map};e.prototype.add=function(_){var M=_>>5;this.buckets.set(M,(this.buckets.get(M)||0)|1<<(31&_))},e.prototype.has=function(_){var M=this.buckets.get(_>>5);return M!==void 0&&(M&1<<(31&_))!=0},e.prototype.serialize=function(){var _=[];return this.buckets.forEach(function(M,A){_.push((+A).toString(36)+":"+M.toString(36))}),_.join(",")},e.prototype.deserialize=function(_){var M=this;this.buckets.clear(),_.split(",").forEach(function(A){var T=A.split(":");M.buckets.set(parseInt(T[0],36),parseInt(T[1],36))})};var t=Math.pow(2,8),i=t-1,r=~i;function s(_){var M=function(T){return T&r}(_).toString(16),A=function(T){return(T&r)+t-1}(_).toString(16);return"codepoint-index/plane"+(_>>16)+"/"+M+"-"+A+".json"}function o(_,M){var A=_&i,T=M.codePointAt(A/6|0);return((T=(T||48)-48)&1<<A%6)!=0}function a(_,M){var A;(A=_,A.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(T){return T.split("-").map(function(b){return parseInt(b.trim(),16)})})).forEach(function(T){var b=T[0],O=T[1];O===void 0&&(O=b),M(b,O)})}function l(_,M){a(_,function(A,T){for(var b=A;b<=T;b++)M(b)})}var c={},u={},f=new WeakMap,h="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(_){var M=f.get(_);return M||(M=new e,l(_.ranges,function(A){return M.add(A)}),f.set(_,M)),M}var g,v=new Map;function p(_,M,A){return _[M]?M:_[A]?A:function(T){for(var b in T)return b}(_)}function m(_,M){var A=M;if(!_.includes(A)){A=1/0;for(var T=0;T<_.length;T++)Math.abs(_[T]-M)<Math.abs(A-M)&&(A=_[T])}return A}function S(_){return g||(g=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(M){g.add(M)})),g.has(_)}return n.CodePointSet=e,n.clearCache=function(){c={},u={}},n.getFontsForString=function(_,M){M===void 0&&(M={});var A,T=M.lang;T===void 0&&(T=/\p{Script=Hangul}/u.test(A=_)?"ko":/\p{Script=Hiragana}|\p{Script=Katakana}/u.test(A)?"ja":"en");var b=M.category;b===void 0&&(b="sans-serif");var O=M.style;O===void 0&&(O="normal");var J=M.weight;J===void 0&&(J=400);var x=(M.dataUrl||h).replace(/\/$/g,""),w=new Map,L=new Uint8Array(_.length),V={},P={},j=new Array(_.length),G=new Map,te=!1;function Z(F){var Q=v.get(F);return Q||(Q=fetch(x+"/"+F).then(function(ne){if(!ne.ok)throw new Error(ne.statusText);return ne.json().then(function(z){if(!Array.isArray(z)||z[0]!==1)throw new Error("Incorrect schema version; need 1, got "+z[0]);return z[1]})}).catch(function(ne){if(x!==h)return te||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+x+'", trying default CDN. '+ne.message),te=!0),x=h,v.delete(F),Z(F);throw ne}),v.set(F,Q)),Q}for(var Y=function(F){var Q=_.codePointAt(F),ne=s(Q);j[F]=ne,c[ne]||G.has(ne)||G.set(ne,Z(ne).then(function(z){c[ne]=z})),Q>65535&&(F++,ee=F)},ee=0;ee<_.length;ee++)Y(ee);return Promise.all(G.values()).then(function(){G.clear();for(var F=function(ne){var z=_.codePointAt(ne),X=null,ce=c[j[ne]],se=void 0;for(var fe in ce){var ve=P[fe];if(ve===void 0&&(ve=P[fe]=new RegExp(fe).test(T||"en")),ve){for(var Te in se=fe,ce[fe])if(o(z,ce[fe][Te])){X=Te;break}break}}if(!X){e:for(var _e in ce)if(_e!==se){for(var B in ce[_e])if(o(z,ce[_e][B])){X=B;break e}}}X||(console.debug("No font coverage for U+"+z.toString(16)),X="latin"),j[ne]=X,u[X]||G.has(X)||G.set(X,Z("font-meta/"+X+".json").then(function(ke){u[X]=ke})),z>65535&&(ne++,Q=ne)},Q=0;Q<_.length;Q++)F(Q);return Promise.all(G.values())}).then(function(){for(var F,Q=null,ne=0;ne<_.length;ne++){var z=_.codePointAt(ne);if(Q&&(S(z)||d(Q).has(z)))L[ne]=L[ne-1];else{Q=u[j[ne]];var X=V[Q.id];if(!X){var ce=Q.typeforms,se=p(ce,b,"sans-serif"),fe=p(ce[se],O,"normal"),ve=m((F=ce[se])===null||F===void 0?void 0:F[fe],J);X=V[Q.id]=x+"/font-files/"+Q.id+"/"+se+"."+fe+"."+ve+".woff"}var Te=w.get(X);Te==null&&(Te=w.size,w.set(X,Te)),L[ne]=Te}z>65535&&(ne++,L[ne]=L[ne-1])}return{fontUrls:Array.from(w.keys()),chars:L}})},Object.defineProperty(n,"__esModule",{value:!0}),n}({})}function YT(n,e){const t=Object.create(null),i=Object.create(null);function r(o,a){const l=c=>{console.error(`Failure loading font ${o}`,c)};try{const c=new XMLHttpRequest;c.open("get",o,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const u=n(c.response);u.src=o,a(u)}catch(u){l(u)}},c.onerror=l,c.send()}catch(c){l(c)}}function s(o,a){let l=t[o];l?a(l):i[o]?i[o].push(a):(i[o]=[a],r(o,c=>{c.src=o,t[o]=c,i[o].forEach(u=>u(c)),delete i[o]}))}return function(o,a,{lang:l,fonts:c=[],style:u="normal",weight:f="normal",unicodeFontsURL:h}={}){const d=new Uint8Array(o.length),g=[];o.length||S();const v=new Map,p=[];if(u!=="italic"&&(u="normal"),typeof f!="number"&&(f=f==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(M=>!M.lang||M.lang.test(l)).reverse(),c.length){let b=0;(function O(J=0){for(let x=J,w=o.length;x<w;x++){const L=o.codePointAt(x);if(b===1&&g[d[x-1]].supportsCodePoint(L)||/\s/.test(o[x]))d[x]=d[x-1],b===2&&(p[p.length-1][1]=x);else for(let V=d[x],P=c.length;V<=P;V++)if(V===P){const j=b===2?p[p.length-1]:p[p.length]=[x,x];j[1]=x,b=2}else{d[x]=V;const{src:j,unicodeRange:G}=c[V];if(!G||_(L,G)){const te=t[j];if(!te){s(j,()=>{O(x)});return}if(te.supportsCodePoint(L)){let Z=v.get(te);typeof Z!="number"&&(Z=g.length,g.push(te),v.set(te,Z)),d[x]=Z,b=1;break}}}L>65535&&x+1<w&&(d[x+1]=d[x],x++,b===2&&(p[p.length-1][1]=x))}m()})()}else p.push([0,o.length-1]),m();function m(){if(p.length){const M=p.map(A=>o.substring(A[0],A[1]+1)).join(`
`);e.getFontsForString(M,{lang:l||void 0,style:u,weight:f,dataUrl:h}).then(({fontUrls:A,chars:T})=>{const b=g.length;let O=0;p.forEach(x=>{for(let w=0,L=x[1]-x[0];w<=L;w++)d[x[0]+w]=T[O++]+b;O++});let J=0;A.forEach((x,w)=>{s(x,L=>{g[w+b]=L,++J===A.length&&S()})})})}else S()}function S(){a({chars:d,fonts:g})}function _(M,A){for(let T=0;T<A.length;T++){const[b,O=b]=A[T];if(b<=M&&M<=O)return!0}return!1}}}const qT=Hs({name:"FontResolver",dependencies:[YT,XT,jT],init(n,e,t){return n(e,t())}});function $T(n,e){const i=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,r="[^\\S\\u00A0]",s=new RegExp(`${r}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function o({text:g,lang:v,fonts:p,style:m,weight:S,preResolvedFonts:_,unicodeFontsURL:M},A){const T=({chars:b,fonts:O})=>{let J,x;const w=[];for(let L=0;L<b.length;L++)b[L]!==x?(x=b[L],w.push(J={start:L,end:L,fontObj:O[b[L]]})):J.end=L;A(w)};_?T(_):n(g,T,{lang:v,fonts:p,style:m,weight:S,unicodeFontsURL:M})}function a({text:g="",font:v,lang:p,sdfGlyphSize:m=64,fontSize:S=400,fontWeight:_=1,fontStyle:M="normal",letterSpacing:A=0,lineHeight:T="normal",maxWidth:b=1/0,direction:O,textAlign:J="left",textIndent:x=0,whiteSpace:w="normal",overflowWrap:L="normal",anchorX:V=0,anchorY:P=0,metricsOnly:j=!1,unicodeFontsURL:G,preResolvedFonts:te=null,includeCaretPositions:Z=!1,chunkedBoundsSize:Y=8192,colorRanges:ee=null},F){const Q=f(),ne={fontLoad:0,typesetting:0};g.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),S=+S,A=+A,b=+b,T=T||"normal",x=+x,o({text:g,lang:p,style:M,weight:_,fonts:typeof v=="string"?[{src:v}]:v,unicodeFontsURL:G,preResolvedFonts:te},z=>{ne.fontLoad=f()-Q;const X=isFinite(b);let ce=null,se=null,fe=null,ve=null,Te=null,_e=null,B=null,ke=null,C=0,U=0,H=w!=="nowrap";const ie=new Map,W=f();let E=x,y=0,R=new h;const K=[R];z.forEach(oe=>{const{fontObj:he}=oe,{ascender:xe,descender:le,unitsPerEm:Le,lineGap:De,capHeight:Ce,xHeight:Ae}=he;let ye=ie.get(he);if(!ye){const be=S/Le,D=T==="normal"?(xe-le+De)*be:T*S,Me=(D-(xe-le)*be)/2,Se=Math.min(D,(xe-le)*be),Ee=(xe+le)/2*be+Se/2;ye={index:ie.size,src:he.src,fontObj:he,fontSizeMult:be,unitsPerEm:Le,ascender:xe*be,descender:le*be,capHeight:Ce*be,xHeight:Ae*be,lineHeight:D,baseline:-Me-xe*be,caretTop:Ee,caretBottom:Ee-Se},ie.set(he,ye)}const{fontSizeMult:Ue}=ye,Ne=g.slice(oe.start,oe.end+1);let k,ge;he.forEachGlyph(Ne,S,A,(be,D,Me,Se)=>{D+=y,Se+=oe.start,k=D,ge=be;const Ee=g.charAt(Se),Oe=be.advanceWidth*Ue,Ge=R.count;let Be;if("isEmpty"in be||(be.isWhitespace=!!Ee&&new RegExp(r).test(Ee),be.canBreakAfter=!!Ee&&s.test(Ee),be.isEmpty=be.xMin===be.xMax||be.yMin===be.yMax||i.test(Ee)),!be.isWhitespace&&!be.isEmpty&&U++,H&&X&&!be.isWhitespace&&D+Oe+E>b&&Ge){if(R.glyphAt(Ge-1).glyphObj.canBreakAfter)Be=new h,E=-D;else for(let it=Ge;it--;)if(it===0&&L==="break-word"){Be=new h,E=-D;break}else if(R.glyphAt(it).glyphObj.canBreakAfter){Be=R.splitAt(it+1);const Xe=Be.glyphAt(0).x;E-=Xe;for(let Ke=Be.count;Ke--;)Be.glyphAt(Ke).x-=Xe;break}Be&&(R.isSoftWrapped=!0,R=Be,K.push(R),C=b)}let Ve=R.glyphAt(R.count);Ve.glyphObj=be,Ve.x=D+E,Ve.y=Me,Ve.width=Oe,Ve.charIndex=Se,Ve.fontData=ye,Ee===`
`&&(R=new h,K.push(R),E=-(D+Oe+A*S)+x)}),y=k+ge.advanceWidth*Ue+A*S});let N=0;K.forEach(oe=>{let he=!0;for(let xe=oe.count;xe--;){const le=oe.glyphAt(xe);he&&!le.glyphObj.isWhitespace&&(oe.width=le.x+le.width,oe.width>C&&(C=oe.width),he=!1);let{lineHeight:Le,capHeight:De,xHeight:Ce,baseline:Ae}=le.fontData;Le>oe.lineHeight&&(oe.lineHeight=Le);const ye=Ae-oe.baseline;ye<0&&(oe.baseline+=ye,oe.cap+=ye,oe.ex+=ye),oe.cap=Math.max(oe.cap,oe.baseline+De),oe.ex=Math.max(oe.ex,oe.baseline+Ce)}oe.baseline-=N,oe.cap-=N,oe.ex-=N,N+=oe.lineHeight});let q=0,re=0;if(V&&(typeof V=="number"?q=-V:typeof V=="string"&&(q=-C*(V==="left"?0:V==="center"?.5:V==="right"?1:c(V)))),P&&(typeof P=="number"?re=-P:typeof P=="string"&&(re=P==="top"?0:P==="top-baseline"?-K[0].baseline:P==="top-cap"?-K[0].cap:P==="top-ex"?-K[0].ex:P==="middle"?N/2:P==="bottom"?N:P==="bottom-baseline"?-K[K.length-1].baseline:c(P)*N)),!j){const oe=e.getEmbeddingLevels(g,O);ce=new Uint16Array(U),se=new Uint8Array(U),fe=new Float32Array(U*2),ve={},B=[1/0,1/0,-1/0,-1/0],ke=[],Z&&(_e=new Float32Array(g.length*4)),ee&&(Te=new Uint8Array(U*3));let he=0,xe=-1,le=-1,Le,De;if(K.forEach((Ce,Ae)=>{let{count:ye,width:Ue}=Ce;if(ye>0){let Ne=0;for(let Se=ye;Se--&&Ce.glyphAt(Se).glyphObj.isWhitespace;)Ne++;let k=0,ge=0;if(J==="center")k=(C-Ue)/2;else if(J==="right")k=C-Ue;else if(J==="justify"&&Ce.isSoftWrapped){let Se=0;for(let Ee=ye-Ne;Ee--;)Ce.glyphAt(Ee).glyphObj.isWhitespace&&Se++;ge=(C-Ue)/Se}if(ge||k){let Se=0;for(let Ee=0;Ee<ye;Ee++){let Oe=Ce.glyphAt(Ee);const Ge=Oe.glyphObj;Oe.x+=k+Se,ge!==0&&Ge.isWhitespace&&Ee<ye-Ne&&(Se+=ge,Oe.width+=ge)}}const be=e.getReorderSegments(g,oe,Ce.glyphAt(0).charIndex,Ce.glyphAt(Ce.count-1).charIndex);for(let Se=0;Se<be.length;Se++){const[Ee,Oe]=be[Se];let Ge=1/0,Be=-1/0;for(let Ve=0;Ve<ye;Ve++)if(Ce.glyphAt(Ve).charIndex>=Ee){let it=Ve,Xe=Ve;for(;Xe<ye;Xe++){let Ke=Ce.glyphAt(Xe);if(Ke.charIndex>Oe)break;Xe<ye-Ne&&(Ge=Math.min(Ge,Ke.x),Be=Math.max(Be,Ke.x+Ke.width))}for(let Ke=it;Ke<Xe;Ke++){const at=Ce.glyphAt(Ke);at.x=Be-(at.x+at.width-Ge)}break}}let D;const Me=Se=>D=Se;for(let Se=0;Se<ye;Se++){const Ee=Ce.glyphAt(Se);D=Ee.glyphObj;const Oe=D.index,Ge=oe.levels[Ee.charIndex]&1;if(Ge){const Be=e.getMirroredCharacter(g[Ee.charIndex]);Be&&Ee.fontData.fontObj.forEachGlyph(Be,0,0,Me)}if(Z){const{charIndex:Be,fontData:Ve}=Ee,it=Ee.x+q,Xe=Ee.x+Ee.width+q;_e[Be*4]=Ge?Xe:it,_e[Be*4+1]=Ge?it:Xe,_e[Be*4+2]=Ce.baseline+Ve.caretBottom+re,_e[Be*4+3]=Ce.baseline+Ve.caretTop+re;const Ke=Be-xe;Ke>1&&u(_e,xe,Ke),xe=Be}if(ee){const{charIndex:Be}=Ee;for(;Be>le;)le++,ee.hasOwnProperty(le)&&(De=ee[le])}if(!D.isWhitespace&&!D.isEmpty){const Be=he++,{fontSizeMult:Ve,src:it,index:Xe}=Ee.fontData,Ke=ve[it]||(ve[it]={});Ke[Oe]||(Ke[Oe]={path:D.path,pathBounds:[D.xMin,D.yMin,D.xMax,D.yMax]});const at=Ee.x+q,$t=Ee.y+Ce.baseline+re;fe[Be*2]=at,fe[Be*2+1]=$t;const an=at+D.xMin*Ve,xn=$t+D.yMin*Ve,ri=at+D.xMax*Ve,ln=$t+D.yMax*Ve;an<B[0]&&(B[0]=an),xn<B[1]&&(B[1]=xn),ri>B[2]&&(B[2]=ri),ln>B[3]&&(B[3]=ln),Be%Y===0&&(Le={start:Be,end:Be,rect:[1/0,1/0,-1/0,-1/0]},ke.push(Le)),Le.end++;const Bt=Le.rect;if(an<Bt[0]&&(Bt[0]=an),xn<Bt[1]&&(Bt[1]=xn),ri>Bt[2]&&(Bt[2]=ri),ln>Bt[3]&&(Bt[3]=ln),ce[Be]=Oe,se[Be]=Xe,ee){const si=Be*3;Te[si]=De>>16&255,Te[si+1]=De>>8&255,Te[si+2]=De&255}}}}}),_e){const Ce=g.length-xe;Ce>1&&u(_e,xe,Ce)}}const ue=[];ie.forEach(({index:oe,src:he,unitsPerEm:xe,ascender:le,descender:Le,lineHeight:De,capHeight:Ce,xHeight:Ae})=>{ue[oe]={src:he,unitsPerEm:xe,ascender:le,descender:Le,lineHeight:De,capHeight:Ce,xHeight:Ae}}),ne.typesetting=f()-W,F({glyphIds:ce,glyphFontIndices:se,glyphPositions:fe,glyphData:ve,fontData:ue,caretPositions:_e,glyphColors:Te,chunkedBounds:ke,fontSize:S,topBaseline:re+K[0].baseline,blockBounds:[q,re-N,q+C,re],visibleBounds:B,timings:ne})})}function l(g,v){a({...g,metricsOnly:!0},p=>{const[m,S,_,M]=p.blockBounds;v({width:_-m,height:M-S})})}function c(g){let v=g.match(/^([\d.]+)%$/),p=v?parseFloat(v[1]):NaN;return isNaN(p)?0:p/100}function u(g,v,p){const m=g[v*4],S=g[v*4+1],_=g[v*4+2],M=g[v*4+3],A=(S-m)/p;for(let T=0;T<p;T++){const b=(v+T)*4;g[b]=m+A*T,g[b+1]=m+A*(T+1),g[b+2]=_,g[b+3]=M}}function f(){return(self.performance||Date).now()}function h(){this.data=[]}const d=["glyphObj","x","y","width","charIndex","fontData"];return h.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(g){let v=h.flyweight;return v.data=this.data,v.index=g,v},splitAt(g){let v=new h;return v.data=this.data.splice(g*d.length),v}},h.flyweight=d.reduce((g,v,p,m)=>(Object.defineProperty(g,v,{get(){return this.data[this.index*d.length+p]},set(S){this.data[this.index*d.length+p]=S}}),g),{data:null,index:0}),{typeset:a,measure:l}}const Hr=()=>(self.performance||Date).now(),Gl=fv();let vv;function KT(n,e,t,i,r,s,o,a,l,c,u=!0){return u?ZT(n,e,t,i,r,s,o,a,l,c).then(null,f=>(vv||(console.warn("WebGL SDF generation failed, falling back to JS",f),vv=!0),yv(n,e,t,i,r,s,o,a,l,c))):yv(n,e,t,i,r,s,o,a,l,c)}const Hl=[],JT=5;let Df=0;function _v(){const n=Hr();for(;Hl.length&&Hr()-n<JT;)Hl.shift()();Df=Hl.length?setTimeout(_v,0):0}const ZT=(...n)=>new Promise((e,t)=>{Hl.push(()=>{const i=Hr();try{Gl.webgl.generateIntoCanvas(...n),e({timing:Hr()-i})}catch(r){t(r)}}),Df||(Df=setTimeout(_v,0))}),QT=4,eA=2e3,xv={};let tA=0;function yv(n,e,t,i,r,s,o,a,l,c){const u="TroikaTextSDFGenerator_JS_"+tA++%QT;let f=xv[u];return f||(f=xv[u]={workerModule:Hs({name:u,workerId:u,dependencies:[fv,Hr],init(h,d){const g=h().javascript.generate;return function(...v){const p=d();return{textureData:g(...v),timing:d()-p}}},getTransferables(h){return[h.textureData.buffer]}}),requests:0,idleTimer:null}),f.requests++,clearTimeout(f.idleTimer),f.workerModule(n,e,t,i,r,s).then(({textureData:h,timing:d})=>{const g=Hr(),v=new Uint8Array(h.length*4);for(let p=0;p<h.length;p++)v[p*4+c]=h[p];return Gl.webglUtils.renderImageData(o,v,a,l,n,e,1<<3-c),d+=Hr()-g,--f.requests===0&&(f.idleTimer=setTimeout(()=>{UT(u)},eA)),{timing:d}})}function nA(n){n._warm||(Gl.webgl.isSupported(n),n._warm=!0)}const iA=Gl.webglUtils.resizeWebGLCanvasWithoutClearing,Vs={defaultFontURL:null,unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},rA=new $e;function Ws(){return(self.performance||Date).now()}const Sv=Object.create(null);function sA(n,e){n=aA({},n);const t=Ws(),{defaultFontURL:i}=Vs,r=[];if(i&&r.push({label:"default",src:Mv(i)}),n.font&&r.push({label:"user",src:Mv(n.font)}),n.font=r,n.text=""+n.text,n.sdfGlyphSize=n.sdfGlyphSize||Vs.sdfGlyphSize,n.unicodeFontsURL=n.unicodeFontsURL||Vs.unicodeFontsURL,n.colorRanges!=null){let h={};for(let d in n.colorRanges)if(n.colorRanges.hasOwnProperty(d)){let g=n.colorRanges[d];typeof g!="number"&&(g=rA.set(g).getHex()),h[d]=g}n.colorRanges=h}Object.freeze(n);const{textureWidth:s,sdfExponent:o}=Vs,{sdfGlyphSize:a}=n,l=s/a*4;let c=Sv[a];if(!c){const h=document.createElement("canvas");h.width=s,h.height=a*256/l,c=Sv[a]={glyphCount:0,sdfGlyphSize:a,sdfCanvas:h,sdfTexture:new Ct(h,void 0,void 0,void 0,jt,jt),contextLost:!1,glyphsByFont:new Map},c.sdfTexture.generateMipmaps=!1,oA(c)}const{sdfTexture:u,sdfCanvas:f}=c;lA(n).then(h=>{const{glyphIds:d,glyphFontIndices:g,fontData:v,glyphPositions:p,fontSize:m,timings:S}=h,_=[],M=new Float32Array(d.length*4);let A=0,T=0;const b=Ws(),O=v.map(V=>{let P=c.glyphsByFont.get(V.src);return P||c.glyphsByFont.set(V.src,P=new Map),P});d.forEach((V,P)=>{const j=g[P],{src:G,unitsPerEm:te}=v[j];let Z=O[j].get(V);if(!Z){const{path:ne,pathBounds:z}=h.glyphData[G][V],X=Math.max(z[2]-z[0],z[3]-z[1])/a*(Vs.sdfMargin*a+.5),ce=c.glyphCount++,se=[z[0]-X,z[1]-X,z[2]+X,z[3]+X];O[j].set(V,Z={path:ne,atlasIndex:ce,sdfViewBox:se}),_.push(Z)}const{sdfViewBox:Y}=Z,ee=p[T++],F=p[T++],Q=m/te;M[A++]=ee+Y[0]*Q,M[A++]=F+Y[1]*Q,M[A++]=ee+Y[2]*Q,M[A++]=F+Y[3]*Q,d[P]=Z.atlasIndex}),S.quads=(S.quads||0)+(Ws()-b);const J=Ws();S.sdf={};const x=f.height,w=Math.ceil(c.glyphCount/l),L=Math.pow(2,Math.ceil(Math.log2(w*a)));L>x&&(console.info(`Increasing SDF texture size ${x}->${L}`),iA(f,s,L),u.dispose()),Promise.all(_.map(V=>bv(V,c,n.gpuAccelerateSDF).then(({timing:P})=>{S.sdf[V.atlasIndex]=P}))).then(()=>{_.length&&!c.contextLost&&(Ev(c),u.needsUpdate=!0),S.sdfTotal=Ws()-J,S.total=Ws()-t,e(Object.freeze({parameters:n,sdfTexture:u,sdfGlyphSize:a,sdfExponent:o,glyphBounds:M,glyphAtlasIndices:d,glyphColors:h.glyphColors,caretPositions:h.caretPositions,chunkedBounds:h.chunkedBounds,ascender:h.ascender,descender:h.descender,lineHeight:h.lineHeight,capHeight:h.capHeight,xHeight:h.xHeight,topBaseline:h.topBaseline,blockBounds:h.blockBounds,visibleBounds:h.visibleBounds,timings:h.timings}))})}),Promise.resolve().then(()=>{c.contextLost||nA(f)})}function bv({path:n,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:i,sdfCanvas:r,contextLost:s},o){if(s)return Promise.resolve({timing:-1});const{textureWidth:a,sdfExponent:l}=Vs,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),f=u%(a/i)*i,h=Math.floor(u/(a/i))*i,d=e%4;return KT(i,i,n,t,c,l,r,f,h,d,o)}function oA(n){const e=n.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),n.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),n.contextLost=!1;const i=[];n.glyphsByFont.forEach(r=>{r.forEach(s=>{i.push(bv(s,n,!0))})}),Promise.all(i).then(()=>{Ev(n),n.sdfTexture.needsUpdate=!0})})}function aA(n,e){for(let t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n}let Vl;function Mv(n){return Vl||(Vl=typeof document>"u"?{}:document.createElement("a")),Vl.href=n,Vl.href}function Ev(n){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=n,{width:i,height:r}=e,s=n.sdfCanvas.getContext("webgl");let o=t.image.data;(!o||o.length!==i*r*4)&&(o=new Uint8Array(i*r*4),t.image={width:i,height:r,data:o},t.flipY=!1,t.isDataTexture=!0),s.readPixels(0,0,i,r,s.RGBA,s.UNSIGNED_BYTE,o)}}const lA=Hs({name:"Typesetter",dependencies:[Hs({name:"Typesetter",dependencies:[$T,qT,IT],init(n,e,t){return n(e,t())}})],init(n){return function(e){return new Promise(t=>{n.typeset(e,t)})}},getTransferables(n){const e=[];for(let t in n)n[t]&&n[t].buffer&&e.push(n[t].buffer);return e}}),wv={};function cA(n){let e=wv[n];if(!e){const t=new Dr(1,1,n,n),i=t.clone(),r=t.attributes,s=i.attributes,o=new Mt,a=r.uv.count;for(let l=0;l<a;l++)s.position.array[l*3]*=-1,s.normal.array[l*3+2]*=-1;["position","normal","uv"].forEach(l=>{o.setAttribute(l,new vt([...r[l].array,...s[l].array],r[l].itemSize))}),o.setIndex([...t.index.array,...i.index.array.map(l=>l+a)]),o.translate(.5,.5,0),e=wv[n]=o}return e}const uA="aTroikaGlyphBounds",Tv="aTroikaGlyphIndex",fA="aTroikaGlyphColor";class hA extends lT{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new ys,this.boundingBox=new gs}computeBoundingSphere(){}computeBoundingBox(){}setSide(e){const t=this.getIndex().count;this.setDrawRange(e===Qt?t/2:0,e===on?t:t/2)}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=cA(e);["position","normal","uv"].forEach(i=>{this.attributes[i]=t.attributes[i].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,i,r,s){If(this,uA,e,4),If(this,Tv,t,1),If(this,fA,s,3),this._blockBounds=i,this._chunkedBounds=r,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:i}=this;if(t){const{PI:r,floor:s,min:o,max:a,sin:l,cos:c}=Math,u=r/2,f=r*2,h=Math.abs(t),d=e[0]/h,g=e[2]/h,v=s((d+u)/f)!==s((g+u)/f)?-h:o(l(d)*h,l(g)*h),p=s((d-u)/f)!==s((g-u)/f)?h:a(l(d)*h,l(g)*h),m=s((d+r)/f)!==s((g+r)/f)?h*2:a(h-c(d)*h,h-c(g)*h);i.min.set(v,e[1],t<0?-m:0),i.max.set(p,e[3],t<0?0:m)}else i.min.set(e[0],e[1],0),i.max.set(e[2],e[3],0);i.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(Tv).count,i=this._chunkedBounds;if(i)for(let r=i.length;r--;){t=i[r].end;let s=i[r].rect;if(s[1]<e.w&&s[3]>e.y&&s[0]<e.z&&s[2]>e.x)break}this.instanceCount=t}}function If(n,e,t,i){const r=n.getAttribute(e);t?r&&r.array.length===t.length?(r.array.set(t),r.needsUpdate=!0):(n.setAttribute(e,new Mw(t,i)),delete n._maxInstanceCount,n.dispose()):r&&n.deleteAttribute(e)}const dA=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaDistanceOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,pA=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaDistanceOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaDistanceOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,mA=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaDistanceOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaOutlineOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,gA=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaDistanceOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function vA(n){const e=Uf(n,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new Ie},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new Rt(0,0,0,0)},uTroikaClipRect:{value:new Rt(0,0,0,0)},uTroikaDistanceOffset:{value:0},uTroikaOutlineOpacity:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new Ie},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new $e},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new nt},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:dA,vertexTransform:pA,fragmentDefs:mA,fragmentColorTransform:gA,customRewriter({vertexShader:t,fragmentShader:i}){let r=/\buniform\s+vec3\s+diffuse\b/;return r.test(i)&&(i=i.replace(r,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),r.test(t)||(t=t.replace(hv,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:i}}});return e.transparent=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const Of=new ws({color:16777215,side:on,transparent:!0}),Av=8421504,Cv=new gt,Wl=new $,Ff=new $,zo=[],_A=new $,Nf="+x+y";function Rv(n){return Array.isArray(n)?n[0]:n}let Pv=()=>{const n=new Et(new Dr(1,1),Of);return Pv=()=>n,n},Lv=()=>{const n=new Et(new Dr(1,1,32,1),Of);return Lv=()=>n,n};const xA={type:"syncstart"},yA={type:"synccomplete"},Uv=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],SA=Uv.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class Dv extends Et{constructor(){const e=new hA;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=Av,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=Nf,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(xA),sA({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const i=this._queuedSyncs;i&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{i.forEach(r=>r&&r())})),this.dispatchEvent(yA),e&&e()})))}onBeforeRender(e,t,i,r,s,o){this.sync(),s.isTroikaTextMaterial&&this._prepareForRender(s),s._hadOwnSide=s.hasOwnProperty("side"),this.geometry.setSide(s._actualSide=s.side),s.side=On}onAfterRender(e,t,i,r,s,o){s._hadOwnSide?s.side=s._actualSide:delete s.side}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=Of.clone());if((!e||e.baseMaterial!==t)&&(e=this._derivedMaterial=vA(t),t.addEventListener("dispose",function i(){t.removeEventListener("dispose",i),e.dispose()})),this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY){let i=e._outlineMtl;return i||(i=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),i.isTextOutlineMaterial=!0,i.depthWrite=!1,i.map=null,e.addEventListener("dispose",function r(){e.removeEventListener("dispose",r),i.dispose()})),[i,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return Rv(this.material).getDepthMaterial()}get customDistanceMaterial(){return Rv(this.material).getDistanceMaterial()}_prepareForRender(e){const t=e.isTextOutlineMaterial,i=e.uniforms,r=this.textRenderInfo;if(r){const{sdfTexture:a,blockBounds:l}=r;i.uTroikaSDFTexture.value=a,i.uTroikaSDFTextureSize.value.set(a.image.width,a.image.height),i.uTroikaSDFGlyphSize.value=r.sdfGlyphSize,i.uTroikaSDFExponent.value=r.sdfExponent,i.uTroikaTotalBounds.value.fromArray(l),i.uTroikaUseGlyphColors.value=!t&&!!r.glyphColors;let c=0,u=0,f=0,h,d,g,v=0,p=0;if(t){let{outlineWidth:S,outlineOffsetX:_,outlineOffsetY:M,outlineBlur:A,outlineOpacity:T}=this;c=this._parsePercent(S)||0,u=Math.max(0,this._parsePercent(A)||0),h=T,v=this._parsePercent(_)||0,p=this._parsePercent(M)||0}else f=Math.max(0,this._parsePercent(this.strokeWidth)||0),f&&(g=this.strokeColor,i.uTroikaStrokeColor.value.set(g??Av),d=this.strokeOpacity,d==null&&(d=1)),h=this.fillOpacity;i.uTroikaDistanceOffset.value=c,i.uTroikaPositionOffset.value.set(v,p),i.uTroikaBlurRadius.value=u,i.uTroikaStrokeWidth.value=f,i.uTroikaStrokeOpacity.value=d,i.uTroikaFillOpacity.value=h??1,i.uTroikaCurveRadius.value=this.curveRadius||0;let m=this.clipRect;if(m&&Array.isArray(m)&&m.length===4)i.uTroikaClipRect.value.fromArray(m);else{const S=(this.fontSize||.1)*100;i.uTroikaClipRect.value.set(l[0]-S,l[1]-S,l[2]+S,l[3]+S)}this.geometry.applyClipRect(i.uTroikaClipRect.value)}i.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const s=t?this.outlineColor||0:this.color;if(s==null)delete e.color;else{const a=e.hasOwnProperty("color")?e.color:e.color=new $e;(s!==a._input||typeof s=="object")&&a.set(a._input=s)}let o=this.orientation||Nf;if(o!==e._orientation){let a=i.uTroikaOrient.value;o=o.replace(/[^-+xyz]/g,"");let l=o!==Nf&&o.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,u,f,h]=l;Wl.set(0,0,0)[u]=c==="-"?1:-1,Ff.set(0,0,0)[h]=f==="-"?-1:1,Cv.lookAt(_A,Wl.cross(Ff),Ff),a.setFromMatrix4(Cv)}else a.identity();e._orientation=o}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),i=t?parseFloat(t[1]):NaN;e=(isNaN(i)?0:i/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new Ie){t.copy(e);const i=this.curveRadius;return i&&(t.x=Math.atan2(e.x,Math.abs(i)-Math.abs(e.z))*Math.abs(i)),t}worldPositionToTextCoords(e,t=new Ie){return Wl.copy(e),this.localPositionToTextCoords(this.worldToLocal(Wl),t)}raycast(e,t){const{textRenderInfo:i,curveRadius:r}=this;if(i){const s=i.blockBounds,o=r?Lv():Pv(),a=o.geometry,{position:l,uv:c}=a.attributes;for(let u=0;u<c.count;u++){let f=s[0]+c.getX(u)*(s[2]-s[0]);const h=s[1]+c.getY(u)*(s[3]-s[1]);let d=0;r&&(d=r-Math.cos(f/r)*r,f=Math.sin(f/r)*r),l.setXYZ(u,f,h,d)}a.boundingSphere=this.geometry.boundingSphere,a.boundingBox=this.geometry.boundingBox,o.matrixWorld=this.matrixWorld,o.material.side=this.material.side,zo.length=0,o.raycast(e,zo);for(let u=0;u<zo.length;u++)zo[u].object=this,t.push(zo[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,SA.forEach(i=>{this[i]=e[i]}),this}clone(){return new this.constructor().copy(this)}}Uv.forEach(n=>{const e="_private_"+n;Object.defineProperty(Dv.prototype,n,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});let Iv,Bf;function bA(){if(!Bf){const{isConfigReady:n}=An();Bf=n.then(()=>new Promise((e,t)=>{const{assetsLocation:i}=An(),r=new Yg;r.setPath(`${i}obj/hakkun/`),r.load("chara.mtl",s=>{s.preload();const o=s.materials.Chara;o.map.minFilter=dt,o.map.magFilter=dt;const a=new Zg;a.setMaterials(s),a.setPath(`${i}obj/hakkun/`),a.load("chara.obj",l=>{l.children[0].scale.x=.8,l.children[0].scale.y=.8,l.children[0].scale.z=.8,l.children[0].translateY(-.5),l.renderOrder=2,Iv=l,e()},function(c){},function(c){t(c)})},function(o){},function(o){t(o)})}))}}function Ov(){bA();let n;function e(){return n||(n=Iv.clone()),n}function t(){if(!n)return;const{disposeObject:i}=Io();i(n)}return{ready:Bf,getModel:e,dispose:t}}function MA(n){const e=Ov(),{add:t}=Cf(),i=e.getModel(),r=new Dv;r.text=n,r.fontSize=.2,r.position.y=.5,r.fillOpacity=.8,r.anchorX="center",r.anchorY="bottom-baseline",r.color=16776960,r.sync(),t(r);const s=new Ft;s.add(i),s.add(r);const o=new $,a=new $;function l(){return s}function c(v){s.position.set(v.x-.5,v.y,v.z-.5),o.copy(s.position);const p=new $(v.directionX,v.directionY,v.directionZ),m=new gt().lookAt(p,new $(0,0,0),new $(0,1,0)),S=new Zn().setFromRotationMatrix(m);i.setRotationFromQuaternion(S)}function u(v){o.set(v.x-.5,v.y,v.z-.5),a.set(v.directionX,v.directionY,v.directionZ)}function f(){h(),d()}function h(){s.position.equals(o)||(s.position.lerp(o,.2),s.position.distanceTo(o)<.001&&s.position.copy(o))}function d(){const v=new gt().lookAt(a,new $(0,0,0),new $(0,1,0)),p=new Zn().setFromRotationMatrix(v);i.quaternion.slerp(p,.2)}function g(v){const{disposeObject:p}=Io();p(v)}return{getObject:l,setLocation:c,animateTo:u,update:f,dispose:g}}const Go=new Map;function Xl(){function n(t,i,r,s=!1){if(Go.has(t))Go.get(t).animateTo(r);else{const o=MA(i);o.setLocation(r),Go.set(t,o);const{addToScene:a}=Vr();a(o.getObject()),o.animateTo(r)}}function e(){for(const t of Go.values())t.update()}return{addOrUpdateEntity:n,tick:e,entities:Go}}let Fv,Nv,kf;const Bv={tl:{x:0,y:0,w:13,h:13},tc:{x:13,y:0,w:1,h:13},tr:{x:115,y:0,w:13,h:13},ml:{x:0,y:13,w:13,h:1},mc:{x:13,y:13,w:1,h:1},mr:{x:115,y:13,w:13,h:1},bl:{x:0,y:91,w:13,h:32},bc:{x:13,y:91,w:1,h:32},br:{x:115,y:91,w:13,h:32},zabek:{x:64,y:91,w:25,h:32}},EA={white:{r:.976470588235294,g:1,b:.996078431372549},orange:{r:.976470588235294,g:.501960784313725,b:.113725490196078},magenta:{r:.780392156862745,g:.305882352941176,b:.741176470588235},light_blue:{r:.227450980392157,g:.701960784313725,b:.854901960784314},yellow:{r:.996078431372549,g:.847058823529412,b:.23921568627451},lime:{r:.501960784313725,g:.780392156862745,b:.12156862745098},pink:{r:.952941176470588,g:.545098039215686,b:.666666666666667},gray:{r:.27843137254902,g:.309803921568627,b:.32156862745098},silver:{r:.615686274509804,g:.615686274509804,b:.592156862745098},cyan:{r:.086274509803922,g:.611764705882353,b:.611764705882353},purple:{r:.537254901960784,g:.196078431372549,b:.72156862745098},blue:{r:.235294117647059,g:.266666666666667,b:.666666666666667},brown:{r:.513725490196078,g:.329411764705882,b:.196078431372549},green:{r:.368627450980392,g:.486274509803922,b:.086274509803922},red:{r:.690196078431373,g:.180392156862745,b:.149019607843137},black:{r:.113725490196078,g:.113725490196078,b:.129411764705882}};Ct.DEFAULT_ANISOTROPY;function wA(){if(!kf){const{isConfigReady:n}=An();kf=n.then(()=>{const{assetsLocation:e}=An();return TA(`${e}obj/speech-balloon.png`)}).then(e=>{Nv=e;const t=document.createElement("canvas"),i=t.getContext("2d");i&&(i.imageSmoothingEnabled=!1),Fv=t})}}function TA(n){return new Promise((e,t)=>{const i=new Image;i.addEventListener("load",()=>{e(i)},!1),i.addEventListener("error",r=>{t(`The file at ${n} is not accessible: ${JSON.stringify(r)}.`)},!1),i.src=n})}function zf(){wA();function n({anisotropy:r}){}function e(r){const s=document.createElement("canvas"),o=new Eg(s);o.anisotropy=o.magFilter=dt,o.minFilter=dt;const{createPlane:a}=ks(),l=a(1,1),c=new ws({map:o,side:on,transparent:!0}),u=new Et(l,c);t(s,r,"orange");const f=s.width/s.height;return u.scale.x=f*.4,u.scale.y=.4,u}function t(r,s,o){const a=EA[o],c=.299*a.r+.587*a.g+.114*a.b>.5?"black":"white",u="normal 30px sans-serif",f=r.getContext("2d");if(!f)throw"Could not get canvas context to draw a chat balloon.";const h=Fv,d=h.getContext("2d");if(!d)throw"Could not get canvas context to draw a chat balloon.";const g=1.5,v=Bv;f.font=u;const p=f.measureText(s).width,m=10+(40-Math.min(40,p)),S=28,_=m+p+g*v.ml.w+g*v.mr.w,M=S+g*v.tc.h+g*v.bc.h;r.width=_,r.height=M,f.clearRect(0,0,r.width,r.height),f.imageSmoothingEnabled=!1,h.width=_,h.height=M,d.clearRect(0,0,r.width,r.height),d.imageSmoothingEnabled=!1,i(d,_,M,Nv,g,a),f.drawImage(h,0,0);const A=m/2+g*v.ml.w,T=g*v.tc.h;f.fillStyle=c,f.font=u,f.fillText(s,A,T+25)}function i(r,s,o,a,l,c){const u=Bv;r.drawImage(a,u.tl.x,u.tl.y,u.tl.w,u.tl.h,0,0,l*u.tl.w,l*u.tl.h),r.drawImage(a,u.tc.x,u.tc.y,u.tc.w,u.tc.h,l*u.tl.w,0,s-l*u.tl.w-l*u.tr.w,l*u.tc.h),r.drawImage(a,u.tr.x,u.tr.y,u.tr.w,u.tr.h,s-l*u.tr.w,0,l*u.tr.w,l*u.tr.h),r.drawImage(a,u.ml.x,u.ml.y,u.ml.w,u.ml.h,0,l*u.tl.h,l*u.ml.w,o-l*u.tl.h-l*u.bl.h),r.drawImage(a,u.mc.x,u.mc.y,u.mc.w,u.mc.h,l*u.ml.w,l*u.tc.h,s-l*u.ml.w-l*u.mr.w,o-l*u.tc.h-l*u.bc.h),r.drawImage(a,u.mr.x,u.mr.y,u.mr.w,u.mr.h,s-l*u.mr.w,l*u.tr.h,l*u.mr.w,o-l*u.tr.h-l*u.br.h);const f=s/2-l*u.zabek.w/2;r.drawImage(a,u.bl.x,u.bl.y,u.bl.w,u.bl.h,0,o-l*u.bl.h,l*u.bl.w,l*u.bl.h),r.drawImage(a,u.bc.x,u.bc.y,u.bc.w,u.bc.h,l*u.bl.w,o-l*u.bc.h,f-l*u.bl.w,l*u.bc.h),r.drawImage(a,u.bc.x,u.bc.y,u.bc.w,u.bc.h,f+l*u.zabek.w,o-l*u.bc.h,s-f-l*u.zabek.w-l*u.br.w,l*u.bc.h),r.drawImage(a,u.br.x,u.br.y,u.br.w,u.br.h,s-l*u.br.w,o-l*u.bc.h,l*u.br.w,l*u.br.h);const h=o-l*u.zabek.h,d=l*u.zabek.w,g=l*u.zabek.h;r.drawImage(a,u.zabek.x,u.zabek.y,u.zabek.w,u.zabek.h,f,h,d,g);const v=r.getImageData(0,0,s,o),p=v.data;for(let m=0;m<p.length;m+=4){const S=p[m],_=p[m+1],M=p[m+2];p[m+3]==0||S==0&&_==0&&M==0||(p[m]=S*c.r,p[m+1]=_*c.g,p[m+2]=M*c.b,S==_&&_==M&&S!=255&&(p[m+3]=204))}r.putImageData(v,0,0)}return{ready:kf,configure:n,createMesh:e}}const jl=new ef;let nr=[];const AA={lastIndex:0};function Gf(){function n(r,s,o=10*1e3){const{createMesh:a}=zf(),l=new Date().getTime(),c=a(s),{add:u}=Cf();u(c);const f={id:AA.lastIndex++,entityUuid:r,mesh:c,timestamp:l,ttl:o};nr.unshift(f)}function e(r){jl.children.forEach(a=>jl.remove(a));const s=r<Math.PI/2,o=nr.length;nr.forEach((a,l)=>a.mesh.renderOrder=s?o-l:l),nr.forEach(a=>jl.add(a.mesh))}function t(){const{entities:r}=Xl(),s=r,o=Date.now(),a=new Set;nr.forEach((l,c)=>{var d;const u=(d=s.get(l.entityUuid))==null?void 0:d.getObject();u&&l.mesh.position.set(u.position.x,u.position.y+.4+.5+c*.5,u.position.z);const f=Math.max(l.timestamp+l.ttl-o,0),h=f<=750?f/750:1;l.mesh.material.opacity=h,f||a.add(l)}),nr=nr.filter(l=>!a.has(l))}function i(){nr.length=0}return{add:n,tick:t,prepareScene:e,scene:jl,clear:i}}const kv=ht(!1),zv=ht(new $),Ho=ht(new $),CA=pi(()=>{const n=Math.floor(Ho.value.x),e=Math.floor(Ho.value.y),t=Math.floor(Ho.value.z);return new $(n,e,t)}),RA=20,PA=20,LA=20;let ir,Gv,Hv,_n,Ci;function Vr(){const{webGLAvailable:n}=_f(),e=ht(null),t=d=>{if(!n.value)return;const{init:g}=Do(),{init:v}=Sf(),{init:p,attachToView:m}=er();v(),g(),i(),p(ir,_n.domElement,a),r(),Tt(d,()=>{e.value=Bh(d),e.value&&(o(),e.value.appendChild(_n.domElement),m(e.value),l())},{immediate:!0})};function i(){ir=new wn(75,100/100,.1,1e3),ir.position.z=5,Gv=new oT(16777215),Hv=new sT(16777215,526368,2),_n=new Qu({}),_n.setSize(100,100),_n.sortObjects=!1,_n.autoClear=!1,window.addEventListener("resize",o),io(()=>{window.removeEventListener("resize",o)}),Ci=new ef,Ci.background=new $e("rgb(181, 209, 255)"),Ci.add(Gv),Ci.add(Hv);const{createMesh:v}=gT(),p=v(),{configure:m}=zf();m({anisotropy:_n.capabilities.getMaxAnisotropy()});const{init:S}=lv(),_=S();_.then(O=>{Ci.add(O)}).catch(O=>{console.error("Could not load player entity model.",O),Ci.add(p)});const{init:M}=Mf(),A=M(RA,PA,LA);Ci.add(A);const{ready:T}=Ov(),{ready:b}=zf();Promise.all([_,T,b]).finally(()=>{kv.value=!0})}function r(){requestAnimationFrame(r);const{animate:d}=er();d(),h();const{tick:g}=Xl();g();const{tick:v}=Gf();v(),l()}function s(){_n.dispose();const{dispose:d}=lv(),{dispose:g}=Mf(),{dispose:v}=Do(),{dispose:p}=Sf(),{dispose:m}=er();d(),g(),v(),p(),m()}const o=()=>{if(!e.value)return;const d=e.value.offsetWidth,g=e.value.offsetHeight;_n.setSize(d,g),ir.aspect=d/g,ir.updateProjectionMatrix(),l()};function a(){l();const{getDirection:d}=er();zv.value=d(),h()}const l=()=>{const{applyCameraQuaternion:d}=Cf();d(ir),_n.clear(),_n.render(Ci,ir),_n.clearDepth();const{scene:g,prepareScene:v}=Gf(),{getPolarAngle:p}=er();v(p()),_n.render(g,ir)};function c(d){Ci.add(d)}function u(d){const{animateToTarget:g}=er();g({x:d.x-.5,y:d.y,z:d.z-.5}),h()}function f(d=!0){const g=Ai(),{getDirection:v,animateTo:p}=er(),m=new $(g.playerEntityLocation.x-.5,g.playerEntityLocation.y,g.playerEntityLocation.z-.5),S=d?v():new $(1,-1,1),_=3,M=m.clone().addScaledVector(S,-_);p(M),h()}function h(){const{getPosition:d}=er(),g=d();Ho.value=new $(g.x,g.y,g.z)}return{init:t,ready:kv,updateCamera:u,render:l,addToScene:c,moveCameraToEntity:f,cameraDirection:zv,cameraPos:Ho,cameraBlockPos:CA,dispose:s}}const Vv=ht(!1);let Vo,rr,Hf,Yl;function UA(n){const{webGLAvailable:e}=_f(),t=ht(null),i=l=>{e.value&&(r(),Tt(l,()=>{t.value=Bh(l),t.value&&(s(),t.value.appendChild(rr.domElement),o())},{immediate:!0}),Tt(n,c=>{a(c)}))};function r(){Vo=new zm,Vo.position.z=1,rr=new Qu({alpha:!0}),rr.setSize(100,100),rr.sortObjects=!1,rr.autoClear=!1,window.addEventListener("resize",s),io(()=>{window.removeEventListener("resize",s)}),Hf=new ef,Yl=new cT,Hf.add(Yl),Vv.value=!0}io(()=>{rr.dispose()});const s=()=>{if(!t.value)return;const l=t.value.offsetWidth,c=t.value.offsetHeight;rr.setSize(l,c),o()},o=()=>{rr.render(Hf,Vo)},a=l=>{const c=Yl.position.clone();c.addScaledVector(l,-1),Vo.position.set(c.x,c.y,c.z),Vo.lookAt(Yl.position),o()};return{init:i,ready:Vv}}const ii=12;function Vf(){function n(s){return`${s.x},${s.y},${s.z}:${s.size}`}function e(s,o){if(s.size!=o.size)throw"Can't compare distance of chunks of different size.";const a=s.size,l=Math.abs(s.x/a-o.x/a),c=Math.abs(s.y/a-o.y/a),u=Math.abs(s.z/a-o.z/a);return Math.max(l,Math.max(c,u))}function t(s){return{x:Math.floor(s.x/ii)*ii,y:Math.floor(s.y/ii)*ii,z:Math.floor(s.z/ii)*ii,size:ii}}function i(s,o,a,l){const c=t(s);return t({x:c.x+ii*o,y:c.y+ii*a,z:c.z+ii*l})}function r(s,o=1,a=!1){const l=[];for(let c=-o;c<=o;++c)for(let u=-o;u<=o;++u)for(let f=-o;f<=o;++f){if(a&&c==0&&u==0&&f==0)continue;const h=i(s,c,u,f);l.push(h)}return l}return{getId:n,getChunk:t,getNeighboringChunk:i,getChunksAround:r,distance:e}}class DA extends Nr{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new vf(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));t&&t(l)},i,r)}parse(e){return new IA(e)}}class IA{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],r=OA(e,t,this.data);for(let s=0,o=r.length;s<o;s++)i.push(...r[s].toShapes());return i}}function OA(n,e,t){const i=Array.from(n),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[];let a=0,l=0;for(let c=0;c<i.length;c++){const u=i[c];if(u===`
`)a=0,l-=s;else{const f=FA(u,r,a,l,t);a+=f.offsetX,o.push(f.path)}}return o}function FA(n,e,t,i,r){const s=r.glyphs[n]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+n+'" does not exists in font family '+r.familyName+".");return}const o=new uT;let a,l,c,u,f,h,d,g;if(s.o){const v=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let p=0,m=v.length;p<m;)switch(v[p++]){case"m":a=v[p++]*e+t,l=v[p++]*e+i,o.moveTo(a,l);break;case"l":a=v[p++]*e+t,l=v[p++]*e+i,o.lineTo(a,l);break;case"q":c=v[p++]*e+t,u=v[p++]*e+i,f=v[p++]*e+t,h=v[p++]*e+i,o.quadraticCurveTo(f,h,c,u);break;case"b":c=v[p++]*e+t,u=v[p++]*e+i,f=v[p++]*e+t,h=v[p++]*e+i,d=v[p++]*e+t,g=v[p++]*e+i,o.bezierCurveTo(f,h,d,g,c,u);break}}return{offsetX:s.ha*e,path:o}}const NA=16776960;new ws({color:NA,transparent:!0,opacity:.6,side:on}),new DA;function BA(){function n(){return Promise.resolve()}function e(i,r){throw"Font not loaded yet."}function t(i){const{disposeMesh:r}=Io();r(i)}return{init:n,createText:e,disposeText:t}}const Ri=n=>(h0("data-v-2505aed2"),n=n(),d0(),n),kA={class:"rel"},zA={key:0},GA={class:"abs"},HA={class:"server-info"},VA=Ri(()=>At("br",null,null,-1)),WA=Ri(()=>At("br",null,null,-1)),XA={key:0,class:"entities"},jA=["onClick"],YA={class:"dev"},qA=Ri(()=>At("br",null,null,-1)),$A=Ri(()=>At("br",null,null,-1)),KA=Ri(()=>At("br",null,null,-1)),JA=Ri(()=>At("br",null,null,-1)),ZA=Ri(()=>At("br",null,null,-1)),QA={class:"actions"},e2=Ri(()=>At("br",null,null,-1)),t2=Ri(()=>At("div",{class:"loading"},null,-1)),n2=Rc({__name:"RenderView",setup(n){const e=ht(null),t=ht(null),{webGLAvailable:i,webGLWarning:r}=_f(),{init:s,cameraDirection:o,cameraPos:a,dispose:l}=Vr(),{init:c}=UA(o),{getChunk:u}=Vf(),{init:f}=BA();f().then(()=>{s(e),c(t)}),io(()=>{l()});const h=pi(()=>({x:Math.floor(a.value.x),y:Math.floor(a.value.y),z:Math.floor(a.value.z)})),d=pi(()=>{const T=u(h.value);return{x:T.x,y:T.y,z:T.z}}),{count:g,loadedCount:v}=Do(),{moveCameraToEntity:p}=Vr(),m=An(),S=Ai(),_=pi(()=>({x:S.playerEntityLocation.blockX,y:S.playerEntityLocation.blockY,z:S.playerEntityLocation.blockZ})),M=pi(()=>{const T=u(S.playerEntityLocation);return{x:T.x,y:T.y,z:T.z}});function A(T,b){const O=new URLSearchParams(window.location.search);O.set("entity_id",T),O.set("entity_name",b);const J=`${window.location.protocol}//${window.location.host}${window.location.pathname}?${O.toString()}`;window.location.href=J}return(T,b)=>(_r(),fo("div",kA,[At("div",{id:"threedview",ref_key:"view",ref:e},[Vt(i)?Dd("",!0):(_r(),fo("div",zA,"WebGL not available: "+Cn(Vt(r)),1))],512),At("div",GA,[At("div",{id:"axis",ref_key:"axisView",ref:t},null,512)]),At("div",HA,[di(" プレイヤー: "+Cn(Vt(m).playerName),1),VA,di(" エンティティ: "+Cn(Vt(m).entityName),1),WA]),Vt(m).entities.length>0?(_r(),fo("div",XA,[di(" Entities: "),(_r(!0),fo(Ln,null,N0(Vt(m).entities,O=>(_r(),fo("div",{key:O.entityUuid,class:oa(["entity",{selected:O.entityUuid==Vt(m).entityId}]),onClick:J=>A(O.entityUuid,O.name)},Cn(O.name),11,jA))),128))])):Dd("",!0),At("div",YA,[di(" Camera: "+Cn(h.value),1),qA,di(" Camera Chunk: "+Cn(d.value),1),$A,di(" Entity: "+Cn(_.value),1),KA,di(" Entity Chunk: "+Cn(M.value),1),JA,di(" Textures: "+Cn(Vt(v))+" / "+Cn(Vt(g)),1),ZA]),At("div",QA,[At("button",{onClick:b[0]||(b[0]=O=>Vt(S).toggleCameraFollowsEntity())},Cn(Vt(S).cameraFollowsEntity?"Unfollow entity":"Follow entity"),1),e2,At("button",{onClick:b[1]||(b[1]=O=>Vt(p)())},"Move camera to entity")]),t2]))}}),nC="",i2=((n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t})(n2,[["__scopeId","data-v-2505aed2"]]);function r2(n){return uc()?(hh(n),!0):!1}function s2(n){return typeof n=="function"?n():Vt(n)}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Wv=()=>{};function o2(n,e){function t(...i){return new Promise((r,s)=>{Promise.resolve(n(()=>e.apply(this,i),{fn:e,thisArg:this,args:i})).then(r).catch(s)})}return t}function a2(n,e=!0,t=!0,i=!1){let r=0,s,o=!0,a=Wv,l;const c=()=>{s&&(clearTimeout(s),s=void 0,a(),a=Wv)};return f=>{const h=s2(n),d=Date.now()-r,g=()=>l=f();return c(),h<=0?(r=Date.now(),g()):(d>h&&(t||!o)?(r=Date.now(),g()):e&&(l=new Promise((v,p)=>{a=i?p:v,s=setTimeout(()=>{r=Date.now(),o=!0,v(g()),c()},Math.max(0,h-d))})),!t&&!s&&(s=setTimeout(()=>o=!0,h)),o=!1,l)}}function l2(n,e=200,t=!1,i=!0,r=!1){return o2(a2(e,t,i,r),n)}function c2(){const n=An();return{getEntity:()=>{const{send:r}=Bl();r(No.getEntity(n.entityId))},getNearbyEntities:()=>{const{send:r}=Bl();r(No.getNearbyEntities())},getChunks:r=>{const{send:s}=Bl();s(No.getChunks(r))}}}const u2="/static/assets/main-276b8dd2.js";var Wr=(n=>(n[n.config=0]="config",n[n.connect=1]="connect",n[n.requestChunks=2]="requestChunks",n[n.textureLoaded=3]="textureLoaded",n[n.returnGeometryArrays=4]="returnGeometryArrays",n[n.centerPos=5]="centerPos",n))(Wr||{}),ql=(n=>(n[n.stateReady=0]="stateReady",n[n.loadTexture=1]="loadTexture",n[n.worldGeometry=2]="worldGeometry",n))(ql||{});function f2(n,e,t){const i=ht(null),r=k_(),s=(...a)=>{r.value&&r.value.postMessage(...a)},o=function(){r.value&&r.value.terminate()};return r.value=new Worker(n,e),r.value.onmessage=a=>{t(a.data)},r.value.onerror=a=>{console.error(a)},r2(()=>{r.value&&r.value.terminate()}),{data:i,post:s,terminate:o,worker:r}}function h2(){function n(e){const{isReady:t}=Pi(),{textureLoaded:i,returnGeometryArrays:r}=Pi();switch(e.type){case ql.stateReady:{console.log("[Worker -> Main] State ready"),t.value=!0;break}case ql.loadTexture:{const{location:s}=e,{loadTexture:o}=Do();(async()=>{const a=await o(s);i(s,a)})();break}case ql.worldGeometry:{const s=e.geometries;console.log("[Worker -> Main] World geometry");const{updateGeometries:o}=Mf();o(s),r(s);const{render:a}=Vr();a();break}default:console.warn(`Unknown message: ${JSON.stringify(e)}`)}}return{handle:n}}const d2=ht(!1),{handle:p2}=h2(),{post:Xs}=f2(u2,{type:"module"},p2);function Pi(){function n(o){const a={type:Wr.config,...o};Xs(a)}function e(o,a,l,c,u){const f={type:Wr.connect,host:o,port:a,ssl:l,playerId:c,entityId:u};Xs(f)}function t(o){const a={type:Wr.centerPos,pos:o};Xs(a)}function i(o){const a={type:Wr.requestChunks,chunks:o};Xs(a)}function r(o,a){const l={type:Wr.textureLoaded,location:o,texture:a};Xs(l)}function s(o){const a=[];for(const c in o){const u=o[c].attributes;for(const f in u){const h=u[f];a.push(h.buffer)}}const l={type:Wr.returnGeometryArrays,arrays:Object.assign({},o)};Xs(l,{transfer:a})}return{setConfig:n,connect:e,setCenterPos:t,requestChunks:i,textureLoaded:r,returnGeometryArrays:s,isReady:d2}}function m2(){function n(){const e=sv(),t=An();console.log("player_name",t.playerName),console.log("entity_name",t.entityName);const i=c2(),{state:r}=Ny(t),{ready:s}=Vr(),{setConfig:o}=Pi(),{assetsLocation:a}=An();o({assetsLocation:a});const l=Ai();Tt(r,d=>{switch(d){case kl.connecting:e.log("WebSocket connecting...");break;case kl.connected:e.log("WebSocket connected"),i.getEntity(),i.getNearbyEntities();break;case kl.disconnected:e.log("WebSocket closed");break}}),Tt(s,d=>{if(d){t.connect();const{connect:g}=Pi();g(t.host,t.port,t.ssl,t.playerId,t.entityId)}});const c=l2(d=>{const{requestChunks:g}=Pi(),{getChunksAround:v}=Vf(),p=v(d,1,!1);g(p)},200,!0,!1),{isReady:u}=Pi(),f=pi(()=>l.isReady&&u.value);Tt(f,d=>{if(!d)return;const g={x:l.playerEntityLocation.x,y:l.playerEntityLocation.y,z:l.playerEntityLocation.z},{setCenterPos:v}=Pi();v(g);const{requestChunks:p}=Pi(),{getChunksAround:m}=Vf(),S=m(l.playerEntityLocation,0,!1);p(S),window.setTimeout(()=>{const _=m(l.playerEntityLocation,1,!1);p(_)},600)});const h=ht(!1);Tt([f,()=>l.playerEntityLocation],([d])=>{if(d&&!h.value){h.value=!0;const{moveCameraToEntity:g}=Vr();g(!1)}}),Tt(()=>l.playerEntityLocation,d=>{if(Ai().cameraFollowsEntity){const{updateCamera:m}=Vr();m(d)}const{addOrUpdateEntity:v}=Xl();v(t.entityId,t.entityName,d,!0);const{setCenterPos:p}=Pi();p({x:d.x,y:d.y,z:d.z}),f.value&&c(d)}),Tt(()=>l.nearbyEntities,d=>{console.log("nearbyEntities",d);const{addOrUpdateEntity:g}=Xl();for(const v of d)g(v.uuid,v.name,v.location)}),Tt(()=>l.lastChatMessage,d=>{if(!d)return;const{add:g}=Gf();g(d.uuid,d.message)})}return{init:n}}const g2=Rc({__name:"App",props:{assetsLocation:{}},setup(n){const e=n,{setAssetsLocation:t,setConfigReady:i}=An();t(e.assetsLocation??"/static"),i();const{init:r}=m2();return r(),(s,o)=>(_r(),Pd(i2,{style:{flex:"1"},class:"test1"}))}});ns(Uy());const v2=oy(ty(g2));customElements.define("threed-view",v2)});
