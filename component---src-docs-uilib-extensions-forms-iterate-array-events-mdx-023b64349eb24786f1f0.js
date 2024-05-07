"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[72443],{68008:function(e,t,n){n.r(t);var r=n(52322),a=n(45392),s=n(85179),o=n(1855);function i(e){const t=Object.assign({h2:"h2",h3:"h3"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:"Properties"}),"\n",(0,r.jsx)(t.h3,{children:"Iterate-specific props"}),"\n",(0,r.jsx)(s.Z,{props:o.e})]})}t.default=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(i,e)})):i(e)}},85179:function(e,t,n){n.d(t,{Z:function(){return j}});var r=n(70894),a=n(61185),s=n(55560),o=n(41676),i=n(6210),c=n(64223),l=n(37339),u=n(595),d=n(52322);const h={...u.L,p:e=>(0,d.jsx)("span",{...e})},p=(0,r.Z)(s.ZP,{target:"e13h2c840"})({name:"1qdk5x4",styles:"td{white-space:nowrap;}"}),x="var(--color-fire-red)",f=e=>{let{variant:t,strikethrough:n,children:r,style:a={},...s}=e;if(n&&(a.textDecoration="line-through"),"string"==typeof r)switch(t){case"prop":break;case"type":a.color=r.startsWith("'")?x:"var(--color-violet)";case"value":a.color=r.startsWith("'")?x:"undefined"===r?"var(--color-black-55)":"var(--color-success-green)";default:a.background="none",a.boxShadow="none"}return h.code({children:r,style:a,...s})};function j(e){let{props:t,valueType:n="string",camelCase:r,omit:u,showDefaultValue:x=!1}=e;const j=Object.keys(t),g=Object.entries(t).map((e=>{let[t,s]=e;if(!s)return null;const{type:c,defaultValue:p,doc:g,status:b}=s;return u&&u.includes(t)?null:(0,d.jsxs)(o.Z,{children:[(0,d.jsx)(i.Z,{children:(0,d.jsx)(f,{variant:"prop",strikethrough:"deprecated"===b,children:v(r?(0,l.zW)(t):t)})}),(0,d.jsx)(i.Z,{children:(Array.isArray(c)?c:[c]).map((e=>{if("string"==typeof e){if(String(e).includes("{valueType}")){if(Array.isArray(n))return n.map(((e,t)=>(0,d.jsx)(f,{variant:"type",children:e},e+t))).reduce(((e,t)=>(0,d.jsxs)(d.Fragment,{children:[e," ",(0,d.jsx)("br",{})," ",t]})));e=n}return(0,d.jsx)(f,{variant:"type",children:e},e)}})).reduce(((e,t)=>(0,d.jsxs)(d.Fragment,{children:[e," ",(0,d.jsx)("br",{})," ",t]})))}),x&&(0,d.jsx)(i.Z,{children:p?(0,d.jsx)(f,{variant:"value",children:p}):"required"===b&&"REQUIRED"}),(0,d.jsxs)(i.Z,{children:[(!x||"deprecated"===b)&&(0,d.jsxs)("em",{children:["(",b,") "]}),(0,d.jsx)(a.D,{components:h,children:r?y(g,j):g})]})]},t)}));return(0,d.jsx)(s.ZP.ScrollView,{children:(0,d.jsxs)(p,{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)(o.Z,{children:[(0,d.jsx)(c.Z,{children:"Property"}),(0,d.jsx)(c.Z,{children:"Type"}),x&&(0,d.jsx)(c.Z,{children:"Default value"}),(0,d.jsx)(c.Z,{children:"Description"})]})}),(0,d.jsx)("tbody",{children:g})]})})}function y(e,t){return t.forEach((t=>{e=e.replace(new RegExp(t,"g"),(0,l.zW)(t))})),e}function v(e){return e.includes("/")?(0,d.jsx)(a.D,{components:h,children:e}):e}},6210:function(e,t,n){var r=n(30600);t.Z=r.Z},64223:function(e,t,n){var r=n(91859);t.Z=r.Z},41676:function(e,t,n){var r=n(47048);t.Z=r.Z},1855:function(e,t,n){n.d(t,{e:function(){return a},s:function(){return r}});const r={value:{doc:"The data to iterate over. Alternative you can use the `path` prop.",type:"array",status:"optional"},path:{doc:"A path (JSON Pointer) to the array to iterate over.",type:"string",status:"optional"},withoutFlex:{doc:"When `true` it will omit the Flex.Stack wrapper so it can be used for tables and lists.",type:"boolean",status:"optional"},placeholder:{doc:"Will be shown if the value or data context value is empty.",type:"React.Node",status:"optional"},emptyValue:{doc:"Will be used to compare the value in order to show the placeholder.",type:"unknown",status:"optional"},children:{doc:"React.Node or a function so you can get the current value and index.",type:"boolean",status:"optional"},"[Flex.Stack](/uilib/layout/flex/stack/)":{doc:"All Flex.Stack properties.",type:"Various",status:"optional"}},a={onChange:{doc:"Will be called when a value of a field was changed by the user, with the data set (including the changed value) as argument.",type:"function",status:"optional"}}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-iterate-array-events-mdx-023b64349eb24786f1f0.js.map