import{R as t}from"./iframe-D12rZWlV.js";import{y as f}from"./utils-Mx7qeerD.js";import{B as o}from"./BasicCard-SfkUiSRn.js";import{D as x}from"./Divider-B_iuQ7yU.js";import{T as u}from"./Title-DBYFLOo_.js";import"./preload-helper-D6kgxu3v.js";import"./index-BLgOjUrQ.js";import"./keys-BTdEciwm.js";import"./_baseKeys-CmqfC8g4.js";import"./url-DB3p_sgE.js";import"./index-DvguyUyK.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-a5GfZwtQ.js";import"./blocks-DPKHgWjq.js";import"./toString-DCu01uSQ.js";import"./isSymbol-BfAV80_-.js";import"./Links-C4TcKx24.js";import"./Link-M7qaPcxE.js";import"./BackLink-BHPQlNy2.js";import"./useAnalytics-CIdD9QP9.js";import"./Button-CGW6jm2X.js";import"./common-C5TlWv2X.js";import"./Icon-BhSvBsKt.js";import"./EventBroker-DDoZgFR1.js";import"./FileLink-DzI6zYf7.js";import"./url-CKhhtf6T.js";import"./Label-DP_lpOH4.js";import"./Xmark-BWb2YDIf.js";import"./HTML-DnSlRLi0.js";import"./ContentList-D_SXBEHC.js";import"./Image-29LoLWFa.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-C8_f31AE.js";import"./v4-Dv1xt2bl.js";import"./Buttons-CqvMMcMV.js";import"./Button-B_-xbKov.js";import"./addComponentKeysets-CXAT8bue.js";import"./Link-jkvaWPeY.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-D486ELoY.js";import"./Col-DrMP3fcH.js";import"./CardBase-Dum2q_RC.js";import"./BackgroundImage-Sb33Ar8C.js";import"./RouterLink-B3C-AYJe.js";import"./Tag-BHhiNtLL.js";import"./IconWrapper-Dcgd0AvR.js";import"./ToggleArrow-CLqlb6Dn.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
