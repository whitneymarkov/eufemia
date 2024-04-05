"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[9925],{2121:function(n,r,e){e.r(r),e.d(r,{default:function(){return d}});var o={};e.r(o),e.d(o,{HasErrors:function(){return a}});var t=e(52322),s=e(45392),i=e(99587);function a(){return(0,t.jsx)(i.Z,{noInline:!0,children:'const Component = () => {\n  const { data } = Form.useData(\'default-id\', {\n    showError: true,\n    isVisible: true,\n  })\n  const { hasErrors } = Form.useError(\'default-id\')\n  return (\n    <Form.Handler id="default-id">\n      <Flex.Stack>\n        <Section innerSpace backgroundColor="sand-yellow" breakout={false}>\n          <output>\n            <pre>hasErrors: {JSON.stringify(hasErrors(), null, 2)}</pre>\n          </output>\n        </Section>\n\n        <Field.Boolean label="Error" variant="button" path="/showError" />\n\n        <Field.Boolean\n          label="Visible"\n          variant="button"\n          path="/isVisible"\n        />\n\n        <Form.Visibility pathTrue="/isVisible">\n          <Field.String\n            path="/foo"\n            label="Label"\n            value={data.showError ? \'error\' : \'valid\'}\n            pattern="^valid$"\n            validateInitially\n          />\n        </Form.Visibility>\n      </Flex.Stack>\n    </Form.Handler>\n  )\n}\nrender(<Component />)\n'})}function l(n){const r=Object.assign({h2:"h2",h3:"h3"},(0,s.ah)(),n.components);return o||u("Examples",!1),a||u("Examples.HasErrors",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{children:"Demos"}),"\n",(0,t.jsx)(r.h3,{children:"Check for errors with hasErrors"}),"\n",(0,t.jsx)(a,{})]})}var d=function(n){void 0===n&&(n={});const{wrapper:r}=Object.assign({},(0,s.ah)(),n.components);return r?(0,t.jsx)(r,Object.assign({},n,{children:(0,t.jsx)(l,n)})):l(n)};function u(n,r){throw new Error("Expected "+(r?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-extended-features-form-use-error-demos-mdx-f6c969f79b7561d027f6.js.map