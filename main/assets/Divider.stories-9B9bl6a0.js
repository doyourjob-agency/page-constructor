import{R as t}from"./iframe-CY1nUJJC.js";import{y as f}from"./utils-CJnYqEA1.js";import{B as o}from"./BasicCard-BPK3UIpx.js";import{D as x}from"./Divider-Cn9UOcHd.js";import{T as u}from"./Title-Bf7PXZcj.js";import"./preload-helper-D6kgxu3v.js";import"./index-BigywgtG.js";import"./keys-CMW6kYR_.js";import"./_baseKeys-B7V5fuYt.js";import"./url-D1tUPYXA.js";import"./index-BYK02flT.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-C_CJ1hzJ.js";import"./blocks-CFqE9Et_.js";import"./toString-CqF8fX6s.js";import"./isSymbol-DD4S5_-X.js";import"./Links-DpXp-KJ2.js";import"./Link-CMCwQntW.js";import"./BackLink-DdeCeyUN.js";import"./useAnalytics-rz_TRGs5.js";import"./Button-D2XOp4oi.js";import"./common-B7ghHYsY.js";import"./Icon-Czoomyyo.js";import"./EventBroker-DyzztYen.js";import"./FileLink-CEre7meq.js";import"./url-B1y0G7Hh.js";import"./Label-xLT3z9y4.js";import"./Xmark-DziZi_cv.js";import"./HTML-faWEuFlD.js";import"./ContentList-DL9u7pFm.js";import"./Image-BLT4kscO.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DtohkJu2.js";import"./v4-Dv1xt2bl.js";import"./Buttons-6_q2gfdj.js";import"./Button-D1cxl-qn.js";import"./addComponentKeysets-BShtn4wo.js";import"./Link-DKN7k2Cf.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DGV6J8oV.js";import"./Col-B__7Kpz2.js";import"./CardBase-BQQpfMaD.js";import"./BackgroundImage-DlXVx9fc.js";import"./RouterLink-319Ta8A4.js";import"./Tag-DtdoJsiK.js";import"./IconWrapper-BZskxmDT.js";import"./ToggleArrow-3v4a32Aj.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
