"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[68279],{75681:function(e,n,o){o.r(n);var t=o(52322),r=o(45392);function i(e){const n=Object.assign({h2:"h2",p:"p",code:"code",a:"a",h3:"h3",ul:"ul",li:"li",pre:"pre"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Form.Isolation"})," lets you isolate parts of your form so data and validations are not shared between the ",(0,t.jsx)(n.code,{children:"Form.Handler"})," until you want to."]}),"\n",(0,t.jsxs)(n.p,{children:["It's a provider that lets you provide a ",(0,t.jsx)(n.code,{children:"schema"})," or ",(0,t.jsx)(n.code,{children:"data"})," very similar to what the ",(0,t.jsx)(n.a,{href:"/uilib/extensions/forms/Form/Handler/",children:"Form.Handler"})," component does."]}),"\n",(0,t.jsx)(n.h3,{children:"Good to know"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["It needs to be used inside of a ",(0,t.jsx)(n.code,{children:"Form.Handler"})," component."]}),"\n",(0,t.jsxs)(n.li,{children:["All fields inside need to validate successfully before the isolated data can be committed, just like the ",(0,t.jsx)(n.code,{children:"Form.Handler"})," does before submitting."]}),"\n",(0,t.jsxs)(n.li,{children:["Input fields are prevented from submitting the form when pressing enter. Pressing enter on input fields will commit the isolated data to the ",(0,t.jsx)(n.code,{children:"Form.Handler"})," context instead."]}),"\n",(0,t.jsxs)(n.li,{children:["You can provide a ",(0,t.jsx)(n.code,{children:"schema"}),", ",(0,t.jsx)(n.code,{children:"data"})," or ",(0,t.jsx)(n.code,{children:"defaultData"})," like you would do with the ",(0,t.jsx)(n.code,{children:"Form.Handler"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["You can also provide ",(0,t.jsx)(n.code,{children:"data"})," or ",(0,t.jsx)(n.code,{children:"defaultData"})," to the ",(0,t.jsx)(n.code,{children:"Form.Handler"})," component. If not given on the ",(0,t.jsx)(n.code,{children:"Form.Isolation"})," component, this will define the data that will be used for the isolated data."]}),"\n",(0,t.jsxs)(n.li,{children:["Using ",(0,t.jsx)(n.code,{children:"Form.Isolation"})," inside of a ",(0,t.jsx)(n.code,{children:"Form.Section"})," is supported."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onChange"})," on the ",(0,t.jsx)(n.code,{children:"Form.Handler"})," will be called when the isolated data gets committed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onChange"})," on the ",(0,t.jsx)(n.code,{children:"Form.Isolation"})," will be called on every change of the isolated data. Use ",(0,t.jsx)(n.code,{children:"onCommit"})," to get the data that gets committed."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{children:"Usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Form, Field } from \'@dnb/eufemia/extensions/forms\'\n\nexport function MyForm(props) {\n  return (\n    <Form.Handler\n      defaultData={{ isolated: \'Isolated\', regular: \'Regular\' }}\n    >\n      <Form.Isolation>\n        <Field.String label="Isolated" path="/isolated" />\n        <Form.Isolation.CommitButton />\n      </Form.Isolation>\n\n      <Field.String label="Regular" path="/regular" />\n      <Form.SubmitButton />\n    </Form.Handler>\n  )\n}\n'})}),"\n",(0,t.jsx)(n.h2,{children:"Commit the data to the form"}),"\n",(0,t.jsxs)(n.p,{children:["You can either use the ",(0,t.jsx)(n.code,{children:"Form.Isolation.CommitButton"})," or provide a custom ref handler you can use (call) when you want to commit the data to the ",(0,t.jsx)(n.code,{children:"Form.Handler"})," context:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Form, Field, JSONSchema } from \'@dnb/eufemia/extensions/forms\'\n\nfunction MyForm() {\n  const commitHandleRef = React.useRef<() => void>()\n\n  return (\n    <Form.Handler>\n      <Form.Isolation commitHandleRef={commitHandleRef}>\n        <Field.PhoneNumber path="/phoneNumber" />\n        <Button text="Submit" onClick={commitHandleRef.current} />\n      </Form.Isolation>\n    </Form.Handler>\n  )\n}\n\nrender(<MyForm />)\n'})}),"\n",(0,t.jsx)(n.h2,{children:"Schema support"}),"\n",(0,t.jsxs)(n.p,{children:["You can also use a ",(0,t.jsx)(n.code,{children:"schema"})," to define the properties of the nested fields:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Form, Field, JSONSchema } from '@dnb/eufemia/extensions/forms'\n\nconst isolatedSchema: JSONSchema = {\n  type: 'object',\n  properties: {\n    phoneNumber: {\n      type: 'string',\n      pattern: '^[0-9]{10}$',\n    },\n  },\n  required: ['phoneNumber'],\n}\n\nrender(\n  <Form.Handler>\n    <Form.Isolation schema={isolatedSchema}>\n      <Field.PhoneNumber path=\"/phoneNumber\" />\n    </Form.Isolation>\n  </Form.Handler>,\n)\n"})}),"\n",(0,t.jsx)(n.h2,{children:"Clear data from isolated fields"}),"\n",(0,t.jsxs)(n.p,{children:["You can clear the isolation by calling ",(0,t.jsx)(n.code,{children:"Form.clearData"})," with the ",(0,t.jsx)(n.code,{children:"id"})," of the form."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"import { Form, Field } from '@dnb/eufemia/extensions/forms'\n\nfunction MyForm() {\n  return (\n    <Form.Handler>\n      <Form.Isolation\n        id=\"my-isolated-data\"\n        onCommit={() => {\n          Form.clearData('my-isolated-data')\n        }}\n      >\n        <Field.String path=\"/isolated\" />\n        <Form.Isolation.CommitButton />\n      </Form.Isolation>\n    </Form.Handler>\n  )\n}\n"})})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-form-isolation-info-mdx-256de936271f0f12e684.js.map