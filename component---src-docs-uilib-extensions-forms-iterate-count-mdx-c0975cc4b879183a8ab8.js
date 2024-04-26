"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[58316,62100,25463],{11253:function(n,e,t){t.r(e);var r=t(52322),o=t(45392),a=t(73921),s=t(96565);function i(n){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.default,{}),"\n",(0,r.jsx)(s.default,{})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,o.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(i,n)})):i()}},96565:function(n,e,t){t.r(e),t.d(e,{default:function(){return u}});var r={};t.r(r),t.d(r,{Default:function(){return c},Interactive:function(){return l}});var o=t(52322),a=t(45392),s=t(28204),i=t(6350);const c=()=>(0,o.jsx)(s.Z,{scope:{Iterate:i},children:"<Form.Handler\n  data={{\n    myList: ['foo', 'bar'],\n  }}\n>\n  <Iterate.Count path=\"/myList\" />\n</Form.Handler>\n"}),l=()=>(0,o.jsx)(s.Z,{scope:{Iterate:i},noInline:!0,children:'const MyForm = () => {\n  const { count } = Iterate.useCount(\'myForm\')\n  return (\n    <Form.Handler\n      id="myForm"\n      data={{\n        myList: [1, 2],\n      }}\n    >\n      <output>\n        Total: <Iterate.Count path="/myList" />\n      </output>\n\n      <Iterate.Array path="/myList">\n        <Iterate.AnimatedContainer spacing={false}>\n          <Flex.Horizontal align="center">\n            <strong>\n              <Value.Number itemPath="/" />\n            </strong>\n            <Iterate.RemoveButton />\n          </Flex.Horizontal>\n        </Iterate.AnimatedContainer>\n      </Iterate.Array>\n      <Iterate.PushButton\n        path="/myList"\n        pushValue={() => {\n          return (\n            Iterate.count({\n              id: \'myForm\',\n              path: \'/myList\',\n            }) + 1\n          )\n        }}\n        top\n      >\n        Add item nr. {count(\'/myList\') + 1}\n      </Iterate.PushButton>\n    </Form.Handler>\n  )\n}\nrender(<MyForm />)\n'});function d(n){const e=Object.assign({h2:"h2",h3:"h3"},(0,a.ah)(),n.components);return r||m("Examples",!1),c||m("Examples.Default",!0),l||m("Examples.Interactive",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{children:"Demos"}),"\n",(0,o.jsx)(e.h3,{children:"Default"}),"\n",(0,o.jsx)(c,{}),"\n",(0,o.jsx)(e.h3,{children:"Interactive"}),"\n",(0,o.jsx)(l,{})]})}var u=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,a.ah)(),n.components);return e?(0,o.jsx)(e,Object.assign({},n,{children:(0,o.jsx)(d,n)})):d(n)};function m(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},73921:function(n,e,t){t.r(e);var r=t(52322),o=t(45392);function a(n){const e=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre"},(0,o.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{children:"Description"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"Iterate.Count"})," is a helper component that returns the count of a data array or object."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:"import { Iterate } from '@dnb/eufemia/extensions/forms'\n\nconst MyComponent = () => {\n  return <Iterate.Count path=\"/myList\" />\n}\n\nrender(\n  <Form.Handler data={{ myList: ['foo', 'bar'] }}>\n    <MyComponent />\n  </Form.Handler>,\n)\n"})}),"\n",(0,r.jsx)(e.p,{children:"You can use the hook as well:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:"const MyComponent = () => {\n  const { count } = Iterate.useCount() // id is ot need when called inside a Form.Handler\n\n  return count('/myList')\n}\n\nrender(\n  <Form.Handler data={{ myList: ['foo', 'bar'] }}>\n    <MyComponent />\n  </Form.Handler>,\n)\n"})}),"\n",(0,r.jsxs)(e.p,{children:["You can also give a custom ",(0,r.jsx)(e.code,{children:"filter"})," function to count only specific items:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:"<Iterate.Count path=\"/myList\" filter={(item) => item !== 'bar'} />\n"})}),"\n",(0,r.jsx)(e.p,{children:"Or give the hook a filter:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:"const MyComponent = () => {\n  const { count } = Iterate.useCount()\n\n  return count('/myList', (item) => item !== 'bar')\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"You can also count over objects:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:"<Form.Handler data={{ myList: { foo: 1, bar: 2 } }}>\n  <Iterate.Count path=\"/myList\" filter={([key, value]) => key !== 'bar'} />\n</Form.Handler>\n"})}),"\n",(0,r.jsx)(e.p,{children:"And you can call it outside of the context as well:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:'render(\n  <>\n    <Form.Handler id="myForm" data={{ myList: [\'foo\', \'bar\'] }}>\n      Form Content\n    </Form.Handler>\n\n    <Iterate.Count path="/myList" id="myForm" />\n  </>,\n)\n'})}),"\n",(0,r.jsx)(e.p,{children:"And call it as a function as well (id is required):"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:"function MyForm() {\n  const count = Iterate.count({ id: 'myForm', path: '/myList' })\n\n  return (\n    <Form.Handler id=\"myForm\" data={{ myList: ['foo', 'bar'] }}>\n      <MyComponent />\n    </Form.Handler>\n  )\n}\n"})})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,o.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(a,n)})):a(n)}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-iterate-count-mdx-c0975cc4b879183a8ab8.js.map