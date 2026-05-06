import{R as t}from"./iframe-CIWW3WNs.js";import{y as f}from"./utils-DmPHTPlD.js";import{B as o}from"./BasicCard-BQervpaU.js";import{D as x}from"./Divider-B-lgcOz-.js";import{T as u}from"./Title-DYdTMSRN.js";import"./preload-helper-D6kgxu3v.js";import"./index-CkDJ_23H.js";import"./keys-Bb2Cx78k.js";import"./_baseKeys-3mCNDqrv.js";import"./url-BSUgGxTW.js";import"./index-ZILQk-b1.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-D-x-5Dnd.js";import"./blocks-CMwhZtmU.js";import"./toString-DB-u-ckt.js";import"./isSymbol-a926yi1q.js";import"./Links-UIEfY4wk.js";import"./Link-m891cq4q.js";import"./BackLink-DFagwQiB.js";import"./useAnalytics-D8RDBL9a.js";import"./Button-BCj9-TbD.js";import"./common-CodClyQt.js";import"./Icon-CorLdu85.js";import"./EventBroker-CurogUEa.js";import"./FileLink-DKY7-qPq.js";import"./url-4Aa6AnwZ.js";import"./Label-DaP2aiV0.js";import"./Xmark-D4DrIACC.js";import"./HTML-shJpCJ2V.js";import"./ContentList-CQVGhTfC.js";import"./Image-D-YMTdx_.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-Di4VaTXP.js";import"./Buttons-CddxBP5e.js";import"./Button-BK39jFIa.js";import"./addComponentKeysets-BI2ILOUU.js";import"./Link-CpTuk5Ea.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-Dlr2WfGC.js";import"./Col-CZQN2M46.js";import"./CardBase-DNGSfXOM.js";import"./BackgroundImage-XtH6JJdC.js";import"./RouterLink-D-I4T_35.js";import"./Tag-Dg3ifoBa.js";import"./IconWrapper-Dki8avvg.js";import"./ToggleArrow-C03gPyjm.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
    </div>`,...(c=(d=m.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const ft=["Default","Sizes"];export{r as Default,m as Sizes,ft as __namedExportsOrder,vt as default};
