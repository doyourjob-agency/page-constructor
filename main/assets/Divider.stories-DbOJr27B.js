import{R as t}from"./iframe-DGgzfL6U.js";import{y as f}from"./utils-lhAPu0Co.js";import{B as o}from"./BasicCard-BVFA1l3A.js";import{D as x}from"./Divider-DjGN6pen.js";import{T as u}from"./Title-DlJGmrYi.js";import"./preload-helper-D6kgxu3v.js";import"./index-C6PF7iOX.js";import"./keys-oal7_pRq.js";import"./_baseKeys-CWn3Vyku.js";import"./url-B2ykXl4v.js";import"./index-DHqbscGT.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-DrNq68Rv.js";import"./blocks-C5GpFAlR.js";import"./toString-DoCwUTHG.js";import"./isSymbol-GDU25cqB.js";import"./Links-DdsNxKne.js";import"./Link-CZLB3xZg.js";import"./BackLink-BsWk--AJ.js";import"./useAnalytics-DQRY_cCL.js";import"./Button-CNTSkXy2.js";import"./common-CM8DMeBS.js";import"./Icon-CeAZcn-x.js";import"./EventBroker-B4f2Ys-b.js";import"./FileLink-C4B91Kyi.js";import"./url-Bzkl_Kvd.js";import"./Label-B3eq49_o.js";import"./Xmark-Ruuf55mK.js";import"./HTML-D9ll8RJl.js";import"./ContentList-Cdhe-wR8.js";import"./Image-bxbAUMfE.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-C4ijf4W0.js";import"./v4-Dv1xt2bl.js";import"./Buttons-8DH1X0qN.js";import"./Button-4MQj9w9f.js";import"./addComponentKeysets-Bc_Ebot7.js";import"./Link-C2DOYP2n.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-WjPXGmEK.js";import"./Col-DzvKYAjD.js";import"./CardBase-DSnRn4Tp.js";import"./BackgroundImage-CgjMI90k.js";import"./RouterLink-BFZSadj9.js";import"./Tag-DDkgc_Y_.js";import"./IconWrapper-SQUkWmlb.js";import"./ToggleArrow-c74a_dwV.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
