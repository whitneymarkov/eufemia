"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[69054],{90929:function(e,t,s){s.r(t);var o=s(52322),n=s(45392),r=s(85179),a=s(61640);function i(e){const t=Object.assign({h2:"h2"},(0,n.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{children:"Events"}),"\n",(0,o.jsx)(r.Z,{props:a.A})]})}t.default=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(i,e)})):i(e)}},85179:function(e,t,s){s.d(t,{Z:function(){return g}});var o=s(70894),n=s(61185),r=s(55560),a=s(41676),i=s(6210),c=s(64223),l=s(37339),u=s(595),p=s(52322);const d={...u.L,p:e=>(0,p.jsx)("span",{...e})},h=(0,o.Z)(r.ZP,{target:"e13h2c840"})({name:"1qdk5x4",styles:"td{white-space:nowrap;}"}),f="var(--color-fire-red)",b=e=>{let{variant:t,strikethrough:s,children:o,style:n={},...r}=e;if(s&&(n.textDecoration="line-through"),"string"==typeof o)switch(t){case"prop":break;case"type":n.color=o.startsWith("'")?f:"var(--color-violet)";case"value":n.color=o.startsWith("'")?f:"undefined"===o?"var(--color-black-55)":"var(--color-success-green)";default:n.background="none",n.boxShadow="none"}return d.code({children:o,style:n,...r})};function g(e){let{props:t,valueType:s="string",camelCase:o,omit:u,showDefaultValue:f=!1}=e;const g=Object.keys(t),m=Object.entries(t).map((e=>{let[t,{type:r,defaultValue:c,doc:h,status:m}]=e;return u&&u.includes(t)?null:(0,p.jsxs)(a.Z,{children:[(0,p.jsx)(i.Z,{children:(0,p.jsx)(b,{variant:"prop",strikethrough:"deprecated"===m,children:x(o?(0,l.zW)(t):t)})}),(0,p.jsx)(i.Z,{children:(Array.isArray(r)?r:[r]).map((e=>{if("string"==typeof e)return String(e).includes("{valueType}")&&(e=s),(0,p.jsx)(b,{variant:"type",children:e},e)})).reduce(((e,t)=>(0,p.jsxs)(p.Fragment,{children:[e," ",(0,p.jsx)("br",{})," ",t]})))}),f&&(0,p.jsx)(i.Z,{children:c?(0,p.jsx)(b,{variant:"value",children:c}):"required"===m&&"REQUIRED"}),(0,p.jsxs)(i.Z,{children:[(!f||"deprecated"===m)&&(0,p.jsxs)("em",{children:["(",m,") "]}),(0,p.jsx)(n.D,{components:d,children:o?y(h,g):h})]})]},t)}));return(0,p.jsx)(r.ZP.ScrollView,{children:(0,p.jsxs)(h,{children:[(0,p.jsx)("thead",{children:(0,p.jsxs)(a.Z,{children:[(0,p.jsx)(c.Z,{children:"Property"}),(0,p.jsx)(c.Z,{children:"Type"}),f&&(0,p.jsx)(c.Z,{children:"Default value"}),(0,p.jsx)(c.Z,{children:"Description"})]})}),(0,p.jsx)("tbody",{children:m})]})})}function y(e,t){return t.forEach((t=>{e=e.replace(new RegExp(t,"g"),(0,l.zW)(t))})),e}function x(e){return e.includes("/")?(0,p.jsx)(n.D,{components:d,children:e}):e}},61640:function(e,t,s){s.d(t,{A:function(){return n},h:function(){return o}});const o={checked:{doc:"Determine whether the checkbox is checked or not. The default is `false`.",type:"boolean",status:"optional"},title:{doc:"The `title` of the input - describing it a bit further for accessibility reasons.",type:"ReactNode",status:"optional"},label:{doc:"Use either the `label` property or provide a custom one.",type:"ReactNode",status:"optional"},label_position:{doc:"Defines the position of the `label`. Use either `left` or `right`. Defaults to `right`.",type:"string",status:"optional"},label_sr_only:{doc:"Use `true` to make the label only readable by screen readers.",type:"string",status:"optional"},size:{doc:'The size of the checkbox. For now there is "medium" (default) and "large".',type:["string","number"],status:"optional"},status:{doc:"Text with a status message. The style defaults to an error message. You can use `true` to only get the status color, without a message.",type:"string",status:"optional"},status_state:{doc:"Defines the state of the status. Currently, there are two statuses `[error, info]`. Defaults to `error`.",type:["error","info"],status:"optional"},status_props:{doc:"Use an object to define additional FormStatus properties. See [FormStatus](/uilib/components/form-status/properties/)",type:"FormStatusProps",status:"optional"},globalStatus:{doc:"The [configuration](/uilib/components/global-status/properties/#configuration-object) used for the target [GlobalStatus](/uilib/components/global-status)",type:"object",status:"optional"},skeleton:{doc:"If set to `true`, an overlaying skeleton with animation will be shown.",type:"boolean",status:"optional"},suffix:{doc:"Text describing the content of the Checkbox more than the label. You can also send in a React component, so it gets wrapped inside the Checkbox component.",type:"ReactNode",status:"optional"},innerRef:{doc:"By providing a React.ref we can get the internally used input element (DOM). E.g. `innerRef={myRef}` by using `React.createRef()` or `React.useRef()`.",type:"string",status:"optional"},"[Space](/uilib/layout/space/properties)":{doc:"Spacing properties like `top` or `bottom` are supported.",type:["string","object"],status:"optional"}},n={on_change:{doc:"Will be called on state changes made by the user.",type:"() => {checked: boolean; event: ChangeEvent}",status:"optional"}}},6210:function(e,t,s){var o=s(30600);t.Z=o.Z},64223:function(e,t,s){var o=s(91859);t.Z=o.Z},41676:function(e,t,s){var o=s(47048);t.Z=o.Z}}]);
//# sourceMappingURL=component---src-docs-uilib-components-checkbox-events-mdx-f1f9f46108e41282d0e8.js.map