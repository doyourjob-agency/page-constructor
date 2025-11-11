import{R as t}from"./iframe-RJIPozVW.js";import{y as f}from"./utils-LbhF3vPT.js";import{B as o}from"./BasicCard-Bf28KRD4.js";import{D as x}from"./Divider-KiQGiGAk.js";import{T as u}from"./Title-CYNifm-n.js";import"./preload-helper-D6kgxu3v.js";import"./index-C34AC6IH.js";import"./keys-DcggzKbA.js";import"./_baseKeys-CnVTtvov.js";import"./url-78nLMHn2.js";import"./index-_IhQJwdY.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-BiqyeNk8.js";import"./blocks-C_RaW57a.js";import"./toString-DCZS3nVX.js";import"./isSymbol-BSnmm2aa.js";import"./Links-D7G3zvue.js";import"./Link-v6_F4Oxz.js";import"./BackLink-BBnbKUzL.js";import"./useAnalytics-uui_2LhA.js";import"./Button-Htghp3S3.js";import"./common-B8ISxnGJ.js";import"./Icon-CN0RLedh.js";import"./EventBroker-D6hvP3aZ.js";import"./FileLink-B5_2m9i2.js";import"./url-CneeG_eP.js";import"./Label-Rm0UsKsW.js";import"./Xmark-D5fQSvhq.js";import"./HTML-BhYg_2vX.js";import"./ContentList-kVezsQYH.js";import"./Image-BYtntnpQ.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DblIzKMt.js";import"./v4-Dv1xt2bl.js";import"./Buttons-F7_-PZXS.js";import"./Button-C7IIaOiw.js";import"./addComponentKeysets-AgkksTFE.js";import"./Link-rmQnVW87.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CPGNM3OJ.js";import"./Col-Dltd5cX5.js";import"./CardBase-BDfbNfRi.js";import"./BackgroundImage-grEaTDga.js";import"./RouterLink-l-HXMlAD.js";import"./Tag-F6EVLmds.js";import"./IconWrapper-TW2sLx7g.js";import"./ToggleArrow-CeljGXLn.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
