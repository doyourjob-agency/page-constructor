import{R as t}from"./iframe-Byy88F1j.js";import{y as f}from"./utils-B3v813nW.js";import{B as o}from"./BasicCard-CsPhC91O.js";import{D as x}from"./Divider-pATYTC6c.js";import{T as u}from"./Title-DsV9aGrn.js";import"./preload-helper-D6kgxu3v.js";import"./index-DEk_VXWw.js";import"./keys-jJBZWZU8.js";import"./_baseKeys-56rcbgE7.js";import"./url-CBFUtOHL.js";import"./index-B5mYO5gl.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-dfXyuJ-U.js";import"./blocks-cPaPB2NZ.js";import"./toString-Bkw1H4O4.js";import"./isSymbol-B1lMad5S.js";import"./Links-CmUjNCdr.js";import"./Link-CbaIDZOS.js";import"./BackLink-DgtqTrCX.js";import"./useAnalytics-zx7-6XI6.js";import"./Button-BOTo_vnh.js";import"./common-DyHeZKXD.js";import"./Icon-DPFKzBFH.js";import"./EventBroker-DGw12ejD.js";import"./FileLink-BWQKLgPk.js";import"./url-C9A5rRC7.js";import"./Label-CfhEzvjS.js";import"./Xmark-D3GY4RdU.js";import"./HTML-MftywlNl.js";import"./ContentList-U84vkI2B.js";import"./Image-C3X6puy5.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BLC-jXHQ.js";import"./v4-Dv1xt2bl.js";import"./Buttons-Xyt4_3dt.js";import"./Button-C3jGvM7S.js";import"./addComponentKeysets-CakM3xeG.js";import"./Link-DQRM0QDi.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CL9qg2Zd.js";import"./Col-0RQE722I.js";import"./CardBase-DlpbOHSo.js";import"./BackgroundImage-Zw7f6c2E.js";import"./RouterLink-CURTKoH_.js";import"./Tag-BuvhJi8A.js";import"./IconWrapper-CO1yvQ6w.js";import"./ToggleArrow-D6UlE_UE.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
