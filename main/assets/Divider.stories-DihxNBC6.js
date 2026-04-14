import{R as t}from"./iframe-DOvwOIks.js";import{y as f}from"./utils-_zLW8FoQ.js";import{B as o}from"./BasicCard-B8jwiNsv.js";import{D as x}from"./Divider-MXPbnj1x.js";import{T as u}from"./Title-BAUeQO-u.js";import"./preload-helper-D6kgxu3v.js";import"./index-Cj2M6JBn.js";import"./keys-Bo5OBsDx.js";import"./_baseKeys-Day6X6Ge.js";import"./url-DSaSx0kd.js";import"./index-BN5g6FEh.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-DP8Qpgy3.js";import"./blocks-DP0yjL_w.js";import"./toString-CxxRC7CF.js";import"./isSymbol-CfCCmUej.js";import"./Links-Datj2AQu.js";import"./Link-Bb7q8BPb.js";import"./BackLink-BmjRuqLA.js";import"./useAnalytics-CmvdIQUb.js";import"./Button-QCSl7Oqp.js";import"./common-Dxn_dUFv.js";import"./Icon-n_5B41C0.js";import"./EventBroker-BnI2f5aU.js";import"./FileLink-BzhcnKGu.js";import"./url-Cptb8_k9.js";import"./Label-aIPc8Oje.js";import"./Xmark-ZYF64Lmh.js";import"./HTML-MbvwfF4l.js";import"./ContentList-BlrTzS_f.js";import"./Image-cWSUzeEi.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BO0oGync.js";import"./v4-Dv1xt2bl.js";import"./Buttons-Be-aa-U2.js";import"./Button-BW04loUd.js";import"./addComponentKeysets-XbVZB9-5.js";import"./Link-DWfS9i7X.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-tkjWAKKV.js";import"./Col-BXeepM18.js";import"./CardBase-cJJZ_IFb.js";import"./BackgroundImage-CjjdYwwp.js";import"./RouterLink-CTgNPwDp.js";import"./Tag-BH7cGKTN.js";import"./IconWrapper-v8k7hz1o.js";import"./ToggleArrow-DHBE0QKN.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
