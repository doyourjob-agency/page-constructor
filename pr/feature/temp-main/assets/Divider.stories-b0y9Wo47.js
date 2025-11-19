import{R as t}from"./iframe-BEh87Qjx.js";import{y as f}from"./utils-bnVamYRU.js";import{B as o}from"./BasicCard-BTma0cxI.js";import{D as x}from"./Divider-wgE0k_8q.js";import{T as u}from"./Title-D83-D7Zc.js";import"./preload-helper-D6kgxu3v.js";import"./index-BOPqNQma.js";import"./keys-CelMrlT8.js";import"./_baseKeys-BXrmV-VB.js";import"./url-BJwUWSpN.js";import"./index-K0uYYSwZ.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-MBDoqRQ0.js";import"./blocks-Dutp0kX9.js";import"./toString-CRaCdjCy.js";import"./isSymbol-BUdqKlJX.js";import"./Links-BpRVlr-M.js";import"./Link-BqZWXN-h.js";import"./BackLink-a-doAQKJ.js";import"./useAnalytics-BmrB9xbq.js";import"./Button-B2HiUhlM.js";import"./common-CbcnF1Ei.js";import"./Icon-Df8HnkdQ.js";import"./EventBroker-BD6RIfZb.js";import"./FileLink-tPh7LQjI.js";import"./url-B-ReA4xa.js";import"./Label-BukrEzr7.js";import"./Xmark-n9urTZJU.js";import"./HTML-Bu1XMdmN.js";import"./ContentList-C7-7h3cc.js";import"./Image-Dpp44mDZ.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-Zo0WWxyN.js";import"./v4-Dv1xt2bl.js";import"./Buttons-Cbczk_9h.js";import"./Button-B3VWYV7E.js";import"./addComponentKeysets-B0IvLp_F.js";import"./Link-DDzfz1b-.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CY0AsP_8.js";import"./Col-BW8RbDwb.js";import"./CardBase-BmrTFGON.js";import"./BackgroundImage-DIu7TppL.js";import"./RouterLink-BWRF2U9j.js";import"./Tag-COHS_cDi.js";import"./IconWrapper-Oxp88Ep1.js";import"./ToggleArrow-BHOIda7J.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
