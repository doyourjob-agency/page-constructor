import{R as t}from"./iframe-BqOZKKc0.js";import{y as f}from"./utils-DGTg3rFl.js";import{B as o}from"./BasicCard-C06CBpY3.js";import{D as x}from"./Divider-Dj25K1W2.js";import{T as u}from"./Title-DIzOMoOd.js";import"./preload-helper-D6kgxu3v.js";import"./index-C2coHfK9.js";import"./keys-5ZKyV91k.js";import"./_baseKeys-CUzp0Etp.js";import"./url-BkMScyzK.js";import"./index-B7tceVFS.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-B3jHiR2u.js";import"./Content-DdYrt4da.js";import"./blocks-CINytUiF.js";import"./toString-BlLrwQGK.js";import"./isSymbol-DYox0ySH.js";import"./Links-C6nmoSbk.js";import"./Link-CmQCoypC.js";import"./BackLink-D-rnRnLT.js";import"./useAnalytics-6HxlWcF6.js";import"./Button-BvrESght.js";import"./common-DVIqReu2.js";import"./Icon-DI8Zn-w8.js";import"./EventBroker-qteLJZAH.js";import"./FileLink-BcaGO0Qh.js";import"./url-DGqa-qzE.js";import"./Label-D5y4iQz-.js";import"./Xmark-D03BcE9D.js";import"./YFMWrapper-DwMwlqVB.js";import"./HTML-D5iAGA1f.js";import"./ContentList-CFO3hz8x.js";import"./Image-CfKSyron.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-AZDx78NF.js";import"./Buttons-DMdVZnBS.js";import"./Button-DaMnDNbG.js";import"./addComponentKeysets-CutTSROd.js";import"./Link-CIM-0lAo.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-H5K74l96.js";import"./Col-BpeC2etv.js";import"./CardBase-95ZhlHhC.js";import"./BackgroundImage-DQoozyro.js";import"./RouterLink-CXmC0D2Q.js";import"./Tag-DOwzDmsA.js";import"./IconWrapper-CFrVCfqR.js";import"./ToggleArrow-BTL1p3JB.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
