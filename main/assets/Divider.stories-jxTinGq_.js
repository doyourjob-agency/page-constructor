import{R as t}from"./iframe-BXOB1wP-.js";import{y as f}from"./utils-C5bijpim.js";import{B as o}from"./BasicCard-BvjMVRuC.js";import{D as x}from"./Divider-D2-WJZ0q.js";import{T as u}from"./Title-BpOmNkuN.js";import"./preload-helper-D6kgxu3v.js";import"./index-hKoRjhDq.js";import"./keys-Di6VHrDr.js";import"./_baseKeys-BRXUiQJE.js";import"./url-DTLcnqfo.js";import"./index-ezIXLAxk.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-B3jHiR2u.js";import"./Content-Tpbi_PbI.js";import"./blocks-V0OdSe5U.js";import"./toString-BuDUPcjf.js";import"./isSymbol-Bi-URaj4.js";import"./Links-m_LKqQ9G.js";import"./Link-wrk3HjZP.js";import"./BackLink-CLkAQn0T.js";import"./useAnalytics-CHObcxzk.js";import"./Button-LMW6wSoO.js";import"./common-rGq4trUn.js";import"./Icon-Bn262Czk.js";import"./EventBroker-ByqXyY6D.js";import"./FileLink-t8eovoc_.js";import"./url-DGEXBrfG.js";import"./Label-BIv4e6ZV.js";import"./Xmark-BnvU7gmq.js";import"./YFMWrapper-CvjmkL5r.js";import"./HTML-CPYZFUQt.js";import"./ContentList-PqTYdOPB.js";import"./Image-Dnj9eDUW.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CjoVFuHf.js";import"./Buttons-CMd8y3Z0.js";import"./Button-DCTMYOAp.js";import"./addComponentKeysets-BUcreD4X.js";import"./Link-BPLnWcE0.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BZcwn_ag.js";import"./Col-Ds9ML3rk.js";import"./CardBase-Dyemjwx3.js";import"./BackgroundImage-DLZTGeBq.js";import"./RouterLink-CL583ER-.js";import"./Tag-DPJt6IHf.js";import"./IconWrapper-DtquAVBY.js";import"./ToggleArrow-Pf1JRih6.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
