import{R as t}from"./iframe-CNFu8gIt.js";import{y as f}from"./utils-Bwf1BPaM.js";import{B as o}from"./BasicCard-CLHtllDN.js";import{D as x}from"./Divider-Bp5psRHW.js";import{T as u}from"./Title-yAcGsCYZ.js";import"./preload-helper-D6kgxu3v.js";import"./index-BDf78xBm.js";import"./keys-D6ZaUZtO.js";import"./_baseKeys-DehxQGMX.js";import"./url-ou2emppF.js";import"./index-B4nYE5vs.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-5XJOwUBS.js";import"./blocks-lrZUZsoi.js";import"./toString-C1nR7r8h.js";import"./isSymbol-CgwLivXo.js";import"./Links-CRIEAdif.js";import"./Link-LMKNU8P2.js";import"./BackLink-DCkxg7TP.js";import"./useAnalytics-CaZI8VZN.js";import"./Button-QJXcDx14.js";import"./common-Z0yfXeB3.js";import"./Icon-DFc7pZ_s.js";import"./EventBroker-I-Yw2c7s.js";import"./FileLink-CJB6Bqpj.js";import"./url-DF8LWM5V.js";import"./Label-DVtn3SOy.js";import"./Xmark-CKMN69Ij.js";import"./HTML-DvZDSxft.js";import"./ContentList-CHZhuLxx.js";import"./Image-NMbjLIsH.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-C-L3R3Mb.js";import"./v4-Dv1xt2bl.js";import"./Buttons-BQUcj-gJ.js";import"./Button-mOIKbNyb.js";import"./addComponentKeysets-Cval13qO.js";import"./Link-UrJ7j8Vs.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DP-Z0PJS.js";import"./Col-CryKRGVB.js";import"./CardBase-D2jtBiVZ.js";import"./BackgroundImage-TRmcXzAG.js";import"./RouterLink-DFAPNx7z.js";import"./Tag-DgLnheMS.js";import"./IconWrapper-jYk4ylWe.js";import"./ToggleArrow-BXVVOrtd.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
