import{R as t}from"./iframe-Ccsvm1ri.js";import{y as f}from"./utils-fvpUdf3A.js";import{B as o}from"./BasicCard-DfXTivze.js";import{D as x}from"./Divider-XM1JNk7X.js";import{T as u}from"./Title-CcOIBIkA.js";import"./preload-helper-D6kgxu3v.js";import"./index-CsVeZBKv.js";import"./keys-Bfpksnet.js";import"./_baseKeys-BbuGiRmx.js";import"./url-CDyb3CMx.js";import"./index-C3wEc0qx.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-Dk2edqYr.js";import"./Content-B9fmcqDb.js";import"./blocks-BiGtvskK.js";import"./toString-BGlfiqO0.js";import"./isSymbol-_zV4IBYP.js";import"./Links-GSCtfMVC.js";import"./Link-CqGKi1kk.js";import"./BackLink-B3qMO1NI.js";import"./useAnalytics-C_xvn3yO.js";import"./Button-DTp0kkJc.js";import"./common-VeiAxh_y.js";import"./Icon-DW49yQQ_.js";import"./EventBroker-EYhcDHPd.js";import"./FileLink-CYWOyprv.js";import"./url-B7SfO7Yk.js";import"./Label-B6qd0qjf.js";import"./Xmark-BoE17zox.js";import"./HTML-DPLS9CXp.js";import"./ContentList-BDEODh_B.js";import"./Image-C9Yb60YV.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-B5nw_02S.js";import"./Buttons-BlY6pdIm.js";import"./Button-DqUOp9h1.js";import"./addComponentKeysets-Dc7EnbdW.js";import"./Link-xz4QiMLm.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-C-sZeF32.js";import"./Col-DtEEISCf.js";import"./CardBase-Dv9VlvAz.js";import"./BackgroundImage-DxM1vile.js";import"./RouterLink-CLErMRb0.js";import"./Tag-5SQvctaF.js";import"./IconWrapper-C9qQJM2h.js";import"./ToggleArrow-sgO9eA9X.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
