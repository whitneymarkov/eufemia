"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[63002],{71629:function(n,e,r){r.r(e);var a=r(52322),s=r(45392),l=r(84384),i=r(52476);function t(n){const e=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",pre:"pre"},(0,s.ah)(),n.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{children:"Demos"}),"\n",(0,a.jsx)(i.Z,{label:"Locale used in the demos:",label_direction:"vertical",bottom:!0}),"\n",(0,a.jsx)(e.h3,{children:"Locale based numbers"}),"\n",(0,a.jsxs)(e.p,{children:["When you use ",(0,a.jsx)(e.code,{children:"as_number"})," or ",(0,a.jsx)(e.code,{children:"as_percent"})," (and ",(0,a.jsx)(e.code,{children:"as_currency"})," see below) it will create a mask for you and inherit the locale from the ",(0,a.jsx)(e.a,{href:"/uilib/usage/customisation/provider",children:"Eufemia Provider"}),", if the locale property is not given."]}),"\n",(0,a.jsxs)(e.p,{children:["You can still define extra mask parameters with ",(0,a.jsx)(e.code,{children:"number_mask"})," or ",(0,a.jsx)(e.code,{children:"mask_options"}),", as the second input example shows (e.g. ",(0,a.jsx)(e.code,{children:"decimalLimit"}),")."]}),"\n",(0,a.jsx)(l.Q8,{}),"\n",(0,a.jsxs)(e.h3,{children:["Locale based ",(0,a.jsx)(e.code,{children:"as_currency"})]}),"\n",(0,a.jsxs)(e.p,{children:["When you use ",(0,a.jsx)(e.code,{children:"as_currency"})," it will create a mask for you and inherit the locale from the ",(0,a.jsx)(e.a,{href:"/uilib/usage/customisation/provider",children:"Eufemia Provider"}),", if the locale property is not given."]}),"\n",(0,a.jsx)(l.Mq,{}),"\n",(0,a.jsxs)(e.h3,{children:["Define the ",(0,a.jsx)(e.code,{children:"currency_mask"})," manually"]}),"\n",(0,a.jsx)(l.Il,{}),"\n",(0,a.jsx)(e.h3,{children:"Customize the number mask"}),"\n",(0,a.jsx)(l.YT,{}),"\n",(0,a.jsxs)(e.h3,{children:["Using the ",(0,a.jsx)(e.code,{children:"number_mask"})," with a combined suffix"]}),"\n",(0,a.jsx)(l.wj,{}),"\n",(0,a.jsxs)(e.h3,{children:["Using the ",(0,a.jsx)(e.code,{children:"number_mask"})," and a prefix"]}),"\n",(0,a.jsx)(l.nI,{}),"\n",(0,a.jsx)(e.h3,{children:"Custom mask"}),"\n",(0,a.jsx)(e.p,{children:"This is an example of how you can utilize a custom mask."}),"\n",(0,a.jsxs)(e.p,{children:["For a phone number input, use the ",(0,a.jsx)(e.a,{href:"/uilib/extensions/forms/feature-fields/PhoneNumber/",children:"PhoneNumber"})," field instead."]}),"\n",(0,a.jsx)(l.Kb,{}),"\n",(0,a.jsx)(e.h3,{children:"Mask with multiple inputs"}),"\n",(0,a.jsxs)(e.p,{children:["Allows for the same input functionality as in the ",(0,a.jsx)(e.a,{href:"/uilib/components/date-picker",children:"DatePicker"}),", but with your own defined inputs.\n",(0,a.jsx)(e.code,{children:"onChange"})," takes an object with keys based on the step id's. e.g. ",(0,a.jsx)(e.code,{children:"{month: string, year: string, suffix: string}"})]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"import"})," as demonstrated below"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-tsx",children:"import { MultiInputMask } from '@dnb/eufemia/components/input-masked'\nrender(<MultiInputMask />)\n"})}),"\n",(0,a.jsx)(l.o1,{})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,a.jsx)(e,Object.assign({},n,{children:(0,a.jsx)(t,n)})):t(n)}},84384:function(n,e,r){r.d(e,{C5:function(){return f},EM:function(){return _},Ed:function(){return b},HO:function(){return j},Il:function(){return u},Kb:function(){return m},Mq:function(){return c},Q8:function(){return t},YT:function(){return o},lB:function(){return k},nI:function(){return h},o1:function(){return g},u4:function(){return x},wj:function(){return d}});var a=r(70894),s=(r(2784),r(64368)),l=r(20459),i=r(52322);const t=()=>(0,i.jsx)(p,{children:(0,i.jsx)(s.Z,{"data-visual-test":"input-masked-number",children:'<Provider\n  formElement={{\n    label_direction: \'vertical\',\n  }}\n>\n  <Flex.Vertical>\n    <InputMasked\n      label="Number"\n      as_number\n      mask_options={{\n        allowNegative: false,\n      }}\n      value="1234.50"\n      on_change={({ numberValue }) => {\n        console.log(numberValue)\n      }}\n    />\n    <InputMasked\n      label="Number (decimal limit)"\n      as_number\n      number_mask={{\n        decimalLimit: 2,\n      }}\n      value="1234.016"\n      on_change={({ numberValue }) => {\n        console.log(numberValue)\n      }}\n    />\n    <InputMasked\n      label="Percentage"\n      as_percent\n      number_mask={{\n        decimalLimit: 1,\n      }}\n      value="1234.016"\n      on_change={({ numberValue }) => {\n        console.log(numberValue)\n      }}\n    />\n  </Flex.Vertical>\n</Provider>\n'})}),c=()=>(0,i.jsx)(p,{children:(0,i.jsx)(s.Z,{"data-visual-test":"input-masked-currency",children:'<Provider\n  formElement={{\n    label_direction: \'vertical\',\n  }}\n>\n  <Flex.Vertical>\n    <InputMasked\n      label="Currency"\n      as_currency="EUR"\n      value="1234.50"\n      on_change={({ numberValue }) => {\n        console.log(numberValue)\n      }}\n    />\n    <Provider\n      locale="en-GB"\n      InputMasked={{\n        currency_mask: {\n          decimalLimit: 3,\n        },\n      }}\n    >\n      <InputMasked\n        label="Currency"\n        as_currency="USD"\n        value="1234.567"\n        on_change={({ numberValue }) => {\n          console.log(numberValue)\n        }}\n      />\n    </Provider>\n  </Flex.Vertical>\n</Provider>\n'})}),u=()=>(0,i.jsx)(p,{children:(0,i.jsx)(s.Z,{"data-visual-test":"input-masked-currency_mask",children:'<Provider\n  formElement={{\n    label_direction: \'vertical\',\n  }}\n>\n  <Flex.Vertical>\n    <InputMasked\n      label="Left aligned (default)"\n      show_mask\n      currency_mask="kr"\n      on_change={({ numberValue }) => {\n        console.log(numberValue)\n      }}\n    />\n    <InputMasked\n      label="Right aligned"\n      show_mask\n      currency_mask={{\n        currency: \'NOK\',\n      }}\n      align="right"\n      on_change={({ numberValue }) => {\n        console.log(numberValue)\n      }}\n    />\n  </Flex.Vertical>\n</Provider>\n'})}),o=()=>(0,i.jsx)(p,{children:(0,i.jsx)(s.Z,{children:"<InputMasked\n  label=\"Masked amount\"\n  show_mask\n  number_mask={{\n    suffix: ' kr',\n    allowDecimal: true,\n  }}\n  placeholder_char={null}\n  on_change={({ numberValue }) => {\n    console.log(numberValue)\n  }}\n/>\n"})}),d=()=>(0,i.jsx)(p,{children:(0,i.jsx)(s.Z,{"data-visual-test":"input-masked-number_mask",children:'<InputMasked\n  label="Masked input"\n  value="1000000"\n  number_mask={{\n    suffix: \',-\',\n    allowDecimal: false,\n  }}\n  suffix="kr"\n  on_change={({ numberValue }) => {\n    console.log(parseInt(numberValue || 0, 10))\n  }}\n/>\n'})}),h=()=>(0,i.jsx)(p,{children:(0,i.jsx)(s.Z,{children:'<InputMasked\n  label="Masked input"\n  number_mask={{\n    prefix: \'NOK \',\n  }}\n  stretch={true}\n  placeholder="Enter a number"\n  on_change={({ numberValue }) => {\n    console.log(numberValue)\n  }}\n/>\n'})}),m=()=>(0,i.jsx)(p,{children:(0,i.jsx)(s.Z,{"data-visual-test":"input-masked-custom-mask",children:"<InputMasked\n  label=\"Custom mask\"\n  mask={[\n    '0',\n    '0',\n    /[4]/,\n    // have to start with 4\n    /[5-7]/,\n    // can be 5,6 or 7\n    ' ',\n    /[49]/,\n    // have to start with 4 or 9\n    /\\d/,\n    ' ',\n    /\\d/,\n    /\\d/,\n    ' ',\n    /\\d/,\n    /\\d/,\n    ' ',\n    /\\d/,\n    /\\d/,\n  ]}\n  show_mask\n  placeholder_char=\"_\"\n  keep_char_positions\n  on_change={({ numberValue }) => {\n    console.log(numberValue)\n  }}\n/>\n"})}),p=(0,a.Z)("div",{target:"e8zk24e0"})({name:"ed8mmh",styles:"display:block;width:100%;.dnb-masked-input{margin:1rem 0;}.dnb-form-label+.dnb-masked-input{margin-top:0;}"}),x=()=>(0,i.jsx)(p,{children:(0,i.jsx)(s.Z,{hidePreview:!0,hideToolbar:!0,children:"<InputMasked\n  mask_options={{\n    allowNegative: false,\n  }}\n/>\n"})}),b=()=>(0,i.jsx)(p,{children:(0,i.jsx)(s.Z,{hidePreview:!0,children:'<InputMasked as_currency="EUR" value="1234.50" />\n'})}),k=()=>(0,i.jsx)(p,{children:(0,i.jsx)(s.Z,{hidePreview:!0,children:'<InputMasked\n  as_currency="EUR"\n  value="1234.50"\n  on_change={({ numberValue }) => {\n    console.log(numberValue) // type of float\n  }}\n/>\n'})}),j=()=>(0,i.jsx)(p,{children:(0,i.jsx)(s.Z,{hidePreview:!0,children:'<Provider\n  locale="en-GB"\n  InputMasked={{\n    currency_mask: {\n      decimalLimit: 1, // defaults to 2\n    },\n  }}\n>\n  <InputMasked as_currency="USD" value="1234.567" />\n</Provider>\n'})}),f=()=>(0,i.jsx)(p,{children:(0,i.jsx)(s.Z,{hidePreview:!0,children:'<Provider\n  locale="en-GB"\n  InputMasked={{\n    number_mask: {\n      decimalLimit: 2, // defaults to no decimals\n    },\n  }}\n>\n  <InputMasked as_number value="1234.567" />\n</Provider>\n'})}),_=()=>(0,i.jsx)(p,{children:(0,i.jsx)(s.Z,{hidePreview:!0,children:'<InputMasked\n  as_number\n  mask_options={{\n    allowDecimal: true,\n    decimalLimit: null,\n  }}\n  value="1234.567"\n/>\n'})}),g=()=>(0,i.jsx)(p,{children:(0,i.jsx)(s.Z,{scope:{MultiInputMask:l.Z},children:"<MultiInputMask\n  label=\"Date\"\n  delimiter=\"/\"\n  onChange={({ month, year, suffix }) =>\n    console.log({\n      month,\n      year,\n      suffix,\n    })\n  }\n  inputs={[\n    {\n      id: 'month',\n      label: 'the month',\n      placeholderCharacter: 'd',\n      mask: [/[0-9]/, /[0-9]/],\n    },\n    {\n      id: 'year',\n      label: 'the year',\n      placeholderCharacter: 'm',\n      mask: [/[0-9]/, /[0-9]/],\n    },\n    {\n      id: 'suffix',\n      label: 'suffix text',\n      placeholderCharacter: '-',\n      mask: [/[a-zA-Z]/, /[a-zA-Z]/, /[a-zA-Z]/],\n    },\n  ]}\n/>\n"})})}}]);
//# sourceMappingURL=component---src-docs-uilib-components-input-masked-demos-mdx-f49767f7735a80737d01.js.map