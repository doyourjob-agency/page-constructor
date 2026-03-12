import{R as t}from"./iframe-BbEK39Lq.js";import{y as f}from"./utils-CGqhou22.js";import{B as o}from"./BasicCard-Cs0MtgWM.js";import{D as x}from"./Divider-ly1WJLEg.js";import{T as u}from"./Title-bvJGDyKR.js";import"./preload-helper-D6kgxu3v.js";import"./index-2EoL8jmF.js";import"./keys-D2OpRJT1.js";import"./_baseKeys-DA7WccVT.js";import"./url-DE7JHxW1.js";import"./index-B75YCXPw.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-DDeoDZcv.js";import"./blocks-CO3Yldx5.js";import"./toString-Xj4XoA47.js";import"./isSymbol-QyzFl1Z5.js";import"./Links-TqtEYsWK.js";import"./Link-Ciqe6yx1.js";import"./BackLink-muLdck4y.js";import"./useAnalytics-DremsWrQ.js";import"./Button-CA1AMa0v.js";import"./common-CNRxp0q7.js";import"./Icon-BTP13vSi.js";import"./EventBroker-DHhLwZYh.js";import"./FileLink-DY8DZLvA.js";import"./url-Brj9xQmQ.js";import"./Label-9FYwg9wA.js";import"./Xmark-BU0nCnGs.js";import"./HTML-Dmt_ZDFS.js";import"./ContentList-C5_uZP2O.js";import"./Image-Cm8V27d9.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-IwT3eGRo.js";import"./v4-Dv1xt2bl.js";import"./Buttons-DuEyBe6H.js";import"./Button-BGiN6Ujr.js";import"./addComponentKeysets-C9o1bUlP.js";import"./Link-B_gKecS9.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BMietnzO.js";import"./Col-LGbEjofp.js";import"./CardBase-CHO6X4Yh.js";import"./BackgroundImage-BqFJezJL.js";import"./RouterLink-Y4eJE782.js";import"./Tag-CTfsCJl8.js";import"./IconWrapper-CbEzHPHo.js";import"./ToggleArrow-XLEm31Wc.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
