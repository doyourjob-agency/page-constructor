import{R as t}from"./iframe-CHJ99N4h.js";import{y as f}from"./utils-D9Rm9nLD.js";import{B as o}from"./BasicCard-Irt4L-1q.js";import{D as x}from"./Divider-TVVTOorc.js";import{T as u}from"./Title-BDTFd6-f.js";import"./preload-helper-D6kgxu3v.js";import"./index-CuTttgd1.js";import"./keys-0H7RqY1d.js";import"./_baseKeys-BKCkDmS1.js";import"./url-BG36eHCY.js";import"./index-BFc5Ojtd.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-CwB5J9at.js";import"./blocks-4Ficcjmf.js";import"./toString-D7uY7_CX.js";import"./isSymbol-B1ZkWNWS.js";import"./Links-Bp7DweT7.js";import"./Link-CK8tyxhQ.js";import"./BackLink-D7XdtZi-.js";import"./useAnalytics-CtgTgi5N.js";import"./Button-DleMS5iv.js";import"./common-BACIEziZ.js";import"./Icon-C4Y1og7Y.js";import"./EventBroker-DSsaY43Q.js";import"./FileLink-BcJSCgam.js";import"./url-s_gpOjWS.js";import"./Label-BJ8YUzLL.js";import"./Xmark-C3EpUNhb.js";import"./HTML-DbgBpGuV.js";import"./ContentList-BmhZw8df.js";import"./Image-Xhre54C_.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BFf3N2aN.js";import"./v4-Dv1xt2bl.js";import"./Buttons-DC_JJhtx.js";import"./Button-CVSgaXIR.js";import"./addComponentKeysets-BCyMemBG.js";import"./Link-SZ-llkX3.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-uvyzNY7I.js";import"./Col-DdTGs78u.js";import"./CardBase-5SgoSpca.js";import"./BackgroundImage-mMRwgWD7.js";import"./RouterLink-I5CU8nm8.js";import"./Tag-C3l0UVoF.js";import"./IconWrapper-B3EZ1GfZ.js";import"./ToggleArrow-B1PqoMHQ.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
