import{R as t}from"./iframe-DntpPZMo.js";import{y as f}from"./utils-Baep1aRn.js";import{B as o}from"./BasicCard-fhFoiNHS.js";import{D as x}from"./Divider-BlAe4qCm.js";import{T as u}from"./Title-BmCZnI2r.js";import"./preload-helper-D6kgxu3v.js";import"./index-BDBn_PgG.js";import"./keys-QjCrCg2Z.js";import"./_baseKeys-D_PyjzfG.js";import"./url-DV1AmBG9.js";import"./index-5ycDS0uc.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-CUXeU99S.js";import"./blocks-DD_8Xa56.js";import"./toString-DxAh929N.js";import"./isSymbol-CaXXXWey.js";import"./Links-C5p5gw7v.js";import"./Link-k8AWMuJg.js";import"./BackLink-BKy-lvFx.js";import"./useAnalytics-DqdPQ63R.js";import"./Button-C5kw32Ro.js";import"./common-BDPKl9Fp.js";import"./Icon-C6k-6Nra.js";import"./EventBroker-Bhwzf6Sc.js";import"./FileLink-xeWn6K_I.js";import"./url-B5RnbmBI.js";import"./Label-CvZ8_N29.js";import"./Xmark-mewe-W59.js";import"./HTML-CWqLD7iW.js";import"./ContentList-tc-leJK1.js";import"./Image-BqTLy_ye.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-VD6tpXyf.js";import"./v4-Dv1xt2bl.js";import"./Buttons-72H_WOTG.js";import"./Button-BEN_rTKO.js";import"./addComponentKeysets-DNUEaOFp.js";import"./Link-h513vkac.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CeOu68u-.js";import"./Col-C2PL3bcX.js";import"./CardBase-CQndx9vS.js";import"./BackgroundImage-DZYXzsVI.js";import"./Tag-DA6fpoLu.js";import"./IconWrapper-C3jAHEkG.js";import"./ToggleArrow-C8GkS7Cg.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
