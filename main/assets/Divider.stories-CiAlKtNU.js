import{R as t}from"./iframe-DaDlpNAS.js";import{y as f}from"./utils-C7WxBW3w.js";import{B as o}from"./BasicCard-BiuTdxBh.js";import{D as x}from"./Divider-DPgmgTI2.js";import{T as u}from"./Title-Bs-FOWID.js";import"./preload-helper-D6kgxu3v.js";import"./index-CgRQQmHA.js";import"./keys-CzaID-tM.js";import"./_baseKeys-Bf4LVdqk.js";import"./url-CRW85gpp.js";import"./index-DJP5FzMJ.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-Dk2edqYr.js";import"./Content-Dwjce0lA.js";import"./blocks-BAUvuu2H.js";import"./toString-DJbKbOaE.js";import"./isSymbol-CGiIlGrK.js";import"./Links-DeOonrxs.js";import"./Link-C9hDR5h1.js";import"./BackLink-CDeHA6B4.js";import"./useAnalytics-D4HO07kb.js";import"./Button-CRWzhBhL.js";import"./common-Bongei2a.js";import"./Icon-DkE7lcdi.js";import"./EventBroker-BO0-1ABW.js";import"./FileLink-CFcrQ-SK.js";import"./url-CMAtrKLJ.js";import"./Label-DlkMg14l.js";import"./Xmark-B7ZqDnPH.js";import"./YFMWrapper-CEF0RuXI.js";import"./HTML-CLULMZxw.js";import"./ContentList-6Kx5ieu9.js";import"./Image-DOw8tGmt.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BbOyutfi.js";import"./Buttons-Dwgn7tSB.js";import"./Button-D-UqxsWf.js";import"./addComponentKeysets-Bn1QGNfi.js";import"./Link-CYo5yeNP.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DG3Cjyff.js";import"./Col-Bq_vMi0D.js";import"./CardBase-CrHtUbNS.js";import"./BackgroundImage-BepoXp-Z.js";import"./RouterLink-CnsA4Tbd.js";import"./Tag-BMPoR4eK.js";import"./IconWrapper-6v9oIxgY.js";import"./ToggleArrow-CHDXXc-t.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
