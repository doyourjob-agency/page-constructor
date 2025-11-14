import{R as t}from"./iframe-BpfeqHWj.js";import{y as f}from"./utils-BJxpzUj0.js";import{B as o}from"./BasicCard-DThUAatp.js";import{D as x}from"./Divider-Dm9SZ_Lt.js";import{T as u}from"./Title-CghDMzOK.js";import"./preload-helper-D6kgxu3v.js";import"./index-2y8EEGYh.js";import"./keys-DpFr2QIp.js";import"./_baseKeys-Yy_OzLIJ.js";import"./url-aYeyNZoV.js";import"./index-DTksgvPV.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-B1v1ySS-.js";import"./blocks-D6yjLcNt.js";import"./toString-Dq09ZIm5.js";import"./isSymbol-BocO5IC9.js";import"./Links-DDYRrP15.js";import"./Link-BUHjDye-.js";import"./BackLink-C68tpH9T.js";import"./useAnalytics-CmmDteHM.js";import"./Button-CeKnLClr.js";import"./common-YkzUzpLW.js";import"./Icon-pjyo0C2m.js";import"./EventBroker-CJvAJEWY.js";import"./FileLink-Le4fgIQj.js";import"./url-x-lJH9Uv.js";import"./Label-B4WIZQPj.js";import"./Xmark-lXXuufru.js";import"./HTML-Bdg0pZZD.js";import"./ContentList-B3-zmSma.js";import"./Image-0aPsmqfc.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DcmhFuBe.js";import"./v4-Dv1xt2bl.js";import"./Buttons-BSeJ-wUQ.js";import"./Button-CGe0YKaJ.js";import"./addComponentKeysets-CJWmMxKP.js";import"./Link-D8k7pxSX.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DJr88biN.js";import"./Col-uj9AwkHo.js";import"./CardBase-CXS-cqhl.js";import"./BackgroundImage-CmE-H7M0.js";import"./RouterLink-qiVgp3JS.js";import"./Tag-DFRgp7yL.js";import"./IconWrapper-Zimn8gGM.js";import"./ToggleArrow-BnvcSpWX.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
