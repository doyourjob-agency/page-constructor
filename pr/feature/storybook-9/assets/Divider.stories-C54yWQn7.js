import{R as t}from"./iframe-rOpawicF.js";import{y as f}from"./utils-BlwuuQ7c.js";import{B as o}from"./BasicCard-BjNgZr_5.js";import{D as x}from"./Divider-BjjfWi9J.js";import{T as u}from"./Title-CY-mor2k.js";import"./preload-helper-D6kgxu3v.js";import"./index-CkMpE5w3.js";import"./keys-BvGfAZqZ.js";import"./_baseKeys-Cl5vXl6P.js";import"./url-DLciHpQv.js";import"./index-CdAB2Iwa.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-CmBFGDmp.js";import"./blocks-CYWk6lM8.js";import"./toString-hvZqj2EG.js";import"./isSymbol-DGnF1YqU.js";import"./Links-BcV5L18t.js";import"./Link-COqTixpT.js";import"./BackLink-D-UZFtOB.js";import"./useAnalytics-zvfXN5pa.js";import"./Button-B_WhZ6P4.js";import"./common-CZZS8Blm.js";import"./Icon-BiTW8ZUh.js";import"./EventBroker-Du5i1sbC.js";import"./FileLink-B4xei4I7.js";import"./url-CNkLVk73.js";import"./Label-DSX1m4lJ.js";import"./Xmark-B--lvgqG.js";import"./HTML-q64uCY31.js";import"./ContentList-Cs8gnihR.js";import"./Image-BrKzJPm2.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-B8TWB44z.js";import"./v4-Dv1xt2bl.js";import"./Buttons-D4QDteXQ.js";import"./Button-9cPXo2VJ.js";import"./addComponentKeysets-BCg10HZ2.js";import"./Link-Byu3qJP7.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-WYKZwsKq.js";import"./Col-DgLPogyu.js";import"./CardBase-BugmXQXp.js";import"./BackgroundImage-BaD0jPbE.js";import"./Tag-4IDvmyKR.js";import"./IconWrapper-BZfR-GeH.js";import"./ToggleArrow-B61f_Fhp.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
