import{d as y,u as f,p as E,M as C,C as F,X as e,b as i,G as s,e as a,f as D,g as b,ad as o,R as n,o as A}from"./chunks/framework.CwgWRZ7s.js";import{c as v,W}from"./chunks/WatermarkOptionsForm.nPVlcMKU.js";import{u as w}from"./chunks/app.CoFGTZkC.js";import"./chunks/commonjsHelpers.Cpj98o6Y.js";import"./chunks/index.YqSNFKwW.js";import"./chunks/index.BodUvnj1.js";import"./chunks/upload.DOUoWZc9.js";import"./chunks/theme.ktp4Mh0v.js";const O=s("h1",{id:"自定义配置",tabindex:"-1"},[a("自定义配置 "),s("a",{class:"header-anchor",href:"#自定义配置","aria-label":'Permalink to "自定义配置"'},"​")],-1),x={class:"language-js vp-adaptive-theme"},B=s("button",{title:"Copy Code",class:"copy"},null,-1),j=s("span",{class:"lang"},"js",-1),N={class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},S=o('<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Watermark } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;watermark-js-plus&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // import watermark plugin</span></span>',1),V=s("span",{class:"line"},null,-1),z={class:"line"},P=o('<span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> watermark</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Watermark</span>',5),M={style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},R=s("span",{class:"line"},null,-1),G=o('<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">watermark.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// add watermark</span></span>',1),J=s("span",{class:"line"},null,-1),T=o('<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">watermark.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">destroy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// remove watermark</span></span>',1),$=JSON.parse('{"title":"自定义配置","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"zh/guide/custom/configs.md","filePath":"zh/guide/custom/configs.md"}'),X={name:"zh/guide/custom/configs.md"},ss=y({...X,setup(q){const l=w();f();const h={width:300,height:300,rotate:45};let t=E(v(h));C(()=>{});const c=()=>{l.createWatermark(t)},d=()=>{l.removeWatermark()},m=r=>{Object.keys(t).forEach(p=>{delete t[p]}),t=Object.assign(t,r),l.changeWatermark(r)};return(r,p)=>{const _=n("ClientOnly"),k=n("el-button"),u=n("el-space"),g=n("el-affix");return A(),F("div",null,[O,e(_,null,{default:i(()=>[e(W,{options:h,onChange:m})]),_:1}),s("div",x,[B,j,s("pre",N,[s("code",null,[S,a(`
`),V,a(`
`),s("span",z,[P,s("span",M,"("+D(b(t))+")",1)]),a(`
`),R,a(`
`),G,a(`
`),J,a(`
`),T])])]),e(g,{position:"bottom",offset:0},{default:i(()=>[e(u,{class:"block-operation"},{default:i(()=>[e(k,{round:"",type:"primary",onClick:c},{default:i(()=>[a("添加水印")]),_:1}),e(k,{round:"",type:"danger",onClick:d},{default:i(()=>[a("删除水印")]),_:1})]),_:1})]),_:1})])}}});export{$ as __pageData,ss as default};
