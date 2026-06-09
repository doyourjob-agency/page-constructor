import{R as t}from"./iframe-BMKdiFGv.js";import{y as f}from"./utils-hXDgtRnj.js";import{B as o}from"./BasicCard-JX-Vz10f.js";import{D as x}from"./Divider-DWEoARlS.js";import{T as u}from"./Title-BPWYtXfW.js";import"./preload-helper-D6kgxu3v.js";import"./index-B6JWxdf7.js";import"./keys-D4zAx83W.js";import"./_baseKeys-IFAgy8AM.js";import"./url-Bbe2eh8o.js";import"./index-CVLUik58.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-2fusGZzY.js";import"./blocks-C78qhiKQ.js";import"./toString-CjZ1Y5bK.js";import"./isSymbol-ByI0ww_i.js";import"./Links-yPULGER1.js";import"./Link-XVNwxTpG.js";import"./BackLink-BaVxWxjd.js";import"./useAnalytics-DzCcxyFg.js";import"./Button-BWnLNOxH.js";import"./common-C0amygNs.js";import"./Icon-VHEbUdM0.js";import"./EventBroker-mLjH26C8.js";import"./FileLink-CRV6z5mp.js";import"./url-QjWioRW1.js";import"./Label-ngFgFF6c.js";import"./Xmark-Dc7zAIBm.js";import"./YFMWrapper-Ds6YTE6M.js";import"./HTML-D6EjhImQ.js";import"./ContentList-okaf7P9-.js";import"./Image-t1Hn7Wbc.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BAJO8GnV.js";import"./Buttons-C8WnwRNP.js";import"./Button-B5OvIoru.js";import"./addComponentKeysets-DjeQhcJ2.js";import"./Link-esRHWQg1.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-C5uIOGNe.js";import"./Col-BRB-slo7.js";import"./CardBase-Byz7FgWX.js";import"./BackgroundImage-DbIG_xDN.js";import"./RouterLink-CJNIF2nW.js";import"./Tag-Cwzw8w4H.js";import"./IconWrapper-CO7Uc5WW.js";import"./ToggleArrow-DWVc-lpA.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
