import{R as t}from"./iframe-C3gjPPOp.js";import{y as f}from"./utils-CWVNHO-G.js";import{B as o}from"./BasicCard-B0PDVeMS.js";import{D as x}from"./Divider-BdDcpic3.js";import{T as u}from"./Title-9YzOkkv6.js";import"./preload-helper-D6kgxu3v.js";import"./index-RxQnPUWI.js";import"./keys-DH1FdJyg.js";import"./_baseKeys-BdZtUQlv.js";import"./url-CaY50UTH.js";import"./index-CGe8vZns.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-CS3LZN4c.js";import"./blocks-BAoErGYZ.js";import"./toString-DDkyNePH.js";import"./isSymbol-lasIHqym.js";import"./Links-BafsN5Vn.js";import"./Link-swLg0ERg.js";import"./BackLink-DUpT_cz8.js";import"./useAnalytics-CAwJvRmV.js";import"./Button-BpP0ZJHI.js";import"./common-SE62K5g2.js";import"./Icon-DDhOyV7K.js";import"./EventBroker-znvWalaO.js";import"./FileLink-BysfRPqm.js";import"./url-CFsLHDZI.js";import"./Label-CMC-bzmb.js";import"./Xmark-B-Rx-MOL.js";import"./HTML-gF3uVm_j.js";import"./ContentList-B2IQITuz.js";import"./Image-B3X4k_pt.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DNBucguL.js";import"./v4-Dv1xt2bl.js";import"./Buttons-D6gnIauS.js";import"./Button-DQ89YlCP.js";import"./addComponentKeysets-C4i8Xw8T.js";import"./Link-DEl45dEG.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-ClM7SmuP.js";import"./Col-8heCrgm0.js";import"./CardBase-C5EmTo9e.js";import"./BackgroundImage-ov1SqF_a.js";import"./RouterLink-B_YY4k4W.js";import"./Tag-CZxLugOS.js";import"./IconWrapper-ClpnrGCe.js";import"./ToggleArrow-fLVLkm6c.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
