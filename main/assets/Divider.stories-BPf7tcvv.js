import{R as t}from"./iframe-BPbRq7wY.js";import{y as f}from"./utils-B8Abib9W.js";import{B as o}from"./BasicCard-D6CO85vC.js";import{D as x}from"./Divider--Rxyc1Cd.js";import{T as u}from"./Title-Y5V9PD2z.js";import"./preload-helper-D6kgxu3v.js";import"./index-BK4tUZ0w.js";import"./keys-DmYzo-3U.js";import"./_baseKeys-T2md_V_X.js";import"./url-cqg09j8H.js";import"./index-DGyQYXT3.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-B3jHiR2u.js";import"./Content-BCvV886V.js";import"./blocks-CtRhGdhM.js";import"./toString-CdKbZEBT.js";import"./isSymbol-DF7qnKlQ.js";import"./Links-9M3KpNxR.js";import"./Link-BwfWODLS.js";import"./BackLink-CAMUVzrU.js";import"./useAnalytics-3s60jHqR.js";import"./Button-DB5whvGm.js";import"./common-CHXZN4X8.js";import"./Icon-BcKXLfiy.js";import"./EventBroker-BTL7eBQe.js";import"./FileLink-Bwkx2OZT.js";import"./url-CNtYjUcg.js";import"./Label-C0PNHaOy.js";import"./Xmark--qx8S_US.js";import"./YFMWrapper-B1nkh1_i.js";import"./HTML-CQq-pORP.js";import"./ContentList-RX9at15X.js";import"./Image-jAEu012c.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-Zs5BKnlu.js";import"./Buttons-CWeVopsP.js";import"./Button-Bxd7WbL4.js";import"./addComponentKeysets-BgF2D5cw.js";import"./Link-DaoWKEgI.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BI9L9iff.js";import"./Col-T-1WubJY.js";import"./CardBase-NBYBT1gq.js";import"./BackgroundImage-C4WVxiau.js";import"./RouterLink-CLZBHxtG.js";import"./Tag-DROLOtzh.js";import"./IconWrapper-Bk2G2xjJ.js";import"./ToggleArrow-BqS4Bxry.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
