import{R as e,b as P,E as k}from"./iframe-D1XP4TgM.js";import{I as x}from"./sub-blocks-C8er8-BX.js";import{C as A}from"./Content-TdbysbM4.js";import{L as i}from"./CardBase-iqO0qmE8.js";import{T as C}from"./Tag-MwKowT3E.js";import{I as h}from"./IconWrapper-DuP9BlrJ.js";import{u as o}from"./useUniqId-DcEG_7kp.js";import{g as E}from"./theme-BhVeegni.js";const n=P("basic-card"),l=m=>{const{title:c,summary:u,text:g,icon:d,additionalInfo:p,links:y,list:f,buttons:v,iconPosition:T=x.Top,controlPosition:q="content",label:t,...b}=m,r=o(),a=o(),w=q==="footer",I=k(),s=E(d,I);return e.createElement(i,{className:n(),contentClassName:n("content"),...b,extraProps:{"aria-describedby":a,"aria-labelledby":r}},e.createElement(i.Content,null,t&&e.createElement(C,{...t}),e.createElement(h,{icon:s?{value:s,position:T}:void 0,className:n("wrapper")},e.createElement(A,{title:c,titleId:r,summary:u,text:g,textId:a,additionalInfo:p,links:y,list:f,buttons:v,size:"s",colSizes:{all:12,md:12},controlPosition:w?"bottom":"default"}))))},R=e.memo(l);l.__docgenInfo={description:"",methods:[],displayName:"BasicCard",props:{border:{required:!1,tsType:{name:"union",raw:"'shadow' | 'line' | 'none'",elements:[{name:"literal",value:"'shadow'"},{name:"literal",value:"'line'"},{name:"literal",value:"'none'"}]},description:""},analyticsEvents:{required:!1,tsType:{name:"union",raw:"AnalyticsEvent | AnalyticsEvent[]",elements:[{name:"intersection",raw:`T & {
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
}`,signature:{properties:[{key:"include",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"exclude",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]},required:!1}},{key:"context",value:{name:"string",required:!1}},{key:"target",value:{name:"string",required:!1}}]}}]}],raw:"AnalyticsEvent[]"}]},description:""},controlPosition:{required:!1,tsType:{name:"union",raw:"'content' | 'footer'",elements:[{name:"literal",value:"'content'"},{name:"literal",value:"'footer'"}]},description:""},url:{required:!0,tsType:{name:"string"},description:""},urlTitle:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"union",raw:"T | ThemedValue<T>",elements:[{name:"union",raw:"string | ImageObjectProps | ImageDeviceProps",elements:[{name:"string"},{name:"ImageObjectProps"},{name:"ImageDeviceProps"}]},{name:"ThemedValue",elements:[{name:"union",raw:"string | ImageObjectProps | ImageDeviceProps",elements:[{name:"string"},{name:"ImageObjectProps"},{name:"ImageDeviceProps"}]}],raw:"ThemedValue<T>"}]},description:""},target:{required:!1,tsType:{name:"string"},description:""},iconPosition:{required:!1,tsType:{name:"IconPosition"},description:""},label:{required:!1,tsType:{name:"TagProps"},description:""}},composes:["Omit"]};export{R as B};
