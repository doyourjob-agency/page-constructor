import{R as t}from"./iframe-CWZsD6df.js";import{y as f}from"./utils-NYsiOBPH.js";import{B as o}from"./BasicCard-CDtwOBJw.js";import{D as x}from"./Divider-94rTRTt_.js";import{T as u}from"./Title-AZM2fIHu.js";import"./preload-helper-D6kgxu3v.js";import"./index-C5eCv4i_.js";import"./keys-C42kmYhQ.js";import"./_baseKeys-D5khNPV9.js";import"./url-CCSQ3L9N.js";import"./index-BrKytVYg.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-B3jHiR2u.js";import"./Content-ClVGmh1p.js";import"./blocks-DnXGcf0R.js";import"./toString-Dd8CVY57.js";import"./isSymbol-BBo4sHDs.js";import"./Links-V-C1mTjc.js";import"./Link-Cu8xZ8K4.js";import"./BackLink-oSF4GB2r.js";import"./useAnalytics-CAws_SzU.js";import"./Button-CEc48rHT.js";import"./common-vyZsU7hM.js";import"./Icon-C4Wn6l7W.js";import"./EventBroker-DICFDcKG.js";import"./FileLink-l6ecOHFC.js";import"./url-DekW2-lV.js";import"./Label-C9esZi6z.js";import"./Xmark-Ca_lsWWg.js";import"./YFMWrapper-Dpo-vpsB.js";import"./HTML-D-gii9sM.js";import"./ContentList-BMJ3Ktbt.js";import"./Image-Ux6_PBxM.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-tQaIjyio.js";import"./Buttons-D9_NVAxC.js";import"./Button-g1Fnxtl8.js";import"./addComponentKeysets-DvVuipjr.js";import"./Link-8fbQmBEy.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DdoJkoDO.js";import"./Col-CsbS3o7f.js";import"./CardBase-CAeKB5fB.js";import"./BackgroundImage-CfEjO_YS.js";import"./RouterLink-CdbNxOR7.js";import"./Tag-wxQ-d6rd.js";import"./IconWrapper-C001erFl.js";import"./ToggleArrow-DOQ_bMgI.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
