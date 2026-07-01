import{R as t}from"./iframe-B9nTuyQM.js";import{y as f}from"./utils-CKlTj6rw.js";import{B as o}from"./BasicCard-Cst2vBx-.js";import{D as x}from"./Divider-D4_LNgSS.js";import{T as u}from"./Title-Betg7g7C.js";import"./preload-helper-D6kgxu3v.js";import"./index-Cha-LNu2.js";import"./keys-CtMaai5j.js";import"./_baseKeys-Cbpet8kb.js";import"./url-B3-zw-85.js";import"./index-COv8Bw5s.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-D8Ar6zcf.js";import"./blocks-C1Ad9tdq.js";import"./toString-BjuaTsG5.js";import"./isSymbol-CDpScx5V.js";import"./Links-Dzk8Mz4T.js";import"./Link-C5zdMZFO.js";import"./BackLink-BWc-YAfV.js";import"./useAnalytics-C8RX1NQ1.js";import"./Button-5JizVw43.js";import"./common-CltZYNLi.js";import"./Icon-C2SuDFpC.js";import"./EventBroker-CDQnNzR0.js";import"./FileLink-DP8l0Nty.js";import"./url-DC_HAGWN.js";import"./Label-DVpVFqoq.js";import"./Xmark-CDebicpB.js";import"./YFMWrapper-DHlz-IYA.js";import"./HTML-BvTmf8fY.js";import"./ContentList-BYj23rFB.js";import"./Image-CNSyvNAO.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-B20VAK8A.js";import"./Buttons-U-8J1eKx.js";import"./Button-DYEtfIP4.js";import"./addComponentKeysets-8O7LKaY3.js";import"./Link-o6hNvrTp.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-B0kzwjZL.js";import"./Col-CRw1Ccb8.js";import"./CardBase-YtUP6wlq.js";import"./BackgroundImage-Cvyc6RcF.js";import"./RouterLink-D6cDcbMm.js";import"./Tag-_iK9_DpX.js";import"./IconWrapper-Cfne4vqm.js";import"./ToggleArrow-DFT3naLB.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
