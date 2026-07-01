import{R as t}from"./iframe-uvugQck6.js";import{y as f}from"./utils-BPWZOUsP.js";import{B as o}from"./BasicCard-CAYJHctc.js";import{D as x}from"./Divider-BbFjzPxu.js";import{T as u}from"./Title-C_0-Spwp.js";import"./preload-helper-D6kgxu3v.js";import"./index-EoWjIwsq.js";import"./keys-B8JCJDRO.js";import"./_baseKeys-2ukH8ptf.js";import"./url-BF_m4a8Q.js";import"./index-D0WNqWED.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-ehxym57J.js";import"./blocks-Dw6cgShw.js";import"./toString-CISXR4Wy.js";import"./isSymbol-CjWGQ0kY.js";import"./Links-aUNo9y3s.js";import"./Link-Dkfs8cRM.js";import"./BackLink-UVqtjhPE.js";import"./useAnalytics-DtEpCAeY.js";import"./Button-BLKiYVjO.js";import"./common-Ro6YYOC2.js";import"./Icon-CUFzR7Iu.js";import"./EventBroker-BQp2ZcEK.js";import"./FileLink-HW2CjkU1.js";import"./url-zzkc8ILI.js";import"./Label-FWfCEwR0.js";import"./Xmark-BZ13qMOd.js";import"./YFMWrapper-DdxUKQFv.js";import"./HTML-DOtg8gbn.js";import"./ContentList-Z3q3L_kD.js";import"./Image-DxL7nZpM.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CmSuBoJ6.js";import"./Buttons-CIO6XCR8.js";import"./Button-BUIVEsOp.js";import"./addComponentKeysets-4RLBq81W.js";import"./Link-CLfFp7nS.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-03h4pB0A.js";import"./Col-DEYClExk.js";import"./CardBase--5-LSDr2.js";import"./BackgroundImage-Wcmy2QcZ.js";import"./RouterLink-CfcxCCrg.js";import"./Tag-DMzaiQf8.js";import"./IconWrapper-5K1eVdIL.js";import"./ToggleArrow-DR6I8oTT.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
