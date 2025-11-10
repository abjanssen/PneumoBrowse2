"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[1545],{61545:(r,e,t)=>{t.r(e),t.d(e,{default:()=>m});var a=t(7552),o=t(67112),n=t(99546),i=t(37347),s=t(76218),l=t(61282),c=t(82604),d=t(30698),u=t(69092),p=t(42489),b=t(68446),f=t(69500);const m=(0,b.observer)(function({handleClose:r,model:e}){const[t,b]=(0,a.useState)(0),[m,g]=(0,a.useState)("Ready to start diagonalization"),[v,y]=(0,a.useState)(),[h,w]=(0,a.useState)(!1),[A,C]=(0,a.useState)();return(0,f.jsxs)(o.Dialog,{open:!0,title:"Diagonalize Dotplot",onClose:()=>{h||r()},maxWidth:"lg",children:[(0,f.jsxs)(s.A,{style:{minWidth:400},children:[m?(0,f.jsx)(l.A,{children:m}):null,v?(0,f.jsx)(o.ErrorMessage,{error:v}):null,h?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(c.A,{variant:"determinate",value:t,style:{marginTop:16},color:v?"error":"primary"}),(0,f.jsxs)(l.A,{variant:"caption",color:"textSecondary",style:{marginTop:8,display:"block"},children:[Math.round(t),"% complete"]})]}):null]}),(0,f.jsxs)(d.A,{children:[h?null:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(u.A,{onClick:r,color:"secondary",variant:"contained",children:"Cancel"}),(0,f.jsx)(u.A,{onClick:()=>{(async()=>{const t=(0,n.getSession)(e),a=(0,i.y5)();C(a);try{w(!0),await async function({model:r,session:e,stopToken:t,setProgress:a,setMessage:o}){a(0),o("Preparing diagonalization...");const n=r.tracks[0];if(!n)throw new Error("No tracks found");const i=n.displays[0];if(!i)throw new Error("No display found");const s=await e.rpcManager.call(r.id,"DiagonalizeDotplot",{sessionId:`diagonalize-${Date.now()}`,view:{hview:r.hview,vview:r.vview},adapterConfig:i.adapterConfig,stopToken:t,statusCallback:r=>{o(r),r.includes("Initializing")?a(5):r.includes("Getting renderer")?a(10):r.includes("Fetching features")?a(20):r.includes("Extracting")?a(30):r.includes("Running diagonalization")?a(40):r.includes("Grouping")?a(50):r.includes("Determining")?a(65):r.includes("Sorting")?a(80):r.includes("Building")?a(90):r.includes("complete")&&a(100)}});if(o("Applying new layout..."),a(95),s.newRegions.length>0)return(0,p.transaction)(()=>{r.vview.setDisplayedRegions(s.newRegions)}),a(100),o(`Diagonalization complete! Reordered ${s.stats.regionsReordered} regions, reversed ${s.stats.regionsReversed}`),s;throw new Error("No regions to reorder")}({model:e,session:t,stopToken:a,setProgress:b,setMessage:g}),setTimeout(()=>{r()},2e3)}catch(r){console.error(r),y(r)}finally{w(!1)}})()},color:"primary",variant:"contained",children:"Start"})]}),h?(0,f.jsx)(u.A,{onClick:()=>{A&&((0,i.CF)(A),C(void 0)),r()},color:"secondary",variant:"contained",children:"Cancel"}):null]})]})})},82604:(r,e,t)=>{t.d(e,{A:()=>j});var a=t(7552),o=t(93878),n=t(75100),i=t(949),s=t(64761),l=t(80317),c=t(21928),d=t(20535),u=t(50864),p=t(74325),b=t(90470),f=t(69500);const m=s.i7`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`,g="string"!=typeof m?s.AH`
        animation: ${m} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `:null,v=s.i7`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`,y="string"!=typeof v?s.AH`
        animation: ${v} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `:null,h=s.i7`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`,w="string"!=typeof h?s.AH`
        animation: ${h} 3s infinite linear;
      `:null,A=(r,e)=>r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:"light"===r.palette.mode?r.lighten(r.palette[e].main,.62):r.darken(r.palette[e].main,.5),C=(0,l.Ay)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,e[`color${(0,p.A)(t.color)}`],e[t.variant]]}})((0,c.A)(({theme:r})=>({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},variants:[...Object.entries(r.palette).filter((0,d.A)()).map(([e])=>({props:{color:e},style:{backgroundColor:A(r,e)}})),{props:({ownerState:r})=>"inherit"===r.color&&"buffer"!==r.variant,style:{"&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}}},{props:{variant:"buffer"},style:{backgroundColor:"transparent"}},{props:{variant:"query"},style:{transform:"rotate(180deg)"}}]}))),k=(0,l.Ay)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.dashed,e[`dashedColor${(0,p.A)(t.color)}`]]}})((0,c.A)(({theme:r})=>({position:"absolute",marginTop:0,height:"100%",width:"100%",backgroundSize:"10px 10px",backgroundPosition:"0 -23px",variants:[{props:{color:"inherit"},style:{opacity:.3,backgroundImage:"radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"}},...Object.entries(r.palette).filter((0,d.A)()).map(([e])=>{const t=A(r,e);return{props:{color:e},style:{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`}}})]})),w||{animation:`${h} 3s infinite linear`}),x=(0,l.Ay)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.bar,e.bar1,e[`barColor${(0,p.A)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar1Indeterminate,"determinate"===t.variant&&e.bar1Determinate,"buffer"===t.variant&&e.bar1Buffer]}})((0,c.A)(({theme:r})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[{props:{color:"inherit"},style:{backgroundColor:"currentColor"}},...Object.entries(r.palette).filter((0,d.A)()).map(([e])=>({props:{color:e},style:{backgroundColor:(r.vars||r).palette[e].main}})),{props:{variant:"determinate"},style:{transition:"transform .4s linear"}},{props:{variant:"buffer"},style:{zIndex:1,transition:"transform .4s linear"}},{props:({ownerState:r})=>"indeterminate"===r.variant||"query"===r.variant,style:{width:"auto"}},{props:({ownerState:r})=>"indeterminate"===r.variant||"query"===r.variant,style:g||{animation:`${m} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}))),S=(0,l.Ay)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.bar,e.bar2,e[`barColor${(0,p.A)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar2Indeterminate,"buffer"===t.variant&&e.bar2Buffer]}})((0,c.A)(({theme:r})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[...Object.entries(r.palette).filter((0,d.A)()).map(([e])=>({props:{color:e},style:{"--LinearProgressBar2-barColor":(r.vars||r).palette[e].main}})),{props:({ownerState:r})=>"buffer"!==r.variant&&"inherit"!==r.color,style:{backgroundColor:"var(--LinearProgressBar2-barColor, currentColor)"}},{props:({ownerState:r})=>"buffer"!==r.variant&&"inherit"===r.color,style:{backgroundColor:"currentColor"}},{props:{color:"inherit"},style:{opacity:.3}},...Object.entries(r.palette).filter((0,d.A)()).map(([e])=>({props:{color:e,variant:"buffer"},style:{backgroundColor:A(r,e),transition:"transform .4s linear"}})),{props:({ownerState:r})=>"indeterminate"===r.variant||"query"===r.variant,style:{width:"auto"}},{props:({ownerState:r})=>"indeterminate"===r.variant||"query"===r.variant,style:y||{animation:`${v} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}))),j=a.forwardRef(function(r,e){const t=(0,u.b)({props:r,name:"MuiLinearProgress"}),{className:a,color:s="primary",value:l,valueBuffer:c,variant:d="indeterminate",...m}=t,g={...t,color:s,variant:d},v=(r=>{const{classes:e,variant:t,color:a}=r,o={root:["root",`color${(0,p.A)(a)}`,t],dashed:["dashed",`dashedColor${(0,p.A)(a)}`],bar1:["bar","bar1",`barColor${(0,p.A)(a)}`,("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","bar2","buffer"!==t&&`barColor${(0,p.A)(a)}`,"buffer"===t&&`color${(0,p.A)(a)}`,("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return(0,n.A)(o,b.l,e)})(g),y=(0,i.I)(),h={},w={bar1:{},bar2:{}};if(("determinate"===d||"buffer"===d)&&void 0!==l){h["aria-valuenow"]=Math.round(l),h["aria-valuemin"]=0,h["aria-valuemax"]=100;let r=l-100;y&&(r=-r),w.bar1.transform=`translateX(${r}%)`}if("buffer"===d&&void 0!==c){let r=(c||0)-100;y&&(r=-r),w.bar2.transform=`translateX(${r}%)`}return(0,f.jsxs)(C,{className:(0,o.A)(v.root,a),ownerState:g,role:"progressbar",...h,ref:e,...m,children:["buffer"===d?(0,f.jsx)(k,{className:v.dashed,ownerState:g}):null,(0,f.jsx)(x,{className:v.bar1,ownerState:g,style:w.bar1}),"determinate"===d?null:(0,f.jsx)(S,{className:v.bar2,ownerState:g,style:w.bar2})]})})},90470:(r,e,t)=>{t.d(e,{A:()=>i,l:()=>n});var a=t(51062),o=t(2958);function n(r){return(0,o.Ay)("MuiLinearProgress",r)}const i=(0,a.A)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","bar1","bar2","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"])}}]);
//# sourceMappingURL=1545.1bf6ff38.chunk.js.map