"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[54837,22958,31847],{93647:function(n,e,t){t.r(e);var r=t(52322),a=t(45392),i=t(61239),o=t(63319);function s(n){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.default,{}),"\n",(0,r.jsx)(o.default,{})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,a.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(s,n)})):s()}},63319:function(n,e,t){t.r(e);var r=t(52322),a=t(45392),i=t(1428);function o(n){const e=Object.assign({h2:"h2",h3:"h3"},(0,a.ah)(),n.components);return i||s("Examples",!1),i.AsyncWizardContainer||s("Examples.AsyncWizardContainer",!0),i.Default||s("Examples.Default",!0),i.WithStatusMessage||s("Examples.WithStatusMessage",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{children:"Demo"}),"\n",(0,r.jsx)(e.h3,{children:"Basic usage"}),"\n",(0,r.jsx)(i.Default,{}),"\n",(0,r.jsx)(e.h3,{children:"Async wizard"}),"\n",(0,r.jsx)(i.AsyncWizardContainer,{}),"\n",(0,r.jsx)(e.h3,{children:"With StatusMessage"}),"\n",(0,r.jsx)(i.WithStatusMessage,{})]})}function s(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,a.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(o,n)})):o(n)}},61239:function(n,e,t){t.r(e);var r=t(52322),a=t(45392);function i(n){const e=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,a.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{children:"Description"}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.code,{children:"Wizard.Container"})," is a container component for multi-page forms including a ",(0,r.jsx)(e.a,{href:"/uilib/components/step-indicator/",children:"StepIndicator"}),"."]}),"\n",(0,r.jsxs)(e.p,{children:["Use the ",(0,r.jsx)(e.a,{href:"/uilib/extensions/forms/Wizard/Step/",children:"Step"})," component to define the wizard steps."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:"import { Form, Wizard } from '@dnb/eufemia/extensions/forms'\n\nconst MyForm = () => {\n  return (\n    <Form.Handler>\n      <Wizard.Container>\n        <Wizard.Step title=\"Step 1\">...</Wizard.Step>\n      </Wizard.Container>\n    </Form.Handler>\n  )\n}\n"})}),"\n",(0,r.jsxs)(e.p,{children:["You can also split or separate the ",(0,r.jsx)(e.code,{children:"Wizard.Step"})," and its content:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:"import { Form, Wizard } from '@dnb/eufemia/extensions/forms'\n\n// You can use the `Wizard.Step` in an external component like this:\nconst Step1 = () => (\n  <Wizard.Step title=\"Step 1\">\n    <Form.MainHeading>Heading</Form.MainHeading>\n    <Card stack>\n      <P>Contents</P>\n    </Card>\n    <Card stack>\n      <P>Contents</P>\n    </Card>\n\n    <Wizard.Buttons />\n  </Wizard.Step>\n)\n\nconst MyForm = () => {\n  return (\n    <Form.Handler>\n      <Wizard.Container>\n        <Step1 />\n      </Wizard.Container>\n    </Form.Handler>\n  )\n}\n"})}),"\n",(0,r.jsxs)(e.p,{children:["You can mix and match the usage of ",(0,r.jsx)(e.code,{children:"Wizard.Step"})," and ",(0,r.jsx)(e.code,{children:"Flex.Stack"})," depending on your needs:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:"import { Form, Wizard } from '@dnb/eufemia/extensions/forms'\n\nconst Step2 = () => (\n  <Flex.Stack>\n    <Card stack>\n      <P>Contents</P>\n    </Card>\n    <Card stack>\n      <P>Contents</P>\n    </Card>\n\n    <Wizard.Buttons />\n  </Flex.Stack>\n)\n\nconst MyForm = () => {\n  return (\n    <Form.Handler>\n      <Wizard.Container>\n        <Wizard.Step title=\"Step 2\">\n          <Form.MainHeading>Heading</Form.MainHeading>\n          <Step2 />\n          <Wizard.Buttons />\n        </Wizard.Step>\n      </Wizard.Container>\n    </Form.Handler>\n  )\n}\n"})}),"\n",(0,r.jsx)(e.h2,{children:"Controlling the wizard steps"}),"\n",(0,r.jsxs)(e.p,{children:["To define a different initial index (than 0), you can use ",(0,r.jsx)(e.code,{children:"initialActiveIndex"})," hook."]}),"\n",(0,r.jsxs)(e.p,{children:["For controlling the wizard steps interactively, you can use the ",(0,r.jsx)(e.a,{href:"/uilib/extensions/forms/Wizard/useStep/",children:"useStep"})," hook:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:"import { Form, Wizard } from '@dnb/eufemia/extensions/forms'\n\nconst MyStep = () => {\n  const { setActiveIndex, activeIndex } = Wizard.useStep()\n  return (\n    <Card stack>\n      <Button onClick={() => setActiveIndex(1)}>Go to step 2</Button>\n    </Card>\n  )\n}\n\nconst MyForm = () => {\n  return (\n    <Form.Handler>\n      <Wizard.Container initialActiveIndex={3}>\n        <Wizard.Step>\n          <MyStep />\n        </Wizard.Step>\n      </Wizard.Container>\n    </Form.Handler>\n  )\n}\n"})}),"\n",(0,r.jsxs)(e.p,{children:["When using the ",(0,r.jsx)(e.code,{children:"useStep"})," hook outside of the ",(0,r.jsx)(e.code,{children:"Wizard.Container"})," context, you need to provide an unique ",(0,r.jsx)(e.code,{children:"id"})," (string):"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:"import { Form, Wizard } from '@dnb/eufemia/extensions/forms'\n\nconst MyForm = () => {\n  const { setActiveIndex, activeIndex } = Wizard.useStep('unique-id')\n\n  return (\n    <Form.Handler>\n      <Wizard.Container id=\"unique-id\">\n        <Wizard.Step>\n          <Button onClick={() => setActiveIndex(0)}>Step 1</Button>\n        </Wizard.Step>\n        <Wizard.Step>\n          <Button onClick={() => setActiveIndex(1)}>Step 2</Button>\n        </Wizard.Step>\n      </Wizard.Container>\n    </Form.Handler>\n  )\n}\n"})}),"\n",(0,r.jsxs)(e.p,{children:["You can also prevent the user from navigating to the next or previous step, by using the ",(0,r.jsx)(e.code,{children:"preventNavigation"})," callback function found as the third parameter, in the ",(0,r.jsx)(e.code,{children:"onStepChange"})," event."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:'import { Form, Wizard } from \'@dnb/eufemia/extensions/forms\'\n\nconst MyForm = () => {\n  return (\n    <Form.Handler>\n      <Wizard.Container\n        onStepChange={(step, type, { preventNavigation }) => {\n          if (step === 2 && type === \'next\') {\n            preventNavigation()\n          }\n        }}\n      >\n        <Wizard.Step title="Step 1">\n          <P>Step 1</P>\n          <Wizard.Buttons />\n        </Wizard.Step>\n        <Wizard.Step title="Step 2">\n          <P>Step 2</P>\n          <Wizard.Buttons />\n        </Wizard.Step>\n        <Wizard.Step title="Step 3">\n          <P>Step 3</P>\n          <Wizard.Buttons />\n        </Wizard.Step>\n      </Wizard.Container>\n    </Form.Handler>\n  )\n}\n'})}),"\n",(0,r.jsx)(e.h2,{children:"Accessibility"}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.code,{children:"Wizard.Step"})," component uses an ",(0,r.jsx)(e.code,{children:"aria-label"})," attribute that matches the title property value. The step content is enclosed within a section element, which further enhances accessibility."]}),"\n",(0,r.jsx)(e.p,{children:"Whenever a new step becomes active, it automatically receives focus, ensuring that screen readers convey the relevant information to users."}),"\n",(0,r.jsx)(e.p,{children:"Additionally, during a step change the Wizard will scroll to the top of the form, to ensure the user is aware of the new content."})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,a.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(i,n)})):i(n)}},34674:function(n,e,t){t.r(e),t.d(e,{AsyncChangeBehavior:function(){return d},AsyncSubmitBehavior:function(){return s},Default:function(){return o},WithinOtherComponents:function(){return l},createRequest:function(){return c}});var r=t(46832),a=t(52750),i=t(52322);const o=()=>(0,i.jsx)(r.Z,{children:'<Form.SubmitIndicator state="pending" />\n'}),s=()=>(0,i.jsx)(r.Z,{scope:{createRequest:c,debounceAsync:a.k},noInline:!0,children:'const delay = debounceAsync(async function () {\n  try {\n    const request = createRequest()\n    await request(1000) // Simulate a request\n  } catch (error) {\n    return error\n  }\n})\nrender(\n  <Form.Handler onSubmit={delay}>\n    <Card stack>\n      <Field.String path="/myField" label="Short label" />\n      <Form.ButtonRow>\n        <Form.SubmitButton />\n        <Button variant="tertiary">Cancel</Button>\n      </Form.ButtonRow>\n    </Card>\n  </Form.Handler>,\n)\n'}),d=()=>(0,i.jsx)(r.Z,{scope:{createRequest:c,debounceAsync:a.k},noInline:!0,children:'const delay = debounceAsync(async function () {\n  try {\n    const request = createRequest()\n    await request(1000) // Simulate a request\n  } catch (error) {\n    return error\n  }\n})\nrender(\n  <Form.Handler onSubmit={delay} onChange={delay}>\n    <Card stack>\n      <Field.String\n        path="/myField1"\n        label="Label (with async validation)"\n        placeholder="Write something ..."\n        validator={delay}\n      />\n      <FieldBlock width="medium">\n        <Field.String\n          path="/myField2"\n          width="stretch"\n          label="This is a long label"\n        />\n      </FieldBlock>\n      <Form.ButtonRow>\n        <Form.SubmitButton />\n        <Button variant="tertiary">Cancel</Button>\n      </Form.ButtonRow>\n    </Card>\n  </Form.Handler>,\n)\n'}),c=()=>{let n,e;const t=t=>new Promise((r=>{e=r,n=setTimeout((()=>{r({hasError:!1})}),t)}));return t.cancel=()=>{var t;null===(t=e)||void 0===t||t({hasError:!0}),clearTimeout(n),n=null},t},l=()=>(0,i.jsx)(r.Z,{children:'<Form.Handler>\n  <Flex.Horizontal align="center">\n    <Form.SubmitButton showIndicator />\n    <Button variant="secondary" icon="chevron_right">\n      Secondary\n      <Form.SubmitIndicator state="pending" />\n    </Button>\n    <Button variant="tertiary">\n      Tertiary\n      <Form.SubmitIndicator state="pending" />\n    </Button>\n    <FormLabel>\n      Label\n      <Form.SubmitIndicator state="pending" />\n    </FormLabel>\n  </Flex.Horizontal>\n</Form.Handler>\n'})},1428:function(n,e,t){t.r(e),t.d(e,{AsyncWizardContainer:function(){return d},Default:function(){return s},WithStatusMessage:function(){return c}});t(2784);var r=t(46832),a=t(52750),i=t(34674),o=t(52322);const s=()=>(0,o.jsx)(r.Z,{"data-visual-test":"wizard-layout-card-border",noInline:!0,children:'const initialData = {\n  firstName: \'John\',\n  lastName: \'Doe\',\n  streetName: \'Osloveien\',\n  streetNr: 12,\n  postalCode: \'1234\',\n  city: \'Oslo\',\n}\nconst Step1 = () => (\n  <Wizard.Step title="Step 1">\n    <Form.MainHeading>Heading</Form.MainHeading>\n    <Card stack>\n      <P>Contents</P>\n    </Card>\n    <Card stack>\n      <P>Contents</P>\n    </Card>\n\n    <Wizard.Buttons />\n  </Wizard.Step>\n)\nconst Step2 = () => (\n  <Wizard.Step title="Step 2">\n    <Form.MainHeading>Heading</Form.MainHeading>\n    <Card stack>\n      <P>Contents</P>\n    </Card>\n    <Card stack>\n      <P>Contents</P>\n    </Card>\n\n    <Wizard.Buttons />\n  </Wizard.Step>\n)\nconst Summary = () => {\n  const { summaryTitle } = Form.useLocale().Step\n  return (\n    <Wizard.Step title={summaryTitle}>\n      <Form.MainHeading>Summary</Form.MainHeading>\n      <Card stack>\n        <Form.SubHeading>Deliver address</Form.SubHeading>\n\n        <Value.SummaryList layout="grid">\n          <Value.Name.First path="/firstName" />\n          <Value.Name.Last path="/lastName" />\n\n          <Value.Composition label="Street">\n            <Value.String path="/streetName" />\n            <Value.Number path="/streetNr" />\n          </Value.Composition>\n\n          <Value.Composition label="City">\n            <Value.String path="/postalCode" />\n            <Value.String path="/city" />\n          </Value.Composition>\n        </Value.SummaryList>\n\n        <Wizard.EditButton toStep={1} />\n      </Card>\n\n      <Form.ButtonRow>\n        <Wizard.Buttons />\n        <Form.SubmitButton variant="send" />\n      </Form.ButtonRow>\n    </Wizard.Step>\n  )\n}\n\n// Can be an async function, in case you need to make some async stuff\nconst onStepChange = async (step, mode) => {\n  if (mode === \'next\') {\n    await new Promise((resolve) => setTimeout(resolve, 1000))\n  }\n  console.log(\'onStepChange\', step, mode)\n}\n\n// Can be an async function, in case you need to make some async stuff\nconst onSubmit = async (data) => {\n  await new Promise((resolve) => setTimeout(resolve, 2000))\n  console.log(\'onSubmit\', data)\n}\nconst MyForm = () => {\n  // Routers like "react-router" are supported as well\n  Wizard.useQueryLocator(\'my-wizard\')\n  return (\n    <Form.Handler data={initialData} onSubmit={onSubmit}>\n      <Wizard.Container id="my-wizard" onStepChange={onStepChange}>\n        <Step1 />\n        <Step2 />\n        <Summary />\n      </Wizard.Container>\n    </Form.Handler>\n  )\n}\nrender(<MyForm />)\n'}),d=()=>(0,o.jsx)(r.Z,{scope:{createRequest:i.createRequest,debounceAsync:a.k},noInline:!0,children:"const MyForm = () => {\n  const onStepChange = React.useCallback(async (index, mode) => {\n    console.log('onStepChange', index)\n    if (mode === 'next') {\n      try {\n        const request = createRequest()\n        await request(1000) // Simulate a request\n      } catch (error) {\n        return error\n      }\n    }\n\n    // Optional, you can show a FormStatus at the bottom of the form\n    return {\n      info: 'Info message: ' + index,\n    }\n  }, [])\n  const onSubmit = React.useCallback(async (data) => {\n    console.log('onSubmit', data)\n    try {\n      const request = createRequest()\n      await request(1000) // Simulate a request\n    } catch (error) {\n      return error\n    }\n\n    // Optional, you can show a FormStatus at the bottom of the form\n    return {\n      warning: 'Warning message',\n    }\n  }, [])\n  const validator = React.useCallback(async (value) => {\n    try {\n      const request = createRequest()\n      await request(1000) // Simulate a request\n    } catch (error) {\n      return error\n    }\n    if (value === 'invalid') {\n      return Error('Error message')\n    }\n  }, [])\n  const validator1 = debounceAsync(validator)\n  const validator2 = debounceAsync(validator)\n  const Step1 = () => {\n    return (\n      <Wizard.Step title=\"Step 1\">\n        <Card stack>\n          <Field.String\n            label=\"Required field with async validator\"\n            validator={validator1}\n            path=\"/field1\"\n            required\n          />\n          <Field.String\n            label=\"Field with async validator\"\n            validator={validator2}\n            path=\"/field2\"\n          />\n        </Card>\n\n        <Wizard.Buttons />\n      </Wizard.Step>\n    )\n  }\n  const Step2 = () => {\n    return (\n      <Wizard.Step title=\"Step 2\">\n        <Form.MainHeading>Heading</Form.MainHeading>\n\n        <Card stack>\n          <P>Contents of step 2</P>\n        </Card>\n\n        <Form.ButtonRow>\n          <Wizard.Buttons />\n          <Form.SubmitButton variant=\"send\" />\n        </Form.ButtonRow>\n      </Wizard.Step>\n    )\n  }\n  return (\n    <Form.Handler onSubmit={onSubmit}>\n      <Wizard.Container onStepChange={onStepChange}>\n        <Step1 />\n        <Step2 />\n      </Wizard.Container>\n    </Form.Handler>\n  )\n}\nrender(<MyForm />)\n"}),c=()=>(0,o.jsx)(r.Z,{"data-visual-test":"wizard-with-status-message",children:"<Form.Handler>\n  <Wizard.Container\n    onStepChange={async (index, mode, { preventNavigation }) => {\n      preventNavigation()\n      return {\n        info: 'Info message.',\n        warning: 'Warning message.',\n      }\n    }}\n  >\n    <Wizard.Step title=\"Step 1\">\n      <Form.MainHeading>Step 1</Form.MainHeading>\n      <P>Content</P>\n      <Wizard.NextButton text=\"Press me to see the status message\" />\n    </Wizard.Step>\n  </Wizard.Container>\n</Form.Handler>\n"})}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-wizard-container-mdx-b454b65902911a664ed4.js.map