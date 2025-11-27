import{b as C,r as j,E as S,R as r}from"./iframe-CaXHTP06.js";import{m as F,F as L,M as q}from"./Media-DakMpBd0.js";import{C as O}from"./Content-BR9WXNpE.js";import{T as _}from"./Tag-PlnEcvO2.js";import{M as B}from"./MetaInfo-DXHhf6NR.js";import{I as R}from"./IconWrapper-DwTwRvSb.js";import{g as w}from"./theme-BrBzF6kb.js";import{u as W}from"./useUniqId-BezAzZFM.js";const H=e=>e==null?void 0:e.map(n=>({theme:"normal",...n})),U=({dataLens:e,image:n})=>!(e||Array.isArray(n)),D=({youtube:e,videoIframe:n})=>!(e||n),a=C("layout-item"),G=({title:e,afterTitle:n,summary:m,rightSpace:l=!0,content:{links:u,...t},metaInfo:c,media:o,mediaLink:s,border:d,fullscreen:T,icon:x,className:h,analyticsEvents:p,controlPosition:z="content",label:g,jumpOnHover:k})=>{const E=j.useMemo(()=>H(u),[u]),b=z==="footer",y=S(),I=w(x,y),A={controlPosition:b?"bottom":"default",...t,links:E,size:"s",colSizes:{all:12,md:12}},N=W(),f=()=>{var v;if(!o)return null;const i=w(o,y),M=F(i,{name:typeof t.title=="string"?t.title:(v=t.title)==null?void 0:v.text,description:t.text});return T&&U(i)?r.createElement(L,{showFullscreenIcon:D(i)},({className:P,fullscreen:J,...V}={})=>r.createElement(q,{...M,...V,className:a("media",{border:d},P),analyticsEvents:p})):r.createElement(q,{...i,className:a("media",{border:d}),analyticsEvents:p})};return r.createElement("div",{className:a({jumpOnHover:k},h)},g&&r.createElement(_,{...g}),(e||n)&&r.createElement("div",{className:a("wrap",{right:l})},e&&r.createElement("span",{className:a("title",{size:(e==null?void 0:e.size)||"m"})},e==null?void 0:e.text),n&&r.createElement("span",{className:a("afterTitle",{size:(n==null?void 0:n.size)||"m"})},n==null?void 0:n.text),m&&r.createElement("div",{className:a("summary")},m)),s?r.createElement("a",{download:s.download,target:s.target,"aria-hidden":!0,href:s.href,tabIndex:0,rel:"noreferrer"},f()):f(),c&&r.createElement(B,{items:c,className:a("meta-info",{right:l})}),r.createElement("div",{className:a("content",{"no-media":!o,right:l})},r.createElement(R,{icon:I,className:a("wrapper")},r.createElement(O,{...A,titleId:N}))))};G.__docgenInfo={description:"",methods:[],displayName:"LayoutItem",props:{className:{required:!1,tsType:{name:"string"},description:""},controlPosition:{required:!1,tsType:{name:"union",raw:"'content' | 'footer'",elements:[{name:"literal",value:"'content'"},{name:"literal",value:"'footer'"}]},description:"",defaultValue:{value:"'content'",computed:!1}},analyticsEvents:{required:!1,tsType:{name:"union",raw:"AnalyticsEvent | AnalyticsEvent[]",elements:[{name:"intersection",raw:`T & {
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
}`,signature:{properties:[{key:"text",value:{name:"string",required:!1}},{key:"size",value:{name:"union",raw:"TextSize | 'xl'",elements:[{name:"union",raw:"'xs' | 's' | 'm' | 'l'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'s'"},{name:"literal",value:"'m'"},{name:"literal",value:"'l'"}]},{name:"literal",value:"'xl'"}],required:!1}}]}},description:""},summary:{required:!1,tsType:{name:"string"},description:""},rightSpace:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},content:{required:!0,tsType:{name:"Omit",elements:[{name:"ContentBlockProps"},{name:"union",raw:"'colSizes' | 'centered' | 'size'",elements:[{name:"literal",value:"'colSizes'"},{name:"literal",value:"'centered'"},{name:"literal",value:"'size'"}]}],raw:"Omit<ContentBlockProps, 'colSizes' | 'centered' | 'size'>"},description:""},media:{required:!1,tsType:{name:"union",raw:"T | ThemedValue<T>",elements:[{name:"MediaProps"},{name:"ThemedValue",elements:[{name:"MediaProps"}],raw:"ThemedValue<T>"}]},description:""},mediaLink:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    href: string;
    download?: boolean;
    target?: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"download",value:{name:"boolean",required:!1}},{key:"target",value:{name:"string",required:!1}}]}},description:""},metaInfo:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},border:{required:!1,tsType:{name:"boolean"},description:""},fullscreen:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"union",raw:"T | ThemedValue<T>",elements:[{name:"PositionedIcon"},{name:"ThemedValue",elements:[{name:"PositionedIcon"}],raw:"ThemedValue<T>"}]},description:""},label:{required:!1,tsType:{name:"TagProps"},description:""},jumpOnHover:{required:!1,tsType:{name:"boolean"},description:""}}};export{G as L};
