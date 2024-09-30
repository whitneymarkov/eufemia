"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[12376,81499,62129],{22527:function(e,n,t){t.r(n);var i=t(52322),r=t(45392),a=t(84164),s=t(44196);function o(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.default,{}),"\n",(0,i.jsx)(s.default,{})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(o,e)})):o()}},44196:function(e,n,t){t.r(n),t.d(n,{default:function(){return c}});var i={};t.r(i),t.d(i,{InheritVisibility:function(){return o}});var r=t(52322),a=t(45392),s=t(64368);function o(){return(0,r.jsx)(s.Z,{children:'<Form.Handler>\n  <Card stack>\n    <Field.Boolean\n      variant="button"\n      path="/isVisible"\n      defaultValue={true}\n    />\n\n    <Form.Visibility pathTrue="/isVisible" animate>\n      <Field.Name.First path="/foo" defaultValue="foo" />\n      <Field.Name.Last path="/bar" defaultValue="bar" />\n    </Form.Visibility>\n\n    <Value.Provider inheritVisibility>\n      <Value.SummaryList>\n        <Value.Name.First path="/foo" />\n        <Value.Name.First path="/bar" />\n      </Value.SummaryList>\n    </Value.Provider>\n  </Card>\n</Form.Handler>\n'})}function l(e){const n=Object.assign({h2:"h2",h3:"h3"},(0,a.ah)(),e.components);return i||u("Examples",!1),o||u("Examples.InheritVisibility",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{children:"Demos"}),"\n",(0,r.jsx)(n.h3,{children:"Inherit visibility"}),"\n",(0,r.jsx)(o,{})]})}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)};function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},84164:function(e,n,t){t.r(n);var i=t(52322),r=t(45392);function a(e){const n=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Value.Provider"})," lets you pass generic properties to all nested Value.* components."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'import { Field, Value } from \'@dnb/eufemia/extensions/forms\'\nrender(\n  <>\n    <Field.Boolean path="/myPath" label="My label" />\n\n    <Value.Provider inheritLabel>\n      <Value.Boolean path="/myPath" />\n    </Value.Provider>\n  </>,\n)\n'})})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-value-provider-mdx-29b1723b8a0599e8531b.js.map