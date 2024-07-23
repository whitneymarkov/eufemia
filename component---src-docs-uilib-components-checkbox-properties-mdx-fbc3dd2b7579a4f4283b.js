"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[29808],{38332:function(e,t,n){n.r(t);var o=n(52322),s=n(45392),r=n(85179),a=n(61640);function i(e){const t=Object.assign({h2:"h2"},(0,s.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{children:"Properties"}),"\n",(0,o.jsx)(r.ZP,{props:a.h})]})}t.default=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(i,e)})):i(e)}},85179:function(e,t,n){n.d(t,{Kw:function(){return b},ZP:function(){return y}});var o=n(70894),s=n(61185),r=n(55560),a=n(41676),i=n(6210),c=n(64223),l=n(37339),u=n(595),p=n(52322);const d={...u.L,p:e=>(0,p.jsx)("span",{...e})},h=(0,o.Z)(r.ZP,{target:"e13h2c840"})({name:"1qdk5x4",styles:"td{white-space:nowrap;}"}),f="var(--color-fire-red)",b=e=>{let{variant:t,strikethrough:n,children:o,style:s={},...r}=e;if(n&&(s.textDecoration="line-through"),"string"==typeof o)switch(t){case"prop":break;case"type":s.color=o.startsWith("'")?f:"var(--color-violet)";case"value":s.color=o.startsWith("'")?f:"undefined"===o||"null"===o?"var(--color-black-55)":"var(--color-success-green)";default:s.background="none",s.boxShadow="none"}return d.code({children:o,style:s,...r})};function y(e){let{props:t,valueType:n="string",camelCase:o,omit:u,showDefaultValue:f=!1}=e;const y=Object.keys(t||{}),m=Object.entries(t||{}).map((e=>{let[t,r]=e;if(!r)return null;const{type:c,defaultValue:h,doc:m,status:j}=r;return u&&u.includes(t)?null:(0,p.jsxs)(a.Z,{children:[(0,p.jsx)(i.Z,{children:(0,p.jsx)(b,{variant:"prop",strikethrough:"deprecated"===j,children:x(o?(0,l.zW)(t):t)})}),(0,p.jsx)(i.Z,{children:(Array.isArray(c)?c:[c]).map((e=>{if("string"==typeof e){if(String(e).includes("{valueType}")){if(Array.isArray(n))return n.map(((e,t)=>(0,p.jsx)(b,{variant:"type",children:e},e+t))).reduce(((e,t)=>(0,p.jsxs)(p.Fragment,{children:[e," ",(0,p.jsx)("br",{})," ",t]})));e=n}return(0,p.jsx)(b,{variant:"type",children:e},e)}})).reduce(((e,t)=>(0,p.jsxs)(p.Fragment,{children:[e," ",(0,p.jsx)("br",{})," ",t]})))}),f&&(0,p.jsx)(i.Z,{children:h?(0,p.jsx)(b,{variant:"value",children:h}):"required"===j&&"REQUIRED"}),(0,p.jsxs)(i.Z,{children:[(!f||"deprecated"===j)&&(0,p.jsxs)("em",{children:["(",j,") "]}),(0,p.jsx)(s.D,{components:d,children:o?g(m,y):m})]})]},t)}));return(0,p.jsx)(r.ZP.ScrollView,{children:(0,p.jsxs)(h,{children:[(0,p.jsx)("thead",{children:(0,p.jsxs)(a.Z,{children:[(0,p.jsx)(c.Z,{children:"Property"}),(0,p.jsx)(c.Z,{children:"Type"}),f&&(0,p.jsx)(c.Z,{children:"Default value"}),(0,p.jsx)(c.Z,{children:"Description"})]})}),(0,p.jsx)("tbody",{children:m})]})})}function g(e,t){return t.forEach((t=>{e=e.replace(new RegExp(t,"g"),(0,l.zW)(t))})),e}function x(e){return e.includes("/")?(0,p.jsx)(s.D,{components:d,children:e}):e}},61640:function(e,t,n){n.d(t,{A:function(){return s},h:function(){return o}});const o={checked:{doc:"Determine whether the checkbox is checked or not. The default is `false`.",type:"boolean",status:"optional"},title:{doc:"The `title` of the input - describing it a bit further for accessibility reasons.",type:"ReactNode",status:"optional"},label:{doc:"Use either the `label` property or provide a custom one.",type:"ReactNode",status:"optional"},labelPosition:{doc:"Defines the position of the `label`. Use either `left` or `right`. Defaults to `right`.",type:"string",status:"optional"},labelSrOnly:{doc:"Use `true` to make the label only readable by screen readers.",type:"string",status:"optional"},size:{doc:'The size of the checkbox. For now there is "medium" (default) and "large".',type:["string","number"],status:"optional"},indeterminate:{doc:"Controls the checkbox indeterminate (partial) state.",type:"boolean",status:"optional"},status:{doc:"Text with a status message. The style defaults to an error message. You can use `true` to only get the status color, without a message.",type:"string",status:"optional"},statusState:{doc:"Defines the state of the status. Currently, there are two statuses `[error, info]`. Defaults to `error`.",type:["error","info"],status:"optional"},statusProps:{doc:"Use an object to define additional FormStatus properties. See [FormStatus](/uilib/components/form-status/properties/)",type:"FormStatusProps",status:"optional"},globalStatus:{doc:"The [configuration](/uilib/components/global-status/properties/#configuration-object) used for the target [GlobalStatus](/uilib/components/global-status)",type:"object",status:"optional"},skeleton:{doc:"If set to `true`, an overlaying skeleton with animation will be shown.",type:"boolean",status:"optional"},suffix:{doc:"Text describing the content of the Checkbox more than the label. You can also send in a React component, so it gets wrapped inside the Checkbox component.",type:"ReactNode",status:"optional"},innerRef:{doc:"By providing a React.ref we can get the internally used input element (DOM). E.g. `innerRef={myRef}` by using `React.createRef()` or `React.useRef()`.",type:"string",status:"optional"},"[Space](/uilib/layout/space/properties)":{doc:"Spacing properties like `top` or `bottom` are supported.",type:["string","object"],status:"optional"}},s={onChange:{doc:"Will be called on state changes made by the user.",type:"() => {checked: boolean; event: ChangeEvent}",status:"optional"}}},6210:function(e,t,n){var o=n(30600);t.Z=o.Z},64223:function(e,t,n){var o=n(91859);t.Z=o.Z},41676:function(e,t,n){var o=n(35610);t.Z=o.Z}}]);
//# sourceMappingURL=component---src-docs-uilib-components-checkbox-properties-mdx-fbc3dd2b7579a4f4283b.js.map