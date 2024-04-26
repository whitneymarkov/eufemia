"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[74369,75927,98762],{90304:function(n,e,a){a.r(e);var i=a(52322),r=a(45392),t=a(64624),l=a(90349);function d(n){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.default,{}),"\n",(0,i.jsx)(l.default,{})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(d,n)})):d()}},90349:function(n,e,a){a.r(e);var i=a(52322),r=a(45392),t=a(84618);function l(n){const e=Object.assign({h2:"h2",h3:"h3",p:"p"},(0,r.ah)(),n.components);return t||d("Examples",!1),t.Default||d("Examples.Default",!0),t.HorizontalFields||d("Examples.HorizontalFields",!0),t.Stack||d("Examples.Stack",!0),t.VerticalFields||d("Examples.VerticalFields",!0),t.WithFlex||d("Examples.WithFlex",!0),t.WithGrid||d("Examples.WithGrid",!0),t.WithTable||d("Examples.WithTable",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{children:"Demo"}),"\n",(0,i.jsx)(e.h3,{children:"Default border"}),"\n",(0,i.jsx)(t.Default,{}),"\n",(0,i.jsx)(e.h3,{children:"Vertical fields"}),"\n",(0,i.jsx)(t.VerticalFields,{}),"\n",(0,i.jsx)(e.h3,{children:"Horizontal fields"}),"\n",(0,i.jsx)(t.HorizontalFields,{}),"\n",(0,i.jsx)(e.h3,{children:"Stack"}),"\n",(0,i.jsx)(t.Stack,{}),"\n",(0,i.jsx)(e.h3,{children:"With Table"}),"\n",(0,i.jsx)(t.WithTable,{}),"\n",(0,i.jsx)(e.h3,{children:"With Grid"}),"\n",(0,i.jsx)(e.p,{children:"Grid wraps the Cards nicely on smaller screens."}),"\n",(0,i.jsx)(t.WithGrid,{}),"\n",(0,i.jsx)(e.h3,{children:"With Flex"}),"\n",(0,i.jsx)(e.p,{children:"While Flex has the horizontal direction, it uses rowGap when wrapping. So its the container spacing the Cards then. This is not ideal, because the Cards should ideally have no gap, like in the Grid example above."}),"\n",(0,i.jsx)(t.WithFlex,{})]})}function d(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(l,n)})):l(n)}},64624:function(n,e,a){a.r(e);var i=a(52322),r=a(45392),t=a(84618);function l(n){const e=Object.assign({h2:"h2",p:"p",code:"code",a:"a",strong:"strong",pre:"pre"},(0,r.ah)(),n.components);return t||d("Examples",!1),t.WithHeadingsAndAriaLabel||d("Examples.WithHeadingsAndAriaLabel",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{children:"Description"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"Card"})," is a block section element showing the white box with rounded gray borders, adding spacing automatically."]}),"\n",(0,i.jsxs)(e.p,{children:["It uses ",(0,i.jsx)(e.a,{href:"/uilib/layout/flex/item",children:"Flex.Item"})," under the hood. When one of these props were given, ",(0,i.jsx)(e.code,{children:"stack"}),", ",(0,i.jsx)(e.code,{children:"direction"})," or ",(0,i.jsx)(e.code,{children:"spacing"})," – the ",(0,i.jsx)(e.a,{href:"/uilib/layout/flex/container",children:"Flex.Container"})," will be used."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"BETA:"})," The design is not 100% finalised and may change to be officially approved by UX through an RFC."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-jsx",children:"import { Card } from '@dnb/eufemia'\nimport { Form, Field } from '@dnb/eufemia/extensions/forms'\n\nrender(\n  <Form.Handler data={existingData} onSubmit={submitHandler}>\n    <Card>\n      <Field.Email path=\"/dataPath\" />\n      <Form.ButtonRow>\n        <Form.SubmitButton />\n      </Form.ButtonRow>\n    </Card>\n  </Form.Handler>,\n)\n"})}),"\n",(0,i.jsx)(e.h2,{children:"Accessibility"}),"\n",(0,i.jsxs)(e.p,{children:["It uses a ",(0,i.jsx)(e.code,{children:"section"})," element. Which allows you to add an ",(0,i.jsx)(e.code,{children:"aria-label"})," or ",(0,i.jsx)(e.code,{children:"aria-labelledby"})," to provide screen readers with landmarks."]}),"\n",(0,i.jsx)(t.WithHeadingsAndAriaLabel,{})]})}function d(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(l,n)})):l(n)}},84618:function(n,e,a){a.r(e),a.d(e,{Default:function(){return t},HorizontalFields:function(){return h},Stack:function(){return o},VerticalFields:function(){return c},WithFlex:function(){return s},WithGrid:function(){return d},WithHeadingsAndAriaLabel:function(){return u},WithTable:function(){return l}});var i=a(28204),r=a(52322);const t=()=>(0,r.jsx)(i.Z,{children:'<Card data-visual-test="layout-card-border">\n  <P>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus\n    pharetra elit in bibendum.\n  </P>\n  <P>\n    Praesent nunc ipsum, convallis eget convallis gravida, vehicula vitae\n    metus.\n  </P>\n</Card>\n'}),l=()=>(0,r.jsx)(i.Z,{"data-visual-test":"layout-card-table",noInline:!0,children:'const MyTable = () => (\n  <Table.ScrollView>\n    <Table border outline size="medium">\n      <thead>\n        <Tr noWrap>\n          <Th>Column 1</Th>\n          <Th>Column 2</Th>\n          <Th>Column 3</Th>\n        </Tr>\n      </thead>\n      <tbody>\n        <Tr>\n          <Td>Row 1</Td>\n          <Td>Row 1</Td>\n          <Td>Row 1</Td>\n        </Tr>\n        <Tr>\n          <Td colSpan={3} align="right">\n            <Button>Button</Button>\n          </Td>\n        </Tr>\n        <Tr>\n          <Td>Row 3</Td>\n          <Td>Row 3</Td>\n          <Td>Row 3</Td>\n        </Tr>\n      </tbody>\n    </Table>\n  </Table.ScrollView>\n)\nrender(\n  <Card title="Card title" responsive={false} innerSpace={0} filled>\n    <MyTable />\n  </Card>,\n)\n'}),d=()=>(0,r.jsx)(i.Z,{"data-visual-test":"layout-card-grid",children:'<Grid.Container\n  columns={{\n    small: 1,\n    medium: 3,\n    large: 3,\n  }}\n  columnGap="small"\n>\n  <Card stack>\n    <H2>Heading</H2>\n    <P>Text</P>\n  </Card>\n  <Card stack>\n    <H2>Heading</H2>\n    <P>Pariatur officia sit adipisicing pariatur commodo enim do quis</P>\n  </Card>\n  <Card stack>\n    <H2>Heading</H2>\n    <P>Text</P>\n  </Card>\n</Grid.Container>\n'}),s=()=>(0,r.jsx)(i.Z,{"data-visual-test":"layout-card-flex",children:"<Flex.Container>\n  <Card\n    size={{\n      small: 'auto',\n      medium: 4,\n      large: 4,\n    }}\n    stack\n  >\n    <H2>Heading</H2>\n    <P>Text</P>\n  </Card>\n  <Card\n    size={{\n      small: 'auto',\n      medium: 4,\n      large: 4,\n    }}\n    stack\n  >\n    <H2>Heading</H2>\n    <P>Pariatur officia sit adipisicing pariatur commodo enim do quis</P>\n  </Card>\n  <Card\n    size={{\n      small: 'auto',\n      medium: 4,\n      large: 4,\n    }}\n    stack\n  >\n    <H2>Heading</H2>\n    <P>Text</P>\n  </Card>\n</Flex.Container>\n"}),o=()=>(0,r.jsx)(i.Z,{"data-visual-test":"layout-card-stack",children:'<Card stack>\n  <Field.String label="Label" value="Value" />\n  <Field.String label="Label" value="Value" />\n</Card>\n'}),c=()=>(0,r.jsx)(i.Z,{children:'<Card>\n  <Flex.Vertical>\n    <Field.String label="Label" value="Value" />\n    <Field.String label="Label" value="Value" />\n  </Flex.Vertical>\n</Card>\n'}),h=()=>(0,r.jsx)(i.Z,{children:'<Card>\n  <Flex.Horizontal>\n    <Field.String label="Label" value="Value" width="small" />\n    <Field.String label="Label" value="Value" width="stretch" />\n  </Flex.Horizontal>\n</Card>\n'}),u=()=>(0,r.jsx)(i.Z,{hidePreview:!0,children:'<Card aria-labelledby="unique-id">\n  <Form.SubHeading id="unique-id" space={0}>\n    Heading\n  </Form.SubHeading>\n  <P>Content inside a landmark ...</P>\n</Card>\n'})}}]);
//# sourceMappingURL=component---src-docs-uilib-components-card-mdx-e52103ee7c34f68133fe.js.map