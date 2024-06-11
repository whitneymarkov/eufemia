"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[13143,35831],{74081:function(e,n,r){r.r(n);var s=r(52322),a=r(45392),o=r(25070),t=r(60036);function i(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.default,{}),"\n",(0,s.jsx)(t.default,{})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i()}},60036:function(e,n,r){r.r(n),r.d(n,{default:function(){return N}});var s=r(52322),a=r(45392),o=r(70894),t=(r(2784),r(58469));const i=(0,o.Z)("div",{target:"efx3r3y0"})({name:"1m8jzmp",styles:"*:not([data-visual-test='number-format-spacing'])>span.dnb-number-format{display:block;}[data-visual-test='number-locales'] .dnb-p:last-of-type{padding-bottom:1rem;}"}),l=()=>(0,s.jsx)(i,{children:(0,s.jsx)(t.Z,{"data-visual-test":"number-format-default",children:'<P>\n  <NumberFormat value="12345" srLabel="Total:" />\n  <NumberFormat>-12345678.9</NumberFormat>\n  <NumberFormat prefix={<b>prefix</b>} suffix="suffix">\n    -12345678.9\n  </NumberFormat>\n  <NumberFormat decimals={1}>-1234.54321</NumberFormat>\n  <NumberFormat decimals={2} copy_selection={false}>\n    -1234\n  </NumberFormat>\n  <NumberFormat decimals={2}>invalid</NumberFormat>\n</P>\n'})}),c=()=>(0,s.jsx)(i,{children:(0,s.jsx)(t.Z,{"data-visual-test":"number-format-percent",children:'<P>\n  <NumberFormat percent value="12.34" />\n  <NumberFormat percent>-12.34</NumberFormat>\n  <NumberFormat percent decimals={1}>\n    -12.34\n  </NumberFormat>\n</P>\n'})}),d=()=>(0,s.jsx)(i,{children:(0,s.jsx)(t.Z,{"data-visual-test":"number-format-currency",children:'<P>\n  <NumberFormat currency>12345</NumberFormat>\n  <NumberFormat currency currency_position="before" value={-12345678.9} />\n  <NumberFormat currency value={-12345678.95} decimals={0} />\n  <NumberFormat currency value={-12345678.9} currency_display="code" />\n  <NumberFormat currency value={-12345678.9} currency_display={false} />\n  <NumberFormat currency decimals={2}>\n    invalid\n  </NumberFormat>\n</P>\n'})}),u=()=>(0,s.jsx)(i,{children:(0,s.jsx)(t.Z,{children:'<Provider\n  value={{\n    NumberFormat: {\n      currency: true,\n      omit_rounding: true,\n      clean_copy_value: true,\n    },\n  }}\n>\n  <P>\n    <NumberFormat>12345</NumberFormat>\n    <NumberFormat value={-12345.123} decimals={0} />\n    <NumberFormat value={-12345678.955} currency_position="before" />\n  </P>\n</Provider>\n'})}),h=()=>(0,s.jsx)(i,{children:(0,s.jsx)(t.Z,{"data-visual-test":"number-format-compact",children:'<P>\n  <NumberFormat compact decimals={1}>\n    1234\n  </NumberFormat>\n  <NumberFormat compact decimals={1} value={123456} />\n  <NumberFormat compact="short" decimals={2} value={-1723967.38} />\n  <NumberFormat compact="long" decimals={3} value={-1234567.9876} />\n  <NumberFormat\n    compact="long"\n    currency\n    value={12345}\n    decimals={1}\n    currency_display="name"\n  />\n  <NumberFormat compact value={123455678912} decimals={3} />\n</P>\n'})}),m=()=>(0,s.jsx)(i,{children:(0,s.jsx)(t.Z,{"data-visual-test":"number-format-phone",children:'<P>\n  <NumberFormat value="99999999" phone />\n  <NumberFormat value="4799999999" phone />\n  <NumberFormat value="++4799999999" phone />\n  <NumberFormat value="+4780022222" phone link="sms" />\n  <NumberFormat value="+47116000" phone selectall={false} />\n  <NumberFormat value="+4702000" phone />\n</P>\n'})}),p=()=>(0,s.jsx)(i,{children:(0,s.jsx)(t.Z,{"data-visual-test":"number-format-ban",children:'<P>\n  <NumberFormat value="20001234567" ban />\n</P>\n'})}),b=()=>(0,s.jsx)(i,{children:(0,s.jsx)(t.Z,{"data-visual-test":"number-format-nin",children:'<P>\n  <NumberFormat value="18089212345" nin />\n</P>\n'})}),x=()=>(0,s.jsx)(i,{children:(0,s.jsx)(t.Z,{"data-visual-test":"number-format-org",children:'<P>\n  <NumberFormat value="123456789" org suffix="MVA" />\n</P>\n'})}),j=()=>(0,s.jsx)(i,{children:(0,s.jsx)(t.Z,{"data-visual-test":"number-format-locales",children:'\n<H3>Numbers</H3>\n<P>\n  <NumberFormat locale="nb-NO" value="-12345678.9" />\n  <NumberFormat locale="en-GB" value="-12345678.9" />\n  <NumberFormat locale="de-DE" value="-12345678.9" />\n  <NumberFormat locale="de-CH" value="-12345678.9" />\n  <NumberFormat locale="fr-CH" value="-12345678.9" />\n</P>\n<H3>Currencies</H3>\n<P>\n  <NumberFormat locale="nb-NO" value="-12345.6" currency />\n  <NumberFormat locale="en-GB" value="-12345.6" currency />\n  <NumberFormat locale="de-DE" value="-12345.6" currency />\n  <NumberFormat locale="de-CH" value="-12345.6" currency />\n  <NumberFormat locale="fr-CH" value="-12345.6" currency />\n</P>\n\n'})}),f=()=>(0,s.jsx)(i,{children:(0,s.jsx)(t.Z,{"data-visual-test":"number-format-spacing",children:'\n<span>text</span>\n<NumberFormat value="1234" currency left right />\n<span>text</span>\n<NumberFormat value="5678" currency left right />\n<span>text</span>\n\n'})}),g=()=>(0,s.jsx)(i,{children:(0,s.jsx)(t.Z,{"data-visual-test":"number-format-monospace",children:'<NumberFormat value="123456" locale="en-GB" currency="NOK" monospace />\n'})});var v=r(52476);function y(e){const n=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{children:"Demos"}),"\n",(0,s.jsx)(v.Z,{label:"Locale used in the demos:",label_direction:"vertical"}),"\n",(0,s.jsx)(n.h3,{children:"Default numbers"}),"\n",(0,s.jsx)(l,{}),"\n",(0,s.jsx)(n.h3,{children:"Currency"}),"\n",(0,s.jsx)(d,{}),"\n",(0,s.jsx)(n.h3,{children:"Compact (shorten) numbers"}),"\n",(0,s.jsxs)(n.p,{children:["Shorten numbers should only be used for numbers above 100 000. A small ",(0,s.jsx)(n.code,{children:"k"})," for thousand is not a Norwegian standard, and should not be used in formal contexts."]}),"\n",(0,s.jsx)(h,{}),"\n",(0,s.jsx)(n.h3,{children:"Percentage"}),"\n",(0,s.jsx)(c,{}),"\n",(0,s.jsx)(n.h3,{children:"Phone"}),"\n",(0,s.jsxs)(n.p,{children:["By using ",(0,s.jsx)(n.code,{children:"selectall={false}"})," you disable the auto-select all feature."]}),"\n",(0,s.jsx)(m,{}),"\n",(0,s.jsx)(n.h3,{children:"Bank Account number (Kontonummer)"}),"\n",(0,s.jsx)(p,{}),"\n",(0,s.jsx)(n.h3,{children:"National Identification number (Fødselsnummer)"}),"\n",(0,s.jsx)(b,{}),"\n",(0,s.jsx)(n.h3,{children:"Organization number (Organisasjonsnummer)"}),"\n",(0,s.jsx)(x,{}),"\n",(0,s.jsx)(n.h3,{children:"Numbers and currencies in different locales"}),"\n",(0,s.jsx)(j,{}),"\n",(0,s.jsx)(n.h3,{children:"NumberFormat and spacing"}),"\n",(0,s.jsxs)(n.p,{children:["The NumberFormat uses ",(0,s.jsx)(n.code,{children:"display: inline-block;"})," in order to make the ",(0,s.jsx)(n.a,{href:"/uilib/layout/space",children:"spacing system"})," to work."]}),"\n",(0,s.jsx)(f,{}),"\n",(0,s.jsx)(n.h3,{children:"Using the Provider with NumberFormat"}),"\n",(0,s.jsxs)(n.p,{children:["In this example every NumberFormat will receive the Provider defined properties, including ",(0,s.jsx)(n.code,{children:"clean_copy_value"}),"."]}),"\n",(0,s.jsx)(u,{}),"\n",(0,s.jsx)(n.h3,{children:"Monospace"}),"\n",(0,s.jsxs)(n.p,{children:["By using the ",(0,s.jsx)(n.code,{children:"monospace"})," prop you can set the font to ",(0,s.jsx)(n.a,{href:"/quickguide-designer/fonts/#dnbmono-regular",children:"DNB Mono Regular"})]}),"\n",(0,s.jsx)(g,{})]})}var N=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(y,e)})):y(e)}},25070:function(e,n,r){r.r(n);var s=r(52322),a=r(45392),o=r(68742);function t(e){const n=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",h3:"h3",code:"code",h4:"h4",strong:"strong",a:"a",pre:"pre",blockquote:"blockquote"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"A ready-to-use DNB number formatter. Use it wherever you have to display a number, a currency value, phone number, etc."}),"\n",(0,s.jsx)(n.p,{children:"Good reasons for why we have this is to:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"uniform the formation of numbers for all DNB applications."}),"\n",(0,s.jsx)(n.li,{children:"and make numbers accessible to screen readers."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{children:"Supported formats"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Numbers in general e.g. ",(0,s.jsx)("code",{className:"dnb-code",children:(0,s.jsx)(o.Z,{value:"12345678.90"})})]}),"\n",(0,s.jsxs)(n.li,{children:["Currency e.g. ",(0,s.jsx)("code",{className:"dnb-code",children:(0,s.jsx)(o.Z,{currency:!0,value:"12345678.90"})})]}),"\n",(0,s.jsxs)(n.li,{children:["Percentage e.g. ",(0,s.jsx)("code",{className:"dnb-code",children:(0,s.jsx)(o.Z,{percent:!0,value:"12.34"})})]}),"\n",(0,s.jsxs)(n.li,{children:["Phone numbers e.g. ",(0,s.jsx)("code",{className:"dnb-code",children:(0,s.jsx)(o.Z,{phone:!0,value:"004799999999"})})]}),"\n",(0,s.jsxs)(n.li,{children:["Bank account number e.g. ",(0,s.jsx)("code",{className:"dnb-code",children:(0,s.jsx)(o.Z,{ban:!0,value:"20001234567"})})]}),"\n",(0,s.jsxs)(n.li,{children:["National identification number e.g. ",(0,s.jsx)("code",{className:"dnb-code",children:(0,s.jsx)(o.Z,{nin:!0,value:"18089212345"})})]}),"\n",(0,s.jsxs)(n.li,{children:["Organization number e.g. ",(0,s.jsx)("code",{className:"dnb-code",children:(0,s.jsx)(o.Z,{org:!0,value:"123456789"})})]}),"\n",(0,s.jsxs)(n.li,{children:["Compact (short) numbers e.g. ",(0,s.jsx)("code",{className:"dnb-code",children:(0,s.jsx)(o.Z,{compact:!0,value:"12345678",decimals:1})})]}),"\n",(0,s.jsxs)(n.li,{children:["Compact (long) currency e.g. ",(0,s.jsx)("code",{className:"dnb-code",children:(0,s.jsx)(o.Z,{compact:"long",currency:!0,currency_display:"name",value:"12345678",decimals:1})})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{children:"Defaults"}),"\n",(0,s.jsxs)(n.p,{children:["It uses the browser APIs ",(0,s.jsx)(n.code,{children:"number.toLocaleString"})," or ",(0,s.jsx)(n.code,{children:"Intl.NumberFormat.format"})," under the hood. As well as some custom formatter. The locale defaults to:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Locale: ",(0,s.jsx)(n.code,{children:"nb-NO"})]}),"\n",(0,s.jsxs)(n.li,{children:["Currency: ",(0,s.jsx)(n.code,{children:"NOK"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{children:"Norwegian kroner"}),"\n",(0,s.jsxs)(n.p,{children:["When the currency format is set to ",(0,s.jsx)(n.code,{children:'currency_display="name"'}),', the currency will be displayed as "kroner" instead of "Norwegian kroner".']}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Norwegian currency: ",(0,s.jsx)("code",{className:"dnb-code",children:(0,s.jsx)(o.Z,{currency:!0,currency_display:"name",value:"1234.90"})})]}),"\n",(0,s.jsxs)(n.li,{children:["Swedish currency: ",(0,s.jsx)("code",{className:"dnb-code",children:(0,s.jsx)(o.Z,{currency:"SEK",currency_display:"name",value:"1234.90"})})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{children:"Not available"}),"\n",(0,s.jsxs)(n.p,{children:["When a number should be displayed, but for some reason is not available to the frontend application, the NumberFormat component will display a single ",(0,s.jsx)(n.strong,{children:"em dash"})," (–) and a screen reader will get a text (Ikke tilgjengelig / Not available)."]}),"\n",(0,s.jsxs)(n.p,{children:["Example: ",(0,s.jsx)(o.Z,{value:"invalid",currency:!0})]}),"\n",(0,s.jsx)(n.h2,{children:"Decimals"}),"\n",(0,s.jsxs)(n.p,{children:["When the amount of wanted ",(0,s.jsx)(n.code,{children:"decimals"})," is set as a property, but the given value contains decimals that exceeds the wanted ",(0,s.jsx)(n.code,{children:"decimals"}),", the output value will get rounded up or down. Use ",(0,s.jsx)(n.code,{children:"omit_rounding"})," if you need to hard-cut decimals from the displayed value."]}),"\n",(0,s.jsx)(n.h2,{children:"Provider"}),"\n",(0,s.jsxs)(n.p,{children:["You can send down the ",(0,s.jsx)(n.code,{children:"locale"})," as an application-wide property (Context). More info about the ",(0,s.jsx)(n.a,{href:"/uilib/components/number-format/provider",children:"provider and locale usage"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import Provider from '@dnb/eufemia/shared/Provider'\n\nrender(\n  <Provider locale=\"en-GB\" NumberFormat={{ currency_display: 'code' }}>\n    <MyApp>\n      text <NumberFormat>123</NumberFormat> table etc.\n    </MyApp>\n  </Provider>,\n)\n"})}),"\n",(0,s.jsx)(n.h2,{children:"NumberFormat Hook"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Heads up:"})," If you do so, keep in mind, you will have to ensure all the accessibility enhancements the component offers. For that you can use the ",(0,s.jsx)(n.code,{children:"aria"})," field:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import Provider from '@dnb/eufemia/shared/Provider'\nimport useNumberFormat from '@dnb/eufemia/components/number-format/useNumberFormat'\n\nfunction Component() {\n  // By using returnAria you get an object\n  const { number, aria } = useNumberFormat(12345678.9, {\n    // Props are inherited from the Eufemia Provider and the NumberFormat object\n    returnAria: true,\n  })\n\n  return (\n    <span>\n      <span aria-hidden>{number}</span>\n      <span className=\"dnb-sr-only\">{aria}</span>\n    </span>\n  )\n}\n\nrender(\n  <Provider locale=\"en-GB\" NumberFormat={{ currency: 'EUR' }}>\n    <Component />\n  </Provider>,\n)\n"})}),"\n",(0,s.jsx)(n.h2,{children:"Formatting only (interceptor)"}),"\n",(0,s.jsxs)(n.p,{children:["You can use the ",(0,s.jsx)(n.code,{children:"format"})," method without using a React Component or React Hook."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Heads up:"})," If you do so, keep in mind, you will have to ensure all the accessibility enhancements the component offers. For that you can use the ",(0,s.jsx)(n.code,{children:"aria"})," field:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { format } from '@dnb/eufemia/components/number-format/NumberUtils'\n\n// By using returnAria you get an object\nconst { number, aria } = format(12345678.9, {\n  locale: 'nb-NO', // not inherited\n  currency: true,\n  returnAria: true,\n})\n\n// Basic formatting\nconst number = format(1234)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"format"})," method will accept the same ",(0,s.jsx)(n.a,{href:"/uilib/components/number-format/properties",children:"properties"})," as the component."]}),"\n",(0,s.jsx)(n.h3,{children:"Interceptor helpers"}),"\n",(0,s.jsxs)(n.p,{children:["Also, you may check out the related tests ",(0,s.jsx)(n.strong,{children:"NumberFormat > cleanNumber"})," in the source code to find more examples."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { cleanNumber } from '@dnb/eufemia/components/number-format/NumberUtils'\n\nconst string = cleanNumber('prefix -12 345,678 suffix') // returns -12345.678\nconst string = cleanNumber('prefix -12.345,678 suffix') // returns -12345.678\n"})}),"\n",(0,s.jsx)(n.h3,{children:"Element and style"}),"\n",(0,s.jsxs)(n.p,{children:["The number component is style-independent, so it has no visual styles. By default, a ",(0,s.jsx)(n.code,{children:"<span>"})," is used (with ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@counter-style/speak-as",children:"speak-as: numbers"}),", even the support is very low). But you can easily change the element type by providing something else to ",(0,s.jsx)(n.code,{children:'element="div"'})," property."]}),"\n",(0,s.jsx)(n.h2,{children:"Accessibility"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"NVDA"})," has also ",(0,s.jsx)(n.a,{href:"https://github.com/nvaccess/nvda/issues/8874",children:"issues"})," on reconciling the ",(0,s.jsx)(n.code,{children:"lang"})," attribute, this makes it hard to have a solid and good solution for reading numbers. VoiceOver on desktop makes a perfect job there."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VoiceOver"})," on mobile devices (iOS) only supports numbers read out properly to a maximum of ",(0,s.jsx)(n.code,{children:"99,999.00"}),". On amounts above this value, VO reads numbers digit by digit."]}),"\n",(0,s.jsxs)(n.p,{children:["To enhance the ",(0,s.jsx)(n.strong,{children:"Copy & Paste"})," experience of copying numbers into other applications (Excel), you may use the ",(0,s.jsx)(n.code,{children:"clean_copy_value"})," property – it will then provide a second number, without thousand separators and to have a comma/dot (depending on the locale) as the decimal separator. This number is not visible, but will be used when selecting & copying the whole number on the first click to the system clipboard."]}),"\n",(0,s.jsxs)(n.p,{children:["You can enable this feature on all your NumberFormat components by using the ",(0,s.jsx)(n.code,{children:"Provider"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import { Provider } from '@dnb/eufemia/shared'\n\nrender(\n  <Provider value={{ NumberFormat: { clean_copy_value: true } }}>\n    <YourApp />\n  </Provider>,\n)\n"})}),"\n",(0,s.jsx)(n.h3,{children:"More details"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Screen readers require numbers to be formatted properly in order to be read as numbers. The ",(0,s.jsx)(n.strong,{children:"NumberFormat"})," component will help to achieve this requirement."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["So, numbers are formatted differently for screen readers than the visual number. And numbers also get assigned a ",(0,s.jsx)(n.code,{children:"lang"})," attribute, so the screen reader knows what language (locale) should be used on the particular number, even if the text around does not correspond to the same language."]}),"\n",(0,s.jsx)(n.h3,{children:"Sources"}),"\n",(0,s.jsxs)(n.p,{children:["Eufemia is basing their number formats on both the ",(0,s.jsx)(n.a,{href:"https://lovdata.no/forskrift/2004-02-16-426/%C2%A716",children:"Norwegian authority"})," and ",(0,s.jsx)(n.a,{href:"https://www.sprakradet.no/sprakhjelp/Skriveregler/Dato",children:"Språkradet"}),", and currency is based on ",(0,s.jsx)(n.a,{href:"https://www.sprakradet.no/svardatabase/sporsmal-og-svar/kronebelop-rekkjefolgje-komma-og-strek/",children:"guidelines"})," from Språkrådet. Wikipedia has more info on world wide ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Decimal_separator",children:"decimal separator"})," usage."]}),"\n",(0,s.jsxs)(n.p,{children:["For international number formatting, we use the ",(0,s.jsx)(n.a,{href:"https://ec.europa.eu/info/sites/default/files/styleguide_english_dgt_en.pdf",children:"EU Style Guide"}),"."]}),"\n",(0,s.jsx)(n.h2,{children:"Node.js and SSR usage"}),"\n",(0,s.jsxs)(n.p,{children:["If you run the component or ",(0,s.jsx)(n.code,{children:"format"})," function in ",(0,s.jsx)(n.a,{href:"https://nodejs.org",children:"Node.js"})," you have to include ",(0,s.jsx)(n.a,{href:"https://nodejs.org/api/intl.html",children:"ICU"})," data in order to display other locales than en-GB. You can do this by:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["installing ",(0,s.jsx)(n.code,{children:"npm i full-icu"})]}),"\n",(0,s.jsxs)(n.li,{children:["and call node (or jest) with an environment variable pointing to the package: ",(0,s.jsx)(n.code,{children:"NODE_ICU_DATA=./node_modules/full-icu node ..."})]}),"\n",(0,s.jsxs)(n.li,{children:["after a Node.js version upgrade you may have to run ",(0,s.jsx)(n.code,{children:"npm rebuild"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{children:"Known issues"}),"\n",(0,s.jsx)(n.p,{children:"Edge Browser on Windows 10 is converting numbers automatically to followable links. This makes the experience on NVDA bad, as it reads also the new, unformatted link number."}),"\n",(0,s.jsxs)(n.p,{children:["You can ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/x-ms-format-detection",children:"disable this behavior"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<html x-ms-format-detection="none">\n  ...\n</html>\n'})}),"\n",(0,s.jsx)(n.h3,{children:"Lighthouse and axe-core"}),"\n",(0,s.jsxs)(n.p,{children:["In order to enhance the UX while using a screen reader, the NumberFormat component is using a role called ",(0,s.jsx)(n.code,{children:'role="text"'}),". This allows the screen reader to read particular numbers within the context, without interrupting the flow while reading paragraphs."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://developers.google.com/web/tools/lighthouse",children:"Lighthouse"})," is using ",(0,s.jsx)(n.a,{href:"https://developers.google.com/web/tools/lighthouse",children:"axe-core"})," under the hood. Older versions of ",(0,s.jsx)(n.code,{children:"axe-core"})," is allowing us to use ",(0,s.jsx)(n.code,{children:'role="text"'})," only within no focusable descendants. But because the NumberFormat component also includes a ",(0,s.jsx)(n.strong,{children:"Copy & Paste"})," feature, it uses ",(0,s.jsx)(n.code,{children:'tabindex="-1"'})," which allows JavaScript to focus the descendant DOM Element."]})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(t,e)})):t(e)}}}]);
//# sourceMappingURL=component---src-docs-uilib-components-number-format-mdx-be203a891a6a2fafadfc.js.map