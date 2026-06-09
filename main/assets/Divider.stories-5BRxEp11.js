import{R as t}from"./iframe-D3z0bRu3.js";import{y as f}from"./utils-BzoZTBX8.js";import{B as o}from"./BasicCard-HgkQPTZ4.js";import{D as x}from"./Divider-BYAWP7oO.js";import{T as u}from"./Title-DzSpFuJ-.js";import"./preload-helper-D6kgxu3v.js";import"./index-BAiQA9Zw.js";import"./keys-BZmuf_-K.js";import"./_baseKeys-DO11vHmp.js";import"./url-Dxw8PvtK.js";import"./index-CsrtVyOp.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-BhWPj8xt.js";import"./blocks-D-P9wB04.js";import"./toString-jAhZAyWB.js";import"./isSymbol-CZ1DHM16.js";import"./Links-Cgj9SSPM.js";import"./Link-oEul9ypy.js";import"./BackLink-CLa8lEqC.js";import"./useAnalytics-xHUpFO6t.js";import"./Button-mGcKJdNA.js";import"./common-B2cNZs9O.js";import"./Icon-Dko5UgNd.js";import"./EventBroker-BdKXYQML.js";import"./FileLink-WOqOKkpj.js";import"./url-BUnaqtJk.js";import"./Label-BMXDgkA-.js";import"./Xmark-DAbEvQcB.js";import"./YFMWrapper-CBypnHW0.js";import"./HTML-FBKHuAOd.js";import"./ContentList-GVf_CA5s.js";import"./Image-D5cOMozj.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CkzRi4Ud.js";import"./Buttons-BK57DFCG.js";import"./Button-Cij4Oyn2.js";import"./addComponentKeysets-I_Y_nR3p.js";import"./Link-6oGwlrXs.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BOm6XRp3.js";import"./Col-BwGJsdmd.js";import"./CardBase-pRhycgbH.js";import"./BackgroundImage-8xb5bqgx.js";import"./RouterLink-DpkEA6bd.js";import"./Tag-BA5K7VBy.js";import"./IconWrapper-Cim3sjxn.js";import"./ToggleArrow-Cze558fd.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
