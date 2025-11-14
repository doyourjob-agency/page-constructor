import{R as t}from"./iframe-CNyLc81k.js";import{y as f}from"./utils-D6tD900k.js";import{B as o}from"./BasicCard-CQQItvoX.js";import{D as x}from"./Divider-CcucfR-B.js";import{T as u}from"./Title-CmTcjkoH.js";import"./preload-helper-D6kgxu3v.js";import"./index-BoFjKb74.js";import"./keys-aecgl7QV.js";import"./_baseKeys-CtS2LscG.js";import"./url-BiG7VUnV.js";import"./index-x1UFUjyf.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-B2EdLU42.js";import"./blocks-DtXn8q9s.js";import"./toString-C864pDHJ.js";import"./isSymbol-DRCZfMJh.js";import"./Links-CvQZgAKx.js";import"./Link-CoPHGnun.js";import"./BackLink-BOmywglr.js";import"./useAnalytics-w3BkaTgS.js";import"./Button-Bn_KeD8G.js";import"./common-D6njznPK.js";import"./Icon-q94C9F2J.js";import"./EventBroker-D6yBhuLz.js";import"./FileLink-BFm-L3Du.js";import"./url-H2P1kp4V.js";import"./Label-CNPPsjR8.js";import"./Xmark-Dl4arM9a.js";import"./HTML-mDKuARf-.js";import"./ContentList-Bvfi65Td.js";import"./Image-SyMIXe6O.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-D5LhvXoz.js";import"./v4-Dv1xt2bl.js";import"./Buttons-WLLVl72N.js";import"./Button-BZoduG31.js";import"./addComponentKeysets-BSXrLYmM.js";import"./Link-CWHbdWAJ.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CbvxdoLb.js";import"./Col-D6ZOxBDV.js";import"./CardBase-BYoxcmEi.js";import"./BackgroundImage-Dqmn4wBp.js";import"./RouterLink-D6Pt-Sgh.js";import"./Tag-BcBQFmba.js";import"./IconWrapper-Dg74taGK.js";import"./ToggleArrow-C62PXSej.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
