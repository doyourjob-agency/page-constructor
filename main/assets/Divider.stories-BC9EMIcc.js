import{R as t}from"./iframe-C4YhzPVu.js";import{y as f}from"./utils-B-CGZCtK.js";import{B as o}from"./BasicCard-DmQuxviV.js";import{D as x}from"./Divider-C6F2OS8d.js";import{T as u}from"./Title-BTF7uLqS.js";import"./preload-helper-D6kgxu3v.js";import"./index-DbmAx58_.js";import"./keys-BQcFi33r.js";import"./_baseKeys-Br26AAiw.js";import"./url-D9eMysLB.js";import"./index-DtqlITe9.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-C6rmDeXw.js";import"./blocks-2Xr60Nyp.js";import"./toString-Bv_K4ft_.js";import"./isSymbol-CMAfI_OG.js";import"./Links-V3Z3VOZJ.js";import"./Link-CeYzaORm.js";import"./BackLink-D0UR1w95.js";import"./useAnalytics-B0QWTxDG.js";import"./Button-CBGB0IeW.js";import"./common-CM-qg5Kb.js";import"./Icon-CZ1GbcwR.js";import"./EventBroker-D4696cdq.js";import"./FileLink-COSTBw-6.js";import"./url-CANLMCea.js";import"./Label-zWCNqQ2w.js";import"./Xmark-BzWXKARh.js";import"./HTML-CO4TA6sr.js";import"./ContentList-CSuPIzxh.js";import"./Image-UAg0J-Yu.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-9tkk_r_F.js";import"./v4-Dv1xt2bl.js";import"./Buttons-O6orBKNI.js";import"./Button-OcjsL7iQ.js";import"./addComponentKeysets-CMshH6fM.js";import"./Link-G1Lk7aTF.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CkxQKY8Q.js";import"./Col-DAWq2gdS.js";import"./CardBase-FNYuFsAt.js";import"./BackgroundImage-g6ksmVPL.js";import"./RouterLink-Ba00Rpfz.js";import"./Tag-Dh-TE84m.js";import"./IconWrapper-Bc02BAP0.js";import"./ToggleArrow-B1Vjxnhx.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
