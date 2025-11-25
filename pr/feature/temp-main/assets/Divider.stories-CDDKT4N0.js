import{R as t}from"./iframe-DbRW6mLm.js";import{y as f}from"./utils-DrX5bjLB.js";import{B as o}from"./BasicCard-C155otgB.js";import{D as x}from"./Divider-2VXqHTlE.js";import{T as u}from"./Title-DPbqSGpU.js";import"./preload-helper-D6kgxu3v.js";import"./index-BX4qyJ6k.js";import"./keys-6HR8VMJV.js";import"./_baseKeys-CzTn0kam.js";import"./url-CpZycbRl.js";import"./index-DCLt3gjE.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-DHkEiT7A.js";import"./blocks-Cthq4KZ_.js";import"./toString-BjMq8uXF.js";import"./isSymbol-BYN0I77I.js";import"./Links-BSk4iPWu.js";import"./Link-BlXKjGLT.js";import"./BackLink-BomtivmO.js";import"./useAnalytics-xl1bj4Jz.js";import"./Button-DkS1xc8R.js";import"./common-BsRHEG-M.js";import"./Icon-w3RKgqbj.js";import"./EventBroker-CdDwapNM.js";import"./FileLink-DoCajNzv.js";import"./url-iZjoKPMu.js";import"./Label-D1ZL7B-l.js";import"./Xmark-BtA47d8Y.js";import"./HTML-CMG2ymFR.js";import"./ContentList-BpNlBowm.js";import"./Image-BdcJWjH7.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CiA-vJVv.js";import"./v4-Dv1xt2bl.js";import"./Buttons-D9NH8sgv.js";import"./Button-DF899Fcl.js";import"./addComponentKeysets-GGmNMBrC.js";import"./Link-hFU32yzO.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DYra2DH1.js";import"./Col-DMs1xc_g.js";import"./CardBase-Dr2-j-o-.js";import"./BackgroundImage-D-I64UNM.js";import"./RouterLink-coFc6vII.js";import"./Tag-BpweR58Q.js";import"./IconWrapper-1_b2jAuD.js";import"./ToggleArrow-BZy5zYNI.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
