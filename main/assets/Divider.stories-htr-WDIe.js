import{R as t}from"./iframe-6IEKBI69.js";import{y as f}from"./utils-D6q2Iwtc.js";import{B as o}from"./BasicCard-BfkcBKB4.js";import{D as x}from"./Divider-g1BRciRD.js";import{T as u}from"./Title-Ru0Enagy.js";import"./preload-helper-D6kgxu3v.js";import"./index-CNihRoif.js";import"./keys-CX0aE1hP.js";import"./_baseKeys-BdplbTpf.js";import"./url-BKaOcl6n.js";import"./index-tQyclnTH.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-CDSx6MGz.js";import"./blocks-AB6-faU4.js";import"./toString-De5m6p4v.js";import"./isSymbol-82PtnLsg.js";import"./Links-BqOKteto.js";import"./Link-XIldkCOm.js";import"./BackLink-DKik0uCR.js";import"./useAnalytics-nz72nDwQ.js";import"./Button-8QNct2t1.js";import"./common-Bsx_gvUG.js";import"./Icon-DSywuJKN.js";import"./EventBroker-DgCibt35.js";import"./FileLink-ClZ_KhF6.js";import"./url-EqKv8M59.js";import"./Label-DV5RvqU2.js";import"./Xmark-DeBGwbfM.js";import"./YFMWrapper-CayUP_YW.js";import"./HTML-CzZr_5Xf.js";import"./ContentList-Cd2iDXFs.js";import"./Image-T4jrcHR0.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-qT8uKAPN.js";import"./Buttons-CcMc4DJd.js";import"./Button-DHFXIu7S.js";import"./addComponentKeysets-CYL3e-uk.js";import"./Link-C8kH4qqr.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DgIjEx1m.js";import"./Col-DNnmhtef.js";import"./CardBase-DRj7otsF.js";import"./BackgroundImage-CSjnk4o5.js";import"./RouterLink-CouTAYY-.js";import"./Tag-IheRmGNr.js";import"./IconWrapper-DLNdo7_q.js";import"./ToggleArrow-Cd9NXqfd.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
