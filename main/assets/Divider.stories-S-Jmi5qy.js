import{R as t}from"./iframe-CNS0eWLh.js";import{y as f}from"./utils-D5hxLiXF.js";import{B as o}from"./BasicCard-BgzF8Yhc.js";import{D as x}from"./Divider-CLGpzcHL.js";import{T as u}from"./Title-BwC48Uhr.js";import"./preload-helper-D6kgxu3v.js";import"./index-Do4w0Nwd.js";import"./keys-XB7wWsV6.js";import"./_baseKeys-CzO8cb8-.js";import"./url-Qdk1I1e-.js";import"./index-DAcdTs8-.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-BtH2Kc8d.js";import"./blocks-CKNnBYJ_.js";import"./toString-D4ZtJmvs.js";import"./isSymbol-DYK90O57.js";import"./Links-DFwZ-VlZ.js";import"./Link-CiqXGTM9.js";import"./BackLink-De9GoO_x.js";import"./useAnalytics-rRw5gY4n.js";import"./Button-R3dGCx1Q.js";import"./common-DHvowuGr.js";import"./Icon-CWqAhzzN.js";import"./EventBroker-qm4wQK1i.js";import"./FileLink-DfORCh3S.js";import"./url-D0XmQAwe.js";import"./Label-DR7Xk9cn.js";import"./Xmark-IjF-afpp.js";import"./HTML-BNONOzSm.js";import"./ContentList-DiO-QaKx.js";import"./Image-BrZOpAVQ.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-0Ry09BrB.js";import"./v4-Dv1xt2bl.js";import"./Buttons-J3BMCvfd.js";import"./Button-klKHSkJ5.js";import"./addComponentKeysets-DUkd4oDt.js";import"./Link-DwX6DNO1.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DGLXbV53.js";import"./Col-BSFFmSLR.js";import"./CardBase-D0d8umU0.js";import"./BackgroundImage-CPLNOW3E.js";import"./Tag-Bg-vYjmj.js";import"./IconWrapper-CenJ_H_z.js";import"./ToggleArrow-CUSahFxa.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
