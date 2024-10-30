"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[42120],{56101:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r=t(52322),s=t(45392),a=(t(2784),t(46832));const i=()=>(0,r.jsx)(a.Z,{"data-visual-test":"simple-drawer",children:"<Drawer\n  title=\"Drawer title\"\n  triggerAttributes={{\n    text: 'Open drawer',\n  }}\n>\n  <P top>Some informational content</P>\n  <P top>\n    Elementum eu suspendisse sit platea elit porttitor magna laoreet ad\n    ultrices tempus urna curae parturient conubia quisque viverra eget\n    vestibulum neque pulvinar semper vulputate id dis varius pellentesque\n    nunc egestas risus amet mus aptent luctus imperdiet netus natoque\n    cubilia mattis nostra proin ornare scelerisque sodales faucibus\n    placerat sem bibendum pretium rutrum vitae sociis ligula inceptos morbi\n    quam mi sed pharetra fermentum tortor ullamcorper ipsum tellus eros\n    euismod volutpat nisl dui lectus fames suscipit phasellus praesent\n    justo mollis montes velit taciti gravida\n  </P>\n</Drawer>\n"}),o=()=>(0,r.jsx)(a.Z,{"data-visual-test":"left-placement-drawer",children:'<Drawer title="Drawer title" containerPlacement="left">\n  <P top>Some informational content</P>\n  <P top>\n    Elementum eu suspendisse sit platea elit porttitor magna laoreet ad\n    ultrices tempus urna curae parturient conubia quisque viverra eget\n    vestibulum neque pulvinar semper vulputate id dis varius pellentesque\n    nunc egestas risus amet\n  </P>\n</Drawer>\n'}),l=()=>(0,r.jsx)(a.Z,{"data-visual-test":"fullscreen-drawer",children:"<Drawer\n  fullscreen\n  title=\"Drawer title\"\n  triggerAttributes={{\n    text: 'Open drawer',\n  }}\n>\n  <P top>Some informational content</P>\n  <P top>\n    Elementum eu suspendisse sit platea elit porttitor magna laoreet ad\n    ultrices tempus urna curae parturient conubia quisque viverra eget\n    vestibulum neque pulvinar semper vulputate id dis varius pellentesque\n    nunc egestas risus amet\n  </P>\n</Drawer>\n"}),u=()=>{},c=()=>(0,r.jsx)(a.Z,{"data-visual-test":"full-drawer",scope:{handleBack:u},children:'<Drawer title="Custom title">\n  <Drawer.Navigation>\n    <Breadcrumb onClick={handleBack} />\n  </Drawer.Navigation>\n  <Drawer.Header>\n    <P bottom>This is a lorem ipsum dolor</P>\n    <Button bottom size="large">\n      Lorem ipsum\n    </Button>\n    <Button bottom size="large" variant="secondary">\n      Dolor sit\n    </Button>\n    <FormStatus state="info">This is a lorem ipsum dolor</FormStatus>\n    <Tabs\n      id="unique-linked-id"\n      data={[\n        {\n          title: \'One\',\n          key: \'one\',\n        },\n        {\n          title: \'Two\',\n          key: \'two\',\n        },\n      ]}\n    />\n  </Drawer.Header>\n  <Drawer.Body>\n    <Tabs.Content id="unique-linked-id" key="contentKey">\n      {({ title }) => {\n        return (\n          <>\n            <H2>{title}</H2>\n            <P top>This is a left aligned Drawer content.</P>\n            <P top>\n              Elementum eu suspendisse sit platea elit porttitor magna\n              laoreet ad ultrices tempus urna curae parturient conubia\n              quisque viverra eget vestibulum neque pulvinar semper\n              vulputate id dis varius pellentesque nunc egestas risus amet\n              mus aptent luctus imperdiet netus natoque cubilia mattis\n              nostra proin ornare scelerisque sodales faucibus placerat sem\n              bibendum pretium rutrum vitae sociis ligula inceptos morbi\n              quam mi sed pharetra fermentum tortor ullamcorper ipsum\n              tellus eros euismod volutpat nisl dui lectus fames suscipit\n              phasellus praesent justo mollis montes velit taciti gravida\n              lacus commodo senectus feugiat lorem etiam consequat\n              penatibus cum hendrerit accumsan orci potenti purus nulla\n            </P>\n          </>\n        )\n      }}\n    </Tabs.Content>\n  </Drawer.Body>\n</Drawer>\n'}),d=()=>(0,r.jsx)(a.Z,{"data-visual-test":"drawer-custom-trigger",children:"<Drawer\n  title=\"Drawer with custom trigger\"\n  triggerAttributes={{\n    text: 'Custom trigger',\n    variant: 'primary',\n    size: 'large',\n    icon: 'loupe',\n    icon_position: 'left',\n  }}\n>\n  <Drawer.Body spacing>\n    <P>Opened a Drawer with a custom trigger button!</P>\n  </Drawer.Body>\n</Drawer>\n"}),m=()=>(0,r.jsx)(a.Z,{"data-visual-test":"callback-drawer",children:'<Drawer\n  title="Drawer title"\n  triggerAttributes={{\n    text: \'Open drawer\',\n  }}\n  hideCloseButton\n>\n  {({ close }) => (\n    <>\n      <Button text="Close by callback" on_click={close} />\n    </>\n  )}\n</Drawer>\n'}),p=()=>(0,r.jsx)(a.Z,{"data-visual-test":"drawer-no-animation",children:'<Drawer\n  title="No spacing or animation"\n  noAnimation\n  spacing={false}\n  hideCloseButton\n>\n  <Drawer.Body>\n    <P top bottom>\n      This is a lorem ipsum dolor\n    </P>\n    <Button bottom size="large">\n      Lorem ipsum\n    </Button>\n    <Button bottom size="large" variant="secondary">\n      Dolor sit\n    </Button>\n    <FormStatus state="info">This is a lorem ipsum dolor</FormStatus>\n  </Drawer.Body>\n</Drawer>\n'}),w=()=>(0,r.jsx)(a.Z,{"data-visual-test":"drawer-scroll-view",noInline:!0,children:"const DrawerMock = () => {\n  const scrollRef = React.useRef(null)\n  const innerRef = React.useRef(null)\n  const [errorMessage, setErrorMessage] = React.useState(null)\n  const message = errorMessage\n    ? errorMessage\n    : 'Yes, the \"dnb-scroll-view\" is used!'\n  return (\n    <Drawer\n      contentRef={innerRef}\n      scrollRef={scrollRef}\n      onOpen={() => {\n        const innerOverflowY = window.getComputedStyle(\n          innerRef.current,\n        ).overflowY\n        const contentElem = scrollRef.current.querySelector(\n          '.dnb-drawer__content',\n        )\n        const contentOverflowY =\n          window.getComputedStyle(contentElem)?.overflowY\n        const scrollOverflowY = window.getComputedStyle(\n          scrollRef.current,\n        ).overflowY\n        if (contentOverflowY !== 'visible') {\n          setErrorMessage(\n            '.dnb-drawer__content was \"' +\n              contentOverflowY +\n              '\" and not \"visible\"',\n          )\n        } else if (innerOverflowY !== 'visible') {\n          setErrorMessage(\n            '.dnb-drawer__inner was \"' +\n              innerOverflowY +\n              '\" and not \"visible\"',\n          )\n        } else if (scrollOverflowY !== 'auto') {\n          setErrorMessage('.dnb-scroll-view was not \"auto\"')\n        }\n      }}\n    >\n      <Drawer.Body>\n        <div\n          style={{\n            height: '100rem',\n          }}\n        >\n          <div className=\"drawer-scroll-view\">\n            <P size=\"x-large\">{message}</P>\n          </div>\n        </div>\n      </Drawer.Body>\n    </Drawer>\n  )\n}\nrender(<DrawerMock />)\n"});function v(e){const n=Object.assign({h2:"h2",h3:"h3"},(0,s.ah)(),e.components),{VisibleWhenVisualTest:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VisibleWhenVisualTest",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{children:"Demos"}),"\n",(0,r.jsx)(n.h3,{children:"Basic Drawer"}),"\n",(0,r.jsx)(i,{}),"\n",(0,r.jsx)(n.h3,{children:"Basic Drawer left placement"}),"\n",(0,r.jsx)(o,{}),"\n",(0,r.jsx)(n.h3,{children:"Basic Drawer in fullscreen"}),"\n",(0,r.jsx)(l,{}),"\n",(0,r.jsx)(n.h3,{children:"Drawer with custom content"}),"\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(n.h3,{children:"Customize trigger button"}),"\n",(0,r.jsx)(d,{}),"\n",(0,r.jsx)(n.h3,{children:"Close Drawer by callback method"}),"\n",(0,r.jsx)(m,{}),"\n",(0,r.jsx)(n.h3,{children:"Remove animation and spacing"}),"\n",(0,r.jsx)(p,{}),"\n",(0,r.jsx)(t,{children:(0,r.jsx)(w,{})})]})}var g=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(v,e)})):v(e)}}}]);
//# sourceMappingURL=component---src-docs-uilib-components-drawer-demos-mdx-6f7b1ecbc5bc4ab52137.js.map