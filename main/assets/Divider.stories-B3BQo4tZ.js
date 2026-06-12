import{R as t}from"./iframe-DwZ_d7N5.js";import{y as f}from"./utils-BgbrRS89.js";import{B as o}from"./BasicCard-CekegpdQ.js";import{D as x}from"./Divider-A1Cq5iLL.js";import{T as u}from"./Title-DqfWm7xq.js";import"./preload-helper-D6kgxu3v.js";import"./index-QMOt1Lcr.js";import"./keys-C_gO-54-.js";import"./_baseKeys-Dc5robJM.js";import"./url-qdWJv-TE.js";import"./index-Dlp42NMQ.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-mZ6Kvw6t.js";import"./blocks-lm1QTqet.js";import"./toString-B6vUhFnz.js";import"./isSymbol-Cn7_DYlT.js";import"./Links-B4sRTjdK.js";import"./Link-BRISevF6.js";import"./BackLink-DvO0Ppo5.js";import"./useAnalytics-gPM0bNwC.js";import"./Button-JYcByyyN.js";import"./common-he1TUoFk.js";import"./Icon-Bo-lR_z6.js";import"./EventBroker-fy2C-8Nu.js";import"./FileLink-Cxw7oNlR.js";import"./url-BdKQMpfp.js";import"./Label-D4UqYYWK.js";import"./Xmark-C6Oitsqs.js";import"./YFMWrapper-COMXtKVB.js";import"./HTML-B2yi_pSo.js";import"./ContentList-BLVEG0xc.js";import"./Image-DbmTVjXE.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CoeirOhA.js";import"./Buttons-Dl4VzzmF.js";import"./Button-DuGQThWg.js";import"./addComponentKeysets-B77tT2sp.js";import"./Link-Hmu6m8Xw.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-OGLgdk8W.js";import"./Col-CfsDlH74.js";import"./CardBase-CZHUI-XA.js";import"./BackgroundImage-B49VepKs.js";import"./RouterLink-UGAb3oYW.js";import"./Tag-CvUUOQtr.js";import"./IconWrapper-C1Se0NQ3.js";import"./ToggleArrow-BGCO3-x4.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
        <Title title={data.default.title} />
        <div style={{
    maxWidth: '400px',
    marginTop: '10px'
  }}>
            <BasicCard {...args} />
            <Divider />
            <BasicCard {...args} />
        </div>
    </div>`,...(n=(p=r.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};var l,d,c;m.parameters={...m.parameters,docs:{...(l=m.parameters)==null?void 0:l.docs,source:{originalSource:`args => <div>
        {data.sizes.items.map(item => <div key={item}>
                <Title title={getSizeTitle(item.toUpperCase())} />
                <div style={{
      maxWidth: '400px',
      marginTop: '10px',
      marginBottom: '24px'
    }}>
                    <BasicCard {...args} />
                    <Divider size={item as DividerSize} />
                    <BasicCard {...args} />
                </div>
            </div>)}
    </div>`,...(c=(d=m.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const gt=["Default","Sizes"];export{r as Default,m as Sizes,gt as __namedExportsOrder,ft as default};
