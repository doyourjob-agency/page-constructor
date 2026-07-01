import{R as t}from"./iframe-Ci1W3M_E.js";import{y as f}from"./utils-C9MTIcon.js";import{B as o}from"./BasicCard-B0pxqUYN.js";import{D as x}from"./Divider-Pk2YKh0U.js";import{T as u}from"./Title-BJO1Nq2E.js";import"./preload-helper-D6kgxu3v.js";import"./index-Qz3RdjQ8.js";import"./keys-BeDP6KsN.js";import"./_baseKeys-Blnd8nJb.js";import"./url-b23cL_n5.js";import"./index-CVRsXvn0.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-DBYtOqXi.js";import"./blocks-zq7zLrZf.js";import"./toString-Cg-NK1-v.js";import"./isSymbol-DjtUrJZ1.js";import"./Links-DLMbJPD9.js";import"./Link-D3u0bdYN.js";import"./BackLink-fGOFyDRB.js";import"./useAnalytics-EkEtu7aJ.js";import"./Button-O7vYhn5_.js";import"./common-D5eXc-HH.js";import"./Icon-BSA_utVT.js";import"./EventBroker-Dhx7Xmw9.js";import"./FileLink-UDkkK8SF.js";import"./url-BPm0fwUz.js";import"./Label-Bkzo7CLy.js";import"./Xmark-CxQ0ifHY.js";import"./YFMWrapper-fB7gWwiE.js";import"./HTML-BnY65aI0.js";import"./ContentList-DMVyGnRe.js";import"./Image-DF6_iChW.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BQFlD0Xr.js";import"./Buttons-DxoqHdKY.js";import"./Button-B1BvUeGS.js";import"./addComponentKeysets-CgH7Ie8Y.js";import"./Link-CxmvUpZe.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CNxhcZp-.js";import"./Col-D6ieOOj5.js";import"./CardBase-Ck9Zktvw.js";import"./BackgroundImage-Cwc4sssO.js";import"./RouterLink-CprAxk8w.js";import"./Tag-KJLDHmmq.js";import"./IconWrapper-CxCDuKXb.js";import"./ToggleArrow-DjqQfUC6.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
