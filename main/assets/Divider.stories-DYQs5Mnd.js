import{R as t}from"./iframe-DoEhbtx8.js";import{y as f}from"./utils-Ilu3wleP.js";import{B as o}from"./BasicCard-B47O-kpR.js";import{D as x}from"./Divider-BL6yF0Jy.js";import{T as u}from"./Title-CjBNP7GD.js";import"./preload-helper-D6kgxu3v.js";import"./index-B56JcU8P.js";import"./keys-BcIFwhv4.js";import"./_baseKeys-Rzg12NWq.js";import"./url-BmuiIgDy.js";import"./index-uk_lBj6o.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-Dk2edqYr.js";import"./Content-D4I3JuL0.js";import"./blocks-BAt4DE0b.js";import"./toString-j_sfxIHO.js";import"./isSymbol-ZdgmVX5U.js";import"./Links-DFXzDQLh.js";import"./Link-BF341ca_.js";import"./BackLink-BRhHT9j1.js";import"./useAnalytics-hXLCTyVx.js";import"./Button-BBH2hJMk.js";import"./common-C-TXXStr.js";import"./Icon-CkYr_L_-.js";import"./EventBroker-tqFT0W9g.js";import"./FileLink-UzqBuSyD.js";import"./url-DE4sbS4j.js";import"./Label-yybPsxva.js";import"./Xmark-D1xF2Euw.js";import"./HTML-BGzB2ZsL.js";import"./ContentList-CH2Vgio3.js";import"./Image-CoqWwxWP.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DAYZLuRd.js";import"./Buttons-BuoSnRrO.js";import"./Button-CwcrlJ4c.js";import"./addComponentKeysets-CoNrK4Aa.js";import"./Link-BYiiDkRZ.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DI3XD2_R.js";import"./Col-B--KtG2K.js";import"./CardBase-DlduE33h.js";import"./BackgroundImage-Bzg0wYck.js";import"./RouterLink-CrMc0z2y.js";import"./Tag-DOiAT9V-.js";import"./IconWrapper-Z_c_T4Li.js";import"./ToggleArrow-oYeI2Pen.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
