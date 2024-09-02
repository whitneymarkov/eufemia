"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[47555,60520,10193],{23137:function(n,e,t){t.r(e);var a=t(52322),r=t(45392),o=t(41420),i=t(35177);function s(n){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.default,{}),"\n",(0,a.jsx)(i.default,{})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,a.jsx)(e,Object.assign({},n,{children:(0,a.jsx)(s,n)})):s()}},35177:function(n,e,t){t.r(e),t.d(e,{default:function(){return u}});var a={};t.r(a),t.d(a,{Default:function(){return s},FilterData:function(){return c},Update:function(){return d},WithoutFormHandler:function(){return l}});var r=t(52322),o=t(45392),i=(t(2784),t(64368));function s(){return(0,r.jsx)(i.Z,{noInline:!0,children:"const existingData = {\n  foo: 'bar',\n}\nconst Component = () => {\n  const { data } = Form.useData('default-id', existingData)\n  return (\n    <Form.Handler id=\"default-id\">\n      <Field.String path=\"/foo\" label={data.foo} />\n    </Form.Handler>\n  )\n}\nrender(<Component />)\n"})}function d(){return(0,r.jsx)(i.Z,{noInline:!0,children:"const existingData = {\n  count: 1,\n}\nconst Component = () => {\n  const { data, update } = Form.useData('update-id', existingData)\n  const increment = React.useCallback(() => {\n    update('/count', (count) => {\n      return count + 1\n    })\n  }, [update])\n  return (\n    <Form.Handler id=\"update-id\">\n      <Flex.Horizontal>\n        <Field.Number path=\"/count\" showStepControls />\n        <Form.SubmitButton\n          onClick={increment}\n          text={'Increment ' + data.count}\n        />\n      </Flex.Horizontal>\n    </Form.Handler>\n  )\n}\nrender(<Component />)\n"})}function l(){return(0,r.jsx)(i.Z,{noInline:!0,children:"const existingData = {\n  count: 1,\n}\nconst Component = () => {\n  const { data, update } = Form.useData('independent-id', existingData)\n  const increment = React.useCallback(() => {\n    update('/count', (count) => {\n      return count + 1\n    })\n  }, [update])\n  return (\n    <Button\n      on_click={increment}\n      text={'Increment ' + data.count}\n      variant=\"secondary\"\n    />\n  )\n}\nrender(\n  <Flex.Vertical>\n    <Component />\n    <Component />\n  </Flex.Vertical>,\n)\n"})}function c(){return(0,r.jsx)(i.Z,{noInline:!0,children:'const filterDataPaths = {\n  \'/isVisible\': false,\n  \'/mySelection\': ({ data }) => data.isVisible,\n  \'/myString\': ({ data }) => {\n    return data.isVisible && data.mySelection === \'more\'\n  },\n}\nconst MyForm = () => {\n  return (\n    <Form.Handler\n      defaultData={{\n        isVisible: false,\n        mySelection: \'less\',\n        myString: \'foo\',\n      }}\n    >\n      <Flex.Stack>\n        <Field.Boolean\n          label="Toggle visible"\n          variant="button"\n          path="/isVisible"\n          data-exclude-field\n        />\n        <Form.Visibility pathTrue="/isVisible" animate>\n          <Field.Selection\n            label="Choose"\n            variant="radio"\n            path="/mySelection"\n            value="less"\n          >\n            <Field.Option value="less" title="Less" />\n            <Field.Option value="more" title="More" />\n          </Field.Selection>\n\n          <Form.Visibility\n            visibleWhen={{\n              path: \'/mySelection\',\n              hasValue: \'more\',\n            }}\n            animate\n          >\n            <Field.String label="My String" path="/myString" value="foo" />\n          </Form.Visibility>\n        </Form.Visibility>\n\n        <Output />\n      </Flex.Stack>\n    </Form.Handler>\n  )\n}\nconst Output = () => {\n  const { data, filterData } = Form.useData()\n  return (\n    <Section\n      element="output"\n      backgroundColor="sand-yellow"\n      style={{\n        maxWidth: \'80vw\',\n      }}\n      innerSpace\n    >\n      <ScrollView>\n        <pre>\n          Filtered: <br />\n          {JSON.stringify(filterData(filterDataPaths), null, 2)}\n        </pre>\n        <pre>\n          All data: <br />\n          {JSON.stringify(data, null, 2)}\n        </pre>\n      </ScrollView>\n    </Section>\n  )\n}\nrender(<MyForm />)\n'})}function h(n){const e=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code"},(0,o.ah)(),n.components);return a||m("Examples",!1),s||m("Examples.Default",!0),c||m("Examples.FilterData",!0),d||m("Examples.Update",!0),l||m("Examples.WithoutFormHandler",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{children:"Demos"}),"\n",(0,r.jsx)(e.h3,{children:"Set data outside of the form"}),"\n",(0,r.jsx)(s,{}),"\n",(0,r.jsx)(e.h3,{children:"Update the data outside of the form"}),"\n",(0,r.jsxs)(e.p,{children:["The update function ",(0,r.jsx)(e.code,{children:"update('/count', (count) => count + 1)"})," has TypeScript support and returns the correct type for ",(0,r.jsx)(e.code,{children:"count"})," (number)."]}),"\n",(0,r.jsx)(d,{}),"\n",(0,r.jsx)(e.h3,{children:"Shared state without a Form.Handler"}),"\n",(0,r.jsx)(l,{}),"\n",(0,r.jsx)(e.h3,{children:"Filter your data"}),"\n",(0,r.jsxs)(e.p,{children:["This example uses the ",(0,r.jsx)(e.code,{children:"keepInDOM"})," property to keep the field in the DOM."]}),"\n",(0,r.jsxs)(e.p,{children:["But with the ",(0,r.jsx)(e.code,{children:"filterData"})," method we can filter out all fields that have the ",(0,r.jsx)(e.code,{children:"data-exclude-field"})," attribute."]}),"\n",(0,r.jsxs)(e.p,{children:["In this demo, the ",(0,r.jsx)(e.code,{children:"data-exclude-field"})," attribute is added when the field are hidden."]}),"\n",(0,r.jsx)(c,{})]})}var u=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,o.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(h,n)})):h(n)};function m(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},41420:function(n,e,t){t.r(e);var a=t(52322),r=t(45392);function o(n){const e=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",a:"a",h3:"h3",ol:"ol",li:"li",strong:"strong"},(0,r.ah)(),n.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{children:"Description"}),"\n",(0,a.jsxs)(e.p,{children:["With the ",(0,a.jsx)(e.code,{children:"Form.useData"})," hook, you can manage your form data from nested components and outside the form context (",(0,a.jsx)(e.code,{children:"Form.Handler"}),")."]}),"\n",(0,a.jsx)(e.p,{children:"The hook returns an object with the following properties:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",children:"const {\n  getValue, // Method to get a single value\n  update, // Method to update a single value\n  set, // Method to set the whole dataset\n  data, // The whole dataset (unvalidated)\n  filterData, // Method to filter data with your own logic\n} = Form.useData('optional-id')\n"})}),"\n",(0,a.jsx)(e.h2,{children:"Usage"}),"\n",(0,a.jsxs)(e.p,{children:["You can use the ",(0,a.jsx)(e.code,{children:"Form.useData"})," hook with or without an ",(0,a.jsx)(e.code,{children:"id"})," (string) property, which is optional and can be used to link the data to a specific ",(0,a.jsx)(e.a,{href:"/uilib/extensions/forms/Form/Handler/",children:"Form.Handler"})," component."]}),"\n",(0,a.jsxs)(e.h3,{children:["Without an ",(0,a.jsx)(e.code,{children:"id"})," property"]}),"\n",(0,a.jsxs)(e.p,{children:['Here "Component" is rendered inside the ',(0,a.jsx)(e.code,{children:"Form.Handler"})," component and does not need an ",(0,a.jsx)(e.code,{children:"id"})," property to access the form data:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",children:"import { Form } from '@dnb/eufemia/extensions/forms'\n\nfunction MyForm() {\n  return (\n    <Form.Handler>\n      ...\n      <Component />\n      ...\n    </Form.Handler>\n  )\n}\n\nfunction Component() {\n  const { data } = Form.useData()\n}\n"})}),"\n",(0,a.jsxs)(e.h3,{children:["With an ",(0,a.jsx)(e.code,{children:"id"})," property"]}),"\n",(0,a.jsxs)(e.p,{children:['While in this example, "Component" is outside the ',(0,a.jsx)(e.code,{children:"Form.Handler"})," context, but linked together via the ",(0,a.jsx)(e.code,{children:"id"})," (string) property:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",children:"import { Form } from '@dnb/eufemia/extensions/forms'\n\nfunction MyForm() {\n  return (\n    <>\n      <Form.Handler id=\"unique\">...</Form.Handler>\n      <Component />\n    </>\n  )\n}\n\nfunction Component() {\n  const { data } = Form.useData('unique')\n}\n"})}),"\n",(0,a.jsx)(e.p,{children:"This is beneficial when you need to utilize the form data in other places within your application."}),"\n",(0,a.jsx)(e.h3,{children:"TypeScript support"}),"\n",(0,a.jsx)(e.p,{children:"You can define the TypeScript type structure for your data like so:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",children:"type Data = { foo: string }\nconst { data } = Form.useData<Data>('unique')\n"})}),"\n",(0,a.jsx)(e.h3,{children:"Select a single value"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",children:"import { Form } from '@dnb/eufemia/extensions/forms'\n\nfunction MyComponent() {\n  const { getValue } = Form.useData()\n\n  const value = getValue('/foo')\n}\n"})}),"\n",(0,a.jsx)(e.h2,{children:"Update data"}),"\n",(0,a.jsxs)(e.p,{children:["If you need to update the data, you can use the ",(0,a.jsx)(e.code,{children:"update"})," method."]}),"\n",(0,a.jsxs)(e.p,{children:["It takes a path (",(0,a.jsx)(e.a,{href:"/uilib/extensions/forms/getting-started/#what-is-a-json-pointer",children:"JSON Pointer"}),") and a callback function. The callback function receives the existing value as the first argument, and the second argument is the path itself. The callback function must return the new value."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",children:"import { Form } from '@dnb/eufemia/extensions/forms'\n\nfunction Component() {\n  const { update } = Form.useData()\n\n  useEffect(() => {\n    update('/foo', 'new value')\n\n    // - or with a callback function to get the existing value\n    update('/foo', (existingValue) => existingValue + 'new value')\n  }, [])\n}\n"})}),"\n",(0,a.jsx)(e.h2,{children:"Extend the whole data set"}),"\n",(0,a.jsxs)(e.p,{children:["With the ",(0,a.jsx)(e.code,{children:"set"})," method, you can extend the data set. Existing data paths will be overwritten."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",children:"import { Form, Field } from '@dnb/eufemia/extensions/forms'\n\nfunction MyForm() {\n  const { data, set } = Form.useData('unique')\n\n  useEffect(() => {\n    set({ foo: 'bar' })\n  }, [])\n\n  return (\n    <Form.Handler id=\"unique\">\n      <Field.String path=\"/foo\" />\n    </Form.Handler>\n  )\n}\n"})}),"\n",(0,a.jsx)(e.h2,{children:"Filter data"}),"\n",(0,a.jsxs)(e.p,{children:["You can use the ",(0,a.jsx)(e.code,{children:"filterData"})," method to filter your data. Check out ",(0,a.jsx)(e.a,{href:"#filter-your-data",children:"the example below"}),"."]}),"\n",(0,a.jsxs)(e.p,{children:["You simply give it the ",(0,a.jsx)(e.a,{href:"/uilib/extensions/forms/Form/Handler/demos/#filter-your-data",children:"same kind of filter"})," as you would within the ",(0,a.jsx)(e.code,{children:"onSubmit"})," event callback."]}),"\n",(0,a.jsx)(e.p,{children:"The callback function receives the following arguments:"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"path"})," as the first argument."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"value"})," as the second argument."]}),"\n",(0,a.jsxs)(e.li,{children:["The field ",(0,a.jsx)(e.code,{children:"properties"})," (props) as the third argument."]}),"\n",(0,a.jsx)(e.li,{children:"The fourth argument is an object with the internal state of the field, like the error state."}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:["The callback function should return a ",(0,a.jsx)(e.code,{children:"boolean"})," or ",(0,a.jsx)(e.code,{children:"undefined"}),". Return ",(0,a.jsx)(e.code,{children:"false"})," to exclude an entry."]}),"\n",(0,a.jsx)(e.p,{children:"It returns the filtered form data."}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"Tip:"})," Depending on your use case – and instead of ",(0,a.jsx)(e.code,{children:"disabled"})," – you may rather use a ",(0,a.jsx)(e.code,{children:"data-*"})," attribute on your field (e.g. ",(0,a.jsx)(e.code,{children:"data-exclude-field"}),") to filter the field out of the data set."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",children:"const filterDataHandler = ({ path, value, data, props, internal }) => {\n  if (props['data-exclude-field']) {\n    return false\n  }\n}\n\nconst MyForm = () => {\n  const { filterData } = Form.useData('my-form')\n  const filteredData = filterData(filterDataHandler)\n\n  return (\n    <Form.Handler id=\"my-form\">\n      <Field.String path=\"/foo\" data-exclude-field />\n    </Form.Handler>\n  )\n}\n"})}),"\n",(0,a.jsxs)(e.p,{children:["The ",(0,a.jsx)(e.code,{children:"internal"})," parameter contains ",(0,a.jsx)(e.code,{children:"{ error: Error | undefined }"})," you can utilize if needed."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",children:"const filterDataHandler = ({ path, value, data, props, internal }) => {\n  return !(internal.error instanceof Error)\n}\n"})}),"\n",(0,a.jsx)(e.h2,{children:"Initial data"}),"\n",(0,a.jsxs)(e.p,{children:["You decide where and when you want to provide the initial ",(0,a.jsx)(e.code,{children:"data"})," to the form. It can be done via the ",(0,a.jsx)(e.code,{children:"Form.Handler"})," component, or via the ",(0,a.jsx)(e.code,{children:"Form.useData"})," Hook or ",(0,a.jsx)(e.a,{href:"/uilib/extensions/forms/Form/setData/",children:"Form.setData"})," method – or even in each Field, with the value property."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",children:"import { Form, Field } from '@dnb/eufemia/extensions/forms'\n\nconst initialData = { foo: 'bar' }\n\nfunction MyForm() {\n  return (\n    <Form.Handler id=\"unique\" data={initialData}>\n      <Field.String path=\"/foo\" />\n    </Form.Handler>\n  )\n}\n\nfunction ComponentA() {\n  Form.useData('unique', { foo: 'bar' })\n}\n\nfunction ComponentB() {\n  const { set } = Form.useData('unique')\n\n  useEffect(() => {\n    set({ foo: 'bar' })\n  }, [])\n}\n"})}),"\n",(0,a.jsx)(e.h2,{children:"Validation"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"tl;dr:"})," the ",(0,a.jsx)(e.code,{children:"useData"})," hook returns unvalidated data."]}),"\n",(0,a.jsxs)(e.p,{children:["When you use an async ",(0,a.jsx)(e.code,{children:"onChange"})," or ",(0,a.jsx)(e.code,{children:"validator"}),' event handler on a filed, it will delay the "submitted" value, because of its async nature.']}),"\n",(0,a.jsxs)(e.p,{children:["That means, if you want to access the value of a field immediately, you can use the ",(0,a.jsx)(e.code,{children:"useData"})," hook for that, as it always returns unvalidated data, in sync."]})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,a.jsx)(e,Object.assign({},n,{children:(0,a.jsx)(o,n)})):o(n)}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-form-use-data-mdx-633dcde777118fd59268.js.map