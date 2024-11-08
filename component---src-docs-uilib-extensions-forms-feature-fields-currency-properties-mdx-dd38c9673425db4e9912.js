"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[9604],{65658:function(e,t,o){o.r(t);var a=o(52322),n=o(45392),s=o(68230),i=o(85179),l=o(9670),r=o(1432);function u(e){const t=Object.assign({h2:"h2",h3:"h3"},(0,n.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{children:"Properties"}),"\n",(0,a.jsx)(t.h3,{children:"Field-specific properties"}),"\n",(0,a.jsx)(i.ZP,{props:r.a,valueType:"number"}),"\n",(0,a.jsx)(t.h3,{children:"General properties"}),"\n",(0,a.jsx)(i.ZP,{props:l.sP,valueType:"number"}),"\n",(0,a.jsx)(t.h2,{children:"Translations"}),"\n",(0,a.jsx)(s.Z,{localeKey:["NumberField","Field"]})]})}t.default=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(u,e)})):u(e)}},68793:function(e,t,o){o.d(t,{G:function(){return a}});const a={value:{doc:"The content value of the input.",type:"string",status:"optional"},align:{doc:"Defines the text alignment of the input. Can be `left`, `right` or `center`. Defaults to `left`.",type:"string",status:"optional"},label:{doc:"Prepends the Form Label component. If no ID is provided, a random ID is created.",type:"React.Node",status:"optional"},label_sr_only:{doc:"Use `true` to make the label only readable by screen readers.",type:"boolean",status:"optional"},label_direction:{doc:'Use `label_direction="vertical"` to change the label layout direction. Defaults to `horizontal`.',type:"string",status:"optional"},status:{doc:"Text with a status message. The style defaults to an error message. You can use `true` to only get the status color, without a message.",type:"string",status:"optional"},status_state:{doc:"Defines the state of the status. Currently, there are two statuses `[error, info]`. Defaults to `error`.",type:"string",status:"optional"},status_props:{doc:"Use an object to define additional FormStatus properties.",type:"object",status:"optional"},globalStatus:{doc:"The [configuration](/uilib/components/global-status/properties/#configuration-object) used for the target [GlobalStatus](/uilib/components/global-status).",type:"object",status:"optional"},placeholder:{doc:"The placeholder which shows up once the input value is empty.",type:"string",status:"optional"},icon:{doc:"Icon to show before or after the input / placeholder. Can be either a string defining a primary icon or a Component using an SVG icon of either 16px or 24px.",type:["string","React.Node"],status:"optional"},icon_position:{doc:"Defines the position of icon inside the input. Set to `left` or `right`. Defaults to `left` if not set.",type:"string",status:"optional"},icon_size:{doc:"The icon size of the icon shows. Defaults to `medium`.",type:"string",status:"optional"},keep_placeholder:{doc:"Set to `true` in case the `placeholder` has to be kept during focus. By default, the placeholder disappears on focus.",type:"boolean",status:"optional"},input_class:{doc:"In case we have to set a custom input class.",type:"string",status:"optional"},type:{doc:"Choose between `text`, `number`, `email`, `password`, `url`, `tel` and `search`.",type:"string",status:"optional"},autocomplete:{doc:"Defaults to `off`. Set to `on` or any of [allowed `attributes`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autocomplete). Keep in mind, 1. you may have to define a `name`, 2. have the input as a descendant of a `<form>` element, 3. and have a submit button inside the form.",type:"string",status:"optional"},submit_button_title:{doc:"Title attribute for the search icon. Only relevant if search input.",type:"string",status:"optional"},suffix:{doc:"Text describing the content of the input more than the label. you can also send in a React component, so it gets wrapped inside the Input component.",type:["string","React.Node"],status:"optional"},size:{doc:"The sizes you can choose is `default` (2rem), `medium` (2.5rem) and `large` (3rem) are supported component sizes. Defaults to `default` / `null`. Also, if you define a number like `size={2}` then it will be forwarded as the input element attribute.",type:["string","number"],status:"optional"},selectall:{doc:"If set to `true`, then the whole input value gets selected on the entry focus. A second click will place the cursor on the wanted position.",type:"boolean",status:"optional"},clear:{doc:"If set to `true`, then a clear button will be shown which lets the user clear any given input value.",type:"boolean",status:"optional"},stretch:{doc:"If set to `true`, then the input field will be 100% in `width`.",type:"boolean",status:"optional"},skeleton:{doc:"If set to `true`, an overlaying skeleton with animation will be shown.",type:"boolean",status:"optional"},input_attributes:{doc:"Provide the Input element with any attributes by using an Object `input_attributes={{size:'2'}}` or a JSON Object `input_attributes='{\"size\":\"2\"}'`. **NB:** Keep in mind, that also every not listed component property will be sent along and set as an Input element attribute.",type:"object",status:"optional"},input_state:{doc:"Defines a custom visual state of the input. Use it only if you have to simulate a custom state. Currently are three statuses `virgin` , `focus` and `dirty`. Defaults to `null`.",type:"string",status:"optional"},submit_element:{doc:'Accepts a React element which will show up like the "submit button" would do on `type="search"`.',type:["string","React.Element"],status:"optional"},inner_ref:{doc:"By providing a React.ref we can get the internally used input element (DOM). E.g. `inner_ref={myRef}` by using `React.createRef()` or `React.useRef()`.",type:"React.Ref",status:"optional"},input_element:{doc:'By providing a new component we can change the internally used element. Also supports a string only, like `input_element="input"`.',type:["string","React.Element"],status:"internal"},inner_element:{doc:'By providing a new component to be rendered inside the "shell" – we can add a freely customizable internal element. Used by the Autocomplete component.',type:["string","React.Element"],status:"internal"},"[Space](/uilib/layout/space/properties)":{doc:"Spacing properties like `top` or `bottom` are supported.",type:["string","object"],status:"optional"}}},6210:function(e,t,o){var a=o(30600);t.Z=a.Z},64223:function(e,t,o){var a=o(91859);t.Z=a.Z},41676:function(e,t,o){var a=o(35610);t.Z=a.Z},9670:function(e,t,o){o.d(t,{EU:function(){return l},hK:function(){return i},sP:function(){return s}});var a=o(84187),n=o(18739);const s={...n.x,...a.W},i={...n.X},l=function(e,t){void 0===e&&(e=void 0),void 0===t&&(t=void 0);const o=`(${e?`value${e.optional?"?":""}: ${e.type}`:"value"}${t?`, additionalArgs${t.optional?"?":""}: ${t.type}`:""}) => void`;return{...i,onChange:{...i.onChange,type:o},onFocus:{...i.onFocus,type:o},onBlur:{...i.onBlur,type:o}}}},1432:function(e,t,o){o.d(t,{a:function(){return a}});const a={decimalLimit:{doc:"Max number of decimals. Values with more decimals will be rounded. Defaults to `12`.",type:"number",status:"optional"},percent:{doc:"Format a number as percentage.",type:"boolean",status:"optional"},currency:{doc:"Currency code (ISO 4217) or `true` to use the default `NOK`. Uses two decimals by default.",type:["boolean","string"],status:"optional"},allowNegative:{doc:"Whether or not to allow negative numbers. Defaults to `true`.",type:"boolean",status:"optional"},disallowLeadingZeroes:{doc:"Whether or not to allow leading zeroes. Defaults to `false`.",type:"boolean",status:"optional"},minimum:{doc:"Validation for inclusive minimum number value (greater than or equal). Defaults to `Number.MIN_SAFE_INTEGER`.",type:"number",status:"optional"},maximum:{doc:"Validation for inclusive maximum number value (less than or equal). Defaults to `Number.MAX_SAFE_INTEGER`.",type:"number",status:"optional"},exclusiveMinimum:{doc:"Validation for exclusive minimum number value (greater than).",type:"number",status:"optional"},exclusiveMaximum:{doc:"Validation for exclusive maximum number value (less than).",type:"number",status:"optional"},multipleOf:{doc:"Validation that requires the number to be a multiple of given value.",type:"number",status:"optional"},width:{doc:"`false` for no width (use browser default), `small`, `medium` or `large` for predefined standard widths, `stretch` for fill available width.",type:["string","false"],status:"optional"},size:o(68793).G.size,align:{doc:"Lateral alignment of contents of input field, one of `left` (default), `center`, or `right`.",type:"string",status:"optional"},help:{doc:"Provide a help button. Object consisting of `title` and `content`.",type:"object",status:"optional"},autoComplete:{doc:"For HTML `autocomplete` attributes.",type:["on","string"],status:"optional"},prefix:{doc:"Text added before the value input.",type:"string",status:"optional"},suffix:{doc:"Text added after the value input.",type:"string",status:"optional"},step:{doc:"Determines step granularity when in/decreasing value input through step controls buttons or arrow keys. Defaults to 1.",type:"number",status:"optional"},startWith:{doc:"When no `value` or `defaultValue` is given, start with a given value when in/decreasing value input through step controls buttons or arrow keys. Defaults to `null`.",type:"number",status:"optional"},showStepControls:{doc:"Show buttons that in/decreases value input by the step value.",type:"boolean",status:"optional"}}},84187:function(e,t,o){o.d(t,{P:function(){return n},W:function(){return a}});const a={label:{doc:"Field label to show above / before the input feature.",type:"string",status:"optional"},labelDescription:{doc:'A more discreet text displayed beside the label (i.e for "(optional)").',type:"string",status:"optional"},labelSrOnly:{doc:"Use `true` to make the label only readable by screen readers.",type:"boolean",status:"optional"},layout:{doc:"Layout for the label and input. Can be `horizontal` or `vertical`.",type:"string",status:"optional"},layoutOptions:{doc:'Use this to set additional options for the `horizontal` layout. E.g. `{ width: "medium" }`. You can also use a custom width `{number}rem`. Instead of a width, you can use a min/max width. E.g. `{ minWidth: "6rem", maxWidth: "12rem" }`.',type:"object",status:"optional"},width:{doc:"Will set the width for the whole block. Use `small`, `medium`, `large` for predefined standard widths. You can also set a custom width `{number}rem` or use `stretch` or `false`.",type:["string","false"],status:"optional"},contentWidth:{doc:"Will set the width for its contents. Use `small`, `medium`, `large` for predefined standard widths. You can also set a custom width `{number}rem` or use `stretch` or `false`.",type:["string","false"],status:"optional"},"[Space](/uilib/layout/space/properties)":{doc:"Spacing properties like `top` or `bottom` are supported.",type:["string","object"],status:"optional"}},n={...a,labelSize:{doc:"Define one of the following [heading sizes](/uilib/elements/heading/): `medium` or `large`.",type:["string","false"],status:"optional"},labelHeight:{doc:"Defines the height of an component (size prop), so the label can be aligned correctly. Can be `default`, `small`, `medium`, `large`.",type:"string",status:"optional"},asFieldset:{doc:"Use `true` when you have several form elements. This way a `fieldset` with a `legend` is used.",type:"boolean",status:"optional"},align:{doc:"`center` or `bottom` for aligning the contents vertically. Defaults to `bottom`.",type:["string","false"],status:"optional"},disableStatusSummary:{doc:"Use `true` to disable the error summary.",type:"boolean",status:"optional"},composition:{doc:"Use `true` for when you have more than one field wrapped.",type:"string",status:"optional"},disabled:{doc:"Set `true` to make the inner [FormLabel](/uilib/components/form-label/) behave as disabled.",type:"boolean",status:"optional"}}},18739:function(e,t,o){o.d(t,{X:function(){return n},x:function(){return a}});const a={value:{doc:"Source data value for the field. Will take precedence over the path value given in the data context.",type:"{valueType}",status:"optional"},defaultValue:{doc:"Default source data value for the field. Will not take precedence over the path value given in the data context.",type:"{valueType}",status:"optional"},path:{doc:"JSON Pointer for where the data for the field is located in the source dataset (when using Form.Handler or DataContext). The `path` will also be set as the `name` attribute for the [string](/uilib/extensions/forms/base-fields/String/)-field.",type:"string",status:"optional"},info:{doc:"Info message shown below / after the field.",type:"React.Node",status:"optional"},warning:{doc:"Warning message shown below / after the field.",type:"React.Node",status:"optional"},error:{doc:"Error message shown below / after the field.",type:"Error",status:"optional"},disabled:{doc:"Set `true` to show the field but without the possibility of changing the value.",type:"boolean",status:"optional"},emptyValue:{doc:"The value to use (in `onChange` events etc) when emptying the field. Makes it possible for instance to provide `undefined` instead of an empty string when clearing the content of a text input.",type:["{valueType}","undefined"],status:"optional"},required:{doc:'When set to `true`, the field will give an error if the value fails the required validation. When set to `false`, the field will not be required, but will add a "(optional)" suffix to the label.',type:"boolean",status:"optional"},labelSuffix:{doc:'Will append an additional text to the label, like "(optional)". When using `inheritLabel`, the suffix will not be inherited. NB: The visual appearance of the `labelSuffix` may change in the future.',type:"React.Node",status:"optional"},schema:{doc:"Custom JSON Schema for validating the value.",type:"object",status:"optional"},validateInitially:{doc:"Set to `true` to show validation based errors initially (from given value-prop or source data) before the user interacts with the field.",type:"boolean",status:"optional"},validateUnchanged:{doc:"Set to `true` to show validation based errors when the field is touched (like focusing a field and blurring) without having changed the value. Since the user did not introduce a new error, this will apply when the value was initially invalid based on validation.",type:"boolean",status:"optional"},continuousValidation:{doc:"Set to `true` to show validation based errors continuously while writing, not just when blurring the field.",type:"boolean",status:"optional"},errorMessages:{doc:"Custom error messages for each type of error, overriding default messages.",type:"object",status:"optional"},validator:{doc:"Custom validator function that is triggered on every change done by the user. The function can be either asynchronous or synchronous. The first parameter is the value, and the second parameter returns an object containing { errorMessages, connectWithPath, validators }.",type:"function",status:"optional"},onBlurValidator:{doc:"Custom validator function that is triggered when the user leaves a field (e.g., blurring a text input or closing a dropdown). The function can be either asynchronous or synchronous. The first parameter is the value, and the second parameter returns an object containing { errorMessages, connectWithPath, validators }.",type:"function",status:"optional"},transformIn:{doc:"Transforms the `value` before its displayed in the field (e.g. input).",type:"function",status:"optional"},transformOut:{doc:"Transforms the value before it gets forwarded to the form data object (context) or returned as the `onChange` value parameter. The first parameter is the internal value. Some fields to support a second parameter, like the SelectCountry, where the country object is given.",type:"function",status:"optional"}},n={onChange:{doc:"Will be called on value changes made by the user, with the new value as argument. When an `async` function is used, the corresponding [FieldBlock](/uilib/extensions/forms/create-component/FieldBlock/) will show an indicator on the field label. You can return `{ success: 'saved' } as const` to show a success symbol, or an error or an object with these keys `{ info: 'Info message', warning: 'Warning message', error: Error('My error') } as const`.",type:"(value) => void",status:"optional"},onFocus:{doc:"Will be called when the component gets into focus. Like clicking inside a text input or opening a dropdown. Called with active value as argument.",type:"(value) => void",status:"optional"},onBlur:{doc:"Will be called when the component stop being in focus. Like when going to next field, or closing a dropdown. Called with active value as argument.",type:"(value) => void",status:"optional"}}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-feature-fields-currency-properties-mdx-dd38c9673425db4e9912.js.map