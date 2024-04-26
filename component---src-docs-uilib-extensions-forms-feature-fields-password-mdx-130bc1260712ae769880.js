"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[50843,17551,7439],{67413:function(e,n,o){o.r(n);var s=o(52322),a=o(45392),r=o(22183),l=o(15641);function t(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.default,{}),"\n",(0,s.jsx)(l.default,{})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(t,e)})):t()}},15641:function(e,n,o){o.r(n),o.d(n,{default:function(){return x}});var s={};o.r(s),o.d(s,{Disabled:function(){return h},Label:function(){return i},LabelAndValue:function(){return d},Pattern:function(){return v},Placeholder:function(){return t},ValidationRequired:function(){return w},WithError:function(){return u},WithHelp:function(){return c}});var a=o(52322),r=o(45392),l=o(28204);const t=()=>(0,a.jsx)(l.Z,{children:"<Field.Password\n  placeholder=\"Please enter your password\"\n  onChange={(value) => console.log('onChange', value)}\n  onHidePassword={(event) => console.log('onHidePassword', event)}\n  onShowPassword={(event) => console.log('onShowPassword', event)}\n/>\n"}),i=()=>(0,a.jsx)(l.Z,{children:"<Field.Password\n  label=\"Label text\"\n  onChange={(value) => console.log('onChange', value)}\n  onHidePassword={(event) => console.log('onHidePassword', event)}\n  onShowPassword={(event) => console.log('onShowPassword', event)}\n/>\n"}),d=()=>(0,a.jsx)(l.Z,{children:"<Field.Password\n  label=\"Label text\"\n  value=\"password123\"\n  onChange={(value) => console.log('onChange', value)}\n  onHidePassword={(event) => console.log('onHidePassword', event)}\n  onShowPassword={(event) => console.log('onShowPassword', event)}\n/>\n"}),c=()=>(0,a.jsx)(l.Z,{children:"<Field.Password\n  onChange={(value) => console.log('onChange', value)}\n  onHidePassword={(event) => console.log('onHidePassword', event)}\n  onShowPassword={(event) => console.log('onShowPassword', event)}\n  help={{\n    title: 'Help is available',\n    content:\n      'Helping others, encouraging others, are often acts of being kind that have more meaning that you may realize.',\n  }}\n/>\n"}),h=()=>(0,a.jsx)(l.Z,{children:"<Field.Password\n  value=\"password123\"\n  label=\"Label text\"\n  onChange={(value) => console.log('onChange', value)}\n  onHidePassword={(event) => console.log('onHidePassword', event)}\n  onShowPassword={(event) => console.log('onShowPassword', event)}\n  disabled\n/>\n"}),u=()=>(0,a.jsx)(l.Z,{children:"<Field.Password\n  value=\"your-birthday\"\n  label=\"Label text\"\n  onChange={(value) => console.log('onChange', value)}\n  onHidePassword={(event) => console.log('onHidePassword', event)}\n  onShowPassword={(event) => console.log('onShowPassword', event)}\n  error={new Error('This is what is wrong...')}\n/>\n"}),w=()=>(0,a.jsx)(l.Z,{children:"<Field.Password\n  value=\"pass\"\n  onChange={(value) => console.log('onChange', value)}\n  onHidePassword={(event) => console.log('onHidePassword', event)}\n  onShowPassword={(event) => console.log('onShowPassword', event)}\n  required\n/>\n"}),v=()=>(0,a.jsx)(l.Z,{children:"<Field.Password\n  value=\"password123\"\n  pattern=\"\\w{8}[0-9]{2}\"\n  onChange={(value) => console.log('onChange', value)}\n  onHidePassword={(event) => console.log('onHidePassword', event)}\n  onShowPassword={(event) => console.log('onShowPassword', event)}\n  required\n/>\n"});function g(e){const n=Object.assign({h2:"h2",h3:"h3"},(0,r.ah)(),e.components);return s||p("Examples",!1),h||p("Examples.Disabled",!0),i||p("Examples.Label",!0),d||p("Examples.LabelAndValue",!0),v||p("Examples.Pattern",!0),t||p("Examples.Placeholder",!0),w||p("Examples.ValidationRequired",!0),u||p("Examples.WithError",!0),c||p("Examples.WithHelp",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{children:"Demos"}),"\n",(0,a.jsx)(n.h3,{children:"Placeholder"}),"\n",(0,a.jsx)(t,{}),"\n",(0,a.jsx)(n.h3,{children:"Label"}),"\n",(0,a.jsx)(i,{}),"\n",(0,a.jsx)(n.h3,{children:"Label and value"}),"\n",(0,a.jsx)(d,{}),"\n",(0,a.jsx)(n.h3,{children:"With help"}),"\n",(0,a.jsx)(c,{}),"\n",(0,a.jsx)(n.h3,{children:"Disabled"}),"\n",(0,a.jsx)(h,{}),"\n",(0,a.jsx)(n.h3,{children:"Error"}),"\n",(0,a.jsx)(u,{}),"\n",(0,a.jsx)(n.h3,{children:"Validation - Required"}),"\n",(0,a.jsx)(w,{}),"\n",(0,a.jsx)(n.h3,{children:"Validation - Pattern"}),"\n",(0,a.jsx)(v,{})]})}var x=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(g,e)})):g(e)};function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},22183:function(e,n,o){o.r(n);var s=o(52322),a=o(45392);function r(e){const n=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Field.Password"})," is a wrapper component for the ",(0,s.jsx)(n.a,{href:"/uilib/extensions/forms/base-fields/String",children:"input of strings"}),", with user experience tailored for passwords. The input also comes with a button to toggle the password visibility."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import { Field } from '@dnb/eufemia/extensions/forms'\nrender(<Field.Password />)\n"})}),"\n",(0,s.jsx)(n.h2,{children:"Validation"}),"\n",(0,s.jsxs)(n.p,{children:["By default it has no validation. But you can enable it by giving a ",(0,s.jsx)(n.code,{children:"required"}),", ",(0,s.jsx)(n.code,{children:"pattern"}),", ",(0,s.jsx)(n.code,{children:"schema"})," or ",(0,s.jsx)(n.code,{children:"validator"})," property with the needed validation. More about validation in the ",(0,s.jsx)(n.a,{href:"/uilib/extensions/forms/getting-started/#validation",children:"Getting Started"})," section."]})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(r,e)})):r(e)}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-feature-fields-password-mdx-130bc1260712ae769880.js.map