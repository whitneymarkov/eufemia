"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[94486],{75141:function(e,t,n){n.r(t);var r=n(52322),s=n(45392),o=n(85179),a=n(72715);function i(e){const t=Object.assign({h2:"h2"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:"Properties"}),"\n",(0,r.jsx)(o.Z,{props:a.ValueProperties})]})}t.default=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(i,e)})):i(e)}},85179:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(70894),s=n(61185),o=n(55560),a=n(41676),i=n(6210),l=n(64223),c=n(37339),u=n(595),d=n(52322);const h={...u.L,p:e=>(0,d.jsx)("span",{...e})},p=(0,r.Z)(o.ZP,{target:"e13h2c840"})({name:"1qdk5x4",styles:"td{white-space:nowrap;}"}),f="var(--color-fire-red)",x=e=>{let{variant:t,strikethrough:n,children:r,style:s={},...o}=e;if(n&&(s.textDecoration="line-through"),"string"==typeof r)switch(t){case"prop":break;case"type":s.color=r.startsWith("'")?f:"var(--color-violet)";case"value":s.color=r.startsWith("'")?f:"undefined"===r?"var(--color-black-55)":"var(--color-success-green)";default:s.background="none",s.boxShadow="none"}return h.code({children:r,style:s,...o})};function v(e){let{props:t,valueType:n="string",camelCase:r,omit:u,showDefaultValue:f=!1}=e;const v=Object.keys(t),y=Object.entries(t).map((e=>{let[t,{type:o,defaultValue:l,doc:p,status:y}]=e;return u&&u.includes(t)?null:(0,d.jsxs)(a.Z,{children:[(0,d.jsx)(i.Z,{children:(0,d.jsx)(x,{variant:"prop",strikethrough:"deprecated"===y,children:g(r?(0,c.zW)(t):t)})}),(0,d.jsx)(i.Z,{children:(Array.isArray(o)?o:[o]).map((e=>{if("string"==typeof e)return String(e).includes("{valueType}")&&(e=n),(0,d.jsx)(x,{variant:"type",children:e},e)})).reduce(((e,t)=>(0,d.jsxs)(d.Fragment,{children:[e," ",(0,d.jsx)("br",{})," ",t]})))}),f&&(0,d.jsx)(i.Z,{children:l?(0,d.jsx)(x,{variant:"value",children:l}):"required"===y&&"REQUIRED"}),(0,d.jsxs)(i.Z,{children:[(!f||"deprecated"===y)&&(0,d.jsxs)("em",{children:["(",y,") "]}),(0,d.jsx)(s.D,{components:h,children:r?j(p,v):p})]})]},t)}));return(0,d.jsx)(o.ZP.ScrollView,{children:(0,d.jsxs)(p,{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)(a.Z,{children:[(0,d.jsx)(l.Z,{children:"Property"}),(0,d.jsx)(l.Z,{children:"Type"}),f&&(0,d.jsx)(l.Z,{children:"Default value"}),(0,d.jsx)(l.Z,{children:"Description"})]})}),(0,d.jsx)("tbody",{children:y})]})})}function j(e,t){return t.forEach((t=>{e=e.replace(new RegExp(t,"g"),(0,c.zW)(t))})),e}function g(e){return e.includes("/")?(0,d.jsx)(s.D,{components:h,children:e}):e}},6210:function(e,t,n){var r=n(30600);t.Z=r.Z},64223:function(e,t,n){var r=n(91859);t.Z=r.Z},41676:function(e,t,n){var r=n(47048);t.Z=r.Z},72715:function(e,t,n){n.d(t,{ValueProperties:function(){return r}});const r={value:{doc:"Source data value for the input.",type:"{valueType}",status:"optional"},label:{doc:"Field label to show above the data value.",type:"string",status:"optional"},showEmpty:{doc:"Text showing in place of the value if no value is given.",type:"boolean",status:"optional"},placeholder:{doc:"Text showing in place of the value if no value is given.",type:"string",status:"optional"},path:{doc:"JSON Pointer for where the data for this input is located in the source dataset.",type:"string",status:"optional"},inline:{doc:"For showing the value inline (not as a block element).",type:"boolean",status:"optional"},maxWidth:{doc:"Use `auto` for no max-width (use browser default), `small`, `medium` or `large` for predefined standard max widths. Defaults to `large`.",type:"string",status:"optional"},transformIn:{doc:"Transforms the `value` before its displayed in the value component.",type:"function",status:"optional"}}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-value-phone-number-properties-mdx-8f1a169679b3e4231e80.js.map