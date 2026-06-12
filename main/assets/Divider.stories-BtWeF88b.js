import{R as t}from"./iframe--CyCQEba.js";import{y as f}from"./utils-CQW69Uh7.js";import{B as o}from"./BasicCard-kG6YEZrN.js";import{D as x}from"./Divider-BfiAknrr.js";import{T as u}from"./Title-D0UgI7O6.js";import"./preload-helper-D6kgxu3v.js";import"./index-Dc2u6rm4.js";import"./keys-DhGnSUxP.js";import"./_baseKeys-Bl_hliAw.js";import"./url-BAYM1WW2.js";import"./index-DqYFEoBx.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-CR7aUPUV.js";import"./blocks-B8YL-uXi.js";import"./toString-BejYZ5c3.js";import"./isSymbol-tVe0lEHs.js";import"./Links-ugYnKdUz.js";import"./Link-B8cpQ4mC.js";import"./BackLink-DuxqoV1g.js";import"./useAnalytics-HVvFTlYI.js";import"./Button-DZgNvYhy.js";import"./common-Bbe-auR1.js";import"./Icon-CpPMoIty.js";import"./EventBroker-Bh9eEwhz.js";import"./FileLink-DUbOPEDf.js";import"./url-BDHLLsBT.js";import"./Label-jDXk5b1p.js";import"./Xmark-DTPfzDxx.js";import"./YFMWrapper-Cnw38--i.js";import"./HTML-BWA6WKXR.js";import"./ContentList-C2vfdCjB.js";import"./Image-DaTT4xIi.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CTW5HxM-.js";import"./Buttons-CfouIHmt.js";import"./Button-DTMfj2M9.js";import"./addComponentKeysets-BIQHViMl.js";import"./Link-Clc-QHD1.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-Bq_VROcj.js";import"./Col-knnP0VBX.js";import"./CardBase-BydsDF5t.js";import"./BackgroundImage-7QnK22HI.js";import"./RouterLink-BLhza6cC.js";import"./Tag-CSSC58Tv.js";import"./IconWrapper-DqV3vRN5.js";import"./ToggleArrow-BmE8byIO.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
