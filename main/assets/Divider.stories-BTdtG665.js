import{R as t}from"./iframe-HtBxhAfP.js";import{y as f}from"./utils-DzeCQxLv.js";import{B as o}from"./BasicCard-9PdyjsrX.js";import{D as x}from"./Divider-CSHA_aFE.js";import{T as u}from"./Title-Z2XR_VaH.js";import"./preload-helper-D6kgxu3v.js";import"./index-DbO9IcH_.js";import"./keys-DgrDMsl-.js";import"./_baseKeys-DO118Dvb.js";import"./url-u5JsFMP8.js";import"./index-Gk0W7YNd.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-BhrqacLI.js";import"./blocks-BYxtJ-A6.js";import"./toString-DJUGgtt7.js";import"./isSymbol-CygEfxrw.js";import"./Links-CCiq5Ug2.js";import"./Link-BKeeAtJ-.js";import"./BackLink-BE98aqMO.js";import"./useAnalytics-D8M_YzUJ.js";import"./Button-CGa2D3GF.js";import"./common-CUXP_g3i.js";import"./Icon-kDm7Fa3W.js";import"./EventBroker-BpCSLChJ.js";import"./FileLink-lBmQv9KM.js";import"./url-CAKJLv3h.js";import"./Label-CWgxI5E3.js";import"./Xmark-B5L-jDt9.js";import"./YFMWrapper-DxVyA5q6.js";import"./HTML-DLMb9lK1.js";import"./ContentList-DkoB472J.js";import"./Image-DDhiDrce.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CNH6UDGA.js";import"./Buttons-cMn0TpgS.js";import"./Button-BrsvGVOf.js";import"./addComponentKeysets-DACJMd80.js";import"./Link-Dnppzdy3.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-D3XI_2Pw.js";import"./Col-R-103xd0.js";import"./CardBase-BLfe67VC.js";import"./BackgroundImage-DF43igV1.js";import"./RouterLink-DlHWUHqg.js";import"./Tag-45Gb8quh.js";import"./IconWrapper-xKdIRG9s.js";import"./ToggleArrow-DUTwefkn.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
