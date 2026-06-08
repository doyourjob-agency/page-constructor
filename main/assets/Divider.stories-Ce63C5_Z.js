import{R as t}from"./iframe-D0yTPwpH.js";import{y as f}from"./utils-B07n3FGj.js";import{B as o}from"./BasicCard-BI53hTyW.js";import{D as x}from"./Divider-BorMLB7O.js";import{T as u}from"./Title-CAtniB9D.js";import"./preload-helper-D6kgxu3v.js";import"./index-CgbWzPKm.js";import"./keys-DolPcJKY.js";import"./_baseKeys-DxnTVP1v.js";import"./url-BoOgGw1q.js";import"./index-DBmYSTEC.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-BGObT75z.js";import"./blocks-DWtPoJIW.js";import"./toString-B5CuaVYL.js";import"./isSymbol-Dz6CxyvU.js";import"./Links-CSUCzdsE.js";import"./Link-CjQEkLka.js";import"./BackLink-lFcMuQv1.js";import"./useAnalytics-3WZpjiv1.js";import"./Button-ffdfd3AE.js";import"./common-BNr4zm1e.js";import"./Icon-D3-5kvwR.js";import"./EventBroker-Bx85hY8r.js";import"./FileLink-DFlOGJic.js";import"./url-CdJE1tRu.js";import"./Label-D4leL1Cb.js";import"./Xmark-XK9_4GPR.js";import"./YFMWrapper-BYp--q9V.js";import"./HTML-Dx3Ky5ra.js";import"./ContentList-2hCImCnu.js";import"./Image-Dni_EPN7.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-FlOWF8pU.js";import"./Buttons-gQD7rNFq.js";import"./Button-DRcHpUo1.js";import"./addComponentKeysets-DQVu3v5x.js";import"./Link-B5QN7C2n.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-HU_Nv3RJ.js";import"./Col-B0zJUd6t.js";import"./CardBase-Ojq-6DT3.js";import"./BackgroundImage-A02rI9ej.js";import"./RouterLink-Dr-xwU_p.js";import"./Tag-KxGuF8Vk.js";import"./IconWrapper-Dr-9J9bX.js";import"./ToggleArrow-CPB6TO5g.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
