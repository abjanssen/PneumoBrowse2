"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[9823],{67761(e,r,t){t.d(r,{A:()=>i,l:()=>n});var a=t(97818),o=t(11042);function n(e){return(0,o.Ay)("MuiLinearProgress",e)}const i=(0,a.A)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","bar1","bar2","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"])},74881(e,r,t){t.d(r,{A:()=>x});var a=t(42918),o=t(77710),n=t(61648),i=t(95066),s=t(51719),l=t(18496),f=t(55030),c=t(77180),d=t(27997),u=t(42458),p=t(67761),b=t(32118);const m=s.i7`
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
      `:null,y=s.i7`
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
`,h="string"!=typeof y?s.AH`
        animation: ${y} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `:null,v=s.i7`
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
`,w="string"!=typeof v?s.AH`
        animation: ${v} 3s infinite linear;
      `:null,A=(e,r)=>e.vars?e.vars.palette.LinearProgress[`${r}Bg`]:"light"===e.palette.mode?e.lighten(e.palette[r].main,.62):e.darken(e.palette[r].main,.5),C=(0,l.Ay)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[`color${(0,u.A)(t.color)}`],r[t.variant]]}})((0,f.A)(({theme:e})=>({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},variants:[...Object.entries(e.palette).filter((0,c.A)()).map(([r])=>({props:{color:r},style:{backgroundColor:A(e,r)}})),{props:({ownerState:e})=>"inherit"===e.color&&"buffer"!==e.variant,style:{"&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}}},{props:{variant:"buffer"},style:{backgroundColor:"transparent"}},{props:{variant:"query"},style:{transform:"rotate(180deg)"}}]}))),S=(0,l.Ay)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.dashed,r[`dashedColor${(0,u.A)(t.color)}`]]}})((0,f.A)(({theme:e})=>({position:"absolute",marginTop:0,height:"100%",width:"100%",backgroundSize:"10px 10px",backgroundPosition:"0 -23px",variants:[{props:{color:"inherit"},style:{opacity:.3,backgroundImage:"radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"}},...Object.entries(e.palette).filter((0,c.A)()).map(([r])=>{const t=A(e,r);return{props:{color:r},style:{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`}}})]})),w||{animation:`${v} 3s infinite linear`}),R=(0,l.Ay)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.bar,r.bar1,r[`barColor${(0,u.A)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&r.bar1Indeterminate,"determinate"===t.variant&&r.bar1Determinate,"buffer"===t.variant&&r.bar1Buffer]}})((0,f.A)(({theme:e})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[{props:{color:"inherit"},style:{backgroundColor:"currentColor"}},...Object.entries(e.palette).filter((0,c.A)()).map(([r])=>({props:{color:r},style:{backgroundColor:(e.vars||e).palette[r].main}})),{props:{variant:"determinate"},style:{transition:"transform .4s linear"}},{props:{variant:"buffer"},style:{zIndex:1,transition:"transform .4s linear"}},{props:({ownerState:e})=>"indeterminate"===e.variant||"query"===e.variant,style:{width:"auto"}},{props:({ownerState:e})=>"indeterminate"===e.variant||"query"===e.variant,style:g||{animation:`${m} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}))),N=(0,l.Ay)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.bar,r.bar2,r[`barColor${(0,u.A)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&r.bar2Indeterminate,"buffer"===t.variant&&r.bar2Buffer]}})((0,f.A)(({theme:e})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[...Object.entries(e.palette).filter((0,c.A)()).map(([r])=>({props:{color:r},style:{"--LinearProgressBar2-barColor":(e.vars||e).palette[r].main}})),{props:({ownerState:e})=>"buffer"!==e.variant&&"inherit"!==e.color,style:{backgroundColor:"var(--LinearProgressBar2-barColor, currentColor)"}},{props:({ownerState:e})=>"buffer"!==e.variant&&"inherit"===e.color,style:{backgroundColor:"currentColor"}},{props:{color:"inherit"},style:{opacity:.3}},...Object.entries(e.palette).filter((0,c.A)()).map(([r])=>({props:{color:r,variant:"buffer"},style:{backgroundColor:A(e,r),transition:"transform .4s linear"}})),{props:({ownerState:e})=>"indeterminate"===e.variant||"query"===e.variant,style:{width:"auto"}},{props:({ownerState:e})=>"indeterminate"===e.variant||"query"===e.variant,style:h||{animation:`${y} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}))),x=a.forwardRef(function(e,r){const t=(0,d.b)({props:e,name:"MuiLinearProgress"}),{className:a,color:s="primary",value:l,valueBuffer:f,variant:c="indeterminate",...m}=t,g={...t,color:s,variant:c},y=(e=>{const{classes:r,variant:t,color:a}=e,o={root:["root",`color${(0,u.A)(a)}`,t],dashed:["dashed",`dashedColor${(0,u.A)(a)}`],bar1:["bar","bar1",`barColor${(0,u.A)(a)}`,("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","bar2","buffer"!==t&&`barColor${(0,u.A)(a)}`,"buffer"===t&&`color${(0,u.A)(a)}`,("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return(0,n.A)(o,p.l,r)})(g),h=(0,i.I)(),v={},w={bar1:{},bar2:{}};if(("determinate"===c||"buffer"===c)&&void 0!==l){v["aria-valuenow"]=Math.round(l),v["aria-valuemin"]=0,v["aria-valuemax"]=100;let e=l-100;h&&(e=-e),w.bar1.transform=`translateX(${e}%)`}if("buffer"===c&&void 0!==f){let e=(f||0)-100;h&&(e=-e),w.bar2.transform=`translateX(${e}%)`}return(0,b.jsxs)(C,{className:(0,o.A)(y.root,a),ownerState:g,role:"progressbar",...v,ref:r,...m,children:["buffer"===c?(0,b.jsx)(S,{className:y.dashed,ownerState:g}):null,(0,b.jsx)(R,{className:y.bar1,ownerState:g,style:w.bar1}),"determinate"===c?null:(0,b.jsx)(N,{className:y.bar2,ownerState:g,style:w.bar2})]})})},79823(e,r,t){t.r(r),t.d(r,{default:()=>b});var a=t(42918),o=t(85787),n=t(77251),i=t(99367),s=t(41031),l=t(74881),f=t(8039),c=t(70885),d=t(38567),u=t(64074),p=t(32118);const b=(0,u.observer)(function({handleClose:e,model:r}){const[t,u]=(0,a.useState)(0),[b,m]=(0,a.useState)("Initializing..."),[g,y]=(0,a.useState)();return(0,a.useEffect)(()=>{(async()=>{const t=(0,n.getSession)(r);try{if(2!==r.views.length)return y("Diagonalization requires exactly 2 views"),u(100),void t.notify("Diagonalization requires exactly 2 views","warning");const a=r.views[1];u(5),m("Collecting alignment data...");const o=[];for(const e of r.levels)for(const r of e.tracks)for(const e of r.displays){const{featPositions:r}=e;for(const{f:e}of r){const r=e.get("mate");o.push({queryRefName:e.get("refName"),refRefName:r.refName,queryStart:e.get("start"),queryEnd:e.get("end"),refStart:r.start,refEnd:r.end,strand:e.get("strand")||1})}}if(0===o.length)return y("No alignments found"),u(100),void t.notify("No alignments found to diagonalize","warning");const n=await async function(e,r,t){const a=async(e,r)=>{t&&await t(e,r)};await a(20,`Grouping ${e.length} alignments...`);const o=new Map;for(const r of e){const e=r.refRefName;o.has(e)||o.set(e,{refAlignments:new Map,strandWeightedSum:0});const t=o.get(e),a=Math.abs(r.queryEnd-r.queryStart);t.refAlignments.has(r.queryRefName)||t.refAlignments.set(r.queryRefName,{bases:0,positions:[]});const n=t.refAlignments.get(r.queryRefName);n.bases+=a,n.positions.push((r.queryStart+r.queryEnd)/2);const i=r.strand>=0?1:-1;t.strandWeightedSum+=i*a}await a(50,"Determining optimal ordering and orientation...");const n=[];for(const[e,r]of o){let t="",a=0,o=[];for(const[e,n]of r.refAlignments)n.bases>a&&(a=n.bases,t=e,o=n.positions);const i=o.reduce((e,r)=>e+r,0)/o.length,s=r.strandWeightedSum<0;n.push({refName:e,bestRefName:t,bestRefPos:i,shouldReverse:s})}await a(70,`Sorting ${n.length} query regions...`),n.sort((e,r)=>e.bestRefName!==r.bestRefName?e.bestRefName.localeCompare(r.bestRefName):e.bestRefPos-r.bestRefPos),await a(85,"Building new region layout...");const i=[];let s=0;for(const{refName:e,shouldReverse:t}of n){const a=r.find(r=>r.refName===e);a?(i.push({...a,reversed:t}),t!==a.reversed&&s++):console.warn(`Could not find region for refName: ${e}`)}return await a(100,"Diagonalization complete!"),{newRegions:i,stats:{totalAlignments:e.length,regionsProcessed:n.length,regionsReordered:i.length,regionsReversed:s}}}(o,a.displayedRegions,async(e,r)=>{u(e),m(r)});n.newRegions.length>0?(u(95),m("Applying new layout..."),(0,d.transaction)(()=>{a.setDisplayedRegions(n.newRegions)}),u(100),m("Diagonalization complete"),setTimeout(()=>{e()},1500)):(y("No regions to reorder"),u(100),t.notify("No query regions found to reorder","warning"))}catch(e){console.error("Diagonalization error:",e),y(`Error: ${e}`),u(100),t.notify(`Diagonalization failed: ${e}`,"error")}})()},[r,e]),(0,p.jsxs)(o.A,{open:!0,title:"Diagonalizing",onClose:e,children:[(0,p.jsxs)(i.A,{style:{minWidth:400},children:[(0,p.jsx)(s.A,{variant:"body1",gutterBottom:!0,color:g?"error":"inherit",children:g||b}),(0,p.jsx)(l.A,{variant:"determinate",value:t,style:{marginTop:16},color:g?"error":"primary"}),(0,p.jsxs)(s.A,{variant:"caption",color:"textSecondary",style:{marginTop:8,display:"block"},children:[Math.round(t),"% complete"]})]}),(0,p.jsx)(f.A,{children:(0,p.jsx)(c.A,{onClick:e,color:"primary",disabled:t<100,children:t<100?"Processing...":"Done"})})]})})}}]);
//# sourceMappingURL=9823.c95588cc.chunk.js.map