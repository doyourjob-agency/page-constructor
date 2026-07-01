import{R as t}from"./iframe-BWYhlPBH.js";import{y as f}from"./utils-BbOnFdGG.js";import{B as o}from"./BasicCard-CezuIu1o.js";import{D as x}from"./Divider-CCPzha4x.js";import{T as u}from"./Title-DbVxNrNQ.js";import"./preload-helper-D6kgxu3v.js";import"./index-BKSJ1NQ4.js";import"./keys-D3bqbVlh.js";import"./_baseKeys-B-i5-eOc.js";import"./url-CV9EZKJk.js";import"./index-BxwBtQ5J.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-CjKgzi_j.js";import"./blocks-B_gmVVXk.js";import"./toString-PcVQ1pou.js";import"./isSymbol-CawaKS3n.js";import"./Links-CzMGhqjT.js";import"./Link-C2r3sDBD.js";import"./BackLink-o5HfuRjA.js";import"./useAnalytics-BobNDWVh.js";import"./Button-BD_BV0Up.js";import"./common-B09zcW6Y.js";import"./Icon-qHeRf_ZT.js";import"./EventBroker-C2ees1NJ.js";import"./FileLink-CdWRa0So.js";import"./url-BfCNPr0D.js";import"./Label-BHSBgCgv.js";import"./Xmark-CyQJlEqR.js";import"./YFMWrapper-Cif6JmpK.js";import"./HTML-BbUTrEXU.js";import"./ContentList-Vmqh5OVj.js";import"./Image-CPnDw9K3.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-Bd8t3RZJ.js";import"./Buttons-DyaDVZaN.js";import"./Button-CEQ1JUK7.js";import"./addComponentKeysets-DIU5W964.js";import"./Link-Cr3cB5tX.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-xz_EMJkn.js";import"./Col-C4Mb3ImE.js";import"./CardBase-C66VfsLp.js";import"./BackgroundImage-h9w3LbTr.js";import"./RouterLink-Cfldj5-V.js";import"./Tag-CBhB8ysg.js";import"./IconWrapper-DLZvkkpe.js";import"./ToggleArrow-BTeMcPS6.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
