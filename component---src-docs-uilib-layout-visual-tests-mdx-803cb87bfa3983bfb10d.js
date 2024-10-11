"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[89935],{66818:function(e,n,t){t.r(n);var l=t(52322),s=t(45392),i=t(84285);function r(e){return i||o("Examples",!1),i.AllComponentsHorizontalTestCase||o("Examples.AllComponentsHorizontalTestCase",!0),i.AllComponentsVerticalLabelsTestCase||o("Examples.AllComponentsVerticalLabelsTestCase",!0),i.AllComponentsVerticalTestCase||o("Examples.AllComponentsVerticalTestCase",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.AllComponentsVerticalTestCase,{}),"\n",(0,l.jsx)(i.AllComponentsVerticalLabelsTestCase,{}),"\n",(0,l.jsx)(i.AllComponentsHorizontalTestCase,{})]})}function o(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(r,e)})):r()}},84285:function(e,n,t){t.r(n),t.d(n,{AllComponentsHorizontalTestCase:function(){return W},AllComponentsVerticalLabelsTestCase:function(){return q},AllComponentsVerticalTestCase:function(){return _},FormSetAlternativeAfter:function(){return P},FormSetAlternativeBefore:function(){return Q},FormSetAlternativeForms:function(){return R},HorizontalFlexItemResponsiveSize:function(){return H},HorizontalFlexItemResponsiveSizeCustomColumns:function(){return A},LayoutComponents:function(){return z},MediaQueryLiveExample:function(){return G},MediaQueryUseMedia:function(){return B},ResponsiveGridContainer:function(){return L},colors:function(){return k}});var l=t(2784),s=t(64368),i=t(35235),r=t(80215),o=t(66651),a=t(96844),m=t(75511),d=t(469),u=t(25807),c=t(71618),x=t(59194),p=t(20167),h=t(35944),b=t(33119),g=t(16353),F=t(99399),C=t(89751),f=t(38644),j=t(3308),y=t(46543),I=t(99210),v=t(67571),T=t(87682),Z=t(81858),w=t(60131),S=t(44086),E=t(52322);const z=()=>(0,E.jsx)(s.Z,{scope:{Field:j,Form:y},hideCode:!0,children:'<Flex.Stack>\n  <Form.MainHeading>Profile</Form.MainHeading>\n\n  <Card stack>\n    <Form.SubHeading>Name</Form.SubHeading>\n\n    <Field.String label="Fornavn" value="John" />\n    <Field.String label="Etternavn" value="Smith" />\n  </Card>\n\n  <Card stack>\n    <Form.SubHeading>More information</Form.SubHeading>\n\n    <Field.NationalIdentityNumber value="20058512345" />\n    <Field.Email value="john@smith.email" />\n    <Field.PhoneNumber value="+47 98765432" />\n  </Card>\n</Flex.Stack>\n'}),k=[{background:"#babeee"},{background:"#dfe0ee"},{background:"#90d2c3"},{background:"#ecf4be"}],H=()=>(0,E.jsx)(s.Z,{scope:{colors:k,TestElement:I.Z},hideCode:!0,"data-visual-test":"flex-item-size",children:"<Flex.Container>\n  <Flex.Item size={8}>\n    <TestElement style={colors[0]}>FlexItem (8)</TestElement>\n  </Flex.Item>\n  <Flex.Item size={4}>\n    <TestElement style={colors[1]}>FlexItem (4)</TestElement>\n  </Flex.Item>\n  <Flex.Item\n    size={{\n      small: 12,\n      medium: 4,\n    }}\n  >\n    <TestElement style={colors[2]}>\n      FlexItem (small: 8, medium: 4)\n    </TestElement>\n  </Flex.Item>\n  <Flex.Item\n    size={{\n      small: 12,\n      medium: 8,\n    }}\n  >\n    <TestElement style={colors[3]}>\n      FlexItem (small: 4, medium: 8)\n    </TestElement>\n  </Flex.Item>\n</Flex.Container>\n"}),A=()=>(0,E.jsx)(s.Z,{hideCode:!0,scope:{colors:k,TestElement:I.Z,Field:j,defaultBreakpoints:v.R1,defaultQueries:T.L},"data-visual-test":"flex-item-custom-size",noInline:!0,children:"const breakpoints = {\n  ...defaultBreakpoints,\n  xsmall: '30em',\n}\nconst queries = {\n  ...defaultQueries,\n  xsmall: {\n    min: 0,\n    max: 'xsmall',\n  },\n  small: {\n    min: 'xsmall',\n    max: 'small',\n  },\n}\nconst CustomMediaQuery = styled.div`\n  display: flex;\n  flex-direction: column;\n  .dnb-flex-container[data-media-key='xsmall'] .dnb-flex-item--responsive {\n    --size: var(--xsmall);\n  }\n`\nrender(\n  <CustomMediaQuery>\n    <Flex.Container\n      direction=\"horizontal\"\n      sizeCount={4}\n      breakpoints={breakpoints}\n      queries={queries}\n    >\n      <Flex.Item\n        size={{\n          small: 2,\n          medium: 3,\n          large: 1,\n        }}\n      >\n        <TestElement style={colors[0]}>FlexItem</TestElement>\n      </Flex.Item>\n      <Flex.Item\n        size={{\n          small: 2,\n          medium: 1,\n          large: 2,\n        }}\n      >\n        <TestElement style={colors[1]}>FlexItem</TestElement>\n      </Flex.Item>\n      <Flex.Item\n        size={{\n          xsmall: 4,\n          small: 2,\n          medium: 1,\n          large: 1,\n        }}\n      >\n        <TestElement style={colors[2]}>FlexItem</TestElement>\n      </Flex.Item>\n      <Flex.Item\n        size={{\n          xsmall: 4,\n          small: 2,\n          medium: 3,\n          large: 4,\n        }}\n      >\n        <TestElement style={colors[3]}>FlexItem</TestElement>\n      </Flex.Item>\n    </Flex.Container>\n  </CustomMediaQuery>,\n)\n"}),M=()=>{const[e,n]=l.useState("undefined"!=typeof window?window.innerWidth:0);return l.useEffect((()=>{const e=()=>{n(window.innerWidth)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),{innerWidth:e}},B=()=>(0,E.jsx)(s.Z,{scope:{useMedia:T.Z,useWindowWidth:M},hideCode:!0,noInline:!0,children:"const Playground = () => {\n  const { isSmall, isMedium, isLarge, isSSR } = useMedia()\n  const { innerWidth } = useWindowWidth()\n  return (\n    <Code>\n      <pre>\n        {JSON.stringify(\n          {\n            isSmall,\n            isMedium,\n            isLarge,\n            isSSR,\n            innerWidth,\n          },\n          null,\n          2,\n        )}\n      </pre>\n    </Code>\n  )\n}\nrender(<Playground />)\n"}),G=()=>(0,E.jsx)(s.Z,{scope:{MediaQuery:i.Z,useMediaQuery:Z.Z},hideCode:!0,noInline:!0,children:"const Playground = () => {\n  const [query, updateQuery] = React.useState({\n    screen: true,\n    not: true,\n    min: 'small',\n    max: 'large',\n  })\n  const match1 = useMediaQuery({\n    matchOnSSR: true,\n    when: query,\n  })\n  const match2 = useMediaQuery({\n    matchOnSSR: true,\n    not: true,\n    when: query,\n  })\n  React.useEffect(() => {\n    console.log('mediaQuery:', match1, match2)\n  }, [match1, match2])\n  return (\n    <>\n      <Button\n        onClick={() => {\n          updateQuery({\n            ...query,\n            screen: !query.screen,\n          })\n        }}\n        right\n      >\n        Switch\n      </Button>\n      <MediaQuery when={query}>\n        <Code>when</Code>\n      </MediaQuery>\n      <MediaQuery not when={query}>\n        <Code>not when</Code>\n      </MediaQuery>\n    </>\n  )\n}\nrender(<Playground />)\n"}),L=()=>(0,E.jsx)(s.Z,{hideCode:!0,scope:{TestElement:I.Z,colors:k},children:"<Grid.Container rowGap columnGap>\n  <Grid.Item\n    span={{\n      small: [1, 2],\n      medium: [1, 3],\n      large: [1, 12],\n    }}\n    style={colors[0]}\n    element={TestElement}\n  >\n    Item A\n  </Grid.Item>\n\n  <Grid.Item\n    span={{\n      small: [3, 4],\n      medium: [4, 6],\n      large: [1, 4],\n    }}\n    style={colors[1]}\n    element={TestElement}\n  >\n    Item B\n  </Grid.Item>\n\n  <Grid.Item\n    span={{\n      small: [2, 3],\n      medium: [4, 6],\n      large: [5, 8],\n    }}\n    style={colors[2]}\n    element={TestElement}\n  >\n    Item C\n  </Grid.Item>\n\n  <Grid.Item\n    span={{\n      small: [1, 4],\n      medium: [4, 6],\n      large: [9, 12],\n    }}\n    style={colors[3]}\n    element={TestElement}\n  >\n    Item D\n  </Grid.Item>\n</Grid.Container>\n"}),Q=()=>(0,E.jsx)(s.Z,{children:'<FormSet label_direction="vertical">\n  <H2 top={0}>Heading</H2>\n  <FormRow label={<span className="dnb-h--medium">Legend</span>}>\n    <Input label="Label A" right />\n    <Input label="Label B" />\n  </FormRow>\n</FormSet>\n'}),P=()=>(0,E.jsx)(s.Z,{children:'<Provider\n  formElement={{\n    label_direction: \'vertical\',\n  }}\n>\n  <Form.Handler>\n    <H2 top={0}>Heading</H2>\n    <FieldBlock label={<span className="dnb-h--medium">Legend</span>}>\n      <Flex.Horizontal>\n        <Input label="Label A" />\n        <Input label="Label B" />\n      </Flex.Horizontal>\n    </FieldBlock>\n  </Form.Handler>\n</Provider>\n'}),R=()=>(0,E.jsx)(s.Z,{children:'<Form.Handler>\n  <Flex.Stack>\n    <Form.MainHeading>Heading</Form.MainHeading>\n    <FieldBlock label={<span className="dnb-h--medium">Legend</span>}>\n      <Flex.Horizontal>\n        <Field.String label="Label A" width="medium" />\n        <Field.String label="Label B" width="large" />\n      </Flex.Horizontal>\n    </FieldBlock>\n  </Flex.Stack>\n</Form.Handler>\n'}),N=function(e){let{direction:n="vertical",showText:t=!1,hideLabel:l=!1}=void 0===e?{}:e;const s={left:"horizontal"===n?"small":null,top:"horizontal"!==n?"small":null};let i={datePicker:"DatePicker:",dropdown:"Dropdown:",autocomplete:"Autocomplete:",checkbox:"Checkbox",radio:"Radio",radioGroup:"Radio Group:",toggleButton:"Toggle:",toggleButtonGroup:"Toggle Group:",switch:"Switch",input:"Input:",textarea:"Textarea:",slider:"Slider:"};l&&(i=Object.entries(i).reduce(((e,n)=>{let[t]=n;return e[t]="",e}),{}));const j=()=>(0,E.jsxs)(E.Fragment,{children:[t&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(r.Z,{...s,inline:!0,children:(0,E.jsxs)("p",{className:"dnb-p",children:["paragraph"," ",(0,E.jsx)(o.ZP,{icon:"bell",size:"medium",...s,style:{margin:0}})]})}),"text"]}),(0,E.jsx)(a.Z,{text:"Button",...s}),(0,E.jsx)(a.Z,{icon:"add",...s}),(0,E.jsx)(m.ZP,{label:i.input,...s}),(0,E.jsx)(d.Z,{label:i.dropdown,data:["Item A","Item B","Item C"],...s}),(0,E.jsx)(u.Z,{label:i.autocomplete,data:["Item A","Item B","Item C"],...s}),(0,E.jsx)(c.Z,{label:i.datePicker,...s}),(0,E.jsx)(o.ZP,{icon:"bell",size:"medium",...s}),(0,E.jsx)(x.Z,{label:i.checkbox,...s}),(0,E.jsx)(p.Z,{label:i.radio,...s}),(0,E.jsxs)(p.Z.Group,{label:i.radioGroup,...s,children:[(0,E.jsx)(p.Z,{label:i.radio,value:"a"}),(0,E.jsx)(p.Z,{label:i.radio,value:"b"})]}),(0,E.jsx)(h.Z,{label:i.toggleButton,text:"Toggle",...s}),(0,E.jsxs)(h.Z.Group,{label:i.toggleButtonGroup,...s,children:[(0,E.jsx)(h.Z,{text:"Toggle A",value:"a"}),(0,E.jsx)(h.Z,{text:"Toggle B",value:"b"})]}),(0,E.jsx)(b.Z,{label:i.switch,...s}),(0,E.jsx)(g.Z,{label:i.textarea,rows:"5",...s}),(0,E.jsx)("div",{style:{display:"inline-flex"},children:(0,E.jsx)(F.Z,{label:i.slider,value:50,...s})})]});return"horizontal"===n?(0,E.jsx)(C.Z,{style:{padding:"1rem",whiteSpace:"nowrap"},children:(0,E.jsx)(j,{})}):(j._supportsSpacingProps=!0,(0,E.jsx)(f.Z,{style:{padding:"1rem"},children:(0,E.jsx)(j,{})}))},_=e=>(0,E.jsx)("div",{"data-visual-test":"form-components-alignment-vertical",...e,children:(0,E.jsx)(N,{direction:"vertical"})}),q=e=>(0,E.jsx)("div",{"data-visual-test":"form-components-alignment-vertical-labels",...e,children:(0,E.jsx)(w.Z,{formElement:{label_direction:"vertical"},children:(0,E.jsx)(N,{direction:"vertical"})})}),W=e=>(0,E.jsx)("div",{"data-visual-test":"form-components-alignment-horizontal",...e,children:(0,E.jsx)(S.Z,{children:(0,E.jsx)(N,{direction:"horizontal"})})})},99210:function(e,n,t){t.d(n,{Z:function(){return o}});var l=t(72779),s=t.n(l),i=t(80215),r=t(52322);function o(e){let{className:n=null,...t}=e;return(0,r.jsx)(i.Z,{className:s()("dnb-forms-test-element",n),...t})}o._supportsSpacingProps=!0}}]);
//# sourceMappingURL=component---src-docs-uilib-layout-visual-tests-mdx-803cb87bfa3983bfb10d.js.map