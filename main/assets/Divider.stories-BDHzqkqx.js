import{R as t}from"./iframe-o_coW7fs.js";import{y as f}from"./utils-BvUAZZ_E.js";import{B as o}from"./BasicCard-DkJgVLm_.js";import{D as x}from"./Divider-CFj5_8v3.js";import{T as u}from"./Title-Bm4fXe8f.js";import"./preload-helper-D6kgxu3v.js";import"./index-D4ZHnKsj.js";import"./keys-DNXaQJcw.js";import"./_baseKeys-CA8S5M06.js";import"./url-CiYS5XC8.js";import"./index-DIvbev_D.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content--xMUMKw_.js";import"./blocks-DHA8IR4f.js";import"./toString-DLoQdkPn.js";import"./isSymbol-Ba1BuB_e.js";import"./Links-Bhvkenq5.js";import"./Link-CLDgKcI5.js";import"./BackLink-C9oMLdJF.js";import"./useAnalytics-D5lcJpZb.js";import"./Button-D1HlqxbT.js";import"./common-BsRrw7FR.js";import"./Icon-CRuVPUt0.js";import"./EventBroker-DIzDIASd.js";import"./FileLink-BQHqqk-z.js";import"./url-BkxV78db.js";import"./Label-Dd4DBjBa.js";import"./Xmark-9Q5HZfkU.js";import"./HTML-BJQVChTd.js";import"./ContentList-Dsh6Bgtt.js";import"./Image-f2UXtBZ8.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DB-ox24F.js";import"./v4-Dv1xt2bl.js";import"./Buttons-CPj1bYVb.js";import"./Button-BOkYOWTT.js";import"./addComponentKeysets-B7Qav0m5.js";import"./Link-ClsHwR3k.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-8130KBI8.js";import"./Col-CIlHQ8Cn.js";import"./CardBase-C9_9RQzU.js";import"./BackgroundImage-Ce_923rr.js";import"./RouterLink-BSFBCBH9.js";import"./Tag-DMVWDgmj.js";import"./IconWrapper-BXmSrTbT.js";import"./ToggleArrow-Bh4GSFH-.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
