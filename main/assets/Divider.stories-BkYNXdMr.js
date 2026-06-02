import{R as t}from"./iframe-BXwymdQh.js";import{y as f}from"./utils-ErB4-kaK.js";import{B as o}from"./BasicCard-Bqcl2yb4.js";import{D as x}from"./Divider-C_WwR-E8.js";import{T as u}from"./Title-DfVwV-JB.js";import"./preload-helper-D6kgxu3v.js";import"./index-Cj2GmDcy.js";import"./keys-BE8dpKa5.js";import"./_baseKeys-DgbqRIMN.js";import"./url-Bc9ISOMX.js";import"./index-W2ytx2V2.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-B3jHiR2u.js";import"./Content-DS56jm5c.js";import"./blocks-Dbb7RmMj.js";import"./toString-jteY3T0w.js";import"./isSymbol-Ccp2al0N.js";import"./Links-dDps89Dz.js";import"./Link-mqoKeSQi.js";import"./BackLink-C5k-p0H5.js";import"./useAnalytics-CRusmuS6.js";import"./Button-DYEusfhk.js";import"./common-B6vxMXjL.js";import"./Icon-BdHMU0h6.js";import"./EventBroker-DhnVlpdd.js";import"./FileLink-ou7wJV8N.js";import"./url-BRnUofu4.js";import"./Label-Z6U-El90.js";import"./Xmark-B6ys6HV6.js";import"./YFMWrapper-B7oiA3oG.js";import"./HTML-B9INKTKX.js";import"./ContentList-BJr4OZr1.js";import"./Image-gMXtlgEp.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-gMBsbQKf.js";import"./Buttons-YFPjvvOg.js";import"./Button-BYucwUym.js";import"./addComponentKeysets-CE5D7Puq.js";import"./Link-Cnvs08FA.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BDfl78m8.js";import"./Col-CtfSZxga.js";import"./CardBase-BKutDDCG.js";import"./BackgroundImage-sLKCGwdb.js";import"./RouterLink-sUPQR_z1.js";import"./Tag-B8Su8Rav.js";import"./IconWrapper-BEY8B12_.js";import"./ToggleArrow-C5JCbt9t.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
