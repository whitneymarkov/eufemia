"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[99211,51625,80851],{60441:function(e,n,a){a.r(n);var t=a(52322),s=a(45392),i=a(8660),l=a(53173);function o(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.default,{}),"\n",(0,t.jsx)(l.default,{})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o()}},53173:function(e,n,a){a.r(n),a.d(n,{default:function(){return j}});var t=a(52322),s=a(45392),i=(a(2784),a(64368)),l=a(67391),o=a(14005),r=a(52371);const c=()=>(0,t.jsx)(i.Z,{"data-visual-test":"tag-interactable",children:'<Tag.Group label="Interactable tags">\n  <Tag\n    data-visual-test="tag-clickable"\n    variant="clickable"\n    onClick={() => \'click\'}\n  >\n    Clickable\n  </Tag>\n  <Tag\n    data-visual-test="tag-addable"\n    variant="addable"\n    onClick={() => \'click\'}\n  >\n    Addable\n  </Tag>\n  <Tag\n    data-visual-test="tag-removable"\n    variant="removable"\n    onClick={() => \'click\'}\n  >\n    Removable\n  </Tag>\n</Tag.Group>\n'}),d=()=>(0,t.jsx)(i.Z,{hideCode:!0,"data-visual-test":"tag-default",children:'<Tag.Group label="Payment types">\n  <Tag>Digipost</Tag>\n  <Tag>AvtaleGiro</Tag>\n</Tag.Group>\n'}),g=()=>(0,t.jsx)(i.Z,{hideCode:!0,"data-visual-test":"tag-icon",scope:{EInvoice:l.Z,AInvoice:o.Z,DigiPost:r.Z},children:'<Tag.Group label="Betalingstyper">\n  <Tag icon={AInvoice} text="AvtaleGiro" />\n  <Tag icon={EInvoice} text="eFaktura" />\n  <Tag icon={DigiPost} text="DigiPost" />\n</Tag.Group>\n'}),h=()=>(0,t.jsx)(i.Z,{"data-visual-test":"tag-inline",children:'\nText{\' \'}\n<Tag.Group label="Inline">\n  <Tag text="First" /> between\n  <Tag text="Second" />\n  <Tag text="Third" />\n</Tag.Group>{\' \'}\nText\n\n'}),x=()=>(0,t.jsx)(i.Z,{"data-visual-test":"tag-removable-list",noInline:!0,children:'const Genres = () => {\n  const [tagsAdded, setTagsAdded] = React.useState([\n    {\n      key: 0,\n      text: \'Action\',\n    },\n    {\n      key: 1,\n      text: \'Comedy\',\n    },\n    {\n      key: 2,\n      text: \'Drama\',\n    },\n    {\n      key: 3,\n      text: \'Horror\',\n    },\n  ])\n  const [tagsRemoved, setTagsRemoved] = React.useState([\n    {\n      key: 4,\n      text: \'Fantasy\',\n    },\n  ])\n  const handleRemove = React.useCallback(\n    (tagToRemove) => () => {\n      setTagsAdded(tagsAdded.filter((tag) => tag.key !== tagToRemove.key))\n      setTagsRemoved([...tagsRemoved, tagToRemove])\n    },\n    [tagsAdded, tagsRemoved],\n  )\n  const handleAdd = React.useCallback(\n    (tagToAdd) => () => {\n      setTagsAdded([...tagsAdded, tagToAdd])\n      setTagsRemoved(tagsRemoved.filter((tag) => tag.key !== tagToAdd.key))\n    },\n    [tagsAdded, tagsRemoved],\n  )\n  return (\n    <Flex.Stack>\n      <FieldBlock label="Selected">\n        <Tag.Group label="Genres Selected">\n          {tagsAdded.map((tag) => {\n            return (\n              <Tag\n                key={tag.key}\n                text={tag.text}\n                variant="removable"\n                onClick={handleRemove(tag)}\n              />\n            )\n          })}\n        </Tag.Group>\n      </FieldBlock>\n      <FieldBlock label="Removed">\n        <Tag.Group label="Genres Available">\n          {tagsRemoved.map((tag) => {\n            return (\n              <Tag\n                key={tag.key}\n                text={tag.text}\n                variant="addable"\n                onClick={handleAdd(tag)}\n              />\n            )\n          })}\n        </Tag.Group>\n      </FieldBlock>\n    </Flex.Stack>\n  )\n}\nrender(<Genres />)\n'}),p=()=>(0,t.jsx)(i.Z,{"data-visual-test":"tag-skeleton",children:'<Tag.Group label="Skeletons">\n  <Tag skeleton text="Skeleton" />\n  <Tag skeleton text="Skeleton" />\n  <Tag skeleton text="Skeleton" />\n</Tag.Group>\n'});function u(e){const n=Object.assign({h2:"h2",h3:"h3",p:"p",ul:"ul",li:"li",code:"code"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{children:"Demos"}),"\n",(0,t.jsx)(n.h3,{children:"Tag"}),"\n",(0,t.jsx)(n.p,{children:"There are three interactive tag variants:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"clickable"})," (can also accept a custom icon as it does not have on of its own)"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"addable"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"removable"})," (also triggers ",(0,t.jsx)(n.code,{children:"onClick"})," when pressing the ",(0,t.jsx)(n.code,{children:"Delete"})," or ",(0,t.jsx)(n.code,{children:"Backspace"})," keyboard key (",(0,t.jsx)(n.code,{children:"keyup"})," event), can be disabled with the ",(0,t.jsx)(n.code,{children:"omitOnKeyUpDeleteEvent"})," property)"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["We require ",(0,t.jsx)(n.code,{children:"<Tag>"}),"-components to be wrapped by a ",(0,t.jsx)(n.code,{children:"<Tag.Group>"}),"-component. The required ",(0,t.jsx)(n.code,{children:"label"}),"-property in ",(0,t.jsx)(n.code,{children:"<Tag.Group>"})," will ensure the correct use of accessibility for screen readers."]}),"\n",(0,t.jsx)(c,{}),"\n",(0,t.jsx)(n.h3,{children:"Non-interactive tag"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Not interactable"}),"\n",(0,t.jsx)(n.li,{children:"Can have icon"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Non-interactable tags are simply made by skipping all callback properties, and are the only type that can have an icon."}),"\n",(0,t.jsx)(d,{}),"\n",(0,t.jsx)(n.h3,{children:"Non-interactive tag with icon"}),"\n",(0,t.jsx)(g,{}),"\n",(0,t.jsx)(n.h2,{children:"Usage examples"}),"\n",(0,t.jsx)(n.h3,{children:"Multiple removable tags"}),"\n",(0,t.jsxs)(n.p,{children:["Removable tags can for example be used in filter lists. This is a simple example on how to implement a filter list using removable ",(0,t.jsx)(n.code,{children:"Tags"}),"."]}),"\n",(0,t.jsx)(x,{}),"\n",(0,t.jsx)(n.h3,{children:"Tag used inside text"}),"\n",(0,t.jsx)(h,{}),"\n",(0,t.jsx)(n.h3,{children:"Tag used as skeleton"}),"\n",(0,t.jsx)(p,{})]})}var j=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(u,e)})):u(e)}},8660:function(e,n,a){a.r(n);var t=a(52322),s=a(45392);function i(e){const n=Object.assign({h2:"h2",pre:"pre",code:"code",p:"p"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{children:"Import"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { Tag } from '@dnb/eufemia'\n"})}),"\n",(0,t.jsx)(n.h2,{children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The Tag is a compact element for displaying discrete information.",(0,t.jsx)("br",{}),"\nThe component should have a clear and helpful relationship to the content or task it represents.",(0,t.jsx)("br",{}),"\nFor example, a Tag can be used to display a category of an item.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(n.p,{children:["Tags with the ",(0,t.jsx)(n.code,{children:"onDelete"}),"-property can be used to define an action. A clickable tag will change appearance on focus, hover, and click. ",(0,t.jsx)("br",{})]})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},14005:function(e,n,a){var t=a(52322);n.Z=e=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16",...e,children:[(0,t.jsx)("path",{stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M3.847 4V2.65a1 1 0 0 1 1-1h5.175a1 1 0 0 1 .764.354l2.639 3.119a1 1 0 0 1 .236.646v7.582a1 1 0 0 1-1 1H4.847a1 1 0 0 1-1-1V13"}),(0,t.jsx)("path",{fill:"#000",d:"M5.865 9.746V7.989c0-1.178-.76-1.834-2.128-1.834-1.007 0-1.681.38-1.985 1.112l1.045.532a.898.898 0 0 1 .864-.59c.504 0 .817.276.817.723v.076l-1.111.17C2.141 8.369 1.6 8.835 1.6 9.69c0 .845.636 1.406 1.615 1.406.636 0 1.14-.257 1.406-.675.123.428.465.675.969.675.228 0 .475-.038.598-.095l.02-.902c-.238 0-.343-.105-.343-.352Zm-2.384.38c-.314 0-.57-.218-.57-.494 0-.351.247-.551.798-.636l.77-.124c0 .779-.371 1.254-.998 1.254Z"})]})},52371:function(e,n,a){var t=a(52322);n.Z=e=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16",...e,children:[(0,t.jsx)("path",{stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M3.856 3v-.35a1 1 0 0 1 1-1h5.175a1 1 0 0 1 .764.354l2.639 3.119a1 1 0 0 1 .237.646v7.582a1 1 0 0 1-1 1H4.856a1 1 0 0 1-1-1V13"}),(0,t.jsx)("path",{fill:"#000",d:"M5.229 4.35v2.394c-.342-.39-.827-.589-1.397-.589-1.254 0-2.232 1.083-2.232 2.47 0 1.387.978 2.47 2.232 2.47.656 0 1.197-.266 1.549-.788V11h1.235V4.35H5.229ZM4.06 9.993c-.646 0-1.073-.55-1.073-1.368 0-.817.427-1.368 1.073-1.368.703 0 1.169.551 1.169 1.368 0 .817-.466 1.368-1.169 1.368Z"})]})},67391:function(e,n,a){var t=a(52322);n.Z=e=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16",...e,children:[(0,t.jsx)("path",{stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M3.828 4V2.65a1 1 0 0 1 1-1h5.176a1 1 0 0 1 .763.354l2.64 3.119a1 1 0 0 1 .236.646v7.582a1 1 0 0 1-1 1H4.828a1 1 0 0 1-1-1V13"}),(0,t.jsx)("path",{fill:"#000",d:"M6.217 8.71c0-1.557-.874-2.545-2.29-2.545-1.377 0-2.327.997-2.327 2.46 0 1.416.95 2.47 2.394 2.47 1.14 0 1.757-.427 2.09-.988l-.893-.617c-.219.285-.504.56-1.188.56-.446 0-.988-.304-1.073-1.007h3.249c.019-.057.038-.237.038-.332Zm-2.29-1.49c.59 0 .912.342 1.007.97H2.94c.095-.618.428-.97.988-.97Z"})]})}}]);
//# sourceMappingURL=component---src-docs-uilib-components-tag-mdx-ac3a2ce8c5768c5075b2.js.map