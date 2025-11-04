import{R as t}from"./iframe-YZkSgpZP.js";import{y as f}from"./utils-CodULst6.js";import{B as o}from"./BasicCard-IREMzHo_.js";import{D as x}from"./Divider-BttvRfoJ.js";import{T as u}from"./Title-DVQBWEfP.js";import"./preload-helper-D6kgxu3v.js";import"./index-DceBB6Ud.js";import"./keys-BVIufgXG.js";import"./_baseKeys-D2KZ-tea.js";import"./url-DjCrkVxK.js";import"./index-Br1EAt9b.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-BPZEP7B1.js";import"./blocks-BWLXOoqH.js";import"./toString-TYwxeY92.js";import"./isSymbol-B38lzhK6.js";import"./Links-C5Eo9lFl.js";import"./Link-CG3eNR71.js";import"./BackLink-DR7IN3vu.js";import"./useAnalytics-BWH-u8RN.js";import"./Button-6gjlM1Dj.js";import"./common-DZ464QHq.js";import"./Icon-BscL-bEz.js";import"./EventBroker-BZLCz1LI.js";import"./FileLink-ewmj-hPI.js";import"./url-DKZkUO4V.js";import"./Label-BiuhIkkh.js";import"./Xmark-CwRTHyBp.js";import"./HTML-8eWYB3lR.js";import"./ContentList-BMjAsdkT.js";import"./Image-D6_OmoT0.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DX7Z0lBi.js";import"./v4-Dv1xt2bl.js";import"./Buttons-D1MP1OzC.js";import"./Button-Bqcxwk7M.js";import"./addComponentKeysets-BAudIjQ7.js";import"./Link-UdeWoBuA.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-ClWA8WKC.js";import"./Col-DxVERyB6.js";import"./CardBase-ZnbxKIxp.js";import"./BackgroundImage-qE2Y0Hl9.js";import"./RouterLink-B4t5BNLy.js";import"./Tag-B9lWQX4M.js";import"./IconWrapper-DVeP_Jux.js";import"./ToggleArrow-D7IOnG-L.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
