"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[88145],{53028:function(n,e,s){s.r(e),s.d(e,{default:function(){return g}});var a=s(52322),r=s(45392),i=s(70894),t=(s(2784),s(28204)),d=s(88268);const l=(0,i.Z)("span",{target:"eoaxmjb0"})({name:"gc0d0g",styles:"display:block;padding:0.25rem 0"});function h(){return(0,a.jsx)(t.Z,{scope:{Case:l},hideCode:!0,"data-visual-test":"paragraph-default",children:"<P>\n  <Case>Here is a paragraph text</Case>\n  <Case>\n    <Anchor href=\"/\">Anchor / Text Link</Anchor>\n  </Case>\n  <Case>\n    <b>Bold paragraph (medium weight)</b>\n  </Case>\n  <Case>\n    <strong>Strong paragraph (medium weight)</strong>\n  </Case>\n  {/* <i>Italic paragraph (Currently not supported by DNB UX)</i> */}\n  {/* <u>Underline paragraph (Currently not supported by DNB UX)</u> */}\n  <Case>Numbers 0123456789</Case>\n  <Case>\n    <code className=\"dnb-code\">Code paragraph</code>\n  </Case>\n  <Case>\n    <cite>Cite paragraph</cite>\n  </Case>\n  <Case>\n    Text <sup>1</sup>{' '}\n    <b>\n      Text <sup>1</sup>\n    </b>{' '}\n  </Case>\n  <Case>\n    Text{' '}\n    <sup>\n      <Anchor href=\"/\">1</Anchor>\n    </sup>{' '}\n    <b>\n      Text{' '}\n      <sup>\n        <Anchor href=\"/\">1</Anchor>\n      </sup>\n    </b>{' '}\n  </Case>\n  <Case>\n    Text <sub>1</sub>{' '}\n    <b>\n      Text <sub>1</sub>\n    </b>{' '}\n  </Case>\n</P>\n"})}function p(){return(0,a.jsx)(t.Z,{scope:{Case:l},hideCode:!0,"data-visual-test":"paragraph-small",children:"<div>\n  <P size=\"small\">\n    <Case>Here is a small paragraph text</Case>\n    <Case>\n      <Anchor href=\"/\">Anchor / Text Link</Anchor>\n    </Case>\n    <Case>\n      <b>Bold paragraph (medium weight)</b>\n    </Case>\n    <Case>\n      <strong>Strong paragraph (medium weight)</strong>\n    </Case>\n    {/* <i>Italic paragraph</i> */}\n    {/* <u>Underline paragraph</u> */}\n    <Case>Numbers 0123456789</Case>\n    <Case>\n      <code className=\"dnb-code\">Code paragraph</code>\n    </Case>\n    <Case>\n      <cite>Cite paragraph</cite>\n    </Case>\n    <Case>\n      Text <sup>1</sup>{' '}\n      <b>\n        Text <sup>1</sup>\n      </b>{' '}\n    </Case>\n    <Case>\n      Text{' '}\n      <sup>\n        <Anchor href=\"/\">1</Anchor>\n      </sup>{' '}\n      <b>\n        Text{' '}\n        <sup>\n          <Anchor href=\"/\">1</Anchor>\n        </sup>\n      </b>{' '}\n    </Case>\n    <Case>\n      Text <sub>1</sub>{' '}\n      <b>\n        Text <sub>1</sub>\n      </b>{' '}\n    </Case>\n  </P>\n  <P size=\"x-small\">\n    <Case>\n      Here is a x-small paragraph text\n      <br />\n      with a new line.\n    </Case>\n  </P>\n</div>\n"})}function c(){return(0,a.jsx)(t.Z,{scope:{Case:l},hideCode:!0,"data-visual-test":"paragraph-additional",children:'<P>\n  <Case>\n    <i>Italic paragraph</i>\n  </Case>\n  <Case>\n    <u>Underline paragraph</u>\n  </Case>\n  <Case>\n    <Anchor title="User Experience">UX</Anchor>\n  </Case>\n  <Case>\n    <del>Deleted paragraph</del>\n  </Case>\n  <Case>\n    <mark>Marked paragraph</mark>\n  </Case>\n  <Case>\n    <ins>Inserted paragraph</ins>\n  </Case>\n  <Case>\n    Text <sup>Superscript</sup>\n  </Case>\n  <Case>\n    Text <sub>Subscript</sub>\n  </Case>\n</P>\n'})}function o(){return(0,a.jsx)(t.Z,{"data-visual-test":"paragraph-modifiers",children:'<div>\n  <P>Default paragraph</P>\n  <P modifier="medium">Medium weight paragraph</P>\n  <P size="small">Small paragraph</P>\n  <P modifier="small medium">Small paragraph with medium weight</P>\n  {/* (Bold is currently not supported by DNB UX) */}\n  {/* <P modifier="bold">Bold weight paragraph</P> */}\n  {/* <P modifier="small bold">Small paragraph with bold weight</P> */}\n</div>\n'})}function u(){return(0,a.jsx)(t.Z,{scope:{PWrap:n=>{let{customSize:e=null,...s}=n;const r=s.size||e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.Z,{...s,children:(0,a.jsx)(l,{children:r})}),(0,a.jsx)(d.Z,{medium:!0,...s,children:(0,a.jsxs)(l,{children:[r," - Weight medium"]})}),(0,a.jsx)(d.Z,{bold:!0,...s,children:(0,a.jsxs)(l,{children:[r," - Weight bold"]})})]})}},"data-visual-test":"paragraph-sizes",children:'\n<PWrap customSize="default" />\n<PWrap size="xx-large" />\n<PWrap size="x-large" />\n<PWrap size="large" />\n<PWrap size="medium" />\n<PWrap size="basis" />\n<PWrap size="small" />\n<PWrap size="x-small" />\n\n'})}function x(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",ul:"ul",li:"li",code:"code",h3:"h3",pre:"pre",h4:"h4",a:"a"},(0,r.ah)(),n.components),{VisibleWhenVisualTest:s}=e;return s||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("VisibleWhenVisualTest",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{children:"Paragraph"}),"\n",(0,a.jsx)(e.h2,{children:"Paragraph class modifiers"}),"\n",(0,a.jsx)(e.p,{children:"Eufemia comes with several styles you can use on paragraphs and other HTML text elements:"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Weights"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:".dnb-p"})," (Body text)"]}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.code,{children:".dnb-p--medium"})}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Sizes"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.code,{children:".dnb-p--small"})}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.code,{children:".dnb-p--x-small"})}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Variants"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.code,{children:".dnb-p--lead"})}),"\n"]}),"\n",(0,a.jsx)(e.h3,{children:"Paragraphs in React"}),"\n",(0,a.jsx)(e.p,{children:"Paragraphs using React JSX."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",children:"import { P } from '@dnb/eufemia'\n"})}),"\n",(0,a.jsx)(o,{}),"\n",(0,a.jsxs)(e.h3,{children:["Paragraphs ",(0,a.jsx)(e.code,{children:"basis"})," sized"]}),"\n",(0,a.jsx)(h,{}),"\n",(0,a.jsxs)(e.h4,{children:["Paragraph ",(0,a.jsx)(e.code,{children:"small"})," sized"]}),"\n",(0,a.jsx)(p,{}),"\n",(0,a.jsx)(e.h4,{children:"Additional Paragraph formatting (not defined yet)"}),"\n",(0,a.jsx)(c,{}),"\n",(0,a.jsxs)(e.p,{children:["Read more ",(0,a.jsx)(e.a,{href:"/quickguide-designer/fonts/",children:"about Fonts in the Designer Guides"}),"."]}),"\n",(0,a.jsx)(s,{children:(0,a.jsx)(u,{})})]})}var g=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,a.jsx)(e,Object.assign({},n,{children:(0,a.jsx)(x,n)})):x(n)}}}]);
//# sourceMappingURL=component---src-docs-uilib-elements-paragraph-mdx-5dd75ace9ff419d188d6.js.map