"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[82074],{5228:function(e,t,o){o.r(t);var n=o(52322),a=o(45392),i=o(85179),r=o(9670);function s(e){const t=Object.assign({h2:"h2"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{children:"Events"}),"\n",(0,n.jsx)(i.ZP,{props:r.d9})]})}t.default=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(s,e)})):s(e)}},85179:function(e,t,o){o.d(t,{Kw:function(){return g},ZP:function(){return v}});var n=o(70894),a=o(61185),i=o(55560),r=o(41676),s=o(6210),l=o(64223),d=o(37339),u=o(595),c=o(52322);const h={...u.L,p:e=>(0,c.jsx)("span",{...e})},p=(0,n.Z)(i.ZP,{target:"e13h2c840"})({name:"1qdk5x4",styles:"td{white-space:nowrap;}"}),f="var(--color-fire-red)",g=e=>{let{variant:t,strikethrough:o,children:n,style:a={},...i}=e;if(o&&(a.textDecoration="line-through"),"string"==typeof n)switch(t){case"prop":break;case"type":a.color=n.startsWith("'")?f:"var(--color-violet)";case"value":a.color=n.startsWith("'")?f:"undefined"===n||"null"===n?"var(--color-black-55)":"var(--color-success-green)";default:a.background="none",a.boxShadow="none"}return h.code({children:n,style:a,...i})};function v(e){let{props:t,valueType:o="string",camelCase:n,omit:u,showDefaultValue:f=!1}=e;const v=Object.keys(t||{}),m=Object.entries(t||{}).map((e=>{let[t,i]=e;if(!i)return null;const{type:l,defaultValue:p,doc:m,status:w}=i;return u&&u.includes(t)?null:(0,c.jsxs)(r.Z,{children:[(0,c.jsx)(s.Z,{children:(0,c.jsx)(g,{variant:"prop",strikethrough:"deprecated"===w,children:b(n?(0,d.zW)(t):t)})}),(0,c.jsx)(s.Z,{children:(Array.isArray(l)?l:[l]).map((e=>{if("string"==typeof e){if(String(e).includes("{valueType}")){if(Array.isArray(o))return o.map(((e,t)=>(0,c.jsx)(g,{variant:"type",children:e},e+t))).reduce(((e,t)=>(0,c.jsxs)(c.Fragment,{children:[e," ",(0,c.jsx)("br",{})," ",t]})));e=o}return(0,c.jsx)(g,{variant:"type",children:e},e)}})).reduce(((e,t)=>(0,c.jsxs)(c.Fragment,{children:[e," ",(0,c.jsx)("br",{})," ",t]})))}),f&&(0,c.jsx)(s.Z,{children:p?(0,c.jsx)(g,{variant:"value",children:p}):"required"===w&&"REQUIRED"}),(0,c.jsxs)(s.Z,{children:[(!f||"deprecated"===w)&&(0,c.jsxs)("em",{children:["(",w,") "]}),(0,c.jsx)(a.D,{components:h,children:n?y(m,v):m})]})]},t)}));return(0,c.jsx)(i.ZP.ScrollView,{children:(0,c.jsxs)(p,{children:[(0,c.jsx)("thead",{children:(0,c.jsxs)(r.Z,{children:[(0,c.jsx)(l.Z,{children:"Property"}),(0,c.jsx)(l.Z,{children:"Type"}),f&&(0,c.jsx)(l.Z,{children:"Default value"}),(0,c.jsx)(l.Z,{children:"Description"})]})}),(0,c.jsx)("tbody",{children:m})]})})}function y(e,t){return t.forEach((t=>{e=e.replace(new RegExp(t,"g"),(0,d.zW)(t))})),e}function b(e){return e.includes("/")?(0,c.jsx)(a.D,{components:h,children:e}):e}},6210:function(e,t,o){var n=o(30600);t.Z=n.Z},64223:function(e,t,o){var n=o(91859);t.Z=n.Z},41676:function(e,t,o){var n=o(35610);t.Z=n.Z},9670:function(e,t,o){o.d(t,{EU:function(){return s},d9:function(){return r},uD:function(){return i}});var n=o(84187),a=o(5484);const i={...a.c,...n.L},r={...a.F},s=function(e,t){void 0===e&&(e=void 0),void 0===t&&(t=void 0);const o=`(${e?`value${e.optional?"?":""}: ${e.type}`:"value"}${t?`, additionalArgs${t.optional?"?":""}: ${t.type}`:""}) => void`;return{...r,onChange:{...r.onChange,type:o},onFocus:{...r.onFocus,type:o},onBlur:{...r.onBlur,type:o}}}},84187:function(e,t,o){o.d(t,{L:function(){return n},o:function(){return a}});const n={label:{doc:"Field label to show above / before the input feature.",type:"string",status:"optional"},labelDescription:{doc:'A more discreet text displayed beside the label (i.e for "(optional)").',type:"string",status:"optional"},labelSrOnly:{doc:"Use `true` to make the label only readable by screen readers.",type:"boolean",status:"optional"},layout:{doc:"Layout for the label and input. Can be `horizontal` or `vertical`.",type:"string",status:"optional"},width:{doc:"`small`, `medium`, `large`, `stretch` or `false` for predefined standard widths.",type:["string","false"],status:"optional"},contentWidth:{doc:"`small`, `medium`, `large`, `stretch` or `false` for predefined standard widths.",type:["string","false"],status:"optional"},"[Space](/uilib/layout/space/properties)":{doc:"Spacing properties like `top` or `bottom` are supported.",type:["string","object"],status:"optional"}},a={...n,labelSize:{doc:"Define one of the following [heading sizes](/uilib/elements/heading/): `medium` or `large`.",type:["string","false"],status:"optional"},asFieldset:{doc:"Use `true` when you have several form elements. This way a `fieldset` with a `legend` is used.",type:"boolean",status:"optional"},align:{doc:"`center` or `bottom` for aligning the contents vertically. Defaults to `bottom`.",type:["string","false"],status:"optional"},composition:{doc:"Use `true` for when you have more than one field wrapped.",type:"string",status:"optional"},disabled:{doc:"Set `true` to make the inner [FormLabel](/uilib/components/form-label/) behave as disabled.",type:"boolean",status:"optional"}}},5484:function(e,t,o){o.d(t,{F:function(){return a},c:function(){return n}});const n={value:{doc:"Source data value for the field. Will take precedence over the path value given in the data context.",type:"{valueType}",status:"optional"},defaultValue:{doc:"Default source data value for the field. Will not take precedence over the path value given in the data context.",type:"{valueType}",status:"optional"},path:{doc:"JSON Pointer for where the data for the field is located in the source dataset (when using Form.Handler or DataContext). The `path` will also be set as the `name` attribute for the [string](/uilib/extensions/forms/base-fields/String/)-field.",type:"string",status:"optional"},info:{doc:"Info message shown below / after the field.",type:"React.Node",status:"optional"},warning:{doc:"Warning message shown below / after the field.",type:"React.Node",status:"optional"},error:{doc:"Error message shown below / after the field.",type:"Error",status:"optional"},disabled:{doc:"Set `true` to show the field but without the possibility of changing the value.",type:"boolean",status:"optional"},emptyValue:{doc:"The value to use (in `onChange` events etc) when emptying the field. Makes it possible for instance to provide `undefined` instead of an empty string when clearing the content of a text input.",type:["{valueType}","undefined"],status:"optional"},required:{doc:'When set to `true`, the field will give an error if the value fails the required validation. When set to `false`, the field will not be required, but will add a "(optional)" suffix to the label.',type:"boolean",status:"optional"},labelSuffix:{doc:'Will append an additional text to the label, like "(optional)". When using `inheritLabel`, the suffix will not be inherited. NB: The visual appearance of the `labelSuffix` may change in the future.',type:"React.Node",status:"optional"},schema:{doc:"Custom JSON Schema for validating the value.",type:"object",status:"optional"},validateInitially:{doc:"Set to `true` to show validation based errors initially (from given value-prop or source data) before the user interacts with the field.",type:"boolean",status:"optional"},validateUnchanged:{doc:"Set to `true` to show validation based errors when the field is touched (like focusing a field and blurring) without having changed the value. Since the user did not introduce a new error, this will apply when the value was initially invalid based on validation.",type:"boolean",status:"optional"},continuousValidation:{doc:"Set to `true` to show validation based errors continuously while writing, not just when blurring the field.",type:"boolean",status:"optional"},errorMessages:{doc:"Custom error messages for each type of error, overriding default messages.",type:"object",status:"optional"},validator:{doc:"Custom validator function that is triggered on every change done by the user. The function can be either asynchronous or synchronous. The first parameter is the value, and the second parameter returns an object containing { errorMessages, connectWithPath, validators }.",type:"function",status:"optional"},onBlurValidator:{doc:"Custom validator function that is triggered when the user leaves a field (e.g., blurring a text input or closing a dropdown). The function can be either asynchronous or synchronous. The first parameter is the value, and the second parameter returns an object containing { errorMessages, connectWithPath, validators }.",type:"function",status:"optional"},transformIn:{doc:"Transforms the `value` before its displayed in the field (e.g. input).",type:"function",status:"optional"},transformOut:{doc:"Transforms the value before it gets forwarded to the form data object or returned as the `onChange` value parameter.",type:"function",status:"optional"}},a={onChange:{doc:"Will be called on value changes made by the user, with the new value as argument. When an `async` function is used, the corresponding [FieldBlock](/uilib/extensions/forms/create-component/FieldBlock/) will show an indicator on the field label. You can return `{ success: 'saved' } as const` to show a success symbol, or an error or an object with these keys `{ info: 'Info message', warning: 'Warning message', error: Error('My error') } as const`.",type:"(value) => void",status:"optional"},onFocus:{doc:"Will be called when the component gets into focus. Like clicking inside a text input or opening a dropdown. Called with active value as argument.",type:"(value) => void",status:"optional"},onBlur:{doc:"Will be called when the component stop being in focus. Like when going to next field, or closing a dropdown. Called with active value as argument.",type:"(value) => void",status:"optional"}}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-feature-fields-currency-events-mdx-654e1225a3c8a582d556.js.map