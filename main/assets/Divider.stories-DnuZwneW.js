import{R as t}from"./iframe-BvpR5nGO.js";import{y as f}from"./utils-BArKl7i5.js";import{B as o}from"./BasicCard-BkmaVaR9.js";import{D as x}from"./Divider-CXq2B4lJ.js";import{T as u}from"./Title-DOMDG7gh.js";import"./preload-helper-D6kgxu3v.js";import"./index-Uwpnf2d4.js";import"./keys-DeaPu5yC.js";import"./_baseKeys-BajYCruT.js";import"./url-C15IZiQZ.js";import"./index-49lIqzXv.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-B8e0Al9K.js";import"./blocks-HOy6X4vq.js";import"./toString-BqhQTrW0.js";import"./isSymbol-BvPP4w5M.js";import"./Links-BQN9G6pF.js";import"./Link-CfkWT8-d.js";import"./BackLink-z6Nkvapp.js";import"./useAnalytics-DAuFR3WB.js";import"./Button-BdGjl-Lo.js";import"./common-BSLgf93A.js";import"./Icon-D8xVba0-.js";import"./EventBroker-CJ0JOGEl.js";import"./FileLink-DLXxfxaf.js";import"./url-DrUj3m3O.js";import"./Label-BqR5CQFM.js";import"./Xmark-BiWXFeaQ.js";import"./YFMWrapper-BL5Vjwue.js";import"./HTML-C0lsqnjt.js";import"./ContentList-DBk2ER4C.js";import"./Image-CvtlPBWY.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-Ct3YSv4J.js";import"./Buttons-C12dNfiR.js";import"./Button-D3JTwCDG.js";import"./addComponentKeysets-Cf7cueov.js";import"./Link-BosCMcPS.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DB7vXjhm.js";import"./Col-DvBz-TD5.js";import"./CardBase-D6vFYFLY.js";import"./BackgroundImage-CYQtVNb1.js";import"./RouterLink-CM6hfYCP.js";import"./Tag-Y3MDah7Q.js";import"./IconWrapper-CAHgm4JD.js";import"./ToggleArrow-woDyCe0-.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
