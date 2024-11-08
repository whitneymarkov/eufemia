"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[36720,57554,48635],{92181:function(n,e,t){t.r(e);var i=t(52322),o=t(45392),r=t(13812),a=t(68486);function s(n){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.default,{}),"\n",(0,i.jsx)(a.default,{})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,o.ah)(),n.components);return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(s,n)})):s()}},68486:function(n,e,t){t.r(e),t.d(e,{default:function(){return d}});var i={};t.r(i),t.d(i,{ViewAndEditContainer:function(){return s}});var o=t(52322),r=t(45392),a=t(46832);const s=()=>(0,o.jsx)(a.Z,{noInline:!0,children:'const MyEditContainer = () => {\n  return (\n    <Form.Section.EditContainer>\n      <Field.Name.First path="/firstName" />\n      <Field.Name.Last path="/lastName" />\n    </Form.Section.EditContainer>\n  )\n}\nconst MyViewContainer = () => {\n  return (\n    <Form.Section.ViewContainer>\n      <Value.SummaryList>\n        <Value.Name.First path="/firstName" />\n        <Value.Name.Last path="/lastName" />\n      </Value.SummaryList>\n    </Form.Section.ViewContainer>\n  )\n}\nrender(\n  <Form.Handler\n    onSubmit={async (data) => console.log(\'onSubmit\', data)}\n    defaultData={{\n      nestedPath: {\n        firstName: \'Nora\',\n      },\n    }}\n  >\n    <Card stack>\n      <Form.SubHeading>Your account</Form.SubHeading>\n      <Form.Section path="/nestedPath" required containerMode="edit">\n        <MyEditContainer />\n        <MyViewContainer />\n      </Form.Section>\n    </Card>\n    <Form.SubmitButton />\n  </Form.Handler>,\n)\n'});function c(n){const e=Object.assign({h2:"h2",p:"p",code:"code"},(0,r.ah)(),n.components);return i||l("Examples",!1),s||l("Examples.ViewAndEditContainer",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{children:"Demos"}),"\n",(0,o.jsxs)(e.p,{children:["This demo shows the edit container opened by default by using the ",(0,o.jsx)(e.code,{children:'containerMode="edit"'})," property."]}),"\n",(0,o.jsx)(s,{})]})}var d=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,o.jsx)(e,Object.assign({},n,{children:(0,o.jsx)(c,n)})):c(n)};function l(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},13812:function(n,e,t){t.r(e);var i=t(52322),o=t(45392);function r(n){const e=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,o.ah)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{children:"Description"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"EditContainer"})," enables users to toggle (with animation) the content of each item between the ",(0,i.jsx)(e.a,{href:"/uilib/extensions/forms/Form/Section/ViewContainer/",children:"ViewContainer"})," and this edit container."]}),"\n",(0,i.jsx)(e.p,{children:'By default, it features a toolbar containing a "Done" button and a "Cancel" button. The "Cancel" button resets any changes made to the item content, restoring it to its original state.'}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-tsx",children:'import { Form, Field, Value } from \'@dnb/eufemia/extensions/forms\'\n\nrender(\n  <Form.Section>\n    <Form.Section.EditContainer title="Edit account holder">\n      <Field.Name.First path="/firstName" />\n      <Field.Name.Last path="/lastName" />\n    </Form.Section.EditContainer>\n\n    <Form.Section.ViewContainer title="Account holder">\n      <Value.SummaryList>\n        <Value.Name.First path="/firstName" />\n        <Value.Name.Last path="/lastName" />\n      </Value.SummaryList>\n    </Form.Section.ViewContainer>\n  </Form.Section>,\n)\n'})}),"\n",(0,i.jsx)(e.h2,{children:"Customize the Toolbar"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-tsx",children:"import { Form, Field } from '@dnb/eufemia/extensions/forms'\n\nrender(\n  <Form.Section>\n    <Form.Section.EditContainer>\n      <Field.Name.Last itemPath=\"/name\" />\n      <Form.Section.Toolbar>\n        <Form.Section.EditContainer.DoneButton />\n        <Form.Section.EditContainer.CancelButton />\n      </Form.Section.Toolbar>\n    </Form.Section.EditContainer>\n  </Form.Section>,\n)\n"})}),"\n",(0,i.jsx)(e.h2,{children:"Accessibility"}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.code,{children:"EditContainer"})," component has an ",(0,i.jsx)(e.code,{children:"aria-label"})," attribute, which is set to the ",(0,i.jsx)(e.code,{children:"title"})," property value. It uses a section element to wrap the content, which helps users with screen readers to get the needed announcement."]}),"\n",(0,i.jsx)(e.p,{children:"When the edit container becomes active, it will automatically receive the active element focus. And when the edit container switches to the view container, the focus will be set to the view container."})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,o.ah)(),n.components);return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(r,n)})):r(n)}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-form-section-edit-container-mdx-e84404affab86d12acf2.js.map