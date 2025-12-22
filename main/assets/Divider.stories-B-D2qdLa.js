import{R as t}from"./iframe-BH5ROqPS.js";import{y as f}from"./utils-CMSk6We9.js";import{B as o}from"./BasicCard-CIgIGdrp.js";import{D as x}from"./Divider-DDwu2_7W.js";import{T as u}from"./Title-D3sNzf-W.js";import"./preload-helper-D6kgxu3v.js";import"./index-C6ZnNpyk.js";import"./keys--9jW6N5G.js";import"./_baseKeys-DYTOal9N.js";import"./url-DjTF1d-5.js";import"./index-DyXlAlFm.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-D4aB0fiL.js";import"./blocks-mMgZ3CcB.js";import"./toString-CE1K1Pwx.js";import"./isSymbol-z_hP9GKU.js";import"./Links-DdTZtSBO.js";import"./Link-CKUQD3WX.js";import"./BackLink-CdmkLYof.js";import"./useAnalytics-DVChJ1pU.js";import"./Button-CX_8eelQ.js";import"./common-Bw57JjNh.js";import"./Icon-BNvN7lGh.js";import"./EventBroker-nFqOYlbw.js";import"./FileLink-Cg4LiUoh.js";import"./url-C7k1RMuj.js";import"./Label-DwJC6oGx.js";import"./Xmark-CbE4ju_E.js";import"./HTML-BsiLAaJk.js";import"./ContentList-BBIbVxvZ.js";import"./Image-DADcXcFG.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DxGA_A_W.js";import"./v4-Dv1xt2bl.js";import"./Buttons-BQI-MUQ2.js";import"./Button-BZTE4EMi.js";import"./addComponentKeysets-BCQZGef8.js";import"./Link-D79uFnU3.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-WkwmTkil.js";import"./Col-COBDUKE6.js";import"./CardBase-wBxZFYp4.js";import"./BackgroundImage-sOoEpdM2.js";import"./RouterLink-BTx3EAQT.js";import"./Tag-BpZfOcx1.js";import"./IconWrapper-D2Fx-7aY.js";import"./ToggleArrow-CUBng-QA.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
