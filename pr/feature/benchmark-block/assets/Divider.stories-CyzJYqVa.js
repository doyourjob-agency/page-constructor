import{R as t}from"./iframe-BOgteeD7.js";import{y as f}from"./utils-DDnN3_al.js";import{B as o}from"./BasicCard-DGGfWbFY.js";import{D as x}from"./Divider-DLHfln4w.js";import{T as u}from"./Title-C8UVw3zZ.js";import"./preload-helper-D6kgxu3v.js";import"./index-Cz0iS51_.js";import"./keys-BwAlsiB9.js";import"./_baseKeys-MB0qE9ja.js";import"./url-DlFJASTu.js";import"./index-Bz0Xvnaa.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-DPk8C6Kd.js";import"./blocks-BzHzo3zA.js";import"./toString-CkaP2chB.js";import"./isSymbol-B3le0KZ7.js";import"./Links-B6vcF0hY.js";import"./Link-CfPE6Rq6.js";import"./BackLink-B1UQOgYv.js";import"./useAnalytics-B9aIWrYR.js";import"./Button-hfovXKfR.js";import"./common-DuG7EHQR.js";import"./Icon-BlCt6nNY.js";import"./EventBroker-L8MJFo7b.js";import"./FileLink-C1B1bCns.js";import"./url-CTocodh6.js";import"./Label-CyCzTHun.js";import"./Xmark-BunrS6AA.js";import"./HTML-BVwKVW21.js";import"./ContentList-CKBb0RRt.js";import"./Image-B_TcGPDd.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-Dj9kmXUC.js";import"./v4-Dv1xt2bl.js";import"./Buttons-CiVi1l6b.js";import"./Button-_viAHMHZ.js";import"./addComponentKeysets-C4re6pev.js";import"./Link-Clxfd124.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-C0bMSdsY.js";import"./Col-Jq845TNO.js";import"./CardBase-DXUgr5Hp.js";import"./BackgroundImage-MCk7-rSK.js";import"./RouterLink-DrgVH0xT.js";import"./Tag-CMYKbLhm.js";import"./IconWrapper-Cq2Cm2q_.js";import"./ToggleArrow-Cnto5opz.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
