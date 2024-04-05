"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[80951,32545,11036],{3137:function(n,e,o){o.r(e);var a=o(52322),l=o(45392),t=o(83350),s=o(62002);function i(n){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.default,{}),"\n",(0,a.jsx)(s.default,{})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,l.ah)(),n.components);return e?(0,a.jsx)(e,Object.assign({},n,{children:(0,a.jsx)(i,n)})):i()}},62002:function(n,e,o){o.r(e),o.d(e,{default:function(){return j}});var a={};o.r(a),o.d(a,{Disabled:function(){return u},Empty:function(){return i},Label:function(){return d},LabelAndValue:function(){return c},LongLabel:function(){return C},Placeholder:function(){return r},ValidationRequired:function(){return g},WithError:function(){return p},WithHelp:function(){return h}});var l=o(52322),t=o(45392),s=o(99587);const i=()=>(0,l.jsx)(s.Z,{children:"<Field.PostalCodeAndCity\n  postalCode={{\n    onChange: (value) => console.log('postalCode onChange', value),\n  }}\n  city={{\n    onChange: (value) => console.log('city onChange', value),\n  }}\n/>\n"}),r=()=>(0,l.jsx)(s.Z,{children:"<Field.PostalCodeAndCity\n  postalCode={{\n    placeholder: '????',\n    onChange: (value) => console.log('postalCode onChange', value),\n  }}\n  city={{\n    placeholder: 'Your city..',\n    onChange: (value) => console.log('city onChange', value),\n  }}\n/>\n"}),d=()=>(0,l.jsx)(s.Z,{children:"<Field.PostalCodeAndCity\n  postalCode={{\n    label: 'PNR',\n    onChange: (value) => console.log('postalCode onChange', value),\n  }}\n  city={{\n    label: 'CTY',\n    onChange: (value) => console.log('city onChange', value),\n  }}\n/>\n"}),c=()=>(0,l.jsx)(s.Z,{"data-visual-test":"postal-code-and-city-label",children:"<Field.PostalCodeAndCity\n  postalCode={{\n    label: 'Pnr.',\n    value: '0788',\n    onChange: (value) => console.log('postalCode onChange', value),\n  }}\n  city={{\n    value: 'Oslo',\n    onChange: (value) => console.log('city onChange', value),\n  }}\n/>\n"}),h=()=>(0,l.jsx)(s.Z,{children:"<Field.PostalCodeAndCity\n  postalCode={{\n    onChange: (value) => console.log('postalCode onChange', value),\n  }}\n  city={{\n    onChange: (value) => console.log('city onChange', value),\n  }}\n  help={{\n    title: 'Help is available',\n    content:\n      'Helping others, encouraging others, are often acts of being kind that have more meaning that you may realize.',\n  }}\n/>\n"}),u=()=>(0,l.jsx)(s.Z,{children:"<Field.PostalCodeAndCity\n  postalCode={{\n    value: '1234',\n    disabled: true,\n    onChange: (value) => console.log('postalCode onChange', value),\n  }}\n  city={{\n    value: 'Oslo',\n    disabled: true,\n    onChange: (value) => console.log('city onChange', value),\n  }}\n/>\n"}),p=()=>(0,l.jsx)(s.Z,{"data-visual-test":"postal-code-and-city-error",children:"<Field.PostalCodeAndCity\n  postalCode={{}}\n  city={{}}\n  error={new Error('This is what is wrong...')}\n/>\n"}),g=()=>(0,l.jsx)(s.Z,{children:"<Field.PostalCodeAndCity\n  postalCode={{\n    required: true,\n  }}\n  city={{\n    required: true,\n  }}\n/>\n"}),C=()=>(0,l.jsx)(s.Z,{"data-visual-test":"postal-code-and-city-long-label",children:"<Field.PostalCodeAndCity\n  postalCode={{\n    label: 'With a very long label',\n  }}\n  city={{\n    label: 'With a very long label',\n  }}\n/>\n"});function x(n){const e=Object.assign({h2:"h2",h3:"h3"},(0,t.ah)(),n.components),{VisibleWhenVisualTest:o}=e;return a||v("Examples",!1),u||v("Examples.Disabled",!0),i||v("Examples.Empty",!0),d||v("Examples.Label",!0),c||v("Examples.LabelAndValue",!0),C||v("Examples.LongLabel",!0),r||v("Examples.Placeholder",!0),g||v("Examples.ValidationRequired",!0),p||v("Examples.WithError",!0),h||v("Examples.WithHelp",!0),o||v("VisibleWhenVisualTest",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{children:"Demos"}),"\n",(0,l.jsx)(e.h3,{children:"Empty"}),"\n",(0,l.jsx)(i,{}),"\n",(0,l.jsx)(e.h3,{children:"Placeholder"}),"\n",(0,l.jsx)(r,{}),"\n",(0,l.jsx)(e.h3,{children:"Label"}),"\n",(0,l.jsx)(d,{}),"\n",(0,l.jsx)(e.h3,{children:"Label and value"}),"\n",(0,l.jsx)(c,{}),"\n",(0,l.jsx)(e.h3,{children:"Disabled"}),"\n",(0,l.jsx)(u,{}),"\n",(0,l.jsx)(e.h3,{children:"With help"}),"\n",(0,l.jsx)(h,{}),"\n",(0,l.jsx)(e.h3,{children:"Error"}),"\n",(0,l.jsx)(p,{}),"\n",(0,l.jsx)(e.h3,{children:"Validation - Required"}),"\n",(0,l.jsx)(g,{}),"\n",(0,l.jsx)(o,{children:(0,l.jsx)(C,{})})]})}var j=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,l.jsx)(e,Object.assign({},n,{children:(0,l.jsx)(x,n)})):x(n)};function v(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},83350:function(n,e,o){o.r(e);var a=o(52322),l=o(45392);function t(n){const e=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,l.ah)(),n.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{children:"Description"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"Field.PostalCodeAndCity"})," is a wrapper component for input of two separate ",(0,a.jsx)(e.a,{href:"/uilib/extensions/forms/base-fields/String",children:"input of strings"})," with user experience tailored for postcode and city values."]}),"\n",(0,a.jsxs)(e.p,{children:["These fields is meant for Norwegian postcodes and cities. The postcode input takes a 4-digit string as values, since its meant for norwegian postcodes. A norwegian postcode can have a leading zero, which is why the value is a string and not a number.\nMore info about postcodes can be found at ",(0,a.jsx)(e.a,{href:"https://www.bring.no/tjenester/adressetjenester/postnummer",children:"Posten"}),"."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",children:"import { Field } from '@dnb/eufemia/extensions/forms'\nrender(<Field.PostalCodeAndCity />)\n"})})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,l.ah)(),n.components);return e?(0,a.jsx)(e,Object.assign({},n,{children:(0,a.jsx)(t,n)})):t(n)}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-feature-fields-postal-code-and-city-mdx-621f92b4ac52dd919bd3.js.map