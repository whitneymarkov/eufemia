"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[43692],{81232:function(e,t,o){o.r(t);var n=o(52322),s=o(45392),a=o(85179),i=o(6024);function r(e){const t=Object.assign({h2:"h2",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",em:"em"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{children:"Properties"}),"\n",(0,n.jsx)(t.h3,{children:"Field-specific props"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Property"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"help"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"object"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.em,{children:"(optional)"})," Provide a help button. Object consisting of ",(0,n.jsx)(t.code,{children:"title"})," and ",(0,n.jsx)(t.code,{children:"content"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"[Input](/uilib/components/input/properties)"})}),(0,n.jsx)(t.td,{children:"Various"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.em,{children:"(optional)"})," All ",(0,n.jsx)(t.code,{children:"Input"})," properties are supported."]})]})]})]}),"\n",(0,n.jsx)(t.h3,{children:"General props"}),"\n",(0,n.jsx)(a.Z,{props:i.u})]})}t.default=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(r,e)})):r(e)}},85179:function(e,t,o){o.d(t,{Z:function(){return g}});var n=o(70894),s=o(61185),a=o(55560),i=o(41676),r=o(6210),l=o(64223),d=o(37339),c=o(595),u=o(52322);const h={...c.L,p:e=>(0,u.jsx)("span",{...e})},p=(0,n.Z)(a.ZP,{target:"e13h2c840"})({name:"1qdk5x4",styles:"td{white-space:nowrap;}"}),f="var(--color-fire-red)",b=e=>{let{variant:t,strikethrough:o,children:n,style:s={},...a}=e;if(o&&(s.textDecoration="line-through"),"string"==typeof n)switch(t){case"prop":break;case"type":s.color=n.startsWith("'")?f:"var(--color-violet)";case"value":s.color=n.startsWith("'")?f:"undefined"===n?"var(--color-black-55)":"var(--color-success-green)";default:s.background="none",s.boxShadow="none"}return h.code({children:n,style:s,...a})};function g(e){let{props:t,valueType:o="string",camelCase:n,omit:c,showDefaultValue:f=!1}=e;const g=Object.keys(t),w=Object.entries(t).map((e=>{let[t,{type:a,defaultValue:l,doc:p,status:w}]=e;return c&&c.includes(t)?null:(0,u.jsxs)(i.Z,{children:[(0,u.jsx)(r.Z,{children:(0,u.jsx)(b,{variant:"prop",strikethrough:"deprecated"===w,children:m(n?(0,d.zW)(t):t)})}),(0,u.jsx)(r.Z,{children:(Array.isArray(a)?a:[a]).map((e=>{if("string"==typeof e)return String(e).includes("{valueType}")&&(e=o),(0,u.jsx)(b,{variant:"type",children:e},e)})).reduce(((e,t)=>(0,u.jsxs)(u.Fragment,{children:[e," ",(0,u.jsx)("br",{})," ",t]})))}),f&&(0,u.jsx)(r.Z,{children:l?(0,u.jsx)(b,{variant:"value",children:l}):"required"===w&&"REQUIRED"}),(0,u.jsxs)(r.Z,{children:[(!f||"deprecated"===w)&&(0,u.jsxs)("em",{children:["(",w,") "]}),(0,u.jsx)(s.D,{components:h,children:n?y(p,g):p})]})]},t)}));return(0,u.jsx)(a.ZP.ScrollView,{children:(0,u.jsxs)(p,{children:[(0,u.jsx)("thead",{children:(0,u.jsxs)(i.Z,{children:[(0,u.jsx)(l.Z,{children:"Property"}),(0,u.jsx)(l.Z,{children:"Type"}),f&&(0,u.jsx)(l.Z,{children:"Default value"}),(0,u.jsx)(l.Z,{children:"Description"})]})}),(0,u.jsx)("tbody",{children:w})]})})}function y(e,t){return t.forEach((t=>{e=e.replace(new RegExp(t,"g"),(0,d.zW)(t))})),e}function m(e){return e.includes("/")?(0,u.jsx)(s.D,{components:h,children:e}):e}},6210:function(e,t,o){var n=o(30600);t.Z=n.Z},64223:function(e,t,o){var n=o(91859);t.Z=n.Z},41676:function(e,t,o){var n=o(47048);t.Z=n.Z},6024:function(e,t,o){o.d(t,{d:function(){return s},u:function(){return n}});const n={value:{doc:"Source data value for the input.",type:"{valueType}",status:"optional"},path:{doc:"JSON Pointer for where the data for this input is located in the source dataset (when using Form.Handler or DataContext). The `path` will also be set as the `name` attribute for the [string](/uilib/extensions/forms/base-fields/String/)-field.",type:"string",status:"optional"},id:{doc:"Unique id for connecting Form.Handler and helper tools such as Form.useData.",type:"string",status:"optional"},info:{doc:"Info message shown below / after the input.",type:"React.Node",status:"optional"},warning:{doc:"Warning message shown below / after the input.",type:"React.Node",status:"optional"},error:{doc:"Error message shown below / after the input.",type:"Error",status:"optional"},disabled:{doc:"Set `true` to show the field but without the possibility of changing the value.",type:"boolean",status:"optional"},emptyValue:{doc:"The value to use (in `onChange` events etc) when emptying the field. Makes it possible for instance to provide `undefined` instead of an empty string when clearing the content of a text input.",type:"any",status:"optional"},required:{doc:"When set `true`, the input will give an error if the value cannot be empty.",type:"boolean",status:"optional"},schema:{doc:"Custom JSON Schema for validating the value.",type:"object",status:"optional"},validateInitially:{doc:"Set `true` to show validation based errors initially (from given value-prop or source data) before the user interacts with the field.",type:"boolean",status:"optional"},validateUnchanged:{doc:"Set `true` to show validation based errors when the field is touched (like focusing a field and blurring) without having changed the value. Since the user did not introduce a new error, this will apply when the value was initially invalid based on validation.",type:"boolean",status:"optional"},continuousValidation:{doc:"Set `true` to show validation based errors continuously while writing, not just when blurring the field.",type:"boolean",status:"optional"},errorMessages:{doc:"Custom error messages for each type of error, overriding default messages.",type:"object",status:"optional"},validator:{doc:"Custom validator function that will be called for every change done by the user. Can be asynchronous or synchronous.",type:"function",status:"optional"},onBlurValidator:{doc:"Custom validator function that will be called when the user leaves the field (blurring a text input, closing a dropdown etc). Can be asynchronous or synchronous.",type:"function",status:"optional"},transformIn:{doc:"transforms the `value` before its displayed in the field (e.g. input).",type:"function",status:"optional"},transformOut:{doc:"transforms the value before it gets forwarded to the form data object or returned as the `onChange` value parameter.",type:"function",status:"optional"},...o(84187).o},s={onChange:{doc:"Will be called on value changes made by the user, with the new value as argument. When an `async` function is used, the corresponding [FieldBlock](/uilib/extensions/forms/create-component/FieldBlock/) will show an indicator on the field label. You can return `{ success: 'saved' } as const` to show a success symbol, or an error or an object with these keys `{ info: 'Info message', warning: 'Warning message', error: Error('My error') } as const`.",type:"function",status:"optional"},onFocus:{doc:"Will be called when the component gets into focus. Like clicking inside a text input or opening a dropdown. Called with active value as argument.",type:"function",status:"optional"},onBlur:{doc:"Will be called when the component stop being in focus. Like when going to next field, or closing a dropdown. Called with active value as argument.",type:"function",status:"optional"}}},84187:function(e,t,o){o.d(t,{o:function(){return n}});const n={label:{doc:"Field label to show above / before the input feature.",type:"string",status:"optional"},labelDescription:{doc:'A more discreet text displayed beside the label (i.e for "(optional)").',type:"string",status:"optional"},labelSize:{doc:"Define one of the following [heading size](/uilib/elements/heading/): `medium` or `large`.",type:["string","false"],status:"optional"},layout:{doc:"Layout for the label and input. Can be `horizontal` or `vertical`.",type:"string",status:"optional"},width:{doc:"`small`, `medium`, `large`, `stretch` or `false` for predefined standard widths.",type:["string","false"],status:"optional"},contentWidth:{doc:"`small`, `medium`, `large`, `stretch` or `false` for predefined standard widths.",type:["string","false"],status:"optional"},composition:{doc:"Use `true` for when you have more than one field wrapped.",type:"string",status:"optional"},asFieldset:{doc:"Use `true` when you have several form elements. This way a `fieldset` with a `legend` is used.",type:"boolean",status:"optional"},disabled:{doc:"Set `true` to make the inner [FormLabel](/uilib/components/form-label/) behave as disabled.",type:"boolean",status:"optional"},"[Space](/uilib/layout/space/properties)":{doc:"Spacing properties like `top` or `bottom` are supported.",type:["string","object"],status:"optional"}}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-feature-fields-email-properties-mdx-9bd18a8f4732b473a3ee.js.map