"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[90039],{36915:function(e,t,n){n.r(t);var a=n(52322),o=n(45392),i=n(85179),s=n(37159);function r(e){const t=Object.assign({h2:"h2",h3:"h3"},(0,o.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{children:"Properties"}),"\n",(0,a.jsx)(t.h3,{children:"Isolation-specific properties"}),"\n",(0,a.jsx)(i.ZP,{props:s.Y})]})}t.default=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(r,e)})):r(e)}},85179:function(e,t,n){n.d(t,{Kw:function(){return f},ZP:function(){return b}});var a=n(70894),o=n(61185),i=n(55560),s=n(41676),r=n(6210),l=n(64223),c=n(37339),d=n(595),u=n(52322);const h={...d.L,p:e=>(0,u.jsx)("span",{...e})},m=(0,a.Z)(i.ZP,{target:"e13h2c840"})({name:"1qdk5x4",styles:"td{white-space:nowrap;}"}),p="var(--color-fire-red)",f=e=>{let{variant:t,strikethrough:n,children:a,style:o={},...i}=e;if(n&&(o.textDecoration="line-through"),"string"==typeof a)switch(t){case"prop":break;case"type":o.color=a.startsWith("'")?p:"var(--color-violet)";case"value":o.color=a.startsWith("'")?p:"undefined"===a||"null"===a?"var(--color-black-55)":"var(--color-success-green)";default:o.background="none",o.boxShadow="none"}return h.code({children:a,style:o,...i})};function b(e){let{props:t,valueType:n="string",camelCase:a,omit:d,showDefaultValue:p=!1}=e;const b=Object.keys(t||{}),v=Object.entries(t||{}).map((e=>{let[t,i]=e;if(!i)return null;const{type:l,defaultValue:m,doc:v,status:j}=i;return d&&d.includes(t)?null:(0,u.jsxs)(s.Z,{children:[(0,u.jsx)(r.Z,{children:(0,u.jsx)(f,{variant:"prop",strikethrough:"deprecated"===j,children:g(a?(0,c.zW)(t):t)})}),(0,u.jsx)(r.Z,{children:(Array.isArray(l)?l:[l]).map((e=>{if("string"==typeof e){if(String(e).includes("{valueType}")){if(Array.isArray(n))return n.map(((e,t)=>(0,u.jsx)(f,{variant:"type",children:e},e+t))).reduce(((e,t)=>(0,u.jsxs)(u.Fragment,{children:[e," ",(0,u.jsx)("br",{})," ",t]})));e=n}return(0,u.jsx)(f,{variant:"type",children:e},e)}})).reduce(((e,t)=>(0,u.jsxs)(u.Fragment,{children:[e," ",(0,u.jsx)("br",{})," ",t]})))}),p&&(0,u.jsx)(r.Z,{children:m?(0,u.jsx)(f,{variant:"value",children:m}):"required"===j&&"REQUIRED"}),(0,u.jsxs)(r.Z,{children:[(!p||"deprecated"===j)&&(0,u.jsxs)("em",{children:["(",j,") "]}),(0,u.jsx)(o.D,{components:h,children:a?y(v,b):v})]})]},t)}));return(0,u.jsx)(i.ZP.ScrollView,{children:(0,u.jsxs)(m,{children:[(0,u.jsx)("thead",{children:(0,u.jsxs)(s.Z,{children:[(0,u.jsx)(l.Z,{children:"Property"}),(0,u.jsx)(l.Z,{children:"Type"}),p&&(0,u.jsx)(l.Z,{children:"Default value"}),(0,u.jsx)(l.Z,{children:"Description"})]})}),(0,u.jsx)("tbody",{children:v})]})})}function y(e,t){return t.forEach((t=>{e=e.replace(new RegExp(t,"g"),(0,c.zW)(t))})),e}function g(e){return e.includes("/")?(0,u.jsx)(o.D,{components:h,children:e}):e}},6210:function(e,t,n){var a=n(30600);t.Z=a.Z},64223:function(e,t,n){var a=n(91859);t.Z=a.Z},41676:function(e,t,n){var a=n(35610);t.Z=a.Z},68289:function(e,t,n){n.d(t,{I:function(){return a},j:function(){return o}});const a={defaultData:{doc:"Default source data, only used if no other source is available, and not leading to updates if changed after mount.",type:"object",status:"optional"},data:{doc:"Dynamic source data used as both initial data, and updates internal data if changed after mount.",type:"object",status:"optional"},id:{doc:"Unique id for connecting Form.Handler and helper tools such as Form.useData.",type:"string",status:"optional"},schema:{doc:"JSON Schema for validation of the data set.",type:"object",status:"optional"},errorMessages:{doc:"Object containing error messages by either type of JSON Pointer path and type.",type:"object",status:"optional"},minimumAsyncBehaviorTime:{doc:"Minimum time to display the submit indicator. Default is 1s.",type:"boolean",status:"optional"},asyncSubmitTimeout:{doc:"The maximum time to display the submit indicator before it changes back to normal. In case something went wrong during submission. Default is 30s.",type:"boolean",status:"optional"},scrollTopOnSubmit:{doc:"True for the UI to scroll to the top of the page when data is submitted.",type:"boolean",status:"optional"},sessionStorageId:{doc:"Key for saving active data to session storage and loading it on mount.",type:"string",status:"optional"},ajvInstance:{doc:"Provide your own custom Ajv instance. More info in the [Schema validation](/uilib/extensions/forms/Form/schema-validation/#custom-ajv-instance-and-keywords) section.",type:"ajv",status:"optional"},transformIn:{doc:"Mutate the data context (internally as well) based on your criteria: `({ path, value, data, props, internal }) => 'new value'`. It will iterate on each data entry (/path).",type:"function",status:"optional"},transformOut:{doc:"Mutate the data before it enters onSubmit or onChange based on your criteria: `({ path, value, data, props, internal }) => 'new value'`. It will iterate on each data entry (/path).",type:"function",status:"optional"},globalStatusId:{doc:"If needed, you can define a custom [GlobalStatus](/uilib/components/global-status) id. Defaults to `main`.",type:"string",status:"optional"},required:{doc:"Make all fields required.",type:"boolean",status:"optional"},disabled:{doc:"Disable all fields.",type:"boolean",status:"optional"},locale:{doc:"Locale (language) to use for all nested Eufemia components.",type:"string",status:"optional"},children:{doc:"Contents.",type:"React.Node",status:"required"}},o={onChange:{doc:"Will be called when a value of a field was changed by the user, with the data set (including the changed value) as argument. When an async function is provided, it will show an indicator on the current label during a field change. Related props: `minimumAsyncBehaviorTime` and `asyncSubmitTimeout`. You can return an error or an object with these keys `{ info: 'Info message', warning: 'Warning message', error: Error('My error') } as const` in addition to { success: 'saved' } indicate the field was saved. Will emit unvalidated by default and validated when an async function is provided (like `onSubmit`). The second parameter is an object containing the `filterData`, `resetForm` and `clearData` functions.",type:"function",status:"optional"},onPathChange:{doc:"Will be called when a value of a field was changed by the user, with the `path` (JSON Pointer) and new `value` as arguments. Can be an async function. Will emit unvalidated by default and validated when `onChange` is an async function.",type:"function",status:"optional"},onSubmit:{doc:"Will be called (on validation success) when the user submit the form (i.e by clicking a [SubmitButton](/uilib/extensions/forms/Form/SubmitButton) component inside), with the data set as argument. When an async function is provided, it will show an indicator on the submit button during the form submission. All form elements will be disabled during the submit. The indicator will be shown for minimum 1 second. Related props: `minimumAsyncBehaviorTime` and `asyncSubmitTimeout`. You can return an error or an object with these keys `{ status: 'pending', info: 'Info message', warning: 'Warning message', error: Error('My error') } as const` to be shown in a [FormStatus](/uilib/components/form-status). Will only emit when every validation has passed. The second parameter is an object containing the `filterData`, `reduceToVisibleFields`, `resetForm` and `clearData` functions.",type:"function",status:"optional"},onSubmitRequest:{doc:"Will be called when the user tries to submit, but errors stop the data from being submitted.",type:"function",status:"optional"},onSubmitComplete:{doc:"Will be called after onSubmit has finished and had not errors. It supports the same return values as `onSubmit` and will be merged together.",type:"function",status:"optional"},onClear:{doc:"Will be called when the form is cleared via `Form.clearData` or via the `onSubmit` event (or `onCommit`) argument `{ clearData }`.",type:"function",status:"optional"}}},37159:function(e,t,n){n.d(t,{Y:function(){return i},u:function(){return o}});var a=n(68289);const o={path:{doc:"JSON Pointer to define the object key for all the generated nested field data.",type:"string",status:"optional"},transformOnCommit:{doc:"Transform the data before it gets committed to the form. The first parameter is the isolated data object. The second parameter is the outer context data object (Form.Handler).",type:"function",status:"optional"},commitHandleRef:{doc:"Provide a ref to a function that can be called from any location to commit the data to the form.",type:"React.Ref",status:"optional"},...a.I,minimumAsyncBehaviorTime:void 0,asyncSubmitTimeout:void 0,scrollTopOnSubmit:void 0,sessionStorageId:void 0,globalStatusId:void 0},i={onCommit:{doc:"Will be called on a nested form context commit – if validation has passed. The first parameter is the committed data object. The second parameter is an object containing a method to clear the internal data `{ clearData }`.",type:"function",status:"optional"},...a.j,onSubmit:void 0,onSubmitRequest:void 0,onSubmitComplete:void 0}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-form-isolation-events-mdx-a7a3fb2c0542d9e77dbb.js.map