import{R as t}from"./iframe-Cd4hUbQB.js";import{y as f}from"./utils-CmnbtGEY.js";import{B as o}from"./BasicCard-Dxu-2lez.js";import{D as x}from"./Divider-DMPdMRP1.js";import{T as u}from"./Title-BmlxHjhU.js";import"./preload-helper-D6kgxu3v.js";import"./index-DA_Jk2jP.js";import"./keys-DK_bkQBG.js";import"./_baseKeys-CGAjMETQ.js";import"./url-BmKpOSR6.js";import"./index-BxzMyWlL.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-Dk2edqYr.js";import"./Content-EQcb-wXK.js";import"./blocks-XlTiKRGm.js";import"./toString-CBg-CdFd.js";import"./isSymbol-C7yR3uFs.js";import"./Links-k_7eaO_F.js";import"./Link-6YAAtPOq.js";import"./BackLink-DafPplbW.js";import"./useAnalytics-fSFx854q.js";import"./Button-CwQUnP-6.js";import"./common-CVMXi37g.js";import"./Icon-D4UxUlhH.js";import"./EventBroker-DvmmwYWi.js";import"./FileLink-B2vVTdwY.js";import"./url-VRUrwkUU.js";import"./Label-CoX-Xu_K.js";import"./Xmark-Du6Zsnxp.js";import"./HTML-BzSzPHF1.js";import"./ContentList-fh1zdgKV.js";import"./Image-C_VbXE6U.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CoRRVvLc.js";import"./Buttons-_3s_MPTk.js";import"./Button-ByTfoFTQ.js";import"./addComponentKeysets-BU8srLh8.js";import"./Link-SSvC7ULy.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-Cmc0myV9.js";import"./Col-DzKfsb0c.js";import"./CardBase-C7kLtihO.js";import"./BackgroundImage-D16BhCbk.js";import"./RouterLink-B0Tq_U_R.js";import"./Tag-ByvMHsD9.js";import"./IconWrapper-BdVzIfyT.js";import"./ToggleArrow-B8x8OvzW.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
