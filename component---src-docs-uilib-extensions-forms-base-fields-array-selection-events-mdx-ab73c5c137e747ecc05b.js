"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[94335],{90902:function(e,t,o){o.r(t);var n=o(52322),a=o(45392),r=o(85179),s=o(9670);function i(e){const t=Object.assign({h2:"h2"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{children:"Events"}),"\n",(0,n.jsx)(r.ZP,{props:s.d})]})}t.default=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(i,e)})):i(e)}},85179:function(e,t,o){o.d(t,{Kw:function(){return g},ZP:function(){return y}});var n=o(70894),a=o(61185),r=o(55560),s=o(41676),i=o(6210),l=o(64223),c=o(37339),d=o(595),u=o(52322);const h={...d.L,p:e=>(0,u.jsx)("span",{...e})},p=(0,n.Z)(r.ZP,{target:"e13h2c840"})({name:"1qdk5x4",styles:"td{white-space:nowrap;}"}),f="var(--color-fire-red)",g=e=>{let{variant:t,strikethrough:o,children:n,style:a={},...r}=e;if(o&&(a.textDecoration="line-through"),"string"==typeof n)switch(t){case"prop":break;case"type":a.color=n.startsWith("'")?f:"var(--color-violet)";case"value":a.color=n.startsWith("'")?f:"undefined"===n||"null"===n?"var(--color-black-55)":"var(--color-success-green)";default:a.background="none",a.boxShadow="none"}return h.code({children:n,style:a,...r})};function y(e){let{props:t,valueType:o="string",camelCase:n,omit:d,showDefaultValue:f=!1}=e;const y=Object.keys(t||{}),m=Object.entries(t||{}).map((e=>{let[t,r]=e;if(!r)return null;const{type:l,defaultValue:p,doc:m,status:w}=r;return d&&d.includes(t)?null:(0,u.jsxs)(s.Z,{children:[(0,u.jsx)(i.Z,{children:(0,u.jsx)(g,{variant:"prop",strikethrough:"deprecated"===w,children:v(n?(0,c.zW)(t):t)})}),(0,u.jsx)(i.Z,{children:(Array.isArray(l)?l:[l]).map((e=>{if("string"==typeof e){if(String(e).includes("{valueType}")){if(Array.isArray(o))return o.map(((e,t)=>(0,u.jsx)(g,{variant:"type",children:e},e+t))).reduce(((e,t)=>(0,u.jsxs)(u.Fragment,{children:[e," ",(0,u.jsx)("br",{})," ",t]})));e=o}return(0,u.jsx)(g,{variant:"type",children:e},e)}})).reduce(((e,t)=>(0,u.jsxs)(u.Fragment,{children:[e," ",(0,u.jsx)("br",{})," ",t]})))}),f&&(0,u.jsx)(i.Z,{children:p?(0,u.jsx)(g,{variant:"value",children:p}):"required"===w&&"REQUIRED"}),(0,u.jsxs)(i.Z,{children:[(!f||"deprecated"===w)&&(0,u.jsxs)("em",{children:["(",w,") "]}),(0,u.jsx)(a.D,{components:h,children:n?b(m,y):m})]})]},t)}));return(0,u.jsx)(r.ZP.ScrollView,{children:(0,u.jsxs)(p,{children:[(0,u.jsx)("thead",{children:(0,u.jsxs)(s.Z,{children:[(0,u.jsx)(l.Z,{children:"Property"}),(0,u.jsx)(l.Z,{children:"Type"}),f&&(0,u.jsx)(l.Z,{children:"Default value"}),(0,u.jsx)(l.Z,{children:"Description"})]})}),(0,u.jsx)("tbody",{children:m})]})})}function b(e,t){return t.forEach((t=>{e=e.replace(new RegExp(t,"g"),(0,c.zW)(t))})),e}function v(e){return e.includes("/")?(0,u.jsx)(a.D,{components:h,children:e}):e}},6210:function(e,t,o){var n=o(30600);t.Z=n.Z},64223:function(e,t,o){var n=o(91859);t.Z=n.Z},41676:function(e,t,o){var n=o(35610);t.Z=n.Z},9670:function(e,t,o){o.d(t,{d:function(){return s},u:function(){return r}});var n=o(84187),a=o(5484);const r={...a.c,...n.L},s={...a.F}},84187:function(e,t,o){o.d(t,{L:function(){return n},o:function(){return a}});const n={label:{doc:"Field label to show above / before the input feature.",type:"string",status:"optional"},labelDescription:{doc:'A more discreet text displayed beside the label (i.e for "(optional)").',type:"string",status:"optional"},labelSrOnly:{doc:"Use `true` to make the label only readable by screen readers.",type:"boolean",status:"optional"},layout:{doc:"Layout for the label and input. Can be `horizontal` or `vertical`.",type:"string",status:"optional"},width:{doc:"`small`, `medium`, `large`, `stretch` or `false` for predefined standard widths.",type:["string","false"],status:"optional"},contentWidth:{doc:"`small`, `medium`, `large`, `stretch` or `false` for predefined standard widths.",type:["string","false"],status:"optional"},"[Space](/uilib/layout/space/properties)":{doc:"Spacing properties like `top` or `bottom` are supported.",type:["string","object"],status:"optional"}},a={...n,labelSize:{doc:"Define one of the following [heading size](/uilib/elements/heading/): `medium` or `large`.",type:["string","false"],status:"optional"},asFieldset:{doc:"Use `true` when you have several form elements. This way a `fieldset` with a `legend` is used.",type:"boolean",status:"optional"},align:{doc:"`center` or `bottom` for aligning the contents vertically. Defaults to `bottom`.",type:["string","false"],status:"optional"},composition:{doc:"Use `true` for when you have more than one field wrapped.",type:"string",status:"optional"},disabled:{doc:"Set `true` to make the inner [FormLabel](/uilib/components/form-label/) behave as disabled.",type:"boolean",status:"optional"}}},5484:function(e,t,o){o.d(t,{F:function(){return a},c:function(){return n}});const n={value:{doc:"Source data value for the field Will take precedence over the path value given in the data context..",type:"{valueType}",status:"optional"},defaultValue:{doc:"Default source data value for the field. Will not take precedence over the path value given in the data context.",type:"{valueType}",status:"optional"},path:{doc:"JSON Pointer for where the data for the field is located in the source dataset (when using Form.Handler or DataContext). The `path` will also be set as the `name` attribute for the [string](/uilib/extensions/forms/base-fields/String/)-field.",type:"string",status:"optional"},info:{doc:"Info message shown below / after the field.",type:"React.Node",status:"optional"},warning:{doc:"Warning message shown below / after the field.",type:"React.Node",status:"optional"},error:{doc:"Error message shown below / after the field.",type:"Error",status:"optional"},disabled:{doc:"Set `true` to show the field but without the possibility of changing the value.",type:"boolean",status:"optional"},emptyValue:{doc:"The value to use (in `onChange` events etc) when emptying the field. Makes it possible for instance to provide `undefined` instead of an empty string when clearing the content of a text input.",type:["{valueType}","undefined"],status:"optional"},required:{doc:"When set `true`, the field will give an error if the value cannot be empty.",type:"boolean",status:"optional"},schema:{doc:"Custom JSON Schema for validating the value.",type:"object",status:"optional"},validateInitially:{doc:"Set `true` to show validation based errors initially (from given value-prop or source data) before the user interacts with the field.",type:"boolean",status:"optional"},validateUnchanged:{doc:"Set `true` to show validation based errors when the field is touched (like focusing a field and blurring) without having changed the value. Since the user did not introduce a new error, this will apply when the value was initially invalid based on validation.",type:"boolean",status:"optional"},continuousValidation:{doc:"Set `true` to show validation based errors continuously while writing, not just when blurring the field.",type:"boolean",status:"optional"},errorMessages:{doc:"Custom error messages for each type of error, overriding default messages.",type:"object",status:"optional"},validator:{doc:"Custom validator function that will be called for every change done by the user. Can be asynchronous or synchronous.",type:"function",status:"optional"},onBlurValidator:{doc:"Custom validator function that will be called when the user leaves the field (blurring a text input, closing a dropdown etc). Can be asynchronous or synchronous.",type:"function",status:"optional"},transformIn:{doc:"transforms the `value` before its displayed in the field (e.g. input).",type:"function",status:"optional"},transformOut:{doc:"transforms the value before it gets forwarded to the form data object or returned as the `onChange` value parameter.",type:"function",status:"optional"}},a={onChange:{doc:"Will be called on value changes made by the user, with the new value as argument. When an `async` function is used, the corresponding [FieldBlock](/uilib/extensions/forms/create-component/FieldBlock/) will show an indicator on the field label. You can return `{ success: 'saved' } as const` to show a success symbol, or an error or an object with these keys `{ info: 'Info message', warning: 'Warning message', error: Error('My error') } as const`.",type:"function",status:"optional"},onFocus:{doc:"Will be called when the component gets into focus. Like clicking inside a text input or opening a dropdown. Called with active value as argument.",type:"function",status:"optional"},onBlur:{doc:"Will be called when the component stop being in focus. Like when going to next field, or closing a dropdown. Called with active value as argument.",type:"function",status:"optional"}}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-base-fields-array-selection-events-mdx-ab73c5c137e747ecc05b.js.map