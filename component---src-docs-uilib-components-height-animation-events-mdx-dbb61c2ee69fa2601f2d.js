"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[97937],{97383:function(e,t,n){n.r(t);var o=n(52322),s=n(45392),r=n(85179),a=n(95987);function i(e){const t=Object.assign({h2:"h2"},(0,s.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{children:"Events"}),"\n","\n",(0,o.jsx)(t.h2,{children:"Properties"}),"\n",(0,o.jsx)(r.ZP,{props:a.G})]})}t.default=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(i,e)})):i(e)}},85179:function(e,t,n){n.d(t,{Kw:function(){return m},ZP:function(){return j}});var o=n(70894),s=n(61185),r=n(55560),a=n(41676),i=n(6210),l=n(64223),c=n(37339),u=n(595),d=n(52322);const p={...u.L,p:e=>(0,d.jsx)("span",{...e})},h=(0,o.Z)(r.ZP,{target:"e13h2c840"})({name:"1qdk5x4",styles:"td{white-space:nowrap;}"}),f="var(--color-fire-red)",m=e=>{let{variant:t,strikethrough:n,children:o,style:s={},...r}=e;if(n&&(s.textDecoration="line-through"),"string"==typeof o)switch(t){case"prop":break;case"type":s.color=o.startsWith("'")?f:"var(--color-violet)";case"value":s.color=o.startsWith("'")?f:"undefined"===o||"null"===o?"var(--color-black-55)":"var(--color-success-green)";default:s.background="none",s.boxShadow="none"}return p.code({children:o,style:s,...r})};function j(e){let{props:t,valueType:n="string",camelCase:o,omit:u,showDefaultValue:f=!1}=e;const j=Object.keys(t),g=Object.entries(t).map((e=>{let[t,r]=e;if(!r)return null;const{type:l,defaultValue:h,doc:g,status:b}=r;return u&&u.includes(t)?null:(0,d.jsxs)(a.Z,{children:[(0,d.jsx)(i.Z,{children:(0,d.jsx)(m,{variant:"prop",strikethrough:"deprecated"===b,children:x(o?(0,c.zW)(t):t)})}),(0,d.jsx)(i.Z,{children:(Array.isArray(l)?l:[l]).map((e=>{if("string"==typeof e){if(String(e).includes("{valueType}")){if(Array.isArray(n))return n.map(((e,t)=>(0,d.jsx)(m,{variant:"type",children:e},e+t))).reduce(((e,t)=>(0,d.jsxs)(d.Fragment,{children:[e," ",(0,d.jsx)("br",{})," ",t]})));e=n}return(0,d.jsx)(m,{variant:"type",children:e},e)}})).reduce(((e,t)=>(0,d.jsxs)(d.Fragment,{children:[e," ",(0,d.jsx)("br",{})," ",t]})))}),f&&(0,d.jsx)(i.Z,{children:h?(0,d.jsx)(m,{variant:"value",children:h}):"required"===b&&"REQUIRED"}),(0,d.jsxs)(i.Z,{children:[(!f||"deprecated"===b)&&(0,d.jsxs)("em",{children:["(",b,") "]}),(0,d.jsx)(s.D,{components:p,children:o?y(g,j):g})]})]},t)}));return(0,d.jsx)(r.ZP.ScrollView,{children:(0,d.jsxs)(h,{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)(a.Z,{children:[(0,d.jsx)(l.Z,{children:"Property"}),(0,d.jsx)(l.Z,{children:"Type"}),f&&(0,d.jsx)(l.Z,{children:"Default value"}),(0,d.jsx)(l.Z,{children:"Description"})]})}),(0,d.jsx)("tbody",{children:g})]})})}function y(e,t){return t.forEach((t=>{e=e.replace(new RegExp(t,"g"),(0,c.zW)(t))})),e}function x(e){return e.includes("/")?(0,d.jsx)(s.D,{components:p,children:e}):e}},95987:function(e,t,n){n.d(t,{G:function(){return s},j:function(){return o}});const o={open:{doc:"Set to `true` on second re-render when the view should animate from 0px to auto. Defaults to `true`.",type:"boolean",status:"optional"},animate:{doc:"Set to `false` to omit the animation. Defaults to `true`.",type:"boolean",status:"optional"},keepInDOM:{doc:"Set to `true` ensure the nested children content will be kept in the DOM. Defaults to `false`.",type:"boolean",status:"optional"},compensateForGap:{doc:"To compensate for CSS gap between the rows, so animation does not jump during the animation. Provide a CSS unit or `auto`. Defaults to `null`.",type:"string",status:"optional"},showOverflow:{doc:'Set to `true` to omit the usage of "overflow: hidden;". Defaults to `false`.',type:"boolean",status:"optional"},duration:{doc:"Custom duration of the animation in milliseconds. Defaults to `400ms`.",type:"number",status:"optional"},delay:{doc:"Custom delay of the animation in milliseconds. Defaults to `0ms`.",type:"number",status:"optional"},element:{doc:"Custom HTML element for the component. Defaults to `div` HTML Element.",type:"string",status:"optional"},innerRef:{doc:"Send along a custom React Ref.",type:"React.RefObject",status:"optional"},"[Space](/uilib/layout/space/properties)":{doc:"spacing properties like `top` or `bottom` are supported.",type:["string","object"],status:"optional"}},s={onOpen:{doc:"Is called when fully opened or closed. Returns `true` or `false` depending on the state.",type:"function",status:"optional"},onAnimationStart:{doc:"Is called when animation has started.",type:"function",status:"optional"},onAnimationEnd:{doc:"Is called when animation is done and the full height is reached.",type:"function",status:"optional"},onInit:{doc:"Is called once before mounting the component (useLayoutEffect). Returns the instance of the internal animation class.",type:"function",status:"optional"}}},6210:function(e,t,n){var o=n(30600);t.Z=o.Z},64223:function(e,t,n){var o=n(91859);t.Z=o.Z},41676:function(e,t,n){var o=n(37381);t.Z=o.Z}}]);
//# sourceMappingURL=component---src-docs-uilib-components-height-animation-events-mdx-dbb61c2ee69fa2601f2d.js.map