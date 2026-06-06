import{a5 as D,b as M,a as O,r as t,R as s}from"./iframe-S8rNUUWY.js";import{d as H}from"./debounce-BK2z3QuY.js";import{u as Y}from"./useAnalytics-Cuzgugdu.js";import{I as j}from"./Image-BwIGlDIi.js";import{a as K}from"./addComponentKeysets-e1dTm3tv.js";import{a as Z}from"./url-CFnZElyT.js";import{P as F}from"./PlayFill-B9RrErni.js";import{u as I}from"./useUniqId-CPZN5J8F.js";import{u as W}from"./useActionHandlers-DdQpRCyS.js";import{I as $}from"./Icon-MK3KmIVD.js";const G={"iframe-title":"Video frame"},J={"iframe-title":"Фрейм видеоблока"},Q=K({en:G,ru:J},`${D}VideoBlock`),X="https://www.youtube.com/embed/",ee="https://www.youtube.com/embed/live_stream?channel=",te=/[0-9A-Za-z_-]{11}/,ne=/[0-9A-Za-z_-]{23,25}/,re=300,ae={autoplay:1,mute:1},se={autoplay:0},i=M("VideoBlock");function ie(e,n){if(!e&&!n)return null;const[o,m,d]=e?[e,ee,ne]:[n,X,te],u=o==null?void 0:o.match(d);let l;return u&&u.length&&(l=m+u[0]),l}function oe(e,n){return n==="auto"?e/16*9:n?e/n:e/16*9}const ue=e=>{const{stream:n,record:o,videoIframe:m,attributes:d,className:u,id:l,previewImg:c,playButton:g,playButtonCorner:y,playButtonId:P,height:f,ratio:v,fullscreen:C,analyticsEvents:w,autoplay:T,onImageLoad:N}=e,b=Y(O.VideoPreview),a=m||ie(n,o),p=t.useRef(null),[x,q]=t.useState(!1),[B,_]=t.useState(f||void 0),A=I(),h=I(),[E,S]=t.useState(!c),k=t.useMemo(()=>{if(a&&E)try{const r=new URL(a);return Z({...d||{},...c||T?ae:se}).forEach((V,z)=>{r.searchParams.set(z,V)}),r.href}catch{return a}},[d,T,E,c,a]),R=t.useCallback(()=>{b(w),S(!0),setTimeout(()=>q(!0),re)},[b,w]),{onKeyDown:L}=W(R);t.useEffect(()=>{const r=H(()=>{_(p.current?Math.round(oe(p.current.offsetWidth,v)):void 0)},100);return r(),window.addEventListener("resize",r,{passive:!0}),()=>{window.removeEventListener("resize",r)}},[f,v]);const U=t.useMemo(()=>s.createElement("iframe",{id:l||A,src:k,width:"100%",height:"100%",title:Q("iframe-title"),frameBorder:"0",allow:"autoplay; fullscreen; encrypted-media; accelerometer; gyroscope; picture-in-picture; clipboard-write; web-share; screen-wake-lock",loading:"lazy"}),[A,l,k]);return t.useEffect(()=>{q(!1)},[a]),a?s.createElement("div",{className:i(null,u),style:{height:B},ref:p},U,c&&!x&&!C&&s.createElement("div",{className:i("preview"),onClick:R,onKeyDown:L,role:"button",tabIndex:0,"aria-labelledby":g?P:h},s.createElement(j,{src:c,className:i("image"),containerClassName:i("image-wrapper"),onLoad:N}),g||s.createElement("button",{title:"Play",id:h,className:i("button",{corner:y})},s.createElement($,{className:i("icon"),data:F,size:y?16:24})))):null};ue.__docgenInfo={description:"",methods:[],displayName:"VideoBlock",props:{analyticsEvents:{required:!1,tsType:{name:"union",raw:"AnalyticsEvent | AnalyticsEvent[]",elements:[{name:"intersection",raw:`T & {
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
}`,signature:{properties:[{key:"include",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"exclude",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]},required:!1}},{key:"context",value:{name:"string",required:!1}},{key:"target",value:{name:"string",required:!1}}]}}]}],raw:"AnalyticsEvent[]"}]},description:""},id:{required:!1,tsType:{name:"string"},description:""},stream:{required:!1,tsType:{name:"string"},description:""},record:{required:!1,tsType:{name:"string"},description:""},videoIframe:{required:!1,tsType:{name:"string"},description:""},attributes:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:""},className:{required:!1,tsType:{name:"string"},description:""},previewImg:{required:!1,tsType:{name:"string"},description:""},playButton:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},playButtonCorner:{required:!1,tsType:{name:"boolean"},description:""},playButtonId:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"number"},description:""},ratio:{required:!1,tsType:{name:"union",raw:"number | 'auto'",elements:[{name:"number"},{name:"literal",value:"'auto'"}]},description:""},fullscreen:{required:!1,tsType:{name:"boolean"},description:""},autoplay:{required:!1,tsType:{name:"boolean"},description:""},onImageLoad:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{ue as V,oe as g};
