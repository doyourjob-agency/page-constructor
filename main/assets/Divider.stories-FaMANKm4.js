import{R as t}from"./iframe-3Xgsm2R7.js";import{y as f}from"./utils-DX-onGT1.js";import{B as o}from"./BasicCard-DfESbHq5.js";import{D as x}from"./Divider-8bGaZNU6.js";import{T as u}from"./Title-BMha08Pj.js";import"./preload-helper-D6kgxu3v.js";import"./index-CHmuhFjp.js";import"./keys-BEEGgkLl.js";import"./_baseKeys-BWTwp3ga.js";import"./url-B9lqczov.js";import"./index-Dkn6ETI4.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-BujRwR2w.js";import"./blocks-DHLKdDYp.js";import"./toString-DsO2m150.js";import"./isSymbol-CjJxYBIY.js";import"./Links-Rp4IiuDw.js";import"./Link-2hwo27Lv.js";import"./BackLink-CJgQoFaL.js";import"./useAnalytics-BRZFlLer.js";import"./Button-B02LV3kF.js";import"./common-CKjY_IWC.js";import"./Icon-BzmIAUHo.js";import"./EventBroker-DxsD-Q29.js";import"./FileLink-kNxEoms1.js";import"./url-BhtJRHxu.js";import"./Label-DvRA1WWP.js";import"./Xmark-DhRSIxMz.js";import"./YFMWrapper-CHqz73u8.js";import"./HTML-CddMi3WF.js";import"./ContentList-CV34w2ZM.js";import"./Image-B4Ke9y7d.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-Cy5679oG.js";import"./Buttons-BgxFYRjx.js";import"./Button-C8yof6Zk.js";import"./addComponentKeysets-BYVj-zao.js";import"./Link-Cu0bG_AD.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DgGlJ-Im.js";import"./Col-a6yH-OjQ.js";import"./CardBase-BIEEOiY1.js";import"./BackgroundImage-DzJ42nxs.js";import"./RouterLink-DvLUj_OI.js";import"./Tag-DkRij1nt.js";import"./IconWrapper-CPR02eQD.js";import"./ToggleArrow-B7Dx8uf2.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
