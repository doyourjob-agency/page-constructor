import{R as t}from"./iframe-CA5P8eIx.js";import{y as f}from"./utils-CEj7jcVR.js";import{B as o}from"./BasicCard-C1tzrR87.js";import{D as x}from"./Divider-beVqL0XS.js";import{T as u}from"./Title-sNw3b40I.js";import"./preload-helper-D6kgxu3v.js";import"./index-BnLYTgRz.js";import"./keys-DZ8Ni2zI.js";import"./_baseKeys-Ci0ipt1f.js";import"./url-Jg2WYHXT.js";import"./index-CH5FNwuX.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-DYO2Tukk.js";import"./blocks-oYwcSE2J.js";import"./toString-gCSuzRnb.js";import"./isSymbol-BDU_0hPi.js";import"./Links-X9K_UPo6.js";import"./Link-DMDywueG.js";import"./BackLink-DhWoWQ9e.js";import"./useAnalytics-BcHVL-JR.js";import"./Button-BGxwtjoR.js";import"./common-ewr4R8I0.js";import"./Icon-CqiwslCe.js";import"./EventBroker-B6KyEeqL.js";import"./FileLink-DABWBwZy.js";import"./url-CrogQV7g.js";import"./Label-DW7TplPR.js";import"./Xmark-vmbAAUF2.js";import"./HTML-CU6BoXqz.js";import"./ContentList-BxLzzMtT.js";import"./Image-CfTVY3y3.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BjeNWDvY.js";import"./v4-Dv1xt2bl.js";import"./Buttons-ClOEbkXm.js";import"./Button-CkrTBzzN.js";import"./addComponentKeysets-D4f_-0Eb.js";import"./Link-DrPqsIWb.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CUe5xkDn.js";import"./Col-DBcx4VRy.js";import"./CardBase-BeEsGrYl.js";import"./BackgroundImage-e7007zFJ.js";import"./RouterLink-g_-ZyMac.js";import"./Tag-D8XIuIh-.js";import"./IconWrapper-CCBQwPa0.js";import"./ToggleArrow-D9fQ2Ivs.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
