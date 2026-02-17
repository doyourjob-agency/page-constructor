import{R as t}from"./iframe-OW8Ggjuq.js";import{y as f}from"./utils-DS5tXCrU.js";import{B as o}from"./BasicCard-D2e-mqgz.js";import{D as x}from"./Divider-6Lbu3ScN.js";import{T as u}from"./Title-DxjtnqUm.js";import"./preload-helper-D6kgxu3v.js";import"./index-1a9cGUdW.js";import"./keys-ybnsZ38L.js";import"./_baseKeys-O-EwnPmO.js";import"./url-BcNH5GeC.js";import"./index-DPdCYw7X.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-XocBrmur.js";import"./blocks-DcZMA3mO.js";import"./toString-Vc0T7Mv2.js";import"./isSymbol-C0GaXORr.js";import"./Links-BWt3iVIj.js";import"./Link-B2nKaHH0.js";import"./BackLink-BXYpbE8G.js";import"./useAnalytics-CYDs8hKl.js";import"./Button-CHabt-zb.js";import"./common-BKpNEOU6.js";import"./Icon-cncFJBmY.js";import"./EventBroker-Bx2bhJdX.js";import"./FileLink-DtB3vGe3.js";import"./url-DHpCP1u4.js";import"./Label-rxvBfWru.js";import"./Xmark-DWIrzSDP.js";import"./HTML-vCxQrKMJ.js";import"./ContentList-Bue1l352.js";import"./Image-YXBPwjHn.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-B2OuY80g.js";import"./v4-Dv1xt2bl.js";import"./Buttons-Csdq47sK.js";import"./Button-DagMxsFd.js";import"./addComponentKeysets-DbMH28rX.js";import"./Link-DfGbQ_em.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BPvAtSHB.js";import"./Col-C8guRsgK.js";import"./CardBase-DTTPCmLI.js";import"./BackgroundImage-Bv76hMEw.js";import"./RouterLink-C1Z9RefN.js";import"./Tag-BOjqf9zM.js";import"./IconWrapper-C2CDemjp.js";import"./ToggleArrow-CGAaSi5F.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
