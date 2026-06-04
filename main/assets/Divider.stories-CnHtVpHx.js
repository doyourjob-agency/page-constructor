import{R as t}from"./iframe-DgwniwfZ.js";import{y as f}from"./utils-0fcRIGmE.js";import{B as o}from"./BasicCard-B_36XdP7.js";import{D as x}from"./Divider-DS-_OAml.js";import{T as u}from"./Title-CNIDZaO6.js";import"./preload-helper-D6kgxu3v.js";import"./index-DbkExUpq.js";import"./keys-y-jNqHZM.js";import"./_baseKeys-nMA-OQjO.js";import"./url-BnWp0bJJ.js";import"./index-Df1dRRJN.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-B3jHiR2u.js";import"./Content-CigQblIw.js";import"./blocks-DrDputgS.js";import"./toString-BAcjqqR7.js";import"./isSymbol-DyJW4LQz.js";import"./Links-B6UBLjVl.js";import"./Link-DCJT_gKn.js";import"./BackLink-BDvKT__0.js";import"./useAnalytics-Ddv9Nd1M.js";import"./Button-CGKOgdq0.js";import"./common-BntWES2y.js";import"./Icon-B2zNy8LO.js";import"./EventBroker-D7WmDMXz.js";import"./FileLink-OB7Cpos9.js";import"./url-dLR-tEPh.js";import"./Label-CdoG7NZP.js";import"./Xmark-CywkCKlB.js";import"./YFMWrapper-B2d-pnOg.js";import"./HTML-BWYxKrsN.js";import"./ContentList-yVqqerb7.js";import"./Image-Cj_vgSGp.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-C5U4PWkZ.js";import"./Buttons-s-J_G5a6.js";import"./Button-CFPyWM0F.js";import"./addComponentKeysets-Dlk7Xkn2.js";import"./Link-7T6l_zGP.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CpVFxPli.js";import"./Col-QwSbEXt_.js";import"./CardBase-BwQuieD5.js";import"./BackgroundImage-lrcvQ3_Q.js";import"./RouterLink-Dp34CvSa.js";import"./Tag-CXi8_DBS.js";import"./IconWrapper-DM-vftXw.js";import"./ToggleArrow-CtDU5wJG.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
