import{b as k,r as q,R as a}from"./iframe-ClpkpS-U.js";import{A as x}from"./Title-DwmkVtQ6.js";import{a as h}from"./blocks-BqGWC0-M.js";import{C as T}from"./Col-BN0rLLGg.js";const i=k("block-base"),B=s=>{const{anchor:r,visibility:o,indent:m,backgroundFull:e,selectionColor:n,visible:d,hidden:u,children:c,className:p,resetPaddings:t,qa:g}=s,{top:l,bottom:v}=m||(t?{top:"0",bottom:"0"}:{top:"l",bottom:"l"}),b=/^https?:\/\/[^\s/$.?#].[^\s]*$/i.test(e||""),y=h(o),f=q.useMemo(()=>n?{"--selection-bg":n}:void 0,[n]);return a.createElement(T,{className:i({"reset-paddings":t,indentTop:l,indentBottom:v,...y},p),style:f,hidden:u,visible:d,reset:!0,qa:g},r&&a.createElement(x,{id:r.url,className:i("anchor")}),e&&a.createElement("div",{className:i("background-full",{top:l}),style:b?{backgroundImage:`url(${e})`}:{backgroundColor:e}}),c)};B.__docgenInfo={description:"",methods:[],displayName:"BlockBase",props:{anchor:{required:!1,tsType:{name:"AnchorProps"},description:""},visibility:{required:!1,tsType:{name:"union",raw:"VisibilityPreset | VisibilityMap",elements:[{name:"union",raw:"'mobile' | 'desktop'",elements:[{name:"literal",value:"'mobile'"},{name:"literal",value:"'desktop'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},{name:"boolean"}],raw:"Record<Breakpoint, boolean>"}],raw:"Partial<Record<Breakpoint, boolean>>"}]},description:""},visible:{required:!1,tsType:{name:"GridColumnSize"},description:"@deprecated"},hidden:{required:!1,tsType:{name:"GridColumnSize"},description:"@deprecated"},resetPaddings:{required:!1,tsType:{name:"boolean"},description:"@deprecated"},indent:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    top?: IndentValue;
    bottom?: IndentValue;
}`,signature:{properties:[{key:"top",value:{name:"union",raw:"'0' | 'xs' | 's' | 'm' | 'l' | 'xl'",elements:[{name:"literal",value:"'0'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'s'"},{name:"literal",value:"'m'"},{name:"literal",value:"'l'"},{name:"literal",value:"'xl'"}],required:!1}},{key:"bottom",value:{name:"union",raw:"'0' | 'xs' | 's' | 'm' | 'l' | 'xl'",elements:[{name:"literal",value:"'0'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'s'"},{name:"literal",value:"'m'"},{name:"literal",value:"'l'"},{name:"literal",value:"'xl'"}],required:!1}}]}},description:""},backgroundFull:{required:!1,tsType:{name:"string"},description:""},selectionColor:{required:!1,tsType:{name:"string"},description:""},blockBackground:{required:!1,tsType:{name:"union",raw:`| {
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
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"image",value:{name:"string",required:!1}},{key:"size",value:{name:"string",required:!1}},{key:"repeat",value:{name:"string",required:!1}},{key:"position",value:{name:"string",required:!1}},{key:"attachment",value:{name:"string",required:!1}},{key:"clip",value:{name:"string",required:!1}},{key:"origin",value:{name:"string",required:!1}},{key:"blendMode",value:{name:"string",required:!1}}]}},{name:"string"},{name:"undefined"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},qa:{required:!1,tsType:{name:"string"},description:""}}};export{B};
