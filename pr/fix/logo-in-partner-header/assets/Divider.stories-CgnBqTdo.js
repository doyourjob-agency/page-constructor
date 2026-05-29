import{R as t}from"./iframe-ByHBW-LU.js";import{y as f}from"./utils-WLaIRs-3.js";import{B as o}from"./BasicCard-BznZG2Ck.js";import{D as x}from"./Divider-DSCIzPz5.js";import{T as u}from"./Title-UyDTLJGj.js";import"./preload-helper-D6kgxu3v.js";import"./index-CHOjhvsB.js";import"./keys-cp6EXYjl.js";import"./_baseKeys-_sAopJms.js";import"./url-yqaeFfCV.js";import"./index-DUaNnm4Q.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-Dk2edqYr.js";import"./Content-x7lozSmb.js";import"./blocks-ipYls7At.js";import"./toString-Dw8OIbsF.js";import"./isSymbol-DZCykU7x.js";import"./Links-DKF1tv_Y.js";import"./Link-o1NBejIU.js";import"./BackLink-BtBguY1O.js";import"./useAnalytics-CzYrX7Y6.js";import"./Button-uo18weoo.js";import"./common-UI1yd9Gw.js";import"./Icon-9IGF5QBp.js";import"./EventBroker-B6aMziAy.js";import"./FileLink-BB8lWAIb.js";import"./url-DnGcMT4D.js";import"./Label-DHHa9tuu.js";import"./Xmark-CZQByukB.js";import"./HTML-DAFChGLG.js";import"./ContentList-5T7fbZgD.js";import"./Image-BXv-FPWc.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-Ba8t-3GL.js";import"./Buttons-CMxCr6NV.js";import"./Button-db4HlpZg.js";import"./addComponentKeysets-DbqHmXJh.js";import"./Link-DJUDJCuH.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DF5zMR8z.js";import"./Col-Cs2njPgD.js";import"./CardBase-D4CZ9f4l.js";import"./BackgroundImage-4b2nL5Z5.js";import"./RouterLink-CMSAk5d4.js";import"./Tag-BlMr9Szx.js";import"./IconWrapper-DneJGbcS.js";import"./ToggleArrow-DOS8JoeX.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
    </div>`,...(c=(d=m.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const ft=["Default","Sizes"];export{r as Default,m as Sizes,ft as __namedExportsOrder,vt as default};
