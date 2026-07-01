import{R as t}from"./iframe-j8XXzfPt.js";import{y as f}from"./utils-DcAz87et.js";import{B as o}from"./BasicCard-BSa7KMZN.js";import{D as x}from"./Divider-BdoNlDC5.js";import{T as u}from"./Title-BjVZ69Iy.js";import"./preload-helper-D6kgxu3v.js";import"./index-qjM5bDRK.js";import"./keys-CCiKJOOh.js";import"./_baseKeys-D_wwZitk.js";import"./url-C3vM4Xxj.js";import"./index-PfnV5ECa.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-BzSnoo_g.js";import"./blocks-CyQ8v_Mv.js";import"./toString-Djf_qp3o.js";import"./isSymbol-CDrvmSQn.js";import"./Links-CXd5ruF4.js";import"./Link-DWllnqMW.js";import"./BackLink-azvFl1zX.js";import"./useAnalytics-DSsNVOXm.js";import"./Button-Dg8uBJFS.js";import"./common-B8_4zPh2.js";import"./Icon-B9Li-UDv.js";import"./EventBroker-BSqtCvak.js";import"./FileLink-B3eKFBro.js";import"./url-BaAEyk3z.js";import"./Label-BF9720rA.js";import"./Xmark-DYzzkkpe.js";import"./YFMWrapper-Biq6G9_p.js";import"./HTML-Dc_kuCTf.js";import"./ContentList-Byko3XyJ.js";import"./Image-D4Vco6Ug.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DZEJiNUZ.js";import"./Buttons-DvEeAwSQ.js";import"./Button-CiPmwIXl.js";import"./addComponentKeysets-BQDIzI3F.js";import"./Link-Ds3A1OaS.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CrdzBq84.js";import"./Col-CCOjYc0e.js";import"./CardBase-Bok9Daxk.js";import"./BackgroundImage-B0ebdAvu.js";import"./RouterLink-CxYK8gJj.js";import"./Tag-Cj4K12rg.js";import"./IconWrapper-dNYWwdtr.js";import"./ToggleArrow-BUB7YsEg.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
