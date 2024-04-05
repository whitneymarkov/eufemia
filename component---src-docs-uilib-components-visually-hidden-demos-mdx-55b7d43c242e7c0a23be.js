"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[54746],{51918:function(e,n,s){s.r(n),s.d(n,{default:function(){return u}});var i=s(52322),l=s(45392),d=s(99587);const a=()=>(0,i.jsx)(d.Z,{"data-visual-test":"visually-hidden-default",children:"<P>\n  <span>before|</span>\n  <VisuallyHidden>hidden content</VisuallyHidden>\n  <span>|after</span>\n</P>\n"}),t=()=>(0,i.jsx)(d.Z,{"data-visual-test":"visually-hidden-focusable",children:'<VisuallyHidden focusable>\n  <Anchor href="/">Hidden, but focusable content</Anchor>\n</VisuallyHidden>\n'}),o=()=>(0,i.jsx)(d.Z,{"data-visual-test":"visually-hidden-use-case",children:'<Anchor href="/">\n  Read more <VisuallyHidden>about Eufemia</VisuallyHidden>\n</Anchor>\n'}),r=()=>(0,i.jsx)(d.Z,{"data-visual-test":"visually-hidden-element",noInline:!0,children:'const Box = styled.div`\n  width: 1rem;\n  height: 1rem;\n`\nconst BoxBefore = styled(Box)`\n  background-color: var(--color-summer-green);\n`\nconst BoxAfter = styled(Box)`\n  background-color: var(--color-emerald-green);\n`\nrender(\n  <>\n    <BoxBefore />\n    <VisuallyHidden aria-label="I\'m a region" element={Section}>\n      <P>but, not visible to you!</P>\n    </VisuallyHidden>\n    <BoxAfter />\n  </>,\n)\n'});function c(e){const n=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code"},(0,l.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{children:"Demos"}),"\n",(0,i.jsx)(n.h3,{children:"VisuallyHidden"}),"\n",(0,i.jsx)(a,{}),"\n",(0,i.jsx)(n.h3,{children:"VisuallyHidden with focusable content"}),"\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.code,{children:"VisuallyHidden"})," with ",(0,i.jsx)(n.code,{children:"focusable={true}"})," to visually hide an element by default, but to display it when it’s focused (e.g. by a keyboard-only user). The container will be displayed when any child element of the container receives focus."]}),"\n",(0,i.jsx)(t,{}),"\n",(0,i.jsx)(n.h3,{children:"VisuallyHidden with example of use case"}),"\n",(0,i.jsx)(o,{}),"\n",(0,i.jsx)(n.h3,{children:"VisuallyHidden with custom element"}),"\n",(0,i.jsx)(r,{})]})}var u=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(c,e)})):c(e)}}}]);
//# sourceMappingURL=component---src-docs-uilib-components-visually-hidden-demos-mdx-55b7d43c242e7c0a23be.js.map