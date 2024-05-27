"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[79987],{90702:function(e,t,o){o.r(t),o.d(t,{default:function(){return c}});var a=o(52322),n=o(45392),s=o(85179),r=o(9670),i=o(15139);const l={paths:{doc:"Define an array with JSON Pointer paths for multiple thumb buttons.",type:"Array<string>",status:"required"},min:i.h.min,max:i.h.max,step:i.h.step,vertical:i.h.vertical,reverse:i.h.reverse,stretch:i.h.stretch,hideButtons:i.h.hideButtons,multiThumbBehavior:i.h.multiThumbBehavior,thumbTitle:i.h.thumbTitle,subtractTitle:i.h.subtractTitle,addTitle:i.h.addTitle,numberFormat:i.h.numberFormat,tooltip:i.h.tooltip,alwaysShowTooltip:i.h.alwaysShowTooltip,extensions:i.h.extensions,"[Space](/uilib/layout/space/properties)":i.h["[Space](/uilib/layout/space/properties)"]};function u(e){const t=Object.assign({h2:"h2",h3:"h3"},(0,n.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{children:"Properties"}),"\n",(0,a.jsx)(t.h3,{children:"Field-specific props"}),"\n",(0,a.jsx)(s.Z,{props:l}),"\n",(0,a.jsx)(t.h3,{children:"General props"}),"\n",(0,a.jsx)(s.Z,{props:r.u,valueType:["number","Array<number>"]})]})}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(u,e)})):u(e)}},85179:function(e,t,o){o.d(t,{Z:function(){return m}});var a=o(70894),n=o(61185),s=o(55560),r=o(41676),i=o(6210),l=o(64223),u=o(37339),c=o(595),d=o(52322);const h={...c.L,p:e=>(0,d.jsx)("span",{...e})},p=(0,a.Z)(s.ZP,{target:"e13h2c840"})({name:"1qdk5x4",styles:"td{white-space:nowrap;}"}),b="var(--color-fire-red)",f=e=>{let{variant:t,strikethrough:o,children:a,style:n={},...s}=e;if(o&&(n.textDecoration="line-through"),"string"==typeof a)switch(t){case"prop":break;case"type":n.color=a.startsWith("'")?b:"var(--color-violet)";case"value":n.color=a.startsWith("'")?b:"undefined"===a?"var(--color-black-55)":"var(--color-success-green)";default:n.background="none",n.boxShadow="none"}return h.code({children:a,style:n,...s})};function m(e){let{props:t,valueType:o="string",camelCase:a,omit:c,showDefaultValue:b=!1}=e;const m=Object.keys(t),w=Object.entries(t).map((e=>{let[t,s]=e;if(!s)return null;const{type:l,defaultValue:p,doc:w,status:v}=s;return c&&c.includes(t)?null:(0,d.jsxs)(r.Z,{children:[(0,d.jsx)(i.Z,{children:(0,d.jsx)(f,{variant:"prop",strikethrough:"deprecated"===v,children:g(a?(0,u.zW)(t):t)})}),(0,d.jsx)(i.Z,{children:(Array.isArray(l)?l:[l]).map((e=>{if("string"==typeof e){if(String(e).includes("{valueType}")){if(Array.isArray(o))return o.map(((e,t)=>(0,d.jsx)(f,{variant:"type",children:e},e+t))).reduce(((e,t)=>(0,d.jsxs)(d.Fragment,{children:[e," ",(0,d.jsx)("br",{})," ",t]})));e=o}return(0,d.jsx)(f,{variant:"type",children:e},e)}})).reduce(((e,t)=>(0,d.jsxs)(d.Fragment,{children:[e," ",(0,d.jsx)("br",{})," ",t]})))}),b&&(0,d.jsx)(i.Z,{children:p?(0,d.jsx)(f,{variant:"value",children:p}):"required"===v&&"REQUIRED"}),(0,d.jsxs)(i.Z,{children:[(!b||"deprecated"===v)&&(0,d.jsxs)("em",{children:["(",v,") "]}),(0,d.jsx)(n.D,{components:h,children:a?y(w,m):w})]})]},t)}));return(0,d.jsx)(s.ZP.ScrollView,{children:(0,d.jsxs)(p,{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)(r.Z,{children:[(0,d.jsx)(l.Z,{children:"Property"}),(0,d.jsx)(l.Z,{children:"Type"}),b&&(0,d.jsx)(l.Z,{children:"Default value"}),(0,d.jsx)(l.Z,{children:"Description"})]})}),(0,d.jsx)("tbody",{children:w})]})})}function y(e,t){return t.forEach((t=>{e=e.replace(new RegExp(t,"g"),(0,u.zW)(t))})),e}function g(e){return e.includes("/")?(0,d.jsx)(n.D,{components:h,children:e}):e}},15139:function(e,t,o){o.d(t,{e:function(){return n},h:function(){return a}});const a={value:{doc:"The `value` of the slider as a number or an array. If an array with numbers is provided, each number will represent a thumb button (the `+` and `-` button will be hidden on multiple thumbs).",type:["number","Array<number>"],status:"required"},min:{doc:"The minimum value. Can be a negative number as well. Defaults to `0`.",type:"number",status:"optional"},max:{doc:"The maximum value. Defaults to `100`.",type:"number",status:"optional"},step:{doc:"The steps the slider takes on changing the value. Defaults to `null`.",type:"number",status:"optional"},vertical:{doc:"Show the slider vertically. Defaults to `false`.",type:"boolean",status:"optional"},reverse:{doc:"Show the slider reversed. Defaults to `false`.",type:"boolean",status:"optional"},stretch:{doc:"If set to `true`, then the slider will be 100% in `width`.",type:"boolean",status:"optional"},hideButtons:{doc:"Removes the helper buttons. Defaults to `false`.",type:"boolean",status:"optional"},multiThumbBehavior:{doc:"Use either `omit`, `push` or `swap`. This property only works for two (range) or more thumb buttons, while `omit` will stop the thumb from swapping, `push` will push its nearest thumb along. Defaults to `swap`.",type:"string",status:"optional"},thumbTitle:{doc:"Give the slider thumb button a title for accessibility reasons. Defaults to `null`.",type:"string",status:"optional"},subtractTitle:{doc:"Give the subtract button a title for accessibility reasons. Defaults to `−`.",type:"string",status:"optional"},addTitle:{doc:"Give the add button a title for accessibility reasons. Defaults to `+`.",type:"string",status:"optional"},numberFormat:{doc:"Will extend the return object with a `number` property (from `onChange` event). You can use all the options from the [NumberFormat](/uilib/components/number-format/properties) component. It also will use that formatted number in the increase/decrease buttons. If it has to represent a currency, then use e.g. `numberFormat={{ currency: true, decimals: 0 }}`",type:"object",status:"optional"},tooltip:{doc:"Use `true` to show a tooltip on `mouseOver`, `touchStart` and `focus`, showing the current number (if `numberFormat` is given) or the raw value.",type:"boolean",status:"optional"},alwaysShowTooltip:{doc:"Use `true` to always show the tooltip, in addition to the `tooltip` property.",type:"boolean",status:"optional"},label:{doc:"Prepends the Form Label component. If no ID is provided, a random ID is created.",type:"string",status:"optional"},labelDirection:{doc:'Use `labelDirection="vertical"` to change the label layout direction. Defaults to `horizontal`.',type:"string",status:"optional"},labelSrOnly:{doc:"Use `true` to make the label only readable by screen readers.",type:"boolean",status:"optional"},status:{doc:"Text with a status message. The style defaults to an error message. You can use `true` to only get the status color, without a message.",type:"string",status:"optional"},statusState:{doc:"Defines the state of the status. Currently, there are two statuses `[error, info]`. Defaults to `error`.",type:"string",status:"optional"},statusProps:{doc:"Use an object to define additional FormStatus properties.",type:"object",status:"optional"},globalStatusId:{doc:"The `status_id` used for the target [GlobalStatus](/uilib/components/global-status).",type:"string",status:"optional"},suffix:{doc:"Text describing the content of the Slider more than the label. You can also send in a React component, so it gets wrapped inside the Slider component.",type:"string",status:"optional"},skeleton:{doc:"If set to `true`, an overlaying skeleton with animation will be shown.",type:"boolean",status:"optional"},extensions:{doc:"Makes it possible to display overlays with other functionality such as a marker on the slider marking a given value.",type:"object",status:"optional"},"[Space](/uilib/layout/space/properties)":{doc:"Spacing properties like `top` or `bottom` are supported.",type:["string","object"],status:"optional"}},n={onChange:{doc:"will be called on state changes made by the user. The callback `value` and `rawValue` is a number `{ value, rawValue, event }`. But if the prop `numberFormat` is given, then it will return an additional `number` with the given format `{ value, number, rawValue, event }`.",type:"function",status:"optional"},onDragStart:{doc:"will be called once the user stops dragging. Returns `{ event }`.",type:"function",status:"optional"},onDragEnd:{doc:"will be called once the user starts dragging. Returns `{ event }`.",type:"function",status:"optional"}}},6210:function(e,t,o){var a=o(30600);t.Z=a.Z},64223:function(e,t,o){var a=o(91859);t.Z=a.Z},41676:function(e,t,o){var a=o(47048);t.Z=a.Z},9670:function(e,t,o){o.d(t,{d:function(){return r},u:function(){return s}});var a=o(84187),n=o(5484);const s={...n.c,...a.L},r={...n.F}},84187:function(e,t,o){o.d(t,{L:function(){return a},o:function(){return n}});const a={label:{doc:"Field label to show above / before the input feature.",type:"string",status:"optional"},labelDescription:{doc:'A more discreet text displayed beside the label (i.e for "(optional)").',type:"string",status:"optional"},layout:{doc:"Layout for the label and input. Can be `horizontal` or `vertical`.",type:"string",status:"optional"},width:{doc:"`small`, `medium`, `large`, `stretch` or `false` for predefined standard widths.",type:["string","false"],status:"optional"},contentWidth:{doc:"`small`, `medium`, `large`, `stretch` or `false` for predefined standard widths.",type:["string","false"],status:"optional"},"[Space](/uilib/layout/space/properties)":{doc:"Spacing properties like `top` or `bottom` are supported.",type:["string","object"],status:"optional"}},n={...a,labelSize:{doc:"Define one of the following [heading size](/uilib/elements/heading/): `medium` or `large`.",type:["string","false"],status:"optional"},asFieldset:{doc:"Use `true` when you have several form elements. This way a `fieldset` with a `legend` is used.",type:"boolean",status:"optional"},composition:{doc:"Use `true` for when you have more than one field wrapped.",type:"string",status:"optional"},disabled:{doc:"Set `true` to make the inner [FormLabel](/uilib/components/form-label/) behave as disabled.",type:"boolean",status:"optional"}}},5484:function(e,t,o){o.d(t,{F:function(){return n},c:function(){return a}});const a={value:{doc:"Source data value for the input.",type:"{valueType}",status:"optional"},path:{doc:"JSON Pointer for where the data for this input is located in the source dataset (when using Form.Handler or DataContext). The `path` will also be set as the `name` attribute for the [string](/uilib/extensions/forms/base-fields/String/)-field.",type:"string",status:"optional"},id:{doc:"Unique id for connecting Form.Handler and helper tools such as Form.useData.",type:"string",status:"optional"},info:{doc:"Info message shown below / after the input.",type:"React.Node",status:"optional"},warning:{doc:"Warning message shown below / after the input.",type:"React.Node",status:"optional"},error:{doc:"Error message shown below / after the input.",type:"Error",status:"optional"},disabled:{doc:"Set `true` to show the field but without the possibility of changing the value.",type:"boolean",status:"optional"},emptyValue:{doc:"The value to use (in `onChange` events etc) when emptying the field. Makes it possible for instance to provide `undefined` instead of an empty string when clearing the content of a text input.",type:"any",status:"optional"},required:{doc:"When set `true`, the input will give an error if the value cannot be empty.",type:"boolean",status:"optional"},schema:{doc:"Custom JSON Schema for validating the value.",type:"object",status:"optional"},validateInitially:{doc:"Set `true` to show validation based errors initially (from given value-prop or source data) before the user interacts with the field.",type:"boolean",status:"optional"},validateUnchanged:{doc:"Set `true` to show validation based errors when the field is touched (like focusing a field and blurring) without having changed the value. Since the user did not introduce a new error, this will apply when the value was initially invalid based on validation.",type:"boolean",status:"optional"},continuousValidation:{doc:"Set `true` to show validation based errors continuously while writing, not just when blurring the field.",type:"boolean",status:"optional"},errorMessages:{doc:"Custom error messages for each type of error, overriding default messages.",type:"object",status:"optional"},validator:{doc:"Custom validator function that will be called for every change done by the user. Can be asynchronous or synchronous.",type:"function",status:"optional"},onBlurValidator:{doc:"Custom validator function that will be called when the user leaves the field (blurring a text input, closing a dropdown etc). Can be asynchronous or synchronous.",type:"function",status:"optional"},transformIn:{doc:"transforms the `value` before its displayed in the field (e.g. input).",type:"function",status:"optional"},transformOut:{doc:"transforms the value before it gets forwarded to the form data object or returned as the `onChange` value parameter.",type:"function",status:"optional"}},n={onChange:{doc:"Will be called on value changes made by the user, with the new value as argument. When an `async` function is used, the corresponding [FieldBlock](/uilib/extensions/forms/create-component/FieldBlock/) will show an indicator on the field label. You can return `{ success: 'saved' } as const` to show a success symbol, or an error or an object with these keys `{ info: 'Info message', warning: 'Warning message', error: Error('My error') } as const`.",type:"function",status:"optional"},onFocus:{doc:"Will be called when the component gets into focus. Like clicking inside a text input or opening a dropdown. Called with active value as argument.",type:"function",status:"optional"},onBlur:{doc:"Will be called when the component stop being in focus. Like when going to next field, or closing a dropdown. Called with active value as argument.",type:"function",status:"optional"}}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-feature-fields-slider-properties-mdx-80636e9369af1a7e9263.js.map