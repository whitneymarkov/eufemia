(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1006:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(34),n(77),n(282),n(283),n(281),n(76),n(51),n(352);var a=u(n(0)),r=i(n(1)),l=u(n(370)),c=u(n(360)),o=i(n(284));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,l=void 0;try{for(var c,o=e[Symbol.iterator]();!(a=(c=o.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==o.return||o.return()}finally{if(r)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,n=!(r=v(t).call(this,e))||"object"!==s(r)&&"function"!=typeof r?m(a):r,h(m(m(n)),"state",{iconsToRender:[]}),n.state.iconsToRender="secondary"===e.type?c:l,n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,a.PureComponent),n=t,(r=[{key:"render",value:function(){if(0===this.state.iconsToRender.length)return a.default.createElement(a.default.Fragment,null);var e=Object.entries(this.state.iconsToRender).map(function(e){var t=d(e,2),n=t[0],r=t[1];return a.default.createElement(y,{key:"icon".concat(n)},a.default.createElement("span",{"aria-labelledby":"id".concat(n)},a.default.createElement(r,{width:"48",height:"48"})),a.default.createElement("h4",{id:"id".concat(n)},E(n),a.default.createElement("small",null,"(",n,")")))});return a.default.createElement(g,null,e)}}])&&f(n.prototype,r),o&&f(n,o),t}();t.default=b,h(b,"propTypes",{type:r.default.string}),h(b,"defaultProps",{type:"primary"});var g=(0,o.default)("ul",{target:"e18sutrp0"})("list-style:none;"),y=(0,o.default)("li",{target:"e18sutrp1"})("h4{display:inline;padding-left:1.5rem;font-weight:400;small{padding-left:0.5rem;font-size:0.8rem;font-weight:100;}}"),E=function(e){return e.replace(/_/g," ").split(/\s/g).map(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}).join(" ")}},161:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t._frontmatter=t.default=void 0,n(76),n(51),n(299);var a=c(n(0)),r=n(286),l=c(n(1006));function c(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.default=function(e){var t=e.components;o(e,["components"]);return a.default.createElement(r.MDXTag,{name:"wrapper",components:t},a.default.createElement(r.MDXTag,{name:"h1",components:t},"Primary Icons"),a.default.createElement(r.MDXTag,{name:"p",components:t},"The Primary Icons are included in the ",a.default.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/eufemia/uilib"}},"UI Library")," and also shipped bundled as an ",a.default.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://unpkg.com/dnb-ui-lib@latest/umd/dnb-ui-lib-icons.min.js"}},"UMD Package"),"."),a.default.createElement(r.MDXTag,{name:"p",components:t},"Primary Icons an easily be included, for instance, in ",a.default.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/eufemia/uilib/components/button"}},"Buttons"),". They are integrated by using the ",a.default.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<IconPrimary />")," Component."),a.default.createElement(r.MDXTag,{name:"h4",components:t},"A list of all Primary Icons"),a.default.createElement(r.MDXTag,{name:"hr",components:t}),a.default.createElement(l.default,{type:"primary"}))};t._frontmatter={header:"Icons",title:"Primary",draft:!1,order:1}},313:function(e,t,n){"use strict";n(74);var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("svg",Object.assign({viewBox:"0 0 16 16"},e),r.a.createElement("g",{clipPath:"url(#clip0)",fillRule:"evenodd",clipRule:"evenodd"},r.a.createElement("path",{d:"M6.614 10.447a.75.75 0 0 0-1.061-1.06L1.5 13.438v-1.522a.75.75 0 0 0-1.5 0v3.333a.747.747 0 0 0 .218.529l.002.001.001.002A.75.75 0 0 0 .75 16h3.333a.75.75 0 0 0 0-1.5H2.561l4.053-4.053zM15.943.463a.75.75 0 0 0-.161-.242L15.78.22 15.78.218A.748.748 0 0 0 15.25 0h-3.333a.75.75 0 0 0 0 1.5h1.522L9.386 5.553a.75.75 0 1 0 1.061 1.06L14.5 2.562v1.522a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-.057-.287zM.057.463A.748.748 0 0 0 0 .75v3.333a.75.75 0 1 0 1.5 0V2.561l4.053 4.053a.75.75 0 1 0 1.06-1.061L2.562 1.5h1.522a.75.75 0 1 0 0-1.5H.75a.748.748 0 0 0-.693.463zM10.447 9.386a.75.75 0 1 0-1.06 1.061l4.052 4.053h-1.522a.75.75 0 1 0 0 1.5h3.333a.75.75 0 0 0 .525-.215l.01-.01A.748.748 0 0 0 16 15.25v-3.333a.75.75 0 0 0-1.5 0v1.522l-4.053-4.053z"})),r.a.createElement("defs",null,r.a.createElement("clipPath",{id:"clip0"},r.a.createElement("path",{d:"M0 0h16v16H0z"}))))}},314:function(e,t,n){"use strict";n(74);var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("svg",Object.assign({viewBox:"0 0 16 16"},e),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 1.875a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75zM0 8a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 8zm.75 5.375a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H.75z"}))}},322:function(e,t,n){"use strict";n(74);var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("svg",Object.assign({viewBox:"0 0 16 16"},e),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.75 2.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5z"}))}},323:function(e,t,n){"use strict";n(74);var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("svg",Object.assign({viewBox:"0 0 17 17"},e),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.5 0C7.244 0 6.239.814 5.837 1.88A6.499 6.499 0 0 0 2.01 7.83v3.684c0 .699-.514 1.213-1.213 1.213a.797.797 0 1 0 0 1.593h5.006c.334 1.176 1.396 2.01 2.697 2.01 1.3 0 2.363-.833 2.697-2.01h5.006a.797.797 0 1 0 0-1.593c-.699 0-1.213-.514-1.213-1.213V7.83a6.499 6.499 0 0 0-3.804-5.94C10.81.779 9.712 0 8.5 0zm.934 14.32H7.566c.217.26.547.416.934.416s.717-.157.934-.416zm3.963-2.806c0 .438.094.848.264 1.213H3.34c.17-.365.264-.776.264-1.213V7.83A4.903 4.903 0 0 1 6.77 3.217a.797.797 0 0 0 .5-.579c.13-.61.64-1.045 1.23-1.045.633 0 1.146.47 1.22.99a.797.797 0 0 0 .51.634 4.903 4.903 0 0 1 3.167 4.613v3.684z"}))}},324:function(e,t,n){"use strict";n(74);var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("svg",Object.assign({viewBox:"0 0 16 16"},e),r.a.createElement("g",{clipPath:"url(#clip0)"},r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.75 0a.75.75 0 0 1 .75.75v2.125a.75.75 0 1 1-1.5 0V.75A.75.75 0 0 1 4.75 0zM1.656 2.563a.156.156 0 0 0-.156.156v10.876c0 .086.07.156.156.156h12.689c.086 0 .156-.07.156-.156V2.719a.156.156 0 0 0-.156-.156h-.907a.75.75 0 0 1 0-1.5h.907c.914 0 1.656.741 1.656 1.656v10.876c0 .914-.742 1.656-1.656 1.656H1.656A1.656 1.656 0 0 1 0 13.595V2.719c0-.915.742-1.656 1.656-1.656h.907a.75.75 0 0 1 0 1.5h-.907zM3.47 6.5a.75.75 0 0 1 .75-.75h7.563a.75.75 0 0 1 0 1.5H4.22a.75.75 0 0 1-.75-.75zm3.469-5.282a.75.75 0 1 0 0 1.5h2.125a.75.75 0 1 0 0-1.5H6.938zM10.5 2.875a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-1.5 0v2.125z"})),r.a.createElement("defs",null,r.a.createElement("clipPath",{id:"clip0"},r.a.createElement("path",{d:"M0 0h16v16H0z"}))))}},325:function(e,t,n){"use strict";n(74);var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("svg",Object.assign({viewBox:"0 0 16 16"},e),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.012 5.298a.75.75 0 1 0-1.024-1.096l-6.97 6.505L3.03 7.72a.75.75 0 0 0-1.06 1.06l3.498 3.498a.748.748 0 0 0 1.046.018l7.498-6.998z"}))}},326:function(e,t,n){"use strict";n(74);var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("svg",Object.assign({viewBox:"0 0 16 16"},e),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.03 5.22a.75.75 0 0 0-1.06 1.06l4.5 4.5a.75.75 0 0 0 1.06 0l4.5-4.5a.75.75 0 0 0-1.06-1.06L8 9.19 4.03 5.22z"}))}},327:function(e,t,n){"use strict";n(74);var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("svg",Object.assign({viewBox:"0 0 16 16"},e),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.78 4.03a.75.75 0 1 0-1.06-1.06l-4.5 4.5a.75.75 0 0 0 0 1.06l4.5 4.5a.75.75 0 1 0 1.06-1.06L6.81 8l3.97-3.97z"}))}},328:function(e,t,n){"use strict";n(74);var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("svg",Object.assign({viewBox:"0 0 16 16"},e),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.28 2.97a.75.75 0 0 0-1.06 1.06L9.19 8l-3.97 3.97a.75.75 0 1 0 1.06 1.06l4.5-4.5a.75.75 0 0 0 0-1.06l-4.5-4.5z"}))}},329:function(e,t,n){"use strict";n(74);var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("svg",Object.assign({viewBox:"0 0 16 16"},e),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.53 5.22l4.5 4.5a.75.75 0 1 1-1.06 1.06L8 6.81l-3.97 3.97a.75.75 0 1 1-1.06-1.06l4.5-4.5a.748.748 0 0 1 1.06 0z"}))}},330:function(e,t,n){"use strict";n(74);var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("svg",Object.assign({viewBox:"0 0 16 16"},e),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.03 3.1a.75.75 0 0 0-1.06 1.06l3.97 3.97-3.97 3.97a.75.75 0 1 0 1.06 1.06L8 9.19l3.97 3.97a.75.75 0 1 0 1.06-1.06L9.06 8.13l3.97-3.97a.75.75 0 0 0-1.06-1.06L8 7.07 4.03 3.1z"}))}},331:function(e,t,n){"use strict";n(74);var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("svg",Object.assign({viewBox:"0 0 16 16"},e),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 1.75a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-1.5 0v-7A.75.75 0 0 1 8 1.75zm-.893 10.357c.247-.247.573-.357.893-.357.32 0 .646.11.893.357s.357.573.357.893c0 .32-.11.646-.357.893A1.249 1.249 0 0 1 8 14.25c-.32 0-.646-.11-.893-.357A1.249 1.249 0 0 1 6.75 13c0-.32.11-.646.357-.893z"}))}},332:function(e,t,n){"use strict";n(74);var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("svg",Object.assign({viewBox:"0 0 17 17"},e),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.782 8.498a1.593 1.593 0 1 1-3.186 0 1.593 1.593 0 0 1 3.186 0zm5.311 0a1.593 1.593 0 1 1-3.186 0 1.593 1.593 0 0 1 3.186 0zm3.718 1.593a1.593 1.593 0 1 0 0-3.187 1.593 1.593 0 0 0 0 3.187z"}))}},333:function(e,t,n){"use strict";n(74);var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("svg",Object.assign({viewBox:"0 0 16 16"},e),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.352 5.1c0-2.05 1.55-3.6 3.6-3.6 2.052 0 3.601 1.55 3.601 3.6 0 2.051-1.55 3.6-3.6 3.6a.75.75 0 0 0-.75.75v2.666a.75.75 0 0 0 1.5 0V10.15c2.506-.348 4.35-2.425 4.35-5.049 0-2.879-2.22-5.1-5.1-5.1-2.88 0-5.1 2.221-5.1 5.1a.75.75 0 0 0 1.5 0zm3.6 10.898c.659 0 1.097-.439 1.097-1.097 0-.658-.438-1.096-1.096-1.096-.658 0-1.097.438-1.097 1.096 0 .658.439 1.097 1.097 1.097z"}))}},334:function(e,t,n){"use strict";n(74);var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("svg",Object.assign({viewBox:"0 0 16 16"},e),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.75 1.002a.75.75 0 0 0-1.5-.004l-.023 9.168L3.53 6.47a.75.75 0 0 0-1.06 1.06l5 5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 0 0-1.06-1.06l-3.743 3.743.023-9.211zM14 14.75a.75.75 0 0 1-.75.75H2.75a.75.75 0 0 1 0-1.5h10.5a.75.75 0 0 1 .75.75z"}))}},335:function(e,t,n){"use strict";n(74);var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("svg",Object.assign({viewBox:"0 0 17 17"},e),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.593 6.574a4.98 4.98 0 1 1 9.962 0 4.98 4.98 0 0 1-9.962 0zM6.574 0a6.574 6.574 0 1 0 0 13.148A6.574 6.574 0 0 0 6.574 0zm6.34 11.788a.797.797 0 0 0-1.126 1.127l3.852 3.852a.797.797 0 0 0 1.126-1.127l-3.851-3.852z"}))}},336:function(e,t,n){"use strict";n(74);var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("svg",Object.assign({viewBox:"0 0 16 16"},e),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8z"}))}},360:function(e,t,n){"use strict";n.r(t);var a=n(313);n.d(t,"fullscreen",function(){return a.a});var r=n(314);n.d(t,"hamburger",function(){return r.a})},370:function(e,t,n){"use strict";n.r(t);var a=n(322);n.d(t,"add",function(){return a.a});var r=n(323);n.d(t,"bell",function(){return r.a});var l=n(324);n.d(t,"calendar",function(){return l.a});var c=n(325);n.d(t,"check",function(){return c.a});var o=n(326);n.d(t,"chevron_down",function(){return o.a});var i=n(327);n.d(t,"chevron_left",function(){return i.a});var u=n(328);n.d(t,"chevron_right",function(){return u.a});var s=n(329);n.d(t,"chevron_up",function(){return s.a});var d=n(330);n.d(t,"close",function(){return d.a});var f=n(331);n.d(t,"exclamation",function(){return f.a});var v=n(332);n.d(t,"more",function(){return v.a});var p=n(333);n.d(t,"question",function(){return p.a});var m=n(334);n.d(t,"save",function(){return m.a});var h=n(335);n.d(t,"search",function(){return h.a});var b=n(336);n.d(t,"subtract",function(){return b.a})}}]);
//# sourceMappingURL=component---src-pages-icons-primary-md-75dc781df95ba3ad8d9b.js.map