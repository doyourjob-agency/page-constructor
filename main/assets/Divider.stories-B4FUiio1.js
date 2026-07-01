import{R as t}from"./iframe-jz0ldN1p.js";import{y as f}from"./utils-BBHeAzqT.js";import{B as o}from"./BasicCard-HvkGYgH3.js";import{D as x}from"./Divider-Cw5l1p7k.js";import{T as u}from"./Title-BBRzDtKt.js";import"./preload-helper-D6kgxu3v.js";import"./index-Bk7t_KOO.js";import"./keys-BqvMm5-3.js";import"./_baseKeys-D9WeXcPr.js";import"./url-JTf63Otn.js";import"./index-mEF2gG5s.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-Dj76APPe.js";import"./blocks-DKfAyYO6.js";import"./toString-Ds3a8hKn.js";import"./isSymbol-CepvBC5O.js";import"./Links-C0IXWTOB.js";import"./Link-HGCGFjt2.js";import"./BackLink-DDPvR55X.js";import"./useAnalytics-Dpgjh5Dj.js";import"./Button-BU2XYQii.js";import"./common-VbfLk2ol.js";import"./Icon-BkVkvoch.js";import"./EventBroker-B5-35aZL.js";import"./FileLink-CdKMM3E2.js";import"./url-BF7fU-DZ.js";import"./Label-BlUAhFuc.js";import"./Xmark-BZiph8ea.js";import"./YFMWrapper-DuEWboHx.js";import"./HTML-CyRpEp_v.js";import"./ContentList-BQaT4_m2.js";import"./Image-CkWXACE5.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-C3fv6sIc.js";import"./Buttons-Bu1OXGZ2.js";import"./Button-B2fJ9soR.js";import"./addComponentKeysets-Cn4-qizL.js";import"./Link-5Yb1Mx4c.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-c1u_z4x9.js";import"./Col-BIUaECgP.js";import"./CardBase-Dj6rKRsu.js";import"./BackgroundImage-BPtabvKN.js";import"./RouterLink-5xoVdj5u.js";import"./Tag-D8DZDIm5.js";import"./IconWrapper-CZqhUwXb.js";import"./ToggleArrow-C1awJ51c.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
