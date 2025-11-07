import{R as t}from"./iframe-10t6riH-.js";import{y as f}from"./utils-BE4naGKz.js";import{B as o}from"./BasicCard-DRL7QjJh.js";import{D as x}from"./Divider-Cg7nLwJ9.js";import{T as u}from"./Title-CEXpKhjI.js";import"./preload-helper-D6kgxu3v.js";import"./index-DGs0wrZp.js";import"./keys-BQV-JEb9.js";import"./_baseKeys-BvNZXIGP.js";import"./url-ByeUmJuJ.js";import"./index-BhMPoUMs.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-fR8Gb_LT.js";import"./blocks-CK2cGFjS.js";import"./toString-CJDFKq9p.js";import"./isSymbol-CVVqGZhl.js";import"./Links-DfyGdQoo.js";import"./Link-B_teGhN8.js";import"./BackLink-CD7xjAJs.js";import"./useAnalytics-DF14kudv.js";import"./Button-D6Qf2sNC.js";import"./common-Cf-eZ5rA.js";import"./Icon-Bl0YGOZ-.js";import"./EventBroker-BEIEYbkx.js";import"./FileLink-D_xSK_eC.js";import"./url-BnC8gZrk.js";import"./Label-K9oN_kY9.js";import"./Xmark-836-nzR_.js";import"./HTML-BLgTZkKd.js";import"./ContentList-bIzK8kB8.js";import"./Image-Ba-e4sfQ.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BRKa4mw6.js";import"./v4-Dv1xt2bl.js";import"./Buttons-BSyzIqzQ.js";import"./Button-y8NmGpCy.js";import"./addComponentKeysets-C_mGQG3_.js";import"./Link-PV2KOXx5.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DYjjYyMp.js";import"./Col-CGbN8qF6.js";import"./CardBase-k0qgCc2N.js";import"./BackgroundImage-DJtiXpOp.js";import"./RouterLink-BcLK8r3L.js";import"./Tag--i1K0v_3.js";import"./IconWrapper-CIcsh7Ey.js";import"./ToggleArrow-CwH33gO9.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
