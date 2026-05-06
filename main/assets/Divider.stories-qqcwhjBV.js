import{R as t}from"./iframe-CUKIuERI.js";import{y as f}from"./utils-BtGQB4MT.js";import{B as o}from"./BasicCard-L3LsvpJ1.js";import{D as x}from"./Divider-B5z0dTf2.js";import{T as u}from"./Title-DHbFnmLG.js";import"./preload-helper-D6kgxu3v.js";import"./index-eliGH4fB.js";import"./keys-q3FaPhFA.js";import"./_baseKeys-XKBb0HlL.js";import"./url-DxVIfzEf.js";import"./index-CSlxpPB4.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-_Gu_xGCk.js";import"./blocks-BGBl-D8_.js";import"./toString-CTJeuNVN.js";import"./isSymbol-Du0miByJ.js";import"./Links-D965Ege9.js";import"./Link-vlE5w78z.js";import"./BackLink-BlPoXtqR.js";import"./useAnalytics-CcfcQVdk.js";import"./Button-G3M2x0bs.js";import"./common-DXXd9Oi4.js";import"./Icon-OGOxJhTQ.js";import"./EventBroker-D8Is8Hws.js";import"./FileLink-DhZXmInf.js";import"./url-BtQGa5tc.js";import"./Label-DHAO-bDI.js";import"./Xmark-nJj6A5pQ.js";import"./HTML-Byi8ym0r.js";import"./ContentList-lYCvPmBW.js";import"./Image-BRk5xX2-.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DdoTS3Ln.js";import"./Buttons-BTdoZPkA.js";import"./Button-BfEDrR1q.js";import"./addComponentKeysets-Chk6ZOmr.js";import"./Link-DzKIuDte.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BE1qKxlb.js";import"./Col-PDzljY9m.js";import"./CardBase-v9Qw47hP.js";import"./BackgroundImage-7Zylo_uR.js";import"./RouterLink-Dib5d482.js";import"./Tag-DIKAAAvQ.js";import"./IconWrapper-CWNciRuY.js";import"./ToggleArrow-DK5eW3Z6.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
