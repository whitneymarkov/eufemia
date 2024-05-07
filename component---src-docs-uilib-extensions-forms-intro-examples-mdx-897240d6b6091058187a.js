"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[11269],{99301:function(n,e,a){a.r(e);var t=a(52322),r=a(45392),o=a(94929);function i(n){const e=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",a:"a",code:"code"},(0,r.ah)(),n.components);return o||l("Examples",!1),o.BaseFieldComponents||l("Examples.BaseFieldComponents",!0),o.FeatureFields||l("Examples.FeatureFields",!0),o.LayoutComponents||l("Examples.LayoutComponents",!0),o.UsingFormHandler||l("Examples.UsingFormHandler",!0),o.UsingWizard||l("Examples.UsingWizard",!0),o.Validation||l("Examples.Validation",!0),o.VisibilityBasedOnData||l("Examples.VisibilityBasedOnData",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{children:"Demos"}),"\n",(0,t.jsx)(e.p,{children:"Here are some examples and case demos (fullscreen) of how you can use the form components."}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"/uilib/extensions/forms/demo-cases/casedemo1/",children:"Case Demo 1 (fullscreen)"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"/uilib/extensions/forms/demo-cases/casedemo2/",children:"Case Demo 2 (fullscreen)"})}),"\n"]}),"\n",(0,t.jsx)(e.h2,{children:"Base field components"}),"\n",(0,t.jsx)(e.p,{children:"Base field components are targeting the data type they produce. They can\nreceive values and change handlers directly by props."}),"\n",(0,t.jsx)(o.BaseFieldComponents,{}),"\n",(0,t.jsx)(e.h2,{children:"Feature fields"}),"\n",(0,t.jsx)(e.p,{children:"Feature fields build on top of base field components and provide standard\nprops for simplified form implementations."}),"\n",(0,t.jsx)(o.FeatureFields,{}),"\n",(0,t.jsx)(e.h2,{children:"Layout components"}),"\n",(0,t.jsxs)(e.p,{children:["Wrapping inputs in ",(0,t.jsx)(e.a,{href:"/uilib/layout/flex/stack/",children:"Flex.Stack"})," and ",(0,t.jsx)(e.a,{href:"/uilib/components/card/",children:"Card"})," with the ",(0,t.jsx)(e.code,{children:"stack"})," property, provides the standard design without\nthe need for local styles."]}),"\n",(0,t.jsx)(o.LayoutComponents,{}),"\n",(0,t.jsx)(e.h2,{children:"Visibility based on data"}),"\n",(0,t.jsx)(e.p,{children:"Certain fields are displayed based on specific data requirements."}),"\n",(0,t.jsx)(o.VisibilityBasedOnData,{}),"\n",(0,t.jsx)(e.h2,{children:"Validation"}),"\n",(0,t.jsx)(e.p,{children:"Here are some examples of validation properties of field components."}),"\n",(0,t.jsx)(o.Validation,{}),"\n",(0,t.jsxs)(e.h2,{children:["Using ",(0,t.jsx)(e.a,{href:"/uilib/extensions/forms/Form/Handler/",children:"Form.Handler"})]}),"\n",(0,t.jsxs)(e.p,{children:["Wrapping fields with a ",(0,t.jsx)(e.a,{href:"/uilib/extensions/forms/Form/Handler/",children:"Form.Handler"})," component lets them read and\nwrite data to one common data set, and have input and output of data in\none place instead of connecting to every single field component."]}),"\n",(0,t.jsx)(o.UsingFormHandler,{}),"\n",(0,t.jsxs)(e.h2,{children:["Using ",(0,t.jsx)(e.a,{href:"/uilib/extensions/forms/Wizard/Cotainer",children:"Wizard"})]}),"\n",(0,t.jsx)(o.UsingWizard,{})]})}function l(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(i,n)})):i(n)}},94929:function(n,e,a){a.r(e),a.d(e,{BaseFieldComponents:function(){return c},CreateBasicFieldComponent:function(){return m},CreateBasicValueComponent:function(){return s},CreateComposedFieldComponent:function(){return h},FeatureFields:function(){return p},GettingStarted:function(){return u},LayoutComponents:function(){return F},QuickStart:function(){return x},Transformers:function(){return v},UsingFormHandler:function(){return b},UsingWizard:function(){return C},Validation:function(){return f},VisibilityBasedOnData:function(){return g}});a(2784);var t=a(75333),r=a(49406),o=a(26409),i=a(16620),l=a(35540),d=a(52322);const s=()=>(0,d.jsx)(t.Z,{scope:{ValueBlock:r.Z},hideCode:!0,noInline:!0,children:'const MyValue = ({ value, ...props }) => {\n  return (\n    <ValueBlock {...props}>\n      <NumberFormat currency>{value}</NumberFormat>\n    </ValueBlock>\n  )\n}\nrender(<MyValue label="Label" value={1234} />)\n'}),m=()=>(0,d.jsx)(t.Z,{scope:{useFieldProps:o.Z},hideCode:!0,noInline:!0,children:"const MyField = (props) => {\n  const fromInput = React.useCallback(({ value }) => value, [])\n  const preparedProps = {\n    label: 'What is the secret of this field?',\n    fromInput,\n    validator: (value) => {\n      if (value === 'secret') {\n        return new Error('Do not reveal the secret!')\n      }\n    },\n    ...props,\n  }\n  const { id, value, label, handleChange, handleFocus, handleBlur } =\n    useFieldProps(preparedProps)\n  return (\n    <FieldBlock forId={id} label={label}>\n      <Input\n        id={id}\n        value={value}\n        on_change={handleChange}\n        on_focus={handleFocus}\n        on_blur={handleBlur}\n      />\n    </FieldBlock>\n  )\n}\nrender(\n  <MyField\n    onChange={(value) => console.log('onChange', value)}\n    required\n  />,\n)\n"}),u=()=>(0,d.jsx)(t.Z,{hideCode:!0,noInline:!0,children:'const existingData = {\n  companyName: \'DNB\',\n  companyOrganizationNumber: \'123456789\',\n  postalAddressSelect: \'companyAddress\',\n}\nfunction Component() {\n  const { data } = Form.useData(\'company-form\')\n  console.log(\'State:\', data)\n  return (\n    <Form.Handler\n      id="company-form"\n      data={existingData}\n      onChange={console.log}\n      onSubmit={console.log}\n    >\n      <Flex.Stack>\n        <Form.MainHeading>Bedrift</Form.MainHeading>\n        <Card stack>\n          <Field.String\n            path="/companyName"\n            label="Bedriftens navn"\n            required\n          />\n          <Field.OrganizationNumber\n            path="/companyOrganizationNumber"\n            required\n          />\n          <Field.Selection\n            path="/postalAddressSelect"\n            label="Ønsket sted for tilsendt post"\n            variant="radio"\n          >\n            <Field.Option\n              value="companyAddress"\n              title="Samme som forretningsadresse"\n            />\n            <Field.Option value="other" title="Annet" />\n          </Field.Selection>\n        </Card>\n        <Form.ButtonRow>\n          <Form.SubmitButton />\n        </Form.ButtonRow>\n      </Flex.Stack>\n    </Form.Handler>\n  )\n}\nrender(<Component />)\n'}),h=()=>(0,d.jsx)(t.Z,{scope:{DataContext:i,useFieldProps:o.Z},hideCode:!0,noInline:!0,children:'const MyComposedField = (props) => {\n  const birthYear = useFieldProps({\n    path: \'/birthYear\',\n  })\n  const handleBirthYearChange = React.useCallback(\n    (sliderData) => {\n      birthYear.handleChange(sliderData.value)\n    },\n    [birthYear],\n  )\n  return (\n    <FieldBlock label={props.label ?? \'Name and age\'}>\n      <Flex.Horizontal>\n        <Field.Name.First path="/firstName" width="medium" minLength={2} />\n        <Field.Name.Last path="/lastName" width="medium" required />\n        <FieldBlock width="large">\n          <Slider\n            min={1900}\n            max={new Date().getFullYear()}\n            step={1}\n            label="Birth year"\n            label_direction="vertical"\n            value={parseFloat(String(birthYear.value))}\n            on_change={handleBirthYearChange}\n            on_drag_start={birthYear.handleFocus}\n            on_drag_end={birthYear.handleBlur}\n            status={birthYear.error?.message}\n            tooltip\n          />\n        </FieldBlock>\n      </Flex.Horizontal>\n    </FieldBlock>\n  )\n}\nconst data = {\n  firstName: \'John\',\n  birthYear: 2000,\n}\nrender(\n  <DataContext.Provider\n    data={data}\n    onChange={(data) => console.log(\'onChange\', data)}\n  >\n    <MyComposedField label="My custom label" />\n  </DataContext.Provider>,\n)\n'}),c=()=>(0,d.jsx)(t.Z,{scope:{Value:l},children:'<Card stack>\n  <Field.String\n    label="Text field"\n    value="Lorem Ipsum"\n    onChange={(value) => console.log(\'onChange\', value)}\n  />\n  <Field.Number\n    label="Number Field"\n    value={789}\n    onChange={(value) => console.log(\'onChange\', value)}\n  />\n  <Field.Boolean\n    label="Boolean Field"\n    value={true}\n    onChange={(value) => console.log(\'onChange\', value)}\n  />\n</Card>\n'}),p=()=>(0,d.jsx)(t.Z,{scope:{Value:l},children:'<Card stack>\n  <Field.String label="Fornavn" value="John" />\n  <Field.String label="Etternavn" value="Smith" />\n  <Field.NationalIdentityNumber value="20058512345" />\n  <Field.Email value="john@smith.email" />\n  <Field.PhoneNumber value="+47 98765432" />\n</Card>\n'}),F=()=>(0,d.jsx)(t.Z,{scope:{Value:l},children:'<Flex.Stack>\n  <Form.MainHeading>Profile</Form.MainHeading>\n\n  <Card stack>\n    <Form.SubHeading>Name</Form.SubHeading>\n\n    <Field.String label="Fornavn" value="John" />\n    <Field.String label="Etternavn" value="Smith" />\n  </Card>\n\n  <Card stack>\n    <Form.SubHeading>More information</Form.SubHeading>\n\n    <Field.NationalIdentityNumber value="20058512345" />\n    <Field.Email value="john@smith.email" />\n    <Field.PhoneNumber value="+47 98765432" />\n  </Card>\n</Flex.Stack>\n'}),g=()=>(0,d.jsx)(t.Z,{scope:{Value:l},children:'<Form.Handler\n  data={{\n    firstName: undefined,\n    lastName: \'Smith\',\n    advanced: false,\n    ssn: \'123\',\n    email: \'@smith.email\',\n    phone: \'+47 98765432\',\n  }}\n  onChange={(data) => console.log(\'onChange\', data)}\n  onPathChange={(path, value) => console.log(\'onPathChange\', path, value)}\n  onSubmit={(data) => console.log(\'onSubmit\', data)}\n>\n  <Flex.Stack>\n    <Form.MainHeading>Profile</Form.MainHeading>\n\n    <Card stack>\n      <Form.SubHeading>Name</Form.SubHeading>\n\n      <Field.String path="/firstName" label="Fornavn" />\n      <Field.String path="/lastName" label="Etternavn" />\n    </Card>\n\n    <Field.Boolean\n      path="/advanced"\n      variant="checkbox-button"\n      label="More fields"\n    />\n    <Form.Visibility pathTrue="/advanced">\n      <Flex.Stack>\n        <Card stack>\n          <Form.SubHeading>More information</Form.SubHeading>\n\n          <Field.NationalIdentityNumber value="20058512345" />\n          <Field.Email value="john@smith.email" />\n          <Field.PhoneNumber value="+47 98765432" />\n        </Card>\n      </Flex.Stack>\n    </Form.Visibility>\n  </Flex.Stack>\n</Form.Handler>\n'}),b=()=>(0,d.jsx)(t.Z,{scope:{Value:l},children:"<Form.Handler\n  data={{\n    firstName: 'John',\n    lastName: 'Smith',\n    ssn: '20058512345',\n    email: 'john@smith.email',\n    phone: '+47 98765432',\n  }}\n  onChange={(data) => console.log('onChange', data)}\n  onPathChange={(path, value) => console.log('onPathChange', path, value)}\n  onSubmit={(data) => console.log('onSubmit', data)}\n>\n  <Form.MainHeading>Profile</Form.MainHeading>\n\n  <Card stack>\n    <Field.String path=\"/firstName\" label=\"Fornavn\" />\n    <Field.String path=\"/lastName\" label=\"Etternavn\" />\n    <Field.NationalIdentityNumber path=\"/ssn\" />\n    <Field.Email path=\"/email\" />\n    <Field.PhoneNumber path=\"/phone\" />\n\n    <Form.ButtonRow>\n      <Form.SubmitButton />\n    </Form.ButtonRow>\n  </Card>\n</Form.Handler>\n"}),f=()=>(0,d.jsx)(t.Z,{scope:{Value:l},children:"<Form.Handler\n  data={{\n    firstName: undefined,\n    lastName: 'Smith',\n    ssn: '123',\n    email: '@smith.email',\n    phone: '+47 98765432',\n  }}\n  onChange={(data) => console.log('onChange', data)}\n  onPathChange={(path, value) => console.log('onPathChange', path, value)}\n  onSubmit={(data) => console.log('onSubmit', data)}\n>\n  <Form.MainHeading>Profile</Form.MainHeading>\n\n  <Card stack>\n    <Field.String path=\"/firstName\" label=\"Fornavn\" required />\n    <Field.String path=\"/lastName\" label=\"Etternavn\" required />\n    <Field.NationalIdentityNumber path=\"/ssn\" validateInitially />\n    <Field.Email path=\"/email\" validateInitially />\n    <Field.PhoneNumber path=\"/phone\" validateInitially />\n  </Card>\n</Form.Handler>\n"}),C=()=>(0,d.jsx)(t.Z,{noInline:!0,children:'const MyForm = () => {\n  // Routers like "react-router" are supported as well\n  Wizard.useQueryLocator(\'my-wizard\')\n  const { summaryTitle } = Form.useLocale().Step\n  return (\n    <Form.Handler\n      data={{\n        firstName: undefined,\n        lastName: \'Smith\',\n        advanced: false,\n        ssn: \'123\',\n        email: \'@smith.email\',\n        phone: \'+47 98765432\',\n      }}\n      onChange={(data) => console.log(\'onChange\', data)}\n      onPathChange={(path, value) =>\n        console.log(\'onPathChange\', path, value)\n      }\n      onSubmit={(data) => console.log(\'onSubmit\', data)}\n    >\n      <Wizard.Container id="my-wizard" mode="loose">\n        <Wizard.Step title="Name">\n          <Form.MainHeading>Profile</Form.MainHeading>\n\n          <Card stack>\n            <Form.SubHeading>Name</Form.SubHeading>\n\n            <Field.String path="/firstName" label="Fornavn" required />\n            <Field.String path="/lastName" label="Etternavn" required />\n          </Card>\n\n          <Wizard.Buttons />\n        </Wizard.Step>\n\n        <Wizard.Step title="More information">\n          <Form.MainHeading>Profile</Form.MainHeading>\n\n          <Card stack>\n            <Form.SubHeading>More information</Form.SubHeading>\n\n            <Field.NationalIdentityNumber path="/ssn" />\n            <Field.Email path="/email" />\n            <Field.PhoneNumber path="/phone" />\n          </Card>\n\n          <Wizard.Buttons />\n        </Wizard.Step>\n\n        <Wizard.Step title={summaryTitle}>\n          <Form.MainHeading>Profile</Form.MainHeading>\n\n          <Card stack>\n            <Value.SummaryList layout="grid">\n              <Value.String path="/firstName" label="Fornavn" />\n              <Value.String path="/lastName" label="Etternavn" />\n\n              <Value.NationalIdentityNumber path="/ssn" />\n              <Value.Email path="/email" />\n              <Value.PhoneNumber path="/phone" />\n            </Value.SummaryList>\n          </Card>\n\n          <Form.ButtonRow>\n            <Wizard.Buttons />\n            <Form.SubmitButton />\n          </Form.ButtonRow>\n        </Wizard.Step>\n      </Wizard.Container>\n    </Form.Handler>\n  )\n}\nrender(<MyForm />)\n'}),v=()=>(0,d.jsx)(t.Z,{hideCode:!0,noInline:!0,children:'const MyForm = () => {\n  const transformToUpper = (value) => {\n    return value?.toUpperCase()\n  }\n  const transformToLower = (value) => {\n    return value?.toLowerCase()\n  }\n  return (\n    <Form.Handler onChange={console.log}>\n      <Card stack>\n        <Field.String\n          width="medium"\n          label="Input value"\n          placeholder="Type letters"\n          path="/myField"\n          transformIn={transformToUpper}\n          transformOut={transformToLower}\n        />\n\n        <Value.String label="Output value" path="/myField" />\n      </Card>\n    </Form.Handler>\n  )\n}\nrender(<MyForm />)\n'}),x=()=>(0,d.jsx)(t.Z,{noInline:!0,children:'const MyForm = () => {\n  const existingData = {\n    companyName: \'DNB\',\n  }\n  return (\n    <Form.Handler\n      data={existingData}\n      onChange={console.log}\n      onSubmit={console.log}\n    >\n      <Card stack>\n        <Field.String\n          path="/companyName"\n          label="Bedriftens navn"\n          required\n        />\n        <Field.OrganizationNumber\n          path="/companyOrganizationNumber"\n          required\n        />\n        <Field.Selection\n          path="/postalAddressSelect"\n          label="Ønsket sted for tilsendt post"\n          variant="radio"\n        >\n          <Field.Option\n            value="companyAddress"\n            title="Samme som forretningsadresse"\n          />\n          <Field.Option value="other" title="Annet" />\n        </Field.Selection>\n      </Card>\n    </Form.Handler>\n  )\n}\nrender(<MyForm />)\n'})},16620:function(n,e,a){a.r(e),a.d(e,{At:function(){return m},Context:function(){return t.Z},Provider:function(){return r.ZP},defaultContextState:function(){return t.E}});var t=a(21068),r=a(6436),o=a(2784),i=a(95955),l=a.n(i),d=a(52322);function s(n){const{path:e="/",iterate:a,children:r}=n,i=(0,o.useContext)(t.Z),{data:s,handlePathChange:m}=i,u=s&&l().has(s,e)?l().get(s,e):void 0,h=(0,o.useCallback)(((n,a)=>{m(`${e}${n}`,a)}),[m,e]);return a?Array.isArray(u)?(0,d.jsx)(d.Fragment,{children:u.map(((n,a)=>{const o=m?(n,t)=>{m(`${e}/${a}${n}`,t)}:void 0;return(0,d.jsx)(t.Z.Provider,{value:{...i,data:n,handlePathChange:o},children:r},`element${a}`)}))}):null:(0,d.jsx)(t.Z.Provider,{value:{...i,data:u,handlePathChange:h},children:r})}s._supportsSpacingProps=!0;var m=s}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-intro-examples-mdx-897240d6b6091058187a.js.map