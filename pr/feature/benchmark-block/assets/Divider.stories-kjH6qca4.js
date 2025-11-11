import{R as t}from"./iframe-B-1MfJnz.js";import{y as f}from"./utils-Cg8Upjfh.js";import{B as o}from"./BasicCard-IdoBOQXE.js";import{D as x}from"./Divider-BixzJSzB.js";import{T as u}from"./Title-nFt-yyBi.js";import"./preload-helper-D6kgxu3v.js";import"./index-ewrQ2iiy.js";import"./keys-B-57gqss.js";import"./_baseKeys-5EinwvTp.js";import"./url-BvcOkOGL.js";import"./index-DAS3C-A4.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-BKt4vEiN.js";import"./blocks-BhAyd1Rj.js";import"./toString-BHTvuu7Z.js";import"./isSymbol-DAGieHyN.js";import"./Links-ltGVqxm_.js";import"./Link-CH52LlCK.js";import"./BackLink-CFlHH5_a.js";import"./useAnalytics-CkhDQ91S.js";import"./Button-BVNp00Ef.js";import"./common-DTAvDZCo.js";import"./Icon-C4bu3fLf.js";import"./EventBroker-Z88VV636.js";import"./FileLink-DvubNzjL.js";import"./url-JDdz719k.js";import"./Label-Dy0e6maK.js";import"./Xmark-CyR5ALjF.js";import"./HTML-D6N3VhN2.js";import"./ContentList-CdhUzl4n.js";import"./Image-B6wIJEGF.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-iORQFV6e.js";import"./v4-Dv1xt2bl.js";import"./Buttons-C-KPofa9.js";import"./Button-BLiVxhgk.js";import"./addComponentKeysets-BiJ3Q1e2.js";import"./Link-BIQCfmIY.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CERM2BYO.js";import"./Col-4NvqNLQU.js";import"./CardBase-CbKo2UvT.js";import"./BackgroundImage-DCXhIdlm.js";import"./RouterLink-DUSMA6oQ.js";import"./Tag-CuVqlyR5.js";import"./IconWrapper-DrcoWzBV.js";import"./ToggleArrow-REg18SHu.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
