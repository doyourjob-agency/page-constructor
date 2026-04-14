import{R as t}from"./iframe-DJuZTL7G.js";import{y as f}from"./utils-C9wkZl2X.js";import{B as o}from"./BasicCard-B5qCP0Jl.js";import{D as x}from"./Divider-DPptUhPy.js";import{T as u}from"./Title-DfLIAUnw.js";import"./preload-helper-D6kgxu3v.js";import"./index-feluS8Af.js";import"./keys-CH0rTjMy.js";import"./_baseKeys-BSnjCjIC.js";import"./url-DOv2cBQK.js";import"./index-D5gBxae7.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-Df9YLXDE.js";import"./blocks-M7SS7PN0.js";import"./toString-vYYHnZBA.js";import"./isSymbol-3QJ9Fw6Z.js";import"./Links-uLQ-RQZ0.js";import"./Link-Bc4Z5J3L.js";import"./BackLink-ChjXGRcP.js";import"./useAnalytics-CSNEtHCd.js";import"./Button-Bqg8lZKH.js";import"./common-DKwoHlYH.js";import"./Icon-9ZZIcZNn.js";import"./EventBroker-C-VwUuS6.js";import"./FileLink-2gCp1nN1.js";import"./url-VI3uHD6q.js";import"./Label-C6RVNTQ2.js";import"./Xmark-DRC8Wnd7.js";import"./HTML-BT8AcM9q.js";import"./ContentList-C8VKE2mf.js";import"./Image-B73sNPAb.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-83mIBamj.js";import"./v4-Dv1xt2bl.js";import"./Buttons-BFGA3nd-.js";import"./Button-sG_qmdGS.js";import"./addComponentKeysets-BjKMJRnh.js";import"./Link-AW-d4g9B.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-9H7v9u27.js";import"./Col-CBWFfXuK.js";import"./CardBase-Dtrbt5Ou.js";import"./BackgroundImage-Sod8aN4w.js";import"./RouterLink-DmeGSHa-.js";import"./Tag-BYY0qp_S.js";import"./IconWrapper-DYJtYzD-.js";import"./ToggleArrow-DKBViwoC.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
