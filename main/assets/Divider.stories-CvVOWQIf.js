import{R as t}from"./iframe-D_yjJTU1.js";import{y as f}from"./utils-C6IMev5w.js";import{B as o}from"./BasicCard-DjlVvisC.js";import{D as x}from"./Divider-BtyYjrcX.js";import{T as u}from"./Title-C9ZII3ks.js";import"./preload-helper-D6kgxu3v.js";import"./index-BMrK8z4Y.js";import"./keys-COc9UvGz.js";import"./_baseKeys-CYKnwvOV.js";import"./url-0BwJ8o4q.js";import"./index-CFqVAUrl.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-B3jHiR2u.js";import"./Content-DfAj3luP.js";import"./blocks-DmcsUdZ1.js";import"./toString-BrTI0Xt-.js";import"./isSymbol-Bokukyrj.js";import"./Links-DWKeG6PQ.js";import"./Link-C1b4wKyf.js";import"./BackLink-x4bjao3U.js";import"./useAnalytics-BgSawW1a.js";import"./Button-CZL9bZuc.js";import"./common-D6lF0Ik-.js";import"./Icon-DF2K0FAo.js";import"./EventBroker-rhzQPklS.js";import"./FileLink-D7d1iCXL.js";import"./url--j_278g6.js";import"./Label-CgB5Laey.js";import"./Xmark-CLq-TbPQ.js";import"./YFMWrapper-xYZMXiy8.js";import"./HTML-jNC0f8Dr.js";import"./ContentList-x3zPLTGk.js";import"./Image-DFRImKFg.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-Fxz3JAJQ.js";import"./Buttons-BHlGwnxY.js";import"./Button-DWqS10P9.js";import"./addComponentKeysets-B39Yoo6x.js";import"./Link-DTm3vkjn.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-IQR5JPfN.js";import"./Col-DMipuCxF.js";import"./CardBase-Cyz-L4cP.js";import"./BackgroundImage-DTbyz7hM.js";import"./RouterLink-2g8rzI31.js";import"./Tag-CaxTdEx4.js";import"./IconWrapper-CR-kNAFa.js";import"./ToggleArrow-CkTcIllx.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
