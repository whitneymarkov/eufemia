"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[52234],{92647:function(e,n,t){t.r(n);var l=t(52322),i=t(45392),a=t(84285),r=t(84618);function s(e){const n=Object.assign({h2:"h2",h3:"h3",p:"p",a:"a",code:"code"},(0,i.ah)(),e.components);return a||o("Examples",!1),a.HorizontalFlexItemResponsiveSize||o("Examples.HorizontalFlexItemResponsiveSize",!0),a.HorizontalFlexItemResponsiveSizeCustomColumns||o("Examples.HorizontalFlexItemResponsiveSizeCustomColumns",!0),a.LayoutComponents||o("Examples.LayoutComponents",!0),a.ResponsiveGridContainer||o("Examples.ResponsiveGridContainer",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{children:"Demos"}),"\n",(0,l.jsx)(n.h3,{children:"Horizontal aligned Cards"}),"\n",(0,l.jsxs)(n.p,{children:["Grid wraps the Cards nicely on smaller screens. More examples in the ",(0,l.jsx)(n.a,{href:"/uilib/components/card/",children:"Card"})," section."]}),"\n",(0,l.jsx)(r.WithGrid,{}),"\n",(0,l.jsxs)(n.h3,{children:["Responsive application ",(0,l.jsx)(n.a,{href:"/uilib/layout/grid/",children:"Grid"})," usage"]}),"\n",(0,l.jsx)(a.ResponsiveGridContainer,{}),"\n",(0,l.jsxs)(n.h3,{children:["Responsive ",(0,l.jsx)(n.a,{href:"/uilib/layout/flex/",children:"Flex"})," usage"]}),"\n",(0,l.jsxs)(n.p,{children:["With the default ",(0,l.jsx)(n.code,{children:"sizeCount"})," of 12 parts."]}),"\n",(0,l.jsx)(a.HorizontalFlexItemResponsiveSize,{}),"\n",(0,l.jsxs)(n.h3,{children:["Customized ",(0,l.jsx)(n.a,{href:"/uilib/layout/flex/item/",children:"Flex.Item"})," sizes"]}),"\n",(0,l.jsxs)(n.p,{children:["With a custom amount of 4 parts (",(0,l.jsx)(n.code,{children:"sizeCount"}),") as well as custom breakpoints and media queries."]}),"\n",(0,l.jsx)(a.HorizontalFlexItemResponsiveSizeCustomColumns,{}),"\n",(0,l.jsxs)(n.h3,{children:[(0,l.jsx)(n.a,{href:"/uilib/layout/flex/",children:"Flex"})," usage in ",(0,l.jsx)(n.a,{href:"/uilib/extensions/forms/",children:"Forms"})]}),"\n",(0,l.jsx)(a.LayoutComponents,{})]})}function o(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(s,e)})):s(e)}},84618:function(e,n,t){t.r(n),t.d(n,{Default:function(){return a},HorizontalFields:function(){return u},Stack:function(){return d},VerticalFields:function(){return m},WithFlex:function(){return o},WithGrid:function(){return s},WithHeadingsAndAriaLabel:function(){return c},WithTable:function(){return r}});var l=t(99587),i=t(52322);const a=()=>(0,i.jsx)(l.Z,{children:'<Card data-visual-test="layout-card-border">\n  <P>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus\n    pharetra elit in bibendum.\n  </P>\n  <P>\n    Praesent nunc ipsum, convallis eget convallis gravida, vehicula vitae\n    metus.\n  </P>\n</Card>\n'}),r=()=>(0,i.jsx)(l.Z,{"data-visual-test":"layout-card-table",noInline:!0,children:'const MyTable = () => (\n  <Table.ScrollView>\n    <Table border outline size="medium">\n      <thead>\n        <Tr noWrap>\n          <Th>Column 1</Th>\n          <Th>Column 2</Th>\n          <Th>Column 3</Th>\n        </Tr>\n      </thead>\n      <tbody>\n        <Tr>\n          <Td>Row 1</Td>\n          <Td>Row 1</Td>\n          <Td>Row 1</Td>\n        </Tr>\n        <Tr>\n          <Td colSpan={3} align="right">\n            <Button>Button</Button>\n          </Td>\n        </Tr>\n        <Tr>\n          <Td>Row 3</Td>\n          <Td>Row 3</Td>\n          <Td>Row 3</Td>\n        </Tr>\n      </tbody>\n    </Table>\n  </Table.ScrollView>\n)\nrender(\n  <Card title="Card title" responsive={false} innerSpace={0} filled>\n    <MyTable />\n  </Card>,\n)\n'}),s=()=>(0,i.jsx)(l.Z,{"data-visual-test":"layout-card-grid",children:'<Grid.Container\n  columns={{\n    small: 1,\n    medium: 3,\n    large: 3,\n  }}\n  columnGap="small"\n>\n  <Card stack>\n    <H2>Heading</H2>\n    <P>Text</P>\n  </Card>\n  <Card stack>\n    <H2>Heading</H2>\n    <P>Pariatur officia sit adipisicing pariatur commodo enim do quis</P>\n  </Card>\n  <Card stack>\n    <H2>Heading</H2>\n    <P>Text</P>\n  </Card>\n</Grid.Container>\n'}),o=()=>(0,i.jsx)(l.Z,{"data-visual-test":"layout-card-flex",children:"<Flex.Container>\n  <Card\n    size={{\n      small: 'auto',\n      medium: 4,\n      large: 4,\n    }}\n    stack\n  >\n    <H2>Heading</H2>\n    <P>Text</P>\n  </Card>\n  <Card\n    size={{\n      small: 'auto',\n      medium: 4,\n      large: 4,\n    }}\n    stack\n  >\n    <H2>Heading</H2>\n    <P>Pariatur officia sit adipisicing pariatur commodo enim do quis</P>\n  </Card>\n  <Card\n    size={{\n      small: 'auto',\n      medium: 4,\n      large: 4,\n    }}\n    stack\n  >\n    <H2>Heading</H2>\n    <P>Text</P>\n  </Card>\n</Flex.Container>\n"}),d=()=>(0,i.jsx)(l.Z,{"data-visual-test":"layout-card-stack",children:'<Card stack>\n  <Field.String label="Label" value="Value" />\n  <Field.String label="Label" value="Value" />\n</Card>\n'}),m=()=>(0,i.jsx)(l.Z,{children:'<Card>\n  <Flex.Vertical>\n    <Field.String label="Label" value="Value" />\n    <Field.String label="Label" value="Value" />\n  </Flex.Vertical>\n</Card>\n'}),u=()=>(0,i.jsx)(l.Z,{children:'<Card>\n  <Flex.Horizontal>\n    <Field.String label="Label" value="Value" width="small" />\n    <Field.String label="Label" value="Value" width="stretch" />\n  </Flex.Horizontal>\n</Card>\n'}),c=()=>(0,i.jsx)(l.Z,{hidePreview:!0,children:'<Card aria-labelledby="unique-id">\n  <Form.SubHeading id="unique-id" space={0}>\n    Heading\n  </Form.SubHeading>\n  <P>Content inside a landmark ...</P>\n</Card>\n'})},84285:function(e,n,t){t.r(n),t.d(n,{AllComponentsHorizontalTestCase:function(){return N},AllComponentsVerticalLabelsTestCase:function(){return V},AllComponentsVerticalTestCase:function(){return q},FormSetAlternativeAfter:function(){return Q},FormSetAlternativeBefore:function(){return B},FormSetAlternativeForms:function(){return A},HorizontalFlexItemResponsiveSize:function(){return E},HorizontalFlexItemResponsiveSizeCustomColumns:function(){return P},LayoutComponents:function(){return Z},MediaQueryLiveExample:function(){return L},MediaQueryUseMedia:function(){return R},ResponsiveGridContainer:function(){return M},colors:function(){return k}});var l=t(2784),i=t(99587),a=t(35235),r=t(80215),s=t(3805),o=t(96844),d=t(75511),m=t(469),u=t(25807),c=t(71618),x=t(72151),h=t(20167),p=t(35944),b=t(55904),g=t(16353),F=t(99399),C=t(89751),f=t(38644),j=t(57614),v=t(46817),y=t(99210),T=t(67571),I=t(87682),H=t(81858),S=t(60131),z=t(44086),w=t(52322);const Z=()=>(0,w.jsx)(i.Z,{scope:{Field:j,Form:v},hideCode:!0,children:'<Flex.Stack>\n  <Form.MainHeading>Profile</Form.MainHeading>\n\n  <Card stack>\n    <Form.SubHeading>Name</Form.SubHeading>\n\n    <Field.String label="Fornavn" value="John" />\n    <Field.String label="Etternavn" value="Smith" />\n  </Card>\n\n  <Card stack>\n    <Form.SubHeading>More information</Form.SubHeading>\n\n    <Field.NationalIdentityNumber value="20058512345" />\n    <Field.Email value="john@smith.email" />\n    <Field.PhoneNumber value="+47 98765432" />\n  </Card>\n</Flex.Stack>\n'}),k=[{background:"#babeee"},{background:"#dfe0ee"},{background:"#90d2c3"},{background:"#ecf4be"}],E=()=>(0,w.jsx)(i.Z,{scope:{colors:k,TestElement:y.Z},hideCode:!0,"data-visual-test":"flex-item-size",children:"<Flex.Container>\n  <Flex.Item size={8}>\n    <TestElement style={colors[0]}>FlexItem (8)</TestElement>\n  </Flex.Item>\n  <Flex.Item size={4}>\n    <TestElement style={colors[1]}>FlexItem (4)</TestElement>\n  </Flex.Item>\n  <Flex.Item\n    size={{\n      small: 12,\n      medium: 4,\n    }}\n  >\n    <TestElement style={colors[2]}>\n      FlexItem (small: 8, medium: 4)\n    </TestElement>\n  </Flex.Item>\n  <Flex.Item\n    size={{\n      small: 12,\n      medium: 8,\n    }}\n  >\n    <TestElement style={colors[3]}>\n      FlexItem (small: 4, medium: 8)\n    </TestElement>\n  </Flex.Item>\n</Flex.Container>\n"}),P=()=>(0,w.jsx)(i.Z,{hideCode:!0,scope:{colors:k,TestElement:y.Z,Field:j,defaultBreakpoints:T.R1,defaultQueries:I.L},"data-visual-test":"flex-item-custom-size",noInline:!0,children:"const breakpoints = {\n  ...defaultBreakpoints,\n  xsmall: '30em',\n}\nconst queries = {\n  ...defaultQueries,\n  xsmall: {\n    min: 0,\n    max: 'xsmall',\n  },\n  small: {\n    min: 'xsmall',\n    max: 'small',\n  },\n}\nconst CustomMediaQuery = styled.div`\n  display: flex;\n  flex-direction: column;\n  .dnb-flex-container[data-media-key='xsmall'] .dnb-flex-item--responsive {\n    --size: var(--xsmall);\n  }\n`\nrender(\n  <CustomMediaQuery>\n    <Flex.Container\n      direction=\"horizontal\"\n      sizeCount={4}\n      breakpoints={breakpoints}\n      queries={queries}\n    >\n      <Flex.Item\n        size={{\n          small: 2,\n          medium: 3,\n          large: 1,\n        }}\n      >\n        <TestElement style={colors[0]}>FlexItem</TestElement>\n      </Flex.Item>\n      <Flex.Item\n        size={{\n          small: 2,\n          medium: 1,\n          large: 2,\n        }}\n      >\n        <TestElement style={colors[1]}>FlexItem</TestElement>\n      </Flex.Item>\n      <Flex.Item\n        size={{\n          xsmall: 4,\n          small: 2,\n          medium: 1,\n          large: 1,\n        }}\n      >\n        <TestElement style={colors[2]}>FlexItem</TestElement>\n      </Flex.Item>\n      <Flex.Item\n        size={{\n          xsmall: 4,\n          small: 2,\n          medium: 3,\n          large: 4,\n        }}\n      >\n        <TestElement style={colors[3]}>FlexItem</TestElement>\n      </Flex.Item>\n    </Flex.Container>\n  </CustomMediaQuery>,\n)\n"}),G=()=>{const[e,n]=l.useState("undefined"!=typeof window?window.innerWidth:0);return l.useEffect((()=>{const e=()=>{n(window.innerWidth)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),{innerWidth:e}},R=()=>(0,w.jsx)(i.Z,{scope:{useMedia:I.Z,useWindowWidth:G},hideCode:!0,noInline:!0,children:"const Playground = () => {\n  const { isSmall, isMedium, isLarge, isSSR } = useMedia()\n  const { innerWidth } = useWindowWidth()\n  return (\n    <Code>\n      <pre>\n        {JSON.stringify(\n          {\n            isSmall,\n            isMedium,\n            isLarge,\n            isSSR,\n            innerWidth,\n          },\n          null,\n          2,\n        )}\n      </pre>\n    </Code>\n  )\n}\nrender(<Playground />)\n"}),L=()=>(0,w.jsx)(i.Z,{scope:{MediaQuery:a.Z,useMediaQuery:H.Z},hideCode:!0,noInline:!0,children:"const Playground = () => {\n  const [query, updateQuery] = React.useState({\n    screen: true,\n    not: true,\n    min: 'small',\n    max: 'large',\n  })\n  const match1 = useMediaQuery({\n    matchOnSSR: true,\n    when: query,\n  })\n  const match2 = useMediaQuery({\n    matchOnSSR: true,\n    not: true,\n    when: query,\n  })\n  React.useEffect(() => {\n    console.log('mediaQuery:', match1, match2)\n  }, [match1, match2])\n  return (\n    <>\n      <Button\n        onClick={() => {\n          updateQuery({\n            ...query,\n            screen: !query.screen,\n          })\n        }}\n        right\n      >\n        Switch\n      </Button>\n      <MediaQuery when={query}>\n        <Code>when</Code>\n      </MediaQuery>\n      <MediaQuery not when={query}>\n        <Code>not when</Code>\n      </MediaQuery>\n    </>\n  )\n}\nrender(<Playground />)\n"}),M=()=>(0,w.jsx)(i.Z,{hideCode:!0,scope:{TestElement:y.Z,colors:k},children:"<Grid.Container rowGap columnGap>\n  <Grid.Item\n    span={{\n      small: [1, 2],\n      medium: [1, 3],\n      large: [1, 12],\n    }}\n    style={colors[0]}\n    element={TestElement}\n  >\n    Item A\n  </Grid.Item>\n\n  <Grid.Item\n    span={{\n      small: [3, 4],\n      medium: [4, 6],\n      large: [1, 4],\n    }}\n    style={colors[1]}\n    element={TestElement}\n  >\n    Item B\n  </Grid.Item>\n\n  <Grid.Item\n    span={{\n      small: [2, 3],\n      medium: [4, 6],\n      large: [5, 8],\n    }}\n    style={colors[2]}\n    element={TestElement}\n  >\n    Item C\n  </Grid.Item>\n\n  <Grid.Item\n    span={{\n      small: [1, 4],\n      medium: [4, 6],\n      large: [9, 12],\n    }}\n    style={colors[3]}\n    element={TestElement}\n  >\n    Item D\n  </Grid.Item>\n</Grid.Container>\n"}),B=()=>(0,w.jsx)(i.Z,{children:'<FormSet label_direction="vertical">\n  <H2 top={0}>Heading</H2>\n  <FormRow label={<span className="dnb-h--medium">Legend</span>}>\n    <Input label="Label A" right />\n    <Input label="Label B" />\n  </FormRow>\n</FormSet>\n'}),Q=()=>(0,w.jsx)(i.Z,{children:'<Provider\n  formElement={{\n    label_direction: \'vertical\',\n  }}\n>\n  <Form.Handler>\n    <H2 top={0}>Heading</H2>\n    <FieldBlock label={<span className="dnb-h--medium">Legend</span>}>\n      <Flex.Horizontal>\n        <Input label="Label A" />\n        <Input label="Label B" />\n      </Flex.Horizontal>\n    </FieldBlock>\n  </Form.Handler>\n</Provider>\n'}),A=()=>(0,w.jsx)(i.Z,{children:'<Form.Handler>\n  <Flex.Stack>\n    <Form.MainHeading>Heading</Form.MainHeading>\n    <FieldBlock label={<span className="dnb-h--medium">Legend</span>}>\n      <Flex.Horizontal>\n        <Field.String label="Label A" width="medium" />\n        <Field.String label="Label B" width="large" />\n      </Flex.Horizontal>\n    </FieldBlock>\n  </Flex.Stack>\n</Form.Handler>\n'}),W=function(e){let{direction:n="vertical",showText:t=!1,hideLabel:l=!1}=void 0===e?{}:e;const i={left:"horizontal"===n?"small":null,top:"horizontal"!==n?"small":null};let a={datePicker:"DatePicker:",dropdown:"Dropdown:",autocomplete:"Autocomplete:",checkbox:"Checkbox",radio:"Radio",radioGroup:"Radio Group:",toggleButton:"Toggle:",toggleButtonGroup:"Toggle Group:",switch:"Switch",input:"Input:",textarea:"Textarea:",slider:"Slider:"};l&&(a=Object.entries(a).reduce(((e,n)=>{let[t]=n;return e[t]="",e}),{}));const j=()=>(0,w.jsxs)(w.Fragment,{children:[t&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(r.Z,{...i,inline:!0,children:(0,w.jsxs)("p",{className:"dnb-p",children:["paragraph"," ",(0,w.jsx)(s.Z,{icon:"bell",size:"medium",...i,style:{margin:0}})]})}),"text"]}),(0,w.jsx)(o.Z,{text:"Button",...i}),(0,w.jsx)(o.Z,{icon:"add",...i}),(0,w.jsx)(d.ZP,{label:a.input,...i}),(0,w.jsx)(m.Z,{label:a.dropdown,data:["Item A","Item B","Item C"],...i}),(0,w.jsx)(u.Z,{label:a.autocomplete,data:["Item A","Item B","Item C"],...i}),(0,w.jsx)(c.Z,{label:a.datePicker,...i}),(0,w.jsx)(s.Z,{icon:"bell",size:"medium",...i}),(0,w.jsx)(x.Z,{label:a.checkbox,...i}),(0,w.jsx)(h.Z,{label:a.radio,...i}),(0,w.jsxs)(h.Z.Group,{label:a.radioGroup,...i,children:[(0,w.jsx)(h.Z,{label:a.radio,value:"a"}),(0,w.jsx)(h.Z,{label:a.radio,value:"b"})]}),(0,w.jsx)(p.Z,{label:a.toggleButton,text:"Toggle",...i}),(0,w.jsxs)(p.Z.Group,{label:a.toggleButtonGroup,...i,children:[(0,w.jsx)(p.Z,{text:"Toggle A",value:"a"}),(0,w.jsx)(p.Z,{text:"Toggle B",value:"b"})]}),(0,w.jsx)(b.Z,{label:a.switch,...i}),(0,w.jsx)(g.Z,{label:a.textarea,rows:"5",...i}),(0,w.jsx)("div",{style:{display:"inline-flex"},children:(0,w.jsx)(F.Z,{label:a.slider,value:50,...i})})]});return"horizontal"===n?(0,w.jsx)(C.Z,{style:{padding:"1rem",whiteSpace:"nowrap"},children:(0,w.jsx)(j,{})}):(j._supportsSpacingProps=!0,(0,w.jsx)(f.Z,{style:{padding:"1rem"},children:(0,w.jsx)(j,{})}))},q=e=>(0,w.jsx)("div",{"data-visual-test":"form-components-alignment-vertical",...e,children:(0,w.jsx)(W,{direction:"vertical"})}),V=e=>(0,w.jsx)("div",{"data-visual-test":"form-components-alignment-vertical-labels",...e,children:(0,w.jsx)(S.Z,{formElement:{label_direction:"vertical"},children:(0,w.jsx)(W,{direction:"vertical"})})}),N=e=>(0,w.jsx)("div",{"data-visual-test":"form-components-alignment-horizontal",...e,children:(0,w.jsx)(z.Z,{children:(0,w.jsx)(W,{direction:"horizontal"})})})},99210:function(e,n,t){t.d(n,{Z:function(){return s}});var l=t(72779),i=t.n(l),a=t(80215),r=t(52322);function s(e){let{className:n=null,...t}=e;return(0,r.jsx)(a.Z,{className:i()("dnb-forms-test-element",n),...t})}s._supportsSpacingProps=!0}}]);
//# sourceMappingURL=component---src-docs-uilib-layout-demos-mdx-8fc1b946990fd8d71cd3.js.map