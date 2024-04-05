"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[51562,12264,77125],{38417:function(n,t,e){e.r(t);var a=e(52322),r=e(45392),o=e(23132),s=e(98890);function i(n){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.default,{}),"\n",(0,a.jsx)(s.default,{})]})}t.default=function(n){void 0===n&&(n={});const{wrapper:t}=Object.assign({},(0,r.ah)(),n.components);return t?(0,a.jsx)(t,Object.assign({},n,{children:(0,a.jsx)(i,n)})):i()}},98890:function(n,t,e){e.r(t),e.d(t,{default:function(){return u}});var a={};e.r(a),e.d(a,{IteratePath:function(){return d},Path:function(){return c}});var r=e(52322),o=e(45392),s=e(99587),i=e(16620),l=e(21975);const c=()=>(0,r.jsx)(s.Z,{scope:{DataContext:i},children:'<Form.Handler\n  data={{\n    foo: {\n      one: 1,\n      two: 2,\n    },\n    bar: \'Bar\',\n  }}\n>\n  <DataContext.At path="/foo">\n    <Field.Number path="/one" label="One" />\n    <Field.Number path="/two" label="Two" />\n  </DataContext.At>\n</Form.Handler>\n'}),d=()=>(0,r.jsx)(s.Z,{scope:{Value:l,DataContext:i},children:"<Form.Handler\n  data={{\n    list: [\n      {\n        title: 'Object 1',\n      },\n      {\n        title: 'Object 2',\n      },\n    ],\n    bar: 'Bar',\n  }}\n  onChange={(data) => console.log('onChange', data)}\n  onPathChange={(path, value) => console.log('onPathChange', path, value)}\n>\n  <DataContext.At path=\"/list\" iterate>\n    <Value.String path=\"/title\" label=\"Title\" />\n    <Field.String path=\"/title\" label=\"Title\" />\n  </DataContext.At>\n</Form.Handler>\n"});function h(n){const t=Object.assign({h2:"h2",h3:"h3"},(0,o.ah)(),n.components);return a||p("Examples",!1),d||p("Examples.IteratePath",!0),c||p("Examples.Path",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{children:"Demos"}),"\n",(0,r.jsx)(t.h3,{children:"At path"}),"\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(t.h3,{children:"Iterate path"}),"\n",(0,r.jsx)(d,{})]})}var u=function(n){void 0===n&&(n={});const{wrapper:t}=Object.assign({},(0,o.ah)(),n.components);return t?(0,r.jsx)(t,Object.assign({},n,{children:(0,r.jsx)(h,n)})):h(n)};function p(n,t){throw new Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},23132:function(n,t,e){e.r(t);var a=e(52322),r=e(45392);function o(n){const t=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre"},(0,r.ah)(),n.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{children:"Description"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"DataContext.At"})," makes it possible to dig into a data set to set a pointer as the root for sub components, as well as iterate array-data."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:'import { DataContext, Form, Field } from \'@dnb/eufemia/extensions/forms\'\nrender(\n  <Form.Handler\n    data={{\n      foo: {\n        one: 1,\n        two: 2,\n      },\n      bar: \'Bar\',\n    }}\n  >\n  <DataContext.At path="/foo">\n    <Field.Number path="/one" label="One" />\n    <Field.Number path="/two" label="Two" />\n  </DataContext.At>\n</Form.Handler><DataContext.At data={existingData}>...</DataContext.At>,\n)\n'})})]})}t.default=function(n){void 0===n&&(n={});const{wrapper:t}=Object.assign({},(0,r.ah)(),n.components);return t?(0,a.jsx)(t,Object.assign({},n,{children:(0,a.jsx)(o,n)})):o(n)}},16620:function(n,t,e){e.r(t),e.d(t,{At:function(){return d},Context:function(){return a.Z},Provider:function(){return r.Z},defaultContextState:function(){return a.E}});var a=e(21068),r=e(80370),o=e(2784),s=e(95955),i=e.n(s),l=e(52322);function c(n){const{path:t="/",iterate:e,children:r}=n,s=(0,o.useContext)(a.Z),{data:c,handlePathChange:d}=s,h=c&&i().has(c,t)?i().get(c,t):void 0,u=(0,o.useCallback)(((n,e)=>{d(`${t}${n}`,e)}),[d,t]);return e?Array.isArray(h)?(0,l.jsx)(l.Fragment,{children:h.map(((n,e)=>{const o=d?(n,a)=>{d(`${t}/${e}${n}`,a)}:void 0;return(0,l.jsx)(a.Z.Provider,{value:{...s,data:n,handlePathChange:o},children:r},`element${e}`)}))}):null:(0,l.jsx)(a.Z.Provider,{value:{...s,data:h,handlePathChange:u},children:r})}c._supportsSpacingProps=!0;var d=c}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-extended-features-data-context-at-mdx-857511e13451d158488b.js.map