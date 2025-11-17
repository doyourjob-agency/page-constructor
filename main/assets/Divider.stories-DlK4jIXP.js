import{R as t}from"./iframe-DfCNDy5b.js";import{y as f}from"./utils-BHK0Xjyz.js";import{B as o}from"./BasicCard-Bp5-z2gj.js";import{D as x}from"./Divider-BGiSYD1R.js";import{T as u}from"./Title-BtKGH5_3.js";import"./preload-helper-D6kgxu3v.js";import"./index-F-x7Nj_v.js";import"./keys-CUKvaLBA.js";import"./_baseKeys-DkH8N2oQ.js";import"./url-DfeohxQk.js";import"./index-VrsYUVx4.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-Dt6kB84Y.js";import"./blocks-qI43frnL.js";import"./toString-ClOWjWqG.js";import"./isSymbol-DGHTltIR.js";import"./Links-CPEyj4uS.js";import"./Link-CSgX4tTt.js";import"./BackLink-DGAHJ1dE.js";import"./useAnalytics-CmnyvBiD.js";import"./Button-BoKz_HD-.js";import"./common-DNd9N1ou.js";import"./Icon-COjlCdel.js";import"./EventBroker-DCJoVoQW.js";import"./FileLink-B3xzxVvj.js";import"./url-CKkWsKrS.js";import"./Label-e2swbeGg.js";import"./Xmark-ByOWQQ0z.js";import"./HTML-Dw-N42hQ.js";import"./ContentList-DlLHRxRG.js";import"./Image-C1qlcLjR.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-B7FF_vTh.js";import"./v4-Dv1xt2bl.js";import"./Buttons-C9mj8DkY.js";import"./Button--a25mO3m.js";import"./addComponentKeysets-BGRjzkpD.js";import"./Link-VLerTi69.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-hPEg8-Ah.js";import"./Col-BeX4N8i0.js";import"./CardBase-DjEXV_vT.js";import"./BackgroundImage-C4JJr588.js";import"./RouterLink-BQpw4cRn.js";import"./Tag-DdODFE2a.js";import"./IconWrapper-DURabE4m.js";import"./ToggleArrow-BfRy1C3a.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
