import{R as t}from"./iframe-27LiWxnO.js";import{y as f}from"./utils-Cnr0UwCn.js";import{B as o}from"./BasicCard-BeH_9rYF.js";import{D as x}from"./Divider-BA5Ln-JQ.js";import{T as u}from"./Title-DvS8fxuJ.js";import"./preload-helper-D6kgxu3v.js";import"./index-DA2PXDVM.js";import"./keys-jvjg-zjY.js";import"./_baseKeys-DX9I_aQw.js";import"./url-Cz6JaUjK.js";import"./index-BDC3DfBs.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-5h95-ye3.js";import"./blocks-CwtBnhuK.js";import"./toString-B8GcGzDP.js";import"./isSymbol-BBfOMUwc.js";import"./Links-D3ewLf1y.js";import"./Link-DYAp7tVA.js";import"./BackLink-ABZ1jVKy.js";import"./useAnalytics-BCnkJkHy.js";import"./Button-DIh7VwQC.js";import"./common-6VIXDFxF.js";import"./Icon-CHOwu1Mg.js";import"./EventBroker-C8vzUeKa.js";import"./FileLink-DniU5CEi.js";import"./url-sGjLISR8.js";import"./Label-D6hcwPeB.js";import"./Xmark-qF4cMRtc.js";import"./YFMWrapper-BGC4uqXn.js";import"./HTML-CjJbL6SB.js";import"./ContentList-CIdV1Ava.js";import"./Image-CnxVYCqU.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DIX4wcLA.js";import"./Buttons-Cru5Fw-i.js";import"./Button-CsULGfJA.js";import"./addComponentKeysets-C8rmZ8eL.js";import"./Link-CWysob0w.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-6kaH1zyg.js";import"./Col-DKXYGWGe.js";import"./CardBase-DxlFNBCl.js";import"./BackgroundImage-DgXRogmJ.js";import"./RouterLink-Dslgba4D.js";import"./Tag-CtWuw3y7.js";import"./IconWrapper-BNfN-YiG.js";import"./ToggleArrow-BdS2jIR1.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
