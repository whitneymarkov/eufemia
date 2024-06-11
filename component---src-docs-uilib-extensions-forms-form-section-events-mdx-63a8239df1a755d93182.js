"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[72803],{39568:function(e,t,n){n.r(t);var r=n(52322),s=n(45392),i=n(85179),a=n(67492);function o(e){const t=Object.assign({h2:"h2",h3:"h3"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:"Properties"}),"\n",(0,r.jsx)(t.h3,{children:"Section-specific props"}),"\n",(0,r.jsx)(i.Z,{props:a.e})]})}t.default=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},85179:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(70894),s=n(61185),i=n(55560),a=n(41676),o=n(6210),c=n(64223),l=n(37339),d=n(595),h=n(52322);const u={...d.L,p:e=>(0,h.jsx)("span",{...e})},p=(0,r.Z)(i.ZP,{target:"e13h2c840"})({name:"1qdk5x4",styles:"td{white-space:nowrap;}"}),f="var(--color-fire-red)",j=e=>{let{variant:t,strikethrough:n,children:r,style:s={},...i}=e;if(n&&(s.textDecoration="line-through"),"string"==typeof r)switch(t){case"prop":break;case"type":s.color=r.startsWith("'")?f:"var(--color-violet)";case"value":s.color=r.startsWith("'")?f:"undefined"===r?"var(--color-black-55)":"var(--color-success-green)";default:s.background="none",s.boxShadow="none"}return u.code({children:r,style:s,...i})};function x(e){let{props:t,valueType:n="string",camelCase:r,omit:d,showDefaultValue:f=!1}=e;const x=Object.keys(t),g=Object.entries(t).map((e=>{let[t,i]=e;if(!i)return null;const{type:c,defaultValue:p,doc:g,status:b}=i;return d&&d.includes(t)?null:(0,h.jsxs)(a.Z,{children:[(0,h.jsx)(o.Z,{children:(0,h.jsx)(j,{variant:"prop",strikethrough:"deprecated"===b,children:y(r?(0,l.zW)(t):t)})}),(0,h.jsx)(o.Z,{children:(Array.isArray(c)?c:[c]).map((e=>{if("string"==typeof e){if(String(e).includes("{valueType}")){if(Array.isArray(n))return n.map(((e,t)=>(0,h.jsx)(j,{variant:"type",children:e},e+t))).reduce(((e,t)=>(0,h.jsxs)(h.Fragment,{children:[e," ",(0,h.jsx)("br",{})," ",t]})));e=n}return(0,h.jsx)(j,{variant:"type",children:e},e)}})).reduce(((e,t)=>(0,h.jsxs)(h.Fragment,{children:[e," ",(0,h.jsx)("br",{})," ",t]})))}),f&&(0,h.jsx)(o.Z,{children:p?(0,h.jsx)(j,{variant:"value",children:p}):"required"===b&&"REQUIRED"}),(0,h.jsxs)(o.Z,{children:[(!f||"deprecated"===b)&&(0,h.jsxs)("em",{children:["(",b,") "]}),(0,h.jsx)(s.D,{components:u,children:r?v(g,x):g})]})]},t)}));return(0,h.jsx)(i.ZP.ScrollView,{children:(0,h.jsxs)(p,{children:[(0,h.jsx)("thead",{children:(0,h.jsxs)(a.Z,{children:[(0,h.jsx)(c.Z,{children:"Property"}),(0,h.jsx)(c.Z,{children:"Type"}),f&&(0,h.jsx)(c.Z,{children:"Default value"}),(0,h.jsx)(c.Z,{children:"Description"})]})}),(0,h.jsx)("tbody",{children:g})]})})}function v(e,t){return t.forEach((t=>{e=e.replace(new RegExp(t,"g"),(0,l.zW)(t))})),e}function y(e){return e.includes("/")?(0,h.jsx)(s.D,{components:u,children:e}):e}},6210:function(e,t,n){var r=n(30600);t.Z=r.Z},64223:function(e,t,n){var r=n(91859);t.Z=r.Z},41676:function(e,t,n){var r=n(47048);t.Z=r.Z},67492:function(e,t,n){n.d(t,{I:function(){return r},e:function(){return s}});const r={path:{doc:"A path to the section (JSON Pointer). When defined, fields inside the section will get this path as a prefix of their own path.",type:"string",status:"optional"},overwriteProps:{doc:"Overwrite field props for the section.",type:"object",status:"optional"},translation:{doc:"Provide a translation for the section (e.g. `{'nb-NO': { MySection: { MyField: { label: 'Custom' }}}}`).",type:"object",status:"optional"},required:{doc:"Makes all fields inside it required.",type:"boolean",status:"optional"},defaultData:{doc:"Provide default data to the section fields and values, in case the data context (Form.Handler) is not available.",type:"object",status:"optional"},data:{doc:"Provide data to the section fields and values, in case the data context (Form.Handler) is not available.",type:"object",status:"optional"},containerMode:{doc:"Defines the container mode. Can be `view` or `edit`. Defaults to `view`.",type:"string",status:"optional"},children:{doc:"All the fields and values inside the section.",type:"React.Node",status:"optional"}},s={onChange:{doc:"Will be called when a value of a field was changed by the user, with the data set (including the changed value) as argument.",type:"function",status:"optional"}}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-form-section-events-mdx-63a8239df1a755d93182.js.map