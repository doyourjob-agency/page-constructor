import{R as t}from"./iframe-iQe-NxUO.js";import{y as f}from"./utils-CmqUhQWV.js";import{B as o}from"./BasicCard-DH3Mox3Y.js";import{D as x}from"./Divider-B6f_Od1O.js";import{T as u}from"./Title-Cu2TKvxM.js";import"./preload-helper-D6kgxu3v.js";import"./index-CBeIilrr.js";import"./keys-BZivoXiv.js";import"./_baseKeys-DmUoVqR1.js";import"./url-BJsCOlxV.js";import"./index-BaAnR7Ns.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-Drc4GUbS.js";import"./blocks-pssy8cw0.js";import"./toString-CfVE0Xvs.js";import"./isSymbol-DbShevyb.js";import"./Links-ZIdhQbf_.js";import"./Link-CND1CAzG.js";import"./BackLink-nhT1TsPq.js";import"./useAnalytics-DuWyvc1X.js";import"./Button-hTuook_G.js";import"./common-DNYUttMN.js";import"./Icon-BXbemZC7.js";import"./EventBroker-D7MYgTgk.js";import"./FileLink-D2RKGT8_.js";import"./url-0nO2o7CH.js";import"./Label-5cpGy3oA.js";import"./Xmark-Dd3YEn-F.js";import"./HTML-DjBE_XFq.js";import"./ContentList-SZcyhuYM.js";import"./Image-BI0-Yd6W.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BPPVkqZ_.js";import"./v4-Dv1xt2bl.js";import"./Buttons-DY5J90TS.js";import"./Button-BEUPY4ur.js";import"./addComponentKeysets-BoHENuY0.js";import"./Link-yJ3qah6y.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-C1Fgoz15.js";import"./Col-B5rDLp-Q.js";import"./CardBase-Bu9OoQEy.js";import"./BackgroundImage-afK8RZNt.js";import"./RouterLink-teTqtd48.js";import"./Tag-Dw1xBNYA.js";import"./IconWrapper-BFHz8B8q.js";import"./ToggleArrow-D1xiAp--.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
