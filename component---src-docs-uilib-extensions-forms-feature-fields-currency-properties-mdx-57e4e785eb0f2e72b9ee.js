"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[9604],{65658:function(e,t,n){n.r(t);var o=n(52322),s=n(45392),r=n(85179),i=n(6024);function a(e){const t=Object.assign({h2:"h2",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",em:"em",a:"a"},(0,s.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{children:"Properties"}),"\n",(0,o.jsx)(t.h3,{children:"Field-specific props"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Property"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"currency"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"string"})}),(0,o.jsxs)(t.td,{children:[(0,o.jsx)(t.em,{children:"(optional)"})," Currency to show the value in. I.e ",(0,o.jsx)(t.code,{children:"NOK"})," or ",(0,o.jsx)(t.code,{children:"USD"}),"."]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"currencyDisplay"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"string"})}),(0,o.jsxs)(t.td,{children:[(0,o.jsx)(t.em,{children:"(optional)"})," Can be ",(0,o.jsx)(t.code,{children:"code"}),", ",(0,o.jsx)(t.code,{children:"symbol"}),", ",(0,o.jsx)(t.code,{children:"narrowSymbol"})," or ",(0,o.jsx)(t.code,{children:"name"})," (kroner)."]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"help"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"object"})}),(0,o.jsxs)(t.td,{children:[(0,o.jsx)(t.em,{children:"(optional)"})," Provide a help button. Object consisting of ",(0,o.jsx)(t.code,{children:"title"})," and ",(0,o.jsx)(t.code,{children:"content"}),"."]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.a,{href:"/uilib/extensions/forms/base-fields/Number/",children:"Number"})}),(0,o.jsx)(t.td,{children:"Various"}),(0,o.jsxs)(t.td,{children:[(0,o.jsx)(t.em,{children:"(optional)"})," All Number properties."]})]})]})]}),"\n",(0,o.jsx)(t.h3,{children:"General props"}),"\n",(0,o.jsx)(r.Z,{props:i.u,valueType:"number"})]})}t.default=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(a,e)})):a(e)}},85179:function(e,t,n){n.d(t,{Z:function(){return y}});var o=n(70894),s=n(61185),r=n(55560),i=n(41676),a=n(6210),l=n(64223),d=n(37339),c=n(595),h=n(52322);const u={...c.L,p:e=>(0,h.jsx)("span",{...e})},p=(0,o.Z)(r.ZP,{target:"e13h2c840"})({name:"1qdk5x4",styles:"td{white-space:nowrap;}"}),f="var(--color-fire-red)",b=e=>{let{variant:t,strikethrough:n,children:o,style:s={},...r}=e;if(n&&(s.textDecoration="line-through"),"string"==typeof o)switch(t){case"prop":break;case"type":s.color=o.startsWith("'")?f:"var(--color-violet)";case"value":s.color=o.startsWith("'")?f:"undefined"===o?"var(--color-black-55)":"var(--color-success-green)";default:s.background="none",s.boxShadow="none"}return u.code({children:o,style:s,...r})};function y(e){let{props:t,valueType:n="string",camelCase:o,omit:c,showDefaultValue:f=!1}=e;const y=Object.keys(t),x=Object.entries(t).map((e=>{let[t,r]=e;if(!r)return null;const{type:l,defaultValue:p,doc:x,status:m}=r;return c&&c.includes(t)?null:(0,h.jsxs)(i.Z,{children:[(0,h.jsx)(a.Z,{children:(0,h.jsx)(b,{variant:"prop",strikethrough:"deprecated"===m,children:j(o?(0,d.zW)(t):t)})}),(0,h.jsx)(a.Z,{children:(Array.isArray(l)?l:[l]).map((e=>{if("string"==typeof e){if(String(e).includes("{valueType}")){if(Array.isArray(n))return n.map(((e,t)=>(0,h.jsx)(b,{variant:"type",children:e},e+t))).reduce(((e,t)=>(0,h.jsxs)(h.Fragment,{children:[e," ",(0,h.jsx)("br",{})," ",t]})));e=n}return(0,h.jsx)(b,{variant:"type",children:e},e)}})).reduce(((e,t)=>(0,h.jsxs)(h.Fragment,{children:[e," ",(0,h.jsx)("br",{})," ",t]})))}),f&&(0,h.jsx)(a.Z,{children:p?(0,h.jsx)(b,{variant:"value",children:p}):"required"===m&&"REQUIRED"}),(0,h.jsxs)(a.Z,{children:[(!f||"deprecated"===m)&&(0,h.jsxs)("em",{children:["(",m,") "]}),(0,h.jsx)(s.D,{components:u,children:o?g(x,y):x})]})]},t)}));return(0,h.jsx)(r.ZP.ScrollView,{children:(0,h.jsxs)(p,{children:[(0,h.jsx)("thead",{children:(0,h.jsxs)(i.Z,{children:[(0,h.jsx)(l.Z,{children:"Property"}),(0,h.jsx)(l.Z,{children:"Type"}),f&&(0,h.jsx)(l.Z,{children:"Default value"}),(0,h.jsx)(l.Z,{children:"Description"})]})}),(0,h.jsx)("tbody",{children:x})]})})}function g(e,t){return t.forEach((t=>{e=e.replace(new RegExp(t,"g"),(0,d.zW)(t))})),e}function j(e){return e.includes("/")?(0,h.jsx)(s.D,{components:u,children:e}):e}},6210:function(e,t,n){var o=n(30600);t.Z=o.Z},64223:function(e,t,n){var o=n(91859);t.Z=o.Z},41676:function(e,t,n){var o=n(47048);t.Z=o.Z},6024:function(e,t,n){n.d(t,{d:function(){return s},u:function(){return o}});const o={value:{doc:"Source data value for the input.",type:"{valueType}",status:"optional"},path:{doc:"JSON Pointer for where the data for this input is located in the source dataset (when using Form.Handler or DataContext). The `path` will also be set as the `name` attribute for the [string](/uilib/extensions/forms/base-fields/String/)-field.",type:"string",status:"optional"},id:{doc:"Unique id for connecting Form.Handler and helper tools such as Form.useData.",type:"string",status:"optional"},info:{doc:"Info message shown below / after the input.",type:"React.Node",status:"optional"},warning:{doc:"Warning message shown below / after the input.",type:"React.Node",status:"optional"},error:{doc:"Error message shown below / after the input.",type:"Error",status:"optional"},disabled:{doc:"Set `true` to show the field but without the possibility of changing the value.",type:"boolean",status:"optional"},emptyValue:{doc:"The value to use (in `onChange` events etc) when emptying the field. Makes it possible for instance to provide `undefined` instead of an empty string when clearing the content of a text input.",type:"any",status:"optional"},required:{doc:"When set `true`, the input will give an error if the value cannot be empty.",type:"boolean",status:"optional"},schema:{doc:"Custom JSON Schema for validating the value.",type:"object",status:"optional"},validateInitially:{doc:"Set `true` to show validation based errors initially (from given value-prop or source data) before the user interacts with the field.",type:"boolean",status:"optional"},validateUnchanged:{doc:"Set `true` to show validation based errors when the field is touched (like focusing a field and blurring) without having changed the value. Since the user did not introduce a new error, this will apply when the value was initially invalid based on validation.",type:"boolean",status:"optional"},continuousValidation:{doc:"Set `true` to show validation based errors continuously while writing, not just when blurring the field.",type:"boolean",status:"optional"},errorMessages:{doc:"Custom error messages for each type of error, overriding default messages.",type:"object",status:"optional"},validator:{doc:"Custom validator function that will be called for every change done by the user. Can be asynchronous or synchronous.",type:"function",status:"optional"},onBlurValidator:{doc:"Custom validator function that will be called when the user leaves the field (blurring a text input, closing a dropdown etc). Can be asynchronous or synchronous.",type:"function",status:"optional"},transformIn:{doc:"transforms the `value` before its displayed in the field (e.g. input).",type:"function",status:"optional"},transformOut:{doc:"transforms the value before it gets forwarded to the form data object or returned as the `onChange` value parameter.",type:"function",status:"optional"},...n(84187).o},s={onChange:{doc:"Will be called on value changes made by the user, with the new value as argument. When an `async` function is used, the corresponding [FieldBlock](/uilib/extensions/forms/create-component/FieldBlock/) will show an indicator on the field label. You can return `{ success: 'saved' } as const` to show a success symbol, or an error or an object with these keys `{ info: 'Info message', warning: 'Warning message', error: Error('My error') } as const`.",type:"function",status:"optional"},onFocus:{doc:"Will be called when the component gets into focus. Like clicking inside a text input or opening a dropdown. Called with active value as argument.",type:"function",status:"optional"},onBlur:{doc:"Will be called when the component stop being in focus. Like when going to next field, or closing a dropdown. Called with active value as argument.",type:"function",status:"optional"}}},84187:function(e,t,n){n.d(t,{o:function(){return o}});const o={label:{doc:"Field label to show above / before the input feature.",type:"string",status:"optional"},labelDescription:{doc:'A more discreet text displayed beside the label (i.e for "(optional)").',type:"string",status:"optional"},labelSize:{doc:"Define one of the following [heading size](/uilib/elements/heading/): `medium` or `large`.",type:["string","false"],status:"optional"},layout:{doc:"Layout for the label and input. Can be `horizontal` or `vertical`.",type:"string",status:"optional"},width:{doc:"`small`, `medium`, `large`, `stretch` or `false` for predefined standard widths.",type:["string","false"],status:"optional"},contentWidth:{doc:"`small`, `medium`, `large`, `stretch` or `false` for predefined standard widths.",type:["string","false"],status:"optional"},composition:{doc:"Use `true` for when you have more than one field wrapped.",type:"string",status:"optional"},asFieldset:{doc:"Use `true` when you have several form elements. This way a `fieldset` with a `legend` is used.",type:"boolean",status:"optional"},disabled:{doc:"Set `true` to make the inner [FormLabel](/uilib/components/form-label/) behave as disabled.",type:"boolean",status:"optional"},"[Space](/uilib/layout/space/properties)":{doc:"Spacing properties like `top` or `bottom` are supported.",type:["string","object"],status:"optional"}}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-feature-fields-currency-properties-mdx-57e4e785eb0f2e72b9ee.js.map