import{b as V,r as C,E as j,R as a}from"./iframe-DrYIHUJm.js";import{m as S,F,M as f}from"./Media-BNSojrJ-.js";import{C as L}from"./Content-BLl0ctaB.js";import{T as O}from"./Tag-BWm9i--C.js";import{M as _}from"./MetaInfo-BkA6gwUo.js";import{I as B}from"./IconWrapper-0HIlPFPF.js";import{g as v}from"./theme-DXny39Nf.js";import{u as R}from"./useUniqId-_yv7aIBZ.js";const W=e=>e==null?void 0:e.map(n=>({theme:"normal",...n})),H=({dataLens:e,image:n})=>!(e||Array.isArray(n)),U=({youtube:e,videoIframe:n})=>!(e||n),t=V("layout-item"),D=({title:e,afterTitle:n,summary:m,rightSpace:i=!0,content:{links:o,...r},metaInfo:u,media:l,border:c,fullscreen:q,icon:T,className:x,analyticsEvents:d,controlPosition:w="content",label:p,jumpOnHover:z})=>{const h=C.useMemo(()=>W(o),[o]),k=w==="footer",g=j(),E=v(T,g),A={controlPosition:k?"bottom":"default",...r,links:h,size:"s",colSizes:{all:12,md:12}},I=R(),b=()=>{var y;if(!l)return null;const s=v(l,g),N=S(s,{name:typeof r.title=="string"?r.title:(y=r.title)==null?void 0:y.text,description:r.text});return q&&H(s)?a.createElement(F,{showFullscreenIcon:U(s)},({className:M,fullscreen:G,...P}={})=>a.createElement(f,{...N,...P,className:t("media",{border:c},M),analyticsEvents:d})):a.createElement(f,{...s,className:t("media",{border:c}),analyticsEvents:d})};return a.createElement("div",{className:t({jumpOnHover:z},x)},p&&a.createElement(O,{...p}),(e||n)&&a.createElement("div",{className:t("wrap",{right:i})},e&&a.createElement("span",{className:t("title",{size:(e==null?void 0:e.size)||"m"})},e==null?void 0:e.text),n&&a.createElement("span",{className:t("afterTitle",{size:(n==null?void 0:n.size)||"m"})},n==null?void 0:n.text),m&&a.createElement("div",{className:t("summary")},m)),b(),u&&a.createElement(_,{items:u,className:t("meta-info",{right:i})}),a.createElement("div",{className:t("content",{"no-media":!l,right:i})},a.createElement(B,{icon:E,className:t("wrapper")},a.createElement(L,{...A,titleId:I}))))};D.__docgenInfo={description:"",methods:[],displayName:"LayoutItem",props:{className:{required:!1,tsType:{name:"string"},description:""},controlPosition:{required:!1,tsType:{name:"union",raw:"'content' | 'footer'",elements:[{name:"literal",value:"'content'"},{name:"literal",value:"'footer'"}]},description:"",defaultValue:{value:"'content'",computed:!1}},analyticsEvents:{required:!1,tsType:{name:"union",raw:"AnalyticsEvent | AnalyticsEvent[]",elements:[{name:"intersection",raw:`T & {
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
}`,signature:{properties:[{key:"text",value:{name:"string",required:!1}},{key:"size",value:{name:"union",raw:"TextSize | 'xl'",elements:[{name:"union",raw:"'xs' | 's' | 'm' | 'l'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'s'"},{name:"literal",value:"'m'"},{name:"literal",value:"'l'"}]},{name:"literal",value:"'xl'"}],required:!1}}]}},description:""},summary:{required:!1,tsType:{name:"string"},description:""},rightSpace:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},content:{required:!0,tsType:{name:"Omit",elements:[{name:"ContentBlockProps"},{name:"union",raw:"'colSizes' | 'centered' | 'size'",elements:[{name:"literal",value:"'colSizes'"},{name:"literal",value:"'centered'"},{name:"literal",value:"'size'"}]}],raw:"Omit<ContentBlockProps, 'colSizes' | 'centered' | 'size'>"},description:""},media:{required:!1,tsType:{name:"union",raw:"T | ThemedValue<T>",elements:[{name:"MediaProps"},{name:"ThemedValue",elements:[{name:"MediaProps"}],raw:"ThemedValue<T>"}]},description:""},metaInfo:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},border:{required:!1,tsType:{name:"boolean"},description:""},fullscreen:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"union",raw:"T | ThemedValue<T>",elements:[{name:"PositionedIcon"},{name:"ThemedValue",elements:[{name:"PositionedIcon"}],raw:"ThemedValue<T>"}]},description:""},label:{required:!1,tsType:{name:"TagProps"},description:""},jumpOnHover:{required:!1,tsType:{name:"boolean"},description:""}}};export{D as L};
