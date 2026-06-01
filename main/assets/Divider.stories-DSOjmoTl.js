import{R as t}from"./iframe-B7I2hqzv.js";import{y as f}from"./utils-6LdC4FMa.js";import{B as o}from"./BasicCard-kM4XdsK_.js";import{D as x}from"./Divider-HQo3UuxV.js";import{T as u}from"./Title-BJiIGRi8.js";import"./preload-helper-D6kgxu3v.js";import"./index-28Lf_z1r.js";import"./keys-D9xA1eY7.js";import"./_baseKeys-DDCXjV-n.js";import"./url-Gd5BBU2i.js";import"./index-C2F4UEMG.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-Dk2edqYr.js";import"./Content-DCt_BxZF.js";import"./blocks-Db_W-3x_.js";import"./toString-Co6XLNcu.js";import"./isSymbol-BDXtwbB-.js";import"./Links-wTiklFFU.js";import"./Link-DU_qcPWP.js";import"./BackLink-oBQu1RE6.js";import"./useAnalytics-Def-e1Ne.js";import"./Button-DgsqQwv6.js";import"./common-Cq-YiZ69.js";import"./Icon-qX4JuQ6F.js";import"./EventBroker-0m5NzTzk.js";import"./FileLink-CCCPr4OB.js";import"./url-De6eKF2O.js";import"./Label-IGXF9ZNu.js";import"./Xmark-B7Ixf3Xh.js";import"./YFMWrapper-Rwgdsd4s.js";import"./HTML-guRX1my3.js";import"./ContentList-BxK_wzqU.js";import"./Image-BDuflmzg.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-xa_HuFct.js";import"./Buttons-C1AMMJBl.js";import"./Button-CvPfFgwv.js";import"./addComponentKeysets-DyQmTmar.js";import"./Link-CdUfh2C4.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-1Tn3qO0i.js";import"./Col-CdaSCJVG.js";import"./CardBase-DVTUsoNu.js";import"./BackgroundImage-CHYpSFIN.js";import"./RouterLink-CZY4pfqg.js";import"./Tag-CXteKgEr.js";import"./IconWrapper-BMPKlL4m.js";import"./ToggleArrow-Cql3d5ZX.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
