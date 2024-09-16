"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[26395],{40271:function(e,n,t){t.r(n);var r=t(52322),a=t(45392);function s(e){const n=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",a:"a"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Iterate.PushButton"})," connects to the array of a surrounding ",(0,r.jsx)(n.code,{children:"Iterate.Array"})," or an array from the source pointed at through ",(0,r.jsx)(n.code,{children:"path"})," and adds a new item to the array when clicked."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { Iterate, Field } from \'@dnb/eufemia/extensions/forms\'\n\nrender(\n  <Form.Handler>\n    <Iterate.Array path="/myList">\n      <Field.Name.Last itemPath="/name" />\n    </Iterate.Array>\n\n    <Iterate.PushButton\n      path="/myList"\n      text="Add another item"\n      pushValue={{}}\n    />\n  </Form.Handler>,\n)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["In order to create new items you can also use the ",(0,r.jsx)(n.a,{href:"/uilib/extensions/forms/Iterate/PushContainer/",children:"Iterate.PushContainer"})," component."]}),"\n",(0,r.jsx)(n.h2,{children:"Show the next item number in the button"}),"\n",(0,r.jsxs)(n.p,{children:["You can use the ",(0,r.jsx)(n.code,{children:"{nextItemNo}"})," variable in the ",(0,r.jsx)(n.code,{children:"text"})," or ",(0,r.jsx)(n.code,{children:"children"})," property to display the next item number."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { Iterate, Field, Value } from \'@dnb/eufemia/extensions/forms\'\n\nrender(\n  <Form.Handler>\n    <Iterate.Array path="/myList">\n      <Field.String itemPath="/" />\n    </Iterate.Array>\n\n    <Iterate.PushButton\n      path="/myList"\n      pushValue="push value"\n      text="Add no. {nextItemNo}"\n    />\n  </Form.Handler>,\n)\n'})})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(s,e)})):s(e)}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-iterate-push-button-info-mdx-5ff016bed245d8e1b344.js.map