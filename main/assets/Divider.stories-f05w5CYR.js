import{R as t}from"./iframe-DfGdnDFe.js";import{y as f}from"./utils-c2XjFdFE.js";import{B as o}from"./BasicCard-DfiPWeU5.js";import{D as x}from"./Divider-FY-J5M1_.js";import{T as u}from"./Title-CXo1cPR5.js";import"./preload-helper-D6kgxu3v.js";import"./index-DVJXzqR3.js";import"./keys-ClxUnOS-.js";import"./_baseKeys--MYw3aFd.js";import"./url-BCymimq_.js";import"./index-DLpRnYfW.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-Dhbh_t1D.js";import"./blocks-DuUSL2eI.js";import"./toString-DHA5SOsw.js";import"./isSymbol-CK019eRV.js";import"./Links-CCL2nxf9.js";import"./Link-AjPBoed_.js";import"./BackLink-N2Jv7xHS.js";import"./useAnalytics-Dri8t-Yc.js";import"./Button-DfbZqrfF.js";import"./common-KzIkT2iA.js";import"./Icon-rpBRKP6S.js";import"./EventBroker-DSD-mgUB.js";import"./FileLink-BMuUcVGE.js";import"./url-B9sABXBB.js";import"./Label-CkaOisjQ.js";import"./Xmark-I5KAqHrw.js";import"./HTML-C2K5b8g6.js";import"./ContentList-DRaS1Erw.js";import"./Image-pj8I9B79.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CmaJHZ3F.js";import"./v4-Dv1xt2bl.js";import"./Buttons-FqHrYNuf.js";import"./Button-DNpc9NBN.js";import"./addComponentKeysets-r62qkSmB.js";import"./Link-BB3FXpm8.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DtempHhC.js";import"./Col-Qk6giYaK.js";import"./CardBase-KpWMvfU8.js";import"./BackgroundImage-GE7mjQck.js";import"./RouterLink-B407kFKL.js";import"./Tag-DBiiTf5v.js";import"./IconWrapper-r-IWyZek.js";import"./ToggleArrow-CXYapl_6.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
