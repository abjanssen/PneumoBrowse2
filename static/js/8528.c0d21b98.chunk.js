"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[8528],{98528:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var a=r(7552),n=r(59705),i=r(36715),s=r(1343),l=r(29499),o=r(29629),c=r(33371),m=r(32808),u=r(58507),d=r(5401),v=r(49823),h=r(99546);function f(){return a.createElement("div",null,a.createElement(n.A,{size:20,style:{marginRight:20}}),a.createElement(i.A,{display:"inline"},"Creating SVG"))}function p(e,t){return(0,h.useLocalStorage)(`svg-${e}`,t)}function y({children:e,...t}){return a.createElement("div",null,a.createElement(s.A,t,e))}function g({model:e,handleClose:t}){const r=(0,h.getSession)(e),n="undefined"!=typeof OffscreenCanvas,[s,g]=(0,a.useState)(n),[k,b]=(0,a.useState)(!1),[A,S]=(0,a.useState)(),[E,w]=p("file","jbrowse.svg"),[x,C]=p("tracklabels","offset"),[$,D]=p("theme",r.themeName||"default");return a.createElement(v.Dialog,{open:!0,onClose:t,title:"Export SVG"},a.createElement(l.A,null,A?a.createElement(v.ErrorMessage,{error:A}):k?a.createElement(f,null):null,a.createElement(y,{helperText:"filename",value:E,onChange:e=>{w(e.target.value)}}),a.createElement(y,{select:!0,label:"Track label positioning",variant:"outlined",style:{width:150},value:x,onChange:e=>{C(e.target.value)}},a.createElement(o.A,{value:"offset"},"Offset"),a.createElement(o.A,{value:"overlay"},"Overlay"),a.createElement(o.A,{value:"left"},"Left"),a.createElement(o.A,{value:"none"},"None")),r.allThemes?a.createElement(y,{select:!0,label:"Theme",variant:"outlined",value:$,onChange:e=>{D(e.target.value)}},Object.entries(r.allThemes()).map((([e,t])=>a.createElement(o.A,{key:e,value:e},t.name||"(Unknown name)")))):null,n?a.createElement(c.A,{control:a.createElement(m.A,{checked:s,onChange:()=>{g((e=>!e))}}),label:"Rasterize canvas based tracks? File may be much larger if this is turned off"}):a.createElement(i.A,null,"Note: rasterizing layers not yet supported in this browser, so SVG size may be large")),a.createElement(u.A,null,a.createElement(d.A,{variant:"contained",color:"secondary",onClick:()=>{t()}},"Cancel"),a.createElement(d.A,{variant:"contained",color:"primary",type:"submit",onClick:async()=>{b(!0),S(void 0);try{await e.exportSvg({rasterizeLayers:s,filename:E,trackLabels:x,themeName:$}),t()}catch(e){console.error(e),S(e)}finally{b(!1)}}},"Submit")))}},59705:(e,t,r)=>{r.d(t,{A:()=>b});var a=r(7552),n=r(93878),i=r(70799),s=r(64761),l=r(51148),o=r(60129),c=r(4785),m=r(15622),u=r(72489),d=r(69500);const v=s.i7`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,h=s.i7`
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
`,f="string"!=typeof v?s.AH`
        animation: ${v} 1.4s linear infinite;
      `:null,p="string"!=typeof h?s.AH`
        animation: ${h} 1.4s ease-in-out infinite;
      `:null,y=(0,l.Ay)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`color${(0,m.A)(r.color)}`]]}})((0,o.A)((({theme:e})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("transform")}},{props:{variant:"indeterminate"},style:f||{animation:`${v} 1.4s linear infinite`}},...Object.entries(e.palette).filter((([,e])=>e&&e.main)).map((([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}})))]})))),g=(0,l.Ay)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),k=(0,l.Ay)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t[`circle${(0,m.A)(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})((0,o.A)((({theme:e})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink,style:p||{animation:`${h} 1.4s ease-in-out infinite`}}]})))),b=a.forwardRef((function(e,t){const r=(0,c.b)({props:e,name:"MuiCircularProgress"}),{className:a,color:s="primary",disableShrink:l=!1,size:o=40,style:v,thickness:h=3.6,value:f=0,variant:p="indeterminate",...b}=r,A={...r,color:s,disableShrink:l,size:o,thickness:h,value:f,variant:p},S=(e=>{const{classes:t,variant:r,color:a,disableShrink:n}=e,s={root:["root",r,`color${(0,m.A)(a)}`],svg:["svg"],circle:["circle",`circle${(0,m.A)(r)}`,n&&"circleDisableShrink"]};return(0,i.A)(s,u.b,t)})(A),E={},w={},x={};if("determinate"===p){const e=2*Math.PI*((44-h)/2);E.strokeDasharray=e.toFixed(3),x["aria-valuenow"]=Math.round(f),E.strokeDashoffset=`${((100-f)/100*e).toFixed(3)}px`,w.transform="rotate(-90deg)"}return(0,d.jsx)(y,{className:(0,n.A)(S.root,a),style:{width:o,height:o,...w,...v},ownerState:A,ref:t,role:"progressbar",...x,...b,children:(0,d.jsx)(g,{className:S.svg,ownerState:A,viewBox:"22 22 44 44",children:(0,d.jsx)(k,{className:S.circle,style:E,ownerState:A,cx:44,cy:44,r:(44-h)/2,fill:"none",strokeWidth:h})})})}))},72489:(e,t,r)=>{r.d(t,{A:()=>s,b:()=>i});var a=r(33761),n=r(85693);function i(e){return(0,n.Ay)("MuiCircularProgress",e)}const s=(0,a.A)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"])}}]);
//# sourceMappingURL=8528.c0d21b98.chunk.js.map