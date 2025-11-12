import{a4 as o,c as g,r as d,R as e,b as y}from"./iframe-DrYIHUJm.js";import{a as p}from"./addComponentKeysets-Dzo2le8E.js";import{u as v}from"./useAnalytics-8BulM0lo.js";const f="You are here:",k={label:f},b="Вы здесь:",q={label:b},A=p({en:k,ru:q},`${o}HeaderBreadcrumbs`),n=y("header-breadcrumbs");function x(i){const{items:t,theme:l="light",className:u,analyticsEvents:r}=i,a=v(g.Breadcrumb),m=d.useCallback(()=>{a(r)},[r,a]);return e.createElement("nav",{className:n({theme:l},u),"aria-label":A("label")},e.createElement("ol",{className:n("list")},t==null?void 0:t.map(({url:s,text:c})=>e.createElement("li",{className:n("item"),key:s},e.createElement("a",{href:s,className:n("text"),onClick:m},c),e.createElement("span",{className:n("separator"),"aria-hidden":!0},"/")))))}x.__docgenInfo={description:"",methods:[],displayName:"HeaderBreadcrumbs",props:{className:{required:!1,tsType:{name:"string"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    url: string;
    text: ReactNode;
}`,signature:{properties:[{key:"url",value:{name:"string",required:!0}},{key:"text",value:{name:"ReactNode",required:!0}}]}}],raw:`{
    url: string;
    text: ReactNode;
}[]`},description:""},theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:""},analyticsEvents:{required:!1,tsType:{name:"union",raw:"AnalyticsEvent | AnalyticsEvent[]",elements:[{name:"intersection",raw:`T & {
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
}`,signature:{properties:[{key:"include",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"exclude",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]},required:!1}},{key:"context",value:{name:"string",required:!1}},{key:"target",value:{name:"string",required:!1}}]}}]}],raw:"AnalyticsEvent[]"}]},description:""}}};export{x as H};
