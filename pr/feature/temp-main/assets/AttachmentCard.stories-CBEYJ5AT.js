import{R as e}from"./iframe-DRJB9DOi.js";import{C as A}from"./CardLayout-HdyjGVsD.js";import{A as a}from"./AttachmentCard-CsBcMCGq.js";const f={title:"Card with border {{border}}"},_={content:{label:{text:"Label",backgroundColor:"#C7E5F7",textColor:"#000"}}},l={withBorder:f,default:{content:{url:"#",title:"Q1 2025",date:"May 20, 2025",time:"5:00 AM (PDT) / 8:00 AM (EDT) / 2:00 PM (CET)",column:!0,items:[{name:"Earnings release",icon:{light:"https://doyourjob-agency.github.io/page-constructor/pr/feature/temp-main/story-assets/icon_1_light.svg",dark:"https://doyourjob-agency.github.io/page-constructor/pr/feature/temp-main/story-assets/icon_1_dark.svg"},link:"https://example.com",download:!0},{name:"Supplementary slides",icon:"https://doyourjob-agency.github.io/page-constructor/pr/feature/temp-main/story-assets/icon_2_light.svg",link:"https://example.com"},{name:"Letter to shareholders",icon:"document",link:"https://example.com",target:"_blank"}]}},withLabel:_},i=t=>l.withBorder.title.replace("{{border}}",t),L={component:a,title:"Components/Cards/AttachmentCard"},E=t=>e.createElement("div",{style:{maxWidth:"400px"}},e.createElement(a,{...t})),T=t=>e.createElement("div",{style:{display:"flex"}},e.createElement("div",{style:{maxWidth:"400px",padding:"0 8px"}},e.createElement(a,{...t,title:i("shadow")})),e.createElement("div",{style:{maxWidth:"400px",padding:"0 8px"}},e.createElement(a,{...t,border:"line",title:i("line")})),e.createElement("div",{style:{maxWidth:"400px",padding:"0 8px"}},e.createElement(a,{...t,border:"none",title:i("none")}))),w=t=>e.createElement(A,{colSizes:{all:12,md:4,lg:3}},e.createElement(a,{...t}),e.createElement(a,{...t}),e.createElement(a,{...t}),e.createElement(a,{...t})),r=E.bind({}),o=E.bind({}),n=T.bind({}),d=w.bind({}),s=l.default.content;r.args=s;o.args={...s,...l.withLabel.content};n.args=s;d.args=s;var c,m,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => <div style={{
  maxWidth: '400px'
}}>
        <AttachmentCard {...args} />
    </div>`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,g,u;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`args => <div style={{
  maxWidth: '400px'
}}>
        <AttachmentCard {...args} />
    </div>`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var x,y,C;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`args => <div style={{
  display: 'flex'
}}>
        <div style={{
    maxWidth: '400px',
    padding: '0 8px'
  }}>
            <AttachmentCard {...args} title={getCardWithBorderTitle('shadow')} />
        </div>
        <div style={{
    maxWidth: '400px',
    padding: '0 8px'
  }}>
            <AttachmentCard {...args} border="line" title={getCardWithBorderTitle('line')} />
        </div>
        <div style={{
    maxWidth: '400px',
    padding: '0 8px'
  }}>
            <AttachmentCard {...args} border="none" title={getCardWithBorderTitle('none')} />
        </div>
    </div>`,...(C=(y=n.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var b,v,W;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`args => <CardLayout colSizes={{
  all: 12,
  md: 4,
  lg: 3
}}>
        <AttachmentCard {...args} />
        <AttachmentCard {...args} />
        <AttachmentCard {...args} />
        <AttachmentCard {...args} />
    </CardLayout>`,...(W=(v=d.parameters)==null?void 0:v.docs)==null?void 0:W.source}}};const B=["Default","WithLabel","WithBorder","WithCardLayout"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:r,WithBorder:n,WithCardLayout:d,WithLabel:o,__namedExportsOrder:B,default:L},Symbol.toStringTag,{value:"Module"}));export{j as A};
