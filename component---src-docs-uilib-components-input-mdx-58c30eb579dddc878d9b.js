"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[15894,46944,28475],{17667:function(n,e,t){t.r(e);var l=t(52322),r=t(45392),o=t(85400),i=t(41067);function a(n){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.default,{}),"\n",(0,l.jsx)(i.default,{})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,l.jsx)(e,Object.assign({},n,{children:(0,l.jsx)(a,n)})):a()}},41067:function(n,e,t){t.r(e);var l=t(52322),r=t(45392),o=t(93727);function i(n){const e=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",pre:"pre"},(0,r.ah)(),n.components),{VisibleWhenVisualTest:t}=e;return t||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("VisibleWhenVisualTest",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{children:"Demos"}),"\n",(0,l.jsx)(e.h3,{children:"Placeholder text"}),"\n",(0,l.jsx)(o.InputExampleDefault,{}),"\n",(0,l.jsx)(e.h3,{children:"Search text placeholder"}),"\n",(0,l.jsx)(o.InputExampleSearch,{}),"\n",(0,l.jsx)(e.h3,{children:"Medium and stretched search input"}),"\n",(0,l.jsx)(o.InputExampleMedium,{}),"\n",(0,l.jsx)(e.h3,{children:"Input with icon"}),"\n",(0,l.jsx)(e.p,{children:"With left / right aligned text"}),"\n",(0,l.jsx)(o.InputExampleWithIcon,{}),"\n",(0,l.jsx)(e.h3,{children:"Disabled input"}),"\n",(0,l.jsx)(o.InputExampleDisabled,{}),"\n",(0,l.jsx)(e.h3,{children:"With FormStatus"}),"\n",(0,l.jsx)(o.InputExampleFormStatus,{}),"\n",(0,l.jsx)(e.h3,{children:"Input with suffix and custom label component"}),"\n",(0,l.jsx)(o.InputExampleSuffix,{}),"\n",(0,l.jsxs)(e.h3,{children:["Stretched ",(0,l.jsx)(e.code,{children:"Input"})," in horizontal flex and a long label"]}),"\n",(0,l.jsx)(o.InputExampleStretched,{}),"\n",(0,l.jsx)(e.h3,{children:"Numbers are using DNB Mono (monospace)"}),"\n",(0,l.jsx)(e.p,{children:"Also, this example manipulates the value during typing."}),"\n",(0,l.jsx)(o.InputExampleNumbers,{}),"\n",(0,l.jsx)(e.h3,{children:"Submit Form with Input"}),"\n",(0,l.jsx)(e.p,{children:"Pressing the enter key will trigger a submit."}),"\n",(0,l.jsx)(o.InputExampleSubmit,{}),"\n",(0,l.jsx)(e.h3,{children:"Input with clear button"}),"\n",(0,l.jsx)(e.p,{children:"Pushing the clear button will clear the input."}),"\n",(0,l.jsx)(o.InputExampleClear,{}),"\n",(0,l.jsx)(e.h3,{children:"Input password type"}),"\n",(0,l.jsx)(e.p,{children:"The password component has to ensure that there is still room for password managers to inject the input with their UX functionality."}),"\n",(0,l.jsx)(e.p,{children:"In order to get the show/hide button, you may have to import the component like so:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"import InputPassword from '@dnb/eufemia/components/input/InputPassword'\n"})}),"\n",(0,l.jsx)(o.InputExamplePassword,{}),"\n",(0,l.jsx)(t,{children:(0,l.jsx)(o.InputScreenshotTests,{})})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,l.jsx)(e,Object.assign({},n,{children:(0,l.jsx)(i,n)})):i(n)}},85400:function(n,e,t){t.r(e);var l=t(52322),r=t(45392),o=t(93727),i=t(52160);function a(n){const e=Object.assign({h2:"h2",pre:"pre",code:"code",p:"p",h3:"h3",a:"a"},(0,r.ah)(),n.components);return o||u("Examples",!1),o.CurrencyField||u("Examples.CurrencyField",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{children:"Import"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-tsx",children:"import { Input } from '@dnb/eufemia'\n"})}),"\n",(0,l.jsx)(e.h2,{children:"Description"}),"\n",(0,l.jsxs)(e.p,{children:["The input component is an umbrella component for all inputs which share the same style as the classic ",(0,l.jsx)(e.code,{children:"text"})," input field."]}),"\n",(0,l.jsx)(e.h3,{children:"Formatted input fields (masked values)"}),"\n",(0,l.jsxs)(e.p,{children:["You may consider to use ",(0,l.jsx)(e.a,{href:"/uilib/components/input-masked/",children:"InputMasked"})," for formatted strings and ",(0,l.jsx)(e.a,{href:"/uilib/extensions/forms/",children:"Eufemia Forms"})," fields like ",(0,l.jsx)(e.a,{href:"/uilib/extensions/forms/base-fields/Number/",children:"Number"})," and ",(0,l.jsx)(e.a,{href:"/uilib/extensions/forms/feature-fields/Currency/",children:"Currency"})," for formatted numbers:"]}),"\n",(0,l.jsx)(o.CurrencyField,{}),"\n",(0,l.jsx)(e.h3,{children:"Accessibility"}),"\n",(0,l.jsxs)(e.p,{children:["Please avoid using the ",(0,l.jsx)(e.code,{children:"maxlength"})," attribute when possible, as it may lower good accessibility. You can instead, use the ",(0,l.jsx)(e.a,{href:"/uilib/components/fragments/text-counter/",children:"TextCounter"})," component."]}),"\n",(0,l.jsxs)(e.p,{children:["But you may also consider to use a multiline input with a ",(0,l.jsx)(e.code,{children:"characterCounter"}),":"]}),"\n",(0,l.jsx)(i.MultipleOneRow,{})]})}function u(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,l.jsx)(e,Object.assign({},n,{children:(0,l.jsx)(a,n)})):a(n)}},52160:function(n,e,t){t.r(e),t.d(e,{AsynchronousExternalBlurValidator:function(){return Z},AsynchronousExternalValidator:function(){return w},Capitalize:function(){return d},Clear:function(){return f},Disabled:function(){return m},Empty:function(){return i},HorizontalLayout:function(){return h},Icons:function(){return p},Info:function(){return x},Label:function(){return u},LabelAndValue:function(){return s},MultipleEmpty:function(){return E},MultipleLabelAndValue:function(){return V},MultipleOneRow:function(){return L},MultiplePlaceholder:function(){return O},MultipleWithHelp:function(){return k},Placeholder:function(){return a},SynchronousExternalBlurValidator:function(){return I},SynchronousExternalValidator:function(){return y},TransformInAndOut:function(){return M},ValidateMaximumLengthCustomError:function(){return S},ValidateMinimumLength:function(){return C},ValidatePattern:function(){return F},ValidateRequired:function(){return j},Warning:function(){return v},Widths:function(){return g},WithError:function(){return b},WithHelp:function(){return c}});var l=t(64368),r=t(4902),o=t(52322);const i=()=>(0,o.jsx)(l.Z,{children:"<Field.String\n  onFocus={(value) => console.log('onFocus', value)}\n  onBlur={(value) => console.log('onBlur', value)}\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),a=()=>(0,o.jsx)(l.Z,{children:"<Field.String\n  placeholder=\"Enter a text...\"\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),u=()=>(0,o.jsx)(l.Z,{children:"<Field.String\n  label=\"Label text\"\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),s=()=>(0,o.jsx)(l.Z,{children:'<Field.String\n  label="Label text"\n  value="foo"\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n'}),c=()=>(0,o.jsx)(l.Z,{children:"<Field.String\n  label=\"Label text\"\n  value=\"foo\"\n  help={{\n    title: 'Help is available',\n    content:\n      'Take the time to help other people without expecting a reward or gratitude is definitely important in living an optimistic life.',\n  }}\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),d=()=>(0,o.jsx)(l.Z,{children:'<Field.String\n  label="Label text"\n  value="foo bar"\n  capitalize\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n'}),h=()=>(0,o.jsx)(l.Z,{children:'<Field.String\n  label="Label text"\n  value="foo"\n  layout="horizontal"\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n'}),g=()=>(0,o.jsx)(l.Z,{hideCode:!0,"data-visual-test":"string-widths",children:'<Flex.Stack>\n  <Field.String label="Default width (property omitted)" value="foo" />\n  <Field.String label="Small" value="foo" width="small" />\n  <Field.String label="Medium" value="foo" width="medium" />\n  <Field.String label="Large" value="foo" width="large" />\n  <Field.String label="Stretch" value="foo" width="stretch" />\n\n  <Field.String\n    label="Default width (property omitted)"\n    value="foo"\n    multiline\n  />\n  <Field.String label="Small" value="foo" width="small" multiline />\n  <Field.String label="Medium" value="foo" width="medium" multiline />\n  <Field.String label="Large" value="foo" width="large" multiline />\n  <Field.String label="Stretch" value="foo" width="stretch" multiline />\n</Flex.Stack>\n'}),p=()=>(0,o.jsx)(l.Z,{children:'\n<Field.String\n  label="Icon left"\n  value="foo"\n  leftIcon="check"\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n<Field.String\n  label="Icon right"\n  value="foo"\n  rightIcon="loupe"\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n\n'}),f=()=>(0,o.jsx)(l.Z,{children:"<Field.String\n  value=\"foo\"\n  onChange={(value) => console.log('onChange', value)}\n  clear\n/>\n"}),m=()=>(0,o.jsx)(l.Z,{children:'<Field.String\n  value="foo"\n  label="Label text"\n  onChange={(value) => console.log(\'onChange\', value)}\n  disabled\n/>\n'}),x=()=>(0,o.jsx)(l.Z,{children:'<Field.String\n  value="foo"\n  label="Label text"\n  onChange={(value) => console.log(\'onChange\', value)}\n  info="Useful information (?)"\n/>\n'}),v=()=>(0,o.jsx)(l.Z,{children:'<Field.String\n  value="foo"\n  label="Label text"\n  onChange={(value) => console.log(\'onChange\', value)}\n  warning="I\'m warning you..."\n/>\n'}),b=()=>(0,o.jsx)(l.Z,{children:"<Field.String\n  value=\"foo\"\n  label=\"Label text\"\n  onChange={(value) => console.log('onChange', value)}\n  error={new Error('This is what is wrong...')}\n/>\n"}),j=()=>(0,o.jsx)(l.Z,{children:'<Field.String\n  value="foo"\n  label="Label text"\n  onChange={(value) => console.log(\'onChange\', value)}\n  required\n/>\n'}),C=()=>(0,o.jsx)(l.Z,{children:'<Field.String\n  value="foo"\n  label="Label text (minimum 8 characters)"\n  onChange={(value) => console.log(\'onChange\', value)}\n  minLength={8}\n/>\n'}),S=()=>(0,o.jsx)(l.Z,{children:'<Field.String\n  value="foo"\n  label="Label text (maximum 8 characters)"\n  onChange={(value) => console.log(\'onChange\', value)}\n  maxLength={8}\n  errorMessages={{\n    maxLength: "You can\'t write THAT long.. Max 8 chars!",\n  }}\n/>\n'}),F=()=>(0,o.jsx)(l.Z,{children:'<Field.String\n  value="foo"\n  label="Label text"\n  onChange={(value) => console.log(\'onChange\', value)}\n  pattern="^foo123"\n/>\n'}),y=()=>(0,o.jsx)(l.Z,{children:"<Field.String\n  value=\"foo\"\n  label=\"Label text (minimum 4 characters)\"\n  validator={(value) =>\n    value.length < 4 ? Error('At least 4 characters') : undefined\n  }\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),w=()=>(0,o.jsx)(l.Z,{children:"<Field.String\n  value=\"foo\"\n  label=\"Label text (minimum 4 characters)\"\n  validator={(value) =>\n    new Promise((resolve) =>\n      setTimeout(\n        () =>\n          resolve(\n            value.length < 5 ? Error('At least 5 characters') : undefined,\n          ),\n        1500,\n      ),\n    )\n  }\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),I=()=>(0,o.jsx)(l.Z,{children:"<Field.String\n  value=\"foo\"\n  label=\"Label text (minimum 4 characters)\"\n  onBlurValidator={(value) =>\n    value.length < 4 ? Error('At least 4 characters') : undefined\n  }\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),Z=()=>(0,o.jsx)(l.Z,{children:"<Field.String\n  value=\"foo\"\n  label=\"Label text (minimum 4 characters)\"\n  onBlurValidator={(value) =>\n    new Promise((resolve) =>\n      setTimeout(\n        () =>\n          resolve(\n            value.length < 5 ? Error('At least 5 characters') : undefined,\n          ),\n        1500,\n      ),\n    )\n  }\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),E=()=>(0,o.jsx)(l.Z,{children:"<Field.String\n  onChange={(value) => console.log('onChange', value)}\n  multiline\n/>\n"}),L=()=>(0,o.jsx)(l.Z,{children:'<Field.String\n  label="Label text"\n  placeholder="Enter your text"\n  multiline\n  rows={1}\n  characterCounter={40}\n/>\n'}),O=()=>(0,o.jsx)(l.Z,{children:"<Field.String\n  placeholder=\"Enter text here\"\n  onChange={(value) => console.log('onChange', value)}\n  multiline\n/>\n"}),V=()=>(0,o.jsx)(l.Z,{children:'<Field.String\n  value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in tempus odio, nec interdum orci. Integer vehicula ipsum et risus finibus, vitae commodo ex luctus. Nam viverra sollicitudin dictum. Vivamus maximus dignissim lorem, vitae viverra erat dapibus a."\n  label="Label text"\n  onChange={(value) => console.log(\'onChange\', value)}\n  multiline\n/>\n'}),k=()=>(0,o.jsx)(l.Z,{children:"<Field.String\n  label=\"Label text\"\n  help={{\n    title: 'Help is available',\n    content: 'There is more happiness in giving than in receiving.',\n  }}\n  multiline\n  onChange={(value) => console.log('onChange', value)}\n/>\n"});function M(){return(0,o.jsx)(l.Z,{scope:{Tools:r},noInline:!0,children:'const transformOut = (value) => {\n  return {\n    value,\n    foo: \'bar\',\n  }\n}\nconst transformIn = (data) => {\n  return data?.value\n}\nconst MyForm = () => {\n  return (\n    <Form.Handler onSubmit={console.log}>\n      <Card stack>\n        <Field.String\n          label="String field"\n          path="/myValue"\n          transformIn={transformIn}\n          transformOut={transformOut}\n          defaultValue="Default value"\n        />\n\n        <Value.String\n          label="String value"\n          path="/myValue"\n          transformIn={transformIn}\n          placeholder="(placeholder)"\n          showEmpty\n        />\n\n        <Form.SubHeading>Data Context</Form.SubHeading>\n        <Tools.Log />\n      </Card>\n      <Form.SubmitButton />\n    </Form.Handler>\n  )\n}\nrender(<MyForm />)\n'})}},38734:function(n,e,t){t.d(e,{Z:function(){return u}});var l=t(84616),r=t(2784),o=t(2394),i=t(21068);const a=["minLength","maxLength","pattern","description","min","max","multipleOf","exclusiveMinimum","exclusiveMaximum"];function u(n){const{generateRef:e,filterData:t,log:u,children:s}=n||{},{fieldPropsRef:c,valuePropsRef:d,data:h,hasContext:g}=(0,r.useContext)(i.Z),p=(0,r.useRef)({});p.current=h;const f=(0,r.useCallback)((()=>{const n=Object.entries((null==c?void 0:c.current)||{}).reduce(((n,e)=>{let[r,i]=e;if(r.startsWith("/")){const e=r.substring(1),u=e.split("/"),s=u.length,c={type:i.valueType||"string"};for(const n of a)i[n]&&(c[n]=i[n]);if(s>1){const e=[""];for(const r of u){e.push(r);const a=e.join("/properties/"),s=e.length-1===u.length,d=o.e$(n,a)?o.U2(n,a):null,h=s?c:d;if(s)!1!==(null==t?void 0:t[a])&&o.t8(n,a,h);else{const e={type:"object",...d},r=[];i.required&&r.push(u.at(-1)),null!=d&&d.required&&r.push.apply(r,(0,l.Z)(d.required)),r.length>0&&(e.required=r),!1!==(null==t?void 0:t[a])&&o.t8(n,a,e)}}}else!1!==(null==t?void 0:t[r])&&o.t8(n.properties,r,c),i.required&&n.required.push(e)}return n}),{type:"object",properties:{},required:[]}),e=Object.entries((null==c?void 0:c.current)||{}).reduce(((n,e)=>{let[t,l]=e;if(t.startsWith("/")){const e={};for(const n in l)void 0!==l[n]&&"function"!=typeof l[n]&&(e[n]=l[n]);o.t8(n,t,e)}return n}),{}),r=Object.entries((null==d?void 0:d.current)||{}).reduce(((n,e)=>{let[t,l]=e;if(t.startsWith("/")){const e={};for(const n in l)void 0!==l[n]&&"function"!=typeof l[n]&&(e[n]=l[n]);o.t8(n,t,e)}return n}),{});return 0===n.required.length&&delete n.required,{schema:n,data:p.current,propsOfFields:e,propsOfValues:r}}),[c,t,d]);return g&&(u&&console.log(f().schema),e&&(e.current=f)),s}},10454:function(n,e,t){t.d(e,{Z:function(){return i}});var l=t(2784),r=t(2394),o=t(21068);function i(n){const{log:e,generateRef:t,filterData:i,children:a}=n||{},{fieldPropsRef:u,valuePropsRef:s,data:c,hasContext:d}=(0,l.useContext)(o.Z);(0,l.useRef)({}).current=c;const h=(0,l.useCallback)((()=>{const n=Object.entries((null==u?void 0:u.current)||{}).reduce(((n,e)=>{let[t,o]=e;if(t.startsWith("/")){const e={};for(const n in o)void 0===o[n]||"function"==typeof o[n]||(0,l.isValidElement)(o[n])||(e[n]=o[n]);!1!==(null==i?void 0:i[t])&&r.t8(n,t,e)}return n}),{}),e=Object.entries((null==s?void 0:s.current)||{}).reduce(((n,e)=>{let[t,o]=e;if(t.startsWith("/")){const e={};for(const n in o)void 0===o[n]||"function"==typeof o[n]||(0,l.isValidElement)(o[n])||(e[n]=o[n]);!1!==(null==i?void 0:i[t])&&r.t8(n,t,e)}return n}),{});return{propsOfFields:n,propsOfValues:e}}),[u,i,s]);return d&&(e&&console.log(h()),t&&(t.current=h)),a}},92581:function(n,e,t){t.d(e,{Z:function(){return c}});var l=t(2784),r=t(21068),o=t(54109).Z,i=t(9149),a=t(52322);function u(n){let{placeholder:e,label:t,data:u,...c}=n;const{data:d}=(0,l.useContext)(r.Z);return(0,a.jsxs)(o,{element:"output",backgroundColor:"sand-yellow",style:{maxWidth:"80vw"},innerSpace:!0,...c,children:[t&&(0,a.jsx)(i.Z,{bottom:!0,children:t}),(0,a.jsxs)("pre",{children:[e&&0===Object.keys((null!=u?u:d)||{}).length?e:JSON.stringify(s(null!=u?u:d),null,2)," "]})]})}function s(n,e){return void 0===e&&(e="undefined"),void 0===n?e:"object"==typeof n&&n!==e?{...n,...Object.fromEntries(Object.entries(n).map((n=>{let[e,t]=n;return[e,s(t)]})))}:n}u._supportsSpacingProps=!0;var c=u},4902:function(n,e,t){t.r(e),t.d(e,{GenerateSchema:function(){return l.Z},ListAllProps:function(){return r.Z},Log:function(){return o.Z}});var l=t(38734),r=t(10454),o=t(92581)}}]);
//# sourceMappingURL=component---src-docs-uilib-components-input-mdx-58c30eb579dddc878d9b.js.map