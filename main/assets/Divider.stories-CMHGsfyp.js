import{R as t}from"./iframe-I3tyiJKx.js";import{y as f}from"./utils-DVFW92h8.js";import{B as o}from"./BasicCard-D2-AwPYq.js";import{D as x}from"./Divider-Bv4V48tY.js";import{T as u}from"./Title-CuVh3NIa.js";import"./preload-helper-D6kgxu3v.js";import"./index-CjEDp1pO.js";import"./keys-CX9Iztqq.js";import"./_baseKeys-CdktBav3.js";import"./url-BFKcq_RV.js";import"./index-BxWNQCh2.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-C8w9Ic_u.js";import"./blocks-DjTYsbdH.js";import"./toString-DKEJMhA4.js";import"./isSymbol-8K6wLCbj.js";import"./Links-BSj2sHNb.js";import"./Link-Dy5jIGR3.js";import"./BackLink-9lDcxnKH.js";import"./useAnalytics-cw9m-fpU.js";import"./Button-_k1j3SCb.js";import"./common-BF5KI--l.js";import"./Icon-CCr9RHnq.js";import"./EventBroker-DIuM_8ql.js";import"./FileLink-CHLLAinX.js";import"./url-C_JSgFMI.js";import"./Label-n-x5Mrb0.js";import"./Xmark-BwemmRZ6.js";import"./HTML-CkIm-LbG.js";import"./ContentList-CnUMBsWk.js";import"./Image-D79XEa2G.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-Dv6wCtd1.js";import"./v4-Dv1xt2bl.js";import"./Buttons-D1wSXJcH.js";import"./Button-babSaWB-.js";import"./addComponentKeysets-D3aSeXqm.js";import"./Link-DLdrt15t.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-Cvao6GZJ.js";import"./Col-Blr0wFE0.js";import"./CardBase-V8SNPrnr.js";import"./BackgroundImage-CS0VsmhD.js";import"./RouterLink-Czv2AjBg.js";import"./Tag-L1eVsulA.js";import"./IconWrapper-DEOlMPmR.js";import"./ToggleArrow-VxxCrvxg.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
