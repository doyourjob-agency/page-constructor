import{R as t}from"./iframe-DRo_f_aj.js";import{y as f}from"./utils-DfGNynGY.js";import{B as o}from"./BasicCard-CWtgpspe.js";import{D as x}from"./Divider-DXwDsvkM.js";import{T as u}from"./Title-Dso7CWru.js";import"./preload-helper-D6kgxu3v.js";import"./index-Bz6xz9bO.js";import"./keys-BhEOV-x9.js";import"./_baseKeys-CJ6SN9n1.js";import"./url-DCbPynNO.js";import"./index-D3GOksxI.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-BS8pdiSu.js";import"./blocks-DlK1sl4v.js";import"./toString-D4m-W0p9.js";import"./isSymbol-DIas3hjf.js";import"./Links-CsNjk7Wh.js";import"./Link-CbEBtHBd.js";import"./BackLink-D64altfv.js";import"./useAnalytics-C6gBmA0Y.js";import"./Button-LF7q7-43.js";import"./common-BkgW8JS_.js";import"./Icon-CO1Eaok0.js";import"./EventBroker-C13kPBkm.js";import"./FileLink-DvVgDDZL.js";import"./url-D-GPN2rQ.js";import"./Label-Cno3_fJd.js";import"./Xmark-DQ4tTWmQ.js";import"./YFMWrapper-DVh4yjlA.js";import"./HTML-U3pPTVYl.js";import"./ContentList-C6IosSW7.js";import"./Image-DwCKcwt7.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CDDJaXk3.js";import"./Buttons-8Y55KNz3.js";import"./Button-DWsjCToE.js";import"./addComponentKeysets-BmkD5-KC.js";import"./Link-B32SqCd9.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BmZP2VwI.js";import"./Col-DacMXaBA.js";import"./CardBase-VXad_Yh5.js";import"./BackgroundImage-yMIBhTr8.js";import"./RouterLink-CCYi0WWh.js";import"./Tag-_lxej4KO.js";import"./IconWrapper-Bb3v9wOU.js";import"./ToggleArrow-DFxArR3c.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
