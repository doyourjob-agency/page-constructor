import{R as t}from"./iframe-BH30qpWw.js";import{y as f}from"./utils-Uwd6NHdI.js";import{B as o}from"./BasicCard-ZjmXcGv1.js";import{D as x}from"./Divider-D15poh7i.js";import{T as u}from"./Title-CnGHcfDh.js";import"./preload-helper-D6kgxu3v.js";import"./index-DCh9b58I.js";import"./keys-Dc-3gdJ_.js";import"./_baseKeys-CE4aMn_b.js";import"./url-DGwWxrS0.js";import"./index-B3d1E0rp.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-BxGI5LZS.js";import"./blocks-sjfEhotH.js";import"./toString-CphqfxqK.js";import"./isSymbol-B4foFFdE.js";import"./Links-BLa1nV48.js";import"./Link-DZaSahYe.js";import"./BackLink-C8c6E-WG.js";import"./useAnalytics-BpeI1cNe.js";import"./Button-CP2Js39S.js";import"./common-C7Rk94t9.js";import"./Icon-DqJhYyYZ.js";import"./EventBroker-BIb6zxmi.js";import"./FileLink-OfffSy9t.js";import"./url-CyduD3ic.js";import"./Label-B7t9Hb47.js";import"./Xmark-Dy02tYuO.js";import"./YFMWrapper-BThreJa-.js";import"./HTML-CGFT2t64.js";import"./ContentList-C1RS2zLT.js";import"./Image-CJY9JU-v.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CtJpef8o.js";import"./Buttons-BdzYapny.js";import"./Button-CnwFpymQ.js";import"./addComponentKeysets-B5pT6I11.js";import"./Link-rYs2X_ty.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-Ds9DRINl.js";import"./Col-xYBGiN2A.js";import"./CardBase-B4nt2Od-.js";import"./BackgroundImage-8eX-YW8L.js";import"./RouterLink-iLF5GwVH.js";import"./Tag-BgF84Fdp.js";import"./IconWrapper-D6DSXimY.js";import"./ToggleArrow-DkliaqzH.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
