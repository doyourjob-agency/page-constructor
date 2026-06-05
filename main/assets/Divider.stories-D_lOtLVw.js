import{R as t}from"./iframe-BhZI1xBj.js";import{y as f}from"./utils-CxSSHIki.js";import{B as o}from"./BasicCard-DqkvmyD7.js";import{D as x}from"./Divider-BxT6mCDW.js";import{T as u}from"./Title-Drcy7ovG.js";import"./preload-helper-D6kgxu3v.js";import"./index-BVTgAbNG.js";import"./keys-DwWgxTSr.js";import"./_baseKeys-CzJ19F6q.js";import"./url-B1mSWcmF.js";import"./index-BRl-vm7l.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-3_l94PZy.js";import"./blocks-BfFNJFeg.js";import"./toString-DrrN50wM.js";import"./isSymbol-Do_x8x3G.js";import"./Links-BPSq7bJh.js";import"./Link-COqhusNp.js";import"./BackLink-DhCi8fa-.js";import"./useAnalytics-BqeXP9_2.js";import"./Button-D7HoC6RD.js";import"./common-DBe4If6T.js";import"./Icon-BABvrsgs.js";import"./EventBroker-CX1lZzRx.js";import"./FileLink-C26AKxz7.js";import"./url-Ceq7-fIA.js";import"./Label-BsfPYrTb.js";import"./Xmark-Bt_1h_uv.js";import"./YFMWrapper-B5KJi4XJ.js";import"./HTML-DrbFCZzc.js";import"./ContentList-D805g2LF.js";import"./Image-DByl6MMs.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CMWslU28.js";import"./Buttons-CiwG-X8R.js";import"./Button-B1CahmU9.js";import"./addComponentKeysets-Bb7409bI.js";import"./Link-B7eikjfp.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CSdVpuxG.js";import"./Col-CrjHKUSx.js";import"./CardBase-rnQSvl3s.js";import"./BackgroundImage-Cgbf1KUI.js";import"./RouterLink-CzDOzfxs.js";import"./Tag-CQpZu0fx.js";import"./IconWrapper-CcKwSaHc.js";import"./ToggleArrow-DZU5i-8M.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
