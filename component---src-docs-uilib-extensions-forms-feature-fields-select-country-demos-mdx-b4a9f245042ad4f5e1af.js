"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[58155],{32864:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var o={};t.r(o),t.d(o,{Disabled:function(){return f},Empty:function(){return u},FilterCountries:function(){return x},Label:function(){return c},LabelAndOptionSelected:function(){return h},OptionSelected:function(){return d},Placeholder:function(){return a},TransformInAndOut:function(){return m},ValidationRequired:function(){return b},WithError:function(){return j},WithHelp:function(){return p}});var r=t(52322),l=t(45392),i=t(64368),s=t(4902);const u=()=>(0,r.jsx)(i.Z,{children:"<Field.SelectCountry\n  onChange={(value, obj) => console.log('onChange', value, obj)}\n  onBlur={(value, obj) => console.log('onBlur', value, obj)}\n  onFocus={(value, obj) => console.log('onFocus', value, obj)}\n/>\n"}),a=()=>(0,r.jsx)(i.Z,{children:"<Field.SelectCountry\n  placeholder=\"Select something....\"\n  onChange={(value, obj) => console.log('onChange', value, obj)}\n/>\n"}),c=()=>(0,r.jsx)(i.Z,{children:"<Field.SelectCountry\n  label=\"Label text\"\n  onChange={(value, obj) => console.log('onChange', value, obj)}\n/>\n"}),d=()=>(0,r.jsx)(i.Z,{children:"<Field.SelectCountry\n  value=\"NO\"\n  onChange={(value, obj) => console.log('onChange', value, obj)}\n/>\n"}),h=()=>(0,r.jsx)(i.Z,{children:'<Field.SelectCountry\n  value="NO"\n  label="Label text"\n  onChange={(value, obj) => console.log(\'onChange\', value, obj)}\n/>\n'}),p=()=>(0,r.jsx)(i.Z,{children:"<Field.SelectCountry\n  value=\"NO\"\n  label=\"Label text\"\n  help={{\n    title: 'Help is available',\n    content:\n      'Helping others, encouraging others, are often acts of being kind that have more meaning that you may realize.',\n  }}\n  onChange={(value, obj) => console.log('onChange', value, obj)}\n/>\n"}),f=()=>(0,r.jsx)(i.Z,{children:'<Field.SelectCountry\n  value="NO"\n  label="Label text"\n  onChange={(value, obj) => console.log(\'onChange\', value, obj)}\n  disabled\n/>\n'}),j=()=>(0,r.jsx)(i.Z,{children:"<Field.SelectCountry\n  value=\"NO\"\n  label=\"Label text\"\n  onChange={(value, obj) => console.log('onChange', value, obj)}\n  error={new Error('This is what is wrong...')}\n/>\n"}),b=()=>(0,r.jsx)(i.Z,{children:"<Field.SelectCountry\n  label=\"Label text\"\n  onChange={(value, obj) => console.log('onChange', value, obj)}\n  required\n  validateInitially\n  validateUnchanged\n/>\n"});function x(){return(0,r.jsx)(i.Z,{children:"<Field.SelectCountry\n  countries=\"Scandinavia\"\n  filterCountries={({ iso }) => iso !== 'DK'}\n/>\n"})}function m(){return(0,r.jsx)(i.Z,{scope:{Tools:s},noInline:!0,children:'const transformOut = (value, country) => {\n  if (value) {\n    return country\n  }\n}\nconst transformIn = (country) => {\n  return country?.iso\n}\nconst MyForm = () => {\n  return (\n    <Form.Handler onSubmit={console.log}>\n      <Card stack>\n        <Field.SelectCountry\n          path="/country"\n          transformIn={transformIn}\n          transformOut={transformOut}\n          defaultValue="NO"\n        />\n\n        <Value.SelectCountry\n          path="/country"\n          transformIn={transformIn}\n          placeholder="(Select a country)"\n          showEmpty\n        />\n\n        <Form.SubHeading>Data Context</Form.SubHeading>\n        <Tools.Log />\n      </Card>\n      <Form.SubmitButton />\n    </Form.Handler>\n  )\n}\nrender(<MyForm />)\n'})}function g(n){const e=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code"},(0,l.ah)(),n.components);return o||y("Examples",!1),f||y("Examples.Disabled",!0),u||y("Examples.Empty",!0),x||y("Examples.FilterCountries",!0),c||y("Examples.Label",!0),h||y("Examples.LabelAndOptionSelected",!0),d||y("Examples.OptionSelected",!0),a||y("Examples.Placeholder",!0),m||y("Examples.TransformInAndOut",!0),b||y("Examples.ValidationRequired",!0),j||y("Examples.WithError",!0),p||y("Examples.WithHelp",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{children:"Demos"}),"\n",(0,r.jsx)(e.h3,{children:"Empty"}),"\n",(0,r.jsx)(u,{}),"\n",(0,r.jsx)(e.h3,{children:"Placeholder"}),"\n",(0,r.jsx)(a,{}),"\n",(0,r.jsx)(e.h3,{children:"Label"}),"\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(e.h3,{children:"Option selected"}),"\n",(0,r.jsx)(d,{}),"\n",(0,r.jsx)(e.h3,{children:"Label and option selected"}),"\n",(0,r.jsx)(h,{}),"\n",(0,r.jsx)(e.h3,{children:"With help"}),"\n",(0,r.jsx)(p,{}),"\n",(0,r.jsx)(e.h3,{children:"Disabled"}),"\n",(0,r.jsx)(f,{}),"\n",(0,r.jsx)(e.h3,{children:"Error"}),"\n",(0,r.jsx)(j,{}),"\n",(0,r.jsx)(e.h3,{children:"Validation - Required"}),"\n",(0,r.jsx)(b,{}),"\n",(0,r.jsx)(e.h3,{children:"TransformIn and TransformOut"}),"\n",(0,r.jsx)(m,{}),"\n",(0,r.jsx)(e.h3,{children:"Filter countries"}),"\n",(0,r.jsxs)(e.p,{children:["This example demonstrates how to filter specific countries. Use the ",(0,r.jsx)(e.code,{children:"countries"})," property to define a set of countries and/or the ",(0,r.jsx)(e.code,{children:"filterCountries"})," property to apply custom filtering logic."]}),"\n",(0,r.jsx)(x,{})]})}var v=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,l.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(g,n)})):g(n)};function y(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},38734:function(n,e,t){t.d(e,{Z:function(){return u}});var o=t(84616),r=t(2784),l=t(2394),i=t(21068);const s=["minLength","maxLength","pattern","description","min","max","multipleOf","exclusiveMinimum","exclusiveMaximum"];function u(n){const{generateRef:e,filterData:t,log:u,children:a}=n||{},{fieldPropsRef:c,valuePropsRef:d,data:h,hasContext:p}=(0,r.useContext)(i.Z),f=(0,r.useRef)({});f.current=h;const j=(0,r.useCallback)((()=>{const n=Object.entries((null==c?void 0:c.current)||{}).reduce(((n,e)=>{let[r,i]=e;if(r.startsWith("/")){const e=r.substring(1),u=e.split("/"),a=u.length,c={type:i.valueType||"string"};for(const n of s)i[n]&&(c[n]=i[n]);if(a>1){const e=[""];for(const r of u){e.push(r);const s=e.join("/properties/"),a=e.length-1===u.length,d=l.e$(n,s)?l.U2(n,s):null,h=a?c:d;if(a)!1!==(null==t?void 0:t[s])&&l.t8(n,s,h);else{const e={type:"object",...d},r=[];i.required&&r.push(u.at(-1)),null!=d&&d.required&&r.push.apply(r,(0,o.Z)(d.required)),r.length>0&&(e.required=r),!1!==(null==t?void 0:t[s])&&l.t8(n,s,e)}}}else!1!==(null==t?void 0:t[r])&&l.t8(n.properties,r,c),i.required&&n.required.push(e)}return n}),{type:"object",properties:{},required:[]}),e=Object.entries((null==c?void 0:c.current)||{}).reduce(((n,e)=>{let[t,o]=e;if(t.startsWith("/")){const e={};for(const n in o)void 0!==o[n]&&"function"!=typeof o[n]&&(e[n]=o[n]);l.t8(n,t,e)}return n}),{}),r=Object.entries((null==d?void 0:d.current)||{}).reduce(((n,e)=>{let[t,o]=e;if(t.startsWith("/")){const e={};for(const n in o)void 0!==o[n]&&"function"!=typeof o[n]&&(e[n]=o[n]);l.t8(n,t,e)}return n}),{});return 0===n.required.length&&delete n.required,{schema:n,data:f.current,propsOfFields:e,propsOfValues:r}}),[c,t,d]);return p&&(u&&console.log(j().schema),e&&(e.current=j)),a}},10454:function(n,e,t){t.d(e,{Z:function(){return i}});var o=t(2784),r=t(2394),l=t(21068);function i(n){const{log:e,generateRef:t,filterData:i,children:s}=n||{},{fieldPropsRef:u,valuePropsRef:a,data:c,hasContext:d}=(0,o.useContext)(l.Z);(0,o.useRef)({}).current=c;const h=(0,o.useCallback)((()=>{const n=Object.entries((null==u?void 0:u.current)||{}).reduce(((n,e)=>{let[t,l]=e;if(t.startsWith("/")){const e={};for(const n in l)void 0===l[n]||"function"==typeof l[n]||(0,o.isValidElement)(l[n])||(e[n]=l[n]);!1!==(null==i?void 0:i[t])&&r.t8(n,t,e)}return n}),{}),e=Object.entries((null==a?void 0:a.current)||{}).reduce(((n,e)=>{let[t,l]=e;if(t.startsWith("/")){const e={};for(const n in l)void 0===l[n]||"function"==typeof l[n]||(0,o.isValidElement)(l[n])||(e[n]=l[n]);!1!==(null==i?void 0:i[t])&&r.t8(n,t,e)}return n}),{});return{propsOfFields:n,propsOfValues:e}}),[u,i,a]);return d&&(e&&console.log(h()),t&&(t.current=h)),s}},92581:function(n,e,t){t.d(e,{Z:function(){return c}});var o=t(2784),r=t(21068),l=t(54109).Z,i=t(9149),s=t(52322);function u(n){let{placeholder:e,label:t,data:u,...c}=n;const{data:d}=(0,o.useContext)(r.Z);return(0,s.jsxs)(l,{element:"output",backgroundColor:"sand-yellow",style:{maxWidth:"80vw"},innerSpace:!0,...c,children:[t&&(0,s.jsx)(i.Z,{bottom:!0,children:t}),(0,s.jsxs)("pre",{children:[e&&0===Object.keys((null!=u?u:d)||{}).length?e:JSON.stringify(a(null!=u?u:d),null,2)," "]})]})}function a(n,e){return void 0===e&&(e="undefined"),void 0===n?e:"object"==typeof n&&n!==e?{...n,...Object.fromEntries(Object.entries(n).map((n=>{let[e,t]=n;return[e,a(t)]})))}:n}u._supportsSpacingProps=!0;var c=u},4902:function(n,e,t){t.r(e),t.d(e,{GenerateSchema:function(){return o.Z},ListAllProps:function(){return r.Z},Log:function(){return l.Z}});var o=t(38734),r=t(10454),l=t(92581)}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-feature-fields-select-country-demos-mdx-b4a9f245042ad4f5e1af.js.map