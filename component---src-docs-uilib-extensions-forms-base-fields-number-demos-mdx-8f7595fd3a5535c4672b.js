"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[42487],{86067:function(n,e,l){l.r(e),l.d(e,{default:function(){return Z}});var a={};l.r(a),l.d(a,{Alignment:function(){return h},Disabled:function(){return b},Empty:function(){return i},HorizontalLayout:function(){return c},Info:function(){return x},Label:function(){return u},LabelAndValue:function(){return d},Percentage:function(){return f},Placeholder:function(){return s},ValidateMaximumCustomError:function(){return F},ValidateMinimum:function(){return C},ValidateRequired:function(){return j},Warning:function(){return p},Widths:function(){return g},WithError:function(){return v},WithHelp:function(){return m},WithSlider:function(){return S},WithStepControls:function(){return E},WithStepControlsDisabled:function(){return N},WithStepControlsError:function(){return w}});var t=l(52322),r=l(45392),o=l(99587);l(2784);const i=()=>(0,t.jsx)(o.Z,{"data-visual-test":"number-input",children:"<Field.Number\n  onFocus={(value) => console.log('onFocus', value)}\n  onBlur={(value) => console.log('onBlur', value)}\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),s=()=>(0,t.jsx)(o.Z,{children:"<Field.Number\n  placeholder=\"Enter a number\"\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),u=()=>(0,t.jsx)(o.Z,{children:"<Field.Number\n  label=\"Label text\"\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),d=()=>(0,t.jsx)(o.Z,{children:"<Field.Number\n  value={420000.25}\n  label=\"Label text\"\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),h=()=>(0,t.jsx)(o.Z,{children:'\n<Field.Number\n  align="center"\n  label="Center aligned (default)"\n  value={10}\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n<Field.Number\n  align="left"\n  label="Left aligned"\n  value={10}\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n<Field.Number\n  align="right"\n  label="Right aligned"\n  value={10}\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n\n'}),m=()=>(0,t.jsx)(o.Z,{children:"<Field.Number\n  value={12345}\n  label=\"Label text\"\n  help={{\n    title: 'Help is available',\n    content:\n      'Here is what a team can do for you. . . . It allows you to help others do their best.',\n  }}\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),c=()=>(0,t.jsx)(o.Z,{children:'<Field.Number\n  value={420000}\n  label="Label text"\n  layout="horizontal"\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n'}),g=()=>(0,t.jsx)(o.Z,{hideCode:!0,"data-visual-test":"number-widths",children:'<Flex.Stack>\n  <Form.SubHeading>Without step controls</Form.SubHeading>\n\n  <Field.Number label="Default width (property omitted)" value={1234} />\n  <Field.Number label="Small" value={1234} width="small" />\n  <Field.Number\n    label="Medium (and medium size)"\n    value={1234}\n    width="medium"\n    size="medium"\n  />\n  <Field.Number\n    label="Large (and large size)"\n    value={1234}\n    width="large"\n    size="large"\n  />\n  <Field.Number label="Stretch" value={1234} width="stretch" />\n  <Form.SubHeading>With step controls</Form.SubHeading>\n  <Field.Number\n    showStepControls\n    label="Default width (property omitted)"\n    value={1234}\n  />\n  <Field.Number\n    showStepControls\n    label="Small"\n    value={1234}\n    width="small"\n  />\n  <Field.Number\n    showStepControls\n    label="Medium (and medium size)"\n    value={1234}\n    width="medium"\n    size="medium"\n  />\n  <Field.Number\n    showStepControls\n    label="Large (and large size)"\n    value={1234}\n    width="large"\n    size="large"\n  />\n  <Field.Number\n    showStepControls\n    label="Stretch"\n    value={1234}\n    width="stretch"\n  />\n</Flex.Stack>\n'}),b=()=>(0,t.jsx)(o.Z,{children:"<Field.Number\n  value={135}\n  label=\"Label text\"\n  onChange={(value) => console.log('onChange', value)}\n  disabled\n/>\n"}),x=()=>(0,t.jsx)(o.Z,{children:'<Field.Number\n  value={135}\n  label="Label text"\n  onChange={(value) => console.log(\'onChange\', value)}\n  info="Useful information (?)"\n/>\n'}),p=()=>(0,t.jsx)(o.Z,{children:'<Field.Number\n  value={135}\n  label="Label text"\n  onChange={(value) => console.log(\'onChange\', value)}\n  warning="I\'m warning you..."\n/>\n'}),v=()=>(0,t.jsx)(o.Z,{children:"<Field.Number\n  value={135}\n  label=\"Label text\"\n  onChange={(value) => console.log('onChange', value)}\n  error={new Error('This is what is wrong...')}\n/>\n"}),j=()=>(0,t.jsx)(o.Z,{children:"<Field.Number\n  value={123}\n  label=\"Remove and blur field\"\n  onChange={(value) => console.log('onChange', value)}\n  required\n/>\n"}),C=()=>(0,t.jsx)(o.Z,{children:"<Field.Number\n  value={300}\n  label=\"Enter a number below 250 and blur to trigger error\"\n  onChange={(value) => console.log('onChange', value)}\n  minimum={250}\n/>\n"}),f=()=>(0,t.jsx)(o.Z,{children:"<Field.Number\n  value={80}\n  label=\"Percentage\"\n  onChange={(value) => console.log('onChange', value)}\n  minimum={90}\n/>\n"}),F=()=>(0,t.jsx)(o.Z,{children:'<Field.Number\n  value={200}\n  label="Enter a number above 250 and blur to trigger error"\n  onChange={(value) => console.log(\'onChange\', value)}\n  maximum={250}\n  errorMessages={{\n    maximum: "You can\'t enter a number THAR large.. Max 250!",\n  }}\n/>\n'}),E=()=>(0,t.jsx)(o.Z,{"data-visual-test":"number-input-step-controls",children:"<Field.Number\n  showStepControls\n  minimum={0}\n  maximum={100}\n  step={10}\n  value={50}\n/>\n"}),w=()=>(0,t.jsx)(o.Z,{"data-visual-test":"number-input-step-controls-error",children:"<Field.Number\n  showStepControls\n  maximum={100}\n  value={150}\n  error={new Error('You done messed up, A-a-ron!')}\n/>\n"}),N=()=>(0,t.jsx)(o.Z,{"data-visual-test":"number-input-step-controls-disabled",children:"<Field.Number showStepControls disabled />\n"}),S=()=>(0,t.jsx)(o.Z,{hideCode:!0,noInline:!0,children:'const Component = () => {\n  const [value, setValue] = React.useState(50000)\n  const settings = {\n    min: 0,\n    max: 100000,\n    step: 1000,\n  }\n  return (\n    <Grid.Container>\n      <Grid.Item\n        span={{\n          small: [1, 12],\n          medium: [1, 4],\n          large: [1, 3],\n        }}\n      >\n        <Field.Number\n          showStepControls\n          minimum={settings.min}\n          maximum={settings.max}\n          step={settings.step}\n          value={value}\n          onChange={(value) => setValue(value)}\n          width="stretch"\n          bottom="small"\n        />\n        <Slider\n          min={settings.min}\n          max={settings.max}\n          step={settings.step}\n          value={value}\n          onChange={({ value }) => setValue(parseFloat(String(value)))}\n          hideButtons\n          tooltip\n        />\n      </Grid.Item>\n    </Grid.Container>\n  )\n}\nrender(<Component />)\n'});function W(n){const e=Object.assign({h2:"h2",h3:"h3"},(0,r.ah)(),n.components),{VisibleWhenVisualTest:l}=e;return a||L("Examples",!1),h||L("Examples.Alignment",!0),b||L("Examples.Disabled",!0),i||L("Examples.Empty",!0),c||L("Examples.HorizontalLayout",!0),x||L("Examples.Info",!0),u||L("Examples.Label",!0),d||L("Examples.LabelAndValue",!0),f||L("Examples.Percentage",!0),s||L("Examples.Placeholder",!0),F||L("Examples.ValidateMaximumCustomError",!0),C||L("Examples.ValidateMinimum",!0),j||L("Examples.ValidateRequired",!0),p||L("Examples.Warning",!0),g||L("Examples.Widths",!0),v||L("Examples.WithError",!0),m||L("Examples.WithHelp",!0),S||L("Examples.WithSlider",!0),E||L("Examples.WithStepControls",!0),N||L("Examples.WithStepControlsDisabled",!0),w||L("Examples.WithStepControlsError",!0),l||L("VisibleWhenVisualTest",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{children:"Demos"}),"\n",(0,t.jsx)(e.h3,{children:"Empty"}),"\n",(0,t.jsx)(i,{}),"\n",(0,t.jsx)(e.h3,{children:"Placeholder"}),"\n",(0,t.jsx)(s,{}),"\n",(0,t.jsx)(e.h3,{children:"Label"}),"\n",(0,t.jsx)(u,{}),"\n",(0,t.jsx)(e.h3,{children:"Label and value"}),"\n",(0,t.jsx)(d,{}),"\n",(0,t.jsx)(e.h3,{children:"Alignment"}),"\n",(0,t.jsx)(h,{}),"\n",(0,t.jsx)(e.h3,{children:"Horizontal layout"}),"\n",(0,t.jsx)(c,{}),"\n",(0,t.jsx)(e.h3,{children:"With help"}),"\n",(0,t.jsx)(m,{}),"\n",(0,t.jsx)(e.h3,{children:"With step controls"}),"\n",(0,t.jsx)(E,{}),"\n",(0,t.jsx)(e.h3,{children:"With step controls in conjunction with Slider"}),"\n",(0,t.jsx)(S,{}),"\n",(0,t.jsx)(e.h3,{children:"Disabled"}),"\n",(0,t.jsx)(b,{}),"\n",(0,t.jsx)(e.h3,{children:"Info"}),"\n",(0,t.jsx)(x,{}),"\n",(0,t.jsx)(e.h3,{children:"Warning"}),"\n",(0,t.jsx)(p,{}),"\n",(0,t.jsx)(e.h3,{children:"Error"}),"\n",(0,t.jsx)(v,{}),"\n",(0,t.jsx)(e.h3,{children:"Validation - Required"}),"\n",(0,t.jsx)(j,{}),"\n",(0,t.jsx)(e.h3,{children:"Validation - Minimum"}),"\n",(0,t.jsx)(C,{}),"\n",(0,t.jsx)(e.h3,{children:"Validation - Maximum and custom error message"}),"\n",(0,t.jsx)(F,{}),"\n",(0,t.jsx)(e.h3,{children:"Percentage"}),"\n",(0,t.jsx)(f,{}),"\n",(0,t.jsx)(e.h3,{children:"Widths"}),"\n",(0,t.jsx)(g,{}),"\n",(0,t.jsxs)(l,{children:[(0,t.jsx)(w,{}),(0,t.jsx)(N,{})]})]})}var Z=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(W,n)})):W(n)};function L(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-base-fields-number-demos-mdx-8f7595fd3a5535c4672b.js.map