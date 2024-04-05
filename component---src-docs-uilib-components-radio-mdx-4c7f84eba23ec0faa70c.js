"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[15199,37493,67258],{53054:function(e,n,o){o.r(n);var a=o(52322),i=o(45392),l=o(30732),s=o(13910);function t(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.default,{}),"\n",(0,a.jsx)(s.default,{})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(t,e)})):t()}},13910:function(e,n,o){o.r(n),o.d(n,{default:function(){return f}});var a=o(52322),i=o(45392),l=o(70894),s=(o(2784),o(99587));const t=()=>(0,a.jsx)(s.Z,{"data-visual-test":"radio-group",children:'<Radio.Group\n  label="Radio Group"\n  on_change={({ value }) => {\n    console.log(\'on_change\', value)\n  }}\n  value="first"\n>\n  <Radio label="First" value="first" />\n  <Radio label="Second" value="second" />\n  <Radio label="Third" value="third" />\n</Radio.Group>\n'}),d=()=>(0,a.jsx)(s.Z,{"data-visual-test":"radio-group-vertical",children:'<Radio.Group\n  label="Vertical Group"\n  layout_direction="column"\n  on_change={({ value }) => {\n    console.log(\'on_change\', value)\n  }}\n>\n  <Radio label="First" value="first" />\n  <Radio label="Second" value="second" />\n  <Radio label="Third" value="third" checked />\n</Radio.Group>\n'}),r=()=>(0,a.jsx)(s.Z,{"data-visual-test":"radio-group-label-above",children:'<Radio.Group\n  vertical\n  label="Vertical Group"\n  layout_direction="column"\n  on_change={({ value }) => {\n    console.log(\'on_change\', value)\n  }}\n>\n  <Radio label="First" value="first" />\n  <Radio label="Second" value="second" />\n  <Radio label="Third" value="third" checked />\n</Radio.Group>\n'}),c=()=>(0,a.jsx)(s.Z,{"data-visual-test":"radio-group-status",children:'<Radio.Group\n  label="Radio Group with status"\n  layout_direction="column"\n  on_change={({ value }) => {\n    console.log(\'on_change\', value)\n  }}\n>\n  <Radio label="First" value="first" status="error" />\n  <Radio label="Second" value="second" status="Error message" />\n  <Radio\n    label="Third"\n    value="third"\n    checked\n    status="Info message"\n    status_state="info"\n  />\n</Radio.Group>\n'}),u=()=>(0,a.jsx)(s.Z,{"data-visual-test":"radio-group-plain",children:'<FieldBlock label="Plain Radio group" layout="horizontal">\n  <Radio\n    value="first"\n    label="First"\n    group="MyRadioGroup"\n    on_change={({ value, checked }) => {\n      console.log(\'on_change\', value, checked)\n    }}\n    right\n  />\n  <Radio\n    value="second"\n    label="Second"\n    group="MyRadioGroup"\n    on_change={({ value, checked }) => {\n      console.log(\'on_change\', value, checked)\n    }}\n    right\n  />\n  <Radio\n    checked\n    value="third"\n    label="Third"\n    group="MyRadioGroup"\n    on_change={({ value, checked }) => {\n      console.log(\'on_change\', value, checked)\n    }}\n    right\n  />\n</FieldBlock>\n'}),h=()=>(0,a.jsx)(s.Z,{"data-visual-test":"radio-sizes",children:'\n<Radio size="medium" label="Medium" right="large" checked />\n<Radio size="large" label="Large" checked />\n\n'}),p=()=>(0,a.jsx)(s.Z,{"data-visual-test":"radio-group-disabled",children:'<Radio.Group\n  label="Disabled Group"\n  disabled\n  label_position="left"\n  name="MyGroup"\n>\n  <Radio label="First" value="first" />\n  <Radio label="Second" value="second" />\n  <Radio label="Third" value="third" checked />\n</Radio.Group>\n'}),g=()=>(0,a.jsx)(s.Z,{children:'<Radio.Group label="With suffixes" label_position="left">\n  <Radio label="First" value="first" />\n  <Radio\n    label="Second"\n    value="second"\n    suffix={<HelpButton title="Modal Title">Modal content</HelpButton>}\n  />\n  <Radio\n    label="Third"\n    value="third"\n    status="Error message"\n    suffix={<HelpButton title="Modal Title">Modal content</HelpButton>}\n    checked\n  />\n</Radio.Group>\n'});function j(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Z,{"data-visual-test":"radio-default",children:'<Radio label="Single Radio" />\n'}),(0,a.jsx)(s.Z,{"data-visual-test":"radio-checked",children:'<Radio\n  label="Checked Radio"\n  checked\n  on_change={({ checked }) => console.log(checked)}\n/>\n'})]})}const b=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Z,{"data-visual-test":"radio-error-unchecked",children:'<Radio label="Unchecked" status="error" />\n'}),(0,a.jsx)(s.Z,{"data-visual-test":"radio-error-checked",children:'<Radio label="Checked" status="error" checked />\n'})]}),x=()=>(0,a.jsx)(R,{children:(0,a.jsx)(s.Z,{"data-visual-test":"radio-bounding",children:'<Radio label="Radio button" checked />\n'})}),R=(0,l.Z)("div",{target:"egahwxk0"})({name:"1wu7pmz",styles:".dnb-radio__input{opacity:0.5;}"});function v(e){const n=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",strong:"strong"},(0,i.ah)(),e.components),{VisibleWhenVisualTest:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VisibleWhenVisualTest",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{children:"Demos"}),"\n",(0,a.jsx)(n.h3,{children:"Radio group"}),"\n",(0,a.jsx)(t,{}),"\n",(0,a.jsx)(n.h3,{children:"Vertical aligned Radio group"}),"\n",(0,a.jsx)(d,{}),"\n",(0,a.jsx)(n.h3,{children:"Radio group with label above"}),"\n",(0,a.jsx)(r,{}),"\n",(0,a.jsx)(n.h3,{children:"Radio group with status messages"}),"\n",(0,a.jsx)(c,{}),"\n",(0,a.jsx)(n.h3,{children:"Plain Radio group"}),"\n",(0,a.jsxs)(n.p,{children:["Without ",(0,a.jsx)(n.code,{children:"<Radio.Group>"}),". It is recommended to use the ",(0,a.jsx)(n.code,{children:"<Radio.Group>"})," if you are using ",(0,a.jsx)(n.strong,{children:"React"}),"."]}),"\n",(0,a.jsx)(u,{}),"\n",(0,a.jsx)(n.h3,{children:"With different sizes"}),"\n",(0,a.jsxs)(n.p,{children:["As for now, there are two sizes. ",(0,a.jsx)(n.code,{children:"medium"})," is the default size."]}),"\n",(0,a.jsx)(h,{}),"\n",(0,a.jsx)(n.h3,{children:"Disabled Radio Group"}),"\n",(0,a.jsxs)(n.p,{children:["With ",(0,a.jsx)(n.code,{children:"label_position"})," set to left."]}),"\n",(0,a.jsx)(p,{}),"\n",(0,a.jsx)(n.h3,{children:"Radio Buttons with a suffix"}),"\n",(0,a.jsx)(g,{}),"\n",(0,a.jsxs)(o,{children:[(0,a.jsx)(b,{}),(0,a.jsx)(j,{}),(0,a.jsx)(x,{})]})]})}var f=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(v,e)})):v(e)}},30732:function(e,n,o){o.r(n);var a=o(52322),i=o(45392);function l(e){const n=Object.assign({h2:"h2",p:"p",code:"code"},(0,i.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"The Radio component is shown as a circle that is filled (checked) when activated.\nRadio buttons are used to let a user select one option / value of a limited number of choices within a group of Radio buttons."}),"\n",(0,a.jsxs)(n.p,{children:["It is recommended to use it in a group. You can use either the React component ",(0,a.jsx)(n.code,{children:"<Radio.Group>"})," or use the property ",(0,a.jsx)(n.code,{children:'group="NAME"'})," to define the group."]})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(l,e)})):l(e)}}}]);
//# sourceMappingURL=component---src-docs-uilib-components-radio-mdx-4c7f84eba23ec0faa70c.js.map