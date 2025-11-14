import{R as t}from"./iframe-B32uXJeD.js";import{y as f}from"./utils-C0cg1Sjz.js";import{B as o}from"./BasicCard-ByQKnArk.js";import{D as x}from"./Divider-CuK8dKid.js";import{T as u}from"./Title-CE4QgCsN.js";import"./preload-helper-D6kgxu3v.js";import"./index-D_200j8A.js";import"./keys-oAkZBnq0.js";import"./_baseKeys-C0p51oyx.js";import"./url-BcHXaY_c.js";import"./index-o58M0wGY.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-Coxj_GHo.js";import"./blocks-BCp-Ic38.js";import"./toString-BcOXQhw7.js";import"./isSymbol-BJbpYYFQ.js";import"./Links-CqkFQjQK.js";import"./Link-CB-XXQN8.js";import"./BackLink-CraXcbo-.js";import"./useAnalytics-BeufXx9G.js";import"./Button-Be1i_bln.js";import"./common-D0bCD6FF.js";import"./Icon-BPs5iIUh.js";import"./EventBroker-CsxyNCAw.js";import"./FileLink-ZoflYS05.js";import"./url-BbIVvKue.js";import"./Label-D8rXJLnI.js";import"./Xmark-yzLnvx1M.js";import"./HTML-B8FxQ0UO.js";import"./ContentList-Dd8d84A8.js";import"./Image-BBpr2CEc.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-Dkl_5TQg.js";import"./v4-Dv1xt2bl.js";import"./Buttons-uxf8mbGO.js";import"./Button-C0yGzm-A.js";import"./addComponentKeysets-GNoiqI2y.js";import"./Link-C3bGe-Kx.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-KTmHTbTf.js";import"./Col-BzqYUPbG.js";import"./CardBase-DThW437P.js";import"./BackgroundImage-26BAN4ZR.js";import"./RouterLink-D6Z-h9Jb.js";import"./Tag-BDB9_hMx.js";import"./IconWrapper-PCPQWzpS.js";import"./ToggleArrow-Db5S15yz.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
