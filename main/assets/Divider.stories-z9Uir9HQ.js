import{R as t}from"./iframe-Bwa3R1hY.js";import{y as f}from"./utils-Bi1WgG4Q.js";import{B as o}from"./BasicCard-xcElO7uS.js";import{D as x}from"./Divider-QU1xjaVk.js";import{T as u}from"./Title-BOU5SYKz.js";import"./preload-helper-D6kgxu3v.js";import"./index-Bsl938n9.js";import"./keys-CHgKhCmW.js";import"./_baseKeys-BNQmDV8c.js";import"./url-1fUyWh5u.js";import"./index-B5AELZRZ.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-BjLjjywy.js";import"./blocks-CLa-q1MD.js";import"./toString-DIJe7v2Y.js";import"./isSymbol-D00E5gCs.js";import"./Links-BjrV76e5.js";import"./Link-Lr_4C036.js";import"./BackLink-6oa6lLi4.js";import"./useAnalytics-C2Mc2xGf.js";import"./Button-CBYClWpC.js";import"./common-DGGHbweA.js";import"./Icon-C15rskei.js";import"./EventBroker-DvzL8dVM.js";import"./FileLink-Ck72c1ux.js";import"./url-BKA95PIA.js";import"./Label-cnn4lhpq.js";import"./Xmark-CYOTz8q3.js";import"./HTML-CMNLx56h.js";import"./ContentList-wraoKx51.js";import"./Image-CIF16gKQ.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-EO3V9gZj.js";import"./v4-Dv1xt2bl.js";import"./Buttons-WpJ5RlZ_.js";import"./Button-BuMuco3v.js";import"./addComponentKeysets--AKxMCs6.js";import"./Link-BZumnR8J.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-B7xCPwZO.js";import"./Col-CgGpyC4Y.js";import"./CardBase-CzgWe8SN.js";import"./BackgroundImage-COae3YSK.js";import"./RouterLink-C3uj5mrO.js";import"./Tag-BJU5diIm.js";import"./IconWrapper-DnEWtpnC.js";import"./ToggleArrow-B0wFMsr-.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
