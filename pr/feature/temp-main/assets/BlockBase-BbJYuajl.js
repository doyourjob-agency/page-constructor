import{b as T,r as m,V as w,R as t}from"./iframe-BNFDR1vq.js";import{A as B}from"./Title-BYvUqroY.js";import{a as C}from"./blocks-GCNXhKQl.js";import{C as F}from"./Col-4Zq0s65E.js";const r=T("block-base"),V=d=>{const{anchor:s,visibility:u,indent:c,backgroundFull:n,selectionColor:i,visible:p,hidden:g,children:y,className:b,resetPaddings:l,qa:v,visibilityFilter:e}=d,a=m.useContext(w),{top:o,bottom:f}=c||(l?{top:"0",bottom:"0"}:{top:"l",bottom:"l"}),k=/^https?:\/\/[^\s/$.?#].[^\s]*$/i.test(n||""),q=C(u),x=m.useMemo(()=>i?{"--selection-bg":i}:void 0,[i]);if(a.length>0&&e&&e.length>0){if(typeof e=="string"){if(!a.includes(e))return null}else if(!e.some(h=>a.includes(h)))return null}return t.createElement(F,{className:r({"reset-paddings":l,indentTop:o,indentBottom:f,...q},b),style:x,hidden:g,visible:p,reset:!0,qa:v},s&&t.createElement(B,{id:s.url,className:r("anchor")}),n&&t.createElement("div",{className:r("background-full",{top:o}),style:k?{backgroundImage:`url(${n})`}:{backgroundColor:n}}),y)};V.__docgenInfo={description:"",methods:[],displayName:"BlockBase",props:{anchor:{required:!1,tsType:{name:"AnchorProps"},description:""},visibility:{required:!1,tsType:{name:"union",raw:"VisibilityPreset | VisibilityMap",elements:[{name:"union",raw:"'mobile' | 'desktop'",elements:[{name:"literal",value:"'mobile'"},{name:"literal",value:"'desktop'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},{name:"boolean"}],raw:"Record<Breakpoint, boolean>"}],raw:"Partial<Record<Breakpoint, boolean>>"}]},description:""},visible:{required:!1,tsType:{name:"GridColumnSize"},description:"@deprecated"},hidden:{required:!1,tsType:{name:"GridColumnSize"},description:"@deprecated"},resetPaddings:{required:!1,tsType:{name:"boolean"},description:"@deprecated"},indent:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"color",value:{name:"string",required:!1}},{key:"image",value:{name:"string",required:!1}},{key:"size",value:{name:"string",required:!1}},{key:"repeat",value:{name:"string",required:!1}},{key:"position",value:{name:"string",required:!1}},{key:"attachment",value:{name:"string",required:!1}},{key:"clip",value:{name:"string",required:!1}},{key:"origin",value:{name:"string",required:!1}},{key:"blendMode",value:{name:"string",required:!1}}]}},{name:"string"},{name:"undefined"}]},description:""},blockUnicorn:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},qa:{required:!1,tsType:{name:"string"},description:""},visibilityFilter:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""}}};export{V as B};
