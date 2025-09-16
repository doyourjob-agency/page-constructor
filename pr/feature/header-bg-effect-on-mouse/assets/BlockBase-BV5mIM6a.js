import{b as y,R as a}from"./iframe-zMz54xqu.js";import{A as f}from"./Title-BSJJj-ZG.js";import{a as k}from"./blocks-Bn67i-NM.js";import{C as q}from"./Col-CQ9Nz7fM.js";const n=y("block-base"),x=l=>{const{anchor:i,visibility:s,indent:o,backgroundFull:e,visible:m,hidden:d,children:u,className:c,resetPaddings:r,qa:p}=l,{top:t,bottom:g}=o||(r?{top:"0",bottom:"0"}:{top:"l",bottom:"l"}),v=/^https?:\/\/[^\s/$.?#].[^\s]*$/i.test(e||""),b=k(s);return a.createElement(q,{className:n({"reset-paddings":r,indentTop:t,indentBottom:g,...b},c),hidden:d,visible:m,reset:!0,qa:p},i&&a.createElement(f,{id:i.url,className:n("anchor")}),e&&a.createElement("div",{className:n("background-full",{top:t}),style:v?{backgroundImage:`url(${e})`}:{backgroundColor:e}}),u)};x.__docgenInfo={description:"",methods:[],displayName:"BlockBase",props:{anchor:{required:!1,tsType:{name:"AnchorProps"},description:""},visibility:{required:!1,tsType:{name:"union",raw:"VisibilityPreset | VisibilityMap",elements:[{name:"union",raw:"'mobile' | 'desktop'",elements:[{name:"literal",value:"'mobile'"},{name:"literal",value:"'desktop'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},{name:"boolean"}],raw:"Record<Breakpoint, boolean>"}],raw:"Partial<Record<Breakpoint, boolean>>"}]},description:""},visible:{required:!1,tsType:{name:"GridColumnSize"},description:"@deprecated"},hidden:{required:!1,tsType:{name:"GridColumnSize"},description:"@deprecated"},resetPaddings:{required:!1,tsType:{name:"boolean"},description:"@deprecated"},indent:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    top?: IndentValue;
    bottom?: IndentValue;
}`,signature:{properties:[{key:"top",value:{name:"union",raw:"'0' | 'xs' | 's' | 'm' | 'l' | 'xl'",elements:[{name:"literal",value:"'0'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'s'"},{name:"literal",value:"'m'"},{name:"literal",value:"'l'"},{name:"literal",value:"'xl'"}],required:!1}},{key:"bottom",value:{name:"union",raw:"'0' | 'xs' | 's' | 'm' | 'l' | 'xl'",elements:[{name:"literal",value:"'0'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'s'"},{name:"literal",value:"'m'"},{name:"literal",value:"'l'"},{name:"literal",value:"'xl'"}],required:!1}}]}},description:""},backgroundFull:{required:!1,tsType:{name:"string"},description:""},blockBackground:{required:!1,tsType:{name:"union",raw:`| {
      color?: string;
      image?: string;
      size?: string;
      repeat?: string;
      position?: string;
      attachment?: string;
      clip?: string;
      origin?: string;
      blendMode?: string;
  }
| string
| undefined`,elements:[{name:"signature",type:"object",raw:`{
    color?: string;
    image?: string;
    size?: string;
    repeat?: string;
    position?: string;
    attachment?: string;
    clip?: string;
    origin?: string;
    blendMode?: string;
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"image",value:{name:"string",required:!1}},{key:"size",value:{name:"string",required:!1}},{key:"repeat",value:{name:"string",required:!1}},{key:"position",value:{name:"string",required:!1}},{key:"attachment",value:{name:"string",required:!1}},{key:"clip",value:{name:"string",required:!1}},{key:"origin",value:{name:"string",required:!1}},{key:"blendMode",value:{name:"string",required:!1}}]}},{name:"string"},{name:"undefined"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},qa:{required:!1,tsType:{name:"string"},description:""}}};export{x as B};
