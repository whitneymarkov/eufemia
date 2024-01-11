"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[39950,42487,14032],{74634:function(n,e,l){l.r(e);var a=l(52322),o=l(45392),r=l(51361),t=l(86067);function s(n){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.default,{}),"\n",(0,a.jsx)(t.default,{})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,o.ah)(),n.components);return e?(0,a.jsx)(e,Object.assign({},n,{children:(0,a.jsx)(s,n)})):s()}},86067:function(n,e,l){l.r(e),l.d(e,{default:function(){return V}});var a={};l.r(a),l.d(a,{Alignment:function(){return c},Disabled:function(){return b},Empty:function(){return i},Error:function(){return j},HorizontalLayout:function(){return g},Info:function(){return p},Label:function(){return h},LabelAndValue:function(){return d},Percentage:function(){return F},Placeholder:function(){return u},ValidateMaximumCustomError:function(){return E},ValidateMinimum:function(){return f},ValidateRequired:function(){return C},Warning:function(){return v},Widths:function(){return x},WithHelp:function(){return m},WithSlider:function(){return y},WithStepControls:function(){return w},WithStepControlsDisabled:function(){return S},WithStepControlsError:function(){return N}});var o=l(52322),r=l(45392),t=l(50716),s=l(27439);l(2784);const i=()=>(0,o.jsx)(t.Z,{"data-visual-test":"number-input",children:"<Field.Number\n  onFocus={(value) => console.log('onFocus', value)}\n  onBlur={(value) => console.log('onBlur', value)}\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),u=()=>(0,o.jsx)(t.Z,{children:"<Field.Number\n  placeholder=\"Enter a number\"\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),h=()=>(0,o.jsx)(t.Z,{children:"<Field.Number\n  label=\"Label text\"\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),d=()=>(0,o.jsx)(t.Z,{children:"<Field.Number\n  value={420000.25}\n  label=\"Label text\"\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),c=()=>(0,o.jsx)(t.Z,{children:'\n<Field.Number\n  align="center"\n  label="Center aligned (default)"\n  value={10}\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n<Field.Number\n  align="left"\n  label="Left aligned"\n  value={10}\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n<Field.Number\n  align="right"\n  label="Right aligned"\n  value={10}\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n\n'}),m=()=>(0,o.jsx)(t.Z,{children:"<Field.Number\n  value={12345}\n  label=\"Label text\"\n  help={{\n    title: 'Help is available',\n    contents:\n      'Here is what a team can do for you. . . . It allows you to help others do their best.',\n  }}\n  onChange={(value) => console.log('onChange', value)}\n/>\n"}),g=()=>(0,o.jsx)(t.Z,{children:'<Field.Number\n  value={420000}\n  label="Label text"\n  layout="horizontal"\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n'}),x=()=>(0,o.jsx)(t.Z,{hideCode:!0,children:'\n<h4 className="dnb-lead">Without step controls</h4>\n<Field.Number\n  label="Default width (property omitted)"\n  value={123}\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n<Field.Number\n  label="Small"\n  value={123}\n  width="small"\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n<Field.Number\n  label="Medium"\n  value={123}\n  width="medium"\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n<Field.Number\n  label="Large"\n  value={123}\n  width="large"\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n<Field.Number\n  label="Stretch"\n  value={123}\n  width="stretch"\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n<h4 className="dnb-lead">With step controls</h4>\n<Field.Number\n  showStepControls\n  label="Default width (property omitted)"\n  value={123}\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n<Field.Number\n  showStepControls\n  label="Small"\n  value={123}\n  width="small"\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n<Field.Number\n  showStepControls\n  label="Medium"\n  value={123}\n  width="medium"\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n<Field.Number\n  showStepControls\n  label="Large"\n  value={123}\n  width="large"\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n<Field.Number\n  showStepControls\n  label="Stretch"\n  value={123}\n  width="stretch"\n  onChange={(value) => console.log(\'onChange\', value)}\n/>\n\n'}),b=()=>(0,o.jsx)(t.Z,{children:"<Field.Number\n  value={135}\n  label=\"Label text\"\n  onChange={(value) => console.log('onChange', value)}\n  disabled\n/>\n"}),p=()=>(0,o.jsx)(t.Z,{children:'<Field.Number\n  value={135}\n  label="Label text"\n  onChange={(value) => console.log(\'onChange\', value)}\n  info="Useful information (?)"\n/>\n'}),v=()=>(0,o.jsx)(t.Z,{scope:{FormError:s.Xq},children:'<Field.Number\n  value={135}\n  label="Label text"\n  onChange={(value) => console.log(\'onChange\', value)}\n  warning={new FormError("I\'m warning you...")}\n/>\n'}),j=()=>(0,o.jsx)(t.Z,{scope:{FormError:s.Xq},children:"<Field.Number\n  value={135}\n  label=\"Label text\"\n  onChange={(value) => console.log('onChange', value)}\n  error={new FormError('This is what is wrong...')}\n/>\n"}),C=()=>(0,o.jsx)(t.Z,{children:"<Field.Number\n  value={123}\n  label=\"Remove and blur field\"\n  onChange={(value) => console.log('onChange', value)}\n  required\n/>\n"}),f=()=>(0,o.jsx)(t.Z,{children:"<Field.Number\n  value={300}\n  label=\"Enter a number below 250 and blur to trigger error\"\n  onChange={(value) => console.log('onChange', value)}\n  minimum={250}\n/>\n"}),F=()=>(0,o.jsx)(t.Z,{children:"<Field.Number\n  value={80}\n  label=\"Percentage\"\n  onChange={(value) => console.log('onChange', value)}\n  minimum={90}\n/>\n"}),E=()=>(0,o.jsx)(t.Z,{children:'<Field.Number\n  value={200}\n  label="Enter a number above 250 and blur to trigger error"\n  onChange={(value) => console.log(\'onChange\', value)}\n  maximum={250}\n  errorMessages={{\n    maximum: "You can\'t enter a number THAR large.. Max 250!",\n  }}\n/>\n'}),w=()=>(0,o.jsx)(t.Z,{"data-visual-test":"number-input-step-controls",children:"<Field.Number\n  showStepControls\n  minimum={0}\n  maximum={100}\n  step={10}\n  value={50}\n/>\n"}),N=()=>(0,o.jsx)(t.Z,{scope:{FormError:s.Xq},"data-visual-test":"number-input-step-controls-error",children:"<Field.Number\n  showStepControls\n  maximum={100}\n  value={150}\n  error={new FormError('You done messed up, A-a-ron!')}\n/>\n"}),S=()=>(0,o.jsx)(t.Z,{scope:{FormError:s.Xq},"data-visual-test":"number-input-step-controls-disabled",children:"<Field.Number showStepControls disabled />\n"}),y=()=>(0,o.jsx)(t.Z,{hideCode:!0,noInline:!0,children:'const Component = () => {\n  const [value, setValue] = React.useState(50000)\n  const settings = {\n    min: 0,\n    max: 100000,\n    step: 1000,\n  }\n  return (\n    <Grid.Container>\n      <Grid.Item\n        span={{\n          small: [1, 12],\n          medium: [1, 4],\n          large: [1, 3],\n        }}\n      >\n        <Field.Number\n          showStepControls\n          minimum={settings.min}\n          maximum={settings.max}\n          step={settings.step}\n          value={value}\n          onChange={(value) => setValue(value)}\n          width="stretch"\n          bottom="small"\n        />\n        <Slider\n          min={settings.min}\n          max={settings.max}\n          step={settings.step}\n          value={value}\n          onChange={({ value }) => setValue(parseFloat(String(value)))}\n          hideButtons\n          tooltip\n        />\n      </Grid.Item>\n    </Grid.Container>\n  )\n}\nrender(<Component />)\n'});function W(n){const e=Object.assign({h2:"h2",h3:"h3"},(0,r.ah)(),n.components),{VisibleWhenVisualTest:l}=e;return a||Z("Examples",!1),c||Z("Examples.Alignment",!0),b||Z("Examples.Disabled",!0),i||Z("Examples.Empty",!0),j||Z("Examples.Error",!0),g||Z("Examples.HorizontalLayout",!0),p||Z("Examples.Info",!0),h||Z("Examples.Label",!0),d||Z("Examples.LabelAndValue",!0),F||Z("Examples.Percentage",!0),u||Z("Examples.Placeholder",!0),E||Z("Examples.ValidateMaximumCustomError",!0),f||Z("Examples.ValidateMinimum",!0),C||Z("Examples.ValidateRequired",!0),v||Z("Examples.Warning",!0),x||Z("Examples.Widths",!0),m||Z("Examples.WithHelp",!0),y||Z("Examples.WithSlider",!0),w||Z("Examples.WithStepControls",!0),S||Z("Examples.WithStepControlsDisabled",!0),N||Z("Examples.WithStepControlsError",!0),l||Z("VisibleWhenVisualTest",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{children:"Demos"}),"\n",(0,o.jsx)(e.h3,{children:"Empty"}),"\n",(0,o.jsx)(i,{}),"\n",(0,o.jsx)(e.h3,{children:"Placeholder"}),"\n",(0,o.jsx)(u,{}),"\n",(0,o.jsx)(e.h3,{children:"Label"}),"\n",(0,o.jsx)(h,{}),"\n",(0,o.jsx)(e.h3,{children:"Label and value"}),"\n",(0,o.jsx)(d,{}),"\n",(0,o.jsx)(e.h3,{children:"Alignment"}),"\n",(0,o.jsx)(c,{}),"\n",(0,o.jsx)(e.h3,{children:"Horizontal layout"}),"\n",(0,o.jsx)(g,{}),"\n",(0,o.jsx)(e.h3,{children:"Widths"}),"\n",(0,o.jsx)(x,{}),"\n",(0,o.jsx)(e.h3,{children:"With help"}),"\n",(0,o.jsx)(m,{}),"\n",(0,o.jsx)(e.h3,{children:"With step controls"}),"\n",(0,o.jsx)(w,{}),"\n",(0,o.jsx)(e.h3,{children:"With step controls in conjunction with Slider"}),"\n",(0,o.jsx)(y,{}),"\n",(0,o.jsx)(e.h3,{children:"Disabled"}),"\n",(0,o.jsx)(b,{}),"\n",(0,o.jsx)(e.h3,{children:"Info"}),"\n",(0,o.jsx)(p,{}),"\n",(0,o.jsx)(e.h3,{children:"Warning"}),"\n",(0,o.jsx)(v,{}),"\n",(0,o.jsx)(e.h3,{children:"Error"}),"\n",(0,o.jsx)(j,{}),"\n",(0,o.jsx)(e.h3,{children:"Validation - Required"}),"\n",(0,o.jsx)(C,{}),"\n",(0,o.jsx)(e.h3,{children:"Validation - Minimum"}),"\n",(0,o.jsx)(f,{}),"\n",(0,o.jsx)(e.h3,{children:"Validation - Maximum and custom error message"}),"\n",(0,o.jsx)(E,{}),"\n",(0,o.jsx)(e.h3,{children:"Percentage"}),"\n",(0,o.jsx)(F,{}),"\n",(0,o.jsxs)(l,{children:[(0,o.jsx)(N,{}),(0,o.jsx)(S,{})]})]})}var V=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,o.jsx)(e,Object.assign({},n,{children:(0,o.jsx)(W,n)})):W(n)};function Z(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},51361:function(n,e,l){l.r(e);var a=l(52322),o=l(45392);function r(n){const e=Object.assign({h2:"h2",p:"p",code:"code",a:"a"},(0,o.ah)(),n.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{children:"Description"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"Field.Number"})," is the base component for receiving user input where the target data is of type ",(0,a.jsx)(e.code,{children:"number"}),"."]}),"\n",(0,a.jsxs)(e.p,{children:["There is a corresponding ",(0,a.jsx)(e.a,{href:"/uilib/extensions/forms/extended-features/Value/Number",children:"Value.Number"})," component."]}),"\n",(0,a.jsx)(e.h2,{children:"When to use and not to use"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"Field.Number"})," only allows the user to enter numbers (negative and positive) and decimal numbers."]}),"\n",(0,a.jsx)(e.p,{children:"If a number has the type of number, and can not start with a zero, this field may be considered."}),"\n",(0,a.jsxs)(e.p,{children:["But for e.g. a customer number, you rather use ",(0,a.jsx)(e.a,{href:"/uilib/extensions/forms/base-fields/String/",children:"Field.String"}),"."]}),"\n",(0,a.jsxs)(e.p,{children:["Internally, it is used by e.g. ",(0,a.jsx)(e.a,{href:"/uilib/extensions/forms/feature-fields/Currency/",children:"Field.Currency"}),"."]}),"\n",(0,a.jsx)(e.h2,{children:"Browser autofill"}),"\n",(0,a.jsxs)(e.p,{children:["Check out the ",(0,a.jsx)(e.a,{href:"/uilib/extensions/forms/base-fields/String/#autocomplete-and-autofill",children:"Field.String"})," docs about autocomplete."]})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,o.ah)(),n.components);return e?(0,a.jsx)(e,Object.assign({},n,{children:(0,a.jsx)(r,n)})):r(n)}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-base-fields-number-mdx-4893edc0377d15050436.js.map