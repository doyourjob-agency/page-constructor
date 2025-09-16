import{R as t}from"./iframe-C8-gMF3W.js";import{y as f}from"./utils-CNFyIiSP.js";import{B as o}from"./BasicCard-CpCwrROL.js";import{D as x}from"./Divider-DTMn37sw.js";import{T as u}from"./Title-BnC8tkvB.js";import"./preload-helper-D6kgxu3v.js";import"./index-BJr499rw.js";import"./keys-kKhvbW40.js";import"./_baseKeys-zH3oV_mk.js";import"./url-P9tjjGqP.js";import"./index-CcVhswei.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-XSxxeT80.js";import"./blocks-B6-VMZmc.js";import"./toString-B2tAvCY-.js";import"./isSymbol-Ca9uF17j.js";import"./Links-BYprIlPK.js";import"./Link-DuCQAVqj.js";import"./BackLink-CE_dcnbc.js";import"./useAnalytics-z2FcT6ds.js";import"./Button-Di8ti2Bi.js";import"./common-Dr22fxdG.js";import"./Icon-C7G1yzO_.js";import"./EventBroker-CC38NPcm.js";import"./FileLink-DYrNLH-4.js";import"./url-Tof0OiGn.js";import"./Label-HUjO_8VK.js";import"./Xmark-S-M6yDoP.js";import"./HTML-DSAZMDt4.js";import"./ContentList-Vy9mYqqG.js";import"./Image-CXfB-woy.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-FSP3adSQ.js";import"./v4-Dv1xt2bl.js";import"./Buttons-DY1LRGDs.js";import"./Button-CwX7ZVds.js";import"./addComponentKeysets-DOr-5WIn.js";import"./Link-CwUV_xAi.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DrVW45Zz.js";import"./Col-C3c8avQp.js";import"./CardBase-MYOtGpvu.js";import"./BackgroundImage-DN24ATTq.js";import"./RouterLink-DviSw5zl.js";import"./Tag-B7S415GV.js";import"./IconWrapper-CCiVFEgN.js";import"./ToggleArrow-AweN1uwF.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
