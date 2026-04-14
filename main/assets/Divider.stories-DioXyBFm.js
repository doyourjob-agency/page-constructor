import{R as t}from"./iframe-1J4wrZj8.js";import{y as f}from"./utils-4MG0H3J6.js";import{B as o}from"./BasicCard-DwHAhcaP.js";import{D as x}from"./Divider-CgEYS4V7.js";import{T as u}from"./Title-hDJFE8Qd.js";import"./preload-helper-D6kgxu3v.js";import"./index-BAaPCh6m.js";import"./keys-D8vgmzXt.js";import"./_baseKeys-XRYWqPmL.js";import"./url-CBrChugK.js";import"./index-BfVrc_5_.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-C-soxR21.js";import"./blocks-C1K3o8tG.js";import"./toString-CLVx-m6L.js";import"./isSymbol-CMldelhq.js";import"./Links-BYunzV6K.js";import"./Link--ZcgRzOR.js";import"./BackLink-DVByslcs.js";import"./useAnalytics-BAcslDSg.js";import"./Button-CYyI5r1b.js";import"./common-DHn1GBa6.js";import"./Icon-Dse_7DBa.js";import"./EventBroker-CmFDfNwL.js";import"./FileLink-m6b5Vg5p.js";import"./url-C_L4sXoO.js";import"./Label-CBWBfJ1V.js";import"./Xmark-1PZg9WLy.js";import"./HTML-BgmLUuNN.js";import"./ContentList-D4vBgLKg.js";import"./Image-BG1isca8.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-D7Y7DEQJ.js";import"./v4-Dv1xt2bl.js";import"./Buttons-DXAifZ2x.js";import"./Button-DUW812kX.js";import"./addComponentKeysets-CKBloXYV.js";import"./Link-CEb479py.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-D9eY4N1F.js";import"./Col-C_IBIMyZ.js";import"./CardBase-DDceqqNJ.js";import"./BackgroundImage-B6zrhje_.js";import"./RouterLink-BKgDJoL4.js";import"./Tag-DX_GooL-.js";import"./IconWrapper-DCGA15tx.js";import"./ToggleArrow-Tl-5khYu.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
