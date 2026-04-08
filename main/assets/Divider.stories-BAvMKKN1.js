import{R as t}from"./iframe-DdldT5Hg.js";import{y as f}from"./utils-DtTd6u7B.js";import{B as o}from"./BasicCard-BENtLXqa.js";import{D as x}from"./Divider-BzAzoUov.js";import{T as u}from"./Title-C8oaydYK.js";import"./preload-helper-D6kgxu3v.js";import"./index-Cf9qzh4c.js";import"./keys-BRPgMou6.js";import"./_baseKeys-B7W6wCL2.js";import"./url-VfTIRfpN.js";import"./index-Cr5IcuC6.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-Blm90aOF.js";import"./blocks-D5ubR115.js";import"./toString-BzLlhFM2.js";import"./isSymbol-BBFEYhH7.js";import"./Links-C9wRbM-h.js";import"./Link-DqGDBvBl.js";import"./BackLink-DAs1cfgq.js";import"./useAnalytics-DfyQfbgZ.js";import"./Button-NYV-X5wM.js";import"./common-RQxO3sAA.js";import"./Icon-GCCX22__.js";import"./EventBroker-CqLygY_7.js";import"./FileLink-D4M1Yyac.js";import"./url-BAha2BHS.js";import"./Label-DVqkgKeC.js";import"./Xmark-BPDKbRR1.js";import"./HTML-C2Kn2jiQ.js";import"./ContentList-X2M776Kc.js";import"./Image-D987YEqX.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-Bn_GMaRr.js";import"./v4-Dv1xt2bl.js";import"./Buttons-v_H2uMER.js";import"./Button-Bp1coSiI.js";import"./addComponentKeysets-C9J2rsCT.js";import"./Link-C1iMbacT.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-q2fRCAqT.js";import"./Col-BLiFOUWr.js";import"./CardBase-Dss1VeAc.js";import"./BackgroundImage-hdfF2Lwr.js";import"./RouterLink-D44K1f9s.js";import"./Tag-CbikqpMi.js";import"./IconWrapper-CedZVVUZ.js";import"./ToggleArrow-BviKoiN5.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
