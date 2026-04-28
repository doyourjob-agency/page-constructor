import{R as t}from"./iframe-DfmCWFQS.js";import{y as f}from"./utils-DM84Iysm.js";import{B as o}from"./BasicCard-DBwQEriR.js";import{D as x}from"./Divider-B1plI4gq.js";import{T as u}from"./Title-CE-wUhnj.js";import"./preload-helper-D6kgxu3v.js";import"./index-BWqmGR40.js";import"./keys-D7XdARLX.js";import"./_baseKeys-BASNlkJ8.js";import"./url-BkdcNrMa.js";import"./index-BI1AcH45.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-Cyi2a1aH.js";import"./blocks-DZBin3eC.js";import"./toString-CypILn_S.js";import"./isSymbol-BHj-H897.js";import"./Links-w5xhz7jV.js";import"./Link-d_sRlnGd.js";import"./BackLink-C-L8wBTN.js";import"./useAnalytics-CvPeQ6Fm.js";import"./Button-BX04g-KH.js";import"./common-Duksu6We.js";import"./Icon-BrOFGj8q.js";import"./EventBroker-8Ih0soe1.js";import"./FileLink-D_ezUJjx.js";import"./url-BBQR3Lmt.js";import"./Label-BcV-ID-X.js";import"./Xmark-DML2VnIF.js";import"./HTML-Bl0z2PTc.js";import"./ContentList-B5ZMIvOi.js";import"./Image-D0VwNYLx.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DsUqzFTQ.js";import"./v4-Dv1xt2bl.js";import"./Buttons-Dr7hlHjK.js";import"./Button-D8Bc5jTO.js";import"./addComponentKeysets-CJyfiRUC.js";import"./Link-CedhSo65.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-D68-BMIL.js";import"./Col-C-2dx5us.js";import"./CardBase-Cyb8vNg9.js";import"./BackgroundImage-CzRicmiC.js";import"./RouterLink-c433wxlB.js";import"./Tag-CkU2FLgp.js";import"./IconWrapper-AGtDiP3B.js";import"./ToggleArrow-Wi5_Arxl.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
