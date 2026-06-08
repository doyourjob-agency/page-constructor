import{R as t}from"./iframe-DFY-NbTb.js";import{y as f}from"./utils-BEPGCxII.js";import{B as o}from"./BasicCard-Df099E-6.js";import{D as x}from"./Divider-B2f7k0Qq.js";import{T as u}from"./Title-C1pmPFHr.js";import"./preload-helper-D6kgxu3v.js";import"./index-BXC01-G6.js";import"./keys-CppJlSJu.js";import"./_baseKeys-c64546rO.js";import"./url-D4wNmcgH.js";import"./index-SKuL-lfg.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-DUTlFgEW.js";import"./blocks-_WI8Xglc.js";import"./toString-BXprTvc2.js";import"./isSymbol-CM4DG5cA.js";import"./Links-Cu7yoSWA.js";import"./Link-C0HyGUNx.js";import"./BackLink-CRJ5IPeK.js";import"./useAnalytics-D0kwA2Kl.js";import"./Button-DSBNfebj.js";import"./common-QtN6eevh.js";import"./Icon-Bdp72JUZ.js";import"./EventBroker-2lWvfLJ_.js";import"./FileLink-CEUd1O08.js";import"./url-BmZ_Lyxx.js";import"./Label-DuGP5PkF.js";import"./Xmark-D_jtJAWp.js";import"./YFMWrapper-DAUe9z8D.js";import"./HTML-Xve081si.js";import"./ContentList-BNaE-wlB.js";import"./Image-CWwyg4ms.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CjIFDlfb.js";import"./Buttons-DOjqdaNu.js";import"./Button-6zhmP2hC.js";import"./addComponentKeysets-Bgb7qpwh.js";import"./Link-CbhjM39A.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DLm5t9TB.js";import"./Col-BvzPj53P.js";import"./CardBase-B_o8ig4h.js";import"./BackgroundImage-Hda5yvM1.js";import"./RouterLink-CX_q9eY8.js";import"./Tag-DcZLsEnr.js";import"./IconWrapper-C-hgezxl.js";import"./ToggleArrow-DFjw4Ylz.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
