"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[98762],{64624:function(n,e,a){a.r(e);var i=a(52322),r=a(45392),t=a(84618);function d(n){const e=Object.assign({h2:"h2",pre:"pre",code:"code",p:"p",a:"a",strong:"strong"},(0,r.ah)(),n.components);return t||l("Examples",!1),t.WithHeadingsAndAriaLabel||l("Examples.WithHeadingsAndAriaLabel",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{children:"Import"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-tsx",children:"import { Card } from '@dnb/eufemia'\n"})}),"\n",(0,i.jsx)(e.h2,{children:"Description"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"Card"})," is a block section element showing the white box with rounded gray borders, adding spacing automatically."]}),"\n",(0,i.jsxs)(e.p,{children:["It uses ",(0,i.jsx)(e.a,{href:"/uilib/layout/flex/item",children:"Flex.Item"})," under the hood. When one of these properties were given, ",(0,i.jsx)(e.code,{children:"stack"}),", ",(0,i.jsx)(e.code,{children:"direction"})," or ",(0,i.jsx)(e.code,{children:"spacing"})," – the ",(0,i.jsx)(e.a,{href:"/uilib/layout/flex/container",children:"Flex.Container"})," will be used."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"BETA:"})," The design is not 100% finalised and may change to be officially approved by UX through an RFC."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-jsx",children:"import { Card } from '@dnb/eufemia'\nimport { Form, Field } from '@dnb/eufemia/extensions/forms'\n\nrender(\n  <Form.Handler data={existingData} onSubmit={submitHandler}>\n    <Card>\n      <Field.Email path=\"/dataPath\" />\n      <Form.ButtonRow>\n        <Form.SubmitButton />\n      </Form.ButtonRow>\n    </Card>\n  </Form.Handler>,\n)\n"})}),"\n",(0,i.jsx)(e.h2,{children:"Accessibility"}),"\n",(0,i.jsxs)(e.p,{children:["It uses a ",(0,i.jsx)(e.code,{children:"section"})," element. Which allows you to add an ",(0,i.jsx)(e.code,{children:"aria-label"})," or ",(0,i.jsx)(e.code,{children:"aria-labelledby"})," to provide screen readers with landmarks."]}),"\n",(0,i.jsx)(t.WithHeadingsAndAriaLabel,{})]})}function l(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(d,n)})):d(n)}},84618:function(n,e,a){a.r(e),a.d(e,{Default:function(){return t},HorizontalFields:function(){return u},Stack:function(){return s},VerticalFields:function(){return c},WithFlex:function(){return o},WithGrid:function(){return l},WithHeadingsAndAriaLabel:function(){return h},WithNestedSection:function(){return m},WithTable:function(){return d}});var i=a(64368),r=a(52322);const t=()=>(0,r.jsx)(i.Z,{children:'<Card data-visual-test="layout-card-border">\n  <P>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus\n    pharetra elit in bibendum.\n  </P>\n  <P>\n    Praesent nunc ipsum, convallis eget convallis gravida, vehicula vitae\n    metus.\n  </P>\n</Card>\n'}),d=()=>(0,r.jsx)(i.Z,{"data-visual-test":"layout-card-table",noInline:!0,children:'const MyTable = () => (\n  <Table.ScrollView>\n    <Table border outline size="medium">\n      <thead>\n        <Tr noWrap>\n          <Th>Column 1</Th>\n          <Th>Column 2</Th>\n          <Th>Column 3</Th>\n        </Tr>\n      </thead>\n      <tbody>\n        <Tr>\n          <Td>Row 1</Td>\n          <Td>Row 1</Td>\n          <Td>Row 1</Td>\n        </Tr>\n        <Tr>\n          <Td colSpan={3} align="right">\n            <Button>Button</Button>\n          </Td>\n        </Tr>\n        <Tr>\n          <Td>Row 3</Td>\n          <Td>Row 3</Td>\n          <Td>Row 3</Td>\n        </Tr>\n      </tbody>\n    </Table>\n  </Table.ScrollView>\n)\nrender(\n  <Card title="Card title" responsive={false} innerSpace={0} filled>\n    <MyTable />\n  </Card>,\n)\n'}),l=()=>(0,r.jsx)(i.Z,{"data-visual-test":"layout-card-grid",children:'<Grid.Container\n  columns={{\n    small: 1,\n    medium: 3,\n    large: 3,\n  }}\n  columnGap="small"\n>\n  <Card stack>\n    <H2>Heading</H2>\n    <P>Text</P>\n  </Card>\n  <Card stack>\n    <H2>Heading</H2>\n    <P>Pariatur officia sit adipisicing pariatur commodo enim do quis</P>\n  </Card>\n  <Card stack>\n    <H2>Heading</H2>\n    <P>Text</P>\n  </Card>\n</Grid.Container>\n'}),o=()=>(0,r.jsx)(i.Z,{"data-visual-test":"layout-card-flex",children:"<Flex.Container>\n  <Card\n    size={{\n      small: 'auto',\n      medium: 4,\n      large: 4,\n    }}\n    stack\n  >\n    <H2>Heading</H2>\n    <P>Text</P>\n  </Card>\n  <Card\n    size={{\n      small: 'auto',\n      medium: 4,\n      large: 4,\n    }}\n    stack\n  >\n    <H2>Heading</H2>\n    <P>Pariatur officia sit adipisicing pariatur commodo enim do quis</P>\n  </Card>\n  <Card\n    size={{\n      small: 'auto',\n      medium: 4,\n      large: 4,\n    }}\n    stack\n  >\n    <H2>Heading</H2>\n    <P>Text</P>\n  </Card>\n</Flex.Container>\n"}),s=()=>(0,r.jsx)(i.Z,{"data-visual-test":"layout-card-stack",children:'<Card stack>\n  <Field.String label="Label" value="Value" />\n  <Field.String label="Label" value="Value" />\n  <Hr />\n  <Form.SubmitButton />\n</Card>\n'}),c=()=>(0,r.jsx)(i.Z,{children:'<Card>\n  <Flex.Vertical>\n    <Field.String label="Label" value="Value" />\n    <Field.String label="Label" value="Value" />\n  </Flex.Vertical>\n</Card>\n'}),u=()=>(0,r.jsx)(i.Z,{children:'<Card>\n  <Flex.Horizontal>\n    <Field.String label="Label" value="Value" width="small" />\n    <Field.String label="Label" value="Value" width="stretch" />\n  </Flex.Horizontal>\n</Card>\n'}),h=()=>(0,r.jsx)(i.Z,{hidePreview:!0,children:'<Card aria-labelledby="unique-id">\n  <Form.SubHeading id="unique-id" space={0}>\n    Heading\n  </Form.SubHeading>\n  <P>Content inside a landmark ...</P>\n</Card>\n'}),m=()=>(0,r.jsx)(i.Z,{"data-visual-test":"card-nested-section",children:'<Flex.Stack>\n  <Card gap="x-small" align="stretch">\n    <Form.SubHeading>Card with a nested Section</Form.SubHeading>\n    <Section\n      variant="info"\n      innerSpace={{\n        top: \'small\',\n        bottom: \'medium\',\n      }}\n    >\n      <Field.String width="medium" label="In nested Section" />\n    </Section>\n  </Card>\n\n  <Card innerSpace="x-large" stack>\n    <Section\n      variant="info"\n      innerSpace={{\n        top: \'small\',\n        bottom: \'medium\',\n      }}\n    >\n      <Field.String\n        width="medium"\n        label="Card with a \'x-large\' inner space"\n      />\n    </Section>\n  </Card>\n\n  <Card innerSpace={false} align="stretch">\n    <P>no inner space</P>\n    <Section innerSpace backgroundColor="var(--card-outline-color)">\n      <Field.String width="medium" label="Card with no inner space" />\n    </Section>\n    <P>no inner space</P>\n  </Card>\n</Flex.Stack>\n'})}}]);
//# sourceMappingURL=component---src-docs-uilib-components-card-info-mdx-781aba832fee3c946885.js.map