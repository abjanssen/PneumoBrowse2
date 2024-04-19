"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[8859],{78859:(e,r,t)=>{t.r(r),t.d(r,{default:()=>y});var a=t(7552),n=t(59705),i=t(36715),s=t(1343),o=t(29499),l=t(29629),c=t(33371),m=t(32808),u=t(58507),d=t(5401),h=t(48735),v=t(99546);function f(){return a.createElement("div",null,a.createElement(n.A,{size:20,style:{marginRight:20}}),a.createElement(i.A,{display:"inline"},"Creating SVG"))}function g({children:e,...r}){return a.createElement("div",null,a.createElement(s.A,r,e))}function k(e,r){return(0,v.useLocalStorage)("svg-"+e,r)}function y({model:e,handleClose:r}){const t=(0,v.getSession)(e),n="undefined"!=typeof OffscreenCanvas,[s,y]=(0,a.useState)(n),[p,A]=(0,a.useState)(!1),[b,S]=(0,a.useState)(),[w,x]=k("file","jbrowse.svg"),[C,E]=k("theme",t.themeName||"default");return a.createElement(h.Dialog,{open:!0,onClose:r,title:"Export SVG"},a.createElement(o.A,null,b?a.createElement(h.ErrorMessage,{error:b}):p?a.createElement(f,null):null,a.createElement(g,{helperText:"filename",value:w,onChange:e=>x(e.target.value)}),t.allThemes?a.createElement(g,{select:!0,label:"Theme",value:C,onChange:e=>E(e.target.value)},Object.entries(t.allThemes()).map((([e,r])=>a.createElement(l.A,{key:e,value:e},r.name||"(Unknown name)")))):null,n?a.createElement(c.A,{control:a.createElement(m.A,{checked:s,onChange:()=>y((e=>!e))}),label:"Rasterize canvas based tracks? File may be much larger if this is turned off"}):a.createElement(i.A,null,"Note: rasterizing layers not yet supported in this browser, so SVG size may be large")),a.createElement(u.A,null,a.createElement(d.A,{variant:"contained",color:"secondary",onClick:()=>r()},"Cancel"),a.createElement(d.A,{variant:"contained",color:"primary",type:"submit",onClick:async()=>{A(!0),S(void 0);try{await e.exportSvg({rasterizeLayers:s,filename:w,themeName:C}),r()}catch(e){console.error(e),S(e)}finally{A(!1)}}},"Submit")))}},59705:(e,r,t)=>{t.d(r,{A:()=>C});var a=t(83673),n=t(6614),i=t(7552),s=t(93878),o=t(60827),l=t(64761),c=t(15622),m=t(31049),u=t(51148),d=t(72489),h=t(69500);const v=["className","color","disableShrink","size","style","thickness","value","variant"];let f,g,k,y,p=e=>e;const A=(0,l.i7)(f||(f=p`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),b=(0,l.i7)(g||(g=p`
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
`)),S=(0,u.Ay)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,c.A)(t.color)}`]]}})((({ownerState:e,theme:r})=>(0,n.A)({display:"inline-block"},"determinate"===e.variant&&{transition:r.transitions.create("transform")},"inherit"!==e.color&&{color:(r.vars||r).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,l.AH)(k||(k=p`
      animation: ${0} 1.4s linear infinite;
    `),A))),w=(0,u.Ay)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),x=(0,u.Ay)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.circle,r[`circle${(0,c.A)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})((({ownerState:e,theme:r})=>(0,n.A)({stroke:"currentColor"},"determinate"===e.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,l.AH)(y||(y=p`
      animation: ${0} 1.4s ease-in-out infinite;
    `),b))),C=i.forwardRef((function(e,r){const t=(0,m.A)({props:e,name:"MuiCircularProgress"}),{className:i,color:l="primary",disableShrink:u=!1,size:f=40,style:g,thickness:k=3.6,value:y=0,variant:p="indeterminate"}=t,A=(0,a.A)(t,v),b=(0,n.A)({},t,{color:l,disableShrink:u,size:f,thickness:k,value:y,variant:p}),C=(e=>{const{classes:r,variant:t,color:a,disableShrink:n}=e,i={root:["root",t,`color${(0,c.A)(a)}`],svg:["svg"],circle:["circle",`circle${(0,c.A)(t)}`,n&&"circleDisableShrink"]};return(0,o.A)(i,d.b,r)})(b),E={},D={},M={};if("determinate"===p){const e=2*Math.PI*((44-k)/2);E.strokeDasharray=e.toFixed(3),M["aria-valuenow"]=Math.round(y),E.strokeDashoffset=`${((100-y)/100*e).toFixed(3)}px`,D.transform="rotate(-90deg)"}return(0,h.jsx)(S,(0,n.A)({className:(0,s.A)(C.root,i),style:(0,n.A)({width:f,height:f},D,g),ownerState:b,ref:r,role:"progressbar"},M,A,{children:(0,h.jsx)(w,{className:C.svg,ownerState:b,viewBox:"22 22 44 44",children:(0,h.jsx)(x,{className:C.circle,style:E,ownerState:b,cx:44,cy:44,r:(44-k)/2,fill:"none",strokeWidth:k})})}))}))},72489:(e,r,t)=>{t.d(r,{A:()=>s,b:()=>i});var a=t(55549),n=t(9577);function i(e){return(0,n.Ay)("MuiCircularProgress",e)}const s=(0,a.A)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"])}}]);
//# sourceMappingURL=8859.24e0a11b.chunk.js.map