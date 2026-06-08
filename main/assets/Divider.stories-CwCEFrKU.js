import{R as t}from"./iframe-dc00IE13.js";import{y as f}from"./utils-Du4yFp74.js";import{B as o}from"./BasicCard-yUnQ82xK.js";import{D as x}from"./Divider-TjJgSA8d.js";import{T as u}from"./Title-DQujbgri.js";import"./preload-helper-D6kgxu3v.js";import"./index-CgyfhJJt.js";import"./keys-CvePMluC.js";import"./_baseKeys-CAbJOf8r.js";import"./url-CWOfcuUp.js";import"./index-CxV-CTGR.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-BX6L3-MY.js";import"./blocks-DLZIu9d3.js";import"./toString-C_awhXBe.js";import"./isSymbol-BGvV5LDb.js";import"./Links-DFkSD-2r.js";import"./Link-BMtUh6PR.js";import"./BackLink-DStA37VU.js";import"./useAnalytics-BGsoIhSS.js";import"./Button-CVb6huPM.js";import"./common-DKQz_1pt.js";import"./Icon-B5EqVoCj.js";import"./EventBroker-CxsPOMkT.js";import"./FileLink-DNKDskz6.js";import"./url-ans39HwF.js";import"./Label-DIQbOu6D.js";import"./Xmark-5WaRC63K.js";import"./YFMWrapper-CYNAcLGT.js";import"./HTML-Caj8YYum.js";import"./ContentList-BfW6EXdL.js";import"./Image-Dh_7ge7b.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CF_Pc0ay.js";import"./Buttons-ClvAj1mF.js";import"./Button-CpnKY4p0.js";import"./addComponentKeysets-BD2YNz19.js";import"./Link-CDr4ttpI.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CPrnhlB8.js";import"./Col-DNcIeJdz.js";import"./CardBase-CVK_Ag2q.js";import"./BackgroundImage-ZpeS6tog.js";import"./RouterLink-Bpx5Vmnc.js";import"./Tag-BS8TAiV0.js";import"./IconWrapper-htC6JEe6.js";import"./ToggleArrow-rsULySSW.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
