(window.webpackJsonp=window.webpackJsonp||[]).push([[103,100],{149:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(265),n(266),n(267);var r,a=n(78),i=c(n(0)),o=n(270),l=(r=n(786))&&r.__esModule?r:{default:r},s=c(n(282));function c(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n(343),n(344);var h=(0,o.css)("background:white;"),v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,m(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,i.Component),n=t,(r=[{key:"componentDidMount",value:function(){s.default.enableWebComponents()}},{key:"render",value:function(){return i.default.createElement("div",{className:"main"},i.default.createElement(l.default,null,i.default.createElement("title",null,"Example App 1"),i.default.createElement("link",{rel:"preload",href:"/static/FedraSansStd-Book-16f3175a8555daaac25d4ece485c9486.woff",as:"font",type:"font/woff",crossOrigin:!0})),i.default.createElement("div",{className:(0,a.css)(h)},i.default.createElement(s.MainNav,{notification_amount:"2",data:[{title:"Title 1",url:"?url1"},{title:"Title 2",url:"?url2"},{title:"Title 3",url:"?url3"},{title:"Title 4",url:"?url4"},{title:"Title 5",url:"?url5"},{title:"Title 6",url:"?url6"}]}),i.default.createElement("div",{className:"dnb-width-limit"},i.default.createElement(s.ViewTitle,{text:"Søk om lån"})),i.default.createElement(s.StepIndicator,{data:b,active_item:"1"}),i.default.createElement(s.Form,null,i.default.createElement("fieldset",{className:"dnb-form__fieldset"},i.default.createElement("div",{className:"dnb-width-limit"},i.default.createElement(s.LineTitle,{content:"Informasjon om kjøpet",tag:"legend"}),i.default.createElement(s.FieldsetDescription,{text:"Vi trenger informasjon om boligkjøpet for å beregne et låneforslag. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.              "}),i.default.createElement("div",{className:"dnb-form__item"},i.default.createElement("div",{className:"dnb-form__cell"},i.default.createElement(s.FormLabel,{for_id:"kjopesum",text:"Kjøpesum:"})),i.default.createElement("div",{className:"dnb-form__cell"},i.default.createElement(s.Input,{type:"text",id:"kjopesum",placeholder:"1 000 000",value:"",description:"Kr"}))),i.default.createElement("div",{className:"dnb-form__item"},i.default.createElement("div",{className:"dnb-form__cell"},i.default.createElement(s.FormLabel,{for_id:"radio-switch-1",text:"Boligen har fellesgjeld:"})),i.default.createElement("div",{className:"dnb-form__cell"},i.default.createElement(s.Switch,{id:"radio-switch-1",text_positive:"ja",text_negative:"nei",title:"Ths is the title",value:"Value of switch",is_on:!1}))),i.default.createElement("div",{className:"dnb-form__item"},i.default.createElement("div",{className:"dnb-form__cell"},i.default.createElement(s.FormLabel,{for_id:"radio-switch-2",text:"Boligen er selveierbolig:"})),i.default.createElement("div",{className:"dnb-form__cell"},i.default.createElement(s.Switch,{id:"radio-switch-2",text_positive:"ja",text_negative:"nei",title:"Ths is the title",value:"Value of switch",is_on:!0}))))),i.default.createElement("fieldset",{className:"dnb-form__fieldset"},i.default.createElement("div",{className:"dnb-width-limit"},i.default.createElement(s.LineTitle,{content:"Informasjon om megler",tag:"legend"}),i.default.createElement(s.FieldsetDescription,{text:"Vi ønsker informasjon om hvordan boligkjøpet ble gjennomført."}),i.default.createElement("div",{className:"dnb-form__item"},i.default.createElement("div",{className:"dnb-form__cell"},i.default.createElement(s.FormLabel,{for_id:"radio-switch-3",text:"Boligen er kjøpt privat:"})),i.default.createElement("div",{className:"dnb-form__cell"},i.default.createElement("div",{className:"dnb-form__cell__cell"},i.default.createElement(s.Switch,{id:"radio-switch-3",text_positive:"ja",text_negative:"nei",title:"Ths is the title",value:"Value of switch",is_on:!1})),i.default.createElement("div",{className:"dnb-form__cell__cell"},i.default.createElement(s.Modal,{type:"button",modal_trigger_text:"Trykk for mer info",modal_content:"Dette er litt ekstra informasjon. Lorem ipsum lipsumbolius."})))),i.default.createElement("div",{className:"dnb-form__item"},i.default.createElement("div",{className:"dnb-form__cell"},i.default.createElement(s.FormLabel,{for_id:"meglernavn",text:"Meglers navn:"})),i.default.createElement("div",{className:"dnb-form__cell"},i.default.createElement(s.Input,{type:"text",id:"meglernavn",placeholder:"Hans Kristian",value:"",description:""}))),i.default.createElement("div",{className:"dnb-form__item"},i.default.createElement("div",{className:"dnb-form__cell"},i.default.createElement(s.FormLabel,{for_id:"eiendomsmegler",text:"Eiendomsmegler/firma:"})),i.default.createElement("div",{className:"dnb-form__cell"},i.default.createElement(s.Input,{type:"text",id:"eiendomsmegler",placeholder:"DNB Eiendom",value:"",description:""}))))),i.default.createElement("fieldset",{className:"dnb-form__fieldset"},i.default.createElement("div",{className:"dnb-width-limit"},i.default.createElement(s.LineTitle,{content:"Nedbetaling",tag:"legend"}),i.default.createElement("div",{className:"dnb-form__item dnb-form__item--top-align"},i.default.createElement("div",{className:"dnb-form__cell"},i.default.createElement(s.FormLabel,{for_id:"account_dropdown",text:"Velg konto som skal belastes:"})),i.default.createElement("div",{className:"dnb-form__cell"},i.default.createElement(s.Dropdown,{input_id:"account_dropdown",data:y,selected_item:3}))))),i.default.createElement("fieldset",{className:"dnb-form__fieldset"},i.default.createElement("div",{className:"dnb-width-limit"},i.default.createElement(s.LineTitle,{content:"Matrikkelinformasjon",tag:"legend"}),i.default.createElement(s.FieldsetDescription,{text:"For å etablere sikkerhet (pant) for et boligjøp trenger vi spesifikk informasjon om boligen. Du finner dette i prospektet."}),i.default.createElement("div",{className:"dnb-form__item"},i.default.createElement("div",{className:"dnb-form__cell"},i.default.createElement(s.FormLabel,{for_id:"kommune",text:"Kommune:"})),i.default.createElement("div",{className:"dnb-form__cell"},i.default.createElement(s.Input,{type:"text",id:"kommune",placeholder:"",value:"",description:""}))),i.default.createElement("div",{className:"dnb-form__item"},i.default.createElement("div",{className:"dnb-form__cell"},i.default.createElement(s.FormLabel,{for_id:"gardsnr",text:"Gårdsnr:"})),i.default.createElement("div",{className:"dnb-form__cell"},i.default.createElement(s.Input,{type:"text",id:"gardsnr",placeholder:"",value:"",description:""}))),i.default.createElement("div",{className:"dnb-form__item"},i.default.createElement("div",{className:"dnb-form__cell"},i.default.createElement(s.FormLabel,{for_id:"bruksnr",text:"Bruksnr:"})),i.default.createElement("div",{className:"dnb-form__cell"},i.default.createElement(s.Input,{type:"text",id:"bruksnr",placeholder:"",value:"",description:""}))),i.default.createElement("div",{className:"dnb-form__item"},i.default.createElement("div",{className:"dnb-form__cell"},i.default.createElement(s.FormLabel,{for_id:"seksjonsnr",text:"Seksjonsnr:"})),i.default.createElement("div",{className:"dnb-form__cell"},i.default.createElement(s.Input,{type:"number",id:"seksjonsnr",placeholder:"",value:"",description:""}))))),i.default.createElement(s.ActionNav,{prev_href:"?back",next_href:"/uilib/demos/example-app-2/"}))))}}])&&u(n.prototype,r),o&&u(n,o),t}();t.default=v;var b=JSON.stringify([{title:"Om din nye bolig",url:"?a"},{title:"Ditt lån og egenkapital",url:"?d"},{title:"Oppsummering",url:"?c"}]),y=JSON.stringify([{selected_value:"Brukskonto - Kari Nordmann",outside_value:"1234.56.78901",content:["1234.56.78901","Brukskonto - Kari Nordmann"]},{selected_value:"Sparekonto - Kari Nordmann",outside_value:"1234.56.78901",content:["1234.56.78901","Sparekonto - Kari Nordmann"]},{selected_value:"Feriekonto - Kari Nordmann med et kjempelangt etternavnsen",outside_value:"1134.56.78961",content:["1134.56.78961","Feriekonto - Kari Nordmann med et kjempelangt etternavnsen"]},{selected_value:"Oppussing - Kari Nordmann",outside_value:"1534.96.48901",content:["1534.96.48901","Oppussing - Kari Nordmann"]}])},155:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((r=n(149))&&r.__esModule?r:{default:r}).default;t.default=a},265:function(e,t,n){n(793)("asyncIterator")},266:function(e,t,n){"use strict";var r=n(5),a=n(28),i=n(17),o=n(25),l=n(19),s=n(797).KEY,c=n(24),d=n(54),u=n(43),f=n(41),m=n(4),p=n(794),h=n(793),v=n(798),b=n(87),y=n(12),g=n(13),_=n(40),E=n(85),k=n(53),w=n(86),x=n(799),N=n(796),S=n(26),O=n(39),j=N.f,P=S.f,T=x.f,F=r.Symbol,L=r.JSON,I=L&&L.stringify,M=m("_hidden"),C=m("toPrimitive"),A={}.propertyIsEnumerable,D=d("symbol-registry"),R=d("symbols"),K=d("op-symbols"),B=Object.prototype,V="function"==typeof F,z=r.QObject,H=!z||!z.prototype||!z.prototype.findChild,U=i&&c(function(){return 7!=w(P({},"a",{get:function(){return P(this,"a",{value:7}).a}})).a})?function(e,t,n){var r=j(B,t);r&&delete B[t],P(e,t,n),r&&e!==B&&P(B,t,r)}:P,W=function(e){var t=R[e]=w(F.prototype);return t._k=e,t},J=V&&"symbol"==typeof F.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof F},G=function(e,t,n){return e===B&&G(K,t,n),y(e),t=E(t,!0),y(n),a(R,t)?(n.enumerable?(a(e,M)&&e[M][t]&&(e[M][t]=!1),n=w(n,{enumerable:k(0,!1)})):(a(e,M)||P(e,M,k(1,{})),e[M][t]=!0),U(e,t,n)):P(e,t,n)},X=function(e,t){y(e);for(var n,r=v(t=_(t)),a=0,i=r.length;i>a;)G(e,n=r[a++],t[n]);return e},Y=function(e){var t=A.call(this,e=E(e,!0));return!(this===B&&a(R,e)&&!a(K,e))&&(!(t||!a(this,e)||!a(R,e)||a(this,M)&&this[M][e])||t)},q=function(e,t){if(e=_(e),t=E(t,!0),e!==B||!a(R,t)||a(K,t)){var n=j(e,t);return!n||!a(R,t)||a(e,M)&&e[M][t]||(n.enumerable=!0),n}},Z=function(e){for(var t,n=T(_(e)),r=[],i=0;n.length>i;)a(R,t=n[i++])||t==M||t==s||r.push(t);return r},Q=function(e){for(var t,n=e===B,r=T(n?K:_(e)),i=[],o=0;r.length>o;)!a(R,t=r[o++])||n&&!a(B,t)||i.push(R[t]);return i};V||(l((F=function(){if(this instanceof F)throw TypeError("Symbol is not a constructor!");var e=f(arguments.length>0?arguments[0]:void 0),t=function(n){this===B&&t.call(K,n),a(this,M)&&a(this[M],e)&&(this[M][e]=!1),U(this,e,k(1,n))};return i&&H&&U(B,e,{configurable:!0,set:t}),W(e)}).prototype,"toString",function(){return this._k}),N.f=q,S.f=G,n(795).f=x.f=Z,n(83).f=Y,n(84).f=Q,i&&!n(42)&&l(B,"propertyIsEnumerable",Y,!0),p.f=function(e){return W(m(e))}),o(o.G+o.W+o.F*!V,{Symbol:F});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ee=0;$.length>ee;)m($[ee++]);for(var te=O(m.store),ne=0;te.length>ne;)h(te[ne++]);o(o.S+o.F*!V,"Symbol",{for:function(e){return a(D,e+="")?D[e]:D[e]=F(e)},keyFor:function(e){if(!J(e))throw TypeError(e+" is not a symbol!");for(var t in D)if(D[t]===e)return t},useSetter:function(){H=!0},useSimple:function(){H=!1}}),o(o.S+o.F*!V,"Object",{create:function(e,t){return void 0===t?w(e):X(w(e),t)},defineProperty:G,defineProperties:X,getOwnPropertyDescriptor:q,getOwnPropertyNames:Z,getOwnPropertySymbols:Q}),L&&o(o.S+o.F*(!V||c(function(){var e=F();return"[null]"!=I([e])||"{}"!=I({a:e})||"{}"!=I(Object(e))})),"JSON",{stringify:function(e){for(var t,n,r=[e],a=1;arguments.length>a;)r.push(arguments[a++]);if(n=t=r[1],(g(t)||void 0!==e)&&!J(e))return b(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!J(t))return t}),r[1]=t,I.apply(L,r)}}),F.prototype[C]||n(14)(F.prototype,C,F.prototype.valueOf),u(F,"Symbol"),u(Math,"Math",!0),u(r.JSON,"JSON",!0)},270:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(78),o=n(1),l=n.n(o),s=n(55),c=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class)|(on[A-Z].*)|((data|aria|x)-.*))$/i,d=Object(s.a)(c.test.bind(c));var u,f="__EMOTION_THEMING__",m=((u={})[f]=l.a.object,u);var p=d,h=function(e){return"theme"!==e&&"innerRef"!==e},v=function(){return!0},b=function(e,t){for(var n=2,r=arguments.length;n<r;n++){var a=arguments[n],i=void 0;for(i in a)e(i)&&(t[i]=a[i])}return t};var y=function(e,t){var n=function(r,a){var i,o,l,s;void 0!==a&&(i=a.e,o=a.label,l=a.target,s=r.__emotion_forwardProp&&a.shouldForwardProp?function(e){return r.__emotion_forwardProp(e)&&a.shouldForwardProp(e)}:a.shouldForwardProp);var c=r.__emotion_real===r,d=void 0===i&&c&&r.__emotion_base||r;return"function"!=typeof s&&(s="string"==typeof d&&d.charAt(0)===d.charAt(0).toLowerCase()?p:h),function(){var u=arguments,p=c&&void 0!==r.__emotion_styles?r.__emotion_styles.slice(0):[];if(void 0!==o&&p.push("label:"+o+";"),void 0===i)if(null==u[0]||void 0===u[0].raw)p.push.apply(p,u);else{p.push(u[0][0]);for(var h=u.length,y=1;y<h;y++)p.push(u[y],u[0][y])}var g=function(n){var r,a;function o(){return n.apply(this,arguments)||this}a=n,(r=o).prototype=Object.create(a.prototype),r.prototype.constructor=r,r.__proto__=a;var c=o.prototype;return c.componentWillMount=function(){void 0!==this.context[f]&&(this.unsubscribe=this.context[f].subscribe(function(e){this.setState({theme:e})}.bind(this)))},c.componentWillUnmount=function(){void 0!==this.unsubscribe&&this.context[f].unsubscribe(this.unsubscribe)},c.render=function(){var n=this.props,r=this.state;this.mergedProps=b(v,{},n,{theme:null!==r&&r.theme||n.theme||{}});var a="",o=[];return n.className&&(a+=void 0===i?e.getRegisteredStyles(o,n.className):n.className+" "),a+=void 0===i?e.css.apply(this,p.concat(o)):i,void 0!==l&&(a+=" "+l),t.createElement(d,b(s,{},n,{className:a,ref:n.innerRef}))},o}(t.Component);return g.displayName=void 0!==o?o:"Styled("+("string"==typeof d?d:d.displayName||d.name||"Component")+")",void 0!==r.defaultProps&&(g.defaultProps=r.defaultProps),g.contextTypes=m,g.__emotion_styles=p,g.__emotion_base=d,g.__emotion_real=g,g.__emotion_forwardProp=s,Object.defineProperty(g,"toString",{value:function(){return"."+l}}),g.withComponent=function(e,t){return n(e,void 0!==t?b(v,{},a,t):a).apply(void 0,p)},g}};return n};n.d(t,"flush",function(){return i.flush}),n.d(t,"hydrate",function(){return i.hydrate}),n.d(t,"cx",function(){return i.cx}),n.d(t,"merge",function(){return i.merge}),n.d(t,"getRegisteredStyles",function(){return i.getRegisteredStyles}),n.d(t,"injectGlobal",function(){return i.injectGlobal}),n.d(t,"keyframes",function(){return i.keyframes}),n.d(t,"css",function(){return i.css}),n.d(t,"sheet",function(){return i.sheet}),n.d(t,"caches",function(){return i.caches});var g=y(i,a.a);t.default=g},793:function(e,t,n){var r=n(5),a=n(18),i=n(42),o=n(794),l=n(26).f;e.exports=function(e){var t=a.Symbol||(a.Symbol=i?{}:r.Symbol||{});"_"==e.charAt(0)||e in t||l(t,e,{value:o.f(e)})}},794:function(e,t,n){t.f=n(4)},797:function(e,t,n){var r=n(41)("meta"),a=n(13),i=n(28),o=n(26).f,l=0,s=Object.isExtensible||function(){return!0},c=!n(24)(function(){return s(Object.preventExtensions({}))}),d=function(e){o(e,r,{value:{i:"O"+ ++l,w:{}}})},u=e.exports={KEY:r,NEED:!1,fastKey:function(e,t){if(!a(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,r)){if(!s(e))return"F";if(!t)return"E";d(e)}return e[r].i},getWeak:function(e,t){if(!i(e,r)){if(!s(e))return!0;if(!t)return!1;d(e)}return e[r].w},onFreeze:function(e){return c&&u.NEED&&s(e)&&!i(e,r)&&d(e),e}}},798:function(e,t,n){var r=n(39),a=n(84),i=n(83);e.exports=function(e){var t=r(e),n=a.f;if(n)for(var o,l=n(e),s=i.f,c=0;l.length>c;)s.call(e,o=l[c++])&&t.push(o);return t}},799:function(e,t,n){var r=n(40),a=n(795).f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return o&&"[object Window]"==i.call(e)?function(e){try{return a(e)}catch(e){return o.slice()}}(e):a(r(e))}}}]);
//# sourceMappingURL=component---src-pages-uilib-demos-index-js-88f8eccc0868606bbf43.js.map