import{R as t}from"./iframe-Ddz7KkMR.js";import{y as f}from"./utils-z3eXC0MP.js";import{B as o}from"./BasicCard-CtA3XLVp.js";import{D as x}from"./Divider-B0Fq54XZ.js";import{T as u}from"./Title-C-6wU-eU.js";import"./preload-helper-D6kgxu3v.js";import"./index-Csqo2i5V.js";import"./keys-mMnVh3tw.js";import"./_baseKeys-VFpsJghu.js";import"./url-DhHozKA0.js";import"./index-CK4rQwIX.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-Cohw5VSE.js";import"./blocks-UAfU_DqH.js";import"./toString-CFC8SIaj.js";import"./isSymbol-Cjg5xfYK.js";import"./Links-BobMqZ3d.js";import"./Link-BaqXLWaP.js";import"./BackLink-Ban6k0Za.js";import"./useAnalytics-Bo_SpwA0.js";import"./Button-DBYz__hS.js";import"./common-DkCOa_5D.js";import"./Icon-DfT0pOrg.js";import"./EventBroker-B7cGhOBT.js";import"./FileLink-DVxDot6B.js";import"./url-CU7Vf-Gt.js";import"./Label-4AP7LsEj.js";import"./Xmark-BfEmgqvF.js";import"./YFMWrapper-DPkPgYMA.js";import"./HTML-DSDfFSZx.js";import"./ContentList-Cn3py56Z.js";import"./Image-ofYQ1jzn.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DsR0OvU2.js";import"./Buttons-CRdraR2E.js";import"./Button-B9MlbGpV.js";import"./addComponentKeysets-b_615OW-.js";import"./Link-CQvrVn-r.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-C129Lfp8.js";import"./Col-CDlbTPJC.js";import"./CardBase-dGij3Gm4.js";import"./BackgroundImage-Dm38v9lR.js";import"./RouterLink-YjhWolJq.js";import"./Tag-DhydMZA5.js";import"./IconWrapper-CyLdlwT2.js";import"./ToggleArrow-C74sb6I7.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
