import{R as t}from"./iframe-CNRzk_eE.js";import{y as f}from"./utils-BHsBi7UO.js";import{B as o}from"./BasicCard-BTIEE6_w.js";import{D as x}from"./Divider-DloZb56n.js";import{T as u}from"./Title-BVg3tZSb.js";import"./preload-helper-D6kgxu3v.js";import"./index-LOVyWKz6.js";import"./keys-B-T5TE7l.js";import"./_baseKeys-Ccrpj7Xl.js";import"./url-BmHV6oFW.js";import"./index-B1rsrPim.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-B3jHiR2u.js";import"./Content-IgHl0pGY.js";import"./blocks-CBKspLY7.js";import"./toString-mBVJ7L7R.js";import"./isSymbol-DSFPOvc8.js";import"./Links-CN6LSwRF.js";import"./Link-oflEb8r7.js";import"./BackLink-DBlN9nwB.js";import"./useAnalytics-DeztB-4o.js";import"./Button-D32-Crw6.js";import"./common-xna9YAxC.js";import"./Icon-C_Irhy_w.js";import"./EventBroker-CBoNeK42.js";import"./FileLink-DQMvOgwl.js";import"./url-BdyIjYfI.js";import"./Label-BizZmSOI.js";import"./Xmark-Dmnb0xI2.js";import"./YFMWrapper-Ck7E5A-8.js";import"./HTML-B-Rol6ma.js";import"./ContentList-B13rWLwU.js";import"./Image-DyOyWBIT.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-B6h9ffHS.js";import"./Buttons-DwRSZDE7.js";import"./Button-zUKW4cw-.js";import"./addComponentKeysets-Bvupj45C.js";import"./Link-BUXmooCN.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BAPQ9CeO.js";import"./Col-D9ieHiTF.js";import"./CardBase-DAhpVBfK.js";import"./BackgroundImage-PTq3pgne.js";import"./RouterLink-D6POIBMf.js";import"./Tag-Dk34nKua.js";import"./IconWrapper-BraE7koo.js";import"./ToggleArrow-CUKumv8h.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
