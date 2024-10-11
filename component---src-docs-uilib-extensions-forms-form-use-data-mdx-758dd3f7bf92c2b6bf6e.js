"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[47555,60520,10193],{23137:function(e,n,t){t.r(n);var r=t(52322),i=t(45392),o=t(41420),a=t(35177);function s(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.default,{}),"\n",(0,r.jsx)(a.default,{})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(s,e)})):s()}},35177:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r={};t.r(r),t.d(r,{Default:function(){return l},FilterData:function(){return u},Update:function(){return d},VisibleData:function(){return h},WithoutFormHandler:function(){return c}});var i=t(52322),o=t(45392),a=(t(2784),t(64368)),s=t(4902);function l(){return(0,i.jsx)(a.Z,{noInline:!0,children:"const existingData = {\n  foo: 'bar',\n}\nconst Component = () => {\n  const { data } = Form.useData('default-id', existingData)\n  return (\n    <Form.Handler id=\"default-id\">\n      <Field.String path=\"/foo\" label={data.foo} />\n    </Form.Handler>\n  )\n}\nrender(<Component />)\n"})}function d(){return(0,i.jsx)(a.Z,{noInline:!0,children:"const existingData = {\n  count: 1,\n}\nconst Component = () => {\n  const { data, update } = Form.useData('update-id', existingData)\n  const increment = React.useCallback(() => {\n    update('/count', (count) => {\n      return count + 1\n    })\n  }, [update])\n  return (\n    <Form.Handler id=\"update-id\">\n      <Flex.Horizontal>\n        <Field.Number path=\"/count\" showStepControls />\n        <Form.SubmitButton\n          onClick={increment}\n          text={'Increment ' + data.count}\n        />\n      </Flex.Horizontal>\n    </Form.Handler>\n  )\n}\nrender(<Component />)\n"})}function c(){return(0,i.jsx)(a.Z,{noInline:!0,children:"const existingData = {\n  count: 1,\n}\nconst Component = () => {\n  const { data, update } = Form.useData('independent-id', existingData)\n  const increment = React.useCallback(() => {\n    update('/count', (count) => {\n      return count + 1\n    })\n  }, [update])\n  return (\n    <Button\n      on_click={increment}\n      text={'Increment ' + data.count}\n      variant=\"secondary\"\n    />\n  )\n}\nrender(\n  <Flex.Vertical>\n    <Component />\n    <Component />\n  </Flex.Vertical>,\n)\n"})}function u(){return(0,i.jsx)(a.Z,{scope:{Tools:s},noInline:!0,children:'const filterDataPaths = {\n  \'/isVisible\': false,\n  \'/mySelection\': ({ data }) => data.isVisible,\n  \'/myString\': ({ data }) => {\n    return data.isVisible && data.mySelection === \'more\'\n  },\n}\nconst MyForm = () => {\n  return (\n    <Form.Handler\n      defaultData={{\n        isVisible: false,\n        mySelection: \'less\',\n        myString: \'foo\',\n      }}\n    >\n      <Flex.Stack>\n        <Field.Boolean\n          label="Toggle visible"\n          variant="button"\n          path="/isVisible"\n          data-exclude-field\n        />\n        <Form.Visibility pathTrue="/isVisible" animate>\n          <Field.Selection\n            label="Choose"\n            variant="radio"\n            path="/mySelection"\n            value="less"\n          >\n            <Field.Option value="less" title="Less" />\n            <Field.Option value="more" title="More" />\n          </Field.Selection>\n\n          <Form.Visibility\n            visibleWhen={{\n              path: \'/mySelection\',\n              hasValue: \'more\',\n            }}\n            animate\n          >\n            <Field.String label="My String" path="/myString" value="foo" />\n          </Form.Visibility>\n        </Form.Visibility>\n\n        <Output />\n      </Flex.Stack>\n    </Form.Handler>\n  )\n}\nconst Output = () => {\n  const { data, filterData } = Form.useData()\n  return (\n    <>\n      <Tools.Log data={filterData(filterDataPaths)} label="Filtered:" />\n      <Tools.Log data={data} label="All data:" />\n    </>\n  )\n}\nrender(<MyForm />)\n'})}const h=()=>(0,i.jsx)(a.Z,{noInline:!0,children:'const MyForm = () => {\n  const { data, reduceToVisibleFields } = Form.useData()\n\n  // Use useEffect to ensure we get the latest data\n  React.useEffect(() => {\n    console.log(\n      \'Result of reduceToVisibleFields:\n\',\n      reduceToVisibleFields(data, {\n        removePaths: [\'/isVisible\'],\n      }),\n    )\n  }, [data, reduceToVisibleFields])\n  return (\n    <Form.Handler>\n      <Flex.Stack>\n        <Field.Boolean\n          label="Show radio buttons"\n          variant="button"\n          path="/isVisible"\n          defaultValue={true}\n        />\n\n        <Form.Visibility pathTrue="/isVisible" animate>\n          <Field.Selection\n            label="Radio buttons"\n            variant="radio"\n            path="/myValue"\n            defaultValue="foo"\n          >\n            <Field.Option value="foo" title="Foo" />\n            <Field.Option value="bar" title="Bar" />\n          </Field.Selection>\n        </Form.Visibility>\n\n        <Value.Selection path="/myValue" inheritLabel inheritVisibility />\n      </Flex.Stack>\n    </Form.Handler>\n  )\n}\nrender(<MyForm />)\n'});function f(e){const n=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code"},(0,o.ah)(),e.components);return r||m("Examples",!1),l||m("Examples.Default",!0),u||m("Examples.FilterData",!0),d||m("Examples.Update",!0),h||m("Examples.VisibleData",!0),c||m("Examples.WithoutFormHandler",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{children:"Demos"}),"\n",(0,i.jsx)(n.h3,{children:"Set data outside of the form"}),"\n",(0,i.jsx)(l,{}),"\n",(0,i.jsx)(n.h3,{children:"Update the data outside of the form"}),"\n",(0,i.jsxs)(n.p,{children:["The update function ",(0,i.jsx)(n.code,{children:"update('/count', (count) => count + 1)"})," has TypeScript support and returns the correct type for ",(0,i.jsx)(n.code,{children:"count"})," (number)."]}),"\n",(0,i.jsx)(d,{}),"\n",(0,i.jsx)(n.h3,{children:"Shared state without a Form.Handler"}),"\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(n.h3,{children:"Get only data of visible fields"}),"\n",(0,i.jsxs)(n.p,{children:["You can use the ",(0,i.jsx)(n.code,{children:"reduceToVisibleFields"})," function to get only the data of visible (mounted) fields."]}),"\n",(0,i.jsx)(h,{}),"\n",(0,i.jsx)(n.h3,{children:"Filter your data"}),"\n",(0,i.jsxs)(n.p,{children:["This example uses the ",(0,i.jsx)(n.code,{children:"keepInDOM"})," property to keep the field in the DOM."]}),"\n",(0,i.jsxs)(n.p,{children:["But with the ",(0,i.jsx)(n.code,{children:"filterData"})," method we can filter out all fields that have the ",(0,i.jsx)(n.code,{children:"data-exclude-field"})," attribute."]}),"\n",(0,i.jsxs)(n.p,{children:["In this demo, the ",(0,i.jsx)(n.code,{children:"data-exclude-field"})," attribute is added when the field are hidden."]}),"\n",(0,i.jsx)(u,{})]})}var p=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(f,e)})):f(e)};function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},41420:function(e,n,t){t.r(n);var r=t(52322),i=t(45392);function o(e){const n=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",a:"a",h3:"h3",ol:"ol",strong:"strong"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["With the ",(0,r.jsx)(n.code,{children:"Form.useData"})," hook, you can manage your form data from nested components and outside the form context (",(0,r.jsx)(n.code,{children:"Form.Handler"}),")."]}),"\n",(0,r.jsx)(n.p,{children:"The hook returns an object with the following properties:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Form } from '@dnb/eufemia/extensions/forms'\n\nfunction MyComponent() {\n  const {\n    getValue,\n    update,\n    remove,\n    set,\n    data,\n    filterData,\n    reduceToVisibleFields,\n  } = Form.useData()\n\n  return <>MyComponent</>\n}\n\nrender(\n  <Form.Handler>\n    <MyComponent />\n  </Form.Handler>,\n)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"getValue"})," will return the value of the given path."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"update"})," will update the value of the given path."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"remove"})," will remove the given path from the data context (fields will reapply their values afterwards)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"set"})," will set the whole dataset."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"data"})," will return the whole dataset (unvalidated)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"filterData"})," will filter the data based on your own logic."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"reduceToVisibleFields"})," will reduce the given data set to only contain the visible fields (mounted fields)."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:["You can use the ",(0,r.jsx)(n.code,{children:"Form.useData"})," hook with or without an ",(0,r.jsx)(n.code,{children:"id"})," (string) property, which is optional and can be used to link the data to a specific ",(0,r.jsx)(n.a,{href:"/uilib/extensions/forms/Form/Handler/",children:"Form.Handler"})," component."]}),"\n",(0,r.jsxs)(n.h3,{children:["Without an ",(0,r.jsx)(n.code,{children:"id"})," property"]}),"\n",(0,r.jsxs)(n.p,{children:['Here "Component" is rendered inside the ',(0,r.jsx)(n.code,{children:"Form.Handler"})," component and does not need an ",(0,r.jsx)(n.code,{children:"id"})," property to access the form data:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"import { Form } from '@dnb/eufemia/extensions/forms'\n\nfunction MyForm() {\n  return (\n    <Form.Handler>\n      <Component />\n    </Form.Handler>\n  )\n}\n\nfunction Component() {\n  const { data } = Form.useData()\n}\n"})}),"\n",(0,r.jsxs)(n.h3,{children:["With an ",(0,r.jsx)(n.code,{children:"id"})," property"]}),"\n",(0,r.jsxs)(n.p,{children:['While in this example, "Component" is outside the ',(0,r.jsx)(n.code,{children:"Form.Handler"})," context, but linked together via the ",(0,r.jsx)(n.code,{children:"id"})," (string) property:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"import { Form } from '@dnb/eufemia/extensions/forms'\n\nfunction MyForm() {\n  return (\n    <>\n      <Form.Handler id=\"unique\">...</Form.Handler>\n      <Component />\n    </>\n  )\n}\n\nfunction Component() {\n  const { data } = Form.useData('unique')\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"This is beneficial when you need to utilize the form data in other places within your application."}),"\n",(0,r.jsx)(n.h3,{children:"TypeScript support"}),"\n",(0,r.jsx)(n.p,{children:"You can define the TypeScript type structure for your data like so:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"type Data = { foo: string }\nconst { data } = Form.useData<Data>('unique')\n"})}),"\n",(0,r.jsx)(n.h3,{children:"Select a single value"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"import { Form } from '@dnb/eufemia/extensions/forms'\n\nfunction MyComponent() {\n  const { getValue } = Form.useData()\n\n  const value = getValue('/foo')\n}\n"})}),"\n",(0,r.jsx)(n.h2,{children:"Update data"}),"\n",(0,r.jsxs)(n.p,{children:["If you need to update the data, you can use the ",(0,r.jsx)(n.code,{children:"update"})," method."]}),"\n",(0,r.jsxs)(n.p,{children:["It takes a path (",(0,r.jsx)(n.a,{href:"/uilib/extensions/forms/getting-started/#what-is-a-json-pointer",children:"JSON Pointer"}),") and a callback function. The callback function receives the existing value as the first argument, and the second argument is the path itself. The callback function must return the new value."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"import { Form } from '@dnb/eufemia/extensions/forms'\n\nfunction Component() {\n  const { update } = Form.useData()\n\n  useEffect(() => {\n    update('/foo', 'new value')\n\n    // - or with a callback function to get the existing value\n    update('/foo', (existingValue) => existingValue + 'new value')\n  }, [])\n}\n"})}),"\n",(0,r.jsx)(n.h2,{children:"Extend the whole data set"}),"\n",(0,r.jsxs)(n.p,{children:["With the ",(0,r.jsx)(n.code,{children:"set"})," method, you can extend the data set. Existing data paths will be overwritten."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"import { Form, Field } from '@dnb/eufemia/extensions/forms'\n\nfunction MyForm() {\n  const { data, set } = Form.useData('unique')\n\n  useEffect(() => {\n    set({ foo: 'bar' })\n  }, [])\n\n  return (\n    <Form.Handler id=\"unique\">\n      <Field.String path=\"/foo\" />\n    </Form.Handler>\n  )\n}\n"})}),"\n",(0,r.jsx)(n.h2,{children:"Visible data"}),"\n",(0,r.jsxs)(n.p,{children:["You can use the ",(0,r.jsx)(n.code,{children:"reduceToVisibleFields"})," function to get only the data of visible (mounted) fields. Check out the ",(0,r.jsx)(n.a,{href:"/uilib/extensions/forms/Form/Handler/demos/#visible-data",children:"example"})," in the demo section."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Form } from '@dnb/eufemia/extensions/forms'\n\nfunction MyComponent() {\n  const { data, reduceToVisibleFields } = Form.useData()\n\n  // Use useEffect to ensure we get the latest data\n  React.useEffect(() => {\n    console.log(reduceToVisibleFields(data))\n  }, [data])\n\n  return <>MyComponent</>\n}\n\nrender(\n  <Form.Handler>\n    <MyComponent />\n  </Form.Handler>,\n)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In addition, you can include or exclude paths by using the ",(0,r.jsx)(n.code,{children:"keepPaths"})," and ",(0,r.jsx)(n.code,{children:"removePaths"})," options."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"reduceToVisibleFields(data, {\n  keepPaths: ['/foo'],\n  removePaths: ['/bar'],\n})\n"})}),"\n",(0,r.jsx)(n.h2,{children:"Filter data"}),"\n",(0,r.jsxs)(n.p,{children:["You can use the ",(0,r.jsx)(n.code,{children:"filterData"})," function to filter your data. Check out ",(0,r.jsx)(n.a,{href:"#filter-your-data",children:"the example below"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["You simply give it the ",(0,r.jsx)(n.a,{href:"/uilib/extensions/forms/Form/Handler/demos/#filter-your-data",children:"same kind of filter"})," as you would within the ",(0,r.jsx)(n.code,{children:"onSubmit"})," event callback."]}),"\n",(0,r.jsx)(n.p,{children:"The callback function receives the following arguments:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"path"})," as the first argument."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"value"})," as the second argument."]}),"\n",(0,r.jsxs)(n.li,{children:["The field ",(0,r.jsx)(n.code,{children:"properties"})," (props) as the third argument."]}),"\n",(0,r.jsx)(n.li,{children:"The fourth argument is an object with the internal state of the field, like the error state."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The callback function should return a ",(0,r.jsx)(n.code,{children:"boolean"})," or ",(0,r.jsx)(n.code,{children:"undefined"}),". Return ",(0,r.jsx)(n.code,{children:"false"})," to exclude an entry."]}),"\n",(0,r.jsx)(n.p,{children:"It returns the filtered form data."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Tip:"})," Depending on your use case – and instead of ",(0,r.jsx)(n.code,{children:"disabled"})," – you may rather use a ",(0,r.jsx)(n.code,{children:"data-*"})," attribute on your field (e.g. ",(0,r.jsx)(n.code,{children:"data-exclude-field"}),") to filter the field out of the data set."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"const filterDataHandler = ({ path, value, data, props, internal }) => {\n  if (props['data-exclude-field']) {\n    return false\n  }\n}\n\nconst MyForm = () => {\n  const { filterData } = Form.useData('my-form')\n  const filteredData = filterData(filterDataHandler)\n\n  return (\n    <Form.Handler id=\"my-form\">\n      <Field.String path=\"/foo\" data-exclude-field />\n    </Form.Handler>\n  )\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"internal"})," parameter contains ",(0,r.jsx)(n.code,{children:"{ error: Error | undefined }"})," you can utilize if needed."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"const filterDataHandler = ({ path, value, data, props, internal }) => {\n  return !(internal.error instanceof Error)\n}\n"})}),"\n",(0,r.jsx)(n.h2,{children:"Initial data"}),"\n",(0,r.jsxs)(n.p,{children:["You decide where and when you want to provide the initial ",(0,r.jsx)(n.code,{children:"data"})," to the form. It can be done via the ",(0,r.jsx)(n.code,{children:"Form.Handler"})," component, or via the ",(0,r.jsx)(n.code,{children:"Form.useData"})," Hook or ",(0,r.jsx)(n.a,{href:"/uilib/extensions/forms/Form/setData/",children:"Form.setData"})," method – or even in each Field, with the value property."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"import { Form, Field } from '@dnb/eufemia/extensions/forms'\n\nconst initialData = { foo: 'bar' }\n\nfunction MyForm() {\n  return (\n    <Form.Handler id=\"unique\" data={initialData}>\n      <Field.String path=\"/foo\" />\n    </Form.Handler>\n  )\n}\n\nfunction ComponentA() {\n  Form.useData('unique', { foo: 'bar' })\n}\n\nfunction ComponentB() {\n  const { set } = Form.useData('unique')\n\n  useEffect(() => {\n    set({ foo: 'bar' })\n  }, [])\n}\n"})}),"\n",(0,r.jsx)(n.h2,{children:"Validation"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"tl;dr:"})," the ",(0,r.jsx)(n.code,{children:"useData"})," hook returns unvalidated data."]}),"\n",(0,r.jsxs)(n.p,{children:["When you use an async ",(0,r.jsx)(n.code,{children:"onChange"})," or ",(0,r.jsx)(n.code,{children:"validator"}),' event handler on a filed, it will delay the "submitted" value, because of its async nature.']}),"\n",(0,r.jsxs)(n.p,{children:["That means, if you want to access the value of a field immediately, you can use the ",(0,r.jsx)(n.code,{children:"useData"})," hook for that, as it always returns unvalidated data, in sync."]})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(o,e)})):o(e)}},38734:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(84616),i=t(2784),o=t(2394),a=t(21068);const s=["minLength","maxLength","pattern","description","min","max","multipleOf","exclusiveMinimum","exclusiveMaximum"];function l(e){const{generateRef:n,filterData:t,log:l,children:d}=e||{},{fieldPropsRef:c,valuePropsRef:u,data:h,hasContext:f}=(0,i.useContext)(a.Z),p=(0,i.useRef)({});p.current=h;const m=(0,i.useCallback)((()=>{const e=Object.entries((null==c?void 0:c.current)||{}).reduce(((e,n)=>{let[i,a]=n;if(i.startsWith("/")){const n=i.substring(1),l=n.split("/"),d=l.length,c={type:a.valueType||"string"};for(const e of s)a[e]&&(c[e]=a[e]);if(d>1){const n=[""];for(const i of l){n.push(i);const s=n.join("/properties/"),d=n.length-1===l.length,u=o.e$(e,s)?o.U2(e,s):null,h=d?c:u;if(d)!1!==(null==t?void 0:t[s])&&o.t8(e,s,h);else{const n={type:"object",...u},i=[];a.required&&i.push(l.at(-1)),null!=u&&u.required&&i.push.apply(i,(0,r.Z)(u.required)),i.length>0&&(n.required=i),!1!==(null==t?void 0:t[s])&&o.t8(e,s,n)}}}else!1!==(null==t?void 0:t[i])&&o.t8(e.properties,i,c),a.required&&e.required.push(n)}return e}),{type:"object",properties:{},required:[]}),n=Object.entries((null==c?void 0:c.current)||{}).reduce(((e,n)=>{let[t,r]=n;if(t.startsWith("/")){const n={};for(const e in r)void 0!==r[e]&&"function"!=typeof r[e]&&(n[e]=r[e]);o.t8(e,t,n)}return e}),{}),i=Object.entries((null==u?void 0:u.current)||{}).reduce(((e,n)=>{let[t,r]=n;if(t.startsWith("/")){const n={};for(const e in r)void 0!==r[e]&&"function"!=typeof r[e]&&(n[e]=r[e]);o.t8(e,t,n)}return e}),{});return 0===e.required.length&&delete e.required,{schema:e,data:p.current,propsOfFields:n,propsOfValues:i}}),[c,t,u]);return f&&(l&&console.log(m().schema),n&&(n.current=m)),d}},10454:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(2784),i=t(2394),o=t(21068);function a(e){const{log:n,generateRef:t,filterData:a,children:s}=e||{},{fieldPropsRef:l,valuePropsRef:d,data:c,hasContext:u}=(0,r.useContext)(o.Z);(0,r.useRef)({}).current=c;const h=(0,r.useCallback)((()=>{const e=Object.entries((null==l?void 0:l.current)||{}).reduce(((e,n)=>{let[t,o]=n;if(t.startsWith("/")){const n={};for(const e in o)void 0===o[e]||"function"==typeof o[e]||(0,r.isValidElement)(o[e])||(n[e]=o[e]);!1!==(null==a?void 0:a[t])&&i.t8(e,t,n)}return e}),{}),n=Object.entries((null==d?void 0:d.current)||{}).reduce(((e,n)=>{let[t,o]=n;if(t.startsWith("/")){const n={};for(const e in o)void 0===o[e]||"function"==typeof o[e]||(0,r.isValidElement)(o[e])||(n[e]=o[e]);!1!==(null==a?void 0:a[t])&&i.t8(e,t,n)}return e}),{});return{propsOfFields:e,propsOfValues:n}}),[l,a,d]);return u&&(n&&console.log(h()),t&&(t.current=h)),s}},92581:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(2784),i=t(21068),o=t(54109).Z,a=t(9149),s=t(52322);function l(e){let{placeholder:n,label:t,data:l,...c}=e;const{data:u}=(0,r.useContext)(i.Z);return(0,s.jsxs)(o,{element:"output",backgroundColor:"sand-yellow",style:{maxWidth:"80vw"},innerSpace:!0,...c,children:[t&&(0,s.jsx)(a.Z,{bottom:!0,children:t}),(0,s.jsxs)("pre",{children:[n&&0===Object.keys((null!=l?l:u)||{}).length?n:JSON.stringify(d(null!=l?l:u),null,2)," "]})]})}function d(e,n){return void 0===n&&(n="undefined"),void 0===e?n:"object"==typeof e&&e!==n?{...e,...Object.fromEntries(Object.entries(e).map((e=>{let[n,t]=e;return[n,d(t)]})))}:e}l._supportsSpacingProps=!0;var c=l},4902:function(e,n,t){t.r(n),t.d(n,{GenerateSchema:function(){return r.Z},ListAllProps:function(){return i.Z},Log:function(){return o.Z}});var r=t(38734),i=t(10454),o=t(92581)}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-form-use-data-mdx-758dd3f7bf92c2b6bf6e.js.map