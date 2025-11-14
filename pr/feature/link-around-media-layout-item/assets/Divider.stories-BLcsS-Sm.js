import{R as t}from"./iframe-BmcTiZgn.js";import{y as f}from"./utils-CVXhSblm.js";import{B as o}from"./BasicCard-DCegJ5bi.js";import{D as x}from"./Divider-DpSJ4O5v.js";import{T as u}from"./Title-BPIN5u3s.js";import"./preload-helper-D6kgxu3v.js";import"./index-D9qo5yx1.js";import"./keys-DgsUR7M1.js";import"./_baseKeys-DZ2BfIwL.js";import"./url-BKFk2PLZ.js";import"./index-bolZf0Il.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-D0viBduD.js";import"./blocks-BcFhD4Pd.js";import"./toString-CM_qhyPF.js";import"./isSymbol-B2osGwNw.js";import"./Links-bDi9Jmn1.js";import"./Link-Dl4sxGNX.js";import"./BackLink-Iw0BrHX0.js";import"./useAnalytics-D9dbAFOe.js";import"./Button-lnvsqm3u.js";import"./common-CDaQrhsw.js";import"./Icon-61rydU3v.js";import"./EventBroker-qMSAdg25.js";import"./FileLink-ZhvCF6HQ.js";import"./url-CN2SW-W1.js";import"./Label-zNsTs5UB.js";import"./Xmark-ByCSp4nP.js";import"./HTML-e7pbNoUc.js";import"./ContentList-SaMB3hHG.js";import"./Image-DJgewlqY.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-C6H1aR_6.js";import"./v4-Dv1xt2bl.js";import"./Buttons-C6SvpbHi.js";import"./Button-B_Wk_HSx.js";import"./addComponentKeysets-CEu34BwB.js";import"./Link-BFP_-_UG.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BWL8U9K8.js";import"./Col-DKqeMt6V.js";import"./CardBase-uyqnqqHy.js";import"./BackgroundImage-ZpoPvN0T.js";import"./RouterLink-C9ejjDSS.js";import"./Tag-DYaHswoA.js";import"./IconWrapper-DkGy2sNT.js";import"./ToggleArrow-pi4TS0Gx.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
