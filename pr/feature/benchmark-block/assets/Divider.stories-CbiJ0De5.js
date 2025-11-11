import{R as t}from"./iframe-7ngsrMUt.js";import{y as f}from"./utils-BoSHygsP.js";import{B as o}from"./BasicCard-tlRjoA5v.js";import{D as x}from"./Divider-CykKDaEF.js";import{T as u}from"./Title-BXTaZgVj.js";import"./preload-helper-D6kgxu3v.js";import"./index-CxPDr9zk.js";import"./keys-BgHubA5j.js";import"./_baseKeys-64rRkdG0.js";import"./url-CNsIwYRe.js";import"./index-DVe8q881.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-GIuDM5Od.js";import"./blocks-C8tuwhtZ.js";import"./toString-DNng9O_Z.js";import"./isSymbol-BTM_aR-A.js";import"./Links-LbkMtZBL.js";import"./Link-hZjfQXud.js";import"./BackLink-CsCnWlPc.js";import"./useAnalytics-Cv3X7SYc.js";import"./Button-FOGQuZUZ.js";import"./common-4S1IvUv4.js";import"./Icon-CbYdVoga.js";import"./EventBroker-BvRuis1o.js";import"./FileLink-CpN8oujW.js";import"./url-DsHkWi3a.js";import"./Label-CU9jvzWs.js";import"./Xmark-DDeQxF4M.js";import"./HTML-DN0gOIQI.js";import"./ContentList-DRIH98Xr.js";import"./Image-4qqCXjOP.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-G_4mxpsm.js";import"./v4-Dv1xt2bl.js";import"./Buttons-BVpi825T.js";import"./Button-oqHQRBYL.js";import"./addComponentKeysets-7nZs7WVP.js";import"./Link-BPD342vy.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BA1FOdDU.js";import"./Col-BbTmZLvl.js";import"./CardBase-DJ7S7E6P.js";import"./BackgroundImage-DdvYu91h.js";import"./RouterLink-FLOnOPN4.js";import"./Tag-82APcSPN.js";import"./IconWrapper-DHVPhzcd.js";import"./ToggleArrow-DywfSxzB.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
