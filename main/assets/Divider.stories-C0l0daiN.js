import{R as t}from"./iframe-CjAhUTbP.js";import{y as f}from"./utils-Bx6n1Wop.js";import{B as o}from"./BasicCard-LL4zPyCC.js";import{D as x}from"./Divider-BNZ6M4mk.js";import{T as u}from"./Title-bCWb842j.js";import"./preload-helper-D6kgxu3v.js";import"./index-BSu4khQS.js";import"./keys-BBPawZR2.js";import"./_baseKeys-DZQUihyZ.js";import"./url-BvO12tXY.js";import"./index-morSMmsU.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-Ctlf0yrT.js";import"./blocks-B99ZO9gF.js";import"./toString-DLO93sOn.js";import"./isSymbol-3tbAFXkH.js";import"./Links-BmT37V4c.js";import"./Link-QVZSWE2g.js";import"./BackLink-Bdb-qfhY.js";import"./useAnalytics-tF2hdRHm.js";import"./Button-B2MXU1-w.js";import"./common-2p7AlPyi.js";import"./Icon-y3rlnxoz.js";import"./EventBroker-BFf4tdR6.js";import"./FileLink-Bt2ug93x.js";import"./url-SBhkbtgw.js";import"./Label-DyUkd9I-.js";import"./Xmark-D1bXBPVd.js";import"./YFMWrapper-k5sdZbOp.js";import"./HTML-DmwdLZqC.js";import"./ContentList-DfR3-ooO.js";import"./Image-Dpe_s1UM.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-tLs6kvHs.js";import"./Buttons-CXcE0ziN.js";import"./Button-fpSSxN1Y.js";import"./addComponentKeysets-BfNTqToS.js";import"./Link-CCh_k9w6.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CXK140dk.js";import"./Col-Uq4gqhj4.js";import"./CardBase-DfW07ck-.js";import"./BackgroundImage-Dxymrcjt.js";import"./RouterLink-BxGOla-n.js";import"./Tag-vL4MaqQ7.js";import"./IconWrapper-lCtuKJSK.js";import"./ToggleArrow-DH8ySKnm.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
