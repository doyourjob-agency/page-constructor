import{R as t}from"./iframe-5mcEFBBC.js";import{y as f}from"./utils-C0EF-lKN.js";import{B as o}from"./BasicCard-CA6umzfM.js";import{D as x}from"./Divider-DG5C5R59.js";import{T as u}from"./Title-ifhoha3g.js";import"./preload-helper-D6kgxu3v.js";import"./index-B71Dvc3O.js";import"./keys-BcPRbEC-.js";import"./_baseKeys-b97EOt9B.js";import"./url-BVVAa_fT.js";import"./index-BdISmjit.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-B3jHiR2u.js";import"./Content-CE-cuUrZ.js";import"./blocks-Ck8nUiLZ.js";import"./toString-BbAOAVVb.js";import"./isSymbol-f9yCtCVT.js";import"./Links-sYtMy59W.js";import"./Link-oMXz18Mn.js";import"./BackLink-B4wx3X5i.js";import"./useAnalytics-CjRTP4PI.js";import"./Button-CfqCSR2D.js";import"./common-CBYoCvWV.js";import"./Icon-DhyImjmy.js";import"./EventBroker-CY0ZP_BL.js";import"./FileLink-vDK6fIJ0.js";import"./url-ZbVq2eH9.js";import"./Label-COgwtNaq.js";import"./Xmark-D2joB0PO.js";import"./YFMWrapper-W2qEtZYI.js";import"./HTML-CSITQ4t0.js";import"./ContentList---wZONCs.js";import"./Image-xygBhndN.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-COzVFTeA.js";import"./Buttons-DGIMtKSW.js";import"./Button-CSU4iQvH.js";import"./addComponentKeysets-BQbgZHbJ.js";import"./Link-CxbLjY-k.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BlGiocKM.js";import"./Col-DvCIt5L3.js";import"./CardBase-DfLw_WiB.js";import"./BackgroundImage-D_L04abo.js";import"./RouterLink-dEnthaAk.js";import"./Tag-DH8l81r6.js";import"./IconWrapper-DdZ6Mk2c.js";import"./ToggleArrow-0HUur0rz.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
