import{R as e,b as x,E as C}from"./iframe-BjugjGxW.js";import{I as E}from"./sub-blocks-0CjQZi4l.js";import{C as h}from"./Content-DSvY6wxN.js";import{L as i}from"./CardBase-vhUD9AsS.js";import{T as o}from"./Tag-5dijah3R.js";import{I as j}from"./IconWrapper-BB3wHt9k.js";import{u as l}from"./useUniqId-19RfS4PL.js";import{g as N}from"./theme-BhTA6A6h.js";const t=x("basic-card"),m=c=>{const{title:u,summary:g,text:p,icon:d,additionalInfo:y,links:f,list:v,buttons:T,iconPosition:q=E.Top,controlPosition:w="content",label:n,...b}=c,r=l(),a=l(),P=w==="footer",I=C(),s=N(d,I);return e.createElement(i,{className:t(),contentClassName:t("content"),...b,extraProps:{"aria-describedby":a,"aria-labelledby":r}},e.createElement(i.Content,null,n&&e.createElement("div",{className:t("labels")},Array.isArray(n)?n.map((k,A)=>e.createElement(o,{key:A,...k})):e.createElement(o,{...n})),e.createElement(j,{icon:s?{value:s,position:q}:void 0,className:t("wrapper")},e.createElement(h,{title:u,titleId:r,summary:g,text:p,textId:a,additionalInfo:y,links:f,list:v,buttons:T,size:"s",colSizes:{all:12,md:12},controlPosition:P?"bottom":"default"}))))},F=e.memo(m);m.__docgenInfo={description:"",methods:[],displayName:"BasicCard",props:{border:{required:!1,tsType:{name:"union",raw:"'shadow' | 'line' | 'none'",elements:[{name:"literal",value:"'shadow'"},{name:"literal",value:"'line'"},{name:"literal",value:"'none'"}]},description:""},analyticsEvents:{required:!1,tsType:{name:"union",raw:"AnalyticsEvent | AnalyticsEvent[]",elements:[{name:"intersection",raw:`T & {
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
}`,signature:{properties:[{key:"include",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"exclude",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]},required:!1}},{key:"context",value:{name:"string",required:!1}},{key:"target",value:{name:"string",required:!1}}]}}]}],raw:"AnalyticsEvent[]"}]},description:""},controlPosition:{required:!1,tsType:{name:"union",raw:"'content' | 'footer'",elements:[{name:"literal",value:"'content'"},{name:"literal",value:"'footer'"}]},description:""},url:{required:!0,tsType:{name:"string"},description:""},urlTitle:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"union",raw:"T | ThemedValue<T>",elements:[{name:"union",raw:"string | ImageObjectProps | ImageDeviceProps",elements:[{name:"string"},{name:"ImageObjectProps"},{name:"ImageDeviceProps"}]},{name:"ThemedValue",elements:[{name:"union",raw:"string | ImageObjectProps | ImageDeviceProps",elements:[{name:"string"},{name:"ImageObjectProps"},{name:"ImageDeviceProps"}]}],raw:"ThemedValue<T>"}]},description:""},target:{required:!1,tsType:{name:"string"},description:""},iconPosition:{required:!1,tsType:{name:"IconPosition"},description:""},label:{required:!1,tsType:{name:"union",raw:"TagProps | TagProps[]",elements:[{name:"TagProps"},{name:"Array",elements:[{name:"TagProps"}],raw:"TagProps[]"}]},description:""}},composes:["Omit"]};export{F as B};
