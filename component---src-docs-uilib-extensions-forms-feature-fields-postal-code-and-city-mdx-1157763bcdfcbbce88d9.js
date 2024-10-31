"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[80951,32545,11036],{3137:function(n,e,o){o.r(e);var t=o(52322),a=o(45392),l=o(83350),s=o(62002);function r(n){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.default,{}),"\n",(0,t.jsx)(s.default,{})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,a.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(r,n)})):r()}},62002:function(n,e,o){o.r(e),o.d(e,{default:function(){return m}});var t={};o.r(t),o.d(t,{Disabled:function(){return u},Empty:function(){return r},IterateArray:function(){return x},Label:function(){return d},LabelAndValue:function(){return c},LongLabel:function(){return C},NonNorwegianPostalCode:function(){return j},Placeholder:function(){return i},SettingCountryBasedOnPath:function(){return g},ValidationRequired:function(){return y},WithError:function(){return p},WithHelp:function(){return h}});var a=o(52322),l=o(45392),s=o(46832);const r=()=>(0,a.jsx)(s.Z,{children:"<Field.PostalCodeAndCity\n  postalCode={{\n    onChange: (value) => console.log('postalCode onChange', value),\n  }}\n  city={{\n    onChange: (value) => console.log('city onChange', value),\n  }}\n/>\n"}),i=()=>(0,a.jsx)(s.Z,{children:"<Field.PostalCodeAndCity\n  postalCode={{\n    placeholder: '????',\n    onChange: (value) => console.log('postalCode onChange', value),\n  }}\n  city={{\n    placeholder: 'Your city',\n    onChange: (value) => console.log('city onChange', value),\n  }}\n/>\n"}),d=()=>(0,a.jsx)(s.Z,{children:"<Field.PostalCodeAndCity\n  postalCode={{\n    label: 'PNR',\n    onChange: (value) => console.log('postalCode onChange', value),\n  }}\n  city={{\n    label: 'CTY',\n    onChange: (value) => console.log('city onChange', value),\n  }}\n/>\n"}),c=()=>(0,a.jsx)(s.Z,{"data-visual-test":"postal-code-and-city-label",children:"<Field.PostalCodeAndCity\n  postalCode={{\n    label: 'Pnr.',\n    value: '0788',\n    onChange: (value) => console.log('postalCode onChange', value),\n  }}\n  city={{\n    value: 'Oslo',\n    onChange: (value) => console.log('city onChange', value),\n  }}\n/>\n"}),h=()=>(0,a.jsx)(s.Z,{children:"<Field.PostalCodeAndCity\n  postalCode={{\n    onChange: (value) => console.log('postalCode onChange', value),\n  }}\n  city={{\n    onChange: (value) => console.log('city onChange', value),\n  }}\n  help={{\n    title: 'Help is available',\n    content:\n      'Helping others, encouraging others, are often acts of being kind that have more meaning that you may realize.',\n  }}\n/>\n"}),u=()=>(0,a.jsx)(s.Z,{children:"<Field.PostalCodeAndCity\n  postalCode={{\n    value: '1234',\n    disabled: true,\n    onChange: (value) => console.log('postalCode onChange', value),\n  }}\n  city={{\n    value: 'Oslo',\n    disabled: true,\n    onChange: (value) => console.log('city onChange', value),\n  }}\n/>\n"}),p=()=>(0,a.jsx)(s.Z,{"data-visual-test":"postal-code-and-city-error",children:"<Field.PostalCodeAndCity\n  postalCode={{}}\n  city={{}}\n  error={new Error('This is what is wrong...')}\n/>\n"}),y=()=>(0,a.jsx)(s.Z,{children:"<Field.PostalCodeAndCity\n  postalCode={{\n    required: true,\n  }}\n  city={{\n    required: true,\n  }}\n/>\n"}),C=()=>(0,a.jsx)(s.Z,{"data-visual-test":"postal-code-and-city-long-label",children:"<Field.PostalCodeAndCity\n  postalCode={{\n    label: 'With a very long label',\n  }}\n  city={{\n    label: 'With a very long label',\n  }}\n/>\n"}),x=()=>(0,a.jsx)(s.Z,{children:"<Iterate.Array\n  value={[\n    {\n      postalCode: '0788',\n      city: 'Oslo',\n    },\n    {\n      postalCode: '0789',\n      city: 'Bergen',\n    },\n  ]}\n>\n  <Field.PostalCodeAndCity\n    postalCode={{\n      itemPath: '/postalCode',\n    }}\n    city={{\n      itemPath: '/city',\n    }}\n  />\n</Iterate.Array>\n"}),g=()=>(0,a.jsx)(s.Z,{children:'<Form.Handler>\n  <Card stack>\n    <Field.SelectCountry path="/myCountry" defaultValue="NO" />\n    <Field.PostalCodeAndCity country="/myCountry" />\n  </Card>\n</Form.Handler>\n'}),j=()=>(0,a.jsx)(s.Z,{children:"<Form.Handler\n  translations={{\n    'nb-NO': {\n      'PostalCode.errorPattern':\n        'Dette er ikke et gyldig postnummer (fem siffer).',\n    },\n    'en-GB': {\n      'PostalCode.errorPattern':\n        'This is not a valid postcode (five-digits).',\n    },\n  }}\n>\n  <Field.PostalCodeAndCity\n    country=\"DE\"\n    postalCode={{\n      pattern: '^[0-9]{5}$',\n      onBlurValidator: undefined,\n      mask: [/\\d/, /\\d/, /\\d/, /\\d/, /\\d/],\n      placeholder: '00000',\n      width: '5.4rem',\n    }}\n    city={{\n      pattern: '^[a-zA-ZäöüÄÖÜß -]+$',\n      width: 'stretch',\n    }}\n  />\n</Form.Handler>\n"});function f(n){const e=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code"},(0,l.ah)(),n.components),{VisibleWhenVisualTest:o}=e;return t||v("Examples",!1),u||v("Examples.Disabled",!0),r||v("Examples.Empty",!0),x||v("Examples.IterateArray",!0),d||v("Examples.Label",!0),c||v("Examples.LabelAndValue",!0),C||v("Examples.LongLabel",!0),j||v("Examples.NonNorwegianPostalCode",!0),i||v("Examples.Placeholder",!0),g||v("Examples.SettingCountryBasedOnPath",!0),y||v("Examples.ValidationRequired",!0),p||v("Examples.WithError",!0),h||v("Examples.WithHelp",!0),o||v("VisibleWhenVisualTest",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{children:"Demos"}),"\n",(0,a.jsx)(e.h3,{children:"Empty"}),"\n",(0,a.jsx)(r,{}),"\n",(0,a.jsx)(e.h3,{children:"Placeholder"}),"\n",(0,a.jsx)(i,{}),"\n",(0,a.jsx)(e.h3,{children:"Label"}),"\n",(0,a.jsx)(d,{}),"\n",(0,a.jsx)(e.h3,{children:"Label and value"}),"\n",(0,a.jsx)(c,{}),"\n",(0,a.jsx)(e.h3,{children:"Iterate over array"}),"\n",(0,a.jsxs)(e.p,{children:["By using the ",(0,a.jsx)(e.code,{children:"itemPath"})," property, you can iterate over an array and use the ",(0,a.jsx)(e.code,{children:"postalCode"})," and ",(0,a.jsx)(e.code,{children:"city"})," properties to render the fields."]}),"\n",(0,a.jsx)(x,{}),"\n",(0,a.jsx)(e.h3,{children:"Disabled"}),"\n",(0,a.jsx)(u,{}),"\n",(0,a.jsx)(e.h3,{children:"With help"}),"\n",(0,a.jsx)(h,{}),"\n",(0,a.jsx)(e.h3,{children:"Error"}),"\n",(0,a.jsx)(p,{}),"\n",(0,a.jsx)(e.h3,{children:"Validation - Required"}),"\n",(0,a.jsx)(y,{}),"\n",(0,a.jsx)(e.h3,{children:"Path Based Country"}),"\n",(0,a.jsxs)(e.p,{children:["The ",(0,a.jsx)(e.code,{children:"country"})," property supports a field path as value. This allows you to set the ",(0,a.jsx)(e.code,{children:"country"})," based on the value of another field."]}),"\n",(0,a.jsx)(g,{}),"\n",(0,a.jsx)(e.h3,{children:"Non-Norwegian Postal Codes"}),"\n",(0,a.jsxs)(e.p,{children:["If you want to allow for a postal code that is not Norwegian, just set the ",(0,a.jsx)(e.code,{children:"country"})," property to the desired country, and add your own custom validation."]}),"\n",(0,a.jsxs)(e.p,{children:["NB: As of today, setting ",(0,a.jsx)(e.code,{children:"country"})," property to anything other than ",(0,a.jsx)(e.code,{children:"NO"})," will only remove the default norwegian postal code pattern, mask, and placeholder, but not actually set the postal code pattern, mask, and placeholder for the value provided to the ",(0,a.jsx)(e.code,{children:"country"})," property. This functionality will hopefully be implemented in the future."]}),"\n",(0,a.jsx)(j,{}),"\n",(0,a.jsx)(o,{children:(0,a.jsx)(C,{})})]})}var m=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,l.ah)(),n.components);return e?(0,a.jsx)(e,Object.assign({},n,{children:(0,a.jsx)(f,n)})):f(n)};function v(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},83350:function(n,e,o){o.r(e);var t=o(52322),a=o(45392);function l(n){const e=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,a.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{children:"Description"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"Field.PostalCodeAndCity"})," is a wrapper component for input of two separate ",(0,t.jsx)(e.a,{href:"/uilib/extensions/forms/base-fields/String",children:"input of strings"})," with user experience tailored for postcode and city values."]}),"\n",(0,t.jsxs)(e.p,{children:["These fields is meant for Norwegian postcodes and cities. The postcode input takes a 4-digit string as values, since it's meant for Norwegian postcodes. A Norwegian postcode can have a leading zero, which is why the value is a string and not a number.\nMore info about postcodes can be found at ",(0,t.jsx)(e.a,{href:"https://www.bring.no/tjenester/adressetjenester/postnummer",children:"Posten"}),"."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsx",children:"import { Field } from '@dnb/eufemia/extensions/forms'\nrender(<Field.PostalCodeAndCity />)\n"})}),"\n",(0,t.jsxs)(e.p,{children:["There is a corresponding ",(0,t.jsx)(e.a,{href:"/uilib/extensions/forms/Value/PostalCodeAndCity",children:"Value.PostalCodeAndCity"})," component."]})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,a.ah)(),n.components);return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(l,n)})):l(n)}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-feature-fields-postal-code-and-city-mdx-1157763bcdfcbbce88d9.js.map