import{R as t}from"./iframe-oh5lnFGI.js";import{y as f}from"./utils-CtJ3azji.js";import{B as o}from"./BasicCard-BA6P5mIg.js";import{D as x}from"./Divider-gB5l7A0o.js";import{T as u}from"./Title-CxhX9bm1.js";import"./preload-helper-D6kgxu3v.js";import"./index-DbRmkGz3.js";import"./keys-RHJflgn1.js";import"./_baseKeys-Cqw3F0fF.js";import"./url-C69wRgYN.js";import"./index-CoSo8IlO.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-BX3t2HlO.js";import"./blocks-DmPZgday.js";import"./toString-C-cVRKQl.js";import"./isSymbol-DsgI8niY.js";import"./Links-BGrwccJp.js";import"./Link-DEXk11Sp.js";import"./BackLink-BP6QHZTi.js";import"./useAnalytics-D1ehq5WZ.js";import"./Button-DeKVk80H.js";import"./common-DAcet3Sp.js";import"./Icon-vKo4ThMM.js";import"./EventBroker-DWgS7c2B.js";import"./FileLink-Dzqz7HsU.js";import"./url-BVImWgCS.js";import"./Label-CFBFpBGS.js";import"./Xmark-Wq_ENG3V.js";import"./HTML-PEoVWCuD.js";import"./ContentList-BJVDwUeU.js";import"./Image-D1wXyIgd.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CLcKGZsP.js";import"./v4-Dv1xt2bl.js";import"./Buttons-cPSNcaMm.js";import"./Button-Co0W05j4.js";import"./addComponentKeysets-RKFUlUXy.js";import"./Link-Sb8GvghQ.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DODc6dpx.js";import"./Col-jjiJp0PW.js";import"./CardBase-v-QjeUh4.js";import"./BackgroundImage-D_pOcejy.js";import"./RouterLink-CgC7nM4h.js";import"./Tag-B5rA2XaK.js";import"./IconWrapper-Cg70fey_.js";import"./ToggleArrow-C_2fn6Cw.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
