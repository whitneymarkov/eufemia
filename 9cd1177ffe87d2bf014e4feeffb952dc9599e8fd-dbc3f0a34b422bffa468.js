"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[96817],{93727:function(n,e,l){l.r(e),l.d(e,{CurrencyField:function(){return j},InputExampleClear:function(){return _},InputExampleDefault:function(){return c},InputExampleDisabled:function(){return h},InputExampleFormStatus:function(){return m},InputExampleMedium:function(){return p},InputExampleNumbers:function(){return I},InputExamplePassword:function(){return x},InputExampleSearch:function(){return s},InputExampleStretched:function(){return v},InputExampleSubmit:function(){return b},InputExampleSuffix:function(){return g},InputExampleWithIcon:function(){return d},InputScreenshotTests:function(){return f}});var t=l(70894),a=(l(2784),l(99587));const i=l(64941).Z;var r=i;i._formElement=!0,i._supportsSpacingProps=!0;var u=l(52322);const o=(0,t.Z)("div",{target:"e15ppw4r0"})({name:"hjt2ha",styles:"display:block;width:100%;.dnb-input input{min-width:10rem;}.dnb-form-label+.dnb-input{margin-top:0;}"}),c=()=>(0,u.jsx)(o,{children:(0,u.jsx)(a.Z,{"data-visual-test":"input-placeholder",children:'<Input label="Label" placeholder="Placeholder text" />\n'})}),s=()=>(0,u.jsx)(o,{children:(0,u.jsx)(a.Z,{"data-visual-test":"input-search",children:'<Input\n  label="Search"\n  type="search"\n  placeholder="Search text placeholder"\n  on_change={({ value }) => {\n    console.log(\'on_change\', value)\n  }}\n  on_submit={({ value }) => {\n    console.log(\'Submit:\', value)\n  }}\n/>\n'})}),p=()=>(0,u.jsx)(o,{children:(0,u.jsx)(a.Z,{"data-visual-test":"input-medium",children:'<Input\n  size="medium"\n  type="search"\n  stretch={true}\n  value="Medium search value"\n  on_change={({ value }) => {\n    console.log(\'on_change\', value)\n  }}\n/>\n'})}),d=()=>(0,u.jsx)(o,{children:(0,u.jsx)(a.Z,{"data-visual-test":"input-icon",children:'\n<Input\n  label="Input with icon"\n  placeholder="Input"\n  label_direction="vertical"\n  icon="check"\n  bottom\n/>\n<Input\n  label="Input with icon"\n  label_sr_only\n  placeholder="Input with a placeholder"\n  icon_position="right"\n  icon="check"\n  align="right"\n/>\n\n'})}),h=()=>(0,u.jsx)(o,{children:(0,u.jsx)(a.Z,{"data-visual-test":"input-disabled",children:'<Input\n  disabled\n  label="Disabled input"\n  placeholder="Disabled Input with a placeholder"\n/>\n'})}),m=()=>(0,u.jsx)(o,{children:(0,u.jsx)(a.Z,{children:'<Provider\n  formElement={{\n    label_direction: \'vertical\',\n  }}\n>\n  <Flex.Vertical>\n    <div data-visual-test="input-error">\n      <Input\n        label="With FormStatus"\n        status="You have to fill in this field"\n        value="Input value with error"\n      />\n    </div>\n    <div data-visual-test="input-error-button">\n      <Input\n        label="With button"\n        status="You have to fill in this field"\n        value="Input value with error"\n        type="search"\n      />\n    </div>\n  </Flex.Vertical>\n</Provider>\n'})}),g=()=>(0,u.jsx)(o,{children:(0,u.jsx)(a.Z,{children:'<Input\n  label={\n    <Space element="span" className="dnb-h--large">\n      Fødselsnummer\n    </Space>\n  }\n  label_direction="vertical"\n  autocomplete="on"\n  placeholder="Placeholder text"\n  suffix={\n    <HelpButton title="Info" size="large">\n      Some content\n    </HelpButton>\n  }\n  on_change={({ value }) => {\n    console.log(\'on_change\', value)\n  }}\n/>\n'})}),v=()=>(0,u.jsx)(o,{children:(0,u.jsx)(a.Z,{"data-visual-test":"input-stretch",children:'<Provider\n  formElement={{\n    label_direction: \'vertical\',\n  }}\n>\n  <FieldBlock\n    label="Long label labwl Adipiscing mauris dis proin nec"\n    forId="input-id"\n  >\n    <Input\n      id="input-id"\n      value="I stretch ..."\n      stretch\n      status="Status message"\n      status_state="warn"\n    />\n  </FieldBlock>\n</Provider>\n'})}),I=()=>(0,u.jsx)(o,{children:(0,u.jsx)(a.Z,{children:'<Input\n  label="Label"\n  autocomplete="on"\n  placeholder="Placeholder text"\n  status="Numbers are using DNB Mono (monospace)"\n  status_state="info"\n  value="1234567890"\n  on_change={({ value }) => {\n    console.log(\'on_change\', value)\n    return String(value).toUpperCase()\n  }}\n/>\n'})}),b=()=>(0,u.jsx)(o,{children:(0,u.jsx)(a.Z,{children:'<Form.Handler\n  onSubmit={(event) => {\n    console.log(event)\n  }}\n>\n  <FormLabel for_id="search">Label</FormLabel>\n  <Flex.Horizontal align="baseline">\n    <Input\n      id="search"\n      type="search"\n      value="Input ..."\n      selectall={true}\n      on_submit={(event) => {\n        console.log(\'Input.on_submit\', event)\n      }}\n      on_change={({ value }) => {\n        console.log(\'on_change:\', value)\n      }}\n    />\n    <Form.SubmitButton />\n  </Flex.Horizontal>\n</Form.Handler>\n'})}),x=()=>(0,u.jsx)(o,{children:(0,u.jsx)(a.Z,{scope:{InputPassword:r},"data-visual-test":"input-password",children:"<InputPassword\n  label=\"Label\"\n  placeholder=\"A placeholder text\"\n  on_change={({ value }) => {\n    console.log('on_change:', value)\n  }}\n  on_show_password={() => {\n    console.log('on_show_password')\n  }}\n  on_hide_password={() => {\n    console.log('on_hide_password')\n  }}\n/>\n"})}),_=()=>(0,u.jsx)(o,{children:(0,u.jsx)(a.Z,{"data-visual-test":"input-clear",children:'<Flex.Vertical>\n  <Input clear={true} value="Value ..." size="medium" />\n  <Input clear={true} value="Value ..." type="search" />\n  <Input clear={true} value="Value ..." icon="loupe" type="search" />\n</Flex.Vertical>\n'})}),f=()=>(0,u.jsx)(o,{children:(0,u.jsx)(a.Z,{"data-visual-test":"input-align",children:'<Provider\n  formElement={{\n    label_direction: \'vertical\',\n  }}\n>\n  <FieldBlock label="Left aligned">\n    <Flex.Vertical>\n      <Input value="Plain" />\n      <Input value="Search" type="search" />\n      <Input value="Search" size="medium" type="search" />\n      <Input value="Search" size="large" type="search" />\n      <Input\n        value="Value Eu pretium sit magnis suscipit cursus dis proin rutrum elementum"\n        icon="calendar"\n      />\n      <Input\n        placeholder="Placeholder Eu pretium sit magnis suscipit cursus dis proin rutrum elementum"\n        icon_position="right"\n        icon="calendar"\n      />\n      <Input size="medium" value="Value" icon="calendar" />\n      <Input\n        size="medium"\n        placeholder="Placeholder"\n        icon_position="right"\n        icon="calendar"\n      />\n      <Input size="large" value="Value" icon="calendar" />\n      <Input\n        size="large"\n        placeholder="Placeholder"\n        icon_position="right"\n        icon="calendar"\n      />\n    </Flex.Vertical>\n  </FieldBlock>\n  <FieldBlock top label="Right aligned">\n    <Flex.Vertical>\n      <Input value="Plain" align="right" />\n      <Input value="Search" type="search" align="right" />\n      <Input value="Search" size="medium" type="search" align="right" />\n      <Input value="Search" size="large" type="search" align="right" />\n      <Input\n        value="Value Eu pretium sit magnis suscipit cursus dis proin rutrum elementum"\n        icon="calendar"\n        align="right"\n      />\n      <Input\n        placeholder="Placeholder Eu pretium sit magnis suscipit cursus dis proin rutrum elementum"\n        icon_position="right"\n        icon="calendar"\n        align="right"\n      />\n      <Input size="medium" value="Value" icon="calendar" align="right" />\n      <Input\n        size="medium"\n        placeholder="Placeholder"\n        icon_position="right"\n        icon="calendar"\n        align="right"\n      />\n      <Input size="large" value="Value" icon="calendar" align="right" />\n      <Input\n        size="large"\n        placeholder="Placeholder"\n        icon_position="right"\n        icon="calendar"\n        align="right"\n      />\n    </Flex.Vertical>\n  </FieldBlock>\n</Provider>\n'})}),j=()=>(0,u.jsx)(a.Z,{hideCode:!0,children:"<Field.Currency\n  label=\"Amount\"\n  value={1234}\n  onChange={(value) => console.log('onChange', value)}\n/>\n"})}}]);
//# sourceMappingURL=9cd1177ffe87d2bf014e4feeffb952dc9599e8fd-dbc3f0a34b422bffa468.js.map