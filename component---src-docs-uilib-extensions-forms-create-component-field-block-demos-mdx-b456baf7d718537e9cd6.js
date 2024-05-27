"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[3402],{56485:function(e,n,l){l.r(n),l.d(n,{default:function(){return k}});var t={};l.r(t),l.d(t,{CombineErrorMessages:function(){return x},Default:function(){return r},Horizontal:function(){return d},HorizontalAutoSize:function(){return f},HorizontalWithInfo:function(){return m},LabelSize:function(){return F},Widths:function(){return h},WithDescription:function(){return u},WithInfo:function(){return c}});var i=l(52322),o=l(45392),s=l(75333),a=l(99210);const r=()=>(0,i.jsx)(s.Z,{children:'<FieldBlock label="Label text">Input features goes here</FieldBlock>\n'}),c=()=>(0,i.jsx)(s.Z,{children:'<FieldBlock label="Label text" info="For your information">\n  Input features goes here\n</FieldBlock>\n'}),d=()=>(0,i.jsx)(s.Z,{children:'<FieldBlock label="Label text" layout="horizontal">\n  Input features goes here\n</FieldBlock>\n'}),m=()=>(0,i.jsx)(s.Z,{children:'<FieldBlock\n  label="Label text"\n  layout="horizontal"\n  info="For your information"\n>\n  Input features goes here\n</FieldBlock>\n'}),h=()=>(0,i.jsx)(s.Z,{scope:{TestElement:a.Z},hideCode:!0,"data-visual-test":"forms-field-block-widths",children:'<Flex.Stack>\n  <FieldBlock label="Default width (no width props)">\n    <TestElement>Contents</TestElement>\n  </FieldBlock>\n  <FieldBlock label="Small (affects outer block element)" width="small">\n    <TestElement>Contents</TestElement>\n  </FieldBlock>\n  <FieldBlock label="Medium (affects outer block element)" width="medium">\n    <TestElement>Contents</TestElement>\n  </FieldBlock>\n  <FieldBlock label="Large (affects outer block element)" width="large">\n    <TestElement>Contents</TestElement>\n  </FieldBlock>\n  <FieldBlock\n    label="Stretch (affects outer block element)"\n    width="stretch"\n  >\n    <TestElement>Contents</TestElement>\n  </FieldBlock>\n\n  <FieldBlock label="Small (affects contents only)" contentWidth="small">\n    <TestElement>Contents</TestElement>\n  </FieldBlock>\n  <FieldBlock label="Medium (affects contents only)" contentWidth="medium">\n    <TestElement>Contents</TestElement>\n  </FieldBlock>\n  <FieldBlock label="Large (affects contents only)" contentWidth="large">\n    <TestElement>Contents</TestElement>\n  </FieldBlock>\n  <FieldBlock\n    label="Stretch (affects contents only)"\n    contentWidth="stretch"\n  >\n    <TestElement>Contents</TestElement>\n  </FieldBlock>\n\n  <Flex.Horizontal gap={false}>\n    <FieldBlock\n      width="stretch"\n      style={{\n        backgroundColor: \'var(--color-mint-green)\',\n      }}\n    >\n      Left content\n    </FieldBlock>\n    <FieldBlock\n      width="stretch"\n      style={{\n        backgroundColor: \'var(--color-pistachio)\',\n      }}\n    >\n      Right content\n    </FieldBlock>\n  </Flex.Horizontal>\n</Flex.Stack>\n'}),u=()=>(0,i.jsx)(s.Z,{"data-visual-test":"forms-field-block-label-description",children:'<FieldBlock label="Label text" labelDescription="Description text">\n  Input features goes here\n</FieldBlock>\n'}),f=()=>(0,i.jsx)(s.Z,{children:'<FieldBlock label="Label">\n  <Flex.Container>\n    <Flex.Item\n      size={{\n        small: 12,\n        large: \'auto\',\n      }}\n    >\n      <Field.Name.First path="/firstName" width="medium" minLength={2} />\n    </Flex.Item>\n    <Flex.Item\n      size={{\n        small: 12,\n        large: \'auto\',\n      }}\n    >\n      <Field.Name.Last path="/lastName" width="medium" required />\n    </Flex.Item>\n    <Flex.Item\n      size={{\n        small: 12,\n        large: \'auto\',\n      }}\n    >\n      <FieldBlock width="large">\n        <Slider\n          min={1900}\n          max={new Date().getFullYear()}\n          step={1}\n          value={2010}\n          label="Birth year"\n          label_direction="vertical"\n          tooltip\n          alwaysShowTooltip\n        />\n      </FieldBlock>\n    </Flex.Item>\n  </Flex.Container>\n</FieldBlock>\n'}),F=()=>(0,i.jsx)(s.Z,{"data-visual-test":"forms-field-block-label-size",children:'<Form.Handler>\n  <Flex.Stack>\n    <Form.MainHeading>Heading</Form.MainHeading>\n    <FieldBlock label="Legend with medium heading size" labelSize="medium">\n      <Field.String\n        label="Label with a long text that goes beyond the field"\n        width="medium"\n      />\n    </FieldBlock>\n  </Flex.Stack>\n</Form.Handler>\n'}),x=()=>(0,i.jsx)(s.Z,{"data-visual-test":"forms-field-block-combined-errors",children:'<Field.Composition>\n  <Field.Number\n    width="small"\n    label="Number"\n    value={99}\n    minimum={100}\n    validateInitially\n  />\n  <Field.String\n    width="medium"\n    label="Text"\n    value="Text"\n    minLength={5}\n    validateInitially\n  />\n</Field.Composition>\n'});function b(e){const n=Object.assign({h2:"h2",h3:"h3",p:"p"},(0,o.ah)(),e.components);return t||p("Examples",!1),x||p("Examples.CombineErrorMessages",!0),r||p("Examples.Default",!0),d||p("Examples.Horizontal",!0),f||p("Examples.HorizontalAutoSize",!0),m||p("Examples.HorizontalWithInfo",!0),F||p("Examples.LabelSize",!0),h||p("Examples.Widths",!0),u||p("Examples.WithDescription",!0),c||p("Examples.WithInfo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{children:"Demos"}),"\n",(0,i.jsx)(n.h3,{children:"Label only (default layout)"}),"\n",(0,i.jsx)(r,{}),"\n",(0,i.jsx)(n.h3,{children:"With info"}),"\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(n.h3,{children:"Label size"}),"\n",(0,i.jsx)(F,{}),"\n",(0,i.jsx)(n.h3,{children:"Horizontal layout"}),"\n",(0,i.jsx)(d,{}),"\n",(0,i.jsx)(n.h3,{children:"Horizontal layout with info"}),"\n",(0,i.jsx)(m,{}),"\n",(0,i.jsx)(n.h3,{children:"With description (vertical only)"}),"\n",(0,i.jsx)(u,{}),"\n",(0,i.jsx)(n.h3,{children:"Responsive forms"}),"\n",(0,i.jsx)(f,{}),"\n",(0,i.jsx)(n.h3,{children:"Widths"}),"\n",(0,i.jsx)(h,{}),"\n",(0,i.jsx)(n.h3,{children:"Combine error messages"}),"\n",(0,i.jsx)(n.p,{children:"Error messages from all fields inside the FieldBlock are combined as one message below the whole block"}),"\n",(0,i.jsx)(x,{})]})}var k=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(b,e)})):b(e)};function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},99210:function(e,n,l){l.d(n,{Z:function(){return a}});var t=l(72779),i=l.n(t),o=l(80215),s=l(52322);function a(e){let{className:n=null,...l}=e;return(0,s.jsx)(o.Z,{className:i()("dnb-forms-test-element",n),...l})}a._supportsSpacingProps=!0}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-create-component-field-block-demos-mdx-b456baf7d718537e9cd6.js.map