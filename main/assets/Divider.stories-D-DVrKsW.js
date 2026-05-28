import{R as t}from"./iframe-8Fg5NzJ-.js";import{y as f}from"./utils-C9llsTph.js";import{B as o}from"./BasicCard-Bhk_rgOM.js";import{D as x}from"./Divider-CjCUyhcg.js";import{T as u}from"./Title-CxylpanE.js";import"./preload-helper-D6kgxu3v.js";import"./index-CB0AbR82.js";import"./keys-u3d2ac3o.js";import"./_baseKeys-CY4_rRO2.js";import"./url-BxfHGlIO.js";import"./index-CDQZyYMf.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-Dk2edqYr.js";import"./Content-CLPPW5XT.js";import"./blocks-CoqaG5B6.js";import"./toString-BsBK0kiN.js";import"./isSymbol-BN058fU1.js";import"./Links-BBzsqFmP.js";import"./Link-B4GQ-knk.js";import"./BackLink-BTY3_QOu.js";import"./useAnalytics-1Hi5-Wzw.js";import"./Button-CwVzw2y_.js";import"./common-_n-UO4la.js";import"./Icon-DIEB8SZT.js";import"./EventBroker-ssQJxJ_w.js";import"./FileLink-C3eNHyzo.js";import"./url-B24_TXKZ.js";import"./Label-DsJTJHbn.js";import"./Xmark-BcGwLGSV.js";import"./HTML-CiK7jMi5.js";import"./ContentList-C9wtAiBS.js";import"./Image-DZuG1VLN.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-Dubi1JXS.js";import"./Buttons-kxkdhcSN.js";import"./Button-BaoYHgtR.js";import"./addComponentKeysets-DeHSOVQZ.js";import"./Link-C5n2KjZ3.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DUQsOUNj.js";import"./Col-fIelMPqu.js";import"./CardBase-BQCS0JrS.js";import"./BackgroundImage-DwSkEV7M.js";import"./RouterLink-DPjzLeQj.js";import"./Tag-mAqtkp3Q.js";import"./IconWrapper-BLP8PtDG.js";import"./ToggleArrow-CzOt1PAw.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
