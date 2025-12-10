import{b as l,R as e}from"./iframe-oh5lnFGI.js";import{L as t}from"./CardBase-v-QjeUh4.js";import{T as u}from"./Tag-B5rA2XaK.js";import{M as o}from"./Media-Ch59UMjD.js";const n=l("MediaCard"),m=({border:a,analyticsEvents:s,label:r,...i})=>e.createElement(t,{className:n(),bodyClassName:n("body"),border:a,analyticsEvents:s},e.createElement(t.Content,null,r&&e.createElement("div",{className:n("label")},e.createElement(u,{...r,withoutMarginBottom:!0})),e.createElement(o,{...i})));m.__docgenInfo={description:"",methods:[],displayName:"MediaCard",props:{animated:{required:!1,tsType:{name:"boolean"},description:""},color:{required:!1,tsType:{name:"string"},description:""},videoMicrodata:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    name?: string;
    description?: string;
    duration?: string;
    uploadDate?: string;
    contentUrl?: string;
    thumbnailUrl?: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"duration",value:{name:"string",required:!1}},{key:"uploadDate",value:{name:"string",required:!1}},{key:"contentUrl",value:{name:"string",required:!1}},{key:"thumbnailUrl",value:{name:"string",required:!1}}]}},description:""},analyticsEvents:{required:!1,tsType:{name:"union",raw:"AnalyticsEvent | AnalyticsEvent[]",elements:[{name:"intersection",raw:`T & {
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
}`,signature:{properties:[{key:"include",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"exclude",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]},required:!1}},{key:"context",value:{name:"string",required:!1}},{key:"target",value:{name:"string",required:!1}}]}}]}],raw:"AnalyticsEvent[]"}]},description:""},border:{required:!1,tsType:{name:"union",raw:"'shadow' | 'line' | 'none'",elements:[{name:"literal",value:"'shadow'"},{name:"literal",value:"'line'"},{name:"literal",value:"'none'"}]},description:""},label:{required:!1,tsType:{name:"TagProps"},description:""}},composes:["Partial"]};export{m as M};
