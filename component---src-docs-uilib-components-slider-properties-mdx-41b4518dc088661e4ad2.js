"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[33925],{67425:function(e,t,o){o.r(t);var n=o(52322),s=o(45392),r=o(85179),a=o(15139);function i(e){const t=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{children:"Properties"}),"\n",(0,n.jsx)(r.ZP,{props:a.h}),"\n",(0,n.jsx)(t.h2,{children:"Extensions"}),"\n",(0,n.jsx)(t.p,{children:"A Slider Extension should be an object with the following properties:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import Slider, { SliderMarker } from '@dnb/eufemia/components/Slider'\n\nrender(\n  <Slider\n    extensions={{\n      marker: {\n        instance: SliderMarker,\n        value: 50,\n      },\n    }}\n  />,\n)\n"})})]})}t.default=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(i,e)})):i(e)}},85179:function(e,t,o){o.d(t,{Kw:function(){return m},ZP:function(){return f}});var n=o(70894),s=o(61185),r=o(55560),a=o(41676),i=o(6210),l=o(64223),u=o(37339),c=o(595),p=o(52322);const d={...c.L,p:e=>(0,p.jsx)("span",{...e})},h=(0,n.Z)(r.ZP,{target:"e13h2c840"})({name:"1qdk5x4",styles:"td{white-space:nowrap;}"}),b="var(--color-fire-red)",m=e=>{let{variant:t,strikethrough:o,children:n,style:s={},...r}=e;if(o&&(s.textDecoration="line-through"),"string"==typeof n)switch(t){case"prop":break;case"type":s.color=n.startsWith("'")?b:"var(--color-violet)";case"value":s.color=n.startsWith("'")?b:"undefined"===n||"null"===n?"var(--color-black-55)":"var(--color-success-green)";default:s.background="none",s.boxShadow="none"}return d.code({children:n,style:s,...r})};function f(e){let{props:t,valueType:o="string",camelCase:n,omit:c,showDefaultValue:b=!1}=e;const f=Object.keys(t||{}),v=Object.entries(t||{}).map((e=>{let[t,r]=e;if(!r)return null;const{type:l,defaultValue:h,doc:v,status:w}=r;return c&&c.includes(t)?null:(0,p.jsxs)(a.Z,{children:[(0,p.jsx)(i.Z,{children:(0,p.jsx)(m,{variant:"prop",strikethrough:"deprecated"===w,children:g(n?(0,u.zW)(t):t)})}),(0,p.jsx)(i.Z,{children:(Array.isArray(l)?l:[l]).map((e=>{if("string"==typeof e){if(String(e).includes("{valueType}")){if(Array.isArray(o))return o.map(((e,t)=>(0,p.jsx)(m,{variant:"type",children:e},e+t))).reduce(((e,t)=>(0,p.jsxs)(p.Fragment,{children:[e," ",(0,p.jsx)("br",{})," ",t]})));e=o}return(0,p.jsx)(m,{variant:"type",children:e},e)}})).reduce(((e,t)=>(0,p.jsxs)(p.Fragment,{children:[e," ",(0,p.jsx)("br",{})," ",t]})))}),b&&(0,p.jsx)(i.Z,{children:h?(0,p.jsx)(m,{variant:"value",children:h}):"required"===w&&"REQUIRED"}),(0,p.jsxs)(i.Z,{children:[(!b||"deprecated"===w)&&(0,p.jsxs)("em",{children:["(",w,") "]}),(0,p.jsx)(s.D,{components:d,children:n?y(v,f):v})]})]},t)}));return(0,p.jsx)(r.ZP.ScrollView,{children:(0,p.jsxs)(h,{children:[(0,p.jsx)("thead",{children:(0,p.jsxs)(a.Z,{children:[(0,p.jsx)(l.Z,{children:"Property"}),(0,p.jsx)(l.Z,{children:"Type"}),b&&(0,p.jsx)(l.Z,{children:"Default value"}),(0,p.jsx)(l.Z,{children:"Description"})]})}),(0,p.jsx)("tbody",{children:v})]})})}function y(e,t){return t.forEach((t=>{e=e.replace(new RegExp(t,"g"),(0,u.zW)(t))})),e}function g(e){return e.includes("/")?(0,p.jsx)(s.D,{components:d,children:e}):e}},15139:function(e,t,o){o.d(t,{e:function(){return s},h:function(){return n}});const n={value:{doc:"The `value` of the slider as a number or an array. If an array with numbers is provided, each number will represent a thumb button (the `+` and `-` button will be hidden on multiple thumbs).",type:["number","Array<number>"],status:"required"},min:{doc:"The minimum value. Can be a negative number as well. Defaults to `0`.",type:"number",status:"optional"},max:{doc:"The maximum value. Defaults to `100`.",type:"number",status:"optional"},step:{doc:"The steps the slider takes on changing the value. Defaults to `null`.",type:"number",status:"optional"},vertical:{doc:"Show the slider vertically. Defaults to `false`.",type:"boolean",status:"optional"},reverse:{doc:"Show the slider reversed. Defaults to `false`.",type:"boolean",status:"optional"},stretch:{doc:"If set to `true`, then the slider will be 100% in `width`.",type:"boolean",status:"optional"},hideButtons:{doc:"Removes the helper buttons. Defaults to `false`.",type:"boolean",status:"optional"},multiThumbBehavior:{doc:"Use either `omit`, `push` or `swap`. This property only works for two (range) or more thumb buttons, while `omit` will stop the thumb from swapping, `push` will push its nearest thumb along. Defaults to `swap`.",type:"string",status:"optional"},thumbTitle:{doc:"Give the slider thumb button a title for accessibility reasons. Defaults to `null`.",type:"string",status:"optional"},subtractTitle:{doc:"Give the subtract button a title for accessibility reasons. Defaults to `−`.",type:"string",status:"optional"},addTitle:{doc:"Give the add button a title for accessibility reasons. Defaults to `+`.",type:"string",status:"optional"},numberFormat:{doc:"Will extend the return object with a `number` property (from `onChange` event). You can use all the options from the [NumberFormat](/uilib/components/number-format/properties) component. It also will use that formatted number in the increase/decrease buttons. If it has to represent a currency, then use e.g. `numberFormat={{ currency: true, decimals: 0 }}`",type:"object",status:"optional"},tooltip:{doc:"Use `true` to show a tooltip on `mouseOver`, `touchStart` and `focus`, showing the current number (if `numberFormat` is given) or the raw value.",type:"boolean",status:"optional"},alwaysShowTooltip:{doc:"Use `true` to always show the tooltip, in addition to the `tooltip` property.",type:"boolean",status:"optional"},label:{doc:"Prepends the Form Label component. If no ID is provided, a random ID is created.",type:"string",status:"optional"},labelDirection:{doc:'Use `labelDirection="vertical"` to change the label layout direction. Defaults to `horizontal`.',type:"string",status:"optional"},labelSrOnly:{doc:"Use `true` to make the label only readable by screen readers.",type:"boolean",status:"optional"},status:{doc:"Text with a status message. The style defaults to an error message. You can use `true` to only get the status color, without a message.",type:"string",status:"optional"},statusState:{doc:"Defines the state of the status. Currently, there are two statuses `[error, info]`. Defaults to `error`.",type:"string",status:"optional"},statusProps:{doc:"Use an object to define additional FormStatus properties.",type:"object",status:"optional"},globalStatusId:{doc:"The `status_id` used for the target [GlobalStatus](/uilib/components/global-status).",type:"string",status:"optional"},suffix:{doc:"Text describing the content of the Slider more than the label. You can also send in a React component, so it gets wrapped inside the Slider component.",type:"string",status:"optional"},skeleton:{doc:"If set to `true`, an overlaying skeleton with animation will be shown.",type:"boolean",status:"optional"},extensions:{doc:"Makes it possible to display overlays with other functionality such as a marker on the slider marking a given value.",type:"object",status:"optional"},"[Space](/uilib/layout/space/properties)":{doc:"Spacing properties like `top` or `bottom` are supported.",type:["string","object"],status:"optional"}},s={onChange:{doc:"will be called on state changes made by the user. The callback `value` and `rawValue` is a number `{ value, rawValue, event }`. But if the prop `numberFormat` is given, then it will return an additional `number` with the given format `{ value, number, rawValue, event }`.",type:"function",status:"optional"},onDragStart:{doc:"will be called once the user stops dragging. Returns `{ event }`.",type:"function",status:"optional"},onDragEnd:{doc:"will be called once the user starts dragging. Returns `{ event }`.",type:"function",status:"optional"}}},6210:function(e,t,o){var n=o(30600);t.Z=n.Z},64223:function(e,t,o){var n=o(91859);t.Z=n.Z},41676:function(e,t,o){var n=o(35610);t.Z=n.Z}}]);
//# sourceMappingURL=component---src-docs-uilib-components-slider-properties-mdx-41b4518dc088661e4ad2.js.map