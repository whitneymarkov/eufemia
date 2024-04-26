"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[48338,4117],{85753:function(n,e,a){a.r(e);var r=a(52322),o=a(45392),l=(a(69403),a(94929));function t(n){const e=Object.assign({h1:"h1",p:"p",a:"a",strong:"strong",ul:"ul",li:"li",h2:"h2",code:"code",pre:"pre",h3:"h3"},(0,o.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{children:"Create your own component"}),"\n",(0,r.jsx)(e.p,{children:"Eufemia Forms contains helper fields and tools so you can declaratively create interactive form components that flawlessly integrates between existing data and your custom form components."}),"\n",(0,r.jsxs)(e.p,{children:["By using the building blocks for value and field components, you save development time, and at the same time ensure that local, custom components work similarly, and fit into the setup with the standardized base ",(0,r.jsx)(e.a,{href:"/uilib/extensions/forms/Value/#base-components",children:"value components"})," and base ",(0,r.jsx)(e.a,{href:"/uilib/extensions/forms/base-fields/",children:"field components"}),"."]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Table of Contents"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#value-components",children:"Value components"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#field-components",children:"Field components"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#layout",children:"Layout"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#localization-and-translations",children:"Localization and translations"})}),"\n"]}),"\n",(0,r.jsx)(e.h2,{children:"Value components"}),"\n",(0,r.jsxs)(e.p,{children:["For creating a ",(0,r.jsx)(e.code,{children:"Value.*"})," component you can use ",(0,r.jsx)(e.a,{href:"/uilib/extensions/forms/create-component/ValueBlock/",children:"ValueBlock"})," and ",(0,r.jsx)(e.a,{href:"/uilib/extensions/forms/create-component/useValueProps/",children:"useValueProps"}),":"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:"import { ValueBlock, useValueProps } from '@dnb/eufemia/extensions/forms'\n\nconst MyValue = (props) => {\n  const { value, ...rest } = useValueProps(props)\n  return <ValueBlock {...rest}>{value}</ValueBlock>\n}\n\nrender(<MyValue path=\"/dataSelector\" />)\n"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"/uilib/extensions/forms/create-component/ValueBlock/",children:"ValueBlock"})," provides a standardized way to display labels and other surrounding elements in a consistent manner."]}),"\n",(0,r.jsx)(l.CreateBasicValueComponent,{}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.code,{children:"useValueProps"})," provides a standardized way to handle data flow in a consistent manner."]}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.code,{children:"FieldBlock"})," provides a standardized way to display a label and other surrounding elements in a consistent manner."]}),"\n",(0,r.jsx)(e.h2,{children:"Field components"}),"\n",(0,r.jsxs)(e.p,{children:["For creating a ",(0,r.jsx)(e.code,{children:"Field.*"})," component, you can use ",(0,r.jsx)(e.a,{href:"/uilib/extensions/forms/create-component/FieldBlock/",children:"FieldBlock"})," and ",(0,r.jsx)(e.a,{href:"/uilib/extensions/forms/create-component/useFieldProps/",children:"useFieldProps"}),":"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:"import { FieldBlock, useFieldProps } from '@dnb/eufemia/extensions/forms'\n\nconst MyField = (props) => {\n  const { id, value, label, handleChange, handleFocus, handleBlur } =\n    useFieldProps(props)\n\n  return (\n    <FieldBlock forId={id}>\n      <input\n        id={id}\n        value={value}\n        label={label}\n        onChange={handleChange}\n        onFocus={handleFocus}\n        onBlur={handleBlur}\n      />\n    </FieldBlock>\n  )\n}\n\nrender(<MyField path=\"/dataSelector\" />)\n"})}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.code,{children:"useFieldProps"})," provides a standardized way to handle data flow, validation and error messages in a consistent manner."]}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.code,{children:"FieldBlock"})," provides a standardized way to display labels, error messages and other surrounding elements in a consistent manner."]}),"\n",(0,r.jsx)(e.p,{children:"Here is a working example with code you can edit in the playground:"}),"\n",(0,r.jsx)(l.CreateBasicFieldComponent,{}),"\n",(0,r.jsx)(e.h3,{children:"More details"}),"\n",(0,r.jsxs)(e.p,{children:["This example shows a custom component. The ",(0,r.jsx)(e.a,{href:"/uilib/extensions/forms/create-component/useFieldProps/",children:"useFieldProps"})," hook receives the props and adds extra properties to standardize field behavior. These includes ",(0,r.jsx)(e.code,{children:"handleFocus"}),", ",(0,r.jsx)(e.code,{children:"handleChange"}),", and ",(0,r.jsx)(e.code,{children:"handleBlur"}),' functions. Even if the field components has external callbacks like "onChange", these won\'t be altered. The "handle" variants simplifies your code.']}),"\n",(0,r.jsx)(e.h3,{children:"The example explained"}),"\n",(0,r.jsxs)(e.p,{children:["Using these two form helpers in your field component triggers several automatic processes. These include timely validation checks, syncing value changes with the ",(0,r.jsx)(e.a,{href:"/uilib/extensions/forms/DataContext/",children:"DataContext"}),", coordinating error messages across multiple fields, and preventing premature error displays while the user is editing the field."]}),"\n",(0,r.jsxs)(e.p,{children:["Keep in mind, you can customize the behavior of ",(0,r.jsx)(e.a,{href:"/uilib/extensions/forms/create-component/useFieldProps/",children:"useFieldProps"})," and other helper functions to make the component work exactly as you want."]}),"\n",(0,r.jsx)(e.h3,{children:"Your own validation"}),"\n",(0,r.jsxs)(e.p,{children:["If you need custom validation that can't use the built-in JSON Schema or a derivative validator (like in the example above), you can create your own logic. Then, pass the result as an ",(0,r.jsx)(e.code,{children:"error"})," prop to ",(0,r.jsx)(e.a,{href:"/uilib/extensions/forms/create-component/FieldBlock/",children:"FieldBlock"}),". All direct props override standard handling, giving you full control over your component."]}),"\n",(0,r.jsx)(e.h3,{children:"Customized even further"}),"\n",(0,r.jsxs)(e.p,{children:["If you need something that looks even more different than the usual fields, you can drop ",(0,r.jsx)(e.a,{href:"/uilib/extensions/forms/create-component/FieldBlock/",children:"FieldBlock"})," and display surrounding elements in other ways – but still get all the help of a data flow logic, such as ",(0,r.jsx)(e.a,{href:"/uilib/extensions/forms/create-component/useFieldProps/",children:"useFieldProps"})," offers."]}),"\n",(0,r.jsx)(e.p,{children:"Here follows an example that retrieves data from a surrounding DataContext, and creates a composite field based on other components from Eufemia:"}),"\n",(0,r.jsx)(l.CreateComposedFieldComponent,{}),"\n",(0,r.jsx)(e.h2,{children:"Layout"}),"\n",(0,r.jsxs)(e.p,{children:["When building your custom form components, preferably use the ",(0,r.jsx)(e.a,{href:"/uilib/layout",children:"Layout"})," component."]}),"\n",(0,r.jsx)(e.h3,{children:"Width definitions"}),"\n",(0,r.jsxs)(e.p,{children:["These are the official sizes you can use when ",(0,r.jsx)(e.a,{href:"/uilib/extensions/forms/create-component/",children:"creating your own form fields"}),"."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-css",children:":root {\n  --forms-field-width--small: 5rem;\n  --forms-field-width--medium: 11rem;\n  --forms-field-width--large: 21rem;\n  --forms-card-max-width: 36.5rem;\n}\n"})}),"\n",(0,r.jsxs)(e.p,{children:["You can also use a ",(0,r.jsx)(e.a,{href:"/uilib/extensions/forms/create-component/FieldBlock/",children:"FieldBlock"})," and provide a ",(0,r.jsx)(e.code,{children:"width"})," prop with a value of either ",(0,r.jsx)(e.code,{children:"small"}),", ",(0,r.jsx)(e.code,{children:"medium"})," or ",(0,r.jsx)(e.code,{children:"large"})," and use it as a sized wrapper."]}),"\n",(0,r.jsx)(e.h2,{children:"Localization and translations"}),"\n",(0,r.jsxs)(e.p,{children:["You can use the ",(0,r.jsx)(e.code,{children:"Form.useTranslation"})," hook to use existing translations or extend it with your custom field localization:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:"import {\n  Form,\n  FieldBlock,\n  useFieldProps,\n} from '@dnb/eufemia/extensions/forms'\n\nconst myFieldTranslations = {\n  'en-GB': {\n    MyField: { label: 'My field', required: 'Custom required message' },\n  },\n  'nb-NO': {\n    MyField: { label: 'Mitt felt', required: 'Obligatorisk felt melding' },\n  },\n}\n\nconst MyField = (props) => {\n  const translations = Form.useTranslation(myFieldTranslations)\n  const { label, required } = translations.MyField\n\n  const preparedProps = {\n    label,\n    errorMessages: {\n      required,\n    },\n    ...props,\n  }\n\n  const { id, value, label, handleChange, handleFocus, handleBlur } =\n    useFieldProps(preparedProps)\n\n  return (\n    <FieldBlock forId={id}>\n      <input\n        id={id}\n        value={value}\n        label={label}\n        onChange={handleChange}\n        onFocus={handleFocus}\n        onBlur={handleBlur}\n      />\n    </FieldBlock>\n  )\n}\n"})})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,o.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(t,n)})):t(n)}},94929:function(n,e,a){a.r(e),a.d(e,{BaseFieldComponents:function(){return m},CreateBasicFieldComponent:function(){return c},CreateBasicValueComponent:function(){return d},CreateComposedFieldComponent:function(){return h},FeatureFields:function(){return p},GettingStarted:function(){return u},LayoutComponents:function(){return F},QuickStart:function(){return j},Transformers:function(){return v},UsingFormHandler:function(){return f},UsingWizard:function(){return b},Validation:function(){return x},VisibilityBasedOnData:function(){return g}});a(2784);var r=a(28204),o=a(49406),l=a(26409),t=a(16620),i=a(54937),s=a(52322);const d=()=>(0,s.jsx)(r.Z,{scope:{ValueBlock:o.Z},hideCode:!0,noInline:!0,children:'const MyValue = ({ value, ...props }) => {\n  return (\n    <ValueBlock {...props}>\n      <NumberFormat currency>{value}</NumberFormat>\n    </ValueBlock>\n  )\n}\nrender(<MyValue label="Label" value={1234} />)\n'}),c=()=>(0,s.jsx)(r.Z,{scope:{useFieldProps:l.Z},hideCode:!0,noInline:!0,children:"const MyField = (props) => {\n  const fromInput = React.useCallback(({ value }) => value, [])\n  const preparedProps = {\n    label: 'What is the secret of this field?',\n    fromInput,\n    validator: (value) => {\n      if (value === 'secret') {\n        return new Error('Do not reveal the secret!')\n      }\n    },\n    ...props,\n  }\n  const { id, value, label, handleChange, handleFocus, handleBlur } =\n    useFieldProps(preparedProps)\n  return (\n    <FieldBlock forId={id} label={label}>\n      <Input\n        id={id}\n        value={value}\n        on_change={handleChange}\n        on_focus={handleFocus}\n        on_blur={handleBlur}\n      />\n    </FieldBlock>\n  )\n}\nrender(\n  <MyField\n    onChange={(value) => console.log('onChange', value)}\n    required\n  />,\n)\n"}),u=()=>(0,s.jsx)(r.Z,{hideCode:!0,noInline:!0,children:'const existingData = {\n  companyName: \'DNB\',\n  companyOrganizationNumber: \'123456789\',\n  postalAddressSelect: \'companyAddress\',\n}\nfunction Component() {\n  const { data } = Form.useData(\'company-form\')\n  console.log(\'State:\', data)\n  return (\n    <Form.Handler\n      id="company-form"\n      data={existingData}\n      onChange={console.log}\n      onSubmit={console.log}\n    >\n      <Flex.Stack>\n        <Form.MainHeading>Bedrift</Form.MainHeading>\n        <Card stack>\n          <Field.String\n            path="/companyName"\n            label="Bedriftens navn"\n            required\n          />\n          <Field.OrganizationNumber\n            path="/companyOrganizationNumber"\n            required\n          />\n          <Field.Selection\n            path="/postalAddressSelect"\n            label="Ønsket sted for tilsendt post"\n            variant="radio"\n          >\n            <Field.Option\n              value="companyAddress"\n              title="Samme som forretningsadresse"\n            />\n            <Field.Option value="other" title="Annet" />\n          </Field.Selection>\n        </Card>\n        <Form.ButtonRow>\n          <Form.SubmitButton />\n        </Form.ButtonRow>\n      </Flex.Stack>\n    </Form.Handler>\n  )\n}\nrender(<Component />)\n'}),h=()=>(0,s.jsx)(r.Z,{scope:{DataContext:t,useFieldProps:l.Z},hideCode:!0,noInline:!0,children:'const MyComposedField = (props) => {\n  const birthYear = useFieldProps({\n    path: \'/birthYear\',\n  })\n  const handleBirthYearChange = React.useCallback(\n    (sliderData) => {\n      birthYear.handleChange(sliderData.value)\n    },\n    [birthYear],\n  )\n  return (\n    <FieldBlock label={props.label ?? \'Name and age\'}>\n      <Flex.Horizontal>\n        <Field.String\n          path="/firstName"\n          label="First name"\n          width="medium"\n          minLength={2}\n        />\n        <Field.String\n          path="/lastName"\n          label="Last name"\n          width="medium"\n          required\n        />\n        <FieldBlock width="large">\n          <Slider\n            min={1900}\n            max={new Date().getFullYear()}\n            step={1}\n            label="Birth year"\n            label_direction="vertical"\n            value={parseFloat(String(birthYear.value))}\n            on_change={handleBirthYearChange}\n            on_drag_start={birthYear.handleFocus}\n            on_drag_end={birthYear.handleBlur}\n            status={birthYear.error?.message}\n            tooltip\n          />\n        </FieldBlock>\n      </Flex.Horizontal>\n    </FieldBlock>\n  )\n}\nconst data = {\n  firstName: \'John\',\n  birthYear: 2000,\n}\nrender(\n  <DataContext.Provider\n    data={data}\n    onChange={(data) => console.log(\'onChange\', data)}\n  >\n    <MyComposedField label="My custom label" />\n  </DataContext.Provider>,\n)\n'}),m=()=>(0,s.jsx)(r.Z,{scope:{Value:i},children:'<Card stack>\n  <Field.String\n    label="Text field"\n    value="Lorem Ipsum"\n    onChange={(value) => console.log(\'onChange\', value)}\n  />\n  <Field.Number\n    label="Number Field"\n    value={789}\n    onChange={(value) => console.log(\'onChange\', value)}\n  />\n  <Field.Boolean\n    label="Boolean Field"\n    value={true}\n    onChange={(value) => console.log(\'onChange\', value)}\n  />\n</Card>\n'}),p=()=>(0,s.jsx)(r.Z,{scope:{Value:i},children:'<Card stack>\n  <Field.String label="Fornavn" value="John" />\n  <Field.String label="Etternavn" value="Smith" />\n  <Field.NationalIdentityNumber value="20058512345" />\n  <Field.Email value="john@smith.email" />\n  <Field.PhoneNumber value="+47 98765432" />\n</Card>\n'}),F=()=>(0,s.jsx)(r.Z,{scope:{Value:i},children:'<Flex.Stack>\n  <Form.MainHeading>Profile</Form.MainHeading>\n\n  <Card stack>\n    <Form.SubHeading>Name</Form.SubHeading>\n\n    <Field.String label="Fornavn" value="John" />\n    <Field.String label="Etternavn" value="Smith" />\n  </Card>\n\n  <Card stack>\n    <Form.SubHeading>More information</Form.SubHeading>\n\n    <Field.NationalIdentityNumber value="20058512345" />\n    <Field.Email value="john@smith.email" />\n    <Field.PhoneNumber value="+47 98765432" />\n  </Card>\n</Flex.Stack>\n'}),g=()=>(0,s.jsx)(r.Z,{scope:{Value:i},children:'<Form.Handler\n  data={{\n    firstName: undefined,\n    lastName: \'Smith\',\n    advanced: false,\n    ssn: \'123\',\n    email: \'@smith.email\',\n    phone: \'+47 98765432\',\n  }}\n  onChange={(data) => console.log(\'onChange\', data)}\n  onPathChange={(path, value) => console.log(\'onPathChange\', path, value)}\n  onSubmit={(data) => console.log(\'onSubmit\', data)}\n>\n  <Flex.Stack>\n    <Form.MainHeading>Profile</Form.MainHeading>\n\n    <Card stack>\n      <Form.SubHeading>Name</Form.SubHeading>\n\n      <Field.String path="/firstName" label="Fornavn" />\n      <Field.String path="/lastName" label="Etternavn" />\n    </Card>\n\n    <Field.Boolean\n      path="/advanced"\n      variant="checkbox-button"\n      label="More fields"\n    />\n    <Form.Visibility pathTrue="/advanced">\n      <Flex.Stack>\n        <Card stack>\n          <Form.SubHeading>More information</Form.SubHeading>\n\n          <Field.NationalIdentityNumber value="20058512345" />\n          <Field.Email value="john@smith.email" />\n          <Field.PhoneNumber value="+47 98765432" />\n        </Card>\n      </Flex.Stack>\n    </Form.Visibility>\n  </Flex.Stack>\n</Form.Handler>\n'}),f=()=>(0,s.jsx)(r.Z,{scope:{Value:i},children:"<Form.Handler\n  data={{\n    firstName: 'John',\n    lastName: 'Smith',\n    ssn: '20058512345',\n    email: 'john@smith.email',\n    phone: '+47 98765432',\n  }}\n  onChange={(data) => console.log('onChange', data)}\n  onPathChange={(path, value) => console.log('onPathChange', path, value)}\n  onSubmit={(data) => console.log('onSubmit', data)}\n>\n  <Form.MainHeading>Profile</Form.MainHeading>\n\n  <Card stack>\n    <Field.String path=\"/firstName\" label=\"Fornavn\" />\n    <Field.String path=\"/lastName\" label=\"Etternavn\" />\n    <Field.NationalIdentityNumber path=\"/ssn\" />\n    <Field.Email path=\"/email\" />\n    <Field.PhoneNumber path=\"/phone\" />\n\n    <Form.ButtonRow>\n      <Form.SubmitButton />\n    </Form.ButtonRow>\n  </Card>\n</Form.Handler>\n"}),x=()=>(0,s.jsx)(r.Z,{scope:{Value:i},children:"<Form.Handler\n  data={{\n    firstName: undefined,\n    lastName: 'Smith',\n    ssn: '123',\n    email: '@smith.email',\n    phone: '+47 98765432',\n  }}\n  onChange={(data) => console.log('onChange', data)}\n  onPathChange={(path, value) => console.log('onPathChange', path, value)}\n  onSubmit={(data) => console.log('onSubmit', data)}\n>\n  <Form.MainHeading>Profile</Form.MainHeading>\n\n  <Card stack>\n    <Field.String path=\"/firstName\" label=\"Fornavn\" required />\n    <Field.String path=\"/lastName\" label=\"Etternavn\" required />\n    <Field.NationalIdentityNumber path=\"/ssn\" validateInitially />\n    <Field.Email path=\"/email\" validateInitially />\n    <Field.PhoneNumber path=\"/phone\" validateInitially />\n  </Card>\n</Form.Handler>\n"}),b=()=>(0,s.jsx)(r.Z,{noInline:!0,children:'const MyForm = () => {\n  // Routers like "react-router" are supported as well\n  Wizard.useQueryLocator(\'my-wizard\')\n  const { summaryTitle } = Form.useLocale().Step\n  return (\n    <Form.Handler\n      data={{\n        firstName: undefined,\n        lastName: \'Smith\',\n        advanced: false,\n        ssn: \'123\',\n        email: \'@smith.email\',\n        phone: \'+47 98765432\',\n      }}\n      onChange={(data) => console.log(\'onChange\', data)}\n      onPathChange={(path, value) =>\n        console.log(\'onPathChange\', path, value)\n      }\n      onSubmit={(data) => console.log(\'onSubmit\', data)}\n    >\n      <Wizard.Container id="my-wizard" mode="loose">\n        <Wizard.Step title="Name">\n          <Form.MainHeading>Profile</Form.MainHeading>\n\n          <Card stack>\n            <Form.SubHeading>Name</Form.SubHeading>\n\n            <Field.String path="/firstName" label="Fornavn" required />\n            <Field.String path="/lastName" label="Etternavn" required />\n          </Card>\n\n          <Wizard.Buttons />\n        </Wizard.Step>\n\n        <Wizard.Step title="More information">\n          <Form.MainHeading>Profile</Form.MainHeading>\n\n          <Card stack>\n            <Form.SubHeading>More information</Form.SubHeading>\n\n            <Field.NationalIdentityNumber path="/ssn" />\n            <Field.Email path="/email" />\n            <Field.PhoneNumber path="/phone" />\n          </Card>\n\n          <Wizard.Buttons />\n        </Wizard.Step>\n\n        <Wizard.Step title={summaryTitle}>\n          <Form.MainHeading>Profile</Form.MainHeading>\n\n          <Card stack>\n            <Value.SummaryList layout="grid">\n              <Value.String path="/firstName" label="Fornavn" />\n              <Value.String path="/lastName" label="Etternavn" />\n\n              <Value.NationalIdentityNumber path="/ssn" />\n              <Value.Email path="/email" />\n              <Value.PhoneNumber path="/phone" />\n            </Value.SummaryList>\n          </Card>\n\n          <Form.ButtonRow>\n            <Wizard.Buttons />\n            <Form.SubmitButton />\n          </Form.ButtonRow>\n        </Wizard.Step>\n      </Wizard.Container>\n    </Form.Handler>\n  )\n}\nrender(<MyForm />)\n'}),v=()=>(0,s.jsx)(r.Z,{hideCode:!0,noInline:!0,children:'const MyForm = () => {\n  const transformToUpper = (value) => {\n    return value?.toUpperCase()\n  }\n  const transformToLower = (value) => {\n    return value?.toLowerCase()\n  }\n  return (\n    <Form.Handler onChange={console.log}>\n      <Card stack>\n        <Field.String\n          width="medium"\n          label="Input value"\n          placeholder="Type letters"\n          path="/myField"\n          transformIn={transformToUpper}\n          transformOut={transformToLower}\n        />\n\n        <Value.String label="Output value" path="/myField" />\n      </Card>\n    </Form.Handler>\n  )\n}\nrender(<MyForm />)\n'}),j=()=>(0,s.jsx)(r.Z,{noInline:!0,children:'const MyForm = () => {\n  const existingData = {\n    companyName: \'DNB\',\n  }\n  return (\n    <Form.Handler\n      data={existingData}\n      onChange={console.log}\n      onSubmit={console.log}\n    >\n      <Card stack>\n        <Field.String\n          path="/companyName"\n          label="Bedriftens navn"\n          required\n        />\n        <Field.OrganizationNumber\n          path="/companyOrganizationNumber"\n          required\n        />\n        <Field.Selection\n          path="/postalAddressSelect"\n          label="Ønsket sted for tilsendt post"\n          variant="radio"\n        >\n          <Field.Option\n            value="companyAddress"\n            title="Samme som forretningsadresse"\n          />\n          <Field.Option value="other" title="Annet" />\n        </Field.Selection>\n      </Card>\n    </Form.Handler>\n  )\n}\nrender(<MyForm />)\n'})},69403:function(n,e,a){a.r(e),a.d(e,{default:function(){return t}});var r=a(68270),o=a(77491),l=a(52322);function t(n){const{allMdx:{edges:e}}=(0,r.useStaticQuery)("1487441482");return(0,l.jsx)(o.Z,{edges:e,...n})}},77491:function(n,e,a){a.d(e,{Z:function(){return h}});var r=a(2784),o=a(42351),l=a(65359),t=a(43095),i=a(79254),s=a(68514),d=a(61185),c=a(595),u=a(52322);function h(n){let{edges:e,level:a,size:h,description:m=null,returnListItems:p=!1,...F}=n;const g=p?o.Z:r.Fragment;(0,s.TW)(a||2);const f=e.map(((n,e)=>{let{node:{frontmatter:{title:r,description:o},fields:{slug:s}}}=n;return(0,u.jsx)(g,{children:(0,u.jsx)(f,{})},e);function f(){return p?(0,u.jsxs)(l.Z,{children:[(0,u.jsx)(i.Z,{href:"/"+s,children:r}),(0,u.jsx)("br",{})]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(t.Z,{level:a||2,size:h,useSlug:"/"+s,title:r,...F,children:(0,u.jsx)(i.Z,{href:"/"+s,children:r})}),(null!==m?m:o)&&(0,u.jsx)(d.D,{components:c.L,children:null!==m?m:o})]})}}));return(0,u.jsx)(u.Fragment,{children:f})}},16620:function(n,e,a){a.r(e),a.d(e,{At:function(){return c},Context:function(){return r.Z},Provider:function(){return o.ZP},defaultContextState:function(){return r.E}});var r=a(21068),o=a(6436),l=a(2784),t=a(95955),i=a.n(t),s=a(52322);function d(n){const{path:e="/",iterate:a,children:o}=n,t=(0,l.useContext)(r.Z),{data:d,handlePathChange:c}=t,u=d&&i().has(d,e)?i().get(d,e):void 0,h=(0,l.useCallback)(((n,a)=>{c(`${e}${n}`,a)}),[c,e]);return a?Array.isArray(u)?(0,s.jsx)(s.Fragment,{children:u.map(((n,a)=>{const l=c?(n,r)=>{c(`${e}/${a}${n}`,r)}:void 0;return(0,s.jsx)(r.Z.Provider,{value:{...t,data:n,handlePathChange:l},children:o},`element${a}`)}))}):null:(0,s.jsx)(r.Z.Provider,{value:{...t,data:u,handlePathChange:h},children:o})}d._supportsSpacingProps=!0;var c=d}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-create-component-mdx-12fdaebaa54b89c29696.js.map