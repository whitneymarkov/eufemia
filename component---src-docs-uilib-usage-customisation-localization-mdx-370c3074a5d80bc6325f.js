"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[28925],{56700:function(n,e,r){r.r(e);var o=r(52322),s=r(45392);function i(n){const e=Object.assign({h1:"h1",p:"p",code:"code",ul:"ul",li:"li",h2:"h2",pre:"pre",a:"a",h3:"h3",ol:"ol"},(0,s.ah)(),n.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{children:"Localization"}),"\n",(0,o.jsxs)(e.p,{children:["The default constants are defined in the ",(0,o.jsx)(e.code,{children:"/shared/defaults.js"})," file."]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["The default locale of all components texts is: ",(0,o.jsx)(e.code,{children:"nb-NO"}),"."]}),"\n",(0,o.jsxs)(e.li,{children:["The default currency is: ",(0,o.jsx)(e.code,{children:"NOK"})]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{children:"Supported component translations"}),"\n",(0,o.jsx)(e.p,{children:"Eufemia components comes with a set of default translated strings."}),"\n",(0,o.jsx)(e.p,{children:"You can easily change one, some or all of them by using a React provider – the Eufemia Provider."}),"\n",(0,o.jsx)(e.p,{children:"Here are the default strings located:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:"import enGB from '@dnb/eufemia/shared/locales/en-GB'\nimport nbNO from '@dnb/eufemia/shared/locales/nb-NO'\n"})}),"\n",(0,o.jsx)(e.h2,{children:"How set the locale"}),"\n",(0,o.jsx)(e.p,{children:"In React based apps, use the shared Eufemia provider:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",children:"import Provider from '@dnb/eufemia/shared/Provider'\n\nconst myLocale = 'en-GB'\n\nrender(\n  <Provider locale={myLocale}>\n    <MyApp>Eufemia components</MyApp>\n  </Provider>,\n)\n"})}),"\n",(0,o.jsxs)(e.p,{children:["For component based locale, you can also make use of the ",(0,o.jsx)(e.code,{children:"lang"})," attribute – if really needed:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",children:'import Provider from \'@dnb/eufemia/shared/Provider\'\n\nrender(\n  <Provider locale="en-GB">\n    <MyApp>\n      <HelpButton lang="nb-NO" />\n    </MyApp>\n  </Provider>,\n)\n'})}),"\n",(0,o.jsx)(e.h2,{children:"How set locale progressively"}),"\n",(0,o.jsx)(e.p,{children:"You can easily enhance or change translated strings progressively:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",children:"import Provider from '@dnb/eufemia/shared/Provider'\n\nrender(\n  <Provider\n    locale=\"nb-NO\"\n    translations={{\n      'nb-NO': {\n        Modal: { close_title: 'Something' },\n      },\n    }}\n  >\n    <MyApp>Eufemia components</MyApp>\n  </Provider>,\n)\n"})}),"\n",(0,o.jsx)(e.h2,{children:"How change the locale during runtime"}),"\n",(0,o.jsxs)(e.p,{children:["You can even change the locale during runtime. Find more info in the ",(0,o.jsx)(e.a,{href:"/uilib/usage/customisation/provider",children:"Provider docs"}),"."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:'import { Field } from \'@dnb/eufemia/extensions/forms\'\nimport Provider from \'@dnb/eufemia/shared/Provider\'\nimport Context from \'@dnb/eufemia/shared/Context\'\n\nconst ChangeLocale = () => {\n  const { setLocale, locale } = React.useContext(Context)\n\n  return (\n    <Field.Selection value={locale} onChange={(value) => setLocale(value)}>\n      <Field.Option value="nb-NO" title="Norsk" />\n      <Field.Option value="en-GB" title="English (GB)" />\n    </Field.Selection>\n  )\n}\n\nrender(\n  <Provider>\n    <MyApp>\n      <ChangeLocale />\n    </MyApp>\n  </Provider>,\n)\n'})}),"\n",(0,o.jsx)(e.h2,{children:"How to combine with other tools"}),"\n",(0,o.jsxs)(e.p,{children:["You can easily combine the locales support it with other translation tools, like ",(0,o.jsx)(e.code,{children:"react-intl"}),"."]}),"\n",(0,o.jsxs)(e.p,{children:["Like, having the Eufemia components strings inside a JSON object/file ",(0,o.jsx)(e.code,{children:"en.json"}),":"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-json",children:'{\n  "Modal.close_title": "Overwrite",\n  "other.string": "{foo} ({bar} of {max})"\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"and use it like this:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",children:"import EufemiaProvider from '@dnb/eufemia/shared/Provider'\nimport nb from './nb.json' // Has to be an JavaScript object\n\nrender(\n  <EufemiaProvider\n    locale=\"nb-NO\"\n    translations={{\n      'nb-NO': nb,\n    }}\n  >\n    <MyApp>Eufemia components</MyApp>\n  </EufemiaProvider>,\n)\n"})}),"\n",(0,o.jsx)(e.h2,{children:"How to use your own translation strings"}),"\n",(0,o.jsxs)(e.p,{children:["You have even the option to extend the strings with your own and use it as an internationalization tool replacement for e.g. ",(0,o.jsx)(e.code,{children:"react-intl"}),"."]}),"\n",(0,o.jsx)(e.h2,{children:"Get the strings from Context"}),"\n",(0,o.jsx)(e.p,{children:"It is possible to use the Eufemia shared Provider for your own project / App localization."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:"import Provider, { Locales } from '@dnb/eufemia/shared/Provider'\n\nconst customTranslation = {\n  // extend the translation\n  'en-GB': {\n    myString: 'Custom string',\n    myGroup: {\n      subString: 'Second string',\n      stringWithArgument: 'String with {myArg}',\n    },\n  },\n}\n\ntype CustomLocales = keyof typeof customTranslation\ntype CustomTranslation = (typeof customTranslation)[CustomLocales]\n\nrender(\n  <Provider translations={customTranslation} locale=\"en-GB\">\n    <MyApp>\n      <MyComponent />\n    </MyApp>\n  </Provider>,\n)\n"})}),"\n",(0,o.jsx)(e.p,{children:"... and consume the strings in your components:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:"import { useTranslation } from '@dnb/eufemia/shared'\n\nfunction MyComponent() {\n  const { myString, myGroup, formatMessage } =\n    useTranslation<CustomTranslation>()\n  return (\n    <>\n      <P>{myString}</P>\n      <P>{myGroup.subString}</P>\n      <P>\n        {formatMessage('myGroup.stringWithArgument', {\n          myArg: 'dynamic-value',\n        })}\n      </P>\n    </>\n  )\n}\n"})}),"\n",(0,o.jsx)(e.h3,{children:"Cascaded string ids support"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["Lets say you have your translation files as JSON object/files ",(0,o.jsx)(e.code,{children:"en.json"}),":"]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-json",children:'{\n  "Modal.close_title": "Overwrite",\n  "my.string": "string {foo}"\n}\n'})}),"\n",(0,o.jsxs)(e.ol,{start:"2",children:["\n",(0,o.jsx)(e.li,{children:"and use it with a React hook like this:"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:"import {\n  useTranslation,\n  Provider as EufemiaProvider,\n} from '@dnb/eufemia/shared'\n\nimport nb from './nb.json'\nimport en from './en.json'\n\nconst MyComponent = () => {\n  const str = useTranslation('my.string', {\n    foo: 'bar',\n  })\n\n  return str\n}\n\nrender(\n  <EufemiaProvider\n    locale=\"nb-NO\"\n    translations={{\n      'nb-NO': nb,\n      'en-GB': en,\n    }}\n  >\n    <MyComponent />\n  </EufemiaProvider>,\n)\n"})}),"\n",(0,o.jsxs)(e.ol,{start:"3",children:["\n",(0,o.jsx)(e.li,{children:"or as a React component:"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:"import {\n  Translation,\n  Provider as EufemiaProvider,\n} from '@dnb/eufemia/shared'\n\nimport nb from './nb.json'\nimport en from './en.json'\n\nrender(\n  <EufemiaProvider\n    locale=\"nb-NO\"\n    translations={{\n      'nb-NO': nb,\n      'en-GB': en,\n    }}\n  >\n    <Translation id=\"my.string\" foo=\"bar\" />\n  </EufemiaProvider>,\n)\n"})}),"\n",(0,o.jsx)(e.h2,{children:"How add new locales"}),"\n",(0,o.jsxs)(e.p,{children:["Create a new file (",(0,o.jsx)(e.code,{children:"sv-SE.js"}),") containing all the strings:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:"export default {\n  'sv-SE': {\n    DatePicker: {\n      submit_button_text: 'OK',\n    },\n    Modal: {\n      close_title: 'Stänga',\n    },\n    Logo: {\n      alt: 'DNB Logo',\n    },\n  },\n}\n"})}),"\n",(0,o.jsx)(e.p,{children:"And add the file, like so:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",children:"import Provider from '@dnb/eufemia/shared/Provider'\nimport customTranslation from './locales/sv-SE'\n\nrender(\n  <Provider translations={customTranslation}>\n    <MyApp>Eufemia components</MyApp>\n  </Provider>,\n)\n"})}),"\n",(0,o.jsx)(e.p,{children:"or add/update the locales during runtime:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-tsx",children:"import Provider from '@dnb/eufemia/shared/Provider'\nimport Context from '@dnb/eufemia/shared/Context'\n\nimport customTranslation from './locales/sv-SE'\n\nconst ChangeLocale = () => {\n  const { update, locale } = React.useContext(Context)\n\n  // Add new locales\n  update({ locales: customTranslation, locale: 'sv-SE' })\n\n  return locale\n}\n\nrender(\n  <Provider>\n    <MyApp>\n      ...\n      <ChangeLocale />\n      ...\n    </MyApp>\n  </Provider>,\n)\n"})})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,o.jsx)(e,Object.assign({},n,{children:(0,o.jsx)(i,n)})):i(n)}}}]);
//# sourceMappingURL=component---src-docs-uilib-usage-customisation-localization-mdx-370c3074a5d80bc6325f.js.map