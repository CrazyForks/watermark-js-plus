const j=s=>s.toDataURL("image/png",1),B=s=>typeof s=="function",g=s=>s===void 0,G=s=>typeof s=="string",W=(s,t={},a="http://www.w3.org/2000/svg")=>{const i=document.createElementNS(a,s);for(const e in t)i.setAttribute(e,t[e]);return i},V=(s,t,a)=>{const i=[];let e="",n="";for(let r=0,d=t.length;r<d;r++){if(n=t.charAt(r),n===`
`){i.push(e),e="";continue}e+=n,s.measureText(e).width>a&&(i.push(e.substring(0,e.length-1)),e="",r--)}return i.push(e),i},M=async(s,t)=>{var o;const a=W("svg",{xmlns:"http://www.w3.org/2000/svg"}),i=document.createElement("div");i.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),i.style.cssText=`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font: ${s.font};
  color: ${t.fontColor};
`,i.innerHTML=`<div class='rich-text-content'>${t.content}</div>`,document.body.appendChild(i),await D(i);const e=(o=i.querySelector(".rich-text-content"))==null?void 0:o.getBoundingClientRect(),n=e==null?void 0:e.width,r=e==null?void 0:e.height;document.body.removeChild(i);const d=t.richTextWidth||n||t.width,l=t.richTextHeight||r||t.height;a.setAttribute("width",d.toString()),a.setAttribute("height",l.toString());const h=W("foreignObject",{width:d.toString(),height:l.toString()});return h.appendChild(i),a.appendChild(h),{element:a,width:d,height:l}};async function D(s){const t=s.querySelectorAll("img");for(const a of Array.from(t)){const i=a.getAttribute("src");if(i)try{const n=await(await fetch(i)).blob(),r=await new Promise((d,l)=>{const h=new FileReader;h.onloadend=()=>d(h.result),h.onerror=l,h.readAsDataURL(n)});G(r)&&a.setAttribute("src",r)}catch(e){console.error(`Error converting ${i} to base64:`,e)}}}const X=s=>`data:image/svg+xml;charset=utf-8,${s.outerHTML.replace(/<(img|br|input|hr|embed)(.*?)>/g,"<$1$2/>").replace(/\n/g,"").replace(/\t/g,"").replace(/#/g,"%23")}`,c=(s,t)=>g(s)?t:s,$=(s,t=void 0,a=void 0)=>{const i=new Image;return i.setAttribute("crossOrigin","Anonymous"),!g(t)&&(i.width=t),!g(a)&&(i.height=a),i.src=s,new Promise(e=>{i.onload=()=>{e(i)}})},Y=(s,t,a)=>Array.from({length:s},()=>new Array(t).fill(a)),N={width:300,height:300,rotate:45,layout:"default",auxiliaryLine:!1,translatePlacement:"middle",contentType:"text",content:"hello watermark-js-plus",textType:"fill",imageWidth:0,imageHeight:0,lineHeight:30,zIndex:2147483647,backgroundPosition:"0 0",backgroundRepeat:"repeat",fontSize:"20px",fontFamily:"sans-serif",fontStyle:"",fontVariant:"",fontColor:"#000",fontWeight:"normal",filter:"none",letterSpacing:"0px",wordSpacing:"0px",globalAlpha:.5,mode:"default",mutationObserve:!0,monitorProtection:!1,movable:!1,parent:"body",onSuccess:()=>{},onBeforeDestroy:()=>{},onDestroyed:()=>{},onObserveError:()=>{}},z=(s,t,a)=>{const i=s.getContext("2d");if(i===null)throw new Error("get context error");i.font=`${t.fontStyle} ${t.fontVariant} ${t.fontWeight} ${t.fontSize} ${t.fontFamily}`,i.filter=t.filter,i.letterSpacing=t.letterSpacing,i.wordSpacing=t.wordSpacing,t!=null&&t.rotate&&(t.rotate=(360-t.rotate%360)*(Math.PI/180)),g(a.textRowMaxWidth)&&(t.textRowMaxWidth=t.width);const e={image:{rect:{width:t.imageWidth,height:t.imageHeight},position:{x:0,y:0}},textLine:{data:[],yOffsetValue:0},advancedStyleParams:{linear:{x0:0,x1:0},radial:{x0:0,y0:0,r0:0,x1:0,y1:0,r1:0},conic:{x:0,y:0,startAngle:0},pattern:{}}};switch(t.contentType){case"text":e.textLine.data=[t.content];break;case"multi-line-text":e.textLine.data=V(i,t.content,t.textRowMaxWidth);break}let n=t.width/2,r=t.height/2,d="middle",l="center";switch(!g(a==null?void 0:a.translateX)&&!g(a==null?void 0:a.translateY)?(n=a==null?void 0:a.translateX,r=a==null?void 0:a.translateY,d="top",l="left"):(e.advancedStyleParams.linear.x0=-t.width/2,e.advancedStyleParams.linear.x1=t.width/2,e.advancedStyleParams.radial.r0=0,e.advancedStyleParams.radial.r1=t.width/2),a.translatePlacement){case"top":n=t.width/2,r=0,d="top",e.advancedStyleParams.linear.x0=-t.width/2,e.advancedStyleParams.linear.x1=t.width/2,e.advancedStyleParams.radial.y0=e.textLine.data.length*t.lineHeight/2,e.advancedStyleParams.radial.y1=e.textLine.data.length*t.lineHeight/2,e.advancedStyleParams.conic.y=e.textLine.data.length*t.lineHeight/2;break;case"top-start":n=0,r=0,d="top",l="start",e.advancedStyleParams.linear.x0=0,e.advancedStyleParams.linear.x1=t.width,e.advancedStyleParams.radial.x0=t.width/2,e.advancedStyleParams.radial.y0=e.textLine.data.length*t.lineHeight/2,e.advancedStyleParams.radial.x1=t.width/2,e.advancedStyleParams.radial.y1=e.textLine.data.length*t.lineHeight/2,e.advancedStyleParams.conic.x=t.width/2,e.advancedStyleParams.conic.y=e.textLine.data.length*t.lineHeight/2;break;case"top-end":n=t.width,r=0,d="top",l="end",e.advancedStyleParams.linear.x0=0,e.advancedStyleParams.linear.x1=-t.width,e.advancedStyleParams.radial.x0=-t.width/2,e.advancedStyleParams.radial.y0=e.textLine.data.length*t.lineHeight/2,e.advancedStyleParams.radial.x1=-t.width/2,e.advancedStyleParams.radial.y1=e.textLine.data.length*t.lineHeight/2,e.advancedStyleParams.conic.x=-t.width/2,e.advancedStyleParams.conic.y=e.textLine.data.length*t.lineHeight/2;break;case"bottom":n=t.width/2,r=t.height,d="bottom",e.advancedStyleParams.linear.x0=-t.width/2,e.advancedStyleParams.linear.x1=t.width/2,e.advancedStyleParams.radial.y0=-e.textLine.data.length*t.lineHeight/2,e.advancedStyleParams.radial.y1=-e.textLine.data.length*t.lineHeight/2,e.advancedStyleParams.conic.x=0,e.advancedStyleParams.conic.y=-e.textLine.data.length*t.lineHeight/2;break;case"bottom-start":n=0,r=t.height,d="bottom",l="start",e.advancedStyleParams.linear.x0=0,e.advancedStyleParams.linear.x1=t.width,e.advancedStyleParams.radial.x0=t.width/2,e.advancedStyleParams.radial.y0=-e.textLine.data.length*t.lineHeight/2,e.advancedStyleParams.radial.x1=t.width/2,e.advancedStyleParams.radial.y1=-e.textLine.data.length*t.lineHeight/2,e.advancedStyleParams.conic.x=t.width/2,e.advancedStyleParams.conic.y=-e.textLine.data.length*t.lineHeight/2;break;case"bottom-end":n=t.width,r=t.height,d="bottom",l="end",e.advancedStyleParams.linear.x0=0,e.advancedStyleParams.linear.x1=-t.width,e.advancedStyleParams.radial.x0=-t.width/2,e.advancedStyleParams.radial.y0=-e.textLine.data.length*t.lineHeight/2,e.advancedStyleParams.radial.x1=-t.width/2,e.advancedStyleParams.radial.y1=-e.textLine.data.length*t.lineHeight/2,e.advancedStyleParams.conic.x=-t.width/2,e.advancedStyleParams.conic.y=-e.textLine.data.length*t.lineHeight/2;break;case"left":n=0,r=t.height/2,l="start",e.advancedStyleParams.linear.x0=0,e.advancedStyleParams.linear.x1=t.width,e.advancedStyleParams.radial.x0=t.width/2,e.advancedStyleParams.radial.x1=t.width/2,e.advancedStyleParams.conic.x=t.width/2,e.advancedStyleParams.conic.y=0;break;case"right":n=t.width,r=t.height/2,l="end",e.advancedStyleParams.linear.x0=0,e.advancedStyleParams.linear.x1=-t.width,e.advancedStyleParams.radial.x0=-t.width/2,e.advancedStyleParams.radial.x1=-t.width/2,e.advancedStyleParams.conic.x=-t.width/2,e.advancedStyleParams.conic.y=0;break}if(t.translateX=n,t.translateY=r,g(a==null?void 0:a.textBaseline)&&(t.textBaseline=d),g(a==null?void 0:a.textAlign)&&(t.textAlign=l),["text","multi-line-text"].includes(t.contentType))switch(t.textBaseline){case"middle":e.textLine.yOffsetValue=(e.textLine.data.length-1)*t.lineHeight/2;break;case"bottom":case"alphabetic":case"ideographic":e.textLine.yOffsetValue=(e.textLine.data.length-1)*t.lineHeight+(t.lineHeight-parseInt(t.fontSize))/2;break;case"top":case"hanging":e.textLine.yOffsetValue=-t.lineHeight/2+parseInt(t.fontSize)/2;break}return e};class p{constructor(t,a){this.props=t,this.options=a,this.canvas=p.createCanvas(this.options.width,this.options.height),this.recommendOptions=z(this.canvas,this.options,this.props)}static createCanvas(t,a){var n;const i=window.devicePixelRatio||1,e=document.createElement("canvas");return e.width=t*i,e.height=a*i,e.style.width=`${t}px`,e.style.height=`${a}px`,(n=e.getContext("2d"))==null||n.setTransform(i,0,0,i,0,0),e}static clearCanvas(t){const a=t.getContext("2d");if(a===null)throw new Error("get context error");a.restore(),a.resetTransform(),a.clearRect(0,0,t.width,t.height);const i=window.devicePixelRatio||1;a.setTransform(i,0,0,i,0,0)}getCanvas(){return this.canvas}clear(){p.clearCanvas(this.canvas)}draw(){const t=this.canvas.getContext("2d");if(t===null)throw new Error("get context error");return this.options.auxiliaryLine&&(t.beginPath(),t.rect(0,0,this.options.width,this.options.height),t.lineWidth=1,t.strokeStyle="#000",t.stroke(),t.closePath(),t.beginPath(),t.rect(this.options.translateX,this.options.translateY,1,1),t.lineWidth=1,t.strokeStyle="#f00",t.stroke(),t.closePath()),this.setStyle(t),t.save(),t.translate(this.options.translateX,this.options.translateY),t.rotate(this.options.rotate),new Promise(a=>{switch(this.options.contentType){case"text":this.drawText(t,a);break;case"image":this.drawImage(t,a);break;case"multi-line-text":this.drawMultiLineText(t,a);break;case"rich-text":this.drawRichText(t,a);break}})}setStyle(t){var e;let a="fillStyle";this.options.textType==="stroke"&&(a="strokeStyle");let i=this.options.fontColor;if((e=this.options)!=null&&e.advancedStyle)switch(this.options.advancedStyle.type){case"linear":i=this.createLinearGradient(t);break;case"radial":i=this.createRadialGradient(t);break;case"conic":i=this.createConicGradient(t);break;case"pattern":i=this.createPattern(t);break}t[a]&&i&&(t[a]=i),this.options.textAlign&&(t.textAlign=this.options.textAlign),this.options.textBaseline&&(t.textBaseline=this.options.textBaseline),t.globalAlpha=this.options.globalAlpha,this.options.shadowStyle&&(t.shadowBlur=c(this.options.shadowStyle.shadowBlur,0),t.shadowColor=c(this.options.shadowStyle.shadowColor,"#00000000"),t.shadowOffsetX=c(this.options.shadowStyle.shadowOffsetX,0),t.shadowOffsetY=c(this.options.shadowStyle.shadowOffsetY,0)),B(this.options.extraDrawFunc)&&this.options.extraDrawFunc(t)}createLinearGradient(t){var i,e,n,r,d,l,h,o,y,m,w,x,S,v,u;const a=t.createLinearGradient(c((n=(e=(i=this.options.advancedStyle)==null?void 0:i.params)==null?void 0:e.linear)==null?void 0:n.x0,this.recommendOptions.advancedStyleParams.linear.x0),c((l=(d=(r=this.options.advancedStyle)==null?void 0:r.params)==null?void 0:d.linear)==null?void 0:l.y0,0),c((y=(o=(h=this.options.advancedStyle)==null?void 0:h.params)==null?void 0:o.linear)==null?void 0:y.x1,this.recommendOptions.advancedStyleParams.linear.x1),c((x=(w=(m=this.options.advancedStyle)==null?void 0:m.params)==null?void 0:w.linear)==null?void 0:x.y1,0));return(u=(v=(S=this.options)==null?void 0:S.advancedStyle)==null?void 0:v.colorStops)==null||u.forEach(f=>{a.addColorStop(f.offset,f.color)}),a}createConicGradient(t){var i,e,n,r,d,l,h,o,y,m,w,x,S,v,u;const a=t.createConicGradient(c((r=(n=(e=(i=this.options)==null?void 0:i.advancedStyle)==null?void 0:e.params)==null?void 0:n.conic)==null?void 0:r.startAngle,0),c((o=(h=(l=(d=this.options)==null?void 0:d.advancedStyle)==null?void 0:l.params)==null?void 0:h.conic)==null?void 0:o.x,this.recommendOptions.advancedStyleParams.conic.x),c((x=(w=(m=(y=this.options)==null?void 0:y.advancedStyle)==null?void 0:m.params)==null?void 0:w.conic)==null?void 0:x.y,this.recommendOptions.advancedStyleParams.conic.y));return(u=(v=(S=this.options)==null?void 0:S.advancedStyle)==null?void 0:v.colorStops)==null||u.forEach(f=>{a.addColorStop(f.offset,f.color)}),a}createRadialGradient(t){var i,e,n,r,d,l,h,o,y,m,w,x,S,v,u,f,P,b,L,k,O,H,C,T,A,I,R;const a=t.createRadialGradient(c((r=(n=(e=(i=this.options)==null?void 0:i.advancedStyle)==null?void 0:e.params)==null?void 0:n.radial)==null?void 0:r.x0,this.recommendOptions.advancedStyleParams.radial.x0),c((o=(h=(l=(d=this.options)==null?void 0:d.advancedStyle)==null?void 0:l.params)==null?void 0:h.radial)==null?void 0:o.y0,this.recommendOptions.advancedStyleParams.radial.y0),c((x=(w=(m=(y=this.options)==null?void 0:y.advancedStyle)==null?void 0:m.params)==null?void 0:w.radial)==null?void 0:x.r0,this.recommendOptions.advancedStyleParams.radial.r0),c((f=(u=(v=(S=this.options)==null?void 0:S.advancedStyle)==null?void 0:v.params)==null?void 0:u.radial)==null?void 0:f.x1,this.recommendOptions.advancedStyleParams.radial.x1),c((k=(L=(b=(P=this.options)==null?void 0:P.advancedStyle)==null?void 0:b.params)==null?void 0:L.radial)==null?void 0:k.y1,this.recommendOptions.advancedStyleParams.radial.y1),c((T=(C=(H=(O=this.options)==null?void 0:O.advancedStyle)==null?void 0:H.params)==null?void 0:C.radial)==null?void 0:T.r1,this.recommendOptions.advancedStyleParams.radial.r1));return(R=(I=(A=this.options)==null?void 0:A.advancedStyle)==null?void 0:I.colorStops)==null||R.forEach(E=>{a.addColorStop(E.offset,E.color)}),a}createPattern(t){var a,i,e,n,r,d,l,h;return t.createPattern((n=(e=(i=(a=this.options)==null?void 0:a.advancedStyle)==null?void 0:i.params)==null?void 0:e.pattern)==null?void 0:n.image,((h=(l=(d=(r=this.options)==null?void 0:r.advancedStyle)==null?void 0:d.params)==null?void 0:l.pattern)==null?void 0:h.repetition)||"")}setText(t,a){let i="fillText";this.options.textType==="stroke"&&(i="strokeText"),t[i]&&t[i](a.text,a.x,a.y,a.maxWidth)}drawText(t,a){this.setText(t,{text:this.options.content,x:0,y:0-this.recommendOptions.textLine.yOffsetValue,maxWidth:this.options.textRowMaxWidth||this.options.width}),a(t.canvas)}drawImage(t,a){$(this.options.image).then(i=>{const{width:e,height:n}=this.getImageRect(i),r=this.getDrawImagePosition(e,n);t.drawImage(i,r.x,r.y,e,n),a(t.canvas)})}drawMultiLineText(t,a){const i=this.recommendOptions.textLine.data,e=this.recommendOptions.textLine.yOffsetValue;i.forEach((n,r)=>{this.setText(t,{text:n,x:0,y:this.options.lineHeight*r-e,maxWidth:this.options.textRowMaxWidth||this.options.width})}),a(t.canvas)}async drawRichText(t,a){const i=await M(t,this.options);$(X(i.element),i.width,i.height).then(e=>{const n=this.getDrawImagePosition(e.width,e.height);t.drawImage(e,n.x,n.y,e.width,e.height),a(t.canvas)})}getImageRect(t){const a={width:this.options.imageWidth||0,height:this.options.imageHeight||0};switch(!0){case(a.width!==0&&a.height===0):a.height=a.width*t.height/t.width;break;case(a.width===0&&a.height!==0):a.width=a.height*t.width/t.height;break;case(a.width===0&&a.height===0):a.width=t.width,a.height=t.height;break}return a}getDrawImagePosition(t,a){var e,n;const i={x:-t/2,y:-a/2};switch(this.options.translatePlacement){case"top":i.x=-t/2,i.y=0;break;case"top-start":i.x=0,i.y=0;break;case"top-end":i.x=-t,i.y=0;break;case"bottom":i.x=-t/2,i.y=-a;break;case"bottom-start":i.x=0,i.y=-a;break;case"bottom-end":i.x=-t,i.y=-a;break;case"left":i.x=0,i.y=-a/2;break;case"right":i.x=-t,i.y=-a/2;break}return!g((e=this.props)==null?void 0:e.translateX)&&(i.x=0),!g((n=this.props)==null?void 0:n.translateY)&&(i.y=0),i}}class F{constructor(t,a){var i,e,n,r;this.options=t,this.partialWidth=this.options.width,this.partialHeight=this.options.height,this.rows=((i=this.options.gridLayoutOptions)==null?void 0:i.rows)||1,this.cols=((e=this.options.gridLayoutOptions)==null?void 0:e.cols)||1,this.matrix=((n=this.options.gridLayoutOptions)==null?void 0:n.matrix)||Y(this.rows,this.cols,1),this.gap=((r=this.options.gridLayoutOptions)==null?void 0:r.gap)||[0,0],this.partialCanvas=a}draw(){var i,e,n,r,d,l,h,o;const t=p.createCanvas(((i=this.options.gridLayoutOptions)==null?void 0:i.width)||this.partialWidth*this.cols+this.gap[0]*this.cols,((e=this.options.gridLayoutOptions)==null?void 0:e.height)||this.partialHeight*this.rows+this.gap[1]*this.rows),a=t.getContext("2d");(n=this.options.gridLayoutOptions)!=null&&n.backgroundImage&&(a==null||a.drawImage((r=this.options.gridLayoutOptions)==null?void 0:r.backgroundImage,0,0,(d=this.options.gridLayoutOptions)==null?void 0:d.width,(l=this.options.gridLayoutOptions)==null?void 0:l.height));for(let y=0;y<this.rows;y++)for(let m=0;m<this.cols;m++)(o=(h=this.matrix)==null?void 0:h[y])!=null&&o[m]&&(a==null||a.drawImage(this.partialCanvas,this.partialWidth*m+this.gap[0]*m,this.partialHeight*y+this.gap[1]*y,this.partialWidth,this.partialHeight));return t}}const U=(s,t)=>{switch(s.layout){case"grid":return new F(s,t).draw();default:return t}},q=s=>{var t,a,i;switch(s.layout){case"grid":{const e=((t=s.gridLayoutOptions)==null?void 0:t.cols)||1,n=((a=s.gridLayoutOptions)==null?void 0:a.rows)||1,r=((i=s.gridLayoutOptions)==null?void 0:i.gap)||[0,0];return[s.width*e+r[0]*e,s.height*n+r[1]*n]}default:return[s.width,s.height]}};export{p as W,g as a,B as b,j as c,q as g,N as i,$ as l,U as r};
