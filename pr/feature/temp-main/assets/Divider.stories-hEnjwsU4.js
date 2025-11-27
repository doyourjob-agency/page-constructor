import{R as t}from"./iframe-knnjCBya.js";import{y as f}from"./utils-DjkT6rzH.js";import{B as o}from"./BasicCard-DMIvIZGw.js";import{D as x}from"./Divider-BBSuTjso.js";import{T as u}from"./Title-C7tr3_yR.js";import"./preload-helper-D6kgxu3v.js";import"./index-B7iOMSMK.js";import"./keys-BH4fReLe.js";import"./_baseKeys-CaaXIWWX.js";import"./url-B6KX3ikG.js";import"./index-By4nendY.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-CJgf_RBV.js";import"./blocks-Dnmt2fkV.js";import"./toString-DJWjFVqJ.js";import"./isSymbol-CP32HOhc.js";import"./Links-CqZwXQF6.js";import"./Link-U8U3DsAX.js";import"./BackLink-DWdtLOm6.js";import"./useAnalytics-BqEre8hG.js";import"./Button-Bijb94NG.js";import"./common-BKW9FgT_.js";import"./Icon-YuImhV6J.js";import"./EventBroker-QzN2hvUI.js";import"./FileLink-BSxHLQzZ.js";import"./url-DMHiwZfX.js";import"./Label-DadqZYrp.js";import"./Xmark-DR6ho9ku.js";import"./HTML-nL9ElJQ3.js";import"./ContentList-BzHAPIs9.js";import"./Image-BjgDIDaz.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-ksGketgk.js";import"./v4-Dv1xt2bl.js";import"./Buttons-DnZHbxqY.js";import"./Button-D2l_i8UL.js";import"./addComponentKeysets-DiG_ZyyI.js";import"./Link-4z7q8Zct.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BKY8JCL2.js";import"./Col-BDYxuvsk.js";import"./CardBase-B11YyDa_.js";import"./BackgroundImage-DJbTbcrC.js";import"./RouterLink-DwAStJLN.js";import"./Tag-CuaEK6ED.js";import"./IconWrapper-DLwoeusV.js";import"./ToggleArrow-BX2UbuIr.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
