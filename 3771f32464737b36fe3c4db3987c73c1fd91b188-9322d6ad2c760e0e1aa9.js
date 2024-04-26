"use strict";(self.webpackChunkdnb_design_system_portal=self.webpackChunkdnb_design_system_portal||[]).push([[28278],{95791:function(e,n,t){t.r(n),t.d(n,{default:function(){return S}});var a=t(52322),i=t(45392),o=t(70894),r=t(2784),s=t(28204),l=t(80215),d=t(81989),c=t(88268),m=t(42351),g=t(96844),h=t(54109),u=t(55560).ZP,p=t(80945),x=t(84171);const b=(0,o.Z)("div",{target:"e12w8i0c5"})("height:",(e=>e.height||"20rem"),";overflow-y:scroll;background-color:var(--color-white);border:0.25rem dotted var(--color-black);"),f=(0,o.Z)("div",{target:"e12w8i0c4"})("display:flex;justify-content:center;align-items:center;height:15vw;background-color:",(e=>e.color||"tomato"),";font-size:15vw;font-weight:var(--font-weight-bold);font-feature-settings:'pnum' on,'lnum' on;color:var(--color-white);"),j=()=>(0,a.jsx)(s.Z,{scope:{HeightLimit:b,LargePage:f},children:'<HeightLimit>\n  <Pagination\n    mode="infinity"\n    use_load_button\n    startup_page={5}\n    min_wait_time={0}\n    on_load={({ pageNumber, setContent }) => {\n      // simulate server communication delay\n      const timeout = setTimeout(() => {\n        setContent(pageNumber, <LargePage>{pageNumber}</LargePage>)\n      }, Math.ceil(Math.random() * 500))\n      return () => clearTimeout(timeout)\n    }}\n  />\n</HeightLimit>\n'}),_=()=>(0,a.jsx)(s.Z,{scope:{HeightLimit:b,LargePage:f},children:'<HeightLimit>\n  <Pagination\n    mode="infinity"\n    indicator_element={() => (\n      <LargePage color="lightgreen">Loading ...</LargePage>\n    )}\n    startup_page={3}\n    page_count={10}\n    min_wait_time={0}\n    on_load={({ pageNumber, setContent }) => {\n      // simulate server communication delay\n      const timeout = setTimeout(() => {\n        setContent(pageNumber, <LargePage>{pageNumber}</LargePage>)\n      }, Math.ceil(Math.random() * 500))\n      return () => clearTimeout(timeout)\n    }}\n    on_end={({ pageNumber, setContent }) => {\n      setContent(pageNumber, <LargePage color="lightgreen">End</LargePage>)\n    }}\n  />\n</HeightLimit>\n'}),w=()=>(0,a.jsx)(s.Z,{scope:{HeightLimit:b,LargePage:f},children:'<HeightLimit>\n  <Pagination\n    mode="infinity"\n    parallel_load_count={2}\n    min_wait_time={0}\n    on_load={({ pageNumber, setContent, endInfinity }) => {\n      // simulate server communication delay\n      const timeout = setTimeout(() => {\n        if (pageNumber > 10) {\n          endInfinity()\n        } else {\n          setContent(pageNumber, <LargePage>{pageNumber}</LargePage>)\n        }\n      }, Math.ceil(Math.random() * 1e3))\n      return () => clearTimeout(timeout)\n    }}\n    on_end={({ pageNumber, setContent }) => {\n      setContent(pageNumber, <LargePage color="lightgreen">End</LargePage>)\n    }}\n  />\n</HeightLimit>\n'}),y=()=>(0,a.jsx)(s.Z,{scope:{HeightLimit:b,PaginationTableExample:v},children:'<HeightLimit height="60rem">\n  <PaginationTableExample />\n</HeightLimit>\n'});function v(){return(0,a.jsxs)(H,{className:"dnb-core-style",spacing:!0,children:[(0,a.jsxs)(l.Z,{left:!0,children:[(0,a.jsx)(d.Z,{size:"small",children:"Infinity Table"}),(0,a.jsx)(c.Z,{bottom:!0,children:"This is a semantic correct table using infinity scrolling. It also has a sticky header."}),(0,a.jsxs)(m.Z,{bottom:!0,children:[(0,a.jsx)("li",{children:"The startup page number is set to 3."}),(0,a.jsx)("li",{children:"And per page we show 10 items."}),(0,a.jsx)("li",{children:"A random delay is added to simulate asynchronous interaction."})]})]}),(0,a.jsx)(N,{tableItems:L})]})}const L=[];for(let M=1;M<=300;M++)L.push({ssn:M,text:String(M),expanded:!1});const N=e=>{var n;let{tableItems:t,...i}=e;const o=Math.floor((null===(n=t)||void 0===n?void 0:n.length)/10),[{Pagination:s,setContent:l,resetContent:d,resetInfinity:c,endInfinity:m}]=r.useState(x.FV),[h,u]=r.useState("asc"),[p,b]=r.useState(null),[f,j]=r.useState(null);r.useEffect((()=>{b(3)}),[]),t=E(t,h);let _;l(p,(0,a.jsx)(P,{items:t,perPageCount:10,currentPage:p,onToggleExpanded:(e,n)=>{let{ssn:a}=e,{pageNumber:i,element:o=null,onExpanded:r=null}=n;const s=t.findIndex((e=>{let{ssn:n}=e;return n===a}));if(s>-1){const e=t[s];t[s]={...e,expanded:!e.expanded},b(i),j((new Date).getTime()),o&&C({element:o,expanded:!e.expanded}),setTimeout(r,10)}},onMounted:e=>{e.forEach((e=>{let{element:{current:n},expanded:t}=e;return C({element:n,expanded:t,animation:!1})}))},endInfinity:m})),r.useEffect((()=>()=>clearTimeout(_)));const w=e=>{let{pageNumber:n}=e;console.log("on_change: with page",n),clearTimeout(_),_=setTimeout((()=>{n===p?j((new Date).getTime()):b(n)}),Math.ceil(1e3*Math.random()))};return(0,a.jsxs)(T,{sticky:!0,children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{scope:"col",children:(0,a.jsx)(g.Z,{size:"small",icon:"reset",icon_position:"left",variant:"secondary",on_click:()=>{clearTimeout(_),c(),d(),u("asc"),j((new Date).getTime())},children:"Reset everything"})}),(0,a.jsx)("th",{scope:"col",className:"dnb-table--sortable dnb-table--active "+("desc"===h?" dnb-table--reversed":""),children:(0,a.jsx)(g.Z,{variant:"tertiary",icon:"arrow-down",text:"Sortable",title:"Sort table row",on_click:()=>{d(),u((e=>"asc"===e?"desc":"asc"))}})})]})}),(0,a.jsx)("tbody",{children:(0,a.jsx)(s,{mode:"infinity",marker_element:"tr",fallback_element:e=>{let{className:n,...t}=e;return(0,a.jsx)(Z,{className:n,children:(0,a.jsx)(k,{colSpan:2,...t})})},current_page:p,page_count:o,...i,on_startup:w,on_change:w})})]})},P=e=>{let{children:n=null,items:t,currentPage:i,perPageCount:o,onToggleExpanded:s,onMounted:l,endInfinity:d,...m}=e;const h=[];return l&&r.useEffect((()=>l&&l(h)),[]),t=t.filter(((e,n)=>{const t=(i-1)*o;return n>=t&&n<t+o})),0===t.length?(d(),null):t.map(((e,t)=>{const o={onClick:n=>{if(!(0,p.qF)()||/button/.test(document.activeElement.tagName)){let t=n.currentTarget;s(e,{pageNumber:i,onExpanded:()=>{try{t=t.nextElementSibling,C({element:t,expanded:!e.expanded}),t.focus()}catch(n){}}})}}},l=r.createRef();return h.push({...e,element:l}),(0,a.jsxs)(r.Fragment,{children:[(0,a.jsxs)(Z,{...m,...o,className:`dnb-table--${t%2?"even":"odd"} ${e.expanded?"expanded":""}`,ref:l,children:[(0,a.jsx)(k,{children:(0,a.jsx)(g.Z,{title:e.expanded?"Hide details":"Show more details",icon:"chevron_down",size:"small",right:"large"})}),(0,a.jsx)(k,{children:(0,a.jsxs)(c.Z,{children:[e.text," ",n]})})]}),(0,a.jsx)(Z,{className:"expanded-content dnb-no-focus "+(e.expanded?"expanded":""),tabIndex:-1,children:(0,a.jsx)(k,{colSpan:2,children:e.expanded&&(0,a.jsx)("div",{className:"expanded-content__outer",children:(0,a.jsxs)("div",{className:"expanded-content__inner",children:[(0,a.jsx)(c.Z,{children:"What ever content ..."}),(0,a.jsx)(g.Z,{variant:"secondary",top:!0,children:"🔥"})]})})})})]},e.ssn)}))},T=(0,o.Z)(u,{target:"e12w8i0c3"})({name:"wgb42e",styles:"table-layout:fixed"}),Z=(0,o.Z)("tr",{target:"e12w8i0c2"})({name:"14oarkp",styles:"&:not(.expanded-content):hover{cursor:pointer;opacity:0.8;}.dnb-icon{transition:transform 300ms ease-out;}&.expanded{.dnb-icon{transform:rotate(-180deg);}}&.expanded-content{max-height:10rem;transform:translateY(-10px);opacity:0;transition:height 400ms ease-out,opacity 600ms ease-out,transform 400ms ease-out;td{height:inherit;padding:0;background-color:var(--color-white);.expanded-content__outer{height:inherit;}.expanded-content__inner{height:inherit;padding:2rem 0 2rem 3rem;background-color:tomato;}}}&.expanded.expanded-content{opacity:1;transform:translateY(0);}"}),k=(0,o.Z)("td",{target:"e12w8i0c1"})({name:"16lnd8y",styles:".dnb-pagination__loadbar{justify-content:flex-start;}.dnb-pagination__indicator,.dnb-pagination__loadbar{height:6rem;}.dnb-p{cursor:text;font-feature-settings:'pnum' on,'lnum' on;font-weight:var(--font-weight-bold);font-size:var(--font-size-large);.dnb-spacing &.dnb-h--large:not([class*='space__bottom']),.dnb-core-style .dnb-spacing &.dnb-h--large:not([class*='space__bottom']){margin:0;}}"}),C=e=>{let{element:n,expanded:t=!1,animation:a=!0}=e;if(n&&"undefined"!=typeof window&&window.requestAnimationFrame){/td/.test(n.nodeName)&&(n=n.parentElement);const e=t?window.getComputedStyle(n)["max-height"]:n.scrollHeight;window.requestAnimationFrame((()=>{a&&(n.style.height="1px"),window.requestAnimationFrame((()=>n.style.height=e))}))}},E=(e,n)=>e.sort(((e,t)=>{let{text:a}=e,{text:i}=t;const o=parseFloat(a),r=parseFloat(i);return("asc"===n?o>r:o<r)?1:-1})),H=(0,o.Z)(h.Z,{target:"e12w8i0c0"})({name:"2o4w0b",styles:"width:100%;background:var(--color-white)"});function I(e){const n=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",a:"a"},(0,i.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{children:"Demos"}),"\n",(0,a.jsx)(n.h3,{children:"Infinity scroller with load button"}),"\n",(0,a.jsxs)(n.p,{children:["A load button is shown at the bottom by having ",(0,a.jsx)(n.code,{children:"use_load_button={true}"})," - but here we define our ",(0,a.jsx)(n.code,{children:"startup_page={5}"}),", so we also get a load button on top."]}),"\n",(0,a.jsx)(j,{}),"\n",(0,a.jsx)(n.h3,{children:"Infinity scroller with custom load indicator"}),"\n",(0,a.jsx)(_,{}),"\n",(0,a.jsxs)(n.h3,{children:["Infinity scroller with unknown ",(0,a.jsx)(n.code,{children:"page_count"})]}),"\n",(0,a.jsx)(w,{}),"\n",(0,a.jsx)(n.h3,{children:"Advanced Table infinity scroller"}),"\n",(0,a.jsxs)(n.p,{children:["You can find the code either on ",(0,a.jsx)(n.a,{href:"https://github.com/dnbexperience/eufemia/tree/main/packages/dnb-design-system-portal/src/docs/uilib/components/pagination/Examples.tsx",children:"GitHub"})," or on ",(0,a.jsx)(n.a,{href:"https://codesandbox.io/s/eufemia-table-pagination-infinity-546f7",children:"CodeSandbox"})]}),"\n",(0,a.jsx)(y,{})]})}var S=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(I,e)})):I(e)}}}]);
//# sourceMappingURL=3771f32464737b36fe3c4db3987c73c1fd91b188-9322d6ad2c760e0e1aa9.js.map