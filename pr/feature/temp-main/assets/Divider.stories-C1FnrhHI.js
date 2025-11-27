import{R as t}from"./iframe-D3RI0yPg.js";import{y as f}from"./utils-ChwviD3n.js";import{B as o}from"./BasicCard-Bos660oD.js";import{D as x}from"./Divider-CZRUdL3N.js";import{T as u}from"./Title-BeGyA-t2.js";import"./preload-helper-D6kgxu3v.js";import"./index-DmnvrA1b.js";import"./keys-CekxeH-O.js";import"./_baseKeys-CeqEQ0_N.js";import"./url-beiD4emV.js";import"./index-DRVtqD9x.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-CAnSvSBm.js";import"./blocks-D4ntktkY.js";import"./toString-ZFVuMUJ9.js";import"./isSymbol-CqpkARb0.js";import"./Links-CQ3ERYaW.js";import"./Link-BayOs6ps.js";import"./BackLink-hgZjYhtJ.js";import"./useAnalytics-9fkU6vmF.js";import"./Button-CwmCBXqP.js";import"./common-UitFLzOR.js";import"./Icon-ohe51Nh5.js";import"./EventBroker-CIZH6wYD.js";import"./FileLink-DStbKds_.js";import"./url-BRxXylsX.js";import"./Label-l7M6vEMS.js";import"./Xmark-DnrWMGJD.js";import"./HTML-DQs6lGpk.js";import"./ContentList-BpsfR_MZ.js";import"./Image-CwM1dNSj.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-WHP92luu.js";import"./v4-Dv1xt2bl.js";import"./Buttons-D0sFjwPo.js";import"./Button-DFlrKLcH.js";import"./addComponentKeysets-BcCDdYcr.js";import"./Link-jyILgZRy.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CwtSqixR.js";import"./Col-BeWOUYPM.js";import"./CardBase-BHtyy5KN.js";import"./BackgroundImage-DtX3iI_2.js";import"./RouterLink-h39PZq2l.js";import"./Tag-CsIHm0ms.js";import"./IconWrapper-B7JNwgb9.js";import"./ToggleArrow-D_stgttP.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
