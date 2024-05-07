"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[8799,59574,40531],{36923:function(e,n,t){t.r(n);var r=t(52322),a=t(45392),i=t(74664),o=t(88510);function s(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.default,{}),"\n",(0,r.jsx)(o.default,{})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(s,e)})):s()}},88510:function(e,n,t){t.r(n),t.d(n,{default:function(){return c}});var r={};t.r(r),t.d(r,{Default:function(){return s},FilterData:function(){return l}});var a=t(52322),i=t(45392),o=t(75333);function s(){return(0,a.jsx)(o.Z,{noInline:!0,children:"const existingData = {\n  foo: 'bar',\n}\nconst Component = () => {\n  const { data } = Form.useData('default-id', existingData)\n  return (\n    <Form.Handler id=\"default-id\">\n      <Field.String path=\"/foo\" label={data.foo} />\n    </Form.Handler>\n  )\n}\nrender(<Component />)\n"})}function l(){return(0,a.jsx)(o.Z,{noInline:!0,children:'const filterDataHandler = (path, value, props, internal) => {\n  if (value === \'foo\') {\n    return false\n  }\n}\nconst Component = () => {\n  return (\n    <Form.Handler id="filter-data">\n      <Value.String path="/foo" value="foo" />{\' \'}\n      <Value.String path="/bar" value="baz" />\n    </Form.Handler>\n  )\n}\nconst { data, filterData } = Form.getData(\'filter-data\')\nrender(\n  <>\n    <Component />\n\n    <Section backgroundColor="sand-yellow" innerSpace>\n      <pre>{JSON.stringify(data)}</pre>\n      <pre>{JSON.stringify(filterData(filterDataHandler))}</pre>\n    </Section>\n  </>,\n)\n'})}function d(e){const n=Object.assign({h2:"h2",h3:"h3"},(0,i.ah)(),e.components);return r||h("Examples",!1),s||h("Examples.Default",!0),l||h("Examples.FilterData",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{children:"Demos"}),"\n",(0,a.jsx)(n.h3,{children:"Get data outside of the form"}),"\n",(0,a.jsx)(s,{}),"\n",(0,a.jsx)(n.h3,{children:"Filter data"}),"\n",(0,a.jsx)(l,{})]})}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)};function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},74664:function(e,n,t){t.r(n);var r=t(52322),a=t(45392);function i(e){const n=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",a:"a",ol:"ol"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["With the ",(0,r.jsx)(n.code,{children:"Form.getData"})," method, you can manage your form data outside of the form itself. This is beneficial when you need to utilize the form data in other places within your application:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"import { Form } from '@dnb/eufemia/extensions/forms'\n\nfunction Component() {\n  return <Form.Handler id=\"unique-id\">...</Form.Handler>\n}\n\n// Later, when there is data available\nconst {\n  getValue, // Method to get a single value\n  data, // The whole dataset (unvalidated)\n  filterData, // Method to filter data with your own logic\n} = Form.getData('unique-id')\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You link them together via the ",(0,r.jsx)(n.code,{children:"id"})," (string) property."]}),"\n",(0,r.jsx)(n.p,{children:"TypeScript support:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"type Data = { foo: string }\nconst { data } = Form.getData<Data>('unique')\n"})}),"\n",(0,r.jsx)(n.p,{children:"Related helpers:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/uilib/extensions/forms/Form/setData/",children:"setData"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/uilib/extensions/forms/Form/useData/",children:"useData"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"Filter data"}),"\n",(0,r.jsxs)(n.p,{children:["You can use the ",(0,r.jsx)(n.code,{children:"filterData"})," method to filter your data."]}),"\n",(0,r.jsxs)(n.p,{children:["You simply give it the same kind of callback function as you would with the ",(0,r.jsx)(n.code,{children:"Form.Handler"})," ",(0,r.jsx)(n.a,{href:"/uilib/extensions/forms/Form/Handler/demos/#filter-your-data",children:"filterSubmitData"})," property method."]}),"\n",(0,r.jsx)(n.p,{children:"The callback function receives the following arguments:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"path"})," as the first argument."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"value"})," as the second argument."]}),"\n",(0,r.jsxs)(n.li,{children:["The field ",(0,r.jsx)(n.code,{children:"properties"})," (props) as the third argument."]}),"\n",(0,r.jsx)(n.li,{children:"The fourth argument is an object with the internal state of the field, like the error state."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The callback function should return a ",(0,r.jsx)(n.code,{children:"boolean"})," or ",(0,r.jsx)(n.code,{children:"undefined"}),". Return ",(0,r.jsx)(n.code,{children:"false"})," to exclude an entry."]}),"\n",(0,r.jsx)(n.p,{children:"It returns the filtered form data."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'const MyForm = () => {\n  return (\n    <Form.Handler id={id}>\n      <Field.String path="/foo" disabled />\n    </Form.Handler>\n  )\n}\n\nconst filterDataHandler = (path, value, props, internal) => {\n  if (props.disabled === true) {\n    return false\n  }\n}\n\n// Later, when there is data available\nconst { filterData } = Form.getData(id)\nconst filteredData = filterData(filterDataHandler)\n'})})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(i,e)})):i(e)}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-form-get-data-mdx-e23d32e2b886d38a6e18.js.map