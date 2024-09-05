"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[8859],{78859:(e,r,t)=>{t.r(r),t.d(r,{default:()=>g});var a=t(7552),n=t(59705),i=t(36715),s=t(1343),o=t(29499),l=t(29629),c=t(33371),m=t(32808),u=t(58507),d=t(5401),h=t(49823),p=t(99546);function v(){return a.createElement("div",null,a.createElement(n.A,{size:20,style:{marginRight:20}}),a.createElement(i.A,{display:"inline"},"Creating SVG"))}function f({children:e,...r}){return a.createElement("div",null,a.createElement(s.A,r,e))}function y(e,r){return(0,p.useLocalStorage)(`svg-${e}`,r)}function g({model:e,handleClose:r}){const t=(0,p.getSession)(e),n="undefined"!=typeof OffscreenCanvas,[s,g]=(0,a.useState)(n),[k,b]=(0,a.useState)(!1),[A,S]=(0,a.useState)(),[x,w]=y("file","jbrowse.svg"),[C,E]=y("theme",t.themeName||"default");return a.createElement(h.Dialog,{open:!0,onClose:r,title:"Export SVG"},a.createElement(o.A,null,A?a.createElement(h.ErrorMessage,{error:A}):k?a.createElement(v,null):null,a.createElement(f,{helperText:"filename",value:x,onChange:e=>{w(e.target.value)}}),t.allThemes?a.createElement(f,{select:!0,label:"Theme",value:C,onChange:e=>{E(e.target.value)}},Object.entries(t.allThemes()).map((([e,r])=>a.createElement(l.A,{key:e,value:e},r.name||"(Unknown name)")))):null,n?a.createElement(c.A,{control:a.createElement(m.A,{checked:s,onChange:()=>{g((e=>!e))}}),label:"Rasterize canvas based tracks? File may be much larger if this is turned off"}):a.createElement(i.A,null,"Note: rasterizing layers not yet supported in this browser, so SVG size may be large")),a.createElement(u.A,null,a.createElement(d.A,{variant:"contained",color:"secondary",onClick:()=>{r()}},"Cancel"),a.createElement(d.A,{variant:"contained",color:"primary",type:"submit",onClick:async()=>{b(!0),S(void 0);try{await e.exportSvg({rasterizeLayers:s,filename:x,themeName:C}),r()}catch(e){console.error(e),S(e)}finally{b(!1)}}},"Submit")))}},59705:(e,r,t)=>{t.d(r,{A:()=>b});var a=t(7552),n=t(93878),i=t(70799),s=t(64761),o=t(51148),l=t(60129),c=t(4785),m=t(15622),u=t(72489),d=t(69500);const h=s.i7`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,p=s.i7`
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
`,v="string"!=typeof h?s.AH`
        animation: ${h} 1.4s linear infinite;
      `:null,f="string"!=typeof p?s.AH`
        animation: ${p} 1.4s ease-in-out infinite;
      `:null,y=(0,o.Ay)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,m.A)(t.color)}`]]}})((0,l.A)((({theme:e})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("transform")}},{props:{variant:"indeterminate"},style:v||{animation:`${h} 1.4s linear infinite`}},...Object.entries(e.palette).filter((([,e])=>e&&e.main)).map((([r])=>({props:{color:r},style:{color:(e.vars||e).palette[r].main}})))]})))),g=(0,o.Ay)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),k=(0,o.Ay)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.circle,r[`circle${(0,m.A)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})((0,l.A)((({theme:e})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink,style:f||{animation:`${p} 1.4s ease-in-out infinite`}}]})))),b=a.forwardRef((function(e,r){const t=(0,c.b)({props:e,name:"MuiCircularProgress"}),{className:a,color:s="primary",disableShrink:o=!1,size:l=40,style:h,thickness:p=3.6,value:v=0,variant:f="indeterminate",...b}=t,A={...t,color:s,disableShrink:o,size:l,thickness:p,value:v,variant:f},S=(e=>{const{classes:r,variant:t,color:a,disableShrink:n}=e,s={root:["root",t,`color${(0,m.A)(a)}`],svg:["svg"],circle:["circle",`circle${(0,m.A)(t)}`,n&&"circleDisableShrink"]};return(0,i.A)(s,u.b,r)})(A),x={},w={},C={};if("determinate"===f){const e=2*Math.PI*((44-p)/2);x.strokeDasharray=e.toFixed(3),C["aria-valuenow"]=Math.round(v),x.strokeDashoffset=`${((100-v)/100*e).toFixed(3)}px`,w.transform="rotate(-90deg)"}return(0,d.jsx)(y,{className:(0,n.A)(S.root,a),style:{width:l,height:l,...w,...h},ownerState:A,ref:r,role:"progressbar",...C,...b,children:(0,d.jsx)(g,{className:S.svg,ownerState:A,viewBox:"22 22 44 44",children:(0,d.jsx)(k,{className:S.circle,style:x,ownerState:A,cx:44,cy:44,r:(44-p)/2,fill:"none",strokeWidth:p})})})}))},72489:(e,r,t)=>{t.d(r,{A:()=>s,b:()=>i});var a=t(33761),n=t(85693);function i(e){return(0,n.Ay)("MuiCircularProgress",e)}const s=(0,a.A)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"])}}]);
//# sourceMappingURL=8859.5d31d475.chunk.js.map