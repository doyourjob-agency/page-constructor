import{R as t}from"./iframe-Ej1qjEV0.js";import{y as f}from"./utils-32P7fPCQ.js";import{B as o}from"./BasicCard-YDPdhsxT.js";import{D as x}from"./Divider-DhTescS6.js";import{T as u}from"./Title-DCXLHziU.js";import"./preload-helper-D6kgxu3v.js";import"./index-1NFg6Qlx.js";import"./keys-CdU0R8fn.js";import"./_baseKeys-Ci2jV4B8.js";import"./url-CE188rjl.js";import"./index-DP0mPBLe.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-B3jHiR2u.js";import"./Content-BnxKCiwy.js";import"./blocks-Do5j629-.js";import"./toString-CEJRav-q.js";import"./isSymbol-DVHr0JgI.js";import"./Links-lDtQ-4Dx.js";import"./Link-BhU2rgTO.js";import"./BackLink-BE3GLo_m.js";import"./useAnalytics-BCWy_evr.js";import"./Button-2iPQIQVV.js";import"./common-zPfteUQA.js";import"./Icon-CsdnO2ab.js";import"./EventBroker-TiWyh6LV.js";import"./FileLink-BOycjDXC.js";import"./url-Cj4T39w5.js";import"./Label-D0ZXo26v.js";import"./Xmark-CqNef0_W.js";import"./YFMWrapper-c1H5bjE0.js";import"./HTML-BPPtVPz_.js";import"./ContentList-BRV9ktoN.js";import"./Image-B3-RTyk0.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DPG4szAh.js";import"./Buttons-Cb7klpmG.js";import"./Button-DRwus-Sf.js";import"./addComponentKeysets-B-5wT9Ld.js";import"./Link-DtTLS_Lw.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BY-tuR3-.js";import"./Col-CTjlM0ut.js";import"./CardBase-Bar2XPnR.js";import"./BackgroundImage-BbfzwZTt.js";import"./RouterLink-CwmW16CZ.js";import"./Tag-qntvJuGF.js";import"./IconWrapper-DUL54Mxq.js";import"./ToggleArrow-YSJ-Grm8.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
