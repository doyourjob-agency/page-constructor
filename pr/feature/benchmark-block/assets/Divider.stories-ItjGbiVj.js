import{R as t}from"./iframe-BvaOB5qp.js";import{y as f}from"./utils-_iUlSmCU.js";import{B as o}from"./BasicCard-DhQiyium.js";import{D as x}from"./Divider-BLt8uK8f.js";import{T as u}from"./Title-Bc2BNlgK.js";import"./preload-helper-D6kgxu3v.js";import"./index-DARQ4ljs.js";import"./keys-BgHaY64V.js";import"./_baseKeys-DTd4M8az.js";import"./url-wNcGP8z-.js";import"./index-BIDTNtJO.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-eEm2m7GP.js";import"./blocks-DXXjg1XP.js";import"./toString-CB34UKdc.js";import"./isSymbol-hsXZpMcH.js";import"./Links-D_zAry6r.js";import"./Link-Tiqend8N.js";import"./BackLink-Di63VNOc.js";import"./useAnalytics-CV9fMx5v.js";import"./Button-AodgtmVe.js";import"./common-fq5RY7gx.js";import"./Icon-Dg_-JNZY.js";import"./EventBroker-CC1pQJ3b.js";import"./FileLink-CjtnbShB.js";import"./url-CgvSuc_C.js";import"./Label-J6ECYvUc.js";import"./Xmark-1ZxYn7lp.js";import"./HTML-PU6CWiLR.js";import"./ContentList-Br6xOVdu.js";import"./Image-CjBMA2Rv.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-C4iZQs2T.js";import"./v4-Dv1xt2bl.js";import"./Buttons-qrGErEiC.js";import"./Button-DXBmblEF.js";import"./addComponentKeysets-CHE_W3kc.js";import"./Link-DAd3P-7e.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-khNSuayw.js";import"./Col-ByiKn_d8.js";import"./CardBase-CwrNav4O.js";import"./BackgroundImage-CwnG85_U.js";import"./RouterLink-B5i1_KO6.js";import"./Tag-C213BoGo.js";import"./IconWrapper-B8Jw4stn.js";import"./ToggleArrow-6KEpKOLD.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
