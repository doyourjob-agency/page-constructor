import{R as t}from"./iframe-BP5o7V_t.js";import{y as f}from"./utils-CyOyeMhF.js";import{B as o}from"./BasicCard-DY0nkPgY.js";import{D as x}from"./Divider-ChU422Yr.js";import{T as u}from"./Title-DiHiMpxa.js";import"./preload-helper-D6kgxu3v.js";import"./index-CMuMGYWP.js";import"./keys-CrzdrI_3.js";import"./_baseKeys-C090GDga.js";import"./url-BLgG2gUQ.js";import"./index-C5rhHdc2.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-DhPuhUKC.js";import"./blocks-B_2Qs8Hs.js";import"./toString-BFQNQbhG.js";import"./isSymbol-Dmd-rbbn.js";import"./Links-BiEJY7vF.js";import"./Link-CAJm3dUT.js";import"./BackLink-Bf3oyY0h.js";import"./useAnalytics-EbSHUlVu.js";import"./Button-BuxuWouj.js";import"./common-FI-6Q2HG.js";import"./Icon-CpFrYTTz.js";import"./EventBroker-COGLUgWq.js";import"./FileLink-Bxkm7igb.js";import"./url-B6WMfaRh.js";import"./Label-BD-K5HJF.js";import"./Xmark-Co6BszQ4.js";import"./YFMWrapper-eM1x2Txf.js";import"./HTML-Db_ZNLmB.js";import"./ContentList-CekBEpDS.js";import"./Image-BCzF0GtB.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CpXOsTcM.js";import"./Buttons-ClGQ1li4.js";import"./Button-VzI0EeaB.js";import"./addComponentKeysets-WQs4cIMK.js";import"./Link-Bz5qoMFt.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-KRnGfEMv.js";import"./Col-CIttcLAO.js";import"./CardBase-ecNPFkat.js";import"./BackgroundImage-CbvJwZGz.js";import"./RouterLink-d7UczfHs.js";import"./Tag-Vt9q_Pf9.js";import"./IconWrapper-C1fLUZ22.js";import"./ToggleArrow-vkOJBBdT.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
