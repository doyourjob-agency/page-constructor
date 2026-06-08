import{R as t}from"./iframe-BnoQ_xdl.js";import{y as f}from"./utils-SXukmvNV.js";import{B as o}from"./BasicCard-CNo8ILS1.js";import{D as x}from"./Divider-PG_F2zTT.js";import{T as u}from"./Title-jVWtIq_s.js";import"./preload-helper-D6kgxu3v.js";import"./index-Dpw-wSKp.js";import"./keys-V3xuKlQX.js";import"./_baseKeys-DDDlfnPf.js";import"./url-BIBcXG1c.js";import"./index-DU5y6W7E.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-Cqjjyp7v.js";import"./blocks-DSyHRo0q.js";import"./toString-ByeWcXoB.js";import"./isSymbol-Deqj7SFO.js";import"./Links-BQR6T_iI.js";import"./Link-Cxbf9W9M.js";import"./BackLink-C3QOF2qe.js";import"./useAnalytics-Cj0uucYX.js";import"./Button-NS_DVc82.js";import"./common-Bij8OyO_.js";import"./Icon--hvcy4Hv.js";import"./EventBroker-D8TO1ke4.js";import"./FileLink-DjOi0ot3.js";import"./url-BVJqLvHB.js";import"./Label-D93OYHP3.js";import"./Xmark-bBxlmNUj.js";import"./YFMWrapper-Cky7d3jD.js";import"./HTML-D1LSsdAv.js";import"./ContentList-C9Bs5P9B.js";import"./Image-B7Ru7ve_.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-aJBgZWfW.js";import"./Buttons-CTztdG7F.js";import"./Button-CncAPFzU.js";import"./addComponentKeysets-BU9bilsk.js";import"./Link-CO3iwb4R.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DKyxD8r5.js";import"./Col-Bze5p3_Y.js";import"./CardBase-CK27YJNT.js";import"./BackgroundImage-B332Urvy.js";import"./RouterLink-6aEnv7Q1.js";import"./Tag-CDbvPHHb.js";import"./IconWrapper-BarCiBRr.js";import"./ToggleArrow-BD4DQZlV.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
