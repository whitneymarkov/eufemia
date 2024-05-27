"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[3123],{55838:function(n,e,t){t.r(e),t.d(e,{default:function(){return x}});var i={};t.r(i),t.d(i,{BasedOnBooleanTrue:function(){return h},BasedOnContext:function(){return u},BooleanExample:function(){return r},FilterData:function(){return p},InferData:function(){return c},NestedExample:function(){return m},PathValue:function(){return d}});var l=t(52322),a=t(45392),o=(t(2784),t(75333)),s=t(99210);const r=()=>(0,l.jsx)(o.Z,{scope:{TestElement:s.Z},children:'<Form.Handler>\n  <Flex.Stack>\n    <Field.Boolean\n      label="Show content"\n      variant="buttons"\n      path="/toggleValue"\n      value={false}\n    />\n    <Form.Visibility pathTrue="/toggleValue" animate>\n      <TestElement>Item 1</TestElement>\n      <TestElement>Item 2</TestElement>\n    </Form.Visibility>\n  </Flex.Stack>\n</Form.Handler>\n'}),d=()=>(0,l.jsx)(o.Z,{children:'<Form.Handler>\n  <Field.Toggle\n    label="Show content"\n    valueOn="checked"\n    valueOff="unchecked"\n    variant="buttons"\n    path="/toggleValue"\n    value="unchecked"\n  />\n  <Form.Visibility\n    visibleWhen={{\n      path: \'/toggleValue\',\n      hasValue: \'checked\',\n    }}\n    animate\n  >\n    <P>This is visible</P>\n  </Form.Visibility>\n</Form.Handler>\n'}),c=()=>(0,l.jsx)(o.Z,{noInline:!0,children:'const MyComponent = () => {\n  const { data } = Form.useData(\'example-form\', {\n    toggleValue: false,\n  })\n  const inferDataFunc = React.useCallback(\n    () => data.toggleValue,\n    [data.toggleValue],\n  )\n  return (\n    <Form.Handler id="example-form">\n      <Flex.Stack>\n        <Field.Boolean path="/toggleValue" label="Check me" />\n        <Form.Visibility inferData={inferDataFunc} animate>\n          <P>This is visible</P>\n        </Form.Visibility>\n      </Flex.Stack>\n    </Form.Handler>\n  )\n}\nrender(<MyComponent />)\n'}),h=()=>(0,l.jsx)(o.Z,{children:"<Form.Visibility visible={true}>\n  <P>This is visible</P>\n</Form.Visibility>\n"}),u=()=>(0,l.jsx)(o.Z,{children:'<Form.Handler\n  data={{\n    toBe: true,\n    notToBe: false,\n  }}\n>\n  <Form.Visibility pathTrue="/toBe">\n    <P>This will show, as long as `toBe` is true.</P>\n  </Form.Visibility>\n  <Form.Visibility pathTrue="/notToBe">\n    <P>This will not show until `notToBe` is true.</P>\n  </Form.Visibility>\n</Form.Handler>\n'}),m=()=>(0,l.jsx)(o.Z,{noInline:!0,children:'const filterDataHandler = ({ props }) => !props[\'data-exclude-field\']\nconst MyForm = () => {\n  return (\n    <Form.Handler\n      defaultData={{\n        isVisible: false,\n      }}\n    >\n      <Flex.Stack>\n        <Field.Boolean\n          label="Visible"\n          variant="button"\n          path="/isVisible"\n          data-exclude-field\n        />\n        <Form.Visibility\n          pathTrue="/isVisible"\n          animate\n          keepInDOM\n          fieldPropsWhenHidden={{\n            \'data-exclude-field\': true,\n          }}\n        >\n          <Field.Selection\n            label="Choose"\n            variant="radio"\n            value="less"\n            path="/mySelection"\n          >\n            <Field.Option value="less" title="Less" />\n            <Field.Option value="more" title="More" />\n          </Field.Selection>\n\n          <Form.Visibility\n            visibleWhen={{\n              path: \'/mySelection\',\n              hasValue: \'more\',\n            }}\n            animate\n            keepInDOM\n            fieldPropsWhenHidden={{\n              \'data-exclude-field\': true,\n            }}\n          >\n            <Field.String label="My String" path="/myString" value="foo" />\n          </Form.Visibility>\n        </Form.Visibility>\n      </Flex.Stack>\n      <Log />\n    </Form.Handler>\n  )\n}\nconst Log = () => {\n  const { filterData } = Form.useData()\n  console.log(filterData(filterDataHandler))\n  return null\n}\nrender(<MyForm />)\n'}),p=()=>(0,l.jsx)(o.Z,{noInline:!0,children:'const filterDataPaths = {\n  \'/isVisible\': false,\n  \'/mySelection\': ({ data }) => data.isVisible,\n  \'/myString\': ({ data }) => {\n    return data.isVisible && data.mySelection === \'more\'\n  },\n}\nconst MyForm = () => {\n  return (\n    <Form.Handler\n      defaultData={{\n        myString: \'foo\',\n      }}\n    >\n      <Flex.Stack>\n        <Field.Boolean\n          label="Visible"\n          variant="button"\n          path="/isVisible"\n        />\n        <Form.Visibility visible pathTrue="/isVisible" animate>\n          <Field.Selection\n            label="Choose"\n            variant="radio"\n            value="less"\n            path="/mySelection"\n          >\n            <Field.Option value="less" title="Less" />\n            <Field.Option value="more" title="More" />\n          </Field.Selection>\n\n          <Form.Visibility\n            visibleWhen={{\n              path: \'/mySelection\',\n              hasValue: \'more\',\n            }}\n            animate\n          >\n            <Field.String label="My String" path="/myString" />\n          </Form.Visibility>\n        </Form.Visibility>\n\n        <Form.Visibility\n          pathDefined="/myString"\n          filterData={filterDataPaths}\n          animate\n        >\n          <Card>\n            <P>\n              Result: <Value.String path="/myString" inline />\n            </P>\n          </Card>\n        </Form.Visibility>\n      </Flex.Stack>\n\n      <Log />\n    </Form.Handler>\n  )\n}\nconst Log = () => {\n  const { filterData } = Form.useData()\n  console.log(filterData(filterDataPaths))\n  return null\n}\nrender(<MyForm />)\n'});function b(n){const e=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",pre:"pre",strong:"strong"},(0,a.ah)(),n.components);return i||F("Examples",!1),h||F("Examples.BasedOnBooleanTrue",!0),u||F("Examples.BasedOnContext",!0),r||F("Examples.BooleanExample",!0),p||F("Examples.FilterData",!0),c||F("Examples.InferData",!0),m||F("Examples.NestedExample",!0),d||F("Examples.PathValue",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{children:"Demos"}),"\n",(0,l.jsx)(e.h3,{children:"Boolean example"}),"\n",(0,l.jsx)(r,{}),"\n",(0,l.jsx)(e.h3,{children:"Matching value"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"visibleWhen"})," is pretty powerful. You can use it to show/hide based on the value of a ",(0,l.jsx)(e.code,{children:"path"}),". You can also give it a ",(0,l.jsx)(e.code,{children:"withValue"})," function that gives you the current value, so you can assert it and return a boolean based on that."]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-jsx",children:"<Form.Visibility\n  visibleWhen={{\n    path: '/toggleValue',\n    withValue: (value) => value === 'checked',\n  }}\n>\n  Content\n</Form.Visibility>\n"})}),"\n",(0,l.jsx)(d,{}),"\n",(0,l.jsx)(e.h3,{children:"Direct properties"}),"\n",(0,l.jsx)(h,{}),"\n",(0,l.jsx)(e.h3,{children:"Based on DataContext"}),"\n",(0,l.jsx)(u,{}),"\n",(0,l.jsx)(e.h3,{children:"InferData"}),"\n",(0,l.jsx)(c,{}),"\n",(0,l.jsx)(e.h3,{children:"Nested visibility example"}),"\n",(0,l.jsxs)(e.p,{children:["Use ",(0,l.jsx)(e.code,{children:"fieldPropsWhenHidden"})," and ",(0,l.jsx)(e.code,{children:"keepInDOM"})," to keep the content in the DOM, even if it's not visible."]}),"\n",(0,l.jsxs)(e.p,{children:["In this example we filter out all fields that have the ",(0,l.jsx)(e.code,{children:"data-exclude-field"})," attribute. See the console output for the result."]}),"\n",(0,l.jsx)(m,{}),"\n",(0,l.jsx)(e.h3,{children:"Filter data"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"Note:"})," This example uses ",(0,l.jsx)(e.code,{children:"filterData"})," with ",(0,l.jsx)(e.code,{children:"pathDefined"})," on a Visibility component along, which is a declarative way to describe the data to be shown."]}),"\n",(0,l.jsx)(p,{})]})}var x=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,a.ah)(),n.components);return e?(0,l.jsx)(e,Object.assign({},n,{children:(0,l.jsx)(b,n)})):b(n)};function F(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},99210:function(n,e,t){t.d(e,{Z:function(){return s}});var i=t(72779),l=t.n(i),a=t(80215),o=t(52322);function s(n){let{className:e=null,...t}=n;return(0,o.jsx)(a.Z,{className:l()("dnb-forms-test-element",e),...t})}s._supportsSpacingProps=!0}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-form-visibility-demos-mdx-fe0019c0b4616a05adb6.js.map