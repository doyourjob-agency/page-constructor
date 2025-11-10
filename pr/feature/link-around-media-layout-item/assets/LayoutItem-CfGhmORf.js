import{b as V,r as C,E as S,R as t}from"./iframe-Cx0iB-MQ.js";import{m as j,F,M as q}from"./Media-BiXd7hL7.js";import{C as L}from"./Content-u0PomSnO.js";import{T as _}from"./Tag-Dsn-pMCa.js";import{M as B}from"./MetaInfo-DLa6ryRc.js";import{I as O}from"./IconWrapper-BC8oCf8E.js";import{g as T}from"./theme-53K6UaQk.js";import{u as R}from"./useUniqId-OqFSxA2G.js";const W=e=>e==null?void 0:e.map(n=>({theme:"normal",...n})),U=({dataLens:e,image:n})=>!(e||Array.isArray(n)),D=({youtube:e,videoIframe:n})=>!(e||n),a=V("layout-item"),G=({title:e,afterTitle:n,summary:m,rightSpace:i=!0,content:{links:o,...r},metaInfo:u,media:l,mediaLink:c,border:d,fullscreen:x,icon:w,className:z,analyticsEvents:p,controlPosition:h="content",label:g})=>{const k=C.useMemo(()=>W(o),[o]),E=h==="footer",y=S(),A=T(w,y),I={controlPosition:E?"bottom":"default",...r,links:k,size:"s",colSizes:{all:12,md:12}},b=R(),f=()=>{var v;if(!l)return null;const s=T(l,y),N=j(s,{name:typeof r.title=="string"?r.title:(v=r.title)==null?void 0:v.text,description:r.text});return x&&U(s)?t.createElement(F,{showFullscreenIcon:D(s)},({className:M,fullscreen:H,...P}={})=>t.createElement(q,{...N,...P,className:a("media",{border:d},M),analyticsEvents:p})):t.createElement(q,{...s,className:a("media",{border:d}),analyticsEvents:p})};return t.createElement("div",{className:a(null,z)},g&&t.createElement(_,{...g}),(e||n)&&t.createElement("div",{className:a("wrap",{right:i})},e&&t.createElement("span",{className:a("title",{size:(e==null?void 0:e.size)||"m"})},e==null?void 0:e.text),n&&t.createElement("span",{className:a("afterTitle",{size:(n==null?void 0:n.size)||"m"})},n==null?void 0:n.text),m&&t.createElement("div",{className:a("summary")},m)),c?t.createElement("a",{href:c},f()):f(),u&&t.createElement(B,{items:u,className:a("meta-info",{right:i})}),t.createElement("div",{className:a("content",{"no-media":!l,right:i})},t.createElement(O,{icon:A,className:a("wrapper")},t.createElement(L,{...I,titleId:b}))))};G.__docgenInfo={description:"",methods:[],displayName:"LayoutItem",props:{className:{required:!1,tsType:{name:"string"},description:""},controlPosition:{required:!1,tsType:{name:"union",raw:"'content' | 'footer'",elements:[{name:"literal",value:"'content'"},{name:"literal",value:"'footer'"}]},description:"",defaultValue:{value:"'content'",computed:!1}},analyticsEvents:{required:!1,tsType:{name:"union",raw:"AnalyticsEvent | AnalyticsEvent[]",elements:[{name:"intersection",raw:`T & {
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
}`,signature:{properties:[{key:"include",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"exclude",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]},required:!1}},{key:"context",value:{name:"string",required:!1}},{key:"target",value:{name:"string",required:!1}}]}}]}],raw:"AnalyticsEvent[]"}]},description:""},title:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    text?: string;
    size?: TitleTextSize;
}`,signature:{properties:[{key:"text",value:{name:"string",required:!1}},{key:"size",value:{name:"union",raw:"TextSize | 'xl'",elements:[{name:"union",raw:"'xs' | 's' | 'm' | 'l'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'s'"},{name:"literal",value:"'m'"},{name:"literal",value:"'l'"}]},{name:"literal",value:"'xl'"}],required:!1}}]}},description:""},afterTitle:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    text?: string;
    size?: TitleTextSize;
}`,signature:{properties:[{key:"text",value:{name:"string",required:!1}},{key:"size",value:{name:"union",raw:"TextSize | 'xl'",elements:[{name:"union",raw:"'xs' | 's' | 'm' | 'l'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'s'"},{name:"literal",value:"'m'"},{name:"literal",value:"'l'"}]},{name:"literal",value:"'xl'"}],required:!1}}]}},description:""},summary:{required:!1,tsType:{name:"string"},description:""},rightSpace:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},content:{required:!0,tsType:{name:"Omit",elements:[{name:"ContentBlockProps"},{name:"union",raw:"'colSizes' | 'centered' | 'size'",elements:[{name:"literal",value:"'colSizes'"},{name:"literal",value:"'centered'"},{name:"literal",value:"'size'"}]}],raw:"Omit<ContentBlockProps, 'colSizes' | 'centered' | 'size'>"},description:""},media:{required:!1,tsType:{name:"union",raw:"T | ThemedValue<T>",elements:[{name:"MediaProps"},{name:"ThemedValue",elements:[{name:"MediaProps"}],raw:"ThemedValue<T>"}]},description:""},mediaLink:{required:!1,tsType:{name:"string"},description:""},metaInfo:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},border:{required:!1,tsType:{name:"boolean"},description:""},fullscreen:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"union",raw:"T | ThemedValue<T>",elements:[{name:"PositionedIcon"},{name:"ThemedValue",elements:[{name:"PositionedIcon"}],raw:"ThemedValue<T>"}]},description:""},label:{required:!1,tsType:{name:"TagProps"},description:""}}};export{G as L};
