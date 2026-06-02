import{R as t}from"./iframe-BS5N9oMV.js";import{y as f}from"./utils-BnLgzmb2.js";import{B as o}from"./BasicCard-D5HKa7tr.js";import{D as x}from"./Divider-PKhZUW_V.js";import{T as u}from"./Title-BFN2f2J8.js";import"./preload-helper-D6kgxu3v.js";import"./index-GeM4uvS4.js";import"./keys-zcAF2PwP.js";import"./_baseKeys-GuARi27A.js";import"./url-Cpau5TSu.js";import"./index-Cp59S_UO.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-B3jHiR2u.js";import"./Content-C8TFmWik.js";import"./blocks-Bp2_gooL.js";import"./toString-6pgqk4aN.js";import"./isSymbol-OgMSnwvO.js";import"./Links-Xvu6FgCl.js";import"./Link-DlxOqod9.js";import"./BackLink-CLv4FeqF.js";import"./useAnalytics-CiFnuDgd.js";import"./Button-B4j0j22c.js";import"./common-tksLIYLd.js";import"./Icon-BEN1lAN8.js";import"./EventBroker-BQY07yVP.js";import"./FileLink-DEFvLfnw.js";import"./url-BuvOGU9k.js";import"./Label-CNDnuaLH.js";import"./Xmark-D-35Cro4.js";import"./YFMWrapper-CIX9_Cr_.js";import"./HTML-CSrvARsR.js";import"./ContentList-zzbhj3_7.js";import"./Image-CDugz-ud.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CePy1PTC.js";import"./Buttons-FbQa_ff3.js";import"./Button-Ba9yFdBd.js";import"./addComponentKeysets-BKjslE2r.js";import"./Link-DSepeMnQ.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BSxhIqJm.js";import"./Col-Bjh6iLbk.js";import"./CardBase-BuHKBnH7.js";import"./BackgroundImage-DHl-Pugv.js";import"./RouterLink-GzmhzsmG.js";import"./Tag-BjV2hlrs.js";import"./IconWrapper-0c8nk3dG.js";import"./ToggleArrow-BCEMGqz6.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
