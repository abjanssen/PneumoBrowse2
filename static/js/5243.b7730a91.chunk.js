"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[5243],{15243:(e,r,t)=>{t.r(r),t.d(r,{default:()=>k});var a=t(7552),n=t(59705),s=t(36715),i=t(29499),o=t(1343),l=t(29629),c=t(33371),m=t(32808),u=t(58507),d=t(5401),h=t(48735),v=t(99546);function f(){return a.createElement("div",null,a.createElement(n.A,{size:20,style:{marginRight:20}}),a.createElement(s.A,{display:"inline"},"Creating SVG"))}function g(e,r){return(0,v.useLocalStorage)("svg-"+e,r)}function k({model:e,handleClose:r}){const t=(0,v.getSession)(e),n="undefined"!=typeof OffscreenCanvas,[k,A]=(0,a.useState)(n),[b,p]=(0,a.useState)(!1),[y,S]=(0,a.useState)(),[w,x]=g("file","jbrowse.svg"),[C,E]=g("theme",t.themeName||"default");return a.createElement(h.Dialog,{open:!0,onClose:r,title:"Export SVG"},a.createElement(i.A,null,y?a.createElement(h.ErrorMessage,{error:y}):b?a.createElement(f,null):null,a.createElement(o.A,{helperText:"filename",value:w,onChange:e=>x(e.target.value)}),a.createElement("br",null),t.allThemes?a.createElement(o.A,{select:!0,label:"Theme",value:C,onChange:e=>E(e.target.value)},Object.entries(t.allThemes()).map((([e,r])=>a.createElement(l.A,{key:e,value:e},r.name||"(Unknown name)")))):null,n?a.createElement(c.A,{control:a.createElement(m.A,{checked:k,onChange:()=>A((e=>!e))}),label:"Rasterize canvas based tracks? File may be much larger if this is turned off"}):a.createElement(s.A,null,"Note: rasterizing layers not yet supported in this browser, so SVG size may be large")),a.createElement(u.A,null,a.createElement(d.A,{variant:"contained",color:"secondary",onClick:()=>r()},"Cancel"),a.createElement(d.A,{variant:"contained",color:"primary",type:"submit",onClick:async()=>{p(!0),S(void 0);try{await e.exportSvg({rasterizeLayers:k,filename:w,themeName:C}),r()}catch(e){console.error(e),S(e),p(!1)}}},"Submit")))}},59705:(e,r,t)=>{t.d(r,{A:()=>C});var a=t(83673),n=t(6614),s=t(7552),i=t(93878),o=t(60827),l=t(64761),c=t(15622),m=t(31049),u=t(51148),d=t(72489),h=t(69500);const v=["className","color","disableShrink","size","style","thickness","value","variant"];let f,g,k,A,b=e=>e;const p=(0,l.i7)(f||(f=b`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),y=(0,l.i7)(g||(g=b`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),S=(0,u.Ay)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,c.A)(t.color)}`]]}})((({ownerState:e,theme:r})=>(0,n.A)({display:"inline-block"},"determinate"===e.variant&&{transition:r.transitions.create("transform")},"inherit"!==e.color&&{color:(r.vars||r).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,l.AH)(k||(k=b`
      animation: ${0} 1.4s linear infinite;
    `),p))),w=(0,u.Ay)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),x=(0,u.Ay)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.circle,r[`circle${(0,c.A)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})((({ownerState:e,theme:r})=>(0,n.A)({stroke:"currentColor"},"determinate"===e.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,l.AH)(A||(A=b`
      animation: ${0} 1.4s ease-in-out infinite;
    `),y))),C=s.forwardRef((function(e,r){const t=(0,m.A)({props:e,name:"MuiCircularProgress"}),{className:s,color:l="primary",disableShrink:u=!1,size:f=40,style:g,thickness:k=3.6,value:A=0,variant:b="indeterminate"}=t,p=(0,a.A)(t,v),y=(0,n.A)({},t,{color:l,disableShrink:u,size:f,thickness:k,value:A,variant:b}),C=(e=>{const{classes:r,variant:t,color:a,disableShrink:n}=e,s={root:["root",t,`color${(0,c.A)(a)}`],svg:["svg"],circle:["circle",`circle${(0,c.A)(t)}`,n&&"circleDisableShrink"]};return(0,o.A)(s,d.b,r)})(y),E={},D={},M={};if("determinate"===b){const e=2*Math.PI*((44-k)/2);E.strokeDasharray=e.toFixed(3),M["aria-valuenow"]=Math.round(A),E.strokeDashoffset=`${((100-A)/100*e).toFixed(3)}px`,D.transform="rotate(-90deg)"}return(0,h.jsx)(S,(0,n.A)({className:(0,i.A)(C.root,s),style:(0,n.A)({width:f,height:f},D,g),ownerState:y,ref:r,role:"progressbar"},M,p,{children:(0,h.jsx)(w,{className:C.svg,ownerState:y,viewBox:"22 22 44 44",children:(0,h.jsx)(x,{className:C.circle,style:E,ownerState:y,cx:44,cy:44,r:(44-k)/2,fill:"none",strokeWidth:k})})}))}))},72489:(e,r,t)=>{t.d(r,{A:()=>i,b:()=>s});var a=t(55549),n=t(9577);function s(e){return(0,n.Ay)("MuiCircularProgress",e)}const i=(0,a.A)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"])}}]);
//# sourceMappingURL=5243.b7730a91.chunk.js.map