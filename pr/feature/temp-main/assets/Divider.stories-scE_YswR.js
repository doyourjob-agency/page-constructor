import{R as t}from"./iframe-paKfeIQc.js";import{y as f}from"./utils-B1iJ04lz.js";import{B as o}from"./BasicCard-412CUO5B.js";import{D as x}from"./Divider-C_z3j2bs.js";import{T as u}from"./Title-DkHRhLuO.js";import"./preload-helper-D6kgxu3v.js";import"./index-CINfgFnU.js";import"./keys-BVtP6SPf.js";import"./_baseKeys-BC0acvg8.js";import"./url-zbQnFCaB.js";import"./index-DlbJd9Li.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-D40spUOx.js";import"./blocks-CNVa4jU5.js";import"./toString-DIJdlVXm.js";import"./isSymbol-BpaA6_y2.js";import"./Links-B0XznKjb.js";import"./Link-BuMKAshT.js";import"./BackLink-DCfiynbB.js";import"./useAnalytics-B2YgxzdI.js";import"./Button-BfkSXc0Z.js";import"./common-PDpyw-rG.js";import"./Icon-DL4iSP62.js";import"./EventBroker-0A9nbKvd.js";import"./FileLink-C7m8R5WD.js";import"./url-DxUwHJyG.js";import"./Label-CBQtqdrh.js";import"./Xmark-BpP4MKTX.js";import"./HTML-CPusqSH9.js";import"./ContentList-Cct60z0q.js";import"./Image-7uSdkSnC.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-svwhSa_m.js";import"./v4-Dv1xt2bl.js";import"./Buttons-ByTMgDAu.js";import"./Button-DLHoFDoW.js";import"./addComponentKeysets-Cjblu3aS.js";import"./Link-DBGK0cb4.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-D55Fa-s7.js";import"./Col-D3S9Stjj.js";import"./CardBase-DpTe_QyJ.js";import"./BackgroundImage-BrgotTUd.js";import"./RouterLink-YGWpjI4K.js";import"./Tag-BJjHX-Ut.js";import"./IconWrapper-ojBLqSxy.js";import"./ToggleArrow-BTsHQojF.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
