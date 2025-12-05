import{R as t}from"./iframe-B12DVYOj.js";import{y as f}from"./utils-B29XppQg.js";import{B as o}from"./BasicCard-BmrWj5hL.js";import{D as x}from"./Divider-CsN57p0t.js";import{T as u}from"./Title-Cud6uvEt.js";import"./preload-helper-D6kgxu3v.js";import"./index-Bka2_bRD.js";import"./keys-rKbo1dOc.js";import"./_baseKeys-CEcnBRip.js";import"./url-CXfr6Q_f.js";import"./index-CVQu9hj5.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-DCb10YAH.js";import"./blocks-HdweTvb5.js";import"./toString-OecMuaH4.js";import"./isSymbol-B9JskgnN.js";import"./Links-CWgfF8-Q.js";import"./Link-B56Vrnsk.js";import"./BackLink-B31yJ9d1.js";import"./useAnalytics-D2bZ6Y4P.js";import"./Button-OevIlzEF.js";import"./common-tWyWfA8d.js";import"./Icon-D_JJujbn.js";import"./EventBroker-DTOOu51a.js";import"./FileLink-pMbIlJBi.js";import"./url-BJGCk5EZ.js";import"./Label-DTT4Bilw.js";import"./Xmark-Yhx3lqIP.js";import"./HTML-DZLLnD10.js";import"./ContentList-DumbkW74.js";import"./Image-BXI_4IYn.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CNMoLplP.js";import"./v4-Dv1xt2bl.js";import"./Buttons-BtRvMdCq.js";import"./Button-Cv371SRc.js";import"./addComponentKeysets-854BOD3O.js";import"./Link-BearK2qv.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-Bok4eMFZ.js";import"./Col-xFUjt5-F.js";import"./CardBase-BWEWUl6W.js";import"./BackgroundImage-D91jxHNu.js";import"./RouterLink-DFXZfhgO.js";import"./Tag-C3ddblya.js";import"./IconWrapper-D7dEA1hW.js";import"./ToggleArrow-sOoZxtYu.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
