"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[77212,55310],{51342:function(n,e,a){a.r(e);var t=a(52322),r=a(45392),o=a(57295);function i(n){const e=Object.assign({h2:"h2",ul:"ul",li:"li",a:"a",p:"p",blockquote:"blockquote",code:"code",h3:"h3"},(0,r.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{children:"Table of Contents"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#philosophy",children:"Philosophy"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#features",children:"Features"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#quick-start",children:"Quick start"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#create-your-own-component",children:"Create your own component"})}),"\n"]}),"\n",(0,t.jsx)(e.h2,{children:"Philosophy"}),"\n",(0,t.jsx)(e.p,{children:"Eufemia Forms is:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"A framework for building form features"}),"\n",(0,t.jsx)(e.li,{children:"Flexibility by design"}),"\n",(0,t.jsx)(e.li,{children:"Data-driven API"}),"\n",(0,t.jsx)(e.li,{children:"Standardized data handling"}),"\n",(0,t.jsx)(e.li,{children:"Loosely coupled components and building blocks"}),"\n",(0,t.jsx)(e.li,{children:"Focus on superior user experience, accessibility, and usability"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"Eufemia Forms is a set of building blocks for form functionality. Components are built on an API with standardized sets of props that make it easier to combine with surrounding data flow, and not least to create your own components that work well together with the ready-made components in Eufemia Forms."}),"\n",(0,t.jsx)(e.p,{children:"An important point is that the components are data-driven. They are built on the premise of the source data, rather than being closely coupled to HTML elements that the internal implementation uses."}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"The primary objective of Eufemia Forms is to simplify the process of building forms by leveraging a declarative API. This approach not only saves time but also reduces code and complexity."}),"\n"]}),"\n",(0,t.jsx)(e.h2,{children:"Features"}),"\n",(0,t.jsx)(e.p,{children:"Eufemia Forms consists of reusable components for data input, data display and surrounding layout for simplified user interface creation in React, built on top of base Eufemia components."}),"\n",(0,t.jsx)(e.p,{children:"In summary:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Ready to use data driven form components."}),"\n",(0,t.jsx)(e.li,{children:"Three shakeable structure. Unused code will not be included in the production bundle."}),"\n",(0,t.jsx)(e.li,{children:"All functionality in all components can be controlled and overridden via props."}),"\n",(0,t.jsxs)(e.li,{children:["Data management using the declarative ",(0,t.jsx)(e.a,{href:"/uilib/extensions/forms/getting-started/#what-is-a-json-pointer",children:"JSON Pointer"})," directive (i.e ",(0,t.jsx)(e.code,{children:'path="/firstName"'}),")."]}),"\n",(0,t.jsxs)(e.li,{children:["State can be handled outside of the ",(0,t.jsx)(e.a,{href:"/uilib/extensions/forms/Form/Handler",children:"Form.Handler"})," (Provider Context) with the ",(0,t.jsx)(e.a,{href:"/uilib/extensions/forms/Form/useData",children:"useData"})," hook."]}),"\n",(0,t.jsxs)(e.li,{children:["Validation (like ",(0,t.jsx)(e.code,{children:"minLength"})," on text fields) as well as advanced and complex ",(0,t.jsx)(e.a,{href:"https://ajv.js.org/",children:"Ajv"})," JSON schema validator (Ajv is like Joi or Yup – check out ",(0,t.jsx)(e.a,{href:"/uilib/extensions/forms/Form/schema-validation",children:"some examples"}),") support on both single fields and the whole data set."]}),"\n",(0,t.jsxs)(e.li,{children:["Async form ",(0,t.jsx)(e.a,{href:"/uilib/extensions/forms/getting-started/#async-form-behavior",children:"submission"})," and ",(0,t.jsx)(e.a,{href:"/uilib/extensions/forms/getting-started/#async-validation",children:"validation"})," support."]}),"\n",(0,t.jsxs)(e.li,{children:["Theming of field sizes with ",(0,t.jsx)(e.a,{href:"/uilib/extensions/forms/Form/Appearance/",children:"Form.Appearance"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:["Easy to integrate ",(0,t.jsx)(e.a,{href:"/uilib/extensions/forms/Wizard/location-hooks/",children:"browser location"})," support."]}),"\n",(0,t.jsxs)(e.li,{children:["Static ",(0,t.jsx)(e.a,{href:"/uilib/extensions/forms/Value/",children:"value components"})," for displaying data with proper formatting."]}),"\n",(0,t.jsxs)(e.li,{children:["Use the ",(0,t.jsx)(e.a,{href:"/uilib/extensions/forms/Form/Section/",children:"Form.Section"})," component to quickly create reusable and flexible sections and blocks for your form."]}),"\n",(0,t.jsxs)(e.li,{children:["Building blocks for ",(0,t.jsx)(e.a,{href:"/uilib/extensions/forms/create-component",children:"creating your custom field components"}),"."]}),"\n"]}),"\n",(0,t.jsx)(o.default,{}),"\n",(0,t.jsxs)(e.p,{children:["More details in the ",(0,t.jsx)(e.a,{href:"/uilib/extensions/forms/getting-started/",children:"getting started"})," section."]}),"\n",(0,t.jsx)(e.h3,{children:"Best practices"}),"\n",(0,t.jsxs)(e.p,{children:["Read more about ",(0,t.jsx)(e.a,{href:"/uilib/extensions/forms/best-practices-on-forms/",children:"best practices on forms"}),"."]}),"\n",(0,t.jsx)(e.h2,{children:"Create your own component"}),"\n",(0,t.jsx)(e.p,{children:"Eufemia Forms consists of helper components and tools so you can declaratively create interactive form components that flawlessly integrates between existing data and your custom form components. This ensures a common look and feel, even when ready-made components are combined with your local custom components."}),"\n",(0,t.jsxs)(e.p,{children:["Read more about ",(0,t.jsx)(e.a,{href:"/uilib/extensions/forms/create-component",children:"creating your own component"}),"."]}),"\n",(0,t.jsx)(e.h2,{children:"Requirements"}),"\n",(0,t.jsx)(e.p,{children:"Some of the internal logic requires support for importing JSON files. Meta frameworks do often support this by default."})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(i,n)})):i(n)}},57295:function(n,e,a){a.r(e);var t=a(52322),r=a(45392),o=a(94929);function i(n){const e=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",strong:"strong"},(0,r.ah)(),n.components);return o||l("Examples",!1),o.QuickStart||l("Examples.QuickStart",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{children:"Quick start"}),"\n",(0,t.jsxs)(e.p,{children:["Here's how you import the components from within scopes, such as ",(0,t.jsx)(e.code,{children:"Form"})," and ",(0,t.jsx)(e.code,{children:"Field"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsx",children:"import { Form, Field } from '@dnb/eufemia/extensions/forms'\n"})}),"\n",(0,t.jsxs)(e.p,{children:["Field components can be used directly as they are, for example ",(0,t.jsx)(e.code,{children:"Field.Email"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsx",children:"import { Field } from '@dnb/eufemia/extensions/forms'\nrender(<Field.Email />)\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"NB:"})," In the above example, only the email field will be a part of your application bundle. Unused code will be tree-shaken away."]}),"\n",(0,t.jsxs)(e.p,{children:["And here is how you can use the ",(0,t.jsx)(e.code,{children:"Form"})," component:"]}),"\n",(0,t.jsx)(o.QuickStart,{})]})}function l(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(i,n)})):i(n)}},94929:function(n,e,a){a.r(e),a.d(e,{BaseFieldComponents:function(){return p},CreateBasicFieldComponent:function(){return m},CreateBasicValueComponent:function(){return c},CreateComposedFieldComponent:function(){return h},FeatureFields:function(){return F},GettingStarted:function(){return u},LayoutComponents:function(){return f},QuickStart:function(){return S},Transformers:function(){return j},UsingFormHandler:function(){return b},UsingFormSection:function(){return v},UsingIterate:function(){return C},UsingWizard:function(){return y},Validation:function(){return x},VisibilityBasedOnData:function(){return g}});a(2784);var t=a(58469),r=a(49406),o=a(26409),i=a(16620),l=a(40942),s=a(49414),d=a(52322);const c=()=>(0,d.jsx)(t.Z,{scope:{ValueBlock:r.Z},hideCode:!0,noInline:!0,children:'const MyValue = ({ value, ...props }) => {\n  return (\n    <ValueBlock {...props}>\n      <NumberFormat currency>{value}</NumberFormat>\n    </ValueBlock>\n  )\n}\nrender(<MyValue label="Label" value={1234} />)\n'}),m=()=>(0,d.jsx)(t.Z,{scope:{useFieldProps:o.Z},hideCode:!0,noInline:!0,children:"const MyField = (props) => {\n  const fromInput = React.useCallback(({ value }) => value, [])\n  const preparedProps = {\n    label: 'What is the secret of this field?',\n    fromInput,\n    validator: (value) => {\n      if (value === 'secret') {\n        return new Error('Do not reveal the secret!')\n      }\n    },\n    ...props,\n  }\n  const { id, value, label, handleChange, handleFocus, handleBlur } =\n    useFieldProps(preparedProps)\n  return (\n    <FieldBlock forId={id} label={label}>\n      <Input\n        id={id}\n        value={value}\n        on_change={handleChange}\n        on_focus={handleFocus}\n        on_blur={handleBlur}\n      />\n    </FieldBlock>\n  )\n}\nrender(\n  <MyField\n    onChange={(value) => console.log('onChange', value)}\n    required\n  />,\n)\n"}),u=()=>(0,d.jsx)(t.Z,{hideCode:!0,noInline:!0,children:'const existingData = {\n  companyName: \'DNB\',\n  companyOrganizationNumber: \'123456789\',\n  postalAddressSelect: \'companyAddress\',\n}\nfunction Component() {\n  const { data } = Form.useData(\'company-form\')\n  console.log(\'State:\', data)\n  return (\n    <Form.Handler\n      id="company-form"\n      defaultData={existingData}\n      onChange={console.log}\n      onSubmit={console.log}\n    >\n      <Flex.Stack>\n        <Form.MainHeading>Bedrift</Form.MainHeading>\n        <Card stack>\n          <Field.Name.Company path="/companyName" required />\n          <Field.OrganizationNumber\n            path="/companyOrganizationNumber"\n            required\n          />\n          <Field.Selection\n            path="/postalAddressSelect"\n            label="Ønsket sted for tilsendt post"\n            variant="radio"\n          >\n            <Field.Option\n              value="companyAddress"\n              title="Samme som forretningsadresse"\n            />\n            <Field.Option value="other" title="Annet" />\n          </Field.Selection>\n        </Card>\n        <Form.ButtonRow>\n          <Form.SubmitButton />\n        </Form.ButtonRow>\n      </Flex.Stack>\n    </Form.Handler>\n  )\n}\nrender(<Component />)\n'}),h=()=>(0,d.jsx)(t.Z,{scope:{DataContext:i,useFieldProps:o.Z},hideCode:!0,noInline:!0,children:'const MyComposedField = (props) => {\n  const birthYear = useFieldProps({\n    path: \'/birthYear\',\n  })\n  const handleBirthYearChange = React.useCallback(\n    (sliderData) => {\n      birthYear.handleChange(sliderData.value)\n    },\n    [birthYear],\n  )\n  return (\n    <FieldBlock label={props.label ?? \'Name and age\'}>\n      <Flex.Horizontal>\n        <Field.Name.First path="/firstName" width="medium" minLength={2} />\n        <Field.Name.Last path="/lastName" width="medium" required />\n        <FieldBlock width="large">\n          <Slider\n            min={1900}\n            max={new Date().getFullYear()}\n            step={1}\n            label="Birth year"\n            label_direction="vertical"\n            value={parseFloat(String(birthYear.value))}\n            on_change={handleBirthYearChange}\n            on_drag_start={birthYear.handleFocus}\n            on_drag_end={birthYear.handleBlur}\n            status={birthYear.error?.message}\n            tooltip\n          />\n        </FieldBlock>\n      </Flex.Horizontal>\n    </FieldBlock>\n  )\n}\nconst data = {\n  firstName: \'John\',\n  birthYear: 2000,\n}\nrender(\n  <DataContext.Provider\n    defaultData={data}\n    onChange={(data) => console.log(\'onChange\', data)}\n  >\n    <MyComposedField label="My custom label" />\n  </DataContext.Provider>,\n)\n'}),p=()=>(0,d.jsx)(t.Z,{scope:{Value:l},children:'<Card stack>\n  <Field.String\n    label="Text field"\n    value="Lorem Ipsum"\n    onChange={(value) => console.log(\'onChange\', value)}\n  />\n  <Field.Number\n    label="Number Field"\n    value={789}\n    onChange={(value) => console.log(\'onChange\', value)}\n  />\n  <Field.Boolean\n    label="Boolean Field"\n    value={true}\n    onChange={(value) => console.log(\'onChange\', value)}\n  />\n</Card>\n'}),F=()=>(0,d.jsx)(t.Z,{scope:{Value:l},children:'<Card stack>\n  <Field.String label="Fornavn" value="John" />\n  <Field.String label="Etternavn" value="Smith" />\n  <Field.NationalIdentityNumber value="20058512345" />\n  <Field.Email value="john@smith.email" />\n  <Field.PhoneNumber value="+47 98765432" />\n</Card>\n'}),f=()=>(0,d.jsx)(t.Z,{scope:{Value:l},children:'<Flex.Stack>\n  <Form.MainHeading>Profile</Form.MainHeading>\n\n  <Card stack>\n    <Form.SubHeading>Name</Form.SubHeading>\n\n    <Field.String label="Fornavn" value="John" />\n    <Field.String label="Etternavn" value="Smith" />\n  </Card>\n\n  <Card stack>\n    <Form.SubHeading>More information</Form.SubHeading>\n\n    <Field.NationalIdentityNumber value="20058512345" />\n    <Field.Email value="john@smith.email" />\n    <Field.PhoneNumber value="+47 98765432" />\n  </Card>\n</Flex.Stack>\n'}),g=()=>(0,d.jsx)(t.Z,{scope:{Value:l},children:'<Form.Handler\n  defaultData={{\n    firstName: undefined,\n    lastName: \'Smith\',\n    advanced: false,\n    ssn: \'123\',\n    email: \'@smith.email\',\n    phone: \'+47 98765432\',\n  }}\n  onChange={(data) => console.log(\'onChange\', data)}\n  onPathChange={(path, value) => console.log(\'onPathChange\', path, value)}\n  onSubmit={(data) => console.log(\'onSubmit\', data)}\n>\n  <Flex.Stack>\n    <Form.MainHeading>Profile</Form.MainHeading>\n\n    <Card stack>\n      <Form.SubHeading>Name</Form.SubHeading>\n\n      <Field.String path="/firstName" label="Fornavn" />\n      <Field.String path="/lastName" label="Etternavn" />\n    </Card>\n\n    <Field.Boolean\n      path="/advanced"\n      variant="checkbox-button"\n      label="More fields"\n    />\n    <Form.Visibility pathTrue="/advanced">\n      <Flex.Stack>\n        <Card stack>\n          <Form.SubHeading>More information</Form.SubHeading>\n\n          <Field.NationalIdentityNumber value="20058512345" />\n          <Field.Email value="john@smith.email" />\n          <Field.PhoneNumber value="+47 98765432" />\n        </Card>\n      </Flex.Stack>\n    </Form.Visibility>\n  </Flex.Stack>\n</Form.Handler>\n'}),b=()=>(0,d.jsx)(t.Z,{scope:{Value:l},children:"<Form.Handler\n  defaultData={{\n    firstName: 'John',\n    lastName: 'Smith',\n    ssn: '20058512345',\n    email: 'john@smith.email',\n    phone: '+47 98765432',\n  }}\n  onChange={(data) => console.log('onChange', data)}\n  onPathChange={(path, value) => console.log('onPathChange', path, value)}\n  onSubmit={(data) => console.log('onSubmit', data)}\n>\n  <Form.MainHeading>Profile</Form.MainHeading>\n\n  <Card stack>\n    <Field.String path=\"/firstName\" label=\"Fornavn\" />\n    <Field.String path=\"/lastName\" label=\"Etternavn\" />\n    <Field.NationalIdentityNumber path=\"/ssn\" />\n    <Field.Email path=\"/email\" />\n    <Field.PhoneNumber path=\"/phone\" />\n\n    <Form.ButtonRow>\n      <Form.SubmitButton />\n    </Form.ButtonRow>\n  </Card>\n</Form.Handler>\n"}),x=()=>(0,d.jsx)(t.Z,{scope:{Value:l},children:"<Form.Handler\n  defaultData={{\n    firstName: undefined,\n    lastName: 'Smith',\n    ssn: '123',\n    email: '@smith.email',\n    phone: '+47 98765432',\n  }}\n  onChange={(data) => console.log('onChange', data)}\n  onPathChange={(path, value) => console.log('onPathChange', path, value)}\n  onSubmit={(data) => console.log('onSubmit', data)}\n>\n  <Form.MainHeading>Profile</Form.MainHeading>\n\n  <Card stack>\n    <Field.String path=\"/firstName\" label=\"Fornavn\" required />\n    <Field.String path=\"/lastName\" label=\"Etternavn\" required />\n    <Field.NationalIdentityNumber path=\"/ssn\" validateInitially />\n    <Field.Email path=\"/email\" validateInitially />\n    <Field.PhoneNumber path=\"/phone\" validateInitially />\n  </Card>\n</Form.Handler>\n"}),y=()=>(0,d.jsx)(t.Z,{noInline:!0,children:'const MyForm = () => {\n  // Routers like "react-router" are supported as well\n  Wizard.useQueryLocator(\'my-wizard\')\n  const { summaryTitle } = Form.useLocale().Step\n  return (\n    <Form.Handler\n      defaultData={{\n        firstName: undefined,\n        lastName: \'Smith\',\n        advanced: false,\n        ssn: \'123\',\n        email: \'@smith.email\',\n        phone: \'+47 98765432\',\n      }}\n      onChange={(data) => console.log(\'onChange\', data)}\n      onPathChange={(path, value) =>\n        console.log(\'onPathChange\', path, value)\n      }\n      onSubmit={(data) => console.log(\'onSubmit\', data)}\n    >\n      <Wizard.Container id="my-wizard" mode="loose">\n        <Wizard.Step title="Name">\n          <Form.MainHeading>Profile</Form.MainHeading>\n\n          <Card stack>\n            <Form.SubHeading>Name</Form.SubHeading>\n\n            <Field.String path="/firstName" label="Fornavn" required />\n            <Field.String path="/lastName" label="Etternavn" required />\n          </Card>\n\n          <Wizard.Buttons />\n        </Wizard.Step>\n\n        <Wizard.Step title="More information">\n          <Form.MainHeading>Profile</Form.MainHeading>\n\n          <Card stack>\n            <Form.SubHeading>More information</Form.SubHeading>\n\n            <Field.NationalIdentityNumber path="/ssn" />\n            <Field.Email path="/email" />\n            <Field.PhoneNumber path="/phone" />\n          </Card>\n\n          <Wizard.Buttons />\n        </Wizard.Step>\n\n        <Wizard.Step title={summaryTitle}>\n          <Form.MainHeading>Profile</Form.MainHeading>\n\n          <Card stack>\n            <Value.SummaryList layout="grid">\n              <Value.String path="/firstName" label="Fornavn" />\n              <Value.String path="/lastName" label="Etternavn" />\n\n              <Value.NationalIdentityNumber path="/ssn" />\n              <Value.Email path="/email" />\n              <Value.PhoneNumber path="/phone" />\n            </Value.SummaryList>\n          </Card>\n\n          <Form.ButtonRow>\n            <Wizard.Buttons />\n            <Form.SubmitButton />\n          </Form.ButtonRow>\n        </Wizard.Step>\n      </Wizard.Container>\n    </Form.Handler>\n  )\n}\nrender(<MyForm />)\n'}),v=()=>(0,d.jsx)(t.Z,{noInline:!0,children:'const MyEditContainer = () => {\n  return (\n    <Form.Section.EditContainer variant="basic">\n      <Field.Name.First path="/firstName" />\n      <Field.Name.Last path="/lastName" />\n    </Form.Section.EditContainer>\n  )\n}\nconst MyViewContainer = () => {\n  return (\n    <Form.Section.ViewContainer variant="basic">\n      <Value.SummaryList>\n        <Value.Name.First path="/firstName" />\n        <Value.Name.Last path="/lastName" />\n      </Value.SummaryList>\n    </Form.Section.ViewContainer>\n  )\n}\nrender(\n  <Form.Handler\n    onSubmit={async (data) => console.log(\'onSubmit\', data)}\n    defaultData={{\n      nestedPath: {\n        firstName: \'Nora\',\n        lastName: undefined, // initiate error\n      },\n    }}\n  >\n    <Card stack>\n      <Form.SubHeading>Your account</Form.SubHeading>\n      <Form.Section path="/nestedPath" required>\n        <MyEditContainer />\n        <MyViewContainer />\n      </Form.Section>\n    </Card>\n    <Form.SubmitButton />\n  </Form.Handler>,\n)\n'}),C=()=>(0,d.jsx)(t.Z,{scope:{Iterate:s},noInline:!0,children:'const MyEditItem = () => {\n  return (\n    <Iterate.EditContainer\n      title="Edit account holder"\n      titleWhenNew="New account holder"\n    >\n      <Field.Composition>\n        <Field.Name.First itemPath="/firstName" width="medium" />\n        <Field.Name.Last itemPath="/lastName" width="medium" required />\n      </Field.Composition>\n    </Iterate.EditContainer>\n  )\n}\nconst MyViewItem = () => {\n  return (\n    <Iterate.ViewContainer title="Account holder">\n      <Value.SummaryList>\n        <Value.Name.First itemPath="/firstName" showEmpty />\n        <Value.Name.Last itemPath="/lastName" placeholder="-" />\n      </Value.SummaryList>\n    </Iterate.ViewContainer>\n  )\n}\nconst MyForm = () => {\n  return (\n    <Form.Handler\n      data={{\n        accounts: [\n          {\n            firstName: \'Tony\',\n            lastName: undefined, // initiate error\n          },\n        ],\n      }}\n      onChange={(data) => console.log(\'DataContext/onChange\', data)}\n      onSubmit={async (data) => console.log(\'onSubmit\', data)}\n    >\n      <Flex.Vertical>\n        <Form.MainHeading>Accounts</Form.MainHeading>\n\n        <Card stack>\n          <Iterate.Array path="/accounts">\n            <MyViewItem />\n            <MyEditItem />\n          </Iterate.Array>\n\n          <Iterate.PushButton\n            text="Add another account"\n            path="/accounts"\n            pushValue={{}}\n          />\n        </Card>\n\n        <Form.SubmitButton variant="send" />\n      </Flex.Vertical>\n    </Form.Handler>\n  )\n}\nrender(<MyForm />)\n'}),j=()=>(0,d.jsx)(t.Z,{hideCode:!0,noInline:!0,children:'const MyForm = () => {\n  const transformToUpper = (value) => {\n    return value?.toUpperCase()\n  }\n  const transformToLower = (value) => {\n    return value?.toLowerCase()\n  }\n  return (\n    <Form.Handler onChange={console.log}>\n      <Card stack>\n        <Field.String\n          width="medium"\n          label="Input value"\n          placeholder="Type letters"\n          path="/myField"\n          transformIn={transformToUpper}\n          transformOut={transformToLower}\n        />\n\n        <Value.String label="Output value" path="/myField" />\n      </Card>\n    </Form.Handler>\n  )\n}\nrender(<MyForm />)\n'}),S=()=>(0,d.jsx)(t.Z,{noInline:!0,children:'const MyForm = () => {\n  const existingData = {\n    companyName: \'DNB\',\n  }\n  return (\n    <Form.Handler\n      defaultData={existingData}\n      onChange={console.log}\n      onSubmit={console.log}\n    >\n      <Card stack>\n        <Field.Name.Company path="/companyName" required />\n        <Field.OrganizationNumber\n          path="/companyOrganizationNumber"\n          required\n        />\n        <Field.Selection\n          path="/postalAddressSelect"\n          label="Ønsket sted for tilsendt post"\n          variant="radio"\n        >\n          <Field.Option\n            value="companyAddress"\n            title="Samme som forretningsadresse"\n          />\n          <Field.Option value="other" title="Annet" />\n        </Field.Selection>\n        <Form.Visibility\n          visibleWhen={{\n            path: \'/postalAddressSelect\',\n            hasValue: \'other\',\n          }}\n          animate\n        >\n          <Field.String\n            path="/postalAddress"\n            label="Sted for tilsendt post"\n            required\n          />\n        </Form.Visibility>\n      </Card>\n    </Form.Handler>\n  )\n}\nrender(<MyForm />)\n'})},16620:function(n,e,a){a.r(e),a.d(e,{At:function(){return c},Context:function(){return t.Z},Provider:function(){return r.ZP},defaultContextState:function(){return t.E}});var t=a(21068),r=a(6436),o=a(2784),i=a(95955),l=a.n(i),s=a(52322);function d(n){const{path:e="/",iterate:a,children:r}=n,i=(0,o.useContext)(t.Z),{data:d,handlePathChange:c}=i,m=d&&l().has(d,e)?l().get(d,e):void 0,u=(0,o.useCallback)(((n,a)=>{c(`${e}${n}`,a)}),[c,e]);return a?Array.isArray(m)?(0,s.jsx)(s.Fragment,{children:m.map(((n,a)=>{const o=c?(n,t)=>{c(`${e}/${a}${n}`,t)}:void 0;return(0,s.jsx)(t.Z.Provider,{value:{...i,data:n,handlePathChange:o},children:r},`element${a}`)}))}):null:(0,s.jsx)(t.Z.Provider,{value:{...i,data:m,handlePathChange:u},children:r})}d._supportsSpacingProps=!0;var c=d}}]);
//# sourceMappingURL=d32db27b1b7cd5c5e192215464d2c42d12cb2a03-547057299102b75a8caf.js.map