"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[32587],{6436:function(e,t,n){n.d(t,{ZP:function(){return x}});var r=n(2784),a=n(95955),s=n.n(a),o=n(34763),l=n(52750),u=n(60131),i=n(33496),c=n(8139),d=n(56239),f=n(43151),h=n(21608),m=n(21068),v=n(57039),b=n(52322);const p="undefined"==typeof window?r.useEffect:r.useLayoutEffect,g=/^\/\d+(\/|$)/;function x(e){var t;const{1:n}=(0,r.useReducer)((()=>({})),{}),{id:a,globalStatusId:x="main",defaultData:_,data:w,schema:S,onChange:y,onPathChange:k,onSubmit:C,onSubmitRequest:Z,onSubmitComplete:j,scrollTopOnSubmit:R,minimumAsyncBehaviorTime:z,asyncSubmitTimeout:O,sessionStorageId:A,ajvInstance:F,transformIn:T,transformOut:M,filterSubmitData:D,filterData:E,errorMessages:P,children:I,...B}=e;void 0!==w&&void 0!==A&&console.error("Providing both data and sessionStorageId could lead to competing data sources. To provide default data to use only before anything is changed in the interface, use defaultData.");const H=(0,h.Z)().Form,N=(0,r.useRef)((0,o.Oy)(F)),L=(0,r.useRef)([]),$=(0,r.useRef)(),V=(0,r.useRef)(!1),W=(0,r.useCallback)((e=>{V.current=e,n()}),[]),U=(0,r.useRef)({}),q=(0,r.useCallback)((e=>{Object.assign(U.current,e),n()}),[]),J=(0,r.useRef)(),K=(0,r.useCallback)((e=>{J.current=e,n()}),[]),X=(0,r.useRef)({}),G=(0,r.useRef)({}),Q=(0,r.useMemo)((()=>{if(A&&"undefined"!=typeof window){var e;const t=null===(e=window.sessionStorage)||void 0===e?void 0:e.getItem(A);if(t)return JSON.parse(t)}return null!=w?w:_}),[]),Y=(0,r.useRef)(Q),ee=(0,r.useRef)(),te=(0,r.useCallback)((()=>{var e;ee.current&&(null!==(e=ee.current)&&void 0!==e&&e.call(ee,Y.current)?$.current=void 0:$.current=(0,o.gs)(ee.current.errors,Y.current))}),[]),ne=(0,r.useCallback)((()=>{ee.current&&(te(),n())}),[te]),re=(0,r.useCallback)(((e,t)=>{var n;return Boolean("error"===t?(null===(n=$.current)||void 0===n?void 0:n[e])instanceof Error||X.current[e]instanceof Error:G.current[e]===t)}),[]),ae=(0,r.useCallback)((e=>L.current.some((t=>re(t,e)))),[re]),se=(0,r.useCallback)((()=>ae("error")),[ae]),oe=(0,r.useCallback)(((e,t)=>{X.current[e]=t}),[]),le=(0,r.useCallback)(((e,t)=>{t!==G.current[e]&&(G.current[e]=t,n())}),[]),ue=(0,r.useCallback)((function(e,t,n){return void 0===n&&(n=!1),t?(Object.entries(ce.current).forEach((r=>{let[a,o]=r;if(s().has(e,a)){var l;const r=t(a,s().get(e,a),o,{error:null===(l=X.current)||void 0===l?void 0:l[a]});n?!1===r&&(e=(0,v.ZP)(e),s().remove(e,a)):void 0!==r&&(e=(0,v.ZP)(e),s().set(e,a,r))}})),e):e}),[]),ie=(0,r.useCallback)((function(e,t){return void 0===t&&(t=E||D),t?ue(e,t,!0):e}),[E,D,ue]),ce=(0,r.useRef)({}),de=(0,r.useCallback)(((e,t)=>{ce.current[e]={...ce.current[e],...t}}),[]),fe=(0,r.useCallback)((()=>{for(const e in ce.current){const t=ce.current[e];if((0,d.S)(t.validator)||(0,d.S)(t.onBlurValidator))return!0}return!1}),[]),he=(0,f.O)(a),me=(0,f.O)(a+"-attachments"),ve=he.set,be=he.extend,pe=me.extend,ge=null===(t=me.data)||void 0===t?void 0:t.rerenderUseDataHook,xe=(0,r.useRef)({data:w,schema:S,shared:he.data,hasUsedInitialData:!1});Y.current=(0,r.useMemo)((()=>(a&&Q&&!he.data&&he.update(Q),a&&Q&&he.data&&xe.current.shared===he.data&&Y.current===Q?{...Y.current,...he.data}:a&&!Q&&!Y.current&&he.data&&xe.current.shared===he.data?he.data:a&&he.data&&xe.current.shared!==he.data&&he.data!==Y.current?(xe.current.shared=he.data,{...Y.current,...he.data}):w!==xe.current.data?(xe.current.data=w,w):Y.current)),[w,a,Q,he]),p((()=>{a&&Q&&!he.data&&(null==be||be(Q))}),[a,Q,be,he.data]),(0,r.useMemo)((()=>{te()}),[Y.current]),p((()=>{a&&(null==pe||pe({filterDataHandler:ie,hasErrors:se,setShowAllErrors:W,setSubmitState:q}),(E||D)&&(null==ge||ge()))}),[pe,E,ie,D,se,a,ge,W,q]);const _e=(0,r.useMemo)((()=>(0,l.D)((()=>{var e;null===(e=window.sessionStorage)||void 0===e||e.setItem(A,JSON.stringify(Y.current))}),800)),[A]),we=(0,r.useCallback)(((e,t)=>{var r;if(!e)return;const o="/"===e?t:null!==(r=Y.current)&&void 0!==r?r:e.match(g)?[]:{};let l=null;try{l=(0,v.ZP)(o)}catch(u){l=o}"/"!==e&&s().set(l,e,t),T&&(l=ue(l,T)),Y.current=l,a&&(null==be||be(l),(E||D)&&(null==ge||ge())),A&&"undefined"!=typeof window&&_e(),n()}),[be,E,D,a,ue,ge,A,_e,T]),Se=(0,r.useCallback)((e=>{Y.current=e,n()}),[]),ye=(0,r.useCallback)((async(e,t)=>{if(!e)return null;we(e,t),(0,d.S)(k)?await(null==k?void 0:k(e,t)):null==k||k(e,t)}),[k,we]),ke=(0,r.useCallback)((async function(e,t){if(void 0===t&&(t="_undefined_"),!e)return null;"_undefined_"!==t&&ye(e,t),V.current=!1,ne();const n=Y.current,r=M?ue(n,M):n;return(0,d.S)(y)?await y(r):null==y?void 0:y(r)}),[ye,ue,y,M,ne]),Ce=(0,r.useCallback)((e=>{L.current=function(e,t){return e.includes(t)?e:e.concat(t)}(L.current,e)}),[]),Ze=(0,r.useCallback)((e=>{var t;L.current=function(e,t){return e.filter((e=>e!==t))}(L.current,e),null!==(t=ce.current)&&void 0!==t&&t[e]&&delete ce.current[e]}),[]),je=(0,r.useCallback)((()=>{var e,t;"undefined"!=typeof window&&(null===(e=window)||void 0===e||null===(t=e.scrollTo)||void 0===t||t.call(e,{top:0,behavior:"smooth"}))}),[]),Re=(0,r.useCallback)((async e=>{const{onSubmit:t,enableAsyncBehaviour:n,skipFieldValidation:r,skipErrorCheck:a}=e;q({error:void 0});const s=(!!a||(!se()||ae("pending")))&&(n||fe());if(s&&K("pending"),!r)for(const{path:l,type:u,callback:i}of Oe.current)"onSubmit"===u&&L.current.includes(l)&&(s?await i():i());if(!a&&se()||ae("pending")||!r&&ae("error"))s&&(window.requestAnimationFrame((()=>{K(void 0)})),r||(Fe.current=()=>{window.requestAnimationFrame((()=>{Re({...e,skipFieldValidation:!0})}))})),null==Z||Z(),W(!0);else{let e;try{if(e=await t(),e instanceof Error)throw e}catch(o){e={error:o}}const n=e;s&&K(null!=n&&n.error?"abort":"complete"),null!=n&&n.status&&K(null==n?void 0:n.status),(null!=n&&n.error||null!=n&&n.warning||null!=n&&n.info)&&q(n)}return Y.current}),[q,se,fe,ae,K,Z,W]),ze=(0,r.useCallback)((async function(e){let{formElement:t=null}=void 0===e?{}:e;Re({enableAsyncBehaviour:(0,d.S)(C),onSubmit:async()=>{const e=Y.current,r=ie(M?ue(e,M):e),s={resetForm:()=>{var e;null==t||null===(e=t.reset)||void 0===e||e.call(t),"undefined"!=typeof window&&A&&window.sessionStorage.removeItem(A),n()},clearData:()=>{Y.current={},a?null==ve||ve({}):n()}};let o;o=(0,d.S)(C)?await C(r,s):null==C?void 0:C(r,s);const l=await(null==j?void 0:j(r,o));return l&&(o=Object.keys(o).length>0?{...o,...l}:l),R&&je(),o}})}),[ie,Re,a,ue,C,j,je,R,A,ve,M]),Oe=(0,r.useRef)([]),Ae=(0,r.useCallback)(((e,t,n)=>{Oe.current=Oe.current.filter((n=>{let{path:r,type:a}=n;return!(r===e&&a===t)})),Oe.current.push({path:e,type:t,callback:n})}),[]),Fe=(0,r.useRef)(null);var Te;ae("pending")||(null===(Te=Fe.current)||void 0===Te||Te.call(Fe),Fe.current=null);(0,i.Z)((()=>{var e;S&&(ee.current=null===(e=N.current)||void 0===e?void 0:e.compile(S));ne()})),(0,c.Z)((()=>{var e;S&&S!==xe.current.schema&&(xe.current.schema=S,ee.current=null===(e=N.current)||void 0===e?void 0:e.compile(S),ne(),n())}),[S,ne,n]);const Me=(0,r.useCallback)((()=>{K(void 0),q({info:void 0,warning:void 0,error:void 0})}),[K,q]),{bufferedFormState:De}=function(e){const{formState:t,waitFor:n,minimumAsyncBehaviorTime:a,asyncSubmitTimeout:s,onTimeout:o}=e||{},{1:l}=(0,r.useReducer)((()=>({})),{}),u=(0,r.useRef)(),i=(0,r.useRef)(null),c=(0,r.useRef)({}),d=(0,r.useCallback)((e=>{u.current=e,l()}),[l]),f=(0,r.useCallback)((()=>{for(const e in c.current)clearTimeout(c.current[e])}),[]),h=(0,r.useRef)(!1);return(0,r.useEffect)((()=>{const e=!1,r=null!=a?a:e?1:1e3;if(u.current&&"error"===t)return f(),void d(void 0);if("abort"===t)return f(),d("abort"),void(c.current.reset=setTimeout((()=>{i.current=0,d(void 0)}),r));if("complete"===t&&(h.current=!0),"pending"===t&&"pending"!==u.current)f(),i.current=Date.now(),h.current=!1,d("pending");else if("pending"===u.current){const t=Math.max(Date.now()-i.current),a=e?r:Math.max(r-t,0);n||(c.current.complete=setTimeout((()=>{h.current&&d("complete")}),a),c.current.reset=setTimeout((()=>{i.current=0,d(void 0),f()}),a+r))}return"pending"===u.current&&(c.current.timeout=setTimeout((()=>{f(),d(void 0),null==o||o()}),null!=s?s:3e4)),f}),[f,a,t,d,n,s,o]),{bufferedFormState:u.current}}({formState:J.current,waitFor:ae("pending"),minimumAsyncBehaviorTime:z,asyncSubmitTimeout:O,onTimeout:Me}),Ee=U.current,Pe="boolean"==typeof(null==B?void 0:B.disabled)?null==B?void 0:B.disabled:"pending"===De==!0||void 0;return(0,b.jsx)(m.Z.Provider,{value:{handlePathChange:ke,handlePathChangeUnvalidated:ye,handleSubmit:ze,handleMountField:Ce,handleUnMountField:Ze,handleSubmitCall:Re,setFormState:K,setSubmitState:q,setShowAllErrors:W,setFieldEventListener:Ae,setFieldState:le,setFieldError:oe,setProps:de,hasErrors:se,hasFieldState:ae,checkFieldStateFor:re,validateData:ne,updateDataValue:we,setData:Se,filterDataHandler:ie,scrollToTop:je,schema:S,disabled:Pe,formState:De,submitState:Ee,contextErrorMessages:P,hasContext:!0,errors:$.current,showAllErrors:V.current,mountedFieldPaths:L.current,ajvInstance:N.current,id:a,data:Y.current,props:e,...B},children:(0,b.jsx)(u.Z,{FormStatus:x?{globalStatus:{id:x,title:H.errorSummaryTitle,show:V.current}}:void 0,formElement:{disabled:Pe},children:I})})}},19404:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(2784),a=n(21068),s=n(80215),o=n(72779),l=n.n(o),u=n(52322);function i(e){let{children:t,className:n=null,onSubmit:o=null,...i}=e;const c=r.useContext(a.Z);return c._isInsideFormElement=!0,(0,u.jsx)(s.Z,{element:"form",className:l()("dnb-forms-form",n),onSubmit:function(e){var t;null==e||e.preventDefault();const n=e.target;null==c||null===(t=c.handleSubmit)||void 0===t||t.call(c,{formElement:n}),"function"==typeof o&&o(e)},...i,children:t})}},33658:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(2784),a=n(6436),s=n(21068),o=n(19404),l=n(84928),u=n(67155),i=n(37339),c=n(52322);function d(e){let{children:t,defaultData:n,data:r,schema:s,ajvInstance:o,errorMessages:l,globalStatusId:u,filterSubmitData:i,filterData:d,transformIn:h,onChange:m,onPathChange:v,onSubmit:b,onSubmitRequest:p,onSubmitComplete:g,minimumAsyncBehaviorTime:x,asyncSubmitTimeout:_,scrollTopOnSubmit:w,sessionStorageId:S,autoComplete:y,...k}=e;const C={id:k.id,defaultData:n,data:r,schema:s,ajvInstance:o,errorMessages:l,globalStatusId:u,filterSubmitData:i,filterData:d,transformIn:h,onChange:m,onPathChange:v,onSubmit:b,onSubmitRequest:p,onSubmitComplete:g,minimumAsyncBehaviorTime:x,asyncSubmitTimeout:_,scrollTopOnSubmit:w,sessionStorageId:S,autoComplete:y};return(0,c.jsx)(a.ZP,{...C,children:(0,c.jsx)(f,{...k,children:t})})}function f(e){let{children:t,...n}=e;const a=(0,u.Z)(),{submitState:d}=(0,r.useContext)(s.Z)||{},f=Object.entries(d).filter((e=>{let[,t]=e;return t}));return(0,c.jsxs)(o.Z,{...n,"aria-labelledby":(0,i.on)(n,f.map((e=>{let[t]=e;return`${a}-form-status-${t}`})))||void 0,children:[t,["error","warning","info"].map((e=>{const t=d[e];return(0,c.jsx)(l.ZP,{state:e,id:`${a}-form-status-${e}`,className:"dnb-forms-status",show:Boolean(t),no_animation:!1,shellSpace:{top:"small",bottom:"medium"},children:String((null==t?void 0:t.message)||t||"")},e)}))]})}},45031:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(2784),a=n(72779),s=n.n(a),o=n(37339),l=n(28952),u=n(89810).Z,i=n(47657),c=n(66292),d=n(88268),f=n(52322);function h(e){const t=(0,r.useContext)(l.Z),{variant:n,text:a,max:h,className:m,locale:v,...b}=e,p=(0,r.useRef)(a),g=/up|down/.test(String(n))?n:"down",x=(a||"").length,_=(0,r.useMemo)((()=>{if(!(h>0))return"";const n="down"===g?Math.abs(h-x):x,r=`character${x>h?"Exceeded":(0,o.Mh)(g)}`;return t.getTranslation(e).TextCounter[r].replace("%count",String(n)).replace("%max",String(h))}),[h,x,g,t,e]),w=(0,r.useMemo)((()=>{const e=p.current===a;return p.current=a,e}),[a]);return(0,f.jsxs)(d.Z,{size:"small",className:s()("dnb-text-counter",x>h&&"dnb-text-counter--exceeded",m),...b,children:[(0,f.jsx)(i.ZP,{icon:c.Z}),_,(0,f.jsx)(u,{element:"span",disabled:w,delay:2e3,children:_})]})}},66292:function(e,t,n){var r=n(52322);t.Z=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.jsx)("path",{stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M8 9.06V5.88m-.177 6.133h.346m6.612-.257a2.038 2.038 0 0 1-.09 1.998 2.083 2.083 0 0 1-1.761.973H3.07a2.082 2.082 0 0 1-1.761-.973 2.04 2.04 0 0 1-.09-1.998l4.93-8.62c.171-.342.435-.629.762-.83a2.082 2.082 0 0 1 2.94.83l4.93 8.62Zm-6.533.257c0 .183-.16.243-.248.243-.092 0-.252-.06-.252-.243 0-.197.16-.257.252-.257.088 0 .248.06.248.257Z"})})},42277:function(e,t,n){var r=n(52322);t.Z=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16",...e,children:(0,r.jsx)("path",{stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M9.5 11.5v-5m-3 5v-5M1 3h14m-2.423 11.083a1 1 0 0 1-.997.917H4.42a1 1 0 0 1-.996-.917L2.5 3h11l-.923 11.083ZM9.5 1h-3a1 1 0 0 0-1 1v1h5V2a1 1 0 0 0-1-1Z"})})},16353:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(80753),a=n(81665),s=n(2784),o=n(72779),l=n.n(o),u=n(9149),i=n(79583),c=n(45031),d=n(37339),f=n(80945),h=n(11507),m=n(20364),v=n(57733),b=n(2045),p=n(59525),g=n(28952),x=n(67959),_=n(52322);let w=function(e){function t(n){var a;(a=e.call(this,n)||this).state={textareaState:"virgin",value:null,_value:null},a.onFocusHandler=e=>{const{value:t}=a._ref.current;a.setState({value:t,textareaState:"focus"}),(0,d.RW)((0,r.Z)(a),"on_focus",{value:t,event:e})},a.onBlurHandler=e=>{const{value:n}=e.target;a.setState({value:n,textareaState:t.hasValue(n)?"dirty":"initial"}),(0,d.RW)((0,r.Z)(a),"on_blur",{value:n,event:e})},a.onChangeHandler=e=>{const{value:t}=e.target,n=a.getProps(),s=(0,d.oA)(n.autoresize);s&&a.prepareAutosize();const o=a.getRows(t);!1!==(0,d.RW)((0,r.Z)(a),"on_change",{value:t,rows:o,event:e})&&(a.setState({value:t}),s&&a.setAutosize(o))},a.onKeyDownHandler=e=>{const t=a.getRows(),{value:n}=e.target;(0,d.RW)((0,r.Z)(a),"on_key_down",{value:n,rows:t,event:e})},a.prepareAutosize=()=>{const e=a._ref.current;if(e)try{e.style.height="auto"}catch(t){(0,f.ZK)(t)}},a.setAutosize=function(e){void 0===e&&(e=null);const t=a._ref.current;if(t)try{void 0===a._heightOffset&&(a._heightOffset=t.offsetHeight-t.clientHeight),t.style.height="auto";const n=a.getLineHeight();let r=t.scrollHeight+a._heightOffset;e||(e=a.getRows()),1===e&&r>n&&(r=n);const s=a.getProps(),o=parseFloat(s.autoresize_max_rows);if(o>0){const t=o*n;(e>o||r>t)&&(r=t)}t.style.height=r+"px"}catch(n){(0,f.ZK)(n)}},a._ref=s.createRef(),a._id=n.id||(0,d.Xo)(),n.textarea_state&&(a.state.textareaState=n.textarea_state);try{"undefined"!=typeof navigator&&(a.resizeModifier=!!(/Firefox|Edg/.test(navigator.userAgent)||/Chrome/.test(navigator.userAgent)&&/Win/.test(navigator.platform))&&"large",a.resizeModifier||(a.resizeModifier=!(!/Safari|Chrome/.test(navigator.userAgent)||!/Mac/.test(navigator.platform))&&"medium"))}catch(o){console.error(o)}return a}(0,a.Z)(t,e),t.getDerivedStateFromProps=function(e,n){const r=t.getValue(e);return"initval"!==r&&r!==n.value&&r!==n._value&&(r!==n.value&&"function"==typeof e.on_state_update&&(0,d.RW)({props:e},"on_state_update",{value:r}),n.value=r),e.textarea_state&&(n.textareaState=e.textarea_state),n._value=e.value,n},t.hasValue=function(e){return("string"==typeof e||"number"==typeof e)&&String(e).length>0||!1},t.getValue=function(e){const n=(0,d.Ob)(e);return""===n||t.hasValue(n)?n:e.value};var n=t.prototype;return n.componentDidMount=function(){const e=this.getProps();if(e.inner_ref&&("function"==typeof e.inner_ref?e.inner_ref(this._ref.current):e.inner_ref.current=this._ref.current),(0,d.oA)(e.autoresize)&&"undefined"!=typeof window){this.setAutosize();try{this.resizeObserver=new ResizeObserver(this.setAutosize),this.resizeObserver.observe(document.body)}catch(t){window.addEventListener("resize",this.setAutosize)}}},n.componentWillUnmount=function(){this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null),"undefined"!=typeof window&&window.removeEventListener("resize",this.setAutosize)},n.getRows=function(){return Math.floor(this._ref.current.scrollHeight/this.getLineHeight())||1},n.getLineHeight=function(){return parseFloat(getComputedStyle(this._ref.current).lineHeight)||0},n.getProps=function(){var e,n,r;return(0,h.$)(this.props,t.defaultProps,{skeleton:null===(e=this.context)||void 0===e?void 0:e.skeleton},this.context.getTranslation(this.props).Textarea,(0,m.gv)(null===(n=this.context)||void 0===n?void 0:n.FormRow),(0,m.gv)(null===(r=this.context)||void 0===r?void 0:r.formElement),this.context.Textarea)},n.render=function(){const e=this.getProps(),{label:n,label_direction:r,label_sr_only:a,status:s,status_state:o,status_props:f,status_no_animation:h,globalStatus:m,suffix:g,disabled:w,skeleton:S,stretch:y,placeholder:k,keepPlaceholder:C,align:Z,size:j,textarea_class:R,readOnly:z,textarea_attributes:O,class:A,className:F,autoresize:T,characterCounter:M,autoresize_max_rows:D,id:E,children:P,value:I,textarea_element:B,...H}=e,{value:N,textareaState:L}=this.state,$=this._id,V=(0,d.Bx)(s),W=t.hasValue(N);let{textarea_element:U}=e;const q=O?"string"==typeof O?JSON.parse(O):O:{},J={className:l()("dnb-textarea__textarea",R),role:"textbox",value:W?N:"",id:$,name:$,disabled:(0,d.oA)(w)||(0,d.oA)(S),"aria-placeholder":k?(0,d.F4)(k):void 0,...H,...q,onChange:this.onChangeHandler,onFocus:this.onFocusHandler,onBlur:this.onBlurHandler,onKeyDown:this.onKeyDownHandler};(V||g)&&(J["aria-describedby"]=(0,d.u5)(J,V?$+"-status":null,g?$+"-suffix":null)),z&&(J["aria-readonly"]=J.readOnly=!0);const K={className:l()("dnb-textarea",`dnb-textarea--${L}`,w&&"dnb-textarea--disabled",W&&"dnb-textarea--has-content",Z&&`dnb-textarea__align--${Z}`,j&&`dnb-textarea__size--${j}`,s&&`dnb-textarea__status--${o}`,T&&"dnb-textarea__autoresize",!T&&this.resizeModifier&&`dnb-textarea__resize--${this.resizeModifier}`,r&&`dnb-textarea--${r}`,(0,d.oA)(y)&&"dnb-textarea--stretch",(0,d.oA)(C)&&"dnb-textarea--keep-placeholder","dnb-form-component",(0,p.BD)(null,S),(0,b.HU)(e),A,F)},X={className:l()("dnb-textarea__inner",(0,p.BD)("shape",S,this.context))},G={className:l()("dnb-textarea__shell")};((0,d.oA)(w)||(0,d.oA)(S))&&(G["aria-disabled"]=!0);const Q=parseFloat(e.rows)>0?{"--textarea-rows":parseFloat(e.rows)}:null;return(0,p.rZ)(X,S,this.context),(0,d.L_)(this.props,J),(0,d.L_)(null,X),(0,d.L_)(null,G),U&&"function"==typeof U?U=U(J,this._ref):!U&&B&&(U=B),(0,_.jsxs)("span",{...K,children:[n&&(0,_.jsx)(u.Z,{id:$+"-label",for_id:$,text:n,label_direction:r,sr_only:a,disabled:w,skeleton:S}),(0,_.jsxs)("span",{...X,children:[(0,_.jsx)(v.Z,{}),(0,_.jsx)(i.ZP,{show:V,id:$+"-form-status",globalStatus:m,label:n,text_id:$+"-status",text:s,state:o,no_animation:h,skeleton:S,...f}),(0,_.jsxs)("span",{className:"dnb-textarea__row",children:[(0,_.jsxs)("span",{...G,children:[U||(0,_.jsx)("textarea",{ref:this._ref,...J}),!W&&k&&("focus"!==L||C)&&(0,_.jsx)("span",{className:l()("dnb-textarea__placeholder",Z?`dnb-textarea__align--${Z}`:null),style:Q,"aria-hidden":!0,children:k}),(0,_.jsx)("span",{className:"dnb-textarea__state"})]}),g&&(0,_.jsx)(x.Z,{className:"dnb-textarea__suffix",id:$+"-suffix",context:e,children:g})]}),M&&(0,_.jsx)(c.Z,{top:"x-small",text:N,max:M,lang:e.lang,locale:e.locale,...M})]})]})},t}(s.PureComponent);w.contextType=g.Z,w.defaultProps={value:"initval",id:null,label:null,label_direction:null,label_sr_only:null,status:null,textarea_state:null,status_state:"error",status_props:null,status_no_animation:null,globalStatus:null,suffix:null,placeholder:null,keepPlaceholder:null,align:null,size:null,stretch:null,disabled:null,skeleton:null,autoresize:null,autoresize_max_rows:null,characterCounter:null,textarea_class:null,class:null,textarea_attributes:null,readOnly:!1,rows:null,cols:null,inner_ref:null,className:null,textarea_element:null,children:null,on_change:null,on_focus:null,on_blur:null,on_key_down:null,on_state_update:null},w._formElement=!0,w._supportsSpacingProps=!0},57039:function(e,t,n){n.d(t,{ZP:function(){return d}});const r="object"==typeof self?self:globalThis,a=e=>((e,t)=>{const n=(t,n)=>(e.set(n,t),t),a=s=>{if(e.has(s))return e.get(s);const[o,l]=t[s];switch(o){case 0:case-1:return n(l,s);case 1:{const e=n([],s);for(const t of l)e.push(a(t));return e}case 2:{const e=n({},s);for(const[t,n]of l)e[a(t)]=a(n);return e}case 3:return n(new Date(l),s);case 4:{const{source:e,flags:t}=l;return n(new RegExp(e,t),s)}case 5:{const e=n(new Map,s);for(const[t,n]of l)e.set(a(t),a(n));return e}case 6:{const e=n(new Set,s);for(const t of l)e.add(a(t));return e}case 7:{const{name:e,message:t}=l;return n(new r[e](t),s)}case 8:return n(BigInt(l),s);case"BigInt":return n(Object(BigInt(l)),s)}return n(new r[o](l),s)};return a})(new Map,e)(0),s="",{toString:o}={},{keys:l}=Object,u=e=>{const t=typeof e;if("object"!==t||!e)return[0,t];const n=o.call(e).slice(8,-1);switch(n){case"Array":return[1,s];case"Object":return[2,s];case"Date":return[3,s];case"RegExp":return[4,s];case"Map":return[5,s];case"Set":return[6,s]}return n.includes("Array")?[1,n]:n.includes("Error")?[7,n]:[2,n]},i=([e,t])=>0===e&&("function"===t||"symbol"===t),c=(e,{json:t,lossy:n}={})=>{const r=[];return((e,t,n,r)=>{const a=(e,t)=>{const a=r.push(e)-1;return n.set(t,a),a},s=r=>{if(n.has(r))return n.get(r);let[o,c]=u(r);switch(o){case 0:{let t=r;switch(c){case"bigint":o=8,t=r.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);t=null;break;case"undefined":return a([-1],r)}return a([o,t],r)}case 1:{if(c)return a([c,[...r]],r);const e=[],t=a([o,e],r);for(const n of r)e.push(s(n));return t}case 2:{if(c)switch(c){case"BigInt":return a([c,r.toString()],r);case"Boolean":case"Number":case"String":return a([c,r.valueOf()],r)}if(t&&"toJSON"in r)return s(r.toJSON());const n=[],d=a([o,n],r);for(const t of l(r))!e&&i(u(r[t]))||n.push([s(t),s(r[t])]);return d}case 3:return a([o,r.toISOString()],r);case 4:{const{source:e,flags:t}=r;return a([o,{source:e,flags:t}],r)}case 5:{const t=[],n=a([o,t],r);for(const[a,o]of r)(e||!i(u(a))&&!i(u(o)))&&t.push([s(a),s(o)]);return n}case 6:{const t=[],n=a([o,t],r);for(const a of r)!e&&i(u(a))||t.push(s(a));return n}}const{message:d}=r;return a([o,{name:c,message:d}],r)};return s})(!(t||n),!!t,new Map,r)(e),r};var d="function"==typeof structuredClone?(e,t)=>t&&("json"in t||"lossy"in t)?a(c(e,t)):structuredClone(e):(e,t)=>a(c(e,t))}}]);
//# sourceMappingURL=4b586ff55e66a9060a1cdbe3b9b48db18b864a2d-cda1e31326879b433a7c.js.map