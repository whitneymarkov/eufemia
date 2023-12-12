"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[3402],{56485:function(e,n,l){l.r(n),l.d(n,{default:function(){return y}});var t={};l.r(t),l.d(t,{CombineErrorMessages:function(){return j},Default:function(){return m},GroupMultipleFields:function(){return k},Horizontal:function(){return u},HorizontalAutoSize:function(){return B},HorizontalWithInfo:function(){return x},LabelSize:function(){return g},Widths:function(){return F},WithDescription:function(){return f},WithDescriptionAndSecondary:function(){return p},WithInfo:function(){return h},WithSecondary:function(){return b}});var i=l(52322),o=l(45392),s=l(35823),r=l(99210),a=l(82991),c=l(99773),d=l(96781);const m=()=>(0,i.jsx)(s.Z,{children:'<FieldBlock label="Label text">Input features goes here</FieldBlock>\n'}),h=()=>(0,i.jsx)(s.Z,{children:'<FieldBlock label="Label text" info="For your information">\n  Input features goes here\n</FieldBlock>\n'}),u=()=>(0,i.jsx)(s.Z,{children:'<FieldBlock label="Label text" layout="horizontal">\n  Input features goes here\n</FieldBlock>\n'}),x=()=>(0,i.jsx)(s.Z,{children:'<FieldBlock\n  label="Label text"\n  layout="horizontal"\n  info="For your information"\n>\n  Input features goes here\n</FieldBlock>\n'}),F=()=>(0,i.jsx)(s.Z,{scope:{TestElement:r.Z},"data-visual-test":"forms-field-block-widths",children:'<Flex.Vertical align="stretch">\n  <FieldBlock label="Default width (no width props)">\n    <TestElement>Contents</TestElement>\n  </FieldBlock>\n  <FieldBlock label="Small (affects outer block element)" width="small">\n    <TestElement>Contents</TestElement>\n  </FieldBlock>\n  <FieldBlock label="Medium (affects outer block element)" width="medium">\n    <TestElement>Contents</TestElement>\n  </FieldBlock>\n  <FieldBlock label="Large (affects outer block element)" width="large">\n    <TestElement>Contents</TestElement>\n  </FieldBlock>\n  <FieldBlock\n    label="Stretch (affects outer block element)"\n    width="stretch"\n  >\n    <TestElement>Contents</TestElement>\n  </FieldBlock>\n\n  <FieldBlock label="Small (affects contents only)" contentsWidth="small">\n    <TestElement>Contents</TestElement>\n  </FieldBlock>\n  <FieldBlock\n    label="Medium (affects contents only)"\n    contentsWidth="medium"\n  >\n    <TestElement>Contents</TestElement>\n  </FieldBlock>\n  <FieldBlock label="Large (affects contents only)" contentsWidth="large">\n    <TestElement>Contents</TestElement>\n  </FieldBlock>\n  <FieldBlock\n    label="Stretch (affects contents only)"\n    contentsWidth="stretch"\n  >\n    <TestElement>Contents</TestElement>\n  </FieldBlock>\n</Flex.Vertical>\n'}),f=()=>(0,i.jsx)(s.Z,{children:'<FieldBlock label="Label text" labelDescription="Description text">\n  Input features goes here\n</FieldBlock>\n'}),b=()=>(0,i.jsx)(s.Z,{children:'<FieldBlock label="Label text" labelSecondary="Secondary text">\n  Input features goes here\n</FieldBlock>\n'}),p=()=>(0,i.jsx)(s.Z,{children:'<FieldBlock\n  label="Label text"\n  labelDescription="Description text"\n  labelSecondary="42"\n>\n  Input features goes here\n</FieldBlock>\n'}),k=()=>(0,i.jsx)(s.Z,{children:'<FieldBlock label="Label text" info="For your information">\n  <Flex.Horizontal>\n    <Field.String width="small" minLength={3} />\n    <Field.Number minimum={10} />\n  </Flex.Horizontal>\n</FieldBlock>\n'}),j=()=>(0,i.jsx)(s.Z,{children:'<FieldBlock>\n  <Flex.Horizontal>\n    <Field.Number width="small" label="Num" minimum={100} />\n    <Field.String width="medium" label="Txt" minLength={5} />\n  </Flex.Horizontal>\n</FieldBlock>\n'}),B=()=>(0,i.jsx)(s.Z,{children:'<FieldBlock label="Label">\n  <Flex.Container>\n    <Flex.Item\n      size={{\n        small: 12,\n        large: \'auto\',\n      }}\n    >\n      <Field.String\n        path="/firstName"\n        label="First name"\n        width="medium"\n        minLength={2}\n      />\n    </Flex.Item>\n    <Flex.Item\n      size={{\n        small: 12,\n        large: \'auto\',\n      }}\n    >\n      <Field.String\n        path="/lastName"\n        label="Last name"\n        width="medium"\n        required\n      />\n    </Flex.Item>\n    <Flex.Item\n      size={{\n        small: 12,\n        large: \'auto\',\n      }}\n    >\n      <FieldBlock width="large">\n        <Slider\n          min={1900}\n          max={new Date().getFullYear()}\n          step={1}\n          value={2010}\n          label="Birth year"\n          label_direction="vertical"\n          tooltip\n          alwaysShowTooltip\n        />\n      </FieldBlock>\n    </Flex.Item>\n  </Flex.Container>\n</FieldBlock>\n'}),g=()=>(0,i.jsx)(s.Z,{scope:{Form:a,Field:c,FieldBlock:d.Z},"data-visual-test":"forms-field-block-label-size",children:'<Form.Handler>\n  <Flex.Stack>\n    <Form.MainHeading>Heading</Form.MainHeading>\n    <FieldBlock label="Legend with medium heading size" size="medium">\n      <Flex.Horizontal>\n        <Field.String label="Label A" width="medium" />\n        <Field.String label="Label B" width="medium" />\n      </Flex.Horizontal>\n    </FieldBlock>\n  </Flex.Stack>\n</Form.Handler>\n'});function E(e){const n=Object.assign({h2:"h2",h3:"h3",p:"p"},(0,o.ah)(),e.components);return t||w("Examples",!1),j||w("Examples.CombineErrorMessages",!0),m||w("Examples.Default",!0),k||w("Examples.GroupMultipleFields",!0),u||w("Examples.Horizontal",!0),B||w("Examples.HorizontalAutoSize",!0),x||w("Examples.HorizontalWithInfo",!0),g||w("Examples.LabelSize",!0),F||w("Examples.Widths",!0),f||w("Examples.WithDescription",!0),p||w("Examples.WithDescriptionAndSecondary",!0),h||w("Examples.WithInfo",!0),b||w("Examples.WithSecondary",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{children:"Demos"}),"\n",(0,i.jsx)(n.h3,{children:"Label only (default layout)"}),"\n",(0,i.jsx)(m,{}),"\n",(0,i.jsx)(n.h3,{children:"With info"}),"\n",(0,i.jsx)(h,{}),"\n",(0,i.jsx)(n.h3,{children:"Label size"}),"\n",(0,i.jsx)(g,{}),"\n",(0,i.jsx)(n.h3,{children:"Horizontal layout"}),"\n",(0,i.jsx)(u,{}),"\n",(0,i.jsx)(n.h3,{children:"Horizontal layout with info"}),"\n",(0,i.jsx)(x,{}),"\n",(0,i.jsx)(n.h3,{children:"Widths"}),"\n",(0,i.jsx)(F,{}),"\n",(0,i.jsx)(n.h3,{children:"With description (vertical only)"}),"\n",(0,i.jsx)(f,{}),"\n",(0,i.jsx)(n.h3,{children:"With secondary"}),"\n",(0,i.jsx)("em",{children:"(vertical only)"}),"\n",(0,i.jsx)(b,{}),"\n",(0,i.jsx)(n.h3,{children:"With description and secondary"}),"\n",(0,i.jsx)("em",{children:"(vertical only)"}),"\n",(0,i.jsx)(p,{}),"\n",(0,i.jsx)(n.h3,{children:"Group multiple fields"}),"\n",(0,i.jsx)(k,{}),"\n",(0,i.jsx)(n.h3,{children:"Combine error messages"}),"\n",(0,i.jsx)(n.p,{children:"Error messages from all fields inside the FieldBlock are combined as one message below the whole block"}),"\n",(0,i.jsx)(j,{}),"\n",(0,i.jsx)(n.h3,{children:"Responsive forms"}),"\n",(0,i.jsx)(B,{})]})}var y=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(E,e)})):E(e)};function w(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},99210:function(e,n,l){l.d(n,{Z:function(){return r}});var t=l(72779),i=l.n(t),o=l(80215),s=l(52322);function r(e){let{className:n=null,...l}=e;return(0,s.jsx)(o.Z,{className:i()("dnb-forms-test-element",n),...l})}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-create-component-field-block-demos-mdx-fd86914fd744970d4ff4.js.map