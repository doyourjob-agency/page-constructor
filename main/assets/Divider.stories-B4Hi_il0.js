import{R as t}from"./iframe--8y_hAUE.js";import{y as f}from"./utils-DKTfWgRb.js";import{B as o}from"./BasicCard-CdNbjc-6.js";import{D as x}from"./Divider-BAnENigh.js";import{T as u}from"./Title-DM3RfJnP.js";import"./preload-helper-D6kgxu3v.js";import"./index-BSQLFoMp.js";import"./keys-Cy_jny8C.js";import"./_baseKeys-DHb_7LwJ.js";import"./url-BTV04eQ9.js";import"./index-Bw8wY5-6.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-DSphVRx0.js";import"./blocks-CxHYg9s2.js";import"./toString-Bn4_f1Ax.js";import"./isSymbol-CyyA7zcZ.js";import"./Links-Bgk5mkTC.js";import"./Link-D7zMXH2P.js";import"./BackLink-DXuOywUc.js";import"./useAnalytics-ChIQtWxF.js";import"./Button-WZBJSIhs.js";import"./common-CkMfKubd.js";import"./Icon-B1_ISU8x.js";import"./EventBroker-Dbb4kF6a.js";import"./FileLink-BfBwkj1F.js";import"./url-CQhBb8_q.js";import"./Label-BnIGBBDi.js";import"./Xmark-BwtBBNgv.js";import"./HTML-DMtnnOwi.js";import"./ContentList-B1e7gmkU.js";import"./Image-ClK9Bpro.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-Bb5cdwdB.js";import"./v4-Dv1xt2bl.js";import"./Buttons-BYDilqE0.js";import"./Button-kk1nggXK.js";import"./addComponentKeysets-BL6FKVwe.js";import"./Link-DSJooqMO.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BoLIqCVI.js";import"./Col-CxonwRl3.js";import"./CardBase-R9EbXjtG.js";import"./BackgroundImage-C1vX4fo9.js";import"./RouterLink-DpY-O-d3.js";import"./Tag-Ban0AxXl.js";import"./IconWrapper-CulvviBq.js";import"./ToggleArrow-NYbmiJBs.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
