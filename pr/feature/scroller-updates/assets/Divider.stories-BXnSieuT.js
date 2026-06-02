import{R as t}from"./iframe-C5PVum5A.js";import{y as f}from"./utils-D7XO7EvA.js";import{B as o}from"./BasicCard-D4NJivma.js";import{D as x}from"./Divider-LGtcKIgF.js";import{T as u}from"./Title-B4WqTcLe.js";import"./preload-helper-D6kgxu3v.js";import"./index-C3BUckMV.js";import"./keys-BbywiQ0c.js";import"./_baseKeys-93pkdv-c.js";import"./url-CppSau3q.js";import"./index-DzdffKBz.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-B3jHiR2u.js";import"./Content-M7QCH5cR.js";import"./blocks-Ci37h_GT.js";import"./toString-C_yW1Tm8.js";import"./isSymbol-rMube_GL.js";import"./Links-CpTM8y1d.js";import"./Link-CLRIz1Vs.js";import"./BackLink--J2GdHRZ.js";import"./useAnalytics-COTaxM25.js";import"./Button-dQOLzihJ.js";import"./common-CDC9MY58.js";import"./Icon-CsZ-t_Ee.js";import"./EventBroker-BxnDE9pM.js";import"./FileLink-Dt-BSHyx.js";import"./url-DTLXvCCp.js";import"./Label-3rI00lEi.js";import"./Xmark-Bp3wlSEN.js";import"./YFMWrapper-C4tc1f02.js";import"./HTML-C5juC1b2.js";import"./ContentList-cpmWffaL.js";import"./Image-i6gMwNL-.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CdF2XsuB.js";import"./Buttons-ClUVwy7K.js";import"./Button-ClhUMcbG.js";import"./addComponentKeysets-CLKSjGVv.js";import"./Link-Bl6YMK-Z.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-2nkS0qQw.js";import"./Col-DW1uFksh.js";import"./CardBase-CbqDOKqN.js";import"./BackgroundImage-4LXC-sqA.js";import"./RouterLink-Q4lUqkz_.js";import"./Tag-BtdTREow.js";import"./IconWrapper-0HJlnXk-.js";import"./ToggleArrow-C25REiuO.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
