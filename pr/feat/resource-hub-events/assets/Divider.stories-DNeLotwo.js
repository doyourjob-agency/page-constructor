import{R as t}from"./iframe-CHIM9fdr.js";import{y as f}from"./utils-DoM44Ir5.js";import{B as o}from"./BasicCard-DdL8jfrP.js";import{D as x}from"./Divider-kHutOfxV.js";import{T as u}from"./Title-BBlA9vP9.js";import"./preload-helper-D6kgxu3v.js";import"./index-Dya7rnWI.js";import"./keys-f4Ird06T.js";import"./_baseKeys-B398h1r0.js";import"./url-Bn-ydxhP.js";import"./index-C3LX3XSa.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-BQWNb8w2.js";import"./blocks-BCBcm4uX.js";import"./toString-DVniCK0S.js";import"./isSymbol-DrBqa0ra.js";import"./Links-Blprg-jv.js";import"./Link-DH8fIc7n.js";import"./BackLink-y7kcyxbA.js";import"./useAnalytics-B_cPF_Wb.js";import"./Button-TZ9BDOAp.js";import"./common-KP6P9xht.js";import"./Icon-iSQ5BFt7.js";import"./EventBroker-CNX52iyM.js";import"./FileLink-DXuDE1BE.js";import"./url-1egG7ZV3.js";import"./Label-CQx6Btmc.js";import"./Xmark-CrgWXKul.js";import"./HTML-BsneMZBw.js";import"./ContentList-BKDmTYuM.js";import"./Image-C5BiAfxb.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CHpjveka.js";import"./v4-Dv1xt2bl.js";import"./Buttons-BfwwCWGy.js";import"./Button-DEAsETTl.js";import"./addComponentKeysets-BWtX6lrO.js";import"./Link-D4SWxr_Y.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-D_jU_7rP.js";import"./Col-BphornjG.js";import"./CardBase-BkK03TCW.js";import"./BackgroundImage-BfEvFsJq.js";import"./RouterLink-D8Vwm4WP.js";import"./Tag-pr16CP61.js";import"./IconWrapper-C814kLJI.js";import"./ToggleArrow-DTKKzx0l.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
