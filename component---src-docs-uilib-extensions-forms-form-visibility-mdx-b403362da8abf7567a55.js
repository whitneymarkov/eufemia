"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[63975,3123,4542],{20233:function(e,n,i){i.r(n);var t=i(52322),r=i(45392),l=i(27064),s=i(55838);function a(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.default,{}),"\n",(0,t.jsx)(s.default,{})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a()}},55838:function(e,n,i){i.r(n),i.d(n,{default:function(){return j}});var t={};i.r(t),i.d(t,{BasedOnBooleanTrue:function(){return u},BasedOnContext:function(){return p},BooleanExample:function(){return d},FilterData:function(){return f},InferData:function(){return h},InheritVisibility:function(){return b},NestedExample:function(){return m},PathValue:function(){return c},VisibilityOnValidation:function(){return x}});var r=i(52322),l=i(45392),s=(i(2784),i(64368)),a=i(99210),o=i(4902);const d=()=>(0,r.jsx)(s.Z,{scope:{TestElement:a.Z},children:'<Form.Handler>\n  <Flex.Stack>\n    <Field.Boolean\n      label="Show content"\n      variant="buttons"\n      path="/toggleValue"\n      value={false}\n    />\n    <Form.Visibility pathTrue="/toggleValue" animate>\n      <TestElement>Item 1</TestElement>\n      <TestElement>Item 2</TestElement>\n    </Form.Visibility>\n  </Flex.Stack>\n</Form.Handler>\n'}),c=()=>(0,r.jsx)(s.Z,{children:'<Form.Handler>\n  <Field.Toggle\n    label="Show content"\n    valueOn="checked"\n    valueOff="unchecked"\n    variant="buttons"\n    path="/toggleValue"\n    value="unchecked"\n  />\n  <Form.Visibility\n    visibleWhen={{\n      path: \'/toggleValue\',\n      hasValue: \'checked\',\n    }}\n    animate\n  >\n    <P>This is visible</P>\n  </Form.Visibility>\n</Form.Handler>\n'}),h=()=>(0,r.jsx)(s.Z,{noInline:!0,children:'const MyComponent = () => {\n  const { data } = Form.useData(\'example-form\', {\n    toggleValue: false,\n  })\n  const inferDataFunc = React.useCallback(\n    () => data.toggleValue,\n    [data.toggleValue],\n  )\n  return (\n    <Form.Handler id="example-form">\n      <Flex.Stack>\n        <Field.Boolean path="/toggleValue" label="Check me" />\n        <Form.Visibility inferData={inferDataFunc} animate>\n          <P>This is visible</P>\n        </Form.Visibility>\n      </Flex.Stack>\n    </Form.Handler>\n  )\n}\nrender(<MyComponent />)\n'}),u=()=>(0,r.jsx)(s.Z,{children:"<Form.Visibility visible={true}>\n  <P>This is visible</P>\n</Form.Visibility>\n"}),p=()=>(0,r.jsx)(s.Z,{children:'<Form.Handler\n  data={{\n    toBe: true,\n    notToBe: false,\n  }}\n>\n  <Form.Visibility pathTrue="/toBe">\n    <P>This will show, as long as `toBe` is true.</P>\n  </Form.Visibility>\n  <Form.Visibility pathTrue="/notToBe">\n    <P>This will not show until `notToBe` is true.</P>\n  </Form.Visibility>\n</Form.Handler>\n'}),m=()=>(0,r.jsx)(s.Z,{scope:{Tools:o},noInline:!0,children:'const filterDataHandler = ({ props }) => !props[\'data-exclude-field\']\nconst MyForm = () => {\n  return (\n    <Form.Handler\n      defaultData={{\n        isVisible: false,\n      }}\n    >\n      <Flex.Stack>\n        <Field.Boolean\n          label="Visible"\n          variant="button"\n          path="/isVisible"\n          data-exclude-field\n        />\n        <Form.Visibility\n          pathTrue="/isVisible"\n          animate\n          keepInDOM\n          fieldPropsWhenHidden={{\n            \'data-exclude-field\': true,\n          }}\n        >\n          <Field.Selection\n            label="Choose"\n            variant="radio"\n            value="less"\n            path="/mySelection"\n          >\n            <Field.Option value="less" title="Less" />\n            <Field.Option value="more" title="More" />\n          </Field.Selection>\n\n          <Form.Visibility\n            visibleWhen={{\n              path: \'/mySelection\',\n              hasValue: \'more\',\n            }}\n            animate\n            keepInDOM\n            fieldPropsWhenHidden={{\n              \'data-exclude-field\': true,\n            }}\n          >\n            <Field.String label="My String" path="/myString" value="foo" />\n          </Form.Visibility>\n        </Form.Visibility>\n      </Flex.Stack>\n\n      <Output />\n    </Form.Handler>\n  )\n}\nconst Output = () => {\n  const { filterData } = Form.useData()\n  const filteredData = filterData(filterDataHandler)\n  return <Tools.Log data={filteredData} top />\n}\nrender(<MyForm />)\n'}),f=()=>(0,r.jsx)(s.Z,{scope:{Tools:o},noInline:!0,children:'const filterDataPaths = {\n  \'/isVisible\': false,\n  \'/mySelection\': ({ data }) => data.isVisible,\n  \'/myString\': ({ data }) => {\n    return data.isVisible && data.mySelection === \'more\'\n  },\n}\nconst MyForm = () => {\n  return (\n    <Form.Handler\n      defaultData={{\n        myString: \'foo\',\n      }}\n    >\n      <Flex.Stack>\n        <Field.Boolean\n          label="Visible"\n          variant="button"\n          path="/isVisible"\n          defaultValue={false}\n        />\n        <Form.Visibility pathTrue="/isVisible" animate>\n          <Field.Selection\n            label="Choose"\n            variant="radio"\n            value="less"\n            path="/mySelection"\n          >\n            <Field.Option value="less" title="Less" />\n            <Field.Option value="more" title="More" />\n          </Field.Selection>\n\n          <Form.Visibility\n            visibleWhen={{\n              path: \'/mySelection\',\n              hasValue: \'more\',\n            }}\n            animate\n          >\n            <Field.String label="My String" path="/myString" />\n          </Form.Visibility>\n        </Form.Visibility>\n\n        <Form.Visibility\n          pathDefined="/myString"\n          filterData={filterDataPaths}\n          animate\n        >\n          <Card>\n            <P>\n              Result: <Value.String path="/myString" inline />\n            </P>\n          </Card>\n        </Form.Visibility>\n      </Flex.Stack>\n\n      <Output />\n    </Form.Handler>\n  )\n}\nconst Output = () => {\n  const { filterData } = Form.useData()\n  const filteredData = filterData(filterDataPaths)\n  return <Tools.Log data={filteredData} top />\n}\nrender(<MyForm />)\n'});function b(){return(0,r.jsx)(s.Z,{children:'<Form.Handler>\n  <Card stack>\n    <Field.Boolean\n      variant="button"\n      path="/isVisible"\n      defaultValue={true}\n    />\n\n    <Form.Visibility pathTrue="/isVisible" animate>\n      <Field.Name.First path="/foo" defaultValue="foo" />\n      <Field.Name.Last path="/bar" defaultValue="bar" />\n    </Form.Visibility>\n\n    <Value.Provider inheritVisibility>\n      <HeightAnimation>\n        <Value.SummaryList>\n          <Value.Name.First path="/foo" />\n          <Value.Name.First path="/bar" />\n        </Value.SummaryList>\n      </HeightAnimation>\n    </Value.Provider>\n  </Card>\n</Form.Handler>\n'})}function x(){return(0,r.jsx)(s.Z,{children:'<Form.Handler>\n  <Card stack>\n    <Field.Name.First path="/foo" required />\n\n    <Form.Visibility\n      visibleWhen={{\n        path: \'/foo\',\n        isValid: true,\n      }}\n      animate\n    >\n      <Value.Name.First path="/foo" />\n    </Form.Visibility>\n  </Card>\n</Form.Handler>\n'})}function y(e){const n=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",pre:"pre",strong:"strong"},(0,l.ah)(),e.components);return t||F("Examples",!1),u||F("Examples.BasedOnBooleanTrue",!0),p||F("Examples.BasedOnContext",!0),d||F("Examples.BooleanExample",!0),f||F("Examples.FilterData",!0),h||F("Examples.InferData",!0),b||F("Examples.InheritVisibility",!0),m||F("Examples.NestedExample",!0),c||F("Examples.PathValue",!0),x||F("Examples.VisibilityOnValidation",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{children:"Demos"}),"\n",(0,r.jsx)(n.h3,{children:"Boolean example"}),"\n",(0,r.jsx)(d,{}),"\n",(0,r.jsx)(n.h3,{children:"Matching value"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"visibleWhen"})," is pretty powerful. You can use it to show/hide based on the value of a ",(0,r.jsx)(n.code,{children:"path"}),". You can also give it a ",(0,r.jsx)(n.code,{children:"hasValue"})," function that gives you the current value, so you can assert it and return a boolean based on that."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"<Form.Visibility\n  visibleWhen={{\n    path: '/toggleValue',\n    hasValue: (value) => value === 'checked',\n  }}\n>\n  Content\n</Form.Visibility>\n"})}),"\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(n.h3,{children:"Direct properties"}),"\n",(0,r.jsx)(u,{}),"\n",(0,r.jsx)(n.h3,{children:"Based on DataContext"}),"\n",(0,r.jsx)(p,{}),"\n",(0,r.jsx)(n.h3,{children:"InferData"}),"\n",(0,r.jsx)(h,{}),"\n",(0,r.jsx)(n.h3,{children:"Nested visibility example"}),"\n",(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"fieldPropsWhenHidden"})," and ",(0,r.jsx)(n.code,{children:"keepInDOM"})," to keep the content in the DOM, even if it's not visible."]}),"\n",(0,r.jsxs)(n.p,{children:["In this example we filter out all fields that have the ",(0,r.jsx)(n.code,{children:"data-exclude-field"})," attribute. See the console output for the result."]}),"\n",(0,r.jsx)(m,{}),"\n",(0,r.jsx)(n.h3,{children:"Filter data"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," This example uses ",(0,r.jsx)(n.code,{children:"filterData"})," with ",(0,r.jsx)(n.code,{children:"pathDefined"})," on a Visibility component along, which is a declarative way to describe the data to be shown."]}),"\n",(0,r.jsx)(f,{}),"\n",(0,r.jsx)(n.h3,{children:"Inherit visibility"}),"\n",(0,r.jsx)(b,{}),"\n",(0,r.jsx)(n.h3,{children:"Show children when field has no errors (validation)"}),"\n",(0,r.jsx)(x,{})]})}var j=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(y,e)})):y(e)};function F(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},27064:function(e,n,i){i.r(n);var t=i(52322),r=i(45392);function l(e){const n=Object.assign({h2:"h2",p:"p",code:"code",a:"a",h3:"h3",pre:"pre",h4:"h4"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Form.Visibility"})," component allows you to conditionally show or hide components based on the state of data or field validation. You can either provide the values directly via properties or let it read data from a surrounding ",(0,t.jsx)(n.a,{href:"/uilib/extensions/forms/Form/Handler",children:"Form.Handler"}),". This enables dynamic visibility control based on the paths it points to."]}),"\n",(0,t.jsx)(n.h3,{children:"Data driven visibility"}),"\n",(0,t.jsxs)(n.p,{children:["There are several ",(0,t.jsx)(n.a,{href:"/uilib/extensions/forms/Form/Visibility/properties/",children:"properties"})," you can use to control visibility, such as ",(0,t.jsx)(n.code,{children:"pathDefined"}),", ",(0,t.jsx)(n.code,{children:"pathTruthy"}),", ",(0,t.jsx)(n.code,{children:"pathTrue"})," etc."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Form, Field } from \'@dnb/eufemia/extensions/forms\'\n\nrender(\n  <>\n    <Field.Boolean path="/myState" />\n    <Form.Visibility pathTrue="/myState">\n      show me when the data value is true\n    </Form.Visibility>\n  </>,\n)\n'})}),"\n",(0,t.jsx)(n.h4,{children:"Dynamic value driven visibility"}),"\n",(0,t.jsxs)(n.p,{children:["You can also use the ",(0,t.jsx)(n.code,{children:"visibleWhen"})," property to conditionally show the children based on the data value of the path."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Form, Field } from '@dnb/eufemia/extensions/forms'\n\nrender(\n  <>\n    <Field.Boolean path=\"/myState\" />\n    <Form.Visibility\n      visibleWhen={{\n        path: '/myState',\n        hasValue: (value) => value === true,\n      }}\n    >\n      show me when the data value is true\n    </Form.Visibility>\n  </>,\n)\n"})}),"\n",(0,t.jsx)(n.h3,{children:"Validation driven visibility"}),"\n",(0,t.jsxs)(n.p,{children:["You can conditionally display children based on field validation by using the ",(0,t.jsx)(n.code,{children:"visibleWhen"})," property with ",(0,t.jsx)(n.code,{children:"isValid: true"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Form, Field } from '@dnb/eufemia/extensions/forms'\n\nrender(\n  <>\n    <Field.Boolean path=\"/myField\" />\n    <Form.Visibility\n      visibleWhen={{\n        path: '/myField',\n        isValid: true,\n      }}\n    >\n      show me when the validation succeeds\n    </Form.Visibility>\n  </>,\n)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To prevent visibility changes during user interactions like typing, it shows the children first when the field both has no errors and has lost focus (blurred). You can use the ",(0,t.jsx)(n.code,{children:"continuousValidation: true"})," property to immediately show the children when the field has no errors."]}),"\n",(0,t.jsx)(n.h2,{children:"Accessibility"}),"\n",(0,t.jsxs)(n.p,{children:["Children of the ",(0,t.jsx)(n.code,{children:"Form.Visibility"})," component will be hidden from screen readers when visually hidden, even if ",(0,t.jsx)(n.code,{children:"keepInDOM"})," is enabled. You don't need to do anything to make the content additionally inaccessible."]}),"\n",(0,t.jsx)(n.h2,{children:"Animate"}),"\n",(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.code,{children:"animate"})," property to animate the visibility change. It can be used in combination with ",(0,t.jsx)(n.code,{children:"keepInDOM"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Form } from \'@dnb/eufemia/extensions/forms\'\nrender(\n  <>\n    <Field.Boolean path="/myState" />\n    <Form.Visibility pathTrue="/myState" animate>\n      show me when the data value is true\n    </Form.Visibility>\n  </>,\n)\n'})}),"\n",(0,t.jsx)(n.h2,{children:"Keep in DOM"}),"\n",(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.code,{children:"keepInDOM"})," property to keep the content in the DOM, even if it's not visible or accessible. This can be useful for fields that still needs to run validation."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Form } from \'@dnb/eufemia/extensions/forms\'\nrender(\n  <>\n    <Field.Boolean path="/myState" />\n    <Form.Visibility pathTrue="/myState" keepInDOM>\n      show me when the data value is true\n    </Form.Visibility>\n  </>,\n)\n'})}),"\n",(0,t.jsx)(n.h2,{children:"Disable children fields when hidden"}),"\n",(0,t.jsxs)(n.p,{children:["You can disable children fields when they are hidden by using the ",(0,t.jsx)(n.code,{children:"fieldPropsWhenHidden"})," property. It will pass the given properties to the children when the visibility is hidden. It needs to be used in combination with the ",(0,t.jsx)(n.code,{children:"keepInDOM"})," property."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Form } from \'@dnb/eufemia/extensions/forms\'\nrender(\n  <>\n    <Field.Boolean path="/myState" />\n    <Form.Visibility\n      pathTrue="/myState"\n      keepInDOM\n      fieldPropsWhenHidden={{ disabled: true }}\n    >\n      <Field.String />\n    </Form.Visibility>\n  </>,\n)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Check out the ",(0,t.jsx)(n.a,{href:"#nested-visibility-example",children:"Nested visibility example"})," to see how you can use ",(0,t.jsx)(n.code,{children:"fieldPropsWhenHidden"})," and ",(0,t.jsx)(n.code,{children:"keepInDOM"}),"."]}),"\n",(0,t.jsx)(n.h3,{children:"Why is this useful?"}),"\n",(0,t.jsx)(n.p,{children:"In some cases, you want to keep the content in the DOM, even if it's not visible. This can be useful for fields that still needs to run validation."}),"\n",(0,t.jsx)(n.h2,{children:"Inherit visibility"}),"\n",(0,t.jsxs)(n.p,{children:["By using the provider component ",(0,t.jsx)(n.code,{children:"Value.Provider"}),", you can propagate the visibility (with the ",(0,t.jsx)(n.code,{children:"inheritVisibility"})," property) of the parent to all nested values."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Form, Value } from \'@dnb/eufemia/extensions/forms\'\n\nrender(\n  <Form.Handler>\n    <Value.Provider inheritVisibility>\n      <Value.String path="/foo" />\n      <Value.String path="/bar" />\n    </Value.Provider>\n  </Form.Handler>,\n)\n'})})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},38734:function(e,n,i){i.d(n,{Z:function(){return o}});var t=i(84616),r=i(2784),l=i(2394),s=i(21068);const a=["minLength","maxLength","pattern","description","min","max","multipleOf","exclusiveMinimum","exclusiveMaximum"];function o(e){const{generateRef:n,filterData:i,log:o,children:d}=e||{},{fieldPropsRef:c,valuePropsRef:h,data:u,hasContext:p}=(0,r.useContext)(s.Z),m=(0,r.useRef)({});m.current=u;const f=(0,r.useCallback)((()=>{const e=Object.entries((null==c?void 0:c.current)||{}).reduce(((e,n)=>{let[r,s]=n;if(r.startsWith("/")){const n=r.substring(1),o=n.split("/"),d=o.length,c={type:s.valueType||"string"};for(const e of a)s[e]&&(c[e]=s[e]);if(d>1){const n=[""];for(const r of o){n.push(r);const a=n.join("/properties/"),d=n.length-1===o.length,h=l.e$(e,a)?l.U2(e,a):null,u=d?c:h;if(d)!1!==(null==i?void 0:i[a])&&l.t8(e,a,u);else{const n={type:"object",...h},r=[];s.required&&r.push(o.at(-1)),null!=h&&h.required&&r.push.apply(r,(0,t.Z)(h.required)),r.length>0&&(n.required=r),!1!==(null==i?void 0:i[a])&&l.t8(e,a,n)}}}else!1!==(null==i?void 0:i[r])&&l.t8(e.properties,r,c),s.required&&e.required.push(n)}return e}),{type:"object",properties:{},required:[]}),n=Object.entries((null==c?void 0:c.current)||{}).reduce(((e,n)=>{let[i,t]=n;if(i.startsWith("/")){const n={};for(const e in t)void 0!==t[e]&&"function"!=typeof t[e]&&(n[e]=t[e]);l.t8(e,i,n)}return e}),{}),r=Object.entries((null==h?void 0:h.current)||{}).reduce(((e,n)=>{let[i,t]=n;if(i.startsWith("/")){const n={};for(const e in t)void 0!==t[e]&&"function"!=typeof t[e]&&(n[e]=t[e]);l.t8(e,i,n)}return e}),{});return 0===e.required.length&&delete e.required,{schema:e,data:m.current,propsOfFields:n,propsOfValues:r}}),[c,i,h]);return p&&(o&&console.log(f().schema),n&&(n.current=f)),d}},10454:function(e,n,i){i.d(n,{Z:function(){return s}});var t=i(2784),r=i(2394),l=i(21068);function s(e){const{log:n,generateRef:i,filterData:s,children:a}=e||{},{fieldPropsRef:o,valuePropsRef:d,data:c,hasContext:h}=(0,t.useContext)(l.Z);(0,t.useRef)({}).current=c;const u=(0,t.useCallback)((()=>{const e=Object.entries((null==o?void 0:o.current)||{}).reduce(((e,n)=>{let[i,l]=n;if(i.startsWith("/")){const n={};for(const e in l)void 0===l[e]||"function"==typeof l[e]||(0,t.isValidElement)(l[e])||(n[e]=l[e]);!1!==(null==s?void 0:s[i])&&r.t8(e,i,n)}return e}),{}),n=Object.entries((null==d?void 0:d.current)||{}).reduce(((e,n)=>{let[i,l]=n;if(i.startsWith("/")){const n={};for(const e in l)void 0===l[e]||"function"==typeof l[e]||(0,t.isValidElement)(l[e])||(n[e]=l[e]);!1!==(null==s?void 0:s[i])&&r.t8(e,i,n)}return e}),{});return{propsOfFields:e,propsOfValues:n}}),[o,s,d]);return h&&(n&&console.log(u()),i&&(i.current=u)),a}},92581:function(e,n,i){i.d(n,{Z:function(){return c}});var t=i(2784),r=i(21068),l=i(54109).Z,s=i(9149),a=i(52322);function o(e){let{placeholder:n,label:i,data:o,...c}=e;const{data:h}=(0,t.useContext)(r.Z);return(0,a.jsxs)(l,{element:"output",backgroundColor:"sand-yellow",style:{maxWidth:"80vw"},innerSpace:!0,...c,children:[i&&(0,a.jsx)(s.Z,{bottom:!0,children:i}),(0,a.jsxs)("pre",{children:[n&&0===Object.keys((null!=o?o:h)||{}).length?n:JSON.stringify(d(null!=o?o:h),null,2)," "]})]})}function d(e,n){return void 0===n&&(n="undefined"),void 0===e?n:"object"==typeof e&&e!==n?{...e,...Object.fromEntries(Object.entries(e).map((e=>{let[n,i]=e;return[n,d(i)]})))}:e}o._supportsSpacingProps=!0;var c=o},4902:function(e,n,i){i.r(n),i.d(n,{GenerateSchema:function(){return t.Z},ListAllProps:function(){return r.Z},Log:function(){return l.Z}});var t=i(38734),r=i(10454),l=i(92581)},99210:function(e,n,i){i.d(n,{Z:function(){return a}});var t=i(72779),r=i.n(t),l=i(80215),s=i(52322);function a(e){let{className:n=null,...i}=e;return(0,s.jsx)(l.Z,{className:r()("dnb-forms-test-element",n),...i})}a._supportsSpacingProps=!0}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-form-visibility-mdx-b403362da8abf7567a55.js.map