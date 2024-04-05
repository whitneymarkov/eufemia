"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[55310],{57295:function(n,e,a){a.r(e);var t=a(52322),r=a(45392),o=a(94929);function i(n){const e=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",h3:"h3",a:"a"},(0,r.ah)(),n.components);return o||l("Examples",!1),o.Transformers||l("Examples.Transformers",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{children:"Quick start"}),"\n",(0,t.jsxs)(e.p,{children:["Field components can be used directly as they are, for example ",(0,t.jsx)(e.code,{children:"Field.Email"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsx",children:"import { Field } from '@dnb/eufemia/extensions/forms'\n\nrender(<Field.Email />)\n"})}),"\n",(0,t.jsx)(e.p,{children:"By building an entire form with components from Eufemia and Eufemia Forms, you save time and code:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsx",children:'import { Card } from \'@dnb/eufemia\'\nimport { Form, Field } from \'@dnb/eufemia/extensions/forms\'\n\nrender(\n  <Form.Handler\n    data={existingData}\n    onChange={...}\n    onSubmit={...}\n  >\n    <Card spacing="medium">\n      <Field.String\n        path="/companyName"\n        label="Bedriftens navn"\n        required\n      />\n      <Field.OrganizationNumber\n        path="/companyOrganizationNumber"\n        required\n      />\n      <Field.Selection\n        path="/postalAddressSelect"\n        label="Ønsket sted for tilsendt post"\n        variant="radio"\n      >\n        <Field.Option value="companyAddress" title="Samme som forretningsadresse" />\n        <Field.Option value="other" title="Annet" />\n      </Field.Selection>\n    </Card>\n  </Form.Handler>\n)\n'})}),"\n",(0,t.jsx)(e.h3,{children:"Data handling"}),"\n",(0,t.jsxs)(e.p,{children:["You don't need React ",(0,t.jsx)(e.code,{children:"useState"})," to handle your form data."]}),"\n",(0,t.jsxs)(e.p,{children:["With ",(0,t.jsx)(e.a,{href:"/uilib/extensions/forms/extended-features/Form/useData/",children:"useData"}),", ",(0,t.jsx)(e.a,{href:"/uilib/extensions/forms/extended-features/Form/getData/",children:"getData"})," and ",(0,t.jsx)(e.a,{href:"/uilib/extensions/forms/extended-features/Form/setData/",children:"setData"})," you area able to access and modify your form data from not only from nested components, but also outside the form context itself (",(0,t.jsx)(e.code,{children:"Form.Handler"}),")."]}),"\n",(0,t.jsxs)(e.p,{children:['Here "ComponentB" is rendered inside the ',(0,t.jsx)(e.code,{children:"Form.Handler"})," component:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsx",children:"import { Form } from '@dnb/eufemia/extensions/forms'\n\nfunction ComponentA() {\n  return (\n    <Form.Handler>\n      ...\n      <ComponentB />\n      ...\n    </Form.Handler>\n  )\n}\n\nfunction ComponentB() {\n  const { data, update, set, filterData } = Form.useData()\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:['While in this example, "ComponentB" is outside the ',(0,t.jsx)(e.code,{children:"Form.Handler"})," and linked together via the ",(0,t.jsx)(e.code,{children:"id"})," (string) property:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsx",children:"import { Form } from '@dnb/eufemia/extensions/forms'\n\nfunction ComponentA() {\n  return (\n    <>\n      <Form.Handler id=\"unique\">...</Form.Handler>\n      <ComponentB />\n    </>\n  )\n}\n\nfunction ComponentB() {\n  const { data, update, set, filterData } = Form.useData('unique')\n}\n\n// You canalso use the setData:\nForm.setData('unique', { companyName: 'DNB' })\n\n// ... and the getData method when ever you need to:\nconst { data, filterData } = Form.getData('unique')\n"})}),"\n",(0,t.jsx)(e.h3,{children:"Transforming data"}),"\n",(0,t.jsx)(e.p,{children:"Each field supports transformer functions. So you can transform a value before it is processed to the form data object and vis-a-versa:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:'<Field.String\n  label="Label"\n  path="/myField"\n  transformIn={transformIn}\n  transformOut={transformOut}\n/>\n'})}),"\n",(0,t.jsx)(o.Transformers,{}),"\n",(0,t.jsx)(e.h3,{children:"Async form handling"}),"\n",(0,t.jsx)(e.p,{children:"It depends on your use case if this feature is needed. But when it is, its ofter a time consuming task to implement. Eufemia Forms has therefor a built-in feature that enables async form behavior."}),"\n",(0,t.jsxs)(e.p,{children:["More details about the async form behavior can be found in the ",(0,t.jsx)(e.a,{href:"/uilib/extensions/forms/getting-started/#async-form-behavior",children:"async form behavior"})," section."]})]})}function l(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(i,n)})):i(n)}},94929:function(n,e,a){a.r(e),a.d(e,{BaseFieldComponents:function(){return c},CreateBasicFieldComponent:function(){return m},CreateBasicValueComponent:function(){return s},CreateComposedFieldComponent:function(){return h},FeatureFields:function(){return p},GettingStarted:function(){return u},LayoutComponents:function(){return F},Transformers:function(){return C},UsingFormHandler:function(){return f},Validation:function(){return b},VisibilityBasedOnData:function(){return g},WithWizard:function(){return v}});a(2784);var t=a(99587),r=a(49406),o=a(26409),i=a(16620),l=a(21975),d=a(52322);const s=()=>(0,d.jsx)(t.Z,{scope:{ValueBlock:r.Z},hideCode:!0,noInline:!0,children:'const MyValue = ({ value, ...props }) => {\n  return (\n    <ValueBlock {...props}>\n      <NumberFormat currency>{value}</NumberFormat>\n    </ValueBlock>\n  )\n}\nrender(<MyValue label="Label" value={1234} />)\n'}),m=()=>(0,d.jsx)(t.Z,{scope:{useFieldProps:o.Z},hideCode:!0,noInline:!0,children:"const MyField = (props) => {\n  const fromInput = React.useCallback(({ value }) => value, [])\n  const preparedProps = {\n    label: 'What is the secret of this field?',\n    fromInput,\n    validator: (value) => {\n      if (value === 'secret') {\n        return new Error('Do not reveal the secret!')\n      }\n    },\n    ...props,\n  }\n  const { id, value, label, handleChange, handleFocus, handleBlur } =\n    useFieldProps(preparedProps)\n  return (\n    <FieldBlock forId={id} label={label}>\n      <Input\n        id={id}\n        value={value}\n        on_change={handleChange}\n        on_focus={handleFocus}\n        on_blur={handleBlur}\n      />\n    </FieldBlock>\n  )\n}\nrender(\n  <MyField\n    onChange={(value) => console.log('onChange', value)}\n    required\n  />,\n)\n"}),u=()=>(0,d.jsx)(t.Z,{hideCode:!0,noInline:!0,children:'const existingData = {\n  companyName: \'DNB\',\n  companyOrganizationNumber: \'123456789\',\n  postalAddressSelect: \'companyAddress\',\n}\nfunction Component() {\n  const { data } = Form.useData(\'company-form\')\n  console.log(\'State:\', data)\n  return (\n    <Form.Handler\n      id="company-form"\n      data={existingData}\n      onChange={console.log}\n      onSubmit={console.log}\n    >\n      <Flex.Stack>\n        <Form.MainHeading>Bedrift</Form.MainHeading>\n        <Card spacing="medium">\n          <Field.String\n            path="/companyName"\n            label="Bedriftens navn"\n            required\n          />\n          <Field.OrganizationNumber\n            path="/companyOrganizationNumber"\n            required\n          />\n          <Field.Selection\n            path="/postalAddressSelect"\n            label="Ønsket sted for tilsendt post"\n            variant="radio"\n          >\n            <Field.Option\n              value="companyAddress"\n              title="Samme som forretningsadresse"\n            />\n            <Field.Option value="other" title="Annet" />\n          </Field.Selection>\n        </Card>\n        <Form.ButtonRow>\n          <Form.SubmitButton />\n        </Form.ButtonRow>\n      </Flex.Stack>\n    </Form.Handler>\n  )\n}\nrender(<Component />)\n'}),h=()=>(0,d.jsx)(t.Z,{scope:{DataContext:i,useFieldProps:o.Z},hideCode:!0,noInline:!0,children:'const MyComposedField = (props) => {\n  const birthYear = useFieldProps({\n    path: \'/birthYear\',\n  })\n  const handleBirthYearChange = React.useCallback(\n    (sliderData) => {\n      birthYear.handleChange(sliderData.value)\n    },\n    [birthYear],\n  )\n  return (\n    <FieldBlock label={props.label ?? \'Name and age\'}>\n      <Flex.Horizontal>\n        <Field.String\n          path="/firstName"\n          label="First name"\n          width="medium"\n          minLength={2}\n        />\n        <Field.String\n          path="/lastName"\n          label="Last name"\n          width="medium"\n          required\n        />\n        <FieldBlock width="large">\n          <Slider\n            min={1900}\n            max={new Date().getFullYear()}\n            step={1}\n            label="Birth year"\n            label_direction="vertical"\n            value={parseFloat(String(birthYear.value))}\n            on_change={handleBirthYearChange}\n            on_drag_start={birthYear.handleFocus}\n            on_drag_end={birthYear.handleBlur}\n            status={birthYear.error?.message}\n            tooltip\n          />\n        </FieldBlock>\n      </Flex.Horizontal>\n    </FieldBlock>\n  )\n}\nconst data = {\n  firstName: \'John\',\n  birthYear: 2000,\n}\nrender(\n  <DataContext.Provider\n    data={data}\n    onChange={(data) => console.log(\'onChange\', data)}\n  >\n    <MyComposedField label="My custom label" />\n  </DataContext.Provider>,\n)\n'}),c=()=>(0,d.jsx)(t.Z,{scope:{Value:l},children:'<Card stack>\n  <Field.String\n    label="Text field"\n    value="Lorem Ipsum"\n    onChange={(value) => console.log(\'onChange\', value)}\n  />\n  <Field.Number\n    label="Number Field"\n    value={789}\n    onChange={(value) => console.log(\'onChange\', value)}\n  />\n  <Field.Boolean\n    label="Boolean Field"\n    value={true}\n    onChange={(value) => console.log(\'onChange\', value)}\n  />\n</Card>\n'}),p=()=>(0,d.jsx)(t.Z,{scope:{Value:l},children:'<Card stack>\n  <Field.String label="Fornavn" value="John" />\n  <Field.String label="Etternavn" value="Smith" />\n  <Field.NationalIdentityNumber value="20058512345" />\n  <Field.Email value="john@smith.email" />\n  <Field.PhoneNumber value="+47 98765432" />\n</Card>\n'}),F=()=>(0,d.jsx)(t.Z,{scope:{Value:l},children:'<Flex.Stack>\n  <Form.MainHeading>Profile</Form.MainHeading>\n\n  <Card stack>\n    <Form.SubHeading>Name</Form.SubHeading>\n\n    <Field.String label="Fornavn" value="John" />\n    <Field.String label="Etternavn" value="Smith" />\n  </Card>\n\n  <Card stack>\n    <Form.SubHeading>More information</Form.SubHeading>\n\n    <Field.NationalIdentityNumber value="20058512345" />\n    <Field.Email value="john@smith.email" />\n    <Field.PhoneNumber value="+47 98765432" />\n  </Card>\n</Flex.Stack>\n'}),g=()=>(0,d.jsx)(t.Z,{scope:{Value:l},children:'<Form.Handler\n  data={{\n    firstName: undefined,\n    lastName: \'Smith\',\n    advanced: false,\n    ssn: \'123\',\n    email: \'@smith.email\',\n    phone: \'+47 98765432\',\n  }}\n  onChange={(data) => console.log(\'onChange\', data)}\n  onPathChange={(path, value) => console.log(\'onPathChange\', path, value)}\n  onSubmit={(data) => console.log(\'onSubmit\', data)}\n>\n  <Flex.Stack>\n    <Form.MainHeading>Profile</Form.MainHeading>\n\n    <Card stack>\n      <Form.SubHeading>Name</Form.SubHeading>\n\n      <Field.String path="/firstName" label="Fornavn" />\n      <Field.String path="/lastName" label="Etternavn" />\n    </Card>\n  </Flex.Stack>\n  <Field.Boolean\n    path="/advanced"\n    variant="checkbox-button"\n    label="More fields"\n  />\n  <Form.Visibility pathTrue="/advanced">\n    <Flex.Stack>\n      <Card stack>\n        <Form.SubHeading>More information</Form.SubHeading>\n\n        <Field.NationalIdentityNumber value="20058512345" />\n        <Field.Email value="john@smith.email" />\n        <Field.PhoneNumber value="+47 98765432" />\n      </Card>\n    </Flex.Stack>\n  </Form.Visibility>\n</Form.Handler>\n'}),f=()=>(0,d.jsx)(t.Z,{scope:{Value:l},children:"<Form.Handler\n  data={{\n    firstName: 'John',\n    lastName: 'Smith',\n    ssn: '20058512345',\n    email: 'john@smith.email',\n    phone: '+47 98765432',\n  }}\n  onChange={(data) => console.log('onChange', data)}\n  onPathChange={(path, value) => console.log('onPathChange', path, value)}\n  onSubmit={(data) => console.log('onSubmit', data)}\n>\n  <Form.MainHeading>Profile</Form.MainHeading>\n\n  <Card stack>\n    <Field.String path=\"/firstName\" label=\"Fornavn\" />\n    <Field.String path=\"/lastName\" label=\"Etternavn\" />\n    <Field.NationalIdentityNumber path=\"/ssn\" />\n    <Field.Email path=\"/email\" />\n    <Field.PhoneNumber path=\"/phone\" />\n\n    <Form.ButtonRow>\n      <Form.SubmitButton />\n    </Form.ButtonRow>\n  </Card>\n</Form.Handler>\n"}),b=()=>(0,d.jsx)(t.Z,{scope:{Value:l},children:"<Form.Handler\n  data={{\n    firstName: undefined,\n    lastName: 'Smith',\n    ssn: '123',\n    email: '@smith.email',\n    phone: '+47 98765432',\n  }}\n  onChange={(data) => console.log('onChange', data)}\n  onPathChange={(path, value) => console.log('onPathChange', path, value)}\n  onSubmit={(data) => console.log('onSubmit', data)}\n>\n  <Form.MainHeading>Profile</Form.MainHeading>\n\n  <Card stack>\n    <Field.String path=\"/firstName\" label=\"Fornavn\" required />\n    <Field.String path=\"/lastName\" label=\"Etternavn\" required />\n    <Field.NationalIdentityNumber path=\"/ssn\" validateInitially />\n    <Field.Email path=\"/email\" validateInitially />\n    <Field.PhoneNumber path=\"/phone\" validateInitially />\n  </Card>\n</Form.Handler>\n"}),v=()=>(0,d.jsx)(t.Z,{scope:{Value:l},children:'<Form.Handler\n  data={{\n    firstName: undefined,\n    lastName: \'Smith\',\n    advanced: false,\n    ssn: \'123\',\n    email: \'@smith.email\',\n    phone: \'+47 98765432\',\n  }}\n  onChange={(data) => console.log(\'onChange\', data)}\n  onPathChange={(path, value) => console.log(\'onPathChange\', path, value)}\n  onSubmit={(data) => console.log(\'onSubmit\', data)}\n>\n  <Wizard.Container mode="loose">\n    <Wizard.Step title="Name">\n      <Form.MainHeading>Profile</Form.MainHeading>\n\n      <Card stack>\n        <Form.SubHeading>Name</Form.SubHeading>\n\n        <Field.String path="/firstName" label="Fornavn" required />\n        <Field.String path="/lastName" label="Etternavn" required />\n      </Card>\n\n      <Wizard.Buttons />\n    </Wizard.Step>\n\n    <Wizard.Step title="More information">\n      <Form.MainHeading>Profile</Form.MainHeading>\n\n      <Card stack>\n        <Form.SubHeading>More information</Form.SubHeading>\n\n        <Field.NationalIdentityNumber path="/ssn" />\n        <Field.Email path="/email" />\n        <Field.PhoneNumber path="/phone" />\n      </Card>\n\n      <Wizard.Buttons />\n    </Wizard.Step>\n\n    <Wizard.Step title="Summary">\n      <Form.MainHeading>Profile</Form.MainHeading>\n\n      <Card stack>\n        <Flex.Container>\n          <Value.String path="/firstName" label="Fornavn" />\n          <Value.String path="/lastName" label="Etternavn" />\n        </Flex.Container>\n\n        <Value.NationalIdentityNumber path="/ssn" />\n        <Value.Email path="/email" />\n        <Value.PhoneNumber path="/phone" />\n      </Card>\n\n      <Form.ButtonRow>\n        <Wizard.Buttons />\n        <Form.SubmitButton />\n      </Form.ButtonRow>\n    </Wizard.Step>\n  </Wizard.Container>\n</Form.Handler>\n'}),C=()=>(0,d.jsx)(t.Z,{hideCode:!0,noInline:!0,children:'const MyForm = () => {\n  const transformToUpper = (value) => {\n    return value?.toUpperCase()\n  }\n  const transformToLower = (value) => {\n    return value?.toLowerCase()\n  }\n  return (\n    <Form.Handler onChange={console.log}>\n      <Card stack>\n        <Field.String\n          width="medium"\n          label="Input value"\n          placeholder="Type letters"\n          path="/myField"\n          transformIn={transformToUpper}\n          transformOut={transformToLower}\n        />\n\n        <Value.String label="Output value" path="/myField" />\n      </Card>\n    </Form.Handler>\n  )\n}\nrender(<MyForm />)\n'})},16620:function(n,e,a){a.r(e),a.d(e,{At:function(){return m},Context:function(){return t.Z},Provider:function(){return r.Z},defaultContextState:function(){return t.E}});var t=a(21068),r=a(80370),o=a(2784),i=a(95955),l=a.n(i),d=a(52322);function s(n){const{path:e="/",iterate:a,children:r}=n,i=(0,o.useContext)(t.Z),{data:s,handlePathChange:m}=i,u=s&&l().has(s,e)?l().get(s,e):void 0,h=(0,o.useCallback)(((n,a)=>{m(`${e}${n}`,a)}),[m,e]);return a?Array.isArray(u)?(0,d.jsx)(d.Fragment,{children:u.map(((n,a)=>{const o=m?(n,t)=>{m(`${e}/${a}${n}`,t)}:void 0;return(0,d.jsx)(t.Z.Provider,{value:{...i,data:n,handlePathChange:o},children:r},`element${a}`)}))}):null:(0,d.jsx)(t.Z.Provider,{value:{...i,data:u,handlePathChange:h},children:r})}s._supportsSpacingProps=!0;var m=s}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-quick-start-mdx-d6e1e5e885dbeb2648c4.js.map