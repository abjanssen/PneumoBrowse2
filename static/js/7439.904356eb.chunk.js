"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[7439],{67439:(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var n=s(68584),r=s(46377),a=s(66885),i=s(99546),o=s(99834),c=s(78054),d=s(72147);class u extends r.BaseFeatureDataAdapter{static capabilities=["getFeatures","getRefNames"];getData(e){return this.data||(this.data=this.setup(e).catch((e=>{throw this.data=void 0,e}))),this.data}async setup(e){const t=this.pluginManager,s=await(0,i.fetchAndMaybeUnzip)((0,o.openLocation)((0,n.readConfObject)(this.config,"blastTableLocation"),t),e),r=(0,n.readConfObject)(this.config,"columns");return(0,c.PX)(s,function(e){const t=e.trim().split(" "),s=t.indexOf("qseqid");if(-1===s)throw new Error('Missing required column "qseqid"');const n=t.indexOf("sseqid");if(-1===n)throw new Error('Missing required column "sseqid"');const r=t.indexOf("qstart");if(-1===r)throw new Error('Missing required column "qstart"');const a=t.indexOf("qend");if(-1===a)throw new Error('Missing required column "qend"');const i=t.indexOf("sstart");if(-1===i)throw new Error('Missing required column "sstart"');const o=t.indexOf("send");if(-1===o)throw new Error('Missing required column "send"');const c=new Map(t.map(((e,t)=>[e,t])).filter((e=>!["qseqid","sseqid","qstart","qend","sstart","send"].includes(e[0]))));return e=>{if(e.startsWith("#"))return;const t=e.split("\t"),d=t[s],u=t[n],l=t[r],f=t[a],m=t[i],h=t[o];if(!(d&&u&&l&&f&&m&&h))return console.warn("Invalid BLAST line"),void console.warn(e);const p={qseqid:d,sseqid:u,qstart:Number.parseInt(l),qend:Number.parseInt(f),sstart:Number.parseInt(m),send:Number.parseInt(h)};for(const[e,s]of c.entries()){const n=t[s];n&&(p[e]=n)}return p}}(r))}async hasDataForRefName(){return!0}getAssemblyNames(){const e=this.getConf("assemblyNames");return 0===e.length?[this.getConf("queryAssembly"),this.getConf("targetAssembly")]:e}async getRefNames(e={}){const t=e.regions?.[0].assemblyName,s=await this.getData(e),n=this.getAssemblyNames().indexOf(t);if(-1!==n){const e=new Set;for(const t of s)e.add(0===n?t.qseqid:t.sseqid);return[...e]}return console.warn("Unable to do ref renaming on adapter"),[]}getFeatures(e,t={}){return(0,a.ObservableCreate)((async s=>{const n=await this.getData(t),[r,a]=this.getAssemblyNames(),{refName:o,assemblyName:c,start:u,end:l}=e;if(c!==a&&c!==r)return console.warn(`${c} not found in this adapter`),void s.complete();for(let e=0;e<n.length;e++){const t=n[e];let f,m,h,p,q,g,b,w;const{qseqid:y,sseqid:N,qstart:x,qend:A,sstart:I,send:M,...O}=t;c===r?(f=x,m=A,h=y,p=r,q=I,g=M,b=N,w=a):(f=I,m=M,h=N,p=a,q=x,g=A,b=y,w=r);let D=1,C=1;f>m&&([f,m]=[m,f],D=-1),q>g&&([q,g]=[g,q],C=-1),h===o&&(0,i.doesIntersect2)(u,l,f,m)&&s.next(new d.A({uniqueId:e+c,assemblyName:p,start:f,end:m,type:"match",refName:h,strand:D*C,syntenyId:e,...O,mate:{start:q,end:g,refName:b,assemblyName:w}}))}s.complete()}))}freeResources(){}}},72147:(e,t,s)=>{s.d(t,{A:()=>i});var n=s(99546),r=s(42781);const{getMismatches:a}=r.aF;class i extends n.SimpleFeature{get(e){return"mismatches"===e?a(this.get("CIGAR")):super.get(e)}}},78054:(e,t,s)=>{s.d(t,{PX:()=>o,TA:()=>a,fY:()=>r,gJ:()=>u,qm:()=>d,xI:()=>c,yU:()=>i});var n=s(99546);function r(e){return new Map(e.split(/\n|\r\n|\r/).filter((e=>!!e||e.startsWith("#"))).map((e=>{const[t,s,n,r,a,i]=e.split("\t");return[r,{refName:t,start:+s,end:+n,score:+a,name:r,strand:"-"===i?-1:1}]})))}async function a(e,t){const s=await(0,n.fetchAndMaybeUnzip)(e,t);return new TextDecoder("utf8").decode(s)}function i(e,t){return e.map(((e,s)=>[e,t[s]]))}function o(e,t){let s=0;const n=[],r=new TextDecoder("utf8");for(;s<e.length;){const a=e.indexOf("\n",s);if(-1===a)break;const i=e.subarray(s,a),o=r.decode(i).trim();if(o){const e=t(o);e&&n.push(e)}s=a+1}return n}function c(e){const[t,,s,n,r,a,,i,o,c,d,u,...l]=e.split("\t");return{tname:a,tstart:+i,tend:+o,qname:t,qstart:+s,qend:+n,strand:"-"===r?-1:1,extra:{numMatches:+c,blockLen:+d,mappingQual:+u,...Object.fromEntries(l.map((e=>{const t=e.indexOf(":");return[e.slice(0,t),e.slice(t+3)]})))}}}function d(e){const t=[];for(let s=e.length-2;s>=0;s-=2){t.push(e[s]);const n=e[s+1];"D"===n?t.push("I"):"I"===n?t.push("D"):t.push(n)}return t}function u(e){return e.replaceAll("D","K").replaceAll("I","D").replaceAll("K","I")}}}]);
//# sourceMappingURL=7439.904356eb.chunk.js.map