import{r as n,b as C,c as N,L as z,e as R,R as e}from"./iframe-CNFu8gIt.js";import{B}from"./BackLink-DCkxg7TP.js";import{F as I}from"./FileLink-CJB6Bqpj.js";import{g as M}from"./blocks-lrZUZsoi.js";import{u as P}from"./useAnalytics-CaZI8VZN.js";import{s as j,g as S}from"./url-DF8LWM5V.js";import{I as H}from"./Icon-DFc7pZ_s.js";const _=t=>n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},t),n.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.47 13.03a.75.75 0 0 1 0-1.06L9.44 8 5.47 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0Z",clipRule:"evenodd"})),r=C("link-block"),F="​";function O(t){switch(t){case"l":return 20;case"m":return 18;case"s":return 14;default:return 14}}const D=t=>{const{text:a,url:c,arrow:d,analyticsEvents:y,theme:g="file-link",colorTheme:f="light",textSize:s="m",className:k,target:v,children:i,tabIndex:l,qa:q,urlTitle:x,extraProps:o}=t,w=M(q,["normal"]),T=P(N.Link,c),{hostname:h}=n.useContext(z),{tld:b}=n.useContext(R),m=j(t.url,b),A=g==="back"?"l":"m",u=()=>{T(y)},E=()=>{switch(g){case"back":return e.createElement(B,{title:i||a,url:m,onClick:u,tabIndex:l,extraProps:o});case"file-link":case"underline":return e.createElement(I,{text:i||a,href:m,type:"horizontal",textSize:s,onClick:u,tabIndex:l,extraProps:o});case"normal":{const L=S(c,h,v),p=i||a;return e.createElement("a",{className:r("link",{theme:f,"has-arrow":d}),href:m,onClick:u,tabIndex:l,title:x,...L,"data-qa":w.normal,...o},d?e.createElement(n.Fragment,null,e.createElement("span",{className:r("content")},p),F,e.createElement(H,{className:r("arrow"),data:_,size:O(s)})):p)}default:return null}};return e.createElement("div",{className:r({size:s||A},k)},E())};D.__docgenInfo={description:"",methods:[],displayName:"LinkBlock",props:{analyticsEvents:{required:!1,tsType:{name:"union",raw:"AnalyticsEvent | AnalyticsEvent[]",elements:[{name:"intersection",raw:`T & {
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
}`,signature:{properties:[{key:"include",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"exclude",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]},required:!1}},{key:"context",value:{name:"string",required:!1}},{key:"target",value:{name:"string",required:!1}}]}}]}],raw:"AnalyticsEvent[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},tabIndex:{required:!1,tsType:{name:"number"},description:""},url:{required:!0,tsType:{name:"string"},description:""},urlTitle:{required:!1,tsType:{name:"string"},description:""},text:{required:!1,tsType:{name:"string"},description:""},textSize:{required:!1,tsType:{name:"union",raw:"'xs' | 's' | 'm' | 'l'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'s'"},{name:"literal",value:"'m'"},{name:"literal",value:"'l'"}]},description:""},theme:{required:!1,tsType:{name:"union",raw:"'file-link' | 'normal' | 'back' | 'underline'",elements:[{name:"literal",value:"'file-link'"},{name:"literal",value:"'normal'"},{name:"literal",value:"'back'"},{name:"literal",value:"'underline'"}]},description:""},colorTheme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:""},arrow:{required:!1,tsType:{name:"boolean"},description:""},target:{required:!1,tsType:{name:"string"},description:""},extraProps:{required:!1,tsType:{name:"HTMLProps",elements:[{name:"HTMLAnchorElement"}],raw:"HTMLProps<HTMLAnchorElement>"},description:""},qa:{required:!1,tsType:{name:"string"},description:""}}};export{_ as C,D as L};
