"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[74369,75927,98762],{90304:function(n,e,i){i.r(e);var a=i(52322),t=i(45392),r=i(64624),d=i(90349);function s(n){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.default,{}),"\n",(0,a.jsx)(d.default,{})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,a.jsx)(e,Object.assign({},n,{children:(0,a.jsx)(s,n)})):s()}},90349:function(n,e,i){i.r(e);var a=i(52322),t=i(45392),r=i(84618);function d(n){const e=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a"},(0,t.ah)(),n.components);return r||s("Examples",!1),r.Default||s("Examples.Default",!0),r.HorizontalFields||s("Examples.HorizontalFields",!0),r.NestedCards||s("Examples.NestedCards",!0),r.Stack||s("Examples.Stack",!0),r.VerticalFields||s("Examples.VerticalFields",!0),r.WithFlex||s("Examples.WithFlex",!0),r.WithGrid||s("Examples.WithGrid",!0),r.WithNestedSection||s("Examples.WithNestedSection",!0),r.WithTable||s("Examples.WithTable",!0),r.WithoutPadding||s("Examples.WithoutPadding",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{children:"Demo"}),"\n",(0,a.jsx)(e.h3,{children:"Default border"}),"\n",(0,a.jsx)(r.Default,{}),"\n",(0,a.jsx)(e.h3,{children:"Vertical fields"}),"\n",(0,a.jsx)(r.VerticalFields,{}),"\n",(0,a.jsx)(e.h3,{children:"Horizontal fields"}),"\n",(0,a.jsx)(r.HorizontalFields,{}),"\n",(0,a.jsx)(e.h3,{children:"Stack"}),"\n",(0,a.jsxs)(e.p,{children:["The Card components needs to have ",(0,a.jsx)(e.code,{children:"stack={true}"})," or ",(0,a.jsx)(e.code,{children:'align="stretch"'})," in order to stretch its children components."]}),"\n",(0,a.jsxs)(e.p,{children:["For ",(0,a.jsx)(e.a,{href:"uilib/extensions/forms/",children:"form components"}),", you should use ",(0,a.jsx)(e.code,{children:"stack={true}"})," to get the correct spacing."]}),"\n",(0,a.jsx)(r.Stack,{}),"\n",(0,a.jsx)(e.h3,{children:"Nested Cards"}),"\n",(0,a.jsxs)(e.p,{children:["Nested cards have ",(0,a.jsx)(e.code,{children:"responsive={false}"})," by default and will not behave responsive."]}),"\n",(0,a.jsx)(r.NestedCards,{}),"\n",(0,a.jsx)(e.h3,{children:"Without padding"}),"\n",(0,a.jsx)(r.WithoutPadding,{}),"\n",(0,a.jsx)(e.h3,{children:"With nested Section"}),"\n",(0,a.jsxs)(e.p,{children:["The Card components needs to have ",(0,a.jsx)(e.code,{children:"stack={true}"})," or ",(0,a.jsx)(e.code,{children:'align="stretch"'})," in order to stretch its children components."]}),"\n",(0,a.jsx)(r.WithNestedSection,{}),"\n",(0,a.jsx)(e.h3,{children:"With Table"}),"\n",(0,a.jsx)(r.WithTable,{}),"\n",(0,a.jsx)(e.h3,{children:"With Grid"}),"\n",(0,a.jsx)(e.p,{children:"Grid wraps the Cards nicely on smaller screens."}),"\n",(0,a.jsx)(r.WithGrid,{}),"\n",(0,a.jsx)(e.h3,{children:"With Flex"}),"\n",(0,a.jsx)(e.p,{children:"While Flex has the horizontal direction, it uses rowGap when wrapping. So it's the container spacing the Cards then. This is not ideal, because the Cards should ideally have no gap, like in the Grid example above."}),"\n",(0,a.jsx)(r.WithFlex,{})]})}function s(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,a.jsx)(e,Object.assign({},n,{children:(0,a.jsx)(d,n)})):d(n)}},64624:function(n,e,i){i.r(e);var a=i(52322),t=i(45392),r=i(84618);function d(n){const e=Object.assign({h2:"h2",pre:"pre",code:"code",p:"p",a:"a"},(0,t.ah)(),n.components);return r||s("Examples",!1),r.WithHeadingsAndAriaLabel||s("Examples.WithHeadingsAndAriaLabel",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{children:"Import"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",children:"import { Card } from '@dnb/eufemia'\n"})}),"\n",(0,a.jsx)(e.h2,{children:"Description"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"Card"})," is a block section element showing the white box with rounded gray borders, adding spacing automatically."]}),"\n",(0,a.jsxs)(e.p,{children:["It uses ",(0,a.jsx)(e.a,{href:"/uilib/layout/flex/item",children:"Flex.Item"})," under the hood. When one of these properties were given, ",(0,a.jsx)(e.code,{children:"stack"}),", ",(0,a.jsx)(e.code,{children:"direction"})," or ",(0,a.jsx)(e.code,{children:"spacing"})," – the ",(0,a.jsx)(e.a,{href:"/uilib/layout/flex/container",children:"Flex.Container"})," will be used."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",children:"import { Card } from '@dnb/eufemia'\nimport { Form, Field } from '@dnb/eufemia/extensions/forms'\n\nrender(\n  <Form.Handler data={existingData} onSubmit={submitHandler}>\n    <Card>\n      <Field.Email path=\"/dataPath\" />\n      <Form.ButtonRow>\n        <Form.SubmitButton />\n      </Form.ButtonRow>\n    </Card>\n  </Form.Handler>,\n)\n"})}),"\n",(0,a.jsx)(e.h2,{children:"Accessibility"}),"\n",(0,a.jsxs)(e.p,{children:["It uses a ",(0,a.jsx)(e.code,{children:"section"})," element. Which allows you to add an ",(0,a.jsx)(e.code,{children:"aria-label"})," or ",(0,a.jsx)(e.code,{children:"aria-labelledby"})," to provide screen readers with landmarks."]}),"\n",(0,a.jsx)(r.WithHeadingsAndAriaLabel,{})]})}function s(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,a.jsx)(e,Object.assign({},n,{children:(0,a.jsx)(d,n)})):d(n)}},84618:function(n,e,i){i.r(e),i.d(e,{Default:function(){return r},HorizontalFields:function(){return u},NestedCards:function(){return d},Stack:function(){return c},VerticalFields:function(){return h},WithFlex:function(){return o},WithGrid:function(){return l},WithHeadingsAndAriaLabel:function(){return x},WithNestedSection:function(){return p},WithTable:function(){return s},WithoutPadding:function(){return m}});var a=i(46832),t=i(52322);const r=()=>(0,t.jsx)(a.Z,{children:'<Card data-visual-test="layout-card-border">\n  <P>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus\n    pharetra elit in bibendum.\n  </P>\n  <P>\n    Praesent nunc ipsum, convallis eget convallis gravida, vehicula vitae\n    metus.\n  </P>\n</Card>\n'}),d=()=>(0,t.jsx)(a.Z,{"data-visual-test":"layout-card-nested",children:"<Card>\n  <P>First Card</P>\n  <Card top>\n    <P>Second Card</P>\n    <Card top>\n      <P>Third Card (for edge cases only)</P>\n    </Card>\n  </Card>\n</Card>\n"}),s=()=>(0,t.jsx)(a.Z,{"data-visual-test":"layout-card-table",noInline:!0,children:'const MyTable = () => (\n  <Table.ScrollView>\n    <Table border outline size="medium">\n      <thead>\n        <Tr noWrap>\n          <Th>Column 1</Th>\n          <Th>Column 2</Th>\n          <Th>Column 3</Th>\n        </Tr>\n      </thead>\n      <tbody>\n        <Tr>\n          <Td>Row 1</Td>\n          <Td>Row 1</Td>\n          <Td>Row 1</Td>\n        </Tr>\n        <Tr>\n          <Td colSpan={3} align="right">\n            <Button>Button</Button>\n          </Td>\n        </Tr>\n        <Tr>\n          <Td>Row 3</Td>\n          <Td>Row 3</Td>\n          <Td>Row 3</Td>\n        </Tr>\n      </tbody>\n    </Table>\n  </Table.ScrollView>\n)\nrender(\n  <Card title="Card title" responsive={false} innerSpace={0} filled>\n    <MyTable />\n  </Card>,\n)\n'}),l=()=>(0,t.jsx)(a.Z,{"data-visual-test":"layout-card-grid",children:'<Grid.Container\n  columns={{\n    small: 1,\n    medium: 3,\n    large: 3,\n  }}\n  columnGap="small"\n>\n  <Card stack>\n    <H2>Heading</H2>\n    <P>Text</P>\n  </Card>\n  <Card stack>\n    <H2>Heading</H2>\n    <P>Pariatur officia sit adipisicing pariatur commodo enim do quis</P>\n  </Card>\n  <Card stack>\n    <H2>Heading</H2>\n    <P>Text</P>\n  </Card>\n</Grid.Container>\n'}),o=()=>(0,t.jsx)(a.Z,{"data-visual-test":"layout-card-flex",children:"<Flex.Container>\n  <Card\n    size={{\n      small: 'auto',\n      medium: 4,\n      large: 4,\n    }}\n    stack\n  >\n    <H2>Heading</H2>\n    <P>Text</P>\n  </Card>\n  <Card\n    size={{\n      small: 'auto',\n      medium: 4,\n      large: 4,\n    }}\n    stack\n  >\n    <H2>Heading</H2>\n    <P>Pariatur officia sit adipisicing pariatur commodo enim do quis</P>\n  </Card>\n  <Card\n    size={{\n      small: 'auto',\n      medium: 4,\n      large: 4,\n    }}\n    stack\n  >\n    <H2>Heading</H2>\n    <P>Text</P>\n  </Card>\n</Flex.Container>\n"}),c=()=>(0,t.jsx)(a.Z,{"data-visual-test":"layout-card-stack",children:'<Card stack>\n  <Field.String label="Label" value="Value" />\n  <Field.String label="Label" value="Value" />\n  <Hr />\n  <Form.SubmitButton />\n</Card>\n'}),h=()=>(0,t.jsx)(a.Z,{children:'<Card>\n  <Flex.Vertical>\n    <Field.String label="Label" value="Value" />\n    <Field.String label="Label" value="Value" />\n  </Flex.Vertical>\n</Card>\n'}),u=()=>(0,t.jsx)(a.Z,{children:'<Card>\n  <Flex.Horizontal>\n    <Field.String label="Label" value="Value" width="small" />\n    <Field.String label="Label" value="Value" width="stretch" />\n  </Flex.Horizontal>\n</Card>\n'}),x=()=>(0,t.jsx)(a.Z,{hidePreview:!0,children:'<Card aria-labelledby="unique-id">\n  <Form.SubHeading id="unique-id" space={0}>\n    Heading\n  </Form.SubHeading>\n  <P>Content inside a landmark ...</P>\n</Card>\n'}),m=()=>(0,t.jsx)(a.Z,{children:'<Card innerSpace={false} align="stretch">\n  <P>no inner space</P>\n</Card>\n'}),p=()=>(0,t.jsx)(a.Z,{"data-visual-test":"card-nested-section",children:'<Flex.Stack>\n  <Card gap="x-small" align="stretch">\n    <Form.SubHeading>Card with a nested Section</Form.SubHeading>\n    <Section\n      variant="info"\n      innerSpace={{\n        top: \'small\',\n        bottom: \'medium\',\n      }}\n    >\n      <Field.String width="medium" label="In nested Section" />\n    </Section>\n  </Card>\n\n  <Card innerSpace="x-large" stack>\n    <Section\n      variant="info"\n      innerSpace={{\n        top: \'small\',\n        bottom: \'medium\',\n      }}\n    >\n      <Field.String\n        width="medium"\n        label="Card with a \'x-large\' inner space"\n      />\n    </Section>\n  </Card>\n\n  <Card innerSpace={false} align="stretch">\n    <P>no inner space</P>\n    <Section innerSpace backgroundColor="var(--card-outline-color)">\n      <Field.String width="medium" label="Card with no inner space" />\n    </Section>\n    <P>no inner space</P>\n  </Card>\n</Flex.Stack>\n'})}}]);
//# sourceMappingURL=component---src-docs-uilib-components-card-mdx-ee289128678a64f0f3a1.js.map