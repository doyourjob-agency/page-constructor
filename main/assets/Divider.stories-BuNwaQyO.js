import{R as t}from"./iframe-BP9cnKBr.js";import{y as f}from"./utils-DE3Qn553.js";import{B as o}from"./BasicCard-BHL2BFVY.js";import{D as x}from"./Divider-C-L_Iqud.js";import{T as u}from"./Title-CSYvCkqO.js";import"./preload-helper-D6kgxu3v.js";import"./index-B9SIguom.js";import"./keys-DnaqY_vZ.js";import"./_baseKeys-CFG1H1x2.js";import"./url-D4C92lk9.js";import"./index-eu2ovT6r.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-B3jHiR2u.js";import"./Content-DFaXw027.js";import"./blocks-BiwOd-59.js";import"./toString-B5m4vOIr.js";import"./isSymbol-DFEPGeA5.js";import"./Links-aj2aCzP8.js";import"./Link-BdR9VVND.js";import"./BackLink-D2DFHaNX.js";import"./useAnalytics-CYfi6cQ_.js";import"./Button-COZf6m0w.js";import"./common-CbFswPgo.js";import"./Icon-CJsyFcKI.js";import"./EventBroker-BCk7o6yW.js";import"./FileLink-C0z-4KAV.js";import"./url-DMpn-lEV.js";import"./Label-5UWCG0Be.js";import"./Xmark-cBM2Udlh.js";import"./YFMWrapper-d75EmxOq.js";import"./HTML-gf3Dr7sx.js";import"./ContentList-DcEisRhZ.js";import"./Image-ChoAVKyM.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DTN26t9P.js";import"./Buttons-Be65hzPG.js";import"./Button-B9C-OXKt.js";import"./addComponentKeysets-Bgc29iCS.js";import"./Link-D_zxqktP.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-ah932jcy.js";import"./Col-xAKyMfD9.js";import"./CardBase-BcSCVhLI.js";import"./BackgroundImage-JoGuerkR.js";import"./RouterLink-5_raADnG.js";import"./Tag-CiHtfwtx.js";import"./IconWrapper-CxmA2rn8.js";import"./ToggleArrow-DhLIIA4n.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
