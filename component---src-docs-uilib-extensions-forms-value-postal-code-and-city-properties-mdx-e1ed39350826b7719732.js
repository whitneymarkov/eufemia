"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[13304],{85106:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var r=n(52322),s=n(45392),o=n(85179),a=n(72715);const i={postalCode:{doc:"Properties such as `value` and `path` for the [Value.String](/uilib/extensions/forms/Value/String) component for postcode.",type:"object",status:"optional"},city:{doc:"Properties such as `value` and `path` for the [Value.String](/uilib/extensions/forms/Value/String) component for city.",type:"object",status:"optional"}};function l(e){const t=Object.assign({h2:"h2"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:"Component-specific props"}),"\n",(0,r.jsx)(o.Z,{props:i}),"\n",(0,r.jsx)(t.h2,{children:"Properties"}),"\n",(0,r.jsx)(o.Z,{props:a.ValueProperties})]})}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},85179:function(e,t,n){n.d(t,{Z:function(){return j}});var r=n(70894),s=n(61185),o=n(55560),a=n(41676),i=n(6210),l=n(64223),c=n(37339),u=n(595),p=n(52322);const d={...u.L,p:e=>(0,p.jsx)("span",{...e})},h=(0,r.Z)(o.ZP,{target:"e13h2c840"})({name:"1qdk5x4",styles:"td{white-space:nowrap;}"}),f="var(--color-fire-red)",x=e=>{let{variant:t,strikethrough:n,children:r,style:s={},...o}=e;if(n&&(s.textDecoration="line-through"),"string"==typeof r)switch(t){case"prop":break;case"type":s.color=r.startsWith("'")?f:"var(--color-violet)";case"value":s.color=r.startsWith("'")?f:"undefined"===r?"var(--color-black-55)":"var(--color-success-green)";default:s.background="none",s.boxShadow="none"}return d.code({children:r,style:s,...o})};function j(e){let{props:t,valueType:n="string",camelCase:r,omit:u,showDefaultValue:f=!1}=e;const j=Object.keys(t),g=Object.entries(t).map((e=>{let[t,o]=e;if(!o)return null;const{type:l,defaultValue:h,doc:g,status:m}=o;return u&&u.includes(t)?null:(0,p.jsxs)(a.Z,{children:[(0,p.jsx)(i.Z,{children:(0,p.jsx)(x,{variant:"prop",strikethrough:"deprecated"===m,children:v(r?(0,c.zW)(t):t)})}),(0,p.jsx)(i.Z,{children:(Array.isArray(l)?l:[l]).map((e=>{if("string"==typeof e){if(String(e).includes("{valueType}")){if(Array.isArray(n))return n.map(((e,t)=>(0,p.jsx)(x,{variant:"type",children:e},e+t))).reduce(((e,t)=>(0,p.jsxs)(p.Fragment,{children:[e," ",(0,p.jsx)("br",{})," ",t]})));e=n}return(0,p.jsx)(x,{variant:"type",children:e},e)}})).reduce(((e,t)=>(0,p.jsxs)(p.Fragment,{children:[e," ",(0,p.jsx)("br",{})," ",t]})))}),f&&(0,p.jsx)(i.Z,{children:h?(0,p.jsx)(x,{variant:"value",children:h}):"required"===m&&"REQUIRED"}),(0,p.jsxs)(i.Z,{children:[(!f||"deprecated"===m)&&(0,p.jsxs)("em",{children:["(",m,") "]}),(0,p.jsx)(s.D,{components:d,children:r?y(g,j):g})]})]},t)}));return(0,p.jsx)(o.ZP.ScrollView,{children:(0,p.jsxs)(h,{children:[(0,p.jsx)("thead",{children:(0,p.jsxs)(a.Z,{children:[(0,p.jsx)(l.Z,{children:"Property"}),(0,p.jsx)(l.Z,{children:"Type"}),f&&(0,p.jsx)(l.Z,{children:"Default value"}),(0,p.jsx)(l.Z,{children:"Description"})]})}),(0,p.jsx)("tbody",{children:g})]})})}function y(e,t){return t.forEach((t=>{e=e.replace(new RegExp(t,"g"),(0,c.zW)(t))})),e}function v(e){return e.includes("/")?(0,p.jsx)(s.D,{components:d,children:e}):e}},6210:function(e,t,n){var r=n(30600);t.Z=r.Z},64223:function(e,t,n){var r=n(91859);t.Z=r.Z},41676:function(e,t,n){var r=n(47048);t.Z=r.Z},72715:function(e,t,n){n.d(t,{ValueProperties:function(){return r}});const r={value:{doc:"Source data value for the input.",type:"{valueType}",status:"optional"},label:{doc:"Field label to show above the data value.",type:"string",status:"optional"},showEmpty:{doc:"Shows the value even if it is empty.",type:"boolean",status:"optional"},placeholder:{doc:"Text showing in place of the value if no value is given.",type:"string",status:"optional"},path:{doc:"JSON Pointer for where the data for this input is located in the source dataset.",type:"string",status:"optional"},inline:{doc:"For showing the value inline (not as a block element).",type:"boolean",status:"optional"},maxWidth:{doc:"Use `auto` for no max-width (use browser default), `small`, `medium` or `large` for predefined standard max widths. Defaults to `large`.",type:"string",status:"optional"},transformIn:{doc:"Transforms the `value` before its displayed in the value component.",type:"function",status:"optional"},"[Space](/uilib/layout/space/properties)":{doc:"Spacing properties like `top` or `bottom` are supported.",type:["string","object"],status:"optional"}}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-value-postal-code-and-city-properties-mdx-e1ed39350826b7719732.js.map