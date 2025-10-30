import{b as N,E as O,R as e}from"./iframe-BaOgIThH.js";import{g as l}from"./utils-COU2-ufE.js";import{C as z}from"./Content-DBTHaJZ4.js";import{L as m}from"./CardBase-zjwYU8n8.js";import{B as u}from"./BackgroundImage-B14nPCdp.js";import{T as L}from"./Tag-DxdCjsSQ.js";import{u as R}from"./useUniqId-Cvf5tHcy.js";import{g as c}from"./theme-DAt50Hfv.js";const n=N("background-card"),_=d=>{const{url:g,target:p,title:y,summary:f,text:v,border:T,background:k,hoverBackground:a,backgroundPosition:b="left",paddingBottom:s,backgroundColor:t,additionalInfo:q,theme:r="default",links:h,buttons:w,analyticsEvents:C,urlTitle:x,controlPosition:P="content",list:A,label:i}=d,B=R(),o=O(),E=t||r!=="default"?"none":T,I=!s&&P==="footer",j=l(c(k,o)||""),V=l(c(a,o)||"");return e.createElement(m,{className:n({padding:s,theme:r,bgPosition:b}),contentClassName:n("content"),url:g,target:p,border:E,analyticsEvents:C,urlTitle:x},e.createElement(m.Content,null,e.createElement(u,{className:n("image"),...j,style:{backgroundColor:t}}),a&&e.createElement(u,{className:n("image",{hover:!0}),...V,style:{backgroundColor:t}}),i&&e.createElement(L,{...i}),e.createElement(z,{className:n("data"),titleId:B,title:y,summary:f,text:v,additionalInfo:q,size:"s",theme:r,links:h,buttons:w,list:A,colSizes:{all:12,md:12},controlPosition:I?"bottom":"default"})))};_.__docgenInfo={description:"",methods:[],displayName:"BackgroundCard",props:{border:{required:!1,tsType:{name:"union",raw:"'shadow' | 'line' | 'none'",elements:[{name:"literal",value:"'shadow'"},{name:"literal",value:"'line'"},{name:"literal",value:"'none'"}]},description:""},analyticsEvents:{required:!1,tsType:{name:"union",raw:"AnalyticsEvent | AnalyticsEvent[]",elements:[{name:"intersection",raw:`T & {
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
}`,signature:{properties:[{key:"include",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"exclude",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]},required:!1}},{key:"context",value:{name:"string",required:!1}},{key:"target",value:{name:"string",required:!1}}]}}]}],raw:"AnalyticsEvent[]"}]},description:""},controlPosition:{required:!1,tsType:{name:"union",raw:"'content' | 'footer'",elements:[{name:"literal",value:"'content'"},{name:"literal",value:"'footer'"}]},description:""},url:{required:!1,tsType:{name:"string"},description:""},urlTitle:{required:!1,tsType:{name:"string"},description:""},target:{required:!1,tsType:{name:"string"},description:""},background:{required:!1,tsType:{name:"union",raw:"T | ThemedValue<T>",elements:[{name:"ImageObjectProps"},{name:"ThemedValue",elements:[{name:"ImageObjectProps"}],raw:"ThemedValue<T>"}]},description:""},hoverBackground:{required:!1,tsType:{name:"union",raw:"T | ThemedValue<T>",elements:[{name:"ImageObjectProps"},{name:"ThemedValue",elements:[{name:"ImageObjectProps"}],raw:"ThemedValue<T>"}]},description:""},backgroundPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'center' | 'top' | 'bottom'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'center'"},{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:""},paddingBottom:{required:!1,tsType:{name:"union",raw:"'s' | 'm' | 'l' | 'xl'",elements:[{name:"literal",value:"'s'"},{name:"literal",value:"'m'"},{name:"literal",value:"'l'"},{name:"literal",value:"'xl'"}]},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"TagProps"},description:""}},composes:["Omit"]};export{_ as B};
