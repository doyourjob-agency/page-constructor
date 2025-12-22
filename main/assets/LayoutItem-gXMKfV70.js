import{b as F,r as B,E as O,R as n}from"./iframe-BH5ROqPS.js";import{g as L}from"./utils-COU2-ufE.js";import{m as _,F as R,M as x}from"./Media--B8LLE3j.js";import{C as W}from"./Content-D4aB0fiL.js";import{B as H}from"./BackgroundImage-sOoEpdM2.js";import{T as U}from"./Tag-BpZfOcx1.js";import{M as D}from"./MetaInfo-DdvY-SaJ.js";import{I as G}from"./IconWrapper-D2Fx-7aY.js";import{g as u}from"./theme-DxGA_A_W.js";import{u as J}from"./useUniqId-WkwmTkil.js";const K=e=>e==null?void 0:e.map(a=>({theme:"normal",...a})),Q=({dataLens:e,image:a})=>!(e||Array.isArray(a)),X=({youtube:e,videoIframe:a})=>!(e||a),r=F("layout-item"),Y=({title:e,afterTitle:a,summary:c,rightSpace:l=!0,content:{links:d,...t},metaInfo:p,media:m,mediaLink:s,border:g,fullscreen:h,icon:k,className:b,analyticsEvents:y,controlPosition:z="content",label:f,jumpOnHover:E,background:v,backgroundColor:T})=>{const I=B.useMemo(()=>K(d),[d]),A=z==="footer",o=O(),N=u(k,o),M={controlPosition:A?"bottom":"default",...t,links:I,size:"s",colSizes:{all:12,md:12}},P=J(),V=L(u(v,o)||""),q=()=>{var w;if(!m)return null;const i=u(m,o),j=_(i,{name:typeof t.title=="string"?t.title:(w=t.title)==null?void 0:w.text,description:t.text});return h&&Q(i)?n.createElement(R,{showFullscreenIcon:X(i)},({className:C,fullscreen:Z,...S}={})=>n.createElement(x,{...j,...S,className:r("media",{border:g},C),analyticsEvents:y})):n.createElement(x,{...i,className:r("media",{border:g}),analyticsEvents:y})};return n.createElement("div",{className:r({jumpOnHover:E,"with-image":!!(v||T)},b)},n.createElement(H,{className:r("image"),...V,style:{backgroundColor:T}}),f&&n.createElement(U,{...f}),(e||a)&&n.createElement("div",{className:r("wrap",{right:l})},e&&n.createElement("span",{className:r("title",{size:(e==null?void 0:e.size)||"m"})},e==null?void 0:e.text),a&&n.createElement("span",{className:r("afterTitle",{size:(a==null?void 0:a.size)||"m"})},a==null?void 0:a.text),c&&n.createElement("div",{className:r("summary")},c)),s?n.createElement("a",{download:s.download,target:s.target,"aria-hidden":!0,href:s.href,tabIndex:0,rel:"noreferrer"},q()):q(),p&&n.createElement(D,{items:p,className:r("meta-info",{right:l})}),n.createElement("div",{className:r("content",{"no-media":!m,right:l})},n.createElement(G,{icon:N,className:r("wrapper")},n.createElement(W,{...M,titleId:P}))))};Y.__docgenInfo={description:"",methods:[],displayName:"LayoutItem",props:{className:{required:!1,tsType:{name:"string"},description:""},controlPosition:{required:!1,tsType:{name:"union",raw:"'content' | 'footer'",elements:[{name:"literal",value:"'content'"},{name:"literal",value:"'footer'"}]},description:"",defaultValue:{value:"'content'",computed:!1}},analyticsEvents:{required:!1,tsType:{name:"union",raw:"AnalyticsEvent | AnalyticsEvent[]",elements:[{name:"intersection",raw:`T & {
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
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"download",value:{name:"boolean",required:!1}},{key:"target",value:{name:"string",required:!1}}]}},description:""},metaInfo:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},border:{required:!1,tsType:{name:"boolean"},description:""},fullscreen:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"union",raw:"T | ThemedValue<T>",elements:[{name:"PositionedIcon"},{name:"ThemedValue",elements:[{name:"PositionedIcon"}],raw:"ThemedValue<T>"}]},description:""},label:{required:!1,tsType:{name:"TagProps"},description:""},jumpOnHover:{required:!1,tsType:{name:"boolean"},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:""},background:{required:!1,tsType:{name:"union",raw:"T | ThemedValue<T>",elements:[{name:"ImageObjectProps"},{name:"ThemedValue",elements:[{name:"ImageObjectProps"}],raw:"ThemedValue<T>"}]},description:""}}};export{Y as L};
