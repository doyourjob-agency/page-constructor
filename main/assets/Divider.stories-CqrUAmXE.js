import{R as t}from"./iframe-B4Kc02Dv.js";import{y as f}from"./utils-y_FCo59J.js";import{B as o}from"./BasicCard-Cs9uHwuw.js";import{D as x}from"./Divider-9uFu2tfI.js";import{T as u}from"./Title-Cn2L5yVb.js";import"./preload-helper-D6kgxu3v.js";import"./index-CALmIKRF.js";import"./keys-DEhhHhHL.js";import"./_baseKeys-Bgm1sNYa.js";import"./url-DBjdWB2C.js";import"./index-9x-pTavm.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-B3jHiR2u.js";import"./Content-t6Qiyt62.js";import"./blocks-ChE8SeJN.js";import"./toString-CgQXu6ja.js";import"./isSymbol-ec-7y9qf.js";import"./Links-CUxe9sWI.js";import"./Link-CEzziZQg.js";import"./BackLink-ByMo9Orv.js";import"./useAnalytics-Cfk_mVhF.js";import"./Button-BRE5PpDK.js";import"./common-CfA4QgRC.js";import"./Icon-D-ZJ8wJk.js";import"./EventBroker-CqqivGt_.js";import"./FileLink-CFnXdttX.js";import"./url-DdyVbUHw.js";import"./Label-DGa3nuZb.js";import"./Xmark-CQiV351R.js";import"./YFMWrapper-CgqgtvRB.js";import"./HTML-C0in4R2o.js";import"./ContentList-CQxmupxd.js";import"./Image-B2YIBI1O.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-Ku7ok5IG.js";import"./Buttons-mYObx1tb.js";import"./Button-B8XofHlf.js";import"./addComponentKeysets-6Xh-hp40.js";import"./Link-JZYJt86P.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DnQ_4ZN-.js";import"./Col-CCQFD69o.js";import"./CardBase-1FxEG3XW.js";import"./BackgroundImage-D6iA4fiR.js";import"./RouterLink-Bnttz7yw.js";import"./Tag-W3LVUMEJ.js";import"./IconWrapper-5od2egql.js";import"./ToggleArrow-DJvRT8qK.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
