import{R as t}from"./iframe-DKSzR_6t.js";import{y as f}from"./utils-CkxeQVA0.js";import{B as o}from"./BasicCard-D161ags_.js";import{D as x}from"./Divider-LVg1oyCS.js";import{T as u}from"./Title-DGAXcopL.js";import"./preload-helper-D6kgxu3v.js";import"./index-BISBbGSn.js";import"./keys-BhYyifrD.js";import"./_baseKeys-iYQgaGkz.js";import"./url-BOWVdT5M.js";import"./index-Dl_XRRe9.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-94lpe9TP.js";import"./blocks-gU4xs5yA.js";import"./toString-CjwdgCcI.js";import"./isSymbol-x87rfm_h.js";import"./Links-SY0IRUen.js";import"./Link-sbAgJsfu.js";import"./BackLink-C80notn9.js";import"./useAnalytics-BfUI_X61.js";import"./Button-CMWivUxB.js";import"./common-BFJkaULq.js";import"./Icon-BBMi5YKl.js";import"./EventBroker-DP4qJp7G.js";import"./FileLink-Nr6jJRFK.js";import"./url-BK_ON7B-.js";import"./Label-KX-S4uxl.js";import"./Xmark-zeaF5dQg.js";import"./HTML-DOpa8skP.js";import"./ContentList-Dsosv-ft.js";import"./Image--9PlRwls.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DBr_xmkz.js";import"./v4-Dv1xt2bl.js";import"./Buttons-DFoLv7Hq.js";import"./Button-DQFxqDPJ.js";import"./addComponentKeysets-DpRDno-D.js";import"./Link-B5U8K4Np.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DUA-dp0a.js";import"./Col-BjuZOAXj.js";import"./CardBase-CzHgBYWJ.js";import"./BackgroundImage-IziHKzoF.js";import"./RouterLink-DQo4WU9e.js";import"./Tag-CIhwos7s.js";import"./IconWrapper-R4SCUOng.js";import"./ToggleArrow-f4s5v_cZ.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
