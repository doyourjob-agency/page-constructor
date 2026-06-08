import{R as t}from"./iframe-CsPen2Ra.js";import{y as f}from"./utils-acVVLakC.js";import{B as o}from"./BasicCard-BnN2P1G6.js";import{D as x}from"./Divider-LmyaDfNr.js";import{T as u}from"./Title-DSsavG6t.js";import"./preload-helper-D6kgxu3v.js";import"./index-DWXWG3RP.js";import"./keys-BG-y6W2B.js";import"./_baseKeys-CFPzckoT.js";import"./url-D6f4K4jX.js";import"./index-bQCr-a9g.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-CgA5Qmdz.js";import"./blocks-DO6wbHXw.js";import"./toString-dWpxRcpd.js";import"./isSymbol-CJkoRj2R.js";import"./Links-zS11yxzP.js";import"./Link-DNHEOAjZ.js";import"./BackLink-05ZaVUGX.js";import"./useAnalytics-aF7nAqhs.js";import"./Button-D38Bi_1j.js";import"./common-DZHTbqeh.js";import"./Icon-BzLj4FDw.js";import"./EventBroker-CHFAbyD5.js";import"./FileLink-BIKH_G_K.js";import"./url-DJCzHPF1.js";import"./Label-BokJoAUW.js";import"./Xmark-CfPv9R9A.js";import"./YFMWrapper-BWEbQmjM.js";import"./HTML-DntZaN-M.js";import"./ContentList-c3asWqtE.js";import"./Image-C47MEZQu.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-Dss-wGVL.js";import"./Buttons-CzySJvnw.js";import"./Button-Bsbb7pdo.js";import"./addComponentKeysets-CcXZ_HPV.js";import"./Link-DRlUmIKQ.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-B_GkI-4h.js";import"./Col-kLmFsC19.js";import"./CardBase-1K8rzFPZ.js";import"./BackgroundImage-CMwAkaRZ.js";import"./RouterLink-DY_umuyR.js";import"./Tag-BgH1A0Qr.js";import"./IconWrapper-DnqDyCRr.js";import"./ToggleArrow-CVxyEG2K.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
