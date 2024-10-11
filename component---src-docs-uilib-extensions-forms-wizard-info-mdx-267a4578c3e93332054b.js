"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[60197],{45327:function(e,n,r){r.r(n),r.d(n,{default:function(){return c}});var t={};r.r(t),r.d(t,{IntroExample:function(){return s}});var i=r(52322),a=r(45392),o=r(64368);const s=()=>(0,i.jsx)(o.Z,{hideCode:!0,noInline:!0,children:'const MyForm = () => {\n  // Routers like "react-router" are supported as well\n  Wizard.useQueryLocator(\'my-wizard\')\n  return (\n    <Form.Handler>\n      <Wizard.Container\n        id="my-wizard"\n        variant="drawer"\n        omitScrollManagement\n      >\n        <Wizard.Step title="Step 1">\n          <Form.MainHeading>Heading</Form.MainHeading>\n          <Card stack>\n            <P>Step 1</P>\n          </Card>\n          <Wizard.Buttons />\n        </Wizard.Step>\n        <Wizard.Step title="Step 2">\n          <Form.MainHeading>Heading</Form.MainHeading>\n          <Card stack>\n            <P>Step 2</P>\n          </Card>\n          <Wizard.Buttons />\n        </Wizard.Step>\n      </Wizard.Container>\n    </Form.Handler>\n  )\n}\nrender(<MyForm />)\n'});function d(e){const n=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,a.ah)(),e.components);return t||p("Examples",!1),s||p("Examples.IntroExample",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Wizard"})," is a set of components for showing forms with a ",(0,i.jsx)(n.a,{href:"/uilib/components/step-indicator/",children:"StepIndicator"})," for navigation between several wizard. It also includes components for navigating between wizard."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'import { Wizard } from \'@dnb/eufemia/extensions/forms\'\n\nrender(\n  <Wizard.Container>\n    <Wizard.Step title="Step 1">...</Wizard.Step>\n    <Wizard.Step title="Step 2">...</Wizard.Step>\n  </Wizard.Container>,\n)\n'})}),"\n",(0,i.jsx)(n.h2,{children:"Intro example"}),"\n",(0,i.jsx)(s,{}),"\n",(0,i.jsx)(n.h2,{children:"Dynamic steps support"}),"\n",(0,i.jsxs)(n.p,{children:["You can use the ",(0,i.jsx)(n.code,{children:"Wizard.Step"})," component to create dynamic steps. The ",(0,i.jsx)(n.code,{children:"active"})," and ",(0,i.jsx)(n.code,{children:"activeWhen"})," properties allow you to show or hide a step based on specific conditions. You find an ",(0,i.jsx)(n.a,{href:"/uilib/extensions/forms/Wizard/Step/#dynamic-steps",children:"example"})," in the demo section."]}),"\n",(0,i.jsx)(n.h2,{children:"Summary step"}),"\n",(0,i.jsxs)(n.p,{children:["A Wizard needs a summary step at the end. You can use the ",(0,i.jsx)(n.code,{children:"Wizard.Step"})," component for that, including the ",(0,i.jsx)(n.a,{href:"/uilib/extensions/forms/Value/SummaryList/",children:"Value.SummaryList"})," component:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'import { Form, Wizard, Value } from \'@dnb/eufemia/extensions/forms\'\n\nconst MyForm = () => {\n  const { summaryTitle } = Form.useLocale().Step\n\n  return (\n    <Form.Handler>\n      <Wizard.Container>\n        <Wizard.Step title="Step 1">...</Wizard.Step>\n        <Wizard.Step title="Step 2">...</Wizard.Step>\n        <Wizard.Step title={summaryTitle}>\n          <Value.SummaryList layout="grid">\n            <Value.String label="Label" path="/myValue" />\n          </Value.SummaryList>\n        </Wizard.Step>\n      </Wizard.Container>\n    </Form.Handler>\n  )\n}\n'})})]})}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)};function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-wizard-info-mdx-267a4578c3e93332054b.js.map