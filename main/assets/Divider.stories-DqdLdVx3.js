import{R as t}from"./iframe-KJblPkDi.js";import{y as f}from"./utils-orIwmjkw.js";import{B as o}from"./BasicCard-DhEQFFxW.js";import{D as x}from"./Divider-CwpnH3hC.js";import{T as u}from"./Title-DGuec1nd.js";import"./preload-helper-D6kgxu3v.js";import"./index-Bs7MLSGb.js";import"./keys-B9xhWjEs.js";import"./_baseKeys-D9zXVfGP.js";import"./url-D_0T8O8s.js";import"./index-B5zICSZv.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-BKQf97bX.js";import"./blocks-Dc7-hVpU.js";import"./toString-Cb8-TFyz.js";import"./isSymbol-y5GXi1vh.js";import"./Links-BN4V9M4u.js";import"./Link-BOgw0519.js";import"./BackLink-DPTYoH2k.js";import"./useAnalytics-Bu_-a14F.js";import"./Button-C8UfVdVY.js";import"./common-DLoHIBJ1.js";import"./Icon-BcWvKZzm.js";import"./EventBroker-DVq6avqC.js";import"./FileLink-C4boe0Se.js";import"./url-B8XEJXem.js";import"./Label-uYhlDku8.js";import"./Xmark-CVQJEk4J.js";import"./YFMWrapper-eZh6wTPl.js";import"./HTML-Drt-Ni7k.js";import"./ContentList-rwHyIrhC.js";import"./Image-r3EJRFbZ.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-P2b6U-F-.js";import"./Buttons-CQw1gmvD.js";import"./Button-CtUvBv9M.js";import"./addComponentKeysets-Cx0BuswZ.js";import"./Link-C4B0bMzy.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-IhMtQXCy.js";import"./Col-Cgk0WrtW.js";import"./CardBase-BgOPcSpH.js";import"./BackgroundImage-Bn8-Ekdm.js";import"./RouterLink-DJ9KdfdI.js";import"./Tag-C9SFGy0B.js";import"./IconWrapper-B2jN4WP3.js";import"./ToggleArrow-LodgVIMP.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
