import{R as t}from"./iframe-CSHIGO24.js";import{y as f}from"./utils-BzT-BmYK.js";import{B as o}from"./BasicCard-B0AlvnD3.js";import{D as x}from"./Divider-BJrr0_7x.js";import{T as u}from"./Title-DD-hkBtH.js";import"./preload-helper-D6kgxu3v.js";import"./index-D9o_IBDB.js";import"./keys-DUn__9Rb.js";import"./_baseKeys-M7Vo2N44.js";import"./url-BPPPjbgf.js";import"./index-CJICBhoz.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-CKZrskVx.js";import"./blocks-w8dJ1YQn.js";import"./toString-Bo0NWDPD.js";import"./isSymbol-o_qmt3o5.js";import"./Links-CafL-U4g.js";import"./Link--q87Y4xT.js";import"./BackLink-B_Yyczpa.js";import"./useAnalytics-BXouiah_.js";import"./Button-D4kVu4Ie.js";import"./common-B-d9vzfi.js";import"./Icon-B6vCkCWL.js";import"./EventBroker-BUkqEDXA.js";import"./FileLink-BZFjZJlB.js";import"./url-CucA7J2G.js";import"./Label-TwVCvbiA.js";import"./Xmark-Dvo0UFG6.js";import"./YFMWrapper-83tYXoxj.js";import"./HTML-BJ7TR8PG.js";import"./ContentList-Cj4IFdcH.js";import"./Image-1cY1B1hc.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-D0VFWH5c.js";import"./Buttons-DxKXZACa.js";import"./Button-xSlbFkt-.js";import"./addComponentKeysets-CTx152n8.js";import"./Link-CDr1RSvp.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BBCWZ1La.js";import"./Col-EhcK5oGd.js";import"./CardBase-B12Noo9U.js";import"./BackgroundImage-iEhUYCfT.js";import"./RouterLink-YCdVlFyz.js";import"./Tag-DM0nkjRR.js";import"./IconWrapper-BS8fUrP2.js";import"./ToggleArrow-rtMqk4Ta.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
