import{R as t}from"./iframe-BZh8_g8m.js";import{y as f}from"./utils-DatdhRYm.js";import{B as o}from"./BasicCard-C4dud0Wo.js";import{D as x}from"./Divider-C6kwE_JP.js";import{T as u}from"./Title-M77qFZe1.js";import"./preload-helper-D6kgxu3v.js";import"./index-CRfl8q6O.js";import"./keys-BRAIVqSI.js";import"./_baseKeys-BxsPpwQG.js";import"./url-BR5cMMU-.js";import"./index-D37oyPdx.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-B3jHiR2u.js";import"./Content-D7LdnQgj.js";import"./blocks-DSyFcrXp.js";import"./toString-OP9JN9nA.js";import"./isSymbol-DMoqVt39.js";import"./Links-BYBxDGW_.js";import"./Link-CizVS8r8.js";import"./BackLink-BAEG5ZAC.js";import"./useAnalytics-D3ENjP9k.js";import"./Button-HBaIqwnq.js";import"./common-D7ADRmBq.js";import"./Icon-jrzmW_8R.js";import"./EventBroker-C8S-FhwS.js";import"./FileLink-CAhab41m.js";import"./url-TdD6H0aZ.js";import"./Label-5wZY8Lpg.js";import"./Xmark-BxjmYBSk.js";import"./YFMWrapper-DwE26SRj.js";import"./HTML-CinAB8gh.js";import"./ContentList-B62HpdUp.js";import"./Image-CrL4SJok.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CeKUv5oc.js";import"./Buttons-Dnz8DX1m.js";import"./Button-ChaYDdDH.js";import"./addComponentKeysets-CnbYkzjq.js";import"./Link-LAJz43y6.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-C1RVYDw6.js";import"./Col-CKcokPOq.js";import"./CardBase-DxJZ0h-c.js";import"./BackgroundImage-C06dCt0K.js";import"./RouterLink-D_AA2vFY.js";import"./Tag-DHNpYqGn.js";import"./IconWrapper-HAij8C-n.js";import"./ToggleArrow-D5ENOwaj.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
