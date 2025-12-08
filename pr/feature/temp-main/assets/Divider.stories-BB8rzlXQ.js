import{R as t}from"./iframe-DKc3t4eG.js";import{y as f}from"./utils-DVTegM2S.js";import{B as o}from"./BasicCard-Dcf0k4fK.js";import{D as x}from"./Divider-u5yHgjef.js";import{T as u}from"./Title-C9uRnP6R.js";import"./preload-helper-D6kgxu3v.js";import"./index-CYEVV-6I.js";import"./keys-Blhl-89l.js";import"./_baseKeys-C38D8xk3.js";import"./url-C71rkem_.js";import"./index-ClM2q3kj.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-DV7lAtCo.js";import"./blocks-ErU7GADI.js";import"./toString-Bb4QW6H1.js";import"./isSymbol-BuGZt5W_.js";import"./Links-DXrv6keP.js";import"./Link-CiACXMxU.js";import"./BackLink-BDuMmySp.js";import"./useAnalytics-DzZFnXjc.js";import"./Button-BttfcD8S.js";import"./common-CWBI2tXq.js";import"./Icon-BovA6tsv.js";import"./EventBroker-B9TLYz1P.js";import"./FileLink-ClP1l-w3.js";import"./url-BokEB-Nm.js";import"./Label-DAudK5aw.js";import"./Xmark-BiSOGTRJ.js";import"./HTML-DkPM9qxm.js";import"./ContentList-DU8g7UkK.js";import"./Image-BV-Ze5pT.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-boQK5-_r.js";import"./v4-Dv1xt2bl.js";import"./Buttons-DqlaBx5m.js";import"./Button-BKg_h976.js";import"./addComponentKeysets-nHgihZik.js";import"./Link-CSC7LqBr.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-8N6M_QAV.js";import"./Col-DfKaOTnx.js";import"./CardBase-S7u9P7Te.js";import"./BackgroundImage-DuyMSGw5.js";import"./RouterLink-qUOpI3Tk.js";import"./Tag-C6F_NpGl.js";import"./IconWrapper-D-ScmGPy.js";import"./ToggleArrow-BCqN_sgu.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
