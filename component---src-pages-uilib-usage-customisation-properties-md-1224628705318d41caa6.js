(window.webpackJsonp=window.webpackJsonp||[]).push([[129,127],{149:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(282),n(283),n(281);var r,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),i=(r=n(1))&&r.__esModule?r:{default:r};function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=c(this,f(t).call(this,e))).state={time:n.getTime()},n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,o.PureComponent),n=t,(r=[{key:"getTime",value:function(){return(new Date).toLocaleTimeString()}},{key:"setTime",value:function(){this.setState({time:this.getTime()})}},{key:"componentDidMount",value:function(){var e=this;this.myInterval=setInterval(function(){return e.setTime()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.myInterval)}},{key:"render",value:function(){var e=this.props.children;return o.default.createElement(o.Fragment,null,e,o.default.createElement("dnb-form-label",{for_id:"form-input"},"My running seconds"),o.default.createElement("dnb-input",{id:"form-input",value:this.state.time,disabled:!0}))}}])&&a(n.prototype,r),i&&a(n,i),t}();t.default=s,p(s,"propTypes",{children:i.default.node}),p(s,"defaultProps",{children:null})},221:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t._frontmatter=t.default=void 0,n(76),n(51),n(299);var r=u(n(0)),o=n(286),i=u(n(149));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}t.default=function(e){var t=e.components;a(e,["components"]);return r.default.createElement(o.MDXTag,{name:"wrapper",components:t},r.default.createElement(o.MDXTag,{name:"h1",components:t},"Properties"),r.default.createElement(o.MDXTag,{name:"h2",components:t},"What if a property has to change at runtime?"),r.default.createElement(o.MDXTag,{name:"p",components:t},"Changing a property (",r.default.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"props"),") at runtime is a common thing in React. But also ",r.default.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"dnb-ui-lib")," Web Components are supporting ",r.default.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"prop")," changes.\nKeep in mind that not all components are barely tested to their last detail.\nSo if You come over some special use cases, please contribute back and make a pull request."),r.default.createElement(i.default,null))};t._frontmatter={header:"UI Library",title:"Properties",draft:!1}},281:function(e,t,n){var r=n(25);r(r.S,"Object",{setPrototypeOf:n(824).set})},282:function(e,t,n){n(817)("asyncIterator")},283:function(e,t,n){"use strict";var r=n(5),o=n(28),i=n(17),u=n(25),a=n(19),c=n(821).KEY,f=n(24),l=n(55),p=n(43),s=n(41),y=n(4),m=n(818),b=n(817),d=n(822),v=n(87),h=n(11),O=n(13),g=n(40),_=n(85),w=n(54),j=n(86),P=n(823),E=n(820),S=n(26),M=n(39),T=E.f,D=S.f,k=P.f,C=r.Symbol,x=r.JSON,N=x&&x.stringify,X=y("_hidden"),F=y("toPrimitive"),I={}.propertyIsEnumerable,J=l("symbol-registry"),W=l("symbols"),K=l("op-symbols"),L=Object.prototype,R="function"==typeof C,Y=r.QObject,A=!Y||!Y.prototype||!Y.prototype.findChild,U=i&&f(function(){return 7!=j(D({},"a",{get:function(){return D(this,"a",{value:7}).a}})).a})?function(e,t,n){var r=T(L,t);r&&delete L[t],D(e,t,n),r&&e!==L&&D(L,t,r)}:D,q=function(e){var t=W[e]=j(C.prototype);return t._k=e,t},z=R&&"symbol"==typeof C.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof C},B=function(e,t,n){return e===L&&B(K,t,n),h(e),t=_(t,!0),h(n),o(W,t)?(n.enumerable?(o(e,X)&&e[X][t]&&(e[X][t]=!1),n=j(n,{enumerable:w(0,!1)})):(o(e,X)||D(e,X,w(1,{})),e[X][t]=!0),U(e,t,n)):D(e,t,n)},G=function(e,t){h(e);for(var n,r=d(t=g(t)),o=0,i=r.length;i>o;)B(e,n=r[o++],t[n]);return e},Q=function(e){var t=I.call(this,e=_(e,!0));return!(this===L&&o(W,e)&&!o(K,e))&&(!(t||!o(this,e)||!o(W,e)||o(this,X)&&this[X][e])||t)},H=function(e,t){if(e=g(e),t=_(t,!0),e!==L||!o(W,t)||o(K,t)){var n=T(e,t);return!n||!o(W,t)||o(e,X)&&e[X][t]||(n.enumerable=!0),n}},V=function(e){for(var t,n=k(g(e)),r=[],i=0;n.length>i;)o(W,t=n[i++])||t==X||t==c||r.push(t);return r},Z=function(e){for(var t,n=e===L,r=k(n?K:g(e)),i=[],u=0;r.length>u;)!o(W,t=r[u++])||n&&!o(L,t)||i.push(W[t]);return i};R||(a((C=function(){if(this instanceof C)throw TypeError("Symbol is not a constructor!");var e=s(arguments.length>0?arguments[0]:void 0),t=function(n){this===L&&t.call(K,n),o(this,X)&&o(this[X],e)&&(this[X][e]=!1),U(this,e,w(1,n))};return i&&A&&U(L,e,{configurable:!0,set:t}),q(e)}).prototype,"toString",function(){return this._k}),E.f=H,S.f=B,n(819).f=P.f=V,n(83).f=Q,n(84).f=Z,i&&!n(42)&&a(L,"propertyIsEnumerable",Q,!0),m.f=function(e){return q(y(e))}),u(u.G+u.W+u.F*!R,{Symbol:C});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ee=0;$.length>ee;)y($[ee++]);for(var te=M(y.store),ne=0;te.length>ne;)b(te[ne++]);u(u.S+u.F*!R,"Symbol",{for:function(e){return o(J,e+="")?J[e]:J[e]=C(e)},keyFor:function(e){if(!z(e))throw TypeError(e+" is not a symbol!");for(var t in J)if(J[t]===e)return t},useSetter:function(){A=!0},useSimple:function(){A=!1}}),u(u.S+u.F*!R,"Object",{create:function(e,t){return void 0===t?j(e):G(j(e),t)},defineProperty:B,defineProperties:G,getOwnPropertyDescriptor:H,getOwnPropertyNames:V,getOwnPropertySymbols:Z}),x&&u(u.S+u.F*(!R||f(function(){var e=C();return"[null]"!=N([e])||"{}"!=N({a:e})||"{}"!=N(Object(e))})),"JSON",{stringify:function(e){for(var t,n,r=[e],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=t=r[1],(O(t)||void 0!==e)&&!z(e))return v(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!z(t))return t}),r[1]=t,N.apply(x,r)}}),C.prototype[F]||n(14)(C.prototype,F,C.prototype.valueOf),p(C,"Symbol"),p(Math,"Math",!0),p(r.JSON,"JSON",!0)},286:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(366);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return i(r).default}});var o=n(315);function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return i(o).default}})},299:function(e,t,n){var r=n(37),o=n(39);n(367)("keys",function(){return function(e){return o(r(e))}})},315:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(0),u=(r=i)&&r.__esModule?r:{default:r};var a=u.default.createContext({}),c=a.Provider,f=a.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["components"]);return u.default.createElement(f,null,function(t){return u.default.createElement(e,o({components:n||t},r))})}};t.default=function(e){var t=e.components,n=e.children;return u.default.createElement(c,{value:t},n)}},366:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),a=(r=u)&&r.__esModule?r:{default:r},c=n(315);var f={inlineCode:"code",wrapper:"div"},l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),i(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,r=e.props,i=void 0===r?{}:r,u=e.children,c=e.components,l=void 0===c?{}:c,p=e.Layout,s=e.layoutProps,y=l[n+"."+t]||l[t]||f[t]||t;return p?a.default.createElement(p,o({components:l},s),a.default.createElement(y,i,u)):a.default.createElement(y,i,u)}}]),t}();t.default=(0,c.withMDXComponents)(l)},367:function(e,t,n){var r=n(25),o=n(18),i=n(24);e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],u={};u[e]=t(n),r(r.S+r.F*i(function(){n(1)}),"Object",u)}},817:function(e,t,n){var r=n(5),o=n(18),i=n(42),u=n(818),a=n(26).f;e.exports=function(e){var t=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==e.charAt(0)||e in t||a(t,e,{value:u.f(e)})}},818:function(e,t,n){t.f=n(4)},819:function(e,t,n){var r=n(89),o=n(56).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},820:function(e,t,n){var r=n(83),o=n(54),i=n(40),u=n(85),a=n(28),c=n(88),f=Object.getOwnPropertyDescriptor;t.f=n(17)?f:function(e,t){if(e=i(e),t=u(t,!0),c)try{return f(e,t)}catch(e){}if(a(e,t))return o(!r.f.call(e,t),e[t])}},821:function(e,t,n){var r=n(41)("meta"),o=n(13),i=n(28),u=n(26).f,a=0,c=Object.isExtensible||function(){return!0},f=!n(24)(function(){return c(Object.preventExtensions({}))}),l=function(e){u(e,r,{value:{i:"O"+ ++a,w:{}}})},p=e.exports={KEY:r,NEED:!1,fastKey:function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,r)){if(!c(e))return"F";if(!t)return"E";l(e)}return e[r].i},getWeak:function(e,t){if(!i(e,r)){if(!c(e))return!0;if(!t)return!1;l(e)}return e[r].w},onFreeze:function(e){return f&&p.NEED&&c(e)&&!i(e,r)&&l(e),e}}},822:function(e,t,n){var r=n(39),o=n(84),i=n(83);e.exports=function(e){var t=r(e),n=o.f;if(n)for(var u,a=n(e),c=i.f,f=0;a.length>f;)c.call(e,u=a[f++])&&t.push(u);return t}},823:function(e,t,n){var r=n(40),o=n(819).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return u&&"[object Window]"==i.call(e)?function(e){try{return o(e)}catch(e){return u.slice()}}(e):o(r(e))}},824:function(e,t,n){var r=n(13),o=n(11),i=function(e,t){if(o(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,r){try{(r=n(20)(Function.call,n(820).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,n){return i(e,n),t?e.__proto__=n:r(e,n),e}}({},!1):void 0),check:i}}}]);
//# sourceMappingURL=component---src-pages-uilib-usage-customisation-properties-md-1224628705318d41caa6.js.map