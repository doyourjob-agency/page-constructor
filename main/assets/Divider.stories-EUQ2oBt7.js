import{R as t}from"./iframe-D2sYkbgl.js";import{y as f}from"./utils-DdFMIQqn.js";import{B as o}from"./BasicCard-x6rC4Hbk.js";import{D as x}from"./Divider-Fd28V7DG.js";import{T as u}from"./Title-CEzCWNmT.js";import"./preload-helper-D6kgxu3v.js";import"./index-Wc749lp_.js";import"./keys-ia1nFyQi.js";import"./_baseKeys-RtE57ZBN.js";import"./url-DwfGSAeY.js";import"./index-C35tD5Ss.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-CLxhzBkS.js";import"./blocks-CwsepwTl.js";import"./toString-CDyyTOSO.js";import"./isSymbol-CqiNaS-m.js";import"./Links-D-pzFZ3c.js";import"./Link-CJkRXgAQ.js";import"./BackLink-1GjRMStv.js";import"./useAnalytics-D_w0wR--.js";import"./Button-DQGx0K2L.js";import"./common-C-1Dx8Zl.js";import"./Icon-CgDI10HM.js";import"./EventBroker-BJf0VaRG.js";import"./FileLink-D24QqSgK.js";import"./url-5R-Nu_h8.js";import"./Label-D1E7rwa4.js";import"./Xmark-uxR59sSa.js";import"./HTML-DOVHHU1X.js";import"./ContentList-DOLsLFGS.js";import"./Image-CKf4HYEb.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CZs-GWd2.js";import"./v4-Dv1xt2bl.js";import"./Buttons-B1OkFYL9.js";import"./Button-OEyybwk8.js";import"./addComponentKeysets-Z4mq8N1h.js";import"./Link-C4laQXE6.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BjEbMdzz.js";import"./Col-DBRdWdGZ.js";import"./CardBase-DkJK49fv.js";import"./BackgroundImage-DcyhDE-R.js";import"./RouterLink-BdhJb-8Q.js";import"./Tag-_M55MqSB.js";import"./IconWrapper-CpZoQmHz.js";import"./ToggleArrow-Dpk9isL8.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
