import{R as t}from"./iframe-eRGaY7sf.js";import{y as f}from"./utils-Cc_c7tMD.js";import{B as o}from"./BasicCard-BxWsdqPP.js";import{D as x}from"./Divider-B92l3dFH.js";import{T as u}from"./Title-CEeGVvhS.js";import"./preload-helper-D6kgxu3v.js";import"./index-D6Itnm6v.js";import"./keys-Db0C-KTf.js";import"./_baseKeys-Cu3DmB6H.js";import"./url-B6YR4k4Z.js";import"./index-BnB2Sdw4.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-Dk2edqYr.js";import"./Content-BuDR0H23.js";import"./blocks-KPEyj1dZ.js";import"./toString-qZomAkqF.js";import"./isSymbol-DGF3T897.js";import"./Links-C8Y_Dcoh.js";import"./Link-BQnw3g1c.js";import"./BackLink-BvRBroWg.js";import"./useAnalytics-BWl14mOe.js";import"./Button-VLlMtKXG.js";import"./common-Ez3I3-9T.js";import"./Icon-CJXNhwsR.js";import"./EventBroker-CvNgWmy0.js";import"./FileLink-CyWLszHJ.js";import"./url-BZVTzx3F.js";import"./Label-BxHtj8sK.js";import"./Xmark-vK8V6HZI.js";import"./YFMWrapper-Dtlld8tM.js";import"./HTML-DQhZtHa7.js";import"./ContentList-CdSgjTLQ.js";import"./Image-C2uvhsKW.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-u9fAPFPa.js";import"./Buttons-DpkdPKXA.js";import"./Button-Dh844TIe.js";import"./addComponentKeysets-w8SElVJ_.js";import"./Link-TirNr2Se.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-B8NK_DB0.js";import"./Col-DvjzMe7K.js";import"./CardBase-BDEQeu3L.js";import"./BackgroundImage-DseSVhLn.js";import"./RouterLink-BQ1xjrlq.js";import"./Tag-BXiNO7mG.js";import"./IconWrapper-D_w10zyU.js";import"./ToggleArrow-C7nhQrC0.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
