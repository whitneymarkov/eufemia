"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[1251,80504,10726,73176,96124],{35574:function(n,e,t){t.r(e);var r=t(52322),o=t(45392),a=t(19452),s=t(43316);function i(n){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.default,{}),"\n",(0,r.jsx)(s.default,{})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,o.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(i,n)})):i()}},43316:function(n,e,t){t.r(e);var r=t(52322),o=t(45392),a=t(94012);function s(n){const e=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a",pre:"pre",ul:"ul",li:"li"},(0,o.ah)(),n.components);return a||i("Examples",!1),a.AsyncChangeAndValidation||i("Examples.AsyncChangeAndValidation",!0),a.AsyncSubmit||i("Examples.AsyncSubmit",!0),a.AsyncSubmitComplete||i("Examples.AsyncSubmitComplete",!0),a.Autofill||i("Examples.Autofill",!0),a.FilterData||i("Examples.FilterData",!0),a.SessionStorage||i("Examples.SessionStorage",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{children:"Demos"}),"\n",(0,r.jsx)(e.h3,{children:"In combination with a SubmitButton"}),"\n",(0,r.jsxs)(e.p,{children:["This example uses an async ",(0,r.jsx)(e.code,{children:"onSubmit"})," event handler. It will disable all fields and show an indicator on the ",(0,r.jsx)(e.a,{href:"/uilib/extensions/forms/Form/SubmitButton/",children:"SubmitButton"})," while the form is pending."]}),"\n",(0,r.jsx)(e.p,{children:"With an async function, you can also handle the response from the server and update the form with the new data."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"// Async function\nconst onSubmit = async (data) => {\n  try {\n    const response = await fetch('https://api.example.com', {\n      method: 'POST',\n      body: JSON.stringify(data),\n    })\n    const data = await response.json()\n    Form.setData('unique', data) // Whatever you want to do with the data\n  } catch (error) {\n    return error // Will display the error message in the form\n  }\n}\n"})}),"\n",(0,r.jsx)(a.AsyncSubmit,{}),"\n",(0,r.jsx)(e.h3,{children:"New location after async submit"}),"\n",(0,r.jsx)(e.p,{children:"This example is only for demo purpose and will NOT redirect to a new location. It will also time out after 10 seconds."}),"\n",(0,r.jsx)(a.AsyncSubmitComplete,{}),"\n",(0,r.jsx)(e.h3,{children:"Filter your data"}),"\n",(0,r.jsxs)(e.p,{children:["By using the ",(0,r.jsx)(e.code,{children:"filterSubmitData"})," prop you can filter out data that you don't want to send to your server."]}),"\n",(0,r.jsxs)(e.p,{children:["It will filter out data from the ",(0,r.jsx)(e.code,{children:"onSubmit"})," event property."]}),"\n",(0,r.jsx)(e.p,{children:"In this example we filter out all fields that are disabled."}),"\n",(0,r.jsx)(a.FilterData,{}),"\n",(0,r.jsx)(e.h3,{children:"With session storage"}),"\n",(0,r.jsx)(e.p,{children:"Changes you make to the fields are temporarily saved and loaded\nwhen the browser reloads. The data is stored until the session storage is invalidated."}),"\n",(0,r.jsx)(a.SessionStorage,{}),"\n",(0,r.jsx)(e.h3,{children:"Autocomplete (autofill) user data"}),"\n",(0,r.jsx)(a.Autofill,{}),"\n",(0,r.jsx)(e.h3,{children:"Complex async (autosave) example"}),"\n",(0,r.jsxs)(e.p,{children:["This example demonstrates how to use async validation with an async ",(0,r.jsx)(e.code,{children:"onSubmit"})," and async ",(0,r.jsx)(e.code,{children:"onChange"})," event for both the ",(0,r.jsx)(e.code,{children:"Form.Handler"})," and a field itself."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"While you write, an async validation request is simulated to check if the input is valid. If it's not, an error message will be shown."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"During validation, only the relevant value will be evaluated. This means, when the delayed validation is done, and the value has changed, the validation result will be omitted."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["You can press enter to submit the form while you write. But only a string of ",(0,r.jsx)(e.code,{children:"valid"})," will be accepted to emit the form ",(0,r.jsx)(e.code,{children:"onSubmit"})," and ",(0,r.jsx)(e.code,{children:"onChange"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:'You can start writing, wait a second or two and remove the whole text again and blur the field. The async validation return will be omitted and the "required" error message will be shown.'}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"It also shows some status messages after the validation and submit requests are done."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["This example does not include an async ",(0,r.jsx)(e.code,{children:"onBlurValidator"})," – but it's possible to add one into the mix as well."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["To access the ",(0,r.jsx)(e.code,{children:"date"}),' "in sync" – you can use the ',(0,r.jsx)(e.a,{href:"/uilib/extensions/forms/Form/useData/",children:"useData"})," hook."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.AsyncChangeAndValidation,{})]})}function i(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,o.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(s,n)})):s(n)}},19452:function(n,e,t){t.r(e);var r=t(52322),o=t(45392),a=t(99201),s=t(72945);function i(n){const e=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",a:"a",h3:"h3",strong:"strong",ol:"ol",li:"li"},(0,o.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{children:"Description"}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.code,{children:"Form.Handler"})," component provides a HTML form element."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-jsx",children:"import { Form } from '@dnb/eufemia/extensions/forms'\n\nrender(\n  <Form.Handler\n    data={existingData}\n    onChange={...}\n    onSubmit={...}\n  >\n    Your Form\n  </Form.Handler>,\n)\n"})}),"\n",(0,r.jsx)(e.p,{children:"The form data can be handled outside of the form. This is useful if you want to use the form data in other components:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-jsx",children:"import { Form } from '@dnb/eufemia/extensions/forms'\n\nfunction MyForm() {\n  const {\n    getValue, // Method to get a single value\n    update, // Method to update a single value\n    set, // Method to set the whole dataset\n    data, // The whole dataset (unvalidated)\n    filterData, // Method to filter data with your own logic\n  } = Form.useData('unique')\n\n  return <Form.Handler id=\"unique\">...</Form.Handler>\n}\n"})}),"\n",(0,r.jsxs)(e.p,{children:["More examples can be found in the ",(0,r.jsx)(e.a,{href:"/uilib/extensions/forms/Form/useData/",children:"useData"})," hook docs."]}),"\n",(0,r.jsx)(e.h3,{children:"TypeScript support"}),"\n",(0,r.jsx)(e.p,{children:"You can define the TypeScript type structure for your data like so:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:"import { Form } from '@dnb/eufemia/extensions/forms'\n\ntype MyDataSet = {\n  firstName?: string\n}\n\nconst data: MyDataSet = {\n  firstName: 'Nora',\n}\n\n// Method #1\nfunction MyForm() {\n  return (\n    <Form.Handler\n      data={data}\n      onSubmit={(data) => {\n        console.log(data.firstName)\n      }}\n    />\n  )\n}\n\n// Method #2\nconst submitHandler = (data: MyDataSet) => {\n  console.log(data.firstName)\n}\nfunction MyForm() {\n  return <Form.Handler data={data} onSubmit={submitHandler} />\n}\n\n// Method #3\nimport type { OnSubmit } from '@dnb/eufemia/extensions/forms'\nconst submitHandler: OnSubmit<MyDataSet> = (data) => {\n  console.log(data.firstName)\n}\nfunction MyForm() {\n  return <Form.Handler data={data} onSubmit={submitHandler} />\n}\n"})}),"\n",(0,r.jsxs)(e.h2,{children:["Async ",(0,r.jsx)(e.code,{children:"onChange"})," and ",(0,r.jsx)(e.code,{children:"onSubmit"})," event handlers"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"NB:"})," When using an async ",(0,r.jsx)(e.code,{children:"onChange"})," event handler, the ",(0,r.jsx)(e.code,{children:"data"})," parameter will only include validated data. This lets you utilize the ",(0,r.jsx)(e.code,{children:"data"})," parameter directly in your request, without having to further process or transform it."]}),"\n",(0,r.jsxs)(e.p,{children:["If you need to use the original data (sync), you can access it via the ",(0,r.jsx)(e.a,{href:"/uilib/extensions/forms/Form/useData/",children:"useData"})," hook."]}),"\n",(0,r.jsxs)(e.p,{children:["Depending on your needs, you may want to use e.g. ",(0,r.jsx)(e.code,{children:"debounceAsync"})," (",(0,r.jsx)(e.a,{href:"/uilib/helpers/functions/#debounce",children:"debounce"}),") to prevent multiple requests from being sent."]}),"\n",(0,r.jsxs)(e.p,{children:["You can return parameters from inside the async ",(0,r.jsx)(e.code,{children:"onChange"})," or ",(0,r.jsx)(e.code,{children:"onSubmit"})," event handler. This way you can display more related information, such as an error or an object with these keys:"]}),"\n",(0,r.jsx)(s.default,{}),"\n",(0,r.jsx)(a.default,{}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.code,{children:"info"}),", ",(0,r.jsx)(e.code,{children:"warning"})," and ",(0,r.jsx)(e.code,{children:"error"})," messages will be displayed at the bottom of a form or field (",(0,r.jsx)(e.a,{href:"/uilib/components/form-status",children:"FormStatus"}),"), depending where it is used. While the ",(0,r.jsx)(e.code,{children:"success"})," will be displayed on the label of the field that initiated the ",(0,r.jsx)(e.code,{children:"onChange"})," event."]}),"\n",(0,r.jsx)(e.h2,{children:"Browser autofill"}),"\n",(0,r.jsxs)(e.p,{children:["You can set ",(0,r.jsx)(e.code,{children:"autoComplete"})," on the ",(0,r.jsx)(e.code,{children:"Form.Handler"})," – each ",(0,r.jsx)(e.a,{href:"/uilib/extensions/forms/base-fields/String/",children:"Field.String"}),"-field will then get ",(0,r.jsx)(e.code,{children:'autoComplete="on"'}),":"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:'<Form.Handler autoComplete={true}>\n  <Field.String path="/firstName" />\n  <Field.String path="/firstName" />\n</Form.Handler>\n'})}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.code,{children:"path"})," property will be used to set the ",(0,r.jsx)(e.code,{children:"name"})," attribute, which lets browser know which autocomplete value should be proposed to the user."]}),"\n",(0,r.jsx)(e.h2,{children:"Temporary storage"}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.code,{children:"sessionStorageId"})," feature uses the browsers session-storage (temporary storage mechanism) to store data entered by the user."]}),"\n",(0,r.jsx)(e.p,{children:"This lets the user navigate away and come back to the form, without loosing already entered data."}),"\n",(0,r.jsx)(e.p,{children:"Ensure you only use this feature for non-sensitive data."}),"\n",(0,r.jsx)(e.p,{children:"It will flush the storage once the form gets submitted."}),"\n",(0,r.jsx)(e.h2,{children:"Filter data"}),"\n",(0,r.jsxs)(e.p,{children:["You can use the ",(0,r.jsx)(e.code,{children:"filterSubmitData"})," method to filter your ",(0,r.jsx)(e.code,{children:"onSubmit"})," data. It might be useful, for example, to ",(0,r.jsx)(e.strong,{children:"exclude disabled fields"})," or filter out empty fields. The callback function receives the following arguments:"]}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"path"})," as the first argument."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"value"})," as the second argument."]}),"\n",(0,r.jsxs)(e.li,{children:["The field ",(0,r.jsx)(e.code,{children:"properties"})," (props) as the third argument."]}),"\n",(0,r.jsx)(e.li,{children:"The fourth argument is an object with the internal state of the field, like the error state."}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["The callback function should return a ",(0,r.jsx)(e.code,{children:"boolean"})," or ",(0,r.jsx)(e.code,{children:"undefined"}),". Return ",(0,r.jsx)(e.code,{children:"false"})," to exclude an entry."]}),"\n",(0,r.jsx)(e.p,{children:"It returns the filtered form data."}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.a,{href:"/uilib/extensions/forms/Form/useData/#filter-data",children:"useData"})," hook and the ",(0,r.jsx)(e.a,{href:"/uilib/extensions/forms/Form/getData/#filter-data",children:"getData"})," method also returns a ",(0,r.jsx)(e.code,{children:"filterData"})," function you can use to filter data the same way."]}),"\n",(0,r.jsxs)(e.p,{children:["Down below is an example of how to use the ",(0,r.jsx)(e.code,{children:"filterSubmitData"})," method."]})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,o.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(i,n)})):i(n)}},72945:function(n,e,t){t.r(e);var r=t(52322),o=t(45392);function a(n){const e=Object.assign({pre:"pre",code:"code"},(0,o.ah)(),n.components);return(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"// Async event handler\nconst onChange = debounceAsync(async function (data) {\n  try {\n    await makeRequest(data)\n  } catch (error) {\n    return error\n  }\n\n  // Optionally, you can return an object with these keys, depending your needs\n  return {\n    info: 'Info message',\n    warning: 'Warning message',\n\n    // and either an error\n    error: new Error('Error message'),\n\n    // or success (when used for autosave)\n    success: 'saved',\n  } as const\n})\n"})})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,o.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(a,n)})):a(n)}},99201:function(n,e,t){t.r(e);var r=t(52322),o=t(45392);function a(n){const e=Object.assign({p:"p",pre:"pre",code:"code"},(0,o.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"In all async operations, you can simply return an error object to display it in the form or influence the form behavior."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:"import { Form } from '@dnb/eufemia/extensions/forms'\n\n// Async function\nconst onSubmit = async (data) => {\n  try {\n    const response = await fetch('https://api.example.com', {\n      method: 'POST',\n      body: JSON.stringify(data),\n    })\n    const data = await response.json()\n\n    Form.setData('unique-id', data) // Whatever you want to do with the data\n  } catch (error) {\n    return error // Will display the error message in the form\n  }\n\n  // Optionally, you can return an object with these keys, depending your needs\n  return {\n    info: 'Info message',\n    warning: 'Warning message',\n\n    // Force the form to stay in pending state\n    status: 'pending',\n\n    // and either an error\n    error: new Error('Error message'),\n  } as const\n}\n\nfunction Component() {\n  return (\n    <Form.Handler id=\"unique-id\" onSubmit={onSubmit}>\n      ...\n    </Form.Handler>\n  )\n}\n"})})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,o.ah)(),n.components);return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(a,n)})):a(n)}},94012:function(n,e,t){t.r(e),t.d(e,{AsyncChangeAndValidation:function(){return u},AsyncSubmit:function(){return d},AsyncSubmitComplete:function(){return c},Autofill:function(){return m},FilterData:function(){return p},SessionStorage:function(){return h}});var r=t(75333),o=t(35540),a=t(37419),s=t(52750),i=t(34674),l=t(52322);const d=()=>(0,l.jsx)(r.Z,{children:"<Form.Handler onSubmit={async (data) => console.log('onSubmit', data)}>\n  <Card stack>\n    <Field.Email path=\"/email\" />\n    <Form.ButtonRow>\n      <Form.SubmitButton />\n    </Form.ButtonRow>\n  </Card>\n</Form.Handler>\n"}),c=()=>(0,l.jsx)(r.Z,{scope:{Value:o},children:"<Form.Handler\n  data={{\n    myField: 'Some value',\n  }}\n  onSubmit={async (data) => {\n    console.log('onSubmit', data)\n\n    // Wait for 2 seconds\n    await new Promise((resolve) => setTimeout(resolve, 2000))\n\n    // e.g. go to new location\n\n    // Optionally, you can return e.g. the \"pending\" status with an additional info\n    return {\n      info: 'Redirecting to a new location',\n      // Force the form to stay in pending state\n      status: 'pending',\n    }\n  }}\n  asyncSubmitTimeout={10000}\n>\n  <Flex.Stack>\n    <Form.MainHeading>Heading</Form.MainHeading>\n    <Card>\n      <Value.String label=\"Summary\" path=\"/myField\" />\n    </Card>\n    <Form.ButtonRow>\n      <Form.SubmitButton />\n    </Form.ButtonRow>\n  </Flex.Stack>\n</Form.Handler>\n"}),u=()=>(0,l.jsx)(r.Z,{scope:{debounceAsync:s.k,createRequest:i.createRequest,stopIcon:a.Z},noInline:!0,children:"const validator = debounceAsync(async function secondValidator(\n  value: string,\n) {\n  try {\n    const request = createRequest()\n    const wasCanceled = this.addCancelEvent(request.cancel)\n    await request(2000) // Simulate a request\n\n    if (wasCanceled()) {\n      throw new Error('Validation request canceled')\n    }\n  } catch (error) {\n    return error\n  }\n  if (value !== 'valid') {\n    return new Error('Custom error with invalid value: ' + value) // Show this message\n  }\n})\n\nconst cancelRequest = () => {\n  validator.cancel()\n}\nconst onSubmit = async (data) => {\n  console.log('onSubmit', data)\n\n  // Wait for 2 seconds\n  await new Promise((resolve) => setTimeout(resolve, 2000))\n\n  // For demo purposes, we show a message\n  return {\n    info: 'Message from onSubmit return',\n  }\n}\nconst onChangeForm = async (data) => {\n  console.log('onChangeForm', data)\n\n  // Wait for 2 seconds\n  await new Promise((resolve) => setTimeout(resolve, 2000))\n\n  // For demo purposes, we show a message\n  return {\n    warning: 'Warning message',\n  }\n}\nconst onChangeField = async (data) => {\n  console.log('onChangeField', data)\n\n  // Wait for 2 seconds\n  await new Promise((resolve) => setTimeout(resolve, 2000))\n\n  // For demo purposes, we show a message\n  return {\n    info: 'Info message',\n  }\n}\nconst MyForm = () => {\n  const { data } = Form.useData('unique-id')\n  console.log('data', data)\n  return (\n    <Form.Handler\n      id=\"unique-id\"\n      onSubmit={onSubmit}\n      onChange={onChangeForm}\n    >\n      <Flex.Stack>\n        <Field.String\n          label='Type \"valid\" to validate the field'\n          path=\"/myField\"\n          required\n          validator={validator}\n          onChange={onChangeField}\n          autoComplete=\"off\"\n        />\n        <Form.ButtonRow>\n          <Form.SubmitButton text=\"Save\" />\n          <Button\n            text=\"Stop async operations\"\n            variant=\"tertiary\"\n            icon={stopIcon}\n            icon_position=\"left\"\n            disabled={false}\n            onClick={cancelRequest}\n          />\n        </Form.ButtonRow>\n      </Flex.Stack>\n    </Form.Handler>\n  )\n}\nrender(<MyForm />)\n"}),h=()=>(0,l.jsx)(r.Z,{children:'<Form.Handler\n  onSubmit={(data, { resetForm, clearData }) => {\n    console.log(\'onSubmit\', data)\n\n    // Docs: https://eufemia.dnb.no/uilib/extensions/forms/DataContext/Provider/events/#onsubmit-parameters\n    resetForm()\n    clearData()\n  }}\n  sessionStorageId="session-key"\n>\n  <Card stack>\n    <Field.String label="Name" path="/name" />\n    <Field.Email path="/email" />\n    <Form.ButtonRow>\n      <Form.SubmitButton />\n    </Form.ButtonRow>\n  </Card>\n</Form.Handler>\n'}),m=()=>(0,l.jsx)(r.Z,{children:'<Form.Handler\n  onSubmit={(data) => console.log(\'onSubmit\', data)}\n  autoComplete\n>\n  <Flex.Stack>\n    <Form.MainHeading>Delivery address</Form.MainHeading>\n\n    <Card stack>\n      <Form.SubHeading>Your name</Form.SubHeading>\n\n      <Field.Name.First path="/firstName" required />\n      <Field.Name.Last path="/lastName" required />\n    </Card>\n\n    <Card stack>\n      <Form.SubHeading>Your address</Form.SubHeading>\n\n      <Field.Composition width="large">\n        <Field.String\n          label="Street"\n          width="stretch"\n          path="/streetName"\n          required\n        />\n        <Field.Number\n          label="Nr."\n          width="small"\n          path="/streetNr"\n          required\n        />\n      </Field.Composition>\n\n      <Field.PostalCodeAndCity\n        postalCode={{\n          required: true,\n          path: \'/postalCode\',\n        }}\n        city={{\n          required: true,\n          path: \'/city\',\n        }}\n      />\n    </Card>\n\n    <Card stack>\n      <P>More information about this form.</P>\n      <Form.ButtonRow>\n        <Form.SubmitButton />\n      </Form.ButtonRow>\n    </Card>\n  </Flex.Stack>\n</Form.Handler>\n'}),p=()=>(0,l.jsx)(r.Z,{scope:{id:"disabled-fields",replaceUndefinedValues:f},noInline:!0,children:'const filterDataHandler = (path, value, props) => !props.disabled\nconst MyComponent = () => {\n  const { data } = Form.useData(id, {\n    disabled: false,\n    myField: \'Value\',\n  })\n  return (\n    <Form.Handler\n      id={id}\n      onSubmit={(data) => console.log(\'onSubmit\', data)}\n      filterSubmitData={filterDataHandler}\n    >\n      <Flex.Stack spacing="medium">\n        <Field.Boolean label="Disabled" path="/disabled" />\n        <Field.String\n          label="My Field"\n          path="/myField"\n          disabled={data.disabled}\n        />\n        <Form.ButtonRow>\n          <Form.SubmitButton />\n        </Form.ButtonRow>\n      </Flex.Stack>\n    </Form.Handler>\n  )\n}\nconst Output = () => {\n  const { filterData } = Form.useData(id)\n  const { hasErrors } = Form.useError(id)\n  return (\n    <Section top innerSpace backgroundColor="sand-yellow" breakout={false}>\n      <output>\n        hasErrors: {JSON.stringify(hasErrors(), null, 2)}\n        <pre>\n          {JSON.stringify(\n            replaceUndefinedValues(filterData(filterDataHandler)),\n            null,\n            2,\n          )}\n        </pre>\n      </output>\n    </Section>\n  )\n}\nrender(\n  <>\n    <MyComponent />\n    <Output />\n  </>,\n)\n'});function f(n,e){return void 0===e&&(e=null),void 0===n?e:"object"==typeof n&&n!==e?{...n,...Object.fromEntries(Object.entries(n).map((n=>{let[e,t]=n;return[e,f(t)]})))}:n}},34674:function(n,e,t){t.r(e),t.d(e,{AsyncChangeBehavior:function(){return l},AsyncSubmitBehavior:function(){return i},Default:function(){return s},WithinOtherComponents:function(){return c},createRequest:function(){return d}});var r=t(75333),o=t(52750),a=t(52322);const s=()=>(0,a.jsx)(r.Z,{children:'<Form.SubmitIndicator state="pending" />\n'}),i=()=>(0,a.jsx)(r.Z,{scope:{createRequest:d,debounceAsync:o.k},noInline:!0,children:'const delay = debounceAsync(async function () {\n  try {\n    const request = createRequest()\n    await request(1000) // Simulate a request\n  } catch (error) {\n    return error\n  }\n})\nrender(\n  <Form.Handler onSubmit={delay}>\n    <Card stack>\n      <Field.String path="/myField" label="Short label" />\n      <Form.ButtonRow>\n        <Form.SubmitButton />\n        <Button variant="tertiary">Cancel</Button>\n      </Form.ButtonRow>\n    </Card>\n  </Form.Handler>,\n)\n'}),l=()=>(0,a.jsx)(r.Z,{scope:{createRequest:d,debounceAsync:o.k},noInline:!0,children:'const delay = debounceAsync(async function () {\n  try {\n    const request = createRequest()\n    await request(1000) // Simulate a request\n  } catch (error) {\n    return error\n  }\n})\nrender(\n  <Form.Handler onSubmit={delay} onChange={delay}>\n    <Card stack>\n      <Field.String\n        path="/myField1"\n        label="Label (with async validation)"\n        placeholder="Write something ..."\n        validator={delay}\n      />\n      <FieldBlock width="medium">\n        <Field.String\n          path="/myField2"\n          width="stretch"\n          label="This is a long label"\n        />\n      </FieldBlock>\n      <Form.ButtonRow>\n        <Form.SubmitButton />\n        <Button variant="tertiary">Cancel</Button>\n      </Form.ButtonRow>\n    </Card>\n  </Form.Handler>,\n)\n'}),d=()=>{let n,e;const t=t=>new Promise((r=>{e=r,n=setTimeout((()=>{r({hasError:!1})}),t)}));return t.cancel=()=>{var t;null===(t=e)||void 0===t||t({hasError:!0}),clearTimeout(n),n=null},t},c=()=>(0,a.jsx)(r.Z,{children:'<Form.Handler>\n  <Flex.Horizontal align="center">\n    <Form.SubmitButton showIndicator />\n    <Button variant="secondary" icon="chevron_right">\n      Secondary\n      <Form.SubmitIndicator state="pending" />\n    </Button>\n    <Button variant="tertiary">\n      Tertiary\n      <Form.SubmitIndicator state="pending" />\n    </Button>\n    <FormLabel>\n      Label\n      <Form.SubmitIndicator state="pending" />\n    </FormLabel>\n  </Flex.Horizontal>\n</Form.Handler>\n'})},37419:function(n,e,t){var r=t(52322);e.Z=n=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16",...n,children:(0,r.jsx)("path",{stroke:"#000",strokeWidth:1.5,d:"M12.95 3.05a7 7 0 0 0-9.9 9.9m9.9-9.9a7 7 0 1 1-9.9 9.9m9.9-9.9-9.9 9.9"})})}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-form-handler-mdx-6b3b0b34a5ac36a53560.js.map