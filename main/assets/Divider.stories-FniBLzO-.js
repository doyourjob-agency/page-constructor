import{R as t}from"./iframe-BNbfXxeO.js";import{y as f}from"./utils-Dh83AXpu.js";import{B as o}from"./BasicCard-DokTazhq.js";import{D as x}from"./Divider-DZtJWxS5.js";import{T as u}from"./Title-7jGOl3_f.js";import"./preload-helper-D6kgxu3v.js";import"./index-7r8k41NU.js";import"./keys-DnGjFXh2.js";import"./_baseKeys-CEP0GsGk.js";import"./url-LGBPAFkG.js";import"./index-AmrUi2rY.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-B3jHiR2u.js";import"./Content-CwkM57Qp.js";import"./blocks-DQ2OuZGY.js";import"./toString-sjqB75HR.js";import"./isSymbol-C99yONw7.js";import"./Links-CVyecw7e.js";import"./Link-o6Wc30HO.js";import"./BackLink-BpsUcuRp.js";import"./useAnalytics-Bzgz1mAg.js";import"./Button-BoGnvg1W.js";import"./common-CTkCf2m9.js";import"./Icon-B3yIF_Ws.js";import"./EventBroker-CC2OAbFj.js";import"./FileLink-DDU4ZSM8.js";import"./url-CyExnTN3.js";import"./Label-DctTUgUK.js";import"./Xmark-NyVvc7Ux.js";import"./YFMWrapper-D3cJAA8W.js";import"./HTML-Hb5NFppa.js";import"./ContentList-CzAphJMj.js";import"./Image-C9-6IYaf.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-o4bZeILR.js";import"./Buttons-D_HkJTkI.js";import"./Button-C9-FjkA8.js";import"./addComponentKeysets-BExFghlB.js";import"./Link-LU0BCyW3.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-C4Dal0LN.js";import"./Col-Bn_XXr-v.js";import"./CardBase-C0QruPlD.js";import"./BackgroundImage-BvWy--F7.js";import"./RouterLink-CfWAhqp3.js";import"./Tag-CAOT8ssK.js";import"./IconWrapper-BEeii4tF.js";import"./ToggleArrow-B89tyb2q.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
