"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[98239,88479,98010],{97764:function(e,n,t){t.r(n);var l=t(52322),i=t(45392),s=t(22562),r=t(85011);function o(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.default,{}),"\n",(0,l.jsx)(r.default,{})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(o,e)})):o()}},85011:function(e,n,t){t.r(n),t.d(n,{default:function(){return S}});var l={};t.r(l),t.d(l,{HorizontalAutoSize:function(){return y},HorizontalFlexItemResponsiveSize:function(){return j},HorizontalFlexItemResponsiveSizeCustomColumns:function(){return g},LayoutComponents:function(){return f},MediaQueryLiveExample:function(){return C},MediaQueryUseMedia:function(){return I},colors:function(){return F}});var i=t(52322),s=t(45392),r=t(2784),o=t(64368),a=t(35235),d=t(3308),c=t(46543),m=t(99210),u=t(96781),x=t(67571),h=t(87682),p=t(81858);const f=()=>(0,i.jsx)(o.Z,{scope:{Field:d,Form:c},children:'<Flex.Stack>\n  <Form.MainHeading>Profile</Form.MainHeading>\n\n  <Card stack>\n    <Form.SubHeading>Name</Form.SubHeading>\n\n    <Field.String label="Fornavn" value="John" />\n    <Field.String label="Etternavn" value="Smith" />\n  </Card>\n\n  <Card stack>\n    <Form.SubHeading>More information</Form.SubHeading>\n\n    <Field.NationalIdentityNumber value="20058512345" />\n    <Field.Email value="john@smith.email" />\n    <Field.PhoneNumber value="+47 98765432" />\n  </Card>\n</Flex.Stack>\n'}),F=[{background:"#babeee"},{background:"#dfe0ee"},{background:"#90d2c3"},{background:"#ecf4be"}],j=()=>(0,i.jsx)(o.Z,{scope:{colors:F,TestElement:m.Z},"data-visual-test":"flex-item-size",children:"<Flex.Container>\n  <Flex.Item size={8}>\n    <TestElement style={colors[0]}>FlexItem (8)</TestElement>\n  </Flex.Item>\n  <Flex.Item size={4}>\n    <TestElement style={colors[1]}>FlexItem (4)</TestElement>\n  </Flex.Item>\n  <Flex.Item\n    size={{\n      small: 12,\n      medium: 4,\n    }}\n  >\n    <TestElement style={colors[2]}>\n      FlexItem (small: 8, medium: 4)\n    </TestElement>\n  </Flex.Item>\n  <Flex.Item\n    size={{\n      small: 12,\n      medium: 8,\n    }}\n  >\n    <TestElement style={colors[3]}>\n      FlexItem (small: 4, medium: 8)\n    </TestElement>\n  </Flex.Item>\n</Flex.Container>\n"}),g=()=>(0,i.jsx)(o.Z,{scope:{colors:F,TestElement:m.Z,Field:d,defaultBreakpoints:x.R1,defaultQueries:h.L},noInline:!0,children:"const breakpoints = {\n  ...defaultBreakpoints,\n  xsmall: '30em',\n}\nconst queries = {\n  ...defaultQueries,\n  xsmall: {\n    min: 0,\n    max: 'xsmall',\n  },\n  small: {\n    min: 'xsmall',\n    max: 'small',\n  },\n}\nconst CustomMediaQuery = styled.div`\n  display: flex;\n  flex-direction: column;\n  .dnb-flex-container[data-media-key='xsmall'] .dnb-flex-item--responsive {\n    --size: var(--xsmall);\n  }\n`\nrender(\n  <CustomMediaQuery>\n    <Flex.Container\n      direction=\"horizontal\"\n      sizeCount={4}\n      breakpoints={breakpoints}\n      queries={queries}\n    >\n      <Flex.Item\n        size={{\n          small: 2,\n          medium: 3,\n          large: 1,\n        }}\n      >\n        <TestElement style={colors[0]}>FlexItem</TestElement>\n      </Flex.Item>\n      <Flex.Item\n        size={{\n          small: 2,\n          medium: 1,\n          large: 2,\n        }}\n      >\n        <TestElement style={colors[1]}>FlexItem</TestElement>\n      </Flex.Item>\n      <Flex.Item\n        size={{\n          xsmall: 4,\n          small: 2,\n          medium: 1,\n          large: 1,\n        }}\n      >\n        <TestElement style={colors[2]}>FlexItem</TestElement>\n      </Flex.Item>\n      <Flex.Item\n        size={{\n          xsmall: 4,\n          small: 2,\n          medium: 3,\n          large: 4,\n        }}\n      >\n        <TestElement style={colors[3]}>FlexItem</TestElement>\n      </Flex.Item>\n    </Flex.Container>\n  </CustomMediaQuery>,\n)\n"}),y=()=>(0,i.jsx)(o.Z,{scope:{Field:d,FieldBlock:u.ZP},hideCode:!0,children:'<FieldBlock label="Label">\n  <Flex.Container>\n    <Flex.Item\n      size={{\n        small: 12,\n        large: \'auto\',\n      }}\n    >\n      <Field.Name.First path="/firstName" width="medium" minLength={2} />\n    </Flex.Item>\n    <Flex.Item\n      size={{\n        small: 12,\n        large: \'auto\',\n      }}\n    >\n      <Field.Name.Last path="/lastName" width="medium" required />\n    </Flex.Item>\n    <Flex.Item\n      size={{\n        small: 12,\n        large: \'auto\',\n      }}\n    >\n      <FieldBlock width="large">\n        <Slider\n          min={1900}\n          max={new Date().getFullYear()}\n          step={1}\n          value={2010}\n          label="Birth year"\n          label_direction="vertical"\n          tooltip\n          alwaysShowTooltip\n        />\n      </FieldBlock>\n    </Flex.Item>\n  </Flex.Container>\n</FieldBlock>\n'}),b=()=>{const[e,n]=r.useState("undefined"!=typeof window?window.innerWidth:0);return r.useEffect((()=>{const e=()=>{n(window.innerWidth)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),{innerWidth:e}},I=()=>(0,i.jsx)(o.Z,{scope:{useMedia:h.Z,useWindowWidth:b},hideCode:!0,noInline:!0,children:"const Playground = () => {\n  const { isSmall, isMedium, isLarge, isSSR } = useMedia()\n  const { innerWidth } = useWindowWidth()\n  return (\n    <Code>\n      <pre>\n        {JSON.stringify(\n          {\n            isSmall,\n            isMedium,\n            isLarge,\n            isSSR,\n            innerWidth,\n          },\n          null,\n          2,\n        )}\n      </pre>\n    </Code>\n  )\n}\nrender(<Playground />)\n"}),C=()=>(0,i.jsx)(o.Z,{scope:{MediaQuery:a.Z,useMediaQuery:p.Z},hideCode:!0,noInline:!0,children:"const Playground = () => {\n  const [query, updateQuery] = React.useState({\n    screen: true,\n    not: true,\n    min: 'small',\n    max: 'large',\n  })\n  const match1 = useMediaQuery({\n    matchOnSSR: true,\n    when: query,\n  })\n  const match2 = useMediaQuery({\n    matchOnSSR: true,\n    not: true,\n    when: query,\n  })\n  React.useEffect(() => {\n    console.log('mediaQuery:', match1, match2)\n  }, [match1, match2])\n  return (\n    <>\n      <Button\n        onClick={() => {\n          updateQuery({\n            ...query,\n            screen: !query.screen,\n          })\n        }}\n        right\n      >\n        Switch\n      </Button>\n      <MediaQuery when={query}>\n        <Code>when</Code>\n      </MediaQuery>\n      <MediaQuery not when={query}>\n        <Code>not when</Code>\n      </MediaQuery>\n    </>\n  )\n}\nrender(<Playground />)\n"});function w(e){const n=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code"},(0,s.ah)(),e.components);return l||v("Examples",!1),j||v("Examples.HorizontalFlexItemResponsiveSize",!0),g||v("Examples.HorizontalFlexItemResponsiveSizeCustomColumns",!0),f||v("Examples.LayoutComponents",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{children:"Demos"}),"\n",(0,i.jsx)(n.h3,{children:"Used in forms"}),"\n",(0,i.jsx)(f,{}),"\n",(0,i.jsx)(n.h3,{children:"Responsive Flex.Item"}),"\n",(0,i.jsxs)(n.p,{children:["With the default ",(0,i.jsx)(n.code,{children:"sizeCount"})," of 12 parts."]}),"\n",(0,i.jsx)(j,{}),"\n",(0,i.jsx)(n.h3,{children:"Customized Flex.Item sizes"}),"\n",(0,i.jsxs)(n.p,{children:["With a custom amount of 4 parts (",(0,i.jsx)(n.code,{children:"sizeCount"}),") as well as custom breakpoints and media queries."]}),"\n",(0,i.jsx)(g,{})]})}var S=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(w,e)})):w(e)};function v(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},22562:function(e,n,t){t.r(n);var l=t(52322),i=t(45392);function s(e){const n=Object.assign({h2:"h2",p:"p",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre"},(0,i.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["To make it easier to build application layout and ",(0,l.jsx)(n.a,{href:"/uilib/extensions/forms",children:"form"}),"-views in line with defined design sketches, there are a number of components for layout."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.a,{href:"/uilib/layout/flex/container",children:"Flex.Container"})})," is a building block for CSS flexbox based layout of contents and components."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"Flex.Vertical"})})," can be used as an alias instead of the property ",(0,l.jsx)(n.code,{children:'direction="vertical"'}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"Flex.Horizontal"})})," can be used as an alias instead of the property ",(0,l.jsx)(n.code,{children:'direction="horizontal"'}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.a,{href:"/uilib/layout/flex/item",children:"Flex.Item"})})," is a building block for CSS flexbox based layout of contents and components."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.a,{href:"/uilib/layout/flex/stack",children:"Flex.Stack"})})," is an outer block element for wrapping content to get the correct layout and spacing between region and region headings."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-jsx",children:"import { Flex } from '@dnb/eufemia'\n\nrender(\n  <Flex.Container>\n    <Flex.Item>content</Flex.Item>\n  </Flex.Container>,\n)\n"})}),"\n",(0,l.jsxs)(n.p,{children:["You can find more related information in the ",(0,l.jsx)(n.a,{href:"/uilib/layout",children:"Layout"})," pages."]})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(s,e)})):s(e)}},99210:function(e,n,t){t.d(n,{Z:function(){return o}});var l=t(72779),i=t.n(l),s=t(80215),r=t(52322);function o(e){let{className:n=null,...t}=e;return(0,r.jsx)(s.Z,{className:i()("dnb-forms-test-element",n),...t})}o._supportsSpacingProps=!0}}]);
//# sourceMappingURL=component---src-docs-uilib-layout-flex-mdx-4d5c2270b88ff94413bd.js.map