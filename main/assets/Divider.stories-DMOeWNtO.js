import{R as t}from"./iframe-wKZ2JJrK.js";import{y as f}from"./utils-Dj3kx13X.js";import{B as o}from"./BasicCard-B9_7lPCQ.js";import{D as x}from"./Divider-CDQuHauK.js";import{T as u}from"./Title-CYA1_nz4.js";import"./preload-helper-D6kgxu3v.js";import"./index-CzGznRby.js";import"./keys-zojEFiF_.js";import"./_baseKeys-DFXKYtGa.js";import"./url-vaVkGV5I.js";import"./index-epAx-uYB.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-Dk2edqYr.js";import"./Content-Brk5uyEa.js";import"./blocks-Dyzl8FeL.js";import"./toString-CYz2U_dX.js";import"./isSymbol-BVHKlcv7.js";import"./Links-BXANqT8T.js";import"./Link-DgU21bcu.js";import"./BackLink-DV7WiEoI.js";import"./useAnalytics-CmrzM_Xi.js";import"./Button-CPQkvl10.js";import"./common-D7q5351b.js";import"./Icon-C9zGnB4Z.js";import"./EventBroker-s2VAGZDI.js";import"./FileLink-CFK5KvFP.js";import"./url-DhJQ5st4.js";import"./Label-DDmwRTLt.js";import"./Xmark-h_aRZX_k.js";import"./YFMWrapper-X2KAE7fM.js";import"./HTML-59J1kuqV.js";import"./ContentList-CbD0-ZrW.js";import"./Image-CjPL_Cye.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BarVH_9D.js";import"./Buttons-CK6yu8FE.js";import"./Button-p66VtARy.js";import"./addComponentKeysets-LcppHXmh.js";import"./Link-BX2A3PdD.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-C8kJuWfP.js";import"./Col-Dlco4iY9.js";import"./CardBase-CaCeufkG.js";import"./BackgroundImage-BjRr7-ih.js";import"./RouterLink-CODk-XRF.js";import"./Tag-Uh-yBJ3-.js";import"./IconWrapper-CQiUTv0m.js";import"./ToggleArrow-CrlwKWJe.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
