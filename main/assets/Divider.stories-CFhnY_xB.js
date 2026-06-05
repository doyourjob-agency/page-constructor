import{R as t}from"./iframe-wVDaCR_5.js";import{y as f}from"./utils-FYuDOpv0.js";import{B as o}from"./BasicCard-0uKJO_tk.js";import{D as x}from"./Divider-BgJd3TGP.js";import{T as u}from"./Title-Ds7nfaNI.js";import"./preload-helper-D6kgxu3v.js";import"./index-FQ5ZLeIO.js";import"./keys-CvtDZ9JX.js";import"./_baseKeys-Dp2y1bFL.js";import"./url-CPKLBfJg.js";import"./index-O4xIaoRT.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-DGRkHPym.js";import"./blocks-CNkjsm5g.js";import"./toString-Ce7cuGAU.js";import"./isSymbol-AZbqlOqX.js";import"./Links-D0kx1O0t.js";import"./Link-CS4rzZCH.js";import"./BackLink-QvzOvcUu.js";import"./useAnalytics-WJJkZBhf.js";import"./Button-CN_lCj_u.js";import"./common-EM0_PJVr.js";import"./Icon-CsQj_7rO.js";import"./EventBroker-Bja4Jr06.js";import"./FileLink-BBs4d07w.js";import"./url-CK9VyOr5.js";import"./Label-TSy8yAIu.js";import"./Xmark-CigzbhOf.js";import"./YFMWrapper-DQxbvxNp.js";import"./HTML-MzIkflzJ.js";import"./ContentList-CcJyMTp4.js";import"./Image-BgkCSLaG.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CnaCxG_o.js";import"./Buttons-DV1vzuqo.js";import"./Button-x8Jwd8Hj.js";import"./addComponentKeysets-CDRcy1Tj.js";import"./Link-BrB7lCon.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BjgPh4Xh.js";import"./Col-DR6EyvXj.js";import"./CardBase-FbDOGPYg.js";import"./BackgroundImage-B0u8Fp8S.js";import"./RouterLink-mzPVNsel.js";import"./Tag-64xxeEhC.js";import"./IconWrapper-DzsSksQD.js";import"./ToggleArrow-Cewvqmtp.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
