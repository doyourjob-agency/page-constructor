import{R as t}from"./iframe-CiJ0AxAx.js";import{y as f}from"./utils-Cq5nTdqc.js";import{B as o}from"./BasicCard-taE-9sdq.js";import{D as x}from"./Divider-ivMs_OC8.js";import{T as u}from"./Title-CuiKCVC8.js";import"./preload-helper-D6kgxu3v.js";import"./index-DamkeAEl.js";import"./keys-DrRUmSPb.js";import"./_baseKeys-ALvySF8q.js";import"./url-BnQ8q5og.js";import"./index-DCCRbJuK.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-Dk2edqYr.js";import"./Content-CvZyWHqL.js";import"./blocks-Ccl6JWF3.js";import"./toString-CtFZ808W.js";import"./isSymbol-DU84KYjs.js";import"./Links-fAJyjA96.js";import"./Link-Dl7xdntq.js";import"./BackLink-C9ZvHKCJ.js";import"./useAnalytics-m2jQVGGy.js";import"./Button-D-Ome-h1.js";import"./common-Bcjihid6.js";import"./Icon-NjLn9xfZ.js";import"./EventBroker-Bawc-lMJ.js";import"./FileLink-BzRvj9dW.js";import"./url-68qSpplz.js";import"./Label-BsIOKQv5.js";import"./Xmark-BqJIt6vU.js";import"./HTML-CnJfYcs5.js";import"./ContentList-CFaXViyB.js";import"./Image-Ciim792j.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DCurkEod.js";import"./Buttons-3BO8dVGW.js";import"./Button-BD4_v-Bb.js";import"./addComponentKeysets-DheaOnn3.js";import"./Link-XcR9LmRq.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DadPuH55.js";import"./Col-z5CNTuHf.js";import"./CardBase-o6ztUpKn.js";import"./BackgroundImage-D7SeSwD1.js";import"./RouterLink-D4J9RN6g.js";import"./Tag-gpeBWFKo.js";import"./IconWrapper-BBz8WHhs.js";import"./ToggleArrow-Cel96N6o.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
