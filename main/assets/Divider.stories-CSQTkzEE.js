import{R as t}from"./iframe-BY9araTS.js";import{y as f}from"./utils-CvHCqmAM.js";import{B as o}from"./BasicCard-I2itU_Y6.js";import{D as x}from"./Divider-C28gzirK.js";import{T as u}from"./Title-B396z5v_.js";import"./preload-helper-D6kgxu3v.js";import"./index-D1fJXSop.js";import"./keys-Do_VHmWv.js";import"./_baseKeys-DSUiSOL1.js";import"./url-C5G05fSk.js";import"./index-B2g1qUWB.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-B4nSOD6s.js";import"./blocks-CIXvYPtP.js";import"./toString-BzfyxIYz.js";import"./isSymbol-BlQkfzTd.js";import"./Links-N0LRv7yr.js";import"./Link-OvzTuz50.js";import"./BackLink-j4yP9pTV.js";import"./useAnalytics-BgMN9-l0.js";import"./Button-CBTS5G8t.js";import"./common-Cv5J_B_o.js";import"./Icon-OjXOZMUV.js";import"./EventBroker-Cu0HmKaK.js";import"./FileLink-cAAGp0KY.js";import"./url-DQuTBOIm.js";import"./Label-i8vgTKjo.js";import"./Xmark-BBqC67Z5.js";import"./YFMWrapper-m8-zWTBM.js";import"./HTML-BHUma6q8.js";import"./ContentList-BdKYVjLt.js";import"./Image-D4L1LjYl.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DQ_PLTGC.js";import"./Buttons-DA-SkNvp.js";import"./Button-CRlZ9TLg.js";import"./addComponentKeysets-DYiNhJFb.js";import"./Link-CQb81JG2.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-Bjl5mOc6.js";import"./Col-m278r6Ne.js";import"./CardBase-D9Y0E9e4.js";import"./BackgroundImage-jJ-NJB3F.js";import"./RouterLink-BDrZpd6o.js";import"./Tag-aVHFxt5I.js";import"./IconWrapper-CP1IXAZs.js";import"./ToggleArrow-B9OuRLAg.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
