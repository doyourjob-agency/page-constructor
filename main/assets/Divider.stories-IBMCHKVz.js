import{R as t}from"./iframe-RT1uZjBF.js";import{y as f}from"./utils-CC7bGB6E.js";import{B as o}from"./BasicCard-B_6Jogwn.js";import{D as x}from"./Divider-D4iHNlim.js";import{T as u}from"./Title-ClP5_mIh.js";import"./preload-helper-D6kgxu3v.js";import"./index-oZJbNiVr.js";import"./keys-B1OKkFBY.js";import"./_baseKeys-Cvj748t8.js";import"./url-BQcI6WT8.js";import"./index-auZ-PnIQ.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-BSnjVsfi.js";import"./blocks-B6NHQMBG.js";import"./toString-CeK4ZmMG.js";import"./isSymbol-BAZ7xMzx.js";import"./Links-BVklxwfe.js";import"./Link-CJmiLcec.js";import"./BackLink-B365M0vg.js";import"./useAnalytics-O3T58eD_.js";import"./Button-pjx9P1nq.js";import"./common-Dv6_0CLi.js";import"./Icon-oWWDX33i.js";import"./EventBroker-DiUmHHIo.js";import"./FileLink-DcR5vE1Y.js";import"./url-oIDzN3I0.js";import"./Label-BGtNQjDc.js";import"./Xmark-Cplneluw.js";import"./YFMWrapper-By7fcOI7.js";import"./HTML-C4ciMbMU.js";import"./ContentList-BhPk_VI_.js";import"./Image-CAKpDJV3.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-bH94RA1p.js";import"./Buttons-BJMR8DX3.js";import"./Button-DzEWNFrZ.js";import"./addComponentKeysets-C0lngsHu.js";import"./Link-DfZGawI4.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CzcZQbKn.js";import"./Col-BJICURgi.js";import"./CardBase-COQuoS9S.js";import"./BackgroundImage-DEQ01Vil.js";import"./RouterLink-CEhMlwMQ.js";import"./Tag-CHGNdzD6.js";import"./IconWrapper-D3QlGdkg.js";import"./ToggleArrow-4YdGqCz5.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
