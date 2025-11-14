import{R as t}from"./iframe-CYgSBbMM.js";import{y as f}from"./utils-5ptBsluH.js";import{B as o}from"./BasicCard-BdxEqVw4.js";import{D as x}from"./Divider-YsN93-GX.js";import{T as u}from"./Title-B0PtgxOv.js";import"./preload-helper-D6kgxu3v.js";import"./index-BSS7tL5B.js";import"./keys-BjJNwKN3.js";import"./_baseKeys-CXWvG9EP.js";import"./url-Dj8uLgVi.js";import"./index-CsWJdzqo.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-DzCh0-OK.js";import"./blocks-B0tudgeh.js";import"./toString-xeA5K6pj.js";import"./isSymbol-DOdCpa2M.js";import"./Links-Ce-0u59R.js";import"./Link-DwjD9QiD.js";import"./BackLink-DMQE0EEi.js";import"./useAnalytics-CJ37mCAc.js";import"./Button-CayWhfm3.js";import"./common-Cc7DONNZ.js";import"./Icon-2cl7eypL.js";import"./EventBroker-Dlek21ss.js";import"./FileLink-COiHx1Du.js";import"./url-Ck5_HlXo.js";import"./Label-BZAC8P1C.js";import"./Xmark-BpH4BeZg.js";import"./HTML-DOPh580K.js";import"./ContentList-CAiPrGkn.js";import"./Image-DMxSDS7K.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CIrzYGEB.js";import"./v4-Dv1xt2bl.js";import"./Buttons-C7orzzQ-.js";import"./Button-DR40km2m.js";import"./addComponentKeysets-DNf_rpTa.js";import"./Link-CCGEIvt_.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CsCRYX0K.js";import"./Col-B7Jg8-lG.js";import"./CardBase-CYV0EOly.js";import"./BackgroundImage-CCdKeOns.js";import"./RouterLink-y-BIiBDD.js";import"./Tag-Cf8lkjn4.js";import"./IconWrapper-B262U-Vj.js";import"./ToggleArrow-DwMft5X8.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
