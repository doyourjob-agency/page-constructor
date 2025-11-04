import{R as t}from"./iframe-COrrJVrL.js";import{y as f}from"./utils-eU2UAaoL.js";import{B as o}from"./BasicCard-C6yFHH-i.js";import{D as x}from"./Divider-BCgBYZJe.js";import{T as u}from"./Title-BwFG__Ed.js";import"./preload-helper-D6kgxu3v.js";import"./index-BSmjdEGD.js";import"./keys-BUDKmgrm.js";import"./_baseKeys-DQB7q7NS.js";import"./url-Bn31qbbv.js";import"./index-DRrJkO0J.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-DjNLmZrd.js";import"./blocks-yyjygSzq.js";import"./toString-TUmz1izx.js";import"./isSymbol-DRTZDzYC.js";import"./Links-UGrNQK9F.js";import"./Link-Cvw2SjjF.js";import"./BackLink-Dzsdf_JN.js";import"./useAnalytics-CVS0I9ZM.js";import"./Button-BC8PQMpK.js";import"./common-BTfmUc2q.js";import"./Icon-DRi42F-m.js";import"./EventBroker-CeGAdNfo.js";import"./FileLink-mMGkwoAv.js";import"./url-BptvcDlA.js";import"./Label-BX99QKZG.js";import"./Xmark-BOdMj6te.js";import"./HTML-pp_jHYTe.js";import"./ContentList-Dm9EdAFw.js";import"./Image-DarQP--L.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BPD07WqI.js";import"./v4-Dv1xt2bl.js";import"./Buttons-DVegh_s9.js";import"./Button-b5ykXmph.js";import"./addComponentKeysets-BC0MQNvU.js";import"./Link-D1wcvzhZ.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-Dx0cUmqh.js";import"./Col-BJC58M0H.js";import"./CardBase-Ch8e9UPy.js";import"./BackgroundImage-CtJIShcy.js";import"./RouterLink-C43rLCLM.js";import"./Tag-CvkN6B5Q.js";import"./IconWrapper-Bhxr4DTZ.js";import"./ToggleArrow-BJ3AWMam.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
