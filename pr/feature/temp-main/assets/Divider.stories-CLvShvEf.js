import{R as t}from"./iframe-CFQ2HpFz.js";import{y as f}from"./utils-C-_qJVKw.js";import{B as o}from"./BasicCard-CbEfJqNW.js";import{D as x}from"./Divider-DlS5CIT3.js";import{T as u}from"./Title-DIYjiarN.js";import"./preload-helper-D6kgxu3v.js";import"./index-CQcyyCEy.js";import"./keys-Bsbp92JL.js";import"./_baseKeys-BjxTSwWf.js";import"./url-Cr9KQp1a.js";import"./index-C-Zszds6.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-WonJ-_et.js";import"./blocks-CPwct1Zz.js";import"./toString-CNpr3h-C.js";import"./isSymbol-ChOA1cj2.js";import"./Links-B4O9bQka.js";import"./Link-Hl3UCGhp.js";import"./BackLink-CzkcDAhA.js";import"./useAnalytics-CNiprUP3.js";import"./Button-CMN7WzVJ.js";import"./common-VQmITLHl.js";import"./Icon-wQXp1QHO.js";import"./EventBroker-_j85mSrA.js";import"./FileLink-DWOv1fVp.js";import"./url-WNn3-P4W.js";import"./Label-jC9S05Nl.js";import"./Xmark-NiB63Xli.js";import"./HTML-B4VxacAP.js";import"./ContentList-DoVwUncI.js";import"./Image-DvXAQotX.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-C67DiKWu.js";import"./v4-Dv1xt2bl.js";import"./Buttons-DzdyrtrZ.js";import"./Button-CJjHwkWm.js";import"./addComponentKeysets-D-1XdWTK.js";import"./Link-DhdwE5kP.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-Rv_Ya6wt.js";import"./Col-Djt7mk_k.js";import"./CardBase-CDSEeoIG.js";import"./BackgroundImage-DS_AZop0.js";import"./RouterLink-C7njG8ub.js";import"./Tag-C3et6-_n.js";import"./IconWrapper-Bx96eOM5.js";import"./ToggleArrow-CeQ7o0q8.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
