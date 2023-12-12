"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[3062],{78831:function(n,e,a){a.r(e),a.d(e,{default:function(){return h}});var t={};a.r(t),a.d(t,{DataSetSchema:function(){return u},DependantListSchema:function(){return d},IfRuleSchema:function(){return m},SingleFieldSchema:function(){return c}});var r=a(52322),o=a(45392),i=a(35823),l=a(10535),s=a(42277);const c=()=>(0,r.jsx)(i.Z,{children:"<Field.String\n  schema={{\n    type: 'string',\n    minLength: 5,\n  }}\n/>\n"}),u=()=>(0,r.jsx)(i.Z,{children:"<Form.Handler\n  data={{\n    address: 'Prefilled address',\n  }}\n  schema={{\n    type: 'object',\n    properties: {\n      name: {\n        type: 'string',\n        minLength: 2,\n      },\n      address: {\n        type: 'string',\n        minLength: 3,\n      },\n    },\n    required: ['name', 'address'],\n  }}\n>\n  <Card spacing=\"small\" bottom=\"small\">\n    <Form.MainHeading>Company information</Form.MainHeading>\n\n    <Field.String path=\"/name\" label=\"Name\" />\n    <Field.String path=\"/address\" label=\"Address\" />\n  </Card>\n\n  <Form.SubmitButton />\n</Form.Handler>\n"}),m=()=>(0,r.jsx)(i.Z,{children:"<Form.Handler\n  data={{}}\n  schema={{\n    type: 'object',\n    properties: {\n      name: {\n        type: 'string',\n      },\n      customerType: {\n        type: 'string',\n        enum: ['corporate', 'private'],\n      },\n      companyName: {\n        type: 'string',\n      },\n    },\n    if: {\n      properties: {\n        customerType: {\n          enum: ['corporate'],\n        },\n      },\n      required: ['customerType'],\n    },\n    then: {\n      required: ['name', 'companyName'],\n    },\n    else: {\n      required: ['name'],\n    },\n  }}\n>\n  <Card spacing=\"small\" bottom=\"small\">\n    <Form.MainHeading>Customer information</Form.MainHeading>\n\n    <Field.String path=\"/name\" label=\"Name\" />\n    <Field.String\n      path=\"/customerType\"\n      label=\"Customer type (corporate or private)\"\n    />\n    <Field.String\n      path=\"/companyName\"\n      label=\"Company name (required for corporate customers)\"\n    />\n  </Card>\n\n  <Form.SubmitButton />\n</Form.Handler>\n"}),d=()=>(0,r.jsx)(i.Z,{scope:{Iterate:l,TrashIcon:s.Z},children:'<Form.Handler\n  data={{\n    accounts: [{}],\n  }}\n  schema={{\n    type: \'object\',\n    definitions: {\n      account: {\n        type: \'object\',\n        properties: {\n          accountNumber: {\n            type: \'string\',\n            pattern: \'^[0-9]{11}$\',\n          },\n          alias: {\n            type: \'string\',\n            minLength: 2,\n            maxLength: 32,\n          },\n        },\n        required: [\'accountNumber\'],\n      },\n    },\n    properties: {\n      name: {\n        type: \'string\',\n      },\n      email: {\n        type: \'string\',\n      },\n      phone: {\n        type: \'string\',\n      },\n      accounts: {\n        type: \'array\',\n        items: {\n          $ref: \'#/definitions/account\',\n        },\n      },\n      bsuAccount: {\n        $ref: \'#/definitions/account\',\n      },\n    },\n    oneOf: [\n      {\n        properties: {\n          accounts: {\n            type: \'array\',\n            minItems: 1,\n          },\n        },\n      },\n      {\n        properties: {\n          accounts: {\n            type: \'array\',\n            minItems: 0,\n          },\n          bsuAccount: {\n            type: \'object\',\n            required: [\'accountNumber\'],\n          },\n        },\n        required: [\'bsuAccount\'],\n      },\n    ],\n  }}\n>\n  <Flex.Vertical spacing="small">\n    <Form.MainHeading>Customer information</Form.MainHeading>\n    <Card spacing="small">\n      <Field.String path="/name" label="Name" />\n      <Field.Email path="/email" label="E-mail" />\n      <Field.PhoneNumber path="/phone" label="Phone number" />\n    </Card>\n\n    <Form.MainHeading>Accounts</Form.MainHeading>\n    <Card spacing="small">\n      <Form.SubHeading>Standard accounts</Form.SubHeading>\n\n      <Iterate.Array path="/accounts">\n        <Flex.Horizontal align="flex-end">\n          <Field.BankAccountNumber\n            elementPath="/accountNumber"\n            label="Account number"\n          />\n          <Field.String\n            elementPath="/alias"\n            label="Alias"\n            width="medium"\n          />\n          <Iterate.ArrayRemoveElementButton icon={TrashIcon} />\n        </Flex.Horizontal>\n      </Iterate.Array>\n\n      <Iterate.ArrayPushButton\n        icon="add"\n        icon_position="left"\n        text="Add account"\n        path="/accounts"\n        pushValue={{}}\n        size="medium"\n      />\n\n      <Form.SubHeading>BSU Account</Form.SubHeading>\n      <Field.BankAccountNumber\n        path="/bsuAccount/accountNumber"\n        label="Account number"\n      />\n      <Field.String path="/bsuAccount/alias" label="Alias" />\n    </Card>\n\n    <Form.SubmitButton />\n  </Flex.Vertical>\n</Form.Handler>\n'});function p(n){const e=Object.assign({h2:"h2",h3:"h3",p:"p"},(0,o.ah)(),n.components);return t||b("Examples",!1),u||b("Examples.DataSetSchema",!0),d||b("Examples.DependantListSchema",!0),m||b("Examples.IfRuleSchema",!0),c||b("Examples.SingleFieldSchema",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{children:"Demos"}),"\n",(0,r.jsx)(e.h3,{children:"Schema for single field"}),"\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(e.h3,{children:"Schema for a whole data set"}),"\n",(0,r.jsx)(u,{}),"\n",(0,r.jsx)(e.h3,{children:"Schema with if-rule"}),"\n",(0,r.jsx)(m,{}),"\n",(0,r.jsx)(e.h3,{children:"Dependant list schema"}),"\n",(0,r.jsx)("em",{children:(0,r.jsx)(e.p,{children:"Becoming a new customer, this form requires at least one normal account\nto be added, unless the customer opens a BSU account, then normal\naccounts can still be added, but is optional."})}),"\n",(0,r.jsx)(d,{})]})}var h=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,o.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(p,n)})):p(n)};function b(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},10535:function(n,e,a){a.r(e),a.d(e,{Array:function(){return g},ArrayPushButton:function(){return F},ArrayRemoveElementButton:function(){return j},IterateElementContext:function(){return c.Z}});var t=a(84616),r=a(2784),o=a(72779),i=a.n(o),l=a(95955),s=a.n(l),c=a(38875),u=a(96781),m=a(35533),d=a(55590),p=a(30392),h=a(52322);function b(n){const{className:e,layout:a="vertical",placeholder:o,label:l,labelDescription:b,labelSecondary:g,path:y,value:f,info:x,warning:F,error:S,emptyValue:j,width:v,handleChange:A,children:C}=(0,m.Z)(n),H=(0,r.useMemo)((()=>(null!=f?f:[]).map(((n,e)=>({elementValue:n,handleElementChange:(n,e)=>{const a=structuredClone(f);s().set(a,n,e),null==A||A(a)},handleRemoveElement:()=>{const n=structuredClone(f);n.splice(e,1),null==A||A(n)}})))),[f,A]),N=(0,r.useCallback)((n=>{A([].concat((0,t.Z)(null!=f?f:[]),[n]))}),[f,A]);return(0,h.jsx)(u.Z,{className:i()("dnb-forms-field-number",e),layout:a,label:l,labelDescription:b,labelSecondary:g,info:x,warning:F,error:S,width:v,contentsWidth:!1!==v?v:void 0,...(0,d.SR)(n),children:(0,h.jsx)(p.Z,{...(0,p.W)(n,{spacing:"small"}),children:f===j?(0,h.jsx)("em",{children:o}):H.map(((n,e)=>{let{elementValue:a,handleElementChange:t,handleRemoveElement:r}=n;return(0,h.jsx)(c.Z.Provider,{value:{index:e,value:a,path:y,handleChange:t,handleRemove:r,handlePush:N},children:Array.isArray(C)?C.map((n=>"function"==typeof n?n(a,e):n)):"function"==typeof C?C(a,e):C},`element-${e}`)}))})})}b._supportsSpacingProps=!0;var g=b,y=a(96844),f=a(27439);function x(n){const e=(0,r.useContext)(c.Z),{handlePush:a}=null!=e?e:{},{pushValue:o,...l}=n,s=(0,f.wH)(l),{value:u,handleChange:d,children:p}=(0,m.Z)(l);if(void 0!==u&&!Array.isArray(u))throw new Error("ArrayPushButton received a non-array value.");const b=(0,r.useCallback)((()=>{a?a(o):d([].concat((0,t.Z)(null!=u?u:[]),[o]))}),[u,o,a,d]);return(0,h.jsx)(y.Z,{className:i()("dnb-forms-array-push-button",n.className),on_click:b,...s,children:p})}x._supportsSpacingProps=!0;var F=x;function S(n){const e=(0,r.useContext)(c.Z),{handleRemove:a}=null!=e?e:{};if(!e)throw new Error("ArrayRemoveElementButton must be inside an Iterate.Array component.");const t=(0,f.wH)(n),{children:o}=(0,m.Z)(n),l=(0,r.useCallback)((()=>{a()}),[a]);return(0,h.jsx)(y.Z,{className:i()("dnb-forms-array-remove-element-button",n.className),on_click:l,...t,children:o})}S._supportsSpacingProps=!0;var j=S}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-extended-features-form-schema-validation-demos-mdx-0c7a62a186f7126b8fc4.js.map