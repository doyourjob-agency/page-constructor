import{R as t}from"./iframe-BZTXx4Q3.js";import{y as f}from"./utils-BaSfjoOB.js";import{B as o}from"./BasicCard-CZ3pcfVC.js";import{D as x}from"./Divider-C1dnJwX6.js";import{T as u}from"./Title-DpI3Lu9a.js";import"./preload-helper-D6kgxu3v.js";import"./index-Dcw5Z9dT.js";import"./keys-FHnO7FG6.js";import"./_baseKeys-B0X3uQP1.js";import"./url-Ddonq24L.js";import"./index-Lo4if6Sm.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-50CxbrRb.js";import"./blocks-LlDDnYrL.js";import"./toString-BjuLaxwZ.js";import"./isSymbol-C_Irlyxd.js";import"./Links-P-i0szJJ.js";import"./Link-C-IPpscN.js";import"./BackLink-DtYjtA_0.js";import"./useAnalytics-CzwlAXFm.js";import"./Button-DBpAXs0C.js";import"./common-DO51DRwv.js";import"./Icon-B6j_BAGD.js";import"./EventBroker-BtrdCI55.js";import"./FileLink-zZ2I9I2y.js";import"./url-DuONHGFd.js";import"./Label-DD73s8gv.js";import"./Xmark-qJH8Vzuw.js";import"./HTML-B5Oz5WTS.js";import"./ContentList-e324j4Pz.js";import"./Image-BnFEF0Vp.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BEL-df4t.js";import"./v4-Dv1xt2bl.js";import"./Buttons-CIYD-52_.js";import"./Button-a7foRAo-.js";import"./addComponentKeysets-CxSLxPGh.js";import"./Link-Dpq15JPw.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-D6YssFGe.js";import"./Col-C1bgAHiw.js";import"./CardBase-CWcvIewO.js";import"./BackgroundImage-CagUEhPS.js";import"./RouterLink-CjESuNah.js";import"./Tag-Ci9nkNS_.js";import"./IconWrapper-qrySiczX.js";import"./ToggleArrow-CRwLax4Q.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
