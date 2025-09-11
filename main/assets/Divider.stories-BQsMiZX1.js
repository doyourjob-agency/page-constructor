import{R as t}from"./iframe-VsWcB4Fh.js";import{y as f}from"./utils-BJqXbpXW.js";import{B as o}from"./BasicCard-BjYvAi18.js";import{D as x}from"./Divider-CL9iPBE2.js";import{T as u}from"./Title-CKk_R3dt.js";import"./preload-helper-D6kgxu3v.js";import"./index-DHVn45eE.js";import"./keys-Sd0wCQtZ.js";import"./_baseKeys-DaREzuzO.js";import"./url-Bie0-WQo.js";import"./index-CN1V4cPj.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-BPc274tv.js";import"./blocks-DWlP4CmR.js";import"./toString-nZFhMdFI.js";import"./isSymbol-CEZXzrvJ.js";import"./Links-DwRaDF41.js";import"./Link-DUQmT5RS.js";import"./BackLink-DonaD3im.js";import"./useAnalytics-CkS5fXKT.js";import"./Button-BAo-siaB.js";import"./common-C9bzL5M6.js";import"./Icon-C0Isd6qC.js";import"./EventBroker-pynjf8oZ.js";import"./FileLink-CjKF9EvC.js";import"./url-BLDrSq0W.js";import"./Label-Bd7aTOPE.js";import"./Xmark-t_Lr0aTc.js";import"./HTML-WVUCZivf.js";import"./ContentList-CZ6rNH8g.js";import"./Image-2B3NvYLH.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-Ef_NDzQw.js";import"./v4-Dv1xt2bl.js";import"./Buttons-BoLfnILX.js";import"./Button-fGKab2h5.js";import"./addComponentKeysets-DsLmyyqq.js";import"./Link-PRXMYUQ8.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DJuQBYq6.js";import"./Col-B-PULnZV.js";import"./CardBase-CDTZrmm3.js";import"./BackgroundImage-DqkcIUvd.js";import"./RouterLink-BzyGhY6Z.js";import"./Tag-CcZGKfra.js";import"./IconWrapper-BxS0_v6T.js";import"./ToggleArrow-DGb_8upp.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
