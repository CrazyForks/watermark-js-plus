import{V as l,w,p as A}from"./chunks/theme.sFmEHhYY.js";import"./chunks/index.E5uUK3Fu.js";import{B as D}from"./chunks/blind.Cws0_8IT.js";import{d as O,u as $,l as v,N as z,h as J,j as n,e as k,a0 as s,aR as p,b as a,aq as t,o as y,g as m,a as x,Z as W,F as K}from"./chunks/framework.CKse2UfU.js";import{u as U}from"./chunks/app.XHHh_qQh.js";const H={class:"text-blind-watermark"},Z={class:"multiline-text-blind-watermark"},G={class:"image-blind-watermark"},Q={class:"rich-text-blind-watermark"},es=JSON.parse('{"title":"Blind Watermark","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"guide/blind-watermark.md","filePath":"guide/blind-watermark.md"}'),X={name:"guide/blind-watermark.md"},ls=O({...X,setup(Y){const e=U(),{isDark:u}=$(),h=K(),r=v(""),d=v("");z(()=>{});const _=()=>{e.createWatermark({content:"hello my watermark",fontColor:u.value?"#fff":"#000",width:200,height:200,onSuccess:()=>{h.appContext.config.globalProperties.$message({appendTo:"#app",message:"The text blind watermark added successfully!",type:"success"})}},"blind")},T=()=>{e.removeWatermark()},S=()=>{e.createWatermark({contentType:"multi-line-text",content:"hello my multiline blind watermark",fontColor:u.value?"#fff":"#000",fontSize:30,width:200,height:200,onSuccess:()=>{h.appContext.config.globalProperties.$message({appendTo:"#app",message:"The multiline text blind watermark added successfully!",type:"success"})}},"blind")},j=()=>{e.removeWatermark()},P=()=>{e.createWatermark({contentType:"image",image:"https://cdn.jsdelivr.net/gh/zhensherlock/oss@main/uPic/github-mkWBiK.png",imageWidth:200,width:300,height:300,onSuccess:()=>{h.appContext.config.globalProperties.$message({appendTo:"#app",message:"The image blind watermark added successfully!",type:"success"})}},"blind")},R=()=>{e.removeWatermark()},I=()=>{e.createWatermark({contentType:"rich-text",content:'<div><span style="color: #f00">good</span> watermark</div>',width:300,height:300,onSuccess:()=>{h.appContext.config.globalProperties.$message({appendTo:"#app",message:"The rich text blind watermark added successfully!",type:"success"})}},"blind")},M=()=>{e.removeWatermark()},N=o=>{D.decode({compositeTimes:4,compositeOperation:"overlay",url:o.url,onSuccess:i=>{r.value=i}})},V=o=>{D.decode({fillColor:"#fff",compositeTimes:3,compositeOperation:"overlay",url:o.url,onSuccess:i=>{d.value=i}})};return(o,i)=>{const q=t("el-backtop"),E=t("el-space"),c=t("el-affix"),g=t("el-icon"),F=t("el-link"),f=t("el-tooltip"),B=t("el-upload"),b=t("el-image"),C=t("el-col"),L=t("el-row");return y(),J("div",null,[i[6]||(i[6]=n("h1",{id:"blind-watermark",tabindex:"-1"},[k("Blind Watermark "),n("a",{class:"header-anchor",href:"#blind-watermark","aria-label":'Permalink to "Blind Watermark"'},"​")],-1)),s(q),i[7]||(i[7]=n("h2",{id:"text-blind-watermark",tabindex:"-1"},[k("Text Blind Watermark "),n("a",{class:"header-anchor",href:"#text-blind-watermark","aria-label":'Permalink to "Text Blind Watermark"'},"​")],-1)),n("div",H,[i[0]||(i[0]=p(`<div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { BlindWatermark } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;watermark-js-plus&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // import watermark plugin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> watermark</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BlindWatermark</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  content: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;hello my watermark&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  width: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  height: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  onSuccess</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // success callback</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">watermark.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// add watermark</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">watermark.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">destroy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// remove watermark</span></span></code></pre></div><p>👉 Add parameters for dark background：<code>fontColor: &#39;#fff&#39;</code></p>`,2)),s(c,{target:".text-blind-watermark",position:"bottom",offset:0},{default:a(()=>[s(E,{class:"block-operation"},{default:a(()=>[s(l,{text:"Add Text Blind Watermark",onClick:_}),s(l,{text:"Remove Text Blind Watermark",onClick:T})]),_:1})]),_:1})]),i[8]||(i[8]=n("h2",{id:"multiline-text-blind-watermark",tabindex:"-1"},[k("Multiline Text Blind Watermark "),n("a",{class:"header-anchor",href:"#multiline-text-blind-watermark","aria-label":'Permalink to "Multiline Text Blind Watermark"'},"​")],-1)),n("div",Z,[i[1]||(i[1]=p(`<div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { BlindWatermark } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;watermark-js-plus&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // import watermark plugin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> watermark</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BlindWatermark</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  contentType: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;multi-line-text&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  content: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;hello my multiline blind watermark&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  fontSize: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  width: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  height: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  onSuccess</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // success callback</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">watermark.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// add watermark</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">watermark.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">destroy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// remove watermark</span></span></code></pre></div><p>👉 Add parameters for dark background：<code>fontColor: &#39;#fff&#39;</code></p>`,2)),s(c,{target:".multiline-text-blind-watermark",position:"bottom",offset:0},{default:a(()=>[s(E,{class:"block-operation"},{default:a(()=>[s(l,{text:"Add Multiline Text Blind Watermark",onClick:S}),s(l,{text:"Remove Multiline Text Blind Watermark",onClick:j})]),_:1})]),_:1})]),i[9]||(i[9]=n("h2",{id:"image-blind-watermark",tabindex:"-1"},[k("Image Blind Watermark "),n("a",{class:"header-anchor",href:"#image-blind-watermark","aria-label":'Permalink to "Image Blind Watermark"'},"​")],-1)),n("div",G,[i[2]||(i[2]=p(`<div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { BlindWatermark } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;watermark-js-plus&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // import watermark plugin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> watermark</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BlindWatermark</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  contentType: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;image&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  content: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;http://upic-service.test.upcdn.net/uPic/github-JxMIKf.png&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  width: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  height: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  imageWidth: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// image width</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // imageHeight: 20, // image height</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  onSuccess</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // success callback</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">watermark.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// add watermark</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">watermark.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">destroy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// remove watermark</span></span></code></pre></div>`,1)),s(c,{target:".image-blind-watermark",position:"bottom",offset:0},{default:a(()=>[s(E,{class:"block-operation"},{default:a(()=>[s(l,{text:"Add Image Blind Watermark",onClick:P}),s(l,{text:"Remove Image Blind Watermark",onClick:R})]),_:1})]),_:1})]),i[10]||(i[10]=n("h2",{id:"rich-text-blind-watermark",tabindex:"-1"},[k("Rich Text Blind Watermark "),n("a",{class:"header-anchor",href:"#rich-text-blind-watermark","aria-label":'Permalink to "Rich Text Blind Watermark"'},"​")],-1)),n("div",Q,[i[3]||(i[3]=p(`<div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { BlindWatermark } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;watermark-js-plus&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // import watermark plugin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> watermark</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BlindWatermark</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  contentType: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;rich-text&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  content: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;div&gt;&lt;span style=&quot;color: #f00&quot;&gt;good&lt;/span&gt; watermark&lt;/div&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  width: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  height: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  onSuccess</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // success callback</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">watermark.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// add watermark</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">watermark.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">destroy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// remove watermark</span></span></code></pre></div>`,1)),s(c,{target:".rich-text-blind-watermark",position:"bottom",offset:0},{default:a(()=>[s(E,{class:"block-operation"},{default:a(()=>[s(l,{text:"Add RichText Blind Watermark",onClick:I}),s(l,{text:"Remove Rich Text Blind Watermark",onClick:M})]),_:1})]),_:1})]),i[11]||(i[11]=p(`<h2 id="decode-blind-watermark" tabindex="-1">Decode Blind Watermark <a class="header-anchor" href="#decode-blind-watermark" aria-label="Permalink to &quot;Decode Blind Watermark&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { BlindWatermark } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;watermark-js-plus&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // import watermark plugin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">BlindWatermark.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">decode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  compositeOperation: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;overlay&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  compositeTimes: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  url: uploadFile.url, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// image url</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  onSuccess</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">imageBase64</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // success callback</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div>`,2)),s(L,{gutter:20},{default:a(()=>[s(C,{span:12},{default:a(()=>[s(f,{content:"Use a light background image",placement:"right"},{default:a(()=>[s(F,{underline:!1},{default:a(()=>[i[4]||(i[4]=k(" Light Background")),s(g,{class:"el-icon--right"},{default:a(()=>[s(m(w))]),_:1})]),_:1})]),_:1}),n("div",null,[s(B,{"list-type":"picture-card",accept:"image/*","auto-upload":!1,"show-file-list":!1,"on-change":N},{default:a(()=>[s(g,null,{default:a(()=>[s(m(A))]),_:1})]),_:1}),r.value?(y(),x(b,{key:0,style:{width:"400px",height:"400px","margin-top":"20px"},src:r.value,"preview-src-list":[r.value],fit:"cover"},null,8,["src","preview-src-list"])):W("",!0)])]),_:1}),s(C,{span:12},{default:a(()=>[s(f,{content:"Use with dark background image",placement:"right"},{default:a(()=>[s(F,{underline:!1},{default:a(()=>[i[5]||(i[5]=k(" Dark Background")),s(g,{class:"el-icon--right"},{default:a(()=>[s(m(w))]),_:1})]),_:1})]),_:1}),n("div",null,[s(B,{"list-type":"picture-card",accept:"image/*","auto-upload":!1,"show-file-list":!1,"on-change":V},{default:a(()=>[s(g,null,{default:a(()=>[s(m(A))]),_:1})]),_:1}),d.value?(y(),x(b,{key:0,style:{width:"400px",height:"400px","margin-top":"20px"},src:d.value,"preview-src-list":[d.value],fit:"cover"},null,8,["src","preview-src-list"])):W("",!0)])]),_:1})]),_:1})])}}});export{es as __pageData,ls as default};