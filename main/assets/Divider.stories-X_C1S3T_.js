import{R as t}from"./iframe-BJ2aFwBV.js";import{y as f}from"./utils-DTHFUxlD.js";import{B as o}from"./BasicCard-CSL-yNSY.js";import{D as x}from"./Divider-qGZ83LJo.js";import{T as u}from"./Title-DIRVBJ-U.js";import"./preload-helper-D6kgxu3v.js";import"./index-BpNtau42.js";import"./keys-DURjSoul.js";import"./_baseKeys-C0VcA1KD.js";import"./url-ht1DMeK0.js";import"./index-74aB4PNa.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-CHzmyf-S.js";import"./blocks-DU-boJTs.js";import"./toString-uGRRaaBv.js";import"./isSymbol-CRyD0fli.js";import"./Links-BdVTOHXa.js";import"./Link-DY44Bgvv.js";import"./BackLink-D3j9ImNl.js";import"./useAnalytics-BAyI84to.js";import"./Button-C8e7iwjN.js";import"./common-BXjSTHC7.js";import"./Icon-CY4AM9WY.js";import"./EventBroker-DfwM8hh3.js";import"./FileLink-Dd4b_hmx.js";import"./url-B4AZBgfr.js";import"./Label-C6yjRg9q.js";import"./Xmark-A1FK6uch.js";import"./HTML-ByZ2seZF.js";import"./ContentList-CoPNuuLx.js";import"./Image-CX_0rSIs.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-nj8841yW.js";import"./v4-Dv1xt2bl.js";import"./Buttons-CJDRijqx.js";import"./Button-BRK4E0Xv.js";import"./addComponentKeysets-DAZDf595.js";import"./Link-DDPhPZJD.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DJuz2Hkl.js";import"./Col-19WbKkJP.js";import"./CardBase-CPUFN8pn.js";import"./BackgroundImage-DHi6pAeD.js";import"./RouterLink-Bp7R7i4K.js";import"./Tag-DedAeHI6.js";import"./IconWrapper-B3R42V-w.js";import"./ToggleArrow-B-hXf8dx.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
