import{R as t}from"./iframe-Qk0bi9u_.js";import{y as f}from"./utils-CuxHQ4rt.js";import{B as o}from"./BasicCard-D6Kt2kkM.js";import{D as x}from"./Divider-DeftAuKH.js";import{T as u}from"./Title-B9qU94Uo.js";import"./preload-helper-D6kgxu3v.js";import"./index--LcOfL-t.js";import"./keys-JY40WRiU.js";import"./_baseKeys--R2zrNWY.js";import"./url-CISqcACk.js";import"./index-7_marraL.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-Cx0RkdVy.js";import"./blocks-Azht-eXV.js";import"./toString-DvasPI_6.js";import"./isSymbol-D5cf544v.js";import"./Links-DpOFOQ9r.js";import"./Link-F48nuOsP.js";import"./BackLink-D_cNCOvT.js";import"./useAnalytics-CKCbISTx.js";import"./Button-razP8hrS.js";import"./common-DwVmpGMI.js";import"./Icon-CyvuJrlX.js";import"./EventBroker-DGOheEmu.js";import"./FileLink-vmtWyVAa.js";import"./url-Ch-rZfwF.js";import"./Label-D_nszktx.js";import"./Xmark-VMN7gGdD.js";import"./HTML-CBWtlqIF.js";import"./ContentList-CXFEYPl7.js";import"./Image-1Bb78c1S.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-Cx-zEUV9.js";import"./Buttons-C7pV4Yuj.js";import"./Button-DpMMcddt.js";import"./addComponentKeysets-BX4hhqh-.js";import"./Link--xOazzov.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-n2xY2EZA.js";import"./Col-T-s3IfdO.js";import"./CardBase-BG-9MnuL.js";import"./BackgroundImage-BFya5Kf0.js";import"./RouterLink-YLiiFIFq.js";import"./Tag-Ct-cIzGS.js";import"./IconWrapper-DcpFU-Qp.js";import"./ToggleArrow-CG5uFcKI.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
