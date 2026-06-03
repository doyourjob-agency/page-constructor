import{R as t}from"./iframe-Cnfr6uKb.js";import{y as f}from"./utils-DKSLjD8V.js";import{B as o}from"./BasicCard-Dbe83Qdb.js";import{D as x}from"./Divider-BgcRmzre.js";import{T as u}from"./Title-DHhk-Gqn.js";import"./preload-helper-D6kgxu3v.js";import"./index-DXnQQoVB.js";import"./keys-DsC8_r46.js";import"./_baseKeys-B7rbYawW.js";import"./url-CStw0lZj.js";import"./index-4ssz8r8M.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-B3jHiR2u.js";import"./Content-BAyQpPKz.js";import"./blocks-uFGAA88z.js";import"./toString-BeWGAuiL.js";import"./isSymbol-N4TyJKKU.js";import"./Links-CVIM21wP.js";import"./Link-xMIicfrP.js";import"./BackLink-BI6iavVP.js";import"./useAnalytics-Dh9tVdbK.js";import"./Button-Dq1j8JQ5.js";import"./common-BzXopfRW.js";import"./Icon-CLxaLNHu.js";import"./EventBroker-D7gNCM_7.js";import"./FileLink-mLRQsnv5.js";import"./url-ze7HsrKc.js";import"./Label-CvGTvFBH.js";import"./Xmark-BfJVBiHe.js";import"./YFMWrapper-202FPhhn.js";import"./HTML-BD_j2mrV.js";import"./ContentList-DK4E8JKq.js";import"./Image-DyvCLgbj.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DHbCTWrJ.js";import"./Buttons-DullpWN1.js";import"./Button-BwAi16ev.js";import"./addComponentKeysets-CWAHOVh0.js";import"./Link-CmQahAQN.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CKQGh1dT.js";import"./Col-C3hawy9M.js";import"./CardBase-DqOzataf.js";import"./BackgroundImage-BEyaUyzr.js";import"./RouterLink-DOmEyEUv.js";import"./Tag-cHx_kSxh.js";import"./IconWrapper-CxNdp8IW.js";import"./ToggleArrow-CY86ztXi.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
