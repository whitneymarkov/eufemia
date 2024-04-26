"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[83091],{78753:function(n,t,e){e.r(t),e.d(t,{default:function(){return c}});var r={};e.r(r),e.d(r,{EditButton:function(){return s}});var a=e(52322),i=e(45392),o=e(28204);const s=()=>(0,a.jsx)(o.Z,{noInline:!0,children:'const Step = ({ title }) => {\n  return (\n    <Wizard.Step title={title}>\n      <Card stack>\n        <P>Contents</P>\n      </Card>\n\n      <Wizard.Buttons />\n    </Wizard.Step>\n  )\n}\nconst Summary = () => {\n  const { summaryTitle } = Form.useLocale().Step\n  return (\n    <Wizard.Step title={summaryTitle}>\n      <Card stack>\n        <Value.SummaryList>\n          <Value.String label="First name" path="/firstName" />\n        </Value.SummaryList>\n\n        <Hr />\n\n        <Wizard.EditButton toStep={0} />\n      </Card>\n    </Wizard.Step>\n  )\n}\nrender(\n  <Form.Handler\n    data={{\n      firstName: \'John\',\n    }}\n  >\n    <Wizard.Container initialActiveIndex={1}>\n      <Step title="Step" />\n      <Summary />\n    </Wizard.Container>\n  </Form.Handler>,\n)\n'});function d(n){const t=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},(0,i.ah)(),n.components);return r||l("Examples",!1),s||l("Examples.EditButton",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{children:"EditButton"}),"\n",(0,a.jsx)(t.h2,{children:"Description"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"Wizard.EditButton"})," is a button to be placed in a summary step."]}),"\n",(0,a.jsxs)(t.p,{children:["It provides a ",(0,a.jsx)(t.code,{children:"toStep"})," property that lets you navigate to a specific step."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:'import { Hr } from \'@dnb/eufemia\'\nimport { Form, Wizard, Value } from \'@dnb/eufemia/extensions/forms\'\n\nrender(\n  <Form.Handler>\n    <Wizard.Layout>\n      <Wizard.Step title="Summary">\n        <Card stack>\n          <Value.String label="First name" path="/firstName" />\n          <Hr />\n          <Wizard.EditButton toStep={2} />\n        </Card>\n      </Wizard.Step>\n    </Wizard.Layout>\n  </Form.Handler>,\n)\n'})}),"\n",(0,a.jsx)(t.h2,{children:"Demo"}),"\n",(0,a.jsx)(s,{})]})}var c=function(n){void 0===n&&(n={});const{wrapper:t}=Object.assign({},(0,i.ah)(),n.components);return t?(0,a.jsx)(t,Object.assign({},n,{children:(0,a.jsx)(d,n)})):d(n)};function l(n,t){throw new Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-wizard-step-edit-button-mdx-5190d19a8e222b7a0171.js.map