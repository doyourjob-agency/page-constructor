import{R as t}from"./iframe-CqkpC1LX.js";import{y as f}from"./utils-DRIy1zNA.js";import{B as o}from"./BasicCard-Drj_3-_G.js";import{D as x}from"./Divider-CnZq7DxH.js";import{T as u}from"./Title-DGfV2k82.js";import"./preload-helper-D6kgxu3v.js";import"./index-ODVuqjrY.js";import"./keys-DvRuLQm7.js";import"./_baseKeys-D0MYO_s1.js";import"./url-NvnLGxVl.js";import"./index-C15aH0jl.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-Ce7T-uBT.js";import"./blocks-Cl5cwocj.js";import"./toString-Cv215kEf.js";import"./isSymbol-BTV6iehs.js";import"./Links-C0XWskBQ.js";import"./Link-Bhmq5WR-.js";import"./BackLink-BoKbTFFX.js";import"./useAnalytics-rSASPmk5.js";import"./Button-DK6FtGE8.js";import"./common-8t7SnaZT.js";import"./Icon-D5qtOGvr.js";import"./EventBroker-CLFC-r5J.js";import"./FileLink-CEUf3Xgj.js";import"./url-BxsoRtNN.js";import"./Label-CdbdHbOC.js";import"./Xmark-CN_AP7Jy.js";import"./YFMWrapper-G2CJ3EmU.js";import"./HTML-CvXQPlBI.js";import"./ContentList-BasQw6my.js";import"./Image-Y_PC4tdi.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme--Z9uAmdm.js";import"./Buttons-BUCrKyPT.js";import"./Button-Aees5m5T.js";import"./addComponentKeysets-w9e3bGV6.js";import"./Link-BunOvNSB.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CBfaTZB6.js";import"./Col-BqR2oT_B.js";import"./CardBase-BjJ5wRfE.js";import"./BackgroundImage-ChQCNal4.js";import"./RouterLink-DGFyr2vc.js";import"./Tag-D4fIKg2_.js";import"./IconWrapper-D6eLwZkG.js";import"./ToggleArrow-44b-ctGu.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
