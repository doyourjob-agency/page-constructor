import{R as t}from"./iframe-DUfhjinL.js";import{y as f}from"./utils-CO-H25t1.js";import{B as o}from"./BasicCard--lIzBfFE.js";import{D as x}from"./Divider-BMO8Znwg.js";import{T as u}from"./Title-B6LcBteM.js";import"./preload-helper-D6kgxu3v.js";import"./index-DQBpqXq9.js";import"./keys-BZWMgxx6.js";import"./_baseKeys-CZidJZpY.js";import"./url-CNSybm77.js";import"./index-BMreLFb-.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-BdbSeJTG.js";import"./blocks-Bpk-BWR1.js";import"./toString-umtBxE1k.js";import"./isSymbol-cZI_Ep1T.js";import"./Links-iA5cQ-ZY.js";import"./Link-D9DLbuJX.js";import"./BackLink-DszJwojX.js";import"./useAnalytics-CehFRm89.js";import"./Button-DN_ij25m.js";import"./common-BVjc2uf_.js";import"./Icon-z9Peru8p.js";import"./EventBroker-Cn_Sdw6n.js";import"./FileLink-jq9kBspB.js";import"./url-strEtb6k.js";import"./Label-DPPcAGTw.js";import"./Xmark-BOoQHo2h.js";import"./HTML-DS3fjKYN.js";import"./ContentList-CNFbzhzz.js";import"./Image-CHtv6hsM.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-B-vTHgM8.js";import"./v4-Dv1xt2bl.js";import"./Buttons-5aA4U5qo.js";import"./Button-GHKSw1Lb.js";import"./addComponentKeysets-5J_Xdj-v.js";import"./Link-CaAcc6II.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-uuG-elbR.js";import"./Col-Be_UKFcF.js";import"./CardBase-DIhnyVJ3.js";import"./BackgroundImage-ClELzXYQ.js";import"./RouterLink-BOM4X2Uv.js";import"./Tag-C5F5BK9Q.js";import"./IconWrapper-Ci0dOioR.js";import"./ToggleArrow-CmFYUB3Z.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
