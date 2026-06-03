import{R as t}from"./iframe-jxMdrApm.js";import{y as f}from"./utils-0rFycxGX.js";import{B as o}from"./BasicCard-1xaqaiZw.js";import{D as x}from"./Divider-CHk-HB7-.js";import{T as u}from"./Title-BTeHfm6y.js";import"./preload-helper-D6kgxu3v.js";import"./index-C5tPLGKi.js";import"./keys-B7nU_gmY.js";import"./_baseKeys-DMPcMUv6.js";import"./url-D4k8yLON.js";import"./index-BYusYULV.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-B3jHiR2u.js";import"./Content-BmIM1N0_.js";import"./blocks-CHgWup03.js";import"./toString-iACTRB9m.js";import"./isSymbol-BY4i3Mz0.js";import"./Links-DXAZCZSv.js";import"./Link-BJnGmIx6.js";import"./BackLink-Bp1PigFM.js";import"./useAnalytics-DCR9TicG.js";import"./Button-XuJI_k5A.js";import"./common-J6QJbMAt.js";import"./Icon-HrfRBD6b.js";import"./EventBroker-D5RaSFoT.js";import"./FileLink-CgGLfdQh.js";import"./url-vKKVegmr.js";import"./Label-CpNKWYxt.js";import"./Xmark-D2F1CAjn.js";import"./YFMWrapper-7bbKHQGu.js";import"./HTML-BX3EcPnA.js";import"./ContentList-COEgdSDb.js";import"./Image-CAXrZN7M.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-iSXbwnJL.js";import"./Buttons-DNLEQlW7.js";import"./Button-keXwpnrf.js";import"./addComponentKeysets-BQkOv5gp.js";import"./Link-DNuzVZqe.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BvWey28I.js";import"./Col-D0cyJZtk.js";import"./CardBase-BcEdW0WK.js";import"./BackgroundImage-BJhk87Bs.js";import"./RouterLink-D8KTpuGD.js";import"./Tag-BuOkoqeT.js";import"./IconWrapper-CZq37QYy.js";import"./ToggleArrow-B7kFVJ1Q.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
