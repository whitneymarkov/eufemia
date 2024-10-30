"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[78938],{53459:function(e,i,n){n.r(i);var r=n(52322),s=n(45392);function d(e){const i=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",a:"a"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{children:"Change log"}),"\n",(0,r.jsx)(i.p,{children:"Change log for the Eufemia Forms extension."}),"\n",(0,r.jsx)(i.h2,{children:"v10.54"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Deprecated Ajv ",(0,r.jsx)(i.code,{children:"validationRule"})," in ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Form/error-messages/info/#error-messages",children:"FormError"})," and deprecated ",(0,r.jsx)(i.code,{children:"errorMessages"})," keys like ",(0,r.jsx)(i.code,{children:"pattern"})," in favor of Eufemia translation keys like ",(0,r.jsx)(i.code,{children:"Field.errorPattern"}),". For a migration guide, take a look at ",(0,r.jsx)(i.a,{href:"/uilib/about-the-lib/releases/eufemia/v11-info/#forms-error-handling",children:"release notes for the future major release, v11"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/about-fields/#empty-value",children:"docs"})," about ",(0,r.jsx)(i.code,{children:"emptyValue"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.code,{children:"transformData"})," to the ",(0,r.jsx)(i.code,{children:"onSubmit"})," event listener of ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Form/Handler/",children:"Form.Handler"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.code,{children:"onDone"}),", ",(0,r.jsx)(i.code,{children:"onCancel"})," and ",(0,r.jsx)(i.code,{children:"onEdit"})," events to ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Form/Section/",children:"Form.Section"})," containers."]}),"\n",(0,r.jsxs)(i.li,{children:["Updated country names in list of countries used in ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/feature-fields/SelectCountry/",children:"Field.SelectCountry"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Fixed so ",(0,r.jsx)(i.code,{children:"decimalLimit={0}"})," together with ",(0,r.jsx)(i.code,{children:"currency"})," in ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/base-fields/Number/",children:"Field.Number"}),", and ",(0,r.jsx)(i.code,{children:"decimalLimit={0}"})," in ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/feature-fields/Currency/",children:"Field.Currency"}),", will not allow input of decimals."]}),"\n",(0,r.jsxs)(i.li,{children:["Fixed so it's possible to render multiple (combined) Ajv errors with translated messages, in ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/create-component/FieldBlock/",children:"FieldBlock"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Fixed so ",(0,r.jsx)(i.code,{children:"onBlurValidator"})," only runs when no other errors(like required, etc.) are present, in ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/create-component/useFieldProps/",children:"useFieldProps"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Fixed so ",(0,r.jsx)(i.code,{children:'autocomplete="off"'})," is correctly set when setting ",(0,r.jsx)(i.code,{children:"autoComplete={false}"})," in ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Form/Handler/",children:"Form.Handler"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Fixed alignment of status message (error, warning, info) in ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Wizard/",children:"Wizard"}),"."]}),"\n",(0,r.jsx)(i.li,{children:"Fixed schema validation for required paths with matching name."}),"\n",(0,r.jsxs)(i.li,{children:["Fixed correct sorting of countries in ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/feature-fields/SelectCountry/",children:"Field.SelectCountry"}),"."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{children:"v10.53"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Added validation of Norwegian bankaccount numbers to ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/feature-fields/BankAccountNumber/",children:"Field.BankAccountNumber"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Form/useTranslation/",children:"Form.useTranslation"})," that returns the translations for the current locale."]}),"\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.code,{children:"renderMessage"})," function in ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Form/useTranslation/",children:"Form.useTranslation"})," to render a string with line-breaks."]}),"\n",(0,r.jsx)(i.li,{children:"Added console warning when a field path is declared more than one time."}),"\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.code,{children:"country"})," property in ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/feature-fields/PostalCodeAndCity/",children:"Field.PostalCodeAndCity"}),", to support different countries than only Norway."]}),"\n",(0,r.jsxs)(i.li,{children:["Fixed UI alignments in ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/blocks/ChildrenWithAge/",children:"Block.ChildrenWithAge"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Fixed so ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Iterate/Array/",children:"Iterate.Array"})," is in sync with the data context, and call ",(0,r.jsx)(i.code,{children:"onChange"})," when ",(0,r.jsx)(i.code,{children:"countPath"})," changes."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{children:"v10.52"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.code,{children:"transformLabel"})," to all ",(0,r.jsx)(i.code,{children:"Value.*"})," components."]}),"\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.code,{children:"bubbleValidation"})," to ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Form/Isolation/",children:"Form.Isolation"})," and ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Iterate/PushContainer/",children:"Iterate.PushContainer"}),", to prevent the form from being submitted when there are fields with errors."]}),"\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/feature-fields/NationalIdentityNumber/info/#createminimumagevalidator",children:"createMinimumAgeValidator"})," in ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/feature-fields/NationalIdentityNumber/",children:"Field.NationalIdentityNumber"})," to make a customizable minimum age validator."]}),"\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Form/useSnapshot/",children:"Form.useSnapshot"})," hook to handle snapshots of data."]}),"\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.code,{children:"id"})," to ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Wizard/Step/",children:"Wizard.Step"})," for when using dynamic steps with ",(0,r.jsx)(i.code,{children:"activeWhen"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Iterate/ItemNo/",children:"Iterate.ItemNo"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Added support for ",(0,r.jsx)(i.code,{children:"Form.SubmitConfirmation"})," in ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Wizard/",children:"Wizard"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.code,{children:"isolatedData"})," to ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Iterate/PushContainer/",children:"Iterate.PushContainer"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Added displaying phone numbers in ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Value/PhoneNumber/",children:"Value.PhoneNumber"})," using prefix ",(0,r.jsx)(i.code,{children:"+"})," instead of ",(0,r.jsx)(i.code,{children:"00"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Added support for ",(0,r.jsx)(i.code,{children:"defaultValue"})," (and ",(0,r.jsx)(i.code,{children:"value"}),") for fields used in ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Iterate/Array/",children:"Iterate.Array"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Added support for ",(0,r.jsx)(i.code,{children:"isValid"})," in ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Form/Visibility/",children:"Form.Visibility"})," for showing content based on the validation of a field."]}),"\n",(0,r.jsxs)(i.li,{children:["Removed the internal ",(0,r.jsx)(i.code,{children:"pattern"})," in ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/feature-fields/OrganizationNumber/",children:"Field.OrganizationNumber"}),", rather using the internal validator."]}),"\n",(0,r.jsxs)(i.li,{children:["Removed the internal ",(0,r.jsx)(i.code,{children:"pattern"})," in ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/feature-fields/NationalIdentityNumber/",children:"Field.NationalIdentityNumber"}),", rather using the internal validator."]}),"\n",(0,r.jsxs)(i.li,{children:["Fixed so ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Form/clearData/",children:"Form.clearData"})," works in ",(0,r.jsx)(i.code,{children:"React.StrictMode"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Fixed use of unpolyfilled structuredClone in ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Form/useData/",children:"Form.useData"})," hook."]}),"\n",(0,r.jsxs)(i.li,{children:["Fixed so ",(0,r.jsx)(i.code,{children:"onBlurValidator"})," works with ",(0,r.jsx)(i.code,{children:"validateInitially"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Fixed so ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Iterate/EditContainer/",children:"Iterate.EditContainer"})," keeps open when falsy value or empty object was given as the iterate value."]}),"\n",(0,r.jsxs)(i.li,{children:["Fixed so all errors on every value change is displayed when using exported validators from ",(0,r.jsx)(i.code,{children:"exportValidators"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Fixed so ",(0,r.jsx)(i.code,{children:"exportValidators"})," is not called when not exported as an array."]}),"\n",(0,r.jsxs)(i.li,{children:["Fixed so ",(0,r.jsx)(i.code,{children:"emptyValue"})," is set in the data context when defined."]}),"\n",(0,r.jsxs)(i.li,{children:["Fixed so ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/feature-fields/SelectCountry/",children:"Field.SelectCountry"})," has a fallback locale (nb-NO)."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{children:"v10.51"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.code,{children:"rounding"})," property with support for ",(0,r.jsx)(i.code,{children:"half-even"})," rounding to ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Value/Number/",children:"Value.Number"})," and ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Value/Currency/",children:"Value.Currency"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.code,{children:"inheritLabel"})," and ",(0,r.jsx)(i.code,{children:"inheritVisibility"})," to ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Value/SummaryList/",children:"Value.SummaryList"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.code,{children:"setFieldStatus"})," in ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Form/useValidation/",children:"Form.useValidation"})," to handle/set the status (error) of a single field."]}),"\n",(0,r.jsxs)(i.li,{children:["Added displaying of ",(0,r.jsx)(i.code,{children:"hasChildren"})," value in summary of ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/blocks/ChildrenWithAge/",children:"Block.ChildrenWithAge"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.code,{children:"range"})," for date range functionality in ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/feature-fields/Date/",children:"Field.Date"}),", and ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Value/Date/",children:"Value.Date"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Form/SubmitConfirmation/",children:"Form.SubmitConfirmation"})," to confirm a submit during or before sending."]}),"\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Value/Provider/",children:"Value.Provider"})," to propagate value props down to ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Value/components/",children:"Value components"})," (e.g. ",(0,r.jsx)(i.code,{children:"inheritVisibility"}),")."]}),"\n",(0,r.jsxs)(i.li,{children:["Deprecated ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Form/useError/",children:"Form.useError"})," and replaced with ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Form/useValidation/",children:"Form.useValidation"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Deprecated ",(0,r.jsx)(i.code,{children:"omit_rounding"})," in ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Value/Number/",children:"Value.Number"})," and ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Value/Currency/",children:"Value.Currency"}),", replaced with ",(0,r.jsx)(i.code,{children:'rounding="omit"'}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Deprecated ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Form/FieldProps/",children:"Form.FieldProps"})," and replaced with ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/feature-fields/Provider/",children:"Field.Provider"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Fixed error throwing when using ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Iterate/Count/",children:"Iterate.useCount hook"})," or ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Form/useData/",children:"useData hook"})," in ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Wizard/",children:"Wizard"})," without form id."]}),"\n",(0,r.jsxs)(i.li,{children:["Fixed so the deprecated ",(0,r.jsx)(i.code,{children:"itemNr"})," still works in the ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Iterate/ViewContainer/",children:"Iterate.ViewContainer"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Fixed so ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/base-fields/Toggle/",children:"Field.Toggle"})," does not render invisible label when not providing any label."]}),"\n",(0,r.jsxs)(i.li,{children:["Fixed CSS ",(0,r.jsx)(i.code,{children:"max-width"})," of card in ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Wizard/",children:"Wizard(StepIndicator)"})," by removing the ",(0,r.jsx)(i.code,{children:"max-width"})," attribute."]}),"\n",(0,r.jsxs)(i.li,{children:["Fixed so that we keep field state during a ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Wizard/",children:"Wizard"})," step change when used inside ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Iterate/Array/",children:"Iterate.Array"})," (which used ",(0,r.jsx)(i.code,{children:"defaultValue"})," as the data source)."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{children:"v10.50"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.code,{children:"reduceToVisibleFields"})," to the ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Form/useData/",children:"Form.useData"})," hook and ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Form/Handler/",children:"Form.Handler"})," ",(0,r.jsx)(i.code,{children:"onSubmit"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.code,{children:"inheritVisibility"})," to each ",(0,r.jsx)(i.code,{children:"Value.*"})," component."]}),"\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.code,{children:"variant"})," to ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/base-fields/ArraySelection/",children:"Value.ArraySelection"}),", to allow for list layout."]}),"\n",(0,r.jsxs)(i.li,{children:["Added validation of Norwegian organization number to ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/feature-fields/OrganizationNumber/",children:"Field.OrganizationNumber"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.code,{children:"filterCountries"})," to ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/feature-fields/PhoneNumber/",children:"Field.PhoneNumber"}),", to be able to filter out countries."]}),"\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.code,{children:"filterCountries"})," to ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/feature-fields/SelectCountry/",children:"Field.SelectCountry"}),", to be able to filter out countries."]}),"\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.code,{children:"limit"})," in ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Iterate/Array/",children:"Iterate"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.code,{children:"remove"})," method to the ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Form/useData/",children:"Form.useData"})," hook."]}),"\n",(0,r.jsxs)(i.li,{children:["Deprecated ",(0,r.jsx)(i.code,{children:"itemNr"})," in ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Iterate/",children:"Iterate"})," and replaced with ",(0,r.jsx)(i.code,{children:"itemNo"}),"."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{children:"v10.48"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Make ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Iterate/Toolbar/",children:"Iterate.Toolbar"})," customizable."]}),"\n",(0,r.jsxs)(i.li,{children:["Added new property ",(0,r.jsx)(i.code,{children:"toolbarVariant"})," to ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Iterate/ViewContainer/",children:"Iterate.ViewContainer"})," and ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Iterate/EditContainer/",children:"Iterate.EditContainer"})," for hiding toolbar buttons when there is only one item in the array."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{children:"v10.46"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Value/SelectCountry/",children:"Value.SelectCountry"})," component to render a country value."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{children:"v10.45"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Iterate/PushContainer/",children:"Iterate.PushContainer"})," to create new items in an array."]}),"\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Value/ArraySelection/",children:"Value.ArraySelection"})," component to render an array of values."]}),"\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Value/Selection/",children:"Value.Selection"})," component to render a selection value."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{children:"v10.43"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Form/Isolation/",children:"Form.Isolation"})," data provide."]}),"\n",(0,r.jsxs)(i.li,{children:["Deprecated ",(0,r.jsx)(i.code,{children:"withValue"})," in ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Form/Visibility/",children:"Form.Visibility"})," and replaced it with ",(0,r.jsx)(i.code,{children:"hasValue"}),"."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{children:"v10.41"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/feature-fields/Upload/",children:"Field.Upload"})," component."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{children:"v10.38"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Added support for nesting fields inside of ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Form/Section/",children:"Form.Section"})," and ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Form/ArraySelection/",children:"Form.ArraySelection"}),"."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{children:"v10.36"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Added support for dynamic Wizard steps with the ",(0,r.jsx)(i.code,{children:"active"})," and ",(0,r.jsx)(i.code,{children:"activeWhen"})," prop (",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Wizard/Step/",children:"Wizard.Step"}),")."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{children:"v10.35"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Added view and edit containers to ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Form/Section/",children:"Form.Section"}),"."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{children:"v10.34"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Wizard/Step/EditButton/",children:"Wizard.EditButton"})," component."]}),"\n",(0,r.jsxs)(i.li,{children:["Added a first block (ChildrenWithAge) to the ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/blocks/",children:"list of blocks"}),"."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{children:"v10.33"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Form/Section/",children:"Form.Section"})," that contains components and functionality for composing blocks of fields and values to be reused in different contexts."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{children:"v10.32"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Field/Slider/",children:"Field.Slider"})," component."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{children:"v10.31"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/base-fields/Indeterminate",children:"Field.Indeterminate"})," component to handle checkbox indeterminate (partial) states."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{children:"v10.30"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.code,{children:"Form.FieldProps"})," (which got renamed to ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/feature-fields/Provider/",children:"Field.Provider"}),") component to forward field properties, such as ",(0,r.jsx)(i.code,{children:"required"})," or ",(0,r.jsx)(i.code,{children:"disabled"})," to all nested field components."]}),"\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.code,{children:"locale"})," and ",(0,r.jsx)(i.code,{children:"translations"})," to ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Form/Handler/",children:"Form.Handler"})," component to support custom translations."]}),"\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.code,{children:"disabled"})," and ",(0,r.jsx)(i.code,{children:"required"})," to ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Form/Handler/",children:"Form.Handler"})," component and pass these props to the children fields."]}),"\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.code,{children:"fieldPropsWhenHidden"})," to ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Form/Visibility/",children:"Form.Visibility"})," component to pass props to the children when visibility is hidden."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{children:"v10.29"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/feature-fields/Name/",children:"Field.Name"})," component."]}),"\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Value/Name/",children:"Value.Name"})," component."]}),"\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Value/OrganizationNumber/",children:"Value.OrganizationNumber"})," component."]}),"\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Value/PostalCodeAndCity/",children:"Value.PostalCodeAndCity"})," component."]}),"\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.code,{children:"autocomplete"})," variant to ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/base-fields/Selection/",children:"Field.Selection"})," with ",(0,r.jsx)(i.code,{children:"autocompleteProps"})," support."]}),"\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.code,{children:"transformIn"})," and ",(0,r.jsx)(i.code,{children:"transformOut"})," to ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Form/Handler/",children:"Form.Handler"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Added step transition (animation) to ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Wizard/",children:"Wizard"}),"."]}),"\n",(0,r.jsx)(i.li,{children:"Enhanced session data storage performance by debouncing."}),"\n"]}),"\n",(0,r.jsx)(i.h2,{children:"v10.28"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.code,{children:"getValue"})," method to ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Form/useData/#filter-data",children:"useData"})," and ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Form/getData/#filter-data",children:"getData"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.code,{children:"keepInDOM"})," prop to ",(0,r.jsx)(i.a,{href:"/uilib/extensions/forms/Form/Visibility/",children:"Form.Visibility"}),"."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{children:"v10.27"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Stable release of the Eufemia Forms extension 🎉"}),"\n"]})]})}i.default=function(e){void 0===e&&(e={});const{wrapper:i}=Object.assign({},(0,s.ah)(),e.components);return i?(0,r.jsx)(i,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-changelog-mdx-5574b41508df4800ba88.js.map