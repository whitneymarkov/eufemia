"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[79695,41944,5131],{44178:function(n,e,i){i.r(e);var a=i(52322),t=i(45392),r=i(37368),s=i(14098);function d(n){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.default,{}),"\n",(0,a.jsx)(s.default,{})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,a.jsx)(e,Object.assign({},n,{children:(0,a.jsx)(d,n)})):d()}},14098:function(n,e,i){i.r(e);var a=i(52322),t=i(45392),r=i(83159);function s(n){const e=Object.assign({h2:"h2",h3:"h3"},(0,t.ah)(),n.components);return r||d("Examples",!1),r.WithCard||d("Examples.WithCard",!0),r.WithCardAndHeading||d("Examples.WithCardAndHeading",!0),r.WithCardAndHeadings||d("Examples.WithCardAndHeadings",!0),r.WithFieldString||d("Examples.WithFieldString",!0),r.WithMainHeading||d("Examples.WithMainHeading",!0),r.WithParagraphs||d("Examples.WithParagraphs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{children:"Demos"}),"\n",(0,a.jsx)(e.h3,{children:"With input fields"}),"\n",(0,a.jsx)(r.WithFieldString,{}),"\n",(0,a.jsx)(e.h3,{children:"With paragraphs"}),"\n",(0,a.jsx)(r.WithParagraphs,{}),"\n",(0,a.jsx)(e.h3,{children:"With main heading"}),"\n",(0,a.jsx)(r.WithMainHeading,{}),"\n",(0,a.jsx)(e.h3,{children:"With Card"}),"\n",(0,a.jsx)(r.WithCard,{}),"\n",(0,a.jsx)(e.h3,{children:"With Card and heading"}),"\n",(0,a.jsx)(r.WithCardAndHeading,{}),"\n",(0,a.jsx)(e.h3,{children:"With Card and headings"}),"\n",(0,a.jsx)(r.WithCardAndHeadings,{})]})}function d(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,a.jsx)(e,Object.assign({},n,{children:(0,a.jsx)(s,n)})):s(n)}},37368:function(n,e,i){i.r(e);var a=i(52322),t=i(45392),r=i(83159);function s(n){const e=Object.assign({h2:"h2",p:"p",code:"code",a:"a"},(0,t.ah)(),n.components);return r||d("Examples",!1),r.WithHeadingsAndAriaLabel||d("Examples.WithHeadingsAndAriaLabel",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{children:"Description"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"Flex.Stack"})," is an outer block element for wrapping content to get the correct layout and spacing between region and region headings."]}),"\n",(0,a.jsxs)(e.p,{children:["It uses ",(0,a.jsx)(e.a,{href:"/uilib/layout/flex/container",children:"Flex.Container"})," under the hood."]}),"\n",(0,a.jsx)(e.h2,{children:"Accessibility"}),"\n",(0,a.jsxs)(e.p,{children:["It uses a ",(0,a.jsx)(e.code,{children:"section"})," element. Which allows you to add an ",(0,a.jsx)(e.code,{children:"aria-label"})," or ",(0,a.jsx)(e.code,{children:"aria-labelledby"})," to provide screen readers with landmarks."]}),"\n",(0,a.jsx)(r.WithHeadingsAndAriaLabel,{})]})}function d(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,a.jsx)(e,Object.assign({},n,{children:(0,a.jsx)(s,n)})):s(n)}},83159:function(n,e,i){i.r(e),i.d(e,{WithCard:function(){return c},WithCardAndHeading:function(){return l},WithCardAndHeadings:function(){return o},WithFieldString:function(){return r},WithHeadingsAndAriaLabel:function(){return u},WithMainHeading:function(){return d},WithParagraphs:function(){return s}});var a=i(28204),t=i(52322);const r=()=>(0,t.jsx)(a.Z,{"data-visual-test":"flex-stack-form",children:'<Flex.Stack>\n  <Field.String label="Label" value="Foo" />\n  <Field.String label="Label" value="Foo" />\n</Flex.Stack>\n'}),s=()=>(0,t.jsx)(a.Z,{"data-visual-test":"flex-stack-paragraphs",children:"<Flex.Stack>\n  <P>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus\n    pharetra elit in bibendum.\n  </P>\n  <P>\n    Praesent nunc ipsum, convallis eget convallis gravida, vehicula vitae\n    metus.\n  </P>\n</Flex.Stack>\n"}),d=()=>(0,t.jsx)(a.Z,{children:"<Flex.Stack>\n  <Form.MainHeading>Heading</Form.MainHeading>\n  <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</P>\n  <P>Aliquam at felis rutrum, luctus dui at, bibendum ipsum.</P>\n</Flex.Stack>\n"}),c=()=>(0,t.jsx)(a.Z,{"data-visual-test":"flex-stack-card-stack",children:"<Flex.Stack>\n  <Card stack>\n    <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</P>\n    <P>Aliquam at felis rutrum, luctus dui at, bibendum ipsum.</P>\n  </Card>\n  <Card stack>\n    <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</P>\n    <P>Aliquam at felis rutrum, luctus dui at, bibendum ipsum.</P>\n  </Card>\n</Flex.Stack>\n"}),l=()=>(0,t.jsx)(a.Z,{"data-visual-test":"flex-stack-card-heading",children:"<Flex.Stack>\n  <Form.MainHeading>Main heading</Form.MainHeading>\n  <Card stack>\n    <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</P>\n    <P>Aliquam at felis rutrum, luctus dui at, bibendum ipsum.</P>\n  </Card>\n</Flex.Stack>\n"}),o=()=>(0,t.jsx)(a.Z,{"data-visual-test":"flex-stack-card-two-headings",children:"<Flex.Stack>\n  <Form.MainHeading>Main heading</Form.MainHeading>\n  <Form.SubHeading>Sub heading</Form.SubHeading>\n  <Card stack>\n    <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</P>\n    <P>Aliquam at felis rutrum, luctus dui at, bibendum ipsum.</P>\n  </Card>\n</Flex.Stack>\n"}),u=()=>(0,t.jsx)(a.Z,{hidePreview:!0,children:'<Flex.Stack aria-labelledby="unique-id">\n  <Form.SubHeading id="unique-id">Heading</Form.SubHeading>\n  <Card>\n    <P>Content inside a landmark ...</P>\n  </Card>\n</Flex.Stack>\n'})}}]);
//# sourceMappingURL=component---src-docs-uilib-layout-flex-stack-mdx-8b3efdeacfccd62bd572.js.map