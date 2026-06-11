import{R as t}from"./iframe-dQddjcin.js";import{y as f}from"./utils-B0vDMe2g.js";import{B as o}from"./BasicCard-BvrG-kwO.js";import{D as x}from"./Divider-DD95B25p.js";import{T as u}from"./Title-BHwbxvOe.js";import"./preload-helper-D6kgxu3v.js";import"./index-DPxvgijB.js";import"./keys-BMISR8aM.js";import"./_baseKeys-CB3RaWPe.js";import"./url-BUHSEODk.js";import"./index-C5GHFGvm.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-44Ce0lo_.js";import"./blocks-CJGmXB2_.js";import"./toString-zJhJOFMD.js";import"./isSymbol-CR--2aDO.js";import"./Links-Qcky6SPU.js";import"./Link-xwC71L3O.js";import"./BackLink-DRxYOyIa.js";import"./useAnalytics-BtbF3hnh.js";import"./Button-2neIXyy3.js";import"./common-CgBRddnW.js";import"./Icon-DRkBpo-W.js";import"./EventBroker-DulAnk7L.js";import"./FileLink-NhTSC75k.js";import"./url-D3T9sqdS.js";import"./Label-Be7oi-R_.js";import"./Xmark-8UGtxT0R.js";import"./YFMWrapper-Cw7kNDhI.js";import"./HTML-CR0Zctce.js";import"./ContentList-B6XjX_GH.js";import"./Image-DY4WuIH5.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BtMxOpAJ.js";import"./Buttons-Syr8wGct.js";import"./Button-YGm-uF6e.js";import"./addComponentKeysets-DSaobyoQ.js";import"./Link-CUtvMjCf.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BAVxJmZ-.js";import"./Col-CWEgNZCx.js";import"./CardBase-YGW6KSvv.js";import"./BackgroundImage-xyEl-gxq.js";import"./RouterLink-BWOFfqcR.js";import"./Tag-BkZtpZr3.js";import"./IconWrapper-DbyXOgq2.js";import"./ToggleArrow-D0sfJgCJ.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
