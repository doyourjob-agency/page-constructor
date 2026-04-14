import{R as t}from"./iframe-CbyszA_L.js";import{y as f}from"./utils-BED1vjQK.js";import{B as o}from"./BasicCard-eWLPoBpj.js";import{D as x}from"./Divider-Ry2tBcRK.js";import{T as u}from"./Title-nVINxJu0.js";import"./preload-helper-D6kgxu3v.js";import"./index-TQcAunj0.js";import"./keys-D84E5xXn.js";import"./_baseKeys-BXWoriMX.js";import"./url-a5_amzh9.js";import"./index-Bpc3zENx.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-9dm35KzX.js";import"./blocks-b_e-M8bR.js";import"./toString-DT1htB_S.js";import"./isSymbol-C1O343fb.js";import"./Links-DExXYEfd.js";import"./Link-CkDHHGAb.js";import"./BackLink-DINcAEgB.js";import"./useAnalytics-Bsx_BuM5.js";import"./Button-D2GAG0LM.js";import"./common-BuIHHvlp.js";import"./Icon-BjOA7wY6.js";import"./EventBroker-BvE1xZ3-.js";import"./FileLink-DjQaObNI.js";import"./url-CUbUWSX6.js";import"./Label-CSHeSoeh.js";import"./Xmark-tGrD37LT.js";import"./HTML-D0bBT5Xf.js";import"./ContentList-BUrXzO5M.js";import"./Image-tMlt4_HJ.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BtMdy-dA.js";import"./v4-Dv1xt2bl.js";import"./Buttons-znM6QN4P.js";import"./Button-D3rV9eMM.js";import"./addComponentKeysets-CzK9JQGX.js";import"./Link-Ca9mlYZs.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DnmAqsl9.js";import"./Col-BqbGm684.js";import"./CardBase-CYOYFSgS.js";import"./BackgroundImage-DX84he-l.js";import"./RouterLink-ByU0AVIT.js";import"./Tag-B5S2e8gK.js";import"./IconWrapper-BGWYrH_K.js";import"./ToggleArrow-BqUek9QC.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
