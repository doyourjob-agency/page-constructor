import{R as t}from"./iframe-CTiQLnPf.js";import{y as f}from"./utils-jLmZ7WLD.js";import{B as o}from"./BasicCard-BQdkBWog.js";import{D as x}from"./Divider-DSGbPgql.js";import{T as u}from"./Title-AEVBf4BX.js";import"./preload-helper-D6kgxu3v.js";import"./index-Do7CQ7Hh.js";import"./keys-I4AIsYLo.js";import"./_baseKeys-BtI3Z09k.js";import"./url-XIHZhn4K.js";import"./index-ZK7LysM1.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-DU49VWMj.js";import"./blocks-vpsbpmcg.js";import"./toString-CljDmBMQ.js";import"./isSymbol-CTbONu96.js";import"./Links-5hE13ktH.js";import"./Link-B53tpvj0.js";import"./BackLink-BI_NOgsy.js";import"./useAnalytics-DhAQF0_-.js";import"./Button-Bm66aJE6.js";import"./common-CxQSwqWB.js";import"./Icon-L97WD3GK.js";import"./EventBroker-BjVZBl6P.js";import"./FileLink-DJ54qFL-.js";import"./url-BV-P2Ueb.js";import"./Label-BCwLadCv.js";import"./Xmark-Cy8wWy8r.js";import"./HTML-C8lRtZTW.js";import"./ContentList-98Pl1fB5.js";import"./Image-CLeSth57.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-C-Pr0IM1.js";import"./v4-Dv1xt2bl.js";import"./Buttons-4a3rS21u.js";import"./Button-XdpSBjBN.js";import"./addComponentKeysets-Aw9IVa1Y.js";import"./Link-BaDdHppd.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DxLTbEGY.js";import"./Col-Dq5jEbcN.js";import"./CardBase-DsKtaBEE.js";import"./BackgroundImage-B72rTsUe.js";import"./RouterLink-Ba3nkuc-.js";import"./Tag-CoT9enmz.js";import"./IconWrapper-Bxq3SJWu.js";import"./ToggleArrow-BE1TnfU3.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
