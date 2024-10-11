"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[63668,13618,36262],{10881:function(e,n,t){t.r(n);var i=t(52322),r=t(45392),a=t(40190),o=t(38071);function s(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.default,{}),"\n",(0,i.jsx)(o.default,{})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(s,e)})):s()}},38071:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var i={};t.r(i),t.d(i,{ToolbarVariantMiniumOneItemOneItem:function(){return o.ToolbarVariantMiniumOneItemOneItem},ToolbarVariantMiniumOneItemTwoItems:function(){return o.ToolbarVariantMiniumOneItemTwoItems},ViewAndEditContainer:function(){return o.ViewAndEditContainer}});var r=t(52322),a=t(45392),o=t(22939);function s(e){const n=Object.assign({h2:"h2",h3:"h3",h4:"h4",p:"p"},(0,a.ah)(),e.components);return i||h("Examples",!1),o.ToolbarVariantMiniumOneItemOneItem||h("Examples.ToolbarVariantMiniumOneItemOneItem",!0),o.ToolbarVariantMiniumOneItemTwoItems||h("Examples.ToolbarVariantMiniumOneItemTwoItems",!0),o.ViewAndEditContainer||h("Examples.ViewAndEditContainer",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{children:"Demos"}),"\n",(0,r.jsx)(o.ViewAndEditContainer,{}),"\n",(0,r.jsx)(n.h3,{children:"Toolbar variant"}),"\n",(0,r.jsx)(n.h4,{children:"Minimum one item"}),"\n",(0,r.jsx)(n.p,{children:"When having one item in the Iterate.Array:"}),"\n",(0,r.jsx)(o.ToolbarVariantMiniumOneItemOneItem,{}),"\n",(0,r.jsx)(n.p,{children:"When having two items in the Iterate.Array:"}),"\n",(0,r.jsx)(o.ToolbarVariantMiniumOneItemTwoItems,{})]})}var l=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(s,e)})):s(e)};function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},40190:function(e,n,t){t.r(n);var i=t(52322),r=t(45392);function a(e){const n=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre",h3:"h3",h4:"h4",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Iterate.ViewContainer"})," enables users to toggle (with animation) the content of each item between this view and the ",(0,i.jsx)(n.a,{href:"/uilib/extensions/forms/Iterate/EditContainer/",children:"EditContainer"})," container. It can be used instead of the ",(0,i.jsx)(n.a,{href:"/uilib/extensions/forms/Iterate/AnimatedContainer/",children:"AnimatedContainer"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["By default, it features the ",(0,i.jsx)(n.a,{href:"/uilib/extensions/forms/Iterate/Toolbar/",children:"Toolbar"}),' containing a "Edit" button and a ',(0,i.jsx)(n.a,{href:"/uilib/extensions/forms/Iterate/RemoveButton/",children:"RemoveButton"}),' button. The "Remove" will delete the current item from the array.']}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'import { Iterate, Field, Value } from \'@dnb/eufemia/extensions/forms\'\n\nrender(\n  <Iterate.Array>\n    <Iterate.EditContainer\n      title="Edit account holder"\n      titleWhenNew="New account holder"\n    >\n      <Field.Name.Last itemPath="/name" />\n    </Iterate.EditContainer>\n\n    <Iterate.ViewContainer title="Account holder">\n      <Value.Name.Last itemPath="/name" />\n    </Iterate.ViewContainer>\n  </Iterate.Array>,\n)\n'})}),"\n",(0,i.jsx)(n.h2,{children:"The item number in the title"}),"\n",(0,i.jsxs)(n.p,{children:["You can use the ",(0,i.jsx)(n.code,{children:"{itemNo}"})," variable in the ",(0,i.jsx)(n.code,{children:"title"})," property to display the current item number."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'import { Iterate, Value } from \'@dnb/eufemia/extensions/forms\'\n\nrender(\n  <Iterate.Array>\n    <Iterate.ViewContainer title="Account holder {itemNo}">\n      <Value.Name.Last itemPath="/name" />\n    </Iterate.ViewContainer>\n  </Iterate.Array>,\n)\n'})}),"\n",(0,i.jsx)(n.h2,{children:"Customize the Toolbar"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { Iterate, Value } from '@dnb/eufemia/extensions/forms'\n\nrender(\n  <Iterate.Array>\n    <Iterate.ViewContainer>\n      <Value.Name.Last itemPath=\"/name\" />\n\n      <Iterate.Toolbar>\n        <Iterate.ViewContainer.EditButton />\n        <Iterate.ViewContainer.RemoveButton />\n      </Iterate.Toolbar>\n    </Iterate.ViewContainer>\n  </Iterate.Array>,\n)\n"})}),"\n",(0,i.jsx)(n.h3,{children:"Variants"}),"\n",(0,i.jsx)(n.h4,{children:(0,i.jsx)(n.code,{children:"minimumOneItem"})}),"\n",(0,i.jsx)(n.p,{children:"This variant has the following behavior:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["When ",(0,i.jsx)(n.code,{children:"ViewContainer"})," is visible, and the number of items in the array is one, the remove button will be hidden."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { Iterate } from '@dnb/eufemia/extensions/forms'\n\nrender(\n  <Iterate.Array>\n    <Iterate.ViewContainer toolbarVariant=\"minimumOneItem\">\n      Item Content\n    </Iterate.ViewContainer>\n  </Iterate.Array>,\n)\n"})}),"\n",(0,i.jsx)(n.h2,{children:"Accessibility"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Iterate.ViewContainer"})," component has an ",(0,i.jsx)(n.code,{children:"aria-label"})," attribute, which is set to the ",(0,i.jsx)(n.code,{children:"title"})," property value. It uses a section element to wrap the content, which helps users with screen readers to get the needed announcement."]}),"\n",(0,i.jsx)(n.p,{children:"When the item (view and edit) container gets removed, the active element focus will be set on the previous item."})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-iterate-view-container-mdx-e3dea5e0a697d6ea886d.js.map