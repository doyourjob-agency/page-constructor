import{a5 as j,b as K,a as Z,r as e,R as a}from"./iframe-HtBxhAfP.js";import{d as F}from"./debounce-C9Eorsxc.js";import{u as W}from"./useAnalytics-D8M_YzUJ.js";import{I as $}from"./Image-DDhiDrce.js";import{a as G}from"./addComponentKeysets-DACJMd80.js";import{a as J}from"./url-CAKJLv3h.js";import{P as Q}from"./PlayFill-B_D4X3Eu.js";import{u as C}from"./useUniqId-D3XI_2Pw.js";import{u as X}from"./useActionHandlers-BVZl3Nl1.js";import{I as ee}from"./Icon-kDm7Fa3W.js";const te={"iframe-title":"Video frame"},re={"iframe-title":"Фрейм видеоблока"},ne=G({en:te,ru:re},`${j}VideoBlock`),ae="https://www.youtube.com/embed/",se="https://www.youtube.com/embed/live_stream?channel=",ie=/[0-9A-Za-z_-]{11}/,oe=/[0-9A-Za-z_-]{23,25}/,ue=300,le={autoplay:1,mute:1},ce={autoplay:0},s=K("VideoBlock");function me(t,r){if(!t&&!r)return null;const[o,m,d]=t?[t,se,oe]:[r,ae,ie],u=o==null?void 0:o.match(d);let l;return u&&u.length&&(l=m+u[0]),l}function de(t,r){return r==="auto"?t/16*9:r?t/r:t/16*9}const pe=t=>{const{stream:r,record:o,videoIframe:m,attributes:d,className:u,id:l,previewImg:c,previewVideo:g,playButton:y,playButtonCorner:f,playButtonId:N,height:v,ratio:w,fullscreen:x,analyticsEvents:b,autoplay:T,onImageLoad:B}=t,q=W(Z.VideoPreview),i=m||me(r,o),p=e.useRef(null),[S,E]=e.useState(!1),[_,L]=e.useState(v||void 0),A=C(),h=C(),[k,V]=e.useState(!c),[U,I]=e.useState(!1),R=e.useMemo(()=>{if(i&&k)try{const n=new URL(i);return J({...d||{},...c||T?le:ce}).forEach((O,Y)=>{n.searchParams.set(Y,O)}),n.href}catch{return i}},[d,T,k,c,i]),P=e.useCallback(()=>{q(b),V(!0),setTimeout(()=>E(!0),ue)},[q,b]),M=e.useCallback(()=>{I(!0)},[]),z=e.useCallback(()=>{I(!1)},[]),{onKeyDown:D}=X(P);e.useEffect(()=>{const n=F(()=>{L(p.current?Math.round(de(p.current.offsetWidth,w)):void 0)},100);return n(),window.addEventListener("resize",n,{passive:!0}),()=>{window.removeEventListener("resize",n)}},[v,w]);const H=e.useMemo(()=>a.createElement("iframe",{id:l||A,src:R,width:"100%",height:"100%",title:ne("iframe-title"),frameBorder:"0",allow:"autoplay; fullscreen; encrypted-media; accelerometer; gyroscope; picture-in-picture; clipboard-write; web-share; screen-wake-lock",loading:"lazy"}),[A,l,R]);return e.useEffect(()=>{E(!1)},[i]),i?a.createElement("div",{className:s(null,u),style:{height:_},ref:p},H,c&&!S&&!x&&a.createElement("div",{className:s("preview"),onClick:P,onKeyDown:D,onMouseEnter:M,onMouseLeave:z,role:"button",tabIndex:0,"aria-labelledby":y?N:h},U&&g?a.createElement("video",{src:g,className:s("video"),autoPlay:!0,muted:!0,loop:!0,playsInline:!0}):a.createElement($,{src:c,className:s("image"),containerClassName:s("image-wrapper"),onLoad:B}),y||a.createElement("button",{title:"Play",id:h,className:s("button",{corner:f})},a.createElement(ee,{className:s("icon"),data:Q,size:f?16:24})))):null};pe.__docgenInfo={description:"",methods:[],displayName:"VideoBlock",props:{analyticsEvents:{required:!1,tsType:{name:"union",raw:"AnalyticsEvent | AnalyticsEvent[]",elements:[{name:"intersection",raw:`T & {
    name: string;
    type?: string;
    counters?: AnalyticsCounters;
    context?: string;
    target?: string;
}`,elements:[{name:"T"},{name:"signature",type:"object",raw:`{
    name: string;
    type?: string;
    counters?: AnalyticsCounters;
    context?: string;
    target?: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!1}},{key:"counters",value:{name:"signature",type:"object",raw:`{
    include?: string[];
    exclude?: string[];
}`,signature:{properties:[{key:"include",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"exclude",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]},required:!1}},{key:"context",value:{name:"string",required:!1}},{key:"target",value:{name:"string",required:!1}}]}}]},{name:"Array",elements:[{name:"intersection",raw:`T & {
    name: string;
    type?: string;
    counters?: AnalyticsCounters;
    context?: string;
    target?: string;
}`,elements:[{name:"T"},{name:"signature",type:"object",raw:`{
    name: string;
    type?: string;
    counters?: AnalyticsCounters;
    context?: string;
    target?: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!1}},{key:"counters",value:{name:"signature",type:"object",raw:`{
    include?: string[];
    exclude?: string[];
}`,signature:{properties:[{key:"include",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"exclude",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]},required:!1}},{key:"context",value:{name:"string",required:!1}},{key:"target",value:{name:"string",required:!1}}]}}]}],raw:"AnalyticsEvent[]"}]},description:""},id:{required:!1,tsType:{name:"string"},description:""},stream:{required:!1,tsType:{name:"string"},description:""},record:{required:!1,tsType:{name:"string"},description:""},videoIframe:{required:!1,tsType:{name:"string"},description:""},attributes:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:""},className:{required:!1,tsType:{name:"string"},description:""},previewImg:{required:!1,tsType:{name:"string"},description:""},previewVideo:{required:!1,tsType:{name:"string"},description:""},playButton:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},playButtonCorner:{required:!1,tsType:{name:"boolean"},description:""},playButtonId:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"number"},description:""},ratio:{required:!1,tsType:{name:"union",raw:"number | 'auto'",elements:[{name:"number"},{name:"literal",value:"'auto'"}]},description:""},fullscreen:{required:!1,tsType:{name:"boolean"},description:""},autoplay:{required:!1,tsType:{name:"boolean"},description:""},onImageLoad:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{pe as V,de as g};
