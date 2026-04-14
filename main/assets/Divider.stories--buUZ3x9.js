import{R as t}from"./iframe-d8gzFc3A.js";import{y as f}from"./utils-NZ7cvfGY.js";import{B as o}from"./BasicCard-BijUK03G.js";import{D as x}from"./Divider-CMTtjOVd.js";import{T as u}from"./Title-BCmqkqr8.js";import"./preload-helper-D6kgxu3v.js";import"./index-iY0SBUJp.js";import"./keys-B2wch671.js";import"./_baseKeys-P3CVmLgS.js";import"./url-DpJYKmso.js";import"./index-DrKyGZkU.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-DVJGJhCN.js";import"./blocks-K_25WpOg.js";import"./toString-CAr0XSlF.js";import"./isSymbol-CRiDAalP.js";import"./Links-CGc6hBtw.js";import"./Link-CjIEjb8E.js";import"./BackLink-CUsadvLq.js";import"./useAnalytics-Bgzv2jTa.js";import"./Button-DZwmwLRV.js";import"./common-DpnQs0zQ.js";import"./Icon-Bf5cz4zh.js";import"./EventBroker-ClbhooBQ.js";import"./FileLink-DA8I7Fow.js";import"./url-q6TaW0BV.js";import"./Label-Bs18mVL-.js";import"./Xmark-DYv6evug.js";import"./HTML-Dby22T1E.js";import"./ContentList-CAgG61BT.js";import"./Image-BHeoUC1W.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BoSRcmmb.js";import"./v4-Dv1xt2bl.js";import"./Buttons-CB1ZTWKN.js";import"./Button-BI2PluOB.js";import"./addComponentKeysets-jlzbYwU0.js";import"./Link-Dbbov8CY.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BLjNTvl1.js";import"./Col-BUxU8Fcs.js";import"./CardBase-C49sDReK.js";import"./BackgroundImage-CsxvKZ6_.js";import"./RouterLink-C_h3ckVy.js";import"./Tag-Cd8YXQqg.js";import"./IconWrapper-5xH9-Spu.js";import"./ToggleArrow-CXR6z3ym.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
