import{R as t}from"./iframe-Bd2n1cZr.js";import{y as f}from"./utils-DaEr_wrX.js";import{B as o}from"./BasicCard-DSneTqZm.js";import{D as x}from"./Divider-CV4oQOPu.js";import{T as u}from"./Title-Dkf3kxNS.js";import"./preload-helper-D6kgxu3v.js";import"./index-Cu83lP1f.js";import"./keys--ivumU70.js";import"./_baseKeys-UAPdXySB.js";import"./url-jPs2XUm_.js";import"./index-CnuRZPVz.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-CdR0fbEc.js";import"./blocks-Dxm9CgI8.js";import"./toString-WQ9JiCFF.js";import"./isSymbol-qajWRkWJ.js";import"./Links-Bzfip2W0.js";import"./Link-CodMuEil.js";import"./BackLink-D46dKN8W.js";import"./useAnalytics-Ddn5YJhg.js";import"./Button-BAoOar3B.js";import"./common-BCSMGDTP.js";import"./Icon-aCDJsnPZ.js";import"./EventBroker-B0au1jCE.js";import"./FileLink-BwH8Koqk.js";import"./url-Fz6lzcxj.js";import"./Label-Bu2RcodR.js";import"./Xmark-0KqbX_s5.js";import"./HTML-C78dtsWV.js";import"./ContentList-c-ac1kpc.js";import"./Image-BMJcQ2Yh.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CxrUhsao.js";import"./Buttons-wX8Tw3ni.js";import"./Button-WYIO_HvQ.js";import"./addComponentKeysets-DrbAzWe3.js";import"./Link-Dz52MEzn.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-sD8flYp_.js";import"./Col-QVAPoriU.js";import"./CardBase-BPTTqonN.js";import"./BackgroundImage-BPqZsqrk.js";import"./RouterLink-t5f3hlxY.js";import"./Tag-BT4PxcSZ.js";import"./IconWrapper-Huw-R9de.js";import"./ToggleArrow-DPuPIr-S.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
