import{R as t}from"./iframe-ruuT5iJS.js";import{y as f}from"./utils-BtxYMriY.js";import{B as o}from"./BasicCard-Bx-iGfIt.js";import{D as x}from"./Divider-CSrBh1te.js";import{T as u}from"./Title-Wn97eAAn.js";import"./preload-helper-D6kgxu3v.js";import"./index-ChloAl6_.js";import"./keys-CwZlb8eS.js";import"./_baseKeys-CkNDIQoG.js";import"./url-LRfA0Kvk.js";import"./index-CCA16oD8.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-Dk2edqYr.js";import"./Content-COLS-LNt.js";import"./blocks-SyjOY_8o.js";import"./toString-D9fu-5p1.js";import"./isSymbol-Di70GXdd.js";import"./Links-BObfgHwx.js";import"./Link-u3c9DXft.js";import"./BackLink-IG3TxiTX.js";import"./useAnalytics-tpwKNSj0.js";import"./Button-DxEhwoNQ.js";import"./common-BGPeAJsF.js";import"./Icon-DWQllmTN.js";import"./EventBroker-5gcS3JTt.js";import"./FileLink-CTfTrB3b.js";import"./url-DlRdRhru.js";import"./Label-ivy9_hC9.js";import"./Xmark-BVgQo2yO.js";import"./HTML-DNANP8jS.js";import"./ContentList-B5Fb66qQ.js";import"./Image-CYsIUMZd.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-yMgUD8O8.js";import"./Buttons-B_j8gFWM.js";import"./Button-ouUFLbNI.js";import"./addComponentKeysets-D9NH520g.js";import"./Link-BZLfYQKK.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-C02CWcp1.js";import"./Col-CQVyP4cT.js";import"./CardBase-D8d8mKKO.js";import"./BackgroundImage-B02_T2st.js";import"./RouterLink-Dl7o9eNZ.js";import"./Tag-CFLYqy-G.js";import"./IconWrapper-DVsp4PhA.js";import"./ToggleArrow-C5u2J58G.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
