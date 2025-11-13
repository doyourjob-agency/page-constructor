import{R as t}from"./iframe-Cj9baiYn.js";import{y as f}from"./utils-Cykjvgxu.js";import{B as o}from"./BasicCard-y1OYu0Uq.js";import{D as x}from"./Divider-DNXzjjFx.js";import{T as u}from"./Title-D8P4o7k3.js";import"./preload-helper-D6kgxu3v.js";import"./index-xYMEXhGD.js";import"./keys-DDERrHS0.js";import"./_baseKeys-DB7gMJQn.js";import"./url-OCWkj5H1.js";import"./index-wiHy4Gl2.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-Bgu3z5Oe.js";import"./blocks-DkOVRJO9.js";import"./toString-C8GONafU.js";import"./isSymbol-DNh8mPKg.js";import"./Links-C8OVLTSu.js";import"./Link-C3djNd-p.js";import"./BackLink-BjnxjGeP.js";import"./useAnalytics-BoUM7JAl.js";import"./Button-zeiGWCzr.js";import"./common-CHht9DOx.js";import"./Icon-CVqiMZOZ.js";import"./EventBroker-8xoaxtWL.js";import"./FileLink-DoyKQ9Bc.js";import"./url-CkILVgVq.js";import"./Label-BHZhfN4M.js";import"./Xmark-D6pSzaSb.js";import"./HTML-CJrNxnxk.js";import"./ContentList-BbALh3o-.js";import"./Image-DTsq-csi.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CLZyxfoW.js";import"./v4-Dv1xt2bl.js";import"./Buttons-DGPBfYkN.js";import"./Button-Dz8vsY54.js";import"./addComponentKeysets-BMlnZ0em.js";import"./Link-DfYG8Ocu.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-4NpWEfiC.js";import"./Col-wOp4yK19.js";import"./CardBase-DQGSr-fE.js";import"./BackgroundImage-BwSITv23.js";import"./RouterLink-zJE2AutL.js";import"./Tag-DNfukdAZ.js";import"./IconWrapper-D51IhOW3.js";import"./ToggleArrow-pXNcEnyt.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
