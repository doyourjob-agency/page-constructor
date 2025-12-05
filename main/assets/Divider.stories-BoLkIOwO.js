import{R as t}from"./iframe-lwF_TUb2.js";import{y as f}from"./utils-DnG2Jdry.js";import{B as o}from"./BasicCard-nn2Lg0T8.js";import{D as x}from"./Divider-CBkZjzOI.js";import{T as u}from"./Title-Bkkj1uwB.js";import"./preload-helper-D6kgxu3v.js";import"./index-BDzz3Huh.js";import"./keys-B34iRZe3.js";import"./_baseKeys-CKKaPUBf.js";import"./url-CYRbgWSf.js";import"./index-yKNTp-CO.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-BooZBipa.js";import"./blocks-D1yIH0XN.js";import"./toString-BxwaYESF.js";import"./isSymbol-DJknhFKJ.js";import"./Links-B49fxEJ5.js";import"./Link-Cg11BRpx.js";import"./BackLink-BU-sHxMu.js";import"./useAnalytics-CbHpVPbi.js";import"./Button-CElDL3dr.js";import"./common-w8tC0mA1.js";import"./Icon-DIZ74QW4.js";import"./EventBroker-B4daA3DE.js";import"./FileLink-DQESNXUG.js";import"./url-D56D9bf7.js";import"./Label-CtD6-Jtl.js";import"./Xmark-CIg2tIWO.js";import"./HTML-aU4Fx-zm.js";import"./ContentList-CyqRladj.js";import"./Image-DCtnjw4Z.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-_Ypcrha4.js";import"./v4-Dv1xt2bl.js";import"./Buttons-WPKK6NNO.js";import"./Button-BB6b2KPr.js";import"./addComponentKeysets-BT6Lq5mZ.js";import"./Link-1gOQeIwr.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CdWjBpkc.js";import"./Col-DQXI5l0k.js";import"./CardBase-A7D8M8MH.js";import"./BackgroundImage-CzJm2y8T.js";import"./RouterLink-9VjfWf3W.js";import"./Tag-Dlo51F6w.js";import"./IconWrapper-XyebX9A3.js";import"./ToggleArrow-BhppQjVP.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
