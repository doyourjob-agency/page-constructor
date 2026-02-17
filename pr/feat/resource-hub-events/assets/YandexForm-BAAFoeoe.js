import{b as I,r,c as O,d as S,e as _,R as $,H as j}from"./iframe-Doi5iD3Z.js";import{u as H}from"./useAnalytics-DEXIao6M.js";const Y="https://forms.yandex.ru",D="surveys",M="pc-yandex-form-container",B=I("yandex-form"),G=A=>{const{onLoad:t,id:a,params:l,className:T,theme:p,containerId:f=M,headerHeight:v=j,onSubmit:y,analyticsEvents:q,customFormOrigin:C,customFormSection:R}=A,i=r.useRef(null),e=r.useRef(),g=C||Y,w=R||D,h=H(O.YandexFormSubmit),b=r.useContext(S),u=r.useContext(_),x=r.useCallback(s=>{const n=new URLSearchParams(location.search),o=location.origin+location.pathname;n.set("url",o),n.set("iframe","1"),u!=null&&u.lang&&n.set("lang",u.lang),n.set("theme",p||"cloud-www"),b&&n.set("media-type","mobile"),l&&Object.keys(l).forEach(m=>{n.set(m,l[m])});const c=`${g}/${w}/${a}/?${n}`;e.current?e.current.src=c:(e.current=document.createElement("iframe"),e.current.src=c,e.current.id=f,e.current.name=`form${a}`,e.current.setAttribute("loading","lazy"),e.current.frameBorder="0",e.current.scrolling="no",e.current.width="100%",s.appendChild(e.current))},[u.lang,p,b,g,w,a,f,l]),k=r.useCallback(()=>{if(i&&i.current){const{top:s}=i.current.getBoundingClientRect();window.scrollBy(0,s-v)}h(q),y&&y()},[h,q,y,v]),d=r.useCallback(({origin:s,data:n})=>{if(s===g)try{const o=JSON.parse(n),c=o["iframe-height"],{message:m,name:F,redirectUrl:N}=o;if(F!==`form${a}`)return;e.current&&c&&!m&&(e.current.height=`${c}px`,t==null||t()),(m==="sent"||N)&&k()}catch{return}},[g,a,t,k]),E=r.useCallback(()=>{const s=i.current;s&&(x(s),window.addEventListener("message",d,{passive:!0}))},[x,d]);return r.useEffect(()=>(E(),setTimeout(()=>t==null?void 0:t(),1e3),()=>window.removeEventListener("message",d)),[a,E,d,t]),$.createElement("div",{ref:i,className:B(null,T)})};G.__docgenInfo={description:"",methods:[],displayName:"YandexForm",props:{analyticsEvents:{required:!1,tsType:{name:"union",raw:"AnalyticsEvent | AnalyticsEvent[]",elements:[{name:"intersection",raw:`T & {
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
}`,signature:{properties:[{key:"include",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"exclude",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]},required:!1}},{key:"context",value:{name:"string",required:!1}},{key:"target",value:{name:"string",required:!1}}]}}]}],raw:"AnalyticsEvent[]"}]},description:""},id:{required:!0,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},containerId:{required:!1,tsType:{name:"string"},description:""},theme:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},headerHeight:{required:!1,tsType:{name:"number"},description:""},customFormOrigin:{required:!1,tsType:{name:"string"},description:""},customFormSection:{required:!1,tsType:{name:"string"},description:""},params:{required:!1,tsType:{name:"signature",type:"object",raw:"{[key: string]: string}",signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]}},description:""},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onLoad:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{G as Y};
