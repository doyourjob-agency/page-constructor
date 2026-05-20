import{R as t}from"./iframe-jMLvjV71.js";import{y as f}from"./utils-BX-d7EB9.js";import{B as o}from"./BasicCard-DHO8Yj_n.js";import{D as x}from"./Divider-BK6H1_uX.js";import{T as u}from"./Title-Du9jBQ8S.js";import"./preload-helper-D6kgxu3v.js";import"./index-D_tCjj8x.js";import"./keys-B1AxgZOf.js";import"./_baseKeys-J6Uqn1cB.js";import"./url-DarnPhls.js";import"./index-CYWwxv0P.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-CvLLVPNk.js";import"./blocks-DYtNJhV0.js";import"./toString-NuBa6DIc.js";import"./isSymbol-iawQwjo-.js";import"./Links-Lfi6PsyX.js";import"./Link-izmpy58w.js";import"./BackLink-D895fBkp.js";import"./useAnalytics-BAkGlE-V.js";import"./Button-CDOozNRY.js";import"./common-q55kLBeP.js";import"./Icon-BcmF_zzV.js";import"./EventBroker-BNWlORfx.js";import"./FileLink-pyXkb2by.js";import"./url-DKPCI7-2.js";import"./Label-Ba_GcudC.js";import"./Xmark--wHenjoC.js";import"./HTML-BUckjBBy.js";import"./ContentList-BaOz2qTq.js";import"./Image-CJs_1Uu0.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-xUfXwGsD.js";import"./Buttons-CQCT3FVQ.js";import"./Button-WOG5h-pD.js";import"./addComponentKeysets-BPNyOzLf.js";import"./Link-Q6WRKbtL.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-Cy8Yjv4h.js";import"./Col-KknbLiHM.js";import"./CardBase-BB0MwkGt.js";import"./BackgroundImage-Can-Ypvy.js";import"./RouterLink-B2swtHao.js";import"./Tag-CQk0fqfL.js";import"./IconWrapper-XW-mj1mZ.js";import"./ToggleArrow-DAOPAUZh.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
