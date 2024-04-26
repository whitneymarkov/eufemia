"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[66800],{96107:function(n,e,r){r.r(e),r.d(e,{default:function(){return d}});var o={};r.r(o),r.d(o,{CustomComponentExample:function(){return l}});var s=r(52322),a=r(45392),i=(r(2784),r(28204)),m=r(26409),t=r(96781);const l=()=>(0,s.jsx)(i.Z,{scope:{useFieldProps:m.Z,FieldBlock:t.Z},noInline:!0,children:"const MySliderComponent = (props) => {\n  const fromInput = React.useCallback(\n    (event) => (typeof event === 'number' ? event : event?.value || 0),\n    [],\n  )\n  const errorMessages = React.useMemo(\n    () => ({\n      required: 'This field is required',\n      ...props.errorMessages,\n    }),\n    [props.errorMessages],\n  )\n  const schema =\n    React.useMemo <\n    JSONSchema >\n    (() =>\n      props.schema ?? {\n        type: 'number',\n        minimum: props.minimum,\n        maximum: props.maximum,\n      },\n    [props.schema, props.minimum, props.maximum])\n  const preparedProps = {\n    fromInput,\n    schema,\n    ...errorMessages,\n    label: 'Label',\n    ...props,\n  }\n  const {\n    id,\n    label,\n    info,\n    warning,\n    error,\n    value,\n    width = 'medium',\n    minimum = 0,\n    maximum = 100,\n    step = 1,\n    handleChange,\n    handleFocus,\n    handleBlur,\n  } = useFieldProps(preparedProps)\n  const steps = {\n    minimum,\n    maximum,\n    step,\n  }\n  return (\n    <FieldBlock\n      forId={id}\n      label={label}\n      info={info}\n      warning={warning}\n      error={error}\n      width={width}\n    >\n      <Flex.Stack>\n        <Field.Number\n          value={value}\n          showStepControls\n          onChange={handleChange}\n          onFocus={handleFocus}\n          onBlur={handleBlur}\n          {...steps}\n        />\n        <Slider\n          id={id}\n          value={value}\n          onChange={handleChange}\n          onDragStart={handleFocus}\n          onDragEnd={handleBlur}\n          {...steps}\n        />\n      </Flex.Stack>\n    </FieldBlock>\n  )\n}\nrender(\n  <Form.Handler\n    data={{\n      sliderValue: 50,\n    }}\n  >\n    <MySliderComponent\n      path=\"/sliderValue\"\n      minimum={50}\n      maximum={80}\n      required\n      info=\"Info\"\n    />\n  </Form.Handler>,\n)\n"});function p(n){const e=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code"},(0,a.ah)(),n.components);return o||u("Examples",!1),l||u("Examples.CustomComponentExample",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{children:"Demos"}),"\n",(0,s.jsx)(e.p,{children:"On the consumer side, we can use this custom component like so:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-jsx",children:'<Form.Handler data={{ sliderValue: 50 }}>\n  <MySliderComponent\n    path="/sliderValue"\n    minimum={50}\n    maximum={80}\n    required\n    info="Info"\n  />\n</Form.Handler>\n'})}),"\n",(0,s.jsx)(l,{})]})}var d=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,a.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(p,n)})):p(n)};function u(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-create-component-use-field-props-demos-mdx-932dec825cbe8920217d.js.map