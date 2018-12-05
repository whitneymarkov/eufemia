(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{225:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t._frontmatter=t.default=void 0,n(76),n(51),n(299);var r,o=(r=n(0))&&r.__esModule?r:{default:r},a=n(286);function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}t.default=function(e){var t=e.components;u(e,["components"]);return o.default.createElement(a.MDXTag,{name:"wrapper",components:t},o.default.createElement(a.MDXTag,{name:"h1",components:t},"First Steps"),o.default.createElement(a.MDXTag,{name:"h2",components:t},"Installation"),o.default.createElement(a.MDXTag,{name:"p",components:t},"Go an check out the ",o.default.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"dnb-ui-lib")," ",o.default.createElement(a.MDXTag,{name:"strong",components:t,parentName:"p"},o.default.createElement(a.MDXTag,{name:"a",components:t,parentName:"strong",props:{href:"/eufemia/uilib/usage/#Installation"}},"Installation documentation")),"."),o.default.createElement(a.MDXTag,{name:"h2",components:t},"Working Examples"),o.default.createElement(a.MDXTag,{name:"p",components:t},"You can find some more detailed and running examples under ",o.default.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"REPOSITORY/packages/examples/..."),"."),o.default.createElement(a.MDXTag,{name:"h2",components:t},"Be continued"),o.default.createElement(a.MDXTag,{name:"p",components:t},"Go ahead with ",o.default.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/eufemia/uilib/usage/first-steps/the-basics"}},"the basics")))};t._frontmatter={header:"UI Library",title:"First Steps",draft:!1,order:2}},286:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(366);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return a(r).default}});var o=n(315);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return a(o).default}})},299:function(e,t,n){var r=n(37),o=n(39);n(367)("keys",function(){return function(e){return o(r(e))}})},315:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(0),u=(r=a)&&r.__esModule?r:{default:r};var c=u.default.createContext({}),l=c.Provider,i=c.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["components"]);return u.default.createElement(i,null,function(t){return u.default.createElement(e,o({components:n||t},r))})}};t.default=function(e){var t=e.components,n=e.children;return u.default.createElement(l,{value:t},n)}},366:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=(r=u)&&r.__esModule?r:{default:r},l=n(315);var i={inlineCode:"code",wrapper:"div"},f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),a(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,r=e.props,a=void 0===r?{}:r,u=e.children,l=e.components,f=void 0===l?{}:l,p=e.Layout,s=e.layoutProps,m=f[n+"."+t]||f[t]||i[t]||t;return p?c.default.createElement(p,o({components:f},s),c.default.createElement(m,a,u)):c.default.createElement(m,a,u)}}]),t}();t.default=(0,l.withMDXComponents)(f)},367:function(e,t,n){var r=n(25),o=n(18),a=n(24);e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],u={};u[e]=t(n),r(r.S+r.F*a(function(){n(1)}),"Object",u)}}}]);
//# sourceMappingURL=component---src-pages-uilib-usage-first-steps-md-a998bd8255929dc51dcc.js.map