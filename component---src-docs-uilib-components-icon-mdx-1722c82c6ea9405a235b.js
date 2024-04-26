"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[8840,30290,95557],{27728:function(n,e,i){i.r(e);var o=i(52322),s=i(45392),r=i(24142),c=i(28332);function t(n){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.default,{}),"\n",(0,o.jsx)(c.default,{})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,o.jsx)(e,Object.assign({},n,{children:(0,o.jsx)(t,n)})):t()}},28332:function(n,e,i){i.r(e);var o=i(52322),s=i(45392),r=i(69100);function c(n){const e=Object.assign({h2:"h2",h3:"h3",strong:"strong",code:"code",p:"p"},(0,s.ah)(),n.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{children:"Demos"}),"\n",(0,o.jsx)(e.h3,{children:"Default and Medium-sized icons (Responsive)"}),"\n",(0,o.jsx)(r.QL,{}),"\n",(0,o.jsxs)(e.h3,{children:["Icons with border. ",(0,o.jsx)(e.strong,{children:"NB:"})," Use it with caution. It should not be used where it can confuse users with being a clickable button."]}),"\n",(0,o.jsx)(r.zA,{}),"\n",(0,o.jsxs)(e.h3,{children:["Responsive to its inherited ",(0,o.jsx)(e.code,{children:"font-size"})]}),"\n",(0,o.jsx)(r.bM,{}),"\n",(0,o.jsx)(e.h3,{children:"Icon color variations"}),"\n",(0,o.jsx)(e.p,{children:"All of these methods will output the same color"}),"\n",(0,o.jsx)(r.zo,{})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,o.jsx)(e,Object.assign({},n,{children:(0,o.jsx)(c,n)})):c(n)}},24142:function(n,e,i){i.r(e);var o=i(52322),s=i(45392);function r(n){const e=Object.assign({h2:"h2",p:"p",code:"code",h3:"h3",ul:"ul",li:"li",pre:"pre",em:"em",a:"a",strong:"strong",ol:"ol",h4:"h4"},(0,s.ah)(),n.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{children:"Description"}),"\n",(0,o.jsxs)(e.p,{children:["The main Icon component is a wrapper for whatever icon you place within it. This means a ",(0,o.jsx)(e.code,{children:"span"})," wrapping an inline ",(0,o.jsx)(e.code,{children:"SVG"}),"."]}),"\n",(0,o.jsxs)(e.p,{children:["You can use whatever you like inside this ",(0,o.jsx)(e.code,{children:"Icon"})," component."]}),"\n",(0,o.jsx)(e.h3,{children:"Why use it?"}),"\n",(0,o.jsx)(e.p,{children:"You will get several advantages on using it, like:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Responsiveness in terms of ",(0,o.jsx)(e.code,{children:"font-size"})]}),"\n",(0,o.jsx)(e.li,{children:"Coloring"}),"\n",(0,o.jsx)(e.li,{children:"Accessibility"}),"\n"]}),"\n",(0,o.jsx)(e.h3,{children:"Importing Icons"}),"\n",(0,o.jsx)(e.p,{children:"In case your environment doesn't support tree-shaking, import the icons explicitly."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",children:"// Named ES import\nimport { bell } from '@dnb/eufemia/icons'\n\n// or named import with modifier\nimport { bell as Bell } from '@dnb/eufemia/icons'\n\n// Default and explicit ES import\nimport Bell from '@dnb/eufemia/icons/bell'\n"})}),"\n",(0,o.jsx)(e.h3,{children:"Icon Sizes"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsxs)(e.em,{children:["Exists in the ",(0,o.jsx)(e.a,{href:"/icons",children:"Icon Library"})]})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"default"})," ",(0,o.jsx)(e.code,{children:"1rem"})," (16px)"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"medium"})," ",(0,o.jsx)(e.code,{children:"1.5rem"})," (24px)"]}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.em,{children:"Additional Sizes"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"small"})," ",(0,o.jsx)(e.code,{children:"0.75rem"})," (12px)"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"large"})," ",(0,o.jsx)(e.code,{children:"2rem"})," (32px)"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"custom-size"})," will not be responsive. Width and Height is set as ",(0,o.jsx)(e.code,{children:"pixels"})]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{children:"Custom project Icons"}),"\n",(0,o.jsxs)(e.p,{children:["For decorative or functional icons (not illustrations) use ",(0,o.jsx)(e.code,{children:"SVG"})," as it gives the user responsiveness and better accessibility. But it gives you also more control, so you can change the color and size inherited by the parent HTML element."]}),"\n",(0,o.jsx)(e.p,{children:"To optimize your SVG icons to be used with Eufemia, you can follow these steps or get at least, inspired:"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["Make sure your SVG icon fits in the two sizes (default of ",(0,o.jsx)(e.code,{children:"16px"})," and medium of ",(0,o.jsx)(e.code,{children:"24px"}),") with the correct stroke thickness of ",(0,o.jsx)(e.code,{children:"1.5px"}),"."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Copy"})," the SVG markup (in Figma, ",(0,o.jsx)(e.code,{children:"right click"})," -> ",(0,o.jsx)(e.code,{children:"Copy as"})," -> ",(0,o.jsx)(e.code,{children:"Copy as SVG"}),")."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Declutter"})," and remove ID attributes in the markup, so they don't appear twice in your web application DOM. In most cases, you don't need ",(0,o.jsx)(e.code,{children:"<defs ... />"})," and the corresponding ids anyway."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Optimize"})," the SVG. Use e.g. ",(0,o.jsx)(e.a,{href:"https://jakearchibald.github.io/svgomg/",children:"Online SVGOMG"})," by using ",(0,o.jsx)(e.code,{children:"Paste markup"}),"."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"NB:"})," Do not remove ",(0,o.jsx)(e.code,{children:"viewBox"}),"! The ",(0,o.jsx)(e.code,{children:"viewBox"})," will together with some CSS ensure that the icon scales based on the root font-size."]}),"\n",(0,o.jsx)(e.li,{children:"Copy again the optimized markup and paste it into your JSX component (inline) og SVG file."}),"\n",(0,o.jsxs)(e.li,{children:["Consume the custom icons with either dynamic imports (",(0,o.jsx)(e.code,{children:"import(...)"}),") if you have many icons, or use static imports, like so:"]}),"\n"]}),"\n",(0,o.jsx)(e.h4,{children:"If you have an SVG loader"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",children:"import ImportedSVGIcon from 'my-icons/custom_icon.svg'\n\nrender(<Icon icon={ImportedSVGIcon} />)\n"})}),"\n",(0,o.jsx)(e.h4,{children:"Inline the SVG in your JSX"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",children:"function CustomSVGIcon(props) {\n  return <svg {...props}>...</svg>\n}\n\nrender(<Button icon={CustomSVGIcon} />)\n"})}),"\n",(0,o.jsx)(e.h4,{children:"SVG import in Create React App"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",children:"import { ReactComponent as CustomIcon } from './custom_icon.svg'\n\nrender(<Icon size=\"medium\">{CustomIcon}</Icon>)\n"})}),"\n",(0,o.jsx)(e.h3,{children:"Primary Icon"}),"\n",(0,o.jsxs)(e.p,{children:["There is also the ",(0,o.jsx)(e.a,{href:"/uilib/components/icon-primary",children:"IconPrimary"})," component, which comes with all the ",(0,o.jsx)(e.a,{href:"/icons/primary",children:"Primary Icons"})," included in the ",(0,o.jsx)(e.code,{children:"@dnb/eufemia"}),". you don't have to import the primary icons."]})]})}e.default=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,o.jsx)(e,Object.assign({},n,{children:(0,o.jsx)(r,n)})):r(n)}},69100:function(n,e,i){i.d(e,{QL:function(){return a},aL:function(){return m},bM:function(){return u},f7:function(){return x},ym:function(){return f},zA:function(){return h},zo:function(){return g}});i(2784);var o=i(28204),s=i(79357),r=i(46515),c=i(80495),t=i(78695),l=i(93529),d=i(52322);const a=()=>(0,d.jsx)(o.Z,{"data-visual-test":"icon-default",scope:{Bell:s.Z,BellMedium:r.Z},children:'\n<Icon icon={Bell} title="Give Icons a Title, or ..." />\n<Icon icon={BellMedium} aria-hidden />\n<Bell title="I\'m not responsive!" />\n{/* <- Not responsive! */}\n\n'}),h=()=>(0,d.jsx)(o.Z,{"data-visual-test":"icon-border",scope:{Bell:s.Z,BellMedium:r.Z},children:'<P>\n  <Icon border={true} icon={Bell} right />\n  <Icon border={true} icon={BellMedium} size="medium" right />\n  <IconPrimary border={true} icon="information" right />\n  <IconPrimary border={true} icon="information" size="medium" right />\n  <Button icon={<IconPrimary icon="add" border />} text="Button" />\n</P>\n'}),u=()=>(0,d.jsx)(o.Z,{"data-visual-test":"icon-inherit-sized",scope:{Bell:s.Z,BellMedium:r.Z},children:'<h1 className="dnb-h--xx-large">\n  h1 with auto sized <Icon icon={BellMedium} size="auto" aria-hidden />{\' \'}\n  icon\n</h1>\n'}),m=()=>(0,d.jsx)(o.Z,{"data-visual-test":"icon-medium",scope:{Bell:s.Z,BellMedium:r.Z},children:'\n<Icon icon={BellMedium} size="16" title="force default size" />\n<Icon icon={BellMedium} title="is medium anyway" />\n<Icon icon={Bell} size="medium" title="force medium size" />\n<Icon icon={Bell} size="24" title="custom size: size=24" />\n<Icon icon={Bell} width="24" height="24" title="not responsive" />\n\n'}),x=()=>(0,d.jsx)(o.Z,{"data-visual-test":"icon-alignment",scope:{Bell:s.Z,BellMedium:r.Z},noInline:!0,children:'const ColoredP = styled(P)`\n  display: inline-block;\n  background-color: yellowgreen;\n`\nconst ColoredH = styled(H2)`\n  display: inline-block;\n  margin: 0 0 0.5rem 0 !important;\n  background-color: yellowgreen;\n`\nconst ColoredIcon = styled(Icon)`\n  background-color: yellow;\n`\nrender(\n  <div className="dnb-core-style">\n    <ColoredH>\n      <ColoredIcon icon={Bell} />\n      Text\n    </ColoredH>\n    <br />\n    <ColoredP>\n      <ColoredIcon icon={Bell} />\n      Text\n    </ColoredP>\n  </div>,\n)\n'}),p=()=>(0,d.jsx)(o.Z,{"data-visual-test":"icon-all-primary",scope:{getListOfIcons:l.x,PrimaryIconsMedium:c},noInline:!0,children:'const Icons = () => (\n  <>\n    {getListOfIcons(PrimaryIconsMedium).map(({ iconName, Svg }) => {\n      return (\n        <Icon\n          title={iconName}\n          key={iconName}\n          icon={Svg}\n          size="medium"\n          right="small"\n          bottom="small"\n        />\n      )\n    })}\n  </>\n)\nrender(<Icons />)\n'}),j=()=>(0,d.jsx)(o.Z,{"data-visual-test":"icon-all-secondary",scope:{getListOfIcons:l.x,SecondaryIconsMedium:t},noInline:!0,children:'const uniqueList = {}\nconst Icons = () => (\n  <>\n    {getListOfIcons(SecondaryIconsMedium).map(({ iconName, Svg }) => {\n      if (uniqueList[iconName]) {\n        console.warn(\'The icon is already used:\', iconName, Svg)\n      }\n      uniqueList[iconName] = true\n      return (\n        <Icon\n          title={iconName}\n          key={iconName}\n          icon={Svg}\n          size="medium"\n          right="small"\n          bottom="small"\n        />\n      )\n    })}\n  </>\n)\nrender(<Icons />)\n'}),g=()=>(0,d.jsx)(o.Z,{"data-visual-test":"icon-colors",scope:{BellMedium:r.Z},children:'\n<Icon\n  icon={BellMedium}\n  color="var(--color-fire-red)"\n  title="CSS variable"\n/>\n<Icon icon={BellMedium} color="#DC2A2A" title="Hex" />\n<Icon icon={BellMedium} color="rgb(220,42,42)" title="RGB" />\n\n'});function f(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(p,{}),(0,d.jsx)(j,{})]})}}}]);
//# sourceMappingURL=component---src-docs-uilib-components-icon-mdx-1722c82c6ea9405a235b.js.map