import{R as n}from"./iframe-DntpPZMo.js";import{m as c,y as W}from"./utils-Baep1aRn.js";import{C}from"./Card-CZQN-_Eh.js";const _={content:{service:{slug:"ai-compute",name:"AI Compute"}}},w={content:{border:"line"}},L={content:{label:{text:"Label",backgroundColor:"#C7E5F7",textColor:"#000"},summary:"This is a summary text that provides additional information about the card content."}},o={default:{content:{header:{image:"https://doyourjob-agency.github.io/page-constructor/main/story-assets/img_8-12_light.png",hoverImage:"https://doyourjob-agency.github.io/page-constructor/main/story-assets/img_6-12_light.png",title:"<p>Infrastructure &amp; Network</p>"},text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}},withService:_,withBorder:w,withLabel:L},T={component:C,title:"Components/Cards/Card",args:c.args,argTypes:c.argTypes},s=S=>n.createElement("div",{style:{maxWidth:"400px",margin:"0 auto"}},n.createElement(C,{...S})),e=s.bind({}),t=s.bind({}),r=s.bind({}),a=s.bind({}),i={...o.default.content,text:W(o.default.content.text)};e.args=i;t.args={...i,...o.withLabel.content};r.args={...o.withService.content,...i};a.args={...o.withBorder.content,...i};var d,m,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`args => <div style={{
  maxWidth: '400px',
  margin: '0 auto'
}}>
        <Card {...args} />
    </div>`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var l,p,g;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => <div style={{
  maxWidth: '400px',
  margin: '0 auto'
}}>
        <Card {...args} />
    </div>`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,b,x;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`args => <div style={{
  maxWidth: '400px',
  margin: '0 auto'
}}>
        <Card {...args} />
    </div>`,...(x=(b=r.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var v,f,y;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`args => <div style={{
  maxWidth: '400px',
  margin: '0 auto'
}}>
        <Card {...args} />
    </div>`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const B=["Default","WithLabel","WithService","WithBorder"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:e,WithBorder:a,WithLabel:t,WithService:r,__namedExportsOrder:B,default:T},Symbol.toStringTag,{value:"Module"}));export{q as C};
