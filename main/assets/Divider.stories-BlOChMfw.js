import{R as t}from"./iframe-B9WuF_I-.js";import{y as f}from"./utils-8dibzdN3.js";import{B as o}from"./BasicCard-ByMyMPHK.js";import{D as x}from"./Divider-BOkYyuKr.js";import{T as u}from"./Title-MVlj2SXl.js";import"./preload-helper-D6kgxu3v.js";import"./index-BGnRyY08.js";import"./keys-BbV4-dBy.js";import"./_baseKeys-B_AXvxDs.js";import"./url-DC3c9S2x.js";import"./index-anVK880L.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-D0kWX5LX.js";import"./blocks-C9f0oHW0.js";import"./toString-gAWNEp-h.js";import"./isSymbol-MS5sATHs.js";import"./Links-DjKUzkYb.js";import"./Link-C629m_Nb.js";import"./BackLink-Dh6AyQgY.js";import"./useAnalytics-C4OBaa00.js";import"./Button-Cg1OpdgZ.js";import"./common-CbO2nLFM.js";import"./Icon-RuD9o5MO.js";import"./EventBroker-CY4teifd.js";import"./FileLink-DJzpUmko.js";import"./url-mEf8osPF.js";import"./Label-aGldtg5S.js";import"./Xmark-C2KQJoiO.js";import"./HTML-Cj7t1pUp.js";import"./ContentList-DfsHTBHt.js";import"./Image-Dhs4ckGI.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BIeNkf84.js";import"./v4-Dv1xt2bl.js";import"./Buttons-YKsQGktM.js";import"./Button-D_0TxM7b.js";import"./addComponentKeysets-o7C35lSS.js";import"./Link-BgFhqChM.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DN-sEGy3.js";import"./Col-__qPEpjQ.js";import"./CardBase-C1VDhsMZ.js";import"./BackgroundImage-CLRbg53q.js";import"./RouterLink-B33U8Sxv.js";import"./Tag-CcNVcy0I.js";import"./IconWrapper-CVBExtIH.js";import"./ToggleArrow-F6tOVyNS.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
