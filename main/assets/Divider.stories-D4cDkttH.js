import{R as t}from"./iframe-Dn4dd4fN.js";import{y as f}from"./utils-C7g3u1Lg.js";import{B as o}from"./BasicCard-BUSIMZin.js";import{D as x}from"./Divider-uZDsp22s.js";import{T as u}from"./Title-B2tDPzqr.js";import"./preload-helper-D6kgxu3v.js";import"./index-D5fefF9J.js";import"./keys-Hy9YE3ri.js";import"./_baseKeys-pQhq96M0.js";import"./url-9cTbD5Wm.js";import"./index-BgvSCyIH.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-Dk2edqYr.js";import"./Content-CqBPxLsF.js";import"./blocks-n8u2Re3l.js";import"./toString-C3gTiSXi.js";import"./isSymbol-BIF7B-IW.js";import"./Links-CwuEZJEJ.js";import"./Link-R4WIjSGq.js";import"./BackLink-GWTryXdE.js";import"./useAnalytics-D4BBmNYa.js";import"./Button-QmIIMunR.js";import"./common-CmySIBR3.js";import"./Icon-BlGUyE20.js";import"./EventBroker-TZhgsI-S.js";import"./FileLink-e0HfaZOR.js";import"./url-B__XSwZx.js";import"./Label-BxiCPsOC.js";import"./Xmark-Bq_4Nv8n.js";import"./HTML-klkGbjjP.js";import"./ContentList-GHtjX91c.js";import"./Image-BI17hhkz.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CbAaOEPS.js";import"./Buttons-DaeTOQHG.js";import"./Button-Dm07SxKS.js";import"./addComponentKeysets-rjDyK1yi.js";import"./Link-kXzniMqM.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CYXIDCV_.js";import"./Col-xlMaPIez.js";import"./CardBase-Vw7kCTuF.js";import"./BackgroundImage-uggNwtYx.js";import"./RouterLink-BfrQMDyP.js";import"./Tag-BVXSBm6Q.js";import"./IconWrapper-B2m_SnZ9.js";import"./ToggleArrow-BGN3tpsB.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
    </div>`,...(c=(d=m.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const ft=["Default","Sizes"];export{r as Default,m as Sizes,ft as __namedExportsOrder,vt as default};
