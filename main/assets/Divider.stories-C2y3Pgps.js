import{R as t}from"./iframe-BtXJ7g-D.js";import{y as f}from"./utils-CgPKv2mH.js";import{B as o}from"./BasicCard-CHO_fitx.js";import{D as x}from"./Divider-DOJY-JzV.js";import{T as u}from"./Title-Cm1Sk-7-.js";import"./preload-helper-D6kgxu3v.js";import"./index-CB5ZxjZK.js";import"./keys-DHC7gnCm.js";import"./_baseKeys-CDTGYQZv.js";import"./url-Cl2JxNRr.js";import"./index-ChthgCXc.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-BSGqsD9t.js";import"./blocks-CyGJtnnj.js";import"./toString-B-UcdHD-.js";import"./isSymbol-DoG3GhDz.js";import"./Links-mCQsqb4m.js";import"./Link-Dgfw780f.js";import"./BackLink-B3AOtfsZ.js";import"./useAnalytics-C4XVS73o.js";import"./Button-DQpg-aM4.js";import"./common-CuB9SUK0.js";import"./Icon-BsO_lkrA.js";import"./EventBroker-ZQ5lF2c2.js";import"./FileLink-CydWmOGK.js";import"./url-BWNsvAaJ.js";import"./Label-BLyVI_Dd.js";import"./Xmark-BMuvs1gx.js";import"./YFMWrapper-Wpww_Kvi.js";import"./HTML-tsKkxjHV.js";import"./ContentList-DeD_vjyI.js";import"./Image-B54PSl0e.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-B_tQ0dqm.js";import"./Buttons-B1rGj0sd.js";import"./Button-C0-PZJpY.js";import"./addComponentKeysets-u4WCKkr1.js";import"./Link-BaeIT0IM.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DoFNJ69B.js";import"./Col-BktQ5Y_p.js";import"./CardBase-iz-0Z9Gq.js";import"./BackgroundImage-DSaZ5vKe.js";import"./RouterLink-B4AM6gLZ.js";import"./Tag-CixzyKUz.js";import"./IconWrapper-DB_2epRF.js";import"./ToggleArrow-B10b3jWF.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
