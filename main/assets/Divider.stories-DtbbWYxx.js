import{R as t}from"./iframe-DvrTMT0K.js";import{y as f}from"./utils-DRlZLyid.js";import{B as o}from"./BasicCard-BRIvSJ0z.js";import{D as x}from"./Divider-XRd2NiTI.js";import{T as u}from"./Title-DSmZjTvn.js";import"./preload-helper-D6kgxu3v.js";import"./index-BzSNQnLe.js";import"./keys-DUGA12TE.js";import"./_baseKeys-DmvyH8Xy.js";import"./url-KCnr9aT5.js";import"./index-Cf4ZHfCu.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-BWIiTGOj.js";import"./blocks-BXy_DaDw.js";import"./toString-2Kk4BD63.js";import"./isSymbol-BnkAv1CB.js";import"./Links-DgcyCMVF.js";import"./Link-BVwFLDUG.js";import"./BackLink-CRDpWGik.js";import"./useAnalytics-BSTJg3Iw.js";import"./Button-DS0n2gXM.js";import"./common-CrxDbLRg.js";import"./Icon-pAWLK2Id.js";import"./EventBroker-BjL_BUfD.js";import"./FileLink-Dp-wB21U.js";import"./url-BFE6OHPl.js";import"./Label-Cq1Sa3aK.js";import"./Xmark-Ct5YAkeU.js";import"./HTML-CvLGmHtd.js";import"./ContentList-DCKV8Jgo.js";import"./Image-BLg4MbvN.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DxAc9fQS.js";import"./Buttons-INtfiFKE.js";import"./Button-BjoQFqcp.js";import"./addComponentKeysets-D1hv2x0h.js";import"./Link-DPkiQOyh.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-cLLpcSUL.js";import"./Col-DyD72gh5.js";import"./CardBase-DT1m7lF_.js";import"./BackgroundImage-CwE2AAKZ.js";import"./RouterLink-CouS3wDv.js";import"./Tag-DTZ_vuQy.js";import"./IconWrapper-CD9NLipt.js";import"./ToggleArrow-n_ed6KY_.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
