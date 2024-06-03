"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[95628,93630,30530],{39991:function(n,e,t){t.r(e);var a=t(52322),r=t(45392),i=t(85902),o=t(8974);function l(n){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.default,{}),"\n",(0,a.jsx)(o.default,{})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,a.jsx)(e,Object.assign({},n,{children:(0,a.jsx)(l,n)})):l()}},8974:function(n,e,t){t.r(e),t.d(e,{default:function(){return s}});var a={};t.r(a),t.d(a,{ViewAndEditContainer:function(){return o.ViewAndEditContainer}});var r=t(52322),i=t(45392),o=t(22939);function l(n){const e=Object.assign({h2:"h2"},(0,i.ah)(),n.components);return a||c("Examples",!1),o.ViewAndEditContainer||c("Examples.ViewAndEditContainer",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{children:"Demos"}),"\n",(0,r.jsx)(o.ViewAndEditContainer,{})]})}var s=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(l,n)})):l(n)};function c(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},85902:function(n,e,t){t.r(e);var a=t(52322),r=t(45392);function i(n){const e=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,r.ah)(),n.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{children:"Description"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"Iterate.EditContainer"})," enables users to toggle (with animation) the content of each item between the ",(0,a.jsx)(e.a,{href:"/uilib/extensions/forms/Iterate/ViewContainer/",children:"ViewContainer"})," and this edit container. It can be used instead of the ",(0,a.jsx)(e.a,{href:"/uilib/extensions/forms/Iterate/AnimatedContainer/",children:"AnimatedContainer"}),"."]}),"\n",(0,a.jsxs)(e.p,{children:["By default, it features the ",(0,a.jsx)(e.a,{href:"/uilib/extensions/forms/Iterate/Toolbar/",children:"Toolbar"}),' containing a "Done" button and a "Cancel" button. The "Cancel" button resets any changes made to the item content, restoring it to its original state.']}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",children:'import { Iterate, Field, Value } from \'@dnb/eufemia/extensions/forms\'\n\nrender(\n  <Iterate.Array>\n    <Iterate.EditContainer\n      title="Edit account holder"\n      titleWhenNew="New account holder"\n    >\n      <Field.String itemPath="/name" />\n    </Iterate.EditContainer>\n\n    <Iterate.ViewContainer title="Account holder">\n      <Value.String itemPath="/name" />\n    </Iterate.ViewContainer>\n  </Iterate.Array>,\n)\n'})}),"\n",(0,a.jsx)(e.h2,{children:"Accessibility"}),"\n",(0,a.jsxs)(e.p,{children:["The ",(0,a.jsx)(e.code,{children:"Iterate.EditContainer"})," component has an ",(0,a.jsx)(e.code,{children:"aria-label"})," attribute, which is set to the ",(0,a.jsx)(e.code,{children:"title"})," prop value. It uses a section element to wrap the content, which helps users with screen readers to get the needed announcement."]}),"\n",(0,a.jsx)(e.p,{children:"When the edit container becomes active, it will automatically receive the active element focus. And when the edit container switches to the view container, the focus will be set to the view container."})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,a.jsx)(e,Object.assign({},n,{children:(0,a.jsx)(i,n)})):i(n)}},40730:function(n,e,t){t.r(e),t.d(e,{Default:function(){return o}});var a=t(58469),r=t(49414),i=t(52322);const o=()=>(0,i.jsx)(a.Z,{scope:{Iterate:r},noInline:!0,children:'const MyForm = () => {\n  const { count } = Iterate.useCount(\'myForm\')\n  return (\n    <Form.Handler\n      defaultData={{\n        myList: [\'Item 1\'],\n      }}\n      id="myForm"\n    >\n      <Card stack>\n        <Iterate.Array path="/myList" placeholder={<>Empty list</>}>\n          <Iterate.AnimatedContainer title="Title">\n            <Field.String label="Label" itemPath="/" />\n\n            <Iterate.Toolbar>\n              <Iterate.RemoveButton />\n            </Iterate.Toolbar>\n          </Iterate.AnimatedContainer>\n        </Iterate.Array>\n\n        <Iterate.PushButton\n          path="/myList"\n          pushValue={\'Item \' + String(count(\'/myList\') + 1)}\n          text="Add new item"\n        />\n      </Card>\n    </Form.Handler>\n  )\n}\nrender(<MyForm />)\n'})},22939:function(n,e,t){t.r(e),t.d(e,{AnimatedContainer:function(){return l.Default},ArrayFromFormHandler:function(){return I},DynamicPathValue:function(){return b},ObjectElements:function(){return m},PrimitiveElementsFields:function(){return s},PrimitiveElementsValues:function(){return c},RenderPropsObjectElements:function(){return p},RenderPropsPrimitiveElements:function(){return h},ValueComposition:function(){return d},ViewAndEditContainer:function(){return g},WithTable:function(){return u}});var a=t(58469),r=t(49414),i=t(40942),o=t(52322),l=t(40730);const s=()=>(0,o.jsx)(a.Z,{scope:{Iterate:r},children:"<Iterate.Array\n  value={['Iron Man', 'Captain America', 'The Hulk']}\n  onChange={console.log}\n>\n  <Field.String itemPath=\"/\" />\n</Iterate.Array>\n"}),c=()=>(0,o.jsx)(a.Z,{scope:{Iterate:r},"data-visual-test":"primitive-element-values",children:"<Value.SummaryList>\n  <Iterate.Array value={['Iron Man', 'Captain America', 'The Hulk']}>\n    <Value.String itemPath=\"/\" />\n  </Iterate.Array>\n</Value.SummaryList>\n"}),d=()=>(0,o.jsx)(a.Z,{scope:{Iterate:r},children:"<Value.Composition>\n  <Iterate.Array\n    value={[\n      {\n        label: 'Label A',\n        value: 'value 1',\n      },\n      {\n        label: 'Label B',\n        value: 'value 2',\n      },\n    ]}\n  >\n    <Value.String\n      label={<Value.String itemPath=\"/label\" />}\n      itemPath=\"/value\"\n    />\n  </Iterate.Array>\n</Value.Composition>\n"}),u=()=>(0,o.jsx)(a.Z,{scope:{Iterate:r},children:"<Table>\n  <thead>\n    <Tr>\n      <Th>Name</Th>\n      <Th>Age</Th>\n    </Tr>\n  </thead>\n  <tbody>\n    <Iterate.Array\n      withoutFlex\n      value={[\n        {\n          name: 'Iron Man',\n          age: 45,\n        },\n        {\n          name: 'Captain America',\n          age: 123,\n        },\n        {\n          name: 'The Hulk',\n          age: 3337,\n        },\n      ]}\n    >\n      <Tr>\n        <Td>\n          <Value.String itemPath=\"/name\" />\n        </Td>\n        <Td>\n          <Value.Number itemPath=\"/age\" />\n        </Td>\n      </Tr>\n    </Iterate.Array>\n  </tbody>\n</Table>\n"}),m=()=>(0,o.jsx)(a.Z,{scope:{Iterate:r,Value:i},children:"<Iterate.Array\n  value={[\n    {\n      accountName: 'Brukskonto',\n      accountNumber: '90901134567',\n    },\n    {\n      accountName: 'Sparekonto',\n      accountNumber: '90901156789',\n    },\n  ]}\n  onChange={(value) => console.log('onChange', value)}\n>\n  <Field.Composition>\n    <Field.BankAccountNumber itemPath=\"/accountNumber\" />\n    <Field.String label=\"Account name\" itemPath=\"/accountName\" />\n  </Field.Composition>\n</Iterate.Array>\n"}),h=()=>(0,o.jsx)(a.Z,{scope:{Iterate:r},children:"<Iterate.Array\n  value={['foo', 'bar']}\n  onChange={(value) => console.log('onChange', value)}\n>\n  {(elementValue) => <Field.String value={elementValue} />}\n</Iterate.Array>\n"}),p=()=>(0,o.jsx)(a.Z,{scope:{Iterate:r},children:"<Iterate.Array\n  value={[\n    {\n      num: 1,\n      txt: 'One',\n    },\n    {\n      num: 2,\n      txt: 'Two',\n    },\n  ]}\n  onChange={(value) => console.log('onChange', value)}\n>\n  {({ num, txt }) => (\n    <Field.Composition width=\"large\">\n      <Field.Number value={num} width=\"small\" />\n      <Field.String value={txt} width={false} />\n    </Field.Composition>\n  )}\n</Iterate.Array>\n"}),I=()=>(0,o.jsx)(a.Z,{scope:{Iterate:r},"data-visual-test":"animated-container",children:'<Form.Handler\n  data={{\n    avengers: [\n      {\n        nickname: \'Iron Man\',\n        firstName: \'Tony\',\n        lastName: \'Stark\',\n      },\n      {\n        nickname: \'Captain America\',\n        firstName: \'Steve\',\n        lastName: \'Rogers\',\n      },\n    ],\n  }}\n  onChange={(data) => console.log(\'DataContext/onChange\', data)}\n>\n  <Flex.Vertical>\n    <Form.MainHeading>Avengers</Form.MainHeading>\n\n    <Card stack>\n      <Iterate.Array\n        path="/avengers"\n        onChange={(value) => console.log(\'Iterate/onChange\', value)}\n      >\n        <Iterate.AnimatedContainer\n          title={\n            <Value.String itemPath="/nickname" placeholder="A Nick name" />\n          }\n        >\n          <Field.Name\n            itemPath="/nickname"\n            width="medium"\n            label="Nick name"\n          />\n\n          <Field.Composition>\n            <Field.Name.First itemPath="/firstName" width="medium" />\n            <Field.Name.Last itemPath="/lastName" width="medium" />\n          </Field.Composition>\n\n          <Iterate.Toolbar>\n            <Iterate.RemoveButton />\n          </Iterate.Toolbar>\n        </Iterate.AnimatedContainer>\n      </Iterate.Array>\n\n      <Iterate.PushButton\n        text="Add another avenger"\n        path="/avengers"\n        pushValue={{}}\n      />\n    </Card>\n  </Flex.Vertical>\n</Form.Handler>\n'}),g=()=>(0,o.jsx)(a.Z,{scope:{Iterate:r},"data-visual-test":"view-and-edit-container",noInline:!0,children:'const MyEditItem = () => {\n  return (\n    <Iterate.EditContainer\n      title="Edit account holder"\n      titleWhenNew="New account holder"\n    >\n      <Field.Composition>\n        <Field.Name.First itemPath="/firstName" width="medium" />\n        <Field.Name.Last itemPath="/lastName" width="medium" required />\n      </Field.Composition>\n    </Iterate.EditContainer>\n  )\n}\nconst MyViewItem = () => {\n  return (\n    <Iterate.ViewContainer title="Account holder">\n      <Value.SummaryList>\n        <Value.Name.First itemPath="/firstName" showEmpty />\n        <Value.Name.Last itemPath="/lastName" placeholder="-" />\n      </Value.SummaryList>\n    </Iterate.ViewContainer>\n  )\n}\nconst MyForm = () => {\n  return (\n    <Form.Handler\n      data={{\n        accounts: [\n          {\n            firstName: \'Tony\',\n            lastName: undefined, // initiate error\n          },\n        ],\n      }}\n      onChange={(data) => console.log(\'DataContext/onChange\', data)}\n      onSubmit={async (data) => console.log(\'onSubmit\', data)}\n    >\n      <Flex.Vertical>\n        <Form.MainHeading>Accounts</Form.MainHeading>\n\n        <Card stack>\n          <Iterate.Array path="/accounts">\n            <MyViewItem />\n            <MyEditItem />\n          </Iterate.Array>\n\n          <Iterate.PushButton\n            text="Add another account"\n            path="/accounts"\n            pushValue={{}}\n          />\n        </Card>\n\n        <Form.SubmitButton variant="send" />\n      </Flex.Vertical>\n    </Form.Handler>\n  )\n}\nrender(<MyForm />)\n'}),b=()=>(0,o.jsx)(a.Z,{scope:{Iterate:r},children:'<Form.Handler\n  defaultData={{\n    count: 0,\n  }}\n>\n  <Flex.Stack>\n    <Field.Number path="/count" width="small" showStepControls />\n    <Iterate.Array\n      path="/items"\n      countPath="/count"\n      countPathTransform={({ value, index }) =>\n        Object.prototype.hasOwnProperty.call(value || {}, \'myObject\')\n          ? value\n          : {\n              myObject: index,\n            }\n      }\n    >\n      <Field.Number itemPath="/myObject" label="Item no. {itemNr}" />\n    </Iterate.Array>\n  </Flex.Stack>\n</Form.Handler>\n'})}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-iterate-edit-container-mdx-3a58d5c4958852d21b64.js.map