import{R as t}from"./iframe-DPrtLRFp.js";import{y as f}from"./utils-D_5Fu-u8.js";import{B as o}from"./BasicCard-Btt61yZW.js";import{D as x}from"./Divider--VqD7Iot.js";import{T as u}from"./Title-CfQHmeMc.js";import"./preload-helper-D6kgxu3v.js";import"./index-KeqTtfSG.js";import"./keys-CettC3Ss.js";import"./_baseKeys-BaLOeAsV.js";import"./url-Dg49aTnZ.js";import"./index-8swOD-Ju.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-X_Xwkqim.js";import"./blocks-DwtD9Vvk.js";import"./toString-DT1ZTka1.js";import"./isSymbol-osaZWmRF.js";import"./Links--P2euU8W.js";import"./Link-q2EcJSnR.js";import"./BackLink-Q77UDrVA.js";import"./useAnalytics-DrRK44po.js";import"./Button-Cu7-myB4.js";import"./common-CvcFDdka.js";import"./Icon-Bql_2v5X.js";import"./EventBroker-mpmzXXJA.js";import"./FileLink-Cny0kVgh.js";import"./url-CST5mBQZ.js";import"./Label-DPfZffFa.js";import"./Xmark-ioVJeDWf.js";import"./HTML-DM1tO01k.js";import"./ContentList-DUthl-US.js";import"./Image-yV_DYVs0.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BdD7cJMq.js";import"./Buttons-Wl85vt74.js";import"./Button-D0MP2P9Z.js";import"./addComponentKeysets-wER4lsQe.js";import"./Link-DloBn8Cy.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BEEUisfW.js";import"./Col-BGmtwxYt.js";import"./CardBase-CCuWBQKu.js";import"./BackgroundImage-CTpGn291.js";import"./RouterLink-BAPIprKa.js";import"./Tag-C3X1Qplo.js";import"./IconWrapper-Du9QNiPg.js";import"./ToggleArrow-wh5IdbrC.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
