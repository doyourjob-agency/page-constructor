import{R as t}from"./iframe-CxsSz3cV.js";import{y as f}from"./utils--teZRdSy.js";import{B as o}from"./BasicCard-Dnvl-3wH.js";import{D as x}from"./Divider-B1Th2JsK.js";import{T as u}from"./Title-gOpnBFL_.js";import"./preload-helper-D6kgxu3v.js";import"./index-CuEVrrfR.js";import"./keys-C1bBjfB-.js";import"./_baseKeys-CTqaiXro.js";import"./url-DP9yw_QG.js";import"./index-CL-L1Jq7.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-BzXYiqPc.js";import"./blocks-CWa6Q9R9.js";import"./toString-DzfqoUjG.js";import"./isSymbol-DvXN4pSY.js";import"./Links-B7-e_WHX.js";import"./Link-4ImV6Eob.js";import"./BackLink-DdgVK0Sl.js";import"./useAnalytics-D-341Hte.js";import"./Button-51ZrbQuR.js";import"./common-BJaift2B.js";import"./Icon-CJJ34xp_.js";import"./EventBroker-D48J4bON.js";import"./FileLink-Dq2WGj-N.js";import"./url-BBYz0tt7.js";import"./Label-CIbVnG6o.js";import"./Xmark-CFlyH_IR.js";import"./HTML-wSf2OpM6.js";import"./ContentList-DkVh_XPM.js";import"./Image-ClFePO3I.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-C-N9WWGQ.js";import"./v4-Dv1xt2bl.js";import"./Buttons-BWXRwcab.js";import"./Button-B9R2DiLy.js";import"./addComponentKeysets-DmVTfMJF.js";import"./Link-DwL71LRm.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CEIczxJ8.js";import"./Col-BMHH0Iis.js";import"./CardBase-IT_hAVGi.js";import"./BackgroundImage-DQRZHI0i.js";import"./RouterLink-DyJpHZmO.js";import"./Tag-BXVPHGyV.js";import"./IconWrapper-D3pesfaO.js";import"./ToggleArrow-Bk_RvOkA.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
