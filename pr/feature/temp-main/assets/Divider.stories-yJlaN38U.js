import{R as t}from"./iframe-CfBkScvf.js";import{y as f}from"./utils-0ib7W-Oj.js";import{B as o}from"./BasicCard-C222rjAv.js";import{D as x}from"./Divider-D695f3N0.js";import{T as u}from"./Title-Bs2aVxDB.js";import"./preload-helper-D6kgxu3v.js";import"./index-BiSYZDNi.js";import"./keys-CdaSokK8.js";import"./_baseKeys-CLBqC0Yw.js";import"./url-0L9Dt1-d.js";import"./index-izN5t4OS.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-2aHJc58L.js";import"./blocks-CCIys0bx.js";import"./toString-yoo355LS.js";import"./isSymbol-BbGWMy7s.js";import"./Links-BWe71Rd6.js";import"./Link-Dmy5LV_g.js";import"./BackLink-C8bIfOt7.js";import"./useAnalytics-lRbpwbdV.js";import"./Button-CLqldI6I.js";import"./common-CjFhdDbk.js";import"./Icon-a0Se9QlV.js";import"./EventBroker-q738AI4e.js";import"./FileLink-gIngtoVN.js";import"./url-agO7h1Nl.js";import"./Label-CjJ1czVY.js";import"./Xmark-q1iZPYtF.js";import"./HTML-BWukRvj_.js";import"./ContentList-BdNHqXA2.js";import"./Image-70AAz8JF.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BSnHpnkW.js";import"./v4-Dv1xt2bl.js";import"./Buttons-DdlWasbz.js";import"./Button-CnH7U8x9.js";import"./addComponentKeysets-BC8f-ODm.js";import"./Link-BlHjc992.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CF229GlN.js";import"./Col-D7xlOT6E.js";import"./CardBase-DOHS21ax.js";import"./BackgroundImage-DVI1SoJG.js";import"./RouterLink-BcfswiNN.js";import"./Tag-BuLG5YJW.js";import"./IconWrapper-Dn3b_Zs-.js";import"./ToggleArrow-CsUSLPaC.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
