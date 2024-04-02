"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[518],{27943:(t,e,a)=>{a.d(e,{A:()=>S});var i=a(83673),n=a(6614),r=a(7552),o=a(93878),s=a(64761),h=a(60827),l=a(86259),d=a(18283),u=a(51148),c=a(31049),m=a(76819),p=a(69500);const g=["animation","className","component","height","style","variant","width"];let b,w,f,v,A=t=>t;const k=(0,s.i7)(b||(b=A`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),C=(0,s.i7)(w||(w=A`
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
`)),y=(0,u.Ay)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],!1!==a.animation&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})((({theme:t,ownerState:e})=>{const a=(0,l.l_)(t.shape.borderRadius)||"px",i=(0,l.db)(t.shape.borderRadius);return(0,n.A)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,d.X4)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${a}/${Math.round(i/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===e.variant&&{borderRadius:"50%"},"rounded"===e.variant&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})}),(({ownerState:t})=>"pulse"===t.animation&&(0,s.AH)(f||(f=A`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),k)),(({ownerState:t,theme:e})=>"wave"===t.animation&&(0,s.AH)(v||(v=A`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),C,(e.vars||e).palette.action.hover))),S=r.forwardRef((function(t,e){const a=(0,c.A)({props:t,name:"MuiSkeleton"}),{animation:r="pulse",className:s,component:l="span",height:d,style:u,variant:b="text",width:w}=a,f=(0,i.A)(a,g),v=(0,n.A)({},a,{animation:r,component:l,variant:b,hasChildren:Boolean(f.children)}),A=(t=>{const{classes:e,variant:a,animation:i,hasChildren:n,width:r,height:o}=t,s={root:["root",a,i,n&&"withChildren",n&&!r&&"fitContent",n&&!o&&"heightAuto"]};return(0,h.A)(s,m.E,e)})(v);return(0,p.jsx)(y,(0,n.A)({as:l,ref:e,className:(0,o.A)(A.root,s),ownerState:v},f,{style:(0,n.A)({width:w,height:d},u)}))}))},50518:(t,e,a)=>{a.r(e),a.d(e,{default:()=>i.A,getSkeletonUtilityClass:()=>n.E,skeletonClasses:()=>n.A});var i=a(27943),n=a(76819)},76819:(t,e,a)=>{a.d(e,{A:()=>o,E:()=>r});var i=a(55549),n=a(9577);function r(t){return(0,n.Ay)("MuiSkeleton",t)}const o=(0,i.A)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"])}}]);
//# sourceMappingURL=518.33fb2f35.chunk.js.map