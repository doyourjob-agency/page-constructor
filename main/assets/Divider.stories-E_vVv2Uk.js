import{R as t}from"./iframe-BWiF0MgZ.js";import{y as f}from"./utils-BOSafDTV.js";import{B as o}from"./BasicCard-WgyeeWt5.js";import{D as x}from"./Divider-DpdIfKlY.js";import{T as u}from"./Title--nCTQ-Ym.js";import"./preload-helper-D6kgxu3v.js";import"./index-BMUwMZZx.js";import"./keys-DK8cGSyt.js";import"./_baseKeys-BcdsBWH3.js";import"./url-DUyJx_GZ.js";import"./index-QgYo_cQK.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-rIWK3HKn.js";import"./blocks-BC-PyB2B.js";import"./toString-CQHGnuh4.js";import"./isSymbol-CXd_3pwk.js";import"./Links-BKy8J1ym.js";import"./Link-Dntyz8rr.js";import"./BackLink-nObP7Lkv.js";import"./useAnalytics-C-7v5EF6.js";import"./Button-DHt88WpX.js";import"./common-CkUi9ado.js";import"./Icon-_zrlonur.js";import"./EventBroker-RUR7GKvx.js";import"./FileLink-CtzcXMxQ.js";import"./url-aJgTb2Zj.js";import"./Label-CxyMoIkQ.js";import"./Xmark-6bH6AOsg.js";import"./YFMWrapper-C5iOEvdc.js";import"./HTML-DwP5oqjX.js";import"./ContentList-CA3AMsxW.js";import"./Image-DkxSp_JB.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DiI_1Ont.js";import"./Buttons-deHYfFxu.js";import"./Button-DrWJvmV0.js";import"./addComponentKeysets-CQB1DXIy.js";import"./Link-0nlGELYH.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BLBAlmBn.js";import"./Col-Dza0yzeN.js";import"./CardBase-BBN4oPf2.js";import"./BackgroundImage-6ZZSzS-n.js";import"./RouterLink-dMmxoqFJ.js";import"./Tag-DxKChI8o.js";import"./IconWrapper-D1WeWOFF.js";import"./ToggleArrow-DmloS-zq.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
