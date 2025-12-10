import{R as t}from"./iframe-YaCCHtJx.js";import{y as f}from"./utils-CP7qht-G.js";import{B as o}from"./BasicCard-D7KMOUIf.js";import{D as x}from"./Divider-C976WoDC.js";import{T as u}from"./Title-15lSqPWm.js";import"./preload-helper-D6kgxu3v.js";import"./index-Dq5vC0ed.js";import"./keys-BYsMDIh9.js";import"./_baseKeys-BqHYAuIh.js";import"./url-D2WT_Gkb.js";import"./index-IVGk487H.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-G-bWNlNi.js";import"./blocks-CDo1niYo.js";import"./toString-DrCtx1M8.js";import"./isSymbol-BLDT9LKs.js";import"./Links-DcrVWOwJ.js";import"./Link-C73DN__S.js";import"./BackLink-BNA4PvYK.js";import"./useAnalytics-CNl2La2o.js";import"./Button-Doubhvrf.js";import"./common-DvSTRHZM.js";import"./Icon-Cxa_aOe6.js";import"./EventBroker-Dmk_i2tg.js";import"./FileLink-DeuDatrG.js";import"./url-BcXrWxbg.js";import"./Label-Bzr0VELA.js";import"./Xmark-BsC8s8HD.js";import"./HTML-1U1PXP06.js";import"./ContentList-BRkPxvt3.js";import"./Image-D118hOMZ.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DlZxOOqq.js";import"./v4-Dv1xt2bl.js";import"./Buttons-DOZY57G_.js";import"./Button-Bs2Lah6j.js";import"./addComponentKeysets-aahiAtxc.js";import"./Link-B0aFjGRu.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-B35aQtJ3.js";import"./Col-S8SHQmbC.js";import"./CardBase-PtDPTRvq.js";import"./BackgroundImage-CfQ1uwrq.js";import"./RouterLink-D3hodCK6.js";import"./Tag-C91QI9LT.js";import"./IconWrapper-DWcT0fX4.js";import"./ToggleArrow-B5Dt2xg-.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
