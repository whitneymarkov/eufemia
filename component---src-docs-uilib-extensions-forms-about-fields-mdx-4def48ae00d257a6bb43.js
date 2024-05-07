"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[54264,78981,27263,54859],{31159:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var s=t(52322),i=t(45392),a=t(6700),o=t.p+"static/form-diagram-1-724307a554dcd4dd6fea9d90c2cdf90a.png",l=t.p+"static/form-diagram-2-99b20bee84f01e03daa62ef590567296.png",r=t(95034),c=t(60583),d=t(31019);function h(e){const n=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",strong:"strong",ul:"ul",li:"li",a:"a",h2:"h2",h3:"h3"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{children:"About fields"}),"\n",(0,s.jsx)(n.p,{children:"Both the naming and the way the components work are based on being data-driven."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import { Field } from '@dnb/eufemia/extensions/forms'\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Table of Contents"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#base-fields",children:"Base fields"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#feature-fields",children:"Feature fields"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#more-info",children:"More info"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#standardized-properties",children:"Standardized properties"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#controlled--uncontrolled",children:"Controlled & Uncontrolled"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#creating-custom-field-components",children:"Creating custom field components"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{children:"Base fields"}),"\n",(0,s.jsx)(n.p,{children:'These components are data-driven React components – named and structured – according to the "type" of data they can display and produce, based on the user\'s input and action in the interface.'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"input category"})," – which contains of field types that accept and produce values based on input from the user, such as text and numbers.","\n",(0,s.jsx)(r.default,{}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"selection category"})," – which contains of field types that allow the user to choose between a fixed set of values (options) represented by different UI components:","\n",(0,s.jsx)(c.default,{}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"toggle category"})," – which contains of field types that allow the user to toggle between two values, such as ",(0,s.jsx)(n.code,{children:"true"})," and ",(0,s.jsx)(n.code,{children:"false"}),":","\n",(0,s.jsx)(d.default,{}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["On top of these, a number of ",(0,s.jsx)(n.a,{href:"#feature-fields",children:"feature fields"})," have been built that have special functionality based on given types of data, such as bank account numbers, e-mails and social security numbers."]}),"\n",(0,s.jsx)(n.h2,{children:"Feature fields"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/uilib/extensions/forms/feature-fields/",children:"Feature fields"})," are built on top of the ",(0,s.jsx)(n.a,{href:"#base-fields",children:"base fields"})," (listed above) to add more specific features targeting a given type of data."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Here is a ",(0,s.jsx)(n.a,{href:"/uilib/extensions/forms/all-fields/",children:"list of all fields"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{children:"More info"}),"\n",(0,s.jsx)(n.h3,{children:"Standardized properties"}),"\n",(0,s.jsxs)(n.p,{children:["All input component has a fixed set of props that make it possible to build more complex standardized functionality around them. The most important ones here are ",(0,s.jsx)(n.code,{children:"value"})," and ",(0,s.jsx)(n.code,{children:"onChange"})," (can be async). Value expects values in the given data type, so for example ",(0,s.jsx)(n.code,{children:"Field.Number"})," expects a ",(0,s.jsx)(n.code,{children:"value"})," of the type ",(0,s.jsx)(n.code,{children:"number"}),", and will give a type error in Typescript if it e.g. receives a number in a ",(0,s.jsx)(n.code,{children:"string"}),". The callback function submitted to ",(0,s.jsx)(n.code,{children:"onChange"})," will always receive the value of the corresponding type as the first argument."]}),"\n",(0,s.jsxs)(n.p,{children:["It is deliberate that ",(0,s.jsx)(n.code,{children:"onChange"})," sends out the value from the field, and not the event object that comes from the actual HTML tag into which the user enters data. This is to create a less tight coupling between application code that uses the components, and the internal implementation in the field components. In addition, this makes the surrounding logic simpler by not having to extract, for example, ",(0,s.jsx)(n.code,{children:"e.target.value"})," everywhere."]}),"\n",(0,s.jsxs)(n.p,{children:["The basic components have a number of properties that make it possible to control how they function in the interface, such as ",(0,s.jsx)(n.code,{children:"multiline"})," on ",(0,s.jsx)(n.code,{children:"Field.String"}),", which chooses whether to get one line of text (input tag) or several lines (textarea tag) . In addition, they have a number of validation props, such as ",(0,s.jsx)(n.code,{children:"minLength"})," and ",(0,s.jsx)(n.code,{children:"required"}),"."]}),"\n",(0,s.jsx)(n.h3,{children:"Controlled & Uncontrolled"}),"\n",(0,s.jsxs)(n.p,{children:['In React, it\'s important to be aware of where the states of a given set of data "lives". This can be an entire object that represents an entity the user is going to make changes to (e.g. a user or a bank account), but it also applies to the individual value a form makes changes to. A form field can be ',(0,s.jsx)(n.a,{href:"https://reactjs.org/docs/forms.html#controlled-components",children:"controlled"})," or ",(0,s.jsx)(n.a,{href:"https://reactjs.org/docs/uncontrolled-components.html",children:"uncontrolled"}),". The components in this package make it possible to work in both ways."]}),"\n",(0,s.jsxs)(n.p,{children:["If the functionality is designed so that the state of the data will live outside the form components, you give the components a ",(0,s.jsx)(n.code,{children:"value"})," and an ",(0,s.jsx)(n.code,{children:"onChange"}),", and ensure that all changes that are sent out via ",(0,s.jsx)(n.code,{children:"onChange"})," are fed back via ",(0,s.jsx)(n.code,{children:"value"})," so that it functions as a controlled component. The internal logic in the components will then ensure that the value is kept the same via the changes it receives from the outside."]}),"\n",(0,s.jsxs)(n.p,{children:["If you want the state of the value to live inside the input component, do not send the updated value in via ",(0,s.jsx)(n.code,{children:"value"}),". The logic will then keep the internal value with the changes continuously, and still send the latest version with all the changes the user has made, even if they are not received continuously via ",(0,s.jsx)(n.code,{children:"value"}),", as a basic ",(0,s.jsx)(n.code,{children:"<input>"})," tag in React expects."]}),"\n",(0,s.jsx)(n.h3,{children:"Creating custom field components"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"useFieldProps"})," hook that is used in all existing field components is exported to make it possible ",(0,s.jsx)(n.a,{href:"/uilib/extensions/forms/create-component/",children:"to create custom field components"})," that have the same properties and follow the same flow as the standard components, without the need to recreate all the basic state handling features."]}),"\n",(0,s.jsx)(n.h3,{children:"Basic field usage"}),"\n",(0,s.jsx)(n.p,{children:"Components in Eufemia Forms are very flexible. They adapt to the set of props they receive, and you can therefore choose which parts of the functionality they should use, and what you yourself want to handle in the application code."}),"\n",(0,s.jsx)(n.p,{children:"Here is an example that consists of a large degree of data handling in the application, even though the form itself still consists of both components from Eufemia and local special components (the blue boxes):"}),"\n",(0,s.jsx)("div",{style:{maxWidth:"1200px"},children:(0,s.jsx)(a.Z,{height:"auto",width:"auto",src:o,caption:"Simple form example with Eufemia Forms fields"})}),"\n",(0,s.jsx)(n.h3,{children:"Complete state management and local custom fields"}),"\n",(0,s.jsx)(n.p,{children:"In this example, all state data, validation process and error handling are done by components from Eufemia Forms, inside a local field component created especially for this application. Here you find a combination of standardized field functionality taken from Eufemia Forms, and local specialized code to achieve the goal of maximum reuse without sacrificing flexibility:"}),"\n",(0,s.jsx)("div",{style:{maxWidth:"1200px"},children:(0,s.jsx)(a.Z,{height:"auto",width:"auto",src:l,caption:"Complete state management and local custom fields"})}),"\n",(0,s.jsx)(n.h2,{children:"First steps"}),"\n",(0,s.jsxs)(n.p,{children:["You import the components from with scopes, such as ",(0,s.jsx)(n.code,{children:"Form"})," and ",(0,s.jsx)(n.code,{children:"Field"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import { Form, Field } from '@dnb/eufemia/extensions/forms'\n\nrender(\n  <Form.Handler onSubmit={console.log}>\n    <Field.String label=\"Custom Field\" />\n    <Form.ButtonRow>\n      <Form.SubmitButton />\n    </Form.ButtonRow>\n  </Form.Handler>,\n)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["More details in the ",(0,s.jsx)(n.a,{href:"/uilib/extensions/forms/getting-started/",children:"getting started"})," section."]})]})}var u=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}},95034:function(e,n,t){t.r(n),t.d(n,{default:function(){return o}});var s=t(68270),i=t(77491),a=t(52322);function o(){const{allMdx:{edges:e}}=(0,s.useStaticQuery)("3527086586");return(0,a.jsx)(i.Z,{space:{top:"x-small"},level:3,size:"medium",description:"",edges:e})}},60583:function(e,n,t){t.r(n),t.d(n,{default:function(){return o}});var s=t(68270),i=t(77491),a=t(52322);function o(){const{allMdx:{edges:e}}=(0,s.useStaticQuery)("2488855444");return(0,a.jsx)(i.Z,{space:{top:"x-small"},level:3,size:"medium",description:"",edges:e})}},31019:function(e,n,t){t.r(n),t.d(n,{default:function(){return o}});var s=t(68270),i=t(77491),a=t(52322);function o(){const{allMdx:{edges:e}}=(0,s.useStaticQuery)("2421328184");return(0,a.jsx)(i.Z,{space:{top:"x-small"},level:3,size:"medium",description:"",edges:e})}},77491:function(e,n,t){t.d(n,{Z:function(){return u}});var s=t(2784),i=t(42351),a=t(65359),o=t(43095),l=t(79254),r=t(68514),c=t(61185),d=t(595),h=t(52322);function u(e){let{edges:n,level:t,size:u,description:f=null,returnListItems:p=!1,...m}=e;const x=p?i.Z:s.Fragment;(0,r.TW)(t||2);const j=n.map(((e,n)=>{let{node:{frontmatter:{title:s,description:i},fields:{slug:r}}}=e;return(0,h.jsx)(x,{children:(0,h.jsx)(j,{})},n);function j(){return p?(0,h.jsxs)(a.Z,{children:[(0,h.jsx)(l.Z,{href:"/"+r,children:s}),(0,h.jsx)("br",{})]}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o.Z,{level:t||2,size:u,useSlug:"/"+r,title:s,...m,children:(0,h.jsx)(l.Z,{href:"/"+r,children:s})}),(null!==f?f:i)&&(0,h.jsx)(c.D,{components:d.L,children:null!==f?f:i})]})}}));return(0,h.jsx)(h.Fragment,{children:j})}},95084:function(e,n,t){var s=t(66606);n.Z=s.Z},66606:function(e,n,t){var s=t(2784),i=t(19999),a=t(2045),o=t(72779),l=t.n(o),r=t(52322);const c=e=>{let{caption:n,alt:t,element:o="figure",skeleton:c,imgClass:d,className:h,...u}=e;const[f,p]=s.useState(!1);return(0,r.jsxs)(i.Z,{as:o,internalClass:"dnb-img",className:l()(h,(0,a.HU)(u,u.is)),skeleton:c,skeletonMethod:"shape",children:[(0,r.jsx)(i.Z,{as:"img",alt:t,internalClass:l()("dnb-img",f&&"dnb-img--error"),className:d,skeleton:c,onError:()=>p(!0),...(0,a.du)(u)}),n&&(0,r.jsx)("figcaption",{children:n})]})};c._supportsSpacingProps=!0,n.Z=c},6700:function(e,n,t){var s=t(2784),i=t(72779),a=t.n(i),o=t(95084),l=t(52322);const r=e=>{let{className:n,alt:t,src:i,children:r,size:c,width:d,height:h,caption:u,...f}=e;"auto"===c&&(d="100%",h="100%");const p={width:d,height:h};if(s.isValidElement(i)){const e=i;i=(0,l.jsx)(e,{alt:t||u,...p})}return(0,l.jsx)(o.Z,{className:a()("image-box",n),alt:t||u,caption:u,src:i||r,...p,...f})};r.defaultProps={className:null,caption:null,alt:null,src:null,size:null,height:null,width:null,children:null},n.Z=r}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-about-fields-mdx-4def48ae00d257a6bb43.js.map