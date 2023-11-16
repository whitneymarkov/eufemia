"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[5593],{20160:function(e,s,n){n.r(s);var t=n(52322),r=n(45392);function i(e){const s=Object.assign({h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",em:"em",a:"a",p:"p",strong:"strong",ul:"ul",li:"li",h3:"h3",pre:"pre"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{children:"Properties"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Properties"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"as_number"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.em,{children:"(optional)"})," Set to ",(0,t.jsx)(s.code,{children:"true"})," to automatically set a number mask based on the given or inherited locale."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"as_percent"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.em,{children:"(optional)"})," Set to ",(0,t.jsx)(s.code,{children:"true"})," to automatically set a number mask with a percentage sign based on the given or inherited locale."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"as_currency"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.em,{children:"(optional)"})," Set to ",(0,t.jsx)(s.code,{children:"true"})," to use ",(0,t.jsx)(s.code,{children:"NOK"})," or give it a currency code e.g. ",(0,t.jsx)(s.code,{children:"USD"})," to automatically set a currency mask based on the given or inherited locale."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"mask_options"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.em,{children:"(optional)"})," Use it to manipulate internal masks. You can use it instead of e.g. ",(0,t.jsx)(s.code,{children:"number_mask"})," or ",(0,t.jsx)(s.code,{children:"currency_mask"}),". All options are listed below."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"number_mask"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.em,{children:"(optional)"})," Set to ",(0,t.jsx)(s.code,{children:"true"})," to enable the default numbers formatting – or give an ",(0,t.jsx)(s.code,{children:"object"})," containing the number mask properties. More details below. Can be a JSON string as well, containing the number mask properties. Is disabled by default."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"currency_mask"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.em,{children:"(optional)"})," Set to ",(0,t.jsx)(s.code,{children:"true"})," or set the ",(0,t.jsx)(s.em,{children:"valuta"}),' (currency_mask="kr") to enable a custom currency mask – or give an ',(0,t.jsx)(s.code,{children:"object"})," containing the number mask properties. More details below. Can be a JSON string as well, containing the number mask properties. Is disabled by default. Defaults to ",(0,t.jsx)(s.code,{children:"kr"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"number_format"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.em,{children:"(optional)"})," Use an object with ",(0,t.jsx)(s.a,{href:"/uilib/components/number-format/properties",children:"NumberFormat"})," e.g. ",(0,t.jsx)(s.code,{children:"{ omit_rounding: false }"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"locale"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.em,{children:"(optional)"})," Define the locale to be used in the ",(0,t.jsx)(s.code,{children:"as_number"})," or ",(0,t.jsx)(s.code,{children:"as_currency"})," masked. It will be inherited from the ",(0,t.jsx)(s.a,{href:"/uilib/usage/customisation/provider",children:"Eufemia Provider"})," if not given. Defaults to ",(0,t.jsx)(s.code,{children:"nb-NO"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"mask"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.em,{children:"(optional)"})," A mask can be defined both as a ",(0,t.jsx)(s.a,{href:"https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#readme",children:"RegExp style of characters"})," or a callback function. Example below."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"show_mask"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.em,{children:"(optional)"})," Show mask when input is empty and has no focus. Defaults to ",(0,t.jsx)(s.code,{children:"false"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"show_guide"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.em,{children:"(optional)"})," When ",(0,t.jsx)(s.code,{children:"false"})," is given, it doesn't print out placeholder characters and only adds mask characters when the user reaches them as they're typing. Defaults to ",(0,t.jsx)(s.code,{children:"true"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"placeholder_char"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.em,{children:"(optional)"})," The placeholder character represents the fillable spot in the mask (e.g. ",(0,t.jsx)(s.code,{children:"_"}),"). Defaults to invisible space."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"keep_char_positions"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.em,{children:"(optional)"})," When ",(0,t.jsx)(s.code,{children:"true"}),", adding or deleting characters will not affect the positions of existing characters. Defaults to ",(0,t.jsx)(s.code,{children:"false"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/uilib/components/input/properties",children:"Input"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.em,{children:"(optional)"})," all ",(0,t.jsx)(s.code,{children:"Input"})," properties are supported."]})]})]})]}),"\n",(0,t.jsx)(s.h2,{children:"Number mask properties"}),"\n",(0,t.jsx)(s.p,{children:"The number mask is used for all kinds of number based masks, like:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Locale based masks:"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"as_number"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"as_currency"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"as_percent"})}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Static masks:"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"number_mask"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"currency_mask"})}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["You can ",(0,t.jsx)(s.code,{children:"mask_options"})," to manipulate the options."]}),"\n",(0,t.jsx)(s.p,{children:"Defaults to Norwegian number format."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Properties"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"prefix"})}),(0,t.jsx)(s.td,{children:"(string): What to display before the amount. Defaults to an empty string."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"suffix"})}),(0,t.jsx)(s.td,{children:"(string): What to display after the amount. Defaults to an empty string."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"includeThousandsSeparator"})}),(0,t.jsxs)(s.td,{children:["(boolean): Whether or not to separate thousands. Defaults to to ",(0,t.jsx)(s.code,{children:"true"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"thousandsSeparatorSymbol"})}),(0,t.jsxs)(s.td,{children:["(string): Character with which to separate thousands. Defaults to ",(0,t.jsx)(s.code,{children:"' '"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"allowDecimal"})}),(0,t.jsxs)(s.td,{children:["(boolean): Whether or not to allow the user to enter a fraction with the amount. Defaults to ",(0,t.jsx)(s.code,{children:"false"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"decimalSymbol"})}),(0,t.jsxs)(s.td,{children:["(string): Character that will act as a decimal point. Defaults to ",(0,t.jsx)(s.code,{children:"','"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"decimalLimit"})}),(0,t.jsxs)(s.td,{children:["(number): How many digits to allow after the decimal. Defaults to ",(0,t.jsx)(s.code,{children:"2"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"integerLimit"})}),(0,t.jsxs)(s.td,{children:["(number): Limit the length of the integer number. Defaults to ",(0,t.jsx)(s.code,{children:"null"})," for unlimited."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"requireDecimal"})}),(0,t.jsxs)(s.td,{children:["(boolean): Whether or not to always include a decimal point and placeholder for decimal digits after the integer. Defaults to ",(0,t.jsx)(s.code,{children:"false"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"allowNegative"})}),(0,t.jsxs)(s.td,{children:["(boolean): Whether or not to allow negative numbers. Defaults to ",(0,t.jsx)(s.code,{children:"true"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"disallowLeadingZeroes"})}),(0,t.jsxs)(s.td,{children:["(boolean): Whether or not to allow leading zeroes. Defaults to ",(0,t.jsx)(s.code,{children:"false"}),"."]})]})]})]}),"\n",(0,t.jsx)(s.h3,{children:"Custom number mask usage"}),"\n",(0,t.jsxs)(s.p,{children:["The number mask is included and can be set with the ",(0,t.jsx)(s.code,{children:"number_mask"})," property."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-jsx",children:"\n// 1. Use the desired configurations\nconst numberMask = {\n  prefix: '',\n  suffix: ',- kr'\n}\n\n// 2. Then pass 'numberMask' to the InputMasked component as the number_mask\n<InputMasked number_mask={numberMask} ... />\n"})}),"\n",(0,t.jsx)(s.p,{children:"But in case you have to create the mask by yourself, you can do so:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-jsx",children:"import createNumberMask from '@dnb/eufemia/components/input-masked/addons/createNumberMask'\n\n// 1. Create the 'numberMask' with your desired configurations\nconst numberMask = createNumberMask({\n  prefix: '',\n  suffix: ',- kr'\n})\n\n// 2. Then pass 'numberMask' to the InputMasked component as the mask\n<InputMasked mask={numberMask} ... />\n"})}),"\n",(0,t.jsx)(s.h2,{children:"Email mask"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-jsx",children:'import emailMask from \'@dnb/eufemia/components/input-masked/addons/emailMask\'\n\nrender(\n  <InputMasked\n    label="Email:"\n    mask={emailMask}\n    placeholder="@."\n    keep_placeholder={true}\n  />,\n)\n'})}),"\n",(0,t.jsxs)(s.p,{children:["Read more about other addons ",(0,t.jsx)(s.a,{href:"https://github.com/text-mask/text-mask",children:"on the open-source project"})]}),"\n",(0,t.jsx)(s.h2,{children:"Multi-input mask"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Properties"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"label"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.em,{children:"(optional)"})," ",(0,t.jsx)(s.code,{children:"legend"})," element describing the group of inputs inside the components."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"labelDirection"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.em,{children:"(optional)"})," Use to change the label layout direction. Defaults to ",(0,t.jsx)(s.code,{children:"horizontal"}),"."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"inputs"})}),(0,t.jsxs)(s.td,{children:["array of ",(0,t.jsx)(s.a,{href:"/uilib/components/input-masked/properties/#multiinputmask-inputs-properties",children:"MultiInputMaskInput"})," that defines the inputs in the component. The id's defined here is used to map input value to correct property in ",(0,t.jsx)(s.code,{children:"values"})," parameters used in ",(0,t.jsx)(s.code,{children:"onChange"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"values"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.em,{children:"(optional)"})," values used for the inputs in the component. Expects an object with keys matching the id's defined in ",(0,t.jsx)(s.code,{children:"inputs"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"delimiter"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.em,{children:"(optional)"})," character that separates the input inputs."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"status"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.em,{children:"(optional)"})," text with a status message. The style defaults to an error message. You can use true to only get the status color, without a message.`."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"statusState"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.em,{children:"(optional)"})," defines the state of the status. Currently, there are two statuses [error, info]. Defaults to error."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"suffix"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.em,{children:"(optional)"})," Text describing the content of the input more than the label. you can also send in a React component, so it gets wrapped inside the Input component."]})]})]})]}),"\n",(0,t.jsx)(s.h3,{children:"MultiInputMask inputs properties"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Properties"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"id"})}),(0,t.jsxs)(s.td,{children:["(string) Defines input id. This id is also used to map the input value to the correct property on the objects used for ",(0,t.jsx)(s.code,{children:"values"})," and ",(0,t.jsx)(s.code,{children:"onChange"})," parameters."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"label"})}),(0,t.jsx)(s.td,{children:"(string) Label used by the input. The label itself is hidden, but required to uphold accessibility standards for screen readers."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"mask"})}),(0,t.jsx)(s.td,{children:"(array) Each RegExp item in the array defines what the mask should be for each subsequent character in the input. The array length sets the inputs size/character limit."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"placeholderCharacter"})}),(0,t.jsx)(s.td,{children:"(string) Sets the placeholder character used for the input."})]})]})]})]})}s.default=function(e){void 0===e&&(e={});const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}}}]);
//# sourceMappingURL=component---src-docs-uilib-components-input-masked-properties-mdx-aa05da78751eba7a89ce.js.map