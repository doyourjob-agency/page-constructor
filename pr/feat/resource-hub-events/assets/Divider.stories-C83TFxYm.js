import{R as t}from"./iframe-B_2GCHMz.js";import{y as f}from"./utils-D7X04wdN.js";import{B as o}from"./BasicCard-DfE3Wq1x.js";import{D as x}from"./Divider-DIjVLh6c.js";import{T as u}from"./Title-NiX21CYX.js";import"./preload-helper-D6kgxu3v.js";import"./index-DtwuUbib.js";import"./keys-Cr1RPz-n.js";import"./_baseKeys-Jf5sQAuS.js";import"./url-BYYE7QWx.js";import"./index-DBXseiTW.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-CJhNTgSj.js";import"./blocks-Cpkzpm5l.js";import"./toString-DLtxlRtr.js";import"./isSymbol-CK3ml3_d.js";import"./Links-Beosy2Ab.js";import"./Link-HGJ7JMeh.js";import"./BackLink-CzTQCEjf.js";import"./useAnalytics-DxnFxV8Y.js";import"./Button-2uHqME-q.js";import"./common-cgdtqQ2q.js";import"./Icon-DcCZpznb.js";import"./EventBroker-CU1HVLId.js";import"./FileLink-JpcDP-hz.js";import"./url-Bq6ffBtb.js";import"./Label-Ga1SqY5k.js";import"./Xmark-BZ3ilrA9.js";import"./HTML-CIgsYqx5.js";import"./ContentList-BdiCjXUW.js";import"./Image-DrSCJwkr.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DBvKk8Km.js";import"./v4-Dv1xt2bl.js";import"./Buttons-Dw0X_s9k.js";import"./Button-2rxJJNx9.js";import"./addComponentKeysets-BBp9Fqws.js";import"./Link-D_Lq-bQt.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CJF-gYqG.js";import"./Col-D_Knwouz.js";import"./CardBase-BvYPlY61.js";import"./BackgroundImage-BMlKMJO7.js";import"./RouterLink-C-BEK4EI.js";import"./Tag-Sj-vEDFD.js";import"./IconWrapper-CZ9xpj2c.js";import"./ToggleArrow-BtdK-Err.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
