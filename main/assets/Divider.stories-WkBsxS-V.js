import{R as t}from"./iframe-lUSF-0GZ.js";import{y as f}from"./utils-Kgl62Hy_.js";import{B as o}from"./BasicCard-Bv91z-Vg.js";import{D as x}from"./Divider-CwD3_n0s.js";import{T as u}from"./Title-DnumzSbX.js";import"./preload-helper-D6kgxu3v.js";import"./index-Gf0STrux.js";import"./keys-B68yanLr.js";import"./_baseKeys-Bo-P5M6-.js";import"./url-CB3teDjF.js";import"./index-hXfIARIV.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-D_JDQjiQ.js";import"./blocks-B51fy7_f.js";import"./toString-D5qo15e-.js";import"./isSymbol-1cHQ2Yoc.js";import"./Links-CsBOL8Px.js";import"./Link-DQed1VDh.js";import"./BackLink-DBxrfz7M.js";import"./useAnalytics-Dt8FtecZ.js";import"./Button-T0ttA03H.js";import"./common-CzKNd49j.js";import"./Icon-WwQErrFi.js";import"./EventBroker-DTm0tTEt.js";import"./FileLink-DfW9-qsc.js";import"./url-DXC5HC0Z.js";import"./Label-B23N0BQp.js";import"./Xmark-UgXWeIEI.js";import"./HTML-CHk-i_Kh.js";import"./ContentList-DJP35_JL.js";import"./Image-DJgOiYG7.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-Dj1lkDaP.js";import"./v4-Dv1xt2bl.js";import"./Buttons-Depf1bDq.js";import"./Button-BKilpgt4.js";import"./addComponentKeysets-3CARq8kZ.js";import"./Link-Da4cbvCc.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BEM69exE.js";import"./Col-D6Qr8aJk.js";import"./CardBase-BazWDOJb.js";import"./BackgroundImage-Dv1OdZ8z.js";import"./RouterLink-hv9yliuW.js";import"./Tag-A2erR_pP.js";import"./IconWrapper-ki55zEWK.js";import"./ToggleArrow-CcUZGel2.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
