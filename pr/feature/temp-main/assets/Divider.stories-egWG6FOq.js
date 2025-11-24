import{R as t}from"./iframe-C0RP7n_V.js";import{y as f}from"./utils-B6Ly_Om-.js";import{B as o}from"./BasicCard-CJ4STZeb.js";import{D as x}from"./Divider-Cq8WN_fo.js";import{T as u}from"./Title-DcwNHZBs.js";import"./preload-helper-D6kgxu3v.js";import"./index-BpZB4Ji8.js";import"./keys-Dxn4Uky2.js";import"./_baseKeys-7GqV4nJp.js";import"./url-DdT_u27Q.js";import"./index-DUe6kk-o.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-D8srhwbu.js";import"./blocks-GELn04uP.js";import"./toString-DT9Fs1CS.js";import"./isSymbol-3NsWnP_N.js";import"./Links-DIyPW2n-.js";import"./Link-BMQ8g3oj.js";import"./BackLink-C_leQIs_.js";import"./useAnalytics-Dkc3AaFx.js";import"./Button-DpdshZIH.js";import"./common-bVOSFWvS.js";import"./Icon-Bxutx-9N.js";import"./EventBroker-C8Vmvg33.js";import"./FileLink-D8s6-8Nz.js";import"./url-DkVmsojx.js";import"./Label-CVdzC8aH.js";import"./Xmark-C8_HmsKu.js";import"./HTML-CKQVq0X-.js";import"./ContentList-Duej21Nz.js";import"./Image-Dk1EVEi0.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-Bjy0GtRN.js";import"./v4-Dv1xt2bl.js";import"./Buttons-CrhAMlaa.js";import"./Button-CmHuG0s2.js";import"./addComponentKeysets-DtG0an_p.js";import"./Link-D5X4Yq3n.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-Dqn9KwVn.js";import"./Col-CIEvLzV3.js";import"./CardBase-BJwa1445.js";import"./BackgroundImage-CZi6hq3T.js";import"./RouterLink-Dw9TvNzp.js";import"./Tag--pfxjt1-.js";import"./IconWrapper-CMdk1mLM.js";import"./ToggleArrow-D3DOEqHc.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
