import{R as t}from"./iframe-C5K0qjKf.js";import{y as f}from"./utils-fIiKxSBU.js";import{B as o}from"./BasicCard-CUSJVLdX.js";import{D as x}from"./Divider-oLHjPENV.js";import{T as u}from"./Title-wBvsTNYE.js";import"./preload-helper-D6kgxu3v.js";import"./index-BrjYGDuU.js";import"./keys-kw6be2e6.js";import"./_baseKeys-Bkx7JmtG.js";import"./url-Dy17hpCt.js";import"./index-DdMZ_Y-F.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-CoMyRjNn.js";import"./blocks-rFMlIYCr.js";import"./toString-24zzOxiz.js";import"./isSymbol-DjGY8U6i.js";import"./Links-DAyVXAK6.js";import"./Link-DvSxDxLE.js";import"./BackLink-w5S2A6Wy.js";import"./useAnalytics-Cm9hQYo9.js";import"./Button-0W6rrsNM.js";import"./common-Ck9oPKye.js";import"./Icon-Bb_c-BZd.js";import"./EventBroker-DwtOWpkC.js";import"./FileLink-C3iYTxjL.js";import"./url-AR4pUE7t.js";import"./Label-DtN7Nt1f.js";import"./Xmark-CCob-bfs.js";import"./HTML-B1Dyxp6S.js";import"./ContentList-Dxy5VqOP.js";import"./Image-Be6NY-_u.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BHxsoAQz.js";import"./v4-Dv1xt2bl.js";import"./Buttons-B2pscWb3.js";import"./Button-DQEaguLo.js";import"./addComponentKeysets-aijTkCYb.js";import"./Link-CbwiF4Cy.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DrtEhMkd.js";import"./Col-DYhGrXfF.js";import"./CardBase-BlOxqomC.js";import"./BackgroundImage-Dh57J1Kc.js";import"./RouterLink-BxuOm4wz.js";import"./Tag-BqoCyK7N.js";import"./IconWrapper-DH4xE7Z3.js";import"./ToggleArrow-ByD6NPTH.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
