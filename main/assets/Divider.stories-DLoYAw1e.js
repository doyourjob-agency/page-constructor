import{R as t}from"./iframe-Cgs6sT2s.js";import{y as f}from"./utils-LozsYVlT.js";import{B as o}from"./BasicCard-D2pzQhhG.js";import{D as x}from"./Divider-1aNj47dq.js";import{T as u}from"./Title-DJIrDyTf.js";import"./preload-helper-D6kgxu3v.js";import"./index-BSjEvfWv.js";import"./keys-C3AyLQkY.js";import"./_baseKeys-Byiiihuo.js";import"./url-C4wZV-Mp.js";import"./index-BLBcNOU8.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-DjHyb9XF.js";import"./blocks-BS4p6gLN.js";import"./toString-C_ZmqCwX.js";import"./isSymbol-DuU2lxZP.js";import"./Links-71SqN-5p.js";import"./Link-rFIFVyyF.js";import"./BackLink-lfUF-UTW.js";import"./useAnalytics-BJ7gOu1f.js";import"./Button-D4okgugw.js";import"./common-DuAIfnd3.js";import"./Icon-B-_FIW7w.js";import"./EventBroker-D3oaqCKE.js";import"./FileLink-DlyFd3pw.js";import"./url-BPDqkqKB.js";import"./Label-ClOiM8my.js";import"./Xmark-Tr6yUa4Z.js";import"./HTML-0SoQ8JLI.js";import"./ContentList-DFh8WrB_.js";import"./Image-BqpQYOvE.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BCKzsZdd.js";import"./Buttons-DfBZCCcQ.js";import"./Button-2cT2tKEX.js";import"./addComponentKeysets-y3teGGTG.js";import"./Link-Cp-HvOWC.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-COF57ns2.js";import"./Col-aHE5Dqib.js";import"./CardBase-DrbBTLhC.js";import"./BackgroundImage-C7zj8G9i.js";import"./RouterLink-CunUpFpK.js";import"./Tag-B9vD3tLO.js";import"./IconWrapper-BhnTvGHw.js";import"./ToggleArrow-BV-Swq0f.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
