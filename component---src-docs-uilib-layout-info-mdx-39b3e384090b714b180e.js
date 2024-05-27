"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[15536],{4491:function(e,n,i){i.r(n);var l=i(52322),s=i(45392);i(84285);function t(e){const n=Object.assign({h2:"h2",p:"p",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",em:"em",h3:"h3",pre:"pre"},(0,s.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["To make it easier to build application layout and ",(0,l.jsx)(n.a,{href:"/uilib/extensions/forms",children:"form"}),"-views in line with defined design sketches, there are a number of components for layout."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.a,{href:"/uilib/layout/spacing",children:"Spacing"})})," table and information."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.a,{href:"/uilib/layout/media-queries",children:"Media Queries"})})," and breakpoints table and information."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.a,{href:"/uilib/layout/flex",children:"Flex"})})," is a building block for CSS flexbox based layout of contents, components and ",(0,l.jsx)(n.a,{href:"/uilib/extensions/forms",children:"forms"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.a,{href:"/uilib/layout/grid",children:"Grid"})})," is a layout system for CSS grid based layout of contents."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.a,{href:"/uilib/layout/space",children:"Space"})})," is a component that provides ",(0,l.jsx)(n.code,{children:"margins"})," within the ",(0,l.jsx)(n.a,{href:"/uilib/usage/layout/spacing#spacing-helpers",children:"provided spacing patterns"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{children:"Deprecated layout components"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.a,{href:"/uilib/layout/form-set",children:"FormSet"})})," is deprecated. Use ",(0,l.jsx)(n.a,{href:"/uilib/layout/flex",children:"Flex"}),", the ",(0,l.jsx)(n.a,{href:"/uilib/extensions/forms",children:"Forms"})," extension and the Eufemia ",(0,l.jsx)(n.a,{href:"/uilib/usage/customisation/provider-info",children:"Provider"})," as an replacement."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.a,{href:"/uilib/layout/form-row",children:"FormRow"})})," is deprecated. Use ",(0,l.jsx)(n.a,{href:"/uilib/layout/flex",children:"Flex"})," and the ",(0,l.jsx)(n.a,{href:"/uilib/extensions/forms",children:"Forms"})," extension as an replacement."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{children:"Units and responsiveness"}),"\n",(0,l.jsxs)(n.p,{children:["Please – use ",(0,l.jsx)(n.code,{children:"rem"})," instead of ",(0,l.jsx)(n.code,{children:"px"})," for all of your custom CSS, and make sure;"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["you always use the nearest half ",(0,l.jsx)(n.code,{children:"rem"})," value, like ",(0,l.jsx)(n.em,{children:"0.5rem"}),", ",(0,l.jsx)(n.em,{children:"1rem"})," or ",(0,l.jsx)(n.em,{children:"1.5rem"})," and so forth."]}),"\n",(0,l.jsxs)(n.li,{children:["you always get a ",(0,l.jsx)(n.strong,{children:"total computed height"})," within the grid."]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["This results in maintaining the integrity of the ",(0,l.jsx)(n.strong,{children:"8px"})," base grid."]}),"\n",(0,l.jsx)(n.h3,{children:"Exceptions"}),"\n",(0,l.jsxs)(n.p,{children:['There are exceptions for when you define a "minimum" of an area, such as ',(0,l.jsx)(n.code,{children:"min-width"}),". Because it will increase in size when a larger browser font-size is used. In that case, user ",(0,l.jsx)(n.code,{children:"px"})," as your sizing unit."]}),"\n",(0,l.jsx)(n.h3,{children:"Smaller Units"}),"\n",(0,l.jsxs)(n.p,{children:["Sometimes you may need a compensation of only a few pixels. Heres how to calculate the correct ",(0,l.jsx)(n.em,{children:"rem"})," values:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["1px = ",(0,l.jsx)(n.code,{children:"1/16x1"})," = ",(0,l.jsx)(n.strong,{children:"0.0625rem"})]}),"\n",(0,l.jsxs)(n.li,{children:["2px = ",(0,l.jsx)(n.code,{children:"1/16x2"})," = ",(0,l.jsx)(n.strong,{children:"0.125rem"})]}),"\n",(0,l.jsx)(n.li,{children:"And so on ..."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{children:"Columns"}),"\n",(0,l.jsx)(n.p,{children:"UX designers are using a 12 column system, along with a 4 and 6 column system, during their design processes."}),"\n",(0,l.jsx)(n.h3,{children:"What are the differences between Flex and Grid?"}),"\n",(0,l.jsx)(n.p,{children:"Both to support different sizing of items on different media breakpoints."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Flex"})}),"\n",(0,l.jsxs)(n.p,{children:["Uses CSS ",(0,l.jsx)(n.code,{children:"flexbox"}),"."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Best suited for Forms layout."}),"\n",(0,l.jsx)(n.li,{children:"Can either stack vertically or horizontally."}),"\n",(0,l.jsx)(n.li,{children:"Can be used with any kind of children."}),"\n",(0,l.jsx)(n.li,{children:"Even distribution of space."}),"\n",(0,l.jsx)(n.li,{children:"Keeps order of items like they were given in the DOM structure."}),"\n",(0,l.jsx)(n.li,{children:"Items can be sized in percentage."}),"\n",(0,l.jsx)(n.li,{children:"When a size (percentage) is given, they stack horizontally."}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-jsx",children:"import { Flex } from '@dnb/eufemia'\nrender(\n  <Flex.Container>\n    <Flex.Item>content</Flex.Item>\n    <OtherComponent>content</OtherComponent>\n  </Flex.Container>,\n)\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Grid"})}),"\n",(0,l.jsxs)(n.p,{children:["Uses CSS ",(0,l.jsx)(n.code,{children:"grid"}),"."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Best suited for applications with a column based layout."}),"\n",(0,l.jsx)(n.li,{children:"Columns do change between 4, 6 and 12 on the given size (media query) of the browser or screen size."}),"\n",(0,l.jsx)(n.li,{children:"The Grid.Container depends on Grid.Item."}),"\n",(0,l.jsx)(n.li,{children:'Items do span from column "a" to "b".'}),"\n",(0,l.jsx)(n.li,{children:"Items can have different order in opposition from what's given in the DOM structure."}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-jsx",children:"import { Grid } from '@dnb/eufemia'\n\nrender(\n  <Grid.Container>\n    <Grid.Item>content</Grid.Item>\n    <Grid.Item>content</Grid.Item>\n  </Grid.Container>,\n)\n"})})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(t,e)})):t(e)}},84285:function(e,n,i){i.r(n),i.d(n,{AllComponentsHorizontalTestCase:function(){return W},AllComponentsVerticalLabelsTestCase:function(){return O},AllComponentsVerticalTestCase:function(){return q},FormSetAlternativeAfter:function(){return P},FormSetAlternativeBefore:function(){return A},FormSetAlternativeForms:function(){return R},HorizontalFlexItemResponsiveSize:function(){return G},HorizontalFlexItemResponsiveSizeCustomColumns:function(){return H},LayoutComponents:function(){return T},MediaQueryLiveExample:function(){return Q},MediaQueryUseMedia:function(){return B},ResponsiveGridContainer:function(){return L},colors:function(){return E}});var l=i(2784),s=i(75333),t=i(35235),r=i(80215),o=i(3805),a=i(96844),d=i(75511),c=i(469),m=i(25807),u=i(71618),h=i(59194),x=i(20167),p=i(35944),j=i(55904),g=i(16353),f=i(99399),b=i(89751),y=i(38644),F=i(90715),v=i(70564),I=i(99210),w=i(67571),C=i(87682),S=i(81858),k=i(60131),Z=i(44086),z=i(52322);const T=()=>(0,z.jsx)(s.Z,{scope:{Field:F,Form:v},hideCode:!0,children:'<Flex.Stack>\n  <Form.MainHeading>Profile</Form.MainHeading>\n\n  <Card stack>\n    <Form.SubHeading>Name</Form.SubHeading>\n\n    <Field.String label="Fornavn" value="John" />\n    <Field.String label="Etternavn" value="Smith" />\n  </Card>\n\n  <Card stack>\n    <Form.SubHeading>More information</Form.SubHeading>\n\n    <Field.NationalIdentityNumber value="20058512345" />\n    <Field.Email value="john@smith.email" />\n    <Field.PhoneNumber value="+47 98765432" />\n  </Card>\n</Flex.Stack>\n'}),E=[{background:"#babeee"},{background:"#dfe0ee"},{background:"#90d2c3"},{background:"#ecf4be"}],G=()=>(0,z.jsx)(s.Z,{scope:{colors:E,TestElement:I.Z},hideCode:!0,"data-visual-test":"flex-item-size",children:"<Flex.Container>\n  <Flex.Item size={8}>\n    <TestElement style={colors[0]}>FlexItem (8)</TestElement>\n  </Flex.Item>\n  <Flex.Item size={4}>\n    <TestElement style={colors[1]}>FlexItem (4)</TestElement>\n  </Flex.Item>\n  <Flex.Item\n    size={{\n      small: 12,\n      medium: 4,\n    }}\n  >\n    <TestElement style={colors[2]}>\n      FlexItem (small: 8, medium: 4)\n    </TestElement>\n  </Flex.Item>\n  <Flex.Item\n    size={{\n      small: 12,\n      medium: 8,\n    }}\n  >\n    <TestElement style={colors[3]}>\n      FlexItem (small: 4, medium: 8)\n    </TestElement>\n  </Flex.Item>\n</Flex.Container>\n"}),H=()=>(0,z.jsx)(s.Z,{hideCode:!0,scope:{colors:E,TestElement:I.Z,Field:F,defaultBreakpoints:w.R1,defaultQueries:C.L},"data-visual-test":"flex-item-custom-size",noInline:!0,children:"const breakpoints = {\n  ...defaultBreakpoints,\n  xsmall: '30em',\n}\nconst queries = {\n  ...defaultQueries,\n  xsmall: {\n    min: 0,\n    max: 'xsmall',\n  },\n  small: {\n    min: 'xsmall',\n    max: 'small',\n  },\n}\nconst CustomMediaQuery = styled.div`\n  display: flex;\n  flex-direction: column;\n  .dnb-flex-container[data-media-key='xsmall'] .dnb-flex-item--responsive {\n    --size: var(--xsmall);\n  }\n`\nrender(\n  <CustomMediaQuery>\n    <Flex.Container\n      direction=\"horizontal\"\n      sizeCount={4}\n      breakpoints={breakpoints}\n      queries={queries}\n    >\n      <Flex.Item\n        size={{\n          small: 2,\n          medium: 3,\n          large: 1,\n        }}\n      >\n        <TestElement style={colors[0]}>FlexItem</TestElement>\n      </Flex.Item>\n      <Flex.Item\n        size={{\n          small: 2,\n          medium: 1,\n          large: 2,\n        }}\n      >\n        <TestElement style={colors[1]}>FlexItem</TestElement>\n      </Flex.Item>\n      <Flex.Item\n        size={{\n          xsmall: 4,\n          small: 2,\n          medium: 1,\n          large: 1,\n        }}\n      >\n        <TestElement style={colors[2]}>FlexItem</TestElement>\n      </Flex.Item>\n      <Flex.Item\n        size={{\n          xsmall: 4,\n          small: 2,\n          medium: 3,\n          large: 4,\n        }}\n      >\n        <TestElement style={colors[3]}>FlexItem</TestElement>\n      </Flex.Item>\n    </Flex.Container>\n  </CustomMediaQuery>,\n)\n"}),M=()=>{const[e,n]=l.useState("undefined"!=typeof window?window.innerWidth:0);return l.useEffect((()=>{const e=()=>{n(window.innerWidth)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),{innerWidth:e}},B=()=>(0,z.jsx)(s.Z,{scope:{useMedia:C.Z,useWindowWidth:M},hideCode:!0,noInline:!0,children:"const Playground = () => {\n  const { isSmall, isMedium, isLarge, isSSR } = useMedia()\n  const { innerWidth } = useWindowWidth()\n  return (\n    <Code>\n      <pre>\n        {JSON.stringify(\n          {\n            isSmall,\n            isMedium,\n            isLarge,\n            isSSR,\n            innerWidth,\n          },\n          null,\n          2,\n        )}\n      </pre>\n    </Code>\n  )\n}\nrender(<Playground />)\n"}),Q=()=>(0,z.jsx)(s.Z,{scope:{MediaQuery:t.Z,useMediaQuery:S.Z},hideCode:!0,noInline:!0,children:"const Playground = () => {\n  const [query, updateQuery] = React.useState({\n    screen: true,\n    not: true,\n    min: 'small',\n    max: 'large',\n  })\n  const match1 = useMediaQuery({\n    matchOnSSR: true,\n    when: query,\n  })\n  const match2 = useMediaQuery({\n    matchOnSSR: true,\n    not: true,\n    when: query,\n  })\n  React.useEffect(() => {\n    console.log('mediaQuery:', match1, match2)\n  }, [match1, match2])\n  return (\n    <>\n      <Button\n        onClick={() => {\n          updateQuery({\n            ...query,\n            screen: !query.screen,\n          })\n        }}\n        right\n      >\n        Switch\n      </Button>\n      <MediaQuery when={query}>\n        <Code>when</Code>\n      </MediaQuery>\n      <MediaQuery not when={query}>\n        <Code>not when</Code>\n      </MediaQuery>\n    </>\n  )\n}\nrender(<Playground />)\n"}),L=()=>(0,z.jsx)(s.Z,{hideCode:!0,scope:{TestElement:I.Z,colors:E},children:"<Grid.Container rowGap columnGap>\n  <Grid.Item\n    span={{\n      small: [1, 2],\n      medium: [1, 3],\n      large: [1, 12],\n    }}\n    style={colors[0]}\n    element={TestElement}\n  >\n    Item A\n  </Grid.Item>\n\n  <Grid.Item\n    span={{\n      small: [3, 4],\n      medium: [4, 6],\n      large: [1, 4],\n    }}\n    style={colors[1]}\n    element={TestElement}\n  >\n    Item B\n  </Grid.Item>\n\n  <Grid.Item\n    span={{\n      small: [2, 3],\n      medium: [4, 6],\n      large: [5, 8],\n    }}\n    style={colors[2]}\n    element={TestElement}\n  >\n    Item C\n  </Grid.Item>\n\n  <Grid.Item\n    span={{\n      small: [1, 4],\n      medium: [4, 6],\n      large: [9, 12],\n    }}\n    style={colors[3]}\n    element={TestElement}\n  >\n    Item D\n  </Grid.Item>\n</Grid.Container>\n"}),A=()=>(0,z.jsx)(s.Z,{children:'<FormSet label_direction="vertical">\n  <H2 top={0}>Heading</H2>\n  <FormRow label={<span className="dnb-h--medium">Legend</span>}>\n    <Input label="Label A" right />\n    <Input label="Label B" />\n  </FormRow>\n</FormSet>\n'}),P=()=>(0,z.jsx)(s.Z,{children:'<Provider\n  formElement={{\n    label_direction: \'vertical\',\n  }}\n>\n  <Form.Handler>\n    <H2 top={0}>Heading</H2>\n    <FieldBlock label={<span className="dnb-h--medium">Legend</span>}>\n      <Flex.Horizontal>\n        <Input label="Label A" />\n        <Input label="Label B" />\n      </Flex.Horizontal>\n    </FieldBlock>\n  </Form.Handler>\n</Provider>\n'}),R=()=>(0,z.jsx)(s.Z,{children:'<Form.Handler>\n  <Flex.Stack>\n    <Form.MainHeading>Heading</Form.MainHeading>\n    <FieldBlock label={<span className="dnb-h--medium">Legend</span>}>\n      <Flex.Horizontal>\n        <Field.String label="Label A" width="medium" />\n        <Field.String label="Label B" width="large" />\n      </Flex.Horizontal>\n    </FieldBlock>\n  </Flex.Stack>\n</Form.Handler>\n'}),N=function(e){let{direction:n="vertical",showText:i=!1,hideLabel:l=!1}=void 0===e?{}:e;const s={left:"horizontal"===n?"small":null,top:"horizontal"!==n?"small":null};let t={datePicker:"DatePicker:",dropdown:"Dropdown:",autocomplete:"Autocomplete:",checkbox:"Checkbox",radio:"Radio",radioGroup:"Radio Group:",toggleButton:"Toggle:",toggleButtonGroup:"Toggle Group:",switch:"Switch",input:"Input:",textarea:"Textarea:",slider:"Slider:"};l&&(t=Object.entries(t).reduce(((e,n)=>{let[i]=n;return e[i]="",e}),{}));const F=()=>(0,z.jsxs)(z.Fragment,{children:[i&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(r.Z,{...s,inline:!0,children:(0,z.jsxs)("p",{className:"dnb-p",children:["paragraph"," ",(0,z.jsx)(o.Z,{icon:"bell",size:"medium",...s,style:{margin:0}})]})}),"text"]}),(0,z.jsx)(a.Z,{text:"Button",...s}),(0,z.jsx)(a.Z,{icon:"add",...s}),(0,z.jsx)(d.ZP,{label:t.input,...s}),(0,z.jsx)(c.Z,{label:t.dropdown,data:["Item A","Item B","Item C"],...s}),(0,z.jsx)(m.Z,{label:t.autocomplete,data:["Item A","Item B","Item C"],...s}),(0,z.jsx)(u.Z,{label:t.datePicker,...s}),(0,z.jsx)(o.Z,{icon:"bell",size:"medium",...s}),(0,z.jsx)(h.Z,{label:t.checkbox,...s}),(0,z.jsx)(x.Z,{label:t.radio,...s}),(0,z.jsxs)(x.Z.Group,{label:t.radioGroup,...s,children:[(0,z.jsx)(x.Z,{label:t.radio,value:"a"}),(0,z.jsx)(x.Z,{label:t.radio,value:"b"})]}),(0,z.jsx)(p.Z,{label:t.toggleButton,text:"Toggle",...s}),(0,z.jsxs)(p.Z.Group,{label:t.toggleButtonGroup,...s,children:[(0,z.jsx)(p.Z,{text:"Toggle A",value:"a"}),(0,z.jsx)(p.Z,{text:"Toggle B",value:"b"})]}),(0,z.jsx)(j.Z,{label:t.switch,...s}),(0,z.jsx)(g.Z,{label:t.textarea,rows:"5",...s}),(0,z.jsx)("div",{style:{display:"inline-flex"},children:(0,z.jsx)(f.Z,{label:t.slider,value:50,...s})})]});return"horizontal"===n?(0,z.jsx)(b.Z,{style:{padding:"1rem",whiteSpace:"nowrap"},children:(0,z.jsx)(F,{})}):(F._supportsSpacingProps=!0,(0,z.jsx)(y.Z,{style:{padding:"1rem"},children:(0,z.jsx)(F,{})}))},q=e=>(0,z.jsx)("div",{"data-visual-test":"form-components-alignment-vertical",...e,children:(0,z.jsx)(N,{direction:"vertical"})}),O=e=>(0,z.jsx)("div",{"data-visual-test":"form-components-alignment-vertical-labels",...e,children:(0,z.jsx)(k.Z,{formElement:{label_direction:"vertical"},children:(0,z.jsx)(N,{direction:"vertical"})})}),W=e=>(0,z.jsx)("div",{"data-visual-test":"form-components-alignment-horizontal",...e,children:(0,z.jsx)(Z.Z,{children:(0,z.jsx)(N,{direction:"horizontal"})})})},99210:function(e,n,i){i.d(n,{Z:function(){return o}});var l=i(72779),s=i.n(l),t=i(80215),r=i(52322);function o(e){let{className:n=null,...i}=e;return(0,r.jsx)(t.Z,{className:s()("dnb-forms-test-element",n),...i})}o._supportsSpacingProps=!0}}]);
//# sourceMappingURL=component---src-docs-uilib-layout-info-mdx-39b3e384090b714b180e.js.map