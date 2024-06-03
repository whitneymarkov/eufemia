"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[89698],{10663:function(e,n,r){r.r(n),r.d(n,{default:function(){return i}});var s=r(52322),t=r(45392),a=r(85179);const l={columns:{doc:"Define how many columns your layout should be divided in. Can be just a number `columns={12}` or an object with media query sizes like `columns={{ small: 4, medium: 6, large: 12 }}` (default values). You can also disabled CSS Grid by providing `false` for one size, like so `columns={{ small: 4, medium: false, large: 12 }}`.",type:["number","object"],status:"optional"},rowGap:{doc:"Defines how much the gap between rows should be. Can be `large`, `medium`, `small`, `x-small` or `false` for no gap. Defaults to `false`.",type:["string","false"],status:"optional"},columnGap:{doc:"Defines how much the gap between columns should be. Can be `large`, `medium`, `small`, `x-small` or `false` for no gap. Defaults to `false`.",type:["string","false"],status:"optional"},element:{doc:"Define the type of element. Defaults to `div`.",type:["string","React.Element"],status:"optional"}};function o(e){const n=Object.assign({h2:"h2"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{children:"Properties"}),"\n",(0,s.jsx)(a.Z,{props:l})]})}var i=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},85179:function(e,n,r){r.d(n,{Z:function(){return j}});var s=r(70894),t=r(61185),a=r(55560),l=r(41676),o=r(6210),i=r(64223),c=r(37339),u=r(595),d=r(52322);const h={...u.L,p:e=>(0,d.jsx)("span",{...e})},p=(0,s.Z)(a.ZP,{target:"e13h2c840"})({name:"1qdk5x4",styles:"td{white-space:nowrap;}"}),f="var(--color-fire-red)",m=e=>{let{variant:n,strikethrough:r,children:s,style:t={},...a}=e;if(r&&(t.textDecoration="line-through"),"string"==typeof s)switch(n){case"prop":break;case"type":t.color=s.startsWith("'")?f:"var(--color-violet)";case"value":t.color=s.startsWith("'")?f:"undefined"===s?"var(--color-black-55)":"var(--color-success-green)";default:t.background="none",t.boxShadow="none"}return h.code({children:s,style:t,...a})};function j(e){let{props:n,valueType:r="string",camelCase:s,omit:u,showDefaultValue:f=!1}=e;const j=Object.keys(n),y=Object.entries(n).map((e=>{let[n,a]=e;if(!a)return null;const{type:i,defaultValue:p,doc:y,status:b}=a;return u&&u.includes(n)?null:(0,d.jsxs)(l.Z,{children:[(0,d.jsx)(o.Z,{children:(0,d.jsx)(m,{variant:"prop",strikethrough:"deprecated"===b,children:g(s?(0,c.zW)(n):n)})}),(0,d.jsx)(o.Z,{children:(Array.isArray(i)?i:[i]).map((e=>{if("string"==typeof e){if(String(e).includes("{valueType}")){if(Array.isArray(r))return r.map(((e,n)=>(0,d.jsx)(m,{variant:"type",children:e},e+n))).reduce(((e,n)=>(0,d.jsxs)(d.Fragment,{children:[e," ",(0,d.jsx)("br",{})," ",n]})));e=r}return(0,d.jsx)(m,{variant:"type",children:e},e)}})).reduce(((e,n)=>(0,d.jsxs)(d.Fragment,{children:[e," ",(0,d.jsx)("br",{})," ",n]})))}),f&&(0,d.jsx)(o.Z,{children:p?(0,d.jsx)(m,{variant:"value",children:p}):"required"===b&&"REQUIRED"}),(0,d.jsxs)(o.Z,{children:[(!f||"deprecated"===b)&&(0,d.jsxs)("em",{children:["(",b,") "]}),(0,d.jsx)(t.D,{components:h,children:s?x(y,j):y})]})]},n)}));return(0,d.jsx)(a.ZP.ScrollView,{children:(0,d.jsxs)(p,{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)(l.Z,{children:[(0,d.jsx)(i.Z,{children:"Property"}),(0,d.jsx)(i.Z,{children:"Type"}),f&&(0,d.jsx)(i.Z,{children:"Default value"}),(0,d.jsx)(i.Z,{children:"Description"})]})}),(0,d.jsx)("tbody",{children:y})]})})}function x(e,n){return n.forEach((n=>{e=e.replace(new RegExp(n,"g"),(0,c.zW)(n))})),e}function g(e){return e.includes("/")?(0,d.jsx)(t.D,{components:h,children:e}):e}},6210:function(e,n,r){var s=r(30600);n.Z=s.Z},64223:function(e,n,r){var s=r(91859);n.Z=s.Z},41676:function(e,n,r){var s=r(47048);n.Z=s.Z}}]);
//# sourceMappingURL=component---src-docs-uilib-layout-grid-container-properties-mdx-f30f9041f6505d7b477f.js.map