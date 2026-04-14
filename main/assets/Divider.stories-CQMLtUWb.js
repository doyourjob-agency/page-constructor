import{R as t}from"./iframe-IRtuPbD3.js";import{y as f}from"./utils-BHKqhWr8.js";import{B as o}from"./BasicCard-BeYNMRYc.js";import{D as x}from"./Divider-BmhgjmfK.js";import{T as u}from"./Title-DIvynIA7.js";import"./preload-helper-D6kgxu3v.js";import"./index-C-3kyn3J.js";import"./keys-DZvmZ3Wv.js";import"./_baseKeys-DgRsgq4I.js";import"./url-C3sUdMeN.js";import"./index-Bmc06tVH.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-DmmB6sBD.js";import"./blocks-GUBacEX-.js";import"./toString-DL5_rL8T.js";import"./isSymbol-CGgs6F4p.js";import"./Links-BzEgBbWs.js";import"./Link-DjUTYYGi.js";import"./BackLink-BxV95WuM.js";import"./useAnalytics-tehPj9Nq.js";import"./Button-D3u0DExd.js";import"./common-DjbAqP_Y.js";import"./Icon-Bb1NSC9J.js";import"./EventBroker-DlxFaKFg.js";import"./FileLink-4TrwzjSU.js";import"./url-C61Z17q8.js";import"./Label-BLWoKBYi.js";import"./Xmark-D1t8ivAR.js";import"./HTML-DmIXQ4LJ.js";import"./ContentList-B2vIvOdr.js";import"./Image-BQq7-7Zv.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-C55rS85e.js";import"./v4-Dv1xt2bl.js";import"./Buttons-9O5Rm_4q.js";import"./Button-DKw8PQA9.js";import"./addComponentKeysets-B2yVNCWq.js";import"./Link-D9110Rri.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CqnqpAZH.js";import"./Col-Dlqniipp.js";import"./CardBase-BIM4QcA5.js";import"./BackgroundImage-bgx2A9Vc.js";import"./RouterLink-B6Y_nhR3.js";import"./Tag-BorGe2P_.js";import"./IconWrapper-BetFMieB.js";import"./ToggleArrow-BuJ8yhe3.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
