import{R as t}from"./iframe-Bk9SYFAj.js";import{y as f}from"./utils-CJPS8UsM.js";import{B as o}from"./BasicCard-CWzw5m2c.js";import{D as x}from"./Divider-BDaTFWh1.js";import{T as u}from"./Title-6OOr7tw1.js";import"./preload-helper-D6kgxu3v.js";import"./index-DqGFa-L6.js";import"./keys-DkaHPRUO.js";import"./_baseKeys-CoebjrJ9.js";import"./url-Bd3NVabk.js";import"./index-C2Wt5Yuf.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-BLyvVl1p.js";import"./blocks-uQ-L3-g7.js";import"./toString-DpRv27p0.js";import"./isSymbol-BVgoPH5R.js";import"./Links-m84rMeY7.js";import"./Link-S0aoLwWp.js";import"./BackLink-BrogEr6r.js";import"./useAnalytics-BstwOEyT.js";import"./Button-CNC47Irh.js";import"./common-Bh9KHcwW.js";import"./Icon-BBAp4yfY.js";import"./EventBroker-S_kQ-Opn.js";import"./FileLink-DeB1Wiye.js";import"./url-BvhGCXXC.js";import"./Label-CAcfnKGs.js";import"./Xmark-BU5MEj03.js";import"./HTML-BTczkvfK.js";import"./ContentList-1stbNyEh.js";import"./Image-CFFwgP2B.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-C8Yqti2K.js";import"./Buttons-CR2uWTmM.js";import"./Button-BCBP_XON.js";import"./addComponentKeysets-BRFljqTQ.js";import"./Link-DRuNC2H5.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DugDbgIl.js";import"./Col-CByscVCq.js";import"./CardBase-H240NnQO.js";import"./BackgroundImage-BiiNNErS.js";import"./RouterLink-DnpO5TjV.js";import"./Tag-Dfl2qYm2.js";import"./IconWrapper-D0ETDJ3r.js";import"./ToggleArrow-Cuq1RCry.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
