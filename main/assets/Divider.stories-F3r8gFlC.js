import{R as t}from"./iframe-J-weMzc9.js";import{y as f}from"./utils-CCOKvISZ.js";import{B as o}from"./BasicCard-cdjuEhSP.js";import{D as x}from"./Divider-YWfISZm6.js";import{T as u}from"./Title-CqjvFdy6.js";import"./preload-helper-D6kgxu3v.js";import"./index-DQFL3gXP.js";import"./keys-CK_CIUx8.js";import"./_baseKeys-CS8-qjkA.js";import"./url-DvbJ7VUN.js";import"./index-Df84qIUK.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-DtPNvQ3g.js";import"./blocks-DdeoDQdr.js";import"./toString-iEOexCeB.js";import"./isSymbol-z4aBTxQV.js";import"./Links-DvdYzyZy.js";import"./Link-ej3qH_dA.js";import"./BackLink-Bt3nZc-u.js";import"./useAnalytics-CoDZ4jXU.js";import"./Button-DHNVAKiQ.js";import"./common-l_kXMKf5.js";import"./Icon-CHEQqTIQ.js";import"./EventBroker-CmlhvPia.js";import"./FileLink-JnJik3jX.js";import"./url-Byt-LGRW.js";import"./Label-DcyH36Ei.js";import"./Xmark-B5uFO6hM.js";import"./HTML-k3JUy9yZ.js";import"./ContentList-Ckr5m8jg.js";import"./Image-D01qa9Dw.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DHNvxIgL.js";import"./v4-Dv1xt2bl.js";import"./Buttons-B26Rce8A.js";import"./Button-H_feF6cm.js";import"./addComponentKeysets-CSTfvXy2.js";import"./Link-BnjOlPUE.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-Cb3AJCZh.js";import"./Col-D6kFNWIr.js";import"./CardBase-B0Vdm-Na.js";import"./BackgroundImage-DV3H87TZ.js";import"./RouterLink-CFWURavi.js";import"./Tag-Cazz1xz7.js";import"./IconWrapper-DiRp2B_C.js";import"./ToggleArrow-CDIQmPme.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
