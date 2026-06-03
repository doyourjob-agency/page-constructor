import{R as t}from"./iframe-BGtq9bLU.js";import{y as f}from"./utils-CiYr3Rox.js";import{B as o}from"./BasicCard-DIsR_v31.js";import{D as x}from"./Divider-e2Ot7aZC.js";import{T as u}from"./Title-9lthAr2b.js";import"./preload-helper-D6kgxu3v.js";import"./index-B9kCp5dw.js";import"./keys-BVa1AU9J.js";import"./_baseKeys-Ig9SbK1Y.js";import"./url-CyUaPZdP.js";import"./index-D7lfr9mi.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-B3jHiR2u.js";import"./Content-Da74BVRe.js";import"./blocks-BbhXbAK9.js";import"./toString-CgnQG-8_.js";import"./isSymbol-yGBpFPHt.js";import"./Links-BT__KQoz.js";import"./Link-Ciwen6gb.js";import"./BackLink-oDGXuEcp.js";import"./useAnalytics-1kkFt85D.js";import"./Button-Dj7ZkMSI.js";import"./common-B6LaCEt_.js";import"./Icon-qy9L0sBq.js";import"./EventBroker-B1iajSk1.js";import"./FileLink-BPrJZnYg.js";import"./url-Bl7ncYXJ.js";import"./Label-Bnh8SLw2.js";import"./Xmark-CTyE6C59.js";import"./YFMWrapper-DibN2Jlv.js";import"./HTML-CYl4Fbcf.js";import"./ContentList-DG5ZnZdd.js";import"./Image-7Zr3BnKf.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-ChHN5RCo.js";import"./Buttons-CVSp_Nn6.js";import"./Button-DJeinkc-.js";import"./addComponentKeysets-TBXz7Yz8.js";import"./Link-CG_YXnx8.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-Ch_Ts4Kg.js";import"./Col-_fnR2dW_.js";import"./CardBase-C7M4EzPb.js";import"./BackgroundImage-BOPW2dqJ.js";import"./RouterLink-mS8KGWh-.js";import"./Tag-5j7y6bT3.js";import"./IconWrapper-CEEp0qfU.js";import"./ToggleArrow-BxbHdfYf.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
