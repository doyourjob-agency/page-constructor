import{R as t}from"./iframe-CJC4n4zl.js";import{y as f}from"./utils-BF6vxvZm.js";import{B as o}from"./BasicCard-DgR0ELCC.js";import{D as x}from"./Divider-D2bmjyxo.js";import{T as u}from"./Title-S4vHzu8l.js";import"./preload-helper-D6kgxu3v.js";import"./index-BBTTRyel.js";import"./keys-Od7R1BJ_.js";import"./_baseKeys-BneH4U3-.js";import"./url-D1Ibtw08.js";import"./index-ybbJ1AUr.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-R3FAo6tX.js";import"./blocks-DZFYO3Wh.js";import"./toString-B7H1fhQR.js";import"./isSymbol-DbmTLVVC.js";import"./Links-DwDlMhNI.js";import"./Link-sfjtgoLU.js";import"./BackLink-DIDviTw7.js";import"./useAnalytics-BCsK8F6h.js";import"./Button-DAtLHPqj.js";import"./common-C7WpRJIU.js";import"./Icon-CaGi1VNr.js";import"./EventBroker-CglJamyp.js";import"./FileLink-DxHe2IWe.js";import"./url-DxZPaO88.js";import"./Label-C-6Jol6Z.js";import"./Xmark-80T7Vte3.js";import"./YFMWrapper-BvZhzWXI.js";import"./HTML-DHPzOpjT.js";import"./ContentList-C2mnrbTF.js";import"./Image-CqEwgCP6.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-D1Vk42s0.js";import"./Buttons-dJibKvFR.js";import"./Button-C99PTGVU.js";import"./addComponentKeysets-CbLjzVxx.js";import"./Link-D_ZiHDfa.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CER2nEOn.js";import"./Col-Bt4fGie0.js";import"./CardBase-amlzCJZI.js";import"./BackgroundImage-D82H5vUY.js";import"./RouterLink-6eeF60wf.js";import"./Tag-CXhEIJnK.js";import"./IconWrapper-C_wyJOkg.js";import"./ToggleArrow-BVAEBIrf.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
