"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[89018],{71791:function(e,n,t){t.r(n);var i=t(52322),s=t(45392);function r(e){const n=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Wizard.Step"})," shows child components when the surrounding ",(0,i.jsx)(n.a,{href:"/uilib/extensions/forms/Wizard/Container/",children:"Wizard.Container"})," has been navigated to this step. Wizard.Container keeps track of what is the active step, and navigating between wizard steps is done through callbacks on the WizardContext, i.e. using ",(0,i.jsx)(n.a,{href:"/uilib/extensions/forms/Wizard/Buttons/",children:"navigation buttons"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { Form, Wizard } from '@dnb/eufemia/extensions/forms'\n\nconst Step1 = () => {\n  return (\n    <Wizard.Step title=\"Step 1\">\n      <Form.MainHeading>Heading</Form.MainHeading>\n      <Card stack>\n        <P>Contents</P>\n      </Card>\n      <Card stack>\n        <P>Contents</P>\n      </Card>\n\n      <Wizard.Buttons />\n    </Wizard.Step>\n  )\n}\n\nconst MyForm = () => {\n  return (\n    <Form.Handler>\n      <Wizard.Container>\n        <Step1 />\n      </Wizard.Container>\n    </Form.Handler>\n  )\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["It uses ",(0,i.jsx)(n.a,{href:"/uilib/layout/flex/stack/",children:"Flex.Stack"})," so you don't need to wrap your content additionally."]}),"\n",(0,i.jsx)(n.h2,{children:"EditButton"}),"\n",(0,i.jsxs)(n.p,{children:["In order to navigate back to another step, you can use the ",(0,i.jsx)(n.a,{href:"/uilib/extensions/forms/Wizard/EditButton/",children:"EditButton"})," component."]}),"\n",(0,i.jsx)(n.h2,{children:"Events"}),"\n",(0,i.jsxs)(n.p,{children:["If you need an event to be triggered when the user changes the active step, you can use the ",(0,i.jsx)(n.code,{children:"onStepChange"})," in the ",(0,i.jsx)(n.a,{href:"/uilib/extensions/forms/Wizard/Container/",children:"Wizard.Container"}),"."]}),"\n",(0,i.jsx)(n.h2,{children:"Dynamic steps support"}),"\n",(0,i.jsxs)(n.p,{children:["You can use the ",(0,i.jsx)(n.code,{children:"Wizard.Step"})," component to create dynamic steps. The ",(0,i.jsx)(n.code,{children:"active"})," and ",(0,i.jsx)(n.code,{children:"activeWhen"})," properties allow you to show or hide a step based on specific conditions."]}),"\n",(0,i.jsxs)(n.p,{children:["If a step is replaced by another step, the ",(0,i.jsx)(n.code,{children:"onStepChange"})," event will trigger with ",(0,i.jsx)(n.code,{children:"stepListModified"})," as the second argument. The current step index might remain the same. However, if the total number of steps becomes less than the current step, the index will adjust to the last step."]}),"\n",(0,i.jsxs)(n.p,{children:["To keep track of the current step, you can provide each step with an ",(0,i.jsx)(n.code,{children:"id"})," property. This ",(0,i.jsx)(n.code,{children:"id"})," can then be used to identify the current step and will be returned as part of an object in the ",(0,i.jsx)(n.code,{children:"onStepChange"})," event."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"<Wizard.Container\n  onStepChange={(index, mode, args) => {\n    const {\n      id,\n      preventNavigation,\n      previousStep: { index },\n    } = args\n  }}\n>\n  <Wizard.Step\n    title=\"Step 1\"\n    id=\"step-1\"\n    activeWhen={{ path: '/myPath', hasValue: '...' }}\n  >\n    content\n  </Wizard.Step>\n</Wizard.Container>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the demo section, you will find an example demonstrating how to use the ",(0,i.jsx)(n.code,{children:"Wizard.Step"})," component with ",(0,i.jsx)(n.code,{children:"activeWhen"}),"."]})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(r,e)})):r(e)}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-wizard-step-info-mdx-a3ff60f9a1cca20d255a.js.map