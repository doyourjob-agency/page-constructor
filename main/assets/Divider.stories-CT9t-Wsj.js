import{R as t}from"./iframe-C98Udook.js";import{y as f}from"./utils-B9UZe2pP.js";import{B as o}from"./BasicCard-CN9yT_le.js";import{D as x}from"./Divider-Bas-nby3.js";import{T as u}from"./Title-CX1z-8Lz.js";import"./preload-helper-D6kgxu3v.js";import"./index-Cn47mhnV.js";import"./keys-DRh5pmYL.js";import"./_baseKeys-DEVIBnh_.js";import"./url-BRDP5SLe.js";import"./index-D7100_V1.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-B3jHiR2u.js";import"./Content-DlihQ2EE.js";import"./blocks-rKJy5UgB.js";import"./toString-DBS4TypC.js";import"./isSymbol-Bl2IlkgT.js";import"./Links-IkQJrNnv.js";import"./Link-C_vddxMb.js";import"./BackLink-CQiefpCf.js";import"./useAnalytics-DszKR9QK.js";import"./Button-Q_crJVsq.js";import"./common-CsLmwL7F.js";import"./Icon-BFF7z0eg.js";import"./EventBroker-wva6Ll5R.js";import"./FileLink-B66XpXdD.js";import"./url-D9ioL_fJ.js";import"./Label-CKCDdmXR.js";import"./Xmark-Vb2axVRh.js";import"./YFMWrapper-DsXtEx-w.js";import"./HTML-0tEbIkcn.js";import"./ContentList-DU0COaCo.js";import"./Image-G7Iu-z5T.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-1hVF5xL2.js";import"./Buttons-Dpl9qxXM.js";import"./Button-Lhtyy1g-.js";import"./addComponentKeysets-UXFiJlFZ.js";import"./Link-DHa8fnwn.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-Cb7sNW52.js";import"./Col-u-PBDDWy.js";import"./CardBase-CROZugqt.js";import"./BackgroundImage-D2yCuuXm.js";import"./RouterLink-BzHln_cP.js";import"./Tag-BOw_voHx.js";import"./IconWrapper-BABpJWI3.js";import"./ToggleArrow-BywgaAVL.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
