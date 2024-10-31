"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[8528],{98528:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var a=r(7552),n=r(59705),s=r(36715),i=r(1343),l=r(29499),o=r(29629),c=r(33371),m=r(32808),u=r(58507),d=r(5401),v=r(49823),h=r(99546);function f(){return a.createElement("div",null,a.createElement(n.A,{size:20,style:{marginRight:20}}),a.createElement(s.A,{display:"inline"},"Creating SVG"))}function p(e,t){return(0,h.useLocalStorage)(`svg-${e}`,t)}function y({children:e,...t}){return a.createElement("div",null,a.createElement(i.A,t,e))}function g({model:e,handleClose:t}){const r=(0,h.getSession)(e),n="undefined"!=typeof OffscreenCanvas,[i,g]=(0,a.useState)(n),[k,b]=(0,a.useState)(!1),[A,S]=(0,a.useState)(),[E,w]=p("file","jbrowse.svg"),[x,C]=p("tracklabels","offset"),[$,D]=p("theme",r.themeName||"default");return a.createElement(v.Dialog,{open:!0,onClose:t,title:"Export SVG"},a.createElement(l.A,null,A?a.createElement(v.ErrorMessage,{error:A}):k?a.createElement(f,null):null,a.createElement(y,{helperText:"filename",value:E,onChange:e=>{w(e.target.value)}}),a.createElement(y,{select:!0,label:"Track label positioning",variant:"outlined",style:{width:150},value:x,onChange:e=>{C(e.target.value)}},a.createElement(o.A,{value:"offset"},"Offset"),a.createElement(o.A,{value:"overlay"},"Overlay"),a.createElement(o.A,{value:"left"},"Left"),a.createElement(o.A,{value:"none"},"None")),r.allThemes?a.createElement(y,{select:!0,label:"Theme",variant:"outlined",value:$,onChange:e=>{D(e.target.value)}},Object.entries(r.allThemes()).map((([e,t])=>a.createElement(o.A,{key:e,value:e},t.name||"(Unknown name)")))):null,n?a.createElement(c.A,{control:a.createElement(m.A,{checked:i,onChange:()=>{g((e=>!e))}}),label:"Rasterize canvas based tracks? File may be much larger if this is turned off"}):a.createElement(s.A,null,"Note: rasterizing layers not yet supported in this browser, so SVG size may be large")),a.createElement(u.A,null,a.createElement(d.A,{variant:"contained",color:"secondary",onClick:()=>{t()}},"Cancel"),a.createElement(d.A,{variant:"contained",color:"primary",type:"submit",onClick:async()=>{b(!0),S(void 0);try{await e.exportSvg({rasterizeLayers:i,filename:E,trackLabels:x,themeName:$}),t()}catch(e){console.error(e),S(e)}finally{b(!1)}}},"Submit")))}},59705:(e,t,r)=>{r.d(t,{A:()=>A});var a=r(7552),n=r(93878),s=r(70799),i=r(64761),l=r(51148),o=r(84893),c=r(4785),m=r(15622),u=r(58520),d=r(72489),v=r(69500);const h=i.i7`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,f=i.i7`
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
`,p="string"!=typeof h?i.AH`
        animation: ${h} 1.4s linear infinite;
      `:null,y="string"!=typeof f?i.AH`
        animation: ${f} 1.4s ease-in-out infinite;
      `:null,g=(0,l.Ay)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`color${(0,m.A)(r.color)}`]]}})((0,o.A)((({theme:e})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("transform")}},{props:{variant:"indeterminate"},style:p||{animation:`${h} 1.4s linear infinite`}},...Object.entries(e.palette).filter((0,u.A)()).map((([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}})))]})))),k=(0,l.Ay)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),b=(0,l.Ay)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t[`circle${(0,m.A)(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})((0,o.A)((({theme:e})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink,style:y||{animation:`${f} 1.4s ease-in-out infinite`}}]})))),A=a.forwardRef((function(e,t){const r=(0,c.b)({props:e,name:"MuiCircularProgress"}),{className:a,color:i="primary",disableShrink:l=!1,size:o=40,style:u,thickness:h=3.6,value:f=0,variant:p="indeterminate",...y}=r,A={...r,color:i,disableShrink:l,size:o,thickness:h,value:f,variant:p},S=(e=>{const{classes:t,variant:r,color:a,disableShrink:n}=e,i={root:["root",r,`color${(0,m.A)(a)}`],svg:["svg"],circle:["circle",`circle${(0,m.A)(r)}`,n&&"circleDisableShrink"]};return(0,s.A)(i,d.b,t)})(A),E={},w={},x={};if("determinate"===p){const e=2*Math.PI*((44-h)/2);E.strokeDasharray=e.toFixed(3),x["aria-valuenow"]=Math.round(f),E.strokeDashoffset=`${((100-f)/100*e).toFixed(3)}px`,w.transform="rotate(-90deg)"}return(0,v.jsx)(g,{className:(0,n.A)(S.root,a),style:{width:o,height:o,...w,...u},ownerState:A,ref:t,role:"progressbar",...x,...y,children:(0,v.jsx)(k,{className:S.svg,ownerState:A,viewBox:"22 22 44 44",children:(0,v.jsx)(b,{className:S.circle,style:E,ownerState:A,cx:44,cy:44,r:(44-h)/2,fill:"none",strokeWidth:h})})})}))},72489:(e,t,r)=>{r.d(t,{A:()=>i,b:()=>s});var a=r(33761),n=r(85693);function s(e){return(0,n.Ay)("MuiCircularProgress",e)}const i=(0,a.A)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"])}}]);
//# sourceMappingURL=8528.4793cd65.chunk.js.map