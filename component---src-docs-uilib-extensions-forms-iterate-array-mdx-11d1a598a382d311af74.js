"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[30045,48672,6931],{20515:function(e,n,t){t.r(n);var a=t(52322),r=t(45392),i=t(10806),o=t(41225);function s(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.default,{}),"\n",(0,a.jsx)(o.default,{})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(s,e)})):s()}},41225:function(e,n,t){t.r(n);var a=t(52322),r=t(45392),i=t(22939);function o(e){const n=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a"},(0,r.ah)(),e.components);return i||s("Examples",!1),i.AnimatedContainer||s("Examples.AnimatedContainer",!0),i.ArrayFromFormHandler||s("Examples.ArrayFromFormHandler",!0),i.DynamicPathValue||s("Examples.DynamicPathValue",!0),i.ObjectItems||s("Examples.ObjectItems",!0),i.PrimitiveItemsFields||s("Examples.PrimitiveItemsFields",!0),i.PrimitiveItemsValues||s("Examples.PrimitiveItemsValues",!0),i.RenderPropsObjectItems||s("Examples.RenderPropsObjectItems",!0),i.RenderPropsPrimitiveItems||s("Examples.RenderPropsPrimitiveItems",!0),i.ValueComposition||s("Examples.ValueComposition",!0),i.ViewAndEditContainer||s("Examples.ViewAndEditContainer",!0),i.WithTable||s("Examples.WithTable",!0),i.WithVisibility||s("Examples.WithVisibility",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{children:"Demos"}),"\n",(0,a.jsx)(n.h3,{children:"Primitive items as fields"}),"\n",(0,a.jsx)(i.PrimitiveItemsFields,{}),"\n",(0,a.jsx)(n.h3,{children:"Primitive items as values"}),"\n",(0,a.jsx)(i.PrimitiveItemsValues,{}),"\n",(0,a.jsx)(n.h3,{children:"Object items"}),"\n",(0,a.jsx)(i.ObjectItems,{}),"\n",(0,a.jsx)(n.h3,{children:"Render props with primitive items"}),"\n",(0,a.jsx)(i.RenderPropsPrimitiveItems,{}),"\n",(0,a.jsx)(n.h3,{children:"Render props with object items"}),"\n",(0,a.jsx)(i.RenderPropsObjectItems,{}),"\n",(0,a.jsx)(n.h3,{children:"Conditions using Visibility"}),"\n",(0,a.jsx)(n.p,{children:"The second field will be visible when the first has a value."}),"\n",(0,a.jsx)(i.WithVisibility,{}),"\n",(0,a.jsx)(n.h3,{children:"Dynamic path value"}),"\n",(0,a.jsx)(i.DynamicPathValue,{}),"\n",(0,a.jsx)(n.h3,{children:"Animated container"}),"\n",(0,a.jsxs)(n.p,{children:["With an optional ",(0,a.jsx)(n.code,{children:"title"})," and ",(0,a.jsx)(n.a,{href:"/uilib/extensions/forms/Iterate/Toolbar/",children:"Iterate.Toolbar"}),"."]}),"\n",(0,a.jsx)(i.AnimatedContainer,{}),"\n",(0,a.jsx)(n.h3,{children:"Toggle between a view and edit container"}),"\n",(0,a.jsx)(i.ViewAndEditContainer,{}),"\n",(0,a.jsx)(n.h3,{children:"With DataContext and add/remove buttons"}),"\n",(0,a.jsx)(i.ArrayFromFormHandler,{}),"\n",(0,a.jsx)(n.h3,{children:"Static generated in a Table"}),"\n",(0,a.jsx)(i.WithTable,{}),"\n",(0,a.jsx)(n.h3,{children:"Value composition"}),"\n",(0,a.jsx)(i.ValueComposition,{})]})}function s(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(o,e)})):o(e)}},10806:function(e,n,t){t.r(n);var a=t(52322),r=t(45392);function i(e){const n=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",h3:"h3",a:"a",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Iterate.Array"})," works in many ways similar to field-components. It has a ",(0,a.jsx)(n.code,{children:"value"}),"-prop that can receive an array or you can give it a ",(0,a.jsx)(n.code,{children:"path"})," if you want it to retrieve an array from a surrounding ",(0,a.jsx)(n.code,{children:"DataContext"}),". All children components of ",(0,a.jsx)(n.code,{children:"Iterate.Array"})," are rendered once per item the array-value consists of."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { Iterate, Field } from '@dnb/eufemia/extensions/forms'\n\nrender(\n  <Iterate.Array\n    label=\"Array label\"\n    value={['Iron Man', 'Captain America', 'The Hulk']}\n  >\n    <Field.String itemPath=\"/\" />\n  </Iterate.Array>,\n)\n"})}),"\n",(0,a.jsxs)(n.h2,{children:["About ",(0,a.jsx)(n.code,{children:"itemPath"})," and ",(0,a.jsx)(n.code,{children:"path"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"itemPath"})," points to the root of each iterated item, while ",(0,a.jsx)(n.code,{children:"path"}),"\npoints to the root of the data source:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { Iterate, Field, Form } from '@dnb/eufemia/extensions/forms'\n\nrender(\n  <Form.Handler\n    defaultData={{\n      listOfHeroes: [\n        { name: 'Iron Man' },\n        { name: 'Captain America' },\n        { name: 'The Hulk' },\n      ],\n    }}\n    onChange={console.log}\n  >\n    <Iterate.Array path=\"/listOfHeroes\">\n      <Field.Name.Last itemPath=\"/name\" />\n    </Iterate.Array>\n  </Form.Handler>,\n)\n"})}),"\n",(0,a.jsx)(n.h2,{children:"Individual values and dynamic paths"}),"\n",(0,a.jsxs)(n.p,{children:["Since ",(0,a.jsx)(n.code,{children:"Iterate.Array"})," renders its children once per item, the field components inside must receive values based on the different items in the array. This can be done in two ways:"]}),"\n",(0,a.jsx)(n.h3,{children:"1. itemPath"}),"\n",(0,a.jsxs)(n.p,{children:["If field components inside ",(0,a.jsx)(n.code,{children:"Iterate.Array"})," are given an ",(0,a.jsx)(n.code,{children:"itemPath"})," prop, this will look for values based on the array item being the root of the structure, even if the array often comes from a surrounding data set. This means that you do not need to think about which index the field should point to, because it is handled by ",(0,a.jsx)(n.code,{children:"Iterate.Array"})," internally. You can look at the individual item as its own structure."]}),"\n",(0,a.jsx)(n.h3,{children:"2. Render props"}),"\n",(0,a.jsxs)(n.p,{children:["If you want to be able to provide values to the individual field component directly instead of pointing to them with paths, you can give ",(0,a.jsx)(n.code,{children:"Iterate.Array"})," a render prop. It works a bit like an array-map call. The render function receives the value of the item as the first argument, and the index of which item you are on as the second."]}),"\n",(0,a.jsxs)(n.p,{children:["Examples of both the use of ",(0,a.jsx)(n.code,{children:"itemPath"})," and Render Props in ",(0,a.jsx)(n.code,{children:"Iterate.Array"})," can be found on ",(0,a.jsx)(n.a,{href:"/uilib/extensions/forms/Iterate/Array/demos",children:"demos"}),"."]}),"\n",(0,a.jsx)(n.h2,{children:"The item number in labels"}),"\n",(0,a.jsxs)(n.p,{children:["You can use the ",(0,a.jsx)(n.code,{children:"{itemNr}"})," variable in the label to display the current item number. This is useful when you have a list of items and you want to display the item number in the label."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { Iterate, Field } from '@dnb/eufemia/extensions/forms'\n\nrender(\n  <Iterate.Array value={['foo', 'bar']}>\n    <Field.String itemPath=\"/\" label=\"Item no. {itemNr}\" />\n  </Iterate.Array>,\n)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"/uilib/extensions/forms/Iterate/ViewContainer",children:"ViewContainer"})," and the ",(0,a.jsx)(n.a,{href:"/uilib/extensions/forms/Iterate/EditContainer",children:"EditContainer"})," also supports ",(0,a.jsx)(n.code,{children:"{itemNr}"})," in the ",(0,a.jsx)(n.code,{children:"title"})," property to display the current item number."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { Iterate, Field } from '@dnb/eufemia/extensions/forms'\n\nrender(\n  <Iterate.Array value={['foo', 'bar']}>\n    <Iterate.ViewContainer title=\"Item no. {itemNr}\">\n      ...\n    </Iterate.ViewContainer>\n  </Iterate.Array>,\n)\n"})}),"\n",(0,a.jsx)(n.h2,{children:"Filter data"}),"\n",(0,a.jsx)(n.p,{children:"You can filter data by paths specific or all paths."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"/myList/0"})," will filter out the first item of the list, including ",(0,a.jsx)(n.code,{children:"foo"})," and ",(0,a.jsx)(n.code,{children:"bar"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"/myList/1/foo"})," will filter out ",(0,a.jsx)(n.code,{children:"foo"})," inside the second item of the list."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"/myList/*/foo"})," will filter out all ",(0,a.jsx)(n.code,{children:"foo"})," object keys from all items of the list."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"/myList/*/subList/*/foo"})," does support multi wildcard paths."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["In the example below, the data given in ",(0,a.jsx)(n.code,{children:"onSubmit"}),' will still have "foo2" and "bar2" of the list.']}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { Iterate, Form, Field } from '@dnb/eufemia/extensions/forms'\n\nconst myFilter = {\n  '/myList/0': false,\n}\n\nrender(\n  <Form.Handler\n    data={{\n      myList: [\n        { foo: 'foo1', bar: 'bar1' },\n        { foo: 'foo2', bar: 'bar2' },\n      ],\n    }}\n    onSubmit={(data, { filterData }) => {\n      console.log('onSubmit', filterData(myFilter))\n    }}\n  >\n    <Iterate.Array path=\"/myList\">\n      <Field.String itemPath=\"/foo\" label=\"Foo no. {itemNr}\" />\n      <Field.String itemPath=\"/bar\" label=\"Bar no. {itemNr}\" />\n    </Iterate.Array>\n  </Form.Handler>,\n)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Instead of ",(0,a.jsx)(n.code,{children:"false"})," you can provide a function that returns ",(0,a.jsx)(n.code,{children:"false"})," based on your logic."]})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(i,e)})):i(e)}},40730:function(e,n,t){t.r(n),t.d(n,{Default:function(){return i}});var a=t(64368),r=t(52322);const i=()=>(0,r.jsx)(a.Z,{noInline:!0,children:'const MyForm = () => {\n  const { count } = Iterate.useCount(\'myForm\')\n  return (\n    <Form.Handler\n      defaultData={{\n        myList: [\'Item 1\'],\n      }}\n      id="myForm"\n    >\n      <Card stack>\n        <Iterate.Array path="/myList" placeholder={<>Empty list</>}>\n          <Iterate.AnimatedContainer title="Title {itemNr}">\n            <Field.String label="Label" itemPath="/" />\n\n            <Iterate.Toolbar>\n              <Iterate.RemoveButton />\n            </Iterate.Toolbar>\n          </Iterate.AnimatedContainer>\n        </Iterate.Array>\n\n        <Iterate.PushButton\n          path="/myList"\n          pushValue={\'Item \' + String(count(\'/myList\') + 1)}\n          text="Add new item"\n        />\n      </Card>\n    </Form.Handler>\n  )\n}\nrender(<MyForm />)\n'})},22939:function(e,n,t){t.r(n),t.d(n,{AnimatedContainer:function(){return o.Default},ArrayFromFormHandler:function(){return x},DynamicPathValue:function(){return f},ObjectItems:function(){return c},PrimitiveItemsFields:function(){return s},PrimitiveItemsValues:function(){return l},RenderPropsObjectItems:function(){return u},RenderPropsPrimitiveItems:function(){return h},ValueComposition:function(){return d},ViewAndEditContainer:function(){return p},WithTable:function(){return m},WithVisibility:function(){return j}});var a=t(64368),r=t(95597),i=t(52322),o=t(40730);const s=()=>(0,i.jsx)(a.Z,{children:"<Iterate.Array\n  value={['Iron Man', 'Captain America', 'The Hulk']}\n  onChange={console.log}\n>\n  <Field.String itemPath=\"/\" />\n</Iterate.Array>\n"}),l=()=>(0,i.jsx)(a.Z,{"data-visual-test":"primitive-element-values",children:"<Value.SummaryList>\n  <Iterate.Array value={['Iron Man', 'Captain America', 'The Hulk']}>\n    <Value.String itemPath=\"/\" />\n  </Iterate.Array>\n</Value.SummaryList>\n"}),d=()=>(0,i.jsx)(a.Z,{children:"<Value.Composition>\n  <Iterate.Array\n    value={[\n      {\n        label: 'Label A',\n        value: 'value 1',\n      },\n      {\n        label: 'Label B',\n        value: 'value 2',\n      },\n    ]}\n  >\n    <Value.String\n      label={<Value.String itemPath=\"/label\" />}\n      itemPath=\"/value\"\n    />\n  </Iterate.Array>\n</Value.Composition>\n"}),m=()=>(0,i.jsx)(a.Z,{children:"<Table>\n  <thead>\n    <Tr>\n      <Th>Name</Th>\n      <Th>Age</Th>\n    </Tr>\n  </thead>\n  <tbody>\n    <Iterate.Array\n      withoutFlex\n      value={[\n        {\n          name: 'Iron Man',\n          age: 45,\n        },\n        {\n          name: 'Captain America',\n          age: 123,\n        },\n        {\n          name: 'The Hulk',\n          age: 3337,\n        },\n      ]}\n    >\n      <Tr>\n        <Td>\n          <Value.Name.Last itemPath=\"/name\" />\n        </Td>\n        <Td>\n          <Value.Number itemPath=\"/age\" />\n        </Td>\n      </Tr>\n    </Iterate.Array>\n  </tbody>\n</Table>\n"}),c=()=>(0,i.jsx)(a.Z,{scope:{Value:r},children:"<Iterate.Array\n  value={[\n    {\n      accountName: 'Brukskonto',\n      accountNumber: '90901134567',\n    },\n    {\n      accountName: 'Sparekonto',\n      accountNumber: '90901156789',\n    },\n  ]}\n  onChange={(value) => console.log('onChange', value)}\n>\n  <Field.Composition>\n    <Field.BankAccountNumber itemPath=\"/accountNumber\" />\n    <Field.String label=\"Account name\" itemPath=\"/accountName\" />\n  </Field.Composition>\n</Iterate.Array>\n"}),h=()=>(0,i.jsx)(a.Z,{children:"<Iterate.Array\n  value={['foo', 'bar']}\n  onChange={(value) => console.log('onChange', value)}\n>\n  {(elementValue) => <Field.String value={elementValue} />}\n</Iterate.Array>\n"}),u=()=>(0,i.jsx)(a.Z,{children:"<Iterate.Array\n  value={[\n    {\n      num: 1,\n      txt: 'One',\n    },\n    {\n      num: 2,\n      txt: 'Two',\n    },\n  ]}\n  onChange={(value) => console.log('onChange', value)}\n>\n  {({ num, txt }) => (\n    <Field.Composition width=\"large\">\n      <Field.Number value={num} width=\"small\" />\n      <Field.String value={txt} width={false} />\n    </Field.Composition>\n  )}\n</Iterate.Array>\n"}),x=()=>(0,i.jsx)(a.Z,{"data-visual-test":"animated-container",children:'<Form.Handler\n  data={{\n    avengers: [\n      {\n        nickname: \'Iron Man\',\n        firstName: \'Tony\',\n        lastName: \'Stark\',\n      },\n      {\n        nickname: \'Captain America\',\n        firstName: \'Steve\',\n        lastName: \'Rogers\',\n      },\n    ],\n  }}\n  onChange={(data) => console.log(\'DataContext/onChange\', data)}\n>\n  <Flex.Vertical>\n    <Form.MainHeading>Avengers</Form.MainHeading>\n\n    <Card stack>\n      <Iterate.Array\n        path="/avengers"\n        onChange={(value) => console.log(\'Iterate/onChange\', value)}\n      >\n        <Iterate.AnimatedContainer\n          title={\n            <Value.String\n              label={false}\n              itemPath="/nickname"\n              placeholder="A Nick name"\n            />\n          }\n        >\n          <Field.Name\n            itemPath="/nickname"\n            width="medium"\n            label="Nick name"\n          />\n\n          <Field.Composition>\n            <Field.Name.First itemPath="/firstName" width="medium" />\n            <Field.Name.Last itemPath="/lastName" width="medium" />\n          </Field.Composition>\n\n          <Iterate.Toolbar>\n            <Iterate.RemoveButton />\n          </Iterate.Toolbar>\n        </Iterate.AnimatedContainer>\n      </Iterate.Array>\n\n      <Iterate.PushButton\n        text="Add another avenger"\n        path="/avengers"\n        pushValue={{}}\n      />\n    </Card>\n  </Flex.Vertical>\n</Form.Handler>\n'}),p=()=>(0,i.jsx)(a.Z,{"data-visual-test":"view-and-edit-container",noInline:!0,children:'const MyEditItemForm = () => {\n  return (\n    <Field.Composition>\n      <Field.Name.First itemPath="/firstName" width="medium" />\n      <Field.Name.Last itemPath="/lastName" width="medium" required />\n    </Field.Composition>\n  )\n}\nconst MyEditItem = () => {\n  return (\n    <Iterate.EditContainer\n      title="Edit account holder {itemNr}"\n      titleWhenNew="New account holder {itemNr}"\n    >\n      <MyEditItemForm />\n    </Iterate.EditContainer>\n  )\n}\nconst MyViewItem = () => {\n  const item = Iterate.useItem()\n  console.log(\'index:\', item.index)\n  return (\n    <Iterate.ViewContainer title="Account holder {itemNr}">\n      <Value.SummaryList>\n        <Value.Name.First itemPath="/firstName" showEmpty />\n        <Value.Name.Last itemPath="/lastName" placeholder="-" />\n      </Value.SummaryList>\n    </Iterate.ViewContainer>\n  )\n}\nconst CreateNewEntry = () => {\n  return (\n    <Iterate.PushContainer\n      path="/accounts"\n      title="New account holder"\n      openButton={\n        <Iterate.PushContainer.OpenButton text="Add another account" />\n      }\n      showOpenButtonWhen={(list) => list.length > 0}\n    >\n      <MyEditItemForm />\n    </Iterate.PushContainer>\n  )\n}\nconst MyForm = () => {\n  return (\n    <Form.Handler\n      data={{\n        accounts: [\n          {\n            firstName: \'Tony\',\n            lastName: undefined, // initiate error\n          },\n        ],\n      }}\n      onChange={(data) => console.log(\'DataContext/onChange\', data)}\n      onSubmit={async (data) => console.log(\'onSubmit\', data)}\n    >\n      <Flex.Vertical>\n        <Form.MainHeading>Accounts</Form.MainHeading>\n\n        <Card stack>\n          <Iterate.Array path="/accounts">\n            <MyViewItem />\n            <MyEditItem />\n          </Iterate.Array>\n\n          <CreateNewEntry />\n        </Card>\n\n        <Form.SubmitButton variant="send" />\n      </Flex.Vertical>\n    </Form.Handler>\n  )\n}\nrender(<MyForm />)\n'}),f=()=>(0,i.jsx)(a.Z,{children:'<Form.Handler\n  defaultData={{\n    count: 0,\n  }}\n>\n  <Flex.Stack>\n    <Field.Number path="/count" width="small" showStepControls />\n    <Iterate.Array\n      path="/items"\n      countPath="/count"\n      countPathTransform={({ value, index }) =>\n        Object.prototype.hasOwnProperty.call(value || {}, \'myObject\')\n          ? value\n          : {\n              myObject: index,\n            }\n      }\n    >\n      <Field.Number itemPath="/myObject" label="Item no. {itemNr}" />\n    </Iterate.Array>\n  </Flex.Stack>\n</Form.Handler>\n'}),j=()=>(0,i.jsx)(a.Z,{children:'<Form.Handler>\n  <Iterate.Array path="/myList" value={[{}]}>\n    <Flex.Stack>\n      <Field.Name.First className="firstName" itemPath="/firstName" />\n\n      <Form.Visibility\n        animate\n        visibleWhen={{\n          itemPath: \'/firstName\',\n          hasValue: (value) => Boolean(value),\n        }}\n      >\n        <Field.Name.Last className="lastName" itemPath="/lastName" />\n      </Form.Visibility>\n    </Flex.Stack>\n  </Iterate.Array>\n</Form.Handler>\n'})}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-iterate-array-mdx-11d1a598a382d311af74.js.map