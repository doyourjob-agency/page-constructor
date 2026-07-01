import{R as t}from"./iframe-BMgPFI5N.js";import{y as f}from"./utils-Brs4SVgh.js";import{B as o}from"./BasicCard-DJuXnHOA.js";import{D as x}from"./Divider-YR15IPtl.js";import{T as u}from"./Title-BGcKChLD.js";import"./preload-helper-D6kgxu3v.js";import"./index-BKQ0EZRN.js";import"./keys-Br-7QjdK.js";import"./_baseKeys-qfUz6sXW.js";import"./url-ByeN5QPW.js";import"./index-30zSTJLz.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-RJFQKyuX.js";import"./blocks-CjvFW1RF.js";import"./toString-DgA99lGu.js";import"./isSymbol-CloQlm4D.js";import"./Links-DTz5JBex.js";import"./Link-Ddcur98X.js";import"./BackLink-vhy3UI5u.js";import"./useAnalytics-D7xlawCh.js";import"./Button-DQkL_n-z.js";import"./common-CpjOcNUb.js";import"./Icon-C6FUivqR.js";import"./EventBroker-i_8j-O-B.js";import"./FileLink-BQaxIg7p.js";import"./url-F7OG-3XM.js";import"./Label-B0RIkDNF.js";import"./Xmark-BOfKfDZL.js";import"./YFMWrapper-C9aRA0Ud.js";import"./HTML-CsUT0pAF.js";import"./ContentList-vH0FhE8r.js";import"./Image-BWKsv0Dz.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BYOBz7bj.js";import"./Buttons-BU_72zbo.js";import"./Button-CXvPOEEA.js";import"./addComponentKeysets-C_RmKqyC.js";import"./Link-7Z4nJtfg.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-xLipA64Q.js";import"./Col-CNkJz8Bu.js";import"./CardBase-D7QDD_Fz.js";import"./BackgroundImage-CKK31PW-.js";import"./RouterLink-vgqOYeip.js";import"./Tag-TpcHNLP2.js";import"./IconWrapper-Co96BTUe.js";import"./ToggleArrow-DQtzCQ7T.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
