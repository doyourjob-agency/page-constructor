import{R as t}from"./iframe-CkUo0YKC.js";import{y as f}from"./utils-1ddOBuvA.js";import{B as o}from"./BasicCard-Bbdt4mJ4.js";import{D as x}from"./Divider-h_bSTrMK.js";import{T as u}from"./Title-Ny1dSnjm.js";import"./preload-helper-D6kgxu3v.js";import"./index-uQ40Kh3H.js";import"./keys-Qd6uDMgf.js";import"./_baseKeys-Dq7SUVi8.js";import"./url-Y3-W831k.js";import"./index-D2iC5NgH.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-CBWF9mhI.js";import"./blocks-CVfiER0O.js";import"./toString-CuxX_UUj.js";import"./isSymbol-Ba3-rjEq.js";import"./Links-KGtIa6WN.js";import"./Link-DPi3jbIc.js";import"./BackLink-DFgrY7Gm.js";import"./useAnalytics-D092MM67.js";import"./Button-6r0-jLD6.js";import"./common-DcnuvjXR.js";import"./Icon-EYDmgMF1.js";import"./EventBroker--aoia2AU.js";import"./FileLink-DUle3Dk6.js";import"./url-DRysaRBj.js";import"./Label-tq-X5SJK.js";import"./Xmark-CVIXInWV.js";import"./HTML-BLryeAi2.js";import"./ContentList-B7Qmb9cf.js";import"./Image-CD9bXYsK.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-XTe3wiLi.js";import"./v4-Dv1xt2bl.js";import"./Buttons-5HvntraA.js";import"./Button-D2DaWzmy.js";import"./addComponentKeysets-BZIZl1xu.js";import"./Link-DjlRnGXx.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-uCiZfvCw.js";import"./Col-DnJQxgNO.js";import"./CardBase-DGdmWh11.js";import"./BackgroundImage-Cx_alGb1.js";import"./RouterLink-C1JFk3gK.js";import"./Tag-oan8aV14.js";import"./IconWrapper-B4jgCFDE.js";import"./ToggleArrow-CDGZGiBe.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
