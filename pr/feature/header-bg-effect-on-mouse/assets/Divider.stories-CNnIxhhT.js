import{R as t}from"./iframe-zMz54xqu.js";import{y as f}from"./utils-C9n4u1T3.js";import{B as o}from"./BasicCard-CyBYcGBH.js";import{D as x}from"./Divider-FuWLphdH.js";import{T as u}from"./Title-BSJJj-ZG.js";import"./preload-helper-D6kgxu3v.js";import"./index-DUdExocE.js";import"./keys-Da2csfUK.js";import"./_baseKeys-Dl4oXTpu.js";import"./url-Bx9bLuYz.js";import"./index-Buyj0XGo.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-DXbX5RZX.js";import"./blocks-Bn67i-NM.js";import"./toString-n-KqjTzT.js";import"./isSymbol-khTj-tAM.js";import"./Links-DkKAkSWA.js";import"./Link-Dz6Uq7jg.js";import"./BackLink-CTsuVmYI.js";import"./useAnalytics-Clpb0Cel.js";import"./Button-CKq3vrVJ.js";import"./common-DGoMwkAX.js";import"./Icon-CDoCWAgK.js";import"./EventBroker-4MFqs30S.js";import"./FileLink-D9KQoBUf.js";import"./url-DjubNn5U.js";import"./Label-Bw55jZs-.js";import"./Xmark-Dok5gKJs.js";import"./HTML-DKtdr9Nj.js";import"./ContentList-CQqa5Pse.js";import"./Image-CuUDjG38.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DcsKgRHW.js";import"./v4-Dv1xt2bl.js";import"./Buttons-BSzlML2j.js";import"./Button-kk-JE_ZO.js";import"./addComponentKeysets-xeAv-S9p.js";import"./Link-fBp4ZKOf.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BYV-KVcK.js";import"./Col-CQ9Nz7fM.js";import"./CardBase-BEwKUsPP.js";import"./BackgroundImage-CjDjMu_C.js";import"./RouterLink-DrOWq4qr.js";import"./Tag-D8ypKyFm.js";import"./IconWrapper-DrhskZoQ.js";import"./ToggleArrow-aYtH7ncJ.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
