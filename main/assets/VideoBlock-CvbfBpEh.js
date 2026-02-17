import{a5 as U,b as V,c as z,r as e,R as a}from"./iframe-BJ2aFwBV.js";import{d as D}from"./debounce-53BQsFZ1.js";import{u as M}from"./useAnalytics-BAyI84to.js";import{I as O}from"./Image-CX_0rSIs.js";import{a as H}from"./addComponentKeysets-DAZDf595.js";import{v as Y}from"./v4-Dv1xt2bl.js";import{a as j}from"./url-B4AZBgfr.js";import{P as K}from"./PlayFill-CYlqlnSw.js";import{u as F}from"./useUniqId-DJuz2Hkl.js";import{u as Z}from"./useActionHandlers-B18Colof.js";import{I as W}from"./Icon-CY4AM9WY.js";const $={"iframe-title":"Video frame"},G={"iframe-title":"Фрейм видеоблока"},J=H({en:$,ru:G},`${U}VideoBlock`),Q="https://www.youtube.com/embed/",X="https://www.youtube.com/embed/live_stream?channel=",ee=/[0-9A-Za-z_-]{11}/,te=/[0-9A-Za-z_-]{23,25}/,re=300,ne={autoplay:1,mute:1},ae={autoplay:0},s=V("VideoBlock");function se(t,u){if(!t&&!u)return null;const[i,m,d]=t?[t,X,te]:[u,Q,ee],o=i==null?void 0:i.match(d);let c;return o&&o.length&&(c=m+o[0]),c}function ie(t){return t/16*9}const oe=t=>{const{stream:u,record:i,videoIframe:m,attributes:d,className:o,id:c,previewImg:l,playButton:p,playButtonId:k,height:y,fullscreen:R,analyticsEvents:f,autoplay:w,onImageLoad:I}=t,v=M(z.VideoPreview),n=m||se(u,i),g=e.useRef(null),[P,h]=e.useState(!1),[C,N]=e.useState(y||void 0),A=e.useMemo(()=>c||Y(),[c]),T=F(),[q,x]=e.useState(!l),E=e.useMemo(()=>{if(n&&q)try{const r=new URL(n);return j({...d||{},...l||w?ne:ae}).forEach((B,L)=>{r.searchParams.set(L,B)}),r.href}catch{return n}},[d,w,q,l,n]),b=e.useCallback(()=>{v(f),x(!0),setTimeout(()=>h(!0),re)},[v,f]),{onKeyDown:S}=Z(b);e.useEffect(()=>{const r=D(()=>{N(g.current?Math.round(ie(g.current.offsetWidth)):void 0)},100);return r(),window.addEventListener("resize",r,{passive:!0}),()=>{window.removeEventListener("resize",r)}},[y]);const _=e.useMemo(()=>a.createElement("iframe",{id:A,src:E,width:"100%",height:"100%",title:J("iframe-title"),frameBorder:"0",allowFullScreen:!0,allow:"autoplay; fullscreen; encrypted-media; accelerometer; gyroscope; picture-in-picture; clipboard-write; web-share; screen-wake-lock",loading:"lazy"}),[A,E]);return e.useEffect(()=>{h(!1)},[n]),n?a.createElement("div",{className:s(null,o),style:{height:C},ref:g},_,l&&!P&&!R&&a.createElement("div",{className:s("preview"),onClick:b,onKeyDown:S,role:"button",tabIndex:0,"aria-labelledby":p?k:T},a.createElement(O,{src:l,className:s("image"),containerClassName:s("image-wrapper"),onLoad:I}),p||a.createElement("button",{title:"Play",id:T,className:s("button")},a.createElement(W,{className:s("icon"),data:K,size:24})))):null};oe.__docgenInfo={description:"",methods:[],displayName:"VideoBlock",props:{analyticsEvents:{required:!1,tsType:{name:"union",raw:"AnalyticsEvent | AnalyticsEvent[]",elements:[{name:"intersection",raw:`T & {
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
}`,signature:{properties:[{key:"include",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"exclude",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]},required:!1}},{key:"context",value:{name:"string",required:!1}},{key:"target",value:{name:"string",required:!1}}]}}]}],raw:"AnalyticsEvent[]"}]},description:""},id:{required:!1,tsType:{name:"string"},description:""},stream:{required:!1,tsType:{name:"string"},description:""},record:{required:!1,tsType:{name:"string"},description:""},videoIframe:{required:!1,tsType:{name:"string"},description:""},attributes:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:""},className:{required:!1,tsType:{name:"string"},description:""},previewImg:{required:!1,tsType:{name:"string"},description:""},playButton:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},playButtonId:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"number"},description:""},fullscreen:{required:!1,tsType:{name:"boolean"},description:""},autoplay:{required:!1,tsType:{name:"boolean"},description:""},onImageLoad:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{oe as V,ie as g};
