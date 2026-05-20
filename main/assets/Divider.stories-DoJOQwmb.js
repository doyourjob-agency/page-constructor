import{R as t}from"./iframe-BXCyXLQj.js";import{y as f}from"./utils-Dw1NF-G0.js";import{B as o}from"./BasicCard-CBmO8VO2.js";import{D as x}from"./Divider-B5kC6i--.js";import{T as u}from"./Title-DGLVxgSC.js";import"./preload-helper-D6kgxu3v.js";import"./index-BxL-Kms2.js";import"./keys-AEkFucCP.js";import"./_baseKeys-CmjzvnXl.js";import"./url--mdh_SnE.js";import"./index-DjHgPrky.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-CfaPb3TR.js";import"./blocks-Bmc6CZQh.js";import"./toString-QTmDiZBv.js";import"./isSymbol-C50BnLLD.js";import"./Links-DvOFH4fn.js";import"./Link-B-VKj7Jl.js";import"./BackLink-CEI1Wccv.js";import"./useAnalytics-HHgJyXk6.js";import"./Button-2Plu2DCk.js";import"./common-Bw-ZttL0.js";import"./Icon-CBZW6A5L.js";import"./EventBroker-CIyFLLYx.js";import"./FileLink-McAeI3mH.js";import"./url-CeJmVZ2N.js";import"./Label-71jisdo5.js";import"./Xmark-Bsddxq4Y.js";import"./HTML-C2dV_EnF.js";import"./ContentList-ChdFTbRc.js";import"./Image-nQn8J6o7.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DpBTTWf6.js";import"./Buttons-D2z1OK9U.js";import"./Button-CS0Nn1jA.js";import"./addComponentKeysets-BPaiDh0A.js";import"./Link-Cn2ML3bZ.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BhyjEMoP.js";import"./Col-Hs4YFvfx.js";import"./CardBase-vGqHMIlO.js";import"./BackgroundImage-DMh9T6VX.js";import"./RouterLink-Tpl1H3ej.js";import"./Tag-C1vDjAnc.js";import"./IconWrapper-Bdd4aUzU.js";import"./ToggleArrow-Dx9eEVgX.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
    </div>`,...(c=(d=m.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const ft=["Default","Sizes"];export{r as Default,m as Sizes,ft as __namedExportsOrder,vt as default};
