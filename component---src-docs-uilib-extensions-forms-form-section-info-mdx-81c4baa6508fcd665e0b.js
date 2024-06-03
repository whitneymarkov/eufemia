"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[59737],{37259:function(e,n,o){o.r(n);var t=o(52322),s=o(45392);function r(e){const n=Object.assign({h2:"h2",p:"p",code:"code",h3:"h3",ul:"ul",li:"li",a:"a",ol:"ol",pre:"pre"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Form.Section"})," lets you compose together sections of fields and values to be reused in different contexts."]}),"\n",(0,t.jsx)(n.h3,{children:"Good to know"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["It allows you to easily customize and reposition nested ",(0,t.jsx)(n.code,{children:"Form.Section"})," components within the data context, making it effortless to reuse the same set of fields and values in various contexts. Check out e.g. the ",(0,t.jsx)(n.code,{children:"overwriteProps"})," and ",(0,t.jsx)(n.code,{children:"path"})," props for more information."]}),"\n",(0,t.jsxs)(n.li,{children:["When defining a default value for a field or value, you can use the ",(0,t.jsx)(n.code,{children:"defaultValue"})," prop instead of value. It will not take precedence over the data context like value does."]}),"\n",(0,t.jsxs)(n.li,{children:["Use ",(0,t.jsx)(n.a,{href:"/uilib/extensions/forms/Form/Visibility/",children:"Visibility"})," to handle logic and hide parts of your form based on the data context."]}),"\n",(0,t.jsxs)(n.li,{children:["To provide localization for all used texts defined in the ",(0,t.jsx)(n.code,{children:"translations"})," prop of the section, you can create a localization easily."]}),"\n",(0,t.jsx)(n.li,{children:"Only imported sections with their localizations are included in the production bundle."}),"\n",(0,t.jsxs)(n.li,{children:["It is possible to overwrite the translations later by using the ",(0,t.jsx)(n.code,{children:"Form.Handler"})," component."]}),"\n",(0,t.jsxs)(n.li,{children:["A single section can be used without ",(0,t.jsx)(n.code,{children:"Form.Handler"}),", just like any other field and value."]}),"\n",(0,t.jsxs)(n.li,{children:["Here is a ",(0,t.jsx)(n.a,{href:"/uilib/extensions/forms/blocks/",children:"list of blocks"})," ready to use."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{children:"Usage"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Create the section component and export it:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Form, Field } from \'@dnb/eufemia/extensions/forms\'\n\nexport function MySection(props) {\n  return (\n    <Form.Section {...props}>\n      {/* Fields*/}\n      <Field.PhoneNumber path="/phoneNumber" required />\n\n      {/* Views*/}\n      <View.PhoneNumber path="/phoneNumber" />\n    </Form.Section>\n  )\n}\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Import the section component and use it in a form:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Form } from '@dnb/eufemia/extensions/forms'\nimport { MySection } from './form-sections'\n\nfunction MyForm() {\n  return (\n    <Form.Handler>\n      <MySection />\n    </Form.Handler>\n  )\n}\n"})}),"\n",(0,t.jsx)(n.h2,{children:"Overwrite props"}),"\n",(0,t.jsxs)(n.p,{children:["It lets you overwrite all of the given props if needed by using ",(0,t.jsx)(n.code,{children:"overwriteProps"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Form, Field } from '@dnb/eufemia/extensions/forms'\n\nconst MySection = (props) => {\n  return (\n    <Form.Section {...props}>\n      <Field.Name.First path=\"/firstName\" />\n      <Field.Name.Last path=\"/lastName\" required minLength={2} />\n    </Form.Section>\n  )\n}\n\nrender(\n  <Form.Handler>\n    <MySection\n      overwriteProps={{\n        firstName: { label: '/Custom label' },\n        lastName: { required: false, minLength: 0 },\n      }}\n    />\n  </Form.Handler>,\n)\n"})}),"\n",(0,t.jsxs)(n.h2,{children:["Optional ",(0,t.jsx)(n.code,{children:"path"})," support"]}),"\n",(0,t.jsxs)(n.p,{children:["Optionally you can define a ",(0,t.jsx)(n.code,{children:"path"})," to the section component. Fields inside the section will get this path as a prefix of their own path. This makes it possible to reuse the same section component in different contexts."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Form, Field } from \'@dnb/eufemia/extensions/forms\'\n\nconst MySection = (props) => {\n  return (\n    <Form.Section {...props}>\n      <Field.Name.First path="/firstName" />\n      <Field.Name.Last path="/lastName" />\n    </Form.Section>\n  )\n}\n\nrender(\n  <Form.Handler\n    defaultData={{\n      // MySection has a path="/nestedPath" and therefore it is nested in the data context\n      nestedPath: {\n        firstName: \'Nora\',\n      },\n    }}\n  >\n    <MySection path="/nestedPath" />\n  </Form.Handler>,\n)\n'})}),"\n",(0,t.jsx)(n.h2,{children:"Required prop"}),"\n",(0,t.jsxs)(n.p,{children:["Optionally you can define a ",(0,t.jsx)(n.code,{children:"required"})," prop to the section component. Fields inside the section then be required."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'render(\n  <Form.Section required={true}>\n    <Field.Name.First path="/firstName" />\n    <Field.Name.Last path="/lastName" />\n  </Form.Section>,\n)\n'})}),"\n",(0,t.jsx)(n.h2,{children:"TypeScript support"}),"\n",(0,t.jsx)(n.p,{children:"Optionally you can define what the props of the nested fields should accept:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Form, Field, SectionProps } from '@dnb/eufemia/extensions/forms'\nimport type { Props as PhoneNumberProps } from '@dnb/eufemia/extensions/forms/Field/PhoneNumber'\n\nconst MySection = (\n  props: SectionProps<{ phoneNumber?: PhoneNumberProps }>,\n) => {\n  return (\n    <Form.Section {...props}>\n      <Field.Name.Last path=\"/phoneNumber\" required />\n    </Form.Section>\n  )\n}\n\nrender(\n  <Form.Handler>\n    <MySection />\n  </Form.Handler>,\n)\n"})}),"\n",(0,t.jsx)(n.h2,{children:"Schema support"}),"\n",(0,t.jsxs)(n.p,{children:["You can also use a ",(0,t.jsx)(n.code,{children:"schema"})," to define the properties of the nested fields:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Form, Field, JSONSchema } from '@dnb/eufemia/extensions/forms'\n\nconst MySection = (props) => {\n  return (\n    <Form.Section {...props}>\n      <Field.PhoneNumber path=\"/phoneNumber\" />\n    </Form.Section>\n  )\n}\n\nconst schema: JSONSchema = {\n  type: 'object',\n  properties: {\n    mySection: {\n      type: 'object',\n      properties: {\n        phoneNumber: {\n          type: 'string',\n          pattern: '^[0-9]{10}$',\n        },\n      },\n      required: ['phoneNumber'],\n    },\n  },\n}\n\nrender(\n  <Form.Handler schema={schema}>\n    <MySection path=\"/mySection\" />\n  </Form.Handler>,\n)\n"})}),"\n",(0,t.jsx)(n.h2,{children:"Translations"}),"\n",(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.code,{children:"translations"})," prop to provide translations for the section:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Field, Form } from '@dnb/eufemia/extensions/forms'\n\nconst translations = {\n  // Its optional to wrap the translations in an additional \"MySection\" object\n  'nb-NO': { MySection: { MyField: { label: 'Felt label' } } },\n  'en-GB': { MySection: { MyField: { label: 'Field label' } } },\n}\ntype Translation = (typeof translations)[keyof typeof translations]\n\nexport function MySection() {\n  return (\n    <Form.Section translations={translations}>\n      <ContentOfMySection />\n    </Form.Section>\n  )\n}\n\nfunction ContentOfMySection() {\n  const { MyField } = Form.useTranslation<Translation>().MySection\n  return <Field.String label={MyField.label} path=\"/custom\" />\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:['This way it is possible to "extend" or change the translations for a specific section from a ',(0,t.jsx)(n.code,{children:"Form.handler"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Form } from '@dnb/eufemia/extensions/forms'\nimport { MySection } from './form-sections'\n\nconst myTranslations = {\n  'nb-NO': { MySection: { MyField: { label: 'Egendefinert' } } },\n  'en-GB': { MySection: { MyField: { label: 'Custom' } } },\n}\n\nexport function MyForm() {\n  return (\n    <Form.Handler translations={myTranslations}>\n      <MySection />\n    </Form.Handler>\n  )\n}\n"})}),"\n",(0,t.jsx)(n.h2,{children:"Snapshot testing of a section (block)"}),"\n",(0,t.jsx)(n.p,{children:'One way to ensure a "contract" of what you expect a section to be outlined as, is to create a snapshot test:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Form, Tools } from '@dnb/eufemia/extensions/forms'\nimport { GenerateRef } from '@dnb/eufemia/extensions/forms/Tools/ListAllProps'\n\nit('MySection should match snapshot', () => {\n  const generateRef = React.createRef<GenerateRef>()\n\n  render(\n    <Form.Handler>\n      <Tools.ListAllProps generateRef={generateRef}>\n        <MySection />\n      </Tools.ListAllProps>\n    </Form.Handler>,\n  )\n\n  const { propsOfFields, propsOfValues } = generateRef.current()\n  expect(propsOfFields).toMatchInlineSnapshot(`...`)\n  expect(propsOfValues).toMatchInlineSnapshot(`...`)\n})\n"})})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(r,e)})):r(e)}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-form-section-info-mdx-81c4baa6508fcd665e0b.js.map