"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{6712:(C,m,a)=>{a.d(m,{c:()=>i});var v=a(1688),l=a(7150),g=a(9203);const i=(o,s)=>{let e,t;const d=(r,w,p)=>{if(typeof document>"u")return;const E=document.elementFromPoint(r,w);E&&s(E)?E!==e&&(n(),c(E,p)):n()},c=(r,w)=>{e=r,t||(t=e);const p=e;(0,v.w)(()=>p.classList.add("ion-activated")),w()},n=(r=!1)=>{if(!e)return;const w=e;(0,v.w)(()=>w.classList.remove("ion-activated")),r&&t!==e&&e.click(),e=void 0};return(0,g.createGesture)({el:o,gestureName:"buttonActiveDrag",threshold:0,onStart:r=>d(r.currentX,r.currentY,l.a),onMove:r=>d(r.currentX,r.currentY,l.b),onEnd:()=>{n(!0),(0,l.h)(),t=void 0}})}},4874:(C,m,a)=>{a.d(m,{g:()=>l});var v=a(6225);const l=()=>{if(void 0!==v.w)return v.w.Capacitor}},5149:(C,m,a)=>{a.d(m,{g:()=>v});const v=(s,e,t,d,c)=>g(s[1],e[1],t[1],d[1],c).map(n=>l(s[0],e[0],t[0],d[0],n)),l=(s,e,t,d,c)=>c*(3*e*Math.pow(c-1,2)+c*(-3*t*c+3*t+d*c))-s*Math.pow(c-1,3),g=(s,e,t,d,c)=>o((d-=c)-3*(t-=c)+3*(e-=c)-(s-=c),3*t-6*e+3*s,3*e-3*s,s).filter(r=>r>=0&&r<=1),o=(s,e,t,d)=>{if(0===s)return((s,e,t)=>{const d=e*e-4*s*t;return d<0?[]:[(-e+Math.sqrt(d))/(2*s),(-e-Math.sqrt(d))/(2*s)]})(e,t,d);const c=(3*(t/=s)-(e/=s)*e)/3,n=(2*e*e*e-9*e*t+27*(d/=s))/27;if(0===c)return[Math.pow(-n,1/3)];if(0===n)return[Math.sqrt(-c),-Math.sqrt(-c)];const r=Math.pow(n/2,2)+Math.pow(c/3,3);if(0===r)return[Math.pow(n/2,.5)-e/3];if(r>0)return[Math.pow(-n/2+Math.sqrt(r),1/3)-Math.pow(n/2+Math.sqrt(r),1/3)-e/3];const w=Math.sqrt(Math.pow(-c/3,3)),p=Math.acos(-n/(2*Math.sqrt(Math.pow(-c/3,3)))),E=2*Math.pow(w,1/3);return[E*Math.cos(p/3)-e/3,E*Math.cos((p+2*Math.PI)/3)-e/3,E*Math.cos((p+4*Math.PI)/3)-e/3]}},5085:(C,m,a)=>{a.d(m,{i:()=>v});const v=l=>l&&""!==l.dir?"rtl"===l.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},2779:(C,m,a)=>{a.r(m),a.d(m,{startFocusVisible:()=>i});const v="ion-focused",g=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],i=o=>{let s=[],e=!0;const t=o?o.shadowRoot:document,d=o||document.body,c=M=>{s.forEach(h=>h.classList.remove(v)),M.forEach(h=>h.classList.add(v)),s=M},n=()=>{e=!1,c([])},r=M=>{e=g.includes(M.key),e||c([])},w=M=>{if(e&&void 0!==M.composedPath){const h=M.composedPath().filter(_=>!!_.classList&&_.classList.contains("ion-focusable"));c(h)}},p=()=>{t.activeElement===d&&c([])};return t.addEventListener("keydown",r),t.addEventListener("focusin",w),t.addEventListener("focusout",p),t.addEventListener("touchstart",n,{passive:!0}),t.addEventListener("mousedown",n),{destroy:()=>{t.removeEventListener("keydown",r),t.removeEventListener("focusin",w),t.removeEventListener("focusout",p),t.removeEventListener("touchstart",n),t.removeEventListener("mousedown",n)},setFocus:c}}},5487:(C,m,a)=>{a.d(m,{c:()=>l});var v=a(839);const l=s=>{const e=s;let t;return{hasLegacyControl:()=>{if(void 0===t){const c=void 0!==e.label||g(e),n=e.hasAttribute("aria-label")||e.hasAttribute("aria-labelledby")&&null===e.shadowRoot,r=(0,v.h)(e);t=!0===e.legacy||!c&&!n&&null!==r}return t}}},g=s=>null!==s.shadowRoot&&!!(i.includes(s.tagName)&&null!==s.querySelector('[slot="label"]')||o.includes(s.tagName)&&""!==s.textContent),i=["ION-RANGE"],o=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},7150:(C,m,a)=>{a.d(m,{I:()=>l,a:()=>e,b:()=>t,c:()=>s,d:()=>c,h:()=>d});var v=a(4874),l=function(n){return n.Heavy="HEAVY",n.Medium="MEDIUM",n.Light="LIGHT",n}(l||{});const i={getEngine(){const n=window.TapticEngine;if(n)return n;const r=(0,v.g)();return null!=r&&r.isPluginAvailable("Haptics")?r.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const r=(0,v.g)();return"web"!==(null==r?void 0:r.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,v.g)(),impact(n){const r=this.getEngine();if(!r)return;const w=this.isCapacitor()?n.style:n.style.toLowerCase();r.impact({style:w})},notification(n){const r=this.getEngine();if(!r)return;const w=this.isCapacitor()?n.type:n.type.toLowerCase();r.notification({type:w})},selection(){const n=this.isCapacitor()?l.Light:"light";this.impact({style:n})},selectionStart(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionStart():n.gestureSelectionStart())},selectionChanged(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionChanged():n.gestureSelectionChanged())},selectionEnd(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionEnd():n.gestureSelectionEnd())}},o=()=>i.available(),s=()=>{o()&&i.selection()},e=()=>{o()&&i.selectionStart()},t=()=>{o()&&i.selectionChanged()},d=()=>{o()&&i.selectionEnd()},c=n=>{o()&&i.impact(n)}},8360:(C,m,a)=>{a.d(m,{I:()=>s,a:()=>c,b:()=>o,c:()=>w,d:()=>E,f:()=>n,g:()=>d,i:()=>t,p:()=>p,r:()=>M,s:()=>r});var v=a(5861),l=a(839),g=a(6710);const o="ion-content",s=".ion-content-scroll-host",e=`${o}, ${s}`,t=h=>"ION-CONTENT"===h.tagName,d=function(){var h=(0,v.Z)(function*(_){return t(_)?(yield new Promise(f=>(0,l.c)(_,f)),_.getScrollElement()):_});return function(f){return h.apply(this,arguments)}}(),c=h=>h.querySelector(s)||h.querySelector(e),n=h=>h.closest(e),r=(h,_)=>t(h)?h.scrollToTop(_):Promise.resolve(h.scrollTo({top:0,left:0,behavior:_>0?"smooth":"auto"})),w=(h,_,f,y)=>t(h)?h.scrollByPoint(_,f,y):Promise.resolve(h.scrollBy({top:f,left:_,behavior:y>0?"smooth":"auto"})),p=h=>(0,g.b)(h,o),E=h=>{if(t(h)){const f=h.scrollY;return h.scrollY=!1,f}return h.style.setProperty("overflow","hidden"),!0},M=(h,_)=>{t(h)?h.scrollY=_:h.style.removeProperty("overflow")}},3173:(C,m,a)=>{a.d(m,{a:()=>v,b:()=>w,c:()=>e,d:()=>p,e:()=>L,f:()=>s,g:()=>E,h:()=>g,i:()=>l,j:()=>y,k:()=>O,l:()=>t,m:()=>n,n:()=>M,o:()=>c,p:()=>o,q:()=>i,r:()=>f,s:()=>u,t:()=>r,u:()=>h,v:()=>_,w:()=>d});const v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},2894:(C,m,a)=>{a.d(m,{c:()=>i,g:()=>o});var v=a(6225),l=a(839),g=a(6710);const i=(e,t,d)=>{let c,n;void 0!==v.w&&"MutationObserver"in v.w&&(c=new MutationObserver(E=>{for(const M of E)for(const h of M.addedNodes)if(h.nodeType===Node.ELEMENT_NODE&&h.slot===t)return d(),void(0,l.r)(()=>r(h))}),c.observe(e,{childList:!0}));const r=E=>{var M;n&&(n.disconnect(),n=void 0),n=new MutationObserver(h=>{d();for(const _ of h)for(const f of _.removedNodes)f.nodeType===Node.ELEMENT_NODE&&f.slot===t&&p()}),n.observe(null!==(M=E.parentElement)&&void 0!==M?M:E,{subtree:!0,childList:!0})},p=()=>{n&&(n.disconnect(),n=void 0)};return{destroy:()=>{c&&(c.disconnect(),c=void 0),p()}}},o=(e,t,d)=>{const c=null==e?0:e.toString().length,n=s(c,t);if(void 0===d)return n;try{return d(c,t)}catch(r){return(0,g.a)("Exception in provided `counterFormatter`.",r),n}},s=(e,t)=>`${e} / ${t}`},7484:(C,m,a)=>{a.d(m,{K:()=>i,a:()=>g});var v=a(4874),l=function(o){return o.Unimplemented="UNIMPLEMENTED",o.Unavailable="UNAVAILABLE",o}(l||{}),g=function(o){return o.Body="body",o.Ionic="ionic",o.Native="native",o.None="none",o}(g||{});const i={getEngine(){const o=(0,v.g)();if(null!=o&&o.isPluginAvailable("Keyboard"))return o.Plugins.Keyboard},getResizeMode(){const o=this.getEngine();return null!=o&&o.getResizeMode?o.getResizeMode().catch(s=>{if(s.code!==l.Unimplemented)throw s}):Promise.resolve(void 0)}}},1612:(C,m,a)=>{a.r(m),a.d(m,{KEYBOARD_DID_CLOSE:()=>o,KEYBOARD_DID_OPEN:()=>i,copyVisualViewport:()=>O,keyboardDidClose:()=>h,keyboardDidOpen:()=>E,keyboardDidResize:()=>M,resetKeyboardAssist:()=>c,setKeyboardClose:()=>p,setKeyboardOpen:()=>w,startKeyboardAssist:()=>n,trackViewportChanges:()=>y});var v=a(7484);a(4874),a(6225);const i="ionKeyboardDidShow",o="ionKeyboardDidHide";let e={},t={},d=!1;const c=()=>{e={},t={},d=!1},n=u=>{if(v.K.getEngine())r(u);else{if(!u.visualViewport)return;t=O(u.visualViewport),u.visualViewport.onresize=()=>{y(u),E()||M(u)?w(u):h(u)&&p(u)}}},r=u=>{u.addEventListener("keyboardDidShow",L=>w(u,L)),u.addEventListener("keyboardDidHide",()=>p(u))},w=(u,L)=>{_(u,L),d=!0},p=u=>{f(u),d=!1},E=()=>!d&&e.width===t.width&&(e.height-t.height)*t.scale>150,M=u=>d&&!h(u),h=u=>d&&t.height===u.innerHeight,_=(u,L)=>{const D=new CustomEvent(i,{detail:{keyboardHeight:L?L.keyboardHeight:u.innerHeight-t.height}});u.dispatchEvent(D)},f=u=>{const L=new CustomEvent(o);u.dispatchEvent(L)},y=u=>{e=Object.assign({},t),t=O(u.visualViewport)},O=u=>({width:Math.round(u.width),height:Math.round(u.height),offsetTop:u.offsetTop,offsetLeft:u.offsetLeft,pageTop:u.pageTop,pageLeft:u.pageLeft,scale:u.scale})},3459:(C,m,a)=>{a.d(m,{c:()=>s});var v=a(5861),l=a(6225),g=a(7484);const i=e=>{if(void 0===l.d||e===g.a.None||void 0===e)return null;const t=l.d.querySelector("ion-app");return null!=t?t:l.d.body},o=e=>{const t=i(e);return null===t?0:t.clientHeight},s=function(){var e=(0,v.Z)(function*(t){let d,c,n,r;const w=function(){var _=(0,v.Z)(function*(){const f=yield g.K.getResizeMode(),y=void 0===f?void 0:f.mode;d=()=>{void 0===r&&(r=o(y)),n=!0,p(n,y)},c=()=>{n=!1,p(n,y)},null==l.w||l.w.addEventListener("keyboardWillShow",d),null==l.w||l.w.addEventListener("keyboardWillHide",c)});return function(){return _.apply(this,arguments)}}(),p=(_,f)=>{t&&t(_,E(f))},E=_=>{if(0===r||r===o(_))return;const f=i(_);return null!==f?new Promise(y=>{const u=new ResizeObserver(()=>{f.clientHeight===r&&(u.disconnect(),y())});u.observe(f)}):void 0};return yield w(),{init:w,destroy:()=>{null==l.w||l.w.removeEventListener("keyboardWillShow",d),null==l.w||l.w.removeEventListener("keyboardWillHide",c),d=c=void 0},isKeyboardVisible:()=>n}});return function(d){return e.apply(this,arguments)}}()},679:(C,m,a)=>{a.d(m,{c:()=>g});var v=a(6225),l=a(839);const g=(i,o,s)=>{let e;const t=()=>!(void 0===o()||void 0!==i.label||null===s()),c=()=>{const r=o();if(void 0===r)return;if(!t())return void r.style.removeProperty("width");const w=s().scrollWidth;if(0===w&&null===r.offsetParent&&void 0!==v.w&&"IntersectionObserver"in v.w){if(void 0!==e)return;const p=e=new IntersectionObserver(E=>{1===E[0].intersectionRatio&&(c(),p.disconnect(),e=void 0)},{threshold:.01,root:i});p.observe(r)}else r.style.setProperty("width",.75*w+"px")};return{calculateNotchWidth:()=>{t()&&(0,l.r)(()=>{c()})},destroy:()=>{e&&(e.disconnect(),e=void 0)}}}},3781:(C,m,a)=>{a.d(m,{S:()=>l});const l={bubbles:{dur:1e3,circles:9,fn:(g,i,o)=>{const s=g*i/o-g+"ms",e=2*Math.PI*i/o;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(g,i,o)=>{const s=i/o,e=g*s-g+"ms",t=2*Math.PI*s;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(g,i)=>({r:6,style:{left:32-32*i+"%","animation-delay":-110*i+"ms"}})},lines:{dur:1e3,lines:8,fn:(g,i,o)=>({y1:14,y2:26,style:{transform:`rotate(${360/o*i+(i<o/2?180:-180)}deg)`,"animation-delay":g*i/o-g+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(g,i,o)=>({y1:12,y2:20,style:{transform:`rotate(${360/o*i+(i<o/2?180:-180)}deg)`,"animation-delay":g*i/o-g+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(g,i,o)=>({y1:17,y2:29,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":g*i/o-g+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(g,i,o)=>({y1:12,y2:20,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":g*i/o-g+"ms"}})}}},8466:(C,m,a)=>{a.r(m),a.d(m,{createSwipeBackGesture:()=>o});var v=a(839),l=a(5085),g=a(9203);a(619);const o=(s,e,t,d,c)=>{const n=s.ownerDocument.defaultView;let r=(0,l.i)(s);const p=f=>r?-f.deltaX:f.deltaX;return(0,g.createGesture)({el:s,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:f=>(r=(0,l.i)(s),(f=>{const{startX:O}=f;return r?O>=n.innerWidth-50:O<=50})(f)&&e()),onStart:t,onMove:f=>{const O=p(f)/n.innerWidth;d(O)},onEnd:f=>{const y=p(f),O=n.innerWidth,u=y/O,L=(f=>r?-f.velocityX:f.velocityX)(f),D=L>=0&&(L>.2||y>O/2),P=(D?1-u:u)*O;let S=0;if(P>5){const T=P/Math.abs(L);S=Math.min(T,540)}c(D,u<=0?.01:(0,v.l)(0,u,.9999),S)}})}},7063:(C,m,a)=>{a.d(m,{w:()=>v});const v=(i,o,s)=>{if(typeof MutationObserver>"u")return;const e=new MutationObserver(t=>{s(l(t,o))});return e.observe(i,{childList:!0,subtree:!0}),e},l=(i,o)=>{let s;return i.forEach(e=>{for(let t=0;t<e.addedNodes.length;t++)s=g(e.addedNodes[t],o)||s}),s},g=(i,o)=>1!==i.nodeType?void 0:(i.tagName===o.toUpperCase()?[i]:Array.from(i.querySelectorAll(o))).find(e=>e.value===i.value)}}]);