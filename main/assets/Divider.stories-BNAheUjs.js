import{R as t}from"./iframe-BtleyvXr.js";import{y as f}from"./utils-D81rUEL5.js";import{B as o}from"./BasicCard-CKQ5_u7h.js";import{D as x}from"./Divider-Bc6S5-LR.js";import{T as u}from"./Title-WXISs3Lf.js";import"./preload-helper-D6kgxu3v.js";import"./index-UGO-hYwO.js";import"./keys-6OOrTaNR.js";import"./_baseKeys-BEXlriON.js";import"./url-N5XvVy_5.js";import"./index-CNfh6_Y-.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-BNJq89LL.js";import"./blocks-B4WJiBBp.js";import"./toString-5r-DfOea.js";import"./isSymbol-8yCkPwZ0.js";import"./Links-2VzlMgaK.js";import"./Link-CmG3B1ib.js";import"./BackLink-CaYxO5Kh.js";import"./useAnalytics-B0OIh0J7.js";import"./Button-BbIVwr77.js";import"./common-CJztA5aT.js";import"./Icon-CNBJKWdV.js";import"./EventBroker-DioNH9Um.js";import"./FileLink-BN92cTOm.js";import"./url-Ct41HlS4.js";import"./Label-CG1rwdxq.js";import"./Xmark-6guZSi9t.js";import"./YFMWrapper-CnU_4NKw.js";import"./HTML-CP224HdV.js";import"./ContentList-BLlFCNqs.js";import"./Image-BKWnjHxE.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CcppwnQM.js";import"./Buttons-CQI42tgS.js";import"./Button-CZM8gJPa.js";import"./addComponentKeysets-Bc-g93Kz.js";import"./Link-CHP4oOgk.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-D_9cXTSo.js";import"./Col-y9FlsyoL.js";import"./CardBase-BI2hdrkM.js";import"./BackgroundImage-CnEZrS2e.js";import"./RouterLink-CWBzeqGM.js";import"./Tag-C5rkekoU.js";import"./IconWrapper-BgCvz2km.js";import"./ToggleArrow-BRfrTvIC.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
