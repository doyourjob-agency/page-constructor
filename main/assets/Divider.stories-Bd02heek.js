import{R as t}from"./iframe-BttOnxwI.js";import{y as f}from"./utils-B64rw9Qn.js";import{B as o}from"./BasicCard-CAPk2VuH.js";import{D as x}from"./Divider-DLzr5XNm.js";import{T as u}from"./Title-B4sn9E7L.js";import"./preload-helper-D6kgxu3v.js";import"./index-_m-QJQx2.js";import"./keys-DKT9E-Ar.js";import"./_baseKeys-BzYeTUWH.js";import"./url-20VGjke2.js";import"./index-o4jwPTn0.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-BYKWOl-b.js";import"./blocks-B3MVBg8P.js";import"./toString-DIwnWDrG.js";import"./isSymbol-CKr-lAGP.js";import"./Links-6VkxkA1v.js";import"./Link-BAUu83N6.js";import"./BackLink-Bp1o8MHY.js";import"./useAnalytics-C9UdcCrp.js";import"./Button-BXmUe8QE.js";import"./common-C8OxDnkr.js";import"./Icon-FqX0VR7Q.js";import"./EventBroker-DjRodnXm.js";import"./FileLink-BR6_snne.js";import"./url-BDMfaL1M.js";import"./Label-BJFvzZOz.js";import"./Xmark-DJEdLS2p.js";import"./HTML-C53BD1js.js";import"./ContentList-DMUq4Y4W.js";import"./Image-C9wIrp2p.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BEU7axEk.js";import"./Buttons-BGYa0nBv.js";import"./Button-BYXF67Zm.js";import"./addComponentKeysets-Cl8DMLS9.js";import"./Link-Bqxfs6-9.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DWbihWbr.js";import"./Col-Z-QZ5Kzu.js";import"./CardBase-DPVBnkDZ.js";import"./BackgroundImage-UHefx8LI.js";import"./RouterLink-DwT2EG21.js";import"./Tag-P2sSVA2m.js";import"./IconWrapper-USiDGW0T.js";import"./ToggleArrow-DFw7T7wU.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
