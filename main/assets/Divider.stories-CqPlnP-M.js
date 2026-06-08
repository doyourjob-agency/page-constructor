import{R as t}from"./iframe-MQAZTkzm.js";import{y as f}from"./utils-Dh45wHKW.js";import{B as o}from"./BasicCard-DIVn42Hy.js";import{D as x}from"./Divider-CGGsZh9P.js";import{T as u}from"./Title-BJ_GVUKp.js";import"./preload-helper-D6kgxu3v.js";import"./index-CoOkgcif.js";import"./keys-DJ4kK0dY.js";import"./_baseKeys-CvmAZ4Pj.js";import"./url-D0_1oTQR.js";import"./index-ByM3sxQC.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-DOPr84Cs.js";import"./blocks-CUXWqe--.js";import"./toString-BlNt9ayV.js";import"./isSymbol-CFuaJGh1.js";import"./Links-Bl_WLLmu.js";import"./Link-C7KlTdid.js";import"./BackLink-CDPColuw.js";import"./useAnalytics-DHVgJV-X.js";import"./Button-qTStHhSh.js";import"./common-DXtr8ZCI.js";import"./Icon-BR1bgC6m.js";import"./EventBroker-CefwE_kg.js";import"./FileLink-ByzFdjne.js";import"./url-94tLGviA.js";import"./Label-ByIuTEHv.js";import"./Xmark-DC_Cfxk7.js";import"./YFMWrapper-BNlcsKX4.js";import"./HTML--6KibQDN.js";import"./ContentList-BOUeUBa4.js";import"./Image-CDh3lRFP.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-C3F68vOD.js";import"./Buttons-DluVC_-l.js";import"./Button-B5T4VvS3.js";import"./addComponentKeysets-C1U2hFGD.js";import"./Link-ByJd5kJN.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CHWSjjV1.js";import"./Col-CJmiD_vt.js";import"./CardBase-ChqPqSDx.js";import"./BackgroundImage-p_A14P2B.js";import"./RouterLink-C9X8Thb1.js";import"./Tag-B8b0vbsZ.js";import"./IconWrapper-CING8oR0.js";import"./ToggleArrow-Bw-OPHum.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
