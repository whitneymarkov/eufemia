"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[52701,3062,33329],{77411:function(e,n,r){r.r(n);var a=r(52322),t=r(45392),s=r(10201),i=r(78831);function o(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.default,{}),"\n",(0,a.jsx)(i.default,{})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(o,e)})):o()}},78831:function(e,n,r){r.r(n),r.d(n,{default:function(){return p}});var a={};r.r(a),r.d(a,{DataSetSchema:function(){return d},DependantListSchema:function(){return m},IfRuleSchema:function(){return h},SingleFieldSchema:function(){return c}});var t=r(52322),s=r(45392),i=r(99587),o=r(10535),l=r(42277);const c=()=>(0,t.jsx)(i.Z,{children:"<Field.String\n  schema={{\n    type: 'string',\n    minLength: 5,\n  }}\n/>\n"}),d=()=>(0,t.jsx)(i.Z,{children:'<Form.Handler\n  data={{\n    address: \'Prefilled address\',\n  }}\n  schema={{\n    properties: {\n      name: {\n        minLength: 2,\n      },\n      address: {\n        minLength: 3,\n      },\n    },\n    required: [\'name\', \'address\'],\n  }}\n>\n  <Card spacing="small" bottom="small">\n    <Form.MainHeading>Company information</Form.MainHeading>\n\n    <Field.String path="/name" label="Name" />\n    <Field.String path="/address" label="Address" />\n  </Card>\n\n  <Form.SubmitButton />\n</Form.Handler>\n'}),h=()=>(0,t.jsx)(i.Z,{children:"<Form.Handler\n  data={{}}\n  schema={{\n    type: 'object',\n    properties: {\n      name: {\n        type: 'string',\n      },\n      customerType: {\n        type: 'string',\n        enum: ['corporate', 'private'],\n      },\n      companyName: {\n        type: 'string',\n      },\n    },\n    if: {\n      properties: {\n        customerType: {\n          enum: ['corporate'],\n        },\n      },\n      required: ['customerType'],\n    },\n    then: {\n      required: ['name', 'companyName'],\n    },\n    else: {\n      required: ['name'],\n    },\n  }}\n>\n  <Card spacing=\"small\" bottom=\"small\">\n    <Form.MainHeading>Customer information</Form.MainHeading>\n\n    <Field.String path=\"/name\" label=\"Name\" />\n    <Field.String\n      path=\"/customerType\"\n      label=\"Customer type (corporate or private)\"\n    />\n    <Field.String\n      path=\"/companyName\"\n      label=\"Company name (required for corporate customers)\"\n    />\n  </Card>\n\n  <Form.SubmitButton />\n</Form.Handler>\n"}),m=()=>(0,t.jsx)(i.Z,{scope:{Iterate:o,TrashIcon:l.Z},children:'<Form.Handler\n  data={{\n    accounts: [{}],\n  }}\n  schema={{\n    type: \'object\',\n    definitions: {\n      account: {\n        type: \'object\',\n        properties: {\n          accountNumber: {\n            type: \'string\',\n            pattern: \'^[0-9]{11}$\',\n          },\n          alias: {\n            type: \'string\',\n            minLength: 2,\n            maxLength: 32,\n          },\n        },\n        required: [\'accountNumber\'],\n      },\n    },\n    properties: {\n      name: {\n        type: \'string\',\n      },\n      email: {\n        type: \'string\',\n      },\n      phone: {\n        type: \'string\',\n      },\n      accounts: {\n        type: \'array\',\n        items: {\n          $ref: \'#/definitions/account\',\n        },\n      },\n      bsuAccount: {\n        $ref: \'#/definitions/account\',\n      },\n    },\n    oneOf: [\n      {\n        properties: {\n          accounts: {\n            type: \'array\',\n            minItems: 1,\n          },\n        },\n      },\n      {\n        properties: {\n          accounts: {\n            type: \'array\',\n            minItems: 0,\n          },\n          bsuAccount: {\n            type: \'object\',\n            required: [\'accountNumber\'],\n          },\n        },\n        required: [\'bsuAccount\'],\n      },\n    ],\n  }}\n>\n  <Flex.Vertical spacing="small">\n    <Form.MainHeading>Customer information</Form.MainHeading>\n    <Card spacing="small">\n      <Field.String path="/name" label="Name" />\n      <Field.Email path="/email" label="E-mail" />\n      <Field.PhoneNumber path="/phone" label="Phone number" />\n    </Card>\n\n    <Form.MainHeading>Accounts</Form.MainHeading>\n    <Card spacing="small">\n      <Form.SubHeading>Standard accounts</Form.SubHeading>\n\n      <Iterate.Array path="/accounts">\n        <Flex.Horizontal align="flex-end">\n          <Field.BankAccountNumber\n            itemPath="/accountNumber"\n            label="Account number"\n          />\n          <Field.String itemPath="/alias" label="Alias" width="medium" />\n          <Iterate.ArrayRemoveElementButton icon={TrashIcon} />\n        </Flex.Horizontal>\n      </Iterate.Array>\n\n      <Iterate.ArrayPushButton\n        icon="add"\n        icon_position="left"\n        text="Add account"\n        path="/accounts"\n        pushValue={{}}\n        size="medium"\n      />\n\n      <Form.SubHeading>BSU Account</Form.SubHeading>\n      <Field.BankAccountNumber\n        path="/bsuAccount/accountNumber"\n        label="Account number"\n      />\n      <Field.String path="/bsuAccount/alias" label="Alias" />\n    </Card>\n\n    <Form.SubmitButton />\n  </Flex.Vertical>\n</Form.Handler>\n'});function u(e){const n=Object.assign({h2:"h2",h3:"h3",p:"p"},(0,s.ah)(),e.components);return a||j("Examples",!1),d||j("Examples.DataSetSchema",!0),m||j("Examples.DependantListSchema",!0),h||j("Examples.IfRuleSchema",!0),c||j("Examples.SingleFieldSchema",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{children:"Demos"}),"\n",(0,t.jsx)(n.h3,{children:"Schema for single field"}),"\n",(0,t.jsx)(c,{}),"\n",(0,t.jsx)(n.h3,{children:"Schema for a whole data set"}),"\n",(0,t.jsx)(d,{}),"\n",(0,t.jsx)(n.h3,{children:"Schema with if-rule"}),"\n",(0,t.jsx)(h,{}),"\n",(0,t.jsx)(n.h3,{children:"Dependant list schema"}),"\n",(0,t.jsx)("em",{children:(0,t.jsx)(n.p,{children:"Becoming a new customer, this form requires at least one normal account\nto be added, unless the customer opens a BSU account, then normal\naccounts can still be added, but is optional."})}),"\n",(0,t.jsx)(m,{})]})}var p=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(u,e)})):u(e)};function j(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},10201:function(e,n,r){r.r(n);var a=r(52322),t=r(45392);function s(e){const n=Object.assign({h2:"h2",p:"p",a:"a",pre:"pre",code:"code",h3:"h3",strong:"strong",ul:"ul",li:"li",h4:"h4",ol:"ol"},(0,t.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["JSON Schema is a vocabulary for annotating and validating data in js. More about JSON Schema on ",(0,a.jsx)(n.a,{href:"https://json-schema.org/",children:"json-schema.org"})]}),"\n",(0,a.jsx)(n.p,{children:"A schema can be used from the simplest description of the data type of a value:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"{\n  type: 'string'\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Results in:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'"Foo"\n'})}),"\n",(0,a.jsx)(n.p,{children:"To an object with both rules for required fields and validation rules for single values:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"{\n  type: \"object\",\n  properties: {\n    textField: { type: 'string', minLength: 5 },\n    numberField: { type: 'number', maximum: 100 },\n  },\n  required: ['textField']\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Results in:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "textField": "abcde",\n  "numberField": 123\n}\n'})}),"\n",(0,a.jsx)(n.h3,{children:"Using schema with DataContext"}),"\n",(0,a.jsx)(n.p,{children:"These two examples will result in the same validation for the user:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:'<Form.Handler data={user}>\n  <Field.String path="/name" label="Name" minLength={3} required />\n  <Field.Email path="/email" label="E-mail" required />\n  <Field.Number\n    path="/birthyear"\n    label="Birth year"\n    minimum={1900}\n    maximum={2023}\n    required\n  />\n</Form.Handler>\n'})}),"\n",(0,a.jsx)(n.p,{children:"vs."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'import { JSONSchema } from \'@dnb/eufemia/extensions/forms\'\n\nconst schema: JSONSchema = {\n  properties: {\n    name: { minLength: 3 },\n    email: { type: \'string\' },\n    birthyear: { minimum: 1900, maximum: 2023 },\n  },\n  required: [\'name\', \'email\', \'birthyear\'],\n}\n\n<Form.Handler data={user} schema={schema}>\n  <Field.String path="/name" label="Name" />\n  <Field.Email path="/email" label="E-mail" />\n  <Field.Number path="/birthyear" label="Birth year" />\n</Form.Handler>\n'})}),"\n",(0,a.jsx)(n.p,{children:"This makes it possible to create a uniform, testable description and requirements specification for the data, which can be tested independently of frontend code, and used across systems, e.g. frontend and backend."}),"\n",(0,a.jsxs)(n.p,{children:["Also, note you can describe the schema without using the ",(0,a.jsx)(n.code,{children:"type"})," property, as the type is inferred from schema type. More on that topic in the ",(0,a.jsx)(n.a,{href:"https://ajv.js.org/guide/typescript.html#utility-types-for-schemas",children:"Ajv docs"}),"."]}),"\n",(0,a.jsx)(n.h3,{children:"Fields which are disabled or read-only"}),"\n",(0,a.jsxs)(n.p,{children:["Fields which have the ",(0,a.jsx)(n.code,{children:"disabled"})," prop or the ",(0,a.jsx)(n.code,{children:"readOnly"})," prop, will skip validation."]}),"\n",(0,a.jsx)(n.h3,{children:"JSONSchema and TypeScript"}),"\n",(0,a.jsxs)(n.p,{children:["You can import the ",(0,a.jsx)(n.code,{children:"JSONSchema"})," type from the ",(0,a.jsx)(n.code,{children:"@dnb/eufemia/extensions/forms"})," package."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { JSONSchema } from '@dnb/eufemia/extensions/forms'\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Its a shorthand for ",(0,a.jsx)(n.code,{children:"JSONSchema7"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["You can also use the utility ",(0,a.jsx)(n.code,{children:"JSONSchemaType"})," type, so you can validate your data types."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"NB:"})," This requires ",(0,a.jsx)(n.code,{children:"strictNullChecks"})," in the ",(0,a.jsx)(n.code,{children:"tsconfig"})," settings to be true."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { JSONSchemaType } from '@dnb/eufemia/extensions/forms'\n\ntype MyData = {\n  foo: number\n  bar?: string\n}\n\nconst schema: JSONSchemaType<MyData> = {\n  type: 'object',\n  properties: {\n    foo: { type: 'integer' },\n    bar: { type: 'string', nullable: true },\n  },\n  required: ['foo'],\n}\n"})}),"\n",(0,a.jsx)(n.h3,{children:"Complex schemas"}),"\n",(0,a.jsx)(n.p,{children:"In addition to basic validation as in the example above, JSON Schema can be used for more complex. Examples of definitions supported by the standard are:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Requirement that the object must not have other properties than those defined in ",(0,a.jsx)(n.code,{children:"properties"}),"."]}),"\n",(0,a.jsx)(n.li,{children:"Nested data structures and combinations of objects and arrays with rules for array elements (fixed or repetitive elements)."}),"\n",(0,a.jsx)(n.li,{children:"Regular expressions for the syntax of individual values."}),"\n",(0,a.jsx)(n.li,{children:"Enum (a set of valid values)."}),"\n",(0,a.jsx)(n.li,{children:"Rules for the number of elements in arrays."}),"\n",(0,a.jsx)(n.li,{children:"Rules for the number of properties in objects."}),"\n",(0,a.jsx)(n.li,{children:"Predefined format rules (eg 'uri', 'email' and 'hostname')."}),"\n",(0,a.jsx)(n.li,{children:"Logical operators such as 'not', 'oneOf', 'allOf' and 'anyOf' which can be filled with rules for all or part of the data set."}),"\n",(0,a.jsx)(n.li,{children:"Rule set based on the content of values (if-then-else)."}),"\n",(0,a.jsx)(n.li,{children:"Rules (sub-schemas) that become applicable if a given value is present."}),"\n",(0,a.jsx)(n.li,{children:"Reuse within the definition, such as one and the same object structure being used as a definition for several locations in a structure."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["To learn more about what is possible with the JSON Schema standard, see ",(0,a.jsx)(n.a,{href:"https://json-schema.org/",children:"json-schema.org"}),"."]}),"\n",(0,a.jsx)(n.h4,{children:"Custom Ajv instance and keywords"}),"\n",(0,a.jsxs)(n.p,{children:["You can provide your custom ",(0,a.jsx)(n.code,{children:"validate"})," function with your own keywords to your schema. Below are two examples of how to do that."]}),"\n",(0,a.jsx)(n.p,{children:"First, you need to create your won instance of Ajv:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { Ajv } from '@dnb/eufemia/extensions/forms'\n\nconst ajv = new Ajv({\n  strict: true,\n  allErrors: true,\n})\n"})}),"\n",(0,a.jsx)(n.p,{children:"Then you add your custom keyword to the Ajv instance:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"// Add a custom keyword 'isEven'\najv.addKeyword({\n  keyword: 'isEven',\n  validate: (schema, value) => {\n    // Check if the number is even.\n    return value % 2 === 0\n  },\n})\n\n// Now we can use the 'isEven' keyword in our schema.\nconst schema = {\n  type: 'object',\n  properties: {\n    myKey: {\n      type: 'string',\n      isEven: true, // The number must be even.\n    },\n  },\n} as const\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"as const"})," to make sure the schema is not inferred as ",(0,a.jsx)(n.code,{children:"JSONSchema7"})," but as a literal type."]}),"\n",(0,a.jsx)(n.p,{children:"And finally add the Ajv instance to your form:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'import { Form, Field } from \'@dnb/eufemia/extensions/forms\'\n\nrender(\n  <Form.Handler schema={schema} ajvInstance={ajv}>\n    <Field.String path="/myKey" value="1" validateInitially />\n  </Form.Handler>,\n)\n'})}),"\n",(0,a.jsx)(n.h4,{children:"Custom Ajv keyword in a field"}),"\n",(0,a.jsx)(n.p,{children:"Here is another example of a custom keyword, used in one field only:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { Ajv } from '@dnb/'\nimport { Form, Field } from '@dnb/eufemia/extensions/forms'\n\nconst ajv = new Ajv({\n  strict: true,\n  allErrors: true,\n})\n\najv.addKeyword({\n  keyword: 'notEmpty',\n  validate: (schema, value) => {\n    return value.length > 0\n  },\n})\n\nconst schema = {\n  type: 'string',\n  notEmpty: true, // The value must be more than one character.\n} as const\n\nrender(\n  <Form.Handler ajvInstance={ajv}>\n    <Field.String\n      schema={schema}\n      path=\"/myKey\"\n      value=\"\"\n      validateInitially\n    />\n  </Form.Handler>,\n)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You can find more info about error messages in the ",(0,a.jsx)(n.a,{href:"/uilib/extensions/forms/extended-features/Form/error-messages/",children:"Error messages"})," docs."]}),"\n",(0,a.jsx)(n.h4,{children:"Custom error messages"}),"\n",(0,a.jsxs)(n.p,{children:["When having a custom keyword, you can provide custom error message on four levels with the ",(0,a.jsx)(n.code,{children:"errorMessage"})," or ",(0,a.jsx)(n.code,{children:"errorMessages"})," prop:"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"On the schema level."}),"\n",(0,a.jsx)(n.li,{children:"On the Form.Handler (Provider) level."}),"\n",(0,a.jsx)(n.li,{children:"On the Form.Handler (Provider) level with a JSON Pointer path."}),"\n",(0,a.jsx)(n.li,{children:"On the field level."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The levels are prioritized in the order above, so the field level error message will overwrite all other levels."}),"\n",(0,a.jsx)(n.p,{children:"Here is an example of how to do that:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"const schema = {\n  type: 'string',\n  notEmpty: true, // The value must be more than one character.\n  // Level 1\n  errorMessage: 'You can provide a custom message in the schema itself',\n} as const\n\nrender(\n  <Form.Handler\n    ajvInstance={ajv}\n    errorMessages={{\n      // Level 2\n      notEmpty: 'Or on the provider',\n      '/myKey': {\n        // Level 3\n        notEmpty: 'Or on the provider for just one field',\n      },\n    }}\n  >\n    <Field.String\n      schema={schema}\n      path=\"/myKey\"\n      value=\"\"\n      validateInitially\n      errorMessages={{\n        // Level 4\n        notEmpty: 'Or on a single Field itself',\n      }}\n    />\n  </Form.Handler>,\n)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You can find more info about error messages in the ",(0,a.jsx)(n.a,{href:"/uilib/extensions/forms/extended-features/Form/error-messages/",children:"Error messages"})," docs."]})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(s,e)})):s(e)}},10535:function(e,n,r){r.r(n),r.d(n,{Array:function(){return x},ArrayPushButton:function(){return b},ArrayRemoveElementButton:function(){return F},IterateElementContext:function(){return c.Z}});var a=r(84616),t=r(2784),s=r(72779),i=r.n(s),o=r(95955),l=r.n(o),c=r(38875),d=r(96781),h=r(26409),m=r(26),u=r(30392),p=r(52322);function j(e){const{className:n,layout:r="vertical",placeholder:s,label:o,labelDescription:j,path:x,value:f,info:g,warning:y,error:b,emptyValue:v,width:F,handleChange:S,children:w}=(0,h.Z)(e),N=(0,t.useMemo)((()=>(null!=f?f:[]).map(((e,n)=>({elementValue:e,handleElementChange:(e,n)=>{const r=structuredClone(f);l().set(r,e,n),null==S||S(r)},handleRemoveElement:()=>{const e=structuredClone(f);e.splice(n,1),null==S||S(e)}})))),[f,S]),A=(0,t.useCallback)((e=>{S([].concat((0,a.Z)(null!=f?f:[]),[e]))}),[f,S]);return(0,p.jsx)(d.Z,{className:i()("dnb-forms-field-number",n),layout:r,label:o,labelDescription:j,info:g,warning:y,error:b,width:F,contentWidth:!1!==F?F:void 0,...(0,m.SR)(e),children:(0,p.jsx)(u.Z,{...(0,u.W)(e,{spacing:"small"}),children:f===v?(0,p.jsx)("em",{children:s}):N.map(((e,n)=>{let{elementValue:r,handleElementChange:a,handleRemoveElement:t}=e;return(0,p.jsx)(c.Z.Provider,{value:{index:n,value:r,path:x,handleChange:a,handleRemove:t,handlePush:A},children:Array.isArray(w)?w.map((e=>"function"==typeof e?e(r,n):e)):"function"==typeof w?w(r,n):w},`element-${n}`)}))})})}j._supportsSpacingProps=!0;var x=j,f=r(96844),g=r(27439);function y(e){const n=(0,t.useContext)(c.Z),{handlePush:r}=null!=n?n:{},{pushValue:s,...o}=e,l=(0,g.wH)(o),{value:d,handleChange:m,children:u}=(0,h.Z)(o);if(void 0!==d&&!Array.isArray(d))throw new Error("ArrayPushButton received a non-array value.");const j=(0,t.useCallback)((()=>{r?r(s):m([].concat((0,a.Z)(null!=d?d:[]),[s]))}),[d,s,r,m]);return(0,p.jsx)(f.Z,{className:i()("dnb-forms-array-push-button",e.className),on_click:j,...l,children:u})}y._supportsSpacingProps=!0;var b=y;function v(e){const n=(0,t.useContext)(c.Z),{handleRemove:r}=null!=n?n:{};if(!n)throw new Error("ArrayRemoveElementButton must be inside an Iterate.Array component.");const a=(0,g.wH)(e),{children:s}=(0,h.Z)(e),o=(0,t.useCallback)((()=>{r()}),[r]);return(0,p.jsx)(f.Z,{className:i()("dnb-forms-array-remove-element-button",e.className),on_click:o,...a,children:s})}v._supportsSpacingProps=!0;var F=v}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-extended-features-form-schema-validation-mdx-2aea574b634a62635ea9.js.map