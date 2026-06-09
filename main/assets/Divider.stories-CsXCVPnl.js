import{R as t}from"./iframe-Cv40gxJC.js";import{y as f}from"./utils-vMBOcoqR.js";import{B as o}from"./BasicCard-BQ0PJlRQ.js";import{D as x}from"./Divider-CP2HMhzG.js";import{T as u}from"./Title-ku96q7Gu.js";import"./preload-helper-D6kgxu3v.js";import"./index-CJJWHcfm.js";import"./keys-PwB_0sd5.js";import"./_baseKeys-BcBjEpio.js";import"./url-D-5MCZ8c.js";import"./index-C2ChbNBF.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-DXO3tAYK.js";import"./blocks-CpCHCuf0.js";import"./toString-BOGxC0-G.js";import"./isSymbol-CDTPAJAV.js";import"./Links-D0Y7Lzqr.js";import"./Link-8bVLxwD3.js";import"./BackLink-DnJBVV7s.js";import"./useAnalytics-Duxx0f22.js";import"./Button-Bft4MJTu.js";import"./common-CFuJliM5.js";import"./Icon-DySVpbyj.js";import"./EventBroker-BAcoPrT0.js";import"./FileLink-jL6aWwc-.js";import"./url-FYjmVdI_.js";import"./Label-BdNajlaz.js";import"./Xmark-Dv4DGAYp.js";import"./YFMWrapper-BzfgdrTS.js";import"./HTML-CCCGXGK2.js";import"./ContentList-CmtKQmp4.js";import"./Image-D2qMrrk3.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-D8I5qey6.js";import"./Buttons-DvygfoRu.js";import"./Button-Crpf_zam.js";import"./addComponentKeysets-D-hr7I9e.js";import"./Link-v2kxwzS6.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CYsZULNj.js";import"./Col-CHY86N7R.js";import"./CardBase-g20_OCAY.js";import"./BackgroundImage-Bg__qtQ6.js";import"./RouterLink-Cm1V1t-8.js";import"./Tag-D8dmlRe2.js";import"./IconWrapper-Cby949oI.js";import"./ToggleArrow-BuBpEBMY.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
