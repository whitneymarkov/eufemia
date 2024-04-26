"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[3225],{76531:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var s=n(52322),a=n(45392),o=n(85179);const r={pathDefined:{doc:"Given data context path must be defined to show children.",type:"string",status:"optional"},pathUndefined:{doc:"Given data context path must be undefined to show children.",type:"string",status:"optional"},pathTruthy:{doc:"Given data context path must be truthy to show children.",type:"string",status:"optional"},pathFalsy:{doc:"Given data context path must be falsy to show children.",type:"string",status:"optional"},pathTrue:{doc:"Given data context path must be true to show children.",type:"string",status:"optional"},pathFalse:{doc:"Given data context path must be false to show children.",type:"string",status:"optional"},pathValue:{doc:"Given data context path must match, as well as the `whenValue` value.",type:"string",status:"optional"},whenValue:{doc:"The value to match. Should be used together with `pathValue`.",type:"string",status:"optional"},inferData:{doc:"Will be called to decide by external logic, and show/hide contents based on the return value.",type:"function",status:"optional"},visible:{doc:"Control visibility directly by boolean value.",type:"boolean",status:"optional"},animate:{doc:"Define if the content should animate during show/hide.",type:"boolean",status:"optional"},KeepInDOM:{doc:"Keep the content in the DOM, even if it's not visible",type:"boolean",status:"optional"},element:{doc:"Define the type of element. Defaults to `div`. Only for when `animate` is true.",type:"string or React.Element",status:"optional"},children:{doc:"Contents.",type:"React.Node",status:"required"}};function i(e){const t=Object.assign({h2:"h2"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{children:"Properties"}),"\n",(0,s.jsx)(o.Z,{props:r})]})}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}},85179:function(e,t,n){n.d(t,{Z:function(){return x}});var s=n(70894),a=n(61185),o=n(55560),r=n(41676),i=n(6210),c=n(64223),l=n(37339),d=n(595),h=n(52322);const u={...d.L,p:e=>(0,h.jsx)("span",{...e})},p=(0,s.Z)(o.ZP,{target:"e13h2c840"})({name:"1qdk5x4",styles:"td{white-space:nowrap;}"}),y="var(--color-fire-red)",f=e=>{let{variant:t,strikethrough:n,children:s,style:a={},...o}=e;if(n&&(a.textDecoration="line-through"),"string"==typeof s)switch(t){case"prop":break;case"type":a.color=s.startsWith("'")?y:"var(--color-violet)";case"value":a.color=s.startsWith("'")?y:"undefined"===s?"var(--color-black-55)":"var(--color-success-green)";default:a.background="none",a.boxShadow="none"}return u.code({children:s,style:a,...o})};function x(e){let{props:t,valueType:n="string",camelCase:s,omit:d,showDefaultValue:y=!1}=e;const x=Object.keys(t),j=Object.entries(t).map((e=>{let[t,{type:o,defaultValue:c,doc:p,status:j}]=e;return d&&d.includes(t)?null:(0,h.jsxs)(r.Z,{children:[(0,h.jsx)(i.Z,{children:(0,h.jsx)(f,{variant:"prop",strikethrough:"deprecated"===j,children:b(s?(0,l.zW)(t):t)})}),(0,h.jsx)(i.Z,{children:(Array.isArray(o)?o:[o]).map((e=>{if("string"==typeof e)return String(e).includes("{valueType}")&&(e=n),(0,h.jsx)(f,{variant:"type",children:e},e)})).reduce(((e,t)=>(0,h.jsxs)(h.Fragment,{children:[e," ",(0,h.jsx)("br",{})," ",t]})))}),y&&(0,h.jsx)(i.Z,{children:c?(0,h.jsx)(f,{variant:"value",children:c}):"required"===j&&"REQUIRED"}),(0,h.jsxs)(i.Z,{children:[(!y||"deprecated"===j)&&(0,h.jsxs)("em",{children:["(",j,") "]}),(0,h.jsx)(a.D,{components:u,children:s?v(p,x):p})]})]},t)}));return(0,h.jsx)(o.ZP.ScrollView,{children:(0,h.jsxs)(p,{children:[(0,h.jsx)("thead",{children:(0,h.jsxs)(r.Z,{children:[(0,h.jsx)(c.Z,{children:"Property"}),(0,h.jsx)(c.Z,{children:"Type"}),y&&(0,h.jsx)(c.Z,{children:"Default value"}),(0,h.jsx)(c.Z,{children:"Description"})]})}),(0,h.jsx)("tbody",{children:j})]})})}function v(e,t){return t.forEach((t=>{e=e.replace(new RegExp(t,"g"),(0,l.zW)(t))})),e}function b(e){return e.includes("/")?(0,h.jsx)(a.D,{components:u,children:e}):e}},6210:function(e,t,n){var s=n(30600);t.Z=s.Z},64223:function(e,t,n){var s=n(91859);t.Z=s.Z},41676:function(e,t,n){var s=n(47048);t.Z=s.Z}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-form-visibility-properties-mdx-6c6cad782b58dc1c222a.js.map