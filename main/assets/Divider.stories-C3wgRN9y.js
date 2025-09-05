import{R as t}from"./iframe-9Sf9PHJw.js";import{y as f}from"./utils-dyrvWArx.js";import{B as o}from"./BasicCard-CS8H-FQy.js";import{D as x}from"./Divider-CwZskp7V.js";import{T as u}from"./Title-DU_ns45_.js";import"./preload-helper-D6kgxu3v.js";import"./index-CKLPKqCs.js";import"./keys-DXyUNhtZ.js";import"./_baseKeys-Xl3cZY14.js";import"./url-bPx4QxuV.js";import"./index-BN3ZGzkf.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-DOxZcph2.js";import"./blocks-B4IngbtZ.js";import"./toString-B3F8plXh.js";import"./isSymbol-CgCSEYp6.js";import"./Links-DSlVoOAh.js";import"./Link-ui8tiYfA.js";import"./BackLink-DD24P6qE.js";import"./useAnalytics-DGb2yPce.js";import"./Button-4xPAQTqZ.js";import"./common-BR6FR6xD.js";import"./Icon-CXCqgRhk.js";import"./EventBroker-BbPd34C-.js";import"./FileLink-CJCpobC6.js";import"./url-IPN6fTyD.js";import"./Label-DladBWiE.js";import"./Xmark-cNAKMke4.js";import"./HTML-lOQB0w3O.js";import"./ContentList-C7hsxmEl.js";import"./Image-CzMnmGfo.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-C-8pmRxq.js";import"./v4-Dv1xt2bl.js";import"./Buttons-9eISvxo1.js";import"./Button-DQFgAg7_.js";import"./addComponentKeysets-CZr6HBxe.js";import"./Link-CVtm-epX.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BS11NEHw.js";import"./Col-B46nr8NM.js";import"./CardBase-BLZ0uxkh.js";import"./BackgroundImage-BraIKeBl.js";import"./RouterLink-C_H7wuoD.js";import"./Tag-DkZ-5x9a.js";import"./IconWrapper-DICmkLOO.js";import"./ToggleArrow-IO8ZHpyp.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
