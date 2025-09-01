import{R as t}from"./iframe-BIrROPec.js";import{y as f}from"./utils-wBZ4Wz_M.js";import{B as o}from"./BasicCard-4fIncnU1.js";import{D as x}from"./Divider-cHbgPH-q.js";import{T as u}from"./Title-B4w32rPJ.js";import"./preload-helper-D6kgxu3v.js";import"./index-5gAdAlKy.js";import"./keys-CBUn_jRI.js";import"./_baseKeys-DCUSgjVr.js";import"./url-C8XLSItv.js";import"./index-BHMA2JL-.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-C_ZmE4BY.js";import"./blocks-BuGiJ6zK.js";import"./toString-Btg-Prfn.js";import"./isSymbol-BERasRob.js";import"./Links-CnCrYPJW.js";import"./Link-DFInF-mp.js";import"./BackLink-3DF0nzn-.js";import"./useAnalytics-D6ITpkEW.js";import"./Button-okqxpufn.js";import"./common-D8dm1gxV.js";import"./Icon-BBupihn-.js";import"./EventBroker-qVauRsRv.js";import"./FileLink-Dl4xw4f3.js";import"./url-s9eHq_Kx.js";import"./Label-BZA4t-x_.js";import"./Xmark-DN_jyISg.js";import"./HTML-gBHx2SYl.js";import"./ContentList-BJKCFMmX.js";import"./Image-DNbkBsmC.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DiUl5QVa.js";import"./v4-Dv1xt2bl.js";import"./Buttons-DiuJMewA.js";import"./Button-GH6pdHms.js";import"./addComponentKeysets-Bxfe0I0P.js";import"./Link-DPUXIT0C.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BmtF8pca.js";import"./Col-C2H9qzey.js";import"./CardBase-BJMw28qU.js";import"./BackgroundImage-S4Zj8irr.js";import"./RouterLink-D_ap_dZE.js";import"./Tag-Db6RKvyT.js";import"./IconWrapper-CzDCVcdx.js";import"./ToggleArrow-CrWIajYX.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
