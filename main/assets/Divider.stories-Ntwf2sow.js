import{R as t}from"./iframe-CDW5htwv.js";import{y as f}from"./utils-CqBWX6Ge.js";import{B as o}from"./BasicCard-BAH08CnA.js";import{D as x}from"./Divider-Cu5ZXGQy.js";import{T as u}from"./Title-wi5lH6_Z.js";import"./preload-helper-D6kgxu3v.js";import"./index-B3TvoucG.js";import"./keys-Du5pxKGt.js";import"./_baseKeys-v9H161xK.js";import"./url-DKAd9qPo.js";import"./index-D1HM_Lyw.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-BH6D6gts.js";import"./blocks-B5PbIC-u.js";import"./toString-DFoGGPO4.js";import"./isSymbol-B58-G4Bi.js";import"./Links-Csz_pUt0.js";import"./Link-ZbyEj2L7.js";import"./BackLink-DDJ0_rOC.js";import"./useAnalytics-BEaMmoQo.js";import"./Button-UcKWdmCA.js";import"./common-BE1kU6EV.js";import"./Icon-BCcGm93T.js";import"./EventBroker-BTgNKV5T.js";import"./FileLink-DayunsSS.js";import"./url-GWlJ0DF5.js";import"./Label-DGajLUBP.js";import"./Xmark-Du0qFySx.js";import"./YFMWrapper-OKUZnpjq.js";import"./HTML-klBTXyjB.js";import"./ContentList-CZJTTiHN.js";import"./Image-BoVoph5t.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-Cg_ekDu9.js";import"./Buttons-BNUSJZos.js";import"./Button-LYyfHfrb.js";import"./addComponentKeysets-DBhpumUg.js";import"./Link-DP_m4TVv.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-kH2WuhYy.js";import"./Col-B7U_SXDH.js";import"./CardBase-DkCzp_gE.js";import"./BackgroundImage-Bszm2JJW.js";import"./RouterLink-Ba5F0fx0.js";import"./Tag-BgZVu94o.js";import"./IconWrapper-CTGKY0Ao.js";import"./ToggleArrow-CUdmJc9o.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
