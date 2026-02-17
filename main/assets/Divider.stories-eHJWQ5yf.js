import{R as t}from"./iframe-D48fZeEn.js";import{y as f}from"./utils-CmrtFAMo.js";import{B as o}from"./BasicCard-BAJJ9gNZ.js";import{D as x}from"./Divider-CRQYEscp.js";import{T as u}from"./Title-BJyK941T.js";import"./preload-helper-D6kgxu3v.js";import"./index-CBtxg87R.js";import"./keys-KpqtvTaW.js";import"./_baseKeys-Cr3Qr0Rg.js";import"./url-Dg56cB6w.js";import"./index-BMHTIxjs.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-bKy8rwE-.js";import"./blocks-BJnOvAKS.js";import"./toString-BiGxhD_b.js";import"./isSymbol-Bt2gzOrO.js";import"./Links-B7Fe1kJP.js";import"./Link-BIbAIZ8L.js";import"./BackLink-On5SuI5j.js";import"./useAnalytics-D5ndBGh9.js";import"./Button-Dyxd-KTg.js";import"./common-dyo6dspT.js";import"./Icon-DQW3O50d.js";import"./EventBroker-hxsiTedJ.js";import"./FileLink-DiZo6iiu.js";import"./url-DzqCedbN.js";import"./Label-B7FQ_ZSB.js";import"./Xmark-DaGBEhbj.js";import"./HTML-DOMb-sKV.js";import"./ContentList-D6bAklQq.js";import"./Image-C78qfysd.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CxBt9WOb.js";import"./v4-Dv1xt2bl.js";import"./Buttons-hDHxyur8.js";import"./Button-1Ev-fsVr.js";import"./addComponentKeysets-BF1KQ9jv.js";import"./Link-BuTOUYx1.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DzYVn_7v.js";import"./Col-F23NxdL7.js";import"./CardBase-3r7svp0y.js";import"./BackgroundImage-N2eaeV0O.js";import"./RouterLink-DGHPStEG.js";import"./Tag-DqzBVoIG.js";import"./IconWrapper-Cn1zezvh.js";import"./ToggleArrow-DyB95K6O.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
