import{b as C,r as j,E as S,R as a}from"./iframe-Fi86tQ_z.js";import{m as F,F as L,M as q}from"./Media-BqynrqHV.js";import{C as _}from"./Content-DSViJ5eg.js";import{T as O}from"./Tag--ocj_mfW.js";import{M as B}from"./MetaInfo-CtggGtXD.js";import{I as R}from"./IconWrapper-2QkinLVS.js";import{g as w}from"./theme-CyxPn8Qo.js";import{u as W}from"./useUniqId-DXIzfESR.js";const H=e=>e==null?void 0:e.map(n=>({theme:"normal",...n})),U=({dataLens:e,image:n})=>!(e||Array.isArray(n)),D=({youtube:e,videoIframe:n})=>!(e||n),r=C("layout-item"),G=({title:e,afterTitle:n,summary:m,rightSpace:l=!0,content:{links:u,...t},metaInfo:c,media:o,mediaLink:s,border:d,fullscreen:T,icon:x,className:h,analyticsEvents:p,controlPosition:b="content",label:g,jumpOnHover:k})=>{const z=j.useMemo(()=>H(u),[u]),E=b==="footer",y=S(),I=w(x,y),A={controlPosition:E?"bottom":"default",...t,links:z,size:"s",colSizes:{all:12,md:12}},N=W(),f=()=>{var v;if(!o)return null;const i=w(o,y),M=F(i,{name:typeof t.title=="string"?t.title:(v=t.title)==null?void 0:v.text,description:t.text});return T&&U(i)?a.createElement(L,{showFullscreenIcon:D(i)},({className:P,fullscreen:J,...V}={})=>a.createElement(q,{...M,...V,className:r("media",{border:d},P),analyticsEvents:p})):a.createElement(q,{...i,className:r("media",{border:d}),analyticsEvents:p})};return a.createElement("div",{className:r({jumpOnHover:k},h)},g&&a.createElement(O,{...g}),(e||n)&&a.createElement("div",{className:r("wrap",{right:l})},e&&a.createElement("span",{className:r("title",{size:(e==null?void 0:e.size)||"m"})},e==null?void 0:e.text),n&&a.createElement("span",{className:r("afterTitle",{size:(n==null?void 0:n.size)||"m"})},n==null?void 0:n.text),m&&a.createElement("div",{className:r("summary")},m)),s?a.createElement("a",{download:s.download,target:s.target?"_blank":"","aria-hidden":!0,href:s.href,tabIndex:0,rel:"noreferrer"},f()):f(),c&&a.createElement(B,{items:c,className:r("meta-info",{right:l})}),a.createElement("div",{className:r("content",{"no-media":!o,right:l})},a.createElement(R,{icon:I,className:r("wrapper")},a.createElement(_,{...A,titleId:N}))))};G.__docgenInfo={description:"",methods:[],displayName:"LayoutItem",props:{className:{required:!1,tsType:{name:"string"},description:""},controlPosition:{required:!1,tsType:{name:"union",raw:"'content' | 'footer'",elements:[{name:"literal",value:"'content'"},{name:"literal",value:"'footer'"}]},description:"",defaultValue:{value:"'content'",computed:!1}},analyticsEvents:{required:!1,tsType:{name:"union",raw:"AnalyticsEvent | AnalyticsEvent[]",elements:[{name:"intersection",raw:`T & {
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
    target?: boolean;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"download",value:{name:"boolean",required:!1}},{key:"target",value:{name:"boolean",required:!1}}]}},description:""},metaInfo:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},border:{required:!1,tsType:{name:"boolean"},description:""},fullscreen:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"union",raw:"T | ThemedValue<T>",elements:[{name:"PositionedIcon"},{name:"ThemedValue",elements:[{name:"PositionedIcon"}],raw:"ThemedValue<T>"}]},description:""},label:{required:!1,tsType:{name:"TagProps"},description:""},jumpOnHover:{required:!1,tsType:{name:"boolean"},description:""}}};export{G as L};
