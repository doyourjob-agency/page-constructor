import{R as t}from"./iframe-Ca6nw1U-.js";import{y as f}from"./utils-B_QWzmUo.js";import{B as o}from"./BasicCard-fuuj_OQH.js";import{D as x}from"./Divider-hqMnfiPC.js";import{T as u}from"./Title-Dd6wdYA5.js";import"./preload-helper-D6kgxu3v.js";import"./index-DaX8sbLI.js";import"./keys-BYQItSh0.js";import"./_baseKeys-BzPlS1GC.js";import"./url-CfWCxKrv.js";import"./index-c9X3I39N.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-DQe0u-Za.js";import"./blocks-zNDbgKzx.js";import"./toString-D8pSqf24.js";import"./isSymbol-QN-5q7bD.js";import"./Links-C904y6KX.js";import"./Link-Muq1rhpn.js";import"./BackLink-BFq0uBoe.js";import"./useAnalytics-B84oge1o.js";import"./Button-B8yTLWqN.js";import"./common-B1otV7gU.js";import"./Icon-CZA3pXwF.js";import"./EventBroker-D47fqkm-.js";import"./FileLink-D4VPOYEr.js";import"./url-B-a_lTY0.js";import"./Label-Cdou3WhB.js";import"./Xmark-DdDvf1qA.js";import"./YFMWrapper-S6QkEDVV.js";import"./HTML-Ch97I813.js";import"./ContentList-C9FW8lwj.js";import"./Image-DEOs3wcq.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CRJa-TrI.js";import"./Buttons-BZoS0_yn.js";import"./Button-BrHqhKF6.js";import"./addComponentKeysets-Cv_GNz5s.js";import"./Link-ByDjm_f0.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-pjnwQkz5.js";import"./Col-CulualSX.js";import"./CardBase-D5A4loAS.js";import"./BackgroundImage-HRBB5RU2.js";import"./RouterLink-BFV-BEd0.js";import"./Tag-n7pecqXY.js";import"./IconWrapper-DIL1W1FA.js";import"./ToggleArrow-Cl4jBhpo.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
