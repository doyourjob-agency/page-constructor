import{R as t}from"./iframe-D2Q6ZLdb.js";import{y as f}from"./utils-DyW3XfYy.js";import{B as o}from"./BasicCard-DJoDKYlr.js";import{D as x}from"./Divider-F0rFyR6X.js";import{T as u}from"./Title-JPIwPrmw.js";import"./preload-helper-D6kgxu3v.js";import"./index-BDdcGLds.js";import"./keys-BZHB3Jmj.js";import"./_baseKeys-BrFZ4QW-.js";import"./url-DeIq00wp.js";import"./index-BYXFPGT4.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-DcsEDMrX.js";import"./blocks-S-yIagAi.js";import"./toString-DgFKNT-G.js";import"./isSymbol-CBuMu6iI.js";import"./Links-C7AJX1uV.js";import"./Link-BMhdwckP.js";import"./BackLink-DmlJOWOL.js";import"./useAnalytics-BdLOCZ7B.js";import"./Button-C0SPVXx6.js";import"./common-MJm21O70.js";import"./Icon-BjtN50tJ.js";import"./EventBroker-CWKTgPiu.js";import"./FileLink-Biatn4i4.js";import"./url-BRo_3iSe.js";import"./Label-D0c_kTrn.js";import"./Xmark-CwTJ3FoV.js";import"./HTML-BTkepKBz.js";import"./ContentList-RRI0XCC0.js";import"./Image-DjnSdv74.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DHG8Fnsk.js";import"./v4-Dv1xt2bl.js";import"./Buttons-BpWCtHts.js";import"./Button-UKhstXeH.js";import"./addComponentKeysets-B8EashR_.js";import"./Link-Dbi2rRub.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-B9NOmQZL.js";import"./Col-DzvgJDHK.js";import"./CardBase-CpP7vbVe.js";import"./BackgroundImage-Dv3PfyNF.js";import"./RouterLink-mD2dawAa.js";import"./Tag-CzzTUFcZ.js";import"./IconWrapper-C3tuonGn.js";import"./ToggleArrow-CguHHBr7.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
