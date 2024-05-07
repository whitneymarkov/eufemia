"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[94486],{75141:function(e,t,r){r.r(t);var n=r(52322),s=r(45392),o=r(85179),a=r(72715);function i(e){const t=Object.assign({h2:"h2"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{children:"Properties"}),"\n",(0,n.jsx)(o.Z,{props:a.ValueProperties})]})}t.default=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(i,e)})):i(e)}},85179:function(e,t,r){r.d(t,{Z:function(){return j}});var n=r(70894),s=r(61185),o=r(55560),a=r(41676),i=r(6210),l=r(64223),c=r(37339),u=r(595),d=r(52322);const p={...u.L,p:e=>(0,d.jsx)("span",{...e})},h=(0,n.Z)(o.ZP,{target:"e13h2c840"})({name:"1qdk5x4",styles:"td{white-space:nowrap;}"}),f="var(--color-fire-red)",x=e=>{let{variant:t,strikethrough:r,children:n,style:s={},...o}=e;if(r&&(s.textDecoration="line-through"),"string"==typeof n)switch(t){case"prop":break;case"type":s.color=n.startsWith("'")?f:"var(--color-violet)";case"value":s.color=n.startsWith("'")?f:"undefined"===n?"var(--color-black-55)":"var(--color-success-green)";default:s.background="none",s.boxShadow="none"}return p.code({children:n,style:s,...o})};function j(e){let{props:t,valueType:r="string",camelCase:n,omit:u,showDefaultValue:f=!1}=e;const j=Object.keys(t),g=Object.entries(t).map((e=>{let[t,o]=e;if(!o)return null;const{type:l,defaultValue:h,doc:g,status:m}=o;return u&&u.includes(t)?null:(0,d.jsxs)(a.Z,{children:[(0,d.jsx)(i.Z,{children:(0,d.jsx)(x,{variant:"prop",strikethrough:"deprecated"===m,children:v(n?(0,c.zW)(t):t)})}),(0,d.jsx)(i.Z,{children:(Array.isArray(l)?l:[l]).map((e=>{if("string"==typeof e){if(String(e).includes("{valueType}")){if(Array.isArray(r))return r.map(((e,t)=>(0,d.jsx)(x,{variant:"type",children:e},e+t))).reduce(((e,t)=>(0,d.jsxs)(d.Fragment,{children:[e," ",(0,d.jsx)("br",{})," ",t]})));e=r}return(0,d.jsx)(x,{variant:"type",children:e},e)}})).reduce(((e,t)=>(0,d.jsxs)(d.Fragment,{children:[e," ",(0,d.jsx)("br",{})," ",t]})))}),f&&(0,d.jsx)(i.Z,{children:h?(0,d.jsx)(x,{variant:"value",children:h}):"required"===m&&"REQUIRED"}),(0,d.jsxs)(i.Z,{children:[(!f||"deprecated"===m)&&(0,d.jsxs)("em",{children:["(",m,") "]}),(0,d.jsx)(s.D,{components:p,children:n?y(g,j):g})]})]},t)}));return(0,d.jsx)(o.ZP.ScrollView,{children:(0,d.jsxs)(h,{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)(a.Z,{children:[(0,d.jsx)(l.Z,{children:"Property"}),(0,d.jsx)(l.Z,{children:"Type"}),f&&(0,d.jsx)(l.Z,{children:"Default value"}),(0,d.jsx)(l.Z,{children:"Description"})]})}),(0,d.jsx)("tbody",{children:g})]})})}function y(e,t){return t.forEach((t=>{e=e.replace(new RegExp(t,"g"),(0,c.zW)(t))})),e}function v(e){return e.includes("/")?(0,d.jsx)(s.D,{components:p,children:e}):e}},6210:function(e,t,r){var n=r(30600);t.Z=n.Z},64223:function(e,t,r){var n=r(91859);t.Z=n.Z},41676:function(e,t,r){var n=r(47048);t.Z=n.Z},72715:function(e,t,r){r.d(t,{ValueProperties:function(){return n}});const n={value:{doc:"Source data value for the input.",type:"{valueType}",status:"optional"},label:{doc:"Field label to show above the data value.",type:"string",status:"optional"},showEmpty:{doc:"Shows the value even if it is empty.",type:"boolean",status:"optional"},placeholder:{doc:"Text showing in place of the value if no value is given.",type:"string",status:"optional"},path:{doc:"JSON Pointer for where the data for this input is located in the source dataset.",type:"string",status:"optional"},inline:{doc:"For showing the value inline (not as a block element).",type:"boolean",status:"optional"},maxWidth:{doc:"Use `auto` for no max-width (use browser default), `small`, `medium` or `large` for predefined standard max widths. Defaults to `large`.",type:"string",status:"optional"},transformIn:{doc:"Transforms the `value` before its displayed in the value component.",type:"function",status:"optional"},"[Space](/uilib/layout/space/properties)":{doc:"Spacing properties like `top` or `bottom` are supported.",type:["string","object"],status:"optional"}}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-value-phone-number-properties-mdx-533d68c0dd37e7f7c62e.js.map