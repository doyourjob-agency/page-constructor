import{R as t}from"./iframe-CtO_K48J.js";import{y as f}from"./utils-BLmtXL4y.js";import{B as o}from"./BasicCard-Biesubtt.js";import{D as x}from"./Divider-SjnkqXJQ.js";import{T as u}from"./Title-Dw9DanBt.js";import"./preload-helper-D6kgxu3v.js";import"./index-CqWjRzdi.js";import"./keys-Cspbp5b8.js";import"./_baseKeys-QJqK5Y2e.js";import"./url-McESS_7b.js";import"./index-BO_2oHNX.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-CQg3pPXP.js";import"./blocks-10paLAPO.js";import"./toString-Cy9cmMo1.js";import"./isSymbol-BGDObzmV.js";import"./Links-DjTS6vZF.js";import"./Link-D0ONd2gu.js";import"./BackLink-CjOxO2VZ.js";import"./useAnalytics-BZWqgRiU.js";import"./Button-tfNndUX5.js";import"./common-CQ4LENpa.js";import"./Icon-CaGopWK8.js";import"./EventBroker-Dh1lgfHz.js";import"./FileLink-BYDu4yGd.js";import"./url-DZcgGceG.js";import"./Label-N0Pf0hvr.js";import"./Xmark-B6U1_frM.js";import"./HTML-DTdjhFQc.js";import"./ContentList-DCgLfIc8.js";import"./Image-SsK6gkBo.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-zbkpmGLC.js";import"./Buttons-DtQTpqf1.js";import"./Button-De7S1FVs.js";import"./addComponentKeysets-DmyB9dl3.js";import"./Link-Bexgv2VX.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-xs4J2W5s.js";import"./Col-ZUB02_wJ.js";import"./CardBase-CkMmO_PQ.js";import"./BackgroundImage-Dh0125xt.js";import"./RouterLink-BwG4GM5Z.js";import"./Tag-ClsaiQc5.js";import"./IconWrapper-DwxteN-y.js";import"./ToggleArrow-LWpgt_P2.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
