import{R as t}from"./iframe-CDin9XDu.js";import{y as f}from"./utils-C3w9t4_O.js";import{B as o}from"./BasicCard-C8KFW0j_.js";import{D as x}from"./Divider-B07N7Dhn.js";import{T as u}from"./Title-C7OVgdA7.js";import"./preload-helper-D6kgxu3v.js";import"./index-BcegIyqh.js";import"./keys-Dx9SX_VG.js";import"./_baseKeys-9gTZkzJ4.js";import"./url-DRDVduc3.js";import"./index-D1Wc89bA.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-B3jHiR2u.js";import"./Content-jGXnQ-pX.js";import"./blocks-BA2aQijJ.js";import"./toString-B9U8ZD-9.js";import"./isSymbol-ItxKuUGf.js";import"./Links-iBoHBzeK.js";import"./Link-B7TMMlBv.js";import"./BackLink-CrPEzZOP.js";import"./useAnalytics-BCBXiBnl.js";import"./Button-DsqDLNn5.js";import"./common-DH2bEXJ9.js";import"./Icon-CSVhslpE.js";import"./EventBroker-BXMfodUv.js";import"./FileLink-Bey2jcVz.js";import"./url-A47c_-x0.js";import"./Label-5f_vA0lp.js";import"./Xmark-B4LA32_N.js";import"./YFMWrapper-DygCmQhH.js";import"./HTML-BqGgh254.js";import"./ContentList-8fkDmGK9.js";import"./Image-BybT33cl.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DmHNN2r3.js";import"./Buttons-9zVCRmbI.js";import"./Button-D-HMc5MT.js";import"./addComponentKeysets-B2I8YWql.js";import"./Link-CezUPsPQ.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BlQaJQvM.js";import"./Col-CpONTdfp.js";import"./CardBase-Ug6wvlVj.js";import"./BackgroundImage-GKGrmIyx.js";import"./RouterLink-DKi1A6Jf.js";import"./Tag-DOEai9Gu.js";import"./IconWrapper-DqpRR5uQ.js";import"./ToggleArrow-B5sd_4my.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
