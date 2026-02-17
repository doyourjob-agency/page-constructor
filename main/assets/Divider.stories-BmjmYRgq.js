import{R as t}from"./iframe-BadDr725.js";import{y as f}from"./utils-BGJzvSiw.js";import{B as o}from"./BasicCard-CtK3GysF.js";import{D as x}from"./Divider-sBkiYFgc.js";import{T as u}from"./Title-BTO5xrFU.js";import"./preload-helper-D6kgxu3v.js";import"./index-DnSSFeB6.js";import"./keys-_4JJ__w8.js";import"./_baseKeys-B4BkUihO.js";import"./url-wTs9gchq.js";import"./index-ULmZ_ah_.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-DQjORZ3t.js";import"./blocks-DXp-3q6c.js";import"./toString-mrtIzNm2.js";import"./isSymbol-DbcpSO1y.js";import"./Links-DiAEalxZ.js";import"./Link-EnNx2-Or.js";import"./BackLink-BY7iFtgo.js";import"./useAnalytics-O6jZBrCd.js";import"./Button-h4eLNBrr.js";import"./common-C9a6zvKE.js";import"./Icon-hT6prt5_.js";import"./EventBroker-BFXSXJpm.js";import"./FileLink-_Q3fycTB.js";import"./url-pg_bLeBu.js";import"./Label-BuLb2he-.js";import"./Xmark-BuEyPF5I.js";import"./HTML-D5lgX6-C.js";import"./ContentList-HbzX3v10.js";import"./Image-CeygT9Qv.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-Clm3Hrxu.js";import"./v4-Dv1xt2bl.js";import"./Buttons-BiZr4Y26.js";import"./Button-DCdzbsLY.js";import"./addComponentKeysets-C1Qzf0He.js";import"./Link-yq0FzLBq.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CnhkhDl5.js";import"./Col-XyQO9Qnr.js";import"./CardBase-Z2yA8xZY.js";import"./BackgroundImage-Dk5PuKpv.js";import"./RouterLink-1BgSYies.js";import"./Tag-BmGUdjwn.js";import"./IconWrapper-BmksmDw4.js";import"./ToggleArrow-Bys1B-Op.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
