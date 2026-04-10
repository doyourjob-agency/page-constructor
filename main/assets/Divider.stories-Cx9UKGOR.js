import{R as t}from"./iframe-Cb45e8ar.js";import{y as f}from"./utils-02TRARoR.js";import{B as o}from"./BasicCard-BeZ9UA8F.js";import{D as x}from"./Divider-CNG7NuvZ.js";import{T as u}from"./Title-BKlJgTI0.js";import"./preload-helper-D6kgxu3v.js";import"./index-BbM6x3-d.js";import"./keys-C15LJhgR.js";import"./_baseKeys-CqaLDkPV.js";import"./url-CimRwJ3u.js";import"./index-BTKLIY65.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-Bo2x65Af.js";import"./blocks-Bok_KXHe.js";import"./toString-DXWijoFx.js";import"./isSymbol-Dy-qLy4k.js";import"./Links-BHkzmcTL.js";import"./Link-Dy7jF9nD.js";import"./BackLink-XekiGw2s.js";import"./useAnalytics-CE_qz_Lg.js";import"./Button-3Nc2wVdD.js";import"./common-DcQ84kAl.js";import"./Icon-bAzGBv7k.js";import"./EventBroker--5udftL6.js";import"./FileLink-CSWuXr8e.js";import"./url-Bu_Xb4UT.js";import"./Label-CS1ZuxxA.js";import"./Xmark-CKtuVoT6.js";import"./HTML-Bir62gX7.js";import"./ContentList-DTP5Qsqd.js";import"./Image-BBSMF7h6.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BJN6tRvs.js";import"./v4-Dv1xt2bl.js";import"./Buttons-B3Estqut.js";import"./Button-KxVNv50U.js";import"./addComponentKeysets-DWavyfNT.js";import"./Link-BZHT5W_0.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DiihPZAf.js";import"./Col-Dl1ANlMV.js";import"./CardBase-BKHQI8VY.js";import"./BackgroundImage-fXbdY_o9.js";import"./RouterLink-DNEbeOAh.js";import"./Tag-JLbMdnAp.js";import"./IconWrapper-DSlxVpgF.js";import"./ToggleArrow-D7AU_Q9-.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
