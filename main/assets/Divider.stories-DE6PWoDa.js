import{R as t}from"./iframe-BN0EkwFC.js";import{y as f}from"./utils-CnsOXMRk.js";import{B as o}from"./BasicCard-sRg_W3qS.js";import{D as x}from"./Divider-D3hibUQA.js";import{T as u}from"./Title-DPn2uaPE.js";import"./preload-helper-D6kgxu3v.js";import"./index-CDSd9py7.js";import"./keys-DvBnFG5b.js";import"./_baseKeys-B4oVDb-V.js";import"./url-BC62RVf7.js";import"./index-ndEi3GvW.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-B3jHiR2u.js";import"./Content-C3hk9kYk.js";import"./blocks-DSjnoFnc.js";import"./toString-dtMhozL9.js";import"./isSymbol-DXXmfIdZ.js";import"./Links-Bhvp3_zA.js";import"./Link-DfE8Nn5C.js";import"./BackLink-DUWsUr_O.js";import"./useAnalytics-Dge8W7To.js";import"./Button-19Iamzoc.js";import"./common-Dg8RvJ83.js";import"./Icon-BIodxrVj.js";import"./EventBroker-Gv425XVo.js";import"./FileLink-kqr1ssRi.js";import"./url-D5v577Ol.js";import"./Label-DGL8R99C.js";import"./Xmark-71NdooT5.js";import"./YFMWrapper-BB7Nfs56.js";import"./HTML-B6uN_5lC.js";import"./ContentList-BfuZjLa1.js";import"./Image-GOVfuE6Q.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-Bm7aTnwk.js";import"./Buttons-D0AhZB8Q.js";import"./Button-CDYez0L5.js";import"./addComponentKeysets-ogxaYhQV.js";import"./Link-BFhiRVlm.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-D3wJP9FM.js";import"./Col-hZIKluhn.js";import"./CardBase-CtM8qAQu.js";import"./BackgroundImage-DkF9GZCT.js";import"./RouterLink-DF6R2jBN.js";import"./Tag-B9RoyMRp.js";import"./IconWrapper-BPDfX2f3.js";import"./ToggleArrow-j4iiAV3j.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
