"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[1696],{1696:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var i=r(7552),o=r(68446),a=r(29499),n=r(36715),s=r(59705),l=r(58507),c=r(5401),d=r(49823);const m=(0,r(75785).n9)()((e=>({table:{border:"1px solid #888",margin:e.spacing(4),"& td":{padding:e.spacing(1)}}})));function u({modifications:e}){const{classes:t}=m();return i.createElement("table",{className:t.table},i.createElement("tbody",null,e.map((([e,t])=>i.createElement("tr",{key:e},i.createElement("td",null,e),i.createElement("td",null,t),i.createElement("td",{style:{width:"1em",background:t}}))))))}const h=(0,o.observer)((function({model:e,handleClose:t}){const{colorBy:r,modificationTagMap:o}=e,m=[...o.entries()];return i.createElement(d.Dialog,{open:!0,onClose:t,title:"Color by modifications"},i.createElement(a.A,null,i.createElement(n.A,null,"You can choose to color the modifications in the BAM/CRAM MM/ML specification using this dialog. Choosing modifications colors the modified positions and can color multiple modification types. Choosing the methylation setting colors methylated and unmethylated CpG."),i.createElement(n.A,null,"Note: you can revisit this dialog to see the current mapping of colors to modification type for the modification coloring mode"),i.createElement("div",{style:{margin:20}},"modifications"===r?.type?i.createElement("div",null,m.length?i.createElement(i.Fragment,null,"Current modification-type-to-color mapping",i.createElement(u,{modifications:[...o.entries()]})):i.createElement(i.Fragment,null,i.createElement(n.A,null,"Note: color by modifications is already enabled. Loading current modifications..."),i.createElement(s.A,{size:15}))):null,"methylation"===r?.type?i.createElement(u,{modifications:[["methylated","red"],["unmethylated","blue"]]}):null),i.createElement(l.A,null,i.createElement(c.A,{variant:"contained",onClick:()=>{e.setColorScheme({type:"modifications"}),t()}},"Modifications"),i.createElement(c.A,{variant:"contained",onClick:()=>{e.setColorScheme({type:"methylation"}),t()}},"Methylation"),i.createElement(c.A,{variant:"contained",color:"secondary",onClick:()=>{t()}},"Cancel"))))}))},59705:(e,t,r)=>{r.d(t,{A:()=>A});var i=r(7552),o=r(93878),a=r(70799),n=r(64761),s=r(51148),l=r(84893),c=r(4785),d=r(15622),m=r(58520),u=r(72489),h=r(69500);const p=n.i7`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,f=n.i7`
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
`,y="string"!=typeof p?n.AH`
        animation: ${p} 1.4s linear infinite;
      `:null,g="string"!=typeof f?n.AH`
        animation: ${f} 1.4s ease-in-out infinite;
      `:null,v=(0,s.Ay)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`color${(0,d.A)(r.color)}`]]}})((0,l.A)((({theme:e})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("transform")}},{props:{variant:"indeterminate"},style:y||{animation:`${p} 1.4s linear infinite`}},...Object.entries(e.palette).filter((0,m.A)()).map((([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}})))]})))),b=(0,s.Ay)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),k=(0,s.Ay)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t[`circle${(0,d.A)(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})((0,l.A)((({theme:e})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink,style:g||{animation:`${f} 1.4s ease-in-out infinite`}}]})))),A=i.forwardRef((function(e,t){const r=(0,c.b)({props:e,name:"MuiCircularProgress"}),{className:i,color:n="primary",disableShrink:s=!1,size:l=40,style:m,thickness:p=3.6,value:f=0,variant:y="indeterminate",...g}=r,A={...r,color:n,disableShrink:s,size:l,thickness:p,value:f,variant:y},C=(e=>{const{classes:t,variant:r,color:i,disableShrink:o}=e,n={root:["root",r,`color${(0,d.A)(i)}`],svg:["svg"],circle:["circle",`circle${(0,d.A)(r)}`,o&&"circleDisableShrink"]};return(0,a.A)(n,u.b,t)})(A),E={},x={},S={};if("determinate"===y){const e=2*Math.PI*((44-p)/2);E.strokeDasharray=e.toFixed(3),S["aria-valuenow"]=Math.round(f),E.strokeDashoffset=`${((100-f)/100*e).toFixed(3)}px`,x.transform="rotate(-90deg)"}return(0,h.jsx)(v,{className:(0,o.A)(C.root,i),style:{width:l,height:l,...x,...m},ownerState:A,ref:t,role:"progressbar",...S,...g,children:(0,h.jsx)(b,{className:C.svg,ownerState:A,viewBox:"22 22 44 44",children:(0,h.jsx)(k,{className:C.circle,style:E,ownerState:A,cx:44,cy:44,r:(44-p)/2,fill:"none",strokeWidth:p})})})}))},72489:(e,t,r)=>{r.d(t,{A:()=>n,b:()=>a});var i=r(33761),o=r(85693);function a(e){return(0,o.Ay)("MuiCircularProgress",e)}const n=(0,i.A)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"])}}]);
//# sourceMappingURL=1696.2af51b42.chunk.js.map