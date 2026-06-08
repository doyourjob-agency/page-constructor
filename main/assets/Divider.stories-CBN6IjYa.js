import{R as t}from"./iframe-DBvIRFyx.js";import{y as f}from"./utils-DWK2qTUZ.js";import{B as o}from"./BasicCard-DMDbgBNN.js";import{D as x}from"./Divider-DQfJ2ZMj.js";import{T as u}from"./Title-BPfDgYgQ.js";import"./preload-helper-D6kgxu3v.js";import"./index-Ctc5SirR.js";import"./keys-CC-my6IX.js";import"./_baseKeys-CaV6iysJ.js";import"./url-BJyQ_TT-.js";import"./index-C6soc_bh.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-h23XV1DZ.js";import"./blocks-CosF76fA.js";import"./toString-BbD61n4l.js";import"./isSymbol-Df1N_oig.js";import"./Links-BZtSZ46_.js";import"./Link-BHWs3hci.js";import"./BackLink-28_bE3aA.js";import"./useAnalytics-Cvx6Xl2_.js";import"./Button-C6QjRh1J.js";import"./common-D4-4VHp_.js";import"./Icon-DAb8ogHk.js";import"./EventBroker-CEQwuX3S.js";import"./FileLink-X_stg-BU.js";import"./url-Hiq7uCjM.js";import"./Label-CLArCwFM.js";import"./Xmark-DTFOWH4w.js";import"./YFMWrapper-I2CbtndT.js";import"./HTML-C2rm8Yrz.js";import"./ContentList-DMA_NQxn.js";import"./Image-D28YNZlg.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CftXRAKn.js";import"./Buttons-DEub18WM.js";import"./Button-egiPLkL5.js";import"./addComponentKeysets-Cljzq-dZ.js";import"./Link-CgqgUrP_.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CExCqbO0.js";import"./Col-BQV8PfEB.js";import"./CardBase-qb79sJgd.js";import"./BackgroundImage-BJmwJW8u.js";import"./RouterLink-B_bqQfXP.js";import"./Tag-Cp6k27TN.js";import"./IconWrapper-DUmejG6O.js";import"./ToggleArrow-CPLZCtPx.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
