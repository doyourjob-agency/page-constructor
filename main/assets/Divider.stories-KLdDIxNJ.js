import{R as t}from"./iframe-BZ246gdO.js";import{y as f}from"./utils-cPhMi4c0.js";import{B as o}from"./BasicCard-DEQcRTSl.js";import{D as x}from"./Divider-DatHzjHB.js";import{T as u}from"./Title-B2lJlREq.js";import"./preload-helper-D6kgxu3v.js";import"./index-CICYGn6k.js";import"./keys-CyZI2PRi.js";import"./_baseKeys-CDqOtYts.js";import"./url-CPGqAVZE.js";import"./index-BBwjaVLb.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-C5sqXg4A.js";import"./blocks-jgHQ0EAU.js";import"./toString-DMBkAPbu.js";import"./isSymbol-DPwPuOn5.js";import"./Links-JGv8gF4z.js";import"./Link-CezSgAlJ.js";import"./BackLink-OAHyT6mB.js";import"./useAnalytics-BAh1CWqt.js";import"./Button-ChDTrKin.js";import"./common-DiwBEwTX.js";import"./Icon-CNnCUloQ.js";import"./EventBroker-BC5ruU2O.js";import"./FileLink-CKWHFP9y.js";import"./url-pIoATGUt.js";import"./Label-DfJSpEuj.js";import"./Xmark-BVAQx4oL.js";import"./HTML-DH1xIwsK.js";import"./ContentList-BB4k5rop.js";import"./Image-BOj-2B42.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-C4pOQqVK.js";import"./v4-Dv1xt2bl.js";import"./Buttons-gWSox031.js";import"./Button-BXArNup-.js";import"./addComponentKeysets-Bh93ftb1.js";import"./Link-RTPULA-w.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-0QBNZtOX.js";import"./Col-CwTjofzZ.js";import"./CardBase-kraLYl5m.js";import"./BackgroundImage-BorMeRBs.js";import"./RouterLink-BpxEtFgj.js";import"./Tag-CPavCfC6.js";import"./IconWrapper-vk1c9a70.js";import"./ToggleArrow-VuZ6w7sh.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
