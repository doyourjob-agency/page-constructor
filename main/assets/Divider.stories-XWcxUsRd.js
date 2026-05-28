import{R as t}from"./iframe-DHm1jkLi.js";import{y as f}from"./utils-BosGIsoA.js";import{B as o}from"./BasicCard-BmmY5hSn.js";import{D as x}from"./Divider-CGwVHpX6.js";import{T as u}from"./Title-C4YATgfD.js";import"./preload-helper-D6kgxu3v.js";import"./index--BxsgywT.js";import"./keys-BGin_8xq.js";import"./_baseKeys-GSI8tu35.js";import"./url-wgVIhs7K.js";import"./index-BWHrEkqI.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-Dk2edqYr.js";import"./Content-C6bx-Mr1.js";import"./blocks-BI4976K_.js";import"./toString-DzdM6cbY.js";import"./isSymbol-BWopitCv.js";import"./Links-hVkse3UE.js";import"./Link-Br6SBDdM.js";import"./BackLink-DbHDm6RM.js";import"./useAnalytics-DPDT01gd.js";import"./Button-o4g-lRj3.js";import"./common-BhVrjaVu.js";import"./Icon-Bbp2bzyG.js";import"./EventBroker-COLtehQj.js";import"./FileLink-BD3y_2s-.js";import"./url-GUNcRst4.js";import"./Label-vDKO0Lwp.js";import"./Xmark-C5TU44JW.js";import"./HTML-B3W0r1Fe.js";import"./ContentList-CFRzjoFv.js";import"./Image-Cj6LMQNp.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BWv52bGu.js";import"./Buttons-Bp3F1Onp.js";import"./Button-BYprro4f.js";import"./addComponentKeysets-Booj1YUL.js";import"./Link-CXi08d_Q.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-D8cbbnXG.js";import"./Col-rHuEcjv6.js";import"./CardBase-CSPX_Hvh.js";import"./BackgroundImage-CiWAwND5.js";import"./RouterLink-CoMx4F1S.js";import"./Tag-DiFvFPT-.js";import"./IconWrapper-hduRsYAA.js";import"./ToggleArrow-OA9Jk1gj.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
