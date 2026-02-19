"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[4412],{86642(t,e,a){a.d(e,{A:()=>w});var n=a(30128),i=a(21227),r=a(74533),o=a(58417),s=a(81285),l=a(80638),h=a(39104),d=a(45639),p=a(14461),u=a(44460);const c=s.i7`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,m=s.i7`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,f="string"!=typeof c?s.AH`
        animation: ${c} 2s ease-in-out 0.5s infinite;
      `:null,g="string"!=typeof m?s.AH`
        &::after {
          animation: ${m} 2s linear 0.5s infinite;
        }
      `:null,b=(0,l.Ay)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],!1!==a.animation&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})((0,h.A)(({theme:t})=>{const e=(0,o.l_)(t.shape.borderRadius)||"px",a=(0,o.db)(t.shape.borderRadius);return{display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:t.alpha(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${e}/${Math.round(a/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:({ownerState:t})=>t.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:t})=>t.hasChildren&&!t.width,style:{maxWidth:"fit-content"}},{props:({ownerState:t})=>t.hasChildren&&!t.height,style:{height:"auto"}},{props:{animation:"pulse"},style:f||{animation:`${c} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(\n                90deg,\n                transparent,\n                ${(t.vars||t).palette.action.hover},\n                transparent\n              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:g||{"&::after":{animation:`${m} 2s linear 0.5s infinite`}}}]}})),w=n.forwardRef(function(t,e){const a=(0,d.b)({props:t,name:"MuiSkeleton"}),{animation:n="pulse",className:o,component:s="span",height:l,style:h,variant:c="text",width:m,...f}=a,g={...a,animation:n,component:s,variant:c,hasChildren:Boolean(f.children)},w=(t=>{const{classes:e,variant:a,animation:n,hasChildren:i,width:o,height:s}=t,l={root:["root",a,n,i&&"withChildren",i&&!o&&"fitContent",i&&!s&&"heightAuto"]};return(0,r.A)(l,p.E,e)})(g);return(0,u.jsx)(b,{as:s,ref:e,className:(0,i.A)(w.root,o),ownerState:g,...f,style:{width:m,height:l,...h}})})},34412(t,e,a){a.r(e),a.d(e,{default:()=>n.A,getSkeletonUtilityClass:()=>i.E,skeletonClasses:()=>i.A});var n=a(86642),i=a(14461)},14461(t,e,a){a.d(e,{A:()=>o,E:()=>r});var n=a(26743),i=a(2395);function r(t){return(0,i.Ay)("MuiSkeleton",t)}const o=(0,n.A)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"])}}]);
//# sourceMappingURL=4412.57dfbf70.chunk.js.map