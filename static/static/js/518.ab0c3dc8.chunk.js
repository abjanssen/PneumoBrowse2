"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[518],{27943:(t,e,a)=>{a.d(e,{A:()=>v});var n=a(7552),i=a(93878),r=a(70799),o=a(86259),s=a(963),l=a(64761),h=a(51148),d=a(84893),p=a(4785),u=a(76819),c=a(69500);const m=l.i7`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,f=l.i7`
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
`,g="string"!=typeof m?l.AH`
        animation: ${m} 2s ease-in-out 0.5s infinite;
      `:null,b="string"!=typeof f?l.AH`
        &::after {
          animation: ${f} 2s linear 0.5s infinite;
        }
      `:null,w=(0,h.Ay)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],!1!==a.animation&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})((0,d.A)((({theme:t})=>{const e=(0,o.l_)(t.shape.borderRadius)||"px",a=(0,o.db)(t.shape.borderRadius);return{display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,s.X4)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${e}/${Math.round(a/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:({ownerState:t})=>t.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:t})=>t.hasChildren&&!t.width,style:{maxWidth:"fit-content"}},{props:({ownerState:t})=>t.hasChildren&&!t.height,style:{height:"auto"}},{props:{animation:"pulse"},style:g||{animation:`${m} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(\n                90deg,\n                transparent,\n                ${(t.vars||t).palette.action.hover},\n                transparent\n              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:b||{"&::after":{animation:`${f} 2s linear 0.5s infinite`}}}]}}))),v=n.forwardRef((function(t,e){const a=(0,p.b)({props:t,name:"MuiSkeleton"}),{animation:n="pulse",className:o,component:s="span",height:l,style:h,variant:d="text",width:m,...f}=a,g={...a,animation:n,component:s,variant:d,hasChildren:Boolean(f.children)},b=(t=>{const{classes:e,variant:a,animation:n,hasChildren:i,width:o,height:s}=t,l={root:["root",a,n,i&&"withChildren",i&&!o&&"fitContent",i&&!s&&"heightAuto"]};return(0,r.A)(l,u.E,e)})(g);return(0,c.jsx)(w,{as:s,ref:e,className:(0,i.A)(b.root,o),ownerState:g,...f,style:{width:m,height:l,...h}})}))},50518:(t,e,a)=>{a.r(e),a.d(e,{default:()=>n.A,getSkeletonUtilityClass:()=>i.E,skeletonClasses:()=>i.A});var n=a(27943),i=a(76819)},76819:(t,e,a)=>{a.d(e,{A:()=>o,E:()=>r});var n=a(33761),i=a(85693);function r(t){return(0,i.Ay)("MuiSkeleton",t)}const o=(0,n.A)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"])}}]);
//# sourceMappingURL=518.ab0c3dc8.chunk.js.map