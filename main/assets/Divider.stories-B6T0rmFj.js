import{R as t}from"./iframe-CAcfPi7F.js";import{y as f}from"./utils-CplYA7Bk.js";import{B as o}from"./BasicCard-CBLfNEAk.js";import{D as x}from"./Divider-KPVKmuu3.js";import{T as u}from"./Title-BTWqmfHC.js";import"./preload-helper-D6kgxu3v.js";import"./index-C95d7WoI.js";import"./keys-BhJzx56U.js";import"./_baseKeys-BBDP5AoU.js";import"./url-b1JpdxQY.js";import"./index-DyngHIuD.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-BYKWIHxL.js";import"./blocks-BDfQrkKn.js";import"./toString-BquyudUC.js";import"./isSymbol-B7ly9Epo.js";import"./Links-Ik3-nY-8.js";import"./Link-CmmAGZ_m.js";import"./BackLink-Dlnm0_C6.js";import"./useAnalytics-DUbt6v3b.js";import"./Button-D_eGYPoO.js";import"./common-D_SB7ifW.js";import"./Icon-eNWoxUwk.js";import"./EventBroker-D7ZZvrsQ.js";import"./FileLink-BEZ1dyi4.js";import"./url-DcDkvzrG.js";import"./Label-DJEIJ4O6.js";import"./Xmark-DC5GaZyl.js";import"./HTML-DJfw0n1w.js";import"./ContentList-BJkYbXqA.js";import"./Image-CsCFDpKp.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-zYGJBqL8.js";import"./Buttons-BTSoMpAP.js";import"./Button-AazeE5gj.js";import"./addComponentKeysets-DdSy6KF2.js";import"./Link-2DKqt05u.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BXjn3R6S.js";import"./Col-CRUQPt92.js";import"./CardBase-BQqhDCt8.js";import"./BackgroundImage-epod62-N.js";import"./RouterLink-ryhvzg7h.js";import"./Tag-D-UCqNFB.js";import"./IconWrapper-C4-yyytw.js";import"./ToggleArrow-B26iJS3i.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
