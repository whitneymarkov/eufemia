"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[18003],{19528:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(52322),o=n(45392),s=n(85179);const a={...n(84187).o,align:{doc:"`center` or `bottom` for aligning the contents vertically. Defaults to `bottom`.",type:["string","false"],status:"optional"},asFieldset:void 0,composition:void 0};function i(e){const t=Object.assign({h2:"h2"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:"Properties"}),"\n",(0,r.jsx)(s.ZP,{props:a})]})}var l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(i,e)})):i(e)}},85179:function(e,t,n){n.d(t,{Kw:function(){return b},ZP:function(){return y}});var r=n(70894),o=n(61185),s=n(55560),a=n(41676),i=n(6210),l=n(64223),c=n(37339),d=n(595),u=n(52322);const p={...d.L,p:e=>(0,u.jsx)("span",{...e})},h=(0,r.Z)(s.ZP,{target:"e13h2c840"})({name:"1qdk5x4",styles:"td{white-space:nowrap;}"}),f="var(--color-fire-red)",b=e=>{let{variant:t,strikethrough:n,children:r,style:o={},...s}=e;if(n&&(o.textDecoration="line-through"),"string"==typeof r)switch(t){case"prop":break;case"type":o.color=r.startsWith("'")?f:"var(--color-violet)";case"value":o.color=r.startsWith("'")?f:"undefined"===r||"null"===r?"var(--color-black-55)":"var(--color-success-green)";default:o.background="none",o.boxShadow="none"}return p.code({children:r,style:o,...s})};function y(e){let{props:t,valueType:n="string",camelCase:r,omit:d,showDefaultValue:f=!1}=e;const y=Object.keys(t||{}),j=Object.entries(t||{}).map((e=>{let[t,s]=e;if(!s)return null;const{type:l,defaultValue:h,doc:j,status:x}=s;return d&&d.includes(t)?null:(0,u.jsxs)(a.Z,{children:[(0,u.jsx)(i.Z,{children:(0,u.jsx)(b,{variant:"prop",strikethrough:"deprecated"===x,children:m(r?(0,c.zW)(t):t)})}),(0,u.jsx)(i.Z,{children:(Array.isArray(l)?l:[l]).map((e=>{if("string"==typeof e){if(String(e).includes("{valueType}")){if(Array.isArray(n))return n.map(((e,t)=>(0,u.jsx)(b,{variant:"type",children:e},e+t))).reduce(((e,t)=>(0,u.jsxs)(u.Fragment,{children:[e," ",(0,u.jsx)("br",{})," ",t]})));e=n}return(0,u.jsx)(b,{variant:"type",children:e},e)}})).reduce(((e,t)=>(0,u.jsxs)(u.Fragment,{children:[e," ",(0,u.jsx)("br",{})," ",t]})))}),f&&(0,u.jsx)(i.Z,{children:h?(0,u.jsx)(b,{variant:"value",children:h}):"required"===x&&"REQUIRED"}),(0,u.jsxs)(i.Z,{children:[(!f||"deprecated"===x)&&(0,u.jsxs)("em",{children:["(",x,") "]}),(0,u.jsx)(o.D,{components:p,children:r?g(j,y):j})]})]},t)}));return(0,u.jsx)(s.ZP.ScrollView,{children:(0,u.jsxs)(h,{children:[(0,u.jsx)("thead",{children:(0,u.jsxs)(a.Z,{children:[(0,u.jsx)(l.Z,{children:"Property"}),(0,u.jsx)(l.Z,{children:"Type"}),f&&(0,u.jsx)(l.Z,{children:"Default value"}),(0,u.jsx)(l.Z,{children:"Description"})]})}),(0,u.jsx)("tbody",{children:j})]})})}function g(e,t){return t.forEach((t=>{e=e.replace(new RegExp(t,"g"),(0,c.zW)(t))})),e}function m(e){return e.includes("/")?(0,u.jsx)(o.D,{components:p,children:e}):e}},6210:function(e,t,n){var r=n(30600);t.Z=r.Z},64223:function(e,t,n){var r=n(91859);t.Z=r.Z},41676:function(e,t,n){var r=n(35610);t.Z=r.Z},84187:function(e,t,n){n.d(t,{L:function(){return r},o:function(){return o}});const r={label:{doc:"Field label to show above / before the input feature.",type:"string",status:"optional"},labelDescription:{doc:'A more discreet text displayed beside the label (i.e for "(optional)").',type:"string",status:"optional"},labelSrOnly:{doc:"Use `true` to make the label only readable by screen readers.",type:"boolean",status:"optional"},layout:{doc:"Layout for the label and input. Can be `horizontal` or `vertical`.",type:"string",status:"optional"},width:{doc:"`small`, `medium`, `large`, `stretch` or `false` for predefined standard widths.",type:["string","false"],status:"optional"},contentWidth:{doc:"`small`, `medium`, `large`, `stretch` or `false` for predefined standard widths.",type:["string","false"],status:"optional"},"[Space](/uilib/layout/space/properties)":{doc:"Spacing properties like `top` or `bottom` are supported.",type:["string","object"],status:"optional"}},o={...r,labelSize:{doc:"Define one of the following [heading size](/uilib/elements/heading/): `medium` or `large`.",type:["string","false"],status:"optional"},asFieldset:{doc:"Use `true` when you have several form elements. This way a `fieldset` with a `legend` is used.",type:"boolean",status:"optional"},align:{doc:"`center` or `bottom` for aligning the contents vertically. Defaults to `bottom`.",type:["string","false"],status:"optional"},composition:{doc:"Use `true` for when you have more than one field wrapped.",type:"string",status:"optional"},disabled:{doc:"Set `true` to make the inner [FormLabel](/uilib/components/form-label/) behave as disabled.",type:"boolean",status:"optional"}}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-base-fields-composition-properties-mdx-2e26a0935dac562b7162.js.map