"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[43836],{20957:function(a,n,e){e.r(n);var t=e(52322),o=e(45392),s=e(69159);function r(a){const n=Object.assign({h2:"h2",h3:"h3",p:"p",a:"a",code:"code"},(0,o.ah)(),a.components);return s||i("Examples",!1),s.CombinedLayout||i("Examples.CombinedLayout",!0),s.DefaultLayout||i("Examples.DefaultLayout",!0),s.GridLayout||i("Examples.GridLayout",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{children:"Demos"}),"\n",(0,t.jsx)(n.h3,{children:"With a default layout"}),"\n",(0,t.jsx)(s.DefaultLayout,{}),"\n",(0,t.jsx)(n.h3,{children:"With a grid layout"}),"\n",(0,t.jsx)(s.GridLayout,{}),"\n",(0,t.jsx)(n.h3,{children:"With a combined layout"}),"\n",(0,t.jsxs)(n.p,{children:["Using ",(0,t.jsx)(n.a,{href:"/uilib/extensions/forms/Value/Composition/",children:"Value.Composition"})," to combine two or more ",(0,t.jsx)(n.code,{children:"Value.*"})," components into one."]}),"\n",(0,t.jsx)(s.CombinedLayout,{})]})}function i(a,n){throw new Error("Expected "+(n?"component":"object")+" `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(a){void 0===a&&(a={});const{wrapper:n}=Object.assign({},(0,o.ah)(),a.components);return n?(0,t.jsx)(n,Object.assign({},a,{children:(0,t.jsx)(r,a)})):r(a)}},69159:function(a,n,e){e.r(n),e.d(n,{CombinedLayout:function(){return l},DefaultLayout:function(){return i},GridLayout:function(){return u}});var t=e(75333),o=e(35540),s=e(40996),r=e(52322);const i=()=>(0,r.jsx)(t.Z,{scope:{Value:o,SummaryList:s.Z},"data-visual-test":"forms-value-summary-list-default",children:"<Form.Handler\n  data={{\n    firstName: 'John',\n    lastName: 'Doe',\n  }}\n>\n  <Card stack>\n    <Form.SubHeading>Subheading</Form.SubHeading>\n\n    <Value.SummaryList>\n      <Value.Name.First path=\"/firstName\" />\n      <Value.Name.Last path=\"/lastName\" />\n    </Value.SummaryList>\n  </Card>\n</Form.Handler>\n"}),u=()=>(0,r.jsx)(t.Z,{scope:{Value:o,SummaryList:s.Z},"data-visual-test":"forms-value-summary-list-grid",children:'<Form.Handler\n  data={{\n    firstName: \'John\',\n    lastName: \'Doe\',\n  }}\n>\n  <Card stack>\n    <Form.SubHeading>Subheading</Form.SubHeading>\n\n    <Value.SummaryList layout="grid">\n      <Value.Name.First path="/firstName" />\n      <Value.Name.Last path="/lastName" />\n    </Value.SummaryList>\n  </Card>\n</Form.Handler>\n'}),l=()=>(0,r.jsx)(t.Z,{scope:{Value:o,SummaryList:s.Z},"data-visual-test":"forms-value-summary-list-combined",children:'<Form.Handler\n  data={{\n    firstName: \'John\',\n    lastName: \'Doe\',\n    streetName: \'Osloveien\',\n    streetNr: 12,\n    postalCode: \'1234\',\n    city: \'Oslo\',\n  }}\n>\n  <Card stack>\n    <Form.SubHeading>Subheading</Form.SubHeading>\n\n    <Value.SummaryList>\n      <Value.Name.First path="/firstName" />\n      <Value.Name.Last path="/lastName" />\n\n      <Value.Composition label="Street">\n        <Value.String path="/streetName" />\n        <Value.Number path="/streetNr" />\n      </Value.Composition>\n\n      <Value.Composition label="City">\n        <Value.String path="/postalCode" />\n        <Value.String path="/city" />\n      </Value.Composition>\n    </Value.SummaryList>\n  </Card>\n</Form.Handler>\n'})}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-value-summary-list-demos-mdx-73d851aaed37c3c213ee.js.map