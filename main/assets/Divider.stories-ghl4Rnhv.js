import{R as t}from"./iframe-CRjZtI-X.js";import{y as f}from"./utils-COwlEw2c.js";import{B as o}from"./BasicCard-BbWu0u2N.js";import{D as x}from"./Divider-Cb_vJ-KZ.js";import{T as u}from"./Title-CZSkgHlk.js";import"./preload-helper-D6kgxu3v.js";import"./index-DyDz5KeS.js";import"./keys-CpIxFZUT.js";import"./_baseKeys-5So3_zmV.js";import"./url-DfqQMY6S.js";import"./index-D7re3CEK.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-8BlhpDQi.js";import"./blocks-CT8Bkcz9.js";import"./toString-B_jg-ttn.js";import"./isSymbol-CNOD4fLI.js";import"./Links-DuiPtQsd.js";import"./Link-H28d9mPl.js";import"./BackLink-CtyjVg2J.js";import"./useAnalytics-Bg1Y8W53.js";import"./Button-FXCktcv1.js";import"./common-A6CQdLeG.js";import"./Icon-I0KnnipJ.js";import"./EventBroker-Czkk6Rjj.js";import"./FileLink-BmTe1lcM.js";import"./url-DWyWKWC9.js";import"./Label-D4P-aOEs.js";import"./Xmark-VBnEfyVJ.js";import"./HTML-BcKgsbs9.js";import"./ContentList-BGc108Q7.js";import"./Image-Ceh9NzNP.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CQyWY9Al.js";import"./v4-Dv1xt2bl.js";import"./Buttons-dH7zLbZ0.js";import"./Button-pc0tNu4T.js";import"./addComponentKeysets-BuTHq2MB.js";import"./Link-Nt2orv2i.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-B1iGBTVn.js";import"./Col-B9QF2vI8.js";import"./CardBase-DzkA147x.js";import"./BackgroundImage-DwGdax2r.js";import"./RouterLink-BTsljK-K.js";import"./Tag-Bc1yqLoB.js";import"./IconWrapper-DnxhGCne.js";import"./ToggleArrow-C2R1c0-o.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
