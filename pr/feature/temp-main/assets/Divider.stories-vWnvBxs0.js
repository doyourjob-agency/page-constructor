import{R as t}from"./iframe-DRJB9DOi.js";import{y as f}from"./utils-DiHK7FQ9.js";import{B as o}from"./BasicCard-FS8RAUs1.js";import{D as x}from"./Divider-Bl-TH06C.js";import{T as u}from"./Title-Dj5UEnbe.js";import"./preload-helper-D6kgxu3v.js";import"./index-SYZItqsu.js";import"./keys-ByhhLBSt.js";import"./_baseKeys-BHH2eF3g.js";import"./url-D1dqGee9.js";import"./index-YPULCYHi.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-BW-zwvyK.js";import"./blocks-DPHJXy_w.js";import"./toString-DvdP9RP-.js";import"./isSymbol-rjogZFoN.js";import"./Links-CP2rv0Jy.js";import"./Link-CH8epIsN.js";import"./BackLink-C54IC7Ov.js";import"./useAnalytics-ClMppTa0.js";import"./Button-a1hpr60A.js";import"./common-22wXTvIS.js";import"./Icon-C9K7knzX.js";import"./EventBroker-Jbfs5IhY.js";import"./FileLink-BkW_3P8z.js";import"./url-B7O2VCCl.js";import"./Label-B6KSgnEW.js";import"./Xmark-DOAoSKao.js";import"./HTML-DHwFGal3.js";import"./ContentList-aDJYCow_.js";import"./Image-CZ3laG8g.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DOQHo2Db.js";import"./v4-Dv1xt2bl.js";import"./Buttons-pP2LZ6ke.js";import"./Button-n2CCxHyW.js";import"./addComponentKeysets-BFsa1wJA.js";import"./Link-eyplhqJS.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BELCZusw.js";import"./Col-gz52Gh_v.js";import"./CardBase-DhVcybDv.js";import"./BackgroundImage-K5l3TQSX.js";import"./RouterLink-9_Wy5957.js";import"./Tag-DnrYApyr.js";import"./IconWrapper-JOeZhdkn.js";import"./ToggleArrow-0Ywy3TDb.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
