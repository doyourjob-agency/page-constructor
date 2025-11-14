import{R as t}from"./iframe-VNYLth98.js";import{y as f}from"./utils-BmhzZx9O.js";import{B as o}from"./BasicCard-g1H2RMJs.js";import{D as x}from"./Divider-GY4vCPCN.js";import{T as u}from"./Title-wcsn4gg9.js";import"./preload-helper-D6kgxu3v.js";import"./index-BTflgVyH.js";import"./keys-EGdH_GBE.js";import"./_baseKeys-D63KTV6a.js";import"./url-CVgd1v4v.js";import"./index-BuEG17ZW.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-Bs-NrBLi.js";import"./blocks-B9LhxNh-.js";import"./toString-D7z9iKiF.js";import"./isSymbol-BycQyELG.js";import"./Links-Bjhb6Etg.js";import"./Link-ChGaQThR.js";import"./BackLink-D3jBzqXv.js";import"./useAnalytics-DS63kvLQ.js";import"./Button-89a4x2Wd.js";import"./common-bzeY-xyy.js";import"./Icon-Bdaql-bp.js";import"./EventBroker-CT1OlYiX.js";import"./FileLink-BbFmt1nR.js";import"./url-DPmZ7GMP.js";import"./Label-BAmtrbro.js";import"./Xmark-DmAwIBcQ.js";import"./HTML-CblHA3m5.js";import"./ContentList-CT9TBCOG.js";import"./Image-DeRIosWn.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BVYkLwBe.js";import"./v4-Dv1xt2bl.js";import"./Buttons-DgsUhL1X.js";import"./Button-BNQC9HuB.js";import"./addComponentKeysets-BeiIkVTW.js";import"./Link-DHEDXN38.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BopA7LIM.js";import"./Col-DcgrsRTJ.js";import"./CardBase-jj1ptchg.js";import"./BackgroundImage-Cp4CduSN.js";import"./RouterLink-BX7DXdbm.js";import"./Tag-CzvAi0ak.js";import"./IconWrapper-CFaEnyx1.js";import"./ToggleArrow-rukO29T9.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
