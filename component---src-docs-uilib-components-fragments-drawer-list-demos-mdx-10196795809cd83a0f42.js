"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[33398],{33274:function(n,e,t){t.r(e);var s=t(52322),a=t(45392),i=t(15312);function r(n){const e=Object.assign({h2:"h2",h3:"h3",p:"p",strong:"strong"},(0,a.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{children:"Demos"}),"\n",(0,s.jsx)(e.h3,{children:"Default DrawerList, triggered by a ToggleButton"}),"\n",(0,s.jsx)(i.p7,{}),"\n",(0,s.jsx)(e.h3,{children:"DrawerList list - only to visualize"}),"\n",(0,s.jsx)(i.jc,{}),"\n",(0,s.jsx)(e.h3,{children:"Default DrawerList"}),"\n",(0,s.jsx)(i.zD,{}),"\n",(0,s.jsx)(e.h3,{children:"Custom event and link on single item"}),"\n",(0,s.jsx)(i.fL,{}),"\n",(0,s.jsx)(e.h3,{children:"Using List and Items markup"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"NB:"})," By using this method you lose currently a lot of the core functionality like keyboard support and other accessibility features."]}),"\n",(0,s.jsx)(i.Ft,{})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,a.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(r,n)})):r(n)}},15312:function(n,e,t){t.d(e,{Ft:function(){return c},W6:function(){return _},fL:function(){return d},jc:function(){return o},p7:function(){return r},zD:function(){return l}});var s=t(70894),a=(t(2784),t(28204)),i=t(52322);const r=()=>(0,i.jsx)(p,{children:(0,i.jsx)(a.Z,{scope:{data:m},noInline:!0,children:"const DrawerListWithState = (props) => {\n  const [opened, setOpened] = React.useState(false)\n  const Relative = styled.span`\n    position: relative;\n  `\n  return (\n    <Relative>\n      <ToggleButton\n        text=\"Toggle\"\n        checked={opened}\n        icon={'chevron_' + (opened ? 'up' : 'down')}\n        icon_position=\"left\"\n        on_change={({ checked }) => setOpened(checked)}\n      />\n      <DrawerList\n        skip_portal\n        data={data}\n        opened={opened}\n        on_hide={() => setOpened(false)}\n        {...props}\n      />\n    </Relative>\n  )\n}\nrender(<DrawerListWithState />)\n"})}),o=()=>(0,i.jsx)(p,{children:(0,i.jsx)(a.Z,{"data-visual-test":"drawer-list",scope:{data:m},hideCode:!0,children:'<span className="dnb-drawer-list__list">\n  <ul className="dnb-drawer-list__options">\n    <li className="dnb-drawer-list__option first-of-type">\n      <span className="dnb-drawer-list__option__inner">\n        Brukskonto - Kari Nordmann\n      </span>\n    </li>\n    <li className="dnb-drawer-list__option dnb-drawer-list__option--selected">\n      <span className="dnb-drawer-list__option__inner">\n        <span className="dnb-drawer-list__option__item item-nr-1">\n          <NumberFormat ban>12345678902</NumberFormat>\n        </span>\n        <span className="dnb-drawer-list__option__item">\n          Sparekonto - Ole Nordmann\n        </span>\n      </span>\n    </li>\n    <li className="dnb-drawer-list__option">\n      <span className="dnb-drawer-list__option__inner">\n        <span className="dnb-drawer-list__option__item item-nr-1">\n          <NumberFormat ban>11345678962</NumberFormat>\n        </span>\n        <span className="dnb-drawer-list__option__item item-nr-2">\n          <a\n            className="dnb-anchor dnb-anchor--has-icon"\n            href="/uilib/components/fragments/drawer-list/"\n          >\n            Long link that will wrap over several lines\n          </a>\n        </span>\n        <span className="dnb-drawer-list__option__item">\n          Feriekonto - Kari Nordmann med et kjempelangt etternavnsen\n        </span>\n      </span>\n    </li>\n    <li className="dnb-drawer-list__option last-of-type">\n      <span className="dnb-drawer-list__option__inner">\n        <span className="dnb-drawer-list__option__item item-nr-1">\n          <NumberFormat ban>15349648901</NumberFormat>\n        </span>\n        <span className="dnb-drawer-list__option__item">\n          Oppussing - Ole Nordmann\n        </span>\n      </span>\n    </li>\n    <li className="dnb-drawer-list__triangle" />\n  </ul>\n</span>\n'})}),l=()=>(0,i.jsx)(p,{children:(0,i.jsx)(a.Z,{scope:{data:m},"data-visual-test":"drawer-list-default",children:"<DrawerList\n  skip_portal\n  opened\n  prevent_close\n  triangle_position=\"left\"\n  data={data}\n  value={3}\n  on_change={({ data: selectedDataItem }) => {\n    console.log('on_change', selectedDataItem)\n  }}\n  on_show={() => {\n    console.log('on_show')\n  }}\n  observer_element=\".dnb-live-preview\" // prevents direction to change when scrolling in this example\n/>\n"})}),d=()=>(0,i.jsx)(p,{children:(0,i.jsx)(a.Z,{scope:{data:m},"data-visual-test":"drawer-list-events",noInline:!0,children:'const CustomComponent = () => (\n  <CustomComponentInner\n    onTouchStart={preventDefault}\n    onClick={(e) => {\n      console.log(\'Do something different\')\n      preventDefault(e)\n    }}\n  >\n    Custom event handler\n  </CustomComponentInner>\n)\nconst CustomComponentInner = styled.span`\n  display: block;\n  width: 100%;\n  margin: -1rem -2rem -1rem -1rem;\n  padding: 1rem 2rem 1rem 1rem;\n`\nconst preventDefault = (e) => {\n  e.stopPropagation()\n  e.preventDefault()\n}\nconst CustomWidth = styled(DrawerList)`\n  .dnb-drawer-list__list {\n    width: var(--drawer-list-width);\n  }\n`\nrender(\n  <CustomWidth\n    skip_portal\n    opened\n    prevent_close\n    // more_menu\n    right\n    title="Choose an item"\n    data={() => [\n      <Link key="link" href="/">\n        Go to this Link\n      </Link>,\n      \'Or press on me\',\n      <CustomComponent key="custom" />,\n    ]}\n    on_change={({ value }) => {\n      console.log(\'More menu:\', value)\n    }}\n    suffix={<HelpButton title="Modal Title">Modal content</HelpButton>}\n    observer_element=".dnb-live-preview" // prevents direction to change when scrolling in this example\n  />,\n)\n'})}),c=()=>(0,i.jsx)(p,{children:(0,i.jsx)(a.Z,{"data-visual-test":"drawer-items",noInline:!0,children:"const list = [\n  {\n    value: 'A',\n  },\n  {\n    value: 'B',\n  },\n  {\n    value: 'C',\n  },\n]\nconst CustomWidth = styled(DrawerList)`\n  .dnb-drawer-list__list {\n    width: var(--drawer-list-width);\n  }\n`\nconst DrawerListWithState = () => {\n  const [selected, setSelected] = React.useState('C')\n  return (\n    <CustomWidth skip_portal opened prevent_close>\n      <DrawerList.Options>\n        {list.map(({ value, ...props }, i) => (\n          <DrawerList.Item\n            key={i}\n            selected={value === selected}\n            value={value}\n            on_click={({ value }) => setSelected(value)}\n            {...props}\n          >\n            {value}\n          </DrawerList.Item>\n        ))}\n      </DrawerList.Options>\n    </CustomWidth>\n  )\n}\nrender(<DrawerListWithState />)\n"})}),p=(0,s.Z)("div",{target:"e1joex2o0"})({name:"1avz0kc",styles:"[data-visual-test]{.dnb-drawer-list__list{position:relative;}}[data-visual-test='drawer-list'] .dnb-drawer-list__list{display:block;visibility:visible;position:relative;top:0;width:var(--drawer-list-width);}"}),m=[{selected_key:"key_0",content:"Item 1 Content"},{selected_key:"key_1",content:["Item 2 Value","Item 2 Content"]},{selected_key:"key_2",content:["Item 3 Content A","Item 3 Content B"]},{selected_key:"key_3",content:["Item 4 Content A",(0,i.jsx)(i.Fragment,{children:"Custom Component"})]}],_=()=>(0,i.jsx)(p,{children:(0,i.jsx)(a.Z,{scope:{data:m},hidePreview:!0,hideToolbar:!0,children:"<DrawerList\n  options_render={({ Items, Item, data }) => (\n    <>\n      <Items />\n      <Item>Addition</Item>\n      {data.length > 1 && <li>Addition</li>}\n    </>\n  )}\n/>\n"})})}}]);
//# sourceMappingURL=component---src-docs-uilib-components-fragments-drawer-list-demos-mdx-10196795809cd83a0f42.js.map