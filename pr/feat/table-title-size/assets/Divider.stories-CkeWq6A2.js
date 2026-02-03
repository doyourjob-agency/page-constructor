import{R as t}from"./iframe-COfbjC2i.js";import{y as f}from"./utils-DIblNJZb.js";import{B as o}from"./BasicCard-BAW5rq0Y.js";import{D as x}from"./Divider-KDcumnbb.js";import{T as u}from"./Title-DO9aa0Cq.js";import"./preload-helper-D6kgxu3v.js";import"./index-DiFR4jnE.js";import"./keys-Csafehp9.js";import"./_baseKeys-nun4w3lC.js";import"./url-joGbIg_r.js";import"./index-RsXHRXNk.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-BhcqkXnr.js";import"./blocks-DAWcIk9E.js";import"./toString-BgspM9aL.js";import"./isSymbol-B3V17bCz.js";import"./Links-ChODGmiI.js";import"./Link-BJhTd7D7.js";import"./BackLink-D6iF6XOy.js";import"./useAnalytics-dCsQOjBS.js";import"./Button-LyFsYtdt.js";import"./common-CDJSrROp.js";import"./Icon-C6WMRo4-.js";import"./EventBroker-D3M9Bszi.js";import"./FileLink-DHKfcpgW.js";import"./url-B2mw0rZe.js";import"./Label-DPbLjnzK.js";import"./Xmark-B7ys5SsC.js";import"./HTML-CN45wYix.js";import"./ContentList-CScKP2JO.js";import"./Image-BtFRntP7.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-B-9GehIs.js";import"./v4-Dv1xt2bl.js";import"./Buttons-CxOEBchp.js";import"./Button-Dw059agi.js";import"./addComponentKeysets-DdY5OoH5.js";import"./Link-Ct80aETv.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BCt9Snp4.js";import"./Col-D3BvMWLC.js";import"./CardBase-jid-XM3H.js";import"./BackgroundImage-CKlJdnNj.js";import"./RouterLink-C1AgA_ps.js";import"./Tag-KSnWErmE.js";import"./IconWrapper-Dn6uB79c.js";import"./ToggleArrow-mZJPxqoK.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
