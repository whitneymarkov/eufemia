"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[4542],{27064:function(e,n,i){i.r(n);var t=i(52322),s=i(45392);function r(e){const n=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre",h3:"h3"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Form.Visibility"})," component makes it possible to show or hide components on the screen based on the state of data. It can either be fed with the values directly via properties, or it can read data from a surrounding ",(0,t.jsx)(n.a,{href:"/uilib/extensions/forms/Form/Handler",children:"Form.Handler"})," and show or hide components based on the data it points to."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Form } from \'@dnb/eufemia/extensions/forms\'\nrender(\n  <>\n    <Field.Boolean path="/myState" />\n    <Form.Visibility pathTrue="/myState">\n      show me when the state value is true\n    </Form.Visibility>\n  </>,\n)\n'})}),"\n",(0,t.jsx)(n.h2,{children:"Accessibility"}),"\n",(0,t.jsxs)(n.p,{children:["Children of the ",(0,t.jsx)(n.code,{children:"Form.Visibility"})," component will be hidden from screen readers when visually hidden, even if ",(0,t.jsx)(n.code,{children:"keepInDOM"})," is enabled. You don't need to do anything to make the content additionally inaccessible."]}),"\n",(0,t.jsx)(n.h2,{children:"Animate"}),"\n",(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.code,{children:"animate"})," property to animate the visibility change. It can be used in combination with ",(0,t.jsx)(n.code,{children:"keepInDOM"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Form } from \'@dnb/eufemia/extensions/forms\'\nrender(\n  <>\n    <Field.Boolean path="/myState" />\n    <Form.Visibility pathTrue="/myState" animate>\n      show me when the state value is true\n    </Form.Visibility>\n  </>,\n)\n'})}),"\n",(0,t.jsx)(n.h2,{children:"Keep in DOM"}),"\n",(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.code,{children:"keepInDOM"})," property to keep the content in the DOM, even if it's not visible or accessible. This can be useful for fields that still needs to run validation."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Form } from \'@dnb/eufemia/extensions/forms\'\nrender(\n  <>\n    <Field.Boolean path="/myState" />\n    <Form.Visibility pathTrue="/myState" keepInDOM>\n      show me when the state value is true\n    </Form.Visibility>\n  </>,\n)\n'})}),"\n",(0,t.jsx)(n.h2,{children:"Disable children fields when hidden"}),"\n",(0,t.jsxs)(n.p,{children:["You can disable children fields when they are hidden by using the ",(0,t.jsx)(n.code,{children:"fieldPropsWhenHidden"})," property. It will pass the given properties to the children when the visibility is hidden. It needs to be used in combination with the ",(0,t.jsx)(n.code,{children:"keepInDOM"})," property."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Form } from \'@dnb/eufemia/extensions/forms\'\nrender(\n  <>\n    <Field.Boolean path="/myState" />\n    <Form.Visibility\n      pathTrue="/myState"\n      keepInDOM\n      fieldPropsWhenHidden={{ disabled: true }}\n    >\n      <Field.String />\n    </Form.Visibility>\n  </>,\n)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Check out the ",(0,t.jsx)(n.a,{href:"#nested-visibility-example",children:"Nested visibility example"})," to see how you can use ",(0,t.jsx)(n.code,{children:"fieldPropsWhenHidden"})," and ",(0,t.jsx)(n.code,{children:"keepInDOM"}),"."]}),"\n",(0,t.jsx)(n.h3,{children:"Why is this useful?"}),"\n",(0,t.jsx)(n.p,{children:"In some cases, you want to keep the content in the DOM, even if it's not visible. This can be useful for fields that still needs to run validation."}),"\n",(0,t.jsx)(n.h2,{children:"Inherit visibility"}),"\n",(0,t.jsxs)(n.p,{children:["By using the provider component ",(0,t.jsx)(n.code,{children:"Value.Provider"}),", you can propagate the visibility (with the ",(0,t.jsx)(n.code,{children:"inheritVisibility"})," property) of the parent to all nested values."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { Form, Value } from \'@dnb/eufemia/extensions/forms\'\n\nrender(\n  <Form.Handler>\n    <Value.Provider inheritVisibility>\n      <Value.String path="/foo" />\n      <Value.String path="/bar" />\n    </Value.Provider>\n  </Form.Handler>,\n)\n'})})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(r,e)})):r(e)}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-form-visibility-info-mdx-72350a42b87b7c05bd72.js.map