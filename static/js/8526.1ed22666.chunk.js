"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[8526],{8526:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(7552),o=n(68666),l=n(68446),a=n(26842);const i=(0,l.observer)((e=>{const{model:t}=e;return r.createElement("div",null,r.createElement(o.GQ,e),r.createElement(a.A,{model:t}))}))},26842:(e,t,n)=>{n.d(t,{A:()=>u});var r=n(7552),o=n(99546),l=n(68446),a=n(90461);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}const c=e=>{const{color:t="rgb(255,255,255,0.8)"}=e;return r.createElement("rect",i({},e,(0,o.getFillProps)(t)))},s=(0,l.observer)((function({model:e,rowHeight:t,labelWidth:n,exportSVG:o}){const{needsCustomLegend:l,needsScalebar:a,needsFullHeightScalebar:i,rowHeightTooSmallForScalebar:s,renderColorBoxes:m,sources:g}=e,h=Math.min(t,12),u=t>11,d=m?15:0,p=n+d+5,b=(o?10:0)||(a&&!s?50:0);return g?r.createElement(r.Fragment,null,i?r.createElement(c,{y:0,x:b,width:p,height:(g.length+.25)*t}):null,g.map(((e,n)=>{const o=Math.min(20,t);return r.createElement(r.Fragment,{key:`${e.name}-${n}`},i?null:r.createElement(c,{y:n*t+1,x:b,width:p,height:o}),e.color?r.createElement(c,{y:n*t+1,x:b,width:d,height:l?t:o,color:e.color}):null,u?r.createElement("text",{y:n*t+13,x:b+d+2,fontSize:h},e.name):null)}))):null})),m=(0,l.observer)((({model:e})=>{const{ticks:t,scaleType:n}=e,{width:l}=(0,o.getContainingView)(e),a=`[${t?.values[0]}-${t?.values[1]}]`+("log"===n?" (log scale)":""),i=(0,o.measureText)(a,14),s=l-i-25;return r.createElement(r.Fragment,null,r.createElement(c,{y:0,x:s,width:i+6,height:16}),r.createElement("text",{y:13,x:s},a))}));var g=n(58474);const h=(0,l.observer)((function({children:e,model:t,exportSVG:n}){const{height:l}=t;return n?e:r.createElement("svg",{style:{position:"absolute",top:0,left:0,pointerEvents:"none",height:l,width:(0,o.getContainingView)(t).width}},e)})),u=(0,l.observer)((function(e){const{model:t,orientation:n,exportSVG:l}=e,{stats:i,needsCustomLegend:c,needsFullHeightScalebar:u,rowHeightTooSmallForScalebar:d,rowHeight:p,sources:b,ticks:f}=t,w=Math.min(p,12),E=p>11,{width:x}=(0,o.getContainingView)(t);if(!i||!b)return null;const v=Math.max(...b.map((e=>(0,o.measureText)(e.name,w))).map((e=>E?e:20))||[0]);return r.createElement(h,e,u?r.createElement(r.Fragment,null,r.createElement("g",{transform:`translate(${l?0:(0,g.A3)(t)},0)`},r.createElement(a.A,{model:t,orientation:n})),r.createElement("g",{transform:`translate(${x-v-100},0)`},r.createElement(s,{exportSVG:l,model:t,rowHeight:12,labelWidth:v}))):r.createElement(r.Fragment,null,r.createElement(s,{exportSVG:l,model:t,rowHeight:t.rowHeight,labelWidth:v}),d||c?r.createElement(m,e):b.map(((e,o)=>r.createElement("g",{transform:`translate(0 ${p*o})`,key:`${JSON.stringify(f)}-${o}`},r.createElement(a.A,{model:t,orientation:n}))))))}))},58474:(e,t,n)=>{n.d(t,{A3:()=>c,BO:()=>l,oJ:()=>a});var r=n(99546),o=n(68584);function l(e,t,n=1){const r=t.map((t=>e.findIndex((e=>e.name===t)))).sort(((e,t)=>e-t));let o=0;for(const t of r){const r=Math.max(o,t-n);r>=o&&e.splice(r,0,e.splice(t,1)[0]),o+=1}return e}function a(e,t,n=1){const r=t.map((t=>e.findIndex((e=>e.name===t)))).sort(((e,t)=>t-e));let o=e.length-1;for(const t of r){const r=Math.min(o,t+n);r<=o&&e.splice(r,0,e.splice(t,1)[0]),o-=1}return e}const i=12.8;function c(e){const{prefersOffset:t}=e,{trackLabels:n}=(0,r.getContainingView)(e),l=(0,r.getContainingTrack)(e),a=(0,o.getConf)(l,"name");return"overlapping"!==n||t?10:(0,r.measureText)(a,i)+100}}}]);
//# sourceMappingURL=8526.1ed22666.chunk.js.map