"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[14502,78259,93503],{52359:function(n,e,t){t.r(e);var r=t(52322),o=t(45392),i=t(24532),s=t(97446);function a(n){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.default,{}),"\n",(0,r.jsx)(s.default,{})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,o.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(a,n)})):a()}},97446:function(n,e,t){t.r(e);var r=t(52322),o=t(45392),i=t(88249);function s(n){const e=Object.assign({h2:"h2"},(0,o.ah)(),n.components);return i||a("Examples",!1),i.Default||a("Examples.Default",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{children:"Demo"}),"\n",(0,r.jsx)(i.Default,{})]})}function a(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,o.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(s,n)})):s(n)}},24532:function(n,e,t){t.r(e);var r=t(52322),o=t(45392);function i(n){const e=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,o.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{children:"Description"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"Wizard.Buttons"})," is a combination of ",(0,r.jsx)(e.a,{href:"/uilib/extensions/forms/Wizard/Buttons/PreviousButton/",children:"PreviousButton"})," and ",(0,r.jsx)(e.a,{href:"/uilib/extensions/forms/Wizard/Buttons/NextButton/",children:"NextButton"})," for navigating between steps/pages."]}),"\n",(0,r.jsx)(e.p,{children:"Only the relevant button is shown, depending on the current step."}),"\n",(0,r.jsxs)(e.p,{children:["These two buttons are wrapped in a ",(0,r.jsx)(e.a,{href:"/uilib/extensions/forms/Form/ButtonRow/",children:"Form.ButtonRow"})," component."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-jsx",children:"import { Form, Wizard } from '@dnb/eufemia/extensions/forms'\n\nrender(\n  <Form.Handler>\n    <Wizard.Container>\n      <Wizard.Step title=\"Step 1\">\n        <Wizard.Buttons />\n      </Wizard.Step>\n    </Wizard.Container>\n  </Form.Handler>,\n)\n"})}),"\n",(0,r.jsxs)(e.p,{children:["But you can still use ",(0,r.jsx)(e.a,{href:"/uilib/extensions/forms/Form/ButtonRow/",children:"Form.ButtonRow"})," to wrap a ",(0,r.jsx)(e.a,{href:"/uilib/extensions/forms/Form/SubmitButton/",children:"Form.SubmitButton"})," as well:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-jsx",children:"import { Form, Wizard } from '@dnb/eufemia/extensions/forms'\n\nrender(\n  <Form.Handler>\n    <Wizard.Container>\n      <Wizard.Step title=\"Step 1\">\n        <Form.ButtonRow>\n          <Wizard.Buttons />\n          <Form.SubmitButton />\n        </Form.ButtonRow>\n      </Wizard.Step>\n    </Wizard.Container>\n  </Form.Handler>,\n)\n"})})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,o.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(i,n)})):i(n)}},88249:function(n,e,t){t.r(e),t.d(e,{Default:function(){return i},NextButton:function(){return s},PreviousButton:function(){return a}});var r=t(28204),o=t(52322);const i=()=>(0,o.jsx)(r.Z,{noInline:!0,children:'const Step = ({ title }) => {\n  return (\n    <Wizard.Step title={title}>\n      <Card>\n        <P>Contents of {title}</P>\n      </Card>\n      <Wizard.Buttons />\n    </Wizard.Step>\n  )\n}\nrender(\n  <Form.Handler>\n    <Wizard.Container mode="loose">\n      <Step title="Step 1" />\n      <Step title="Step 2" />\n      <Step title="Step 3" />\n    </Wizard.Container>\n  </Form.Handler>,\n)\n'}),s=()=>(0,o.jsx)(r.Z,{children:"<Wizard.Provider\n  value={{\n    activeIndex: 0,\n    handlePrevious: () => null,\n    handleNext: () => console.log('handleNext'),\n    setActiveIndex: () => null,\n    setFormError: () => null,\n  }}\n>\n  <Wizard.NextButton />\n</Wizard.Provider>\n"}),a=()=>(0,o.jsx)(r.Z,{children:"<Wizard.Provider\n  value={{\n    activeIndex: 5,\n    handlePrevious: () => console.log('handlePrevious'),\n    handleNext: () => null,\n    setActiveIndex: () => null,\n    setFormError: () => null,\n  }}\n>\n  <Wizard.PreviousButton />\n</Wizard.Provider>\n"})}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-wizard-buttons-mdx-f9fc484a63a367c3b61a.js.map