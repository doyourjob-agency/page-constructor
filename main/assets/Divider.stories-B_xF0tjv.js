import{R as t}from"./iframe-CDeMw0_D.js";import{y as f}from"./utils-CIp8zLoY.js";import{B as o}from"./BasicCard-DCElriVo.js";import{D as x}from"./Divider-BXceVnYV.js";import{T as u}from"./Title-CKL_ZXDo.js";import"./preload-helper-D6kgxu3v.js";import"./index-a_-9Be0N.js";import"./keys-IFC3bGXo.js";import"./_baseKeys-Dk3qOrhn.js";import"./url-DFPmxx2H.js";import"./index-Du5S2wED.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-Dz8xS5ce.js";import"./blocks-CVsXMmS5.js";import"./toString-DP5uRw8l.js";import"./isSymbol-CNYJqmtS.js";import"./Links-D23nQsUm.js";import"./Link-Dk-vFXDt.js";import"./BackLink-BkOXtKbT.js";import"./useAnalytics-B3S4JCF0.js";import"./Button-BnhgeivM.js";import"./common-C0Qb70fU.js";import"./Icon-DXt0G9wY.js";import"./EventBroker-Dg7JeQpB.js";import"./FileLink-BP2mp5Vn.js";import"./url-JpuMPsXV.js";import"./Label-BrXHJSTV.js";import"./Xmark-CcgC11_A.js";import"./HTML-DcBrb0Zz.js";import"./ContentList-CPVusejv.js";import"./Image-CiDBNC51.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DlbiHjUI.js";import"./v4-Dv1xt2bl.js";import"./Buttons-8HmSQ5Od.js";import"./Button-De_nrbvG.js";import"./addComponentKeysets-B7rwfQ1m.js";import"./Link-IMADxcHM.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-C_jOO49I.js";import"./Col-BvHJurRI.js";import"./CardBase-DqZXz4Nc.js";import"./BackgroundImage-HLIvGq7v.js";import"./RouterLink-DZJJR2Kt.js";import"./Tag-mgkFs0Ni.js";import"./IconWrapper-DJ-PLeHe.js";import"./ToggleArrow-CPj2iXts.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
