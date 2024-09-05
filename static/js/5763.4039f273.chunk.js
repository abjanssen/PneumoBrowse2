"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[5763],{84421:(r,e,t)=>{t.d(e,{A:()=>P});var a=t(7552),o=t(93878),n=t(70799),i=t(72639),s=t(93876),l=t(64761),b=t(51148),p=t(60129),u=t(4785),d=t(15622),f=t(50077),c=t(69500);const m=l.i7`
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
`,v="string"!=typeof m?l.AH`
        animation: ${m} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `:null,y=l.i7`
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
`,g="string"!=typeof y?l.AH`
        animation: ${y} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `:null,h=l.i7`
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
`,A="string"!=typeof h?l.AH`
        animation: ${h} 3s infinite linear;
      `:null,w=(r,e)=>r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:"light"===r.palette.mode?(0,i.a)(r.palette[e].main,.62):(0,i.e$)(r.palette[e].main,.5),C=(0,b.Ay)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,e[`color${(0,d.A)(t.color)}`],e[t.variant]]}})((0,p.A)((({theme:r})=>({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},variants:[...Object.entries(r.palette).filter((([,r])=>r&&r.main)).map((([e])=>({props:{color:e},style:{backgroundColor:w(r,e)}}))),{props:({ownerState:r})=>"inherit"===r.color&&"buffer"!==r.variant,style:{"&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}}},{props:{variant:"buffer"},style:{backgroundColor:"transparent"}},{props:{variant:"query"},style:{transform:"rotate(180deg)"}}]})))),$=(0,b.Ay)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.dashed,e[`dashedColor${(0,d.A)(t.color)}`]]}})((0,p.A)((({theme:r})=>({position:"absolute",marginTop:0,height:"100%",width:"100%",backgroundSize:"10px 10px",backgroundPosition:"0 -23px",variants:[{props:{color:"inherit"},style:{opacity:.3,backgroundImage:"radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"}},...Object.entries(r.palette).filter((([,r])=>r&&r.main)).map((([e])=>{const t=w(r,e);return{props:{color:e},style:{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`}}}))]}))),A||{animation:`${h} 3s infinite linear`}),k=(0,b.Ay)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.bar,e[`barColor${(0,d.A)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar1Indeterminate,"determinate"===t.variant&&e.bar1Determinate,"buffer"===t.variant&&e.bar1Buffer]}})((0,p.A)((({theme:r})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[{props:{color:"inherit"},style:{backgroundColor:"currentColor"}},...Object.entries(r.palette).filter((([,r])=>r&&r.main)).map((([e])=>({props:{color:e},style:{backgroundColor:(r.vars||r).palette[e].main}}))),{props:{variant:"determinate"},style:{transition:"transform .4s linear"}},{props:{variant:"buffer"},style:{zIndex:1,transition:"transform .4s linear"}},{props:({ownerState:r})=>"indeterminate"===r.variant||"query"===r.variant,style:{width:"auto"}},{props:({ownerState:r})=>"indeterminate"===r.variant||"query"===r.variant,style:v||{animation:`${m} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]})))),S=(0,b.Ay)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.bar,e[`barColor${(0,d.A)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar2Indeterminate,"buffer"===t.variant&&e.bar2Buffer]}})((0,p.A)((({theme:r})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[...Object.entries(r.palette).filter((([,r])=>r&&r.main)).map((([e])=>({props:{color:e},style:{"--LinearProgressBar2-barColor":(r.vars||r).palette[e].main}}))),{props:({ownerState:r})=>"buffer"!==r.variant&&"inherit"!==r.color,style:{backgroundColor:"var(--LinearProgressBar2-barColor, currentColor)"}},{props:{color:"inherit"},style:{opacity:.3}},...Object.entries(r.palette).filter((([,r])=>r&&r.main)).map((([e])=>({props:{color:e,variant:"buffer"},style:{backgroundColor:w(r,e),transition:"transform .4s linear"}}))),{props:({ownerState:r})=>"indeterminate"===r.variant||"query"===r.variant,style:{width:"auto"}},{props:({ownerState:r})=>"indeterminate"===r.variant||"query"===r.variant,style:g||{animation:`${y} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]})))),P=a.forwardRef((function(r,e){const t=(0,u.b)({props:r,name:"MuiLinearProgress"}),{className:a,color:i="primary",value:l,valueBuffer:b,variant:p="indeterminate",...m}=t,v={...t,color:i,variant:p},y=(r=>{const{classes:e,variant:t,color:a}=r,o={root:["root",`color${(0,d.A)(a)}`,t],dashed:["dashed",`dashedColor${(0,d.A)(a)}`],bar1:["bar",`barColor${(0,d.A)(a)}`,("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","buffer"!==t&&`barColor${(0,d.A)(a)}`,"buffer"===t&&`color${(0,d.A)(a)}`,("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return(0,n.A)(o,f.l,e)})(v),g=(0,s.I)(),h={},A={bar1:{},bar2:{}};if(("determinate"===p||"buffer"===p)&&void 0!==l){h["aria-valuenow"]=Math.round(l),h["aria-valuemin"]=0,h["aria-valuemax"]=100;let r=l-100;g&&(r=-r),A.bar1.transform=`translateX(${r}%)`}if("buffer"===p&&void 0!==b){let r=(b||0)-100;g&&(r=-r),A.bar2.transform=`translateX(${r}%)`}return(0,c.jsxs)(C,{className:(0,o.A)(y.root,a),ownerState:v,role:"progressbar",...h,ref:e,...m,children:["buffer"===p?(0,c.jsx)($,{className:y.dashed,ownerState:v}):null,(0,c.jsx)(k,{className:y.bar1,ownerState:v,style:A.bar1}),"determinate"===p?null:(0,c.jsx)(S,{className:y.bar2,ownerState:v,style:A.bar2})]})}))},45763:(r,e,t)=>{t.r(e),t.d(e,{default:()=>a.A,getLinearProgressUtilityClass:()=>o.l,linearProgressClasses:()=>o.A});var a=t(84421),o=t(50077)},50077:(r,e,t)=>{t.d(e,{A:()=>i,l:()=>n});var a=t(33761),o=t(85693);function n(r){return(0,o.Ay)("MuiLinearProgress",r)}const i=(0,a.A)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"])}}]);
//# sourceMappingURL=5763.4039f273.chunk.js.map