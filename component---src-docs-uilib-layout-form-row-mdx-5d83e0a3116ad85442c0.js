"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[75337,9611,30672,54958],{74451:function(e,n,t){t.r(n);var l=t(52322),r=t(45392),s=t(69420),i=t(17139);function o(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.default,{}),"\n",(0,l.jsx)(i.default,{})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(o,e)})):o()}},17139:function(e,n,t){t.r(n);var l=t(52322),r=t(45392),s=t(13215);function i(e){const n=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code"},(0,r.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{children:"Demos"}),"\n",(0,l.jsx)(n.h3,{children:"Basic FormRow"}),"\n",(0,l.jsx)(s.aU,{}),"\n",(0,l.jsx)(n.h3,{children:"Vertical FormRow"}),"\n",(0,l.jsx)(s.SE,{}),"\n",(0,l.jsx)(n.h3,{children:"Vertical aligned labels"}),"\n",(0,l.jsx)(n.p,{children:"Only the labels are vertically aligned - while the input labels are still horizontal."}),"\n",(0,l.jsx)(s.n8,{}),"\n",(0,l.jsx)(n.h3,{children:"Combine both vertical and horizontal FormRow's"}),"\n",(0,l.jsx)(s.PM,{}),"\n",(0,l.jsx)(n.h3,{children:"Several components inside a horizontal FormRow - not wrapping"}),"\n",(0,l.jsx)(s.ko,{}),"\n",(0,l.jsxs)(n.h3,{children:["Several components inside a wrapping (",(0,l.jsx)(n.code,{children:"wrap"}),") horizontal FormRow"]}),"\n",(0,l.jsx)(s.XD,{}),"\n",(0,l.jsx)(n.h3,{children:"Legend usage"}),"\n",(0,l.jsx)(s.Uw,{}),"\n",(0,l.jsx)(n.h3,{children:"Inherit context"}),"\n",(0,l.jsx)(s.by,{}),"\n",(0,l.jsx)(n.h3,{children:"Combining different components and directions"}),"\n",(0,l.jsx)(s.Tr,{}),"\n",(0,l.jsx)(n.h3,{children:"Section style"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"label"})," property can be used to set a row label as well as the ",(0,l.jsx)(n.code,{children:"section_style"})," is supported"]}),"\n",(0,l.jsx)(s.Ab,{})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(i,e)})):i(e)}},69420:function(e,n,t){t.r(n);var l=t(52322),r=t(45392),s=t(13215),i=t(2708);function o(e){const n=Object.assign({h2:"h2",pre:"pre",code:"code",p:"p",h3:"h3",a:"a",ul:"ul",li:"li",strong:"strong"},(0,r.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{children:"Import"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:"import { FormRow } from '@dnb/eufemia'\n"})}),"\n",(0,l.jsx)(n.h2,{children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"The FormRow component is a helper to more easily achieve often used DNB form layout setups."}),"\n",(0,l.jsx)(i.default,{}),"\n",(0,l.jsx)(n.h3,{children:"Fieldset and Legend"}),"\n",(0,l.jsxs)(n.p,{children:["By default a ",(0,l.jsx)(n.code,{children:"FormRow"})," is using the ",(0,l.jsx)(n.code,{children:"<fieldset>"})," and ",(0,l.jsx)(n.code,{children:"<legend>"})," HTML elements - if a label property is provided."]}),"\n",(0,l.jsx)(n.h2,{children:"Layout direction"}),"\n",(0,l.jsxs)(n.p,{children:["The default direction is ",(0,l.jsx)(n.code,{children:"horizontal"}),".\nYou can combine several FormRow's (example below) and the direction to achieve the wanted UX layout. You can also send the layout properties along from a ",(0,l.jsx)(n.a,{href:"/uilib/layout/form-set",children:"FormSet"})," (example below).\nThere are three possible layout properties for the FormRow children:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"label_direction"})," Children's label direction"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"direction"})," Children components direction"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"vertical"})," Forces both to be vertically"]}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{children:["The property: ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"label_direction"})})]}),"\n",(0,l.jsx)(s.lt,{}),"\n",(0,l.jsxs)(n.h3,{children:["The property: ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"direction"})})]}),"\n",(0,l.jsx)(s.cG,{}),"\n",(0,l.jsxs)(n.h3,{children:["The property: ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"vertical"})})]}),"\n",(0,l.jsx)(s.I8,{}),"\n",(0,l.jsx)(n.h3,{children:"Default"}),"\n",(0,l.jsx)(n.p,{children:"This is how it looks if you don't make any definitions."}),"\n",(0,l.jsx)(s.e,{}),"\n",(0,l.jsx)(n.h2,{children:"Spacing"}),"\n",(0,l.jsxs)(n.p,{children:["To give a FormRow space, properties from ",(0,l.jsx)(n.a,{href:"/uilib/layout/space/properties",children:"Space"})," are supported:"]}),"\n",(0,l.jsx)(s.QP,{}),"\n",(0,l.jsx)(n.h2,{children:"Provider"}),"\n",(0,l.jsxs)(n.p,{children:["You can send down the ",(0,l.jsx)(n.code,{children:"FormRow"})," as an application-wide property (Context). More info about the ",(0,l.jsx)(n.a,{href:"/uilib/layout/form-row/provider",children:"provider usage"}),"."]}),"\n",(0,l.jsx)(n.h2,{children:"Responsiveness"}),"\n",(0,l.jsxs)(n.p,{children:["The FormRow component provides by default responsiveness.\nBut if you also want the form components to be responsive. E.g. the label of the input should be wrapped to be vertical / above the input, then you have to set the ",(0,l.jsx)(n.code,{children:"responsive"})," property to ",(0,l.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,l.jsx)(s.C2,{}),"\n",(0,l.jsxs)(n.p,{children:["Wrapping happens then if the viewport (screen) is less than ",(0,l.jsx)(n.code,{children:"max-width: 40em"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["You can also make use of the ",(0,l.jsx)(n.a,{href:"/uilib/helpers",children:"helper class"}),", e.g. ",(0,l.jsx)(n.code,{children:'<FormRow className="dnb-responsive-component">...</FormRow>'}),"."]})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(o,e)})):o(e)}},2708:function(e,n,t){t.r(n);var l=t(52322),r=t(45392),s=t(84285);function i(e){const n=Object.assign({h2:"h2",p:"p",a:"a"},(0,r.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{children:"Deprecation"}),"\n",(0,l.jsxs)(n.p,{children:["In order to replace FormSet or FormRow you may use the Eufemia ",(0,l.jsx)(n.a,{href:"/uilib/usage/customisation/provider-info",children:"Provider"})," and ",(0,l.jsx)(n.a,{href:"/uilib/layout/flex",children:"Flex"})," as well as the Eufemia ",(0,l.jsx)(n.a,{href:"/uilib/extensions/forms",children:"Forms Extension"}),"."]}),"\n",(0,l.jsx)(n.p,{children:"e.g. before:"}),"\n",(0,l.jsx)(s.FormSetAlternativeBefore,{}),"\n",(0,l.jsx)(n.p,{children:"e.g. after (two examples):"}),"\n",(0,l.jsx)(s.FormSetAlternativeAfter,{}),"\n",(0,l.jsx)(s.FormSetAlternativeForms,{})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(i,e)})):i(e)}},84285:function(e,n,t){t.r(n),t.d(n,{AllComponentsHorizontalTestCase:function(){return q},AllComponentsVerticalLabelsTestCase:function(){return _},AllComponentsVerticalTestCase:function(){return N},FormSetAlternativeAfter:function(){return P},FormSetAlternativeBefore:function(){return A},FormSetAlternativeForms:function(){return Q},HorizontalFlexItemResponsiveSize:function(){return R},HorizontalFlexItemResponsiveSizeCustomColumns:function(){return H},LayoutComponents:function(){return z},MediaQueryLiveExample:function(){return G},MediaQueryUseMedia:function(){return M},ResponsiveGridContainer:function(){return L},colors:function(){return k}});var l=t(2784),r=t(64368),s=t(35235),i=t(80215),o=t(66651),a=t(96844),d=t(75511),c=t(469),m=t(25807),u=t(71618),h=t(59194),x=t(20167),p=t(35944),j=t(33119),b=t(16353),g=t(99399),f=t(89751),F=t(38644),v=t(31826),y=t(11403),w=t(99210),I=t(67571),S=t(87682),C=t(81858),T=t(60131),Z=t(44086),E=t(52322);const z=()=>(0,E.jsx)(r.Z,{scope:{Field:v,Form:y},hideCode:!0,children:'<Flex.Stack>\n  <Form.MainHeading>Profile</Form.MainHeading>\n\n  <Card stack>\n    <Form.SubHeading>Name</Form.SubHeading>\n\n    <Field.String label="Fornavn" value="John" />\n    <Field.String label="Etternavn" value="Smith" />\n  </Card>\n\n  <Card stack>\n    <Form.SubHeading>More information</Form.SubHeading>\n\n    <Field.NationalIdentityNumber value="20058512345" />\n    <Field.Email value="john@smith.email" />\n    <Field.PhoneNumber value="+47 98765432" />\n  </Card>\n</Flex.Stack>\n'}),k=[{background:"#babeee"},{background:"#dfe0ee"},{background:"#90d2c3"},{background:"#ecf4be"}],R=()=>(0,E.jsx)(r.Z,{scope:{colors:k,TestElement:w.Z},hideCode:!0,"data-visual-test":"flex-item-size",children:"<Flex.Container>\n  <Flex.Item size={8}>\n    <TestElement style={colors[0]}>FlexItem (8)</TestElement>\n  </Flex.Item>\n  <Flex.Item size={4}>\n    <TestElement style={colors[1]}>FlexItem (4)</TestElement>\n  </Flex.Item>\n  <Flex.Item\n    size={{\n      small: 12,\n      medium: 4,\n    }}\n  >\n    <TestElement style={colors[2]}>\n      FlexItem (small: 8, medium: 4)\n    </TestElement>\n  </Flex.Item>\n  <Flex.Item\n    size={{\n      small: 12,\n      medium: 8,\n    }}\n  >\n    <TestElement style={colors[3]}>\n      FlexItem (small: 4, medium: 8)\n    </TestElement>\n  </Flex.Item>\n</Flex.Container>\n"}),H=()=>(0,E.jsx)(r.Z,{hideCode:!0,scope:{colors:k,TestElement:w.Z,Field:v,defaultBreakpoints:I.R1,defaultQueries:S.L},"data-visual-test":"flex-item-custom-size",noInline:!0,children:"const breakpoints = {\n  ...defaultBreakpoints,\n  xsmall: '30em',\n}\nconst queries = {\n  ...defaultQueries,\n  xsmall: {\n    min: 0,\n    max: 'xsmall',\n  },\n  small: {\n    min: 'xsmall',\n    max: 'small',\n  },\n}\nconst CustomMediaQuery = styled.div`\n  display: flex;\n  flex-direction: column;\n  .dnb-flex-container[data-media-key='xsmall'] .dnb-flex-item--responsive {\n    --size: var(--xsmall);\n  }\n`\nrender(\n  <CustomMediaQuery>\n    <Flex.Container\n      direction=\"horizontal\"\n      sizeCount={4}\n      breakpoints={breakpoints}\n      queries={queries}\n    >\n      <Flex.Item\n        size={{\n          small: 2,\n          medium: 3,\n          large: 1,\n        }}\n      >\n        <TestElement style={colors[0]}>FlexItem</TestElement>\n      </Flex.Item>\n      <Flex.Item\n        size={{\n          small: 2,\n          medium: 1,\n          large: 2,\n        }}\n      >\n        <TestElement style={colors[1]}>FlexItem</TestElement>\n      </Flex.Item>\n      <Flex.Item\n        size={{\n          xsmall: 4,\n          small: 2,\n          medium: 1,\n          large: 1,\n        }}\n      >\n        <TestElement style={colors[2]}>FlexItem</TestElement>\n      </Flex.Item>\n      <Flex.Item\n        size={{\n          xsmall: 4,\n          small: 2,\n          medium: 3,\n          large: 4,\n        }}\n      >\n        <TestElement style={colors[3]}>FlexItem</TestElement>\n      </Flex.Item>\n    </Flex.Container>\n  </CustomMediaQuery>,\n)\n"}),B=()=>{const[e,n]=l.useState("undefined"!=typeof window?window.innerWidth:0);return l.useEffect((()=>{const e=()=>{n(window.innerWidth)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),{innerWidth:e}},M=()=>(0,E.jsx)(r.Z,{scope:{useMedia:S.Z,useWindowWidth:B},hideCode:!0,noInline:!0,children:"const Playground = () => {\n  const { isSmall, isMedium, isLarge, isSSR } = useMedia()\n  const { innerWidth } = useWindowWidth()\n  return (\n    <Code>\n      <pre>\n        {JSON.stringify(\n          {\n            isSmall,\n            isMedium,\n            isLarge,\n            isSSR,\n            innerWidth,\n          },\n          null,\n          2,\n        )}\n      </pre>\n    </Code>\n  )\n}\nrender(<Playground />)\n"}),G=()=>(0,E.jsx)(r.Z,{scope:{MediaQuery:s.Z,useMediaQuery:C.Z},hideCode:!0,noInline:!0,children:"const Playground = () => {\n  const [query, updateQuery] = React.useState({\n    screen: true,\n    not: true,\n    min: 'small',\n    max: 'large',\n  })\n  const match1 = useMediaQuery({\n    matchOnSSR: true,\n    when: query,\n  })\n  const match2 = useMediaQuery({\n    matchOnSSR: true,\n    not: true,\n    when: query,\n  })\n  React.useEffect(() => {\n    console.log('mediaQuery:', match1, match2)\n  }, [match1, match2])\n  return (\n    <>\n      <Button\n        onClick={() => {\n          updateQuery({\n            ...query,\n            screen: !query.screen,\n          })\n        }}\n        right\n      >\n        Switch\n      </Button>\n      <MediaQuery when={query}>\n        <Code>when</Code>\n      </MediaQuery>\n      <MediaQuery not when={query}>\n        <Code>not when</Code>\n      </MediaQuery>\n    </>\n  )\n}\nrender(<Playground />)\n"}),L=()=>(0,E.jsx)(r.Z,{hideCode:!0,scope:{TestElement:w.Z,colors:k},children:"<Grid.Container rowGap columnGap>\n  <Grid.Item\n    span={{\n      small: [1, 2],\n      medium: [1, 3],\n      large: [1, 12],\n    }}\n    style={colors[0]}\n    element={TestElement}\n  >\n    Item A\n  </Grid.Item>\n\n  <Grid.Item\n    span={{\n      small: [3, 4],\n      medium: [4, 6],\n      large: [1, 4],\n    }}\n    style={colors[1]}\n    element={TestElement}\n  >\n    Item B\n  </Grid.Item>\n\n  <Grid.Item\n    span={{\n      small: [2, 3],\n      medium: [4, 6],\n      large: [5, 8],\n    }}\n    style={colors[2]}\n    element={TestElement}\n  >\n    Item C\n  </Grid.Item>\n\n  <Grid.Item\n    span={{\n      small: [1, 4],\n      medium: [4, 6],\n      large: [9, 12],\n    }}\n    style={colors[3]}\n    element={TestElement}\n  >\n    Item D\n  </Grid.Item>\n</Grid.Container>\n"}),A=()=>(0,E.jsx)(r.Z,{children:'<FormSet label_direction="vertical">\n  <H2 top={0}>Heading</H2>\n  <FormRow label={<span className="dnb-h--medium">Legend</span>}>\n    <Input label="Label A" right />\n    <Input label="Label B" />\n  </FormRow>\n</FormSet>\n'}),P=()=>(0,E.jsx)(r.Z,{children:'<Provider\n  formElement={{\n    label_direction: \'vertical\',\n  }}\n>\n  <Form.Handler>\n    <H2 top={0}>Heading</H2>\n    <FieldBlock label={<span className="dnb-h--medium">Legend</span>}>\n      <Flex.Horizontal>\n        <Input label="Label A" />\n        <Input label="Label B" />\n      </Flex.Horizontal>\n    </FieldBlock>\n  </Form.Handler>\n</Provider>\n'}),Q=()=>(0,E.jsx)(r.Z,{children:'<Form.Handler>\n  <Flex.Stack>\n    <Form.MainHeading>Heading</Form.MainHeading>\n    <FieldBlock label={<span className="dnb-h--medium">Legend</span>}>\n      <Flex.Horizontal>\n        <Field.String label="Label A" width="medium" />\n        <Field.String label="Label B" width="large" />\n      </Flex.Horizontal>\n    </FieldBlock>\n  </Flex.Stack>\n</Form.Handler>\n'}),O=function(e){let{direction:n="vertical",showText:t=!1,hideLabel:l=!1}=void 0===e?{}:e;const r={left:"horizontal"===n?"small":null,top:"horizontal"!==n?"small":null};let s={datePicker:"DatePicker:",dropdown:"Dropdown:",autocomplete:"Autocomplete:",checkbox:"Checkbox",radio:"Radio",radioGroup:"Radio Group:",toggleButton:"Toggle:",toggleButtonGroup:"Toggle Group:",switch:"Switch",input:"Input:",textarea:"Textarea:",slider:"Slider:"};l&&(s=Object.entries(s).reduce(((e,n)=>{let[t]=n;return e[t]="",e}),{}));const v=()=>(0,E.jsxs)(E.Fragment,{children:[t&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(i.Z,{...r,inline:!0,children:(0,E.jsxs)("p",{className:"dnb-p",children:["paragraph"," ",(0,E.jsx)(o.ZP,{icon:"bell",size:"medium",...r,style:{margin:0}})]})}),"text"]}),(0,E.jsx)(a.Z,{text:"Button",...r}),(0,E.jsx)(a.Z,{icon:"add",...r}),(0,E.jsx)(d.ZP,{label:s.input,...r}),(0,E.jsx)(c.Z,{label:s.dropdown,data:["Item A","Item B","Item C"],...r}),(0,E.jsx)(m.Z,{label:s.autocomplete,data:["Item A","Item B","Item C"],...r}),(0,E.jsx)(u.Z,{label:s.datePicker,...r}),(0,E.jsx)(o.ZP,{icon:"bell",size:"medium",...r}),(0,E.jsx)(h.Z,{label:s.checkbox,...r}),(0,E.jsx)(x.Z,{label:s.radio,...r}),(0,E.jsxs)(x.Z.Group,{label:s.radioGroup,...r,children:[(0,E.jsx)(x.Z,{label:s.radio,value:"a"}),(0,E.jsx)(x.Z,{label:s.radio,value:"b"})]}),(0,E.jsx)(p.Z,{label:s.toggleButton,text:"Toggle",...r}),(0,E.jsxs)(p.Z.Group,{label:s.toggleButtonGroup,...r,children:[(0,E.jsx)(p.Z,{text:"Toggle A",value:"a"}),(0,E.jsx)(p.Z,{text:"Toggle B",value:"b"})]}),(0,E.jsx)(j.Z,{label:s.switch,...r}),(0,E.jsx)(b.Z,{label:s.textarea,rows:"5",...r}),(0,E.jsx)("div",{style:{display:"inline-flex"},children:(0,E.jsx)(g.Z,{label:s.slider,value:50,...r})})]});return"horizontal"===n?(0,E.jsx)(f.Z,{style:{padding:"1rem",whiteSpace:"nowrap"},children:(0,E.jsx)(v,{})}):(v._supportsSpacingProps=!0,(0,E.jsx)(F.Z,{style:{padding:"1rem"},children:(0,E.jsx)(v,{})}))},N=e=>(0,E.jsx)("div",{"data-visual-test":"form-components-alignment-vertical",...e,children:(0,E.jsx)(O,{direction:"vertical"})}),_=e=>(0,E.jsx)("div",{"data-visual-test":"form-components-alignment-vertical-labels",...e,children:(0,E.jsx)(T.Z,{formElement:{label_direction:"vertical"},children:(0,E.jsx)(O,{direction:"vertical"})})}),q=e=>(0,E.jsx)("div",{"data-visual-test":"form-components-alignment-horizontal",...e,children:(0,E.jsx)(Z.Z,{children:(0,E.jsx)(O,{direction:"horizontal"})})})},99210:function(e,n,t){t.d(n,{Z:function(){return o}});var l=t(72779),r=t.n(l),s=t(80215),i=t(52322);function o(e){let{className:n=null,...t}=e;return(0,i.jsx)(s.Z,{className:r()("dnb-forms-test-element",n),...t})}o._supportsSpacingProps=!0}}]);
//# sourceMappingURL=component---src-docs-uilib-layout-form-row-mdx-5d83e0a3116ad85442c0.js.map