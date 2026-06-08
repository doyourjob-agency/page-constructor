import{R as t}from"./iframe-BPLGfZvu.js";import{y as f}from"./utils-akeezvLv.js";import{B as o}from"./BasicCard-C04zlUP2.js";import{D as x}from"./Divider-CnAGS-1k.js";import{T as u}from"./Title-t5g-ZaCF.js";import"./preload-helper-D6kgxu3v.js";import"./index-Bh7vKBWX.js";import"./keys-B58iaTBq.js";import"./_baseKeys-B-qbbkOW.js";import"./url-BLkRbTa5.js";import"./index-DM3ZXHHb.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-DFO_u3qM.js";import"./blocks-BCuVnw3E.js";import"./toString-CcstdTXA.js";import"./isSymbol-DPra08C-.js";import"./Links-BC80cWJO.js";import"./Link-CqnztBuA.js";import"./BackLink-ByJFSuK7.js";import"./useAnalytics-DISpSJkH.js";import"./Button-CS8gGHxl.js";import"./common--mf6sN3W.js";import"./Icon-DZYKC5Rt.js";import"./EventBroker-CD7iHIP7.js";import"./FileLink-l9QF3KH2.js";import"./url-d4fMy-cL.js";import"./Label-Fj6Jg2nF.js";import"./Xmark-DckWcB6Y.js";import"./YFMWrapper-BLyI4qVe.js";import"./HTML-DDW8KNVz.js";import"./ContentList-BWngoFIY.js";import"./Image-FZ5Foyov.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-ImGgC0Fs.js";import"./Buttons-Dixru0yy.js";import"./Button-BnHqsjfx.js";import"./addComponentKeysets-BHICUdLb.js";import"./Link-BMRs-zDu.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BSTEsXXW.js";import"./Col-bjMvaJ7q.js";import"./CardBase-DsaaQf0T.js";import"./BackgroundImage-B5h-l__H.js";import"./RouterLink-DEsV4Qgp.js";import"./Tag-CZfbr0fC.js";import"./IconWrapper-CpBM7Mqs.js";import"./ToggleArrow-DFvfdz7y.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
