import{R as t}from"./iframe-BvnP2dHY.js";import{y as f}from"./utils-BetjGg8M.js";import{B as o}from"./BasicCard-Dld9dbBL.js";import{D as x}from"./Divider-D9tClKxa.js";import{T as u}from"./Title-Bf4QYtbw.js";import"./preload-helper-D6kgxu3v.js";import"./index-BKNboVCa.js";import"./keys-CtV8npSN.js";import"./_baseKeys-DuzSM4Bq.js";import"./url-BQjhwmLm.js";import"./index-CjQr05PA.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-D726VHG2.js";import"./blocks-DlA8PqdW.js";import"./toString-CdhTpuaQ.js";import"./isSymbol-Du_jHbRx.js";import"./Links-Y_MsZmvt.js";import"./Link-C3i0Tlgn.js";import"./BackLink-DH4qDm8B.js";import"./useAnalytics-Cr-hGOej.js";import"./Button-0BGHx-Pz.js";import"./common-BsNcvTp1.js";import"./Icon-DfymqLM2.js";import"./EventBroker-nEygafLR.js";import"./FileLink-DfrCShDx.js";import"./url-BmkqlTC8.js";import"./Label-BrYnMcAs.js";import"./Xmark-C67aHsKP.js";import"./HTML-vstbBK9b.js";import"./ContentList-BM7t2O55.js";import"./Image-DfqCSktk.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-C36Tkzg8.js";import"./Buttons-CzPhGhzk.js";import"./Button-zNCQeFtg.js";import"./addComponentKeysets-CXaDq-yf.js";import"./Link-CBNmQSsB.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DzI37H9t.js";import"./Col-X0mdJ-iz.js";import"./CardBase-Bm7NHqlW.js";import"./BackgroundImage-C_qCxHvi.js";import"./RouterLink-CPxoA-XK.js";import"./Tag-DzxUZlrI.js";import"./IconWrapper-BuO0boAC.js";import"./ToggleArrow-D5rpsCgQ.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
