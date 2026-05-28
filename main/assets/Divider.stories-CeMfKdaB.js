import{R as t}from"./iframe-DjbUt4Dz.js";import{y as f}from"./utils-DuRDvu3L.js";import{B as o}from"./BasicCard-BGEZb2uV.js";import{D as x}from"./Divider-erDPBPq1.js";import{T as u}from"./Title-CgNu8cMR.js";import"./preload-helper-D6kgxu3v.js";import"./index-CnommWYk.js";import"./keys-yrHDNkux.js";import"./_baseKeys-C724Hgpn.js";import"./url-D5VwZcHC.js";import"./index-BOmpWQQl.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-Dk2edqYr.js";import"./Content-Ckz6by1c.js";import"./blocks-Dtzx5jRQ.js";import"./toString-BFA3iQD7.js";import"./isSymbol-CugihKx9.js";import"./Links-BuTTFy7H.js";import"./Link-Dh_EUTtU.js";import"./BackLink-CoiiQ7Ei.js";import"./useAnalytics-BufmO_ia.js";import"./Button-Utd4Qzec.js";import"./common-CvR0wiTv.js";import"./Icon-D0E3x6GI.js";import"./EventBroker-FACifITn.js";import"./FileLink-DqsdMfBF.js";import"./url-BcMjD-JK.js";import"./Label-BtzWIFvo.js";import"./Xmark-CPtfs38v.js";import"./HTML-DbFP9Rjj.js";import"./ContentList-CEaQ8k0B.js";import"./Image-CP-zP-al.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-u2jfJihJ.js";import"./Buttons-C_ZXNnQi.js";import"./Button-CXuuL3ut.js";import"./addComponentKeysets-6hCRZKDt.js";import"./Link-DEMyCKR4.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-hEXYgB-h.js";import"./Col-BvnGBuSJ.js";import"./CardBase-DuyuYGGx.js";import"./BackgroundImage-C031GB2Q.js";import"./RouterLink-Bdqv75zY.js";import"./Tag-2alSxUA9.js";import"./IconWrapper-DABOPsd8.js";import"./ToggleArrow-C3cl0vst.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
    </div>`,...(c=(d=m.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const ft=["Default","Sizes"];export{r as Default,m as Sizes,ft as __namedExportsOrder,vt as default};
