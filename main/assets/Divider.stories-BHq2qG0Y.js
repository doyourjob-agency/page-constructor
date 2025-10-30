import{R as t}from"./iframe-BaOgIThH.js";import{y as f}from"./utils-BwWtq5p_.js";import{B as o}from"./BasicCard-CQ9mmOdv.js";import{D as x}from"./Divider-B6yQGEIP.js";import{T as u}from"./Title-CrN0nBCa.js";import"./preload-helper-D6kgxu3v.js";import"./index-y7p9bs4a.js";import"./keys-CWzceQoN.js";import"./_baseKeys-CFZPo_QZ.js";import"./url-BYQvOQW0.js";import"./index-CkEsRJE9.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-DBTHaJZ4.js";import"./blocks-CC75vccY.js";import"./toString-BQAnO-Ub.js";import"./isSymbol-Y4_NvIk8.js";import"./Links-Cuv318wu.js";import"./Link-C8Bt4yFg.js";import"./BackLink-D0SrWHqs.js";import"./useAnalytics-6MQlACQ_.js";import"./Button-8_Nzvp8a.js";import"./common-BqHJ4h7g.js";import"./Icon-DOvYkT_i.js";import"./EventBroker-DjI2PtE_.js";import"./FileLink-xmhYhHtM.js";import"./url-Do6WtSNA.js";import"./Label-9KVduLD_.js";import"./Xmark-DPHBeudd.js";import"./HTML-C6sUDfXc.js";import"./ContentList-IN0zKxYC.js";import"./Image-BV7OmaC-.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DAt50Hfv.js";import"./v4-Dv1xt2bl.js";import"./Buttons-Bdfee6iP.js";import"./Button-Bh3Cgb5d.js";import"./addComponentKeysets-B0PADZ-v.js";import"./Link-iMhJw7S3.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-Cvf5tHcy.js";import"./Col-CrYaKKX8.js";import"./CardBase-zjwYU8n8.js";import"./BackgroundImage-B14nPCdp.js";import"./RouterLink-BzokpOpR.js";import"./Tag-DxdCjsSQ.js";import"./IconWrapper-BL7Pi_Uy.js";import"./ToggleArrow-CHt4m1ga.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
