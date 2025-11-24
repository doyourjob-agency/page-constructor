import{R as t}from"./iframe-BNFDR1vq.js";import{y as f}from"./utils-BsvbA_zZ.js";import{B as o}from"./BasicCard-pcbK1MXv.js";import{D as x}from"./Divider-DwpHbmnf.js";import{T as u}from"./Title-BYvUqroY.js";import"./preload-helper-D6kgxu3v.js";import"./index-DQ5vPnUj.js";import"./keys-CytbcNOZ.js";import"./_baseKeys-BcX5K2QS.js";import"./url-gVbtzzV8.js";import"./index-DwRAnDc6.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-CK50thK4.js";import"./blocks-GCNXhKQl.js";import"./toString-xu8-K_G3.js";import"./isSymbol-CIUEcKFx.js";import"./Links-DeRngnrR.js";import"./Link-qY93b1Yu.js";import"./BackLink-BK-m7y7E.js";import"./useAnalytics-DZ1ZV7kL.js";import"./Button-D8w-5WWN.js";import"./common-DBO3Mpkp.js";import"./Icon-DmmwwVW6.js";import"./EventBroker-DTMfHhlL.js";import"./FileLink-BusXJJim.js";import"./url-Dr96vVEP.js";import"./Label-CO5id2Ha.js";import"./Xmark-C9m6vSPl.js";import"./HTML-ByrxhJgK.js";import"./ContentList-BGhquQyi.js";import"./Image-kl_r-1KP.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BgZjCe_T.js";import"./v4-Dv1xt2bl.js";import"./Buttons-Dgf0nJYj.js";import"./Button-i3TFiEFJ.js";import"./addComponentKeysets-DEgPdVmb.js";import"./Link-Bvob7dYY.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-Z4xFp86a.js";import"./Col-4Zq0s65E.js";import"./CardBase-D1w3xqZj.js";import"./BackgroundImage-4jxeaUnl.js";import"./RouterLink-DtMInq99.js";import"./Tag-DAJfHnz1.js";import"./IconWrapper-Cl2mQh5S.js";import"./ToggleArrow-X59NsEcv.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
