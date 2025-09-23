import{R as t}from"./iframe-DZvhOGqt.js";import{y as f}from"./utils-O_kZpE7G.js";import{B as o}from"./BasicCard-04orMr7x.js";import{D as x}from"./Divider-muf8nzU7.js";import{T as u}from"./Title-DTXRFQ-W.js";import"./preload-helper-D6kgxu3v.js";import"./index-Cfn2pZyi.js";import"./keys-Ccd5_k4G.js";import"./_baseKeys-BFBv1ysp.js";import"./url-CY9gbMPS.js";import"./index-lqRwb6_y.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-DgdIuR8O.js";import"./blocks-DYnPwyUF.js";import"./toString-Bltq0rU0.js";import"./isSymbol-wlLUMiN7.js";import"./Links-BVBW2NTE.js";import"./Link-xNViGUcQ.js";import"./BackLink-DjRaKdfF.js";import"./useAnalytics-BEop7sEw.js";import"./Button-D7Da1BcB.js";import"./common-CxVnEoSj.js";import"./Icon-bWXwpLjz.js";import"./EventBroker-DlotlUVU.js";import"./FileLink-O-bO5jA7.js";import"./url-Ca9IK1De.js";import"./Label-2PGSYheP.js";import"./Xmark-CWcinYp7.js";import"./HTML-Vi9BXmvZ.js";import"./ContentList-CjRpd1UN.js";import"./Image-C5X5xHa9.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CHeICeEn.js";import"./v4-Dv1xt2bl.js";import"./Buttons-CgG8VGJD.js";import"./Button-BMeTwe6R.js";import"./addComponentKeysets-CEzWyVXk.js";import"./Link-x6V1IKTj.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DjN9kovu.js";import"./Col-jNri0cVQ.js";import"./CardBase-D2vs2eTy.js";import"./BackgroundImage-B9GcjZQ7.js";import"./RouterLink-D_p6zidA.js";import"./Tag-BGJwiZf0.js";import"./IconWrapper-CtxpKDHC.js";import"./ToggleArrow-BjedwMyq.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
