import{R as t}from"./iframe-ClpkpS-U.js";import{y as f}from"./utils-BGBUQUar.js";import{B as o}from"./BasicCard-B3cqCW4E.js";import{D as x}from"./Divider-DGHekBi9.js";import{T as u}from"./Title-DwmkVtQ6.js";import"./preload-helper-D6kgxu3v.js";import"./index-CHbN0-kC.js";import"./keys-MlJkn8Am.js";import"./_baseKeys-BDaMyGKW.js";import"./url-DDxq9LZ4.js";import"./index-gWF1tT6q.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-DaAkpI2S.js";import"./blocks-BqGWC0-M.js";import"./toString-Ba8Shs5t.js";import"./isSymbol-BRcQWj6T.js";import"./Links-BRBum5Ao.js";import"./Link-BlP_Mm0s.js";import"./BackLink-BykCK_Sb.js";import"./useAnalytics-C8Gf1zbm.js";import"./Button-CBuFimkK.js";import"./common-ouKop9LK.js";import"./Icon-BsVH3AlL.js";import"./EventBroker-4HssXEE3.js";import"./FileLink-DilRBuLV.js";import"./url-CZ3N_Bye.js";import"./Label-fiwzPhRS.js";import"./Xmark-khK4aXQb.js";import"./HTML-DOkWXxTL.js";import"./ContentList-CdzqnYX5.js";import"./Image-BvxQD-aG.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-yynAVZ21.js";import"./v4-Dv1xt2bl.js";import"./Buttons-CjvRwnJh.js";import"./Button-DrKdDafz.js";import"./addComponentKeysets-B6mDU8ml.js";import"./Link-D8j_rfxa.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-D9va6SXH.js";import"./Col-BN0rLLGg.js";import"./CardBase-C3BZ9k-6.js";import"./BackgroundImage-C_AV-87z.js";import"./RouterLink-DBBDLtC9.js";import"./Tag-ojNXjao7.js";import"./IconWrapper-DUpyd1M_.js";import"./ToggleArrow-DFB6fKfb.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
