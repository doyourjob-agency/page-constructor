import{R as t}from"./iframe-BNa9vE1W.js";import{y as f}from"./utils-DXkiwUEY.js";import{B as o}from"./BasicCard-B2spDrNC.js";import{D as x}from"./Divider-BntLP074.js";import{T as u}from"./Title-B4LYIZrd.js";import"./preload-helper-D6kgxu3v.js";import"./index-DDaf_aRS.js";import"./keys-BLs_6Wef.js";import"./_baseKeys-DQctpg_O.js";import"./url-CkNG3bLO.js";import"./index-BrqjQzJ3.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-Dvoc6VHu.js";import"./blocks-s2nmDVyq.js";import"./toString-DUUzmjct.js";import"./isSymbol-Cr-W1mjy.js";import"./Links-CFb2px0b.js";import"./Link-DVtUpzym.js";import"./BackLink-BFHEydww.js";import"./useAnalytics-iqoOU-VZ.js";import"./Button-Byc75kGQ.js";import"./common-DjWQ177a.js";import"./Icon-DfYBfwUw.js";import"./EventBroker-CfijIRQt.js";import"./FileLink-6QLy3mhU.js";import"./url-qJJ49rqM.js";import"./Label-c8Pnp_dN.js";import"./Xmark-D-HFUSsI.js";import"./HTML-CjWafu3l.js";import"./ContentList-wG-J1nxa.js";import"./Image-DssKZYnK.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-C13mpq1_.js";import"./v4-Dv1xt2bl.js";import"./Buttons-_DjtyuBs.js";import"./Button-xqP2d4Gz.js";import"./addComponentKeysets-DYXxdvQb.js";import"./Link-DHCPepUU.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BtlLdTU3.js";import"./Col-DG3YgJrR.js";import"./CardBase-etz9Hicp.js";import"./BackgroundImage-BdKPOX45.js";import"./RouterLink-Dd_PbbTL.js";import"./Tag-DBLUnFau.js";import"./IconWrapper-DzWAbG1j.js";import"./ToggleArrow-oGGj5_8o.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
