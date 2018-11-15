(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{206:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t._frontmatter=t.default=void 0,n(84),n(53),n(290);var r=s(n(0)),a=n(278),i=s(n(896));function s(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.default=function(e){var t=e.components;o(e,["components"]);return r.default.createElement(a.MDXTag,{name:"wrapper",components:t},r.default.createElement(i.default,null))};t._frontmatter={header:"UI Library",title:"Tabs",draft:!1,order:13}},302:function(e,t,n){"use strict";n(82);var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("svg",Object.assign({viewBox:"0 0 16 16"},e),a.a.createElement("g",{clipPath:"url(#clip0)",fillRule:"evenodd",clipRule:"evenodd"},a.a.createElement("path",{d:"M6.614 10.447a.75.75 0 0 0-1.061-1.06L1.5 13.438v-1.522a.75.75 0 0 0-1.5 0v3.333a.747.747 0 0 0 .218.529l.002.001.001.002A.75.75 0 0 0 .75 16h3.333a.75.75 0 0 0 0-1.5H2.561l4.053-4.053zM15.943.463a.75.75 0 0 0-.161-.242L15.78.22 15.78.218A.748.748 0 0 0 15.25 0h-3.333a.75.75 0 0 0 0 1.5h1.522L9.386 5.553a.75.75 0 1 0 1.061 1.06L14.5 2.562v1.522a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-.057-.287zM.057.463A.748.748 0 0 0 0 .75v3.333a.75.75 0 1 0 1.5 0V2.561l4.053 4.053a.75.75 0 1 0 1.06-1.061L2.562 1.5h1.522a.75.75 0 1 0 0-1.5H.75a.748.748 0 0 0-.693.463zM10.447 9.386a.75.75 0 1 0-1.06 1.061l4.052 4.053h-1.522a.75.75 0 1 0 0 1.5h3.333a.75.75 0 0 0 .525-.215l.01-.01A.748.748 0 0 0 16 15.25v-3.333a.75.75 0 0 0-1.5 0v1.522l-4.053-4.053z"})),a.a.createElement("defs",null,a.a.createElement("clipPath",{id:"clip0"},a.a.createElement("path",{d:"M0 0h16v16H0z"}))))}},303:function(e,t,n){"use strict";n(82);var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("svg",Object.assign({viewBox:"0 0 16 16"},e),a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 1.875a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75zM0 8a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 8zm.75 5.375a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H.75z"}))}},305:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(82),n(272),n(273),n(86);var r=c(n(0)),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(762)),i=c(n(370)),s=n(763),o=c(n(310));function c(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var u=function(e){var t=e.language,n=e.children,c=e.reactLive,u=e.className;return t||(t=((u||"").split(/-/)||[null,"jsx"])[1]),c&&"jsx"===t?(console.log("exampleCode",t,p(n)),r.default.createElement(s.LiveProvider,{code:"string"==typeof n?String(n).trim():null},r.default.createElement(s.LiveEditor,null),r.default.createElement(s.LiveError,null),r.default.createElement(s.LivePreview,null))):r.default.createElement(a.default,l({},a.defaultProps,{code:String(n).trim(),language:t,theme:i.default}),function(e){var t=e.className,n=e.style,a=e.tokens,i=e.getLineProps,s=e.getTokenProps;return r.default.createElement(o.default,{className:t,style:n,p:3},d(a).map(function(e,t){return r.default.createElement("div",i({line:e,key:t}),e.map(function(e,t){return r.default.createElement("span",s({token:e,key:t}))}))}))})};t.default=u;var d=function(e){var t=e.length;if(0===t)return e;var n=e[t-1];return 1===n.length&&n[0].empty?e.slice(0,t-1):e}},307:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(272),n(273),n(274),n(56);var r=n(288),a=f(n(328)),i=f(n(0)),s=n(330),o=_(n(12)),c=_(n(1)),l=_(n(765)),p=n(277),u=n(14),d=n(325);function _(e){return e&&e.__esModule?e:{default:e}}function f(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(){return"undefined"==typeof window?null:(0,l.default)().location},b=(0,p.css)(";.dnb-tabs__tabs{justify-content:space-between;align-items:center;}.fullscreen-page &{top:0;.is-sticky .dnb-tabs__tabs{margin:0 -2rem;}}.toggle-fullscreen{margin-right:1rem;}.dnb-modal__close-button{position:relative;top:auto;right:auto;}"),v=function(e){function t(e){var n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=y(t).call(this,e),n=!a||"object"!==j(a)&&"function"!=typeof a?h(r):a,g(h(h(n)),"state",{activeTabKey:"demo",wasFullscreen:null}),g(h(h(n)),"openTab",function(e){var t=e.key;n.setState({activeTabKey:t})}),g(h(h(n)),"openFullscreen",function(){var e=E();e&&(0,u.navigate)("".concat(e.pathname,"?fullscreen#").concat(n.state.activeTabKey))}),g(h(h(n)),"quitFullscreen",function(){var e=E();e&&(0,u.navigate)([e.pathname,e.hash].join(""))});var i=E();return i&&(n.state.wasFullscreen=/fullscreen/.test(i.search)),n}var n,c,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,i.Component),n=t,(c=[{key:"isActive",value:function(e){return this.state.activeTabKey===e}},{key:"componentWillMount",value:function(){var e=E();e&&this.setState({wasFullscreen:/fullscreen/.test(e.search)})}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,c=t.id,l=t.tabs,p=t.hideTabs,u=t.ExampleCode,_=t.Description,f=t.Details,j=t.DemoComponent,m=t.CodeComponent,y=t.callback;return i.default.createElement("div",{className:"wrapped-item"},p?i.default.createElement("h4",null,i.default.createElement(o.default,{to:"/uilib/components/".concat(c)},n)):i.default.createElement("h1",null,n),!p&&i.default.createElement(r.Tabs,{data:l,on_change:this.openTab,render:function(t){var n=t.Wrapper,a=t.TabsList,o=t.Tabs;return i.default.createElement(n,{className:b},i.default.createElement(a,null,i.default.createElement("div",{className:"dnb-tabs__tabs__inner"},i.default.createElement(o,null)),e.state.wasFullscreen?i.default.createElement(s.CloseButton,{on_click:e.quitFullscreen,title:"Quit Fullscreen",className:"toggle-fullscreen"}):i.default.createElement(r.Button,{on_click:e.openFullscreen,className:"toggle-fullscreen",variant:"secondary",title:"Fullscreen",icon:d.fullscreen})))}}),this.isActive("demo")&&i.default.createElement("div",{className:"dnb-tabs__content"},!p&&i.default.createElement(_,null),i.default.createElement(j,null),y&&y.demo&&i.default.createElement(y.demo,{CodeRenderer:a.CodeRenderer})),this.isActive("info")&&i.default.createElement("div",{className:"dnb-tabs__content"},i.default.createElement(f,null),y&&y.info&&i.default.createElement(y.info,{CodeRenderer:a.CodeRenderer}),u&&i.default.createElement(i.Fragment,null,i.default.createElement("h3",null,"JSX Example"),i.default.createElement(a.CodeRenderer,{language:"jsx"},u))),this.isActive("code")&&i.default.createElement("div",{className:"dnb-tabs__content"},i.default.createElement(a.default,{source:m}),y&&y.code&&i.default.createElement(y.code,{CodeRenderer:a.CodeRenderer})))}}])&&m(n.prototype,c),l&&m(n,l),t}();g(v,"propTypes",{ExampleCode:c.default.string,Description:c.default.func.isRequired,Details:c.default.func.isRequired,DemoComponent:c.default.func.isRequired,CodeComponent:c.default.func.isRequired,callback:c.default.shape({demo:c.default.oneOfType([c.default.func,c.default.node]),info:c.default.oneOfType([c.default.func,c.default.node]),code:c.default.oneOfType([c.default.func,c.default.node])}),hideTabs:c.default.bool,title:c.default.string.isRequired,id:c.default.string.isRequired,tabs:c.default.array}),g(v,"defaultProps",{ExampleCode:null,hideTabs:!1,callback:null,tabs:[{title:"Demo",key:"demo"},{title:"Details",key:"info"},{title:"Markup",key:"code"}]});var x=v;t.default=x},310:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,((r=n(761))&&r.__esModule?r:{default:r}).default)({is:"pre",m:0});a.displayName="Pre";var i=a;t.default=i},325:function(e,t,n){"use strict";n.r(t);var r=n(302);n.d(t,"fullscreen",function(){return r.a});var a=n(303);n.d(t,"hamburger",function(){return a.a})},328:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CodeRenderer=t.default=void 0,n(272),n(273),n(41),n(274),n(29),n(766);var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),a=l(n(329)),i=l(n(1)),s=l(n(769)),o=l(n(770)),c=l(n(305));function l(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,n,r,a,i,s){try{var o=e[i](s),c=o.value}catch(e){return void n(e)}o.done?t(c):Promise.resolve(c).then(r,a)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t&&_(e.prototype,t),n&&_(e,n),e}function j(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?h(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(e){function t(e){var n;d(this,t),g(h(h(n=j(this,m(t).call(this,e)))),"state",{codeString:""}),g(h(h(n)),"_isMounted",!1);var a=n.props.source;return n.beautify(r.default.createElement(a,null)),n}var n,i;return y(t,r.Component),f(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.setCode()}},{key:"setCode",value:function(){this.code&&this.setState({codeString:this.props.raw+this.code}),this.code=null}},{key:"beautify",value:(n=regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=this.props.language,e.next="html"===e.t0?3:18;break;case 3:return this.code=s.default.renderToStaticMarkup(t),this.code=this.code.replace(/data-fake:/g,""),this.code=this.code.replace(/disabled=""/g,'disabled="disabled"'),e.prev=6,e.next=9,(0,a.default)(this.code,"html");case 9:this.code=e.sent,this.code=(0,o.default)(this.code,{ocd:!0}),this._isMounted&&this.setCode(),e.next=17;break;case 14:e.prev=14,e.t1=e.catch(6),console.log("HTML Beautifier Error:",e.t1);case 17:return e.abrupt("break",18);case 18:case"end":return e.stop()}},e,this,[[6,14]])}),i=function(){var e=this,t=arguments;return new Promise(function(r,a){var i=n.apply(e,t);function s(e){u(i,r,a,s,o,"next",e)}function o(e){u(i,r,a,s,o,"throw",e)}s(void 0)})},function(e){return i.apply(this,arguments)})},{key:"render",value:function(){return this.state.codeString?r.default.createElement(b,{language:this.props.language},this.state.codeString):r.default.createElement(r.Fragment,null)}}]),t}();t.default=E,g(E,"propTypes",{language:i.default.string,raw:i.default.string,source:i.default.oneOfType([i.default.node,i.default.func]).isRequired}),g(E,"defaultProps",{language:"html",raw:""});var b=function(e){function t(){return d(this,t),j(this,m(t).apply(this,arguments))}return y(t,r.Component),f(t,[{key:"render",value:function(){return r.default.createElement(c.default,this.props)}}]),t}();t.CodeRenderer=b,g(b,"propTypes",{language:i.default.string,children:i.default.oneOfType([i.default.string,i.default.node,i.default.func]).isRequired}),g(b,"defaultProps",{language:"jsx"})},329:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(41);var r,a=(r=n(767))&&r.__esModule?r:{default:r};var i=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(function(r){switch(t){case"html":a.default.clean(e,{indent:"  ",wrap:80,"replace-nbsp":!0,"remove-tags":[],"remove-attributes":[],"break-around-tags":n.breakAroundTags||["div","span","p","button","input","svg","path"]},function(e){return r(e)})}})};t.default=i},330:function(e,t,n){"use strict";n.r(t);var r=n(280);n.d(t,"propTypes",function(){return r.d}),n.d(t,"defaultProps",function(){return r.c}),n.d(t,"CloseButton",function(){return r.a})},371:function(e,t,n){var r={"./Binary_Property/ASCII.js":372,"./Binary_Property/ASCII_Hex_Digit.js":373,"./Binary_Property/Alphabetic.js":374,"./Binary_Property/Any.js":375,"./Binary_Property/Assigned.js":376,"./Binary_Property/Bidi_Control.js":377,"./Binary_Property/Bidi_Mirrored.js":378,"./Binary_Property/Case_Ignorable.js":379,"./Binary_Property/Cased.js":380,"./Binary_Property/Changes_When_Casefolded.js":381,"./Binary_Property/Changes_When_Casemapped.js":382,"./Binary_Property/Changes_When_Lowercased.js":383,"./Binary_Property/Changes_When_NFKC_Casefolded.js":384,"./Binary_Property/Changes_When_Titlecased.js":385,"./Binary_Property/Changes_When_Uppercased.js":386,"./Binary_Property/Dash.js":387,"./Binary_Property/Default_Ignorable_Code_Point.js":388,"./Binary_Property/Deprecated.js":389,"./Binary_Property/Diacritic.js":390,"./Binary_Property/Emoji.js":391,"./Binary_Property/Emoji_Component.js":392,"./Binary_Property/Emoji_Modifier.js":393,"./Binary_Property/Emoji_Modifier_Base.js":394,"./Binary_Property/Emoji_Presentation.js":395,"./Binary_Property/Extended_Pictographic.js":396,"./Binary_Property/Extender.js":397,"./Binary_Property/Grapheme_Base.js":398,"./Binary_Property/Grapheme_Extend.js":399,"./Binary_Property/Hex_Digit.js":400,"./Binary_Property/IDS_Binary_Operator.js":401,"./Binary_Property/IDS_Trinary_Operator.js":402,"./Binary_Property/ID_Continue.js":403,"./Binary_Property/ID_Start.js":404,"./Binary_Property/Ideographic.js":405,"./Binary_Property/Join_Control.js":406,"./Binary_Property/Logical_Order_Exception.js":407,"./Binary_Property/Lowercase.js":408,"./Binary_Property/Math.js":409,"./Binary_Property/Noncharacter_Code_Point.js":410,"./Binary_Property/Pattern_Syntax.js":411,"./Binary_Property/Pattern_White_Space.js":412,"./Binary_Property/Quotation_Mark.js":413,"./Binary_Property/Radical.js":414,"./Binary_Property/Regional_Indicator.js":415,"./Binary_Property/Sentence_Terminal.js":416,"./Binary_Property/Soft_Dotted.js":417,"./Binary_Property/Terminal_Punctuation.js":418,"./Binary_Property/Unified_Ideograph.js":419,"./Binary_Property/Uppercase.js":420,"./Binary_Property/Variation_Selector.js":421,"./Binary_Property/White_Space.js":422,"./Binary_Property/XID_Continue.js":423,"./Binary_Property/XID_Start.js":424,"./General_Category/Cased_Letter.js":425,"./General_Category/Close_Punctuation.js":426,"./General_Category/Connector_Punctuation.js":427,"./General_Category/Control.js":428,"./General_Category/Currency_Symbol.js":429,"./General_Category/Dash_Punctuation.js":430,"./General_Category/Decimal_Number.js":431,"./General_Category/Enclosing_Mark.js":432,"./General_Category/Final_Punctuation.js":433,"./General_Category/Format.js":434,"./General_Category/Initial_Punctuation.js":435,"./General_Category/Letter.js":436,"./General_Category/Letter_Number.js":437,"./General_Category/Line_Separator.js":438,"./General_Category/Lowercase_Letter.js":439,"./General_Category/Mark.js":440,"./General_Category/Math_Symbol.js":441,"./General_Category/Modifier_Letter.js":442,"./General_Category/Modifier_Symbol.js":443,"./General_Category/Nonspacing_Mark.js":444,"./General_Category/Number.js":445,"./General_Category/Open_Punctuation.js":446,"./General_Category/Other.js":447,"./General_Category/Other_Letter.js":448,"./General_Category/Other_Number.js":449,"./General_Category/Other_Punctuation.js":450,"./General_Category/Other_Symbol.js":451,"./General_Category/Paragraph_Separator.js":452,"./General_Category/Private_Use.js":453,"./General_Category/Punctuation.js":454,"./General_Category/Separator.js":455,"./General_Category/Space_Separator.js":456,"./General_Category/Spacing_Mark.js":457,"./General_Category/Surrogate.js":458,"./General_Category/Symbol.js":459,"./General_Category/Titlecase_Letter.js":460,"./General_Category/Unassigned.js":461,"./General_Category/Uppercase_Letter.js":462,"./Script/Adlam.js":463,"./Script/Ahom.js":464,"./Script/Anatolian_Hieroglyphs.js":465,"./Script/Arabic.js":466,"./Script/Armenian.js":467,"./Script/Avestan.js":468,"./Script/Balinese.js":469,"./Script/Bamum.js":470,"./Script/Bassa_Vah.js":471,"./Script/Batak.js":472,"./Script/Bengali.js":473,"./Script/Bhaiksuki.js":474,"./Script/Bopomofo.js":475,"./Script/Brahmi.js":476,"./Script/Braille.js":477,"./Script/Buginese.js":478,"./Script/Buhid.js":479,"./Script/Canadian_Aboriginal.js":480,"./Script/Carian.js":481,"./Script/Caucasian_Albanian.js":482,"./Script/Chakma.js":483,"./Script/Cham.js":484,"./Script/Cherokee.js":485,"./Script/Common.js":486,"./Script/Coptic.js":487,"./Script/Cuneiform.js":488,"./Script/Cypriot.js":489,"./Script/Cyrillic.js":490,"./Script/Deseret.js":491,"./Script/Devanagari.js":492,"./Script/Dogra.js":493,"./Script/Duployan.js":494,"./Script/Egyptian_Hieroglyphs.js":495,"./Script/Elbasan.js":496,"./Script/Ethiopic.js":497,"./Script/Georgian.js":498,"./Script/Glagolitic.js":499,"./Script/Gothic.js":500,"./Script/Grantha.js":501,"./Script/Greek.js":502,"./Script/Gujarati.js":503,"./Script/Gunjala_Gondi.js":504,"./Script/Gurmukhi.js":505,"./Script/Han.js":506,"./Script/Hangul.js":507,"./Script/Hanifi_Rohingya.js":508,"./Script/Hanunoo.js":509,"./Script/Hatran.js":510,"./Script/Hebrew.js":511,"./Script/Hiragana.js":512,"./Script/Imperial_Aramaic.js":513,"./Script/Inherited.js":514,"./Script/Inscriptional_Pahlavi.js":515,"./Script/Inscriptional_Parthian.js":516,"./Script/Javanese.js":517,"./Script/Kaithi.js":518,"./Script/Kannada.js":519,"./Script/Katakana.js":520,"./Script/Kayah_Li.js":521,"./Script/Kharoshthi.js":522,"./Script/Khmer.js":523,"./Script/Khojki.js":524,"./Script/Khudawadi.js":525,"./Script/Lao.js":526,"./Script/Latin.js":527,"./Script/Lepcha.js":528,"./Script/Limbu.js":529,"./Script/Linear_A.js":530,"./Script/Linear_B.js":531,"./Script/Lisu.js":532,"./Script/Lycian.js":533,"./Script/Lydian.js":534,"./Script/Mahajani.js":535,"./Script/Makasar.js":536,"./Script/Malayalam.js":537,"./Script/Mandaic.js":538,"./Script/Manichaean.js":539,"./Script/Marchen.js":540,"./Script/Masaram_Gondi.js":541,"./Script/Medefaidrin.js":542,"./Script/Meetei_Mayek.js":543,"./Script/Mende_Kikakui.js":544,"./Script/Meroitic_Cursive.js":545,"./Script/Meroitic_Hieroglyphs.js":546,"./Script/Miao.js":547,"./Script/Modi.js":548,"./Script/Mongolian.js":549,"./Script/Mro.js":550,"./Script/Multani.js":551,"./Script/Myanmar.js":552,"./Script/Nabataean.js":553,"./Script/New_Tai_Lue.js":554,"./Script/Newa.js":555,"./Script/Nko.js":556,"./Script/Nushu.js":557,"./Script/Ogham.js":558,"./Script/Ol_Chiki.js":559,"./Script/Old_Hungarian.js":560,"./Script/Old_Italic.js":561,"./Script/Old_North_Arabian.js":562,"./Script/Old_Permic.js":563,"./Script/Old_Persian.js":564,"./Script/Old_Sogdian.js":565,"./Script/Old_South_Arabian.js":566,"./Script/Old_Turkic.js":567,"./Script/Oriya.js":568,"./Script/Osage.js":569,"./Script/Osmanya.js":570,"./Script/Pahawh_Hmong.js":571,"./Script/Palmyrene.js":572,"./Script/Pau_Cin_Hau.js":573,"./Script/Phags_Pa.js":574,"./Script/Phoenician.js":575,"./Script/Psalter_Pahlavi.js":576,"./Script/Rejang.js":577,"./Script/Runic.js":578,"./Script/Samaritan.js":579,"./Script/Saurashtra.js":580,"./Script/Sharada.js":581,"./Script/Shavian.js":582,"./Script/Siddham.js":583,"./Script/SignWriting.js":584,"./Script/Sinhala.js":585,"./Script/Sogdian.js":586,"./Script/Sora_Sompeng.js":587,"./Script/Soyombo.js":588,"./Script/Sundanese.js":589,"./Script/Syloti_Nagri.js":590,"./Script/Syriac.js":591,"./Script/Tagalog.js":592,"./Script/Tagbanwa.js":593,"./Script/Tai_Le.js":594,"./Script/Tai_Tham.js":595,"./Script/Tai_Viet.js":596,"./Script/Takri.js":597,"./Script/Tamil.js":598,"./Script/Tangut.js":599,"./Script/Telugu.js":600,"./Script/Thaana.js":601,"./Script/Thai.js":602,"./Script/Tibetan.js":603,"./Script/Tifinagh.js":604,"./Script/Tirhuta.js":605,"./Script/Ugaritic.js":606,"./Script/Vai.js":607,"./Script/Warang_Citi.js":608,"./Script/Yi.js":609,"./Script/Zanabazar_Square.js":610,"./Script_Extensions/Adlam.js":611,"./Script_Extensions/Ahom.js":612,"./Script_Extensions/Anatolian_Hieroglyphs.js":613,"./Script_Extensions/Arabic.js":614,"./Script_Extensions/Armenian.js":615,"./Script_Extensions/Avestan.js":616,"./Script_Extensions/Balinese.js":617,"./Script_Extensions/Bamum.js":618,"./Script_Extensions/Bassa_Vah.js":619,"./Script_Extensions/Batak.js":620,"./Script_Extensions/Bengali.js":621,"./Script_Extensions/Bhaiksuki.js":622,"./Script_Extensions/Bopomofo.js":623,"./Script_Extensions/Brahmi.js":624,"./Script_Extensions/Braille.js":625,"./Script_Extensions/Buginese.js":626,"./Script_Extensions/Buhid.js":627,"./Script_Extensions/Canadian_Aboriginal.js":628,"./Script_Extensions/Carian.js":629,"./Script_Extensions/Caucasian_Albanian.js":630,"./Script_Extensions/Chakma.js":631,"./Script_Extensions/Cham.js":632,"./Script_Extensions/Cherokee.js":633,"./Script_Extensions/Common.js":634,"./Script_Extensions/Coptic.js":635,"./Script_Extensions/Cuneiform.js":636,"./Script_Extensions/Cypriot.js":637,"./Script_Extensions/Cyrillic.js":638,"./Script_Extensions/Deseret.js":639,"./Script_Extensions/Devanagari.js":640,"./Script_Extensions/Dogra.js":641,"./Script_Extensions/Duployan.js":642,"./Script_Extensions/Egyptian_Hieroglyphs.js":643,"./Script_Extensions/Elbasan.js":644,"./Script_Extensions/Ethiopic.js":645,"./Script_Extensions/Georgian.js":646,"./Script_Extensions/Glagolitic.js":647,"./Script_Extensions/Gothic.js":648,"./Script_Extensions/Grantha.js":649,"./Script_Extensions/Greek.js":650,"./Script_Extensions/Gujarati.js":651,"./Script_Extensions/Gunjala_Gondi.js":652,"./Script_Extensions/Gurmukhi.js":653,"./Script_Extensions/Han.js":654,"./Script_Extensions/Hangul.js":655,"./Script_Extensions/Hanifi_Rohingya.js":656,"./Script_Extensions/Hanunoo.js":657,"./Script_Extensions/Hatran.js":658,"./Script_Extensions/Hebrew.js":659,"./Script_Extensions/Hiragana.js":660,"./Script_Extensions/Imperial_Aramaic.js":661,"./Script_Extensions/Inherited.js":662,"./Script_Extensions/Inscriptional_Pahlavi.js":663,"./Script_Extensions/Inscriptional_Parthian.js":664,"./Script_Extensions/Javanese.js":665,"./Script_Extensions/Kaithi.js":666,"./Script_Extensions/Kannada.js":667,"./Script_Extensions/Katakana.js":668,"./Script_Extensions/Kayah_Li.js":669,"./Script_Extensions/Kharoshthi.js":670,"./Script_Extensions/Khmer.js":671,"./Script_Extensions/Khojki.js":672,"./Script_Extensions/Khudawadi.js":673,"./Script_Extensions/Lao.js":674,"./Script_Extensions/Latin.js":675,"./Script_Extensions/Lepcha.js":676,"./Script_Extensions/Limbu.js":677,"./Script_Extensions/Linear_A.js":678,"./Script_Extensions/Linear_B.js":679,"./Script_Extensions/Lisu.js":680,"./Script_Extensions/Lycian.js":681,"./Script_Extensions/Lydian.js":682,"./Script_Extensions/Mahajani.js":683,"./Script_Extensions/Makasar.js":684,"./Script_Extensions/Malayalam.js":685,"./Script_Extensions/Mandaic.js":686,"./Script_Extensions/Manichaean.js":687,"./Script_Extensions/Marchen.js":688,"./Script_Extensions/Masaram_Gondi.js":689,"./Script_Extensions/Medefaidrin.js":690,"./Script_Extensions/Meetei_Mayek.js":691,"./Script_Extensions/Mende_Kikakui.js":692,"./Script_Extensions/Meroitic_Cursive.js":693,"./Script_Extensions/Meroitic_Hieroglyphs.js":694,"./Script_Extensions/Miao.js":695,"./Script_Extensions/Modi.js":696,"./Script_Extensions/Mongolian.js":697,"./Script_Extensions/Mro.js":698,"./Script_Extensions/Multani.js":699,"./Script_Extensions/Myanmar.js":700,"./Script_Extensions/Nabataean.js":701,"./Script_Extensions/New_Tai_Lue.js":702,"./Script_Extensions/Newa.js":703,"./Script_Extensions/Nko.js":704,"./Script_Extensions/Nushu.js":705,"./Script_Extensions/Ogham.js":706,"./Script_Extensions/Ol_Chiki.js":707,"./Script_Extensions/Old_Hungarian.js":708,"./Script_Extensions/Old_Italic.js":709,"./Script_Extensions/Old_North_Arabian.js":710,"./Script_Extensions/Old_Permic.js":711,"./Script_Extensions/Old_Persian.js":712,"./Script_Extensions/Old_Sogdian.js":713,"./Script_Extensions/Old_South_Arabian.js":714,"./Script_Extensions/Old_Turkic.js":715,"./Script_Extensions/Oriya.js":716,"./Script_Extensions/Osage.js":717,"./Script_Extensions/Osmanya.js":718,"./Script_Extensions/Pahawh_Hmong.js":719,"./Script_Extensions/Palmyrene.js":720,"./Script_Extensions/Pau_Cin_Hau.js":721,"./Script_Extensions/Phags_Pa.js":722,"./Script_Extensions/Phoenician.js":723,"./Script_Extensions/Psalter_Pahlavi.js":724,"./Script_Extensions/Rejang.js":725,"./Script_Extensions/Runic.js":726,"./Script_Extensions/Samaritan.js":727,"./Script_Extensions/Saurashtra.js":728,"./Script_Extensions/Sharada.js":729,"./Script_Extensions/Shavian.js":730,"./Script_Extensions/Siddham.js":731,"./Script_Extensions/SignWriting.js":732,"./Script_Extensions/Sinhala.js":733,"./Script_Extensions/Sogdian.js":734,"./Script_Extensions/Sora_Sompeng.js":735,"./Script_Extensions/Soyombo.js":736,"./Script_Extensions/Sundanese.js":737,"./Script_Extensions/Syloti_Nagri.js":738,"./Script_Extensions/Syriac.js":739,"./Script_Extensions/Tagalog.js":740,"./Script_Extensions/Tagbanwa.js":741,"./Script_Extensions/Tai_Le.js":742,"./Script_Extensions/Tai_Tham.js":743,"./Script_Extensions/Tai_Viet.js":744,"./Script_Extensions/Takri.js":745,"./Script_Extensions/Tamil.js":746,"./Script_Extensions/Tangut.js":747,"./Script_Extensions/Telugu.js":748,"./Script_Extensions/Thaana.js":749,"./Script_Extensions/Thai.js":750,"./Script_Extensions/Tibetan.js":751,"./Script_Extensions/Tifinagh.js":752,"./Script_Extensions/Tirhuta.js":753,"./Script_Extensions/Ugaritic.js":754,"./Script_Extensions/Vai.js":755,"./Script_Extensions/Warang_Citi.js":756,"./Script_Extensions/Yi.js":757,"./Script_Extensions/Zanabazar_Square.js":758,"./index.js":759,"./unicode-version.js":760};function a(e){var t=i(e);return n(t)}function i(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id=371},768:function(e,t){},896:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(272),n(273),n(82),n(274);var r=u(n(0)),a=p(n(1)),i=p(n(307)),s=u(n(897)),o=p(n(898)),c=p(n(899)),l=p(n(900));function p(e){return e&&e.__esModule?e:{default:e}}function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),j(this,m(t).apply(this,arguments))}var n,a,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r.Component),n=t,(a=[{key:"render",value:function(){return r.default.createElement(i.default,_({},t.defaultProps,this.props))}}])&&f(n.prototype,a),s&&f(n,s),t}();t.default=h,S(h,"propTypes",{title:a.default.string,id:a.default.string,Description:a.default.func,Details:a.default.func,DemoComponent:a.default.func,CodeComponent:a.default.func,hideTabs:a.default.bool}),S(h,"defaultProps",{title:"Tabs",id:"tabs",ExampleCode:l.default,Description:o.default,Details:c.default,DemoComponent:s.default,CodeComponent:s.Example,callback:s.Example.AdditionalCallback||null,hideTabs:!1})},897:function(e,t,n){"use strict";n.r(t),n.d(t,"Example",function(){return c});var r=n(6),a=n.n(r),i=n(0),s=n.n(i),o=n(294),c=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={activeTabKey:null},t.openTab=function(e){var n=e.key;t.setState({activeTabKey:n})},t}a()(t,e);var n=t.prototype;return n.isActive=function(e){return this.state.activeTabKey===e},n.render=function(){return s.a.createElement(i.Fragment,null,s.a.createElement(o.a,{selected_key:"first",data:l,on_change:this.openTab},{first:s.a.createElement("h1",null,"First"),second:s.a.createElement("h1",null,"Second"),third:s.a.createElement("h1",null,"Third")}))},t}(i.Component);c.AdditionalCallback={info:function(e){var t=e.CodeRenderer;return s.a.createElement(i.Fragment,null,s.a.createElement("h3",null,"Data Structure"),s.a.createElement(t,{language:"json"},p))}};var l=[{title:"First",key:"first"},{title:"Second",key:"second"},{title:"Third",key:"third"}],p=JSON.stringify(l,null,2);t.default=function(){return s.a.createElement(c,null)}},898:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return c});var r=n(83),a=n.n(r),i=n(0),s=n.n(i),o=n(278);t.default=function(e){var t=e.components;a()(e,["components"]);return s.a.createElement(o.MDXTag,{name:"wrapper",components:t},s.a.createElement(o.MDXTag,{name:"p",components:t},"Tabs are a list buttons to show variation of different content, quickly. The content is available on the page so the user can access it fast as possible."))};var c={}},899:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return c});var r=n(83),a=n.n(r),i=n(0),s=n.n(i),o=n(278);t.default=function(e){var t=e.components;a()(e,["components"]);return s.a.createElement(o.MDXTag,{name:"wrapper",components:t},s.a.createElement(o.MDXTag,{name:"table",components:t},s.a.createElement(o.MDXTag,{name:"thead",components:t,parentName:"table"},s.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"thead"},s.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Properties"),s.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Description"),s.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}}))),s.a.createElement(o.MDXTag,{name:"tbody",components:t,parentName:"table"},s.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},s.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},s.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"selected_key")),s.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},s.a.createElement(o.MDXTag,{name:"em",components:t,parentName:"td"},"(optional)")," in case one of the Tabs should be opened by default"),s.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}})),s.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},s.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},s.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"data")),s.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},s.a.createElement(o.MDXTag,{name:"em",components:t,parentName:"td"},"(mandatory)")," defines the data structure to load as a JSON. e.g. ",s.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"[{title: '...', key: '...'}]")),s.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}})))),s.a.createElement(o.MDXTag,{name:"table",components:t},s.a.createElement(o.MDXTag,{name:"thead",components:t,parentName:"table"},s.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"thead"},s.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Events"),s.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Description"))),s.a.createElement(o.MDXTag,{name:"tbody",components:t,parentName:"table"},s.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},s.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},s.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"on_change")),s.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},s.a.createElement(o.MDXTag,{name:"em",components:t,parentName:"td"},"(optional)")," this event gets triggered once the tabs changes its selected key")))))};var c={}},900:function(e,t){e.exports='<Tabs selected_key="first" data={data} on_change={this.openTab}>\n  {{\n    first: <h1>First</h1>,\n    second: <h1>Second</h1>,\n    third: <h1>Third</h1>\n  }}\n</Tabs>\n'}}]);
//# sourceMappingURL=component---src-pages-uilib-components-tabs-md-7d34fd9c18f677bdb6bb.js.map