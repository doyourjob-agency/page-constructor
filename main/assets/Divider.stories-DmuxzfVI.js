import{R as t}from"./iframe-DEGzr9XS.js";import{y as f}from"./utils-DW-G6AZG.js";import{B as o}from"./BasicCard-DT7f6HUc.js";import{D as x}from"./Divider-Dlpcqoru.js";import{T as u}from"./Title-BEE394te.js";import"./preload-helper-D6kgxu3v.js";import"./index-BgvXmzr9.js";import"./keys-CbU0KKi3.js";import"./_baseKeys-cICHmSAX.js";import"./url-oIBqMakk.js";import"./index-DwTrMNIk.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-PU5izfCF.js";import"./blocks-CDtzYkMF.js";import"./toString-Dng-F5SD.js";import"./isSymbol-DyBK-i1w.js";import"./Links-BxfyIcxn.js";import"./Link-C5FfVpz0.js";import"./BackLink-D5AWs3UE.js";import"./useAnalytics-AbsSGX2V.js";import"./Button-DFm3wYOh.js";import"./common-C6KprIei.js";import"./Icon-CBKlo4z6.js";import"./EventBroker-CwyumgC0.js";import"./FileLink-DqJrA0Ji.js";import"./url-CXKQqmDd.js";import"./Label-p2R_8TIg.js";import"./Xmark-ILob3Cyd.js";import"./HTML-Dd_QJj2Z.js";import"./ContentList-C8bzX9gl.js";import"./Image-DfhN4R5R.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-hZN1fuLg.js";import"./v4-Dv1xt2bl.js";import"./Buttons-XzGielw8.js";import"./Button-DlQmMzK-.js";import"./addComponentKeysets-vYlBbJyZ.js";import"./Link-CpF4XKTn.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BsZkwAOR.js";import"./Col-C-JD36IT.js";import"./CardBase-Dy0EQ_Ul.js";import"./BackgroundImage-DfEXg1WY.js";import"./RouterLink-Bha0UkQt.js";import"./Tag-D0C7PRuN.js";import"./IconWrapper-CTG5DfMo.js";import"./ToggleArrow-D4wsApXe.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
