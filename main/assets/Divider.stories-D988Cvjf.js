import{R as t}from"./iframe-bxtAb8yY.js";import{y as f}from"./utils-CwbMRcf6.js";import{B as o}from"./BasicCard-BcB-2tIW.js";import{D as x}from"./Divider-e6c5h7oc.js";import{T as u}from"./Title-d7A-Zp-9.js";import"./preload-helper-D6kgxu3v.js";import"./index-jA4HWyhO.js";import"./keys-CC8dwtcG.js";import"./_baseKeys-C6SdDF4D.js";import"./url-CdGbhDiA.js";import"./index-CJpLav0F.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-Dy23qYyh.js";import"./blocks-Cd9RcaKI.js";import"./toString-tdkeEDcB.js";import"./isSymbol-9cqrlYXN.js";import"./Links-DxOyXMXf.js";import"./Link-Bbzej4vG.js";import"./BackLink-CepvDn2J.js";import"./useAnalytics-Cmed2Zye.js";import"./Button-COK3LFWr.js";import"./common-BJu9LJvl.js";import"./Icon-D-EcLmJw.js";import"./EventBroker-rNwldXAP.js";import"./FileLink-B0f2_bM1.js";import"./url-wFBuMew0.js";import"./Label-BVl7numS.js";import"./Xmark-BczpsJ3c.js";import"./HTML-AkuhM3xm.js";import"./ContentList-rDWx_TTs.js";import"./Image-ctzrVbH0.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-Bdfv64uT.js";import"./v4-Dv1xt2bl.js";import"./Buttons-kemIX4PS.js";import"./Button-BTiQzyPw.js";import"./addComponentKeysets-BRlF-2gh.js";import"./Link-vNGdqExg.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-Bhen175I.js";import"./Col-CtMd_AuP.js";import"./CardBase-BegiRPa8.js";import"./BackgroundImage-ivQ2Xn5U.js";import"./RouterLink-C-4l1Vzd.js";import"./Tag-DNtMWW0Z.js";import"./IconWrapper-ByBoWdX9.js";import"./ToggleArrow-3anWz1ax.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
