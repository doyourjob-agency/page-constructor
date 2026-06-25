import{R as t}from"./iframe-BUX88swU.js";import{y as f}from"./utils-DSiRBZuW.js";import{B as o}from"./BasicCard-CfG4x8OC.js";import{D as x}from"./Divider-BHPxhOgd.js";import{T as u}from"./Title-zTNY3ArE.js";import"./preload-helper-D6kgxu3v.js";import"./index-DodVtwzK.js";import"./keys-HKe1F8e8.js";import"./_baseKeys-wOw31D9f.js";import"./url-B882L7QW.js";import"./index-CtN8c93-.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-Bx7aeyhR.js";import"./blocks-DBa-Hv3H.js";import"./toString-D6YLZ10c.js";import"./isSymbol-ODHKBxTz.js";import"./Links-c_iEyMsj.js";import"./Link-BHdM0EV0.js";import"./BackLink-DM4-oJ44.js";import"./useAnalytics-BptTr_3V.js";import"./Button-BjaT9BIk.js";import"./common-CKPlDYTZ.js";import"./Icon-DSCXVmyD.js";import"./EventBroker-Bhem-vFy.js";import"./FileLink-BkuKWMeK.js";import"./url-Bnzy3_61.js";import"./Label-Bin29yZY.js";import"./Xmark-Cthnl6MA.js";import"./YFMWrapper-CsYulmTs.js";import"./HTML-DSNfyg0C.js";import"./ContentList-p9tijUMt.js";import"./Image-DKOeWff4.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-NBykzUZZ.js";import"./Buttons-DTqlZ0-n.js";import"./Button-BmG6hA9P.js";import"./addComponentKeysets-C4IfciUs.js";import"./Link-Bq0Uo3aA.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-kZ7Y_ZJ8.js";import"./Col-N7W_oiB-.js";import"./CardBase-Dw_wloU0.js";import"./BackgroundImage-DuXU1KtC.js";import"./RouterLink-B1qLNT6U.js";import"./Tag-CiYz36Bd.js";import"./IconWrapper-huV6_oq3.js";import"./ToggleArrow-DC_FtKK9.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
