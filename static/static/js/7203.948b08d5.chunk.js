"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[7203],{59705:(r,e,t)=>{t.d(e,{A:()=>A});var s=t(7552),a=t(93878),i=t(70799),o=t(64761),n=t(51148),l=t(84893),c=t(4785),d=t(15622),p=t(58520),h=t(72489),u=t(69500);const m=o.i7`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,v=o.i7`
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
`,f="string"!=typeof m?o.AH`
        animation: ${m} 1.4s linear infinite;
      `:null,k="string"!=typeof v?o.AH`
        animation: ${v} 1.4s ease-in-out infinite;
      `:null,y=(0,n.Ay)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,e[t.variant],e[`color${(0,d.A)(t.color)}`]]}})((0,l.A)((({theme:r})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:r.transitions.create("transform")}},{props:{variant:"indeterminate"},style:f||{animation:`${m} 1.4s linear infinite`}},...Object.entries(r.palette).filter((0,p.A)()).map((([e])=>({props:{color:e},style:{color:(r.vars||r).palette[e].main}})))]})))),g=(0,n.Ay)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),b=(0,n.Ay)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.circle,e[`circle${(0,d.A)(t.variant)}`],t.disableShrink&&e.circleDisableShrink]}})((0,l.A)((({theme:r})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:r.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:r})=>"indeterminate"===r.variant&&!r.disableShrink,style:k||{animation:`${v} 1.4s ease-in-out infinite`}}]})))),A=s.forwardRef((function(r,e){const t=(0,c.b)({props:r,name:"MuiCircularProgress"}),{className:s,color:o="primary",disableShrink:n=!1,size:l=40,style:p,thickness:m=3.6,value:v=0,variant:f="indeterminate",...k}=t,A={...t,color:o,disableShrink:n,size:l,thickness:m,value:v,variant:f},x=(r=>{const{classes:e,variant:t,color:s,disableShrink:a}=r,o={root:["root",t,`color${(0,d.A)(s)}`],svg:["svg"],circle:["circle",`circle${(0,d.A)(t)}`,a&&"circleDisableShrink"]};return(0,i.A)(o,h.b,e)})(A),w={},S={},C={};if("determinate"===f){const r=2*Math.PI*((44-m)/2);w.strokeDasharray=r.toFixed(3),C["aria-valuenow"]=Math.round(v),w.strokeDashoffset=`${((100-v)/100*r).toFixed(3)}px`,S.transform="rotate(-90deg)"}return(0,u.jsx)(y,{className:(0,a.A)(x.root,s),style:{width:l,height:l,...S,...p},ownerState:A,ref:e,role:"progressbar",...C,...k,children:(0,u.jsx)(g,{className:x.svg,ownerState:A,viewBox:"22 22 44 44",children:(0,u.jsx)(b,{className:x.circle,style:w,ownerState:A,cx:44,cy:44,r:(44-m)/2,fill:"none",strokeWidth:m})})})}))},72489:(r,e,t)=>{t.d(e,{A:()=>o,b:()=>i});var s=t(33761),a=t(85693);function i(r){return(0,a.Ay)("MuiCircularProgress",r)}const o=(0,s.A)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"])},97203:(r,e,t)=>{t.r(e),t.d(e,{circularProgressClasses:()=>a.A,default:()=>s.A,getCircularProgressUtilityClass:()=>a.b});var s=t(59705),a=t(72489)}}]);
//# sourceMappingURL=7203.948b08d5.chunk.js.map