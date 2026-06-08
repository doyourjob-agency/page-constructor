import{R as t}from"./iframe-CPa59UIb.js";import{y as f}from"./utils-CbhKbI37.js";import{B as o}from"./BasicCard-Dsn1xZMa.js";import{D as x}from"./Divider-BK0JIlwq.js";import{T as u}from"./Title-eeJ1QRh-.js";import"./preload-helper-D6kgxu3v.js";import"./index-DsFwE9VV.js";import"./keys-Dg4Ik4T3.js";import"./_baseKeys-BuGFLMm7.js";import"./url-5RbqlcWV.js";import"./index-DEI_uBGi.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-2plgqk-N.js";import"./blocks-BOBhSePV.js";import"./toString-Dr_s7-E0.js";import"./isSymbol-BRpZLX_i.js";import"./Links-BUp4RemT.js";import"./Link-DWoVWFSE.js";import"./BackLink-CHglp1Xh.js";import"./useAnalytics-D2kY00gV.js";import"./Button-DGQL0mqR.js";import"./common-DsaFjRfJ.js";import"./Icon-B38bNCPP.js";import"./EventBroker-BS2Iw9zr.js";import"./FileLink-CWQsuufr.js";import"./url-DT_oaUJO.js";import"./Label-BXmCt_TM.js";import"./Xmark-CrCzBXZF.js";import"./YFMWrapper-BIRemHPL.js";import"./HTML-DsebOwTk.js";import"./ContentList-BhP76IEW.js";import"./Image-FHdo7YWv.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BwAluCGe.js";import"./Buttons-CXTYQ0yY.js";import"./Button-DeYnI9FH.js";import"./addComponentKeysets-DRdcIahg.js";import"./Link-CBTqR7qL.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DnhSsBCv.js";import"./Col-C9PlBW7h.js";import"./CardBase-BJ2xD_QY.js";import"./BackgroundImage-ClkxZd4E.js";import"./RouterLink-_YIl3k2A.js";import"./Tag-BKOPS1me.js";import"./IconWrapper-Dl64Lm5z.js";import"./ToggleArrow-DLfbOV6V.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
