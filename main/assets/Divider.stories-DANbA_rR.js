import{R as t}from"./iframe-BIWTu3Ge.js";import{y as f}from"./utils-BjVR3S5F.js";import{B as o}from"./BasicCard-DqLN76HM.js";import{D as x}from"./Divider-JB1_lN7q.js";import{T as u}from"./Title-4JunlczK.js";import"./preload-helper-D6kgxu3v.js";import"./index-D8QPCyFX.js";import"./keys-XeWnFzy1.js";import"./_baseKeys-D1maE5BM.js";import"./url-B1SYTAZT.js";import"./index-Cy7oNJZS.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-CmQZc5eF.js";import"./blocks-BvGrmqnh.js";import"./toString-CIHdfo9_.js";import"./isSymbol-C9jFEgxX.js";import"./Links-Ca4ut0F4.js";import"./Link-DG5LmIhl.js";import"./BackLink-BLBJofqz.js";import"./useAnalytics-BiIh9OS6.js";import"./Button-CM1UrX7Y.js";import"./common-DqWuBMKk.js";import"./Icon-BS8Qxjx6.js";import"./EventBroker-BaAMSv1f.js";import"./FileLink-CUvyk23R.js";import"./url-BrbVsJXI.js";import"./Label-CN3KhyAc.js";import"./Xmark-1BXhc63S.js";import"./HTML-UUD7JOWs.js";import"./ContentList-bt3y7hGL.js";import"./Image-ixKDBh_m.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-B0Y_9hWQ.js";import"./v4-Dv1xt2bl.js";import"./Buttons-DilmWFtg.js";import"./Button-CfxcDiSv.js";import"./addComponentKeysets-CkJxh0wt.js";import"./Link-Dvl2Vg2b.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BSn8NbGw.js";import"./Col-Dx9JBVxZ.js";import"./CardBase-BNyjlOaV.js";import"./BackgroundImage-DTrFXs-t.js";import"./RouterLink-CE6CHYfO.js";import"./Tag-DZAfY_Zf.js";import"./IconWrapper-BAQRQKZH.js";import"./ToggleArrow-kUDZw5-H.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
