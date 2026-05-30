import{R as t}from"./iframe-B9Bshxs5.js";import{y as f}from"./utils-DoojaZBk.js";import{B as o}from"./BasicCard-wTWNCUDE.js";import{D as x}from"./Divider-C-bN_NlE.js";import{T as u}from"./Title-BhPmVguF.js";import"./preload-helper-D6kgxu3v.js";import"./index-BvtDF0Jq.js";import"./keys-BqFS9vyS.js";import"./_baseKeys-CXVi074q.js";import"./url-UO-OO6kB.js";import"./index-BaQEs4iX.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-Dk2edqYr.js";import"./Content-19fhe_iZ.js";import"./blocks-7SpOLlhH.js";import"./toString-1Iga-227.js";import"./isSymbol-Bv0bH72J.js";import"./Links-ai9CnAUX.js";import"./Link-DrY9e-q_.js";import"./BackLink-3gPMYvJS.js";import"./useAnalytics-DaRn2FIT.js";import"./Button-COwnkOJ-.js";import"./common-D_pfOqHG.js";import"./Icon-CnZ2bjRy.js";import"./EventBroker-CMnoGVHV.js";import"./FileLink-BDcB_qhT.js";import"./url-CtTfkgoz.js";import"./Label-IzeQgbzz.js";import"./Xmark-CU5yEz4N.js";import"./YFMWrapper-BOxf3Dxx.js";import"./HTML-BHbdC5cu.js";import"./ContentList-DLPGuh5Q.js";import"./Image-Cww1xZDR.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BRIexnY4.js";import"./Buttons-CDC4I9kF.js";import"./Button-SOEGIWYs.js";import"./addComponentKeysets-C-MBnZaK.js";import"./Link-D7zX-gQJ.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DFG1R5E6.js";import"./Col-Go2CaVWD.js";import"./CardBase-BGTuY5IA.js";import"./BackgroundImage-DcAJMp3f.js";import"./RouterLink-CPdX4rO_.js";import"./Tag-CkBH6RsZ.js";import"./IconWrapper-C39xaeh-.js";import"./ToggleArrow-BsBk03KM.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
