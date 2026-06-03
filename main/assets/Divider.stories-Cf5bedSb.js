import{R as t}from"./iframe-BDIPU0YV.js";import{y as f}from"./utils-Bm4F3-Bu.js";import{B as o}from"./BasicCard-u70xjKT9.js";import{D as x}from"./Divider-D4a7Kvvy.js";import{T as u}from"./Title-fy58zEB6.js";import"./preload-helper-D6kgxu3v.js";import"./index-bcwAaL4F.js";import"./keys-BLgabVsV.js";import"./_baseKeys-WmfGbZol.js";import"./url-Dwdjm3EJ.js";import"./index-fcF2JIU9.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-B3jHiR2u.js";import"./Content-_m_u4SAy.js";import"./blocks-yeHmI_NM.js";import"./toString-Bd_d1l3j.js";import"./isSymbol-CAH9FBK7.js";import"./Links-Dz6J_WnD.js";import"./Link-CWKvTjdJ.js";import"./BackLink-CCr_8eXu.js";import"./useAnalytics-DlkB-zX6.js";import"./Button-BZtVZ97w.js";import"./common-DVoL2fDF.js";import"./Icon-DS4SXD9v.js";import"./EventBroker-cx-yNwnT.js";import"./FileLink-D74cx9iy.js";import"./url-C-Gbfmlz.js";import"./Label-BPa2p5bM.js";import"./Xmark-C2AnrWb1.js";import"./YFMWrapper-DlkxhgOe.js";import"./HTML-BEk1z4ZA.js";import"./ContentList-BL1gJgky.js";import"./Image-XMmhNIf0.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-bWHo_TRL.js";import"./Buttons-BiSHI3rY.js";import"./Button-DVZdxkYK.js";import"./addComponentKeysets-CHo0MOEG.js";import"./Link-DjagPZyX.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DTQhMldQ.js";import"./Col-DgmI4Y5z.js";import"./CardBase-_BrQTbDy.js";import"./BackgroundImage-D2a9MyjU.js";import"./RouterLink-Dl_94QYI.js";import"./Tag-BaFZM_uY.js";import"./IconWrapper-Cwlm1h4q.js";import"./ToggleArrow-BtcRRpdb.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
