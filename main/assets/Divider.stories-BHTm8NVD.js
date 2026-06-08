import{R as t}from"./iframe-BhyssZJ4.js";import{y as f}from"./utils-6p8LqB4r.js";import{B as o}from"./BasicCard-ueF9VRez.js";import{D as x}from"./Divider-CKZH7oFo.js";import{T as u}from"./Title-C5eC3iWF.js";import"./preload-helper-D6kgxu3v.js";import"./index-DA4bXdpd.js";import"./keys-BokfzqKE.js";import"./_baseKeys-DSeGfisY.js";import"./url-UZcnx5sy.js";import"./index-BFPsqj4P.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-DW9MtW5b.js";import"./blocks-B-hFiIxi.js";import"./toString-R6N7Sbu3.js";import"./isSymbol-DcYFsOW2.js";import"./Links-DTUo6AjT.js";import"./Link-Ccrmz69r.js";import"./BackLink-CtcOFCaT.js";import"./useAnalytics-L-uzlo86.js";import"./Button-CnnmsOAN.js";import"./common-CnG62cHR.js";import"./Icon-BKc7Gsk2.js";import"./EventBroker-q74vlEnl.js";import"./FileLink-BOCMTyA6.js";import"./url-C1-Lf31N.js";import"./Label-B8H-rBJS.js";import"./Xmark-BGSuHTbU.js";import"./YFMWrapper-ODKP7-K-.js";import"./HTML-Dnd9Pnsw.js";import"./ContentList-DbjiBdjS.js";import"./Image-CBtdYRuy.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-SpEw9ed_.js";import"./Buttons-BMPj6TTK.js";import"./Button-CZTnYGIv.js";import"./addComponentKeysets-Co99sK_a.js";import"./Link-Bk9_NDE4.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BGzTbxVZ.js";import"./Col-DNUXFTPX.js";import"./CardBase-6geUFcvE.js";import"./BackgroundImage-CW4tN-Ic.js";import"./RouterLink-B2afPafR.js";import"./Tag-Dhot7mbS.js";import"./IconWrapper-CcdlpqF7.js";import"./ToggleArrow-DQgL3xN4.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
