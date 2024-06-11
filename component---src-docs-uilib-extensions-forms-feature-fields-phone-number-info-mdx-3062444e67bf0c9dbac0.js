"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[93393],{27162:function(e,n,i){i.r(n);var r=i(52322),t=i(45392);function s(e){const n=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre",h3:"h3",ul:"ul",li:"li"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Field.PhoneNumber"})," is a wrapper component for the ",(0,r.jsx)(n.a,{href:"/uilib/extensions/forms/base-fields/String",children:"input of strings"}),", with user experience tailored for phone number values."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"import { Field } from '@dnb/eufemia/extensions/forms'\nrender(<Field.PhoneNumber />)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["There is a corresponding ",(0,r.jsx)(n.a,{href:"/uilib/extensions/forms/Value/PhoneNumber",children:"Value.PhoneNumber"})," component."]}),"\n",(0,r.jsx)(n.h2,{children:"Value"}),"\n",(0,r.jsx)(n.p,{children:'This component behaves as "one single component". It combines the country code and the number to a single string during an event callback.'}),"\n",(0,r.jsxs)(n.p,{children:["Also, the ",(0,r.jsx)(n.code,{children:"value"})," property should be a string with the country code, separated from the main number by a space."]}),"\n",(0,r.jsxs)(n.p,{children:["The component returns the ",(0,r.jsx)(n.code,{children:"emptyValue"})," when no number is set, which defaults to ",(0,r.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["It uses the HTML ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete",children:"autocomplete"})," attribute (",(0,r.jsx)(n.code,{children:"tel-country-code"})," and ",(0,r.jsx)(n.code,{children:"tel-national"}),") in their respective fields(country code and phone number) to provide automated assistance in filling out form field values, as well as guidance to the browser as to the type of information expected in the field.."]}),"\n",(0,r.jsx)(n.h3,{children:"Default country code"}),"\n",(0,r.jsxs)(n.p,{children:["The default country code is set to ",(0,r.jsx)(n.code,{children:"+47"}),"."]}),"\n",(0,r.jsx)(n.h2,{children:"Structure and format of phone numbers"}),"\n",(0,r.jsx)(n.p,{children:"Creating a list of all possible phone numbers would be impractical due to the vast number of combinations, especially considering the various country codes, area codes, and local numbers. Additionally, new numbers are constantly being allocated, and existing numbers may be reassigned over time."}),"\n",(0,r.jsxs)(n.p,{children:["Therefore, the structure and format is only used when ",(0,r.jsx)(n.code,{children:"+47"})," is selected."]}),"\n",(0,r.jsx)(n.h2,{children:"Filter or prioritize country listing"}),"\n",(0,r.jsxs)(n.p,{children:["You can filter countries with the ",(0,r.jsx)(n.code,{children:"countries"})," property's values ",(0,r.jsx)(n.code,{children:"Scandinavia"}),", ",(0,r.jsx)(n.code,{children:"Nordic"})," or ",(0,r.jsx)(n.code,{children:"Europe"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Countries are sorted in alphabetically order with some prioritized countries on top of the list:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Norway"}),"\n",(0,r.jsx)(n.li,{children:"Sweden"}),"\n",(0,r.jsx)(n.li,{children:"Denmark"}),"\n",(0,r.jsx)(n.li,{children:"Finland"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"Validation"}),"\n",(0,r.jsxs)(n.p,{children:["By default it has no validation. But you can enable it by giving a ",(0,r.jsx)(n.code,{children:"required"}),", ",(0,r.jsx)(n.code,{children:"pattern"}),", ",(0,r.jsx)(n.code,{children:"schema"})," or ",(0,r.jsx)(n.code,{children:"validator"})," property with the needed validation. More about validation in the ",(0,r.jsx)(n.a,{href:"/uilib/extensions/forms/getting-started/#validation",children:"Getting Started"})," section."]}),"\n",(0,r.jsx)(n.h3,{children:"Norwegian mobile numbers"}),"\n",(0,r.jsx)(n.p,{children:'E.g. the following pattern will strictly match Norwegian mobile numbers, which are defined as having a "+47" country code, followed by a number starting with 4 or 9, and exactly 7 more digits. If the country code is set to any other two-digit code, the pattern will match witch 6 digits after the country code.'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'<Field.PhoneNumber pattern="((?=\\+47)^\\+47 [49]\\d{7}$)|((?!\\+47)^\\+\\d{2} \\d{6})" />\n'})})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(s,e)})):s(e)}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-feature-fields-phone-number-info-mdx-3062444e67bf0c9dbac0.js.map