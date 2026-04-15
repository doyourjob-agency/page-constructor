import{R as t}from"./iframe-BKzZAJD2.js";import{y as f}from"./utils-xrEzqJ_T.js";import{B as o}from"./BasicCard-DDa3E5dl.js";import{D as x}from"./Divider-CcrSikfY.js";import{T as u}from"./Title-D_rLqnXW.js";import"./preload-helper-D6kgxu3v.js";import"./index-C15PwXNk.js";import"./keys-DR523ELl.js";import"./_baseKeys-6tUSR4dK.js";import"./url-Dlgb-tnW.js";import"./index-CgjPXaAG.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-D3-VRK71.js";import"./blocks-ezAwjdXA.js";import"./toString-ssNnA_O6.js";import"./isSymbol-B52loX0r.js";import"./Links-DDc6ssjn.js";import"./Link-Bqrd0Wkm.js";import"./BackLink-CT9G3Nnp.js";import"./useAnalytics-CghuEAKi.js";import"./Button-PU1AYDgn.js";import"./common-D5p7fo20.js";import"./Icon-VZC1GYLS.js";import"./EventBroker-DRg2EGz5.js";import"./FileLink-Be5qdWnK.js";import"./url-CNI0QeC-.js";import"./Label-C-8zbZNz.js";import"./Xmark-C8QelAg5.js";import"./HTML-DPa5I03F.js";import"./ContentList-C4vvoxTX.js";import"./Image-BdY0bxa5.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-xSFKXKaS.js";import"./v4-Dv1xt2bl.js";import"./Buttons-CTxn3hfp.js";import"./Button-BvG8YzSE.js";import"./addComponentKeysets-CN9hAPcJ.js";import"./Link-Sxb7k8jt.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-3O5Tks3H.js";import"./Col-C1PLpyM0.js";import"./CardBase-4q8WlpgE.js";import"./BackgroundImage-C1QMyzBh.js";import"./RouterLink-ClkgVVQJ.js";import"./Tag-COrADycD.js";import"./IconWrapper-jPkKaf-O.js";import"./ToggleArrow-zNpoKG6C.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
