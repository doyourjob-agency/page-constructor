import{R as t}from"./iframe-B-QW4erR.js";import{y as f}from"./utils-bOtnzIK7.js";import{B as o}from"./BasicCard-BhcOZb4o.js";import{D as x}from"./Divider-BCWmXYg9.js";import{T as u}from"./Title-LsQtLFGD.js";import"./preload-helper-D6kgxu3v.js";import"./index-CEcpDYCe.js";import"./keys-DnjMDJKE.js";import"./_baseKeys-BgxmbcmU.js";import"./url-BMGbZPHj.js";import"./index-p5JUkcDC.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-wZHGgSzF.js";import"./blocks-ZfvwJa5h.js";import"./toString-CIC3crAi.js";import"./isSymbol-DPJZmE1e.js";import"./Links-stFUUdyW.js";import"./Link-SD8Dqs8m.js";import"./BackLink-Ddgq44QI.js";import"./useAnalytics-BM31rD20.js";import"./Button-eDMRf-kG.js";import"./common-Erd6Sr1-.js";import"./Icon-B3guSWFa.js";import"./EventBroker-CdD_ucrM.js";import"./FileLink-COapYSHO.js";import"./url-BufYNg8i.js";import"./Label-fPjpapq_.js";import"./Xmark-pQ1y2THz.js";import"./HTML-DnRdwCQh.js";import"./ContentList-D3QyORee.js";import"./Image-BKUzeOJY.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-f96565hp.js";import"./v4-Dv1xt2bl.js";import"./Buttons-UEJ3hKE8.js";import"./Button-8Rb4ygMk.js";import"./addComponentKeysets-BqBqNDJN.js";import"./Link-CQTFdRQq.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DUDju4BP.js";import"./Col-BApJcnYg.js";import"./CardBase-BuNauRab.js";import"./BackgroundImage-CKBrkdIU.js";import"./RouterLink-BjczGFbO.js";import"./Tag-vt_QJ79-.js";import"./IconWrapper-Dq7Pkzqc.js";import"./ToggleArrow-DNxtyKhG.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
