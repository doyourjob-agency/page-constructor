import{R as t}from"./iframe-D0qxlAtB.js";import{y as f}from"./utils-X0w1v23e.js";import{B as o}from"./BasicCard-CXFRyWfG.js";import{D as x}from"./Divider-C0bR6GYK.js";import{T as u}from"./Title-pJTmUz4h.js";import"./preload-helper-D6kgxu3v.js";import"./index-DLV7oPIQ.js";import"./keys-CMlpCXyV.js";import"./_baseKeys-qbYZTy2q.js";import"./url-Bc6pz0W_.js";import"./index-DjmSBxdN.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-B7YeJlVA.js";import"./blocks-fIwgT6DU.js";import"./toString-CRFlYed6.js";import"./isSymbol-DraRacLl.js";import"./Links-mouLgDBh.js";import"./Link-pww5qwYd.js";import"./BackLink-CBxcZ9rU.js";import"./useAnalytics-CdGz_KzV.js";import"./Button-iTVKBmwg.js";import"./common-CsHpA-8d.js";import"./Icon-B0-8D8GH.js";import"./EventBroker-yKr2RmDE.js";import"./FileLink-KXNBscj6.js";import"./url-OOrfSPFT.js";import"./Label-DIMtN2ZS.js";import"./Xmark-DU0DaJ2v.js";import"./HTML-DIiC3Raa.js";import"./ContentList-DmRRM_Rt.js";import"./Image-DM4Y7Gmz.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DceRQ5c6.js";import"./v4-Dv1xt2bl.js";import"./Buttons-C4w8YFLj.js";import"./Button-Btf24m6i.js";import"./addComponentKeysets-D-zd-vsU.js";import"./Link-UrqLMWXV.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-asEnMDgQ.js";import"./Col-CySYxRJV.js";import"./CardBase-e9VJVszB.js";import"./BackgroundImage-CT9MmSSr.js";import"./RouterLink-BJIwJ-d9.js";import"./Tag-OMlffpJn.js";import"./IconWrapper-C40ec_uk.js";import"./ToggleArrow-5pS70pkR.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
