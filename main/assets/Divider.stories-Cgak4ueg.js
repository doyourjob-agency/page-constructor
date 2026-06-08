import{R as t}from"./iframe-BM37uv-K.js";import{y as f}from"./utils-B0O3VmTZ.js";import{B as o}from"./BasicCard-Dj5e5crW.js";import{D as x}from"./Divider-Cb5dZFQX.js";import{T as u}from"./Title-DlopXQyw.js";import"./preload-helper-D6kgxu3v.js";import"./index-tUBLsDvy.js";import"./keys-D7Y1tugz.js";import"./_baseKeys-Dv9WmtNE.js";import"./url-DsxRCQFn.js";import"./index-z3I1Mh-F.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-sr1ScEbf.js";import"./blocks-ClZZoy_k.js";import"./toString-Dv82qEv1.js";import"./isSymbol-DbewfaqK.js";import"./Links-C7A1I1HW.js";import"./Link-CK7Sx8rR.js";import"./BackLink-CG6zv4cZ.js";import"./useAnalytics-CwZbt2hr.js";import"./Button-BWeB99tl.js";import"./common-CEZqTYmY.js";import"./Icon-CHAqXrhl.js";import"./EventBroker-CIlq4umu.js";import"./FileLink-7rkw1_y9.js";import"./url-DAIZDJwO.js";import"./Label-CQVQanBB.js";import"./Xmark-Dbm0KHNI.js";import"./YFMWrapper-4ag4QktG.js";import"./HTML-2sIZbqnj.js";import"./ContentList-D2GvJ2VZ.js";import"./Image-DZF1_hGU.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DQMbnmw7.js";import"./Buttons-CbIhs_a4.js";import"./Button-C4Gb4jKg.js";import"./addComponentKeysets-B2FQzX56.js";import"./Link-gJ81RbAr.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DBxvMNp2.js";import"./Col-Bra9aBF_.js";import"./CardBase-BEDYU4cG.js";import"./BackgroundImage-M_z-RaK1.js";import"./RouterLink-zbi9HEW8.js";import"./Tag-DFMo462f.js";import"./IconWrapper-B0oMeYph.js";import"./ToggleArrow-bu87OCci.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
