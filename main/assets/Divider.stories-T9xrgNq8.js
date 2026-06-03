import{R as t}from"./iframe-C7ulxEDr.js";import{y as f}from"./utils-DnH6DLzp.js";import{B as o}from"./BasicCard-DqJyJc8I.js";import{D as x}from"./Divider-BTSukSYC.js";import{T as u}from"./Title-Buygodn6.js";import"./preload-helper-D6kgxu3v.js";import"./index-5dH5MXZL.js";import"./keys-DzGxQTnS.js";import"./_baseKeys-D04dncl8.js";import"./url-z7mJ22Pm.js";import"./index-CUa1qA0E.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-B3jHiR2u.js";import"./Content-Bdojr6kW.js";import"./blocks-CB3C1um9.js";import"./toString-Dw63o6Wa.js";import"./isSymbol-W_clexcd.js";import"./Links-BHrIAaJ1.js";import"./Link-BMbtgWy5.js";import"./BackLink-B4W7YW8M.js";import"./useAnalytics-DIK77FJR.js";import"./Button-B6msyst0.js";import"./common-Na8c9PrK.js";import"./Icon-CwQqSJPq.js";import"./EventBroker-1eWDGDML.js";import"./FileLink-CiWgOL0z.js";import"./url-B6hJcI6H.js";import"./Label-BfqUY6_p.js";import"./Xmark-dpoiWlkd.js";import"./YFMWrapper-wR9-XAZo.js";import"./HTML-CqH1s8I-.js";import"./ContentList-Ch-AJAJ0.js";import"./Image-BrtlFyfI.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CDaEir4L.js";import"./Buttons-BaKTqeww.js";import"./Button-DIVgzZwt.js";import"./addComponentKeysets-B0FRXPtW.js";import"./Link-CvOlHiJD.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-HbNE_3Cd.js";import"./Col-DW7UvNrR.js";import"./CardBase-Bx28RnVZ.js";import"./BackgroundImage-Y5L5bpMF.js";import"./RouterLink-CgjADlYn.js";import"./Tag-wPVE0Snf.js";import"./IconWrapper-iRep689p.js";import"./ToggleArrow-DF_PAENe.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
