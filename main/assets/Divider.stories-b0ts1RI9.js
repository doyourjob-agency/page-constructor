import{R as t}from"./iframe-DsIvRBIH.js";import{y as f}from"./utils-kfKXhWD0.js";import{B as o}from"./BasicCard-CY9xW281.js";import{D as x}from"./Divider-BUiTcb3s.js";import{T as u}from"./Title-CA1iOV1d.js";import"./preload-helper-D6kgxu3v.js";import"./index-09zu9xUG.js";import"./keys-k_0_16T0.js";import"./_baseKeys-4xgfVOWw.js";import"./url-DOYF0msz.js";import"./index-DVWI0wP-.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-B3jHiR2u.js";import"./Content-BipY20cO.js";import"./blocks-C6eShbO6.js";import"./toString-Dux65Y1K.js";import"./isSymbol-rqyDzZC5.js";import"./Links-DdLWpUCV.js";import"./Link-15h__Dw9.js";import"./BackLink-DEgWKOnL.js";import"./useAnalytics-S1NhdlA-.js";import"./Button-BTltV9vz.js";import"./common-C7lI6S7H.js";import"./Icon-p21x86Gs.js";import"./EventBroker-zAU9DF9H.js";import"./FileLink-Uhb3B5_e.js";import"./url-BH2LUcnh.js";import"./Label-D1FcU6Y5.js";import"./Xmark-CaGqZHVs.js";import"./YFMWrapper-Do95i9jE.js";import"./HTML-B2JX4Kj2.js";import"./ContentList-ULWZWXT9.js";import"./Image-C-WW5wrL.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BiTeT4hg.js";import"./Buttons-aJc48sJ3.js";import"./Button-HCUJnslE.js";import"./addComponentKeysets-j27mL0T_.js";import"./Link-D2mPYwE_.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BRd8KUNw.js";import"./Col-B_u5tSrx.js";import"./CardBase-DH5bsED7.js";import"./BackgroundImage-D5pUaFye.js";import"./RouterLink-B8CHHIS9.js";import"./Tag-BCVW0rmT.js";import"./IconWrapper-ClcQBiug.js";import"./ToggleArrow-CY_goPJP.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
