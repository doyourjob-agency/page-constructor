import{R as t}from"./iframe-fjEQ7Wj6.js";import{y as f}from"./utils-rTyZyZ-k.js";import{B as o}from"./BasicCard--IKHUUPL.js";import{D as x}from"./Divider-CV99EH5p.js";import{T as u}from"./Title-D66skl-Y.js";import"./preload-helper-D6kgxu3v.js";import"./index-COO6vC3W.js";import"./keys-cY9FEgLj.js";import"./_baseKeys-ZOnKTBZ6.js";import"./url-QYEYQ60R.js";import"./index-1HWCW-Ra.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-CIvkeuX_.js";import"./blocks-CQ1x_jw0.js";import"./toString-CPB5M_cw.js";import"./isSymbol-CqbjmvvU.js";import"./Links-MIj08_RQ.js";import"./Link-CJF3yBSP.js";import"./BackLink-BbiH43cd.js";import"./useAnalytics-BE32j9j0.js";import"./Button-dkmrgG70.js";import"./common-3dRVf5TT.js";import"./Icon-BeLvkUG4.js";import"./EventBroker-DJPJEtxC.js";import"./FileLink-CauI8q9G.js";import"./url-C1DoDyoh.js";import"./Label-O2s77pbX.js";import"./Xmark-DuECLU-x.js";import"./HTML-lvkgWIjd.js";import"./ContentList-Cqry4UhV.js";import"./Image-CqvaqXXq.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BCe1Zkt2.js";import"./v4-Dv1xt2bl.js";import"./Buttons-Jw8Rd4ir.js";import"./Button-CjI9kJtU.js";import"./addComponentKeysets-C8E_VCe8.js";import"./Link-By-aaOAd.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CpEoQyA0.js";import"./Col-CApxySnm.js";import"./CardBase-DFw3F5lx.js";import"./BackgroundImage-BNm2qNN8.js";import"./RouterLink-V1lYPYOm.js";import"./Tag-Du7BSzxh.js";import"./IconWrapper-D-ZC3RTG.js";import"./ToggleArrow-DiN89YqB.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
