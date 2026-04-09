import{R as t}from"./iframe-JApcfPFX.js";import{y as f}from"./utils-CFMNk1mw.js";import{B as o}from"./BasicCard-Al0M6z0O.js";import{D as x}from"./Divider-COtx7mK2.js";import{T as u}from"./Title-DiBowyn5.js";import"./preload-helper-D6kgxu3v.js";import"./index-BKPHlz-7.js";import"./keys-BruZdtqD.js";import"./_baseKeys-C3OySN9o.js";import"./url-BTxnGvcW.js";import"./index-Cec7ir8U.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-DaFNkez4.js";import"./blocks-M3cJ3poy.js";import"./toString-2rc-9v3I.js";import"./isSymbol-CxtSiezF.js";import"./Links-B4RvxQII.js";import"./Link-CcJEtS1f.js";import"./BackLink-BgNr8Z8X.js";import"./useAnalytics-BTgEUrqA.js";import"./Button-DX4k37b-.js";import"./common-B_CULGz-.js";import"./Icon-Ce-3yXeK.js";import"./EventBroker-BETc-vzb.js";import"./FileLink-Dt0vPvQf.js";import"./url-C-G91Sim.js";import"./Label-D7j3xZ9T.js";import"./Xmark-3GOmZYus.js";import"./HTML-DzbLe2wH.js";import"./ContentList-Bs9UfLAt.js";import"./Image-Du-vNfcd.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CdC0iCWE.js";import"./v4-Dv1xt2bl.js";import"./Buttons-zCD90wyO.js";import"./Button-DtJSo0Ck.js";import"./addComponentKeysets-Ck5StsQk.js";import"./Link-DnCrI9oZ.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BsMIuCp7.js";import"./Col-BRM2yIKA.js";import"./CardBase-DgC3wGTH.js";import"./BackgroundImage-CDyBYMIH.js";import"./RouterLink-COuOjTzT.js";import"./Tag-DuEeHNNV.js";import"./IconWrapper-Dx3QYojh.js";import"./ToggleArrow-L3fGo0eI.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
