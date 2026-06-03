import{R as t}from"./iframe-DsDAU1J2.js";import{y as f}from"./utils-HFgRELvq.js";import{B as o}from"./BasicCard-BVTnGMQc.js";import{D as x}from"./Divider-BRW8Zvpn.js";import{T as u}from"./Title-BPMVXSMq.js";import"./preload-helper-D6kgxu3v.js";import"./index-JouAyibS.js";import"./keys-Dw8P7O7C.js";import"./_baseKeys-BHfFwvQ7.js";import"./url-D-DsJeVt.js";import"./index-BMp5kzKh.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-B3jHiR2u.js";import"./Content-BZsVlQVi.js";import"./blocks-Bb981kpy.js";import"./toString-CTBa8YLv.js";import"./isSymbol-criAe0JU.js";import"./Links-CzizTGsU.js";import"./Link-Djl5X-0f.js";import"./BackLink-DWDp4gO5.js";import"./useAnalytics-CFdx9AXw.js";import"./Button-D2sYF1Z_.js";import"./common-X1ka1ZJW.js";import"./Icon-DVBu_Qye.js";import"./EventBroker-L573uny3.js";import"./FileLink-B07amn4h.js";import"./url-COqo8xYA.js";import"./Label-C4ye4hmY.js";import"./Xmark-Dbva0pmj.js";import"./YFMWrapper-CXaGdZ8C.js";import"./HTML-DbtucACr.js";import"./ContentList-BifveMGp.js";import"./Image-drFhdeve.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BtjyUPic.js";import"./Buttons-CSwKiawo.js";import"./Button-BpOJrxz-.js";import"./addComponentKeysets-BGMAo6GA.js";import"./Link-C062ri3s.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DjQJ7ozG.js";import"./Col-CGtWKiI2.js";import"./CardBase-DqYfwCUY.js";import"./BackgroundImage-BIjtmCeq.js";import"./RouterLink-CgVnlnFT.js";import"./Tag-BC5xIPbA.js";import"./IconWrapper-DKXGiTE6.js";import"./ToggleArrow-BbWSKkWJ.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
