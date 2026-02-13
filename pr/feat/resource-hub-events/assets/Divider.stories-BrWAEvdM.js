import{R as t}from"./iframe-7yUXONyb.js";import{y as f}from"./utils-D1Gs33WA.js";import{B as o}from"./BasicCard-DfSXsCbD.js";import{D as x}from"./Divider-B3kj-aH9.js";import{T as u}from"./Title-CdzPUYFL.js";import"./preload-helper-D6kgxu3v.js";import"./index-CSvNjda-.js";import"./keys-qwmeR9UI.js";import"./_baseKeys-Xp4ZpeKz.js";import"./url-C_qYhIeE.js";import"./index-xplHyw9Y.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-BuALz1uw.js";import"./blocks-UWDse1kM.js";import"./toString-C36LOGfP.js";import"./isSymbol-CaR1j6Wi.js";import"./Links-DIPLuvzQ.js";import"./Link-BATZ2vEG.js";import"./BackLink-BgOTm1v2.js";import"./useAnalytics-DnodVaqC.js";import"./Button-BLZjFkXj.js";import"./common-B2CU8tKb.js";import"./Icon-DqqdgB-6.js";import"./EventBroker-BG4j8Zm_.js";import"./FileLink-CNREDoZs.js";import"./url-mJgWc96I.js";import"./Label-7qHUTBai.js";import"./Xmark-AYxOVczY.js";import"./HTML-BubuYKUJ.js";import"./ContentList-womTbVET.js";import"./Image-BnChCuv3.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CVWgLGWU.js";import"./v4-Dv1xt2bl.js";import"./Buttons-FY6kR7Yc.js";import"./Button-BOO7FysJ.js";import"./addComponentKeysets-Bj_5FvvC.js";import"./Link-CuOOw3Gt.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CtA6-B-U.js";import"./Col-C7pCcAIU.js";import"./CardBase-tEA9dFJR.js";import"./BackgroundImage-BLe-6a-v.js";import"./RouterLink-B9ROuSRD.js";import"./Tag-Do49183x.js";import"./IconWrapper-qQJfFlBD.js";import"./ToggleArrow-DXOAKZxv.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
