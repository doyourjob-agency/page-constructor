import{b as o,R as e}from"./iframe-BWiF0MgZ.js";import{L as a}from"./CardBase-BBN4oPf2.js";import{T as t}from"./Tag-DxKChI8o.js";import{M as g}from"./Media-Bd4By7ld.js";const r=o("MediaCard"),d=({border:s,analyticsEvents:i,label:n,...l})=>e.createElement(a,{className:r(),bodyClassName:r("body"),border:s,analyticsEvents:i},e.createElement(a.Content,null,n&&e.createElement("div",{className:r("labels")},Array.isArray(n)?n.map((u,m)=>e.createElement(t,{key:m,...u})):e.createElement(t,{...n})),e.createElement(g,{...l})));d.__docgenInfo={description:"",methods:[],displayName:"MediaCard",props:{animated:{required:!1,tsType:{name:"boolean"},description:""},color:{required:!1,tsType:{name:"string"},description:""},videoMicrodata:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"include",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"exclude",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]},required:!1}},{key:"context",value:{name:"string",required:!1}},{key:"target",value:{name:"string",required:!1}}]}}]}],raw:"AnalyticsEvent[]"}]},description:""},border:{required:!1,tsType:{name:"union",raw:"'shadow' | 'line' | 'none'",elements:[{name:"literal",value:"'shadow'"},{name:"literal",value:"'line'"},{name:"literal",value:"'none'"}]},description:""},label:{required:!1,tsType:{name:"union",raw:"TagProps | TagProps[]",elements:[{name:"TagProps"},{name:"Array",elements:[{name:"TagProps"}],raw:"TagProps[]"}]},description:""}},composes:["Partial"]};export{d as M};
