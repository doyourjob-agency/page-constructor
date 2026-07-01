import{b as O,r as L,E as _,R as e}from"./iframe-j8XXzfPt.js";import{g as R}from"./utils-COU2-ufE.js";import{m as W,F as H,M as h}from"./Media-D1a2aNdS.js";import{C as U}from"./Content-BzSnoo_g.js";import{B as D}from"./BackgroundImage-B0ebdAvu.js";import{T as k}from"./Tag-Cj4K12rg.js";import{M as G}from"./MetaInfo-BSKINZDE.js";import{I as J}from"./IconWrapper-dNYWwdtr.js";import{g as d}from"./theme-DZEJiNUZ.js";import{u as K}from"./useUniqId-CrdzBq84.js";const Q=n=>n==null?void 0:n.map(a=>({theme:"normal",...a})),X=({dataLens:n,image:a})=>!(n||Array.isArray(a)),Y=({youtube:n,videoIframe:a})=>!(n||a),r=O("layout-item"),Z=({title:n,afterTitle:a,summary:p,rightSpace:m=!0,content:{links:g,...s},metaInfo:y,media:o,mediaLink:i,border:f,fullscreen:E,icon:z,className:b,analyticsEvents:v,controlPosition:I="content",label:l,jumpOnHover:A,background:T,backgroundColor:q,paddingBottom:P})=>{const N=L.useMemo(()=>Q(g),[g]),M=I==="footer",u=_(),V=d(z,u),j={controlPosition:M?"bottom":"default",...s,links:N,size:"s",colSizes:{all:12,md:12}},C=K(),S=R(d(T,u)||""),w=()=>{var x;if(!o)return null;const t=d(o,u),c=W(t,{name:typeof s.title=="string"?s.title:(x=s.title)==null?void 0:x.text,description:s.text});return E&&X(t)?e.createElement(H,{showFullscreenIcon:Y(t)},({className:B,fullscreen:$,...F}={})=>e.createElement(h,{...c,...F,className:r("media",{border:f},B),analyticsEvents:v})):e.createElement(h,{...t,className:r("media",{border:f}),analyticsEvents:v})};return e.createElement("div",{className:r({jumpOnHover:A,paddingBottom:P,"with-image":!!(T||q)},b)},e.createElement(D,{className:r("image"),...S,style:{backgroundColor:q}}),l&&e.createElement("div",{className:r("labels")},Array.isArray(l)?l.map((t,c)=>e.createElement(k,{key:c,...t})):e.createElement(k,{...l})),(n||a)&&e.createElement("div",{className:r("wrap",{right:m})},n&&e.createElement("span",{className:r("title",{size:(n==null?void 0:n.size)||"m"})},n==null?void 0:n.text),a&&e.createElement("span",{className:r("afterTitle",{size:(a==null?void 0:a.size)||"m"})},a==null?void 0:a.text),p&&e.createElement("div",{className:r("summary")},p)),i?e.createElement("a",{download:i.download,target:i.target,"aria-hidden":!0,href:i.href,tabIndex:0,rel:"noreferrer"},w()):w(),y&&e.createElement(G,{items:y,className:r("meta-info",{right:m})}),e.createElement("div",{className:r("content",{"no-media":!o,right:m})},e.createElement(J,{icon:V,className:r("wrapper")},e.createElement(U,{...j,titleId:C}))))};Z.__docgenInfo={description:"",methods:[],displayName:"LayoutItem",props:{className:{required:!1,tsType:{name:"string"},description:""},controlPosition:{required:!1,tsType:{name:"union",raw:"'content' | 'footer'",elements:[{name:"literal",value:"'content'"},{name:"literal",value:"'footer'"}]},description:"",defaultValue:{value:"'content'",computed:!1}},analyticsEvents:{required:!1,tsType:{name:"union",raw:"AnalyticsEvent | AnalyticsEvent[]",elements:[{name:"intersection",raw:`T & {
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
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"download",value:{name:"boolean",required:!1}},{key:"target",value:{name:"string",required:!1}}]}},description:""},metaInfo:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},border:{required:!1,tsType:{name:"boolean"},description:""},fullscreen:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"union",raw:"T | ThemedValue<T>",elements:[{name:"PositionedIcon"},{name:"ThemedValue",elements:[{name:"PositionedIcon"}],raw:"ThemedValue<T>"}]},description:""},label:{required:!1,tsType:{name:"union",raw:"TagProps | TagProps[]",elements:[{name:"TagProps"},{name:"Array",elements:[{name:"TagProps"}],raw:"TagProps[]"}]},description:""},jumpOnHover:{required:!1,tsType:{name:"boolean"},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:""},background:{required:!1,tsType:{name:"union",raw:"T | ThemedValue<T>",elements:[{name:"ImageObjectProps"},{name:"ThemedValue",elements:[{name:"ImageObjectProps"}],raw:"ThemedValue<T>"}]},description:""},paddingBottom:{required:!1,tsType:{name:"union",raw:"'s' | 'm' | 'l' | 'xl'",elements:[{name:"literal",value:"'s'"},{name:"literal",value:"'m'"},{name:"literal",value:"'l'"},{name:"literal",value:"'xl'"}]},description:""}}};export{Z as L};
