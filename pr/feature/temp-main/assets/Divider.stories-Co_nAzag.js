import{R as t}from"./iframe-DuncQXYd.js";import{y as f}from"./utils-CGhFwfWp.js";import{B as o}from"./BasicCard-Dm4nWZR0.js";import{D as x}from"./Divider-BJmuthvQ.js";import{T as u}from"./Title-DqgI8RbE.js";import"./preload-helper-D6kgxu3v.js";import"./index-zf9uY_Fq.js";import"./keys-rUa3TAG8.js";import"./_baseKeys-CRN9XnDl.js";import"./url-DM1a4mcL.js";import"./index-DtMdQMXH.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-TmL_AYQD.js";import"./blocks-CBVD-Rku.js";import"./toString-oHrZwSy4.js";import"./isSymbol-CCcy_Y4_.js";import"./Links-7S_23dXX.js";import"./Link-B2oPUWfb.js";import"./BackLink-9jEi20UV.js";import"./useAnalytics-tn6hEUl6.js";import"./Button-DDd288AW.js";import"./common-BVlX9rIC.js";import"./Icon-BkRONFiN.js";import"./EventBroker-C-yF_XLH.js";import"./FileLink-X3TCBiJN.js";import"./url-gxbbEyC3.js";import"./Label-KP9oixDZ.js";import"./Xmark-DsvOy-0k.js";import"./HTML-CatxmRzh.js";import"./ContentList-C8NtygLs.js";import"./Image-BL2kiIXs.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BpetoW6L.js";import"./v4-Dv1xt2bl.js";import"./Buttons-u5sJW9LO.js";import"./Button-D-SFPc_Q.js";import"./addComponentKeysets-C8ZbFzcB.js";import"./Link-CA-TBml8.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CcKL9llX.js";import"./Col-CK_FRTKS.js";import"./CardBase-e9G3MG4c.js";import"./BackgroundImage-BNnYcsqr.js";import"./RouterLink-CzejLtco.js";import"./Tag-Rr7ad8EI.js";import"./IconWrapper-7nQ0vXee.js";import"./ToggleArrow-DCMNKtPc.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
