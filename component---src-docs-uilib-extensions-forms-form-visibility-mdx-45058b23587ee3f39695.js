"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[63975,3123,4542],{20233:function(e,n,i){i.r(n);var t=i(52322),a=i(45392),l=i(27064),s=i(55838);function r(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.default,{}),"\n",(0,t.jsx)(s.default,{})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(r,e)})):r()}},55838:function(e,n,i){i.r(n),i.d(n,{default:function(){return f}});var t={};i.r(t),i.d(t,{BasedOnBooleanTrue:function(){return c},BasedOnContext:function(){return u},BooleanExample:function(){return o},FilterData:function(){return p},InferData:function(){return h},InheritVisibility:function(){return b},NestedExample:function(){return m},PathValue:function(){return d}});var a=i(52322),l=i(45392),s=(i(2784),i(64368)),r=i(99210);const o=()=>(0,a.jsx)(s.Z,{scope:{TestElement:r.Z},children:'<Form.Handler>\n  <Flex.Stack>\n    <Field.Boolean\n      label="Show content"\n      variant="buttons"\n      path="/toggleValue"\n      value={false}\n    />\n    <Form.Visibility pathTrue="/toggleValue" animate>\n      <TestElement>Item 1</TestElement>\n      <TestElement>Item 2</TestElement>\n    </Form.Visibility>\n  </Flex.Stack>\n</Form.Handler>\n'}),d=()=>(0,a.jsx)(s.Z,{children:'<Form.Handler>\n  <Field.Toggle\n    label="Show content"\n    valueOn="checked"\n    valueOff="unchecked"\n    variant="buttons"\n    path="/toggleValue"\n    value="unchecked"\n  />\n  <Form.Visibility\n    visibleWhen={{\n      path: \'/toggleValue\',\n      hasValue: \'checked\',\n    }}\n    animate\n  >\n    <P>This is visible</P>\n  </Form.Visibility>\n</Form.Handler>\n'}),h=()=>(0,a.jsx)(s.Z,{noInline:!0,children:'const MyComponent = () => {\n  const { data } = Form.useData(\'example-form\', {\n    toggleValue: false,\n  })\n  const inferDataFunc = React.useCallback(\n    () => data.toggleValue,\n    [data.toggleValue],\n  )\n  return (\n    <Form.Handler id="example-form">\n      <Flex.Stack>\n        <Field.Boolean path="/toggleValue" label="Check me" />\n        <Form.Visibility inferData={inferDataFunc} animate>\n          <P>This is visible</P>\n        </Form.Visibility>\n      </Flex.Stack>\n    </Form.Handler>\n  )\n}\nrender(<MyComponent />)\n'}),c=()=>(0,a.jsx)(s.Z,{children:"<Form.Visibility visible={true}>\n  <P>This is visible</P>\n</Form.Visibility>\n"}),u=()=>(0,a.jsx)(s.Z,{children:'<Form.Handler\n  data={{\n    toBe: true,\n    notToBe: false,\n  }}\n>\n  <Form.Visibility pathTrue="/toBe">\n    <P>This will show, as long as `toBe` is true.</P>\n  </Form.Visibility>\n  <Form.Visibility pathTrue="/notToBe">\n    <P>This will not show until `notToBe` is true.</P>\n  </Form.Visibility>\n</Form.Handler>\n'}),m=()=>(0,a.jsx)(s.Z,{noInline:!0,children:'const filterDataHandler = ({ props }) => !props[\'data-exclude-field\']\nconst MyForm = () => {\n  return (\n    <Form.Handler\n      defaultData={{\n        isVisible: false,\n      }}\n    >\n      <Flex.Stack>\n        <Field.Boolean\n          label="Visible"\n          variant="button"\n          path="/isVisible"\n          data-exclude-field\n        />\n        <Form.Visibility\n          pathTrue="/isVisible"\n          animate\n          keepInDOM\n          fieldPropsWhenHidden={{\n            \'data-exclude-field\': true,\n          }}\n        >\n          <Field.Selection\n            label="Choose"\n            variant="radio"\n            value="less"\n            path="/mySelection"\n          >\n            <Field.Option value="less" title="Less" />\n            <Field.Option value="more" title="More" />\n          </Field.Selection>\n\n          <Form.Visibility\n            visibleWhen={{\n              path: \'/mySelection\',\n              hasValue: \'more\',\n            }}\n            animate\n            keepInDOM\n            fieldPropsWhenHidden={{\n              \'data-exclude-field\': true,\n            }}\n          >\n            <Field.String label="My String" path="/myString" value="foo" />\n          </Form.Visibility>\n        </Form.Visibility>\n      </Flex.Stack>\n\n      <Output />\n    </Form.Handler>\n  )\n}\nconst Output = () => {\n  const { filterData } = Form.useData()\n  const filteredData = filterData(filterDataHandler)\n  return (\n    <Section element="output" innerSpace backgroundColor="sand-yellow" top>\n      {JSON.stringify(filteredData || {}, null, 4)}\n    </Section>\n  )\n}\nrender(<MyForm />)\n'}),p=()=>(0,a.jsx)(s.Z,{noInline:!0,children:'const filterDataPaths = {\n  \'/isVisible\': false,\n  \'/mySelection\': ({ data }) => data.isVisible,\n  \'/myString\': ({ data }) => {\n    return data.isVisible && data.mySelection === \'more\'\n  },\n}\nconst MyForm = () => {\n  return (\n    <Form.Handler\n      defaultData={{\n        myString: \'foo\',\n      }}\n    >\n      <Flex.Stack>\n        <Field.Boolean\n          label="Visible"\n          variant="button"\n          path="/isVisible"\n          defaultValue={false}\n        />\n        <Form.Visibility pathTrue="/isVisible" animate>\n          <Field.Selection\n            label="Choose"\n            variant="radio"\n            value="less"\n            path="/mySelection"\n          >\n            <Field.Option value="less" title="Less" />\n            <Field.Option value="more" title="More" />\n          </Field.Selection>\n\n          <Form.Visibility\n            visibleWhen={{\n              path: \'/mySelection\',\n              hasValue: \'more\',\n            }}\n            animate\n          >\n            <Field.String label="My String" path="/myString" />\n          </Form.Visibility>\n        </Form.Visibility>\n\n        <Form.Visibility\n          pathDefined="/myString"\n          filterData={filterDataPaths}\n          animate\n        >\n          <Card>\n            <P>\n              Result: <Value.String path="/myString" inline />\n            </P>\n          </Card>\n        </Form.Visibility>\n      </Flex.Stack>\n\n      <Output />\n    </Form.Handler>\n  )\n}\nconst Output = () => {\n  const { filterData } = Form.useData()\n  const filteredData = filterData(filterDataPaths)\n  return (\n    <Section element="output" innerSpace backgroundColor="sand-yellow" top>\n      {JSON.stringify(filteredData || {}, null, 4)}\n    </Section>\n  )\n}\nrender(<MyForm />)\n'});function b(){return(0,a.jsx)(s.Z,{children:'<Form.Handler>\n  <Card stack>\n    <Field.Boolean\n      variant="button"\n      path="/isVisible"\n      defaultValue={true}\n    />\n\n    <Form.Visibility pathTrue="/isVisible" animate>\n      <Field.Name.First path="/foo" defaultValue="foo" />\n      <Field.Name.Last path="/bar" defaultValue="bar" />\n    </Form.Visibility>\n\n    <Value.Provider inheritVisibility>\n      <HeightAnimation>\n        <Value.SummaryList>\n          <Value.Name.First path="/foo" />\n          <Value.Name.First path="/bar" />\n        </Value.SummaryList>\n      </HeightAnimation>\n    </Value.Provider>\n  </Card>\n</Form.Handler>\n'})}function x(e){const n=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",pre:"pre",strong:"strong"},(0,l.ah)(),e.components);return t||y("Examples",!1),c||y("Examples.BasedOnBooleanTrue",!0),u||y("Examples.BasedOnContext",!0),o||y("Examples.BooleanExample",!0),p||y("Examples.FilterData",!0),h||y("Examples.InferData",!0),b||y("Examples.InheritVisibility",!0),m||y("Examples.NestedExample",!0),d||y("Examples.PathValue",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{children:"Demos"}),"\n",(0,a.jsx)(n.h3,{children:"Boolean example"}),"\n",(0,a.jsx)(o,{}),"\n",(0,a.jsx)(n.h3,{children:"Matching value"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"visibleWhen"})," is pretty powerful. You can use it to show/hide based on the value of a ",(0,a.jsx)(n.code,{children:"path"}),". You can also give it a ",(0,a.jsx)(n.code,{children:"hasValue"})," function that gives you the current value, so you can assert it and return a boolean based on that."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"<Form.Visibility\n  visibleWhen={{\n    path: '/toggleValue',\n    hasValue: (value) => value === 'checked',\n  }}\n>\n  Content\n</Form.Visibility>\n"})}),"\n",(0,a.jsx)(d,{}),"\n",(0,a.jsx)(n.h3,{children:"Direct properties"}),"\n",(0,a.jsx)(c,{}),"\n",(0,a.jsx)(n.h3,{children:"Based on DataContext"}),"\n",(0,a.jsx)(u,{}),"\n",(0,a.jsx)(n.h3,{children:"InferData"}),"\n",(0,a.jsx)(h,{}),"\n",(0,a.jsx)(n.h3,{children:"Nested visibility example"}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"fieldPropsWhenHidden"})," and ",(0,a.jsx)(n.code,{children:"keepInDOM"})," to keep the content in the DOM, even if it's not visible."]}),"\n",(0,a.jsxs)(n.p,{children:["In this example we filter out all fields that have the ",(0,a.jsx)(n.code,{children:"data-exclude-field"})," attribute. See the console output for the result."]}),"\n",(0,a.jsx)(m,{}),"\n",(0,a.jsx)(n.h3,{children:"Filter data"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note:"})," This example uses ",(0,a.jsx)(n.code,{children:"filterData"})," with ",(0,a.jsx)(n.code,{children:"pathDefined"})," on a Visibility component along, which is a declarative way to describe the data to be shown."]}),"\n",(0,a.jsx)(p,{}),"\n",(0,a.jsx)(n.h3,{children:"Inherit visibility"}),"\n",(0,a.jsx)(b,{})]})}var f=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(x,e)})):x(e)};function y(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},27064:function(e,n,i){i.r(n);var t=i(52322),a=i(45392);function l(e){const n=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre",h3:"h3"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Form.Visibility"})," component makes it possible to show or hide components on the screen based on the state of data. It can either be fed with the values directly via properties, or it can read data from a surrounding ",(0,t.jsx)(n.a,{href:"/uilib/extensions/forms/Form/Handler",children:"Form.Handler"})," and show or hide components based on the data it points to."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Form } from \'@dnb/eufemia/extensions/forms\'\nrender(\n  <>\n    <Field.Boolean path="/myState" />\n    <Form.Visibility pathTrue="/myState">\n      show me when the state value is true\n    </Form.Visibility>\n  </>,\n)\n'})}),"\n",(0,t.jsx)(n.h2,{children:"Accessibility"}),"\n",(0,t.jsxs)(n.p,{children:["Children of the ",(0,t.jsx)(n.code,{children:"Form.Visibility"})," component will be hidden from screen readers when visually hidden, even if ",(0,t.jsx)(n.code,{children:"keepInDOM"})," is enabled. You don't need to do anything to make the content additionally inaccessible."]}),"\n",(0,t.jsx)(n.h2,{children:"Animate"}),"\n",(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.code,{children:"animate"})," property to animate the visibility change. It can be used in combination with ",(0,t.jsx)(n.code,{children:"keepInDOM"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Form } from \'@dnb/eufemia/extensions/forms\'\nrender(\n  <>\n    <Field.Boolean path="/myState" />\n    <Form.Visibility pathTrue="/myState" animate>\n      show me when the state value is true\n    </Form.Visibility>\n  </>,\n)\n'})}),"\n",(0,t.jsx)(n.h2,{children:"Keep in DOM"}),"\n",(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.code,{children:"keepInDOM"})," property to keep the content in the DOM, even if it's not visible or accessible. This can be useful for fields that still needs to run validation."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Form } from \'@dnb/eufemia/extensions/forms\'\nrender(\n  <>\n    <Field.Boolean path="/myState" />\n    <Form.Visibility pathTrue="/myState" keepInDOM>\n      show me when the state value is true\n    </Form.Visibility>\n  </>,\n)\n'})}),"\n",(0,t.jsx)(n.h2,{children:"Disable children fields when hidden"}),"\n",(0,t.jsxs)(n.p,{children:["You can disable children fields when they are hidden by using the ",(0,t.jsx)(n.code,{children:"fieldPropsWhenHidden"})," property. It will pass the given properties to the children when the visibility is hidden. It needs to be used in combination with the ",(0,t.jsx)(n.code,{children:"keepInDOM"})," property."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Form } from \'@dnb/eufemia/extensions/forms\'\nrender(\n  <>\n    <Field.Boolean path="/myState" />\n    <Form.Visibility\n      pathTrue="/myState"\n      keepInDOM\n      fieldPropsWhenHidden={{ disabled: true }}\n    >\n      <Field.String />\n    </Form.Visibility>\n  </>,\n)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Check out the ",(0,t.jsx)(n.a,{href:"#nested-visibility-example",children:"Nested visibility example"})," to see how you can use ",(0,t.jsx)(n.code,{children:"fieldPropsWhenHidden"})," and ",(0,t.jsx)(n.code,{children:"keepInDOM"}),"."]}),"\n",(0,t.jsx)(n.h3,{children:"Why is this useful?"}),"\n",(0,t.jsx)(n.p,{children:"In some cases, you want to keep the content in the DOM, even if it's not visible. This can be useful for fields that still needs to run validation."}),"\n",(0,t.jsx)(n.h2,{children:"Inherit visibility"}),"\n",(0,t.jsxs)(n.p,{children:["By using the provider component ",(0,t.jsx)(n.code,{children:"Value.Provider"}),", you can propagate the visibility (with the ",(0,t.jsx)(n.code,{children:"inheritVisibility"})," property) of the parent to all nested values."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Form, Value } from \'@dnb/eufemia/extensions/forms\'\n\nrender(\n  <Form.Handler>\n    <Value.Provider inheritVisibility>\n      <Value.String path="/foo" />\n      <Value.String path="/bar" />\n    </Value.Provider>\n  </Form.Handler>,\n)\n'})})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},99210:function(e,n,i){i.d(n,{Z:function(){return r}});var t=i(72779),a=i.n(t),l=i(80215),s=i(52322);function r(e){let{className:n=null,...i}=e;return(0,s.jsx)(l.Z,{className:a()("dnb-forms-test-element",n),...i})}r._supportsSpacingProps=!0}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-form-visibility-mdx-45058b23587ee3f39695.js.map