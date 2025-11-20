import{R as t}from"./iframe-B0G_RIo8.js";import{y as f}from"./utils-DXprVojS.js";import{B as o}from"./BasicCard-D1YHnnGQ.js";import{D as x}from"./Divider-LAMuEfXv.js";import{T as u}from"./Title-CwoKYGHB.js";import"./preload-helper-D6kgxu3v.js";import"./index-Cav987cU.js";import"./keys-CJZbcsqO.js";import"./_baseKeys-XX-Jn6sP.js";import"./url-CJV39TXq.js";import"./index-DysHJtsZ.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-DNUKkkyA.js";import"./blocks-BFZexbgz.js";import"./toString-LZqDmAeR.js";import"./isSymbol-B9I6ZVQk.js";import"./Links-BZY1VX8a.js";import"./Link-CTjqOyke.js";import"./BackLink-CrX8WcW0.js";import"./useAnalytics-2noR0RzL.js";import"./Button-BTjz9Efv.js";import"./common-CuoOToAD.js";import"./Icon-4InpV5Yl.js";import"./EventBroker-B6hbkjo4.js";import"./FileLink-BEmkL6cM.js";import"./url-teXoI2f7.js";import"./Label-X9ayMAt8.js";import"./Xmark-q7sE7IWG.js";import"./HTML-DiawMaCc.js";import"./ContentList-DJ9xg8BR.js";import"./Image-DbBNf3PT.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-D5WWwXsK.js";import"./v4-Dv1xt2bl.js";import"./Buttons-CPT1jhXG.js";import"./Button-XY7n9Hoh.js";import"./addComponentKeysets-IBhbPm8j.js";import"./Link-DU6b1HMc.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-D9ICIfi9.js";import"./Col-DuSOB4h8.js";import"./CardBase-CYvZ9sEP.js";import"./BackgroundImage-BjJxo1Jn.js";import"./RouterLink-BazPosdf.js";import"./Tag-BRCR7xCR.js";import"./IconWrapper-CIKpiztg.js";import"./ToggleArrow-BnmNN9FG.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
