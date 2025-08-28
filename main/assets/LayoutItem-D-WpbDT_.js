import{b as P,r as V,B as C,R as t}from"./iframe-DntpPZMo.js";import{m as S,F as j,M as f}from"./Media-7MUA0fvF.js";import{C as F}from"./Content-CUXeU99S.js";import{T as L}from"./Tag-DA6fpoLu.js";import{M as B}from"./MetaInfo-B725f0hr.js";import{I as _}from"./IconWrapper-C3jAHEkG.js";import{g as v}from"./theme-VD6tpXyf.js";import{u as O}from"./useUniqId-CeOu68u-.js";const R=e=>e==null?void 0:e.map(n=>({theme:"normal",...n})),W=({dataLens:e,image:n})=>!(e||Array.isArray(n)),U=({youtube:e,videoIframe:n})=>!(e||n),a=P("layout-item"),D=({title:e,afterTitle:n,summary:m,rightSpace:i=!0,content:{links:o,...r},metaInfo:u,media:l,border:c,fullscreen:q,icon:x,className:T,analyticsEvents:d,controlPosition:w="content",label:p})=>{const z=V.useMemo(()=>R(o),[o]),h=w==="footer",g=C(),k=v(x,g),E={controlPosition:h?"bottom":"default",...r,links:z,size:"s",colSizes:{all:12,md:12}},A=O(),I=()=>{var y;if(!l)return null;const s=v(l,g),b=S(s,{name:typeof r.title=="string"?r.title:(y=r.title)==null?void 0:y.text,description:r.text});return q&&W(s)?t.createElement(j,{showFullscreenIcon:U(s)},({className:N,fullscreen:G,...M}={})=>t.createElement(f,{...b,...M,className:a("media",{border:c},N),analyticsEvents:d})):t.createElement(f,{...s,className:a("media",{border:c}),analyticsEvents:d})};return t.createElement("div",{className:a(null,T)},p&&t.createElement(L,{...p}),(e||n)&&t.createElement("div",{className:a("wrap",{right:i})},e&&t.createElement("span",{className:a("title",{size:(e==null?void 0:e.size)||"m"})},e==null?void 0:e.text),n&&t.createElement("span",{className:a("afterTitle",{size:(n==null?void 0:n.size)||"m"})},n==null?void 0:n.text),m&&t.createElement("div",{className:a("summary")},m)),I(),u&&t.createElement(B,{items:u,className:a("meta-info",{right:i})}),t.createElement("div",{className:a("content",{"no-media":!l,right:i})},t.createElement(_,{icon:k,className:a("wrapper")},t.createElement(F,{...E,titleId:A}))))};D.__docgenInfo={description:"",methods:[],displayName:"LayoutItem",props:{className:{required:!1,tsType:{name:"string"},description:""},controlPosition:{required:!1,tsType:{name:"union",raw:"'content' | 'footer'",elements:[{name:"literal",value:"'content'"},{name:"literal",value:"'footer'"}]},description:"",defaultValue:{value:"'content'",computed:!1}},analyticsEvents:{required:!1,tsType:{name:"union",raw:"AnalyticsEvent | AnalyticsEvent[]",elements:[{name:"intersection",raw:`T & {
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
}`,signature:{properties:[{key:"text",value:{name:"string",required:!1}},{key:"size",value:{name:"union",raw:"TextSize | 'xl'",elements:[{name:"union",raw:"'xs' | 's' | 'm' | 'l'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'s'"},{name:"literal",value:"'m'"},{name:"literal",value:"'l'"}]},{name:"literal",value:"'xl'"}],required:!1}}]}},description:""},summary:{required:!1,tsType:{name:"string"},description:""},rightSpace:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},content:{required:!0,tsType:{name:"Omit",elements:[{name:"ContentBlockProps"},{name:"union",raw:"'colSizes' | 'centered' | 'size'",elements:[{name:"literal",value:"'colSizes'"},{name:"literal",value:"'centered'"},{name:"literal",value:"'size'"}]}],raw:"Omit<ContentBlockProps, 'colSizes' | 'centered' | 'size'>"},description:""},media:{required:!1,tsType:{name:"union",raw:"T | ThemedValue<T>",elements:[{name:"MediaProps"},{name:"ThemedValue",elements:[{name:"MediaProps"}],raw:"ThemedValue<T>"}]},description:""},metaInfo:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},border:{required:!1,tsType:{name:"boolean"},description:""},fullscreen:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"union",raw:"T | ThemedValue<T>",elements:[{name:"PositionedIcon"},{name:"ThemedValue",elements:[{name:"PositionedIcon"}],raw:"ThemedValue<T>"}]},description:""},label:{required:!1,tsType:{name:"TagProps"},description:""}}};export{D as L};
