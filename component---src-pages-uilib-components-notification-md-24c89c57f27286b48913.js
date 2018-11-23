(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{197:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t._frontmatter=t.default=void 0,n(75),n(51),n(283);var r=o(n(0)),i=n(268),a=o(n(890));function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}t.default=function(e){var t=e.components;s(e,["components"]);return r.default.createElement(i.MDXTag,{name:"wrapper",components:t},r.default.createElement(a.default,null))};t._frontmatter={header:"UI Library",title:"Notification",draft:!1,order:10}},296:function(e,t,n){"use strict";n(73);var r=n(0),i=n.n(r);t.a=function(e){return i.a.createElement("svg",Object.assign({viewBox:"0 0 16 16"},e),i.a.createElement("g",{clipPath:"url(#clip0)",fillRule:"evenodd",clipRule:"evenodd"},i.a.createElement("path",{d:"M6.614 10.447a.75.75 0 0 0-1.061-1.06L1.5 13.438v-1.522a.75.75 0 0 0-1.5 0v3.333a.747.747 0 0 0 .218.529l.002.001.001.002A.75.75 0 0 0 .75 16h3.333a.75.75 0 0 0 0-1.5H2.561l4.053-4.053zM15.943.463a.75.75 0 0 0-.161-.242L15.78.22 15.78.218A.748.748 0 0 0 15.25 0h-3.333a.75.75 0 0 0 0 1.5h1.522L9.386 5.553a.75.75 0 1 0 1.061 1.06L14.5 2.562v1.522a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-.057-.287zM.057.463A.748.748 0 0 0 0 .75v3.333a.75.75 0 1 0 1.5 0V2.561l4.053 4.053a.75.75 0 1 0 1.06-1.061L2.562 1.5h1.522a.75.75 0 1 0 0-1.5H.75a.748.748 0 0 0-.693.463zM10.447 9.386a.75.75 0 1 0-1.06 1.061l4.052 4.053h-1.522a.75.75 0 1 0 0 1.5h3.333a.75.75 0 0 0 .525-.215l.01-.01A.748.748 0 0 0 16 15.25v-3.333a.75.75 0 0 0-1.5 0v1.522l-4.053-4.053z"})),i.a.createElement("defs",null,i.a.createElement("clipPath",{id:"clip0"},i.a.createElement("path",{d:"M0 0h16v16H0z"}))))}},297:function(e,t,n){"use strict";n(73);var r=n(0),i=n.n(r);t.a=function(e){return i.a.createElement("svg",Object.assign({viewBox:"0 0 16 16"},e),i.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 1.875a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75zM0 8a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 8zm.75 5.375a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H.75z"}))}},298:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(73),n(265),n(266),n(76);var r=c(n(0)),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(770)),a=c(n(378)),o=n(771),s=c(n(301));function c(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var u=function(e){var t=e.language,n=e.children,c=e.reactLive,u=e.className;return t||(t=((u||"").split(/-/)||[null,"jsx"])[1]),c&&"jsx"===t?(console.log("exampleCode",t,p(n)),r.default.createElement(o.LiveProvider,{code:"string"==typeof n?String(n).trim():null},r.default.createElement(o.LiveEditor,null),r.default.createElement(o.LiveError,null),r.default.createElement(o.LivePreview,null))):r.default.createElement(i.default,l({},i.defaultProps,{code:String(n).trim(),language:t,theme:a.default}),function(e){var t=e.className,n=e.style,i=e.tokens,a=e.getLineProps,o=e.getTokenProps;return r.default.createElement(s.default,{className:t,style:n,p:3},_(i).map(function(e,t){return r.default.createElement("div",a({line:e,key:t}),e.map(function(e,t){return r.default.createElement("span",o({token:e,key:t}))}))}))})};t.default=u;var _=function(e){var t=e.length;if(0===t)return e;var n=e[t-1];return 1===n.length&&n[0].empty?e.slice(0,t-1):e}},299:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(265),n(266),n(267),n(79);var r=n(282),i=j(n(336)),a=j(n(0)),o=n(338),s=f(n(11)),c=f(n(1)),l=f(n(773)),p=n(270),u=n(15),_=n(332);function f(e){return e&&e.__esModule?e:{default:e}}function j(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(){return"undefined"==typeof window?null:(0,l.default)().location},b=(0,p.css)(" .fullscreen-page &{top:0;.is-sticky .dnb-tabs__tabs{margin:0 -2rem;}}.toggle-fullscreen{margin-right:1rem;}.dnb-modal__close-button{position:relative;top:auto;right:auto;}"),x=function(e){function t(e){var n,r,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,i=S(t).call(this,e),n=!i||"object"!==d(i)&&"function"!=typeof i?h(r):i,g(h(h(n)),"state",{activeTabKey:"demo",wasFullscreen:null}),g(h(h(n)),"openTab",function(e){var t=e.key;n.setState({activeTabKey:t})}),g(h(h(n)),"openFullscreen",function(){var e=E();e&&(0,u.navigate)("".concat(e.pathname,"?fullscreen#").concat(n.state.activeTabKey))}),g(h(h(n)),"quitFullscreen",function(){var e=E();e&&(0,u.navigate)([e.pathname,e.hash].join(""))}),n._id="item-wrapper";var a=E();return a&&(n.state.wasFullscreen=/fullscreen/.test(a.search)),n}var n,c,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,a.Component),n=t,(c=[{key:"isActive",value:function(e){return this.state.activeTabKey===e}},{key:"componentWillMount",value:function(){var e=E();e&&this.setState({wasFullscreen:/fullscreen/.test(e.search)})}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,c=t.id,l=t.tabs,p=t.hideTabs,u=t.ExampleCode,f=t.Description,j=t.Details,d=t.DemoComponent,y=t.CodeComponent,S=t.callback;return a.default.createElement("div",{className:"wrapped-item"},p?a.default.createElement("h4",null,a.default.createElement(s.default,{to:"/uilib/components/".concat(c)},n)):a.default.createElement("h1",null,n),!p&&a.default.createElement(r.Tabs,{id:this._id,do_set_hash:!0,data:l,on_change:this.openTab,render:function(t){var n=t.Wrapper,i=t.TabsList,s=t.Tabs;return a.default.createElement(n,{className:b},a.default.createElement(i,null,a.default.createElement(s,null),e.state.wasFullscreen?a.default.createElement(o.CloseButton,{on_click:e.quitFullscreen,title:"Quit Fullscreen",className:"toggle-fullscreen"}):a.default.createElement(r.Button,{on_click:e.openFullscreen,className:"toggle-fullscreen",variant:"secondary",title:"Fullscreen",icon:_.fullscreen})))}}),this.isActive("demo")&&a.default.createElement(r.Tabs.TabContent,{id:this._id,selection_key:"demo"},!p&&a.default.createElement(f,null),a.default.createElement(d,null),S&&S.demo&&a.default.createElement(S.demo,{CodeRenderer:i.CodeRenderer})),this.isActive("info")&&a.default.createElement(r.Tabs.TabContent,{id:this._id,selection_key:"info"},a.default.createElement(j,null),S&&S.info&&a.default.createElement(S.info,{CodeRenderer:i.CodeRenderer}),u&&a.default.createElement(a.Fragment,null,a.default.createElement("h3",null,"JSX Example"),a.default.createElement(i.CodeRenderer,{language:"jsx"},u))),this.isActive("code")&&a.default.createElement(r.Tabs.TabContent,{id:this._id,selection_key:"code"},a.default.createElement(i.default,{source:y}),S&&S.code&&a.default.createElement(S.code,{CodeRenderer:i.CodeRenderer})))}}])&&y(n.prototype,c),l&&y(n,l),t}();g(x,"propTypes",{ExampleCode:c.default.string,Description:c.default.func.isRequired,Details:c.default.func.isRequired,DemoComponent:c.default.func.isRequired,CodeComponent:c.default.func.isRequired,callback:c.default.shape({demo:c.default.oneOfType([c.default.func,c.default.node]),info:c.default.oneOfType([c.default.func,c.default.node]),code:c.default.oneOfType([c.default.func,c.default.node])}),hideTabs:c.default.bool,title:c.default.string.isRequired,id:c.default.string.isRequired,tabs:c.default.array}),g(x,"defaultProps",{ExampleCode:null,hideTabs:!1,callback:null,tabs:[{title:"Demo",key:"demo"},{title:"Details",key:"info"},{title:"Markup",key:"code"}]});var v=x;t.default=v},301:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=(0,((r=n(769))&&r.__esModule?r:{default:r}).default)({is:"pre",m:0});i.displayName="Pre";var a=i;t.default=a},332:function(e,t,n){"use strict";n.r(t);var r=n(296);n.d(t,"fullscreen",function(){return r.a});var i=n(297);n.d(t,"hamburger",function(){return i.a})},336:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CodeRenderer=t.default=void 0,n(265),n(266),n(36),n(267),n(34),n(774);var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),i=l(n(337)),a=l(n(1)),o=l(n(777)),s=l(n(778)),c=l(n(298));function l(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,n,r,i,a,o){try{var s=e[a](o),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,i)}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),e}function d(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?h(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(e){function t(e){var n;_(this,t),g(h(h(n=d(this,y(t).call(this,e)))),"state",{codeString:""}),g(h(h(n)),"_isMounted",!1);var i=n.props.source;return n.beautify(r.default.createElement(i,null)),n}var n,a;return S(t,r.Component),j(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.setCode()}},{key:"setCode",value:function(){this.code&&this.setState({codeString:this.props.raw+this.code}),this.code=null}},{key:"beautify",value:(n=regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=this.props.language,e.next="html"===e.t0?3:18;break;case 3:return this.code=o.default.renderToStaticMarkup(t),this.code=this.code.replace(/data-fake:/g,""),this.code=this.code.replace(/disabled=""/g,'disabled="disabled"'),e.prev=6,e.next=9,(0,i.default)(this.code,"html");case 9:this.code=e.sent,this.code=(0,s.default)(this.code,{ocd:!0}),this._isMounted&&this.setCode(),e.next=17;break;case 14:e.prev=14,e.t1=e.catch(6),console.log("HTML Beautifier Error:",e.t1);case 17:return e.abrupt("break",18);case 18:case"end":return e.stop()}},e,this,[[6,14]])}),a=function(){var e=this,t=arguments;return new Promise(function(r,i){var a=n.apply(e,t);function o(e){u(a,r,i,o,s,"next",e)}function s(e){u(a,r,i,o,s,"throw",e)}o(void 0)})},function(e){return a.apply(this,arguments)})},{key:"render",value:function(){return this.state.codeString?r.default.createElement(b,{language:this.props.language},this.state.codeString):r.default.createElement(r.Fragment,null)}}]),t}();t.default=E,g(E,"propTypes",{language:a.default.string,raw:a.default.string,source:a.default.oneOfType([a.default.node,a.default.func]).isRequired}),g(E,"defaultProps",{language:"html",raw:""});var b=function(e){function t(){return _(this,t),d(this,y(t).apply(this,arguments))}return S(t,r.Component),j(t,[{key:"render",value:function(){return r.default.createElement(c.default,this.props)}}]),t}();t.CodeRenderer=b,g(b,"propTypes",{language:a.default.string,children:a.default.oneOfType([a.default.string,a.default.node,a.default.func]).isRequired}),g(b,"defaultProps",{language:"jsx"})},337:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(36);var r,i=(r=n(775))&&r.__esModule?r:{default:r};var a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(function(r){switch(t){case"html":i.default.clean(e,{indent:"  ",wrap:80,"replace-nbsp":!0,"remove-tags":[],"remove-attributes":[],"break-around-tags":n.breakAroundTags||["div","span","p","button","input","svg","path"]},function(e){return r(e)})}})};t.default=a},338:function(e,t,n){"use strict";n.r(t);var r=n(273);n.d(t,"propTypes",function(){return r.d}),n.d(t,"defaultProps",function(){return r.c}),n.d(t,"CloseButton",function(){return r.a})},379:function(e,t,n){var r={"./Binary_Property/ASCII.js":380,"./Binary_Property/ASCII_Hex_Digit.js":381,"./Binary_Property/Alphabetic.js":382,"./Binary_Property/Any.js":383,"./Binary_Property/Assigned.js":384,"./Binary_Property/Bidi_Control.js":385,"./Binary_Property/Bidi_Mirrored.js":386,"./Binary_Property/Case_Ignorable.js":387,"./Binary_Property/Cased.js":388,"./Binary_Property/Changes_When_Casefolded.js":389,"./Binary_Property/Changes_When_Casemapped.js":390,"./Binary_Property/Changes_When_Lowercased.js":391,"./Binary_Property/Changes_When_NFKC_Casefolded.js":392,"./Binary_Property/Changes_When_Titlecased.js":393,"./Binary_Property/Changes_When_Uppercased.js":394,"./Binary_Property/Dash.js":395,"./Binary_Property/Default_Ignorable_Code_Point.js":396,"./Binary_Property/Deprecated.js":397,"./Binary_Property/Diacritic.js":398,"./Binary_Property/Emoji.js":399,"./Binary_Property/Emoji_Component.js":400,"./Binary_Property/Emoji_Modifier.js":401,"./Binary_Property/Emoji_Modifier_Base.js":402,"./Binary_Property/Emoji_Presentation.js":403,"./Binary_Property/Extended_Pictographic.js":404,"./Binary_Property/Extender.js":405,"./Binary_Property/Grapheme_Base.js":406,"./Binary_Property/Grapheme_Extend.js":407,"./Binary_Property/Hex_Digit.js":408,"./Binary_Property/IDS_Binary_Operator.js":409,"./Binary_Property/IDS_Trinary_Operator.js":410,"./Binary_Property/ID_Continue.js":411,"./Binary_Property/ID_Start.js":412,"./Binary_Property/Ideographic.js":413,"./Binary_Property/Join_Control.js":414,"./Binary_Property/Logical_Order_Exception.js":415,"./Binary_Property/Lowercase.js":416,"./Binary_Property/Math.js":417,"./Binary_Property/Noncharacter_Code_Point.js":418,"./Binary_Property/Pattern_Syntax.js":419,"./Binary_Property/Pattern_White_Space.js":420,"./Binary_Property/Quotation_Mark.js":421,"./Binary_Property/Radical.js":422,"./Binary_Property/Regional_Indicator.js":423,"./Binary_Property/Sentence_Terminal.js":424,"./Binary_Property/Soft_Dotted.js":425,"./Binary_Property/Terminal_Punctuation.js":426,"./Binary_Property/Unified_Ideograph.js":427,"./Binary_Property/Uppercase.js":428,"./Binary_Property/Variation_Selector.js":429,"./Binary_Property/White_Space.js":430,"./Binary_Property/XID_Continue.js":431,"./Binary_Property/XID_Start.js":432,"./General_Category/Cased_Letter.js":433,"./General_Category/Close_Punctuation.js":434,"./General_Category/Connector_Punctuation.js":435,"./General_Category/Control.js":436,"./General_Category/Currency_Symbol.js":437,"./General_Category/Dash_Punctuation.js":438,"./General_Category/Decimal_Number.js":439,"./General_Category/Enclosing_Mark.js":440,"./General_Category/Final_Punctuation.js":441,"./General_Category/Format.js":442,"./General_Category/Initial_Punctuation.js":443,"./General_Category/Letter.js":444,"./General_Category/Letter_Number.js":445,"./General_Category/Line_Separator.js":446,"./General_Category/Lowercase_Letter.js":447,"./General_Category/Mark.js":448,"./General_Category/Math_Symbol.js":449,"./General_Category/Modifier_Letter.js":450,"./General_Category/Modifier_Symbol.js":451,"./General_Category/Nonspacing_Mark.js":452,"./General_Category/Number.js":453,"./General_Category/Open_Punctuation.js":454,"./General_Category/Other.js":455,"./General_Category/Other_Letter.js":456,"./General_Category/Other_Number.js":457,"./General_Category/Other_Punctuation.js":458,"./General_Category/Other_Symbol.js":459,"./General_Category/Paragraph_Separator.js":460,"./General_Category/Private_Use.js":461,"./General_Category/Punctuation.js":462,"./General_Category/Separator.js":463,"./General_Category/Space_Separator.js":464,"./General_Category/Spacing_Mark.js":465,"./General_Category/Surrogate.js":466,"./General_Category/Symbol.js":467,"./General_Category/Titlecase_Letter.js":468,"./General_Category/Unassigned.js":469,"./General_Category/Uppercase_Letter.js":470,"./Script/Adlam.js":471,"./Script/Ahom.js":472,"./Script/Anatolian_Hieroglyphs.js":473,"./Script/Arabic.js":474,"./Script/Armenian.js":475,"./Script/Avestan.js":476,"./Script/Balinese.js":477,"./Script/Bamum.js":478,"./Script/Bassa_Vah.js":479,"./Script/Batak.js":480,"./Script/Bengali.js":481,"./Script/Bhaiksuki.js":482,"./Script/Bopomofo.js":483,"./Script/Brahmi.js":484,"./Script/Braille.js":485,"./Script/Buginese.js":486,"./Script/Buhid.js":487,"./Script/Canadian_Aboriginal.js":488,"./Script/Carian.js":489,"./Script/Caucasian_Albanian.js":490,"./Script/Chakma.js":491,"./Script/Cham.js":492,"./Script/Cherokee.js":493,"./Script/Common.js":494,"./Script/Coptic.js":495,"./Script/Cuneiform.js":496,"./Script/Cypriot.js":497,"./Script/Cyrillic.js":498,"./Script/Deseret.js":499,"./Script/Devanagari.js":500,"./Script/Dogra.js":501,"./Script/Duployan.js":502,"./Script/Egyptian_Hieroglyphs.js":503,"./Script/Elbasan.js":504,"./Script/Ethiopic.js":505,"./Script/Georgian.js":506,"./Script/Glagolitic.js":507,"./Script/Gothic.js":508,"./Script/Grantha.js":509,"./Script/Greek.js":510,"./Script/Gujarati.js":511,"./Script/Gunjala_Gondi.js":512,"./Script/Gurmukhi.js":513,"./Script/Han.js":514,"./Script/Hangul.js":515,"./Script/Hanifi_Rohingya.js":516,"./Script/Hanunoo.js":517,"./Script/Hatran.js":518,"./Script/Hebrew.js":519,"./Script/Hiragana.js":520,"./Script/Imperial_Aramaic.js":521,"./Script/Inherited.js":522,"./Script/Inscriptional_Pahlavi.js":523,"./Script/Inscriptional_Parthian.js":524,"./Script/Javanese.js":525,"./Script/Kaithi.js":526,"./Script/Kannada.js":527,"./Script/Katakana.js":528,"./Script/Kayah_Li.js":529,"./Script/Kharoshthi.js":530,"./Script/Khmer.js":531,"./Script/Khojki.js":532,"./Script/Khudawadi.js":533,"./Script/Lao.js":534,"./Script/Latin.js":535,"./Script/Lepcha.js":536,"./Script/Limbu.js":537,"./Script/Linear_A.js":538,"./Script/Linear_B.js":539,"./Script/Lisu.js":540,"./Script/Lycian.js":541,"./Script/Lydian.js":542,"./Script/Mahajani.js":543,"./Script/Makasar.js":544,"./Script/Malayalam.js":545,"./Script/Mandaic.js":546,"./Script/Manichaean.js":547,"./Script/Marchen.js":548,"./Script/Masaram_Gondi.js":549,"./Script/Medefaidrin.js":550,"./Script/Meetei_Mayek.js":551,"./Script/Mende_Kikakui.js":552,"./Script/Meroitic_Cursive.js":553,"./Script/Meroitic_Hieroglyphs.js":554,"./Script/Miao.js":555,"./Script/Modi.js":556,"./Script/Mongolian.js":557,"./Script/Mro.js":558,"./Script/Multani.js":559,"./Script/Myanmar.js":560,"./Script/Nabataean.js":561,"./Script/New_Tai_Lue.js":562,"./Script/Newa.js":563,"./Script/Nko.js":564,"./Script/Nushu.js":565,"./Script/Ogham.js":566,"./Script/Ol_Chiki.js":567,"./Script/Old_Hungarian.js":568,"./Script/Old_Italic.js":569,"./Script/Old_North_Arabian.js":570,"./Script/Old_Permic.js":571,"./Script/Old_Persian.js":572,"./Script/Old_Sogdian.js":573,"./Script/Old_South_Arabian.js":574,"./Script/Old_Turkic.js":575,"./Script/Oriya.js":576,"./Script/Osage.js":577,"./Script/Osmanya.js":578,"./Script/Pahawh_Hmong.js":579,"./Script/Palmyrene.js":580,"./Script/Pau_Cin_Hau.js":581,"./Script/Phags_Pa.js":582,"./Script/Phoenician.js":583,"./Script/Psalter_Pahlavi.js":584,"./Script/Rejang.js":585,"./Script/Runic.js":586,"./Script/Samaritan.js":587,"./Script/Saurashtra.js":588,"./Script/Sharada.js":589,"./Script/Shavian.js":590,"./Script/Siddham.js":591,"./Script/SignWriting.js":592,"./Script/Sinhala.js":593,"./Script/Sogdian.js":594,"./Script/Sora_Sompeng.js":595,"./Script/Soyombo.js":596,"./Script/Sundanese.js":597,"./Script/Syloti_Nagri.js":598,"./Script/Syriac.js":599,"./Script/Tagalog.js":600,"./Script/Tagbanwa.js":601,"./Script/Tai_Le.js":602,"./Script/Tai_Tham.js":603,"./Script/Tai_Viet.js":604,"./Script/Takri.js":605,"./Script/Tamil.js":606,"./Script/Tangut.js":607,"./Script/Telugu.js":608,"./Script/Thaana.js":609,"./Script/Thai.js":610,"./Script/Tibetan.js":611,"./Script/Tifinagh.js":612,"./Script/Tirhuta.js":613,"./Script/Ugaritic.js":614,"./Script/Vai.js":615,"./Script/Warang_Citi.js":616,"./Script/Yi.js":617,"./Script/Zanabazar_Square.js":618,"./Script_Extensions/Adlam.js":619,"./Script_Extensions/Ahom.js":620,"./Script_Extensions/Anatolian_Hieroglyphs.js":621,"./Script_Extensions/Arabic.js":622,"./Script_Extensions/Armenian.js":623,"./Script_Extensions/Avestan.js":624,"./Script_Extensions/Balinese.js":625,"./Script_Extensions/Bamum.js":626,"./Script_Extensions/Bassa_Vah.js":627,"./Script_Extensions/Batak.js":628,"./Script_Extensions/Bengali.js":629,"./Script_Extensions/Bhaiksuki.js":630,"./Script_Extensions/Bopomofo.js":631,"./Script_Extensions/Brahmi.js":632,"./Script_Extensions/Braille.js":633,"./Script_Extensions/Buginese.js":634,"./Script_Extensions/Buhid.js":635,"./Script_Extensions/Canadian_Aboriginal.js":636,"./Script_Extensions/Carian.js":637,"./Script_Extensions/Caucasian_Albanian.js":638,"./Script_Extensions/Chakma.js":639,"./Script_Extensions/Cham.js":640,"./Script_Extensions/Cherokee.js":641,"./Script_Extensions/Common.js":642,"./Script_Extensions/Coptic.js":643,"./Script_Extensions/Cuneiform.js":644,"./Script_Extensions/Cypriot.js":645,"./Script_Extensions/Cyrillic.js":646,"./Script_Extensions/Deseret.js":647,"./Script_Extensions/Devanagari.js":648,"./Script_Extensions/Dogra.js":649,"./Script_Extensions/Duployan.js":650,"./Script_Extensions/Egyptian_Hieroglyphs.js":651,"./Script_Extensions/Elbasan.js":652,"./Script_Extensions/Ethiopic.js":653,"./Script_Extensions/Georgian.js":654,"./Script_Extensions/Glagolitic.js":655,"./Script_Extensions/Gothic.js":656,"./Script_Extensions/Grantha.js":657,"./Script_Extensions/Greek.js":658,"./Script_Extensions/Gujarati.js":659,"./Script_Extensions/Gunjala_Gondi.js":660,"./Script_Extensions/Gurmukhi.js":661,"./Script_Extensions/Han.js":662,"./Script_Extensions/Hangul.js":663,"./Script_Extensions/Hanifi_Rohingya.js":664,"./Script_Extensions/Hanunoo.js":665,"./Script_Extensions/Hatran.js":666,"./Script_Extensions/Hebrew.js":667,"./Script_Extensions/Hiragana.js":668,"./Script_Extensions/Imperial_Aramaic.js":669,"./Script_Extensions/Inherited.js":670,"./Script_Extensions/Inscriptional_Pahlavi.js":671,"./Script_Extensions/Inscriptional_Parthian.js":672,"./Script_Extensions/Javanese.js":673,"./Script_Extensions/Kaithi.js":674,"./Script_Extensions/Kannada.js":675,"./Script_Extensions/Katakana.js":676,"./Script_Extensions/Kayah_Li.js":677,"./Script_Extensions/Kharoshthi.js":678,"./Script_Extensions/Khmer.js":679,"./Script_Extensions/Khojki.js":680,"./Script_Extensions/Khudawadi.js":681,"./Script_Extensions/Lao.js":682,"./Script_Extensions/Latin.js":683,"./Script_Extensions/Lepcha.js":684,"./Script_Extensions/Limbu.js":685,"./Script_Extensions/Linear_A.js":686,"./Script_Extensions/Linear_B.js":687,"./Script_Extensions/Lisu.js":688,"./Script_Extensions/Lycian.js":689,"./Script_Extensions/Lydian.js":690,"./Script_Extensions/Mahajani.js":691,"./Script_Extensions/Makasar.js":692,"./Script_Extensions/Malayalam.js":693,"./Script_Extensions/Mandaic.js":694,"./Script_Extensions/Manichaean.js":695,"./Script_Extensions/Marchen.js":696,"./Script_Extensions/Masaram_Gondi.js":697,"./Script_Extensions/Medefaidrin.js":698,"./Script_Extensions/Meetei_Mayek.js":699,"./Script_Extensions/Mende_Kikakui.js":700,"./Script_Extensions/Meroitic_Cursive.js":701,"./Script_Extensions/Meroitic_Hieroglyphs.js":702,"./Script_Extensions/Miao.js":703,"./Script_Extensions/Modi.js":704,"./Script_Extensions/Mongolian.js":705,"./Script_Extensions/Mro.js":706,"./Script_Extensions/Multani.js":707,"./Script_Extensions/Myanmar.js":708,"./Script_Extensions/Nabataean.js":709,"./Script_Extensions/New_Tai_Lue.js":710,"./Script_Extensions/Newa.js":711,"./Script_Extensions/Nko.js":712,"./Script_Extensions/Nushu.js":713,"./Script_Extensions/Ogham.js":714,"./Script_Extensions/Ol_Chiki.js":715,"./Script_Extensions/Old_Hungarian.js":716,"./Script_Extensions/Old_Italic.js":717,"./Script_Extensions/Old_North_Arabian.js":718,"./Script_Extensions/Old_Permic.js":719,"./Script_Extensions/Old_Persian.js":720,"./Script_Extensions/Old_Sogdian.js":721,"./Script_Extensions/Old_South_Arabian.js":722,"./Script_Extensions/Old_Turkic.js":723,"./Script_Extensions/Oriya.js":724,"./Script_Extensions/Osage.js":725,"./Script_Extensions/Osmanya.js":726,"./Script_Extensions/Pahawh_Hmong.js":727,"./Script_Extensions/Palmyrene.js":728,"./Script_Extensions/Pau_Cin_Hau.js":729,"./Script_Extensions/Phags_Pa.js":730,"./Script_Extensions/Phoenician.js":731,"./Script_Extensions/Psalter_Pahlavi.js":732,"./Script_Extensions/Rejang.js":733,"./Script_Extensions/Runic.js":734,"./Script_Extensions/Samaritan.js":735,"./Script_Extensions/Saurashtra.js":736,"./Script_Extensions/Sharada.js":737,"./Script_Extensions/Shavian.js":738,"./Script_Extensions/Siddham.js":739,"./Script_Extensions/SignWriting.js":740,"./Script_Extensions/Sinhala.js":741,"./Script_Extensions/Sogdian.js":742,"./Script_Extensions/Sora_Sompeng.js":743,"./Script_Extensions/Soyombo.js":744,"./Script_Extensions/Sundanese.js":745,"./Script_Extensions/Syloti_Nagri.js":746,"./Script_Extensions/Syriac.js":747,"./Script_Extensions/Tagalog.js":748,"./Script_Extensions/Tagbanwa.js":749,"./Script_Extensions/Tai_Le.js":750,"./Script_Extensions/Tai_Tham.js":751,"./Script_Extensions/Tai_Viet.js":752,"./Script_Extensions/Takri.js":753,"./Script_Extensions/Tamil.js":754,"./Script_Extensions/Tangut.js":755,"./Script_Extensions/Telugu.js":756,"./Script_Extensions/Thaana.js":757,"./Script_Extensions/Thai.js":758,"./Script_Extensions/Tibetan.js":759,"./Script_Extensions/Tifinagh.js":760,"./Script_Extensions/Tirhuta.js":761,"./Script_Extensions/Ugaritic.js":762,"./Script_Extensions/Vai.js":763,"./Script_Extensions/Warang_Citi.js":764,"./Script_Extensions/Yi.js":765,"./Script_Extensions/Zanabazar_Square.js":766,"./index.js":767,"./unicode-version.js":768};function i(e){var t=a(e);return n(t)}function a(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}i.keys=function(){return Object.keys(r)},i.resolve=a,e.exports=i,i.id=379},776:function(e,t){},890:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(265),n(266),n(73),n(267);var r=u(n(0)),i=p(n(1)),a=p(n(299)),o=u(n(891)),s=p(n(892)),c=p(n(893)),l=p(n(894));function p(e){return e&&e.__esModule?e:{default:e}}function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,y(t).apply(this,arguments))}var n,i,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,r.Component),n=t,(i=[{key:"render",value:function(){return r.default.createElement(a.default,f({},t.defaultProps,this.props))}}])&&j(n.prototype,i),o&&j(n,o),t}();t.default=h,m(h,"propTypes",{title:i.default.string,id:i.default.string,Description:i.default.func,Details:i.default.func,DemoComponent:i.default.func,CodeComponent:i.default.func,hideTabs:i.default.bool}),m(h,"defaultProps",{title:"Notification",id:"notification",ExampleCode:l.default,Description:s.default,Details:c.default,DemoComponent:o.default,CodeComponent:o.Example,callback:o.Example.AdditionalCallback||null,hideTabs:!1})},891:function(e,t,n){"use strict";n.r(t),n.d(t,"Example",function(){return c});var r=n(6),i=n.n(r),a=n(0),o=n.n(a),s=n(278),c=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return o.a.createElement(a.Fragment,null,o.a.createElement(s.a,{notification_amount:2,title_text:"Du har {amount} notifications"}),o.a.createElement(s.a,{notification_amount:2,title_text:"Du har {amount} notifications"}),o.a.createElement(s.a,{notification_amount:0,title_text:"Du har ingen notifications"}))},t}(a.Component);t.default=function(){return o.a.createElement(c,null)}},892:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return c});var r=n(74),i=n.n(r),a=n(0),o=n.n(a),s=n(268);t.default=function(e){var t=e.components;i()(e,["components"]);return o.a.createElement(s.MDXTag,{name:"wrapper",components:t},o.a.createElement(s.MDXTag,{name:"p",components:t},"TODO: Write description for Notifications"))};var c={}},893:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return c});var r=n(74),i=n.n(r),a=n(0),o=n.n(a),s=n(268);t.default=function(e){var t=e.components;i()(e,["components"]);return o.a.createElement(s.MDXTag,{name:"wrapper",components:t},o.a.createElement(s.MDXTag,{name:"table",components:t},o.a.createElement(s.MDXTag,{name:"thead",components:t,parentName:"table"},o.a.createElement(s.MDXTag,{name:"tr",components:t,parentName:"thead"},o.a.createElement(s.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Properties"),o.a.createElement(s.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Description"))),o.a.createElement(s.MDXTag,{name:"tbody",components:t,parentName:"table"},o.a.createElement(s.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(s.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},o.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"notification_amount")),o.a.createElement(s.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},o.a.createElement(s.MDXTag,{name:"em",components:t,parentName:"td"},"(mandatory)")," the amount of notifications")),o.a.createElement(s.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(s.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},o.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"title_text")),o.a.createElement(s.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},o.a.createElement(s.MDXTag,{name:"em",components:t,parentName:"td"},"(mandatory)")," accessibility helper text - telling the user what the icon means")))))};var c={}},894:function(e,t){e.exports='<Notification\n  notification_amount={2}\n  title_text="Du har {amount} notifications"\n/>\n<Notification\n  notification_amount={2}\n  title_text="Du har {amount} notifications"\n/>\n<Notification\n  notification_amount={0}\n  title_text="Du har ingen notifications"\n/>\n'}}]);
//# sourceMappingURL=component---src-pages-uilib-components-notification-md-24c89c57f27286b48913.js.map