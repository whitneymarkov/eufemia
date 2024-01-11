"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[44969,73002,43272],{4991:function(n,e,t){t.r(e);var s=t(52322),i=t(45392),o=t(46235);function a(n){return(0,s.jsx)(o.default,{})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(a,n)})):a()}},53128:function(n,e,t){t.r(e),t.d(e,{default:function(){return p}});var s={};t.r(s),t.d(s,{BasedOnBooleanTrue:function(){return d},BasedOnContext:function(){return u},BooleanExample:function(){return l},InferData:function(){return h},PathValue:function(){return c}});var i=t(52322),o=t(45392),a=(t(2784),t(50716)),r=t(99210);const l=()=>(0,i.jsx)(a.Z,{scope:{TestElement:r.Z},children:'<Form.Handler>\n  <Flex.Stack>\n    <Field.Boolean\n      label="Show content"\n      variant="buttons"\n      path="/toggleValue"\n      value={false}\n    />\n    <Form.Visibility pathTrue="/toggleValue">\n      <TestElement>Item 1</TestElement>\n      <TestElement>Item 2</TestElement>\n    </Form.Visibility>\n  </Flex.Stack>\n</Form.Handler>\n'}),c=()=>(0,i.jsx)(a.Z,{children:'<Form.Handler>\n  <Field.Toggle\n    label="Show content"\n    valueOn="checked"\n    valueOff="unchecked"\n    variant="buttons"\n    path="/toggleValue"\n    value="unchecked"\n  />\n  <Form.Visibility pathValue="/toggleValue" whenValue="checked">\n    <P>This is visible</P>\n  </Form.Visibility>\n</Form.Handler>\n'}),h=()=>(0,i.jsx)(a.Z,{noInline:!0,children:'const MyComponent = () => {\n  const [state, setState] = React.useState(false)\n  const inferData = React.useCallback(() => state, [state])\n  return (\n    <Form.Handler>\n      <Field.Boolean\n        path="/toggleValue"\n        onChange={setState}\n        label="Check me"\n      />\n      <Form.Visibility inferData={inferData}>\n        <P>This is visible</P>\n      </Form.Visibility>\n    </Form.Handler>\n  )\n}\nrender(<MyComponent />)\n'}),d=()=>(0,i.jsx)(a.Z,{children:"<Form.Visibility visible={true}>\n  <P>This is visible</P>\n</Form.Visibility>\n"}),u=()=>(0,i.jsx)(a.Z,{children:'<Form.Handler\n  data={{\n    toBe: true,\n    notToBe: false,\n  }}\n>\n  <Form.Visibility pathTrue="/toBe">\n    <P>This will show, as long as `toBe` is true.</P>\n  </Form.Visibility>\n  <Form.Visibility pathTrue="/notToBe">\n    <P>This will not show until `notToBe` is true.</P>\n  </Form.Visibility>\n</Form.Handler>\n'});function m(n){const e=Object.assign({h2:"h2",h3:"h3"},(0,o.ah)(),n.components);return s||x("Examples",!1),d||x("Examples.BasedOnBooleanTrue",!0),u||x("Examples.BasedOnContext",!0),l||x("Examples.BooleanExample",!0),h||x("Examples.InferData",!0),c||x("Examples.PathValue",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{children:"Demos"}),"\n",(0,i.jsx)(e.h3,{children:"Boolean example"}),"\n",(0,i.jsx)(l,{}),"\n",(0,i.jsx)(e.h3,{children:"Matching value"}),"\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(e.h3,{children:"Direct properties"}),"\n",(0,i.jsx)(d,{}),"\n",(0,i.jsx)(e.h3,{children:"Based on DataContext"}),"\n",(0,i.jsx)(u,{}),"\n",(0,i.jsx)(e.h3,{children:"InferData"}),"\n",(0,i.jsx)(h,{})]})}var p=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,o.ah)(),n.components);return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(m,n)})):m(n)};function x(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},46235:function(n,e,t){t.r(e);var s=t(52322),i=t(45392),o=t(53128);function a(n){const e=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,i.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{children:"Description"}),"\n",(0,s.jsxs)(e.p,{children:["The ",(0,s.jsx)(e.code,{children:"Visibility"})," component makes it possible to show or hide components on the screen based on the state of data. It can either be fed with the values directly via props, or it can read data from a surrounding ",(0,s.jsx)(e.a,{href:"/uilib/extensions/forms/extended-features/Form/Handler",children:"Form.Handler"})," and show or hide components based on the data it points to."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-tsx",children:"import { Form } from '@dnb/eufemia/extensions/forms'\nrender(\n  <Form.Visibility pathTruthy=\"/dataPath\">\n    show me when the data path value is truthy\n  </Form.Visibility>,\n)\n"})}),"\n",(0,s.jsx)(o.default,{})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(a,n)})):a(n)}},99210:function(n,e,t){t.d(e,{Z:function(){return r}});var s=t(72779),i=t.n(s),o=t(80215),a=t(52322);function r(n){let{className:e=null,...t}=n;return(0,a.jsx)(o.Z,{className:i()("dnb-forms-test-element",e),...t})}r._supportsSpacingProps=!0}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-extended-features-form-visibility-mdx-52494a85458f74f16530.js.map