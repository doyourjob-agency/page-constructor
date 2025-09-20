import{R as t}from"./iframe-XLyRJgkP.js";import{y as f}from"./utils-3LZvwlsE.js";import{B as o}from"./BasicCard-Dh3sdrVz.js";import{D as x}from"./Divider-BZilxRsX.js";import{T as u}from"./Title-1JcUuwgv.js";import"./preload-helper-D6kgxu3v.js";import"./index-BDv7wm-b.js";import"./keys-BW0yHGXK.js";import"./_baseKeys-CO4BYajA.js";import"./url-C9s-sito.js";import"./index-BBdEgalB.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-QLfm1nIm.js";import"./blocks-8By6GsD4.js";import"./toString-BXzLcrek.js";import"./isSymbol-upGJbxWb.js";import"./Links-SEEqvYXs.js";import"./Link-C6yyXmDT.js";import"./BackLink-D-P9H4Kq.js";import"./useAnalytics-alhPC80O.js";import"./Button-BgrVJPRE.js";import"./common-DbSVTKYO.js";import"./Icon-D4oQJ36H.js";import"./EventBroker-DNZhNMXM.js";import"./FileLink-DgT0nnu1.js";import"./url-CTB2nees.js";import"./Label-DHxiLINX.js";import"./Xmark-N2fWSJMc.js";import"./HTML-DomFljV1.js";import"./ContentList-BjcMHoFE.js";import"./Image-B4l8Yeq-.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DE6Qsxvf.js";import"./v4-Dv1xt2bl.js";import"./Buttons-DEJr8Rtx.js";import"./Button-kZhj7KeX.js";import"./addComponentKeysets--rvgUgX0.js";import"./Link-BZgSVdY2.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CLisWRz0.js";import"./Col-DYjTOG8t.js";import"./CardBase-CT2m85ww.js";import"./BackgroundImage-Bd08TvVN.js";import"./RouterLink-C9a3JWjq.js";import"./Tag-Cc9whUmK.js";import"./IconWrapper-Cpw6XsGK.js";import"./ToggleArrow-ByRGXWfB.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
