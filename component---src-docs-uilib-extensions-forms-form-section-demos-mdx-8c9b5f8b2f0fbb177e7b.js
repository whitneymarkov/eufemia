"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[45344],{75326:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var i={};t.r(i),t.d(i,{AllFieldsRequired:function(){return h},NestedPathSection:function(){return c},NestedSections:function(){return F},OverwriteProps:function(){return p},SchemaSupport:function(){return u},WithVisibility:function(){return S},WithoutDataContext:function(){return d}});var r=t(52322),o=t(45392),a=t(58469),s=t(54109),l=t(30730),m=t(49118);const d=()=>(0,r.jsx)(a.Z,{children:"<Form.Section\n  data={{\n    myField: 'Value',\n  }}\n  onChange={console.log}\n>\n  <Field.String path=\"/myField\" />\n</Form.Section>\n"}),c=()=>(0,r.jsx)(a.Z,{noInline:!0,children:'const MyNameSection = (props: SectionProps) => {\n  return (\n    <Form.Section {...props}>\n      <Card stack>\n        <Field.Name.First path="/firstName" />\n        <Field.Name.Last path="/lastName" />\n      </Card>\n    </Form.Section>\n  )\n}\nrender(\n  <Form.Handler\n    onSubmit={console.log}\n    defaultData={{\n      nestedPath: {\n        firstName: \'Nora\',\n        lastName: \'Mørk\',\n      },\n    }}\n  >\n    <MyNameSection path="/nestedPath" />\n    <Form.SubmitButton variant="send" />\n  </Form.Handler>,\n)\n'}),p=()=>(0,r.jsx)(a.Z,{noInline:!0,children:'const MyNameSection = (props) => {\n  return (\n    <Form.Section {...props}>\n      <Card stack>\n        <Field.Composition width="large">\n          <Field.Name.First path="/firstName" />\n          <Field.Name.Last path="/lastName" required minLength={10} />\n        </Field.Composition>\n      </Card>\n    </Form.Section>\n  )\n}\nrender(\n  <Form.Handler\n    onSubmit={console.log}\n    defaultData={{\n      nestedPath: {\n        firstName: \'\',\n        lastName: \'M\',\n      },\n    }}\n  >\n    <MyNameSection\n      path="/nestedPath"\n      overwriteProps={{\n        firstName: {\n          required: true,\n          label: \'Custom\',\n        },\n        lastName: {\n          required: false,\n          minLength: 2,\n        },\n      }}\n    />\n    <Form.SubmitButton variant="send" />\n  </Form.Handler>,\n)\n'}),h=()=>(0,r.jsx)(a.Z,{noInline:!0,children:'const MyNameSection = (props: SectionProps) => {\n  return (\n    <Form.Section {...props}>\n      <Card stack>\n        <Field.Composition width="large">\n          <Field.Name.First path="/firstName" />\n          <Field.Name.Last path="/lastName" />\n        </Field.Composition>\n      </Card>\n    </Form.Section>\n  )\n}\nconst schema: JSONSchema = {\n  type: \'object\',\n  required: [\'myRequiredSection\'],\n}\nrender(\n  <Flex.Stack>\n    <Form.Handler onSubmit={console.log}>\n      <MyNameSection required />\n      <Form.SubmitButton variant="send" />\n    </Form.Handler>\n\n    <Form.Handler onSubmit={console.log} schema={schema}>\n      <MyNameSection path="/myRequiredSection" />\n      <Form.SubmitButton variant="send" />\n    </Form.Handler>\n  </Flex.Stack>,\n)\n'}),u=()=>(0,r.jsx)(a.Z,{noInline:!0,children:"const MyNameSection = (props: SectionProps) => {\n  return (\n    <Form.Section {...props}>\n      <Card stack>\n        <Field.Composition width=\"large\">\n          <Field.Name.First path=\"/firstName\" />\n          <Field.Name.Last path=\"/lastName\" required minLength={10} />\n        </Field.Composition>\n      </Card>\n    </Form.Section>\n  )\n}\nconst mySchema: JSONSchema = {\n  type: 'object',\n  properties: {\n    nestedPath: {\n      type: 'object',\n      properties: {\n        firstName: {\n          type: 'string',\n          minLength: 3,\n        },\n        lastName: {\n          type: 'string',\n          minLength: 2,\n        },\n      },\n      required: ['firstName', 'lastName'],\n    },\n  },\n}\nrender(\n  <Form.Handler\n    onSubmit={console.log}\n    schema={mySchema}\n    defaultData={{\n      nestedPath: {\n        firstName: '',\n        lastName: 'M',\n      },\n    }}\n  >\n    <MyNameSection path=\"/nestedPath\" />\n    <Form.SubmitButton variant=\"send\" />\n  </Form.Handler>,\n)\n"}),S=()=>(0,r.jsx)(a.Z,{scope:{Output:y},noInline:!0,children:'const MySection = ({ children, ...props }) => {\n  return (\n    <Form.Section {...props}>\n      <Card stack>\n        <Field.Boolean\n          label="Are you sure?"\n          variant="buttons"\n          path="/iAmSure"\n        />\n        <Form.Visibility visible pathTrue="/iAmSure" animate>\n          <Field.Selection\n            label="Choose"\n            variant="radio"\n            path="/mySelection"\n          >\n            <Field.Option value="less" title="Less" />\n            <Field.Option value="more" title="More" />\n          </Field.Selection>\n\n          <Form.Visibility\n            visibleWhen={{\n              path: \'/mySelection\',\n              hasValue: \'more\',\n            }}\n            animate\n          >\n            <Field.String label="My String" path="/myString" />\n          </Form.Visibility>\n        </Form.Visibility>\n\n        {children}\n      </Card>\n\n      <Output />\n    </Form.Section>\n  )\n}\nrender(\n  <Form.Handler\n    onChange={console.log}\n    defaultData={{\n      nestedPath: {\n        iAmSure: false,\n        mySelection: \'less\',\n        myString: \'has a value\',\n      },\n    }}\n  >\n    <MySection path="/nestedPath">\n      <Form.Visibility\n        visibleWhen={{\n          path: \'/myString\',\n          withValue: (value) => value !== \'has a value\',\n        }}\n        animate\n      >\n        <P>\n          Result: <Value.String path="/nestedPath/myString" inline />\n        </P>\n      </Form.Visibility>\n    </MySection>\n  </Form.Handler>,\n)\n'}),F=()=>(0,r.jsx)(a.Z,{noInline:!0,children:'render(\n  <Form.Handler\n    onSubmit={console.log}\n    defaultData={{\n      nestedPath: {\n        name: {\n          first: \'Nora\',\n          last: \'Mørk\',\n        },\n        address: {\n          street: \'Strøget\',\n          nr: \'\',\n        },\n      },\n    }}\n  >\n    <MySection path="/nestedPath" required />\n    <Form.SubmitButton variant="send" />\n  </Form.Handler>,\n)\nfunction MySection(props: SectionProps) {\n  return (\n    <Form.Section {...props}>\n      <Card stack>\n        <MyNameSection path="/name" />\n        <MyAddressSection path="/address" />\n        <MyValueSection />\n      </Card>\n    </Form.Section>\n  )\n}\nfunction MyNameSection(props: SectionProps) {\n  return (\n    <Form.Section {...props}>\n      <Field.Composition width="large">\n        <Field.Name.First path="/first" />\n        <Field.Name.Last path="/last" />\n      </Field.Composition>\n    </Form.Section>\n  )\n}\nfunction MyAddressSection(props: SectionProps) {\n  return (\n    <Form.Section {...props}>\n      <Field.Composition width="large">\n        <Field.String label="Gateadresse" path="/street" width="stretch" />\n        <Field.String label="Nr." path="/nr" width="small" />\n      </Field.Composition>\n    </Form.Section>\n  )\n}\nfunction MyValueSection(props: SectionProps) {\n  return (\n    <Form.Section {...props}>\n      <Value.SummaryList>\n        <Form.Section path="/name">\n          <Value.Composition gap="small">\n            <Value.Name.First path="/first" />\n            <Value.Name.Last path="/last" />\n          </Value.Composition>\n        </Form.Section>\n\n        <Form.Section path="/address">\n          <Value.Composition gap="small">\n            <Value.String label="Gateadresse" path="/street" />\n            <Value.String label="Nr." path="/nr" placeholder="–" />\n          </Value.Composition>\n        </Form.Section>\n      </Value.SummaryList>\n    </Form.Section>\n  )\n}\n'}),y=()=>{const{data:n}=m.Z();return(0,r.jsx)(s.Z,{element:"output",innerSpace:!0,backgroundColor:"sand-yellow",top:!0,bottom:"large",children:(0,r.jsx)(l.Z,{children:(0,r.jsx)("pre",{children:JSON.stringify(n,null,2)})})})};function f(n){const e=Object.assign({h2:"h2",h3:"h3",p:"p",a:"a",code:"code"},(0,o.ah)(),n.components);return i||b("Examples",!1),h||b("Examples.AllFieldsRequired",!0),c||b("Examples.NestedPathSection",!0),F||b("Examples.NestedSections",!0),p||b("Examples.OverwriteProps",!0),u||b("Examples.SchemaSupport",!0),S||b("Examples.WithVisibility",!0),d||b("Examples.WithoutDataContext",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{children:"Demos"}),"\n",(0,r.jsx)(e.h3,{children:"Without Form.Handler"}),"\n",(0,r.jsx)(d,{}),"\n",(0,r.jsx)(e.h3,{children:"With a nested path"}),"\n",(0,r.jsx)(e.p,{children:"This lets you reuse the same section of fields in multiple places in your forms."}),"\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(e.h3,{children:"Overwrite props"}),"\n",(0,r.jsx)(e.p,{children:"Overwriting props makes it very flexible to reuse the same section of fields in multiple places in your forms."}),"\n",(0,r.jsx)(p,{}),"\n",(0,r.jsx)(e.h3,{children:"Schema support"}),"\n",(0,r.jsxs)(e.p,{children:["This feature lets you extend the requirements of the fields in the section with a ",(0,r.jsx)(e.a,{href:"/uilib/extensions/forms/all-features/#schema-validation",children:"JSON Schema"}),"."]}),"\n",(0,r.jsx)(u,{}),"\n",(0,r.jsx)(e.h3,{children:"Required support"}),"\n",(0,r.jsxs)(e.p,{children:["You can easily make a section of fields required by setting the ",(0,r.jsx)(e.code,{children:"required"})," prop on the section itself."]}),"\n",(0,r.jsx)(h,{}),"\n",(0,r.jsx)(e.h3,{children:"Nested sections"}),"\n",(0,r.jsx)(e.p,{children:"You can nest sections inside each other."}),"\n",(0,r.jsx)(F,{}),"\n",(0,r.jsx)(e.h3,{children:"With Visibility logic"}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.a,{href:"/uilib/extensions/forms/Form/Visibility/",children:"Visibility"})," component lets you show or hide parts of your form based on the data given in the section itself."]}),"\n",(0,r.jsx)(S,{})]})}var N=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,o.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(f,n)})):f(n)};function b(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-form-section-demos-mdx-8c9b5f8b2f0fbb177e7b.js.map