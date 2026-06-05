import{R as t}from"./iframe-CXxJvtTz.js";import{y as f}from"./utils-DDdmoPfW.js";import{B as o}from"./BasicCard-DMYcpave.js";import{D as x}from"./Divider-I046VzKK.js";import{T as u}from"./Title-DTXBK-tB.js";import"./preload-helper-D6kgxu3v.js";import"./index-Cgn4cspz.js";import"./keys-BLayhUm6.js";import"./_baseKeys-D35Dvuja.js";import"./url-B23Z0Ips.js";import"./index-DbypFoYs.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-ExMLTKU-.js";import"./blocks-CRdqRNxf.js";import"./toString-C2INqEdm.js";import"./isSymbol-B0O7VU9-.js";import"./Links-CvPKuZxq.js";import"./Link-Di2QtGu4.js";import"./BackLink-DzsFX_Vu.js";import"./useAnalytics-CXvp12oN.js";import"./Button-CuywJVmJ.js";import"./common--sSHvL1c.js";import"./Icon-CMVZfvV1.js";import"./EventBroker-DYzr8fsu.js";import"./FileLink-Crtr9SZ5.js";import"./url-DPAYVdjD.js";import"./Label-wDp5bVXn.js";import"./Xmark-B3pDhWbr.js";import"./YFMWrapper-D9MFR3G2.js";import"./HTML-CdRBr3JU.js";import"./ContentList-CSg_7BDf.js";import"./Image-CbdVfV61.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-Bhs8IJxc.js";import"./Buttons-Cr2gt6uH.js";import"./Button-Cbnx8X_g.js";import"./addComponentKeysets-C-qEjoB1.js";import"./Link-CAZKSDo6.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-hkyRb0mb.js";import"./Col-Czd4xUnT.js";import"./CardBase-C6snsxLG.js";import"./BackgroundImage-BYhulfPt.js";import"./RouterLink-BRx6tzeg.js";import"./Tag-1AHfsuCC.js";import"./IconWrapper-Blb8D4aM.js";import"./ToggleArrow-C1GTSXX2.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
