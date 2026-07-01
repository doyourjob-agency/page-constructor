import{R as t}from"./iframe-YJN6xEtS.js";import{y as f}from"./utils-BPlBfeip.js";import{B as o}from"./BasicCard-YySAQ4YP.js";import{D as x}from"./Divider-KMdzt22F.js";import{T as u}from"./Title-DOS0lRmu.js";import"./preload-helper-D6kgxu3v.js";import"./index-SGprmh8j.js";import"./keys-DAypp6h5.js";import"./_baseKeys-Hjk4033z.js";import"./url-7YUIkJtN.js";import"./index-XKsxWLRK.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-T9pPiHQD.js";import"./blocks-Bok_DGhq.js";import"./toString-B246JPNc.js";import"./isSymbol-D9C4gly9.js";import"./Links-CVO8ieiG.js";import"./Link-BLBQukbc.js";import"./BackLink-SjCDb_xM.js";import"./useAnalytics-DDFym8i4.js";import"./Button-DHCTD3BV.js";import"./common--jP98qPE.js";import"./Icon-BRkW3J8F.js";import"./EventBroker-BlQ-PPc0.js";import"./FileLink-Bm6RXQSY.js";import"./url-C5Cn40pJ.js";import"./Label-i-ZTpHXy.js";import"./Xmark-CXdD7Ca6.js";import"./YFMWrapper-DZiqyK0A.js";import"./HTML-D0s27OLX.js";import"./ContentList-jnpJM_U0.js";import"./Image-BQXJupaC.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-B0PWi35r.js";import"./Buttons-CDh8bEMh.js";import"./Button-i3IFaaHJ.js";import"./addComponentKeysets-D9Et3ahI.js";import"./Link-Dt4Bxf3N.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-XlMBorH_.js";import"./Col-BrzsG7W-.js";import"./CardBase-DnsfMH2m.js";import"./BackgroundImage-CnXU0gHP.js";import"./RouterLink-DDkjJc_Z.js";import"./Tag-D3LDX4_E.js";import"./IconWrapper-CKvrlFVi.js";import"./ToggleArrow-vUU0R9EE.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
