import{R as t}from"./iframe-S8rNUUWY.js";import{y as f}from"./utils-Cibn0BOR.js";import{B as o}from"./BasicCard-DVIHhG72.js";import{D as x}from"./Divider-CEyuNkxl.js";import{T as u}from"./Title-D_z5n2iZ.js";import"./preload-helper-D6kgxu3v.js";import"./index-BkunCFaX.js";import"./keys-CTLjEtOC.js";import"./_baseKeys-BDWNEv4W.js";import"./url-BR73qN84.js";import"./index-DhByadYU.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-LD4o0jhF.js";import"./blocks-CvXBemdk.js";import"./toString-BoKpMl6n.js";import"./isSymbol-CrMTdTlD.js";import"./Links-C5pw63gr.js";import"./Link-BAeBmsko.js";import"./BackLink-DVMmLwHM.js";import"./useAnalytics-Cuzgugdu.js";import"./Button-a6ACOmbI.js";import"./common-MC_-B06B.js";import"./Icon-MK3KmIVD.js";import"./EventBroker-Bl_j59sI.js";import"./FileLink-DPvApaTm.js";import"./url-CFnZElyT.js";import"./Label-B3Es08SV.js";import"./Xmark-DKoXQ-wz.js";import"./YFMWrapper-B7Edt0By.js";import"./HTML-D3tR7nFN.js";import"./ContentList-CqM2qe0b.js";import"./Image-BwIGlDIi.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BdoJRYg7.js";import"./Buttons-CzPX8NR8.js";import"./Button-CpSYGfKt.js";import"./addComponentKeysets-e1dTm3tv.js";import"./Link-DLGp8ahk.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CPZN5J8F.js";import"./Col-ScNxMu6p.js";import"./CardBase-DlfvN7aL.js";import"./BackgroundImage-DHV--NOA.js";import"./RouterLink-De63Zq1D.js";import"./Tag-CAYur_KZ.js";import"./IconWrapper-BUlGuD6x.js";import"./ToggleArrow-BAstGFBZ.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
