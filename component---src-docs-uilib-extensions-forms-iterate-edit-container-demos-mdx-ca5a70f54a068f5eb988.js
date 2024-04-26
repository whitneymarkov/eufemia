"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[93630],{8974:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var a={};t.r(a),t.d(a,{ViewAndEditContainer:function(){return o.ViewAndEditContainer}});var r=t(52322),i=t(45392),o=t(22939);function l(n){const e=Object.assign({h2:"h2"},(0,i.ah)(),n.components);return a||u("Examples",!1),o.ViewAndEditContainer||u("Examples.ViewAndEditContainer",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{children:"Demos"}),"\n",(0,r.jsx)(o.ViewAndEditContainer,{})]})}var m=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(l,n)})):l(n)};function u(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},40730:function(n,e,t){t.r(e),t.d(e,{Default:function(){return o}});var a=t(28204),r=t(6350),i=t(52322);const o=()=>(0,i.jsx)(a.Z,{scope:{Iterate:r},noInline:!0,children:'const MyForm = () => {\n  const { count } = Iterate.useCount(\'myForm\')\n  return (\n    <Form.Handler\n      defaultData={{\n        myList: [\'Item 1\'],\n      }}\n      id="myForm"\n    >\n      <Card stack>\n        <Iterate.Array path="/myList" placeholder={<>Empty list</>}>\n          <Iterate.AnimatedContainer title="Title">\n            <Field.String label="Label" itemPath="/" />\n\n            <Iterate.Toolbar>\n              <Iterate.RemoveButton />\n            </Iterate.Toolbar>\n          </Iterate.AnimatedContainer>\n        </Iterate.Array>\n\n        <Iterate.PushButton\n          path="/myList"\n          pushValue={\'Item \' + String(count(\'/myList\') + 1)}\n          text="Add new item"\n        />\n      </Card>\n    </Form.Handler>\n  )\n}\nrender(<MyForm />)\n'})},22939:function(n,e,t){t.r(e),t.d(e,{AnimatedContainer:function(){return l.Default},ArrayFromFormHandler:function(){return g},ObjectElements:function(){return c},PrimitiveElementsFields:function(){return m},PrimitiveElementsValues:function(){return u},RenderPropsObjectElements:function(){return I},RenderPropsPrimitiveElements:function(){return h},ValueComposition:function(){return s},ViewAndEditContainer:function(){return p},WithTable:function(){return d}});var a=t(28204),r=t(6350),i=t(54937),o=t(52322),l=t(40730);const m=()=>(0,o.jsx)(a.Z,{scope:{Iterate:r},children:"<Iterate.Array\n  value={['Iron Man', 'Captain America', 'The Hulk']}\n  onChange={console.log}\n>\n  <Field.String itemPath=\"/\" />\n</Iterate.Array>\n"}),u=()=>(0,o.jsx)(a.Z,{scope:{Iterate:r},"data-visual-test":"primitive-element-values",children:"<Value.SummaryList>\n  <Iterate.Array value={['Iron Man', 'Captain America', 'The Hulk']}>\n    <Value.String itemPath=\"/\" />\n  </Iterate.Array>\n</Value.SummaryList>\n"}),s=()=>(0,o.jsx)(a.Z,{scope:{Iterate:r},children:"<Value.Composition label=\"Label\">\n  <Iterate.Array value={['Iron Man', 'Captain America', 'The Hulk']}>\n    <Value.String itemPath=\"/\" />\n  </Iterate.Array>\n</Value.Composition>\n"}),d=()=>(0,o.jsx)(a.Z,{scope:{Iterate:r},children:"<Table>\n  <thead>\n    <Tr>\n      <Th>Name</Th>\n      <Th>Age</Th>\n    </Tr>\n  </thead>\n  <tbody>\n    <Iterate.Array\n      withoutFlex\n      value={[\n        {\n          name: 'Iron Man',\n          age: 45,\n        },\n        {\n          name: 'Captain America',\n          age: 123,\n        },\n        {\n          name: 'The Hulk',\n          age: 3337,\n        },\n      ]}\n    >\n      <Tr>\n        <Td>\n          <Value.String itemPath=\"/name\" />\n        </Td>\n        <Td>\n          <Value.Number itemPath=\"/age\" />\n        </Td>\n      </Tr>\n    </Iterate.Array>\n  </tbody>\n</Table>\n"}),c=()=>(0,o.jsx)(a.Z,{scope:{Iterate:r,Value:i},children:"<Iterate.Array\n  value={[\n    {\n      accountName: 'Brukskonto',\n      accountNumber: '90901134567',\n    },\n    {\n      accountName: 'Sparekonto',\n      accountNumber: '90901156789',\n    },\n  ]}\n  onChange={(value) => console.log('onChange', value)}\n>\n  <Field.Composition>\n    <Field.BankAccountNumber itemPath=\"/accountNumber\" />\n    <Field.String label=\"Account name\" itemPath=\"/accountName\" />\n  </Field.Composition>\n</Iterate.Array>\n"}),h=()=>(0,o.jsx)(a.Z,{scope:{Iterate:r},children:"<Iterate.Array\n  value={['foo', 'bar']}\n  onChange={(value) => console.log('onChange', value)}\n>\n  {(elementValue) => <Field.String value={elementValue} />}\n</Iterate.Array>\n"}),I=()=>(0,o.jsx)(a.Z,{scope:{Iterate:r},children:"<Iterate.Array\n  value={[\n    {\n      num: 1,\n      txt: 'One',\n    },\n    {\n      num: 2,\n      txt: 'Two',\n    },\n  ]}\n  onChange={(value) => console.log('onChange', value)}\n>\n  {({ num, txt }) => (\n    <Field.Composition width=\"large\">\n      <Field.Number value={num} width=\"small\" />\n      <Field.String value={txt} width={false} />\n    </Field.Composition>\n  )}\n</Iterate.Array>\n"}),g=()=>(0,o.jsx)(a.Z,{scope:{Iterate:r},"data-visual-test":"animated-container",children:'<Form.Handler\n  data={{\n    avengers: [\n      {\n        nickname: \'Iron Man\',\n        firstName: \'Tony\',\n        lastName: \'Stark\',\n      },\n      {\n        nickname: \'Captain America\',\n        firstName: \'Steve\',\n        lastName: \'Rogers\',\n      },\n    ],\n  }}\n  onChange={(data) => console.log(\'DataContext/onChange\', data)}\n>\n  <Flex.Vertical>\n    <Form.MainHeading>Avengers</Form.MainHeading>\n\n    <Card stack>\n      <Iterate.Array\n        path="/avengers"\n        onChange={(value) => console.log(\'Iterate/onChange\', value)}\n      >\n        <Iterate.AnimatedContainer\n          title={\n            <Value.String itemPath="/nickname" placeholder="A Nick name" />\n          }\n        >\n          <Field.String\n            itemPath="/nickname"\n            width="medium"\n            label="Nick name"\n          />\n\n          <Field.Composition>\n            <Field.String\n              itemPath="/firstName"\n              width="medium"\n              label="First name"\n            />\n            <Field.String\n              itemPath="/lastName"\n              width="medium"\n              label="Last name"\n            />\n          </Field.Composition>\n\n          <Iterate.Toolbar>\n            <Iterate.RemoveButton />\n          </Iterate.Toolbar>\n        </Iterate.AnimatedContainer>\n      </Iterate.Array>\n\n      <Iterate.PushButton\n        text="Add another avenger"\n        path="/avengers"\n        pushValue={{}}\n      />\n    </Card>\n  </Flex.Vertical>\n</Form.Handler>\n'}),p=()=>(0,o.jsx)(a.Z,{scope:{Iterate:r},"data-visual-test":"view-and-edit-container",noInline:!0,children:'const MyEditItem = () => {\n  return (\n    <Iterate.EditContainer\n      title="Edit account holder"\n      titleWhenNew="New account holder"\n    >\n      <Field.Composition>\n        <Field.String\n          itemPath="/firstName"\n          width="medium"\n          label="First name"\n        />\n        <Field.String\n          itemPath="/lastName"\n          width="medium"\n          label="Last name"\n          required\n        />\n      </Field.Composition>\n    </Iterate.EditContainer>\n  )\n}\nconst MyViewItem = () => {\n  return (\n    <Iterate.ViewContainer title="Account holder">\n      <Value.SummaryList>\n        <Value.String label="First name" itemPath="/firstName" showEmpty />\n        <Value.String\n          label="Last name"\n          itemPath="/lastName"\n          placeholder="-"\n        />\n      </Value.SummaryList>\n    </Iterate.ViewContainer>\n  )\n}\nconst MyForm = () => {\n  return (\n    <Form.Handler\n      data={{\n        accounts: [\n          {\n            firstName: \'Tony\',\n            lastName: undefined, // initiate error\n          },\n        ],\n      }}\n      onChange={(data) => console.log(\'DataContext/onChange\', data)}\n      onSubmit={async (data) => console.log(\'onSubmit\', data)}\n    >\n      <Flex.Vertical>\n        <Form.MainHeading>Accounts</Form.MainHeading>\n\n        <Card stack>\n          <Iterate.Array path="/accounts">\n            <MyViewItem />\n            <MyEditItem />\n          </Iterate.Array>\n\n          <Iterate.PushButton\n            text="Add another account"\n            path="/accounts"\n            pushValue={{}}\n          />\n        </Card>\n\n        <Form.SubmitButton variant="send" />\n      </Flex.Vertical>\n    </Form.Handler>\n  )\n}\nrender(<MyForm />)\n'})}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-iterate-edit-container-demos-mdx-ca5a70f54a068f5eb988.js.map