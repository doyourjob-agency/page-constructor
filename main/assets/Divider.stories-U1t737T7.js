import{R as t}from"./iframe-JhTVE7ml.js";import{y as f}from"./utils-BPiYl5Ry.js";import{B as o}from"./BasicCard-BSN_qsLV.js";import{D as x}from"./Divider-CJEv6XXM.js";import{T as u}from"./Title-DMhjT0xp.js";import"./preload-helper-D6kgxu3v.js";import"./index-BuPSCJXJ.js";import"./keys-Dh0x4L_M.js";import"./_baseKeys-CrHheUgB.js";import"./url-X2zEeUyP.js";import"./index-T4y42C3u.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-B3jHiR2u.js";import"./Content-8A249-rZ.js";import"./blocks-kJORtUND.js";import"./toString-BltmD5lO.js";import"./isSymbol-jnIgfSOn.js";import"./Links-Bc0nX8if.js";import"./Link-BE_9ndql.js";import"./BackLink-Dij1eGo9.js";import"./useAnalytics-Z8gZ-TNq.js";import"./Button-DZs_HOfW.js";import"./common-snzam_d6.js";import"./Icon-Dh2T7_8f.js";import"./EventBroker-CF7f7FSU.js";import"./FileLink-BAMVJ__3.js";import"./url-BIoBkjM_.js";import"./Label-BnjGj8TA.js";import"./Xmark-BZZtGttX.js";import"./YFMWrapper-VEkhrEQV.js";import"./HTML-gxqUtngu.js";import"./ContentList-C-HJQN8e.js";import"./Image-CzhsOHUy.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BwWM4IJj.js";import"./Buttons-1dx1crjI.js";import"./Button-BurFsvGn.js";import"./addComponentKeysets-3pgI5unY.js";import"./Link-B-JSuIUp.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-qyIxrvY0.js";import"./Col-CQRr1mdH.js";import"./CardBase-CzJY4vbu.js";import"./BackgroundImage-C1WCVLeo.js";import"./RouterLink-CLeYwSZ-.js";import"./Tag-DRv22MYb.js";import"./IconWrapper-B8r2SCoz.js";import"./ToggleArrow-BTdwpv3E.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
