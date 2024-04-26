"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[23213],{85179:function(t,e,o){o.d(e,{Z:function(){return y}});var a=o(70894),s=o(61185),n=o(55560),i=o(41676),l=o(6210),r=o(64223),u=o(37339),c=o(595),d=o(52322);const p={...c.L,p:t=>(0,d.jsx)("span",{...t})},h=(0,a.Z)(n.ZP,{target:"e13h2c840"})({name:"1qdk5x4",styles:"td{white-space:nowrap;}"}),f="var(--color-fire-red)",b=t=>{let{variant:e,strikethrough:o,children:a,style:s={},...n}=t;if(o&&(s.textDecoration="line-through"),"string"==typeof a)switch(e){case"prop":break;case"type":s.color=a.startsWith("'")?f:"var(--color-violet)";case"value":s.color=a.startsWith("'")?f:"undefined"===a?"var(--color-black-55)":"var(--color-success-green)";default:s.background="none",s.boxShadow="none"}return p.code({children:a,style:s,...n})};function y(t){let{props:e,valueType:o="string",camelCase:a,omit:c,showDefaultValue:f=!1}=t;const y=Object.keys(e),v=Object.entries(e).map((t=>{let[e,{type:n,defaultValue:r,doc:h,status:v}]=t;return c&&c.includes(e)?null:(0,d.jsxs)(i.Z,{children:[(0,d.jsx)(l.Z,{children:(0,d.jsx)(b,{variant:"prop",strikethrough:"deprecated"===v,children:g(a?(0,u.zW)(e):e)})}),(0,d.jsx)(l.Z,{children:(Array.isArray(n)?n:[n]).map((t=>{if("string"==typeof t)return String(t).includes("{valueType}")&&(t=o),(0,d.jsx)(b,{variant:"type",children:t},t)})).reduce(((t,e)=>(0,d.jsxs)(d.Fragment,{children:[t," ",(0,d.jsx)("br",{})," ",e]})))}),f&&(0,d.jsx)(l.Z,{children:r?(0,d.jsx)(b,{variant:"value",children:r}):"required"===v&&"REQUIRED"}),(0,d.jsxs)(l.Z,{children:[(!f||"deprecated"===v)&&(0,d.jsxs)("em",{children:["(",v,") "]}),(0,d.jsx)(s.D,{components:p,children:a?m(h,y):h})]})]},e)}));return(0,d.jsx)(n.ZP.ScrollView,{children:(0,d.jsxs)(h,{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)(i.Z,{children:[(0,d.jsx)(r.Z,{children:"Property"}),(0,d.jsx)(r.Z,{children:"Type"}),f&&(0,d.jsx)(r.Z,{children:"Default value"}),(0,d.jsx)(r.Z,{children:"Description"})]})}),(0,d.jsx)("tbody",{children:v})]})})}function m(t,e){return e.forEach((e=>{t=t.replace(new RegExp(e,"g"),(0,u.zW)(e))})),t}function g(t){return t.includes("/")?(0,d.jsx)(s.D,{components:p,children:t}):t}},11763:function(t,e,o){o.d(e,{V:function(){return a},h:function(){return s}});const a={mode:{doc:'If set to `async`, it prevents showing the "no options" message during typing / filtering. Defaults to `sync`.',type:"string",status:"optional"},input_value:{doc:"Lets you define a custom input value.",type:"string",status:"optional"},placeholder:{doc:'Use this to define the pre-filled placeholder text in the input. Defaults to `title="Skriv og velg"`.',type:"string",status:"optional"},title:{doc:"Give a title to let the user know what they have to do. Defaults to `Skriv og få alternativer`.",type:"React.Node",status:"optional"},disable_filter:{doc:"If set to `true`, word highlighting will still be active, but no options will be filtered out. Defaults to `false`.",type:"boolean",status:"optional"},disable_highlighting:{doc:"If set to `true`, word highlighting will be disabled, but the options will still get filtered. Defaults to `false`.",type:"boolean",status:"optional"},disable_reorder:{doc:"If set to `true`, reordering of search results will be disabled. Defaults to `false`.",type:"boolean",status:"optional"},search_numbers:{doc:"If set to `true` and `search_in_word_index` is not set, the user will be able to more easily search and filter e.g. bank account numbers. Defaults to `false`.",type:"boolean",status:"optional"},search_in_word_index:{doc:'This gives you the possibility to change the threshold number, which defines from what word on we search "inside words". Defaults to `3`.',type:"boolean",status:"optional"},keep_value:{doc:"Use `true` to not remove the typed value on input blur, if it is invalid. By default, the typed value will disappear / replaced by a selected value from the data list during the input field blur. Defaults to `false`.",type:"boolean",status:"optional"},keep_selection:{doc:"Use `true` to not remove selected item on input blur, when the input value is empty. Defaults to `false`.",type:"boolean",status:"optional"},keep_value_and_selection:{doc:"Like `keep_value` – but would not reset to the selected value during input field blur. Also, the selected value would still be kept. Defaults to `false`.",type:"boolean",status:"optional"},prevent_selection:{doc:"If set to `true`, no permanent selection will be made. Also, the typed value will not disappear on input blur (like `keep_value`). Defaults to `false`.",type:"boolean",status:"optional"},show_clear_button:{doc:"If set to `true`, a clear button is shown inside the input field. Defaults to `false`.",type:"boolean",status:"optional"},icon:{doc:"To be included in the autocomplete input.",type:["string","React.Node"],status:"optional"},icon_size:{doc:"Change the size of the icon pragmatically.",type:"string",status:"optional"},icon_position:{doc:"Position of the icon inside the autocomplete. Set to `left` or `right`. Defaults to `left`.",type:"string",status:"optional"},input_icon:{doc:"Same as `icon`.",type:["string","React.Node"],status:"optional"},triangle_position:{doc:"Position of icon arrow / triangle the drawer. Set to `left` or `right`. Defaults to `left`.",type:"string",status:"optional"},size:{doc:"Define the height of the Autocomplete. Can be set to `small`, `default`, `medium` and `large`. Defaults to `default`.",type:"string",status:"optional"},drawer_class:{doc:"Define a custom class for the internal drawer-list. This makes it possible more easily customize the drawer-list style with styled-components and the `css` style method. Defaults to `null`.",type:"string",status:"optional"},show_submit_button:{doc:'Use `true` to show a Autocomplete button to toggle the <a href="/uilib/components/fragments/drawer-list">DrawerList</a>. Defaults to `false`.',type:"boolean",status:"optional"},align_autocomplete:{doc:"Use `right` to change the options alignment direction. Defaults to `left`.",type:"string",status:"optional"},no_options:{doc:'Text show in the "no options" item. Defaults to `Ingen alternativer`.',type:"boolean",status:"optional"},aria_live_options:{doc:"Text read out by screen readers. This way users with screen readers know how many options they got during typing. Defaults to `%s alternativer`.",type:"React.Node",status:"optional"},show_all:{doc:"Text that lets a user unravel all the available options. Defaults to `Vis alt`.",type:"boolean",status:"optional"},indicator_label:{doc:'Text show on indicator "options" item. Defaults to `Henter data ...`.',type:"React.Node",status:"optional"},show_options_sr:{doc:"Only for screen readers. Title of the button to show the suggestions / options. It is always present and when activating, it opens the DrawerList and sets the focus on it. Defaults to `Bla gjennom alternativer`.",type:"string",status:"optional"},selected_sr:{doc:"Only for screen readers (VoiceOver). The label used to announce the selected item. Defaults to `Valgt:`.",type:"string",status:"optional"},submit_button_title:{doc:"Title on submit button. Defaults to `Vis alternativer`.",type:"React.Node",status:"optional"},submit_button_icon:{doc:"The icon used in the submit button. Defaults to `chevron_down`.",type:["string","React.Element"],status:"optional"},submit_element:{doc:"Replace the dropdown / submit button with a custom React element. Defaults to the input SubmitButton `import { SubmitButton } from &#39;@dnb/eufemia/components/input/Input&#39;`.",type:"React.Node",status:"optional"},opened:{doc:"If set to `true`, the Autocomplete will be rendered initially with a visible and accessible data list / options.",type:"boolean",status:"optional"},open_on_focus:{doc:"Use `true` to auto open the list once the user is entering the input field with the keyboard.",type:"boolean",status:"optional"},stretch:{doc:"If set to `true`, then the autocomplete will be 100% in available `width`.",type:"boolean",status:"optional"},skip_portal:{doc:"Set to `true` to disable the React Portal behavior. Defaults to `false`.",type:"string",status:"optional"},status:{doc:"Text with a status message. The style defaults to an error message. You can use `true` to only get the status color, without a message.",type:"string",status:"optional"},status_state:{doc:"Defines the state of the status. Currently, there are two statuses `[error, info]`. Defaults to `error`.",type:"string",status:"optional"},status_props:{doc:"Use an object to define additional FormStatus properties.",type:"object",status:"optional"},globalStatus:{doc:'The <a href="/uilib/components/global-status/properties/#configuration-object">configuration</a> used for the target <a href="/uilib/components/global-status">GlobalStatus</a>.',type:"object",status:"optional"},label:{doc:"Prepends the Form Label component. If no ID is provided, a random ID is created.",type:"React.Node",status:"optional"},label_direction:{doc:'Use `label_direction="vertical"` to change the label layout direction. Defaults to `horizontal`.',type:"React.Node",status:"optional"},label_sr_only:{doc:"Use `true` to make the label only readable by screen readers.",type:"boolean",status:"optional"},suffix:{doc:"Text describing the content of the Autocomplete more than the label. You can also send in a React component, so it gets wrapped inside the Autocomplete component.",type:"React.Node",status:"optional"},skeleton:{doc:"If set to `true`, an overlaying skeleton with animation will be shown.",type:"boolean",status:"optional"},input_ref:{doc:"Use a React.Ref to get access to the `input` DOM element.",type:"React.Ref",status:"optional"},input_element:{doc:"Lets you provide a custom React element as the input HTML element.",type:["string","React.Element"],status:"optional"},"[DrawerList](/uilib/components/fragments/drawer-list/properties)":{doc:"all DrawerList properties.",type:"Various",status:"optional"},"[Space](/uilib/layout/space/properties)":{doc:"Spacing properties like `top` or `bottom` are supported.",type:["string","object"],status:"optional"}},s={on_type:{doc:'Will be called for every key change the users makes. Returns an object with the input `value` inside `{ value, event, attributes }` including <a href="/uilib/components/autocomplete/events#dynamically-change-data">these methods</a>.',type:"function",status:"optional"},on_focus:{doc:'Will be called on user generated focus action. Returns an object with the input `value` inside `{ value, event, attributes }` including <a href="/uilib/components/autocomplete/events#dynamically-change-data">these methods</a>.',type:"function",status:"optional"},on_blur:{doc:'Will be called on user generated blur action. Returns an object with the input `value` inside `{ value, event, attributes }` including <a href="/uilib/components/autocomplete/events#dynamically-change-data">these methods</a>.',type:"function",status:"optional"},on_change:{doc:'Will be called on state changes made by the user. Returns an object with the new selected `data` item `{ data, event, attributes, value }` including <a href="/uilib/components/autocomplete/events#dynamically-change-data">these methods</a>.',type:"function",status:"optional"},on_select:{doc:'Will be called once the users selects an item by a click or keyboard navigation. Returns an object with the new selected `data` item `{ data, event, attributes, value, active_item }` including <a href="/uilib/components/autocomplete/events#dynamically-change-data">these methods</a>. The "active_item" property is the currently selected item by keyboard navigation',type:"function",status:"optional"},on_show:{doc:"Will be called once the user presses the autocomplete. Returns the data item `{ data, attributes }`.",type:"function",status:"optional"},on_hide:{doc:"Will be called once the user presses the autocomplete again, or clicks somewhere else. Returns the data item `{ data, attributes }`.",type:"function",status:"optional"}}},6210:function(t,e,o){var a=o(30600);e.Z=a.Z},64223:function(t,e,o){var a=o(91859);e.Z=a.Z},41676:function(t,e,o){var a=o(47048);e.Z=a.Z}}]);
//# sourceMappingURL=9ac00f793ed64ad2ab42bb1a8210c63484834d52-8048202e5137787da0e5.js.map