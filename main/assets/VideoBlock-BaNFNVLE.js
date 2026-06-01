import{a5 as z,b as D,a as M,r as e,R as a}from"./iframe-BFMfvyKB.js";import{d as O}from"./debounce-DjcVkInd.js";import{u as H}from"./useAnalytics-BZtboynO.js";import{I as Y}from"./Image-Cci7de-b.js";import{a as j}from"./addComponentKeysets-Bjr38wW7.js";import{a as K}from"./url-CYS2qnF-.js";import{P as Z}from"./PlayFill-Buk-gD4H.js";import{u as R}from"./useUniqId-CwDk1cca.js";import{u as F}from"./useActionHandlers-DbsZRNlO.js";import{I as W}from"./Icon-BVJY0Kr_.js";const $={"iframe-title":"Video frame"},G={"iframe-title":"Фрейм видеоблока"},J=j({en:$,ru:G},`${z}VideoBlock`),Q="https://www.youtube.com/embed/",X="https://www.youtube.com/embed/live_stream?channel=",ee=/[0-9A-Za-z_-]{11}/,te=/[0-9A-Za-z_-]{23,25}/,ne=300,re={autoplay:1,mute:1},ae={autoplay:0},s=D("VideoBlock");function se(t,u){if(!t&&!u)return null;const[i,m,d]=t?[t,X,te]:[u,Q,ee],o=i==null?void 0:i.match(d);let c;return o&&o.length&&(c=m+o[0]),c}function ie(t){return t/16*9}const oe=t=>{const{stream:u,record:i,videoIframe:m,attributes:d,className:o,id:c,previewImg:l,playButton:g,playButtonCorner:y,playButtonId:I,height:f,fullscreen:P,analyticsEvents:w,autoplay:v,onImageLoad:C}=t,h=H(M.VideoPreview),r=m||se(u,i),p=e.useRef(null),[N,T]=e.useState(!1),[x,B]=e.useState(f||void 0),q=R(),A=R(),[b,_]=e.useState(!l),E=e.useMemo(()=>{if(r&&b)try{const n=new URL(r);return K({...d||{},...l||v?re:ae}).forEach((U,V)=>{n.searchParams.set(V,U)}),n.href}catch{return r}},[d,v,b,l,r]),k=e.useCallback(()=>{h(w),_(!0),setTimeout(()=>T(!0),ne)},[h,w]),{onKeyDown:S}=F(k);e.useEffect(()=>{const n=O(()=>{B(p.current?Math.round(ie(p.current.offsetWidth)):void 0)},100);return n(),window.addEventListener("resize",n,{passive:!0}),()=>{window.removeEventListener("resize",n)}},[f]);const L=e.useMemo(()=>a.createElement("iframe",{id:c||q,src:E,width:"100%",height:"100%",title:J("iframe-title"),frameBorder:"0",allow:"autoplay; fullscreen; encrypted-media; accelerometer; gyroscope; picture-in-picture; clipboard-write; web-share; screen-wake-lock",loading:"lazy"}),[q,c,E]);return e.useEffect(()=>{T(!1)},[r]),r?a.createElement("div",{className:s(null,o),style:{height:x},ref:p},L,l&&!N&&!P&&a.createElement("div",{className:s("preview"),onClick:k,onKeyDown:S,role:"button",tabIndex:0,"aria-labelledby":g?I:A},a.createElement(Y,{src:l,className:s("image"),containerClassName:s("image-wrapper"),onLoad:C}),g||a.createElement("button",{title:"Play",id:A,className:s("button",{corner:y})},a.createElement(W,{className:s("icon"),data:Z,size:y?16:24})))):null};oe.__docgenInfo={description:"",methods:[],displayName:"VideoBlock",props:{analyticsEvents:{required:!1,tsType:{name:"union",raw:"AnalyticsEvent | AnalyticsEvent[]",elements:[{name:"intersection",raw:`T & {
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
}`,signature:{properties:[{key:"include",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"exclude",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]},required:!1}},{key:"context",value:{name:"string",required:!1}},{key:"target",value:{name:"string",required:!1}}]}}]}],raw:"AnalyticsEvent[]"}]},description:""},id:{required:!1,tsType:{name:"string"},description:""},stream:{required:!1,tsType:{name:"string"},description:""},record:{required:!1,tsType:{name:"string"},description:""},videoIframe:{required:!1,tsType:{name:"string"},description:""},attributes:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:""},className:{required:!1,tsType:{name:"string"},description:""},previewImg:{required:!1,tsType:{name:"string"},description:""},playButton:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},playButtonCorner:{required:!1,tsType:{name:"boolean"},description:""},playButtonId:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"number"},description:""},fullscreen:{required:!1,tsType:{name:"boolean"},description:""},autoplay:{required:!1,tsType:{name:"boolean"},description:""},onImageLoad:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{oe as V,ie as g};
