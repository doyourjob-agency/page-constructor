import{R as t}from"./iframe-DqOjUIrd.js";import{y as f}from"./utils-DdlBo9F7.js";import{B as o}from"./BasicCard-DufJ9FiB.js";import{D as x}from"./Divider-BaMqCkUt.js";import{T as u}from"./Title-QM3_I3ai.js";import"./preload-helper-D6kgxu3v.js";import"./index-Dc0VTYXc.js";import"./keys-Bu5x0BUr.js";import"./_baseKeys-DlQ_FSJ4.js";import"./url-B-rzBPye.js";import"./index-wAPU_X97.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-CT3tcLmJ.js";import"./blocks-lrktAcgE.js";import"./toString-CisKSDSr.js";import"./isSymbol-BKRrzLXc.js";import"./Links-CMNL83QG.js";import"./Link-08nx0pY1.js";import"./BackLink-rVCfNcc2.js";import"./useAnalytics-Dxj3L6AB.js";import"./Button-DafPA1n3.js";import"./common-Dscpr0B8.js";import"./Icon-CTHKyccN.js";import"./EventBroker-yk2CLJI6.js";import"./FileLink-C8j81w6e.js";import"./url-Dvbs0RVH.js";import"./Label-BEiGdUwD.js";import"./Xmark-C8xQDMzv.js";import"./HTML-BHrZoxoU.js";import"./ContentList-pJv2m4pg.js";import"./Image-mMOKa4Dx.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-Dnw5Nkud.js";import"./v4-Dv1xt2bl.js";import"./Buttons-CiB0RzsO.js";import"./Button-DF92W7a6.js";import"./addComponentKeysets-Dto2Nl2J.js";import"./Link-DZ6guMd6.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DhDOyAVO.js";import"./Col-vdkX8mWB.js";import"./CardBase-Cu0fRYB2.js";import"./BackgroundImage-3quBZvCV.js";import"./RouterLink-DGXQk_op.js";import"./Tag-D_Z3GP7V.js";import"./IconWrapper-DIIxdNDk.js";import"./ToggleArrow-BsYEIrS-.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
