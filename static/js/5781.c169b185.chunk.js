"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[5781],{55781:(e,n,t)=>{t.r(n),t.d(n,{default:()=>y});var r=t(7552),a=t(48171),o=t(98360),l=t(29629),s=t(5401),c=t(61723),i=t(36715),m=t(75785),u=t(68446),d=t(31409),p=t.n(d),f=t(99546),g=t(68584);var b=t(49823),w=t(27820);const E=(0,r.lazy)((()=>t.e(3408).then(t.bind(t,13408)))),C=(0,r.lazy)((()=>t.e(3550).then(t.bind(t,21169)))),h=(0,m.n9)()({formControl:{margin:0,marginLeft:4}}),y=(0,u.observer)((function({model:e,feature:n}){const{sequenceFeatureDetails:t}=e,{intronBp:m,upDownBp:u}=t,{classes:d}=h(),y=(0,r.useRef)(null),[v,A]=(0,r.useState)(!1),q=n.subfeatures?.some((e=>"CDS"===e.type)),N=n.subfeatures?.some((e=>"exon"===e.type)),S=N||q,{sequence:_,error:k}=function(e,n,t,a){const[o,l]=(0,r.useState)(),[s,c]=(0,r.useState)();return(0,r.useEffect)((()=>{if(!e)return;const{assemblyManager:r,rpcManager:o}=(0,f.getSession)(e),[s]=e.view?.assemblyNames||[];async function i(e,n,t){const a=await r.waitForAssembly(s);if(!a)throw new Error("assembly not found");const l="getSequence",c=await o.call(l,"CoreGetFeatures",{adapterConfig:(0,g.getConf)(a,["sequence","adapter"]),sessionId:l,regions:[{start:e,end:n,refName:a.getCanonicalRefName(t),assemblyName:s}]}),[i]=c;return i?.get("seq")||""}(async()=>{try{c(void 0);const{start:e,end:r,refName:o}=n;if(!a&&r-e>5e5)l({error:'Genomic sequence larger than 500000bp, use "force load" button to display'});else{const n=e-t,a=r+t,s=await i(e,r,o),c=await i(Math.max(0,n),e,o),m=await i(r,a,o);l({seq:s,upstream:c,downstream:m})}}catch(e){console.error(e),c(e)}})()}),[n,e,t,a]),{sequence:o,error:s}}(e,n,u,v),[G,M]=(0,r.useState)(q?"cds":N?"cdna":"genomic");return r.createElement(r.Fragment,null,r.createElement("div",null,r.createElement(a.A,{className:d.formControl},r.createElement(o.A,{size:"small",value:G,onChange:e=>M(e.target.value)},Object.entries({...q?{cds:"CDS"}:{},...q?{protein:"Protein"}:{},...S?{cdna:"cDNA"}:{},...S?{gene:"Genomic w/ full introns"}:{},...S?{gene_updownstream:`Genomic w/ full introns +/- ${u}bp up+down stream`}:{},...S?{gene_collapsed_intron:`Genomic w/ ${m}bp intron`}:{},...S?{gene_updownstream_collapsed_intron:`Genomic w/ ${m}bp intron +/- ${u}bp up+down stream `}:{},...S?{}:{genomic:"Genomic"},...S?{}:{genomic_sequence_updownstream:`Genomic +/- ${u}bp up+down stream`}}).map((([e,n])=>r.createElement(l.A,{key:e,value:e},n))))),r.createElement(s.A,{className:d.formControl,variant:"contained",onClick:()=>{const e=y.current;e&&p()(e.textContent||"",{format:"text/plain"})}},"Copy plaintext"),r.createElement(s.A,{className:d.formControl,variant:"contained",onClick:()=>{const e=y.current;e&&p()(e.innerHTML,{format:"text/html"})}},"Copy HTML"),r.createElement(c.A,{className:d.formControl,onClick:()=>(0,f.getSession)(e).queueDialog((e=>[C,{model:t,handleClose:e}]))},r.createElement(w.A,null))),r.createElement("div",null,"gene"===n.type?r.createElement(i.A,null,"Note: inspect subfeature sequences for protein/CDS computations"):null,k?r.createElement(b.ErrorMessage,{error:k}):_?_?"error"in _?r.createElement(r.Fragment,null,r.createElement(i.A,{color:"error"},_.error),r.createElement(s.A,{variant:"contained",color:"inherit",onClick:()=>A(!0)},"Force load")):r.createElement(r.Suspense,{fallback:r.createElement(b.LoadingEllipses,null)},r.createElement(E,{ref:y,feature:n,mode:G,sequence:_,model:t})):r.createElement(i.A,null,"No sequence found"):r.createElement(b.LoadingEllipses,null)))}))},27820:(e,n,t)=>{var r=t(92120);n.A=void 0;var a=r(t(33380)),o=t(69500);n.A=(0,a.default)((0,o.jsx)("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"}),"Settings")}}]);
//# sourceMappingURL=5781.c169b185.chunk.js.map