(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{213:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t._frontmatter=t.default=void 0,n(76),n(51),n(299);var r=o(n(0)),a=n(286),i=o(n(830));function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.default=function(e){var t=e.components,n=s(e,["components"]);return r.default.createElement(a.MDXTag,{name:"wrapper",Layout:function(e){var t=e.children;return r.default.createElement("div",null,t)},layoutProps:n,components:t},r.default.createElement(i.default,null))};t._frontmatter={header:"UI Library",title:"Typography [Deprecated]",draft:!1,order:4}},313:function(e,t,n){"use strict";n(74);var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("svg",Object.assign({viewBox:"0 0 16 16"},e),a.a.createElement("g",{clipPath:"url(#clip0)",fillRule:"evenodd",clipRule:"evenodd"},a.a.createElement("path",{d:"M6.614 10.447a.75.75 0 0 0-1.061-1.06L1.5 13.438v-1.522a.75.75 0 0 0-1.5 0v3.333a.747.747 0 0 0 .218.529l.002.001.001.002A.75.75 0 0 0 .75 16h3.333a.75.75 0 0 0 0-1.5H2.561l4.053-4.053zM15.943.463a.75.75 0 0 0-.161-.242L15.78.22 15.78.218A.748.748 0 0 0 15.25 0h-3.333a.75.75 0 0 0 0 1.5h1.522L9.386 5.553a.75.75 0 1 0 1.061 1.06L14.5 2.562v1.522a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-.057-.287zM.057.463A.748.748 0 0 0 0 .75v3.333a.75.75 0 1 0 1.5 0V2.561l4.053 4.053a.75.75 0 1 0 1.06-1.061L2.562 1.5h1.522a.75.75 0 1 0 0-1.5H.75a.748.748 0 0 0-.693.463zM10.447 9.386a.75.75 0 1 0-1.06 1.061l4.052 4.053h-1.522a.75.75 0 1 0 0 1.5h3.333a.75.75 0 0 0 .525-.215l.01-.01A.748.748 0 0 0 16 15.25v-3.333a.75.75 0 0 0-1.5 0v1.522l-4.053-4.053z"})),a.a.createElement("defs",null,a.a.createElement("clipPath",{id:"clip0"},a.a.createElement("path",{d:"M0 0h16v16H0z"}))))}},314:function(e,t,n){"use strict";n(74);var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("svg",Object.assign({viewBox:"0 0 16 16"},e),a.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 1.875a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75zM0 8a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 8zm.75 5.375a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H.75z"}))}},316:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(74);var r=n(78);n(77);var a=l(n(0)),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(796)),o=l(n(404)),s=n(797),c=l(n(321));function l(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(e){var t=e.language,n=e.children,l=e.reactLive,u=e.className;return t||(t=((u||"").split(/-/)||[null,"jsx"])[1]),l&&"jsx"===t?a.default.createElement(s.LiveProvider,{code:"string"==typeof n?String(n).trim():null},a.default.createElement(s.LiveEditor,null),a.default.createElement(s.LiveError,null),a.default.createElement(s.LivePreview,null)):a.default.createElement(i.default,p({},i.defaultProps,{code:String(n).trim(),language:t,theme:o.default}),function(e){var t=e.className,n=e.style,i=e.tokens,o=e.getLineProps,s=e.getTokenProps;return a.default.createElement(c.default,{className:(0,r.merge)((0,r.css)(n)+" "+t)},d(i).map(function(e,t){return a.default.createElement("div",o({line:e,key:t}),e.map(function(e,t){return a.default.createElement("span",s({token:e,key:t}))}))}))})};t.default=u;var d=function(e){var t=e.length;if(0===t)return e;var n=e[t-1];return 1===n.length&&n[0].empty?e.slice(0,t-1):e}},318:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(282),n(283),n(281),n(81),n(80);var r=n(298),a=y(n(362)),i=y(n(0)),o=_(n(361)),s=n(364),c=_(n(12)),l=_(n(1)),p=_(n(798)),u=n(284),d=n(15),f=n(360);function _(e){return e&&e.__esModule?e:{default:e}}function y(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(){return"undefined"==typeof window?null:(0,p.default)().location},v=(0,u.css)(".fullscreen-page &{top:0;.is-sticky .dnb-tabs__tabs{margin:0 -2rem;}}.toggle-fullscreen{margin-right:1rem;}.dnb-modal__close-button{position:relative;top:auto;right:auto;}"),x=function(e){function t(e){var n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=S(t).call(this,e),n=!a||"object"!==j(a)&&"function"!=typeof a?g(r):a,E(g(g(n)),"state",{activeTabKey:"demo",wasFullscreen:null}),E(g(g(n)),"openTab",function(e){var t=e.key;n.setState({activeTabKey:t})}),E(g(g(n)),"openFullscreen",function(){var e=b();e&&(0,d.navigate)("".concat(e.pathname,"?fullscreen#").concat(n.state.activeTabKey))}),E(g(g(n)),"quitFullscreen",function(){var e=b();e&&(0,d.navigate)([e.pathname,e.hash].join(""))}),n._id="item-wrapper";var i=b();return i&&(n.state.wasFullscreen=/fullscreen/.test(i.search)),n}var n,l,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,i.PureComponent),n=t,(l=[{key:"isActive",value:function(e){return this.state.activeTabKey===e}},{key:"componentWillMount",value:function(){var e=b();e&&this.setState({wasFullscreen:/fullscreen/.test(e.search)})}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,l=t.id,p=t.tabs,u=t.hideTabs,d=t.ExampleCode,_=t.Description,y=t.Details,j=t.DemoComponent,m=t.CodeComponent,S=t.callback,h=String((/<div>(.*?)<\/div>/g.exec(o.default.renderToStaticMarkup(i.default.createElement(y,null)))||[])[1]||"").trim(),g=String(o.default.renderToStaticMarkup(i.default.createElement(m,null))).trim(),E=[p[0]],b=[];return this.isActive("demo")&&b.push(i.default.createElement(r.Tabs.TabContent,{key:"demo",id:this._id,selection_key:"demo"},!u&&i.default.createElement(_,null),i.default.createElement(j,null),S&&S.demo&&i.default.createElement(S.demo,{CodeRenderer:a.CodeRenderer}))),(h||S&&S.info||d)&&(E.push(p.find(function(e){return"info"===e.key})),this.isActive("info")&&b.push(i.default.createElement(r.Tabs.TabContent,{key:"info",id:this._id,selection_key:"info"},i.default.createElement(y,null),S&&S.info&&i.default.createElement(S.info,{CodeRenderer:a.CodeRenderer}),d&&i.default.createElement(i.Fragment,null,i.default.createElement("h3",null,"JSX Example"),i.default.createElement(a.CodeRenderer,{language:"jsx"},d))))),(g||S&&S.code)&&(E.push(p.find(function(e){return"code"===e.key})),this.isActive("code")&&b.push(i.default.createElement(r.Tabs.TabContent,{key:"code",id:this._id,selection_key:"code"},i.default.createElement(a.default,{source:m}),S&&S.code&&i.default.createElement(S.code,{CodeRenderer:a.CodeRenderer})))),i.default.createElement("div",{className:"wrapped-item"},u?i.default.createElement("h4",null,i.default.createElement(c.default,{to:"/uilib/components/".concat(l)},n)):i.default.createElement("h1",null,n),!u&&i.default.createElement(r.Tabs,{id:this._id,do_set_hash:!0,data:E,on_change:this.openTab,render:function(t){var n=t.Wrapper,a=t.TabsList,o=t.Tabs;return i.default.createElement(n,{className:v},i.default.createElement(a,null,i.default.createElement(o,null),e.state.wasFullscreen?i.default.createElement(s.CloseButton,{on_click:e.quitFullscreen,title:"Quit Fullscreen",className:"toggle-fullscreen"}):i.default.createElement(r.Button,{on_click:e.openFullscreen,className:"toggle-fullscreen",variant:"secondary",title:"Fullscreen",icon:f.fullscreen})))}}),b)}}])&&m(n.prototype,l),p&&m(n,p),t}();E(x,"propTypes",{ExampleCode:l.default.string,Description:l.default.func.isRequired,Details:l.default.func.isRequired,DemoComponent:l.default.func.isRequired,CodeComponent:l.default.func.isRequired,callback:l.default.shape({demo:l.default.oneOfType([l.default.func,l.default.node]),info:l.default.oneOfType([l.default.func,l.default.node]),code:l.default.oneOfType([l.default.func,l.default.node])}),hideTabs:l.default.bool,title:l.default.string.isRequired,id:l.default.string.isRequired,tabs:l.default.array}),E(x,"defaultProps",{ExampleCode:null,hideTabs:!1,callback:null,tabs:[{title:"Demo",key:"demo"},{title:"Details",key:"info"},{title:"Markup",key:"code"}]});var P=x;t.default=P},321:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,((r=n(284))&&r.__esModule?r:{default:r}).default)("pre",{target:"ew8f31h0"})("padding:1rem;");t.default=a},360:function(e,t,n){"use strict";n.r(t);var r=n(313);n.d(t,"fullscreen",function(){return r.a});var a=n(314);n.d(t,"hamburger",function(){return a.a})},362:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CodeRenderer=t.default=void 0,n(282),n(283),n(36),n(281),n(34),n(799);var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),a=l(n(363)),i=l(n(1)),o=l(n(361)),s=l(n(802)),c=l(n(316));function l(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,n,r,a,i,o){try{var s=e[i](o),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),e}function y(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?h(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(e){function t(e){var n;d(this,t),g(h(h(n=y(this,j(t).call(this,e)))),"state",{codeString:""}),g(h(h(n)),"_isMounted",!1);var a=n.props.source;return n.beautify(r.default.createElement(a,null)),n}return m(t,r.PureComponent),_(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.setCode()}},{key:"setCode",value:function(){this.code&&this.setState({codeString:this.props.raw+this.code}),this.code=null}},{key:"beautify",value:function(){var e,t=(e=regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=this.props.language,e.next="html"===e.t0?3:18;break;case 3:return this.code=o.default.renderToStaticMarkup(t),this.code=this.code.replace(/data-fake:/g,""),this.code=this.code.replace(/disabled=""/g,'disabled="disabled"'),e.prev=6,e.next=9,(0,a.default)(this.code,"html");case 9:this.code=e.sent,this.code=(0,s.default)(this.code,{ocd:!0}),this._isMounted&&this.setCode(),e.next=17;break;case 14:e.prev=14,e.t1=e.catch(6),console.log("HTML Beautifier Error:",e.t1);case 17:return e.abrupt("break",18);case 18:case"end":return e.stop()}},e,this,[[6,14]])}),function(){var t=this,n=arguments;return new Promise(function(r,a){var i=e.apply(t,n);function o(e){u(i,r,a,o,s,"next",e)}function s(e){u(i,r,a,o,s,"throw",e)}o(void 0)})});return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.codeString?r.default.createElement(b,{language:this.props.language},this.state.codeString):r.default.createElement(r.Fragment,null)}}]),t}();t.default=E,g(E,"propTypes",{language:i.default.string,raw:i.default.string,source:i.default.oneOfType([i.default.node,i.default.func]).isRequired}),g(E,"defaultProps",{language:"html",raw:""});var b=function(e){function t(){return d(this,t),y(this,j(t).apply(this,arguments))}return m(t,r.PureComponent),_(t,[{key:"render",value:function(){return r.default.createElement(c.default,this.props)}}]),t}();t.CodeRenderer=b,g(b,"propTypes",{language:i.default.string,children:i.default.oneOfType([i.default.string,i.default.node,i.default.func]).isRequired}),g(b,"defaultProps",{language:"jsx"})},363:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(36);var r,a=(r=n(800))&&r.__esModule?r:{default:r};var i=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(function(r){switch(t){case"html":a.default.clean(e,{indent:"  ",wrap:80,"replace-nbsp":!0,"remove-tags":[],"remove-attributes":[],"break-around-tags":n.breakAroundTags||["div","span","p","button","input","svg","path"]},function(e){return r(e)})}})};t.default=i},364:function(e,t,n){"use strict";n.r(t);var r=n(288);n.d(t,"propTypes",function(){return r.d}),n.d(t,"defaultProps",function(){return r.c}),n.d(t,"CloseButton",function(){return r.a})},405:function(e,t,n){var r={"./Binary_Property/ASCII.js":406,"./Binary_Property/ASCII_Hex_Digit.js":407,"./Binary_Property/Alphabetic.js":408,"./Binary_Property/Any.js":409,"./Binary_Property/Assigned.js":410,"./Binary_Property/Bidi_Control.js":411,"./Binary_Property/Bidi_Mirrored.js":412,"./Binary_Property/Case_Ignorable.js":413,"./Binary_Property/Cased.js":414,"./Binary_Property/Changes_When_Casefolded.js":415,"./Binary_Property/Changes_When_Casemapped.js":416,"./Binary_Property/Changes_When_Lowercased.js":417,"./Binary_Property/Changes_When_NFKC_Casefolded.js":418,"./Binary_Property/Changes_When_Titlecased.js":419,"./Binary_Property/Changes_When_Uppercased.js":420,"./Binary_Property/Dash.js":421,"./Binary_Property/Default_Ignorable_Code_Point.js":422,"./Binary_Property/Deprecated.js":423,"./Binary_Property/Diacritic.js":424,"./Binary_Property/Emoji.js":425,"./Binary_Property/Emoji_Component.js":426,"./Binary_Property/Emoji_Modifier.js":427,"./Binary_Property/Emoji_Modifier_Base.js":428,"./Binary_Property/Emoji_Presentation.js":429,"./Binary_Property/Extended_Pictographic.js":430,"./Binary_Property/Extender.js":431,"./Binary_Property/Grapheme_Base.js":432,"./Binary_Property/Grapheme_Extend.js":433,"./Binary_Property/Hex_Digit.js":434,"./Binary_Property/IDS_Binary_Operator.js":435,"./Binary_Property/IDS_Trinary_Operator.js":436,"./Binary_Property/ID_Continue.js":437,"./Binary_Property/ID_Start.js":438,"./Binary_Property/Ideographic.js":439,"./Binary_Property/Join_Control.js":440,"./Binary_Property/Logical_Order_Exception.js":441,"./Binary_Property/Lowercase.js":442,"./Binary_Property/Math.js":443,"./Binary_Property/Noncharacter_Code_Point.js":444,"./Binary_Property/Pattern_Syntax.js":445,"./Binary_Property/Pattern_White_Space.js":446,"./Binary_Property/Quotation_Mark.js":447,"./Binary_Property/Radical.js":448,"./Binary_Property/Regional_Indicator.js":449,"./Binary_Property/Sentence_Terminal.js":450,"./Binary_Property/Soft_Dotted.js":451,"./Binary_Property/Terminal_Punctuation.js":452,"./Binary_Property/Unified_Ideograph.js":453,"./Binary_Property/Uppercase.js":454,"./Binary_Property/Variation_Selector.js":455,"./Binary_Property/White_Space.js":456,"./Binary_Property/XID_Continue.js":457,"./Binary_Property/XID_Start.js":458,"./General_Category/Cased_Letter.js":459,"./General_Category/Close_Punctuation.js":460,"./General_Category/Connector_Punctuation.js":461,"./General_Category/Control.js":462,"./General_Category/Currency_Symbol.js":463,"./General_Category/Dash_Punctuation.js":464,"./General_Category/Decimal_Number.js":465,"./General_Category/Enclosing_Mark.js":466,"./General_Category/Final_Punctuation.js":467,"./General_Category/Format.js":468,"./General_Category/Initial_Punctuation.js":469,"./General_Category/Letter.js":470,"./General_Category/Letter_Number.js":471,"./General_Category/Line_Separator.js":472,"./General_Category/Lowercase_Letter.js":473,"./General_Category/Mark.js":474,"./General_Category/Math_Symbol.js":475,"./General_Category/Modifier_Letter.js":476,"./General_Category/Modifier_Symbol.js":477,"./General_Category/Nonspacing_Mark.js":478,"./General_Category/Number.js":479,"./General_Category/Open_Punctuation.js":480,"./General_Category/Other.js":481,"./General_Category/Other_Letter.js":482,"./General_Category/Other_Number.js":483,"./General_Category/Other_Punctuation.js":484,"./General_Category/Other_Symbol.js":485,"./General_Category/Paragraph_Separator.js":486,"./General_Category/Private_Use.js":487,"./General_Category/Punctuation.js":488,"./General_Category/Separator.js":489,"./General_Category/Space_Separator.js":490,"./General_Category/Spacing_Mark.js":491,"./General_Category/Surrogate.js":492,"./General_Category/Symbol.js":493,"./General_Category/Titlecase_Letter.js":494,"./General_Category/Unassigned.js":495,"./General_Category/Uppercase_Letter.js":496,"./Script/Adlam.js":497,"./Script/Ahom.js":498,"./Script/Anatolian_Hieroglyphs.js":499,"./Script/Arabic.js":500,"./Script/Armenian.js":501,"./Script/Avestan.js":502,"./Script/Balinese.js":503,"./Script/Bamum.js":504,"./Script/Bassa_Vah.js":505,"./Script/Batak.js":506,"./Script/Bengali.js":507,"./Script/Bhaiksuki.js":508,"./Script/Bopomofo.js":509,"./Script/Brahmi.js":510,"./Script/Braille.js":511,"./Script/Buginese.js":512,"./Script/Buhid.js":513,"./Script/Canadian_Aboriginal.js":514,"./Script/Carian.js":515,"./Script/Caucasian_Albanian.js":516,"./Script/Chakma.js":517,"./Script/Cham.js":518,"./Script/Cherokee.js":519,"./Script/Common.js":520,"./Script/Coptic.js":521,"./Script/Cuneiform.js":522,"./Script/Cypriot.js":523,"./Script/Cyrillic.js":524,"./Script/Deseret.js":525,"./Script/Devanagari.js":526,"./Script/Dogra.js":527,"./Script/Duployan.js":528,"./Script/Egyptian_Hieroglyphs.js":529,"./Script/Elbasan.js":530,"./Script/Ethiopic.js":531,"./Script/Georgian.js":532,"./Script/Glagolitic.js":533,"./Script/Gothic.js":534,"./Script/Grantha.js":535,"./Script/Greek.js":536,"./Script/Gujarati.js":537,"./Script/Gunjala_Gondi.js":538,"./Script/Gurmukhi.js":539,"./Script/Han.js":540,"./Script/Hangul.js":541,"./Script/Hanifi_Rohingya.js":542,"./Script/Hanunoo.js":543,"./Script/Hatran.js":544,"./Script/Hebrew.js":545,"./Script/Hiragana.js":546,"./Script/Imperial_Aramaic.js":547,"./Script/Inherited.js":548,"./Script/Inscriptional_Pahlavi.js":549,"./Script/Inscriptional_Parthian.js":550,"./Script/Javanese.js":551,"./Script/Kaithi.js":552,"./Script/Kannada.js":553,"./Script/Katakana.js":554,"./Script/Kayah_Li.js":555,"./Script/Kharoshthi.js":556,"./Script/Khmer.js":557,"./Script/Khojki.js":558,"./Script/Khudawadi.js":559,"./Script/Lao.js":560,"./Script/Latin.js":561,"./Script/Lepcha.js":562,"./Script/Limbu.js":563,"./Script/Linear_A.js":564,"./Script/Linear_B.js":565,"./Script/Lisu.js":566,"./Script/Lycian.js":567,"./Script/Lydian.js":568,"./Script/Mahajani.js":569,"./Script/Makasar.js":570,"./Script/Malayalam.js":571,"./Script/Mandaic.js":572,"./Script/Manichaean.js":573,"./Script/Marchen.js":574,"./Script/Masaram_Gondi.js":575,"./Script/Medefaidrin.js":576,"./Script/Meetei_Mayek.js":577,"./Script/Mende_Kikakui.js":578,"./Script/Meroitic_Cursive.js":579,"./Script/Meroitic_Hieroglyphs.js":580,"./Script/Miao.js":581,"./Script/Modi.js":582,"./Script/Mongolian.js":583,"./Script/Mro.js":584,"./Script/Multani.js":585,"./Script/Myanmar.js":586,"./Script/Nabataean.js":587,"./Script/New_Tai_Lue.js":588,"./Script/Newa.js":589,"./Script/Nko.js":590,"./Script/Nushu.js":591,"./Script/Ogham.js":592,"./Script/Ol_Chiki.js":593,"./Script/Old_Hungarian.js":594,"./Script/Old_Italic.js":595,"./Script/Old_North_Arabian.js":596,"./Script/Old_Permic.js":597,"./Script/Old_Persian.js":598,"./Script/Old_Sogdian.js":599,"./Script/Old_South_Arabian.js":600,"./Script/Old_Turkic.js":601,"./Script/Oriya.js":602,"./Script/Osage.js":603,"./Script/Osmanya.js":604,"./Script/Pahawh_Hmong.js":605,"./Script/Palmyrene.js":606,"./Script/Pau_Cin_Hau.js":607,"./Script/Phags_Pa.js":608,"./Script/Phoenician.js":609,"./Script/Psalter_Pahlavi.js":610,"./Script/Rejang.js":611,"./Script/Runic.js":612,"./Script/Samaritan.js":613,"./Script/Saurashtra.js":614,"./Script/Sharada.js":615,"./Script/Shavian.js":616,"./Script/Siddham.js":617,"./Script/SignWriting.js":618,"./Script/Sinhala.js":619,"./Script/Sogdian.js":620,"./Script/Sora_Sompeng.js":621,"./Script/Soyombo.js":622,"./Script/Sundanese.js":623,"./Script/Syloti_Nagri.js":624,"./Script/Syriac.js":625,"./Script/Tagalog.js":626,"./Script/Tagbanwa.js":627,"./Script/Tai_Le.js":628,"./Script/Tai_Tham.js":629,"./Script/Tai_Viet.js":630,"./Script/Takri.js":631,"./Script/Tamil.js":632,"./Script/Tangut.js":633,"./Script/Telugu.js":634,"./Script/Thaana.js":635,"./Script/Thai.js":636,"./Script/Tibetan.js":637,"./Script/Tifinagh.js":638,"./Script/Tirhuta.js":639,"./Script/Ugaritic.js":640,"./Script/Vai.js":641,"./Script/Warang_Citi.js":642,"./Script/Yi.js":643,"./Script/Zanabazar_Square.js":644,"./Script_Extensions/Adlam.js":645,"./Script_Extensions/Ahom.js":646,"./Script_Extensions/Anatolian_Hieroglyphs.js":647,"./Script_Extensions/Arabic.js":648,"./Script_Extensions/Armenian.js":649,"./Script_Extensions/Avestan.js":650,"./Script_Extensions/Balinese.js":651,"./Script_Extensions/Bamum.js":652,"./Script_Extensions/Bassa_Vah.js":653,"./Script_Extensions/Batak.js":654,"./Script_Extensions/Bengali.js":655,"./Script_Extensions/Bhaiksuki.js":656,"./Script_Extensions/Bopomofo.js":657,"./Script_Extensions/Brahmi.js":658,"./Script_Extensions/Braille.js":659,"./Script_Extensions/Buginese.js":660,"./Script_Extensions/Buhid.js":661,"./Script_Extensions/Canadian_Aboriginal.js":662,"./Script_Extensions/Carian.js":663,"./Script_Extensions/Caucasian_Albanian.js":664,"./Script_Extensions/Chakma.js":665,"./Script_Extensions/Cham.js":666,"./Script_Extensions/Cherokee.js":667,"./Script_Extensions/Common.js":668,"./Script_Extensions/Coptic.js":669,"./Script_Extensions/Cuneiform.js":670,"./Script_Extensions/Cypriot.js":671,"./Script_Extensions/Cyrillic.js":672,"./Script_Extensions/Deseret.js":673,"./Script_Extensions/Devanagari.js":674,"./Script_Extensions/Dogra.js":675,"./Script_Extensions/Duployan.js":676,"./Script_Extensions/Egyptian_Hieroglyphs.js":677,"./Script_Extensions/Elbasan.js":678,"./Script_Extensions/Ethiopic.js":679,"./Script_Extensions/Georgian.js":680,"./Script_Extensions/Glagolitic.js":681,"./Script_Extensions/Gothic.js":682,"./Script_Extensions/Grantha.js":683,"./Script_Extensions/Greek.js":684,"./Script_Extensions/Gujarati.js":685,"./Script_Extensions/Gunjala_Gondi.js":686,"./Script_Extensions/Gurmukhi.js":687,"./Script_Extensions/Han.js":688,"./Script_Extensions/Hangul.js":689,"./Script_Extensions/Hanifi_Rohingya.js":690,"./Script_Extensions/Hanunoo.js":691,"./Script_Extensions/Hatran.js":692,"./Script_Extensions/Hebrew.js":693,"./Script_Extensions/Hiragana.js":694,"./Script_Extensions/Imperial_Aramaic.js":695,"./Script_Extensions/Inherited.js":696,"./Script_Extensions/Inscriptional_Pahlavi.js":697,"./Script_Extensions/Inscriptional_Parthian.js":698,"./Script_Extensions/Javanese.js":699,"./Script_Extensions/Kaithi.js":700,"./Script_Extensions/Kannada.js":701,"./Script_Extensions/Katakana.js":702,"./Script_Extensions/Kayah_Li.js":703,"./Script_Extensions/Kharoshthi.js":704,"./Script_Extensions/Khmer.js":705,"./Script_Extensions/Khojki.js":706,"./Script_Extensions/Khudawadi.js":707,"./Script_Extensions/Lao.js":708,"./Script_Extensions/Latin.js":709,"./Script_Extensions/Lepcha.js":710,"./Script_Extensions/Limbu.js":711,"./Script_Extensions/Linear_A.js":712,"./Script_Extensions/Linear_B.js":713,"./Script_Extensions/Lisu.js":714,"./Script_Extensions/Lycian.js":715,"./Script_Extensions/Lydian.js":716,"./Script_Extensions/Mahajani.js":717,"./Script_Extensions/Makasar.js":718,"./Script_Extensions/Malayalam.js":719,"./Script_Extensions/Mandaic.js":720,"./Script_Extensions/Manichaean.js":721,"./Script_Extensions/Marchen.js":722,"./Script_Extensions/Masaram_Gondi.js":723,"./Script_Extensions/Medefaidrin.js":724,"./Script_Extensions/Meetei_Mayek.js":725,"./Script_Extensions/Mende_Kikakui.js":726,"./Script_Extensions/Meroitic_Cursive.js":727,"./Script_Extensions/Meroitic_Hieroglyphs.js":728,"./Script_Extensions/Miao.js":729,"./Script_Extensions/Modi.js":730,"./Script_Extensions/Mongolian.js":731,"./Script_Extensions/Mro.js":732,"./Script_Extensions/Multani.js":733,"./Script_Extensions/Myanmar.js":734,"./Script_Extensions/Nabataean.js":735,"./Script_Extensions/New_Tai_Lue.js":736,"./Script_Extensions/Newa.js":737,"./Script_Extensions/Nko.js":738,"./Script_Extensions/Nushu.js":739,"./Script_Extensions/Ogham.js":740,"./Script_Extensions/Ol_Chiki.js":741,"./Script_Extensions/Old_Hungarian.js":742,"./Script_Extensions/Old_Italic.js":743,"./Script_Extensions/Old_North_Arabian.js":744,"./Script_Extensions/Old_Permic.js":745,"./Script_Extensions/Old_Persian.js":746,"./Script_Extensions/Old_Sogdian.js":747,"./Script_Extensions/Old_South_Arabian.js":748,"./Script_Extensions/Old_Turkic.js":749,"./Script_Extensions/Oriya.js":750,"./Script_Extensions/Osage.js":751,"./Script_Extensions/Osmanya.js":752,"./Script_Extensions/Pahawh_Hmong.js":753,"./Script_Extensions/Palmyrene.js":754,"./Script_Extensions/Pau_Cin_Hau.js":755,"./Script_Extensions/Phags_Pa.js":756,"./Script_Extensions/Phoenician.js":757,"./Script_Extensions/Psalter_Pahlavi.js":758,"./Script_Extensions/Rejang.js":759,"./Script_Extensions/Runic.js":760,"./Script_Extensions/Samaritan.js":761,"./Script_Extensions/Saurashtra.js":762,"./Script_Extensions/Sharada.js":763,"./Script_Extensions/Shavian.js":764,"./Script_Extensions/Siddham.js":765,"./Script_Extensions/SignWriting.js":766,"./Script_Extensions/Sinhala.js":767,"./Script_Extensions/Sogdian.js":768,"./Script_Extensions/Sora_Sompeng.js":769,"./Script_Extensions/Soyombo.js":770,"./Script_Extensions/Sundanese.js":771,"./Script_Extensions/Syloti_Nagri.js":772,"./Script_Extensions/Syriac.js":773,"./Script_Extensions/Tagalog.js":774,"./Script_Extensions/Tagbanwa.js":775,"./Script_Extensions/Tai_Le.js":776,"./Script_Extensions/Tai_Tham.js":777,"./Script_Extensions/Tai_Viet.js":778,"./Script_Extensions/Takri.js":779,"./Script_Extensions/Tamil.js":780,"./Script_Extensions/Tangut.js":781,"./Script_Extensions/Telugu.js":782,"./Script_Extensions/Thaana.js":783,"./Script_Extensions/Thai.js":784,"./Script_Extensions/Tibetan.js":785,"./Script_Extensions/Tifinagh.js":786,"./Script_Extensions/Tirhuta.js":787,"./Script_Extensions/Ugaritic.js":788,"./Script_Extensions/Vai.js":789,"./Script_Extensions/Warang_Citi.js":790,"./Script_Extensions/Yi.js":791,"./Script_Extensions/Zanabazar_Square.js":792,"./index.js":793,"./unicode-version.js":794};function a(e){var t=i(e);return n(t)}function i(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id=405},801:function(e,t){},830:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(282),n(283),n(74),n(281);var r=u(n(0)),a=p(n(1)),i=p(n(318)),o=u(n(831)),s=p(n(832)),c=p(n(833)),l=p(n(834));function p(e){return e&&e.__esModule?e:{default:e}}function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,j(t).apply(this,arguments))}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,r.PureComponent),n=t,(a=[{key:"render",value:function(){return r.default.createElement(i.default,f({},t.defaultProps,this.props))}}])&&_(n.prototype,a),o&&_(n,o),t}();t.default=h,S(h,"propTypes",{title:a.default.string,id:a.default.string,Description:a.default.func,Details:a.default.func,DemoComponent:a.default.func,CodeComponent:a.default.func,hideTabs:a.default.bool}),S(h,"defaultProps",{title:"Typography",id:"typography",ExampleCode:l.default,Description:s.default,Details:c.default,DemoComponent:o.default,CodeComponent:o.Example,callback:o.Example.AdditionalCallback||null,hideTabs:!1})},831:function(e,t,n){"use strict";n.r(t),n.d(t,"Example",function(){return j});var r=n(6),a=n.n(r),i=n(0),o=n.n(i),s=n(1),c=n.n(s),l=n(284),p=n(280),u=n.n(p),d="\n/* Font Faces */\n.typo-book {\n  font-family: var(--font-family-book);\n  font-weight: normal;\n  font-style: normal;\n}\n.typo-book-italic {\n  font-family: var(--font-family-book);\n  font-weight: normal;\n  font-style: italic;\n}\n.typo-demi {\n  font-family: var(--font-family-demi);\n  font-weight: normal;\n  font-style: normal;\n}\n.typo-demi-italic {\n  font-family: var(--font-family-demi);\n  font-weight: normal;\n  font-style: italic;\n}\n\n/* Font weight */\n.typo-medium {\n  font-weight: 500;\n  font-style: normal;\n}\n.typo-medium-italic {\n  font-weight: 500;\n  font-style: italic;\n}\n.typo-light-italic {\n  font-weight: 300;\n  font-style: italic;\n}\n.typo-light {\n  font-weight: 300;\n  font-style: normal;\n}\n.typo-bold {\n  font-weight: bold;\n  font-style: normal;\n}\n.typo-bold-italic {\n  font-weight: bold;\n  font-style: italic;\n}\n",f=Object(l.css)(d),_=Object(l.default)("div",{target:"exysy0r0"})("padding:2rem 0;"),y=Object(l.default)("div",{target:"exysy0r1"})("padding:3rem 0 0;"),j=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return o.a.createElement(i.Fragment,null,o.a.createElement("div",{className:f},o.a.createElement(m,{font_family:"Fedra Sans Light",typo_class:"typo-light"}),o.a.createElement(m,{font_family:"Fedra Sans Light Italic",typo_class:"typo-light-italic"}),o.a.createElement(m,{font_family:"Fedra Sans Medium",typo_class:"typo-medium"}),o.a.createElement(m,{font_family:"Fedra Sans Medium Italic",typo_class:"typo-medium-italic"}),o.a.createElement(m,{font_family:"Fedra Sans Bold",typo_class:"typo-bold"}),o.a.createElement(m,{font_family:"Fedra Sans Bold Italic",typo_class:"typo-bold-italic"}),o.a.createElement(m,{font_family:"Fedra Sans Book",typo_class:"typo-book"}),o.a.createElement(m,{font_family:"Fedra Sans Book Italic",typo_class:"typo-book-italic"}),o.a.createElement(m,{font_family:"Fedra Sans Demi",typo_class:"typo-demi"}),o.a.createElement(m,{font_family:"Fedra Sans Demi Italic",typo_class:"typo-demi-italic"})))},t}(i.PureComponent);j.AdditionalCallback={info:function(e){var t=e.CodeRenderer;return o.a.createElement(i.Fragment,null,o.a.createElement("h3",null,"CSS Usage"),o.a.createElement(t,{language:"css"},d))}};var m=function(e){var t=e.typo_class,n=e.font_family;return o.a.createElement(_,null,o.a.createElement("h1",{className:t},n),o.a.createElement("p",{className:t},'Here is a paragraph with some nonsense lipsum text. Contrary to popular belief, Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.'),o.a.createElement("h4",{className:t},"Numbers:"),o.a.createElement("p",{className:u()("typo-number--lining",t)},o.a.createElement("strong",null,"Lining:")," 0123456789"),o.a.createElement("p",{className:u()("typo-number--old-style",t)},o.a.createElement("strong",null,"Old style:")," 0123456789"))};m.propTypes={typo_class:c.a.string,font_family:c.a.string.isRequired},m.defaultProps={typo_class:null},t.default=function(){return o.a.createElement(y,null,o.a.createElement(j,null))}},832:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return c});var r=n(75),a=n.n(r),i=n(0),o=n.n(i),s=n(286);t.default=function(e){var t=e.components;a()(e,["components"]);return o.a.createElement(s.MDXTag,{name:"wrapper",components:t},o.a.createElement(s.MDXTag,{name:"p",components:t},"Our default font is ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Fedra Sans Book"),". This font, together with its siblings is loaded and imported with ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"@font-face")," in ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"/css/core/typography.scss"),". The font is included in the library package.\nTo make sure we don't load all of the font faces at once, we apply the font weights and font styles by using its predefined font faces."),o.a.createElement(s.MDXTag,{name:"p",components:t},"Numbers come in two variants; ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Lining")," and ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Old Style"),". Use the ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"lining")," in tables and in other contexts where lots of numbers are side-by-side.\n",o.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Old Style")," is preferred where the numbers stand alone and need to stand out."),o.a.createElement(s.MDXTag,{name:"p",components:t},"For all font weights, styles and variants, check the source of the following examples."))};var c={}},833:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return c});var r=n(75),a=n.n(r),i=n(0),o=n.n(i),s=n(286);t.default=function(e){var t=e.components;a()(e,["components"]);return o.a.createElement(s.MDXTag,{name:"wrapper",components:t},o.a.createElement(s.MDXTag,{name:"p",components:t},"Have a look at the css examples on how to use and match the weights and styles to style Your app."))};var c={}},834:function(e,t){e.exports='<div className={typographyStyles}>\n  {/* Standard Light */}\n  <Demo font_family="Fedra Sans Light" typo_class="typo-light" />\n  <Demo\n    font_family="Fedra Sans Light Italic"\n    typo_class="typo-light-italic"\n  />\n   {/* Standard Medium */}\n  <Demo font_family="Fedra Sans Medium" typo_class="typo-medium" />\n  <Demo\n    font_family="Fedra Sans Medium Italic"\n    typo_class="typo-medium-italic"\n  />\n   {/* Standard Bold */}\n  <Demo font_family="Fedra Sans Bold" typo_class="typo-bold" />\n  <Demo\n    font_family="Fedra Sans Bold Italic"\n    typo_class="typo-bold-italic"\n  />\n   {/* Book */}\n  <Demo font_family="Fedra Sans Book" typo_class="typo-book" />\n  <Demo\n    font_family="Fedra Sans Book Italic"\n    typo_class="typo-book-italic"\n  />\n   {/* Demi */}\n  <Demo font_family="Fedra Sans Demi" typo_class="typo-demi" />\n  <Demo\n    font_family="Fedra Sans Demi Italic"\n    typo_class="typo-demi-italic"\n  />\n</div>\n'}}]);
//# sourceMappingURL=component---src-pages-uilib-typography-md-04006af5ffb887a99ccc.js.map