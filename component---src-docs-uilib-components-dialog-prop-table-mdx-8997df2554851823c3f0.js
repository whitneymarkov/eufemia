"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[47809],{70002:function(t,e,n){n.r(e),n.d(e,{default:function(){return l}});var o=n(52322),i=n(45392),a=n(85179);const s={variant:{doc:"The dialog variant. Can either be `information` or `confirmation`. Defaults to `information`.",type:"string",status:"optional"},title:{doc:"The dialog title. Displays on the very top of the content.",type:"string",status:"optional"},minWidth:{doc:"The minimum Dialog content width, defined by a CSS width value like `50vw` (50% of the viewport). Be careful on using fixed `minWidth` so you don't break responsiveness. Defaults to `30rem` (average width is set to `60vw`).",type:"string",status:"optional"},maxWidth:{doc:"The maximum Dialog content width, defined by a CSS width value like `20rem`. Defaults to `60rem` (average width is set to `60vw`).",type:"string",status:"optional"},className:{doc:"Give the Dialog content a class name (maps to `dnb-dialog`).",type:"string",status:"optional"},spacing:{doc:"If set to `false` then the dialog content will be shown without any spacing. Defaults to `true`.",type:"boolean",status:"optional"},preventCoreStyle:{doc:"By default the dialog content gets added the core style class `dnb-core-style`. Use `false` to disable this behavior.",type:"boolean",status:"optional"},navContent:{doc:"The content which will appear in the navigation, above the header, and side-by-side the close button.",type:"React.Node",status:"optional"},headerContent:{doc:"The content which will appear in the header of the dialog.",type:"React.Node",status:"optional"},modalContent:{doc:"The content which will appear when triggering the dialog.",type:"React.Node",status:"optional"},description:{doc:"A description will be positioned below the title, but before the content. Used for Dialog variant `confirmation` to further describe what the actions will do.",type:"string",status:"optional"},verticalAlignment:{doc:"Define the vertical alignment of the container. Can be set to `top` or `center`. Defaults to `center`.",type:"string",status:"optional"},alignContent:{doc:"Define the inner horizontal alignment of the content. Can be set to `left`, `center`, `right` and `centered`. If `centered`, then the content will also be centered vertically. Defaults to `left`.",type:"string",status:"optional"},fullscreen:{doc:"If set to `true` then the dialog content will be shown as fullscreen, without showing the original content behind. Can be set to `false` to omit the auto fullscreen. Defaults to `auto`.",type:"boolean",status:"optional"},icon:{doc:"An icon to display at the top of the component. Should be of size medium, so make sure you import the `_medium` version of the Eufemia icon.",type:"React.Node",status:"optional"},confirmType:{doc:"For variant confirmation, the dialog is either an informational (`info`) or a warning (`warning`) message. Defaults to `info`.",type:"string",status:"optional"},declineText:{doc:"For dialog actions, give a custom text for the decline button.",type:"string",status:"optional"},confirmText:{doc:"For dialog actions, give a custom text for the confirmation button.",type:"string",status:"optional"},hideDecline:{doc:"For variant confirmation, hide the default decline button and only show the confirmation button.",type:"boolean",status:"optional"},hideConfirm:{doc:"For variant confirmation, hide the default confirm button and only show the decline button.",type:"boolean",status:"optional"},scrollRef:{doc:"To get the scroll Element, pass in your own React ref.",type:"React.Ref",status:"optional"},contentRef:{doc:"To get the inner content Element, pass in your own React ref.",type:"React.Ref",status:"optional"}};function r(t){const e=Object.assign({h2:"h2"},(0,i.ah)(),t.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{children:"Properties"}),"\n",(0,o.jsx)(a.ZP,{props:s})]})}var l=function(t){void 0===t&&(t={});const{wrapper:e}=Object.assign({},(0,i.ah)(),t.components);return e?(0,o.jsx)(e,Object.assign({},t,{children:(0,o.jsx)(r,t)})):r(t)}},85179:function(t,e,n){n.d(e,{Kw:function(){return g},ZP:function(){return m}});var o=n(70894),i=n(61185),a=n(55560),s=n(41676),r=n(6210),l=n(64223),c=n(37339),d=n(595),h=n(52322);const u={...d.L,p:t=>(0,h.jsx)("span",{...t})},p=(0,o.Z)(a.ZP,{target:"e13h2c840"})({name:"1qdk5x4",styles:"td{white-space:nowrap;}"}),f="var(--color-fire-red)",g=t=>{let{variant:e,strikethrough:n,children:o,style:i={},...a}=t;if(n&&(i.textDecoration="line-through"),"string"==typeof o)switch(e){case"prop":break;case"type":i.color=o.startsWith("'")?f:"var(--color-violet)";case"value":i.color=o.startsWith("'")?f:"undefined"===o||"null"===o?"var(--color-black-55)":"var(--color-success-green)";default:i.background="none",i.boxShadow="none"}return u.code({children:o,style:i,...a})};function m(t){let{props:e,valueType:n="string",camelCase:o,omit:d,showDefaultValue:f=!1}=t;const m=Object.keys(e||{}),v=Object.entries(e||{}).map((t=>{let[e,a]=t;if(!a)return null;const{type:l,defaultValue:p,doc:v,status:w}=a;return d&&d.includes(e)?null:(0,h.jsxs)(s.Z,{children:[(0,h.jsx)(r.Z,{children:(0,h.jsx)(g,{variant:"prop",strikethrough:"deprecated"===w,children:b(o?(0,c.zW)(e):e)})}),(0,h.jsx)(r.Z,{children:(Array.isArray(l)?l:[l]).map((t=>{if("string"==typeof t){if(String(t).includes("{valueType}")){if(Array.isArray(n))return n.map(((t,e)=>(0,h.jsx)(g,{variant:"type",children:t},t+e))).reduce(((t,e)=>(0,h.jsxs)(h.Fragment,{children:[t," ",(0,h.jsx)("br",{})," ",e]})));t=n}return(0,h.jsx)(g,{variant:"type",children:t},t)}})).reduce(((t,e)=>(0,h.jsxs)(h.Fragment,{children:[t," ",(0,h.jsx)("br",{})," ",e]})))}),f&&(0,h.jsx)(r.Z,{children:p?(0,h.jsx)(g,{variant:"value",children:p}):"required"===w&&"REQUIRED"}),(0,h.jsxs)(r.Z,{children:[(!f||"deprecated"===w)&&(0,h.jsxs)("em",{children:["(",w,") "]}),(0,h.jsx)(i.D,{components:u,children:o?y(v,m):v})]})]},e)}));return(0,h.jsx)(a.ZP.ScrollView,{children:(0,h.jsxs)(p,{children:[(0,h.jsx)("thead",{children:(0,h.jsxs)(s.Z,{children:[(0,h.jsx)(l.Z,{children:"Property"}),(0,h.jsx)(l.Z,{children:"Type"}),f&&(0,h.jsx)(l.Z,{children:"Default value"}),(0,h.jsx)(l.Z,{children:"Description"})]})}),(0,h.jsx)("tbody",{children:v})]})})}function y(t,e){return e.forEach((e=>{t=t.replace(new RegExp(e,"g"),(0,c.zW)(e))})),t}function b(t){return t.includes("/")?(0,h.jsx)(i.D,{components:u,children:t}):t}},6210:function(t,e,n){var o=n(30600);e.Z=o.Z},64223:function(t,e,n){var o=n(91859);e.Z=o.Z},41676:function(t,e,n){var o=n(35610);e.Z=o.Z}}]);
//# sourceMappingURL=component---src-docs-uilib-components-dialog-prop-table-mdx-8997df2554851823c3f0.js.map