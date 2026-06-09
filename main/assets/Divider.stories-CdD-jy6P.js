import{R as t}from"./iframe-DasMJGgp.js";import{y as f}from"./utils-C_32fSdX.js";import{B as o}from"./BasicCard-CKb28jBV.js";import{D as x}from"./Divider-C_kdfY6w.js";import{T as u}from"./Title-UAk30Phf.js";import"./preload-helper-D6kgxu3v.js";import"./index-BBsIvrZQ.js";import"./keys-BEjXD0B-.js";import"./_baseKeys-C6p31nSq.js";import"./url-BfnOrkpv.js";import"./index-Dv0CBiRA.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-CgDIvuvZ.js";import"./blocks-C5uZkBKL.js";import"./toString-Bw3zNYfL.js";import"./isSymbol-967hvxdi.js";import"./Links-DddNe0DM.js";import"./Link-D9xWd9pE.js";import"./BackLink-wTnWv7cM.js";import"./useAnalytics-RZhn8S-_.js";import"./Button-DZ9qmEH3.js";import"./common-BmF9Ibdm.js";import"./Icon-ooj1B8Y8.js";import"./EventBroker-DONNnKiu.js";import"./FileLink-Dyi-x_Wy.js";import"./url-gylPfVIu.js";import"./Label-CrZQrHDK.js";import"./Xmark-CBK_ZI8G.js";import"./YFMWrapper-DAqhz0Tb.js";import"./HTML-C1cTwzwK.js";import"./ContentList-BqR-_uHo.js";import"./Image-B1_ivXSd.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-htrif9tg.js";import"./Buttons-CrCY16jp.js";import"./Button-AADawzn7.js";import"./addComponentKeysets-DUH8utQA.js";import"./Link-BDmdMXPj.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BiLata17.js";import"./Col-CX5Jty9d.js";import"./CardBase-CIttRBWl.js";import"./BackgroundImage-DUlZcbQf.js";import"./RouterLink-CejZIhFG.js";import"./Tag-D31w6nYF.js";import"./IconWrapper-C7LD_zSi.js";import"./ToggleArrow-JSDIOpCA.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
