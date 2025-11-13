import{R as t}from"./iframe-J_CqxerA.js";import{y as f}from"./utils-DDlexqIR.js";import{B as o}from"./BasicCard-C8BZqVfg.js";import{D as x}from"./Divider-WvhApdh6.js";import{T as u}from"./Title-DipGkY3W.js";import"./preload-helper-D6kgxu3v.js";import"./index-sVuUyyTY.js";import"./keys-CAsiiG_W.js";import"./_baseKeys-DF_hQ3Uw.js";import"./url-BarKk1G6.js";import"./index-DgXI9SyU.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-CQA-UV9d.js";import"./blocks-Bqk7mYjA.js";import"./toString-Bu173Cax.js";import"./isSymbol-CLqPFziT.js";import"./Links-kwxqvJ9x.js";import"./Link-CfDfKwiA.js";import"./BackLink-dhabnHaN.js";import"./useAnalytics-CpUMEHoY.js";import"./Button-CigtMojo.js";import"./common-WCqrOagn.js";import"./Icon-BgXzvjbX.js";import"./EventBroker-CsdjlXqA.js";import"./FileLink-BzRwU1MC.js";import"./url-CaeJXd1l.js";import"./Label-qnSMjgfG.js";import"./Xmark-BnmTZo-B.js";import"./HTML-0ge_wZvH.js";import"./ContentList-Rsuu_lS4.js";import"./Image-CCZvr2PS.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DkoDi-Ie.js";import"./v4-Dv1xt2bl.js";import"./Buttons-CxyUU5Js.js";import"./Button-DIOd91FY.js";import"./addComponentKeysets-Yf106Ujl.js";import"./Link-Dp6BsMxh.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DNDMl_a-.js";import"./Col-BRLiD-h1.js";import"./CardBase-Bc9uJf_7.js";import"./BackgroundImage-_ShGbNXK.js";import"./RouterLink-z-WixTDH.js";import"./Tag-wnXrHZKX.js";import"./IconWrapper-B1QBZXBY.js";import"./ToggleArrow-FpyAN_SU.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
