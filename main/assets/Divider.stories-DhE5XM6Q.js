import{R as t}from"./iframe-C3KBV-Nf.js";import{y as f}from"./utils-ChiDYBJV.js";import{B as o}from"./BasicCard-CKcll_dn.js";import{D as x}from"./Divider-DEJyPGla.js";import{T as u}from"./Title-BnJGZuxN.js";import"./preload-helper-D6kgxu3v.js";import"./index-CEJk65pG.js";import"./keys-aIFv88E3.js";import"./_baseKeys-BSb_NiQL.js";import"./url-CIZaKU-L.js";import"./index-BD8Na1gE.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-DZw0dAVh.js";import"./blocks-BJkMkU3p.js";import"./toString-C4QCOoIs.js";import"./isSymbol--UlOZOUA.js";import"./Links-DN7FDBSl.js";import"./Link-DetU2UO-.js";import"./BackLink-CbynJQIU.js";import"./useAnalytics-Yx1I2lEN.js";import"./Button-evG3oOhf.js";import"./common-DCsA-OQl.js";import"./Icon-bfC6HXIy.js";import"./EventBroker-CDBMoaId.js";import"./FileLink-BOU7jagi.js";import"./url-gqiyEx6F.js";import"./Label-CjPU9hJZ.js";import"./Xmark-CTh8eyBf.js";import"./YFMWrapper-D6r_jiqy.js";import"./HTML-CItQ2kzO.js";import"./ContentList-BW4Izjka.js";import"./Image-BfSCW-Ku.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CQ7C2T_z.js";import"./Buttons-CRdn54DN.js";import"./Button-iluzjRG2.js";import"./addComponentKeysets-uxD0dIYN.js";import"./Link-JSrk7zKd.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CZwsp9RR.js";import"./Col-Doo_v_Qz.js";import"./CardBase-B-4tJvZV.js";import"./BackgroundImage-BTZnp3yV.js";import"./RouterLink-Cg4gAhH8.js";import"./Tag-DeGXy2Qh.js";import"./IconWrapper-Da8vrsvm.js";import"./ToggleArrow-kvQa6tC8.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
