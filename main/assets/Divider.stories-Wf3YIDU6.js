import{R as t}from"./iframe-C5KNs6oJ.js";import{y as f}from"./utils-BNiZJ8K2.js";import{B as o}from"./BasicCard-DAMsWVJ1.js";import{D as x}from"./Divider-B-ILDXlS.js";import{T as u}from"./Title-CgWvNDbc.js";import"./preload-helper-D6kgxu3v.js";import"./index-DUZ_MZJ0.js";import"./keys-DIYmlWEN.js";import"./_baseKeys-LADVGV1G.js";import"./url-WkbplRqb.js";import"./index-BqMwYukw.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-D8Xl_nRK.js";import"./blocks-CYO_Uhx_.js";import"./toString-Bu6aqWLp.js";import"./isSymbol-DnDkSc2M.js";import"./Links-L4uDjUGw.js";import"./Link-B5-FSZ_j.js";import"./BackLink-DyF6VnC0.js";import"./useAnalytics-D2ybTX6T.js";import"./Button-kH_wJjA-.js";import"./common-D9bLNJKf.js";import"./Icon-C9mQ2Ndt.js";import"./EventBroker-BTAcM1HB.js";import"./FileLink-ChptwHQh.js";import"./url-D1aJB3VK.js";import"./Label-BRPVyRH3.js";import"./Xmark-BOF7YaBk.js";import"./YFMWrapper-Db18ILKl.js";import"./HTML-CFlgYe7b.js";import"./ContentList-CaAfPkYx.js";import"./Image-CqymoKyR.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-tlcTGzoR.js";import"./Buttons-BKHS7725.js";import"./Button-1io6cQ5l.js";import"./addComponentKeysets-DINfxYum.js";import"./Link-CNPReJlA.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DH7ElNW6.js";import"./Col-D6Fs6rf1.js";import"./CardBase-C3vudkv_.js";import"./BackgroundImage-DoXlSFKI.js";import"./RouterLink-DzZ-fYiG.js";import"./Tag-qt6nrPkN.js";import"./IconWrapper-DUT8rL6O.js";import"./ToggleArrow-DTJPIJHR.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
