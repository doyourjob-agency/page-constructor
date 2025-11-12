import{R as t}from"./iframe-DypMrT8Q.js";import{y as f}from"./utils-DN-35VIp.js";import{B as o}from"./BasicCard-CleLMKpS.js";import{D as x}from"./Divider-Cu79k386.js";import{T as u}from"./Title-Da5vE8qa.js";import"./preload-helper-D6kgxu3v.js";import"./index-BKl-4ky0.js";import"./keys-Bwb0MQ_d.js";import"./_baseKeys-DcS_Aftc.js";import"./url-CEERFYki.js";import"./index-De4iwGMG.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-Dyr43dMt.js";import"./blocks-CYbrqKUl.js";import"./toString-CIl0h6yv.js";import"./isSymbol-CsqKKSbH.js";import"./Links-DDqyySEl.js";import"./Link-Bh_2-24z.js";import"./BackLink-ClqHHJwb.js";import"./useAnalytics-BTUHjhYA.js";import"./Button-DwSoHoIQ.js";import"./common-PumEAZNL.js";import"./Icon-CBVutLIR.js";import"./EventBroker-Clbhw589.js";import"./FileLink-CnjTw9Pa.js";import"./url-uUN2bl8s.js";import"./Label-CoqlBdrx.js";import"./Xmark-BdeO1_n_.js";import"./HTML-CQK87mw7.js";import"./ContentList-Br7Z8lP9.js";import"./Image-DbGufZ4P.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-zJ8HQHz9.js";import"./v4-Dv1xt2bl.js";import"./Buttons-DXqDjM3f.js";import"./Button-Bk821QP-.js";import"./addComponentKeysets-zTmQh11i.js";import"./Link-DQ6Lx4gi.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-Da1fKJiW.js";import"./Col-VSg3hzTq.js";import"./CardBase-BU2CAJeI.js";import"./BackgroundImage-6swAkV7e.js";import"./RouterLink-BxzebTKw.js";import"./Tag-B3Vpb4vX.js";import"./IconWrapper-yKbUxMXP.js";import"./ToggleArrow-Dq_TdnSB.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
