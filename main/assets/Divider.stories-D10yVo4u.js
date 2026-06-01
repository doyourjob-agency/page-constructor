import{R as t}from"./iframe-Cw5_S8xU.js";import{y as f}from"./utils-B6ETDDyP.js";import{B as o}from"./BasicCard-mwUNvUh0.js";import{D as x}from"./Divider-C931YmdG.js";import{T as u}from"./Title-DGP6vOc7.js";import"./preload-helper-D6kgxu3v.js";import"./index-BYecj3ag.js";import"./keys-B0FMJT3y.js";import"./_baseKeys-jpmDMnSq.js";import"./url-Cbq6IdQp.js";import"./index-VJbJ0ImS.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-Dk2edqYr.js";import"./Content-D4UZUDBY.js";import"./blocks--DtM1asq.js";import"./toString-KLB8xvEn.js";import"./isSymbol-DbTvAXjY.js";import"./Links-DSZlpBA6.js";import"./Link-DzbS2L-P.js";import"./BackLink-BOr3jaqI.js";import"./useAnalytics-C-yVaeM2.js";import"./Button-CEWIM7dT.js";import"./common-Cl9DKJk4.js";import"./Icon-s67Su_xD.js";import"./EventBroker-CXS_Uyf0.js";import"./FileLink-DhUJ76yG.js";import"./url-2ueoiEgG.js";import"./Label-B8Z5keir.js";import"./Xmark-BMA_4KIZ.js";import"./YFMWrapper-s2oJEtKT.js";import"./HTML-BjOjlpvj.js";import"./ContentList-RvprjFuR.js";import"./Image-Bl7QnwSH.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-D37S9rYZ.js";import"./Buttons-BA78LTe9.js";import"./Button-CSiw0klP.js";import"./addComponentKeysets-BdYKBM3N.js";import"./Link-z7xBzG0o.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CaMM-G-V.js";import"./Col-C-ue68oj.js";import"./CardBase-Pj1V9l0n.js";import"./BackgroundImage-1PWRW0t7.js";import"./RouterLink-BM0xaLzF.js";import"./Tag-JhlIVs4-.js";import"./IconWrapper-AlQ6p0zl.js";import"./ToggleArrow-7xWQBWo-.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
