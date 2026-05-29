import{a5 as V,b as z,a as D,r as e,R as a}from"./iframe-Cvk6sx4L.js";import{d as M}from"./debounce-DRPbhoUY.js";import{u as O}from"./useAnalytics-DumB-0Fy.js";import{I as H}from"./Image-BReTC6b7.js";import{a as Y}from"./addComponentKeysets-py2JDplj.js";import{a as j}from"./url-CT8lDf7H.js";import{P as K}from"./PlayFill-C1Ve1Kax.js";import{u as k}from"./useUniqId-D0e28YJh.js";import{u as Z}from"./useActionHandlers-C58GS2L0.js";import{I as F}from"./Icon-Cj11yAf_.js";const W={"iframe-title":"Video frame"},$={"iframe-title":"Фрейм видеоблока"},G=Y({en:W,ru:$},`${V}VideoBlock`),J="https://www.youtube.com/embed/",Q="https://www.youtube.com/embed/live_stream?channel=",X=/[0-9A-Za-z_-]{11}/,ee=/[0-9A-Za-z_-]{23,25}/,te=300,ne={autoplay:1,mute:1},re={autoplay:0},s=z("VideoBlock");function ae(t,u){if(!t&&!u)return null;const[i,m,d]=t?[t,Q,ee]:[u,J,X],o=i==null?void 0:i.match(d);let c;return o&&o.length&&(c=m+o[0]),c}function se(t){return t/16*9}const ie=t=>{const{stream:u,record:i,videoIframe:m,attributes:d,className:o,id:c,previewImg:l,playButton:p,playButtonId:R,height:y,fullscreen:I,analyticsEvents:f,autoplay:w,onImageLoad:P}=t,v=O(D.VideoPreview),r=m||ae(u,i),g=e.useRef(null),[C,h]=e.useState(!1),[N,x]=e.useState(y||void 0),A=k(),T=k(),[q,_]=e.useState(!l),E=e.useMemo(()=>{if(r&&q)try{const n=new URL(r);return j({...d||{},...l||w?ne:re}).forEach((L,U)=>{n.searchParams.set(U,L)}),n.href}catch{return r}},[d,w,q,l,r]),b=e.useCallback(()=>{v(f),_(!0),setTimeout(()=>h(!0),te)},[v,f]),{onKeyDown:S}=Z(b);e.useEffect(()=>{const n=M(()=>{x(g.current?Math.round(se(g.current.offsetWidth)):void 0)},100);return n(),window.addEventListener("resize",n,{passive:!0}),()=>{window.removeEventListener("resize",n)}},[y]);const B=e.useMemo(()=>a.createElement("iframe",{id:c||A,src:E,width:"100%",height:"100%",title:G("iframe-title"),frameBorder:"0",allow:"autoplay; fullscreen; encrypted-media; accelerometer; gyroscope; picture-in-picture; clipboard-write; web-share; screen-wake-lock",loading:"lazy"}),[A,c,E]);return e.useEffect(()=>{h(!1)},[r]),r?a.createElement("div",{className:s(null,o),style:{height:N},ref:g},B,l&&!C&&!I&&a.createElement("div",{className:s("preview"),onClick:b,onKeyDown:S,role:"button",tabIndex:0,"aria-labelledby":p?R:T},a.createElement(H,{src:l,className:s("image"),containerClassName:s("image-wrapper"),onLoad:P}),p||a.createElement("button",{title:"Play",id:T,className:s("button")},a.createElement(F,{className:s("icon"),data:K,size:24})))):null};ie.__docgenInfo={description:"",methods:[],displayName:"VideoBlock",props:{analyticsEvents:{required:!1,tsType:{name:"union",raw:"AnalyticsEvent | AnalyticsEvent[]",elements:[{name:"intersection",raw:`T & {
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
}`,signature:{properties:[{key:"include",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"exclude",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]},required:!1}},{key:"context",value:{name:"string",required:!1}},{key:"target",value:{name:"string",required:!1}}]}}]}],raw:"AnalyticsEvent[]"}]},description:""},id:{required:!1,tsType:{name:"string"},description:""},stream:{required:!1,tsType:{name:"string"},description:""},record:{required:!1,tsType:{name:"string"},description:""},videoIframe:{required:!1,tsType:{name:"string"},description:""},attributes:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:""},className:{required:!1,tsType:{name:"string"},description:""},previewImg:{required:!1,tsType:{name:"string"},description:""},playButton:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},playButtonId:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"number"},description:""},fullscreen:{required:!1,tsType:{name:"boolean"},description:""},autoplay:{required:!1,tsType:{name:"boolean"},description:""},onImageLoad:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{ie as V,se as g};
