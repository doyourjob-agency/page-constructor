import{R as t}from"./iframe-BOEdD6i4.js";import{y as f}from"./utils-PjVqIQH8.js";import{B as o}from"./BasicCard-lY_1RMQC.js";import{D as x}from"./Divider-Ze4KM4Ya.js";import{T as u}from"./Title-2-blnzyq.js";import"./preload-helper-D6kgxu3v.js";import"./index-C5IW9Pb9.js";import"./keys-BPi7Lgs6.js";import"./_baseKeys-oyHRFBAo.js";import"./url-oxfnF0bM.js";import"./index-DiMPaSgX.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-DSMYQnKb.js";import"./blocks-C8A0f4p1.js";import"./toString-B3Dxcep_.js";import"./isSymbol-9c86vsLU.js";import"./Links-BxPTDA6-.js";import"./Link-BiRSDHn_.js";import"./BackLink-BMKqMV80.js";import"./useAnalytics-KMUfpXOT.js";import"./Button-LTThdoSC.js";import"./common-CVERlB7R.js";import"./Icon-BGSVS5v3.js";import"./EventBroker-DRm9nE_u.js";import"./FileLink-B-tKRVKC.js";import"./url-8kX0t8tG.js";import"./Label-LNuHKdWS.js";import"./Xmark-DVMrGaTD.js";import"./HTML-y79LsngZ.js";import"./ContentList-CXfBxLMT.js";import"./Image-shr02qfJ.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-C9KMKG5J.js";import"./v4-Dv1xt2bl.js";import"./Buttons-BrQ7JEO0.js";import"./Button-z5zHH2KS.js";import"./addComponentKeysets-CVBAohfC.js";import"./Link-BFsQiDlb.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-B6Hcl_PO.js";import"./Col-UKk-QsIf.js";import"./CardBase-D0pOTNrQ.js";import"./BackgroundImage-Iby6Xl8D.js";import"./Tag-9vbRHvN-.js";import"./IconWrapper-D72MGmhY.js";import"./ToggleArrow-CNQT44Zs.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
    </div>`,...(c=(d=m.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const ft=["Default","Sizes"];export{r as Default,m as Sizes,ft as __namedExportsOrder,vt as default};
