import{R as t}from"./iframe-CzGpP1h9.js";import{y as f}from"./utils-CYFvRu3m.js";import{B as o}from"./BasicCard-C4l6mf18.js";import{D as x}from"./Divider-DExaex0v.js";import{T as u}from"./Title-BQnrN4Fa.js";import"./preload-helper-D6kgxu3v.js";import"./index-C3vdElpp.js";import"./keys-D6zmalau.js";import"./_baseKeys-PtjAuLm0.js";import"./url-CkMQQ78A.js";import"./index-Cg5qdvSk.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-Dj1kARlO.js";import"./blocks-9cMPC5F1.js";import"./toString-DII7Xfws.js";import"./isSymbol-D-WC7isF.js";import"./Links-DoWnU-wk.js";import"./Link-B8JTXBqh.js";import"./BackLink-DoVf2tTb.js";import"./useAnalytics-B7P1MfIz.js";import"./Button-C26-RtxD.js";import"./common-BARHTRe0.js";import"./Icon-B0WgUR8T.js";import"./EventBroker-DFTXbZAH.js";import"./FileLink-9vkxJWgs.js";import"./url-DTRpTrQF.js";import"./Label-C2gUhUSq.js";import"./Xmark-DV154hqm.js";import"./YFMWrapper-j4o5tXBU.js";import"./HTML-BG8Qt_5M.js";import"./ContentList-dERXc5SS.js";import"./Image-D2AFeExe.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CnwYjIoX.js";import"./Buttons-BbC-61dL.js";import"./Button-Cmj5nfr7.js";import"./addComponentKeysets-DA6le8BD.js";import"./Link-B4v9USyB.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BH5ZR4i6.js";import"./Col-wZ1rORHn.js";import"./CardBase-CvadnMq1.js";import"./BackgroundImage-lN0yAN3D.js";import"./RouterLink-CxMQ-Uvc.js";import"./Tag-5AO4qGGg.js";import"./IconWrapper-BHzgn9Jd.js";import"./ToggleArrow-TnZP2Fa3.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
