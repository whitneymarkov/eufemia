"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[65502],{59895:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var a=t(52322),o=t(45392),s=t(70894),l=(t(2784),t(99587)),i=t(42277),d=t(81726);const r=(0,s.Z)("div",{target:"e40yqxl0"})({name:"y9dx7w",styles:".dnb-form-label{margin-right:1rem;}[data-visual-test]{>:not(.dnb-dropdown--is-popup):not(\n        .dnb-dropdown--independent-width\n      ):not(.dnb-dropdown--stretch) .dnb-dropdown__shell{width:var(--dropdown-width);}}[data-visual-test-wrapper='dropdown-action_menu-custom'],[data-visual-test-wrapper='dropdown-more_menu']{width:20rem;height:15rem!important;}[data-visual-test='dropdown-action_menu-custom'] .dnb-dropdown__list{width:15rem;}[data-visual-test='dropdown-list'] .dnb-drawer-list__list{display:block;visibility:visible;position:relative;top:0;width:var(--dropdown-width);}"}),c=[{selected_key:"key_0",selected_value:"Item 1 Value",content:"Item 1 Content"},{selected_key:"key_1",content:["Item 2 Value","Item 2 Content"]},{selected_key:"key_2",selected_value:"Item 3 Value",content:["Item 3 Content A","Item 3 Content B"]},{selected_key:"key_3",selected_value:"Item 4 Value",content:["Item 4 Content A",(0,a.jsx)(a.Fragment,{children:"Custom Component"})]}],m=()=>(0,a.jsx)(r,{children:(0,a.jsx)(l.Z,{noInline:!0,children:"const scrollableData = [\n  {\n    content: 'A',\n  },\n  {\n    content: 'B',\n  },\n  {\n    selected_value: (\n      <NumberFormat always_selectall ban>\n        11345678962\n      </NumberFormat>\n    ),\n    content: [\n      <NumberFormat key=\"ban-1\" always_selectall ban>\n        11345678962\n      </NumberFormat>,\n      'C',\n    ],\n  },\n  {\n    selected_value: (\n      <NumberFormat always_selectall ban>\n        15349648901\n      </NumberFormat>\n    ),\n    content: [\n      <NumberFormat key=\"ban-2\" always_selectall ban>\n        15349648901\n      </NumberFormat>,\n      'D',\n    ],\n  },\n  {\n    content: 'E',\n  },\n  {\n    selected_key: 'key_1',\n    selected_value: 'Find me by keypress',\n    content: ['F', 'F', 'F', 'F'],\n  },\n  {\n    content: 'G',\n  },\n  {\n    content: 'H',\n  },\n]\nrender(\n  <Dropdown\n    data={scrollableData}\n    value=\"key_1\" // use either index (5) or selected_key: 'key_1'\n    label=\"Label\"\n  />,\n)\n"})}),p=()=>(0,a.jsx)(r,{children:(0,a.jsx)(l.Z,{"data-visual-test":"dropdown-closed",noInline:!0,children:"const data = [\n  // Every data item can, beside \"content\" - contain what ever\n  {\n    // (optional) can be what ever\n    selected_key: 'key_0',\n    // (optional) is show instead of \"content\", once selected\n    selected_value: 'Item 1 Value',\n    // Item content as a string or array\n    content: 'Item 1 Content',\n  },\n  {\n    selected_key: 'key_1',\n    content: ['Item 2 Value', 'Item 2 Content'],\n  },\n  {\n    selected_value: (\n      <NumberFormat always_selectall ban>\n        11345678962\n      </NumberFormat>\n    ),\n    content: [\n      <NumberFormat key=\"ban\" always_selectall ban>\n        11345678962\n      </NumberFormat>,\n      'Bank account number',\n    ],\n  },\n  {\n    selected_key: 'key_2',\n    selected_value: 'Item 3 Value',\n    content: ['Item 3 Content A', 'Item 3 Content B'],\n  },\n  {\n    selected_key: 'key_3',\n    selected_value: 'Item 4 Value',\n    content: ['Item 4 Content A', <>Custom Component</>],\n  },\n]\nrender(\n  <Dropdown\n    data={data}\n    label=\"Label\"\n    title=\"Please select a value\"\n    on_change={({ data }) => {\n      console.log('on_change', data)\n    }}\n  />,\n)\n"})}),h=()=>(0,a.jsx)(r,{children:(0,a.jsx)(l.Z,{"data-visual-test":"dropdown-ellipsis",children:"<Dropdown\n  data={['Long text that will overflow with CSS ellipsis']}\n  value={0}\n  label=\"Label\"\n/>\n"})}),u=()=>(0,a.jsx)(r,{children:(0,a.jsx)(l.Z,{scope:{visualTestProps:n=>n?{opened:!0,prevent_close:!0,direction:"top"}:{}},"data-visual-test":"dropdown-item-directions",children:'<Dropdown\n  label="Label"\n  data={[\n    [\'Vertical\', \'alignment\'],\n    <>\n      <P modifier="medium">Vertical</P>\n      <P>alignment</P>\n    </>,\n    <Dropdown.HorizontalItem key="item-1">\n      <P modifier="medium" right="x-small">\n        Horizontal\n      </P>\n      <P>alignment</P>\n    </Dropdown.HorizontalItem>,\n  ]}\n  {...visualTestProps(\n    globalThis.IS_TEST &&\n      window.location.search.includes(\'item-directions\'),\n  )}\n/>\n'})}),_=()=>(0,a.jsx)(r,{children:(0,a.jsx)(l.Z,{scope:{data:c},"data-visual-test":"dropdown-left-icon",children:"<Dropdown\n  label=\"Label\"\n  icon_position=\"left\"\n  data={data}\n  value={3}\n  skip_portal={true}\n  on_change={({ data: selectedDataItem }) => {\n    console.log('on_change', selectedDataItem)\n  }}\n  on_show={() => {\n    console.log('on_show')\n  }}\n/>\n"})}),w=()=>(0,a.jsx)(r,{children:(0,a.jsx)(l.Z,{scope:{trash:i.Z,download:d.Z},"data-visual-test":"dropdown-action_menu",children:'<Dropdown\n  title="ActionMenu"\n  action_menu={true}\n  align_dropdown="left"\n  data={() => ({\n    trash: (\n      <>\n        <Icon icon={trash} right />\n        Move to trash\n      </>\n    ),\n    download: (\n      <>\n        <Icon icon={download} right />\n        Download\n      </>\n    ),\n  })}\n  on_change={({ value }) => console.log(\'action:\', value)}\n/>\n'})}),b=()=>(0,a.jsx)(r,{children:(0,a.jsx)(l.Z,{scope:{data:c},"data-visual-test":"dropdown-tertiary",children:'<Dropdown\n  variant="tertiary"\n  independent_width={true}\n  icon_position="left"\n  align_dropdown="left"\n  data={data}\n/>\n'})}),x=()=>(0,a.jsx)(r,{children:(0,a.jsx)(l.Z,{scope:{visualTestProps:n=>n?{opened:!0,prevent_close:!0,independent_width:!0,direction:"bottom"}:{}},"data-visual-test":"dropdown-more_menu",children:'\n<Dropdown\n  more_menu={true}\n  size="small"\n  title="Choose an item"\n  data={() => [\n    <Link href="/" key="item-1">\n      Go to this Link\n    </Link>,\n    \'Or press on me\',\n    <>Custom component</>,\n  ]}\n  right="small"\n  {...visualTestProps(\n    globalThis.IS_TEST && window.location.search.includes(\'left-side\'),\n  )}\n/>\n<Dropdown\n  prevent_selection={true}\n  align_dropdown="right"\n  size="small"\n  title={null}\n  aria-label="Choose an item"\n  data={() => ({\n    first: (\n      <Link href="/" key="item-1">\n        Go to this Link\n      </Link>\n    ),\n    second: \'Or press on me\',\n    third: <>Custom component</>,\n  })}\n  right="small"\n  {...visualTestProps(\n    globalThis.IS_TEST && window.location.search.includes(\'right-side\'),\n  )}\n/>\n<Dropdown\n  more_menu={true}\n  title="Choose an item"\n  data={[\n    <Link href="/" key="item-1">\n      Go to this Link\n    </Link>,\n    \'Or press on me\',\n    <>Custom component</>,\n  ]}\n  right="small"\n/>\n<Dropdown\n  prevent_selection={true}\n  align_dropdown="right"\n  title={null}\n  aria-label="Choose an item"\n  data={() => ({\n    first: (\n      <Link href="/" key="item-1">\n        Go to this Link\n      </Link>\n    ),\n    second: \'Or press on me\',\n    third: <>Custom component</>,\n  })}\n  on_change={({ value }) => {\n    console.log(\'on_change\', value)\n  }}\n  on_select={({ active_item }) => {\n    console.log(\'on_select\', active_item)\n  }}\n/>\n\n'})}),v=()=>(0,a.jsx)(r,{children:(0,a.jsx)(l.Z,{scope:{data:c},"data-visual-test":"dropdown-disabled",children:"<Dropdown disabled data={['Disabled Dropdown']} label=\"Label\" />\n"})}),j=()=>(0,a.jsx)(r,{children:(0,a.jsx)(l.Z,{"data-visual-test":"dropdown-disabled-tertiary",children:'<Dropdown\n  disabled\n  variant="tertiary"\n  data={[\'Disabled Dropdown\']}\n  label="Disabled tertiary dropdown"\n/>\n'})}),y=()=>(0,a.jsx)(r,{children:(0,a.jsx)(l.Z,{scope:{data:c,visualTestProps:n=>n?{opened:!0,prevent_close:!0,independent_width:!0,skip_portal:!0,direction:"bottom"}:{}},"data-visual-test":"dropdown-action_menu-custom",noInline:!0,children:'const CustomComponent = () => (\n  <CustomComponentInner\n    onTouchStart={preventDefault}\n    onClick={(e) => {\n      console.log(\'Do something different\')\n      preventDefault(e)\n    }}\n  >\n    Custom event handler\n  </CustomComponentInner>\n)\nconst CustomComponentInner = styled.span`\n  display: block;\n  width: 100%;\n  margin: -1rem -2rem -1rem -1rem;\n  padding: 1rem 2rem 1rem 1rem;\n`\nconst preventDefault = (e) => {\n  e.stopPropagation()\n  e.preventDefault()\n}\nrender(\n  <Dropdown\n    action_menu\n    right\n    label="Label"\n    title="Choose an item"\n    data={() => ({\n      first: (\n        <Link href="/" key="item-1">\n          Go to this Link\n        </Link>\n      ),\n      second: \'Or press on me\',\n      third: <CustomComponent key="item-2" />,\n    })}\n    on_change={({ value }) => {\n      console.log(\'More menu:\', value)\n    }}\n    suffix={<HelpButton title="Modal Title">Modal content</HelpButton>}\n    {...visualTestProps(\n      globalThis.IS_TEST &&\n        window.location.search.includes(\'action_menu-custom\'),\n    )}\n  />,\n)\n'})}),g=()=>(0,a.jsx)(r,{children:(0,a.jsx)(l.Z,{"data-visual-test":"dropdown-sizes",scope:{data:c},children:'<Flex.Vertical>\n  <Dropdown label="Label" size="default" data={() => data} />\n  <Dropdown label="Label" size="medium" data={() => data} />\n  <Dropdown label="Label" size="large" data={() => data} />\n</Flex.Vertical>\n'})}),k=()=>(0,a.jsx)(r,{children:(0,a.jsx)(l.Z,{scope:{data:c},noInline:!0,children:'const CustomWidthOne = styled(Dropdown)`\n  .dnb-dropdown__shell {\n    width: 10rem;\n  }\n`\nconst CustomWidthTwo = styled(Dropdown)`\n  &.dnb-dropdown--is-popup .dnb-drawer-list__root {\n    width: 12rem;\n  }\n`\nconst CustomWidthThree = styled(Dropdown)`\n  /** Change the "__shell" width */\n  .dnb-dropdown__shell {\n    width: 10rem;\n  }\n\n  /** Change the "__list" width */\n  .dnb-drawer-list__root {\n    width: 20rem;\n  }\n`\nconst CustomWidthFour = styled(Dropdown)`\n  width: 60%;\n  min-width: 224px; /** 14rem (please use pixels on min-width!) */\n  max-width: 25rem;\n\n  /** In case we have a label */\n  .dnb-form-label + .dnb-dropdown__inner {\n    width: 100%;\n  }\n`\nrender(\n  <Flex.Vertical>\n    <CustomWidthOne\n      label="Label"\n      size="default"\n      icon_position="left"\n      data={data}\n    />\n    <CustomWidthTwo label="Label" size="small" more_menu data={data} />\n    <CustomWidthThree\n      label="Label"\n      size="large"\n      align_dropdown="right"\n      data={data}\n    />\n    <CustomWidthFour\n      title="Min and max width"\n      stretch={true}\n      data={data}\n    />\n  </Flex.Vertical>,\n)\n'})}),f=()=>(0,a.jsx)(r,{children:(0,a.jsx)(l.Z,{"data-visual-test":"dropdown-status-error",scope:{data:c},children:'<Dropdown\n  data={data}\n  label="Label"\n  label_direction="vertical"\n  status="Message to the user"\n/>\n'})}),C=()=>(0,a.jsx)(r,{children:(0,a.jsx)(l.Z,{"data-visual-test":"dropdown-list",scope:{data:c},hideCode:!0,children:'<span className="dnb-drawer-list__list">\n  <ul className="dnb-drawer-list__options">\n    <li className="dnb-drawer-list__option first-of-type">\n      <span className="dnb-drawer-list__option__inner">\n        Brukskonto - Kari Nordmann\n      </span>\n    </li>\n    <li className="dnb-drawer-list__option dnb-drawer-list__option--selected">\n      <span className="dnb-drawer-list__option__inner">\n        <span className="dnb-drawer-list__option__item item-nr-1">\n          <NumberFormat always_selectall key="n-1" ban>\n            12345678902\n          </NumberFormat>\n        </span>\n        <span className="dnb-drawer-list__option__item">\n          Sparekonto - Ole Nordmann\n        </span>\n      </span>\n    </li>\n    <li className="dnb-drawer-list__option">\n      <span className="dnb-drawer-list__option__inner">\n        <span className="dnb-drawer-list__option__item item-nr-1">\n          <NumberFormat always_selectall key="n-2" ban>\n            11345678962\n          </NumberFormat>\n        </span>\n        <span className="dnb-drawer-list__option__item">\n          Feriekonto - Kari Nordmann med et kjempelangt etternavnsen\n        </span>\n      </span>\n    </li>\n    <li className="dnb-drawer-list__option last-of-type">\n      <span className="dnb-drawer-list__option__inner">\n        <span className="dnb-drawer-list__option__item item-nr-1">\n          <NumberFormat always_selectall key="n-3" ban>\n            15349648901\n          </NumberFormat>\n        </span>\n        <span className="dnb-drawer-list__option__item">\n          Oppussing - Ole Nordmann\n        </span>\n      </span>\n    </li>\n    <li className="dnb-drawer-list__triangle" />\n  </ul>\n</span>\n'})});function D(n){const e=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code"},(0,o.ah)(),n.components),{VisibleWhenVisualTest:t}=e;return t||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("VisibleWhenVisualTest",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{children:"Demos"}),"\n",(0,a.jsx)(e.h3,{children:"Default dropdown"}),"\n",(0,a.jsxs)(e.p,{children:["No ",(0,a.jsx)(e.code,{children:"value"})," is defined, but a ",(0,a.jsx)(e.code,{children:"title"})," is given."]}),"\n",(0,a.jsx)(p,{}),"\n",(0,a.jsx)(e.h3,{children:"Dropdown with different item content directions"}),"\n",(0,a.jsx)(u,{}),"\n",(0,a.jsx)(e.h3,{children:"Icon on left side"}),"\n",(0,a.jsx)(_,{}),"\n",(0,a.jsx)(e.h3,{children:"ActionMenu"}),"\n",(0,a.jsx)(e.p,{children:"The ActionMenu will change its characteristics in mobile view. It will hide the title, and the DrawerList will be placed on the bottom of the page."}),"\n",(0,a.jsx)(w,{}),"\n",(0,a.jsx)(e.h3,{children:"MoreMenu"}),"\n",(0,a.jsx)(e.p,{children:"No lasting selection will be made."}),"\n",(0,a.jsx)(x,{}),"\n",(0,a.jsx)(e.h3,{children:"Dropdown as tertiary variant"}),"\n",(0,a.jsx)(b,{}),"\n",(0,a.jsx)(e.h3,{children:"Custom item events"}),"\n",(0,a.jsx)(y,{}),"\n",(0,a.jsx)(e.h3,{children:"Dropdown in different sizes"}),"\n",(0,a.jsxs)(e.p,{children:["Four sizes are available: ",(0,a.jsx)(e.code,{children:"small"}),", ",(0,a.jsx)(e.code,{children:"default"}),", ",(0,a.jsx)(e.code,{children:"medium"})," and ",(0,a.jsx)(e.code,{children:"large"})]}),"\n",(0,a.jsx)(g,{}),"\n",(0,a.jsx)(e.h3,{children:"Custom width"}),"\n",(0,a.jsx)(k,{}),"\n",(0,a.jsx)(e.h3,{children:"Dropdown with status"}),"\n",(0,a.jsx)(e.p,{children:"And vertical label layout."}),"\n",(0,a.jsx)(f,{}),"\n",(0,a.jsx)(e.h3,{children:"Findable list"}),"\n",(0,a.jsx)(e.p,{children:"With long list to make it scrollable and searchable"}),"\n",(0,a.jsx)(m,{}),"\n",(0,a.jsx)(e.h3,{children:"Disabled dropdown"}),"\n",(0,a.jsx)(v,{}),"\n",(0,a.jsx)(e.h3,{children:"Disabled tertiary dropdown"}),"\n",(0,a.jsx)(j,{}),"\n",(0,a.jsx)(e.h3,{children:"DrawerList opened"}),"\n",(0,a.jsx)(e.p,{children:"Only to visualize and used for visual testing"}),"\n",(0,a.jsx)(C,{}),"\n",(0,a.jsx)(t,{children:(0,a.jsx)(h,{})})]})}var N=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,o.ah)(),n.components);return e?(0,a.jsx)(e,Object.assign({},n,{children:(0,a.jsx)(D,n)})):D(n)}}}]);
//# sourceMappingURL=808c39ece4eb360b91453eb7f2b18368d728ea91-ec0d8765ee2313ffb94d.js.map