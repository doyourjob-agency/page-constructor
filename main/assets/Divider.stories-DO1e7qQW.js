import{R as t}from"./iframe-g6lj5ymj.js";import{y as f}from"./utils-CP1-9Vkz.js";import{B as o}from"./BasicCard-DomXHDbR.js";import{D as x}from"./Divider-BuocB_A_.js";import{T as u}from"./Title-OC9cXH3S.js";import"./preload-helper-D6kgxu3v.js";import"./index-DuS5sVTs.js";import"./keys-C7YIR98_.js";import"./_baseKeys-DGtaMGVU.js";import"./url-D4G9tZ4g.js";import"./index-BsEVbB-h.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-dIjB1hiG.js";import"./blocks-B_0gGNqh.js";import"./toString-zCMzjOY_.js";import"./isSymbol-Duism_JD.js";import"./Links-CN5UKZwy.js";import"./Link-DWDAkjZi.js";import"./BackLink-Q62V17nH.js";import"./useAnalytics-DUyUVi-F.js";import"./Button-BjtbFs43.js";import"./common-DXfQAjom.js";import"./Icon-CY3QH3ad.js";import"./EventBroker-CmHx2isl.js";import"./FileLink-Cf7-hYPs.js";import"./url-BN_wN1Je.js";import"./Label-J2fZEffh.js";import"./Xmark-Bc7Md3s2.js";import"./YFMWrapper-BV6AHhl6.js";import"./HTML-C9zKjSv8.js";import"./ContentList-Bh6EWTnG.js";import"./Image-CyEs6k1E.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DSq-E2Mc.js";import"./Buttons-mzWmAcWM.js";import"./Button-B0VCcBEm.js";import"./addComponentKeysets-DS3bibS7.js";import"./Link-UQQS8-yJ.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CZUWC5cF.js";import"./Col-DHWtBfeo.js";import"./CardBase-C_K_7ov4.js";import"./BackgroundImage-Taw9fzle.js";import"./RouterLink-BMxChZfF.js";import"./Tag-BUOO9KKG.js";import"./IconWrapper-C1WF3omH.js";import"./ToggleArrow-CkU3xHYt.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
