import{R as t}from"./iframe-cpI6mJxS.js";import{y as f}from"./utils-DWGjSQIF.js";import{B as o}from"./BasicCard-BfPp1rar.js";import{D as x}from"./Divider-BA2H9QaT.js";import{T as u}from"./Title-DczvuOiM.js";import"./preload-helper-D6kgxu3v.js";import"./index-Do4Bl1xU.js";import"./keys-CcANbPJc.js";import"./_baseKeys-D2pvJ2se.js";import"./url-6QLzq76W.js";import"./index-I8W7xizR.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-8bpFWPwx.js";import"./blocks-OrAlP29-.js";import"./toString-DE5rmfI9.js";import"./isSymbol-CLkGxjOA.js";import"./Links-Cc8Jt-Tc.js";import"./Link-BWvo24l2.js";import"./BackLink-D09S9slL.js";import"./useAnalytics-BWlA-Wx1.js";import"./Button-BeutLx8L.js";import"./common-DegGK7Y-.js";import"./Icon-DiF7Zw0e.js";import"./EventBroker-WpisngeH.js";import"./FileLink-8F8giyJu.js";import"./url-BCUng37N.js";import"./Label-CDGWLJN_.js";import"./Xmark-DFw-lKfP.js";import"./HTML-DMrRf9OS.js";import"./ContentList-BKHvf7do.js";import"./Image-D-2DLdhI.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-C_iV3QFn.js";import"./v4-Dv1xt2bl.js";import"./Buttons-BwLeREGP.js";import"./Button-Bu5SEsP_.js";import"./addComponentKeysets-Cn_mUL5y.js";import"./Link-DKe1N8pt.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CSH_aoCp.js";import"./Col-Db6jh0i-.js";import"./CardBase-DzKrVVQT.js";import"./BackgroundImage-B-nsSILr.js";import"./RouterLink-tOjT-ic7.js";import"./Tag-al0M41fU.js";import"./IconWrapper-DC9zPElR.js";import"./ToggleArrow-3-4h1m6r.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
