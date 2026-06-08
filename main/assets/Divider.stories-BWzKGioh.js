import{R as t}from"./iframe-DYok6xSL.js";import{y as f}from"./utils-n_sjovQb.js";import{B as o}from"./BasicCard-_frguUPR.js";import{D as x}from"./Divider-CnEryZT_.js";import{T as u}from"./Title-1uMZOc2-.js";import"./preload-helper-D6kgxu3v.js";import"./index-Dk1A8Fot.js";import"./keys-MCFaOSc2.js";import"./_baseKeys-DUSOks_L.js";import"./url-CT9G2Uib.js";import"./index-CbI5LxBR.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-CI4d_nQ8.js";import"./blocks-gKsIyNnc.js";import"./toString--g0fHESo.js";import"./isSymbol-BRGdWdag.js";import"./Links-DkJNduqx.js";import"./Link-D0ANwLHg.js";import"./BackLink-DqcUqTrl.js";import"./useAnalytics-BFdXDbDf.js";import"./Button-BJ4KXDfs.js";import"./common-BONHREwO.js";import"./Icon-CXeDd60C.js";import"./EventBroker-B1NV6VAF.js";import"./FileLink-BbBm9eqm.js";import"./url-C6vKcs5u.js";import"./Label-cHomXeFg.js";import"./Xmark-D6pbkAt6.js";import"./YFMWrapper-JJG2SpbW.js";import"./HTML-BBriN-Yw.js";import"./ContentList-CZ-jLTE0.js";import"./Image-DxTrwjW9.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DBVYSvVi.js";import"./Buttons-CkBjzFaj.js";import"./Button-BRvNOW8p.js";import"./addComponentKeysets-D6QXT1-L.js";import"./Link-bk2BtOv4.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-ON8NhfZq.js";import"./Col-BEOpsAwF.js";import"./CardBase-DUF6RQZs.js";import"./BackgroundImage-COA6Zm2g.js";import"./RouterLink-vjkbbPm4.js";import"./Tag-mCQH_gBq.js";import"./IconWrapper-CHuLZF0w.js";import"./ToggleArrow-DKjiObxw.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
