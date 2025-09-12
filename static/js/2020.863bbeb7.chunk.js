"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[2020],{32020:(r,e,t)=>{t.r(e),t.d(e,{default:()=>a.A,getLinearProgressUtilityClass:()=>o.l,linearProgressClasses:()=>o.A});var a=t(82604),o=t(90470)},82604:(r,e,t)=>{t.d(e,{A:()=>P});var a=t(7552),o=t(93878),n=t(75100),i=t(949),s=t(64761),l=t(80317),b=t(21928),p=t(20535),u=t(50864),c=t(74325),d=t(90470),f=t(69500);const m=s.i7`
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
`,v="string"!=typeof m?s.AH`
        animation: ${m} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `:null,g=s.i7`
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
`,y="string"!=typeof g?s.AH`
        animation: ${g} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
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
`,A="string"!=typeof h?s.AH`
        animation: ${h} 3s infinite linear;
      `:null,C=(r,e)=>r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:"light"===r.palette.mode?r.lighten(r.palette[e].main,.62):r.darken(r.palette[e].main,.5),w=(0,l.Ay)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,e[`color${(0,c.A)(t.color)}`],e[t.variant]]}})((0,b.A)(({theme:r})=>({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},variants:[...Object.entries(r.palette).filter((0,p.A)()).map(([e])=>({props:{color:e},style:{backgroundColor:C(r,e)}})),{props:({ownerState:r})=>"inherit"===r.color&&"buffer"!==r.variant,style:{"&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}}},{props:{variant:"buffer"},style:{backgroundColor:"transparent"}},{props:{variant:"query"},style:{transform:"rotate(180deg)"}}]}))),k=(0,l.Ay)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.dashed,e[`dashedColor${(0,c.A)(t.color)}`]]}})((0,b.A)(({theme:r})=>({position:"absolute",marginTop:0,height:"100%",width:"100%",backgroundSize:"10px 10px",backgroundPosition:"0 -23px",variants:[{props:{color:"inherit"},style:{opacity:.3,backgroundImage:"radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"}},...Object.entries(r.palette).filter((0,p.A)()).map(([e])=>{const t=C(r,e);return{props:{color:e},style:{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`}}})]})),A||{animation:`${h} 3s infinite linear`}),$=(0,l.Ay)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.bar,e.bar1,e[`barColor${(0,c.A)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar1Indeterminate,"determinate"===t.variant&&e.bar1Determinate,"buffer"===t.variant&&e.bar1Buffer]}})((0,b.A)(({theme:r})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[{props:{color:"inherit"},style:{backgroundColor:"currentColor"}},...Object.entries(r.palette).filter((0,p.A)()).map(([e])=>({props:{color:e},style:{backgroundColor:(r.vars||r).palette[e].main}})),{props:{variant:"determinate"},style:{transition:"transform .4s linear"}},{props:{variant:"buffer"},style:{zIndex:1,transition:"transform .4s linear"}},{props:({ownerState:r})=>"indeterminate"===r.variant||"query"===r.variant,style:{width:"auto"}},{props:({ownerState:r})=>"indeterminate"===r.variant||"query"===r.variant,style:v||{animation:`${m} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}))),S=(0,l.Ay)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.bar,e.bar2,e[`barColor${(0,c.A)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar2Indeterminate,"buffer"===t.variant&&e.bar2Buffer]}})((0,b.A)(({theme:r})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[...Object.entries(r.palette).filter((0,p.A)()).map(([e])=>({props:{color:e},style:{"--LinearProgressBar2-barColor":(r.vars||r).palette[e].main}})),{props:({ownerState:r})=>"buffer"!==r.variant&&"inherit"!==r.color,style:{backgroundColor:"var(--LinearProgressBar2-barColor, currentColor)"}},{props:({ownerState:r})=>"buffer"!==r.variant&&"inherit"===r.color,style:{backgroundColor:"currentColor"}},{props:{color:"inherit"},style:{opacity:.3}},...Object.entries(r.palette).filter((0,p.A)()).map(([e])=>({props:{color:e,variant:"buffer"},style:{backgroundColor:C(r,e),transition:"transform .4s linear"}})),{props:({ownerState:r})=>"indeterminate"===r.variant||"query"===r.variant,style:{width:"auto"}},{props:({ownerState:r})=>"indeterminate"===r.variant||"query"===r.variant,style:y||{animation:`${g} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}))),P=a.forwardRef(function(r,e){const t=(0,u.b)({props:r,name:"MuiLinearProgress"}),{className:a,color:s="primary",value:l,valueBuffer:b,variant:p="indeterminate",...m}=t,v={...t,color:s,variant:p},g=(r=>{const{classes:e,variant:t,color:a}=r,o={root:["root",`color${(0,c.A)(a)}`,t],dashed:["dashed",`dashedColor${(0,c.A)(a)}`],bar1:["bar","bar1",`barColor${(0,c.A)(a)}`,("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","bar2","buffer"!==t&&`barColor${(0,c.A)(a)}`,"buffer"===t&&`color${(0,c.A)(a)}`,("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return(0,n.A)(o,d.l,e)})(v),y=(0,i.I)(),h={},A={bar1:{},bar2:{}};if(("determinate"===p||"buffer"===p)&&void 0!==l){h["aria-valuenow"]=Math.round(l),h["aria-valuemin"]=0,h["aria-valuemax"]=100;let r=l-100;y&&(r=-r),A.bar1.transform=`translateX(${r}%)`}if("buffer"===p&&void 0!==b){let r=(b||0)-100;y&&(r=-r),A.bar2.transform=`translateX(${r}%)`}return(0,f.jsxs)(w,{className:(0,o.A)(g.root,a),ownerState:v,role:"progressbar",...h,ref:e,...m,children:["buffer"===p?(0,f.jsx)(k,{className:g.dashed,ownerState:v}):null,(0,f.jsx)($,{className:g.bar1,ownerState:v,style:A.bar1}),"determinate"===p?null:(0,f.jsx)(S,{className:g.bar2,ownerState:v,style:A.bar2})]})})},90470:(r,e,t)=>{t.d(e,{A:()=>i,l:()=>n});var a=t(51062),o=t(2958);function n(r){return(0,o.Ay)("MuiLinearProgress",r)}const i=(0,a.A)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","bar1","bar2","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"])}}]);
//# sourceMappingURL=2020.863bbeb7.chunk.js.map