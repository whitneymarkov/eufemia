"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[68938,95317,66909],{6343:function(n,e,r){r.r(e);var s=r(52322),t=r(45392),i=r(71853),o=r(32237);function d(n){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.default,{}),"\n",(0,s.jsx)(o.default,{})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(d,n)})):d()}},32237:function(n,e,r){r.r(e);var s=r(52322),t=r(45392),i=r(89793);function o(n){const e=Object.assign({h2:"h2",code:"code",p:"p"},(0,t.ah)(),n.components);return i||d("Examples",!1),i.OrderHorizontal||d("Examples.OrderHorizontal",!0),i.OrderVertical||d("Examples.OrderVertical",!0),i.ResponsiveAdvanced||d("Examples.ResponsiveAdvanced",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{children:"Demo"}),"\n",(0,s.jsxs)(e.h2,{children:["Responsive ",(0,s.jsx)(e.code,{children:"span"})," usage"]}),"\n",(0,s.jsx)(i.ResponsiveAdvanced,{}),"\n",(0,s.jsx)(e.h2,{children:"Tab order horizontal"}),"\n",(0,s.jsx)(e.p,{children:"In this example, the order changes, so does the tab (key) order."}),"\n",(0,s.jsx)(i.OrderHorizontal,{}),"\n",(0,s.jsx)(e.h2,{children:"Tab order vertical"}),"\n",(0,s.jsx)(e.p,{children:"In this example, the order changes, so does the tab (key) order."}),"\n",(0,s.jsx)(i.OrderVertical,{})]})}function d(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(o,n)})):o(n)}},71853:function(n,e,r){r.r(e);var s=r(52322),t=r(45392),i=r(89793);function o(n){const e=Object.assign({h2:"h2",p:"p",code:"code",a:"a",ul:"ul",li:"li",h3:"h3"},(0,t.ah)(),n.components);return i||d("Examples",!1),i.BasicSpan||d("Examples.BasicSpan",!0),i.ResponsiveSpan||d("Examples.ResponsiveSpan",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{children:"Description"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"Grid.Item"})," is a building block for ",(0,s.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout",children:"CSS grid"})," based layout of contents and components. Should be used in combination with ",(0,s.jsx)(e.a,{href:"/uilib/layout/grid/container/",children:"Grid.Container"}),"."]}),"\n",(0,s.jsxs)(e.p,{children:["The columns do change based on what ",(0,s.jsx)(e.a,{href:"/uilib/usage/layout/media-queries/",children:"breakpoint"})," the browser is in:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["4 columns when ",(0,s.jsx)(e.code,{children:"small"})]}),"\n",(0,s.jsxs)(e.li,{children:["6 columns when ",(0,s.jsx)(e.code,{children:"medium"})]}),"\n",(0,s.jsxs)(e.li,{children:["12 columns when ",(0,s.jsx)(e.code,{children:"large"})]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{children:"Span"}),"\n",(0,s.jsxs)(e.p,{children:["You need to provide a ",(0,s.jsx)(e.code,{children:"span"})," prop with a number from 1 to 12 (can be changed in ",(0,s.jsx)(e.a,{href:"/uilib/layout/grid/container/",children:"Grid.Container"})," with the ",(0,s.jsx)(e.code,{children:"columns"})," property)."]}),"\n",(0,s.jsx)(e.p,{children:"The span will be used to specify where the item is placed in the grid columns."}),"\n",(0,s.jsx)(e.p,{children:"A span needs always two numbers – from and to."}),"\n",(0,s.jsx)(i.BasicSpan,{}),"\n",(0,s.jsx)(e.p,{children:"Example of spans:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"span={[1, 'end']}"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"span={{ small: [1, 4], medium: [1, 6], large: [1, 12]}}"})}),"\n"]}),"\n",(0,s.jsx)(e.h3,{children:"Responsive spans"}),"\n",(0,s.jsx)(e.p,{children:"You can also make spans respond to media queries."}),"\n",(0,s.jsxs)(e.p,{children:["For doing so, provide a ",(0,s.jsx)(e.code,{children:"span"})," prop with an object containing ",(0,s.jsx)(e.a,{href:"/uilib/usage/layout/media-queries/",children:"Media Query"})," types. Each media size should contain a span, like mentioned above."]}),"\n",(0,s.jsx)(i.ResponsiveSpan,{})]})}function d(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(o,n)})):o(n)}},89793:function(n,e,r){r.r(e),r.d(e,{BasicSpan:function(){return d},OrderHorizontal:function(){return m},OrderVertical:function(){return p},ResponsiveAdvanced:function(){return c},ResponsiveSpan:function(){return a}});r(2784);var s=r(28204),t=r(99210),i=r(75511),o=r(52322);const d=()=>(0,o.jsx)(s.Z,{children:"<Grid.Container>\n  <Grid.Item span={[1, 6]}>uses 50% in width</Grid.Item>\n  <Grid.Item span={[7, 12]}>uses 50% in width</Grid.Item>\n</Grid.Container>\n"}),a=()=>(0,o.jsx)(s.Z,{children:"<Grid.Container>\n  <Grid.Item\n    span={{\n      small: [1, 12],\n      large: [1, 6],\n    }}\n  >\n    uses 50% or 100% based on the screen size\n  </Grid.Item>\n  <Grid.Item\n    span={{\n      small: [1, 12],\n      large: [7, 12],\n    }}\n  >\n    uses 50% or 100% based on the screen size\n  </Grid.Item>\n</Grid.Container>\n"}),l=[{background:"#babeee"},{background:"#dfe0ee"},{background:"#90d2c3"},{background:"#ecf4be"}],c=()=>(0,o.jsx)(s.Z,{scope:{TestElement:t.Z,colors:l},children:"<Grid.Container rowGap columnGap>\n  <Grid.Item\n    span={{\n      small: [1, 2],\n      medium: [1, 3],\n      large: [1, 12],\n    }}\n    style={colors[0]}\n    element={TestElement}\n  >\n    Item A\n  </Grid.Item>\n\n  <Grid.Item\n    span={{\n      small: [3, 4],\n      medium: [4, 6],\n      large: [1, 4],\n    }}\n    style={colors[1]}\n    element={TestElement}\n  >\n    Item B\n  </Grid.Item>\n\n  <Grid.Item\n    span={{\n      small: [2, 3],\n      medium: [4, 6],\n      large: [5, 8],\n    }}\n    style={colors[2]}\n    element={TestElement}\n  >\n    Item C\n  </Grid.Item>\n\n  <Grid.Item\n    span={{\n      small: [1, 4],\n      medium: [4, 6],\n      large: [9, 12],\n    }}\n    style={colors[3]}\n    element={TestElement}\n  >\n    Item D\n  </Grid.Item>\n</Grid.Container>\n"}),m=()=>(0,o.jsx)(s.Z,{scope:{Item:n=>{let{children:e}=n;return(0,o.jsx)(i.ZP,{stretch:!0,selectall:!0,children:e})}},children:"<Grid.Container rowGap columnGap columns={12}>\n  <Grid.Item span={[1, 6]}>\n    <Item>Left top</Item>\n  </Grid.Item>\n  <Grid.Item span={[7, 12]}>\n    <Item>Right top</Item>\n  </Grid.Item>\n  <Grid.Item span={[1, 6]}>\n    <Item>Left bottom</Item>\n  </Grid.Item>\n  <Grid.Item span={[7, 12]}>\n    <Item>Right bottom</Item>\n  </Grid.Item>\n</Grid.Container>\n"}),p=()=>(0,o.jsx)(s.Z,{scope:{Item:n=>{let{children:e}=n;return(0,o.jsx)(i.ZP,{stretch:!0,selectall:!0,children:e})}},children:"<Grid.Container rowGap columnGap columns={12}>\n  <Grid.Item span={[1, 6]}>\n    <Item>Left top</Item>\n  </Grid.Item>\n  <Grid.Item span={[1, 6]}>\n    <Item>Left bottom</Item>\n  </Grid.Item>\n  <Grid.Item span={[7, 12]}>\n    <Item>Right top</Item>\n  </Grid.Item>\n  <Grid.Item span={[7, 12]}>\n    <Item>Right bottom</Item>\n  </Grid.Item>\n</Grid.Container>\n"})},99210:function(n,e,r){r.d(e,{Z:function(){return d}});var s=r(72779),t=r.n(s),i=r(80215),o=r(52322);function d(n){let{className:e=null,...r}=n;return(0,o.jsx)(i.Z,{className:t()("dnb-forms-test-element",e),...r})}d._supportsSpacingProps=!0}}]);
//# sourceMappingURL=component---src-docs-uilib-layout-grid-item-mdx-1e618e0b7c6439307d4c.js.map