import{R as t}from"./iframe-C6zC0JWY.js";import{y as f}from"./utils-COa5hgKc.js";import{B as o}from"./BasicCard-nxFPiCsq.js";import{D as x}from"./Divider-D796mcDr.js";import{T as u}from"./Title-DNY08ugx.js";import"./preload-helper-D6kgxu3v.js";import"./index-B1Tb7oJq.js";import"./keys-C8uU14UN.js";import"./_baseKeys-BvafZClz.js";import"./url-BT4NyOk9.js";import"./index-gwyjDdCf.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-D-ynCiBa.js";import"./blocks-7eDju8sz.js";import"./toString-B3VaV6dK.js";import"./isSymbol-BCi6_KtB.js";import"./Links-C-J6O7ZH.js";import"./Link-DroYc3KT.js";import"./BackLink-BftKMwwN.js";import"./useAnalytics-BgH11C1R.js";import"./Button-DoTeZVnZ.js";import"./common-CW11eopq.js";import"./Icon-m9LFWCOJ.js";import"./EventBroker-C8zSmiuU.js";import"./FileLink-DXMXIzYb.js";import"./url-B328N6bg.js";import"./Label-BidoUNtj.js";import"./Xmark-XMd-IxiL.js";import"./HTML-FPNAWAZl.js";import"./ContentList-KfiJyKRZ.js";import"./Image-D7Mo8T_w.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CYFK4gja.js";import"./v4-Dv1xt2bl.js";import"./Buttons-DT1zg0Dw.js";import"./Button-xRTEgveC.js";import"./addComponentKeysets-D-oJkUEv.js";import"./Link-BmB_iO7G.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-IOPhwf5N.js";import"./Col-BUEU6Ps_.js";import"./CardBase-DaN4E1Dr.js";import"./BackgroundImage-1RKNae2E.js";import"./Tag-BBJSBcv2.js";import"./IconWrapper-BiW127uh.js";import"./ToggleArrow-BzgieM1g.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
