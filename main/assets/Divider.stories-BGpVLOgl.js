import{R as t}from"./iframe-Bm_UqHdr.js";import{y as f}from"./utils-dXuZcYLJ.js";import{B as o}from"./BasicCard-BlzGqEHm.js";import{D as x}from"./Divider-BbOl2TA-.js";import{T as u}from"./Title-DsoyYRFY.js";import"./preload-helper-D6kgxu3v.js";import"./index-CEnNTBDq.js";import"./keys-0Ma2QCdt.js";import"./_baseKeys-Cxb-2nf-.js";import"./url-C-9E5IZH.js";import"./index-BIkbbOxV.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-DI6tn4N3.js";import"./blocks-BJIshKwN.js";import"./toString-BErCPozg.js";import"./isSymbol-CLC6GJcy.js";import"./Links-za_xD68F.js";import"./Link-BTJF7UjV.js";import"./BackLink-vCD439jC.js";import"./useAnalytics-BOpoat41.js";import"./Button-XOqjwW1F.js";import"./common-DsOkpsVJ.js";import"./Icon-WSmqtkz1.js";import"./EventBroker-aZsTuHDC.js";import"./FileLink-CFeKgu_X.js";import"./url-GbAWKL04.js";import"./Label-CuVXZ759.js";import"./Xmark-691yA3Z_.js";import"./HTML-VhLSqFYV.js";import"./ContentList-CuREKDso.js";import"./Image-DhptcsbS.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BTr15saZ.js";import"./v4-Dv1xt2bl.js";import"./Buttons-GUzkkR1I.js";import"./Button-SbjZrfUk.js";import"./addComponentKeysets-Ct4wtIia.js";import"./Link-CTsQHq33.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DuXmqm6P.js";import"./Col-BsZIw_1w.js";import"./CardBase-CcALiG12.js";import"./BackgroundImage-Dnln6j_P.js";import"./RouterLink-Cqd3rziY.js";import"./Tag-D1tGBroc.js";import"./IconWrapper-3hff0XmX.js";import"./ToggleArrow-GJGJ7e0R.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
