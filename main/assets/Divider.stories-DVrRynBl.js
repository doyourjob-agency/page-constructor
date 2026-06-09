import{R as t}from"./iframe-CVTsHNsa.js";import{y as f}from"./utils-BfQw83Xo.js";import{B as o}from"./BasicCard-CzkamI-y.js";import{D as x}from"./Divider-BzjbPRhN.js";import{T as u}from"./Title-DJsBu9-T.js";import"./preload-helper-D6kgxu3v.js";import"./index-1bOsM2_C.js";import"./keys-LtEbCun9.js";import"./_baseKeys-CouvhFwr.js";import"./url-DQIIAxJE.js";import"./index-C1Jgil4x.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-mRt1ZQHW.js";import"./blocks-CpTuQJyH.js";import"./toString-66toPXkp.js";import"./isSymbol-I-qq6WJf.js";import"./Links-BNWL1uXp.js";import"./Link-oId9C_cO.js";import"./BackLink-Cm8xUuVY.js";import"./useAnalytics-EqrKySla.js";import"./Button-Du1YPR8j.js";import"./common-B3CNDUti.js";import"./Icon-FT0cYI89.js";import"./EventBroker-BTtK47oq.js";import"./FileLink-CEvzNvkE.js";import"./url-CSfZGnRA.js";import"./Label-DlkFY5yt.js";import"./Xmark-fdZKK5RK.js";import"./YFMWrapper-CsMCPROr.js";import"./HTML-CkL-ZtFt.js";import"./ContentList-CszZHjgc.js";import"./Image-dv5h_K-E.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BuL4b6CN.js";import"./Buttons-C-4ouJhe.js";import"./Button-BN35FEnY.js";import"./addComponentKeysets-Bder9ozH.js";import"./Link-DfflFNSF.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DRqTS_Qh.js";import"./Col-BSfI3QH5.js";import"./CardBase-Db5xlo9V.js";import"./BackgroundImage-D1MLB3lL.js";import"./RouterLink-C05xWp4F.js";import"./Tag-C0IvlNvc.js";import"./IconWrapper-C2jVoPD5.js";import"./ToggleArrow-DtvUOQof.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
