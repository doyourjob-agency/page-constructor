import{R as t}from"./iframe-BjugjGxW.js";import{y as f}from"./utils-fJSfLSAS.js";import{B as o}from"./BasicCard-gfuY4u0s.js";import{D as x}from"./Divider-BO1hO9Nz.js";import{T as u}from"./Title-CKVb1XEI.js";import"./preload-helper-D6kgxu3v.js";import"./index-48_A92Nh.js";import"./keys-DHYXA-16.js";import"./_baseKeys-f20WIWKx.js";import"./url-BzalatHN.js";import"./index-CL7pMgNt.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-DSvY6wxN.js";import"./blocks-BKG-NOkU.js";import"./toString-e3ZDwmGI.js";import"./isSymbol-BQOB-eJ7.js";import"./Links-C_XpERrX.js";import"./Link-B4_AkMhI.js";import"./BackLink-C0muG5wF.js";import"./useAnalytics-C9bbjZCC.js";import"./Button-Clu8bSfr.js";import"./common-YOwh80C4.js";import"./Icon-DafBFma-.js";import"./EventBroker-glohIjFL.js";import"./FileLink-S2a5k1dw.js";import"./url-D0QHXViX.js";import"./Label-B9TtMLPf.js";import"./Xmark-rB-B1L9Y.js";import"./YFMWrapper-D_ni8AZF.js";import"./HTML-DEs2N_xe.js";import"./ContentList-X8jOjSJJ.js";import"./Image-Bf5dnYPe.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BhTA6A6h.js";import"./Buttons-BHpJ8QHp.js";import"./Button-DBMA7kxP.js";import"./addComponentKeysets-D5_VDGEM.js";import"./Link-Czplv3Wc.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-19RfS4PL.js";import"./Col-BOTb8tm8.js";import"./CardBase-vhUD9AsS.js";import"./BackgroundImage-MSb3nysf.js";import"./RouterLink-C2NjNQ7S.js";import"./Tag-5dijah3R.js";import"./IconWrapper-BB3wHt9k.js";import"./ToggleArrow-CwrOPVuZ.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
