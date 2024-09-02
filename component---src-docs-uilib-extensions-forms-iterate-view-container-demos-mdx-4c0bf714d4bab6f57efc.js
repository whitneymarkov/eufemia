"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[13618],{38071:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var a={};t.r(a),t.d(a,{ViewAndEditContainer:function(){return o.ViewAndEditContainer}});var r=t(52322),i=t(45392),o=t(22939);function l(n){const e=Object.assign({h2:"h2"},(0,i.ah)(),n.components);return a||u("Examples",!1),o.ViewAndEditContainer||u("Examples.ViewAndEditContainer",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{children:"Demos"}),"\n",(0,r.jsx)(o.ViewAndEditContainer,{})]})}var m=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(l,n)})):l(n)};function u(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},40730:function(n,e,t){t.r(e),t.d(e,{Default:function(){return i}});var a=t(64368),r=t(52322);const i=()=>(0,r.jsx)(a.Z,{noInline:!0,children:'const MyForm = () => {\n  const { count } = Iterate.useCount(\'myForm\')\n  return (\n    <Form.Handler\n      defaultData={{\n        myList: [\'Item 1\'],\n      }}\n      id="myForm"\n    >\n      <Card stack>\n        <Iterate.Array path="/myList" placeholder={<>Empty list</>}>\n          <Iterate.AnimatedContainer title="Title {itemNr}">\n            <Field.String label="Label" itemPath="/" />\n\n            <Iterate.Toolbar>\n              <Iterate.RemoveButton />\n            </Iterate.Toolbar>\n          </Iterate.AnimatedContainer>\n        </Iterate.Array>\n\n        <Iterate.PushButton\n          path="/myList"\n          pushValue={\'Item \' + String(count(\'/myList\') + 1)}\n          text="Add new item"\n        />\n      </Card>\n    </Form.Handler>\n  )\n}\nrender(<MyForm />)\n'})},22939:function(n,e,t){t.r(e),t.d(e,{AnimatedContainer:function(){return o.Default},ArrayFromFormHandler:function(){return y},DynamicPathValue:function(){return F},ObjectItems:function(){return d},PrimitiveItemsFields:function(){return l},PrimitiveItemsValues:function(){return m},RenderPropsObjectItems:function(){return h},RenderPropsPrimitiveItems:function(){return c},ValueComposition:function(){return u},ViewAndEditContainer:function(){return I},WithTable:function(){return s},WithVisibility:function(){return C}});var a=t(64368),r=t(95597),i=t(52322),o=t(40730);const l=()=>(0,i.jsx)(a.Z,{children:"<Iterate.Array\n  value={['Iron Man', 'Captain America', 'The Hulk']}\n  onChange={console.log}\n>\n  <Field.String itemPath=\"/\" />\n</Iterate.Array>\n"}),m=()=>(0,i.jsx)(a.Z,{"data-visual-test":"primitive-element-values",children:"<Value.SummaryList>\n  <Iterate.Array value={['Iron Man', 'Captain America', 'The Hulk']}>\n    <Value.String itemPath=\"/\" />\n  </Iterate.Array>\n</Value.SummaryList>\n"}),u=()=>(0,i.jsx)(a.Z,{children:"<Value.Composition>\n  <Iterate.Array\n    value={[\n      {\n        label: 'Label A',\n        value: 'value 1',\n      },\n      {\n        label: 'Label B',\n        value: 'value 2',\n      },\n    ]}\n  >\n    <Value.String\n      label={<Value.String itemPath=\"/label\" />}\n      itemPath=\"/value\"\n    />\n  </Iterate.Array>\n</Value.Composition>\n"}),s=()=>(0,i.jsx)(a.Z,{children:"<Table>\n  <thead>\n    <Tr>\n      <Th>Name</Th>\n      <Th>Age</Th>\n    </Tr>\n  </thead>\n  <tbody>\n    <Iterate.Array\n      withoutFlex\n      value={[\n        {\n          name: 'Iron Man',\n          age: 45,\n        },\n        {\n          name: 'Captain America',\n          age: 123,\n        },\n        {\n          name: 'The Hulk',\n          age: 3337,\n        },\n      ]}\n    >\n      <Tr>\n        <Td>\n          <Value.Name.Last itemPath=\"/name\" />\n        </Td>\n        <Td>\n          <Value.Number itemPath=\"/age\" />\n        </Td>\n      </Tr>\n    </Iterate.Array>\n  </tbody>\n</Table>\n"}),d=()=>(0,i.jsx)(a.Z,{scope:{Value:r},children:"<Iterate.Array\n  value={[\n    {\n      accountName: 'Brukskonto',\n      accountNumber: '90901134567',\n    },\n    {\n      accountName: 'Sparekonto',\n      accountNumber: '90901156789',\n    },\n  ]}\n  onChange={(value) => console.log('onChange', value)}\n>\n  <Field.Composition>\n    <Field.BankAccountNumber itemPath=\"/accountNumber\" />\n    <Field.String label=\"Account name\" itemPath=\"/accountName\" />\n  </Field.Composition>\n</Iterate.Array>\n"}),c=()=>(0,i.jsx)(a.Z,{children:"<Iterate.Array\n  value={['foo', 'bar']}\n  onChange={(value) => console.log('onChange', value)}\n>\n  {(elementValue) => <Field.String value={elementValue} />}\n</Iterate.Array>\n"}),h=()=>(0,i.jsx)(a.Z,{children:"<Iterate.Array\n  value={[\n    {\n      num: 1,\n      txt: 'One',\n    },\n    {\n      num: 2,\n      txt: 'Two',\n    },\n  ]}\n  onChange={(value) => console.log('onChange', value)}\n>\n  {({ num, txt }) => (\n    <Field.Composition width=\"large\">\n      <Field.Number value={num} width=\"small\" />\n      <Field.String value={txt} width={false} />\n    </Field.Composition>\n  )}\n</Iterate.Array>\n"}),y=()=>(0,i.jsx)(a.Z,{"data-visual-test":"animated-container",children:'<Form.Handler\n  data={{\n    avengers: [\n      {\n        nickname: \'Iron Man\',\n        firstName: \'Tony\',\n        lastName: \'Stark\',\n      },\n      {\n        nickname: \'Captain America\',\n        firstName: \'Steve\',\n        lastName: \'Rogers\',\n      },\n    ],\n  }}\n  onChange={(data) => console.log(\'DataContext/onChange\', data)}\n>\n  <Flex.Vertical>\n    <Form.MainHeading>Avengers</Form.MainHeading>\n\n    <Card stack>\n      <Iterate.Array\n        path="/avengers"\n        onChange={(value) => console.log(\'Iterate/onChange\', value)}\n      >\n        <Iterate.AnimatedContainer\n          title={\n            <Value.String\n              label={false}\n              itemPath="/nickname"\n              placeholder="A Nick name"\n            />\n          }\n        >\n          <Field.Name\n            itemPath="/nickname"\n            width="medium"\n            label="Nick name"\n          />\n\n          <Field.Composition>\n            <Field.Name.First itemPath="/firstName" width="medium" />\n            <Field.Name.Last itemPath="/lastName" width="medium" />\n          </Field.Composition>\n\n          <Iterate.Toolbar>\n            <Iterate.RemoveButton />\n          </Iterate.Toolbar>\n        </Iterate.AnimatedContainer>\n      </Iterate.Array>\n\n      <Iterate.PushButton\n        text="Add another avenger"\n        path="/avengers"\n        pushValue={{}}\n      />\n    </Card>\n  </Flex.Vertical>\n</Form.Handler>\n'}),I=()=>(0,i.jsx)(a.Z,{"data-visual-test":"view-and-edit-container",noInline:!0,children:'const MyEditItemForm = () => {\n  return (\n    <Field.Composition>\n      <Field.Name.First itemPath="/firstName" width="medium" />\n      <Field.Name.Last itemPath="/lastName" width="medium" required />\n    </Field.Composition>\n  )\n}\nconst MyEditItem = () => {\n  return (\n    <Iterate.EditContainer\n      title="Edit account holder {itemNr}"\n      titleWhenNew="New account holder {itemNr}"\n    >\n      <MyEditItemForm />\n    </Iterate.EditContainer>\n  )\n}\nconst MyViewItem = () => {\n  const item = Iterate.useItem()\n  console.log(\'index:\', item.index)\n  return (\n    <Iterate.ViewContainer title="Account holder {itemNr}">\n      <Value.SummaryList>\n        <Value.Name.First itemPath="/firstName" showEmpty />\n        <Value.Name.Last itemPath="/lastName" placeholder="-" />\n      </Value.SummaryList>\n    </Iterate.ViewContainer>\n  )\n}\nconst CreateNewEntry = () => {\n  return (\n    <Iterate.PushContainer\n      path="/accounts"\n      title="New account holder"\n      openButton={\n        <Iterate.PushContainer.OpenButton text="Add another account" />\n      }\n      showOpenButtonWhen={(list) => list.length > 0}\n    >\n      <MyEditItemForm />\n    </Iterate.PushContainer>\n  )\n}\nconst MyForm = () => {\n  return (\n    <Form.Handler\n      data={{\n        accounts: [\n          {\n            firstName: \'Tony\',\n            lastName: undefined, // initiate error\n          },\n        ],\n      }}\n      onChange={(data) => console.log(\'DataContext/onChange\', data)}\n      onSubmit={async (data) => console.log(\'onSubmit\', data)}\n    >\n      <Flex.Vertical>\n        <Form.MainHeading>Accounts</Form.MainHeading>\n\n        <Card stack>\n          <Iterate.Array path="/accounts">\n            <MyViewItem />\n            <MyEditItem />\n          </Iterate.Array>\n\n          <CreateNewEntry />\n        </Card>\n\n        <Form.SubmitButton variant="send" />\n      </Flex.Vertical>\n    </Form.Handler>\n  )\n}\nrender(<MyForm />)\n'}),F=()=>(0,i.jsx)(a.Z,{children:'<Form.Handler\n  defaultData={{\n    count: 0,\n  }}\n>\n  <Flex.Stack>\n    <Field.Number path="/count" width="small" showStepControls />\n    <Iterate.Array\n      path="/items"\n      countPath="/count"\n      countPathTransform={({ value, index }) =>\n        Object.prototype.hasOwnProperty.call(value || {}, \'myObject\')\n          ? value\n          : {\n              myObject: index,\n            }\n      }\n    >\n      <Field.Number itemPath="/myObject" label="Item no. {itemNr}" />\n    </Iterate.Array>\n  </Flex.Stack>\n</Form.Handler>\n'}),C=()=>(0,i.jsx)(a.Z,{children:'<Form.Handler>\n  <Iterate.Array path="/myList" value={[{}]}>\n    <Flex.Stack>\n      <Field.Name.First className="firstName" itemPath="/firstName" />\n\n      <Form.Visibility\n        animate\n        visibleWhen={{\n          itemPath: \'/firstName\',\n          hasValue: (value) => Boolean(value),\n        }}\n      >\n        <Field.Name.Last className="lastName" itemPath="/lastName" />\n      </Form.Visibility>\n    </Flex.Stack>\n  </Iterate.Array>\n</Form.Handler>\n'})}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-iterate-view-container-demos-mdx-4c0bf714d4bab6f57efc.js.map