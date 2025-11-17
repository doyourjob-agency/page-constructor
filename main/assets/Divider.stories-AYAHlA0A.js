import{R as t}from"./iframe-DP02aQkD.js";import{y as f}from"./utils-5rXNIts-.js";import{B as o}from"./BasicCard-CIbWe1Zz.js";import{D as x}from"./Divider-BeM9Thw7.js";import{T as u}from"./Title-BLZsd6NS.js";import"./preload-helper-D6kgxu3v.js";import"./index-Ctno1lG6.js";import"./keys-DASBcYmZ.js";import"./_baseKeys-CEpV2rZt.js";import"./url-CIFK1I-c.js";import"./index-7rCfiriZ.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-DsX7p4Nn.js";import"./blocks-BwLuowHo.js";import"./toString-Bwn0N5-1.js";import"./isSymbol-9dQiztko.js";import"./Links-DA-soiMo.js";import"./Link-55ikbYaf.js";import"./BackLink-DuQ6LWD4.js";import"./useAnalytics-k0CgeXsD.js";import"./Button-CkAl67h5.js";import"./common-BfwX388o.js";import"./Icon-DBvR3Gh4.js";import"./EventBroker-DVV9Od0g.js";import"./FileLink-DSV_Lil3.js";import"./url-CsrAYyDv.js";import"./Label-gMrXstYN.js";import"./Xmark-BgBGW7yi.js";import"./HTML-D7RxhakM.js";import"./ContentList-DmgVaSf7.js";import"./Image-CFsCixsO.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-NP7ZbX-g.js";import"./v4-Dv1xt2bl.js";import"./Buttons-Dm8XlRe_.js";import"./Button-C022AfpU.js";import"./addComponentKeysets-Dyzo1rWZ.js";import"./Link-BZ0eEBun.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-D677u8OK.js";import"./Col-DhPPoTpE.js";import"./CardBase-DrxVcR5c.js";import"./BackgroundImage-By1prTnD.js";import"./RouterLink-DpRxS0BR.js";import"./Tag-BOtQjgwm.js";import"./IconWrapper-Btr5dk07.js";import"./ToggleArrow-EepOubZv.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
