import{R as t}from"./iframe-pk-b6_Hl.js";import{y as f}from"./utils-mXYhh5_k.js";import{B as o}from"./BasicCard-Boe6mBlj.js";import{D as x}from"./Divider-yQULaTHA.js";import{T as u}from"./Title-vXc3ouH5.js";import"./preload-helper-D6kgxu3v.js";import"./index-uC-p-mo8.js";import"./keys-CRkNbtW4.js";import"./_baseKeys-DmDnNlgR.js";import"./url-DGQ9UOc_.js";import"./index-DcOHRf01.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-o1ZGTs2h.js";import"./blocks-DLNYBvOK.js";import"./toString-DESiIFTE.js";import"./isSymbol-DdZ4aVra.js";import"./Links-sWQ-2KE8.js";import"./Link-krmgHv5-.js";import"./BackLink-CjfdlP7d.js";import"./useAnalytics-Dn9awHIl.js";import"./Button-DrRRpL3a.js";import"./common-BaILem-5.js";import"./Icon-5M_EHZzi.js";import"./EventBroker-X2Eiso8y.js";import"./FileLink-DtbNwOV1.js";import"./url-giHkRsHs.js";import"./Label-CjGgBEax.js";import"./Xmark-CNIoO1Ny.js";import"./YFMWrapper-C0fxXp3t.js";import"./HTML-ClqEvS4Q.js";import"./ContentList-Cv5pEDC3.js";import"./Image-90ud9gRz.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DyfFvJIJ.js";import"./Buttons-BwYK3ud6.js";import"./Button-aGRlSZg0.js";import"./addComponentKeysets-DatOJNPv.js";import"./Link-Bp7Pz0cV.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CxSJp5-y.js";import"./Col-YdNlP4Bj.js";import"./CardBase-CxdgIuAT.js";import"./BackgroundImage-RSH4kvM6.js";import"./RouterLink-Bk3djorB.js";import"./Tag-ChNrFz2u.js";import"./IconWrapper-BtPUSsQx.js";import"./ToggleArrow-DFPKMfiV.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
