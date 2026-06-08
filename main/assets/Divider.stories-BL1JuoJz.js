import{R as t}from"./iframe-DkWBgyU4.js";import{y as f}from"./utils-B72udsmA.js";import{B as o}from"./BasicCard-CWbxgt0x.js";import{D as x}from"./Divider-BQ5r3vKL.js";import{T as u}from"./Title-3WDZWSM5.js";import"./preload-helper-D6kgxu3v.js";import"./index-gmEJcrk9.js";import"./keys-D5onFS1g.js";import"./_baseKeys-H3s05cG3.js";import"./url-CSpElOVp.js";import"./index-BVi-LkQT.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-PXqcg3UB.js";import"./blocks-1AWImTjn.js";import"./toString-CcJKlr_J.js";import"./isSymbol-YTftJNuh.js";import"./Links-CHZtyM7Y.js";import"./Link-CYo879Wy.js";import"./BackLink-ClRrR47m.js";import"./useAnalytics-u7TjY54e.js";import"./Button-DzqGO0_l.js";import"./common-D172zV3B.js";import"./Icon-DOaz8OL1.js";import"./EventBroker-DVxVnPq_.js";import"./FileLink-B3vslxxQ.js";import"./url-iyGSemz8.js";import"./Label-BGopimLh.js";import"./Xmark-B93QD_iN.js";import"./YFMWrapper-nvg7EmoU.js";import"./HTML-BZ6TpndV.js";import"./ContentList-DDCaD6yW.js";import"./Image-Cl1jDbkM.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-jSLau5Qu.js";import"./Buttons-DXgg98g1.js";import"./Button-CGoODc6V.js";import"./addComponentKeysets-vL_ZD4h0.js";import"./Link--sJGSInQ.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DHNxzF9i.js";import"./Col-C86Xyyk9.js";import"./CardBase-BomEkXDU.js";import"./BackgroundImage-BcEi_Ths.js";import"./RouterLink-D9VtT2MS.js";import"./Tag-BBC_Tg6u.js";import"./IconWrapper-NBFBxp8r.js";import"./ToggleArrow-FrHHCuwy.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
