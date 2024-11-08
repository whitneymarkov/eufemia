"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[95417,78104,97096],{56105:function(e,n,i){i.r(n);var l=i(52322),a=i(45392),s=i(62),t=i(34714);function o(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.default,{}),"\n",(0,l.jsx)(t.default,{})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(o,e)})):o()}},34714:function(e,n,i){i.r(n),i.d(n,{default:function(){return M}});var l={};i.r(l),i.d(l,{FieldUploadSelectionPath:function(){return u},Inline:function(){return x},Label:function(){return g},LabelAndValue:function(){return m},ListTypes:function(){return F},ListVariants:function(){return h},Placeholder:function(){return d},WithCustomFormat:function(){return f},WithDownload:function(){return c},WithSize:function(){return p},WithValue:function(){return r}});var a=i(52322),s=i(45392),t=i(46832),o=i(36210);const d=()=>(0,a.jsx)(t.Z,{children:'<Value.Upload placeholder="No values given" />\n'}),r=()=>(0,a.jsx)(t.Z,{scope:{createMockFile:o.lb},"data-visual-test":"upload-value-default",children:"<Value.Upload\n  inline\n  value={[\n    {\n      file: createMockFile('fileName-1.png', 1000000, 'image/png'),\n      exists: false,\n      id: '1',\n    },\n    {\n      file: createMockFile('fileName-2.png', 2000000, 'image/png'),\n      exists: false,\n      id: '2',\n    },\n  ]}\n/>\n"}),p=()=>(0,a.jsx)(t.Z,{hideCode:!0,scope:{createMockFile:o.lb},"data-visual-test":"upload-value-size",children:"<Value.Upload\n  displaySize\n  value={[\n    {\n      file: createMockFile('fileName-1.png', 1000000, 'image/png'),\n      exists: false,\n      id: '1',\n    },\n  ]}\n/>\n"}),c=()=>(0,a.jsx)(t.Z,{hideCode:!0,scope:{createMockFile:o.lb},children:"<Value.Upload\n  download\n  value={[\n    {\n      file: createMockFile('fileName-1.png', 1000000, 'image/png'),\n      exists: false,\n      id: '1',\n    },\n  ]}\n/>\n"}),f=()=>(0,a.jsx)(t.Z,{hideCode:!0,scope:{createMockFile:o.lb},children:"<Form.Handler\n  locale=\"en-GB\"\n  data={{\n    myPath: [\n      {\n        file: createMockFile('fileName-1.png', 1000000, 'image/png'),\n        exists: false,\n        id: '1',\n      },\n      {\n        file: createMockFile('fileName-2.png', 2000000, 'image/png'),\n        exists: false,\n        id: '2',\n      },\n    ],\n  }}\n>\n  <Value.Upload\n    inline\n    path=\"/myPath\"\n    format={{\n      type: 'disjunction',\n    }}\n  />\n</Form.Handler>\n"}),u=()=>(0,a.jsx)(t.Z,{hideCode:!0,scope:{createMockFile:o.lb},children:"<Form.Handler\n  data={{\n    myPath: [\n      {\n        file: createMockFile('fileName-1.png', 1000000, 'image/png'),\n        exists: false,\n        id: '1',\n      },\n      {\n        file: createMockFile('fileName-2.png', 3000000, 'image/png'),\n        exists: false,\n        id: '2',\n      },\n      {\n        file: createMockFile('fileName-3.png', 3000000, 'image/png'),\n        exists: false,\n        id: '3',\n      },\n    ],\n  }}\n>\n  <Flex.Stack>\n    <Field.Upload label=\"My selections\" path=\"/myPath\" />\n    <Value.Upload\n      inheritLabel\n      path=\"/myPath\"\n      variant=\"ul\"\n      listType=\"unstyled\"\n    />\n  </Flex.Stack>\n</Form.Handler>\n"}),g=()=>(0,a.jsx)(t.Z,{children:'<Value.Upload label="Label text" showEmpty />\n'}),m=()=>(0,a.jsx)(t.Z,{hideCode:!0,scope:{createMockFile:o.lb},children:"<Value.Upload\n  label=\"Label text\"\n  value={[\n    {\n      file: createMockFile('fileName-1.png', 1000000, 'image/png'),\n      exists: false,\n      id: '1',\n    },\n    {\n      file: createMockFile('fileName-2.png', 2000000, 'image/png'),\n      exists: false,\n      id: '2',\n    },\n  ]}\n/>\n"}),x=()=>(0,a.jsx)(t.Z,{hideCode:!0,scope:{createMockFile:o.lb},"data-visual-test":"upload-value-inline",children:"<Span>\n  This is before the component{' '}\n  <Value.Upload\n    value={[\n      {\n        file: createMockFile('fileName-1.png', 1000000, 'image/png'),\n        exists: false,\n        id: '1',\n      },\n      {\n        file: createMockFile('fileName-2.png', 2000000, 'image/png'),\n        exists: false,\n        id: '2',\n      },\n    ]}\n    inline\n  />{' '}\n  This is after the component\n</Span>\n"}),h=()=>(0,a.jsx)(t.Z,{scope:{createMockFile:o.lb},"data-visual-test":"upload-value-lists",hideCode:!0,children:"\n<Value.Upload\n  value={[\n    {\n      file: createMockFile('fileName-1.png', 1000000, 'image/png'),\n      exists: false,\n      id: '1',\n    },\n    {\n      file: createMockFile('fileName-2.png', 2000000, 'image/png'),\n      exists: false,\n      id: '2',\n    },\n    {\n      file: createMockFile('fileName-3.png', 3000000, 'image/png'),\n      exists: false,\n      id: '3',\n    },\n  ]}\n  label=\"Ordered List\"\n  variant=\"ol\"\n/>\n<Value.Upload\n  value={[\n    {\n      file: createMockFile('fileName-1.png', 1000000, 'image/png'),\n      exists: false,\n      id: '1',\n    },\n    {\n      file: createMockFile('fileName-2.png', 2000000, 'image/png'),\n      exists: false,\n      id: '2',\n    },\n    {\n      file: createMockFile('fileName-3.png', 3000000, 'image/png'),\n      exists: false,\n      id: '3',\n    },\n  ]}\n  label=\"Unordered List\"\n  variant=\"ul\"\n/>\n\n"}),F=()=>(0,a.jsx)(t.Z,{scope:{createMockFile:o.lb},hideCode:!0,children:"\n<Value.Upload\n  value={[\n    {\n      file: createMockFile('fileName-1.png', 1000000, 'image/png'),\n      exists: false,\n      id: '1',\n    },\n    {\n      file: createMockFile('fileName-2.png', 2000000, 'image/png'),\n      exists: false,\n      id: '2',\n    },\n    {\n      file: createMockFile('fileName-3.png', 3000000, 'image/png'),\n      exists: false,\n      id: '3',\n    },\n  ]}\n  label=\"Ordered List a\"\n  variant=\"ol\"\n  listType=\"a\"\n/>\n<Value.Upload\n  value={[\n    {\n      file: createMockFile('fileName-1.png', 1000000, 'image/png'),\n      exists: false,\n      id: '1',\n    },\n    {\n      file: createMockFile('fileName-2.png', 2000000, 'image/png'),\n      exists: false,\n      id: '2',\n    },\n    {\n      file: createMockFile('fileName-3.png', 3000000, 'image/png'),\n      exists: false,\n      id: '3',\n    },\n  ]}\n  label=\"Ordered List A\"\n  variant=\"ol\"\n  listType=\"A\"\n/>\n<Value.Upload\n  value={[\n    {\n      file: createMockFile('fileName-1.png', 1000000, 'image/png'),\n      exists: false,\n      id: '1',\n    },\n    {\n      file: createMockFile('fileName-2.png', 2000000, 'image/png'),\n      exists: false,\n      id: '2',\n    },\n    {\n      file: createMockFile('fileName-3.png', 3000000, 'image/png'),\n      exists: false,\n      id: '3',\n    },\n  ]}\n  label=\"Ordered List i\"\n  variant=\"ol\"\n  listType=\"i\"\n/>\n<Value.Upload\n  value={[\n    {\n      file: createMockFile('fileName-1.png', 1000000, 'image/png'),\n      exists: false,\n      id: '1',\n    },\n    {\n      file: createMockFile('fileName-2.png', 2000000, 'image/png'),\n      exists: false,\n      id: '2',\n    },\n    {\n      file: createMockFile('fileName-3.png', 3000000, 'image/png'),\n      exists: false,\n      id: '3',\n    },\n  ]}\n  label=\"Ordered List I\"\n  variant=\"ol\"\n  listType=\"I\"\n/>\n<Value.Upload\n  value={[\n    {\n      file: createMockFile('fileName-1.png', 1000000, 'image/png'),\n      exists: false,\n      id: '1',\n    },\n    {\n      file: createMockFile('fileName-2.png', 2000000, 'image/png'),\n      exists: false,\n      id: '2',\n    },\n    {\n      file: createMockFile('fileName-3.png', 3000000, 'image/png'),\n      exists: false,\n      id: '3',\n    },\n  ]}\n  label=\"Unordered List square\"\n  variant=\"ul\"\n  listType=\"square\"\n/>\n<Value.Upload\n  value={[\n    {\n      file: createMockFile('fileName-1.png', 1000000, 'image/png'),\n      exists: false,\n      id: '1',\n    },\n    {\n      file: createMockFile('fileName-2.png', 2000000, 'image/png'),\n      exists: false,\n      id: '2',\n    },\n    {\n      file: createMockFile('fileName-3.png', 3000000, 'image/png'),\n      exists: false,\n      id: '3',\n    },\n  ]}\n  label=\"Unordered List circle\"\n  variant=\"ul\"\n  listType=\"circle\"\n/>\n\n"});function j(e){const n=Object.assign({h2:"h2",h3:"h3",code:"code"},(0,s.ah)(),e.components);return l||b("Examples",!1),u||b("Examples.FieldUploadSelectionPath",!0),x||b("Examples.Inline",!0),g||b("Examples.Label",!0),m||b("Examples.LabelAndValue",!0),F||b("Examples.ListTypes",!0),h||b("Examples.ListVariants",!0),d||b("Examples.Placeholder",!0),f||b("Examples.WithCustomFormat",!0),c||b("Examples.WithDownload",!0),p||b("Examples.WithSize",!0),r||b("Examples.WithValue",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{children:"Demos"}),"\n",(0,a.jsx)(n.h3,{children:"Placeholder"}),"\n",(0,a.jsx)(d,{}),"\n",(0,a.jsx)(n.h3,{children:"Value"}),"\n",(0,a.jsx)(r,{}),"\n",(0,a.jsxs)(n.h3,{children:["With ",(0,a.jsx)(n.code,{children:"displaySize"})," property"]}),"\n",(0,a.jsx)(p,{}),"\n",(0,a.jsxs)(n.h3,{children:["With ",(0,a.jsx)(n.code,{children:"download"})," property"]}),"\n",(0,a.jsx)(c,{}),"\n",(0,a.jsx)(n.h3,{children:"Custom format"}),"\n",(0,a.jsx)(f,{}),"\n",(0,a.jsx)(n.h3,{children:"Label"}),"\n",(0,a.jsx)(g,{}),"\n",(0,a.jsx)(n.h3,{children:"Label and value"}),"\n",(0,a.jsx)(m,{}),"\n",(0,a.jsx)(n.h3,{children:"Inline"}),"\n",(0,a.jsx)(x,{}),"\n",(0,a.jsx)(n.h3,{children:"List variants"}),"\n",(0,a.jsx)(h,{}),"\n",(0,a.jsx)(n.h3,{children:"List types"}),"\n",(0,a.jsx)(F,{}),"\n",(0,a.jsx)(n.h3,{children:"Field.Upload path"}),"\n",(0,a.jsx)(u,{})]})}var M=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(j,e)})):j(e)};function b(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},62:function(e,n,i){i.r(n);var l=i(52322),a=i(45392);function s(e){const n=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,a.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Value.Upload"})," is a value component for displaying a list of files."]}),"\n",(0,l.jsxs)(n.p,{children:["There is a corresponding ",(0,l.jsx)(n.a,{href:"/uilib/extensions/forms/feature-fields/more-fields/Upload",children:"Field.Upload"})," component."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-jsx",children:"import { Value } from '@dnb/eufemia/extensions/forms'\nrender(<Value.Upload />)\n"})})]})}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(s,e)})):s(e)}},36210:function(e,n,i){i.d(n,{Gz:function(){return c},KN:function(){return u},KW:function(){return f},Lq:function(){return p},OV:function(){return m},QO:function(){return r},Qb:function(){return h},av:function(){return F},ez:function(){return d},g_:function(){return g},lb:function(){return t},zV:function(){return x}});var l=i(2784),a=i(46832),s=i(52322);function t(e,n,i){const l=new File([],e,{type:i});return Object.defineProperty(l,"size",{get(){return n}}),l}const o=(e,n)=>{l.useEffect((()=>{e([{file:t("fileName.png",123,"image/png"),...n}])}),[])},d=()=>(0,s.jsx)(a.Z,{"data-visual-test":"upload-file-list",scope:{useMockFiles:o},noInline:!0,children:"const Component = () => {\n  const { files, setFiles } = Upload.useUpload('file-list')\n  if (files.length) {\n    console.log('files', files)\n  }\n  useMockFiles(setFiles, {\n    errorMessage: 'This is no real file!',\n  })\n  return <Upload acceptedFileTypes={['jpg', 'png']} id=\"file-list\" />\n}\nrender(<Component />)\n"}),r=()=>(0,s.jsx)(a.Z,{"data-visual-test":"upload-basic",children:"<Upload acceptedFileTypes={['jpg', 'png']} id=\"upload-basic\" />\n"}),p=()=>(0,s.jsx)(a.Z,{noInline:!0,children:"const Component = () => {\n  const { files, setFiles } = Upload.useUpload('upload-single-file')\n  if (files.length) {\n    console.log('files', files, setFiles)\n  }\n  return (\n    <Upload\n      acceptedFileTypes={['jpg', 'png']}\n      id=\"upload-single-file\"\n      filesAmountLimit={1}\n    />\n  )\n}\nrender(<Component />)\n"}),c=()=>(0,s.jsx)(a.Z,{"data-visual-test":"upload-remove-files",noInline:!0,children:"const Component = () => {\n  const { files, setFiles } = Upload.useUpload('upload-remove-files')\n  return (\n    <>\n      <Upload\n        acceptedFileTypes={['jpg', 'png']}\n        id=\"upload-remove-files\"\n      />\n\n      <Button\n        top=\"small\"\n        disabled={files.length < 1}\n        onClick={() => setFiles([])}\n      >\n        Remove selected files\n      </Button>\n\n      <Preview files={files} />\n    </>\n  )\n  function Preview({ files }) {\n    const [images, setImages] = React.useState([])\n    React.useEffect(() => {\n      files.map(({ file }) => {\n        let reader = new FileReader()\n        reader.addEventListener(\n          'load',\n          (event) => {\n            images.push({\n              blob: event.target,\n              file,\n            })\n            setImages([...images])\n            reader = null\n          },\n          false,\n        )\n        reader.readAsDataURL(file)\n      })\n    }, [files])\n    return (\n      <Section aria-label=\"List of chosen images\">\n        {images.map((img, i) => (\n          <Img\n            top\n            key={i}\n            src={img.blob.result}\n            alt={img.file.name}\n            height={100}\n          />\n        ))}\n      </Section>\n    )\n  }\n}\nrender(<Component />)\n"}),f=()=>(0,s.jsx)(a.Z,{scope:{useMockFiles:o},"data-visual-test":"upload-is-loading",noInline:!0,children:"const Component = () => {\n  const { files, setFiles } = Upload.useUpload('upload-is-loading')\n  useMockFiles(setFiles, {\n    isLoading: true,\n  })\n  return (\n    <>\n      <Upload acceptedFileTypes={['jpg', 'png']} id=\"upload-is-loading\" />\n      <ToggleButton\n        top=\"small\"\n        disabled={files.length < 1}\n        on_change={({ checked }) =>\n          setFiles(\n            files.map((fileItem) => {\n              return {\n                ...fileItem,\n                isLoading: checked,\n              }\n            }),\n          )\n        }\n      >\n        Files is loading toggle\n      </ToggleButton>\n    </>\n  )\n}\nrender(<Component />)\n"}),u=()=>(0,s.jsx)(a.Z,{"data-visual-test":"upload-error-message",noInline:!0,children:"const Component = () => {\n  const { files, setFiles } = Upload.useUpload('upload-error-message')\n  return (\n    <>\n      <Upload\n        acceptedFileTypes={['jpg', 'png']}\n        id=\"upload-error-message\"\n      />\n      <ToggleButton\n        top=\"small\"\n        disabled={files.length < 1}\n        on_change={({ checked }) => {\n          setFiles(\n            files.map((fileItem) => {\n              return {\n                ...fileItem,\n                errorMessage: checked ? 'custom error message' : null,\n              }\n            }),\n          )\n        }}\n      >\n        Toggle error message\n      </ToggleButton>\n    </>\n  )\n}\nrender(<Component />)\n"}),g=()=>(0,s.jsx)(a.Z,{noInline:!0,children:"const Component = () => {\n  const { files, setFiles } = Upload.useUpload('upload-accepted-formats')\n  if (files.length) {\n    console.log('files', files, setFiles)\n  }\n  return (\n    <Upload\n      acceptedFileTypes={['png', 'jpg', 'pdf']}\n      id=\"upload-accepted-formats\"\n    />\n  )\n}\nrender(<Component />)\n"}),m=()=>(0,s.jsx)(a.Z,{"data-visual-test":"upload-file-max-size-based-on-file-format",hideCode:!0,children:"<Upload\n  id=\"upload-file-max-size-based-on-file-format\"\n  fileMaxSize={99}\n  acceptedFileTypes={[\n    {\n      fileType: 'jpg',\n      fileMaxSize: 1,\n    },\n    {\n      fileType: 'doc',\n      fileMaxSize: 1,\n    },\n    {\n      fileType: 'svg',\n      fileMaxSize: 1,\n    },\n    {\n      fileType: 'gif',\n      fileMaxSize: 1,\n    },\n    {\n      fileType: 'doc',\n      fileMaxSize: 4,\n    },\n    {\n      fileType: 'docx',\n      fileMaxSize: 4,\n    },\n    {\n      fileType: 'tiff',\n      fileMaxSize: 5,\n    },\n    {\n      fileType: 'tif',\n      fileMaxSize: 5,\n    },\n    {\n      fileType: 'html',\n      fileMaxSize: 6,\n    },\n    {\n      fileType: 'htm',\n      fileMaxSize: 6,\n    },\n    {\n      fileType: 'xls',\n      fileMaxSize: 7,\n    },\n    {\n      fileType: 'xlsx',\n      fileMaxSize: 7,\n    },\n    {\n      fileType: 'odt',\n    },\n    {\n      fileType: 'pdf',\n    },\n    {\n      fileType: 'text',\n      fileMaxSize: false,\n    },\n    {\n      fileType: 'txt',\n      fileMaxSize: 0,\n    },\n    {\n      fileType: 'zip',\n      fileMaxSize: 99,\n    },\n  ]}\n/>\n"}),x=()=>(0,s.jsx)(a.Z,{children:"<Upload\n  id=\"upload-file-max-size-based-on-file-format-disabled\"\n  acceptedFileTypes={[\n    {\n      fileType: 'jpg',\n      fileMaxSize: 0,\n    },\n    {\n      fileType: 'doc',\n      fileMaxSize: false,\n    },\n    {\n      fileType: 'svg',\n    },\n  ]}\n/>\n"}),h=()=>(0,s.jsx)(a.Z,{"data-visual-test":"upload-disabled-file-max-size",children:"<Upload\n  acceptedFileTypes={['jpg', 'pdf']}\n  id=\"upload-disabled-file-max-size\"\n  fileMaxSize={false}\n/>\n"}),F=()=>(0,s.jsx)(a.Z,{"data-visual-test":"upload-no-title-no-text",children:"<Upload\n  title={false}\n  text={false}\n  acceptedFileTypes={['jpg', 'png']}\n  id=\"upload-no-title-no-text\"\n/>\n"})}}]);
//# sourceMappingURL=component---src-docs-uilib-extensions-forms-value-upload-mdx-e0e78f933db8d28dca3a.js.map