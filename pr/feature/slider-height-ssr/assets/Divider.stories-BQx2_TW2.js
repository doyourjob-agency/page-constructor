import{R as t}from"./iframe-IuIsHCKM.js";import{y as f}from"./utils-BcqiKfSV.js";import{B as o}from"./BasicCard-MF5jBvmx.js";import{D as x}from"./Divider-DurKxKBc.js";import{T as u}from"./Title-CFsMp8y_.js";import"./preload-helper-D6kgxu3v.js";import"./index-DownfWYj.js";import"./keys-WHQwQHQH.js";import"./_baseKeys-CJXhn452.js";import"./url-CZgsAYr6.js";import"./index-Ce46zMpP.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-4iGbTOQ6.js";import"./blocks-SjvElCDw.js";import"./toString-B-XnZG-j.js";import"./isSymbol-LPzqgv6T.js";import"./Links-BmK769hk.js";import"./Link-BdE6Nme0.js";import"./BackLink-DTNAcxh4.js";import"./useAnalytics-Bge62-ag.js";import"./Button-B0dW9qp_.js";import"./common-BIU5lJlI.js";import"./Icon-CYtEt5VS.js";import"./EventBroker-ByeWBq3M.js";import"./FileLink-D9s922Nq.js";import"./url-BIyoBHxT.js";import"./Label-BMaM-z7I.js";import"./Xmark-fNe7Mf2z.js";import"./HTML-DJfwvfn5.js";import"./ContentList-BXhF9aW1.js";import"./Image-BEdf80KK.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BAkzuT2Q.js";import"./v4-Dv1xt2bl.js";import"./Buttons-C-wXsopk.js";import"./Button-J28Me0aS.js";import"./addComponentKeysets-Caj1JFDR.js";import"./Link-Cy3YWjkG.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DOQdB9q8.js";import"./Col-bhkd0hwq.js";import"./CardBase-BJeh5N0d.js";import"./BackgroundImage-B5xEHBBB.js";import"./RouterLink-ChIJaOAX.js";import"./Tag-Br5OHzoY.js";import"./IconWrapper-BX-J9rZh.js";import"./ToggleArrow-LyaQAhL-.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
