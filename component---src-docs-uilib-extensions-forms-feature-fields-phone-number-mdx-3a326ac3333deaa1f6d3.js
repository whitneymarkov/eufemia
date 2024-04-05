"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[28096,53708,93393],{96989:function(e,n,r){r.r(n);var o=r(52322),i=r(45392),l=r(27162),t=r(66230);function s(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.default,{}),"\n",(0,o.jsx)(t.default,{})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(s,e)})):s()}},66230:function(e,n,r){r.r(n),r.d(n,{default:function(){return f}});var o={};r.r(o),r.d(o,{Disabled:function(){return u},Empty:function(){return s},Label:function(){return c},LabelAndValue:function(){return d},LongLabel:function(){return m},Placeholder:function(){return a},ValidationPattern:function(){return b},ValidationRequired:function(){return g},WithError:function(){return x},WithFilter:function(){return p},WithHelp:function(){return h}});var i=r(52322),l=r(45392),t=r(99587);const s=()=>(0,i.jsx)(t.Z,{children:"<Field.PhoneNumber\n  onFocus={(value) => console.log('onFocus', value)}\n  onBlur={(value) => console.log('onBlur', value)}\n  onChange={(...args) => console.log('onChange', ...args)}\n  onCountryCodeChange={(countryCode) =>\n    console.log('onCountryCodeChange', countryCode)\n  }\n  onNumberChange={(phoneNumber) =>\n    console.log('onNumberChange', phoneNumber)\n  }\n/>\n"}),a=()=>(0,i.jsx)(t.Z,{children:"<Field.PhoneNumber\n  placeholder=\"Call this number\"\n  onChange={(...args) => console.log('onChange', ...args)}\n/>\n"}),c=()=>(0,i.jsx)(t.Z,{children:"<Field.PhoneNumber\n  label=\"Label text\"\n  onChange={(...args) => console.log('onChange', ...args)}\n/>\n"}),d=()=>(0,i.jsx)(t.Z,{"data-visual-test":"phone-number-label",children:'<Field.PhoneNumber\n  label="Label text"\n  value="+47 98765432"\n  onChange={(...args) => console.log(\'onChange\', ...args)}\n/>\n'}),h=()=>(0,i.jsx)(t.Z,{children:"<Field.PhoneNumber\n  onChange={(...args) => console.log('onChange', ...args)}\n  help={{\n    title: 'Help is available',\n    content:\n      'Helping others, encouraging others, are often acts of being kind that have more meaning that you may realize.',\n  }}\n/>\n"}),u=()=>(0,i.jsx)(t.Z,{children:'<Field.PhoneNumber\n  value="+47 12345678"\n  label="Label text"\n  onChange={(...args) => console.log(\'onChange\', ...args)}\n  disabled\n/>\n'}),x=()=>(0,i.jsx)(t.Z,{"data-visual-test":"phone-number-error",children:"<Field.PhoneNumber\n  value=\"007\"\n  label=\"Label text\"\n  onChange={(...args) => console.log('onChange', ...args)}\n  error={new Error('This is what is wrong...')}\n/>\n"}),g=()=>(0,i.jsx)(t.Z,{children:'<Field.PhoneNumber\n  value="+47 888"\n  label="Label text"\n  onChange={(...args) => console.log(\'onChange\', ...args)}\n  required\n/>\n'}),b=()=>(0,i.jsx)(t.Z,{children:'<Field.PhoneNumber\n  value="+41 123"\n  label="Label text"\n  onChange={(...args) => console.log(\'onChange\', ...args)}\n  pattern="^\\+41 [1]\\d{2}$"\n/>\n'}),p=()=>(0,i.jsx)(t.Z,{children:'<Field.PhoneNumber\n  label="Label text"\n  onChange={(...args) => console.log(\'onChange\', ...args)}\n  countries="Scandinavia"\n/>\n'}),m=()=>(0,i.jsx)(t.Z,{"data-visual-test":"phone-number-long-label",children:'<Field.PhoneNumber label="Telefon/mobilnummer with long label" />\n'});function j(e){const n=Object.assign({h2:"h2",h3:"h3"},(0,l.ah)(),e.components),{VisibleWhenVisualTest:r}=n;return o||v("Examples",!1),u||v("Examples.Disabled",!0),s||v("Examples.Empty",!0),c||v("Examples.Label",!0),d||v("Examples.LabelAndValue",!0),m||v("Examples.LongLabel",!0),a||v("Examples.Placeholder",!0),b||v("Examples.ValidationPattern",!0),g||v("Examples.ValidationRequired",!0),x||v("Examples.WithError",!0),p||v("Examples.WithFilter",!0),h||v("Examples.WithHelp",!0),r||v("VisibleWhenVisualTest",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{children:"Demos"}),"\n",(0,i.jsx)(n.h3,{children:"Empty"}),"\n",(0,i.jsx)(s,{}),"\n",(0,i.jsx)(n.h3,{children:"Placeholder"}),"\n",(0,i.jsx)(a,{}),"\n",(0,i.jsx)(n.h3,{children:"Label"}),"\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(n.h3,{children:"Label and value"}),"\n",(0,i.jsx)(d,{}),"\n",(0,i.jsx)(n.h3,{children:"Show only Scandinavian countries"}),"\n",(0,i.jsx)(p,{}),"\n",(0,i.jsx)(n.h3,{children:"With help"}),"\n",(0,i.jsx)(h,{}),"\n",(0,i.jsx)(n.h3,{children:"Disabled"}),"\n",(0,i.jsx)(u,{}),"\n",(0,i.jsx)(n.h3,{children:"Error"}),"\n",(0,i.jsx)(x,{}),"\n",(0,i.jsx)(n.h3,{children:"Validation - Required"}),"\n",(0,i.jsx)(g,{}),"\n",(0,i.jsx)(n.h3,{children:"Validation - Pattern"}),"\n",(0,i.jsx)(b,{}),"\n",(0,i.jsx)(r,{children:(0,i.jsx)(m,{})})]})}var f=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(j,e)})):j(e)};function v(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},27162:function(e,n,r){r.r(n);var o=r(52322),i=r(45392);function l(e){const n=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre",h3:"h3",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Field.PhoneNumber"})," is a wrapper component for the ",(0,o.jsx)(n.a,{href:"/uilib/extensions/forms/base-fields/String",children:"input of strings"}),", with user experience tailored for phone number values."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"import { Field } from '@dnb/eufemia/extensions/forms'\nrender(<Field.PhoneNumber />)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["There is a corresponding ",(0,o.jsx)(n.a,{href:"/uilib/extensions/forms/extended-features/Value/PhoneNumber",children:"Value.PhoneNumber"})," component."]}),"\n",(0,o.jsx)(n.h2,{children:"Value"}),"\n",(0,o.jsx)(n.p,{children:'This component behaves as "one single component". Therefor it combines the country code and the number to a single string during an event callback.'}),"\n",(0,o.jsxs)(n.p,{children:["Also, the ",(0,o.jsx)(n.code,{children:"value"})," property should be a string with the country code, separated from the main number by a space."]}),"\n",(0,o.jsxs)(n.p,{children:["The component returns the ",(0,o.jsx)(n.code,{children:"emptyValue"})," when no number is set, which defaults to ",(0,o.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["It uses the HTML ",(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete",children:"autocomplete"})," attribute (",(0,o.jsx)(n.code,{children:"tel-country-code"})," and ",(0,o.jsx)(n.code,{children:"tel-national"}),") in their respective fields(country code and phone number) to provide automated assistance in filling out form field values, as well as guidance to the browser as to the type of information expected in the field.."]}),"\n",(0,o.jsx)(n.h3,{children:"Default country code"}),"\n",(0,o.jsxs)(n.p,{children:["The default country code is set to ",(0,o.jsx)(n.code,{children:"+47"}),"."]}),"\n",(0,o.jsx)(n.h2,{children:"Structure and format of phone numbers"}),"\n",(0,o.jsx)(n.p,{children:"Creating a list of all possible phone numbers would be impractical due to the vast number of combinations, especially considering the various country codes, area codes, and local numbers. Additionally, new numbers are constantly being allocated, and existing numbers may be reassigned over time."}),"\n",(0,o.jsxs)(n.p,{children:["Therefore, the structure and format is only used when ",(0,o.jsx)(n.code,{children:"+47"})," is selected."]}),"\n",(0,o.jsx)(n.h2,{children:"Filter or prioritize country listing"}),"\n",(0,o.jsxs)(n.p,{children:["You can filter countries with the ",(0,o.jsx)(n.code,{children:"countries"})," property's values ",(0,o.jsx)(n.code,{children:"Scandinavia"}),", ",(0,o.jsx)(n.code,{children:"Nordic"})," or ",(0,o.jsx)(n.code,{children:"Europe"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Countries are sorted in alphabetically order with some prioritized countries on top of the list:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Norway"}),"\n",(0,o.jsx)(n.li,{children:"Sweden"}),"\n",(0,o.jsx)(n.li,{children:"Denmark"}),"\n",(0,o.jsx)(n.li,{children:"Finland"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{children:"Validation"}),"\n",(0,o.jsxs)(n.p,{children:["By default it has no validation. But you can enable it by giving a ",(0,o.jsx)(n.code,{children:"required"}),", ",(0,o.jsx)(n.code,{children:"pattern"}),", ",(0,o.jsx)(n.code,{children:"schema"})," or ",(0,o.jsx)(n.code,{children:"validator"})," property with the needed validation. More about validation in the ",(0,o.jsx)(n.a,{href:"/uilib/extensions/forms/getting-started/#validation",children:"Getting Started"})," section."]}),"\n",(0,o.jsx)(n.h3,{children:"Norwegian mobile numbers"}),"\n",(0,o.jsx)(n.p,{children:'E.g. the following pattern will strictly match Norwegian mobile numbers, which are defined as having a "+47" country code, followed by a number starting with 4 or 9, and exactly 7 more digits. If the country code is set to any other two-digit code, the pattern will match witch 6 digits after the country code.'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:'<Field.PhoneNumber pattern="((?=\\+47)^\\+47 [49]\\d{7}$)|((?!\\+47)^\\+\\d{2} \\d{6})" />\n'})})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(l,e)})):l(e)}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-feature-fields-phone-number-mdx-3a326ac3333deaa1f6d3.js.map