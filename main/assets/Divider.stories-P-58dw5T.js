import{R as t}from"./iframe-Cvk6sx4L.js";import{y as f}from"./utils-6yVXCtlS.js";import{B as o}from"./BasicCard-CJHBjsNL.js";import{D as x}from"./Divider-DY17kPkE.js";import{T as u}from"./Title-CSrTc4fP.js";import"./preload-helper-D6kgxu3v.js";import"./index-CavCnoo1.js";import"./keys-B8D2z6sm.js";import"./_baseKeys-DlNOT-YZ.js";import"./url-Brv61XgA.js";import"./index-BtiPeoMa.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-Dk2edqYr.js";import"./Content-DpPUkw21.js";import"./blocks-DfA92QSx.js";import"./toString-22RZf4eQ.js";import"./isSymbol-DLAHsGge.js";import"./Links-DfsxffH0.js";import"./Link-C3fJYq2E.js";import"./BackLink-DUgxl1H5.js";import"./useAnalytics-DumB-0Fy.js";import"./Button-Bec5Gydi.js";import"./common-DfchAiZK.js";import"./Icon-Cj11yAf_.js";import"./EventBroker-qDP57l4q.js";import"./FileLink-CenOSrwM.js";import"./url-CT8lDf7H.js";import"./Label-BGf5VswQ.js";import"./Xmark-HDEUla_t.js";import"./HTML-gkT1zJ11.js";import"./ContentList-j6Kv6E2j.js";import"./Image-BReTC6b7.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BkObXhOE.js";import"./Buttons-CGBSbcWO.js";import"./Button-CkSwzqX-.js";import"./addComponentKeysets-py2JDplj.js";import"./Link-rywbOarC.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-D0e28YJh.js";import"./Col-CHTSAZuu.js";import"./CardBase-CS0QtaRY.js";import"./BackgroundImage-CQUhiamC.js";import"./RouterLink-D-Ytf4KW.js";import"./Tag-C53Ypuiy.js";import"./IconWrapper-B77CsXHj.js";import"./ToggleArrow-DYrzdQsE.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
