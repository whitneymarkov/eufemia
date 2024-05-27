"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[33665],{79197:function(n,e,t){t.r(e);var a=t(52322),r=t(45392),i=t(96808);function o(n){const e=Object.assign({h1:"h1",p:"p"},(0,r.ah)(),n.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{children:"Case Demo 2"}),"\n",(0,a.jsx)(e.p,{children:"Below, you can extend the demo code."}),"\n",(0,a.jsx)(i.T,{})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,a.jsx)(e,Object.assign({},n,{children:(0,a.jsx)(o,n)})):o(n)}},96808:function(n,e,t){t.d(e,{T:function(){return o},X:function(){return i}});var a=t(75333),r=t(52322);const i=()=>(0,r.jsx)(a.Z,{hideCode:!0,noInline:!0,children:'const Output = () => {\n  const { data } = Form.useData(\'example-form\', {\n    website: \'www.dnb.no\',\n  })\n  return (\n    <Section\n      element="output"\n      innerSpace\n      backgroundColor="sand-yellow"\n      top\n      bottom="large"\n    >\n      <Code>\n        <pre>{JSON.stringify(data, null, 2)}</pre>\n      </Code>\n    </Section>\n  )\n}\nconst MyForm = () => {\n  // Routers like "react-router" are supported as well\n  Wizard.useQueryLocator(\'example-wizard\')\n  return (\n    <Form.Handler\n      id="example-form"\n      onSubmit={(data) => console.log(\'onSubmit\', data)}\n    >\n      <Wizard.Container id="example-wizard" top>\n        <Wizard.Step title="Bedriftsopplysninger">\n          <Form.MainHeading>Bedriftsopplysninger</Form.MainHeading>\n\n          <Card stack>\n            <Field.OrganizationNumber\n              path="/companyOrganizationNumber"\n              required\n            />\n            <Field.Name.Company path="/companyName" required />\n            <Field.String\n              path="/companyAddress"\n              label="Forretningsadresse (NB! Ikke postadresse)"\n              required\n            />\n            <Field.PostalCodeAndCity\n              postalCode={{\n                path: \'/companyPostalCode\',\n              }}\n              city={{\n                path: \'/companyCity\',\n              }}\n            />\n            <Field.Selection\n              variant="radio"\n              path="/postalAddressSelect"\n              label="Postadresse (ønsket sted for tilsendt post)"\n            >\n              <Field.Option\n                value="companyAddress"\n                title="Samme som forretningsadresse"\n              />\n              <Field.Option value="other" title="Annet" />\n            </Field.Selection>\n            <Field.Selection\n              variant="radio"\n              path="/hqAddress"\n              label="Hovedkontoradresse"\n            >\n              <Field.Option\n                value="companyAddress"\n                title="Samme som forretningsadresse"\n              />\n              <Field.Option\n                value="postalAddress"\n                title="Samme som postadresse"\n              />\n              <Field.Option value="other" title="Annet" />\n            </Field.Selection>\n            <Field.SelectCountry\n              path="/countryOfEstablishment"\n              label="Etableringsland"\n              required\n            />\n          </Card>\n\n          <Card stack>\n            <Field.PhoneNumber\n              path="/phoneNumber"\n              label="Telefon/mobilnummer"\n              required\n            />\n            <Field.Email path="/email" required />\n            <Field.String\n              path="/website"\n              label="Nettstedsadresse (valgfritt)"\n            />\n          </Card>\n\n          <Wizard.Buttons />\n        </Wizard.Step>\n\n        <Wizard.Step title="Kontaktperson">\n          <Form.MainHeading>Profile</Form.MainHeading>\n\n          <Card stack>\n            <Form.SubHeading>More information</Form.SubHeading>\n\n            <Field.NationalIdentityNumber path="/ssn" />\n            <Field.Email path="/email" />\n            <Field.PhoneNumber path="/phone" />\n          </Card>\n\n          <Wizard.Buttons />\n        </Wizard.Step>\n\n        <Wizard.Step title="Bedriftens virksomhet">\n          <em>Bedriftens virksomhet</em>\n        </Wizard.Step>\n\n        <Wizard.Step title="Bruk av DNBs tjenester">\n          <em>Bruk av DNBs tjenester</em>\n        </Wizard.Step>\n\n        <Wizard.Step title="Inntekt og egenkapital">\n          <em>Inntekt og egenkapital</em>\n        </Wizard.Step>\n\n        <Wizard.Step title="Skatterapportering">\n          <em>Skatterapportering</em>\n        </Wizard.Step>\n\n        <Wizard.Step title="Eierskap og kontroll">...</Wizard.Step>\n\n        <Wizard.Step title="Roller i bedriften">...</Wizard.Step>\n\n        <Wizard.Step title="Oppsummering">\n          <Form.MainHeading>Profile</Form.MainHeading>\n\n          <Card stack>\n            <Flex.Container>\n              <Value.String path="/firstName" />\n              <Value.String path="/lastName" />\n            </Flex.Container>\n\n            <Value.NationalIdentityNumber path="/ssn" />\n            <Value.Email path="/email" />\n            <Value.PhoneNumber path="/phone" />\n          </Card>\n\n          <Form.ButtonRow>\n            <Wizard.Buttons />\n            <Form.SubmitButton />\n          </Form.ButtonRow>\n        </Wizard.Step>\n\n        <Wizard.Step title="Kvittering">Kvittering...</Wizard.Step>\n      </Wizard.Container>\n    </Form.Handler>\n  )\n}\nrender(\n  <>\n    <MyForm />\n    <Output />\n  </>,\n)\n'});function o(){return(0,r.jsx)(a.Z,{hideCode:!0,noInline:!0,children:'const Output = () => {\n  const { data } = Form.useData(\'pizza-demo\', {})\n  return (\n    <Section\n      element="output"\n      innerSpace\n      backgroundColor="sand-yellow"\n      top\n      bottom="large"\n    >\n      <Code>\n        <pre>{JSON.stringify(data, null, 2)}</pre>\n      </Code>\n    </Section>\n  )\n}\nconst MyForm = () => {\n  // Routers like "react-router" are supported as well\n  Wizard.useQueryLocator(\'my-wizard\')\n  const { summaryTitle } = Form.useLocale().Step\n  return (\n    <Provider locale="en-GB">\n      <Form.Handler\n        onSubmit={(data) => console.log(\'onSubmit\', data)}\n        id="pizza-demo"\n        sessionStorageId="pizza-form"\n      >\n        <Wizard.Container id="my-wizard">\n          <Wizard.Step title="Which pizza do you want?">\n            <Form.MainHeading>Which pizza do you want?</Form.MainHeading>\n\n            <Card stack>\n              <Form.SubHeading>Your Pizza</Form.SubHeading>\n              <Field.Selection\n                variant="button"\n                label="Choose a flavour"\n                path="/flavour"\n                required\n              >\n                <Field.Option value="pepperoni" title="Pepperoni" />\n                <Field.Option value="margarita" title="Margarita" />\n                <Field.Option value="parma" title="Parma" />\n              </Field.Selection>\n            </Card>\n\n            <Card stack>\n              <Form.SubHeading>Allergies</Form.SubHeading>\n              <Field.Boolean\n                label="Do you have any allergies?"\n                path="/hasAllergies"\n                variant="buttons"\n                required\n              />\n\n              <Form.Visibility pathTrue="/hasAllergies" animate>\n                <Field.String\n                  label="Write down your allergies"\n                  path="/allergies"\n                  required // only if visible 👌\n                />\n              </Form.Visibility>\n            </Card>\n\n            <Wizard.Buttons />\n          </Wizard.Step>\n\n          <Wizard.Step title="Delivery address">\n            <Form.MainHeading>Delivery address</Form.MainHeading>\n\n            <Card stack>\n              <Form.SubHeading>Your name</Form.SubHeading>\n              <Field.Name.First path="/firstName" required />\n              <Field.Name.Last path="/lastName" required />\n            </Card>\n\n            <Card stack>\n              <Form.SubHeading>Your address</Form.SubHeading>\n\n              <Field.Composition width="large">\n                <Field.String\n                  label="Street"\n                  width="stretch"\n                  path="/streetName"\n                  required\n                />\n                <Field.Number\n                  label="Nr."\n                  width="small"\n                  path="/streetNr"\n                  required\n                />\n              </Field.Composition>\n\n              <Field.PostalCodeAndCity\n                postalCode={{\n                  required: true,\n                  path: \'/postalCode\',\n                }}\n                city={{\n                  required: true,\n                  path: \'/city\',\n                }}\n              />\n            </Card>\n\n            <Wizard.Buttons />\n          </Wizard.Step>\n\n          <Wizard.Step title={summaryTitle}>\n            <Form.MainHeading>Summary</Form.MainHeading>\n\n            <Card stack>\n              <Value.SummaryList>\n                <Value.String label="My flavour" path="/flavour" />\n                <Value.Boolean\n                  label="I have allergies"\n                  path="/hasAllergies"\n                />\n                <Value.String label="My allergies" path="/allergies" />\n              </Value.SummaryList>\n            </Card>\n\n            <Card stack>\n              <Value.SummaryList layout="grid">\n                <Value.Name.First path="/firstName" />\n                <Value.Name.Last path="/lastName" />\n\n                <Value.String label="Street" path="/streetName" />\n                <Value.Number label="Nr." path="/streetNr" />\n\n                <Value.String label="Postal Code" path="/postalCode" />\n                <Value.String label="City" path="/city" />\n              </Value.SummaryList>\n            </Card>\n\n            <Form.ButtonRow>\n              <Wizard.Buttons />\n              <Form.SubmitButton />\n            </Form.ButtonRow>\n          </Wizard.Step>\n        </Wizard.Container>\n      </Form.Handler>\n\n      <Output />\n    </Provider>\n  )\n}\nrender(<MyForm />)\n'})}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-demo-cases-casedemo-2-mdx-01e31ddf7d1886376098.js.map