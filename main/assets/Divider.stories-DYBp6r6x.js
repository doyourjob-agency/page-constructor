import{R as t}from"./iframe-8rVHh8x1.js";import{y as f}from"./utils-BeO_CT2M.js";import{B as o}from"./BasicCard-AaVy0Okb.js";import{D as x}from"./Divider-DxI_0YW3.js";import{T as u}from"./Title-DiB0TumR.js";import"./preload-helper-D6kgxu3v.js";import"./index-CMRifptV.js";import"./keys-uP-gDoaB.js";import"./_baseKeys-Dm_QOyhJ.js";import"./url-4zW82_w8.js";import"./index-DJbQig_P.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-DkCR_bpa.js";import"./blocks-4tkBKmPC.js";import"./toString-C32cHQ1Z.js";import"./isSymbol-mmIXP3tP.js";import"./Links-Bmvwgp4d.js";import"./Link-BDV_jtU4.js";import"./BackLink-DsjBRT68.js";import"./useAnalytics-C98qPCN9.js";import"./Button-C04-mNlv.js";import"./common-aUrllde0.js";import"./Icon-D5p3UIHV.js";import"./EventBroker-B5EOpLsK.js";import"./FileLink-9kyhOHW8.js";import"./url-CYmdT7eC.js";import"./Label-C3xSKZLb.js";import"./Xmark-BduKp92X.js";import"./YFMWrapper-B2Bwkwum.js";import"./HTML-DYxAIGa4.js";import"./ContentList-BbKSJ8OE.js";import"./Image-IYntj_8I.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-2iEl4I75.js";import"./Buttons-DjkiJQ5e.js";import"./Button-CKeCJvKD.js";import"./addComponentKeysets-dv0JSZXi.js";import"./Link-BqsPgKMe.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DPMquAl8.js";import"./Col-BkJq8RjK.js";import"./CardBase-eAkabgF7.js";import"./BackgroundImage-DRlX3ssf.js";import"./RouterLink-CNk7z4r6.js";import"./Tag-DfqcDJbc.js";import"./IconWrapper-CDIwaJlw.js";import"./ToggleArrow-BP1erj1z.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
