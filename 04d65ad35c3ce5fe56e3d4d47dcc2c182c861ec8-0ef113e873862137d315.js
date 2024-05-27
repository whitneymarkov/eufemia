"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[24313],{6436:function(e,t,n){n.d(t,{ZP:function(){return x}});var r=n(2784),a=n(95955),s=n.n(a),o=n(34763),l=n(52750),u=n(77498),i=n(33496),c=n(8139),d=n(56239),f=n(43151),h=n(21608),m=n(21068),v=n(57039),b=n(52322);const p="undefined"==typeof window?r.useEffect:r.useLayoutEffect,g=/^\/\d+(\/|$)/;function x(e){var t;const{1:n}=(0,r.useReducer)((()=>({})),{}),{id:a,globalStatusId:x="main",defaultData:_,data:w,schema:S,onChange:y,onPathChange:C,onSubmit:k,onSubmitRequest:Z,onSubmitComplete:j,scrollTopOnSubmit:R,minimumAsyncBehaviorTime:O,asyncSubmitTimeout:E,sessionStorageId:F,ajvInstance:P,transformIn:z,transformOut:A,filterSubmitData:D,filterData:T,locale:M,translations:I,required:B,errorMessages:H,children:N,...$}=e;if(void 0!==w&&void 0!==F)throw new Error('Use "defaultData" instead of "data" when using sessionStorageId');const q=(0,r.useContext)(m.Z);if(null!=q&&q.hasContext)throw new Error("DataContext (Form.Handler) can not be nested");const L=(0,h.Z)().Form,V=(0,r.useRef)((0,o.Oy)(P)),W=(0,r.useRef)([]),U=(0,r.useRef)(),J=(0,r.useRef)(!1),K=(0,r.useCallback)((e=>{J.current=e,n()}),[]),X=(0,r.useRef)({}),G=(0,r.useCallback)((e=>{Object.assign(X.current,e),n()}),[]),Q=(0,r.useRef)(),Y=(0,r.useCallback)((e=>{Q.current=e,n()}),[]),ee=(0,r.useRef)({}),te=(0,r.useRef)({}),ne=(0,r.useMemo)((()=>{if(F&&"undefined"!=typeof window){var e;const t=null===(e=window.sessionStorage)||void 0===e?void 0:e.getItem(F);if(t)return JSON.parse(t)}return null!=w?w:_}),[]),re=(0,r.useRef)(ne),ae=(0,r.useRef)(),se=(0,r.useCallback)((()=>{var e;ae.current&&(null!==(e=ae.current)&&void 0!==e&&e.call(ae,re.current)?U.current=void 0:U.current=(0,o.gs)(ae.current.errors,re.current))}),[]),oe=(0,r.useCallback)((()=>{ae.current&&(se(),n())}),[se]),le=(0,r.useCallback)(((e,t)=>{var n;return Boolean("error"===t?(null===(n=U.current)||void 0===n?void 0:n[e])instanceof Error||ee.current[e]instanceof Error:te.current[e]===t)}),[]),ue=(0,r.useCallback)((e=>W.current.some((t=>le(t,e)))),[le]),ie=(0,r.useCallback)((e=>W.current.some((t=>t===e&&le(t,"error")))),[le]),ce=(0,r.useCallback)((()=>ue("error")),[ue]),de=(0,r.useCallback)(((e,t)=>{ee.current[e]=t}),[]),fe=(0,r.useCallback)(((e,t)=>{t!==te.current[e]&&(te.current[e]=t,n())}),[]),he=(0,r.useCallback)((function(e,t,n){void 0===n&&(n=!1);const r=(t,r)=>{n?!1===r&&(e=(0,v.ZP)(e),s().remove(e,t)):void 0!==r&&(e=(0,v.ZP)(e),s().set(e,t,r))};return"function"==typeof t?(Object.entries(ve.current).forEach((n=>{let[a,o]=n;if(s().has(e,a)){var l;const n=s().get(e,a),u={error:null===(l=ee.current)||void 0===l?void 0:l[a]},i=t({path:a,value:n,data:re.current,props:o,internal:u});r(a,i)}})),e):t?(Object.entries(t).forEach((t=>{let[n,a]=t;if(s().has(e,n)){var o,l;const t=s().get(e,n),u=null===(o=ve.current)||void 0===o?void 0:o[n],i={error:null===(l=ee.current)||void 0===l?void 0:l[n]},c="function"==typeof a?a({value:t,data:re.current,props:u,internal:i}):a;r(n,c)}})),e):e}),[]),me=(0,r.useCallback)((function(e,t){return void 0===t&&(t=T||D),t?he(e,t,!0):e}),[T,D,he]),ve=(0,r.useRef)({}),be=(0,r.useRef)({}),pe=(0,r.useCallback)(((e,t)=>{ve.current[e]=t}),[]),ge=(0,r.useCallback)(((e,t)=>{be.current[e]=t}),[]),xe=(0,r.useCallback)((()=>{for(const e in ve.current)if(W.current.includes(e)){const t=ve.current[e];if((0,d.S)(t.validator)||(0,d.S)(t.onBlurValidator))return!0}return!1}),[]),_e=(0,f.O)(a),we=(0,f.O)(a+"-attachments"),Se=_e.set,ye=_e.extend,Ce=we.extend,ke=null===(t=we.data)||void 0===t?void 0:t.rerenderUseDataHook,Ze=(0,r.useRef)({data:w,schema:S,shared:_e.data,hasUsedInitialData:!1});re.current=(0,r.useMemo)((()=>(a&&ne&&!_e.data&&_e.update(ne),a&&ne&&_e.data&&Ze.current.shared===_e.data&&re.current===ne?{...re.current,..._e.data}:a&&!ne&&!re.current&&_e.data&&Ze.current.shared===_e.data?_e.data:a&&_e.data&&Ze.current.shared!==_e.data&&_e.data!==re.current?(Ze.current.shared=_e.data,{...re.current,..._e.data}):w!==Ze.current.data?(Ze.current.data=w,w):re.current)),[w,a,ne,_e]),p((()=>{a&&ne&&!_e.data&&(null==ye||ye(ne))}),[a,ne,ye,_e.data]),(0,r.useMemo)((()=>{se()}),[re.current]),p((()=>{a&&(null==Ce||Ce({filterDataHandler:me,hasErrors:ce,hasFieldError:ie,setShowAllErrors:K,setSubmitState:G}),(T||D)&&(null==ke||ke()))}),[Ce,T,me,D,ce,ie,a,ke,K,G]);const je=(0,r.useMemo)((()=>(0,l.D)((()=>{var e;null===(e=window.sessionStorage)||void 0===e||e.setItem(F,JSON.stringify(re.current))}),800)),[F]),Re=(0,r.useCallback)(((e,t)=>{var r;if(!e)return;const o="/"===e?t:null!==(r=re.current)&&void 0!==r?r:e.match(g)?[]:{};let l=null;try{l=(0,v.ZP)(o)}catch(u){l=o}"/"!==e&&s().set(l,e,t),z&&(l=he(l,z)),re.current=l,a&&(null==ye||ye(l),(T||D)&&(null==ke||ke())),F&&"undefined"!=typeof window&&je(),n()}),[ye,T,D,a,he,ke,F,je,z]),Oe=(0,r.useCallback)((e=>{re.current=e,n()}),[]),Ee=(0,r.useCallback)((async(e,t)=>{if(!e)return null;Re(e,t),(0,d.S)(C)?await(null==C?void 0:C(e,t)):null==C||C(e,t)}),[C,Re]),Fe=(0,r.useCallback)((async function(e,t){if(void 0===t&&(t="_undefined_"),!e)return null;"_undefined_"!==t&&Ee(e,t),J.current=!1,oe();const n=re.current,r=A?he(n,A):n;return(0,d.S)(y)?await y(r):null==y?void 0:y(r)}),[Ee,he,y,A,oe]),Pe=(0,r.useCallback)((e=>{W.current=function(e,t){return e.includes(t)?e:e.concat(t)}(W.current,e)}),[]),ze=(0,r.useCallback)((e=>{W.current=function(e,t){return e.filter((e=>e!==t))}(W.current,e)}),[]),Ae=(0,r.useCallback)((()=>{var e,t;"undefined"!=typeof window&&(null===(e=window)||void 0===e||null===(t=e.scrollTo)||void 0===t||t.call(e,{top:0,behavior:"smooth"}))}),[]),De=(0,r.useCallback)((async e=>{const{onSubmit:t,enableAsyncBehaviour:n,skipFieldValidation:r,skipErrorCheck:a}=e;G({error:void 0});const s=(!!a||(!ce()||ue("pending")))&&(n||xe());if(s&&Y("pending"),!r)for(const{path:l,type:u,callback:i}of Me.current)"onSubmit"===u&&W.current.includes(l)&&(s?await i():i());if(!a&&ce()||ue("pending")||!r&&ue("error"))s&&(window.requestAnimationFrame((()=>{Y(void 0)})),r||(Be.current=()=>{window.requestAnimationFrame((()=>{De({...e,skipFieldValidation:!0})}))})),null==Z||Z(),K(!0);else{let e;try{if(e=await t(),e instanceof Error)throw e}catch(o){e={error:o}}const n=e;s&&Y(null!=n&&n.error?"abort":"complete"),null!=n&&n.status&&Y(null==n?void 0:n.status),(null!=n&&n.error||null!=n&&n.warning||null!=n&&n.info)&&G(n)}return re.current}),[G,ce,xe,ue,Y,Z,K]),Te=(0,r.useCallback)((async function(e){let{formElement:t=null}=void 0===e?{}:e;De({enableAsyncBehaviour:(0,d.S)(k),onSubmit:async()=>{const e=re.current,r=me(A?he(e,A):e),s={resetForm:()=>{var e;null==t||null===(e=t.reset)||void 0===e||e.call(t),"undefined"!=typeof window&&F&&window.sessionStorage.removeItem(F),n()},clearData:()=>{re.current={},a?null==Se||Se({}):n()}};let o;o=(0,d.S)(k)?await k(r,s):null==k?void 0:k(r,s);const l=await(null==j?void 0:j(r,o));return l&&(o=Object.keys(o).length>0?{...o,...l}:l),R&&Ae(),o}})}),[me,De,a,he,k,j,Ae,R,F,Se,A]),Me=(0,r.useRef)([]),Ie=(0,r.useCallback)(((e,t,n)=>{Me.current=Me.current.filter((n=>{let{path:r,type:a}=n;return!(r===e&&a===t)})),Me.current.push({path:e,type:t,callback:n})}),[]),Be=(0,r.useRef)(null);var He;ue("pending")||(null===(He=Be.current)||void 0===He||He.call(Be),Be.current=null);(0,i.Z)((()=>{var e;S&&(ae.current=null===(e=V.current)||void 0===e?void 0:e.compile(S));oe()})),(0,c.Z)((()=>{var e;S&&S!==Ze.current.schema&&(Ze.current.schema=S,ae.current=null===(e=V.current)||void 0===e?void 0:e.compile(S),oe(),n())}),[S,oe,n]);const Ne=(0,r.useCallback)((()=>{Y(void 0),G({info:void 0,warning:void 0,error:void 0})}),[Y,G]),{bufferedFormState:$e}=function(e){const{formState:t,waitFor:n,minimumAsyncBehaviorTime:a,asyncSubmitTimeout:s,onTimeout:o}=e||{},{1:l}=(0,r.useReducer)((()=>({})),{}),u=(0,r.useRef)(),i=(0,r.useRef)(null),c=(0,r.useRef)({}),d=(0,r.useCallback)((e=>{u.current=e,l()}),[l]),f=(0,r.useCallback)((()=>{for(const e in c.current)clearTimeout(c.current[e])}),[]),h=(0,r.useRef)(!1),m=(0,r.useRef)(null);return(0,r.useEffect)((()=>{const e=!1,r=null!=a?a:e?1:1e3;if(u.current&&"error"===t)return f(),void d(void 0);if("abort"===t)return f(),d("abort"),void(c.current.reset=setTimeout((()=>{i.current=0,d(void 0)}),r));if("complete"===t&&(h.current=!0),"pending"===t&&"pending"!==u.current)m.current=document.activeElement,f(),i.current=Date.now(),h.current=!1,d("pending");else if("pending"===u.current){const t=Math.max(Date.now()-i.current),a=e?r:Math.max(r-t,0);n||(c.current.complete=setTimeout((()=>{h.current&&d("complete"),window.requestAnimationFrame((()=>{var e,t;null===(e=m.current)||void 0===e||null===(t=e.focus)||void 0===t||t.call(e)}))}),a),c.current.reset=setTimeout((()=>{i.current=0,d(void 0),f()}),a+r))}return"pending"===u.current&&(c.current.timeout=setTimeout((()=>{f(),d(void 0),null==o||o()}),null!=s?s:3e4)),f}),[f,a,t,d,n,s,o]),{bufferedFormState:u.current}}({formState:Q.current,waitFor:ue("pending"),minimumAsyncBehaviorTime:O,asyncSubmitTimeout:E,onTimeout:Ne}),qe=X.current,Le="boolean"==typeof(null==$?void 0:$.disabled)?null==$?void 0:$.disabled:"pending"===$e==!0||void 0;return(0,b.jsx)(m.Z.Provider,{value:{handlePathChange:Fe,handlePathChangeUnvalidated:Ee,handleSubmit:Te,handleMountField:Pe,handleUnMountField:ze,handleSubmitCall:De,setFormState:Y,setSubmitState:G,setShowAllErrors:K,setFieldEventListener:Ie,setFieldState:fe,setFieldError:de,setFieldProps:pe,setValueProps:ge,hasErrors:ce,hasFieldError:ie,hasFieldState:ue,validateData:oe,updateDataValue:Re,setData:Oe,filterDataHandler:me,scrollToTop:Ae,schema:S,disabled:Le,required:B,formState:$e,submitState:qe,contextErrorMessages:H,hasContext:!0,errors:U.current,showAllErrors:J.current,fieldPropsRef:ve,valuePropsRef:be,ajvInstance:V.current,id:a,data:re.current,props:e,...$},children:(0,b.jsx)(u.Z,{FormStatus:x?{globalStatus:{id:x,title:L.errorSummaryTitle,show:J.current}}:void 0,formElement:Le?{disabled:!0}:void 0,locale:M||void 0,translations:I||void 0,children:N})})}},19404:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(2784),a=n(21068),s=n(80215),o=n(72779),l=n.n(o),u=n(52322);function i(e){let{children:t,className:n=null,onSubmit:o=null,...i}=e;const c=r.useContext(a.Z);return c.isInsideFormElement=!0,(0,u.jsx)(s.Z,{element:"form",className:l()("dnb-forms-form",n),onSubmit:function(e){var t;null==e||e.preventDefault();const n=e.target;null==c||null===(t=c.handleSubmit)||void 0===t||t.call(c,{formElement:n}),"function"==typeof o&&o(e)},...i,children:t})}},77498:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(2784),a=n(21068),s=n(11507);var o=n(12997),l=n(60131),u=n(52322);function i(e){const{children:t,formElement:n,FormStatus:i,overwriteProps:d,deep:f,...h}=e,m=(0,r.useContext)(o.Z),v=(0,r.useRef)();v.current=(0,r.useContext)(a.Z);const b={},{locale:p,translations:g}=(0,r.useMemo)((()=>({...h,...c(null==m?void 0:m.inheritedProps)})),[null==m?void 0:m.inheritedProps,h]),x=(0,r.useMemo)((()=>Object.assign((null==m?void 0:m.inheritedProps)||{},h)),[null==m?void 0:m.inheritedProps,h]);"boolean"==typeof x.disabled&&(b.formElement={disabled:x.disabled}),n&&(b.formElement=n),i&&(b.FormStatus=i),p&&(b.locale=p),g&&(b.translations=function(e){const t={},n=e;for(const r in n){const e={Forms:{}};for(const t in n[r]){const a={};for(const e in n[r][t])a[e]=n[r][t][e];e.Forms[t]=a}t[r]=e}return t}(g));const _=(0,r.useCallback)((e=>{var t,n,r;const{required:a}=v.current,o=null==e||null===(t=e.path)||void 0===t||null===(n=t.split("/"))||void 0===n?void 0:n.pop(),l=null==d?void 0:d[o];l&&null!=e&&e.schema&&Object.keys(e.schema).forEach((t=>{null!=l&&l[t]&&(e.schema[t]=l[t])}));const u=function(e){e=Object.isFrozen(e)?{...e}:e;for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const a=(0,s.bz)(n);return Object.entries(a).reduce(((t,n)=>{let[r,a]=n;return e&&Object.prototype.hasOwnProperty.call(e,r)||(t[r]=a),t}),e||{})}(l?{...e,...l}:e,{required:null!=a?a:null==m||null===(r=m.inheritedContext)||void 0===r?void 0:r.required},x);return f?m.extend(u):u}),[f,m,d,x]);return(0,u.jsx)(o.Z.Provider,{value:{extend:_,inheritedProps:h,inheritedContext:x},children:(0,u.jsx)(l.Z,{...b,children:t})})}function c(e){void 0===e&&(e={});const t={};for(const n in e)void 0!==e[n]&&(t[n]=e[n]);return t}},33658:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(2784),a=n(6436),s=n(21068),o=n(19404),l=n(84928),u=n(67155),i=n(37339),c=n(52322);function d(e){let{children:t,defaultData:n,data:r,schema:s,ajvInstance:o,errorMessages:l,globalStatusId:u,filterSubmitData:i,filterData:d,transformIn:h,onChange:m,onPathChange:v,onSubmit:b,onSubmitRequest:p,onSubmitComplete:g,minimumAsyncBehaviorTime:x,asyncSubmitTimeout:_,scrollTopOnSubmit:w,sessionStorageId:S,autoComplete:y,locale:C,translations:k,disabled:Z,required:j,...R}=e;const O={id:R.id,defaultData:n,data:r,schema:s,ajvInstance:o,errorMessages:l,globalStatusId:u,filterSubmitData:i,filterData:d,transformIn:h,onChange:m,onPathChange:v,onSubmit:b,onSubmitRequest:p,onSubmitComplete:g,minimumAsyncBehaviorTime:x,asyncSubmitTimeout:_,scrollTopOnSubmit:w,sessionStorageId:S,autoComplete:y,locale:C,translations:k,disabled:Z,required:j};return(0,c.jsx)(a.ZP,{...O,children:(0,c.jsx)(f,{...R,children:t})})}function f(e){let{children:t,...n}=e;const a=(0,u.Z)(),{submitState:d}=(0,r.useContext)(s.Z)||{},f=Object.entries(d||{}).filter((e=>{let[,t]=e;return t}));return(0,c.jsxs)(o.Z,{...n,"aria-labelledby":(0,i.on)(n,f.map((e=>{let[t]=e;return`${a}-form-status-${t}`})))||void 0,children:[t,["error","warning","info"].map((e=>{const t=null==d?void 0:d[e];return(0,c.jsx)(l.ZP,{state:e,id:`${a}-form-status-${e}`,className:"dnb-forms-status",show:Boolean(t),no_animation:!1,shellSpace:{top:"small",bottom:"medium"},children:String((null==t?void 0:t.message)||t||"")},e)}))]})}},45031:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(2784),a=n(72779),s=n.n(a),o=n(37339),l=n(28952),u=n(89810).Z,i=n(47657),c=n(66292),d=n(88268),f=n(52322);function h(e){const t=(0,r.useContext)(l.Z),{variant:n,text:a,max:h,className:m,locale:v,...b}=e,p=(0,r.useRef)(a),g=/up|down/.test(String(n))?n:"down",x=(a||"").length,_=(0,r.useMemo)((()=>{if(!(h>0))return"";const n="down"===g?Math.abs(h-x):x,r=`character${x>h?"Exceeded":(0,o.Mh)(g)}`;return t.getTranslation(e).TextCounter[r].replace("%count",String(n)).replace("%max",String(h))}),[h,x,g,t,e]),w=(0,r.useMemo)((()=>{const e=p.current===a;return p.current=a,e}),[a]);return(0,f.jsxs)(d.Z,{size:"small",className:s()("dnb-text-counter",x>h&&"dnb-text-counter--exceeded",m),...b,children:[(0,f.jsx)(i.ZP,{icon:c.Z}),_,(0,f.jsx)(u,{element:"span",disabled:w,delay:2e3,children:_})]})}},66292:function(e,t,n){var r=n(52322);t.Z=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.jsx)("path",{stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M8 9.06V5.88m-.177 6.133h.346m6.612-.257a2.038 2.038 0 0 1-.09 1.998 2.083 2.083 0 0 1-1.761.973H3.07a2.082 2.082 0 0 1-1.761-.973 2.04 2.04 0 0 1-.09-1.998l4.93-8.62c.171-.342.435-.629.762-.83a2.082 2.082 0 0 1 2.94.83l4.93 8.62Zm-6.533.257c0 .183-.16.243-.248.243-.092 0-.252-.06-.252-.243 0-.197.16-.257.252-.257.088 0 .248.06.248.257Z"})})},16353:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(80753),a=n(81665),s=n(2784),o=n(72779),l=n.n(o),u=n(9149),i=n(79583),c=n(45031),d=n(37339),f=n(80945),h=n(11507),m=n(20364),v=n(57733),b=n(2045),p=n(59525),g=n(28952),x=n(67959),_=n(52322);let w=function(e){function t(n){var a;(a=e.call(this,n)||this).state={textareaState:"virgin",value:null,_value:null},a.onFocusHandler=e=>{const{value:t}=a._ref.current;a.setState({value:t,textareaState:"focus"}),(0,d.RW)((0,r.Z)(a),"on_focus",{value:t,event:e})},a.onBlurHandler=e=>{const{value:n}=e.target;a.setState({value:n,textareaState:t.hasValue(n)?"dirty":"initial"}),(0,d.RW)((0,r.Z)(a),"on_blur",{value:n,event:e})},a.onChangeHandler=e=>{const{value:t}=e.target,n=a.getProps(),s=(0,d.oA)(n.autoresize);s&&a.prepareAutosize();const o=a.getRows(t);!1!==(0,d.RW)((0,r.Z)(a),"on_change",{value:t,rows:o,event:e})&&(a.setState({value:t}),s&&a.setAutosize(o))},a.onKeyDownHandler=e=>{const t=a.getRows(),{value:n}=e.target;(0,d.RW)((0,r.Z)(a),"on_key_down",{value:n,rows:t,event:e})},a.prepareAutosize=()=>{const e=a._ref.current;if(e)try{e.style.height="auto"}catch(t){(0,f.ZK)(t)}},a.setAutosize=function(e){void 0===e&&(e=null);const t=a._ref.current;if(t)try{void 0===a._heightOffset&&(a._heightOffset=t.offsetHeight-t.clientHeight),t.style.height="auto";const n=a.getLineHeight();let r=t.scrollHeight+a._heightOffset;e||(e=a.getRows()),1===e&&r>n&&(r=n);const s=a.getProps(),o=parseFloat(s.autoresize_max_rows);if(o>0){const t=o*n;(e>o||r>t)&&(r=t)}t.style.height=r+"px"}catch(n){(0,f.ZK)(n)}},a._ref=s.createRef(),a._id=n.id||(0,d.Xo)(),n.textarea_state&&(a.state.textareaState=n.textarea_state);try{"undefined"!=typeof navigator&&(a.resizeModifier=!!(/Firefox|Edg/.test(navigator.userAgent)||/Chrome/.test(navigator.userAgent)&&/Win/.test(navigator.platform))&&"large",a.resizeModifier||(a.resizeModifier=!(!/Safari|Chrome/.test(navigator.userAgent)||!/Mac/.test(navigator.platform))&&"medium"))}catch(o){console.error(o)}return a}(0,a.Z)(t,e),t.getDerivedStateFromProps=function(e,n){const r=t.getValue(e);return"initval"!==r&&r!==n.value&&r!==n._value&&(r!==n.value&&"function"==typeof e.on_state_update&&(0,d.RW)({props:e},"on_state_update",{value:r}),n.value=r),e.textarea_state&&(n.textareaState=e.textarea_state),n._value=e.value,n},t.hasValue=function(e){return("string"==typeof e||"number"==typeof e)&&String(e).length>0||!1},t.getValue=function(e){const n=(0,d.Ob)(e);return""===n||t.hasValue(n)?n:e.value};var n=t.prototype;return n.componentDidMount=function(){const e=this.getProps();if(e.inner_ref&&("function"==typeof e.inner_ref?e.inner_ref(this._ref.current):e.inner_ref.current=this._ref.current),(0,d.oA)(e.autoresize)&&"undefined"!=typeof window){this.setAutosize();try{this.resizeObserver=new ResizeObserver(this.setAutosize),this.resizeObserver.observe(document.body)}catch(t){window.addEventListener("resize",this.setAutosize)}}},n.componentWillUnmount=function(){this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null),"undefined"!=typeof window&&window.removeEventListener("resize",this.setAutosize)},n.getRows=function(){return Math.floor(this._ref.current.scrollHeight/this.getLineHeight())||1},n.getLineHeight=function(){return parseFloat(getComputedStyle(this._ref.current).lineHeight)||0},n.getProps=function(){var e,n,r;return(0,h.$P)(this.props,t.defaultProps,{skeleton:null===(e=this.context)||void 0===e?void 0:e.skeleton},this.context.getTranslation(this.props).Textarea,(0,m.gv)(null===(n=this.context)||void 0===n?void 0:n.FormRow),(0,m.gv)(null===(r=this.context)||void 0===r?void 0:r.formElement),this.context.Textarea)},n.render=function(){const e=this.getProps(),{label:n,label_direction:r,label_sr_only:a,status:s,status_state:o,status_props:f,status_no_animation:h,globalStatus:m,suffix:g,disabled:w,skeleton:S,stretch:y,placeholder:C,keepPlaceholder:k,align:Z,size:j,textarea_class:R,readOnly:O,textarea_attributes:E,class:F,className:P,autoresize:z,characterCounter:A,autoresize_max_rows:D,id:T,children:M,value:I,textarea_element:B,...H}=e,{value:N,textareaState:$}=this.state,q=this._id,L=(0,d.Bx)(s),V=t.hasValue(N);let{textarea_element:W}=e;const U=E?"string"==typeof E?JSON.parse(E):E:{},J={className:l()("dnb-textarea__textarea",R),role:"textbox",value:V?N:"",id:q,name:q,disabled:(0,d.oA)(w)||(0,d.oA)(S),"aria-placeholder":C?(0,d.F4)(C):void 0,...H,...U,onChange:this.onChangeHandler,onFocus:this.onFocusHandler,onBlur:this.onBlurHandler,onKeyDown:this.onKeyDownHandler};(L||g)&&(J["aria-describedby"]=(0,d.u5)(J,L?q+"-status":null,g?q+"-suffix":null)),O&&(J["aria-readonly"]=J.readOnly=!0);const K={className:l()("dnb-textarea",`dnb-textarea--${$}`,w&&"dnb-textarea--disabled",V&&"dnb-textarea--has-content",Z&&`dnb-textarea__align--${Z}`,j&&`dnb-textarea__size--${j}`,s&&`dnb-textarea__status--${o}`,z&&"dnb-textarea__autoresize",!z&&this.resizeModifier&&`dnb-textarea__resize--${this.resizeModifier}`,r&&`dnb-textarea--${r}`,(0,d.oA)(y)&&"dnb-textarea--stretch",(0,d.oA)(k)&&"dnb-textarea--keep-placeholder","dnb-form-component",(0,p.BD)(null,S),(0,b.HU)(e),F,P)},X={className:l()("dnb-textarea__inner",(0,p.BD)("shape",S,this.context))},G={className:l()("dnb-textarea__shell")};((0,d.oA)(w)||(0,d.oA)(S))&&(G["aria-disabled"]=!0);const Q=parseFloat(e.rows)>0?{"--textarea-rows":parseFloat(e.rows)}:null;return(0,p.rZ)(X,S,this.context),(0,d.L_)(this.props,J),(0,d.L_)(null,X),(0,d.L_)(null,G),W&&"function"==typeof W?W=W(J,this._ref):!W&&B&&(W=B),(0,_.jsxs)("span",{...K,children:[n&&(0,_.jsx)(u.Z,{id:q+"-label",for_id:q,text:n,label_direction:r,sr_only:a,disabled:w,skeleton:S}),(0,_.jsxs)("span",{...X,children:[(0,_.jsx)(v.Z,{}),(0,_.jsx)(i.ZP,{show:L,id:q+"-form-status",globalStatus:m,label:n,text_id:q+"-status",text:s,state:o,no_animation:h,skeleton:S,...f}),(0,_.jsxs)("span",{className:"dnb-textarea__row",children:[(0,_.jsxs)("span",{...G,children:[W||(0,_.jsx)("textarea",{ref:this._ref,...J}),!V&&C&&("focus"!==$||k)&&(0,_.jsx)("span",{className:l()("dnb-textarea__placeholder",Z?`dnb-textarea__align--${Z}`:null),style:Q,"aria-hidden":!0,children:C}),(0,_.jsx)("span",{className:"dnb-textarea__state"})]}),g&&(0,_.jsx)(x.Z,{className:"dnb-textarea__suffix",id:q+"-suffix",context:e,children:g})]}),A&&(0,_.jsx)(c.Z,{top:"x-small",text:N,max:A,lang:e.lang,locale:e.locale,...A})]})]})},t}(s.PureComponent);w.contextType=g.Z,w.defaultProps={value:"initval",id:null,label:null,label_direction:null,label_sr_only:null,status:null,textarea_state:null,status_state:"error",status_props:null,status_no_animation:null,globalStatus:null,suffix:null,placeholder:null,keepPlaceholder:null,align:null,size:null,stretch:null,disabled:null,skeleton:null,autoresize:null,autoresize_max_rows:null,characterCounter:null,textarea_class:null,class:null,textarea_attributes:null,readOnly:!1,rows:null,cols:null,inner_ref:null,className:null,textarea_element:null,children:null,on_change:null,on_focus:null,on_blur:null,on_key_down:null,on_state_update:null},w._formElement=!0,w._supportsSpacingProps=!0},57039:function(e,t,n){n.d(t,{ZP:function(){return d}});const r="object"==typeof self?self:globalThis,a=e=>((e,t)=>{const n=(t,n)=>(e.set(n,t),t),a=s=>{if(e.has(s))return e.get(s);const[o,l]=t[s];switch(o){case 0:case-1:return n(l,s);case 1:{const e=n([],s);for(const t of l)e.push(a(t));return e}case 2:{const e=n({},s);for(const[t,n]of l)e[a(t)]=a(n);return e}case 3:return n(new Date(l),s);case 4:{const{source:e,flags:t}=l;return n(new RegExp(e,t),s)}case 5:{const e=n(new Map,s);for(const[t,n]of l)e.set(a(t),a(n));return e}case 6:{const e=n(new Set,s);for(const t of l)e.add(a(t));return e}case 7:{const{name:e,message:t}=l;return n(new r[e](t),s)}case 8:return n(BigInt(l),s);case"BigInt":return n(Object(BigInt(l)),s)}return n(new r[o](l),s)};return a})(new Map,e)(0),s="",{toString:o}={},{keys:l}=Object,u=e=>{const t=typeof e;if("object"!==t||!e)return[0,t];const n=o.call(e).slice(8,-1);switch(n){case"Array":return[1,s];case"Object":return[2,s];case"Date":return[3,s];case"RegExp":return[4,s];case"Map":return[5,s];case"Set":return[6,s]}return n.includes("Array")?[1,n]:n.includes("Error")?[7,n]:[2,n]},i=([e,t])=>0===e&&("function"===t||"symbol"===t),c=(e,{json:t,lossy:n}={})=>{const r=[];return((e,t,n,r)=>{const a=(e,t)=>{const a=r.push(e)-1;return n.set(t,a),a},s=r=>{if(n.has(r))return n.get(r);let[o,c]=u(r);switch(o){case 0:{let t=r;switch(c){case"bigint":o=8,t=r.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);t=null;break;case"undefined":return a([-1],r)}return a([o,t],r)}case 1:{if(c)return a([c,[...r]],r);const e=[],t=a([o,e],r);for(const n of r)e.push(s(n));return t}case 2:{if(c)switch(c){case"BigInt":return a([c,r.toString()],r);case"Boolean":case"Number":case"String":return a([c,r.valueOf()],r)}if(t&&"toJSON"in r)return s(r.toJSON());const n=[],d=a([o,n],r);for(const t of l(r))!e&&i(u(r[t]))||n.push([s(t),s(r[t])]);return d}case 3:return a([o,r.toISOString()],r);case 4:{const{source:e,flags:t}=r;return a([o,{source:e,flags:t}],r)}case 5:{const t=[],n=a([o,t],r);for(const[a,o]of r)(e||!i(u(a))&&!i(u(o)))&&t.push([s(a),s(o)]);return n}case 6:{const t=[],n=a([o,t],r);for(const a of r)!e&&i(u(a))||t.push(s(a));return n}}const{message:d}=r;return a([o,{name:c,message:d}],r)};return s})(!(t||n),!!t,new Map,r)(e),r};var d="function"==typeof structuredClone?(e,t)=>t&&("json"in t||"lossy"in t)?a(c(e,t)):structuredClone(e):(e,t)=>a(c(e,t))}}]);
//# sourceMappingURL=04d65ad35c3ce5fe56e3d4d47dcc2c182c861ec8-0ef113e873862137d315.js.map