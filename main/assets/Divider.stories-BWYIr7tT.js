import{R as t}from"./iframe-CvP5AmDV.js";import{y as f}from"./utils-D4ilC4G2.js";import{B as o}from"./BasicCard-DcGQYViD.js";import{D as x}from"./Divider-BAUWPa7Q.js";import{T as u}from"./Title-ZYYQ-FRA.js";import"./preload-helper-D6kgxu3v.js";import"./index-DR4eiBYb.js";import"./keys-CX2TIxpe.js";import"./_baseKeys-C3BGPZSj.js";import"./url-Bs9gf-bV.js";import"./index-COT1hyY_.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-Dk2edqYr.js";import"./Content-BUlQmgaj.js";import"./blocks-BKzPeYR0.js";import"./toString-CBpHM_c_.js";import"./isSymbol-BZjTc0Tb.js";import"./Links-DVNSL7MA.js";import"./Link-BCH7S6iv.js";import"./BackLink-CokTz5OQ.js";import"./useAnalytics-i-RdRlH6.js";import"./Button-B2MZ3SsH.js";import"./common-DCCjvQ_i.js";import"./Icon-CxS_j2SA.js";import"./EventBroker-fcRAZblI.js";import"./FileLink-BNiWadc4.js";import"./url-C8WZTM0B.js";import"./Label-DhyHwWYi.js";import"./Xmark-olM8yVYa.js";import"./HTML-D9sfrGSL.js";import"./ContentList-CZ1l31TX.js";import"./Image-BG599s64.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-B0HoiYFn.js";import"./Buttons-CX7Hraax.js";import"./Button-DKaubS5j.js";import"./addComponentKeysets-Jkvo3ksi.js";import"./Link-CwmnHUj_.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-D6SumNET.js";import"./Col-B7tUjEJX.js";import"./CardBase-CkP0Q3dB.js";import"./BackgroundImage-CXSLVsif.js";import"./RouterLink-DEDIyIOX.js";import"./Tag-BvIDu47_.js";import"./IconWrapper-OUOBSU2E.js";import"./ToggleArrow-CfP2cXV8.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
    </div>`,...(c=(d=m.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const ft=["Default","Sizes"];export{r as Default,m as Sizes,ft as __namedExportsOrder,vt as default};
