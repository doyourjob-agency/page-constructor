import{R as t}from"./iframe-BriZlbNg.js";import{y as f}from"./utils-Co8k7ZoM.js";import{B as o}from"./BasicCard-Bp0uyoU-.js";import{D as x}from"./Divider-CM_PzYjG.js";import{T as u}from"./Title-CNhOrNzY.js";import"./preload-helper-D6kgxu3v.js";import"./index-DifDsfvq.js";import"./keys-C8Y_n5wM.js";import"./_baseKeys-C_jLIGS8.js";import"./url-Dp3iagAk.js";import"./index-D2S0n1je.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-BvdDczD_.js";import"./blocks-BnCdTOS9.js";import"./toString-BdIGamus.js";import"./isSymbol-DbiDo3sw.js";import"./Links-Bz6CPlPi.js";import"./Link-CkJNS-SP.js";import"./BackLink-B2jx9JeJ.js";import"./useAnalytics-BST6qSnU.js";import"./Button-C0BsPk6T.js";import"./common-VlCW8CVA.js";import"./Icon-DZqwNtc-.js";import"./EventBroker-Se_uH-6R.js";import"./FileLink-BBIohcXS.js";import"./url-B7d9uJdN.js";import"./Label-LrARQauH.js";import"./Xmark-D5y6RiEd.js";import"./HTML-BIK1deZ_.js";import"./ContentList-BjKELvk2.js";import"./Image-DzMV7voR.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-TVz9HvLI.js";import"./v4-Dv1xt2bl.js";import"./Buttons-ni0of_N-.js";import"./Button-D4l5GQHW.js";import"./addComponentKeysets-CRGajmhI.js";import"./Link-Rd-NbP2U.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CZe332wp.js";import"./Col-BWuv7XMG.js";import"./CardBase-DIKGuMBk.js";import"./BackgroundImage-Ccjf3NNa.js";import"./Tag-DnWdiIID.js";import"./IconWrapper-4xMjokBj.js";import"./ToggleArrow-BxGwFmxQ.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
