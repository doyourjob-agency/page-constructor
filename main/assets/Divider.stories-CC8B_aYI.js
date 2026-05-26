import{R as t}from"./iframe-DKF6_DE9.js";import{y as f}from"./utils-C235_l66.js";import{B as o}from"./BasicCard-DoeWYz-f.js";import{D as x}from"./Divider-CZdH7maD.js";import{T as u}from"./Title-QJpX5m6_.js";import"./preload-helper-D6kgxu3v.js";import"./index-bNpjyt_a.js";import"./keys-OjyA2Vhf.js";import"./_baseKeys-BcC0JoUV.js";import"./url-BalAWd4o.js";import"./index-D72JmvJP.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-C6EHN52v.js";import"./blocks-DTOqaXi7.js";import"./toString-xhVaRr-Y.js";import"./isSymbol-JZjfsPe0.js";import"./Links-DeOrhJQd.js";import"./Link-BbZVehVF.js";import"./BackLink-GLvfAizt.js";import"./useAnalytics-DhMIPPHm.js";import"./Button-CKZUWaSZ.js";import"./common-Dcz5n93p.js";import"./Icon-Zn12yb1W.js";import"./EventBroker-P4bDg2Z5.js";import"./FileLink-BrCTWjg3.js";import"./url-oHsKLA0F.js";import"./Label-BR3UH2y0.js";import"./Xmark-esiC-bb-.js";import"./HTML-CWfqg-Ob.js";import"./ContentList-DdChpbKn.js";import"./Image-Bzvxi_fD.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BarSlmfG.js";import"./Buttons-DyxvLu8n.js";import"./Button-DBJS2sOf.js";import"./addComponentKeysets-DGBCoSr2.js";import"./Link-D_6Dsk2H.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-GSohvrZ7.js";import"./Col-B02ozJuo.js";import"./CardBase-DFxle6UG.js";import"./BackgroundImage-CVfm8YmG.js";import"./RouterLink-BgJb5fof.js";import"./Tag-C2po7Dq1.js";import"./IconWrapper-B1VpxN3b.js";import"./ToggleArrow-DV1qzHI6.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
    </div>`,...(c=(d=m.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const ft=["Default","Sizes"];export{r as Default,m as Sizes,ft as __namedExportsOrder,vt as default};
