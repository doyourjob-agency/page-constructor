import{R as t}from"./iframe-CHAkvKuJ.js";import{y as f}from"./utils-BeUbPu2f.js";import{B as o}from"./BasicCard-DR-3b3bo.js";import{D as x}from"./Divider-CEwmoLV4.js";import{T as u}from"./Title-CyFjFUsR.js";import"./preload-helper-D6kgxu3v.js";import"./index-BN1YuIDf.js";import"./keys-cLsa-q6n.js";import"./_baseKeys-Cc0NFiIF.js";import"./url-MYiOpLVZ.js";import"./index-Db2pMTDv.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-B32joNe2.js";import"./blocks-CHj5OU5Y.js";import"./toString-Di9sq8Te.js";import"./isSymbol-BMsrMEHB.js";import"./Links-C4NGZb_e.js";import"./Link-CbiaL1Xu.js";import"./BackLink-BbYVWHE-.js";import"./useAnalytics-DtoMV4sP.js";import"./Button-WHjfqjKu.js";import"./common-DSPS_4uO.js";import"./Icon-Df1g3LHr.js";import"./EventBroker-y2WMjRHM.js";import"./FileLink-D0F8-xHW.js";import"./url-CafDKWBV.js";import"./Label-C5GdIDSG.js";import"./Xmark-DVPZxNKJ.js";import"./YFMWrapper-D13G29xB.js";import"./HTML-C92Ne3Dl.js";import"./ContentList-CyfRbmfr.js";import"./Image-ErOinVGY.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-v4f1lnKl.js";import"./Buttons-CNOWUMjK.js";import"./Button-DMmblv6u.js";import"./addComponentKeysets-BhfErdMT.js";import"./Link-BeHmY5Vn.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BkqDdhzY.js";import"./Col-qMRe28Oy.js";import"./CardBase-BUVCKtNC.js";import"./BackgroundImage-DDluxkq_.js";import"./RouterLink-OrO4YGxp.js";import"./Tag-r8Y5knbG.js";import"./IconWrapper-DrP7Gily.js";import"./ToggleArrow-DSKERZkf.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
