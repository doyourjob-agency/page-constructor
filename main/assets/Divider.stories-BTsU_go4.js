import{R as t}from"./iframe-DE7HVByQ.js";import{y as f}from"./utils-B_tVE-_p.js";import{B as o}from"./BasicCard-RW7UQmqL.js";import{D as x}from"./Divider-CVxqiPmx.js";import{T as u}from"./Title-DFotiLDw.js";import"./preload-helper-D6kgxu3v.js";import"./index-Dhes2PZ2.js";import"./keys-DH-ti1a2.js";import"./_baseKeys-CBdQV1zK.js";import"./url-DA_PKEta.js";import"./index-57_v79-k.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-DPN0TkBp.js";import"./blocks-BzsPtKBc.js";import"./toString-DW_r0gCg.js";import"./isSymbol-2GYqo6Fn.js";import"./Links-CX5rKUPM.js";import"./Link-BOIxyKvy.js";import"./BackLink-CHq6D6ZL.js";import"./useAnalytics-DLlC-mql.js";import"./Button-CObXKAff.js";import"./common-r9DMG53S.js";import"./Icon-DNQ7EzEC.js";import"./EventBroker-BxFh7Ii_.js";import"./FileLink-Y6NIOWum.js";import"./url-DSCUlMXl.js";import"./Label-Drn0L7_m.js";import"./Xmark-CLFrOqOo.js";import"./HTML-BY-ppFnc.js";import"./ContentList-u8sbDa73.js";import"./Image-Cbbfujr_.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-D7Oh1jOS.js";import"./v4-Dv1xt2bl.js";import"./Buttons-C5EpB4M3.js";import"./Button-B5NMRxRL.js";import"./addComponentKeysets-CZIQE-4d.js";import"./Link-CpTbP-iG.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BnAx3czG.js";import"./Col-yv5_vb3Y.js";import"./CardBase-wAIRzD-O.js";import"./BackgroundImage-C1WV_A36.js";import"./RouterLink-IV0c0Mp_.js";import"./Tag-DW73ZM1o.js";import"./IconWrapper-DTZWXINP.js";import"./ToggleArrow-BAV9bIYh.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
