import{R as e,b as u}from"./iframe-BtXJ7g-D.js";import{I as o}from"./Image-B54PSl0e.js";import{H as p}from"./HTML-tsKkxjHV.js";import{T as k}from"./Tag-CixzyKUz.js";const t=u("case-study-card"),n=l=>{const{image:c,title:m,background:d,text:g,highlights:i,labels:s}=l;return e.createElement("div",{className:t(),style:{background:d}},e.createElement("div",{className:t("info")},e.createElement(o,{src:c,className:t("image"),alt:"","aria-hidden":"true"}),e.createElement("h2",{className:`${t("title")} title-font-family`},m),e.createElement("div",{className:t("content")},e.createElement(p,{block:!0},g),e.createElement("ul",{className:t("tags")},s&&s.map((r,a)=>e.createElement("li",{key:a},e.createElement(k,{...r})))))),e.createElement("div",{className:t("highlights")},i&&i.map((r,a)=>e.createElement("div",{style:{background:r.background},className:t("highlight"),key:a},r.kicker&&e.createElement("div",null,r.kicker),e.createElement("div",{className:`${t("highlight-title")} title-font-family`},r.title),r.subtitle&&e.createElement("div",null,r.subtitle)))))},E=e.memo(n);n.__docgenInfo={description:"",methods:[],displayName:"CaseStudyCard",props:{title:{required:!0,tsType:{name:"string"},description:""},image:{required:!0,tsType:{name:"string"},description:""},text:{required:!0,tsType:{name:"string"},description:""},background:{required:!1,tsType:{name:"string"},description:""},highlights:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    kicker?: string;
    title: string;
    subtitle?: string;
    background?: string;
}`,signature:{properties:[{key:"kicker",value:{name:"string",required:!1}},{key:"title",value:{name:"string",required:!0}},{key:"subtitle",value:{name:"string",required:!1}},{key:"background",value:{name:"string",required:!1}}]}}],raw:`{
    kicker?: string;
    title: string;
    subtitle?: string;
    background?: string;
}[]`},description:""},labels:{required:!0,tsType:{name:"Array",elements:[{name:"TagProps"}],raw:"TagProps[]"},description:""}}};export{E as C};
