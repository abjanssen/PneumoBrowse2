"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[5763],{84421:(r,e,a)=>{a.d(e,{A:()=>M});var t=a(83673),o=a(6614),n=a(7552),i=a(93878),s=a(60827),l=a(64761),u=a(22991),b=a(23456),d=a(15622),c=a(51148),f=a(31049),m=a(50077),v=a(69500);const p=["className","color","value","valueBuffer","variant"];let h,g,A,y,w,C,k=r=>r;const S=(0,l.i7)(h||(h=k`
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
`)),$=(0,l.i7)(g||(g=k`
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
`)),x=(0,l.i7)(A||(A=k`
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
`)),P=(r,e)=>"inherit"===e?"currentColor":r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:"light"===r.palette.mode?(0,u.a)(r.palette[e].main,.62):(0,u.e$)(r.palette[e].main,.5),B=(0,c.Ay)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.root,e[`color${(0,d.A)(a.color)}`],e[a.variant]]}})((({ownerState:r,theme:e})=>(0,o.A)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:P(e,r.color)},"inherit"===r.color&&"buffer"!==r.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===r.variant&&{backgroundColor:"transparent"},"query"===r.variant&&{transform:"rotate(180deg)"}))),I=(0,c.Ay)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.dashed,e[`dashedColor${(0,d.A)(a.color)}`]]}})((({ownerState:r,theme:e})=>{const a=P(e,r.color);return(0,o.A)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===r.color&&{opacity:.3},{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,l.AH)(y||(y=k`
    animation: ${0} 3s infinite linear;
  `),x)),L=(0,c.Ay)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e[`barColor${(0,d.A)(a.color)}`],("indeterminate"===a.variant||"query"===a.variant)&&e.bar1Indeterminate,"determinate"===a.variant&&e.bar1Determinate,"buffer"===a.variant&&e.bar1Buffer]}})((({ownerState:r,theme:e})=>(0,o.A)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===r.color?"currentColor":(e.vars||e).palette[r.color].main},"determinate"===r.variant&&{transition:"transform .4s linear"},"buffer"===r.variant&&{zIndex:1,transition:"transform .4s linear"})),(({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,l.AH)(w||(w=k`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),S))),q=(0,c.Ay)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e[`barColor${(0,d.A)(a.color)}`],("indeterminate"===a.variant||"query"===a.variant)&&e.bar2Indeterminate,"buffer"===a.variant&&e.bar2Buffer]}})((({ownerState:r,theme:e})=>(0,o.A)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==r.variant&&{backgroundColor:"inherit"===r.color?"currentColor":(e.vars||e).palette[r.color].main},"inherit"===r.color&&{opacity:.3},"buffer"===r.variant&&{backgroundColor:P(e,r.color),transition:"transform .4s linear"})),(({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,l.AH)(C||(C=k`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),$))),M=n.forwardRef((function(r,e){const a=(0,f.A)({props:r,name:"MuiLinearProgress"}),{className:n,color:l="primary",value:u,valueBuffer:c,variant:h="indeterminate"}=a,g=(0,t.A)(a,p),A=(0,o.A)({},a,{color:l,variant:h}),y=(r=>{const{classes:e,variant:a,color:t}=r,o={root:["root",`color${(0,d.A)(t)}`,a],dashed:["dashed",`dashedColor${(0,d.A)(t)}`],bar1:["bar",`barColor${(0,d.A)(t)}`,("indeterminate"===a||"query"===a)&&"bar1Indeterminate","determinate"===a&&"bar1Determinate","buffer"===a&&"bar1Buffer"],bar2:["bar","buffer"!==a&&`barColor${(0,d.A)(t)}`,"buffer"===a&&`color${(0,d.A)(t)}`,("indeterminate"===a||"query"===a)&&"bar2Indeterminate","buffer"===a&&"bar2Buffer"]};return(0,s.A)(o,m.l,e)})(A),w=(0,b.I)(),C={},k={bar1:{},bar2:{}};if(("determinate"===h||"buffer"===h)&&void 0!==u){C["aria-valuenow"]=Math.round(u),C["aria-valuemin"]=0,C["aria-valuemax"]=100;let r=u-100;w&&(r=-r),k.bar1.transform=`translateX(${r}%)`}if("buffer"===h&&void 0!==c){let r=(c||0)-100;w&&(r=-r),k.bar2.transform=`translateX(${r}%)`}return(0,v.jsxs)(B,(0,o.A)({className:(0,i.A)(y.root,n),ownerState:A,role:"progressbar"},C,{ref:e},g,{children:["buffer"===h?(0,v.jsx)(I,{className:y.dashed,ownerState:A}):null,(0,v.jsx)(L,{className:y.bar1,ownerState:A,style:k.bar1}),"determinate"===h?null:(0,v.jsx)(q,{className:y.bar2,ownerState:A,style:k.bar2})]}))}))},45763:(r,e,a)=>{a.r(e),a.d(e,{default:()=>t.A,getLinearProgressUtilityClass:()=>o.l,linearProgressClasses:()=>o.A});var t=a(84421),o=a(50077)},50077:(r,e,a)=>{a.d(e,{A:()=>i,l:()=>n});var t=a(55549),o=a(9577);function n(r){return(0,o.Ay)("MuiLinearProgress",r)}const i=(0,t.A)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"])}}]);
//# sourceMappingURL=5763.cd6ab61c.chunk.js.map