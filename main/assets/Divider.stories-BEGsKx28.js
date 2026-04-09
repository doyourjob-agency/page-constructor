import{R as t}from"./iframe-DEQjv3EU.js";import{y as f}from"./utils-DJqWW1JH.js";import{B as o}from"./BasicCard-Cc61HhHL.js";import{D as x}from"./Divider-BZ1ZGlhF.js";import{T as u}from"./Title-B-GZBkR8.js";import"./preload-helper-D6kgxu3v.js";import"./index-Dohjc6vm.js";import"./keys-Bxf0uSSE.js";import"./_baseKeys-84EPXB8y.js";import"./url-Cz-Y6rC3.js";import"./index-Cb2xFeqI.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-BzH1jotP.js";import"./blocks-BNARovvG.js";import"./toString-DErTk6wx.js";import"./isSymbol-C3F6Wsiq.js";import"./Links-Bq4Eoito.js";import"./Link-DDt5EY6e.js";import"./BackLink-me8Yv4mE.js";import"./useAnalytics-C6sY2p6k.js";import"./Button-CgfLSaNX.js";import"./common-BL6R7iCT.js";import"./Icon-B3e4z9XU.js";import"./EventBroker-B7jazn2i.js";import"./FileLink-DlkywzxE.js";import"./url-C7SkdEUo.js";import"./Label-C1RScGjJ.js";import"./Xmark-AeQWVHJm.js";import"./HTML-kUoGt3hw.js";import"./ContentList-pUgf-XaK.js";import"./Image-DdWbjVlX.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BJ-mwIfs.js";import"./v4-Dv1xt2bl.js";import"./Buttons-CGJ8Ij3z.js";import"./Button-BAEWZlws.js";import"./addComponentKeysets-C-IbSaBm.js";import"./Link-BpEwWlLN.js";import"./svg-CQ-OHbUx.js";import"./useUniqId--X5ShVra.js";import"./Col-C11uekMv.js";import"./CardBase-D3paKBTa.js";import"./BackgroundImage-DezrRPNB.js";import"./RouterLink-DEC1S1RL.js";import"./Tag-AvtE1PZd.js";import"./IconWrapper-ryoY3MYB.js";import"./ToggleArrow-C3Ru4Y-i.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
