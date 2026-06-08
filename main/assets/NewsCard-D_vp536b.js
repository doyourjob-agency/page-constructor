import{b as m,R as r}from"./iframe-CJC4n4zl.js";import{I as n}from"./Image-CqEwgCP6.js";const e=m("news-card"),l=({image:s,square:i,links:a,text:c})=>r.createElement("div",{className:e({square:i})},r.createElement(n,{className:e("image"),src:s,alt:"image"}),r.createElement("div",{className:e("content")},r.createElement("div",{className:e("text")},c),a!=null&&a.length?r.createElement("div",{className:e("links")},a==null?void 0:a.map((t,o)=>r.createElement("a",{className:e("link"),href:t.url,key:o,target:"_blank",rel:"noopener noreferrer"},r.createElement(n,{className:e("icon"),containerClassName:e("icon-container"),src:t.icon,alt:"icon"})))):null));l.__docgenInfo={description:"",methods:[],displayName:"NewsCard",props:{image:{required:!0,tsType:{name:"string"},description:""},square:{required:!1,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},links:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    icon: string;
    url: string;
}`,signature:{properties:[{key:"icon",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!0}}]}}],raw:`{
    icon: string;
    url: string;
}[]`},description:""}}};export{l as N};
