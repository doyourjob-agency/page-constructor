import{R as t}from"./iframe-Doi5iD3Z.js";import{y as f}from"./utils-Cl21_OS_.js";import{B as o}from"./BasicCard-CrWMGWL8.js";import{D as x}from"./Divider-BMsIBb3S.js";import{T as u}from"./Title-BFSrVSLt.js";import"./preload-helper-D6kgxu3v.js";import"./index-AXMeknG9.js";import"./keys-CAqxIfay.js";import"./_baseKeys-5_qbHXg7.js";import"./url-4XOvadGW.js";import"./index-DVWfnntq.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-CjdHxD-5.js";import"./blocks-BZzbapSl.js";import"./toString-CZdaJSkP.js";import"./isSymbol-CNFLdNLo.js";import"./Links-G2JnTCcG.js";import"./Link-UI6ubJak.js";import"./BackLink-C5ggOi5Q.js";import"./useAnalytics-DEXIao6M.js";import"./Button-dVD_dpz1.js";import"./common-C8LDmq2_.js";import"./Icon-BFzU8vx0.js";import"./EventBroker-TBlXPjzB.js";import"./FileLink-FHUbl9Md.js";import"./url-D9eLY7ct.js";import"./Label-DgL6a3ep.js";import"./Xmark-BLo1WE98.js";import"./HTML-BZHaSdEO.js";import"./ContentList-8ymCmfeK.js";import"./Image-I5fCfUGW.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BolQ1fxx.js";import"./v4-Dv1xt2bl.js";import"./Buttons-e6D6Jc-B.js";import"./Button-DD3MvmFg.js";import"./addComponentKeysets-BnAp34Eg.js";import"./Link-DyMfoBOa.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-ClYhEJ2f.js";import"./Col-D0N0IiA0.js";import"./CardBase-BiwZqm_c.js";import"./BackgroundImage-DLuY-Y0T.js";import"./RouterLink-Caty3rdF.js";import"./Tag-D5MFZHcV.js";import"./IconWrapper-DCVBBGrc.js";import"./ToggleArrow-Bw4whnGW.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
