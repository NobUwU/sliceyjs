if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,t,c)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+r.slice(1)};return Promise.all(t.map((r=>{switch(r){case"exports":return i;case"module":return n;default:return e(r)}}))).then((e=>{const r=c(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-15dd0bab"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"26ad6bf1def8d06b182cc4fb0dded968.ttf",revision:null},{url:"4a88d55fa0d3fdbed00b583b94bc004a.ttf",revision:null},{url:"82b079afb111983c04ef6b43668ec6dd.ttf",revision:null},{url:"9228fb8db13b8386c8f7f48d5b3069a4.ttf",revision:null},{url:"adc4a7f402049acac77de425f783cf86.ttf",revision:null},{url:"app.js",revision:"315b730e88070ab15e666215a1df4c37"},{url:"app.js.LICENSE.txt",revision:"f7e623707d9b37a3821ec4c3548a4309"},{url:"d03f265a9c222584a055ce28c899c5dc.ttf",revision:null},{url:"d109d6f81a8764425cf6f107033c3b52.ttf",revision:null},{url:"index.html",revision:"062ebe31adead1ca691d3d4ec5544c06"},{url:"logo.png",revision:"abacabdac1f40a45b21d9f20dc536bfb"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"}],{})}));
