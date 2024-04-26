"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[18167],{25070:function(e,n,r){r.r(n);var s=r(52322),o=r(45392),t=r(68742);function l(e){const n=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",h3:"h3",code:"code",h4:"h4",strong:"strong",a:"a",pre:"pre",blockquote:"blockquote"},(0,o.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"A ready-to-use DNB number formatter. Use it wherever you have to display a number, a currency value, phone number, etc."}),"\n",(0,s.jsx)(n.p,{children:"Good reasons for why we have this is to:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"uniform the formation of numbers for all DNB applications."}),"\n",(0,s.jsx)(n.li,{children:"and make numbers accessible to screen readers."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{children:"Supported formats"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Numbers in general e.g. ",(0,s.jsx)("code",{className:"dnb-code",children:(0,s.jsx)(t.Z,{value:"12345678.90"})})]}),"\n",(0,s.jsxs)(n.li,{children:["Currency e.g. ",(0,s.jsx)("code",{className:"dnb-code",children:(0,s.jsx)(t.Z,{currency:!0,value:"12345678.90"})})]}),"\n",(0,s.jsxs)(n.li,{children:["Percentage e.g. ",(0,s.jsx)("code",{className:"dnb-code",children:(0,s.jsx)(t.Z,{percent:!0,value:"12.34"})})]}),"\n",(0,s.jsxs)(n.li,{children:["Phone numbers e.g. ",(0,s.jsx)("code",{className:"dnb-code",children:(0,s.jsx)(t.Z,{phone:!0,value:"004799999999"})})]}),"\n",(0,s.jsxs)(n.li,{children:["Bank account number e.g. ",(0,s.jsx)("code",{className:"dnb-code",children:(0,s.jsx)(t.Z,{ban:!0,value:"20001234567"})})]}),"\n",(0,s.jsxs)(n.li,{children:["National identification number e.g. ",(0,s.jsx)("code",{className:"dnb-code",children:(0,s.jsx)(t.Z,{nin:!0,value:"18089212345"})})]}),"\n",(0,s.jsxs)(n.li,{children:["Organization number e.g. ",(0,s.jsx)("code",{className:"dnb-code",children:(0,s.jsx)(t.Z,{org:!0,value:"123456789"})})]}),"\n",(0,s.jsxs)(n.li,{children:["Compact (short) numbers e.g. ",(0,s.jsx)("code",{className:"dnb-code",children:(0,s.jsx)(t.Z,{compact:!0,value:"12345678",decimals:1})})]}),"\n",(0,s.jsxs)(n.li,{children:["Compact (long) currency e.g. ",(0,s.jsx)("code",{className:"dnb-code",children:(0,s.jsx)(t.Z,{compact:"long",currency:!0,currency_display:"name",value:"12345678",decimals:1})})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{children:"Defaults"}),"\n",(0,s.jsxs)(n.p,{children:["It uses the browser APIs ",(0,s.jsx)(n.code,{children:"number.toLocaleString"})," or ",(0,s.jsx)(n.code,{children:"Intl.NumberFormat.format"})," under the hood. As well as some custom formatter. The locale defaults to:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Locale: ",(0,s.jsx)(n.code,{children:"nb-NO"})]}),"\n",(0,s.jsxs)(n.li,{children:["Currency: ",(0,s.jsx)(n.code,{children:"NOK"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{children:"Norwegian kroner"}),"\n",(0,s.jsxs)(n.p,{children:["When the currency format is set to ",(0,s.jsx)(n.code,{children:'currency_display="name"'}),', the currency will be displayed as "kroner" instead of "Norwegian kroner".']}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Norwegian currency: ",(0,s.jsx)("code",{className:"dnb-code",children:(0,s.jsx)(t.Z,{currency:!0,currency_display:"name",value:"1234.90"})})]}),"\n",(0,s.jsxs)(n.li,{children:["Swedish currency: ",(0,s.jsx)("code",{className:"dnb-code",children:(0,s.jsx)(t.Z,{currency:"SEK",currency_display:"name",value:"1234.90"})})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{children:"Not available"}),"\n",(0,s.jsxs)(n.p,{children:["When a number should be displayed, but for some reason is not available to the frontend application, the NumberFormat component will display a single ",(0,s.jsx)(n.strong,{children:"em dash"})," (–) and a screen reader will get a text (Ikke tilgjengelig / Not available)."]}),"\n",(0,s.jsxs)(n.p,{children:["Example: ",(0,s.jsx)(t.Z,{value:"invalid",currency:!0})]}),"\n",(0,s.jsx)(n.h2,{children:"Decimals"}),"\n",(0,s.jsxs)(n.p,{children:["When the amount of wanted ",(0,s.jsx)(n.code,{children:"decimals"})," is set as a property, but the given value contains decimals that exceeds the wanted ",(0,s.jsx)(n.code,{children:"decimals"}),", the output value will get rounded up or down. Use ",(0,s.jsx)(n.code,{children:"omit_rounding"})," if you need to hard-cut decimals from the displayed value."]}),"\n",(0,s.jsx)(n.h2,{children:"Provider"}),"\n",(0,s.jsxs)(n.p,{children:["You can send down the ",(0,s.jsx)(n.code,{children:"locale"})," as an application-wide property (Context). More info about the ",(0,s.jsx)(n.a,{href:"/uilib/components/number-format/provider",children:"provider and locale usage"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import Provider from '@dnb/eufemia/shared/Provider'\n\nrender(\n  <Provider locale=\"en-GB\" NumberFormat={{ currency_display: 'code' }}>\n    <MyApp>\n      text <NumberFormat>123</NumberFormat> table etc.\n    </MyApp>\n  </Provider>,\n)\n"})}),"\n",(0,s.jsx)(n.h2,{children:"NumberFormat Hook"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Heads up:"})," If you do so, keep in mind, you will have to ensure all the accessibility enhancements the component offers. For that you can use the ",(0,s.jsx)(n.code,{children:"aria"})," field:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import Provider from '@dnb/eufemia/shared/Provider'\nimport useNumberFormat from '@dnb/eufemia/components/number-format/useNumberFormat'\n\nfunction Component() {\n  // By using returnAria you get an object\n  const { number, aria } = useNumberFormat(12345678.9, {\n    // Props are inherited from the Eufemia Provider and the NumberFormat object\n    returnAria: true,\n  })\n\n  return (\n    <span>\n      <span aria-hidden>{number}</span>\n      <span className=\"dnb-sr-only\">{aria}</span>\n    </span>\n  )\n}\n\nrender(\n  <Provider locale=\"en-GB\" NumberFormat={{ currency: 'EUR' }}>\n    <Component />\n  </Provider>,\n)\n"})}),"\n",(0,s.jsx)(n.h2,{children:"Formatting only (interceptor)"}),"\n",(0,s.jsxs)(n.p,{children:["You can use the ",(0,s.jsx)(n.code,{children:"format"})," method without using a React Component or React Hook."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Heads up:"})," If you do so, keep in mind, you will have to ensure all the accessibility enhancements the component offers. For that you can use the ",(0,s.jsx)(n.code,{children:"aria"})," field:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { format } from '@dnb/eufemia/components/number-format/NumberUtils'\n\n// By using returnAria you get an object\nconst { number, aria } = format(12345678.9, {\n  locale: 'nb-NO', // not inherited\n  currency: true,\n  returnAria: true,\n})\n\n// Basic formatting\nconst number = format(1234)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"format"})," method will accept the same ",(0,s.jsx)(n.a,{href:"/uilib/components/number-format/properties",children:"properties"})," as the component."]}),"\n",(0,s.jsx)(n.h3,{children:"Interceptor helpers"}),"\n",(0,s.jsxs)(n.p,{children:["Also, you may check out the related tests ",(0,s.jsx)(n.strong,{children:"NumberFormat > cleanNumber"})," in the source code to find more examples."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { cleanNumber } from '@dnb/eufemia/components/number-format/NumberUtils'\n\nconst string = cleanNumber('prefix -12 345,678 suffix') // returns -12345.678\nconst string = cleanNumber('prefix -12.345,678 suffix') // returns -12345.678\n"})}),"\n",(0,s.jsx)(n.h3,{children:"Element and style"}),"\n",(0,s.jsxs)(n.p,{children:["The number component is style-independent, so it has no visual styles. By default, a ",(0,s.jsx)(n.code,{children:"<span>"})," is used (with ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@counter-style/speak-as",children:"speak-as: numbers"}),", even the support is very low). But you can easily change the element type by providing something else to ",(0,s.jsx)(n.code,{children:'element="div"'})," property."]}),"\n",(0,s.jsx)(n.h2,{children:"Accessibility"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"NVDA"})," has also ",(0,s.jsx)(n.a,{href:"https://github.com/nvaccess/nvda/issues/8874",children:"issues"})," on reconciling the ",(0,s.jsx)(n.code,{children:"lang"})," attribute, this makes it hard to have a solid and good solution for reading numbers. VoiceOver on desktop makes a perfect job there."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VoiceOver"})," on mobile devices (iOS) only supports numbers read out properly to a maximum of ",(0,s.jsx)(n.code,{children:"99,999.00"}),". On amounts above this value, VO reads numbers digit by digit."]}),"\n",(0,s.jsxs)(n.p,{children:["To enhance the ",(0,s.jsx)(n.strong,{children:"Copy & Paste"})," experience of copying numbers into other applications (Excel), you may use the ",(0,s.jsx)(n.code,{children:"clean_copy_value"})," property – it will then provide a second number, without thousand separators and to have a comma/dot (depending on the locale) as the decimal separator. This number is not visible, but will be used when selecting & copying the whole number on the first click to the system clipboard."]}),"\n",(0,s.jsxs)(n.p,{children:["You can enable this feature on all your NumberFormat components by using the ",(0,s.jsx)(n.code,{children:"Provider"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import { Provider } from '@dnb/eufemia/shared'\n\nrender(\n  <Provider value={{ NumberFormat: { clean_copy_value: true } }}>\n    <YourApp />\n  </Provider>,\n)\n"})}),"\n",(0,s.jsx)(n.h3,{children:"More details"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Screen readers require numbers to be formatted properly in order to be read as numbers. The ",(0,s.jsx)(n.strong,{children:"NumberFormat"})," component will help to achieve this requirement."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["So, numbers are formatted differently for screen readers than the visual number. And numbers also get assigned a ",(0,s.jsx)(n.code,{children:"lang"})," attribute, so the screen reader knows what language (locale) should be used on the particular number, even if the text around does not correspond to the same language."]}),"\n",(0,s.jsx)(n.h3,{children:"Sources"}),"\n",(0,s.jsxs)(n.p,{children:["Eufemia is basing their number formats on both the ",(0,s.jsx)(n.a,{href:"https://lovdata.no/forskrift/2004-02-16-426/%C2%A716",children:"Norwegian authority"})," and ",(0,s.jsx)(n.a,{href:"https://www.sprakradet.no/sprakhjelp/Skriveregler/Dato",children:"Språkradet"}),", and currency is based on ",(0,s.jsx)(n.a,{href:"https://www.sprakradet.no/svardatabase/sporsmal-og-svar/kronebelop-rekkjefolgje-komma-og-strek/",children:"guidelines"})," from Språkrådet. Wikipedia has more info on world wide ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Decimal_separator",children:"decimal separator"})," usage."]}),"\n",(0,s.jsxs)(n.p,{children:["For international number formatting, we use the ",(0,s.jsx)(n.a,{href:"https://ec.europa.eu/info/sites/default/files/styleguide_english_dgt_en.pdf",children:"EU Style Guide"}),"."]}),"\n",(0,s.jsx)(n.h2,{children:"Node.js and SSR usage"}),"\n",(0,s.jsxs)(n.p,{children:["If you run the component or ",(0,s.jsx)(n.code,{children:"format"})," function in ",(0,s.jsx)(n.a,{href:"https://nodejs.org",children:"Node.js"})," you have to include ",(0,s.jsx)(n.a,{href:"https://nodejs.org/api/intl.html",children:"ICU"})," data in order to display other locales than en-GB. You can do this by:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["installing ",(0,s.jsx)(n.code,{children:"npm i full-icu"})]}),"\n",(0,s.jsxs)(n.li,{children:["and call node (or jest) with an environment variable pointing to the package: ",(0,s.jsx)(n.code,{children:"NODE_ICU_DATA=./node_modules/full-icu node ..."})]}),"\n",(0,s.jsxs)(n.li,{children:["after a Node.js version upgrade you may have to run ",(0,s.jsx)(n.code,{children:"npm rebuild"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{children:"Known issues"}),"\n",(0,s.jsx)(n.p,{children:"Edge Browser on Windows 10 is converting numbers automatically to followable links. This makes the experience on NVDA bad, as it reads also the new, unformatted link number."}),"\n",(0,s.jsxs)(n.p,{children:["You can ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/x-ms-format-detection",children:"disable this behavior"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<html x-ms-format-detection="none">\n  ...\n</html>\n'})}),"\n",(0,s.jsx)(n.h3,{children:"Lighthouse and axe-core"}),"\n",(0,s.jsxs)(n.p,{children:["In order to enhance the UX while using a screen reader, the NumberFormat component is using a role called ",(0,s.jsx)(n.code,{children:'role="text"'}),". This allows the screen reader to read particular numbers within the context, without interrupting the flow while reading paragraphs."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://developers.google.com/web/tools/lighthouse",children:"Lighthouse"})," is using ",(0,s.jsx)(n.a,{href:"https://developers.google.com/web/tools/lighthouse",children:"axe-core"})," under the hood. Older versions of ",(0,s.jsx)(n.code,{children:"axe-core"})," is allowing us to use ",(0,s.jsx)(n.code,{children:'role="text"'})," only within no focusable descendants. But because the NumberFormat component also includes a ",(0,s.jsx)(n.strong,{children:"Copy & Paste"})," feature, it uses ",(0,s.jsx)(n.code,{children:'tabindex="-1"'})," which allows JavaScript to focus the descendant DOM Element."]})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},68742:function(e,n,r){r.d(n,{Z:function(){return j}});var s=r(81665),o=r(2784),t=r(72779),l=r.n(t),i=r(28952),a=r(37339),c=r(80945),d=r(11507),u=r(2045),h=r(59525),m=r(42020),p=r(90595),x=r(41672),b=r(52322);let j=function(e){function n(n){var r;return(r=e.call(this,n)||this).shortcutHandler=()=>{var e,n;(0,x.sG)({value:r.cleanedValue,label:null===(e=r.context.getTranslation(r.props))||void 0===e||null===(n=e.NumberFormat)||void 0===n?void 0:n.clipboard_copy}).run(r._ref.current)},r.onBlurHandler=()=>{r.setState({selected:!1})},r.onContextMenuHandler=()=>{(0,c.qF)()||(clearTimeout(r._selectAllTimeout),r._selectAllTimeout=setTimeout((()=>{r.setFocus()}),1))},r.onClickHandler=()=>{!(0,a.oA)(r.props.selectall)&&!(0,a.oA)(r.props.always_selectall)||(0,c.qF)()||r.setFocus()},r.onMouseEnter=()=>{r.setState({hover:!0})},r.onMouseLeave=()=>{r.setState({hover:!1})},r._ref=o.createRef(),r._selectionRef=o.createRef(),r._id=n.tooltip?n.id||(0,a.Xo)():void 0,r.state={selected:!1,omitCurrencySign:!1,hover:!1},r}(0,s.Z)(n,e);var r=n.prototype;return r.componentDidMount=function(){clearTimeout(this._selectAllTimeout),c.cj&&!f&&(f=!0,(0,x.Lx)())},r.componentWillUnmount=function(){var e;null===(e=this.outsideClick)||void 0===e||e.remove()},r.setFocus=function(){this.setState({selected:!0},(()=>{var e;null===(e=this._selectionRef.current)||void 0===e||e.focus(),this.selectAll(),(0,a.oA)(this.props.copy_selection)||(this.outsideClick=(0,a.J3)(this._ref.current,this.onBlurHandler))}))},r.selectAll=function(){try{const e=this._selectionRef.current||this._ref.current;if(e){const n=window.getSelection(),r=document.createRange();r.selectNodeContents(e),n.removeAllRanges(),n.addRange(r)}}catch(e){(0,c.ZK)(e)}},r.runFix=function(e,n){return"function"==typeof e&&(e=e()),o.isValidElement(e)?o.cloneElement(e,{className:l()(e.props.className,n)}):(0,b.jsx)("span",{className:n,children:e})},r.render=function(){const e=(0,d.$)(this.props,n.defaultProps,this.context.getTranslation(this.props).NumberFormat,this.context.NumberFormat),{id:r,value:s,prefix:o,suffix:t,children:i,currency:c,currency_display:j,currency_position:f,compact:g,ban:y,nin:v,phone:_,org:N,percent:w,link:k,tooltip:F,skeleton:A,options:C,locale:S,decimals:P,omit_rounding:T,clean:B,selectall:Z,copy_selection:E,clean_copy_value:M,srLabel:H,element:O,class:D,className:U,...L}=e;let R=L,I=k,V=s;null===V&&null!==i&&(V=i);const W={locale:S,currency:c,currency_display:j,currency_position:f,omit_currency_sign:this.state.omitCurrencySign,compact:g,ban:y,nin:v,phone:_,org:N,percent:w,decimals:P,omit_rounding:(0,a.oA)(T),options:C,clean:(0,a.oA)(B),clean_copy_value:(0,a.oA)(M),returnAria:!0},$=(0,a.l7)(!0,{locale:null,currency:null},this.context);$&&($.locale&&!S&&(W.locale=$.locale),$.currency&&(0,a.oA)(c)&&(W.options=W.options?{...W.options}:{},W.options.currency=$.currency));let{cleanedValue:q,number:G,aria:Y,locale:K}=(0,x.WU)(V,W);this.cleanedValue=q,o&&(G=(0,b.jsxs)(b.Fragment,{children:[this.runFix(o,"dnb-number-format__prefix")," ",G]}),Y=String(`${(0,a.F4)(this.runFix(o,"dnb-number-format__prefix"))} ${Y}`)),t&&(G=(0,b.jsxs)(b.Fragment,{children:[G," ",this.runFix(t,"dnb-number-format__suffix")]}),Y=`${Y} ${(0,a.F4)(this.runFix(t,"dnb-number-format__suffix"))}`),F&&(R=(0,m.VL)(R));const z={lang:K,ref:this._ref,className:l()("dnb-number-format",U,D,((0,a.oA)(c)||"string"==typeof c)&&"dnb-number-format--currency",(0,a.oA)(Z)&&"dnb-number-format--selectall",this.state.selected&&"dnb-number-format--selected",I&&"dnb-anchor",(0,u.HU)(this.props)),onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,...R};z.role="text";const J={};if(((0,a.oA)(Z)||(0,a.oA)(E))&&(J.onClick=this.onClickHandler,J.onContextMenu=this.onContextMenuHandler),(0,a.L_)(this.props,z),(0,h.rZ)(z,A,this.context),I)return(0,a.oA)(I)&&(I="tel"),(0,b.jsx)("a",{href:`${I}:${G}`,...z,children:G});const X=O;return(0,b.jsxs)(X,{...z,children:[(0,b.jsx)("span",{className:l()("dnb-number-format__visible",(0,h.BD)("font",A,this.context)),"aria-hidden":!this.state.hover,...J,children:G}),(0,b.jsx)("span",{className:"dnb-sr-only","data-text":H?`${(0,a.F4)(H)} ${Y}`:Y}),(0,a.oA)(E)&&(0,b.jsx)("span",{className:"dnb-number-format__selection dnb-no-focus",ref:this._selectionRef,tabIndex:-1,onBlur:this.onBlurHandler,onCopy:this.shortcutHandler,"aria-hidden":!0,children:this.state.selected&&q}),F&&(0,b.jsx)(p.Z,{id:this._id+"-tooltip",targetElement:this._ref,tooltip:F})]})},n}(o.PureComponent);j.contextType=i.Z,j.defaultProps={id:null,value:null,locale:null,prefix:null,suffix:null,currency:null,currency_display:null,currency_position:null,compact:null,ban:null,nin:null,phone:null,org:null,percent:null,link:null,options:null,decimals:null,selectall:!0,always_selectall:!1,copy_selection:!0,clean_copy_value:!1,omit_rounding:null,clean:null,srLabel:null,element:"span",tooltip:null,skeleton:null,class:null,className:null,children:null};let f=!1;j._supportsSpacingProps=!0}}]);
//# sourceMappingURL=component---src-docs-uilib-components-number-format-info-mdx-c7372c4404d0d249784c.js.map