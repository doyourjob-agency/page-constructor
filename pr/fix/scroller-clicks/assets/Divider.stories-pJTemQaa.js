import{R as t}from"./iframe-DVq1ok63.js";import{y as f}from"./utils-Ddh3OFri.js";import{B as o}from"./BasicCard-CvwsGYNB.js";import{D as x}from"./Divider-JH-Kx3Rr.js";import{T as u}from"./Title-_tZ1tQTf.js";import"./preload-helper-D6kgxu3v.js";import"./index-D07rj7mr.js";import"./keys-CnhKCF-o.js";import"./_baseKeys-CzLkwgcq.js";import"./url-BTLG7dvn.js";import"./index-B2OGhjeT.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-B3jHiR2u.js";import"./Content-BH9yRqp1.js";import"./blocks-DxBTodkc.js";import"./toString-HHkgAN9b.js";import"./isSymbol-CEIMpQ72.js";import"./Links-YZYvTDyJ.js";import"./Link-BLi79YLk.js";import"./BackLink-Czv6VAPw.js";import"./useAnalytics-CgMjIrcM.js";import"./Button-BgaiDU2T.js";import"./common-C7_FYAcj.js";import"./Icon-BjJD22Q6.js";import"./EventBroker-CCdrE86l.js";import"./FileLink-CxPkmAWM.js";import"./url-BNxn35sU.js";import"./Label-0fjaMqn7.js";import"./Xmark-pWu8RNlY.js";import"./YFMWrapper-DIvSJ018.js";import"./HTML-D0uJGIAU.js";import"./ContentList-70TgvVRu.js";import"./Image-DgrGSjei.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-f08-mOxs.js";import"./Buttons-CUwj2FtV.js";import"./Button-DkDj7Vn0.js";import"./addComponentKeysets-DZL0N-lU.js";import"./Link-BzCqmWHN.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BHyBHEJw.js";import"./Col-CCQ07hJx.js";import"./CardBase-D-gWJAW0.js";import"./BackgroundImage-BC2d8QQg.js";import"./RouterLink-4iNCJfc9.js";import"./Tag-DFymx95M.js";import"./IconWrapper-CitqX4sr.js";import"./ToggleArrow-BDEqPfZI.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
