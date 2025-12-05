import{R as t}from"./iframe-BtPp2-6F.js";import{y as f}from"./utils-Cg08o1ld.js";import{B as o}from"./BasicCard-BMO6tBn6.js";import{D as x}from"./Divider-CpojRi3r.js";import{T as u}from"./Title-DoyBVyX7.js";import"./preload-helper-D6kgxu3v.js";import"./index-D-qVky_K.js";import"./keys-jp6Yg8Xy.js";import"./_baseKeys-fMA1g1Y3.js";import"./url-DfHvafLL.js";import"./index-jKAJR6le.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-BBlYWNYe.js";import"./blocks-BPtprduI.js";import"./toString-CoD5nXpa.js";import"./isSymbol-C_W7YknL.js";import"./Links-BgG66xf4.js";import"./Link-kcLu1OFG.js";import"./BackLink-D9l8YRN8.js";import"./useAnalytics-7v6L2Py1.js";import"./Button-CymnIgKn.js";import"./common-Bg1oPs5N.js";import"./Icon-ge3kX2Kz.js";import"./EventBroker-BHJKOwVK.js";import"./FileLink-C-bz7ItH.js";import"./url-sNOxalE1.js";import"./Label-BS7z8JVm.js";import"./Xmark-B0PjAWZt.js";import"./HTML-DGdRb7C3.js";import"./ContentList-u8zOYrsm.js";import"./Image-DuW_eoB0.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BcTSFTAs.js";import"./v4-Dv1xt2bl.js";import"./Buttons-BplPjMAN.js";import"./Button-Cmljkf6o.js";import"./addComponentKeysets-B2R4tFeQ.js";import"./Link-7qcPnbCn.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-2LKtsJFw.js";import"./Col-CLYQFFpM.js";import"./CardBase-DW1onKM3.js";import"./BackgroundImage-BigIQl7h.js";import"./RouterLink-C8RhT-lW.js";import"./Tag-CYTLWADU.js";import"./IconWrapper-8wO4k07F.js";import"./ToggleArrow-DIkZyWpW.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
