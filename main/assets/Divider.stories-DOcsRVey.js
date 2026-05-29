import{R as t}from"./iframe-1CLMGsDs.js";import{y as f}from"./utils-CVx1qjvs.js";import{B as o}from"./BasicCard-DNSEDB4-.js";import{D as x}from"./Divider-Damr3sv2.js";import{T as u}from"./Title-BCXOn_n3.js";import"./preload-helper-D6kgxu3v.js";import"./index-KQUzg-uZ.js";import"./keys-C4yhIGXA.js";import"./_baseKeys-BCp2Q4z7.js";import"./url-Hq4e0cGJ.js";import"./index-GjKWpSs2.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-Dk2edqYr.js";import"./Content-mTjB-ebg.js";import"./blocks-d9V-Yskb.js";import"./toString-pjt8tm6t.js";import"./isSymbol-PMF2fgoL.js";import"./Links-BTAIjNn7.js";import"./Link-D9hWcEGZ.js";import"./BackLink-D0zCg2Cy.js";import"./useAnalytics-CP0XfDjI.js";import"./Button-jQ8U5mNn.js";import"./common-B0vXac85.js";import"./Icon-Dp9hBC-a.js";import"./EventBroker-9U6_d-Y6.js";import"./FileLink-m1dowJ7k.js";import"./url-BgrVzhzc.js";import"./Label-BJl0Dw2E.js";import"./Xmark-B2VHm0wU.js";import"./HTML-Ct5khzJC.js";import"./ContentList-QweNjFon.js";import"./Image-CUKvxVbX.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BhP0O2bM.js";import"./Buttons-CNtukixH.js";import"./Button-g-TdGUbO.js";import"./addComponentKeysets-CHXn_JrZ.js";import"./Link-DNWKj9Sa.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BWi6INKS.js";import"./Col-BJ9RklXZ.js";import"./CardBase-BH-9ifn1.js";import"./BackgroundImage-CFO5-ND-.js";import"./RouterLink-D6XVgcyO.js";import"./Tag-BjU89xBI.js";import"./IconWrapper-DGD2yvhb.js";import"./ToggleArrow-iQQHBmQp.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
    </div>`,...(c=(d=m.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const ft=["Default","Sizes"];export{r as Default,m as Sizes,ft as __namedExportsOrder,vt as default};
