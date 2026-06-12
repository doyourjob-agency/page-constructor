import{b as L,E as R,R as e}from"./iframe-xaOxafUG.js";import{g as o}from"./utils-COU2-ufE.js";import{C as _}from"./Content-BPXpD4hM.js";import{L as m}from"./CardBase-yzXuJKHT.js";import{B as u}from"./BackgroundImage-FtNep6rQ.js";import{T as c}from"./Tag-BM-4Jgpq.js";import{u as F}from"./useUniqId-DYLA9-_N.js";import{g as d}from"./theme-Ynh6t7lq.js";const n=L("background-card"),M=g=>{const{url:p,target:y,title:f,summary:T,text:v,border:k,background:b,hoverBackground:s,backgroundPosition:q="left",paddingBottom:i,backgroundColor:r,additionalInfo:h,theme:a="default",links:w,buttons:P,analyticsEvents:A,urlTitle:C,controlPosition:x="content",list:E,label:t}=g,B=F(),l=R(),I=r||a!=="default"?"none":k,j=!i&&x==="footer",N=o(d(b,l)||""),V=o(d(s,l)||"");return e.createElement(m,{className:n({padding:i,theme:a,bgPosition:q}),contentClassName:n("content"),url:p,target:y,border:I,analyticsEvents:A,urlTitle:C},e.createElement(m.Content,null,e.createElement(u,{className:n("image"),...N,style:{backgroundColor:r}}),s&&e.createElement(u,{className:n("image",{hover:!0}),...V,style:{backgroundColor:r}}),t&&e.createElement("div",{className:n("labels")},Array.isArray(t)?t.map((O,z)=>e.createElement(c,{key:z,...O})):e.createElement(c,{...t})),e.createElement(_,{className:n("data"),titleId:B,title:f,summary:T,text:v,additionalInfo:h,size:"s",theme:a,links:w,buttons:P,list:E,colSizes:{all:12,md:12},controlPosition:j?"bottom":"default"})))};M.__docgenInfo={description:"",methods:[],displayName:"BackgroundCard",props:{border:{required:!1,tsType:{name:"union",raw:"'shadow' | 'line' | 'none'",elements:[{name:"literal",value:"'shadow'"},{name:"literal",value:"'line'"},{name:"literal",value:"'none'"}]},description:""},analyticsEvents:{required:!1,tsType:{name:"union",raw:"AnalyticsEvent | AnalyticsEvent[]",elements:[{name:"intersection",raw:`T & {
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
}`,signature:{properties:[{key:"include",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"exclude",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]},required:!1}},{key:"context",value:{name:"string",required:!1}},{key:"target",value:{name:"string",required:!1}}]}}]}],raw:"AnalyticsEvent[]"}]},description:""},controlPosition:{required:!1,tsType:{name:"union",raw:"'content' | 'footer'",elements:[{name:"literal",value:"'content'"},{name:"literal",value:"'footer'"}]},description:""},url:{required:!1,tsType:{name:"string"},description:""},urlTitle:{required:!1,tsType:{name:"string"},description:""},target:{required:!1,tsType:{name:"string"},description:""},background:{required:!1,tsType:{name:"union",raw:"T | ThemedValue<T>",elements:[{name:"ImageObjectProps"},{name:"ThemedValue",elements:[{name:"ImageObjectProps"}],raw:"ThemedValue<T>"}]},description:""},hoverBackground:{required:!1,tsType:{name:"union",raw:"T | ThemedValue<T>",elements:[{name:"ImageObjectProps"},{name:"ThemedValue",elements:[{name:"ImageObjectProps"}],raw:"ThemedValue<T>"}]},description:""},backgroundPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'center' | 'top' | 'bottom'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'center'"},{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:""},paddingBottom:{required:!1,tsType:{name:"union",raw:"'s' | 'm' | 'l' | 'xl'",elements:[{name:"literal",value:"'s'"},{name:"literal",value:"'m'"},{name:"literal",value:"'l'"},{name:"literal",value:"'xl'"}]},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"union",raw:"TagProps | TagProps[]",elements:[{name:"TagProps"},{name:"Array",elements:[{name:"TagProps"}],raw:"TagProps[]"}]},description:""}},composes:["Omit"]};export{M as B};
