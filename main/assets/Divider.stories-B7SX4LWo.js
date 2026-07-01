import{R as t}from"./iframe-D32YiHLp.js";import{y as f}from"./utils-CbdS1-mM.js";import{B as o}from"./BasicCard-CqlkOhEN.js";import{D as x}from"./Divider-DmCzfboL.js";import{T as u}from"./Title-BtpWiTqh.js";import"./preload-helper-D6kgxu3v.js";import"./index-xPPAwkqa.js";import"./keys-Bn9OnJNG.js";import"./_baseKeys-C9J5mjx4.js";import"./url-CjLlozXC.js";import"./index-Dh1-j7id.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-B1MrRJ4R.js";import"./blocks-DZ8JnCy8.js";import"./toString-CVs8Mghb.js";import"./isSymbol-BJU3Ap0N.js";import"./Links-Di3ref1C.js";import"./Link-5yu2VE_1.js";import"./BackLink-BbTtNyms.js";import"./useAnalytics-DiycOveU.js";import"./Button-B0lGS9Yl.js";import"./common-CHgM38n5.js";import"./Icon-CVQiKm8x.js";import"./EventBroker-C6JbZyIq.js";import"./FileLink-2ZTwsmEC.js";import"./url-DP5XKSqi.js";import"./Label-DLde4cNV.js";import"./Xmark-DNraUWUn.js";import"./YFMWrapper-CLdnkpWr.js";import"./HTML-BT2lxNFc.js";import"./ContentList-DgNaulT_.js";import"./Image-DOfOFFXN.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BLi7xIe9.js";import"./Buttons-1Dyp0vho.js";import"./Button-CDLGG3kw.js";import"./addComponentKeysets-BqPinelC.js";import"./Link-CQvORd5o.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CvRTupcD.js";import"./Col-BLf03zQD.js";import"./CardBase-CRNmmB3Y.js";import"./BackgroundImage-1CbS_8SV.js";import"./RouterLink-DjkJPzvG.js";import"./Tag-eZTOjpx2.js";import"./IconWrapper-CA56zlf0.js";import"./ToggleArrow-zhLzWwv0.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
