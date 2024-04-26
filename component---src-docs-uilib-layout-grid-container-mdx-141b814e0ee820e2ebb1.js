"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[60697,53085,60111],{87701:function(n,e,t){t.r(e);var r=t(52322),s=t(45392),i=t(86765),l=t(81745);function o(n){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.default,{}),"\n",(0,r.jsx)(l.default,{})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(o,n)})):o()}},81745:function(n,e,t){t.r(e),t.d(e,{default:function(){return p}});var r={};t.r(r),t.d(r,{CustomColumns:function(){return c},ResponsiveUsage:function(){return a}});var s=t(52322),i=t(45392),l=t(99210),o=t(28204),m=t(17142);const d=[{background:"#babeee"},{background:"#dfe0ee"},{background:"#90d2c3"},{background:"#ecf4be"}],a=()=>(0,s.jsx)(o.Z,{scope:{TestElement:l.Z,colors:d},"data-visual-test":"grid-container-responsive",children:"<Grid.Container rowGap columnGap>\n  <Grid.Item\n    span={{\n      small: [1, 2],\n      medium: [1, 3],\n      large: [1, 12],\n    }}\n    style={colors[0]}\n    element={TestElement}\n  >\n    Item A\n  </Grid.Item>\n\n  <Grid.Item\n    span={{\n      small: [3, 4],\n      medium: [4, 6],\n      large: [1, 4],\n    }}\n    style={colors[1]}\n    element={TestElement}\n  >\n    Item B\n  </Grid.Item>\n\n  <Grid.Item\n    span={{\n      small: [2, 3],\n      medium: [4, 6],\n      large: [5, 8],\n    }}\n    style={colors[2]}\n    element={TestElement}\n  >\n    Item C\n  </Grid.Item>\n\n  <Grid.Item\n    span={{\n      small: [1, 4],\n      medium: [4, 6],\n      large: [9, 12],\n    }}\n    style={colors[3]}\n    element={TestElement}\n  >\n    Item D\n  </Grid.Item>\n</Grid.Container>\n"}),c=()=>(0,s.jsx)(o.Z,{scope:{Grid:m,TestElement:l.Z,colors:d},children:"<Grid.Container\n  columns={{\n    small: 4,\n    medium: false,\n  }}\n  // columns={12} // only 12\n  rowGap\n  columnGap\n>\n  <Grid.Item\n    span={{\n      small: 'full',\n      large: [1, 12],\n    }}\n    style={colors[0]}\n    element={TestElement}\n  >\n    Item A\n  </Grid.Item>\n\n  <Grid.Item\n    span={{\n      small: [1, 'end'],\n      large: [1, 6],\n    }}\n    style={colors[1]}\n    element={TestElement}\n  >\n    Item B\n  </Grid.Item>\n\n  <Grid.Item\n    span={{\n      small: [1, 2],\n      large: [7, 'end'],\n    }}\n    style={colors[2]}\n    element={TestElement}\n  >\n    Item C\n  </Grid.Item>\n\n  <Grid.Item\n    span={{\n      small: [3, 4],\n      large: 'full',\n    }}\n    style={colors[3]}\n    element={TestElement}\n  >\n    Item D\n  </Grid.Item>\n</Grid.Container>\n"});function u(n){const e=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code"},(0,i.ah)(),n.components);return r||h("Examples",!1),c||h("Examples.CustomColumns",!0),a||h("Examples.ResponsiveUsage",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{children:"Demos"}),"\n",(0,s.jsx)(e.h3,{children:"Responsive grid usage"}),"\n",(0,s.jsx)(a,{}),"\n",(0,s.jsx)(e.h3,{children:"Custom columns"}),"\n",(0,s.jsxs)(e.p,{children:["When ",(0,s.jsx)(e.code,{children:"medium"})," CSS Grid is disabled by using ",(0,s.jsx)(e.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(c,{})]})}var p=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(u,n)})):u(n)};function h(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},86765:function(n,e,t){t.r(e);var r=t(52322),s=t(45392),i=t(89793);function l(n){const e=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre",ul:"ul",li:"li",h3:"h3"},(0,s.ah)(),n.components);return i||o("Examples",!1),i.BasicSpan||o("Examples.BasicSpan",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{children:"Description"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"Grid.Container"})," is a building block for ",(0,r.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",children:"CSS grid"})," based layouts."]}),"\n",(0,r.jsxs)(e.p,{children:["Use ",(0,r.jsx)(e.a,{href:"/uilib/layout/grid/item",children:"Grid.Item"})," for you inner wrappers so you can apply a ",(0,r.jsx)(e.code,{children:"span"})," to them."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-jsx",children:"import { Grid } from '@dnb/eufemia'\n\nrender(\n  <Grid.Container>\n    <Grid.Item span={[1, 6]}>Item A</Grid.Item>\n    <Grid.Item span={[7, 12]}>Item B</Grid.Item>\n  </Grid.Container>,\n)\n"})}),"\n",(0,r.jsxs)(e.p,{children:["The columns do change based on what ",(0,r.jsx)(e.a,{href:"/uilib/usage/layout/media-queries/",children:"breakpoint"})," the browser is in:"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["4 columns when ",(0,r.jsx)(e.code,{children:"small"})]}),"\n",(0,r.jsxs)(e.li,{children:["6 columns when ",(0,r.jsx)(e.code,{children:"medium"})]}),"\n",(0,r.jsxs)(e.li,{children:["12 columns when ",(0,r.jsx)(e.code,{children:"large"})]}),"\n"]}),"\n",(0,r.jsx)(i.BasicSpan,{}),"\n",(0,r.jsx)(e.h3,{children:"Gap"}),"\n",(0,r.jsx)(e.p,{children:"By default is no gap given."})]})}function o(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(l,n)})):l(n)}},89793:function(n,e,t){t.r(e),t.d(e,{BasicSpan:function(){return o},OrderHorizontal:function(){return c},OrderVertical:function(){return u},ResponsiveAdvanced:function(){return a},ResponsiveSpan:function(){return m}});t(2784);var r=t(28204),s=t(99210),i=t(75511),l=t(52322);const o=()=>(0,l.jsx)(r.Z,{children:"<Grid.Container>\n  <Grid.Item span={[1, 6]}>uses 50% in width</Grid.Item>\n  <Grid.Item span={[7, 12]}>uses 50% in width</Grid.Item>\n</Grid.Container>\n"}),m=()=>(0,l.jsx)(r.Z,{children:"<Grid.Container>\n  <Grid.Item\n    span={{\n      small: [1, 12],\n      large: [1, 6],\n    }}\n  >\n    uses 50% or 100% based on the screen size\n  </Grid.Item>\n  <Grid.Item\n    span={{\n      small: [1, 12],\n      large: [7, 12],\n    }}\n  >\n    uses 50% or 100% based on the screen size\n  </Grid.Item>\n</Grid.Container>\n"}),d=[{background:"#babeee"},{background:"#dfe0ee"},{background:"#90d2c3"},{background:"#ecf4be"}],a=()=>(0,l.jsx)(r.Z,{scope:{TestElement:s.Z,colors:d},children:"<Grid.Container rowGap columnGap>\n  <Grid.Item\n    span={{\n      small: [1, 2],\n      medium: [1, 3],\n      large: [1, 12],\n    }}\n    style={colors[0]}\n    element={TestElement}\n  >\n    Item A\n  </Grid.Item>\n\n  <Grid.Item\n    span={{\n      small: [3, 4],\n      medium: [4, 6],\n      large: [1, 4],\n    }}\n    style={colors[1]}\n    element={TestElement}\n  >\n    Item B\n  </Grid.Item>\n\n  <Grid.Item\n    span={{\n      small: [2, 3],\n      medium: [4, 6],\n      large: [5, 8],\n    }}\n    style={colors[2]}\n    element={TestElement}\n  >\n    Item C\n  </Grid.Item>\n\n  <Grid.Item\n    span={{\n      small: [1, 4],\n      medium: [4, 6],\n      large: [9, 12],\n    }}\n    style={colors[3]}\n    element={TestElement}\n  >\n    Item D\n  </Grid.Item>\n</Grid.Container>\n"}),c=()=>(0,l.jsx)(r.Z,{scope:{Item:n=>{let{children:e}=n;return(0,l.jsx)(i.ZP,{stretch:!0,selectall:!0,children:e})}},children:"<Grid.Container rowGap columnGap columns={12}>\n  <Grid.Item span={[1, 6]}>\n    <Item>Left top</Item>\n  </Grid.Item>\n  <Grid.Item span={[7, 12]}>\n    <Item>Right top</Item>\n  </Grid.Item>\n  <Grid.Item span={[1, 6]}>\n    <Item>Left bottom</Item>\n  </Grid.Item>\n  <Grid.Item span={[7, 12]}>\n    <Item>Right bottom</Item>\n  </Grid.Item>\n</Grid.Container>\n"}),u=()=>(0,l.jsx)(r.Z,{scope:{Item:n=>{let{children:e}=n;return(0,l.jsx)(i.ZP,{stretch:!0,selectall:!0,children:e})}},children:"<Grid.Container rowGap columnGap columns={12}>\n  <Grid.Item span={[1, 6]}>\n    <Item>Left top</Item>\n  </Grid.Item>\n  <Grid.Item span={[1, 6]}>\n    <Item>Left bottom</Item>\n  </Grid.Item>\n  <Grid.Item span={[7, 12]}>\n    <Item>Right top</Item>\n  </Grid.Item>\n  <Grid.Item span={[7, 12]}>\n    <Item>Right bottom</Item>\n  </Grid.Item>\n</Grid.Container>\n"})},99210:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(72779),s=t.n(r),i=t(80215),l=t(52322);function o(n){let{className:e=null,...t}=n;return(0,l.jsx)(i.Z,{className:s()("dnb-forms-test-element",e),...t})}o._supportsSpacingProps=!0}}]);
//# sourceMappingURL=component---src-docs-uilib-layout-grid-container-mdx-141b814e0ee820e2ebb1.js.map