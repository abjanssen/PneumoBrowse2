"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[3553],{83553:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var o=r(7552),a=r(68446),i=r(29499),n=r(36715),s=r(59705),l=r(58507),c=r(5401),d=r(48735);const m=(0,r(75785).n9)()((e=>({table:{border:"1px solid #888",margin:e.spacing(4),"& td":{padding:e.spacing(1)}}})));function h({modifications:e}){const{classes:t}=m();return o.createElement("table",{className:t.table},o.createElement("tbody",null,e.map((([e,t])=>o.createElement("tr",{key:e},o.createElement("td",null,e),o.createElement("td",null,t),o.createElement("td",{style:{width:"1em",background:t}}))))))}const u=(0,a.observer)((function({model:e,handleClose:t}){const{colorBy:r,modificationTagMap:a}=e,m=[...a.entries()];return o.createElement(d.Dialog,{open:!0,onClose:t,title:"Color by modifications"},o.createElement(i.A,null,o.createElement(n.A,null,"You can choose to color the modifications in the BAM/CRAM MM/ML specification using this dialog. Choosing modifications colors the modified positions and can color multiple modification types. Choosing the methylation setting colors methylated and unmethylated CpG."),o.createElement(n.A,null,"Note: you can revisit this dialog to see the current mapping of colors to modification type for the modification coloring mode"),o.createElement("div",{style:{margin:20}},"modifications"===r?.type?o.createElement("div",null,m.length?o.createElement(o.Fragment,null,"Current modification-type-to-color mapping",o.createElement(h,{modifications:[...a.entries()]})):o.createElement(o.Fragment,null,o.createElement(n.A,null,"Note: color by modifications is already enabled. Loading current modifications..."),o.createElement(s.A,{size:15}))):null,"methylation"===r?.type?o.createElement(h,{modifications:[["methylated","red"],["unmethylated","blue"]]}):null),o.createElement(l.A,null,o.createElement(c.A,{variant:"contained",onClick:()=>{e.setColorScheme({type:"modifications"}),t()}},"Modifications"),o.createElement(c.A,{variant:"contained",onClick:()=>{e.setColorScheme({type:"methylation"}),t()}},"Methylation"),o.createElement(c.A,{variant:"contained",color:"secondary",onClick:()=>t()},"Cancel"))))}))},59705:(e,t,r)=>{r.d(t,{A:()=>w});var o=r(83673),a=r(6614),i=r(7552),n=r(93878),s=r(60827),l=r(64761),c=r(15622),d=r(31049),m=r(51148),h=r(72489),u=r(69500);const f=["className","color","disableShrink","size","style","thickness","value","variant"];let p,y,g,v,k=e=>e;const b=(0,l.i7)(p||(p=k`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),A=(0,l.i7)(y||(y=k`
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
`)),C=(0,m.Ay)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`color${(0,c.A)(r.color)}`]]}})((({ownerState:e,theme:t})=>(0,a.A)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,l.AH)(g||(g=k`
      animation: ${0} 1.4s linear infinite;
    `),b))),E=(0,m.Ay)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),S=(0,m.Ay)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t[`circle${(0,c.A)(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})((({ownerState:e,theme:t})=>(0,a.A)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,l.AH)(v||(v=k`
      animation: ${0} 1.4s ease-in-out infinite;
    `),A))),w=i.forwardRef((function(e,t){const r=(0,d.A)({props:e,name:"MuiCircularProgress"}),{className:i,color:l="primary",disableShrink:m=!1,size:p=40,style:y,thickness:g=3.6,value:v=0,variant:k="indeterminate"}=r,b=(0,o.A)(r,f),A=(0,a.A)({},r,{color:l,disableShrink:m,size:p,thickness:g,value:v,variant:k}),w=(e=>{const{classes:t,variant:r,color:o,disableShrink:a}=e,i={root:["root",r,`color${(0,c.A)(o)}`],svg:["svg"],circle:["circle",`circle${(0,c.A)(r)}`,a&&"circleDisableShrink"]};return(0,s.A)(i,h.b,t)})(A),x={},M={},D={};if("determinate"===k){const e=2*Math.PI*((44-g)/2);x.strokeDasharray=e.toFixed(3),D["aria-valuenow"]=Math.round(v),x.strokeDashoffset=`${((100-v)/100*e).toFixed(3)}px`,M.transform="rotate(-90deg)"}return(0,u.jsx)(C,(0,a.A)({className:(0,n.A)(w.root,i),style:(0,a.A)({width:p,height:p},M,y),ownerState:A,ref:t,role:"progressbar"},D,b,{children:(0,u.jsx)(E,{className:w.svg,ownerState:A,viewBox:"22 22 44 44",children:(0,u.jsx)(S,{className:w.circle,style:x,ownerState:A,cx:44,cy:44,r:(44-g)/2,fill:"none",strokeWidth:g})})}))}))},72489:(e,t,r)=>{r.d(t,{A:()=>n,b:()=>i});var o=r(55549),a=r(9577);function i(e){return(0,a.Ay)("MuiCircularProgress",e)}const n=(0,o.A)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"])}}]);
//# sourceMappingURL=3553.8dd067a4.chunk.js.map