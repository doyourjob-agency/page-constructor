import{R as t}from"./iframe-CQ9k5sy_.js";import{y as f}from"./utils-BrSMoJV1.js";import{B as o}from"./BasicCard-Cm43KSVX.js";import{D as x}from"./Divider-9CzMs9Mn.js";import{T as u}from"./Title-BPC48Pu5.js";import"./preload-helper-D6kgxu3v.js";import"./index-UohgrqZp.js";import"./keys-ClNAjsOu.js";import"./_baseKeys-DHornQEA.js";import"./url-bdPZsRZ3.js";import"./index-brSWL1Tp.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-B3jHiR2u.js";import"./Content-D4TbvVxI.js";import"./blocks-T_DxcYJN.js";import"./toString-hwKnJuqj.js";import"./isSymbol-B2EKYc2I.js";import"./Links-DllSuORS.js";import"./Link-BrdayC4B.js";import"./BackLink-BZzydvHl.js";import"./useAnalytics-DozTJ6DF.js";import"./Button-BbBIX9qk.js";import"./common-Opgx2aTG.js";import"./Icon-h7Gv9wCL.js";import"./EventBroker-BOyrmsfc.js";import"./FileLink-B0f61e4Y.js";import"./url-DJ7G0cJt.js";import"./Label-0xBTbW8H.js";import"./Xmark-CLmVl7ZV.js";import"./YFMWrapper-CinEQHdK.js";import"./HTML-dXmPR-ac.js";import"./ContentList-DxiBMKA_.js";import"./Image-lN7SLda_.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DRM1fOA4.js";import"./Buttons-JVHv9Nwc.js";import"./Button-CITc3pdq.js";import"./addComponentKeysets-BCyxNZY9.js";import"./Link-FZOXiYt4.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BsU-rpOl.js";import"./Col-BFJNZQLO.js";import"./CardBase-B7463quz.js";import"./BackgroundImage--7vzcJZ8.js";import"./RouterLink-CbtTGAK6.js";import"./Tag---hNwm7g.js";import"./IconWrapper-MwDEbpdY.js";import"./ToggleArrow-DuQFEZns.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
